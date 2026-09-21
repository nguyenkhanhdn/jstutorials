import React, { useState } from 'react';
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
import { MOCK_STUDENTS } from './data/mockStudentAnalytics';
import { SAMPLE_LESSON } from './data/sampleLessonData';
import { Bookmark, StudentProfile } from './types';

export function App() {
  const [viewMode, setViewMode] = useState<AppViewMode>('student');
  const [studentSubView, setStudentSubView] = useState<StudentSubView>('dashboard');

  // Student State
  const [currentStudent, setCurrentStudent] = useState<StudentProfile>(MOCK_STUDENTS[0]);
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([
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
  ]);

  // AI Tutor Modal state
  const [aiTutorOpen, setAiTutorOpen] = useState(false);
  const [aiContextTopic, setAiContextTopic] = useState('Khai báo biến với let và const');
  const [aiStudentCode, setAiStudentCode] = useState('const x = 10;');
  const [aiErrorMessage, setAiErrorMessage] = useState<string | undefined>();
  const [aiExercisePrompt, setAiExercisePrompt] = useState<string | undefined>();

  // Bookmark Modal state
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

  // Knowledge Map state
  const [knowledgeMapOpen, setKnowledgeMapOpen] = useState(false);

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
    setBookmarks(prev => [item, ...prev]);
  };

  const handleToggleResolve = (id: string) => {
    setBookmarks(prev => prev.map(b => b.id === id ? { ...b, isResolved: !b.isResolved } : b));
  };

  const handleRemoveBookmark = (id: string) => {
    setBookmarks(prev => prev.filter(b => b.id !== id));
  };

  // Navigation handlers
  const handleStartLesson = (_lessonId: string) => {
    setStudentSubView('lesson');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLessonCompleted = () => {
    setCurrentStudent(prev => ({
      ...prev,
      completedLessons: Math.min(prev.totalLessons, prev.completedLessons + 1),
      overallProgress: Math.min(100, Math.round(((prev.completedLessons + 1) / prev.totalLessons) * 100)),
      xp: prev.xp + 100
    }));
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      
      {/* Universal Header */}
      <Header
        viewMode={viewMode}
        setViewMode={setViewMode}
        studentSubView={studentSubView}
        setStudentSubView={setStudentSubView}
        onOpenKnowledgeMap={() => setKnowledgeMapOpen(true)}
        bookmarkCount={bookmarks.filter(b => !b.isResolved).length}
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
              />
            )}

            {studentSubView === 'curriculum' && (
              <CurriculumView
                onSelectLesson={handleStartLesson}
              />
            )}

            {studentSubView === 'lesson' && (
              <LessonRunner
                lesson={SAMPLE_LESSON}
                onOpenAITutor={handleOpenAITutor}
                onOpenBookmark={handleOpenBookmarkModal}
                onCompleteLesson={handleLessonCompleted}
                onNextLesson={() => {
                  setStudentSubView('dashboard');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
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
        lessonId="les-2-1"
        lessonTitle={SAMPLE_LESSON.title}
        targetTitle={bookmarkTarget.targetTitle}
        targetType={bookmarkTarget.targetType}
        contentSnippet={bookmarkTarget.snippet}
      />

      <KnowledgeMapModal
        isOpen={knowledgeMapOpen}
        onClose={() => setKnowledgeMapOpen(false)}
        onSelectModule={(_modId) => {
          setStudentSubView('curriculum');
        }}
      />

    </div>
  );
}

export default App;
