import { Lesson, Question, Exercise, PredictOutputItem } from '../types';

export const SAMPLE_LESSON: Lesson = {
  id: 'les-2-1',
  moduleId: 'mod-2',
  title: 'Khai báo biến với let, const và Kiểu dữ liệu nguyên thủy',
  order: 1,
  durationMinutes: 45,
  difficulty: 'Cơ bản',
  prerequisites: [
    'Biết cách mở trình duyệt và công cụ DevTools Console (F12)',
    'Hiểu cách nhúng thẻ <script> hoặc chạy file JS độc lập',
    'Biết ý nghĩa câu lệnh console.log()'
  ],
  learningObjectives: [
    {
      id: 'LO2.1',
      code: 'LO2.1',
      title: 'Phân biệt let, const và var',
      description: 'Giải thích được sự khác nhau căn bản về phạm vi (scope), tính tái gán (re-assignment) và hoisting giữa let, const và var.',
      bloomLevel: 'Understand',
      masteryPercentage: 82
    },
    {
      id: 'LO2.2',
      code: 'LO2.2',
      title: 'Khai báo biến đúng chuẩn cú pháp hiện đại',
      description: 'Khai báo biến chính xác bằng từ khóa phù hợp với mục đích lưu trữ (hằng số vs giá trị biến thiên) theo quy tắc camelCase.',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    },
    {
      id: 'LO2.3',
      code: 'LO2.3',
      title: 'Nhận diện & Sử dụng các kiểu dữ liệu nguyên thủy',
      description: 'Phân biệt chính xác 5 kiểu dữ liệu nguyên thủy phổ biến: Number, String, Boolean, null, undefined và kiểm tra với typeof.',
      bloomLevel: 'Analyze',
      masteryPercentage: 75
    },
    {
      id: 'LO2.4',
      code: 'LO2.4',
      title: 'Dự đoán & Xử lý lỗi gán hằng số (TypeError)',
      description: 'Dự đoán chính xác kết quả thực thi của đoạn mã có gán lại biến const và sửa lỗi logic/runtime liên quan.',
      bloomLevel: 'Analyze',
      masteryPercentage: 85
    },
    {
      id: 'LO2.5',
      code: 'LO2.5',
      title: 'Xây dựng module tính toán biến số thực tế',
      description: 'Vận dụng biến và kiểu dữ liệu để tính toán hóa đơn bán hàng hoặc thông tin hồ sơ sinh viên thực tế.',
      bloomLevel: 'Create',
      masteryPercentage: 70
    }
  ],
  sections: [
    {
      id: 'sec-2-1-1',
      lessonId: 'les-2-1',
      order: 1,
      title: '1. Khái niệm Biến (Variable) và 3 từ khóa: const, let, var',
      conceptName: 'Biến và từ khóa khai báo (let & const)',
      explanation: 'Biến là một vùng nhớ có tên (identifier) dùng để lưu trữ dữ liệu trong suốt quá trình chương trình chạy. Trong chuẩn JavaScript hiện đại (ES6+), ta dùng `const` cho giá trị cố định (hằng số) và `let` cho giá trị có thể thay đổi. Tuyệt đối hạn chế dùng `var` vì cơ chế phạm vi lỏng lẻo dễ sinh lỗi tiềm ẩn.',
      syntax: '// Khai báo hằng số (không thể gán lại):\nconst TEN_BIEN = giaTriKhoiTao;\n\n// Khai báo biến có thể thay đổi:\nlet tenBien = giaTriKhoiTao;\ntenBien = giaTriMoi;',
      codeExample: `// 1. Khai báo hằng số với const
const PI = 3.14159;
const schoolName = "Cao đẳng FPT Polytechnic";
// PI = 3.14; // ❌ Gây lỗi: TypeError: Assignment to constant variable.

// 2. Khai báo biến có thể cập nhật với let
let studentScore = 7.5;
console.log("Điểm ban đầu:", studentScore);

studentScore = 8.5; // ✅ Hợp lệ: let cho phép gán lại
console.log("Điểm sau cải thiện:", studentScore);`,
      lineByLineExplanation: [
        { line: 1, text: "Dòng 2: Khai báo hằng số PI lưu số Pi. Dùng chữ hoa hoặc camelCase đều được." },
        { line: 2, text: "Dòng 3: Khai báo trường học bằng const vì tên trường không thay đổi trong phiên làm việc." },
        { line: 3, text: "Dòng 4: Nếu cố gán PI = 3.14, JS sẽ dừng ngay lập tức và ném lỗi TypeError." },
        { line: 4, text: "Dòng 7: Khai báo điểm số bằng let vì sinh viên có thể cải thiện điểm sau kiểm tra." },
        { line: 5, text: "Dòng 10: Gán giá trị mới 8.5 vào biến studentScore, vùng nhớ được cập nhật thành công." }
      ],
      commonMistakes: [
        'Khai báo `const` mà không gán ngay giá trị ban đầu: `const a;` (Lỗi SyntaxError: Missing initializer in const declaration).',
        'Cố tình gán lại giá trị cho biến được khai báo bằng `const`.',
        'Khai báo trùng tên biến cùng cấp bằng `let` trong cùng một khối: `let x = 1; let x = 2;` (Lỗi SyntaxError).',
        'Dùng biến trước khi khai báo dẫn tới Temporal Dead Zone (TDZ).'
      ],
      whenToUse: 'Quy tắc ngầm định của lập trình viên chuyên nghiệp: Luôn ưu tiên dùng `const` mặc định cho mọi biến. Chỉ đổi sang `let` khi chắc chắn biến đó cần cập nhật lại giá trị (như biến đếm vòng lặp, tổng tích lũy, trạng thái thay đổi).',
      whenNotToUse: 'Không dùng `var` trong các dự án mới vì `var` không có block scope (phạm vi khối) và dễ bị lỗi Hoisting âm thầm.',
      realWorldUseCase: 'Trong ứng dụng thương mại điện tử, `const TAX_RATE = 0.1` (thuế suất VAT 10%) là hằng số, còn `let cartTotal = 0` (tổng tiền giỏ hàng) sẽ thay đổi mỗi khi người dùng bấm thêm sản phẩm vào giỏ.'
    },
    {
      id: 'sec-2-1-2',
      lessonId: 'les-2-1',
      order: 2,
      title: '2. Các kiểu dữ liệu nguyên thủy (Primitive Data Types)',
      conceptName: 'Kiểu dữ liệu nguyên thủy & typeof',
      explanation: 'JavaScript có 7 kiểu dữ liệu nguyên thủy cơ bản. Ở cấp độ nền tảng cao đẳng, sinh viên cần làm chủ 5 kiểu thiết yếu: Number (số thực và nguyên), String (chuỗi ký tự), Boolean (true/false logic), null (giá trị rỗng có chủ ý) và undefined (biến đã khai báo nhưng chưa được gán giá trị). Toán tử `typeof` dùng để xác định kiểu dữ liệu của bất kỳ biến nào.',
      syntax: 'typeof giaTri;\n// Hoặc:\ntypeof(giaTri);',
      codeExample: `// 1. Number (số nguyên hoặc số thập phân)
const age = 20;
const price = 49.99;
console.log(typeof age);   // "number"
console.log(typeof price); // "number"

// 2. String (chuỗi đặt trong nháy kép "", nháy đơn '' hoặc backticks \`\`)
const studentName = "Nguyễn Hoàng Nam";
const greeting = \`Xin chào, \${studentName}!\`; // Template literal
console.log(typeof studentName); // "string"

// 3. Boolean (chỉ nhận true hoặc false)
const isEnrolled = true;
const hasPassed = false;
console.log(typeof isEnrolled); // "boolean"

// 4. undefined (chưa khởi tạo) vs null (rỗng có chủ đích)
let unassignedVar;
console.log(unassignedVar);        // undefined
console.log(typeof unassignedVar); // "undefined"

let emptyProfile = null;
console.log(emptyProfile);         // null
console.log(typeof emptyProfile);  // "object" ⚠️ (Bug lịch sử nổi tiếng của JS!)`,
      lineByLineExplanation: [
        { line: 1, text: "Dòng 2-3: JavaScript không chia int hay float riêng, tất cả đều là kiểu Number (chuẩn IEEE 754)." },
        { line: 2, text: "Dòng 8-9: String có thể dùng dấu backticks ` để nội suy biến dễ dàng bằng cú pháp ${biến}." },
        { line: 3, text: "Dòng 14-15: Boolean là xương sống của mọi câu lệnh rẽ nhánh điều kiện if/else." },
        { line: 4, text: "Dòng 19-21: Khi khai báo 'let unassignedVar;' mà chưa gán, JS tự gán giá trị 'undefined'." },
        { line: 5, text: "Dòng 24-26: null thể hiện 'không có giá trị'. typeof null trả về 'object' do lỗi thiết kế phiên bản đầu tiên của JS năm 1995." }
      ],
      commonMistakes: [
        'Nhầm lẫn giữa `null` (lập trình viên cố tình gán rỗng) và `undefined` (hệ thống chưa tìm thấy giá trị gán).',
        'Viết số kèm đơn vị tiền tệ mà không tách chuỗi: `const price = 100k;` (Lỗi cú pháp).',
        'Gõ nhầm chữ hoa chữ thường: `True` hoặc `False` thay vì `true`, `false` viết thường.',
        'Khai báo số điện thoại bằng kiểu Number làm mất số 0 ở đầu (ví dụ 0987123456 biến thành 987123456 -> Phải lưu số điện thoại bằng String!).'
      ],
      whenToUse: 'Dùng String khi lưu văn bản, mã sinh viên, số điện thoại, CCCD. Dùng Number khi cần tính toán cộng trừ nhân chia. Dùng Boolean cho cờ trạng thái (isActive, isLoggedIn, isCompleted).',
      whenNotToUse: 'Tránh so sánh trực tiếp kiểu dữ liệu mà không nắm rõ ép kiểu tự động (implicit coercion).',
      realWorldUseCase: 'Khi nhận thông tin đăng nhập từ form web: `isLoggedIn: Boolean`, `loginAttempts: Number`, `userToken: String`, `currentUser: null` nếu chưa đăng nhập.'
    }
  ],
  predictOutputs: [
    {
      id: 'po-1',
      code: `let x = 15;
let y = 5;
const z = x + y;
x = 20;
console.log(z);`,
      question: 'Kết quả in ra màn hình console ở dòng cuối cùng là gì?',
      options: ['20', '25', '15', 'NaN'],
      correctAnswer: '20',
      hint: 'Hãy nhớ rằng phép tính z = x + y lấy giá trị của x và y tại thời điểm tính toán (khi x đang bằng 15). Việc thay đổi x sau đó có làm thay đổi z không?',
      explanation: 'Tại dòng 3, giá trị của z được tính bằng 15 + 5 = 20. Biến z lưu giá trị nguyên thủy (primitive value), nên việc gán x = 20 ở dòng 4 hoàn toàn không làm thay đổi giá trị đã lưu trong z. Kết quả in ra là 20.'
    },
    {
      id: 'po-2',
      code: `let a;
console.log(typeof a);
console.log(typeof null);`,
      question: 'Console sẽ lần lượt in ra hai dòng nào?',
      options: [
        '"undefined" và "null"',
        '"undefined" và "object"',
        '"null" và "undefined"',
        '"undefined" và "undefined"'
      ],
      correctAnswer: '"undefined" và "object"',
      hint: 'Nhớ lại "lỗi thiết kế lịch sử nổi tiếng" của JavaScript khi kiểm tra kiểu của null!',
      explanation: 'Biến a chưa được gán giá trị nên có giá trị undefined và typeof a là "undefined". Riêng typeof null trả về "object" do cơ chế lưu trữ type tag trong phiên bản đầu tiên của JavaScript.'
    },
    {
      id: 'po-3',
      code: `const language = "JavaScript";
language = "TypeScript";
console.log(language);`,
      question: 'Đoạn mã trên sẽ hiển thị điều gì khi chạy?',
      options: [
        '"TypeScript"',
        '"JavaScript"',
        'Lỗi TypeError: Assignment to constant variable',
        'undefined'
      ],
      correctAnswer: 'Lỗi TypeError: Assignment to constant variable',
      hint: 'Biến language được khai báo bằng từ khóa gì? Có được phép gán lại không?',
      explanation: 'Biến language được khai báo bằng `const` (hằng số). Khi cố gắng gán lại `language = "TypeScript"`, JavaScript sẽ ném ngoại lệ TypeError và dừng chương trình ngay lập tức.'
    }
  ],
  interactivePractice: {
    id: 'ip-2-1',
    title: 'Thực hành tương tác: Khai báo hồ sơ sinh viên',
    description: 'Viết các câu lệnh JavaScript để:\n1. Khai báo hằng số `studentCode` có giá trị "PS12345" (chuỗi).\n2. Khai báo biến `gpa` có giá trị ban đầu là 7.2 (số).\n3. Khai báo biến `isGraduated` có giá trị false (boolean).\n4. Sau kỳ học, cập nhật `gpa` thành 8.4.\n5. Dùng console.log() in ra câu chào: "Sinh viên PS12345 đạt GPA: 8.4".',
    starterCode: `// 1. Khai báo studentCode (const), gpa (let), isGraduated (let/const)
const studentCode = "PS12345";
let gpa = 7.2;
let isGraduated = false;

// 2. Cập nhật điểm GPA sau cải thiện
gpa = 8.4;

// 3. In thông báo ra màn hình console
console.log(\`Sinh viên \${studentCode} đạt GPA: \${gpa}\`);`,
    expectedConsoleOutput: 'Sinh viên PS12345 đạt GPA: 8.4',
    hint: 'Sử dụng const cho mã sinh viên cố định, let cho GPA có thể tăng, và dùng template literal với dấu backticks (`) để in kết quả.'
  },
  exercises: {
    basic: {
      id: 'ex-2-1-basic',
      lessonId: 'les-2-1',
      title: 'Level 1 – Basic: Tính tiền lương cơ bản',
      difficulty: 'basic',
      learningObjectiveIds: ['LO2.1', 'LO2.2'],
      description: 'Công ty cần tính tiền công ngày cho thực tập sinh. Hãy khai báo hằng số `HOURLY_RATE = 25000` (đồng/giờ). Khai báo biến `workingHours = 8`. Tạo biến `dailySalary` bằng tích của `HOURLY_RATE` và `workingHours`. Cuối cùng in giá trị `dailySalary` ra console.',
      starterCode: `// Viết code của bạn ở đây
const HOURLY_RATE = 25000;
let workingHours = 8;

// Tính dailySalary và console.log kết quả
let dailySalary = HOURLY_RATE * workingHours;
console.log(dailySalary);`,
      solutionCode: `const HOURLY_RATE = 25000;
let workingHours = 8;
const dailySalary = HOURLY_RATE * workingHours;
console.log(dailySalary);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'In ra đúng số tiền lương ngày 200000',
          expectedOutput: '200000'
        }
      ],
      hints: [
        'Dùng phép nhân * giữa hằng số và số giờ làm việc.',
        'Đừng quên gọi console.log(dailySalary) để xuất kết quả kiểm thử.'
      ],
      explanation: 'Sử dụng const cho đơn giá giờ làm cố định và tính toán đơn giản với toán tử nhân.'
    },
    intermediate: {
      id: 'ex-2-1-intermediate',
      lessonId: 'les-2-1',
      title: 'Level 2 – Intermediate: Hoán đổi giá trị 2 biến',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO2.1', 'LO2.2', 'LO2.4'],
      description: 'Cho 2 biến số `let a = 10;` và `let b = 25;`. Không được viết `a = 25; b = 10;` một cách thủ công, hãy dùng một biến trung gian `temp` để hoán đổi (swap) giá trị của 2 biến cho nhau. Sau đó in ra chuỗi chính xác theo định dạng: "a = 25, b = 10".',
      starterCode: `let a = 10;
let b = 25;

// Dùng biến let temp để hoán đổi
let temp = a;
a = b;
b = temp;

console.log(\`a = \${a}, b = \${b}\`);`,
      solutionCode: `let a = 10;
let b = 25;
let temp = a;
a = b;
b = temp;
console.log(\`a = \${a}, b = \${b}\`);`,
      testCases: [
        {
          id: 'tc-2',
          description: 'Hoán đổi thành công hai biến và in đúng định dạng',
          expectedOutput: 'a = 25, b = 10'
        }
      ],
      hints: [
        'Bước 1: Lưu giá trị của a vào temp.',
        'Bước 2: Gán giá trị của b vào a.',
        'Bước 3: Gán giá trị đã lưu trong temp vào b.'
      ],
      explanation: 'Thuật toán hoán vị kinh điển sử dụng biến thứ ba, giúp sinh viên hiểu sâu cơ chế gán và sao chép giá trị biến nguyên thủy.'
    },
    challenge: {
      id: 'ex-2-1-challenge',
      lessonId: 'les-2-1',
      title: 'Level 3 – Challenge: Hóa đơn tính cước vận chuyển (Shipping Bill)',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO2.2', 'LO2.3', 'LO2.5'],
      description: 'Một website bán sách trực tuyến tính tiền đơn hàng gồm:\n- `bookPrice = 85000` (giá 1 quyển sách)\n- `quantity = 3` (số lượng mua)\n- `shippingFee = 30000` (phí giao hàng mặc định)\n- Nếu tổng tiền sách (`bookPrice * quantity`) lớn hơn hoặc bằng 200,000đ thì được miễn phí giao hàng (nghĩa là `shippingFee = 0`).\nHãy viết chương trình tính toán và in ra đúng định dạng: "Tổng thanh toán: 255000đ" (vì 85000 * 3 = 255000 >= 200000 nên shippingFee = 0).',
      starterCode: `const bookPrice = 85000;
const quantity = 3;
let shippingFee = 30000;

// Tính subtotal, kiểm tra điều kiện miễn phí ship và tính totalBill
const subtotal = bookPrice * quantity;
if (subtotal >= 200000) {
  shippingFee = 0;
}
const totalBill = subtotal + shippingFee;

console.log(\`Tổng thanh toán: \${totalBill}đ\`);`,
      solutionCode: `const bookPrice = 85000;
const quantity = 3;
let shippingFee = 30000;

const subtotal = bookPrice * quantity;
if (subtotal >= 200000) {
  shippingFee = 0;
}
const totalBill = subtotal + shippingFee;
console.log(\`Tổng thanh toán: \${totalBill}đ\`);`,
      testCases: [
        {
          id: 'tc-3',
          description: 'Tính đúng tổng thanh toán có miễn phí ship',
          expectedOutput: 'Tổng thanh toán: 255000đ'
        }
      ],
      hints: [
        'Khai báo shippingFee bằng let vì nó có thể bị gán lại thành 0 nếu thỏa điều kiện freeship.',
        'Sử dụng câu lệnh điều kiện if (subtotal >= 200000) { shippingFee = 0; }'
      ],
      explanation: 'Bài toán kết hợp hằng số giá, biến số lượng, cập nhật phí ship theo ngưỡng giá trị và hiển thị hóa đơn chuẩn.'
    }
  },
  quiz: {
    id: 'quiz-2-1',
    lessonId: 'les-2-1',
    title: 'Kiểm tra năng lực bài học: Biến & Kiểu dữ liệu',
    passingScore: 70,
    timeLimitMinutes: 15,
    questions: [
      {
        id: 'q-1',
        lessonId: 'les-2-1',
        learningObjectiveId: 'LO2.1',
        type: 'multiple_choice',
        difficulty: 'easy',
        prompt: 'Khi khai báo một biến mà giá trị của nó KHÔNG BAO GIỜ thay đổi trong suốt vòng đời chương trình, từ khóa nào sau đây là chuẩn mực tốt nhất?',
        options: [
          { id: 'opt-a', text: 'var' },
          { id: 'opt-b', text: 'let' },
          { id: 'opt-c', text: 'const' },
          { id: 'opt-d', text: 'static' }
        ],
        correctAnswer: 'opt-c',
        explanation: 'Chuẩn mực hiện đại (ES6+) quy định: Luôn ưu tiên dùng `const` cho các giá trị bất biến (hằng số) để tránh lỗi vô tình gán đè dữ liệu.',
        relatedLessonId: 'les-2-1',
        errorAnalysis: 'Sinh viên chọn let thường chưa hình thành thói quen phân loại biến bất biến để đảm bảo tính an toàn dữ liệu.'
      },
      {
        id: 'q-2',
        lessonId: 'les-2-1',
        learningObjectiveId: 'LO2.3',
        type: 'multiple_choice',
        difficulty: 'easy',
        prompt: 'Giá trị trả về của biểu thức `typeof NaN` trong JavaScript là gì?',
        codeSnippet: 'console.log(typeof NaN);',
        options: [
          { id: 'opt-a', text: '"undefined"' },
          { id: 'opt-b', text: '"number"' },
          { id: 'opt-c', text: '"nan"' },
          { id: 'opt-d', text: '"null"' }
        ],
        correctAnswer: 'opt-b',
        explanation: 'Mặc dù viết tắt của "Not a Number", nhưng theo tiêu chuẩn IEEE 754 trong JavaScript, NaN là một giá trị số đặc biệt đại diện cho phép tính số học thất bại (ví dụ: 0 / "abc"). Do đó typeof NaN chính là "number".',
        relatedLessonId: 'les-2-1',
        errorAnalysis: 'Sinh viên hay nhầm lẫn vì chữ NaN có nghĩa là Not-a-Number nên nghĩ kiểu dữ liệu không phải number.'
      },
      {
        id: 'q-3',
        lessonId: 'les-2-1',
        learningObjectiveId: 'LO2.1',
        type: 'true_false',
        difficulty: 'easy',
        prompt: 'Đoạn mã sau có hợp lệ và chạy bình thường không? "const x; x = 10;"',
        codeSnippet: `const x;
x = 10;`,
        options: [
          { id: 'opt-true', text: 'Đúng (Hợp lệ)' },
          { id: 'opt-false', text: 'Sai (Lỗi SyntaxError)' }
        ],
        correctAnswer: 'opt-false',
        explanation: 'Sai! Biến khai báo bằng `const` bắt buộc phải được khởi tạo giá trị ngay tại thời điểm khai báo. Khai báo `const x;` không có giá trị sẽ lập tức báo lỗi cú pháp: Missing initializer in const declaration.',
        relatedLessonId: 'les-2-1'
      },
      {
        id: 'q-4',
        lessonId: 'les-2-1',
        learningObjectiveId: 'LO2.3',
        type: 'multiple_answer',
        difficulty: 'medium',
        prompt: 'Những kiểu dữ liệu nào dưới đây thuộc nhóm Kiểu dữ liệu nguyên thủy (Primitive Data Types) trong JavaScript? (Chọn TẤT CẢ các đáp án đúng)',
        options: [
          { id: 'opt-a', text: 'String' },
          { id: 'opt-b', text: 'Number' },
          { id: 'opt-c', text: 'Boolean' },
          { id: 'opt-d', text: 'Array' },
          { id: 'opt-e', text: 'undefined' }
        ],
        correctAnswer: ['opt-a', 'opt-b', 'opt-c', 'opt-e'],
        explanation: 'String, Number, Boolean, undefined (cùng với null, Symbol, BigInt) là các kiểu dữ liệu nguyên thủy. Riêng Array và Function thực chất là các kiểu đối tượng tham chiếu (Object reference types).',
        relatedLessonId: 'les-2-1',
        errorAnalysis: 'Sinh viên thường nhầm Array là kiểu nguyên thủy vì thường xuyên sử dụng từ bài đầu.'
      },
      {
        id: 'q-5',
        lessonId: 'les-2-1',
        learningObjectiveId: 'LO2.4',
        type: 'predict_output',
        difficulty: 'medium',
        prompt: 'Hãy dự đoán kết quả in ra màn hình Console của đoạn mã dưới đây:',
        codeSnippet: `let count = 1;
{
  let count = 99;
  console.log("Trong khối:", count);
}
console.log("Ngoài khối:", count);`,
        options: [
          { id: 'opt-a', text: '"Trong khối: 99" rồi "Ngoài khối: 99"' },
          { id: 'opt-b', text: '"Trong khối: 99" rồi "Ngoài khối: 1"' },
          { id: 'opt-c', text: 'Báo lỗi SyntaxError: Identifier count has already been declared' },
          { id: 'opt-d', text: '"Trong khối: 1" rồi "Ngoài khối: 1"' }
        ],
        correctAnswer: 'opt-b',
        explanation: 'Từ khóa `let` có phạm vi khối (Block Scope). Biến count = 99 bên trong dấu ngoặc nhọn {} là biến cục bộ mới (shadowing) che khuất biến ngoài trong phạm vi đó, nhưng không thay đổi giá trị biến count = 1 ở phạm vi bên ngoài.',
        relatedLessonId: 'les-2-1'
      },
      {
        id: 'q-6',
        lessonId: 'les-2-1',
        learningObjectiveId: 'LO2.3',
        type: 'code_completion',
        difficulty: 'medium',
        prompt: 'Điền từ khóa thích hợp vào chỗ trống để in ra chuỗi chào mừng bằng Template Literal:',
        codeSnippet: `const username = "Admin";
const msg = ____\Xin chào, \${username}!____;
console.log(msg);`,
        options: [
          { id: 'opt-a', text: 'Dấu nháy đơn \' \'' },
          { id: 'opt-b', text: 'Dấu nháy kép " "' },
          { id: 'opt-c', text: 'Dấu backticks ` `' },
          { id: 'opt-d', text: 'Dấu ngoặc đơn ( )' }
        ],
        correctAnswer: 'opt-c',
        explanation: 'Để sử dụng tính năng nội suy chuỗi (String Interpolation) với ký hiệu ${...}, ta bắt buộc phải bao bọc chuỗi bằng cặp dấu backticks ` ` (phím nằm dưới phím Esc trên bàn phím).',
        relatedLessonId: 'les-2-1'
      },
      {
        id: 'q-7',
        lessonId: 'les-2-1',
        learningObjectiveId: 'LO2.2',
        type: 'bug_finding',
        difficulty: 'medium',
        prompt: 'Dòng lệnh nào trong đoạn mã sau chứa lỗi làm chương trình dừng đột ngột?',
        codeSnippet: `1: const student = "Lê Thị Mai";
2: let score = 8.0;
3: student = "Lê Thị Lan";
4: score = score + 1;
5: console.log(student, score);`,
        options: [
          { id: 'opt-a', text: 'Dòng 1' },
          { id: 'opt-b', text: 'Dòng 2' },
          { id: 'opt-c', text: 'Dòng 3 (TypeError: Assignment to constant variable)' },
          { id: 'opt-d', text: 'Dòng 4' }
        ],
        correctAnswer: 'opt-c',
        explanation: 'Dòng 3 gây lỗi nghiêm trọng vì biến `student` đã được khai báo bằng `const` ở dòng 1 nên không được phép gán lại giá trị mới.',
        relatedLessonId: 'les-2-1'
      },
      {
        id: 'q-8',
        lessonId: 'les-2-1',
        learningObjectiveId: 'LO2.3',
        type: 'multiple_choice',
        difficulty: 'hard',
        prompt: 'Sự khác biệt cốt lõi giữa `null` và `undefined` trong ngữ nghĩa lập trình JavaScript là gì?',
        options: [
          { id: 'opt-a', text: 'Không có sự khác biệt, hai giá trị này hoàn toàn hoán đổi cho nhau.' },
          { id: 'opt-b', text: 'null đại diện cho sự vắng mặt giá trị một cách có chủ đích của lập trình viên, còn undefined nghĩa là biến đã khai báo nhưng chưa hề được gán giá trị.' },
          { id: 'opt-c', text: 'undefined là lỗi cú pháp, còn null là đối tượng hợp lệ.' },
          { id: 'opt-d', text: 'typeof của cả hai đều trả về "undefined".' }
        ],
        correctAnswer: 'opt-b',
        explanation: 'Về mặt ngữ nghĩa: `undefined` do engine của JavaScript tự động gán khi biến được tạo ra mà chưa có dữ liệu; còn `null` do lập trình viên chủ động gán để biểu thị "vùng nhớ này hiện thời không chứa đối tượng nào cả".',
        relatedLessonId: 'les-2-1'
      },
      {
        id: 'q-9',
        lessonId: 'les-2-1',
        learningObjectiveId: 'LO2.2',
        type: 'scenario',
        difficulty: 'hard',
        prompt: 'Tình huống thực tế: Bạn đang lập trình tính năng giỏ hàng cho website. Biến nào dưới đây BẮT BUỘC phải dùng `let` thay vì `const`?',
        options: [
          { id: 'opt-a', text: 'Mã số đơn hàng (orderId) sinh ra duy nhất khi người dùng vào trang' },
          { id: 'opt-b', text: 'Tỷ lệ thuế giá trị gia tăng VAT_RATE = 0.08 cố định theo quy định' },
          { id: 'opt-c', text: 'Số lượng sản phẩm trong giỏ (cartItemCount) khi người dùng bấm nút [+] hoặc [-]' },
          { id: 'opt-d', text: 'Đường dẫn API máy chủ (BASE_API_URL = "https://api.shop.vn")' }
        ],
        correctAnswer: 'opt-c',
        explanation: 'Số lượng sản phẩm (cartItemCount) liên tục tăng hoặc giảm khi khách thao tác trên giao diện, vì vậy bắt buộc phải dùng `let` để cho phép cập nhật lại giá trị.',
        relatedLessonId: 'les-2-1'
      },
      {
        id: 'q-10',
        lessonId: 'les-2-1',
        learningObjectiveId: 'LO2.3',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'Khi lưu trữ số điện thoại của sinh viên (ví dụ: "0912345678"), vì sao giảng viên luôn khuyên nên dùng kiểu String thay vì kiểu Number?',
        options: [
          { id: 'opt-a', text: 'Vì kiểu Number trong JavaScript chỉ lưu được tối đa 5 chữ số.' },
          { id: 'opt-b', text: 'Vì nếu dùng Number, số 0 ở đầu sẽ bị JavaScript tự động loại bỏ (thành 912345678) và số điện thoại không tham gia tính toán số học.' },
          { id: 'opt-c', text: 'Vì kiểu String chạy nhanh hơn kiểu Number.' },
          { id: 'opt-d', text: 'Vì trình duyệt không hỗ trợ số điện thoại kiểu Number.' }
        ],
        correctAnswer: 'opt-b',
        explanation: 'Một số bắt đầu bằng chữ số 0 khi lưu dưới dạng Number sẽ bị lược bỏ số 0 vô nghĩa về mặt toán học. Hơn nữa số điện thoại là chuỗi định danh (identifier), không ai thực hiện phép cộng trừ nhân chia trên số điện thoại, nên String là lựa chọn chính xác.',
        relatedLessonId: 'les-2-1'
      }
    ]
  },
  summary: [
    'Mặc định luôn khai báo biến bằng `const` để mã nguồn an toàn, tránh lỗi gán đè ngoài ý muốn.',
    'Chỉ chuyển sang dùng `let` khi biến số thực sự cần cập nhật lại giá trị (biến đếm, cờ trạng thái, tổng tích lũy).',
    'Không còn lý do gì để dùng `var` trong các dự án JavaScript hiện đại vì thiếu Block Scope.',
    'Nắm vững 5 kiểu nguyên thủy cốt lõi: Number, String, Boolean, null, undefined và cơ chế kiểm tra với `typeof`.',
    'Nhớ lỗi thiết kế kinh điển: `typeof null === "object"` để tránh bẫy khi debug dự án.'
  ],
  suggestedBookmarks: [
    'Phân biệt scope và cơ chế tái gán giữa let vs const',
    'Lỗi thiết kế lịch sử: typeof null trả về "object"',
    'Quy tắc chọn String thay vì Number cho CCCD, SĐT, Mã sinh viên',
    'Cú pháp Template Literals với dấu backticks `${}`'
  ],
  relatedLessons: [
    { id: 'les-2-2', title: '2.2 Ép kiểu tường minh (Explicit) & ngầm định (Coercion)' },
    { id: 'les-3-2', title: '3.2 So sánh nghiêm ngặt (=== vs ==) & Truthy / Falsy' },
    { id: 'les-6-5', title: '6.5 Phạm vi biến sâu: Block Scope, Function Scope & Lexical Scope' }
  ]
};

// Additional Sample Assessments for requirement Part K:
// 3 Debugging tasks
export const SAMPLE_DEBUGGING_TASKS = [
  {
    id: 'dbg-1',
    title: 'Sửa lỗi gán hằng số (Assignment to constant variable)',
    buggyCode: `const discount = 0.05;
const isVipCustomer = true;

if (isVipCustomer) {
  discount = 0.15; // ❌ Gây lỗi khi chạy
}

console.log("Mức giảm giá áp dụng:", discount);`,
    targetError: 'TypeError: Assignment to constant variable',
    solutionCode: `let discount = 0.05;
const isVipCustomer = true;

if (isVipCustomer) {
  discount = 0.15;
}

console.log("Mức giảm giá áp dụng:", discount);`,
    hint: 'Biến discount được khai báo bằng const nhưng lại bị gán lại bên trong câu lệnh if.',
    explanation: 'Thay `const discount` bằng `let discount` vì mức chiết khấu có thể thay đổi tùy thuộc vào phân hạng khách hàng.'
  },
  {
    id: 'dbg-2',
    title: 'Sửa lỗi hiển thị chuỗi Template Literals',
    buggyCode: `const courseName = "Lập trình JavaScript";
const totalCredits = 3;

// Sinh viên muốn in: Môn: Lập trình JavaScript (3 tín chỉ)
const info = 'Môn: \${courseName} (\${totalCredits} tín chỉ)';
console.log(info);`,
    targetError: 'In ra nguyên văn "${courseName}" thay vì nội suy giá trị biến',
    solutionCode: `const courseName = "Lập trình JavaScript";
const totalCredits = 3;

const info = \`Môn: \${courseName} (\${totalCredits} tín chỉ)\`;
console.log(info);`,
    hint: 'Kiểm tra xem bạn đang dùng dấu nháy đơn \' \' hay dấu backticks ` `?',
    explanation: 'Template literal bắt buộc phải dùng dấu backticks ` ` bao quanh chuỗi để kích hoạt cú pháp ${...}.'
  },
  {
    id: 'dbg-3',
    title: 'Sửa lỗi mất số 0 ở đầu số điện thoại sinh viên',
    buggyCode: `// Sinh viên muốn lưu số điện thoại 0988123456
const studentPhone = 0988123456;
console.log("SĐT:", studentPhone);`,
    targetError: 'Số 0 ở đầu bị mất hoặc lỗi cú pháp số bát phân (Octal literal)',
    solutionCode: `const studentPhone = "0988123456";
console.log("SĐT:", studentPhone);`,
    hint: 'Số điện thoại có bao giờ dùng để cộng trừ nhân chia không? Kiểu dữ liệu nào giữ nguyên định dạng ký tự?',
    explanation: 'Chuyển kiểu dữ liệu của số điện thoại sang chuỗi String bằng cách đặt trong dấu nháy kép "0988123456".'
  }
];

// Comprehensive Mini Application Exercise (Part K)
export const SAMPLE_MINI_APP = {
  id: 'mini-app-1',
  title: 'Dự án thực tế: Máy tính hóa đơn quán Cà phê Sinh viên (Poly Cafe POS)',
  description: 'Xây dựng module tính tiền gọi đồ uống cho quán cà phê sinh viên với các yêu cầu:\n1. Giá cà phê sữa đá: 25,000đ/ly, Trà đào cam sả: 35,000đ/ly.\n2. Nhập số lượng ly cà phê và ly trà đào.\n3. Nếu tổng hóa đơn >= 100,000đ, áp dụng mã giảm giá sinh viên 10% trên tổng bill.\n4. In ra hóa đơn chi tiết gồm: Tiền gốc, Tiền giảm, và Số tiền thực thu.',
  starterCode: `// 1. Khai báo đơn giá (hằng số)
const CAFE_PRICE = 25000;
const TRA_DAO_PRICE = 35000;

// 2. Số lượng đặt hàng
let cafeQuantity = 3;
let traDaoQuantity = 2;

// 3. Tính toán
const rawTotal = (CAFE_PRICE * cafeQuantity) + (TRA_DAO_PRICE * traDaoQuantity);
let discountAmount = 0;

if (rawTotal >= 100000) {
  discountAmount = rawTotal * 0.1; // Giảm 10%
}

const finalPayment = rawTotal - discountAmount;

// 4. Xuất hóa đơn
console.log("Tiền đồ uống: " + rawTotal + "đ");
console.log("Giảm giá: " + discountAmount + "đ");
console.log("Thực thu: " + finalPayment + "đ");`,
  expectedOutput: `Tiền đồ uống: 145000đ
Giảm giá: 14500đ
Thực thu: 130500đ`
};
