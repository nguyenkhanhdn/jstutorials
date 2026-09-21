import React, { useState } from 'react';
import { 
  GitBranch, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Sliders, 
  Bot, 
  RefreshCw, 
  Users, 
  BrainCircuit, 
  Send, 
  Layers, 
  Zap, 
  ChevronRight, 
  Activity, 
  ArrowDownRight,
  ShieldAlert,
  Search,
  Check,
  RotateCcw,
  Clock,
  HelpCircle,
  Play
} from 'lucide-react';
import { 
  PREREQUISITE_CHAINS, 
  MOCK_STUDENT_ADAPTIVE_PROFILES, 
  evaluateAdaptiveState,
  ADAPTIVE_POLICY_CONFIG 
} from '../../data/adaptiveLearningData';
import { 
  PrerequisiteChain, 
  StudentAdaptiveProfile, 
  AdaptiveTrack, 
  AdaptiveSimulationInput, 
  AdaptiveSimulationResult 
} from '../../types';

export const AdaptiveLearningView: React.FC = () => {
  // Prerequisite Graph Selection
  const [selectedChainId, setSelectedChainId] = useState<string>('chain-reduce');
  const activeChain = PREREQUISITE_CHAINS.find(c => c.id === selectedChainId) || PREREQUISITE_CHAINS[0];

  // Student Profiles State
  const [profiles, setProfiles] = useState<StudentAdaptiveProfile[]>(MOCK_STUDENT_ADAPTIVE_PROFILES);
  const [trackFilter, setTrackFilter] = useState<'all' | AdaptiveTrack>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProfileForDetail, setSelectedProfileForDetail] = useState<StudentAdaptiveProfile | null>(null);

  // DDA Interactive Simulator State
  const [simTargetStudentId, setSimTargetStudentId] = useState<string>('sv-02');
  const [simScore, setSimScore] = useState<number>(54);
  const [simTimeSpent, setSimTimeSpent] = useState<number>(22);
  const [simAttempts, setSimAttempts] = useState<number>(4);
  const [simAITutorLevel, setSimAITutorLevel] = useState<number>(4);
  const [simConsecutiveSuccesses, setSimConsecutiveSuccesses] = useState<number>(0);
  const [simResult, setSimResult] = useState<AdaptiveSimulationResult | null>(() => {
    return evaluateAdaptiveState({
      score: 54,
      timeSpentMinutes: 22,
      attemptsCount: 4,
      aiTutorLevelUsed: 4,
      consecutiveSuccesses: 0,
      targetTopic: 'Array reduce()'
    }, 'scaffolding');
  });

  const [isSimulatingAI, setIsSimulatingAI] = useState(false);
  const [aiAnalysisNote, setAiAnalysisNote] = useState<string | null>(null);

  // Batch Assignment Modal
  const [batchModalOpen, setBatchModalOpen] = useState(false);
  const [assignedNotification, setAssignedNotification] = useState<string | null>(null);

  // Calculations for KPI Cards
  const totalCount = profiles.length;
  const acceleratedCount = profiles.filter(p => p.currentTrack === 'accelerated').length;
  const standardCount = profiles.filter(p => p.currentTrack === 'standard').length;
  const scaffoldingCount = profiles.filter(p => p.currentTrack === 'scaffolding').length;
  const avgAutonomy = Math.round(profiles.reduce((acc, p) => acc + p.autonomyIndex, 0) / (totalCount || 1));

  // Filtered Students
  const filteredProfiles = profiles.filter(p => {
    const matchesTrack = trackFilter === 'all' || p.currentTrack === trackFilter;
    const matchesSearch = p.studentName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.studentCode.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTrack && matchesSearch;
  });

  // Handle Simulator Execution
  const handleRunSimulation = async () => {
    const input: AdaptiveSimulationInput = {
      score: simScore,
      timeSpentMinutes: simTimeSpent,
      attemptsCount: simAttempts,
      aiTutorLevelUsed: simAITutorLevel,
      consecutiveSuccesses: simConsecutiveSuccesses,
      targetTopic: activeChain.targetSkillTitle
    };

    const targetProfile = profiles.find(p => p.studentId === simTargetStudentId);
    const result = evaluateAdaptiveState(input, targetProfile?.currentTrack || 'standard');
    setSimResult(result);

    // Call server AI endpoint for deep pedagogical diagnostic
    setIsSimulatingAI(true);
    try {
      const resp = await fetch('/api/adaptive-analysis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentName: targetProfile?.studentName || 'Sinh viên thử nghiệm',
          currentTopic: activeChain.targetSkillTitle,
          score: simScore,
          attemptsCount: simAttempts,
          timeSpentMinutes: simTimeSpent,
          aiTutorLevelUsed: simAITutorLevel,
          recentErrors: targetProfile?.identifiedGaps || []
        })
      });
      const data = await resp.json();
      if (data.success) {
        setAiAnalysisNote(data.analysis);
      }
    } catch (e) {
      console.warn('Cannot fetch AI analysis:', e);
    } finally {
      setIsSimulatingAI(false);
    }
  };

  // Sync simulator sliders when student selection changes
  const handleSelectStudentForSim = (stId: string) => {
    setSimTargetStudentId(stId);
    const p = profiles.find(x => x.studentId === stId);
    if (p) {
      setSimScore(p.recentSuccessRate);
      setSimAttempts(p.recentAttemptsCount);
      // derive average level
      const mostUsedLevel = p.scaffoldingLevelFrequency.level5 > 0 ? 5 :
                            p.scaffoldingLevelFrequency.level4 > 0 ? 4 :
                            p.scaffoldingLevelFrequency.level3 > 0 ? 3 : 2;
      setSimAITutorLevel(mostUsedLevel);
    }
  };

  const handleManualTrackOverride = (studentId: string, newTrack: AdaptiveTrack) => {
    setProfiles(prev => prev.map(p => {
      if (p.studentId === studentId) {
        return {
          ...p,
          currentTrack: newTrack,
          lastUpdated: 'Vừa cập nhật'
        };
      }
      return p;
    }));
    showToast(`Đã chuyển sinh viên sang nhánh ${newTrack === 'accelerated' ? 'Tăng Tốc' : newTrack === 'scaffolding' ? 'Giàn Giáo' : 'Chuẩn'}`);
  };

  const showToast = (msg: string) => {
    setAssignedNotification(msg);
    setTimeout(() => setAssignedNotification(null), 3500);
  };

  const handleSendBatchAssignment = () => {
    setBatchModalOpen(false);
    showToast(`Đã phát 1-click bài tập thích ứng cá nhân hóa cho toàn bộ ${totalCount} sinh viên!`);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Toast Alert Notification */}
      {assignedNotification && (
        <div className="fixed top-20 right-8 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl border border-emerald-500/40 flex items-center gap-3 animate-in slide-in-from-top-4">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-xs font-bold">{assignedNotification}</span>
        </div>
      )}

      {/* Hero Overview & Concept Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-black bg-indigo-100 text-indigo-800 border border-indigo-200 flex items-center gap-1.5">
                <GitBranch className="w-3.5 h-3.5 text-indigo-700" />
                Adaptive Learning Architecture (Phần G)
              </span>
              <span className="text-xs font-semibold text-slate-500">
                Dynamic Difficulty Adjustment (DDA) & Zone of Proximal Development
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Động Cơ Học Tập Thích Ứng & Phân Luồng Giàn Giáo AI
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
              Hệ thống tự động phân hóa sinh viên theo 3 nhánh năng lực dựa trên điểm số, thời gian và chỉ số tự chủ (Autonomy Index). Khi sinh viên gặp khó khăn, hệ thống kích hoạt <strong>Backward Knowledge Trace</strong> để bù đắp mắt xích tiền đề thay vì đưa ngay lời giải.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setBatchModalOpen(true)}
              className="px-4 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-2 shadow-md shadow-indigo-600/20 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Phát Bài Tập Thích Ứng Toàn Lớp</span>
            </button>
          </div>
        </div>

        {/* 4 KPI Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          
          {/* Card 1: Accelerated Track */}
          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 flex items-center justify-between">
            <div>
              <div className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">
                Nhánh Tăng Tốc (Fast-Track)
              </div>
              <div className="text-2xl font-black text-emerald-950 mt-1">
                {acceleratedCount} <span className="text-xs font-normal text-emerald-700">SV ({Math.round((acceleratedCount/totalCount)*100)}%)</span>
              </div>
              <div className="text-[11px] text-emerald-700 mt-0.5">Bloom L4-L6 • Edge Case Challenges</div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-emerald-200/60 text-emerald-900 flex items-center justify-center font-bold text-sm">
              🚀
            </div>
          </div>

          {/* Card 2: Standard Track */}
          <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80 flex items-center justify-between">
            <div>
              <div className="text-[11px] font-bold text-blue-800 uppercase tracking-wider">
                Lộ Trình Chuẩn (Standard)
              </div>
              <div className="text-2xl font-black text-blue-950 mt-1">
                {standardCount} <span className="text-xs font-normal text-blue-700">SV ({Math.round((standardCount/totalCount)*100)}%)</span>
              </div>
              <div className="text-[11px] text-blue-700 mt-0.5">Bloom L2-L3 • Bài tập cân bằng</div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-blue-200/60 text-blue-900 flex items-center justify-center font-bold text-sm">
              ⚖️
            </div>
          </div>

          {/* Card 3: Scaffolding Track */}
          <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200/80 flex items-center justify-between">
            <div>
              <div className="text-[11px] font-bold text-rose-800 uppercase tracking-wider">
                Giàn Giáo Can Thiệp (Scaffold)
              </div>
              <div className="text-2xl font-black text-rose-950 mt-1">
                {scaffoldingCount} <span className="text-xs font-normal text-rose-700">SV ({Math.round((scaffoldingCount/totalCount)*100)}%)</span>
              </div>
              <div className="text-[11px] text-rose-700 mt-0.5">Bù đắp tiền đề • Micro-steps</div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-rose-200/60 text-rose-900 flex items-center justify-center font-bold text-sm">
              🛡️
            </div>
          </div>

          {/* Card 4: Class Autonomy Index */}
          <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200/80 flex items-center justify-between">
            <div>
              <div className="text-[11px] font-bold text-purple-800 uppercase tracking-wider">
                Chỉ Số Tự Chủ (Autonomy)
              </div>
              <div className="text-2xl font-black text-purple-950 mt-1">
                {avgAutonomy}%
              </div>
              <div className="text-[11px] text-purple-700 mt-0.5">Ít phụ thuộc AI Lời giải Cấp 4-5</div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-purple-200/60 text-purple-900 flex items-center justify-center font-bold text-sm">
              🧠
            </div>
          </div>

        </div>
      </div>

      {/* SECTION 1: INTERACTIVE PREREQUISITE GRAPH & BACKWARD KNOWLEDGE TRACE */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <h3 className="text-base font-extrabold text-slate-900">
                1. Ma Trận Quan Hệ Tiên Quyết & Truy Vết Lỗ Hổng Ngược Dòng (Backward Trace)
              </h3>
            </div>
            <p className="text-xs text-slate-500">
              Quan sát chuỗi phụ thuộc từ kiến thức nền móng đến kỹ năng mục tiêu cao cấp
            </p>
          </div>

          {/* Target Skill Switcher */}
          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl">
            {PREREQUISITE_CHAINS.map(chain => (
              <button
                key={chain.id}
                onClick={() => setSelectedChainId(chain.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedChainId === chain.id 
                    ? 'bg-white text-slate-900 shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {chain.targetSkillCode} – {chain.id.replace('chain-', '').toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Chain Description & Diagnostic Rationale */}
        <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/70 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs">
          <div className="space-y-1">
            <div className="font-black text-amber-950 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Phân Tích Điểm Nghẽn Nhận Thức ({activeChain.targetSkillCode}): {activeChain.targetSkillTitle}</span>
            </div>
            <p className="text-amber-900 leading-relaxed">
              <strong>Nguyên nhân gốc rễ:</strong> {activeChain.rootCauseAnalysis}
            </p>
            <p className="text-amber-900 leading-relaxed">
              <strong>Kê đơn sư phạm:</strong> {activeChain.pedagogicalPrescription}
            </p>
          </div>

          <button
            onClick={() => showToast(`Đã mở gói bài tập bù đắp kiến thức tiền đề cho chuỗi ${activeChain.targetSkillCode}!`)}
            className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs shrink-0 self-start md:self-auto transition-all shadow-xs cursor-pointer flex items-center gap-1.5"
          >
            <Zap className="w-3.5 h-3.5 fill-slate-950" />
            <span>Kích Hoạt Gói Bù Đắp Tiền Đề</span>
          </button>
        </div>

        {/* Visual Prerequisite Node Flow */}
        <div className="space-y-4">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
            <span>Sơ Đồ Mắt Xích Tri Thức (Tầng 1 Nền Móng → Tầng 3 Mục Tiêu)</span>
            <span className="text-[11px] font-normal text-slate-400">(Tỷ lệ vượt qua của cả lớp)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {activeChain.nodes.map((node, idx) => {
              const isBottleneck = node.status === 'critical_gap';
              const isTarget = idx === activeChain.nodes.length - 1;
              return (
                <div 
                  key={node.id} 
                  className={`p-4 rounded-2xl border transition-all relative flex flex-col justify-between space-y-3 ${
                    isTarget 
                      ? 'bg-indigo-50/60 border-indigo-300 ring-2 ring-indigo-500/20' 
                      : isBottleneck
                        ? 'bg-rose-50/70 border-rose-300'
                        : 'bg-slate-50/70 border-slate-200'
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-black ${
                        isTarget 
                          ? 'bg-indigo-200 text-indigo-900' 
                          : isBottleneck 
                            ? 'bg-rose-200 text-rose-900' 
                            : 'bg-slate-200 text-slate-800'
                      }`}>
                        Mắt xích {idx + 1}: {node.code}
                      </span>
                      <span className="text-[11px] font-mono text-slate-500">{node.module}</span>
                    </div>

                    <h4 className="font-extrabold text-xs text-slate-900 leading-snug">
                      {node.title}
                    </h4>

                    <p className="text-[11px] text-slate-500 italic">
                      "{node.diagnosticQuestion}"
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-200/60 space-y-2">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-500 font-medium">Tỷ lệ lớp nắm vững:</span>
                      <span className={`font-black ${
                        node.classMasteryRate >= 80 ? 'text-emerald-700' :
                        node.classMasteryRate >= 60 ? 'text-amber-700' : 'text-rose-700'
                      }`}>
                        {node.classMasteryRate}%
                      </span>
                    </div>
                    {/* Mini progress bar */}
                    <div className="w-full h-1.5 rounded-full bg-slate-200 overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${
                          node.classMasteryRate >= 80 ? 'bg-emerald-500' :
                          node.classMasteryRate >= 60 ? 'bg-amber-500' : 'bg-rose-500'
                        }`}
                        style={{ width: `${node.classMasteryRate}%` }}
                      />
                    </div>

                    <div className="text-[10px] text-slate-600 bg-white/80 p-2 rounded-lg border border-slate-200/50">
                      <strong>Bài tập phục hồi:</strong> {node.remedySummary}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* SECTION 2: INTERACTIVE DDA SIMULATOR & WHAT-IF ENGINE */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
              <h3 className="text-base font-extrabold text-slate-900">
                2. Bộ Giả Lập Thuật Toán Thích Ứng (Interactive DDA Sandbox)
              </h3>
            </div>
            <p className="text-xs text-slate-500">
              Thử nghiệm thay đổi thông số học tập để chứng kiến thuật toán AI tự động điều chỉnh phân nhánh và giàn giáo
            </p>
          </div>

          {/* Quick Select Student */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-500 font-semibold">Chọn SV mô phỏng:</span>
            <select
              value={simTargetStudentId}
              onChange={e => handleSelectStudentForSim(e.target.value)}
              className="bg-slate-50 border border-slate-300 rounded-xl px-3 py-1.5 font-bold text-slate-800 text-xs focus:ring-2 focus:ring-indigo-500"
            >
              {profiles.map(p => (
                <option key={p.studentId} value={p.studentId}>
                  {p.studentName} ({p.studentCode}) - {p.currentTrack.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Controls: Sliders */}
          <div className="lg:col-span-5 space-y-4 p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
            <div className="font-extrabold text-slate-900 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Sliders className="w-4 h-4 text-indigo-600" />
                <span>Tham Số Tương Tác Của Bài Tập</span>
              </span>
              <button
                onClick={handleRunSimulation}
                className="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold flex items-center gap-1 transition-all cursor-pointer shadow-xs"
              >
                <Play className="w-3 h-3 fill-white" />
                <span>Chạy Mô Phỏng</span>
              </button>
            </div>

            {/* Slider 1: Score */}
            <div className="space-y-1">
              <div className="flex justify-between font-semibold">
                <span className="text-slate-600">Điểm số bài tập đạt được:</span>
                <span className="font-black text-indigo-700 text-sm">{simScore}%</span>
              </div>
              <input
                type="range"
                min={10}
                max={100}
                step={5}
                value={simScore}
                onChange={e => setSimScore(Number(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>10% (Thất bại)</span>
                <span>60% (Ngưỡng giàn giáo)</span>
                <span>85% (Ngưỡng Fast-Track)</span>
                <span>100%</span>
              </div>
            </div>

            {/* Slider 2: Attempts */}
            <div className="space-y-1">
              <div className="flex justify-between font-semibold">
                <span className="text-slate-600">Số lần thử lại (Attempts):</span>
                <span className="font-black text-slate-900 text-sm">{simAttempts} lần</span>
              </div>
              <input
                type="range"
                min={1}
                max={6}
                step={1}
                value={simAttempts}
                onChange={e => setSimAttempts(Number(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>1 lần (Xuất sắc)</span>
                <span>3 lần (Ngưỡng Backward Trace)</span>
                <span>6 lần (Bế tắc)</span>
              </div>
            </div>

            {/* Slider 3: Time Spent */}
            <div className="space-y-1">
              <div className="flex justify-between font-semibold">
                <span className="text-slate-600">Thời gian làm bài:</span>
                <span className="font-black text-slate-900 text-sm">{simTimeSpent} phút</span>
              </div>
              <input
                type="range"
                min={5}
                max={60}
                step={5}
                value={simTimeSpent}
                onChange={e => setSimTimeSpent(Number(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer"
              />
            </div>

            {/* Slider 4: AI Scaffolding Level used */}
            <div className="space-y-1">
              <div className="flex justify-between font-semibold">
                <span className="text-slate-600">Cấp độ gợi ý AI đã dùng:</span>
                <span className="font-black text-purple-700 text-sm">
                  Cấp {simAITutorLevel}/5 ({simAITutorLevel === 1 ? 'Hint' : simAITutorLevel === 2 ? 'Socratic' : simAITutorLevel === 3 ? 'Khái niệm' : simAITutorLevel === 4 ? 'Ví dụ' : 'Lời giải'})
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={5}
                step={1}
                value={simAITutorLevel}
                onChange={e => setSimAITutorLevel(Number(e.target.value))}
                className="w-full accent-purple-600 cursor-pointer"
              />
              <p className="text-[10px] text-slate-500">
                * Càng phụ thuộc vào Cấp 4-5 thì Chỉ số Tự chủ (Autonomy Index) càng giảm.
              </p>
            </div>

            {/* Success Streak */}
            <div className="space-y-1">
              <div className="flex justify-between font-semibold">
                <span className="text-slate-600">Số bài vượt qua liên tiếp gần đây:</span>
                <span className="font-black text-emerald-700 text-sm">{simConsecutiveSuccesses} bài</span>
              </div>
              <input
                type="range"
                min={0}
                max={5}
                step={1}
                value={simConsecutiveSuccesses}
                onChange={e => setSimConsecutiveSuccesses(Number(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer"
              />
            </div>

          </div>

          {/* Right Display: Computed Adaptive Outcome */}
          <div className="lg:col-span-7 space-y-4">
            {simResult && (
              <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-indigo-600" />
                    <span className="font-extrabold text-sm text-slate-900">
                      Kết Quả Tính Toán Của Động Cơ DDA
                    </span>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-black uppercase ${
                    simResult.newTrack === 'accelerated' ? 'bg-emerald-100 text-emerald-800' :
                    simResult.newTrack === 'scaffolding' ? 'bg-rose-100 text-rose-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    Nhánh Đề Xuất: {simResult.newTrack}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-slate-500 font-medium">Tải nhận thức (Load)</span>
                    <div className={`text-base font-black mt-1 capitalize ${
                      simResult.cognitiveLoad === 'overloaded' ? 'text-rose-600' :
                      simResult.cognitiveLoad === 'low' ? 'text-amber-600' : 'text-emerald-600'
                    }`}>
                      {simResult.cognitiveLoad === 'overloaded' ? 'Quá tải (Struggle)' :
                       simResult.cognitiveLoad === 'low' ? 'Nhàn hạ (Boredom)' : 'Tối ưu (Flow)'}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-slate-500 font-medium">Chỉ số tự chủ (Autonomy)</span>
                    <div className="text-base font-black text-purple-700 mt-1">
                      {simResult.autonomyIndex}%
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-slate-500 font-medium">Mức gợi ý AI khuyến nghị</span>
                    <div className="text-base font-black text-indigo-700 mt-1">
                      Cấp độ {simResult.recommendedScaffoldingLevel}/5
                    </div>
                  </div>
                </div>

                {/* Backward trace alert */}
                {simResult.backwardTraceTriggered && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-950 flex items-start gap-2.5">
                    <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Đã kích hoạt Backward Knowledge Trace:</strong> Sinh viên vượt ngưỡng sai 3 lần liên tiếp. Thuật toán tự động chẩn đoán ngược chuỗi kỹ năng tiền đề (Prerequisite Chaining) thay vì cho làm tiếp bài tập khó.
                    </div>
                  </div>
                )}

                {/* Action prescription */}
                <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-200/80 text-xs space-y-2">
                  <div className="font-extrabold text-indigo-950 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                    <span>Hành động tiếp theo tối ưu (Next Best Action):</span>
                  </div>
                  <div className="font-bold text-slate-900 bg-white p-2.5 rounded-lg border border-indigo-200">
                    {simResult.remedyActionTitle}
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    <strong>Lý giải sư phạm:</strong> {simResult.pedagogicalRationale}
                  </p>
                </div>

                {/* AI Deep Analysis from Gemini */}
                {isSimulatingAI && (
                  <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-xs flex items-center gap-2 text-slate-600">
                    <RefreshCw className="w-4 h-4 animate-spin text-indigo-600" />
                    <span>Đang gọi Gemini AI chẩn đoán tâm lý nhận thức và lỗ hổng sư phạm...</span>
                  </div>
                )}

                {aiAnalysisNote && !isSimulatingAI && (
                  <div className="p-3.5 rounded-xl bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 text-xs text-slate-800 space-y-1">
                    <div className="font-bold text-purple-900 flex items-center gap-1.5">
                      <Bot className="w-4 h-4 text-purple-700" />
                      <span>Ý Kiến Tham Vấn Chuyên Gia Sư Phạm AI:</span>
                    </div>
                    <p className="leading-relaxed whitespace-pre-line text-slate-700">
                      {aiAnalysisNote}
                    </p>
                  </div>
                )}

              </div>
            )}
          </div>

        </div>
      </div>

      {/* SECTION 3: STUDENT ADAPTIVE MATRIX & PERSONALIZED PATHS */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <h3 className="text-base font-extrabold text-slate-900">
                3. Bảng Quản Lý Phân Luồng Sinh Viên & Can Thiệp Cá Nhân
              </h3>
            </div>
            <p className="text-xs text-slate-500">
              Giảng viên có thể ghi đè (Override) nhánh học tập hoặc gửi nhanh gói bài tập thích ứng
            </p>
          </div>

          {/* Filter & Search */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Tìm sinh viên..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="pl-8 pr-3 py-1.5 rounded-xl border border-slate-200 text-xs bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex items-center bg-slate-100 p-1 rounded-xl text-xs">
              <button
                onClick={() => setTrackFilter('all')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  trackFilter === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                }`}
              >
                Tất cả ({profiles.length})
              </button>
              <button
                onClick={() => setTrackFilter('accelerated')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  trackFilter === 'accelerated' ? 'bg-white text-emerald-800 shadow-xs' : 'text-slate-600'
                }`}
              >
                Tăng tốc ({acceleratedCount})
              </button>
              <button
                onClick={() => setTrackFilter('standard')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  trackFilter === 'standard' ? 'bg-white text-blue-800 shadow-xs' : 'text-slate-600'
                }`}
              >
                Chuẩn ({standardCount})
              </button>
              <button
                onClick={() => setTrackFilter('scaffolding')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  trackFilter === 'scaffolding' ? 'bg-white text-rose-800 shadow-xs' : 'text-slate-600'
                }`}
              >
                Giàn giáo ({scaffoldingCount})
              </button>
            </div>
          </div>
        </div>

        {/* Student Table */}
        <div className="overflow-x-auto border border-slate-200 rounded-2xl">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-slate-50 text-slate-900 font-extrabold uppercase text-[11px] border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Sinh viên</th>
                <th className="py-3 px-3">Nhánh DDA Hiện Tại</th>
                <th className="py-3 px-3">Tải Nhận Thức</th>
                <th className="py-3 px-3">Chỉ Số Tự Chủ</th>
                <th className="py-3 px-4">Next Best Action (Hệ Thống Đề Xuất)</th>
                <th className="py-3 px-3 text-right">Thao tác can thiệp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredProfiles.map(p => {
                return (
                  <tr key={p.id} className="hover:bg-slate-50/80 transition-colors">
                    
                    {/* Student info */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-3">
                        <img src={p.avatar} alt={p.studentName} className="w-9 h-9 rounded-full border border-slate-200 shrink-0" />
                        <div>
                          <div className="font-bold text-slate-900">{p.studentName}</div>
                          <div className="text-[11px] text-slate-500 font-mono">{p.studentCode}</div>
                        </div>
                      </div>
                    </td>

                    {/* Track Badge */}
                    <td className="py-3.5 px-3">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider ${
                        p.currentTrack === 'accelerated' ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' :
                        p.currentTrack === 'scaffolding' ? 'bg-rose-100 text-rose-800 border border-rose-200' :
                        'bg-blue-100 text-blue-800 border border-blue-200'
                      }`}>
                        {p.currentTrack === 'accelerated' && '🚀 Tăng Tốc'}
                        {p.currentTrack === 'standard' && '⚖️ Chuẩn'}
                        {p.currentTrack === 'scaffolding' && '🛡️ Giàn Giáo'}
                      </span>
                    </td>

                    {/* Cognitive Load */}
                    <td className="py-3.5 px-3">
                      <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                        p.cognitiveLoad === 'overloaded' ? 'bg-rose-100 text-rose-800' :
                        p.cognitiveLoad === 'low' ? 'bg-amber-100 text-amber-800' :
                        'bg-emerald-100 text-emerald-800'
                      }`}>
                        {p.cognitiveLoad === 'overloaded' ? '⚠️ Quá tải' :
                         p.cognitiveLoad === 'low' ? '💤 Nhàn hạ' : '✨ Tối ưu'}
                      </span>
                    </td>

                    {/* Autonomy Index */}
                    <td className="py-3.5 px-3">
                      <div className="space-y-1">
                        <div className="flex items-center justify-between font-bold text-[11px]">
                          <span className="text-purple-900">{p.autonomyIndex}%</span>
                          <span className="text-[10px] text-slate-400">
                            {p.autonomyIndex >= 80 ? 'Cao' : p.autonomyIndex >= 60 ? 'TB' : 'Thấp'}
                          </span>
                        </div>
                        <div className="w-16 h-1.5 rounded-full bg-slate-200 overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${
                              p.autonomyIndex >= 80 ? 'bg-purple-600' :
                              p.autonomyIndex >= 60 ? 'bg-indigo-500' : 'bg-rose-500'
                            }`}
                            style={{ width: `${p.autonomyIndex}%` }}
                          />
                        </div>
                      </div>
                    </td>

                    {/* Next Best Action */}
                    <td className="py-3.5 px-4 max-w-xs">
                      <div className="space-y-0.5">
                        <div className="font-bold text-slate-900 line-clamp-1">
                          {p.nextBestAction.title}
                        </div>
                        <div className="text-[11px] text-slate-500 line-clamp-1">
                          {p.nextBestAction.reason}
                        </div>
                      </div>
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 px-3 text-right space-x-1.5 shrink-0">
                      <button
                        onClick={() => setSelectedProfileForDetail(p)}
                        className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 cursor-pointer transition-colors"
                        title="Xem chi tiết chẩn đoán"
                      >
                        <HelpCircle className="w-4 h-4" />
                      </button>

                      {/* Quick override track dropdown */}
                      <select
                        value={p.currentTrack}
                        onChange={e => handleManualTrackOverride(p.studentId, e.target.value as AdaptiveTrack)}
                        className="bg-slate-100 border border-slate-200 rounded-lg px-2 py-1 text-[11px] font-bold text-slate-700 cursor-pointer"
                        title="Đổi phân nhánh thủ công"
                      >
                        <option value="accelerated">Nhánh Tăng tốc</option>
                        <option value="standard">Nhánh Chuẩn</option>
                        <option value="scaffolding">Nhánh Giàn giáo</option>
                      </select>

                      <button
                        onClick={() => showToast(`Đã gán bài tập: "${p.nextBestAction.title}" tới tài khoản của ${p.studentName}!`)}
                        className="px-2.5 py-1 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-extrabold text-[11px] border border-indigo-200 cursor-pointer transition-all"
                      >
                        Gán bài tập
                      </button>
                    </td>

                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* STUDENT DETAIL MODAL */}
      {selectedProfileForDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-3">
                <img src={selectedProfileForDetail.avatar} alt={selectedProfileForDetail.studentName} className="w-12 h-12 rounded-full border border-slate-200" />
                <div>
                  <h3 className="font-bold text-slate-900 text-base">{selectedProfileForDetail.studentName}</h3>
                  <p className="text-xs text-slate-500 font-mono">{selectedProfileForDetail.studentCode}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedProfileForDetail(null)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold p-1 rounded-lg cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-slate-500">Tỷ lệ thành công gần đây</div>
                  <div className="text-lg font-black text-slate-900">{selectedProfileForDetail.recentSuccessRate}%</div>
                  <div className="text-[11px] text-slate-400">{selectedProfileForDetail.recentAttemptsCount} lần thử trung bình</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-slate-500">Chỉ số tự chủ (Autonomy)</div>
                  <div className="text-lg font-black text-purple-700">{selectedProfileForDetail.autonomyIndex}%</div>
                  <div className="text-[11px] text-slate-400">Độc lập giải quyết vấn đề</div>
                </div>
              </div>

              {/* Scaffolding level usage */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="font-bold text-slate-900">Phân bố cấp độ trợ giúp AI Tutor đã tra cứu:</div>
                <div className="grid grid-cols-5 gap-1.5 text-center">
                  <div className="p-1.5 rounded bg-white border border-slate-200">
                    <div className="text-[10px] text-slate-500">L1 Hint</div>
                    <div className="font-bold text-slate-900">{selectedProfileForDetail.scaffoldingLevelFrequency.level1}</div>
                  </div>
                  <div className="p-1.5 rounded bg-white border border-slate-200">
                    <div className="text-[10px] text-slate-500">L2 Socratic</div>
                    <div className="font-bold text-slate-900">{selectedProfileForDetail.scaffoldingLevelFrequency.level2}</div>
                  </div>
                  <div className="p-1.5 rounded bg-white border border-slate-200">
                    <div className="text-[10px] text-slate-500">L3 Khái niệm</div>
                    <div className="font-bold text-slate-900">{selectedProfileForDetail.scaffoldingLevelFrequency.level3}</div>
                  </div>
                  <div className="p-1.5 rounded bg-white border border-slate-200">
                    <div className="text-[10px] text-slate-500">L4 Ví dụ</div>
                    <div className="font-bold text-slate-900">{selectedProfileForDetail.scaffoldingLevelFrequency.level4}</div>
                  </div>
                  <div className="p-1.5 rounded bg-white border border-slate-200">
                    <div className="text-[10px] text-slate-500">L5 Lời giải</div>
                    <div className="font-bold text-rose-700">{selectedProfileForDetail.scaffoldingLevelFrequency.level5}</div>
                  </div>
                </div>
              </div>

              {/* Next best action box */}
              <div className="p-3.5 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-950 space-y-1.5">
                <div className="font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                  <span>Kế hoạch bồi dưỡng cá nhân hóa:</span>
                </div>
                <div className="font-bold text-slate-900 text-xs">{selectedProfileForDetail.nextBestAction.title}</div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  {selectedProfileForDetail.nextBestAction.description}
                </p>
                <div className="text-[11px] text-indigo-700">
                  Thời lượng dự kiến: {selectedProfileForDetail.nextBestAction.estimatedMinutes} phút • Gợi ý AI đề xuất: Cấp {selectedProfileForDetail.nextBestAction.recommendedScaffoldingLevel}
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  onClick={() => setSelectedProfileForDetail(null)}
                  className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-xl font-semibold cursor-pointer"
                >
                  Đóng
                </button>
                <button
                  onClick={() => {
                    showToast(`Đã gán bài tập bồi dưỡng cho ${selectedProfileForDetail.studentName}`);
                    setSelectedProfileForDetail(null);
                  }}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold shadow-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Gán bài tập ngay</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* BATCH ASSIGNMENT MODAL */}
      {batchModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2">
                <Send className="w-5 h-5 text-indigo-600" />
                <h3 className="font-extrabold text-slate-900 text-base">Phát Động Bài Tập Thích Ứng Toàn Lớp</h3>
              </div>
              <button
                onClick={() => setBatchModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold p-1 rounded-lg cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs">
              <p className="text-slate-600 leading-relaxed">
                Hệ thống sẽ phân loại tự động và gửi gói bài tập phù hợp với vùng phát triển gần nhất (ZPD) của từng sinh viên:
              </p>

              <div className="space-y-2.5">
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-1">
                  <div className="font-bold flex items-center justify-between">
                    <span>🚀 Nhóm Tăng Tốc ({acceleratedCount} SV)</span>
                    <span className="text-[10px] bg-emerald-200/60 px-2 py-0.5 rounded font-black">Level 3 Challenge</span>
                  </div>
                  <p className="text-[11px] text-emerald-800">
                    Bài tập tối ưu thuật toán xử lý dữ liệu lớn không dùng mảng phụ + Edge cases.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-950 space-y-1">
                  <div className="font-bold flex items-center justify-between">
                    <span>⚖️ Nhóm Chuẩn ({standardCount} SV)</span>
                    <span className="text-[10px] bg-blue-200/60 px-2 py-0.5 rounded font-black">Level 2 Standard</span>
                  </div>
                  <p className="text-[11px] text-blue-800">
                    Bài tập thực chiến tính toán hóa đơn giỏ hàng kết hợp map/filter.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-950 space-y-1">
                  <div className="font-bold flex items-center justify-between">
                    <span>🛡️ Nhóm Giàn Giáo ({scaffoldingCount} SV)</span>
                    <span className="text-[10px] bg-rose-200/60 px-2 py-0.5 rounded font-black">Prerequisite Patch</span>
                  </div>
                  <p className="text-[11px] text-rose-800">
                    Bài tập bù đắp mắt xích tiền đề: Vòng lặp tích lũy 10 phút kèm gợi ý AI Cấp 3.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3">
                <button
                  onClick={() => setBatchModalOpen(false)}
                  className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-xl font-semibold cursor-pointer"
                >
                  Hủy
                </button>
                <button
                  onClick={handleSendBatchAssignment}
                  className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold shadow-md shadow-indigo-600/20 flex items-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Xác nhận phát toàn lớp (1-Click)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
