import { Achievement, DailyQuest } from '../types';

const STORAGE_KEYS = {
  ACHIEVEMENTS: 'js_master_achievements',
  DAILY_QUESTS: 'js_master_daily_quests',
  LAST_STREAK_DATE: 'js_master_last_streak_date',
  STREAK_DAYS: 'js_master_streak_days'
};

export const INITIAL_ACHIEVEMENTS: Achievement[] = [
  {
    id: 'badge-init',
    title: 'Khởi Đầu Vững Chắc',
    description: 'Hoàn thành trọn vẹn Module 1 & Module 2 theo chuẩn Learning-by-Doing',
    iconName: 'Rocket',
    category: 'progress',
    unlockedAt: '2026-09-20T10:00:00Z',
    currentProgress: 2,
    maxProgress: 2,
    xpReward: 100,
    rarity: 'common'
  },
  {
    id: 'badge-bug-hunter',
    title: 'Thợ Săn Bug Thực Chiến',
    description: 'Tìm và sửa thành công 3 lỗi tư duy sai lầm trong phòng Debugging Lab',
    iconName: 'Bug',
    category: 'mastery',
    unlockedAt: '2026-09-21T07:30:00Z',
    currentProgress: 3,
    maxProgress: 3,
    xpReward: 150,
    rarity: 'rare'
  },
  {
    id: 'badge-memory-master',
    title: 'Bậc Thầy Spaced Review',
    description: 'Ôn tập 5 thẻ ghi nhớ theo chu kỳ đường cong quên lãng Ebbinghaus',
    iconName: 'Brain',
    category: 'persistence',
    currentProgress: 3,
    maxProgress: 5,
    xpReward: 150,
    rarity: 'rare'
  },
  {
    id: 'badge-ai-collab',
    title: 'Cộng Sự AI Sư Phạm',
    description: 'Tương tác và vượt qua bài tập nhờ giàn giáo sư phạm 5 cấp độ của AI Tutor',
    iconName: 'Bot',
    category: 'ai_collaboration',
    unlockedAt: '2026-09-20T14:20:00Z',
    currentProgress: 1,
    maxProgress: 1,
    xpReward: 100,
    rarity: 'common'
  },
  {
    id: 'badge-quiz-ace',
    title: 'Thiện Xạ Trắc Nghiệm',
    description: 'Đạt điểm tuyệt đối 100% trong bài kiểm tra trắc nghiệm năng lực Quiz',
    iconName: 'Target',
    category: 'mastery',
    unlockedAt: '2026-09-20T11:00:00Z',
    currentProgress: 1,
    maxProgress: 1,
    xpReward: 120,
    rarity: 'epic'
  },
  {
    id: 'badge-streak-master',
    title: 'Ngọn Lửa Chuyên Cần',
    description: 'Duy trì chuỗi học tập liên tục 7 ngày không ngắt quãng trên nền tảng',
    iconName: 'Flame',
    category: 'persistence',
    unlockedAt: '2026-09-21T08:00:00Z',
    currentProgress: 7,
    maxProgress: 7,
    xpReward: 200,
    rarity: 'epic'
  },
  {
    id: 'badge-mini-architect',
    title: 'Kiến Trúc Sư Mini App',
    description: 'Hoàn thành Mini Project kết nối API giỏ hàng và thanh toán ở Module 17',
    iconName: 'Layers',
    category: 'progress',
    currentProgress: 0,
    maxProgress: 1,
    xpReward: 250,
    rarity: 'legendary'
  },
  {
    id: 'badge-code-ninja',
    title: 'Chiến Binh JavaScript',
    description: 'Tích lũy tổng điểm kinh nghiệm năng lực vượt mốc 1,500 XP',
    iconName: 'Award',
    category: 'mastery',
    currentProgress: 1450,
    maxProgress: 1500,
    xpReward: 300,
    rarity: 'legendary'
  }
];

export const INITIAL_DAILY_QUESTS: DailyQuest[] = [
  {
    id: 'quest-predict',
    title: 'Đọc hiểu Console Output',
    description: 'Dự đoán chính xác kết quả 1 bài Predict the Output trước khi chạy',
    xp: 30,
    completed: true,
    iconName: 'Terminal',
    actionType: 'predict'
  },
  {
    id: 'quest-exercise',
    title: 'Chinh phục Test Cases',
    description: 'Vượt qua 100% các ca kiểm thử tự động của 1 bài tập thực hành Lab',
    xp: 50,
    completed: false,
    iconName: 'Code',
    actionType: 'exercise'
  },
  {
    id: 'quest-spaced',
    title: 'Củng cố trí nhớ ngắt quãng',
    description: 'Lật thẻ và tự kiểm tra 1 nội dung Bookmark cần ôn tập trong hôm nay',
    xp: 40,
    completed: false,
    iconName: 'RefreshCw',
    actionType: 'spaced_review'
  }
];

export interface RankInfo {
  level: number;
  title: string;
  minXp: number;
  maxXp: number;
  progressPercent: number;
  nextRankTitle: string;
}

export const gamificationService = {
  getRankInfo(xp: number): RankInfo {
    if (xp < 300) {
      return {
        level: 1,
        title: 'Tân Binh JavaScript',
        minXp: 0,
        maxXp: 300,
        progressPercent: Math.min(100, Math.round((xp / 300) * 100)),
        nextRankTitle: 'Thực Tập Sinh Lập Trình'
      };
    } else if (xp < 700) {
      return {
        level: 2,
        title: 'Thực Tập Sinh Lập Trình',
        minXp: 300,
        maxXp: 700,
        progressPercent: Math.min(100, Math.round(((xp - 300) / 400) * 100)),
        nextRankTitle: 'Junior JS Developer'
      };
    } else if (xp < 1300) {
      return {
        level: 3,
        title: 'Junior JS Developer',
        minXp: 700,
        maxXp: 1300,
        progressPercent: Math.min(100, Math.round(((xp - 700) / 600) * 100)),
        nextRankTitle: 'Senior Code Crafter'
      };
    } else if (xp < 2000) {
      return {
        level: 4,
        title: 'Senior Code Crafter',
        minXp: 1300,
        maxXp: 2000,
        progressPercent: Math.min(100, Math.round(((xp - 1300) / 700) * 100)),
        nextRankTitle: 'JS Master Poly'
      };
    } else {
      return {
        level: 5,
        title: 'JS Master Poly',
        minXp: 2000,
        maxXp: 3000,
        progressPercent: 100,
        nextRankTitle: 'Tối Thượng'
      };
    }
  },

  getAchievements(): Achievement[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.ACHIEVEMENTS);
      if (data) return JSON.parse(data);
    } catch (e) {
      console.error('Failed to load achievements', e);
    }
    return INITIAL_ACHIEVEMENTS;
  },

  saveAchievements(achievements: Achievement[]): void {
    try {
      localStorage.setItem(STORAGE_KEYS.ACHIEVEMENTS, JSON.stringify(achievements));
    } catch (e) {
      console.error('Failed to save achievements', e);
    }
  },

  getDailyQuests(): DailyQuest[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.DAILY_QUESTS);
      if (data) return JSON.parse(data);
    } catch (e) {
      console.error('Failed to load daily quests', e);
    }
    return INITIAL_DAILY_QUESTS;
  },

  saveDailyQuests(quests: DailyQuest[]): void {
    try {
      localStorage.setItem(STORAGE_KEYS.DAILY_QUESTS, JSON.stringify(quests));
    } catch (e) {
      console.error('Failed to save daily quests', e);
    }
  },

  completeQuest(questId: string): { completedQuest?: DailyQuest; xpEarned: number } {
    const quests = this.getDailyQuests();
    let xpEarned = 0;
    let completedQuest: DailyQuest | undefined;

    const updated = quests.map(q => {
      if (q.id === questId && !q.completed) {
        xpEarned = q.xp;
        completedQuest = { ...q, completed: true };
        return completedQuest;
      }
      return q;
    });

    if (xpEarned > 0) {
      this.saveDailyQuests(updated);
    }

    return { completedQuest, xpEarned };
  },

  getStreakDays(): number {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.STREAK_DAYS);
      if (data) return parseInt(data, 10);
    } catch (e) {
      // ignore
    }
    return 7; // Default 7 days active streak
  }
};
