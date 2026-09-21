export interface LogMessage {
  type: 'log' | 'error' | 'warn' | 'info';
  message: string;
  timestamp: string;
}

export interface ExecutionResult {
  success: boolean;
  logs: LogMessage[];
  outputString: string;
  error?: string;
  executionTimeMs: number;
}

export interface TestResult {
  testCaseId: string;
  description: string;
  passed: boolean;
  actualOutput: string;
  expectedOutput: string;
}

export function runJavaScriptCode(code: string, timeoutMs: number = 3000): Promise<ExecutionResult> {
  return new Promise((resolve) => {
    const startTime = performance.now();
    const logs: LogMessage[] = [];

    const formatArg = (arg: any): string => {
      if (arg === undefined) return 'undefined';
      if (arg === null) return 'null';
      if (typeof arg === 'string') return arg;
      if (typeof arg === 'number' || typeof arg === 'boolean') return String(arg);
      if (typeof arg === 'function') return arg.toString();
      try {
        return JSON.stringify(arg, null, 2);
      } catch {
        return String(arg);
      }
    };

    const captureLog = (type: LogMessage['type'], args: any[]) => {
      const now = new Date();
      const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}.${now.getMilliseconds().toString().padStart(3, '0')}`;
      const message = args.map(formatArg).join(' ');
      logs.push({ type, message, timestamp: timeStr });
    };

    // Custom sandbox environment
    const customConsole = {
      log: (...args: any[]) => captureLog('log', args),
      info: (...args: any[]) => captureLog('info', args),
      warn: (...args: any[]) => captureLog('warn', args),
      error: (...args: any[]) => captureLog('error', args),
    };

    // Prevent infinite loop by timeout check
    let isTimedOut = false;
    const timer = setTimeout(() => {
      isTimedOut = true;
      resolve({
        success: false,
        logs,
        outputString: logs.map(l => l.message).join('\n'),
        error: `Quá thời gian thực thi (${timeoutMs}ms). Vui lòng kiểm tra lại vòng lặp vô hạn (infinite loop).`,
        executionTimeMs: Math.round(performance.now() - startTime)
      });
    }, timeoutMs);

    try {
      // Create a secure runner wrapping code
      const runner = new Function('console', code);
      runner(customConsole);
      clearTimeout(timer);

      if (!isTimedOut) {
        const executionTimeMs = Math.round(performance.now() - startTime);
        const outputString = logs.map(l => l.message).join('\n');
        resolve({
          success: true,
          logs,
          outputString,
          executionTimeMs
        });
      }
    } catch (err: any) {
      clearTimeout(timer);
      if (!isTimedOut) {
        const executionTimeMs = Math.round(performance.now() - startTime);
        const errorMsg = err.name ? `${err.name}: ${err.message}` : String(err);
        logs.push({
          type: 'error',
          message: errorMsg,
          timestamp: new Date().toLocaleTimeString()
        });

        resolve({
          success: false,
          logs,
          outputString: logs.map(l => l.message).join('\n'),
          error: errorMsg,
          executionTimeMs
        });
      }
    }
  });
}

export async function evaluateTestCases(
  code: string,
  testCases: { id: string; description: string; expectedOutput: string; inputCode?: string }[]
): Promise<{ allPassed: boolean; testResults: TestResult[] }> {
  const testResults: TestResult[] = [];
  let allPassed = true;

  for (const tc of testCases) {
    const fullCode = tc.inputCode ? `${tc.inputCode}\n${code}` : code;
    const res = await runJavaScriptCode(fullCode);
    const actual = res.outputString.trim();
    const expected = tc.expectedOutput.trim();

    // Check equality or normalized match
    const passed = actual === expected || actual.includes(expected);
    if (!passed) allPassed = false;

    testResults.push({
      testCaseId: tc.id,
      description: tc.description,
      passed,
      actualOutput: actual || (res.error ? `[Lỗi] ${res.error}` : '[Không có output]'),
      expectedOutput: expected
    });
  }

  return { allPassed, testResults };
}
