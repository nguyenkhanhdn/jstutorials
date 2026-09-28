import { Lesson } from '../../types';

// ==========================================
// MODULE 17: JAVASCRIPT THỰC TẾ (MINI PROJECTS)
// ==========================================

export const LESSON_17_1: Lesson = {
  id: 'les-17-1',
  moduleId: 'mod-17',
  track: 'javascript',
  language: 'javascript',
  title: '17.1 Mini Project 1: Máy tính bỏ túi (Interactive Calculator)',
  order: 1,
  durationMinutes: 90,
  difficulty: 'Trung bình',
  prerequisites: ['Đã học DOM Event, Object và toán tử số học'],
  learningObjectives: [
    {
      id: 'LO17.1.1',
      code: 'LO17.1.1',
      title: 'Kiến trúc máy trạng thái (State Machine) cho máy tính bỏ túi',
      description: 'Quản lý currentOperand, previousOperand, operation và xử lý các nút số, phép tính, xóa C, tính =.',
      bloomLevel: 'Create',
      masteryPercentage: 90
    }
  ],
  sections: [
    {
      id: 'sec-17-1-1',
      lessonId: 'les-17-1',
      order: 1,
      conceptName: 'Kiến trúc Logic Máy tính Bỏ túi',
      title: '1. Xây dựng bộ điều khiển Logic Máy tính',
      explanation: 'Một máy tính bỏ túi chuyên nghiệp không sử dụng hàm `eval()` nguy hiểm. Thay vào đó, ta sử dụng mô hình State Machine gồm 4 trạng thái: (1) `current`: số đang nhập; (2) `previous`: số trước đó; (3) `operation`: phép toán đang chọn (+, -, *, /); (4) `compute()`: hàm thực hiện phép tính khi người dùng nhấn dấu `=`.',
      syntax: 'class Calculator {\n  constructor() { this.clear(); }\n  appendNumber(number) {}\n  chooseOperation(op) {}\n  compute() {}\n}',
      codeExample: `// Lõi tính toán an toàn không dùng eval()
function calculate(a: number, b: number, op: string): number {
  switch (op) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return b !== 0 ? a / b : 0;
    default: return 0;
  }
}

console.log("15 + 25 =", calculate(15, 25, "+"));
console.log("10 * 8 =", calculate(10, 8, "*"));
console.log("100 / 4 =", calculate(100, 4, "/"));`,
      lineByLineExplanation: [
        { line: 2, text: 'Hàm calculate nhận 2 toán hạng và ký hiệu phép toán.' },
        { line: 7, text: 'Kiểm tra b !== 0 để tránh lỗi chia cho số không.' }
      ],
      commonMistakes: [
        'Dùng hàm eval() để tính toán biểu thức (eval là lỗ hổng bảo mật cực kỳ nguy hiểm có thể thực thi mã độc).'
      ],
      whenToUse: 'Dùng khi xây dựng tiện ích tính toán giá tiền, tính lãi suất vay hoặc máy tính nhúng trong web.',
      whenNotToUse: 'Không dùng cho các phép toán ma trận, vi tích phân cao cấp (cần thư viện chuyên dụng như math.js).',
      realWorldUseCase: 'Widget tính toán tiền trả góp trên website Thế Giới Di Động, FPT Shop.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-17-1',
    title: 'Thực hành ghép chuỗi số khi bấm phím máy tính',
    description: 'Xử lý ghép chữ số mới vào sau chuỗi số hiện tại, chặn nhập 2 dấu chấm.',
    starterCode: `function appendDigit(current, digit) {
  if (digit === "." && current.includes(".")) return current;
  return current + digit;
}

let display = "12";
display = appendDigit(display, ".");
display = appendDigit(display, "5");

console.log("Màn hình hiển thị:", display);`,
    expectedConsoleOutput: 'Màn hình hiển thị: 12.5',
    hint: 'Kiểm tra includes(".") để ngăn nhập nhiều dấu phẩy thập phân.'
  },
  exercises: {
    basic: {
      id: 'ex-17-1-1',
      lessonId: 'les-17-1',
      title: 'Bài tập Cơ bản: Phép tính phần trăm (%) trong máy tính',
      difficulty: 'basic',
      learningObjectiveIds: ['LO17.1.1'],
      description: 'Viết hàm toPercentage(num) chia giá trị cho 100. Chạy thử với 75 và in ra: "Phần trăm: [kết quả]".',
      starterCode: `function toPercentage(num) {
  return num / 100;
}

console.log("Phần trăm:", toPercentage(75));`,
      solutionCode: `function toPercentage(num) {
  return num / 100;
}
console.log("Phần trăm:", toPercentage(75));`,
      testCases: [
        { id: 'tc-1', description: '75% = 0.75', expectedOutput: 'Phần trăm: 0.75' }
      ],
      hints: ['num / 100'],
      explanation: 'Nút % trên máy tính chuyển đổi giá trị thành số thập phân tỉ lệ.'
    },
    intermediate: {
      id: 'ex-17-1-2',
      lessonId: 'les-17-1',
      title: 'Bài tập Trung bình: Xử lý nút xóa lùi (Backspace / DEL)',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO17.1.1'],
      description: 'Viết hàm deleteLastDigit(str) dùng slice(0, -1) xóa ký tự cuối cùng. Nếu sau khi xóa chuỗi rỗng thì trả về "0". Chạy thử với "123". In kết quả.',
      starterCode: `function deleteLastDigit(str) {
  const result = str.slice(0, -1);
  return result.length > 0 ? result : "0";
}

console.log("Sau khi xóa lùi:", deleteLastDigit("123"));`,
      solutionCode: `function deleteLastDigit(str) {
  const result = str.slice(0, -1);
  return result.length > 0 ? result : "0";
}
console.log("Sau khi xóa lùi:", deleteLastDigit("123"));`,
      testCases: [
        { id: 'tc-1', description: 'Xóa số 3 còn 12', expectedOutput: 'Sau khi xóa lùi: 12' }
      ],
      hints: ['str.slice(0, -1)'],
      explanation: 'Nút DEL xóa ký tự cuối và khôi phục về "0" nếu đã xóa hết.'
    },
    challenge: {
      id: 'ex-17-1-3',
      lessonId: 'les-17-1',
      title: 'Bài tập Thử thách: Hoàn chỉnh cỗ máy tính Calculator Class',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO17.1.1'],
      description: 'Xây dựng class SimpleCalc có thuộc tính current = 0. Method add(n) cộng thêm n và return this; method multiply(n) nhân n và return this; method result() in "Kết quả: [current]". Chạy SimpleCalc().add(10).multiply(3).result().',
      starterCode: `class SimpleCalc {
  private current: number = 0;
  
  add(n: number) {
    this.current += n;
    return this;
  }
  
  multiply(n: number) {
    this.current *= n;
    return this;
  }
  
  result() {
    console.log("Kết quả:", this.current);
  }
}

new SimpleCalc().add(10).multiply(3).result();`,
      solutionCode: `class SimpleCalc {
  private current: number = 0;
  
  add(n: number) {
    this.current += n;
    return this;
  }
  
  multiply(n: number) {
    this.current *= n;
    return this;
  }
  
  result() {
    console.log("Kết quả:", this.current);
  }
}
new SimpleCalc().add(10).multiply(3).result();`,
      testCases: [
        { id: 'tc-1', description: '(0 + 10) * 3 = 30', expectedOutput: 'Kết quả: 30' }
      ],
      hints: ['return this ở cuối mỗi method để gọi chuỗi'],
      explanation: 'Mô hình Fluent Calculator chuẩn hướng đối tượng.'
    }
  },
  quiz: {
    id: 'quiz-17-1',
    lessonId: 'les-17-1',
    title: 'Trắc nghiệm Mini Project 1',
    passingScore: 70,
    questions: []
  },
  summary: [
    'Xây dựng máy tính theo mô hình State Machine rõ ràng, tuyệt đối không dùng eval().',
    'Xử lý khéo léo các trường hợp biên: dấu chấm thập phân và chia cho số 0.'
  ],
  suggestedBookmarks: ['State Machine trong Calculator', 'Clean Code không eval()']
};

export const LESSON_17_2: Lesson = {
  id: 'les-17-2',
  moduleId: 'mod-17',
  track: 'javascript',
  language: 'javascript',
  title: '17.2 Mini Project 2: Todo List CRUD có Local Storage',
  order: 2,
  durationMinutes: 120,
  difficulty: 'Nâng cao',
  prerequisites: ['Đã học DOM CRUD, Event Delegation và localStorage'],
  learningObjectives: [
    {
      id: 'LO17.2.1',
      code: 'LO17.2.1',
      title: 'Xây dựng ứng dụng Todo List chuẩn CRUD hoàn chỉnh',
      description: 'Thêm mới (Create), Hiển thị danh sách (Read), Bật/Tắt hoàn thành (Update), Xóa công việc (Delete).',
      bloomLevel: 'Create',
      masteryPercentage: 92
    },
    {
      id: 'LO17.2.2',
      code: 'LO17.2.2',
      title: 'Đồng bộ hóa dữ liệu hai chiều giữa DOM và Local Storage',
      description: 'Lưu trữ tự động mỗi khi mảng dữ liệu có biến động.',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    }
  ],
  sections: [
    {
      id: 'sec-17-2-1',
      lessonId: 'les-17-2',
      order: 1,
      conceptName: 'Kiến trúc Todo List CRUD chuyên nghiệp',
      title: '1. Kiến trúc Todo List: Data-Driven UI',
      explanation: 'Nguyên tắc vàng: KHÔNG thao tác trực tiếp với thẻ HTML để lưu dữ liệu. Thay vào đó, mọi thứ xuất phát từ Mảng dữ liệu nguồn (`todos = [...]`). Khi người dùng thêm, sửa, xóa: ta chỉ thay đổi mảng `todos`, sau đó gọi 2 hàm: `saveToStorage()` (lưu mảng vào localStorage) và `render()` (vẽ lại danh sách HTML từ mảng).',
      syntax: '// Mô hình Data-Driven\nlet todos = loadFromStorage();\nfunction addTodo(text) {\n  todos.push({ id: Date.now(), text, done: false });\n  save();\n  render();\n}',
      codeExample: `// Bộ điều khiển Todo Controller
class TodoApp {
  public todos: Array<{ id: number; title: string; completed: boolean }> = [];

  add(title: string) {
    this.todos.push({ id: Date.now(), title, completed: false });
  }

  toggle(id: number) {
    const item = this.todos.find(t => t.id === id);
    if (item) item.completed = !item.completed;
  }

  delete(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
  }
}

const app = new TodoApp();
app.add("Học xong M17");
app.add("Làm đồ án tốt nghiệp");
console.log("Số việc cần làm:", app.todos.length);

app.toggle(app.todos[0].id);
console.log("Việc 1 đã hoàn thành:", app.todos[0].completed);`,
      lineByLineExplanation: [
        { line: 5, text: 'Thêm task mới với ID duy nhất bằng Date.now().' },
        { line: 9, text: 'Đảo ngược trạng thái completed khi toggle.' },
        { line: 14, text: 'Lọc bỏ phần tử theo ID khi delete.' }
      ],
      commonMistakes: [
        'Xóa thẻ HTML trên màn hình bằng remove() nhưng quên không xóa trong mảng dữ liệu, dẫn đến F5 lại hiện ra như cũ!'
      ],
      whenToUse: 'Dự án kinh điển bắt buộc phải làm chủ khi phỏng vấn vị trí Frontend Developer.',
      whenNotToUse: 'Không có ngoại lệ - Todo List là hình mẫu thu nhỏ của 90% tính năng ứng dụng doanh nghiệp.',
      realWorldUseCase: 'Quản lý task công việc trong Trello, Jira, Asana, Notion.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-17-2',
    title: 'Thực hành đếm số lượng công việc chưa hoàn thành',
    description: 'Dùng filter đếm số task có completed === false.',
    starterCode: `const tasks = [
  { id: 1, title: "Học JS", completed: true },
  { id: 2, title: "Làm Todo App", completed: false },
  { id: 3, title: "Review code", completed: false }
];

const pendingCount = tasks.filter(t => !t.completed).length;
console.log("Số việc chưa hoàn thành:", pendingCount);`,
    expectedConsoleOutput: 'Số việc chưa hoàn thành: 2',
    hint: 'tasks.filter(t => !t.completed).length.'
  },
  exercises: {
    basic: {
      id: 'ex-17-2-1',
      lessonId: 'les-17-2',
      title: 'Bài tập Cơ bản: Tạo ID duy nhất cho task mới',
      difficulty: 'basic',
      learningObjectiveIds: ['LO17.2.1'],
      description: 'Trong JavaScript, Date.now() trả về số mili-giây hiện tại, rất phổ biến để làm ID duy nhất. Kiểm tra typeof Date.now() và in "Kiểu dữ liệu ID: [typeof]".',
      starterCode: `const idType = typeof Date.now();
console.log("Kiểu dữ liệu ID:", idType);`,
      solutionCode: `const idType = typeof Date.now();
console.log("Kiểu dữ liệu ID:", idType);`,
      testCases: [
        { id: 'tc-1', description: 'Kiểu number', expectedOutput: 'Kiểu dữ liệu ID: number' }
      ],
      hints: ['typeof Date.now()'],
      explanation: 'Date.now() sinh ra số nguyên timestamp độc nhất vô nhị ở mỗi thời điểm mili-giây.'
    },
    intermediate: {
      id: 'ex-17-2-2',
      lessonId: 'les-17-2',
      title: 'Bài tập Trung bình: Viết bộ lọc trạng thái (All, Active, Completed)',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO17.2.1'],
      description: 'Viết hàm filterTodos(todos, filterMode) nhận vào mảng và chế độ ("all", "active", "completed"). Nếu "active" trả về các task chưa xong, "completed" trả về task đã xong. Chạy thử với filterMode = "completed" trên mảng 2 task (1 xong, 1 chưa). In độ dài.',
      starterCode: `const list = [
  { id: 1, title: "A", completed: true },
  { id: 2, title: "B", completed: false }
];

function filterTodos(todos, mode) {
  if (mode === "active") return todos.filter(t => !t.completed);
  if (mode === "completed") return todos.filter(t => t.completed);
  return todos;
}

const completedTasks = filterTodos(list, "completed");
console.log("Số task đã xong:", completedTasks.length);`,
      solutionCode: `const list = [
  { id: 1, title: "A", completed: true },
  { id: 2, title: "B", completed: false }
];
function filterTodos(todos, mode) {
  if (mode === "active") return todos.filter(t => !t.completed);
  if (mode === "completed") return todos.filter(t => t.completed);
  return todos;
}
const completedTasks = filterTodos(list, "completed");
console.log("Số task đã xong:", completedTasks.length);`,
      testCases: [
        { id: 'tc-1', description: 'Có 1 task đã xong', expectedOutput: 'Số task đã xong: 1' }
      ],
      hints: ['mode === "completed" lọc t.completed'],
      explanation: 'Bộ lọc tab (All / Active / Completed) là tiêu chuẩn UX không thể thiếu trong Todo App.'
    },
    challenge: {
      id: 'ex-17-2-3',
      lessonId: 'les-17-2',
      title: 'Bài tập Thử thách: Xóa tất cả các công việc đã hoàn thành (Clear Completed)',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO17.2.1', 'LO17.2.2'],
      description: 'Viết hàm clearCompleted(todos) trả về mảng mới chỉ giữ lại các công việc CHƯA hoàn thành (!t.completed). Cho danh sách 3 task (2 đã xong, 1 chưa). In số lượng còn lại.',
      starterCode: `const sampleTodos = [
  { id: 1, text: "Viết báo cáo", completed: true },
  { id: 2, text: "Gửi email", completed: true },
  { id: 3, text: "Chuẩn bị slide", completed: false }
];

function clearCompleted(todos) {
  return todos.filter(t => !t.completed);
}

const remaining = clearCompleted(sampleTodos);
console.log("Số việc còn lại:", remaining.length);`,
      solutionCode: `const sampleTodos = [
  { id: 1, text: "Viết báo cáo", completed: true },
  { id: 2, text: "Gửi email", completed: true },
  { id: 3, text: "Chuẩn bị slide", completed: false }
];
function clearCompleted(todos) {
  return todos.filter(t => !t.completed);
}
const remaining = clearCompleted(sampleTodos);
console.log("Số việc còn lại:", remaining.length);`,
      testCases: [
        { id: 'tc-1', description: 'Chỉ còn 1 việc chưa xong', expectedOutput: 'Số việc còn lại: 1' }
      ],
      hints: ['todos.filter(t => !t.completed)'],
      explanation: 'Thao tác dọn dẹp hàng loạt các công việc đã hoàn thành.'
    }
  },
  quiz: {
    id: 'quiz-17-2',
    lessonId: 'les-17-2',
    title: 'Trắc nghiệm Todo List CRUD',
    passingScore: 70,
    questions: []
  },
  summary: [
    'Mô hình Data-Driven: chỉ thao tác trên mảng dữ liệu, sau đó lưu storage và render lại giao diện.',
    'Quản lý trọn vẹn vòng đời Create - Read - Update - Delete kết hợp Local Storage.'
  ],
  suggestedBookmarks: ['Kiến trúc Data-Driven UI', 'Bộ lọc Todo App']
};

export const LESSON_17_3: Lesson = {
  id: 'les-17-3',
  moduleId: 'mod-17',
  track: 'javascript',
  language: 'javascript',
  title: '17.3 Mini Project 3: Ứng dụng thi trắc nghiệm (Interactive Quiz App)',
  order: 3,
  durationMinutes: 100,
  difficulty: 'Nâng cao',
  prerequisites: ['Đã học Mảng đối tượng, Event và DOM'],
  learningObjectives: [
    {
      id: 'LO17.3.1',
      code: 'LO17.3.1',
      title: 'Quản lý trạng thái câu hỏi hiện tại và tính điểm',
      description: 'Chuyển câu tiếp theo, ghi nhận câu trả lời và hiển thị màn hình tổng kết điểm số.',
      bloomLevel: 'Create',
      masteryPercentage: 90
    }
  ],
  sections: [
    {
      id: 'sec-17-3-1',
      lessonId: 'les-17-3',
      order: 1,
      conceptName: 'Thiết kế Quiz Engine',
      title: '1. Kiến trúc Cỗ máy thi trắc nghiệm (Quiz Engine)',
      explanation: 'Cấu trúc Quiz gồm: (1) Mảng danh sách câu hỏi `questions` (mỗi câu gồm `question`, `options`, `correctIndex`); (2) Biến chỉ số câu hiện tại `currentIndex = 0`; (3) Biến điểm `score = 0`. Khi người dùng click chọn phương án: so sánh với `correctIndex`, cộng điểm nếu đúng, đổi màu nút (Xanh nếu đúng, Đỏ nếu sai), và kích hoạt nút "Câu tiếp theo".',
      syntax: 'const questions = [\n  { q: "JS có mấy kiểu nguyên thủy?", options: ["5", "7", "10"], correct: 1 }\n];',
      codeExample: `// Giả lập Logic chấm điểm trắc nghiệm
const sampleQuestion = {
  q: "Từ khóa nào khai báo hằng số trong ES6?",
  options: ["var", "let", "const"],
  correctIndex: 2
};

function answerQuestion(selectedIndex: number) {
  const isCorrect = selectedIndex === sampleQuestion.correctIndex;
  return {
    isCorrect,
    feedback: isCorrect ? "Chính xác! (+10 điểm)" : "Sai rồi, hãy xem lại lý thuyết!"
  };
}

console.log("Chọn đáp án 2 (const):", answerQuestion(2).feedback);
console.log("Chọn đáp án 0 (var):", answerQuestion(0).feedback);`,
      lineByLineExplanation: [
        { line: 8, text: 'So sánh chỉ số người dùng chọn với correctIndex.' },
        { line: 10, text: 'Trả về trạng thái đúng/sai và lời phản hồi trực quan.' }
      ],
      commonMistakes: [
        'Để người dùng có thể click chọn nhiều lần sau khi đã biết đáp án đúng (cần vô hiệu hóa các nút sau lần click đầu).'
      ],
      whenToUse: 'Xây dựng hệ thống ôn thi chứng chỉ, kiểm tra trắc nghiệm tuyển dụng hoặc game Kahoot.',
      whenNotToUse: 'Không dùng cho các bài kiểm tra tự luận cần chấm điểm văn bản.',
      realWorldUseCase: 'Hệ thống thi trắc nghiệm Quiz trực tuyến trên Coursera, Udemy.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-17-3',
    title: 'Thực hành tính phần trăm điểm thi đạt được',
    description: 'Tính tỷ lệ phần trăm điểm: (score / totalQuestions) * 100.',
    starterCode: `const score = 8;
const totalQuestions = 10;
const percentage = (score / totalQuestions) * 100;

console.log(\`Kết quả đạt được: \${percentage}%\`);`,
    expectedConsoleOutput: 'Kết quả đạt được: 80%',
    hint: '(score / totalQuestions) * 100.'
  },
  exercises: {
    basic: {
      id: 'ex-17-3-1',
      lessonId: 'les-17-3',
      title: 'Bài tập Cơ bản: Kiểm tra xem đã đến câu hỏi cuối cùng chưa',
      difficulty: 'basic',
      learningObjectiveIds: ['LO17.3.1'],
      description: 'Cho currentIndex = 4 và totalQuestions = 5. Viết câu lệnh kiểm tra nếu currentIndex === totalQuestions - 1 thì in "Câu cuối cùng, chuẩn bị xem kết quả", ngược lại in "Vẫn còn câu tiếp theo".',
      starterCode: `const currentIndex = 4;
const totalQuestions = 5;

if (currentIndex === totalQuestions - 1) {
  console.log("Câu cuối cùng, chuẩn bị xem kết quả");
} else {
  console.log("Vẫn còn câu tiếp theo");
}`,
      solutionCode: `const currentIndex = 4;
const totalQuestions = 5;
if (currentIndex === totalQuestions - 1) {
  console.log("Câu cuối cùng, chuẩn bị xem kết quả");
} else {
  console.log("Vẫn còn câu tiếp theo");
}`,
      testCases: [
        { id: 'tc-1', description: 'Câu cuối cùng', expectedOutput: 'Câu cuối cùng, chuẩn bị xem kết quả' }
      ],
      hints: ['currentIndex === totalQuestions - 1'],
      explanation: 'Chỉ số câu cuối cùng luôn bằng tổng số câu trừ 1.'
    },
    intermediate: {
      id: 'ex-17-3-2',
      lessonId: 'les-17-3',
      title: 'Bài tập Trung bình: Đánh giá xếp loại theo điểm thi',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO17.3.1'],
      description: 'Viết hàm getGrade(percent) nếu percent >= 80 trả về "Xuất sắc", percent >= 50 trả về "Đạt", ngược lại trả về "Chưa đạt". Chạy thử với 85 và in kết quả.',
      starterCode: `function getGrade(percent) {
  if (percent >= 80) return "Xuất sắc";
  if (percent >= 50) return "Đạt";
  return "Chưa đạt";
}

console.log("Xếp loại:", getGrade(85));`,
      solutionCode: `function getGrade(percent) {
  if (percent >= 80) return "Xuất sắc";
  if (percent >= 50) return "Đạt";
  return "Chưa đạt";
}
console.log("Xếp loại:", getGrade(85));`,
      testCases: [
        { id: 'tc-1', description: 'Xuất sắc', expectedOutput: 'Xếp loại: Xuất sắc' }
      ],
      hints: ['percent >= 80 ? "Xuất sắc" : ...'],
      explanation: 'Màn hình tổng kết điểm số cung cấp đánh giá xếp loại năng lực cho học viên.'
    },
    challenge: {
      id: 'ex-17-3-3',
      lessonId: 'les-17-3',
      title: 'Bài tập Thử thách: Xáo trộn ngẫu nhiên thứ tự câu hỏi (Fisher-Yates Shuffle)',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO17.3.1'],
      description: 'Trong các kỳ thi, câu hỏi cần được xáo trộn ngẫu nhiên. Cho mảng [1, 2, 3]. Dùng phương thức sort(() => Math.random() - 0.5) hoặc Fisher-Yates để xáo trộn. Viết hàm kiểm tra độ dài mảng sau xáo trộn vẫn giữ nguyên là 3. In "Độ dài giữ nguyên: true".',
      starterCode: `const questions = [1, 2, 3];
const shuffled = [...questions].sort(() => Math.random() - 0.5);

console.log("Độ dài giữ nguyên:", shuffled.length === 3);`,
      solutionCode: `const questions = [1, 2, 3];
const shuffled = [...questions].sort(() => Math.random() - 0.5);
console.log("Độ dài giữ nguyên:", shuffled.length === 3);`,
      testCases: [
        { id: 'tc-1', description: 'Độ dài giữ nguyên', expectedOutput: 'Độ dài giữ nguyên: true' }
      ],
      hints: ['shuffled.length === 3'],
      explanation: 'Xáo trộn câu hỏi và các phương án trả lời chống gian lận trong phòng thi.'
    }
  },
  quiz: {
    id: 'quiz-17-3',
    lessonId: 'les-17-3',
    title: 'Trắc nghiệm Quiz App',
    passingScore: 70,
    questions: []
  },
  summary: [
    'Quản lý trạng thái câu hỏi currentIndex, điểm số score và màn hình tổng kết.',
    'Khóa nút sau khi chọn để chống click liên tiếp.'
  ],
  suggestedBookmarks: ['Kiến trúc Quiz Engine', 'Tính điểm và xếp loại kết quả thi']
};

export const LESSON_17_4: Lesson = {
  id: 'les-17-4',
  moduleId: 'mod-17',
  track: 'javascript',
  language: 'javascript',
  title: '17.4 Mini Project 4: Form đăng ký nâng cao với Live Validation',
  order: 4,
  durationMinutes: 90,
  difficulty: 'Nâng cao',
  prerequisites: ['Đã học Module 12 Form & Validation'],
  learningObjectives: [
    {
      id: 'LO17.4.1',
      code: 'LO17.4.1',
      title: 'Xây dựng Form đăng ký người dùng với kiểm tra thời gian thực (Live Validation)',
      description: 'Phản hồi tức thì khi người dùng rời ô (Blur) hoặc gõ phím (Input).',
      bloomLevel: 'Create',
      masteryPercentage: 90
    }
  ],
  sections: [
    {
      id: 'sec-17-4-1',
      lessonId: 'les-17-4',
      order: 1,
      conceptName: 'Live Validation và Phản hồi giao diện thời gian thực',
      title: '1. Kiến trúc Live Validation mượt mà',
      explanation: 'Live Validation kiểm tra dữ liệu ngay khi người dùng đang nhập. Khi ô nhập hợp lệ: hiển thị viền xanh và icon tích xanh; khi ô bị lỗi: hiển thị viền đỏ kèm dòng chữ hướng dẫn chi tiết cách sửa. Khi toàn bộ các trường đều hợp lệ, nút Đăng ký mới được kích hoạt (Enable).',
      syntax: 'input.addEventListener("blur", () => validateField(input));\ninput.addEventListener("input", () => clearFieldError(input));',
      codeExample: `// Giả lập trạng thái Form đăng ký hoàn chỉnh
const registerForm = {
  values: { username: "khanhn", email: "khanhn@fpt.edu.vn", pass: "12345678" },
  errors: {} as Record<string, string>,
  
  validate() {
    this.errors = {};
    if (this.values.username.length < 3) this.errors.username = "Tên đăng nhập >= 3 ký tự";
    if (!this.values.email.includes("@")) this.errors.email = "Email không hợp lệ";
    if (this.values.pass.length < 8) this.errors.pass = "Mật khẩu >= 8 ký tự";
    return Object.keys(this.errors).length === 0;
  }
};

const isValid = registerForm.validate();
console.log("Form đăng ký đạt chuẩn 100%?", isValid);
console.log("Danh sách lỗi tồn đọng:", registerForm.errors);`,
      lineByLineExplanation: [
        { line: 6, text: 'Hàm validate quét toàn bộ các trường dữ liệu.' },
        { line: 10, text: 'Trả về true nếu không còn bất kỳ lỗi nào.' }
      ],
      commonMistakes: [
        'Báo lỗi ngay khi người dùng mới click vào ô nhập (hãy chờ họ gõ xong hoặc rời ô blur mới báo lỗi).'
      ],
      whenToUse: 'Dùng cho các form đăng ký tài khoản, thanh toán thẻ, mở tài khoản ngân hàng.',
      whenNotToUse: 'Không cần live validation cho ô tìm kiếm đơn giản.',
      realWorldUseCase: 'Form đăng ký tài khoản Google/Microsoft với bộ đo độ mạnh mật khẩu.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-17-4',
    title: 'Thực hành bật/tắt nút Đăng ký theo tính hợp lệ',
    description: 'Nếu form hợp lệ thì gán isSubmitDisabled = false.',
    starterCode: `const isFormValid = true;
const isSubmitDisabled = !isFormValid;

console.log("Nút Đăng ký có bị khóa không:", isSubmitDisabled);`,
    expectedConsoleOutput: 'Nút Đăng ký có bị khóa không: false',
    hint: 'Nút chỉ mở khóa khi toàn bộ form hợp lệ.'
  },
  exercises: {
    basic: {
      id: 'ex-17-4-1',
      lessonId: 'les-17-4',
      title: 'Bài tập Cơ bản: Thời điểm kích hoạt kiểm tra lỗi tốt nhất',
      difficulty: 'basic',
      learningObjectiveIds: ['LO17.4.1'],
      description: 'Theo chuẩn trải nghiệm người dùng (UX), sự kiện nào là thời điểm tốt nhất để kiểm tra lỗi lần đầu: "focus" (khi vừa bấm vào) hay "blur" (khi vừa nhập xong và rời đi)? In tên sự kiện.',
      starterCode: `const bestInitialEvent = "blur";
console.log("Thời điểm kiểm tra lần đầu tốt nhất:", bestInitialEvent);`,
      solutionCode: `const bestInitialEvent = "blur";
console.log("Thời điểm kiểm tra lần đầu tốt nhất:", bestInitialEvent);`,
      testCases: [
        { id: 'tc-1', description: 'Sự kiện blur', expectedOutput: 'Thời điểm kiểm tra lần đầu tốt nhất: blur' }
      ],
      hints: ['Chờ người dùng nhập xong rời ô mới kiểm tra'],
      explanation: 'Kiểm tra ở sự kiện blur tránh việc báo lỗi phiền toái khi người dùng chưa kịp gõ xong.'
    },
    intermediate: {
      id: 'ex-17-4-2',
      lessonId: 'les-17-4',
      title: 'Bài tập Trung bình: Viết bộ đo độ mạnh mật khẩu 3 mức',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO17.4.1'],
      description: 'Viết hàm getStrength(pass): nếu pass.length < 6 trả về "Yếu"; nếu pass.length >= 6 và có số trả về "Trung bình"; nếu >= 8 và có cả số lẫn chữ hoa trả về "Mạnh". Chạy thử với "Abc12345" và in kết quả.',
      starterCode: `function getStrength(pass) {
  if (pass.length >= 8 && /\\d/.test(pass) && /[A-Z]/.test(pass)) return "Mạnh";
  if (pass.length >= 6 && /\\d/.test(pass)) return "Trung bình";
  return "Yếu";
}

console.log("Độ mạnh:", getStrength("Abc12345"));`,
      solutionCode: `function getStrength(pass) {
  if (pass.length >= 8 && /\\d/.test(pass) && /[A-Z]/.test(pass)) return "Mạnh";
  if (pass.length >= 6 && /\\d/.test(pass)) return "Trung bình";
  return "Yếu";
}
console.log("Độ mạnh:", getStrength("Abc12345"));`,
      testCases: [
        { id: 'tc-1', description: 'Mức Mạnh', expectedOutput: 'Độ mạnh: Mạnh' }
      ],
      hints: ['Kiểm tra từ điều kiện chặt nhất (Mạnh) trước'],
      explanation: 'Thanh đo độ mạnh mật khẩu (Password Strength Bar) tăng cường bảo mật cho tài khoản người dùng.'
    },
    challenge: {
      id: 'ex-17-4-3',
      lessonId: 'les-17-4',
      title: 'Bài tập Thử thách: Kiểm tra điều khoản thỏa thuận (Terms of Service Checkbox)',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO17.4.1'],
      description: 'Form đăng ký chỉ gửi được khi người dùng đã tích chọn đồng ý điều khoản: checkbox.checked === true. Cho formData = { agreed: false }. Viết hàm kiểm tra nếu !formData.agreed ném lỗi "Bạn cần đồng ý với điều khoản sử dụng". In thông điệp lỗi bắt được.',
      starterCode: `const formData = { agreed: false };

try {
  if (!formData.agreed) {
    throw new Error("Bạn cần đồng ý với điều khoản sử dụng");
  }
} catch (e: any) {
  console.log("Lỗi:", e.message);
}`,
      solutionCode: `const formData = { agreed: false };
try {
  if (!formData.agreed) {
    throw new Error("Bạn cần đồng ý với điều khoản sử dụng");
  }
} catch (e: any) {
  console.log("Lỗi:", e.message);
}`,
      testCases: [
        { id: 'tc-1', description: 'Bắt lỗi chưa tích điều khoản', expectedOutput: 'Lỗi: Bạn cần đồng ý với điều khoản sử dụng' }
      ],
      hints: ['Kiểm tra if (!formData.agreed)'],
      explanation: 'Kiểm tra checkbox pháp lý bắt buộc trong mọi form đăng ký tài khoản.'
    }
  },
  quiz: {
    id: 'quiz-17-4',
    lessonId: 'les-17-4',
    title: 'Trắc nghiệm Live Form Validation',
    passingScore: 70,
    questions: []
  },
  summary: [
    'Kiểm tra ở sự kiện blur và dọn dẹp lỗi tức thì ở sự kiện input.',
    'Chỉ mở khóa nút Submit khi 100% các trường đều đạt tiêu chuẩn hợp lệ.'
  ],
  suggestedBookmarks: ['Quy tắc Live Validation', 'Thanh đo độ mạnh mật khẩu']
};

export const LESSON_17_5: Lesson = {
  id: 'les-17-5',
  moduleId: 'mod-17',
  track: 'javascript',
  language: 'javascript',
  title: '17.5 Mini Project 5: Weather Dashboard kết nối OpenWeather API',
  order: 5,
  durationMinutes: 120,
  difficulty: 'Nâng cao',
  prerequisites: ['Đã học Fetch API, async/await và JSON'],
  learningObjectives: [
    {
      id: 'LO17.5.1',
      code: 'LO17.5.1',
      title: 'Tích hợp API thời tiết thực tế từ dịch vụ bên thứ ba',
      description: 'Truyền query parameter (tên thành phố, API key, units=metric) và bóc tách dữ liệu nhiệt độ, độ ẩm.',
      bloomLevel: 'Create',
      masteryPercentage: 88
    }
  ],
  sections: [
    {
      id: 'sec-17-5-1',
      lessonId: 'les-17-5',
      order: 1,
      conceptName: 'Tích hợp REST API thời tiết',
      title: '1. Kiến trúc ứng dụng Weather Dashboard',
      explanation: 'Ứng dụng thời tiết kết nối API công khai (như OpenWeatherMap): (1) Người dùng nhập tên thành phố ("Hanoi", "Danang", "Ho Chi Minh"); (2) Gửi request GET kèm query parameters; (3) Bóc tách các trường: `main.temp` (nhiệt độ °C), `main.humidity` (độ ẩm %), `weather[0].description` (mô tả thời tiết); (4) Render thẻ card thời tiết đẹp mắt.',
      syntax: 'const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${KEY}`;',
      codeExample: `// Giả lập dữ liệu trả về từ OpenWeatherMap API
const mockWeatherData = {
  name: "Hà Nội",
  main: {
    temp: 28.5,
    humidity: 75
  },
  weather: [
    { main: "Clouds", description: "Nhiều mây, có mưa rào rải rác" }
  ]
};

function formatWeatherReport(data: typeof mockWeatherData) {
  const city = data.name;
  const temp = Math.round(data.main.temp);
  const desc = data.weather[0].description;
  return \`Thời tiết tại \${city}: \${temp}°C - \${desc}\`;
}

console.log(formatWeatherReport(mockWeatherData));`,
      lineByLineExplanation: [
        { line: 14, text: 'Làm tròn nhiệt độ bằng Math.round().' },
        { line: 16, text: 'Định dạng báo cáo thời tiết thân thiện bằng tiếng Việt.' }
      ],
      commonMistakes: [
        'Lộ API Key riêng tư lên mã nguồn frontend public trên GitHub (hãy dùng biến môi trường hoặc backend proxy).'
      ],
      whenToUse: 'Dự án thể hiện năng lực kết nối và xử lý API bên ngoài trong CV xin việc.',
      whenNotToUse: 'Không gọi API liên tục mỗi giây để tránh vượt hạn mức giới hạn (Rate Limit) của gói miễn phí.',
      realWorldUseCase: 'Widget thời tiết trên bảng tin cổng thông tin điện tử FPT.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-17-5',
    title: 'Thực hành tạo URL truy vấn có Query Parameters',
    description: 'Tạo URL gọi thời tiết cho thành phố "Hanoi".',
    starterCode: `const city = "Hanoi";
const apiUrl = \`https://api.weather.com/v1?q=\${encodeURIComponent(city)}&units=metric\`;

console.log("URL gọi API:", apiUrl);`,
    expectedConsoleOutput: 'URL gọi API: https://api.weather.com/v1?q=Hanoi&units=metric',
    hint: 'Dùng encodeURIComponent để mã hóa tên thành phố nếu có khoảng trắng.'
  },
  exercises: {
    basic: {
      id: 'ex-17-5-1',
      lessonId: 'les-17-5',
      title: 'Bài tập Cơ bản: Đổi độ C sang độ F',
      difficulty: 'basic',
      learningObjectiveIds: ['LO17.5.1'],
      description: 'Công thức đổi độ C sang F: F = (C * 9/5) + 32. Viết hàm cToF(c) làm tròn số nguyên. Chạy thử với 30 độ C và in "30°C = [F]°F".',
      starterCode: `function cToF(c) {
  return Math.round((c * 9/5) + 32);
}

console.log(\`30°C = \${cToF(30)}°F\`);`,
      solutionCode: `function cToF(c) {
  return Math.round((c * 9/5) + 32);
}
console.log(\`30°C = \${cToF(30)}°F\`);`,
      testCases: [
        { id: 'tc-1', description: '30°C = 86°F', expectedOutput: '30°C = 86°F' }
      ],
      hints: ['(c * 9/5) + 32'],
      explanation: 'Tính năng chuyển đổi đơn vị °C / °F linh hoạt trong ứng dụng thời tiết.'
    },
    intermediate: {
      id: 'ex-17-5-2',
      lessonId: 'les-17-5',
      title: 'Bài tập Trung bình: Chọn icon phù hợp theo điều kiện thời tiết',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO17.5.1'],
      description: 'Viết hàm getWeatherIcon(status): nếu "Rain" trả về "Mưa", nếu "Clear" trả về "Nắng", ngược lại trả về "Mây". Chạy thử với "Rain" và in kết quả.',
      starterCode: `function getWeatherIcon(status) {
  if (status === "Rain") return "Mưa";
  if (status === "Clear") return "Nắng";
  return "Mây";
}

console.log("Biểu tượng thời tiết:", getWeatherIcon("Rain"));`,
      solutionCode: `function getWeatherIcon(status) {
  if (status === "Rain") return "Mưa";
  if (status === "Clear") return "Nắng";
  return "Mây";
}
console.log("Biểu tượng thời tiết:", getWeatherIcon("Rain"));`,
      testCases: [
        { id: 'tc-1', description: 'Icon Mưa', expectedOutput: 'Biểu tượng thời tiết: Mưa' }
      ],
      hints: ['status === "Rain" ? "Mưa" : ...'],
      explanation: 'Ánh xạ mã trạng thái thời tiết từ API sang giao diện icon trực quan.'
    },
    challenge: {
      id: 'ex-17-5-3',
      lessonId: 'les-17-5',
      title: 'Bài tập Thử thách: Ghi nhớ lịch sử 3 thành phố tra cứu gần nhất',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO17.5.1'],
      description: 'Khi tra cứu thành phố mới, thêm vào đầu mảng và chỉ giữ tối đa 3 thành phố không trùng lặp. Viết hàm addSearchHistory(history, newCity) trả về mảng lịch sử mới. Chạy thử thêm "Hải Phòng" vào ["Hà Nội", "Đà Nẵng", "TP HCM"]. In mảng.',
      starterCode: `function addSearchHistory(history, newCity) {
  const filtered = history.filter(c => c !== newCity);
  return [newCity, ...filtered].slice(0, 3);
}

const currentHistory = ["Hà Nội", "Đà Nẵng", "TP HCM"];
const updated = addSearchHistory(currentHistory, "Hải Phòng");
console.log("Lịch sử 3 thành phố gần nhất:", updated);`,
      solutionCode: `function addSearchHistory(history, newCity) {
  const filtered = history.filter(c => c !== newCity);
  return [newCity, ...filtered].slice(0, 3);
}
const currentHistory = ["Hà Nội", "Đà Nẵng", "TP HCM"];
const updated = addSearchHistory(currentHistory, "Hải Phòng");
console.log("Lịch sử 3 thành phố gần nhất:", updated);`,
      testCases: [
        { id: 'tc-1', description: 'Giữ tối đa 3 thành phố mới nhất', expectedOutput: 'Lịch sử 3 thành phố gần nhất: [ \'Hải Phòng\', \'Hà Nội\', \'Đà Nẵng\' ]' }
      ],
      hints: ['[newCity, ...filtered].slice(0, 3)'],
      explanation: 'Tính năng lưu lịch sử tìm kiếm gần nhất kết hợp Local Storage.'
    }
  },
  quiz: {
    id: 'quiz-17-5',
    lessonId: 'les-17-5',
    title: 'Trắc nghiệm Weather Dashboard',
    passingScore: 70,
    questions: []
  },
  summary: [
    'Tích hợp RESTful API thực tế với query parameters và xử lý JSON lồng nhau.',
    'Bảo mật API key và lưu lịch sử tìm kiếm tối ưu trải nghiệm.'
  ],
  suggestedBookmarks: ['Tích hợp REST API thời tiết', 'Lưu lịch sử tìm kiếm']
};

export const LESSON_17_6: Lesson = {
  id: 'les-17-6',
  moduleId: 'mod-17',
  track: 'javascript',
  language: 'javascript',
  title: '17.6 Capstone Project: Hệ thống Quản lý Sinh viên (Student Management)',
  order: 6,
  durationMinutes: 150,
  difficulty: 'Nâng cao',
  prerequisites: ['Đã hoàn thành toàn bộ lộ trình JavaScript từ Module 1 đến Module 16'],
  learningObjectives: [
    {
      id: 'LO17.6.1',
      code: 'LO17.6.1',
      title: 'Xây dựng trọn vẹn đồ án Capstone Quản lý Sinh viên (Student Management System)',
      description: 'Tích hợp toàn diện: CRUD sinh viên, Tìm kiếm theo tên/mã, Lọc theo ngành, Sắp xếp điểm GPA, Phân trang và Lưu trữ dữ liệu.',
      bloomLevel: 'Create',
      masteryPercentage: 95
    }
  ],
  sections: [
    {
      id: 'sec-17-6-1',
      lessonId: 'les-17-6',
      order: 1,
      conceptName: 'Đồ án Capstone Tốt nghiệp JavaScript',
      title: '1. Kiến trúc Đồ án Tốt nghiệp Quản lý Sinh viên',
      explanation: 'Đồ án Capstone là bài tập tổng hợp toàn bộ các kỹ năng của một lập trình viên JavaScript Frontend chuyên nghiệp: (1) Kiến trúc MVC/Data-Driven tách rời UI và State; (2) Bộ lọc đa tiêu chí (Search từ khóa, Filter theo ngành, Sort theo điểm GPA tăng/giảm); (3) Thuật toán Phân trang (Pagination với Math.ceil); (4) Validation form thêm/sửa sinh viên; (5) Đồng bộ liên tục với Local Storage.',
      syntax: '// Cấu trúc dữ liệu Sinh viên\ninterface Student {\n  id: string;\n  name: string;\n  email: string;\n  major: "CNTT" | "UDPM" | "TKDH";\n  gpa: number;\n}',
      codeExample: `// Lõi xử lý Lọc và Sắp xếp Sinh viên
const students = [
  { id: "SV01", name: "Nguyễn Văn An", major: "CNTT", gpa: 3.8 },
  { id: "SV02", name: "Trần Thị Bình", major: "TKDH", gpa: 3.2 },
  { id: "SV03", name: "Lê Hoàng Cường", major: "CNTT", gpa: 3.9 }
];

function queryStudents(list: typeof students, keyword: string, major: string) {
  return list
    .filter(s => major === "ALL" || s.major === major)
    .filter(s => s.name.toLowerCase().includes(keyword.toLowerCase()))
    .sort((a, b) => b.gpa - a.gpa); // Xếp GPA giảm dần
}

const result = queryStudents(students, "Cường", "CNTT");
console.log("Tìm kiếm sinh viên ngành CNTT tên Cường:", result[0].name, "- GPA:", result[0].gpa);`,
      lineByLineExplanation: [
        { line: 9, text: 'Lọc kết hợp theo ngành học.' },
        { line: 10, text: 'Tìm kiếm không phân biệt hoa - thường.' },
        { line: 11, text: 'Sắp xếp danh sách theo điểm GPA giảm dần.' }
      ],
      commonMistakes: [
        'Sắp xếp mảng gốc bằng sort() làm thay đổi trực tiếp dữ liệu (luôn dùng toSorted hoặc [...arr].sort).'
      ],
      whenToUse: 'Dự án trọng tâm để hoàn thành học phần và đưa vào hồ sơ Portfolio xin việc (CV).',
      whenNotToUse: 'Không có ngoại lệ - Đồ án Capstone là bài kiểm tra toàn diện năng lực lập trình.',
      realWorldUseCase: 'Hệ thống Quản lý Đào tạo sinh viên tại các trường Đại học, Cao đẳng.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-17-6',
    title: 'Thực hành tính điểm GPA trung bình toàn trường',
    description: 'Dùng reduce tính GPA trung bình của danh sách sinh viên.',
    starterCode: `const gpas = [3.5, 3.8, 3.2, 4.0];
const avgGpa = gpas.reduce((sum, val) => sum + val, 0) / gpas.length;

console.log("GPA trung bình:", avgGpa.toFixed(2));`,
    expectedConsoleOutput: 'GPA trung bình: 3.63',
    hint: 'avgGpa.toFixed(2) làm tròn 2 chữ số thập phân.'
  },
  exercises: {
    basic: {
      id: 'ex-17-6-1',
      lessonId: 'les-17-6',
      title: 'Bài tập Cơ bản: Xếp loại học lực theo thang điểm GPA 4.0',
      difficulty: 'basic',
      learningObjectiveIds: ['LO17.6.1'],
      description: 'Quy chế đào tạo: GPA >= 3.6 là "Xuất sắc", GPA >= 3.2 là "Giỏi", GPA >= 2.5 là "Khá", còn lại "Trung bình". Viết hàm classifyGpa(gpa). Chạy thử với 3.7 và in kết quả.',
      starterCode: `function classifyGpa(gpa) {
  if (gpa >= 3.6) return "Xuất sắc";
  if (gpa >= 3.2) return "Giỏi";
  if (gpa >= 2.5) return "Khá";
  return "Trung bình";
}

console.log("Xếp loại học lực:", classifyGpa(3.7));`,
      solutionCode: `function classifyGpa(gpa) {
  if (gpa >= 3.6) return "Xuất sắc";
  if (gpa >= 3.2) return "Giỏi";
  if (gpa >= 2.5) return "Khá";
  return "Trung bình";
}
console.log("Xếp loại học lực:", classifyGpa(3.7));`,
      testCases: [
        { id: 'tc-1', description: 'Xuất sắc', expectedOutput: 'Xếp loại học lực: Xuất sắc' }
      ],
      hints: ['Kiểm tra gpa >= 3.6 trước'],
      explanation: 'Quy chế xếp loại học lực chuẩn hệ đào tạo tín chỉ theo thang điểm 4.'
    },
    intermediate: {
      id: 'ex-17-6-2',
      lessonId: 'les-17-6',
      title: 'Bài tập Trung bình: Thuật toán cắt trang phân trang (Pagination Slice)',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO17.6.1'],
      description: 'Viết hàm paginate(items, page, pageSize) trả về mảng con bằng slice: start = (page - 1) * pageSize; end = start + pageSize. Cho mảng 10 phần tử [1..10], lấy trang 2 với pageSize = 3. In kết quả.',
      starterCode: `function paginate(items, page, pageSize) {
  const start = (page - 1) * pageSize;
  return items.slice(start, start + pageSize);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const page2 = paginate(numbers, 2, 3);
console.log("Dữ liệu trang 2:", page2);`,
      solutionCode: `function paginate(items, page, pageSize) {
  const start = (page - 1) * pageSize;
  return items.slice(start, start + pageSize);
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const page2 = paginate(numbers, 2, 3);
console.log("Dữ liệu trang 2:", page2);`,
      testCases: [
        { id: 'tc-1', description: 'Trang 2 lấy 4, 5, 6', expectedOutput: 'Dữ liệu trang 2: [ 4, 5, 6 ]' }
      ],
      hints: ['(page - 1) * pageSize'],
      explanation: 'Công thức toán học kinh điển cho mọi tính năng phân trang dữ liệu ở Frontend.'
    },
    challenge: {
      id: 'ex-17-6-3',
      lessonId: 'les-17-6',
      title: 'Bài tập Thử thách: Thống kê số lượng sinh viên theo từng Ngành học',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO17.6.1'],
      description: 'Cho danh sách sinh viên. Dùng reduce đếm số sinh viên của mỗi ngành: { "CNTT": 2, "TKDH": 1 }. In object thống kê.',
      starterCode: `const studentList = [
  { id: "1", major: "CNTT" },
  { id: "2", major: "TKDH" },
  { id: "3", major: "CNTT" }
];

const stats = studentList.reduce((acc: Record<string, number>, s) => {
  acc[s.major] = (acc[s.major] || 0) + 1;
  return acc;
}, {});

console.log("Thống kê theo ngành:", stats);`,
      solutionCode: `const studentList = [
  { id: "1", major: "CNTT" },
  { id: "2", major: "TKDH" },
  { id: "3", major: "CNTT" }
];
const stats = studentList.reduce((acc: Record<string, number>, s) => {
  acc[s.major] = (acc[s.major] || 0) + 1;
  return acc;
}, {});
console.log("Thống kê theo ngành:", stats);`,
      testCases: [
        { id: 'tc-1', description: 'Thống kê chuẩn xác', expectedOutput: 'Thống kê theo ngành: { CNTT: 2, TKDH: 1 }' }
      ],
      hints: ['acc[s.major] = (acc[s.major] || 0) + 1'],
      explanation: 'Tính năng báo cáo thống kê Dashboard là điểm sáng lớn trong đồ án Capstone.'
    }
  },
  quiz: {
    id: 'quiz-17-6',
    lessonId: 'les-17-6',
    title: 'Trắc nghiệm Capstone Project',
    passingScore: 70,
    questions: []
  },
  summary: [
    'Tích hợp toàn diện các kỹ năng: CRUD, Search, Filter, Sort, Pagination, Local Storage.',
    'Hoàn thành đồ án tốt nghiệp chuẩn chỉnh để đưa vào Portfolio nghề nghiệp.'
  ],
  suggestedBookmarks: ['Đồ án Capstone Quản lý Sinh viên', 'Thuật toán phân trang dữ liệu']
};

export const JS_MODULE_17_LESSONS: Lesson[] = [
  LESSON_17_1,
  LESSON_17_2,
  LESSON_17_3,
  LESSON_17_4,
  LESSON_17_5,
  LESSON_17_6
];
