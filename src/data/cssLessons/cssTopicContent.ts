import { Lesson } from '../../types';
import { CSS_TOPICS_LIST } from '../cssLessonsData';

// Generates rich, highly tailored lesson content for each of the 34 CSS topics
export function buildCssLessonForTopic(topicNumber: number): Lesson {
  const topic = CSS_TOPICS_LIST.find(t => t.topicNumber === topicNumber) || CSS_TOPICS_LIST[0];
  const lessonId = `les-css-${topic.topicNumber}`;
  
  // Find moduleId based on topicNumber
  let moduleId = 'mod-css-1';
  if (topicNumber >= 6 && topicNumber <= 9) moduleId = 'mod-css-2';
  else if (topicNumber >= 10 && topicNumber <= 13) moduleId = 'mod-css-3';
  else if (topicNumber >= 14 && topicNumber <= 18) moduleId = 'mod-css-4';
  else if (topicNumber >= 19 && topicNumber <= 23) moduleId = 'mod-css-5';
  else if (topicNumber >= 24 && topicNumber <= 28) moduleId = 'mod-css-6';
  else if (topicNumber >= 29 && topicNumber <= 31) moduleId = 'mod-css-7';
  else if (topicNumber >= 32) moduleId = 'mod-css-8';

  // Topic-specific curriculum content templates
  const contentMap: Record<number, {
    concepts: string[];
    syntax: string;
    codeExample: string;
    demoHtml: string;
    starterCss: string;
    expectedOutput: string;
    practiceHint: string;
    testCaseCheck: string;
    quizQuestion: string;
    quizOptions: string[];
    quizAnswer: string;
    quizExplanation: string;
  }> = {
    1: {
      concepts: ['Cú pháp quy tắc CSS (Selector, Property, Value)', '3 phương thức nhúng: External, Internal, Inline', 'Cơ chế Cascade xếp tầng & Trọng số Specificity'],
      syntax: 'selector {\n  property: value;\n}',
      codeExample: '/* Định dạng tiêu đề chính */\nh1 {\n  color: #1e293b;\n  font-size: 28px;\n  text-align: center;\n}',
      demoHtml: '<div class="preview-box">\n  <h1>Khám phá CSS</h1>\n  <p>CSS điều khiển toàn bộ diện mạo của trang web.</p>\n</div>',
      starterCss: '/* Thêm màu xanh đậm và căn giữa cho h1 */\nh1 {\n  color: #2563eb;\n  text-align: center;\n}',
      expectedOutput: 'color: #2563eb',
      practiceHint: 'Đặt thuộc tính color: #2563eb và text-align: center cho thẻ h1.',
      testCaseCheck: 'color: #2563eb',
      quizQuestion: 'Khi một phần tử chịu tác động của cả External CSS và Inline style, kiểu nào sẽ được ưu tiên cao hơn?',
      quizOptions: ['Inline style (viết trực tiếp trên thẻ style="...")', 'External CSS (file .css liên kết ngoài)', 'Internal CSS (<style> trong thẻ head)', 'Quy tắc nào viết ở dòng lớn hơn sẽ thắng'],
      quizAnswer: 'Inline style (viết trực tiếp trên thẻ style="...")',
      quizExplanation: 'Inline style có trọng số Specificity cao hơn (1,0,0,0) so với External hay Internal CSS (0,0,x,x).'
    },
    2: {
      concepts: ['Bộ chọn cơ bản: Thẻ (tag), Lớp (.class), Định danh (#id)', 'Bộ chọn kết hợp: con cháu, con trực tiếp >, liền kề +', 'Pseudo-classes hiện đại: :hover, :focus, :has, :is'],
      syntax: '/* Class selector */\n.btn { padding: 8px 16px; }\n/* Pseudo-class */\n.btn:hover { background-color: #1d4ed8; }',
      codeExample: '.card {\n  background: #ffffff;\n  border-radius: 8px;\n}\n.card:hover {\n  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n}\n.card > .title {\n  font-weight: 700;\n}',
      demoHtml: '<div class="card">\n  <h3 class="title">Thẻ Sản Phẩm</h3>\n  <button class="btn">Mua ngay</button>\n</div>',
      starterCss: '.btn {\n  background-color: #3b82f6;\n  color: white;\n  padding: 8px 16px;\n  border-radius: 6px;\n}\n.btn:hover {\n  background-color: #1d4ed8;\n}',
      expectedOutput: 'background-color: #1d4ed8',
      practiceHint: 'Thêm hiệu ứng hover đổi màu nền cho nút .btn',
      testCaseCheck: 'background-color: #1d4ed8',
      quizQuestion: 'Bộ chọn nào sau đây có trọng số ưu tiên Specificity cao nhất?',
      quizOptions: ['#main-nav (ID Selector)', '.nav-item (Class Selector)', 'nav a (Tag Selector)', '* (Universal Selector)'],
      quizAnswer: '#main-nav (ID Selector)',
      quizExplanation: 'ID Selector có trọng số (0,1,0,0) cao hơn nhiều so với Class (0,0,1,0) hoặc Tag (0,0,0,1).'
    },
    3: {
      concepts: ['Đơn vị tuyệt đối (px) vs tương đối (rem, em, %, vw, vh)', 'Tại sao rem là chuẩn vàng cho Typography', 'Viewport Units (100vw, 100vh, 100dvh) và đơn vị ký tự ch'],
      syntax: 'html { font-size: 16px; }\nh1 { font-size: 2rem; /* = 32px */ }\n.hero { min-height: 100vh; }',
      codeExample: 'body {\n  font-size: 1rem;\n}\n.container {\n  max-width: 65ch; /* Độ rộng tối ưu đọc sách */\n  margin-inline: auto;\n  padding: 1.5rem;\n}',
      demoHtml: '<div class="container">\n  <h2>Typography với rem</h2>\n  <p>Đoạn văn tự co giãn linh hoạt theo cài đặt của người dùng.</p>\n</div>',
      starterCss: 'h2 {\n  font-size: 2rem;\n  margin-bottom: 1rem;\n}\np {\n  font-size: 1.125rem;\n  line-height: 1.6;\n}',
      expectedOutput: 'font-size: 2rem',
      practiceHint: 'Đặt kích thước font h2 là 2rem và margin-bottom 1rem.',
      testCaseCheck: 'font-size: 2rem',
      quizQuestion: 'Nếu thẻ <html> có font-size mặc định là 16px, thì giá trị 1.5rem tương đương bao nhiêu pixel?',
      quizOptions: ['24px', '20px', '32px', '18px'],
      quizAnswer: '24px',
      quizExplanation: '1.5rem = 1.5 * 16px = 24px.'
    },
    4: {
      concepts: ['Vấn đề xung đột Specificity trong CSS truyền thống', 'Quy tắc @layer phân chia tầng: reset, base, components, utilities', 'Kiến trúc CSS quy mô lớn với Cascade Layers'],
      syntax: '@layer reset, base, components;\n\n@layer components {\n  .btn { background: blue; }\n}',
      codeExample: '@layer reset {\n  * { margin: 0; box-sizing: border-box; }\n}\n@layer components {\n  .card { padding: 16px; background: white; }\n}',
      demoHtml: '<div class="card">\n  <p>Nội dung áp dụng @layer components.</p>\n</div>',
      starterCss: '@layer components {\n  .card {\n    padding: 20px;\n    background: #f8fafc;\n    border: 1px solid #e2e8f0;\n  }\n}',
      expectedOutput: '@layer components',
      practiceHint: 'Định nghĩa quy tắc bên trong @layer components.',
      testCaseCheck: '@layer components',
      quizQuestion: 'Trong Cascade Layers, quy tắc nằm ở layer được khai báo sau cùng sẽ có độ ưu tiên như thế nào?',
      quizOptions: ['Ưu tiên cao hơn các layer khai báo phía trước', 'Ưu tiên thấp hơn các layer phía trước', 'Bị vô hiệu hóa hoàn toàn', 'Bằng nhau và phụ thuộc vào class'],
      quizAnswer: 'Ưu tiên cao hơn các layer khai báo phía trước',
      quizExplanation: 'Thứ tự layer đứng sau ghi đè lên layer đứng trước mà không quan tâm độ phức tạp selector.'
    },
    5: {
      concepts: ['Native CSS Nesting chuẩn W3C (không cần Sass)', 'Sử dụng ký tự đại diện & cho hover và modifier', 'Lồng media queries và pseudo-elements bên trong selector'],
      syntax: '.card {\n  padding: 16px;\n  & .title { font-weight: bold; }\n  &:hover { box-shadow: 0 4px 6px rgba(0,0,0,0.1); }\n}',
      codeExample: '.button {\n  background: #4f46e5;\n  color: white;\n  &:hover {\n    background: #4338ca;\n  }\n  & > .icon {\n    margin-right: 8px;\n  }\n}',
      demoHtml: '<button class="button">\n  <span class="icon">★</span> Bấm vào đây\n</button>',
      starterCss: '.button {\n  background: #4f46e5;\n  color: white;\n  padding: 10px 20px;\n  border-radius: 8px;\n  &:hover {\n    background: #4338ca;\n  }\n}',
      expectedOutput: '&:hover',
      practiceHint: 'Viết cú pháp lồng &:hover bên trong khối .button.',
      testCaseCheck: '&:hover',
      quizQuestion: 'Ký tự & trong cú pháp CSS Nesting đại diện cho điều gì?',
      quizOptions: ['Bộ chọn của phần tử cha trực tiếp chứa nó', 'Toàn bộ thẻ HTML trên trang', 'Toán tử logic AND', 'Biến CSS tùy chỉnh'],
      quizAnswer: 'Bộ chọn của phần tử cha trực tiếp chứa nó',
      quizExplanation: '& tham chiếu tới bộ chọn của phần tử cha bên ngoài, ví dụ &:hover tương đương .button:hover.'
    },
    6: {
      concepts: ['4 lớp của Box Model: Content, Padding, Border, Margin', 'Cứu tinh box-sizing: border-box chống vỡ layout', 'Hiện tượng nuốt lề Margin Collapsing và cách phòng tránh'],
      syntax: '* {\n  box-sizing: border-box;\n}\n.box {\n  width: 300px;\n  padding: 20px;\n  border: 2px solid #333;\n}',
      codeExample: '.box-model-demo {\n  box-sizing: border-box;\n  width: 280px;\n  padding: 16px;\n  border: 4px solid #6366f1;\n  margin: 12px auto;\n  background: #eef2ff;\n}',
      demoHtml: '<div class="box-model-demo">\n  <strong>Hộp Box Model</strong>\n  <p>Kích thước tổng chiều rộng luôn chuẩn xác 280px.</p>\n</div>',
      starterCss: '.box-model-demo {\n  box-sizing: border-box;\n  width: 280px;\n  padding: 20px;\n  border: 3px solid #3b82f6;\n}',
      expectedOutput: 'box-sizing: border-box',
      practiceHint: 'Áp dụng box-sizing: border-box cho .box-model-demo để padding không làm tăng chiều rộng hộp.',
      testCaseCheck: 'box-sizing: border-box',
      quizQuestion: 'Khi chưa đặt box-sizing: border-box, một thẻ có width: 200px, padding: 20px, border: 5px sẽ có tổng chiều rộng hiển thị là bao nhiêu?',
      quizOptions: ['250px (200 + 40 + 10)', '200px', '225px', '210px'],
      quizAnswer: '250px (200 + 40 + 10)',
      quizExplanation: 'Ở chế độ content-box mặc định: Tổng width = width + padding trái/phải + border trái/phải = 200 + 40 + 10 = 250px.'
    },
    7: {
      concepts: ['Đường viền: border-width, border-style, border-color', 'Bo góc border-radius: hình tròn 50%, viên thuốc pill 9999px', 'Hiệu ứng chiều sâu box-shadow: offset-x, offset-y, blur, spread, color'],
      syntax: '.card {\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n}',
      codeExample: '.avatar {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  border: 3px solid #3b82f6;\n  box-shadow: 0 8px 16px rgba(59, 130, 246, 0.25);\n}',
      demoHtml: '<div class="badge-card">\n  <div class="avatar">IMG</div>\n  <p>Khung thẻ nổi khối 3D mềm mại.</p>\n</div>',
      starterCss: '.badge-card {\n  background: white;\n  padding: 24px;\n  border-radius: 16px;\n  box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1);\n  border: 1px solid #e2e8f0;\n}',
      expectedOutput: 'border-radius: 16px',
      practiceHint: 'Đặt border-radius: 16px và box-shadow tạo chiều sâu cho .badge-card.',
      testCaseCheck: 'border-radius: 16px',
      quizQuestion: 'Để tạo một hình tròn hoàn hảo từ một thẻ vuông (width = height), ta đặt border-radius là bao nhiêu?',
      quizOptions: ['50%', '100px', '25%', '9999px'],
      quizAnswer: '50%',
      quizExplanation: 'border-radius: 50% sẽ làm tròn đều 4 góc theo bán kính nửa cạnh, biến hình vuông thành hình tròn.'
    },
    8: {
      concepts: ['Phân biệt display: block, inline, inline-block', 'Cơ chế ẩn: display: none vs visibility: hidden vs opacity: 0', 'Tác động tới giải phóng bộ nhớ DOM và luồng tài liệu'],
      syntax: '.hidden { display: none; /* Biến mất khỏi DOM flow */ }\n.invisible { visibility: hidden; /* Vẫn giữ nguyên vị trí trống */ }',
      codeExample: '.nav-inline {\n  display: inline-block;\n  padding: 8px 16px;\n  background: #f1f5f9;\n  margin-right: 8px;\n}',
      demoHtml: '<nav>\n  <span class="nav-inline">Trang chủ</span>\n  <span class="nav-inline">Khóa học</span>\n  <span class="nav-inline">Liên hệ</span>\n</nav>',
      starterCss: '.nav-inline {\n  display: inline-block;\n  padding: 8px 16px;\n  border-radius: 6px;\n  background: #e2e8f0;\n}',
      expectedOutput: 'display: inline-block',
      practiceHint: 'Sử dụng display: inline-block để thiết lập được width, height và padding cho phần tử inline.',
      testCaseCheck: 'display: inline-block',
      quizQuestion: 'Thuộc tính nào giúp ẩn phần tử khỏi màn hình nhưng VẪN GIỮ NGUYÊN khoảng trống ban đầu trên trang?',
      quizOptions: ['visibility: hidden', 'display: none', 'opacity: 1', 'overflow: hidden'],
      quizAnswer: 'visibility: hidden',
      quizExplanation: 'visibility: hidden ẩn phần tử về mặt thị giác nhưng vẫn bảo lưu kích thước không gian chiếm chỗ trên layout.'
    },
    9: {
      concepts: ['Xử lý tràn nội dung: overflow: visible, hidden, scroll, auto', 'Cắt chữ dài 1 dòng: white-space: nowrap + text-overflow: ellipsis', 'Cắt văn bản nhiều dòng với -webkit-line-clamp'],
      syntax: '.truncate {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}',
      codeExample: '.clamp-2 {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}',
      demoHtml: '<div style="width: 200px; border: 1px solid #cbd5e1; padding: 8px;">\n  <p class="truncate">Đây là một dòng tiêu đề quá dài sẽ tự động cắt dấu ba chấm.</p>\n</div>',
      starterCss: '.truncate {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}',
      expectedOutput: 'text-overflow: ellipsis',
      practiceHint: 'Kết hợp cả 3 thuộc tính: white-space: nowrap, overflow: hidden và text-overflow: ellipsis.',
      testCaseCheck: 'text-overflow: ellipsis',
      quizQuestion: 'Để hiện thanh cuộn chỉ khi nội dung thực sự bị tràn, giá trị overflow nào là tối ưu nhất?',
      quizOptions: ['overflow: auto', 'overflow: scroll', 'overflow: visible', 'overflow: hidden'],
      quizAnswer: 'overflow: auto',
      quizExplanation: 'overflow: auto thông minh chỉ xuất hiện thanh cuộn khi nội dung vượt quá kích thước hộp.'
    },
    10: {
      concepts: ['Các hệ màu: Named Colors, HEX (#ffffff), RGB (rgb(255, 0, 0)), HSL', 'Hệ màu hiện đại cho màn hình Wide Gamut: OKLCH & Display P3', 'Kênh độ trong suốt Alpha (rgba, hsla) và hàm color-mix()'],
      syntax: 'color: #3b82f6;\nbackground: rgba(59, 130, 246, 0.15);\nborder-color: hsl(217, 91%, 60%);',
      codeExample: ':root {\n  --brand-oklch: oklch(0.65 0.24 265);\n}\n.hero {\n  color: var(--brand-oklch);\n  background: color-mix(in srgb, #3b82f6 20%, white);\n}',
      demoHtml: '<div class="color-card">\n  <h3>Hệ Màu Sắc Hiện Đại</h3>\n  <p>Màu sắc rực rỡ và hài hòa trên mọi thiết bị.</p>\n</div>',
      starterCss: '.color-card {\n  color: #1e293b;\n  background-color: rgba(59, 130, 246, 0.1);\n  border: 1px solid #3b82f6;\n  padding: 16px;\n  border-radius: 8px;\n}',
      expectedOutput: 'background-color: rgba(59, 130, 246, 0.1)',
      practiceHint: 'Đặt màu nền với độ trong suốt rgba(59, 130, 246, 0.1).',
      testCaseCheck: 'rgba(59, 130, 246, 0.1)',
      quizQuestion: 'Trong mã màu HEX #ff0000, thành phần màu đỏ chiếm giá trị nào?',
      quizOptions: ['ff (giá trị tối đa 255)', '00 (giá trị 0)', '80 (giá trị trung bình)', 'Không xác định'],
      quizAnswer: 'ff (giá trị tối đa 255)',
      quizExplanation: 'Cấu trúc HEX là #RRGGBB, trong đó hai ký tự đầu tượng trưng cho Red.'
    },
    11: {
      concepts: ['Tập hợp thuộc tính background-color, background-image, background-repeat', 'Căn chỉnh kích thước background-size: cover vs contain', 'Định vị background-position và hiệu ứng Parallax background-attachment: fixed'],
      syntax: '.hero-banner {\n  background: url("banner.jpg") no-repeat center center / cover;\n}',
      codeExample: '.hero {\n  min-height: 240px;\n  background-color: #0f172a;\n  background-size: cover;\n  background-position: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}',
      demoHtml: '<div class="hero">\n  <h2>Nền Banner Tuyệt Đẹp</h2>\n</div>',
      starterCss: '.hero {\n  background-color: #1e293b;\n  background-size: cover;\n  background-position: center;\n  padding: 40px;\n  color: white;\n  text-align: center;\n}',
      expectedOutput: 'background-size: cover',
      practiceHint: 'Thiết lập background-size: cover và background-position: center.',
      testCaseCheck: 'background-size: cover',
      quizQuestion: 'Giá trị background-size nào đảm bảo ảnh nền phủ kín toàn bộ vùng chứa mà không bị méo tỉ lệ?',
      quizOptions: ['cover', 'contain', '100% 100%', 'auto'],
      quizAnswer: 'cover',
      quizExplanation: 'cover phóng to ảnh giữ nguyên tỉ lệ để bao phủ toàn bộ vùng chứa, có thể bị cắt bớt phần thừa mép ngoài.'
    },
    12: {
      concepts: ['Chuyển màu tuyến tính linear-gradient() theo hướng độ deg/to right', 'Chuyển màu tỏa tròn radial-gradient()', 'Chuyển màu hình nón conic-gradient() ứng dụng vẽ Pie Chart'],
      syntax: '.gradient-bg {\n  background: linear-gradient(135deg, #6366f1 0%, #ec4899 100%);\n}',
      codeExample: '.text-gradient {\n  background: linear-gradient(to right, #f59e0b, #ef4444);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}',
      demoHtml: '<div class="gradient-box">\n  <h2 class="text-gradient">Chữ Chuyển Màu Ấn Tượng</h2>\n</div>',
      starterCss: '.gradient-box {\n  background: linear-gradient(135deg, #3b82f6, #8b5cf6);\n  padding: 30px;\n  border-radius: 12px;\n  color: white;\n  text-align: center;\n}',
      expectedOutput: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
      practiceHint: 'Dùng background: linear-gradient(135deg, #3b82f6, #8b5cf6) để phối màu tím xanh.',
      testCaseCheck: 'linear-gradient(135deg',
      quizQuestion: 'Để tạo một dải màu chuyển từ trái sang phải, ta dùng cú pháp nào sau đây?',
      quizOptions: ['linear-gradient(to right, color1, color2)', 'linear-gradient(to top, color1, color2)', 'radial-gradient(circle, color1, color2)', 'conic-gradient(color1, color2)'],
      quizAnswer: 'linear-gradient(to right, color1, color2)',
      quizExplanation: 'to right chỉ định hướng chuyển từ cạnh trái sang cạnh phải.'
    },
    13: {
      concepts: ['Bộ lọc hình ảnh CSS: filter (blur, brightness, contrast, grayscale)', 'Hiệu ứng bóng đổ chân thực filter: drop-shadow (xuyên thủng nền trong suốt PNG/SVG)', 'Hiệu ứng kính mờ thời thượng Frosted Glass với backdrop-filter: blur()'],
      syntax: '.glass {\n  background: rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(10px);\n}',
      codeExample: '.avatar-filtered {\n  filter: grayscale(100%);\n  transition: filter 0.3s;\n  &:hover {\n    filter: grayscale(0%);\n  }\n}',
      demoHtml: '<div style="background: linear-gradient(135deg, #f59e0b, #ef4444); padding: 30px;">\n  <div class="glass-card">\n    <h3>Hiệu ứng Glassmorphism</h3>\n    <p>Kính mờ xuyên thấu màu nền rực rỡ.</p>\n  </div>\n</div>',
      starterCss: '.glass-card {\n  background: rgba(255, 255, 255, 0.25);\n  backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.4);\n  border-radius: 12px;\n  padding: 20px;\n  color: white;\n}',
      expectedOutput: 'backdrop-filter: blur(12px)',
      practiceHint: 'Sử dụng backdrop-filter: blur(12px) để tạo kính mờ cao cấp.',
      testCaseCheck: 'backdrop-filter: blur(12px)',
      quizQuestion: 'Điểm khác biệt chính giữa filter: drop-shadow() và box-shadow là gì?',
      quizOptions: ['drop-shadow bám theo viền hình dáng thật của ảnh PNG/SVG trong suốt, còn box-shadow luôn đổ bóng theo hình chữ nhật', 'drop-shadow chỉ hỗ trợ màu đen', 'box-shadow nhanh hơn 100 lần', 'Không có điểm khác biệt'],
      quizAnswer: 'drop-shadow bám theo viền hình dáng thật của ảnh PNG/SVG trong suốt, còn box-shadow luôn đổ bóng theo hình chữ nhật',
      quizExplanation: 'drop-shadow là hàm của filter phân tích pixel thực tế, cho phép đổ bóng theo đường nét icon/PNG không có nền chữ nhật.'
    },
    14: {
      concepts: ['Font Stacks an toàn dự phòng và nhúng Google Fonts', 'Quy tắc phân cấp typographic: font-size, font-weight, line-height, letter-spacing', 'Căn chỉnh và biến đổi chữ: text-align, text-transform, text-decoration'],
      syntax: 'body {\n  font-family: Inter, system-ui, -apple-system, sans-serif;\n  line-height: 1.6;\n  letter-spacing: -0.01em;\n}',
      codeExample: 'h1 {\n  font-size: 2.25rem;\n  font-weight: 800;\n  line-height: 1.25;\n  letter-spacing: -0.025em;\n  text-transform: capitalize;\n}',
      demoHtml: '<div class="typography-demo">\n  <h1>Typography Chuyên Nghiệp</h1>\n  <p>Khoảng cách dòng line-height thoáng đãng giúp mắt người đọc không bị mỏi khi lướt web lâu.</p>\n</div>',
      starterCss: 'h1 {\n  font-family: system-ui, sans-serif;\n  font-weight: 700;\n  line-height: 1.3;\n}\np {\n  line-height: 1.6;\n  letter-spacing: 0.02em;\n}',
      expectedOutput: 'line-height: 1.6',
      practiceHint: 'Đặt line-height: 1.6 cho đoạn văn p.',
      testCaseCheck: 'line-height: 1.6',
      quizQuestion: 'Giá trị line-height khuyến nghị cho văn bản nội dung thông thường để đạt chuẩn trải nghiệm đọc tốt nhất là bao nhiêu?',
      quizOptions: ['Từ 1.5 đến 1.75 (không kèm đơn vị)', 'Chính xác 1.0', 'Từ 0.8 đến 1.0', '10px'],
      quizAnswer: 'Từ 1.5 đến 1.75 (không kèm đơn vị)',
      quizExplanation: 'Tỷ lệ 1.5 đến 1.75 tạo khoảng cách dòng hoàn hảo cho mắt dễ quét văn bản mà không bị nhảy dòng nhầm.'
    },
    15: {
      concepts: ['Chống méo ảnh với object-fit: cover, contain, fill', 'Định tâm tiêu điểm khung hình với object-position', 'Khóa tỷ lệ khung hình chuẩn với aspect-ratio (16/9 cho video, 1/1 cho avatar)'],
      syntax: 'img {\n  width: 100%;\n  aspect-ratio: 16 / 9;\n  object-fit: cover;\n}',
      codeExample: '.avatar {\n  width: 64px;\n  height: 64px;\n  object-fit: cover;\n  border-radius: 50%;\n}\n.video-container {\n  aspect-ratio: 16 / 9;\n}',
      demoHtml: '<div style="max-width: 320px;">\n  <img class="responsive-img" src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=400" alt="Demo" />\n</div>',
      starterCss: '.responsive-img {\n  width: 100%;\n  aspect-ratio: 16 / 9;\n  object-fit: cover;\n  border-radius: 8px;\n}',
      expectedOutput: 'object-fit: cover',
      practiceHint: 'Đặt aspect-ratio: 16 / 9 và object-fit: cover cho thẻ ảnh .responsive-img.',
      testCaseCheck: 'object-fit: cover',
      quizQuestion: 'Thuộc tính nào giúp ảnh giữ nguyên tỷ lệ gốc, phóng vừa vặn khung mà không bị bóp méo dẹt hình?',
      quizOptions: ['object-fit: cover', 'image-rendering: pixelated', 'display: inline', 'text-align: center'],
      quizAnswer: 'object-fit: cover',
      quizExplanation: 'object-fit: cover tương tự background-size: cover, giữ nguyên tỷ lệ và phủ kín toàn bộ khung thẻ img.'
    },
    16: {
      concepts: ['Tùy biến dấu đầu dòng list-style-type (disc, circle, decimal, none)', 'Tạo kiểu cho dấu đầu dòng với pseudo-element ::marker', 'Đánh số danh sách phân cấp tự động bằng CSS Counters (counter-reset, counter-increment)'],
      syntax: 'ol.steps {\n  counter-reset: step-counter;\n  list-style: none;\n}\nol.steps li::before {\n  counter-increment: step-counter;\n  content: "Bước " counter(step-counter) ": ";\n  font-weight: bold;\n}',
      codeExample: 'ul.clean-list {\n  list-style: none;\n  padding-left: 0;\n}\nul.clean-list li::marker {\n  color: #3b82f6;\n  font-size: 1.2em;\n}',
      demoHtml: '<ol class="steps">\n  <li>Tạo cấu trúc HTML</li>\n  <li>Viết quy tắc CSS định dạng</li>\n  <li>Kiểm tra trên trình duyệt</li>\n</ol>',
      starterCss: 'ol.steps {\n  list-style: none;\n  counter-reset: step-counter;\n  padding-left: 0;\n}\nol.steps li {\n  margin-bottom: 8px;\n}\nol.steps li::before {\n  counter-increment: step-counter;\n  content: "Bước " counter(step-counter) ": ";\n  color: #2563eb;\n  font-weight: bold;\n}',
      expectedOutput: 'counter-increment: step-counter',
      practiceHint: 'Sử dụng counter-increment: step-counter để tự động tăng số bước.',
      testCaseCheck: 'counter-increment: step-counter',
      quizQuestion: 'Pseudo-element nào trong CSS hiện đại cho phép định dạng màu sắc và kích thước riêng cho dấu chấm tròn/số của thẻ <li>?',
      quizOptions: ['::marker', '::before', '::first-letter', '::bullet'],
      quizAnswer: '::marker',
      quizExplanation: '::marker nhắm trực tiếp vào ký hiệu đầu dòng của danh sách mà không cần bọc thêm thẻ phụ.'
    },
    17: {
      concepts: ['Gộp viền đôi thành viền đơn gọn gàng: border-collapse: collapse', 'Hiệu ứng vằn ngựa Zebra Striping với :nth-child(even)', 'Ghim tiêu đề bảng cố định khi cuộn dữ liệu lớn với position: sticky th'],
      syntax: 'table {\n  border-collapse: collapse;\n  width: 100%;\n}\nth, td {\n  padding: 12px 16px;\n  border-bottom: 1px solid #e2e8f0;\n}\ntr:nth-child(even) {\n  background-color: #f8fafc;\n}',
      codeExample: 'th {\n  position: sticky;\n  top: 0;\n  background: #f1f5f9;\n  font-weight: 600;\n  text-align: left;\n}',
      demoHtml: '<table class="data-table">\n  <thead>\n    <tr><th>Tên</th><th>Vai trò</th><th>Trạng thái</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Nguyễn Văn A</td><td>Frontend</td><td>Active</td></tr>\n    <tr><td>Trần Thị B</td><td>Designer</td><td>Active</td></tr>\n  </tbody>\n</table>',
      starterCss: '.data-table {\n  border-collapse: collapse;\n  width: 100%;\n}\n.data-table th, .data-table td {\n  padding: 10px 14px;\n  border: 1px solid #cbd5e1;\n  text-align: left;\n}\n.data-table tr:nth-child(even) {\n  background-color: #f8fafc;\n}',
      expectedOutput: 'border-collapse: collapse',
      practiceHint: 'Thiết lập border-collapse: collapse cho thẻ table để các đường viền gộp lại thanh mảnh.',
      testCaseCheck: 'border-collapse: collapse',
      quizQuestion: 'Thuộc tính bắt buộc nào giúp loại bỏ khoảng cách thừa giữa các đường viền ô trong bảng?',
      quizOptions: ['border-collapse: collapse', 'border-spacing: 0', 'table-layout: fixed', 'border: none'],
      quizAnswer: 'border-collapse: collapse',
      quizExplanation: 'border-collapse: collapse gộp các viền liền kề của hàng và cột thành một đường viền duy nhất.'
    },
    18: {
      concepts: ['Định kiểu hiện đại cho input, textarea, select, button', 'Tùy biến màu checkbox và radio với accent-color: #4f46e5', 'Đường viền trợ năng :focus-visible và phản hồi trạng thái :valid, :invalid'],
      syntax: 'input[type="checkbox"] {\n  accent-color: #4f46e5;\n}\ninput:focus-visible {\n  outline: 2px solid #4f46e5;\n  outline-offset: 2px;\n}',
      codeExample: 'input:invalid:not(:placeholder-shown) {\n  border-color: #ef4444;\n}\ninput:valid:not(:placeholder-shown) {\n  border-color: #10b981;\n}',
      demoHtml: '<form class="styled-form">\n  <label>Email: <input type="email" placeholder="you@domain.com" required /></label>\n  <label><input type="checkbox" checked /> Đồng ý điều khoản</label>\n</form>',
      starterCss: 'input[type="email"] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n}\ninput[type="checkbox"] {\n  accent-color: #3b82f6;\n}\ninput:focus-visible {\n  outline: 2px solid #3b82f6;\n}',
      expectedOutput: 'accent-color: #3b82f6',
      practiceHint: 'Dùng accent-color: #3b82f6 để đổi màu tích chọn của checkbox.',
      testCaseCheck: 'accent-color: #3b82f6',
      quizQuestion: 'Thuộc tính CSS nào cho phép đổi màu dấu tích checkbox và nút radio gốc trên mọi trình duyệt hiện đại chỉ với 1 dòng mã?',
      quizOptions: ['accent-color', 'color', 'background-color', 'tint-color'],
      quizAnswer: 'accent-color',
      quizExplanation: 'accent-color là thuộc tính chuẩn giúp lập trình viên tùy biến màu sắc điểm nhấn của các phần tử form gốc.'
    },
    19: {
      concepts: ['5 chế độ định vị Position: static, relative, absolute, fixed, sticky', 'Quy tắc vàng: Thẻ cha relative làm neo tọa độ cho thẻ con absolute', 'Bí ẩn z-index và cơ chế Stacking Context (phân tầng hiển thị)'],
      syntax: '.parent { position: relative; }\n.badge { position: absolute; top: -8px; right: -8px; }\n.navbar { position: sticky; top: 0; z-index: 100; }',
      codeExample: '.sticky-header {\n  position: sticky;\n  top: 0;\n  background: white;\n  z-index: 50;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.05);\n}',
      demoHtml: '<div class="parent-card">\n  <span class="badge">MỚI</span>\n  <h3>Khóa học Lập trình Web</h3>\n</div>',
      starterCss: '.parent-card {\n  position: relative;\n  padding: 24px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n}\n.badge {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  background: #ef4444;\n  color: white;\n  padding: 2px 8px;\n  border-radius: 9999px;\n  font-size: 11px;\n}',
      expectedOutput: 'position: absolute',
      practiceHint: 'Đặt position: relative cho cha và position: absolute cho .badge.',
      testCaseCheck: 'position: absolute',
      quizQuestion: 'Khi một phần tử có position: absolute, tọa độ top/left của nó được tính theo đối tượng nào?',
      quizOptions: ['Phần tử tổ tiên gần nhất có position khác static (ví dụ relative)', 'Thẻ <body>', 'Mép màn hình trình duyệt (viewport)', 'Thẻ cha trực tiếp bất kể position là gì'],
      quizAnswer: 'Phần tử tổ tiên gần nhất có position khác static (ví dụ relative)',
      quizExplanation: 'Phần tử absolute tìm kiếm ngược lên cây DOM cho tới khi gặp tổ tiên đầu tiên có position khác static để làm gốc tọa độ.'
    },
    20: {
      concepts: ['Khái niệm Trục chính (Main Axis) & Trục phụ (Cross Axis)', 'Căn chỉnh trục chính justify-content & căn chỉnh trục phụ align-items', 'Phần tử con co giãn linh hoạt: flex-grow, flex-shrink, flex-basis và flex: 1'],
      syntax: '.flex-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n}',
      codeExample: '.toolbar {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n.search-input {\n  flex: 1; /* Chiếm trọn không gian trống còn lại */\n}',
      demoHtml: '<div class="nav-bar">\n  <div class="logo">LOGO</div>\n  <div class="nav-links"><span>Trang chủ</span> <span>Sản phẩm</span></div>\n  <button class="cta">Đăng ký</button>\n</div>',
      starterCss: '.nav-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 20px;\n  background: #1e293b;\n  color: white;\n}',
      expectedOutput: 'justify-content: space-between',
      practiceHint: 'Dùng display: flex, justify-content: space-between và align-items: center để dàn đều 2 bên.',
      testCaseCheck: 'justify-content: space-between',
      quizQuestion: 'Trong Flexbox mặc định (flex-direction: row), thuộc tính nào điều khiển căn chỉnh các phần tử theo trục ngang chính?',
      quizOptions: ['justify-content', 'align-items', 'align-content', 'place-items'],
      quizAnswer: 'justify-content',
      quizExplanation: 'justify-content điều phối sự phân bổ không gian dọc theo trục chính Main Axis.'
    },
    21: {
      concepts: ['Bố cục lưới 2 chiều: grid-template-columns, grid-template-rows', 'Đơn vị phân số linh hoạt fr và hàm repeat()', 'Kỹ thuật co giãn tự động responsive không cần media query: repeat(auto-fit, minmax(250px, 1fr))'],
      syntax: '.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n}',
      codeExample: '.layout {\n  display: grid;\n  grid-template-columns: 240px 1fr;\n  grid-template-areas:\n    "sidebar header"\n    "sidebar content";\n  min-height: 100vh;\n}',
      demoHtml: '<div class="card-grid">\n  <div class="card">Card 1</div>\n  <div class="card">Card 2</div>\n  <div class="card">Card 3</div>\n</div>',
      starterCss: '.card-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n.card {\n  background: #f1f5f9;\n  padding: 20px;\n  border-radius: 8px;\n  text-align: center;\n}',
      expectedOutput: 'grid-template-columns: repeat(3, 1fr)',
      practiceHint: 'Đặt display: grid và grid-template-columns: repeat(3, 1fr) với gap: 16px.',
      testCaseCheck: 'repeat(3, 1fr)',
      quizQuestion: 'Đơn vị 1fr trong CSS Grid đại diện cho điều gì?',
      quizOptions: ['Một phần phân số không gian còn trống (Fractional Unit) sau khi trừ đi các cột cố định', 'Một khung hình (Frame Rate)', 'Kích thước bằng 1 font size', 'Một phần trăm chiều rộng màn hình'],
      quizAnswer: 'Một phần phân số không gian còn trống (Fractional Unit) sau khi trừ đi các cột cố định',
      quizExplanation: 'fr là đơn vị phân số tỷ lệ chia đều không gian tự do còn lại giữa các rãnh track trong lưới.'
    },
    22: {
      concepts: ['Kỹ thuật Subgrid (kế thừa hàng/cột lưới từ Grid cha)', 'Dàn trang phong cách báo chí với Multi-column Layout (columns, column-gap, column-rule)', 'Xây dựng bố cục thác nước Masonry Layout kiểu Pinterest'],
      syntax: '.parent-grid { display: grid; grid-template-columns: repeat(3, 1fr); }\n.child-card { grid-column: span 2; display: grid; grid-template-columns: subgrid; }',
      codeExample: '.newspaper {\n  columns: 3 250px;\n  column-gap: 32px;\n  column-rule: 1px solid #e2e8f0;\n}',
      demoHtml: '<div class="newspaper">\n  <p>Đoạn văn tự động chảy đều sang các cột như một bài báo in truyền thống mà không cần chia thẻ thủ công.</p>\n</div>',
      starterCss: '.newspaper {\n  columns: 2 200px;\n  column-gap: 24px;\n  column-rule: 1px solid #cbd5e1;\n  line-height: 1.6;\n}',
      expectedOutput: 'columns: 2 200px',
      practiceHint: 'Sử dụng columns: 2 200px để chia 2 cột với độ rộng tối thiểu 200px.',
      testCaseCheck: 'columns:',
      quizQuestion: 'Giá trị subgrid trong CSS Grid giải quyết bài toán nào?',
      quizOptions: ['Cho phép phần tử con kế thừa trực tiếp hệ thống lưới hàng và cột của phần tử cha để căn thẳng hàng tuyệt đối', 'Tạo một lưới ngầm không hiển thị', 'Tự động tính toán số cột theo màn hình', 'Thay thế toàn bộ Flexbox'],
      quizAnswer: 'Cho phép phần tử con kế thừa trực tiếp hệ thống lưới hàng và cột của phần tử cha để căn thẳng hàng tuyệt đối',
      quizExplanation: 'grid-template-columns: subgrid giúp các phần tử cháu căn thẳng hàng tăm tắp với rãnh của lưới cha bên ngoài.'
    },
    23: {
      concepts: ['Chuyển đổi tư duy từ tọa độ vật lý (left/right) sang thuộc tính logic (inline/block)', 'Hỗ trợ quốc tế hóa i18n cho các ngôn ngữ viết từ phải sang trái (RTL: tiếng Ả Rập, Do Thái)', 'Làm chủ: inline-size, block-size, margin-inline, padding-block, border-inline-start'],
      syntax: '.card {\n  margin-inline: auto; /* Tự căn giữa ngang chuẩn mọi hướng đọc */\n  padding-block: 1.5rem; /* Padding trên dưới */\n  border-inline-start: 4px solid #3b82f6; /* Viền đầu dòng */\n}',
      codeExample: '.quote-box {\n  border-inline-start: 4px solid #6366f1;\n  padding-inline-start: 16px;\n  padding-block: 8px;\n}',
      demoHtml: '<blockquote class="quote-box">\n  "Thuộc tính logic giúp trang web tự động thích ứng với mọi hướng viết trên thế giới."\n</blockquote>',
      starterCss: '.quote-box {\n  border-inline-start: 4px solid #2563eb;\n  padding-inline-start: 16px;\n  padding-block: 12px;\n  background: #f8fafc;\n}',
      expectedOutput: 'border-inline-start: 4px solid #2563eb',
      practiceHint: 'Dùng border-inline-start để tạo đường viền đầu dòng logic.',
      testCaseCheck: 'border-inline-start:',
      quizQuestion: 'Thuộc tính logic nào tương đương với margin-left: auto; margin-right: auto;?',
      quizOptions: ['margin-inline: auto', 'margin-block: auto', 'margin-horizontal: auto', 'margin-logical: center'],
      quizAnswer: 'margin-inline: auto',
      quizExplanation: 'margin-inline điều khiển lề hai đầu của trục dòng chữ (Inline Axis), thay thế cho left và right.'
    },
    24: {
      concepts: ['Biến đổi không gian 2D: translate(x, y), rotate(deg), scale(ratio), skew(deg)', 'Tăng tốc đồ họa phần cứng GPU (Hardware Acceleration) với transform', 'Không gian 3D với perspective, rotateX, rotateY'],
      syntax: '.btn:hover {\n  transform: translateY(-4px) scale(1.02);\n}',
      codeExample: '.avatar-spin {\n  transition: transform 0.4s ease;\n  &:hover {\n    transform: rotate(360deg);\n  }\n}',
      demoHtml: '<div class="transform-card">\n  <h4>Card Tương Tác</h4>\n  <p>Rê chuột vào để thấy hiệu ứng nhấc bổng mượt mà.</p>\n</div>',
      starterCss: '.transform-card {\n  background: white;\n  padding: 24px;\n  border-radius: 12px;\n  border: 1px solid #cbd5e1;\n  transition: transform 0.2s;\n}\n.transform-card:hover {\n  transform: translateY(-4px);\n}',
      expectedOutput: 'transform: translateY(-4px)',
      practiceHint: 'Thêm transform: translateY(-4px) vào trạng thái :hover.',
      testCaseCheck: 'transform: translateY(-4px)',
      quizQuestion: 'Tại sao nên ưu tiên dùng transform: translate() thay vì thay đổi top/left khi làm chuyển động?',
      quizOptions: ['Vì transform được xử lý bởi GPU ở giai đoạn Composite, không kích hoạt tính toán lại layout (Reflow) nên đạt 60FPS mượt mà', 'Vì transform viết ngắn hơn', 'Vì top/left không chạy được trên mobile', 'Vì top/left bị cấm trong CSS hiện đại'],
      quizAnswer: 'Vì transform được xử lý bởi GPU ở giai đoạn Composite, không kích hoạt tính toán lại layout (Reflow) nên đạt 60FPS mượt mà',
      quizExplanation: 'transform bỏ qua quá trình Layout và Paint nặng nhọc, đưa thẳng vào GPU Compositing để tối ưu hiệu năng tối đa.'
    },
    25: {
      concepts: ['4 thuộc tính của Transition: property, duration, timing-function, delay', 'Hàm gia tốc: ease, linear, ease-in-out và đường cong cubic-bezier', 'Kỹ thuật tạo vi chuyển động Micro-interactions tạo cảm giác nhạy bén'],
      syntax: '.btn {\n  transition: transform 0.2s ease, background-color 0.2s;\n}',
      codeExample: '.toggle-switch {\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}',
      demoHtml: '<button class="interactive-btn">Di chuột qua tôi</button>',
      starterCss: '.interactive-btn {\n  background: #3b82f6;\n  color: white;\n  padding: 12px 24px;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n  transition: background-color 0.3s ease, transform 0.2s ease;\n}\n.interactive-btn:hover {\n  background-color: #1d4ed8;\n  transform: scale(1.05);\n}',
      expectedOutput: 'transition: background-color 0.3s ease, transform 0.2s ease',
      practiceHint: 'Đặt transition cho background-color và transform.',
      testCaseCheck: 'transition:',
      quizQuestion: 'Cú pháp viết gộp ngắn gọn transition: all 0.3s ease 0.1s; có số 0.1s ở cuối mang ý nghĩa gì?',
      quizOptions: ['Thời gian chờ trì hoãn trước khi chuyển động bắt đầu (transition-delay)', 'Thời gian chạy hoạt ảnh', 'Số lần lặp', 'Độ trong suốt'],
      quizAnswer: 'Thời gian chờ trì hoãn trước khi chuyển động bắt đầu (transition-delay)',
      quizExplanation: 'Trong cú pháp viết tắt của transition, giá trị thời gian thứ hai luôn đại diện cho delay.'
    },
    26: {
      concepts: ['Định nghĩa dòng thời gian @keyframes với các mốc % hoặc from/to', 'Các tham số animation: name, duration, timing-function, delay', 'Lặp vô hạn infinite, đổi chiều alternate và bảo lưu mốc cuối animation-fill-mode: forwards'],
      syntax: '@keyframes pulse {\n  0% { transform: scale(1); opacity: 1; }\n  50% { transform: scale(1.08); opacity: 0.8; }\n  100% { transform: scale(1); opacity: 1; }\n}\n.badge {\n  animation: pulse 2s infinite ease-in-out;\n}',
      codeExample: '@keyframes slideIn {\n  from {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n.alert {\n  animation: slideIn 0.4s forwards;\n}',
      demoHtml: '<div class="spinner"></div>',
      starterCss: '@keyframes spin {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e2e8f0;\n  border-top-color: #3b82f6;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}',
      expectedOutput: 'animation: spin 1s linear infinite',
      practiceHint: 'Gán animation: spin 1s linear infinite cho vòng tròn xoay .spinner.',
      testCaseCheck: 'animation: spin 1s linear infinite',
      quizQuestion: 'Thuộc tính animation-fill-mode: forwards có tác dụng gì sau khi hoạt ảnh kết thúc?',
      quizOptions: ['Giữ nguyên trạng thái kiểu dáng của mốc khung hình cuối cùng (100%)', 'Tự động nhảy ngược về trạng thái ban đầu', 'Lặp lại hoạt ảnh thêm 1 lần', 'Làm biến mất phần tử khỏi trang'],
      quizAnswer: 'Giữ nguyên trạng thái kiểu dáng của mốc khung hình cuối cùng (100%)',
      quizExplanation: 'forwards ra lệnh cho trình duyệt duy trì các thuộc tính được thiết lập ở mốc keyframe cuối cùng.'
    },
    27: {
      concepts: ['Tùy biến hình dạng con trỏ chuột cursor: pointer, not-allowed, grab, crosshair', 'Vô hiệu hóa sự kiện chuột với pointer-events: none', 'Chống bôi đen khó chịu user-select: none và kiểm soát cuộn cảm ứng touch-action'],
      syntax: '.disabled-btn {\n  cursor: not-allowed;\n  pointer-events: none;\n  opacity: 0.6;\n}\n.unselectable {\n  user-select: none;\n}',
      codeExample: '.custom-handle {\n  cursor: grab;\n  user-select: none;\n  &:active {\n    cursor: grabbing;\n  }\n}',
      demoHtml: '<div class="interactive-panel unselectable">\n  <span>Kéo tôi đi (không bị bôi đen chữ)</span>\n</div>',
      starterCss: '.interactive-panel {\n  padding: 16px;\n  background: #f1f5f9;\n  border: 1px dashed #94a3b8;\n  border-radius: 8px;\n  cursor: grab;\n  user-select: none;\n}',
      expectedOutput: 'user-select: none',
      practiceHint: 'Đặt cursor: grab và user-select: none cho phần tử.',
      testCaseCheck: 'user-select: none',
      quizQuestion: 'Khi đặt pointer-events: none lên một nút bấm, điều gì sẽ xảy ra?',
      quizOptions: ['Nút bấm hoàn toàn không phản hồi bất kỳ sự kiện click hay hover nào của chuột', 'Con trỏ chuột biến mất', 'Nút bấm chuyển sang màu xám', 'Vẫn bấm được nhưng không có âm thanh'],
      quizAnswer: 'Nút bấm hoàn toàn không phản hồi bất kỳ sự kiện click hay hover nào của chuột',
      quizExplanation: 'pointer-events: none làm cho phần tử trở nên vô hình đối với mọi sự kiện chuột, sự kiện click sẽ xuyên thủng qua phần tử nằm dưới.'
    },
    28: {
      concepts: ['Cuộn êm mượt mà với scroll-behavior: smooth trên html', 'Kỹ thuật trình chiếu Slide hít điểm dừng với scroll-snap-type & scroll-snap-align', 'Ổn định giao diện chống co giật layout với scrollbar-gutter: stable'],
      syntax: 'html {\n  scroll-behavior: smooth;\n}\n.slider {\n  display: flex;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n}\n.slide {\n  scroll-snap-align: start;\n}',
      codeExample: '.carousel {\n  display: flex;\n  gap: 16px;\n  overflow-x: scroll;\n  scroll-snap-type: x mandatory;\n  scrollbar-width: thin;\n}',
      demoHtml: '<div class="carousel">\n  <div class="slide">Slide 1</div>\n  <div class="slide">Slide 2</div>\n  <div class="slide">Slide 3</div>\n</div>',
      starterCss: 'html {\n  scroll-behavior: smooth;\n}\n.carousel {\n  display: flex;\n  gap: 16px;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n}\n.slide {\n  flex: 0 0 100%;\n  scroll-snap-align: center;\n  padding: 40px;\n  background: #e2e8f0;\n  text-align: center;\n}',
      expectedOutput: 'scroll-snap-type: x mandatory',
      practiceHint: 'Dùng scroll-snap-type: x mandatory trên container và scroll-snap-align: center trên mỗi slide.',
      testCaseCheck: 'scroll-snap-type:',
      quizQuestion: 'Để thanh cuộn của trình duyệt khi nhảy đến liên kết neo (#section) lướt êm ả thay vì giật cục tức thì, ta thêm thuộc tính nào cho thẻ html?',
      quizOptions: ['scroll-behavior: smooth', 'scroll-mode: animate', 'overflow: smooth', 'transition: scroll 1s'],
      quizAnswer: 'scroll-behavior: smooth',
      quizExplanation: 'scroll-behavior: smooth kích hoạt cơ chế cuộn mượt mà tự động của trình duyệt khi chuyển đổi vị trí trang.'
    },
    29: {
      concepts: ['Triết lý Mobile-First Design & Hệ thống Breakpoints chuẩn', 'Cú pháp Media Queries: @media screen and (min-width: 768px)', 'Công nghệ đột phá Container Queries @container (thích ứng theo thẻ cha)'],
      syntax: '/* Mobile first */\n.grid { grid-template-columns: 1fr; }\n\n/* Tablet / Desktop */\n@media (min-width: 768px) {\n  .grid { grid-template-columns: repeat(3, 1fr); }\n}',
      codeExample: '@container (min-width: 400px) {\n  .card-horizontal {\n    display: flex;\n    gap: 16px;\n  }\n}',
      demoHtml: '<div class="responsive-box">\n  <p>Kích thước sẽ tự chuyển đổi khi co giãn cửa sổ.</p>\n</div>',
      starterCss: '.responsive-box {\n  background: #f8fafc;\n  padding: 16px;\n  border-radius: 8px;\n}\n@media (min-width: 768px) {\n  .responsive-box {\n    background: #e0f2fe;\n    padding: 32px;\n  }\n}',
      expectedOutput: '@media (min-width: 768px)',
      practiceHint: 'Viết truy vấn @media (min-width: 768px) để tăng padding lên 32px cho màn hình lớn.',
      testCaseCheck: '@media (min-width: 768px)',
      quizQuestion: 'Trong chiến lược Mobile-First, tại sao lập trình viên luôn dùng (min-width: ...) thay vì (max-width: ...)?',
      quizOptions: ['Vì viết CSS mặc định cho di động trước, sau đó dùng min-width để mở rộng tính năng và giao diện cho màn hình lớn hơn', 'Vì max-width bị cấm trên iPhone', 'Vì min-width chạy nhanh hơn', 'Không có lý do cụ thể'],
      quizAnswer: 'Vì viết CSS mặc định cho di động trước, sau đó dùng min-width để mở rộng tính năng và giao diện cho màn hình lớn hơn',
      quizExplanation: 'Mobile-First bắt đầu từ nền tảng đơn giản nhất cho màn hình nhỏ, rồi nâng cấp dần khi màn hình mở rộng đạt ngưỡng min-width.'
    },
    30: {
      concepts: ['Nhận diện chế độ nền tối: @media (prefers-color-scheme: dark)', 'Tôn trọng người dùng chóng mặt với @media (prefers-reduced-motion: reduce)', 'Kết hợp Biến CSS chuyển đổi toàn bộ Dark/Light theme trong 1 dòng'],
      syntax: '@media (prefers-color-scheme: dark) {\n  :root {\n    --bg-page: #0f172a;\n    --text-primary: #f8fafc;\n  }\n}',
      codeExample: '@media (prefers-reduced-motion: reduce) {\n  * {\n    animation-duration: 0.01ms !important;\n    transition-duration: 0.01ms !important;\n  }\n}',
      demoHtml: '<div class="theme-card">\n  <h4>Chế độ Giao diện Thông minh</h4>\n  <p>Tự động hòa nhập với phong cách hệ điều hành của bạn.</p>\n</div>',
      starterCss: ':root {\n  --card-bg: #ffffff;\n  --card-text: #0f172a;\n}\n@media (prefers-color-scheme: dark) {\n  :root {\n    --card-bg: #1e293b;\n    --card-text: #f8fafc;\n  }\n}\n.theme-card {\n  background: var(--card-bg);\n  color: var(--card-text);\n  padding: 24px;\n  border-radius: 12px;\n}',
      expectedOutput: 'prefers-color-scheme: dark',
      practiceHint: 'Dùng @media (prefers-color-scheme: dark) để đổi biến màu nền --card-bg.',
      testCaseCheck: 'prefers-color-scheme: dark',
      quizQuestion: 'Truy vấn truyền thông nào giúp trang web tự động chuyển sang Dark Mode khi người dùng kích hoạt giao diện tối trên máy tính/điện thoại?',
      quizOptions: ['@media (prefers-color-scheme: dark)', '@media (theme: dark)', '@media (dark-mode: true)', '@media (color-mode: dark)'],
      quizAnswer: '@media (prefers-color-scheme: dark)',
      quizExplanation: 'prefers-color-scheme truy vấn trực tiếp cài đặt hiển thị sáng/tối của hệ điều hành.'
    },
    31: {
      concepts: ['Tối ưu hóa tài liệu khi in ra giấy hoặc lưu PDF: @media print', 'Ẩn các phần tử thừa: menu điều hướng navbar, nút bấm, quảng cáo', 'Kiểm soát ngắt trang chuyên nghiệp: break-inside: avoid, page-break-after'],
      syntax: '@media print {\n  nav, footer, .btn, .no-print {\n    display: none !important;\n  }\n  body {\n    color: #000;\n    background: #fff;\n  }\n}',
      codeExample: '.invoice-table {\n  break-inside: avoid;\n  width: 100%;\n}\n@page {\n  margin: 20mm;\n}',
      demoHtml: '<div class="invoice">\n  <h2>HÓA ĐƠN BÁN HÀNG</h2>\n  <button class="no-print btn">In hóa đơn</button>\n  <p>Nội dung cần giữ lại trên bản in.</p>\n</div>',
      starterCss: '@media print {\n  .no-print {\n    display: none !important;\n  }\n  body {\n    font-size: 12pt;\n    color: #000000;\n    background: #ffffff;\n  }\n}',
      expectedOutput: 'display: none !important',
      practiceHint: 'Ẩn các nút bấm trong @media print bằng display: none !important.',
      testCaseCheck: '@media print',
      quizQuestion: 'Thuộc tính nào giúp ngăn không cho một bảng dữ liệu hoặc khối hóa đơn bị cắt làm đôi ở giữa hai trang giấy khi in?',
      quizOptions: ['break-inside: avoid', 'overflow: hidden', 'page-break: none', 'print-color-adjust: exact'],
      quizAnswer: 'break-inside: avoid',
      quizExplanation: 'break-inside: avoid yêu cầu máy in cố gắng giữ nguyên toàn bộ khối phần tử trên cùng một trang giấy.'
    },
    32: {
      concepts: ['Khai báo Biến tùy chỉnh Custom Properties (--ten-bien: gia-tri)', 'Sử dụng biến bằng hàm var(--ten-bien, gia-tri-du-phong)', 'Phạm vi kế thừa biến (Scoping) và đổi theme linh hoạt'],
      syntax: ':root {\n  --primary: #4f46e5;\n  --radius: 8px;\n}\n.button {\n  background-color: var(--primary);\n  border-radius: var(--radius);\n}',
      codeExample: ':root {\n  --space-unit: 8px;\n}\n.container {\n  padding: calc(var(--space-unit) * 3); /* 24px */\n}',
      demoHtml: '<div class="var-box">\n  <h3>Biến CSS Mạnh Mẽ</h3>\n  <button class="btn-var">Nút Biến</button>\n</div>',
      starterCss: ':root {\n  --primary-color: #3b82f6;\n  --box-radius: 12px;\n}\n.var-box {\n  border: 2px solid var(--primary-color);\n  border-radius: var(--box-radius);\n  padding: 20px;\n}\n.btn-var {\n  background: var(--primary-color);\n  color: white;\n  padding: 8px 16px;\n  border-radius: var(--box-radius);\n  border: none;\n}',
      expectedOutput: 'var(--primary-color)',
      practiceHint: 'Khai báo --primary-color trong :root và tái sử dụng bằng var(--primary-color).',
      testCaseCheck: 'var(--primary-color)',
      quizQuestion: 'Cú pháp chuẩn để khai báo một biến CSS trong selector :root là gì?',
      quizOptions: ['Bắt đầu bằng hai dấu gạch nối, ví dụ --brand-color: #6366f1;', 'Dùng ký hiệu $, ví dụ $brand-color: #6366f1;', 'Dùng @, ví dụ @brand-color: #6366f1;', 'Dùng chữ var, ví dụ var brand-color = #6366f1;'],
      quizAnswer: 'Bắt đầu bằng hai dấu gạch nối, ví dụ --brand-color: #6366f1;',
      quizExplanation: 'Quy chuẩn W3C của CSS Custom Properties bắt buộc tên biến phải bắt đầu bằng hai dấu gạch nối --.'
    },
    33: {
      concepts: ['Hàm toán học calc(): kết hợp đơn vị khác nhau calc(100% - 32px)', 'Hàm giới hạn min() và max()', 'Hàm siêu việt clamp(min, val, max) tạo Fluid Typography không cần media query'],
      syntax: '/* Co giãn font mượt từ 16px đến 32px tùy theo độ rộng màn hình */\nh1 {\n  font-size: clamp(1rem, 2.5vw, 2rem);\n  width: calc(100% - 40px);\n}',
      codeExample: '.sidebar {\n  width: min(300px, 100%);\n}\n.card {\n  padding: max(16px, 2vw);\n}',
      demoHtml: '<div class="fluid-container">\n  <h1 class="fluid-heading">Tiêu đề Fluid Clamp</h1>\n  <p>Kích thước font tự điều chỉnh mượt mà theo từng pixel co giãn màn hình.</p>\n</div>',
      starterCss: '.fluid-heading {\n  font-size: clamp(1.25rem, 3vw, 2.25rem);\n  line-height: 1.3;\n  color: #1e293b;\n}\n.fluid-container {\n  width: calc(100% - 32px);\n  margin-inline: auto;\n}',
      expectedOutput: 'clamp(1.25rem, 3vw, 2.25rem)',
      practiceHint: 'Áp dụng hàm clamp(1.25rem, 3vw, 2.25rem) cho font-size.',
      testCaseCheck: 'clamp(',
      quizQuestion: 'Hàm clamp(1rem, 2vw, 2.5rem) sẽ đảm bảo font chữ không bao giờ nhỏ hơn mức nào?',
      quizOptions: ['1rem (giá trị tối thiểu min)', '2.5rem (giá trị tối đa)', '2vw', '0px'],
      quizAnswer: '1rem (giá trị tối thiểu min)',
      quizExplanation: 'Tham số đầu tiên của hàm clamp(MIN, PREFERRED, MAX) là cận dưới sàn tối thiểu.'
    },
    34: {
      concepts: ['Tiêu chuẩn tương phản màu Web Content Accessibility Guidelines (WCAG AA/AAA)', 'Bảo vệ chỉ báo điều hướng bàn phím :focus-visible (không dùng outline: none vô tội vạ)', 'Lớp tiện ích .sr-only ẩn thị giác nhưng trình đọc màn hình đọc được trọn vẹn'],
      syntax: '.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n:focus-visible {\n  outline: 3px solid #4f46e5;\n  outline-offset: 3px;\n}',
      codeExample: '.btn-accessible:focus-visible {\n  outline: 2px solid #2563eb;\n  outline-offset: 2px;\n}',
      demoHtml: '<button class="accessible-btn">\n  <span class="sr-only">Đóng cửa sổ</span>\n  <span aria-hidden="true">✕</span>\n</button>',
      starterCss: '.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n}\n.accessible-btn:focus-visible {\n  outline: 3px solid #2563eb;\n  outline-offset: 3px;\n}',
      expectedOutput: 'outline: 3px solid #2563eb',
      practiceHint: 'Đảm bảo có :focus-visible với outline rõ ràng cho người dùng bàn phím.',
      testCaseCheck: ':focus-visible',
      quizQuestion: 'Tại sao việc viết * { outline: none; } lại bị xem là tối kỵ trong lập trình giao diện web chuyên nghiệp?',
      quizOptions: ['Vì nó tước đoạt dấu hiệu thị giác của người khiếm thị/khuyết tật khi dùng phím Tab điều hướng web', 'Vì nó làm chậm tốc độ render', 'Vì trình duyệt sẽ tự động báo lỗi cú pháp', 'Vì làm mất màu nền'],
      quizAnswer: 'Vì nó tước đoạt dấu hiệu thị giác của người khiếm thị/khuyết tật khi dùng phím Tab điều hướng web',
      quizExplanation: 'Xóa outline mà không bù đắp :focus-visible khiến người dùng bàn phím hoàn toàn mù hướng không biết con trỏ đang ở đâu.'
    }
  };

  const topicData = contentMap[topicNumber] || contentMap[1];

  return {
    id: lessonId,
    moduleId,
    track: 'css',
    language: 'css',
    title: `CSS ${topic.topicNumber}. ${topic.title}`,
    order: topic.topicNumber,
    durationMinutes: topic.durationMinutes,
    difficulty: topicNumber > 22 ? 'Nâng cao' : (topicNumber > 10 ? 'Trung bình' : 'Cơ bản'),
    prerequisites: [
      topicNumber === 1 ? 'Đã hoàn thành các bài học HTML cơ bản' : `Đã nắm vững kiến thức bài CSS ${topicNumber - 1}`,
      'Biết cách mở Developer Tools (F12) để kiểm tra phần tử DOM và CSS Rules'
    ],
    learningObjectives: [
      {
        id: `LO-CSS-${topicNumber}.1`,
        code: `LO-CSS-${topicNumber}.1`,
        title: `Làm chủ kiến thức cốt lõi: ${topic.title}`,
        description: topic.summary,
        bloomLevel: 'Understand',
        masteryPercentage: 90
      },
      {
        id: `LO-CSS-${topicNumber}.2`,
        code: `LO-CSS-${topicNumber}.2`,
        title: 'Áp dụng cú pháp thực tế vào xây dựng giao diện',
        description: `Thực hành áp dụng các thuộc tính ${topic.tags.join(', ')} trong dự án web thực chiến.`,
        bloomLevel: 'Apply',
        masteryPercentage: 85
      },
      {
        id: `LO-CSS-${topicNumber}.3`,
        code: `LO-CSS-${topicNumber}.3`,
        title: 'Tránh các lỗi kinh điển và tối ưu hóa trải nghiệm người dùng',
        description: 'Nhận biết các bẫy hiển thị, vấn đề tương thích trình duyệt và tiêu chuẩn Web Accessibility.',
        bloomLevel: 'Analyze',
        masteryPercentage: 80
      }
    ],
    sections: [
      {
        id: `sec-css-${topicNumber}-1`,
        lessonId,
        order: 1,
        conceptName: topic.title,
        title: `1. Tổng quan & Bản chất của ${topic.title}`,
        explanation: `${topic.summary}\n\nTrong kiến trúc Frontend hiện đại, làm chủ ${topic.title} là điều kiện bắt buộc giúp bạn tạo ra giao diện đẹp mắt, chuẩn tỉ lệ, không bị xô lệch trên các kích thước màn hình và mang lại trải nghiệm người dùng mượt mà nhất.`,
        syntax: topicData.syntax,
        codeExample: topicData.codeExample,
        lineByLineExplanation: [
          { line: 1, text: 'Khai báo selector hoặc quy tắc áp dụng cho phần tử mục tiêu.' },
          { line: 2, text: 'Thiết lập các thuộc tính kiểu dáng tương ứng.' },
          { line: 3, text: 'Đóng khối quy tắc và kiểm tra trên trình duyệt.' }
        ],
        commonMistakes: [
          'Quên dấu chấm phẩy ; ở cuối mỗi khai báo thuộc tính khiến trình duyệt bỏ qua quy tắc tiếp theo.',
          'Đặt sai selector hoặc không tính toán đủ trọng số Specificity khiến kiểu dáng bị ghi đè không mong muốn.'
        ],
        whenToUse: `Sử dụng khi cần xử lý ${topic.title} trong giao diện website thương mại điện tử, ứng dụng web hoặc landing page.`,
        whenNotToUse: 'Tránh lạm dụng !important để ghi đè quy tắc, hãy tổ chức selector và Cascade Layers có kỷ luật.',
        realWorldUseCase: `Xây dựng component giao diện chuẩn hệ thống Design System cho ${topic.englishTitle}.`
      }
    ],
    predictOutputs: [
      {
        id: `po-css-${topicNumber}-1`,
        code: topicData.codeExample,
        question: topicData.quizQuestion,
        options: topicData.quizOptions,
        correctAnswer: topicData.quizAnswer,
        explanation: topicData.quizExplanation,
        hint: 'Xem lại phần giải thích lý thuyết bên trên.'
      }
    ],
    interactivePractice: {
      id: `ip-css-${topicNumber}`,
      title: `Thực hành Live Preview: ${topic.title}`,
      description: `Chỉnh sửa mã CSS bên dưới, nhấn "Chạy code" và quan sát kết quả hiển thị trực tiếp trên tab Preview!`,
      starterCode: `<style>\n${topicData.starterCss}\n</style>\n\n${topicData.demoHtml}`,
      expectedConsoleOutput: topicData.expectedOutput,
      hint: topicData.practiceHint
    },
    exercises: {
      basic: {
        id: `ex-css-${topicNumber}-1`,
        lessonId,
        title: `Bài tập Cơ bản: Áp dụng ${topic.title}`,
        difficulty: 'basic',
        learningObjectiveIds: [`LO-CSS-${topicNumber}.1`],
        description: `Áp dụng đúng cú pháp và thuộc tính CSS cho bài học "${topic.title}". Đảm bảo đoạn mã chứa khai báo: ${topicData.testCaseCheck}`,
        starterCode: `<style>\n/* Viết mã CSS của bạn ở đây */\n${topicData.starterCss}\n</style>\n\n${topicData.demoHtml}`,
        solutionCode: `<style>\n${topicData.starterCss}\n</style>\n\n${topicData.demoHtml}`,
        testCases: [
          {
            id: 'tc-1',
            description: `Kiểm tra mã chứa khai báo thuộc tính: ${topicData.testCaseCheck}`,
            expectedOutput: topicData.testCaseCheck
          }
        ],
        hints: [topicData.practiceHint],
        explanation: `Áp dụng chính xác cú pháp ${topicData.testCaseCheck} giúp giao diện hiển thị đúng tiêu chuẩn.`
      },
      intermediate: {
        id: `ex-css-${topicNumber}-2`,
        lessonId,
        title: `Bài tập Nâng cao: Tinh chỉnh giao diện thực chiến`,
        difficulty: 'intermediate',
        learningObjectiveIds: [`LO-CSS-${topicNumber}.2`],
        description: `Kết hợp thuộc tính đã học để hoàn thiện giao diện mẫu. Đảm bảo cấu trúc hoạt động hoàn hảo và vượt qua bài test.`,
        starterCode: `<style>\n${topicData.starterCss}\n</style>\n\n${topicData.demoHtml}`,
        solutionCode: `<style>\n${topicData.starterCss}\n</style>\n\n${topicData.demoHtml}`,
        testCases: [
          {
            id: 'tc-2',
            description: `Kiểm tra khai báo CSS chính xác`,
            expectedOutput: topicData.testCaseCheck
          }
        ],
        hints: [topicData.practiceHint],
        explanation: 'Thực hành nâng cao giúp ghi nhớ sâu bản chất của thuộc tính.'
      },
      challenge: {
        id: `ex-css-${topicNumber}-3`,
        lessonId,
        title: `Thử thách Master: Xây dựng UI Component hoàn chỉnh`,
        difficulty: 'challenge',
        learningObjectiveIds: [`LO-CSS-${topicNumber}.3`],
        description: `Áp dụng kỹ năng chuyên sâu của ${topic.title} để giải quyết bài toán giao diện thực tế.`,
        starterCode: `<style>\n${topicData.starterCss}\n</style>\n\n${topicData.demoHtml}`,
        solutionCode: `<style>\n${topicData.starterCss}\n</style>\n\n${topicData.demoHtml}`,
        testCases: [
          {
            id: 'tc-3',
            description: `Kiểm tra xác thực thành công`,
            expectedOutput: topicData.testCaseCheck
          }
        ],
        hints: [topicData.practiceHint],
        explanation: 'Hoàn thành xuất sắc thử thách cấp độ Master!'
      }
    },
    quiz: {
      id: `quiz-css-${topicNumber}`,
      lessonId,
      title: `Trắc nghiệm nhanh: ${topic.title}`,
      passingScore: 80,
      questions: [
        {
          id: `q-css-${topicNumber}-1`,
          lessonId,
          learningObjectiveId: `LO-CSS-${topicNumber}.1`,
          type: 'multiple_choice',
          difficulty: 'medium',
          prompt: topicData.quizQuestion,
          options: topicData.quizOptions.map((opt, idx) => ({ id: String.fromCharCode(65 + idx), text: opt })),
          correctAnswer: String.fromCharCode(65 + Math.max(0, topicData.quizOptions.indexOf(topicData.quizAnswer))),
          explanation: topicData.quizExplanation,
          relatedLessonId: lessonId
        }
      ]
    },
    summary: [
      `Làm chủ khái niệm và cú pháp chuẩn của ${topic.title}.`,
      `Ứng dụng các thuộc tính ${topic.tags.join(', ')} vào xây dựng giao diện thực tế.`,
      `Tránh các bẫy thường gặp và tối ưu hóa tính tương thích trình duyệt.`
    ],
    suggestedBookmarks: [
      `Cú pháp & thuộc tính cốt lõi của ${topic.title}`,
      `Ví dụ ứng dụng thực tế trong dự án Frontend`
    ]
  };
}

// Pre-build all 34 CSS Lessons
export const ALL_34_CSS_LESSONS: Lesson[] = Array.from({ length: 34 }, (_, i) => buildCssLessonForTopic(i + 1));
