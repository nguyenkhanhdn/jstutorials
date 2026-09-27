import { Lesson } from '../../types';
import { SAMPLE_LESSON } from '../sampleLessonData';

// ==========================================
// MODULE 2: BIẾN VÀ KIỂU DỮ LIỆU
// ==========================================

export const LESSON_2_1 = SAMPLE_LESSON;

export const LESSON_2_2: Lesson = {
  id: 'les-2-2',
  moduleId: 'mod-2',
  track: 'javascript',
  language: 'javascript',
  title: '2.2 Các kiểu dữ liệu nguyên thủy trong JavaScript',
  order: 2,
  durationMinutes: 50,
  difficulty: 'Cơ bản',
  prerequisites: [
    'Đã học Bài 2.1 về Khai báo biến với let và const',
    'Biết cách in biến ra Console'
  ],
  learningObjectives: [
    {
      id: 'LO2.2.1',
      code: 'LO2.2.1',
      title: 'Nhận diện 5 kiểu nguyên thủy cốt lõi',
      description: 'Phân biệt chính xác Number (kể cả số thập phân, Infinity, NaN), String, Boolean, null và undefined.',
      bloomLevel: 'Understand',
      masteryPercentage: 88
    },
    {
      id: 'LO2.2.2',
      code: 'LO2.2.2',
      title: 'Phân biệt null vs undefined',
      description: 'Giải thích sự khác biệt sâu sắc giữa undefined (chưa gán giá trị) và null (giá trị rỗng có chủ ý của lập trình viên).',
      bloomLevel: 'Analyze',
      masteryPercentage: 84
    },
    {
      id: 'LO2.2.3',
      code: 'LO2.2.3',
      title: 'Giới thiệu BigInt và Symbol hiện đại',
      description: 'Hiểu vai trò của BigInt cho số nguyên siêu lớn và Symbol cho các khóa định danh duy nhất.',
      bloomLevel: 'Remember',
      masteryPercentage: 75
    }
  ],
  sections: [
    {
      id: 'sec-2-2-1',
      lessonId: 'les-2-2',
      order: 1,
      conceptName: 'Đặc tính của kiểu dữ liệu nguyên thủy (Primitive)',
      title: '1. Bản chất Bất biến (Immutable) của kiểu nguyên thủy',
      explanation: 'Trong JavaScript, kiểu dữ liệu nguyên thủy được lưu trực tiếp trên bộ nhớ Stack. Chúng có đặc tính quan trọng là bất biến (immutable) - giá trị của chúng không thể bị thay đổi tại chỗ. Khi bạn gán lại biến, JavaScript sẽ tạo ra một vùng nhớ mới chứa giá trị mới chứ không biến đổi giá trị cũ.',
      syntax: 'const num = 42;\nconst str = "Xin chào";\nconst bool = true;',
      codeExample: `// String là bất biến
let text = "javascript";
text.toUpperCase(); // Trả về chuỗi mới "JAVASCRIPT"
console.log("Chuỗi gốc vẫn nguyên vẹn:", text); // vẫn là "javascript"

text = text.toUpperCase(); // Phải gán lại để nhận chuỗi mới
console.log("Chuỗi sau khi gán lại:", text);`,
      lineByLineExplanation: [
        { line: 3, text: 'Hàm toUpperCase() tạo ra và trả về một chuỗi mới chứ không sửa trực tiếp biến text.' },
        { line: 6, text: 'Chỉ khi thực hiện phép gán lại (=), biến text mới trỏ sang chuỗi mới tạo.' }
      ],
      commonMistakes: [
        'Nghĩ rằng gọi phương thức chuỗi sẽ tự động làm thay đổi biến chuỗi ban đầu.'
      ],
      whenToUse: 'Dùng kiểu nguyên thủy cho các đơn vị dữ liệu đơn lẻ như điểm số, tên người dùng, cờ bật tắt trạng thái.',
      whenNotToUse: 'Không dùng để lưu trữ danh sách hoặc thực thể có nhiều thuộc tính phức hợp (hãy dùng Array hoặc Object).',
      realWorldUseCase: 'Lưu trữ thông tin xác thực phiên làm việc: userId: "u123", isAuthenticated: true, balance: 150000.5.'
    },
    {
      id: 'sec-2-2-2',
      lessonId: 'les-2-2',
      order: 2,
      conceptName: 'So sánh chi tiết null và undefined',
      title: '2. Phân biệt null và undefined – Điểm mù của người mới',
      explanation: 'Cả hai đều biểu thị sự vắng mặt của giá trị, nhưng có ngữ nghĩa khác nhau: `undefined` do chính JavaScript Engine tự động gán khi một biến được khai báo nhưng chưa có giá trị, hoặc hàm không có lệnh return. Ngược lại, `null` là giá trị do lập trình viên chủ động gán để biểu thị rằng biến đó hiện tại đang rỗng hoặc chưa có đối tượng nào.',
      syntax: 'let a; // a là undefined\nlet b = null; // b được chủ động gán rỗng',
      codeExample: `let sinhVienMoi;
console.log("Biến vừa khai báo chưa gán:", sinhVienMoi); // undefined

let nguoiDungHienTai = null; // Hiện tại chưa có ai đăng nhập
console.log("Trạng thái phiên đăng nhập:", nguoiDungHienTai); // null

// Kiểm tra với typeof
console.log("typeof undefined:", typeof sinhVienMoi); // "undefined"
console.log("typeof null:", typeof nguoiDungHienTai); // "object" (Historical bug của JS!)`,
      lineByLineExplanation: [
        { line: 2, text: 'Chưa gán giá trị khởi tạo nên engine đặt là undefined.' },
        { line: 5, text: 'Chủ động gán null thể hiện chủ đích biến đang tạm thời rỗng.' },
        { line: 9, text: 'Lưu ý kinh điển: typeof null trả về "object" là lỗi thiết kế từ năm 1995 nhưng được giữ lại để tương thích ngược.' }
      ],
      commonMistakes: [
        'Dùng typeof để kiểm tra biến có phải null hay không (luôn phải dùng val === null).'
      ],
      whenToUse: 'Gán biến = null khi muốn xóa tham chiếu hoặc dọn dẹp bộ nhớ một đối tượng không còn dùng.',
      whenNotToUse: 'Hạn chế gán biến = undefined thủ công. Nếu muốn biểu thị rỗng, hãy dùng null.',
      realWorldUseCase: 'Trong chức năng giỏ hàng, khi người dùng bấm "Xóa toàn bộ giỏ", biến selectedCoupon = null.'
    }
  ],
  predictOutputs: [
    {
      id: 'po-2-2-1',
      code: `let score;
console.log(score === undefined);`,
      question: 'Biểu thức so sánh trên in ra giá trị gì?',
      options: ['true', 'false', 'TypeError', 'undefined'],
      correctAnswer: 'true',
      explanation: 'Biến score khai báo bằng let mà không gán giá trị thì tự động nhận undefined, do đó score === undefined là true.',
      hint: 'Biến chưa khởi tạo có giá trị mặc định là gì?'
    },
    {
      id: 'po-2-2-2',
      code: `console.log(typeof null);`,
      question: 'Kết quả in ra của toán tử typeof null là gì?',
      options: ['"null"', '"object"', '"undefined"', '"number"'],
      correctAnswer: '"object"',
      explanation: 'Đây là lỗi thiết kế lịch sử nổi tiếng của JavaScript từ phiên bản đầu tiên năm 1995: typeof null trả về chuỗi "object".',
      hint: 'Hãy nhớ lại câu hỏi trắc nghiệm phổ biến nhất trong các buổi phỏng vấn JavaScript.'
    }
  ],
  interactivePractice: {
    id: 'ip-2-2',
    title: 'Thực hành: Khởi tạo và kiểm tra 5 kiểu nguyên thủy',
    description: 'Khai báo 5 biến đại diện cho 5 kiểu dữ liệu nguyên thủy: Number, String, Boolean, null, undefined và in từng biến ra Console.',
    starterCode: `const age = 20;
const fullName = "Trần Bích Ngọc";
const isEnrolled = true;
const graduationYear = null;
let scholarshipRank;

console.log("Tuổi:", age);
console.log("Họ tên:", fullName);
console.log("Nhập học:", isEnrolled);
console.log("Năm tốt nghiệp:", graduationYear);
console.log("Học bổng:", scholarshipRank);`,
    expectedConsoleOutput: 'Tuổi: 20\nHọ tên: Trần Bích Ngọc\nNhập học: true\nNăm tốt nghiệp: null\nHọc bổng: undefined',
    hint: 'Chạy thử đoạn mã để quan sát giá trị của từng kiểu nguyên thủy.',
    language: 'javascript'
  },
  exercises: {
    basic: {
      id: 'ex-2-2-1',
      lessonId: 'les-2-2',
      title: 'Bài tập Cơ bản: Khởi tạo hồ sơ khách hàng với kiểu phù hợp',
      difficulty: 'basic',
      learningObjectiveIds: ['LO2.2.1'],
      description: 'Khai báo 3 biến: `customerId` (String mang giá trị "KH-902"), `points` (Number mang giá trị 150), `isVIP` (Boolean mang giá trị true). In ra theo cú pháp: `Khách hàng: [customerId] | Điểm: [points] | VIP: [isVIP]`.',
      starterCode: `// Khai báo biến và in thông tin:
`,
      solutionCode: `const customerId = "KH-902";
const points = 150;
const isVIP = true;
console.log(\`Khách hàng: \${customerId} | Điểm: \${points} | VIP: \${isVIP}\`);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra in đúng định dạng thông tin khách hàng',
          expectedOutput: 'Khách hàng: KH-902 | Điểm: 150 | VIP: true'
        }
      ],
      hints: ['Dùng Template literals ${customerId} với dấu backticks'],
      explanation: 'Kết hợp hài hòa 3 kiểu dữ liệu String, Number và Boolean trong chuỗi định dạng.'
    },
    intermediate: {
      id: 'ex-2-2-2',
      lessonId: 'les-2-2',
      title: 'Bài tập Trung bình: Kiểm tra trạng thái dữ liệu rỗng an toàn',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO2.2.2'],
      description: 'Viết hàm checkValue(val). Nếu val là null in ra `Giá trị rỗng (null)`. Nếu val là undefined in ra `Chưa khởi tạo (undefined)`. Còn lại in ra `Có dữ liệu`. Chạy thử với checkValue(null).',
      starterCode: `function checkValue(val) {
  // Viết điều kiện:
  
}

checkValue(null);`,
      solutionCode: `function checkValue(val) {
  if (val === null) {
    console.log("Giá trị rỗng (null)");
  } else if (val === undefined) {
    console.log("Chưa khởi tạo (undefined)");
  } else {
    console.log("Có dữ liệu");
  }
}

checkValue(null);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra giá trị null chính xác',
          expectedOutput: 'Giá trị rỗng (null)'
        }
      ],
      hints: ['Dùng toán tử so sánh nghiêm ngặt === null và === undefined'],
      explanation: 'So sánh nghiêm ngặt giúp phân biệt rạch ròi giữa null và undefined.'
    },
    challenge: {
      id: 'ex-2-2-3',
      lessonId: 'les-2-2',
      title: 'Bài tập Thử thách: Kiểm tra số nguyên an toàn lớn (Safe Integer)',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO2.2.3'],
      description: 'Cho biến bigNum = 9007199254740991 (Number.MAX_SAFE_INTEGER). Dùng Number.isSafeInteger(bigNum) kiểm tra và in ra: `Số an toàn: [true/false]`. Sau đó in ra số kế tiếp bigNum + 1n dưới dạng BigInt bằng cách viết thêm ký tự n ở cuối số: `Số BigInt: 9007199254740992n`.',
      starterCode: `const bigNum = 9007199254740991;

// Viết mã kiểm tra và in kết quả:
`,
      solutionCode: `const bigNum = 9007199254740991;
console.log("Số an toàn:", Number.isSafeInteger(bigNum));
console.log("Số BigInt:", 9007199254740992n.toString() + "n");`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra số an toàn và in BigInt',
          expectedOutput: 'Số an toàn: true\nSố BigInt: 9007199254740992n'
        }
      ],
      hints: ['Number.MAX_SAFE_INTEGER là 2^53 - 1', 'Thêm chữ n ở cuối số nguyên để tạo BigInt'],
      explanation: 'BigInt cho phép làm việc với số nguyên vô hạn chữ số vượt quá giới hạn 64-bit IEEE 754 của Number.'
    }
  },
  quiz: {
    id: 'quiz-2-2',
    lessonId: 'les-2-2',
    title: 'Trắc nghiệm: Kiểu dữ liệu nguyên thủy',
    passingScore: 70,
    questions: [
      {
        id: 'q-2-2-1',
        lessonId: 'les-2-2',
        learningObjectiveId: 'LO2.2.2',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'Khẳng định nào sau đây là ĐÚNG NHẤT về sự khác biệt giữa null và undefined trong JavaScript?',
        options: [
          { id: 'a', text: 'null là biến chưa được khởi tạo, còn undefined là do lập trình viên gán' },
          { id: 'b', text: 'undefined do hệ thống gán mặc định khi biến chưa có giá trị, còn null là giá trị rỗng do lập trình viên chủ động gán' },
          { id: 'c', text: 'Cả hai đều cùng kiểu dữ liệu typeof' },
          { id: 'd', text: 'null và undefined hoàn toàn bằng nhau khi so sánh nghiêm ngặt (===)' }
        ],
        correctAnswer: 'b',
        explanation: 'undefined thể hiện trạng thái chưa được định nghĩa/khởi tạo của biến; null đại diện cho một đối tượng rỗng có chủ ý.',
        relatedLessonId: 'les-2-2'
      }
    ]
  },
  summary: [
    '5 kiểu nguyên thủy thiết yếu: Number, String, Boolean, null, undefined.',
    'Các giá trị nguyên thủy có tính bất biến (Immutable), được lưu trên bộ nhớ Stack.',
    'Luôn ghi nhớ ngoại lệ lịch sử: typeof null === "object".'
  ],
  suggestedBookmarks: [
    'Giới hạn Number.MAX_SAFE_INTEGER và giải pháp BigInt',
    'So sánh sự khác nhau giữa null và undefined trong mô hình dữ liệu'
  ]
};

export const LESSON_2_3: Lesson = {
  id: 'les-2-3',
  moduleId: 'mod-2',
  track: 'javascript',
  language: 'javascript',
  title: '2.3 Toán tử typeof và cơ chế kiểm tra kiểu dữ liệu',
  order: 3,
  durationMinutes: 35,
  difficulty: 'Cơ bản',
  prerequisites: [
    'Đã học Bài 2.2 về các kiểu dữ liệu nguyên thủy'
  ],
  learningObjectives: [
    {
      id: 'LO2.3.1',
      code: 'LO2.3.1',
      title: 'Làm chủ toán tử typeof',
      description: 'Sử dụng thành thạo toán tử typeof và dự đoán đúng chuỗi kết quả trả về cho mọi kiểu dữ liệu.',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    },
    {
      id: 'LO2.3.2',
      code: 'LO2.3.2',
      title: 'Kiểm tra kiểu mảng chính xác với Array.isArray()',
      description: 'Hiểu tại sao typeof [] là "object" và cách kiểm tra mảng thực sự bằng Array.isArray().',
      bloomLevel: 'Analyze',
      masteryPercentage: 86
    }
  ],
  sections: [
    {
      id: 'sec-2-3-1',
      lessonId: 'les-2-3',
      order: 1,
      conceptName: 'Toán tử typeof một ngôi (Unary Operator)',
      title: '1. Bảng giá trị chuẩn của toán tử typeof',
      explanation: 'Toán tử `typeof` luôn trả về một CHUỖI (String) đại diện cho kiểu dữ liệu của toán hạng. Có 8 giá trị khả dĩ mà typeof có thể trả về: "string", "number", "boolean", "undefined", "object", "function", "bigint", "symbol".',
      syntax: 'typeof giaTri\ntypeof(giaTri) // Cả hai cách viết đều hợp lệ',
      codeExample: `console.log(typeof "Hà Nội");      // "string"
console.log(typeof 2026);          // "number"
console.log(typeof true);          // "boolean"
console.log(typeof undefined);     // "undefined"
console.log(typeof { name: "An" });// "object"
console.log(typeof function() {}); // "function"`,
      lineByLineExplanation: [
        { line: 1, text: 'typeof chuỗi ký tự trả về chuỗi "string".' },
        { line: 6, text: 'Hàm trong JS thực chất là đối tượng có thể gọi (callable object), nhưng typeof ưu ái trả về "function".' }
      ],
      commonMistakes: [
        'Nghĩ rằng typeof trả về kiểu dữ liệu thuần túy (ví dụ: `typeof x === number` là SAI! Phải so sánh với chuỗi: `typeof x === "number"`).'
      ],
      whenToUse: 'Dùng typeof để kiểm tra dữ liệu đầu vào trong các hàm tiện ích bảo vệ chống lỗi runtime.',
      whenNotToUse: 'Không dùng typeof để kiểm tra mảng (array) hoặc null vì cả hai đều trả về "object".',
      realWorldUseCase: 'Viết hàm validate: nếu typeof input !== "string" thì thông báo lỗi "Họ tên phải là dạng văn bản".'
    },
    {
      id: 'sec-2-3-2',
      lessonId: 'les-2-3',
      order: 2,
      conceptName: 'Cạm bẫy typeof & giải pháp Array.isArray',
      title: '2. Nhận diện mảng với Array.isArray()',
      explanation: 'Vì trong JavaScript mảng cũng là một đối tượng (Object), nên lệnh `typeof [1, 2, 3]` sẽ trả về `"object"`. Để xác minh chính xác một biến có phải là mảng hay không, chuẩn ECMAScript 5 đã bổ sung phương thức tĩnh `Array.isArray(variable)`.',
      syntax: 'Array.isArray(bienKiemTra) // Trả về true nếu là mảng, ngược lại false',
      codeExample: `const list = [10, 20, 30];
const user = { name: "An", age: 20 };

console.log("typeof list:", typeof list); // "object" -> Không phân biệt được!
console.log("Array.isArray(list):", Array.isArray(list)); // true -> Chuẩn xác!
console.log("Array.isArray(user):", Array.isArray(user)); // false`,
      lineByLineExplanation: [
        { line: 4, text: 'typeof không phân biệt được mảng và object thuần.' },
        { line: 5, text: 'Array.isArray trả về true xác nhận list là một đối tượng mảng mảng hợp lệ.' }
      ],
      commonMistakes: [
        'Dùng typeof list === "array" -> CÂU NÀY LUÔN FALSE vì typeof không bao giờ trả về "array"!'
      ],
      whenToUse: 'Luôn luôn dùng Array.isArray() trước khi lặp qua danh sách nhận về từ API máy chủ.',
      whenNotToUse: 'Không dùng kiểm tra thủ công qua length vì object thông thường cũng có thể chứa thuộc tính length.',
      realWorldUseCase: 'Xử lý phản hồi từ giỏ hàng: nếu Array.isArray(cartItems) thì render danh sách sản phẩm, ngược lại báo giỏ trống.'
    }
  ],
  predictOutputs: [
    {
      id: 'po-2-3-1',
      code: `console.log(typeof typeof 100);`,
      question: 'Kết quả in ra của câu lệnh typeof lồng nhau trên là gì?',
      options: ['"number"', '"string"', '"undefined"', 'TypeError'],
      correctAnswer: '"string"',
      explanation: 'typeof 100 trả về chuỗi "number". Sau đó typeof "number" lại tiếp tục kiểm tra một chuỗi, nên kết quả trả về là "string".',
      hint: 'Toán tử typeof luôn trả về một chuỗi ký tự.'
    }
  ],
  interactivePractice: {
    id: 'ip-2-3',
    title: 'Thực hành: Xây dựng trình báo cáo kiểu dữ liệu',
    description: 'Viết hàm in ra kiểu dữ liệu tương ứng của mảng các giá trị thử nghiệm.',
    starterCode: `const items = [123, "Xin chào", false, null, [1, 2], { a: 1 }];

items.forEach((item, index) => {
  const typeStr = Array.isArray(item) ? "array" : typeof item;
  console.log(\`Mục \${index + 1}: \${typeStr}\`);
});`,
    expectedConsoleOutput: 'Mục 1: number\nMục 2: string\nMục 3: boolean\nMục 4: object\nMục 5: array\nMục 6: object',
    hint: 'Chạy thử để thấy Array.isArray phân biệt rõ mảng với object.',
    language: 'javascript'
  },
  exercises: {
    basic: {
      id: 'ex-2-3-1',
      lessonId: 'les-2-3',
      title: 'Bài tập Cơ bản: Kiểm tra biến số hợp lệ',
      difficulty: 'basic',
      learningObjectiveIds: ['LO2.3.1'],
      description: 'Cho biến input = 45. Viết câu lệnh kiểm tra: nếu typeof input === "number" in ra `Dữ liệu là dạng số`. Ngược lại in ra `Dữ liệu không phải là số`.',
      starterCode: `const input = 45;

// Viết câu lệnh kiểm tra kiểu tại đây:
`,
      solutionCode: `const input = 45;
if (typeof input === "number") {
  console.log("Dữ liệu là dạng số");
} else {
  console.log("Dữ liệu không phải là số");
}`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra input là số',
          expectedOutput: 'Dữ liệu là dạng số'
        }
      ],
      hints: ['Dùng if (typeof input === "number")'],
      explanation: 'So sánh kết quả typeof với chuỗi "number".'
    },
    intermediate: {
      id: 'ex-2-3-2',
      lessonId: 'les-2-3',
      title: 'Bài tập Trung bình: Bộ lọc phân loại tham số đa năng',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO2.3.2'],
      description: 'Viết hàm printType(val). Nếu là mảng (Array.isArray) in ra `Đây là mảng`. Nếu là null (val === null) in ra `Đây là null`. Nếu là hàm (typeof val === "function") in ra `Đây là hàm`. Còn lại in ra `Kiểu: [typeof val]`. Chạy thử với printType([1, 2, 3]).',
      starterCode: `function printType(val) {
  // Viết điều kiện:
  
}

printType([1, 2, 3]);`,
      solutionCode: `function printType(val) {
  if (Array.isArray(val)) {
    console.log("Đây là mảng");
  } else if (val === null) {
    console.log("Đây là null");
  } else if (typeof val === "function") {
    console.log("Đây là hàm");
  } else {
    console.log("Kiểu:", typeof val);
  }
}

printType([1, 2, 3]);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Phân loại chính xác mảng',
          expectedOutput: 'Đây là mảng'
        }
      ],
      hints: ['Array.isArray kiểm tra mảng trước typeof'],
      explanation: 'Thứ tự kiểm tra mảng và null phải đứng trước typeof object thông thường.'
    },
    challenge: {
      id: 'ex-2-3-3',
      lessonId: 'les-2-3',
      title: 'Bài tập Thử thách: Viết hàm getExactType chuẩn tuyệt đối',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO2.3.1', 'LO2.3.2'],
      description: 'Viết hàm getExactType(data) phân biệt chính xác: "null" nếu là null, "array" nếu là mảng, và typeof data cho các trường hợp còn lại. In ra kết quả khi chạy với null và mảng rỗng [].',
      starterCode: `function getExactType(data) {
  // Viết logic tại đây:
  
}

console.log(getExactType(null));
console.log(getExactType([]));`,
      solutionCode: `function getExactType(data) {
  if (data === null) return "null";
  if (Array.isArray(data)) return "array";
  return typeof data;
}

console.log(getExactType(null));
console.log(getExactType([]));`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra trả về chuẩn "null" và "array"',
          expectedOutput: 'null\narray'
        }
      ],
      hints: ['Kiểm tra data === null trước, sau đó Array.isArray(data)'],
      explanation: 'Hàm tiện ích getExactType giải quyết trọn vẹn mọi cạm bẫy của toán tử typeof.'
    }
  },
  quiz: {
    id: 'quiz-2-3',
    lessonId: 'les-2-3',
    title: 'Trắc nghiệm: Toán tử typeof',
    passingScore: 70,
    questions: [
      {
        id: 'q-2-3-1',
        lessonId: 'les-2-3',
        learningObjectiveId: 'LO2.3.2',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'Cách kiểm tra nào sau đây là CHUẨN XÁC NHẤT để biết một biến data có phải là Mảng (Array) hay không?',
        options: [
          { id: 'a', text: 'typeof data === "array"' },
          { id: 'b', text: 'Array.isArray(data)' },
          { id: 'c', text: 'data instanceof Array && typeof data === "object"' },
          { id: 'd', text: 'typeof data === "object"' }
        ],
        correctAnswer: 'b',
        explanation: 'Array.isArray(data) là phương thức chuẩn của ngôn ngữ để nhận diện mảng, hoạt động an toàn ngay cả xuyên qua các iframes.',
        relatedLessonId: 'les-2-3'
      }
    ]
  },
  summary: [
    'Toán tử typeof luôn trả về một chuỗi ký tự mô tả kiểu dữ liệu.',
    'Nhớ kỹ: typeof không bao giờ trả về "array" (mảng trả về "object").',
    'Dùng Array.isArray() để kiểm tra mảng và so sánh val === null để kiểm tra null.'
  ],
  suggestedBookmarks: [
    'Bảng 8 giá trị khả dĩ mà toán tử typeof có thể trả về',
    'Phương thức Array.isArray() và kiểm tra cấu trúc dữ liệu đa tầng'
  ]
};

export const LESSON_2_4: Lesson = {
  id: 'les-2-4',
  moduleId: 'mod-2',
  track: 'javascript',
  language: 'javascript',
  title: '2.4 Ép kiểu tường minh & ngầm định (Type Coercion)',
  order: 4,
  durationMinutes: 50,
  difficulty: 'Trung bình',
  prerequisites: [
    'Đã học các kiểu dữ liệu nguyên thủy',
    'Hiểu toán tử cộng chuỗi và số học'
  ],
  learningObjectives: [
    {
      id: 'LO2.4.1',
      code: 'LO2.4.1',
      title: 'Ép kiểu tường minh (Explicit Casting)',
      description: 'Sử dụng các hàm chuyển đổi chuẩn: String(), Number(), Boolean() và hàm phân tích parseInt(), parseFloat().',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    },
    {
      id: 'LO2.4.2',
      code: 'LO2.4.2',
      title: 'Hiểu cơ chế ép kiểu ngầm định (Implicit Coercion)',
      description: 'Dự đoán chính xác kết quả ép kiểu tự động của toán tử +, -, *, / khi kết hợp chuỗi và số.',
      bloomLevel: 'Analyze',
      masteryPercentage: 82
    }
  ],
  sections: [
    {
      id: 'sec-2-4-1',
      lessonId: 'les-2-4',
      order: 1,
      conceptName: 'Ép kiểu tường minh (Explicit Type Conversion)',
      title: '1. Chuyển đổi kiểu chủ động với String(), Number(), Boolean()',
      explanation: 'Ép kiểu tường minh là khi lập trình viên chủ động dùng các hàm chuyển đổi để biến một giá trị từ kiểu này sang kiểu khác một cách minh bạch, giúp mã nguồn rõ ràng và tránh lỗi tiềm ẩn.',
      syntax: 'String(val)  // chuyển sang chuỗi\nNumber(val)  // chuyển sang số\nBoolean(val) // chuyển sang true/false',
      codeExample: `// 1. Chuyển sang Number
console.log(Number("123"));    // 123
console.log(Number("12.5"));   // 12.5
console.log(Number("abc"));    // NaN (Không phải số hợp lệ!)
console.log(parseInt("50px")); // 50 (Tách số từ chuỗi có đơn vị)

// 2. Chuyển sang String
console.log(String(100));      // "100"
console.log(String(true));     // "true"`,
      lineByLineExplanation: [
        { line: 2, text: 'Number() chuyển đổi chuỗi số thành kiểu number thực tế.' },
        { line: 4, text: 'Chuỗi không thể diễn giải thành số sẽ cho kết quả NaN.' },
        { line: 5, text: 'parseInt đọc từ đầu chuỗi và dừng lại khi gặp ký tự không phải số, rất hữu ích khi lấy kích thước CSS.' }
      ],
      commonMistakes: [
        'Dùng Number() với chuỗi chứa chữ cái (ví dụ: Number("100k") -> ra NaN; hãy dùng parseInt("100k") nếu muốn lấy số 100).'
      ],
      whenToUse: 'Luôn ép kiểu Number() cho các giá trị đọc từ input form HTML (vì giá trị `input.value` luôn là String!).',
      whenNotToUse: 'Không lạm dụng ép kiểu khi dữ liệu đã ở đúng định dạng mong muốn.',
      realWorldUseCase: 'Đọc số lượng từ ô input: `const qty = Number(document.getElementById("qty").value);`.'
    },
    {
      id: 'sec-2-4-2',
      lessonId: 'les-2-4',
      order: 2,
      conceptName: 'Ép kiểu ngầm định (Implicit Coercion)',
      title: '2. Cạm bẫy ép kiểu ngầm định trong toán tử',
      explanation: 'Khi thực hiện phép tính giữa hai kiểu dữ liệu khác nhau, JavaScript Engine sẽ tự động ép kiểu ngầm định. Quy tắc vàng cần nhớ: (1) Toán tử cộng (+) ưu tiên chuỗi nếu có 1 vế là String; (2) Các toán tử trừ (-), nhân (*), chia (/) luôn ép cả hai vế sang Number.',
      syntax: '"5" + 2 -> "52" (Cộng chuỗi)\n"5" - 2 -> 3    (Trừ số học)\n"10" * "2" -> 20',
      codeExample: `console.log("5" + 2); // "52" (Toán tử + ưu tiên ghép chuỗi!)
console.log("5" - 2); // 3    (Toán tử - ép chuỗi "5" thành số 5)
console.log("6" * "3");// 18   (Toán tử * ép cả hai thành số)
console.log(true + 1); // 2    (true bị ép thành 1)
console.log(false + 1);// 1    (false bị ép thành 0)`,
      lineByLineExplanation: [
        { line: 1, text: 'Vì có chuỗi "5", toán tử + biến số 2 thành chuỗi "2" và nối lại thành "52".' },
        { line: 2, text: 'Toán tử trừ không tồn tại cho chuỗi, nên JS ép chuỗi "5" thành số 5 rồi trừ 2 được 3.' }
      ],
      commonMistakes: [
        'Cộng số tiền từ input mà quên ép kiểu: `100 + "50"` thành `10050` thay vì `150`!'
      ],
      whenToUse: 'Hiểu cơ chế này để phát hiện nguyên nhân vì sao kết quả tính toán bị sai lệch hàng chục lần.',
      whenNotToUse: 'Tuyệt đối không dựa dẫm vào ép kiểu ngầm định để viết code ngắn hơn (như dùng +"5" thay cho Number("5")). Hãy viết rõ ràng.',
      realWorldUseCase: 'Sửa lỗi logic tính tổng tiền giỏ hàng khi người dùng nhập số lượng sản phẩm.'
    }
  ],
  predictOutputs: [
    {
      id: 'po-2-4-1',
      code: `console.log("10" - "4" + 2);`,
      question: 'Biểu thức trên cho kết quả là gì?',
      options: ['"62"', '8', '"10-42"', 'NaN'],
      correctAnswer: '8',
      explanation: 'Thứ tự từ trái sang phải: "10" - "4" thực hiện phép trừ số học cho ra số 6. Sau đó 6 + 2 thực hiện phép cộng số học cho ra 8.',
      hint: 'Toán tử trừ ép sang số trước: "10" - "4" = 6.'
    },
    {
      id: 'po-2-4-2',
      code: `console.log("10" + 4 - 2);`,
      question: 'Biểu thức này in ra kết quả gì?',
      options: ['12', '102', '"102"', 'NaN'],
      correctAnswer: '102',
      explanation: '"10" + 4 tạo ra chuỗi "104". Sau đó "104" - 2 bị ép sang số: 104 - 2 = 102 (kiểu Number).',
      hint: 'Phép cộng với chuỗi diễn ra trước, sau đó phép trừ ép chuỗi về số.'
    }
  ],
  interactivePractice: {
    id: 'ip-2-4',
    title: 'Thực hành: Khắc phục lỗi cộng chuỗi trong giỏ hàng',
    description: 'Sửa đoạn mã bị lỗi cộng chuỗi khi tính tổng tiền bằng cách dùng Number() ép kiểu tường minh.',
    starterCode: `const itemPrice = "250000"; // Đọc từ input string
const shipFee = 30000;

// Sửa dòng dưới bằng cách ép kiểu Number(itemPrice):
const total = Number(itemPrice) + shipFee;
console.log("Tổng tiền:", total);`,
    expectedConsoleOutput: 'Tổng tiền: 280000',
    hint: 'Dùng Number(itemPrice) để chuyển "250000" thành 250000.',
    language: 'javascript'
  },
  exercises: {
    basic: {
      id: 'ex-2-4-1',
      lessonId: 'les-2-4',
      title: 'Bài tập Cơ bản: Ép kiểu chuỗi số thập phân',
      difficulty: 'basic',
      learningObjectiveIds: ['LO2.4.1'],
      description: 'Cho biến strScore = "8.75". Dùng parseFloat() hoặc Number() chuyển sang số thực và in ra: `Điểm số đã chuyển: [số]`.',
      starterCode: `const strScore = "8.75";

// Chuyển sang số và in kết quả:
`,
      solutionCode: `const strScore = "8.75";
const numScore = parseFloat(strScore);
console.log("Điểm số đã chuyển:", numScore);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra chuyển đổi đúng điểm 8.75',
          expectedOutput: 'Điểm số đã chuyển: 8.75'
        }
      ],
      hints: ['Dùng parseFloat(strScore) hoặc Number(strScore)'],
      explanation: 'parseFloat bảo toàn phần thập phân của chuỗi số.'
    },
    intermediate: {
      id: 'ex-2-4-2',
      lessonId: 'les-2-4',
      title: 'Bài tập Trung bình: Trích xuất số lượng từ chuỗi kích thước',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO2.4.1'],
      description: 'Cho mảng kích thước: `["120px", "450px", "80px"]`. Dùng parseInt() chuyển đổi từng phần tử thành số và in ra tổng của 3 kích thước: `Tổng chiều rộng: [kết quả]`.',
      starterCode: `const sizes = ["120px", "450px", "80px"];

// Tính tổng các số nguyên trích xuất được:
`,
      solutionCode: `const sizes = ["120px", "450px", "80px"];
const sum = parseInt(sizes[0]) + parseInt(sizes[1]) + parseInt(sizes[2]);
console.log("Tổng chiều rộng:", sum);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra tổng 120 + 450 + 80 = 650',
          expectedOutput: 'Tổng chiều rộng: 650'
        }
      ],
      hints: ['parseInt("120px") tự động bỏ đuôi "px" và lấy số 120'],
      explanation: 'parseInt là giải pháp tối ưu khi làm việc với chuỗi đơn vị CSS.'
    },
    challenge: {
      id: 'ex-2-4-3',
      lessonId: 'les-2-4',
      title: 'Bài tập Thử thách: Xử lý mảng đầu vào lẫn lộn kiểu dữ liệu',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO2.4.1', 'LO2.4.2'],
      description: 'Cho mảng `mixed = ["10", 20, "30", "chữ", 40]`. Tính tổng các phần tử hợp lệ bằng cách ép kiểu Number(). Nếu kết quả là NaN thì bỏ qua. In ra: `Tổng hợp lệ: [kết quả]`.',
      starterCode: `const mixed = ["10", 20, "30", "chữ", 40];
let total = 0;

// Duyệt và cộng các số hợp lệ:

console.log("Tổng hợp lệ:", total);`,
      solutionCode: `const mixed = ["10", 20, "30", "chữ", 40];
let total = 0;

for (let i = 0; i < mixed.length; i++) {
  const val = Number(mixed[i]);
  if (!Number.isNaN(val)) {
    total += val;
  }
}

console.log("Tổng hợp lệ:", total);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra tổng 10 + 20 + 30 + 40 = 100',
          expectedOutput: 'Tổng hợp lệ: 100'
        }
      ],
      hints: ['Dùng Number.isNaN(val) để lọc bỏ chuỗi "chữ"'],
      explanation: '10 + 20 + 30 + 40 = 100. Phần tử "chữ" ra NaN bị loại bỏ an toàn.'
    }
  },
  quiz: {
    id: 'quiz-2-4',
    lessonId: 'les-2-4',
    title: 'Trắc nghiệm: Ép kiểu trong JavaScript',
    passingScore: 70,
    questions: [
      {
        id: 'q-2-4-1',
        lessonId: 'les-2-4',
        learningObjectiveId: 'LO2.4.2',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'Biểu thức "10" - 3 và "10" + 3 lần lượt cho kết quả là gì?',
        options: [
          { id: 'a', text: '7 và 13' },
          { id: 'b', text: '7 và "103"' },
          { id: 'c', text: '"7" và "103"' },
          { id: 'd', text: 'NaN và "103"' }
        ],
        correctAnswer: 'b',
        explanation: 'Toán tử trừ (-) luôn ép chuỗi sang số (10 - 3 = 7 số), trong khi toán tử cộng (+) ưu tiên nối chuỗi khi có toán hạng chuỗi ("10" + 3 = "103").',
        relatedLessonId: 'les-2-4'
      }
    ]
  },
  summary: [
    'Luôn chủ động dùng Number() hoặc parseInt() khi nhận dữ liệu từ người dùng.',
    'Toán tử + ưu tiên ghép chuỗi nếu có ít nhất 1 toán hạng là String.',
    'Các toán tử số học khác (-, *, /, %) luôn ép về kiểu Number.'
  ],
  suggestedBookmarks: [
    'Quy tắc ép kiểu ngầm định của các toán tử JavaScript',
    'Phân biệt Number() vs parseInt() vs parseFloat()'
  ]
};

export const LESSON_2_5: Lesson = {
  id: 'les-2-5',
  moduleId: 'mod-2',
  track: 'javascript',
  language: 'javascript',
  title: '2.5 Template Literals và nội suy chuỗi hiện đại',
  order: 5,
  durationMinutes: 40,
  difficulty: 'Cơ bản',
  prerequisites: [
    'Hiểu kiểu chuỗi String trong JavaScript',
    'Biết cách nối chuỗi bằng dấu cộng (+)'
  ],
  learningObjectives: [
    {
      id: 'LO2.5.1',
      code: 'LO2.5.1',
      title: 'Cú pháp Template Literals chuẩn ES6',
      description: 'Sử dụng dấu backtick (`) và cú pháp nội suy biểu thức ${expression}.',
      bloomLevel: 'Apply',
      masteryPercentage: 95
    },
    {
      id: 'LO2.5.2',
      code: 'LO2.5.2',
      title: 'Viết chuỗi nhiều dòng và nhúng HTML template',
      description: 'Soạn thảo chuỗi nhiều dòng tự nhiên và kết xuất mã HTML trực quan không cần nối chuỗi lộn xộn.',
      bloomLevel: 'Create',
      masteryPercentage: 90
    }
  ],
  sections: [
    {
      id: 'sec-2-5-1',
      lessonId: 'les-2-5',
      order: 1,
      conceptName: 'Dấu Backtick & Cú pháp ${expression}',
      title: '1. Nội suy biểu thức linh hoạt với ${}',
      explanation: 'Trước ES6, lập trình viên phải nối chuỗi thủ công bằng dấu cộng (+) rất dễ thiếu dấu cách và khó đọc. Template Literals sử dụng cặp dấu nháy ngược (backticks: `` ` ``) cho phép đặt trực tiếp bất kỳ biểu thức JavaScript nào vào trong cú pháp `${biểu_thức}`.',
      syntax: '`Văn bản ${tenBien} văn bản tiếp ${bieuThuc}`',
      codeExample: `const hoTen = "Nguyễn Văn An";
const lop = "WD18301";
const diemTB = 8.5;

// Cách cũ với dấu + (dễ lỗi)
const strCu = "Sinh viên " + hoTen + " lớp " + lop + " có điểm: " + diemTB;

// Cách mới với Template Literals (trong sáng, chuyên nghiệp)
const strMoi = \`Sinh viên \${hoTen} lớp \${lop} có điểm: \${diemTB} (\${diemTB >= 8.0 ? "Giỏi" : "Khá"})\`;

console.log(strMoi);`,
      lineByLineExplanation: [
        { line: 9, text: 'Nội suy biến hoTen, lop và cả toán tử 3 ngôi kiểm tra xếp loại ngay trong chuỗi.' }
      ],
      commonMistakes: [
        'Nhầm lẫn dấu nháy đơn (\') với dấu nháy ngược (`) nằm dưới phím Esc trên bàn phím.',
        'Quên ký tự $ trước cặp ngoặc nhọn: viết `{bien}` thay vì `${bien}`.'
      ],
      whenToUse: 'Dùng cho mọi câu lệnh ghép chuỗi văn bản, câu thông báo và thông điệp động.',
      whenNotToUse: 'Không bắt buộc với các chuỗi ngắn cố định không có biến (như "error" hay "active").',
      realWorldUseCase: 'Render thẻ giao diện HTML động từ dữ liệu JSON trả về của máy chủ.'
    },
    {
      id: 'sec-2-5-2',
      lessonId: 'les-2-5',
      order: 2,
      conceptName: 'Chuỗi nhiều dòng (Multiline Strings)',
      title: '2. Viết chuỗi nhiều dòng và tạo khối HTML Template',
      explanation: 'Dấu backtick cho phép bạn xuống dòng tự nhiên trong mã nguồn mà không cần phải dùng ký tự thoát `\\n` hay phép nối chuỗi phức tạp. Điều này cực kỳ hữu ích khi tạo các đoạn mã HTML để gán vào thuộc tính `innerHTML` của phần tử.',
      syntax: 'const html = `\n  <div class="card">\n    <h3>${title}</h3>\n  </div>\n`;',
      codeExample: `const course = {
  title: "Lập trình JavaScript Nâng cao",
  duration: 40,
  instructor: "Thầy Nguyễn Nam Khánh"
};

const cardHtml = \`
  <article class="course-card">
    <h2>\${course.title}</h2>
    <p>Thời lượng: \${course.duration} giờ</p>
    <p>Giảng viên: \${course.instructor}</p>
  </article>
\`;

console.log(cardHtml.trim());`,
      lineByLineExplanation: [
        { line: 7, text: 'Chuỗi nhiều dòng giữ nguyên định dạng thụt lề và xuống dòng một cách tự nhiên.' }
      ],
      commonMistakes: [
        'Xuống dòng trong dấu nháy kép thông thường "..." gây lỗi cú pháp SyntaxError: Invalid or unexpected token.'
      ],
      whenToUse: 'Dùng khi tạo template email, câu truy vấn SQL, hoặc template HTML components.',
      whenNotToUse: 'Cần cẩn trọng khi chèn chuỗi người dùng nhập trực tiếp vào HTML để phòng ngừa lỗ hổng bảo mật XSS (Cross-Site Scripting).',
      realWorldUseCase: 'Tạo danh sách thẻ sản phẩm hiển thị trên trang danh mục bán hàng điện tử.'
    }
  ],
  predictOutputs: [
    {
      id: 'po-2-5-1',
      code: `const a = 5;
const b = 10;
console.log(\`Tổng của \${a} và \${b} là \${a + b}\`);`,
      question: 'Câu lệnh trên in ra màn hình chuỗi gì?',
      options: [
        '"Tổng của 5 và 10 là 15"',
        '"Tổng của a và b là a + b"',
        '"Tổng của 5 và 10 là 510"',
        'TypeError'
      ],
      correctAnswer: '"Tổng của 5 và 10 là 15"',
      explanation: 'Bên trong ${a + b}, biểu thức số học 5 + 10 được tính toán cho ra 15 và điền vào vị trí tương ứng.',
      hint: '${} có thể chứa bất kỳ biểu thức tính toán nào.'
    }
  ],
  interactivePractice: {
    id: 'ip-2-5',
    title: 'Thực hành: Tạo template thẻ sinh viên bằng backtick',
    description: 'Dùng template literals để hoàn thiện chuỗi giới thiệu theo mẫu.',
    starterCode: `const name = "Lê Hoàng Long";
const gpa = 3.6;
const status = gpa >= 3.2 ? "Đạt học bổng" : "Bình thường";

console.log(\`[FPT Poly] Sinh viên: \${name} | GPA: \${gpa} (\${status})\`);`,
    expectedConsoleOutput: '[FPT Poly] Sinh viên: Lê Hoàng Long | GPA: 3.6 (Đạt học bổng)',
    hint: 'Chạy thử để quan sát kết quả nội suy.',
    language: 'javascript'
  },
  exercises: {
    basic: {
      id: 'ex-2-5-1',
      lessonId: 'les-2-5',
      title: 'Bài tập Cơ bản: Tạo thông điệp chào mừng cá nhân hóa',
      difficulty: 'basic',
      learningObjectiveIds: ['LO2.5.1'],
      description: 'Cho biến username = "Admin". Dùng template literals in ra: `Chào mừng bạn Admin quay trở lại hệ thống!`.',
      starterCode: `const username = "Admin";

// In câu chào mừng với template literals:
`,
      solutionCode: `const username = "Admin";
console.log(\`Chào mừng bạn \${username} quay trở lại hệ thống!\`);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra in đúng câu chào',
          expectedOutput: 'Chào mừng bạn Admin quay trở lại hệ thống!'
        }
      ],
      hints: ['Dùng dấu backtick ` và ${username}'],
      explanation: 'Template literals giúp câu lệnh ngắn gọn và sạch sẽ.'
    },
    intermediate: {
      id: 'ex-2-5-2',
      lessonId: 'les-2-5',
      title: 'Bài tập Trung bình: Tạo chuỗi hóa đơn nhiều dòng',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO2.5.2'],
      description: 'Cho sản phẩm "Chuột không dây", số lượng 2, đơn giá 150000. Dùng template literals nhiều dòng in ra chính xác:\n`--- HÓA ĐƠN ---\nSản phẩm: Chuột không dây\nSố lượng: 2\nThành tiền: 300000 VNĐ`',
      starterCode: `const item = "Chuột không dây";
const qty = 2;
const price = 150000;

// In hóa đơn nhiều dòng:
`,
      solutionCode: `const item = "Chuột không dây";
const qty = 2;
const price = 150000;
console.log(\`--- HÓA ĐƠN ---
Sản phẩm: \${item}
Số lượng: \${qty}
Thành tiền: \${qty * price} VNĐ\`);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra in đúng 4 dòng hóa đơn',
          expectedOutput: '--- HÓA ĐƠN ---\nSản phẩm: Chuột không dây\nSố lượng: 2\nThành tiền: 300000 VNĐ'
        }
      ],
      hints: ['Xuống dòng tự nhiên bên trong cặp dấu backticks ` `'],
      explanation: 'Backticks cho phép xuống dòng trực tiếp mà không cần dùng \\n.'
    },
    challenge: {
      id: 'ex-2-5-3',
      lessonId: 'les-2-5',
      title: 'Bài tập Thử thách: Sinh thẻ HTML danh sách kỹ năng',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO2.5.2'],
      description: 'Cho mảng skills = ["HTML5", "CSS3", "JavaScript"]. Dùng map và join để sinh ra danh sách thẻ `<li>` bên trong `<ul>` dạng:\n`<ul>\n  <li>HTML5</li>\n  <li>CSS3</li>\n  <li>JavaScript</li>\n</ul>`',
      starterCode: `const skills = ["HTML5", "CSS3", "JavaScript"];

// Sinh ra danh sách HTML và in bằng console.log:
`,
      solutionCode: `const skills = ["HTML5", "CSS3", "JavaScript"];
const listItems = skills.map(s => \`  <li>\${s}</li>\`).join("\\n");
console.log(\`<ul>\\n\${listItems}\\n</ul>\`);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra cấu trúc thẻ ul và li',
          expectedOutput: '<ul>\n  <li>HTML5</li>\n  <li>CSS3</li>\n  <li>JavaScript</li>\n</ul>'
        }
      ],
      hints: ['Dùng skills.map(s => `  <li>${s}</li>`).join("\\n")'],
      explanation: 'Kỹ thuật kinh điển để tạo danh sách HTML động từ mảng dữ liệu.'
    }
  },
  quiz: {
    id: 'quiz-2-5',
    lessonId: 'les-2-5',
    title: 'Trắc nghiệm: Template Literals ES6',
    passingScore: 70,
    questions: [
      {
        id: 'q-2-5-1',
        lessonId: 'les-2-5',
        learningObjectiveId: 'LO2.5.1',
        type: 'multiple_choice',
        difficulty: 'easy',
        prompt: 'Ký tự nào sau đây được sử dụng để bao bọc một chuỗi Template Literals trong JavaScript?',
        options: [
          { id: 'a', text: 'Dấu nháy kép (" ")' },
          { id: 'b', text: 'Dấu nháy đơn (\' \')' },
          { id: 'c', text: 'Dấu nháy ngược hay backticks (` `)' },
          { id: 'd', text: 'Dấu ngoặc kép đặc biệt (« »)' },
        ],
        correctAnswer: 'c',
        explanation: 'Dấu nháy ngược backtick (`) là cú pháp bắt buộc của Template Literals trong chuẩn ES6.',
        relatedLessonId: 'les-2-5'
      }
    ]
  },
  summary: [
    'Template Literals (ES6) sử dụng dấu backticks (` `) thay thế hoàn hảo cho phép nối chuỗi cũ.',
    'Cú pháp ${expression} có thể chứa biến, hàm, phép toán hoặc biểu thức 3 ngôi.',
    'Cho phép viết chuỗi nhiều dòng tự nhiên, cực kỳ lý tưởng để tạo HTML Template.'
  ],
  suggestedBookmarks: [
    'Cú pháp Tagged Template Literals nâng cao (thư viện styled-components)',
    'Các lưu ý bảo mật chống XSS khi render chuỗi Template vào DOM'
  ]
};

export const JS_MODULE_2_LESSONS: Lesson[] = [
  LESSON_2_1,
  LESSON_2_2,
  LESSON_2_3,
  LESSON_2_4,
  LESSON_2_5
];
