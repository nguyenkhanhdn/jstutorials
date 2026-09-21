import React, { useState } from 'react';
import { 
  HelpCircle, 
  Sparkles, 
  Copy, 
  Check, 
  Lightbulb, 
  Code2, 
  ArrowRight, 
  Layers, 
  Brain,
  AlertCircle
} from 'lucide-react';
import { MisconceptionDiagnostic } from '../../types';
import { MOCK_MISCONCEPTION_DIAGNOSTICS } from '../../data/advancedAnalyticsData';

export const MisconceptionDiagnosticView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { key: 'all', label: 'Tất cả danh mục' },
    { key: 'type_coercion', label: 'Ép kiểu ngầm định (Type Coercion)' },
    { key: 'scope_closure', label: 'Phạm vi & Closure' },
    { key: 'async_flow', label: 'Luồng bất đồng bộ (Async)' },
  ];

  const filtered = MOCK_MISCONCEPTION_DIAGNOSTICS.filter(item => {
    return selectedCategory === 'all' || item.errorCategory === selectedCategory;
  });

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      
      {/* Top Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200">
                Cognitive Diagnostic Engine
              </span>
              <span className="text-xs text-slate-500">Chẩn đoán mô hình tư duy sai lệch của sinh viên</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              <Brain className="w-6 h-6 text-amber-600" />
              <span>Chẩn Đoán Lỗi Nhận Thức & Gợi Ý Giáo Án Trực Tiếp</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-3xl leading-relaxed">
              Phân tích các lỗ hổng nhận thức phổ biến khi sinh viên chuyển từ ngôn ngữ khác (C, Java) sang JavaScript, cung cấp kịch bản minh họa (Cognitive Disruption) để giảng viên sử dụng trực tiếp trong giờ lên lớp.
            </p>
          </div>

          <div className="p-3.5 bg-amber-50 rounded-2xl border border-amber-200 text-center shrink-0">
            <div className="text-[11px] font-semibold text-amber-800">Điểm nghẽn nhận thức</div>
            <div className="text-2xl font-black text-amber-950">{MOCK_MISCONCEPTION_DIAGNOSTICS.length} Mẫu lỗi phổ biến</div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-slate-100 text-xs">
          {categories.map(cat => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all whitespace-nowrap ${
                selectedCategory === cat.key
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Misconceptions Grid */}
      <div className="grid grid-cols-1 gap-6">
        {filtered.map(item => (
          <div key={item.id} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-5">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-400 font-mono uppercase">{item.moduleName}</span>
                  <span className="text-xs text-slate-300">•</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-800 border border-rose-200">
                    Tỷ lệ SV làm sai: {item.errorRate}%
                  </span>
                </div>
                <h3 className="text-lg font-black text-slate-900">{item.title}</h3>
              </div>

              <button
                onClick={() => handleCopyCode(item.suggestedLiveDemo, item.id)}
                className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 flex items-center gap-1.5 transition-colors shrink-0"
                title="Sao chép kịch bản demo cho giờ dạy"
              >
                {copiedId === item.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Đã sao chép</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Sao chép kịch bản Demo lớp</span>
                  </>
                )}
              </button>
            </div>

            {/* Cognitive Contrast Grid: Mental Model vs Correct Model */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              
              {/* Mental model error */}
              <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-2 text-rose-950">
                <div className="font-bold flex items-center gap-1.5 text-rose-900">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>Mô hình nhận thức sai lầm của SV:</span>
                </div>
                <p className="leading-relaxed text-slate-700">
                  {item.studentMentalModel}
                </p>
                
                {/* Code snippet showing error */}
                <div className="pt-2">
                  <span className="text-[10px] font-bold text-rose-800 uppercase tracking-wider">Đoạn mã sinh viên hay viết nhầm:</span>
                  <pre className="mt-1 p-3 bg-slate-900 text-rose-300 font-mono rounded-xl text-[11px] overflow-x-auto leading-relaxed border border-slate-800">
                    {item.sampleBuggyCode}
                  </pre>
                </div>
              </div>

              {/* Correct mental model */}
              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2 text-emerald-950">
                <div className="font-bold flex items-center gap-1.5 text-emerald-900">
                  <Lightbulb className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Bản chất ngôn ngữ chuẩn ECMAScript:</span>
                </div>
                <p className="leading-relaxed text-slate-700">
                  {item.correctMentalModel}
                </p>

                {/* Remedy activity */}
                <div className="p-3 bg-white rounded-xl border border-emerald-200 text-[11px] space-y-1 mt-2">
                  <span className="font-bold text-emerald-800">Hoạt động bồi dưỡng đề xuất:</span>
                  <p className="text-slate-600">{item.remedyActivity}</p>
                </div>
              </div>

            </div>

            {/* Teacher's Live Demo script */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 mt-0.5">
                <Code2 className="w-4 h-4" />
              </div>
              <div className="space-y-1 flex-1">
                <span className="font-bold text-slate-900">Kịch bản minh họa trực quan trên lớp (Live Demonstration):</span>
                <p className="text-slate-600 leading-relaxed">{item.suggestedLiveDemo}</p>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
