import React, { useState, useMemo } from 'react';
import { 
  ChevronDown, 
  ChevronRight, 
  BookOpen, 
  Clock, 
  CheckCircle2, 
  PlayCircle, 
  Sparkles,
  ArrowRight,
  Search,
  Filter,
  Code2,
  Palette,
  Terminal,
  Layers,
  GraduationCap
} from 'lucide-react';
import { CURRICULUM_MODULES, CURRICULUM_TRACKS, TrackInfo } from '../../data/curriculumData';
import { storageService } from '../../services/storageService';
import { CurriculumTrack } from '../../types';

interface CurriculumViewProps {
  onSelectLesson: (lessonId: string) => void;
  initialTrack?: CurriculumTrack;
}

export const CurriculumView: React.FC<CurriculumViewProps> = ({ 
  onSelectLesson,
  initialTrack = 'html'
}) => {
  const [selectedTrack, setSelectedTrack] = useState<CurriculumTrack | 'all'>(initialTrack);
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({
    'mod-html-1': true,
    'mod-html-2': true,
    'mod-2': true
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
      // 1. Track filter
      if (selectedTrack !== 'all') {
        const modTrack = mod.track || 'javascript';
        if (modTrack !== selectedTrack) return false;
      }

      // 2. Status filter
      const matchFilter = 
        filterMode === 'all' ? true :
        filterMode === 'in_progress' ? mod.status === 'in_progress' :
        mod.status === 'completed';

      if (!searchQuery.trim()) return matchFilter;

      // 3. Search query
      const q = searchQuery.toLowerCase();
      const matchModTitle = mod.title.toLowerCase().includes(q) || mod.englishTitle.toLowerCase().includes(q);
      const matchLesson = mod.lessons.some(l => l.title.toLowerCase().includes(q) || l.id.toLowerCase().includes(q));

      return matchFilter && (matchModTitle || matchLesson);
    });
  }, [selectedTrack, searchQuery, filterMode]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      
      {/* 3 Tracks Top Switcher */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {CURRICULUM_TRACKS.map(track => {
          const isSelected = selectedTrack === track.id;
          return (
            <div
              key={track.id}
              onClick={() => {
                setSelectedTrack(track.id);
                // Auto expand first module of selected track
                if (track.id === 'html') {
                  setExpandedModules(prev => ({ ...prev, 'mod-html-1': true, 'mod-html-2': true }));
                } else if (track.id === 'css') {
                  setExpandedModules(prev => ({ ...prev, 'mod-css-1': true }));
                } else {
                  setExpandedModules(prev => ({ ...prev, 'mod-2': true }));
                }
              }}
              className={`p-5 rounded-3xl border-2 transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                isSelected
                  ? 'border-indigo-600 bg-white shadow-lg ring-4 ring-indigo-500/10'
                  : 'border-slate-200 bg-white/80 hover:bg-white hover:border-slate-300 shadow-xs'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white shadow-sm ${track.bgColor}`}>
                    {track.id === 'html' && <Code2 className="w-5 h-5" />}
                    {track.id === 'css' && <Palette className="w-5 h-5" />}
                    {track.id === 'javascript' && <Terminal className="w-5 h-5" />}
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${
                    isSelected ? 'bg-indigo-50 text-indigo-700 border-indigo-200' : 'bg-slate-100 text-slate-600 border-slate-200'
                  }`}>
                    {track.badge}
                  </span>
                </div>

                <h2 className="text-base font-black text-slate-900 tracking-tight leading-snug">
                  {track.name}
                </h2>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed line-clamp-2">
                  {track.description}
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">
                  {track.modulesCount} chuyên đề • {track.durationHours} giờ
                </span>
                <span className={`font-bold flex items-center gap-1 ${
                  isSelected ? 'text-indigo-600' : 'text-slate-400'
                }`}>
                  {isSelected ? 'Đang xem' : 'Khám phá'}
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Box */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        
        {/* Header Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className={`px-3 py-0.5 rounded-full text-xs font-extrabold border ${
                selectedTrack === 'html'
                  ? 'bg-orange-100 text-orange-800 border-orange-200'
                  : selectedTrack === 'css'
                  ? 'bg-blue-100 text-blue-800 border-blue-200'
                  : 'bg-indigo-100 text-indigo-800 border-indigo-200'
              }`}>
                {selectedTrack === 'html' && 'Phần 1: HTML Tutorials (12 Chủ đề đầy đủ)'}
                {selectedTrack === 'css' && 'Phần 2: CSS Layout & Styling (8 Modules)'}
                {selectedTrack === 'javascript' && 'Phần 3: JavaScript Thực chiến (17 Modules)'}
                {selectedTrack === 'all' && 'Toàn bộ Khung chương trình Web Master (37 Modules)'}
              </span>
              <span className="text-xs text-slate-500">Hệ Cao đẳng CNTT</span>
            </div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              {selectedTrack === 'html' && 'Chương trình HTML5 chuẩn kiến trúc & thực hành tương tác'}
              {selectedTrack === 'css' && 'Làm chủ CSS3, Flexbox, Grid & Responsive Web Design'}
              {selectedTrack === 'javascript' && 'Lập trình JavaScript chuẩn năng lực (Learning-by-Doing)'}
              {selectedTrack === 'all' && 'Khung chương trình 3 Trụ Cột: HTML • CSS • JavaScript'}
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Hệ thống hóa toàn diện theo chu trình Learning-by-Doing: 16 thành phần sư phạm, Test Cases tự động, Live Preview và AI Tutor hỗ trợ.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {selectedTrack === 'html' ? (
              <button
                onClick={() => onSelectLesson('les-html-1')}
                className="px-4 py-2 bg-orange-500 hover:bg-orange-400 text-slate-950 rounded-xl text-xs font-bold flex items-center gap-2 shadow-xs transition-all active:scale-95"
              >
                <BookOpen className="w-4 h-4" />
                <span>Học HTML Bài 1</span>
              </button>
            ) : selectedTrack === 'css' ? (
              <button
                onClick={() => onSelectLesson('les-css-1-1')}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-xs transition-all active:scale-95"
              >
                <BookOpen className="w-4 h-4" />
                <span>Học CSS Bài 1.1</span>
              </button>
            ) : (
              <button
                onClick={() => onSelectLesson('les-2-1')}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-bold flex items-center gap-2 shadow-xs transition-all active:scale-95"
              >
                <BookOpen className="w-4 h-4" />
                <span>Vào JS Bài 2.1</span>
              </button>
            )}
          </div>
        </div>

        {/* Search, Filter & Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Tìm kiếm bài học, chủ đề, thẻ HTML, cú pháp..."
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
                Tất cả ({filteredModules.length})
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
            const isHtmlMod = mod.track === 'html';
            const isCssMod = mod.track === 'css';

            return (
              <div
                key={mod.id}
                className={`border rounded-2xl overflow-hidden bg-white shadow-xs transition-all ${
                  isHtmlMod ? 'border-orange-200/80 hover:border-orange-300' :
                  isCssMod ? 'border-blue-200/80 hover:border-blue-300' :
                  'border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Module Header */}
                <div
                  onClick={() => toggleModule(mod.id)}
                  className="p-5 flex items-start sm:items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors"
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-10 h-10 rounded-xl font-black text-sm flex items-center justify-center shrink-0 ${
                      isHtmlMod ? 'bg-orange-100 text-orange-800' :
                      isCssMod ? 'bg-blue-100 text-blue-800' :
                      mod.status === 'completed' ? 'bg-emerald-100 text-emerald-800' :
                      mod.status === 'in_progress' ? 'bg-amber-500 text-slate-950' :
                      'bg-slate-100 text-slate-600'
                    }`}>
                      {isHtmlMod ? `H${mod.number}` : isCssMod ? `C${mod.number}` : `M${mod.number}`}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h2 className="text-sm sm:text-base font-bold text-slate-900">{mod.title}</h2>
                        {isHtmlMod && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-100 text-orange-800 border border-orange-200">
                            HTML Tutorial
                          </span>
                        )}
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
                          {mod.durationHours} giờ ({mod.lessonsCount} bài học)
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
                    <p className="text-slate-600 leading-relaxed font-sans">
                      {mod.description}
                    </p>

                    {/* Lessons list */}
                    <div className="space-y-2">
                      <span className="font-bold text-slate-800 uppercase tracking-wider block">
                        Danh sách bài học ({mod.lessons.length} bài):
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {mod.lessons.map((les, idx) => {
                          const isDone = completedLessonIds.has(les.id) || les.id === 'les-html-1';
                          return (
                            <div
                              key={les.id}
                              onClick={() => onSelectLesson(les.id)}
                              className={`p-3 rounded-xl bg-white border transition-all cursor-pointer flex items-center justify-between gap-2 ${
                                isDone 
                                  ? 'border-emerald-200 hover:border-emerald-400 hover:shadow-xs'
                                  : isHtmlMod
                                  ? 'border-orange-200 hover:border-orange-400 hover:shadow-xs'
                                  : 'border-slate-200 hover:border-indigo-300 hover:shadow-xs'
                              }`}
                            >
                              <div className="flex items-center gap-2.5 truncate">
                                <span className={`w-5 h-5 rounded font-mono text-[11px] font-bold flex items-center justify-center shrink-0 ${
                                  isDone ? 'bg-emerald-100 text-emerald-800' :
                                  isHtmlMod ? 'bg-orange-100 text-orange-800' :
                                  'bg-slate-100 text-slate-700'
                                }`}>
                                  {isDone ? '✓' : idx + 1}
                                </span>
                                <span className="font-semibold text-slate-900 truncate">{les.title}</span>
                              </div>
                              <div className="flex items-center gap-1.5 shrink-0">
                                <span className="text-[10px] text-slate-400">{les.durationMinutes}p</span>
                                <ArrowRight className={`w-3.5 h-3.5 ${isHtmlMod ? 'text-orange-600' : 'text-indigo-600'}`} />
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
