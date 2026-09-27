import { Lesson } from '../../types';

// ==========================================
// MODULE 6: HÀM & PHẠM VI BIẾN (FUNCTIONS & SCOPE)
// ==========================================

export const LESSON_6_1: Lesson = {
  id: 'les-6-1',
  moduleId: 'mod-6',
  track: 'javascript',
  language: 'javascript',
  title: '6.1 Khai báo hàm (Function Declaration) & Hoisting',
  order: 1,
  durationMinutes: 45,
  difficulty: 'Cơ bản',
  prerequisites: [
    'Biết cú pháp cơ bản của JavaScript',
    'Hiểu nguyên tắc tái sử dụng mã nguồn (DRY)'
  ],
  learningObjectives: [
    {
      id: 'LO6.1.1',
      code: 'LO6.1.1',
      title: 'Cú pháp Function Declaration chuẩn',
      description: 'Định nghĩa hàm bằng từ khóa function, đặt tên chuẩn động từ camelCase và gọi hàm (Invoke).',
      bloomLevel: 'Apply',
      masteryPercentage: 95
    },
    {
      id: 'LO6.1.2',
      code: 'LO6.1.2',
      title: 'Bản chất cơ chế Hoisting của Function',
      description: 'Giải thích tại sao Function Declaration có thể gọi được TRƯỚC KHI được khai báo trong tệp mã nguồn.',
      bloomLevel: 'Understand',
      masteryPercentage: 88
    }
  ],
  sections: [
    {
      id: 'sec-6-1-1',
      lessonId: 'les-6-1',
      order: 1,
      conceptName: 'Định nghĩa & Gọi hàm (Function Declaration)',
      title: '1. Bản chất của hàm – Khối mã tái sử dụng độc lập',
      explanation: 'Hàm là một khối lệnh đóng gói có tên, được thiết kế để thực hiện một tác vụ cụ thể và có thể gọi lại nhiều lần ở bất cứ đâu trong chương trình. Khai báo hàm truyền thống bắt đầu bằng từ khóa `function`, theo sau là tên hàm theo quy tắc camelCase mô tả hành động (ví dụ: `tinhDiem`, `kiemTraDangNhap`), cặp ngoặc tròn chứa tham số và thân hàm trong `{}`.',
      syntax: 'function tenHam(thamSo1, thamSo2) {\n  // Thân hàm\n}\ntenHam(doiSo1, doiSo2); // Lời gọi hàm (Invoke)',
      codeExample: `// 1. Định nghĩa hàm
function chaoMungSinhVien(hoTen) {
  console.log(\`Xin chào \${hoTen}, chúc bạn một ngày học tập hiệu quả!\`);
}

// 2. Tái sử dụng hàm với các đối số khác nhau
chaoMungSinhVien("Nguyễn Văn An");
chaoMungSinhVien("Trần Bích Ngọc");`,
      lineByLineExplanation: [
        { line: 2, text: 'Định nghĩa hàm có 1 tham số hoTen.' },
        { line: 7, text: 'Gọi hàm truyền chuỗi "Nguyễn Văn An".' },
        { line: 8, text: 'Gọi lại hàm với đối số "Trần Bích Ngọc".' }
      ],
      commonMistakes: [
        'Định nghĩa hàm nhưng quên gọi hàm (chỉ viết `chaoMungSinhVien;` mà thiếu cặp ngoặc tròn `()`).'
      ],
      whenToUse: 'Dùng khi có một khối logic lặp lại từ 2 lần trở lên trong ứng dụng.',
      whenNotToUse: 'Không viết hàm quá dài đảm nhiệm nhiều nhiệm vụ khác nhau (vi phạm nguyên lý Single Responsibility).',
      realWorldUseCase: 'Hàm định dạng tiền tệ: `formatCurrency(amount)` chuyển số 50000 thành "50.000 VNĐ".'
    },
    {
      id: 'sec-6-1-2',
      lessonId: 'les-6-1',
      order: 2,
      conceptName: 'Cơ chế Hoisting của Function Declaration',
      title: '2. Cơ chế Hoisting – Gọi hàm trước khi khai báo',
      explanation: 'Trong giai đoạn biên dịch (Creation Phase), JavaScript Engine quét qua toàn bộ tệp và "kéo" (hoist) toàn bộ phần khai báo và thân hàm của Function Declaration lên đầu phạm vi. Nhờ đó, bạn có thể gọi hàm ở dòng 1 ngay cả khi định nghĩa hàm nằm ở tận dòng 100!',
      syntax: '// Lời gọi hàm ở trên\nxinChao();\n\n// Định nghĩa hàm ở dưới\nfunction xinChao() { ... }',
      codeExample: `// Gọi hàm trước khi viết định nghĩa hàm (hoạt động hoàn hảo!)
ketNoiMayChu();

function ketNoiMayChu() {
  console.log("Đã kết nối thành công đến máy chủ FPT!");
}`,
      lineByLineExplanation: [
        { line: 2, text: 'Gọi hàm tại dòng 2 dù hàm được viết ở dòng 4.' },
        { line: 4, text: 'Function Declaration được hoist toàn bộ phần thân lên đầu tệp.' }
      ],
      commonMistakes: [
        'Nghĩ rằng biến let/const cũng được gọi trước như function declaration (let/const bị kẹt trong TDZ).'
      ],
      whenToUse: 'Tận dụng hoisting để tổ chức cấu trúc file: đặt các hàm điều phối logic chính lên đầu file để người đọc nắm luồng, còn các hàm chi tiết phụ trợ ở bên dưới.',
      whenNotToUse: 'Không ỷ lại vào hoisting một cách tùy tiện gây xáo trộn trật tự đọc mã.',
      realWorldUseCase: 'Cấu trúc file component sạch: hàm renderComponent() ở đầu, các hàm helper định dạng ở cuối file.'
    }
  ],
  predictOutputs: [
    {
      id: 'po-6-1-1',
      code: `sayHello();
function sayHello() {
  console.log("Hello Web Master!");
}`,
      question: 'Đoạn mã trên sẽ chạy như thế nào?',
      options: [
        'In ra "Hello Web Master!" bình thường nhờ cơ chế Hoisting',
        'Lỗi ReferenceError: sayHello is not defined',
        'Lỗi TypeError: sayHello is not a function',
        'Không in ra gì'
      ],
      correctAnswer: 'In ra "Hello Web Master!" bình thường nhờ cơ chế Hoisting',
      explanation: 'Function Declaration được JavaScript Engine tự động nâng (hoist) cả phần khai báo lẫn thân hàm lên đầu phạm vi trước khi thực thi mã.',
      hint: 'Cơ chế Hoisting của hàm khai báo truyền thống.'
    }
  ],
  interactivePractice: {
    id: 'ip-6-1',
    title: 'Thực hành: Định nghĩa hàm thông báo hệ thống',
    description: 'Viết và gọi hàm printSystemLog(moduleName) in ra nhật ký khởi động module.',
    starterCode: `function printSystemLog(moduleName) {
  console.log(\`[Hệ Thống] Module \${moduleName} đã kích hoạt thành công!\`);
}

printSystemLog("Authentication");
printSystemLog("Gradebook");`,
    expectedConsoleOutput: '[Hệ Thống] Module Authentication đã kích hoạt thành công!\n[Hệ Thống] Module Gradebook đã kích hoạt thành công!',
    hint: 'Chạy thử để quan sát hàm được tái sử dụng 2 lần.',
    language: 'javascript'
  },
  exercises: {
    basic: {
      id: 'ex-6-1-1',
      lessonId: 'les-6-1',
      title: 'Bài tập Cơ bản: Tạo hàm in lời chào mừng',
      difficulty: 'basic',
      learningObjectiveIds: ['LO6.1.1'],
      description: 'Định nghĩa hàm greetUser(name). Trong hàm in ra: `Chào mừng bạn [name] đến với JavaScript!`. Sau đó gọi hàm với đối số "Hoàng Long".',
      starterCode: `// Định nghĩa và gọi hàm:
`,
      solutionCode: `function greetUser(name) {
  console.log(\`Chào mừng bạn \${name} đến với JavaScript!\`);
}

greetUser("Hoàng Long");`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra in đúng lời chào Hoàng Long',
          expectedOutput: 'Chào mừng bạn Hoàng Long đến với JavaScript!'
        }
      ],
      hints: ['function greetUser(name) { console.log(...); }'],
      explanation: 'Khai báo hàm đơn giản nhận tham số name và in ra chuỗi mong muốn.'
    },
    intermediate: {
      id: 'ex-6-1-2',
      lessonId: 'les-6-1',
      title: 'Bài tập Trung bình: Tạo hàm tính chu vi và diện tích hình vuông',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO6.1.1'],
      description: 'Viết hàm squareInfo(edge). In ra 2 dòng: Dòng 1: `Chu vi: [edge * 4]`, Dòng 2: `Diện tích: [edge * edge]`. Gọi hàm thử với cạnh edge = 5.',
      starterCode: `// Viết hàm squareInfo:

squareInfo(5);`,
      solutionCode: `function squareInfo(edge) {
  console.log("Chu vi:", edge * 4);
  console.log("Diện tích:", edge * edge);
}

squareInfo(5);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra chu vi 20 và diện tích 25',
          expectedOutput: 'Chu vi: 20\nDiện tích: 25'
        }
      ],
      hints: ['Chu vi = edge * 4, diện tích = edge * edge'],
      explanation: 'Hàm thực thi khối tính toán hình học cơ bản.'
    },
    challenge: {
      id: 'ex-6-1-3',
      lessonId: 'les-6-1',
      title: 'Bài tập Thử thách: Minh họa Hoisting bằng cách gọi hàm trước định nghĩa',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO6.1.2'],
      description: 'Hãy gọi hàm calculateDiscount(100000) Ở DÒNG ĐẦU TIÊN của đoạn mã. Sau đó bên dưới mới viết định nghĩa hàm calculateDiscount(price) in ra chuỗi: `Giá sau giảm 10%: [price * 0.9] VNĐ`.',
      starterCode: `// Gọi hàm trước ở đây:

// Viết định nghĩa hàm ở bên dưới:
`,
      solutionCode: `calculateDiscount(100000);

function calculateDiscount(price) {
  console.log(\`Giá sau giảm 10%: \${price * 0.9} VNĐ\`);
}`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra hoisting gọi hàm trước định nghĩa',
          expectedOutput: 'Giá sau giảm 10%: 90000 VNĐ'
        }
      ],
      hints: ['Đặt lời gọi calculateDiscount(100000); ở dòng 1'],
      explanation: 'Minh chứng thực tế cho cơ chế Hoisting của Function Declaration trong JavaScript.'
    }
  },
  quiz: {
    id: 'quiz-6-1',
    lessonId: 'les-6-1',
    title: 'Trắc nghiệm: Khai báo hàm & Hoisting',
    passingScore: 70,
    questions: [
      {
        id: 'q-6-1-1',
        lessonId: 'les-6-1',
        learningObjectiveId: 'LO6.1.2',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'Tại sao bạn có thể gọi một hàm khai báo bằng cú pháp Function Declaration trước cả dòng lệnh định nghĩa hàm đó?',
        options: [
          { id: 'a', text: 'Do trình duyệt tự dịch ngược lại file' },
          { id: 'b', text: 'Nhờ cơ chế Hoisting của JavaScript đưa toàn bộ khai báo và thân hàm lên đầu phạm vi trong giai đoạn biên dịch' },
          { id: 'c', text: 'Vì hàm không có tham số' },
          { id: 'd', text: 'Do hàm chạy trên luồng đa tuyến' }
        ],
        correctAnswer: 'b',
        explanation: 'Trong giai đoạn khởi tạo (Creation phase), engine đăng ký toàn bộ Function Declaration vào bộ nhớ trước khi thực thi từng dòng mã.',
        relatedLessonId: 'les-6-1'
      }
    ]
  },
  summary: [
    'Hàm giúp đóng gói logic và tái sử dụng mã nguồn theo nguyên lý DRY.',
    'Function Declaration có đặc tính Hoisting: có thể gọi trước khi viết định nghĩa.',
    'Quy tắc đặt tên hàm: bắt đầu bằng động từ theo chuẩn camelCase.'
  ],
  suggestedBookmarks: [
    'Cơ chế Hoisting của Function Declaration vs Function Expression',
    'Nguyên lý Single Responsibility trong thiết kế hàm'
  ]
};

export const LESSON_6_2: Lesson = {
  id: 'les-6-2',
  moduleId: 'mod-6',
  track: 'javascript',
  language: 'javascript',
  title: '6.2 Function Expression & Arrow Function hiện đại',
  order: 2,
  durationMinutes: 50,
  difficulty: 'Trung bình',
  prerequisites: [
    'Đã học Bài 6.1 về Function Declaration',
    'Hiểu biến const'
  ],
  learningObjectives: [
    {
      id: 'LO6.2.1',
      code: 'LO6.2.1',
      title: 'Biểu thức hàm (Function Expression)',
      description: 'Gán một hàm ẩn danh (anonymous function) vào biến const và hiểu tại sao nó không được hoist.',
      bloomLevel: 'Understand',
      masteryPercentage: 88
    },
    {
      id: 'LO6.2.2',
      code: 'LO6.2.2',
      title: 'Hàm mũi tên (Arrow Function ES6)',
      description: 'Làm chủ cú pháp ngắn gọn của Arrow Function: bỏ ngoặc tròn khi có 1 tham số, bỏ ngoặc nhọn và tự động return (Implicit Return).',
      bloomLevel: 'Apply',
      masteryPercentage: 94
    }
  ],
  sections: [
    {
      id: 'sec-6-2-1',
      lessonId: 'les-6-2',
      order: 1,
      conceptName: 'Function Expression (Biểu thức hàm)',
      title: '1. Function Expression – Coi hàm như một giá trị (First-Class Citizen)',
      explanation: 'Trong JavaScript, hàm là "công dân hạng nhất" (First-Class Citizen), nghĩa là hàm có thể được gán vào biến giống như số hay chuỗi. Cú pháp gán hàm ẩn danh vào biến gọi là Function Expression. Khác với Function Declaration, Function Expression KHÔNG ĐƯỢC HOIST (gọi trước khi gán sẽ bị lỗi ReferenceError/TypeError).',
      syntax: 'const tenBien = function(thamSo) {\n  // Code\n};',
      codeExample: `// Gán hàm vào biến const tinhTong
const tinhTong = function(a, b) {
  return a + b;
};

console.log("Tổng 10 + 20 =", tinhTong(10, 20));`,
      lineByLineExplanation: [
        { line: 2, text: 'Khai báo hằng số tinhTong trỏ đến một hàm ẩn danh nhận 2 tham số a và b.' }
      ],
      commonMistakes: [
        'Gọi function expression trước dòng khai báo const -> Ném lỗi ReferenceError: Cannot access before initialization.'
      ],
      whenToUse: 'Dùng khi muốn truyền hàm làm tham số (Callback) hoặc gán phương thức cho Object.',
      whenNotToUse: 'Không dùng nếu cần gọi hàm trước khi định nghĩa.',
      realWorldUseCase: 'Truyền hàm xử lý sự kiện: `button.addEventListener("click", function() { ... });`.'
    },
    {
      id: 'sec-6-2-2',
      lessonId: 'les-6-2',
      order: 2,
      conceptName: 'Arrow Function (Hàm mũi tên ES6)',
      title: '2. Arrow Function – Cú pháp tối tân thống trị JavaScript hiện đại',
      explanation: 'Ra mắt trong ES6, Arrow Function (`=>`) mang đến cú pháp siêu ngắn gọn và tinh tế: (1) Nếu chỉ có 1 tham số, có thể bỏ dấu ngoặc tròn `()`; (2) Nếu thân hàm chỉ có 1 câu lệnh return, có thể bỏ cả `{}` và từ khóa `return` (cơ chế Implicit Return - tự động trả về). Đặc biệt, Arrow Function không có từ khóa `this` riêng mà kế thừa `this` từ ngữ cảnh cha (Lexical this).',
      syntax: '// Cú pháp đầy đủ:\nconst fn = (x) => { return x * 2; };\n// Rút gọn đỉnh cao:\nconst fn = x => x * 2;',
      codeExample: `// 1. Hàm bình thường
const binhPhuongCu = function(x) {
  return x * x;
};

// 2. Viết lại bằng Arrow Function rút gọn (Implicit return)
const binhPhuongMoi = x => x * x;

console.log("Bình phương của 6 =", binhPhuongMoi(6)); // 36

// 3. Arrow function không tham số
const layLoiChao = () => "Chào mừng bạn!";
console.log(layLoiChao());`,
      lineByLineExplanation: [
        { line: 7, text: 'x => x * x tự động nhận x và trả về kết quả phép nhân x * x mà không cần gõ chữ return.' }
      ],
      commonMistakes: [
        'Mở ngoặc nhọn `{}` nhưng quên viết chữ `return`: `const add = (a, b) => { a + b };` -> Hàm này sẽ trả về `undefined`! Muốn implicit return thì KHÔNG ĐƯỢC dùng ngoặc nhọn `{}`.'
      ],
      whenToUse: 'Luôn ưu tiên dùng Arrow Function cho các hàm callback trong map, filter, forEach và các hàm tiện ích ngắn.',
      whenNotToUse: 'Không dùng Arrow Function làm phương thức của Object khi cần truy xuất `this` của object đó.',
      realWorldUseCase: 'Xử lý mảng trong React: `const list = users.map(user => user.name);`.'
    }
  ],
  predictOutputs: [
    {
      id: 'po-6-2-1',
      code: `const multiply = (a, b) => a * b;
console.log(multiply(4, 5));`,
      question: 'Kết quả in ra của hàm mũi tên trên là gì?',
      options: ['20', 'undefined', 'NaN', 'TypeError'],
      correctAnswer: '20',
      explanation: 'Nhờ cơ chế Implicit Return của Arrow function khi không dùng ngoặc nhọn, biểu thức a * b (4 * 5 = 20) được tự động trả về.',
      hint: 'Không có ngoặc nhọn nghĩa là tự động return.'
    },
    {
      id: 'po-6-2-2',
      code: `const calc = (x) => { x * 2; };
console.log(calc(10));`,
      question: 'Hàm calc trên trả về giá trị gì?',
      options: ['20', 'undefined', 'null', '10'],
      correctAnswer: 'undefined',
      explanation: 'Vì có cặp ngoặc nhọn `{}` nhưng không có từ khóa `return`, JavaScript coi đây là khối lệnh bình thường và trả về undefined theo mặc định.',
      hint: 'Có ngoặc nhọn {} thì bắt buộc phải viết chữ return.'
    }
  ],
  interactivePractice: {
    id: 'ip-6-2',
    title: 'Thực hành: Rút gọn hàm tính thuế VAT bằng Arrow Function',
    description: 'Chuyển đổi hàm tính thuế từ dạng thông thường sang Arrow Function 1 dòng duy nhất.',
    starterCode: `// Viết Arrow function 1 dòng tính giá sau thuế (VAT 10%):
const addVAT = price => price * 1.1;

console.log("Giá gốc 100k sau VAT:", addVAT(100000));
console.log("Giá gốc 200k sau VAT:", addVAT(200000));`,
    expectedConsoleOutput: 'Giá gốc 100k sau VAT: 110000\nGiá gốc 200k sau VAT: 220000',
    hint: 'price => price * 1.1',
    language: 'javascript'
  },
  exercises: {
    basic: {
      id: 'ex-6-2-1',
      lessonId: 'les-6-2',
      title: 'Bài tập Cơ bản: Viết Arrow Function tính diện tích hình chữ nhật',
      difficulty: 'basic',
      learningObjectiveIds: ['LO6.2.2'],
      description: 'Khai báo Arrow Function `getArea = (w, h) => ...` tính diện tích hình chữ nhật. In ra kết quả khi gọi với getArea(4, 6).',
      starterCode: `// Viết Arrow function:
`,
      solutionCode: `const getArea = (w, h) => w * h;
console.log(getArea(4, 6));`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra diện tích 4 * 6 = 24',
          expectedOutput: '24'
        }
      ],
      hints: ['const getArea = (w, h) => w * h;'],
      explanation: 'Cú pháp Arrow function 2 tham số với implicit return.'
    },
    intermediate: {
      id: 'ex-6-2-2',
      lessonId: 'les-6-2',
      title: 'Bài tập Trung bình: Viết Arrow Function kiểm tra số dương',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO6.2.2'],
      description: 'Viết Arrow Function `isPositive = n => n > 0` trả về boolean. In ra kết quả khi kiểm tra với số 5 và số -3.',
      starterCode: `// Viết Arrow Function isPositive:

console.log("Số 5 là số dương:", isPositive(5));
console.log("Số -3 là số dương:", isPositive(-3));`,
      solutionCode: `const isPositive = n => n > 0;
console.log("Số 5 là số dương:", isPositive(5));
console.log("Số -3 là số dương:", isPositive(-3));`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra 5 là true, -3 là false',
          expectedOutput: 'Số 5 là số dương: true\nSố -3 là số dương: false'
        }
      ],
      hints: ['n => n > 0'],
      explanation: 'Biểu thức so sánh n > 0 tự động trả về boolean true hoặc false.'
    },
    challenge: {
      id: 'ex-6-2-3',
      lessonId: 'les-6-2',
      title: 'Bài tập Thử thách: Biến đổi mảng giá tiền với Arrow Function callback',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO6.2.2'],
      description: 'Cho mảng giá `prices = [100, 200, 300]`. Dùng hàm mảng `map()` kết hợp với Arrow function để tăng mỗi giá thêm 10%. In ra mảng mới: `[ 110, 220, 330 ]`.',
      starterCode: `const prices = [100, 200, 300];

// Dùng map với Arrow Function:
`,
      solutionCode: `const prices = [100, 200, 300];
const newPrices = prices.map(p => p * 1.1);
console.log(newPrices);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra mảng giá sau tăng 10%',
          expectedOutput: '[ 110, 220, 330 ]'
        }
      ],
      hints: ['prices.map(p => p * 1.1)'],
      explanation: 'Sự kết hợp hoàn mỹ giữa map() và Arrow Function giúp code ngắn gọn tới mức kinh ngạc.'
    }
  },
  quiz: {
    id: 'quiz-6-2',
    lessonId: 'les-6-2',
    title: 'Trắc nghiệm: Arrow Function',
    passingScore: 70,
    questions: [
      {
        id: 'q-6-2-1',
        lessonId: 'les-6-2',
        learningObjectiveId: 'LO6.2.2',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'Khi nào một Arrow Function có thể tự động trả về giá trị (Implicit Return) mà KHÔNG cần viết từ khóa "return"?',
        options: [
          { id: 'a', text: 'Khi hàm có từ 3 tham số trở lên' },
          { id: 'b', text: 'Khi thân hàm chỉ là một biểu thức duy nhất và KHÔNG bị bao bọc bởi cặp ngoặc nhọn {}' },
          { id: 'c', text: 'Khi hàm được khai báo bằng từ khóa var' },
          { id: 'd', text: 'Không bao giờ, return luôn bắt buộc' }
        ],
        correctAnswer: 'b',
        explanation: 'Cơ chế Implicit Return chỉ kích hoạt khi bạn lược bỏ cặp ngoặc nhọn `{}` của thân hàm.',
        relatedLessonId: 'les-6-2'
      }
    ]
  },
  summary: [
    'Function Expression coi hàm như một giá trị và không có cơ chế Hoisting.',
    'Arrow Function (=>) mang đến cú pháp tối tân, tự động return khi không dùng ngoặc nhọn {}.',
    'Arrow Function đặc biệt tỏa sáng khi làm hàm callback cho map(), filter(), forEach().'
  ],
  suggestedBookmarks: [
    'Bản chất Lexical this của Arrow Function trong JavaScript',
    'Cạm bẫy quên từ khóa return khi dùng ngoặc nhọn trong Arrow Function'
  ]
};

export const LESSON_6_3: Lesson = {
  id: 'les-6-3',
  moduleId: 'mod-6',
  track: 'javascript',
  language: 'javascript',
  title: '6.3 Tham số, Đối số & Giá trị mặc định (Default Parameters)',
  order: 3,
  durationMinutes: 45,
  difficulty: 'Cơ bản',
  prerequisites: [
    'Hiểu cách định nghĩa và gọi hàm cơ bản'
  ],
  learningObjectives: [
    {
      id: 'LO6.3.1',
      code: 'LO6.3.1',
      title: 'Phân biệt Tham số (Parameter) và Đối số (Argument)',
      description: 'Phân biệt chính xác: Tham số là biến định nghĩa trong khai báo hàm; Đối số là giá trị thực tế truyền vào khi gọi hàm.',
      bloomLevel: 'Understand',
      masteryPercentage: 92
    },
    {
      id: 'LO6.3.2',
      code: 'LO6.3.2',
      title: 'Thiết lập tham số mặc định (Default Parameters ES6)',
      description: 'Sử dụng cú pháp param = defaultValue để phòng tránh lỗi undefined khi người gọi quên truyền giá trị.',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    },
    {
      id: 'LO6.3.3',
      code: 'LO6.3.3',
      title: 'Thu gom đối số với Rest Parameters (...args)',
      description: 'Dùng cú pháp ...args để nhận số lượng đối số không cố định thành một mảng.',
      bloomLevel: 'Analyze',
      masteryPercentage: 84
    }
  ],
  sections: [
    {
      id: 'sec-6-3-1',
      lessonId: 'les-6-3',
      order: 1,
      conceptName: 'Tham số mặc định (Default Parameters)',
      title: '1. Tham số mặc định ES6 – Tạm biệt bẫy undefined',
      explanation: 'Nếu một hàm yêu cầu 2 tham số nhưng người gọi chỉ truyền 1 đối số, tham số còn lại sẽ tự động nhận giá trị `undefined`. Tính năng Default Parameters cho phép bạn gán giá trị dự phòng ngay trong danh sách tham số. Giá trị mặc định chỉ được kích hoạt khi đối số truyền vào là `undefined` hoặc bị bỏ trống.',
      syntax: 'function tinhTien(donGia, soLuong = 1, giamGia = 0) {\n  return (donGia * soLuong) - giamGia;\n}',
      codeExample: `// Khởi tạo hàm có giá trị mặc định cho taxRate = 0.1 (10%)
function tinhThue(price, taxRate = 0.1) {
  return price * taxRate;
}

console.log("Thuế mặc định (10%):", tinhThue(100000));     // 10000
console.log("Thuế ưu đãi đặc biệt (5%):", tinhThue(100000, 0.05)); // 5000`,
      lineByLineExplanation: [
        { line: 2, text: 'taxRate = 0.1 tự động kích hoạt nếu người gọi không truyền đối số thứ 2.' },
        { line: 6, text: 'Khi không truyền taxRate, hệ thống dùng 0.1 cho kết quả 10000.' },
        { line: 7, text: 'Khi chủ động truyền 0.05, giá trị mặc định bị ghi đè.' }
      ],
      commonMistakes: [
        'Đặt tham số có giá trị mặc định ở đầu danh sách trước các tham số bắt buộc: `function f(a = 1, b)` -> Khi gọi `f(5)` thì số 5 được gán cho a chứ không phải b!'
      ],
      whenToUse: 'Dùng khi tham số thường mang một giá trị phổ biến (như page = 1, limit = 10, currency = "VND").',
      whenNotToUse: 'Không gán giá trị mặc định cho các trường bắt buộc tuyệt đối như ID người dùng hay mật khẩu.',
      realWorldUseCase: 'Hàm gửi email: `sendEmail(to, subject, template = "welcome")`.'
    },
    {
      id: 'sec-6-3-2',
      lessonId: 'les-6-3',
      order: 2,
      conceptName: 'Rest Parameters (...args)',
      title: '2. Rest Parameters (...args) – Nhận số lượng đối số vô hạn',
      explanation: 'Trước ES6, để xử lý số lượng đối số không cố định, ta phải dùng đối tượng cũ `arguments` (không phải là mảng thực sự). Với cú pháp Rest Parameters (`...tenMang`), tất cả các đối số còn lại sẽ được thu gom gọn gàng vào một mảng Array chuẩn mực, cho phép gọi ngay các hàm mảng như reduce, forEach, map.',
      syntax: 'function tinhTong(...numbers) {\n  return numbers.reduce((sum, n) => sum + n, 0);\n}',
      codeExample: `function tinhTongDiem(...diemSo) {
  let tong = 0;
  for (let i = 0; i < diemSo.length; i++) {
    tong += diemSo[i];
  }
  return tong;
}

console.log("Tổng 2 môn:", tinhTongDiem(8, 9));       // 17
console.log("Tổng 4 môn:", tinhTongDiem(7, 8, 9, 10)); // 34`,
      lineByLineExplanation: [
        { line: 1, text: '...diemSo gom tất cả các đối số truyền vào thành một mảng diemSo.' },
        { line: 8, text: 'Hàm hoạt động linh hoạt với 2, 4 hoặc 100 tham số tùy ý.' }
      ],
      commonMistakes: [
        'Đặt Rest parameter ở vị trí không phải là cuối cùng: `function f(...args, last)` -> Lỗi SyntaxError: Rest parameter must be last formal parameter!'
      ],
      whenToUse: 'Dùng khi viết các hàm toán học đa tham số (như tổng, trung bình cộng), hàm nối chuỗi hoặc ghi nhật ký logger.',
      whenNotToUse: 'Không dùng khi danh sách tham số cố định và cần tên gọi rõ ràng cho từng thuộc tính.',
      realWorldUseCase: 'Hàm gom thông điệp logger: `logger.info("Server started", port, host, timestamp);`.'
    }
  ],
  predictOutputs: [
    {
      id: 'po-6-3-1',
      code: `function greet(name = "bạn") {
  console.log("Xin chào " + name);
}
greet(undefined);
greet(null);`,
      question: 'Hai câu lệnh gọi hàm trên lần lượt in ra kết quả gì?',
      options: [
        '"Xin chào bạn" và "Xin chào null"',
        '"Xin chào bạn" và "Xin chào bạn"',
        '"Xin chào undefined" và "Xin chào null"',
        'Lỗi TypeError'
      ],
      correctAnswer: '"Xin chào bạn" và "Xin chào null"',
      explanation: 'Giá trị mặc định CHỈ được kích hoạt khi truyền undefined (hoặc không truyền). Khi truyền null, null là một giá trị có thực nên biến name nhận chính xác null.',
      hint: 'Default parameter chỉ kích hoạt khi gặp undefined.'
    }
  ],
  interactivePractice: {
    id: 'ip-6-3',
    title: 'Thực hành: Tính tổng điểm trung bình bằng Rest Parameters',
    description: 'Chạy thử hàm nhận danh sách điểm số bất kỳ và tính điểm trung bình môn.',
    starterCode: `function tinhDiemTrungBinh(...scores) {
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }
  return total / scores.length;
}

console.log("Điểm TB học kỳ:", tinhDiemTrungBinh(8.5, 9.0, 7.5, 9.5));`,
    expectedConsoleOutput: 'Điểm TB học kỳ: 8.625',
    hint: 'Chạy thử để quan sát mảng scores tự động thu gom 4 đối số.',
    language: 'javascript'
  },
  exercises: {
    basic: {
      id: 'ex-6-3-1',
      lessonId: 'les-6-3',
      title: 'Bài tập Cơ bản: Thiết lập tên người dùng mặc định',
      difficulty: 'basic',
      learningObjectiveIds: ['LO6.3.2'],
      description: 'Viết hàm sayHi(name = "Khách"). In ra chuỗi: `Xin chào [name]!`. Gọi hàm thử 2 lần: lần 1 không truyền tham số, lần 2 truyền "Bích Ngọc".',
      starterCode: `// Viết hàm sayHi với tham số mặc định:

sayHi();
sayHi("Bích Ngọc");`,
      solutionCode: `function sayHi(name = "Khách") {
  console.log(\`Xin chào \${name}!\`);
}

sayHi();
sayHi("Bích Ngọc");`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra chạy với giá trị mặc định và giá trị truyền vào',
          expectedOutput: 'Xin chào Khách!\nXin chào Bích Ngọc!'
        }
      ],
      hints: ['function sayHi(name = "Khách")'],
      explanation: 'Lần gọi đầu tiên kích hoạt giá trị mặc định "Khách".'
    },
    intermediate: {
      id: 'ex-6-3-2',
      lessonId: 'les-6-3',
      title: 'Bài tập Trung bình: Hàm tính giá sau thuế có thuế suất mặc định',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO6.3.2'],
      description: 'Viết hàm calculatePrice(basePrice, tax = 0.1, discount = 0). Tính và in ra: `Giá cuối cùng: [basePrice + basePrice*tax - discount]`. Chạy thử với calculatePrice(200000).',
      starterCode: `// Viết hàm calculatePrice:

calculatePrice(200000);`,
      solutionCode: `function calculatePrice(basePrice, tax = 0.1, discount = 0) {
  const finalPrice = basePrice + (basePrice * tax) - discount;
  console.log("Giá cuối cùng:", finalPrice);
}

calculatePrice(200000);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra 200k + 10% VAT = 220000',
          expectedOutput: 'Giá cuối cùng: 220000'
        }
      ],
      hints: ['basePrice + (basePrice * tax) - discount'],
      explanation: 'tax nhận 0.1 và discount nhận 0 mặc định.'
    },
    challenge: {
      id: 'ex-6-3-3',
      lessonId: 'les-6-3',
      title: 'Bài tập Thử thách: Tìm tích các số bằng Rest Parameters',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO6.3.3'],
      description: 'Viết hàm multiplyAll(...nums). Sử dụng vòng lặp tính tích của tất cả các số truyền vào. In ra: `Tích các số: [kết quả]`. Chạy thử với multiplyAll(2, 3, 4, 5).',
      starterCode: `// Viết hàm multiplyAll:

multiplyAll(2, 3, 4, 5);`,
      solutionCode: `function multiplyAll(...nums) {
  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    product *= nums[i];
  }
  console.log("Tích các số:", product);
}

multiplyAll(2, 3, 4, 5);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra tích 2 * 3 * 4 * 5 = 120',
          expectedOutput: 'Tích các số: 120'
        }
      ],
      hints: ['Khởi tạo product = 1'],
      explanation: 'Rest parameter cho phép truyền bao nhiêu số tùy thích.'
    }
  },
  quiz: {
    id: 'quiz-6-3',
    lessonId: 'les-6-3',
    title: 'Trắc nghiệm: Tham số mặc định & Rest',
    passingScore: 70,
    questions: [
      {
        id: 'q-6-3-1',
        lessonId: 'les-6-3',
        learningObjectiveId: 'LO6.3.3',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'Quy tắc bắt buộc nào sau đây phải tuân thủ khi sử dụng cú pháp Rest Parameters (...args) trong hàm?',
        options: [
          { id: 'a', text: 'Rest parameter phải luôn đứng ở vị trí CUỐI CÙNG trong danh sách tham số' },
          { id: 'b', text: 'Chỉ được phép nhận tối đa 3 đối số' },
          { id: 'c', text: 'Rest parameter không thể duyệt bằng vòng lặp' },
          { id: 'd', text: 'Phải dùng chữ var trước ...args' }
        ],
        correctAnswer: 'a',
        explanation: 'Rest parameter thu gom tất cả các đối số "còn lại", do đó nó bắt buộc phải nằm ở vị trí cuối cùng trong danh sách tham số khai báo.',
        relatedLessonId: 'les-6-3'
      }
    ]
  },
  summary: [
    'Default Parameters (param = defaultVal) phòng tránh lỗi undefined khi thiếu đối số.',
    'Giá trị mặc định chỉ kích hoạt khi đối số là undefined hoặc không được truyền.',
    'Rest Parameters (...args) gom số lượng đối số vô hạn thành một mảng chuẩn mực và phải nằm ở cuối.'
  ],
  suggestedBookmarks: [
    'Phân biệt Rest Parameters (...args) vs Spread Operator (...arr)',
    'Cạm bẫy vị trí của Default Parameters trong chữ ký hàm'
  ]
};

export const LESSON_6_4: Lesson = {
  id: 'les-6-4',
  moduleId: 'mod-6',
  track: 'javascript',
  language: 'javascript',
  title: '6.4 Giá trị trả về (return) & Early Return pattern',
  order: 4,
  durationMinutes: 40,
  difficulty: 'Cơ bản',
  prerequisites: [
    'Biết cú pháp hàm và cấu trúc if...else'
  ],
  learningObjectives: [
    {
      id: 'LO6.4.1',
      code: 'LO6.4.1',
      title: 'Hai chức năng cốt lõi của lệnh return',
      description: 'Hiểu return vừa xuất giá trị ra ngoài cho nơi gọi hàm, vừa lập tức chấm dứt thực thi hàm.',
      bloomLevel: 'Understand',
      masteryPercentage: 95
    },
    {
      id: 'LO6.4.2',
      code: 'LO6.4.2',
      title: 'Mẫu thiết kế Early Return (Thoát sớm)',
      description: 'Vận dụng Early Return để loại bỏ các nhánh else không cần thiết, giúp mã nguồn sáng sủa và dễ bảo trì.',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    }
  ],
  sections: [
    {
      id: 'sec-6-4-1',
      lessonId: 'les-6-4',
      order: 1,
      conceptName: 'Lệnh return và giá trị mặc định undefined',
      title: '1. Bản chất của câu lệnh return',
      explanation: 'Câu lệnh `return` thực hiện hai nhiệm vụ sống còn: (1) Trả kết quả của hàm về cho biến ở nơi gọi; (2) Dừng ngay lập tức việc thực thi hàm, mọi câu lệnh phía sau `return` sẽ không bao giờ được chạm tới (Unreachable code). Nếu một hàm chạy đến cuối mà không có lệnh return, JavaScript sẽ ngầm trả về `undefined`.',
      syntax: 'function tinhToan() {\n  return ketQua;\n  // Code sau day se KHONG BAO GIO chay!\n}',
      codeExample: `function congHaiSo(a, b) {
  return a + b;
  console.log("Dòng này sẽ KHÔNG BAO GIỜ được in!");
}

const ketQua = congHaiSo(5, 7);
console.log("Giá trị nhận về:", ketQua); // 12

function hamKhongReturn() {
  const x = 10;
}
console.log("Hàm không return trả về:", hamKhongReturn()); // undefined`,
      lineByLineExplanation: [
        { line: 2, text: 'Hàm trả về giá trị 12 và kết thúc ngay lập tức.' },
        { line: 3, text: 'Lệnh console.log sau return bị vô hiệu hóa hoàn toàn.' }
      ],
      commonMistakes: [
        'Xuống dòng ngay sau chữ return: `return\\n { name: "An" };` -> JavaScript tự động chèn dấu chấm phẩy thành `return;`, trả về `undefined` thay vì đối tượng! (Hiện tượng Automatic Semicolon Insertion - ASI).'
      ],
      whenToUse: 'Dùng khi hàm cần tính toán và giao nộp kết quả cho luồng chương trình tiếp theo sử dụng.',
      whenNotToUse: 'Không viết mã sau câu lệnh return.',
      realWorldUseCase: 'Hàm tính thuế, hàm mã hóa mật khẩu, hàm tạo mã định danh duy nhất.'
    },
    {
      id: 'sec-6-4-2',
      lessonId: 'les-6-4',
      order: 2,
      conceptName: 'Mẫu Early Return (Thoát sớm)',
      title: '2. Mẫu Early Return – Nghệ thuật dọn sạch từ khóa else',
      explanation: 'Khi một nhánh if đã kết thúc bằng `return`, ta hoàn toàn KHÔNG CẦN viết thêm mệnh đề `else` nữa! Mã nguồn trở nên phẳng, rõ ràng và giảm bớt các khối ngoặc nhọn không cần thiết.',
      syntax: '// Thay vì:\nif (cond) { return A; } else { return B; }\n// Hãy viết:\nif (cond) return A;\nreturn B;',
      codeExample: `// Mẫu Early Return chuẩn sạch
function kiemTraDoTuoi(age) {
  if (age < 0) return "Tuổi không hợp lệ";
  if (age < 18) return "Vị thành niên";
  if (age < 60) return "Độ tuổi lao động";
  return "Độ tuổi nghỉ hưu";
}

console.log(kiemTraDoTuoi(25)); // "Độ tuổi lao động"`,
      lineByLineExplanation: [
        { line: 3, text: 'Mỗi nhánh kiểm tra điều kiện xong lập tức return, không cần bất kỳ từ khóa else nào.' }
      ],
      commonMistakes: [
        'Lạm dụng else bọc toàn bộ phần còn lại của hàm khiến code bị lùi vào sâu.'
      ],
      whenToUse: 'Áp dụng cho mọi hàm có phân nhánh điều kiện kiểm tra dữ liệu đầu vào.',
      whenNotToUse: 'Không áp dụng khi luồng cần chạy tiếp các câu lệnh chung ở cuối hàm.',
      realWorldUseCase: 'Kiểm tra quyền truy cập API: nếu không có token thì `return res.status(401)` ngay từ dòng đầu.'
    }
  ],
  predictOutputs: [
    {
      id: 'po-6-4-1',
      code: `function test() {
  return 1;
  return 2;
}
console.log(test());`,
      question: 'Hàm test() trên trả về giá trị là gì?',
      options: ['1', '2', '3', 'undefined'],
      correctAnswer: '1',
      explanation: 'Khi gặp lệnh return 1 đầu tiên, hàm lập tức kết thúc và trả về 1. Lệnh return 2 là Unreachable code nên bị bỏ qua.',
      hint: 'return kết thúc hàm ngay lập tức.'
    }
  ],
  interactivePractice: {
    id: 'ip-6-4',
    title: 'Thực hành: Áp dụng Early Return kiểm tra mật khẩu',
    description: 'Viết hàm xác thực mật khẩu trả về thông báo lỗi sớm nếu mật khẩu không đủ độ dài.',
    starterCode: `function validatePassword(pass) {
  if (!pass) return "Mật khẩu không được để trống";
  if (pass.length < 6) return "Mật khẩu quá ngắn, yêu cầu ít nhất 6 ký tự";
  return "Mật khẩu hợp lệ và an toàn!";
}

console.log(validatePassword("12345"));
console.log(validatePassword("securePass2026"));`,
    expectedConsoleOutput: 'Mật khẩu quá ngắn, yêu cầu ít nhất 6 ký tự\nMật khẩu hợp lệ và an toàn!',
    hint: 'Chạy thử để xem các nhánh return sớm hoạt động.',
    language: 'javascript'
  },
  exercises: {
    basic: {
      id: 'ex-6-4-1',
      lessonId: 'les-6-4',
      title: 'Bài tập Cơ bản: Tạo hàm tính bình phương có return',
      difficulty: 'basic',
      learningObjectiveIds: ['LO6.4.1'],
      description: 'Viết hàm square(n) sử dụng câu lệnh return n * n. Gán kết quả của square(7) vào biến result và in ra: `Bình phương của 7 là: [result]`.',
      starterCode: `// Viết hàm square:

const result = square(7);
console.log("Bình phương của 7 là:", result);`,
      solutionCode: `function square(n) {
  return n * n;
}

const result = square(7);
console.log("Bình phương của 7 là:", result);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra bình phương 7 là 49',
          expectedOutput: 'Bình phương của 7 là: 49'
        }
      ],
      hints: ['return n * n;'],
      explanation: 'Hàm trả về giá trị để gán vào biến result ở bên ngoài.'
    },
    intermediate: {
      id: 'ex-6-4-2',
      lessonId: 'les-6-4',
      title: 'Bài tập Trung bình: Viết hàm kiểm tra số chẵn với Early Return',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO6.4.2'],
      description: 'Viết hàm isEven(n). Nếu n % 2 === 0 return true, ở dòng cuối cùng return false (không dùng else). In ra kết quả kiểm tra số 8 và số 9.',
      starterCode: `function isEven(n) {
  // Áp dụng Early return không dùng else:
  
}

console.log("Số 8 là số chẵn:", isEven(8));
console.log("Số 9 là số chẵn:", isEven(9));`,
      solutionCode: `function isEven(n) {
  if (n % 2 === 0) return true;
  return false;
}

console.log("Số 8 là số chẵn:", isEven(8));
console.log("Số 9 là số chẵn:", isEven(9));`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra 8 là true, 9 là false',
          expectedOutput: 'Số 8 là số chẵn: true\nSố 9 là số chẵn: false'
        }
      ],
      hints: ['if (n % 2 === 0) return true; return false;'],
      explanation: 'Mẫu Early Return không cần từ khóa else.'
    },
    challenge: {
      id: 'ex-6-4-3',
      lessonId: 'les-6-4',
      title: 'Bài tập Thử thách: Xác thực người dùng đa tầng với Early Return',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO6.4.2'],
      description: 'Viết hàm authorize(user). Dùng Early Return: nếu !user return `Từ chối: Chưa đăng nhập`; nếu !user.isVerified return `Từ chối: Email chưa xác thực`; nếu user.role !== "admin" return `Từ chối: Không đủ quyền`; cuối cùng return `Cho phép truy cập trang quản trị`. Chạy thử với user hợp lệ { isVerified: true, role: "admin" }.',
      starterCode: `function authorize(user) {
  // Viết các guard clauses:
  
}

console.log(authorize({ isVerified: true, role: "admin" }));`,
      solutionCode: `function authorize(user) {
  if (!user) return "Từ chối: Chưa đăng nhập";
  if (!user.isVerified) return "Từ chối: Email chưa xác thực";
  if (user.role !== "admin") return "Từ chối: Không đủ quyền";
  return "Cho phép truy cập trang quản trị";
}

console.log(authorize({ isVerified: true, role: "admin" }));`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra cấp quyền thành công',
          expectedOutput: 'Cho phép truy cập trang quản trị'
        }
      ],
      hints: ['Kiểm tra tuần tự từng điều kiện vi phạm rồi return sớm'],
      explanation: 'Mẫu xác thực bảo mật đa tầng chuẩn doanh nghiệp bằng Early Return.'
    }
  },
  quiz: {
    id: 'quiz-6-4',
    lessonId: 'les-6-4',
    title: 'Trắc nghiệm: Câu lệnh return',
    passingScore: 70,
    questions: [
      {
        id: 'q-6-4-1',
        lessonId: 'les-6-4',
        learningObjectiveId: 'LO6.4.1',
        type: 'multiple_choice',
        difficulty: 'easy',
        prompt: 'Nếu một hàm trong JavaScript chạy hết thân hàm mà không gặp bất kỳ câu lệnh return nào, giá trị trả về của hàm đó sẽ là gì?',
        options: [
          { id: 'a', text: 'null' },
          { id: 'b', text: '0' },
          { id: 'c', text: 'undefined' },
          { id: 'd', text: 'false' }
        ],
        correctAnswer: 'c',
        explanation: 'Mặc định trong JavaScript, một hàm không có lệnh return tường minh sẽ luôn trả về giá trị undefined.',
        relatedLessonId: 'les-6-4'
      }
    ]
  },
  summary: [
    'Lệnh return xuất giá trị ra ngoài và lập tức chấm dứt hàm.',
    'Mặc định hàm không có return sẽ trả về undefined.',
    'Áp dụng Early Return giúp mã nguồn phẳng, không cần lồng ghép else phức tạp.'
  ],
  suggestedBookmarks: [
    'Mẫu thiết kế Early Return trong kiến trúc Clean Code',
    'Cạm bẫy Automatic Semicolon Insertion (ASI) khi xuống dòng sau return'
  ]
};

export const LESSON_6_5: Lesson = {
  id: 'les-6-5',
  moduleId: 'mod-6',
  track: 'javascript',
  language: 'javascript',
  title: '6.5 Phạm vi biến: Global, Function và Block Scope',
  order: 5,
  durationMinutes: 55,
  difficulty: 'Trung bình',
  prerequisites: [
    'Đã học biến let, const, var',
    'Hiểu cấu trúc hàm và khối lệnh {}'
  ],
  learningObjectives: [
    {
      id: 'LO6.5.1',
      code: 'LO6.5.1',
      title: 'Phân biệt 3 cấp độ phạm vi biến (Scope)',
      description: 'Làm chủ: (1) Global Scope (Toàn cục), (2) Function Scope (Hàm), (3) Block Scope (Khối lệnh {}).',
      bloomLevel: 'Analyze',
      masteryPercentage: 90
    },
    {
      id: 'LO6.5.2',
      code: 'LO6.5.2',
      title: 'Chuỗi phạm vi (Scope Chain) & Che bóng biến (Shadowing)',
      description: 'Hiểu cơ chế engine tìm kiếm biến từ trong ra ngoài (Scope Chain) và hiện tượng biến cục bộ che biến toàn cục (Variable Shadowing).',
      bloomLevel: 'Analyze',
      masteryPercentage: 85
    }
  ],
  sections: [
    {
      id: 'sec-6-5-1',
      lessonId: 'les-6-5',
      order: 1,
      conceptName: 'Ba cấp độ phạm vi biến (Scope)',
      title: '1. Bản đồ 3 phạm vi biến: Global, Function, Block Scope',
      explanation: 'Phạm vi (Scope) xác định ranh giới vùng nhớ nơi mà một biến có thể được truy xuất: (1) `Global Scope`: Biến khai báo ngoài cùng tệp, có thể truy cập ở mọi nơi; (2) `Function Scope`: Biến khai báo bên trong hàm, chỉ sống bên trong hàm đó (áp dụng cho cả var, let, const); (3) `Block Scope`: Biến khai báo trong cặp ngoặc nhọn `{}` bất kỳ (như if, for, while) bằng `let` hoặc `const` thì CHỈ TỒN TẠI trong khối đó. Từ khóa cũ `var` KHÔNG CÓ Block Scope!',
      syntax: '// Global Scope\nconst globalVar = "A";\n\nfunction myFunc() {\n  // Function Scope\n  const funcVar = "B";\n  if (true) {\n    // Block Scope\n    const blockVar = "C";\n  }\n}',
      codeExample: `// 1. Block Scope với let và const
if (true) {
  let biMatTrongKhoi = "Mã số bí mật 123";
  var bienVarKhongCoBlockScope = "Tôi lộ ra ngoài!";
}

console.log(bienVarKhongCoBlockScope); // In được bình thường!
// console.log(biMatTrongKhoi); // ❌ Lỗi ReferenceError: biMatTrongKhoi is not defined`,
      lineByLineExplanation: [
        { line: 3, text: 'biMatTrongKhoi được bảo vệ an toàn trong khối if bởi từ khóa let.' },
        { line: 4, text: 'var không bị giới hạn bởi cặp ngoặc nhọn if nên bị rò rỉ ra bên ngoài.' }
      ],
      commonMistakes: [
        'Dùng var trong vòng lặp for khiến biến đếm i bị rò rỉ ra ngoài phạm vi toàn cục.',
        'Cố gắng truy xuất biến khai báo trong hàm từ bên ngoài hàm.'
      ],
      whenToUse: 'Luôn dùng `const` và `let` để tận dụng Block Scope bảo vệ dữ liệu, tránh xung đột tên biến.',
      whenNotToUse: 'Tuyệt đối không dùng `var` trong các dự án hiện đại.',
      realWorldUseCase: 'Bảo vệ biến đếm trong vòng lặp for không bị đè giá trị giữa các hàm khác nhau.'
    },
    {
      id: 'sec-6-5-2',
      lessonId: 'les-6-5',
      order: 2,
      conceptName: 'Chuỗi phạm vi (Scope Chain) & Che bóng biến (Shadowing)',
      title: '2. Chuỗi Scope Chain và hiện tượng Che bóng biến (Variable Shadowing)',
      explanation: 'Khi một biến được sử dụng, JavaScript Engine sẽ tìm kiếm biến đó theo thứ tự từ trong ra ngoài (Scope Chain): bắt đầu từ Scope hiện tại -> Scope cha bao bọc -> Scope toàn cục (Global). Nếu ở Scope bên trong ta khai báo một biến có TRÙNG TÊN với biến ở Scope bên ngoài, biến bên trong sẽ "che bóng" (shadow) biến bên ngoài trong phạm vi của nó.',
      syntax: 'const x = "Global";\nfunction f() {\n  const x = "Local"; // Che bóng x toàn cục\n}',
      codeExample: `const userName = "Nguyễn Văn An (Toàn cục)";

function hienThiHoSo() {
  const userName = "Trần Bích Ngọc (Cục bộ trong hàm)"; // Shadowing
  console.log("Trong hàm userName là:", userName);
}

hienThiHoSo(); // In: Trần Bích Ngọc (Cục bộ trong hàm)
console.log("Ngoài hàm userName vẫn là:", userName); // In: Nguyễn Văn An (Toàn cục)`,
      lineByLineExplanation: [
        { line: 4, text: 'Khai báo userName trùng tên bên trong hàm hienThiHoSo.' },
        { line: 5, text: 'Engine ưu tiên lấy biến userName ở scope gần nhất (cục bộ).' },
        { line: 9, text: 'Biến toàn cục bên ngoài không hề bị suy suyển hay thay đổi giá trị.' }
      ],
      commonMistakes: [
        'Cố tình đặt trùng tên biến nhiều tầng gây nhầm lẫn khó đọc và khó debug.'
      ],
      whenToUse: 'Hiểu Scope Chain để tự tin làm việc với Closure và Module Pattern sau này.',
      whenNotToUse: 'Hạn chế việc Shadowing biến trừ các trường hợp tham số quy ước thông thường.',
      realWorldUseCase: 'Đóng gói các biến trạng thái riêng tư trong từng hàm không sợ làm ô nhiễm phạm vi toàn cục (Global Namespace Pollution).'
    }
  ],
  predictOutputs: [
    {
      id: 'po-6-5-1',
      code: `let x = 10;
function test() {
  let x = 20;
  console.log(x);
}
test();
console.log(x);`,
      question: 'Hai câu lệnh in lần lượt xuất ra kết quả gì?',
      options: [
        '20 sau đó 10',
        '20 sau đó 20',
        '10 sau đó 20',
        'Lỗi SyntaxError'
      ],
      correctAnswer: '20 sau đó 10',
      explanation: 'Bên trong hàm test, biến x = 20 che bóng biến ngoài nên in 20. Ra ngoài hàm, biến x toàn cục vẫn là 10.',
      hint: 'Biến trong hàm không làm thay đổi biến cùng tên ngoài hàm.'
    }
  ],
  interactivePractice: {
    id: 'ip-6-5',
    title: 'Thực hành: Khảo sát Block Scope của biến let',
    description: 'Chạy thử đoạn mã để quan sát biến let bên trong khối if không làm ảnh hưởng biến bên ngoài.',
    starterCode: `const role = "Sinh viên";

if (true) {
  const role = "Giảng viên";
  console.log("Bên trong khối:", role);
}

console.log("Bên ngoài khối:", role);`,
    expectedConsoleOutput: 'Bên trong khối: Giảng viên\nBên ngoài khối: Sinh viên',
    hint: 'Chạy thử để thấy tính độc lập của Block Scope.',
    language: 'javascript'
  },
  exercises: {
    basic: {
      id: 'ex-6-5-1',
      lessonId: 'les-6-5',
      title: 'Bài tập Cơ bản: Khai báo biến cục bộ trong hàm',
      difficulty: 'basic',
      learningObjectiveIds: ['LO6.5.1'],
      description: 'Khai báo biến toàn cục `appName = "Web Master"`. Định nghĩa hàm showApp() có biến cục bộ `version = "2.0"`. Trong hàm in ra: `Ứng dụng: [appName] v[version]`. Gọi hàm showApp().',
      starterCode: `const appName = "Web Master";

function showApp() {
  // Khai báo version và in:
  
}

showApp();`,
      solutionCode: `const appName = "Web Master";

function showApp() {
  const version = "2.0";
  console.log(\`Ứng dụng: \${appName} v\${version}\`);
}

showApp();`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra in đúng Ứng dụng: Web Master v2.0',
          expectedOutput: 'Ứng dụng: Web Master v2.0'
        }
      ],
      hints: ['const version = "2.0"; console.log(...)'],
      explanation: 'Hàm showApp có thể đọc appName ở scope cha và version ở scope cục bộ của chính nó.'
    },
    intermediate: {
      id: 'ex-6-5-2',
      lessonId: 'les-6-5',
      title: 'Bài tập Trung bình: Kiểm tra tính bảo vệ của Block Scope',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO6.5.1'],
      description: 'Khai báo biến `let score = 50`. Trong khối `if (true)`, dùng `let score = 100` và in ra: `Điểm trong khối: [score]`. Ra ngoài khối if in ra: `Điểm ngoài khối: [score]`.',
      starterCode: `let score = 50;

if (true) {
  // Khai báo score trong khối và in:
  
}

// In score ngoài khối:
`,
      solutionCode: `let score = 50;

if (true) {
  let score = 100;
  console.log("Điểm trong khối:", score);
}

console.log("Điểm ngoài khối:", score);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra in điểm trong khối 100 và ngoài khối 50',
          expectedOutput: 'Điểm trong khối: 100\nĐiểm ngoài khối: 50'
        }
      ],
      hints: ['let score = 100; bên trong khối if'],
      explanation: 'Từ khóa let tạo ra Block Scope độc lập hoàn toàn với biến ngoài.'
    },
    challenge: {
      id: 'ex-6-5-3',
      lessonId: 'les-6-5',
      title: 'Bài tập Thử thách: Truy vết chuỗi Scope Chain 3 tầng',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO6.5.2'],
      description: 'Cho `const a = 1`. Viết hàm outer() có `const b = 2`. Bên trong outer định nghĩa tiếp hàm inner() có `const c = 3`. Hàm inner in ra tổng `a + b + c`: `Tổng 3 tầng scope: [kết quả]`. Gọi inner() bên trong outer() và gọi outer() bên ngoài.',
      starterCode: `const a = 1;

function outer() {
  const b = 2;
  function inner() {
    const c = 3;
    // In tổng a + b + c:
    
  }
  inner();
}

outer();`,
      solutionCode: `const a = 1;

function outer() {
  const b = 2;
  function inner() {
    const c = 3;
    console.log("Tổng 3 tầng scope:", a + b + c);
  }
  inner();
}

outer();`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra tổng 1 + 2 + 3 = 6',
          expectedOutput: 'Tổng 3 tầng scope: 6'
        }
      ],
      hints: ['inner có thể truy cập c (local), b (outer), và a (global)'],
      explanation: 'Cơ chế Scope Chain cho phép hàm con truy cập toàn bộ biến của các hàm cha bao bọc nó lên tới phạm vi toàn cục.'
    }
  },
  quiz: {
    id: 'quiz-6-5',
    lessonId: 'les-6-5',
    title: 'Trắc nghiệm: Phạm vi biến trong JavaScript',
    passingScore: 70,
    questions: [
      {
        id: 'q-6-5-1',
        lessonId: 'les-6-5',
        learningObjectiveId: 'LO6.5.1',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'Từ khóa khai báo biến nào sau đây KHÔNG CÓ phạm vi khối lệnh (Block Scope)?',
        options: [
          { id: 'a', text: 'let' },
          { id: 'b', text: 'const' },
          { id: 'c', text: 'var' },
          { id: 'd', text: 'Cả let và const' }
        ],
        correctAnswer: 'c',
        explanation: 'Từ khóa cũ var chỉ có Function Scope và Global Scope, nó hoàn toàn phớt lờ cặp ngoặc nhọn Block Scope của if, for, while.',
        relatedLessonId: 'les-6-5'
      }
    ]
  },
  summary: [
    '3 cấp độ phạm vi: Global (toàn cục), Function (hàm), Block (khối nhọn {}).',
    'let và const có Block Scope bảo vệ dữ liệu an toàn, trong khi var thì không.',
    'Scope Chain tìm kiếm biến từ trong ra ngoài; biến cục bộ sẽ che bóng biến toàn cục nếu trùng tên.'
  ],
  suggestedBookmarks: [
    'Bản chất cơ chế Scope Chain và Lexical Environment',
    'Khái niệm Closure (Hàm bao đóng) được xây dựng trên nền tảng Function Scope'
  ]
};

export const JS_MODULE_6_LESSONS: Lesson[] = [
  LESSON_6_1,
  LESSON_6_2,
  LESSON_6_3,
  LESSON_6_4,
  LESSON_6_5
];
