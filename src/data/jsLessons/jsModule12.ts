import { Lesson } from '../../types';

// ==========================================
// MODULE 12: FORM VÀ VALIDATION
// ==========================================

export const LESSON_12_1: Lesson = {
  id: 'les-12-1',
  moduleId: 'mod-12',
  track: 'javascript',
  language: 'javascript',
  title: '12.1 Thu thập dữ liệu Form và chặn reload với e.preventDefault()',
  order: 1,
  durationMinutes: 45,
  difficulty: 'Cơ bản',
  prerequisites: ['Đã học DOM querySelector', 'Hiểu sự kiện submit và e.preventDefault()'],
  learningObjectives: [
    {
      id: 'LO12.1.1',
      code: 'LO12.1.1',
      title: 'Lắng nghe sự kiện submit của thẻ form và chặn tải lại trang',
      description: 'Đảm bảo ứng dụng SPA không bị mất trạng thái khi gửi form.',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    },
    {
      id: 'LO12.1.2',
      code: 'LO12.1.2',
      title: 'Trích xuất dữ liệu từ các trường nhập liệu (Input, Checkbox, Select)',
      description: 'Lấy value từ text input, checked từ checkbox và selected value từ dropdown.',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    }
  ],
  sections: [
    {
      id: 'sec-12-1-1',
      lessonId: 'les-12-1',
      order: 1,
      conceptName: 'Thu thập dữ liệu form và e.preventDefault()',
      title: '1. Quy trình xử lý Form cơ bản trong JavaScript',
      explanation: 'Khi người dùng nhấn Enter hoặc click nút `<button type="submit">`, sự kiện `submit` sẽ kích hoạt trên thẻ `<form>`. Hành vi mặc định của trình duyệt là gửi HTTP request và tải lại toàn bộ trang. Trong lập trình web hiện đại, ta luôn gọi `e.preventDefault()` để giữ nguyên trang và thu thập dữ liệu bằng JavaScript.',
      syntax: 'formEl.addEventListener("submit", (e) => {\n  e.preventDefault();\n  const email = emailInput.value.trim();\n  const remember = checkboxEl.checked;\n});',
      codeExample: `// Giả lập thu thập dữ liệu từ Form
function collectFormData(fields) {
  return {
    username: fields.username.trim(),
    role: fields.role,
    agreeTerms: fields.agreeTerms === true
  };
}

const submittedData = collectFormData({
  username: "  nguyenvana  ",
  role: "Sinh viên",
  agreeTerms: true
});

console.log("Dữ liệu form đã thu thập:", submittedData);`,
      lineByLineExplanation: [
        { line: 4, text: 'Lấy giá trị text và dùng trim() để loại bỏ khoảng trắng thừa.' },
        { line: 6, text: 'Checkbox được đọc qua thuộc tính checked (kiểu Boolean: true/false).' }
      ],
      commonMistakes: [
        'Gắn sự kiện click vào nút button thay vì gắn sự kiện submit vào thẻ form (khiến form không nhận được phím Enter khi gõ).'
      ],
      whenToUse: 'Dùng cho mọi biểu mẫu: đăng nhập, đăng ký, tìm kiếm, liên hệ, đặt hàng.',
      whenNotToUse: 'Không dùng JS submit nếu form là form truyền thống không cần xử lý client-side.',
      realWorldUseCase: 'Thu thập dữ liệu tài khoản đăng nhập để gửi request xác thực tới Backend.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-12-1',
    title: 'Thực hành thu thập dữ liệu đăng ký thành viên',
    description: 'Tạo đối tượng chứa thông tin email và vai trò đã chọn.',
    starterCode: `const email = "sinhvien@poly.edu.vn";
const role = "student";

const payload = { email, role };
console.log("Dữ liệu sẵn sàng gửi:", payload);`,
    expectedConsoleOutput: 'Dữ liệu sẵn sàng gửi: { email: \'sinhvien@poly.edu.vn\', role: \'student\' }',
    hint: 'Gom các biến thành đối tượng payload.'
  },
  exercises: {
    basic: {
      id: 'ex-12-1-1',
      lessonId: 'les-12-1',
      title: 'Bài tập Cơ bản: Phân biệt thuộc tính đọc dữ liệu Text và Checkbox',
      difficulty: 'basic',
      learningObjectiveIds: ['LO12.1.2'],
      description: 'Để đọc giá trị của ô input text, ta dùng thuộc tính "value". Để đọc trạng thái chọn của ô checkbox, ta dùng thuộc tính nào: "value" hay "checked"? In ra tên thuộc tính.',
      starterCode: `const checkboxProp = "checked";
console.log("Thuộc tính checkbox:", checkboxProp);`,
      solutionCode: `const checkboxProp = "checked";
console.log("Thuộc tính checkbox:", checkboxProp);`,
      testCases: [
        { id: 'tc-1', description: 'Thuộc tính checked', expectedOutput: 'Thuộc tính checkbox: checked' }
      ],
      hints: ['checkbox.checked trả về true/false'],
      explanation: 'Checkbox sử dụng thuộc tính checked (boolean) thay vì value để xác định người dùng có tích chọn hay không.'
    },
    intermediate: {
      id: 'ex-12-1-2',
      lessonId: 'les-12-1',
      title: 'Bài tập Trung bình: Viết hàm thu thập dữ liệu đăng nhập an toàn',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO12.1.1', 'LO12.1.2'],
      description: 'Viết hàm extractLoginForm(rawEmail, rawPassword) trả về đối tượng { email: rawEmail.trim().toLowerCase(), passwordLength: rawPassword.length }. Chạy thử với "  An@gmail.com  " và "secret123".',
      starterCode: `function extractLoginForm(rawEmail, rawPassword) {
  return {
    email: rawEmail.trim().toLowerCase(),
    passwordLength: rawPassword.length
  };
}

console.log("Dữ liệu:", extractLoginForm("  An@gmail.com  ", "secret123"));`,
      solutionCode: `function extractLoginForm(rawEmail, rawPassword) {
  return {
    email: rawEmail.trim().toLowerCase(),
    passwordLength: rawPassword.length
  };
}
console.log("Dữ liệu:", extractLoginForm("  An@gmail.com  ", "secret123"));`,
      testCases: [
        { id: 'tc-1', description: 'Chuẩn hóa email và đếm độ dài pass', expectedOutput: 'Dữ liệu: { email: \'an@gmail.com\', passwordLength: 9 }' }
      ],
      hints: ['rawEmail.trim().toLowerCase()'],
      explanation: 'Làm sạch khoảng trắng thừa và đồng bộ email về chữ thường giúp tránh lỗi đăng nhập không đáng có.'
    },
    challenge: {
      id: 'ex-12-1-3',
      lessonId: 'les-12-1',
      title: 'Bài tập Thử thách: Đối tượng FormData API hiện đại',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO12.1.2'],
      description: 'Trong JS chuẩn hiện đại, new FormData(formEl) tự động thu thập tất cả các trường có thuộc tính name. Cho mảng các cặp [key, value] mô phỏng FormData: [["email", "test@poly.edu.vn"], ["city", "HCM"]]. Dùng Object.fromEntries chuyển thành Object thông thường. In kết quả.',
      starterCode: `const entries = [["email", "test@poly.edu.vn"], ["city", "HCM"]];
const formObject = Object.fromEntries(entries);
console.log("Đối tượng Form:", formObject);`,
      solutionCode: `const entries = [["email", "test@poly.edu.vn"], ["city", "HCM"]];
const formObject = Object.fromEntries(entries);
console.log("Đối tượng Form:", formObject);`,
      testCases: [
        { id: 'tc-1', description: 'Chuyển thành object', expectedOutput: 'Đối tượng Form: { email: \'test@poly.edu.vn\', city: \'HCM\' }' }
      ],
      hints: ['Object.fromEntries(entries)'],
      explanation: 'Object.fromEntries(new FormData(form)) là cú pháp đỉnh cao để serialize toàn bộ form chỉ trong 1 dòng code!'
    }
  },
  quiz: {
    id: 'quiz-12-1',
    lessonId: 'les-12-1',
    title: 'Trắc nghiệm Thu thập dữ liệu Form',
    passingScore: 70,
    questions: []
  },
  summary: [
    'Luôn gắn sự kiện submit vào thẻ form và gọi e.preventDefault().',
    'Dùng .value cho text input và .checked cho checkbox.'
  ],
  suggestedBookmarks: ['Xử lý submit form không reload', 'FormData API']
};

export const LESSON_12_2: Lesson = {
  id: 'les-12-2',
  moduleId: 'mod-12',
  track: 'javascript',
  language: 'javascript',
  title: '12.2 Kiểm tra dữ liệu bắt buộc (Required, MinLength, Email Regex)',
  order: 2,
  durationMinutes: 55,
  difficulty: 'Trung bình',
  prerequisites: ['Đã học các phương thức xử lý String', 'Hiểu Regular Expression (Regex) cơ bản'],
  learningObjectives: [
    {
      id: 'LO12.2.1',
      code: 'LO12.2.1',
      title: 'Xây dựng các quy tắc kiểm tra (Validation Rules)',
      description: 'Bắt buộc nhập (Required), độ dài tối thiểu (MinLength), khớp mật khẩu (Password Confirm).',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    },
    {
      id: 'LO12.2.2',
      code: 'LO12.2.2',
      title: 'Kiểm tra định dạng Email và Số điện thoại với Regex',
      description: 'Sử dụng phương thức regex.test(str) để xác thực định dạng dữ liệu.',
      bloomLevel: 'Apply',
      masteryPercentage: 86
    }
  ],
  sections: [
    {
      id: 'sec-12-2-1',
      lessonId: 'les-12-2',
      order: 1,
      conceptName: 'Các quy tắc xác thực dữ liệu phổ biến',
      title: '1. Quy tắc Required và MinLength',
      explanation: 'Validation phía client (Trình duyệt) giúp phản hồi tức thì cho người dùng trước khi gửi lên máy chủ. Quy tắc `Required`: kiểm tra `val.trim().length === 0`. Quy tắc `MinLength`: kiểm tra `val.length < min`.',
      syntax: 'function isRequired(val) {\n  return val.trim() !== "";\n}\nfunction isMinLength(val, min) {\n  return val.length >= min;\n}',
      codeExample: `function validatePassword(pass) {
  if (!pass || pass.trim() === "") {
    return "Mật khẩu không được để trống";
  }
  if (pass.length < 8) {
    return "Mật khẩu phải có tối thiểu 8 ký tự";
  }
  return null; // Hợp lệ
}

console.log("Kiểm tra rỗng:", validatePassword(""));
console.log("Kiểm tra 5 ký tự:", validatePassword("12345"));
console.log("Kiểm tra hợp lệ:", validatePassword("secretPass123"));`,
      lineByLineExplanation: [
        { line: 2, text: 'Bắt lỗi bỏ trống đầu tiên.' },
        { line: 5, text: 'Bắt lỗi độ dài tối thiểu < 8.' },
        { line: 8, text: 'Trả về null khi thỏa mãn mọi điều kiện.' }
      ],
      commonMistakes: [
        'Chỉ kiểm tra pass === "" mà quên gọi .trim(), khiến người dùng gõ toàn dấu cách "   " vẫn lọt qua kiểm tra.'
      ],
      whenToUse: 'Dùng cho mật khẩu, họ tên, địa chỉ nhận hàng.',
      whenNotToUse: 'Không chỉ dựa vào kiểm tra ở client (backend vẫn luôn phải validate lại vì client có thể bị can thiệp).',
      realWorldUseCase: 'Kiểm tra mật khẩu đăng ký tài khoản đạt chuẩn an toàn thông tin.'
    },
    {
      id: 'sec-12-2-2',
      lessonId: 'les-12-2',
      order: 2,
      conceptName: 'Xác thực định dạng bằng Regular Expression (Regex)',
      title: '2. Kiểm tra Email và Số điện thoại với Regex',
      explanation: 'Biểu thức chính quy (Regex) là mẫu so khớp chuỗi mạnh mẽ. Để kiểm tra chuỗi có khớp mẫu hay không, ta dùng hàm `regex.test(string)` (trả về `true` hoặc `false`).',
      syntax: 'const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\nconst isValid = emailRegex.test(email);',
      codeExample: `const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
const phoneRegex = /^0[0-9]{9}$/; // Bắt đầu bằng 0 và gồm đúng 10 số

console.log("khanhn@fpt.edu.vn hợp lệ?", emailRegex.test("khanhn@fpt.edu.vn"));
console.log("khanhn@fpt không hợp lệ?", emailRegex.test("khanhn@fpt"));
console.log("0987654321 SĐT hợp lệ?", phoneRegex.test("0987654321"));
console.log("123456 SĐT sai?", phoneRegex.test("123456"));`,
      lineByLineExplanation: [
        { line: 1, text: 'Định nghĩa mẫu Regex kiểm tra có chứa ký tự @ và dấu chấm tên miền.' },
        { line: 2, text: 'Mẫu số điện thoại Việt Nam 10 chữ số bắt đầu bằng 0.' }
      ],
      commonMistakes: [
        'Viết regex email quá phức tạp hoặc quá lỏng lẻo (chỉ cần kiểm tra cơ bản ở client, gửi link xác thực qua email để xác nhận).'
      ],
      whenToUse: 'Kiểm tra định dạng email, số điện thoại, mã số sinh viên, mã zip bưu điện.',
      whenNotToUse: 'Không dùng regex cho các logic nghiệp vụ đơn giản có thể làm bằng startsWith/includes.',
      realWorldUseCase: 'Xác thực định dạng số điện thoại khi thanh toán giao hàng COD.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-12-2',
    title: 'Thực hành kiểm tra số điện thoại Việt Nam',
    description: 'Kiểm tra số điện thoại bắt đầu bằng số 0 và đủ 10 số.',
    starterCode: `const phone = "0912345678";
const phonePattern = /^0\\d{9}$/;

const isValidPhone = phonePattern.test(phone);
console.log("Số điện thoại hợp lệ:", isValidPhone);`,
    expectedConsoleOutput: 'Số điện thoại hợp lệ: true',
    hint: '/^0\\d{9}$/.test(phone).'
  },
  exercises: {
    basic: {
      id: 'ex-12-2-1',
      lessonId: 'les-12-2',
      title: 'Bài tập Cơ bản: Viết hàm kiểm tra chuỗi không được để trống (isRequired)',
      difficulty: 'basic',
      learningObjectiveIds: ['LO12.2.1'],
      description: 'Viết hàm isRequired(value) trả về true nếu chuỗi sau khi trim() khác rỗng "", ngược lại trả về false. Chạy thử với "   " và in kết quả.',
      starterCode: `function isRequired(value) {
  return value.trim().length > 0;
}

console.log("Hợp lệ:", isRequired("   "));`,
      solutionCode: `function isRequired(value) {
  return value.trim().length > 0;
}
console.log("Hợp lệ:", isRequired("   "));`,
      testCases: [
        { id: 'tc-1', description: 'Chuỗi dấu cách trả về false', expectedOutput: 'Hợp lệ: false' }
      ],
      hints: ['value.trim().length > 0'],
      explanation: 'trim() loại bỏ khoảng trắng dư, nếu chiều dài còn lại > 0 chứng tỏ có nội dung thực.'
    },
    intermediate: {
      id: 'ex-12-2-2',
      lessonId: 'les-12-2',
      title: 'Bài tập Trung bình: Kiểm tra khớp mật khẩu xác nhận',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO12.2.1'],
      description: 'Viết hàm matchPassword(pass, confirmPass) trả về true nếu hai mật khẩu trùng khớp hoàn toàn, ngược lại trả về false. Chạy thử với "123456" và "123456". In kết quả.',
      starterCode: `function matchPassword(pass, confirmPass) {
  return pass === confirmPass;
}

console.log("Mật khẩu khớp:", matchPassword("123456", "123456"));`,
      solutionCode: `function matchPassword(pass, confirmPass) {
  return pass === confirmPass;
}
console.log("Mật khẩu khớp:", matchPassword("123456", "123456"));`,
      testCases: [
        { id: 'tc-1', description: 'Hai mật khẩu khớp nhau', expectedOutput: 'Mật khẩu khớp: true' }
      ],
      hints: ['pass === confirmPass'],
      explanation: 'Toán tử so sánh nghiêm ngặt === đảm bảo hai chuỗi giống hệt nhau.'
    },
    challenge: {
      id: 'ex-12-2-3',
      lessonId: 'les-12-2',
      title: 'Bài tập Thử thách: Kiểm tra độ mạnh của mật khẩu (Password Strength)',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO12.2.1', 'LO12.2.2'],
      description: 'Mật khẩu mạnh phải thỏa mãn cả 3 điều kiện: (1) Tối thiểu 8 ký tự; (2) Chứa ít nhất một chữ số (/\\d/); (3) Chứa ít nhất một chữ hoa (/[A-Z]/). Viết hàm isStrongPassword(pass) trả về true/false. Chạy thử với "Poly@2026". In kết quả.',
      starterCode: `function isStrongPassword(pass) {
  const hasMinLength = pass.length >= 8;
  const hasNumber = /\\d/.test(pass);
  const hasUpper = /[A-Z]/.test(pass);
  return hasMinLength && hasNumber && hasUpper;
}

console.log("Mật khẩu Poly@2026 mạnh?", isStrongPassword("Poly@2026"));`,
      solutionCode: `function isStrongPassword(pass) {
  const hasMinLength = pass.length >= 8;
  const hasNumber = /\\d/.test(pass);
  const hasUpper = /[A-Z]/.test(pass);
  return hasMinLength && hasNumber && hasUpper;
}
console.log("Mật khẩu Poly@2026 mạnh?", isStrongPassword("Poly@2026"));`,
      testCases: [
        { id: 'tc-1', description: 'Đạt chuẩn 3 điều kiện', expectedOutput: 'Mật khẩu Poly@2026 mạnh? true' }
      ],
      hints: ['Kết hợp hasMinLength && hasNumber && hasUpper'],
      explanation: 'Quy tắc xác thực độ mạnh mật khẩu chuẩn doanh nghiệp.'
    }
  },
  quiz: {
    id: 'quiz-12-2',
    lessonId: 'les-12-2',
    title: 'Trắc nghiệm Quy tắc Validation',
    passingScore: 70,
    questions: []
  },
  summary: [
    'Luôn dùng trim() khi kiểm tra ô bắt buộc nhập (Required).',
    'Dùng regex.test() để kiểm tra định dạng email và số điện thoại.'
  ],
  suggestedBookmarks: ['Quy tắc validation form', 'Regex kiểm tra email và SĐT']
};

export const LESSON_12_3: Lesson = {
  id: 'les-12-3',
  moduleId: 'mod-12',
  track: 'javascript',
  language: 'javascript',
  title: '12.3 Thiết kế thông báo lỗi (Error UI Feedback) thân thiện',
  order: 3,
  durationMinutes: 45,
  difficulty: 'Trung bình',
  prerequisites: ['Đã học DOM classList và innerText/textContent'],
  learningObjectives: [
    {
      id: 'LO12.3.1',
      code: 'LO12.3.1',
      title: 'Hiển thị và ẩn thông báo lỗi theo ngữ cảnh (Inline Error)',
      description: 'Đổi màu viền đỏ (border-red) và hiển thị chữ thông báo lỗi dưới ô nhập.',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    },
    {
      id: 'LO12.3.2',
      code: 'LO12.3.2',
      title: 'Tự động dọn dẹp lỗi khi người dùng sửa nội dung',
      description: 'Lắng nghe sự kiện input để gỡ bỏ trạng thái lỗi ngay khi người dùng bắt đầu sửa.',
      bloomLevel: 'Apply',
      masteryPercentage: 88
    }
  ],
  sections: [
    {
      id: 'sec-12-3-1',
      lessonId: 'les-12-3',
      order: 1,
      conceptName: 'Thiết kế phản hồi giao diện lỗi (Error UI Feedback)',
      title: '1. Mẫu thiết kế thông báo lỗi trực quan (Inline Error)',
      explanation: 'Tránh dùng `alert()` để báo lỗi vì nó chặn trải nghiệm người dùng. Cách chuyên nghiệp là: (1) Thêm class viền đỏ `.is-invalid` cho ô input; (2) Gán thông báo vào thẻ `<small class="error-message">` nằm ngay bên dưới; (3) Tự động xóa thông báo lỗi khi người dùng gõ phím sửa lỗi.',
      syntax: 'function showError(inputEl, msg) {\n  inputEl.classList.add("is-invalid");\n  errorSmall.textContent = msg;\n}',
      codeExample: `// Giả lập trạng thái thông báo lỗi
const formState = {
  email: {
    value: "sai-dinh-dang",
    hasError: true,
    errorMessage: "Email phải chứa ký tự @ hợp lệ"
  },
  setError(field, msg) {
    this[field].hasError = true;
    this[field].errorMessage = msg;
  },
  clearError(field) {
    this[field].hasError = false;
    this[field].errorMessage = "";
  }
};

console.log("Trạng thái lỗi hiện tại:", formState.email.errorMessage);

// Khi người dùng sửa đúng
formState.clearError("email");
console.log("Lỗi sau khi người dùng sửa:", formState.email.hasError ? formState.email.errorMessage : "Không có lỗi");`,
      lineByLineExplanation: [
        { line: 8, text: 'Hàm setError bật cờ hasError và gán thông điệp cụ thể.' },
        { line: 12, text: 'Hàm clearError dọn dẹp lỗi để giao diện trở về trạng thái bình thường.' }
      ],
      commonMistakes: [
        'Báo lỗi chung chung "Dữ liệu sai!" thay vì hướng dẫn rõ ràng "Mật khẩu cần ít nhất 8 ký tự".'
      ],
      whenToUse: 'Áp dụng cho mọi biểu mẫu đăng ký, thanh toán để tối ưu tỷ lệ chuyển đổi (Conversion Rate).',
      whenNotToUse: 'Tránh báo lỗi quá vội vàng khi người dùng vừa mới bắt đầu gõ ký tự đầu tiên.',
      realWorldUseCase: 'Hiển thị viền đỏ và dòng chữ báo lỗi khi người dùng bỏ trống ô Họ tên.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-12-3',
    title: 'Thực hành xóa trạng thái lỗi khi gõ phím',
    description: 'Khi hàm onInput được gọi, chuyển cờ hasError thành false.',
    starterCode: `let hasError = true;
function onInput() {
  hasError = false;
  console.log("Đã dọn dẹp trạng thái lỗi:", !hasError);
}

onInput();`,
    expectedConsoleOutput: 'Đã dọn dẹp trạng thái lỗi: true',
    hint: 'hasError = false.'
  },
  exercises: {
    basic: {
      id: 'ex-12-3-1',
      lessonId: 'les-12-3',
      title: 'Bài tập Cơ bản: Tạo thông điệp lỗi cho ô bỏ trống',
      difficulty: 'basic',
      learningObjectiveIds: ['LO12.3.1'],
      description: 'Viết hàm getRequiredMessage(fieldName) trả về chuỗi "[fieldName] không được để trống!". Chạy thử với "Email" và in kết quả.',
      starterCode: `function getRequiredMessage(fieldName) {
  return \`\${fieldName} không được để trống!\`;
}

console.log(getRequiredMessage("Email"));`,
      solutionCode: `function getRequiredMessage(fieldName) {
  return \`\${fieldName} không được để trống!\`;
}
console.log(getRequiredMessage("Email"));`,
      testCases: [
        { id: 'tc-1', description: 'Thông báo thân thiện', expectedOutput: 'Email không được để trống!' }
      ],
      hints: ['Nội suy chuỗi với `${fieldName}`'],
      explanation: 'Thông điệp rõ ràng chỉ ra đúng tên trường bị thiếu giúp người dùng sửa nhanh chóng.'
    },
    intermediate: {
      id: 'ex-12-3-2',
      lessonId: 'les-12-3',
      title: 'Bài tập Trung bình: Viết bộ lọc quản lý danh sách lỗi (Error Map)',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO12.3.1'],
      description: 'Cho đối tượng errors = {}. Viết hàm addError(field, msg) thêm lỗi vào đối tượng, và hàm hasAnyError() kiểm tra nếu Object.keys(errors).length > 0 thì in "Form có lỗi", ngược lại in "Form hợp lệ". Chạy thử thêm lỗi "email".',
      starterCode: `const errors = {};
function addError(field, msg) {
  errors[field] = msg;
}
function checkErrors() {
  return Object.keys(errors).length > 0 ? "Form có lỗi" : "Form hợp lệ";
}

addError("email", "Email sai định dạng");
console.log("Trạng thái:", checkErrors());`,
      solutionCode: `const errors = {};
function addError(field, msg) {
  errors[field] = msg;
}
function checkErrors() {
  return Object.keys(errors).length > 0 ? "Form có lỗi" : "Form hợp lệ";
}
addError("email", "Email sai định dạng");
console.log("Trạng thái:", checkErrors());`,
      testCases: [
        { id: 'tc-1', description: 'Có lỗi trong errors', expectedOutput: 'Trạng thái: Form có lỗi' }
      ],
      hints: ['Object.keys(errors).length > 0'],
      explanation: 'Error Map lưu trữ danh sách lỗi của toàn bộ các trường trong form.'
    },
    challenge: {
      id: 'ex-12-3-3',
      lessonId: 'les-12-3',
      title: 'Bài tập Thử thách: Tự động focus vào ô bị lỗi đầu tiên',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO12.3.1'],
      description: 'Khi submit có nhiều lỗi, trải nghiệm tốt nhất là tự động đưa con trỏ chuột (focus) vào ô bị lỗi đầu tiên. Cho mảng danh sách lỗi: [{ field: "email" }, { field: "phone" }]. In ra: "Đưa con trỏ focus vào: [lỗi đầu tiên]".',
      starterCode: `const errorFields = [{ field: "email" }, { field: "phone" }];
const firstError = errorFields[0].field;
console.log("Đưa con trỏ focus vào:", firstError);`,
      solutionCode: `const errorFields = [{ field: "email" }, { field: "phone" }];
const firstError = errorFields[0].field;
console.log("Đưa con trỏ focus vào:", firstError);`,
      testCases: [
        { id: 'tc-1', description: 'Focus vào trường lỗi đầu tiên', expectedOutput: 'Đưa con trỏ focus vào: email' }
      ],
      hints: ['errorFields[0].field'],
      explanation: 'Tự động focus vào ô lỗi đầu tiên là tiêu chuẩn UX vàng của các form chuyên nghiệp.'
    }
  },
  quiz: {
    id: 'quiz-12-3',
    lessonId: 'les-12-3',
    title: 'Trắc nghiệm Error UI',
    passingScore: 70,
    questions: []
  },
  summary: [
    'Tránh dùng alert(), luôn hiển thị lỗi trực tiếp (Inline Error) dưới ô nhập.',
    'Tự động xóa thông báo lỗi khi người dùng gõ phím sửa.'
  ],
  suggestedBookmarks: ['Inline Error UI Feedback', 'Tự động focus ô lỗi đầu tiên']
};

export const LESSON_12_4: Lesson = {
  id: 'les-12-4',
  moduleId: 'mod-12',
  track: 'javascript',
  language: 'javascript',
  title: '12.4 Xây dựng module Form Validator tái sử dụng',
  order: 4,
  durationMinutes: 60,
  difficulty: 'Nâng cao',
  prerequisites: ['Đã học toàn bộ Module 12', 'Nắm vững Object, Array methods và Functions'],
  learningObjectives: [
    {
      id: 'LO12.4.1',
      code: 'LO12.4.1',
      title: 'Kiến trúc Module Validator theo hướng tái sử dụng (Declarative Validator)',
      description: 'Định nghĩa bộ quy tắc bằng Schema và tự động kiểm tra toàn bộ form.',
      bloomLevel: 'Create',
      masteryPercentage: 86
    }
  ],
  sections: [
    {
      id: 'sec-12-4-1',
      lessonId: 'les-12-4',
      order: 1,
      conceptName: 'Kiến trúc Module Validator',
      title: '1. Xây dựng Form Validator bằng Schema',
      explanation: 'Thay vì viết các câu lệnh `if...else` lặp đi lặp lại ở mọi form, lập trình viên chuyên nghiệp xây dựng một module Validator nhận vào một Schema các quy tắc (Rules) và dữ liệu cần kiểm tra.',
      syntax: 'const rules = {\n  username: [isRequired, isMinLength(6)],\n  email: [isRequired, isEmail]\n};',
      codeExample: `// Module Validator đơn giản
const Validator = {
  isRequired(value) {
    return value.trim() !== "" ? null : "Bắt buộc nhập";
  },
  isEmail(value) {
    const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return regex.test(value) ? null : "Email không hợp lệ";
  },
  validate(data, rules) {
    const errors = {};
    for (const field in rules) {
      const fieldRules = rules[field];
      for (const rule of fieldRules) {
        const error = rule(data[field] || "");
        if (error) {
          errors[field] = error;
          break; // Chỉ lấy lỗi đầu tiên của mỗi trường
        }
      }
    }
    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  }
};

// Dữ liệu thử nghiệm
const formData = {
  username: "an",
  email: "sai-email"
};

const result = Validator.validate(formData, {
  username: [Validator.isRequired],
  email: [Validator.isRequired, Validator.isEmail]
});

console.log("Kết quả kiểm tra:", result);`,
      lineByLineExplanation: [
        { line: 2, text: 'Hàm quy tắc trả về null nếu hợp lệ, trả về chuỗi thông báo nếu có lỗi.' },
        { line: 10, text: 'validate() duyệt qua từng trường và chạy danh sách các hàm kiểm tra tương ứng.' }
      ],
      commonMistakes: [
        'Viết mã kiểm tra dính chặt vào DOM thay vì tách riêng tầng Logic kiểm tra (Pure logic) và tầng Hiển thị giao diện.'
      ],
      whenToUse: 'Dùng cho các dự án có từ 2 form trở lên để tái sử dụng toàn bộ quy tắc kiểm tra.',
      whenNotToUse: 'Không cần nếu chỉ có duy nhất 1 ô tìm kiếm đơn giản.',
      realWorldUseCase: 'Mô hình thiết kế của các thư viện nổi tiếng như Formik, React Hook Form, Yup, Zod.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-12-4',
    title: 'Thực hành chạy thử Validator với dữ liệu hợp lệ',
    description: 'Chạy Validator với dữ liệu chuẩn và kiểm tra cờ isValid.',
    starterCode: `const validData = {
  username: "khanhn",
  email: "khanhn@fpt.edu.vn"
};

const isValid = validData.username.length >= 3 && validData.email.includes("@");
console.log("Toàn bộ form hợp lệ:", isValid);`,
    expectedConsoleOutput: 'Toàn bộ form hợp lệ: true',
    hint: 'Kiểm tra độ dài và ký tự @.'
  },
  exercises: {
    basic: {
      id: 'ex-12-4-1',
      lessonId: 'les-12-4',
      title: 'Bài tập Cơ bản: Viết quy tắc kiểm tra số dương (isPositive)',
      difficulty: 'basic',
      learningObjectiveIds: ['LO12.4.1'],
      description: 'Viết hàm isPositive(num) trả về null nếu num > 0, ngược lại trả về "Giá trị phải lớn hơn 0". Chạy thử với 10 và in kết quả.',
      starterCode: `function isPositive(num) {
  return num > 0 ? null : "Giá trị phải lớn hơn 0";
}

console.log("Kết quả 10:", isPositive(10));`,
      solutionCode: `function isPositive(num) {
  return num > 0 ? null : "Giá trị phải lớn hơn 0";
}
console.log("Kết quả 10:", isPositive(10));`,
      testCases: [
        { id: 'tc-1', description: 'Số 10 trả về null', expectedOutput: 'Kết quả 10: null' }
      ],
      hints: ['num > 0 ? null : "..."'],
      explanation: 'Chuẩn thiết kế Validator: hợp lệ thì trả về null, có lỗi trả về chuỗi thông báo.'
    },
    intermediate: {
      id: 'ex-12-4-2',
      lessonId: 'les-12-4',
      title: 'Bài tập Trung bình: Viết Higher-Order Function tạo quy tắc minLength',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO12.4.1'],
      description: 'Viết hàm minLength(min) trả về một hàm nhận value: nếu value.length >= min trả về null, ngược lại trả về `Tối thiểu ${min} ký tự`. Tạo hàm min6 = minLength(6) và chạy thử với "12345". In kết quả lỗi.',
      starterCode: `function minLength(min) {
  return function(value) {
    return value.length >= min ? null : \`Tối thiểu \${min} ký tự\`;
  };
}

const min6 = minLength(6);
console.log("Lỗi:", min6("12345"));`,
      solutionCode: `function minLength(min) {
  return function(value) {
    return value.length >= min ? null : \`Tối thiểu \${min} ký tự\`;
  };
}
const min6 = minLength(6);
console.log("Lỗi:", min6("12345"));`,
      testCases: [
        { id: 'tc-1', description: 'Báo lỗi tối thiểu 6 ký tự', expectedOutput: 'Lỗi: Tối thiểu 6 ký tự' }
      ],
      hints: ['Hàm trả về một hàm (Closure pattern)'],
      explanation: 'Sử dụng Closure cho phép cấu hình tham số linh hoạt cho các quy tắc kiểm tra.'
    },
    challenge: {
      id: 'ex-12-4-3',
      lessonId: 'les-12-4',
      title: 'Bài tập Thử thách: Hoàn chỉnh hàm chạy bộ quy tắc kiểm tra (Pipeline)',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO12.4.1'],
      description: 'Viết hàm runValidation(value, rulesArray) duyệt qua mảng các hàm quy tắc rulesArray. Nếu có hàm nào trả về lỗi thì ngắt và trả về lỗi đó ngay lập tức; nếu tất cả đều null thì trả về "Hợp lệ 100%". Chạy thử với "admin" và 2 quy tắc [val => val.length >= 3 ? null : "Quá ngắn", val => val === "admin" ? null : "Không đúng"]. In kết quả.',
      starterCode: `function runValidation(value, rulesArray) {
  for (const rule of rulesArray) {
    const err = rule(value);
    if (err) return err;
  }
  return "Hợp lệ 100%";
}

const r1 = val => val.length >= 3 ? null : "Quá ngắn";
const r2 = val => val === "admin" ? null : "Không đúng";

console.log("Kết quả:", runValidation("admin", [r1, r2]));`,
      solutionCode: `function runValidation(value, rulesArray) {
  for (const rule of rulesArray) {
    const err = rule(value);
    if (err) return err;
  }
  return "Hợp lệ 100%";
}
const r1 = val => val.length >= 3 ? null : "Quá ngắn";
const r2 = val => val === "admin" ? null : "Không đúng";
console.log("Kết quả:", runValidation("admin", [r1, r2]));`,
      testCases: [
        { id: 'tc-1', description: 'Vượt qua cả 2 quy tắc', expectedOutput: 'Kết quả: Hợp lệ 100%' }
      ],
      hints: ['Duyệt qua từng rule, nếu có lỗi thì return ngay'],
      explanation: 'Đây là lõi kiến trúc của mọi thư viện Form Validation hiện đại trong hệ sinh thái JavaScript.'
    }
  },
  quiz: {
    id: 'quiz-12-4',
    lessonId: 'les-12-4',
    title: 'Trắc nghiệm Form Validator',
    passingScore: 70,
    questions: []
  },
  summary: [
    'Tách biệt logic xác thực (Schema/Rules) khỏi DOM để tái sử dụng.',
    'Quy tắc chuẩn: hợp lệ trả về null, có lỗi trả về chuỗi thông báo.'
  ],
  suggestedBookmarks: ['Kiến trúc Form Validator Schema', 'Closure trong Validation']
};

export const JS_MODULE_12_LESSONS: Lesson[] = [
  LESSON_12_1,
  LESSON_12_2,
  LESSON_12_3,
  LESSON_12_4
];
