import React, { useState } from 'react';
import { Play, RotateCcw, Bot, Terminal, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';
import { runJavaScriptCode, LogMessage } from '../../services/codeRunner';

interface CodeSandboxProps {
  initialCode: string;
  expectedOutput?: string;
  title?: string;
  description?: string;
  onOpenAITutor: (code: string, error?: string) => void;
  onSuccess?: () => void;
}

export const CodeSandbox: React.FC<CodeSandboxProps> = ({
  initialCode,
  expectedOutput,
  title = "Interactive JavaScript Sandbox",
  description,
  onOpenAITutor,
  onSuccess
}) => {
  const [code, setCode] = useState(initialCode);
  const [logs, setLogs] = useState<LogMessage[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [executionError, setExecutionError] = useState<string | undefined>();
  const [copied, setCopied] = useState(false);
  const [isMatch, setIsMatch] = useState<boolean | null>(null);

  const handleRun = async () => {
    setIsRunning(true);
    setExecutionError(undefined);

    const result = await runJavaScriptCode(code);
    setLogs(result.logs);
    setExecutionError(result.error);

    if (expectedOutput) {
      const actualClean = result.outputString.trim();
      const expectedClean = expectedOutput.trim();
      const matched = actualClean === expectedClean || actualClean.includes(expectedClean);
      setIsMatch(matched);
      if (matched && onSuccess) {
        onSuccess();
      }
    }

    setIsRunning(false);
  };

  const handleReset = () => {
    setCode(initialCode);
    setLogs([]);
    setExecutionError(undefined);
    setIsMatch(null);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-xl overflow-hidden flex flex-col my-4">
      {/* Sandbox Header */}
      <div className="px-4 py-2.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5 mr-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-xs font-mono font-medium text-slate-300 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-amber-400" />
            {title}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="px-2.5 py-1 text-xs text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 rounded-md transition-colors flex items-center gap-1"
            title="Sao chép code"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Đã sao chép' : 'Sao chép'}</span>
          </button>
          <button
            onClick={handleReset}
            className="px-2.5 py-1 text-xs text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 rounded-md transition-colors flex items-center gap-1"
            title="Đặt lại code ban đầu"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Đặt lại</span>
          </button>
          <button
            onClick={() => onOpenAITutor(code, executionError)}
            className="px-2.5 py-1 text-xs font-semibold bg-indigo-900/60 text-indigo-300 hover:bg-indigo-800/80 border border-indigo-700/50 rounded-md transition-colors flex items-center gap-1.5"
            title="Hỏi AI Tutor giàn giáo sư phạm"
          >
            <Bot className="w-3.5 h-3.5 text-indigo-400" />
            <span>Hỏi AI Tutor</span>
          </button>
          <button
            onClick={handleRun}
            disabled={isRunning}
            className="px-3.5 py-1 text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-md transition-all flex items-center gap-1.5 shadow-sm shadow-amber-500/30 active:scale-95"
          >
            <Play className="w-3.5 h-3.5 fill-slate-950" />
            <span>{isRunning ? 'Đang chạy...' : 'Chạy Code'}</span>
          </button>
        </div>
      </div>

      {description && (
        <div className="px-4 py-2 bg-slate-950/50 text-xs text-slate-400 border-b border-slate-800/60 font-sans">
          {description}
        </div>
      )}

      {/* Editor & Console Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[220px]">
        {/* Code Editor */}
        <div className="lg:col-span-7 p-3 bg-slate-900 flex font-mono text-sm border-b lg:border-b-0 lg:border-r border-slate-800">
          <textarea
            value={code}
            onChange={e => setCode(e.target.value)}
            spellCheck={false}
            className="w-full h-full min-h-[180px] bg-transparent text-slate-200 font-mono text-xs leading-relaxed focus:outline-none resize-none selection:bg-indigo-500/30"
            placeholder="// Viết code JavaScript tại đây..."
          />
        </div>

        {/* Virtual Console */}
        <div className="lg:col-span-5 bg-slate-950 p-3 flex flex-col justify-between font-mono text-xs">
          <div>
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/80 text-[11px] text-slate-400 uppercase tracking-wider">
              <span>Virtual Console Output</span>
              {logs.length > 0 && (
                <button
                  onClick={() => setLogs([])}
                  className="hover:text-slate-200"
                >
                  Xóa log
                </button>
              )}
            </div>

            <div className="space-y-1 max-h-[160px] overflow-y-auto">
              {logs.length === 0 ? (
                <div className="text-slate-600 italic py-4 text-center">
                  Nhấn "Chạy Code" để xem kết quả console.log()...
                </div>
              ) : (
                logs.map((log, idx) => (
                  <div
                    key={idx}
                    className={`p-1.5 rounded flex items-start gap-2 ${
                      log.type === 'error'
                        ? 'bg-rose-950/50 text-rose-300 border border-rose-900/50'
                        : log.type === 'warn'
                        ? 'bg-amber-950/40 text-amber-300'
                        : 'text-slate-200 hover:bg-slate-900/60'
                    }`}
                  >
                    <span className="text-[10px] text-slate-500 shrink-0 select-none">
                      {log.timestamp.split('.')[0]}
                    </span>
                    <span className="break-all whitespace-pre-wrap flex-1">{log.message}</span>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Test Case Match result */}
          {expectedOutput && isMatch !== null && (
            <div className={`mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-xs`}>
              <div className="flex items-center gap-1.5">
                {isMatch ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Chính xác! Kết quả khớp kỳ vọng.</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-4 h-4 text-rose-400" />
                    <span className="text-rose-400 font-semibold">Chưa khớp kết quả mong đợi.</span>
                  </>
                )}
              </div>
              <span className="text-[10px] text-slate-400">
                Kỳ vọng: <code className="text-amber-300">{expectedOutput}</code>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
