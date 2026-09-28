import { Lesson } from '../../types';

// ==========================================
// MODULE 14: ASYNCHRONOUS JAVASCRIPT
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
  prerequisites: ['Đã học Call Stack cơ bản', 'Hiểu bản chất Single-threaded của JavaScript'],
  learningObjectives: [
    {
      id: 'LO14.1.1',
      code: 'LO14.1.1',
      title: 'Phân biệt xử lý Đồng bộ (Synchronous) và Bất đồng bộ (Asynchronous)',
      description: 'Hiểu tại sao các tác vụ I/O, gọi mạng, đọc file không được chặn (Non-blocking) luồng chính.',
      bloomLevel: 'Understand',
      masteryPercentage: 90
    },
    {
      id: 'LO14.1.2',
      code: 'LO14.1.2',
      title: 'Khám phá cơ chế Event Loop, Web APIs và Callback Queue',
      description: 'Làm chủ chu trình điều phối tác vụ giữa Call Stack, Microtask Queue và Macrotask Queue.',
      bloomLevel: 'Analyze',
      masteryPercentage: 86
    }
  ],
  sections: [
    {
      id: 'sec-14-1-1',
      lessonId: 'les-14-1',
      order: 1,
      conceptName: 'Đồng bộ vs Bất đồng bộ & Vòng lặp sự kiện Event Loop',
      title: '1. Bản chất Single-thread và cơ chế Event Loop',
      explanation: 'JavaScript là ngôn ngữ đơn luồng (Single-threaded) với duy nhất 1 ngăn xếp thực thi (Call Stack). Để không làm đóng băng giao diện khi tải dữ liệu mạng hoặc chờ đợi, JavaScript chuyển các tác vụ tốn thời gian cho môi trường Web APIs (trong trình duyệt) xử lý. Khi xong, kết quả được đẩy vào hàng đợi (Queue), và `Event Loop` sẽ liên tục kiểm tra: khi nào Call Stack hoàn toàn rỗng, nó mới bốc tác vụ từ Queue đưa lên Stack để chạy.',
      syntax: 'console.log("1");\nsetTimeout(() => console.log("2"), 0); // Bất đồng bộ (Web API)\nconsole.log("3");\n// Thứ tự in ra: 1 -> 3 -> 2',
      codeExample: `// Minh họa thứ tự thực thi của Event Loop
console.log("A. Bắt đầu luồng đồng bộ");

setTimeout(() => {
  console.log("C. Tác vụ bất đồng bộ từ Callback Queue");
}, 0);

console.log("B. Kết thúc luồng đồng bộ");`,
      lineByLineExplanation: [
        { line: 2, text: 'In ngay lập tức "A. Bắt đầu luồng đồng bộ" trên Call Stack.' },
        { line: 4, text: 'setTimeout(..., 0) chuyển callback sang Web APIs, dù 0ms nhưng phải xếp hàng chờ ở Macrotask Queue.' },
        { line: 8, text: 'In "B. Kết thúc luồng đồng bộ" trước khi Call Stack rỗng, sau đó Event Loop mới cho "C" chạy.' }
      ],
      commonMistakes: [
        'Nghĩ rằng setTimeout(fn, 0) sẽ chạy ngay lập tức (thực tế nó phải chờ Call Stack rỗng hoàn toàn).'
      ],
      whenToUse: 'Hiểu nguyên lý để giải thích tại sao gọi API, thao tác Database, hẹn giờ lại chạy bất đồng bộ.',
      whenNotToUse: 'Không viết vòng lặp vô tận (while true) trên luồng chính vì sẽ làm tê liệt Event Loop.',
      realWorldUseCase: 'Giữ giao diện mượt mà 60fps trong lúc ngầm tải dữ liệu từ máy chủ.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-14-1',
    title: 'Thực hành dự đoán thứ tự thực thi Event Loop',
    description: 'Chạy thử đoạn mã kết hợp đồng bộ và setTimeout để kiểm chứng thứ tự in ra console.',
    starterCode: `console.log("Bước 1: Chuẩn bị");

setTimeout(() => {
  console.log("Bước 3: Tác vụ hẹn giờ");
}, 0);

console.log("Bước 2: Xử lý xong");`,
    expectedConsoleOutput: 'Bước 1: Chuẩn bị\nBước 2: Xử lý xong\nBước 3: Tác vụ hẹn giờ',
    hint: 'Mã đồng bộ luôn chạy trước, tác vụ trong setTimeout luôn chạy sau cùng.'
  },
  exercises: {
    basic: {
      id: 'ex-14-1-1',
      lessonId: 'les-14-1',
      title: 'Bài tập Cơ bản: Khái niệm Non-blocking I/O trong JavaScript',
      difficulty: 'basic',
      learningObjectiveIds: ['LO14.1.1'],
      description: 'Mô hình xử lý bất đồng bộ của JavaScript có làm chặn (chờ đợi) luồng chính của giao diện không? Trả lời "Co" hoặc "Khong". In kết quả.',
      starterCode: `const isBlocking = "Khong";
console.log("Có làm nghẽn giao diện không:", isBlocking);`,
      solutionCode: `const isBlocking = "Khong";
console.log("Có làm nghẽn giao diện không:", isBlocking);`,
      testCases: [
        { id: 'tc-1', description: 'Non-blocking không làm nghẽn', expectedOutput: 'Có làm nghẽn giao diện không: Khong' }
      ],
      hints: ['Non-blocking I/O chuyển tác vụ nặng cho nền Web API xử lý'],
      explanation: 'JavaScript có cơ chế non-blocking giúp giao diện không bị giật lag khi tải tài nguyên.'
    },
    intermediate: {
      id: 'ex-14-1-2',
      lessonId: 'les-14-1',
      title: 'Bài tập Trung bình: Thứ tự ưu tiên giữa Microtask và Macrotask',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO14.1.2'],
      description: 'Trong Event Loop, hàng đợi Microtask (Promise) có độ ưu tiên cao hơn Macrotask (setTimeout). Khi cả hai cùng sẵn sàng, cái nào được Event Loop thực thi trước: "Promise" hay "setTimeout"? In kết quả.',
      starterCode: `const higherPriority = "Promise";
console.log("Tác vụ ưu tiên chạy trước:", higherPriority);`,
      solutionCode: `const higherPriority = "Promise";
console.log("Tác vụ ưu tiên chạy trước:", higherPriority);`,
      testCases: [
        { id: 'tc-1', description: 'Microtask Promise ưu tiên', expectedOutput: 'Tác vụ ưu tiên chạy trước: Promise' }
      ],
      hints: ['Microtask Queue luôn được rút cạn trước khi chuyển sang Macrotask'],
      explanation: 'Promise callback nằm ở Microtask Queue nên luôn được ưu tiên thực thi trước setTimeout callback.'
    },
    challenge: {
      id: 'ex-14-1-3',
      lessonId: 'les-14-1',
      title: 'Bài tập Thử thách: Giải phóng Call Stack với setTimeout đệ quy',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO14.1.2'],
      description: 'Mô phỏng hàm asyncWorker(count) đếm lùi từ 3 về 1. Ở mỗi bước in "Tiến trình [count]", khi count = 0 in "Hoàn tất". In kết quả mô phỏng các bước chạy đồng bộ.',
      starterCode: `function runWorkerSteps() {
  for (let i = 3; i >= 1; i--) {
    console.log("Tiến trình", i);
  }
  console.log("Hoàn tất");
}

runWorkerSteps();`,
      solutionCode: `function runWorkerSteps() {
  for (let i = 3; i >= 1; i--) {
    console.log("Tiến trình", i);
  }
  console.log("Hoàn tất");
}
runWorkerSteps();`,
      testCases: [
        { id: 'tc-1', description: 'Tiến trình 3-2-1', expectedOutput: 'Tiến trình 3\nTiến trình 2\nTiến trình 1\nHoàn tất' }
      ],
      hints: ['Lặp từ 3 về 1 và in Hoàn tất'],
      explanation: 'Hiểu tiến trình điều phối tác vụ tuần tự và cách ngắt quãng công việc lớn thành các khối nhỏ.'
    }
  },
  quiz: {
    id: 'quiz-14-1',
    lessonId: 'les-14-1',
    title: 'Trắc nghiệm Event Loop',
    passingScore: 70,
    questions: []
  },
  summary: [
    'JavaScript là ngôn ngữ đơn luồng (Single-thread) với cơ chế non-blocking.',
    'Event Loop điều phối các tác vụ bất đồng bộ từ Queue lên Call Stack khi Call Stack rỗng.'
  ],
  suggestedBookmarks: ['Cơ chế hoạt động Event Loop', 'Microtask vs Macrotask']
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
  prerequisites: ['Đã học Callback và Event Loop'],
  learningObjectives: [
    {
      id: 'LO14.2.1',
      code: 'LO14.2.1',
      title: 'Sử dụng setTimeout để trì hoãn và hủy bằng clearTimeout',
      description: 'Xây dựng thông báo tự tắt (Toast notification) và kỹ thuật Debounce.',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    },
    {
      id: 'LO14.2.2',
      code: 'LO14.2.2',
      title: 'Tạo chu kỳ lặp với setInterval và ngắt bằng clearInterval',
      description: 'Xây dựng bộ đếm thời gian (Countdown timer) và đồng hồ kỹ thuật số.',
      bloomLevel: 'Apply',
      masteryPercentage: 88
    }
  ],
  sections: [
    {
      id: 'sec-14-2-1',
      lessonId: 'les-14-2',
      order: 1,
      conceptName: 'setTimeout và setInterval',
      title: '1. Bộ đôi định thời: setTimeout và setInterval',
      explanation: '`setTimeout(callback, delay)` chạy callback DUY NHẤT 1 LẦN sau khoảng thời gian `delay` (tính bằng mili-giây). `setInterval(callback, interval)` lặp lại callback LIÊN TỤC sau mỗi chu kỳ. Cả hai hàm đều trả về một `timerId`, dùng để hủy bỏ tiến trình bằng `clearTimeout(timerId)` hoặc `clearInterval(timerId)`.',
      syntax: 'const timerId = setTimeout(() => {}, 1000); // 1 giây\nclearTimeout(timerId);\n\nconst intervalId = setInterval(() => {}, 1000);\nclearInterval(intervalId);',
      codeExample: `// Giả lập đồng hồ đếm ngược 3 giây
let secondsLeft = 3;

const countdown = {
  tick() {
    if (secondsLeft > 0) {
      console.log(\`Đếm ngược: \${secondsLeft}s\`);
      secondsLeft--;
    } else {
      console.log("Hết giờ! Đã gọi clearInterval.");
    }
  }
};

countdown.tick();
countdown.tick();
countdown.tick();
countdown.tick();`,
      lineByLineExplanation: [
        { line: 6, text: 'Mỗi chu kỳ giảm số giây còn lại.' },
        { line: 9, text: 'Khi về 0, ngắt timer để dọn dẹp bộ nhớ.' }
      ],
      commonMistakes: [
        'Quên gọi clearInterval() khiến bộ hẹn giờ tiếp tục chạy vĩnh viễn ngầm trong bộ nhớ, gây tràn RAM và hao pin thiết bị.'
      ],
      whenToUse: 'Dùng setTimeout cho debounce tìm kiếm, tự động đóng thông báo; dùng setInterval cho đồng hồ hiển thị, slideshow.',
      whenNotToUse: 'Không dùng setInterval cho các animation mượt mà (hãy dùng requestAnimationFrame).',
      realWorldUseCase: 'Tự động đóng thông báo Toast thành công sau 3 giây: `setTimeout(() => hideToast(), 3000);`'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-14-2',
    title: 'Thực hành tính toán mili-giây quy đổi',
    description: 'Quy đổi 2.5 giây ra số mili-giây chuẩn để truyền vào setTimeout.',
    starterCode: `const seconds = 2.5;
const delayMs = seconds * 1000;

console.log("Độ trễ tính bằng mili-giây:", delayMs);`,
    expectedConsoleOutput: 'Độ trễ tính bằng mili-giây: 2500',
    hint: '1 giây = 1000 mili-giây.'
  },
  exercises: {
    basic: {
      id: 'ex-14-2-1',
      lessonId: 'les-14-2',
      title: 'Bài tập Cơ bản: Hàm hủy bộ đếm setInterval',
      difficulty: 'basic',
      learningObjectiveIds: ['LO14.2.2'],
      description: 'Để ngắt một vòng lặp thời gian tạo bởi setInterval, ta gọi hàm nào: "clearTimeout" hay "clearInterval"? In tên hàm ra màn hình.',
      starterCode: `const clearFunction = "clearInterval";
console.log("Hàm ngắt chu kỳ:", clearFunction);`,
      solutionCode: `const clearFunction = "clearInterval";
console.log("Hàm ngắt chu kỳ:", clearFunction);`,
      testCases: [
        { id: 'tc-1', description: 'clearInterval', expectedOutput: 'Hàm ngắt chu kỳ: clearInterval' }
      ],
      hints: ['setInterval đi kèm với clearInterval'],
      explanation: 'clearInterval nhận id của setInterval để hủy tiến trình lặp định thời.'
    },
    intermediate: {
      id: 'ex-14-2-2',
      lessonId: 'les-14-2',
      title: 'Bài tập Trung bình: Xây dựng đồng hồ đếm ngược có điểm dừng',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO14.2.2'],
      description: 'Tạo đối tượng stopWatch có startValue = 3. Viết method step() in "Giây [startValue]" và giảm 1; khi startValue = 0 in "Kết thúc đếm ngược". Chạy step() 4 lần.',
      starterCode: `const stopWatch = {
  startValue: 3,
  step() {
    if (this.startValue > 0) {
      console.log("Giây", this.startValue);
      this.startValue--;
    } else {
      console.log("Kết thúc đếm ngược");
    }
  }
};

stopWatch.step();
stopWatch.step();
stopWatch.step();
stopWatch.step();`,
      solutionCode: `const stopWatch = {
  startValue: 3,
  step() {
    if (this.startValue > 0) {
      console.log("Giây", this.startValue);
      this.startValue--;
    } else {
      console.log("Kết thúc đếm ngược");
    }
  }
};
stopWatch.step();
stopWatch.step();
stopWatch.step();
stopWatch.step();`,
      testCases: [
        { id: 'tc-1', description: 'Đếm 3-2-1 và kết thúc', expectedOutput: 'Giây 3\nGiây 2\nGiây 1\nKết thúc đếm ngược' }
      ],
      hints: ['Kiểm tra startValue > 0'],
      explanation: 'Logic dừng tại 0 mô phỏng hành vi gọi clearInterval() trong thực tế.'
    },
    challenge: {
      id: 'ex-14-2-3',
      lessonId: 'les-14-2',
      title: 'Bài tập Thử thách: Kỹ thuật Debounce chống spam click',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO14.2.1'],
      description: 'Kỹ thuật Debounce: hủy bỏ timer cũ nếu có tương tác mới xảy ra trước khi hết giờ. Cho hàm mô phỏng debounceTrigger: lưu lastAction = "Tìm kiếm". Nếu có hành động mới thì cập nhật lastAction. In ra hành động cuối cùng được thực thi.',
      starterCode: `let scheduledAction = null;

function simulateDebounce(newAction) {
  // Hủy hành động trước, chỉ ghi nhận hành động cuối cùng
  scheduledAction = newAction;
}

simulateDebounce("Gõ: Ja");
simulateDebounce("Gõ: Java");
simulateDebounce("Gõ: JavaScript");

console.log("Thực thi tìm kiếm cho:", scheduledAction);`,
      solutionCode: `let scheduledAction = null;
function simulateDebounce(newAction) {
  scheduledAction = newAction;
}
simulateDebounce("Gõ: Ja");
simulateDebounce("Gõ: Java");
simulateDebounce("Gõ: JavaScript");
console.log("Thực thi tìm kiếm cho:", scheduledAction);`,
      testCases: [
        { id: 'tc-1', description: 'Chỉ thực thi từ khóa cuối', expectedOutput: 'Thực thi tìm kiếm cho: Gõ: JavaScript' }
      ],
      hints: ['Debounce giữ lại thao tác cuối cùng'],
      explanation: 'Debounce là kỹ thuật sống còn để tối ưu hóa hiệu năng ô tìm kiếm và gọi API.'
    }
  },
  quiz: {
    id: 'quiz-14-2',
    lessonId: 'les-14-2',
    title: 'Trắc nghiệm Timer API',
    passingScore: 70,
    questions: []
  },
  summary: [
    'setTimeout chạy một lần sau độ trễ, hủy bằng clearTimeout.',
    'setInterval chạy định kỳ, luôn nhớ dọn dẹp bằng clearInterval.'
  ],
  suggestedBookmarks: ['Đồng hồ đếm ngược với setInterval', 'Kỹ thuật Debounce']
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
  prerequisites: ['Đã học Asynchronous và Callback'],
  learningObjectives: [
    {
      id: 'LO14.3.1',
      code: 'LO14.3.1',
      title: '3 trạng thái của một Promise',
      description: 'Hiểu Pending (Đang chờ), Fulfilled (Thành công qua resolve) và Rejected (Thất bại qua reject).',
      bloomLevel: 'Understand',
      masteryPercentage: 90
    },
    {
      id: 'LO14.3.2',
      code: 'LO14.3.2',
      title: 'Xử lý kết quả với .then(), .catch() và .finally()',
      description: 'Chaining Promise để loại bỏ hoàn toàn Callback Hell.',
      bloomLevel: 'Apply',
      masteryPercentage: 88
    }
  ],
  sections: [
    {
      id: 'sec-14-3-1',
      lessonId: 'les-14-3',
      order: 1,
      conceptName: 'Bản chất và 3 trạng thái của Promise',
      title: '1. Khởi tạo Promise và cơ chế Resolve / Reject',
      explanation: '`Promise` (Lời hứa) là đối tượng đại diện cho kết quả của một tác vụ bất đồng bộ trong tương lai. Promise luôn nằm ở một trong 3 trạng thái: (1) `Pending`: Đang tiến hành; (2) `Fulfilled`: Thành công (khi gọi `resolve(data)`); (3) `Rejected`: Thất bại (khi gọi `reject(error)`). Khi đã chuyển sang Fulfilled hoặc Rejected, trạng thái sẽ CỐ ĐỊNH vĩnh viễn (Settled).',
      syntax: 'const myPromise = new Promise((resolve, reject) => {\n  if (thanhCong) resolve(ketQua);\n  else reject(loi);\n});',
      codeExample: `// Giả lập hàm kết nối server trả về Promise
function checkServerStatus(isOnline: boolean) {
  return new Promise((resolve, reject) => {
    if (isOnline) {
      resolve("Máy chủ hoạt động bình thường (200 OK)");
    } else {
      reject("Không thể kết nối đến máy chủ (500 Error)");
    }
  });
}

// Xử lý với .then và .catch
checkServerStatus(true)
  .then(res => console.log("Thành công:", res))
  .catch(err => console.log("Lỗi:", err))
  .finally(() => console.log("Hoàn tất kiểm tra"));`,
      lineByLineExplanation: [
        { line: 5, text: 'Gọi resolve() khi thành công, chuyển Promise sang trạng thái Fulfilled.' },
        { line: 7, text: 'Gọi reject() khi gặp lỗi, chuyển Promise sang trạng thái Rejected.' },
        { line: 14, text: '.then() đón nhận giá trị từ resolve(); .finally() luôn luôn chạy ở cuối.' }
      ],
      commonMistakes: [
        'Quên return trong chuỗi .then() khiến bước tiếp theo nhận giá trị undefined.'
      ],
      whenToUse: 'Dùng khi bọc các tác vụ bất đồng bộ (đọc file, gọi mạng, truy vấn IndexedDB).',
      whenNotToUse: 'Không cần tạo Promise thủ công nếu hàm đã có sẵn Promise (như fetch()).',
      realWorldUseCase: 'Fetch API tải dữ liệu người dùng trả về một Promise.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-14-3',
    title: 'Thực hành tạo Promise giải quyết tức thì',
    description: 'Sử dụng Promise.resolve() để tạo một Promise thành công.',
    starterCode: `Promise.resolve("Dữ liệu đã sẵn sàng")
  .then((data) => {
    console.log("Kết quả:", data);
  });`,
    expectedConsoleOutput: 'Kết quả: Dữ liệu đã sẵn sàng',
    hint: 'Promise.resolve() lập tức chuyển sang trạng thái Fulfilled.'
  },
  exercises: {
    basic: {
      id: 'ex-14-3-1',
      lessonId: 'les-14-3',
      title: 'Bài tập Cơ bản: Trạng thái ban đầu của Promise',
      difficulty: 'basic',
      learningObjectiveIds: ['LO14.3.1'],
      description: 'Khi vừa mới được tạo bằng từ khóa new Promise(...), trước khi resolve hoặc reject được gọi, Promise nằm ở trạng thái nào: "Pending", "Fulfilled" hay "Rejected"? In ra tên trạng thái.',
      starterCode: `const initialState = "Pending";
console.log("Trạng thái ban đầu:", initialState);`,
      solutionCode: `const initialState = "Pending";
console.log("Trạng thái ban đầu:", initialState);`,
      testCases: [
        { id: 'tc-1', description: 'Trạng thái Pending', expectedOutput: 'Trạng thái ban đầu: Pending' }
      ],
      hints: ['Pending có nghĩa là đang chờ giải quyết'],
      explanation: 'Khi mới khởi tạo, Promise luôn ở trạng thái chờ đợi Pending.'
    },
    intermediate: {
      id: 'ex-14-3-2',
      lessonId: 'les-14-3',
      title: 'Bài tập Trung bình: Bắt lỗi với khối .catch()',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO14.3.2'],
      description: 'Tạo một Promise bị từ chối bằng Promise.reject("Hết phiên đăng nhập"). Dùng .catch() để in ra "Bắt lỗi: [lỗi]".',
      starterCode: `Promise.reject("Hết phiên đăng nhập")
  .catch((err) => {
    console.log("Bắt lỗi:", err);
  });`,
      solutionCode: `Promise.reject("Hết phiên đăng nhập")
  .catch((err) => {
    console.log("Bắt lỗi:", err);
  });`,
      testCases: [
        { id: 'tc-1', description: 'Bắt lỗi thành công', expectedOutput: 'Bắt lỗi: Hết phiên đăng nhập' }
      ],
      hints: ['Promise.reject().catch(err => ...)'],
      explanation: '.catch() là phương thức chuyên dụng đón bắt các lỗi phát sinh trong Promise.'
    },
    challenge: {
      id: 'ex-14-3-3',
      lessonId: 'les-14-3',
      title: 'Bài tập Thử thách: Chuỗi biến đổi Promise Chaining',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO14.3.2'],
      description: 'Bắt đầu bằng Promise.resolve(10). Ở .then() thứ nhất nhân đôi (x * 2) và return; ở .then() thứ hai cộng thêm 5 (x + 5) và return; ở .then() thứ ba in ra "Kết quả chuỗi: [kết quả]".',
      starterCode: `Promise.resolve(10)
  .then(x => x * 2)
  .then(x => x + 5)
  .then(finalVal => {
    console.log("Kết quả chuỗi:", finalVal);
  });`,
      solutionCode: `Promise.resolve(10)
  .then(x => x * 2)
  .then(x => x + 5)
  .then(finalVal => {
    console.log("Kết quả chuỗi:", finalVal);
  });`,
      testCases: [
        { id: 'tc-1', description: '10 * 2 + 5 = 25', expectedOutput: 'Kết quả chuỗi: 25' }
      ],
      hints: ['Mỗi hàm .then() trả về giá trị sẽ chuyển sang cho .then() kế tiếp'],
      explanation: 'Promise Chaining giúp xử lý tuần tự nhiều bước mà không bị lồng nhau như callback.'
    }
  },
  quiz: {
    id: 'quiz-14-3',
    lessonId: 'les-14-3',
    title: 'Trắc nghiệm Promise',
    passingScore: 70,
    questions: []
  },
  summary: [
    'Promise có 3 trạng thái: Pending -> Fulfilled hoặc Rejected.',
    '.then() đón nhận kết quả, .catch() bắt lỗi, .finally() luôn luôn chạy.'
  ],
  suggestedBookmarks: ['3 trạng thái Promise', 'Promise Chaining']
};

export const LESSON_14_4: Lesson = {
  id: 'les-14-4',
  moduleId: 'mod-14',
  track: 'javascript',
  language: 'javascript',
  title: '14.4 async/await hiện đại và xử lý lỗi với try/catch',
  order: 4,
  durationMinutes: 55,
  difficulty: 'Trung bình',
  prerequisites: ['Đã học Promise cơ bản'],
  learningObjectives: [
    {
      id: 'LO14.4.1',
      code: 'LO14.4.1',
      title: 'Cú pháp async/await biến đổi mã bất đồng bộ thành phong cách đồng bộ',
      description: 'Từ khóa async luôn trả về một Promise; từ khóa await dừng chờ kết quả.',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    },
    {
      id: 'LO14.4.2',
      code: 'LO14.4.2',
      title: 'Xử lý lỗi bất đồng bộ toàn diện với try...catch...finally',
      description: 'Bắt mọi ngoại lệ mạng hoặc parsing lỗi một cách trực quan, sạch sẽ.',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    }
  ],
  sections: [
    {
      id: 'sec-14-4-1',
      lessonId: 'les-14-4',
      order: 1,
      conceptName: 'Cú pháp async/await và try/catch',
      title: '1. async/await: Cú pháp chuẩn mực của JavaScript hiện đại',
      explanation: '`async/await` là lớp vỏ bọc cú pháp (Syntactic Sugar) tinh tế phía trên Promise. Thêm từ khóa `async` trước một hàm sẽ tự động biến hàm đó thành hàm trả về Promise. Từ khóa `await` chỉ được phép dùng bên trong hàm `async`, giúp tạm dừng thực thi dòng lệnh cho đến khi Promise giải quyết xong, giúp mã nguồn trông tự nhiên như mã đồng bộ thông thường.',
      syntax: 'async function fetchData() {\n  try {\n    const res = await callApi();\n    console.log(res);\n  } catch (err) {\n    console.error(err);\n  }\n}',
      codeExample: `// Giả lập hàm async lấy thông tin sinh viên
async function getStudentProfile(id: number) {
  if (id <= 0) {
    throw new Error("ID sinh viên không hợp lệ");
  }
  return { id, name: "Hoàng Long", gpa: 3.8 };
}

async function main() {
  try {
    const student = await getStudentProfile(101);
    console.log("Sinh viên:", student.name, "- GPA:", student.gpa);
  } catch (error: any) {
    console.log("Lỗi:", error.message);
  }
}

main();`,
      lineByLineExplanation: [
        { line: 2, text: 'Khai báo hàm async getStudentProfile.' },
        { line: 4, text: 'throw new Error tương đương với Promise.reject().' },
        { line: 11, text: 'await dừng chờ lấy dữ liệu mà không làm đóng băng giao diện.' }
      ],
      commonMistakes: [
        'Dùng await bên ngoài một hàm không có từ khóa async (ở các môi trường chưa hỗ trợ Top-level await).'
      ],
      whenToUse: 'Dùng cho 100% các tác vụ gọi API, đọc file, truy vấn database trong ứng dụng thực tế.',
      whenNotToUse: 'Không dùng await tuần tự cho các tác vụ độc lập không phụ thuộc nhau (hãy dùng Promise.all).',
      realWorldUseCase: 'Tải dữ liệu từ server và cập nhật state trong ứng dụng Web hiện đại.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-14-4',
    title: 'Thực hành viết hàm async trả về chuỗi chào mừng',
    description: 'Khai báo hàm async và dùng await để lấy giá trị.',
    starterCode: `async function fetchGreeting() {
  return "Chào mừng bạn đến với Module 14!";
}

async function run() {
  const msg = await fetchGreeting();
  console.log(msg);
}

run();`,
    expectedConsoleOutput: 'Chào mừng bạn đến với Module 14!',
    hint: 'Hàm async luôn tự động đóng gói giá trị trả về trong một Promise.'
  },
  exercises: {
    basic: {
      id: 'ex-14-4-1',
      lessonId: 'les-14-4',
      title: 'Bài tập Cơ bản: Kiểu dữ liệu trả về của hàm async',
      difficulty: 'basic',
      learningObjectiveIds: ['LO14.4.1'],
      description: 'Một hàm được khai báo với từ khóa async function myFunc() { return 10; } sẽ luôn trả về kiểu đối tượng gì: "Number" hay "Promise"? In tên kiểu đối tượng.',
      starterCode: `const returnType = "Promise";
console.log("Kiểu dữ liệu trả về:", returnType);`,
      solutionCode: `const returnType = "Promise";
console.log("Kiểu dữ liệu trả về:", returnType);`,
      testCases: [
        { id: 'tc-1', description: 'Luôn trả về Promise', expectedOutput: 'Kiểu dữ liệu trả về: Promise' }
      ],
      hints: ['async tự động bọc giá trị trả về vào Promise.resolve()'],
      explanation: 'Mọi hàm async luôn trả về một Promise.'
    },
    intermediate: {
      id: 'ex-14-4-2',
      lessonId: 'les-14-4',
      title: 'Bài tập Trung bình: Bắt ngoại lệ bằng try...catch trong hàm async',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO14.4.2'],
      description: 'Viết hàm async safeLogin(username). Nếu username rỗng ném lỗi throw new Error("Tên đăng nhập bắt buộc"), nếu có in "Đăng nhập: [username]". Dùng try/catch bắt lỗi khi gọi safeLogin("").',
      starterCode: `async function safeLogin(username) {
  if (!username) {
    throw new Error("Tên đăng nhập bắt buộc");
  }
  return \`Đăng nhập: \${username}\`;
}

async function test() {
  try {
    await safeLogin("");
  } catch (err) {
    console.log("Bắt lỗi an toàn:", err.message);
  }
}

test();`,
      solutionCode: `async function safeLogin(username) {
  if (!username) {
    throw new Error("Tên đăng nhập bắt buộc");
  }
  return \`Đăng nhập: \${username}\`;
}
async function test() {
  try {
    await safeLogin("");
  } catch (err) {
    console.log("Bắt lỗi an toàn:", err.message);
  }
}
test();`,
      testCases: [
        { id: 'tc-1', description: 'Bắt lỗi thành công', expectedOutput: 'Bắt lỗi an toàn: Tên đăng nhập bắt buộc' }
      ],
      hints: ['Dùng try...catch bọc quanh lời gọi await safeLogin("")'],
      explanation: 'try...catch kết hợp async/await giúp mã xử lý lỗi trực quan y hệt lập trình đồng bộ truyền thống.'
    },
    challenge: {
      id: 'ex-14-4-3',
      lessonId: 'les-14-4',
      title: 'Bài tập Thử thách: Hàm tải dữ liệu có khối dọn dẹp finally',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO14.4.2'],
      description: 'Viết hàm async loadDataWithLoading(shouldFail). Đặt isLoading = true. Khối try: nếu shouldFail ném lỗi, ngược lại in "Dữ liệu tải thành công". Khối finally: đặt isLoading = false và in "Đã tắt Loading". Chạy thử với shouldFail = false.',
      starterCode: `async function loadDataWithLoading(shouldFail) {
  let isLoading = true;
  console.log("Bật trạng thái Loading:", isLoading);
  try {
    if (shouldFail) throw new Error("Tải thất bại");
    console.log("Dữ liệu tải thành công");
  } catch (e) {
    console.log("Lỗi:", e.message);
  } finally {
    isLoading = false;
    console.log("Đã tắt Loading:", !isLoading);
  }
}

loadDataWithLoading(false);`,
      solutionCode: `async function loadDataWithLoading(shouldFail) {
  let isLoading = true;
  console.log("Bật trạng thái Loading:", isLoading);
  try {
    if (shouldFail) throw new Error("Tải thất bại");
    console.log("Dữ liệu tải thành công");
  } catch (e) {
    console.log("Lỗi:", e.message);
  } finally {
    isLoading = false;
    console.log("Đã tắt Loading:", !isLoading);
  }
}
loadDataWithLoading(false);`,
      testCases: [
        { id: 'tc-1', description: 'Quy trình loading chuẩn', expectedOutput: 'Bật trạng thái Loading: true\nDữ liệu tải thành công\nĐã tắt Loading: true' }
      ],
      hints: ['Khối finally luôn chạy dù thành công hay có lỗi'],
      explanation: 'finally đảm bảo spinner loading luôn được tắt, ngăn chặn hiện tượng treo màn hình.'
    }
  },
  quiz: {
    id: 'quiz-14-4',
    lessonId: 'les-14-4',
    title: 'Trắc nghiệm async/await',
    passingScore: 70,
    questions: []
  },
  summary: [
    'async/await biến mã bất đồng bộ thành cú pháp đồng bộ dễ đọc.',
    'Luôn bọc lời gọi await trong khối try/catch/finally để bắt lỗi triệt để.'
  ],
  suggestedBookmarks: ['async/await chuẩn hiện đại', 'try/catch/finally xử lý lỗi mạng']
};

export const LESSON_14_5: Lesson = {
  id: 'les-14-5',
  moduleId: 'mod-14',
  track: 'javascript',
  language: 'javascript',
  title: '14.5 Chạy song song nhiều tác vụ với Promise.all()',
  order: 5,
  durationMinutes: 45,
  difficulty: 'Nâng cao',
  prerequisites: ['Đã học Promise và async/await'],
  learningObjectives: [
    {
      id: 'LO14.5.1',
      code: 'LO14.5.1',
      title: 'Tối ưu hóa hiệu năng bằng thực thi song song (Concurrent Execution)',
      description: 'Sử dụng Promise.all() để chạy đồng thời nhiều tác vụ độc lập.',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    },
    {
      id: 'LO14.5.2',
      code: 'LO14.5.2',
      title: 'Hiểu cơ chế Fail-fast của Promise.all()',
      description: 'Nếu 1 tác vụ thất bại thì toàn bộ Promise.all() lập tức reject.',
      bloomLevel: 'Analyze',
      masteryPercentage: 86
    }
  ],
  sections: [
    {
      id: 'sec-14-5-1',
      lessonId: 'les-14-5',
      order: 1,
      conceptName: 'Phương thức Promise.all()',
      title: '1. Thực thi song song với Promise.all',
      explanation: 'Nếu bạn cần gọi 3 API độc lập (User, Notifications, Products), nếu dùng `await` tuần tự thì thời gian tải sẽ bằng tổng thời gian của cả 3 cộng lại (ví dụ 1s + 1s + 1s = 3s). `Promise.all([p1, p2, p3])` khởi chạy cả 3 CÙNG MỘT LÚC và chỉ mất thời gian của tác vụ lâu nhất (ví dụ chỉ mất 1s).',
      syntax: 'const [user, posts] = await Promise.all([\n  fetchUser(),\n  fetchPosts()\n]);',
      codeExample: `// Giả lập 2 tác vụ tải độc lập
const loadUsers = () => Promise.resolve(["An", "Bình"]);
const loadSettings = () => Promise.resolve({ theme: "dark" });

async function initDashboard() {
  const [users, settings] = await Promise.all([
    loadUsers(),
    loadSettings()
  ]);
  
  console.log("Danh sách người dùng:", users);
  console.log("Cấu hình theme:", settings.theme);
}

initDashboard();`,
      lineByLineExplanation: [
        { line: 6, text: 'Promise.all chạy song song loadUsers và loadSettings.' },
        { line: 7, text: 'Dùng Array Destructuring để nhận kết quả theo đúng thứ tự mảng truyền vào.' }
      ],
      commonMistakes: [
        'Await từng tác vụ độc lập lần lượt thay vì gom vào Promise.all gây chậm ứng dụng nghiêm trọng.'
      ],
      whenToUse: 'Dùng khi khởi tạo trang Dashboard cần tải nhiều nguồn dữ liệu không phụ thuộc lẫn nhau.',
      whenNotToUse: 'Không dùng nếu tác vụ thứ hai bắt buộc phải có kết quả của tác vụ thứ nhất mới chạy được.',
      realWorldUseCase: 'Tải đồng thời thông tin giỏ hàng và danh sách địa chỉ giao hàng khi mở trang Checkout.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-14-5',
    title: 'Thực hành tính tổng từ kết quả Promise.all',
    description: 'Chạy song song 2 Promise trả về số và tính tổng.',
    starterCode: `const p1 = Promise.resolve(100);
const p2 = Promise.resolve(250);

Promise.all([p1, p2]).then(([v1, v2]) => {
  console.log("Tổng giá trị song song:", v1 + v2);
});`,
    expectedConsoleOutput: 'Tổng giá trị song song: 350',
    hint: 'Promise.all nhận một mảng các Promise và trả về mảng kết quả.'
  },
  exercises: {
    basic: {
      id: 'ex-14-5-1',
      lessonId: 'les-14-5',
      title: 'Bài tập Cơ bản: Cơ chế Fail-fast của Promise.all',
      difficulty: 'basic',
      learningObjectiveIds: ['LO14.5.2'],
      description: 'Trong một mảng 5 Promise truyền vào Promise.all, nếu có 1 Promise bị reject thì Promise.all sẽ: "ThanhCong" (trả về 4 cái còn lại) hay "ThatBai" (lập tức reject toàn bộ)? In ra đáp án đúng.',
      starterCode: `const failFastBehavior = "ThatBai";
console.log("Hành vi khi có 1 lỗi:", failFastBehavior);`,
      solutionCode: `const failFastBehavior = "ThatBai";
console.log("Hành vi khi có 1 lỗi:", failFastBehavior);`,
      testCases: [
        { id: 'tc-1', description: 'ThatBai (Fail-fast)', expectedOutput: 'Hành vi khi có 1 lỗi: ThatBai' }
      ],
      hints: ['Promise.all tuân thủ nguyên tắc All-or-Nothing'],
      explanation: 'Promise.all reject ngay khi gặp lỗi đầu tiên (nếu muốn lấy kết quả từng cái bất chấp lỗi thì dùng Promise.allSettled).'
    },
    intermediate: {
      id: 'ex-14-5-2',
      lessonId: 'les-14-5',
      title: 'Bài tập Trung bình: Tải dữ liệu trang cá nhân song song',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO14.5.1'],
      description: 'Cho 2 hàm: getBio() trả về Promise.resolve("Lập trình viên") và getFollowers() trả về Promise.resolve(1500). Dùng Promise.all lấy 2 giá trị và in ra: "Hồ sơ: [bio] - [followers] người theo dõi".',
      starterCode: `const getBio = () => Promise.resolve("Lập trình viên");
const getFollowers = () => Promise.resolve(1500);

Promise.all([getBio(), getFollowers()]).then(([bio, followers]) => {
  console.log(\`Hồ sơ: \${bio} - \${followers} người theo dõi\`);
});`,
      solutionCode: `const getBio = () => Promise.resolve("Lập trình viên");
const getFollowers = () => Promise.resolve(1500);
Promise.all([getBio(), getFollowers()]).then(([bio, followers]) => {
  console.log(\`Hồ sơ: \${bio} - \${followers} người theo dõi\`);
});`,
      testCases: [
        { id: 'tc-1', description: 'In hồ sơ song song', expectedOutput: 'Hồ sơ: Lập trình viên - 1500 người theo dõi' }
      ],
      hints: ['Promise.all([getBio(), getFollowers()])'],
      explanation: 'Chạy song song giúp rút ngắn thời gian phản hồi trang tới mức tối đa.'
    },
    challenge: {
      id: 'ex-14-5-3',
      lessonId: 'les-14-5',
      title: 'Bài tập Thử thách: So sánh thời gian chạy Tuần tự vs Song song',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO14.5.1'],
      description: 'Nếu có 3 tác vụ tốn lần lượt 200ms, 300ms, 150ms. Nếu chạy tuần tự (Sequential) mất tổng cộng bao nhiêu ms? Nếu chạy song song bằng Promise.all mất bao nhiêu ms? In ra: "Tuần tự: [sum]ms - Song song: [max]ms".',
      starterCode: `const taskTimes = [200, 300, 150];

const seqTime = taskTimes.reduce((a, b) => a + b, 0);
const parallelTime = Math.max(...taskTimes);

console.log(\`Tuần tự: \${seqTime}ms - Song song: \${parallelTime}ms\`);`,
      solutionCode: `const taskTimes = [200, 300, 150];
const seqTime = taskTimes.reduce((a, b) => a + b, 0);
const parallelTime = Math.max(...taskTimes);
console.log(\`Tuần tự: \${seqTime}ms - Song song: \${parallelTime}ms\`);`,
      testCases: [
        { id: 'tc-1', description: 'Tuần tự 650ms, Song song 300ms', expectedOutput: 'Tuần tự: 650ms - Song song: 300ms' }
      ],
      hints: ['Tuần tự = Tổng, Song song = Max'],
      explanation: 'Promise.all giúp tiết kiệm hơn 50% thời gian chờ đợi đối với các tác vụ độc lập.'
    }
  },
  quiz: {
    id: 'quiz-14-5',
    lessonId: 'les-14-5',
    title: 'Trắc nghiệm Promise.all',
    passingScore: 70,
    questions: []
  },
  summary: [
    'Promise.all() chạy song song các tác vụ độc lập, rút ngắn thời gian tải.',
    'Cơ chế Fail-fast: lập tức reject nếu có bất kỳ tác vụ nào bị lỗi.'
  ],
  suggestedBookmarks: ['Tối ưu hiệu năng với Promise.all', 'Cơ chế Fail-fast']
};

export const JS_MODULE_14_LESSONS: Lesson[] = [
  LESSON_14_1,
  LESSON_14_2,
  LESSON_14_3,
  LESSON_14_4,
  LESSON_14_5
];
