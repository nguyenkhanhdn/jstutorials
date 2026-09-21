import React, { useState, useMemo } from 'react';
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
import { AuthProvider, useAuth } from './context/AuthContext';
import { MOCK_STUDENTS } from './data/mockStudentAnalytics';
import { CURRICULUM_MODULES } from './data/curriculumData';
import { getLessonById } from './data/lessonRepository';
import { storageService } from './services/storageService';
import { Bookmark, StudentProfile, SelfAssessmentLevel } from './types';

const ALL_LESSONS = CURRICULUM_MODULES.flatMap(m => m.lessons);

function AppInner() {
  const { userProfile, saveLessonProgress, updateUserProfile } = useAuth();
  const [viewMode, setViewMode] = useState<AppViewMode>('student');
  const [studentSubView, setStudentSubView] = useState<StudentSubView>('dashboard');

  // Fallback local student if context is loading
  const [fallbackStudent, setFallbackStudent] = useState<StudentProfile>(() => {
    return storageService.getStudentProfile(MOCK_STUDENTS[0]);
  });

  const currentStudent = userProfile || fallbackStudent;

  const [bookmarks, setBookmarks] = useState<Bookmark[]>(() => {
    return storageService.getBookmarks();
  });

  // Active Lesson State
  const [currentLessonId, setCurrentLessonId] = useState<string>(() => {
    return storageService.getActiveLessonId() || 'les-2-1';
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

      {/* Main Container */}
      <main className="flex-1 pb-16">
        {viewMode === 'teacher' && <TeacherDashboard />}

        {viewMode === 'docs' && <ArchitectureViewer />}

        {viewMode === 'student' && (
          <>
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
          </>
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
