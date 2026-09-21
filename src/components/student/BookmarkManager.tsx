import React, { useState } from 'react';
import { 
  Bookmark as BookmarkIcon, 
  Search, 
  CheckCircle2, 
  ExternalLink, 
  Trash2, 
  HelpCircle, 
  RefreshCw, 
  AlertCircle, 
  Sparkles, 
  Star,
  Layers,
  RotateCw,
  Clock,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Flame,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';
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
  const [viewMode, setViewMode] = useState<'list' | 'flashcard'>('list');
  const [selectedReason, setSelectedReason] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'due' | 'unresolved' | 'resolved'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Flashcard State
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [reviewCount, setReviewCount] = useState(0);

  const reasonLabels: Record<BookmarkReason, { label: string; color: string; icon: any }> = {
    chua_hieu: { label: 'Chưa hiểu', color: 'bg-rose-100 text-rose-800 border-rose-200', icon: HelpCircle },
    can_hoc_lai: { label: 'Cần học lại', color: 'bg-amber-100 text-amber-800 border-amber-200', icon: RefreshCw },
    kho_nho: { label: 'Khó nhớ', color: 'bg-purple-100 text-purple-800 border-purple-200', icon: AlertCircle },
    tim_hieu_sau: { label: 'Tìm hiểu sâu', color: 'bg-blue-100 text-blue-800 border-blue-200', icon: Sparkles },
    vi_du_quan_trong: { label: 'Ví dụ quan trọng', color: 'bg-emerald-100 text-emerald-800 border-emerald-200', icon: Star },
  };

  const filtered = bookmarks.filter(b => {
    const matchReason = selectedReason === 'all' || b.reason === selectedReason;
    const matchStatus = 
      statusFilter === 'all' ? true :
      statusFilter === 'due' ? !b.isResolved :
      statusFilter === 'unresolved' ? !b.isResolved :
      statusFilter === 'resolved' ? b.isResolved : true;

    const matchSearch = b.targetTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        b.lessonTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        (b.customNote && b.customNote.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchReason && matchStatus && matchSearch;
  });

  const activeCard = filtered[flashcardIndex] || filtered[0];

  const handleFlashcardAnswer = (confidence: 'forgot' | 'hesitant' | 'remembered') => {
    setReviewCount(prev => prev + 1);
    setIsFlipped(false);

    if (confidence === 'remembered' && activeCard) {
      if (!activeCard.isResolved) {
        onToggleResolve(activeCard.id);
      }
    }

    if (flashcardIndex < filtered.length - 1) {
      setFlashcardIndex(prev => prev + 1);
    } else {
      confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
      setFlashcardIndex(0);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      
      {/* Top Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200">
                Personal Review Hub
              </span>
              <span className="text-xs text-slate-500">Spaced Repetition (Đường cong quên lãng Ebbinghaus)</span>
            </div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              Danh sách Ôn tập Cá nhân ({bookmarks.length})
            </h1>
            <p className="text-xs text-slate-500 mt-1 max-w-xl">
              Học liệu số hỗ trợ lặp lại ngắt quãng (1 ngày, 3 ngày, 7 ngày, 14 ngày) để chuyển kiến thức từ trí nhớ ngắn hạn sang dài hạn.
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center bg-slate-100 p-1.5 rounded-2xl border border-slate-200 text-xs shrink-0 self-start md:self-auto">
            <button
              onClick={() => {
                setViewMode('list');
                setIsFlipped(false);
              }}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                viewMode === 'list'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              📋 Danh sách
            </button>
            <button
              onClick={() => {
                setViewMode('flashcard');
                setFlashcardIndex(0);
                setIsFlipped(false);
              }}
              className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1 transition-all ${
                viewMode === 'flashcard'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>🎴 Lật Thẻ Ôn Tập</span>
            </button>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 border-t border-slate-100">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => {
                setSearchQuery(e.target.value);
                setFlashcardIndex(0);
              }}
              placeholder="Tìm kiếm theo tên bài, khái niệm, ghi chú..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-600 bg-slate-50 focus:bg-white"
            />
          </div>

          {/* Status Quick Filters */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto text-xs">
            <button
              onClick={() => { setStatusFilter('all'); setFlashcardIndex(0); }}
              className={`px-3 py-2 rounded-xl font-bold whitespace-nowrap transition-colors ${
                statusFilter === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Tất cả ({bookmarks.length})
            </button>
            <button
              onClick={() => { setStatusFilter('due'); setFlashcardIndex(0); }}
              className={`px-3 py-2 rounded-xl font-bold whitespace-nowrap transition-colors flex items-center gap-1 ${
                statusFilter === 'due' ? 'bg-amber-500 text-slate-950 font-extrabold' : 'bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>Cần ôn hôm nay ({bookmarks.filter(b => !b.isResolved).length})</span>
            </button>
            <button
              onClick={() => { setStatusFilter('resolved'); setFlashcardIndex(0); }}
              className={`px-3 py-2 rounded-xl font-semibold whitespace-nowrap transition-colors ${
                statusFilter === 'resolved' ? 'bg-emerald-700 text-white font-bold' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Đã thuộc ({bookmarks.filter(b => b.isResolved).length})
            </button>
          </div>
        </div>

        {/* 5 Pedagogical Reasons filter chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto text-xs pt-1">
          <span className="text-slate-400 font-medium shrink-0">Lý do:</span>
          <button
            onClick={() => { setSelectedReason('all'); setFlashcardIndex(0); }}
            className={`px-2.5 py-1 rounded-lg font-medium whitespace-nowrap ${
              selectedReason === 'all' ? 'bg-indigo-50 text-indigo-800 font-bold border border-indigo-200' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Tất cả
          </button>
          {Object.entries(reasonLabels).map(([key, val]) => (
            <button
              key={key}
              onClick={() => { setSelectedReason(key); setFlashcardIndex(0); }}
              className={`px-2.5 py-1 rounded-lg font-medium whitespace-nowrap transition-colors ${
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

      {/* VIEW 1: INTERACTIVE FLASHCARD MODE */}
      {viewMode === 'flashcard' && (
        <div className="space-y-6">
          {filtered.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
              <BookmarkIcon className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <h3 className="font-bold text-slate-800 text-base">Không có thẻ nào phù hợp bộ lọc</h3>
              <p className="text-xs text-slate-500 mt-1">Hãy chọn bộ lọc "Tất cả" hoặc quay lại chế độ danh sách.</p>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto space-y-4">
              
              {/* Card Meta & Header */}
              <div className="flex items-center justify-between text-xs text-slate-500 px-2">
                <span>Thẻ số <strong>{flashcardIndex + 1}</strong> trên tổng số <strong>{filtered.length}</strong></span>
                <span className="flex items-center gap-1 font-bold text-amber-700">
                  <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
                  Đã ôn {reviewCount} lượt hôm nay
                </span>
              </div>

              {/* Flip Card Stage */}
              <div
                onClick={() => setIsFlipped(!isFlipped)}
                className="cursor-pointer select-none perspective-1000 min-h-[320px] bg-white rounded-3xl p-8 border-2 border-slate-200 hover:border-indigo-400 transition-all shadow-md flex flex-col justify-between relative group"
              >
                <div className="absolute top-4 right-4 flex items-center gap-1.5 text-xs text-slate-400 group-hover:text-indigo-600 transition-colors">
                  <RotateCw className="w-4 h-4" />
                  <span>Bấm để lật thẻ</span>
                </div>

                {!isFlipped ? (
                  /* FRONT OF CARD */
                  <div className="space-y-4 my-auto">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${reasonLabels[activeCard.reason]?.color}`}>
                        {reasonLabels[activeCard.reason]?.label}
                      </span>
                      <span className="text-xs text-slate-400">•</span>
                      <span className="text-xs font-semibold text-slate-500">{activeCard.lessonTitle}</span>
                    </div>

                    <h2 className="text-xl font-black text-slate-900 leading-snug">
                      {activeCard.targetTitle}
                    </h2>

                    <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80 text-amber-950 text-xs space-y-1">
                      <span className="font-bold flex items-center gap-1 text-amber-900">
                        <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                        Câu hỏi tự kiểm tra trí nhớ:
                      </span>
                      <p className="text-slate-700 leading-relaxed">
                        Bạn có nhớ quy tắc logic, cú pháp hoặc cơ chế hoạt động đằng sau khái niệm này không? Hãy tự giải thích trong đầu trước khi lật mặt sau!
                      </p>
                    </div>
                  </div>
                ) : (
                  /* BACK OF CARD */
                  <div className="space-y-4 my-auto animate-in fade-in duration-200">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        ✓ Đáp án & Trọng tâm ghi nhớ
                      </span>
                      <span className="text-xs text-slate-400">{activeCard.targetType}</span>
                    </div>

                    {activeCard.contentSnippet && (
                      <div className="space-y-1">
                        <span className="text-[11px] font-bold text-slate-500 uppercase">Mã nguồn mẫu:</span>
                        <pre className="p-3 bg-slate-900 text-amber-300 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed border border-slate-800">
                          {activeCard.contentSnippet}
                        </pre>
                      </div>
                    )}

                    {activeCard.customNote ? (
                      <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-950 text-xs">
                        <strong>Ghi chú của bạn:</strong> {activeCard.customNote}
                      </div>
                    ) : (
                      <p className="text-xs text-slate-600 italic">
                        Lưu ý: Luôn áp dụng chuẩn ES6+ và kiểm tra kiểu dữ liệu cẩn thận với === thay vì ==.
                      </p>
                    )}
                  </div>
                )}

                {/* Footer hint */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span>Trạng thái: {activeCard.isResolved ? '🟢 Đã thuộc' : '🟠 Cần ôn thêm'}</span>
                  <span>{isFlipped ? 'Mặt sau (Lời giải)' : 'Mặt trước (Khái niệm)'}</span>
                </div>
              </div>

              {/* Recall Assessment Buttons */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between gap-2">
                <button
                  onClick={() => handleFlashcardAnswer('forgot')}
                  className="flex-1 py-2.5 rounded-xl border border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-800 text-xs font-bold transition-all text-center"
                >
                  🔴 Chưa nhớ (Ôn lại ngày mai)
                </button>
                <button
                  onClick={() => handleFlashcardAnswer('hesitant')}
                  className="flex-1 py-2.5 rounded-xl border border-amber-200 bg-amber-50 hover:bg-amber-100 text-amber-800 text-xs font-bold transition-all text-center"
                >
                  🟡 Hơi do dự (Giữ lịch 3 ngày)
                </button>
                <button
                  onClick={() => handleFlashcardAnswer('remembered')}
                  className="flex-1 py-2.5 rounded-xl border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold transition-all text-center shadow-xs"
                >
                  🟢 Đã nhớ rõ (+7 ngày tới)
                </button>
              </div>

              {/* Previous / Next Controls */}
              <div className="flex items-center justify-between text-xs pt-1 px-2">
                <button
                  disabled={flashcardIndex === 0}
                  onClick={() => {
                    setFlashcardIndex(prev => Math.max(0, prev - 1));
                    setIsFlipped(false);
                  }}
                  className="flex items-center gap-1 font-bold text-slate-600 hover:text-slate-900 disabled:opacity-30"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Thẻ trước</span>
                </button>
                <button
                  disabled={flashcardIndex === filtered.length - 1}
                  onClick={() => {
                    setFlashcardIndex(prev => Math.min(filtered.length - 1, prev + 1));
                    setIsFlipped(false);
                  }}
                  className="flex items-center gap-1 font-bold text-slate-600 hover:text-slate-900 disabled:opacity-30"
                >
                  <span>Thẻ kế tiếp</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          )}
        </div>
      )}

      {/* VIEW 2: STANDARD LIST VIEW */}
      {viewMode === 'list' && (
        <div className="space-y-4">
          {filtered.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 shadow-xs">
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
                        ? 'bg-slate-50/60 border-slate-200 opacity-65'
                        : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                      <div className="space-y-1.5 flex-1">
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
      )}

    </div>
  );
};
