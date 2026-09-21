import React, { useState } from 'react';
import { 
  Target, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  BookOpen, 
  Filter, 
  TrendingUp, 
  TrendingDown, 
  HelpCircle,
  BrainCircuit,
  ArrowRight
} from 'lucide-react';
import { ObjectiveMastery } from '../../types';
import { MOCK_OBJECTIVE_MASTERIES } from '../../data/advancedAnalyticsData';

export const CompetencyMatrixView: React.FC = () => {
  const [selectedBloom, setSelectedBloom] = useState<string>('all');
  const [selectedModule, setSelectedModule] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<'lowest_mastery' | 'highest_risk' | 'code'>('lowest_mastery');

  const bloomLevels = [
    { key: 'Remember', label: '1. Ghi nhớ (Remember)', color: 'bg-slate-100 text-slate-800 border-slate-200' },
    { key: 'Understand', label: '2. Thông hiểu (Understand)', color: 'bg-blue-50 text-blue-800 border-blue-200' },
    { key: 'Apply', label: '3. Vận dụng (Apply)', color: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
    { key: 'Analyze', label: '4. Phân tích (Analyze)', color: 'bg-purple-50 text-purple-800 border-purple-200' },
    { key: 'Evaluate', label: '5. Đánh giá (Evaluate)', color: 'bg-amber-50 text-amber-800 border-amber-200' },
  ];

  const modules = Array.from(new Set(MOCK_OBJECTIVE_MASTERIES.map(m => m.moduleName)));

  const filteredLOs = MOCK_OBJECTIVE_MASTERIES.filter(lo => {
    const matchBloom = selectedBloom === 'all' || lo.bloomLevel === selectedBloom;
    const matchModule = selectedModule === 'all' || lo.moduleName === selectedModule;
    return matchBloom && matchModule;
  }).sort((a, b) => {
    if (sortOrder === 'lowest_mastery') return a.avgMastery - b.avgMastery;
    if (sortOrder === 'highest_risk') return b.atRiskCount - a.atRiskCount;
    return a.code.localeCompare(b.code);
  });

  const avgClassMastery = Math.round(
    MOCK_OBJECTIVE_MASTERIES.reduce((sum, item) => sum + item.avgMastery, 0) / MOCK_OBJECTIVE_MASTERIES.length
  );

  const criticalBottlenecks = MOCK_OBJECTIVE_MASTERIES.filter(lo => lo.avgMastery < 60);

  return (
    <div className="space-y-6">
      
      {/* Top Banner & Bloom's Taxonomy Summary */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-purple-100 text-purple-900 border border-purple-200">
                Bloom's Taxonomy Framework
              </span>
              <span className="text-xs text-slate-500">Chuẩn đầu ra (Course Learning Outcomes)</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              <BrainCircuit className="w-6 h-6 text-purple-600" />
              <span>Ma Trận Năng Lực & Độ Làm Chủ Chuẩn Đầu Ra (LOs)</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-3xl leading-relaxed">
              Theo dõi mức độ đạt chuẩn của sinh viên theo từng cấp bậc nhận thức Bloom từ Ghi nhớ đến Phân tích & Đánh giá, phát hiện kịp thời các nút thắt trước kỳ thi Lab.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 bg-purple-50 rounded-2xl border border-purple-100 text-center">
              <div className="text-[11px] font-semibold text-purple-700">Mức làm chủ TB</div>
              <div className="text-2xl font-black text-purple-950">{avgClassMastery}%</div>
            </div>
            <div className="p-3.5 bg-rose-50 rounded-2xl border border-rose-100 text-center">
              <div className="text-[11px] font-semibold text-rose-700">Nút thắt cần can thiệp</div>
              <div className="text-2xl font-black text-rose-600">{criticalBottlenecks.length} LOs</div>
            </div>
          </div>
        </div>

        {/* Bloom's Level Distribution Overview Bar */}
        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-slate-700">
            <span>Phân bố mức độ thành thạo theo 5 cấp độ Bloom:</span>
            <span className="text-slate-400 font-normal">Mục tiêu: Đạt ≥ 70% ở tất cả các cấp độ</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            {bloomLevels.map(b => {
              const matched = MOCK_OBJECTIVE_MASTERIES.filter(lo => lo.bloomLevel === b.key);
              const avg = matched.length > 0 
                ? Math.round(matched.reduce((s, i) => s + i.avgMastery, 0) / matched.length)
                : 0;
              const isBottleneck = avg < 60;

              return (
                <div 
                  key={b.key} 
                  onClick={() => setSelectedBloom(selectedBloom === b.key ? 'all' : b.key)}
                  className={`p-3 rounded-xl border transition-all cursor-pointer ${
                    selectedBloom === b.key 
                      ? 'ring-2 ring-purple-600 bg-white shadow-xs' 
                      : 'bg-white hover:border-purple-300'
                  }`}
                >
                  <div className="text-[11px] font-semibold text-slate-500 truncate">{b.label.split('(')[0]}</div>
                  <div className="flex items-baseline justify-between mt-1">
                    <span className={`text-lg font-black ${isBottleneck ? 'text-rose-600' : 'text-slate-900'}`}>
                      {avg}%
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">{matched.length} LOs</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full mt-2 overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${isBottleneck ? 'bg-rose-500' : avg >= 80 ? 'bg-emerald-500' : 'bg-purple-600'}`}
                      style={{ width: `${avg}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Filters and Sort Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1.5 font-bold text-slate-700">
              <Filter className="w-3.5 h-3.5 text-slate-400" />
              <span>Bộ lọc:</span>
            </div>

            {/* Bloom Filter Chips */}
            <button
              onClick={() => setSelectedBloom('all')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                selectedBloom === 'all'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Tất cả Bloom ({MOCK_OBJECTIVE_MASTERIES.length})
            </button>
            {bloomLevels.map(b => (
              <button
                key={b.key}
                onClick={() => setSelectedBloom(b.key)}
                className={`px-2.5 py-1.5 rounded-xl font-semibold transition-all ${
                  selectedBloom === b.key
                    ? 'bg-purple-700 text-white font-bold shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {b.key}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <select
              value={selectedModule}
              onChange={e => setSelectedModule(e.target.value)}
              className="px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 font-medium text-slate-700 text-xs focus:outline-none"
            >
              <option value="all">Tất cả Module ({modules.length})</option>
              {modules.map(m => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>

            <select
              value={sortOrder}
              onChange={e => setSortOrder(e.target.value as any)}
              className="px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 font-bold text-slate-700 text-xs focus:outline-none"
            >
              <option value="lowest_mastery">Sắp xếp: Độ làm chủ thấp nhất</option>
              <option value="highest_risk">Sắp xếp: Số SV tụt hậu nhiều nhất</option>
              <option value="code">Sắp xếp: Mã chuẩn LO</option>
            </select>
          </div>
        </div>

      </div>

      {/* Objectives Table / Card List */}
      <div className="space-y-3">
        {filteredLOs.map(lo => {
          const isCritical = lo.avgMastery < 60;
          const isGood = lo.avgMastery >= 80;

          return (
            <div 
              key={lo.code}
              className={`p-5 rounded-2xl bg-white border transition-all ${
                isCritical 
                  ? 'border-rose-300 shadow-xs' 
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                
                {/* Left info */}
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md font-mono font-black text-xs bg-slate-900 text-white">
                      {lo.code}
                    </span>
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                      bloomLevels.find(b => b.key === lo.bloomLevel)?.color
                    }`}>
                      Bloom: {lo.bloomLevel}
                    </span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs font-semibold text-slate-500">{lo.moduleName}</span>
                    {isCritical && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" />
                        Nút thắt kiến thức
                      </span>
                    )}
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 leading-snug">
                    {lo.title}
                  </h3>

                  {/* Pedagogical recommendation */}
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-700 mt-2 flex items-start gap-2">
                    <span className="font-bold text-indigo-700 shrink-0">💡 Khuyến nghị sư phạm:</span>
                    <span>{lo.recommendation}</span>
                  </div>
                </div>

                {/* Right stats & progress bar */}
                <div className="flex items-center gap-6 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                  
                  {/* Mastery gauge */}
                  <div className="w-40 text-xs space-y-1">
                    <div className="flex justify-between font-bold">
                      <span className="text-slate-600">Độ làm chủ:</span>
                      <span className={isCritical ? 'text-rose-600 font-black' : isGood ? 'text-emerald-600' : 'text-slate-900'}>
                        {lo.avgMastery}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all ${
                          isCritical ? 'bg-rose-500' : isGood ? 'bg-emerald-500' : 'bg-purple-600'
                        }`}
                        style={{ width: `${lo.avgMastery}%` }}
                      />
                    </div>
                    <div className="text-[10px] text-slate-400 text-right">Tỷ lệ qua: {lo.passingRate}%</div>
                  </div>

                  {/* At-risk student badge */}
                  <div className="text-center px-4 py-2 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-[10px] text-slate-500 font-medium">SV chưa đạt</div>
                    <div className={`text-base font-black ${lo.atRiskCount > 5 ? 'text-rose-600' : 'text-slate-700'}`}>
                      {lo.atRiskCount} SV
                    </div>
                  </div>

                </div>

              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
