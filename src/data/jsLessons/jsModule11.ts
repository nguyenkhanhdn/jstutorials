import { Lesson } from '../../types';

// ==========================================
// MODULE 11: EVENT (SỰ KIỆN)
// ==========================================

export const LESSON_11_1: Lesson = {
  id: 'les-11-1',
  moduleId: 'mod-11',
  track: 'javascript',
  language: 'javascript',
  title: '11.1 addEventListener và vòng đời sự kiện',
  order: 1,
  durationMinutes: 50,
  difficulty: 'Cơ bản',
  prerequisites: ['Đã học DOM cơ bản', 'Biết cách viết Callback function'],
  learningObjectives: [
    {
      id: 'LO11.1.1',
      code: 'LO11.1.1',
      title: 'Lắng nghe sự kiện bằng phương thức addEventListener',
      description: 'Gắn callback xử lý sự kiện tách biệt với mã HTML.',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    },
    {
      id: 'LO11.1.2',
      code: 'LO11.1.2',
      title: 'Hiểu cơ chế lan truyền sự kiện (Bubbling & Capturing)',
      description: 'Sự kiện nổi bọt từ phần tử con lên cha và cách gỡ bỏ lắng nghe bằng removeEventListener.',
      bloomLevel: 'Understand',
      masteryPercentage: 86
    }
  ],
  sections: [
    {
      id: 'sec-11-1-1',
      lessonId: 'les-11-1',
      order: 1,
      conceptName: 'Phương thức addEventListener chuẩn W3C',
      title: '1. Gắn sự kiện chuẩn bằng addEventListener',
      explanation: '`addEventListener(eventType, callback)` là tiêu chuẩn hiện đại để lắng nghe tương tác của người dùng. Ưu điểm vượt trội so với thuộc tính cũ `onclick`: cho phép gắn NHIỀU hàm xử lý cùng lúc cho cùng một sự kiện mà không bị ghi đè, và có thể gỡ bỏ bằng `removeEventListener()`.',
      syntax: 'element.addEventListener("click", () => {\n  console.log("Đã click!");\n});',
      codeExample: `// Giả lập cơ chế đăng ký sự kiện Event Listener
class MockEmitter {
  constructor() { this.events = {}; }
  on(event, handler) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(handler);
  }
  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(h => h(data));
    }
  }
}

const btn = new MockEmitter();
btn.on("click", (msg) => console.log("Handler 1:", msg));
btn.on("click", (msg) => console.log("Handler 2 ghi log phân tích:", msg));
btn.emit("click", "Người dùng nhấn nút Đặt mua");`,
      lineByLineExplanation: [
        { line: 16, text: 'Đăng ký handler đầu tiên cho sự kiện click.' },
        { line: 17, text: 'Đăng ký handler thứ hai - cả 2 cùng chạy độc lập khi sự kiện xảy ra.' }
      ],
      commonMistakes: [
        'Viết "onclick" trong addEventListener thay vì "click" (bỏ tiền tố "on").',
        'Gọi hàm ngay lúc đăng ký: addEventListener("click", handleClick()) thay vì truyền tham chiếu handleClick.'
      ],
      whenToUse: 'Dùng cho mọi hành động tương tác (click, scroll, resize, submit, keydown).',
      whenNotToUse: 'Không dùng inline event trong file HTML (như `<button onclick="doSomething()">`) vì vi phạm nguyên tắc tách biệt mã (Separation of Concerns).',
      realWorldUseCase: 'Lắng nghe sự kiện click mở giỏ hàng, đóng modal popup.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-11-1',
    title: 'Thực hành mô phỏng gọi sự kiện tương tác',
    description: 'Đăng ký callback và phát tín hiệu sự kiện click.',
    starterCode: `function handleClick(actionName) {
  console.log("Xử lý hành động:", actionName);
}

handleClick("Thêm vào giỏ hàng");`,
    expectedConsoleOutput: 'Xử lý hành động: Thêm vào giỏ hàng',
    hint: 'Truyền tên hành động vào hàm handleClick.'
  },
  exercises: {
    basic: {
      id: 'ex-11-1-1',
      lessonId: 'les-11-1',
      title: 'Bài tập Cơ bản: Lựa chọn tên sự kiện chuẩn xác trong addEventListener',
      difficulty: 'basic',
      learningObjectiveIds: ['LO11.1.1'],
      description: 'Khi lắng nghe sự kiện nhấp chuột bằng addEventListener, tên sự kiện đúng là "click" hay "onclick"? In ra tên đúng.',
      starterCode: `const correctEventName = "click";
console.log("Tên sự kiện đúng:", correctEventName);`,
      solutionCode: `const correctEventName = "click";
console.log("Tên sự kiện đúng:", correctEventName);`,
      testCases: [
        { id: 'tc-1', description: 'Tên là click', expectedOutput: 'Tên sự kiện đúng: click' }
      ],
      hints: ['Không có tiền tố "on"'],
      explanation: 'addEventListener nhận tên sự kiện chuẩn W3C không chứa tiền tố "on" (ví dụ: click, submit, change).'
    },
    intermediate: {
      id: 'ex-11-1-2',
      lessonId: 'les-11-1',
      title: 'Bài tập Trung bình: Viết callback đếm số lần click chuột',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO11.1.1'],
      description: 'Cho biến count = 0. Viết hàm onButtonClick() mỗi lần gọi tăng count lên 1 và in ra "Số lần click: [count]". Chạy thử gọi hàm 3 lần.',
      starterCode: `let count = 0;
function onButtonClick() {
  count++;
  console.log("Số lần click:", count);
}

onButtonClick();
onButtonClick();
onButtonClick();`,
      solutionCode: `let count = 0;
function onButtonClick() {
  count++;
  console.log("Số lần click:", count);
}
onButtonClick();
onButtonClick();
onButtonClick();`,
      testCases: [
        { id: 'tc-1', description: 'Lần 1', expectedOutput: 'Số lần click: 1' },
        { id: 'tc-2', description: 'Lần 2', expectedOutput: 'Số lần click: 2' },
        { id: 'tc-3', description: 'Lần 3', expectedOutput: 'Số lần click: 3' }
      ],
      hints: ['Tăng count++ trong hàm'],
      explanation: 'Biến count bên ngoài lưu trữ trạng thái liên tục giữa các lần kích hoạt sự kiện.'
    },
    challenge: {
      id: 'ex-11-1-3',
      lessonId: 'les-11-1',
      title: 'Bài tập Thử thách: Gỡ bỏ sự kiện chỉ cho phép click 1 lần duy nhất (Once)',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO11.1.2'],
      description: 'Trong addEventListener, tùy chọn { once: true } tự động gỡ bỏ listener sau lần kích hoạt đầu tiên. Viết hàm mô phỏng triggerOnce(fn) chỉ thực thi fn ở lần gọi đầu, các lần sau không làm gì. Chạy thử 2 lần với hành động "Nạp thẻ".',
      starterCode: `function createOnceAction(action) {
  let executed = false;
  return function() {
    if (!executed) {
      executed = true;
      console.log("Thực hiện thành công:", action);
    } else {
      console.log("Đã khóa, không thể chạy lại:", action);
    }
  };
}

const payOnce = createOnceAction("Nạp thẻ 100k");
payOnce();
payOnce();`,
      solutionCode: `function createOnceAction(action) {
  let executed = false;
  return function() {
    if (!executed) {
      executed = true;
      console.log("Thực hiện thành công:", action);
    } else {
      console.log("Đã khóa, không thể chạy lại:", action);
    }
  };
}
const payOnce = createOnceAction("Nạp thẻ 100k");
payOnce();
payOnce();`,
      testCases: [
        { id: 'tc-1', description: 'Chạy lần 1 thành công', expectedOutput: 'Thực hiện thành công: Nạp thẻ 100k' },
        { id: 'tc-2', description: 'Lần 2 bị khóa', expectedOutput: 'Đã khóa, không thể chạy lại: Nạp thẻ 100k' }
      ],
      hints: ['Dùng biến cờ executed'],
      explanation: 'Tương tự tùy chọn `{ once: true }` trong addEventListener để ngăn người dùng click đúp submit giao dịch.'
    }
  },
  quiz: {
    id: 'quiz-11-1',
    lessonId: 'les-11-1',
    title: 'Trắc nghiệm addEventListener',
    passingScore: 70,
    questions: []
  },
  summary: [
    'addEventListener là cách chuẩn nhất để lắng nghe sự kiện.',
    'Cho phép gắn nhiều handler độc lập và hỗ trợ tùy chọn { once: true }.'
  ],
  suggestedBookmarks: ['addEventListener chuẩn W3C', 'Tùy chọn once: true']
};

export const LESSON_11_2: Lesson = {
  id: 'les-11-2',
  moduleId: 'mod-11',
  track: 'javascript',
  language: 'javascript',
  title: '11.2 Các sự kiện phổ biến: click, input, change, keydown',
  order: 2,
  durationMinutes: 50,
  difficulty: 'Cơ bản',
  prerequisites: ['Đã học addEventListener cơ bản'],
  learningObjectives: [
    {
      id: 'LO11.2.1',
      code: 'LO11.2.1',
      title: 'Phân biệt sự kiện input và change trên form',
      description: 'input kích hoạt tức thời theo từng phím gõ; change kích hoạt khi blur khỏi ô.',
      bloomLevel: 'Understand',
      masteryPercentage: 90
    },
    {
      id: 'LO11.2.2',
      code: 'LO11.2.2',
      title: 'Xử lý sự kiện bàn phím keydown và kiểm tra phím bấm',
      description: 'Bắt phím Enter, Escape để điều khiển giao diện (modal, tìm kiếm).',
      bloomLevel: 'Apply',
      masteryPercentage: 88
    }
  ],
  sections: [
    {
      id: 'sec-11-2-1',
      lessonId: 'les-11-2',
      order: 1,
      conceptName: 'Sự kiện input vs change',
      title: '1. input (Tức thì) vs change (Sau khi rời ô)',
      explanation: 'Sự kiện `input` bắn ra NGAY LẬP TỨC mỗi khi giá trị của ô `<input>` thay đổi (từng ký tự người dùng gõ vào hoặc xóa đi). Sự kiện `change` chỉ bắn ra khi giá trị thay đổi VÀ người dùng nhấn Enter hoặc click chuột ra ngoài (mất focus - Blur). Với thẻ `<select>` dropdown, `change` kích hoạt ngay khi chọn mục mới.',
      syntax: 'inputEl.addEventListener("input", (e) => console.log(e.target.value));\nselectEl.addEventListener("change", (e) => console.log(e.target.value));',
      codeExample: `// Giả lập luồng gõ tìm kiếm thời gian thực
function handleSearchInput(keyword) {
  console.log("Tìm kiếm trực tiếp theo từ khóa:", keyword.trim());
}

handleSearchInput("java");
handleSearchInput("javascript");`,
      lineByLineExplanation: [
        { line: 6, text: 'Mỗi lần gõ thêm ký tự, sự kiện input cập nhật kết quả lọc ngay lập tức.' }
      ],
      commonMistakes: [
        'Dùng sự kiện keypress cũ lỗi thời (deprecated), hãy luôn dùng input cho văn bản và keydown cho phím chức năng.'
      ],
      whenToUse: 'Dùng input cho tính năng tìm kiếm gợi ý tức thì (Live Search), bộ đếm ký tự còn lại.',
      whenNotToUse: 'Dùng change cho radio button, checkbox, select dropdown hoặc khi chỉ cần kiểm tra lỗi sau khi người dùng nhập xong.',
      realWorldUseCase: 'Bộ lọc danh sách sản phẩm thời gian thực (Live Search Bar).'
    },
    {
      id: 'sec-11-2-2',
      lessonId: 'les-11-2',
      order: 2,
      conceptName: 'Sự kiện bàn phím: keydown & key',
      title: '2. Bắt phím bàn phím: keydown & e.key',
      explanation: 'Sự kiện `keydown` kích hoạt khi người dùng nhấn một phím bất kỳ xuống. Thuộc tính `e.key` chứa tên phím rõ ràng: `"Enter"`, `"Escape"`, `"ArrowUp"`, `"ArrowDown"`.',
      syntax: 'window.addEventListener("keydown", (e) => {\n  if (e.key === "Escape") closeModal();\n});',
      codeExample: `// Kiểm tra phím Enter gửi tin nhắn
function handleKeyPress(key) {
  if (key === "Enter") {
    console.log("Đã nhấn Enter -> Gửi tin nhắn đi!");
  } else if (key === "Escape") {
    console.log("Đã nhấn Escape -> Đóng cửa sổ chat.");
  }
}

handleKeyPress("Enter");
handleKeyPress("Escape");`,
      lineByLineExplanation: [
        { line: 3, text: 'Kiểm tra chính xác phím Enter bằng so sánh chuỗi key === "Enter".' },
        { line: 5, text: 'Bắt phím Escape để đóng popup giao diện.' }
      ],
      commonMistakes: [
        'Dùng thuộc tính cũ e.keyCode (mã số phím như 13, 27) đã bị khai tử khỏi chuẩn web hiện đại. Luôn dùng e.key.'
      ],
      whenToUse: 'Dùng khi tạo phím tắt ứng dụng (Ctrl+S), điều khiển game, hoặc đóng hộp thoại Modal bằng phím Esc.',
      whenNotToUse: 'Không dùng keydown để trích xuất toàn bộ văn bản nhập (hãy dùng input).',
      realWorldUseCase: 'Đóng Modal khi người dùng nhấn phím Esc.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-11-2',
    title: 'Thực hành bắt phím Enter để thêm công việc mới',
    description: 'Kiểm tra nếu phím nhấn là "Enter" thì thêm công việc mới.',
    starterCode: `function onKeyDown(key, taskText) {
  if (key === "Enter") {
    console.log("Thêm task mới:", taskText);
  }
}

onKeyDown("Enter", "Làm bài tập M11");`,
    expectedConsoleOutput: 'Thêm task mới: Làm bài tập M11',
    hint: 'key === "Enter".'
  },
  exercises: {
    basic: {
      id: 'ex-11-2-1',
      lessonId: 'les-11-2',
      title: 'Bài tập Cơ bản: Lựa chọn sự kiện cho tính năng đếm ký tự',
      difficulty: 'basic',
      learningObjectiveIds: ['LO11.2.1'],
      description: 'Để cập nhật số lượng ký tự người dùng đang gõ trong textarea ngay lập tức, ta nên dùng sự kiện nào: "input" hay "change"? In ra tên sự kiện.',
      starterCode: `const eventForCounter = "input";
console.log("Sự kiện phù hợp:", eventForCounter);`,
      solutionCode: `const eventForCounter = "input";
console.log("Sự kiện phù hợp:", eventForCounter);`,
      testCases: [
        { id: 'tc-1', description: 'Sự kiện input', expectedOutput: 'Sự kiện phù hợp: input' }
      ],
      hints: ['input bắt ngay khi gõ từng ký tự'],
      explanation: 'Sự kiện input phản hồi tức thì mỗi khi có thay đổi nội dung, lý tưởng cho bộ đếm ký tự.'
    },
    intermediate: {
      id: 'ex-11-2-2',
      lessonId: 'les-11-2',
      title: 'Bài tập Trung bình: Viết hàm xử lý phím điều hướng',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO11.2.2'],
      description: 'Viết hàm handleNavigation(key) nhận vào tên phím. Nếu "ArrowUp" in "Lên", "ArrowDown" in "Xuống", ngược lại in "Phím khác". Chạy thử với "ArrowUp".',
      starterCode: `function handleNavigation(key) {
  if (key === "ArrowUp") {
    console.log("Lên");
  } else if (key === "ArrowDown") {
    console.log("Xuống");
  } else {
    console.log("Phím khác");
  }
}

handleNavigation("ArrowUp");`,
      solutionCode: `function handleNavigation(key) {
  if (key === "ArrowUp") {
    console.log("Lên");
  } else if (key === "ArrowDown") {
    console.log("Xuống");
  } else {
    console.log("Phím khác");
  }
}
handleNavigation("ArrowUp");`,
      testCases: [
        { id: 'tc-1', description: 'Phím ArrowUp', expectedOutput: 'Lên' }
      ],
      hints: ['key === "ArrowUp"'],
      explanation: 'e.key trả về chuỗi tên phím trực quan ("ArrowUp", "ArrowDown").'
    },
    challenge: {
      id: 'ex-11-2-3',
      lessonId: 'les-11-2',
      title: 'Bài tập Thử thách: Kiểm tra tổ hợp phím tắt Ctrl + S (Lưu tài liệu)',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO11.2.2'],
      description: 'Trong Event Object bàn phím có thuộc tính boolean ctrlKey. Viết hàm checkSaveShortcut(e) kiểm tra nếu e.ctrlKey === true VÀ e.key.toLowerCase() === "s" thì in "Đã lưu tài liệu!", ngược lại in "Không phải phím tắt lưu". Chạy thử với { ctrlKey: true, key: "s" }.',
      starterCode: `function checkSaveShortcut(e) {
  if (e.ctrlKey && e.key.toLowerCase() === "s") {
    console.log("Đã lưu tài liệu!");
  } else {
    console.log("Không phải phím tắt lưu");
  }
}

checkSaveShortcut({ ctrlKey: true, key: "s" });`,
      solutionCode: `function checkSaveShortcut(e) {
  if (e.ctrlKey && e.key.toLowerCase() === "s") {
    console.log("Đã lưu tài liệu!");
  } else {
    console.log("Không phải phím tắt lưu");
  }
}
checkSaveShortcut({ ctrlKey: true, key: "s" });`,
      testCases: [
        { id: 'tc-1', description: 'Nhận diện tổ hợp phím Ctrl + S', expectedOutput: 'Đã lưu tài liệu!' }
      ],
      hints: ['e.ctrlKey && e.key.toLowerCase() === "s"'],
      explanation: 'Kết hợp ctrlKey/shiftKey/metaKey tạo nên các phím tắt bàn phím tiện ích trong Web app.'
    }
  },
  quiz: {
    id: 'quiz-11-2',
    lessonId: 'les-11-2',
    title: 'Trắc nghiệm Các sự kiện phổ biến',
    passingScore: 70,
    questions: []
  },
  summary: [
    'input kích hoạt tức thời, change kích hoạt khi blur hoặc chọn dropdown.',
    'Sự kiện keydown dùng e.key để bắt phím Enter, Escape chính xác.'
  ],
  suggestedBookmarks: ['input vs change', 'Bắt phím bàn phím với e.key']
};

export const LESSON_11_3: Lesson = {
  id: 'les-11-3',
  moduleId: 'mod-11',
  track: 'javascript',
  language: 'javascript',
  title: '11.3 Khám phá Event Object: target, preventDefault, stopPropagation',
  order: 3,
  durationMinutes: 45,
  difficulty: 'Trung bình',
  prerequisites: ['Đã học addEventListener và các loại sự kiện'],
  learningObjectives: [
    {
      id: 'LO11.3.1',
      code: 'LO11.3.1',
      title: 'Sử dụng e.target để xác định phần tử phát sinh sự kiện',
      description: 'Lấy dữ liệu, giá trị value hoặc thuộc tính data-* từ phần tử đích.',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    },
    {
      id: 'LO11.3.2',
      code: 'LO11.3.2',
      title: 'Làm chủ e.preventDefault() và e.stopPropagation()',
      description: 'Chặn hành vi mặc định của trình duyệt và ngăn chặn nổi bọt sự kiện.',
      bloomLevel: 'Analyze',
      masteryPercentage: 88
    }
  ],
  sections: [
    {
      id: 'sec-11-3-1',
      lessonId: 'les-11-3',
      order: 1,
      conceptName: 'Event Object và e.target',
      title: '1. Đối tượng Event Object và thuộc tính e.target',
      explanation: 'Khi một sự kiện xảy ra, trình duyệt tự động tạo ra một đối tượng `Event` (thường đặt tên là `e` hoặc `event`) chứa toàn bộ thông tin chi tiết về sự kiện đó. `e.target` là phần tử HTML THỰC SỰ mà người dùng vừa tương tác trực tiếp.',
      syntax: 'el.addEventListener("click", (e) => {\n  console.log("Phần tử được click:", e.target);\n  console.log("Tọa độ X:", e.clientX);\n});',
      codeExample: `// Mô phỏng đối tượng Event do trình duyệt truyền vào
const mockEvent = {
  type: "click",
  target: {
    tagName: "BUTTON",
    id: "submit-btn",
    value: "Thanh toán"
  },
  clientX: 120,
  clientY: 340
};

console.log("Loại sự kiện:", mockEvent.type);
console.log("Thẻ được click:", mockEvent.target.tagName);
console.log("ID của thẻ:", mockEvent.target.id);`,
      lineByLineExplanation: [
        { line: 12, text: 'mockEvent.target.tagName cho biết thẻ phát ra sự kiện là BUTTON.' }
      ],
      commonMistakes: [
        'Nhầm lẫn giữa e.target (phần tử gốc kích hoạt sự kiện) và e.currentTarget (phần tử đang gắn listener).'
      ],
      whenToUse: 'Dùng khi muốn biết người dùng vừa click vào đâu hoặc vừa gõ gì vào ô input.',
      whenNotToUse: 'Không gán lại đối tượng event (e = null).',
      realWorldUseCase: 'Đọc dữ liệu thuộc tính tùy chỉnh: `const productId = e.target.dataset.id;`'
    },
    {
      id: 'sec-11-3-2',
      lessonId: 'les-11-3',
      order: 2,
      conceptName: 'e.preventDefault() và e.stopPropagation()',
      title: '2. Chặn hành vi mặc định và chặn sự kiện nổi bọt',
      explanation: '`e.preventDefault()` ngăn trình duyệt thực hiện hành vi mặc định (ví dụ: không cho thẻ `<form>` tải lại trang khi submit, không cho thẻ `<a>` chuyển trang). `e.stopPropagation()` chặn sự kiện không cho nổi bọt (Bubble) lên các phần tử cha bao ngoài.',
      syntax: 'form.addEventListener("submit", (e) => {\n  e.preventDefault(); // Chặn tải lại trang\n});\nmodalBody.addEventListener("click", (e) => {\n  e.stopPropagation(); // Click trong modal không làm đóng modal cha\n});',
      codeExample: `// Giả lập hàm xử lý submit form
function handleFormSubmit(e) {
  e.preventDefault();
  console.log("Đã chặn reload! Đang gửi dữ liệu bằng Fetch API ngầm...");
}

const fakeFormEvent = {
  preventDefault() { console.log("[preventDefault được gọi: Dừng reload trang]"); }
};

handleFormSubmit(fakeFormEvent);`,
      lineByLineExplanation: [
        { line: 3, text: 'Gọi e.preventDefault() để chặn form gửi request GET/POST làm trắng trang.' }
      ],
      commonMistakes: [
        'Quên gọi e.preventDefault() trong sự kiện submit form khiến trang web bị F5 reload mất sạch dữ liệu JavaScript.'
      ],
      whenToUse: 'Luôn gọi e.preventDefault() khi xử lý submit form bằng AJAX/Fetch; dùng stopPropagation khi làm popup modal.',
      whenNotToUse: 'Không dùng preventDefault bừa bãi trên các tương tác tự nhiên của người dùng (như cuộn trang).',
      realWorldUseCase: 'Xử lý gửi form đăng ký tài khoản không tải lại trang (SPA behavior).'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-11-3',
    title: 'Thực hành xử lý submit form an toàn',
    description: 'Chặn tải lại trang và in ra thông báo sẵn sàng gửi dữ liệu.',
    starterCode: `function onSubmit(e) {
  e.preventDefault();
  console.log("Xử lý form bằng JS, không reload trang.");
}

onSubmit({ preventDefault: () => {} });`,
    expectedConsoleOutput: 'Xử lý form bằng JS, không reload trang.',
    hint: 'e.preventDefault() là chìa khóa của Single Page Application.'
  },
  exercises: {
    basic: {
      id: 'ex-11-3-1',
      lessonId: 'les-11-3',
      title: 'Bài tập Cơ bản: Lấy giá trị nhập từ e.target.value',
      difficulty: 'basic',
      learningObjectiveIds: ['LO11.3.1'],
      description: 'Cho giả lập sự kiện e = { target: { value: "khanhn@fpt.edu.vn" } }. Lấy giá trị email từ e.target.value và in ra: "Email đã nhập: [email]".',
      starterCode: `const e = { target: { value: "khanhn@fpt.edu.vn" } };

const email = e.target.value;
console.log("Email đã nhập:", email);`,
      solutionCode: `const e = { target: { value: "khanhn@fpt.edu.vn" } };
const email = e.target.value;
console.log("Email đã nhập:", email);`,
      testCases: [
        { id: 'tc-1', description: 'Đọc e.target.value', expectedOutput: 'Email đã nhập: khanhn@fpt.edu.vn' }
      ],
      hints: ['e.target.value'],
      explanation: 'Trong sự kiện input hoặc change, e.target.value chứa nội dung mới nhất của ô nhập.'
    },
    intermediate: {
      id: 'ex-11-3-2',
      lessonId: 'les-11-3',
      title: 'Bài tập Trung bình: Viết hàm chặn liên kết thẻ a chuyển trang',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO11.3.2'],
      description: 'Viết hàm handleCustomLink(e, url) gọi e.preventDefault() và in ra "Chuyển trang nội bộ qua Router đến: [url]". Chạy thử với url = "/profile".',
      starterCode: `function handleCustomLink(e, url) {
  e.preventDefault();
  console.log("Chuyển trang nội bộ qua Router đến:", url);
}

handleCustomLink({ preventDefault: () => {} }, "/profile");`,
      solutionCode: `function handleCustomLink(e, url) {
  e.preventDefault();
  console.log("Chuyển trang nội bộ qua Router đến:", url);
}
handleCustomLink({ preventDefault: () => {} }, "/profile");`,
      testCases: [
        { id: 'tc-1', description: 'Điều hướng qua SPA Router', expectedOutput: 'Chuyển trang nội bộ qua Router đến: /profile' }
      ],
      hints: ['e.preventDefault()'],
      explanation: 'Đây là nguyên lý hoạt động của các component Link trong React Router và Next.js.'
    },
    challenge: {
      id: 'ex-11-3-3',
      lessonId: 'les-11-3',
      title: 'Bài tập Thử thách: Ngăn sự kiện nổi bọt đóng Modal (stopPropagation)',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO11.3.2'],
      description: 'Khi click vào vùng đen bên ngoài Modal (Backdrop) thì đóng Modal; nhưng khi click vào nội dung bên trong Modal thì không đóng. Viết hàm onModalContentClick(e) gọi e.stopPropagation() và in "Giữ Modal mở", sau đó kiểm tra nếu e.isPropagationStopped = true in "Đã chặn nổi bọt".',
      starterCode: `function onModalContentClick(e) {
  e.stopPropagation();
  console.log("Giữ Modal mở");
  if (e.isPropagationStopped) {
    console.log("Đã chặn nổi bọt");
  }
}

const mockEvent = {
  isPropagationStopped: false,
  stopPropagation() { this.isPropagationStopped = true; }
};

onModalContentClick(mockEvent);`,
      solutionCode: `function onModalContentClick(e) {
  e.stopPropagation();
  console.log("Giữ Modal mở");
  if (e.isPropagationStopped) {
    console.log("Đã chặn nổi bọt");
  }
}
const mockEvent = {
  isPropagationStopped: false,
  stopPropagation() { this.isPropagationStopped = true; }
};
onModalContentClick(mockEvent);`,
      testCases: [
        { id: 'tc-1', description: 'Giữ modal mở', expectedOutput: 'Giữ Modal mở' },
        { id: 'tc-2', description: 'Chặn nổi bọt', expectedOutput: 'Đã chặn nổi bọt' }
      ],
      hints: ['e.stopPropagation() chặn sự kiện lan lên cha'],
      explanation: 'e.stopPropagation() là kỹ thuật kinh điển để xử lý đóng mở Modal và Dropdown menu.'
    }
  },
  quiz: {
    id: 'quiz-11-3',
    lessonId: 'les-11-3',
    title: 'Trắc nghiệm Event Object',
    passingScore: 70,
    questions: []
  },
  summary: [
    'e.target là phần tử trực tiếp kích hoạt sự kiện.',
    'e.preventDefault() chặn hành vi mặc định (tải lại trang).',
    'e.stopPropagation() chặn sự kiện nổi bọt lên cha.'
  ],
  suggestedBookmarks: ['e.preventDefault() trong Form', 'e.stopPropagation() trong Modal']
};

export const LESSON_11_4: Lesson = {
  id: 'les-11-4',
  moduleId: 'mod-11',
  track: 'javascript',
  language: 'javascript',
  title: '11.4 Kỹ thuật Event Delegation cho danh sách phần tử động',
  order: 4,
  durationMinutes: 55,
  difficulty: 'Nâng cao',
  prerequisites: ['Đã học Event Bubbling và e.target'],
  learningObjectives: [
    {
      id: 'LO11.4.1',
      code: 'LO11.4.1',
      title: 'Hiểu nguyên lý ủy thác sự kiện (Event Delegation)',
      description: 'Lợi dụng tính chất nổi bọt (Bubbling) để gắn duy nhất 1 listener ở phần tử cha.',
      bloomLevel: 'Analyze',
      masteryPercentage: 88
    },
    {
      id: 'LO11.4.2',
      code: 'LO11.4.2',
      title: 'Xử lý các phần tử được thêm động sau khi trang đã tải',
      description: 'Dùng e.target.matches() hoặc closest() để bắt chính xác thẻ con.',
      bloomLevel: 'Apply',
      masteryPercentage: 85
    }
  ],
  sections: [
    {
      id: 'sec-11-4-1',
      lessonId: 'les-11-4',
      order: 1,
      conceptName: 'Nguyên lý Event Delegation (Ủy thác sự kiện)',
      title: '1. Tại sao cần Event Delegation?',
      explanation: 'Nếu danh sách có 1000 thẻ `<li>`, việc gắn 1000 hàm `addEventListener` sẽ gây tốn bộ nhớ và giảm hiệu năng. Thêm vào đó, nếu sau này thêm một thẻ `<li>` mới vào bằng JavaScript, nó sẽ KHÔNG có sự kiện click! Giải pháp: gắn DUY NHẤT 1 listener vào thẻ cha `<ul>`. Khi click vào bất kỳ con nào, sự kiện sẽ nổi bọt lên cha, và cha dùng `e.target` để xử lý.',
      syntax: 'parentUl.addEventListener("click", (e) => {\n  if (e.target.matches(".btn-delete")) {\n    // Xử lý nút xóa\n  }\n});',
      codeExample: `// Giả lập Event Delegation
function handleListClick(targetTag, targetId) {
  if (targetTag === "BUTTON") {
    console.log(\`Đã click nút xóa của mục ID: \${targetId}\`);
  } else {
    console.log("Click vào thân danh sách");
  }
}

handleListClick("BUTTON", "item-102");
handleListClick("DIV", "list-container");`,
      lineByLineExplanation: [
        { line: 3, text: 'Kiểm tra xem phần tử được click có phải là BUTTON không trước khi thực thi.' }
      ],
      commonMistakes: [
        'Gắn listener trực tiếp vào từng thẻ con trong vòng lặp thay vì ủy thác cho thẻ cha.'
      ],
      whenToUse: 'Dùng cho mọi danh sách động: bảng dữ liệu (Table), giỏ hàng, danh sách công việc Todo.',
      whenNotToUse: 'Không cần dùng nếu số lượng phần tử là cố định và ít (1-2 nút bấm).',
      realWorldUseCase: 'Xử lý nút xóa trong danh sách Todo List khi người dùng liên tục thêm/xóa mục mới.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-11-4',
    title: 'Thực hành mô phỏng ủy thác sự kiện xóa',
    description: 'Kiểm tra nếu e.target có class "delete-btn" thì thực hiện xóa.',
    starterCode: `function onParentClick(className, itemId) {
  if (className === "delete-btn") {
    console.log("Xóa thành công mục:", itemId);
  }
}

onParentClick("delete-btn", 45);`,
    expectedConsoleOutput: 'Xóa thành công mục: 45',
    hint: 'className === "delete-btn".'
  },
  exercises: {
    basic: {
      id: 'ex-11-4-1',
      lessonId: 'les-11-4',
      title: 'Bài tập Cơ bản: Lợi ích chính của Event Delegation',
      difficulty: 'basic',
      learningObjectiveIds: ['LO11.4.1'],
      description: 'Lợi ích lớn nhất của Event Delegation khi có thêm phần tử mới sinh ra động là gì? Chọn "TuDongNhanSuKien" (tự động nhận sự kiện mà không cần gắn lại) hay "TonNhieuBoNho"? In ra đáp án.',
      starterCode: `const benefit = "TuDongNhanSuKien";
console.log("Lợi ích lớn nhất:", benefit);`,
      solutionCode: `const benefit = "TuDongNhanSuKien";
console.log("Lợi ích lớn nhất:", benefit);`,
      testCases: [
        { id: 'tc-1', description: 'Tự động nhận sự kiện', expectedOutput: 'Lợi ích lớn nhất: TuDongNhanSuKien' }
      ],
      hints: ['Phần tử mới tạo ra tự động hoạt động nhờ nổi bọt'],
      explanation: 'Event Delegation giúp các phần tử tạo mới bằng createElement/innerHTML tự động có sự kiện mà không cần addEventListener lại.'
    },
    intermediate: {
      id: 'ex-11-4-2',
      lessonId: 'les-11-4',
      title: 'Bài tập Trung bình: Viết bộ lọc e.target.tagName',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO11.4.1'],
      description: 'Viết hàm delegateClick(e) kiểm tra nếu e.target.tagName === "LI" thì in ra "Đã chọn mục: [textContent]". Chạy thử với { target: { tagName: "LI", textContent: "Sản phẩm 1" } }.',
      starterCode: `function delegateClick(e) {
  if (e.target.tagName === "LI") {
    console.log("Đã chọn mục:", e.target.textContent);
  }
}

delegateClick({ target: { tagName: "LI", textContent: "Sản phẩm 1" } });`,
      solutionCode: `function delegateClick(e) {
  if (e.target.tagName === "LI") {
    console.log("Đã chọn mục:", e.target.textContent);
  }
}
delegateClick({ target: { tagName: "LI", textContent: "Sản phẩm 1" } });`,
      testCases: [
        { id: 'tc-1', description: 'Chọn đúng thẻ LI', expectedOutput: 'Đã chọn mục: Sản phẩm 1' }
      ],
      hints: ['e.target.tagName === "LI"'],
      explanation: 'Lưu ý tagName luôn trả về chữ in hoa ("LI", "BUTTON").'
    },
    challenge: {
      id: 'ex-11-4-3',
      lessonId: 'les-11-4',
      title: 'Bài tập Thử thách: Tìm phần tử cha gần nhất bằng phương thức closest()',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO11.4.2'],
      description: 'Khi người dùng click vào icon <i> bên trong nút <button class="btn-delete">, e.target là thẻ <i> chứ không phải <button>. Phương thức e.target.closest(".btn-delete") giải quyết triệt để vấn đề này. Viết hàm findActionButton(tag) nếu tag là "i" thì trả về button cha ".btn-delete". In kết quả.',
      starterCode: `function findActionButton(clickedTag) {
  if (clickedTag === "i" || clickedTag === "button") {
    return ".btn-delete";
  }
  return null;
}

console.log("Selector nút tìm được:", findActionButton("i"));`,
      solutionCode: `function findActionButton(clickedTag) {
  if (clickedTag === "i" || clickedTag === "button") {
    return ".btn-delete";
  }
  return null;
}
console.log("Selector nút tìm được:", findActionButton("i"));`,
      testCases: [
        { id: 'tc-1', description: 'Tìm ra nút cha', expectedOutput: 'Selector nút tìm được: .btn-delete' }
      ],
      hints: ['element.closest(selector) tìm ngược lên cây DOM'],
      explanation: 'closest() là công cụ mạnh mẽ nhất trong Event Delegation để xử lý các nút bấm có chứa icon hoặc chữ lồng nhau.'
    }
  },
  quiz: {
    id: 'quiz-11-4',
    lessonId: 'les-11-4',
    title: 'Trắc nghiệm Event Delegation',
    passingScore: 70,
    questions: []
  },
  summary: [
    'Event Delegation gắn duy nhất 1 listener ở phần tử cha để quản lý tất cả phần tử con.',
    'Sử dụng kết hợp e.target và closest() để bắt chính xác thẻ tương tác.'
  ],
  suggestedBookmarks: ['Ủy thác sự kiện (Event Delegation)', 'element.closest()']
};

export const JS_MODULE_11_LESSONS: Lesson[] = [
  LESSON_11_1,
  LESSON_11_2,
  LESSON_11_3,
  LESSON_11_4
];
