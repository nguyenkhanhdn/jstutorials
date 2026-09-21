import React from 'react';
import { X, CheckCircle2, AlertTriangle, PlayCircle, Lock, ArrowDown } from 'lucide-react';
import { ProgressStatus } from '../../types';

interface KnowledgeMapModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectModule: (moduleId: string) => void;
}

interface MapNode {
  id: string;
  name: string;
  english: string;
  moduleNum: number;
  status: ProgressStatus;
  mastery: number;
  dependencies: string[];
}

export const KnowledgeMapModal: React.FC<KnowledgeMapModalProps> = ({
  isOpen,
  onClose,
  onSelectModule
}) => {
  if (!isOpen) return null;

  const nodes: MapNode[] = [
    { id: 'mod-1', name: 'Tổng quan & Môi trường JS', english: 'Overview & Runtime', moduleNum: 1, status: 'completed', mastery: 95, dependencies: [] },
    { id: 'mod-2', name: 'Biến & Kiểu dữ liệu', english: 'Variables & Data Types', moduleNum: 2, status: 'in_progress', mastery: 78, dependencies: ['mod-1'] },
    { id: 'mod-3', name: 'Toán tử & Biểu thức', english: 'Operators & Truthy/Falsy', moduleNum: 3, status: 'needs_review', mastery: 60, dependencies: ['mod-2'] },
    { id: 'mod-4', name: 'Cấu trúc điều khiển', english: 'Conditionals (if/else, switch)', moduleNum: 4, status: 'not_started', mastery: 0, dependencies: ['mod-3'] },
    { id: 'mod-5', name: 'Vòng lặp & Duyệt', english: 'Loops (for, while)', moduleNum: 5, status: 'not_started', mastery: 0, dependencies: ['mod-4'] },
    { id: 'mod-6', name: 'Hàm & Phạm vi Scope', english: 'Functions & Scope', moduleNum: 6, status: 'not_started', mastery: 0, dependencies: ['mod-5'] },
    { id: 'mod-7', name: 'Array & Phương thức mảng', english: 'Arrays (map, filter, reduce)', moduleNum: 7, status: 'not_started', mastery: 0, dependencies: ['mod-6'] },
    { id: 'mod-8', name: 'Object & JSON', english: 'Objects & Destructuring', moduleNum: 8, status: 'not_started', mastery: 0, dependencies: ['mod-7'] },
    { id: 'mod-10', name: 'DOM Manipulation', english: 'Selecting & Changing Elements', moduleNum: 10, status: 'not_started', mastery: 0, dependencies: ['mod-8'] },
    { id: 'mod-11', name: 'Event Handling', english: 'Listeners & Delegation', moduleNum: 11, status: 'not_started', mastery: 0, dependencies: ['mod-10'] },
    { id: 'mod-12', name: 'Form & Validation', english: 'Form Extraction & Rules', moduleNum: 12, status: 'not_started', mastery: 0, dependencies: ['mod-11'] },
    { id: 'mod-14', name: 'Asynchronous JS', english: 'Promise & async/await', moduleNum: 14, status: 'not_started', mastery: 0, dependencies: ['mod-6'] },
    { id: 'mod-15', name: 'Fetch API & REST Data', english: 'HTTP Requests & JSON', moduleNum: 15, status: 'not_started', mastery: 0, dependencies: ['mod-14'] },
    { id: 'mod-16', name: 'Local Storage', english: 'Client Persistence', moduleNum: 16, status: 'not_started', mastery: 0, dependencies: ['mod-15'] },
    { id: 'mod-17', name: 'Mini Projects Thực tế', english: 'Real-world Capstone Projects', moduleNum: 17, status: 'not_started', mastery: 0, dependencies: ['mod-12', 'mod-16'] }
  ];

  const getStatusBadge = (status: ProgressStatus) => {
    switch (status) {
      case 'completed':
      case 'mastered':
        return <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full"><CheckCircle2 className="w-3 h-3" /> Đã nắm vững</span>;
      case 'in_progress':
        return <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full"><PlayCircle className="w-3 h-3" /> Đang học</span>;
      case 'needs_review':
        return <span className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full"><AlertTriangle className="w-3 h-3" /> Cần ôn tập</span>;
      default:
        return <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full"><Lock className="w-3 h-3" /> Chưa mở</span>;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div>
            <h3 className="font-bold text-slate-900 text-lg">Bản đồ Cây Tri thức JavaScript (Knowledge Map)</h3>
            <p className="text-xs text-slate-500">Mô hình quan hệ phụ thuộc giữa các chuẩn đầu ra (Prerequisites Knowledge Tree)</p>
          </div>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200/50">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Legend */}
        <div className="px-6 py-3 bg-slate-100/60 border-b border-slate-200 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600">
          <span className="font-semibold text-slate-700">Trạng thái năng lực:</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-emerald-500" /> Nắm vững (&gt;80%)</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-amber-500" /> Đang học</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-rose-500" /> Cần củng cố (Lỗ hổng kiến thức)</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-slate-300" /> Chưa mở khóa</span>
        </div>

        {/* Graph Content */}
        <div className="p-6 overflow-y-auto flex-1 bg-slate-50/50">
          <div className="max-w-2xl mx-auto space-y-4">
            {nodes.map((node, index) => (
              <React.Fragment key={node.id}>
                <div
                  onClick={() => {
                    onSelectModule(node.id);
                    onClose();
                  }}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    node.status === 'in_progress'
                      ? 'bg-amber-50/70 border-amber-300 ring-2 ring-amber-500/20 shadow-md'
                      : node.status === 'completed'
                      ? 'bg-white border-emerald-200 hover:border-emerald-300 hover:shadow-sm'
                      : node.status === 'needs_review'
                      ? 'bg-rose-50/60 border-rose-300 shadow-sm'
                      : 'bg-white/80 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg font-bold flex items-center justify-center text-xs ${
                        node.status === 'completed' ? 'bg-emerald-600 text-white' :
                        node.status === 'in_progress' ? 'bg-amber-500 text-slate-950 font-black' :
                        node.status === 'needs_review' ? 'bg-rose-600 text-white' :
                        'bg-slate-200 text-slate-600'
                      }`}>
                        M{node.moduleNum}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm">{node.name}</div>
                        <div className="text-xs text-slate-500">{node.english}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {node.mastery > 0 && (
                        <div className="text-right hidden sm:block">
                          <div className="text-xs font-bold text-slate-800">{node.mastery}%</div>
                          <div className="text-[10px] text-slate-600">Độ tinh thông</div>
                        </div>
                      )}
                      {getStatusBadge(node.status)}
                    </div>
                  </div>
                </div>

                {index < nodes.length - 1 && (
                  <div className="flex justify-center my-1 text-slate-400">
                    <ArrowDown className="w-4 h-4 animate-bounce" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
