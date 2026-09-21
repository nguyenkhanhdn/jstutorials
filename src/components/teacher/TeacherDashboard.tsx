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
  Bookmark as BookmarkIcon,
  Flame,
  Zap,
  Clock
} from 'lucide-react';
import { MOCK_STUDENTS, MOCK_TOPIC_DIFFICULTY, MOCK_HIGH_ERROR_QUESTIONS } from '../../data/mockStudentAnalytics';
import { StudentProfile } from '../../types';

export const TeacherDashboard: React.FC = () => {
  const [students, setStudents] = useState<StudentProfile[]>(MOCK_STUDENTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRisk, setFilterRisk] = useState<'all' | 'at_risk' | 'safe'>('all');
  const [selectedStudent, setSelectedStudent] = useState<StudentProfile | null>(null);
  const [sentReminders, setSentReminders] = useState<Record<string, boolean>>({});

  const atRiskCount = students.filter(s => s.atRisk).length;
  const avgCompletion = Math.round(students.reduce((acc, s) => acc + s.overallProgress, 0) / students.length);
  const avgQuiz = Math.round(students.reduce((acc, s) => acc + s.averageQuizScore, 0) / students.length);

  const filteredStudents = students.filter(s => {
    const matchSearch = s.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        s.code.toLowerCase().includes(searchQuery.toLowerCase());
    const matchRisk = filterRisk === 'all' || (filterRisk === 'at_risk' ? s.atRisk : !s.atRisk);
    return matchSearch && matchRisk;
  });

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
              Learning Analytics & Cảnh báo sớm
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Dữ liệu học tập thời gian thực phục vụ đánh giá năng lực, phát hiện sinh viên cần can thiệp sớm và tinh chỉnh giáo án trước giờ lên lớp.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-3 rounded-2xl bg-white/10 border border-white/15 text-center">
              <div className="text-xs text-slate-300">Sĩ số lớp</div>
              <div className="text-xl font-black text-white">{students.length} SV</div>
            </div>
            <div className="px-4 py-3 rounded-2xl bg-rose-500/20 border border-rose-500/30 text-center">
              <div className="text-xs text-rose-300">Nguy cơ cao</div>
              <div className="text-xl font-black text-rose-400">{atRiskCount} SV</div>
            </div>
          </div>
        </div>
      </div>

      {/* Class Statistics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="text-xs font-semibold text-slate-500 mb-1">Tỷ lệ SV hoạt động tuần này</div>
          <div className="text-2xl font-black text-slate-900">88.5%</div>
          <div className="text-[11px] text-emerald-600 font-semibold mt-1 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> Tăng +6% so với tuần trước
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="text-xs font-semibold text-slate-500 mb-1">Tiến độ hoàn thành trung bình</div>
          <div className="text-2xl font-black text-slate-900">{avgCompletion}%</div>
          <div className="text-[11px] text-slate-500 mt-1">Đạt tiến độ kế hoạch học kỳ</div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="text-xs font-semibold text-slate-500 mb-1">Điểm Quiz trung bình toàn lớp</div>
          <div className="text-2xl font-black text-slate-900">{avgQuiz}%</div>
          <div className="text-[11px] text-indigo-600 font-semibold mt-1">Mục tiêu môn học: ≥ 70%</div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="text-xs font-semibold text-slate-500 mb-1">Cảnh báo tụt hậu (At-Risk)</div>
          <div className="text-2xl font-black text-rose-600">{atRiskCount} sinh viên</div>
          <div className="text-[11px] text-rose-600 font-semibold mt-1">Cần trợ giảng phụ đạo thêm</div>
        </div>
      </div>

      {/* Section 1: At-Risk Early Warning */}
      <div className="bg-rose-50/60 border border-rose-200 rounded-3xl p-6 sm:p-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-rose-200">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-rose-950 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-rose-600" />
              <span>Cảnh báo sớm: Sinh viên có dấu hiệu tụt hậu hoặc có nguy cơ thi rớt</span>
            </h2>
            <p className="text-xs text-rose-800 mt-0.5">
              Quy tắc phát hiện: Không đăng nhập &gt; 5 ngày HOẶC Quiz thử lại &gt; 3 lần vẫn &lt; 60% HOẶC tiến độ &lt; 50% lớp
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          {students.filter(s => s.atRisk).map(st => (
            <div key={st.id} className="p-4 rounded-2xl bg-white border border-rose-200 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={st.avatar} alt={st.fullName} className="w-10 h-10 rounded-full border border-slate-200" />
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{st.fullName}</div>
                    <div className="text-xs text-slate-500">{st.code} • Hoạt động: {st.lastActive}</div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-700">
                  Cần trợ giúp
                </span>
              </div>

              <div className="p-2.5 bg-rose-50 rounded-xl text-xs text-rose-900 border border-rose-100">
                <strong>Nguyên nhân:</strong> {st.atRiskReason}
              </div>

              <div className="flex items-center justify-between pt-1 text-xs">
                <div className="text-slate-600">
                  Tiến độ: <strong>{st.overallProgress}%</strong> | Quiz: <strong>{st.averageQuizScore}%</strong>
                </div>
                <button
                  onClick={() => handleSendReminder(st.id)}
                  disabled={sentReminders[st.id]}
                  className="px-3 py-1.5 bg-rose-600 hover:bg-rose-700 disabled:bg-emerald-600 text-white rounded-lg font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{sentReminders[st.id] ? 'Đã gửi lời nhắc' : 'Gửi bài tập trợ giúp'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: Topic Difficulty Heatmap & High Error Questions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Topic Difficulty (Left 7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-indigo-600" />
                <span>Bản đồ độ khó & Nút thắt kiến thức (Bottlenecks)</span>
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">Xác định nội dung sinh viên vấp ngã nhiều nhất để giảng viên điều chỉnh bài giảng</p>
            </div>
          </div>

          <div className="space-y-3 pt-1">
            {MOCK_TOPIC_DIFFICULTY.map(t => (
              <div key={t.topicId} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span>{t.topicName}</span>
                    {t.isBottleneck && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">
                        Nút thắt (Bottleneck)
                      </span>
                    )}
                  </div>
                  <span className="text-slate-500 font-semibold">{t.moduleName}</span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-slate-700 py-1">
                  <div>Tỷ lệ làm đúng: <strong>{100 - t.errorRate}%</strong></div>
                  <div>Điểm Quiz TB: <strong>{t.avgScore}%</strong></div>
                  <div>SV Bookmark: <strong>{t.bookmarkCount} lượt</strong></div>
                </div>

                <div className="bg-amber-50 p-2.5 rounded-lg border border-amber-200/80 text-amber-900 text-[11px]">
                  💡 <strong>Khuyến nghị sư phạm cho thầy cô:</strong> {t.recommendation}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* High Error Questions (Right 5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
          <div className="pb-3 border-b border-slate-100">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-rose-600" />
              <span>Câu hỏi có tỷ lệ sai cao nhất</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">Phân tích lỗi tư duy học thuật</p>
          </div>

          <div className="space-y-3.5">
            {MOCK_HIGH_ERROR_QUESTIONS.map(q => (
              <div key={q.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2 text-xs">
                <div className="flex items-center justify-between font-bold">
                  <span className="text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                    Tỷ lệ làm sai: {q.errorRate}%
                  </span>
                </div>

                <p className="font-semibold text-slate-900">
                  {q.questionPrompt}
                </p>

                <div className="text-slate-600 space-y-0.5 text-[11px]">
                  <div>Đáp án sinh viên hay chọn sai: <span className="text-rose-600 line-through">{q.commonWrongAnswer}</span></div>
                  <div>Đáp án đúng: <span className="text-emerald-700 font-bold">{q.correctAnswer}</span></div>
                </div>

                <div className="text-slate-600 bg-white p-2 rounded-lg border border-slate-200 text-[11px]">
                  <strong>Nguyên nhân nhận thức:</strong> {q.rootCause}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Section 3: Student Directory */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Users className="w-5 h-5 text-indigo-600" />
              <span>Danh sách theo dõi tiến độ sinh viên</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">Chi tiết năng lực, chuẩn đầu ra, điểm tích lũy của từng sinh viên</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Tìm sinh viên, mã số..."
                className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>

            <select
              value={filterRisk}
              onChange={e => setFilterRisk(e.target.value as any)}
              className="text-xs border border-slate-200 rounded-xl px-3 py-2 bg-slate-50 focus:outline-none font-semibold text-slate-700"
            >
              <option value="all">Tất cả sinh viên</option>
              <option value="at_risk">Chỉ SV có nguy cơ</option>
              <option value="safe">Tiến độ tốt</option>
            </select>
          </div>
        </div>

        {/* Student Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-slate-50 text-slate-600 uppercase font-bold border-y border-slate-200">
              <tr>
                <th className="py-3 px-4">Sinh viên</th>
                <th className="py-3 px-4">Tiến độ khóa</th>
                <th className="py-3 px-4">Điểm Quiz TB</th>
                <th className="py-3 px-4">XP & Chuỗi</th>
                <th className="py-3 px-4">Bookmark</th>
                <th className="py-3 px-4">Trạng thái</th>
                <th className="py-3 px-4 text-right">Chi tiết</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredStudents.map(st => (
                <tr key={st.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-3">
                      <img src={st.avatar} alt={st.fullName} className="w-8 h-8 rounded-full border border-slate-200" />
                      <div>
                        <div className="font-bold text-slate-900">{st.fullName}</div>
                        <div className="text-[11px] text-slate-500 font-mono">{st.code}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="w-32">
                      <div className="flex justify-between font-semibold text-[11px] mb-1">
                        <span>{st.overallProgress}%</span>
                        <span className="text-slate-400">{st.completedLessons}/{st.totalLessons}</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${st.overallProgress < 40 ? 'bg-rose-500' : 'bg-indigo-600'}`}
                          style={{ width: `${st.overallProgress}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className={`font-bold px-2 py-0.5 rounded ${
                      st.averageQuizScore < 60 ? 'bg-rose-100 text-rose-700' : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      {st.averageQuizScore}%
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="text-slate-700">
                      <strong>{st.xp} XP</strong> • {st.streakDays} ngày
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="text-slate-600 font-medium">{st.bookmarkCount} mục</span>
                  </td>
                  <td className="py-3.5 px-4">
                    {st.atRisk ? (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-700">
                        Nguy cơ tụt hậu
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                        Tiến độ ổn định
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={() => setSelectedStudent(st)}
                      className="p-1.5 text-slate-400 hover:text-indigo-600 rounded-lg hover:bg-slate-100 transition-colors"
                      title="Xem hồ sơ năng lực chi tiết"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

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
                className="text-slate-400 hover:text-slate-600 text-sm font-bold p-1 rounded-lg"
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
                  className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-xl font-semibold"
                >
                  Đóng
                </button>
                <button
                  onClick={() => {
                    handleSendReminder(selectedStudent.id);
                    setSelectedStudent(null);
                  }}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold shadow-xs flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Gửi bài luyện tập bổ sung</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
