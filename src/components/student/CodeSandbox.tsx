import React, { useState, useMemo } from 'react';
import { Play, RotateCcw, Bot, Terminal, CheckCircle2, AlertCircle, Copy, Check, Eye, Layout } from 'lucide-react';
import { runJavaScriptCode, runHtmlCode, LogMessage } from '../../services/codeRunner';

interface CodeSandboxProps {
  initialCode: string;
  expectedOutput?: string;
  title?: string;
  description?: string;
  language?: 'html' | 'javascript' | 'css';
  onOpenAITutor: (code: string, error?: string) => void;
  onSuccess?: () => void;
}

export const CodeSandbox: React.FC<CodeSandboxProps> = ({
  initialCode,
  expectedOutput,
  title = "Interactive Code Sandbox",
  description,
  language = 'javascript',
  onOpenAITutor,
  onSuccess
}) => {
  const [code, setCode] = useState(initialCode);
  const [logs, setLogs] = useState<LogMessage[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [executionError, setExecutionError] = useState<string | undefined>();
  const [copied, setCopied] = useState(false);
  const [isMatch, setIsMatch] = useState<boolean | null>(null);
  
  const isHtml = language === 'html' || (code.includes('<') && code.includes('>'));
  const [activeOutputTab, setActiveOutputTab] = useState<'preview' | 'console'>(isHtml ? 'preview' : 'console');

  const htmlPreviewSrcDoc = useMemo(() => {
    if (!isHtml) return '';
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: system-ui, -apple-system, sans-serif; padding: 12px; margin: 0; color: #1e293b; background: #ffffff; line-height: 1.5; }
    h1, h2, h3 { margin-top: 0.5em; margin-bottom: 0.5em; color: #0f172a; }
    table { border-collapse: collapse; width: 100%; margin: 8px 0; }
    th, td { border: 1px solid #cbd5e1; padding: 6px 10px; text-align: left; }
    th { background: #f1f5f9; font-weight: 600; }
    form { display: flex; flex-direction: column; gap: 8px; max-width: 400px; }
    input, textarea, select, button { padding: 6px 10px; border-radius: 6px; border: 1px solid #cbd5e1; font-size: 13px; font-family: inherit; }
    button { background: #3b82f6; color: white; border: none; cursor: pointer; font-weight: 600; }
    button:hover { background: #2563eb; }
    figure { margin: 8px 0; }
    figcaption { font-size: 12px; color: #64748b; margin-top: 4px; }
    mark { background: #fef08a; padding: 2px 4px; border-radius: 2px; }
    kbd { background: #f1f5f9; border: 1px solid #cbd5e1; border-radius: 4px; padding: 2px 5px; font-family: monospace; font-size: 11px; }
  </style>
</head>
<body>
${code}
</body>
</html>`;
  }, [code, isHtml]);

  const handleRun = async () => {
    setIsRunning(true);
    setExecutionError(undefined);

    if (isHtml) {
      const result = runHtmlCode(code);
      setLogs(result.logs);
      setExecutionError(result.error);

      if (expectedOutput) {
        const fullLower = code.toLowerCase();
        const expectedClean = expectedOutput.trim().toLowerCase();
        const actualClean = result.outputString.trim().toLowerCase();
        const matched = fullLower.includes(expectedClean) || actualClean.includes(expectedClean);
        setIsMatch(matched);
        if (matched && onSuccess) {
          onSuccess();
        }
      }
      setActiveOutputTab('preview');
    } else {
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
      setActiveOutputTab('console');
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
            {isHtml ? <Layout className="w-3.5 h-3.5 text-orange-400" /> : <Terminal className="w-3.5 h-3.5 text-amber-400" />}
            {title}
            {isHtml && <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-orange-950 text-orange-400 border border-orange-800">HTML Live Preview</span>}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="px-2.5 py-1 text-xs text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 rounded-md transition-colors flex items-center gap-1"
            title="Sao chép code"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Đã chép' : 'Sao chép'}</span>
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
            className={`px-3.5 py-1 text-xs font-bold rounded-md transition-all flex items-center gap-1.5 shadow-sm active:scale-95 ${
              isHtml
                ? 'bg-orange-500 hover:bg-orange-400 text-slate-950 shadow-orange-500/30'
                : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-500/30'
            }`}
          >
            <Play className="w-3.5 h-3.5 fill-slate-950" />
            <span>{isRunning ? 'Đang chạy...' : isHtml ? 'Render & Kiểm tra' : 'Chạy Code'}</span>
          </button>
        </div>
      </div>

      {description && (
        <div className="px-4 py-2 bg-slate-950/50 text-xs text-slate-400 border-b border-slate-800/60 font-sans">
          {description}
        </div>
      )}

      {/* Editor & Output Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[240px]">
        {/* Code Editor */}
        <div className="lg:col-span-7 p-3 bg-slate-900 flex flex-col font-mono text-sm border-b lg:border-b-0 lg:border-r border-slate-800">
          <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1 flex items-center justify-between">
            <span>Mã nguồn {isHtml ? 'HTML' : 'JavaScript'}</span>
            <span className="text-slate-600">Gõ trực tiếp để xem thay đổi</span>
          </div>
          <textarea
            value={code}
            onChange={e => setCode(e.target.value)}
            spellCheck={false}
            className="w-full flex-1 min-h-[200px] bg-transparent text-slate-200 font-mono text-xs leading-relaxed focus:outline-none resize-none selection:bg-indigo-500/30"
            placeholder={isHtml ? "<!-- Viết mã HTML tại đây... -->" : "// Viết code JavaScript tại đây..."}
          />
        </div>

        {/* Right Output View: Preview or Console */}
        <div className="lg:col-span-5 bg-slate-950 flex flex-col justify-between font-mono text-xs overflow-hidden">
          {/* Output Header Tabs */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800/80 bg-slate-900/50">
            <div className="flex items-center gap-1">
              {isHtml && (
                <button
                  onClick={() => setActiveOutputTab('preview')}
                  className={`px-2.5 py-0.5 rounded text-[11px] font-bold flex items-center gap-1 transition-all ${
                    activeOutputTab === 'preview'
                      ? 'bg-orange-500 text-slate-950 shadow-xs'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Eye className="w-3 h-3" />
                  <span>Xem trước Web</span>
                </button>
              )}
              <button
                onClick={() => setActiveOutputTab('console')}
                className={`px-2.5 py-0.5 rounded text-[11px] font-bold flex items-center gap-1 transition-all ${
                  activeOutputTab === 'console'
                    ? 'bg-slate-700 text-white shadow-xs'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Terminal className="w-3 h-3" />
                <span>Console Logs</span>
              </button>
            </div>

            {activeOutputTab === 'console' && logs.length > 0 && (
              <button
                onClick={() => setLogs([])}
                className="text-[10px] text-slate-400 hover:text-slate-200"
              >
                Xóa log
              </button>
            )}
          </div>

          {/* Active View Container */}
          <div className="flex-1 p-2 flex flex-col min-h-[170px] overflow-hidden">
            {activeOutputTab === 'preview' && isHtml ? (
              <div className="w-full h-full min-h-[160px] bg-white rounded-lg border border-slate-700 overflow-hidden">
                <iframe
                  title="HTML Live Sandbox Preview"
                  srcDoc={htmlPreviewSrcDoc}
                  sandbox="allow-scripts"
                  className="w-full h-full min-h-[160px] border-0"
                />
              </div>
            ) : (
              <div className="space-y-1 max-h-[180px] overflow-y-auto p-1">
                {logs.length === 0 ? (
                  <div className="text-slate-600 italic py-6 text-center">
                    Nhấn "{isHtml ? 'Render & Kiểm tra' : 'Chạy Code'}" để xem log...
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
                          : log.type === 'info'
                          ? 'bg-indigo-950/40 text-indigo-300'
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
            )}
          </div>

          {/* Test Case Match result */}
          {expectedOutput && isMatch !== null && (
            <div className="p-3 bg-slate-900/70 border-t border-slate-800/80 flex items-center justify-between text-xs">
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
              <span className="text-[10px] text-slate-400 truncate max-w-[150px]">
                Kỳ vọng: <code className="text-amber-300">{expectedOutput}</code>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
