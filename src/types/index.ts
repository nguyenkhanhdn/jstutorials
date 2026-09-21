export type ProgressStatus = 'not_started' | 'in_progress' | 'completed' | 'needs_review' | 'mastered';

export type BookmarkReason = 'chua_hieu' | 'can_hoc_lai' | 'kho_nho' | 'tim_hieu_sau' | 'vi_du_quan_trong';

export type SelfAssessmentLevel = 1 | 2 | 3 | 4 | 5;
// 1: Chưa hiểu
// 2: Hiểu một phần
// 3: Có thể làm bài cơ bản
// 4: Có thể tự giải quyết bài toán
// 5: Có thể giải thích lại cho người khác

export type QuestionType = 
  | 'multiple_choice' 
  | 'multiple_answer' 
  | 'true_false' 
  | 'predict_output' 
  | 'code_completion' 
  | 'bug_finding' 
  | 'scenario';

export type ExerciseDifficulty = 'basic' | 'intermediate' | 'challenge';

export interface LearningObjective {
  id: string;
  code: string; // e.g. "LO2.1"
  title: string;
  description: string;
  bloomLevel: 'Remember' | 'Understand' | 'Apply' | 'Analyze' | 'Evaluate' | 'Create';
  masteryPercentage?: number;
}

export interface Section {
  id: string;
  lessonId: string;
  title: string;
  order: number;
  conceptName: string;
  explanation: string;
  syntax?: string;
  codeExample: string;
  lineByLineExplanation: { line: number; text: string }[];
  commonMistakes: string[];
  whenToUse: string;
  whenNotToUse: string;
  realWorldUseCase: string;
}

export interface PredictOutputItem {
  id: string;
  code: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  hint: string;
}

export interface TestCase {
  id: string;
  description: string;
  inputCode?: string;
  expectedOutput: string;
  isSecret?: boolean;
}

export interface Exercise {
  id: string;
  lessonId: string;
  title: string;
  difficulty: ExerciseDifficulty;
  learningObjectiveIds: string[];
  description: string;
  starterCode: string;
  solutionCode: string;
  testCases: TestCase[];
  hints: string[];
  explanation: string;
}

export interface Question {
  id: string;
  lessonId: string;
  learningObjectiveId: string;
  type: QuestionType;
  difficulty: 'easy' | 'medium' | 'hard';
  prompt: string;
  codeSnippet?: string;
  options?: { id: string; text: string; code?: string }[];
  correctAnswer: string | string[]; // string or array for multiple_answer
  explanation: string;
  relatedLessonId: string;
  errorAnalysis?: string; // Giải thích lỗi sai phổ biến của SV
}

export interface Quiz {
  id: string;
  lessonId: string;
  title: string;
  passingScore: number;
  timeLimitMinutes?: number;
  questions: Question[];
}

export interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  order: number;
  durationMinutes: number;
  difficulty: 'Cơ bản' | 'Trung bình' | 'Nâng cao';
  prerequisites: string[];
  learningObjectives: LearningObjective[];
  sections: Section[];
  predictOutputs: PredictOutputItem[];
  interactivePractice: {
    id: string;
    title: string;
    description: string;
    starterCode: string;
    expectedConsoleOutput: string;
    hint: string;
  };
  exercises: {
    basic: Exercise;
    intermediate: Exercise;
    challenge: Exercise;
  };
  quiz: Quiz;
  summary: string[];
  suggestedBookmarks: string[];
  relatedLessons: { id: string; title: string }[];
}

export interface Module {
  id: string;
  number: number;
  title: string;
  englishTitle: string;
  description: string;
  durationHours: number;
  lessonsCount: number;
  lessons: { id: string; title: string; durationMinutes: number; status: ProgressStatus }[];
  status: ProgressStatus;
  masteryPercentage: number;
}

export interface Bookmark {
  id: string;
  studentId: string;
  lessonId: string;
  lessonTitle: string;
  sectionId?: string;
  targetTitle: string;
  targetType: 'concept' | 'example' | 'code' | 'exercise' | 'question';
  contentSnippet: string;
  reason: BookmarkReason;
  customNote?: string;
  createdAt: string;
  isResolved: boolean;
}

export interface StudentProgress {
  studentId: string;
  lessonId: string;
  status: ProgressStatus;
  startedAt: string;
  lastAccessedAt: string;
  completedAt?: string;
  timeSpentMinutes: number;
  completionPercentage: number;
  quizAttempts: number;
  bestQuizScore: number;
  latestQuizScore: number;
  exercisesCompleted: string[]; // exercise IDs
  confidenceLevel?: SelfAssessmentLevel;
  needsReviewObjectives: string[];
}

export interface StudentProfile {
  id: string;
  code: string;
  fullName: string;
  email: string;
  avatar: string;
  classGroup: string;
  overallProgress: number;
  completedLessons: number;
  totalLessons: number;
  averageQuizScore: number;
  xp: number;
  streakDays: number;
  atRisk: boolean;
  atRiskReason?: string;
  lastActive: string;
  weakObjectives: string[];
  bookmarkCount: number;
}

export interface AITutorResponse {
  scaffoldingLevel: number;
  response: string;
  source: 'gemini' | 'pedagogical_engine';
}
