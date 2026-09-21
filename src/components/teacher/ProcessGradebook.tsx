import React, { useState } from 'react';
import { 
  Award, 
  Search, 
  Download, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle2, 
  FileSpreadsheet, 
  Filter, 
  HelpCircle,
  SlidersHorizontal,
  Edit3,
  Check,
  RotateCcw
} from 'lucide-react';
import { StudentProfile } from '../../types';

interface ProcessGradebookProps {
  students: StudentProfile[];
}

interface StudentGradeRecord {
  studentId: string;
  studentCode: string;
  fullName: string;
  attendanceScore: number; // 10%
  labScore: number;        // 30%
  quizScore: number;       // 20%
  projectScore: number;    // 40%
  finalProcessScore: number;
  letterGrade: string;
  classification: 'Xuất sắc' | 'Giỏi' | 'Khá' | 'Trung bình' | 'Cảnh báo rớt môn';
  note: string;
}

export const ProcessGradebook: React.FC<ProcessGradebookProps> = ({ students }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRank, setFilterRank] = useState<string>('all');
  const [editingStudentId, setEditingStudentId] = useState<string | null>(null);

  // Initialize initial grades calculated from student data
  const [grades, setGrades] = useState<Record<string, StudentGradeRecord>>(() => {
    const initial: Record<string, StudentGradeRecord> = {};
    students.forEach(s => {
      // Calculate realistic grades based on student activity
      const attendance = Math.min(10, Math.round((s.overallProgress / 10) * 1.05 * 10) / 10);
      const lab = Math.min(10, Math.round((s.completedLessons / 20 * 10) * 10) / 10);
      const quiz = Math.round((s.averageQuizScore / 10) * 10) / 10;
      const project = s.atRisk ? 4.5 : Math.min(10, Math.round((quiz * 0.4 + lab * 0.6) * 10) / 10);
      
      const finalScore = Math.round((attendance * 0.1 + lab * 0.3 + quiz * 0.2 + project * 0.4) * 10) / 10;

      let classification: StudentGradeRecord['classification'] = 'Khá';
      let letterGrade = 'B';

      if (finalScore >= 9.0) {
        classification = 'Xuất sắc';
        letterGrade = 'A+';
      } else if (finalScore >= 8.0) {
        classification = 'Giỏi';
        letterGrade = 'A';
      } else if (finalScore >= 6.5) {
        classification = 'Khá';
        letterGrade = 'B';
      } else if (finalScore >= 5.0) {
        classification = 'Trung bình';
        letterGrade = 'C';
      } else {
        classification = 'Cảnh báo rớt môn';
        letterGrade = 'F';
      }

      initial[s.id] = {
        studentId: s.id,
        studentCode: s.code,
        fullName: s.fullName,
        attendanceScore: attendance,
        labScore: lab,
        quizScore: quiz,
        projectScore: project,
        finalProcessScore: finalScore,
        letterGrade,
        classification,
        note: s.atRisk ? 'Tiến độ chậm, nộp thiếu bài Lab' : 'Hoàn thành tốt các chỉ tiêu'
      };
    });
    return initial;
  });

  const gradeList = Object.values(grades);

  const filteredGrades = gradeList.filter(g => {
    const matchSearch = g.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        g.studentCode.toLowerCase().includes(searchQuery.toLowerCase());
    const matchRank = filterRank === 'all' || g.classification === filterRank;
    return matchSearch && matchRank;
  });

  const avgFinalScore = Math.round((gradeList.reduce((acc, g) => acc + g.finalProcessScore, 0) / gradeList.length) * 10) / 10;
  const passCount = gradeList.filter(g => g.finalProcessScore >= 5.0).length;
  const failCount = gradeList.length - passCount;
  const passRate = Math.round((passCount / gradeList.length) * 100);

  const handleUpdateGrade = (
    studentId: string, 
    field: 'attendanceScore' | 'labScore' | 'quizScore' | 'projectScore', 
    val: number
  ) => {
    setGrades(prev => {
      const target = prev[studentId];
      if (!target) return prev;
      const updated = { ...target, [field]: val };
      const finalScore = Math.round((
        updated.attendanceScore * 0.1 + 
        updated.labScore * 0.3 + 
        updated.quizScore * 0.2 + 
        updated.projectScore * 0.4
      ) * 10) / 10;

      let classification: StudentGradeRecord['classification'] = 'Khá';
      let letterGrade = 'B';

      if (finalScore >= 9.0) {
        classification = 'Xuất sắc';
        letterGrade = 'A+';
      } else if (finalScore >= 8.0) {
        classification = 'Giỏi';
        letterGrade = 'A';
      } else if (finalScore >= 6.5) {
        classification = 'Khá';
        letterGrade = 'B';
      } else if (finalScore >= 5.0) {
        classification = 'Trung bình';
        letterGrade = 'C';
      } else {
        classification = 'Cảnh báo rớt môn';
        letterGrade = 'F';
      }

      return {
        ...prev,
        [studentId]: {
          ...updated,
          finalProcessScore: finalScore,
          letterGrade,
          classification
        }
      };
    });
  };

  const handleExportCSV = () => {
    const headers = ['Mã SV', 'Họ và tên', 'Chuyên cần (10%)', 'Thực hành Lab (30%)', 'Quiz trắc nghiệm (20%)', 'Đồ án Assignment (40%)', 'Điểm quá trình (Hệ 10)', 'Điểm chữ', 'Xếp loại', 'Ghi chú'];
    const rows = gradeList.map(g => [
      g.studentCode,
      `"${g.fullName}"`,
      g.attendanceScore,
      g.labScore,
      g.quizScore,
      g.projectScore,
      g.finalProcessScore,
      g.letterGrade,
      g.classification,
      `"${g.note}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Bang_Diem_Qua_Trinh_JS_WD18301_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      
      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="text-xs font-semibold text-slate-500 mb-1">Điểm Quá Trình Trung Bình</div>
          <div className="text-3xl font-black text-slate-900">{avgFinalScore} / 10</div>
          <div className="text-xs text-emerald-600 font-semibold mt-1 flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" /> Thang điểm chuẩn Cao đẳng CNTT
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="text-xs font-semibold text-slate-500 mb-1">Tỷ lệ đủ điều kiện dự thi</div>
          <div className="text-3xl font-black text-emerald-700">{passRate}%</div>
          <div className="text-xs text-slate-500 mt-1">{passCount} / {gradeList.length} sinh viên đạt $\ge 5.0$</div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="text-xs font-semibold text-slate-500 mb-1">Cảnh báo rớt môn (&lt; 5.0)</div>
          <div className="text-3xl font-black text-rose-600">{failCount} SV</div>
          <div className="text-xs text-rose-600 font-semibold mt-1 flex items-center gap-1">
            <AlertTriangle className="w-3.5 h-3.5" /> Cần tổ chức phụ đạo gấp
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="text-xs font-semibold text-slate-500 mb-1">Công thức tính điểm</div>
            <div className="text-xs font-medium text-slate-700 leading-relaxed">
              10% Chuyên cần + 30% Lab + 20% Quiz + 40% Mini Project
            </div>
          </div>
          <button
            onClick={handleExportCSV}
            className="w-full mt-2 py-2 px-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-xs active:scale-95"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Xuất file Excel / CSV</span>
          </button>
        </div>
      </div>

      {/* Filter and Table Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <h2 className="text-lg font-black text-slate-900">
              Bảng Tổng Hợp Đánh Giá Quá Trình (Continuous Assessment Gradebook)
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Hệ thống tự động chấm điểm và tổng hợp từ tiến độ làm bài, kết quả Test Cases Lab và các bài Quiz đánh giá.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Tìm mã SV hoặc họ tên..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="pl-8 pr-3 py-1.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-indigo-600 bg-slate-50 w-48 sm:w-64"
              />
            </div>

            <select
              value={filterRank}
              onChange={e => setFilterRank(e.target.value)}
              className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs bg-slate-50 font-semibold text-slate-700"
            >
              <option value="all">Tất cả xếp loại</option>
              <option value="Xuất sắc">Xuất sắc (A+)</option>
              <option value="Giỏi">Giỏi (A)</option>
              <option value="Khá">Khá (B)</option>
              <option value="Trung bình">Trung bình (C)</option>
              <option value="Cảnh báo rớt môn">Cảnh báo rớt môn (F)</option>
            </select>
          </div>
        </div>

        {/* Grade Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-100">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50/80 text-slate-600 font-bold border-b border-slate-200">
                <th className="py-3 px-4">Mã SV</th>
                <th className="py-3 px-4">Họ và tên</th>
                <th className="py-3 px-3 text-center">Chuyên cần (10%)</th>
                <th className="py-3 px-3 text-center">Thực hành Lab (30%)</th>
                <th className="py-3 px-3 text-center">Quiz trắc nghiệm (20%)</th>
                <th className="py-3 px-3 text-center">Mini Project (40%)</th>
                <th className="py-3 px-3 text-center">Tổng kết quá trình</th>
                <th className="py-3 px-3 text-center">Điểm chữ</th>
                <th className="py-3 px-4">Xếp loại</th>
                <th className="py-3 px-3 text-center">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredGrades.map(g => {
                const isEditing = editingStudentId === g.studentId;
                return (
                  <tr key={g.studentId} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-indigo-700">
                      {g.studentCode}
                    </td>
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      {g.fullName}
                    </td>

                    {/* Attendance */}
                    <td className="py-3.5 px-3 text-center">
                      {isEditing ? (
                        <input
                          type="number"
                          step="0.1"
                          min="0"
                          max="10"
                          value={g.attendanceScore}
                          onChange={e => handleUpdateGrade(g.studentId, 'attendanceScore', parseFloat(e.target.value) || 0)}
                          className="w-14 p-1 text-center font-bold border rounded bg-white"
                        />
                      ) : (
                        <span className="font-semibold text-slate-700">{g.attendanceScore}</span>
                      )}
                    </td>

                    {/* Lab */}
                    <td className="py-3.5 px-3 text-center">
                      {isEditing ? (
                        <input
                          type="number"
                          step="0.1"
                          min="0"
                          max="10"
                          value={g.labScore}
                          onChange={e => handleUpdateGrade(g.studentId, 'labScore', parseFloat(e.target.value) || 0)}
                          className="w-14 p-1 text-center font-bold border rounded bg-white"
                        />
                      ) : (
                        <span className="font-semibold text-slate-700">{g.labScore}</span>
                      )}
                    </td>

                    {/* Quiz */}
                    <td className="py-3.5 px-3 text-center">
                      {isEditing ? (
                        <input
                          type="number"
                          step="0.1"
                          min="0"
                          max="10"
                          value={g.quizScore}
                          onChange={e => handleUpdateGrade(g.studentId, 'quizScore', parseFloat(e.target.value) || 0)}
                          className="w-14 p-1 text-center font-bold border rounded bg-white"
                        />
                      ) : (
                        <span className="font-semibold text-slate-700">{g.quizScore}</span>
                      )}
                    </td>

                    {/* Project */}
                    <td className="py-3.5 px-3 text-center">
                      {isEditing ? (
                        <input
                          type="number"
                          step="0.1"
                          min="0"
                          max="10"
                          value={g.projectScore}
                          onChange={e => handleUpdateGrade(g.studentId, 'projectScore', parseFloat(e.target.value) || 0)}
                          className="w-14 p-1 text-center font-bold border rounded bg-white"
                        />
                      ) : (
                        <span className="font-semibold text-slate-700">{g.projectScore}</span>
                      )}
                    </td>

                    {/* Final Score */}
                    <td className="py-3.5 px-3 text-center">
                      <span className={`text-sm font-black px-2.5 py-1 rounded-lg ${
                        g.finalProcessScore >= 8.0 ? 'bg-emerald-100 text-emerald-900' :
                        g.finalProcessScore >= 5.0 ? 'bg-slate-100 text-slate-900' :
                        'bg-rose-100 text-rose-900 font-extrabold'
                      }`}>
                        {g.finalProcessScore}
                      </span>
                    </td>

                    {/* Letter Grade */}
                    <td className="py-3.5 px-3 text-center font-bold text-slate-700">
                      {g.letterGrade}
                    </td>

                    {/* Classification */}
                    <td className="py-3.5 px-4">
                      <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                        g.classification === 'Xuất sắc' ? 'bg-purple-100 text-purple-900' :
                        g.classification === 'Giỏi' ? 'bg-emerald-100 text-emerald-900' :
                        g.classification === 'Khá' ? 'bg-blue-100 text-blue-900' :
                        g.classification === 'Trung bình' ? 'bg-amber-100 text-amber-900' :
                        'bg-rose-100 text-rose-900'
                      }`}>
                        {g.classification}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 px-3 text-center">
                      <button
                        onClick={() => setEditingStudentId(isEditing ? null : g.studentId)}
                        className={`p-1.5 rounded-lg border text-xs font-semibold transition-colors ${
                          isEditing 
                            ? 'bg-emerald-600 text-white border-emerald-600' 
                            : 'text-slate-600 hover:bg-slate-100 border-slate-200'
                        }`}
                        title={isEditing ? 'Lưu điểm' : 'Sửa điểm thủ công'}
                      >
                        {isEditing ? <Check className="w-3.5 h-3.5" /> : <Edit3 className="w-3.5 h-3.5" />}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
