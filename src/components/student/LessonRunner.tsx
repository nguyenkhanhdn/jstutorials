import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  HelpCircle, 
  Terminal, 
  CheckCircle2, 
  Award, 
  Bookmark as BookmarkIcon, 
  Bot, 
  ArrowRight, 
  ArrowLeft,
  AlertTriangle, 
  ChevronRight,
  ChevronDown,
  Star,
  Check,
  RotateCcw,
  Sparkles,
  Info,
  ListFilter
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Lesson, Question, SelfAssessmentLevel } from '../../types';
import { CodeSandbox } from './CodeSandbox';
import { evaluateTestCases, TestResult } from '../../services/codeRunner';
import { CURRICULUM_MODULES } from '../../data/curriculumData';

interface LessonRunnerProps {
  lesson: Lesson;
  onOpenAITutor: (topic: string, code: string, error?: string, prompt?: string) => void;
  onOpenBookmark: (targetTitle: string, targetType: any, snippet: string) => void;
  onCompleteLesson: (level?: SelfAssessmentLevel) => void;
  onNextLesson?: () => void;
  onPrevLesson?: () => void;
  onBackToCurriculum?: () => void;
  onSelectLesson?: (lessonId: string) => void;
}

export const LessonRunner: React.FC<LessonRunnerProps> = ({
  lesson,
  onOpenAITutor,
  onOpenBookmark,
  onCompleteLesson,
  onNextLesson,
  onPrevLesson,
  onBackToCurriculum,
  onSelectLesson
}) => {
  type TabType = 'theory' | 'predict' | 'practice' | 'exercises' | 'quiz' | 'self_assess';
  const [activeTab, setActiveTab] = useState<TabType>('theory');
  const [showLessonSelector, setShowLessonSelector] = useState(false);

  // Predict Output states
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [checkedAnswers, setCheckedAnswers] = useState<Record<string, boolean>>({});

  // Exercises states
  const [activeExLevel, setActiveExLevel] = useState<'basic' | 'intermediate' | 'challenge'>('basic');
  const [exerciseCodes, setExerciseCodes] = useState<Record<string, string>>({
    basic: lesson.exercises.basic.starterCode,
    intermediate: lesson.exercises.intermediate.starterCode,
    challenge: lesson.exercises.challenge.starterCode,
  });
  const [exerciseResults, setExerciseResults] = useState<Record<string, { allPassed: boolean; testResults: TestResult[] } | null>>({
    basic: null,
    intermediate: null,
    challenge: null
  });
  const [isEvaluating, setIsEvaluating] = useState(false);

  // Quiz states
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string | string[]>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);

  // Self assessment
  const [selfRating, setSelfRating] = useState<SelfAssessmentLevel | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  // Reset state when lesson changes
  useEffect(() => {
    setActiveTab('theory');
    setSelectedAnswers({});
    setCheckedAnswers({});
    setActiveExLevel('basic');
    setExerciseCodes({
      basic: lesson.exercises.basic.starterCode,
      intermediate: lesson.exercises.intermediate.starterCode,
      challenge: lesson.exercises.challenge.starterCode,
    });
    setExerciseResults({
      basic: null,
      intermediate: null,
      challenge: null
    });
    setQuizAnswers({});
    setQuizSubmitted(false);
    setQuizScore(null);
    setSelfRating(null);
    setIsCompleted(false);
    setShowLessonSelector(false);
  }, [lesson.id]);

  const currentExercise = lesson.exercises[activeExLevel];
  const currentModule = CURRICULUM_MODULES.find(m => m.id === lesson.moduleId) || CURRICULUM_MODULES[0];

  // Handle Predict Output Selection
  const handleSelectPredict = (itemId: string, option: string) => {
    setSelectedAnswers(prev => ({ ...prev, [itemId]: option }));
  };

  const handleCheckPredict = (itemId: string) => {
    setCheckedAnswers(prev => ({ ...prev, [itemId]: true }));
  };

  // Run Test Cases for current exercise
  const handleRunExerciseTests = async () => {
    setIsEvaluating(true);
    const code = exerciseCodes[activeExLevel];
    const results = await evaluateTestCases(code, currentExercise.testCases, lesson.language || currentExercise.language);
    setExerciseResults(prev => ({ ...prev, [activeExLevel]: results }));
    setIsEvaluating(false);

    if (results.allPassed) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    }
  };

  // Submit Quiz
  const handleSubmitQuiz = () => {
    let correctCount = 0;
    lesson.quiz.questions.forEach(q => {
      const studentAns = quizAnswers[q.id];
      if (Array.isArray(q.correctAnswer)) {
        if (Array.isArray(studentAns) && 
            studentAns.length === q.correctAnswer.length &&
            studentAns.every(val => (q.correctAnswer as string[]).includes(val))) {
          correctCount++;
        }
      } else {
        if (studentAns === q.correctAnswer) {
          correctCount++;
        }
      }
    });

    const scorePct = Math.round((correctCount / lesson.quiz.questions.length) * 100);
    setQuizScore(scorePct);
    setQuizSubmitted(true);

    if (scorePct >= lesson.quiz.passingScore) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleSaveSelfAssessment = (level: SelfAssessmentLevel) => {
    setSelfRating(level);
    setIsCompleted(true);
    onCompleteLesson(level);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
      
      {/* Top Navigation Breadcrumbs & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs">
        <div className="flex items-center gap-2 text-xs">
          {onBackToCurriculum && (
            <button
              onClick={onBackToCurriculum}
              className="px-2.5 py-1.5 rounded-lg text-slate-600 hover:text-slate-950 hover:bg-slate-100 font-bold flex items-center gap-1 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Chương trình</span>
            </button>
          )}
          <span className="text-slate-300">/</span>
          <span className="font-semibold text-slate-600">
            Module {currentModule.number}: {currentModule.title}
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs">
          {onPrevLesson && (
            <button
              onClick={onPrevLesson}
              className="px-3 py-1.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold flex items-center gap-1 transition-colors active:scale-95"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Bài trước</span>
            </button>
          )}

          {onSelectLesson && (
            <div className="relative">
              <button
                onClick={() => setShowLessonSelector(!showLessonSelector)}
                className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-800 font-bold flex items-center gap-1.5 transition-colors"
              >
                <ListFilter className="w-3.5 h-3.5 text-indigo-600" />
                <span>Chọn bài học</span>
                <ChevronDown className="w-3 h-3 text-slate-500" />
              </button>

              {showLessonSelector && (
                <div className="absolute right-0 mt-2 w-80 max-h-96 overflow-y-auto bg-white rounded-2xl border border-slate-200 shadow-xl z-50 p-2 space-y-2">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 py-1">
                    Danh mục bài học toàn khóa (17 Modules)
                  </div>
                  {CURRICULUM_MODULES.map(mod => (
                    <div key={mod.id} className="space-y-1">
                      <div className="text-xs font-black text-slate-700 px-2 pt-1 border-t border-slate-100">
                        M{mod.number}. {mod.title}
                      </div>
                      {mod.lessons.map(l => (
                        <button
                          key={l.id}
                          onClick={() => {
                            setShowLessonSelector(false);
                            onSelectLesson(l.id);
                          }}
                          className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center justify-between transition-colors ${
                            l.id === lesson.id
                              ? 'bg-indigo-50 font-bold text-indigo-700'
                              : 'text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          <span className="truncate pr-2">{l.title}</span>
                          <span className="text-xs text-slate-400 shrink-0">{l.durationMinutes}p</span>
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {onNextLesson && (
            <button
              onClick={onNextLesson}
              className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold flex items-center gap-1 transition-colors active:scale-95 shadow-xs"
            >
              <span>Bài tiếp theo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Lesson Header Banner */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className={`px-2.5 py-0.5 rounded-md text-xs font-bold border ${
                lesson.track === 'html' ? 'bg-orange-100 text-orange-900 border-orange-200' :
                lesson.track === 'css' ? 'bg-blue-100 text-blue-900 border-blue-200' :
                'bg-amber-100 text-amber-900 border-amber-200'
              }`}>
                {lesson.track === 'html' ? `HTML Chuyên đề ${currentModule.number} • ${currentModule.title}` :
                 lesson.track === 'css' ? `CSS Chuyên đề ${currentModule.number} • ${currentModule.title}` :
                 `Module ${currentModule.number} • ${currentModule.title}`}
              </span>
              <span className="px-2 py-0.5 rounded-md text-xs font-semibold bg-slate-100 text-slate-700">
                Thời lượng: {lesson.durationMinutes} phút
              </span>
              <span className="px-2 py-0.5 rounded-md text-xs font-semibold bg-emerald-100 text-emerald-800">
                Mức độ: {lesson.difficulty}
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              {lesson.title}
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenBookmark(lesson.title, 'concept', 'Toàn bộ bài học ' + lesson.title)}
              className="px-3 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 rounded-xl transition-all flex items-center gap-1.5 border border-slate-200"
              title="Đánh dấu bài học này để ôn tập"
            >
              <BookmarkIcon className="w-4 h-4 text-amber-500 fill-amber-500/20" />
              <span>Bookmark bài</span>
            </button>
            <button
              onClick={() => onOpenAITutor(lesson.title, '// Code tham khảo bài học ' + lesson.title, undefined, 'Hãy tóm tắt ngắn gọn các khái niệm chính')}
              className="px-3.5 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-xs transition-all flex items-center gap-1.5"
            >
              <Bot className="w-4 h-4" />
              <span>Hỏi AI Tutor</span>
            </button>
          </div>
        </div>

        {/* Prerequisites & Measurable Objectives */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-4 text-xs">
          <div className="md:col-span-4 bg-slate-50 p-3 rounded-xl border border-slate-200">
            <span className="font-bold text-slate-700 uppercase tracking-wider block mb-1">
              Kiến thức tiên quyết:
            </span>
            <ul className="list-disc list-inside text-slate-600 space-y-1">
              {lesson.prerequisites.map((p, idx) => (
                <li key={idx} className="leading-snug">{p}</li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-8 bg-indigo-50/50 p-3 rounded-xl border border-indigo-100">
            <span className="font-bold text-indigo-900 uppercase tracking-wider block mb-1">
              Chuẩn đầu ra đo lường được (Measurable Learning Objectives):
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
              {lesson.learningObjectives.map(lo => (
                <div key={lo.id} className="flex items-start gap-1.5 bg-white p-2 rounded-lg border border-indigo-100 shadow-xs">
                  <span className="font-mono font-bold text-indigo-700 shrink-0 text-xs px-1.5 py-0.5 bg-indigo-50 rounded">
                    {lo.code}
                  </span>
                  <span className="text-xs leading-normal text-slate-800">{lo.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Primary Pedagogy Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-slate-200">
        {[
          { key: 'theory', label: '1. Khái niệm & Ví dụ', icon: BookOpen },
          { key: 'predict', label: '2. Dự đoán kết quả', icon: HelpCircle },
          { key: 'practice', label: '3. Thực hành Console', icon: Terminal },
          { key: 'exercises', label: '4. Bài tập phân cấp (L1-L3)', icon: Award },
          { key: 'quiz', label: '5. Bài kiểm tra Quiz (10 câu)', icon: CheckCircle2 },
          { key: 'self_assess', label: '6. Tự đánh giá năng lực', icon: Star },
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as TabType)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap flex items-center gap-2 transition-all ${
                isActive
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-500'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab 1: Microlearning Theory & Code */}
      {activeTab === 'theory' && (
        <div className="space-y-6 animate-in fade-in duration-150">
          {lesson.sections.map((section, sIdx) => (
            <div key={section.id} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center">
                    {sIdx + 1}
                  </span>
                  {section.title}
                </h2>
                <button
                  onClick={() => onOpenBookmark(section.title, 'concept', section.explanation)}
                  className="text-xs font-semibold text-slate-600 hover:text-amber-700 flex items-center gap-1 hover:bg-slate-100 px-2 py-1 rounded-lg"
                >
                  <BookmarkIcon className="w-3.5 h-3.5" />
                  <span>Bookmark mục này</span>
                </button>
              </div>

              {/* Simple explanation */}
              <p className="text-sm text-slate-700 leading-relaxed">
                {section.explanation}
              </p>

              {/* Syntax block */}
              {section.syntax && (
                <div className="bg-slate-900 text-amber-300 p-3.5 rounded-xl font-mono text-xs border border-slate-800">
                  <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-sans font-bold">
                    Cú pháp chuẩn:
                  </div>
                  <pre className="whitespace-pre-wrap">{section.syntax}</pre>
                </div>
              )}

              {/* Interactive Code Example */}
              <div>
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                  <span>Ví dụ minh họa & Chạy thử:</span>
                  <span className="text-slate-500 text-xs font-normal">Bạn có thể sửa code và chạy trực tiếp</span>
                </div>
                <CodeSandbox
                  initialCode={section.codeExample}
                  title={`Ví dụ mục ${sIdx + 1}: ${section.conceptName}`}
                  onOpenAITutor={(code, err) => onOpenAITutor(section.conceptName, code, err, 'Hãy giải thích ví dụ này cho tôi')}
                />
              </div>

              {/* Line-by-line breakdown */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2">
                  Giải thích từng dòng code:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {section.lineByLineExplanation.map((line, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5" />
                      <span>{line.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Common mistakes & When to use */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="bg-rose-50/60 p-4 rounded-xl border border-rose-200">
                  <div className="flex items-center gap-1.5 text-rose-800 font-bold uppercase tracking-wider mb-2">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Lỗi thường gặp của sinh viên:</span>
                  </div>
                  <ul className="list-disc list-inside text-rose-900 space-y-1">
                    {section.commonMistakes.map((m, mIdx) => (
                      <li key={mIdx} className="leading-snug">{m}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-emerald-50/60 p-4 rounded-xl border border-emerald-200">
                  <div className="flex items-center gap-1.5 text-emerald-800 font-bold uppercase tracking-wider mb-2">
                    <Check className="w-4 h-4" />
                    <span>Khi nào nên / không nên sử dụng:</span>
                  </div>
                  <p className="text-emerald-950 mb-1.5"><strong>Nên dùng:</strong> {section.whenToUse}</p>
                  <p className="text-emerald-950"><strong>Tránh dùng:</strong> {section.whenNotToUse}</p>
                </div>
              </div>

              {/* Real-world use case */}
              <div className="bg-amber-50/50 p-3 rounded-xl border border-amber-200/80 flex items-start gap-2.5 text-xs">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-amber-900">Ứng dụng thực tế trong dự án Web: </strong>
                  <span className="text-amber-950">{section.realWorldUseCase}</span>
                </div>
              </div>

            </div>
          ))}

          {/* Quick Continue Button */}
          <div className="flex justify-end">
            <button
              onClick={() => setActiveTab('predict')}
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-md transition-all"
            >
              <span>Tiếp tục: Dự đoán kết quả</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Tab 2: Predict the Output */}
      {activeTab === 'predict' && (
        <div className="space-y-6 animate-in fade-in duration-150">
          <div className="bg-indigo-50/70 border border-indigo-100 rounded-2xl p-4 flex items-start gap-3 text-xs text-indigo-950">
            <Info className="w-5 h-5 text-indigo-700 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold text-sm block mb-0.5">Phương pháp sư phạm: Retrieval Practice</strong>
              Trước khi chạy code, hãy rèn luyện tư duy đọc hiểu logic bằng cách dự đoán kết quả in ra của máy tính. Không vội xem đáp án, hãy suy luận từng dòng lệnh!
            </div>
          </div>

          <div className="space-y-4">
            {lesson.predictOutputs.map((item, idx) => {
              const isChecked = checkedAnswers[item.id];
              const selected = selectedAnswers[item.id];
              const isCorrect = selected === item.correctAnswer;

              return (
                <div key={item.id} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                      Câu hỏi dự đoán #{idx + 1}
                    </span>
                    <button
                      onClick={() => onOpenBookmark(`Predict Output #${idx + 1}`, 'question', item.code)}
                      className="text-xs text-slate-600 hover:text-amber-700 flex items-center gap-1"
                    >
                      <BookmarkIcon className="w-3.5 h-3.5" />
                      <span>Bookmark câu này</span>
                    </button>
                  </div>

                  {/* Code snippet */}
                  <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs border border-slate-800 overflow-x-auto">
                    <pre>{item.code}</pre>
                  </div>

                  <p className="text-sm font-semibold text-slate-900">
                    {item.question}
                  </p>

                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {item.options.map((opt, oIdx) => {
                      const isOptionSelected = selected === opt;
                      return (
                        <button
                          key={oIdx}
                          disabled={isChecked}
                          onClick={() => handleSelectPredict(item.id, opt)}
                          className={`p-3 rounded-xl border text-xs font-mono text-left transition-all ${
                            isOptionSelected
                              ? 'border-indigo-600 bg-indigo-50 font-bold text-indigo-900 ring-2 ring-indigo-600/20'
                              : 'border-slate-200 bg-slate-50 hover:bg-white text-slate-800'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {/* Check action */}
                  {!isChecked ? (
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs text-slate-500 italic">💡 Gợi ý: {item.hint}</span>
                      <button
                        disabled={!selected}
                        onClick={() => handleCheckPredict(item.id)}
                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-xl text-xs font-bold transition-all shadow-xs"
                      >
                        Kiểm tra kết quả
                      </button>
                    </div>
                  ) : (
                    <div className={`p-4 rounded-xl border text-xs leading-relaxed animate-in fade-in duration-150 ${
                      isCorrect ? 'bg-emerald-50 border-emerald-200 text-emerald-950' : 'bg-rose-50 border-rose-200 text-rose-950'
                    }`}>
                      <div className="flex items-center gap-2 font-bold mb-1.5">
                        {isCorrect ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            <span className="text-emerald-800">Chính xác tuyệt đối!</span>
                          </>
                        ) : (
                          <>
                            <AlertTriangle className="w-4 h-4 text-rose-600" />
                            <span className="text-rose-800">Chưa chính xác. Đáp án đúng là: {item.correctAnswer}</span>
                          </>
                        )}
                      </div>
                      <p><strong>Giải thích chi tiết:</strong> {item.explanation}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex justify-between items-center pt-2">
            <button
              onClick={() => setActiveTab('theory')}
              className="px-4 py-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-semibold flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Xem lại lý thuyết</span>
            </button>
            <button
              onClick={() => setActiveTab('practice')}
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-md transition-all"
            >
              <span>Tiếp tục: Thực hành Console</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Tab 3: Interactive Practice */}
      {activeTab === 'practice' && (
        <div className="space-y-6 animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <h2 className="text-lg font-bold text-slate-900">{lesson.interactivePractice.title}</h2>
                <p className="text-xs text-slate-500 mt-0.5">Thực hành giải quyết bài toán nhỏ và quan sát đầu ra</p>
              </div>
              <button
                onClick={() => onOpenAITutor(lesson.interactivePractice.title, lesson.interactivePractice.starterCode, undefined, 'Gợi ý bài thực hành')}
                className="px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 rounded-lg text-xs font-semibold flex items-center gap-1.5"
              >
                <Bot className="w-3.5 h-3.5" />
                <span>Gợi ý từ AI Tutor</span>
              </button>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-700 whitespace-pre-line leading-relaxed font-sans">
              {lesson.interactivePractice.description}
            </div>

            <CodeSandbox
              initialCode={lesson.interactivePractice.starterCode}
              expectedOutput={lesson.interactivePractice.expectedConsoleOutput}
              title={lesson.interactivePractice.title}
              language={lesson.language || lesson.interactivePractice.language || 'javascript'}
              description={lesson.language === 'html' ? "Chỉnh sửa mã HTML và bấm 'Render & Kiểm tra' để xem kết quả trực quan ngay lập tức." : "Chỉnh sửa mã nguồn và bấm 'Chạy Code' để đối chiếu với kết quả kỳ vọng."}
              onOpenAITutor={(code, err) => onOpenAITutor(lesson.interactivePractice.title, code, err, 'Hãy giúp tôi hoàn thành bài thực hành này')}
              onSuccess={() => {
                confetti({ particleCount: 60, spread: 60, origin: { y: 0.7 } });
              }}
            />

            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/80 text-xs text-amber-900">
              💡 <strong>Gợi ý sư phạm:</strong> {lesson.interactivePractice.hint}
            </div>
          </div>

          <div className="flex justify-between items-center pt-2">
            <button
              onClick={() => setActiveTab('predict')}
              className="px-4 py-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-semibold flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Dự đoán kết quả</span>
            </button>
            <button
              onClick={() => setActiveTab('exercises')}
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-md transition-all"
            >
              <span>Tiếp tục: Bài tập phân cấp L1-L3</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Tab 4: Exercises L1 - L2 - L3 */}
      {activeTab === 'exercises' && (
        <div className="space-y-6 animate-in fade-in duration-150">
          {/* Level Switcher */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { key: 'basic', label: 'Level 1 – Basic', sub: 'Áp dụng trực tiếp', badge: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
              { key: 'intermediate', label: 'Level 2 – Intermediate', sub: 'Kết hợp 2-3 kiến thức', badge: 'bg-amber-100 text-amber-800 border-amber-200' },
              { key: 'challenge', label: 'Level 3 – Challenge', sub: 'Vận dụng thực tế mini', badge: 'bg-indigo-100 text-indigo-800 border-indigo-200' },
            ].map(lvl => (
              <button
                key={lvl.key}
                onClick={() => setActiveExLevel(lvl.key as any)}
                className={`p-3 rounded-2xl border text-left transition-all ${
                  activeExLevel === lvl.key
                    ? 'bg-white border-slate-900 ring-2 ring-slate-900/10 shadow-md'
                    : 'bg-slate-50/70 border-slate-200 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full border ${lvl.badge}`}>
                    {lvl.label.split('–')[1]}
                  </span>
                  {exerciseResults[lvl.key]?.allPassed && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  )}
                </div>
                <div className="text-xs font-bold text-slate-900 truncate">{lvl.label}</div>
                <div className="text-[11px] text-slate-500 truncate">{lvl.sub}</div>
              </button>
            ))}
          </div>

          {/* Current Exercise Detail */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <div>
                <h3 className="font-bold text-slate-900 text-base">{currentExercise.title}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-slate-500">Chuẩn đầu ra:</span>
                  {currentExercise.learningObjectiveIds.map(lo => (
                    <span key={lo} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold">
                      {lo}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenAITutor(currentExercise.title, exerciseCodes[activeExLevel], undefined, currentExercise.description)}
                className="px-3.5 py-2 text-xs font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 rounded-xl flex items-center gap-1.5 transition-colors"
              >
                <Bot className="w-4 h-4" />
                <span>Nhận gợi ý AI Tutor (L1-L5)</span>
              </button>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-700 whitespace-pre-line leading-relaxed">
              {currentExercise.description}
            </div>

            {/* Editor Area */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Trình soạn thảo mã nguồn:
                </span>
                <span className="text-[11px] text-slate-500">Viết code và bấm "Chạy kiểm thử" bên dưới</span>
              </div>
              <CodeSandbox
                initialCode={exerciseCodes[activeExLevel]}
                title={`Bài tập ${activeExLevel.toUpperCase()}: ${currentExercise.title}`}
                language={lesson.language || currentExercise.language || 'javascript'}
                onOpenAITutor={(c, err) => onOpenAITutor(currentExercise.title, c, err, currentExercise.description)}
              />
            </div>

            {/* Test Case Evaluation Section */}
            <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-500">
                Bộ kiểm thử tự động (Unit Test Cases): <strong>{currentExercise.testCases.length} ca kiểm thử</strong>
              </div>
              <button
                onClick={handleRunExerciseTests}
                disabled={isEvaluating}
                className="w-full sm:w-auto px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <Award className="w-4 h-4" />
                <span>{isEvaluating ? 'Đang chấm điểm...' : 'Chạy kiểm thử tự động'}</span>
              </button>
            </div>

            {/* Test Results Output */}
            {exerciseResults[activeExLevel] && (
              <div className={`p-4 rounded-xl border text-xs space-y-2 animate-in fade-in duration-150 ${
                exerciseResults[activeExLevel]!.allPassed
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                  : 'bg-amber-50 border-amber-200 text-amber-950'
              }`}>
                <div className="flex items-center gap-2 font-bold text-sm">
                  {exerciseResults[activeExLevel]!.allPassed ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      <span>Tuyệt vời! Bạn đã vượt qua 100% test cases của bài này!</span>
                    </>
                  ) : (
                    <>
                      <AlertTriangle className="w-5 h-5 text-amber-600" />
                      <span>Một số ca kiểm thử chưa đạt. Hãy xem chi tiết bên dưới:</span>
                    </>
                  )}
                </div>

                <div className="space-y-1.5 pt-2">
                  {exerciseResults[activeExLevel]!.testResults.map((tr, idx) => (
                    <div key={idx} className="p-2.5 bg-white rounded-lg border border-slate-200 font-mono text-[11px] flex flex-col gap-1">
                      <div className="flex items-center justify-between font-sans">
                        <span className="font-semibold text-slate-800">{tr.description}</span>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          tr.passed ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                        }`}>
                          {tr.passed ? 'PASSED' : 'FAILED'}
                        </span>
                      </div>
                      <div className="text-slate-500">
                        Kỳ vọng: <span className="text-slate-800">{tr.expectedOutput}</span>
                      </div>
                      <div className="text-slate-500">
                        Thực tế: <span className={tr.passed ? 'text-emerald-700' : 'text-rose-700'}>{tr.actualOutput}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-between items-center pt-2">
            <button
              onClick={() => setActiveTab('practice')}
              className="px-4 py-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-semibold flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Thực hành Console</span>
            </button>
            <button
              onClick={() => setActiveTab('quiz')}
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-md transition-all"
            >
              <span>Tiếp tục: Bài kiểm tra Quiz (10 câu)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Tab 5: Lesson Quiz */}
      {activeTab === 'quiz' && (
        <div className="space-y-6 animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <h3 className="font-bold text-slate-900 text-lg">{lesson.quiz.title}</h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  10 câu hỏi đa định dạng • Điểm chuẩn đạt: {lesson.quiz.passingScore}% • Kiểm tra năng lực thực hành
                </p>
              </div>

              {quizScore !== null && (
                <div className={`px-4 py-2 rounded-xl text-sm font-bold border flex items-center gap-2 ${
                  quizScore >= lesson.quiz.passingScore
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                    : 'bg-rose-50 border-rose-300 text-rose-800'
                }`}>
                  <span>Kết quả: {quizScore}/100</span>
                  <span>({quizScore >= lesson.quiz.passingScore ? 'ĐẠT CHUẨN' : 'CHƯA ĐẠT'})</span>
                </div>
              )}
            </div>

            {/* Questions List */}
            <div className="space-y-6 pt-6">
              {lesson.quiz.questions.map((q, idx) => {
                const isChecked = quizSubmitted;
                const studentAns = quizAnswers[q.id];
                const isCorrect = Array.isArray(q.correctAnswer)
                  ? (Array.isArray(studentAns) && studentAns.length === q.correctAnswer.length && studentAns.every(v => (q.correctAnswer as string[]).includes(v)))
                  : (studentAns === q.correctAnswer);

                return (
                  <div key={q.id} className="p-5 rounded-2xl border border-slate-200 bg-slate-50/40 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-md bg-slate-900 text-white font-mono text-xs flex items-center justify-center font-bold">
                          {idx + 1}
                        </span>
                        <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                          {q.learningObjectiveId}
                        </span>
                        <span className="text-[11px] text-slate-600 uppercase font-medium">
                          {q.type.replace('_', ' ')}
                        </span>
                      </div>
                      <button
                        onClick={() => onOpenBookmark(`Quiz #${idx + 1}: ${q.prompt}`, 'question', q.prompt)}
                        className="text-xs text-slate-600 hover:text-amber-700 flex items-center gap-1"
                      >
                        <BookmarkIcon className="w-3.5 h-3.5" />
                        <span>Bookmark câu này</span>
                      </button>
                    </div>

                    <p className="text-sm font-semibold text-slate-900 leading-relaxed">
                      {q.prompt}
                    </p>

                    {q.codeSnippet && (
                      <div className="bg-slate-900 text-slate-100 p-3 rounded-xl font-mono text-xs border border-slate-800">
                        <pre className="whitespace-pre-wrap">{q.codeSnippet}</pre>
                      </div>
                    )}

                    {/* Options list */}
                    {q.options && (
                      <div className="space-y-2 pt-1">
                        {q.options.map(opt => {
                          const isSelected = q.type === 'multiple_answer'
                            ? Array.isArray(studentAns) && studentAns.includes(opt.id)
                            : studentAns === opt.id;

                          return (
                            <button
                              key={opt.id}
                              disabled={isChecked}
                              onClick={() => {
                                if (q.type === 'multiple_answer') {
                                  const current = Array.isArray(studentAns) ? [...studentAns] : [];
                                  const next = current.includes(opt.id)
                                    ? current.filter(x => x !== opt.id)
                                    : [...current, opt.id];
                                  setQuizAnswers(prev => ({ ...prev, [q.id]: next }));
                                } else {
                                  setQuizAnswers(prev => ({ ...prev, [q.id]: opt.id }));
                                }
                              }}
                              className={`w-full p-3 rounded-xl border text-xs text-left flex items-start gap-2.5 transition-all ${
                                isSelected
                                  ? 'border-indigo-600 bg-indigo-50/80 font-bold text-indigo-950 ring-2 ring-indigo-600/20'
                                  : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-800'
                              }`}
                            >
                              <div className={`w-4 h-4 rounded-full border shrink-0 mt-0.5 flex items-center justify-center ${
                                isSelected ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-slate-300'
                              }`}>
                                {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />}
                              </div>
                              <span className="flex-1">{opt.text}</span>
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {/* Feedback when submitted */}
                    {isChecked && (
                      <div className={`p-4 rounded-xl border text-xs leading-relaxed space-y-1 ${
                        isCorrect ? 'bg-emerald-50 border-emerald-200 text-emerald-950' : 'bg-rose-50 border-rose-200 text-rose-950'
                      }`}>
                        <div className="flex items-center gap-1.5 font-bold">
                          {isCorrect ? (
                            <>
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                              <span className="text-emerald-800">Đáp án chính xác!</span>
                            </>
                          ) : (
                            <>
                              <AlertTriangle className="w-4 h-4 text-rose-600" />
                              <span className="text-rose-800">Chưa đúng!</span>
                            </>
                          )}
                        </div>
                        <p><strong>Giải thích sư phạm:</strong> {q.explanation}</p>
                        {q.errorAnalysis && !isCorrect && (
                          <p className="text-rose-800 text-[11px] pt-1">
                            ⚠️ <strong>Phân tích lỗi tư duy:</strong> {q.errorAnalysis}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Submit Bar */}
            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Đã trả lời: {Object.keys(quizAnswers).length}/{lesson.quiz.questions.length} câu
              </span>
              <div className="flex items-center gap-3">
                {quizSubmitted ? (
                  <button
                    onClick={() => {
                      setQuizSubmitted(false);
                      setQuizScore(null);
                      setQuizAnswers({});
                    }}
                    className="px-4 py-2 border border-slate-300 hover:bg-slate-100 text-slate-700 rounded-xl text-xs font-semibold flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Làm lại bài kiểm tra</span>
                  </button>
                ) : (
                  <button
                    onClick={handleSubmitQuiz}
                    disabled={Object.keys(quizAnswers).length === 0}
                    className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold text-xs rounded-xl shadow-md transition-all active:scale-95"
                  >
                    Nộp bài & Xem phản hồi ngay
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-2">
            <button
              onClick={() => setActiveTab('exercises')}
              className="px-4 py-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-semibold flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Bài tập phân cấp</span>
            </button>
            <button
              onClick={() => setActiveTab('self_assess')}
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-md transition-all"
            >
              <span>Tiếp tục: Tự đánh giá năng lực</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Tab 6: Self-Assessment & Completion */}
      {activeTab === 'self_assess' && (
        <div className="space-y-6 animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
            <div className="pb-4 border-b border-slate-100">
              <h3 className="font-bold text-slate-900 text-lg">Tự đánh giá năng lực cá nhân (Self-Assessment)</h3>
              <p className="text-xs text-slate-500 mt-1">
                Theo chuẩn sư phạm đánh giá quá trình: Đánh giá trung thực mức độ tự tin của bạn để hệ thống tối ưu danh sách ôn tập thông minh (Spaced Review).
              </p>
            </div>

            {/* 5 Levels of Self-Assessment */}
            <div className="space-y-3">
              {[
                { level: 1 as SelfAssessmentLevel, label: 'Tôi chưa hiểu', desc: 'Cần giảng viên hoặc AI Tutor giải thích lại toàn bộ khái niệm', color: 'border-rose-200 bg-rose-50 text-rose-800' },
                { level: 2 as SelfAssessmentLevel, label: 'Tôi hiểu một phần', desc: 'Hiểu được cú pháp cơ bản nhưng chưa tự tin khi áp dụng viết code', color: 'border-amber-200 bg-amber-50 text-amber-800' },
                { level: 3 as SelfAssessmentLevel, label: 'Tôi có thể làm bài cơ bản', desc: 'Tự giải quyết được bài tập Level 1 và trả lời câu hỏi lý thuyết', color: 'border-blue-200 bg-blue-50 text-blue-800' },
                { level: 4 as SelfAssessmentLevel, label: 'Tôi có thể tự giải quyết bài toán', desc: 'Vượt qua bài tập Challenge Level 3 và hiểu sâu các lỗi thường gặp', color: 'border-indigo-200 bg-indigo-50 text-indigo-800' },
                { level: 5 as SelfAssessmentLevel, label: 'Tôi có thể giải thích lại cho người khác', desc: 'Đã hoàn toàn làm chủ kiến thức và có thể hỗ trợ các bạn cùng lớp', color: 'border-emerald-200 bg-emerald-50 text-emerald-800' },
              ].map(item => {
                const isSelected = selfRating === item.level;
                return (
                  <button
                    key={item.level}
                    onClick={() => handleSaveSelfAssessment(item.level)}
                    className={`w-full p-4 rounded-xl border text-left flex items-start gap-4 transition-all ${
                      isSelected
                        ? 'border-indigo-600 bg-indigo-50 ring-2 ring-indigo-600/20 shadow-md'
                        : 'border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex gap-1 text-amber-400 mt-0.5">
                      {[...Array(item.level)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-slate-900">{item.label}</div>
                      <div className="text-xs text-slate-600 mt-0.5">{item.desc}</div>
                    </div>
                    {isSelected && (
                      <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Summary & Key Takeaways */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                Tổng kết bài học (Summary & Key Takeaways):
              </span>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {lesson.summary.map((sum, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">{sum}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Completion Banner */}
            {isCompleted && (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between animate-in zoom-in-95">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold shadow-md">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-emerald-900 text-sm">Đã ghi nhận kết quả bài học vào Hồ sơ sinh viên!</h4>
                    <p className="text-xs text-emerald-700">Trạng thái: Hoàn thành • Năng lực đã cập nhật</p>
                  </div>
                </div>
                {onNextLesson && (
                  <button
                    onClick={onNextLesson}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-sm transition-all"
                  >
                    Chuyển sang bài tiếp theo →
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
