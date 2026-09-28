import { Lesson } from '../../types';

// ==========================================
// MODULE 13: JAVASCRIPT NÂNG CAO (ADVANCED JAVASCRIPT)
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
  prerequisites: [
    'Nắm vững biến let, const, var ở Module 2',
    'Hiểu phạm vi hàm và phạm vi khối ở Module 6'
  ],
  learningObjectives: [
    {
      id: 'LO13.1.1',
      code: 'LO13.1.1',
      title: 'Bản chất Lexical Environment & Phạm vi tĩnh',
      description: 'Hiểu rõ phạm vi hàm được xác định tại thời điểm viết mã nguồn (Lexical/Static scope) chứ không phụ thuộc vị trí gọi hàm.',
      bloomLevel: 'Understand',
      masteryPercentage: 88
    },
    {
      id: 'LO13.1.2',
      code: 'LO13.1.2',
      title: 'Cơ chế Hoisting của var, function và TDZ của let/const',
      description: 'Phân tích giai đoạn Creation Phase của Execution Context, giải thích Temporal Dead Zone (TDZ).',
      bloomLevel: 'Analyze',
      masteryPercentage: 85
    }
  ],
  sections: [
    {
      id: 'sec-13-1-1',
      lessonId: 'les-13-1',
      order: 1,
      conceptName: 'Lexical Scope (Phạm vi từ vựng / Phạm vi tĩnh)',
      title: '1. Bản chất Lexical Scope trong JavaScript',
      explanation: 'Lexical Scope nghĩa là phạm vi của một biến được quyết định bởi vị trí khai báo hàm trong văn bản mã nguồn (Static Structure). Một hàm con luôn ghi nhớ và có thể truy cập các biến ở hàm cha bao bọc nó, bất kể hàm con được truyền đi đâu và gọi thực thi ở ngữ cảnh nào.',
      syntax: 'function outer() {\n  const x = 10;\n  function inner() { console.log(x); }\n  return inner;\n}',
      codeExample: `const name = "Toàn cục";

function createGreeting() {
  const name = "Cục bộ trong createGreeting";

  function printGreeting() {
    // Luôn tìm 'name' theo vị trí định nghĩa, không theo nơi gọi
    console.log("Xin chào:", name);
  }

  return printGreeting;
}

const greet = createGreeting();
greet(); // In ra: "Xin chào: Cục bộ trong createGreeting"`,
      lineByLineExplanation: [
        { line: 1, text: 'Biến name toàn cục được khai báo ở ngoài cùng.' },
        { line: 4, text: 'createGreeting tạo một phạm vi lexical chứa biến name cục bộ.' },
        { line: 6, text: 'printGreeting nằm bên trong createGreeting nên liên kết lexical với phạm vi này.' },
        { line: 14, text: 'Dù gọi greet() ở phạm vi toàn cục, hàm vẫn truy cập biến name cục bộ theo Lexical Scope.' }
      ],
      commonMistakes: [
        'Nhầm tưởng hàm sẽ tìm biến ở nơi nó được gọi (Dynamic Scope thay vì Static Lexical Scope).'
      ],
      whenToUse: 'Dùng để đóng gói dữ liệu riêng tư, tạo module và kiến trúc hàm bao đóng (Closure).',
      whenNotToUse: 'Tránh đặt tên biến trùng lặp nhiều tầng (shadowing) gây khó truy vết logic.',
      realWorldUseCase: 'Bảo vệ token xác thực hoặc cấu hình API trong các service module độc lập.'
    },
    {
      id: 'sec-13-1-2',
      lessonId: 'les-13-1',
      order: 2,
      conceptName: 'Hoisting & Temporal Dead Zone (TDZ)',
      title: '2. Giải phẫu Hoisting và Vùng chết tạm thời (TDZ)',
      explanation: 'Trong giai đoạn biên dịch (Creation Phase), JS Engine quét qua mã nguồn và đưa phần khai báo (declaration) lên đầu phạm vi. Với var, biến được khởi tạo giá trị ban đầu là undefined. Với let/const, biến cũng được hoist nhưng KHÔNG được khởi tạo, rơi vào Temporal Dead Zone (TDZ). Truy cập biến trong TDZ sẽ gây lỗi ReferenceError.',
      syntax: '// var: được hoist + khởi tạo undefined\n// let/const: được hoist nhưng nằm trong TDZ cho đến khi gán',
      codeExample: `// 1. Function Declaration được hoist toàn bộ
sayHello(); // Hoạt động tốt!
function sayHello() {
  console.log("Hàm được hoist hoàn toàn!");
}

// 2. var được hoist với giá trị undefined
console.log("Giá trị a trước khi gán:", a); // undefined
var a = 100;

// 3. let/const nằm trong TDZ
try {
  console.log(b); // ReferenceError: Cannot access 'b' before initialization
  let b = 200;
} catch (err) {
  console.log("Bắt lỗi TDZ:", err.message);
}`,
      lineByLineExplanation: [
        { line: 2, text: 'Function Declaration được đưa nguyên vẹn lên đầu, có thể gọi trước khi khai báo.' },
        { line: 8, text: 'var a được khởi tạo undefined trong Creation Phase nên không bị lỗi ReferenceError.' },
        { line: 13, text: 'let b chưa thoát khỏi TDZ, truy cập sẽ bị lỗi ReferenceError ngay lập tức.' }
      ],
      commonMistakes: [
        'Nghĩ rằng let và const không bị hoist (thực chất chúng có hoist nhưng bị chặn bởi TDZ).'
      ],
      whenToUse: 'Luôn khai báo biến bằng const/let ở đầu khối lệnh để mã sạch, tránh dựa dẫm vào cơ chế hoisting.',
      whenNotToUse: 'Tuyệt đối không dùng var trong các dự án JavaScript hiện đại.',
      realWorldUseCase: 'Giúp tránh lỗi gán đè logic ngoài ý muốn trong các ứng dụng quy mô lớn.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-13-1',
    title: 'Thực hành: Phân tích thứ tự thực thi Hoisting & Scope Chain',
    description: 'Chạy thử đoạn mã bên dưới để xem sự khác biệt giữa biến var được hoist thành undefined và biến let trong hàm con.',
    starterCode: `function demoScopeHoisting() {
  console.log("Giá trị của x trước gán:", typeof x, x);
  var x = "Hoisted var";
  
  const y = "Lexical const";
  function getVariables() {
    return x + " & " + y;
  }
  
  console.log("Kết quả hàm con:", getVariables());
}

demoScopeHoisting();`,
    expectedConsoleOutput: 'Giá trị của x trước gán: undefined undefined\nKết quả hàm con: Hoisted var & Lexical const',
    hint: 'var x được gán undefined trước khi chạy dòng lệnh đầu tiên của hàm.',
    language: 'javascript'
  },
  exercises: {
    basic: {
      id: 'ex-13-1-1',
      lessonId: 'les-13-1',
      title: 'Bài tập Cơ bản: Hoisting Function Declaration vs Arrow Function',
      difficulty: 'basic',
      learningObjectiveIds: ['LO13.1.2'],
      description: 'Định nghĩa hàm chuẩn calculateTotal(price, tax) bằng Function Declaration để nó có thể được gọi trước khi định nghĩa. Tính và in ra: `Tổng thanh toán: [price + tax]`.',
      starterCode: `// Hãy gọi hàm trước khi định nghĩa:
console.log("Tổng thanh toán:", calculateTotal(100, 10));

// Định nghĩa hàm calculateTotal bằng cú pháp function declaration:
`,
      solutionCode: `console.log("Tổng thanh toán:", calculateTotal(100, 10));

function calculateTotal(price, tax) {
  return price + tax;
}`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra gọi hàm được hoist: calculateTotal(100, 10) = 110',
          expectedOutput: 'Tổng thanh toán: 110'
        }
      ],
      hints: ['Sử dụng từ khóa function calculateTotal(price, tax)'],
      explanation: 'Function declaration được hoisting toàn bộ thân hàm lên đầu scope.'
    },
    intermediate: {
      id: 'ex-13-1-2',
      lessonId: 'les-13-1',
      title: 'Bài tập Trung bình: Kiểm tra bắt lỗi Temporal Dead Zone',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO13.1.2'],
      description: 'Dùng khối try...catch để bắt lỗi ReferenceError khi truy cập biến `apiKey` (khai báo bằng `const`) trước dòng khởi tạo. Trong catch, in ra: `Lỗi TDZ: Đã chặn truy cập biến trước khởi tạo`.',
      starterCode: `function checkTDZ() {
  // Viết try...catch để bắt lỗi truy cập apiKey trước khi khai báo
}

checkTDZ();`,
      solutionCode: `function checkTDZ() {
  try {
    console.log(apiKey);
    const apiKey = "SECRET_123";
  } catch (err) {
    console.log("Lỗi TDZ: Đã chặn truy cập biến trước khởi tạo");
  }
}

checkTDZ();`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra bắt đúng lỗi TDZ',
          expectedOutput: 'Lỗi TDZ: Đã chặn truy cập biến trước khởi tạo'
        }
      ],
      hints: ['Đặt câu lệnh console.log(apiKey) trước const apiKey'],
      explanation: 'Truy cập biến const trước khi khởi tạo kích hoạt ReferenceError từ TDZ.'
    },
    challenge: {
      id: 'ex-13-1-3',
      lessonId: 'les-13-1',
      title: 'Bài tập Thử thách: Scope Shadowing & Giá trị biến',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO13.1.1'],
      description: 'Cho biến toàn cục count = 1. Tạo hàm `runTest()` có biến cục bộ `count = 10`, bên trong lại có khối if (true) có `let count = 100`. In ra lần lượt giá trị count ở từng tầng: `Khối if: [count]`, `Hàm: [count]`, `Toàn cục: [count]`.',
      starterCode: `let count = 1;

function runTest() {
  // Viết logic shadowing 3 tầng:
}

runTest();
console.log("Toàn cục:", count);`,
      solutionCode: `let count = 1;

function runTest() {
  let count = 10;
  if (true) {
    let count = 100;
    console.log("Khối if:", count);
  }
  console.log("Hàm:", count);
}

runTest();
console.log("Toàn cục:", count);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra giá trị count theo 3 tầng scope',
          expectedOutput: 'Khối if: 100\nHàm: 10\nToàn cục: 1'
        }
      ],
      hints: ['Dùng let trong từng block để biến con che bóng (shadow) biến cha.'],
      explanation: 'Scope che bóng biến mà không làm thay đổi giá trị của biến ở phạm vi cha ngoài cùng.'
    }
  },
  quiz: {
    id: 'quiz-13-1',
    lessonId: 'les-13-1',
    title: 'Trắc nghiệm: Lexical Scope & Hoisting',
    passingScore: 70,
    questions: [
      {
        id: 'q-13-1-1',
        lessonId: 'les-13-1',
        learningObjectiveId: 'LO13.1.2',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'Hiện tượng TDZ (Temporal Dead Zone) xảy ra với loại biến nào sau đây?',
        options: [
          { id: 'a', text: 'Chỉ với biến var' },
          { id: 'b', text: 'Với biến let và const trước khi được khởi tạo giá trị' },
          { id: 'c', text: 'Với function declaration' },
          { id: 'd', text: 'Chỉ với hằng số const' }
        ],
        correctAnswer: 'b',
        explanation: 'let và const được hoist nhưng không khởi tạo, vùng từ đầu scope đến dòng gán gọi là TDZ.',
        relatedLessonId: 'les-13-1'
      }
    ]
  },
  summary: [
    'Lexical Scope xác định phạm vi tĩnh dựa trên cấu trúc vị trí viết hàm trong mã nguồn.',
    'Hoisting đưa khai báo lên đầu trong giai đoạn Creation Phase của Execution Context.',
    'let và const nằm trong Temporal Dead Zone (TDZ) ngăn chặn việc sử dụng biến rác trước khi khởi tạo.'
  ],
  suggestedBookmarks: [
    'Cơ chế Execution Context và Call Stack trong V8',
    'So sánh chi tiết Hoisting giữa Function Declaration và Function Expression'
  ]
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
  prerequisites: [
    'Đã học Bài 13.1 về Lexical Scope',
    'Hiểu hàm trả về hàm (First-Class Functions)'
  ],
  learningObjectives: [
    {
      id: 'LO13.2.1',
      code: 'LO13.2.1',
      title: 'Định nghĩa và cơ chế bộ nhớ của Closure',
      description: 'Giải thích tại sao hàm con vẫn giữ được tham chiếu đến biến của hàm cha ngay cả khi hàm cha đã kết thúc thực thi.',
      bloomLevel: 'Understand',
      masteryPercentage: 90
    },
    {
      id: 'LO13.2.2',
      code: 'LO13.2.2',
      title: 'Ứng dụng Closure tạo biến Private và State Manager',
      description: 'Vận dụng Closure để tạo hàm đóng gói dữ liệu, bộ đếm (counter), memoization và hàm cấu hình sẵn.',
      bloomLevel: 'Apply',
      masteryPercentage: 86
    }
  ],
  sections: [
    {
      id: 'sec-13-2-1',
      lessonId: 'les-13-2',
      order: 1,
      conceptName: 'Closure là gì?',
      title: '1. Khái niệm cốt lõi: Closure (Bao đóng)',
      explanation: 'Closure là sự kết hợp giữa một hàm và môi trường từ vựng (Lexical Environment) nơi hàm đó được khai báo. Nói một cách trực quan: Closure cho phép một hàm con truy cập biến của hàm cha bao bọc nó, ngay cả sau khi hàm cha đã chạy xong và trả về kết quả.',
      syntax: 'function createCounter() {\n  let count = 0;\n  return function() { count++; return count; };\n}',
      codeExample: `function createCounter(initialValue = 0) {
  let count = initialValue; // Biến private được bảo vệ bởi Closure

  return {
    increment: () => ++count,
    decrement: () => --count,
    getValue: () => count
  };
}

const counterA = createCounter(10);
console.log("Tăng counterA:", counterA.increment()); // 11
console.log("Tăng counterA:", counterA.increment()); // 12
console.log("Giá trị hiện tại:", counterA.getValue()); // 12

// counterB hoàn toàn độc lập với counterA
const counterB = createCounter(0);
console.log("Tăng counterB:", counterB.increment()); // 1`,
      lineByLineExplanation: [
        { line: 2, text: 'Biến count được bao bọc bên trong createCounter, mã ngoài không thể can thiệp trực tiếp.' },
        { line: 4, text: 'Các phương thức increment, decrement, getValue tạo closure đóng gói biến count.' },
        { line: 11, text: 'counterA và counterB sở hữu 2 vùng nhớ closure riêng biệt, không đụng chạm nhau.' }
      ],
      commonMistakes: [
        'Cố gắng truy cập trực tiếp counterA.count (sẽ trả về undefined vì biến count là private).'
      ],
      whenToUse: 'Dùng khi cần bảo vệ trạng thái nội bộ không cho mã ngoài can thiệp bừa bãi, tạo Factory Functions.',
      whenNotToUse: 'Không giữ các biến quá lớn không cần thiết trong closure vì có thể gây rò rỉ bộ nhớ (Memory Leak).',
      realWorldUseCase: 'Hàm useState trong React thực chất hoạt động dựa trên cơ chế Closure để lưu giữ state qua các lần render.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-13-2',
    title: 'Thực hành: Tạo bộ phát ID tăng dần (Auto-increment ID Generator)',
    description: 'Chạy thử đoạn mã tạo mã đơn hàng tự động dùng closure. Mỗi lần gọi `getNextOrderId()`, số thứ tự tự tăng lên 1.',
    starterCode: `function createIdGenerator(prefix) {
  let currentId = 1000;
  return function() {
    currentId++;
    return prefix + "-" + currentId;
  };
}

const getNextOrderId = createIdGenerator("ORD");
console.log(getNextOrderId());
console.log(getNextOrderId());
console.log(getNextOrderId());`,
    expectedConsoleOutput: 'ORD-1001\nORD-1002\nORD-1003',
    hint: 'Biến currentId duy trì giá trị tăng dần giữa các lần gọi hàm.',
    language: 'javascript'
  },
  exercises: {
    basic: {
      id: 'ex-13-2-1',
      lessonId: 'les-13-2',
      title: 'Bài tập Cơ bản: Tạo hàm nhân với hệ số cố định',
      difficulty: 'basic',
      learningObjectiveIds: ['LO13.2.1'],
      description: 'Viết hàm `createMultiplier(factor)` trả về một hàm con nhận vào số `num` và trả về tích `num * factor`. Sử dụng hàm này tạo `double` (nhân 2) và in ra kết quả của `double(15)`.',
      starterCode: `// Viết hàm createMultiplier ở đây:


// Tạo hàm double nhân 2 và in kết quả double(15):
`,
      solutionCode: `function createMultiplier(factor) {
  return function(num) {
    return num * factor;
  };
}

const double = createMultiplier(2);
console.log("Kết quả:", double(15));`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra double(15) = 30',
          expectedOutput: 'Kết quả: 30'
        }
      ],
      hints: ['return function(num) { return num * factor; }'],
      explanation: 'Hàm con ghi nhớ giá trị factor qua closure.'
    },
    intermediate: {
      id: 'ex-13-2-2',
      lessonId: 'les-13-2',
      title: 'Bài tập Trung bình: Tạo ví điện tử an toàn với Closure',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO13.2.2'],
      description: 'Tạo hàm `createWallet(initialBalance)`. Trả về một object gồm 2 phương thức: `deposit(amount)` nạp tiền và `getBalance()` xem số dư. Khởi tạo ví với 500, nạp thêm 250 và in ra: `Số dư ví: [balance] VNĐ`.',
      starterCode: `function createWallet(initialBalance) {
  // Cài đặt closure cho ví tiền:
}

const myWallet = createWallet(500);
myWallet.deposit(250);
console.log("Số dư ví:", myWallet.getBalance(), "VNĐ");`,
      solutionCode: `function createWallet(initialBalance) {
  let balance = initialBalance;
  return {
    deposit: (amount) => {
      balance += amount;
      return balance;
    },
    getBalance: () => balance
  };
}

const myWallet = createWallet(500);
myWallet.deposit(250);
console.log("Số dư ví:", myWallet.getBalance(), "VNĐ");`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra số dư sau nạp là 750 VNĐ',
          expectedOutput: 'Số dư ví: 750 VNĐ'
        }
      ],
      hints: ['Khai báo let balance = initialBalance bên trong hàm cha'],
      explanation: 'balance được bảo vệ an toàn khỏi can thiệp trực tiếp từ bên ngoài.'
    },
    challenge: {
      id: 'ex-13-2-3',
      lessonId: 'les-13-2',
      title: 'Bài tập Thử thách: Kỹ thuật Memoize (Ghi nhớ kết quả tính toán)',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO13.2.2'],
      description: 'Tạo hàm `memoizeSquare()` dùng một object `cache = {}` bên trong closure. Khi gọi `calc(n)`, nếu n đã có trong cache thì in ra `Lấy từ cache: [n^2]`, nếu chưa thì tính, lưu vào cache và in `Tính toán mới: [n^2]`. Gọi liên tiếp calc(5) rồi calc(5).',
      starterCode: `function createMemoizeSquare() {
  // Cài đặt bộ nhớ cache bằng closure:
}

const calc = createMemoizeSquare();
calc(5);
calc(5);`,
      solutionCode: `function createMemoizeSquare() {
  const cache = {};
  return function(n) {
    if (cache[n] !== undefined) {
      console.log("Lấy từ cache:", cache[n]);
      return cache[n];
    }
    const result = n * n;
    cache[n] = result;
    console.log("Tính toán mới:", result);
    return result;
  };
}

const calc = createMemoizeSquare();
calc(5);
calc(5);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Lần đầu tính mới, lần hai lấy từ cache',
          expectedOutput: 'Tính toán mới: 25\nLấy từ cache: 25'
        }
      ],
      hints: ['Kiểm tra if (cache[n] !== undefined)'],
      explanation: 'Memoization là ứng dụng kinh điển của Closure giúp tăng tốc thuật toán nặng.'
    }
  },
  quiz: {
    id: 'quiz-13-2',
    lessonId: 'les-13-2',
    title: 'Trắc nghiệm: Closure trong JavaScript',
    passingScore: 70,
    questions: [
      {
        id: 'q-13-2-1',
        lessonId: 'les-13-2',
        learningObjectiveId: 'LO13.2.1',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'Closure được hình thành khi nào?',
        options: [
          { id: 'a', text: 'Chỉ khi dùng lệnh eval()' },
          { id: 'b', text: 'Khi một hàm con được khai báo và duy trì quyền truy cập vào biến của hàm cha' },
          { id: 'c', text: 'Khi hàm sử dụng từ khóa this' },
          { id: 'd', text: 'Khi biến được khai báo bằng từ khóa var' }
        ],
        correctAnswer: 'b',
        explanation: 'Closure sinh ra tự nhiên khi hàm con bao bọc biến của hàm cha theo nguyên tắc Lexical Scope.',
        relatedLessonId: 'les-13-2'
      }
    ]
  },
  summary: [
    'Closure là khả năng một hàm con ghi nhớ và truy cập biến trong môi trường cha của nó.',
    'Ứng dụng chủ đạo: Tạo biến Private, Factory Functions, Currying và Memoization.',
    'Cần quản lý tốt tham chiếu để tránh giữ tài nguyên không dùng đến gây tốn bộ nhớ.'
  ],
  suggestedBookmarks: [
    'Nguyên lý hoạt động của Hook useState trong React dựa trên Closure',
    'Phân biệt Currying và Partial Application bằng Closure'
  ]
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
  prerequisites: [
    'Biết cách truyền tham số cho hàm',
    'Đã học các hàm xử lý mảng map/filter ở Module 7'
  ],
  learningObjectives: [
    {
      id: 'LO13.3.1',
      code: 'LO13.3.1',
      title: 'Khái niệm First-Class Citizen & Higher-Order Functions',
      description: 'Hiểu hàm trong JS là đối tượng hạng nhất: có thể gán vào biến, truyền làm tham số hoặc trả về từ hàm khác.',
      bloomLevel: 'Understand',
      masteryPercentage: 90
    },
    {
      id: 'LO13.3.2',
      code: 'LO13.3.2',
      title: 'Tự cài đặt Higher-Order Functions (myMap, myFilter)',
      description: 'Tự viết lại các hàm nhận callback để hiểu sâu cách thức hoạt động của các tiện ích xử lý dữ liệu.',
      bloomLevel: 'Apply',
      masteryPercentage: 85
    }
  ],
  sections: [
    {
      id: 'sec-13-3-1',
      lessonId: 'les-13-3',
      order: 1,
      conceptName: 'Hàm bậc cao (Higher-Order Function) là gì?',
      title: '1. Bản chất Higher-Order Function & Callback',
      explanation: 'Trong JavaScript, hàm là First-Class Citizen (công dân hạng nhất). Một hàm nhận một hàm khác làm đối số HOẶC trả về một hàm được gọi là Higher-Order Function (HOF). Hàm được truyền vào làm đối số gọi là Callback Function.',
      syntax: 'function hif(callback) {\n  // thực thi logic và gọi callback()\n}',
      codeExample: `// 1. Hàm nhận Callback
function processNumber(num, operation) {
  return operation(num);
}

const square = n => n * n;
const cube = n => n * n * n;

console.log("Bình phương của 4:", processNumber(4, square)); // 16
console.log("Lập phương của 3:", processNumber(3, cube)); // 27`,
      lineByLineExplanation: [
        { line: 2, text: 'processNumber là Higher-Order Function vì nhận hàm operation làm đối số.' },
        { line: 6, text: 'square và cube là các hàm callback thuần túy.' },
        { line: 9, text: 'Truyền tên hàm square vào làm tham số, không đặt ngoặc () khi truyền.' }
      ],
      commonMistakes: [
        'Truyền operation() có dấu ngoặc đơn khiến hàm chạy ngay lập tức thay vì truyền tham chiếu.'
      ],
      whenToUse: 'Dùng để trừu tượng hóa hành vi tính toán, xử lý sự kiện DOM và xử lý danh sách mảng.',
      whenNotToUse: 'Tránh lồng ghép callback quá nhiều tầng (Callback Hell) khi xử lý bất đồng bộ.',
      realWorldUseCase: 'Các hàm map(), filter(), reduce() và addEventListener() đều là Higher-Order Functions.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-13-3',
    title: 'Thực hành: Tự viết hàm myFilter() nhận Callback',
    description: 'Chạy thử hàm myFilter lọc các số chẵn trong mảng dựa trên hàm kiểm tra isEven được truyền vào.',
    starterCode: `function myFilter(arr, predicateCallback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (predicateCallback(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5, 6];
const evens = myFilter(numbers, n => n % 2 === 0);
console.log("Các số chẵn:", evens);`,
    expectedConsoleOutput: 'Các số chẵn: [ 2, 4, 6 ]',
    hint: 'predicateCallback trả về true/false để quyết định push phần tử vào mảng kết quả.',
    language: 'javascript'
  },
  exercises: {
    basic: {
      id: 'ex-13-3-1',
      lessonId: 'les-13-3',
      title: 'Bài tập Cơ bản: Thực thi hàm thông báo với Callback',
      difficulty: 'basic',
      learningObjectiveIds: ['LO13.3.1'],
      description: 'Tạo hàm `doMath(a, b, callback)` nhận 2 số và 1 hàm callback. Gọi hàm với `doMath(20, 5, (x, y) => x / y)` và in ra: `Kết quả phép tính: [kết quả]`.',
      starterCode: `function doMath(a, b, callback) {
  // Thực thi callback với a và b:
}

// Gọi doMath với phép chia và in kết quả:
`,
      solutionCode: `function doMath(a, b, callback) {
  return callback(a, b);
}

const result = doMath(20, 5, (x, y) => x / y);
console.log("Kết quả phép tính:", result);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra kết quả 20 / 5 = 4',
          expectedOutput: 'Kết quả phép tính: 4'
        }
      ],
      hints: ['return callback(a, b)'],
      explanation: 'Callback nhận các tham số đầu vào và trả về kết quả tính toán.'
    },
    intermediate: {
      id: 'ex-13-3-2',
      lessonId: 'les-13-3',
      title: 'Bài tập Trung bình: Tự cài đặt myMap()',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO13.3.2'],
      description: 'Tự viết hàm `myMap(arr, transformCallback)` biến đổi từng phần tử của mảng theo callback. Áp dụng biến đổi mảng `[10, 20, 30]` thành giá trị nhân đôi và in: `Mảng sau biến đổi: [kết quả]`.',
      starterCode: `function myMap(arr, transformCallback) {
  // Tự viết vòng lặp chuyển đổi:
}

const original = [10, 20, 30];
const doubled = myMap(original, x => x * 2);
console.log("Mảng sau biến đổi:", doubled);`,
      solutionCode: `function myMap(arr, transformCallback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(transformCallback(arr[i], i));
  }
  return result;
}

const original = [10, 20, 30];
const doubled = myMap(original, x => x * 2);
console.log("Mảng sau biến đổi:", doubled);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra mảng nhân đôi [20, 40, 60]',
          expectedOutput: 'Mảng sau biến đổi: [ 20, 40, 60 ]'
        }
      ],
      hints: ['Duyệt qua mảng và push(transformCallback(arr[i]))'],
      explanation: 'Cơ chế hoạt động nguyên bản của Array.prototype.map().'
    },
    challenge: {
      id: 'ex-13-3-3',
      lessonId: 'les-13-3',
      title: 'Bài tập Thử thách: Function Composition (Kết hợp nhiều hàm)',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO13.3.1'],
      description: 'Tạo hàm `compose(f, g)` nhận 2 hàm và trả về một hàm mới thực thi `f(g(x))` (chạy g trước rồi truyền kết quả cho f). Áp dụng với `addTax = x => x + 10` và `applyDiscount = x => x * 0.9` cho giá 100. In ra: `Giá cuối cùng: [kết quả]`.',
      starterCode: `function compose(f, g) {
  // Trả về hàm kết hợp f(g(x)):
}

const addTax = x => x + 10;
const applyDiscount = x => x * 0.9;

const calculateFinalPrice = compose(addTax, applyDiscount);
console.log("Giá cuối cùng:", calculateFinalPrice(100));`,
      solutionCode: `function compose(f, g) {
  return function(x) {
    return f(g(x));
  };
}

const addTax = x => x + 10;
const applyDiscount = x => x * 0.9;

const calculateFinalPrice = compose(addTax, applyDiscount);
console.log("Giá cuối cùng:", calculateFinalPrice(100));`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra (100 * 0.9) + 10 = 100',
          expectedOutput: 'Giá cuối cùng: 100'
        }
      ],
      hints: ['return function(x) { return f(g(x)); }'],
      explanation: 'Function Composition là trụ cột của phong cách lập trình hàm (Functional Programming).'
    }
  },
  quiz: {
    id: 'quiz-13-3',
    lessonId: 'les-13-3',
    title: 'Trắc nghiệm: Higher-Order Functions',
    passingScore: 70,
    questions: [
      {
        id: 'q-13-3-1',
        lessonId: 'les-13-3',
        learningObjectiveId: 'LO13.3.1',
        type: 'multiple_choice',
        difficulty: 'easy',
        prompt: 'Điều kiện nào sau đây biến một hàm thành Higher-Order Function?',
        options: [
          { id: 'a', text: 'Hàm nhận một hàm khác làm tham số hoặc trả về một hàm' },
          { id: 'b', text: 'Hàm chạy bất đồng bộ' },
          { id: 'c', text: 'Hàm sử dụng vòng lặp for' },
          { id: 'd', text: 'Hàm có nhiều hơn 3 tham số' }
        ],
        correctAnswer: 'a',
        explanation: 'Higher-Order Function nhận hàm làm tham số hoặc trả về hàm.',
        relatedLessonId: 'les-13-3'
      }
    ]
  },
  summary: [
    'Hàm trong JS là First-Class Citizen, có thể truyền và nhận như dữ liệu thông thường.',
    'Higher-Order Function tăng tính tái sử dụng và trừu tượng hóa các thuật toán phức tạp.',
    'Các phương thức mảng hiện đại đều được thiết kế trên mô hình Higher-Order Functions.'
  ],
  suggestedBookmarks: [
    'Tư duy Functional Programming trong JavaScript hiện đại',
    'Thư viện Ramda và Lodash trong xử lý dữ liệu phức hợp'
  ]
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
  prerequisites: [
    'Nắm vững Array và Object cơ bản',
    'Hiểu tham số hàm'
  ],
  learningObjectives: [
    {
      id: 'LO13.4.1',
      code: 'LO13.4.1',
      title: 'Phân biệt Spread (Rải) và Rest (Gom)',
      description: 'Phân biệt rõ ràng cú pháp ... khi trải rộng mảng/đối tượng (Spread) và khi thu gom các đối số còn lại (Rest).',
      bloomLevel: 'Analyze',
      masteryPercentage: 92
    },
    {
      id: 'LO13.4.2',
      code: 'LO13.4.2',
      title: 'Sao chép nông (Shallow Copy) và gộp dữ liệu bất biến',
      description: 'Ứng dụng Spread để copy và gộp mảng, object mà không làm thay đổi dữ liệu gốc (Immutability).',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    }
  ],
  sections: [
    {
      id: 'sec-13-4-1',
      lessonId: 'les-13-4',
      order: 1,
      conceptName: 'Toán tử Spread (...) và Rest Parameters',
      title: '1. Phân biệt Spread Operator và Rest Parameters',
      explanation: 'Dù cùng sử dụng ký hiệu 3 dấu chấm (...), công dụng của chúng hoàn toàn trái ngược: Spread Operator (Trải rộng) dùng để "mở bung" các phần tử của một mảng hoặc object; Rest Parameter (Thu gom) dùng trong định nghĩa hàm để gom nhiều đối số thành một mảng duy nhất.',
      syntax: '// Spread: const newArr = [...arr1, ...arr2];\n// Rest: function sum(...numbers) { }',
      codeExample: `// 1. SPREAD: Trải rộng và sao chép bất biến
const oldSkills = ["HTML", "CSS"];
const newSkills = [...oldSkills, "JavaScript", "React"];
console.log("Kỹ năng mới:", newSkills);

const user = { name: "An", role: "Student" };
const updatedUser = { ...user, role: "Developer", city: "Hà Nội" };
console.log("User mới:", updatedUser);

// 2. REST: Thu gom đối số không giới hạn
function calculateTotal(...prices) {
  return prices.reduce((acc, curr) => acc + curr, 0);
}
console.log("Tổng tiền:", calculateTotal(10, 20, 30, 40)); // 100`,
      lineByLineExplanation: [
        { line: 3, text: 'Spread mở bung oldSkills, tạo mảng mới không ảnh hưởng mảng cũ.' },
        { line: 7, text: 'Spread object copy toàn bộ thuộc tính, ghi đè role và thêm city.' },
        { line: 12, text: '...prices gom toàn bộ 4 đối số (10, 20, 30, 40) thành mảng [10, 20, 30, 40].' }
      ],
      commonMistakes: [
        'Đặt Rest Parameter ở vị trí đầu hoặc giữa danh sách tham số (Rest bắt buộc phải là tham số cuối cùng).'
      ],
      whenToUse: 'Dùng Spread khi cần clone mảng/object và cập nhật trạng thái trong React. Dùng Rest khi viết các hàm tiện ích nhận số lượng đối số linh hoạt.',
      whenNotToUse: 'Lưu ý Spread chỉ tạo Shallow Copy (sao chép nông 1 tầng), với mảng/object lồng nhau nhiều tầng cần Deep Clone.',
      realWorldUseCase: 'Cập nhật state bất biến trong Redux/Zustand: return { ...state, count: state.count + 1 }.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-13-4',
    title: 'Thực hành: Gộp giỏ hàng và cập nhật số lượng bất biến',
    description: 'Chạy thử đoạn mã gộp 2 danh sách sản phẩm và cập nhật giỏ hàng không làm biến đổi mảng gốc.',
    starterCode: `const cartA = [{ id: 1, name: "Bàn phím", price: 500 }];
const cartB = [{ id: 2, name: "Chuột", price: 300 }];

// Gộp giỏ hàng dùng Spread:
const combinedCart = [...cartA, ...cartB];
console.log("Tổng số sản phẩm:", combinedCart.length);
console.log("Sản phẩm 1:", combinedCart[0].name);
console.log("Sản phẩm 2:", combinedCart[1].name);`,
    expectedConsoleOutput: 'Tổng số sản phẩm: 2\nSản phẩm 1: Bàn phím\nSản phẩm 2: Chuột',
    hint: 'Toán tử [...cartA, ...cartB] tạo ra mảng mới chứa phần tử của cả 2 mảng.',
    language: 'javascript'
  },
  exercises: {
    basic: {
      id: 'ex-13-4-1',
      lessonId: 'les-13-4',
      title: 'Bài tập Cơ bản: Sao chép và thêm phần tử bằng Spread',
      difficulty: 'basic',
      learningObjectiveIds: ['LO13.4.2'],
      description: 'Cho mảng `fruits = ["Táo", "Cam"]`. Dùng Spread tạo mảng mới `allFruits` có thêm `"Xoài"` ở đầu và `"Nho"` ở cuối. In ra: `Danh sách trái cây: [allFruits]`.',
      starterCode: `const fruits = ["Táo", "Cam"];

// Tạo allFruits với Xoài ở đầu, Nho ở cuối:
const allFruits = [];

console.log("Danh sách trái cây:", allFruits);`,
      solutionCode: `const fruits = ["Táo", "Cam"];
const allFruits = ["Xoài", ...fruits, "Nho"];
console.log("Danh sách trái cây:", allFruits);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra mảng gồm 4 phần tử đúng thứ tự',
          expectedOutput: 'Danh sách trái cây: [ \'Xoài\', \'Táo\', \'Cam\', \'Nho\' ]'
        }
      ],
      hints: ['const allFruits = ["Xoài", ...fruits, "Nho"]'],
      explanation: 'Spread mở bung các phần tử fruits vào giữa mảng mới.'
    },
    intermediate: {
      id: 'ex-13-4-2',
      lessonId: 'les-13-4',
      title: 'Bài tập Trung bình: Hàm tìm giá trị lớn nhất linh hoạt với Rest',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO13.4.1'],
      description: 'Viết hàm `findMax(...numbers)` dùng Rest parameters để nhận số lượng tham số tùy ý và trả về số lớn nhất. Gọi hàm với `findMax(12, 45, 7, 89, 23)` và in ra: `Số lớn nhất: [max]`.',
      starterCode: `function findMax(...numbers) {
  // Tìm số lớn nhất trong mảng numbers:
}

console.log("Số lớn nhất:", findMax(12, 45, 7, 89, 23));`,
      solutionCode: `function findMax(...numbers) {
  return Math.max(...numbers);
}

console.log("Số lớn nhất:", findMax(12, 45, 7, 89, 23));`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra tìm được 89',
          expectedOutput: 'Số lớn nhất: 89'
        }
      ],
      hints: ['Có thể kết hợp Math.max(...numbers)'],
      explanation: 'Rest gom đối số thành mảng, sau đó Spread giải nén mảng vào Math.max.'
    },
    challenge: {
      id: 'ex-13-4-3',
      lessonId: 'les-13-4',
      title: 'Bài tập Thử thách: Tách thông tin với Rest trong Object Destructuring',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO13.4.1', 'LO13.4.2'],
      description: 'Cho object `student = { id: 1, name: "Minh", grade: 8.5, email: "minh@gmail.com", city: "Đà Nẵng" }`. Dùng destructuring trích xuất `id` và `name`, toàn bộ các thuộc tính còn lại gom vào object `metadata`. In ra: `Họ tên: [name] - Metadata: [metadata]`.',
      starterCode: `const student = { id: 1, name: "Minh", grade: 8.5, email: "minh@gmail.com", city: "Đà Nẵng" };

// Trích xuất id, name và ...metadata:


console.log("Họ tên:", name, "- Metadata:", metadata);`,
      solutionCode: `const student = { id: 1, name: "Minh", grade: 8.5, email: "minh@gmail.com", city: "Đà Nẵng" };
const { id, name, ...metadata } = student;
console.log("Họ tên:", name, "- Metadata:", metadata);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra tách đúng name và object metadata',
          expectedOutput: 'Họ tên: Minh - Metadata: { grade: 8.5, email: \'minh@gmail.com\', city: \'Đà Nẵng\' }'
        }
      ],
      hints: ['const { id, name, ...metadata } = student;'],
      explanation: 'Rest trong Object Destructuring gom toàn bộ thuộc tính còn lại thành object riêng biệt.'
    }
  },
  quiz: {
    id: 'quiz-13-4',
    lessonId: 'les-13-4',
    title: 'Trắc nghiệm: Spread & Rest',
    passingScore: 70,
    questions: [
      {
        id: 'q-13-4-1',
        lessonId: 'les-13-4',
        learningObjectiveId: 'LO13.4.1',
        type: 'multiple_choice',
        difficulty: 'easy',
        prompt: 'Vị trí của tham số Rest (...rest) trong chữ ký khai báo hàm phải như thế nào?',
        options: [
          { id: 'a', text: 'Bắt buộc phải nằm ở vị trí đầu tiên' },
          { id: 'b', text: 'Có thể nằm ở bất kỳ vị trí nào' },
          { id: 'c', text: 'Bắt buộc phải là tham số cuối cùng' },
          { id: 'd', text: 'Phải nằm ở giữa các tham số khác' }
        ],
        correctAnswer: 'c',
        explanation: 'Rest parameters phải nằm cuối cùng để gom toàn bộ các đối số còn lại sau các tham số có tên.',
        relatedLessonId: 'les-13-4'
      }
    ]
  },
  summary: [
    'Spread (...) mở bung mảng/đối tượng để sao chép nông và gộp dữ liệu bất biến.',
    'Rest (...) gom các đối số rời rạc thành một mảng duy nhất bên trong hàm.',
    'Cặp đôi cú pháp thiết yếu trong hệ sinh thái React và JavaScript ES6+.'
  ],
  suggestedBookmarks: [
    'Phân biệt Shallow Copy vs Deep Copy trong JavaScript',
    'Toán tử Spread trong kiến trúc State Immutability'
  ]
};

export const LESSON_13_5: Lesson = {
  id: 'les-13-5',
  moduleId: 'mod-13',
  track: 'javascript',
  language: 'javascript',
  title: '13.5 ES Modules: Tách file với import và export',
  order: 5,
  durationMinutes: 45,
  difficulty: 'Cơ bản',
  prerequisites: [
    'Hiểu cấu trúc thư mục dự án',
    'Biết cách viết hàm và đối tượng'
  ],
  learningObjectives: [
    {
      id: 'LO13.5.1',
      code: 'LO13.5.1',
      title: 'Hiểu chuẩn ES Modules (ESM)',
      description: 'Phân biệt Named Export, Default Export và cú pháp import tương ứng.',
      bloomLevel: 'Understand',
      masteryPercentage: 92
    },
    {
      id: 'LO13.5.2',
      code: 'LO13.5.2',
      title: 'Tổ chức mã nguồn theo mô hình Module chuẩn công nghiệp',
      description: 'Biết cách chia nhỏ ứng dụng thành các module chức năng độc lập (utils, components, services).',
      bloomLevel: 'Apply',
      masteryPercentage: 88
    }
  ],
  sections: [
    {
      id: 'sec-13-5-1',
      lessonId: 'les-13-5',
      order: 1,
      conceptName: 'Named Export vs Default Export',
      title: '1. Cú pháp Export và Import trong ES6',
      explanation: 'ES Modules (ESM) là chuẩn chính thức của JavaScript giúp module hóa mã nguồn. Có 2 dạng xuất khẩu: Named Export (xuất nhiều thành phần theo tên, khi import phải đúng tên trong cặp ngoặc nhọn {}) và Default Export (xuất 1 thành phần chính duy nhất của file, khi import không cần ngoặc nhọn và có thể tự do đặt tên).',
      syntax: '// mathUtils.js\nexport const add = (a, b) => a + b;\nexport default function calc() {}\n\n// app.js\nimport calc, { add } from "./mathUtils.js";',
      codeExample: `// Mô phỏng mô hình ES Modules:
// File 1: utils/formatters.js
const formatVND = amount => amount.toLocaleString("vi-VN") + " VNĐ";
const formatDate = dateStr => new Date(dateStr).toLocaleDateString("vi-VN");

// File 2: services/orderService.js sử dụng các tiện ích:
function createInvoice(product, price) {
  return {
    product,
    priceFormatted: formatVND(price)
  };
}

const invoice = createInvoice("Khóa học JS Master", 499000);
console.log("Hóa đơn:", invoice.product, "•", invoice.priceFormatted);`,
      lineByLineExplanation: [
        { line: 2, text: 'formatVND là hàm tiện ích có thể export để dùng ở nhiều trang.' },
        { line: 6, text: 'createInvoice import formatVND để xử lý logic định dạng.' },
        { line: 12, text: 'Mã nguồn được phân tách rõ ràng theo nguyên lý đơn nhiệm (Single Responsibility).' }
      ],
      commonMistakes: [
        'Quên ngoặc nhọn {} khi import Named Export hoặc nhầm lẫn giữa export default và export const.'
      ],
      whenToUse: 'Luôn áp dụng cho mọi dự án Web hiện đại có dùng Vite, Webpack, Next.js hay Node.js ESM.',
      whenNotToUse: 'Không gộp chung toàn bộ code vào một file script khổng lồ duy nhất.',
      realWorldUseCase: 'Mọi thư viện npm hiện đại như react, lucide-react đều phát hành dưới dạng ES Modules.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-13-5',
    title: 'Thực hành: Mô phỏng hệ thống Module Math & String Helpers',
    description: 'Chạy thử mã nguồn mô phỏng việc tổ chức các module helper và tích hợp chúng vào ứng dụng chính.',
    starterCode: `// Module MathHelper:
const MathHelper = {
  add: (a, b) => a + b,
  multiply: (a, b) => a * b
};

// Module StringHelper:
const StringHelper = {
  capitalize: str => str.charAt(0).toUpperCase() + str.slice(1)
};

// Ứng dụng chính tích hợp:
const sum = MathHelper.add(25, 75);
const title = StringHelper.capitalize("javascript nâng cao");
console.log("Tổng:", sum);
console.log("Tiêu đề:", title);`,
    expectedConsoleOutput: 'Tổng: 100\nTiêu đề: Javascript nâng cao',
    hint: 'Mỗi object đóng vai trò như một module riêng biệt.',
    language: 'javascript'
  },
  exercises: {
    basic: {
      id: 'ex-13-5-1',
      lessonId: 'les-13-5',
      title: 'Bài tập Cơ bản: Xây dựng Module cấu hình Config',
      difficulty: 'basic',
      learningObjectiveIds: ['LO13.5.1'],
      description: 'Tạo đối tượng `AppConfig` gồm các thuộc tính `appName: "JS Master"` và `version: "2.0"`. Viết hàm `getAppInfo()` trả về chuỗi: `[appName] - v[version]`. In ra kết quả.',
      starterCode: `const AppConfig = {
  appName: "JS Master",
  version: "2.0"
};

function getAppInfo() {
  // Trả về chuỗi kết hợp:
}

console.log("Thông tin ứng dụng:", getAppInfo());`,
      solutionCode: `const AppConfig = {
  appName: "JS Master",
  version: "2.0"
};

function getAppInfo() {
  return \`\${AppConfig.appName} - v\${AppConfig.version}\`;
}

console.log("Thông tin ứng dụng:", getAppInfo());`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra in chuỗi thông tin ứng dụng',
          expectedOutput: 'Thông tin ứng dụng: JS Master - v2.0'
        }
      ],
      hints: ['return `${AppConfig.appName} - v${AppConfig.version}`'],
      explanation: 'Cấu hình tập trung trong module giúp dễ bảo trì và thay đổi môi trường.'
    },
    intermediate: {
      id: 'ex-13-5-2',
      lessonId: 'les-13-5',
      title: 'Bài tập Trung bình: Module Quản lý Giỏ hàng (Cart Module)',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO13.5.2'],
      description: 'Xây dựng module `CartService` dạng object có mảng nội bộ `items = []` và 2 hàm: `addItem(item)` thêm món hàng, `getTotal()` tính tổng tiền các món. Thêm 2 món `{name: "Áo", price: 150}` và `{name: "Quần", price: 250}`. In ra: `Tổng giỏ hàng: [total] VNĐ`.',
      starterCode: `const CartService = {
  items: [],
  addItem(item) {
    // thêm món
  },
  getTotal() {
    // tính tổng tiền
  }
};

CartService.addItem({ name: "Áo", price: 150 });
CartService.addItem({ name: "Quần", price: 250 });
console.log("Tổng giỏ hàng:", CartService.getTotal(), "VNĐ");`,
      solutionCode: `const CartService = {
  items: [],
  addItem(item) {
    this.items.push(item);
  },
  getTotal() {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }
};

CartService.addItem({ name: "Áo", price: 150 });
CartService.addItem({ name: "Quần", price: 250 });
console.log("Tổng giỏ hàng:", CartService.getTotal(), "VNĐ");`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra tổng tiền 400 VNĐ',
          expectedOutput: 'Tổng giỏ hàng: 400 VNĐ'
        }
      ],
      hints: ['this.items.reduce((sum, item) => sum + item.price, 0)'],
      explanation: 'Tổ chức module đóng gói cả dữ liệu và các hành vi xử lý liên quan.'
    },
    challenge: {
      id: 'ex-13-5-3',
      lessonId: 'les-13-5',
      title: 'Bài tập Thử thách: Module Event Emitter (Publish - Subscribe)',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO13.5.2'],
      description: 'Xây dựng module `EventEmitter` có 2 phương thức: `on(event, listener)` đăng ký hàm lắng nghe sự kiện, và `emit(event, data)` kích hoạt sự kiện và truyền dữ liệu cho listener. Đăng ký sự kiện "login" và emit với dữ liệu "User123". In: `Người dùng đăng nhập thành công: User123`.',
      starterCode: `const EventEmitter = {
  events: {},
  on(event, listener) {
    // Đăng ký listener vào mảng events[event]:
  },
  emit(event, data) {
    // Gọi các listener đã đăng ký:
  }
};

EventEmitter.on("login", user => {
  console.log("Người dùng đăng nhập thành công:", user);
});

EventEmitter.emit("login", "User123");`,
      solutionCode: `const EventEmitter = {
  events: {},
  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  },
  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(listener => listener(data));
    }
  }
};

EventEmitter.on("login", user => {
  console.log("Người dùng đăng nhập thành công:", user);
});

EventEmitter.emit("login", "User123");`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra lắng nghe và kích hoạt sự kiện login',
          expectedOutput: 'Người dùng đăng nhập thành công: User123'
        }
      ],
      hints: ['Lưu các listener trong mảng this.events[event] và duyệt forEach khi emit'],
      explanation: 'Mẫu thiết kế Pub/Sub là nền tảng giao tiếp giữa các module trong hệ thống lớn.'
    }
  },
  quiz: {
    id: 'quiz-13-5',
    lessonId: 'les-13-5',
    title: 'Trắc nghiệm: ES Modules',
    passingScore: 70,
    questions: [
      {
        id: 'q-13-5-1',
        lessonId: 'les-13-5',
        learningObjectiveId: 'LO13.5.1',
        type: 'multiple_choice',
        difficulty: 'easy',
        prompt: 'Trong một file JavaScript ES Module, bạn có thể có tối đa bao nhiêu default export?',
        options: [
          { id: 'a', text: 'Chỉ duy nhất 1 default export' },
          { id: 'b', text: 'Tối đa 2 default export' },
          { id: 'c', text: 'Không giới hạn số lượng' },
          { id: 'd', text: 'Tùy thuộc vào số lượng named export' }
        ],
        correctAnswer: 'a',
        explanation: 'Mỗi file module chỉ được phép có duy nhất một default export.',
        relatedLessonId: 'les-13-5'
      }
    ]
  },
  summary: [
    'ES Modules là chuẩn module hóa chính thức của ECMAScript giúp chia nhỏ và quản lý code.',
    'Phân biệt rõ Named Export (dùng {}) và Default Export (không dùng {} khi import).',
    'Module hóa giúp ứng dụng dễ đọc, dễ test và tối ưu hóa đóng gói (Tree-shaking).'
  ],
  suggestedBookmarks: [
    'Kỹ thuật Tree Shaking của Vite/Webpack loại bỏ dead code từ ES Modules',
    'Dynamic Import với cú pháp import() tải mã theo yêu cầu (Lazy Loading)'
  ]
};

export const JS_MODULE_13_LESSONS: Lesson[] = [
  LESSON_13_1,
  LESSON_13_2,
  LESSON_13_3,
  LESSON_13_4,
  LESSON_13_5
];
