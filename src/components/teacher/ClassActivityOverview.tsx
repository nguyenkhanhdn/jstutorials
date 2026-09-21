import React, { useState } from 'react';
import { 
  Users, 
  TrendingUp, 
  AlertTriangle, 
  Send, 
  BarChart3, 
  HelpCircle, 
  Search, 
  Eye, 
  Clock, 
  Flame, 
  Calendar,
  Sparkles,
  ArrowUpRight,
  BookOpen
} from 'lucide-react';
import { StudentProfile } from '../../types';
import { MOCK_TOPIC_DIFFICULTY, MOCK_HIGH_ERROR_QUESTIONS } from '../../data/mockStudentAnalytics';
import { 
  MOCK_ACTIVITY_TIMELINE, 
  MOCK_STUDY_HOURS_HEATMAP, 
  MOCK_GRADE_DISTRIBUTION 
} from '../../data/advancedAnalyticsData';

interface ClassActivityOverviewProps {
  students: StudentProfile[];
  onSelectStudent: (student: StudentProfile) => void;
  onSendReminder: (studentId: string) => void;
  sentReminders: Record<string, boolean>;
  onNavigateToTab?: (tab: string) => void;
}

export const ClassActivityOverview: React.FC<ClassActivityOverviewProps> = ({
  students,
  onSelectStudent,
  onSendReminder,
  sentReminders,
  onNavigateToTab
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRisk, setFilterRisk] = useState<'all' | 'at_risk' | 'safe'>('all');

  const atRiskCount = students.filter(s => s.atRisk).length;
  const avgCompletion = Math.round(students.reduce((acc, s) => acc + s.overallProgress, 0) / students.length);
  const avgQuiz = Math.round(students.reduce((acc, s) => acc + s.averageQuizScore, 0) / students.length);

  const filteredStudents = students.filter(s => {
    const matchSearch = s.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        s.code.toLowerCase().includes(searchQuery.toLowerCase());
    const matchRisk = filterRisk === 'all' || (filterRisk === 'at_risk' ? s.atRisk : !s.atRisk);
    return matchSearch && matchRisk;
  });

  return (
    <div className="space-y-8">
      
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

        <div 
          onClick={() => onNavigateToTab?.('intervention')}
          className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-rose-300 transition-all cursor-pointer group"
        >
          <div className="text-xs font-semibold text-slate-500 mb-1 flex items-center justify-between">
            <span>Cảnh báo tụt hậu (At-Risk)</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-rose-600 transition-colors" />
          </div>
          <div className="text-2xl font-black text-rose-600">{atRiskCount} sinh viên</div>
          <div className="text-[11px] text-rose-600 font-semibold mt-1">Bấm để xem kế hoạch can thiệp</div>
        </div>
      </div>

      {/* Advanced Learning Rhythm & Distribution Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Weekly Activity Timeline & Heatmap (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
            <div>
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-indigo-600" />
                <span>Nhịp Độ Hoạt Động & Lượng Bài Nộp Trong Tuần</span>
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">Tần suất làm bài tập tương tác và ôn tập Flashcard</p>
            </div>
            <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-xl border border-indigo-100 self-start sm:self-auto">
              Đỉnh điểm: Thứ 4 & Thứ 6
            </span>
          </div>

          {/* Activity Bar Chart (SVG-less CSS Grid) */}
          <div className="space-y-2">
            <div className="flex items-end justify-between gap-2 h-36 pt-4 px-2">
              {MOCK_ACTIVITY_TIMELINE.map(d => {
                const heightPercent = Math.round((d.submissions / 65) * 100);
                const isPeak = d.submissions > 50;

                return (
                  <div key={d.day} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
                    <span className="text-[10px] font-bold text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      {d.submissions} bài
                    </span>
                    <div className="w-full max-w-[36px] bg-slate-100 rounded-t-xl overflow-hidden h-full flex items-end">
                      <div 
                        className={`w-full rounded-t-xl transition-all ${
                          isPeak ? 'bg-indigo-600 group-hover:bg-indigo-700' : 'bg-indigo-400 group-hover:bg-indigo-500'
                        }`}
                        style={{ height: `${heightPercent}%` }}
                      />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-600 whitespace-nowrap">
                      {d.day}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-100 text-center text-xs">
              <div className="p-2 rounded-xl bg-slate-50">
                <div className="text-slate-500 text-[11px]">Tổng bài nộp tuần</div>
                <div className="font-black text-slate-900 text-sm">285 lượt</div>
              </div>
              <div className="p-2 rounded-xl bg-slate-50">
                <div className="text-slate-500 text-[11px]">Thời gian học TB/ngày</div>
                <div className="font-black text-slate-900 text-sm">1.8 giờ</div>
              </div>
              <div className="p-2 rounded-xl bg-slate-50">
                <div className="text-slate-500 text-[11px]">SV hoạt động cao nhất</div>
                <div className="font-black text-indigo-600 text-sm">31/32 SV</div>
              </div>
            </div>
          </div>

          {/* Golden Study Hours Bar */}
          <div className="pt-2 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-800">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-500" />
                <span>Khung giờ học tập tập trung (Golden Hours):</span>
              </span>
              <span className="text-[11px] text-amber-700 font-semibold">Tự học nhiều nhất: 19:00 - 22:30</span>
            </div>

            <div className="space-y-1.5">
              {MOCK_STUDY_HOURS_HEATMAP.map(h => (
                <div key={h.hourRange} className="flex items-center gap-3 text-xs">
                  <div className="w-24 text-[11px] font-mono text-slate-500 shrink-0">{h.hourRange}</div>
                  <div className="w-36 text-[11px] font-semibold text-slate-700 truncate">{h.label}</div>
                  <div className="flex-1 bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${h.percentage > 80 ? 'bg-amber-500' : 'bg-slate-400'}`}
                      style={{ width: `${h.percentage}%` }}
                    />
                  </div>
                  <div className="w-12 text-right font-bold text-slate-800 text-[11px] shrink-0">
                    {h.count} SV
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Grade Distribution & Quick At-Risk Alert (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-5">
          <div className="pb-3 border-b border-slate-100">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-emerald-600" />
              <span>Phổ Điểm Quá Trình & Phân Hóa Năng Lực</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">Biểu đồ chuẩn hóa phân bố điểm số toàn lớp</p>
          </div>

          {/* Grade Distribution Breakdown */}
          <div className="space-y-3">
            {MOCK_GRADE_DISTRIBUTION.map(g => (
              <div key={g.range} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-700">{g.range}</span>
                  <div className="font-bold text-slate-900">
                    <span>{g.count} SV</span>
                    <span className="text-slate-400 ml-1.5">({g.percentage}%)</span>
                  </div>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${g.color}`}
                    style={{ width: `${g.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Pedagogical Insight */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
            <div className="font-bold text-slate-800 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>Nhận định sư phạm của hệ thống:</span>
            </div>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              Phổ điểm có dạng chuẩn nghiêng phải (Right-skewed), <strong>54% sinh viên</strong> đạt mức Giỏi và Xuất sắc. Tuy nhiên nhóm <strong>9% có nguy cơ rớt môn</strong> đang bị tụt lại chủ yếu ở tuần thứ 3 (Module Mảng và Biến).
            </p>
          </div>

          <button
            onClick={() => onNavigateToTab?.('gradebook')}
            className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
          >
            <span>Mở Bảng Điểm Quá Trình Chi Tiết</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
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

          <button
            onClick={() => onNavigateToTab?.('intervention')}
            className="px-3.5 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-xs"
          >
            <span>Quản lý can thiệp EWS</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
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
                  onClick={() => onSendReminder(st.id)}
                  disabled={sentReminders[st.id]}
                  className="px-3 py-1.5 bg-rose-600 hover:bg-rose-700 disabled:bg-emerald-600 text-white rounded-lg font-semibold flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer"
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
                      onClick={() => onSelectStudent(st)}
                      className="p-1.5 text-slate-400 hover:text-indigo-600 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
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

    </div>
  );
};
