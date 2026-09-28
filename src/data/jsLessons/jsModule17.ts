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
  prerequisites: [
    'Nắm vững toán tử số học ở Module 3',
    'Cấu trúc rẽ nhánh switch-case ở Module 4'
  ],
  learningObjectives: [
    {
      id: 'LO17.1.1',
      code: 'LO17.1.1',
      title: 'Xây dựng bộ xử lý logic máy tính bỏ túi',
      description: 'Lập trình hàm tính toán 4 phép toán cơ bản (+, -, *, /) có xử lý lỗi chia cho 0 và lưu trữ bộ nhớ tạm.',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    },
    {
      id: 'LO17.1.2',
      code: 'LO17.1.2',
      title: 'Quản lý trạng thái màn hình hiển thị (Display State)',
      description: 'Cập nhật chuỗi biểu thức, nối số khi bấm phím và định dạng kết quả hiển thị.',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    }
  ],
  sections: [
    {
      id: 'sec-17-1-1',
      lessonId: 'les-17-1',
      order: 1,
      conceptName: 'Kiến trúc máy tính Calculator',
      title: '1. Kiến trúc Máy tính Bỏ túi chuẩn hóa',
      explanation: 'Một máy tính bỏ túi bao gồm 3 thành phần trạng thái chính: 1) Số thứ nhất (`prevOperand`), 2) Toán tử đang chọn (`operation`: +, -, *, /), 3) Số đang nhập (`currentOperand`). Khi người dùng nhấn nút bằng (=), máy tính lấy hai số tính toán theo toán tử và cập nhật kết quả lên màn hình.',
      syntax: 'function calculate(a, b, op) {\n  switch(op) {\n    case "+": return a + b;\n    case "-": return a - b;\n    case "*": return a * b;\n    case "/": return b !== 0 ? a / b : "Lỗi chia cho 0";\n  }\n}',
      codeExample: `// Bộ máy tính tính toán hoàn chỉnh
class CalculatorEngine {
  constructor() {
    this.current = "0";
    this.prev = "";
    this.operation = null;
  }

  appendNumber(number) {
    if (number === "." && this.current.includes(".")) return;
    if (this.current === "0" && number !== ".") {
      this.current = String(number);
    } else {
      this.current += String(number);
    }
  }

  chooseOperation(op) {
    if (this.current === "") return;
    if (this.prev !== "") this.compute();
    this.operation = op;
    this.prev = this.current;
    this.current = "";
  }

  compute() {
    const prevNum = parseFloat(this.prev);
    const currNum = parseFloat(this.current);
    if (isNaN(prevNum) || isNaN(currNum)) return;

    let result;
    switch (this.operation) {
      case "+": result = prevNum + currNum; break;
      case "-": result = prevNum - currNum; break;
      case "*": result = prevNum * currNum; break;
      case "/": result = currNum !== 0 ? prevNum / currNum : "Error"; break;
      default: return;
    }

    this.current = String(result);
    this.operation = null;
    this.prev = "";
  }
}

const calc = new CalculatorEngine();
calc.appendNumber("1");
calc.appendNumber("5");
calc.chooseOperation("+");
calc.appendNumber("2");
calc.appendNumber("5");
calc.compute();
console.log("Kết quả 15 + 25 =", calc.current);`,
      lineByLineExplanation: [
        { line: 9, text: 'appendNumber kiểm tra dấu chấm thập phân tránh nhập hai dấu chấm như 1.2.3.' },
        { line: 17, text: 'chooseOperation lưu số thứ nhất vào prev và chuẩn bị nhận số thứ hai.' },
        { line: 26, text: 'compute tính toán chính xác và xử lý an toàn trường hợp chia cho 0.' }
      ],
      commonMistakes: [
        'Dùng hàm eval() để tính toán chuỗi biểu thức (rất nguy hiểm về mặt bảo mật và dễ bị tiêm mã độc XSS).'
      ],
      whenToUse: 'Dùng cấu trúc State Machine này cho các công cụ tính giá, tính lãi suất, tính BMI.',
      whenNotToUse: 'Không dùng eval() cho việc tính toán toán học.',
      realWorldUseCase: 'Widget tính giá tạm tính trong giỏ hàng hoặc máy tính mini trong ứng dụng văn phòng.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-17-1',
    title: 'Thực hành: Tính toán biểu thức nhiều bước liên hoàn',
    description: 'Chạy thử phép tính nhân sau đó cộng tiếp và in kết quả trung gian lên Console.',
    starterCode: `function simpleCalc(a, op, b) {
  switch(op) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return b !== 0 ? a / b : "Error";
    default: return 0;
  }
}

const step1 = simpleCalc(10, "*", 5); // 50
const step2 = simpleCalc(step1, "+", 25); // 75
console.log("Bước 1 (10 * 5) =", step1);
console.log("Bước 2 (50 + 25) =", step2);`,
    expectedConsoleOutput: 'Bước 1 (10 * 5) = 50\nBước 2 (50 + 25) = 75',
    hint: 'Kết quả bước trước trở thành toán hạng đầu tiên của bước tiếp theo.',
    language: 'javascript'
  },
  exercises: {
    basic: {
      id: 'ex-17-1-1',
      lessonId: 'les-17-1',
      title: 'Bài tập Cơ bản: Xử lý phép chia an toàn chống lỗi chia 0',
      difficulty: 'basic',
      learningObjectiveIds: ['LO17.1.1'],
      description: 'Viết hàm `safeDivide(a, b)`. Nếu b === 0 trả về `"Lỗi: Không thể chia cho 0"`, ngược lại trả về `a / b`. Gọi với `safeDivide(10, 0)` và in kết quả: `Kết quả: Lỗi: Không thể chia cho 0`.',
      starterCode: `function safeDivide(a, b) {
  // Kiểm tra b === 0:
}

console.log("Kết quả:", safeDivide(10, 0));`,
      solutionCode: `function safeDivide(a, b) {
  if (b === 0) return "Lỗi: Không thể chia cho 0";
  return a / b;
}

console.log("Kết quả:", safeDivide(10, 0));`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra chặn chia cho 0',
          expectedOutput: 'Kết quả: Lỗi: Không thể chia cho 0'
        }
      ],
      hints: ['if (b === 0) return "Lỗi: Không thể chia cho 0";'],
      explanation: 'Phép chia cho 0 trong toán học không xác định, cần chặn sớm trong code.'
    },
    intermediate: {
      id: 'ex-17-1-2',
      lessonId: 'les-17-1',
      title: 'Bài tập Trung bình: Hàm tính phần trăm (Percentage Function)',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO17.1.1'],
      description: 'Trong máy tính bỏ túi, phím `%` chia giá trị hiện tại cho 100. Viết hàm `toPercentage(value)` nhận số và trả về `value / 100`. Áp dụng với số 75 và in ra: `Giá trị phần trăm: 0.75`.',
      starterCode: `function toPercentage(value) {
  // Chia cho 100:
}

console.log("Giá trị phần trăm:", toPercentage(75));`,
      solutionCode: `function toPercentage(value) {
  return value / 100;
}

console.log("Giá trị phần trăm:", toPercentage(75));`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra 75% = 0.75',
          expectedOutput: 'Giá trị phần trăm: 0.75'
        }
      ],
      hints: ['return value / 100;'],
      explanation: 'Tính năng % thông dụng trên mọi máy tính Casio hoặc smartphone.'
    },
    challenge: {
      id: 'ex-17-1-3',
      lessonId: 'les-17-1',
      title: 'Bài tập Thử thách: Đổi dấu âm dương (+/- Toggle Sign)',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO17.1.1'],
      description: 'Viết hàm `toggleSign(numStr)` nhận chuỗi số. Nếu chuỗi bắt đầu bằng `"-"` thì xóa dấu trừ đi; nếu là số dương thì thêm `"-"` vào trước. (Số "0" giữ nguyên "0"). Kiểm tra với "25" rồi "-50". In ra 2 dòng kết quả.',
      starterCode: `function toggleSign(numStr) {
  // Đổi dấu âm dương:
}

console.log(toggleSign("25"));
console.log(toggleSign("-50"));`,
      solutionCode: `function toggleSign(numStr) {
  if (numStr === "0") return "0";
  return numStr.startsWith("-") ? numStr.slice(1) : "-" + numStr;
}

console.log(toggleSign("25"));
console.log(toggleSign("-50"));`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra đổi dấu: 25 -> -25 và -50 -> 50',
          expectedOutput: '-25\n50'
        }
      ],
      hints: ['numStr.startsWith("-") ? numStr.slice(1) : "-" + numStr'],
      explanation: 'Xử lý chuỗi ký tự linh hoạt khi xây dựng phím đảo dấu.'
    }
  },
  quiz: {
    id: 'quiz-17-1',
    lessonId: 'les-17-1',
    title: 'Trắc nghiệm: Calculator Logic',
    passingScore: 70,
    questions: [
      {
        id: 'q-17-1-1',
        lessonId: 'les-17-1',
        learningObjectiveId: 'LO17.1.1',
        type: 'multiple_choice',
        difficulty: 'easy',
        prompt: 'Tại sao KHÔNG nên sử dụng hàm eval() để tính toán biểu thức máy tính trong JavaScript?',
        options: [
          { id: 'a', text: 'eval() chạy chậm hơn 1000 lần' },
          { id: 'b', text: 'eval() có lỗ hổng bảo mật nghiêm trọng cho phép thực thi mã độc tùy ý (Code Injection)' },
          { id: 'c', text: 'eval() chỉ tính được phép cộng' },
          { id: 'd', text: 'eval() không hỗ trợ số thập phân' }
        ],
        correctAnswer: 'b',
        explanation: 'Hàm eval() là cấm kỵ hàng đầu trong an toàn thông tin web vì cho phép người dùng tiêm script độc.',
        relatedLessonId: 'les-17-1'
      }
    ]
  },
  summary: [
    'Máy tính bỏ túi quản lý trạng thái: toán hạng trước, toán tử và số đang nhập.',
    'Luôn kiểm tra an toàn trường hợp chia cho 0 và dấu chấm thập phân trùng lặp.',
    'Tuyệt đối không dùng eval(), tự viết bộ điều khiển switch-case sạch sẽ.'
  ],
  suggestedBookmarks: [
    'Mô hình máy trạng thái hữu hạn (Finite State Machine - FSM) trong Calculator',
    'Thư viện Decimal.js xử lý sai số dấu phẩy động (0.1 + 0.2 === 0.30000000000000004)'
  ]
};

export const LESSON_17_2: Lesson = {
  id: 'les-17-2',
  moduleId: 'mod-17',
  track: 'javascript',
  language: 'javascript',
  title: '17.2 Mini Project 2: Todo List CRUD có Local Storage',
  order: 2,
  durationMinutes: 120,
  difficulty: 'Trung bình',
  prerequisites: [
    'Nắm vững phương thức mảng ở Module 7',
    'Local Storage ở Module 16'
  ],
  learningObjectives: [
    {
      id: 'LO17.2.1',
      code: 'LO17.2.1',
      title: 'Xây dựng trọn vẹn chu trình CRUD dữ liệu công việc',
      description: 'Create (thêm), Read (đọc), Update (sửa trạng thái hoàn thành), Delete (xóa) trên danh sách công việc.',
      bloomLevel: 'Apply',
      masteryPercentage: 95
    },
    {
      id: 'LO17.2.2',
      code: 'LO17.2.2',
      title: 'Đồng bộ hóa tức thì với Local Storage',
      description: 'Lưu tự động vào Local Storage mỗi khi có thay đổi dữ liệu để duy trì trạng thái sau khi tải lại trang.',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    }
  ],
  sections: [
    {
      id: 'sec-17-2-1',
      lessonId: 'les-17-2',
      order: 1,
      conceptName: 'Kiến trúc Todo List CRUD hoàn chỉnh',
      title: '1. Kiến trúc Todo List CRUD với Local Storage',
      explanation: 'Ứng dụng Todo List là bài kiểm tra năng lực kinh điển của lập trình viên frontend. Dữ liệu trung tâm là một mảng các đối tượng todo: `[{ id, title, completed, createdAt }]`. Mỗi thao tác thêm, toggle hoàn thành, sửa hay xóa đều thực hiện trên mảng bộ nhớ, sau đó đồng bộ hóa ngay lập tức vào Local Storage.',
      syntax: 'class TodoService {\n  add(title) {}\n  toggle(id) {}\n  delete(id) {}\n  save() {}\n}',
      codeExample: `// Hệ thống quản lý Todo List chuyên nghiệp
class TodoManager {
  constructor(storage) {
    this.storage = storage;
    this.storageKey = "my_todos";
    this.todos = JSON.parse(storage.getItem(this.storageKey) || "[]");
  }

  save() {
    this.storage.setItem(this.storageKey, JSON.stringify(this.todos));
  }

  // 1. CREATE
  addTodo(title) {
    if (!title.trim()) return;
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      completed: false
    };
    this.todos.push(newTodo);
    this.save();
    return newTodo;
  }

  // 2. UPDATE (Toggle)
  toggleTodo(id) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      this.save();
    }
  }

  // 3. DELETE
  deleteTodo(id) {
    this.todos = this.todos.filter(t => t.id !== id);
    this.save();
  }

  // 4. READ
  getActiveCount() {
    return this.todos.filter(t => !t.completed).length;
  }
}

// Khởi chạy kiểm thử:
const mockStore = {
  db: {},
  setItem(k, v) { this.db[k] = v; },
  getItem(k) { return this.db[k] || null; }
};

const app = new TodoManager(mockStore);
const task1 = app.addTodo("Học bài 17.2 Todo List");
const task2 = app.addTodo("Làm bài tập trắc nghiệm");
console.log("Số việc cần làm ban đầu:", app.getActiveCount()); // 2

app.toggleTodo(task1.id); // Đánh dấu task1 xong
console.log("Số việc còn lại sau khi xong task 1:", app.getActiveCount()); // 1`,
      lineByLineExplanation: [
        { line: 6, text: 'Constructor đọc mảng todos cũ từ storage ngay khi ứng dụng khởi chạy.' },
        { line: 15, text: 'addTodo tạo đối tượng có id duy nhất bằng Date.now().' },
        { line: 26, text: 'toggleTodo tìm công việc theo id và đảo ngược trạng thái completed.' },
        { line: 34, text: 'deleteTodo dùng filter() để loại bỏ công việc được chọn.' }
      ],
      commonMistakes: [
        'Trực tiếp sửa DOM mà không cập nhật mảng dữ liệu (State) khiến khi F5 toàn bộ thay đổi bị mất.'
      ],
      whenToUse: 'Mô hình dữ liệu CRUD này là nền tảng của mọi ứng dụng quản lý công việc, giỏ hàng, ghi chú.',
      whenNotToUse: 'Tránh lưu hàng ngàn mục vào Local Storage gây nghẽn hiệu năng I/O.',
      realWorldUseCase: 'Các ứng dụng Trello, Todoist, Notion đều triển khai mô hình CRUD với lưu trữ offline.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-17-2',
    title: 'Thực hành: Thêm và đếm số công việc chưa hoàn thành',
    description: 'Chạy thử thao tác thêm 3 công việc, đánh dấu 1 việc hoàn thành và đếm số việc còn dang dở.',
    starterCode: `const todos = [];

function add(title) {
  todos.push({ id: todos.length + 1, title, completed: false });
}

add("Ôn tập kiến thức ES6");
add("Thực hành Todo List");
add("Đăng bài lên GitHub");

// Đánh dấu công việc 1 đã hoàn thành:
todos[0].completed = true;

const pendingTasks = todos.filter(t => !t.completed);
console.log("Tổng số công việc:", todos.length);
console.log("Công việc còn dang dở:", pendingTasks.length);`,
    expectedConsoleOutput: 'Tổng số công việc: 3\nCông việc còn dang dở: 2',
    hint: 'Dùng filter(t => !t.completed) để lấy danh sách công việc chưa hoàn thành.',
    language: 'javascript'
  },
  exercises: {
    basic: {
      id: 'ex-17-2-1',
      lessonId: 'les-17-2',
      title: 'Bài tập Cơ bản: Thêm một công việc mới vào mảng',
      difficulty: 'basic',
      learningObjectiveIds: ['LO17.2.1'],
      description: 'Cho mảng `todos = []`. Viết hàm `createTodo(title)` tạo object `{ id: 1, title, completed: false }`, push vào mảng `todos` và in: `Đã thêm: [title]`. Gọi với `"Học JavaScript"`.',
      starterCode: `const todos = [];

function createTodo(title) {
  // Tạo và thêm todo:
}

createTodo("Học JavaScript");`,
      solutionCode: `const todos = [];

function createTodo(title) {
  const item = { id: 1, title, completed: false };
  todos.push(item);
  console.log("Đã thêm:", title);
}

createTodo("Học JavaScript");`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra in thông báo thêm thành công',
          expectedOutput: 'Đã thêm: Học JavaScript'
        }
      ],
      hints: ['todos.push({ id: 1, title, completed: false });'],
      explanation: 'Thao tác tạo mới phần tử trong mảng CRUD.'
    },
    intermediate: {
      id: 'ex-17-2-2',
      lessonId: 'les-17-2',
      title: 'Bài tập Trung bình: Đảo trạng thái hoàn thành theo ID',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO17.2.1'],
      description: 'Cho mảng `todos = [{ id: 10, title: "Làm bài", completed: false }]`. Viết hàm `toggleComplete(id)` tìm theo id và đổi `completed = true`. Gọi hàm và in: `Trạng thái mới: true`.',
      starterCode: `const todos = [{ id: 10, title: "Làm bài", completed: false }];

function toggleComplete(id) {
  // Tìm và đảo ngược completed:
}

toggleComplete(10);
console.log("Trạng thái mới:", todos[0].completed);`,
      solutionCode: `const todos = [{ id: 10, title: "Làm bài", completed: false }];

function toggleComplete(id) {
  const task = todos.find(t => t.id === id);
  if (task) {
    task.completed = !task.completed;
  }
}

toggleComplete(10);
console.log("Trạng thái mới:", todos[0].completed);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra trạng thái đổi thành true',
          expectedOutput: 'Trạng thái mới: true'
        }
      ],
      hints: ['const task = todos.find(t => t.id === id); task.completed = !task.completed;'],
      explanation: 'Thao tác Update trong vòng đời CRUD.'
    },
    challenge: {
      id: 'ex-17-2-3',
      lessonId: 'les-17-2',
      title: 'Bài tập Thử thách: Xóa tất cả công việc đã hoàn thành (Clear Completed)',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO17.2.1', 'LO17.2.2'],
      description: 'Cho mảng gồm 3 công việc (2 việc completed: true, 1 việc completed: false). Viết hàm `clearCompleted()` giữ lại những công việc chưa xong. In ra: `Số việc còn lại sau dọn dẹp: 1`.',
      starterCode: `let list = [
  { id: 1, completed: true },
  { id: 2, completed: false },
  { id: 3, completed: true }
];

function clearCompleted() {
  // Lọc chỉ giữ lại việc chưa xong:
}

clearCompleted();
console.log("Số việc còn lại sau dọn dẹp:", list.length);`,
      solutionCode: `let list = [
  { id: 1, completed: true },
  { id: 2, completed: false },
  { id: 3, completed: true }
];

function clearCompleted() {
  list = list.filter(item => !item.completed);
}

clearCompleted();
console.log("Số việc còn lại sau dọn dẹp:", list.length);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra chỉ còn lại 1 công việc chưa hoàn thành',
          expectedOutput: 'Số việc còn lại sau dọn dẹp: 1'
        }
      ],
      hints: ['list = list.filter(item => !item.completed);'],
      explanation: 'Tính năng Clear Completed phổ biến trong các ứng dụng quản lý nhiệm vụ.'
    }
  },
  quiz: {
    id: 'quiz-17-2',
    lessonId: 'les-17-2',
    title: 'Trắc nghiệm: Todo List CRUD Architecture',
    passingScore: 70,
    questions: [
      {
        id: 'q-17-2-1',
        lessonId: 'les-17-2',
        learningObjectiveId: 'LO17.2.1',
        type: 'multiple_choice',
        difficulty: 'easy',
        prompt: 'Trong kiến trúc ứng dụng hiện đại (như Todo List), nguồn chân lý duy nhất (Single Source of Truth) nên là gì?',
        options: [
          { id: 'a', text: 'Mảng dữ liệu trạng thái (State/Array in memory)' },
          { id: 'b', text: 'Nội dung chữ hiển thị trực tiếp trên thẻ HTML' },
          { id: 'c', text: 'Mã CSS' },
          { id: 'd', text: 'Lịch sử URL trình duyệt' }
        ],
        correctAnswer: 'a',
        explanation: 'Luôn quản lý dữ liệu tập trung trong mảng State, sau đó render HTML từ State đó (Data-driven UI).',
        relatedLessonId: 'les-17-2'
      }
    ]
  },
  summary: [
    'Todo List bao gồm 4 thao tác CRUD: Create, Read, Update, Delete.',
    'Luôn thay đổi mảng dữ liệu (State) trước, sau đó đồng bộ vào Storage và render ra giao diện.',
    'Dùng filter() để xóa, find() để cập nhật và push() để thêm mới.'
  ],
  suggestedBookmarks: [
    'Mẫu kiến trúc State-driven UI trong Vanilla JavaScript',
    'Tối ưu hóa hiệu năng render danh sách lớn với Virtual DOM'
  ]
};

export const LESSON_17_3: Lesson = {
  id: 'les-17-3',
  moduleId: 'mod-17',
  track: 'javascript',
  language: 'javascript',
  title: '17.3 Mini Project 3: Ứng dụng thi trắc nghiệm (Interactive Quiz App)',
  order: 3,
  durationMinutes: 100,
  difficulty: 'Trung bình',
  prerequisites: [
    'Nắm vững Array và Object lồng nhau',
    'Cấu trúc điều kiện và biến đếm'
  ],
  learningObjectives: [
    {
      id: 'LO17.3.1',
      code: 'LO17.3.1',
      title: 'Quản lý trạng thái bài thi trắc nghiệm (Quiz Engine)',
      description: 'Theo dõi câu hỏi hiện tại, danh sách câu trả lời của thí sinh, tính điểm phần trăm và thời gian làm bài.',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    },
    {
      id: 'LO17.3.2',
      code: 'LO17.3.2',
      title: 'Kiểm tra đối chiếu đáp án và xếp loại năng lực',
      description: 'So khớp đáp án đúng/sai, hiển thị giải thích sư phạm chi tiết và xếp loại Đạt/Chưa đạt.',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    }
  ],
  sections: [
    {
      id: 'sec-17-3-1',
      lessonId: 'les-17-3',
      order: 1,
      conceptName: 'Kiến trúc Quiz Engine',
      title: '1. Kiến trúc Động cơ Thi trắc nghiệm (Quiz Engine)',
      explanation: 'Ứng dụng thi trắc nghiệm gồm ngân hàng câu hỏi `questions = [{ id, question, options, answer, explanation }]`. Động cơ (Engine) lưu chỉ số câu hỏi hiện tại `currentIndex`, đối tượng lưu đáp án chọn `answers = {}`, và điểm số `score`. Khi chuyển câu, kiểm tra xem đã đến câu cuối chưa để hiển thị bảng tổng kết.',
      syntax: 'class QuizEngine {\n  selectAnswer(qId, option) {}\n  calculateScore() {}\n  isFinished() {}\n}',
      codeExample: `// Ngân hàng câu hỏi mẫu
const quizQuestions = [
  {
    id: 1,
    question: "Từ khóa nào khai báo biến hằng số trong ES6?",
    options: ["var", "let", "const", "static"],
    correctAnswer: "const",
    explanation: "const dùng để khai báo biến không thể gán lại giá trị."
  },
  {
    id: 2,
    question: "Toán tử typeof null trả về kết quả gì?",
    options: ["null", "undefined", "object", "number"],
    correctAnswer: "object",
    explanation: "Đây là bug lịch sử từ năm 1995 của JavaScript."
  }
];

// Bộ xử lý chấm thi
function gradeQuiz(questions, studentAnswers) {
  let score = 0;
  questions.forEach(q => {
    if (studentAnswers[q.id] === q.correctAnswer) {
      score++;
    }
  });

  const percentage = (score / questions.length) * 100;
  return {
    correct: score,
    total: questions.length,
    percentage,
    passed: percentage >= 70
  };
}

const myAnswers = { 1: "const", 2: "object" };
const result = gradeQuiz(quizQuestions, myAnswers);
console.log("Số câu đúng:", result.correct + "/" + result.total);
console.log("Điểm phần trăm:", result.percentage + "%");
console.log("Kết quả:", result.passed ? "ĐẠT CHUẨN" : "CHƯA ĐẠT");`,
      lineByLineExplanation: [
        { line: 2, text: 'Mảng quizQuestions lưu trữ câu hỏi và đáp án đúng.' },
        { line: 20, text: 'gradeQuiz đối soát câu trả lời của sinh viên với đáp án chuẩn.' },
        { line: 28, text: 'Tính tỷ lệ phần trăm và đối chiếu ngưỡng đạt 70%.' }
      ],
      commonMistakes: [
        'Lưu đáp án đúng trực tiếp trong thuộc tính HTML khiến người dùng có thể Inspect mở DevTools xem đáp án.'
      ],
      whenToUse: 'Dùng cho các nền tảng học trực tuyến, thi chứng chỉ, khảo sát năng lực sinh viên.',
      whenNotToUse: 'Với các bài thi chính thức cần chấm ở phía Server để chống gian lận.',
      realWorldUseCase: 'Hệ thống trắc nghiệm của Quizlet, Kahoot hay chính nền tảng JS Master này.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-17-3',
    title: 'Thực hành: Chấm điểm bài thi 3 câu hỏi',
    description: 'Chạy thử thuật toán chấm điểm và hiển thị phản hồi kết quả thi chi tiết.',
    starterCode: `const testQuestions = [
  { id: 1, answer: "A" },
  { id: 2, answer: "B" },
  { id: 3, answer: "C" }
];

const studentChoices = { 1: "A", 2: "B", 3: "D" }; // Đúng 2, sai 1

let correct = 0;
testQuestions.forEach(q => {
  if (studentChoices[q.id] === q.answer) correct++;
});

console.log("Số câu trả lời đúng:", correct + "/" + testQuestions.length);
console.log("Tỉ lệ chính xác:", Math.round((correct / testQuestions.length) * 100) + "%");`,
    expectedConsoleOutput: 'Số câu trả lời đúng: 2/3\nTỉ lệ chính xác: 67%',
    hint: 'So sánh studentChoices[q.id] với q.answer.',
    language: 'javascript'
  },
  exercises: {
    basic: {
      id: 'ex-17-3-1',
      lessonId: 'les-17-3',
      title: 'Bài tập Cơ bản: Kiểm tra đáp án một câu hỏi đơn lẻ',
      difficulty: 'basic',
      learningObjectiveIds: ['LO17.3.2'],
      description: 'Cho câu hỏi `{ correct: "B" }`. Viết hàm `checkAnswer(selected)` so sánh với `"B"`. Nếu đúng in `"Chính xác!"`, nếu sai in `"Sai rồi!"`. Kiểm tra với `"B"`.',
      starterCode: `const q = { correct: "B" };

function checkAnswer(selected) {
  // So sánh selected với q.correct:
}

checkAnswer("B");`,
      solutionCode: `const q = { correct: "B" };

function checkAnswer(selected) {
  if (selected === q.correct) {
    console.log("Chính xác!");
  } else {
    console.log("Sai rồi!");
  }
}

checkAnswer("B");`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra in Chính xác!',
          expectedOutput: 'Chính xác!'
        }
      ],
      hints: ['if (selected === q.correct) console.log("Chính xác!");'],
      explanation: 'So sánh nghiêm ngặt đáp án lựa chọn.'
    },
    intermediate: {
      id: 'ex-17-3-2',
      lessonId: 'les-17-3',
      title: 'Bài tập Trung bình: Xếp loại học lực theo điểm số phần trăm',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO17.3.2'],
      description: 'Viết hàm `getGradeRank(percentage)`. Nếu >= 90 trả về `"Xuất sắc"`; >= 70 trả về `"Đạt"`; còn lại trả về `"Cần học lại"`. Kiểm tra với điểm 85 và in: `Xếp loại: Đạt`.',
      starterCode: `function getGradeRank(percentage) {
  // Xếp loại theo phần trăm:
}

console.log("Xếp loại:", getGradeRank(85));`,
      solutionCode: `function getGradeRank(percentage) {
  if (percentage >= 90) return "Xuất sắc";
  if (percentage >= 70) return "Đạt";
  return "Cần học lại";
}

console.log("Xếp loại:", getGradeRank(85));`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra xếp loại Đạt cho mức 85%',
          expectedOutput: 'Xếp loại: Đạt'
        }
      ],
      hints: ['Dùng if (percentage >= 90) ... else if (percentage >= 70)'],
      explanation: 'Phân loại kết quả học tập theo chuẩn năng lực.'
    },
    challenge: {
      id: 'ex-17-3-3',
      lessonId: 'les-17-3',
      title: 'Bài tập Thử thách: Trộn ngẫu nhiên thứ tự câu hỏi (Shuffle Questions)',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO17.3.1'],
      description: 'Viết hàm `shuffleArray(arr)` dùng thuật toán Fisher-Yates hoặc `.sort(() => Math.random() - 0.5)` để đảo thứ tự mảng. Kiểm tra mảng `[1, 2, 3, 4]` sau khi trộn có độ dài vẫn là 4 phần tử. In: `Số lượng câu hỏi sau trộn: 4`.',
      starterCode: `function shuffleArray(arr) {
  // Đảo ngẫu nhiên mảng:
}

const list = shuffleArray([1, 2, 3, 4]);
console.log("Số lượng câu hỏi sau trộn:", list.length);`,
      solutionCode: `function shuffleArray(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

const list = shuffleArray([1, 2, 3, 4]);
console.log("Số lượng câu hỏi sau trộn:", list.length);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra mảng trộn bảo toàn số lượng 4 phần tử',
          expectedOutput: 'Số lượng câu hỏi sau trộn: 4'
        }
      ],
      hints: ['[...arr].sort(() => Math.random() - 0.5)'],
      explanation: 'Trộn ngẫu nhiên câu hỏi giúp đề thi khách quan, chống học vẹt theo thứ tự.'
    }
  },
  quiz: {
    id: 'quiz-17-3',
    lessonId: 'les-17-3',
    title: 'Trắc nghiệm: Quiz App Design',
    passingScore: 70,
    questions: [
      {
        id: 'q-17-3-1',
        lessonId: 'les-17-3',
        learningObjectiveId: 'LO17.3.1',
        type: 'multiple_choice',
        difficulty: 'easy',
        prompt: 'Để theo dõi tiến độ câu hỏi người dùng đang làm (ví dụ Câu 3 / 10), biến trạng thái nên lưu giá trị gì?',
        options: [
          { id: 'a', text: 'Chỉ số nguyên currentIndex (từ 0 đến questions.length - 1)' },
          { id: 'b', text: 'Toàn bộ nội dung chữ của câu hỏi' },
          { id: 'c', text: 'Tên file script' },
          { id: 'd', text: 'Ngày giờ hiện tại' }
        ],
        correctAnswer: 'a',
        explanation: 'currentIndex là biến đếm số nguyên tối ưu nhất để truy xuất phần tử questions[currentIndex].',
        relatedLessonId: 'les-17-3'
      }
    ]
  },
  summary: [
    'Quiz App quản lý: Ngân hàng câu hỏi, chỉ số hiện tại, đáp án đã chọn và điểm số.',
    'Chấm điểm dựa trên so khớp mảng đáp án học viên với đáp án chuẩn.',
    'Cung cấp phản hồi sư phạm giải thích chi tiết giúp người học hiểu sâu lỗi sai.'
  ],
  suggestedBookmarks: [
    'Thuật toán xáo trộn Fisher-Yates Shuffle chuẩn xác',
    'Bộ hẹn giờ đếm ngược (Countdown Timer) tích hợp tự động nộp bài thi'
  ]
};

export const LESSON_17_4: Lesson = {
  id: 'les-17-4',
  moduleId: 'mod-17',
  track: 'javascript',
  language: 'javascript',
  title: '17.4 Mini Project 4: Form đăng ký nâng cao với Live Validation',
  order: 4,
  durationMinutes: 90,
  difficulty: 'Trung bình',
  prerequisites: [
    'Đã học Form & Event ở Module 11 và 12',
    'Biểu thức chính quy Regular Expression cơ bản'
  ],
  learningObjectives: [
    {
      id: 'LO17.4.1',
      code: 'LO17.4.1',
      title: 'Kiểm tra dữ liệu trực tiếp khi gõ phím (Live Validation)',
      description: 'Lắng nghe sự kiện input/blur để kiểm tra hợp lệ tức thì: tên, email, mật khẩu và xác nhận mật khẩu.',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    },
    {
      id: 'LO17.4.2',
      code: 'LO17.4.2',
      title: 'Đánh giá độ mạnh mật khẩu (Password Strength Meter)',
      description: 'Thuật toán chấm điểm mật khẩu dựa trên độ dài, chữ hoa, số và ký tự đặc biệt.',
      bloomLevel: 'Apply',
      masteryPercentage: 88
    }
  ],
  sections: [
    {
      id: 'sec-17-4-1',
      lessonId: 'les-17-4',
      order: 1,
      conceptName: 'Bộ quy tắc Validation cho Form đăng ký',
      title: '1. Kiến trúc Bộ xác thực Form (Validator Engine)',
      explanation: 'Form đăng ký người dùng yêu cầu các quy tắc chặt chẽ: 1) Tên không được để trống, 2) Email đúng định dạng regex, 3) Mật khẩu tối thiểu 8 ký tự, 4) Xác nhận mật khẩu phải trùng khớp 100%. Bộ xác thực gom các quy tắc này thành một hàm trả về object `{ isValid: boolean, errors: Record<string, string> }`.',
      syntax: 'function validateForm(formData) {\n  const errors = {};\n  if (!formData.name) errors.name = "Tên bắt buộc";\n  return { isValid: Object.keys(errors).length === 0, errors };\n}',
      codeExample: `// Bộ kiểm tra tính hợp lệ của Form đăng ký
function validateRegistrationForm(formValues) {
  const errors = {};

  // 1. Kiểm tra Họ tên
  if (!formValues.fullname || formValues.fullname.trim().length < 3) {
    errors.fullname = "Họ tên phải có ít nhất 3 ký tự.";
  }

  // 2. Kiểm tra Email bằng Regex chuẩn
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formValues.email || !emailRegex.test(formValues.email)) {
    errors.email = "Định dạng email không hợp lệ.";
  }

  // 3. Kiểm tra độ dài mật khẩu
  if (!formValues.password || formValues.password.length < 8) {
    errors.password = "Mật khẩu phải có tối thiểu 8 ký tự.";
  }

  // 4. Kiểm tra xác nhận mật khẩu
  if (formValues.password !== formValues.confirmPassword) {
    errors.confirmPassword = "Mật khẩu xác nhận không khớp.";
  }

  const isValid = Object.keys(errors).length === 0;
  return { isValid, errors };
}

// Kiểm thử với dữ liệu hợp lệ:
const validData = {
  fullname: "Nguyễn Văn An",
  email: "an.nguyen@gmail.com",
  password: "Password123",
  confirmPassword: "Password123"
};

const check = validateRegistrationForm(validData);
console.log("Trạng thái Form hợp lệ:", check.isValid);
console.log("Số lỗi phát hiện:", Object.keys(check.errors).length);`,
      lineByLineExplanation: [
        { line: 5, text: 'Kiểm tra độ dài tối thiểu của họ tên.' },
        { line: 10, text: 'Dùng regex kiểm tra cấu trúc email có chứa @ và dấu chấm tên miền.' },
        { line: 20, text: 'So khớp tuyệt đối giữa password và confirmPassword.' },
        { line: 24, text: 'isValid là true khi đối tượng errors không chứa bất kỳ khóa lỗi nào.' }
      ],
      commonMistakes: [
        'Chỉ kiểm tra validate ở Frontend mà bỏ qua Backend (Frontend validation chỉ phục vụ trải nghiệm người dùng, Backend validation mới là chốt chặn an ninh).'
      ],
      whenToUse: 'Áp dụng cho mọi trang đăng ký, đăng nhập, thanh toán và gửi phản hồi.',
      whenNotToUse: 'Tránh thông báo lỗi quá sớm khi người dùng vừa mới gõ được 1 ký tự (nên validate ở sự kiện blur hoặc debounce).',
      realWorldUseCase: 'Mọi form đăng ký tài khoản của Google, Facebook đều có tính năng Live Validation tức thì.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-17-4',
    title: 'Thực hành: Phát hiện mật khẩu xác nhận không khớp',
    description: 'Chạy thử hàm xác thực khi người dùng gõ sai mật khẩu xác nhận và xem thông báo lỗi sinh ra.',
    starterCode: `function checkPasswords(pass1, pass2) {
  if (pass1 !== pass2) {
    return { ok: false, message: "Mật khẩu xác nhận không trùng khớp!" };
  }
  return { ok: true, message: "Mật khẩu hợp lệ." };
}

const test1 = checkPasswords("12345678", "12345678");
const test2 = checkPasswords("12345678", "abcdefgh");

console.log("Lần 1:", test1.message);
console.log("Lần 2:", test2.message);`,
    expectedConsoleOutput: 'Lần 1: Mật khẩu hợp lệ.\nLần 2: Mật khẩu xác nhận không trùng khớp!',
    hint: 'So sánh pass1 !== pass2.',
    language: 'javascript'
  },
  exercises: {
    basic: {
      id: 'ex-17-4-1',
      lessonId: 'les-17-4',
      title: 'Bài tập Cơ bản: Kiểm tra định dạng Email hợp lệ',
      difficulty: 'basic',
      learningObjectiveIds: ['LO17.4.1'],
      description: 'Viết hàm `isValidEmail(email)` dùng regex `/@/` kiểm tra xem email có chứa ký tự `@` hay không. Kiểm tra với `"sv@fpt.edu.vn"` và in ra: `Email hợp lệ: true`.',
      starterCode: `function isValidEmail(email) {
  // Kiểm tra email chứa @:
}

console.log("Email hợp lệ:", isValidEmail("sv@fpt.edu.vn"));`,
      solutionCode: `function isValidEmail(email) {
  return /@/.test(email);
}

console.log("Email hợp lệ:", isValidEmail("sv@fpt.edu.vn"));`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra email có chứa @ trả về true',
          expectedOutput: 'Email hợp lệ: true'
        }
      ],
      hints: ['return /@/.test(email);'],
      explanation: 'Toán tử regex.test(str) trả về boolean.'
    },
    intermediate: {
      id: 'ex-17-4-2',
      lessonId: 'les-17-4',
      title: 'Bài tập Trung bình: Đánh giá độ mạnh mật khẩu (Strength Checker)',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO17.4.2'],
      description: 'Viết hàm `checkPasswordStrength(pw)`. Nếu độ dài < 8 trả về `"Yếu"`; nếu >= 8 và có số `/[0-9]/` trả về `"Mạnh"`; còn lại trả về `"Trung bình"`. Kiểm tra với `"Secret123"` và in: `Độ mạnh: Mạnh`.',
      starterCode: `function checkPasswordStrength(pw) {
  // Đánh giá độ mạnh:
}

console.log("Độ mạnh:", checkPasswordStrength("Secret123"));`,
      solutionCode: `function checkPasswordStrength(pw) {
  if (pw.length < 8) return "Yếu";
  if (/[0-9]/.test(pw)) return "Mạnh";
  return "Trung bình";
}

console.log("Độ mạnh:", checkPasswordStrength("Secret123"));`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra mật khẩu dài trên 8 có số là Mạnh',
          expectedOutput: 'Độ mạnh: Mạnh'
        }
      ],
      hints: ['Kiểm tra if (pw.length < 8) trước, sau đó /[0-9]/.test(pw)'],
      explanation: 'Thuật toán phân cấp độ mạnh mật khẩu bảo vệ tài khoản người dùng.'
    },
    challenge: {
      id: 'ex-17-4-3',
      lessonId: 'les-17-4',
      title: 'Bài tập Thử thách: Kiểm tra độ tuổi tối thiểu 18 tuổi',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO17.4.1'],
      description: 'Cho năm sinh của người dùng (ví dụ: 2010). Viết hàm `isAdult(birthYear, currentYear = 2026)`. Nếu `currentYear - birthYear >= 18` trả về `true`, ngược lại `false`. Kiểm tra với năm 2005 và in: `Đủ 18 tuổi: true`.',
      starterCode: `function isAdult(birthYear, currentYear = 2026) {
  // Tính độ tuổi:
}

console.log("Đủ 18 tuổi:", isAdult(2005));`,
      solutionCode: `function isAdult(birthYear, currentYear = 2026) {
  return currentYear - birthYear >= 18;
}

console.log("Đủ 18 tuổi:", isAdult(2005));`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra sinh năm 2005 đủ 18 tuổi năm 2026',
          expectedOutput: 'Đủ 18 tuổi: true'
        }
      ],
      hints: ['return currentYear - birthYear >= 18;'],
      explanation: 'Xác thực độ tuổi là quy định pháp lý bắt buộc trong nhiều dịch vụ trực tuyến.'
    }
  },
  quiz: {
    id: 'quiz-17-4',
    lessonId: 'les-17-4',
    title: 'Trắc nghiệm: Form Live Validation',
    passingScore: 70,
    questions: [
      {
        id: 'q-17-4-1',
        lessonId: 'les-17-4',
        learningObjectiveId: 'LO17.4.1',
        type: 'multiple_choice',
        difficulty: 'easy',
        prompt: 'Sự kiện DOM nào lý tưởng nhất để thực hiện kiểm tra dữ liệu ngay khi người dùng rời con trỏ khỏi ô nhập liệu?',
        options: [
          { id: 'a', text: 'Sự kiện blur' },
          { id: 'b', text: 'Sự kiện click' },
          { id: 'c', text: 'Sự kiện resize' },
          { id: 'd', text: 'Sự kiện scroll' }
        ],
        correctAnswer: 'a',
        explanation: 'Sự kiện blur kích hoạt khi ô input mất tiêu điểm (người dùng chuyển sang ô khác), là thời điểm vàng để validate.',
        relatedLessonId: 'les-17-4'
      }
    ]
  },
  summary: [
    'Live Validation tăng tính tiện dụng bằng cách phản hồi lỗi ngay lập tức.',
    'Sử dụng biểu thức chính quy (Regex) để kiểm tra cấu trúc email, số điện thoại.',
    'Bắt buộc validate cả ở Frontend (trải nghiệm) lẫn Backend (an toàn thông tin).'
  ],
  suggestedBookmarks: [
    'Bảng biểu thức chính quy (Regex Cheatsheet) cho Email, Phone VN, Password',
    'Thư viện kiểm tra dữ liệu phổ biến: Zod, Yup, Joi'
  ]
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
  prerequisites: [
    'Làm chủ fetch() và async/await ở Module 15',
    'Xử lý lỗi mạng và chuỗi JSON'
  ],
  learningObjectives: [
    {
      id: 'LO17.5.1',
      code: 'LO17.5.1',
      title: 'Tích hợp 3rd-party REST API thời tiết',
      description: 'Gửi yêu cầu mạng kèm API Key, xử lý Query Parameters (thành phố, đơn vị Celsius) và bóc tách dữ liệu JSON.',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    },
    {
      id: 'LO17.5.2',
      code: 'LO17.5.2',
      title: 'Xây dựng Weather Dashboard trực quan',
      description: 'Hiển thị nhiệt độ, độ ẩm, sức gió, biểu tượng thời tiết và thông báo khi không tìm thấy thành phố.',
      bloomLevel: 'Apply',
      masteryPercentage: 88
    }
  ],
  sections: [
    {
      id: 'sec-17-5-1',
      lessonId: 'les-17-5',
      order: 1,
      conceptName: 'Tích hợp Weather API',
      title: '1. Kiến trúc Ứng dụng Thời tiết Weather Dashboard',
      explanation: 'Weather Dashboard kết nối tới OpenWeather API (hoặc dịch vụ tương đương) qua URL: `https://api.openweathermap.org/data/2.5/weather?q={city}&appid={apiKey}&units=metric`. Dữ liệu trả về chứa nhiệt độ (`main.temp`), độ ẩm (`main.humidity`), vận tốc gió (`wind.speed`) và mô tả thời tiết (`weather[0].description`).',
      syntax: 'const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;\nconst res = await fetch(url);',
      codeExample: `// Dịch vụ thời tiết WeatherService
class WeatherService {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  // Giả lập lấy dữ liệu thời tiết thực tế
  async getWeatherData(cityName) {
    console.log("Đang tra cứu thời tiết cho:", cityName);

    // Mô phỏng phản hồi từ OpenWeatherMap:
    const mockWeatherResponse = {
      ok: true,
      status: 200,
      json: async () => ({
        city: cityName,
        temp: 28.5,
        humidity: 75,
        windSpeed: 3.6,
        description: "Có mây rải rác"
      })
    };

    if (!mockWeatherResponse.ok) {
      throw new Error("Không tìm thấy thông tin thời tiết cho " + cityName);
    }

    const data = await mockWeatherResponse.json();
    return {
      location: data.city,
      temperature: Math.round(data.temp) + "°C",
      humidity: data.humidity + "%",
      condition: data.description
    };
  }
}

// Chạy thử nghiệm:
async function runWeatherApp() {
  const service = new WeatherService("DEMO_API_KEY");
  const weather = await service.getWeatherData("Đà Nẵng");
  console.log("Địa điểm:", weather.location);
  console.log("Nhiệt độ hiện tại:", weather.temperature);
  console.log("Tình trạng:", weather.condition);
}

runWeatherApp();`,
      lineByLineExplanation: [
        { line: 8, text: 'getWeatherData nhận tên thành phố và gửi yêu cầu mạng.' },
        { line: 20, text: 'Kiểm tra phản hồi nếu thành phố không tồn tại (lỗi 404).' },
        { line: 24, text: 'Chuẩn hóa định dạng hiển thị nhiệt độ kèm ký hiệu °C.' }
      ],
      commonMistakes: [
        'Hardcode API key bí mật lên mã nguồn công khai trên GitHub (nên dùng biến môi trường .env).'
      ],
      whenToUse: 'Dùng làm đồ án môn học hoặc tính năng tra cứu thời tiết trong các cổng thông tin, trang tin tức.',
      whenNotToUse: 'Không gọi API liên tục mỗi giây mà cần lưu cache Local Storage để tránh vượt giới hạn API Rate Limit.',
      realWorldUseCase: 'Widget thời tiết trên màn hình khóa smartphone hoặc ứng dụng dự báo nông nghiệp.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-17-5',
    title: 'Thực hành: Chuyển đổi nhiệt độ Kelvin sang Celsius',
    description: 'Chạy thử hàm chuyển đổi đơn vị nhiệt độ chuẩn của API (Kelvin) sang độ C (Celsius = Kelvin - 273.15).',
    starterCode: `function kelvinToCelsius(kelvin) {
  return Math.round(kelvin - 273.15);
}

const tempK = 301.15; // Nhiệt độ từ API gốc
const tempC = kelvinToCelsius(tempK);

console.log("Nhiệt độ Kelvin:", tempK, "K");
console.log("Nhiệt độ Celsius:", tempC, "°C");`,
    expectedConsoleOutput: 'Nhiệt độ Kelvin: 301.15 K\nNhiệt độ Celsius: 28 °C',
    hint: 'Lấy kelvin trừ 273.15 và làm tròn bằng Math.round().',
    language: 'javascript'
  },
  exercises: {
    basic: {
      id: 'ex-17-5-1',
      lessonId: 'les-17-5',
      title: 'Bài tập Cơ bản: Định dạng nhiệt độ có ký hiệu độ C',
      difficulty: 'basic',
      learningObjectiveIds: ['LO17.5.2'],
      description: 'Viết hàm `formatTemperature(tempNumber)` làm tròn nhiệt độ và thêm chuỗi `"°C"`. Gọi hàm với `27.8` và in ra: `Nhiệt độ: 28°C`.',
      starterCode: `function formatTemperature(tempNumber) {
  // Làm tròn và ghép °C:
}

console.log("Nhiệt độ:", formatTemperature(27.8));`,
      solutionCode: `function formatTemperature(tempNumber) {
  return Math.round(tempNumber) + "°C";
}

console.log("Nhiệt độ:", formatTemperature(27.8));`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra làm tròn 27.8 thành 28°C',
          expectedOutput: 'Nhiệt độ: 28°C'
        }
      ],
      hints: ['return Math.round(tempNumber) + "°C";'],
      explanation: 'Hàm Math.round làm tròn số nguyên gần nhất.'
    },
    intermediate: {
      id: 'ex-17-5-2',
      lessonId: 'les-17-5',
      title: 'Bài tập Trung bình: Xây dựng URL truy vấn thời tiết',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO17.5.1'],
      description: 'Tạo hàm `buildWeatherUrl(city, apiKey)` trả về URL: `"https://api.weather.com/v1?q=" + encodeURIComponent(city) + "&key=" + apiKey`. Gọi với `"Hà Nội"` và `"KEY123"`. In ra URL hoàn chỉnh.',
      starterCode: `function buildWeatherUrl(city, apiKey) {
  // Ghép chuỗi URL an toàn:
}

console.log(buildWeatherUrl("Hà Nội", "KEY123"));`,
      solutionCode: `function buildWeatherUrl(city, apiKey) {
  return \`https://api.weather.com/v1?q=\${encodeURIComponent(city)}&key=\${apiKey}\`;
}

console.log(buildWeatherUrl("Hà Nội", "KEY123"));`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra URL được mã hóa ký tự tiếng Việt an toàn',
          expectedOutput: 'https://api.weather.com/v1?q=H%C3%A0%20N%E1%BB%99i&key=KEY123'
        }
      ],
      hints: ['encodeURIComponent(city) mã hóa khoảng trắng và dấu tiếng Việt'],
      explanation: 'Luôn dùng encodeURIComponent khi ghép tham số tiếng Việt vào Query String URL.'
    },
    challenge: {
      id: 'ex-17-5-3',
      lessonId: 'les-17-5',
      title: 'Bài tập Thử thách: Lưu lịch sử tra cứu thời tiết vào Storage',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO17.5.1', 'LO17.5.2'],
      description: 'Cho storage rỗng. Viết hàm `saveSearchCity(city)` đọc mảng `search_history` từ storage, thêm `city` vào đầu mảng (không trùng lặp, tối đa 3 thành phố), và lưu lại. Tra cứu lần lượt "Hà Nội", "Đà Nẵng", "TP.HCM". In ra danh sách lịch sử.',
      starterCode: `const store = {
  db: {},
  setItem(k, v) { this.db[k] = v; },
  getItem(k) { return this.db[k] || null; }
};

function saveSearchCity(city) {
  // Thêm thành phố vào đầu lịch sử, tối đa 3 mục:
}

saveSearchCity("Hà Nội");
saveSearchCity("Đà Nẵng");
saveSearchCity("TP.HCM");

const history = JSON.parse(store.getItem("search_history"));
console.log("Lịch sử tìm kiếm gần nhất:", history.join(", "));`,
      solutionCode: `const store = {
  db: {},
  setItem(k, v) { this.db[k] = v; },
  getItem(k) { return this.db[k] || null; }
};

function saveSearchCity(city) {
  let list = JSON.parse(store.getItem("search_history")) || [];
  list = list.filter(c => c !== city);
  list.unshift(city);
  if (list.length > 3) list = list.slice(0, 3);
  store.setItem("search_history", JSON.stringify(list));
}

saveSearchCity("Hà Nội");
saveSearchCity("Đà Nẵng");
saveSearchCity("TP.HCM");

const history = JSON.parse(store.getItem("search_history"));
console.log("Lịch sử tìm kiếm gần nhất:", history.join(", "));`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra danh sách lịch sử gồm TP.HCM, Đà Nẵng, Hà Nội',
          expectedOutput: 'Lịch sử tìm kiếm gần nhất: TP.HCM, Đà Nẵng, Hà Nội'
        }
      ],
      hints: ['Dùng unshift() để đưa lên đầu và slice(0, 3) để giới hạn 3 mục'],
      explanation: 'Tính năng Search History nâng cao trải nghiệm người dùng trong các ứng dụng tra cứu.'
    }
  },
  quiz: {
    id: 'quiz-17-5',
    lessonId: 'les-17-5',
    title: 'Trắc nghiệm: Weather API Integration',
    passingScore: 70,
    questions: [
      {
        id: 'q-17-5-1',
        lessonId: 'les-17-5',
        learningObjectiveId: 'LO17.5.1',
        type: 'multiple_choice',
        difficulty: 'easy',
        prompt: 'Hàm nào trong JavaScript nên được dùng để mã hóa an toàn tên thành phố có dấu tiếng Việt (như "Hà Nội") khi ghép vào URL?',
        options: [
          { id: 'a', text: 'encodeURIComponent()' },
          { id: 'b', text: 'JSON.stringify()' },
          { id: 'c', text: 'escapeSQL()' },
          { id: 'd', text: 'parseInt()' }
        ],
        correctAnswer: 'a',
        explanation: 'encodeURIComponent mã hóa các ký tự đặc biệt, dấu tiếng Việt và khoảng trắng thành mã URL chuẩn (%20, %C3...).',
        relatedLessonId: 'les-17-5'
      }
    ]
  },
  summary: [
    'Tích hợp 3rd-party REST API yêu cầu truyền API Key và xử lý Query Parameters.',
    'Sử dụng encodeURIComponent() khi truyền chuỗi có dấu tiếng Việt lên URL.',
    'Kết hợp Local Storage để ghi nhớ lịch sử tìm kiếm giúp ứng dụng chuyên nghiệp.'
  ],
  suggestedBookmarks: [
    'Tài liệu OpenWeatherMap API Current Weather Data',
    'Xử lý Geolocation API của trình duyệt để tự động định vị thời tiết nơi người dùng đứng'
  ]
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
  prerequisites: [
    'Tổng hợp toàn bộ kiến thức từ Module 1 đến Module 17',
    'Nắm vững CRUD, Search, Filter, Sort, Validation và Local Storage'
  ],
  learningObjectives: [
    {
      id: 'LO17.6.1',
      code: 'LO17.6.1',
      title: 'Xây dựng hoàn chỉnh Capstone Project Quản lý Sinh viên',
      description: 'Tích hợp đầy đủ: Thêm sinh viên (có validation), Danh sách bảng (Table), Tìm kiếm theo tên, Lọc theo chuyên ngành, Sắp xếp điểm GPA và Lưu trữ Local Storage.',
      bloomLevel: 'Create',
      masteryPercentage: 95
    },
    {
      id: 'LO17.6.2',
      code: 'LO17.6.2',
      title: 'Tổ chức mã nguồn theo mô hình kiến trúc MVC / Service',
      description: 'Phân tách rõ ràng giữa Data Model (Dữ liệu), Business Service (Nghiệp vụ) và UI Presentation (Hiển thị).',
      bloomLevel: 'Evaluate',
      masteryPercentage: 92
    }
  ],
  sections: [
    {
      id: 'sec-17-6-1',
      lessonId: 'les-17-6',
      order: 1,
      conceptName: 'Hệ thống Quản lý Sinh viên Capstone',
      title: '1. Kiến trúc Đồ án Tốt nghiệp Capstone: Quản lý Sinh viên',
      explanation: 'Hệ thống Quản lý Sinh viên (Student Management System - SMS) là đồ án tổng hợp đỉnh cao của học phần JavaScript. Hệ thống giải quyết trọn vẹn bài toán thực tế của nhà trường: 1) Thêm mới sinh viên kèm kiểm tra mã số sinh viên (MSSV) không trùng lặp; 2) Tìm kiếm thời gian thực theo tên; 3) Lọc theo chuyên ngành; 4) Sắp xếp điểm GPA từ cao xuống thấp; 5) Tính điểm trung bình toàn khóa và xuất báo cáo.',
      syntax: 'class StudentService {\n  add(student) {}\n  search(keyword) {}\n  filterByMajor(major) {}\n  sortByGpa(desc) {}\n  getStats() {}\n}',
      codeExample: `// Hệ thống Quản lý Sinh viên hoàn chỉnh
class StudentManagementSystem {
  constructor(storage) {
    this.storage = storage;
    this.key = "sms_students";
    this.students = JSON.parse(storage.getItem(this.key) || "[]");
  }

  save() {
    this.storage.setItem(this.key, JSON.stringify(this.students));
  }

  // 1. Thêm sinh viên (Kiểm tra trùng MSSV)
  addStudent(student) {
    const exists = this.students.some(s => s.code === student.code);
    if (exists) {
      throw new Error("MSSV đã tồn tại trong hệ thống: " + student.code);
    }
    this.students.push(student);
    this.save();
    return student;
  }

  // 2. Tìm kiếm theo tên
  searchByName(keyword) {
    const term = keyword.toLowerCase().trim();
    return this.students.filter(s => s.name.toLowerCase().includes(term));
  }

  // 3. Sắp xếp theo GPA giảm dần
  sortByGpaDescending() {
    return [...this.students].sort((a, b) => b.gpa - a.gpa);
  }

  // 4. Thống kê chung
  getStatistics() {
    const total = this.students.length;
    if (total === 0) return { total: 0, avgGpa: 0 };
    const sumGpa = this.students.reduce((acc, curr) => acc + curr.gpa, 0);
    return {
      total,
      avgGpa: Number((sumGpa / total).toFixed(2))
    };
  }
}

// Khởi chạy kiểm thử:
const mockStore = {
  db: {},
  setItem(k, v) { this.db[k] = v; },
  getItem(k) { return this.db[k] || null; }
};

const sms = new StudentManagementSystem(mockStore);
sms.addStudent({ code: "SV01", name: "Nguyễn Văn An", gpa: 8.5, major: "Web" });
sms.addStudent({ code: "SV02", name: "Trần Thị Bình", gpa: 9.2, major: "Web" });
sms.addStudent({ code: "SV03", name: "Lê Hoàng Cường", gpa: 7.8, major: "Mobile" });

const stats = sms.getStatistics();
console.log("Tổng số sinh viên:", stats.total);
console.log("Điểm trung bình toàn khóa:", stats.avgGpa);

const topStudents = sms.sortByGpaDescending();
console.log("Sinh viên thủ khoa:", topStudents[0].name, "-", topStudents[0].gpa);`,
      lineByLineExplanation: [
        { line: 13, text: 'addStudent dùng some() kiểm tra tính duy nhất của mã sinh viên.' },
        { line: 24, text: 'searchByName chuẩn hóa chữ thường để tìm kiếm không phân biệt hoa thường.' },
        { line: 30, text: 'sortByGpaDescending dùng [...students].sort() sao chép bất biến trước khi sắp xếp.' },
        { line: 35, text: 'getStatistics tính điểm trung bình bằng reduce() và toFixed(2).' }
      ],
      commonMistakes: [
        'Sắp xếp mảng trực tiếp bằng arr.sort() làm thay đổi thứ tự mảng gốc (hãy dùng [...arr].sort()).'
      ],
      whenToUse: 'Dùng làm đồ án tốt nghiệp học phần JavaScript và Portfolio xin việc Frontend Developer.',
      whenNotToUse: 'Tránh viết toàn bộ logic vào trong hàm xử lý sự kiện onclick (hãy tách thành Service Class riêng).',
      realWorldUseCase: 'Hệ thống Quản lý Đào tạo (Portal trường đại học, cao đẳng) xử lý hồ sơ hàng nghìn sinh viên.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-17-6',
    title: 'Thực hành: Lọc danh sách sinh viên Giỏi (GPA >= 8.0)',
    description: 'Chạy thử thuật toán lọc và in danh sách sinh viên đạt học bổng xuất sắc từ mảng hồ sơ.',
    starterCode: `const classList = [
  { name: "An", gpa: 8.5 },
  { name: "Bình", gpa: 7.2 },
  { name: "Cúc", gpa: 9.0 }
];

const honorRoll = classList.filter(s => s.gpa >= 8.0);
console.log("Số sinh viên đạt học bổng:", honorRoll.length);
honorRoll.forEach(s => {
  console.log("★ " + s.name + " (" + s.gpa + ")");
});`,
    expectedConsoleOutput: 'Số sinh viên đạt học bổng: 2\n★ An (8.5)\n★ Cúc (9)',
    hint: 'Dùng filter(s => s.gpa >= 8.0).',
    language: 'javascript'
  },
  exercises: {
    basic: {
      id: 'ex-17-6-1',
      lessonId: 'les-17-6',
      title: 'Bài tập Cơ bản: Tìm kiếm sinh viên theo từ khóa tên',
      difficulty: 'basic',
      learningObjectiveIds: ['LO17.6.1'],
      description: 'Cho mảng sinh viên `[{name: "Nguyễn An"}, {name: "Trần Bình"}]`. Viết hàm `findStudent(term)` lọc sinh viên có tên chứa `term`. Tìm với `"An"` và in ra: `Tìm thấy: Nguyễn An`.',
      starterCode: `const list = [{ name: "Nguyễn An" }, { name: "Trần Bình" }];

function findStudent(term) {
  // Lọc theo term:
}

const found = findStudent("An");
console.log("Tìm thấy:", found[0].name);`,
      solutionCode: `const list = [{ name: "Nguyễn An" }, { name: "Trần Bình" }];

function findStudent(term) {
  return list.filter(s => s.name.includes(term));
}

const found = findStudent("An");
console.log("Tìm thấy:", found[0].name);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra tìm thấy đúng sinh viên Nguyễn An',
          expectedOutput: 'Tìm thấy: Nguyễn An'
        }
      ],
      hints: ['return list.filter(s => s.name.includes(term));'],
      explanation: 'includes() kiểm tra chuỗi con trong chuỗi họ tên.'
    },
    intermediate: {
      id: 'ex-17-6-2',
      lessonId: 'les-17-6',
      title: 'Bài tập Trung bình: Tính điểm trung bình GPA toàn lớp',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO17.6.1'],
      description: 'Cho mảng điểm `gpas = [8.0, 9.0, 7.0]`. Dùng `reduce` tính điểm trung bình và in ra: `Điểm trung bình: 8`.',
      starterCode: `const gpas = [8.0, 9.0, 7.0];

// Tính điểm trung bình bằng reduce:
const avg = 0;

console.log("Điểm trung bình:", avg);`,
      solutionCode: `const gpas = [8.0, 9.0, 7.0];
const sum = gpas.reduce((acc, curr) => acc + curr, 0);
const avg = sum / gpas.length;
console.log("Điểm trung bình:", avg);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra điểm trung bình là 8',
          expectedOutput: 'Điểm trung bình: 8'
        }
      ],
      hints: ['const sum = gpas.reduce((acc, curr) => acc + curr, 0); const avg = sum / gpas.length;'],
      explanation: 'Thuật toán tính giá trị trung bình cộng bằng reduce.'
    },
    challenge: {
      id: 'ex-17-6-3',
      lessonId: 'les-17-6',
      title: 'Bài tập Thử thách: Kiểm tra trùng mã sinh viên (Duplicate Validation)',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO17.6.1', 'LO17.6.2'],
      description: 'Cho mảng sinh viên đã có mã `"SV01"`. Viết hàm `checkDuplicateCode(newCode)` dùng `some()`. Nếu mã đã có in `"Lỗi: Mã SV01 đã tồn tại"`, nếu chưa có in `"Mã hợp lệ"`. Kiểm tra với `"SV01"`.',
      starterCode: `const existing = [{ code: "SV01" }];

function checkDuplicateCode(newCode) {
  // Kiểm tra trùng:
}

checkDuplicateCode("SV01");`,
      solutionCode: `const existing = [{ code: "SV01" }];

function checkDuplicateCode(newCode) {
  const isDup = existing.some(s => s.code === newCode);
  if (isDup) {
    console.log(\`Lỗi: Mã \${newCode} đã tồn tại\`);
  } else {
    console.log("Mã hợp lệ");
  }
}

checkDuplicateCode("SV01");`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra phát hiện trùng mã SV01',
          expectedOutput: 'Lỗi: Mã SV01 đã tồn tại'
        }
      ],
      hints: ['existing.some(s => s.code === newCode)'],
      explanation: 'Ràng buộc khóa chính (Primary Key Constraint) bảo đảm tính toàn vẹn dữ liệu trong phần mềm.'
    }
  },
  quiz: {
    id: 'quiz-17-6',
    lessonId: 'les-17-6',
    title: 'Trắc nghiệm: Capstone Architecture',
    passingScore: 70,
    questions: [
      {
        id: 'q-17-6-1',
        lessonId: 'les-17-6',
        learningObjectiveId: 'LO17.6.2',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'Tại sao khi sắp xếp mảng (sort), ta nên sử dụng cú pháp [...arr].sort() thay vì arr.sort() trực tiếp?',
        options: [
          { id: 'a', text: 'Vì arr.sort() làm thay đổi trực tiếp mảng gốc (mutating original array)' },
          { id: 'b', text: 'Vì [...arr].sort() chạy nhanh hơn gấp đôi' },
          { id: 'c', text: 'Vì arr.sort() chỉ sắp xếp được chuỗi văn bản' },
          { id: 'd', text: 'Không có sự khác biệt nào' }
        ],
        correctAnswer: 'a',
        explanation: 'Phương thức sort() làm thay đổi tại chỗ mảng gốc. Dùng [...arr] tạo bản sao nông giúp bảo toàn dữ liệu gốc.',
        relatedLessonId: 'les-17-6'
      }
    ]
  },
  summary: [
    'Hệ thống Quản lý Sinh viên tích hợp trọn vẹn CRUD, tìm kiếm, lọc và sắp xếp.',
    'Quản lý dữ liệu tập trung qua lớp Service và đồng bộ hóa bền bỉ với Local Storage.',
    'Tuân thủ nguyên tắc Immutability (Bất biến) khi thao tác với mảng dữ liệu.'
  ],
  suggestedBookmarks: [
    'Phân trang danh sách (Pagination) và Tải thêm (Infinite Scroll) trong bảng dữ liệu',
    'Xuất báo cáo dữ liệu sang file Excel (XLSX) và CSV bằng JavaScript'
  ]
};

export const JS_MODULE_17_LESSONS: Lesson[] = [
  LESSON_17_1,
  LESSON_17_2,
  LESSON_17_3,
  LESSON_17_4,
  LESSON_17_5,
  LESSON_17_6
];
