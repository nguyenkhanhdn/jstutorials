import React, { useState } from 'react';
import { Bot, X, Sparkles, Send, Lightbulb, HelpCircle, BookOpen, Layers, CheckCircle2, Loader2 } from 'lucide-react';
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
  const [history, setHistory] = useState<Array<{
    role: 'user' | 'tutor';
    content: string;
    level?: number;
    source?: string;
  }>>([
    {
      role: 'tutor',
      content: `Xin chào! Tôi là **AI Tutor Sư Phạm JavaScript**. Tôi được thiết kế để đồng hành và dẫn dắt tư duy của bạn qua **5 cấp độ giàn giáo (Scaffolding)**, không đưa lời giải sẵn mà giúp bạn tự xây dựng năng lực lập trình! Hãy chọn cấp độ trợ giúp bên dưới và cho tôi biết bạn đang vướng mắc ở đâu nhé.`,
      level: 1
    }
  ]);

  if (!isOpen) return null;

  const handleSendPrompt = async (levelToUse: number = selectedLevel) => {
    setIsLoading(true);
    const queryToSend = userQuery.trim() || `Tôi cần hỗ trợ ở cấp độ ${levelToUse} cho bài: ${contextTopic}`;

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

  const levels = [
    { level: 1, label: 'L1: Gợi ý nhỏ (Hint)', icon: Lightbulb, color: 'text-amber-600 bg-amber-50 border-amber-200' },
    { level: 2, label: 'L2: Câu hỏi dẫn dắt', icon: HelpCircle, color: 'text-blue-600 bg-blue-50 border-blue-200' },
    { level: 3, label: 'L3: Nhắc kiến thức', icon: BookOpen, color: 'text-indigo-600 bg-indigo-50 border-indigo-200' },
    { level: 4, label: 'L4: Ví dụ tương tự', icon: Layers, color: 'text-purple-600 bg-purple-50 border-purple-200' },
    { level: 5, label: 'L5: Lời giải mẫu', icon: CheckCircle2, color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
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

        {/* Scaffolding Selector */}
        <div className="p-3 border-b border-slate-200 bg-slate-50/80">
          <p className="text-xs font-semibold text-slate-700 mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-indigo-700" /> Chọn cấp độ trợ giúp sư phạm:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
            {levels.map(l => {
              const Icon = l.icon;
              const isSelected = selectedLevel === l.level;
              return (
                <button
                  key={l.level}
                  onClick={() => {
                    setSelectedLevel(l.level);
                    handleSendPrompt(l.level);
                  }}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold text-left border flex items-center gap-2 transition-all ${
                    isSelected
                      ? 'border-indigo-600 bg-indigo-600 text-white shadow-sm ring-2 ring-indigo-600/20'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-indigo-300 hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-slate-600'}`} />
                  <span className="truncate">{l.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Chat message stream */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {history.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[90%] rounded-2xl p-4 text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-indigo-600 text-white rounded-br-none'
                    : 'bg-slate-100 text-slate-800 rounded-bl-none border border-slate-200'
                }`}
              >
                {msg.role === 'tutor' && msg.level && (
                  <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-slate-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-800">
                      Cấp độ {msg.level}: {levels.find(l => l.level === msg.level)?.label.split(':')[1]}
                    </span>
                    {msg.source === 'gemini' && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 font-medium">
                        Gemini 3.8
                      </span>
                    )}
                  </div>
                )}
                <div className="whitespace-pre-wrap font-sans space-y-2">
                  {msg.content}
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-slate-100 border border-slate-200 rounded-2xl rounded-bl-none p-4 flex items-center gap-2.5 text-sm text-slate-700">
                <Loader2 className="w-4 h-4 animate-spin text-indigo-700" />
                <span>AI Tutor đang phân tích mã nguồn và chuẩn bị giàn giáo gợi ý...</span>
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
              className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent bg-slate-50 focus:bg-white"
            />
            <button
              type="submit"
              disabled={isLoading || !userQuery.trim()}
              className="px-4 py-2.5 rounded-xl bg-indigo-600 text-white font-medium text-sm flex items-center gap-1.5 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
            >
              <Send className="w-4 h-4" />
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
