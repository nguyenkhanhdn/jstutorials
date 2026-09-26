export type CurriculumTrack = 'html' | 'css' | 'javascript';

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
  language?: 'html' | 'javascript' | 'css';
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
  track?: CurriculumTrack;
  language?: 'html' | 'javascript' | 'css';
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
    language?: 'html' | 'javascript' | 'css';
  };
  exercises: {
    basic: Exercise;
    intermediate: Exercise;
    challenge: Exercise;
  };
  quiz: Quiz;
  summary: string[];
  suggestedBookmarks: string[];
  relatedLessons?: { id: string; title: string }[];
}

export interface Module {
  id: string;
  number: number;
  track?: CurriculumTrack;
  title: string;
  englishTitle: string;
  description: string;
  durationHours: number;
  lessonsCount: number;
  lessons: { id: string; title: string; durationMinutes: number; status: ProgressStatus }[];
  status: ProgressStatus;
  masteryPercentage: number;
}

export type SpacedReviewStatus = 'due' | 'upcoming' | 'mastered';

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
  // Version 2: Spaced Repetition Tracking
  nextReviewDate?: string;
  reviewIntervalDays?: number; // 1, 3, 7, 14, 30 days
  repetitionsCount?: number;
  lastReviewedAt?: string;
  reviewStatus?: SpacedReviewStatus;
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

export interface Achievement {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: 'progress' | 'mastery' | 'persistence' | 'ai_collaboration';
  unlockedAt?: string;
  currentProgress: number;
  maxProgress: number;
  xpReward: number;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

export interface DailyQuest {
  id: string;
  title: string;
  description: string;
  xp: number;
  completed: boolean;
  iconName: string;
  actionType: 'predict' | 'exercise' | 'spaced_review';
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
  role?: 'student' | 'teacher' | 'admin';
  // Version 2: Gamification stats
  rankTitle?: string;
  unlockedBadgeIds?: string[];
  dailyQuestsCompleted?: string[];
}

export interface AITutorResponse {
  scaffoldingLevel: number;
  response: string;
  source: 'gemini' | 'pedagogical_engine';
}

// ==========================================
// ADVANCED LEARNING ANALYTICS TYPES
// ==========================================

export interface ObjectiveMastery {
  code: string;
  title: string;
  moduleName: string;
  bloomLevel: 'Remember' | 'Understand' | 'Apply' | 'Analyze' | 'Evaluate' | 'Create';
  avgMastery: number; // 0 - 100%
  passingRate: number; // 0 - 100%
  atRiskCount: number;
  recommendation: string;
}

export interface CohortBenchmark {
  classId: string;
  className: string;
  teacherName: string;
  schedule: string;
  studentCount: number;
  avgProgress: number;
  avgQuizScore: number;
  atRiskCount: number;
  activeRate: number;
  topWeakObjective: string;
}

export interface StudentIntervention {
  id: string;
  studentId: string;
  studentName: string;
  studentCode: string;
  avatar: string;
  riskScore: number; // 0 - 100
  riskFactors: string[];
  status: 'pending' | 'in_progress' | 'resolved';
  actionType: 'remediation_quiz' | 'one_on_one' | 'study_buddy' | 'counseling';
  assignedDate: string;
  deadline: string;
  notes: string;
}

export interface MisconceptionDiagnostic {
  id: string;
  title: string;
  moduleName: string;
  errorCategory: 'syntax' | 'type_coercion' | 'scope_closure' | 'async_flow' | 'dom_event';
  errorRate: number;
  sampleBuggyCode: string;
  studentMentalModel: string;
  correctMentalModel: string;
  remedyActivity: string;
  suggestedLiveDemo: string;
}

// ==========================================
// ADAPTIVE LEARNING & DDA ENGINE TYPES (Part G)
// ==========================================

export type AdaptiveTrack = 'accelerated' | 'standard' | 'scaffolding';

export interface PrerequisiteNode {
  id: string;
  code: string;
  title: string;
  module: string;
  depthLevel: number; // 1 = Fundamental, 2 = Intermediate, 3 = Target
  classMasteryRate: number; // 0 - 100%
  status: 'mastered' | 'learning' | 'critical_gap';
  diagnosticQuestion: string;
  remedyExerciseId: string;
  remedySummary: string;
  dependencies: string[]; // IDs of prerequisites that feed into this node
}

export interface PrerequisiteChain {
  id: string;
  targetSkillTitle: string;
  targetSkillCode: string;
  module: string;
  description: string;
  nodes: PrerequisiteNode[];
  rootCauseAnalysis: string;
  pedagogicalPrescription: string;
}

export interface StudentAdaptiveProfile {
  id: string;
  studentId: string;
  studentName: string;
  studentCode: string;
  avatar: string;
  currentTrack: AdaptiveTrack;
  cognitiveLoad: 'low' | 'optimal' | 'overloaded';
  autonomyIndex: number; // 0 - 100% (High = low reliance on Level 4-5 hints)
  scaffoldingLevelFrequency: {
    level1: number; // Gợi ý nhỏ (Hint)
    level2: number; // Socratic
    level3: number; // Kiến thức
    level4: number; // Ví dụ tương tự
    level5: number; // Lời giải mẫu
  };
  recentAttemptsCount: number;
  recentSuccessRate: number; // %
  identifiedGaps: string[];
  nextBestAction: {
    type: 'fast_track_challenge' | 'standard_practice' | 'prerequisite_patch' | 'micro_step_scaffold';
    title: string;
    targetLessonId: string;
    description: string;
    reason: string;
    estimatedMinutes: number;
    recommendedScaffoldingLevel: number;
  };
  lastUpdated: string;
}

export interface AdaptiveSimulationInput {
  score: number; // 0 - 100
  timeSpentMinutes: number;
  attemptsCount: number;
  aiTutorLevelUsed: number; // 1 - 5
  consecutiveSuccesses: number;
  targetTopic: string;
}

export interface AdaptiveSimulationResult {
  newTrack: AdaptiveTrack;
  previousTrack: AdaptiveTrack;
  trackChanged: boolean;
  cognitiveLoad: 'low' | 'optimal' | 'overloaded';
  autonomyIndex: number;
  recommendedScaffoldingLevel: number;
  backwardTraceTriggered: boolean;
  remedyActionTitle: string;
  pedagogicalRationale: string;
}
