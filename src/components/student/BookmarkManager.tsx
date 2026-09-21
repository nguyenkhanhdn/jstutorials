import React, { useState } from 'react';
import { 
  Bookmark as BookmarkIcon, 
  Search, 
  Filter, 
  CheckCircle2, 
  ExternalLink, 
  Trash2, 
  HelpCircle, 
  RefreshCw, 
  AlertCircle, 
  Sparkles, 
  Star 
} from 'lucide-react';
import { Bookmark, BookmarkReason } from '../../types';

interface BookmarkManagerProps {
  bookmarks: Bookmark[];
  onToggleResolve: (id: string) => void;
  onRemoveBookmark: (id: string) => void;
  onJumpToLesson: (lessonId: string) => void;
}

export const BookmarkManager: React.FC<BookmarkManagerProps> = ({
  bookmarks,
  onToggleResolve,
  onRemoveBookmark,
  onJumpToLesson
}) => {
  const [selectedReason, setSelectedReason] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const reasonLabels: Record<BookmarkReason, { label: string; color: string; icon: any }> = {
    chua_hieu: { label: 'Chưa hiểu', color: 'bg-rose-100 text-rose-800 border-rose-200', icon: HelpCircle },
    can_hoc_lai: { label: 'Cần học lại', color: 'bg-amber-100 text-amber-800 border-amber-200', icon: RefreshCw },
    kho_nho: { label: 'Khó nhớ', color: 'bg-purple-100 text-purple-800 border-purple-200', icon: AlertCircle },
    tim_hieu_sau: { label: 'Tìm hiểu sâu', color: 'bg-blue-100 text-blue-800 border-blue-200', icon: Sparkles },
    vi_du_quan_trong: { label: 'Ví dụ quan trọng', color: 'bg-emerald-100 text-emerald-800 border-emerald-200', icon: Star },
  };

  const filtered = bookmarks.filter(b => {
    const matchReason = selectedReason === 'all' || b.reason === selectedReason;
    const matchSearch = b.targetTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        b.lessonTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        (b.customNote && b.customNote.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchReason && matchSearch;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200">
              Personal Review List
            </span>
            <span className="text-xs text-slate-500">Hệ thống đánh dấu cá nhân hóa Spaced Review</span>
          </div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Danh sách Bookmark ôn tập ({bookmarks.length})
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Các khái niệm, câu hỏi và đoạn code bạn đã lưu kèm lý do sư phạm để phục vụ việc ôn tập ngắt quãng (Spaced Repetition).
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm theo tên bài, khái niệm, ghi chú..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-600 bg-slate-50 focus:bg-white"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 text-xs">
            <button
              onClick={() => setSelectedReason('all')}
              className={`px-3 py-2 rounded-xl font-bold whitespace-nowrap transition-colors ${
                selectedReason === 'all'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Tất cả ({bookmarks.length})
            </button>
            {Object.entries(reasonLabels).map(([key, val]) => (
              <button
                key={key}
                onClick={() => setSelectedReason(key)}
                className={`px-3 py-2 rounded-xl font-medium whitespace-nowrap transition-colors ${
                  selectedReason === key
                    ? 'bg-slate-900 text-white font-bold'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {val.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bookmarks List */}
        {filtered.length === 0 ? (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
            <BookmarkIcon className="w-8 h-8 text-slate-300 mx-auto mb-2" />
            <p className="text-sm font-bold text-slate-700">Không tìm thấy bookmark nào</p>
            <p className="text-xs text-slate-400 mt-0.5">Hãy nhấn nút "Bookmark" trong bài học khi gặp khái niệm cần ôn lại.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map(bm => {
              const meta = reasonLabels[bm.reason];
              const Icon = meta?.icon || BookmarkIcon;

              return (
                <div
                  key={bm.id}
                  className={`p-5 rounded-2xl border transition-all ${
                    bm.isResolved
                      ? 'bg-slate-50/60 border-slate-200 opacity-60'
                      : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border flex items-center gap-1 ${meta?.color}`}>
                          <Icon className="w-3 h-3" />
                          {meta?.label}
                        </span>
                        <span className="text-xs text-slate-400">•</span>
                        <span className="text-xs font-semibold text-slate-500">{bm.lessonTitle}</span>
                      </div>
                      <h3 className={`text-base font-bold text-slate-900 ${bm.isResolved ? 'line-through text-slate-500' : ''}`}>
                        {bm.targetTitle}
                      </h3>
                      {bm.contentSnippet && (
                        <p className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-200/80 font-mono">
                          {bm.contentSnippet}
                        </p>
                      )}
                      {bm.customNote && (
                        <p className="text-xs text-indigo-900 bg-indigo-50/50 p-2 rounded-lg border border-indigo-100">
                          📝 <strong>Ghi chú:</strong> {bm.customNote}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-2 shrink-0 pt-2 sm:pt-0">
                      <button
                        onClick={() => onToggleResolve(bm.id)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold border flex items-center gap-1 transition-all ${
                          bm.isResolved
                            ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                        title={bm.isResolved ? 'Đánh dấu chưa thuộc' : 'Đánh dấu đã hiểu/thuộc'}
                      >
                        <CheckCircle2 className={`w-3.5 h-3.5 ${bm.isResolved ? 'text-emerald-600' : 'text-slate-400'}`} />
                        <span>{bm.isResolved ? 'Đã thuộc' : 'Đã hiểu'}</span>
                      </button>

                      <button
                        onClick={() => onJumpToLesson(bm.lessonId)}
                        className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white flex items-center gap-1 transition-all shadow-xs"
                      >
                        <span>Học lại</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => onRemoveBookmark(bm.id)}
                        className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-slate-100"
                        title="Xóa bookmark"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
