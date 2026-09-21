import { Bookmark, StudentProfile, ProgressStatus, SelfAssessmentLevel } from '../types';
import { MOCK_STUDENTS } from '../data/mockStudentAnalytics';

const STORAGE_KEYS = {
  CURRENT_STUDENT: 'js_master_student_profile',
  BOOKMARKS: 'js_master_bookmarks',
  COMPLETED_LESSONS: 'js_master_completed_lessons',
  SELF_ASSESSMENTS: 'js_master_self_assessments',
  QUIZ_SCORES: 'js_master_quiz_scores',
  ACTIVE_LESSON_ID: 'js_master_active_lesson_id'
};

export interface LessonProgressRecord {
  lessonId: string;
  status: ProgressStatus;
  selfRating?: SelfAssessmentLevel;
  quizScore?: number;
  completedAt?: string;
  timeSpentMinutes?: number;
}

export const storageService = {
  getStudentProfile(fallback?: StudentProfile): StudentProfile {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.CURRENT_STUDENT);
      if (data) {
        return JSON.parse(data);
      }
    } catch (e) {
      console.error('Failed to load student profile from storage', e);
    }
    return fallback || MOCK_STUDENTS[0];
  },

  saveStudentProfile(profile: StudentProfile): void {
    try {
      localStorage.setItem(STORAGE_KEYS.CURRENT_STUDENT, JSON.stringify(profile));
    } catch (e) {
      console.error('Failed to save student profile to storage', e);
    }
  },

  addBookmark(bookmark: Bookmark): void {
    const list = this.getBookmarks();
    this.saveBookmarks([bookmark, ...list]);
  },

  markLessonCompleted(lessonId: string, level?: SelfAssessmentLevel): void {
    const completed = this.getCompletedLessonIds();
    if (!completed.includes(lessonId)) {
      this.saveCompletedLessonIds([...completed, lessonId]);
    }
    if (level) {
      this.saveSelfAssessment(lessonId, level);
    }
  },

  getBookmarks(): Bookmark[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
      if (data) {
        return JSON.parse(data);
      }
    } catch (e) {
      console.error('Failed to load bookmarks from storage', e);
    }
    return [
      {
        id: 'bm-1',
        studentId: 'sv-01',
        lessonId: 'les-2-1',
        lessonTitle: 'Bài 2.1: Khai báo biến với let, const và Kiểu dữ liệu nguyên thủy',
        targetTitle: 'Lỗi thiết kế lịch sử: typeof null === "object"',
        targetType: 'concept',
        contentSnippet: 'console.log(typeof null); // in ra "object"',
        reason: 'kho_nho',
        customNote: 'Lưu ý kiểm tra null phải dùng: val === null chứ không dùng typeof!',
        createdAt: '2026-09-20T08:30:00Z',
        isResolved: false
      },
      {
        id: 'bm-2',
        studentId: 'sv-01',
        lessonId: 'les-2-1',
        lessonTitle: 'Bài 2.1: Khai báo biến với let, const và Kiểu dữ liệu nguyên thủy',
        targetTitle: 'Quy tắc vàng: 95% dùng const, 5% dùng let, không dùng var',
        targetType: 'concept',
        contentSnippet: 'const user = { name: "An" }; user.name = "Bình"; // Hợp lệ!',
        reason: 'vi_du_quan_trong',
        customNote: 'const chỉ bảo vệ tham chiếu, không đóng băng thuộc tính bên trong object.',
        createdAt: '2026-09-20T09:15:00Z',
        isResolved: false
      },
      {
        id: 'bm-3',
        studentId: 'sv-01',
        lessonId: 'les-2-1',
        lessonTitle: 'Bài 2.1: Khai báo biến với let, const và Kiểu dữ liệu nguyên thủy',
        targetTitle: 'Template Literals nhúng biểu thức logic và định dạng chuỗi nhiều dòng',
        targetType: 'code',
        contentSnippet: 'const card = `Xin chào ${name}, điểm: ${score > 5 ? "Đậu" : "Trượt"}`;',
        reason: 'can_hoc_lai',
        customNote: 'Áp dụng cho bài tập render danh sách sản phẩm trong giỏ hàng.',
        createdAt: '2026-09-20T10:00:00Z',
        isResolved: true
      },
      {
        id: 'bm-4',
        studentId: 'sv-01',
        lessonId: 'les-2-1',
        lessonTitle: 'Bài 2.1: Khai báo biến với let, const và Kiểu dữ liệu nguyên thủy',
        targetTitle: 'Temporal Dead Zone (TDZ) khi truy cập biến let/const trước dòng khai báo',
        targetType: 'concept',
        contentSnippet: 'console.log(age); // ReferenceError: Cannot access age before initialization',
        reason: 'chua_hieu',
        customNote: 'Cần hỏi lại thầy Khang cơ chế Hoisting và TDZ khác nhau ra sao.',
        createdAt: '2026-09-21T07:10:00Z',
        isResolved: false
      }
    ];
  },

  saveBookmarks(bookmarks: Bookmark[]): void {
    try {
      localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(bookmarks));
    } catch (e) {
      console.error('Failed to save bookmarks to storage', e);
    }
  },

  getCompletedLessonIds(): string[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.COMPLETED_LESSONS);
      if (data) {
        return JSON.parse(data);
      }
    } catch (e) {
      console.error('Failed to load completed lessons from storage', e);
    }
    // Default mock completed lessons
    return [
      'les-1-1', 'les-1-2', 'les-1-3', 'les-1-4',
      'les-2-1'
    ];
  },

  saveCompletedLessonIds(ids: string[]): void {
    try {
      localStorage.setItem(STORAGE_KEYS.COMPLETED_LESSONS, JSON.stringify(ids));
    } catch (e) {
      console.error('Failed to save completed lessons', e);
    }
  },

  getSelfAssessments(): Record<string, SelfAssessmentLevel> {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SELF_ASSESSMENTS);
      if (data) {
        return JSON.parse(data);
      }
    } catch (e) {
      console.error('Failed to load self-assessments', e);
    }
    return {
      'les-1-1': 5,
      'les-1-2': 5,
      'les-1-3': 4,
      'les-1-4': 4,
      'les-2-1': 4
    };
  },

  saveSelfAssessment(lessonId: string, level: SelfAssessmentLevel): void {
    try {
      const current = this.getSelfAssessments();
      current[lessonId] = level;
      localStorage.setItem(STORAGE_KEYS.SELF_ASSESSMENTS, JSON.stringify(current));
    } catch (e) {
      console.error('Failed to save self-assessment', e);
    }
  },

  getQuizScores(): Record<string, number> {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.QUIZ_SCORES);
      if (data) {
        return JSON.parse(data);
      }
    } catch (e) {
      console.error('Failed to load quiz scores', e);
    }
    return {
      'les-1-1': 100,
      'les-1-2': 90,
      'les-1-3': 95,
      'les-1-4': 85,
      'les-2-1': 90
    };
  },

  saveQuizScore(lessonId: string, score: number): void {
    try {
      const current = this.getQuizScores();
      current[lessonId] = score;
      localStorage.setItem(STORAGE_KEYS.QUIZ_SCORES, JSON.stringify(current));
    } catch (e) {
      console.error('Failed to save quiz score', e);
    }
  },

  getActiveLessonId(): string {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.ACTIVE_LESSON_ID);
      if (data) return data;
    } catch (e) {
      // ignore
    }
    return 'les-2-1';
  },

  saveActiveLessonId(id: string): void {
    try {
      localStorage.setItem(STORAGE_KEYS.ACTIVE_LESSON_ID, id);
    } catch (e) {
      // ignore
    }
  }
};
