import { Lesson } from '../../types';

// ==========================================
// MODULE 10: DOM (DOCUMENT OBJECT MODEL)
// ==========================================

export const LESSON_10_1: Lesson = {
  id: 'les-10-1',
  moduleId: 'mod-10',
  track: 'javascript',
  language: 'javascript',
  title: '10.1 Khái niệm cây DOM & Cấu trúc Node',
  order: 1,
  durationMinutes: 40,
  difficulty: 'Cơ bản',
  prerequisites: ['Hiểu cấu trúc thẻ HTML cơ bản', 'Biết cách liên kết JS với HTML'],
  learningObjectives: [
    {
      id: 'LO10.1.1',
      code: 'LO10.1.1',
      title: 'Hiểu bản chất cây DOM Tree và đối tượng document',
      description: 'Nhận diện các loại node: Element Node, Text Node, Attribute Node.',
      bloomLevel: 'Understand',
      masteryPercentage: 92
    },
    {
      id: 'LO10.1.2',
      code: 'LO10.1.2',
      title: 'Mối quan hệ cha - con - anh em (Parent, Child, Sibling)',
      description: 'Điều hướng qua các thuộc tính parentElement, children, nextElementSibling.',
      bloomLevel: 'Understand',
      masteryPercentage: 88
    }
  ],
  sections: [
    {
      id: 'sec-10-1-1',
      lessonId: 'les-10-1',
      order: 1,
      conceptName: 'Bản chất cây DOM (Document Object Model)',
      title: '1. Cây DOM: Cầu nối giữa HTML và JavaScript',
      explanation: 'DOM (Document Object Model) là giao diện lập trình (API) biến toàn bộ trang tài liệu HTML thành một CÂY PHÂN CẤP CÁC ĐỐI TƯỢNG (DOM Tree). Gốc của cây là đối tượng toàn cục `document`. Thông qua DOM, JavaScript có thể truy cập, thêm, xóa, sửa bất kỳ thẻ HTML hoặc kiểu dáng CSS nào trên trang.',
      syntax: 'console.log(document.title);\nconsole.log(document.body);',
      codeExample: `// Kiểm tra thông tin tài liệu HTML qua DOM
console.log("Tiêu đề trang:", document.title);
console.log("URL hiện tại:", document.URL);
console.log("Thẻ Body có tồn tại?", document.body !== null);`,
      lineByLineExplanation: [
        { line: 2, text: 'document.title đọc nội dung của thẻ <title> trong <head>.' },
        { line: 4, text: 'document.body đại diện cho toàn bộ phần tử <body> của trang.' }
      ],
      commonMistakes: [
        'Chạy script can thiệp DOM trong thẻ <head> trước khi trình duyệt tải xong thẻ <body> dẫn đến document.body là null.'
      ],
      whenToUse: 'Dùng khi muốn trang web có tính tương tác động (hiển thị dữ liệu từ API, mở popup, chuyển tab).',
      whenNotToUse: 'Không can thiệp DOM trực tiếp nếu đang dùng các Framework quản lý Virtual DOM như React/Vue.',
      realWorldUseCase: 'Thay đổi tiêu đề trang web động khi có tin nhắn mới: `document.title = "(1) Tin nhắn mới...";`'
    },
    {
      id: 'sec-10-1-2',
      lessonId: 'les-10-1',
      order: 2,
      conceptName: 'Cấu trúc các Node và quan hệ gia phả',
      title: '2. Quan hệ Cha - Con - Anh em trong DOM',
      explanation: 'Mỗi phần tử trong DOM có mối quan hệ: `parentElement` (phần tử cha), `children` (danh sách các phần tử con), `nextElementSibling` (phần tử anh em liền kề sau), `previousElementSibling` (phần tử anh em liền kề trước).',
      syntax: 'el.parentElement;\nel.children[0];\nel.nextElementSibling;',
      codeExample: `// Minh họa cấu trúc phân cấp DOM
const demo = {
  tag: "ul",
  childrenCount: 3,
  firstChildTag: "li"
};

console.log("Cấu trúc node danh sách:", demo);`,
      lineByLineExplanation: [
        { line: 2, text: 'Thẻ <ul> là cha của các thẻ <li> con.' }
      ],
      commonMistakes: [
        'Dùng childNodes thay vì children (childNodes bao gồm cả các Text Node khoảng trắng xuống dòng).'
      ],
      whenToUse: 'Dùng khi cần tìm phần tử cha (ví dụ: click nút Xóa thì tìm đến dòng <tr> cha để xóa).',
      whenNotToUse: 'Tránh liên kết dây chuyền quá sâu (el.parentElement.parentElement.parentElement) dễ gãy khi sửa HTML.',
      realWorldUseCase: 'Khi người dùng click nút "Xóa sản phẩm", tìm phần tử cha `.cart-item` gần nhất để gỡ bỏ.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-10-1',
    title: 'Thực hành đọc thuộc tính tiêu đề tài liệu',
    description: 'Đọc và in tiêu đề tài liệu document.title ra console.',
    starterCode: `const title = document.title;
console.log("Tiêu đề trang:", title);`,
    expectedConsoleOutput: 'Tiêu đề trang: JS Master - Nền tảng Đào tạo Lập trình JavaScript Chuẩn Doanh nghiệp',
    hint: 'document.title chứa chuỗi tiêu đề trang.'
  },
  exercises: {
    basic: {
      id: 'ex-10-1-1',
      lessonId: 'les-10-1',
      title: 'Bài tập Cơ bản: Kiểm tra trạng thái tải của DOM',
      difficulty: 'basic',
      learningObjectiveIds: ['LO10.1.1'],
      description: 'Kiểm tra thuộc tính document.readyState. In ra: "Trạng thái trang: [readyState]".',
      starterCode: `const state = document.readyState;
console.log("Trạng thái trang:", state);`,
      solutionCode: `const state = document.readyState;
console.log("Trạng thái trang:", state);`,
      testCases: [
        { id: 'tc-1', description: 'Trạng thái complete', expectedOutput: 'Trạng thái trang: complete' }
      ],
      hints: ['document.readyState'],
      explanation: 'document.readyState cho biết trang đã tải xong (complete) hay đang tải (loading).'
    },
    intermediate: {
      id: 'ex-10-1-2',
      lessonId: 'les-10-1',
      title: 'Bài tập Trung bình: Viết mô phỏng đếm số lượng node con',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO10.1.2'],
      description: 'Cho đối tượng mô phỏng DOM Node listNode = { name: "ul", children: ["li-1", "li-2", "li-3"] }. In ra: "Danh sách [name] có [count] phần tử con".',
      starterCode: `const listNode = { name: "ul", children: ["li-1", "li-2", "li-3"] };

console.log(\`Danh sách \${listNode.name} có \${listNode.children.length} phần tử con\`);`,
      solutionCode: `const listNode = { name: "ul", children: ["li-1", "li-2", "li-3"] };
console.log(\`Danh sách \${listNode.name} có \${listNode.children.length} phần tử con\`);`,
      testCases: [
        { id: 'tc-1', description: 'Đếm 3 phần tử con', expectedOutput: 'Danh sách ul có 3 phần tử con' }
      ],
      hints: ['listNode.children.length'],
      explanation: 'Thuộc tính children trả về danh sách các phần tử con trực tiếp.'
    },
    challenge: {
      id: 'ex-10-1-3',
      lessonId: 'les-10-1',
      title: 'Bài tập Thử thách: Kiểm tra xem trang có hỗ trợ chế độ tương thích (CompatMode)',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO10.1.1'],
      description: 'Kiểm tra document.compatMode. Nếu là "CSS1Compat" in "Chế độ chuẩn Standards Mode", ngược lại in "Chế độ Quirks Mode".',
      starterCode: `const mode = document.compatMode === "CSS1Compat" ? "Chế độ chuẩn Standards Mode" : "Chế độ Quirks Mode";
console.log(mode);`,
      solutionCode: `const mode = document.compatMode === "CSS1Compat" ? "Chế độ chuẩn Standards Mode" : "Chế độ Quirks Mode";
console.log(mode);`,
      testCases: [
        { id: 'tc-1', description: 'Chuẩn CSS1Compat', expectedOutput: 'Chế độ chuẩn Standards Mode' }
      ],
      hints: ['document.compatMode === "CSS1Compat"'],
      explanation: 'Trang web có khai báo <!DOCTYPE html> sẽ chạy ở Standards Mode (CSS1Compat).'
    }
  },
  quiz: {
    id: 'quiz-10-1',
    lessonId: 'les-10-1',
    title: 'Trắc nghiệm Cây DOM',
    passingScore: 70,
    questions: []
  },
  summary: [
    'DOM biểu diễn cấu trúc trang web thành cây đối tượng.',
    'Gốc của cây là document, cho phép tương tác toàn bộ HTML/CSS.'
  ],
  suggestedBookmarks: ['Cây phân cấp DOM', 'document.body và document.title']
};

export const LESSON_10_2: Lesson = {
  id: 'les-10-2',
  moduleId: 'mod-10',
  track: 'javascript',
  language: 'javascript',
  title: '10.2 Lựa chọn phần tử bằng querySelector & querySelectorAll',
  order: 2,
  durationMinutes: 50,
  difficulty: 'Cơ bản',
  prerequisites: ['Đã học bộ chọn CSS Selector cơ bản'],
  learningObjectives: [
    {
      id: 'LO10.2.1',
      code: 'LO10.2.1',
      title: 'Truy vấn phần tử đơn bằng querySelector()',
      description: 'Chọn theo ID (#id), Class (.class), TagName hoặc thuộc tính.',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    },
    {
      id: 'LO10.2.2',
      code: 'LO10.2.2',
      title: 'Truy vấn danh sách phần tử bằng querySelectorAll()',
      description: 'Làm việc với NodeList và duyệt danh sách bằng forEach.',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    }
  ],
  sections: [
    {
      id: 'sec-10-2-1',
      lessonId: 'les-10-2',
      order: 1,
      conceptName: 'Phương thức document.querySelector()',
      title: '1. querySelector(): Chọn phần tử đầu tiên khớp CSS Selector',
      explanation: '`document.querySelector(selector)` nhận vào bất kỳ chuỗi CSS Selector hợp lệ nào (ví dụ `#my-id`, `.btn-primary`, `input[type="text"]`) và TRẢ VỀ PHẦN TỬ ĐẦU TIÊN tìm thấy. Nếu không tìm thấy phần tử nào, nó trả về `null`.',
      syntax: 'const btn = document.querySelector("#submit-btn");\nconst firstCard = document.querySelector(".card");',
      codeExample: `// Tìm phần tử bằng CSS selector
console.log("Tìm phần tử #root:", document.querySelector("#root") !== null);
console.log("Tìm thẻ main:", document.querySelector("main") !== null);`,
      lineByLineExplanation: [
        { line: 2, text: 'document.querySelector("#root") tìm thẻ có id="root".' },
        { line: 3, text: 'document.querySelector("main") tìm thẻ <main> đầu tiên.' }
      ],
      commonMistakes: [
        'Quên dấu chấm (.) khi tìm theo class hoặc quên dấu thăng (#) khi tìm theo ID.'
      ],
      whenToUse: 'Dùng cho 90% các nhu cầu tìm kiếm 1 phần tử duy nhất trong giao diện.',
      whenNotToUse: 'Không dùng khi cần lấy tất cả các phần tử cùng nhóm (phải dùng querySelectorAll).',
      realWorldUseCase: 'Lấy nút submit form hoặc ô input tìm kiếm trên thanh điều hướng.'
    },
    {
      id: 'sec-10-2-2',
      lessonId: 'les-10-2',
      order: 2,
      conceptName: 'Phương thức document.querySelectorAll()',
      title: '2. querySelectorAll(): Lấy toàn bộ danh sách (NodeList)',
      explanation: '`document.querySelectorAll(selector)` trả về một danh sách các phần tử (gọi là `NodeList`). NodeList hỗ trợ sẵn phương thức `.forEach()`, nhưng KHÔNG phải là Mảng thuần túy (Array). Muốn dùng map/filter trên NodeList, ta chuyển đổi bằng Spread: `[...document.querySelectorAll(".item")]`.',
      syntax: 'const items = document.querySelectorAll(".item");\nitems.forEach(el => console.log(el));',
      codeExample: `// Tìm tất cả các thẻ button
const buttons = document.querySelectorAll("button");
console.log("Số nút bấm tìm thấy:", buttons.length);`,
      lineByLineExplanation: [
        { line: 2, text: 'Tìm tất cả các thẻ <button> trên trang và trả về NodeList.' }
      ],
      commonMistakes: [
        'Cố gọi trực tiếp buttons.map() hoặc buttons.filter() (NodeList không có hàm map, phải dùng [...buttons].map()).'
      ],
      whenToUse: 'Dùng khi cần gắn sự kiện click cho toàn bộ danh sách nút bấm hoặc đọc giá trị các checkbox.',
      whenNotToUse: 'Không dùng nếu chỉ cần một phần tử duy nhất.',
      realWorldUseCase: 'Chọn tất cả các mục menu để gắn hiệu ứng active khi người dùng click.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-10-2',
    title: 'Thực hành đếm số lượng thẻ trên giao diện',
    description: 'Truy vấn tất cả các thẻ div và in ra số lượng.',
    starterCode: `const allDivs = document.querySelectorAll("div");
console.log("Số lượng thẻ div tìm thấy:", allDivs.length);`,
    expectedConsoleOutput: 'Số lượng thẻ div tìm thấy:',
    hint: 'document.querySelectorAll("div").length.'
  },
  exercises: {
    basic: {
      id: 'ex-10-2-1',
      lessonId: 'les-10-2',
      title: 'Bài tập Cơ bản: Kiểm tra sự tồn tại của phần tử theo ID',
      difficulty: 'basic',
      learningObjectiveIds: ['LO10.2.1'],
      description: 'Dùng document.querySelector("#root"). Nếu tìm thấy in "Đã tìm thấy #root", ngược lại in "Không tìm thấy".',
      starterCode: `const root = document.querySelector("#root");
if (root) {
  console.log("Đã tìm thấy #root");
} else {
  console.log("Không tìm thấy");
}`,
      solutionCode: `const root = document.querySelector("#root");
if (root) {
  console.log("Đã tìm thấy #root");
} else {
  console.log("Không tìm thấy");
}`,
      testCases: [
        { id: 'tc-1', description: 'Có thẻ root trong app', expectedOutput: 'Đã tìm thấy #root' }
      ],
      hints: ['document.querySelector("#root")'],
      explanation: 'querySelector trả về null nếu không tìm thấy phần tử.'
    },
    intermediate: {
      id: 'ex-10-2-2',
      lessonId: 'les-10-2',
      title: 'Bài tập Trung bình: Chuyển NodeList thành Mảng thuần túy',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO10.2.2'],
      description: 'Cho NodeList giả lập const fakeNodeList = { length: 3, 0: "btn1", 1: "btn2", 2: "btn3" }. Dùng Array.from() chuyển thành Mảng và in mảng kết quả.',
      starterCode: `const fakeNodeList = { length: 3, 0: "btn1", 1: "btn2", 2: "btn3" };
const arr = Array.from(fakeNodeList);
console.log("Mảng chuyển đổi:", arr);`,
      solutionCode: `const fakeNodeList = { length: 3, 0: "btn1", 1: "btn2", 2: "btn3" };
const arr = Array.from(fakeNodeList);
console.log("Mảng chuyển đổi:", arr);`,
      testCases: [
        { id: 'tc-1', description: 'Chuyển thành mảng chuẩn', expectedOutput: 'Mảng chuyển đổi: [ \'btn1\', \'btn2\', \'btn3\' ]' }
      ],
      hints: ['Array.from(fakeNodeList)'],
      explanation: 'Array.from() hoặc cú pháp Spread [...nodeList] giúp chuyển NodeList thành Array để sử dụng map/filter.'
    },
    challenge: {
      id: 'ex-10-2-3',
      lessonId: 'les-10-2',
      title: 'Bài tập Thử thách: Truy vấn lồng nhau bên trong một phần tử con',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO10.2.1'],
      description: 'Viết hàm tìm kiếm an toàn: thay vì gọi từ document, gọi từ một phần tử cha: parentEl.querySelector(selector). Kiểm tra nếu document.body có thẻ h1 không.',
      starterCode: `const h1InBody = document.body.querySelector("h1");
console.log("Có thẻ h1 trong body:", h1InBody !== null);`,
      solutionCode: `const h1InBody = document.body.querySelector("h1");
console.log("Có thẻ h1 trong body:", h1InBody !== null);`,
      testCases: [
        { id: 'tc-1', description: 'Kiểm tra h1', expectedOutput: 'Có thẻ h1 trong body: true' }
      ],
      hints: ['element.querySelector() giới hạn phạm vi tìm kiếm bên trong phần tử đó'],
      explanation: 'Gọi querySelector từ một Element cụ thể giúp thu hẹp phạm vi tìm kiếm và cải thiện hiệu năng.'
    }
  },
  quiz: {
    id: 'quiz-10-2',
    lessonId: 'les-10-2',
    title: 'Trắc nghiệm querySelector',
    passingScore: 70,
    questions: []
  },
  summary: [
    'querySelector chọn phần tử đầu tiên khớp CSS Selector.',
    'querySelectorAll trả về NodeList chứa toàn bộ phần tử khớp điều kiện.'
  ],
  suggestedBookmarks: ['querySelector vs querySelectorAll', 'Chuyển NodeList thành Mảng']
};

export const LESSON_10_3: Lesson = {
  id: 'les-10-3',
  moduleId: 'mod-10',
  track: 'javascript',
  language: 'javascript',
  title: '10.3 Thay đổi nội dung: textContent vs innerHTML vs innerText',
  order: 3,
  durationMinutes: 45,
  difficulty: 'Cơ bản',
  prerequisites: ['Đã học cách chọn phần tử bằng querySelector'],
  learningObjectives: [
    {
      id: 'LO10.3.1',
      code: 'LO10.3.1',
      title: 'Phân biệt textContent, innerHTML và innerText',
      description: 'Lựa chọn thuộc tính phù hợp để cập nhật nội dung văn bản hoặc render HTML.',
      bloomLevel: 'Understand',
      masteryPercentage: 90
    },
    {
      id: 'LO10.3.2',
      code: 'LO10.3.2',
      title: 'Nhận thức rủi ro bảo mật XSS khi sử dụng innerHTML',
      description: 'Bảo vệ ứng dụng khỏi các cuộc tấn công tiêm mã độc (Cross-Site Scripting).',
      bloomLevel: 'Analyze',
      masteryPercentage: 85
    }
  ],
  sections: [
    {
      id: 'sec-10-3-1',
      lessonId: 'les-10-3',
      order: 1,
      conceptName: 'So sánh textContent và innerHTML',
      title: '1. textContent vs innerHTML: Hiệu năng và Bảo mật',
      explanation: '`textContent` chỉ lấy hoặc gán VĂN BẢN THUẦN (Plain text), tự động mã hóa ký tự HTML nên an toàn 100% trước lỗi bảo mật XSS. `innerHTML` cho phép phân tích và biên dịch chuỗi thành CÁC THẺ HTML THỰC THỤ. Tuy nhiên, nếu gán dữ liệu người dùng vào `innerHTML` mà không lọc sẽ mở ra lỗ hổng bảo mật XSS (Cross-Site Scripting).',
      syntax: 'el.textContent = "Xin chào <b>bạn</b>"; // Hiển thị nguyên văn thẻ <b>\nel.innerHTML = "Xin chào <b>bạn</b>";   // Chữ "bạn" sẽ in đậm',
      codeExample: `// Giả lập thẻ div
const mockDiv = {
  textContent: "",
  innerHTML: ""
};

// Gán textContent
mockDiv.textContent = "Xin chào sinh viên!";
console.log("Sau khi gán textContent:", mockDiv.textContent);`,
      lineByLineExplanation: [
        { line: 8, text: 'textContent gán chuỗi văn bản sạch an toàn.' }
      ],
      commonMistakes: [
        'Dùng innerHTML chỉ để thay đổi một đoạn chữ đơn giản (vừa chậm vừa kém an toàn hơn textContent).'
      ],
      whenToUse: 'Dùng textContent trong 95% trường hợp cập nhật chữ; chỉ dùng innerHTML khi cần render một đoạn mẫu HTML phức tạp.',
      whenNotToUse: 'TUYỆT ĐỐI KHÔNG gán input từ người dùng trực tiếp vào innerHTML.',
      realWorldUseCase: 'Cập nhật điểm số người dùng trên giao diện: `scoreSpan.textContent = userScore;`'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-10-3',
    title: 'Thực hành tạo thẻ HTML bằng innerHTML an toàn',
    description: 'Tạo thẻ p chứa chữ in đậm bằng cú pháp innerHTML.',
    starterCode: `const template = "<strong>Chúc mừng!</strong> Bạn đã hoàn thành bài học.";
console.log("Mã HTML render:", template);`,
    expectedConsoleOutput: 'Mã HTML render: <strong>Chúc mừng!</strong> Bạn đã hoàn thành bài học.',
    hint: 'innerHTML biên dịch thẻ <strong>.'
  },
  exercises: {
    basic: {
      id: 'ex-10-3-1',
      lessonId: 'les-10-3',
      title: 'Bài tập Cơ bản: Lựa chọn thuộc tính an toàn chống XSS',
      difficulty: 'basic',
      learningObjectiveIds: ['LO10.3.2'],
      description: 'Cho biến userInput = "<script>alert(1)</script>". Khi cần hiển thị tên người dùng này ra thẻ span, ta nên gán vào thuộc tính nào: "textContent" hay "innerHTML"? In ra tên thuộc tính an toàn.',
      starterCode: `const safeProperty = "textContent";
console.log("Thuộc tính an toàn:", safeProperty);`,
      solutionCode: `const safeProperty = "textContent";
console.log("Thuộc tính an toàn:", safeProperty);`,
      testCases: [
        { id: 'tc-1', description: 'textContent an toàn', expectedOutput: 'Thuộc tính an toàn: textContent' }
      ],
      hints: ['textContent tự động escape mã HTML'],
      explanation: 'textContent biến thẻ <script> thành chuỗi văn bản vô hại, ngăn chặn hoàn toàn tấn công XSS.'
    },
    intermediate: {
      id: 'ex-10-3-2',
      lessonId: 'les-10-3',
      title: 'Bài tập Trung bình: Render danh sách người dùng thành HTML',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO10.3.1'],
      description: 'Cho mảng names = ["An", "Bình"]. Dùng map tạo các thẻ "<li>[name]</li>" rồi join("") lại thành chuỗi HTML hoàn chỉnh. In chuỗi HTML.',
      starterCode: `const names = ["An", "Bình"];
const html = names.map(n => \`<li>\${n}</li>\`).join("");
console.log("HTML Render:", html);`,
      solutionCode: `const names = ["An", "Bình"];
const html = names.map(n => \`<li>\${n}</li>\`).join("");
console.log("HTML Render:", html);`,
      testCases: [
        { id: 'tc-1', description: 'Render danh sách li', expectedOutput: 'HTML Render: <li>An</li><li>Bình</li>' }
      ],
      hints: ['names.map(n => `<li>${n}</li>`).join("")'],
      explanation: 'Kỹ thuật render danh sách thẻ HTML phổ biến trước khi đưa vào innerHTML của thẻ <ul>.'
    },
    challenge: {
      id: 'ex-10-3-3',
      lessonId: 'les-10-3',
      title: 'Bài tập Thử thách: Hàm Escape HTML thủ công để phòng vệ',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO10.3.2'],
      description: 'Viết hàm escapeHtml(str) thay thế "<" bằng "&lt;" và ">" bằng "&gt;". Chạy thử với "<h1>Hello</h1>" và in kết quả.',
      starterCode: `function escapeHtml(str) {
  return str.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

console.log("Chuỗi an toàn:", escapeHtml("<h1>Hello</h1>"));`,
      solutionCode: `function escapeHtml(str) {
  return str.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
console.log("Chuỗi an toàn:", escapeHtml("<h1>Hello</h1>"));`,
      testCases: [
        { id: 'tc-1', description: 'Mã hóa ký tự đặc biệt', expectedOutput: 'Chuỗi an toàn: &lt;h1&gt;Hello&lt;/h1&gt;' }
      ],
      hints: ['str.replaceAll("<", "&lt;").replaceAll(">", "&gt;")'],
      explanation: 'Mã hóa HTML Entity giúp ngăn chặn trình duyệt hiểu lầm văn bản người dùng là thẻ HTML thực thi.'
    }
  },
  quiz: {
    id: 'quiz-10-3',
    lessonId: 'les-10-3',
    title: 'Trắc nghiệm textContent & innerHTML',
    passingScore: 70,
    questions: []
  },
  summary: [
    'textContent dùng cho văn bản thuần, an toàn 100% trước XSS.',
    'innerHTML biên dịch chuỗi thành thẻ HTML thực tế.'
  ],
  suggestedBookmarks: ['textContent vs innerHTML', 'Phòng chống tấn công XSS']
};

export const LESSON_10_4: Lesson = {
  id: 'les-10-4',
  moduleId: 'mod-10',
  track: 'javascript',
  language: 'javascript',
  title: '10.4 Điều khiển giao diện qua classList (add, remove, toggle)',
  order: 4,
  durationMinutes: 45,
  difficulty: 'Cơ bản',
  prerequisites: ['Hiểu cách chọn phần tử', 'Biết các class CSS cơ bản'],
  learningObjectives: [
    {
      id: 'LO10.4.1',
      code: 'LO10.4.1',
      title: 'Thêm và xóa class CSS qua classList',
      description: 'Sử dụng classList.add(), classList.remove(), classList.contains().',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    },
    {
      id: 'LO10.4.2',
      code: 'LO10.4.2',
      title: 'Bật/tắt trạng thái linh hoạt với classList.toggle()',
      description: 'Xây dựng chức năng Dark Mode, Accordion và Dropdown menu.',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    }
  ],
  sections: [
    {
      id: 'sec-10-4-1',
      lessonId: 'les-10-4',
      order: 1,
      conceptName: 'Phương thức classList API',
      title: '1. Thao tác Class CSS chuyên nghiệp với classList',
      explanation: 'Thuộc tính `element.classList` cung cấp API thông minh để quản lý danh sách class của phần tử: `add("class")` (thêm class), `remove("class")` (xóa class), `toggle("class")` (bật nếu chưa có, tắt nếu đã có), `contains("class")` (kiểm tra có chứa class hay không, trả về boolean).',
      syntax: 'el.classList.add("active");\nel.classList.remove("hidden");\nel.classList.toggle("dark-mode");\nconst isActive = el.classList.contains("active");',
      codeExample: `// Giả lập đối tượng quản lý classList
const mockElement = {
  classes: new Set(["btn"]),
  addClass(c) { this.classes.add(c); },
  removeClass(c) { this.classes.delete(c); },
  toggleClass(c) { this.classes.has(c) ? this.classes.delete(c) : this.classes.add(c); }
};

mockElement.addClass("btn-primary");
mockElement.toggleClass("active");
console.log("Danh sách class hiện tại:", [...mockElement.classes]);`,
      lineByLineExplanation: [
        { line: 9, text: 'Thêm class btn-primary.' },
        { line: 10, text: 'Bật class active.' }
      ],
      commonMistakes: [
        'Dùng el.className = "active" thay vì classList.add("active") -> việc này sẽ ghi đè và làm mất sạch toàn bộ các class cũ của phần tử.'
      ],
      whenToUse: 'Luôn dùng classList để điều khiển giao diện theo trạng thái (đang tải, đang ẩn, active, lỗi).',
      whenNotToUse: 'Tránh viết inline style trực tiếp (`el.style.color = "red"`) nếu có thể dùng class CSS.',
      realWorldUseCase: 'Chuyển đổi giao diện Sáng / Tối (Dark/Light mode): `document.body.classList.toggle("dark");`'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-10-4',
    title: 'Thực hành mô phỏng chuyển đổi Dark Mode',
    description: 'Sử dụng phương thức toggle để bật tắt giao diện tối.',
    starterCode: `let isDark = false;
function toggleTheme() {
  isDark = !isDark;
  console.log("Chế độ tối đang bật:", isDark);
}

toggleTheme();
toggleTheme();`,
    expectedConsoleOutput: 'Chế độ tối đang bật: true\nChế độ tối đang bật: false',
    hint: 'toggle đảo ngược trạng thái boolean hoặc class.'
  },
  exercises: {
    basic: {
      id: 'ex-10-4-1',
      lessonId: 'les-10-4',
      title: 'Bài tập Cơ bản: Kiểm tra trạng thái ẩn/hiện của phần tử',
      difficulty: 'basic',
      learningObjectiveIds: ['LO10.4.1'],
      description: 'Cho mảng class = ["card", "shadow", "hidden"]. Viết câu lệnh kiểm tra nếu có class "hidden" in "Phần tử đang bị ẩn", ngược lại in "Phần tử đang hiển thị".',
      starterCode: `const classes = ["card", "shadow", "hidden"];

if (classes.includes("hidden")) {
  console.log("Phần tử đang bị ẩn");
} else {
  console.log("Phần tử đang hiển thị");
}`,
      solutionCode: `const classes = ["card", "shadow", "hidden"];
if (classes.includes("hidden")) {
  console.log("Phần tử đang bị ẩn");
} else {
  console.log("Phần tử đang hiển thị");
}`,
      testCases: [
        { id: 'tc-1', description: 'Có class hidden', expectedOutput: 'Phần tử đang bị ẩn' }
      ],
      hints: ['classes.includes("hidden") tương đương classList.contains("hidden")'],
      explanation: 'contains("hidden") kiểm tra sự hiện diện của class để quyết định hiển thị.'
    },
    intermediate: {
      id: 'ex-10-4-2',
      lessonId: 'les-10-4',
      title: 'Bài tập Trung bình: Viết logic toggle class cho menu Dropdown',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO10.4.2'],
      description: 'Tạo hàm toggleMenu(isOpen) trả về chuỗi class: nếu isOpen = true trả về "dropdown-menu show", nếu false trả về "dropdown-menu". In kết quả chạy thử với true và false.',
      starterCode: `function getMenuClass(isOpen) {
  return isOpen ? "dropdown-menu show" : "dropdown-menu";
}

console.log("Khi mở:", getMenuClass(true));
console.log("Khi đóng:", getMenuClass(false));`,
      solutionCode: `function getMenuClass(isOpen) {
  return isOpen ? "dropdown-menu show" : "dropdown-menu";
}
console.log("Khi mở:", getMenuClass(true));
console.log("Khi đóng:", getMenuClass(false));`,
      testCases: [
        { id: 'tc-1', description: 'Khi mở', expectedOutput: 'Khi mở: dropdown-menu show' },
        { id: 'tc-2', description: 'Khi đóng', expectedOutput: 'Khi đóng: dropdown-menu' }
      ],
      hints: ['Dùng toán tử 3 ngôi kiểm tra isOpen'],
      explanation: 'classList.toggle("show") hoạt động tương tự như việc tự động thêm hoặc xóa class "show".'
    },
    challenge: {
      id: 'ex-10-4-3',
      lessonId: 'les-10-4',
      title: 'Bài tập Thử thách: Thao tác nhiều class cùng một lúc',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO10.4.1'],
      description: 'Trong chuẩn DOM hiện đại, classList.add() có thể nhận nhiều tham số: add("c1", "c2", "c3"). Cho mảng classesToAdd = ["btn", "btn-success", "active"]. Dùng join(" ") để ghép thành chuỗi class hoàn chỉnh. In kết quả.',
      starterCode: `const classesToAdd = ["btn", "btn-success", "active"];
const result = classesToAdd.join(" ");
console.log("Chuỗi class gộp:", result);`,
      solutionCode: `const classesToAdd = ["btn", "btn-success", "active"];
const result = classesToAdd.join(" ");
console.log("Chuỗi class gộp:", result);`,
      testCases: [
        { id: 'tc-1', description: 'Nối các class bằng dấu cách', expectedOutput: 'Chuỗi class gộp: btn btn-success active' }
      ],
      hints: ['classesToAdd.join(" ")'],
      explanation: 'classList.add(...classesToAdd) hỗ trợ truyền nhiều class cùng lúc.'
    }
  },
  quiz: {
    id: 'quiz-10-4',
    lessonId: 'les-10-4',
    title: 'Trắc nghiệm classList',
    passingScore: 70,
    questions: []
  },
  summary: [
    'classList.add() và remove() thêm/xóa class an toàn không làm mất class cũ.',
    'classList.toggle() bật/tắt class rất tiện lợi cho Dark Mode và Accordion.'
  ],
  suggestedBookmarks: ['classList.add/remove/toggle', 'classList.contains()']
};

export const LESSON_10_5: Lesson = {
  id: 'les-10-5',
  moduleId: 'mod-10',
  track: 'javascript',
  language: 'javascript',
  title: '10.5 Tạo phần tử động với createElement và appendChild',
  order: 5,
  durationMinutes: 60,
  difficulty: 'Trung bình',
  prerequisites: ['Đã học querySelector và textContent'],
  learningObjectives: [
    {
      id: 'LO10.5.1',
      code: 'LO10.5.1',
      title: 'Tạo mới phần tử với document.createElement()',
      description: 'Thiết lập thuộc tính, nội dung và class cho phần tử vừa tạo trong bộ nhớ.',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    },
    {
      id: 'LO10.5.2',
      code: 'LO10.5.2',
      title: 'Gắn và gỡ bỏ phần tử khỏi DOM với appendChild và remove()',
      description: 'Chèn phần tử vào cây DOM và dọn dẹp bộ nhớ khi xóa phần tử.',
      bloomLevel: 'Apply',
      masteryPercentage: 88
    }
  ],
  sections: [
    {
      id: 'sec-10-5-1',
      lessonId: 'les-10-5',
      order: 1,
      conceptName: 'Quy trình tạo và gắn phần tử vào DOM',
      title: '1. Quy trình 3 bước tạo phần tử DOM động',
      explanation: 'Để tạo một phần tử mới và hiển thị lên trang web, ta trải qua 3 bước chuẩn mực: (1) Tạo phần tử trong bộ nhớ: `const el = document.createElement("tagName")`; (2) Thiết lập nội dung, class, thuộc tính cho `el`; (3) Gắn phần tử vào một cha trong cây DOM: `parent.appendChild(el)` hoặc `parent.append(el)`.',
      syntax: 'const newLi = document.createElement("li");\nnewLi.textContent = "Nhiệm vụ mới";\nnewLi.classList.add("task-item");\nulParent.appendChild(newLi);',
      codeExample: `// Giả lập cấu trúc tạo phần tử
function createTag(tagName, text, className) {
  return {
    tag: tagName,
    content: text,
    cssClass: className
  };
}

const myButton = createTag("button", "Bấm vào tôi", "btn-primary");
console.log("Phần tử vừa tạo:", myButton);`,
      lineByLineExplanation: [
        { line: 8, text: 'Tạo cấu trúc đại diện cho thẻ <button class="btn-primary">Bấm vào tôi</button>.' }
      ],
      commonMistakes: [
        'Tạo phần tử bằng createElement xong nhưng quên không gọi appendChild() -> phần tử chỉ nằm trong bộ nhớ RAM mà không hề xuất hiện trên màn hình trình duyệt!'
      ],
      whenToUse: 'Dùng khi thêm công việc mới vào Todo List, tạo comment mới hoặc render sản phẩm động.',
      whenNotToUse: 'Không dùng nếu có thể tạo cấu trúc tĩnh trực tiếp bằng HTML.',
      realWorldUseCase: 'Tính năng thêm công việc vào danh sách Todo List trong các ứng dụng Web.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-10-5',
    title: 'Thực hành mô phỏng tạo danh sách thẻ HTML',
    description: 'Duyệt qua mảng công việc và tạo danh sách thẻ li tương ứng.',
    starterCode: `const tasks = ["Học bài", "Làm bài tập", "Nộp dự án"];
const elements = tasks.map(task => \`<li>\${task}</li>\`);

console.log("Danh sách thẻ li tạo được:", elements);`,
    expectedConsoleOutput: 'Danh sách thẻ li tạo được: [ \'<li>Học bài</li>\', \'<li>Làm bài tập</li>\', \'<li>Nộp dự án</li>\' ]',
    hint: 'tasks.map(task => `<li>${task}</li>`).'
  },
  exercises: {
    basic: {
      id: 'ex-10-5-1',
      lessonId: 'les-10-5',
      title: 'Bài tập Cơ bản: Khởi tạo đối tượng thẻ a liên kết',
      difficulty: 'basic',
      learningObjectiveIds: ['LO10.5.1'],
      description: 'Tạo đối tượng link = { tag: "a", href: "https://poly.edu.vn", text: "FPT Polytechnic" }. In ra: "<a href=\'[href]\'>[text]</a>".',
      starterCode: `const link = { tag: "a", href: "https://poly.edu.vn", text: "FPT Polytechnic" };
console.log(\`<a href='\${link.href}'>\${link.text}</a>\`);`,
      solutionCode: `const link = { tag: "a", href: "https://poly.edu.vn", text: "FPT Polytechnic" };
console.log(\`<a href='\${link.href}'>\${link.text}</a>\`);`,
      testCases: [
        { id: 'tc-1', description: 'In thẻ a', expectedOutput: '<a href=\'https://poly.edu.vn\'>FPT Polytechnic</a>' }
      ],
      hints: ['Nội suy chuỗi thẻ a'],
      explanation: 'Đại diện cấu trúc thẻ liên kết trước khi gắn vào DOM.'
    },
    intermediate: {
      id: 'ex-10-5-2',
      lessonId: 'les-10-5',
      title: 'Bài tập Trung bình: Viết hàm tạo badge thông báo',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO10.5.1'],
      description: 'Viết hàm createBadge(count) trả về chuỗi HTML: nếu count > 0 trả về "<span class=\'badge\'>[count]</span>", nếu count = 0 trả về "". Chạy thử với count = 5 và in kết quả.',
      starterCode: `function createBadge(count) {
  return count > 0 ? \`<span class='badge'>\${count}</span>\` : "";
}

console.log("Badge thông báo:", createBadge(5));`,
      solutionCode: `function createBadge(count) {
  return count > 0 ? \`<span class='badge'>\${count}</span>\` : "";
}
console.log("Badge thông báo:", createBadge(5));`,
      testCases: [
        { id: 'tc-1', description: 'Badge 5 thông báo', expectedOutput: 'Badge thông báo: <span class=\'badge\'>5</span>' }
      ],
      hints: ['count > 0 ? `<span class=\'badge\'>${count}</span>` : ""'],
      explanation: 'Tạo component HTML động có điều kiện (Conditional Rendering).'
    },
    challenge: {
      id: 'ex-10-5-3',
      lessonId: 'les-10-5',
      title: 'Bài tập Thử thách: Gỡ bỏ phần tử khỏi DOM bằng remove()',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO10.5.2'],
      description: 'Trong DOM hiện đại, phương thức element.remove() cho phép tự hủy phần tử trực tiếp mà không cần qua parentElement.removeChild(). Cho mảng danh sách [1, 2, 3, 4]. Viết hàm xóa phần tử có giá trị = 2 và in mảng sau khi xóa.',
      starterCode: `const list = [1, 2, 3, 4];
const afterRemove = list.filter(item => item !== 2);
console.log("Mảng sau khi xóa:", afterRemove);`,
      solutionCode: `const list = [1, 2, 3, 4];
const afterRemove = list.filter(item => item !== 2);
console.log("Mảng sau khi xóa:", afterRemove);`,
      testCases: [
        { id: 'tc-1', description: 'Đã xóa phần tử 2', expectedOutput: 'Mảng sau khi xóa: [ 1, 3, 4 ]' }
      ],
      hints: ['filter loại bỏ phần tử cần xóa'],
      explanation: 'Tương đương thao tác gỡ bỏ phần tử giao diện trong DOM với element.remove().'
    }
  },
  quiz: {
    id: 'quiz-10-5',
    lessonId: 'les-10-5',
    title: 'Trắc nghiệm createElement & appendChild',
    passingScore: 70,
    questions: []
  },
  summary: [
    'createElement() tạo thẻ mới trong bộ nhớ.',
    'Phải dùng appendChild() hoặc append() để đưa phần tử vào cây DOM hiển thị.'
  ],
  suggestedBookmarks: ['Quy trình 3 bước createElement', 'Xóa phần tử với remove()']
};

export const JS_MODULE_10_LESSONS: Lesson[] = [
  LESSON_10_1,
  LESSON_10_2,
  LESSON_10_3,
  LESSON_10_4,
  LESSON_10_5
];
