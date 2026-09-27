import { Lesson } from '../../types';

// ==========================================
// MODULE 9: STRING, NUMBER VÀ DATE
// ==========================================

export const LESSON_9_1: Lesson = {
  id: 'les-9-1',
  moduleId: 'mod-9',
  track: 'javascript',
  language: 'javascript',
  title: '9.1 Các phương thức xử lý chuỗi (String Manipulation)',
  order: 1,
  durationMinutes: 50,
  difficulty: 'Cơ bản',
  prerequisites: ['Đã học kiểu dữ liệu String và Template Literals'],
  learningObjectives: [
    {
      id: 'LO9.1.1',
      code: 'LO9.1.1',
      title: 'Làm chủ các phương thức tìm kiếm và cắt chuỗi',
      description: 'Sử dụng includes(), indexOf(), slice(), split().',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    },
    {
      id: 'LO9.1.2',
      code: 'LO9.1.2',
      title: 'Làm sạch và định dạng văn bản',
      description: 'Áp dụng trim(), replace(), replaceAll(), toLowerCase(), toUpperCase().',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    }
  ],
  sections: [
    {
      id: 'sec-9-1-1',
      lessonId: 'les-9-1',
      order: 1,
      conceptName: 'Các phương thức tìm kiếm và cắt chuỗi',
      title: '1. Cắt chuỗi và tách từ: slice() & split()',
      explanation: 'Chuỗi trong JavaScript có tính Bất biến (Immutable) - mọi phương thức đều trả về chuỗi mới chứ không sửa chuỗi gốc. `slice(start, end)` trích xuất một đoạn chuỗi; `split(separator)` chia chuỗi thành một Mảng các từ theo ký tự phân cách.',
      syntax: 'str.slice(batDau, ketThuc);\nstr.split(" "); // Tách thành mảng theo dấu cách\nstr.includes("tuKhoa"); // Kiểm tra chứa từ khóa',
      codeExample: `const fullName = "Nguyễn Văn An";

// Tách họ và tên thành mảng
const parts = fullName.split(" ");
console.log("Mảng các từ:", parts);
console.log("Họ:", parts[0]);
console.log("Tên chính:", parts[parts.length - 1]);

// Cắt chuỗi với slice
const greeting = "Xin chào các bạn sinh viên";
console.log("Cắt 8 ký tự đầu:", greeting.slice(0, 8));`,
      lineByLineExplanation: [
        { line: 4, text: 'split(" ") tách chuỗi thành ["Nguyễn", "Văn", "An"].' },
        { line: 11, text: 'slice(0, 8) lấy các ký tự từ index 0 đến trước index 8 ("Xin chào").' }
      ],
      commonMistakes: [
        'Nhớ rằng slice(start, end) KHÔNG bao gồm ký tự tại vị trí index end.'
      ],
      whenToUse: 'Dùng split để xử lý dữ liệu CSV hoặc tách họ tên; dùng slice để trích xuất mã định danh hoặc tóm tắt văn bản.',
      whenNotToUse: 'Không dùng substring/substr cũ lỗi thời (luôn ưu tiên slice).',
      realWorldUseCase: 'Rút gọn tiêu đề bài viết dài kèm dấu ba chấm: `title.length > 30 ? title.slice(0, 30) + "..." : title;`'
    },
    {
      id: 'sec-9-1-2',
      lessonId: 'les-9-1',
      order: 2,
      conceptName: 'Làm sạch và chuẩn hóa chuỗi',
      title: '2. Chuẩn hóa chuỗi với trim(), replace(), toLowerCase()',
      explanation: 'Dữ liệu người dùng nhập từ form thường chứa khoảng trắng thừa ở hai đầu hoặc chữ hoa thường lẫn lộn. `trim()` loại bỏ khoảng trắng dư ở đầu/cuối; `toLowerCase()` chuyển thành chữ thường; `replaceAll(search, replacement)` thay thế toàn bộ chuỗi con.',
      syntax: 'str.trim();\nstr.toLowerCase();\nstr.replaceAll("cu", "moi");',
      codeExample: `const rawEmail = "   SinhVien@fpt.edu.vn   ";
const cleanEmail = rawEmail.trim().toLowerCase();

console.log("Email gốc:", \`"\${rawEmail}"\`);
console.log("Email đã chuẩn hóa:", \`"\${cleanEmail}"\`);

const slogan = "Học JS, yêu thích JS, làm chủ JS";
const newSlogan = slogan.replaceAll("JS", "JavaScript");
console.log("Khẩu hiệu mới:", newSlogan);`,
      lineByLineExplanation: [
        { line: 2, text: 'Gọi liên tiếp .trim() xóa khoảng trắng rồi .toLowerCase() biến thành chữ thường.' },
        { line: 8, text: 'replaceAll thay thế cả 3 từ "JS" thành "JavaScript".' }
      ],
      commonMistakes: [
        'Dùng replace("JS", "JavaScript") chỉ thay thế từ đầu tiên xuất hiện (phải dùng replaceAll để thay thế toàn bộ).'
      ],
      whenToUse: 'Luôn chuẩn hóa email, username trước khi kiểm tra hoặc lưu vào cơ sở dữ liệu.',
      whenNotToUse: 'Không dùng toLowerCase với mật khẩu (vì mật khẩu phân biệt hoa - thường).',
      realWorldUseCase: 'Xử lý tìm kiếm không phân biệt hoa thường: `product.name.toLowerCase().includes(keyword.trim().toLowerCase())`'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-9-1',
    title: 'Thực hành chuẩn hóa họ tên người dùng',
    description: 'Xóa khoảng trắng thừa và viết hoa toàn bộ họ tên.',
    starterCode: `const rawInput = "   trần quốc tuấn   ";
const formatted = rawInput.trim().toUpperCase();

console.log("Họ tên in hoa:", formatted);`,
    expectedConsoleOutput: 'Họ tên in hoa: TRẦN QUỐC TUẤN',
    hint: 'rawInput.trim().toUpperCase().'
  },
  exercises: {
    basic: {
      id: 'ex-9-1-1',
      lessonId: 'les-9-1',
      title: 'Bài tập Cơ bản: Kiểm tra định dạng đuôi file',
      difficulty: 'basic',
      learningObjectiveIds: ['LO9.1.1'],
      description: 'Cho biến fileName = "tailieu_baocao.pdf". Viết câu lệnh kiểm tra nếu fileName có đuôi là ".pdf" (dùng endsWith hoặc includes). Nếu có in "File PDF hợp lệ", ngược lại in "Không phải file PDF".',
      starterCode: `const fileName = "tailieu_baocao.pdf";

if (fileName.endsWith(".pdf")) {
  console.log("File PDF hợp lệ");
} else {
  console.log("Không phải file PDF");
}`,
      solutionCode: `const fileName = "tailieu_baocao.pdf";
if (fileName.endsWith(".pdf")) {
  console.log("File PDF hợp lệ");
} else {
  console.log("Không phải file PDF");
}`,
      testCases: [
        { id: 'tc-1', description: 'Đuôi .pdf hợp lệ', expectedOutput: 'File PDF hợp lệ' }
      ],
      hints: ['fileName.endsWith(".pdf")'],
      explanation: 'endsWith kiểm tra chính xác phần kết thúc của chuỗi.'
    },
    intermediate: {
      id: 'ex-9-1-2',
      lessonId: 'les-9-1',
      title: 'Bài tập Trung bình: Trích xuất tên miền từ địa chỉ Email',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO9.1.1'],
      description: 'Cho email = "khanhn@fpt.edu.vn". Dùng split("@") để lấy phần tên miền (domain) đằng sau dấu @. In ra: "Tên miền: [domain]".',
      starterCode: `const email = "khanhn@fpt.edu.vn";

const parts = email.split("@");
const domain = parts[1];

console.log("Tên miền:", domain);`,
      solutionCode: `const email = "khanhn@fpt.edu.vn";
const parts = email.split("@");
const domain = parts[1];
console.log("Tên miền:", domain);`,
      testCases: [
        { id: 'tc-1', description: 'Trích xuất tên miền', expectedOutput: 'Tên miền: fpt.edu.vn' }
      ],
      hints: ['email.split("@")[1]'],
      explanation: 'Tách theo ký tự @ chia chuỗi thành username ở vị trí [0] và domain ở vị trí [1].'
    },
    challenge: {
      id: 'ex-9-1-3',
      lessonId: 'les-9-1',
      title: 'Bài tập Thử thách: Viết hoa chữ cái đầu tiên của từng từ (Title Case)',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO9.1.1', 'LO9.1.2'],
      description: 'Cho chuỗi text = "học lập trình javascript". Viết hàm chuyển đổi thành Title Case: "Học Lập Trình Javascript". In kết quả.',
      starterCode: `const text = "học lập trình javascript";

const titleCase = text
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log("Title Case:", titleCase);`,
      solutionCode: `const text = "học lập trình javascript";
const titleCase = text
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
console.log("Title Case:", titleCase);`,
      testCases: [
        { id: 'tc-1', description: 'Viết hoa chữ đầu mỗi từ', expectedOutput: 'Title Case: Học Lập Trình Javascript' }
      ],
      hints: ['word.charAt(0).toUpperCase() + word.slice(1)'],
      explanation: 'Kết hợp split, map và join là kỹ thuật chuẩn để định dạng văn bản nâng cao.'
    }
  },
  quiz: {
    id: 'quiz-9-1',
    lessonId: 'les-9-1',
    title: 'Trắc nghiệm Chuỗi',
    passingScore: 70,
    questions: []
  },
  summary: [
    'Chuỗi là bất biến (immutable), các phương thức luôn trả về chuỗi mới.',
    'Dùng trim() và toLowerCase() để làm sạch input người dùng.'
  ],
  suggestedBookmarks: ['Phương thức xử lý String', 'Title Case trong JavaScript']
};

export const LESSON_9_2: Lesson = {
  id: 'les-9-2',
  moduleId: 'mod-9',
  track: 'javascript',
  language: 'javascript',
  title: '9.2 Làm việc với Số, Number methods và Math object',
  order: 2,
  durationMinutes: 45,
  difficulty: 'Cơ bản',
  prerequisites: ['Đã học các phép toán số học cơ bản'],
  learningObjectives: [
    {
      id: 'LO9.2.1',
      code: 'LO9.2.1',
      title: 'Định dạng số thập phân với toFixed()',
      description: 'Làm tròn số chữ số sau dấu phẩy và chuyển thành chuỗi hiển thị.',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    },
    {
      id: 'LO9.2.2',
      code: 'LO9.2.2',
      title: 'Sử dụng Math object (round, floor, ceil, random)',
      description: 'Làm tròn số và tạo số ngẫu nhiên trong một khoảng xác định.',
      bloomLevel: 'Apply',
      masteryPercentage: 88
    }
  ],
  sections: [
    {
      id: 'sec-9-2-1',
      lessonId: 'les-9-2',
      order: 1,
      conceptName: 'Định dạng số thập phân với toFixed()',
      title: '1. toFixed(): Làm tròn số chữ số thập phân',
      explanation: 'Trong JavaScript, các phép toán số thực có thể gặp hiện tượng sai số dấu phẩy động (Floating point precision, ví dụ: 0.1 + 0.2 = 0.30000000000000004). Phương thức `num.toFixed(digits)` giúp làm tròn đến số chữ số thập phân mong muốn và TRẢ VỀ MỘT CHUỖI.',
      syntax: 'num.toFixed(soChuSoThapPhan); // Trả về String',
      codeExample: `const pi = 3.14159265;

console.log("Lấy 2 chữ số thập phân:", pi.toFixed(2)); // "3.14"
console.log("Lấy 4 chữ số thập phân:", pi.toFixed(4)); // "3.1416"

const sum = 0.1 + 0.2;
console.log("Tổng làm tròn:", sum.toFixed(1)); // "0.3"`,
      lineByLineExplanation: [
        { line: 3, text: 'pi.toFixed(2) làm tròn thành chuỗi "3.14".' },
        { line: 4, text: 'pi.toFixed(4) làm tròn chữ số 5 thứ năm lên thành 6 -> "3.1416".' }
      ],
      commonMistakes: [
        'Quên rằng toFixed() trả về kiểu STRING chứ không phải Number. Muốn tính toán tiếp cần bọc qua Number(num.toFixed(2)).'
      ],
      whenToUse: 'Dùng khi hiển thị giá tiền, phần trăm, điểm trung bình ra giao diện người dùng.',
      whenNotToUse: 'Không dùng toFixed() ở giữa các bước tính toán trung gian (sẽ gây sai số tích lũy).',
      realWorldUseCase: 'Hiển thị giá tiền USD: `"$ " + price.toFixed(2)`.'
    },
    {
      id: 'sec-9-2-2',
      lessonId: 'les-9-2',
      order: 2,
      conceptName: 'Đối tượng Math: round, floor, ceil và random',
      title: '2. Các phương thức toán học trong Math Object',
      explanation: '`Math` là đối tượng toàn cục chứa các hàm toán học hữu ích: `Math.round(x)` (làm tròn gần nhất), `Math.floor(x)` (làm tròn xuống), `Math.ceil(x)` (làm tròn lên), `Math.random()` (sinh số ngẫu nhiên từ 0 đến cận 1).',
      syntax: 'Math.round(4.6); // 5\nMath.floor(4.9); // 4 (Làm tròn xuống)\nMath.ceil(4.1);  // 5 (Làm tròn lên)\nMath.floor(Math.random() * (max - min + 1)) + min; // Ngẫu nhiên [min, max]',
      codeExample: `// Các hàm làm tròn
console.log("Math.round(4.5):", Math.round(4.5)); // 5
console.log("Math.floor(4.9):", Math.floor(4.9)); // 4
console.log("Math.ceil(4.1):", Math.ceil(4.1));   // 5

// Tạo số ngẫu nhiên từ 1 đến 6 (Xúc xắc)
const dice = Math.floor(Math.random() * 6) + 1;
console.log("Tung xúc xắc được:", dice);`,
      lineByLineExplanation: [
        { line: 2, text: 'round(4.5) làm tròn lên 5 theo quy tắc nửa bước.' },
        { line: 3, text: 'floor(4.9) bỏ phần thập phân, giữ lại 4.' },
        { line: 4, text: 'ceil(4.1) kéo lên 5 ngay khi có dư.' },
        { line: 7, text: 'Math.random() * 6 sinh [0, 5.999], floor ra 0-5, cộng 1 được 1-6.' }
      ],
      commonMistakes: [
        'Dùng Math.round khi tính số trang phân trang (phải dùng Math.ceil(total / pageSize) để không sót phần tử cuối).'
      ],
      whenToUse: 'Dùng Math.ceil tính tổng số trang hiển thị; dùng Math.random sinh mã OTP hoặc xúc xắc game.',
      whenNotToUse: 'Không dùng Math.random() cho các ứng dụng mã hóa mật mã cấp cao (cần dùng crypto.getRandomValues).',
      realWorldUseCase: 'Phân trang danh sách sản phẩm: `const totalPages = Math.ceil(totalItems / itemsPerPage);`'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-9-2',
    title: 'Thực hành tính số trang phân trang (Pagination)',
    description: 'Có 53 sản phẩm, mỗi trang hiển thị 10 sản phẩm. Dùng Math.ceil tính số trang cần có.',
    starterCode: `const totalProducts = 53;
const limitPerPage = 10;

const totalPages = Math.ceil(totalProducts / limitPerPage);
console.log("Tổng số trang cần tạo:", totalPages);`,
    expectedConsoleOutput: 'Tổng số trang cần tạo: 6',
    hint: 'Math.ceil(53 / 10) = 6.'
  },
  exercises: {
    basic: {
      id: 'ex-9-2-1',
      lessonId: 'les-9-2',
      title: 'Bài tập Cơ bản: Tính tiền thuế VAT làm tròn 2 chữ số',
      difficulty: 'basic',
      learningObjectiveIds: ['LO9.2.1'],
      description: 'Cho giá sản phẩm price = 129.99 và thuế rate = 0.08 (8%). Tính thuế vat = price * rate và in ra: "Tiền thuế: $[vat]" làm tròn 2 chữ số thập phân.',
      starterCode: `const price = 129.99;
const rate = 0.08;

const vat = (price * rate).toFixed(2);
console.log(\`Tiền thuế: $\${vat}\`);`,
      solutionCode: `const price = 129.99;
const rate = 0.08;
const vat = (price * rate).toFixed(2);
console.log(\`Tiền thuế: $\${vat}\`);`,
      testCases: [
        { id: 'tc-1', description: 'Tính thuế làm tròn 2 số', expectedOutput: 'Tiền thuế: $10.40' }
      ],
      hints: ['(price * rate).toFixed(2)'],
      explanation: '129.99 * 0.08 = 10.3992, toFixed(2) làm tròn thành "10.40".'
    },
    intermediate: {
      id: 'ex-9-2-2',
      lessonId: 'les-9-2',
      title: 'Bài tập Trung bình: Viết hàm sinh số ngẫu nhiên trong khoảng [min, max]',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO9.2.2'],
      description: 'Viết hàm getRandomInt(min, max) trả về một số nguyên ngẫu nhiên từ min đến max (bao gồm cả min và max). Chạy thử với min=10, max=10 và in kết quả.',
      starterCode: `function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Số ngẫu nhiên:", getRandomInt(10, 10));`,
      solutionCode: `function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Số ngẫu nhiên:", getRandomInt(10, 10));`,
      testCases: [
        { id: 'tc-1', description: 'Khoảng [10, 10] luôn ra 10', expectedOutput: 'Số ngẫu nhiên: 10' }
      ],
      hints: ['Math.floor(Math.random() * (max - min + 1)) + min'],
      explanation: 'Công thức chuẩn sinh số nguyên ngẫu nhiên trong khoảng đóng [min, max].'
    },
    challenge: {
      id: 'ex-9-2-3',
      lessonId: 'les-9-2',
      title: 'Bài tập Thử thách: Tìm khoảng cách Euclid giữa 2 điểm',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO9.2.2'],
      description: 'Cho hai điểm A(0, 0) và B(3, 4). Dùng Math.sqrt và Math.pow (hoặc toán tử **) tính khoảng cách d = căn bậc hai của ((xB - xA)^2 + (yB - yA)^2). In kết quả "Khoảng cách AB: [d]".',
      starterCode: `const p1 = { x: 0, y: 0 };
const p2 = { x: 3, y: 4 };

const distance = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
console.log("Khoảng cách AB:", distance);`,
      solutionCode: `const p1 = { x: 0, y: 0 };
const p2 = { x: 3, y: 4 };
const distance = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
console.log("Khoảng cách AB:", distance);`,
      testCases: [
        { id: 'tc-1', description: 'Tam giác vuông 3-4-5 ra cạnh huyền 5', expectedOutput: 'Khoảng cách AB: 5' }
      ],
      hints: ['Math.sqrt((p2.x - p1.x)**2 + (p2.y - p1.y)**2)'],
      explanation: 'Math.sqrt tính căn bậc hai, Math.pow tính lũy thừa.'
    }
  },
  quiz: {
    id: 'quiz-9-2',
    lessonId: 'les-9-2',
    title: 'Trắc nghiệm Number & Math',
    passingScore: 70,
    questions: []
  },
  summary: [
    'toFixed(n) trả về chuỗi làm tròn n chữ số sau dấu phẩy.',
    'Math.ceil làm tròn lên (dùng cho phân trang), Math.floor làm tròn xuống.'
  ],
  suggestedBookmarks: ['Math.ceil tính số trang', 'Sinh số ngẫu nhiên [min, max]']
};

export const LESSON_9_3: Lesson = {
  id: 'les-9-3',
  moduleId: 'mod-9',
  track: 'javascript',
  language: 'javascript',
  title: '9.3 Đối tượng Date: Định dạng, So sánh và Tính khoảng cách ngày',
  order: 3,
  durationMinutes: 55,
  difficulty: 'Trung bình',
  prerequisites: ['Đã học khai báo Object và Number'],
  learningObjectives: [
    {
      id: 'LO9.3.1',
      code: 'LO9.3.1',
      title: 'Khởi tạo và đọc thông tin thời gian từ Date object',
      description: 'Lấy ngày, tháng (0-based), năm, giờ, phút, giây.',
      bloomLevel: 'Understand',
      masteryPercentage: 90
    },
    {
      id: 'LO9.3.2',
      code: 'LO9.3.2',
      title: 'Tính khoảng cách thời gian giữa 2 mốc ngày',
      description: 'Chuyển đổi thành mili-giây qua getTime() để tính số ngày chênh lệch.',
      bloomLevel: 'Apply',
      masteryPercentage: 86
    }
  ],
  sections: [
    {
      id: 'sec-9-3-1',
      lessonId: 'les-9-3',
      order: 1,
      conceptName: 'Khởi tạo đối tượng Date và cạm bẫy tháng 0-11',
      title: '1. Khởi tạo ngày và lưu ý tháng trong JavaScript',
      explanation: 'Đối tượng `Date` đại diện cho một thời điểm cụ thể theo giờ Unix (tính bằng mili-giây từ 01/01/1970 UTC). Cạm bẫy lớn nhất trong JavaScript là `getMonth()` trả về giá trị từ `0` (Tháng 1) đến `11` (Tháng 12). Do đó khi hiển thị tháng luôn phải cộng thêm 1.',
      syntax: 'const now = new Date();\nconst specificDate = new Date("2026-09-27T08:30:00");\nconst ngay = date.getDate();\nconst thang = date.getMonth() + 1; // +1\nconst nam = date.getFullYear();',
      codeExample: `const today = new Date("2026-09-27");

const day = today.getDate();
const month = today.getMonth() + 1; // Nhớ +1
const year = today.getFullYear();

console.log(\`Hôm nay là ngày: \${day}/\${month}/\${year}\`);`,
      lineByLineExplanation: [
        { line: 4, text: 'today.getMonth() trả về 8 (vì tháng 9 là index 8), ta cộng thêm 1 thành 9.' },
        { line: 5, text: 'today.getFullYear() trả về năm 2026 dạng 4 chữ số.' }
      ],
      commonMistakes: [
        'Dùng getYear() cũ thay vì getFullYear() (getYear() trả về số năm kể từ 1900).'
      ],
      whenToUse: 'Dùng khi cần ghi nhận thời gian tạo bài viết (createdAt) hoặc hiển thị đồng hồ thời gian thực.',
      whenNotToUse: 'Không dùng Date thuần cho các phép tính timezone quá phức tạp (cân nhắc thư viện Day.js hoặc date-fns).',
      realWorldUseCase: 'Định dạng ngày tháng hiển thị chuẩn Việt Nam: `dd/mm/yyyy`.'
    },
    {
      id: 'sec-9-3-2',
      lessonId: 'les-9-3',
      order: 2,
      conceptName: 'Tính khoảng cách giữa 2 ngày bằng getTime()',
      title: '2. Tính số ngày chênh lệch (Date Difference)',
      explanation: 'Phương thức `date.getTime()` trả về số mili-giây (timestamp) tính từ Unix Epoch. Để tính khoảng cách giữa 2 ngày: trừ 2 timestamp cho nhau, sau đó chia cho số mili-giây trong một ngày: `1000 * 60 * 60 * 24 = 86,400,000`.',
      syntax: 'const msDiff = date2.getTime() - date1.getTime();\nconst days = Math.floor(msDiff / (1000 * 60 * 60 * 24));',
      codeExample: `const startDate = new Date("2026-09-01");
const endDate = new Date("2026-09-27");

const diffInMs = endDate.getTime() - startDate.getTime();
const ONE_DAY_MS = 1000 * 60 * 60 * 24;
const diffDays = diffInMs / ONE_DAY_MS;

console.log("Số ngày đã học:", diffDays);`,
      lineByLineExplanation: [
        { line: 4, text: 'Lấy hiệu số mili-giây giữa 2 mốc thời gian.' },
        { line: 6, text: 'Chia cho 86,400,000 ms để quy đổi ra số ngày.' }
      ],
      commonMistakes: [
        'Trừ trực tiếp hai đối tượng Date endDate - startDate (hoạt động ngầm định nhờ type coercion nhưng khuyên dùng getTime() để code rõ ràng).'
      ],
      whenToUse: 'Tính thời hạn bảo hành còn lại, tính hạn trả sách thư viện, hoặc tính số ngày trễ hạn.',
      whenNotToUse: 'Không tự tính ngày nếu liên quan đến giờ mùa hè (Daylight Saving Time) đa quốc gia.',
      realWorldUseCase: 'Cảnh báo hạn thanh toán học phí: "Học phí còn 3 ngày nữa là đến hạn".'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-9-3',
    title: 'Thực hành tính số ngày còn lại đến hạn nộp bài',
    description: 'Tính số ngày chênh lệch từ ngày hôm nay đến deadline.',
    starterCode: `const today = new Date("2026-10-01");
const deadline = new Date("2026-10-15");

const daysRemaining = (deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);
console.log("Số ngày còn lại:", daysRemaining);`,
    expectedConsoleOutput: 'Số ngày còn lại: 14',
    hint: '(deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24).'
  },
  exercises: {
    basic: {
      id: 'ex-9-3-1',
      lessonId: 'les-9-3',
      title: 'Bài tập Cơ bản: Lấy năm hiện tại của đối tượng Date',
      difficulty: 'basic',
      learningObjectiveIds: ['LO9.3.1'],
      description: 'Cho d = new Date("2026-12-25"). Dùng getFullYear lấy ra năm và in ra: "Năm: [year]".',
      starterCode: `const d = new Date("2026-12-25");

const year = d.getFullYear();
console.log("Năm:", year);`,
      solutionCode: `const d = new Date("2026-12-25");
const year = d.getFullYear();
console.log("Năm:", year);`,
      testCases: [
        { id: 'tc-1', description: 'Lấy đúng năm 2026', expectedOutput: 'Năm: 2026' }
      ],
      hints: ['d.getFullYear()'],
      explanation: 'getFullYear() luôn trả về năm 4 chữ số chuẩn xác.'
    },
    intermediate: {
      id: 'ex-9-3-2',
      lessonId: 'les-9-3',
      title: 'Bài tập Trung bình: Viết hàm kiểm tra năm nhuận',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO9.3.1'],
      description: 'Viết hàm isLeapYear(year) kiểm tra xem năm có phải năm nhuận không (chia hết cho 4 và không chia hết cho 100, HOẶC chia hết cho 400). Chạy thử với 2024 và in "2024 là năm nhuận: [true/false]".',
      starterCode: `function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log("2024 là năm nhuận:", isLeapYear(2024));`,
      solutionCode: `function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log("2024 là năm nhuận:", isLeapYear(2024));`,
      testCases: [
        { id: 'tc-1', description: '2024 là năm nhuận', expectedOutput: '2024 là năm nhuận: true' }
      ],
      hints: ['(year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)'],
      explanation: 'Quy tắc thiên văn học chuẩn để xác định năm nhuận dương lịch.'
    },
    challenge: {
      id: 'ex-9-3-3',
      lessonId: 'les-9-3',
      title: 'Bài tập Thử thách: Kiểm tra xem một sự kiện đã diễn ra trong quá khứ chưa',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO9.3.2'],
      description: 'Cho mốc eventDate = new Date("2026-05-01") và currentDate = new Date("2026-09-27"). So sánh thời gian: nếu eventDate < currentDate in "Sự kiện đã kết thúc", ngược lại in "Sự kiện sắp diễn ra".',
      starterCode: `const eventDate = new Date("2026-05-01");
const currentDate = new Date("2026-09-27");

if (eventDate.getTime() < currentDate.getTime()) {
  console.log("Sự kiện đã kết thúc");
} else {
  console.log("Sự kiện sắp diễn ra");
}`,
      solutionCode: `const eventDate = new Date("2026-05-01");
const currentDate = new Date("2026-09-27");
if (eventDate.getTime() < currentDate.getTime()) {
  console.log("Sự kiện đã kết thúc");
} else {
  console.log("Sự kiện sắp diễn ra");
}`,
      testCases: [
        { id: 'tc-1', description: 'Đúng trạng thái quá khứ', expectedOutput: 'Sự kiện đã kết thúc' }
      ],
      hints: ['eventDate.getTime() < currentDate.getTime()'],
      explanation: 'So sánh 2 giá trị timestamp là cách so sánh thời gian chuẩn mực và tin cậy nhất.'
    }
  },
  quiz: {
    id: 'quiz-9-3',
    lessonId: 'les-9-3',
    title: 'Trắc nghiệm Date',
    passingScore: 70,
    questions: []
  },
  summary: [
    'Date getMonth() bắt đầu từ 0 (tháng 1 là 0, tháng 12 là 11).',
    'getTime() trả về số mili-giây, dùng để tính khoảng cách giữa 2 ngày.'
  ],
  suggestedBookmarks: ['Cạm bẫy getMonth() + 1', 'Tính khoảng cách ngày với getTime()']
};

export const LESSON_9_4: Lesson = {
  id: 'les-9-4',
  moduleId: 'mod-9',
  track: 'javascript',
  language: 'javascript',
  title: '9.4 Mini Exercise: Xử lý hóa đơn và tính ngày hết hạn',
  order: 4,
  durationMinutes: 45,
  difficulty: 'Trung bình',
  prerequisites: ['Đã học String, Number và Date'],
  learningObjectives: [
    {
      id: 'LO9.4.1',
      code: 'LO9.4.1',
      title: 'Tích hợp String, Number và Date giải quyết bài toán thực tế',
      description: 'Xây dựng module xử lý hóa đơn, tính hạn thanh toán và định dạng số tiền.',
      bloomLevel: 'Create',
      masteryPercentage: 88
    }
  ],
  sections: [
    {
      id: 'sec-9-4-1',
      lessonId: 'les-9-4',
      order: 1,
      conceptName: 'Tích hợp String, Number và Date',
      title: '1. Quy trình xử lý hóa đơn tự động',
      explanation: 'Trong các hệ thống quản trị ERP hoặc bán hàng, ta thường phải: (1) Chuẩn hóa mã hóa đơn bằng String (toUpperCase, trim); (2) Tính tổng tiền và tiền phạt trễ hạn bằng Number (toFixed, Math.round); (3) Kiểm tra số ngày quá hạn bằng Date.',
      syntax: '// Kết hợp các kiến thức đã học',
      codeExample: `const invoice = {
  rawCode: "   inv-2026-99   ",
  amount: 2500000,
  dueDate: new Date("2026-09-20"),
  checkDate: new Date("2026-09-27")
};

// 1. Chuẩn hóa mã
const cleanCode = invoice.rawCode.trim().toUpperCase();

// 2. Tính số ngày trễ hạn
const ONE_DAY = 1000 * 60 * 60 * 24;
const overdueDays = Math.floor((invoice.checkDate.getTime() - invoice.dueDate.getTime()) / ONE_DAY);

console.log("Mã hóa đơn:", cleanCode);
console.log("Số ngày quá hạn:", overdueDays);`,
      lineByLineExplanation: [
        { line: 9, text: 'Làm sạch khoảng trắng và viết hoa mã hóa đơn.' },
        { line: 13, text: 'Tính số ngày quá hạn: ngày 27 - ngày 20 = 7 ngày.' }
      ],
      commonMistakes: [
        'Không kiểm tra trường hợp overdueDays < 0 (chưa đến hạn).'
      ],
      whenToUse: 'Dùng trong module thanh toán của website bán hàng, quản lý phòng trọ hoặc học phí.',
      whenNotToUse: 'Khi dữ liệu đã được tính toán sẵn từ hệ thống ngân hàng.',
      realWorldUseCase: 'Module nhắc nợ và tính lãi phạt tự động cho hệ thống giáo dục.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-9-4',
    title: 'Thực hành tính tiền phạt quá hạn hóa đơn',
    description: 'Nếu trễ hạn, phạt 10,000đ mỗi ngày. Tính tổng tiền cần thanh toán.',
    starterCode: `const baseAmount = 500000;
const overdueDays = 5;
const penaltyPerDay = 10000;

const totalToPay = baseAmount + (overdueDays * penaltyPerDay);
console.log("Tổng tiền cần trả:", totalToPay);`,
    expectedConsoleOutput: 'Tổng tiền cần trả: 550000',
    hint: 'baseAmount + (overdueDays * penaltyPerDay).'
  },
  exercises: {
    basic: {
      id: 'ex-9-4-1',
      lessonId: 'les-9-4',
      title: 'Bài tập Cơ bản: Định dạng mã hóa đơn hiển thị',
      difficulty: 'basic',
      learningObjectiveIds: ['LO9.4.1'],
      description: 'Cho chuỗi mã inv = "hd_poly_001". Viết code chuyển thành viết hoa và thay thế "HD_" bằng "HOADON_". In kết quả.',
      starterCode: `const inv = "hd_poly_001";

const formatted = inv.toUpperCase().replace("HD_", "HOADON_");
console.log("Mã hóa đơn:", formatted);`,
      solutionCode: `const inv = "hd_poly_001";
const formatted = inv.toUpperCase().replace("HD_", "HOADON_");
console.log("Mã hóa đơn:", formatted);`,
      testCases: [
        { id: 'tc-1', description: 'Định dạng mã chuẩn', expectedOutput: 'Mã hóa đơn: HOADON_POLY_001' }
      ],
      hints: ['inv.toUpperCase().replace("HD_", "HOADON_")'],
      explanation: 'Kết hợp toUpperCase và replace tạo mã định danh chuẩn.'
    },
    intermediate: {
      id: 'ex-9-4-2',
      lessonId: 'les-9-4',
      title: 'Bài tập Trung bình: Viết hàm tạo ngày hết hạn sau N ngày',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO9.4.1'],
      description: 'Viết hàm getExpiryDate(startDate, daysToAdd) nhận vào đối tượng Date và số ngày cộng thêm, trả về một đối tượng Date mới có thời gian sau daysToAdd ngày. Chạy thử với startDate = new Date("2026-09-01") và daysToAdd = 10. In ngày (getDate) của ngày hết hạn.',
      starterCode: `function getExpiryDate(startDate, daysToAdd) {
  const newDate = new Date(startDate.getTime());
  newDate.setDate(newDate.getDate() + daysToAdd);
  return newDate;
}

const start = new Date("2026-09-01");
const expiry = getExpiryDate(start, 10);
console.log("Ngày hết hạn:", expiry.getDate());`,
      solutionCode: `function getExpiryDate(startDate, daysToAdd) {
  const newDate = new Date(startDate.getTime());
  newDate.setDate(newDate.getDate() + daysToAdd);
  return newDate;
}
const start = new Date("2026-09-01");
const expiry = getExpiryDate(start, 10);
console.log("Ngày hết hạn:", expiry.getDate());`,
      testCases: [
        { id: 'tc-1', description: 'Cộng 10 ngày từ 1/9 ra ngày 11', expectedOutput: 'Ngày hết hạn: 11' }
      ],
      hints: ['newDate.setDate(newDate.getDate() + daysToAdd)'],
      explanation: 'setDate tự động xử lý chuyển tháng nếu vượt quá số ngày của tháng hiện tại.'
    },
    challenge: {
      id: 'ex-9-4-3',
      lessonId: 'les-9-4',
      title: 'Bài tập Thử thách: Hoàn chỉnh hàm tạo biên lai hóa đơn',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO9.4.1'],
      description: 'Viết hàm generateReceipt(customerName, amount, discountPercent) in ra: "Khách hàng: [NAME IN HOA] - Thanh toán: [amount sau giảm giá]đ". Chạy thử với "nguyễn an", 1000000, 15 (giảm 15%).',
      starterCode: `function generateReceipt(customerName, amount, discountPercent) {
  const upperName = customerName.trim().toUpperCase();
  const finalAmount = amount * (1 - discountPercent / 100);
  console.log(\`Khách hàng: \${upperName} - Thanh toán: \${finalAmount}đ\`);
}

generateReceipt("nguyễn an", 1000000, 15);`,
      solutionCode: `function generateReceipt(customerName, amount, discountPercent) {
  const upperName = customerName.trim().toUpperCase();
  const finalAmount = amount * (1 - discountPercent / 100);
  console.log(\`Khách hàng: \${upperName} - Thanh toán: \${finalAmount}đ\`);
}
generateReceipt("nguyễn an", 1000000, 15);`,
      testCases: [
        { id: 'tc-1', description: 'In biên lai chuẩn', expectedOutput: 'Khách hàng: NGUYỄN AN - Thanh toán: 850000đ' }
      ],
      hints: ['amount * (1 - discountPercent / 100)'],
      explanation: 'Tích hợp xử lý chuỗi và tính toán số học tạo ra biên lai thực tế.'
    }
  },
  quiz: {
    id: 'quiz-9-4',
    lessonId: 'les-9-4',
    title: 'Trắc nghiệm Tổng hợp',
    passingScore: 70,
    questions: []
  },
  summary: [
    'Tích hợp String, Number và Date giải quyết các nghiệp vụ bán hàng thực tế.',
    'setDate() tự động bù trừ ngày khi cộng thêm số ngày vượt quá tháng.'
  ],
  suggestedBookmarks: ['Xử lý hóa đơn với String & Date']
};

export const JS_MODULE_9_LESSONS: Lesson[] = [
  LESSON_9_1,
  LESSON_9_2,
  LESSON_9_3,
  LESSON_9_4
];
