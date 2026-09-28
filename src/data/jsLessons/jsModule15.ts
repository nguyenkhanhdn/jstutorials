import { Lesson } from '../../types';

// ==========================================
// MODULE 15: FETCH API VÀ LÀM VIỆC VỚI DỮ LIỆU
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
  prerequisites: ['Hiểu giao thức Internet căn bản', 'Đã học Object trong JavaScript'],
  learningObjectives: [
    {
      id: 'LO15.1.1',
      code: 'LO15.1.1',
      title: 'Mô hình Client-Server và các phương thức HTTP (HTTP Methods)',
      description: 'Hiểu vai trò của GET (Lấy), POST (Tạo mới), PUT (Cập nhật), DELETE (Xóa).',
      bloomLevel: 'Understand',
      masteryPercentage: 92
    },
    {
      id: 'LO15.1.2',
      code: 'LO15.1.2',
      title: 'Định dạng JSON và các mã trạng thái HTTP Status Codes',
      description: 'Làm chủ các dải mã 200 (Thành công), 400/401/404 (Lỗi client), 500 (Lỗi server).',
      bloomLevel: 'Understand',
      masteryPercentage: 90
    }
  ],
  sections: [
    {
      id: 'sec-15-1-1',
      lessonId: 'les-15-1',
      order: 1,
      conceptName: 'Mô hình Client-Server và chuẩn JSON',
      title: '1. Giao tiếp Client - Server qua giao thức HTTP',
      explanation: 'Trong kiến trúc web: `Client` (Trình duyệt của người dùng) gửi một yêu cầu (`HTTP Request`) tới `Server` (Máy chủ backend). Server xử lý và gửi lại phản hồi (`HTTP Response`). Định dạng dữ liệu trao đổi phổ biến nhất là `JSON` (JavaScript Object Notation) - định dạng văn bản nhẹ, độc lập với mọi ngôn ngữ lập trình.',
      syntax: 'GET /api/products HTTP/1.1\nHost: api.example.com\nAccept: application/json',
      codeExample: `// Minh họa đối tượng JSON
const jsonString = '{"id": 101, "title": "Bàn phím cơ", "price": 850000}';

// Chuyển chuỗi JSON thành JavaScript Object
const productObj = JSON.parse(jsonString);
console.log("Tên sản phẩm:", productObj.title);
console.log("Giá:", productObj.price, "VND");`,
      lineByLineExplanation: [
        { line: 2, text: 'Chuỗi JSON tuân thủ quy tắc khóa key luôn nằm trong dấu ngoặc kép ("").' },
        { line: 5, text: 'JSON.parse() biên dịch chuỗi JSON thành đối tượng JS có thể thao tác được.' }
      ],
      commonMistakes: [
        'Nhầm lẫn giữa JSON (chuỗi text) và JS Object (đối tượng trong bộ nhớ RAM).'
      ],
      whenToUse: 'Dùng khi giao tiếp giữa Frontend React/Vue/JS thuần và Backend API (NodeJS, Java, C#, Python).',
      whenNotToUse: 'Không truyền các kiểu dữ liệu không hỗ trợ trong JSON (như Function, Symbol, undefined).',
      realWorldUseCase: 'Trao đổi dữ liệu người dùng đăng nhập giữa Frontend và Microservices.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-15-1',
    title: 'Thực hành đọc mã trạng thái HTTP phổ biến',
    description: 'Kiểm tra mã trạng thái 200 biểu thị thành công.',
    starterCode: `const statusCode = 200;
const statusText = statusCode === 200 ? "Thành công (OK)" : "Lỗi";

console.log("Trạng thái phản hồi:", statusText);`,
    expectedConsoleOutput: 'Trạng thái phản hồi: Thành công (OK)',
    hint: '200 OK là mã trạng thái chuẩn khi request thành công.'
  },
  exercises: {
    basic: {
      id: 'ex-15-1-1',
      lessonId: 'les-15-1',
      title: 'Bài tập Cơ bản: Ý nghĩa của mã trạng thái 404',
      difficulty: 'basic',
      learningObjectiveIds: ['LO15.1.2'],
      description: 'Mã phản hồi HTTP 404 có ý nghĩa là gì: "KhongTimThay" (Not Found) hay "LoiMayChu" (Internal Server Error)? In ra đáp án đúng.',
      starterCode: `const meaning404 = "KhongTimThay";
console.log("Ý nghĩa mã 404:", meaning404);`,
      solutionCode: `const meaning404 = "KhongTimThay";
console.log("Ý nghĩa mã 404:", meaning404);`,
      testCases: [
        { id: 'tc-1', description: '404 Not Found', expectedOutput: 'Ý nghĩa mã 404: KhongTimThay' }
      ],
      hints: ['404 Not Found biểu thị tài nguyên không tồn tại'],
      explanation: '404 Not Found là mã lỗi HTTP phổ biến nhất khi đường dẫn URL không khớp với bất kỳ tài nguyên nào trên server.'
    },
    intermediate: {
      id: 'ex-15-1-2',
      lessonId: 'les-15-1',
      title: 'Bài tập Trung bình: Lựa chọn phương thức HTTP phù hợp',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO15.1.1'],
      description: 'Khi muốn XÓA một bài viết khỏi hệ thống cơ sở dữ liệu, theo chuẩn RESTful API ta nên sử dụng phương thức HTTP nào: "GET", "POST", hay "DELETE"? In ra tên phương thức.',
      starterCode: `const methodForDelete = "DELETE";
console.log("Phương thức HTTP dùng để xóa:", methodForDelete);`,
      solutionCode: `const methodForDelete = "DELETE";
console.log("Phương thức HTTP dùng để xóa:", methodForDelete);`,
      testCases: [
        { id: 'tc-1', description: 'Phương thức DELETE', expectedOutput: 'Phương thức HTTP dùng để xóa: DELETE' }
      ],
      hints: ['Chuẩn RESTful API quy định phương thức DELETE cho hành động xóa'],
      explanation: 'GET: Đọc; POST: Tạo mới; PUT/PATCH: Sửa; DELETE: Xóa.'
    },
    challenge: {
      id: 'ex-15-1-3',
      lessonId: 'les-15-1',
      title: 'Bài tập Thử thách: Kiểm tra tính hợp lệ của chuỗi JSON',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO15.1.2'],
      description: 'Viết hàm isValidJson(str) trả về true nếu chuỗi là JSON hợp lệ (parse thành công không ném lỗi), ngược lại trả về false. Chạy thử với \'{"status": "ok"}\'.',
      starterCode: `function isValidJson(str) {
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
}

console.log("Chuỗi JSON hợp lệ?", isValidJson('{"status": "ok"}'));`,
      solutionCode: `function isValidJson(str) {
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
}
console.log("Chuỗi JSON hợp lệ?", isValidJson('{"status": "ok"}'));`,
      testCases: [
        { id: 'tc-1', description: 'JSON hợp lệ trả về true', expectedOutput: 'Chuỗi JSON hợp lệ? true' }
      ],
      hints: ['Dùng try...catch bọc quanh JSON.parse()'],
      explanation: 'Bọc JSON.parse trong try/catch là cách chuẩn nhất để tránh ứng dụng bị crash khi nhận chuỗi lỗi từ server.'
    }
  },
  quiz: {
    id: 'quiz-15-1',
    lessonId: 'les-15-1',
    title: 'Trắc nghiệm Client-Server & JSON',
    passingScore: 70,
    questions: []
  },
  summary: [
    'Client gửi Request, Server trả về Response kèm HTTP Status Code.',
    'JSON là chuẩn trao đổi dữ liệu gọn nhẹ phổ biến nhất trên Internet.'
  ],
  suggestedBookmarks: ['Mã trạng thái HTTP', 'RESTful API Methods']
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
  prerequisites: ['Đã học Promise, async/await và HTTP Status'],
  learningObjectives: [
    {
      id: 'LO15.2.1',
      code: 'LO15.2.1',
      title: 'Gửi HTTP GET Request bằng Fetch API',
      description: 'Sử dụng fetch(url) và giải nén dữ liệu qua response.json().',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    },
    {
      id: 'LO15.2.2',
      code: 'LO15.2.2',
      title: 'Kiểm tra thuộc tính response.ok (HTTP status 200-299)',
      description: 'Xử lý tình huống fetch không tự động ném lỗi khi gặp mã 404 hay 500.',
      bloomLevel: 'Analyze',
      masteryPercentage: 88
    }
  ],
  sections: [
    {
      id: 'sec-15-2-1',
      lessonId: 'les-15-2',
      order: 1,
      conceptName: 'Fetch API và response.json()',
      title: '1. Quy trình 2 bước khi dùng fetch() lấy dữ liệu',
      explanation: '`fetch(url)` là hàm có sẵn trong trình duyệt để gửi HTTP request và mặc định sử dụng phương thức `GET`. Quy trình giải nén gồm 2 bước: (1) `const response = await fetch(url)` trả về Response Object (chứa header, status code); (2) `const data = await response.json()` giải nén phần thân (Body) thành JavaScript Object.',
      syntax: 'const res = await fetch("https://api.example.com/items");\nif (!res.ok) throw new Error("Lỗi HTTP: " + res.status);\nconst data = await res.json();',
      codeExample: `// Giả lập hàm fetch và đọc response.ok
async function getCourseList() {
  const fakeResponse = {
    ok: true,
    status: 200,
    json: async () => [
      { id: 1, title: "HTML5/CSS3 cơ bản" },
      { id: 2, title: "Lập trình JavaScript nâng cao" }
    ]
  };

  if (!fakeResponse.ok) {
    throw new Error(\`Lỗi máy chủ: \${fakeResponse.status}\`);
  }

  const courses = await fakeResponse.json();
  console.log("Số lượng khóa học tải về:", courses.length);
  console.log("Khóa học 1:", courses[0].title);
}

getCourseList();`,
      lineByLineExplanation: [
        { line: 11, text: 'Luôn kiểm tra !response.ok trước khi đọc dữ liệu.' },
        { line: 15, text: 'await response.json() giải mã phần thân JSON thành mảng JavaScript.' }
      ],
      commonMistakes: [
        'Tưởng rằng fetch() sẽ tự động nhảy vào khối catch khi gặp mã 404 hoặc 500 (fetch chỉ reject khi có sự cố mạng đứt cáp hoặc DNS).'
      ],
      whenToUse: 'Dùng để tải danh sách sản phẩm, tin tức, thông tin thời tiết hiển thị lên trang.',
      whenNotToUse: 'Không dùng fetch nếu dữ liệu đã được lưu trữ cục bộ trong localStorage.',
      realWorldUseCase: 'Tải danh sách bài giảng từ hệ thống đào tạo FPT Polytechnic.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-15-2',
    title: 'Thực hành kiểm tra cờ response.ok',
    description: 'Kiểm tra nếu response.ok = true thì in ra dữ liệu đã tải thành công.',
    starterCode: `const mockResponse = { ok: true, status: 200 };

if (mockResponse.ok) {
  console.log("Dữ liệu tải về thành công (200 OK)");
} else {
  console.log("Lỗi tải dữ liệu");
}`,
    expectedConsoleOutput: 'Dữ liệu tải về thành công (200 OK)',
    hint: 'response.ok có giá trị true khi status nằm trong khoảng 200-299.'
  },
  exercises: {
    basic: {
      id: 'ex-15-2-1',
      lessonId: 'les-15-2',
      title: 'Bài tập Cơ bản: Phương thức HTTP mặc định của hàm fetch()',
      difficulty: 'basic',
      learningObjectiveIds: ['LO15.2.1'],
      description: 'Khi gọi fetch("https://api.example.com") mà không truyền thêm object cấu hình, hàm fetch mặc định sử dụng phương thức HTTP nào: "GET" hay "POST"? In tên phương thức.',
      starterCode: `const defaultMethod = "GET";
console.log("Phương thức mặc định:", defaultMethod);`,
      solutionCode: `const defaultMethod = "GET";
console.log("Phương thức mặc định:", defaultMethod);`,
      testCases: [
        { id: 'tc-1', description: 'Mặc định là GET', expectedOutput: 'Phương thức mặc định: GET' }
      ],
      hints: ['fetch mặc định luôn là GET request'],
      explanation: 'Không cần cấu hình method nếu chỉ gửi request lấy dữ liệu GET.'
    },
    intermediate: {
      id: 'ex-15-2-2',
      lessonId: 'les-15-2',
      title: 'Bài tập Trung bình: Viết khối ném lỗi khi response.ok thất bại',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO15.2.2'],
      description: 'Cho đối tượng res = { ok: false, status: 404 }. Viết logic kiểm tra: nếu !res.ok thì in ra "Phát hiện lỗi HTTP: 404".',
      starterCode: `const res = { ok: false, status: 404 };

if (!res.ok) {
  console.log(\`Phát hiện lỗi HTTP: \${res.status}\`);
}`,
      solutionCode: `const res = { ok: false, status: 404 };
if (!res.ok) {
  console.log(\`Phát hiện lỗi HTTP: \${res.status}\`);
}`,
      testCases: [
        { id: 'tc-1', description: 'Bắt lỗi 404', expectedOutput: 'Phát hiện lỗi HTTP: 404' }
      ],
      hints: ['Kiểm tra if (!res.ok)'],
      explanation: 'Thuộc tính response.ok là lá chắn bắt buộc phải kiểm tra trong mọi hàm fetch.'
    },
    challenge: {
      id: 'ex-15-2-3',
      lessonId: 'les-15-2',
      title: 'Bài tập Thử thách: Hàm tải dữ liệu an toàn bọc trong try/catch',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO15.2.1', 'LO15.2.2'],
      description: 'Viết hàm async safeFetch(url). Giả lập nếu url === "valid" trả về { success: true }, ngược lại ném lỗi "Đường dẫn không tồn tại". In kết quả khi gọi với "valid".',
      starterCode: `async function safeFetch(url) {
  try {
    if (url !== "valid") throw new Error("Đường dẫn không tồn tại");
    return { success: true };
  } catch (e: any) {
    return { error: e.message };
  }
}

safeFetch("valid").then(data => {
  console.log("Kết quả tải:", data);
});`,
      solutionCode: `async function safeFetch(url) {
  try {
    if (url !== "valid") throw new Error("Đường dẫn không tồn tại");
    return { success: true };
  } catch (e: any) {
    return { error: e.message };
  }
}
safeFetch("valid").then(data => {
  console.log("Kết quả tải:", data);
});`,
      testCases: [
        { id: 'tc-1', description: 'Tải thành công', expectedOutput: 'Kết quả tải: { success: true }' }
      ],
      hints: ['Bọc try/catch trả về dữ liệu an toàn'],
      explanation: 'Mô hình bọc fetch an toàn giúp ứng dụng không bị văng unhandled promise rejection.'
    }
  },
  quiz: {
    id: 'quiz-15-2',
    lessonId: 'les-15-2',
    title: 'Trắc nghiệm fetch GET',
    passingScore: 70,
    questions: []
  },
  summary: [
    'fetch(url) gửi GET request và giải nén dữ liệu qua await response.json().',
    'Luôn kiểm tra if (!response.ok) để bắt các mã lỗi 404, 500.'
  ],
  suggestedBookmarks: ['Quy trình fetch() 2 bước', 'Cờ response.ok']
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
  prerequisites: ['Đã học Fetch GET và JSON.stringify'],
  learningObjectives: [
    {
      id: 'LO15.3.1',
      code: 'LO15.3.1',
      title: 'Cấu hình tham số gửi HTTP POST Request',
      description: 'Thiết lập method: "POST", headers: { "Content-Type": "application/json" } và body: JSON.stringify(data).',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    },
    {
      id: 'LO15.3.2',
      code: 'LO15.3.2',
      title: 'Xử lý phản hồi tạo mới dữ liệu từ Server (201 Created)',
      description: 'Nhận bản ghi kèm ID tự sinh từ phía máy chủ.',
      bloomLevel: 'Apply',
      masteryPercentage: 88
    }
  ],
  sections: [
    {
      id: 'sec-15-3-1',
      lessonId: 'les-15-3',
      order: 1,
      conceptName: 'Cấu hình fetch POST với Content-Type',
      title: '1. Cấu hình gửi dữ liệu JSON lên Server với POST',
      explanation: 'Để gửi dữ liệu lên server bằng `fetch()`, ta truyền tham số thứ hai là một object cấu hình gồm 3 thuộc tính bắt buộc: (1) `method: "POST"`; (2) `headers: { "Content-Type": "application/json" }` (báo cho server biết định dạng dữ liệu là JSON); (3) `body: JSON.stringify(payload)` (chuyển JS object thành chuỗi JSON).',
      syntax: 'await fetch(url, {\n  method: "POST",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify(data)\n});',
      codeExample: `// Giả lập hàm gửi bài tập sinh viên lên hệ thống
async function submitAssignment(assignmentData: any) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(assignmentData)
  };

  console.log("Cấu hình Header:", options.headers["Content-Type"]);
  console.log("Phần thân Body gửi đi:", options.body);
  
  // Giả lập Server phản hồi mã 201 Created
  return { status: 201, id: 999, message: "Đã nộp bài thành công" };
}

submitAssignment({ studentId: "PS12345", lessonId: "les-15-3", score: 100 });`,
      lineByLineExplanation: [
        { line: 4, text: 'Khai báo method là POST.' },
        { line: 5, text: 'Header báo định dạng application/json để backend parse được dữ liệu.' },
        { line: 6, text: 'Chuyển dữ liệu sang chuỗi JSON bằng JSON.stringify.' }
      ],
      commonMistakes: [
        'Truyền trực tiếp JavaScript Object vào body mà quên dùng JSON.stringify() -> gửi chuỗi "[object Object]" lên server gây lỗi 400 Bad Request.'
      ],
      whenToUse: 'Dùng khi gửi form đăng ký, tạo sản phẩm mới, gửi bài thi, thanh toán đơn hàng.',
      whenNotToUse: 'Không dùng POST nếu chỉ muốn lấy dữ liệu để xem (hãy dùng GET).',
      realWorldUseCase: 'Gửi bình luận mới vào bài viết hoặc nộp bài tập về nhà lên hệ thống LMS.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-15-3',
    title: 'Thực hành tạo Body JSON cho request POST',
    description: 'Chuyển đổi đối tượng dữ liệu thành chuỗi JSON sẵn sàng cho body.',
    starterCode: `const newPost = { title: "Học JS Nâng cao", author: "FPT Poly" };
const bodyString = JSON.stringify(newPost);

console.log("Body JSON chuẩn:", bodyString);`,
    expectedConsoleOutput: 'Body JSON chuẩn: {"title":"Học JS Nâng cao","author":"FPT Poly"}',
    hint: 'JSON.stringify(newPost).'
  },
  exercises: {
    basic: {
      id: 'ex-15-3-1',
      lessonId: 'les-15-3',
      title: 'Bài tập Cơ bản: Header bắt buộc khi gửi dữ liệu JSON',
      difficulty: 'basic',
      learningObjectiveIds: ['LO15.3.1'],
      description: 'Khi gửi chuỗi JSON trong body của fetch POST, giá trị của header "Content-Type" cần đặt là gì: "text/plain" hay "application/json"? In ra giá trị đúng.',
      starterCode: `const correctContentType = "application/json";
console.log("Content-Type đúng:", correctContentType);`,
      solutionCode: `const correctContentType = "application/json";
console.log("Content-Type đúng:", correctContentType);`,
      testCases: [
        { id: 'tc-1', description: 'application/json', expectedOutput: 'Content-Type đúng: application/json' }
      ],
      hints: ['application/json báo cho server giải nén body dạng JSON'],
      explanation: 'Thiếu Content-Type: application/json khiến đa số backend (như Express bodyParser) không thể nhận diện dữ liệu trong req.body.'
    },
    intermediate: {
      id: 'ex-15-3-2',
      lessonId: 'les-15-3',
      title: 'Bài tập Trung bình: Viết hàm tạo Payload gửi đi chuẩn chỉnh',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO15.3.1'],
      description: 'Viết hàm createPostOptions(data) trả về đối tượng cấu hình có method: "POST", headers tương ứng và body được chuyển đổi bằng JSON.stringify. Chạy thử với { name: "An" } và in options.method.',
      starterCode: `function createPostOptions(data) {
  return {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  };
}

const opts = createPostOptions({ name: "An" });
console.log("Phương thức:", opts.method);`,
      solutionCode: `function createPostOptions(data) {
  return {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  };
}
const opts = createPostOptions({ name: "An" });
console.log("Phương thức:", opts.method);`,
      testCases: [
        { id: 'tc-1', description: 'Phương thức POST', expectedOutput: 'Phương thức: POST' }
      ],
      hints: ['Trả về object gồm method, headers, body'],
      explanation: 'Cấu trúc chuẩn của HTTP POST Request bằng Fetch API.'
    },
    challenge: {
      id: 'ex-15-3-3',
      lessonId: 'les-15-3',
      title: 'Bài tập Thử thách: Xử lý mã phản hồi tạo mới thành công 201 Created',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO15.3.2'],
      description: 'Khi server phản hồi mã 201 Created, in ra: "Tạo thành công ID: [id]". Cho phản hồi giả lập res = { status: 201, data: { id: 789 } }. Viết code kiểm tra và in thông báo.',
      starterCode: `const res = { status: 201, data: { id: 789 } };

if (res.status === 201) {
  console.log(\`Tạo thành công ID: \${res.data.id}\`);
}`,
      solutionCode: `const res = { status: 201, data: { id: 789 } };
if (res.status === 201) {
  console.log(\`Tạo thành công ID: \${res.data.id}\`);
}`,
      testCases: [
        { id: 'tc-1', description: 'Xử lý mã 201', expectedOutput: 'Tạo thành công ID: 789' }
      ],
      hints: ['res.status === 201'],
      explanation: 'Mã 201 Created biểu thị một bản ghi mới vừa được tạo thành công trong cơ sở dữ liệu.'
    }
  },
  quiz: {
    id: 'quiz-15-3',
    lessonId: 'les-15-3',
    title: 'Trắc nghiệm fetch POST',
    passingScore: 70,
    questions: []
  },
  summary: [
    'POST request yêu cầu thiết lập method, headers (application/json) và body.',
    'Luôn dùng JSON.stringify() để chuyển đổi đối tượng sang chuỗi JSON khi gửi.'
  ],
  suggestedBookmarks: ['Cấu hình fetch() POST', 'Content-Type: application/json']
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
  prerequisites: ['Đã học Fetch GET/POST và async/await'],
  learningObjectives: [
    {
      id: 'LO15.4.1',
      code: 'LO15.4.1',
      title: 'Quản lý 3 trạng thái của một Request (Idle/Loading, Success, Error)',
      description: 'Hiển thị Skeleton/Spinner khi đang tải và thông báo lỗi thân thiện khi gặp sự cố.',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    },
    {
      id: 'LO15.4.2',
      code: 'LO15.4.2',
      title: 'Kỹ thuật Hủy bỏ Request (Abort Controller)',
      description: 'Sử dụng AbortController để hủy bỏ request khi người dùng chuyển trang hoặc timeout.',
      bloomLevel: 'Analyze',
      masteryPercentage: 86
    }
  ],
  sections: [
    {
      id: 'sec-15-4-1',
      lessonId: 'les-15-4',
      order: 1,
      conceptName: 'Quản lý trạng thái và AbortController',
      title: '1. Vòng đời chuẩn của một yêu cầu API trên giao diện',
      explanation: 'Một ứng dụng web chuẩn doanh nghiệp không bao giờ để màn hình đơ vô cảm khi tải dữ liệu. Luôn áp dụng mô hình 3 trạng thái: (1) `Loading`: Bật icon quay spinner; (2) `Success`: Hiển thị dữ liệu; (3) `Error`: Hiển thị thông điệp lỗi và nút "Thử lại" (Retry). Sử dụng `AbortController` để tự động ngắt kết nối nếu mạng quá chậm (Timeout).',
      syntax: 'const controller = new AbortController();\nfetch(url, { signal: controller.signal });\n// Hủy request:\ncontroller.abort();',
      codeExample: `// Giả lập trạng thái tải UI State
let state = {
  isLoading: false,
  data: null,
  error: null
};

async function loadProducts() {
  state.isLoading = true;
  state.error = null;
  console.log("Trạng thái:", state.isLoading ? "Đang tải dữ liệu..." : "Nghỉ");

  try {
    // Giả lập tải thành công
    state.data = ["iPhone 16", "MacBook Pro"];
    console.log("Dữ liệu nhận được:", state.data);
  } catch (err: any) {
    state.error = err.message;
  } finally {
    state.isLoading = false;
    console.log("Trạng thái:", state.isLoading ? "Đang tải..." : "Hoàn tất!");
  }
}

loadProducts();`,
      lineByLineExplanation: [
        { line: 9, text: 'Bật isLoading = true trước khi bắt đầu gửi request.' },
        { line: 18, text: 'Khối finally đảm bảo isLoading = false dù thành công hay thất bại.' }
      ],
      commonMistakes: [
        'Quên tắt trạng thái Loading khi gặp lỗi, khiến vòng xoay spinner quay mãi mãi (Infinite Loading).'
      ],
      whenToUse: 'Bắt buộc áp dụng cho mọi màn hình tải dữ liệu trong ứng dụng thực tế.',
      whenNotToUse: 'Không cần nếu dữ liệu trả về tức thì từ bộ nhớ cache RAM.',
      realWorldUseCase: 'Hiển thị bộ khung xám Skeleton Loading khi người dùng lướt bảng tin Facebook/Shopee.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-15-4',
    title: 'Thực hành mô phỏng cơ chế thử lại (Retry Mechanism)',
    description: 'Tự động thử gọi lại request nếu lần đầu thất bại.',
    starterCode: `let attempts = 0;
function tryFetch() {
  attempts++;
  console.log(\`Thử kết nối lần \${attempts}...\`);
  if (attempts >= 2) {
    console.log("Kết nối thành công ở lần thử thứ 2!");
  }
}

tryFetch();
tryFetch();`,
    expectedConsoleOutput: 'Thử kết nối lần 1...\nThử kết nối lần 2...\nKết nối thành công ở lần thử thứ 2!',
    hint: 'Cơ chế Retry nâng cao trải nghiệm khi mạng chập chờn.'
  },
  exercises: {
    basic: {
      id: 'ex-15-4-1',
      lessonId: 'les-15-4',
      title: 'Bài tập Cơ bản: Khối lệnh đảm bảo tắt cờ Loading',
      difficulty: 'basic',
      learningObjectiveIds: ['LO15.4.1'],
      description: 'Trong cấu trúc try...catch...finally, khối lệnh nào luôn luôn được thực thi dù request thành công hay gặp lỗi mạng: "try", "catch" hay "finally"? In tên khối lệnh.',
      starterCode: `const reliableBlock = "finally";
console.log("Khối lệnh luôn thực thi:", reliableBlock);`,
      solutionCode: `const reliableBlock = "finally";
console.log("Khối lệnh luôn thực thi:", reliableBlock);`,
      testCases: [
        { id: 'tc-1', description: 'Khối finally', expectedOutput: 'Khối lệnh luôn thực thi: finally' }
      ],
      hints: ['finally luôn chạy ở bước cuối cùng'],
      explanation: 'Đặt lệnh tắt trạng thái Loading (isLoading = false) trong khối finally giúp ngăn chặn hoàn toàn lỗi treo giao diện.'
    },
    intermediate: {
      id: 'ex-15-4-2',
      lessonId: 'les-15-4',
      title: 'Bài tập Trung bình: Hiển thị thông báo lỗi thân thiện thay vì mã kỹ thuật',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO15.4.1'],
      description: 'Viết hàm getFriendlyErrorMessage(status) trả về thông điệp thân thiện: nếu status === 404 trả về "Không tìm thấy dữ liệu yêu cầu", nếu status === 500 trả về "Máy chủ đang bảo trì, vui lòng thử lại sau". Chạy thử với 500 và in kết quả.',
      starterCode: `function getFriendlyErrorMessage(status) {
  if (status === 404) return "Không tìm thấy dữ liệu yêu cầu";
  if (status === 500) return "Máy chủ đang bảo trì, vui lòng thử lại sau";
  return "Có lỗi xảy ra";
}

console.log(getFriendlyErrorMessage(500));`,
      solutionCode: `function getFriendlyErrorMessage(status) {
  if (status === 404) return "Không tìm thấy dữ liệu yêu cầu";
  if (status === 500) return "Máy chủ đang bảo trì, vui lòng thử lại sau";
  return "Có lỗi xảy ra";
}
console.log(getFriendlyErrorMessage(500));`,
      testCases: [
        { id: 'tc-1', description: 'Thông báo lỗi 500', expectedOutput: 'Máy chủ đang bảo trì, vui lòng thử lại sau' }
      ],
      hints: ['status === 500'],
      explanation: 'Dịch mã lỗi kỹ thuật thành ngôn ngữ dễ hiểu giúp người dùng cảm thấy yên tâm và biết cách xử lý tiếp theo.'
    },
    challenge: {
      id: 'ex-15-4-3',
      lessonId: 'les-15-4',
      title: 'Bài tập Thử thách: Khởi tạo AbortController hủy request',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO15.4.2'],
      description: 'Trong trình duyệt, const controller = new AbortController(). Thuộc tính signal của controller được truyền vào fetch. Khi gọi controller.abort(), thuộc tính controller.signal.aborted chuyển thành true. Mô phỏng kiểm tra cờ aborted và in ra: "Yêu cầu mạng đã bị hủy: [true/false]".',
      starterCode: `const mockController = {
  signal: { aborted: false },
  abort() {
    this.signal.aborted = true;
  }
};

mockController.abort();
console.log("Yêu cầu mạng đã bị hủy:", mockController.signal.aborted);`,
      solutionCode: `const mockController = {
  signal: { aborted: false },
  abort() {
    this.signal.aborted = true;
  }
};
mockController.abort();
console.log("Yêu cầu mạng đã bị hủy:", mockController.signal.aborted);`,
      testCases: [
        { id: 'tc-1', description: 'Đã hủy thành công', expectedOutput: 'Yêu cầu mạng đã bị hủy: true' }
      ],
      hints: ['controller.abort() chuyển cờ aborted thành true'],
      explanation: 'AbortController là vũ khí tiêu chuẩn để hủy bỏ các request lỗi thời khi người dùng chuyển trang nhanh hoặc gõ tìm kiếm liên tục.'
    }
  },
  quiz: {
    id: 'quiz-15-4',
    lessonId: 'les-15-4',
    title: 'Trắc nghiệm Loading & Error Handling',
    passingScore: 70,
    questions: []
  },
  summary: [
    'Luôn quản lý 3 trạng thái: Loading, Success, Error trong vòng đời gọi API.',
    'Dùng finally để tắt spinner loading và AbortController để ngắt kết nối khi cần.'
  ],
  suggestedBookmarks: ['3 trạng thái API UI', 'AbortController hủy request']
};

export const JS_MODULE_15_LESSONS: Lesson[] = [
  LESSON_15_1,
  LESSON_15_2,
  LESSON_15_3,
  LESSON_15_4
];
