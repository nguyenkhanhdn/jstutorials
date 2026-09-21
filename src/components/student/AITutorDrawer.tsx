import React, { useState } from 'react';
import { 
  Bot, 
  X, 
  Sparkles, 
  Send, 
  Lightbulb, 
  HelpCircle, 
  BookOpen, 
  Layers, 
  CheckCircle2, 
  Loader2,
  Lock,
  ThumbsUp,
  ThumbsDown,
  Copy,
  Check,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';
import { AITutorResponse } from '../../types';

interface AITutorDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  contextTopic: string;
  studentCode: string;
  errorMessage?: string;
  exercisePrompt?: string;
}

export const AITutorDrawer: React.FC<AITutorDrawerProps> = ({
  isOpen,
  onClose,
  contextTopic,
  studentCode,
  errorMessage,
  exercisePrompt,
}) => {
  const [selectedLevel, setSelectedLevel] = useState<number>(1);
  const [userQuery, setUserQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showLevel5Guard, setShowLevel5Guard] = useState<boolean>(false);
  const [feedbackGiven, setFeedbackGiven] = useState<Record<number, 'up' | 'down'>>({});
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const [history, setHistory] = useState<Array<{
    role: 'user' | 'tutor';
    content: string;
    level?: number;
    source?: string;
  }>>([
    {
      role: 'tutor',
      content: `Xin chào! Tôi là **AI Tutor Sư Phạm JavaScript**. Tôi được thiết kế để đồng hành và dẫn dắt tư duy của bạn qua **5 cấp độ giàn giáo (Scaffolding)**, không đưa lời giải sẵn mà giúp bạn tự xây dựng năng lực lập trình! Hãy chọn cấp độ trợ giúp bên dưới hoặc nhấn vào một gợi ý nhanh nhé.`,
      level: 1
    }
  ]);

  if (!isOpen) return null;

  const handleSendPrompt = async (levelToUse: number = selectedLevel, customQuery?: string) => {
    if (levelToUse === 5 && !showLevel5Guard) {
      setShowLevel5Guard(true);
      return;
    }
    setShowLevel5Guard(false);
    setIsLoading(true);

    const queryToSend = customQuery || userQuery.trim() || `Tôi cần hỗ trợ ở cấp độ ${levelToUse} cho bài: ${contextTopic}`;

    setHistory(prev => [
      ...prev,
      { role: 'user', content: queryToSend, level: levelToUse }
    ]);
    setUserQuery('');

    try {
      const response = await fetch('/api/ai-tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: queryToSend,
          scaffoldingLevel: levelToUse,
          contextTopic,
          studentCode,
          errorMessage,
          exercisePrompt
        })
      });

      const data = await response.json();
      if (data.success) {
        setHistory(prev => [
          ...prev,
          {
            role: 'tutor',
            content: data.response,
            level: data.scaffoldingLevel,
            source: data.source
          }
        ]);
      } else {
        throw new Error(data.error || 'Không nhận được phản hồi');
      }
    } catch (err: any) {
      // Fallback pedagogical message
      setHistory(prev => [
        ...prev,
        {
          role: 'tutor',
          content: `💡 **Gợi ý nhanh:** Hãy kiểm tra lại cú pháp khai báo biến hoặc từ khóa trả về \`return\`. Bạn có thể dùng \`console.log()\` để xem giá trị biến tại từng dòng!`,
          level: levelToUse,
          source: 'local_fallback'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const levels = [
    { level: 1, label: 'L1: Gợi ý nhỏ (Hint)', desc: 'Chỉ ra điểm chú ý về cú pháp hoặc biến', icon: Lightbulb },
    { level: 2, label: 'L2: Câu hỏi dẫn dắt', desc: 'Socratic questioning khơi gợi tư duy', icon: HelpCircle },
    { level: 3, label: 'L3: Nhắc lý thuyết', desc: 'Trích đoạn quy tắc chuẩn tài liệu', icon: BookOpen },
    { level: 4, label: 'L4: Ví dụ tương tự', desc: 'Mẫu tương đồng trong ngữ cảnh khác', icon: Layers },
    { level: 5, label: 'L5: Lời giải mẫu', desc: 'Mở khóa lời giải & phân tích từng dòng', icon: CheckCircle2, isGuarded: true },
  ];

  const quickPrompts = [
    { text: 'Phân tích lỗi runtime này', level: 1 },
    { text: 'Tôi cần hỏi gì tiếp theo?', level: 2 },
    { text: 'Giải thích cú pháp này', level: 3 },
    { text: 'Cho 1 ví dụ tương tự', level: 4 },
    { text: 'Làm sao để return giá trị?', level: 2 },
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
      <div className="w-full max-w-xl bg-white h-full shadow-2xl flex flex-col border-l border-slate-200">
        
        {/* Header */}
        <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-600/20">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-slate-900 text-base">AI Tutor Sư Phạm</h3>
                <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-100 text-indigo-700 border border-indigo-200">
                  Scaffolding 5 Cấp độ
                </span>
              </div>
              <p className="text-xs text-slate-700 truncate max-w-sm">Chủ đề: {contextTopic}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-600 hover:text-slate-800 hover:bg-slate-200/60 rounded-lg transition-colors"
            title="Đóng AI Tutor"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 5-Level Visual Scaffolding Stepper */}
        <div className="p-3 border-b border-slate-200 bg-slate-50/90">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" /> Chọn cấp độ hỗ trợ sư phạm:
            </p>
            <span className="text-[11px] font-medium text-slate-500">
              Cấp độ {selectedLevel}/5
            </span>
          </div>

          {/* Stepper buttons */}
          <div className="grid grid-cols-5 gap-1.5">
            {levels.map(l => {
              const Icon = l.icon;
              const isSelected = selectedLevel === l.level;
              return (
                <button
                  key={l.level}
                  onClick={() => {
                    setSelectedLevel(l.level);
                    if (l.level === 5) {
                      setShowLevel5Guard(true);
                    } else {
                      handleSendPrompt(l.level);
                    }
                  }}
                  className={`p-2 rounded-xl text-center flex flex-col items-center gap-1 transition-all border ${
                    isSelected
                      ? 'border-indigo-600 bg-indigo-600 text-white shadow-xs'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-indigo-300 hover:bg-slate-50'
                  }`}
                  title={`${l.label} - ${l.desc}`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-slate-600'}`} />
                  <span className="text-[10px] font-bold truncate w-full">L{l.level}</span>
                </button>
              );
            })}
          </div>

          {/* Active Level Description Subtext */}
          <div className="mt-2 px-2 py-1.5 rounded-lg bg-indigo-50/70 border border-indigo-100 flex items-center justify-between text-[11px] text-indigo-950">
            <span><strong>{levels[selectedLevel - 1].label}:</strong> {levels[selectedLevel - 1].desc}</span>
            {selectedLevel === 5 && <Lock className="w-3.5 h-3.5 text-amber-600 shrink-0" />}
          </div>
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-3 py-2 border-b border-slate-200 bg-white flex items-center gap-1.5 overflow-x-auto text-[11px]">
          <span className="text-slate-600 font-bold shrink-0">Hỏi nhanh:</span>
          {quickPrompts.map((qp, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSelectedLevel(qp.level);
                handleSendPrompt(qp.level, qp.text);
              }}
              className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 whitespace-nowrap border border-slate-200 transition-colors"
            >
              {qp.text}
            </button>
          ))}
        </div>

        {/* Level 5 Guard Modal / Dialog */}
        {showLevel5Guard && (
          <div className="p-4 bg-amber-50 border-b border-amber-200 text-xs text-amber-950 space-y-2 animate-in fade-in duration-150">
            <div className="flex items-center gap-2 font-bold text-amber-900">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Cảnh báo sư phạm: Mở khóa Cấp độ 5 (Lời giải mẫu)</span>
            </div>
            <p className="text-amber-800 leading-relaxed">
              Theo phương pháp <strong>Learning-by-Doing</strong>, xem trước lời giải sẽ làm giảm hiệu quả ghi nhớ và tư duy logic của bạn. Bạn đã thử qua gợi ý Cấp độ 1, 2, 3 và 4 chưa?
            </p>
            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={() => handleSendPrompt(5)}
                className="px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold transition-colors"
              >
                Tôi đồng ý mở khóa Lời giải
              </button>
              <button
                onClick={() => {
                  setShowLevel5Guard(false);
                  setSelectedLevel(2);
                }}
                className="px-3 py-1.5 rounded-lg bg-white border border-amber-300 text-amber-900 font-semibold hover:bg-amber-100 transition-colors"
              >
                Quay lại thử Cấp độ 2 (Câu hỏi dẫn dắt)
              </button>
            </div>
          </div>
        )}

        {/* Chat message stream */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {history.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[92%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-indigo-600 text-white rounded-br-none shadow-xs'
                    : 'bg-slate-100 text-slate-800 rounded-bl-none border border-slate-200'
                }`}
              >
                {msg.role === 'tutor' && msg.level && (
                  <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-800">
                      Cấp độ {msg.level}: {levels.find(l => l.level === msg.level)?.label.split(':')[1]}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {msg.source === 'gemini' && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 font-medium">
                          Gemini 2.5
                        </span>
                      )}
                      <button
                        onClick={() => handleCopy(msg.content, idx)}
                        className="p-1 rounded text-slate-400 hover:text-slate-700 transition-colors"
                        title="Sao chép nội dung"
                      >
                        {copiedIndex === idx ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                )}
                <div className="whitespace-pre-wrap font-sans space-y-2">
                  {msg.content}
                </div>

                {/* Feedback rating on tutor responses */}
                {msg.role === 'tutor' && idx > 0 && (
                  <div className="mt-3 pt-2 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Gợi ý này có giúp bạn giải quyết vấn đề?</span>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => setFeedbackGiven(prev => ({ ...prev, [idx]: 'up' }))}
                        className={`p-1 rounded transition-colors ${
                          feedbackGiven[idx] === 'up' ? 'text-emerald-600 bg-emerald-50' : 'hover:text-slate-800'
                        }`}
                        title="Hữu ích"
                      >
                        <ThumbsUp className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => setFeedbackGiven(prev => ({ ...prev, [idx]: 'down' }))}
                        className={`p-1 rounded transition-colors ${
                          feedbackGiven[idx] === 'down' ? 'text-rose-600 bg-rose-50' : 'hover:text-slate-800'
                        }`}
                        title="Cần chi tiết hơn"
                      >
                        <ThumbsDown className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-slate-100 border border-slate-200 rounded-2xl rounded-bl-none p-4 flex items-center gap-2.5 text-xs text-slate-700">
                <Loader2 className="w-4 h-4 animate-spin text-indigo-700" />
                <span>AI Tutor đang phân tích mã nguồn và chuẩn bị giàn giáo Cấp độ {selectedLevel}...</span>
              </div>
            </div>
          )}
        </div>

        {/* Input box */}
        <div className="p-3 border-t border-slate-200 bg-white">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (userQuery.trim() && !isLoading) {
                handleSendPrompt(selectedLevel);
              }
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={userQuery}
              onChange={(e) => setUserQuery(e.target.value)}
              placeholder="Đặt câu hỏi hoặc nói điều bạn chưa hiểu..."
              className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent bg-slate-50 focus:bg-white"
            />
            <button
              type="submit"
              disabled={isLoading || !userQuery.trim()}
              className="px-4 py-2.5 rounded-xl bg-indigo-600 text-white font-medium text-xs flex items-center gap-1.5 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-xs"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Gửi</span>
            </button>
          </form>
          <div className="flex items-center justify-between mt-2 px-1 text-[11px] text-slate-600">
            <span>Nguyên tắc: AI Tutor không giải bài thay bạn</span>
            <span>Mục tiêu: Đạt chuẩn năng lực CLO</span>
          </div>
        </div>
      </div>
    </div>
  );
};

