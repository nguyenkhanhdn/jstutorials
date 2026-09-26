import React, { useState, useMemo, useEffect } from 'react';
import { Header, AppViewMode, StudentSubView } from './components/Header';
import { StudentDashboard } from './components/student/StudentDashboard';
import { CurriculumView } from './components/student/CurriculumView';
import { LessonRunner } from './components/student/LessonRunner';
import { BookmarkManager } from './components/student/BookmarkManager';
import { ReviewCenter } from './components/student/ReviewCenter';
import { TeacherDashboard } from './components/teacher/TeacherDashboard';
import { ArchitectureViewer } from './components/ArchitectureViewer';
import { AITutorDrawer } from './components/student/AITutorDrawer';
import { BookmarkModal } from './components/student/BookmarkModal';
import { KnowledgeMapModal } from './components/student/KnowledgeMapModal';
import { GamificationHubModal } from './components/student/GamificationHubModal';
import { AuthModal } from './components/auth/AuthModal';
import { UserProfileModal } from './components/auth/UserProfileModal';
import { CurriculumSidebar } from './components/navigation/CurriculumSidebar';
import { AuthProvider, useAuth } from './context/AuthContext';
import { MOCK_STUDENTS } from './data/mockStudentAnalytics';
import { CURRICULUM_MODULES } from './data/curriculumData';
import { getLessonById } from './data/lessonRepository';
import { storageService } from './services/storageService';
import { Bookmark, StudentProfile, SelfAssessmentLevel } from './types';
import { ShieldAlert } from 'lucide-react';

const ALL_LESSONS = CURRICULUM_MODULES.flatMap(m => m.lessons);

function AppInner() {
  const { userProfile, isTeacher, saveLessonProgress, updateUserProfile } = useAuth();
  const [viewMode, setViewMode] = useState<AppViewMode>('student');
  const [studentSubView, setStudentSubView] = useState<StudentSubView>('lesson');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Fallback local student if context is loading
  const [fallbackStudent, setFallbackStudent] = useState<StudentProfile>(() => {
    return storageService.getStudentProfile(MOCK_STUDENTS[0]);
  });

  const currentStudent = userProfile || fallbackStudent;
  const isTeacherUser = currentStudent.role === 'teacher' || currentStudent.role === 'admin' || isTeacher;

  // Auto-protect: Students cannot access or stay in teacher view mode
  useEffect(() => {
    if (!isTeacherUser && viewMode === 'teacher') {
      setViewMode('student');
    }
  }, [isTeacherUser, viewMode]);

  const [bookmarks, setBookmarks] = useState<Bookmark[]>(() => {
    return storageService.getBookmarks();
  });

  // Active Lesson State - default to HTML Lesson 1
  const [currentLessonId, setCurrentLessonId] = useState<string>(() => {
    return storageService.getActiveLessonId() || 'les-html-1';
  });

  const currentLesson = useMemo(() => {
    return getLessonById(currentLessonId);
  }, [currentLessonId]);

  const currentLessonIndex = useMemo(() => {
    return ALL_LESSONS.findIndex(l => l.id === currentLessonId);
  }, [currentLessonId]);

  // Modals state
  const [aiTutorOpen, setAiTutorOpen] = useState(false);
  const [aiContextTopic, setAiContextTopic] = useState('Khai báo biến với let và const');
  const [aiStudentCode, setAiStudentCode] = useState('const x = 10;');
  const [aiErrorMessage, setAiErrorMessage] = useState<string | undefined>();
  const [aiExercisePrompt, setAiExercisePrompt] = useState<string | undefined>();

  const [bookmarkModalOpen, setBookmarkModalOpen] = useState(false);
  const [bookmarkTarget, setBookmarkTarget] = useState<{
    targetTitle: string;
    targetType: any;
    snippet: string;
  }>({
    targetTitle: '',
    targetType: 'concept',
    snippet: ''
  });

  const [knowledgeMapOpen, setKnowledgeMapOpen] = useState(false);
  const [gamificationModalOpen, setGamificationModalOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  // Handlers for AI Tutor
  const handleOpenAITutor = (topic: string, code: string, error?: string, prompt?: string) => {
    setAiContextTopic(topic);
    setAiStudentCode(code);
    setAiErrorMessage(error);
    setAiExercisePrompt(prompt);
    setAiTutorOpen(true);
  };

  // Handlers for Bookmark
  const handleOpenBookmarkModal = (targetTitle: string, targetType: any, snippet: string) => {
    setBookmarkTarget({ targetTitle, targetType, snippet });
    setBookmarkModalOpen(true);
  };

  const handleSaveBookmark = (newBm: Omit<Bookmark, 'id' | 'createdAt' | 'isResolved'>) => {
    const item: Bookmark = {
      ...newBm,
      id: `bm-${Date.now()}`,
      createdAt: new Date().toISOString(),
      isResolved: false
    };
    storageService.addBookmark(item);
    setBookmarks(prev => [item, ...prev]);
  };

  const handleToggleResolve = (id: string) => {
    setBookmarks(prev => {
      const updated = prev.map(b => b.id === id ? { ...b, isResolved: !b.isResolved } : b);
      storageService.saveBookmarks(updated);
      return updated;
    });
  };

  const handleRemoveBookmark = (id: string) => {
    setBookmarks(prev => {
      const updated = prev.filter(b => b.id !== id);
      storageService.saveBookmarks(updated);
      return updated;
    });
  };

  // Navigation handlers
  const handleStartLesson = (lessonId: string) => {
    setCurrentLessonId(lessonId);
    storageService.saveActiveLessonId(lessonId);
    setStudentSubView('lesson');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextLesson = () => {
    if (currentLessonIndex >= 0 && currentLessonIndex < ALL_LESSONS.length - 1) {
      const nextLessonId = ALL_LESSONS[currentLessonIndex + 1].id;
      handleStartLesson(nextLessonId);
    } else {
      setStudentSubView('curriculum');
    }
  };

  const handlePrevLesson = () => {
    if (currentLessonIndex > 0) {
      const prevLessonId = ALL_LESSONS[currentLessonIndex - 1].id;
      handleStartLesson(prevLessonId);
    }
  };

  const handleLessonCompleted = (level?: SelfAssessmentLevel) => {
    if (level) {
      storageService.saveSelfAssessment(currentLessonId, level);
    }
    storageService.markLessonCompleted(currentLessonId);

    const completedList = storageService.getCompletedLessonIds();
    const count = completedList.length;

    // Sync to Cloud Firestore if signed in
    saveLessonProgress(currentLessonId, {
      status: 'completed',
      completionPercentage: 100,
      confidenceLevel: level
    });

    const updatedProfile: StudentProfile = {
      ...currentStudent,
      completedLessons: Math.min(currentStudent.totalLessons || 16, Math.max(currentStudent.completedLessons || 0, count)),
      overallProgress: Math.min(100, Math.round((Math.max(currentStudent.completedLessons || 0, count) / (currentStudent.totalLessons || 16)) * 100)),
      xp: (currentStudent.xp || 0) + 100
    };

    updateUserProfile(updatedProfile);
    setFallbackStudent(updatedProfile);
    storageService.saveStudentProfile(updatedProfile);
  };

  const handleClaimQuestReward = (xpEarned: number) => {
    const updated = {
      ...currentStudent,
      xp: (currentStudent.xp || 0) + xpEarned
    };
    updateUserProfile(updated);
    setFallbackStudent(updated);
    storageService.saveStudentProfile(updated);
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      
      {/* Universal Header with Auth & Profile */}
      <Header
        viewMode={viewMode}
        setViewMode={setViewMode}
        studentSubView={studentSubView}
        setStudentSubView={setStudentSubView}
        onOpenKnowledgeMap={() => setKnowledgeMapOpen(true)}
        bookmarkCount={bookmarks.filter(b => !b.isResolved).length}
        studentProfile={currentStudent}
        onOpenGamification={() => setGamificationModalOpen(true)}
        onOpenAuth={() => setAuthModalOpen(true)}
        onOpenProfile={() => setProfileModalOpen(true)}
      />

      {/* Main Container with 2-Column Architecture */}
      <main className="flex-1 flex flex-col">
        {viewMode === 'teacher' && isTeacherUser && (
          <div className="pb-16">
            <TeacherDashboard />
          </div>
        )}

        {viewMode === 'teacher' && !isTeacherUser && (
          <div className="max-w-md mx-auto my-16 p-8 bg-white rounded-3xl border border-rose-200 shadow-xl text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-200">
              <ShieldAlert className="w-7 h-7" />
            </div>
            <h2 className="text-lg font-black text-slate-900">Khu vực dành riêng cho Giảng viên</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Bạn đang đăng nhập với vai trò <strong>Sinh viên</strong> ({currentStudent.fullName}). Theo quy định hệ thống, học sinh không được nhìn thấy các công cụ quản lý lớp học và chẩn đoán của giảng viên.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-2 pt-2">
              <button
                onClick={() => setViewMode('student')}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer"
              >
                Quay lại Góc Sinh viên
              </button>
              <button
                onClick={() => setAuthModalOpen(true)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold cursor-pointer"
              >
                Đăng nhập Giảng viên
              </button>
            </div>
          </div>
        )}

        {viewMode === 'docs' && (
          <div className="pb-16">
            <ArchitectureViewer />
          </div>
        )}

        {viewMode === 'student' && (
          <div className="flex flex-1 relative">
            {/* Left Column: 3 Major Tracks (1. HTML, 2. CSS, 3. JavaScript) */}
            <CurriculumSidebar
              currentLessonId={currentLessonId}
              onSelectLesson={handleStartLesson}
              completedLessonIds={new Set(storageService.getCompletedLessonIds())}
              isOpen={sidebarOpen}
              onToggleOpen={() => setSidebarOpen(prev => !prev)}
            />

            {/* Right Column: Main Interactive Workspace */}
            <div className="flex-1 min-w-0 pb-16 overflow-x-hidden">
              {studentSubView === 'dashboard' && (
                <StudentDashboard
                  student={currentStudent}
                  bookmarks={bookmarks}
                  onStartLesson={handleStartLesson}
                  onNavigateTab={(tab) => setStudentSubView(tab)}
                  onOpenKnowledgeMap={() => setKnowledgeMapOpen(true)}
                  onOpenGamification={() => setGamificationModalOpen(true)}
                  onOpenProfile={() => setProfileModalOpen(true)}
                  onOpenAuth={() => setAuthModalOpen(true)}
                />
              )}

              {studentSubView === 'curriculum' && (
                <CurriculumView
                  onSelectLesson={handleStartLesson}
                />
              )}

              {studentSubView === 'lesson' && (
                <LessonRunner
                  lesson={currentLesson}
                  onOpenAITutor={handleOpenAITutor}
                  onOpenBookmark={handleOpenBookmarkModal}
                  onCompleteLesson={handleLessonCompleted}
                  onNextLesson={handleNextLesson}
                  onPrevLesson={currentLessonIndex > 0 ? handlePrevLesson : undefined}
                  onBackToCurriculum={() => setStudentSubView('curriculum')}
                  onSelectLesson={handleStartLesson}
                />
              )}

              {studentSubView === 'review' && (
                <ReviewCenter
                  onOpenAITutor={handleOpenAITutor}
                  onJumpToLesson={handleStartLesson}
                />
              )}

              {studentSubView === 'bookmarks' && (
                <BookmarkManager
                  bookmarks={bookmarks}
                  onToggleResolve={handleToggleResolve}
                  onRemoveBookmark={handleRemoveBookmark}
                  onJumpToLesson={handleStartLesson}
                />
              )}
            </div>
          </div>
        )}
      </main>

      {/* Modals & Drawers */}
      <AITutorDrawer
        isOpen={aiTutorOpen}
        onClose={() => setAiTutorOpen(false)}
        contextTopic={aiContextTopic}
        studentCode={aiStudentCode}
        errorMessage={aiErrorMessage}
        exercisePrompt={aiExercisePrompt}
      />

      <BookmarkModal
        isOpen={bookmarkModalOpen}
        onClose={() => setBookmarkModalOpen(false)}
        onSave={handleSaveBookmark}
        lessonId={currentLesson.id}
        lessonTitle={currentLesson.title}
        targetTitle={bookmarkTarget.targetTitle}
        targetType={bookmarkTarget.targetType}
        contentSnippet={bookmarkTarget.snippet}
      />

      <KnowledgeMapModal
        isOpen={knowledgeMapOpen}
        onClose={() => setKnowledgeMapOpen(false)}
        onSelectModule={(modId) => {
          setStudentSubView('curriculum');
          const mod = CURRICULUM_MODULES.find(m => m.id === modId);
          if (mod && mod.lessons.length > 0) {
            handleStartLesson(mod.lessons[0].id);
          }
        }}
      />

      <GamificationHubModal
        isOpen={gamificationModalOpen}
        onClose={() => setGamificationModalOpen(false)}
        student={currentStudent}
        onClaimQuestReward={handleClaimQuestReward}
      />

      {/* Authentication & Profile Modals */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />

      <UserProfileModal
        isOpen={profileModalOpen}
        onClose={() => setProfileModalOpen(false)}
        onNavigateToTeacher={() => {
          setViewMode('teacher');
          setProfileModalOpen(false);
        }}
      />

    </div>
  );
}

export function App() {
  return (
    <AuthProvider>
      <AppInner />
    </AuthProvider>
  );
}

export default App;
