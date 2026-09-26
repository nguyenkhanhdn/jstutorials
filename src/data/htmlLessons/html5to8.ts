import { Lesson } from '../../types';

// ============================================================================
// BÀI 5: LIÊN KẾT & ĐIỀU HƯỚNG (Hyperlinks & Navigation)
// ============================================================================
export const LESSON_HTML_5: Lesson = {
  id: 'les-html-5',
  moduleId: 'mod-html-5',
  track: 'html',
  language: 'html',
  title: 'HTML 5. Liên kết & điều hướng (Links & Navigation)',
  order: 5,
  durationMinutes: 45,
  difficulty: 'Cơ bản',
  prerequisites: [
    'Nắm vững cấu trúc thẻ có thuộc tính (attributes) từ Bài 1',
    'Hiểu khái niệm URL tuyệt đối và đường dẫn tương đối'
  ],
  learningObjectives: [
    {
      id: 'LO-HTML-5.1',
      code: 'LO-HTML-5.1',
      title: 'Làm chủ thẻ neo <a> và thuộc tính href',
      description: 'Phân biệt liên kết tuyệt đối (external), tương đối (internal) và điều hướng trong trang với anchor jump (#id).',
      bloomLevel: 'Apply',
      masteryPercentage: 94
    },
    {
      id: 'LO-HTML-5.2',
      code: 'LO-HTML-5.2',
      title: 'Mở tab mới an toàn với target="_blank" và rel="noopener noreferrer"',
      description: 'Ngăn chặn lỗ hổng bảo mật Tabnapping (window.opener hijacking) và rò rỉ referrer khi mở tab mới.',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    },
    {
      id: 'LO-HTML-5.3',
      code: 'LO-HTML-5.3',
      title: 'Các giao thức liên kết đặc biệt: mailto, tel và download',
      description: 'Kích hoạt ứng dụng gọi điện thoại (tel:), ứng dụng soạn thảo email (mailto:) và tải xuống tệp tin (download).',
      bloomLevel: 'Apply',
      masteryPercentage: 88
    }
  ],
  sections: [
    {
      id: 'sec-html-5-1',
      lessonId: 'les-html-5',
      order: 1,
      conceptName: 'Thẻ liên kết <a> và các loại đường dẫn href',
      title: '1. Thẻ liên kết <a> và các dạng URL (Tuyệt đối, Tương đối, Nhảy neo)',
      explanation: 'Thẻ <a> (Anchor) là cốt lõi của siêu văn bản (HyperText), liên kết hàng tỷ trang web lại với nhau. Thuộc tính quan trọng nhất là "href" (Hypertext Reference):\n- Đường dẫn tuyệt đối: Bắt đầu bằng http:// hoặc https:// dẫn đến trang web khác.\n- Đường dẫn tương đối: Dẫn đến tệp nội bộ cùng dự án (ví dụ "about.html" hoặc "../contact.html").\n- Liên kết nhảy neo (#id): Cuộn trang ngay tức thì đến phần tử có id tương ứng (rất quan trọng cho Single Page Navigation hoặc nút Trở về đầu trang).',
      syntax: '<a href="https://google.com">Đến Google</a>\n<a href="/gioi-thieu.html">Giới thiệu</a>\n<a href="#chuyen-muc-2">Nhảy đến mục 2</a>',
      codeExample: `<!-- 1. Đường dẫn tuyệt đối -->
<p>Tra cứu kiến thức tại <a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer">MDN Web Docs</a>.</p>

<!-- 2. Đường dẫn tương đối nội bộ -->
<nav>
  <a href="index.html">Trang chủ</a> | 
  <a href="khoa-hoc.html">Khóa học</a> | 
  <a href="lien-he.html">Liên hệ</a>
</nav>

<!-- 3. Liên kết nhảy neo đến một vị trí trong cùng trang -->
<a href="#phan-ket-luan">Xem phần Kết luận</a>

<div style="height: 400px;"><!-- Giả lập nội dung dài --></div>

<h2 id="phan-ket-luan">Phần Kết luận quan trọng</h2>
<a href="#">Trở về đầu trang</a>`,
      lineByLineExplanation: [
        { line: 2, text: 'target="_blank" mở tab mới, rel="noopener noreferrer" là chuẩn bảo mật bắt buộc.' },
        { line: 6, text: 'Thanh điều hướng liên kết tương đối giữa các file html cùng thư mục.' },
        { line: 12, text: 'href="#phan-ket-luan" sẽ cuộn trình duyệt xuống phần tử có id="phan-ket-luan".' },
        { line: 17, text: 'href="#" là phím tắt mặc định cuộn lên đỉnh đầu của trang.' }
      ],
      commonMistakes: [
        'Dùng target="_blank" nhưng quên thuộc tính rel="noopener noreferrer", khiến trang web đối mặt nguy cơ tấn công đảo ngược trang (tabnabbing).',
        'Để href="" trống rỗng khiến trang web bị tự động nạp lại (reload) mất hết dữ liệu form đang nhập.'
      ],
      whenToUse: 'Dùng thẻ <a> cho mọi hành động điều hướng người dùng sang một trang mới hoặc vị trí mới.',
      whenNotToUse: 'Không dùng thẻ <a> để kích hoạt hàm JavaScript thuần túy không đổi URL (hãy dùng thẻ <button>).',
      realWorldUseCase: 'Menu điều hướng chính của website, nút "Mua ngay", danh mục mục lục (Table of Contents) của bài viết dài.'
    },
    {
      id: 'sec-html-5-2',
      lessonId: 'les-html-5',
      order: 2,
      conceptName: 'Giao thức liên kết: mailto, tel và thuộc tính download',
      title: '2. Kích hoạt cuộc gọi, mở ứng dụng Email và Tải file',
      explanation: 'Ngoài liên kết trang web thông thường, thẻ <a> hỗ trợ các giao thức thiết bị cực kỳ tiện ích:\n- tel:0901234567: Mở ứng dụng gọi điện thoại trên smartphone chỉ bằng 1 cú chạm.\n- mailto:admin@edu.vn: Mở ứng dụng email (Outlook, Gmail, Apple Mail) với địa chỉ nhận sẵn, thậm chí điền sẵn tiêu đề (?subject=...).\n- Thuộc tính "download": Yêu cầu trình duyệt tải tệp về máy tính thay vì mở trực tiếp trên tab.',
      syntax: '<a href="tel:0912345678">Gọi Hotline</a>\n<a href="mailto:support@domain.com?subject=Tư vấn">Gửi Email</a>\n<a href="tailieu.pdf" download="GiaoTrinhHTML5.pdf">Tải giáo trình</a>',
      codeExample: `<!-- Kích hoạt ứng dụng gọi điện thoại cho người dùng mobile -->
<p>
  Tư vấn viên: <a href="tel:0988776655">0988.776.655</a>
</p>

<!-- Tự động mở ứng dụng gửi thư kèm tiêu đề có sẵn -->
<p>
  Hỗ trợ sinh viên: <a href="mailto:daotao@fpt.edu.vn?subject=Xin cap bang diem">daotao@fpt.edu.vn</a>
</p>

<!-- Tải file PDF về máy tính với tên tệp tùy biến -->
<p>
  <a href="syllabus.pdf" download="DeCuongChiTiet.pdf">
    Tải Đề Cương Khóa Học (PDF)
  </a>
</p>`,
      lineByLineExplanation: [
        { line: 3, text: 'Giao thức tel: nhận diện số điện thoại và chuyển tiếp sang bộ quay số của điện thoại.' },
        { line: 8, text: 'Giao thức mailto: mở chương trình email và điền trước subject.' },
        { line: 13, text: 'download="DeCuongChiTiet.pdf" lưu tệp về máy với tên mới chỉ định.' }
      ],
      commonMistakes: [
        'Viết tel: có dấu cách hoặc dấu gạch nối khiến một số điện thoại cũ không đọc được mã USSD.',
        'Nhầm lẫn giữa nút bấm <button> và liên kết <a href="tel:...">.'
      ],
      whenToUse: 'Dùng cho thanh liên hệ dưới chân trang footer, nút Hotline cố định trên mobile, và nút tải tài liệu học tập.',
      whenNotToUse: 'Không gán download cho các liên kết cross-origin không có chứng chỉ CORS cho phép tải.',
      realWorldUseCase: 'Nút liên hệ tư vấn trên các website nha khoa, bảo hiểm, bất động sản và nút tải CV cá nhân.'
    }
  ],
  predictOutputs: [
    {
      id: 'po-html-5-1',
      question: 'Khi người dùng nhấp vào liên kết sau trên điện thoại thông minh, điều gì sẽ xảy ra?',
      code: `<a href="tel:0909123456">Gọi ngay tư vấn</a>`,
      options: [
        'A. Trình duyệt tải về một file âm thanh ghi âm',
        'B. Điện thoại tự động kích hoạt ứng dụng cuộc gọi (Phone dialer) với số 0909123456 được điền sẵn',
        'C. Trình duyệt chuyển sang trang web www.0909123456.com',
        'D. Báo lỗi liên kết bị hỏng do không có giao thức https'
      ],
      correctAnswer: 'B. Điện thoại tự động kích hoạt ứng dụng cuộc gọi (Phone dialer) với số 0909123456 được điền sẵn',
      explanation: 'Giao thức "tel:" là chuẩn web quốc tế giúp kết nối trực tiếp với ứng dụng quay số trên thiết bị di động.',
      hint: 'Hãy chú ý đến tiền tố "tel:" trước số điện thoại.'
    }
  ],
  interactivePractice: {
    id: 'ip-html-5',
    title: 'Thực hành tạo liên kết ngoài và liên kết cuộc gọi',
    description: 'Tạo thẻ <a> dẫn đến "https://github.com" mở trong tab mới an toàn với rel="noopener noreferrer", và một thẻ <a> thứ hai gọi đến "tel:0900112233".',
    starterCode: `<p>
  <a href="https://github.com" target="_blank" rel="noopener noreferrer">Kho mã nguồn GitHub</a>
</p>
<p>
  <a href="tel:0900112233">Hotline Hỗ Trợ</a>
</p>`,
    expectedConsoleOutput: 'Kho mã nguồn GitHub',
    hint: 'Sử dụng target="_blank" và rel="noopener noreferrer".',
    language: 'html'
  },
  exercises: {
    basic: {
      id: 'ex-html-5-basic',
      lessonId: 'les-html-5',
      title: 'Tạo liên kết mở tab mới an toàn',
      difficulty: 'basic',
      learningObjectiveIds: ['LO-HTML-5.1', 'LO-HTML-5.2'],
      description: 'Tạo thẻ <a> liên kết đến "https://w3.org" với nhãn "Trang chủ W3C", mở tab mới với target="_blank" và có thuộc tính rel="noopener noreferrer".',
      starterCode: `<a href="https://w3.org" target="_blank" rel="noopener noreferrer">Trang chủ W3C</a>`,
      solutionCode: `<a href="https://w3.org" target="_blank" rel="noopener noreferrer">Trang chủ W3C</a>`,
      testCases: [
        {
          id: 'tc-h5-1',
          description: 'Kiểm tra thẻ a có href w3.org, target blank và rel an toàn',
          expectedOutput: 'Trang chủ W3C'
        }
      ],
      hints: ['Đảm bảo thuộc tính rel chứa cả 2 giá trị noopener và noreferrer.'],
      explanation: 'Đây là quy tắc vàng khi mở liên kết ngoài nhằm bảo vệ bảo mật của người dùng.',
      language: 'html'
    },
    intermediate: {
      id: 'ex-html-5-mid',
      lessonId: 'les-html-5',
      title: 'Xây dựng mục lục nhảy neo nội bộ (Page Anchor)',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO-HTML-5.1'],
      description: 'Tạo một thẻ <a> có href="#faq" với nhãn "Câu hỏi thường gặp". Bên dưới tạo thẻ <h2> có thuộc tính id="faq" với nội dung "Giải đáp thắc mắc".',
      starterCode: `<a href="#faq">Câu hỏi thường gặp</a>
<div style="height: 100px;"></div>
<h2 id="faq">Giải đáp thắc mắc</h2>`,
      solutionCode: `<a href="#faq">Câu hỏi thường gặp</a>
<div style="height: 100px;"></div>
<h2 id="faq">Giải đáp thắc mắc</h2>`,
      testCases: [
        {
          id: 'tc-h5-2',
          description: 'Kiểm tra liên kết neo href="#faq" và phần tử h2 có id="faq"',
          expectedOutput: 'Giải đáp thắc mắc'
        }
      ],
      hints: ['Giá trị href phải có dấu thăng (#) đi trước tên id mục tiêu.'],
      explanation: 'Liên kết neo giúp người dùng đọc lướt các tài liệu dài nhanh chóng.',
      language: 'html'
    },
    challenge: {
      id: 'ex-html-5-adv',
      lessonId: 'les-html-5',
      title: 'Thanh điều hướng liên hệ đa kênh (Call, Mail, Download)',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO-HTML-5.3'],
      description: 'Xây dựng một thanh liên hệ chứa: 1 thẻ <a> gọi điện thoại đến "0911223344", 1 thẻ <a> gửi email đến "info@company.com" và 1 thẻ <a> tải tệp "profile.pdf" với thuộc tính download="HoSoNangLuc.pdf".',
      starterCode: `<nav class="contact-links">
  <a href="tel:0911223344">Gọi Điện</a> |
  <a href="mailto:info@company.com">Gửi Thư</a> |
  <a href="profile.pdf" download="HoSoNangLuc.pdf">Tải Hồ Sơ</a>
</nav>`,
      solutionCode: `<nav class="contact-links">
  <a href="tel:0911223344">Gọi Điện</a> |
  <a href="mailto:info@company.com">Gửi Thư</a> |
  <a href="profile.pdf" download="HoSoNangLuc.pdf">Tải Hồ Sơ</a>
</nav>`,
      testCases: [
        {
          id: 'tc-h5-3',
          description: 'Kiểm tra tel, mailto và download trong thanh liên hệ',
          expectedOutput: 'Tải Hồ Sơ'
        }
      ],
      hints: ['Kiểm tra cú pháp tel: và mailto: không có dấu cách.'],
      explanation: 'Sự kết hợp các giao thức mang lại trải nghiệm tương tác liền mạch cho người dùng.',
      language: 'html'
    }
  },
  quiz: {
    id: 'quiz-html-5',
    lessonId: 'les-html-5',
    title: 'Kiểm tra hiểu biết: Liên kết & Điều hướng',
    passingScore: 70,
    questions: [
      {
        id: 'q-h5-1',
        lessonId: 'les-html-5',
        learningObjectiveId: 'LO-HTML-5.2',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'Tại sao khi dùng thuộc tính target="_blank" để mở tab mới, các chuyên gia bảo mật luôn yêu cầu thêm rel="noopener noreferrer"?',
        options: [
          { id: 'a', text: 'Để tab mới mở nhanh hơn 50%' },
          { id: 'b', text: 'Để ngăn chặn trang web đích chiếm quyền điều khiển trang hiện tại thông qua đối tượng window.opener' },
          { id: 'c', text: 'Để tự động phóng to toàn màn hình tab mới' },
          { id: 'd', text: 'Để đổi màu sắc của đường dẫn sang màu tím' }
        ],
        correctAnswer: 'b',
        explanation: 'Khi mở tab mới không có rel="noopener", trang đích có thể truy cập `window.opener.location` để chuyển hướng trang gốc của bạn sang trang lừa đảo độc hại (Reverse Tabnapping).',
        relatedLessonId: 'les-html-5'
      },
      {
        id: 'q-h5-2',
        lessonId: 'les-html-5',
        learningObjectiveId: 'LO-HTML-5.3',
        type: 'multiple_choice',
        difficulty: 'easy',
        prompt: 'Để tạo một liên kết mà khi người dùng nhấn vào sẽ tự động cuộn trang đến phần tử có id="gioi-thieu", giá trị của href là gì?',
        options: [
          { id: 'a', text: 'href="gioi-thieu"' },
          { id: 'b', text: 'href=".gioi-thieu"' },
          { id: 'c', text: 'href="#gioi-thieu"' },
          { id: 'd', text: 'href="id:gioi-thieu"' }
        ],
        correctAnswer: 'c',
        explanation: 'Trong HTML, dấu thăng (#) đại diện cho định danh ID của phần tử mục tiêu cần nhảy neo đến.',
        relatedLessonId: 'les-html-5'
      }
    ]
  },
  summary: [
    'Thẻ <a> dùng thuộc tính href để tạo liên kết siêu văn bản.',
    'Bắt buộc kèm rel="noopener noreferrer" khi mở tab mới bằng target="_blank".',
    'Dùng href="#id" để cuộn trang đến vị trí phần tử trong cùng tài liệu.',
    'Sử dụng các giao thức tel: (gọi điện thoại) và mailto: (gửi email) để tối ưu trên di động.'
  ],
  suggestedBookmarks: [
    'Lỗ hổng bảo mật Reverse Tabnapping và cách phòng chống',
    'Cú pháp tham số mở rộng cho liên kết mailto (?cc=&bcc=&body=)'
  ]
};

// ============================================================================
// BÀI 6: HÌNH ẢNH & NỘI DUNG ĐA PHƯƠNG TIỆN (Images & Multimedia)
// ============================================================================
export const LESSON_HTML_6: Lesson = {
  id: 'les-html-6',
  moduleId: 'mod-html-6',
  track: 'html',
  language: 'html',
  title: 'HTML 6. Hình ảnh & nội dung đa phương tiện (Images & Multimedia)',
  order: 6,
  durationMinutes: 50,
  difficulty: 'Trung bình',
  prerequisites: [
    'Nắm vững thẻ tự đóng (void elements) từ Bài 1',
    'Hiểu các định dạng tệp thông dụng: JPG, PNG, WebP, MP3, MP4'
  ],
  learningObjectives: [
    {
      id: 'LO-HTML-6.1',
      code: 'LO-HTML-6.1',
      title: 'Tối ưu hóa thẻ <img> với alt, width, height và loading="lazy"',
      description: 'Hiểu tầm quan trọng sống còn của thuộc tính alt cho người khiếm thị/SEO, chỉ định kích thước chống vỡ layout (CLS) và trì hoãn tải ảnh lười.',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    },
    {
      id: 'LO-HTML-6.2',
      code: 'LO-HTML-6.2',
      title: 'Hình ảnh đáp ứng (Responsive Images) với <picture> và srcset',
      description: 'Cung cấp ảnh theo kích cỡ màn hình và chuyển đổi định dạng WebP/AVIF hiện đại.',
      bloomLevel: 'Analyze',
      masteryPercentage: 86
    },
    {
      id: 'LO-HTML-6.3',
      code: 'LO-HTML-6.3',
      title: 'Nhúng âm thanh <audio> và video <video> chuẩn HTML5',
      description: 'Sử dụng các thuộc tính controls, autoplay, loop, poster, thẻ <source> đa định dạng và nhóm ảnh <figure> kèm chú thích <figcaption>.',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    }
  ],
  sections: [
    {
      id: 'sec-html-6-1',
      lessonId: 'les-html-6',
      order: 1,
      conceptName: 'Làm chủ thẻ <img>: Thuộc tính alt, CLS và Lazy Loading',
      title: '1. Thẻ <img>, Văn bản thay thế (alt) và Hiệu năng Tải ảnh',
      explanation: 'Thẻ <img> nhúng hình ảnh vào trang. Ba thuộc tính sống còn cần luôn có:\n1. src: Đường dẫn tới file ảnh.\n2. alt (Alternative Text): Mô tả nội dung bức ảnh cho người khiếm thị nghe qua trình đọc màn hình, hoặc khi ảnh bị lỗi mạng. Thiếu alt là lỗi trợ năng (A11y) nghiêm trọng nhất trên web.\n3. width & height: Khai báo tỷ lệ khung hình giúp trình duyệt chừa chỗ sẵn trước khi tải ảnh, loại bỏ hiện tượng giật giật vỡ layout (Cumulative Layout Shift - CLS).\n4. loading="lazy": Trì hoãn tải ảnh cho đến khi người dùng cuộn tới gần nó, tăng tốc tải trang ban đầu gấp nhiều lần.',
      syntax: '<img src="hinh-anh.webp" alt="Mô tả bức ảnh" width="800" height="600" loading="lazy">',
      codeExample: `<!-- Ảnh chuẩn SEO, trợ năng và tối ưu hiệu năng -->
<img 
  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600" 
  alt="Sinh viên đang lập trình web trên laptop trong thư viện" 
  width="600" 
  height="400" 
  loading="lazy"
>

<!-- Gom nhóm ảnh và chú thích theo chuẩn ngữ nghĩa -->
<figure>
  <img src="diagram.png" alt="Sơ đồ kiến trúc ứng dụng web 3 lớp">
  <figcaption>Hình 1: Sơ đồ dòng dữ liệu từ Client đến Database.</figcaption>
</figure>`,
      lineByLineExplanation: [
        { line: 3, text: 'src trỏ đến tệp ảnh trên máy chủ hoặc CDN.' },
        { line: 4, text: 'alt mô tả sinh động ngữ cảnh của bức ảnh, phục vụ SEO và người khiếm thị.' },
        { line: 5, text: 'width/height đặt tỷ lệ khung hình cố định chống giật màn hình (CLS).' },
        { line: 7, text: 'loading="lazy" kích hoạt tải ảnh lười tự nhiên của trình duyệt.' },
        { line: 11, text: '<figure> và <figcaption> liên kết chặt chẽ ảnh minh họa và chú thích ảnh.' }
      ],
      commonMistakes: [
        'Bỏ trống thuộc tính alt hoặc viết sơ sài như alt="ảnh" hay alt="image1.jpg".',
        'Không khai báo width và height khiến trang web bị nhảy nội dung đột ngột khi ảnh tải xong.'
      ],
      whenToUse: 'Dùng <img> cho hình ảnh mang nội dung thông tin (sản phẩm, minh họa, avatar, bài báo).',
      whenNotToUse: 'Không dùng <img> cho hình ảnh trang trí thuần túy (hãy dùng CSS background-image).',
      realWorldUseCase: 'Danh mục ảnh sản phẩm trên các sàn Shopee/Tiki và banner bài viết tin tức.'
    },
    {
      id: 'sec-html-6-2',
      lessonId: 'les-html-6',
      order: 2,
      conceptName: 'Đa phương tiện hiện đại: <picture>, <video> và <audio>',
      title: '2. Thẻ <picture> đáp ứng, Trình phát Video và Âm thanh',
      explanation: 'HTML5 loại bỏ hoàn toàn nhu cầu dùng plugin Flash cũ bằng các thẻ đa phương tiện gốc:\n- <picture>: Cho phép định nghĩa nhiều nguồn ảnh khác nhau cho các kích thước màn hình hoặc nạp định dạng ảnh nén thế hệ mới (AVIF/WebP) với fallback về PNG/JPG.\n- <video>: Phát video với các thuộc tính controls (hiện thanh điều khiển tua/âm lượng), poster (ảnh bìa đại diện), loop (lặp lại), muted (tắt tiếng).\n- <audio>: Phát âm thanh podcast hoặc nhạc nền với thẻ <source> dự phòng.',
      syntax: '<picture>\n  <source srcset="anh.webp" type="image/webp">\n  <img src="anh.jpg" alt="Mô tả">\n</picture>\n<video controls poster="bia.jpg">\n  <source src="clip.mp4" type="video/mp4">\n</video>',
      codeExample: `<!-- Trình phát Video HTML5 có poster và nhiều nguồn dự phòng -->
<video controls width="640" height="360" poster="thumbnail.jpg">
  <source src="bai-giang.mp4" type="video/mp4">
  <source src="bai-giang.webm" type="video/webm">
  <track src="phu-de.vtt" kind="subtitles" srclang="vi" label="Tiếng Việt">
  Trình duyệt của bạn không hỗ trợ thẻ video HTML5.
</video>

<!-- Trình phát Âm thanh Podcast -->
<audio controls>
  <source src="podcast-tap-1.mp3" type="audio/mpeg">
  Trình duyệt của bạn không hỗ trợ phát âm thanh.
</audio>`,
      lineByLineExplanation: [
        { line: 2, text: 'controls kích hoạt nút Play/Pause, thanh cuộn thời gian và âm lượng.' },
        { line: 3, text: '<source> cung cấp các định dạng video khác nhau để trình duyệt tự chọn định dạng hỗ trợ tốt nhất.' },
        { line: 5, text: '<track> nhúng tệp phụ đề WebVTT (.vtt) chuẩn quốc tế.' },
        { line: 10, text: '<audio controls> phát tệp âm thanh bản địa.' }
      ],
      commonMistakes: [
        'Cài đặt autoplay cho video mà không kèm thuộc tính muted, dẫn đến trình duyệt hiện đại chặn phát do chính sách chống làm phiền người dùng.',
        'Quên cung cấp thông báo văn bản dự phòng (fallback text) bên trong thẻ video/audio.'
      ],
      whenToUse: 'Dùng khi muốn tự chủ phát video/audio trên trang web mà không phụ thuộc vào nhúng iframe từ bên thứ 3.',
      whenNotToUse: 'Không tải video dung lượng hàng trăm megabyte trực tiếp từ web server giá rẻ mà không qua CDN phát trực tuyến.',
      realWorldUseCase: 'Khóa học video e-learning (Coursera/Udemy) và nền tảng nghe podcast âm nhạc.'
    }
  ],
  predictOutputs: [
    {
      id: 'po-html-6-1',
      question: 'Khi khai báo một thẻ video như sau: `<video autoplay src="intro.mp4"></video>`, tại sao trên Google Chrome video lại KHÔNG tự động phát khi người dùng vừa vào trang?',
      code: `<video autoplay src="intro.mp4"></video>`,
      options: [
        'A. Vì đường dẫn tệp intro.mp4 bị sai',
        'B. Vì chính sách Autoplay Policy của trình duyệt chặn video có âm thanh tự phát; bắt buộc phải có thêm thuộc tính "muted"',
        'C. Vì thiếu thuộc tính width và height',
        'D. Vì video HTML5 chỉ chạy được trên điện thoại di động'
      ],
      correctAnswer: 'B. Vì chính sách Autoplay Policy của trình duyệt chặn video có âm thanh tự phát; bắt buộc phải có thêm thuộc tính "muted"',
      explanation: 'Tất cả trình duyệt hiện đại đều chặn autoplay video có tiếng để bảo vệ người dùng không bị giật mình. Để autoplay chạy được, bắt buộc phải có thuộc tính `muted`.',
      hint: 'Hãy nhớ lại trải nghiệm người dùng: không ai muốn mở trang web lên là có tiếng nhạc ồn ào bất ngờ.'
    }
  ],
  interactivePractice: {
    id: 'ip-html-6',
    title: 'Thực hành tạo thẻ hình ảnh tối ưu và nhóm figure',
    description: 'Tạo thẻ <figure> chứa ảnh có src="logo.png", alt="Logo Nhà Trường", và thẻ <figcaption> có chú thích "Biểu trưng chính thức".',
    starterCode: `<figure>
  <img src="logo.png" alt="Logo Nhà Trường" width="200" height="200">
  <figcaption>Biểu trưng chính thức</figcaption>
</figure>`,
    expectedConsoleOutput: 'Biểu trưng chính thức',
    hint: 'Sử dụng thẻ figure bao quanh img và figcaption.',
    language: 'html'
  },
  exercises: {
    basic: {
      id: 'ex-html-6-basic',
      lessonId: 'les-html-6',
      title: 'Tối ưu ảnh chống vỡ layout và tải lười',
      difficulty: 'basic',
      learningObjectiveIds: ['LO-HTML-6.1'],
      description: 'Tạo một thẻ <img> có src="banner.jpg", alt="Hội thảo Khoa học 2026", kích thước width="800", height="400" và thuộc tính loading="lazy".',
      starterCode: `<img src="banner.jpg" alt="Hội thảo Khoa học 2026" width="800" height="400" loading="lazy">`,
      solutionCode: `<img src="banner.jpg" alt="Hội thảo Khoa học 2026" width="800" height="400" loading="lazy">`,
      testCases: [
        {
          id: 'tc-h6-1',
          description: 'Kiểm tra thẻ img có alt, width, height và loading lazy',
          expectedOutput: 'Hội thảo Khoa học 2026'
        }
      ],
      hints: ['Kiểm tra chính xác tên thuộc tính loading="lazy".'],
      explanation: 'Khai báo đầy đủ 4 thuộc tính giúp tối ưu điểm số Core Web Vitals trên Google Lighthouse.',
      language: 'html'
    },
    intermediate: {
      id: 'ex-html-6-mid',
      lessonId: 'les-html-6',
      title: 'Nhúng trình phát Audio kèm điều khiển',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO-HTML-6.3'],
      description: 'Tạo thẻ <audio> có thuộc tính controls. Bên trong sử dụng thẻ <source> với src="audio/lecture.mp3" và type="audio/mpeg". Thêm văn bản dự phòng "Không hỗ trợ audio".',
      starterCode: `<audio controls>
  <source src="audio/lecture.mp3" type="audio/mpeg">
  Không hỗ trợ audio
</audio>`,
      solutionCode: `<audio controls>
  <source src="audio/lecture.mp3" type="audio/mpeg">
  Không hỗ trợ audio
</audio>`,
      testCases: [
        {
          id: 'tc-h6-2',
          description: 'Kiểm tra thẻ audio controls có source audio/mpeg',
          expectedOutput: 'Không hỗ trợ audio'
        }
      ],
      hints: ['Thuộc tính controls là một boolean attribute.'],
      explanation: 'Thẻ source cho phép trình duyệt lựa chọn bộ giải mã codec phù hợp.',
      language: 'html'
    },
    challenge: {
      id: 'ex-html-6-adv',
      lessonId: 'les-html-6',
      title: 'Nhúng Video HTML5 có Poster và Phụ đề',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO-HTML-6.3'],
      description: 'Tạo thẻ <video> có controls, poster="cover.jpg", width="640". Bên trong có thẻ <source src="video.mp4" type="video/mp4"> và thẻ <track src="sub_vi.vtt" kind="subtitles" srclang="vi" label="Tiếng Việt">.',
      starterCode: `<video controls poster="cover.jpg" width="640">
  <source src="video.mp4" type="video/mp4">
  <track src="sub_vi.vtt" kind="subtitles" srclang="vi" label="Tiếng Việt">
  Trình duyệt không hỗ trợ video
</video>`,
      solutionCode: `<video controls poster="cover.jpg" width="640">
  <source src="video.mp4" type="video/mp4">
  <track src="sub_vi.vtt" kind="subtitles" srclang="vi" label="Tiếng Việt">
  Trình duyệt không hỗ trợ video
</video>`,
      testCases: [
        {
          id: 'tc-h6-3',
          description: 'Kiểm tra video có poster, source và track phụ đề',
          expectedOutput: 'Tiếng Việt'
        }
      ],
      hints: ['Thẻ track dùng cho tệp phụ đề định dạng .vtt.'],
      explanation: 'Phụ đề track là tiêu chuẩn trợ năng quốc tế WCAG dành cho người khiếm thính.',
      language: 'html'
    }
  },
  quiz: {
    id: 'quiz-html-6',
    lessonId: 'les-html-6',
    title: 'Kiểm tra hiểu biết: Hình ảnh & Đa phương tiện',
    passingScore: 70,
    questions: [
      {
        id: 'q-h6-1',
        lessonId: 'les-html-6',
        learningObjectiveId: 'LO-HTML-6.1',
        type: 'multiple_choice',
        difficulty: 'easy',
        prompt: 'Thuộc tính "alt" trong thẻ <img> có vai trò quan trọng nhất là gì?',
        options: [
          { id: 'a', text: 'Tạo viền khung ảnh màu xám' },
          { id: 'b', text: 'Cung cấp văn bản thay thế mô tả ảnh cho người khiếm thị nghe qua Screen Reader và hỗ trợ bot tìm kiếm hiểu nội dung ảnh' },
          { id: 'c', text: 'Tự động nén dung lượng ảnh nhỏ lại' },
          { id: 'd', text: 'Xác định địa chỉ URL lưu trữ ảnh' }
        ],
        correctAnswer: 'b',
        explanation: 'alt (Alternative Text) là tiêu chuẩn bắt buộc cho tính trợ năng Web Accessibility, đảm bảo mọi đối tượng người dùng đều tiếp cận được thông điệp của ảnh.',
        relatedLessonId: 'les-html-6'
      },
      {
        id: 'q-h6-2',
        lessonId: 'les-html-6',
        learningObjectiveId: 'LO-HTML-6.3',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'Thẻ nào trong HTML5 dùng để gắn nhãn chú thích chính thức cho hình ảnh nằm bên trong thẻ <figure>?',
        options: [
          { id: 'a', text: '<caption' },
          { id: 'b', text: '<label>' },
          { id: 'c', text: '<figcaption>' },
          { id: 'd', text: '<desc>' }
        ],
        correctAnswer: 'c',
        explanation: '<figcaption> là thẻ con chuẩn của <figure>, dùng để hiển thị dòng chú thích (caption) của bức ảnh hoặc biểu đồ.',
        relatedLessonId: 'les-html-6'
      }
    ]
  },
  summary: [
    'Luôn cung cấp thuộc tính alt có ý nghĩa cho mọi thẻ <img>.',
    'Chỉ định width và height để ngăn chặn lỗi giật dịch chuyển giao diện (CLS).',
    'Thêm loading="lazy" để tối ưu hóa thời gian tải trang ban đầu.',
    'Dùng <figure> và <figcaption> cho hình ảnh có chú thích, và dùng <video>/<audio> bản địa thay thế Flash.'
  ],
  suggestedBookmarks: [
    'Hướng dẫn viết Alt text chuẩn trợ năng cho người khiếm thị (W3C ATAG)',
    'Các thuộc tính tối ưu hóa video HTML5 trên thiết bị di động'
  ]
};

// ============================================================================
// BÀI 7: DANH SÁCH (Lists: ul, ol, dl)
// ============================================================================
export const LESSON_HTML_7: Lesson = {
  id: 'les-html-7',
  moduleId: 'mod-html-7',
  track: 'html',
  language: 'html',
  title: 'HTML 7. Danh sách (Lists: ul, ol, dl)',
  order: 7,
  durationMinutes: 40,
  difficulty: 'Cơ bản',
  prerequisites: [
    'Nắm vững mối quan hệ cha - con giữa các thẻ HTML từ Bài 1'
  ],
  learningObjectives: [
    {
      id: 'LO-HTML-7.1',
      code: 'LO-HTML-7.1',
      title: 'Danh sách không thứ tự (ul) và có thứ tự (ol)',
      description: 'Ứng dụng thẻ <ul> cho danh sách gạch đầu dòng, <ol> cho các bước quy trình, làm chủ các thuộc tính type, start, reversed.',
      bloomLevel: 'Apply',
      masteryPercentage: 95
    },
    {
      id: 'LO-HTML-7.2',
      code: 'LO-HTML-7.2',
      title: 'Danh sách định nghĩa / mô tả (dl, dt, dd)',
      description: 'Sử dụng cấu trúc danh sách thuật ngữ và giải nghĩa cho từ điển, bảng thuật ngữ hoặc danh sách thông số kỹ thuật (Specs).',
      bloomLevel: 'Apply',
      masteryPercentage: 88
    },
    {
      id: 'LO-HTML-7.3',
      code: 'LO-HTML-7.3',
      title: 'Kỹ thuật lồng danh sách đa cấp (Nested Lists)',
      description: 'Lồng ghép các danh sách con bên trong thẻ <li> cha để xây dựng sơ đồ tổ chức hoặc hệ thống menu đa tầng (Dropdown Menu).',
      bloomLevel: 'Analyze',
      masteryPercentage: 90
    }
  ],
  sections: [
    {
      id: 'sec-html-7-1',
      lessonId: 'les-html-7',
      order: 1,
      conceptName: 'Danh sách có thứ tự <ol> và không thứ tự <ul>',
      title: '1. Phân biệt <ul> (Unordered List) và <ol> (Ordered List)',
      explanation: 'HTML hỗ trợ 2 loại danh sách phổ biến nhất:\n- <ul>: Danh sách không có thứ bậc ưu tiên, các mục con bắt đầu bằng dấu chấm tròn bullet (ví dụ danh sách tính năng, sở thích, menu điều hướng).\n- <ol>: Danh sách có thứ tự theo số thứ tự 1, 2, 3... biểu thị các bước tuần tự (ví dụ công thức nấu ăn, quy trình thanh toán).\nThẻ <ol> có các thuộc tính hữu ích:\n  + start="5": Bắt đầu đánh số từ 5.\n  + reversed: Đếm ngược từ lớn về nhỏ (5, 4, 3, 2, 1).\n  + type="A" | "a" | "I" | "i": Đổi kiểu đánh số sang chữ cái hoặc số La Mã.\nLưu ý cực kỳ quan trọng: Con trực tiếp của <ul> và <ol> CHỈ ĐƯỢC PHÉP là thẻ <li> (List Item).',
      syntax: '<ul>\n  <li>Mục 1</li>\n  <li>Mục 2</li>\n</ul>\n\n<ol start="1" type="1">\n  <li>Bước 1</li>\n  <li>Bước 2</li>\n</ol>',
      codeExample: `<!-- Danh sách tính năng (không quan trọng thứ tự) -->
<h3>Kỹ năng cốt lõi:</h3>
<ul>
  <li>HTML5 Semantic Markup</li>
  <li>CSS3 Flexbox & Grid</li>
  <li>JavaScript ES6+ Hiện đại</li>
</ul>

<!-- Quy trình 3 bước mua hàng (có thứ tự) -->
<h3>Quy trình đặt đơn hàng:</h3>
<ol start="1">
  <li>Chọn sản phẩm vào giỏ hàng</li>
  <li>Nhập thông tin giao hàng & thanh toán</li>
  <li>Xác nhận mã OTP và hoàn tất</li>
</ol>`,
      lineByLineExplanation: [
        { line: 3, text: '<ul> bao bọc toàn bộ danh sách không thứ tự.' },
        { line: 4, text: 'Mỗi <li> là một mục con độc lập.' },
        { line: 11, text: '<ol> đánh số thứ tự tự động 1., 2., 3. cho từng bước.' }
      ],
      commonMistakes: [
        'Đặt trực tiếp thẻ <p>, <div> hoặc <a> làm con trực tiếp của <ul> mà không bọc trong thẻ <li>.',
        'Dùng <ol> cho các danh sách không cần thứ tự khiến người đọc hiểu nhầm đây là quy trình bắt buộc.'
      ],
      whenToUse: 'Dùng <ul> cho danh sách gạch đầu dòng, danh sách thẻ tag, menu điều hướng nav; dùng <ol> cho bảng xếp hạng, công thức làm bánh, hướng dẫn cài đặt phần mềm.',
      whenNotToUse: 'Không dùng thẻ danh sách khi chỉ có một dòng văn bản đơn lẻ.',
      realWorldUseCase: 'Menu thanh điều hướng của hầu hết website được dựng bằng <ul><li><a>...</a></li></ul>.'
    },
    {
      id: 'sec-html-7-2',
      lessonId: 'les-html-7',
      order: 2,
      conceptName: 'Danh sách định nghĩa <dl> và Danh sách lồng nhau (Nested Lists)',
      title: '2. Danh sách mô tả <dl> và Lồng danh sách nhiều cấp',
      explanation: 'Ngoài <ul> và <ol>, HTML cung cấp một cấu trúc danh sách cực kỳ tinh tế:\n- <dl> (Description List): Danh sách mô tả thuật ngữ hoặc thông số kỹ thuật.\n- <dt> (Description Term): Thuật ngữ cần giải nghĩa (tương đương Key).\n- <dd> (Description Details): Chi tiết định nghĩa hoặc giá trị (tương đương Value).\nNgoài ra, khi tạo menu phân cấp đa tầng (ví dụ Mục lục đồ án hoặc Menu Dropdown), ta lồng một danh sách <ul> con BÊN TRONG một thẻ <li> của danh sách cha.',
      syntax: '<dl>\n  <dt>Từ khóa</dt>\n  <dd>Giải thích định nghĩa...</dd>\n</dl>',
      codeExample: `<!-- Danh sách định nghĩa thông số kỹ thuật điện thoại -->
<dl>
  <dt>Dung lượng RAM</dt>
  <dd>8GB LPDDR5 tốc độ cao</dd>

  <dt>Màn hình</dt>
  <dd>6.7 inch AMOLED 120Hz</dd>
</dl>

<!-- Danh sách lồng nhau (Nested List) -->
<ul>
  <li>
    Front-end Development
    <ul>
      <li>HTML5 & CSS3</li>
      <li>JavaScript & TypeScript</li>
      <li>React Framework</li>
    </ul>
  </li>
  <li>
    Back-end Development
    <ul>
      <li>Node.js & Express</li>
      <li>PostgreSQL Database</li>
    </ul>
  </li>
</ul>`,
      lineByLineExplanation: [
        { line: 2, text: '<dl> định nghĩa một bảng từ điển cặp key - value.' },
        { line: 3, text: '<dt> là tên thuộc tính / thuật ngữ.' },
        { line: 4, text: '<dd> là giá trị chi tiết của thuộc tính đó.' },
        { line: 13, text: 'Danh sách <ul> con nằm trọn vẹn bên trong thẻ <li> của Front-end Development.' }
      ],
      commonMistakes: [
        'Lồng thẻ <ul> con nằm ngang hàng với <li> thay vì nằm bên trong <li>.',
        'Dùng sai thứ tự cặp <dt> và <dd> trong thẻ <dl>.'
      ],
      whenToUse: 'Dùng <dl> cho thông số kỹ thuật sản phẩm (Specs sheet), từ điển thuật ngữ, phần hỏi đáp FAQ ngắn gọn.',
      whenNotToUse: 'Không dùng <dl> cho các danh sách chỉ có 1 cột dữ liệu đơn thuần.',
      realWorldUseCase: 'Bảng cấu hình chi tiết điện thoại trên Thegioididong và hệ thống danh mục sản phẩm đa cấp trên Amazon.'
    }
  ],
  predictOutputs: [
    {
      id: 'po-html-7-1',
      question: 'Đoạn mã sau hiển thị số thứ tự cho các mục như thế nào?',
      code: `<ol start="3" reversed>
  <li>Huy chương Đồng</li>
  <li>Huy chương Bạc</li>
  <li>Huy chương Vàng</li>
</ol>`,
      options: [
        'A. Đánh số xuôi: 3, 4, 5',
        'B. Đánh số đếm ngược: 3, 2, 1',
        'C. Đánh số: 1, 2, 3',
        'D. Trình duyệt báo lỗi do không thể kết hợp start và reversed'
      ],
      correctAnswer: 'B. Đánh số đếm ngược: 3, 2, 1',
      explanation: 'Thuộc tính `start="3"` bắt đầu từ số 3, và `reversed` chỉ thị đếm lùi, do đó các mục lần lượt nhận số 3, 2 và 1.',
      hint: 'Chữ "reversed" trong tiếng Anh có nghĩa là đảo ngược / đếm lùi.'
    }
  ],
  interactivePractice: {
    id: 'ip-html-7',
    title: 'Thực hành tạo danh sách quy trình và từ điển',
    description: 'Tạo thẻ <ol> gồm 3 bước học lập trình, và một thẻ <dl> giải thích thuật ngữ <dt>HTML</dt> là <dd>Ngôn ngữ đánh dấu siêu văn bản</dd>.',
    starterCode: `<ol>
  <li>Học HTML5</li>
  <li>Học CSS3</li>
  <li>Học JavaScript</li>
</ol>

<dl>
  <dt>HTML</dt>
  <dd>Ngôn ngữ đánh dấu siêu văn bản</dd>
</dl>`,
    expectedConsoleOutput: 'Ngôn ngữ đánh dấu siêu văn bản',
    hint: 'Sử dụng cấu trúc ol > li và dl > dt + dd.',
    language: 'html'
  },
  exercises: {
    basic: {
      id: 'ex-html-7-basic',
      lessonId: 'les-html-7',
      title: 'Tạo danh sách món ăn yêu thích',
      difficulty: 'basic',
      learningObjectiveIds: ['LO-HTML-7.1'],
      description: 'Tạo danh sách không thứ tự <ul> gồm 3 món ăn: "Phở Bò", "Bún Chả" và "Cơm Tấm" bằng các thẻ <li>.',
      starterCode: `<ul>
  <li>Phở Bò</li>
  <li>Bún Chả</li>
  <li>Cơm Tấm</li>
</ul>`,
      solutionCode: `<ul>
  <li>Phở Bò</li>
  <li>Bún Chả</li>
  <li>Cơm Tấm</li>
</ul>`,
      testCases: [
        {
          id: 'tc-h7-1',
          description: 'Kiểm tra ul có chứa các thẻ li món ăn',
          expectedOutput: 'Phở Bò'
        }
      ],
      hints: ['Đảm bảo mọi mục văn bản đều nằm trong thẻ <li>.'],
      explanation: 'Thẻ ul tự động hiển thị dấu chấm tròn bullet mặc định.',
      language: 'html'
    },
    intermediate: {
      id: 'ex-html-7-mid',
      lessonId: 'les-html-7',
      title: 'Tạo danh sách thông số kỹ thuật với <dl>',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO-HTML-7.2'],
      description: 'Tạo thẻ <dl> hiển thị thông số laptop: <dt>Bộ vi xử lý</dt> đi kèm <dd>Intel Core i7 13700H</dd>, và <dt>Dung lượng ổ cứng</dt> đi kèm <dd>512GB NVMe SSD</dd>.',
      starterCode: `<dl>
  <dt>Bộ vi xử lý</dt>
  <dd>Intel Core i7 13700H</dd>
  <dt>Dung lượng ổ cứng</dt>
  <dd>512GB NVMe SSD</dd>
</dl>`,
      solutionCode: `<dl>
  <dt>Bộ vi xử lý</dt>
  <dd>Intel Core i7 13700H</dd>
  <dt>Dung lượng ổ cứng</dt>
  <dd>512GB NVMe SSD</dd>
</dl>`,
      testCases: [
        {
          id: 'tc-h7-2',
          description: 'Kiểm tra dl có cặp dt và dd chính xác',
          expectedOutput: 'Intel Core i7 13700H'
        }
      ],
      hints: ['dt là tên thông số, dd là giá trị chi tiết.'],
      explanation: 'Cấu trúc dl/dt/dd tạo ra ngữ nghĩa key-value chuẩn cho web tìm kiếm.',
      language: 'html'
    },
    challenge: {
      id: 'ex-html-7-adv',
      lessonId: 'les-html-7',
      title: 'Xây dựng Menu phân cấp lồng nhau (Nested Navigation)',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO-HTML-7.3'],
      description: 'Xây dựng danh sách <ul> ngoài có mục "Khóa học". Bên trong thẻ <li> này chứa một danh sách <ul> con gồm 2 mục con: "HTML5 Cơ Bản" và "CSS3 Nâng Cao".',
      starterCode: `<ul>
  <li>
    Khóa học
    <ul>
      <li>HTML5 Cơ Bản</li>
      <li>CSS3 Nâng Cao</li>
    </ul>
  </li>
</ul>`,
      solutionCode: `<ul>
  <li>
    Khóa học
    <ul>
      <li>HTML5 Cơ Bản</li>
      <li>CSS3 Nâng Cao</li>
    </ul>
  </li>
</ul>`,
      testCases: [
        {
          id: 'tc-h7-3',
          description: 'Kiểm tra danh sách ul lồng trong thẻ li cha',
          expectedOutput: 'HTML5 Cơ Bản'
        }
      ],
      hints: ['Đặt thẻ <ul> con nằm trước khi đóng thẻ </li> cha.'],
      explanation: 'Đây là cấu trúc DOM cốt lõi để xây dựng dropdown navigation bar trong CSS.',
      language: 'html'
    }
  },
  quiz: {
    id: 'quiz-html-7',
    lessonId: 'les-html-7',
    title: 'Kiểm tra hiểu biết: Danh sách',
    passingScore: 70,
    questions: [
      {
        id: 'q-h7-1',
        lessonId: 'les-html-7',
        learningObjectiveId: 'LO-HTML-7.1',
        type: 'multiple_choice',
        difficulty: 'easy',
        prompt: 'Thẻ nào sau đây là con trực tiếp HỢP LỆ DUY NHẤT của thẻ <ul> và <ol> theo quy chuẩn HTML5?',
        options: [
          { id: 'a', text: '<p>' },
          { id: 'b', text: '<div>' },
          { id: 'c', text: '<li>' },
          { id: 'd', text: '<span>' }
        ],
        correctAnswer: 'c',
        explanation: 'Quy chuẩn HTML5 quy định con trực tiếp duy nhất được phép đặt bên trong <ul> và <ol> là thẻ <li> (List Item). Mọi nội dung khác như ảnh, link, chữ đều phải đặt bên trong thẻ <li>.',
        relatedLessonId: 'les-html-7'
      },
      {
        id: 'q-h7-2',
        lessonId: 'les-html-7',
        learningObjectiveId: 'LO-HTML-7.2',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'Trong danh sách định nghĩa <dl>, cặp thẻ nào đại diện lần lượt cho "Tên thuật ngữ" và "Mô tả giải nghĩa"?',
        options: [
          { id: 'a', text: '<term> và <desc>' },
          { id: 'b', text: '<dt> và <dd>' },
          { id: 'c', text: '<key> và <val>' },
          { id: 'd', text: '<li> và <info>' }
        ],
        correctAnswer: 'b',
        explanation: '<dt> là Description Term (thuật ngữ) và <dd> là Description Details (mô tả chi tiết).',
        relatedLessonId: 'les-html-7'
      }
    ]
  },
  summary: [
    'Dùng <ul> cho danh sách không quan trọng thứ tự và <ol> cho danh sách các bước tuần tự.',
    'Thẻ <li> là con trực tiếp hợp lệ duy nhất của <ul> và <ol>.',
    'Thẻ <ol> hỗ trợ thuộc tính start, type và reversed để tùy biến đánh số.',
    'Sử dụng <dl>, <dt>, <dd> cho các cặp dữ liệu từ điển hoặc thông số kỹ thuật.'
  ],
  suggestedBookmarks: [
    'Kỹ thuật xây dựng đa cấp Dropdown Menu với HTML List và CSS',
    'Quy chuẩn viết Accessible List cho người sử dụng Screen Reader'
  ]
};

// ============================================================================
// BÀI 8: BẢNG (Tables: table, tr, th, td, colspan, rowspan)
// ============================================================================
export const LESSON_HTML_8: Lesson = {
  id: 'les-html-8',
  moduleId: 'mod-html-8',
  track: 'html',
  language: 'html',
  title: 'HTML 8. Bảng dữ liệu (Tables: thead, tbody, colspan, rowspan)',
  order: 8,
  durationMinutes: 50,
  difficulty: 'Trung bình',
  prerequisites: [
    'Hiểu khái niệm hàng (Row) và cột (Column) trong dữ liệu bảng tính Excel',
    'Nắm vững cú pháp thẻ lồng thẻ từ các bài trước'
  ],
  learningObjectives: [
    {
      id: 'LO-HTML-8.1',
      code: 'LO-HTML-8.1',
      title: 'Cấu trúc ngữ nghĩa của bảng: <table>, <caption>, <thead>, <tbody>, <tfoot>',
      description: 'Phân định rõ ràng phần tiêu đề bảng, phần đầu gối dữ liệu, phần thân chính và hàng tổng kết dưới chân bảng.',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    },
    {
      id: 'LO-HTML-8.2',
      code: 'LO-HTML-8.2',
      title: 'Hàng <tr>, Ô tiêu đề <th> và Ô dữ liệu <td>',
      description: 'Phân biệt ô tiêu đề <th> có thuộc tính scope="col|row" và ô dữ liệu thông thường <td>.',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    },
    {
      id: 'LO-HTML-8.3',
      code: 'LO-HTML-8.3',
      title: 'Kỹ thuật gộp ô phức tạp: colspan và rowspan',
      description: 'Gộp nhiều cột nằm ngang với colspan và gộp nhiều hàng dọc với rowspan mà không làm lệch cấu trúc bảng.',
      bloomLevel: 'Analyze',
      masteryPercentage: 85
    }
  ],
  sections: [
    {
      id: 'sec-html-8-1',
      lessonId: 'les-html-8',
      order: 1,
      conceptName: 'Bộ khung ngữ nghĩa của bảng dữ liệu HTML5',
      title: '1. Khung chuẩn <table>, <caption>, <thead>, <tbody> và <tfoot>',
      explanation: 'Bảng trong HTML CHỈ DÙNG để biểu diễn dữ liệu dạng bảng (Tabular Data - số liệu thống kê, bảng điểm, lịch thi), KHÔNG ĐƯỢC dùng để chia layout trang web như thời thập niên 1990.\nMột bảng hoàn chỉnh có cấu trúc gồm:\n- <caption>: Tiêu đề mô tả bảng, được trình đọc màn hình đọc đầu tiên.\n- <thead>: Nhóm hàng tiêu đề các cột.\n- <tbody>: Thân bảng chứa các hàng dữ liệu thực tế.\n- <tfoot>: Chân bảng dùng để hiển thị hàng tổng cộng (Total, Average).\n- <tr> (Table Row): Đại diện cho một hàng ngang.\n- <th> (Table Header): Ô tiêu đề cột hoặc hàng (mặc định in đậm, căn giữa).\n- <td> (Table Data): Ô dữ liệu thông thường.',
      syntax: '<table>\n  <caption>Tên bảng</caption>\n  <thead>\n    <tr><th>Cột 1</th><th>Cột 2</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Dữ liệu 1</td><td>Dữ liệu 2</td></tr>\n  </tbody>\n</table>',
      codeExample: `<table border="1">
  <caption>Bảng Điểm Học Kỳ 1</caption>
  <thead>
    <tr>
      <th scope="col">Mã SV</th>
      <th scope="col">Họ và Tên</th>
      <th scope="col">Điểm HTML</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>PS25101</td>
      <td>Nguyễn Văn An</td>
      <td>9.5</td>
    </tr>
    <tr>
      <td>PS25102</td>
      <td>Trần Thị Mai</td>
      <td>8.8</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">Điểm trung bình lớp</td>
      <td>9.15</td>
    </tr>
  </tfoot>
</table>`,
      lineByLineExplanation: [
        { line: 2, text: '<caption> cung cấp tiêu đề chính thống cho bảng.' },
        { line: 3, text: '<thead> gom cụm các dòng tiêu đề lại.' },
        { line: 5, text: 'th scope="col" báo rằng tiêu đề này áp dụng cho toàn bộ cột dọc phía dưới.' },
        { line: 10, text: '<tbody> chứa tất cả các bản ghi dữ liệu sinh viên.' },
        { line: 22, text: '<tfoot> chứa dòng tổng kết điểm trung bình.' }
      ],
      commonMistakes: [
        'Viết thẻ <td> trực tiếp bên trong <table> mà không có thẻ hàng <tr> bao quanh.',
        'Quên thuộc tính scope="col" hoặc scope="row" trên thẻ <th> làm giảm khả năng tiếp cận trợ năng.'
      ],
      whenToUse: 'Dùng cho bảng lương, bảng điểm học tập, bảng so sánh tính năng các gói dịch vụ (Pricing Table).',
      whenNotToUse: 'Tuyệt đối không dùng <table> để dựng khung layout giao diện trang web (hãy dùng CSS Grid hoặc Flexbox).',
      realWorldUseCase: 'Bảng quản lý tài khoản ngân hàng, báo cáo sao kê thu chi và bảng lịch trình chuyến bay tại sân bay.'
    },
    {
      id: 'sec-html-8-2',
      lessonId: 'les-html-8',
      order: 2,
      conceptName: 'Kỹ thuật gộp ô nâng cao: colspan và rowspan',
      title: '2. Gộp ô theo chiều ngang (colspan) và chiều dọc (rowspan)',
      explanation: 'Khi một ô dữ liệu chiếm độ rộng của nhiều cột hoặc nhiều hàng, ta sử dụng thuộc tính gộp ô:\n- colspan="N" (Column Span): Ô đó sẽ mở rộng trải dài qua N cột ngang. Số ô <td> trong hàng đó phải giảm đi N - 1 ô để bảng không bị phình ra thừa cột.\n- rowspan="M" (Row Span): Ô đó sẽ mở rộng chiếm M hàng dọc liên tiếp. Ở các hàng kế tiếp bên dưới, ta phải bỏ bớt 1 ô <td> tương ứng tại vị trí đó.',
      syntax: '<td colspan="2">Ô này chiếm 2 cột ngang</td>\n<td rowspan="3">Ô này chiếm 3 hàng dọc</td>',
      codeExample: `<table border="1">
  <thead>
    <tr>
      <th>Thứ</th>
      <th>Buổi</th>
      <th>Môn học</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <!-- Gộp 2 hàng dọc cho Thứ Hai -->
      <td rowspan="2">Thứ Hai</td>
      <td>Sáng</td>
      <td>Lập trình Web HTML5</td>
    </tr>
    <tr>
      <!-- Hàng này không cần khai báo ô Thứ vì đã bị Thứ Hai ở trên chiếm -->
      <td>Chiều</td>
      <td>Thực hành CSS3 Flexbox</td>
    </tr>
    <tr>
      <!-- Gộp 2 cột ngang cho thông báo -->
      <td>Thứ Ba</td>
      <td colspan="2">Nghỉ lễ theo lịch nhà trường</td>
    </tr>
  </tbody>
</table>`,
      lineByLineExplanation: [
        { line: 12, text: 'rowspan="2" gộp ô "Thứ Hai" chiếm luôn vị trí ô đầu tiên của dòng kế tiếp.' },
        { line: 18, text: 'Dòng 2 chỉ cần 2 thẻ <td> vì ô đầu tiên đã được thừa hưởng từ rowspan phía trên.' },
        { line: 24, text: 'colspan="2" mở rộng ô thông báo trải rộng qua 2 cột (Buổi và Môn học).' }
      ],
      commonMistakes: [
        'Khai báo colspan="2" nhưng vẫn giữ nguyên số lượng thẻ <td> cũ trong hàng, khiến bảng bị méo mó lệch cột sang phải.',
        'Nhầm lẫn giữa colspan (ngang) và rowspan (dọc).'
      ],
      whenToUse: 'Dùng khi thiết kế thời khóa biểu, lịch làm việc ca kíp, hoặc bảng báo cáo tài chính có các nhóm danh mục cha.',
      whenNotToUse: 'Không lạm dụng gộp ô quá phức tạp làm người dùng trên màn hình nhỏ di động khó cuộn đọc.',
      realWorldUseCase: 'Thời khóa biểu học tập của trường cao đẳng/đại học và hóa đơn bán hàng có mục "Tổng tiền" gộp các cột mô tả.'
    }
  ],
  predictOutputs: [
    {
      id: 'po-html-8-1',
      question: 'Trong một hàng <tr> có 4 cột chuẩn, nếu một ô đầu tiên được khai báo `<td colspan="3">`, thì hàng đó cần có thêm bao nhiêu ô `<td>` nữa để đủ 4 cột?',
      code: `<tr>
  <td colspan="3">Nội dung gộp</td>
  <!-- Cần thêm bao nhiêu thẻ td ở đây? -->
</tr>`,
      options: [
        'A. Thêm 3 thẻ td',
        'B. Thêm 1 thẻ td duy nhất (vì 3 + 1 = 4)',
        'C. Không cần thêm thẻ nào',
        'D. Thêm 4 thẻ td'
      ],
      correctAnswer: 'B. Thêm 1 thẻ td duy nhất (vì 3 + 1 = 4)',
      explanation: 'Vì ô đầu tiên đã chiếm độ rộng tương đương 3 cột thông thường, nên chỉ cần thêm đúng 1 ô `<td>` nữa để tổng số cột bằng 4.',
      hint: 'Hãy lấy tổng số cột trừ đi số cột đã được gộp.'
    }
  ],
  interactivePractice: {
    id: 'ip-html-8',
    title: 'Thực hành tạo bảng dữ liệu có thead và tbody',
    description: 'Tạo bảng điểm đơn giản gồm 1 thẻ <caption> "Điểm thi", hàng tiêu đề thead có 2 cột (Môn học, Điểm) và tbody có 1 hàng "HTML5" - "10".',
    starterCode: `<table border="1">
  <caption>Điểm thi</caption>
  <thead>
    <tr>
      <th>Môn học</th>
      <th>Điểm</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>HTML5</td>
      <td>10</td>
    </tr>
  </tbody>
</table>`,
    expectedConsoleOutput: 'Điểm thi',
    hint: 'Sử dụng cấu trúc table > caption + thead + tbody.',
    language: 'html'
  },
  exercises: {
    basic: {
      id: 'ex-html-8-basic',
      lessonId: 'les-html-8',
      title: 'Tạo bảng danh sách sinh viên chuẩn ngữ nghĩa',
      difficulty: 'basic',
      learningObjectiveIds: ['LO-HTML-8.1', 'LO-HTML-8.2'],
      description: 'Tạo bảng có thead với 2 cột <th> là "Họ tên" và "Lớp". Phần tbody chứa 1 dòng <tr> với 2 ô <td> là "Lê Văn Bình" và "WD18301".',
      starterCode: `<table>
  <thead>
    <tr>
      <th>Họ tên</th>
      <th>Lớp</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Lê Văn Bình</td>
      <td>WD18301</td>
    </tr>
  </tbody>
</table>`,
      solutionCode: `<table>
  <thead>
    <tr>
      <th>Họ tên</th>
      <th>Lớp</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Lê Văn Bình</td>
      <td>WD18301</td>
    </tr>
  </tbody>
</table>`,
      testCases: [
        {
          id: 'tc-h8-1',
          description: 'Kiểm tra thead và tbody hiển thị sinh viên',
          expectedOutput: 'Lê Văn Bình'
        }
      ],
      hints: ['Đảm bảo thead dùng thẻ th và tbody dùng thẻ td.'],
      explanation: 'Phân tách thead và tbody giúp trình duyệt cuộn độc lập thân bảng khi dữ liệu dài.',
      language: 'html'
    },
    intermediate: {
      id: 'ex-html-8-mid',
      lessonId: 'les-html-8',
      title: 'Gộp ô ngang với thuộc tính colspan',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO-HTML-8.3'],
      description: 'Tạo một bảng 3 cột. Ở hàng cuối cùng của tbody, tạo một ô <td> có thuộc tính colspan="2" với nội dung "Tổng cộng", và ô <td> thứ hai có giá trị "100.000đ".',
      starterCode: `<table>
  <tbody>
    <tr>
      <td colspan="2">Tổng cộng</td>
      <td>100.000đ</td>
    </tr>
  </tbody>
</table>`,
      solutionCode: `<table>
  <tbody>
    <tr>
      <td colspan="2">Tổng cộng</td>
      <td>100.000đ</td>
    </tr>
  </tbody>
</table>`,
      testCases: [
        {
          id: 'tc-h8-2',
          description: 'Kiểm tra thuộc tính colspan="2" cho ô Tổng cộng',
          expectedOutput: 'Tổng cộng'
        }
      ],
      hints: ['Khai báo colspan="2" trên thẻ td.'],
      explanation: 'colspan giúp gộp các cột thông tin phụ vào ô tổng kết.',
      language: 'html'
    },
    challenge: {
      id: 'ex-html-8-adv',
      lessonId: 'les-html-8',
      title: 'Xây dựng Bảng Thời Khóa Biểu kết hợp colspan và rowspan',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO-HTML-8.3'],
      description: 'Tạo bảng có hàng 1 gồm 1 ô <td rowspan="2">Thứ Hai</td>, 1 ô <td>Sáng</td>, 1 ô <td>Lập trình Web</td>. Hàng 2 gồm 1 ô <td>Chiều</td>, 1 ô <td>Thiết kế UX</td>. Hàng 3 gồm 1 ô <td>Thứ Ba</td> và 1 ô <td colspan="2">Nghỉ</td>.',
      starterCode: `<table>
  <tbody>
    <tr>
      <td rowspan="2">Thứ Hai</td>
      <td>Sáng</td>
      <td>Lập trình Web</td>
    </tr>
    <tr>
      <td>Chiều</td>
      <td>Thiết kế UX</td>
    </tr>
    <tr>
      <td>Thứ Ba</td>
      <td colspan="2">Nghỉ</td>
    </tr>
  </tbody>
</table>`,
      solutionCode: `<table>
  <tbody>
    <tr>
      <td rowspan="2">Thứ Hai</td>
      <td>Sáng</td>
      <td>Lập trình Web</td>
    </tr>
    <tr>
      <td>Chiều</td>
      <td>Thiết kế UX</td>
    </tr>
    <tr>
      <td>Thứ Ba</td>
      <td colspan="2">Nghỉ</td>
    </tr>
  </tbody>
</table>`,
      testCases: [
        {
          id: 'tc-h8-3',
          description: 'Kiểm tra thời khóa biểu kết hợp rowspan và colspan',
          expectedOutput: 'Thực hành kết hợp rowspan và colspan'
        }
      ],
      hints: ['Tại hàng thứ hai, không khai báo lại cột Thứ vì đã được rowspan="2" ở hàng trên bao quát.'],
      explanation: 'Làm chủ colspan và rowspan là kỹ năng thiết kế bảng dữ liệu cao cấp.',
      language: 'html'
    }
  },
  quiz: {
    id: 'quiz-html-8',
    lessonId: 'les-html-8',
    title: 'Kiểm tra hiểu biết: Bảng dữ liệu',
    passingScore: 70,
    questions: [
      {
        id: 'q-h8-1',
        lessonId: 'les-html-8',
        learningObjectiveId: 'LO-HTML-8.1',
        type: 'multiple_choice',
        difficulty: 'easy',
        prompt: 'Thẻ nào sau đây được dùng để đặt tên tiêu đề chú thích cho toàn bộ bảng và nằm ngay sau thẻ mở <table>?',
        options: [
          { id: 'a', text: '<title>' },
          { id: 'b', text: '<header>' },
          { id: 'c', text: '<caption>' },
          { id: 'd', text: '<thead>' }
        ],
        correctAnswer: 'c',
        explanation: '<caption> là thẻ quy chuẩn của HTML dùng để cung cấp tiêu đề ngắn giải thích nội dung bảng.',
        relatedLessonId: 'les-html-8'
      },
      {
        id: 'q-h8-2',
        lessonId: 'les-html-8',
        learningObjectiveId: 'LO-HTML-8.3',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'Để một ô dữ liệu mở rộng chiếm độ cao của 3 hàng dọc liên tiếp, ta dùng thuộc tính nào?',
        options: [
          { id: 'a', text: 'colspan="3"' },
          { id: 'b', text: 'rowspan="3"' },
          { id: 'c', text: 'height="3"' },
          { id: 'd', text: 'spanrow="3"' }
        ],
        correctAnswer: 'b',
        explanation: 'rowspan (Row Span) chỉ định số lượng hàng dọc mà ô đó sẽ gộp lại.',
        relatedLessonId: 'les-html-8'
      }
    ]
  },
  summary: [
    'Bảng HTML dùng để hiển thị dữ liệu bảng biểu, không dùng để chia layout.',
    'Cấu trúc bảng chuẩn gồm <table>, <caption>, <thead>, <tbody>, <tfoot>.',
    'Dùng thẻ <th> cho ô tiêu đề kèm thuộc tính scope, thẻ <td> cho ô dữ liệu.',
    'Dùng colspan để gộp ô theo hàng ngang và rowspan để gộp ô theo hàng dọc.'
  ],
  suggestedBookmarks: [
    'Quy tắc trợ năng WCAG cho bảng dữ liệu phức tạp',
    'Kỹ thuật Responsive Table trên thiết bị di động'
  ]
};
