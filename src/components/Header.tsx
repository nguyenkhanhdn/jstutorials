import React from 'react';
import { 
  GraduationCap, 
  Users, 
  FileText, 
  Flame, 
  Zap, 
  Bookmark as BookmarkIcon, 
  MapPin, 
  CheckCircle2, 
  Search,
  Code2
} from 'lucide-react';

export type AppViewMode = 'student' | 'teacher' | 'docs';
export type StudentSubView = 'dashboard' | 'curriculum' | 'lesson' | 'practice' | 'bookmarks' | 'review';

interface HeaderProps {
  viewMode: AppViewMode;
  setViewMode: (mode: AppViewMode) => void;
  studentSubView: StudentSubView;
  setStudentSubView: (subView: StudentSubView) => void;
  onOpenKnowledgeMap: () => void;
  bookmarkCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  viewMode,
  setViewMode,
  studentSubView,
  setStudentSubView,
  onOpenKnowledgeMap,
  bookmarkCount
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo & Platform Title */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-xl shadow-md shadow-amber-500/20">
              JS
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-slate-900 tracking-tight text-lg">JS Master</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-200">
                  Cao đẳng CNTT
                </span>
              </div>
              <p className="text-xs text-slate-700 hidden sm:block">Học liệu số tương tác • Learning-by-Doing</p>
            </div>
          </div>

          {/* Primary View Mode Switcher */}
          <div className="flex items-center bg-slate-100/90 p-1 rounded-xl border border-slate-200 text-xs font-semibold">
            <button
              onClick={() => setViewMode('student')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                viewMode === 'student'
                  ? 'bg-white text-slate-900 shadow-xs font-bold'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              <GraduationCap className="w-4 h-4 text-indigo-700" />
              <span>Góc Sinh viên</span>
            </button>
            <button
              onClick={() => setViewMode('teacher')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                viewMode === 'teacher'
                  ? 'bg-white text-slate-900 shadow-xs font-bold'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              <Users className="w-4 h-4 text-emerald-700" />
              <span>Góc Giảng viên</span>
            </button>
            <button
              onClick={() => setViewMode('docs')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                viewMode === 'docs'
                  ? 'bg-white text-slate-900 shadow-xs font-bold'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              <FileText className="w-4 h-4 text-amber-700" />
              <span>Đề cương & Kiến trúc A-L</span>
            </button>
          </div>

          {/* Right Action Stats (Student Mode) */}
          {viewMode === 'student' ? (
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={onOpenKnowledgeMap}
                className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 rounded-lg transition-colors border border-slate-200"
                title="Xem bản đồ cây tri thức & điều kiện tiên quyết"
              >
                <MapPin className="w-3.5 h-3.5 text-indigo-700" />
                <span>Bản đồ tri thức</span>
              </button>

              <button
                onClick={() => setStudentSubView('bookmarks')}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                  studentSubView === 'bookmarks'
                    ? 'bg-amber-50 border-amber-300 text-amber-900 font-bold'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
                title="Danh sách Bookmark đã lưu"
              >
                <BookmarkIcon className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span>{bookmarkCount}</span>
              </button>

              <div className="hidden lg:flex items-center gap-2 pl-2 border-l border-slate-200 text-xs">
                <span className="flex items-center gap-1 font-bold text-amber-800 bg-amber-50 border border-amber-200/80 px-2 py-1 rounded-md">
                  <Flame className="w-3.5 h-3.5 text-amber-700 fill-amber-500" />
                  7 ngày
                </span>
                <span className="flex items-center gap-1 font-bold text-indigo-800 bg-indigo-50 border border-indigo-200/80 px-2 py-1 rounded-md">
                  <Zap className="w-3.5 h-3.5 text-indigo-700 fill-indigo-500" />
                  1,450 XP
                </span>
              </div>

              {/* Student Avatar */}
              <div className="flex items-center gap-2 pl-2">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80"
                  alt="Student"
                  className="w-8 h-8 rounded-full border border-slate-200 shadow-xs"
                />
              </div>
            </div>
          ) : viewMode === 'teacher' ? (
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                Lớp: WD18301 (25 SV)
              </span>
              <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                  GV
                </div>
                <div className="hidden sm:block text-xs">
                  <div className="font-bold text-slate-900">Thầy Khang IT</div>
                  <div className="text-slate-600">Giảng viên bộ môn</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                Bản đặc tả 12 Phần Chuẩn
              </span>
            </div>
          )}

        </div>

        {/* Secondary Subview Navbar (when in Student View) */}
        {viewMode === 'student' && (
          <div className="flex items-center gap-1 overflow-x-auto py-2 border-t border-slate-100 text-xs">
            <button
              onClick={() => setStudentSubView('dashboard')}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                studentSubView === 'dashboard'
                  ? 'bg-slate-900 text-white font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Tổng quan học tập
            </button>
            <button
              onClick={() => setStudentSubView('curriculum')}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                studentSubView === 'curriculum'
                  ? 'bg-slate-900 text-white font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Lộ trình 17 Modules
            </button>
            <button
              onClick={() => setStudentSubView('lesson')}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap flex items-center gap-1 transition-colors ${
                studentSubView === 'lesson'
                  ? 'bg-slate-900 text-white font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Code2 className="w-3.5 h-3.5 text-amber-500" />
              <span>Phòng học tương tác (Bài 2.1 Mẫu)</span>
            </button>
            <button
              onClick={() => setStudentSubView('review')}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                studentSubView === 'review'
                  ? 'bg-slate-900 text-white font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Ôn tập & Củng cố (Spaced Review)
            </button>
            <button
              onClick={() => setStudentSubView('bookmarks')}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                studentSubView === 'bookmarks'
                  ? 'bg-slate-900 text-white font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              My Bookmarks ({bookmarkCount})
            </button>
          </div>
        )}

      </div>
    </header>
  );
};
