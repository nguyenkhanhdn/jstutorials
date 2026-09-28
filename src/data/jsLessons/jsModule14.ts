import { Lesson } from '../../types';

// ==========================================
// MODULE 14: ASYNCHRONOUS JAVASCRIPT (BẤT ĐỒNG BỘ)
// ==========================================

export const LESSON_14_1: Lesson = {
  id: 'les-14-1',
  moduleId: 'mod-14',
  track: 'javascript',
  language: 'javascript',
  title: '14.1 Đồng bộ (Sync) vs Bất đồng bộ (Async) & Event Loop',
  order: 1,
  durationMinutes: 50,
  difficulty: 'Nâng cao',
  prerequisites: [
    'Nắm vững cách thực thi câu lệnh JavaScript',
    'Biết về Call Stack cơ bản'
  ],
  learningObjectives: [
    {
      id: 'LO14.1.1',
      code: 'LO14.1.1',
      title: 'Bản chất Single-Threaded và Non-blocking I/O',
      description: 'Hiểu tại sao JS chỉ có 1 luồng chính nhưng vẫn xử lý mượt mà các tác vụ mạng, timer mà không bị đơ giao diện.',
      bloomLevel: 'Understand',
      masteryPercentage: 90
    },
    {
      id: 'LO14.1.2',
      code: 'LO14.1.2',
      title: 'Vòng lặp sự kiện Event Loop, Macrotask & Microtask',
      description: 'Phân tích thứ tự thực thi giữa Call Stack, Web APIs, Microtask Queue (Promise) và Callback Queue (setTimeout).',
      bloomLevel: 'Analyze',
      masteryPercentage: 85
    }
  ],
  sections: [
    {
      id: 'sec-14-1-1',
      lessonId: 'les-14-1',
      order: 1,
      conceptName: 'Event Loop & Cơ chế Bất đồng bộ',
      title: '1. Vòng lặp sự kiện (Event Loop) trong JavaScript',
      explanation: 'JavaScript là ngôn ngữ đơn luồng (Single-threaded) với 1 Call Stack duy nhất. Để không làm đóng băng giao diện khi gặp tác vụ tốn thời gian (như tải ảnh, chờ API, timer), JavaScript đẩy các tác vụ này sang Web APIs của trình duyệt. Khi tác vụ xong, callback được xếp vào Hàng đợi (Queue). Event Loop liên tục theo dõi: khi nào Call Stack trống rỗng, nó sẽ bốc callback từ Queue đưa lên Stack để chạy.',
      syntax: '// Call Stack -> Web APIs -> Task Queue -> Event Loop -> Call Stack',
      codeExample: `console.log("1. Bắt đầu chương trình");

// Tác vụ bất đồng bộ được chuyển sang Web APIs
setTimeout(() => {
  console.log("3. Tác vụ từ Callback Queue đã xong");
}, 0);

console.log("2. Kết thúc chương trình");`,
      lineByLineExplanation: [
        { line: 1, text: 'Chạy đồng bộ ngay lập tức, in dòng 1.' },
        { line: 4, text: 'setTimeout gửi sang Web APIs đếm 0ms, sau đó chuyển callback vào Task Queue.' },
        { line: 8, text: 'Chạy đồng bộ in dòng 2. Call Stack trống, Event Loop mới bốc callback từ Task Queue lên chạy.' }
      ],
      commonMistakes: [
        'Nghĩ rằng setTimeout(..., 0) sẽ chạy ngay lập tức trước các câu lệnh đồng bộ tiếp theo.'
      ],
      whenToUse: 'Dùng tư duy Event Loop để sắp xếp thứ tự thực thi tác vụ mạng, animation và giao diện không bị giật lag.',
      whenNotToUse: 'Tránh chạy các vòng lặp tính toán khổng lồ (CPU-intensive) làm nghẽn Call Stack.',
      realWorldUseCase: 'Tất cả các cuộc phỏng vấn tuyển dụng Frontend Developer đều kiểm tra thứ tự thực thi Event Loop.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-14-1',
    title: 'Thực hành: Quan sát thứ tự thực thi của Event Loop',
    description: 'Chạy đoạn mã mô phỏng để thấy rõ câu lệnh đồng bộ luôn ưu tiên chạy trước callback của setTimeout dù thời gian chờ là 0ms.',
    starterCode: `function demoEventLoop() {
  console.log("A: Đồng bộ 1");
  
  setTimeout(() => {
    console.log("C: Bất đồng bộ sau khi Stack trống");
  }, 0);
  
  console.log("B: Đồng bộ 2");
}

demoEventLoop();`,
    expectedConsoleOutput: 'A: Đồng bộ 1\nB: Đồng bộ 2\nC: Bất đồng bộ sau khi Stack trống',
    hint: 'A chạy đầu tiên, sau đó đến B, cuối cùng Event Loop mới đưa C từ hàng đợi lên chạy.',
    language: 'javascript'
  },
  exercises: {
    basic: {
      id: 'ex-14-1-1',
      lessonId: 'les-14-1',
      title: 'Bài tập Cơ bản: Dự đoán luồng thực thi đồng bộ và bất đồng bộ',
      difficulty: 'basic',
      learningObjectiveIds: ['LO14.1.1'],
      description: 'Viết hàm `runOrder()` in ra dòng `"Bước 1: Khởi động"`, sau đó dùng `setTimeout` 10ms in `"Bước 3: Tác vụ nền hoàn thành"`, và cuối cùng in `"Bước 2: Sẵn sàng nhận lệnh"`.',
      starterCode: `function runOrder() {
  // Viết các câu lệnh theo đúng thứ tự logic:
}

runOrder();`,
      solutionCode: `function runOrder() {
  console.log("Bước 1: Khởi động");
  setTimeout(() => {
    console.log("Bước 3: Tác vụ nền hoàn thành");
  }, 10);
  console.log("Bước 2: Sẵn sàng nhận lệnh");
}

runOrder();`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra in đúng 3 bước theo thứ tự Event Loop',
          expectedOutput: 'Bước 1: Khởi động\nBước 2: Sẵn sàng nhận lệnh\nBước 3: Tác vụ nền hoàn thành'
        }
      ],
      hints: ['Đặt setTimeout ở giữa nhưng in Bước 2 ở dòng dưới cùng của hàm.'],
      explanation: 'Lệnh đồng bộ chạy trước, callback hẹn giờ chạy sau.'
    },
    intermediate: {
      id: 'ex-14-1-2',
      lessonId: 'les-14-1',
      title: 'Bài tập Trung bình: Microtask (Promise) vs Macrotask (setTimeout)',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO14.1.2'],
      description: 'Trong Event Loop, Microtask (Promise.then) luôn được ưu tiên chạy trước Macrotask (setTimeout). Hãy viết hàm `demoQueuePriority()` tạo 1 setTimeout và 1 Promise.resolve().then() để chứng minh Microtask chạy trước Macrotask. In lần lượt: `"1. Sync"`, `"2. Microtask (Promise)"`, `"3. Macrotask (Timer)"`.',
      starterCode: `function demoQueuePriority() {
  // Cài đặt để in đúng thứ tự ưu tiên của hàng đợi:
}

demoQueuePriority();`,
      solutionCode: `function demoQueuePriority() {
  console.log("1. Sync");
  setTimeout(() => {
    console.log("3. Macrotask (Timer)");
  }, 0);
  Promise.resolve().then(() => {
    console.log("2. Microtask (Promise)");
  });
}

demoQueuePriority();`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra thứ tự: Sync -> Microtask -> Macrotask',
          expectedOutput: '1. Sync\n2. Microtask (Promise)\n3. Macrotask (Timer)'
        }
      ],
      hints: ['Promise.resolve().then(...) tạo Microtask ưu tiên trước setTimeout'],
      explanation: 'Microtask Queue được giải phóng toàn bộ trước mỗi chu kỳ lấy tác vụ từ Macrotask Queue.'
    },
    challenge: {
      id: 'ex-14-1-3',
      lessonId: 'les-14-1',
      title: 'Bài tập Thử thách: Đo lường độ trễ thực tế của Timer',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO14.1.1'],
      description: 'Viết hàm `simulateTaskDelay()` ghi lại thời gian bắt đầu `const start = Date.now();`. Hẹn giờ 20ms bằng setTimeout, bên trong callback tính `const delay = Date.now() - start;`. Nếu delay >= 15ms, in ra: `Độ trễ hợp lệ: Đã chạy qua Web APIs`.',
      starterCode: `function simulateTaskDelay() {
  // Đo lường độ trễ thực tế của timer:
}

simulateTaskDelay();`,
      solutionCode: `function simulateTaskDelay() {
  const start = Date.now();
  setTimeout(() => {
    const delay = Date.now() - start;
    if (delay >= 15) {
      console.log("Độ trễ hợp lệ: Đã chạy qua Web APIs");
    }
  }, 20);
}

simulateTaskDelay();`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra độ trễ đạt chuẩn qua Web APIs',
          expectedOutput: 'Độ trễ hợp lệ: Đã chạy qua Web APIs'
        }
      ],
      hints: ['Kiểm tra Date.now() - start trong callback của setTimeout'],
      explanation: 'Timer trong JS chỉ đảm bảo chạy sau tối thiểu N mili-giây chứ không phải chính xác từng micro-giây.'
    }
  },
  quiz: {
    id: 'quiz-14-1',
    lessonId: 'les-14-1',
    title: 'Trắc nghiệm: Event Loop & Asynchronous',
    passingScore: 70,
    questions: [
      {
        id: 'q-14-1-1',
        lessonId: 'les-14-1',
        learningObjectiveId: 'LO14.1.2',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'Giữa Microtask Queue (Promise.then) và Macrotask Queue (setTimeout), hàng đợi nào được Event Loop ưu tiên giải quyết trước?',
        options: [
          { id: 'a', text: 'Microtask Queue luôn được ưu tiên chạy trước' },
          { id: 'b', text: 'Macrotask Queue luôn được ưu tiên chạy trước' },
          { id: 'c', text: 'Hai hàng đợi chạy luân phiên 50/50' },
          { id: 'd', text: 'Tùy thuộc vào tốc độ mạng của trình duyệt' }
        ],
        correctAnswer: 'a',
        explanation: 'Sau mỗi tác vụ đồng bộ, Event Loop vét sạch Microtask Queue trước khi lấy tác vụ từ Macrotask Queue.',
        relatedLessonId: 'les-14-1'
      }
    ]
  },
  summary: [
    'JavaScript là đơn luồng nhưng xử lý bất đồng bộ nhờ Web APIs và Event Loop.',
    'Các lệnh đồng bộ trong Call Stack luôn được giải quyết trước.',
    'Microtask (Promise) có độ ưu tiên cao hơn Macrotask (setTimeout, setInterval).'
  ],
  suggestedBookmarks: [
    'Sơ đồ động mô phỏng Event Loop, Call Stack và Task Queue',
    'Tại sao setTimeout(..., 0) không làm đóng băng giao diện trình duyệt'
  ]
};

export const LESSON_14_2: Lesson = {
  id: 'les-14-2',
  moduleId: 'mod-14',
  track: 'javascript',
  language: 'javascript',
  title: '14.2 Timer API: setTimeout & setInterval trong thực tế',
  order: 2,
  durationMinutes: 45,
  difficulty: 'Cơ bản',
  prerequisites: [
    'Đã học Bài 14.1 về Event Loop',
    'Biết cách viết hàm callback'
  ],
  learningObjectives: [
    {
      id: 'LO14.2.1',
      code: 'LO14.2.1',
      title: 'Làm chủ setTimeout và clearTimeout',
      description: 'Trì hoãn thực thi một hành động sau khoảng thời gian và hủy bỏ khi không còn cần thiết.',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    },
    {
      id: 'LO14.2.2',
      code: 'LO14.2.2',
      title: 'Làm chủ setInterval và clearInterval',
      description: 'Lặp lại tác vụ định kỳ (đồng hồ, đếm ngược, polling dữ liệu) và dọn dẹp để tránh rò rỉ bộ nhớ.',
      bloomLevel: 'Apply',
      masteryPercentage: 88
    }
  ],
  sections: [
    {
      id: 'sec-14-2-1',
      lessonId: 'les-14-2',
      order: 1,
      conceptName: 'Timer APIs: setTimeout vs setInterval',
      title: '1. Cơ chế và cách dọn dẹp Timer trong JavaScript',
      explanation: '`setTimeout(fn, delay)` thực thi hàm một lần duy nhất sau `delay` mili-giây. `setInterval(fn, delay)` lặp lại hàm liên tục sau mỗi chu kỳ `delay`. Cả hai hàm đều trả về một mã định danh (Timer ID), dùng mã này với `clearTimeout(id)` hoặc `clearInterval(id)` để dừng hẹn giờ.',
      syntax: 'const timerId = setTimeout(callback, ms);\nclearTimeout(timerId);\n\nconst intervalId = setInterval(callback, ms);\nclearInterval(intervalId);',
      codeExample: `// 1. setTimeout: Thông báo tự tắt sau 2 giây
const timerId = setTimeout(() => {
  console.log("Thông báo: Đã lưu dữ liệu tự động!");
}, 2000);

// Nếu người dùng bấm đóng trước, hủy hẹn giờ:
// clearTimeout(timerId);

// 2. setInterval: Đồng hồ đếm ngược từ 3 về 0
let seconds = 3;
const countdown = setInterval(() => {
  console.log("Đếm ngược:", seconds);
  seconds--;
  if (seconds < 0) {
    clearInterval(countdown); // Bắt buộc phải clear để dừng lặp!
    console.log("Hết giờ!");
  }
}, 100);`,
      lineByLineExplanation: [
        { line: 2, text: 'setTimeout trả về timerId để có thể hủy khi cần.' },
        { line: 11, text: 'setInterval kích hoạt callback lặp lại định kỳ mỗi 100ms.' },
        { line: 15, text: 'Khi đạt điều kiện dừng, gọi clearInterval(countdown) để giải phóng tài nguyên.' }
      ],
      commonMistakes: [
        'Quên gọi clearInterval() dẫn đến timer chạy ngầm vĩnh viễn gây đơ lag và rò rỉ bộ nhớ (Memory Leak).'
      ],
      whenToUse: 'Dùng setTimeout cho debounce tìm kiếm, tự động đóng toast notification. Dùng setInterval cho đồng hồ bấm giờ, carousel tự trượt.',
      whenNotToUse: 'Tránh dùng setInterval cho các tác vụ gọi API mạng vì thời gian mạng phản hồi có thể lâu hơn chu kỳ lặp.',
      realWorldUseCase: 'Hook useEffect trong React luôn cần return () => clearInterval(id) để dọn dẹp khi component unmount.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-14-2',
    title: 'Thực hành: Bộ đếm tiến trình (Progress Ticker)',
    description: 'Chạy thử đoạn mã mô phỏng tải tệp tin từ 0% đến 100% bằng setInterval và tự động dừng khi hoàn tất.',
    starterCode: `let progress = 0;

const ticker = setInterval(() => {
  progress += 25;
  console.log("Tiến độ:", progress + "%");
  
  if (progress >= 100) {
    clearInterval(ticker);
    console.log("Hoàn tất tải xuống!");
  }
}, 50);`,
    expectedConsoleOutput: 'Tiến độ: 25%\nTiến độ: 50%\nTiến độ: 75%\nTiến độ: 100%\nHoàn tất tải xuống!',
    hint: 'clearInterval(ticker) được gọi khi progress >= 100 để dừng timer.',
    language: 'javascript'
  },
  exercises: {
    basic: {
      id: 'ex-14-2-1',
      lessonId: 'les-14-2',
      title: 'Bài tập Cơ bản: Lên lịch hẹn giờ với setTimeout',
      difficulty: 'basic',
      learningObjectiveIds: ['LO14.2.1'],
      description: 'Viết hàm `scheduleReminder(taskName, delayMs)` dùng `setTimeout` để sau `delayMs` in ra: `Nhắc nhở: Đã đến giờ [taskName]!`. Gọi hàm với `"Uống nước"` và `50` ms.',
      starterCode: `function scheduleReminder(taskName, delayMs) {
  // Lên lịch nhắc nhở:
}

scheduleReminder("Uống nước", 50);`,
      solutionCode: `function scheduleReminder(taskName, delayMs) {
  setTimeout(() => {
    console.log(\`Nhắc nhở: Đã đến giờ \${taskName}!\`);
  }, delayMs);
}

scheduleReminder("Uống nước", 50);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra in đúng thông điệp nhắc nhở',
          expectedOutput: 'Nhắc nhở: Đã đến giờ Uống nước!'
        }
      ],
      hints: ['Dùng setTimeout(() => console.log(...), delayMs)'],
      explanation: 'setTimeout thực thi callback sau khoảng delay chỉ định.'
    },
    intermediate: {
      id: 'ex-14-2-2',
      lessonId: 'les-14-2',
      title: 'Bài tập Trung bình: Hủy hẹn giờ với clearTimeout',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO14.2.1'],
      description: 'Tạo một timer hẹn giờ in `"Tác vụ bị hủy thất bại"`. Ngay lập tức dùng `clearTimeout` để hủy timer đó. Sau đó in ra `"Đã hủy tác vụ thành công"`.',
      starterCode: `function cancelTask() {
  // Tạo timer và hủy ngay lập tức:
}

cancelTask();`,
      solutionCode: `function cancelTask() {
  const id = setTimeout(() => {
    console.log("Tác vụ bị hủy thất bại");
  }, 100);
  clearTimeout(id);
  console.log("Đã hủy tác vụ thành công");
}

cancelTask();`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra timer bị hủy và không in ra câu thất bại',
          expectedOutput: 'Đã hủy tác vụ thành công'
        }
      ],
      hints: ['clearTimeout(id) ngăn không cho callback của setTimeout chạy'],
      explanation: 'clearTimeout xóa bỏ tác vụ khỏi danh sách theo dõi của Web APIs.'
    },
    challenge: {
      id: 'ex-14-2-3',
      lessonId: 'les-14-2',
      title: 'Bài tập Thử thách: Kỹ thuật Debounce cơ bản',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO14.2.1'],
      description: 'Tạo hàm `debounce(fn, delay)` trả về hàm mới. Mỗi khi hàm mới được gọi, hủy timer cũ và tạo timer mới chờ `delay` mới chạy `fn`. Mô phỏng gọi liên tục 3 lần tìm kiếm "r", "re", "react", chỉ in ra kết quả của lần cuối: `Tìm kiếm từ khóa: react`.',
      starterCode: `function debounce(fn, delay) {
  let timer;
  return function(text) {
    // Viết logic debounce ở đây:
  };
}

const performSearch = debounce(term => {
  console.log("Tìm kiếm từ khóa:", term);
}, 50);

performSearch("r");
performSearch("re");
performSearch("react");`,
      solutionCode: `function debounce(fn, delay) {
  let timer;
  return function(text) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(text);
    }, delay);
  };
}

const performSearch = debounce(term => {
  console.log("Tìm kiếm từ khóa:", term);
}, 50);

performSearch("r");
performSearch("re");
performSearch("react");`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra chỉ in kết quả của lần gõ phím cuối cùng',
          expectedOutput: 'Tìm kiếm từ khóa: react'
        }
      ],
      hints: ['clearTimeout(timer) trước khi gán timer = setTimeout(...)'],
      explanation: 'Debounce là kỹ thuật sống còn trong ô tìm kiếm autocomplete để tiết kiệm tài nguyên máy chủ.'
    }
  },
  quiz: {
    id: 'quiz-14-2',
    lessonId: 'les-14-2',
    title: 'Trắc nghiệm: Timer APIs',
    passingScore: 70,
    questions: [
      {
        id: 'q-14-2-1',
        lessonId: 'les-14-2',
        learningObjectiveId: 'LO14.2.2',
        type: 'multiple_choice',
        difficulty: 'easy',
        prompt: 'Lệnh nào sau đây dùng để chấm dứt một chu kỳ lặp được tạo bởi setInterval?',
        options: [
          { id: 'a', text: 'stopInterval(id)' },
          { id: 'b', text: 'clearInterval(id)' },
          { id: 'c', text: 'clearTimeout(id)' },
          { id: 'd', text: 'break' }
        ],
        correctAnswer: 'b',
        explanation: 'clearInterval(id) hủy bỏ vòng lặp định kỳ tương ứng với Timer ID được cấp phát.',
        relatedLessonId: 'les-14-2'
      }
    ]
  },
  summary: [
    'setTimeout thực thi 1 lần sau độ trễ, hủy bằng clearTimeout().',
    'setInterval lặp lại định kỳ, bắt buộc phải dừng bằng clearInterval() khi thỏa điều kiện.',
    'Debounce và Throttle là 2 kỹ thuật tối ưu hiệu năng quan trọng được xây dựng trên Timer APIs.'
  ],
  suggestedBookmarks: [
    'Sự khác biệt giữa Debounce và Throttle trong xử lý sự kiện scroll và input',
    'Tại sao không nên truyền chuỗi string vào setTimeout'
  ]
};

export const LESSON_14_3: Lesson = {
  id: 'les-14-3',
  moduleId: 'mod-14',
  track: 'javascript',
  language: 'javascript',
  title: '14.3 Promise: Các trạng thái (Pending, Fulfilled, Rejected)',
  order: 3,
  durationMinutes: 55,
  difficulty: 'Nâng cao',
  prerequisites: [
    'Hiểu xử lý bất đồng bộ ở Bài 14.1',
    'Biết về lỗi Callback Hell'
  ],
  learningObjectives: [
    {
      id: 'LO14.3.1',
      code: 'LO14.3.1',
      title: '3 trạng thái cốt lõi của Promise',
      description: 'Làm chủ vòng đời Promise: Pending (Đang chờ), Fulfilled (Thành công qua resolve), Rejected (Thất bại qua reject).',
      bloomLevel: 'Understand',
      masteryPercentage: 92
    },
    {
      id: 'LO14.3.2',
      code: 'LO14.3.2',
      title: 'Xâu chuỗi Promise Chain (.then, .catch, .finally)',
      description: 'Xử lý tuần tự nhiều tác vụ bất đồng bộ, bắt lỗi tập trung qua .catch() và dọn dẹp qua .finally().',
      bloomLevel: 'Apply',
      masteryPercentage: 88
    }
  ],
  sections: [
    {
      id: 'sec-14-3-1',
      lessonId: 'les-14-3',
      order: 1,
      conceptName: 'Bản chất Promise trong ES6',
      title: '1. Kiến trúc Promise giải cứu Callback Hell',
      explanation: 'Promise là một đối tượng đại diện cho một tác vụ bất đồng bộ sẽ hoàn thành hoặc thất bại trong tương lai. Promise ra đời để thay thế mô hình callback lồng nhau (Callback Hell). Promise có 3 trạng thái bất biến: 1) Pending (chờ kết quả), 2) Fulfilled (thành công -> gọi .then()), 3) Rejected (thất bại -> gọi .catch()).',
      syntax: 'const promise = new Promise((resolve, reject) => {\n  if (success) resolve(data);\n  else reject(error);\n});\npromise.then(data => {}).catch(err => {}).finally(() => {});',
      codeExample: `// Khởi tạo Promise mô phỏng nạp tài khoản
function simulatePayment(amount) {
  return new Promise((resolve, reject) => {
    if (amount > 0) {
      resolve("Thanh toán thành công: " + amount + " VNĐ");
    } else {
      reject("Lỗi: Số tiền thanh toán không hợp lệ!");
    }
  });
}

// Tiêu thụ Promise bằng .then() và .catch()
simulatePayment(200000)
  .then(res => {
    console.log("Xử lý:", res);
  })
  .catch(err => {
    console.log("Bắt lỗi:", err);
  })
  .finally(() => {
    console.log("Giao dịch kết thúc.");
  });`,
      lineByLineExplanation: [
        { line: 2, text: 'Hàm khởi tạo Promise nhận executor function có 2 tham số: resolve và reject.' },
        { line: 4, text: 'Gọi resolve() chuyển trạng thái sang Fulfilled, kích hoạt hàm trong .then().' },
        { line: 6, text: 'Gọi reject() chuyển trạng thái sang Rejected, kích hoạt hàm trong .catch().' },
        { line: 18, text: '.finally() luôn luôn chạy dù thành công hay thất bại để dọn dẹp loading.' }
      ],
      commonMistakes: [
        'Quên return Promise trong chuỗi .then() dẫn đến việc các .then() sau nhận kết quả là undefined.'
      ],
      whenToUse: 'Dùng khi bọc các API bất đồng bộ cũ, đọc ghi file, kết nối socket hoặc gọi mạng.',
      whenNotToUse: 'Không lồng các khối .then() vào nhau như kiểu callback (hãy return để chuỗi .then() luôn phẳng).',
      realWorldUseCase: 'Fetch API của trình duyệt trả về trực tiếp một Promise giúp tải tài nguyên mạng hiện đại.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-14-3',
    title: 'Thực hành: Mô phỏng xác thực người dùng bằng Promise',
    description: 'Chạy thử hàm kiểm tra đăng nhập. Nếu username là "admin" thì resolve thành công, ngược lại reject lỗi.',
    starterCode: `function checkLogin(username) {
  return new Promise((resolve, reject) => {
    if (username === "admin") {
      resolve("Chào mừng Quản trị viên!");
    } else {
      reject("Từ chối truy cập: Tài khoản không có quyền.");
    }
  });
}

checkLogin("admin")
  .then(msg => console.log("Thành công:", msg))
  .catch(err => console.log("Lỗi:", err));`,
    expectedConsoleOutput: 'Thành công: Chào mừng Quản trị viên!',
    hint: 'resolve trả về kết quả cho khối .then() tiếp nhận.',
    language: 'javascript'
  },
  exercises: {
    basic: {
      id: 'ex-14-3-1',
      lessonId: 'les-14-3',
      title: 'Bài tập Cơ bản: Khởi tạo Promise kiểm tra số chẵn',
      difficulty: 'basic',
      learningObjectiveIds: ['LO14.3.1'],
      description: 'Tạo hàm `checkEven(n)` trả về Promise. Nếu n là số chẵn, resolve `"Số chẵn hợp lệ"`; nếu lẻ, reject `"Lỗi số lẻ"`. Gọi với số 8 và in kết quả trong .then(): `Kết quả: [msg]`.',
      starterCode: `function checkEven(n) {
  // Tạo Promise kiểm tra n % 2 === 0:
}

checkEven(8).then(msg => console.log("Kết quả:", msg));`,
      solutionCode: `function checkEven(n) {
  return new Promise((resolve, reject) => {
    if (n % 2 === 0) {
      resolve("Số chẵn hợp lệ");
    } else {
      reject("Lỗi số lẻ");
    }
  });
}

checkEven(8).then(msg => console.log("Kết quả:", msg));`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra số 8 là số chẵn hợp lệ',
          expectedOutput: 'Kết quả: Số chẵn hợp lệ'
        }
      ],
      hints: ['return new Promise((resolve, reject) => { ... })'],
      explanation: 'Promise đóng gói trạng thái kiểm tra logic bất đồng bộ.'
    },
    intermediate: {
      id: 'ex-14-3-2',
      lessonId: 'les-14-3',
      title: 'Bài tập Trung bình: Xâu chuỗi Promise Chaining biến đổi dữ liệu',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO14.3.2'],
      description: 'Tạo chuỗi Promise bắt đầu với `Promise.resolve(5)`: .then() thứ nhất nhân 2 (thành 10), .then() thứ hai cộng thêm 20 (thành 30). In ra: `Kết quả chuỗi Promise: 30`.',
      starterCode: `// Xâu chuỗi Promise bắt đầu từ 5:
Promise.resolve(5)
  // .then nhân 2
  // .then cộng 20
  .then(finalVal => console.log("Kết quả chuỗi Promise:", finalVal));`,
      solutionCode: `Promise.resolve(5)
  .then(val => val * 2)
  .then(val => val + 20)
  .then(finalVal => console.log("Kết quả chuỗi Promise:", finalVal));`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra chuỗi biến đổi: 5 * 2 + 20 = 30',
          expectedOutput: 'Kết quả chuỗi Promise: 30'
        }
      ],
      hints: ['Mỗi .then() return giá trị để .then() sau nhận làm tham số'],
      explanation: 'Promise chaining giúp biến đổi dữ liệu tuần tự và giữ mã nguồn phẳng.'
    },
    challenge: {
      id: 'ex-14-3-3',
      lessonId: 'les-14-3',
      title: 'Bài tập Thử thách: Bắt lỗi tập trung và khối .finally()',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO14.3.2'],
      description: 'Gọi hàm `Promise.reject("Mất kết nối máy chủ")`. Dùng `.catch()` để in `Bắt lỗi: [lỗi]`, và dùng `.finally()` in `Hoàn tất phiên kiểm tra`.',
      starterCode: `// Viết chuỗi xử lý lỗi và dọn dẹp:
`,
      solutionCode: `Promise.reject("Mất kết nối máy chủ")
  .catch(err => {
    console.log("Bắt lỗi:", err);
  })
  .finally(() => {
    console.log("Hoàn tất phiên kiểm tra");
  });`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra bắt đúng lỗi và chạy khối finally',
          expectedOutput: 'Bắt lỗi: Mất kết nối máy chủ\nHoàn tất phiên kiểm tra'
        }
      ],
      hints: ['.catch(err => ...).finally(() => ...)'],
      explanation: '.finally() luôn được kích hoạt dù Promise thành công hay thất bại.'
    }
  },
  quiz: {
    id: 'quiz-14-3',
    lessonId: 'les-14-3',
    title: 'Trắc nghiệm: Vòng đời Promise',
    passingScore: 70,
    questions: [
      {
        id: 'q-14-3-1',
        lessonId: 'les-14-3',
        learningObjectiveId: 'LO14.3.1',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'Khi một Promise đã chuyển sang trạng thái Fulfilled hoặc Rejected, trạng thái của nó có thể thay đổi thêm lần nào nữa không?',
        options: [
          { id: 'a', text: 'Có thể thay đổi thêm 1 lần' },
          { id: 'b', text: 'Không, trạng thái của Promise là bất biến một khi đã Settled' },
          { id: 'c', text: 'Có thể reset lại về Pending bằng hàm reset()' },
          { id: 'd', text: 'Tùy thuộc vào lệnh resolve() được gọi bao nhiêu lần' }
        ],
        correctAnswer: 'b',
        explanation: 'Một khi Promise đã Settled (Fulfilled hoặc Rejected), trạng thái của nó cố định vĩnh viễn.',
        relatedLessonId: 'les-14-3'
      }
    ]
  },
  summary: [
    'Promise có 3 trạng thái: Pending, Fulfilled và Rejected.',
    'Dùng .then() để đón nhận kết quả thành công, .catch() để bắt lỗi tập trung.',
    'Khối .finally() luôn luôn chạy để dọn dẹp trạng thái loading.'
  ],
  suggestedBookmarks: [
    'So sánh chi tiết Callback vs Promise trong xử lý bất đồng bộ',
    'Cơ chế Microtask của Promise.resolve() trong Event Loop'
  ]
};

export const LESSON_14_4: Lesson = {
  id: 'les-14-4',
  moduleId: 'mod-14',
  track: 'javascript',
  language: 'javascript',
  title: '14.4 async/await hiện đại và xử lý lỗi với try/catch',
  order: 4,
  durationMinutes: 55,
  difficulty: 'Nâng cao',
  prerequisites: [
    'Đã hiểu vững Promise ở Bài 14.3',
    'Biết khối try...catch'
  ],
  learningObjectives: [
    {
      id: 'LO14.4.1',
      code: 'LO14.4.1',
      title: 'Cú pháp async/await (Syntactic Sugar cho Promise)',
      description: 'Viết mã bất đồng bộ có cú pháp tuần tự trực quan giống như mã đồng bộ thông thường.',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    },
    {
      id: 'LO14.4.2',
      code: 'LO14.4.2',
      title: 'Bắt lỗi chuyên nghiệp bằng khối try/catch/finally',
      description: 'Sử dụng cấu trúc try/catch để xử lý cả lỗi mạng (Rejected Promise) lẫn lỗi cú pháp/runtime.',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    }
  ],
  sections: [
    {
      id: 'sec-14-4-1',
      lessonId: 'les-14-4',
      order: 1,
      conceptName: 'async/await là gì?',
      title: '1. Cú pháp async và await trong ES8 (ES2017)',
      explanation: '`async/await` là lớp vỏ cú pháp (Syntactic Sugar) được xây dựng trên nền tảng của Promise. Từ khóa `async` đặt trước một hàm biến hàm đó luôn trả về một Promise. Từ khóa `await` chỉ được sử dụng bên trong hàm async, có tác dụng tạm dừng việc thực thi hàm cho đến khi Promise được giải quyết (Settled), giúp mã bất đồng bộ đọc như mã đồng bộ.',
      syntax: 'async function fetchData() {\n  try {\n    const res = await somePromise();\n    console.log(res);\n  } catch (err) {\n    console.error(err);\n  }\n}',
      codeExample: `// Hàm trả về Promise
const fetchUser = id => {
  return new Promise((resolve, reject) => {
    if (id > 0) resolve({ id, name: "Nguyễn Văn An", role: "Dev" });
    else reject(new Error("ID người dùng không hợp lệ"));
  });
};

// Sử dụng async/await với try/catch
async function displayUserInfo(userId) {
  try {
    console.log("Đang tải dữ liệu...");
    const user = await fetchUser(userId);
    console.log("Thông tin:", user.name, "•", user.role);
  } catch (error) {
    console.log("Xảy ra lỗi:", error.message);
  } finally {
    console.log("Kết thúc tác vụ.");
  }
}

displayUserInfo(1);`,
      lineByLineExplanation: [
        { line: 10, text: 'Khai báo hàm async cho phép dùng từ khóa await bên trong.' },
        { line: 13, text: 'await dừng luồng hàm displayUserInfo cho đến khi fetchUser hoàn thành.' },
        { line: 15, text: 'Nếu Promise bị reject, khối catch ngay lập tức tóm được error.' },
        { line: 17, text: 'Khối finally luôn chạy để tắt loading spinner.' }
      ],
      commonMistakes: [
        'Dùng await ngoài hàm không có từ khóa async (trong môi trường không hỗ trợ Top-level await).'
      ],
      whenToUse: 'Luôn ưu tiên async/await thay thế cho .then()/.catch() trong toàn bộ ứng dụng JavaScript hiện đại.',
      whenNotToUse: 'Tránh dùng await tuần tự khi các tác vụ độc lập có thể chạy song song (hãy kết hợp Promise.all).',
      realWorldUseCase: 'Chuẩn mực trong React (useEffect, custom hooks) và Node.js Express backend khi gọi cơ sở dữ liệu.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-14-4',
    title: 'Thực hành: Lấy dữ liệu sản phẩm tuần tự với async/await',
    description: 'Chạy thử hàm async lấy chi tiết đơn hàng và tính tổng hóa đơn một cách tuần tự, rõ ràng.',
    starterCode: `const getProduct = () => Promise.resolve({ title: "Khóa học Fullstack", price: 1200 });
const getCoupon = () => Promise.resolve(200);

async function checkout() {
  const product = await getProduct();
  const discount = await getCoupon();
  const total = product.price - discount;
  console.log("Sản phẩm:", product.title);
  console.log("Thanh toán cuối:", total, "USD");
}

checkout();`,
    expectedConsoleOutput: 'Sản phẩm: Khóa học Fullstack\nThanh toán cuối: 1000 USD',
    hint: 'await giải phóng giá trị từ Promise và gán trực tiếp cho biến.',
    language: 'javascript'
  },
  exercises: {
    basic: {
      id: 'ex-14-4-1',
      lessonId: 'les-14-4',
      title: 'Bài tập Cơ bản: Viết hàm async trả về lời chào',
      difficulty: 'basic',
      learningObjectiveIds: ['LO14.4.1'],
      description: 'Khai báo hàm `async function getGreeting(name)` trả về chuỗi `"Xin chào, " + name`. Gọi hàm với `"Thầy cô"` và dùng `await` (hoặc `.then()`) để in ra: `Lời chào: Xin chào, Thầy cô`.',
      starterCode: `// Viết hàm async getGreeting:


async function run() {
  // Gọi hàm và in kết quả:
}

run();`,
      solutionCode: `async function getGreeting(name) {
  return "Xin chào, " + name;
}

async function run() {
  const msg = await getGreeting("Thầy cô");
  console.log("Lời chào:", msg);
}

run();`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra in đúng lời chào',
          expectedOutput: 'Lời chào: Xin chào, Thầy cô'
        }
      ],
      hints: ['Hàm async tự động bọc kết quả trả về trong một Promise.resolve()'],
      explanation: 'Mọi giá trị return từ hàm async đều trở thành Promise.'
    },
    intermediate: {
      id: 'ex-14-4-2',
      lessonId: 'les-14-4',
      title: 'Bài tập Trung bình: Xử lý lỗi bằng try/catch với async/await',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO14.4.2'],
      description: 'Cho hàm `verifyToken(token)` trả về `Promise.reject("Token hết hạn")`. Viết hàm `async function authenticate()` dùng `try/catch` gọi hàm trên. Trong khối catch, in ra: `Lỗi bảo mật: Token hết hạn`.',
      starterCode: `const verifyToken = token => Promise.reject("Token hết hạn");

async function authenticate() {
  // Dùng try/catch bao bọc await verifyToken:
}

authenticate();`,
      solutionCode: `const verifyToken = token => Promise.reject("Token hết hạn");

async function authenticate() {
  try {
    await verifyToken("abc");
  } catch (err) {
    console.log("Lỗi bảo mật:", err);
  }
}

authenticate();`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra bắt đúng lỗi reject qua try/catch',
          expectedOutput: 'Lỗi bảo mật: Token hết hạn'
        }
      ],
      hints: ['try { await verifyToken("abc"); } catch (err) { ... }'],
      explanation: 'await biến Rejected Promise thành ngoại lệ (Exception) để catch đón nhận.'
    },
    challenge: {
      id: 'ex-14-4-3',
      lessonId: 'les-14-4',
      title: 'Bài tập Thử thách: Cơ chế Retry tự động thử lại khi thất bại',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO14.4.1', 'LO14.4.2'],
      description: 'Viết hàm `fetchWithRetry(fn, retries = 2)`. Dùng vòng lặp while trong async function để thử chạy `await fn()`. Nếu lỗi, giảm số lượt thử; nếu hết lượt mà vẫn lỗi thì in `Thử lại thất bại toàn bộ`. Mô phỏng với hàm luôn lỗi để kiểm tra.',
      starterCode: `let attempts = 0;
const failingTask = () => {
  attempts++;
  return Promise.reject("Lỗi máy chủ lần " + attempts);
};

async function fetchWithRetry(fn, retries = 2) {
  // Cài đặt retry loop:
}

fetchWithRetry(failingTask, 2);`,
      solutionCode: `let attempts = 0;
const failingTask = () => {
  attempts++;
  return Promise.reject("Lỗi máy chủ lần " + attempts);
};

async function fetchWithRetry(fn, retries = 2) {
  while (retries >= 0) {
    try {
      return await fn();
    } catch (err) {
      if (retries === 0) {
        console.log("Thử lại thất bại toàn bộ");
        return;
      }
      retries--;
    }
  }
}

fetchWithRetry(failingTask, 2);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra retry hết số lần cho phép',
          expectedOutput: 'Thử lại thất bại toàn bộ'
        }
      ],
      hints: ['Dùng while loop bao bọc try/catch'],
      explanation: 'Mẫu Retry Pattern rất thông dụng trong ứng dụng thực tế khi mạng chập chờn.'
    }
  },
  quiz: {
    id: 'quiz-14-4',
    lessonId: 'les-14-4',
    title: 'Trắc nghiệm: async/await',
    passingScore: 70,
    questions: [
      {
        id: 'q-14-4-1',
        lessonId: 'les-14-4',
        learningObjectiveId: 'LO14.4.1',
        type: 'multiple_choice',
        difficulty: 'easy',
        prompt: 'Một hàm có từ khóa async phía trước sẽ luôn trả về kiểu dữ liệu gì?',
        options: [
          { id: 'a', text: 'Một Promise' },
          { id: 'b', text: 'Kiểu dữ liệu nguyên thủy trực tiếp' },
          { id: 'c', text: 'undefined' },
          { id: 'd', text: 'Một callback' }
        ],
        correctAnswer: 'a',
        explanation: 'Hàm async luôn luôn tự động bọc kết quả trả về thành một Promise.',
        relatedLessonId: 'les-14-4'
      }
    ]
  },
  summary: [
    'async/await biến mã bất đồng bộ thành cú pháp tuần tự phẳng, dễ đọc và dễ bảo trì.',
    'Bắt lỗi bất đồng bộ bằng khối try/catch/finally quen thuộc.',
    'Luôn kiểm tra các tác vụ độc lập để tránh await tuần tự gây chậm ứng dụng.'
  ],
  suggestedBookmarks: [
    'Top-level await trong chuẩn ES2022',
    'Chuyển đổi từ Promise Chaining sang async/await trong dự án thực tế'
  ]
};

export const LESSON_14_5: Lesson = {
  id: 'les-14-5',
  moduleId: 'mod-14',
  track: 'javascript',
  language: 'javascript',
  title: '14.5 Chạy song song nhiều tác vụ với Promise.all()',
  order: 5,
  durationMinutes: 45,
  difficulty: 'Trung bình',
  prerequisites: [
    'Đã học Promise và async/await',
    'Hiểu các tác vụ mạng độc lập'
  ],
  learningObjectives: [
    {
      id: 'LO14.5.1',
      code: 'LO14.5.1',
      title: 'Tối ưu hóa hiệu năng với Promise.all()',
      description: 'Chạy đồng thời nhiều tác vụ bất đồng bộ độc lập song song (parallel), giảm thời gian chờ của người dùng.',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    },
    {
      id: 'LO14.5.2',
      code: 'LO14.5.2',
      title: 'So sánh Promise.all, Promise.allSettled và Promise.race',
      description: 'Phân biệt cơ chế Fail-fast của Promise.all với sự an toàn của Promise.allSettled.',
      bloomLevel: 'Analyze',
      masteryPercentage: 86
    }
  ],
  sections: [
    {
      id: 'sec-14-5-1',
      lessonId: 'les-14-5',
      order: 1,
      conceptName: 'Song song hóa tác vụ với Promise.all()',
      title: '1. Sức mạnh chạy song song của Promise.all()',
      explanation: 'Nếu bạn có 3 tác vụ mỗi tác vụ mất 1 giây: nếu dùng `await` tuần tự, bạn sẽ mất 3 giây. Nhưng nếu dùng `Promise.all([p1, p2, p3])`, trình duyệt sẽ phát lệnh cùng một lúc và hoàn thành chỉ sau đúng 1 giây! Tuy nhiên, Promise.all có cơ chế Fail-Fast: chỉ cần 1 Promise bị lỗi, toàn bộ mảng sẽ reject ngay lập tức. Để an toàn, ES2020 bổ sung `Promise.allSettled()` chờ tất cả chạy xong bất kể thành công hay thất bại.',
      syntax: 'const [res1, res2] = await Promise.all([task1(), task2()]);',
      codeExample: `// Giả lập 2 API độc lập:
const getCategories = () => Promise.resolve(["Áo", "Quần", "Phụ kiện"]);
const getBanners = () => Promise.resolve(["Banner 1", "Banner 2"]);

async function loadHomePage() {
  console.log("Bắt đầu tải trang chủ...");
  
  // Chạy song song 2 tác vụ cùng lúc:
  const [categories, banners] = await Promise.all([
    getCategories(),
    getBanners()
  ]);

  console.log("Danh mục:", categories.length, "mục");
  console.log("Banner:", banners.length, "ảnh");
}

loadHomePage();`,
      lineByLineExplanation: [
        { line: 8, text: 'Promise.all nhận một mảng các Promise và kích hoạt song song.' },
        { line: 9, text: 'Dùng Array Destructuring [categories, banners] để nhận mảng kết quả tương ứng.' },
        { line: 14, text: 'Tối ưu thời gian tải trang tối đa.' }
      ],
      commonMistakes: [
        'Dùng Promise.all cho các tác vụ phụ thuộc dữ liệu của nhau (tác vụ 2 cần ID của tác vụ 1).'
      ],
      whenToUse: 'Dùng khi tải dữ liệu cho dashboard, trang chủ gồm nhiều widget độc lập (thời tiết, tin tức, giỏ hàng).',
      whenNotToUse: 'Không dùng Promise.all khi một tác vụ lỗi không được phép làm hỏng các tác vụ khác (hãy dùng Promise.allSettled).',
      realWorldUseCase: 'Khởi động ứng dụng di động: tải đồng thời cấu hình, thông tin người dùng và danh sách thông báo.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-14-5',
    title: 'Thực hành: Tải đồng thời thông tin User và Danh sách thông báo',
    description: 'Chạy thử mã nguồn tải song song 2 nguồn dữ liệu bằng Promise.all và in kết quả tổng hợp.',
    starterCode: `const loadProfile = () => Promise.resolve({ name: "Minh", role: "SV" });
const loadNotifications = () => Promise.resolve(["Tin mới 1", "Lịch học tuần này"]);

async function initDashboard() {
  const [profile, notifs] = await Promise.all([loadProfile(), loadNotifications()]);
  console.log("Người dùng:", profile.name);
  console.log("Số thông báo:", notifs.length);
}

initDashboard();`,
    expectedConsoleOutput: 'Người dùng: Minh\nSố thông báo: 2',
    hint: 'Promise.all giải quyết toàn bộ các promise trong mảng.',
    language: 'javascript'
  },
  exercises: {
    basic: {
      id: 'ex-14-5-1',
      lessonId: 'les-14-5',
      title: 'Bài tập Cơ bản: Tính tổng kết quả từ 2 tác vụ song song',
      difficulty: 'basic',
      learningObjectiveIds: ['LO14.5.1'],
      description: 'Cho 2 hàm `getSales() => Promise.resolve(100)` và `getBonus() => Promise.resolve(50)`. Dùng `Promise.all` để tính tổng thu nhập và in ra: `Tổng thu nhập: 150`.',
      starterCode: `const getSales = () => Promise.resolve(100);
const getBonus = () => Promise.resolve(50);

async function calcIncome() {
  // Dùng Promise.all:
}

calcIncome();`,
      solutionCode: `const getSales = () => Promise.resolve(100);
const getBonus = () => Promise.resolve(50);

async function calcIncome() {
  const [sales, bonus] = await Promise.all([getSales(), getBonus()]);
  console.log("Tổng thu nhập:", sales + bonus);
}

calcIncome();`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra tổng 100 + 50 = 150',
          expectedOutput: 'Tổng thu nhập: 150'
        }
      ],
      hints: ['const [sales, bonus] = await Promise.all([getSales(), getBonus()]);'],
      explanation: 'Promise.all gom kết quả thành mảng theo đúng thứ tự truyền vào.'
    },
    intermediate: {
      id: 'ex-14-5-2',
      lessonId: 'les-14-5',
      title: 'Bài tập Trung bình: Xử lý cơ chế Fail-fast của Promise.all',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO14.5.2'],
      description: 'Cho mảng gồm 1 Promise thành công `"Data A"` và 1 Promise thất bại `Promise.reject("Lỗi Data B")`. Dùng `try/catch` bọc `Promise.all()`. Trong catch, in: `Lỗi phát sinh: Lỗi Data B`.',
      starterCode: `async function testFailFast() {
  // Thử Promise.all với 1 task lỗi:
}

testFailFast();`,
      solutionCode: `async function testFailFast() {
  try {
    await Promise.all([
      Promise.resolve("Data A"),
      Promise.reject("Lỗi Data B")
    ]);
  } catch (err) {
    console.log("Lỗi phát sinh:", err);
  }
}

testFailFast();`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra catch bắt đúng lỗi của tác vụ hỏng',
          expectedOutput: 'Lỗi phát sinh: Lỗi Data B'
        }
      ],
      hints: ['Promise.all dừng ngay lập tức khi gặp reject đầu tiên'],
      explanation: 'Đặc tính Fail-Fast giúp ứng dụng không tốn thời gian chờ các tác vụ còn lại nếu một điều kiện tiên quyết đã hỏng.'
    },
    challenge: {
      id: 'ex-14-5-3',
      lessonId: 'les-14-5',
      title: 'Bài tập Thử thách: Ứng dụng Promise.allSettled an toàn',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO14.5.2'],
      description: 'Dùng `Promise.allSettled([Promise.resolve("OK"), Promise.reject("Fail")])`. Lọc và đếm số lượng tác vụ có `status === "fulfilled"`. In ra: `Số tác vụ thành công: 1/2`.',
      starterCode: `async function checkAllSettled() {
  // Cài đặt Promise.allSettled và đếm tác vụ thành công:
}

checkAllSettled();`,
      solutionCode: `async function checkAllSettled() {
  const results = await Promise.allSettled([
    Promise.resolve("OK"),
    Promise.reject("Fail")
  ]);
  const successCount = results.filter(r => r.status === "fulfilled").length;
  console.log(\`Số tác vụ thành công: \${successCount}/\${results.length}\`);
}

checkAllSettled();`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra đếm đúng 1/2 tác vụ fulfilled',
          expectedOutput: 'Số tác vụ thành công: 1/2'
        }
      ],
      hints: ['results.filter(r => r.status === "fulfilled").length'],
      explanation: 'Promise.allSettled luôn chờ mọi promise kết thúc và trả về object {status, value/reason}.'
    }
  },
  quiz: {
    id: 'quiz-14-5',
    lessonId: 'les-14-5',
    title: 'Trắc nghiệm: Promise Utility Methods',
    passingScore: 70,
    questions: [
      {
        id: 'q-14-5-1',
        lessonId: 'les-14-5',
        learningObjectiveId: 'LO14.5.2',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'Nếu một trong các Promise truyền vào Promise.all() bị Rejected, hành vi của Promise.all sẽ là gì?',
        options: [
          { id: 'a', text: 'Bỏ qua promise lỗi và trả về các promise thành công còn lại' },
          { id: 'b', text: 'Lập tức chuyển sang Rejected ngay (Fail-Fast) với lý do lỗi của promise đó' },
          { id: 'c', text: 'Chờ tất cả xong rồi mới ném lỗi' },
          { id: 'd', text: 'Tự động thử lại tác vụ bị lỗi' }
        ],
        correctAnswer: 'b',
        explanation: 'Promise.all có cơ chế Fail-fast: chỉ cần một promise lỗi là toàn bộ Promise.all bị reject ngay.',
        relatedLessonId: 'les-14-5'
      }
    ]
  },
  summary: [
    'Promise.all() chạy song song các tác vụ độc lập, tối ưu hóa thời gian thực thi.',
    'Promise.all có cơ chế Fail-fast: 1 lỗi thì toàn bộ mảng reject.',
    'Promise.allSettled() là giải pháp thay thế an toàn khi muốn lấy kết quả của từng tác vụ dù có lỗi.'
  ],
  suggestedBookmarks: [
    'So sánh Promise.all vs Promise.allSettled vs Promise.race vs Promise.any',
    'Chiến lược tối ưu hóa Network Waterfall trong ứng dụng Web'
  ]
};

export const JS_MODULE_14_LESSONS: Lesson[] = [
  LESSON_14_1,
  LESSON_14_2,
  LESSON_14_3,
  LESSON_14_4,
  LESSON_14_5
];
