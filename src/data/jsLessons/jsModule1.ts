import { Lesson } from '../../types';

// ==========================================
// MODULE 1: TỔNG QUAN JAVASCRIPT
// ==========================================

export const LESSON_1_1: Lesson = {
  id: 'les-1-1',
  moduleId: 'mod-1',
  track: 'javascript',
  language: 'javascript',
  title: '1.1 JavaScript là gì & Chạy ở đâu?',
  order: 1,
  durationMinutes: 30,
  difficulty: 'Cơ bản',
  prerequisites: [
    'Đã nắm cấu trúc tài liệu HTML5 cơ bản',
    'Hiểu mô hình Client - Server và trình duyệt web'
  ],
  learningObjectives: [
    {
      id: 'LO1.1.1',
      code: 'LO1.1.1',
      title: 'Bản chất ngôn ngữ JavaScript',
      description: 'Nắm vững JavaScript là ngôn ngữ thông dịch (JIT compiled), đơn luồng (single-threaded) và định kiểu động (dynamically typed).',
      bloomLevel: 'Understand',
      masteryPercentage: 90
    },
    {
      id: 'LO1.1.2',
      code: 'LO1.1.2',
      title: 'Môi trường thực thi JS Engine',
      description: 'Phân biệt môi trường thực thi trên trình duyệt (V8, SpiderMonkey) và môi trường ngoài trình duyệt (Node.js, Deno, Bun).',
      bloomLevel: 'Understand',
      masteryPercentage: 88
    },
    {
      id: 'LO1.1.3',
      code: 'LO1.1.3',
      title: 'Thực thi câu lệnh đầu tiên trên Console',
      description: 'Mở DevTools và thực thi thành công câu lệnh console.log() xuất thông điệp đầu tiên.',
      bloomLevel: 'Apply',
      masteryPercentage: 95
    }
  ],
  sections: [
    {
      id: 'sec-1-1-1',
      lessonId: 'les-1-1',
      order: 1,
      conceptName: 'Bản chất và vị trí của JavaScript',
      title: '1. JavaScript – Linh hồn tương tác của trang Web',
      explanation: 'Nếu HTML là bộ xương cấu trúc trang, CSS là lớp da áo tạo kiểu dáng thẩm mỹ, thì JavaScript chính là hệ cơ bắp và thần kinh giúp trang web tương tác sống động với người dùng. JavaScript được sáng tạo năm 1995 bởi Brendan Eich tại Netscape, và ngày nay tuân theo chuẩn quốc tế ECMAScript (ES6+).',
      syntax: 'console.log("Nội dung thông điệp");',
      codeExample: `// Câu lệnh kinh điển chào thế giới lập trình
console.log("Xin chào JavaScript hiện đại!");

// Tính toán biểu thức số học tức thì
console.log("Năm hiện tại:", 2026);
console.log("Kết quả 15 + 25 =", 15 + 25);`,
      lineByLineExplanation: [
        { line: 2, text: 'console.log() là hàm tích hợp sẵn dùng để in dữ liệu ra tab Console của DevTools.' },
        { line: 5, text: 'In chuỗi nhãn kết hợp cùng số nguyên 2026.' },
        { line: 6, text: 'JavaScript tự động tính toán biểu thức 15 + 25 trước rồi in kết quả 40.' }
      ],
      commonMistakes: [
        'Nhầm lẫn giữa Java và JavaScript (hai ngôn ngữ hoàn toàn khác nhau về cú pháp, triết lý và hệ sinh thái).',
        'Viết hoa chữ cái đầu: Console.log() hoặc CONSOLE.LOG() -> JavaScript phân biệt chữ hoa chữ thường (case-sensitive) nên sẽ gây lỗi ReferenceError.'
      ],
      whenToUse: 'Dùng khi cần tạo hiệu ứng tương tác, xác thực form nhập liệu, gọi API máy chủ và xử lý dữ liệu động.',
      whenNotToUse: 'Không dùng JavaScript để tạo kiểu trang trí tĩnh đơn thuần (hãy dùng CSS để đạt hiệu năng dựng hình cao hơn).',
      realWorldUseCase: 'Hiển thị popup thông báo, tải thêm bài viết khi cuộn chuột và cập nhật giỏ hàng không cần tải lại trang.'
    },
    {
      id: 'sec-1-1-2',
      lessonId: 'les-1-1',
      order: 2,
      conceptName: 'Môi trường thực thi: Trình duyệt vs Node.js',
      title: '2. JavaScript Engine & Hai môi trường chạy chính',
      explanation: 'JavaScript không thể tự chạy trong không khí; nó cần một bộ máy thực thi gọi là JavaScript Engine. Engine nổi tiếng nhất là V8 (do Google phát triển bằng C++, dùng trong Chrome và Node.js). Trên trình duyệt, JS có quyền truy cập cửa sổ `window`, tài liệu `document` (DOM). Trên máy chủ (Node.js), JS có thể đọc ghi file hệ thống và quản lý kết nối cơ sở dữ liệu.',
      syntax: '// Trình duyệt: có window, document, alert\n// Node.js: có process, global, fs',
      codeExample: `// Kiểm tra môi trường thực thi an toàn
const environment = typeof window !== "undefined" ? "Browser Environment" : "Node.js Environment";
console.log("Môi trường đang chạy:", environment);

// Thông tin nền tảng
console.log("Độ phân giải màn hình hoặc Node runtime sẵn sàng!");`,
      lineByLineExplanation: [
        { line: 2, text: 'Kiểm tra biến toàn cục window; nếu tồn tại thì đang chạy trên trình duyệt.' },
        { line: 3, text: 'In tên môi trường tương ứng ra màn hình.' }
      ],
      commonMistakes: [
        'Gọi window hoặc document trong mã nguồn backend chạy với Node.js dẫn đến lỗi "ReferenceError: window is not defined".'
      ],
      whenToUse: 'Nắm vững sự khác nhau giữa các môi trường để viết mã đa nền tảng (Universal/Isomorphic JS).',
      whenNotToUse: 'Không gọi các API phụ thuộc phần cứng riêng lẻ mà không kiểm tra tính tương thích.',
      realWorldUseCase: 'Xây dựng ứng dụng Fullstack JavaScript: React/Next.js phía Frontend và Express.js phía Backend.'
    }
  ],
  predictOutputs: [
    {
      id: 'po-1-1-1',
      code: `console.log("JavaScript" + " " + "2026");`,
      question: 'Kết quả in ra của câu lệnh nối chuỗi trên là gì?',
      options: ['"JavaScript 2026"', '"JavaScript+2026"', 'NaN', 'undefined'],
      correctAnswer: '"JavaScript 2026"',
      explanation: 'Toán tử cộng (+) khi dùng với kiểu chuỗi sẽ ghép nối các đoạn văn bản lại với nhau theo thứ tự.',
      hint: 'Dấu cách ở giữa hai từ được bảo toàn.'
    },
    {
      id: 'po-1-1-2',
      code: `console.log(10 * 2 + 5);`,
      question: 'Giá trị hiển thị trên Console là bao nhiêu?',
      options: ['25', '70', '205', 'TypeError'],
      correctAnswer: '25',
      explanation: 'Quy tắc thứ tự toán tử: phép nhân (10 * 2 = 20) được ưu tiên thực hiện trước phép cộng (+ 5 = 25).',
      hint: 'Nhân chia trước, cộng trừ sau.'
    }
  ],
  interactivePractice: {
    id: 'ip-1-1',
    title: 'Thực hành: Khởi tạo thông điệp khởi động Web Master',
    description: 'Viết lệnh in ra lời chào "Web Master JS: Sẵn sàng bứt phá!" và dòng thông tin phiên bản "Phiên bản: 1.0".',
    starterCode: `// Viết hai câu lệnh console.log() tại đây:
console.log("Web Master JS: Sẵn sàng bứt phá!");
console.log("Phiên bản: 1.0");`,
    expectedConsoleOutput: 'Web Master JS: Sẵn sàng bứt phá!\nPhiên bản: 1.0',
    hint: 'Sử dụng hai lệnh console.log lần lượt.',
    language: 'javascript'
  },
  exercises: {
    basic: {
      id: 'ex-1-1-1',
      lessonId: 'les-1-1',
      title: 'Bài tập Cơ bản: In danh thiếp lập trình viên',
      difficulty: 'basic',
      learningObjectiveIds: ['LO1.1.3'],
      description: 'Dùng console.log() in ra 2 dòng thông tin: Dòng 1: `Họ tên: Nguyễn Văn An`, Dòng 2: `Chuyên ngành: Lập trình Web Frontend`.',
      starterCode: `// Viết code in danh thiếp tại đây:
`,
      solutionCode: `console.log("Họ tên: Nguyễn Văn An");
console.log("Chuyên ngành: Lập trình Web Frontend");`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra in đúng thông tin danh thiếp',
          expectedOutput: 'Họ tên: Nguyễn Văn An\nChuyên ngành: Lập trình Web Frontend'
        }
      ],
      hints: ['Dùng console.log("Họ tên: Nguyễn Văn An");'],
      explanation: 'console.log tự động ngắt xuống dòng mới sau mỗi lần gọi.'
    },
    intermediate: {
      id: 'ex-1-1-2',
      lessonId: 'les-1-1',
      title: 'Bài tập Trung bình: Tính toán hóa đơn bán hàng cơ bản',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO1.1.1'],
      description: 'Cho giá sản phẩm là 50000 và số lượng mua là 3. Dùng console.log in ra: `Tổng tiền thanh toán: [kết quả tính toán] VNĐ`.',
      starterCode: `const donGia = 50000;
const soLuong = 3;

// In tổng tiền thanh toán:
`,
      solutionCode: `const donGia = 50000;
const soLuong = 3;
console.log("Tổng tiền thanh toán:", donGia * soLuong, "VNĐ");`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra tính tổng tiền 150000 VNĐ',
          expectedOutput: 'Tổng tiền thanh toán: 150000 VNĐ'
        }
      ],
      hints: ['Dùng biểu thức donGia * soLuong'],
      explanation: 'JavaScript có thể tính toán trực tiếp các biểu thức toán học bên trong tham số của hàm.'
    },
    challenge: {
      id: 'ex-1-1-3',
      lessonId: 'les-1-1',
      title: 'Bài tập Thử thách: Kiểm tra năm nhuận đơn giản',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO1.1.1', 'LO1.1.2'],
      description: 'Cho biến year = 2024. Viết biểu thức kiểm tra năm nhuận (chia hết cho 4 và không chia hết cho 100, hoặc chia hết cho 400). In ra chuỗi: `Năm 2024 là năm nhuận: [true/false]`.',
      starterCode: `const year = 2024;
const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

// In kết quả kiểm tra năm nhuận:
`,
      solutionCode: `const year = 2024;
const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
console.log(\`Năm \${year} là năm nhuận: \${isLeap}\`);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra năm 2024 là năm nhuận (true)',
          expectedOutput: 'Năm 2024 là năm nhuận: true'
        }
      ],
      hints: ['Dùng Template literals ${isLeap} hoặc nối chuỗi'],
      explanation: 'Năm 2024 chia hết cho 4 và không chia hết cho 100 nên isLeap nhận giá trị boolean true.'
    }
  },
  quiz: {
    id: 'quiz-1-1',
    lessonId: 'les-1-1',
    title: 'Trắc nghiệm: Bản chất & Môi trường JavaScript',
    passingScore: 70,
    questions: [
      {
        id: 'q-1-1-1',
        lessonId: 'les-1-1',
        learningObjectiveId: 'LO1.1.1',
        type: 'multiple_choice',
        difficulty: 'easy',
        prompt: 'JavaScript ban đầu được phát triển bởi lập trình viên nào và tại công ty nào vào năm 1995?',
        options: [
          { id: 'a', text: 'Brendan Eich tại Netscape' },
          { id: 'b', text: 'James Gosling tại Sun Microsystems' },
          { id: 'c', text: 'Tim Berners-Lee tại CERN' },
          { id: 'd', text: 'Guido van Rossum tại CWI' }
        ],
        correctAnswer: 'a',
        explanation: 'Brendan Eich đã tạo ra JavaScript (tên ban đầu là Mocha, sau đổi thành LiveScript, rồi JavaScript) trong 10 ngày tại Netscape vào tháng 5/1995.',
        relatedLessonId: 'les-1-1'
      },
      {
        id: 'q-1-1-2',
        lessonId: 'les-1-1',
        learningObjectiveId: 'LO1.1.2',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'JavaScript Engine nào đang vận hành trình duyệt Google Chrome và nền tảng Node.js?',
        options: [
          { id: 'a', text: 'SpiderMonkey' },
          { id: 'b', text: 'JavaScriptCore' },
          { id: 'c', text: 'V8 Engine' },
          { id: 'd', text: 'Chakra' }
        ],
        correctAnswer: 'c',
        explanation: 'V8 Engine viết bằng C++ được Google phát triển cho trình duyệt Chrome và sau đó Ryan Dahl dùng làm nền tảng cốt lõi của Node.js.',
        relatedLessonId: 'les-1-1'
      }
    ]
  },
  summary: [
    'JavaScript là ngôn ngữ kịch bản mạnh mẽ, tạo sự tương tác sinh động cho thế giới web.',
    'JavaScript chạy được cả trên trình duyệt Client-side (nhờ engine như V8, SpiderMonkey) và trên máy chủ Server-side (Node.js, Deno, Bun).',
    'Lệnh console.log() là phương thức cơ bản nhất để kiểm tra dữ liệu và luồng thực thi trong tab Console.'
  ],
  suggestedBookmarks: [
    'Bản chất JavaScript Engine (V8) và cơ chế JIT Compilation',
    'Sự khác biệt môi trường Browser (window/DOM) vs Node.js (global/fs)'
  ]
};

export const LESSON_1_2: Lesson = {
  id: 'les-1-2',
  moduleId: 'mod-1',
  track: 'javascript',
  language: 'javascript',
  title: '1.2 Cách nhúng JavaScript vào trang Web',
  order: 2,
  durationMinutes: 30,
  difficulty: 'Cơ bản',
  prerequisites: [
    'Biết cấu trúc file index.html',
    'Hiểu thẻ <script> và đường dẫn tương đối (relative path)'
  ],
  learningObjectives: [
    {
      id: 'LO1.2.1',
      code: 'LO1.2.1',
      title: '3 phương pháp nhúng JavaScript',
      description: 'Phân biệt và áp dụng: Inline script, Internal script (<script>) và External script (<script src="app.js">).',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    },
    {
      id: 'LO1.2.2',
      code: 'LO1.2.2',
      title: 'Cơ chế tải kịch bản: defer vs async',
      description: 'Hiểu sâu thuộc tính defer và async để tối ưu hóa hiệu năng render trang và ngăn chặn chặn luồng HTML Parser.',
      bloomLevel: 'Analyze',
      masteryPercentage: 85
    }
  ],
  sections: [
    {
      id: 'sec-1-2-1',
      lessonId: 'les-1-2',
      order: 1,
      conceptName: 'Ba phương thức nhúng JavaScript',
      title: '1. Internal vs External Script',
      explanation: 'Trong dự án thực tế, mã JavaScript có thể nhúng nội tuyến trực tiếp bằng thẻ `<script>...</script>` hoặc tách biệt hoàn toàn sang file rời đuôi `.js` với cú pháp `<script src="main.js"></script>`. Phương pháp External giúp tách bạch mã nguồn, dễ bảo trì và tận dụng cơ chế lưu bộ nhớ đệm (Browser Caching).',
      syntax: '<!-- File HTML nhúng file JS ngoài: -->\n<script src="js/main.js"></script>',
      codeExample: `// Nội dung file js/main.js
function khoiTaoUngDung() {
  console.log("Ứng dụng Web đã sẵn sàng tương tác!");
}

khoiTaoUngDung();`,
      lineByLineExplanation: [
        { line: 2, text: 'Định nghĩa hàm khởi tạo.' },
        { line: 6, text: 'Gọi hàm để kích hoạt câu lệnh in ra console.' }
      ],
      commonMistakes: [
        'Vừa dùng thuộc tính src vừa viết mã bên trong cặp thẻ: `<script src="app.js">console.log("hello");</script>` -> Đoạn mã bên trong thẻ sẽ BỊ BỎ QUA hoàn toàn!',
        'Quên thẻ đóng `</script>` làm trình duyệt không thể đóng thẻ dẫn đến trắng trang.'
      ],
      whenToUse: 'Luôn ưu tiên tách file `.js` độc lập trong 99% các dự án Web.',
      whenNotToUse: 'Chỉ dùng Internal script khi trang chỉ có 2-3 dòng code nhỏ dùng thử hoặc trang tĩnh đơn lẻ.',
      realWorldUseCase: 'Tách kiến trúc file: index.html cho layout, style.css cho giao diện, và script.js cho nghiệp vụ tương tác.'
    },
    {
      id: 'sec-1-2-2',
      lessonId: 'les-1-2',
      order: 2,
      conceptName: 'Tối ưu tải script: defer và async',
      title: '2. Làm chủ thuộc tính defer và async',
      explanation: 'Khi gặp thẻ `<script>` thông thường, trình duyệt sẽ dừng phân tích HTML (HTML parser blocking) để tải và chạy script. Để tránh tình trạng trang bị đơ hoặc lỗi không tìm thấy thẻ DOM, lập trình viên hiện đại dùng thuộc tính `defer` (tải song song trong nền và chỉ chạy khi HTML đã phân tích xong theo đúng thứ tự) hoặc `async` (tải song song và chạy ngay khi tải xong, độc lập thứ tự).',
      syntax: '<script src="app.js" defer></script>\n<script src="analytics.js" async></script>',
      codeExample: `// Giả lập thứ tự nạp kịch bản với defer
console.log("1. DOM đã sẵn sàng (DOMContentLoaded)");
console.log("2. Script defer bắt đầu thực thi an toàn!");`,
      lineByLineExplanation: [
        { line: 2, text: 'Nhờ có defer, script luôn chạy sau khi cây DOM đã được dựng xong hoàn chỉnh.' }
      ],
      commonMistakes: [
        'Dùng async cho các thư viện có phụ thuộc lẫn nhau (ví dụ: jQuery nạp sau mã plugin gây lỗi $ is not defined). Hãy dùng defer!'
      ],
      whenToUse: 'Dùng `defer` cho toàn bộ mã nguồn ứng dụng logic. Dùng `async` cho các script độc lập bên thứ ba như Google Analytics, Facebook Pixel.',
      whenNotToUse: 'Không dùng thẻ script thường đặt ở đầu `<head>` mà không có defer vì sẽ làm chậm tốc độ hiển thị trang (First Contentful Paint).',
      realWorldUseCase: 'Tối ưu điểm số Google Lighthouse Core Web Vitals cho website thương mại điện tử.'
    }
  ],
  predictOutputs: [
    {
      id: 'po-1-2-1',
      code: `console.log("Script 1");
console.log("Script 2");`,
      question: 'Thứ tự xuất hiện của 2 dòng trên màn hình Console là gì?',
      options: ['Script 1 sau đó Script 2', 'Script 2 sau đó Script 1', 'Đồng thời', 'Ngẫu nhiên'],
      correctAnswer: 'Script 1 sau đó Script 2',
      explanation: 'JavaScript là ngôn ngữ đơn luồng, các câu lệnh tuần tự được thực hiện từ trên xuống dưới.',
      hint: 'Luồng thực thi tuần tự trong JavaScript.'
    }
  ],
  interactivePractice: {
    id: 'ip-1-2',
    title: 'Thực hành: Mô phỏng kịch bản nạp deferred script',
    description: 'Viết đoạn mã mô phỏng sự kiện kiểm tra trạng thái document.readyState và in thông báo khi trang đã nạp hoàn chỉnh.',
    starterCode: `// Mô phỏng trạng thái tải trang
const readyState = "complete";
if (readyState === "complete") {
  console.log("DOM và Tài nguyên đã sẵn sàng!");
}`,
    expectedConsoleOutput: 'DOM và Tài nguyên đã sẵn sàng!',
    hint: 'Chạy thử đoạn mã để xác nhận luồng điều kiện.',
    language: 'javascript'
  },
  exercises: {
    basic: {
      id: 'ex-1-2-1',
      lessonId: 'les-1-2',
      title: 'Bài tập Cơ bản: Tạo mã thông báo sẵn sàng',
      difficulty: 'basic',
      learningObjectiveIds: ['LO1.2.1'],
      description: 'In ra thông báo: `[Hệ Thống] File logic.js đã nạp thành công!` bằng console.log().',
      starterCode: `// In thông báo nạp script:
`,
      solutionCode: `console.log("[Hệ Thống] File logic.js đã nạp thành công!");`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra in đúng thông báo nạp file',
          expectedOutput: '[Hệ Thống] File logic.js đã nạp thành công!'
        }
      ],
      hints: ['Dùng console.log với chuỗi yêu cầu'],
      explanation: 'Thông báo xác nhận file ngoài đã nạp thành công vào trình duyệt.'
    },
    intermediate: {
      id: 'ex-1-2-2',
      lessonId: 'les-1-2',
      title: 'Bài tập Trung bình: Trình xác định chiến lược nhúng Script',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO1.2.2'],
      description: 'Viết hàm getScriptStrategy(scriptType). Nếu scriptType là "analytics" trả về "Dùng async", nếu là "app_logic" trả về "Dùng defer", còn lại trả về "Dùng script thường". Chạy thử với "app_logic".',
      starterCode: `function getScriptStrategy(scriptType) {
  // Viết điều kiện:
  
}

console.log(getScriptStrategy("app_logic"));`,
      solutionCode: `function getScriptStrategy(scriptType) {
  if (scriptType === "analytics") {
    return "Dùng async";
  } else if (scriptType === "app_logic") {
    return "Dùng defer";
  }
  return "Dùng script thường";
}

console.log(getScriptStrategy("app_logic"));`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra chiến lược cho app_logic',
          expectedOutput: 'Dùng defer'
        }
      ],
      hints: ['Dùng if/else so sánh chuỗi scriptType'],
      explanation: 'Mã logic nghiệp vụ của app luôn cần defer để chờ DOM sẵn sàng.'
    },
    challenge: {
      id: 'ex-1-2-3',
      lessonId: 'les-1-2',
      title: 'Bài tập Thử thách: Kiểm tra thẻ script hợp lệ',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO1.2.1', 'LO1.2.2'],
      description: 'Cho mảng danh sách tên file kịch bản: `["jquery.min.js", "app.js", "tracking.js"]`. Duyệt qua mảng và in ra thẻ HTML hoàn chỉnh có kèm thuộc tính `defer` cho mỗi file dạng `<script src="[ten_file]" defer></script>`.',
      starterCode: `const scripts = ["jquery.min.js", "app.js", "tracking.js"];

// Duyệt và in thẻ script hoàn chỉnh:
`,
      solutionCode: `const scripts = ["jquery.min.js", "app.js", "tracking.js"];
for (let i = 0; i < scripts.length; i++) {
  console.log(\`<script src="\${scripts[i]}" defer></script>\`);
}`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra sinh ra 3 thẻ script với defer',
          expectedOutput: '<script src="jquery.min.js" defer></script>\n<script src="app.js" defer></script>\n<script src="tracking.js" defer></script>'
        }
      ],
      hints: ['Dùng vòng lặp for hoặc forEach và Template literals'],
      explanation: 'Tự động hóa việc tạo thẻ kịch bản chuẩn SEO với thuộc tính defer tối ưu tải.'
    }
  },
  quiz: {
    id: 'quiz-1-2',
    lessonId: 'les-1-2',
    title: 'Trắc nghiệm: Kỹ thuật nhúng JavaScript',
    passingScore: 70,
    questions: [
      {
        id: 'q-1-2-1',
        lessonId: 'les-1-2',
        learningObjectiveId: 'LO1.2.2',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'Thuộc tính nào của thẻ <script> giúp tải file song song trong nền và đảm bảo file thực thi đúng theo thứ tự xuất hiện trong HTML sau khi phân tích xong tài liệu?',
        options: [
          { id: 'a', text: 'async' },
          { id: 'b', text: 'defer' },
          { id: 'c', text: 'preload' },
          { id: 'd', text: 'lazy' }
        ],
        correctAnswer: 'b',
        explanation: 'Thuộc tính defer vừa tải bất đồng bộ không chặn luồng HTML, vừa giữ đúng thứ tự thực thi của các file script theo thứ tự khai báo trong HTML.',
        relatedLessonId: 'les-1-2'
      }
    ]
  },
  summary: [
    'Ưu tiên sử dụng file JS ngoài (<script src="...") để tái sử dụng mã nguồn và tận dụng bộ nhớ đệm.',
    'Thuộc tính defer là tiêu chuẩn vàng để nhúng mã JavaScript ứng dụng trong thẻ <head>.',
    'Thuộc tính async phù hợp cho các script độc lập không phụ thuộc thứ tự như công cụ theo dõi, phân tích dữ liệu.'
  ],
  suggestedBookmarks: [
    'So sánh trực quan: Regular Script vs Async Script vs Defer Script',
    'Quy tắc Browser Caching đối với External JavaScript files'
  ]
};

export const LESSON_1_3: Lesson = {
  id: 'les-1-3',
  moduleId: 'mod-1',
  track: 'javascript',
  language: 'javascript',
  title: '1.3 Làm chủ DevTools Console & Câu lệnh đầu tiên',
  order: 3,
  durationMinutes: 45,
  difficulty: 'Cơ bản',
  prerequisites: [
    'Biết cách mở trình duyệt Google Chrome hoặc Firefox',
    'Biết phím tắt mở DevTools: F12 hoặc Ctrl+Shift+I (Cmd+Option+I trên macOS)',
    'Hiểu khái niệm JavaScript là ngôn ngữ kịch bản chạy phía Client'
  ],
  learningObjectives: [
    {
      id: 'LO1.3.1',
      code: 'LO1.3.1',
      title: 'Khai thác các phương thức Console cơ bản',
      description: 'Sử dụng thành thạo console.log(), console.warn(), console.error() để debug mã nguồn.',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    },
    {
      id: 'LO1.3.2',
      code: 'LO1.3.2',
      title: 'Trực quan hóa dữ liệu bảng với console.table',
      description: 'Hiển thị dữ liệu mảng hoặc object phức tạp dưới dạng bảng trực quan trong tab Console.',
      bloomLevel: 'Apply',
      masteryPercentage: 88
    },
    {
      id: 'LO1.3.3',
      code: 'LO1.3.3',
      title: 'Đo lường thời gian thực thi bằng console.time',
      description: 'Đo thời gian chạy của một đoạn mã để tối ưu hóa hiệu năng giải thuật.',
      bloomLevel: 'Analyze',
      masteryPercentage: 80
    }
  ],
  sections: [
    {
      id: 'sec-1-3-1',
      lessonId: 'les-1-3',
      order: 1,
      conceptName: 'Bộ công cụ DevTools Console và API in thông điệp',
      title: '1. Phân biệt console.log, console.warn và console.error',
      explanation: 'Console là môi trường REPL (Read-Eval-Print Loop) mạnh mẽ nhất giúp lập trình viên giao tiếp tức thì với JavaScript Engine. Thay vì chỉ dùng console.log() đơn điệu, các kỹ sư chuyên nghiệp phân loại thông điệp theo mức độ nghiêm trọng để lọc tìm lỗi nhanh chóng.',
      syntax: 'console.log(thongDiep, giaTri1, giaTri2);\nconsole.warn(canhBaoLuuY);\nconsole.error(thongBaoLoiNghiemTrong);',
      codeExample: `// Ghi nhận thông tin thông thường
console.log("Hệ thống khởi động thành công!");

// Cảnh báo người dùng (hiện nền vàng trên DevTools)
console.warn("Dung lượng bộ nhớ tạm sắp đầy (85%)");

// Thông báo lỗi (hiện nền đỏ và kèm Call Stack)
console.error("Không thể kết nối đến máy chủ cơ sở dữ liệu!");`,
      lineByLineExplanation: [
        { line: 2, text: 'console.log in thông điệp chuẩn ra luồng stdout của tab Console.' },
        { line: 5, text: 'console.warn đánh dấu cảnh báo màu vàng, thường dùng cho deprecation warning.' },
        { line: 8, text: 'console.error đánh dấu lỗi nghiêm trọng màu đỏ, tự động kèm stack trace để biết lỗi ở dòng nào.' }
      ],
      commonMistakes: [
        'Để quên hàng trăm lệnh console.log trong mã nguồn đưa lên production, làm chậm ứng dụng.',
        'Nhầm lẫn giữa console.error (chỉ in chữ màu đỏ) và throw new Error (thực sự dừng luồng chạy chương trình).'
      ],
      whenToUse: 'Dùng trong quá trình phát triển để kiểm tra giá trị biến, luồng rẽ nhánh và thời điểm kích hoạt sự kiện.',
      whenNotToUse: 'Không dùng console.log để hiển thị thông báo cho người dùng cuối (hãy render ra giao diện HTML).',
      realWorldUseCase: 'Theo dõi payload nhận về từ Backend API trước khi render danh sách sinh viên lên bảng điểm.'
    },
    {
      id: 'sec-1-3-2',
      lessonId: 'les-1-3',
      order: 2,
      conceptName: 'Console nâng cao: console.table & console.time',
      title: '2. Hiển thị bảng dữ liệu với console.table() và đo thời gian',
      explanation: 'Khi làm việc với danh sách đối tượng (Array of Objects), lệnh console.log() thông thường chỉ in ra cây nút thu gọn rất khó đối soát. Lệnh console.table() biến dữ liệu thành bảng có cột và hàng rõ ràng. Ngoài ra console.time() giúp đo chính xác thời gian thực thi mã tính bằng mili-giây.',
      syntax: 'console.table(danhSachDoiTuong);\nconsole.time("nhanDoiThoiGian");\n// code can do...\nconsole.timeEnd("nhanDoiThoiGian");',
      codeExample: `const sinhVien = [
  { maSV: "PS25101", hoTen: "Nguyễn Văn An", diem: 8.5 },
  { maSV: "PS25102", hoTen: "Trần Bích Ngọc", diem: 9.0 }
];

console.table(sinhVien);

console.time("DoThoiGianChay");
let sum = 0;
for (let i = 0; i < 100000; i++) {
  sum += i;
}
console.timeEnd("DoThoiGianChay");`,
      lineByLineExplanation: [
        { line: 6, text: 'console.table tự động trích xuất các key của object làm tiêu đề cột của bảng.' },
        { line: 8, text: 'Bắt đầu bấm giờ đo với định danh "DoThoiGianChay".' },
        { line: 13, text: 'Dừng bấm giờ và in ra số ms đã trôi qua kể từ khi gọi console.time cùng nhãn.' }
      ],
      commonMistakes: [
        'Tên nhãn trong console.time() và console.timeEnd() không trùng khớp, dẫn đến cảnh báo Timer does not exist.'
      ],
      whenToUse: 'Dùng console.table khi kiểm tra mảng sản phẩm, giỏ hàng, bảng điểm sinh viên. Dùng console.time khi tối ưu thuật toán.',
      whenNotToUse: 'Không gọi console.time trong các hàm được lặp hàng triệu lần vì chi phí ghi nhật ký làm chậm vòng lặp.',
      realWorldUseCase: 'Đo lường thời gian lọc danh sách 10.000 sản phẩm theo danh mục và giá tiền.'
    }
  ],
  predictOutputs: [
    {
      id: 'po-1-3-1',
      code: `console.log(1 + "2" + 3);`,
      question: 'Đoạn mã in ra giá trị gì trên Console?',
      options: ['"6"', '"123"', '6', 'TypeError'],
      correctAnswer: '"123"',
      explanation: 'Khi gặp toán tử cộng với chuỗi "2", số 1 bị ép kiểu thành chuỗi "1", cho ra "12". Tiếp tục "12" + 3 tạo thành chuỗi "123".',
      hint: 'Toán tử + thực hiện từ trái sang phải và ưu tiên nối chuỗi khi có ít nhất một toán hạng là String.'
    },
    {
      id: 'po-1-3-2',
      code: `console.log(typeof NaN);`,
      question: 'Kết quả in ra của typeof NaN là gì?',
      options: ['"NaN"', '"undefined"', '"number"', '"object"'],
      correctAnswer: '"number"',
      explanation: 'NaN viết tắt của "Not-a-Number", nhưng trong chuẩn IEEE 754 của JavaScript, nó vẫn thuộc kiểu dữ liệu Number biểu thị một kết quả tính toán số học không hợp lệ.',
      hint: 'Mặc dù mang nghĩa "Không phải số", NaN về mặt kỹ thuật vẫn là một giá trị số đặc biệt.'
    }
  ],
  interactivePractice: {
    id: 'ip-1-3',
    title: 'Thực hành DevTools: In bảng danh sách điểm danh lớp học',
    description: 'Tạo một mảng sinh viên gồm ít nhất 2 đối tượng có thuộc tính hoTen và trangThai. Sau đó dùng console.table để in ra bảng.',
    starterCode: `// Viết code in bảng sinh viên điểm danh tại đây:
const lopHoc = [
  { hoTen: "Nguyễn Văn An", trangThai: "Có mặt" },
  { hoTen: "Trần Bích Ngọc", trangThai: "Vắng có phép" }
];

console.table(lopHoc);
console.log("Tổng số sinh viên điểm danh:", lopHoc.length);`,
    expectedConsoleOutput: 'Tổng số sinh viên điểm danh: 2',
    hint: 'Sử dụng console.table(lopHoc) để xem bảng trực quan, sau đó console.log độ dài mảng.'
  },
  exercises: {
    basic: {
      id: 'ex-1-3-1',
      lessonId: 'les-1-3',
      title: 'Bài tập Cơ bản: In thẻ thông tin sinh viên chuẩn DevTools',
      difficulty: 'basic',
      learningObjectiveIds: ['LO1.3.1'],
      description: 'Khai báo hai biến const name = "Lê Văn Hùng" và const studentId = "PS25999". In ra chuỗi định dạng chính xác: `Sinh viên: Lê Văn Hùng - Mã: PS25999` bằng console.log().',
      starterCode: `// Khai báo biến và in thông tin
const name = "Lê Văn Hùng";
const studentId = "PS25999";

// In kết quả bằng console.log:
`,
      solutionCode: `const name = "Lê Văn Hùng";
const studentId = "PS25999";
console.log(\`Sinh viên: \${name} - Mã: \${studentId}\`);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra in đúng chuỗi thẻ sinh viên',
          expectedOutput: 'Sinh viên: Lê Văn Hùng - Mã: PS25999'
        }
      ],
      hints: ['Sử dụng Template Literals với dấu backtick ` ` và cú pháp ${name}'],
      explanation: 'Sử dụng console.log với chuỗi nội suy giúp mã nguồn gọn gàng hơn nhiều so với việc cộng chuỗi bằng dấu +.'
    },
    intermediate: {
      id: 'ex-1-3-2',
      lessonId: 'les-1-3',
      title: 'Bài tập Trung bình: Kiểm tra điều kiện và in cảnh báo phân loại',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO1.3.1'],
      description: 'Cho biến score = 4.0. Nếu score < 5.0, in ra bằng console.warn chuỗi `Cảnh báo: Sinh viên phải thi lại!`. Ngược lại in bằng console.log chuỗi `Chúc mừng: Sinh viên đã qua môn!`.',
      starterCode: `const score = 4.0;

// Viết cấu trúc điều khiển và in thông báo:
`,
      solutionCode: `const score = 4.0;
if (score < 5.0) {
  console.warn("Cảnh báo: Sinh viên phải thi lại!");
} else {
  console.log("Chúc mừng: Sinh viên đã qua môn!");
}`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra in cảnh báo khi điểm dưới 5.0',
          expectedOutput: 'Cảnh báo: Sinh viên phải thi lại!'
        }
      ],
      hints: ['Dùng if (score < 5.0) console.warn(...)'],
      explanation: 'console.warn được thiết kế chuyên biệt để ghi nhận các trường hợp rủi ro hoặc điều kiện cảnh báo trong nghiệp vụ.'
    },
    challenge: {
      id: 'ex-1-3-3',
      lessonId: 'les-1-3',
      title: 'Bài tập Thử thách: Đo lường tốc độ lặp và in tổng tích lũy',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO1.3.3'],
      description: 'Dùng vòng lặp for tính tổng các số chẵn từ 2 đến 1000. In ra kết quả theo định dạng: `Tổng số chẵn: [kết quả]`.',
      starterCode: `let tongChan = 0;

// Viết vòng lặp tính tổng:

console.log("Tổng số chẵn:", tongChan);`,
      solutionCode: `let tongChan = 0;
for (let i = 2; i <= 1000; i += 2) {
  tongChan += i;
}
console.log("Tổng số chẵn:", tongChan);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra tổng các số chẵn từ 2 đến 1000',
          expectedOutput: 'Tổng số chẵn: 250500'
        }
      ],
      hints: ['Bước nhảy i += 2 bắt đầu từ i = 2 đến 1000', 'Giá trị mong đợi: 250500'],
      explanation: 'Vòng lặp với bước nhảy 2 giảm một nửa số chu kỳ lặp so với việc kiểm tra điều kiện i % 2 === 0 ở mỗi vòng lặp.'
    }
  },
  quiz: {
    id: 'quiz-1-3',
    lessonId: 'les-1-3',
    title: 'Trắc nghiệm đánh giá năng lực: Làm chủ DevTools Console',
    passingScore: 70,
    questions: [
      {
        id: 'q-1-3-1',
        lessonId: 'les-1-3',
        learningObjectiveId: 'LO1.3.1',
        type: 'multiple_choice',
        difficulty: 'easy',
        prompt: 'Lệnh nào sau đây dùng để hiển thị dữ liệu mảng hoặc đối tượng dưới dạng bảng kẻ ô trong Console?',
        options: [
          { id: 'a', text: 'console.grid(data)' },
          { id: 'b', text: 'console.table(data)' },
          { id: 'c', text: 'console.view(data)' },
          { id: 'd', text: 'console.chart(data)' }
        ],
        correctAnswer: 'b',
        explanation: 'console.table() là phương thức chuẩn của trình duyệt hỗ trợ trực quan hóa mảng hoặc đối tượng dạng bảng tabular.',
        relatedLessonId: 'les-1-3'
      },
      {
        id: 'q-1-3-2',
        lessonId: 'les-1-3',
        learningObjectiveId: 'LO1.3.3',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'Cặp lệnh nào dùng để đo chính xác thời gian chạy của một đoạn mã trong JavaScript?',
        options: [
          { id: 'a', text: 'console.start() và console.stop()' },
          { id: 'b', text: 'console.benchmark() và console.result()' },
          { id: 'c', text: 'console.time() và console.timeEnd()' },
          { id: 'd', text: 'console.clock() và console.tick()' }
        ],
        correctAnswer: 'c',
        explanation: 'console.time("label") khởi động đồng hồ bấm giờ và console.timeEnd("label") dừng và in số mili-giây.',
        relatedLessonId: 'les-1-3'
      }
    ]
  },
  summary: [
    'Console là công cụ REPL mạnh mẽ hàng đầu của lập trình viên để kiểm tra trạng thái phần mềm.',
    'Phân tách rõ ràng: console.log (thông tin), console.warn (cảnh báo vàng), console.error (lỗi đỏ).',
    'Tận dụng console.table() cho danh sách dữ liệu và console.time() khi cần đo đạc hiệu năng.'
  ],
  suggestedBookmarks: [
    'Phương thức console.table() hiển thị mảng đối tượng',
    'Đo lường thời gian thực thi với console.time() và console.timeEnd()'
  ]
};

export const LESSON_1_4: Lesson = {
  id: 'les-1-4',
  moduleId: 'mod-1',
  track: 'javascript',
  language: 'javascript',
  title: '1.4 Comment chuẩn & Kỹ năng Debug lỗi cú pháp cơ bản',
  order: 4,
  durationMinutes: 45,
  difficulty: 'Cơ bản',
  prerequisites: [
    'Đã làm quen với tab Console trong DevTools',
    'Biết cách viết và chạy một câu lệnh JS đơn giản'
  ],
  learningObjectives: [
    {
      id: 'LO1.4.1',
      code: 'LO1.4.1',
      title: 'Quy chuẩn chú thích mã nguồn (Comments)',
      description: 'Sử dụng đúng Single-line comment (//), Multi-line comment (/* */) và chú thích JSDoc chuẩn doanh nghiệp.',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    },
    {
      id: 'LO1.4.2',
      code: 'LO1.4.2',
      title: 'Phân loại các lỗi JavaScript phổ biến',
      description: 'Nhận diện nhanh 3 loại lỗi kinh điển: SyntaxError, ReferenceError và TypeError qua thông báo Console.',
      bloomLevel: 'Analyze',
      masteryPercentage: 86
    }
  ],
  sections: [
    {
      id: 'sec-1-4-1',
      lessonId: 'les-1-4',
      order: 1,
      conceptName: 'Chú thích trong JavaScript (Comments)',
      title: '1. Nghệ thuật viết Comment sạch và chuẩn JSDoc',
      explanation: 'Comment giúp giải thích lý do tại sao (Why) một đoạn mã được viết như vậy, thay vì chỉ mô tả lại những gì code đang làm (What). Chuẩn JSDoc giúp các trình biên tập mã như VS Code tự động gợi ý kiểu dữ liệu và mô tả hàm trực quan.',
      syntax: '// Chú thích 1 dòng\n/* Chú thích\nnhiều dòng */\n/**\n * Chú thích JSDoc\n * @param {number} a\n */',
      codeExample: `// 1. Chú thích một dòng giải thích mục đích
const TAX_PERCENT = 0.1; // Thuế VAT hiện hành 10%

/**
 * Tính tổng số tiền có bao gồm thuế giá trị gia tăng
 * @param {number} price - Giá gốc của sản phẩm
 * @returns {number} Tổng tiền sau thuế
 */
function tinhTongTien(price) {
  return price + (price * TAX_PERCENT);
}

console.log("Tổng tiền 100k sau thuế:", tinhTongTien(100000));`,
      lineByLineExplanation: [
        { line: 2, text: 'Single-line comment giải thích ý nghĩa hằng số TAX_PERCENT.' },
        { line: 4, text: 'Khối JSDoc bắt đầu bằng /** định nghĩa rõ ràng tham số và giá trị trả về của hàm.' }
      ],
      commonMistakes: [
        'Viết comment hiển nhiên thừa thãi: `let x = 5; // Gán x bằng 5`.',
        'Để lại các đoạn code rác đã bị comment mà không xóa khi đưa sản phẩm lên production.'
      ],
      whenToUse: 'Dùng khi giải thích thuật toán phức tạp, công thức nghiệp vụ kinh doanh hoặc đánh dấu TODO cần hoàn thiện.',
      whenNotToUse: 'Không dùng comment để bù đắp cho việc đặt tên biến/hàm cẩu thả. Hãy viết code tự giải thích (Self-documenting code).',
      realWorldUseCase: 'Tài liệu hóa các hàm dùng chung (Utilities) trong dự án nhóm để đồng nghiệp dễ dàng tái sử dụng.'
    },
    {
      id: 'sec-1-4-2',
      lessonId: 'les-1-4',
      order: 2,
      conceptName: 'Phân loại và đọc hiểu thông báo lỗi',
      title: '2. Đọc vị 3 lỗi kinh điển: SyntaxError, ReferenceError, TypeError',
      explanation: 'Gặp lỗi trong lập trình là điều tất yếu. Thay vì hoảng sợ, lập trình viên giỏi đọc kỹ tên lỗi và số dòng để sửa ngay: (1) SyntaxError: Viết sai ngữ pháp (thiếu ngoặc, sai từ khóa); (2) ReferenceError: Gọi biến hoặc hàm chưa hề tồn tại; (3) TypeError: Thao tác sai kiểu dữ liệu (gán lại const, gọi hàm trên giá trị null/undefined).',
      syntax: 'SyntaxError: Sai cú pháp\nReferenceError: Biến không tồn tại\nTypeError: Sai kiểu giá trị',
      codeExample: `// Thử nghiệm bắt lỗi an toàn bằng try...catch
try {
  // Cố tình gọi một biến chưa khai báo
  console.log(chuaKhaiBao);
} catch (error) {
  console.log("Bắt được lỗi:", error.name); // Sẽ in ra: ReferenceError
  console.log("Chi tiết:", error.message);
}`,
      lineByLineExplanation: [
        { line: 4, text: 'Biến chuaKhaiBao chưa từng được khai báo nên engine ném lỗi ReferenceError.' },
        { line: 6, text: 'error.name trích xuất chính xác chủng loại lỗi xảy ra.' }
      ],
      commonMistakes: [
        'Nhìn thấy chữ đỏ trong Console liền bỏ qua mà không đọc số dòng (file.js: dòng:cột) nơi phát sinh lỗi.'
      ],
      whenToUse: 'Dùng kiến thức này để định vị vị trí lỗi ngay trong 5 giây đầu tiên khi phát sinh bug.',
      whenNotToUse: 'Không bọc toàn bộ mã nguồn trong try/catch mà không xử lý gì (nuốt lỗi - swallowed error).',
      realWorldUseCase: 'Khắc phục lỗi "Cannot read properties of undefined" - lỗi phổ biến nhất trong hệ thống Web Frontend.'
    }
  ],
  predictOutputs: [
    {
      id: 'po-1-4-1',
      code: `let x = 10;
// x = 20;
/* x = 30; */
console.log(x);`,
      question: 'Giá trị in ra của biến x là bao nhiêu?',
      options: ['10', '20', '30', 'undefined'],
      correctAnswer: '10',
      explanation: 'Các dòng gán x = 20 và x = 30 đều nằm trong comment nên trình thông dịch JavaScript bỏ qua không thực hiện.',
      hint: 'Mã trong comment không hề được thực thi.'
    }
  ],
  interactivePractice: {
    id: 'ip-1-4',
    title: 'Thực hành: Sửa lỗi cú pháp sai chính tả',
    description: 'Đoạn mã sau đang bị lỗi do gọi sai hàm console.og. Hãy sửa lại thành console.log chuẩn và chạy thử.',
    starterCode: `// Sửa lỗi ở dòng dưới:
console.log("Đã sửa lỗi thành công!");
console.log("Chương trình chạy mượt mà!");`,
    expectedConsoleOutput: 'Đã sửa lỗi thành công!\nChương trình chạy mượt mà!',
    hint: 'Đảm bảo đúng cú pháp console.log với chữ l.',
    language: 'javascript'
  },
  exercises: {
    basic: {
      id: 'ex-1-4-1',
      lessonId: 'les-1-4',
      title: 'Bài tập Cơ bản: Viết chú thích chuẩn cho hàm tính diện tích',
      difficulty: 'basic',
      learningObjectiveIds: ['LO1.4.1'],
      description: 'Cho hàm tinhDienTich(w, h). Viết comment 1 dòng bên trong giải thích: `// Tính diện tích hình chữ nhật: dài nhân rộng`. Sau đó in ra kết quả của tinhDienTich(5, 8).',
      starterCode: `function tinhDienTich(w, h) {
  // Thêm comment ở đây:
  return w * h;
}

console.log("Diện tích:", tinhDienTich(5, 8));`,
      solutionCode: `function tinhDienTich(w, h) {
  // Tính diện tích hình chữ nhật: dài nhân rộng
  return w * h;
}

console.log("Diện tích:", tinhDienTich(5, 8));`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra tính đúng diện tích 40',
          expectedOutput: 'Diện tích: 40'
        }
      ],
      hints: ['Viết // Tính diện tích hình chữ nhật: dài nhân rộng'],
      explanation: 'Comment giúp người đọc hiểu ngay công thức toán học được cài đặt.'
    },
    intermediate: {
      id: 'ex-1-4-2',
      lessonId: 'les-1-4',
      title: 'Bài tập Trung bình: Xử lý an toàn khi biến không tồn tại',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO1.4.2'],
      description: 'Viết khối try/catch: trong try cố gắng in ra biến `tenNguoiDung`. Trong catch in ra: `Đã phát hiện lỗi: Biến chưa được định nghĩa`.',
      starterCode: `// Viết khối try/catch tại đây:
`,
      solutionCode: `try {
  console.log(tenNguoiDung);
} catch (err) {
  console.log("Đã phát hiện lỗi: Biến chưa được định nghĩa");
}`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Bắt lỗi ReferenceError thành công',
          expectedOutput: 'Đã phát hiện lỗi: Biến chưa được định nghĩa'
        }
      ],
      hints: ['Dùng try { console.log(tenNguoiDung); } catch (err) { ... }'],
      explanation: 'try/catch ngăn chương trình bị sập khi gặp lỗi tham chiếu không tồn tại.'
    },
    challenge: {
      id: 'ex-1-4-3',
      lessonId: 'les-1-4',
      title: 'Bài tập Thử thách: Kiểm toán và phân loại lỗi',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO1.4.2'],
      description: 'Tạo hàm classifyError(errorCode). Nếu errorCode là "SYNTAX" in ra `Lỗi cú pháp viết sai`, nếu là "TYPE" in ra `Lỗi sai kiểu dữ liệu`, nếu là "REF" in ra `Lỗi gọi biến không tồn tại`. Chạy thử với classifyError("TYPE").',
      starterCode: `function classifyError(errorCode) {
  // Viết điều kiện phân loại lỗi:
  
}

classifyError("TYPE");`,
      solutionCode: `function classifyError(errorCode) {
  if (errorCode === "SYNTAX") {
    console.log("Lỗi cú pháp viết sai");
  } else if (errorCode === "TYPE") {
    console.log("Lỗi sai kiểu dữ liệu");
  } else if (errorCode === "REF") {
    console.log("Lỗi gọi biến không tồn tại");
  }
}

classifyError("TYPE");`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Phân loại chính xác TypeError',
          expectedOutput: 'Lỗi sai kiểu dữ liệu'
        }
      ],
      hints: ['Dùng if/else if kiểm tra chuỗi errorCode'],
      explanation: 'Phân loại lỗi chính xác là bước then chốt trong quy trình bảo trì phần mềm chuyên nghiệp.'
    }
  },
  quiz: {
    id: 'quiz-1-4',
    lessonId: 'les-1-4',
    title: 'Trắc nghiệm: Kỹ năng Comment & Debug',
    passingScore: 70,
    questions: [
      {
        id: 'q-1-4-1',
        lessonId: 'les-1-4',
        learningObjectiveId: 'LO1.4.2',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'Khi bạn cố tình gán lại giá trị cho một biến được khai báo bằng từ khóa const (ví dụ: const PI = 3.14; PI = 3.15;), loại lỗi nào sẽ được ném ra?',
        options: [
          { id: 'a', text: 'SyntaxError' },
          { id: 'b', text: 'TypeError' },
          { id: 'c', text: 'ReferenceError' },
          { id: 'd', text: 'RangeError' }
        ],
        correctAnswer: 'b',
        explanation: 'JavaScript sẽ ném lỗi "TypeError: Assignment to constant variable" vì bạn đang vi phạm quy tắc kiểu dữ liệu bất biến của hằng số const.',
        relatedLessonId: 'les-1-4'
      }
    ]
  },
  summary: [
    'Comment phục vụ việc giải thích ngữ cảnh và lý do (Why) thay vì lặp lại cú pháp hiển nhiên.',
    'Sử dụng JSDoc để định nghĩa chuẩn xác tham số đầu vào và kiểu dữ liệu trả về của hàm.',
    'Nắm chắc 3 loại lỗi cơ bản: SyntaxError, ReferenceError, TypeError để định vị lỗi tức thì.'
  ],
  suggestedBookmarks: [
    'Quy chuẩn viết JSDoc cho hàm và module trong dự án',
    'Bảng đối soát các lỗi JavaScript Runtime thường gặp và cách khắc phục'
  ]
};

export const JS_MODULE_1_LESSONS: Lesson[] = [
  LESSON_1_1,
  LESSON_1_2,
  LESSON_1_3,
  LESSON_1_4
];
