import { Lesson } from '../../types';

// ==========================================
// MODULE 16: LOCAL STORAGE
// ==========================================

export const LESSON_16_1: Lesson = {
  id: 'les-16-1',
  moduleId: 'mod-16',
  track: 'javascript',
  language: 'javascript',
  title: '16.1 localStorage vs sessionStorage & Giới hạn lưu trữ',
  order: 1,
  durationMinutes: 40,
  difficulty: 'Cơ bản',
  prerequisites: ['Đã học Object và cặp Key-Value'],
  learningObjectives: [
    {
      id: 'LO16.1.1',
      code: 'LO16.1.1',
      title: 'Phân biệt cơ chế hoạt động của localStorage và sessionStorage',
      description: 'Hiểu vòng đời tồn tại vĩnh viễn (localStorage) vs đóng tab biến mất (sessionStorage).',
      bloomLevel: 'Understand',
      masteryPercentage: 92
    },
    {
      id: 'LO16.1.2',
      code: 'LO16.1.2',
      title: 'Các phương thức cơ bản của Web Storage API',
      description: 'Làm chủ setItem, getItem, removeItem, clear() và giới hạn dung lượng ~5MB.',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    }
  ],
  sections: [
    {
      id: 'sec-16-1-1',
      lessonId: 'les-16-1',
      order: 1,
      conceptName: 'localStorage vs sessionStorage',
      title: '1. Web Storage: Lưu trữ dữ liệu trực tiếp trên trình duyệt',
      explanation: 'Web Storage API cung cấp cơ chế lưu trữ cặp `Khóa (Key) - Giá trị (Value)` dạng chuỗi (String) trên máy khách: (1) `localStorage`: Dữ liệu lưu trữ VĨNH VIỄN, không bị mất đi khi người dùng tải lại trang hoặc tắt mở lại trình duyệt; (2) `sessionStorage`: Dữ liệu chỉ tồn tại trong phiên làm việc của TAB hiện tại, đóng tab sẽ bị xóa sạch. Dung lượng cho phép khoảng ~5MB cho mỗi tên miền (Origin).',
      syntax: 'localStorage.setItem("key", "value");\nconst val = localStorage.getItem("key");\nlocalStorage.removeItem("key");\nlocalStorage.clear(); // Xóa sạch toàn bộ',
      codeExample: `// Giả lập Web Storage API
class MockStorage {
  private store: Record<string, string> = {};
  setItem(k: string, v: string) { this.store[k] = String(v); }
  getItem(k: string) { return this.store[k] ?? null; }
  removeItem(k: string) { delete this.store[k]; }
}

const storage = new MockStorage();

// Lưu token đăng nhập
storage.setItem("user_token", "jwt_abc123xyz");
console.log("Đọc token:", storage.getItem("user_token"));

// Xóa token khi đăng xuất
storage.removeItem("user_token");
console.log("Token sau đăng xuất:", storage.getItem("user_token"));`,
      lineByLineExplanation: [
        { line: 11, text: 'Lưu token vào storage bằng setItem.' },
        { line: 12, text: 'Đọc token bằng getItem.' },
        { line: 15, text: 'Xóa token khi người dùng đăng xuất bằng removeItem.' }
      ],
      commonMistakes: [
        'Lưu mật khẩu thô hoặc thông tin thẻ tín dụng nhạy cảm vào localStorage (dễ bị tấn công XSS đánh cắp).'
      ],
      whenToUse: 'Dùng localStorage để lưu tùy chọn giao diện Theme Sáng/Tối, ngôn ngữ, giỏ hàng tạm.',
      whenNotToUse: 'Không dùng để lưu trữ file kích thước lớn (video, ảnh chất lượng cao) vượt quá 5MB.',
      realWorldUseCase: 'Ghi nhớ trạng thái đăng nhập hoặc cấu hình ngôn ngữ hiển thị (vi/en).'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-16-1',
    title: 'Thực hành thao tác lưu trữ chuỗi thiết lập',
    description: 'Mô phỏng lưu giá trị ngôn ngữ "vi-VN" vào kho lưu trữ.',
    starterCode: `const settingKey = "language";
const settingValue = "vi-VN";

console.log(\`Đã lưu cấu hình: \${settingKey} = \${settingValue}\`);`,
    expectedConsoleOutput: 'Đã lưu cấu hình: language = vi-VN',
    hint: 'setItem nhận cặp key và value dạng chuỗi.'
  },
  exercises: {
    basic: {
      id: 'ex-16-1-1',
      lessonId: 'les-16-1',
      title: 'Bài tập Cơ bản: Vòng đời của dữ liệu trong localStorage',
      difficulty: 'basic',
      learningObjectiveIds: ['LO16.1.1'],
      description: 'Khi người dùng tắt trình duyệt và mở lại vào ngày hôm sau, dữ liệu lưu trong localStorage có còn tồn tại không? Trả lời "Con" hoặc "Mat". In kết quả.',
      starterCode: `const isRetained = "Con";
console.log("Dữ liệu trong localStorage:", isRetained);`,
      solutionCode: `const isRetained = "Con";
console.log("Dữ liệu trong localStorage:", isRetained);`,
      testCases: [
        { id: 'tc-1', description: 'Còn tồn tại', expectedOutput: 'Dữ liệu trong localStorage: Con' }
      ],
      hints: ['localStorage tồn tại vĩnh viễn cho đến khi người dùng tự xóa cookie/cache'],
      explanation: 'localStorage không có thời gian hết hạn (expiration time), dữ liệu tồn tại xuyên suốt các phiên duyệt web.'
    },
    intermediate: {
      id: 'ex-16-1-2',
      lessonId: 'les-16-1',
      title: 'Bài tập Trung bình: Giá trị trả về khi truy cập key không tồn tại',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO16.1.2'],
      description: 'Nếu gọi localStorage.getItem("khoa_chua_tung_tao"), trình duyệt sẽ trả về giá trị gì: "undefined" hay "null"? In ra đáp án đúng.',
      starterCode: `const missingKeyValue = "null";
console.log("Giá trị trả về khi không tìm thấy key:", missingKeyValue);`,
      solutionCode: `const missingKeyValue = "null";
console.log("Giá trị trả về khi không tìm thấy key:", missingKeyValue);`,
      testCases: [
        { id: 'tc-1', description: 'Trả về null', expectedOutput: 'Giá trị trả về khi không tìm thấy key: null' }
      ],
      hints: ['getItem trả về null nếu khóa không tồn tại'],
      explanation: 'Khác với Object trả về undefined, Web Storage API getItem trả về null khi không tìm thấy key.'
    },
    challenge: {
      id: 'ex-16-1-3',
      lessonId: 'les-16-1',
      title: 'Bài tập Thử thách: Hàm xóa toàn bộ dữ liệu ứng dụng với clear()',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO16.1.2'],
      description: 'Khi người dùng bấm "Xóa sạch dữ liệu tài khoản", phương thức storage.clear() sẽ gỡ bỏ tất cả. Cho object store = { a: 1, b: 2, c: 3 }. Viết hàm clearAll(obj) xóa sạch tất cả key trong object để kích thước Object.keys(obj).length === 0. In ra: "Số key còn lại: 0".',
      starterCode: `const store = { a: 1, b: 2, c: 3 };

function clearAll(obj) {
  for (const k in obj) {
    delete obj[k];
  }
}

clearAll(store);
console.log("Số key còn lại:", Object.keys(store).length);`,
      solutionCode: `const store = { a: 1, b: 2, c: 3 };
function clearAll(obj) {
  for (const k in obj) {
    delete obj[k];
  }
}
clearAll(store);
console.log("Số key còn lại:", Object.keys(store).length);`,
      testCases: [
        { id: 'tc-1', description: 'Còn lại 0 key', expectedOutput: 'Số key còn lại: 0' }
      ],
      hints: ['Xóa sạch toàn bộ key tương đương storage.clear()'],
      explanation: 'storage.clear() dọn dẹp toàn bộ dữ liệu của domain trong một câu lệnh duy nhất.'
    }
  },
  quiz: {
    id: 'quiz-16-1',
    lessonId: 'les-16-1',
    title: 'Trắc nghiệm localStorage căn bản',
    passingScore: 70,
    questions: []
  },
  summary: [
    'localStorage lưu trữ vĩnh viễn (~5MB), sessionStorage bị xóa khi đóng tab.',
    'Dùng setItem để lưu, getItem để đọc, removeItem để xóa và clear để dọn sạch.'
  ],
  suggestedBookmarks: ['localStorage vs sessionStorage', 'Web Storage API']
};

export const LESSON_16_2: Lesson = {
  id: 'les-16-2',
  moduleId: 'mod-16',
  track: 'javascript',
  language: 'javascript',
  title: '16.2 Lưu & Đọc cấu trúc dữ liệu với JSON.stringify / parse',
  order: 2,
  durationMinutes: 50,
  difficulty: 'Trung bình',
  prerequisites: ['Đã học localStorage cơ bản và JSON'],
  learningObjectives: [
    {
      id: 'LO16.2.1',
      code: 'LO16.2.1',
      title: 'Tuần tự hóa dữ liệu phức tạp (Array, Object) bằng JSON.stringify',
      description: 'Tránh cạm bẫy lưu chuỗi "[object Object]" vào storage.',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    },
    {
      id: 'LO16.2.2',
      code: 'LO16.2.2',
      title: 'Khôi phục dữ liệu an toàn với JSON.parse và giá trị Fallback',
      description: 'Sử dụng toán tử gán mặc định hoặc try/catch khi dữ liệu trong storage bị null hoặc hỏng.',
      bloomLevel: 'Apply',
      masteryPercentage: 88
    }
  ],
  sections: [
    {
      id: 'sec-16-2-1',
      lessonId: 'les-16-2',
      order: 1,
      conceptName: 'Tuần tự hóa dữ liệu phức tạp vào Web Storage',
      title: '1. Cạm bẫy lưu Object vào localStorage và giải pháp JSON',
      explanation: '`localStorage` CHỈ CHẤP NHẬN KIỂU CHUỖI (String). Nếu bạn truyền một Mảng hoặc Đối tượng vào `localStorage.setItem("user", userObj)`, JavaScript sẽ tự động ép kiểu bằng `.toString()`, kết quả lưu trữ sẽ là chuỗi vô dụng `"[object Object]"`. Để lưu đúng: (1) Dùng `JSON.stringify(obj)` trước khi lưu; (2) Khi đọc ra dùng `JSON.parse(str || "[]")` để khôi phục lại cấu trúc Mảng/Object ban đầu.',
      syntax: '// Lưu trữ an toàn\nlocalStorage.setItem("cart", JSON.stringify(cartArray));\n\n// Đọc ra an toàn kèm fallback\nconst cart = JSON.parse(localStorage.getItem("cart") || "[]");',
      codeExample: `// Giả lập lưu mảng công việc vào storage
const tasks = [
  { id: 1, text: "Làm bài tập M16", isCompleted: true },
  { id: 2, text: "Chuẩn bị đồ án Capstone", isCompleted: false }
];

// 1. Chuyển thành JSON string trước khi lưu
const serialized = JSON.stringify(tasks);
console.log("Chuỗi lưu vào storage:", serialized);

// 2. Khôi phục lại mảng khi đọc ra
const restoredTasks = JSON.parse(serialized);
console.log("Số lượng công việc khôi phục:", restoredTasks.length);
console.log("Nhiệm vụ 1:", restoredTasks[0].text);`,
      lineByLineExplanation: [
        { line: 8, text: 'JSON.stringify biến mảng các đối tượng thành chuỗi hợp lệ.' },
        { line: 12, text: 'JSON.parse khôi phục chuỗi thành mảng các đối tượng có đầy đủ thuộc tính.' }
      ],
      commonMistakes: [
        'Gọi JSON.parse(null) -> trả về null, sau đó cố gắng gọi null.map() khiến ứng dụng bị crash (luôn kết hợp fallback || "[]").'
      ],
      whenToUse: 'Bắt buộc áp dụng khi cần lưu Mảng, Đối tượng, danh sách giỏ hàng, bảng điểm vào localStorage.',
      whenNotToUse: 'Không cần dùng nếu giá trị cần lưu vốn dĩ đã là chuỗi đơn giản (ví dụ lưu theme: "dark").',
      realWorldUseCase: 'Lưu trữ danh sách Todo List để khi F5 tải lại trang danh sách vẫn còn nguyên vẹn.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-16-2',
    title: 'Thực hành đọc dữ liệu kèm mảng mặc định Fallback',
    description: 'Sử dụng toán tử || "[]" để chống crash khi storage chưa có dữ liệu.',
    starterCode: `const rawData = null; // Giả lập khi chưa có trong storage
const cart = JSON.parse(rawData || "[]");

console.log("Giỏ hàng an toàn:", cart);
console.log("Độ dài giỏ hàng:", cart.length);`,
    expectedConsoleOutput: 'Giỏ hàng an toàn: []\nĐộ dài giỏ hàng: 0',
    hint: 'JSON.parse(null || "[]") trả về mảng rỗng an toàn.'
  },
  exercises: {
    basic: {
      id: 'ex-16-2-1',
      lessonId: 'les-16-2',
      title: 'Bài tập Cơ bản: Hậu quả của việc không dùng JSON.stringify',
      difficulty: 'basic',
      learningObjectiveIds: ['LO16.2.1'],
      description: 'Nếu bạn gọi String({ name: "An" }), kết quả chuỗi nhận được sẽ là gì: "[object Object]" hay "{\\"name\\": \\"An\\"}"? In ra kết quả.',
      starterCode: `const stringResult = "[object Object]";
console.log("Kết quả ép kiểu mặc định:", stringResult);`,
      solutionCode: `const stringResult = "[object Object]";
console.log("Kết quả ép kiểu mặc định:", stringResult);`,
      testCases: [
        { id: 'tc-1', description: '[object Object]', expectedOutput: 'Kết quả ép kiểu mặc định: [object Object]' }
      ],
      hints: ['Object.prototype.toString() trả về [object Object]'],
      explanation: 'Nếu không dùng JSON.stringify, đối tượng sẽ bị chuyển thành chuỗi [object Object] và mất sạch dữ liệu bên trong.'
    },
    intermediate: {
      id: 'ex-16-2-2',
      lessonId: 'les-16-2',
      title: 'Bài tập Trung bình: Viết hàm đọc mảng an toàn từ Storage (Safe Get)',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO16.2.2'],
      description: 'Viết hàm getStoredArray(rawJsonString) nhận vào chuỗi raw. Dùng try/catch: parse chuỗi, nếu null hoặc lỗi cú pháp thì trả về mảng rỗng []. Chạy thử với \'[10, 20, 30]\' và in độ dài mảng.',
      starterCode: `function getStoredArray(raw) {
  try {
    return JSON.parse(raw) || [];
  } catch {
    return [];
  }
}

const arr = getStoredArray('[10, 20, 30]');
console.log("Độ dài mảng khôi phục:", arr.length);`,
      solutionCode: `function getStoredArray(raw) {
  try {
    return JSON.parse(raw) || [];
  } catch {
    return [];
  }
}
const arr = getStoredArray('[10, 20, 30]');
console.log("Độ dài mảng khôi phục:", arr.length);`,
      testCases: [
        { id: 'tc-1', description: 'Độ dài là 3', expectedOutput: 'Độ dài mảng khôi phục: 3' }
      ],
      hints: ['JSON.parse bọc trong try/catch'],
      explanation: 'Hàm an toàn bảo vệ giao diện khỏi việc người dùng tự tay chỉnh sửa storage hỏng dữ liệu trong DevTools.'
    },
    challenge: {
      id: 'ex-16-2-3',
      lessonId: 'les-16-2',
      title: 'Bài tập Thử thách: Thêm mới một phần tử vào mảng đã lưu trong Storage',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO16.2.1', 'LO16.2.2'],
      description: 'Quy trình thêm 1 món vào mảng lưu trong storage: (1) Parse mảng hiện tại; (2) Push món mới vào; (3) Stringify và lưu ngược lại. Cho chuỗi hiện tại raw = \'["Sách", "Bút"]\'. Thêm "Thước" vào và in ra chuỗi JSON mới sau khi cập nhật.',
      starterCode: `const raw = '["Sách", "Bút"]';

// 1. Khôi phục mảng
const list = JSON.parse(raw);

// 2. Thêm món mới
list.push("Thước");

// 3. Tuần tự hóa ngược lại
const updatedRaw = JSON.stringify(list);
console.log("Dữ liệu cập nhật mới:", updatedRaw);`,
      solutionCode: `const raw = '["Sách", "Bút"]';
const list = JSON.parse(raw);
list.push("Thước");
const updatedRaw = JSON.stringify(list);
console.log("Dữ liệu cập nhật mới:", updatedRaw);`,
      testCases: [
        { id: 'tc-1', description: 'Mảng có thêm Thước', expectedOutput: 'Dữ liệu cập nhật mới: ["Sách","Bút","Thước"]' }
      ],
      hints: ['Parse -> Push -> Stringify'],
      explanation: 'Quy trình 3 bước kinh điển để thao tác trên mảng lưu trữ ở client.'
    }
  },
  quiz: {
    id: 'quiz-16-2',
    lessonId: 'les-16-2',
    title: 'Trắc nghiệm Lưu trữ JSON trong Storage',
    passingScore: 70,
    questions: []
  },
  summary: [
    'localStorage chỉ lưu được chuỗi, dùng JSON.stringify để lưu Array/Object.',
    'Dùng JSON.parse kết hợp giá trị fallback || "[]" để tránh lỗi null.'
  ],
  suggestedBookmarks: ['Quy trình Parse -> Push -> Stringify', 'Khôi phục dữ liệu an toàn']
};

export const LESSON_16_3: Lesson = {
  id: 'les-16-3',
  moduleId: 'mod-16',
  track: 'javascript',
  language: 'javascript',
  title: '16.3 Xây dựng tính năng lưu Theme (Dark/Light) và Giỏ hàng',
  order: 3,
  durationMinutes: 55,
  difficulty: 'Trung bình',
  prerequisites: ['Đã học toàn bộ Module 16', 'Hiểu DOM classList'],
  learningObjectives: [
    {
      id: 'LO16.3.1',
      code: 'LO16.3.1',
      title: 'Tự động ghi nhớ và khôi phục giao diện Dark/Light Mode',
      description: 'Lưu theme vào localStorage và đồng bộ class dark khi trang vừa tải.',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    },
    {
      id: 'LO16.3.2',
      code: 'LO16.3.2',
      title: 'Xây dựng mô hình Mini Cart có lưu trữ liên tục',
      description: 'Thêm, xóa và tính tổng tiền sản phẩm trong giỏ hàng tồn tại qua F5.',
      bloomLevel: 'Apply',
      masteryPercentage: 88
    }
  ],
  sections: [
    {
      id: 'sec-16-3-1',
      lessonId: 'les-16-3',
      order: 1,
      conceptName: 'Module quản lý Theme và Giỏ hàng',
      title: '1. Kiến trúc lưu trữ trạng thái người dùng (Persistent State)',
      explanation: 'Trong trải nghiệm người dùng, khi họ chọn giao diện Tối (Dark Mode) hoặc thêm sản phẩm vào giỏ hàng, họ kỳ vọng khi tắt trang web hoặc tải lại (F5) thì mọi thứ vẫn còn nguyên vẹn. Cơ chế: (1) Khi ứng dụng khởi chạy (Load): đọc dữ liệu từ storage và áp dụng ngay; (2) Khi có thay đổi: cập nhật giao diện đồng thời ghi đè ngay vào storage.',
      syntax: '// Khởi tạo theme khi vào trang\nconst savedTheme = localStorage.getItem("theme") || "light";\ndocument.body.classList.toggle("dark", savedTheme === "dark");',
      codeExample: `// Giả lập Module Giỏ hàng lưu trữ bền vững
class CartStorageManager {
  private cart: Array<{ id: number; name: string; price: number }> = [];

  constructor(initialDataJson: string | null) {
    this.cart = initialDataJson ? JSON.parse(initialDataJson) : [];
  }

  addItem(item: { id: number; name: string; price: number }) {
    this.cart.push(item);
  }

  getTotalPrice() {
    return this.cart.reduce((sum, item) => sum + item.price, 0);
  }

  save() {
    return JSON.stringify(this.cart);
  }
}

// Khởi chạy giỏ hàng
const cartManager = new CartStorageManager(null);
cartManager.addItem({ id: 1, name: "Áo thun", price: 150000 });
cartManager.addItem({ id: 2, name: "Mũ len", price: 80000 });

console.log("Tổng tiền giỏ hàng:", cartManager.getTotalPrice(), "VND");
console.log("Dữ liệu sẵn sàng lưu storage:", cartManager.save());`,
      lineByLineExplanation: [
        { line: 5, text: 'Khởi tạo giỏ hàng từ dữ liệu lưu trữ nếu có, ngược lại dùng mảng rỗng.' },
        { line: 12, text: 'Tính tổng tiền giỏ hàng bằng phương thức reduce.' },
        { line: 16, text: 'Phương thức save() xuất dữ liệu dạng JSON string để lưu trữ.' }
      ],
      commonMistakes: [
        'Cập nhật giỏ hàng trên giao diện nhưng quên gọi hàm lưu vào storage, khiến người dùng F5 là mất sạch hàng.'
      ],
      whenToUse: 'Dùng cho mọi tính năng cần duy trì phiên làm việc của khách hàng vãng lai (Guest Cart, User Preferences).',
      whenNotToUse: 'Khi người dùng đã đăng nhập tài khoản chính thức, nên đồng bộ giỏ hàng lên Database máy chủ.',
      realWorldUseCase: 'Giỏ hàng của Tiki, Shopee cho phép khách chọn đồ trước khi đăng nhập tài khoản.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-16-3',
    title: 'Thực hành khôi phục Theme từ Storage',
    description: 'Đọc theme đã lưu và áp dụng class tương ứng.',
    starterCode: `const storedTheme = "dark";
const isDarkMode = storedTheme === "dark";

console.log("Bật class dark cho thẻ body:", isDarkMode);`,
    expectedConsoleOutput: 'Bật class dark cho thẻ body: true',
    hint: 'storedTheme === "dark" quyết định bật class dark.'
  },
  exercises: {
    basic: {
      id: 'ex-16-3-1',
      lessonId: 'les-16-3',
      title: 'Bài tập Cơ bản: Lựa chọn giá trị mặc định cho Theme',
      difficulty: 'basic',
      learningObjectiveIds: ['LO16.3.1'],
      description: 'Nếu người dùng lần đầu truy cập và trong localStorage chưa có key "app_theme", ta nên gán giá trị mặc định là gì bằng toán tử ||: "light" hay "dark"? In giá trị mặc định.',
      starterCode: `const defaultTheme = "light";
console.log("Giao diện mặc định:", defaultTheme);`,
      solutionCode: `const defaultTheme = "light";
console.log("Giao diện mặc định:", defaultTheme);`,
      testCases: [
        { id: 'tc-1', description: 'Theme mặc định là light', expectedOutput: 'Giao diện mặc định: light' }
      ],
      hints: ['localStorage.getItem("app_theme") || "light"'],
      explanation: 'Luôn cung cấp fallback "light" để giao diện hiển thị đúng chuẩn khi chưa có dữ liệu lưu trữ.'
    },
    intermediate: {
      id: 'ex-16-3-2',
      lessonId: 'les-16-3',
      title: 'Bài tập Trung bình: Viết hàm đảo trạng thái Theme và lưu trữ',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO16.3.1'],
      description: 'Viết hàm toggleAndSaveTheme(currentTheme). Nếu currentTheme là "light" thì đổi thành "dark", ngược lại đổi thành "light". Trả về theme mới. Chạy thử với "light" và in kết quả.',
      starterCode: `function toggleAndSaveTheme(currentTheme) {
  const newTheme = currentTheme === "light" ? "dark" : "light";
  return newTheme;
}

console.log("Theme mới sau khi chuyển:", toggleAndSaveTheme("light"));`,
      solutionCode: `function toggleAndSaveTheme(currentTheme) {
  const newTheme = currentTheme === "light" ? "dark" : "light";
  return newTheme;
}
console.log("Theme mới sau khi chuyển:", toggleAndSaveTheme("light"));`,
      testCases: [
        { id: 'tc-1', description: 'Đổi sang dark', expectedOutput: 'Theme mới sau khi chuyển: dark' }
      ],
      hints: ['currentTheme === "light" ? "dark" : "light"'],
      explanation: 'Hàm chuyển đổi theme đảo ngược trạng thái và sẵn sàng ghi vào storage.'
    },
    challenge: {
      id: 'ex-16-3-3',
      lessonId: 'les-16-3',
      title: 'Bài tập Thử thách: Xóa một món hàng khỏi giỏ hàng lưu trữ',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO16.3.2'],
      description: 'Cho mảng giỏ hàng cart = [{ id: 1, name: "Bàn phím" }, { id: 2, name: "Chuột" }]. Viết hàm removeFromCart(cartList, itemIdToRemove) dùng filter loại bỏ món có id đó và trả về mảng mới. Chạy thử xóa id = 1 và in tên món còn lại.',
      starterCode: `const cart = [{ id: 1, name: "Bàn phím" }, { id: 2, name: "Chuột" }];

function removeFromCart(cartList, idToRemove) {
  return cartList.filter(item => item.id !== idToRemove);
}

const updatedCart = removeFromCart(cart, 1);
console.log("Món còn lại trong giỏ:", updatedCart[0].name);`,
      solutionCode: `const cart = [{ id: 1, name: "Bàn phím" }, { id: 2, name: "Chuột" }];
function removeFromCart(cartList, idToRemove) {
  return cartList.filter(item => item.id !== idToRemove);
}
const updatedCart = removeFromCart(cart, 1);
console.log("Món còn lại trong giỏ:", updatedCart[0].name);`,
      testCases: [
        { id: 'tc-1', description: 'Còn lại Chuột', expectedOutput: 'Món còn lại trong giỏ: Chuột' }
      ],
      hints: ['cartList.filter(item => item.id !== idToRemove)'],
      explanation: 'filter loại bỏ chính xác phần tử theo id, sau đó ta chỉ cần stringify và lưu lại vào storage.'
    }
  },
  quiz: {
    id: 'quiz-16-3',
    lessonId: 'les-16-3',
    title: 'Trắc nghiệm Ứng dụng Storage',
    passingScore: 70,
    questions: []
  },
  summary: [
    'Đồng bộ giao diện Dark/Light mode qua classList và localStorage.',
    'Duy trì dữ liệu giỏ hàng liên tục qua các thao tác Add, Remove, Calculate Total.'
  ],
  suggestedBookmarks: ['Đồng bộ Dark Mode', 'Quản lý giỏ hàng với Storage']
};

export const JS_MODULE_16_LESSONS: Lesson[] = [
  LESSON_16_1,
  LESSON_16_2,
  LESSON_16_3
];
