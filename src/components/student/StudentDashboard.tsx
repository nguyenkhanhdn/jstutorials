import React from 'react';
import { 
  Flame, 
  Zap, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  AlertTriangle, 
  Bookmark as BookmarkIcon, 
  BookOpen, 
  Award,
  Layers,
  ChevronRight
} from 'lucide-react';
import { CURRICULUM_MODULES } from '../../data/curriculumData';
import { Bookmark, StudentProfile } from '../../types';

interface StudentDashboardProps {
  student: StudentProfile;
  bookmarks: Bookmark[];
  onStartLesson: (lessonId: string) => void;
  onNavigateTab: (tab: any) => void;
  onOpenKnowledgeMap: () => void;
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({
  student,
  bookmarks,
  onStartLesson,
  onNavigateTab,
  onOpenKnowledgeMap
}) => {
  const unresolvedBookmarks = bookmarks.filter(b => !b.isResolved);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-amber-400 text-slate-950 uppercase tracking-wider">
                Học liệu Learning-by-Doing
              </span>
              <span className="text-xs text-slate-300">Mã SV: {student.code}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              Xin chào, {student.fullName}!
            </h1>
            <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
              Bạn đang ở Module 2: <strong>Biến và kiểu dữ liệu</strong>. Duy trì chuỗi ngày học để biến việc lập trình thành phản xạ tự nhiên nhé!
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onStartLesson('les-2-1')}
              className="px-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all active:scale-95"
            >
              <BookOpen className="w-4 h-4 fill-slate-950" />
              <span>Tiếp tục học Bài 2.1</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenKnowledgeMap}
              className="px-4 py-3 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm transition-all"
            >
              Bản đồ tri thức
            </button>
          </div>
        </div>

        {/* Ambient glow decoration */}
        <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <Flame className="w-6 h-6 fill-amber-500" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900">{student.streakDays} ngày</div>
            <div className="text-xs font-medium text-slate-500">Chuỗi học tập liên tục</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
            <Zap className="w-6 h-6 fill-indigo-500" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900">{student.xp} XP</div>
            <div className="text-xs font-medium text-slate-500">Điểm kinh nghiệm</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900">{student.completedLessons}/{student.totalLessons}</div>
            <div className="text-xs font-medium text-slate-500">Bài học hoàn thành ({student.overallProgress}%)</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900">{student.averageQuizScore}%</div>
            <div className="text-xs font-medium text-slate-500">Điểm Quiz trung bình</div>
          </div>
        </div>
      </div>

      {/* Main Grid: Needs Review & Recent Bookmarks */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Progress & Modules */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Quick Resume Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Clock className="w-4 h-4 text-indigo-600" />
                <span>Nội dung đang học dở</span>
              </h2>
              <span className="text-xs text-slate-500">Hoàn thành 60%</span>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                  Bài 2.1
                </span>
                <h3 className="font-bold text-slate-900 text-sm">
                  Khai báo biến với let, const và Kiểu dữ liệu nguyên thủy
                </h3>
                <p className="text-xs text-slate-500">
                  Đã hoàn thành phần Lý thuyết & Dự đoán output • Đang ở Bài tập Level 2
                </p>
              </div>

              <button
                onClick={() => onStartLesson('les-2-1')}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold shrink-0 flex items-center gap-1.5 transition-colors shadow-xs"
              >
                <span>Vào học ngay</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Modules Overview */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-indigo-600" />
                  <span>Tiến độ 17 Modules chuẩn Cao đẳng</span>
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">Khung chương trình đào tạo theo chuẩn đầu ra năng lực</p>
              </div>
              <button
                onClick={() => onNavigateTab('curriculum')}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
              >
                <span>Xem tất cả</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-3">
              {CURRICULUM_MODULES.slice(0, 5).map(mod => (
                <div
                  key={mod.id}
                  onClick={() => onNavigateTab('curriculum')}
                  className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-indigo-200 transition-all cursor-pointer flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg font-bold text-xs flex items-center justify-center ${
                      mod.status === 'completed' ? 'bg-emerald-100 text-emerald-800' :
                      mod.status === 'in_progress' ? 'bg-amber-100 text-amber-800' :
                      'bg-slate-200 text-slate-600'
                    }`}>
                      M{mod.number}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">{mod.title}</div>
                      <div className="text-[11px] text-slate-500">{mod.lessonsCount} bài học • {mod.durationHours} giờ</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      mod.status === 'completed' ? 'bg-emerald-100 text-emerald-800' :
                      mod.status === 'in_progress' ? 'bg-amber-100 text-amber-800' :
                      'bg-slate-100 text-slate-500'
                    }`}>
                      {mod.status === 'completed' ? 'Đã xong' : mod.status === 'in_progress' ? 'Đang học' : 'Chưa học'}
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Needs Review & Bookmarks */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Needs Review Alert Box */}
          <div className="bg-rose-50/70 border border-rose-200 rounded-2xl p-5 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-rose-800 font-bold text-sm">
              <AlertTriangle className="w-4 h-4" />
              <span>Cần củng cố kiến thức (Needs Review)</span>
            </div>
            <p className="text-xs text-rose-900 leading-relaxed">
              Hệ thống phát hiện bạn có tỷ lệ làm sai trên 40% ở chuẩn đầu ra:
            </p>
            <div className="p-3 bg-white rounded-xl border border-rose-200 text-xs text-slate-800 font-medium">
              🎯 <strong>LO2.3:</strong> Phân biệt kiểu dữ liệu nguyên thủy & cơ chế kiểm tra với <code className="text-rose-700">typeof null</code>
            </div>
            <button
              onClick={() => onNavigateTab('review')}
              className="w-full py-2 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl transition-colors shadow-xs"
            >
              Ôn tập khắc phục ngay →
            </button>
          </div>

          {/* Bookmarks preview */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <BookmarkIcon className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>Bookmark gần đây</span>
              </h3>
              <button
                onClick={() => onNavigateTab('bookmarks')}
                className="text-xs font-semibold text-indigo-600 hover:text-indigo-800"
              >
                Xem tất cả ({unresolvedBookmarks.length})
              </button>
            </div>

            {unresolvedBookmarks.length === 0 ? (
              <p className="text-xs text-slate-400 italic">Chưa có bookmark nào được lưu.</p>
            ) : (
              <div className="space-y-2.5">
                {unresolvedBookmarks.slice(0, 3).map(bm => (
                  <div key={bm.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900 truncate">{bm.targetTitle}</span>
                      <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded ${
                        bm.reason === 'chua_hieu' ? 'bg-rose-100 text-rose-700' :
                        bm.reason === 'kho_nho' ? 'bg-purple-100 text-purple-700' :
                        'bg-amber-100 text-amber-700'
                      }`}>
                        {bm.reason.replace('_', ' ')}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-500 truncate">{bm.lessonTitle}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>

    </div>
  );
};
