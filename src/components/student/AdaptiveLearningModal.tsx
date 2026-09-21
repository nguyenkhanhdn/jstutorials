import React, { useState } from 'react';
import { 
  GitBranch, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  Bot, 
  Zap, 
  Layers, 
  ShieldCheck, 
  X,
  Clock,
  RotateCcw,
  BookOpen,
  Award
} from 'lucide-react';
import { PREREQUISITE_CHAINS, MOCK_STUDENT_ADAPTIVE_PROFILES } from '../../data/adaptiveLearningData';
import { StudentProfile } from '../../types';

interface AdaptiveLearningModalProps {
  isOpen: boolean;
  onClose: () => void;
  student: StudentProfile;
  onStartLesson: (lessonId: string) => void;
}

export const AdaptiveLearningModal: React.FC<AdaptiveLearningModalProps> = ({
  isOpen,
  onClose,
  student,
  onStartLesson,
}) => {
  const [selectedChainId, setSelectedChainId] = useState<string>('chain-reduce');
  const activeChain = PREREQUISITE_CHAINS.find(c => c.id === selectedChainId) || PREREQUISITE_CHAINS[0];

  // Match with student profile or fallback to student #1
  const adaptiveProfile = MOCK_STUDENT_ADAPTIVE_PROFILES.find(p => p.studentId === student.id) || 
                          MOCK_STUDENT_ADAPTIVE_PROFILES[0];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-in fade-in">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center">
              <GitBranch className="w-5 h-5 text-indigo-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-black tracking-tight">Lộ Trình Học Tập Thích Ứng Cá Nhân</h3>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                  adaptiveProfile.currentTrack === 'accelerated' ? 'bg-emerald-400 text-slate-950' :
                  adaptiveProfile.currentTrack === 'scaffolding' ? 'bg-rose-400 text-slate-950' :
                  'bg-indigo-400 text-slate-950'
                }`}>
                  Nhánh: {adaptiveProfile.currentTrack.toUpperCase()}
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Hệ thống AI tự động điều chỉnh độ khó và hỗ trợ dựa trên nhịp độ tiếp thu của bạn
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-slate-700">
          
          {/* Top Status & Autonomy Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="text-slate-500 font-medium">Nhánh học tập DDA</div>
              <div className="text-base font-black text-slate-900 capitalize">
                {adaptiveProfile.currentTrack === 'accelerated' && '🚀 Nhánh Tăng Tốc (Fast-Track)'}
                {adaptiveProfile.currentTrack === 'standard' && '⚖️ Lộ Trình Chuẩn (Standard)'}
                {adaptiveProfile.currentTrack === 'scaffolding' && '🛡️ Giàn Giáo Can Thiệp (Scaffold)'}
              </div>
              <p className="text-[11px] text-slate-500">
                {adaptiveProfile.currentTrack === 'accelerated' ? 'Bài tập nâng cao Bloom L4-L6' :
                 adaptiveProfile.currentTrack === 'scaffolding' ? 'Chẻ nhỏ bài toán & củng cố tiên quyết' :
                 'Cân bằng lý thuyết & bài tập chuẩn'}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 space-y-1">
              <div className="text-purple-700 font-medium">Chỉ số tự chủ (Autonomy)</div>
              <div className="text-xl font-black text-purple-900">
                {adaptiveProfile.autonomyIndex}%
              </div>
              <p className="text-[11px] text-purple-700">
                Độc lập giải quyết vấn đề với AI Cấp 1-2
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1">
              <div className="text-emerald-700 font-medium">Trạng thái nhận thức</div>
              <div className="text-base font-black text-emerald-900">
                {adaptiveProfile.cognitiveLoad === 'optimal' ? '✨ Trạng thái Dòng chảy (Flow)' :
                 adaptiveProfile.cognitiveLoad === 'low' ? '💤 Nhàn hạ (Boredom)' : '⚠️ Cần giàn giáo hỗ trợ'}
              </div>
              <p className="text-[11px] text-emerald-700">
                Bài tập đúng vùng phát triển ZPD
              </p>
            </div>

          </div>

          {/* Next Best Action Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-50 via-purple-50 to-blue-50 border border-indigo-200 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-black text-indigo-950 text-sm">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>Nhiệm Vụ Đề Xuất Tối Ưu Cho Bạn (Next Best Action)</span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-200/70 text-indigo-900">
                Ước tính: {adaptiveProfile.nextBestAction.estimatedMinutes} phút
              </span>
            </div>

            <div className="p-3 bg-white rounded-xl border border-indigo-100 space-y-1">
              <h4 className="font-extrabold text-sm text-slate-900">
                {adaptiveProfile.nextBestAction.title}
              </h4>
              <p className="text-slate-600 leading-relaxed text-xs">
                {adaptiveProfile.nextBestAction.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
              <div className="text-[11px] text-slate-500 italic">
                * Lý do: {adaptiveProfile.nextBestAction.reason}
              </div>

              <button
                onClick={() => {
                  onClose();
                  onStartLesson(adaptiveProfile.nextBestAction.targetLessonId || 'les-2-1');
                }}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition-all cursor-pointer self-start sm:self-auto"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Thực Hiện Ngay</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Prerequisite Chain Mapping Viewer */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-indigo-600" />
                <span>Chuỗi Năng Lực Tiên Quyết (Prerequisite Backward Trace)</span>
              </h4>
              
              <div className="flex items-center gap-1">
                {PREREQUISITE_CHAINS.map(c => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedChainId(c.id)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                      selectedChainId === c.id ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {c.targetSkillCode}
                  </button>
                ))}
              </div>
            </div>

            <p className="text-[11px] text-slate-500">
              Nếu bạn gặp khó khăn ở kỹ năng <strong>{activeChain.targetSkillCode}</strong>, hệ thống sẽ truy ngược các kỹ năng nền tảng phía dưới:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 pt-1">
              {activeChain.nodes.map((node, i) => (
                <div 
                  key={node.id}
                  className="p-3 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-[11px]">{node.code}</span>
                    <span className="text-[10px] text-slate-400">Tầng {i + 1}</span>
                  </div>
                  <div className="font-medium text-slate-800 text-[11px] line-clamp-2">
                    {node.title}
                  </div>
                  <div className="text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-bold inline-block">
                    ✓ {node.classMasteryRate}% cả lớp đạt
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Tutor Scaffolding Rule reminder */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 space-y-1">
            <div className="font-bold text-slate-800 flex items-center gap-1.5">
              <Bot className="w-3.5 h-3.5 text-indigo-600" />
              <span>Quy Chuẩn Giàn Giáo Sư Phạm (Scaffolding):</span>
            </div>
            <p>
              AI Tutor trong hệ thống không giải bài thay bạn. Hãy bắt đầu từ <strong>Cấp độ 1 (Gợi ý nhỏ)</strong> hoặc <strong>Cấp độ 2 (Câu hỏi gợi mở)</strong> để rèn luyện tư duy lập trình viên độc lập nhé!
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
          >
            Đã hiểu, tiếp tục học
          </button>
        </div>

      </div>
    </div>
  );
};
