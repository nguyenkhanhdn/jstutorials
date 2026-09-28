import { Lesson } from '../../types';

// ==========================================
// MODULE 13: JAVASCRIPT NÂNG CAO
// ==========================================

export const LESSON_13_1: Lesson = {
  id: 'les-13-1',
  moduleId: 'mod-13',
  track: 'javascript',
  language: 'javascript',
  title: '13.1 Lexical Scope & Cơ chế Hoisting chi tiết',
  order: 1,
  durationMinutes: 50,
  difficulty: 'Nâng cao',
  prerequisites: ['Đã học khai báo biến let, const, var', 'Hiểu phạm vi hàm (Function Scope)'],
  learningObjectives: [
    {
      id: 'LO13.1.1',
      code: 'LO13.1.1',
      title: 'Hiểu phạm vi tĩnh Lexical Scope và chuỗi Scope Chain',
      description: 'Quy tắc tìm kiếm biến từ trong ra ngoài (Inner scope to Outer scope).',
      bloomLevel: 'Understand',
      masteryPercentage: 90
    },
    {
      id: 'LO13.1.2',
      code: 'LO13.1.2',
      title: 'Bản chất Hoisting của var, let, const và Function Declaration',
      description: 'Vùng chết tạm thời TDZ (Temporal Dead Zone) và ưu thế của let/const.',
      bloomLevel: 'Analyze',
      masteryPercentage: 88
    }
  ],
  sections: [
    {
      id: 'sec-13-1-1',
      lessonId: 'les-13-1',
      order: 1,
      conceptName: 'Lexical Scope và Scope Chain',
      title: '1. Lexical Scope: Phạm vi xác định theo vị trí viết mã',
      explanation: '`Lexical Scope` (Phạm vi từ vựng) có nghĩa là phạm vi của một biến được xác định cố định ngay tại thời điểm bạn viết code trong trình soạn thảo, chứ KHÔNG phụ thuộc vào nơi hàm được gọi. Hàm con lồng bên trong luôn có thể truy cập biến của hàm cha bao ngoài, tạo thành một chuỗi liên kết gọi là `Scope Chain`.',
      syntax: 'const globalVar = "A";\nfunction outer() {\n  const outerVar = "B";\n  function inner() {\n    console.log(outerVar, globalVar); // Truy cập ngược lên trên\n  }\n}',
      codeExample: `const course = "JavaScript Pro";

function showInfo() {
  const version = "ES2026";
  
  function getFullTitle() {
    // getFullTitle tìm version ở hàm cha showInfo, tìm course ở Global scope
    return \`Khóa: \${course} - Chuẩn: \${version}\`;
  }
  
  return getFullTitle();
}

console.log(showInfo());`,
      lineByLineExplanation: [
        { line: 8, text: 'Hàm con getFullTitle truy xuất biến version từ outer scope và course từ global scope.' },
        { line: 14, text: 'Thực thi và in ra: "Khóa: JavaScript Pro - Chuẩn: ES2026".' }
      ],
      commonMistakes: [
        'Tưởng rằng hàm con chỉ truy cập được biến nếu biến đó được truyền vào qua tham số.'
      ],
      whenToUse: 'Hiểu cách phân chia module, tránh làm ô nhiễm phạm vi toàn cục (Global Scope Pollution).',
      whenNotToUse: 'Không khai báo biến trùng tên ở nhiều tầng scope lồng nhau gây hiện tượng che khuất biến (Variable Shadowing).',
      realWorldUseCase: 'Bảo vệ các biến trạng thái quan trọng bên trong module, chỉ công khai các hàm cần thiết.'
    },
    {
      id: 'sec-13-1-2',
      lessonId: 'les-13-1',
      order: 2,
      conceptName: 'Bản chất Hoisting và Temporal Dead Zone (TDZ)',
      title: '2. Hoisting: Cơ chế nâng biến trong giai đoạn biên dịch',
      explanation: 'Trong giai đoạn khởi tạo (Creation phase), trình duyệt quét toàn bộ mã nguồn và đưa phần khai báo lên đầu scope. `var` được hoisted và khởi tạo giá trị ban đầu là `undefined`. `let` và `const` cũng được hoisted nhưng KHÔNG được khởi tạo giá trị, tạo ra vùng chết tạm thời `TDZ` (Temporal Dead Zone) - truy cập vào trước dòng khai báo sẽ văng lỗi `ReferenceError`. `Function Declaration` được hoisted cả phần thân hàm.',
      syntax: 'console.log(a); // undefined\nvar a = 10;\n\nconsole.log(b); // ReferenceError: Cannot access before initialization\nlet b = 20;',
      codeExample: `// 1. Function Declaration được hoisted hoàn toàn:
sayHello(); // Hoạt động tốt!
function sayHello() {
  console.log("Xin chào các bạn sinh viên!");
}

// 2. let/const với Temporal Dead Zone:
try {
  // @ts-ignore
  console.log(score);
  let score = 95;
} catch (e: any) {
  console.log("Lỗi TDZ:", e.message);
}`,
      lineByLineExplanation: [
        { line: 2, text: 'Gọi sayHello() trước khi định nghĩa vẫn chạy do Function Declaration được hoisted toàn phần.' },
        { line: 12, text: 'Biến score đang ở trong TDZ nên quăng lỗi ReferenceError an toàn.' }
      ],
      commonMistakes: [
        'Nghĩ rằng let và const không bị hoisted (thực tế chúng có hoisted nhưng bị khóa trong TDZ đến khi gặp dòng gán giá trị).'
      ],
      whenToUse: 'Luôn dùng let và const để viết mã sạch, tránh lỗi logic khó hiểu do var gây ra.',
      whenNotToUse: 'Tránh dựa dẫm vào Hoisting để gọi hàm lung tung trước khai báo (hãy khai báo trước khi sử dụng).',
      realWorldUseCase: 'Chuẩn Clean Code doanh nghiệp yêu cầu 100% dùng let/const và cấm dùng var.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-13-1',
    title: 'Thực hành kiểm tra chuỗi Scope Chain',
    description: 'Truy xuất biến từ scope bên ngoài thông qua hàm lồng nhau.',
    starterCode: `const institute = "FPT Polytechnic";

function getGreeting(name) {
  return \`Chào mừng \${name} đến với \${institute}!\`;
}

console.log(getGreeting("Tuấn"));`,
    expectedConsoleOutput: 'Chào mừng Tuấn đến với FPT Polytechnic!',
    hint: 'Biến institute ở Global Scope được truy xuất tự nhiên trong hàm getGreeting.'
  },
  exercises: {
    basic: {
      id: 'ex-13-1-1',
      lessonId: 'les-13-1',
      title: 'Bài tập Cơ bản: Khám phá Temporal Dead Zone (TDZ)',
      difficulty: 'basic',
      learningObjectiveIds: ['LO13.1.2'],
      description: 'Khi truy cập một biến khai báo bằng `let` trước dòng định nghĩa của nó, trình duyệt sẽ quăng lỗi gì: "TypeError" hay "ReferenceError"? In tên loại lỗi ra màn hình.',
      starterCode: `const expectedError = "ReferenceError";
console.log("Loại lỗi TDZ:", expectedError);`,
      solutionCode: `const expectedError = "ReferenceError";
console.log("Loại lỗi TDZ:", expectedError);`,
      testCases: [
        { id: 'tc-1', description: 'Loại lỗi là ReferenceError', expectedOutput: 'Loại lỗi TDZ: ReferenceError' }
      ],
      hints: ['Cannot access variable before initialization -> ReferenceError'],
      explanation: 'Trong vùng TDZ, biến let/const chưa được cấp phát giá trị nên truy cập vào sẽ sinh ra ReferenceError.'
    },
    intermediate: {
      id: 'ex-13-1-2',
      lessonId: 'les-13-1',
      title: 'Bài tập Trung bình: Phân biệt Hoisting giữa Function Declaration và Function Expression',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO13.1.2'],
      description: 'Cho biết kiểu khai báo hàm nào sau đây có thể gọi được TRƯỚC dòng khai báo mà không báo lỗi: "Declaration" (function fn(){}) hay "Expression" (const fn = () => {})? In ra đáp án đúng.',
      starterCode: `const hoistedFunctionType = "Declaration";
console.log("Hàm được hoisted hoàn toàn:", hoistedFunctionType);`,
      solutionCode: `const hoistedFunctionType = "Declaration";
console.log("Hàm được hoisted hoàn toàn:", hoistedFunctionType);`,
      testCases: [
        { id: 'tc-1', description: 'Function Declaration', expectedOutput: 'Hàm được hoisted hoàn toàn: Declaration' }
      ],
      hints: ['Function Declaration được hoisted cả tên và thân hàm'],
      explanation: 'Chỉ có Function Declaration mới được hoisted đầy đủ phần thân hàm, trong khi Function Expression tuân theo quy tắc biến của const/let/var.'
    },
    challenge: {
      id: 'ex-13-1-3',
      lessonId: 'les-13-1',
      title: 'Bài tập Thử thách: Mô phỏng Scope Chain 3 tầng',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO13.1.1'],
      description: 'Tạo hàm chainTest() chứa biến a = 1. Bên trong định nghĩa mid() có biến b = 2. Bên trong mid() định nghĩa bot() có c = 3 và trả về a + b + c. Gọi chainTest() và in ra kết quả tổng.',
      starterCode: `function chainTest() {
  const a = 1;
  function mid() {
    const b = 2;
    function bot() {
      const c = 3;
      return a + b + c;
    }
    return bot();
  }
  return mid();
}

console.log("Tổng 3 tầng scope:", chainTest());`,
      solutionCode: `function chainTest() {
  const a = 1;
  function mid() {
    const b = 2;
    function bot() {
      const c = 3;
      return a + b + c;
    }
    return bot();
  }
  return mid();
}
console.log("Tổng 3 tầng scope:", chainTest());`,
      testCases: [
        { id: 'tc-1', description: 'Tổng 1 + 2 + 3 = 6', expectedOutput: 'Tổng 3 tầng scope: 6' }
      ],
      hints: ['Hàm bot tìm a từ chainTest, b từ mid và c từ chính nó'],
      explanation: 'Scope Chain đi từ bot -> mid -> chainTest để thu thập toàn bộ các biến tương ứng.'
    }
  },
  quiz: {
    id: 'quiz-13-1',
    lessonId: 'les-13-1',
    title: 'Trắc nghiệm Lexical Scope & Hoisting',
    passingScore: 70,
    questions: []
  },
  summary: [
    'Lexical Scope xác định phạm vi theo cấu trúc mã nguồn được viết.',
    'let và const có Temporal Dead Zone (TDZ) ngăn chặn lỗi dùng biến trước khai báo.'
  ],
  suggestedBookmarks: ['Scope Chain và Lexical Scope', 'Temporal Dead Zone (TDZ)']
};

export const LESSON_13_2: Lesson = {
  id: 'les-13-2',
  moduleId: 'mod-13',
  track: 'javascript',
  language: 'javascript',
  title: '13.2 Hiểu và ứng dụng Closure trong bảo toàn trạng thái',
  order: 2,
  durationMinutes: 60,
  difficulty: 'Nâng cao',
  prerequisites: ['Đã học Lexical Scope và Return hàm'],
  learningObjectives: [
    {
      id: 'LO13.2.1',
      code: 'LO13.2.1',
      title: 'Bản chất cơ chế Closure trong JavaScript',
      description: 'Hàm con vẫn "nhớ" và truy cập được biến của hàm cha ngay cả khi hàm cha đã kết thúc thực thi.',
      bloomLevel: 'Analyze',
      masteryPercentage: 90
    },
    {
      id: 'LO13.2.2',
      code: 'LO13.2.2',
      title: 'Ứng dụng Closure đóng gói dữ liệu (Encapsulation)',
      description: 'Tạo biến riêng tư (Private state) và xây dựng Factory Function.',
      bloomLevel: 'Apply',
      masteryPercentage: 88
    }
  ],
  sections: [
    {
      id: 'sec-13-2-1',
      lessonId: 'les-13-2',
      order: 1,
      conceptName: 'Định nghĩa và cơ chế Closure',
      title: '1. Closure: Ký ức bền bỉ của một hàm',
      explanation: '`Closure` là sự kết hợp giữa một hàm và môi trường từ vựng (Lexical Environment) nơi hàm đó được khai báo. Điểm kỳ diệu là: khi hàm cha đã chạy xong và trả về hàm con, hàm con VẪN GIỮ ĐƯỢC THAM CHIẾU đến các biến của hàm cha trong bộ nhớ RAM (không bị bộ thu gom rác Garbage Collector dọn mất).',
      syntax: 'function createCounter() {\n  let count = 0; // Biến private\n  return function() {\n    count++;\n    return count;\n  };\n}',
      codeExample: `function createCounter(start = 0) {
  let count = start; // Biến này được đóng gói (Private)
  
  return {
    increment() {
      count++;
      return count;
    },
    getValue() {
      return count;
    }
  };
}

const counterA = createCounter(10);
console.log("Lần 1:", counterA.increment()); // 11
console.log("Lần 2:", counterA.increment()); // 12
console.log("Giá trị hiện tại:", counterA.getValue()); // 12

// Mã bên ngoài không thể sửa trực tiếp count (counterA.count là undefined)
console.log("Truy cập trực tiếp count:", (counterA as any).count);`,
      lineByLineExplanation: [
        { line: 2, text: 'Biến count nằm trong phạm vi hàm createCounter.' },
        { line: 5, text: 'Các phương thức increment và getValue giữ Closure tới biến count đó.' },
        { line: 20, text: 'Bên ngoài không có cách nào can thiệp trực tiếp vào count, đảm bảo tính đóng gói dữ liệu.' }
      ],
      commonMistakes: [
        'Tạo ra quá nhiều Closure không cần thiết trong các vòng lặp lớn dẫn đến rò rỉ bộ nhớ (Memory Leak).'
      ],
      whenToUse: 'Dùng khi cần tạo biến riêng tư (Private variable), xây dựng thư viện, hoặc làm Hook trong React (như `useState`).',
      whenNotToUse: 'Không dùng Closure nếu một hàm thuần túy (Pure Function) không cần lưu lại trạng thái.',
      realWorldUseCase: 'Hook `useState` trong React được cài đặt trực tiếp dựa trên nguyên lý Closure của JavaScript.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-13-2',
    title: 'Thực hành tạo hàm tăng ID tự động với Closure',
    description: 'Xây dựng hàm generateId() mỗi lần gọi tăng ID lên 1.',
    starterCode: `function idGenerator() {
  let nextId = 100;
  return function() {
    nextId++;
    return nextId;
  };
}

const getId = idGenerator();
console.log("ID 1:", getId());
console.log("ID 2:", getId());`,
    expectedConsoleOutput: 'ID 1: 101\nID 2: 102',
    hint: 'Biến nextId được lưu trữ bền bỉ qua các lần gọi hàm getId.'
  },
  exercises: {
    basic: {
      id: 'ex-13-2-1',
      lessonId: 'les-13-2',
      title: 'Bài tập Cơ bản: Phép cộng tùy biến với Function Currying',
      difficulty: 'basic',
      learningObjectiveIds: ['LO13.2.1'],
      description: 'Viết hàm createAdder(x) nhận vào số x, trả về một hàm con nhận vào y và trả về x + y. Tạo hàm addFive = createAdder(5) và in kết quả addFive(10).',
      starterCode: `function createAdder(x) {
  return function(y) {
    return x + y;
  };
}

const addFive = createAdder(5);
console.log("Kết quả 5 + 10:", addFive(10));`,
      solutionCode: `function createAdder(x) {
  return function(y) {
    return x + y;
  };
}
const addFive = createAdder(5);
console.log("Kết quả 5 + 10:", addFive(10));`,
      testCases: [
        { id: 'tc-1', description: '5 + 10 = 15', expectedOutput: 'Kết quả 5 + 10: 15' }
      ],
      hints: ['return function(y) { return x + y; }'],
      explanation: 'Hàm con lưu giữ giá trị x = 5 thông qua cơ chế Closure.'
    },
    intermediate: {
      id: 'ex-13-2-2',
      lessonId: 'les-13-2',
      title: 'Bài tập Trung bình: Tạo ví điện tử có số dư bảo mật',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO13.2.2'],
      description: 'Xây dựng hàm createWallet(initialBalance). Trả về object có method deposit(amount) cộng tiền và getBalance() in "Số dư: [balance]đ". Chạy thử nạp 50,000 vào ví ban đầu 100,000.',
      starterCode: `function createWallet(initialBalance) {
  let balance = initialBalance;
  return {
    deposit(amount) {
      balance += amount;
    },
    getBalance() {
      return \`Số dư: \${balance}đ\`;
    }
  };
}

const myWallet = createWallet(100000);
myWallet.deposit(50000);
console.log(myWallet.getBalance());`,
      solutionCode: `function createWallet(initialBalance) {
  let balance = initialBalance;
  return {
    deposit(amount) {
      balance += amount;
    },
    getBalance() {
      return \`Số dư: \${balance}đ\`;
    }
  };
}
const myWallet = createWallet(100000);
myWallet.deposit(50000);
console.log(myWallet.getBalance());`,
      testCases: [
        { id: 'tc-1', description: 'Số dư 150000đ', expectedOutput: 'Số dư: 150000đ' }
      ],
      hints: ['deposit tăng balance, getBalance trả về chuỗi số dư'],
      explanation: 'Biến balance được bảo vệ an toàn, không thể bị sửa đổi tùy tiện từ bên ngoài.'
    },
    challenge: {
      id: 'ex-13-2-3',
      lessonId: 'les-13-2',
      title: 'Bài tập Thử thách: Kỹ thuật Memoization tăng tốc tính toán',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO13.2.2'],
      description: 'Viết hàm memoizeSquare() dùng Closure lưu trữ object cache = {}. Khi tính bình phương n: nếu n đã có trong cache in "[n] lấy từ cache: [kết quả]", nếu chưa có thì tính, lưu vào cache và in "[n] tính mới: [kết quả]". Chạy thử với 4 hai lần.',
      starterCode: `function memoizeSquare() {
  const cache = {};
  return function(n) {
    if (n in cache) {
      console.log(\`\${n} lấy từ cache: \${cache[n]}\`);
      return cache[n];
    }
    const result = n * n;
    cache[n] = result;
    console.log(\`\${n} tính mới: \${result}\`);
    return result;
  };
}

const square = memoizeSquare();
square(4);
square(4);`,
      solutionCode: `function memoizeSquare() {
  const cache = {};
  return function(n) {
    if (n in cache) {
      console.log(\`\${n} lấy từ cache: \${cache[n]}\`);
      return cache[n];
    }
    const result = n * n;
    cache[n] = result;
    console.log(\`\${n} tính mới: \${result}\`);
    return result;
  };
}
const square = memoizeSquare();
square(4);
square(4);`,
      testCases: [
        { id: 'tc-1', description: 'Lần 1 tính mới 16', expectedOutput: '4 tính mới: 16' },
        { id: 'tc-2', description: 'Lần 2 lấy từ cache 16', expectedOutput: '4 lấy từ cache: 16' }
      ],
      hints: ['Lưu kết quả n * n vào cache[n] qua Closure'],
      explanation: 'Memoization là ứng dụng thực tế đỉnh cao của Closure giúp tối ưu hóa thuật toán phức tạp.'
    }
  },
  quiz: {
    id: 'quiz-13-2',
    lessonId: 'les-13-2',
    title: 'Trắc nghiệm Closure',
    passingScore: 70,
    questions: []
  },
  summary: [
    'Closure giúp hàm con ghi nhớ phạm vi từ vựng của hàm cha ngay cả khi hàm cha đã kết thúc.',
    'Là nền tảng để tạo biến private, factory function và hooks trong React.'
  ],
  suggestedBookmarks: ['Đóng gói dữ liệu với Closure', 'Memoization pattern']
};

export const LESSON_13_3: Lesson = {
  id: 'les-13-3',
  moduleId: 'mod-13',
  track: 'javascript',
  language: 'javascript',
  title: '13.3 Callback & Higher-Order Functions',
  order: 3,
  durationMinutes: 50,
  difficulty: 'Trung bình',
  prerequisites: ['Đã học Functions và Arrow Functions'],
  learningObjectives: [
    {
      id: 'LO13.3.1',
      code: 'LO13.3.1',
      title: 'Hiểu khái niệm First-Class Functions và Callback',
      description: 'Hàm được coi như một giá trị (First-Class Citizen), có thể truyền làm tham số.',
      bloomLevel: 'Understand',
      masteryPercentage: 92
    },
    {
      id: 'LO13.3.2',
      code: 'LO13.3.2',
      title: 'Tự xây dựng Higher-Order Functions (HOF)',
      description: 'Viết các hàm nhận hàm khác làm đối số hoặc trả về một hàm mới.',
      bloomLevel: 'Apply',
      masteryPercentage: 88
    }
  ],
  sections: [
    {
      id: 'sec-13-3-1',
      lessonId: 'les-13-3',
      order: 1,
      conceptName: 'First-Class Functions và Higher-Order Functions',
      title: '1. Higher-Order Functions: Hàm bậc cao trong JavaScript',
      explanation: 'Trong JavaScript, Hàm là một công dân hạng nhất (First-Class Citizen), có nghĩa là bạn có thể gán hàm vào biến, truyền hàm làm tham số cho hàm khác (gọi là `Callback`), và trả về một hàm từ một hàm khác. Bất kỳ hàm nào nhận vào một hàm hoặc trả về một hàm đều được gọi là `Higher-Order Function` (HOF).',
      syntax: 'function hcm(callback) {\n  // thực thi điều gì đó\n  callback();\n}',
      codeExample: `// HOF nhận callback biến đổi từng phần tử
function myCustomTransformer(list, fn) {
  const result = [];
  for (const item of list) {
    result.push(fn(item));
  }
  return result;
}

const numbers = [1, 2, 3, 4];
const doubled = myCustomTransformer(numbers, x => x * 2);
console.log("Gấp đôi bằng HOF tự viết:", doubled);`,
      lineByLineExplanation: [
        { line: 2, text: 'myCustomTransformer là một Higher-Order Function vì nhận hàm fn làm tham số.' },
        { line: 11, text: 'Truyền callback x => x * 2 để biến đổi mảng số.' }
      ],
      commonMistakes: [
        'Truyền kết quả gọi hàm thay vì truyền định nghĩa hàm: `doSomething(myFn())` (sai) thay vì `doSomething(myFn)` (đúng).'
      ],
      whenToUse: 'Dùng khi muốn tái sử dụng logic cốt lõi và tùy biến hành vi qua các callback.',
      whenNotToUse: 'Tránh lồng callback quá sâu 3-4 cấp dẫn đến hiện tượng Callback Hell.',
      realWorldUseCase: 'Các phương thức mảng map, filter, reduce và các middleware trong ExpressJS.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-13-3',
    title: 'Thực hành truyền Callback xử lý log',
    description: 'Viết hàm thực hiện hành động và kích hoạt callback hoàn thành.',
    starterCode: `function processTask(taskName, onDone) {
  console.log("Bắt đầu xử lý:", taskName);
  onDone(\`Hoàn thành: \${taskName}\`);
}

processTask("Sao lưu dữ liệu", (result) => {
  console.log("Thông báo:", result);
});`,
    expectedConsoleOutput: 'Bắt đầu xử lý: Sao lưu dữ liệu\nThông báo: Hoàn thành: Sao lưu dữ liệu',
    hint: 'onDone là hàm callback được gọi ở cuối.'
  },
  exercises: {
    basic: {
      id: 'ex-13-3-1',
      lessonId: 'les-13-3',
      title: 'Bài tập Cơ bản: Viết hàm lặp lặp lại N lần với Callback',
      difficulty: 'basic',
      learningObjectiveIds: ['LO13.3.1'],
      description: 'Viết hàm repeatAction(times, callback) chạy vòng lặp từ 1 đến times và gọi callback(i). Chạy thử với times = 3 in "Bước [i]".',
      starterCode: `function repeatAction(times, callback) {
  for (let i = 1; i <= times; i++) {
    callback(i);
  }
}

repeatAction(3, (step) => {
  console.log("Bước", step);
});`,
      solutionCode: `function repeatAction(times, callback) {
  for (let i = 1; i <= times; i++) {
    callback(i);
  }
}
repeatAction(3, (step) => {
  console.log("Bước", step);
});`,
      testCases: [
        { id: 'tc-1', description: 'Bước 1', expectedOutput: 'Bước 1' },
        { id: 'tc-2', description: 'Bước 2', expectedOutput: 'Bước 2' },
        { id: 'tc-3', description: 'Bước 3', expectedOutput: 'Bước 3' }
      ],
      hints: ['for (let i = 1; i <= times; i++) callback(i);'],
      explanation: 'Callback trao quyền quyết định hành vi cho nơi gọi hàm.'
    },
    intermediate: {
      id: 'ex-13-3-2',
      lessonId: 'les-13-3',
      title: 'Bài tập Trung bình: Tự viết hàm customFilter mô phỏng filter()',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO13.3.2'],
      description: 'Xây dựng hàm customFilter(arr, predicate) trả về mảng mới chỉ chứa các phần tử mà predicate(item) trả về true. Lọc các số >= 10 từ [5, 12, 8, 15, 3] và in kết quả.',
      starterCode: `function customFilter(arr, predicate) {
  const matched = [];
  for (const item of arr) {
    if (predicate(item)) {
      matched.push(item);
    }
  }
  return matched;
}

const filtered = customFilter([5, 12, 8, 15, 3], x => x >= 10);
console.log("Số lớn hơn hoặc bằng 10:", filtered);`,
      solutionCode: `function customFilter(arr, predicate) {
  const matched = [];
  for (const item of arr) {
    if (predicate(item)) {
      matched.push(item);
    }
  }
  return matched;
}
const filtered = customFilter([5, 12, 8, 15, 3], x => x >= 10);
console.log("Số lớn hơn hoặc bằng 10:", filtered);`,
      testCases: [
        { id: 'tc-1', description: 'Lọc 12 và 15', expectedOutput: 'Số lớn hơn hoặc bằng 10: [ 12, 15 ]' }
      ],
      hints: ['Kiểm tra if (predicate(item)) then push'],
      explanation: 'Đây chính là cách Array.prototype.filter được cài đặt trong lõi JavaScript engine.'
    },
    challenge: {
      id: 'ex-13-3-3',
      lessonId: 'les-13-3',
      title: 'Bài tập Thử thách: Xây dựng hàm bọc đo thời gian thực thi (Performance Wrapper)',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO13.3.2'],
      description: 'Viết HOF withTimer(fn) nhận vào hàm fn, trả về hàm mới khi gọi sẽ in "Bắt đầu...", thực thi fn(), và in "Kết thúc!". Chạy thử với hàm in "Đang tính toán".',
      starterCode: `function withTimer(fn) {
  return function() {
    console.log("Bắt đầu...");
    fn();
    console.log("Kết thúc!");
  };
}

const perform = withTimer(() => {
  console.log("Đang tính toán");
});

perform();`,
      solutionCode: `function withTimer(fn) {
  return function() {
    console.log("Bắt đầu...");
    fn();
    console.log("Kết thúc!");
  };
}
const perform = withTimer(() => {
  console.log("Đang tính toán");
});
perform();`,
      testCases: [
        { id: 'tc-1', description: 'In đủ 3 bước', expectedOutput: 'Bắt đầu...\nĐang tính toán\nKết thúc!' }
      ],
      hints: ['return function() { ... fn(); ... }'],
      explanation: 'Mô hình Decorator / Middleware pattern bọc ngoài để bổ sung tính năng logging, benchmark.'
    }
  },
  quiz: {
    id: 'quiz-13-3',
    lessonId: 'les-13-3',
    title: 'Trắc nghiệm Higher-Order Functions',
    passingScore: 70,
    questions: []
  },
  summary: [
    'Hàm là công dân hạng nhất (First-Class), có thể truyền như một biến số.',
    'Higher-Order Function nhận hàm làm tham số hoặc trả về một hàm mới.'
  ],
  suggestedBookmarks: ['Higher-Order Functions', 'Tự viết filter() với Callback']
};

export const LESSON_13_4: Lesson = {
  id: 'les-13-4',
  moduleId: 'mod-13',
  track: 'javascript',
  language: 'javascript',
  title: '13.4 Toán tử Spread (...) và Rest Parameters',
  order: 4,
  durationMinutes: 45,
  difficulty: 'Trung bình',
  prerequisites: ['Đã học Array và Object căn bản'],
  learningObjectives: [
    {
      id: 'LO13.4.1',
      code: 'LO13.4.1',
      title: 'Sử dụng toán tử Spread (...) để sao chép và gộp Mảng/Object',
      description: 'Shallow copy và bất biến (Immutability) trong quản lý trạng thái.',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    },
    {
      id: 'LO13.4.2',
      code: 'LO13.4.2',
      title: 'Thu gom tham số linh hoạt với Rest Parameters (...args)',
      description: 'Xây dựng hàm nhận số lượng tham số tùy biến không giới hạn.',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    }
  ],
  sections: [
    {
      id: 'sec-13-4-1',
      lessonId: 'les-13-4',
      order: 1,
      conceptName: 'Toán tử Spread (...) giải nén phần tử',
      title: '1. Spread Operator: Trải phẳng mảng và gộp đối tượng',
      explanation: 'Toán tử `...` khi đặt trước một Mảng hoặc Object đóng vai trò giải nén (Spread) tất cả các phần tử ra thành các giá trị riêng biệt. Ứng dụng phổ biến nhất là sao chép nông (Shallow Copy) và gộp dữ liệu mà không làm thay đổi dữ liệu gốc.',
      syntax: 'const mangGop = [...arr1, ...arr2];\nconst objMoi = { ...user, age: 21 };',
      codeExample: `// 1. Sao chép và gộp mảng
const frontend = ["HTML", "CSS", "JS"];
const backend = ["NodeJS", "Express"];
const fullstack = [...frontend, ...backend, "Database"];
console.log("Kỹ năng Fullstack:", fullstack);

// 2. Cập nhật thuộc tính Object bất biến (Immutable update)
const user = { name: "An", role: "user" };
const updatedUser = { ...user, role: "admin", isVerified: true };
console.log("User đã nâng cấp role:", updatedUser);`,
      lineByLineExplanation: [
        { line: 4, text: 'Spread gom các phần tử frontend và backend vào mảng mới.' },
        { line: 9, text: 'Ghi đè thuộc tính role="admin" trên nền tảng thuộc tính cũ của user.' }
      ],
      commonMistakes: [
        'Quên rằng Spread chỉ là Shallow Copy (nếu mảng/object có lồng nhau bên trong thì phần tử con vẫn dùng chung tham chiếu).'
      ],
      whenToUse: 'Dùng khi cập nhật state trong React, Redux hoặc truyền danh sách số vào Math.max(...numbers).',
      whenNotToUse: 'Không dùng cho việc clone đối tượng lồng sâu nhiều cấp (hãy dùng structuredClone).',
      realWorldUseCase: 'Cập nhật giỏ hàng: `setCart(prev => [...prev, newItem])` trong React.'
    },
    {
      id: 'sec-13-4-2',
      lessonId: 'les-13-4',
      order: 2,
      conceptName: 'Tham số còn lại Rest Parameters',
      title: '2. Rest Parameters: Gom tham số vô hạn thành Mảng',
      explanation: 'Cũng dùng ký hiệu `...`, nhưng khi xuất hiện ở danh sách tham số của hàm, nó đóng vai trò là `Rest Parameters` (thu gom các đối số còn lại thành một Mảng thực thụ). Rest parameter bắt buộc phải nằm ở vị trí CUỐI CÙNG trong danh sách tham số.',
      syntax: 'function sumAll(...numbers) {\n  return numbers.reduce((a, b) => a + b, 0);\n}',
      codeExample: `// Hàm tính tổng vô hạn số lượng đối số
function calculateTotal(...prices) {
  return prices.reduce((acc, p) => acc + p, 0);
}

console.log("Tổng 2 món:", calculateTotal(100, 200));
console.log("Tổng 4 món:", calculateTotal(50, 150, 300, 200));`,
      lineByLineExplanation: [
        { line: 2, text: '...prices tự động thu thập tất cả các tham số truyền vào thành một mảng prices.' }
      ],
      commonMistakes: [
        'Đặt rest parameter ở đầu hoặc giữa danh sách tham số (ví dụ: function(..args, last) -> SyntaxError: Rest parameter must be last).'
      ],
      whenToUse: 'Dùng khi viết hàm tiện ích tính toán, ghi log hoặc các hàm wrapper.',
      whenNotToUse: 'Không dùng đối tượng cũ arguments (arguments không phải là Array và không hoạt động trong Arrow function).',
      realWorldUseCase: 'Hàm định dạng console.log hoặc hàm gộp chuỗi đa năng.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-13-4',
    title: 'Thực hành tìm số lớn nhất với Math.max và Spread',
    description: 'Dùng Spread operator truyền mảng vào hàm Math.max.',
    starterCode: `const scores = [85, 92, 78, 96, 88];
const highest = Math.max(...scores);

console.log("Điểm cao nhất:", highest);`,
    expectedConsoleOutput: 'Điểm cao nhất: 96',
    hint: 'Math.max(...scores) giải nén mảng thành các đối số rời rạc.'
  },
  exercises: {
    basic: {
      id: 'ex-13-4-1',
      lessonId: 'les-13-4',
      title: 'Bài tập Cơ bản: Gộp 2 mảng số nguyên bằng Spread',
      difficulty: 'basic',
      learningObjectiveIds: ['LO13.4.1'],
      description: 'Cho a = [1, 2] và b = [3, 4]. Dùng toán tử Spread tạo mảng merged = [1, 2, 3, 4]. In mảng kết quả.',
      starterCode: `const a = [1, 2];
const b = [3, 4];

const merged = [...a, ...b];
console.log("Mảng gộp:", merged);`,
      solutionCode: `const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];
console.log("Mảng gộp:", merged);`,
      testCases: [
        { id: 'tc-1', description: 'Gộp mảng', expectedOutput: 'Mảng gộp: [ 1, 2, 3, 4 ]' }
      ],
      hints: ['[...a, ...b]'],
      explanation: 'Spread mở rộng từng phần tử của a và b vào trong mảng mới.'
    },
    intermediate: {
      id: 'ex-13-4-2',
      lessonId: 'les-13-4',
      title: 'Bài tập Trung bình: Viết hàm tính trung bình cộng với Rest Parameters',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO13.4.2'],
      description: 'Viết hàm calcAverage(...nums) nhận số lượng tham số tùy ý và trả về giá trị trung bình cộng. Chạy thử với (10, 20, 30) và in "Điểm TB: [avg]".',
      starterCode: `function calcAverage(...nums) {
  const sum = nums.reduce((a, b) => a + b, 0);
  return sum / nums.length;
}

console.log("Điểm TB:", calcAverage(10, 20, 30));`,
      solutionCode: `function calcAverage(...nums) {
  const sum = nums.reduce((a, b) => a + b, 0);
  return sum / nums.length;
}
console.log("Điểm TB:", calcAverage(10, 20, 30));`,
      testCases: [
        { id: 'tc-1', description: 'TB của 10, 20, 30 là 20', expectedOutput: 'Điểm TB: 20' }
      ],
      hints: ['nums.reduce((a, b) => a + b, 0) / nums.length'],
      explanation: '...nums chuyển đổi tất cả đối số thành mảng để tính tổng và độ dài.'
    },
    challenge: {
      id: 'ex-13-4-3',
      lessonId: 'les-13-4',
      title: 'Bài tập Thử thách: Tách trường dữ liệu nhạy cảm bằng Object Rest',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO13.4.1', 'LO13.4.2'],
      description: 'Cho user = { id: 1, name: "Thắng", password: "123", email: "thang@poly.edu.vn" }. Dùng destructuring kết hợp Rest ...safeData để tách password ra riêng và lấy toàn bộ các trường còn lại. In ra safeData.',
      starterCode: `const user = { id: 1, name: "Thắng", password: "123", email: "thang@poly.edu.vn" };

const { password, ...safeData } = user;
console.log("Dữ liệu an toàn:", safeData);`,
      solutionCode: `const user = { id: 1, name: "Thắng", password: "123", email: "thang@poly.edu.vn" };
const { password, ...safeData } = user;
console.log("Dữ liệu an toàn:", safeData);`,
      testCases: [
        { id: 'tc-1', description: 'Đã loại bỏ password', expectedOutput: 'Dữ liệu an toàn: { id: 1, name: \'Thắng\', email: \'thang@poly.edu.vn\' }' }
      ],
      hints: ['const { password, ...safeData } = user'],
      explanation: 'Kỹ thuật Object Rest destructuring loại bỏ trường nhạy cảm cực kỳ tao nhã.'
    }
  },
  quiz: {
    id: 'quiz-13-4',
    lessonId: 'les-13-4',
    title: 'Trắc nghiệm Spread & Rest',
    passingScore: 70,
    questions: []
  },
  summary: [
    'Spread (...) trải phẳng mảng/đối tượng ra các phần tử rời rạc.',
    'Rest Parameters (...args) gom các tham số lại thành một mảng và phải đứng ở cuối.'
  ],
  suggestedBookmarks: ['Spread sao chép bất biến', 'Rest Parameters thu gom tham số']
};

export const LESSON_13_5: Lesson = {
  id: 'les-13-5',
  moduleId: 'mod-13',
  track: 'javascript',
  language: 'javascript',
  title: '13.5 ES Modules: Tách file với import và export',
  order: 5,
  durationMinutes: 45,
  difficulty: 'Trung bình',
  prerequisites: ['Đã học các cú pháp JavaScript hiện đại'],
  learningObjectives: [
    {
      id: 'LO13.5.1',
      code: 'LO13.5.1',
      title: 'Phân biệt Named Export và Default Export',
      description: 'Quy tắc xuất và nhập hàm, hằng số, lớp giữa các file module.',
      bloomLevel: 'Understand',
      masteryPercentage: 92
    },
    {
      id: 'LO13.5.2',
      code: 'LO13.5.2',
      title: 'Tổ chức mã nguồn module hóa chuẩn ES6+',
      description: 'Khai báo <script type="module"> trong HTML và đổi tên alias với as.',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    }
  ],
  sections: [
    {
      id: 'sec-13-5-1',
      lessonId: 'les-13-5',
      order: 1,
      conceptName: 'Named Export vs Default Export',
      title: '1. Xuất và Nhập Module: Named vs Default',
      explanation: 'Trong ES6 Modules: (1) `Named Export` cho phép xuất nhiều thành phần trong 1 file (phải dùng đúng tên và cặp ngoặc `{}` khi import); (2) `Default Export` chỉ có tối đa MỘT thành phần duy nhất trên mỗi file (khi import không cần dấu ngoặc `{}` và có thể tự do đặt tên).',
      syntax: '// mathUtils.js\nexport const PI = 3.14;\nexport function add(a, b) { return a + b; }\nexport default function calc() {}\n\n// main.js\nimport calc, { PI, add as sum } from "./mathUtils.js";',
      codeExample: `// Giả lập cấu trúc xuất nhập module
const mathModule = {
  PI: 3.14159,
  add: (a: number, b: number) => a + b,
  defaultCalculator: (val: number) => val * 2
};

console.log("Hằng số PI:", mathModule.PI);
console.log("Tổng 10 + 20:", mathModule.add(10, 20));
console.log("Default handler:", mathModule.defaultCalculator(5));`,
      lineByLineExplanation: [
        { line: 2, text: 'Named export hằng số PI.' },
        { line: 3, text: 'Named export hàm add.' },
        { line: 4, text: 'Default export bộ tính toán mặc định.' }
      ],
      commonMistakes: [
        'Dùng ngoặc nhọn `{}` khi import default export hoặc quên ngoặc nhọn khi import named export.'
      ],
      whenToUse: 'Dùng Named export khi file chứa thư viện nhiều hàm tiện ích; dùng Default export khi file chỉ biểu diễn một Component hoặc Class duy nhất.',
      whenNotToUse: 'Tránh dùng CommonJS cũ (`require`/`module.exports`) trong các dự án Frontend hiện đại.',
      realWorldUseCase: 'Tách riêng file `apiService.js`, `helpers.js` và `authContext.js` trong dự án React/Vite.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-13-5',
    title: 'Thực hành đặt tên bí danh (Alias) khi import',
    description: 'Sử dụng từ khóa as để đổi tên hàm tránh xung đột.',
    starterCode: `const internalLogger = (msg) => console.log("[LOG]:", msg);
const appLogger = internalLogger; // Tương đương: import { internalLogger as appLogger }

appLogger("Khởi chạy ứng dụng thành công!");`,
    expectedConsoleOutput: '[LOG]: Khởi chạy ứng dụng thành công!',
    hint: 'Từ khóa as giúp đổi tên hàm khi import.'
  },
  exercises: {
    basic: {
      id: 'ex-13-5-1',
      lessonId: 'les-13-5',
      title: 'Bài tập Cơ bản: Quy tắc Default Export trong một file',
      difficulty: 'basic',
      learningObjectiveIds: ['LO13.5.1'],
      description: 'Trong chuẩn ES Modules, một file JavaScript có thể có tối đa bao nhiêu default export? In ra số lượng (1, 2 hay vô số).',
      starterCode: `const maxDefaultExports = 1;
console.log("Số lượng default export tối đa:", maxDefaultExports);`,
      solutionCode: `const maxDefaultExports = 1;
console.log("Số lượng default export tối đa:", maxDefaultExports);`,
      testCases: [
        { id: 'tc-1', description: 'Tối đa 1 default export', expectedOutput: 'Số lượng default export tối đa: 1' }
      ],
      hints: ['Mỗi file chỉ có tối đa 1 export default'],
      explanation: 'Mỗi module file chỉ được phép khai báo duy nhất một giá trị mặc định (default export).'
    },
    intermediate: {
      id: 'ex-13-5-2',
      lessonId: 'les-13-5',
      title: 'Bài tập Trung bình: Thuộc tính type trong thẻ script để hỗ trợ ES Module',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO13.5.2'],
      description: 'Để trình duyệt hiểu và cho phép sử dụng cú pháp import/export trong file JavaScript nhúng vào HTML, thẻ <script> cần có thuộc tính type là gì: "text/javascript" hay "module"? In ra giá trị đúng.',
      starterCode: `const correctScriptType = "module";
console.log("Giá trị thuộc tính type:", correctScriptType);`,
      solutionCode: `const correctScriptType = "module";
console.log("Giá trị thuộc tính type:", correctScriptType);`,
      testCases: [
        { id: 'tc-1', description: 'type="module"', expectedOutput: 'Giá trị thuộc tính type: module' }
      ],
      hints: ['<script type="module" src="main.js"></script>'],
      explanation: 'Khai báo type="module" kích hoạt chế độ Strict Mode tự động và cho phép sử dụng import/export trực tiếp trên trình duyệt.'
    },
    challenge: {
      id: 'ex-13-5-3',
      lessonId: 'les-13-5',
      title: 'Bài tập Thử thách: Gộp và tái xuất khẩu (Re-exporting Module)',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO13.5.2'],
      description: 'Kỹ thuật Barrel Pattern gom nhiều module vào file index.js bằng cú pháp export * from. Mô phỏng gộp 2 đối tượng modA = { a: 1 } và modB = { b: 2 } thành combinedPackage. In combinedPackage.',
      starterCode: `const modA = { a: 1 };
const modB = { b: 2 };

const combinedPackage = { ...modA, ...modB };
console.log("Gói gộp Barrel:", combinedPackage);`,
      solutionCode: `const modA = { a: 1 };
const modB = { b: 2 };
const combinedPackage = { ...modA, ...modB };
console.log("Gói gộp Barrel:", combinedPackage);`,
      testCases: [
        { id: 'tc-1', description: 'Gộp a và b', expectedOutput: 'Gói gộp Barrel: { a: 1, b: 2 }' }
      ],
      hints: ['Barrel pattern gom tất cả exports vào file index.js'],
      explanation: 'Barrel Pattern là chuẩn thiết kế kiến trúc thư mục giúp import gọn gàng từ thư mục cha.'
    }
  },
  quiz: {
    id: 'quiz-13-5',
    lessonId: 'les-13-5',
    title: 'Trắc nghiệm ES Modules',
    passingScore: 70,
    questions: []
  },
  summary: [
    'Named export cho phép xuất nhiều thành phần (dùng ngoặc {} khi import).',
    'Default export cho phép tối đa 1 thành phần duy nhất mỗi file.',
    'Nhúng vào HTML cần khai báo <script type="module">.'
  ],
  suggestedBookmarks: ['Named vs Default Export', 'Barrel Pattern trong ES Modules']
};

export const JS_MODULE_13_LESSONS: Lesson[] = [
  LESSON_13_1,
  LESSON_13_2,
  LESSON_13_3,
  LESSON_13_4,
  LESSON_13_5
];
