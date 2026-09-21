import React, { useState, useMemo } from 'react';
import { 
  ChevronDown, 
  ChevronRight, 
  BookOpen, 
  Clock, 
  CheckCircle2, 
  PlayCircle, 
  Lock, 
  Sparkles,
  ArrowRight,
  Search,
  Filter,
  Check,
  FolderOpen
} from 'lucide-react';
import { CURRICULUM_MODULES } from '../../data/curriculumData';
import { storageService } from '../../services/storageService';

interface CurriculumViewProps {
  onSelectLesson: (lessonId: string) => void;
}

export const CurriculumView: React.FC<CurriculumViewProps> = ({ onSelectLesson }) => {
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({
    'mod-2': true // Expand Module 2 by default
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [filterMode, setFilterMode] = useState<'all' | 'in_progress' | 'completed'>('all');

  const completedLessonIds = useMemo(() => {
    return new Set(storageService.getCompletedLessonIds());
  }, []);

  const toggleModule = (id: string) => {
    setExpandedModules(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleExpandAll = () => {
    const allExp: Record<string, boolean> = {};
    CURRICULUM_MODULES.forEach(m => { allExp[m.id] = true; });
    setExpandedModules(allExp);
  };

  const handleCollapseAll = () => {
    setExpandedModules({});
  };

  const filteredModules = useMemo(() => {
    return CURRICULUM_MODULES.filter(mod => {
      const matchFilter = 
        filterMode === 'all' ? true :
        filterMode === 'in_progress' ? mod.status === 'in_progress' :
        mod.status === 'completed';

      if (!searchQuery.trim()) return matchFilter;

      const q = searchQuery.toLowerCase();
      const matchModTitle = mod.title.toLowerCase().includes(q) || mod.englishTitle.toLowerCase().includes(q);
      const matchLesson = mod.lessons.some(l => l.title.toLowerCase().includes(q) || l.id.toLowerCase().includes(q));

      return matchFilter && (matchModTitle || matchLesson);
    });
  }, [searchQuery, filterMode]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        
        {/* Header Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-3 py-0.5 rounded-full text-xs font-extrabold bg-indigo-100 text-indigo-800 border border-indigo-200">
                17 Modules Đào tạo Chuẩn
              </span>
              <span className="text-xs text-slate-500">Hệ Cao đẳng CNTT (90 Giờ • 75 Bài học)</span>
            </div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              Khung chương trình JavaScript theo chuẩn năng lực
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Hệ thống hóa toàn diện theo chu trình Learning-by-Doing (16 thành phần sư phạm, Test Cases tự động, AI Scaffolding).
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelectLesson('les-17-1')}
              className="px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all"
            >
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>Mini Projects (M17)</span>
            </button>
            <button
              onClick={() => onSelectLesson('les-2-1')}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-bold flex items-center gap-2 shadow-xs transition-all active:scale-95"
            >
              <BookOpen className="w-4 h-4" />
              <span>Vào Bài 2.1</span>
            </button>
          </div>
        </div>

        {/* Search, Filter & Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Tìm kiếm bài học, chủ đề, cú pháp..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-indigo-600 bg-slate-50 focus:bg-white"
            />
          </div>

          <div className="flex items-center justify-between w-full sm:w-auto gap-2">
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs">
              <button
                onClick={() => setFilterMode('all')}
                className={`px-3 py-1 rounded-lg font-bold transition-colors ${
                  filterMode === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Tất cả (17)
              </button>
              <button
                onClick={() => setFilterMode('in_progress')}
                className={`px-3 py-1 rounded-lg font-bold transition-colors ${
                  filterMode === 'in_progress' ? 'bg-white text-amber-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Đang học
              </button>
              <button
                onClick={() => setFilterMode('completed')}
                className={`px-3 py-1 rounded-lg font-bold transition-colors ${
                  filterMode === 'completed' ? 'bg-white text-emerald-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Đã hoàn thành
              </button>
            </div>

            <div className="flex items-center gap-1 text-[11px] text-slate-500 font-semibold">
              <button onClick={handleExpandAll} className="hover:text-indigo-600 px-1 py-0.5">
                Mở tất cả
              </button>
              <span>•</span>
              <button onClick={handleCollapseAll} className="hover:text-indigo-600 px-1 py-0.5">
                Thu gọn
              </button>
            </div>
          </div>
        </div>

        {/* Modules List */}
        <div className="space-y-4 pt-2">
          {filteredModules.map(mod => {
            const isExpanded = !!expandedModules[mod.id] || searchQuery.trim().length > 0;
            return (
              <div
                key={mod.id}
                className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-xs transition-all"
              >
                {/* Module Header */}
                <div
                  onClick={() => toggleModule(mod.id)}
                  className="p-5 flex items-start sm:items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors"
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-10 h-10 rounded-xl font-black text-sm flex items-center justify-center shrink-0 ${
                      mod.status === 'completed' ? 'bg-emerald-100 text-emerald-800' :
                      mod.status === 'in_progress' ? 'bg-amber-500 text-slate-950' :
                      'bg-slate-100 text-slate-600'
                    }`}>
                      M{mod.number}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-sm sm:text-base font-bold text-slate-900">{mod.title}</h2>
                        {mod.status === 'in_progress' && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                            Đang học
                          </span>
                        )}
                        {mod.status === 'completed' && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                            Đã hoàn thành
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-500 flex items-center gap-3 mt-0.5">
                        <span>{mod.englishTitle}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {mod.durationHours} giờ ({mod.lessonsCount} bài)
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-slate-400">
                      {isExpanded ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                    </div>
                  </div>
                </div>

                {/* Module Expanded Details */}
                {isExpanded && (
                  <div className="px-5 pb-5 pt-2 border-t border-slate-100 bg-slate-50/40 space-y-4 text-xs">
                    <p className="text-slate-600 leading-relaxed">
                      {mod.description}
                    </p>

                    {/* Lessons list */}
                    <div className="space-y-2">
                      <span className="font-bold text-slate-800 uppercase tracking-wider block">
                        Danh sách bài học ({mod.lessons.length} bài):
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {mod.lessons.map((les, idx) => {
                          const isDone = completedLessonIds.has(les.id) || les.id === 'les-2-1';
                          return (
                            <div
                              key={les.id}
                              onClick={() => onSelectLesson(les.id)}
                              className={`p-3 rounded-xl bg-white border transition-all cursor-pointer flex items-center justify-between gap-2 ${
                                isDone 
                                  ? 'border-emerald-200 hover:border-emerald-400 hover:shadow-xs'
                                  : 'border-slate-200 hover:border-indigo-300 hover:shadow-xs'
                              }`}
                            >
                              <div className="flex items-center gap-2.5 truncate">
                                <span className={`w-5 h-5 rounded font-mono text-[11px] font-bold flex items-center justify-center shrink-0 ${
                                  isDone ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-700'
                                }`}>
                                  {isDone ? '✓' : idx + 1}
                                </span>
                                <span className="font-semibold text-slate-900 truncate">{les.title}</span>
                              </div>
                              <div className="flex items-center gap-1.5 shrink-0">
                                <span className="text-[10px] text-slate-400">{les.durationMinutes}p</span>
                                <ArrowRight className="w-3.5 h-3.5 text-indigo-600" />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

