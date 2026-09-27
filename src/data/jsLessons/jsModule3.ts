import { Lesson } from '../../types';
import { LESSON_3_2 } from '../lessonRepository';

// ==========================================
// MODULE 3: TOÁN TỬ VÀ BIỂU THỨC
// ==========================================

export const LESSON_3_1: Lesson = {
  id: 'les-3-1',
  moduleId: 'mod-3',
  track: 'javascript',
  language: 'javascript',
  title: '3.1 Toán tử số học & Gán giá trị',
  order: 1,
  durationMinutes: 40,
  difficulty: 'Cơ bản',
  prerequisites: [
    'Biết khai báo biến với let và const',
    'Hiểu kiểu số Number trong JavaScript'
  ],
  learningObjectives: [
    {
      id: 'LO3.1.1',
      code: 'LO3.1.1',
      title: 'Làm chủ các toán tử số học cơ bản',
      description: 'Sử dụng thành thạo cộng (+), trừ (-), nhân (*), chia (/), chia lấy dư (%) và lũy thừa (**).',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    },
    {
      id: 'LO3.1.2',
      code: 'LO3.1.2',
      title: 'Phân biệt tiền tố (Prefix) và hậu tố (Postfix)',
      description: 'Hiểu sự khác biệt giữa ++x (tăng rồi trả về) và x++ (trả về rồi mới tăng).',
      bloomLevel: 'Analyze',
      masteryPercentage: 80
    }
  ],
  sections: [
    {
      id: 'sec-3-1-1',
      lessonId: 'les-3-1',
      order: 1,
      conceptName: 'Toán tử số học & Toán tử gán kết hợp',
      title: '1. Các phép toán cơ bản và cú pháp gán rút gọn',
      explanation: 'JavaScript hỗ trợ đầy đủ các phép toán số học tiêu chuẩn. Điểm đáng chú ý là toán tử chia lấy dư `%` (rất hữu ích để kiểm tra số chẵn lẻ, chia trang pagination) và toán tử lũy thừa `**` (tương đương Math.pow). Ngoài ra, toán tử gán rút gọn như `+=`, `-=`, `*=` giúp mã nguồn súc tích hơn.',
      syntax: 'a % b   // Chia lấy số dư\na ** b  // Lũy thừa a mũ b\nx += 5  // Tương đương x = x + 5',
      codeExample: `// 1. Phép chia lấy dư
const so = 17;
console.log("17 chia 5 dư:", so % 5); // 2

// 2. Lũy thừa
console.log("2 mũ 8 =", 2 ** 8); // 256

// 3. Gán rút gọn
let tongTien = 100000;
tongTien += 50000; // Tăng thêm 50k
console.log("Tổng tiền sau nạp:", tongTien);`,
      lineByLineExplanation: [
        { line: 3, text: '17 chia 5 được 3 dư 2.' },
        { line: 6, text: '2 ** 8 là 2 nhân với chính nó 8 lần.' },
        { line: 10, text: 'tongTien += 50000 tương đương tongTien = tongTien + 50000.' }
      ],
      commonMistakes: [
        'Nhầm lẫn toán tử chia lấy dư (%) với tỉ lệ phần trăm.',
        'Nhầm toán tử lũy thừa (**) với dấu mũ (^) - dấu ^ trong JS là toán tử Bitwise XOR!'
      ],
      whenToUse: 'Dùng % để tìm số chẵn/lẻ (`n % 2 === 0`) hoặc tính vòng tròn chỉ số (index carousel).',
      whenNotToUse: 'Không dùng dấu ^ khi muốn tính lũy thừa.',
      realWorldUseCase: 'Tô màu xen kẽ các hàng trong bảng dữ liệu: nếu `rowIndex % 2 === 0` thì tô nền xám nhạt.'
    },
    {
      id: 'sec-3-1-2',
      lessonId: 'les-3-1',
      order: 2,
      conceptName: 'Toán tử tăng/giảm (++ / --): Tiền tố vs Hậu tố',
      title: '2. Cạm bẫy tiền tố ++x và hậu tố x++',
      explanation: 'Toán tử `++` dùng để tăng giá trị của biến lên 1 đơn vị. Tuy nhiên: (1) `x++` (hậu tố - Postfix) trả về giá trị HIỆN TẠI của x trước, sau đó mới tăng x lên 1; (2) `++x` (tiền tố - Prefix) tăng x lên 1 TRƯỚC, sau đó mới trả về giá trị mới. Quy tắc tương tự áp dụng cho `--`.',
      syntax: 'x++ // Lấy giá trị rồi mới tăng\n++x // Tăng trước rồi mới lấy giá trị',
      codeExample: `let a = 5;
let b = a++; // b nhận 5, sau đó a mới thành 6
console.log("Hậu tố a++ -> a:", a, "b:", b); // a: 6, b: 5

let c = 5;
let d = ++c; // c tăng lên 6 trước, sau đó d nhận 6
console.log("Tiền tố ++c -> c:", c, "d:", d); // c: 6, d: 6`,
      lineByLineExplanation: [
        { line: 2, text: 'a++ gán giá trị cũ (5) cho b trước, rồi a mới nhảy lên 6.' },
        { line: 6, text: '++c tăng c lên 6 trước, rồi mới gán cho d.' }
      ],
      commonMistakes: [
        'Dùng a++ trong biểu thức tính toán phức tạp dẫn đến kết quả khó lường. Hãy tách thành dòng riêng biệt.'
      ],
      whenToUse: 'Dùng trong bước nhảy của vòng lặp for (`for (let i = 0; i < n; i++)`).',
      whenNotToUse: 'Không lồng ghép toán tử ++ bên trong các câu lệnh logic phức tạp.',
      realWorldUseCase: 'Đếm số lần thử nhập mật khẩu sai: `failedAttempts++;`.'
    }
  ],
  predictOutputs: [
    {
      id: 'po-3-1-1',
      code: `let x = 3;
let y = x++ + ++x;
console.log(y);`,
      question: 'Giá trị in ra của biến y là bao nhiêu?',
      options: ['6', '7', '8', '9'],
      correctAnswer: '8',
      explanation: 'x++ trả về 3 (sau đó x thành 4). Tiếp theo ++x tăng x từ 4 lên 5 và trả về 5. Kết quả: 3 + 5 = 8.',
      hint: 'Phân tích từng toán hạng: x++ lấy 3, x thành 4, rồi ++x tăng lên 5.'
    }
  ],
  interactivePractice: {
    id: 'ip-3-1',
    title: 'Thực hành: Tính tiền chia đều hóa đơn nhà hàng',
    description: 'Tính số tiền mỗi người phải trả khi chia đều hóa đơn gồm tổng tiền và 10% tiền tip.',
    starterCode: `const billTotal = 600000;
const tipPercent = 0.10;
const numberOfPeople = 4;

const grandTotal = billTotal + (billTotal * tipPercent);
const perPerson = grandTotal / numberOfPeople;

console.log("Tổng hóa đơn kèm tip:", grandTotal);
console.log("Mỗi người thanh toán:", perPerson);`,
    expectedConsoleOutput: 'Tổng hóa đơn kèm tip: 660000\nMỗi người thanh toán: 165000',
    hint: 'Chạy thử để quan sát kết quả chia đều.',
    language: 'javascript'
  },
  exercises: {
    basic: {
      id: 'ex-3-1-1',
      lessonId: 'les-3-1',
      title: 'Bài tập Cơ bản: Kiểm tra tính chẵn lẻ',
      difficulty: 'basic',
      learningObjectiveIds: ['LO3.1.1'],
      description: 'Cho biến n = 14. Dùng toán tử chia lấy dư % kiểm tra: nếu n % 2 === 0 in ra `Số 14 là số chẵn`. Ngược lại in ra `Số 14 là số lẻ`.',
      starterCode: `const n = 14;

// Kiểm tra và in kết quả:
`,
      solutionCode: `const n = 14;
if (n % 2 === 0) {
  console.log(\`Số \${n} là số chẵn\`);
} else {
  console.log(\`Số \${n} là số lẻ\`);
}`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra 14 là số chẵn',
          expectedOutput: 'Số 14 là số chẵn'
        }
      ],
      hints: ['Số chẵn chia hết cho 2 (dư 0)'],
      explanation: 'n % 2 === 0 là phương pháp chuẩn xác để kiểm tra số chẵn.'
    },
    intermediate: {
      id: 'ex-3-1-2',
      lessonId: 'les-3-1',
      title: 'Bài tập Trung bình: Chuyển đổi giây sang phút và giây',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO3.1.1'],
      description: 'Cho tổng số giây totalSeconds = 145. Tính số phút (dùng Math.floor(totalSeconds / 60)) và số giây còn lại (dùng totalSeconds % 60). In ra theo định dạng: `Thời gian: 2 phút 25 giây`.',
      starterCode: `const totalSeconds = 145;

// Tính số phút và giây:
`,
      solutionCode: `const totalSeconds = 145;
const minutes = Math.floor(totalSeconds / 60);
const seconds = totalSeconds % 60;
console.log(\`Thời gian: \${minutes} phút \${seconds} giây\`);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra 145s = 2 phút 25 giây',
          expectedOutput: 'Thời gian: 2 phút 25 giây'
        }
      ],
      hints: ['Math.floor lấy phần nguyên, % 60 lấy phần giây dư'],
      explanation: 'Ứng dụng kinh điển của toán tử chia và chia lấy dư trong xử lý thời gian.'
    },
    challenge: {
      id: 'ex-3-1-3',
      lessonId: 'les-3-1',
      title: 'Bài tập Thử thách: Tính lãi kép hàng năm với toán tử lũy thừa',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO3.1.1'],
      description: 'Công thức lãi kép: A = P * (1 + r)**t. Với số vốn P = 10000000 (10 triệu), lãi suất r = 0.07 (7%/năm), thời gian t = 3 năm. Hãy tính tổng tiền A nhận được và làm tròn bằng Math.round(). In ra: `Tổng tiền sau 3 năm: [kết quả]`.',
      starterCode: `const P = 10000000;
const r = 0.07;
const t = 3;

// Tính tiền lãi kép A:
`,
      solutionCode: `const P = 10000000;
const r = 0.07;
const t = 3;
const A = Math.round(P * ((1 + r) ** t));
console.log("Tổng tiền sau 3 năm:", A);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra lãi kép sau 3 năm',
          expectedOutput: 'Tổng tiền sau 3 năm: 12250430'
        }
      ],
      hints: ['Dùng (1 + r) ** t để tính lũy thừa'],
      explanation: '10.000.000 * (1.07)^3 = 12.250.430 VNĐ.'
    }
  },
  quiz: {
    id: 'quiz-3-1',
    lessonId: 'les-3-1',
    title: 'Trắc nghiệm: Toán tử số học',
    passingScore: 70,
    questions: [
      {
        id: 'q-3-1-1',
        lessonId: 'les-3-1',
        learningObjectiveId: 'LO3.1.1',
        type: 'multiple_choice',
        difficulty: 'easy',
        prompt: 'Toán tử nào sau đây dùng để tính lũy thừa (ví dụ: 2 mũ 3) trong chuẩn JavaScript hiện đại?',
        options: [
          { id: 'a', text: '^' },
          { id: 'b', text: '**' },
          { id: 'c', text: '^^' },
          { id: 'd', text: 'pow' }
        ],
        correctAnswer: 'b',
        explanation: 'Toán tử ** (Exponentiation operator) được giới thiệu từ ES2016 để tính lũy thừa.',
        relatedLessonId: 'les-3-1'
      }
    ]
  },
  summary: [
    'Toán tử % chia lấy dư rất hữu ích để kiểm tra tính chẵn lẻ và vòng lặp chỉ số.',
    'Toán tử ** thay thế hoàn hảo cho hàm Math.pow() cồng kềnh.',
    'Phân biệt cẩn thận tiền tố ++x (tăng trước) và hậu tố x++ (lấy giá trị trước khi tăng).'
  ],
  suggestedBookmarks: [
    'Sự khác nhau giữa toán tử tiền tố Prefix và hậu tố Postfix',
    'Ứng dụng toán tử chia lấy dư % trong thuật toán phân trang và bàn cờ'
  ]
};

export { LESSON_3_2 };

export const LESSON_3_3: Lesson = {
  id: 'les-3-3',
  moduleId: 'mod-3',
  track: 'javascript',
  language: 'javascript',
  title: '3.3 Toán tử logic & Cơ chế Short-circuiting',
  order: 3,
  durationMinutes: 45,
  difficulty: 'Trung bình',
  prerequisites: [
    'Biết kiểu dữ liệu Boolean (true/false)',
    'Hiểu các phép toán so sánh'
  ],
  learningObjectives: [
    {
      id: 'LO3.3.1',
      code: 'LO3.3.1',
      title: '3 toán tử logic cốt lõi: AND, OR, NOT',
      description: 'Làm chủ toán tử VÀ (&&), HOẶC (||), và PHỦ ĐỊNH (!) trong biểu thức điều kiện.',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    },
    {
      id: 'LO3.3.2',
      code: 'LO3.3.2',
      title: 'Cơ chế ngắn mạch (Short-circuit Evaluation)',
      description: 'Giải thích nguyên lý dừng sớm của && và ||, áp dụng để tạo giá trị mặc định (Fallback default value).',
      bloomLevel: 'Analyze',
      masteryPercentage: 86
    }
  ],
  sections: [
    {
      id: 'sec-3-3-1',
      lessonId: 'les-3-3',
      order: 1,
      conceptName: 'Toán tử logic &&, ||, !',
      title: '1. Bảng chân trị và nguyên tắc kết hợp điều kiện',
      explanation: 'Toán tử logic kết hợp nhiều điều kiện: (1) `&&` (AND): Chỉ đúng khi TẤT CẢ các vế đều đúng; (2) `||` (OR): Đúng khi CÓ ÍT NHẤT một vế đúng; (3) `!` (NOT): Đảo ngược giá trị boolean (true thành false và ngược lại).',
      syntax: 'dieuKien1 && dieuKien2\ndieuKien1 || dieuKien2\n!dieuKien',
      codeExample: `const age = 22;
const hasLicense = true;

// Điều kiện lái xe: đủ 18 tuổi VÀ có bằng lái
const canDrive = age >= 18 && hasLicense;
console.log("Được phép lái xe:", canDrive); // true

// Điều kiện miễn giảm vé: dưới 6 tuổi HOẶC trên 60 tuổi
const isFreeTicket = age < 6 || age >= 60;
console.log("Được miễn vé:", isFreeTicket); // false`,
      lineByLineExplanation: [
        { line: 5, text: 'Cả hai vế age >= 18 (true) và hasLicense (true) đều đúng nên canDrive là true.' }
      ],
      commonMistakes: [
        'Dùng 1 dấu & hoặc 1 dấu | thay vì && hoặc || (dấu đơn là toán tử Bitwise làm việc trên bit nhị phân!).'
      ],
      whenToUse: 'Dùng trong câu lệnh `if` kiểm tra quyền truy cập người dùng, trạng thái kích hoạt tài khoản.',
      whenNotToUse: 'Không viết chuỗi điều kiện quá dài hơn 4 vế trong 1 dòng (hãy tách thành biến có tên rõ ràng).',
      realWorldUseCase: 'Kiểm tra quyền quản trị: `isAdmin && isEmailVerified && accountActive`.'
    },
    {
      id: 'sec-3-3-2',
      lessonId: 'les-3-3',
      order: 2,
      conceptName: 'Cơ chế ngắn mạch (Short-circuit Evaluation)',
      title: '2. Ngắn mạch (Short-circuiting) – Bí quyết của Senior Dev',
      explanation: 'Trong JavaScript, toán tử logic KHÔNG chỉ trả về true/false mà thực chất trả về GIÁ TRỊ CỦA TOÁN HẠNG: (1) `&&` dừng lại ngay khi gặp giá trị Falsy đầu tiên và trả về nó; nếu tất cả đều Truthy thì trả về toán hạng cuối cùng; (2) `||` dừng lại ngay khi gặp giá trị Truthy đầu tiên và trả về nó; nếu tất cả đều Falsy thì trả về toán hạng cuối cùng.',
      syntax: '// Fallback giá trị mặc định:\nconst name = inputName || "Khách vô danh";\n// Thực thi có điều kiện:\nisLoggedIn && showProfile();',
      codeExample: `// 1. Dùng || gán giá trị mặc định
const userCustomName = "";
const displayName = userCustomName || "Khách ghé thăm";
console.log("Tên hiển thị:", displayName); // "Khách ghé thăm" vì "" là Falsy

// 2. Dùng && thực thi hàm an toàn
const user = { name: "An", isVip: true };
user.isVip && console.log("Chào mừng thành viên VIP!");`,
      lineByLineExplanation: [
        { line: 3, text: 'Chuỗi rỗng "" là Falsy, toán tử || nhảy sang vế sau lấy "Khách ghé thăm".' },
        { line: 8, text: 'Vì user.isVip là true, vế sau được kích hoạt và in thông điệp ra console.' }
      ],
      commonMistakes: [
        'Dùng || cho số 0: `const count = 0; const result = count || 10;` -> result sẽ bị lấy số 10 vì số 0 là Falsy! Khi cần giữ số 0 hoặc chuỗi rỗng, hãy dùng Nullish Coalescing `??`.'
      ],
      whenToUse: 'Dùng `||` để fallback chuỗi hiển thị, dùng `&&` để render có điều kiện trong React/JS.',
      whenNotToUse: 'Không dùng `||` khi giá trị hợp lệ có thể là số 0 hoặc boolean false.',
      realWorldUseCase: 'Lấy ảnh đại diện: `const avatar = user.avatar || DEFAULT_AVATAR;`.'
    }
  ],
  predictOutputs: [
    {
      id: 'po-3-3-1',
      code: `console.log("Apple" || "Banana");`,
      question: 'Giá trị in ra trên Console là gì?',
      options: ['"Apple"', '"Banana"', 'true', 'undefined'],
      correctAnswer: '"Apple"',
      explanation: '"Apple" là một chuỗi có ký tự (Truthy). Toán tử || gặp Truthy đầu tiên là dừng lại và trả về ngay giá trị đó.',
      hint: 'Toán tử || tìm giá trị Truthy đầu tiên.'
    },
    {
      id: 'po-3-3-2',
      code: `console.log("Cat" && "Dog" && "Bird");`,
      question: 'Toán tử && lồng nhau trên trả về giá trị nào?',
      options: ['"Cat"', '"Dog"', '"Bird"', 'true'],
      correctAnswer: '"Bird"',
      explanation: 'Tất cả các chuỗi đều là Truthy, do đó toán tử && duyệt hết đến toán hạng cuối cùng và trả về "Bird".',
      hint: 'Nếu tất cả đều Truthy, && trả về giá trị cuối cùng.'
    }
  ],
  interactivePractice: {
    id: 'ip-3-3',
    title: 'Thực hành: Gán giá trị mặc định cho cấu hình hệ thống',
    description: 'Sử dụng toán tử || để thiết lập giá trị mặc định cho cổng kết nối (port) và tên người dùng.',
    starterCode: `const envPort = ""; // Rỗng (Falsy)
const PORT = envPort || 3000;

console.log("Server đang lắng nghe tại cổng:", PORT);`,
    expectedConsoleOutput: 'Server đang lắng nghe tại cổng: 3000',
    hint: 'Nhấn Chạy để kiểm tra cơ chế fallback của ||.',
    language: 'javascript'
  },
  exercises: {
    basic: {
      id: 'ex-3-3-1',
      lessonId: 'les-3-3',
      title: 'Bài tập Cơ bản: Kiểm tra điều kiện học bổng kép',
      difficulty: 'basic',
      learningObjectiveIds: ['LO3.3.1'],
      description: 'Cho điểm GPA = 3.7 và điểm rèn luyện drl = 85. Dùng toán tử && kiểm tra: nếu GPA >= 3.6 và drl >= 80 thì in ra `Đủ điều kiện xét học bổng`. Ngược lại in ra `Chưa đủ điều kiện`.',
      starterCode: `const GPA = 3.7;
const drl = 85;

// Kiểm tra điều kiện học bổng:
`,
      solutionCode: `const GPA = 3.7;
const drl = 85;
if (GPA >= 3.6 && drl >= 80) {
  console.log("Đủ điều kiện xét học bổng");
} else {
  console.log("Chưa đủ điều kiện");
}`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra đủ điều kiện học bổng',
          expectedOutput: 'Đủ điều kiện xét học bổng'
        }
      ],
      hints: ['Dùng if (GPA >= 3.6 && drl >= 80)'],
      explanation: 'Toán tử && yêu cầu cả 2 tiêu chí học tập và rèn luyện đều phải đạt chuẩn.'
    },
    intermediate: {
      id: 'ex-3-3-2',
      lessonId: 'les-3-3',
      title: 'Bài tập Trung bình: Xây dựng trình lấy tiêu đề trang mặc định',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO3.3.2'],
      description: 'Viết hàm getPageTitle(customTitle). Sử dụng cơ chế ngắn mạch toán tử || để nếu customTitle là chuỗi rỗng thì trả về "FPT Polytechnic - Cao đẳng Thực hành". In ra kết quả khi gọi với chuỗi rỗng "".',
      starterCode: `function getPageTitle(customTitle) {
  // Dùng || trả về tiêu đề:
  
}

console.log(getPageTitle(""));`,
      solutionCode: `function getPageTitle(customTitle) {
  return customTitle || "FPT Polytechnic - Cao đẳng Thực hành";
}

console.log(getPageTitle(""));`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra fallback tiêu đề mặc định',
          expectedOutput: 'FPT Polytechnic - Cao đẳng Thực hành'
        }
      ],
      hints: ['return customTitle || "..."'],
      explanation: 'Chuỗi rỗng "" là Falsy nên toán tử || tự động chuyển sang lấy chuỗi mặc định phía sau.'
    },
    challenge: {
      id: 'ex-3-3-3',
      lessonId: 'les-3-3',
      title: 'Bài tập Thử thách: Kiểm tra quyền hạn đa tầng (RBAC Guard)',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO3.3.1', 'LO3.3.2'],
      description: 'Cho đối tượng quyền user = { isAuth: true, role: "editor", hasActiveToken: true }. Người dùng được sửa bài viết nếu: đã đăng nhập (isAuth) VÀ có token (hasActiveToken) VÀ (role là "admin" HOẶC "editor"). In ra `Được phép chỉnh sửa: [true/false]`.',
      starterCode: `const user = { isAuth: true, role: "editor", hasActiveToken: true };

// Viết biểu thức logic phức hợp kiểm tra:
`,
      solutionCode: `const user = { isAuth: true, role: "editor", hasActiveToken: true };
const canEdit = user.isAuth && user.hasActiveToken && (user.role === "admin" || user.role === "editor");
console.log("Được phép chỉnh sửa:", canEdit);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra người dùng có quyền chỉnh sửa',
          expectedOutput: 'Được phép chỉnh sửa: true'
        }
      ],
      hints: ['Đặt cặp ngoặc tròn (user.role === "admin" || user.role === "editor") để ưu tiên phép HOẶC'],
      explanation: 'Kết hợp chuẩn xác && và || với dấu ngoặc tròn là nền tảng của hệ thống phân quyền phần mềm.'
    }
  },
  quiz: {
    id: 'quiz-3-3',
    lessonId: 'les-3-3',
    title: 'Trắc nghiệm: Toán tử Logic & Ngắn mạch',
    passingScore: 70,
    questions: [
      {
        id: 'q-3-3-1',
        lessonId: 'les-3-3',
        learningObjectiveId: 'LO3.3.2',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'Biểu thức false && "Hello" trả về giá trị gì?',
        options: [
          { id: 'a', text: 'false' },
          { id: 'b', text: '"Hello"' },
          { id: 'c', text: 'true' },
          { id: 'd', text: 'undefined' }
        ],
        correctAnswer: 'a',
        explanation: 'Toán tử && gặp giá trị Falsy đầu tiên (ở đây là boolean false) sẽ ngắn mạch dừng lại ngay lập tức và trả về giá trị false đó mà không cần đánh giá vế sau.',
        relatedLessonId: 'les-3-3'
      }
    ]
  },
  summary: [
    '&& chỉ đúng khi tất cả đúng; || đúng khi ít nhất một vế đúng; ! đảo ngược logic.',
    'Toán tử logic trả về chính giá trị của toán hạng chứ không đơn thuần chỉ trả về true/false.',
    'Toán tử || thường dùng để gán giá trị dự phòng mặc định (Fallback value).'
  ],
  suggestedBookmarks: [
    'Nguyên lý Short-circuiting của && và || trong JavaScript',
    'Toán tử Nullish Coalescing (??) và sự khác biệt với ||'
  ]
};

export const LESSON_3_4: Lesson = {
  id: 'les-3-4',
  moduleId: 'mod-3',
  track: 'javascript',
  language: 'javascript',
  title: '3.4 Hiểu sâu khái niệm Truthy và Falsy trong JS',
  order: 4,
  durationMinutes: 45,
  difficulty: 'Cơ bản',
  prerequisites: [
    'Đã học kiểu Boolean',
    'Biết câu lệnh if đơn giản'
  ],
  learningObjectives: [
    {
      id: 'LO3.4.1',
      code: 'LO3.4.1',
      title: 'Khắc ghi 6 giá trị Falsy kinh điển',
      description: 'Nắm vững 6 giá trị duy nhất bị coi là false trong ngữ cảnh boolean: false, 0, "", null, undefined, NaN.',
      bloomLevel: 'Remember',
      masteryPercentage: 95
    },
    {
      id: 'LO3.4.2',
      code: 'LO3.4.2',
      title: 'Nhận diện các cạm bẫy Truthy',
      description: 'Hiểu tại sao mảng rỗng [] và đối tượng rỗng {} đều là Truthy (khác với ngôn ngữ Python hay PHP).',
      bloomLevel: 'Analyze',
      masteryPercentage: 88
    }
  ],
  sections: [
    {
      id: 'sec-3-4-1',
      lessonId: 'les-3-4',
      order: 1,
      conceptName: 'Danh sách 6 giá trị Falsy trong JavaScript',
      title: '1. Sáu giá trị Falsy duy nhất cần thuộc lòng',
      explanation: 'Trong JavaScript, bất kỳ giá trị nào khi đặt vào ngữ cảnh boolean (như điều kiện `if (x)`) cũng sẽ tự động chuyển đổi thành `true` (gọi là Truthy) hoặc `false` (gọi là Falsy). Có chính xác 6 giá trị Falsy kinh điển: (1) `false`, (2) số `0` (và `-0`), (3) chuỗi rỗng `""`, (4) `null`, (5) `undefined`, (6) `NaN`. TẤT CẢ các giá trị khác còn lại trên đời đều là TRUTHY!',
      syntax: 'Boolean(giaTri) // Cách tường minh xem giá trị là Truthy hay Falsy\n!!giaTri       // Toán tử double NOT tương đương',
      codeExample: `// 6 giá trị Falsy
console.log(Boolean(false));     // false
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false`,
      lineByLineExplanation: [
        { line: 2, text: 'Chỉ có đúng 6 giá trị này trả về false khi ép kiểu sang Boolean.' }
      ],
      commonMistakes: [
        'Nghĩ rằng chuỗi chứa dấu cách `" "` là Falsy -> SAI! Chuỗi có độ dài 1 ký tự nên nó là TRUTHY!',
        'Nghĩ rằng chuỗi `"false"` hoặc `"0"` là Falsy -> SAI! Chuỗi không rỗng luôn là TRUTHY!'
      ],
      whenToUse: 'Dùng để viết điều kiện ngắn gọn: `if (username)` kiểm tra người dùng đã nhập tên hay chưa.',
      whenNotToUse: 'Không dùng `if (score)` để kiểm tra học sinh có điểm hay chưa nếu học sinh có thể bị điểm 0 (vì điểm 0 là Falsy!).',
      realWorldUseCase: 'Kiểm tra chuỗi tìm kiếm trước khi lọc: `if (searchQuery.trim()) { performSearch(); }`.'
    },
    {
      id: 'sec-3-4-2',
      lessonId: 'les-3-4',
      order: 2,
      conceptName: 'Cạm bẫy Truthy: Mảng rỗng và Đối tượng rỗng',
      title: '2. Cạm bẫy: Mảng rỗng [] và Object rỗng {} là TRUTHY!',
      explanation: 'Nhiều lập trình viên từ các ngôn ngữ khác (như Python hay PHP) thường nhầm rằng mảng không có phần tử là false. Trong JavaScript, MỌI đối tượng (Object) kể cả mảng rỗng `[]` hay đối tượng rỗng `{}` đều là TRUTHY! Vì vậy, viết `if (items)` để kiểm tra mảng có rỗng hay không sẽ LUÔN ĐÚNG. Để kiểm tra mảng rỗng, bắt buộc phải dùng `items.length === 0`.',
      syntax: '// Kiểm tra mảng rỗng đúng chuẩn:\nif (items.length === 0) { ... }\n// Kiểm tra object rỗng đúng chuẩn:\nif (Object.keys(obj).length === 0) { ... }',
      codeExample: `const emptyArray = [];
const emptyObject = {};

console.log("Boolean([]):", Boolean(emptyArray));   // true (Bất ngờ!)
console.log("Boolean({}):", Boolean(emptyObject));  // true

// Cách kiểm tra mảng có phần tử hay không đúng đắn:
if (emptyArray.length > 0) {
  console.log("Mảng có dữ liệu");
} else {
  console.log("Mảng hoàn toàn rỗng!");
}`,
      lineByLineExplanation: [
        { line: 4, text: '[] là tham chiếu đối tượng trên bộ nhớ Heap nên mang tính Truthy.' },
        { line: 8, text: 'Luôn kiểm tra thuộc tính .length của mảng.' }
      ],
      commonMistakes: [
        'Viết `if (danhSachSanPham) { render(); }` làm giao diện render danh sách trống trơn.'
      ],
      whenToUse: 'Luôn ghi nhớ quy tắc này để không bao giờ mắc lỗi logic kiểm tra dữ liệu mảng trả về từ máy chủ.',
      whenNotToUse: 'Không so sánh mảng rỗng bằng cú pháp `arr == false` (dù nó trả về true do cạm bẫy ép kiểu ngầm định).',
      realWorldUseCase: 'Kiểm tra giỏ hàng có sản phẩm hay không: `if (cart.length > 0) { showCheckoutButton(); }`.'
    }
  ],
  predictOutputs: [
    {
      id: 'po-3-4-1',
      code: `console.log(Boolean("0"));`,
      question: 'Giá trị in ra của Boolean("0") là gì?',
      options: ['false', 'true', '0', 'NaN'],
      correctAnswer: 'true',
      explanation: '"0" là một chuỗi ký tự có độ dài 1 (chứa ký tự số 0), không phải chuỗi rỗng "". Mọi chuỗi không rỗng đều là Truthy!',
      hint: 'Chỉ có chuỗi rỗng "" mới là Falsy.'
    },
    {
      id: 'po-3-4-2',
      code: `console.log(Boolean([]));`,
      question: 'Boolean của một mảng rỗng [] trong JS là gì?',
      options: ['false', 'true', 'undefined', 'TypeError'],
      correctAnswer: 'true',
      explanation: 'Trong JavaScript, mọi đối tượng (Object, Array, Function) đều là Truthy, bất kể bên trong nó có chứa phần tử nào hay không.',
      hint: 'Mảng rỗng là một Object trên Heap, có địa chỉ tham chiếu.'
    }
  ],
  interactivePractice: {
    id: 'ip-3-4',
    title: 'Thực hành: Bộ lọc Falsy bằng hàm Boolean',
    description: 'Chạy thử đoạn mã lọc bỏ tất cả các giá trị Falsy trong danh sách bằng filter(Boolean).',
    starterCode: `const rawData = ["An", "", 0, "Ngọc", null, undefined, 2026, NaN];

// Lọc chỉ giữ lại các giá trị Truthy:
const cleanData = rawData.filter(Boolean);
console.log("Dữ liệu sạch (chỉ Truthy):", cleanData);`,
    expectedConsoleOutput: 'Dữ liệu sạch (chỉ Truthy): [ \'An\', \'Ngọc\', 2026 ]',
    hint: 'Mẹo vi diệu: filter(Boolean) loại bỏ trọn vẹn mọi giá trị Falsy.',
    language: 'javascript'
  },
  exercises: {
    basic: {
      id: 'ex-3-4-1',
      lessonId: 'les-3-4',
      title: 'Bài tập Cơ bản: Kiểm tra chuỗi nhập liệu có rỗng không',
      difficulty: 'basic',
      learningObjectiveIds: ['LO3.4.1'],
      description: 'Cho biến input = "". Viết câu lệnh kiểm tra: nếu input là Truthy in ra `Có dữ liệu: [input]`. Nếu input là Falsy in ra `Vui lòng không để trống!`.',
      starterCode: `const input = "";

// Kiểm tra tính Truthy/Falsy:
`,
      solutionCode: `const input = "";
if (input) {
  console.log("Có dữ liệu:", input);
} else {
  console.log("Vui lòng không để trống!");
}`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra chuỗi rỗng là Falsy',
          expectedOutput: 'Vui lòng không để trống!'
        }
      ],
      hints: ['Dùng if (input) { ... } else { ... }'],
      explanation: 'Chuỗi rỗng "" tự động bị ép thành false trong mệnh đề if.'
    },
    intermediate: {
      id: 'ex-3-4-2',
      lessonId: 'les-3-4',
      title: 'Bài tập Trung bình: Kiểm tra mảng có phần tử thực sự',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO3.4.2'],
      description: 'Viết hàm checkCart(items). Nếu items có độ dài lớn hơn 0 in ra `Giỏ hàng có [items.length] món hàng`. Nếu rỗng in ra `Giỏ hàng đang trống`. Chạy thử với mảng rỗng [].',
      starterCode: `function checkCart(items) {
  // Viết điều kiện kiểm tra mảng rỗng:
  
}

checkCart([]);`,
      solutionCode: `function checkCart(items) {
  if (items.length > 0) {
    console.log(\`Giỏ hàng có \${items.length} món hàng\`);
  } else {
    console.log("Giỏ hàng đang trống");
  }
}

checkCart([]);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra mảng rỗng chính xác qua .length',
          expectedOutput: 'Giỏ hàng đang trống'
        }
      ],
      hints: ['Dùng items.length > 0 thay vì if (items)'],
      explanation: 'Kiểm tra length là chuẩn mực duy nhất để xác định mảng rỗng trong JS.'
    },
    challenge: {
      id: 'ex-3-4-3',
      lessonId: 'les-3-4',
      title: 'Bài tập Thử thách: Đếm số lượng giá trị Falsy trong danh sách',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO3.4.1'],
      description: 'Cho mảng testArr = [0, 1, false, 2, "", 3, null, "a", undefined, NaN]. Hãy duyệt qua mảng và đếm xem có bao nhiêu giá trị Falsy. In ra: `Tổng số giá trị Falsy: [số lượng]`.',
      starterCode: `const testArr = [0, 1, false, 2, "", 3, null, "a", undefined, NaN];
let falsyCount = 0;

// Đếm số giá trị Falsy:

console.log("Tổng số giá trị Falsy:", falsyCount);`,
      solutionCode: `const testArr = [0, 1, false, 2, "", 3, null, "a", undefined, NaN];
let falsyCount = 0;

for (let i = 0; i < testArr.length; i++) {
  if (!testArr[i]) {
    falsyCount++;
  }
}

console.log("Tổng số giá trị Falsy:", falsyCount);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra đếm đúng 6 giá trị Falsy',
          expectedOutput: 'Tổng số giá trị Falsy: 6'
        }
      ],
      hints: ['Dùng !testArr[i] để kiểm tra nếu phần tử là Falsy'],
      explanation: 'Có đúng 6 giá trị Falsy trong mảng: 0, false, "", null, undefined, NaN.'
    }
  },
  quiz: {
    id: 'quiz-3-4',
    lessonId: 'les-3-4',
    title: 'Trắc nghiệm: Truthy và Falsy',
    passingScore: 70,
    questions: [
      {
        id: 'q-3-4-1',
        lessonId: 'les-3-4',
        learningObjectiveId: 'LO3.4.1',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'Giá trị nào sau đây được coi là TRUTHY trong JavaScript?',
        options: [
          { id: 'a', text: '0' },
          { id: 'b', text: '"" (chuỗi rỗng)' },
          { id: 'c', text: '[] (mảng rỗng)' },
          { id: 'd', text: 'NaN' }
        ],
        correctAnswer: 'c',
        explanation: 'Mọi đối tượng Object và Array (kể cả mảng rỗng []) đều là Truthy. Ba giá trị còn lại (0, "", NaN) đều thuộc 6 giá trị Falsy kinh điển.',
        relatedLessonId: 'les-3-4'
      }
    ]
  },
  summary: [
    'Chỉ có 6 giá trị Falsy duy nhất: false, 0, "", null, undefined, NaN.',
    'Mọi giá trị khác đều là Truthy (kể cả "0", "false", [], {}).',
    'Để kiểm tra mảng rỗng, bắt buộc phải dùng arr.length === 0.'
  ],
  suggestedBookmarks: [
    'Bảng 6 giá trị Falsy và kỹ thuật lọc danh sách với filter(Boolean)',
    'Tại sao mảng rỗng [] và đối tượng rỗng {} lại mang tính Truthy'
  ]
};

export const JS_MODULE_3_LESSONS: Lesson[] = [
  LESSON_3_1,
  LESSON_3_2,
  LESSON_3_3,
  LESSON_3_4
];
