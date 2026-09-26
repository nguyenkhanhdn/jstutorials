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

export function runHtmlCode(code: string): ExecutionResult {
  const startTime = performance.now();
  const logs: LogMessage[] = [];
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(code, 'text/html');
    const parserErrors = doc.querySelectorAll('parsererror');

    if (parserErrors.length > 0) {
      logs.push({
        type: 'error',
        message: 'Lỗi phân tích cú pháp HTML: ' + parserErrors[0].textContent,
        timestamp: new Date().toLocaleTimeString()
      });
      return {
        success: false,
        logs,
        outputString: doc.body.textContent || '',
        error: parserErrors[0].textContent || 'Lỗi cú pháp HTML',
        executionTimeMs: Math.round(performance.now() - startTime)
      };
    }

    const textContent = (doc.body ? doc.body.textContent : '') || (doc.documentElement ? doc.documentElement.textContent : '') || '';
    const tagsFound = Array.from(doc.querySelectorAll('*')).map(el => el.tagName.toLowerCase());

    logs.push({
      type: 'info',
      message: `Render HTML thành công! Tìm thấy ${tagsFound.length} thẻ elements trong cây DOM: <${Array.from(new Set(tagsFound)).slice(0, 10).join('>, <')}>`,
      timestamp: new Date().toLocaleTimeString()
    });

    return {
      success: true,
      logs,
      outputString: textContent.trim() || code.trim(),
      executionTimeMs: Math.round(performance.now() - startTime)
    };
  } catch (err: any) {
    return {
      success: false,
      logs: [{ type: 'error', message: String(err), timestamp: new Date().toLocaleTimeString() }],
      outputString: '',
      error: String(err),
      executionTimeMs: Math.round(performance.now() - startTime)
    };
  }
}

export async function evaluateTestCases(
  code: string,
  testCases: { id: string; description: string; expectedOutput: string; inputCode?: string }[],
  language?: 'html' | 'javascript' | 'css'
): Promise<{ allPassed: boolean; testResults: TestResult[] }> {
  const testResults: TestResult[] = [];
  let allPassed = true;
  const isHtml = language === 'html' || (code.includes('<') && code.includes('>'));

  for (const tc of testCases) {
    const expected = tc.expectedOutput.trim();

    if (language === 'css' || (!isHtml && code.includes('{') && code.includes(':') && !code.includes('console.log'))) {
      const fullCode = tc.inputCode ? `${tc.inputCode}\n${code}` : code;
      const rawCodeNormalized = fullCode.toLowerCase().replace(/\s+/g, ' ');
      const expectedNormalized = expected.toLowerCase().replace(/\s+/g, ' ');

      const passed =
        rawCodeNormalized.includes(expectedNormalized) ||
        fullCode.includes(expected);

      if (!passed) allPassed = false;

      testResults.push({
        testCaseId: tc.id,
        description: tc.description,
        passed,
        actualOutput: passed ? `[Khớp quy tắc CSS] "${expected}"` : `[Chưa tìm thấy khai báo CSS: "${expected}"]`,
        expectedOutput: expected
      });
    } else if (isHtml) {
      const fullCode = tc.inputCode ? `${tc.inputCode}\n${code}` : code;
      const parser = new DOMParser();
      const doc = parser.parseFromString(fullCode, 'text/html');
      const innerHtml = doc.documentElement.innerHTML.toLowerCase();
      const textContent = (doc.body ? doc.body.textContent : '')?.trim() || '';
      const rawCodeLower = fullCode.toLowerCase();
      const expectedLower = expected.toLowerCase();

      // Check text content, inner HTML, or raw code matching
      const passed =
        rawCodeLower.includes(expectedLower) ||
        innerHtml.includes(expectedLower) ||
        textContent.toLowerCase().includes(expectedLower);

      if (!passed) allPassed = false;

      testResults.push({
        testCaseId: tc.id,
        description: tc.description,
        passed,
        actualOutput: passed ? `[Khớp thành công] "${expected}"` : (textContent ? `Nội dung: "${textContent.slice(0, 50)}..."` : '[Không tìm thấy thẻ/thuộc tính tương ứng]'),
        expectedOutput: expected
      });
    } else {
      const fullCode = tc.inputCode ? `${tc.inputCode}\n${code}` : code;
      const res = await runJavaScriptCode(fullCode);
      const actual = res.outputString.trim();

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
  }

  return { allPassed, testResults };
}
