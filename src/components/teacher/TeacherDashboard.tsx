import React, { useState } from 'react';
import { 
  Users, 
  AlertTriangle, 
  TrendingUp, 
  CheckCircle2, 
  HelpCircle, 
  BookOpen, 
  Search, 
  ChevronRight, 
  Eye, 
  Send, 
  Sparkles,
  BarChart3,
  Flame,
  Zap,
  Clock,
  FileSpreadsheet,
  BrainCircuit,
  ShieldAlert,
  Brain,
  BarChart2,
  FileText,
  GitBranch
} from 'lucide-react';
import { MOCK_STUDENTS } from '../../data/mockStudentAnalytics';
import { StudentProfile } from '../../types';
import { ProcessGradebook } from './ProcessGradebook';
import { ClassActivityOverview } from './ClassActivityOverview';
import { CompetencyMatrixView } from './CompetencyMatrixView';
import { EarlyWarningInterventionView } from './EarlyWarningInterventionView';
import { MisconceptionDiagnosticView } from './MisconceptionDiagnosticView';
import { CohortBenchmarkView } from './CohortBenchmarkView';
import { TeachingReportModal } from './TeachingReportModal';
import { AdaptiveLearningView } from './AdaptiveLearningView';

export type TeacherViewTab = 
  | 'overview' 
  | 'competency' 
  | 'intervention' 
  | 'misconception' 
  | 'cohort' 
  | 'gradebook'
  | 'adaptive';

export const TeacherDashboard: React.FC = () => {
  const [activeTeacherTab, setActiveTeacherTab] = useState<TeacherViewTab>('overview');
  const [students, setStudents] = useState<StudentProfile[]>(MOCK_STUDENTS);
  const [selectedStudent, setSelectedStudent] = useState<StudentProfile | null>(null);
  const [sentReminders, setSentReminders] = useState<Record<string, boolean>>({});
  const [showReportModal, setShowReportModal] = useState(false);

  const atRiskCount = students.filter(s => s.atRisk).length;

  const handleSendReminder = (studentId: string) => {
    setSentReminders(prev => ({ ...prev, [studentId]: true }));
    setTimeout(() => {
      alert('Đã gửi thông báo kèm bài tập ôn tập gợi ý (Spaced Review) tới tài khoản sinh viên!');
    }, 100);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Top Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-emerald-400 text-slate-950 uppercase tracking-wider">
                Bảng điều khiển Giảng viên (Teacher Cockpit)
              </span>
              <span className="text-xs text-slate-300">Lớp: WD18301 • Cao đẳng FPT Polytech</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              Advanced Learning Analytics & Điều Phối Can Thiệp
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Hệ thống phân tích học tập đa chiều: Ma trận Bloom LO, chẩn đoán lỗi nhận thức, hệ thống cảnh báo sớm EWS và bảng điểm quá trình liên tục.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="px-4 py-3 rounded-2xl bg-white/10 border border-white/15 text-center">
              <div className="text-xs text-slate-300">Sĩ số lớp</div>
              <div className="text-xl font-black text-white">{students.length} SV</div>
            </div>
            <div 
              onClick={() => setActiveTeacherTab('intervention')}
              className="px-4 py-3 rounded-2xl bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/30 text-center cursor-pointer transition-colors"
              title="Xem danh sách sinh viên có nguy cơ"
            >
              <div className="text-xs text-rose-300">Nguy cơ cao</div>
              <div className="text-xl font-black text-rose-400">{atRiskCount} SV</div>
            </div>

            <button
              onClick={() => setShowReportModal(true)}
              className="px-4 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs flex items-center gap-2 transition-all shadow-md cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Xuất Báo Cáo Sư Phạm</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sub-navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto">
        
        {/* Tab 1: Overview */}
        <button
          onClick={() => setActiveTeacherTab('overview')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all shrink-0 cursor-pointer ${
            activeTeacherTab === 'overview'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
          }`}
        >
          <BarChart3 className="w-4 h-4" />
          <span>1. Tổng Quan & Nhịp Độ Học</span>
        </button>

        {/* Tab 2: Bloom LO Matrix */}
        <button
          onClick={() => setActiveTeacherTab('competency')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all shrink-0 cursor-pointer ${
            activeTeacherTab === 'competency'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
          }`}
        >
          <BrainCircuit className="w-4 h-4 text-purple-600" />
          <span>2. Ma Trận Bloom & Chuẩn LOs</span>
          <span className="px-1.5 py-0.5 rounded text-[10px] bg-purple-100 text-purple-800 font-extrabold">
            Bloom Matrix
          </span>
        </button>

        {/* Tab 3: EWS Intervention */}
        <button
          onClick={() => setActiveTeacherTab('intervention')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all shrink-0 cursor-pointer ${
            activeTeacherTab === 'intervention'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
          }`}
        >
          <ShieldAlert className="w-4 h-4 text-rose-500" />
          <span>3. Cảnh Báo EWS & Can Thiệp Sớm</span>
          {atRiskCount > 0 && (
            <span className="px-1.5 py-0.5 rounded text-[10px] bg-rose-100 text-rose-800 font-extrabold">
              {atRiskCount} SV
            </span>
          )}
        </button>

        {/* Tab 4: Cognitive Misconception */}
        <button
          onClick={() => setActiveTeacherTab('misconception')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all shrink-0 cursor-pointer ${
            activeTeacherTab === 'misconception'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
          }`}
        >
          <Brain className="w-4 h-4 text-amber-500" />
          <span>4. Chẩn Đoán Lỗi Nhận Thức</span>
          <span className="px-1.5 py-0.5 rounded text-[10px] bg-amber-100 text-amber-800 font-extrabold">
            AI Diagnosis
          </span>
        </button>

        {/* Tab 5: Cohort Benchmark */}
        <button
          onClick={() => setActiveTeacherTab('cohort')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all shrink-0 cursor-pointer ${
            activeTeacherTab === 'cohort'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
          }`}
        >
          <BarChart2 className="w-4 h-4 text-blue-500" />
          <span>5. Đối Sánh Liên Khóa Học</span>
          <span className="px-1.5 py-0.5 rounded text-[10px] bg-blue-100 text-blue-800 font-extrabold">
            4 Khóa
          </span>
        </button>

        {/* Tab 6: Gradebook */}
        <button
          onClick={() => setActiveTeacherTab('gradebook')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all shrink-0 cursor-pointer ${
            activeTeacherTab === 'gradebook'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
          }`}
        >
          <FileSpreadsheet className="w-4 h-4 text-emerald-500" />
          <span>6. Bảng Điểm Quá Trình (Gradebook)</span>
        </button>

        {/* Tab 7: Adaptive Learning & DDA */}
        <button
          onClick={() => setActiveTeacherTab('adaptive')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all shrink-0 cursor-pointer ${
            activeTeacherTab === 'adaptive'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
          }`}
        >
          <GitBranch className="w-4 h-4 text-indigo-500" />
          <span>7. Học Tập Thích Ứng (Adaptive Learning)</span>
          <span className="px-1.5 py-0.5 rounded text-[10px] bg-indigo-100 text-indigo-800 font-extrabold">
            DDA Engine
          </span>
        </button>

      </div>

      {/* Tab Contents */}
      {activeTeacherTab === 'overview' && (
        <ClassActivityOverview
          students={students}
          onSelectStudent={st => setSelectedStudent(st)}
          onSendReminder={handleSendReminder}
          sentReminders={sentReminders}
          onNavigateToTab={tab => setActiveTeacherTab(tab as TeacherViewTab)}
        />
      )}

      {activeTeacherTab === 'competency' && (
        <CompetencyMatrixView />
      )}

      {activeTeacherTab === 'intervention' && (
        <EarlyWarningInterventionView students={students} />
      )}

      {activeTeacherTab === 'misconception' && (
        <MisconceptionDiagnosticView />
      )}

      {activeTeacherTab === 'cohort' && (
        <CohortBenchmarkView />
      )}

      {activeTeacherTab === 'gradebook' && (
        <ProcessGradebook students={students} />
      )}

      {activeTeacherTab === 'adaptive' && (
        <AdaptiveLearningView />
      )}

      {/* Student Drilldown Modal */}
      {selectedStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-3">
                <img src={selectedStudent.avatar} alt={selectedStudent.fullName} className="w-12 h-12 rounded-full border border-slate-200" />
                <div>
                  <h3 className="font-bold text-slate-900 text-base">{selectedStudent.fullName}</h3>
                  <p className="text-xs text-slate-500 font-mono">{selectedStudent.code} • {selectedStudent.email}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedStudent(null)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold p-1 rounded-lg cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-slate-500">Tiến độ khóa học</div>
                  <div className="text-lg font-black text-slate-900">{selectedStudent.overallProgress}%</div>
                  <div className="text-[11px] text-slate-400">{selectedStudent.completedLessons}/75 bài học</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-slate-500">Điểm Quiz trung bình</div>
                  <div className="text-lg font-black text-slate-900">{selectedStudent.averageQuizScore}%</div>
                  <div className="text-[11px] text-slate-400">XP: {selectedStudent.xp} điểm</div>
                </div>
              </div>

              {selectedStudent.weakObjectives.length > 0 && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-950 space-y-1">
                  <div className="font-bold">Lỗ hổng kiến thức cần bồi dưỡng:</div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {selectedStudent.weakObjectives.map(lo => (
                      <span key={lo} className="px-2 py-0.5 rounded bg-rose-200/60 font-mono font-bold text-rose-900">
                        {lo}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1 text-slate-700">
                <div><strong>Lần truy cập gần nhất:</strong> {selectedStudent.lastActive}</div>
                <div><strong>Lớp học:</strong> {selectedStudent.classGroup}</div>
                <div><strong>Số lượng Bookmarks cá nhân:</strong> {selectedStudent.bookmarkCount} mục</div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  onClick={() => setSelectedStudent(null)}
                  className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-xl font-semibold cursor-pointer"
                >
                  Đóng
                </button>
                <button
                  onClick={() => {
                    handleSendReminder(selectedStudent.id);
                    setSelectedStudent(null);
                  }}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold shadow-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Gửi bài luyện tập bổ sung</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Teaching Report Modal */}
      <TeachingReportModal
        isOpen={showReportModal}
        onClose={() => setShowReportModal(false)}
        students={students}
      />

    </div>
  );
};
