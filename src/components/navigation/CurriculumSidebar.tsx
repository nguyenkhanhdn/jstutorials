import React, { useState, useMemo } from 'react';
import { 
  ChevronDown, 
  ChevronRight, 
  CheckCircle2, 
  Circle, 
  Code2, 
  Palette, 
  Terminal, 
  Search, 
  X, 
  BookOpen, 
  Bookmark as BookmarkIcon,
  Flame,
  Layout,
  Clock,
  Sparkles,
  ArrowRight,
  PanelLeftClose,
  PanelLeftOpen
} from 'lucide-react';
import { CURRICULUM_TRACKS, HTML_MODULES, CSS_MODULES, JS_MODULES } from '../../data/curriculumData';
import { CSS_TOPICS_LIST } from '../../data/cssLessonsData';
import { CurriculumTrack, ProgressStatus } from '../../types';

interface CurriculumSidebarProps {
  currentLessonId: string;
  onSelectLesson: (lessonId: string) => void;
  completedLessonIds: Set<string>;
  isOpen: boolean;
  onToggleOpen: () => void;
}

export const CurriculumSidebar: React.FC<CurriculumSidebarProps> = ({
  currentLessonId,
  onSelectLesson,
  completedLessonIds,
  isOpen,
  onToggleOpen
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cssDisplayMode, setCssDisplayMode] = useState<'topics' | 'modules'>('topics');
  
  // Track open state for 3 big sections
  const [openTracks, setOpenTracks] = useState<Record<CurriculumTrack, boolean>>({
    html: true,
    css: false,
    javascript: false
  });

  // Auto-expand track when current lesson changes
  React.useEffect(() => {
    if (currentLessonId.startsWith('les-html')) {
      setOpenTracks(prev => ({ ...prev, html: true }));
    } else if (currentLessonId.startsWith('les-css')) {
      setOpenTracks(prev => ({ ...prev, css: true }));
    } else {
      setOpenTracks(prev => ({ ...prev, javascript: true }));
    }
  }, [currentLessonId]);

  // Track open state for individual modules within tracks (for multi-lesson modules)
  const [openModules, setOpenModules] = useState<Record<string, boolean>>({
    'mod-html-1': true,
    'mod-css-1': true,
    'mod-2': true
  });

  const toggleTrack = (track: CurriculumTrack) => {
    setOpenTracks(prev => ({ ...prev, [track]: !prev[track] }));
  };

  const toggleModule = (moduleId: string) => {
    setOpenModules(prev => ({ ...prev, [moduleId]: !prev[moduleId] }));
  };

  // Filter modules based on search
  const filterList = (modules: typeof HTML_MODULES) => {
    if (!searchQuery.trim()) return modules;
    const q = searchQuery.toLowerCase();
    return modules.filter(m => 
      m.title.toLowerCase().includes(q) ||
      m.englishTitle.toLowerCase().includes(q) ||
      m.lessons.some(l => l.title.toLowerCase().includes(q) || l.id.toLowerCase().includes(q))
    );
  };

  const filteredHtml = useMemo(() => filterList(HTML_MODULES), [searchQuery]);
  const filteredCss = useMemo(() => filterList(CSS_MODULES), [searchQuery]);
  const filteredJs = useMemo(() => filterList(JS_MODULES), [searchQuery]);

  const filteredCssTopics = useMemo(() => {
    if (!searchQuery.trim()) return CSS_TOPICS_LIST;
    const q = searchQuery.toLowerCase();
    return CSS_TOPICS_LIST.filter(t => 
      t.title.toLowerCase().includes(q) ||
      t.englishTitle.toLowerCase().includes(q) ||
      t.summary.toLowerCase().includes(q) ||
      t.tags.some(tag => tag.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  // Overall stats
  const totalCompleted = completedLessonIds.size;
  const totalLessons = HTML_MODULES.length + CSS_MODULES.flatMap(m => m.lessons).length + JS_MODULES.flatMap(m => m.lessons).length;

  if (!isOpen) {
    return (
      <button
        onClick={onToggleOpen}
        className="fixed left-3 bottom-6 z-30 p-3 bg-slate-900 text-white rounded-2xl shadow-xl hover:bg-slate-800 border border-slate-700 transition-all flex items-center gap-2 group"
        title="Mở thanh mục lục bài học"
      >
        <PanelLeftOpen className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
        <span className="text-xs font-bold hidden sm:inline">Mục lục 3 Phần</span>
      </button>
    );
  }

  return (
    <aside className="w-80 lg:w-84 bg-white border-r border-slate-200 flex flex-col shrink-0 h-[calc(100vh-4rem)] sticky top-16 shadow-xs z-30 transition-all">
      {/* Sidebar Header */}
      <div className="p-4 border-b border-slate-100 bg-slate-50/70">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
              <Layout className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                Mục lục đào tạo
              </h2>
              <p className="text-[10px] text-slate-500">
                Đã hoàn thành {totalCompleted}/{totalLessons} bài học
              </p>
            </div>
          </div>

          <button
            onClick={onToggleOpen}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors"
            title="Thu gọn thanh điều hướng"
          >
            <PanelLeftClose className="w-4 h-4" />
          </button>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Tìm kiếm bài học..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-7 py-1.5 text-xs bg-white rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>

      {/* Navigation Scroll Area */}
      <div className="flex-1 overflow-y-auto p-3 space-y-4 font-sans divide-y divide-slate-100">
        
        {/* ================================================================= */}
        {/* PHẦN 1: HTML */}
        {/* ================================================================= */}
        <div className="pt-1">
          <button
            onClick={() => toggleTrack('html')}
            className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-orange-50/80 transition-colors group text-left"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-orange-500 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-xs text-slate-900 group-hover:text-orange-950">
                    1. HTML Tutorials
                  </span>
                  <span className="px-1.5 py-0.2 rounded-full text-[9px] font-bold bg-orange-100 text-orange-800 border border-orange-200">
                    12 Chủ đề
                  </span>
                </div>
                <p className="text-[10px] text-slate-500">Cấu trúc, Thẻ, Form, Bảng, Semantic</p>
              </div>
            </div>
            <div className="text-slate-400 group-hover:text-slate-700">
              {openTracks.html ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </div>
          </button>

          {/* HTML Lessons List */}
          {openTracks.html && (
            <div className="mt-1.5 ml-2 pl-3 border-l-2 border-orange-200 space-y-1">
              {filteredHtml.map(mod => {
                const lesson = mod.lessons[0];
                const isActive = lesson.id === currentLessonId;
                const isDone = completedLessonIds.has(lesson.id) || lesson.id === 'les-html-1';

                return (
                  <button
                    key={lesson.id}
                    onClick={() => onSelectLesson(lesson.id)}
                    className={`w-full text-left px-2.5 py-2 rounded-xl text-xs flex items-center justify-between gap-2 transition-all ${
                      isActive
                        ? 'bg-orange-500 text-slate-950 font-bold shadow-xs'
                        : isDone
                        ? 'text-slate-800 hover:bg-orange-50/60'
                        : 'text-slate-600 hover:bg-slate-100/80'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      {isDone ? (
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-slate-950' : 'text-emerald-600'}`} />
                      ) : (
                        <Circle className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-slate-950' : 'text-slate-300'}`} />
                      )}
                      <span className="truncate">
                        <strong>H{mod.number}.</strong> {mod.title}
                      </span>
                    </div>
                    <span className={`text-[10px] shrink-0 font-medium ${isActive ? 'text-slate-900' : 'text-slate-400'}`}>
                      {lesson.durationMinutes}p
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* ================================================================= */}
        {/* PHẦN 2: CSS */}
        {/* ================================================================= */}
        <div className="pt-3">
          <button
            onClick={() => toggleTrack('css')}
            className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-blue-50/80 transition-colors group text-left"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-blue-500 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                <Palette className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-xs text-slate-900 group-hover:text-blue-950">
                    2. CSS Định kiểu & Giao diện
                  </span>
                  <span className="px-1.5 py-0.2 rounded-full text-[9px] font-bold bg-blue-100 text-blue-800 border border-blue-200">
                    34 Chủ đề
                  </span>
                </div>
                <p className="text-[10px] text-slate-500">Box Model, Flexbox, Grid, Animation, RWD</p>
              </div>
            </div>
            <div className="text-slate-400 group-hover:text-slate-700">
              {openTracks.css ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </div>
          </button>

          {/* CSS Content Area */}
          {openTracks.css && (
            <div className="mt-1.5 ml-2 pl-3 border-l-2 border-blue-200 space-y-2">
              {/* Mode switch: 34 Chủ đề vs 8 Chuyên đề */}
              <div className="flex items-center bg-slate-100 p-0.5 rounded-lg text-[10px] font-medium text-slate-600 mb-2">
                <button
                  onClick={() => setCssDisplayMode('topics')}
                  className={`flex-1 py-1 rounded-md transition-all text-center ${
                    cssDisplayMode === 'topics'
                      ? 'bg-white text-blue-700 font-bold shadow-xs'
                      : 'hover:text-slate-900'
                  }`}
                >
                  34 Chủ đề
                </button>
                <button
                  onClick={() => setCssDisplayMode('modules')}
                  className={`flex-1 py-1 rounded-md transition-all text-center ${
                    cssDisplayMode === 'modules'
                      ? 'bg-white text-blue-700 font-bold shadow-xs'
                      : 'hover:text-slate-900'
                  }`}
                >
                  8 Chuyên đề
                </button>
              </div>

              {/* View 1: 34 Chủ đề CSS dạng danh sách trực tiếp */}
              {cssDisplayMode === 'topics' && (
                <div className="space-y-1">
                  {filteredCssTopics.map(topic => {
                    const isActive = topic.id === currentLessonId;
                    const isDone = completedLessonIds.has(topic.id);

                    return (
                      <button
                        key={topic.id}
                        onClick={() => onSelectLesson(topic.id)}
                        className={`w-full text-left px-2 py-1.5 rounded-xl text-xs flex items-center justify-between gap-1.5 transition-all ${
                          isActive
                            ? 'bg-blue-600 text-white font-bold shadow-xs'
                            : isDone
                            ? 'text-slate-800 hover:bg-blue-50/60'
                            : 'text-slate-600 hover:bg-slate-100/80'
                        }`}
                        title={topic.summary}
                      >
                        <div className="flex items-center gap-1.5 truncate">
                          {isDone ? (
                            <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-white' : 'text-emerald-600'}`} />
                          ) : (
                            <Circle className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-white' : 'text-slate-300'}`} />
                          )}
                          <span className="truncate">
                            <strong>{topic.topicNumber}.</strong> {topic.title}
                          </span>
                        </div>
                        <span className={`text-[10px] shrink-0 font-medium ${isActive ? 'text-blue-100' : 'text-slate-400'}`}>
                          {topic.durationMinutes}p
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* View 2: 8 Chuyên đề logic dạng nhóm mở rộng */}
              {cssDisplayMode === 'modules' && (
                <div className="space-y-1.5">
                  {filteredCss.map(mod => {
                    const isModOpen = !!openModules[mod.id] || searchQuery.length > 0;
                    return (
                      <div key={mod.id} className="space-y-1">
                        <div
                          onClick={() => toggleModule(mod.id)}
                          className="flex items-center justify-between px-2 py-1 text-[11px] font-bold text-slate-700 hover:text-blue-800 cursor-pointer rounded-lg hover:bg-blue-50/50"
                        >
                          <span className="truncate">C{mod.number}. {mod.title}</span>
                          <ChevronRight className={`w-3 h-3 text-slate-400 transition-transform ${isModOpen ? 'rotate-90' : ''}`} />
                        </div>

                        {isModOpen && (
                          <div className="ml-2 space-y-0.5">
                            {mod.lessons.map(les => {
                              const isActive = les.id === currentLessonId;
                              const isDone = completedLessonIds.has(les.id);
                              return (
                                <button
                                  key={les.id}
                                  onClick={() => onSelectLesson(les.id)}
                                  className={`w-full text-left px-2 py-1.5 rounded-lg text-xs flex items-center justify-between gap-1.5 transition-all ${
                                    isActive
                                      ? 'bg-blue-600 text-white font-bold shadow-xs'
                                      : isDone
                                      ? 'text-slate-800 hover:bg-blue-50/60'
                                      : 'text-slate-600 hover:bg-slate-100/80'
                                  }`}
                                >
                                  <div className="flex items-center gap-1.5 truncate">
                                    {isDone ? (
                                      <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-white' : 'text-emerald-600'}`} />
                                    ) : (
                                      <Circle className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-white' : 'text-slate-300'}`} />
                                    )}
                                    <span className="truncate">{les.title}</span>
                                  </div>
                                  <span className={`text-[10px] shrink-0 ${isActive ? 'text-blue-100' : 'text-slate-400'}`}>
                                    {les.durationMinutes}p
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>

        {/* ================================================================= */}
        {/* PHẦN 3: JAVASCRIPT */}
        {/* ================================================================= */}
        <div className="pt-3">
          <button
            onClick={() => toggleTrack('javascript')}
            className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-amber-50/80 transition-colors group text-left"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-xs shadow-xs">
                <Terminal className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-xs text-slate-900 group-hover:text-amber-950">
                    3. JavaScript Thực chiến
                  </span>
                  <span className="px-1.5 py-0.2 rounded-full text-[9px] font-bold bg-amber-100 text-amber-800 border border-amber-200">
                    17 Modules
                  </span>
                </div>
                <p className="text-[10px] text-slate-500">DOM, Event, Async, Fetch, Mini Projects</p>
              </div>
            </div>
            <div className="text-slate-400 group-hover:text-slate-700">
              {openTracks.javascript ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </div>
          </button>

          {/* JS Modules List */}
          {openTracks.javascript && (
            <div className="mt-1.5 ml-2 pl-3 border-l-2 border-amber-300 space-y-2">
              {filteredJs.map(mod => {
                const isModOpen = !!openModules[mod.id] || searchQuery.length > 0;
                return (
                  <div key={mod.id} className="space-y-1">
                    <div
                      onClick={() => toggleModule(mod.id)}
                      className="flex items-center justify-between px-2 py-1 text-[11px] font-bold text-slate-700 hover:text-amber-800 cursor-pointer rounded-lg hover:bg-amber-50/50"
                    >
                      <span className="truncate">M{mod.number}. {mod.title}</span>
                      <ChevronRight className={`w-3 h-3 text-slate-400 transition-transform ${isModOpen ? 'rotate-90' : ''}`} />
                    </div>

                    {isModOpen && (
                      <div className="ml-2 space-y-0.5">
                        {mod.lessons.map(les => {
                          const isActive = les.id === currentLessonId;
                          const isDone = completedLessonIds.has(les.id) || les.id === 'les-2-1';
                          return (
                            <button
                              key={les.id}
                              onClick={() => onSelectLesson(les.id)}
                              className={`w-full text-left px-2 py-1.5 rounded-lg text-xs flex items-center justify-between gap-1.5 transition-all ${
                                isActive
                                  ? 'bg-amber-500 text-slate-950 font-bold shadow-xs'
                                  : isDone
                                  ? 'text-slate-800 hover:bg-amber-50/60'
                                  : 'text-slate-600 hover:bg-slate-100/80'
                              }`}
                            >
                              <div className="flex items-center gap-1.5 truncate">
                                {isDone ? (
                                  <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-slate-950' : 'text-emerald-600'}`} />
                                ) : (
                                  <Circle className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-slate-950' : 'text-slate-300'}`} />
                                )}
                                <span className="truncate">{les.title}</span>
                              </div>
                              <span className={`text-[10px] shrink-0 ${isActive ? 'text-slate-900' : 'text-slate-400'}`}>
                                {les.durationMinutes}p
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

      </div>

      {/* Footer Track Switcher / Quick Stats */}
      <div className="p-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs">
        <span className="text-[11px] text-slate-500">Chuẩn năng lực CNTT</span>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-orange-500" title="HTML" />
          <span className="w-2 h-2 rounded-full bg-blue-500" title="CSS" />
          <span className="w-2 h-2 rounded-full bg-amber-500" title="JavaScript" />
        </div>
      </div>
    </aside>
  );
};
