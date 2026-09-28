import { Lesson } from '../../types';

// ==========================================
// MODULE 15: FETCH API & LÀM VIỆC VỚI DỮ LIỆU
// ==========================================

export const LESSON_15_1: Lesson = {
  id: 'les-15-1',
  moduleId: 'mod-15',
  track: 'javascript',
  language: 'javascript',
  title: '15.1 Kiến trúc Client-Server, HTTP Request & Định dạng JSON',
  order: 1,
  durationMinutes: 45,
  difficulty: 'Cơ bản',
  prerequisites: [
    'Hiểu mô hình Web Client - Server',
    'Biết về Object và Array trong JavaScript'
  ],
  learningObjectives: [
    {
      id: 'LO15.1.1',
      code: 'LO15.1.1',
      title: 'Hiểu giao thức HTTP và các phương thức RESTful',
      description: 'Nắm vững vai trò của các HTTP Method: GET (đọc), POST (tạo), PUT/PATCH (sửa), DELETE (xóa) và mã trạng thái HTTP (200, 201, 404, 500).',
      bloomLevel: 'Understand',
      masteryPercentage: 92
    },
    {
      id: 'LO15.1.2',
      code: 'LO15.1.2',
      title: 'Làm chủ định dạng JSON trong truyền tải dữ liệu',
      description: 'Phân biệt JavaScript Object với chuỗi JSON; sử dụng JSON.stringify() và JSON.parse().',
      bloomLevel: 'Apply',
      masteryPercentage: 95
    }
  ],
  sections: [
    {
      id: 'sec-15-1-1',
      lessonId: 'les-15-1',
      order: 1,
      conceptName: 'Mô hình Client-Server & Định dạng JSON',
      title: '1. Giao tiếp mạng Web & Định dạng dữ liệu chuẩn JSON',
      explanation: 'Khi trình duyệt (Client) muốn dữ liệu, nó gửi một HTTP Request đến máy chủ (Server). Server xử lý và trả về HTTP Response. Dữ liệu trao đổi phổ biến nhất ngày nay là JSON (JavaScript Object Notation) - định dạng văn bản nhẹ, độc lập với ngôn ngữ lập trình. Trong chuỗi JSON, tất cả key và chuỗi string đều bắt buộc phải đặt trong dấu ngoặc kép ("").',
      syntax: '// Object -> JSON String: JSON.stringify(obj)\n// JSON String -> Object: JSON.parse(str)',
      codeExample: `// 1. Đối tượng JavaScript thông thường
const userObject = {
  id: 101,
  fullName: "Trần Quang Minh",
  isEnrolled: true,
  courses: ["JavaScript", "HTML/CSS"]
};

// 2. Chuyển thành chuỗi JSON để gửi qua mạng
const jsonString = JSON.stringify(userObject);
console.log("Chuỗi JSON gửi qua mạng:");
console.log(jsonString);

// 3. Phân tích chuỗi JSON nhận từ server thành Object
const parsedObject = JSON.parse(jsonString);
console.log("Tên sinh viên sau khi parse:", parsedObject.fullName);`,
      lineByLineExplanation: [
        { line: 2, text: 'userObject tồn tại trong bộ nhớ RAM của chương trình.' },
        { line: 10, text: 'JSON.stringify chuyển object thành chuỗi văn bản (serialization) để gửi qua mạng.' },
        { line: 15, text: 'JSON.parse đọc chuỗi văn bản và tái tạo lại đối tượng JavaScript (deserialization).' }
      ],
      commonMistakes: [
        'Dùng dấu nháy đơn (\') trong file JSON (chuẩn JSON bắt buộc phải dùng dấu nháy kép "").'
      ],
      whenToUse: 'Dùng JSON cho mọi API trao đổi dữ liệu giữa Frontend (React/Vue/JS) và Backend (Node.js/Java/PHP).',
      whenNotToUse: 'JSON không lưu trữ được các hàm (functions), Symbol hay giá trị undefined.',
      realWorldUseCase: 'Tất cả các REST API và GraphQL hiện đại đều trao đổi payload dạng JSON.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-15-1',
    title: 'Thực hành: Chuyển đổi JSON Payload cho đơn hàng',
    description: 'Chạy thử đoạn mã chuyển đổi một hóa đơn mua sắm thành chuỗi JSON và kiểm tra kiểu dữ liệu sau khi parse.',
    starterCode: `const order = {
  orderId: "HD-992",
  total: 450000,
  status: "PAID"
};

const jsonPayload = JSON.stringify(order);
console.log("Kiểu dữ liệu chuỗi JSON:", typeof jsonPayload);

const parsedData = JSON.parse(jsonPayload);
console.log("Mã đơn hàng:", parsedData.orderId);
console.log("Tổng tiền:", parsedData.total, "VNĐ");`,
    expectedConsoleOutput: 'Kiểu dữ liệu chuỗi JSON: string\nMã đơn hàng: HD-992\nTổng tiền: 450000 VNĐ',
    hint: 'JSON.stringify trả về string, JSON.parse trả về object.',
    language: 'javascript'
  },
  exercises: {
    basic: {
      id: 'ex-15-1-1',
      lessonId: 'les-15-1',
      title: 'Bài tập Cơ bản: Chuyển mảng thành chuỗi JSON',
      difficulty: 'basic',
      learningObjectiveIds: ['LO15.1.2'],
      description: 'Cho mảng `tags = ["frontend", "javascript", "es6"]`. Dùng `JSON.stringify` chuyển mảng thành chuỗi và in ra: `Chuỗi JSON: [jsonStr]`.',
      starterCode: `const tags = ["frontend", "javascript", "es6"];

// Chuyển tags thành chuỗi JSON:
const jsonStr = "";

console.log("Chuỗi JSON:", jsonStr);`,
      solutionCode: `const tags = ["frontend", "javascript", "es6"];
const jsonStr = JSON.stringify(tags);
console.log("Chuỗi JSON:", jsonStr);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra chuỗi JSON mảng đúng định dạng',
          expectedOutput: 'Chuỗi JSON: ["frontend","javascript","es6"]'
        }
      ],
      hints: ['const jsonStr = JSON.stringify(tags);'],
      explanation: 'JSON.stringify hỗ trợ chuyển đổi cả mảng lẫn đối tượng.'
    },
    intermediate: {
      id: 'ex-15-1-2',
      lessonId: 'les-15-1',
      title: 'Bài tập Trung bình: Parse an toàn với khối try/catch',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO15.1.2'],
      description: 'Cho chuỗi JSON lỗi: `const invalidJson = "{ bad json }";`. Viết hàm `safeParse(str)` dùng `try/catch`. Nếu parse lỗi, in: `Lỗi phân tích JSON: Chuỗi không hợp lệ` và trả về `null`.',
      starterCode: `const invalidJson = "{ bad json }";

function safeParse(str) {
  // Bọc JSON.parse trong try/catch:
}

safeParse(invalidJson);`,
      solutionCode: `const invalidJson = "{ bad json }";

function safeParse(str) {
  try {
    return JSON.parse(str);
  } catch (err) {
    console.log("Lỗi phân tích JSON: Chuỗi không hợp lệ");
    return null;
  }
}

safeParse(invalidJson);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra bắt đúng SyntaxError khi parse chuỗi hỏng',
          expectedOutput: 'Lỗi phân tích JSON: Chuỗi không hợp lệ'
        }
      ],
      hints: ['try { return JSON.parse(str); } catch (err) { ... }'],
      explanation: 'JSON.parse sẽ ném SyntaxError nếu chuỗi đầu vào không đúng định dạng chuẩn.'
    },
    challenge: {
      id: 'ex-15-1-3',
      lessonId: 'les-15-1',
      title: 'Bài tập Thử thách: Định dạng JSON có thụt lề (Pretty-print JSON)',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO15.1.2'],
      description: 'Hàm `JSON.stringify(val, replacer, space)` có tham số thứ 3 để tạo thụt lề đẹp mắt. Cho object `user = { name: "An", role: "Dev" }`. Hãy stringify với `space = 2` và in chuỗi ra Console.',
      starterCode: `const user = { name: "An", role: "Dev" };

// Stringify với space = 2:
const prettyJson = "";

console.log(prettyJson);`,
      solutionCode: `const user = { name: "An", role: "Dev" };
const prettyJson = JSON.stringify(user, null, 2);
console.log(prettyJson);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra định dạng JSON có thụt lề 2 khoảng trắng',
          expectedOutput: '{\n  "name": "An",\n  "role": "Dev"\n}'
        }
      ],
      hints: ['JSON.stringify(user, null, 2)'],
      explanation: 'Tham số space trong JSON.stringify giúp in dữ liệu đẹp mắt khi debug hoặc ghi log.'
    }
  },
  quiz: {
    id: 'quiz-15-1',
    lessonId: 'les-15-1',
    title: 'Trắc nghiệm: HTTP & JSON',
    passingScore: 70,
    questions: [
      {
        id: 'q-15-1-1',
        lessonId: 'les-15-1',
        learningObjectiveId: 'LO15.1.2',
        type: 'multiple_choice',
        difficulty: 'easy',
        prompt: 'Đặc điểm nào sau đây là BẮT BUỘC trong định dạng chuẩn của JSON?',
        options: [
          { id: 'a', text: 'Tất cả các key thuộc tính phải được bao quanh bởi dấu nháy kép (" ")' },
          { id: 'b', text: 'Có thể sử dụng dấu nháy đơn (\' \') thoải mái' },
          { id: 'c', text: 'Có thể lưu trữ các hàm function()' },
          { id: 'd', text: 'Không được phép chứa mảng dữ liệu' }
        ],
        correctAnswer: 'a',
        explanation: 'Chuẩn JSON RFC bắt buộc mọi key và giá trị dạng chuỗi phải nằm trong dấu nháy kép.',
        relatedLessonId: 'les-15-1'
      }
    ]
  },
  summary: [
    'Mô hình Client-Server giao tiếp thông qua HTTP Request và Response.',
    'JSON là chuẩn truyền tải dữ liệu phổ biến nhất trên Internet.',
    'Dùng JSON.stringify() để đóng gói và JSON.parse() để giải mã dữ liệu.'
  ],
  suggestedBookmarks: [
    'Mã trạng thái HTTP Status Codes: 200 OK, 201 Created, 400, 401, 404, 500',
    'Các phương thức HTTP RESTful chuẩn: GET, POST, PUT, PATCH, DELETE'
  ]
};

export const LESSON_15_2: Lesson = {
  id: 'les-15-2',
  moduleId: 'mod-15',
  track: 'javascript',
  language: 'javascript',
  title: '15.2 Lấy dữ liệu với fetch() và phương thức GET',
  order: 2,
  durationMinutes: 55,
  difficulty: 'Trung bình',
  prerequisites: [
    'Hiểu async/await ở Module 14',
    'Biết về định dạng JSON ở Bài 15.1'
  ],
  learningObjectives: [
    {
      id: 'LO15.2.1',
      code: 'LO15.2.1',
      title: 'Sử dụng fetch() để gọi API mạng với phương thức GET',
      description: 'Làm chủ cú pháp fetch(url) mặc định là GET và giải mã dữ liệu qua response.json().',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    },
    {
      id: 'LO15.2.2',
      code: 'LO15.2.2',
      title: 'Kiểm tra thuộc tính response.ok và response.status',
      description: 'Hiểu rõ fetch chỉ reject khi có lỗi mạng (offline), còn lỗi HTTP 404 hay 500 vẫn xem là resolved cần kiểm tra qua response.ok.',
      bloomLevel: 'Analyze',
      masteryPercentage: 88
    }
  ],
  sections: [
    {
      id: 'sec-15-2-1',
      lessonId: 'les-15-2',
      order: 1,
      conceptName: 'Fetch API GET Request',
      title: '1. Cú pháp chuẩn gọi GET API với fetch()',
      explanation: 'Hàm toàn cục `fetch(url)` của trình duyệt gửi yêu cầu mạng và trả về một Promise chứa đối tượng `Response`. Để trích xuất nội dung JSON, bạn cần gọi `await response.json()`. Điểm mấu chốt: fetch KHÔNG ném lỗi khi gặp mã HTTP 404 hoặc 500; bạn bắt buộc phải kiểm tra cờ `if (!response.ok)` để chủ động ném lỗi!',
      syntax: 'const response = await fetch(url);\nif (!response.ok) throw new Error("HTTP Error " + response.status);\nconst data = await response.json();',
      codeExample: `// Giả lập hàm fetch gọi API người dùng
async function loadUserData(userId) {
  try {
    // Mô phỏng cấu trúc gọi API chuẩn:
    const mockResponse = {
      ok: true,
      status: 200,
      json: async () => ({ id: userId, name: "Nguyễn Thu Hà", email: "ha@fpt.edu.vn" })
    };

    if (!mockResponse.ok) {
      throw new Error("Không thể tải dữ liệu: " + mockResponse.status);
    }

    const user = await mockResponse.json();
    console.log("Tên người dùng:", user.name);
    console.log("Email liên hệ:", user.email);
  } catch (error) {
    console.log("Lỗi:", error.message);
  }
}

loadUserData(10);`,
      lineByLineExplanation: [
        { line: 5, text: 'Đối tượng Response chứa cờ ok (status 200-299) và phương thức json().' },
        { line: 11, text: 'Luôn kiểm tra !response.ok để phát hiện lỗi 404/500 từ máy chủ.' },
        { line: 15, text: 'await response.json() giải mã payload từ chuỗi JSON thành JavaScript Object.' }
      ],
      commonMistakes: [
        'Nghĩ rằng fetch() sẽ tự động nhảy vào khối catch khi máy chủ trả về mã 404 Not Found (thực tế phải tự kiểm tra response.ok).'
      ],
      whenToUse: 'Dùng fetch(url) để tải dữ liệu danh sách bài viết, thông tin người dùng, bảng xếp hạng.',
      whenNotToUse: 'Không quên await response.json() vì giải mã JSON cũng là một tác vụ bất đồng bộ.',
      realWorldUseCase: 'Gọi các Public REST API như JSONPlaceholder, GitHub API, Weather API trong các ứng dụng web.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-15-2',
    title: 'Thực hành: Lấy danh sách sản phẩm và duyệt mảng',
    description: 'Chạy thử hàm lấy danh mục sản phẩm từ server giả lập và in danh sách tên sản phẩm.',
    starterCode: `async function fetchProducts() {
  const fakeApiResponse = {
    ok: true,
    status: 200,
    json: async () => [
      { id: 1, title: "Laptop Asus", price: 15000000 },
      { id: 2, title: "Chuột không dây", price: 350000 }
    ]
  };

  const products = await fakeApiResponse.json();
  console.log("Số sản phẩm nhận được:", products.length);
  products.forEach(p => {
    console.log("- " + p.title + ": " + p.price + " VNĐ");
  });
}

fetchProducts();`,
    expectedConsoleOutput: 'Số sản phẩm nhận được: 2\n- Laptop Asus: 15000000 VNĐ\n- Chuột không dây: 350000 VNĐ',
    hint: 'Duyệt mảng products bằng forEach sau khi parse json().',
    language: 'javascript'
  },
  exercises: {
    basic: {
      id: 'ex-15-2-1',
      lessonId: 'les-15-2',
      title: 'Bài tập Cơ bản: Lấy dữ liệu và kiểm tra cờ response.ok',
      difficulty: 'basic',
      learningObjectiveIds: ['LO15.2.2'],
      description: 'Cho đối tượng response giả lập: `const res = { ok: true, status: 200, json: async () => ({ city: "Đà Nẵng" }) };`. Viết hàm `getCity()` trích xuất city và in ra: `Thành phố: Đà Nẵng`.',
      starterCode: `const res = { ok: true, status: 200, json: async () => ({ city: "Đà Nẵng" }) };

async function getCity() {
  // Lấy dữ liệu từ res:
}

getCity();`,
      solutionCode: `const res = { ok: true, status: 200, json: async () => ({ city: "Đà Nẵng" }) };

async function getCity() {
  if (res.ok) {
    const data = await res.json();
    console.log("Thành phố:", data.city);
  }
}

getCity();`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra in đúng thành phố',
          expectedOutput: 'Thành phố: Đà Nẵng'
        }
      ],
      hints: ['const data = await res.json(); console.log("Thành phố:", data.city);'],
      explanation: 'Luôn gọi await res.json() để nhận dữ liệu đối tượng.'
    },
    intermediate: {
      id: 'ex-15-2-2',
      lessonId: 'les-15-2',
      title: 'Bài tập Trung bình: Xử lý lỗi HTTP 404 chủ động',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO15.2.2'],
      description: 'Cho response giả lập báo lỗi: `const errorRes = { ok: false, status: 404 };`. Viết hàm `fetchDetail()` kiểm tra `if (!errorRes.ok)` và ném `new Error("Không tìm thấy bài viết (404)")`. Bắt lỗi trong catch và in: `Bắt lỗi: Không tìm thấy bài viết (404)`.',
      starterCode: `const errorRes = { ok: false, status: 404 };

async function fetchDetail() {
  // Viết try/catch kiểm tra response.ok:
}

fetchDetail();`,
      solutionCode: `const errorRes = { ok: false, status: 404 };

async function fetchDetail() {
  try {
    if (!errorRes.ok) {
      throw new Error("Không tìm thấy bài viết (404)");
    }
  } catch (err) {
    console.log("Bắt lỗi:", err.message);
  }
}

fetchDetail();`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra bắt đúng thông điệp lỗi 404',
          expectedOutput: 'Bắt lỗi: Không tìm thấy bài viết (404)'
        }
      ],
      hints: ['if (!errorRes.ok) throw new Error(...)'],
      explanation: 'Quy chuẩn xử lý lỗi mạng bắt buộc phải kiểm tra cờ response.ok.'
    },
    challenge: {
      id: 'ex-15-2-3',
      lessonId: 'les-15-2',
      title: 'Bài tập Thử thách: Xây dựng hàm getApiWrapper dùng chung',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO15.2.1', 'LO15.2.2'],
      description: 'Tạo hàm tiện ích `fetchApi(fetcher)`. Hàm này nhận một hàm trả về response, kiểm tra `response.ok`, parse json và trả về dữ liệu. Nếu lỗi ném exception. Gọi với hàm giả lập trả về `{ score: 9.5 }` và in: `Điểm số: 9.5`.',
      starterCode: `const mockApi = () => Promise.resolve({
  ok: true,
  status: 200,
  json: () => Promise.resolve({ score: 9.5 })
});

async function fetchApi(fetcher) {
  // Cài đặt hàm bọc tiện ích:
}

async function run() {
  const result = await fetchApi(mockApi);
  console.log("Điểm số:", result.score);
}

run();`,
      solutionCode: `const mockApi = () => Promise.resolve({
  ok: true,
  status: 200,
  json: () => Promise.resolve({ score: 9.5 })
});

async function fetchApi(fetcher) {
  const response = await fetcher();
  if (!response.ok) {
    throw new Error("HTTP Error " + response.status);
  }
  return await response.json();
}

async function run() {
  const result = await fetchApi(mockApi);
  console.log("Điểm số:", result.score);
}

run();`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra hàm bọc trả về kết quả điểm số',
          expectedOutput: 'Điểm số: 9.5'
        }
      ],
      hints: ['await fetcher() rồi kiểm tra response.ok'],
      explanation: 'Xây dựng API Client Helper là bước chuẩn mực trong mọi dự án frontend chuyên nghiệp.'
    }
  },
  quiz: {
    id: 'quiz-15-2',
    lessonId: 'les-15-2',
    title: 'Trắc nghiệm: Fetch GET',
    passingScore: 70,
    questions: [
      {
        id: 'q-15-2-1',
        lessonId: 'les-15-2',
        learningObjectiveId: 'LO15.2.2',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'Nếu máy chủ phản hồi mã lỗi HTTP 404 (Not Found), Promise trả về từ fetch() sẽ có trạng thái gì?',
        options: [
          { id: 'a', text: 'Chuyển sang Rejected và rơi vào khối catch()' },
          { id: 'b', text: 'Vẫn là Fulfilled, bạn phải tự kiểm tra thuộc tính response.ok' },
          { id: 'c', text: 'Tự động gọi lại lần 2' },
          { id: 'd', text: 'Trả về giá trị null' }
        ],
        correctAnswer: 'b',
        explanation: 'fetch() chỉ reject khi có lỗi mạng vật lý (mất mạng, DNS lỗi). Các mã HTTP 4xx và 5xx vẫn là Fulfilled.',
        relatedLessonId: 'les-15-2'
      }
    ]
  },
  summary: [
    'Hàm fetch(url) thực hiện HTTP GET mặc định và trả về Response Promise.',
    'Bắt buộc kiểm tra cờ response.ok (hoặc response.status) để xử lý lỗi HTTP.',
    'Dùng await response.json() để phân giải dữ liệu trả về.'
  ],
  suggestedBookmarks: [
    'Các phương thức giải mã của Response: json(), text(), blob(), arrayBuffer()',
    'Cấu hình Query Parameters trên URL bằng URLSearchParams'
  ]
};

export const LESSON_15_3: Lesson = {
  id: 'les-15-3',
  moduleId: 'mod-15',
  track: 'javascript',
  language: 'javascript',
  title: '15.3 Gửi dữ liệu lên máy chủ với phương thức POST',
  order: 3,
  durationMinutes: 55,
  difficulty: 'Trung bình',
  prerequisites: [
    'Đã học Bài 15.2 về fetch() GET',
    'Biết cách dùng JSON.stringify'
  ],
  learningObjectives: [
    {
      id: 'LO15.3.1',
      code: 'LO15.3.1',
      title: 'Cấu hình Request Options trong fetch()',
      description: 'Thiết lập method: "POST", headers: { "Content-Type": "application/json" } và body: JSON.stringify(data).',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    },
    {
      id: 'LO15.3.2',
      code: 'LO15.3.2',
      title: 'Xử lý phản hồi tạo mới dữ liệu (HTTP 201 Created)',
      description: 'Nhận đối tượng vừa được tạo kèm ID từ máy chủ và cập nhật vào giao diện người dùng.',
      bloomLevel: 'Apply',
      masteryPercentage: 88
    }
  ],
  sections: [
    {
      id: 'sec-15-3-1',
      lessonId: 'les-15-3',
      order: 1,
      conceptName: 'Gửi dữ liệu với fetch() POST',
      title: '1. Cấu hình gửi dữ liệu POST qua fetch()',
      explanation: 'Để gửi dữ liệu (tạo mới tài khoản, gửi đơn hàng, lưu bài viết), ta truyền tham số thứ hai là đối tượng cấu hình `RequestInit` vào hàm `fetch(url, options)`. Có 3 thuộc tính quan trọng: 1) `method: "POST"`, 2) `headers: { "Content-Type": "application/json" }` thông báo định dạng dữ liệu, 3) `body: JSON.stringify(payload)` chứa dữ liệu đã được chuỗi hóa.',
      syntax: 'const res = await fetch(url, {\n  method: "POST",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify(payload)\n});',
      codeExample: `// Giả lập hàm POST gửi dữ liệu người dùng
async function registerUser(newUserData) {
  // Cấu hình request chuẩn:
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newUserData)
  };

  console.log("Đang gửi dữ liệu:", requestOptions.body);

  // Giả lập máy chủ phản hồi mã 201 Created:
  const mockServerResponse = {
    ok: true,
    status: 201,
    json: async () => ({ id: 999, ...newUserData, createdAt: "2026-09-27" })
  };

  const createdUser = await mockServerResponse.json();
  console.log("Tạo thành công ID:", createdUser.id);
  console.log("Tên người dùng:", createdUser.name);
}

registerUser({ name: "Lê Hoàng Nam", role: "Học viên" });`,
      lineByLineExplanation: [
        { line: 4, text: 'method: "POST" chỉ định hành động tạo mới dữ liệu trên máy chủ.' },
        { line: 5, text: 'Header Content-Type: application/json là bắt buộc để server hiểu body là JSON.' },
        { line: 8, text: 'body bắt buộc phải là chuỗi (string) qua JSON.stringify().' }
      ],
      commonMistakes: [
        'Truyền trực tiếp object vào body mà quên gọi JSON.stringify() khiến máy chủ nhận chuỗi "[object Object]" và báo lỗi.'
      ],
      whenToUse: 'Dùng POST khi gửi form đăng ký, tạo đơn hàng, đăng tải bài viết mới, gửi đánh giá.',
      whenNotToUse: 'Không dùng POST để chỉ đọc dữ liệu hiển thị (hãy dùng GET để có thể lưu cache trình duyệt).',
      realWorldUseCase: 'Hành động người dùng nhấn nút "Đăng ký khóa học" hoặc "Gửi tin nhắn chat".'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-15-3',
    title: 'Thực hành: Gửi bình luận mới lên máy chủ',
    description: 'Chạy thử hàm tạo bình luận gửi payload gồm author và content, nhận lại commentId từ server.',
    starterCode: `async function postComment(author, text) {
  const payload = { author, text };
  
  // Mô phỏng server nhận và trả về comment kèm ID:
  const fakeServer = {
    ok: true,
    status: 201,
    json: async () => ({
      commentId: "CMT-" + Math.floor(Math.random() * 1000),
      ...payload
    })
  };

  const savedComment = await fakeServer.json();
  console.log("Trạng thái: Đã lưu bình luận");
  console.log("Mã bình luận:", savedComment.commentId);
  console.log("Nội dung:", savedComment.text);
}

postComment("Học viên An", "Bài giảng rất chi tiết và dễ hiểu!");`,
    expectedConsoleOutput: 'Trạng thái: Đã lưu bình luận\nNội dung: Bài giảng rất chi tiết và dễ hiểu!',
    hint: 'Kiểm tra cấu hình payload và nhận kết quả từ json().',
    language: 'javascript'
  },
  exercises: {
    basic: {
      id: 'ex-15-3-1',
      lessonId: 'les-15-3',
      title: 'Bài tập Cơ bản: Khởi tạo đối tượng Request Options chuẩn',
      difficulty: 'basic',
      learningObjectiveIds: ['LO15.3.1'],
      description: 'Tạo hàm `createPostOptions(data)` trả về object cấu hình có: `method: "POST"`, `headers: { "Content-Type": "application/json" }`, và `body: JSON.stringify(data)`. Tạo options với `{ score: 10 }` và in ra thuộc tính method: `Phương thức: POST`.',
      starterCode: `function createPostOptions(data) {
  // Trả về object options:
}

const opts = createPostOptions({ score: 10 });
console.log("Phương thức:", opts.method);`,
      solutionCode: `function createPostOptions(data) {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
}

const opts = createPostOptions({ score: 10 });
console.log("Phương thức:", opts.method);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra cấu hình đúng method POST',
          expectedOutput: 'Phương thức: POST'
        }
      ],
      hints: ['return { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }'],
      explanation: 'Cấu hình đầy đủ 3 thành phần method, headers và body.'
    },
    intermediate: {
      id: 'ex-15-3-2',
      lessonId: 'les-15-3',
      title: 'Bài tập Trung bình: Gửi dữ liệu tạo sản phẩm mới',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO15.3.2'],
      description: 'Cho hàm máy chủ giả lập `fakePostApi(options)` nhận options và trả về `{ ok: true, status: 201, json: async () => ({ id: 45, ...JSON.parse(options.body) }) }`. Gửi sản phẩm `{ title: "Bàn phím cơ", price: 850 }` và in ra: `Sản phẩm tạo mới: Bàn phím cơ - Giá: 850`.',
      starterCode: `const fakePostApi = options => Promise.resolve({
  ok: true,
  status: 201,
  json: async () => ({ id: 45, ...JSON.parse(options.body) })
});

async function createProduct() {
  // Gửi POST tới fakePostApi:
}

createProduct();`,
      solutionCode: `const fakePostApi = options => Promise.resolve({
  ok: true,
  status: 201,
  json: async () => ({ id: 45, ...JSON.parse(options.body) })
});

async function createProduct() {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "Bàn phím cơ", price: 850 })
  };
  const response = await fakePostApi(options);
  const data = await response.json();
  console.log(\`Sản phẩm tạo mới: \${data.title} - Giá: \${data.price}\`);
}

createProduct();`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra in đúng sản phẩm tạo mới',
          expectedOutput: 'Sản phẩm tạo mới: Bàn phím cơ - Giá: 850'
        }
      ],
      hints: ['const response = await fakePostApi(options); const data = await response.json();'],
      explanation: 'Máy chủ phản hồi mã 201 cùng object chứa ID mới tạo.'
    },
    challenge: {
      id: 'ex-15-3-3',
      lessonId: 'les-15-3',
      title: 'Bài tập Thử thách: Kiểm tra Header Authorization kèm Token',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO15.3.1'],
      description: 'Khi gọi API bảo mật, cần gửi kèm token xác thực. Viết hàm `createAuthPostOptions(data, token)` trả về options có thêm header `"Authorization": "Bearer " + token`. Kiểm tra với token `"SECRET_KEY_99"` và in ra: `Header Auth: Bearer SECRET_KEY_99`.',
      starterCode: `function createAuthPostOptions(data, token) {
  // Trả về options gồm Content-Type và Authorization:
}

const opts = createAuthPostOptions({ task: "Clean" }, "SECRET_KEY_99");
console.log("Header Auth:", opts.headers["Authorization"]);`,
      solutionCode: `function createAuthPostOptions(data, token) {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token
    },
    body: JSON.stringify(data)
  };
}

const opts = createAuthPostOptions({ task: "Clean" }, "SECRET_KEY_99");
console.log("Header Auth:", opts.headers["Authorization"]);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra Bearer token được đính kèm đúng chuẩn',
          expectedOutput: 'Header Auth: Bearer SECRET_KEY_99'
        }
      ],
      hints: ['"Authorization": "Bearer " + token'],
      explanation: 'Chuẩn Bearer Token trong Header là tiêu chuẩn xác thực người dùng trong các REST API hiện đại.'
    }
  },
  quiz: {
    id: 'quiz-15-3',
    lessonId: 'les-15-3',
    title: 'Trắc nghiệm: Fetch POST',
    passingScore: 70,
    questions: [
      {
        id: 'q-15-3-1',
        lessonId: 'les-15-3',
        learningObjectiveId: 'LO15.3.1',
        type: 'multiple_choice',
        difficulty: 'easy',
        prompt: 'Header nào bắt buộc phải có khi gửi chuỗi JSON trong body của yêu cầu fetch() POST?',
        options: [
          { id: 'a', text: '"Content-Type": "application/json"' },
          { id: 'b', text: '"Accept": "text/html"' },
          { id: 'c', text: '"Method": "POST"' },
          { id: 'd', text: '"Cache-Control": "no-cache"' }
        ],
        correctAnswer: 'a',
        explanation: 'Header Content-Type: application/json báo cho server biết dữ liệu gửi lên là JSON để parse.',
        relatedLessonId: 'les-15-3'
      }
    ]
  },
  summary: [
    'fetch(url, options) nhận cấu hình method: "POST", headers và body.',
    'Bắt buộc dùng JSON.stringify() để chuyển object thành chuỗi trước khi gán vào body.',
    'Các API có xác thực thường yêu cầu gửi thêm Header Authorization: Bearer <token>.'
  ],
  suggestedBookmarks: [
    'Phân biệt PUT (thay thế toàn bộ) vs PATCH (cập nhật một phần)',
    'Phương thức DELETE và cách gửi tham số ID trên URL'
  ]
};

export const LESSON_15_4: Lesson = {
  id: 'les-15-4',
  moduleId: 'mod-15',
  track: 'javascript',
  language: 'javascript',
  title: '15.4 Xử lý trạng thái Loading & Error Handling chuyên nghiệp',
  order: 4,
  durationMinutes: 50,
  difficulty: 'Trung bình',
  prerequisites: [
    'Đã học Bài 15.2 và 15.3',
    'Hiểu DOM cơ bản hoặc biến trạng thái State'
  ],
  learningObjectives: [
    {
      id: 'LO15.4.1',
      code: 'LO15.4.1',
      title: 'Quản lý 3 trạng thái giao diện: Loading, Error, Success',
      description: 'Làm chủ mẫu thiết kế giao diện chuẩn mực khi gọi API để người dùng không cảm thấy ứng dụng bị đơ.',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    },
    {
      id: 'LO15.4.2',
      code: 'LO15.4.2',
      title: 'Hủy yêu cầu mạng khi quá thời gian chờ (Timeout with AbortController)',
      description: 'Sử dụng AbortController để tự động hủy fetch() nếu server không phản hồi sau số giây quy định.',
      bloomLevel: 'Apply',
      masteryPercentage: 86
    }
  ],
  sections: [
    {
      id: 'sec-15-4-1',
      lessonId: 'les-15-4',
      order: 1,
      conceptName: 'Mô hình 3 trạng thái API UI State',
      title: '1. Quản lý trạng thái: Loading, Success & Error',
      explanation: 'Mọi thao tác gọi API trên giao diện người dùng phải luôn trải qua 3 giai đoạn: 1) Khởi động -> bật cờ isLoading = true, hiển thị Spinner hoặc Skeleton; 2) Thành công -> lưu data, gán error = null; 3) Thất bại -> gán errorMessage để hiển thị banner đỏ. Cuối cùng trong khối `finally` -> tắt cờ isLoading = false.',
      syntax: 'let isLoading = true;\ntry {\n  const data = await fetchApi();\n} catch (err) {\n  showError(err);\n} finally {\n  isLoading = false;\n}',
      codeExample: `// Mô phỏng quản lý trạng thái tải trang
const uiState = {
  isLoading: false,
  data: null,
  error: null
};

async function loadDataWithState(shouldFail = false) {
  // 1. Bật trạng thái Loading
  uiState.isLoading = true;
  uiState.error = null;
  console.log("Trạng thái: Đang tải dữ liệu (Loading: true)...");

  try {
    if (shouldFail) {
      throw new Error("Lỗi kết nối máy chủ 500");
    }
    uiState.data = ["Bài viết 1", "Bài viết 2"];
    console.log("Trạng thái: Tải thành công! Dữ liệu:", uiState.data);
  } catch (err) {
    uiState.error = err.message;
    console.log("Trạng thái: Có lỗi xảy ra!", uiState.error);
  } finally {
    // 2. Luôn tắt Loading dù thành công hay thất bại
    uiState.isLoading = false;
    console.log("Trạng thái kết thúc: Loading =", uiState.isLoading);
  }
}

loadDataWithState(false);`,
      lineByLineExplanation: [
        { line: 9, text: 'Bật isLoading = true ngay trước khi gửi request để hiển thị spinner.' },
        { line: 15, text: 'Khi thành công, gán data vào state.' },
        { line: 18, text: 'Nếu có lỗi, lưu error message để render thông báo thân thiện cho user.' },
        { line: 21, text: 'Khối finally đảm bảo spinner luôn tắt, tránh tình trạng spinner xoay vĩnh viễn.' }
      ],
      commonMistakes: [
        'Tắt cờ isLoading ở trong khối try mà quên khối catch, dẫn đến khi gặp lỗi spinner xoay hoài không dừng.'
      ],
      whenToUse: 'Bắt buộc áp dụng cho mọi chức năng gọi dữ liệu trong ứng dụng Web chuyên nghiệp.',
      whenNotToUse: 'Tránh thông báo lỗi kỹ thuật khó hiểu (như "Failed to fetch") trực tiếp cho người dùng cuối.',
      realWorldUseCase: 'Thư viện React Query (TanStack Query) và Redux Toolkit đều xoay quanh 3 trạng thái này (pending, fulfilled, rejected).'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-15-4',
    title: 'Thực hành: Mô phỏng xử lý lỗi mạng thân thiện với người dùng',
    description: 'Chạy thử hàm gọi dữ liệu khi xảy ra lỗi. Hệ thống bật loading, bắt lỗi và tắt loading an toàn trong finally.',
    starterCode: `async function fetchDataSimulation() {
  let loading = true;
  console.log("1. Bật Spinner loading...");
  
  try {
    // Giả lập lỗi mất mạng:
    throw new Error("Không có kết nối Internet.");
  } catch (err) {
    console.log("2. Hiển thị thông báo:", err.message);
  } finally {
    loading = false;
    console.log("3. Tắt Spinner loading (loading =", loading, ")");
  }
}

fetchDataSimulation();`,
    expectedConsoleOutput: '1. Bật Spinner loading...\n2. Hiển thị thông báo: Không có kết nối Internet.\n3. Tắt Spinner loading (loading = false )',
    hint: 'Khối finally luôn giải phóng cờ loading.',
    language: 'javascript'
  },
  exercises: {
    basic: {
      id: 'ex-15-4-1',
      lessonId: 'les-15-4',
      title: 'Bài tập Cơ bản: Đảm bảo tắt cờ Loading trong finally',
      difficulty: 'basic',
      learningObjectiveIds: ['LO15.4.1'],
      description: 'Viết hàm `fetchStateDemo()` có biến `let isLoading = false;`. Khi bắt đầu gán `isLoading = true` và in `Loading: true`. Trong khối `finally`, gán `isLoading = false` và in `Loading: false`.',
      starterCode: `async function fetchStateDemo() {
  let isLoading = false;
  // Cài đặt try/finally:
}

fetchStateDemo();`,
      solutionCode: `async function fetchStateDemo() {
  let isLoading = false;
  try {
    isLoading = true;
    console.log("Loading:", isLoading);
  } finally {
    isLoading = false;
    console.log("Loading:", isLoading);
  }
}

fetchStateDemo();`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra in Loading: true rồi Loading: false',
          expectedOutput: 'Loading: true\nLoading: false'
        }
      ],
      hints: ['Đặt câu lệnh đổi cờ tắt trong khối finally'],
      explanation: 'finally luôn chạy giúp giao diện không bị kẹt ở trạng thái loading.'
    },
    intermediate: {
      id: 'ex-15-4-2',
      lessonId: 'les-15-4',
      title: 'Bài tập Trung bình: Chuyển đổi mã lỗi kỹ thuật sang tiếng Việt thân thiện',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO15.4.1'],
      description: 'Tạo hàm `getFriendlyErrorMessage(status)`. Nếu status = 404 trả về `"Không tìm thấy tài nguyên yêu cầu"`; nếu 401 trả về `"Vui lòng đăng nhập lại"`; còn lại trả về `"Hệ thống đang bận"`. Kiểm tra với status 404 và in ra: `Thông báo: Không tìm thấy tài nguyên yêu cầu`.',
      starterCode: `function getFriendlyErrorMessage(status) {
  // Chuyển đổi status sang thông báo thân thiện:
}

console.log("Thông báo:", getFriendlyErrorMessage(404));`,
      solutionCode: `function getFriendlyErrorMessage(status) {
  switch (status) {
    case 404:
      return "Không tìm thấy tài nguyên yêu cầu";
    case 401:
      return "Vui lòng đăng nhập lại";
    default:
      return "Hệ thống đang bận";
  }
}

console.log("Thông báo:", getFriendlyErrorMessage(404));`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra chuyển mã 404 sang câu tiếng Việt',
          expectedOutput: 'Thông báo: Không tìm thấy tài nguyên yêu cầu'
        }
      ],
      hints: ['Dùng switch (status)'],
      explanation: 'Trải nghiệm người dùng tốt đòi hỏi thông báo lỗi phải rõ ràng, dễ hiểu.'
    },
    challenge: {
      id: 'ex-15-4-3',
      lessonId: 'les-15-4',
      title: 'Bài tập Thử thách: Hủy request bằng AbortController',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO15.4.2'],
      description: 'Sử dụng `const controller = new AbortController();`. Gọi `controller.abort()` để hủy request. Bắt lỗi trong catch và kiểm tra `if (err.name === "AbortError")` in ra: `Yêu cầu mạng đã bị hủy do timeout`.',
      starterCode: `function simulateAbort() {
  const controller = new AbortController();
  // Giả lập ném lỗi AbortError khi controller.abort():
  try {
    controller.abort();
    const error = new Error("The user aborted a request.");
    error.name = "AbortError";
    throw error;
  } catch (err) {
    if (err.name === "AbortError") {
      console.log("Yêu cầu mạng đã bị hủy do timeout");
    }
  }
}

simulateAbort();`,
      solutionCode: `function simulateAbort() {
  const controller = new AbortController();
  try {
    controller.abort();
    const error = new Error("The user aborted a request.");
    error.name = "AbortError";
    throw error;
  } catch (err) {
    if (err.name === "AbortError") {
      console.log("Yêu cầu mạng đã bị hủy do timeout");
    }
  }
}

simulateAbort();`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra bắt đúng AbortError',
          expectedOutput: 'Yêu cầu mạng đã bị hủy do timeout'
        }
      ],
      hints: ['Kiểm tra err.name === "AbortError"'],
      explanation: 'AbortController là chuẩn W3C để hủy bỏ các tác vụ fetch() đang treo.'
    }
  },
  quiz: {
    id: 'quiz-15-4',
    lessonId: 'les-15-4',
    title: 'Trắc nghiệm: UI State & Error Handling',
    passingScore: 70,
    questions: [
      {
        id: 'q-15-4-1',
        lessonId: 'les-15-4',
        learningObjectiveId: 'LO15.4.1',
        type: 'multiple_choice',
        difficulty: 'easy',
        prompt: 'Khối lệnh nào là nơi lý tưởng nhất để tắt cờ hiệu loading (isLoading = false) sau khi gọi API?',
        options: [
          { id: 'a', text: 'Khối finally' },
          { id: 'b', text: 'Chỉ trong khối try' },
          { id: 'c', text: 'Chỉ trong khối catch' },
          { id: 'd', text: 'Bên ngoài hàm async' }
        ],
        correctAnswer: 'a',
        explanation: 'Khối finally luôn được thực thi dù thành công hay có lỗi, đảm bảo cờ loading luôn được dọn dẹp.',
        relatedLessonId: 'les-15-4'
      }
    ]
  },
  summary: [
    'Luôn quản lý trọn vẹn 3 trạng thái: Loading, Success, Error khi làm việc với API.',
    'Dùng khối finally để tắt spinner tải dữ liệu một cách an toàn.',
    'Sử dụng AbortController để giới hạn thời gian chờ (Timeout) và hủy request treo.'
  ],
  suggestedBookmarks: [
    'Kỹ thuật Skeleton Screen thay thế Spinner truyền thống',
    'Thiết lập Timeout tự động cho fetch() bằng AbortSignal.timeout()'
  ]
};

export const JS_MODULE_15_LESSONS: Lesson[] = [
  LESSON_15_1,
  LESSON_15_2,
  LESSON_15_3,
  LESSON_15_4
];
