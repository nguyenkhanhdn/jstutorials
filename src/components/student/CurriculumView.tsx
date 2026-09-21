import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronRight, 
  BookOpen, 
  Clock, 
  CheckCircle2, 
  PlayCircle, 
  Lock, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { CURRICULUM_MODULES } from '../../data/curriculumData';

interface CurriculumViewProps {
  onSelectLesson: (lessonId: string) => void;
}

export const CurriculumView: React.FC<CurriculumViewProps> = ({ onSelectLesson }) => {
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({
    'mod-2': true // Expand Module 2 by default
  });

  const toggleModule = (id: string) => {
    setExpandedModules(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-3 py-0.5 rounded-full text-xs font-extrabold bg-indigo-100 text-indigo-800 border border-indigo-200">
                17 Modules Đào tạo
              </span>
              <span className="text-xs text-slate-500">Chuẩn Cao đẳng CNTT (90 Giờ)</span>
            </div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              Khung chương trình JavaScript theo chuẩn năng lực
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Được thiết kế theo nguyên lý Learning-by-Doing, Microlearning và Bậc thang nhận thức Bloom
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onSelectLesson('les-2-1')}
              className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-bold flex items-center gap-2 shadow-xs transition-all active:scale-95"
            >
              <BookOpen className="w-4 h-4" />
              <span>Vào Bài 2.1 (Mẫu chuẩn)</span>
            </button>
          </div>
        </div>

        {/* Modules List */}
        <div className="space-y-4 pt-6">
          {CURRICULUM_MODULES.map(mod => {
            const isExpanded = !!expandedModules[mod.id];
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
                        {mod.lessons.map((les, idx) => (
                          <div
                            key={les.id}
                            onClick={() => onSelectLesson(les.id)}
                            className="p-3 rounded-xl bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-xs transition-all cursor-pointer flex items-center justify-between gap-2"
                          >
                            <div className="flex items-center gap-2 truncate">
                              <span className="w-5 h-5 rounded bg-slate-100 text-slate-700 font-mono text-[11px] font-bold flex items-center justify-center shrink-0">
                                {idx + 1}
                              </span>
                              <span className="font-semibold text-slate-900 truncate">{les.title}</span>
                            </div>
                            <button className="text-indigo-600 hover:text-indigo-800 shrink-0">
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
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
