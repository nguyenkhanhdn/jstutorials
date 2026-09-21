import React, { useState, useEffect } from 'react';
import { 
  X, 
  Flame, 
  Zap, 
  Award, 
  CheckCircle2, 
  Lock, 
  Sparkles, 
  Calendar, 
  Target, 
  Bot, 
  Brain, 
  Bug, 
  Rocket, 
  Layers, 
  Terminal, 
  Code, 
  RefreshCw,
  Gift,
  Trophy,
  ChevronRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Achievement, DailyQuest, StudentProfile } from '../../types';
import { gamificationService, RankInfo } from '../../services/gamificationService';

interface GamificationHubModalProps {
  isOpen: boolean;
  onClose: () => void;
  student: StudentProfile;
  onClaimQuestReward?: (xp: number) => void;
}

export const GamificationHubModal: React.FC<GamificationHubModalProps> = ({
  isOpen,
  onClose,
  student,
  onClaimQuestReward
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'achievements' | 'quests'>('overview');
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [dailyQuests, setDailyQuests] = useState<DailyQuest[]>([]);
  const [rankInfo, setRankInfo] = useState<RankInfo>(() => gamificationService.getRankInfo(student.xp));

  useEffect(() => {
    if (isOpen) {
      setAchievements(gamificationService.getAchievements());
      setDailyQuests(gamificationService.getDailyQuests());
      setRankInfo(gamificationService.getRankInfo(student.xp));
    }
  }, [isOpen, student.xp]);

  if (!isOpen) return null;

  const handleClaimQuest = (questId: string) => {
    const { completedQuest, xpEarned } = gamificationService.completeQuest(questId);
    if (completedQuest && xpEarned > 0) {
      setDailyQuests(gamificationService.getDailyQuests());
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.6 }
      });
      if (onClaimQuestReward) {
        onClaimQuestReward(xpEarned);
      }
    }
  };

  const getBadgeIcon = (iconName: string, unlocked: boolean) => {
    const className = `w-6 h-6 ${unlocked ? 'text-amber-500' : 'text-slate-400'}`;
    switch (iconName) {
      case 'Rocket': return <Rocket className={className} />;
      case 'Bug': return <Bug className={className} />;
      case 'Brain': return <Brain className={className} />;
      case 'Bot': return <Bot className={className} />;
      case 'Target': return <Target className={className} />;
      case 'Flame': return <Flame className={className} />;
      case 'Layers': return <Layers className={className} />;
      default: return <Award className={className} />;
    }
  };

  const getRarityBadge = (rarity: Achievement['rarity']) => {
    switch (rarity) {
      case 'legendary':
        return <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-500 text-slate-950 uppercase tracking-wider">Huyền thoại</span>;
      case 'epic':
        return <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-purple-100 text-purple-800 border border-purple-200 uppercase tracking-wider">Sử thi</span>;
      case 'rare':
        return <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-blue-100 text-blue-800 border border-blue-200 uppercase tracking-wider">Hiếm</span>;
      default:
        return <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-slate-100 text-slate-700 border border-slate-200 uppercase tracking-wider">Phổ biến</span>;
    }
  };

  const daysOfWeek = [
    { label: 'T2', active: true },
    { label: 'T3', active: true },
    { label: 'T4', active: true },
    { label: 'T5', active: true },
    { label: 'T6', active: true },
    { label: 'T7', active: true },
    { label: 'CN', active: true, today: true }
  ];

  const unlockedCount = achievements.filter(a => a.unlockedAt).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-6 bg-gradient-to-r from-amber-500 via-amber-600 to-indigo-700 text-white flex items-center justify-between relative overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-44 h-44 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex items-center gap-3.5 z-10">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-inner">
              <Trophy className="w-6 h-6 text-amber-200 fill-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-black tracking-tight text-white">Thành Tích & Động Lực Học Tập</h2>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-white/20 text-white border border-white/30 backdrop-blur-xs">
                  Gamification V2
                </span>
              </div>
              <p className="text-xs text-amber-100/90 mt-0.5">
                Theo dõi chuỗi chuyên cần, cấp bậc lập trình viên và huy hiệu năng lực
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors z-10"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 pt-4 border-b border-slate-200 bg-slate-50/70 text-xs">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-3 px-3 font-bold border-b-2 transition-all ${
              activeTab === 'overview'
                ? 'border-amber-500 text-amber-900 font-extrabold'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Tổng quan & Cấp bậc
          </button>
          <button
            onClick={() => setActiveTab('quests')}
            className={`pb-3 px-3 font-bold border-b-2 flex items-center gap-1.5 transition-all ${
              activeTab === 'quests'
                ? 'border-amber-500 text-amber-900 font-extrabold'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <span>Nhiệm vụ hàng ngày</span>
            <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-extrabold flex items-center justify-center border border-amber-300">
              {dailyQuests.filter(q => !q.completed).length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('achievements')}
            className={`pb-3 px-3 font-bold border-b-2 flex items-center gap-1.5 transition-all ${
              activeTab === 'achievements'
                ? 'border-amber-500 text-amber-900 font-extrabold'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <span>Huy hiệu năng lực</span>
            <span className="text-[11px] font-semibold text-slate-500">
              ({unlockedCount}/{achievements.length})
            </span>
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-800 text-xs">

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              
              {/* Rank & XP Card */}
              <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-indigo-950 text-white rounded-2xl p-5 shadow-lg border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-lg shadow-md shadow-amber-500/20">
                      C{rankInfo.level}
                    </div>
                    <div>
                      <div className="text-[11px] text-amber-400 font-bold uppercase tracking-wider">
                        Cấp độ hiện tại • Level {rankInfo.level}
                      </div>
                      <h3 className="text-lg font-black text-white">{rankInfo.title}</h3>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-amber-400 font-black text-base">
                      <Zap className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span>{student.xp.toLocaleString()} XP</span>
                    </div>
                    <span className="text-[11px] text-slate-400">
                      Mục tiêu kế: {rankInfo.maxXp} XP ({rankInfo.nextRankTitle})
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-slate-300">
                    <span>Tiến trình thăng cấp</span>
                    <span className="text-amber-300">{rankInfo.progressPercent}%</span>
                  </div>
                  <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700">
                    <div 
                      className="h-full bg-gradient-to-r from-amber-400 to-indigo-400 rounded-full transition-all duration-500"
                      style={{ width: `${rankInfo.progressPercent}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Streak Tracker */}
              <div className="bg-amber-50/70 border border-amber-200/90 rounded-2xl p-5 space-y-3 shadow-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-md shadow-amber-500/30">
                      <Flame className="w-6 h-6 fill-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-base font-black text-amber-950">Chuỗi {student.streakDays} ngày liên tục</span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-200/80 text-amber-900">
                          Đang rực cháy 🔥
                        </span>
                      </div>
                      <p className="text-slate-600 text-xs">
                        Học ít nhất 15 phút mỗi ngày để bảo toàn chuỗi chuyên cần học kỳ!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Days Grid */}
                <div className="grid grid-cols-7 gap-2 pt-2">
                  {daysOfWeek.map((day, idx) => (
                    <div 
                      key={idx}
                      className={`flex flex-col items-center justify-center p-2.5 rounded-xl border text-center transition-all ${
                        day.today 
                          ? 'bg-amber-400 text-slate-950 border-amber-500 font-bold ring-2 ring-amber-400/40 shadow-xs'
                          : day.active
                          ? 'bg-white border-amber-200 text-amber-900 font-semibold'
                          : 'bg-slate-100 border-slate-200 text-slate-400'
                      }`}
                    >
                      <span className="text-[10px] uppercase font-bold tracking-wider">{day.label}</span>
                      <div className="mt-1">
                        {day.active ? (
                          <CheckCircle2 className={`w-4 h-4 ${day.today ? 'text-slate-950' : 'text-emerald-600'}`} />
                        ) : (
                          <div className="w-4 h-4 rounded-full border border-dashed border-slate-300" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Jump Quests banner */}
              <div className="p-4 rounded-2xl bg-indigo-50/80 border border-indigo-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-indigo-600 shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900">Nhiệm vụ hôm nay</h4>
                    <p className="text-slate-600 text-xs">Bạn có 2 nhiệm vụ chưa hoàn thành để nhận tới +90 XP</p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveTab('quests')}
                  className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-colors flex items-center gap-1 shadow-xs"
                >
                  <span>Xem nhiệm vụ</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          )}

          {/* TAB 2: DAILY QUESTS */}
          {activeTab === 'quests' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Nhiệm vụ hàng ngày (Daily Quests)</h3>
                  <p className="text-slate-500 text-xs">Làm mới lúc 00:00 mỗi ngày để tích lũy XP và xây dựng thói quen tốt</p>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-100 text-amber-900 border border-amber-200">
                  +120 XP có thể nhận hôm nay
                </span>
              </div>

              <div className="space-y-3">
                {dailyQuests.map((quest) => (
                  <div 
                    key={quest.id}
                    className={`p-4 rounded-2xl border transition-all flex items-center justify-between gap-4 ${
                      quest.completed 
                        ? 'bg-emerald-50/60 border-emerald-200/80' 
                        : 'bg-white border-slate-200 hover:border-indigo-300 shadow-xs'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        quest.completed ? 'bg-emerald-100 text-emerald-700' : 'bg-indigo-50 text-indigo-700 border border-indigo-100'
                      }`}>
                        {quest.iconName === 'Terminal' && <Terminal className="w-5 h-5" />}
                        {quest.iconName === 'Code' && <Code className="w-5 h-5" />}
                        {quest.iconName === 'RefreshCw' && <RefreshCw className="w-5 h-5" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-slate-900 text-xs sm:text-sm">{quest.title}</h4>
                          {quest.completed && (
                            <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                              Đã xong
                            </span>
                          )}
                        </div>
                        <p className="text-slate-600 text-xs mt-0.5 leading-relaxed">{quest.description}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-1 rounded-lg text-xs flex items-center gap-1">
                        <Zap className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                        +{quest.xp} XP
                      </span>
                      {quest.completed ? (
                        <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                      ) : (
                        <button
                          onClick={() => handleClaimQuest(quest.id)}
                          className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition-colors shadow-xs"
                        >
                          Nhận thưởng
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: ACHIEVEMENTS */}
          {activeTab === 'achievements' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Huy hiệu năng lực (Competency Badges)</h3>
                  <p className="text-slate-500 text-xs">Chứng nhận các cột mốc kỹ năng chuẩn đầu ra FPT Polytechnic</p>
                </div>
                <div className="flex items-center gap-1 text-slate-700 font-bold bg-slate-100 px-2.5 py-1 rounded-lg">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span>{unlockedCount} / {achievements.length} Mở khóa</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {achievements.map((badge) => {
                  const isUnlocked = !!badge.unlockedAt;
                  return (
                    <div 
                      key={badge.id}
                      className={`p-4 rounded-2xl border transition-all flex flex-col justify-between space-y-3 ${
                        isUnlocked 
                          ? 'bg-white border-amber-200/80 shadow-xs hover:border-amber-400' 
                          : 'bg-slate-50/80 border-slate-200 opacity-75'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 border ${
                            isUnlocked 
                              ? 'bg-amber-50 border-amber-200 shadow-xs' 
                              : 'bg-slate-200/60 border-slate-300 text-slate-400'
                          }`}>
                            {getBadgeIcon(badge.iconName, isUnlocked)}
                          </div>
                          <div>
                            <h4 className={`font-bold text-xs ${isUnlocked ? 'text-slate-900' : 'text-slate-600'}`}>
                              {badge.title}
                            </h4>
                            <div className="mt-0.5">{getRarityBadge(badge.rarity)}</div>
                          </div>
                        </div>

                        {isUnlocked ? (
                          <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0" title="Đã đạt">
                            <CheckCircle2 className="w-4 h-4" />
                          </div>
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center shrink-0" title="Chưa mở khóa">
                            <Lock className="w-3.5 h-3.5" />
                          </div>
                        )}
                      </div>

                      <p className="text-slate-600 text-xs leading-relaxed">
                        {badge.description}
                      </p>

                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                        <span className="font-extrabold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                          +{badge.xpReward} XP
                        </span>
                        {isUnlocked ? (
                          <span className="text-emerald-700 font-bold">✓ Đã đạt</span>
                        ) : (
                          <span className="text-slate-500 font-medium">
                            Tiến độ: {badge.currentProgress}/{badge.maxProgress}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs">
          <span className="text-slate-500">
            Học tập đều đặn và tương tác cùng AI Tutor để nhanh chóng đạt thứ hạng <strong>JS Master Poly</strong>!
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold transition-colors"
          >
            Đóng
          </button>
        </div>

      </div>
    </div>
  );
};
