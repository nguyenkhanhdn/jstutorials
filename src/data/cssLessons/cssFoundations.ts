import { Lesson } from '../../types';

// ============================================================================
// CSS 1: CÚ PHÁP & CÁCH CSS HOẠT ĐỘNG
// ============================================================================
export const LESSON_CSS_1: Lesson = {
  id: 'les-css-1',
  moduleId: 'mod-css-1',
  track: 'css',
  language: 'css',
  title: 'CSS 1. Cú pháp & Cách CSS hoạt động (Syntax, Cascade & Specificity)',
  order: 1,
  durationMinutes: 45,
  difficulty: 'Cơ bản',
  prerequisites: [
    'Đã học xong 12 bài HTML Tutorials căn bản',
    'Hiểu cây cấu trúc tài liệu DOM (Document Object Model)'
  ],
  learningObjectives: [
    {
      id: 'LO-CSS-1.1',
      code: 'LO-CSS-1.1',
      title: 'Giải phẫu quy tắc CSS (CSS Rule Anatomy)',
      description: 'Phân biệt Bộ chọn (Selector), Khối khai báo (Declaration Block), Thuộc tính (Property) và Giá trị (Value).',
      bloomLevel: 'Remember',
      masteryPercentage: 95
    },
    {
      id: 'LO-CSS-1.2',
      code: 'LO-CSS-1.2',
      title: 'Hiểu sâu cơ chế Cascade (Xếp tầng) & Kế thừa (Inheritance)',
      description: 'Nắm vững quy tắc giải quyết xung đột kiểu dáng khi nhiều luật CSS cùng nhắm vào một phần tử.',
      bloomLevel: 'Understand',
      masteryPercentage: 90
    },
    {
      id: 'LO-CSS-1.3',
      code: 'LO-CSS-1.3',
      title: 'Tính toán trọng số ưu tiên Specificity',
      description: 'Tính toán chính xác trọng số Specificity giữa Inline Styles, ID (#), Class (.), Thẻ (Tag) và tác động của !important.',
      bloomLevel: 'Apply',
      masteryPercentage: 88
    }
  ],
  sections: [
    {
      id: 'sec-css-1-1',
      lessonId: 'les-css-1',
      order: 1,
      conceptName: 'Cú pháp quy tắc CSS & Ba cách nhúng vào HTML',
      title: '1. Cú pháp bộ quy tắc và 3 phương thức nhúng CSS',
      explanation: 'CSS (Cascading Style Sheets) là ngôn ngữ quy định cách hiển thị thị giác của tài liệu HTML. Một bộ quy tắc CSS (CSS Rule) gồm:\n1. Selector (Bộ chọn): Chỉ định phần tử HTML nào sẽ được áp dụng kiểu.\n2. Declaration Block: Nằm trong cặp ngoặc nhọn { }, chứa một hoặc nhiều cặp property: value;\n\nCó 3 phương thức đưa CSS vào trang:\n- External CSS (File riêng .css kết nối qua <link rel="stylesheet">): Phương pháp chuẩn doanh nghiệp, tái sử dụng tối đa và lưu bộ nhớ đệm (caching).\n- Internal CSS (Đặt trong thẻ <style> ở phần <head>): Dùng cho trang đơn lẻ hoặc landing page nhúng nhanh.\n- Inline CSS (Viết trực tiếp thuộc tính style="..." trên thẻ HTML): Độ ưu tiên cao nhưng gây phân mảnh mã nguồn, chỉ dùng khi nhúng động bằng JavaScript.',
      syntax: '/* Cú pháp chuẩn của một CSS Rule */\nselector {\n  property: value;\n  property: value;\n}',
      codeExample: `/* Định dạng toàn bộ tiêu đề h1 trên website */
h1 {
  color: #1e293b;
  font-size: 28px;
  text-align: center;
}

/* Định dạng đoạn văn giới thiệu */
p.intro {
  line-height: 1.6;
  color: #475569;
}`,
      lineByLineExplanation: [
        { line: 2, text: 'h1 là Selector nhắm mục tiêu vào tất cả thẻ h1 trong trang.' },
        { line: 3, text: 'color là thuộc tính màu chữ, #1e293b là mã màu Hex.' },
        { line: 4, text: 'font-size đặt kích cỡ chữ 28 điểm ảnh (pixels).' },
        { line: 5, text: 'text-align: center căn giữa dòng chữ.' }
      ],
      commonMistakes: [
        'Quên dấu chấm phẩy (;) ở cuối mỗi dòng khai báo, khiến toàn bộ các dòng CSS phía sau bị vô hiệu hóa.',
        'Lạm dụng Inline style khắp nơi khiến mã HTML phình to và không thể tái sử dụng bảng màu chung.'
      ],
      whenToUse: 'Luôn ưu tiên tách file External styles.css cho toàn bộ dự án sản xuất chuyên nghiệp.',
      whenNotToUse: 'Tránh dùng Inline style trừ khi cần tính toán vị trí tọa độ động từ mã JavaScript.',
      realWorldUseCase: 'File styles.css dùng chung cho hàng trăm trang web của Shopee hoặc Facebook giúp giao diện đồng nhất.'
    },
    {
      id: 'sec-css-1-2',
      lessonId: 'les-css-1',
      order: 2,
      conceptName: 'Cơ chế Xếp tầng (Cascade), Kế thừa & Trọng số Specificity',
      title: '2. Nguyên lý Cascade, Kế thừa và Công thức tính Specificity',
      explanation: 'Khi có nhiều quy tắc CSS cùng áp dụng cho một phần tử, trình duyệt giải quyết theo thứ tự:\n1. Tầm quan trọng (!important thắng mọi quy tắc thông thường).\n2. Specificity (Độ cụ thể / Trọng số ưu tiên):\n   - Inline style: (1, 0, 0, 0) = 1000 điểm\n   - ID selector (#my-id): (0, 1, 0, 0) = 100 điểm\n   - Class, pseudo-class, attribute (.btn, :hover, [type]): (0, 0, 1, 0) = 10 điểm\n   - Element, pseudo-element (div, p, ::before): (0, 0, 0, 1) = 1 điểm\n3. Thứ tự xuất hiện trong mã (Source Order): Nếu trọng số bằng nhau, quy tắc nào viết SAU sẽ ĐÈ lên quy tắc viết TRƯỚC.',
      syntax: '/* Thẻ: 1 điểm */\np { color: blue; }\n\n/* Class: 10 điểm (Thắng thẻ p) */\n.text-red { color: red; }\n\n/* ID: 100 điểm (Thắng cả class) */\n#main-title { color: green; }',
      codeExample: `/* Ví dụ so sánh trọng số Specificity */
p {
  color: gray; /* Trọng số: 0,0,0,1 */
}

.intro {
  color: blue; /* Trọng số: 0,0,1,0 -> Thắng p */
}

#banner .intro {
  color: purple; /* Trọng số: 0,1,1,0 -> Thắng .intro */
}

/* Quy tắc viết sau cùng mức độ ưu tiên */
.btn { background: red; }
.btn { background: green; } /* green sẽ thắng vì viết sau */`,
      lineByLineExplanation: [
        { line: 2, text: 'p là element selector có trọng số thấp nhất.' },
        { line: 6, text: '.intro là class selector ghi đè màu xám thành màu xanh.' },
        { line: 10, text: '#banner .intro kết hợp ID và class có trọng số cực cao (0,1,1,0) nên chiến thắng.' }
      ],
      commonMistakes: [
        'Lạm dụng !important để giải quyết xung đột CSS, gây ra "chiến tranh important" phá hủy cấu trúc bảo trì của dự án.',
        'Tạo selector quá dài như body div#app ul.menu li a.active khiến trọng số quá cao khó ghi đè sau này.'
      ],
      whenToUse: 'Dùng class-based architecture (như BEM hoặc Tailwind) giữ trọng số luôn ở mức phẳng 10 điểm dễ bảo trì.',
      whenNotToUse: 'Hạn chế tối đa dùng !important trừ các class Utility tiện ích bất di bất dịch (như .hidden { display: none !important; }).',
      realWorldUseCase: 'Xử lý theme đổi giao diện Dark/Light mode ghi đè biến màu của toàn bộ ứng dụng.'
    }
  ],
  predictOutputs: [
    {
      id: 'po-css-1-1',
      question: 'Đoạn văn sau sẽ có chữ màu gì khi hiển thị trên màn hình?',
      code: `/* CSS */
p { color: blue; }
.highlight { color: green; }
#intro { color: red; }

<!-- HTML -->
<p id="intro" class="highlight">Xin chào CSS!</p>`,
      options: [
        'A. Màu xanh dương (blue) vì thẻ p viết đầu tiên',
        'B. Màu xanh lá (green) vì class highlight nằm cuối cùng trong thuộc tính',
        'C. Màu đỏ (red) vì bộ chọn ID (#intro) có trọng số ưu tiên Specificity cao hơn Class và Thẻ',
        'D. Màu đen mặc định vì có xung đột'
      ],
      correctAnswer: 'C. Màu đỏ (red) vì bộ chọn ID (#intro) có trọng số ưu tiên Specificity cao hơn Class và Thẻ',
      explanation: 'Bộ chọn ID (#intro) có trọng số Specificity (0, 1, 0, 0 = 100 điểm), vượt trội hoàn toàn so với Class (0, 0, 1, 0 = 10 điểm) và Thẻ p (0, 0, 0, 1 = 1 điểm).',
      hint: 'Hãy nhớ quy tắc: ID (100) > Class (10) > Element (1).'
    }
  ],
  interactivePractice: {
    id: 'ip-css-1',
    title: 'Thực hành áp dụng màu sắc và căn lề CSS',
    description: 'Viết mã CSS đặt màu chữ tiêu đề <h1> thành màu xanh đậm (#1e40af), căn giữa chữ và đặt cỡ chữ 24px.',
    starterCode: `h1 {
  color: #1e40af;
  text-align: center;
  font-size: 24px;
}`,
    expectedConsoleOutput: '#1e40af',
    hint: 'Sử dụng các thuộc tính color, text-align và font-size bên trong khối h1 { ... }.',
    language: 'css'
  },
  exercises: {
    basic: {
      id: 'ex-css-1-basic',
      lessonId: 'les-css-1',
      title: 'Định dạng tiêu đề và đoạn văn cơ bản',
      difficulty: 'basic',
      learningObjectiveIds: ['LO-CSS-1.1'],
      description: 'Tạo quy tắc CSS cho thẻ <h2> có màu chữ "#0f172a" và đoạn văn <p> có cỡ chữ "16px" và chiều cao dòng "1.5".',
      starterCode: `h2 {
  color: #0f172a;
}
p {
  font-size: 16px;
  line-height: 1.5;
}`,
      solutionCode: `h2 {\n  color: #0f172a;\n}\np {\n  font-size: 16px;\n  line-height: 1.5;\n}`,
      testCases: [
        {
          id: 'tc-c1-1',
          description: 'Kiểm tra color của h2 và font-size của p',
          expectedOutput: '#0f172a'
        }
      ],
      hints: ['Đảm bảo kết thúc mỗi dòng thuộc tính bằng dấu chấm phẩy (;).'],
      explanation: 'Cú pháp selector { property: value; } là chuẩn mực nền tảng của CSS.',
      language: 'css'
    },
    intermediate: {
      id: 'ex-css-1-mid',
      lessonId: 'les-css-1',
      title: 'Áp dụng Class Selector ghi đè kiểu mặc định',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO-CSS-1.3'],
      description: 'Viết class CSS ".card-title" có màu chữ "#2563eb", độ đậm phông chữ "bold" và khoảng cách đệm dưới "margin-bottom: 8px;".',
      starterCode: `.card-title {
  color: #2563eb;
  font-weight: bold;
  margin-bottom: 8px;
}`,
      solutionCode: `.card-title {\n  color: #2563eb;\n  font-weight: bold;\n  margin-bottom: 8px;\n}`,
      testCases: [
        {
          id: 'tc-c1-2',
          description: 'Kiểm tra class .card-title có font-weight bold',
          expectedOutput: '#2563eb'
        }
      ],
      hints: ['Bộ chọn class luôn bắt đầu bằng dấu chấm (.).'],
      explanation: 'Class selector có tính tái sử dụng cao trên nhiều phần tử khác nhau.',
      language: 'css'
    },
    challenge: {
      id: 'ex-css-1-adv',
      lessonId: 'les-css-1',
      title: 'Kiểm soát thứ tự xếp tầng Cascade và reset mặc định',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO-CSS-1.2', 'LO-CSS-1.3'],
      description: 'Viết quy tắc reset cho bộ chọn toàn cục "*" loại bỏ margin và padding về 0, đồng thời áp dụng "box-sizing: border-box;".',
      starterCode: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}`,
      solutionCode: `* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}`,
      testCases: [
        {
          id: 'tc-c1-3',
          description: 'Kiểm tra universal selector * với box-sizing border-box',
          expectedOutput: 'border-box'
        }
      ],
      hints: ['Dấu sao (*) là bộ chọn đại diện (Universal Selector) nhắm vào mọi phần tử.'],
      explanation: 'Bộ chọn toàn cục thường được dùng để thiết lập CSS Reset ban đầu cho dự án.',
      language: 'css'
    }
  },
  quiz: {
    id: 'quiz-css-1',
    lessonId: 'les-css-1',
    title: 'Kiểm tra hiểu biết: Cú pháp & Cách hoạt động của CSS',
    passingScore: 70,
    questions: [
      {
        id: 'q-c1-1',
        lessonId: 'les-css-1',
        learningObjectiveId: 'LO-CSS-1.3',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'Bộ chọn nào sau đây có trọng số ưu tiên Specificity cao nhất trong CSS?',
        options: [
          { id: 'a', text: 'Bộ chọn thẻ: p' },
          { id: 'b', text: 'Bộ chọn class: .highlight' },
          { id: 'c', text: 'Bộ chọn ID: #main-header' },
          { id: 'd', text: 'Bộ chọn toàn cục: *' }
        ],
        correctAnswer: 'c',
        explanation: 'Bộ chọn ID có giá trị Specificity là 100 điểm, vượt trội hơn Class (10 điểm), Thẻ (1 điểm) và Dấu sao (0 điểm).',
        relatedLessonId: 'les-css-1'
      }
    ]
  },
  summary: [
    'Quy tắc CSS gồm Selector và Khối khai báo { property: value; }.',
    'Ưu tiên dùng External Stylesheet (.css) kết nối bằng thẻ <link> để tối ưu tái sử dụng.',
    'Cơ chế Cascade giải quyết xung đột theo thứ tự: !important > Specificity > Thứ tự xuất hiện.',
    'Công thức Specificity: Inline (1000) > ID (100) > Class (10) > Element (1).'
  ],
  suggestedBookmarks: [
    'Bảng tính Specificity Calculator W3C',
    'Nguyên lý hoạt động của CSS Parsing & Render Tree trong Browser Engine'
  ]
};

// ============================================================================
// CSS 2: SELECTORS — BỘ CHỌN
// ============================================================================
export const LESSON_CSS_2: Lesson = {
  id: 'les-css-2',
  moduleId: 'mod-css-2',
  track: 'css',
  language: 'css',
  title: 'CSS 2. Selectors — Bộ chọn toàn diện (Combinators, Pseudo-classes & Elements)',
  order: 2,
  durationMinutes: 50,
  difficulty: 'Trung bình',
  prerequisites: [
    'Nắm vững cú pháp cơ bản và Specificity từ Bài CSS 1'
  ],
  learningObjectives: [
    {
      id: 'LO-CSS-2.1',
      code: 'LO-CSS-2.1',
      title: 'Làm chủ bộ chọn quan hệ (Combinators)',
      description: 'Phân biệt Con cháu (Descendant: space), Con trực tiếp (Child: >), Anh em kề cận (Adjacent: +), và Anh em thông thường (General: ~).',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    },
    {
      id: 'LO-CSS-2.2',
      code: 'LO-CSS-2.2',
      title: 'Lớp giả động (Pseudo-classes) và cấu trúc',
      description: 'Sử dụng :hover, :focus, :active, :checked, :disabled và các bộ chọn cấu trúc mạnh mẽ :first-child, :last-child, :nth-child(n).',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    },
    {
      id: 'LO-CSS-2.3',
      code: 'LO-CSS-2.3',
      title: 'Phần tử giả (Pseudo-elements) ::before & ::after',
      description: 'Tạo nội dung trang trí và hiệu ứng thị giác mà không cần thêm thẻ HTML thừa bằng ::before và ::after kèm thuộc tính content.',
      bloomLevel: 'Create',
      masteryPercentage: 86
    }
  ],
  sections: [
    {
      id: 'sec-css-2-1',
      lessonId: 'les-css-2',
      order: 1,
      conceptName: 'Các bộ chọn quan hệ Combinators: >, +, ~',
      title: '1. Bộ chọn quan hệ gia đình trong cây DOM',
      explanation: 'Trong CSS, các ký tự nối (Combinators) thể hiện mối quan hệ chính xác giữa các node:\n- Khoảng trắng (Descendant): Chọn TẤT CẢ con cháu ở mọi tầng sâu bên trong (ví dụ: div p).\n- Dấu lớn hơn > (Child selector): Chỉ chọn con TRỰC TIẾP ở cấp độ 1 ngay dưới cha (ví dụ: ul > li).\n- Dấu cộng + (Adjacent sibling): Chọn ngay phần tử anh em nằm KỀ CẬN NGAY SAU nó.\n- Dấu ngã ~ (General sibling): Chọn TẤT CẢ các anh em cùng cha nằm phía sau.',
      syntax: '/* Con trực tiếp */\nnav > a { font-weight: bold; }\n\n/* Anh em liền kề */\nh2 + p { font-size: 18px; }\n\n/* Bộ chọn thuộc tính */\ninput[type="email"] { border-color: blue; }',
      codeExample: `/* Chỉ chọn các li là con trực tiếp của ul menu */
ul.main-menu > li {
  display: inline-block;
  margin-right: 16px;
}

/* Định dạng đoạn văn mở đầu nằm ngay sau tiêu đề h1 */
h1 + p.lead {
  font-size: 20px;
  color: #334155;
}

/* Chọn mọi input có thuộc tính required */
input[required] {
  border-left: 3px solid #ef4444;
}`,
      lineByLineExplanation: [
        { line: 2, text: 'ul.main-menu > li không làm ảnh hưởng đến các li của menu con cấp 2 lồng bên trong.' },
        { line: 8, text: 'h1 + p.lead chỉ áp dụng cho đoạn văn đứng ngay sát sau h1.' },
        { line: 14, text: 'input[required] nhắm vào mọi ô bắt buộc nhập mà không cần đặt thêm class.' }
      ],
      commonMistakes: [
        'Dùng khoảng trắng (descendant) thay vì dấu > khiến các menu con đa cấp bị kế thừa sai kiểu dáng không mong muốn.',
        'Nhầm lẫn giữa dấu + (chỉ 1 phần tử ngay sau) và dấu ~ (toàn bộ phần tử sau).'
      ],
      whenToUse: 'Dùng dấu > cho Menu điều hướng; dùng + cho đoạn mở đầu bài viết (Drop cap/Lead paragraph); dùng bộ chọn thuộc tính cho Form controls.',
      whenNotToUse: 'Không viết chuỗi combinator quá sâu (như a > b > c > d > e) làm chậm hiệu năng render của trình duyệt.',
      realWorldUseCase: 'Hệ thống thiết kế UI kit phân biệt nút bấm trong thanh công cụ và nút bấm trong bảng biểu.'
    },
    {
      id: 'sec-css-2-2',
      lessonId: 'les-css-2',
      order: 2,
      conceptName: 'Pseudo-classes (:hover, :nth-child) & Pseudo-elements (::before, ::after)',
      title: '2. Lớp giả động và Phần tử giả trang trí',
      explanation: '1. Pseudo-classes (dấu 2 chấm đơn :): Nhắm vào trạng thái đặc biệt của phần tử:\n   - Tương tác: :hover (rê chuột), :focus (đang chọn), :active (đang nhấn giữ).\n   - Trạng thái form: :checked, :disabled, :valid, :invalid.\n   - Vị trí: :first-child, :last-child, :nth-child(2n) (chẵn/lẻ để tô màu so le bảng zebra).\n2. Pseudo-elements (dấu 2 chấm đôi ::): Tạo ra phần tử ảo trong cây render:\n   - ::before và ::after: Bắt buộc phải có thuộc tính content: "" để chèn icon, gạch chân chuyển động hoặc hiệu ứng overlay mà không làm bẩn mã HTML.',
      syntax: 'button:hover { background-color: darkblue; }\ntr:nth-child(even) { background-color: #f8fafc; }\n.card::before { content: ""; display: block; }',
      codeExample: `/* Hiệu ứng rê chuột lên nút bấm */
.btn-primary {
  background: #3b82f6;
  color: white;
  transition: background 0.2s;
}
.btn-primary:hover {
  background: #1d4ed8;
}

/* Tô màu so le các dòng bảng (Zebra stripe) */
tbody tr:nth-child(even) {
  background-color: #f1f5f9;
}

/* Tạo gạch chân trang trí bằng ::after */
.heading-decorated {
  position: relative;
  display: inline-block;
}
.heading-decorated::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 3px;
  background: #f59e0b;
}`,
      lineByLineExplanation: [
        { line: 6, text: ':hover đổi màu nền nút khi người dùng di chuột qua.' },
        { line: 11, text: ':nth-child(even) tự động chọn các dòng chẵn 2, 4, 6, 8.' },
        { line: 19, text: 'content: "" là bắt buộc để kích hoạt phần tử giả ::after.' },
        { line: 24, text: 'Vẽ vạch gạch chân màu vàng hổ phách dày 3px phía dưới tiêu đề.' }
      ],
      commonMistakes: [
        'Quên thuộc tính content: "" trong ::before/::after khiến phần tử hoàn toàn không hiển thị.',
        'Viết sai thứ tự các trạng thái liên kết (Quy tắc chuẩn: :link -> :visited -> :hover -> :active).'
      ],
      whenToUse: 'Dùng :nth-child cho bảng số liệu, danh sách sản phẩm; dùng ::before/::after cho icon trang trí, huy hiệu badge, thanh gạch chân.',
      whenNotToUse: 'Không dùng ::before/::after để chèn nội dung văn bản thông tin quan trọng cần hỗ trợ máy tìm kiếm (SEO).',
      realWorldUseCase: 'Hàng triệu website sử dụng ::before/::after để tạo hiệu ứng gạch chân chuyển động khi hover menu.'
    }
  ],
  predictOutputs: [
    {
      id: 'po-css-2-1',
      question: 'Quy tắc CSS `li:nth-child(2n + 1)` sẽ chọn những phần tử danh sách nào?',
      code: `<ul>
  <li>Mục 1</li>
  <li>Mục 2</li>
  <li>Mục 3</li>
  <li>Mục 4</li>
  <li>Mục 5</li>
</ul>`,
      options: [
        'A. Chọn các mục vị trí chẵn: Mục 2, Mục 4',
        'B. Chọn các mục vị trí lẻ (odd): Mục 1, Mục 3, Mục 5',
        'C. Chỉ chọn duy nhất Mục 1',
        'D. Chọn toàn bộ tất cả 5 mục'
      ],
      correctAnswer: 'B. Chọn các mục vị trí lẻ (odd): Mục 1, Mục 3, Mục 5',
      explanation: 'Công thức toán 2n + 1 với n=0, 1, 2... lần lượt cho ra các giá trị 1, 3, 5... tương đương với từ khóa :nth-child(odd).',
      hint: 'Thử thay n=0 vào công thức: 2*(0) + 1 = 1; n=1: 2*(1) + 1 = 3.'
    }
  ],
  interactivePractice: {
    id: 'ip-css-2',
    title: 'Thực hành tạo hiệu ứng Hover và Tô màu so le',
    description: 'Viết mã CSS đổi màu nút ".btn:hover" sang màu nền "#1e3a8a", và đổi màu các dòng chẵn "tr:nth-child(even)" sang "#f8fafc".',
    starterCode: `.btn:hover {
  background-color: #1e3a8a;
  color: #ffffff;
}

tr:nth-child(even) {
  background-color: #f8fafc;
}`,
    expectedConsoleOutput: '#1e3a8a',
    hint: 'Sử dụng :hover cho nút bấm và :nth-child(even) cho dòng bảng.',
    language: 'css'
  },
  exercises: {
    basic: {
      id: 'ex-css-2-basic',
      lessonId: 'les-css-2',
      title: 'Tạo kiểu liên kết khi rê chuột (:hover)',
      difficulty: 'basic',
      learningObjectiveIds: ['LO-CSS-2.2'],
      description: 'Viết quy tắc cho thẻ a có "text-decoration: none;" và khi "a:hover" thì chữ đổi sang màu "#2563eb" kèm "text-decoration: underline;".',
      starterCode: `a {
  text-decoration: none;
}
a:hover {
  color: #2563eb;
  text-decoration: underline;
}`,
      solutionCode: `a {\n  text-decoration: none;\n}\na:hover {\n  color: #2563eb;\n  text-decoration: underline;\n}`,
      testCases: [
        {
          id: 'tc-c2-1',
          description: 'Kiểm tra a:hover có underline',
          expectedOutput: '#2563eb'
        }
      ],
      hints: ['Dùng cú pháp a:hover để bắt sự kiện chuột.'],
      explanation: ':hover mang lại phản hồi thị giác tức thì cho người dùng.',
      language: 'css'
    },
    intermediate: {
      id: 'ex-css-2-mid',
      lessonId: 'les-css-2',
      title: 'Nhắm mục tiêu Con trực tiếp và Thuộc tính Form',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO-CSS-2.1'],
      description: 'Viết bộ chọn "nav > a" có "padding: 8px 12px;", và "input[type=\\"text\\"]:focus" có "border-color: #3b82f6; outline: none;".',
      starterCode: `nav > a {
  padding: 8px 12px;
}
input[type="text"]:focus {
  border-color: #3b82f6;
  outline: none;
}`,
      solutionCode: `nav > a {\n  padding: 8px 12px;\n}\ninput[type="text"]:focus {\n  border-color: #3b82f6;\n  outline: none;\n}`,
      testCases: [
        {
          id: 'tc-c2-2',
          description: 'Kiểm tra con trực tiếp nav > a và input:focus',
          expectedOutput: '#3b82f6'
        }
      ],
      hints: ['Sử dụng dấu > cho con trực tiếp và :focus cho ô nhập liệu đang được chọn.'],
      explanation: 'Kết hợp bộ chọn giúp giảm thiểu tối đa việc phải gán thủ công quá nhiều class.',
      language: 'css'
    },
    challenge: {
      id: 'ex-css-2-adv',
      lessonId: 'les-css-2',
      title: 'Tạo dấu chấm đỏ thông báo với phần tử giả ::before',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO-CSS-2.3'],
      description: 'Tạo class ".badge::before" có "content: \\"\\";", "width: 8px;", "height: 8px;", "background: #ef4444;", "border-radius: 50%;" và "display: inline-block; margin-right: 6px;".',
      starterCode: `.badge::before {
  content: "";
  display: inline-block;
  width: 8px;
  height: 8px;
  background-color: #ef4444;
  border-radius: 50%;
  margin-right: 6px;
}`,
      solutionCode: `.badge::before {\n  content: "";\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  background-color: #ef4444;\n  border-radius: 50%;\n  margin-right: 6px;\n}`,
      testCases: [
        {
          id: 'tc-c2-3',
          description: 'Kiểm tra pseudo-element ::before có content và border-radius 50%',
          expectedOutput: '#ef4444'
        }
      ],
      hints: ['Không bao giờ quên content: "" khi dùng ::before.'],
      explanation: 'Kỹ thuật dùng ::before tạo icon tròn thông báo trạng thái online/offline rất phổ biến.',
      language: 'css'
    }
  },
  quiz: {
    id: 'quiz-css-2',
    lessonId: 'les-css-2',
    title: 'Kiểm tra hiểu biết: Bộ chọn CSS',
    passingScore: 70,
    questions: [
      {
        id: 'q-c2-1',
        lessonId: 'les-css-2',
        learningObjectiveId: 'LO-CSS-2.3',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'Thuộc tính nào BẮT BUỘC phải có để một phần tử giả ::before hoặc ::after có thể hiển thị trên giao diện?',
        options: [
          { id: 'a', text: 'display: block;' },
          { id: 'b', text: 'content: "";' },
          { id: 'c', text: 'position: absolute;' },
          { id: 'd', text: 'z-index: 1;' }
        ],
        correctAnswer: 'b',
        explanation: 'Thuộc tính `content` là điều kiện tiên quyết kích hoạt việc tạo nút giả trong cây render. Nếu thiếu `content`, phần tử giả sẽ không tồn tại.',
        relatedLessonId: 'les-css-2'
      }
    ]
  },
  summary: [
    'Combinators: Con trực tiếp (>), con cháu (space), anh em liền kề (+), anh em cùng cấp (~).',
    'Pseudo-classes phản hồi trạng thái (:hover, :focus, :checked, :nth-child).',
    'Pseudo-elements (::before, ::after) tạo phần tử trang trí ảo, bắt buộc kèm thuộc tính content: "".',
    'Bộ chọn thuộc tính [attribute="value"] định kiểu chính xác cho Form và Links.'
  ],
  suggestedBookmarks: [
    'Tra cứu toàn bộ danh sách Pseudo-classes & Pseudo-elements MDN',
    'Công thức viết :nth-child(an + b) nâng cao'
  ]
};

// ============================================================================
// CSS 3: UNITS — ĐƠN VỊ ĐO LƯỜNG
// ============================================================================
export const LESSON_CSS_3: Lesson = {
  id: 'les-css-3',
  moduleId: 'mod-css-3',
  track: 'css',
  language: 'css',
  title: 'CSS 3. Units — Hệ thống đơn vị đo lường (px, rem, em, %, vw, vh, dvh)',
  order: 3,
  durationMinutes: 45,
  difficulty: 'Cơ bản',
  prerequisites: [
    'Hiểu khái niệm độ phân giải màn hình và responsive căn bản'
  ],
  learningObjectives: [
    {
      id: 'LO-CSS-3.1',
      code: 'LO-CSS-3.1',
      title: 'Phân biệt Đơn vị tuyệt đối (px) và Đơn vị tương đối (rem, em, %)',
      description: 'Hiểu tại sao đơn vị px gây hạn chế trợ năng khi người dùng phóng to font chữ trình duyệt, và tại sao rem là chuẩn vàng cho Web hiện đại.',
      bloomLevel: 'Understand',
      masteryPercentage: 94
    },
    {
      id: 'LO-CSS-3.2',
      code: 'LO-CSS-3.2',
      title: 'Làm chủ sự khác biệt cốt lõi: rem vs em',
      description: 'Phân biệt rem (dựa trên font-size của root <html>) và em (dựa trên font-size của phần tử cha trực tiếp), tránh lỗi lồng ghép cấp số nhân.',
      bloomLevel: 'Analyze',
      masteryPercentage: 90
    },
    {
      id: 'LO-CSS-3.3',
      code: 'LO-CSS-3.3',
      title: 'Đơn vị khung nhìn Viewport (vw, vh, dvh, svh)',
      description: 'Ứng dụng 100vw, 100vh và đơn vị mới 100dvh (Dynamic Viewport Height) giải quyết triệt để lỗi thanh địa chỉ trình duyệt trên điện thoại iOS/Android.',
      bloomLevel: 'Apply',
      masteryPercentage: 88
    }
  ],
  sections: [
    {
      id: 'sec-css-3-1',
      lessonId: 'les-css-3',
      order: 1,
      conceptName: 'Đơn vị font chữ tương đối: rem vs em',
      title: '1. Chuẩn vàng đơn vị rem và so sánh với em',
      explanation: 'Trong thiết kế web hiện đại, sử dụng pixel cố định (px) cho kích cỡ chữ là một thói quen xấu về Trợ năng (Accessibility) vì nó không tôn trọng cài đặt cỡ chữ mặc định của người khiếm thị.\n- rem (Root em): Luôn luôn tỷ lệ thuận với font-size của thẻ gốc <html> (mặc định trình duyệt là 16px). Do đó: 1rem = 16px, 1.5rem = 24px, 2rem = 32px. Cực kỳ ổn định và nhất quán toàn trang!\n- em: Tỷ lệ thuận với font-size của CHÍNH PHẦN TỬ ĐÓ hoặc phần tử CHA gần nhất. Khi lồng nhau nhiều cấp, em có xu hướng nhân dồn (Compounding effect) khiến chữ ngày càng to hoặc ngày càng bé.',
      syntax: '/* html mặc định 16px */\nh1 { font-size: 2rem; } /* 32px */\np { font-size: 1rem; } /* 16px */\n.btn { padding: 0.5em 1em; } /* tỷ lệ theo font-size của button */',
      codeExample: `/* Đặt chuẩn rem nhất quán trên toàn trang */
html {
  font-size: 16px; /* Cỡ chữ gốc */
}

h1 {
  font-size: 2.5rem; /* 2.5 * 16px = 40px */
  margin-bottom: 1rem; /* 16px */
}

/* Nút bấm dùng em cho padding để tự động co giãn theo cỡ chữ */
.btn {
  font-size: 1rem;
  padding: 0.5em 1.2em; /* Khi đổi font-size, padding tự giãn theo */
}
.btn-large {
  font-size: 1.25rem; /* Padding tự động to lên tỷ lệ thuận */
}`,
      lineByLineExplanation: [
        { line: 2, text: 'html đặt font-size gốc làm mốc chuẩn cho toàn bộ đơn vị rem.' },
        { line: 6, text: '2.5rem đảm bảo chữ phóng to tự động nếu người dùng đổi cấu hình thiết bị sang 20px.' },
        { line: 13, text: 'Dùng em cho padding của nút bấm là một kỹ thuật Clean Code kinh điển.' }
      ],
      commonMistakes: [
        'Dùng em cho font-size ở các danh sách menu lồng nhau (ul li ul li), làm các cấp con bị phóng đại hoặc thu nhỏ liên tiếp.',
        'Hardcode mọi thứ bằng px khiến trang web không thể đáp ứng người dùng bật chế độ phóng to chữ trên điện thoại.'
      ],
      whenToUse: 'Dùng rem cho font-size, margin, padding, border-radius; dùng em cho padding của components co giãn theo chữ (buttons, badges).',
      whenNotToUse: 'Không dùng rem cho đường viền mỏng (hãy giữ border: 1px solid để tránh bị mất viền do làm tròn số).',
      realWorldUseCase: 'Khung thiết kế Tailwind CSS quy đổi toàn bộ khoảng cách spacing và font chữ theo chuẩn rem.'
    },
    {
      id: 'sec-css-3-2',
      lessonId: 'les-css-3',
      order: 2,
      conceptName: 'Đơn vị Khung nhìn: vw, vh và Cuộc cách mạng dvh / svh trên Mobile',
      title: '2. Làm chủ đơn vị Viewport và giải quyết lỗi 100vh trên Di động',
      explanation: 'Đơn vị Viewport tính theo phần trăm kích thước cửa sổ trình duyệt:\n- 1vw = 1% chiều rộng viewport (100vw = trọn vẹn bề ngang màn hình).\n- 1vh = 1% chiều cao viewport.\nTuy nhiên, trên trình duyệt điện thoại (Safari iOS, Chrome Android), khi người dùng cuộn, thanh địa chỉ URL sẽ tự động thu nhỏ lại, khiến đơn vị 100vh truyền thống bị che khuất một phần dưới đáy màn hình!\nĐể khắc phục, CSS hiện đại giới thiệu bộ ba đơn vị mới:\n- svh (Small Viewport Height): Chiều cao khi thanh địa chỉ mở to nhất.\n- lvh (Large Viewport Height): Chiều cao khi thanh địa chỉ thu gọn nhỏ nhất.\n- dvh (Dynamic Viewport Height): Tự động co giãn theo thời gian thực khi thanh địa chỉ co/giãn!',
      syntax: '/* Toàn màn hình chuẩn di động hiện đại */\n.hero-section {\n  min-height: 100dvh;\n  width: 100vw;\n}',
      codeExample: `/* Hero banner tràn toàn màn hình chống lỗi Safari iOS */
.hero-banner {
  width: 100%;
  min-height: 100vh; /* Fallback cho trình duyệt cũ */
  min-height: 100dvh; /* Chuẩn động hiện đại không bị che nút */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Modal che phủ toàn màn hình */
.modal-overlay {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100dvh;
  background: rgba(0, 0, 0, 0.5);
}`,
      lineByLineExplanation: [
        { line: 4, text: 'min-height: 100vh làm giá trị dự phòng (fallback) cho trình duyệt chưa hỗ trợ dvh.' },
        { line: 5, text: 'min-height: 100dvh đảm bảo nội dung dưới chân không bị che khuất bởi thanh công cụ Safari.' },
        { line: 13, text: 'inset: 0 kết hợp 100dvh tạo lớp phủ bóng tối modal chính xác 100%.' }
      ],
      commonMistakes: [
        'Dùng 100vw cho container trong khi trang có thanh cuộn dọc (scroll bar), khiến trang bị tràn ngang và sinh ra thanh cuộn ngang khó chịu.',
        'Lạm dụng vh cho font-size khiến chữ trên màn hình siêu dài hoặc siêu ngắn bị méo mó kỳ dị.'
      ],
      whenToUse: 'Dùng 100dvh cho Hero Section, màn hình đăng nhập Splash Screen, Drawer Navigation và Modal Overlay trên di động.',
      whenNotToUse: 'Tránh dùng 100vw bừa bãi khi `width: 100%` an toàn hơn nhiều trong việc tránh thanh cuộn ngang.',
      realWorldUseCase: 'Màn hình Story toàn màn hình của Instagram và TikTok trên nền tảng Web Mobile.'
    }
  ],
  predictOutputs: [
    {
      id: 'po-css-3-1',
      question: 'Nếu thẻ `html` có font-size mặc định là 16px, thì một phần tử có `font-size: 1.5rem` và `padding: 2rem` sẽ có giá trị quy đổi sang pixel lần lượt là bao nhiêu?',
      code: `html { font-size: 16px; }
.box {
  font-size: 1.5rem;
  padding: 2rem;
}`,
      options: [
        'A. font-size: 24px và padding: 32px',
        'B. font-size: 16px và padding: 32px',
        'C. font-size: 24px và padding: 16px',
        'D. font-size: 15px và padding: 20px'
      ],
      correctAnswer: 'A. font-size: 24px và padding: 32px',
      explanation: 'Vì rem luôn tính theo font-size gốc của html (16px), nên: font-size = 1.5 * 16px = 24px; padding = 2 * 16px = 32px.',
      hint: 'Hãy nhân giá trị rem với 16px gốc.'
    }
  ],
  interactivePractice: {
    id: 'ip-css-3',
    title: 'Thực hành sử dụng đơn vị rem và dynamic viewport (dvh)',
    description: 'Viết mã CSS thiết lập tiêu đề có font-size: 2rem, margin-bottom: 1rem và khối hero có min-height: 100dvh.',
    starterCode: `h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.hero {
  min-height: 100dvh;
  width: 100%;
}`,
    expectedConsoleOutput: '2rem',
    hint: 'Sử dụng font-size: 2rem và min-height: 100dvh.',
    language: 'css'
  },
  exercises: {
    basic: {
      id: 'ex-css-3-basic',
      lessonId: 'les-css-3',
      title: 'Quy đổi kiểu chữ theo chuẩn rem',
      difficulty: 'basic',
      learningObjectiveIds: ['LO-CSS-3.1'],
      description: 'Viết mã CSS cho thẻ <h2> có cỡ chữ tương đương 32px (dùng rem với gốc 16px) và khoảng cách dòng line-height: 1.4.',
      starterCode: `h2 {
  font-size: 2rem;
  line-height: 1.4;
}`,
      solutionCode: `h2 {\n  font-size: 2rem;\n  line-height: 1.4;\n}`,
      testCases: [
        {
          id: 'tc-c3-1',
          description: 'Kiểm tra h2 font-size 2rem',
          expectedOutput: '2rem'
        }
      ],
      hints: ['32px chia cho 16px gốc bằng 2rem.'],
      explanation: 'Dùng rem là tiêu chuẩn vàng của thiết kế web tiếp cận (A11y).',
      language: 'css'
    },
    intermediate: {
      id: 'ex-css-3-mid',
      lessonId: 'les-css-3',
      title: 'Nút bấm co giãn tỷ lệ với đơn vị em',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO-CSS-3.2'],
      description: 'Tạo class ".badge" có font-size: 0.875rem, padding trên dưới 0.25em, padding trái phải 0.75em và bo góc border-radius: 9999px.',
      starterCode: `.badge {
  font-size: 0.875rem;
  padding: 0.25em 0.75em;
  border-radius: 9999px;
}`,
      solutionCode: `.badge {\n  font-size: 0.875rem;\n  padding: 0.25em 0.75em;\n  border-radius: 9999px;\n}`,
      testCases: [
        {
          id: 'tc-c3-2',
          description: 'Kiểm tra badge sử dụng kết hợp rem và em',
          expectedOutput: '0.875rem'
        }
      ],
      hints: ['Sử dụng cú pháp padding: 0.25em 0.75em;.'],
      explanation: 'em giúp tỷ lệ đệm bên trong badge luôn tương thích khi thay đổi cỡ chữ.',
      language: 'css'
    },
    challenge: {
      id: 'ex-css-3-adv',
      lessonId: 'les-css-3',
      title: 'Thiết kế Fullscreen Hero Screen chống lỗi Mobile',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO-CSS-3.3'],
      description: 'Viết class ".app-screen" có width: 100%, min-height: 100vh, min-height: 100dvh và padding: 2rem.',
      starterCode: `.app-screen {
  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;
  padding: 2rem;
}`,
      solutionCode: `.app-screen {\n  width: 100%;\n  min-height: 100vh;\n  min-height: 100dvh;\n  padding: 2rem;\n}`,
      testCases: [
        {
          id: 'tc-c3-3',
          description: 'Kiểm tra app-screen có min-height 100dvh',
          expectedOutput: '100dvh'
        }
      ],
      hints: ['Khai báo 100vh trước làm fallback rồi đến 100dvh.'],
      explanation: 'Kỹ thuật progressive enhancement kết hợp fallback đảm bảo tương thích 100% thiết bị.',
      language: 'css'
    }
  },
  quiz: {
    id: 'quiz-css-3',
    lessonId: 'les-css-3',
    title: 'Kiểm tra hiểu biết: Đơn vị đo lường trong CSS',
    passingScore: 70,
    questions: [
      {
        id: 'q-c3-1',
        lessonId: 'les-css-3',
        learningObjectiveId: 'LO-CSS-3.3',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'Đơn vị nào sau đây được W3C giới thiệu để giải quyết hiện tượng thanh địa chỉ trên trình duyệt di động (Safari/Chrome) che khuất nội dung dưới đáy màn hình?',
        options: [
          { id: 'a', text: '100vh' },
          { id: 'b', text: '100vw' },
          { id: 'c', text: '100dvh (Dynamic Viewport Height)' },
          { id: 'd', text: '100%' }
        ],
        correctAnswer: 'c',
        explanation: 'Đơn vị `dvh` (Dynamic Viewport Height) tự động tính toán lại chiều cao chính xác theo thời gian thực khi thanh địa chỉ di động mở rộng hoặc thu gọn.',
        relatedLessonId: 'les-css-3'
      }
    ]
  },
  summary: [
    'Ưu tiên dùng rem cho font-size và khoảng cách layout để đảm bảo khả năng tiếp cận trợ năng.',
    'Dùng em cho padding của các component co giãn tỷ lệ theo kích cỡ chữ.',
    'Thay thế 100vh cũ bằng 100dvh trên các giao diện toàn màn hình của điện thoại di động.',
    'Tránh dùng 100vw nếu trang có thanh cuộn dọc để ngăn hiện tượng tràn ngang.'
  ],
  suggestedBookmarks: [
    'Đặc tả kỹ thuật CSS Values and Units Level 4',
    'Hướng dẫn sử dụng dvh, svh, lvh trên iOS Safari'
  ]
};
