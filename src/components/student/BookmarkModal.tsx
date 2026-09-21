import React, { useState } from 'react';
import { Bookmark as BookmarkIcon, X, Check, HelpCircle, RefreshCw, AlertCircle, Sparkles, Star } from 'lucide-react';
import { Bookmark, BookmarkReason } from '../../types';

interface BookmarkModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (bookmark: Omit<Bookmark, 'id' | 'createdAt' | 'isResolved'>) => void;
  lessonId: string;
  lessonTitle: string;
  targetTitle: string;
  targetType: 'concept' | 'example' | 'code' | 'exercise' | 'question';
  contentSnippet: string;
}

export const BookmarkModal: React.FC<BookmarkModalProps> = ({
  isOpen,
  onClose,
  onSave,
  lessonId,
  lessonTitle,
  targetTitle,
  targetType,
  contentSnippet
}) => {
  const [reason, setReason] = useState<BookmarkReason>('can_hoc_lai');
  const [customNote, setCustomNote] = useState('');

  if (!isOpen) return null;

  const reasonsList: { key: BookmarkReason; label: string; desc: string; icon: any; color: string }[] = [
    { key: 'chua_hieu', label: 'Chưa hiểu', desc: 'Khái niệm còn mông lung, cần hỏi thầy cô hoặc xem kỹ lại', icon: HelpCircle, color: 'text-rose-600 bg-rose-50 border-rose-200' },
    { key: 'can_hoc_lai', label: 'Cần học lại', desc: 'Đã hiểu sơ qua nhưng chưa tự code lại được', icon: RefreshCw, color: 'text-amber-600 bg-amber-50 border-amber-200' },
    { key: 'kho_nho', label: 'Khó nhớ', desc: 'Cú pháp hoặc tên hàm dễ nhầm lẫn (cần Spaced Review)', icon: AlertCircle, color: 'text-purple-600 bg-purple-50 border-purple-200' },
    { key: 'tim_hieu_sau', label: 'Muốn tìm hiểu sâu hơn', desc: 'Khái niệm thú vị muốn mở rộng thêm sau giờ học', icon: Sparkles, color: 'text-blue-600 bg-blue-50 border-blue-200' },
    { key: 'vi_du_quan_trong', label: 'Ví dụ quan trọng', desc: 'Đoạn code mẫu hữu ích có thể tái sử dụng cho Project', icon: Star, color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      studentId: 'sv-01',
      lessonId,
      lessonTitle,
      targetTitle,
      targetType,
      contentSnippet,
      reason,
      customNote: customNote.trim() || undefined
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4 animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
              <BookmarkIcon className="w-4 h-4 fill-amber-500" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">Đánh dấu Bookmark học tập</h3>
              <p className="text-xs text-slate-500">Thêm vào Danh sách ôn tập cá nhân (Personal Review List)</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200/50">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Mục được đánh dấu:</div>
            <div className="text-sm font-semibold text-slate-900">{targetTitle}</div>
            <div className="text-xs text-slate-500 truncate mt-0.5">{lessonTitle}</div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Lý do bạn đánh dấu mục này:
            </label>
            <div className="space-y-2">
              {reasonsList.map(r => {
                const Icon = r.icon;
                const isSelected = reason === r.key;
                return (
                  <button
                    key={r.key}
                    type="button"
                    onClick={() => setReason(r.key)}
                    className={`w-full p-2.5 rounded-xl border text-left flex items-start gap-3 transition-all ${
                      isSelected
                        ? 'border-indigo-600 bg-indigo-50/50 ring-2 ring-indigo-600/20 shadow-xs'
                        : 'border-slate-200 bg-white hover:bg-slate-50/80'
                    }`}
                  >
                    <div className={`p-1.5 rounded-lg border shrink-0 ${r.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-900">{r.label}</span>
                        {isSelected && <Check className="w-4 h-4 text-indigo-600" />}
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">{r.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Ghi chú của bạn (tùy chọn):
            </label>
            <textarea
              value={customNote}
              onChange={e => setCustomNote(e.target.value)}
              placeholder="VD: Cần lưu ý dòng số 3, khi so sánh null với undefined..."
              rows={2}
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 bg-slate-50 focus:bg-white resize-none"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-xl"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-sm flex items-center gap-1.5"
            >
              <BookmarkIcon className="w-4 h-4 fill-white" />
              <span>Lưu Bookmark</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
