import { Lesson } from '../../types';

// ============================================================================
// BÀI 1: CẤU TRÚC TÀI LIỆU (Document Structure & Skeleton)
// ============================================================================
export const LESSON_HTML_1: Lesson = {
  id: 'les-html-1',
  moduleId: 'mod-html-1',
  track: 'html',
  language: 'html',
  title: 'HTML 1. Cấu trúc tài liệu (Document Structure)',
  order: 1,
  durationMinutes: 40,
  difficulty: 'Cơ bản',
  prerequisites: [
    'Hiểu khái niệm cơ bản về trang web hiển thị trên trình duyệt',
    'Biết cách mở trình soạn thảo mã nguồn (VS Code) và trình duyệt Chrome/Firefox'
  ],
  learningObjectives: [
    {
      id: 'LO-HTML-1.1',
      code: 'LO-HTML-1.1',
      title: 'Giải phẫu phần tử HTML (HTML Element Anatomy)',
      description: 'Phân biệt thẻ mở (opening tag), nội dung (content), thẻ đóng (closing tag), thuộc tính (attributes) và thẻ tự đóng (void elements).',
      bloomLevel: 'Remember',
      masteryPercentage: 95
    },
    {
      id: 'LO-HTML-1.2',
      code: 'LO-HTML-1.2',
      title: 'Xây dựng bộ khung xương chuẩn <!DOCTYPE html>',
      description: 'Hiểu vai trò của <!DOCTYPE html>, phần tử gốc <html>, phần đầu <head> chứa siêu dữ liệu và phần thân <body> chứa nội dung trực quan.',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    },
    {
      id: 'LO-HTML-1.3',
      code: 'LO-HTML-1.3',
      title: 'Mối quan hệ cha - con và cây phân cấp DOM',
      description: 'Hiểu cấu trúc lồng nhau hợp lệ (nesting) để trình duyệt dựng cây DOM chính xác, không sinh lỗi render.',
      bloomLevel: 'Understand',
      masteryPercentage: 88
    }
  ],
  sections: [
    {
      id: 'sec-html-1-1',
      lessonId: 'les-html-1',
      order: 1,
      conceptName: 'Giải phẫu phần tử HTML & Thuộc tính (Attributes)',
      title: '1. Khái niệm Element, Tag và Attribute',
      explanation: 'HTML (HyperText Markup Language) là ngôn ngữ đánh dấu cấu trúc cho trang web. Một phần tử (element) thường gồm: thẻ mở (<tag>), nội dung ở giữa, và thẻ đóng (</tag>). Thuộc tính (attribute) luôn nằm trong thẻ mở, cung cấp thông tin phụ trợ dưới dạng name="value". Một số thẻ rỗng (void elements) như <br>, <hr>, <img> không có nội dung và không cần thẻ đóng.',
      syntax: '<tagname attribute="value">Nội dung hiển thị</tagname>\n<!-- Thẻ tự đóng (Void element): -->\n<img src="anh.jpg" alt="Mô tả" />',
      codeExample: `<!-- Phần tử đầy đủ có thẻ mở, thuộc tính, nội dung, thẻ đóng -->
<p class="intro-text" id="main-para">
  Chào mừng bạn đến với khóa học HTML5 chuẩn doanh nghiệp!
</p>

<!-- Thẻ tự đóng (void element) -->
<hr class="divider">`,
      lineByLineExplanation: [
        { line: 2, text: '<p> là thẻ mở, class="intro-text" và id="main-para" là các thuộc tính.' },
        { line: 3, text: 'Chuỗi văn bản là nội dung (text node) được người dùng nhìn thấy trên trình duyệt.' },
        { line: 4, text: '</p> là thẻ đóng với dấu gạch chéo (/), báo hiệu kết thúc phạm vi đoạn văn.' },
        { line: 7, text: '<hr> là đường kẻ ngang tự đóng, không chứa văn bản con.' }
      ],
      commonMistakes: [
        'Quên đóng thẻ (ví dụ viết <p> mà không có </p>), dẫn đến vỡ cấu trúc giao diện các phần tử phía dưới.',
        'Lồng thẻ sai thứ tự: viết <b><i>nội dung</b></i> thay vì chuẩn FIFO <b><i>nội dung</i></b>.'
      ],
      whenToUse: 'Dùng thẻ HTML đúng ngữ nghĩa cho mọi đối tượng thông tin xuất hiện trên trang web.',
      whenNotToUse: 'Không sáng chế thẻ tự đặt tên không nằm trong đặc tả W3C/WHATWG (trừ trường hợp Web Components tùy biến).',
      realWorldUseCase: 'Mọi trang web trên Internet (Google, Facebook, Shopee) đều khởi nguồn từ cấu trúc các element lồng nhau.'
    },
    {
      id: 'sec-html-1-2',
      lessonId: 'les-html-1',
      order: 2,
      conceptName: 'Bộ khung xương chuẩn của một tài liệu HTML5',
      title: '2. Khung chuẩn <!DOCTYPE html>, <html>, <head> và <body>',
      explanation: 'Một trang web hoàn chỉnh luôn tuân theo bộ khung bắt buộc:\n1. <!DOCTYPE html>: Chỉ thị chế độ chuẩn (Standards Mode) cho trình duyệt.\n2. <html lang="vi">: Phần tử gốc chứa toàn bộ trang, lang khai báo ngôn ngữ hỗ trợ trình đọc màn hình.\n3. <head>: Chứa thông tin cấu hình, tiêu đề tab, bảng mã UTF-8, liên kết CSS.\n4. <body>: Chứa tất cả nội dung người dùng thực sự nhìn thấy trên màn hình.',
      syntax: '<!DOCTYPE html>\n<html lang="vi">\n  <head>\n    <meta charset="UTF-8">\n    <title>Tiêu đề trang</title>\n  </head>\n  <body>\n    <!-- Nội dung hiển thị tại đây -->\n  </body>\n</html>',
      codeExample: `<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trang web đầu tiên của tôi</title>
  </head>
  <body>
    <h1>Xin chào thế giới!</h1>
    <p>Tôi đang làm chủ cấu trúc tài liệu HTML5.</p>
  </body>
</html>`,
      lineByLineExplanation: [
        { line: 1, text: '<!DOCTYPE html> bắt buộc ở dòng đầu tiên để trình duyệt kích hoạt Standards Mode hiện đại.' },
        { line: 2, text: '<html lang="vi"> là thẻ gốc bao bọc tất cả, báo ngôn ngữ chính là tiếng Việt.' },
        { line: 3, text: '<head> khai báo siêu dữ liệu (metadata) không hiển thị trực tiếp trên trang.' },
        { line: 4, text: '<meta charset="UTF-8"> đảm bảo hiển thị đúng dấu tiếng Việt không bị lỗi font ô vuông.' },
        { line: 6, text: '<title> xác định tên tab trên thanh trình duyệt và tiêu đề kết quả tìm kiếm Google.' },
        { line: 8, text: '<body> là nơi chứa toàn bộ văn bản, hình ảnh, nút bấm mà người dùng tương tác.' }
      ],
      commonMistakes: [
        'Bỏ quên <!DOCTYPE html>, khiến trình duyệt rơi vào "Quirks Mode" cổ xưa mô phỏng IE 5.5 gây lỗi CSS.',
        'Đặt thẻ <h1> hoặc nội dung hiển thị bên trong thẻ <head> thay vì đặt trong <body>.'
      ],
      whenToUse: 'Mọi file .html mới tạo đều phải có bộ khung cơ sở này trước khi viết bất kỳ nội dung nào khác.',
      whenNotToUse: 'Không viết nhiều hơn một thẻ <html>, <head> hoặc <body> trong một tài liệu HTML.',
      realWorldUseCase: 'Boilerplate tiêu chuẩn trong các dự án chuyên nghiệp Next.js, Vite React hay website tĩnh.'
    }
  ],
  predictOutputs: [
    {
      id: 'po-html-1-1',
      question: 'Phát biểu nào sau đây là ĐÚNG về thẻ <!DOCTYPE html> trong HTML5?',
      code: `<!DOCTYPE html>
<html lang="vi">
  <head><title>Test</title></head>
  <body><h1>Xin chào</h1></body>
</html>`,
      options: [
        'A. Là một thẻ HTML thông thường và phải có thẻ đóng </!DOCTYPE>',
        'B. Là chỉ thị khai báo kiểu tài liệu để trình duyệt render theo chuẩn Standards Mode',
        'C. Dùng để khai báo địa chỉ IP của máy chủ lưu trữ trang web',
        'D. Bắt buộc phải viết hoa toàn bộ và đặt trong thẻ <head>'
      ],
      correctAnswer: 'B. Là chỉ thị khai báo kiểu tài liệu để trình duyệt render theo chuẩn Standards Mode',
      explanation: '<!DOCTYPE html> không phải là một thẻ HTML có thẻ đóng, mà là một thông cáo (declaration) báo cho trình duyệt biết văn bản tuân theo tiêu chuẩn HTML5 hiện đại.',
      hint: 'Chữ DOCTYPE là viết tắt của Document Type Declaration.'
    }
  ],
  interactivePractice: {
    id: 'ip-html-1',
    title: 'Thực hành tạo khung xương HTML5 đầu tiên',
    description: 'Bổ sung thẻ <h1> với nội dung "Học Lập Trình Web" và đoạn văn <p> mô tả "Bắt đầu với HTML5" vào trong phần thân <body>.',
    starterCode: `<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8">
    <title>Trang thực hành</title>
  </head>
  <body>
    <!-- Viết mã của bạn dưới đây: -->
    <h1>Học Lập Trình Web</h1>
    <p>Bắt đầu với HTML5</p>
  </body>
</html>`,
    expectedConsoleOutput: 'Học Lập Trình Web',
    hint: 'Đặt thẻ h1 và p bên trong cặp thẻ <body>...</body>.',
    language: 'html'
  },
  exercises: {
    basic: {
      id: 'ex-html-1-basic',
      lessonId: 'les-html-1',
      title: 'Tạo cấu trúc tài liệu cơ bản',
      difficulty: 'basic',
      learningObjectiveIds: ['LO-HTML-1.1', 'LO-HTML-1.2'],
      description: 'Tạo một trang HTML5 hợp lệ có thẻ <html> ngôn ngữ "vi", <head> có thẻ <title>Bài tập 1</title>, và trong <body> có thẻ <h1> có nội dung "Khởi đầu vững chắc".',
      starterCode: `<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8">
    <title>Bài tập 1</title>
  </head>
  <body>
    <h1>Khởi đầu vững chắc</h1>
  </body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8">
    <title>Bài tập 1</title>
  </head>
  <body>
    <h1>Khởi đầu vững chắc</h1>
  </body>
</html>`,
      testCases: [
        {
          id: 'tc-h1-1',
          description: 'Kiểm tra tồn tại thẻ <h1> với nội dung "Khởi đầu vững chắc"',
          expectedOutput: 'Khởi đầu vững chắc'
        }
      ],
      hints: ['Kiểm tra xem thẻ h1 đã được đặt chính xác trong body hay chưa.'],
      explanation: 'Thẻ <h1> biểu thị tiêu đề cấp cao nhất của trang, thuộc phần thân body.',
      language: 'html'
    },
    intermediate: {
      id: 'ex-html-1-mid',
      lessonId: 'les-html-1',
      title: 'Lồng ghép thẻ và thuộc tính (Nesting & Attributes)',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO-HTML-1.1', 'LO-HTML-1.3'],
      description: 'Viết một thẻ <p> có thuộc tính id="gioi-thieu" và class="text-highlight". Bên trong đoạn văn chứa từ "HTML5" được in đậm bằng thẻ <strong>.',
      starterCode: `<p id="gioi-thieu" class="text-highlight">
  Khóa học làm chủ <strong>HTML5</strong> thực chiến.
</p>`,
      solutionCode: `<p id="gioi-thieu" class="text-highlight">
  Khóa học làm chủ <strong>HTML5</strong> thực chiến.
</p>`,
      testCases: [
        {
          id: 'tc-h1-2',
          description: 'Kiểm tra thuộc tính id="gioi-thieu" và thẻ strong bao bọc từ HTML5',
          expectedOutput: 'HTML5'
        }
      ],
      hints: ['Đảm bảo thẻ strong được đóng bên trong thẻ p trước khi đóng </p>.'],
      explanation: 'Cấu trúc lồng nhau tuân theo quy tắc vào trước - ra sau (LIFO / FIFO).',
      language: 'html'
    },
    challenge: {
      id: 'ex-html-1-adv',
      lessonId: 'les-html-1',
      title: 'Xây dựng trang cá nhân Portfolio hoàn chỉnh',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO-HTML-1.2', 'LO-HTML-1.3'],
      description: 'Xây dựng bộ khung trang cá nhân với <!DOCTYPE html>, thẻ <html>, <head> có <meta charset="UTF-8"> và <title>Hồ sơ Lập trình viên</title>, <body> chứa thẻ <h1> tiêu đề "Họ và Tên", thẻ <hr> ngăn cách và thẻ <p> giới thiệu bản thân.',
      starterCode: `<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8">
    <title>Hồ sơ Lập trình viên</title>
  </head>
  <body>
    <h1>Nguyễn Văn Dev</h1>
    <hr>
    <p>Tôi là lập trình viên Frontend đam mê công nghệ web.</p>
  </body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8">
    <title>Hồ sơ Lập trình viên</title>
  </head>
  <body>
    <h1>Nguyễn Văn Dev</h1>
    <hr>
    <p>Tôi là lập trình viên Frontend đam mê công nghệ web.</p>
  </body>
</html>`,
      testCases: [
        {
          id: 'tc-h1-3',
          description: 'Kiểm tra tài liệu có đầy đủ title, h1, hr và p',
          expectedOutput: 'Hồ sơ Lập trình viên'
        }
      ],
      hints: ['Thẻ <hr> là void element nên không có thẻ đóng </hr>.'],
      explanation: 'Trang tài liệu HTML chuẩn gồm đủ 4 tầng: Doctype, html root, head metadata và body content.',
      language: 'html'
    }
  },
  quiz: {
    id: 'quiz-html-1',
    lessonId: 'les-html-1',
    title: 'Kiểm tra hiểu biết: Cấu trúc tài liệu HTML',
    passingScore: 70,
    questions: [
      {
        id: 'q-h1-1',
        lessonId: 'les-html-1',
        learningObjectiveId: 'LO-HTML-1.1',
        type: 'multiple_choice',
        difficulty: 'easy',
        prompt: 'Thẻ nào sau đây là "Void Element" (thẻ rỗng / tự đóng, không có nội dung chữ con và không cần thẻ đóng)?',
        options: [
          { id: 'a', text: '<p>' },
          { id: 'b', text: '<h1>' },
          { id: 'c', text: '<hr>' },
          { id: 'd', text: '<div>' }
        ],
        correctAnswer: 'c',
        explanation: '<hr> tạo đường kẻ ngang phân cách, không chứa nội dung và là một void element trong HTML5.',
        relatedLessonId: 'les-html-1'
      },
      {
        id: 'q-h1-2',
        lessonId: 'les-html-1',
        learningObjectiveId: 'LO-HTML-1.2',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'Phần tử nào sau đây nằm trong thẻ <head> và chịu trách nhiệm đặt tên cho Tab hiển thị trên trình duyệt?',
        options: [
          { id: 'a', text: '<header>' },
          { id: 'b', text: '<title>' },
          { id: 'c', text: '<h1>' },
          { id: 'd', text: '<meta name="tab">' }
        ],
        correctAnswer: 'b',
        explanation: '<title> nằm trong <head> và quyết định tiêu đề của tab trình duyệt cũng như kết quả hiển thị trên công cụ tìm kiếm.',
        relatedLessonId: 'les-html-1',
        errorAnalysis: 'Sinh viên hay nhầm lẫn giữa <title> (trong <head>, đặt tên tab) và <header>/<h1> (trong <body>, tiêu đề trang trực quan).'
      }
    ]
  },
  summary: [
    'HTML gồm các phần tử được tạo nên từ thẻ mở, nội dung và thẻ đóng.',
    'Thuộc tính (attributes) đặt trong thẻ mở để bổ sung cấu hình (id, class, lang...).',
    'Bộ khung chuẩn HTML5 luôn có <!DOCTYPE html>, <html lang="vi">, <head> và <body>.',
    '<head> chứa dữ liệu ẩn (metadata, title, charset), còn <body> chứa toàn bộ giao diện trực quan.'
  ],
  suggestedBookmarks: [
    'Quy tắc lồng thẻ hợp lệ (Valid HTML Nesting)',
    'Danh sách các thẻ tự đóng (Void Elements: img, br, hr, input, meta, link)'
  ]
};

// ============================================================================
// BÀI 2: METADATA & TÀI NGUYÊN (Metadata & Resources)
// ============================================================================
export const LESSON_HTML_2: Lesson = {
  id: 'les-html-2',
  moduleId: 'mod-html-2',
  track: 'html',
  language: 'html',
  title: 'HTML 2. Metadata & tài nguyên (Metadata & Resources)',
  order: 2,
  durationMinutes: 45,
  difficulty: 'Cơ bản',
  prerequisites: [
    'Nắm vững cấu trúc khung <head> và <body> từ Bài 1',
    'Hiểu nguyên lý nạp trang web từ client đến server'
  ],
  learningObjectives: [
    {
      id: 'LO-HTML-2.1',
      code: 'LO-HTML-2.1',
      title: 'Khai báo bảng mã UTF-8 và Viewport Responsive',
      description: 'Sử dụng <meta charset="UTF-8"> để chống lỗi font và <meta name="viewport"> để tối ưu hiển thị trên di động.',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    },
    {
      id: 'LO-HTML-2.2',
      code: 'LO-HTML-2.2',
      title: 'Tối ưu hóa SEO & Open Graph Social Cards',
      description: 'Cấu hình meta description, meta keywords và OpenGraph (og:title, og:image) để chia sẻ đẹp mắt trên Facebook/Zalo.',
      bloomLevel: 'Apply',
      masteryPercentage: 85
    },
    {
      id: 'LO-HTML-2.3',
      code: 'LO-HTML-2.3',
      title: 'Liên kết Stylesheet, Favicon và Script',
      description: 'Sử dụng <link rel="stylesheet">, <link rel="icon"> và thẻ <script defer> để liên kết tài nguyên hiệu quả.',
      bloomLevel: 'Understand',
      masteryPercentage: 90
    }
  ],
  sections: [
    {
      id: 'sec-html-2-1',
      lessonId: 'les-html-2',
      order: 1,
      conceptName: 'Các thẻ <meta> thiết yếu: Charset & Viewport',
      title: '1. Định dạng font UTF-8 và Viewport cho Mobile Responsive',
      explanation: 'Thẻ <meta> cung cấp siêu dữ liệu (metadata) về trang cho trình duyệt và các bot tìm kiếm (Googlebot). Hai thẻ không bao giờ được thiếu trong mọi dự án hiện đại:\n- <meta charset="UTF-8">: Khai báo bảng mã ký tự Unicode toàn cầu.\n- <meta name="viewport" content="width=device-width, initial-scale=1.0">: Đặt chiều rộng hiển thị bằng chiều rộng vật lý của màn hình thiết bị và tỷ lệ phóng ban đầu 100%.',
      syntax: '<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">',
      codeExample: `<head>
  <!-- 1. Bảng mã ký tự toàn cầu -->
  <meta charset="UTF-8">

  <!-- 2. Chuẩn Responsive cho điện thoại / tablet -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Khóa Học Thiết Kế Web</title>
</head>`,
      lineByLineExplanation: [
        { line: 3, text: 'charset="UTF-8" giúp văn bản tiếng Việt hiển thị chính xác không bị lỗi  hay ký tự lạ.' },
        { line: 6, text: 'width=device-width chỉ thị màn hình di động render đúng tỷ lệ, không bị thu nhỏ như trên máy tính để bàn.' },
        { line: 8, text: 'Thẻ <title> xuất hiện trên thanh tab của trình duyệt.' }
      ],
      commonMistakes: [
        'Quên thẻ viewport, khiến trang web khi mở trên điện thoại bị co cụm lại như xem bản desktop thu nhỏ xíu.',
        'Đặt meta charset sau các thẻ có chứa chữ tiếng Việt dẫn đến trình duyệt đọc nhầm bảng mã trước khi đổi sang UTF-8.'
      ],
      whenToUse: 'Bắt buộc khai báo ở những dòng đầu tiên ngay sau thẻ mở <head>.',
      whenNotToUse: 'Không viết nhiều thẻ charset khác nhau trong cùng một tài liệu.',
      realWorldUseCase: 'Tất cả trang web theo tiêu chuẩn Google Mobile-Friendly đều yêu cầu thẻ meta viewport.'
    },
    {
      id: 'sec-html-2-2',
      lessonId: 'les-html-2',
      order: 2,
      conceptName: 'Liên kết tài nguyên ngoại vi: Favicon, CSS & Script',
      title: '2. Thẻ <link> và nhúng tài nguyên bên ngoài',
      explanation: 'Thẻ <link> được dùng để thiết lập mối quan hệ giữa tài liệu hiện tại và tài nguyên bên ngoài (CSS, icon, font). Thuộc tính "rel" xác định mối quan hệ:\n- rel="stylesheet": Liên kết file CSS.\n- rel="icon": Icon hiển thị trên tab trình duyệt (Favicon).\nThẻ <script> dùng để nhúng mã JavaScript, thường kèm thuộc tính "defer" để tải ngầm không chặn việc vẽ giao diện.',
      syntax: '<link rel="icon" type="image/x-icon" href="/favicon.ico">\n<link rel="stylesheet" href="styles.css">\n<script src="app.js" defer></script>',
      codeExample: `<head>
  <!-- Favicon biểu tượng trên tab -->
  <link rel="icon" type="image/svg+xml" href="/logo.svg">

  <!-- File định dạng kiểu CSS -->
  <link rel="stylesheet" href="styles.css">

  <!-- Script tương tác có defer để không chặn render HTML -->
  <script src="main.js" defer></script>
</head>`,
      lineByLineExplanation: [
        { line: 3, text: 'rel="icon" chỉ định file icon hiển thị cạnh title trên tab trình duyệt.' },
        { line: 6, text: 'rel="stylesheet" báo cho trình duyệt đây là bảng định kiểu CSS để tải và áp dụng.' },
        { line: 9, text: 'defer giúp script được tải song song nhưng chỉ thực thi sau khi HTML đã phân tích xong toàn bộ DOM.' }
      ],
      commonMistakes: [
        'Dùng thẻ <style src="..."> thay vì <link rel="stylesheet"> để nạp file CSS.',
        'Đặt thẻ script không có defer/async ở đầu <head>, khiến trang web bị trắng màn hình (render-blocking) cho đến khi script tải xong.'
      ],
      whenToUse: 'Dùng <link> trong <head> cho CSS và Favicon; dùng <script defer> cho các file JS tương tác.',
      whenNotToUse: 'Không dùng <link> để tải dữ liệu nhị phân dung lượng lớn không phục vụ hiển thị ban đầu.',
      realWorldUseCase: 'Nạp phông chữ Google Fonts, biểu tượng ứng dụng PWA và thư viện CSS như Bootstrap/Tailwind.'
    }
  ],
  predictOutputs: [
    {
      id: 'po-html-2-1',
      question: 'Khi chia sẻ link bài viết lên Facebook hoặc Zalo, bộ thẻ nào sau đây quyết định hình ảnh và tiêu đề xem trước (link preview card)?',
      code: `<meta property="og:title" content="Học HTML Siêu Tốc">
<meta property="og:description" content="Khóa học miễn phí chất lượng cao">
<meta property="og:image" content="https://example.com/banner.png">`,
      options: [
        'A. Thẻ <title> và thẻ <img> thông thường trong body',
        'B. Giao thức Open Graph (thẻ meta có thuộc tính property="og:...")',
        'C. Thẻ <link rel="preview">',
        'D. Thẻ <header> trong phần thân của trang'
      ],
      correctAnswer: 'B. Giao thức Open Graph (thẻ meta có thuộc tính property="og:...")',
      explanation: 'Open Graph Protocol do Facebook khởi xướng sử dụng tiền tố "og:" để định danh các siêu dữ liệu khi chia sẻ trên mạng xã hội.',
      hint: 'Để ý tiền tố "og:" là viết tắt của Open Graph.'
    }
  ],
  interactivePractice: {
    id: 'ip-html-2',
    title: 'Thực hành cấu hình Metadata đầy đủ trong thẻ <head>',
    description: 'Thêm thẻ meta charset UTF-8, meta viewport, title "Cửa hàng Sách", và meta description với nội dung "Cung cấp sách công nghệ hàng đầu".',
    starterCode: `<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Cung cấp sách công nghệ hàng đầu">
    <title>Cửa hàng Sách</title>
  </head>
  <body>
    <h1>Chào mừng đến Nhà Sách Tri Thức</h1>
  </body>
</html>`,
    expectedConsoleOutput: 'Chào mừng đến Nhà Sách Tri Thức',
    hint: 'Sử dụng cấu trúc <meta name="description" content="...">.',
    language: 'html'
  },
  exercises: {
    basic: {
      id: 'ex-html-2-basic',
      lessonId: 'les-html-2',
      title: 'Khai báo chuẩn Mobile Viewport và Tiếng Việt',
      difficulty: 'basic',
      learningObjectiveIds: ['LO-HTML-2.1'],
      description: 'Hoàn thiện phần thẻ <head> chứa đúng meta charset="UTF-8", thẻ meta viewport chuẩn thiết bị di động và thẻ title "Khoa Công Nghệ Thông Tin".',
      starterCode: `<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khoa Công Nghệ Thông Tin</title>
</head>`,
      solutionCode: `<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khoa Công Nghệ Thông Tin</title>
</head>`,
      testCases: [
        {
          id: 'tc-h2-1',
          description: 'Kiểm tra thẻ title và meta viewport',
          expectedOutput: 'Khoa Công Nghệ Thông Tin'
        }
      ],
      hints: ['Cú pháp content="width=device-width, initial-scale=1.0".'],
      explanation: 'Đây là cấu hình nền tảng để mọi website đáp ứng giao diện trên smartphone.',
      language: 'html'
    },
    intermediate: {
      id: 'ex-html-2-mid',
      lessonId: 'les-html-2',
      title: 'Liên kết Favicon và Stylesheet',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO-HTML-2.3'],
      description: 'Viết thẻ <link> để nạp favicon có đường dẫn "favicon.ico" và một thẻ <link> nạp file CSS có đường dẫn "assets/style.css".',
      starterCode: `<head>
  <link rel="icon" href="favicon.ico">
  <link rel="stylesheet" href="assets/style.css">
</head>`,
      solutionCode: `<head>
  <link rel="icon" href="favicon.ico">
  <link rel="stylesheet" href="assets/style.css">
</head>`,
      testCases: [
        {
          id: 'tc-h2-2',
          description: 'Kiểm tra thuộc tính rel="stylesheet" và href="assets/style.css"',
          expectedOutput: 'assets/style.css'
        }
      ],
      hints: ['Dùng rel="icon" cho favicon và rel="stylesheet" cho tệp CSS.'],
      explanation: 'Thẻ <link> kết nối tài nguyên ngoại mà không tải trực tiếp nội dung vào trong cây DOM.',
      language: 'html'
    },
    challenge: {
      id: 'ex-html-2-adv',
      lessonId: 'les-html-2',
      title: 'Thiết lập trọn bộ Meta SEO & Open Graph Social',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO-HTML-2.2'],
      description: 'Cấu hình trong thẻ <head> đầy đủ: meta description "Học lập trình web thực chiến", OpenGraph og:title "Khóa Học HTML5", og:image "https://cdn.example.com/banner.jpg" và script file "tracker.js" có thuộc tính defer.',
      starterCode: `<head>
  <meta charset="UTF-8">
  <meta name="description" content="Học lập trình web thực chiến">
  <meta property="og:title" content="Khóa Học HTML5">
  <meta property="og:image" content="https://cdn.example.com/banner.jpg">
  <script src="tracker.js" defer></script>
</head>`,
      solutionCode: `<head>
  <meta charset="UTF-8">
  <meta name="description" content="Học lập trình web thực chiến">
  <meta property="og:title" content="Khóa Học HTML5">
  <meta property="og:image" content="https://cdn.example.com/banner.jpg">
  <script src="tracker.js" defer></script>
</head>`,
      testCases: [
        {
          id: 'tc-h2-3',
          description: 'Kiểm tra đầy đủ thẻ meta description, og:title, og:image và script defer',
          expectedOutput: 'Học lập trình web thực chiến'
        }
      ],
      hints: ['Với Open Graph thuộc tính là property="..." thay vì name="...".'],
      explanation: 'Cấu hình OpenGraph chuẩn giúp bài viết đạt CTR cao khi được chia sẻ trên mạng xã hội.',
      language: 'html'
    }
  },
  quiz: {
    id: 'quiz-html-2',
    lessonId: 'les-html-2',
    title: 'Kiểm tra hiểu biết: Metadata & Tài nguyên',
    passingScore: 70,
    questions: [
      {
        id: 'q-h2-1',
        lessonId: 'les-html-2',
        learningObjectiveId: 'LO-HTML-2.1',
        type: 'multiple_choice',
        difficulty: 'easy',
        prompt: 'Thuộc tính nào của thẻ <meta> dùng để ngăn chặn lỗi vỡ font tiếng Việt có dấu?',
        options: [
          { id: 'a', text: 'charset="UTF-8"' },
          { id: 'b', text: 'language="vi"' },
          { id: 'c', text: 'font="unicode"' },
          { id: 'd', text: 'name="encoding"' }
        ],
        correctAnswer: 'a',
        explanation: 'charset="UTF-8" định nghĩa bộ mã hóa ký tự Unicode cho phép biểu diễn đầy đủ tiếng Việt và mọi ngôn ngữ khác.',
        relatedLessonId: 'les-html-2'
      },
      {
        id: 'q-h2-2',
        lessonId: 'les-html-2',
        learningObjectiveId: 'LO-HTML-2.3',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'Lợi ích lớn nhất khi thêm thuộc tính "defer" vào thẻ <script src="..."> trong <head> là gì?',
        options: [
          { id: 'a', text: 'Giúp mã JavaScript chạy nhanh hơn gấp đôi' },
          { id: 'b', text: 'Tải script song song trong nền mà không chặn việc phân tích dựng giao diện HTML' },
          { id: 'c', text: 'Ẩn mã nguồn JavaScript không cho người dùng xem' },
          { id: 'd', text: 'Tự động kiểm tra lỗi cú pháp của mã script' }
        ],
        correctAnswer: 'b',
        explanation: 'Thuộc tính defer chỉ thị cho trình duyệt tải tệp script trong chế độ nền và chỉ thực thi khi tài liệu HTML đã được parse xong hoàn toàn.',
        relatedLessonId: 'les-html-2'
      }
    ]
  },
  summary: [
    'Thẻ <meta charset="UTF-8"> ngăn lỗi font tiếng Việt và ký tự quốc tế.',
    '<meta name="viewport"> là tiền đề bắt buộc cho Responsive Web Design trên di động.',
    'Dùng Open Graph meta tags (og:title, og:image) để hiển thị card chia sẻ mạng xã hội chuyên nghiệp.',
    '<link rel="stylesheet"> kết nối tệp CSS, <link rel="icon"> thiết lập biểu tượng favicon cho trang web.'
  ],
  suggestedBookmarks: [
    'Bảng cấu hình OpenGraph và Twitter Cards cho SEO',
    'So sánh sự khác biệt giữa script async và script defer'
  ]
};

// ============================================================================
// BÀI 3: TIÊU ĐỀ & NỘI DUNG VĂN BẢN (Headings, Paragraphs & Text Content)
// ============================================================================
export const LESSON_HTML_3: Lesson = {
  id: 'les-html-3',
  moduleId: 'mod-html-3',
  track: 'html',
  language: 'html',
  title: 'HTML 3. Tiêu đề & nội dung văn bản (Headings & Text Content)',
  order: 3,
  durationMinutes: 40,
  difficulty: 'Cơ bản',
  prerequisites: [
    'Biết cách viết thẻ HTML cơ bản bên trong phần thân <body>'
  ],
  learningObjectives: [
    {
      id: 'LO-HTML-3.1',
      code: 'LO-HTML-3.1',
      title: 'Phân cấp tiêu đề từ <h1> đến <h6>',
      description: 'Áp dụng đúng thứ bậc tiêu đề theo ngữ nghĩa (Hierarchy), hiểu quy tắc duy nhất một thẻ <h1> mỗi trang cho SEO.',
      bloomLevel: 'Apply',
      masteryPercentage: 94
    },
    {
      id: 'LO-HTML-3.2',
      code: 'LO-HTML-3.2',
      title: 'Quản lý dòng chảy văn bản: <p>, <br>, <hr>',
      description: 'Sử dụng đoạn văn <p>, ngắt dòng mềm <br> và đường kẻ phân cách chủ đề <hr> đúng mục đích ngữ nghĩa.',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    },
    {
      id: 'LO-HTML-3.3',
      code: 'LO-HTML-3.3',
      title: 'Giữ nguyên định dạng với <pre> và trích dẫn <blockquote>',
      description: 'Hiển thị văn bản giữ nguyên khoảng trắng/dòng mới với <pre> và trích dẫn nguồn uy tín với <blockquote cite="...">.',
      bloomLevel: 'Understand',
      masteryPercentage: 86
    }
  ],
  sections: [
    {
      id: 'sec-html-3-1',
      lessonId: 'les-html-3',
      order: 1,
      conceptName: 'Hệ thống phân cấp tiêu đề <h1> đến <h6>',
      title: '1. Thứ bậc tiêu đề (Heading Hierarchy) và tầm quan trọng với SEO',
      explanation: 'HTML cung cấp 6 cấp độ tiêu đề từ <h1> (quan trọng nhất) đến <h6> (ít quan trọng nhất). Tiêu đề không đơn thuần để phóng to chữ (việc làm to chữ là nhiệm vụ của CSS), mà quan trọng hơn là định hình dàn ý mục lục tài liệu (Outline) cho công cụ tìm kiếm và trình đọc màn hình của người khiếm thị. Mỗi trang web chỉ nên có duy nhất MỘT thẻ <h1> đại diện cho chủ đề cốt lõi của trang.',
      syntax: '<h1>Tiêu đề trang (Duy nhất 1)</h1>\n<h2>Tiêu đề mục lớn</h2>\n<h3>Tiêu đề tiểu mục con</h3>',
      codeExample: `<!-- Cấu trúc phân cấp chuẩn, không nhảy cóc cấp độ -->
<h1>Khóa Học Kỹ Thuật Lập Trình Frontend</h1>

<h2>Chương 1: Nền tảng HTML5</h2>
<p>Nội dung giới thiệu về HTML5...</p>

<h3>1.1 Cấu trúc thẻ và DOM</h3>
<p>Chi tiết về thẻ và thuộc tính...</p>

<h3>1.2 Semantic Layout</h3>
<p>Chi tiết về bố cục ngữ nghĩa...</p>

<h2>Chương 2: Thiết kế giao diện CSS3</h2>
<p>Bắt đầu học về định kiểu màu sắc...</p>`,
      lineByLineExplanation: [
        { line: 2, text: '<h1> là tiêu đề cao nhất, mỗi trang chỉ có 1 thẻ duy nhất.' },
        { line: 4, text: '<h2> phân vùng các chủ đề lớn ngang hàng nhau.' },
        { line: 7, text: '<h3> là các nhánh chi tiết trực thuộc mục <h2> ở trên.' }
      ],
      commonMistakes: [
        'Dùng nhiều thẻ <h1> rải rác khắp trang để làm chữ to đậm, vi phạm cấu trúc SEO nghiêm ngặt.',
        'Nhảy cóc cấp độ: từ <h1> nhảy thẳng xuống <h4> mà không qua <h2> và <h3>.'
      ],
      whenToUse: 'Dùng để cấu trúc hóa nội dung bài viết, tạo mục lục rõ ràng.',
      whenNotToUse: 'Không dùng thẻ heading chỉ với mục đích làm chữ to (hãy dùng class CSS font-size).',
      realWorldUseCase: 'Các trang báo chí (VnExpress, Tuổi Trẻ) dùng <h1> cho tên bài báo và <h2>/<h3> cho các tiêu mục nội dung.'
    },
    {
      id: 'sec-html-3-2',
      lessonId: 'les-html-3',
      order: 2,
      conceptName: 'Đoạn văn <p>, ngắt dòng <br>, <hr> và văn bản nguyên gốc <pre>',
      title: '2. Đoạn văn bản, ngắt dòng và khối nguyên bản',
      explanation: 'Trong HTML, trình duyệt tự động nén nhiều khoảng trắng liên tiếp và dấu xuống dòng thành một dấu cách duy nhất (Whitespace collapsing). Do đó:\n- Để tạo đoạn văn bản có khoảng đệm trên dưới: Dùng thẻ <p>.\n- Để xuống dòng trong cùng một câu (như lời thơ, địa chỉ): Dùng thẻ <br>.\n- Để phân cách giữa hai chủ đề nội dung khác nhau: Dùng thẻ <hr>.\n- Để hiển thị văn bản giữ nguyên mọi thụt lề và xuống dòng: Dùng thẻ <pre>.',
      syntax: '<p>Đoạn văn bản...</p>\n<p>Dòng 1<br>Dòng 2 tiếp nối</p>\n<hr>\n<pre>Văn bản    giữ   nguyên cách lề</pre>',
      codeExample: `<p>Địa chỉ văn phòng công ty:<br>
Tầng 5, Tòa nhà FPT, Phố Duy Tân<br>
Quận Cầu Giấy, Hà Nội</p>

<hr>

<blockquote cite="https://w3c.org">
  "Sức mạnh của Web nằm ở tính phổ quát của nó. Truy cập bình đẳng cho tất cả mọi người là khía cạnh cốt lõi."
</blockquote>

<pre>
function sayHello() {
    console.log("Giữ nguyên thụt dòng 4 dấu cách!");
}
</pre>`,
      lineByLineExplanation: [
        { line: 1, text: '<br> ngắt dòng địa chỉ mà không tạo ra khoảng đệm lớn như thẻ <p>.' },
        { line: 5, text: '<hr> tạo vạch phân cách trực quan và báo hiệu đổi ngữ cảnh nội dung.' },
        { line: 7, text: '<blockquote> biểu thị một đoạn văn bản trích dẫn từ nguồn khác.' },
        { line: 11, text: '<pre> giữ nguyên chính xác từng dấu cách thụt lề và xuống dòng trong mã.' }
      ],
      commonMistakes: [
        'Lạm dụng liên tiếp nhiều thẻ <br><br><br> để tạo khoảng cách dòng (hãy dùng thuộc tính margin của CSS).',
        'Đặt thẻ khối như <p> hoặc <div> bên trong thẻ <p> khác (vi phạm cú pháp HTML).'
      ],
      whenToUse: 'Dùng <p> cho văn bản thông thường, <br> cho địa chỉ/thơ, <pre> cho hiển thị ASCII art hoặc khối code.',
      whenNotToUse: 'Không dùng <p> bọc quanh các phần tử danh sách <ul> hoặc bảng <table>.',
      realWorldUseCase: 'Hiển thị bài viết blog, thơ, trích dẫn bài phát biểu và hiển thị code ví dụ trên tài liệu kỹ thuật.'
    }
  ],
  predictOutputs: [
    {
      id: 'po-html-3-1',
      question: 'Đoạn mã sau hiển thị văn bản như thế nào trên trình duyệt?',
      code: `<p>
  Xin chào      các bạn
  sinh viên        CNTT!
</p>`,
      options: [
        'A. Giữ nguyên toàn bộ khoảng cách trắng và ngắt dòng như trong mã nguồn',
        'B. Bị thu gọn thành: "Xin chào các bạn sinh viên CNTT!" trên một dòng duy nhất',
        'C. Trình duyệt báo lỗi cú pháp do có quá nhiều khoảng trắng',
        'D. Văn bản biến mất vì không được định dạng CSS'
      ],
      correctAnswer: 'B. Bị thu gọn thành: "Xin chào các bạn sinh viên CNTT!" trên một dòng duy nhất',
      explanation: 'Theo cơ chế Whitespace Collapsing của HTML, mọi khoảng trắng liên tiếp và dấu xuống dòng bên trong thẻ thông thường đều bị nén lại thành một khoảng trắng duy nhất.',
      hint: 'Trình duyệt HTML tự động gộp các dấu cách liên tiếp trừ phi dùng thẻ <pre>.'
    }
  ],
  interactivePractice: {
    id: 'ip-html-3',
    title: 'Thực hành phân cấp tiêu đề và trích dẫn',
    description: 'Tạo thẻ <h1> "Bản Tin Công Nghệ", theo sau là thẻ <h2> "Trí Tuệ Nhân Tạo 2026", một đoạn văn <p> ngắn và một thẻ <hr> ngăn cách.',
    starterCode: `<h1>Bản Tin Công Nghệ</h1>
<h2>Trí Tuệ Nhân Tạo 2026</h2>
<p>AI đang thay đổi cách lập trình viên xây dựng phần mềm.</p>
<hr>`,
    expectedConsoleOutput: 'Bản Tin Công Nghệ',
    hint: 'Sử dụng các thẻ h1, h2, p và hr theo đúng thứ tự.',
    language: 'html'
  },
  exercises: {
    basic: {
      id: 'ex-html-3-basic',
      lessonId: 'les-html-3',
      title: 'Tổ chức bài viết với Heading phân cấp',
      difficulty: 'basic',
      learningObjectiveIds: ['LO-HTML-3.1'],
      description: 'Tạo cấu trúc bài viết có một <h1> "Học Web Hiện Đại", một <h2> "Các ngôn ngữ cốt lõi" và một <p> "HTML, CSS và JavaScript là kiềng 3 chân của Front-end."',
      starterCode: `<h1>Học Web Hiện Đại</h1>
<h2>Các ngôn ngữ cốt lõi</h2>
<p>HTML, CSS và JavaScript là kiềng 3 chân của Front-end.</p>`,
      solutionCode: `<h1>Học Web Hiện Đại</h1>
<h2>Các ngôn ngữ cốt lõi</h2>
<p>HTML, CSS và JavaScript là kiềng 3 chân của Front-end.</p>`,
      testCases: [
        {
          id: 'tc-h3-1',
          description: 'Kiểm tra thẻ h1 và h2',
          expectedOutput: 'Học Web Hiện Đại'
        }
      ],
      hints: ['Kiểm tra chính tả các thẻ h1, h2, p.'],
      explanation: 'Phân cấp rõ ràng giúp trình đọc màn hình tạo mục lục điều hướng chính xác.',
      language: 'html'
    },
    intermediate: {
      id: 'ex-html-3-mid',
      lessonId: 'les-html-3',
      title: 'Đoạn văn ngắt dòng địa chỉ liên hệ và đường kẻ',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO-HTML-3.2'],
      description: 'Tạo đoạn văn <p> thông tin liên hệ gồm 2 dòng ngăn cách bằng thẻ <br>: dòng 1 là "Hotline: 1900-1234", dòng 2 là "Email: contact@edu.vn", phía dưới là thẻ phân cách <hr>.',
      starterCode: `<p>Hotline: 1900-1234<br>Email: contact@edu.vn</p>
<hr>`,
      solutionCode: `<p>Hotline: 1900-1234<br>Email: contact@edu.vn</p>
<hr>`,
      testCases: [
        {
          id: 'tc-h3-2',
          description: 'Kiểm tra thẻ p có br ngắt dòng và thẻ hr',
          expectedOutput: 'Hotline: 1900-1234'
        }
      ],
      hints: ['Dùng thẻ <br> để ngắt dòng bên trong một đoạn văn bản.'],
      explanation: '<br> giữ nội dung trong cùng một khối ngữ nghĩa đoạn văn thay vì tách thành hai đoạn riêng biệt.',
      language: 'html'
    },
    challenge: {
      id: 'ex-html-3-adv',
      lessonId: 'les-html-3',
      title: 'Tài liệu kỹ thuật kết hợp blockquote và pre',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO-HTML-3.3'],
      description: 'Tạo tiêu đề <h1> "Tài Liệu Cú Pháp", thẻ <blockquote> chứa trích dẫn "Code là thơ ca của logic", và khối <pre> chứa mã nguồn thụt lề 2 dấu cách: "console.log(\\"OK\\");".',
      starterCode: `<h1>Tài Liệu Cú Pháp</h1>
<blockquote>Code là thơ ca của logic</blockquote>
<pre>
  console.log("OK");
</pre>`,
      solutionCode: `<h1>Tài Liệu Cú Pháp</h1>
<blockquote>Code là thơ ca của logic</blockquote>
<pre>
  console.log("OK");
</pre>`,
      testCases: [
        {
          id: 'tc-h3-3',
          description: 'Kiểm tra blockquote và pre hiển thị đúng',
          expectedOutput: 'Code là thơ ca của logic'
        }
      ],
      hints: ['Thẻ <pre> bảo toàn toàn bộ khoảng trắng và thụt dòng.'],
      explanation: 'Khối <pre> dùng font chữ đơn khoảng (monospace) mặc định, cực kỳ thích hợp cho hiển thị code.',
      language: 'html'
    }
  },
  quiz: {
    id: 'quiz-html-3',
    lessonId: 'les-html-3',
    title: 'Kiểm tra hiểu biết: Tiêu đề & Văn bản',
    passingScore: 70,
    questions: [
      {
        id: 'q-h3-1',
        lessonId: 'les-html-3',
        learningObjectiveId: 'LO-HTML-3.1',
        type: 'multiple_choice',
        difficulty: 'easy',
        prompt: 'Theo chuẩn SEO và thực hành tốt nhất (Best Practice), một trang web nên có tối đa bao nhiêu thẻ <h1>?',
        options: [
          { id: 'a', text: '1 thẻ duy nhất đại diện cho tiêu đề chính của trang' },
          { id: 'b', text: 'Có thể dùng thoải mái bao nhiêu tùy thích' },
          { id: 'c', text: 'Tối thiểu 6 thẻ tương ứng với 6 cấp độ' },
          { id: 'd', text: 'Chính xác 3 thẻ' }
        ],
        correctAnswer: 'a',
        explanation: 'Mỗi trang chỉ nên có duy nhất 1 thẻ <h1> để báo hiệu rõ ràng cho Googlebot và trình đọc màn hình về chủ đề độc nhất của tài liệu.',
        relatedLessonId: 'les-html-3'
      },
      {
        id: 'q-h3-2',
        lessonId: 'les-html-3',
        learningObjectiveId: 'LO-HTML-3.3',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'Khi muốn hiển thị đoạn văn bản có nhiều dấu thụt lề cách đầu dòng và giữ nguyên xuống dòng mà không cần dùng nhiều thẻ <br>, thẻ nào là lựa chọn tối ưu?',
        options: [
          { id: 'a', text: '<p>' },
          { id: 'b', text: '<span>' },
          { id: 'c', text: '<pre>' },
          { id: 'd', text: '<code>' }
        ],
        correctAnswer: 'c',
        explanation: '<pre> (Preformatted Text) giữ nguyên 100% khoảng trắng và dấu xuống dòng từ file mã nguồn HTML.',
        relatedLessonId: 'les-html-3'
      }
    ]
  },
  summary: [
    'Hệ thống heading từ <h1> đến <h6> xây dựng dàn ý cấu trúc bài viết (Document Outline).',
    'Chỉ nên sử dụng duy nhất một thẻ <h1> cho mỗi trang để tối ưu SEO.',
    'Trình duyệt mặc định gộp khoảng trắng liên tiếp; dùng <pre> khi cần giữ nguyên định dạng dòng chữ.',
    'Dùng <p> cho đoạn văn, <br> ngắt dòng cục bộ, <hr> ngăn chia chuyển đổi chủ đề.'
  ],
  suggestedBookmarks: [
    'Quy tắc chuẩn phân cấp Outline của W3C',
    'Phân biệt trích dẫn <blockquote> (khối dài) và <q> (trích dẫn ngắn nội dòng)'
  ]
};

// ============================================================================
// BÀI 4: ĐỊNH DẠNG & Ý NGHĨA VĂN BẢN (Text Formatting & Inline Semantics)
// ============================================================================
export const LESSON_HTML_4: Lesson = {
  id: 'les-html-4',
  moduleId: 'mod-html-4',
  track: 'html',
  language: 'html',
  title: 'HTML 4. Định dạng & ý nghĩa văn bản (Text Formatting & Semantics)',
  order: 4,
  durationMinutes: 45,
  difficulty: 'Cơ bản',
  prerequisites: [
    'Hiểu các thẻ khối đoạn văn <p> và tiêu đề từ Bài 3'
  ],
  learningObjectives: [
    {
      id: 'LO-HTML-4.1',
      code: 'LO-HTML-4.1',
      title: 'Phân biệt <strong> vs <b> và <em> vs <i>',
      description: 'Hiểu sự khác biệt cốt lõi giữa thẻ định dạng ngữ nghĩa (semantic importance/emphasis) và thẻ trang trí thuần túy thị giác.',
      bloomLevel: 'Analyze',
      masteryPercentage: 90
    },
    {
      id: 'LO-HTML-4.2',
      code: 'LO-HTML-4.2',
      title: 'Sử dụng các thẻ đánh dấu chuyên biệt: mark, small, del, ins',
      description: 'Ứng dụng thẻ highlight <mark>, chữ chú thích nhỏ <small>, nội dung đã xóa <del> và bổ sung <ins> trong thương mại điện tử.',
      bloomLevel: 'Apply',
      masteryPercentage: 88
    },
    {
      id: 'LO-HTML-4.3',
      code: 'LO-HTML-4.3',
      title: 'Định dạng mã kỹ thuật: code, kbd, sub, sup, abbr',
      description: 'Biểu diễn đoạn mã <code>, phím tắt người dùng nhấn <kbd>, chỉ số dưới H₂O <sub>, số mũ x² <sup> và từ viết tắt <abbr title="...">.',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    }
  ],
  sections: [
    {
      id: 'sec-html-4-1',
      lessonId: 'les-html-4',
      order: 1,
      conceptName: 'Ngữ nghĩa vs Thị giác: strong vs b, em vs i',
      title: '1. Bản chất ngữ nghĩa (Semantic) của các thẻ nhấn mạnh',
      explanation: 'Trong HTML5 hiện đại, mọi thẻ đều mang ngữ nghĩa dành cho máy tính và công nghệ hỗ trợ:\n- <strong>: Biểu thị nội dung có tầm quan trọng sống còn, nghiêm trọng hoặc khẩn cấp. Trình đọc màn hình sẽ đọc với giọng nhấn mạnh (giọng đanh hơn). Mặc định in đậm.\n- <b>: Chỉ in đậm thuần túy về mặt hình thức thị giác mà không tăng thêm trọng lượng ý nghĩa.\n- <em> (Emphasis): Biểu thị nhấn mạnh ngữ điệu câu (Stress emphasis), thay đổi ý nghĩa ngữ điệu. Mặc định in nghiêng.\n- <i>: Thể hiện tiếng nước ngoài, thuật ngữ kỹ thuật, tên tác phẩm, hoặc trạng thái tâm trạng mà không đổi ngữ điệu nhấn mạnh.',
      syntax: '<strong>Nội dung quan trọng</strong> vs <b>In đậm hình thức</b>\n<em>Nhấn mạnh ngữ điệu</em> vs <i>In nghiêng thuật ngữ</i>',
      codeExample: `<p>
  <strong>Cảnh báo nguy hiểm:</strong> Tuyệt đối không chạm vào dây điện hở!
</p>

<p>
  Tôi <em>rất</em> muốn học lập trình web! (nhấn mạnh sự khát khao)
</p>

<p>
  Thuật ngữ tiếng Latin <i>Carpe diem</i> nghĩa là hãy nắm bắt ngày hôm nay.
</p>`,
      lineByLineExplanation: [
        { line: 2, text: '<strong> báo cho máy tìm kiếm và người khiếm thị biết đây là thông tin khẩn cấp/quan trọng.' },
        { line: 6, text: '<em> thay đổi cách phát âm khi đọc văn bản.' },
        { line: 10, text: '<i> định dạng từ vựng ngoại ngữ mà không làm thay đổi trọng số ngữ nghĩa.' }
      ],
      commonMistakes: [
        'Dùng <b> cho mọi trường hợp cần in đậm thay vì ưu tiên dùng <strong> cho nội dung quan trọng.',
        'Lạm dụng in đậm toàn bộ đoạn văn bản khiến không còn điểm nhấn.'
      ],
      whenToUse: 'Dùng <strong> cho cảnh báo, từ khóa cốt lõi; dùng <em> khi muốn người đọc nhấn giọng vào từ đó.',
      whenNotToUse: 'Không dùng <strong> chỉ để biến chữ thành màu đen đậm trong thiết kế (hãy dùng CSS font-weight: bold).',
      realWorldUseCase: 'Hiển thị giá trị cảnh báo hệ thống ngân hàng, điều khoản dịch vụ bắt buộc và nhấn mạnh từ khóa sản phẩm.'
    },
    {
      id: 'sec-html-4-2',
      lessonId: 'les-html-4',
      order: 2,
      conceptName: 'Thẻ kỹ thuật & Thương mại: mark, del, ins, code, kbd, sub, sup, abbr',
      title: '2. Các thẻ nội dòng đặc thù: Code, Giá cũ/mới, Công thức toán',
      explanation: 'HTML hỗ trợ sẵn rất nhiều thẻ nội dòng tinh tế:\n- <mark>: Tô sáng (highlight màu vàng) từ khóa tìm kiếm.\n- <del> & <ins>: Biểu thị nội dung bị xóa gạch ngang và nội dung mới bổ sung gạch chân (rất phổ biến cho giá sale khuyến mãi).\n- <code>: Hiển thị tên biến, hàm hoặc cú pháp lập trình.\n- <kbd>: Biểu thị phím tắt bàn phím người dùng cần bấm (ví dụ Ctrl + C).\n- <sub> & <sup>: Chỉ số dưới (H₂O) và số mũ (E = mc²).\n- <abbr title="...">: Giải thích từ viết tắt khi rê chuột vào.',
      syntax: '<mark>tô vàng</mark>\n<del>giá cũ</del> <ins>giá mới</ins>\n<code>const x = 1;</code>\n<kbd>Ctrl</kbd> + <kbd>S</kbd>\nH<sub>2</sub>O, 10<sup>2</sup>\n<abbr title="World Wide Web">WWW</abbr>',
      codeExample: `<p>
  Giá bán đặc biệt: <del>500.000đ</del> <ins>350.000đ</ins>!
</p>

<p>
  Nhấn tổ hợp phím <kbd>Ctrl</kbd> + <kbd>S</kbd> để lưu lại tệp mã nguồn.
</p>

<p>
  Công thức hóa học của nước là H<sub>2</sub>O và diện tích là 50m<sup>2</sup>.
</p>

<p>
  Tổ chức <abbr title="World Health Organization">WHO</abbr> ban hành hướng dẫn mới.
</p>`,
      lineByLineExplanation: [
        { line: 2, text: '<del> gạch ngang giá gốc và <ins> gạch chân mức giá khuyến mãi.' },
        { line: 6, text: '<kbd> bao bọc các phím bấm vật lý.' },
        { line: 10, text: '<sub> hạ thấp số 2 và <sup> đẩy số 2 lên trên dạng số mũ.' },
        { line: 14, text: '<abbr> hiện tooltip giải thích khi rê chuột vào từ WHO.' }
      ],
      commonMistakes: [
        'Dùng dấu mũ viết tay "m2" hoặc "H2O" thay vì dùng đúng thẻ <sup> và <sub> chuẩn toán học.',
        'Quên thuộc tính title trong thẻ <abbr> khiến từ viết tắt không có phần giải nghĩa mở rộng.'
      ],
      whenToUse: 'Dùng trong trang bán hàng (giá sale), tài liệu hướng dẫn phần mềm (phím tắt, code) và bài viết khoa học.',
      whenNotToUse: 'Không dùng <mark> bừa bãi làm trang web bị chói mắt như trang sách bị tô bút dạ quang toàn bộ.',
      realWorldUseCase: 'Trang thương mại điện tử Shopee hiển thị giá cũ gạch ngang, trang tài liệu GitHub hiển thị phím tắt và code.'
    }
  ],
  predictOutputs: [
    {
      id: 'po-html-4-1',
      question: 'Khi rê chuột lên từ viết tắt trong đoạn mã sau, người dùng sẽ thấy thông tin gì?',
      code: `<p>Tiêu chuẩn web được duy trì bởi <abbr title="World Wide Web Consortium">W3C</abbr>.</p>`,
      options: [
        'A. Không có gì xảy ra',
        'B. Một ô chú thích nhỏ (Tooltip) hiện lên dòng chữ "World Wide Web Consortium"',
        'C. Trình duyệt tự động chuyển hướng đến trang web w3c.org',
        'D. Từ W3C sẽ biến mất khỏi màn hình'
      ],
      correctAnswer: 'B. Một ô chú thích nhỏ (Tooltip) hiện lên dòng chữ "World Wide Web Consortium"',
      explanation: 'Thuộc tính title của thẻ <abbr> được các trình duyệt mặc định hiển thị thành tooltip nổi khi người dùng hover chuột vào.',
      hint: 'Thuộc tính title trên các thẻ HTML tạo ra tooltip gốc của trình duyệt.'
    }
  ],
  interactivePractice: {
    id: 'ip-html-4',
    title: 'Thực hành các thẻ ngữ nghĩa và công thức',
    description: 'Viết đoạn văn hiển thị giá cũ <del>1.000.000đ</del> và giá mới <strong>800.000đ</strong>, cùng công thức toán 10<sup>2</sup> = 100.',
    starterCode: `<p>
  Giá ưu đãi: <del>1.000.000đ</del> <strong>800.000đ</strong>
</p>
<p>
  Công thức tính: 10<sup>2</sup> = 100
</p>`,
    expectedConsoleOutput: 'Giá ưu đãi: 800.000đ',
    hint: 'Sử dụng thẻ del cho giá cũ, strong cho giá mới và sup cho số mũ 2.',
    language: 'html'
  },
  exercises: {
    basic: {
      id: 'ex-html-4-basic',
      lessonId: 'les-html-4',
      title: 'Tô sáng từ khóa và nhấn mạnh thông tin',
      difficulty: 'basic',
      learningObjectiveIds: ['LO-HTML-4.1', 'LO-HTML-4.2'],
      description: 'Tạo đoạn văn <p> chứa cụm từ "Lưu ý quan trọng" đặt trong thẻ <strong>, và từ "bắt buộc" được tô sáng bằng thẻ <mark>.',
      starterCode: `<p>
  <strong>Lưu ý quan trọng:</strong> Điểm danh là <mark>bắt buộc</mark> đối với tất cả sinh viên.
</p>`,
      solutionCode: `<p>
  <strong>Lưu ý quan trọng:</strong> Điểm danh là <mark>bắt buộc</mark> đối với tất cả sinh viên.
</p>`,
      testCases: [
        {
          id: 'tc-h4-1',
          description: 'Kiểm tra strong và mark',
          expectedOutput: 'Lưu ý quan trọng:'
        }
      ],
      hints: ['Đảm bảo thẻ strong và mark được đóng đúng bên trong thẻ p.'],
      explanation: 'Thẻ strong tạo mức độ ưu tiên cao, thẻ mark thu hút tầm nhìn thị giác.',
      language: 'html'
    },
    intermediate: {
      id: 'ex-html-4-mid',
      lessonId: 'les-html-4',
      title: 'Hiển thị phím tắt và đoạn mã lập trình',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO-HTML-4.3'],
      description: 'Tạo đoạn văn hướng dẫn: "Nhấn <kbd>Ctrl</kbd> + <kbd>C</kbd> để sao chép biến <code>studentName</code>."',
      starterCode: `<p>Nhấn <kbd>Ctrl</kbd> + <kbd>C</kbd> để sao chép biến <code>studentName</code>.</p>`,
      solutionCode: `<p>Nhấn <kbd>Ctrl</kbd> + <kbd>C</kbd> để sao chép biến <code>studentName</code>.</p>`,
      testCases: [
        {
          id: 'tc-h4-2',
          description: 'Kiểm tra thẻ kbd và code',
          expectedOutput: 'studentName'
        }
      ],
      hints: ['Dùng kbd cho các phím bấm và code cho biến lập trình.'],
      explanation: 'Sử dụng đúng thẻ giúp cải thiện khả năng đọc của tài liệu kỹ thuật.',
      language: 'html'
    },
    challenge: {
      id: 'ex-html-4-adv',
      lessonId: 'les-html-4',
      title: 'Bảng thông số kỹ thuật khoa học & từ viết tắt',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO-HTML-4.2', 'LO-HTML-4.3'],
      description: 'Tạo một đoạn văn chứa công thức hóa học khí cacbonic CO<sub>2</sub>, diện tích phòng 25m<sup>2</sup>, từ viết tắt <abbr title="Cascading Style Sheets">CSS</abbr> và giá tiền cũ <del>200$</del> giảm còn <ins>150$</ins>.',
      starterCode: `<p>
  Khí CO<sub>2</sub> sinh ra trong phòng rộng 25m<sup>2</sup>.
  Tài liệu <abbr title="Cascading Style Sheets">CSS</abbr> có giá khuyến mãi từ <del>200$</del> xuống còn <ins>150$</ins>.
</p>`,
      solutionCode: `<p>
  Khí CO<sub>2</sub> sinh ra trong phòng rộng 25m<sup>2</sup>.
  Tài liệu <abbr title="Cascading Style Sheets">CSS</abbr> có giá khuyến mãi từ <del>200$</del> xuống còn <ins>150$</ins>.
</p>`,
      testCases: [
        {
          id: 'tc-h4-3',
          description: 'Kiểm tra sub, sup, abbr, del và ins',
          expectedOutput: 'Cascading Style Sheets'
        }
      ],
      hints: ['Kiểm tra chính xác thẻ sub cho CO2 và sup cho m2.'],
      explanation: 'Bộ thẻ ngữ nghĩa nội dòng giúp trình duyệt và công cụ tìm kiếm hiểu chính xác các ký hiệu toán lý hóa.',
      language: 'html'
    }
  },
  quiz: {
    id: 'quiz-html-4',
    lessonId: 'les-html-4',
    title: 'Kiểm tra hiểu biết: Định dạng & Ý nghĩa văn bản',
    passingScore: 70,
    questions: [
      {
        id: 'q-h4-1',
        lessonId: 'les-html-4',
        learningObjectiveId: 'LO-HTML-4.1',
        type: 'multiple_choice',
        difficulty: 'easy',
        prompt: 'Sự khác nhau cơ bản giữa thẻ <strong> và thẻ <b> là gì?',
        options: [
          { id: 'a', text: '<strong> mang ý nghĩa nội dung có tầm quan trọng lớn, còn <b> chỉ in đậm hình thức' },
          { id: 'b', text: '<strong> làm chữ to hơn, còn <b> làm chữ đậm hơn' },
          { id: 'c', text: '<b> là thẻ mới trong HTML5, còn <strong> sắp bị loại bỏ' },
          { id: 'd', text: 'Hai thẻ này hoàn toàn giống hệt nhau không có bất kỳ điểm khác biệt nào' }
        ],
        correctAnswer: 'a',
        explanation: 'Thẻ <strong> mang giá trị ngữ nghĩa (semantic importance) báo hiệu cho trình đọc màn hình đọc to rõ hơn, trong khi <b> chỉ là thẻ kiểu dáng thị giác truyền thống.',
        relatedLessonId: 'les-html-4'
      },
      {
        id: 'q-h4-2',
        lessonId: 'les-html-4',
        learningObjectiveId: 'LO-HTML-4.3',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'Để hiển thị tổ hợp phím tắt mà người dùng máy tính cần bấm trên bàn phím theo đúng chuẩn ngữ nghĩa HTML, nên dùng thẻ nào?',
        options: [
          { id: 'a', text: '<button>' },
          { id: 'b', text: '<key>' },
          { id: 'c', text: '<kbd>' },
          { id: 'd', text: '<input>' }
        ],
        correctAnswer: 'c',
        explanation: '<kbd> (Keyboard Input) đại diện cho một phím bấm vật lý hoặc thao tác nhập liệu từ bàn phím người dùng.',
        relatedLessonId: 'les-html-4'
      }
    ]
  },
  summary: [
    'Ưu tiên dùng <strong> và <em> để cung cấp ngữ nghĩa thay vì chỉ dùng <b> và <i> thuần thị giác.',
    'Dùng <mark> để highlight từ khóa tìm kiếm, <del> và <ins> biểu thị nội dung thay đổi hoặc giảm giá.',
    'Sử dụng <code> cho mã lệnh và <kbd> cho thao tác phím bấm của người dùng.',
    'Thẻ <sub> dùng cho chỉ số dưới (H₂O) và <sup> cho số mũ (x²).'
  ],
  suggestedBookmarks: [
    'Quy chuẩn trợ năng A11y đối với các thẻ định dạng nội dòng',
    'Bảng tra cứu các thẻ Semantics Text Formatting trong đặc tả WHATWG'
  ]
};
