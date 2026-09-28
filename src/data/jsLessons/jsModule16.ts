import { Lesson } from '../../types';

// ==========================================
// MODULE 16: LOCAL STORAGE (LƯU TRỮ PHÍA CLIENT)
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
  prerequisites: [
    'Hiểu môi trường trình duyệt Web',
    'Biết về key-value store'
  ],
  learningObjectives: [
    {
      id: 'LO16.1.1',
      code: 'LO16.1.1',
      title: 'Phân biệt localStorage và sessionStorage',
      description: 'Hiểu vòng đời lưu trữ: localStorage tồn tại vĩnh viễn cho đến khi bị xóa chủ động; sessionStorage mất đi khi đóng tab.',
      bloomLevel: 'Understand',
      masteryPercentage: 92
    },
    {
      id: 'LO16.1.2',
      code: 'LO16.1.2',
      title: 'Các phương thức cơ bản của Web Storage API',
      description: 'Làm chủ setItem, getItem, removeItem, clear và thuộc tính length.',
      bloomLevel: 'Apply',
      masteryPercentage: 95
    }
  ],
  sections: [
    {
      id: 'sec-16-1-1',
      lessonId: 'les-16-1',
      order: 1,
      conceptName: 'Web Storage API: localStorage vs sessionStorage',
      title: '1. Bản chất Web Storage phía Client',
      explanation: 'Web Storage cho phép lưu trữ cặp khóa - giá trị (Key - Value) ngay trên trình duyệt của người dùng (dung lượng khoảng 5MB - 10MB tùy trình duyệt). Có 2 cơ chế chính: 1) `localStorage` lưu trữ vĩnh viễn, dữ liệu không mất đi khi tắt trình duyệt hay tắt máy; 2) `sessionStorage` chỉ tồn tại trong phiên làm việc của tab hiện tại, đóng tab sẽ bị xóa sạch.',
      syntax: 'localStorage.setItem("key", "value");\nconst val = localStorage.getItem("key");\nlocalStorage.removeItem("key");\nlocalStorage.clear();',
      codeExample: `// Giả lập môi trường Storage an toàn
class MockStorage {
  constructor() { this.store = {}; }
  setItem(key, val) { this.store[key] = String(val); }
  getItem(key) { return this.store[key] !== undefined ? this.store[key] : null; }
  removeItem(key) { delete this.store[key]; }
  clear() { this.store = {}; }
}

const storage = new MockStorage();

// 1. Lưu trữ chuỗi văn bản
storage.setItem("username", "nguyen_van_a");
storage.setItem("theme", "dark");

// 2. Đọc dữ liệu ra
console.log("Tên người dùng:", storage.getItem("username"));
console.log("Giao diện:", storage.getItem("theme"));

// 3. Xóa một mục cụ thể
storage.removeItem("theme");
console.log("Giao diện sau khi xóa:", storage.getItem("theme")); // null`,
      lineByLineExplanation: [
        { line: 12, text: 'setItem(key, value) lưu dữ liệu vào storage dưới dạng chuỗi string.' },
        { line: 16, text: 'getItem(key) trả về giá trị chuỗi, hoặc null nếu khóa không tồn tại.' },
        { line: 20, text: 'removeItem(key) xóa chính xác 1 mục theo tên khóa.' }
      ],
      commonMistakes: [
        'Lưu mật khẩu, mã PIN hoặc thông tin thẻ tín dụng nhạy cảm vào localStorage (rất dễ bị tấn công qua lỗi XSS).'
      ],
      whenToUse: 'Dùng lưu cài đặt giao diện (Dark/Light mode), tùy chọn ngôn ngữ, token phiên làm việc, giỏ hàng khách vãng lai.',
      whenNotToUse: 'Không lưu dữ liệu dung lượng lớn (> 5MB) hoặc dữ liệu bí mật tối mật.',
      realWorldUseCase: 'Lưu giữ trạng thái "Đã đồng ý chính sách Cookie" hoặc "Đóng popup khuyến mãi".'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-16-1',
    title: 'Thực hành: Lưu trữ và kiểm tra trạng thái đăng nhập',
    description: 'Chạy thử thao tác lưu accessToken vào storage, đọc ra kiểm tra và dọn dẹp bằng removeItem.',
    starterCode: `const mockLocalStorage = {
  db: {},
  setItem(k, v) { this.db[k] = v; },
  getItem(k) { return this.db[k] || null; },
  removeItem(k) { delete this.db[k]; }
};

mockLocalStorage.setItem("userToken", "JWT_TOKEN_ABCXYZ");
console.log("Token hiện tại:", mockLocalStorage.getItem("userToken"));

mockLocalStorage.removeItem("userToken");
console.log("Token sau khi đăng xuất:", mockLocalStorage.getItem("userToken"));`,
    expectedConsoleOutput: 'Token hiện tại: JWT_TOKEN_ABCXYZ\nToken sau khi đăng xuất: null',
    hint: 'getItem trả về null khi key không còn tồn tại.',
    language: 'javascript'
  },
  exercises: {
    basic: {
      id: 'ex-16-1-1',
      lessonId: 'les-16-1',
      title: 'Bài tập Cơ bản: Lưu và đọc ngôn ngữ người dùng',
      difficulty: 'basic',
      learningObjectiveIds: ['LO16.1.2'],
      description: 'Cho đối tượng storage giả lập `storage`. Dùng `storage.setItem("lang", "vi")` để lưu ngôn ngữ. Sau đó dùng `storage.getItem("lang")` đọc ra và in: `Ngôn ngữ đã chọn: vi`.',
      starterCode: `const storage = {
  data: {},
  setItem(k, v) { this.data[k] = String(v); },
  getItem(k) { return this.data[k] || null; }
};

// Lưu và đọc ngôn ngữ:
`,
      solutionCode: `const storage = {
  data: {},
  setItem(k, v) { this.data[k] = String(v); },
  getItem(k) { return this.data[k] || null; }
};

storage.setItem("lang", "vi");
console.log("Ngôn ngữ đã chọn:", storage.getItem("lang"));`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra in đúng ngôn ngữ đã lưu',
          expectedOutput: 'Ngôn ngữ đã chọn: vi'
        }
      ],
      hints: ['storage.setItem("lang", "vi"); console.log("Ngôn ngữ đã chọn:", storage.getItem("lang"));'],
      explanation: 'Thao tác lưu và đọc chuỗi căn bản của Storage API.'
    },
    intermediate: {
      id: 'ex-16-1-2',
      lessonId: 'les-16-1',
      title: 'Bài tập Trung bình: Xóa sạch bộ nhớ với clear()',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO16.1.2'],
      description: 'Lưu 2 khóa `"item1"` và `"item2"`. Sau đó gọi `storage.clear()` để dọn sạch toàn bộ. Kiểm tra `storage.getItem("item1")` và in ra: `Giá trị sau clear: null`.',
      starterCode: `const storage = {
  data: {},
  setItem(k, v) { this.data[k] = String(v); },
  getItem(k) { return this.data[k] !== undefined ? this.data[k] : null; },
  clear() { this.data = {}; }
};

// Lưu 2 mục, gọi clear() và kiểm tra:
`,
      solutionCode: `const storage = {
  data: {},
  setItem(k, v) { this.data[k] = String(v); },
  getItem(k) { return this.data[k] !== undefined ? this.data[k] : null; },
  clear() { this.data = {}; }
};

storage.setItem("item1", "A");
storage.setItem("item2", "B");
storage.clear();
console.log("Giá trị sau clear:", storage.getItem("item1"));`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra clear xóa toàn bộ dữ liệu về null',
          expectedOutput: 'Giá trị sau clear: null'
        }
      ],
      hints: ['storage.clear() xóa toàn bộ thuộc tính trong storage'],
      explanation: 'clear() dùng khi người dùng đăng xuất hoàn toàn khỏi hệ thống.'
    },
    challenge: {
      id: 'ex-16-1-3',
      lessonId: 'les-16-1',
      title: 'Bài tập Thử thách: Kiểm tra dung lượng và an toàn khi lưu Storage',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO16.1.1'],
      description: 'Viết hàm `safeSetItem(storage, key, value)` bọc lệnh `storage.setItem` trong khối `try/catch`. Nếu lưu thành công in `Đã lưu thành công`. Nếu xảy ra lỗi (ví dụ QuotaExceededError khi đầy bộ nhớ) in `Lỗi: Bộ nhớ đã đầy`. Mô phỏng với storage ném lỗi để kiểm tra.',
      starterCode: `const failingStorage = {
  setItem(k, v) {
    throw new Error("QuotaExceededError");
  }
};

function safeSetItem(store, key, value) {
  // Bọc trong try/catch:
}

safeSetItem(failingStorage, "bigData", "...");`,
      solutionCode: `const failingStorage = {
  setItem(k, v) {
    throw new Error("QuotaExceededError");
  }
};

function safeSetItem(store, key, value) {
  try {
    store.setItem(key, value);
    console.log("Đã lưu thành công");
  } catch (err) {
    console.log("Lỗi: Bộ nhớ đã đầy");
  }
}

safeSetItem(failingStorage, "bigData", "...");`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra bắt đúng ngoại lệ bộ nhớ đầy',
          expectedOutput: 'Lỗi: Bộ nhớ đã đầy'
        }
      ],
      hints: ['try { store.setItem(key, value); } catch (e) { ... }'],
      explanation: 'Luôn bọc try/catch khi ghi storage để tránh vỡ trang ở chế độ duyệt web ẩn danh (Private Browsing).'
    }
  },
  quiz: {
    id: 'quiz-16-1',
    lessonId: 'les-16-1',
    title: 'Trắc nghiệm: Web Storage',
    passingScore: 70,
    questions: [
      {
        id: 'q-16-1-1',
        lessonId: 'les-16-1',
        learningObjectiveId: 'LO16.1.1',
        type: 'multiple_choice',
        difficulty: 'easy',
        prompt: 'Dữ liệu được lưu trong localStorage sẽ bị xóa bỏ khi nào?',
        options: [
          { id: 'a', text: 'Khi người dùng tắt tab trình duyệt' },
          { id: 'b', text: 'Khi người dùng khởi động lại máy tính' },
          { id: 'c', text: 'Chỉ khi JavaScript gọi removeItem/clear hoặc người dùng xóa cache trình duyệt' },
          { id: 'd', text: 'Sau đúng 24 giờ kể từ khi lưu' }
        ],
        correctAnswer: 'c',
        explanation: 'localStorage có tính bền bỉ vĩnh viễn (Persistent), không tự động hết hạn theo phiên.',
        relatedLessonId: 'les-16-1'
      }
    ]
  },
  summary: [
    'localStorage lưu trữ bền vững vĩnh viễn, sessionStorage mất khi đóng tab.',
    'Dung lượng lưu trữ giới hạn khoảng 5MB theo Origin (giao thức + domain + port).',
    'Chỉ lưu các cấu hình giao diện và trạng thái không nhạy cảm.'
  ],
  suggestedBookmarks: [
    'Chính sách Same-Origin Policy trong Web Storage',
    'IndexedDB: Giải pháp lưu trữ cơ sở dữ liệu lớn phía Client'
  ]
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
  prerequisites: [
    'Đã học Bài 16.1 về localStorage',
    'Biết về JSON.stringify và JSON.parse'
  ],
  learningObjectives: [
    {
      id: 'LO16.2.1',
      code: 'LO16.2.1',
      title: 'Khắc phục cạm bẫy [object Object] khi lưu Storage',
      description: 'Hiểu tại sao Web Storage chỉ lưu string, nếu truyền object trực tiếp sẽ bị ép kiểu thành [object Object].',
      bloomLevel: 'Analyze',
      masteryPercentage: 95
    },
    {
      id: 'LO16.2.2',
      code: 'LO16.2.2',
      title: 'Mô hình chuẩn hóa Lưu - Đọc Object và Array trong Storage',
      description: 'Làm chủ quy trình 2 chiều: Lưu = JSON.stringify -> setItem; Đọc = getItem -> JSON.parse với giá trị mặc định.',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    }
  ],
  sections: [
    {
      id: 'sec-16-2-1',
      lessonId: 'les-16-2',
      order: 1,
      conceptName: 'Tuần tự hóa dữ liệu phức hợp cho Storage',
      title: '1. Quy trình Lưu - Đọc Object & Array trong localStorage',
      explanation: 'Web Storage API chỉ hỗ trợ lưu trữ kiểu dữ liệu String. Nếu bạn gọi `localStorage.setItem("user", { name: "An" })`, JavaScript sẽ tự gọi phương thức `.toString()` của object và lưu chuỗi vô nghĩa `"[object Object]"`. Do đó, quy tắc vàng bắt buộc: 1) Khi lưu: `localStorage.setItem(key, JSON.stringify(data))`; 2) Khi đọc: `const data = JSON.parse(localStorage.getItem(key)) || fallbackValue`.',
      syntax: '// Lưu mảng/đối tượng\nlocalStorage.setItem("cart", JSON.stringify(items));\n// Đọc mảng/đối tượng an toàn\nconst items = JSON.parse(localStorage.getItem("cart")) || [];',
      codeExample: `// Giả lập storage
const storage = {
  db: {},
  setItem(k, v) { this.db[k] = String(v); },
  getItem(k) { return this.db[k] || null; }
};

// 1. Dữ liệu phức hợp mảng danh sách công việc (Todo List)
const initialTodos = [
  { id: 1, text: "Học ES6", done: true },
  { id: 2, text: "Làm Mini Project", done: false }
];

// 2. Lưu mảng vào storage qua JSON.stringify:
storage.setItem("todos", JSON.stringify(initialTodos));
console.log("Chuỗi lưu trong Storage:", storage.getItem("todos"));

// 3. Đọc dữ liệu ra và parse thành mảng:
const loadedTodos = JSON.parse(storage.getItem("todos")) || [];
console.log("Số công việc đã khôi phục:", loadedTodos.length);
console.log("Công việc 1:", loadedTodos[0].text);`,
      lineByLineExplanation: [
        { line: 16, text: 'JSON.stringify biến mảng object thành chuỗi JSON chuẩn mực để lưu vào storage.' },
        { line: 20, text: 'JSON.parse phục hồi chuỗi JSON thành mảng đối tượng JavaScript để tính toán tiếp.' },
        { line: 20, text: 'Toán tử || [] cung cấp mảng rỗng mặc định nếu khóa chưa từng tồn tại.' }
      ],
      commonMistakes: [
        'Gọi JSON.parse(null) khi key chưa có trong storage (sẽ trả về null, nếu gọi tiếp .length sẽ gây lỗi TypeError).'
      ],
      whenToUse: 'Bắt buộc áp dụng khi lưu danh sách todo, giỏ hàng, thông tin hồ sơ người dùng, lịch sử tìm kiếm.',
      whenNotToUse: 'Không lưu các object có tham chiếu vòng (Circular reference) vì JSON.stringify sẽ báo lỗi TypeError.',
      realWorldUseCase: 'Lưu giỏ hàng e-commerce (Shopee/Lazada) để khi khách refresh trang giỏ hàng không bị biến mất.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-16-2',
    title: 'Thực hành: Thêm sản phẩm vào mảng lưu trong Storage',
    description: 'Chạy thử quy trình: Đọc giỏ hàng cũ -> Thêm sản phẩm mới -> Ghi đè lại mảng mới vào storage.',
    starterCode: `const mockStore = {
  db: { "cart": JSON.stringify([{ id: 1, name: "Sách JS", qty: 1 }]) },
  setItem(k, v) { this.db[k] = String(v); },
  getItem(k) { return this.db[k] || null; }
};

// 1. Đọc giỏ hàng cũ:
const cart = JSON.parse(mockStore.getItem("cart")) || [];

// 2. Thêm món mới:
cart.push({ id: 2, name: "Vở ghi chép", qty: 2 });

// 3. Lưu lại:
mockStore.setItem("cart", JSON.stringify(cart));

// Kiểm tra:
const updatedCart = JSON.parse(mockStore.getItem("cart"));
console.log("Tổng số loại sản phẩm trong giỏ:", updatedCart.length);
console.log("Món mới thêm:", updatedCart[1].name);`,
    expectedConsoleOutput: 'Tổng số loại sản phẩm trong giỏ: 2\nMón mới thêm: Vở ghi chép',
    hint: 'Luôn parse mảng cũ, push phần tử mới rồi stringify ghi lại.',
    language: 'javascript'
  },
  exercises: {
    basic: {
      id: 'ex-16-2-1',
      lessonId: 'les-16-2',
      title: 'Bài tập Cơ bản: Lưu và đọc thông tin Profile người dùng',
      difficulty: 'basic',
      learningObjectiveIds: ['LO16.2.2'],
      description: 'Cho `profile = { name: "An", role: "Dev" }`. Hãy lưu vào storage với key `"profile"`, sau đó đọc ra parse thành object và in: `Họ tên: An - Vai trò: Dev`.',
      starterCode: `const storage = {
  db: {},
  setItem(k, v) { this.db[k] = String(v); },
  getItem(k) { return this.db[k] || null; }
};

const profile = { name: "An", role: "Dev" };
// Lưu và đọc profile:
`,
      solutionCode: `const storage = {
  db: {},
  setItem(k, v) { this.db[k] = String(v); },
  getItem(k) { return this.db[k] || null; }
};

const profile = { name: "An", role: "Dev" };
storage.setItem("profile", JSON.stringify(profile));
const loaded = JSON.parse(storage.getItem("profile"));
console.log(\`Họ tên: \${loaded.name} - Vai trò: \${loaded.role}\`);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra in đúng thông tin profile đã lưu',
          expectedOutput: 'Họ tên: An - Vai trò: Dev'
        }
      ],
      hints: ['storage.setItem("profile", JSON.stringify(profile)); const loaded = JSON.parse(storage.getItem("profile"));'],
      explanation: 'Quy trình chuẩn hóa lưu trữ object trong localStorage.'
    },
    intermediate: {
      id: 'ex-16-2-2',
      lessonId: 'les-16-2',
      title: 'Bài tập Trung bình: Xử lý giá trị mặc định Fallback khi Key không tồn tại',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO16.2.2'],
      description: 'Viết hàm `getSettings()` đọc key `"settings"` từ storage. Nếu key không tồn tại, trả về object mặc định `{ sound: true, volume: 80 }`. In ra: `Âm lượng mặc định: 80`.',
      starterCode: `const emptyStorage = {
  getItem(k) { return null; }
};

function getSettings() {
  // Trả về settings hoặc fallback mặc định:
}

console.log("Âm lượng mặc định:", getSettings().volume);`,
      solutionCode: `const emptyStorage = {
  getItem(k) { return null; }
};

function getSettings() {
  const data = emptyStorage.getItem("settings");
  return data ? JSON.parse(data) : { sound: true, volume: 80 };
}

console.log("Âm lượng mặc định:", getSettings().volume);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra trả về đúng giá trị volume mặc định',
          expectedOutput: 'Âm lượng mặc định: 80'
        }
      ],
      hints: ['return data ? JSON.parse(data) : { sound: true, volume: 80 };'],
      explanation: 'Luôn cung cấp fallback mặc định để tránh lỗi khi ứng dụng chạy lần đầu.'
    },
    challenge: {
      id: 'ex-16-2-3',
      lessonId: 'les-16-2',
      title: 'Bài tập Thử thách: Xóa phần tử trong mảng Storage theo ID',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO16.2.2'],
      description: 'Cho mảng ban đầu 3 phần tử `[{id:1}, {id:2}, {id:3}]` trong storage key `"list"`. Viết hàm `deleteItem(id)` đọc mảng, lọc bỏ phần tử có id tương ứng, lưu lại mảng mới vào storage. Xóa id 2 và in: `Số phần tử còn lại: 2`.',
      starterCode: `const store = {
  db: { "list": JSON.stringify([{ id: 1 }, { id: 2 }, { id: 3 }]) },
  setItem(k, v) { this.db[k] = String(v); },
  getItem(k) { return this.db[k] || null; }
};

function deleteItem(id) {
  // Lọc bỏ phần tử và lưu lại:
}

deleteItem(2);
const remaining = JSON.parse(store.getItem("list"));
console.log("Số phần tử còn lại:", remaining.length);`,
      solutionCode: `const store = {
  db: { "list": JSON.stringify([{ id: 1 }, { id: 2 }, { id: 3 }]) },
  setItem(k, v) { this.db[k] = String(v); },
  getItem(k) { return this.db[k] || null; }
};

function deleteItem(id) {
  const list = JSON.parse(store.getItem("list")) || [];
  const updated = list.filter(item => item.id !== id);
  store.setItem("list", JSON.stringify(updated));
}

deleteItem(2);
const remaining = JSON.parse(store.getItem("list"));
console.log("Số phần tử còn lại:", remaining.length);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra mảng còn lại 2 phần tử sau khi xóa id 2',
          expectedOutput: 'Số phần tử còn lại: 2'
        }
      ],
      hints: ['list.filter(item => item.id !== id)'],
      explanation: 'Thao tác CRUD cơ bản trên cơ sở dữ liệu mảng của Local Storage.'
    }
  },
  quiz: {
    id: 'quiz-16-2',
    lessonId: 'les-16-2',
    title: 'Trắc nghiệm: JSON & Web Storage',
    passingScore: 70,
    questions: [
      {
        id: 'q-16-2-1',
        lessonId: 'les-16-2',
        learningObjectiveId: 'LO16.2.1',
        type: 'multiple_choice',
        difficulty: 'easy',
        prompt: 'Điều gì sẽ xảy ra nếu bạn truyền trực tiếp một Object vào localStorage.setItem("data", { name: "An" }) mà không dùng JSON.stringify()?',
        options: [
          { id: 'a', text: 'Trình duyệt tự động chuyển thành JSON' },
          { id: 'b', text: 'Giá trị lưu trong Storage sẽ là chuỗi "[object Object]" và mất toàn bộ dữ liệu bên trong' },
          { id: 'c', text: 'Trình duyệt báo lỗi cú pháp SyntaxError' },
          { id: 'd', text: 'Object được lưu nguyên vẹn' }
        ],
        correctAnswer: 'b',
        explanation: 'localStorage ép kiểu giá trị sang string bằng toString(), biến object thành "[object Object]".',
        relatedLessonId: 'les-16-2'
      }
    ]
  },
  summary: [
    'localStorage chỉ lưu chuỗi, bắt buộc dùng JSON.stringify khi lưu object/mảng.',
    'Dùng JSON.parse khi đọc để khôi phục lại cấu trúc dữ liệu nguyên bản.',
    'Luôn cung cấp giá trị mặc định để tránh lỗi khi dữ liệu chưa từng được lưu.'
  ],
  suggestedBookmarks: [
    'Thư viện localForage: Wrapper bất đồng bộ cho Web Storage và IndexedDB',
    'Kỹ thuật Custom Hook useLocalStorage trong React'
  ]
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
  prerequisites: [
    'Đã học Bài 16.1 và 16.2',
    'Hiểu DOM classList hoặc mô hình State'
  ],
  learningObjectives: [
    {
      id: 'LO16.3.1',
      code: 'LO16.3.1',
      title: 'Xây dựng tính năng Theme Switcher ghi nhớ trạng thái',
      description: 'Lưu trạng thái giao diện (Dark mode / Light mode) và tự động áp dụng ngay khi mở lại trang web.',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    },
    {
      id: 'LO16.3.2',
      code: 'LO16.3.2',
      title: 'Quản lý giỏ hàng mua sắm Client-side với Local Storage',
      description: 'Thêm, sửa số lượng, xóa và tính tổng tiền giỏ hàng lưu trữ bền vững sau mỗi lần F5.',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    }
  ],
  sections: [
    {
      id: 'sec-16-3-1',
      lessonId: 'les-16-3',
      order: 1,
      conceptName: 'Ứng dụng thực tế của Local Storage',
      title: '1. Ứng dụng thực tế: Quản lý Theme & Giỏ hàng',
      explanation: 'Trong phát triển web hiện đại, Local Storage là công cụ đơn giản nhưng vô cùng đắc lực để cải thiện trải nghiệm người dùng (UX). Hai ví dụ tiêu biểu nhất: 1) Lưu tùy chọn Theme (dark/light) để trang không bị chớp sáng khi tải lại; 2) Duy trì giỏ hàng cho người dùng chưa đăng nhập, giúp tỉ lệ chuyển đổi đơn hàng tăng cao.',
      syntax: '// Đọc theme khi khởi động\nconst currentTheme = localStorage.getItem("theme") || "light";\napplyTheme(currentTheme);',
      codeExample: `// Hệ thống quản lý Theme độc lập:
const ThemeManager = {
  storageKey: "app_theme",
  getTheme(mockStorage) {
    return mockStorage.getItem(this.storageKey) || "light";
  },
  toggleTheme(mockStorage) {
    const current = this.getTheme(mockStorage);
    const nextTheme = current === "light" ? "dark" : "light";
    mockStorage.setItem(this.storageKey, nextTheme);
    return nextTheme;
  }
};

const fakeStorage = {
  db: {},
  setItem(k, v) { this.db[k] = v; },
  getItem(k) { return this.db[k] || null; }
};

console.log("Theme ban đầu:", ThemeManager.getTheme(fakeStorage)); // light
console.log("Sau khi chuyển:", ThemeManager.toggleTheme(fakeStorage)); // dark
console.log("Theme lưu trong máy:", fakeStorage.getItem("app_theme")); // dark`,
      lineByLineExplanation: [
        { line: 5, text: 'getTheme đọc giá trị từ storage, nếu chưa có thì fallback về "light".' },
        { line: 8, text: 'toggleTheme đảo ngược trạng thái giữa "light" và "dark".' },
        { line: 10, text: 'Ghi trạng thái mới vào storage để lần sau truy cập tự áp dụng.' }
      ],
      commonMistakes: [
        'Áp dụng theme bằng JavaScript quá muộn sau khi toàn bộ HTML render xong khiến giao diện bị giật sáng (Flash of unstyled content - FOUC).'
      ],
      whenToUse: 'Bắt buộc dùng cho mọi website có hỗ trợ chế độ giao diện tối (Dark mode) hiện đại.',
      whenNotToUse: 'Không lưu dữ liệu mà server cần biết trước khi gửi HTML về (khi đó phải dùng Cookie).',
      realWorldUseCase: 'Trang cá nhân GitHub, YouTube hay AI Studio đều lưu tùy chọn Dark Mode qua Local Storage.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-16-3',
    title: 'Thực hành: Bộ quản lý Giỏ hàng thu nhỏ (Mini Cart Manager)',
    description: 'Chạy thử thao tác thêm sản phẩm trùng lặp: nếu sản phẩm đã có thì tăng số lượng quantity, nếu chưa thì thêm mới.',
    starterCode: `const cartService = {
  storage: { "cart": JSON.stringify([{ id: 1, name: "Áo thun", qty: 1, price: 150 }]) },
  getCart() {
    return JSON.parse(this.storage["cart"] || "[]");
  },
  addToCart(product) {
    const cart = this.getCart();
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ ...product, qty: 1 });
    }
    this.storage["cart"] = JSON.stringify(cart);
  }
};

// Thêm lại Áo thun (id: 1) -> số lượng phải tăng lên 2:
cartService.addToCart({ id: 1, name: "Áo thun", price: 150 });

const updated = cartService.getCart();
console.log("Số lượng Áo thun:", updated[0].qty);`,
    expectedConsoleOutput: 'Số lượng Áo thun: 2',
    hint: 'Tìm kiếm sản phẩm bằng find(), nếu thấy thì tăng existing.qty.',
    language: 'javascript'
  },
  exercises: {
    basic: {
      id: 'ex-16-3-1',
      lessonId: 'les-16-3',
      title: 'Bài tập Cơ bản: Lưu trạng thái Bật/Tắt âm thanh',
      difficulty: 'basic',
      learningObjectiveIds: ['LO16.3.1'],
      description: 'Cho storage giả lập. Viết hàm `saveMuteSetting(isMuted)` lưu boolean `isMuted` vào storage key `"isMuted"`. Gọi `saveMuteSetting(true)` và in ra: `Cài đặt tắt tiếng: true`.',
      starterCode: `const storage = {
  db: {},
  setItem(k, v) { this.db[k] = String(v); },
  getItem(k) { return this.db[k] || null; }
};

function saveMuteSetting(isMuted) {
  // Lưu boolean vào storage:
}

saveMuteSetting(true);
console.log("Cài đặt tắt tiếng:", storage.getItem("isMuted"));`,
      solutionCode: `const storage = {
  db: {},
  setItem(k, v) { this.db[k] = String(v); },
  getItem(k) { return this.db[k] || null; }
};

function saveMuteSetting(isMuted) {
  storage.setItem("isMuted", JSON.stringify(isMuted));
}

saveMuteSetting(true);
console.log("Cài đặt tắt tiếng:", storage.getItem("isMuted"));`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra lưu đúng giá trị boolean true',
          expectedOutput: 'Cài đặt tắt tiếng: true'
        }
      ],
      hints: ['storage.setItem("isMuted", JSON.stringify(isMuted));'],
      explanation: 'Dùng JSON.stringify để giữ nguyên kiểu dữ liệu boolean.'
    },
    intermediate: {
      id: 'ex-16-3-2',
      lessonId: 'les-16-3',
      title: 'Bài tập Trung bình: Tính tổng tiền giỏ hàng từ Storage',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO16.3.2'],
      description: 'Cho mảng giỏ hàng trong storage: `[{price: 200, qty: 2}, {price: 150, qty: 1}]`. Viết hàm `calcCartTotal()` đọc dữ liệu, tính tổng tiền (`price * qty`) và in ra: `Tổng thanh toán: 550 VNĐ`.',
      starterCode: `const store = {
  data: { "cart": JSON.stringify([{ price: 200, qty: 2 }, { price: 150, qty: 1 }]) },
  getItem(k) { return this.data[k] || null; }
};

function calcCartTotal() {
  // Đọc cart và tính tổng:
}

calcCartTotal();`,
      solutionCode: `const store = {
  data: { "cart": JSON.stringify([{ price: 200, qty: 2 }, { price: 150, qty: 1 }]) },
  getItem(k) { return this.data[k] || null; }
};

function calcCartTotal() {
  const items = JSON.parse(store.getItem("cart")) || [];
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  console.log("Tổng thanh toán:", total, "VNĐ");
}

calcCartTotal();`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra tổng 200*2 + 150*1 = 550 VNĐ',
          expectedOutput: 'Tổng thanh toán: 550 VNĐ'
        }
      ],
      hints: ['items.reduce((sum, item) => sum + item.price * item.qty, 0)'],
      explanation: 'Tính toán tổng thành tiền dựa trên dữ liệu giỏ hàng được phục hồi.'
    },
    challenge: {
      id: 'ex-16-3-3',
      lessonId: 'les-16-3',
      title: 'Bài tập Thử thách: Xóa sạch giỏ hàng khi đặt hàng thành công',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO16.3.2'],
      description: 'Viết hàm `checkoutAndClearCart()`. Nếu giỏ hàng có món hàng, in `Đặt hàng thành công: [N] món` và xóa sạch key `"cart"` trong storage. Kiểm tra với giỏ hàng có sẵn 3 món và in kết quả.',
      starterCode: `const store = {
  data: { "cart": JSON.stringify([1, 2, 3]) },
  getItem(k) { return this.data[k] || null; },
  removeItem(k) { delete this.data[k]; }
};

function checkoutAndClearCart() {
  // Kiểm tra giỏ hàng, thông báo và dọn dẹp storage:
}

checkoutAndClearCart();
console.log("Giỏ hàng sau checkout:", store.getItem("cart"));`,
      solutionCode: `const store = {
  data: { "cart": JSON.stringify([1, 2, 3]) },
  getItem(k) { return this.data[k] || null; },
  removeItem(k) { delete this.data[k]; }
};

function checkoutAndClearCart() {
  const items = JSON.parse(store.getItem("cart")) || [];
  if (items.length > 0) {
    console.log("Đặt hàng thành công:", items.length, "món");
    store.removeItem("cart");
  }
}

checkoutAndClearCart();
console.log("Giỏ hàng sau checkout:", store.getItem("cart"));`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra in thông báo và xóa giỏ hàng về null',
          expectedOutput: 'Đặt hàng thành công: 3 món\nGiỏ hàng sau checkout: null'
        }
      ],
      hints: ['store.removeItem("cart") sau khi xử lý đơn hàng'],
      explanation: 'Dọn dẹp giỏ hàng là bước bắt buộc sau khi thanh toán thành công.'
    }
  },
  quiz: {
    id: 'quiz-16-3',
    lessonId: 'les-16-3',
    title: 'Trắc nghiệm: Theme & Cart Storage',
    passingScore: 70,
    questions: [
      {
        id: 'q-16-3-1',
        lessonId: 'les-16-3',
        learningObjectiveId: 'LO16.3.1',
        type: 'multiple_choice',
        difficulty: 'easy',
        prompt: 'Để ngăn hiện tượng chớp sáng giao diện (FOUC) khi tải trang Dark Mode, đoạn script đọc Theme từ Local Storage nên được đặt ở đâu?',
        options: [
          { id: 'a', text: 'Đặt ngay trong thẻ <head> trước khi phần thân tử <body> được vẽ' },
          { id: 'b', text: 'Đặt ở cuối cùng của trang sau khi window.onload chạy xong' },
          { id: 'c', text: 'Đặt trong setTimeout hẹn giờ 1 giây' },
          { id: 'd', text: 'Chỉ đọc khi người dùng click vào trang' }
        ],
        correctAnswer: 'a',
        explanation: 'Chạy script đọc theme đồng bộ ngay trong <head> giúp gán class dark trước khi màn hình hiển thị.',
        relatedLessonId: 'les-16-3'
      }
    ]
  },
  summary: [
    'Lưu Theme vào Local Storage giúp ứng dụng ghi nhớ sở thích cá nhân của người dùng.',
    'Quản lý giỏ hàng offline giữ chân khách hàng và cải thiện trải nghiệm mua sắm.',
    'Luôn kiểm tra và dọn dẹp storage tương ứng sau khi người dùng hoàn tất giao dịch.'
  ],
  suggestedBookmarks: [
    'Chiến lược ngăn chặn FOUC (Flash of Unstyled Content) trong Tailwind Dark Mode',
    'Đồng bộ hóa dữ liệu giữa các Tab trình duyệt với sự kiện window.onstorage'
  ]
};

export const JS_MODULE_16_LESSONS: Lesson[] = [
  LESSON_16_1,
  LESSON_16_2,
  LESSON_16_3
];
