import React, { useState } from 'react';
import { 
  AlertTriangle, 
  Send, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Users, 
  UserPlus, 
  ShieldAlert, 
  Sparkles,
  Search,
  Filter,
  Check,
  RotateCcw,
  MessageSquare,
  HelpCircle,
  BookOpen
} from 'lucide-react';
import { StudentProfile, StudentIntervention } from '../../types';
import { MOCK_STUDENT_INTERVENTIONS } from '../../data/advancedAnalyticsData';

interface EarlyWarningInterventionViewProps {
  students: StudentProfile[];
}

export const EarlyWarningInterventionView: React.FC<EarlyWarningInterventionViewProps> = ({ students }) => {
  const [interventions, setInterventions] = useState<StudentIntervention[]>(MOCK_STUDENT_INTERVENTIONS);
  const [filterStatus, setFilterStatus] = useState<'all' | 'pending' | 'in_progress' | 'resolved'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIntervention, setSelectedIntervention] = useState<StudentIntervention | null>(null);

  // New intervention modal state
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newStudentId, setNewStudentId] = useState(students.find(s => s.atRisk)?.id || students[0]?.id || '');
  const [newActionType, setNewActionType] = useState<StudentIntervention['actionType']>('remediation_quiz');
  const [newNotes, setNewNotes] = useState('');
  const [newDeadline, setNewDeadline] = useState('2026-09-28');

  const atRiskStudents = students.filter(s => s.atRisk);

  const filtered = interventions.filter(item => {
    const matchStatus = filterStatus === 'all' || item.status === filterStatus;
    const matchSearch = item.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.studentCode.toLowerCase().includes(searchQuery.toLowerCase());
    return matchStatus && matchSearch;
  });

  const handleUpdateStatus = (id: string, newStatus: StudentIntervention['status']) => {
    setInterventions(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, status: newStatus };
      }
      return item;
    }));
  };

  const handleCreateIntervention = (e: React.FormEvent) => {
    e.preventDefault();
    const student = students.find(s => s.id === newStudentId);
    if (!student) return;

    const newRecord: StudentIntervention = {
      id: `int-${Date.now()}`,
      studentId: student.id,
      studentName: student.fullName,
      studentCode: student.code,
      avatar: student.avatar,
      riskScore: student.atRisk ? 85 : 60,
      riskFactors: student.atRiskReason ? [student.atRiskReason] : ['Cần củng cố kiến thức nền tảng'],
      status: 'pending',
      actionType: newActionType,
      assignedDate: new Date().toISOString().split('T')[0],
      deadline: newDeadline,
      notes: newNotes || 'Giảng viên chỉ định can thiệp sư phạm kịp thời.'
    };

    setInterventions(prev => [newRecord, ...prev]);
    setShowCreateModal(false);
    setNewNotes('');
  };

  const actionTypeMeta: Record<StudentIntervention['actionType'], { label: string; icon: any; color: string }> = {
    remediation_quiz: { label: 'Gói bài tập phục hồi (Remediation Set)', icon: BookOpen, color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
    one_on_one: { label: 'Phụ đạo 1-on-1 với Giảng viên', icon: Users, color: 'bg-purple-50 text-purple-700 border-purple-200' },
    study_buddy: { label: 'Ghép đôi Học nhóm (Study Buddy)', icon: Sparkles, color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    counseling: { label: 'Tư vấn phương pháp học tập (Counseling)', icon: HelpCircle, color: 'bg-amber-50 text-amber-700 border-amber-200' },
  };

  return (
    <div className="space-y-6">
      
      {/* Top Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-rose-100 text-rose-800 border border-rose-200">
                Early Warning System (EWS Pro)
              </span>
              <span className="text-xs text-slate-500">Phát hiện sớm nguy cơ tụt hậu & rớt môn</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              <ShieldAlert className="w-6 h-6 text-rose-600" />
              <span>Trung Tâm Cảnh Báo & Điều Phối Can Thiệp Sư Phạm</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-3xl leading-relaxed">
              Tính toán chỉ số rủi ro đa biến (Đăng nhập, Quiz attempts &gt; 3 lần, trễ hạn nộp Lab, Bookmark dồn đọng) và thực thi các biện pháp can thiệp sớm có ghi nhận lịch sử.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setShowCreateModal(true)}
              className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs"
            >
              <UserPlus className="w-4 h-4" />
              <span>Thiết lập can thiệp mới</span>
            </button>
          </div>
        </div>

        {/* EWS Multi-Criteria Rule Explainer */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs">
          <div className="space-y-1">
            <div className="font-bold text-slate-800 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              <span>Tần suất vào lớp (25%)</span>
            </div>
            <p className="text-slate-500 text-[11px]">Không đăng nhập hệ thống &gt; 5 ngày liên tục.</p>
          </div>
          <div className="space-y-1">
            <div className="font-bold text-slate-800 flex items-center gap-1">
              <RotateCcw className="w-3.5 h-3.5 text-amber-500" />
              <span>Thử lại Quiz (35%)</span>
            </div>
            <p className="text-slate-500 text-[11px]">Làm lại &gt; 3 lần nhưng điểm số vẫn dưới 60%.</p>
          </div>
          <div className="space-y-1">
            <div className="font-bold text-slate-800 flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
              <span>Tiến độ bài Lab (25%)</span>
            </div>
            <p className="text-slate-500 text-[11px]">Chậm hơn 40% so với tiến độ trung bình của lớp.</p>
          </div>
          <div className="space-y-1">
            <div className="font-bold text-slate-800 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-purple-500" />
              <span>Bookmark dồn đọng (15%)</span>
            </div>
            <p className="text-slate-500 text-[11px]">Có &gt; 8 khái niệm chưa hiểu chưa được ôn tập.</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-slate-100 text-xs">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
            <span className="text-slate-500 font-bold shrink-0">Trạng thái:</span>
            <button
              onClick={() => setFilterStatus('all')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                filterStatus === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Tất cả ({interventions.length})
            </button>
            <button
              onClick={() => setFilterStatus('pending')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                filterStatus === 'pending' ? 'bg-rose-600 text-white' : 'bg-rose-50 text-rose-800 hover:bg-rose-100'
              }`}
            >
              Chờ thực hiện ({interventions.filter(i => i.status === 'pending').length})
            </button>
            <button
              onClick={() => setFilterStatus('in_progress')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                filterStatus === 'in_progress' ? 'bg-amber-600 text-white' : 'bg-amber-50 text-amber-800 hover:bg-amber-100'
              }`}
            >
              Đang can thiệp ({interventions.filter(i => i.status === 'in_progress').length})
            </button>
            <button
              onClick={() => setFilterStatus('resolved')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                filterStatus === 'resolved' ? 'bg-emerald-600 text-white' : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
              }`}
            >
              Đã khắc phục ({interventions.filter(i => i.status === 'resolved').length})
            </button>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Tìm theo tên SV hoặc mã số..."
              className="w-full pl-8 pr-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 text-xs focus:bg-white focus:outline-none"
            />
          </div>
        </div>

      </div>

      {/* Interventions List */}
      <div className="space-y-4">
        {filtered.map(item => {
          const meta = actionTypeMeta[item.actionType];
          const ActionIcon = meta.icon;

          return (
            <div 
              key={item.id}
              className={`p-6 rounded-3xl bg-white border transition-all ${
                item.status === 'pending'
                  ? 'border-rose-300 shadow-xs'
                  : item.status === 'in_progress'
                  ? 'border-amber-300 shadow-xs'
                  : 'border-slate-200 opacity-80'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                
                {/* Student Info & Risk score */}
                <div className="flex items-start gap-3.5 flex-1">
                  <img src={item.avatar} alt={item.studentName} className="w-12 h-12 rounded-full border border-slate-200 shrink-0" />
                  
                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-bold text-slate-900 text-base">{item.studentName}</h3>
                      <span className="font-mono text-xs text-slate-500 font-semibold">{item.studentCode}</span>
                      
                      {/* Status badge */}
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold ${
                        item.status === 'pending' 
                          ? 'bg-rose-100 text-rose-800' 
                          : item.status === 'in_progress'
                          ? 'bg-amber-100 text-amber-900'
                          : 'bg-emerald-100 text-emerald-800'
                      }`}>
                        {item.status === 'pending' ? 'Chưa thực hiện' : item.status === 'in_progress' ? 'Đang hỗ trợ' : 'Đã cải thiện'}
                      </span>

                      {/* Action type badge */}
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border flex items-center gap-1 ${meta.color}`}>
                        <ActionIcon className="w-3 h-3" />
                        {meta.label}
                      </span>
                    </div>

                    {/* Risk Factors tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.riskFactors.map((rf, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded-md bg-rose-50 border border-rose-200 text-rose-900 text-[11px]">
                          ⚠️ {rf}
                        </span>
                      ))}
                    </div>

                    {/* Teacher's Log / Notes */}
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 mt-2">
                      <strong>Ghi chú sư phạm:</strong> {item.notes}
                    </div>

                    {/* Meta timestamps */}
                    <div className="flex items-center gap-4 text-[11px] text-slate-400 pt-1">
                      <span>Khởi tạo: {item.assignedDate}</span>
                      <span>•</span>
                      <span>Hạn hoàn thành: <strong className="text-slate-600">{item.deadline}</strong></span>
                    </div>
                  </div>
                </div>

                {/* Right actions: Status changing & triggers */}
                <div className="flex flex-col sm:flex-row lg:flex-col items-end gap-2 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                  
                  {/* Risk Score Pill */}
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-950 text-xs font-bold">
                    <span>Chỉ số rủi ro:</span>
                    <span className="text-base font-black text-rose-600">{item.riskScore}/100</span>
                  </div>

                  {/* Status buttons */}
                  <div className="flex items-center gap-1.5 text-xs">
                    {item.status !== 'in_progress' && (
                      <button
                        onClick={() => handleUpdateStatus(item.id, 'in_progress')}
                        className="px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 font-bold border border-amber-200 transition-colors"
                      >
                        Bắt đầu hỗ trợ
                      </button>
                    )}
                    {item.status !== 'resolved' && (
                      <button
                        onClick={() => handleUpdateStatus(item.id, 'resolved')}
                        className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-colors flex items-center gap-1 shadow-xs"
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span>Đánh dấu đạt</span>
                      </button>
                    )}
                  </div>

                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* CREATE NEW INTERVENTION MODAL */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
                <ShieldAlert className="w-5 h-5 text-rose-600" />
                <span>Thiết Lập Can Thiệp Sư Phạm Mới</span>
              </div>
              <button
                onClick={() => setShowCreateModal(false)}
                className="text-slate-400 hover:text-slate-600 font-bold text-sm p-1 rounded-lg"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateIntervention} className="p-6 space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Chọn sinh viên cần can thiệp:</label>
                <select
                  value={newStudentId}
                  onChange={e => setNewStudentId(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 font-medium text-slate-800 text-xs focus:bg-white focus:outline-none"
                >
                  {students.map(st => (
                    <option key={st.id} value={st.id}>
                      {st.fullName} ({st.code}) - {st.atRisk ? '⚠️ Nguy cơ tụt hậu' : 'Tiến độ bình thường'}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Hình thức can thiệp:</label>
                <select
                  value={newActionType}
                  onChange={e => setNewActionType(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 font-medium text-slate-800 text-xs focus:bg-white focus:outline-none"
                >
                  <option value="remediation_quiz">Gói bài tập phục hồi (Remediation Set 5 câu có AI Hint L2)</option>
                  <option value="one_on_one">Phụ đạo 1-on-1 với Giảng viên sau ca học</option>
                  <option value="study_buddy">Ghép đôi học nhóm (Study Buddy) với SV giỏi</option>
                  <option value="counseling">Tư vấn tâm lý & phương pháp tự học</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Thời hạn hoàn thành:</label>
                <input
                  type="date"
                  value={newDeadline}
                  onChange={e => setNewDeadline(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 font-medium text-slate-800 text-xs focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Ghi chú kế hoạch giảng dạy:</label>
                <textarea
                  rows={3}
                  value={newNotes}
                  onChange={e => setNewNotes(e.target.value)}
                  placeholder="Ghi rõ nội dung kiến thức sinh viên cần bồi dưỡng, lịch hẹn cụ thể..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 font-medium text-slate-800 text-xs focus:bg-white focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-semibold"
                >
                  Hủy bỏ
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold shadow-xs"
                >
                  Lưu & Phân công can thiệp
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
