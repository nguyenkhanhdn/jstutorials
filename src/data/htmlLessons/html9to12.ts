import { Lesson } from '../../types';

// ============================================================================
// BÀI 9: FORM & NHẬP LIỆU (Forms, Inputs & Validation)
// ============================================================================
export const LESSON_HTML_9: Lesson = {
  id: 'les-html-9',
  moduleId: 'mod-html-9',
  track: 'html',
  language: 'html',
  title: 'HTML 9. Form & nhập liệu (Forms, Inputs & Validation)',
  order: 9,
  durationMinutes: 55,
  difficulty: 'Trung bình',
  prerequisites: [
    'Nắm vững thẻ và thuộc tính từ các bài trước',
    'Hiểu cách thức người dùng gửi thông tin đăng ký/đăng nhập lên máy chủ'
  ],
  learningObjectives: [
    {
      id: 'LO-HTML-9.1',
      code: 'LO-HTML-9.1',
      title: 'Cấu trúc biểu mẫu: <form>, action, method và cặp <label for>',
      description: 'Hiểu phương thức GET vs POST, liên kết nhãn <label for="id"> với ô nhập liệu để mở rộng vùng nhấp chuột cho người dùng.',
      bloomLevel: 'Apply',
      masteryPercentage: 95
    },
    {
      id: 'LO-HTML-9.2',
      code: 'LO-HTML-9.2',
      title: 'Làm chủ các loại <input> hiện đại và phần tử đa dạng',
      description: 'Sử dụng text, email, password, number, date, checkbox, radio, file, range, color, kết hợp <textarea>, <select>, <optgroup>, <datalist>.',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    },
    {
      id: 'LO-HTML-9.3',
      code: 'LO-HTML-9.3',
      title: 'Xác thực dữ liệu phía Client (Native HTML5 Validation)',
      description: 'Thiết lập ràng buộc dữ liệu tự động với required, pattern (Regex), min, max, minlength, maxlength, placeholder, disabled, readonly.',
      bloomLevel: 'Apply',
      masteryPercentage: 88
    }
  ],
  sections: [
    {
      id: 'sec-html-9-1',
      lessonId: 'les-html-9',
      order: 1,
      conceptName: 'Biểu mẫu <form> và quy chuẩn vàng liên kết <label for>',
      title: '1. Thẻ <form>, phương thức gửi dữ liệu và tầm quan trọng của <label>',
      explanation: 'Thẻ <form> là công cụ thu thập thông tin từ người dùng. Hai thuộc tính cốt lõi:\n- action: URL của máy chủ xử lý dữ liệu sau khi nhấn Submit.\n- method: Phương thức HTTP. "GET" đính dữ liệu lên thanh địa chỉ (dùng cho tìm kiếm). "POST" đóng gói dữ liệu trong thân body bảo mật (dùng cho đăng nhập, mật khẩu, thanh toán).\nMỗi ô nhập liệu <input> BẮT BUỘC phải có một thẻ <label> đi kèm. Thuộc tính for="..." của thẻ <label> phải trùng khớp chính xác với id="..." của <input>. Nhờ đó khi người dùng bấm vào chữ nhãn, con trỏ tự động nhảy vào ô nhập liệu (tăng diện tích nhấp trên màn hình cảm ứng).',
      syntax: '<form action="/api/login" method="POST">\n  <label for="user-email">Email:</label>\n  <input type="email" id="user-email" name="email" required>\n  <button type="submit">Đăng nhập</button>\n</form>',
      codeExample: `<form action="/api/register" method="POST">
  <!-- Nhóm Họ và Tên -->
  <div>
    <label for="fullname">Họ và tên của bạn:</label>
    <input type="text" id="fullname" name="fullName" placeholder="Ví dụ: Nguyễn Văn An" required>
  </div>

  <!-- Nhóm Mật khẩu -->
  <div>
    <label for="pwd">Mật khẩu:</label>
    <input type="password" id="pwd" name="password" minlength="8" required>
  </div>

  <!-- Nút gửi form -->
  <button type="submit">Đăng ký tài khoản</button>
</form>`,
      lineByLineExplanation: [
        { line: 1, text: 'method="POST" bảo mật thông tin tài khoản không bị lộ trên thanh URL trình duyệt.' },
        { line: 4, text: 'for="fullname" kết nối trực tiếp với id="fullname" ở dòng 5.' },
        { line: 5, text: 'name="fullName" là tên biến dữ liệu được gửi lên Server; required bắt buộc không được để trống.' },
        { line: 10, text: 'type="password" tự động mã hóa ký tự thành các dấu chấm tròn đen bảo mật.' },
        { line: 14, text: 'button type="submit" kích hoạt tiến trình kiểm tra hợp lệ và gửi form.' }
      ],
      commonMistakes: [
        'Dùng method="GET" cho form đăng nhập/đăng ký có mật khẩu, khiến mật khẩu bị phơi bày toàn bộ trên lịch sử trình duyệt URL.',
        'Quên thuộc tính name="..." trên thẻ <input>, khiến dữ liệu của ô đó hoàn toàn bị bỏ rơi không được gửi lên Server.'
      ],
      whenToUse: 'Dùng cho mọi thao tác thu thập thông tin: đăng nhập, thanh toán, bình luận, liên hệ, khảo sát ý kiến.',
      whenNotToUse: 'Không dùng thẻ <form> bao bọc các nút chuyển trang đơn thuần (hãy dùng thẻ <a>).',
      realWorldUseCase: 'Màn hình đăng nhập tài khoản Google, form thanh toán thẻ tín dụng ShopeePay.'
    },
    {
      id: 'sec-html-9-2',
      lessonId: 'les-html-9',
      order: 2,
      conceptName: 'Các điều khiển nhập liệu phong phú & Kiểm thực HTML5',
      title: '2. Input types đa dạng, Textarea, Select, Datalist và Validation',
      explanation: 'HTML5 cung cấp hàng loạt bộ điều khiển thông minh:\n- type="email", type="tel", type="number", type="date", type="color", type="range", type="file".\n- type="radio": Chọn 1 trong nhiều (phải chung giá trị thuộc tính name).\n- type="checkbox": Chọn nhiều ô tích độc lập.\n- <textarea>: Nhập văn bản dài nhiều dòng (nhận xét, tiểu sử).\n- <select> & <option>: Danh sách lựa chọn thả xuống (Dropdown).\n- <datalist>: Thanh gợi ý tự động (Autocomplete) khi gõ phím.\n- <fieldset> & <legend>: Đóng khung gom nhóm các trường có chung chủ đề.',
      syntax: '<select name="city">\n  <option value="hn">Hà Nội</option>\n</select>\n<input list="browsers">\n<datalist id="browsers"><option value="Chrome"></datalist>',
      codeExample: `<form>
  <!-- Nhóm trường thông tin cá nhân -->
  <fieldset>
    <legend>Thông tin sinh viên</legend>

    <label for="major">Chuyên ngành học:</label>
    <select id="major" name="major">
      <optgroup label="Khối Công nghệ">
        <option value="fe">Lập trình Front-end</option>
        <option value="be">Lập trình Back-end</option>
      </optgroup>
      <optgroup label="Khối Thiết kế">
        <option value="ui">Thiết kế UI/UX</option>
      </optgroup>
    </select>

    <p>Giới tính:</p>
    <input type="radio" id="gender-male" name="gender" value="male" checked>
    <label for="gender-male">Nam</label>
    <input type="radio" id="gender-female" name="gender" value="female">
    <label for="gender-female">Nữ</label>

    <div>
      <label for="notes">Ghi chú thêm:</label>
      <textarea id="notes" name="notes" rows="3" placeholder="Nhập nguyện vọng..."></textarea>
    </div>
  </fieldset>
</form>`,
      lineByLineExplanation: [
        { line: 3, text: '<fieldset> vẽ đường viền bao quanh toàn bộ nhóm thông tin.' },
        { line: 4, text: '<legend> đặt tiêu đề cắt ngang trên đường viền của fieldset.' },
        { line: 8, text: '<optgroup> nhóm các tùy chọn <option> theo từng phân loại dễ tìm kiếm.' },
        { line: 17, text: 'Các nút radio có chung name="gender" nên người dùng chỉ có thể chọn duy nhất 1 trong 2.' },
        { line: 23, text: '<textarea rows="3"> tạo ô nhập văn bản rộng 3 dòng.' }
      ],
      commonMistakes: [
        'Đặt khác thuộc tính name trên các nút radio trong cùng một câu hỏi, khiến người dùng có thể tích chọn cả Nam lẫn Nữ cùng lúc.',
        'Quên thẻ đóng </textarea>, khiến toàn bộ nội dung HTML phía sau bị hút vào làm giá trị của ô nhập.'
      ],
      whenToUse: 'Dùng form controls chuẩn để trình duyệt di động tự động mở bàn phím số/bàn phím email tối ưu.',
      whenNotToUse: 'Không tự viết mã JavaScript validation phức tạp khi các thuộc tính HTML5 (required, pattern) đã giải quyết nhanh chóng.',
      realWorldUseCase: 'Form đặt lịch hẹn bệnh viện, form đăng ký môn học trực tuyến của trường cao đẳng.'
    }
  ],
  predictOutputs: [
    {
      id: 'po-html-9-1',
      question: 'Tại sao khi người dùng nhấp chuột vào dòng chữ "Tôi đồng ý với điều khoản" trong đoạn mã sau thì ô checkbox lại tự động được tích chọn?',
      code: `<input type="checkbox" id="terms-agree" name="agree">
<label for="terms-agree">Tôi đồng ý với điều khoản</label>`,
      options: [
        'A. Nhờ có thư viện JavaScript chạy ngầm',
        'B. Nhờ thuộc tính for="terms-agree" của thẻ <label> liên kết chính xác với id="terms-agree" của <input>',
        'C. Vì chữ "đồng ý" là từ khóa đặc biệt của HTML5',
        'D. Vì thuộc tính name="agree" kích hoạt hành vi tự động'
      ],
      correctAnswer: 'B. Nhờ thuộc tính for="terms-agree" của thẻ <label> liên kết chính xác với id="terms-agree" của <input>',
      explanation: 'Cơ chế liên kết giữa `label for` và `input id` là chuẩn thiết kế trải nghiệm người dùng của HTML, cho phép kích hoạt input bằng cách click vào nhãn.',
      hint: 'Hãy chú ý sự tương đồng giữa giá trị của "for" và "id".'
    }
  ],
  interactivePractice: {
    id: 'ip-html-9',
    title: 'Thực hành tạo Form đăng nhập hoàn chỉnh',
    description: 'Tạo form có action="/login" method="POST", chứa 1 ô nhập email có id="email" liên kết với label, 1 ô password có id="pwd" và 1 nút Submit "Đăng nhập".',
    starterCode: `<form action="/login" method="POST">
  <div>
    <label for="email">Địa chỉ Email:</label>
    <input type="email" id="email" name="email" required>
  </div>
  <div>
    <label for="pwd">Mật khẩu:</label>
    <input type="password" id="pwd" name="password" required>
  </div>
  <button type="submit">Đăng nhập</button>
</form>`,
    expectedConsoleOutput: 'Đăng nhập',
    hint: 'Sử dụng form với method POST và các thẻ input type email, password.',
    language: 'html'
  },
  exercises: {
    basic: {
      id: 'ex-html-9-basic',
      lessonId: 'les-html-9',
      title: 'Tạo ô tìm kiếm dữ liệu chuẩn',
      difficulty: 'basic',
      learningObjectiveIds: ['LO-HTML-9.1', 'LO-HTML-9.2'],
      description: 'Tạo một form tìm kiếm có method="GET", bên trong có một thẻ <input type="search" name="keyword" placeholder="Nhập từ khóa cần tìm..." required> và nút <button type="submit">Tìm kiếm</button>.',
      starterCode: `<form method="GET">
  <input type="search" name="keyword" placeholder="Nhập từ khóa cần tìm..." required>
  <button type="submit">Tìm kiếm</button>
</form>`,
      solutionCode: `<form method="GET">
  <input type="search" name="keyword" placeholder="Nhập từ khóa cần tìm..." required>
  <button type="submit">Tìm kiếm</button>
</form>`,
      testCases: [
        {
          id: 'tc-h9-1',
          description: 'Kiểm tra form method GET có input search và nút submit',
          expectedOutput: 'Tìm kiếm'
        }
      ],
      hints: ['Tìm kiếm thông tin luôn sử dụng method="GET".'],
      explanation: 'Form GET tạo ra các query params trên thanh địa chỉ tiện cho việc bookmark và chia sẻ link kết quả.',
      language: 'html'
    },
    intermediate: {
      id: 'ex-html-9-mid',
      lessonId: 'les-html-9',
      title: 'Nhóm chọn Radio giới tính và ô Checkbox điều khoản',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO-HTML-9.2'],
      description: 'Tạo 2 nút radio cùng name="ca_hoc" cho "Sáng" và "Tối". Bên dưới tạo 1 checkbox có id="accept" và label for="accept" có nội dung "Cam kết học đúng giờ".',
      starterCode: `<form>
  <input type="radio" id="sang" name="ca_hoc" value="sang" checked>
  <label for="sang">Sáng</label>
  <input type="radio" id="toi" name="ca_hoc" value="toi">
  <label for="toi">Tối</label>
  <br>
  <input type="checkbox" id="accept" name="accept" required>
  <label for="accept">Cam kết học đúng giờ</label>
</form>`,
      solutionCode: `<form>
  <input type="radio" id="sang" name="ca_hoc" value="sang" checked>
  <label for="sang">Sáng</label>
  <input type="radio" id="toi" name="ca_hoc" value="toi">
  <label for="toi">Tối</label>
  <br>
  <input type="checkbox" id="accept" name="accept" required>
  <label for="accept">Cam kết học đúng giờ</label>
</form>`,
      testCases: [
        {
          id: 'tc-h9-2',
          description: 'Kiểm tra radio chung name và checkbox có label liên kết',
          expectedOutput: 'Cam kết học đúng giờ'
        }
      ],
      hints: ['Hai nút radio phải có cùng thuộc tính name="ca_hoc" thì mới tạo thành một nhóm chọn loại trừ lẫn nhau.'],
      explanation: 'Liên kết label giúp người dùng trên mobile bấm trúng ô checkbox dễ dàng hơn.',
      language: 'html'
    },
    challenge: {
      id: 'ex-html-9-adv',
      lessonId: 'les-html-9',
      title: 'Biểu mẫu Khảo sát chất lượng đào tạo với fieldset và select',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO-HTML-9.2', 'LO-HTML-9.3'],
      description: 'Tạo thẻ <fieldset> có tiêu đề <legend>Ý kiến sinh viên</legend>. Bên trong có thẻ <select name="rate"> gồm 3 mức: "Rất tốt", "Bình thường", "Cần cải thiện". Kèm theo một thẻ <textarea name="feedback" rows="4" placeholder="Đóng góp ý kiến..." minlength="10" required></textarea> và nút submit.',
      starterCode: `<fieldset>
  <legend>Ý kiến sinh viên</legend>
  <select name="rate">
    <option value="good">Rất tốt</option>
    <option value="normal">Bình thường</option>
    <option value="improve">Cần cải thiện</option>
  </select>
  <br>
  <textarea name="feedback" rows="4" placeholder="Đóng góp ý kiến..." minlength="10" required></textarea>
  <br>
  <button type="submit">Gửi khảo sát</button>
</fieldset>`,
      solutionCode: `<fieldset>
  <legend>Ý kiến sinh viên</legend>
  <select name="rate">
    <option value="good">Rất tốt</option>
    <option value="normal">Bình thường</option>
    <option value="improve">Cần cải thiện</option>
  </select>
  <br>
  <textarea name="feedback" rows="4" placeholder="Đóng góp ý kiến..." minlength="10" required></textarea>
  <br>
  <button type="submit">Gửi khảo sát</button>
</fieldset>`,
      testCases: [
        {
          id: 'tc-h9-3',
          description: 'Kiểm tra fieldset, select, textarea và validation minlength',
          expectedOutput: 'Ý kiến sinh viên'
        }
      ],
      hints: ['Thẻ textarea không có thuộc tính value, nội dung mặc định nằm giữa 2 thẻ mở và đóng.'],
      explanation: 'Cấu trúc gom nhóm bằng fieldset giúp nâng cao tính mạch lạc cho các biểu mẫu dài.',
      language: 'html'
    }
  },
  quiz: {
    id: 'quiz-html-9',
    lessonId: 'les-html-9',
    title: 'Kiểm tra hiểu biết: Form & Nhập liệu',
    passingScore: 70,
    questions: [
      {
        id: 'q-h9-1',
        lessonId: 'les-html-9',
        learningObjectiveId: 'LO-HTML-9.1',
        type: 'multiple_choice',
        difficulty: 'easy',
        prompt: 'Khi xây dựng chức năng Đăng ký tài khoản có mật khẩu người dùng, thuộc tính "method" của thẻ <form> NÊN đặt là gì?',
        options: [
          { id: 'a', text: 'method="GET"' },
          { id: 'b', text: 'method="POST"' },
          { id: 'c', text: 'method="PUT"' },
          { id: 'd', text: 'method="FETCH"' }
        ],
        correctAnswer: 'b',
        explanation: 'Phương thức POST gửi dữ liệu bên trong phần thân HTTP request body, không hiển thị trên URL trình duyệt và không bị lưu vết trong lịch sử duyệt web như phương thức GET.',
        relatedLessonId: 'les-html-9'
      },
      {
        id: 'q-h9-2',
        lessonId: 'les-html-9',
        learningObjectiveId: 'LO-HTML-9.2',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'Để nhiều nút chọn hình tròn (Radio buttons) nằm trong cùng một câu hỏi và chỉ cho phép người dùng chọn DUY NHẤT một đáp án, thuộc tính nào của các nút radio đó phải có giá trị giống hệt nhau?',
        options: [
          { id: 'a', text: 'id' },
          { id: 'b', text: 'value' },
          { id: 'c', text: 'name' },
          { id: 'd', text: 'class' }
        ],
        correctAnswer: 'c',
        explanation: 'Trình duyệt nhóm các thẻ radio có cùng thuộc tính "name" lại với nhau, từ đó đảm bảo tính loại trừ (khi chọn ô này thì ô kia tự bỏ chọn).',
        relatedLessonId: 'les-html-9'
      }
    ]
  },
  summary: [
    'Thẻ <form> dùng method="POST" cho dữ liệu nhạy cảm và method="GET" cho tìm kiếm.',
    'Luôn gắn thẻ <label for="id"> tương ứng với id của <input> để hỗ trợ trợ năng và mở rộng vùng nhấp chuột.',
    'Các nút radio cùng câu hỏi phải chia sẻ chung thuộc tính name.',
    'Khai thác xác thực tích hợp sẵn của HTML5: required, type="email", minlength, pattern.'
  ],
  suggestedBookmarks: [
    'Hướng dẫn sử dụng RegEx trong thuộc tính pattern của HTML5',
    'Bộ thuộc tính trợ năng ARIA (aria-describedby, aria-invalid) cho Form'
  ]
};

// ============================================================================
// BÀI 10: SEMANTIC HTML — CẤU TRÚC TRANG (Semantic HTML & Layout)
// ============================================================================
export const LESSON_HTML_10: Lesson = {
  id: 'les-html-10',
  moduleId: 'mod-html-10',
  track: 'html',
  language: 'html',
  title: 'HTML 10. Semantic HTML — cấu trúc trang (Semantic Page Layout)',
  order: 10,
  durationMinutes: 50,
  difficulty: 'Trung bình',
  prerequisites: [
    'Hiểu cấu trúc body và các thẻ tiêu đề/văn bản từ các bài trước'
  ],
  learningObjectives: [
    {
      id: 'LO-HTML-10.1',
      code: 'LO-HTML-10.1',
      title: 'Triết lý Semantic Web và tác hại của "Div Soup"',
      description: 'Hiểu tại sao dùng thẻ có ngữ nghĩa giúp bot tìm kiếm (SEO) hiểu nội dung trang và giúp người khuyết tật sử dụng trình đọc màn hình dễ dàng.',
      bloomLevel: 'Understand',
      masteryPercentage: 94
    },
    {
      id: 'LO-HTML-10.2',
      code: 'LO-HTML-10.2',
      title: 'Làm chủ các Landmark Tags: <header>, <nav>, <main>, <footer>',
      description: 'Xây dựng cấu trúc trang tiêu chuẩn quốc tế với phần đầu trang, thanh điều hướng chính, nội dung trọng tâm và chân trang.',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    },
    {
      id: 'LO-HTML-10.3',
      code: 'LO-HTML-10.3',
      title: 'Phân định chính xác: <article>, <section>, <aside>',
      description: 'Phân biệt bài viết độc lập tái sử dụng (<article>), các phân mục chuyên đề (<section>) và thanh nội dung bên lề liên quan (<aside>).',
      bloomLevel: 'Analyze',
      masteryPercentage: 88
    }
  ],
  sections: [
    {
      id: 'sec-html-10-1',
      lessonId: 'les-html-10',
      order: 1,
      conceptName: 'Semantic Web vs Bệnh dịch "Div Soup"',
      title: '1. Bản chất Semantic HTML và các thẻ Cột mốc (Landmarks)',
      explanation: 'Trước HTML5, các lập trình viên thường dùng thẻ <div> cho tất cả mọi thứ: <div id="header">, <div id="nav">, <div class="footer">... Hiện tượng này được gọi là "Div Soup" (nồi súp div vô nghĩa). Trình duyệt và máy tìm kiếm chỉ thấy những khối hộp rỗng tuếch không hiểu đâu là thanh điều hướng, đâu là nội dung bài báo chính.\nHTML5 giới thiệu các thẻ Semantic mang sẵn ý nghĩa:\n- <header>: Đầu trang hoặc đầu bài viết (thường chứa logo, slogan).\n- <nav>: Chứa các liên kết điều hướng chính của website.\n- <main>: Chứa nội dung chính DUY NHẤT của trang (mỗi trang chỉ có 1 thẻ <main>).\n- <footer>: Chân trang (chứa bản quyền, liên kết chính sách, thông tin liên hệ).',
      syntax: '<body>\n  <header>Logo & Menu</header>\n  <nav>Điều hướng</nav>\n  <main>Nội dung chính</main>\n  <footer>Bản quyền</footer>\n</body>',
      codeExample: `<!DOCTYPE html>
<html lang="vi">
<head><meta charset="UTF-8"><title>Trang Tin Tức</title></head>
<body>
  <!-- Đầu trang -->
  <header>
    <h1>Tạp Chí Công Nghệ 24/7</h1>
    <nav aria-label="Menu chính">
      <ul>
        <li><a href="/">Trang chủ</a></li>
        <li><a href="/ai">Trí tuệ nhân tạo</a></li>
      </ul>
    </nav>
  </header>

  <!-- Nội dung cốt lõi của trang này -->
  <main>
    <h2>Tin nóng trong ngày</h2>
    <p>Nội dung bài viết hàng đầu hôm nay...</p>
  </main>

  <!-- Chân trang -->
  <footer>
    <p>© 2026 Tạp Chí Công Nghệ. Giữ toàn quyền bảo lưu.</p>
  </footer>
</body>
</html>`,
      lineByLineExplanation: [
        { line: 6, text: '<header> bao bọc tiêu đề tạp chí và cụm điều hướng đầu trang.' },
        { line: 8, text: '<nav aria-label="Menu chính"> báo hiệu cho trình đọc màn hình đây là khu vực liên kết điều hướng.' },
        { line: 17, text: '<main> định vị phần nội dung quan trọng độc nhất của trang này.' },
        { line: 23, text: '<footer> chứa thông tin bản quyền pháp lý dưới đáy trang.' }
      ],
      commonMistakes: [
        'Khai báo nhiều hơn một thẻ <main> hiển thị cùng lúc trên một trang web.',
        'Dùng <nav> cho tất cả các đường link rải rác trên trang (chỉ nên dùng <nav> cho các cụm menu điều hướng lớn).'
      ],
      whenToUse: 'Bắt buộc áp dụng cho mọi layout trang web hiện đại để đạt điểm tối đa SEO và Trợ năng (A11y).',
      whenNotToUse: 'Không bọc một đoạn văn bản ngắn đơn lẻ trong thẻ <header> hoặc <main>.',
      realWorldUseCase: 'Khung layout của các trang tin tức VnExpress, BBC, The Verge và các trang thương mại điện tử lớn.'
    },
    {
      id: 'sec-html-10-2',
      lessonId: 'les-html-10',
      order: 2,
      conceptName: 'Phân vùng nội dung chi tiết: <article>, <section> và <aside>',
      title: '2. Phân biệt <article>, <section> và <aside>',
      explanation: 'Để chia nhỏ nội dung bên trong <main>, chúng ta dùng bộ 3 thẻ ngữ nghĩa:\n- <article>: Đại diện cho một khối nội dung ĐỘC LẬP, có ý nghĩa trọn vẹn khi tách riêng ra (ví dụ: một bài báo, một bài đăng blog, một sản phẩm trên sàn, một bình luận người dùng). Bài viết này có thể phân phối lại trên ứng dụng đọc báo RSS feed.\n- <section>: Đại diện cho một phân đoạn chuyên đề trong tài liệu, thường bắt đầu bằng một tiêu đề (Heading). Ví dụ: mục "Giới thiệu", mục "Bảng giá", mục "Đội ngũ sáng lập".\n- <aside>: Chứa nội dung phụ trợ, liên quan gián tiếp đến nội dung chính xung quanh (thường là sidebar bên phải/trái: bài viết liên quan, quảng cáo, tiểu sử tác giả).',
      syntax: '<main>\n  <article>\n    <h2>Tiêu đề bài viết</h2>\n    <section><h3>Phần 1</h3></section>\n  </article>\n  <aside>Bài viết liên quan</aside>\n</main>',
      codeExample: `<main>
  <!-- Bài viết chính có tính độc lập hoàn chỉnh -->
  <article>
    <header>
      <h2>Bí Quyết Làm Chủ HTML5 Trong 30 Ngày</h2>
      <p>Tác giả: Chuyên gia Frontend • Ngày đăng: 20/09/2026</p>
    </header>

    <section>
      <h3>1. Hiểu đúng về Semantic Tags</h3>
      <p>Nội dung phân đoạn thứ nhất...</p>
    </section>

    <section>
      <h3>2. Thực hành tạo Form và Table</h3>
      <p>Nội dung phân đoạn thứ hai...</p>
    </section>
  </article>

  <!-- Cột nội dung phụ bên cạnh -->
  <aside>
    <h3>Chủ đề thịnh hành</h3>
    <ul>
      <li><a href="#">Học CSS Flexbox</a></li>
      <li><a href="#">Học JavaScript DOM</a></li>
    </ul>
  </aside>
</main>`,
      lineByLineExplanation: [
        { line: 3, text: '<article> bao trọn toàn bộ bài viết, có thể trích xuất đăng sang nền tảng khác vẫn trọn nghĩa.' },
        { line: 4, text: '<header> con nằm bên trong article chứa tiêu đề bài báo và ngày đăng.' },
        { line: 9, text: '<section> chia bài viết thành các mục kiến thức chuyên biệt có tiêu đề <h3> riêng.' },
        { line: 20, text: '<aside> làm nhiệm vụ sidebar chứa các bài viết đề xuất thịnh hành.' }
      ],
      commonMistakes: [
        'Dùng <section> làm thẻ bao bọc chung chung để căn chỉnh CSS thay vì dùng <div>.',
        'Quên đặt tiêu đề (h2 - h6) bên trong mỗi thẻ <section> (theo chuẩn W3C, mỗi section nên có 1 heading).'
      ],
      whenToUse: 'Dùng <article> cho tin tức, sản phẩm thẻ card; dùng <section> cho các phần nội dung của trang landing page; dùng <aside> cho thanh sidebar.',
      whenNotToUse: 'Không dùng <article> cho một dòng thông báo ngắn không có tính độc lập.',
      realWorldUseCase: 'Cấu trúc bài viết blog Medium, trang chi tiết sản phẩm Tiki với thanh gợi ý sản phẩm cùng loại (<aside>).'
    }
  ],
  predictOutputs: [
    {
      id: 'po-html-10-1',
      question: 'Phát biểu nào sau đây phân biệt ĐÚNG NHẤT giữa thẻ `<article>` và thẻ `<section>`?',
      code: `<article>
  <h2>Bài báo khoa học</h2>
  <section><h3>Giới thiệu</h3></section>
  <section><h3>Kết quả</h3></section>
</article>`,
      options: [
        'A. <article> dùng cho trang chủ, còn <section> dùng cho trang con',
        'B. <article> là nội dung độc lập có thể tái phân phối trích xuất riêng lẻ, trong khi <section> là một phân đoạn theo chủ đề của tài liệu',
        'C. Hai thẻ này hoàn toàn giống nhau chỉ khác tên',
        'D. <section> bắt buộc phải chứa thẻ <article> bên trong chứ không được làm ngược lại'
      ],
      correctAnswer: 'B. <article> là nội dung độc lập có thể tái phân phối trích xuất riêng lẻ, trong khi <section> là một phân đoạn theo chủ đề của tài liệu',
      explanation: 'Theo đặc tả W3C, `<article>` thể hiện một thành phần độc lập trọn vẹn (như bài blog, tin tức, thẻ sản phẩm), còn `<section>` nhóm các nội dung có cùng một chủ đề phân đoạn.',
      hint: 'Hãy nghĩ đến từ "article" trong tiếng Anh có nghĩa là một bài báo hoàn chỉnh.'
    }
  ],
  interactivePractice: {
    id: 'ip-html-10',
    title: 'Thực hành bố cục trang web Semantic hoàn chỉnh',
    description: 'Xây dựng cấu trúc với <header> chứa tiêu đề trang, <main> chứa 1 <article> có <h2> và 1 đoạn văn <p>, và <footer> bản quyền dưới cùng.',
    starterCode: `<header>
  <h1>Học Viện Công Nghệ</h1>
</header>
<main>
  <article>
    <h2>Lộ Trình Trở Thành Kỹ Sư Web</h2>
    <p>Bắt đầu từ HTML5, CSS3 và JavaScript căn bản.</p>
  </article>
</main>
<footer>
  <p>© 2026 Học Viện Công Nghệ</p>
</footer>`,
    expectedConsoleOutput: 'Lộ Trình Trở Thành Kỹ Sư Web',
    hint: 'Sử dụng các thẻ semantic header, main, article, footer.',
    language: 'html'
  },
  exercises: {
    basic: {
      id: 'ex-html-10-basic',
      lessonId: 'les-html-10',
      title: 'Xây dựng bộ khung Semantic cơ bản',
      difficulty: 'basic',
      learningObjectiveIds: ['LO-HTML-10.2'],
      description: 'Tạo một trang gồm <header> có <h1> "Blog Cá Nhân", thẻ <main> chứa <p> "Chào mừng đến với trang của tôi", và <footer> có <p> "Bản quyền 2026".',
      starterCode: `<header>
  <h1>Blog Cá Nhân</h1>
</header>
<main>
  <p>Chào mừng đến với trang của tôi</p>
</main>
<footer>
  <p>Bản quyền 2026</p>
</footer>`,
      solutionCode: `<header>
  <h1>Blog Cá Nhân</h1>
</header>
<main>
  <p>Chào mừng đến với trang của tôi</p>
</main>
<footer>
  <p>Bản quyền 2026</p>
</footer>`,
      testCases: [
        {
          id: 'tc-h10-1',
          description: 'Kiểm tra cấu trúc header, main, footer',
          expectedOutput: 'Blog Cá Nhân'
        }
      ],
      hints: ['Không dùng div thay thế cho các thẻ semantic này.'],
      explanation: 'Đây là bộ 3 thẻ mốc (Landmarks) định hình khung sườn cho mọi website chuẩn quốc tế.',
      language: 'html'
    },
    intermediate: {
      id: 'ex-html-10-mid',
      lessonId: 'les-html-10',
      title: 'Tổ chức bài viết với Article và Aside',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO-HTML-10.3'],
      description: 'Trong thẻ <main>, tạo một thẻ <article> chứa <h2> "Kỹ năng lập trình" và 1 đoạn <p>. Bên cạnh tạo một thẻ <aside> chứa <h3> "Tin liên quan" và 1 liên kết <a href="#">Xem thêm</a>.',
      starterCode: `<main>
  <article>
    <h2>Kỹ năng lập trình</h2>
    <p>Luyện tập giải thuật mỗi ngày.</p>
  </article>
  <aside>
    <h3>Tin liên quan</h3>
    <a href="#">Xem thêm</a>
  </aside>
</main>`,
      solutionCode: `<main>
  <article>
    <h2>Kỹ năng lập trình</h2>
    <p>Luyện tập giải thuật mỗi ngày.</p>
  </article>
  <aside>
    <h3>Tin liên quan</h3>
    <a href="#">Xem thêm</a>
  </aside>
</main>`,
      testCases: [
        {
          id: 'tc-h10-2',
          description: 'Kiểm tra article và aside trong main',
          expectedOutput: 'Kỹ năng lập trình'
        }
      ],
      hints: ['Đảm bảo cả article và aside đều nằm trong thẻ main.'],
      explanation: 'Sự tách bạch giữa article và aside giúp việc định dạng CSS Grid chia 2 cột trở nên cực kỳ trực quan.',
      language: 'html'
    },
    challenge: {
      id: 'ex-html-10-adv',
      lessonId: 'les-html-10',
      title: 'Bố cục Landing Page đa phân đoạn (Multi-section)',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO-HTML-10.2', 'LO-HTML-10.3'],
      description: 'Xây dựng một thẻ <main> chứa 2 thẻ <section>: Section 1 có <h2> "Giới thiệu" và mô tả <p>. Section 2 có <h2> "Bảng giá dịch vụ" và mô tả <p>. Bên dưới có thẻ <nav aria-label="Phân trang">.',
      starterCode: `<main>
  <section id="intro">
    <h2>Giới thiệu</h2>
    <p>Chúng tôi đào tạo công nghệ hàng đầu.</p>
  </section>
  <section id="pricing">
    <h2>Bảng giá dịch vụ</h2>
    <p>Gói học tập tiết kiệm chi phí cho sinh viên.</p>
  </section>
  <nav aria-label="Phân trang">
    <a href="#intro">Về đầu mục</a>
  </nav>
</main>`,
      solutionCode: `<main>
  <section id="intro">
    <h2>Giới thiệu</h2>
    <p>Chúng tôi đào tạo công nghệ hàng đầu.</p>
  </section>
  <section id="pricing">
    <h2>Bảng giá dịch vụ</h2>
    <p>Gói học tập tiết kiệm chi phí cho sinh viên.</p>
  </section>
  <nav aria-label="Phân trang">
    <a href="#intro">Về đầu mục</a>
  </nav>
</main>`,
      testCases: [
        {
          id: 'tc-h10-3',
          description: 'Kiểm tra multi-section và nav accessibility',
          expectedOutput: 'Bảng giá dịch vụ'
        }
      ],
      hints: ['Mỗi thẻ section đều nên có một tiêu đề heading h2 riêng biệt.'],
      explanation: 'Cấu trúc trang rõ ràng là chìa khóa để công cụ tìm kiếm Google hiển thị các Sitelinks chất lượng trên kết quả tìm kiếm.',
      language: 'html'
    }
  },
  quiz: {
    id: 'quiz-html-10',
    lessonId: 'les-html-10',
    title: 'Kiểm tra hiểu biết: Semantic HTML',
    passingScore: 70,
    questions: [
      {
        id: 'q-h10-1',
        lessonId: 'les-html-10',
        learningObjectiveId: 'LO-HTML-10.1',
        type: 'multiple_choice',
        difficulty: 'easy',
        prompt: 'Thẻ nào sau đây đại diện cho phần nội dung chính, quan trọng và độc nhất của một trang web (mỗi trang chỉ nên có duy nhất một thẻ)?',
        options: [
          { id: 'a', text: '<body>' },
          { id: 'b', text: '<main>' },
          { id: 'c', text: '<section>' },
          { id: 'd', text: '<header>' }
        ],
        correctAnswer: 'b',
        explanation: 'Thẻ `<main>` đại diện cho phần nội dung cốt lõi độc nhất của tài liệu, loại trừ các phần lặp lại như header chung, thanh điều hướng nav hay footer.',
        relatedLessonId: 'les-html-10'
      },
      {
        id: 'q-h10-2',
        lessonId: 'les-html-10',
        learningObjectiveId: 'LO-HTML-10.3',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'Khi muốn thiết kế thanh Sidebar bên cạnh bài viết để hiển thị danh sách bài viết liên quan hoặc thông tin tác giả, thẻ ngữ nghĩa nào là phù hợp nhất?',
        options: [
          { id: 'a', text: '<aside>' },
          { id: 'b', text: '<sidebar>' },
          { id: 'c', text: '<extra>' },
          { id: 'd', text: '<section>' }
        ],
        correctAnswer: 'a',
        explanation: '<aside> được thiết kế chuyên biệt cho các nội dung liên quan gián tiếp hoặc nội dung phụ trợ nằm bên cạnh phần thân chính.',
        relatedLessonId: 'les-html-10'
      }
    ]
  },
  summary: [
    'Semantic HTML dùng thẻ mang sẵn ý nghĩa, loại bỏ tình trạng lạm dụng vô nghĩa "Div Soup".',
    'Khung sườn cốt lõi: <header> (đầu trang), <nav> (điều hướng), <main> (nội dung chính), <footer> (chân trang).',
    'Dùng <article> cho nội dung độc lập tái sử dụng được, <section> cho phân vùng chuyên đề.',
    'Dùng <aside> cho thanh bên sidebar hoặc nội dung phụ liên quan.'
  ],
  suggestedBookmarks: [
    'Quy chuẩn các mốc điều hướng WAI-ARIA Landmark Roles',
    'Chiến lược tối ưu hóa SEO với HTML5 Semantic Elements'
  ]
};

// ============================================================================
// BÀI 11: PHẦN TỬ CHỨA & PHÂN VÙNG (Containers, Div, Span & Display Rules)
// ============================================================================
export const LESSON_HTML_11: Lesson = {
  id: 'les-html-11',
  moduleId: 'mod-html-11',
  track: 'html',
  language: 'html',
  title: 'HTML 11. Phần tử chứa & phân vùng (Containers: div, span & display)',
  order: 11,
  durationMinutes: 45,
  difficulty: 'Cơ bản',
  prerequisites: [
    'Nắm vững các thẻ ngữ nghĩa Semantic từ Bài 10'
  ],
  learningObjectives: [
    {
      id: 'LO-HTML-11.1',
      code: 'LO-HTML-11.1',
      title: 'Bản chất Display: Phần tử khối (Block) vs Nội dòng (Inline)',
      description: 'Phân biệt cơ chế chiếm trọn 100% bề ngang và tự xuống dòng của thẻ Block, so với việc chỉ chiếm diện tích vừa đủ nội dung của thẻ Inline.',
      bloomLevel: 'Understand',
      masteryPercentage: 92
    },
    {
      id: 'LO-HTML-11.2',
      code: 'LO-HTML-11.2',
      title: 'Thẻ chứa khối <div> và Thẻ chứa nội dòng <span>',
      description: 'Sử dụng <div> làm hộp chứa (wrapper/container) phục vụ bố cục CSS, và <span> để nhắm mục tiêu tạo kiểu cho một cụm từ cụ thể.',
      bloomLevel: 'Apply',
      masteryPercentage: 94
    },
    {
      id: 'LO-HTML-11.3',
      code: 'LO-HTML-11.3',
      title: 'Khi nào dùng div/span và khi nào PHẢI dùng Semantic tags',
      description: 'Biết cách cân bằng: không lạm dụng div bừa bãi nhưng cũng không ép buộc dùng sai thẻ ngữ nghĩa khi chỉ cần một hộp chứa trang trí thuần túy.',
      bloomLevel: 'Analyze',
      masteryPercentage: 86
    }
  ],
  sections: [
    {
      id: 'sec-html-11-1',
      lessonId: 'les-html-11',
      order: 1,
      conceptName: 'Cơ chế hiển thị: Block Elements vs Inline Elements',
      title: '1. Phân biệt phần tử Khối (Block) và phần tử Nội dòng (Inline)',
      explanation: 'Mọi phần tử HTML đều thuộc 1 trong 2 loại hành vi hiển thị mặc định:\n1. Phần tử Khối (Block-level Elements):\n  - Luôn luôn bắt đầu trên một dòng mới.\n  - Tự động mở rộng chiếm toàn bộ 100% chiều rộng có thể của phần tử cha (kể cả khi nội dung bên trong rất ngắn).\n  - Có thể đặt chiều rộng (width) và chiều cao (height) bằng CSS.\n  - Ví dụ: <div>, <p>, <h1>-<h6>, <ul>, <li>, <section>, <form>.\n2. Phần tử Nội dòng (Inline Elements):\n  - KHÔNG bắt đầu trên dòng mới, nằm chung dòng cùng dòng chảy chữ xung quanh.\n  - Chỉ chiếm độ rộng vừa khít với nội dung của nó.\n  - Không thể tự thiết lập width/height bằng CSS (trừ khi chuyển sang inline-block).\n  - Ví dụ: <span>, <a>, <strong>, <em>, <code>, <mark>.',
      syntax: '<!-- Block element (xuống dòng) -->\n<div>Hộp khối chiếm trọn chiều ngang</div>\n\n<!-- Inline element (cùng dòng) -->\n<p>Đoạn văn có <span>từ nội dòng</span> nằm cùng hàng.</p>',
      codeExample: `<!-- Khối Block chiếm toàn bộ hàng ngang -->
<div style="background-color: #fef08a; padding: 10px;">
  Tôi là thẻ khối (Block element) - chiếm hết chiều rộng!
</div>

<!-- Hai thẻ Inline nằm cạnh nhau trên cùng một dòng -->
<p>
  Khóa học giúp bạn 
  <span style="color: #ef4444; font-weight: bold;">làm chủ</span>
  công nghệ web từ 
  <span style="color: #3b82f6; text-decoration: underline;">căn bản</span>
  đến nâng cao.
</p>`,
      lineByLineExplanation: [
        { line: 2, text: '<div> tự động đẩy phần tử kế tiếp xuống một dòng mới hoàn toàn.' },
        { line: 7, text: '<p> là thẻ khối, nhưng bên trong chứa các thẻ nội dòng.' },
        { line: 9, text: '<span> chỉ bọc quanh từ "làm chủ", đổi màu chữ mà không làm ngắt dòng văn bản.' }
      ],
      commonMistakes: [
        'Đặt một thẻ khối (như <div> hoặc <p>) bên trong một thẻ nội dòng (như <span> hoặc <em>). Điều này vi phạm cú pháp chuẩn HTML.',
        'Cố gắng set width: 300px cho thẻ <span> mà không đổi display: inline-block hoặc block.'
      ],
      whenToUse: 'Dùng thẻ Block để chia các khu vực, hộp chứa giao diện; dùng thẻ Inline để định kiểu một vài chữ trong câu văn.',
      whenNotToUse: 'Không đặt thẻ khối vào trong thẻ <p> hoặc thẻ <span>.',
      realWorldUseCase: 'Thẻ <div> làm khung bọc Card sản phẩm trong CSS Grid; thẻ <span> làm nhãn badge thông báo số lượng tin nhắn chưa đọc (Notification Badge).'
    },
    {
      id: 'sec-html-11-2',
      lessonId: 'les-html-11',
      order: 2,
      conceptName: 'Vai trò chân chính của <div> và <span>: Styling Containers',
      title: '2. <div> làm Wrapper bố cục và <span> tạo kiểu cục bộ',
      explanation: 'Mặc dù chúng ta khuyến khích dùng Semantic HTML, nhưng <div> và <span> vẫn là 2 công cụ quan trọng bậc nhất trong lập trình Frontend:\n- Khi bạn cần một chiếc hộp chứa (Container, Wrapper) để áp dụng Flexbox hoặc CSS Grid chia cột, nhưng khối hộp đó KHÔNG mang ý nghĩa nội dung cụ thể: <div> là lựa chọn chuẩn xác nhất 100%!\n- Khi bạn cần đổi màu sắc, thêm icon hoặc gán sự kiện click cho một đoạn chữ nhỏ: <span> là lựa chọn hoàn hảo.\nQuy tắc bất hủ: Nếu có thẻ ngữ nghĩa phù hợp (header, nav, article...), HÃY DÙNG NÓ. Nếu chỉ phục vụ cho việc tạo kiểu CSS: DÙNG DIV HOẶC SPAN.',
      syntax: '<div class="container grid-layout">\n  <div class="card">\n    <h3>Tiêu đề</h3>\n    <p>Giá: <span class="price">100$</span></p>\n  </div>\n</div>',
      codeExample: `<!-- Dùng div làm bộ chứa Layout Flexbox 2 cột -->
<div class="user-profile-card">
  <!-- div bọc ảnh đại diện -->
  <div class="avatar-wrapper">
    <img src="avatar.jpg" alt="Ảnh đại diện">
  </div>

  <!-- div bọc thông tin văn bản -->
  <div class="info-wrapper">
    <h3>Trần Minh Tâm</h3>
    <p>Chức vụ: <span class="role-badge">Trưởng nhóm kỹ thuật</span></p>
  </div>
</div>`,
      lineByLineExplanation: [
        { line: 2, text: 'div class="user-profile-card" đóng vai trò là flex container chia 2 cột.' },
        { line: 4, text: 'div bọc ảnh để dễ dàng tạo hình tròn bo góc với CSS overflow: hidden.' },
        { line: 11, text: 'span bọc chức vụ để biến thành một chiếc huy hiệu (Badge) nền xanh chữ trắng nổi bật.' }
      ],
      commonMistakes: [
        'Cực đoan hóa việc tránh thẻ div đến mức dùng sai thẻ <section> hoặc <article> cho những chiếc hộp chứa chỉ có nhiệm vụ căn lề padding/margin.',
        'Lồng ghép quá nhiều lớp div vô nghĩa không cần thiết (div lồng div lồng div).'
      ],
      whenToUse: 'Dùng <div> cho Container, Grid Row, Col, Modal Overlay; dùng <span> cho Badge, icon, highlight text.',
      whenNotToUse: 'Không dùng <div onclick="..."> thay cho thẻ <button> (gây mất khả năng truy cập bàn phím).',
      realWorldUseCase: 'Hệ thống lưới (Grid System) của Bootstrap hay Tailwind CSS đều xây dựng dựa trên các lớp thẻ <div> container.'
    }
  ],
  predictOutputs: [
    {
      id: 'po-html-11-1',
      question: 'Khi hiển thị trên trình duyệt mà chưa có bất kỳ file CSS nào, đoạn mã sau sẽ xuất hiện trên bao nhiêu dòng?',
      code: `<span>Thẻ 1</span>
<span>Thẻ 2</span>
<div>Thẻ 3</div>
<span>Thẻ 4</span>`,
      options: [
        'A. Tất cả nằm trên 1 dòng duy nhất',
        'B. Mỗi thẻ nằm trên 1 dòng riêng (4 dòng)',
        'C. 3 dòng: Dòng 1 chứa "Thẻ 1 Thẻ 2", Dòng 2 chứa "Thẻ 3", Dòng 3 chứa "Thẻ 4"',
        'D. 2 dòng'
      ],
      correctAnswer: 'C. 3 dòng: Dòng 1 chứa "Thẻ 1 Thẻ 2", Dòng 2 chứa "Thẻ 3", Dòng 3 chứa "Thẻ 4"',
      explanation: 'Vì `<span>` là phần tử nội dòng (inline) nên "Thẻ 1" và "Thẻ 2" nằm chung dòng 1. `<div>` là phần tử khối (block) nên tự xuống dòng 2 và chiếm trọn hàng, đẩy "Thẻ 4" xuống dòng thứ 3.',
      hint: 'Hãy nhớ lại: thẻ inline nằm cùng dòng, thẻ block luôn tạo dòng mới.'
    }
  ],
  interactivePractice: {
    id: 'ip-html-11',
    title: 'Thực hành tạo Hộp chứa (Container) và Thẻ nhãn nội dòng',
    description: 'Tạo thẻ <div class="badge-container"> bên trong chứa một đoạn văn <p> "Trạng thái: <span class="status">Đã kích hoạt</span>".',
    starterCode: `<div class="badge-container">
  <p>Trạng thái: <span class="status">Đã kích hoạt</span></p>
</div>`,
    expectedConsoleOutput: 'Trạng thái: Đã kích hoạt',
    hint: 'Sử dụng div bọc ngoài p, và span bọc trạng thái.',
    language: 'html'
  },
  exercises: {
    basic: {
      id: 'ex-html-11-basic',
      lessonId: 'les-html-11',
      title: 'Tạo thẻ khối phân vùng và thẻ span đổi màu',
      difficulty: 'basic',
      learningObjectiveIds: ['LO-HTML-11.1', 'LO-HTML-11.2'],
      description: 'Tạo một thẻ <div id="card"> chứa một đoạn văn <p> có từ "Miễn phí" được bọc trong thẻ <span class="highlight">.',
      starterCode: `<div id="card">
  <p>Khóa học này hoàn toàn <span class="highlight">Miễn phí</span> cho sinh viên.</p>
</div>`,
      solutionCode: `<div id="card">
  <p>Khóa học này hoàn toàn <span class="highlight">Miễn phí</span> cho sinh viên.</p>
</div>`,
      testCases: [
        {
          id: 'tc-h11-1',
          description: 'Kiểm tra div card có p và span highlight',
          expectedOutput: 'Miễn phí'
        }
      ],
      hints: ['span là thẻ nội dòng lý tưởng để đổi màu chữ.'],
      explanation: 'div giúp gom nhóm phần tử thành một khối độc lập.',
      language: 'html'
    },
    intermediate: {
      id: 'ex-html-11-mid',
      lessonId: 'les-html-11',
      title: 'Xây dựng cấu trúc Thẻ sản phẩm với Container',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO-HTML-11.2'],
      description: 'Tạo <div class="product-item"> chứa tiêu đề <h3> "Bàn phím cơ", 1 đoạn <p> giá tiền có thẻ <span class="price"> "1.200.000đ"</span>, và 1 thẻ <button type="button">Thêm vào giỏ</button>.',
      starterCode: `<div class="product-item">
  <h3>Bàn phím cơ</h3>
  <p>Giá: <span class="price">1.200.000đ</span></p>
  <button type="button">Thêm vào giỏ</button>
</div>`,
      solutionCode: `<div class="product-item">
  <h3>Bàn phím cơ</h3>
  <p>Giá: <span class="price">1.200.000đ</span></p>
  <button type="button">Thêm vào giỏ</button>
</div>`,
      testCases: [
        {
          id: 'tc-h11-2',
          description: 'Kiểm tra cấu trúc product card',
          expectedOutput: '1.200.000đ'
        }
      ],
      hints: ['div đóng vai trò bao bọc khung của từng card sản phẩm.'],
      explanation: 'Cấu trúc thẻ sản phẩm là mẫu thiết kế kinh điển nhất trong lập trình giao diện e-commerce.',
      language: 'html'
    },
    challenge: {
      id: 'ex-html-11-adv',
      lessonId: 'les-html-11',
      title: 'Kết hợp Semantic Layout và Styling Wrappers',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO-HTML-11.3'],
      description: 'Tạo thẻ <article class="post">. Bên trong sử dụng <div class="post-header"> bọc thẻ <h2> "Tiêu đề bài viết" và thẻ <span class="post-date"> "26/09/2026"</span>. Phần thân bài viết là một thẻ <div class="post-body"> chứa đoạn văn <p>.',
      starterCode: `<article class="post">
  <div class="post-header">
    <h2>Tiêu đề bài viết</h2>
    <span class="post-date">26/09/2026</span>
  </div>
  <div class="post-body">
    <p>Nội dung chi tiết của bài đăng công nghệ.</p>
  </div>
</article>`,
      solutionCode: `<article class="post">
  <div class="post-header">
    <h2>Tiêu đề bài viết</h2>
    <span class="post-date">26/09/2026</span>
  </div>
  <div class="post-body">
    <p>Nội dung chi tiết của bài đăng công nghệ.</p>
  </div>
</article>`,
      testCases: [
        {
          id: 'tc-h11-3',
          description: 'Kiểm tra kết hợp article semantic và div wrappers',
          expectedOutput: 'Tiêu đề bài viết'
        }
      ],
      hints: ['Sử dụng article cho ngữ nghĩa và div làm wrapper bố cục.'],
      explanation: 'Sự kết hợp hài hòa giữa thẻ ngữ nghĩa và các div container là tiêu chuẩn của các kỹ sư Frontend chuyên nghiệp.',
      language: 'html'
    }
  },
  quiz: {
    id: 'quiz-html-11',
    lessonId: 'les-html-11',
    title: 'Kiểm tra hiểu biết: Thẻ chứa & Phân vùng',
    passingScore: 70,
    questions: [
      {
        id: 'q-h11-1',
        lessonId: 'les-html-11',
        learningObjectiveId: 'LO-HTML-11.1',
        type: 'multiple_choice',
        difficulty: 'easy',
        prompt: 'Đặc điểm nào sau đây là ĐÚNG đối với một phần tử khối (Block-level element) như <div> hoặc <p>?',
        options: [
          { id: 'a', text: 'Chỉ chiếm độ rộng vừa đủ với chữ viết bên trong' },
          { id: 'b', text: 'Luôn bắt đầu trên một dòng mới và tự động chiếm 100% chiều ngang của phần tử cha' },
          { id: 'c', text: 'Không thể thiết lập thuộc tính margin và padding' },
          { id: 'd', text: 'Có thể đặt bên trong một thẻ <span>' }
        ],
        correctAnswer: 'b',
        explanation: 'Phần tử khối (Block) mặc định có display: block, luôn tự bẻ xuống dòng mới và mở rộng chiều ngang 100%.',
        relatedLessonId: 'les-html-11'
      },
      {
        id: 'q-h11-2',
        lessonId: 'les-html-11',
        learningObjectiveId: 'LO-HTML-11.3',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'Khi nào việc sử dụng thẻ <div> là hoàn toàn ĐÚNG ĐẮN và được khuyến khích?',
        options: [
          { id: 'a', text: 'Khi cần tạo một hộp chứa (Container / Wrapper) thuần túy để căn chỉnh bố cục CSS Flexbox/Grid mà không có ý nghĩa ngữ nghĩa đặc thù' },
          { id: 'b', text: 'Thay thế hoàn toàn cho các thẻ <header>, <nav> và <footer>' },
          { id: 'c', text: 'Thay cho thẻ <button> để xử lý sự kiện click' },
          { id: 'd', text: 'Chỉ được dùng duy nhất 1 lần trong toàn bộ trang web' }
        ],
        correctAnswer: 'a',
        explanation: 'Thẻ <div> là thẻ phân chia khối chung chung (division). Khi mục đích chỉ là tạo khung bọc để áp dụng CSS Layout, <div> là lựa chọn chuẩn xác nhất.',
        relatedLessonId: 'les-html-11'
      }
    ]
  },
  summary: [
    'Phần tử Block (div, p, h1) luôn xuống dòng và chiếm trọn 100% chiều rộng.',
    'Phần tử Inline (span, a, strong) nằm chung trên cùng dòng và chỉ chiếm diện tích vừa khít nội dung.',
    'Không bao giờ đặt phần tử Block bên trong phần tử Inline.',
    'Dùng thẻ Semantic khi có thể; dùng <div> và <span> cho mục đích tạo kiểu và bố cục CSS.'
  ],
  suggestedBookmarks: [
    'Quy tắc chuẩn phân loại Content Categories (Flow, Phrasing, Sectioning) trong HTML5',
    'Chuyển đổi linh hoạt giữa block, inline và inline-block bằng CSS'
  ]
};

// ============================================================================
// BÀI 12: ĐỒ HỌA & THẺ NHÚNG (SVG, Canvas, Iframe & Embedding)
// ============================================================================
export const LESSON_HTML_12: Lesson = {
  id: 'les-html-12',
  moduleId: 'mod-html-12',
  track: 'html',
  language: 'html',
  title: 'HTML 12. Đồ họa & Thẻ nhúng (Graphics, SVG, Canvas, Iframe)',
  order: 12,
  durationMinutes: 55,
  difficulty: 'Nâng cao',
  prerequisites: [
    'Nắm vững cách nhúng tài nguyên bên ngoài từ Bài 2 và Bài 6',
    'Hiểu khái niệm tọa độ 2D (trục X ngang, trục Y dọc hướng xuống)'
  ],
  learningObjectives: [
    {
      id: 'LO-HTML-12.1',
      code: 'LO-HTML-12.1',
      title: 'Nhúng trang web và dịch vụ ngoại vi an toàn với <iframe>',
      description: 'Nhúng bản đồ Google Maps, video YouTube, làm chủ thuộc tính bảo mật sandbox, allowfullscreen và loading="lazy".',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    },
    {
      id: 'LO-HTML-12.2',
      code: 'LO-HTML-12.2',
      title: 'Đồ họa vector dạng mã nguồn với <svg>',
      description: 'Vẽ hình học phẳng (<circle>, <rect>, <path>, <polygon>), hiểu ưu điểm sắc nét tuyệt đối ở mọi độ phân giải (Retina/4K) và dung lượng siêu nhẹ.',
      bloomLevel: 'Apply',
      masteryPercentage: 88
    },
    {
      id: 'LO-HTML-12.3',
      code: 'LO-HTML-12.3',
      title: 'Vẽ đồ họa động bằng kịch bản với <canvas> và so sánh SVG vs Canvas',
      description: 'Khởi tạo ngữ cảnh 2D Context trên canvas để vẽ biểu đồ hoặc game, phân biệt đồ họa Bitmap theo pixel và đồ họa Vector dựa trên toán học.',
      bloomLevel: 'Analyze',
      masteryPercentage: 85
    }
  ],
  sections: [
    {
      id: 'sec-html-12-1',
      lessonId: 'les-html-12',
      order: 1,
      conceptName: 'Nhúng nội dung bên ngoài với thẻ <iframe> và Bảo mật Sandbox',
      title: '1. Thẻ <iframe> và các quy tắc bảo mật chống Clickjacking',
      explanation: 'Thẻ <iframe> (Inline Frame) nhúng một tài liệu HTML độc lập từ nguồn khác vào bên trong trang web hiện tại (thường dùng để nhúng video YouTube, bản đồ chỉ đường Google Maps, slide thuyết trình Canva).\nCác thuộc tính bảo mật và hiệu năng sống còn:\n- src: URL trang web cần nhúng.\n- sandbox: Thuộc tính bảo mật hạn chế script độc hại, chặn form submitted hoặc popup độc từ trang iframe.\n- allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture": Phân quyền truy cập phần cứng thiết bị.\n- allowfullscreen: Cho phép người dùng phóng to toàn màn hình.\n- loading="lazy": Trì hoãn tải iframe nếu người dùng chưa cuộn tới.',
      syntax: '<iframe src="https://example.com" width="600" height="400" title="Mô tả nội dung" loading="lazy" sandbox="allow-scripts allow-same-origin"></iframe>',
      codeExample: `<!-- Nhúng video YouTube chuẩn an toàn và responsive -->
<iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
  title="Video bài giảng giới thiệu HTML5" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen
  loading="lazy"
></iframe>

<!-- Nhúng tài liệu độc lập có kích hoạt Sandbox kiểm soát an toàn -->
<iframe 
  src="preview.html" 
  title="Bản xem trước tài liệu" 
  width="100%" 
  height="300"
  sandbox="allow-scripts"
></iframe>`,
      lineByLineExplanation: [
        { line: 5, text: 'src trỏ đến đường dẫn embed chính thống của YouTube.' },
        { line: 6, text: 'title bắt buộc phải có cho iframe để đáp ứng chuẩn trợ năng WCAG.' },
        { line: 8, text: 'allow phân quyền sử dụng tính năng mã hóa và tăng tốc đồ họa.' },
        { line: 9, text: 'allowfullscreen kích hoạt tính năng xem toàn màn hình.' },
        { line: 18, text: 'sandbox="allow-scripts" cô lập nội dung nhúng, chỉ cho phép chạy script mà cấm mở popup hoặc submit dữ liệu ra ngoài.' }
      ],
      commonMistakes: [
        'Quên thuộc tính title trên thẻ <iframe> khiến trình đọc màn hình không thể thông báo nội dung nhúng cho người khiếm thị.',
        'Nhúng trực tiếp URL xem thông thường của YouTube (youtube.com/watch?v=...) thay vì URL dạng embed (youtube.com/embed/...) khiến video bị lỗi chặn hiển thị.'
      ],
      whenToUse: 'Dùng khi tích hợp cổng thanh toán bên thứ ba, video chia sẻ, bản đồ định vị hoặc widget thời tiết.',
      whenNotToUse: 'Không lạm dụng quá nhiều iframe trên cùng 1 trang làm tiêu tốn bộ nhớ RAM trình duyệt khủng khiếp.',
      realWorldUseCase: 'Nhúng bản đồ Google Maps trên trang "Liên hệ" của các công ty và nhúng trình phát nhạc Spotify.'
    },
    {
      id: 'sec-html-12-2',
      lessonId: 'les-html-12',
      order: 2,
      conceptName: 'Đồ họa Vector <svg> vs Đồ họa kịch bản <canvas>',
      title: '2. Làm chủ đồ họa Vector <svg> và Vẽ đồ họa kịch bản <canvas>',
      explanation: 'HTML5 cung cấp hai giải pháp đồ họa bản địa đỉnh cao:\n1. SVG (Scalable Vector Graphics):\n  - Đồ họa dựa trên XML toán học (vector).\n  - Không bao giờ bị vỡ hạt, răng cưa dù phóng to màn hình 4K hay in ấn khổ lớn.\n  - Mỗi hình vẽ (<circle>, <rect>, <path>) là một node trong cây DOM, có thể đổi màu bằng CSS và gắn sự kiện click bằng JavaScript.\n  - Cực kỳ lý tưởng cho Logo, Icon, Biểu đồ thống kê phẳng.\n2. Canvas (<canvas>):\n  - Đồ họa dạng lưới điểm ảnh Bitmap (Raster).\n  - Được vẽ từng pixel một thông qua mã JavaScript 2D Context API.\n  - Hiệu năng cực cao khi render hàng chục ngàn hạt hiệu ứng hoặc làm game 2D.',
      syntax: '<!-- SVG Vector: -->\n<svg width="100" height="100">\n  <circle cx="50" cy="50" r="40" fill="indigo" />\n</svg>\n\n<!-- Canvas Bitmap: -->\n<canvas id="myCanvas" width="300" height="200"></canvas>',
      codeExample: `<!-- 1. Vẽ đồ họa Vector trực tiếp bằng thẻ SVG -->
<svg width="200" height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Vẽ hình chữ nhật nền xanh -->
  <rect x="10" y="10" width="80" height="80" rx="15" fill="#3b82f6" />

  <!-- Vẽ hình tròn màu cam -->
  <circle cx="140" cy="50" r="40" fill="#f97316" />

  <!-- Chữ nghệ thuật vector -->
  <text x="50" y="55" fill="white" font-size="14" font-weight="bold" text-anchor="middle">SVG</text>
</svg>

<!-- 2. Thẻ Canvas vẽ bằng JavaScript -->
<canvas id="chartCanvas" width="200" height="100" style="border: 1px solid #cbd5e1;"></canvas>

<script>
  const canvas = document.getElementById('chartCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#10b981';
    ctx.fillRect(20, 20, 160, 60); // Vẽ hình chữ nhật xanh lá
  }
</script>`,
      lineByLineExplanation: [
        { line: 2, text: '<svg viewBox="0 0 200 100"> thiết lập khung nhìn tọa độ vector tự động co giãn tỷ lệ.' },
        { line: 4, text: '<rect rx="15"> vẽ hình chữ nhật có bo tròn góc.' },
        { line: 7, text: '<circle cx="140" cy="50" r="40"> vẽ hình tròn tâm (140,50) bán kính r=40.' },
        { line: 15, text: '<canvas> tạo ra một tấm vải vẽ điểm ảnh, được tô vẽ bằng script bên dưới.' }
      ],
      commonMistakes: [
        'Đặt kích thước canvas bằng CSS (style="width: 500px") thay vì đặt thuộc tính width/height trực tiếp trên thẻ, khiến hình vẽ bị méo và mờ nhòe.',
        'Chọn nhầm công nghệ: dùng canvas để làm icon (gây khó đổi màu CSS) hoặc dùng SVG cho game xử lý hàng vạn chuyển động (gây nghẽn DOM).'
      ],
      whenToUse: 'Dùng SVG cho Icon, Logo, sơ đồ minh họa, đồ thị tương tác; dùng Canvas cho game 2D, chỉnh sửa ảnh trực tuyến, vẽ hiệu ứng pháo hoa.',
      whenNotToUse: 'Không dùng SVG để hiển thị ảnh chụp phong cảnh người thật (hãy dùng định dạng JPG/WebP).',
      realWorldUseCase: 'Bộ biểu tượng Lucide / FontAwesome được dựng bằng SVG; game web Flappy Bird được vẽ trên HTML5 Canvas.'
    }
  ],
  predictOutputs: [
    {
      id: 'po-html-12-1',
      question: 'Ưu điểm vượt trội nhất của đồ họa SVG so với hình ảnh định dạng PNG hoặc JPG là gì?',
      code: `<svg width="200" height="200">
  <circle cx="100" cy="100" r="80" fill="red" />
</svg>`,
      options: [
        'A. Dễ dàng chụp ảnh bằng máy ảnh số',
        'B. Là đồ họa vector toán học nên phóng to thu nhỏ ở bất kỳ kích cỡ nào cũng luôn sắc nét tuyệt đối, không bao giờ bị vỡ hạt điểm ảnh',
        'C. SVG tự động phát ra âm thanh khi người dùng rê chuột vào',
        'D. Luôn luôn có dung lượng lớn hơn 100MB'
      ],
      correctAnswer: 'B. Là đồ họa vector toán học nên phóng to thu nhỏ ở bất kỳ kích cỡ nào cũng luôn sắc nét tuyệt đối, không bao giờ bị vỡ hạt điểm ảnh',
      explanation: 'SVG biểu diễn hình khối bằng các phương trình toán học (tọa độ điểm, đường cong Bézier), do đó trình duyệt tính toán lại độ phân giải tức thì khi phóng to mà không bị hiện tượng vỡ ảnh (pixelation).',
      hint: 'Chữ V trong SVG là viết tắt của "Vector".'
    }
  ],
  interactivePractice: {
    id: 'ip-html-12',
    title: 'Thực hành tạo Đồ họa Vector SVG đầu tiên',
    description: 'Tạo thẻ <svg width="200" height="100"> chứa một hình chữ nhật <rect x="10" y="10" width="80" height="80" fill="teal" /> và một hình tròn <circle cx="140" cy="50" r="35" fill="crimson" />.',
    starterCode: `<svg width="200" height="100">
  <rect x="10" y="10" width="80" height="80" fill="teal" />
  <circle cx="140" cy="50" r="35" fill="crimson" />
</svg>`,
    expectedConsoleOutput: 'Vẽ đồ họa SVG thành công',
    hint: 'Sử dụng các thẻ rect và circle bên trong thẻ svg.',
    language: 'html'
  },
  exercises: {
    basic: {
      id: 'ex-html-12-basic',
      lessonId: 'les-html-12',
      title: 'Nhúng Iframe an toàn kèm thuộc tính Title',
      difficulty: 'basic',
      learningObjectiveIds: ['LO-HTML-12.1'],
      description: 'Tạo một thẻ <iframe> có src="https://example.com", width="400", height="300", title="Bản tin công nghệ" và thuộc tính loading="lazy".',
      starterCode: `<iframe src="https://example.com" width="400" height="300" title="Bản tin công nghệ" loading="lazy"></iframe>`,
      solutionCode: `<iframe src="https://example.com" width="400" height="300" title="Bản tin công nghệ" loading="lazy"></iframe>`,
      testCases: [
        {
          id: 'tc-h12-1',
          description: 'Kiểm tra thẻ iframe có src, title và loading lazy',
          expectedOutput: 'Bản tin công nghệ'
        }
      ],
      hints: ['title là thuộc tính bắt buộc của iframe để đạt chuẩn trợ năng.'],
      explanation: 'loading="lazy" giúp trang web không bị đơ khi nhúng nhiều khung iframe ngoài.',
      language: 'html'
    },
    intermediate: {
      id: 'ex-html-12-mid',
      lessonId: 'les-html-12',
      title: 'Tạo Icon Đánh dấu Vector với SVG Circle và Path',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO-HTML-12.2'],
      description: 'Tạo thẻ <svg width="100" height="100" viewBox="0 0 100 100"> chứa 1 thẻ <circle cx="50" cy="50" r="45" fill="#10b981" /> và 1 thẻ <text x="50" y="58" text-anchor="middle" fill="white" font-size="24">✓</text>.',
      starterCode: `<svg width="100" height="100" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="45" fill="#10b981" />
  <text x="50" y="58" text-anchor="middle" fill="white" font-size="24">✓</text>
</svg>`,
      solutionCode: `<svg width="100" height="100" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="45" fill="#10b981" />
  <text x="50" y="58" text-anchor="middle" fill="white" font-size="24">✓</text>
</svg>`,
      testCases: [
        {
          id: 'tc-h12-2',
          description: 'Kiểm tra svg tạo icon checkmark',
          expectedOutput: '✓'
        }
      ],
      hints: ['text-anchor="middle" giúp căn giữa chữ tại tọa độ x đã chọn.'],
      explanation: 'Các biểu tượng icon ứng dụng hiện đại đều tận dụng cú pháp SVG nội tuyến.',
      language: 'html'
    },
    challenge: {
      id: 'ex-html-12-adv',
      lessonId: 'les-html-12',
      title: 'Tích hợp Đồ họa Đa phương tiện SVG và Canvas',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO-HTML-12.2', 'LO-HTML-12.3'],
      description: 'Tạo khối <figure> chứa thẻ <svg width="120" height="60"><rect width="120" height="60" rx="8" fill="#6366f1" /></svg> và một thẻ <canvas id="game-board" width="200" height="100"></canvas> kèm chú thích <figcaption>Mô hình đồ họa kết hợp</figcaption>.',
      starterCode: `<figure>
  <svg width="120" height="60">
    <rect width="120" height="60" rx="8" fill="#6366f1" />
  </svg>
  <canvas id="game-board" width="200" height="100"></canvas>
  <figcaption>Mô hình đồ họa kết hợp</figcaption>
</figure>`,
      solutionCode: `<figure>
  <svg width="120" height="60">
    <rect width="120" height="60" rx="8" fill="#6366f1" />
  </svg>
  <canvas id="game-board" width="200" height="100"></canvas>
  <figcaption>Mô hình đồ họa kết hợp</figcaption>
</figure>`,
      testCases: [
        {
          id: 'tc-h12-3',
          description: 'Kiểm tra figure bọc svg, canvas và figcaption',
          expectedOutput: 'Mô hình đồ họa kết hợp'
        }
      ],
      hints: ['Khai báo width và height rõ ràng cho cả thẻ svg và thẻ canvas.'],
      explanation: 'Sự kết hợp giữa SVG (giao diện tĩnh sắc nét) và Canvas (hiệu ứng động) là nền tảng của các ứng dụng Dashboard phân tích dữ liệu trực quan.',
      language: 'html'
    }
  },
  quiz: {
    id: 'quiz-html-12',
    lessonId: 'les-html-12',
    title: 'Kiểm tra hiểu biết: Đồ họa & Thẻ nhúng',
    passingScore: 70,
    questions: [
      {
        id: 'q-h12-1',
        lessonId: 'les-html-12',
        learningObjectiveId: 'LO-HTML-12.1',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'Thuộc tính nào của thẻ <iframe> được thiết kế để kích hoạt chế độ "hộp cát", ngăn chặn các đoạn mã độc hại hoặc popup lừa đảo từ trang web bên ngoài?',
        options: [
          { id: 'a', text: 'secure' },
          { id: 'b', text: 'protect' },
          { id: 'c', text: 'sandbox' },
          { id: 'd', text: 'isolated' }
        ],
        correctAnswer: 'c',
        explanation: 'Thuộc tính `sandbox` áp dụng các giới hạn an ninh nghiêm ngặt lên tài nguyên nhúng bên trong iframe, là biện pháp cốt lõi phòng chống tấn công Clickjacking và XSS.',
        relatedLessonId: 'les-html-12'
      },
      {
        id: 'q-h12-2',
        lessonId: 'les-html-12',
        learningObjectiveId: 'LO-HTML-12.3',
        type: 'multiple_choice',
        difficulty: 'easy',
        prompt: 'Khi muốn lập trình một trò chơi 2D hoặc hiệu ứng chuyển động tốc độ cao cần cập nhật hàng chục ngàn pixel liên tục mỗi giây, công nghệ HTML nào là lựa chọn tối ưu?',
        options: [
          { id: 'a', text: '<canvas>' },
          { id: 'b', text: '<svg>' },
          { id: 'c', text: '<table>' },
          { id: 'd', text: '<picture>' }
        ],
        correctAnswer: 'a',
        explanation: '`<canvas>` cho phép vẽ trực tiếp lên bộ nhớ đệm điểm ảnh (Bitmap buffer) với tốc độ 60 khung hình/giây (60 FPS), không phải chịu độ trễ quản lý cây nút DOM như `<svg>`.',
        relatedLessonId: 'les-html-12'
      }
    ]
  },
  summary: [
    'Thẻ <iframe> dùng để nhúng tài liệu ngoài; luôn kèm title và cân nhắc thuộc tính bảo mật sandbox.',
    'SVG là đồ họa Vector dựa trên mã XML, sắc nét ở mọi độ phân giải, dễ đổi màu bằng CSS.',
    '<canvas> tạo khung vẽ Bitmap tốc độ cao, được điều khiển trực tiếp bằng JavaScript 2D Context API.',
    'Hiểu rõ điểm mạnh từng công nghệ: SVG cho Icon/Logo, Canvas cho Game/Data Charts, Iframe cho Dịch vụ bên thứ ba.'
  ],
  suggestedBookmarks: [
    'Các cờ phân quyền chi tiết trong thuộc tính sandbox của Iframe',
    'Hướng dẫn vẽ đường cong phức tạp với thẻ <path> trong SVG'
  ]
};
