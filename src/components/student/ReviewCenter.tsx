import React, { useState } from 'react';
import { 
  RefreshCw, 
  AlertTriangle, 
  Bug, 
  CheckCircle2, 
  Sparkles, 
  Bot, 
  Play, 
  RotateCcw,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SAMPLE_DEBUGGING_TASKS } from '../../data/sampleLessonData';
import { CodeSandbox } from './CodeSandbox';
import { runJavaScriptCode } from '../../services/codeRunner';

interface ReviewCenterProps {
  onOpenAITutor: (topic: string, code: string, error?: string, prompt?: string) => void;
  onJumpToLesson: (lessonId: string) => void;
}

export const ReviewCenter: React.FC<ReviewCenterProps> = ({
  onOpenAITutor,
  onJumpToLesson
}) => {
  const [activeDebugIndex, setActiveDebugIndex] = useState(0);
  const debugTasks = SAMPLE_DEBUGGING_TASKS;
  const currentTask = debugTasks[activeDebugIndex];

  const [debugCode, setDebugCode] = useState(currentTask.buggyCode);
  const [debugOutput, setDebugOutput] = useState<string | null>(null);
  const [debugPassed, setDebugPassed] = useState<boolean | null>(null);

  const handleSelectTask = (idx: number) => {
    setActiveDebugIndex(idx);
    setDebugCode(debugTasks[idx].buggyCode);
    setDebugOutput(null);
    setDebugPassed(null);
  };

  const handleTestFix = async () => {
    const [result, expectedRes] = await Promise.all([
      runJavaScriptCode(debugCode),
      runJavaScriptCode(currentTask.solutionCode)
    ]);

    const actual = result.outputString.trim();
    const expected = expectedRes.outputString.trim();
    setDebugOutput(actual || result.error || 'No output');

    const passed = result.success && (actual === expected || (expected !== '' && actual.includes(expected)));
    setDebugPassed(passed);

    if (passed) {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-purple-100 text-purple-800 border border-purple-200">
            Spaced Review & Remediation
          </span>
          <span className="text-xs text-slate-500">Củng cố lỗ hổng kiến thức ngắt quãng</span>
        </div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">
          Trung tâm Củng cố & Sửa lỗi thực chiến (Debugging Lab)
        </h1>
        <p className="text-xs text-slate-500 mt-1 max-w-2xl leading-relaxed">
          Được thiết kế dựa trên các lỗi tư duy phổ biến nhất của sinh viên năm nhất CNTT khi học JavaScript. Hãy tìm lỗi sai trong đoạn code mẫu và sửa lại cho đúng.
        </p>
      </div>

      {/* Weak LOs Alert banner */}
      <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-6 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
            <span>2 Chuẩn đầu ra (LO) cần ưu tiên ôn tập lại tuần này:</span>
          </div>
          <span className="text-[11px] font-semibold bg-amber-200/60 text-amber-900 px-2 py-0.5 rounded">
            Tự động phát hiện từ Learning Analytics
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div className="bg-white p-4 rounded-xl border border-amber-200/80 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono font-bold text-amber-800">LO2.3 - Data Types Primitive</span>
              <span className="text-rose-600 font-bold">Tỷ lệ sai: 68%</span>
            </div>
            <p className="text-slate-600 leading-snug">
              Hay nhầm lẫn giá trị trả về của <code>typeof null === "object"</code> và cơ chế kiểm tra kiểu dữ liệu an toàn.
            </p>
            <button
              onClick={() => onJumpToLesson('les-2-1')}
              className="text-indigo-600 font-bold hover:text-indigo-800 flex items-center gap-1 pt-1"
            >
              <span>Xem lại lý thuyết mục 2</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="bg-white p-4 rounded-xl border border-amber-200/80 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono font-bold text-amber-800">LO2.4 - Const Immutability</span>
              <span className="text-rose-600 font-bold">Tỷ lệ sai: 44%</span>
            </div>
            <p className="text-slate-600 leading-snug">
              Nhầm lẫn giữa việc gán lại biến (reassign primitive) và thay đổi thuộc tính bên trong object/mảng (mutate).
            </p>
            <button
              onClick={() => onJumpToLesson('les-2-1')}
              className="text-indigo-600 font-bold hover:text-indigo-800 flex items-center gap-1 pt-1"
            >
              <span>Xem lại lý thuyết mục 1</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Debugging Lab Component */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Bug className="w-5 h-5 text-rose-600" />
              <span>Thử thách Tìm & Sửa lỗi (Debugging Challenge)</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">Sửa đoạn code có sẵn để vượt qua kiểm thử</p>
          </div>

          <button
            onClick={() => onOpenAITutor(currentTask.title, debugCode, undefined, 'Hãy chỉ ra lỗi tư duy trong đoạn code bị lỗi này')}
            className="px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
          >
            <Bot className="w-4 h-4" />
            <span>Hỏi AI Tutor giàn giáo L1-L5</span>
          </button>
        </div>

        {/* Task Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          {debugTasks.map((t: any, idx: number) => (
            <button
              key={t.id}
              onClick={() => handleSelectTask(idx)}
              className={`px-4 py-2 rounded-xl font-bold transition-all ${
                activeDebugIndex === idx
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Lỗi #{idx + 1}: {t.title.split(':')[0]}
            </button>
          ))}
        </div>

        {/* Task Details */}
        <div className="space-y-4">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs">
            <div className="font-bold text-slate-900 text-sm">{currentTask.title}</div>
            <div className="text-slate-600">{currentTask.explanation}</div>
            <div className="text-rose-700 bg-rose-50 p-2.5 rounded-lg border border-rose-200 font-mono">
              ⚠️ <strong>Lỗi xuất hiện khi chạy:</strong> {currentTask.targetError}
            </div>
          </div>

          {/* Interactive Debugging Code Editor */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700">
              <span>Mã nguồn cần chỉnh sửa:</span>
              <button
                onClick={() => setDebugCode(currentTask.buggyCode)}
                className="text-slate-500 hover:text-slate-700 flex items-center gap-1 font-normal"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Khôi phục code lỗi ban đầu</span>
              </button>
            </div>

            <div className="bg-slate-900 rounded-xl p-3 border border-slate-800">
              <textarea
                value={debugCode}
                onChange={e => setDebugCode(e.target.value)}
                spellCheck={false}
                rows={6}
                className="w-full bg-transparent text-slate-200 font-mono text-xs focus:outline-none resize-none leading-relaxed"
              />
            </div>
          </div>

          {/* Action to test */}
          <div className="flex items-center justify-between pt-2">
            <div className="text-xs text-slate-500">
              💡 Gợi ý: <span className="text-slate-700 font-medium">{currentTask.hint}</span>
            </div>
            <button
              onClick={handleTestFix}
              className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-md flex items-center gap-2 transition-all active:scale-95"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Chạy kiểm tra sửa lỗi</span>
            </button>
          </div>

          {/* Result Alert */}
          {debugPassed !== null && (
            <div className={`p-4 rounded-xl border text-xs space-y-1.5 animate-in fade-in duration-150 ${
              debugPassed ? 'bg-emerald-50 border-emerald-200 text-emerald-950' : 'bg-rose-50 border-rose-200 text-rose-950'
            }`}>
              <div className="flex items-center gap-2 font-bold text-sm">
                {debugPassed ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Sửa lỗi thành công xuất sắc!</span>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="w-5 h-5 text-rose-600" />
                    <span>Code vẫn chưa cho ra kết quả kỳ vọng.</span>
                  </>
                )}
              </div>
              <p>Output thực tế: <code className="font-mono">{debugOutput}</code></p>
              {debugPassed && (
                <p className="text-emerald-800 pt-1">
                  💡 <strong>Phân tích:</strong> Bạn đã nắm vững cơ chế của biến và phạm vi gán giá trị trong JavaScript ES6!
                </p>
              )}
            </div>
          )}
        </div>
      </div>

    </div>
  );
};
