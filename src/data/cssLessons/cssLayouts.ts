import { Lesson } from '../../types';

// ============================================================================
// CSS 6: DISPLAY, VISIBILITY & POSITION
// ============================================================================
export const LESSON_CSS_6: Lesson = {
  id: 'les-css-6',
  moduleId: 'mod-css-6',
  track: 'css',
  language: 'css',
  title: 'CSS 6. Display, Visibility & Position (Định vị & Phân lớp Z-Index)',
  order: 6,
  durationMinutes: 50,
  difficulty: 'Trung bình',
  prerequisites: [
    'Nắm vững Box Model từ Bài CSS 4'
  ],
  learningObjectives: [
    {
      id: 'LO-CSS-6.1',
      code: 'LO-CSS-6.1',
      title: 'So sánh display: none vs visibility: hidden vs opacity: 0',
      description: 'Hiểu sự khác biệt về việc giải phóng không gian DOM và phản hồi sự kiện chuột (click events).',
      bloomLevel: 'Analyze',
      masteryPercentage: 92
    },
    {
      id: 'LO-CSS-6.2',
      code: 'LO-CSS-6.2',
      title: 'Làm chủ 5 chế độ định vị Position',
      description: 'Phân biệt static, relative (làm gốc tọa độ), absolute (bay tự do theo tổ tiên gần nhất), fixed (ghim chặt màn hình) và sticky (dính khi cuộn).',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    },
    {
      id: 'LO-CSS-6.3',
      code: 'LO-CSS-6.3',
      title: 'Hiểu sâu cơ chế Z-Index và Stacking Context',
      description: 'Giải mã hiện tượng đặt z-index: 999999 mà phần tử vẫn bị chìm dưới phần tử khác do phân cấp ngữ cảnh xếp lớp (Stacking Context).',
      bloomLevel: 'Analyze',
      masteryPercentage: 86
    }
  ],
  sections: [
    {
      id: 'sec-css-6-1',
      lessonId: 'les-css-6',
      order: 1,
      conceptName: 'Các chế độ ẩn phần tử & Display Rules',
      title: '1. Display: block, inline-block và 3 cách ẩn phần tử',
      explanation: 'Thuộc tính `display` quyết định cơ chế tham gia vào dòng chảy tài liệu:\n- `display: inline-block`: Khắc phục nhược điểm của inline thông thường, cho phép đặt width, height, margin và padding đầy đủ mà vẫn nằm chung trên cùng một dòng!\n\nBa cách ẩn phần tử cần phân biệt rạch ròi:\n1. `display: none`: Xóa bỏ hoàn toàn khỏi dòng chảy layout (không chiếm một pixel nào trên màn hình, không click được).\n2. `visibility: hidden`: Ẩn khỏi mắt nhìn NHƯNG VẪN GIỮ NGUYÊN khoảng trống ban đầu (chiếm chỗ nhưng trong suốt, không click được).\n3. `opacity: 0`: Làm trong suốt 100%, VẪN CHIẾM CHỖ và VẪN BẤM CLICK ĐƯỢC (thường dùng kết hợp transition để làm hiệu ứng mờ dần fade-in/fade-out).',
      syntax: '/* Ẩn hoàn toàn giải phóng chỗ */\n.hidden { display: none; }\n\n/* Ẩn nhưng giữ chỗ */\n.invisible { visibility: hidden; }\n\n/* Chế độ khối nội dòng */\n.tag { display: inline-block; width: 100px; }',
      codeExample: `/* Nút bấm thẻ Tag dạng inline-block */
.tag-item {
  display: inline-block;
  padding: 6px 12px;
  margin-right: 8px;
  background: #e2e8f0;
  border-radius: 6px;
}

/* Menu Dropdown ẩn hiện bằng opacity và transition */
.dropdown-menu {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s, visibility 0.2s;
}
.dropdown-parent:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
}`,
      lineByLineExplanation: [
        { line: 2, text: 'inline-block cho phép các thẻ tag xếp ngang hàng nhau nhưng vẫn nhận đầy đủ margin và padding.' },
        { line: 11, text: 'Kết hợp opacity 0 và visibility hidden giúp dropdown không bị người dùng vô tình bấm nhầm khi đang tàng hình.' }
      ],
      commonMistakes: [
        'Dùng opacity: 0 để ẩn nút bấm bí mật nhưng quên rằng người dùng vẫn có thể click trúng nút đó vì nó vẫn tồn tại ở vị trí cũ.',
        'Quên rằng display: none không thể tạo hiệu ứng chuyển động mượt bằng transition.'
      ],
      whenToUse: 'Dùng display: none cho tab ẩn/hiện logic; dùng opacity: 0 + visibility: hidden cho animation mượt mà.',
      whenNotToUse: 'Không dùng visibility: hidden khi muốn phần tử phía dưới trồi lên lấp đầy chỗ trống.',
      realWorldUseCase: 'Thực đơn thả xuống Navbar, thông báo Toast Notification tự trồi lên rồi mờ dần.'
    },
    {
      id: 'sec-css-6-2',
      lessonId: 'les-css-6',
      order: 2,
      conceptName: 'Định vị Position: Relative, Absolute, Fixed, Sticky & Z-Index',
      title: '2. Cặp đôi vàng Relative - Absolute và Nghệ thuật Sticky Header',
      explanation: 'Mặc định phần tử có `position: static` (tuân theo dòng chảy tự nhiên). Khi cần bứt phá khỏi dòng chảy:\n- `position: relative`: Vẫn ở vị trí cũ nhưng cho phép dịch chuyển cục bộ bằng top/left/right/bottom, và quan trọng nhất: LÀM GỐC TỌA ĐỘ cho các phần tử con bên trong!\n- `position: absolute`: Rời bỏ dòng chảy, bay lơ lửng theo tọa độ top/left so với TỔ TIÊN GẦN NHẤT CÓ POSITION (relative/absolute/fixed).\n- `position: fixed`: Ghim cố định vĩnh viễn trên màn hình (Viewport), cuộn trang không trôi (nút Back to Top, chat widget).\n- `position: sticky`: Lai giữa relative và fixed. Ban đầu cuộn bình thường, khi chạm đến ngưỡng quy định (top: 0) sẽ "dính chặt" lại ở đỉnh màn hình!\n- `z-index`: Số nguyên quy định thứ tự xếp chồng (phần tử có z-index cao hơn sẽ nằm đè lên trên). CHỈ HOẠT ĐỘNG trên phần tử có position khác static.',
      syntax: '/* Gốc tọa độ */\n.parent { position: relative; }\n/* Con bay theo góc trên phải của cha */\n.badge { position: absolute; top: -5px; right: -5px; }\n/* Dính khi cuộn */\nheader { position: sticky; top: 0; z-index: 50; }',
      codeExample: `/* 1. Kỹ thuật icon huy hiệu badge góc thông báo */
.notification-bell {
  position: relative;
  display: inline-block;
  padding: 8px;
}
.notification-badge {
  position: absolute;
  top: 0;
  right: 0;
  width: 18px;
  height: 18px;
  background: #ef4444;
  color: white;
  border-radius: 50%;
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

/* 2. Thanh Header dính ở đỉnh trang khi cuộn */
.sticky-navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid #e2e8f0;
}`,
      lineByLineExplanation: [
        { line: 3, text: 'position: relative biến quả chuông thành mốc tọa độ (0,0) cho huy hiệu con.' },
        { line: 7, text: 'position: absolute ghim số đỏ vào đúng góc trên phải của quả chuông.' },
        { line: 23, text: 'position: sticky và top: 0 giữ thanh header luôn nổi trên đầu khi người dùng đọc bài viết dài.' }
      ],
      commonMistakes: [
        'Đặt position: absolute cho con nhưng QUÊN đặt position: relative cho cha, khiến con bay vọt lên tận đỉnh góc trái màn hình trình duyệt (thẻ body).',
        'Quên thuộc tính top/bottom khi dùng sticky (sticky bắt buộc phải kèm một mốc như top: 0 thì mới kích hoạt hiệu ứng dính).'
      ],
      whenToUse: 'Dùng relative/absolute cho nút đóng modal, badge thông báo, tooltip; dùng sticky cho Navbar và Table header; dùng fixed cho nút hotline/zalo.',
      whenNotToUse: 'Không lạm dụng absolute để dựng toàn bộ bố cục trang (khiến responsive bị phá vỡ hoàn toàn).',
      realWorldUseCase: 'Thanh Header cố định trên Facebook, nút nhắn tin hỗ trợ trực tuyến ở góc dưới màn hình.'
    }
  ],
  predictOutputs: [
    {
      id: 'po-css-6-1',
      question: 'Nếu phần tử con có `position: absolute; top: 0; right: 0;` nhưng KHÔNG có bất kỳ phần tử cha nào có thuộc tính `position`, thì phần tử con sẽ bám theo góc nào?',
      code: `<div class="container">
  <div class="box-absolute">Nội dung</div>
</div>`,
      options: [
        'A. Bám theo góc trên phải của thẻ <div class="container">',
        'B. Bám theo góc trên phải của toàn bộ cửa sổ trình duyệt (Thẻ <html> / <body>)',
        'C. Không hiển thị trên màn hình',
        'D. Nằm ở chính giữa màn hình'
      ],
      correctAnswer: 'B. Bám theo góc trên phải của toàn bộ cửa sổ trình duyệt (Thẻ <html> / <body>)',
      explanation: 'Khi không tìm thấy bất kỳ tổ tiên nào có `position` khác static, phần tử absolute sẽ tự động chọn gốc tọa độ khung nhìn khởi tạo (Initial Containing Block - tức thẻ body/html).',
      hint: 'Hãy nhớ nguyên lý tìm kiếm tổ tiên gần nhất có position.'
    }
  ],
  interactivePractice: {
    id: 'ip-css-6',
    title: 'Thực hành tạo Thanh Header Sticky và Huy hiệu Badge Absolute',
    description: 'Thiết lập class ".sticky-nav" có position: sticky, top: 0, z-index: 50, và class ".icon-wrapper" có position: relative.',
    starterCode: `.sticky-nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: #ffffff;
}

.icon-wrapper {
  position: relative;
}`,
    expectedConsoleOutput: 'sticky',
    hint: 'Sử dụng position: sticky kèm top: 0 và z-index: 50.',
    language: 'css'
  },
  exercises: {
    basic: {
      id: 'ex-css-6-basic',
      lessonId: 'les-css-6',
      title: 'Ghim nút gọi Hotline cố định màn hình (Fixed)',
      difficulty: 'basic',
      learningObjectiveIds: ['LO-CSS-6.2'],
      description: 'Thiết lập class ".btn-call-fixed" có "position: fixed;", nằm ở góc dưới phải với "bottom: 24px;", "right: 24px;" và "z-index: 99;".',
      starterCode: `.btn-call-fixed {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 99;
}`,
      solutionCode: `.btn-call-fixed {\n  position: fixed;\n  bottom: 24px;\n  right: 24px;\n  z-index: 99;\n}`,
      testCases: [
        {
          id: 'tc-c6-1',
          description: 'Kiểm tra position fixed và bottom/right 24px',
          expectedOutput: 'fixed'
        }
      ],
      hints: ['position: fixed giữ nút luôn xuất hiện kể cả khi cuộn trang.'],
      explanation: 'Nút hotline fixed là công cụ chuyển đổi khách hàng hàng đầu trên các website dịch vụ.',
      language: 'css'
    },
    intermediate: {
      id: 'ex-css-6-mid',
      lessonId: 'les-css-6',
      title: 'Tạo nút Đóng Modal ở góc trên phải (Relative - Absolute)',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO-CSS-6.2'],
      description: 'Thiết lập ".modal-box" có "position: relative; padding: 24px;". Bên trong có ".btn-close" có "position: absolute;", "top: 12px;", "right: 12px;".',
      starterCode: `.modal-box {
  position: relative;
  padding: 24px;
}
.btn-close {
  position: absolute;
  top: 12px;
  right: 12px;
}`,
      solutionCode: `.modal-box {\n  position: relative;\n  padding: 24px;\n}\n.btn-close {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n}`,
      testCases: [
        {
          id: 'tc-c6-2',
          description: 'Kiểm tra cặp đôi position relative trên cha và absolute trên con',
          expectedOutput: 'absolute'
        }
      ],
      hints: ['Cha phải là relative để làm mốc tọa độ cho con absolute.'],
      explanation: 'Đây là mô hình thiết kế hộp thoại Modal Dialog phổ biến nhất.',
      language: 'css'
    },
    challenge: {
      id: 'ex-css-6-adv',
      lessonId: 'les-css-6',
      title: 'Xây dựng Thanh Tiêu đề Cột Bảng dính (Sticky Table Header)',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO-CSS-6.2', 'LO-CSS-6.3'],
      description: 'Thiết lập cho thẻ "th" trong bảng có "position: sticky;", "top: 0;", "background-color: #f1f5f9;", "z-index: 10;" và viền dưới "border-bottom: 2px solid #cbd5e1;".',
      starterCode: `th {
  position: sticky;
  top: 0;
  background-color: #f1f5f9;
  z-index: 10;
  border-bottom: 2px solid #cbd5e1;
}`,
      solutionCode: `th {\n  position: sticky;\n  top: 0;\n  background-color: #f1f5f9;\n  z-index: 10;\n  border-bottom: 2px solid #cbd5e1;\n}`,
      testCases: [
        {
          id: 'tc-c6-3',
          description: 'Kiểm tra th có position sticky top 0',
          expectedOutput: 'sticky'
        }
      ],
      hints: ['Phải có background-color để khi dữ liệu trôi qua không bị nhìn xuyên thấu qua chữ tiêu đề.'],
      explanation: 'Sticky Table Header giúp người dùng luôn đối soát được tên cột trong các bảng dữ liệu hàng trăm dòng.',
      language: 'css'
    }
  },
  quiz: {
    id: 'quiz-css-6',
    lessonId: 'les-css-6',
    title: 'Kiểm tra hiểu biết: Display & Position',
    passingScore: 70,
    questions: [
      {
        id: 'q-c6-1',
        lessonId: 'les-css-6',
        learningObjectiveId: 'LO-CSS-6.2',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'Để một phần tử con có `position: absolute` định vị chính xác theo góc của phần tử cha trực tiếp, phần tử cha BẮT BUỘC phải có thuộc tính gì?',
        options: [
          { id: 'a', text: 'display: flex;' },
          { id: 'b', text: 'position với giá trị khác "static" (thường đặt là relative)' },
          { id: 'c', text: 'overflow: hidden;' },
          { id: 'd', text: 'float: left;' }
        ],
        correctAnswer: 'b',
        explanation: 'Phần tử absolute luôn tìm kiếm tổ tiên gần nhất có giá trị `position` khác static để làm mốc tọa độ tham chiếu. Giá trị phổ biến và tiện lợi nhất là `position: relative`.',
        relatedLessonId: 'les-css-6'
      }
    ]
  },
  summary: [
    'Phân biệt display: none (xóa khỏi dòng chảy), visibility: hidden (giữ chỗ), opacity: 0 (trong suốt nhưng vẫn bấm được).',
    'Chế độ position: static (mặc định), relative (làm gốc tọa độ), absolute (bay theo gốc), fixed (ghim màn hình), sticky (dính khi chạm ngưỡng).',
    'Thuộc tính z-index chỉ có tác dụng trên các phần tử có position khác static.',
    'position: sticky bắt buộc phải có ít nhất một giá trị định vị (như top: 0).'
  ],
  suggestedBookmarks: [
    'Quy tắc tạo Stacking Context và cách debug lỗi z-index',
    'Kỹ thuật xây dựng Sticky Header + Sticky Sidebar đa tầng'
  ]
};

// ============================================================================
// CSS 7: FLEXBOX — BỐ CỤC LINH HOẠT 1 CHIỀU
// ============================================================================
export const LESSON_CSS_7: Lesson = {
  id: 'les-css-7',
  moduleId: 'mod-css-7',
  track: 'css',
  language: 'css',
  title: 'CSS 7. Flexbox — Bố cục linh hoạt 1 chiều (Main Axis & Cross Axis)',
  order: 7,
  durationMinutes: 55,
  difficulty: 'Trung bình',
  prerequisites: [
    'Nắm vững Box Model và Display từ các bài trước'
  ],
  learningObjectives: [
    {
      id: 'LO-CSS-7.1',
      code: 'LO-CSS-7.1',
      title: 'Hiểu sâu 2 Trục tọa độ: Main Axis & Cross Axis',
      description: 'Phân tích chiều của trục chính khi flex-direction là row (ngang) vs column (dọc), và sự đổi vai của justify-content và align-items.',
      bloomLevel: 'Understand',
      masteryPercentage: 94
    },
    {
      id: 'LO-CSS-7.2',
      code: 'LO-CSS-7.2',
      title: 'Làm chủ các thuộc tính căn chỉnh của Flex Container',
      description: 'justify-content (flex-start, center, space-between, space-around), align-items (center, stretch), flex-wrap và thuộc tính khoảng cách gap hiện đại.',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    },
    {
      id: 'LO-CSS-7.3',
      code: 'LO-CSS-7.3',
      title: 'Kiểm soát tỷ lệ co giãn của Flex Items (flex: 1)',
      description: 'Hiểu bản chất viết tắt flex: 1 1 0% (flex-grow, flex-shrink, flex-basis) để phân chia độ rộng cột tự động thích ứng.',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    }
  ],
  sections: [
    {
      id: 'sec-css-7-1',
      lessonId: 'les-css-7',
      order: 1,
      conceptName: 'Mô hình 2 Trục Tọa độ trong Flexbox',
      title: '1. Bản chất Trục chính (Main Axis) và Trục phụ (Cross Axis)',
      explanation: 'Flexbox (Flexible Box Layout) là mô hình bố cục 1 chiều (One-dimensional layout) mạnh mẽ nhất trong CSS. Khi bạn khai báo `display: flex` lên phần tử cha (Flex Container), mọi phần tử con trực tiếp biến thành Flex Items và lập tức xếp thành hàng ngang!\nCốt lõi để làm chủ Flexbox là hiểu rõ 2 trục:\n1. Main Axis (Trục chính): Chiều dòng chảy được quyết định bởi `flex-direction`:\n   - `row` (mặc định): Trục chính nằm ngang từ trái sang phải.\n   - `column`: Trục chính đổi thành dọc từ trên xuống dưới!\n2. Cross Axis (Trục phụ): Luôn vuông góc 90 độ với trục chính.\n\nNguyên tắc vàng không bao giờ quên:\n- `justify-content`: LUÔN CĂN CHỈNH DỌC THEO TRỤC CHÍNH (Main Axis).\n- `align-items`: LUÔN CĂN CHỈNH DỌC THEO TRỤC PHỤ (Cross Axis).\n- `gap`: Tạo khoảng cách đều nhau giữa các phần tử mà không cần dùng margin hack!',
      syntax: '.container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n}',
      codeExample: `/* Căn giữa tuyệt đối cả ngang lẫn dọc chỉ bằng 3 dòng */
.perfect-center {
  display: flex;
  justify-content: center; /* Trục chính ngang */
  align-items: center;     /* Trục phụ dọc */
  min-height: 200px;
}

/* Thanh điều hướng Navbar kinh điển */
.navbar {
  display: flex;
  justify-content: space-between; /* Đẩy Logo sang trái, Menu sang phải */
  align-items: center;           /* Căn giữa theo chiều cao */
  padding: 12px 24px;
  gap: 20px;
}`,
      lineByLineExplanation: [
        { line: 2, text: 'display: flex kích hoạt chế độ linh hoạt cho container.' },
        { line: 3, text: 'justify-content: center đưa nội dung vào giữa bề ngang.' },
        { line: 4, text: 'align-items: center đưa nội dung vào giữa chiều cao.' },
        { line: 11, text: 'space-between dồn khoảng trống thừa vào giữa, đẩy 2 phần tử về 2 đầu mép.' }
      ],
      commonMistakes: [
        'Nhầm lẫn justify-content căn theo chiều dọc khi đang ở chế độ flex-direction: row.',
        'Dùng margin-right cho từng item thay vì dùng thuộc tính `gap` hiện đại trong flex container.'
      ],
      whenToUse: 'Dùng cho Navbar, danh sách thẻ tag, nhóm nút bấm, căn giữa nội dung, bố cục chia 2 cột nội dung và sidebar.',
      whenNotToUse: 'Không dùng Flexbox cho lưới 2 chiều phức tạp có cả hàng và cột đồng thời (hãy dùng CSS Grid).',
      realWorldUseCase: 'Thanh điều hướng Header của mọi trang web, thẻ bài viết Card có avatar bên trái và thông tin bên phải.'
    },
    {
      id: 'sec-css-7-2',
      lessonId: 'les-css-7',
      order: 2,
      conceptName: 'Các thuộc tính của Flex Items: flex-grow, flex-shrink & flex: 1',
      title: '2. Tỷ lệ phân chia không gian với flex: 1',
      explanation: 'Khi các phần tử con nằm trong Flex Container, chúng có thể tự động co giãn để chia sẻ không gian thừa:\n- `flex-grow: N`: Tỷ lệ hút phần không gian còn thừa để phình to ra.\n- `flex-shrink: M`: Tỷ lệ chịu nén nhỏ lại khi không gian màn hình bị thu hẹp.\n- `flex-basis: K`: Kích thước cơ sở ban đầu trước khi tính toán co giãn.\n\nCú pháp viết tắt thần thánh:\n`flex: 1;` tương đương với `flex: 1 1 0%;` -> Khiến phần tử tự động chiếm trọn mọi khoảng trống còn lại!\nVí dụ: Cột chính có `flex: 1;` và thanh Sidebar có độ rộng cố định `width: 280px;`, khi màn hình to hay nhỏ thì cột chính sẽ tự động co giãn co dãn mượt mà!',
      syntax: '/* Phân chia bố cục 2 cột linh hoạt */\n.main-content { flex: 1; }\n.sidebar { width: 300px; flex-shrink: 0; }',
      codeExample: `/* Thanh tìm kiếm có ô input giãn tối đa và nút bấm cố định */
.search-bar {
  display: flex;
  gap: 8px;
}
.search-input {
  flex: 1; /* Tự động nở to chiếm hết phần khoảng trống thừa */
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
}
.search-button {
  flex-shrink: 0; /* Không bao giờ bị co rúm méo mó */
  padding: 10px 20px;
  background: #2563eb;
  color: white;
  border-radius: 8px;
}`,
      lineByLineExplanation: [
        { line: 6, text: 'flex: 1 biến ô input thành thành phần đàn hồi tự động vừa khít mọi bề ngang.' },
        { line: 12, text: 'flex-shrink: 0 bảo vệ nút bấm giữ nguyên kích thước nội dung không bị teo nhỏ.' }
      ],
      commonMistakes: [
        'Quên flex-shrink: 0 trên avatar tròn hoặc icon, khiến khi tiêu đề quá dài avatar bị ép méo thành hình bầu dục!',
        'Đặt flex-wrap: nowrap (mặc định) khiến các item bị tràn ra ngoài màn hình trên di động (Hãy đặt flex-wrap: wrap khi cần xuống dòng).'
      ],
      whenToUse: 'Dùng flex: 1 cho nội dung chính giữa, ô search input, hoặc chia 3 cột có độ rộng bằng nhau.',
      whenNotToUse: 'Không đặt flex: 1 cho các icon hoặc nút bấm cần giữ kích thước cố định.',
      realWorldUseCase: 'Khung tìm kiếm của Google, thanh địa chỉ trình duyệt Chrome, hệ thống bình luận (Avatar cố định + Nội dung flex: 1).'
    }
  ],
  predictOutputs: [
    {
      id: 'po-css-7-1',
      question: 'Khi đặt `flex-direction: column` cho một container có `display: flex`, thuộc tính nào sẽ chịu trách nhiệm căn chỉnh nội dung theo chiều DỌC?',
      code: `.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}`,
      options: [
        'A. align-items (vì trước nay align-items luôn căn dọc)',
        'B. justify-content (vì khi flex-direction: column, trục chính Main Axis đã chuyển thành trục dọc)',
        'C. Thuộc tính gap',
        'D. Cả hai thuộc tính đều không hoạt động'
      ],
      correctAnswer: 'B. justify-content (vì khi flex-direction: column, trục chính Main Axis đã chuyển thành trục dọc)',
      explanation: 'Đây là quy tắc then chốt của Flexbox: `justify-content` LUÔN LUÔN điều khiển trục chính (Main Axis). Khi `flex-direction: column`, trục chính quay dọc 90 độ, do đó `justify-content` trở thành bộ điều khiển căn chỉnh theo chiều dọc.',
      hint: 'Hãy nhớ: justify-content luôn đi theo Main Axis, bất kể trục đó đang nằm ngang hay dọc.'
    }
  ],
  interactivePractice: {
    id: 'ip-css-7',
    title: 'Thực hành tạo Thanh điều hướng Navbar với Flexbox',
    description: 'Tạo class ".nav-bar" có display: flex, justify-content: space-between, align-items: center và khoảng cách gap: 16px.',
    starterCode: `.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}`,
    expectedConsoleOutput: 'space-between',
    hint: 'Sử dụng display: flex, justify-content: space-between và align-items: center.',
    language: 'css'
  },
  exercises: {
    basic: {
      id: 'ex-css-7-basic',
      lessonId: 'les-css-7',
      title: 'Căn giữa tuyệt đối với 3 dòng Flexbox',
      difficulty: 'basic',
      learningObjectiveIds: ['LO-CSS-7.2'],
      description: 'Thiết lập class ".center-box" có "display: flex;", căn giữa trục chính "justify-content: center;" và căn giữa trục phụ "align-items: center;".',
      starterCode: `.center-box {
  display: flex;
  justify-content: center;
  align-items: center;
}`,
      solutionCode: `.center-box {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}`,
      testCases: [
        {
          id: 'tc-c7-1',
          description: 'Kiểm tra căn giữa hoàn hảo với flex justify-content và align-items center',
          expectedOutput: 'center'
        }
      ],
      hints: ['Cặp đôi justify-content: center và align-items: center là giải pháp căn giữa kinh điển nhất trong CSS.'],
      explanation: 'Flexbox giúp căn giữa trở nên dễ dàng chỉ trong vài giây.',
      language: 'css'
    },
    intermediate: {
      id: 'ex-css-7-mid',
      lessonId: 'les-css-7',
      title: 'Tự động xuống dòng danh sách Tags với flex-wrap',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO-CSS-7.2'],
      description: 'Thiết lập class ".tags-wrapper" có "display: flex;", cho phép xuống dòng "flex-wrap: wrap;" và khoảng cách đều giữa các thẻ "gap: 8px;".',
      starterCode: `.tags-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}`,
      solutionCode: `.tags-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}`,
      testCases: [
        {
          id: 'tc-c7-2',
          description: 'Kiểm tra flex-wrap wrap và gap 8px',
          expectedOutput: 'wrap'
        }
      ],
      hints: ['flex-wrap: wrap cho phép các phần tử tự động rớt xuống dòng khi hết chỗ.'],
      explanation: 'flex-wrap kết hợp gap là cách tốt nhất để hiển thị danh sách từ khóa tags trên di động.',
      language: 'css'
    },
    challenge: {
      id: 'ex-css-7-adv',
      lessonId: 'les-css-7',
      title: 'Bố cục Card truyền thông Media Object (Avatar cố định + Text co giãn)',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO-CSS-7.3'],
      description: 'Thiết lập class ".media-object" có "display: flex; gap: 16px;". Thẻ con ".media-avatar" có "flex-shrink: 0; width: 48px;". Thẻ con ".media-body" có "flex: 1;".',
      starterCode: `.media-object {
  display: flex;
  gap: 16px;
}
.media-avatar {
  flex-shrink: 0;
  width: 48px;
}
.media-body {
  flex: 1;
}`,
      solutionCode: `.media-object {\n  display: flex;\n  gap: 16px;\n}\n.media-avatar {\n  flex-shrink: 0;\n  width: 48px;\n}\n.media-body {\n  flex: 1;\n}`,
      testCases: [
        {
          id: 'tc-c7-3',
          description: 'Kiểm tra media object với flex-shrink 0 và flex 1',
          expectedOutput: 'flex: 1'
        }
      ],
      hints: ['flex-shrink: 0 ngăn chặn avatar bị bóp méo.'],
      explanation: 'Pattern Media Object là một trong những mẫu thiết kế giao diện được sử dụng nhiều nhất trên mạng xã hội.',
      language: 'css'
    }
  },
  quiz: {
    id: 'quiz-css-7',
    lessonId: 'les-css-7',
    title: 'Kiểm tra hiểu biết: Bố cục Flexbox',
    passingScore: 70,
    questions: [
      {
        id: 'q-c7-1',
        lessonId: 'les-css-7',
        learningObjectiveId: 'LO-CSS-7.2',
        type: 'multiple_choice',
        difficulty: 'easy',
        prompt: 'Thuộc tính nào của Flex Container được thiết kế để tạo khoảng cách đều nhau giữa các phần tử con mà không cần tính toán margin thủ công?',
        options: [
          { id: 'a', text: 'spacing' },
          { id: 'b', text: 'gap' },
          { id: 'c', text: 'distance' },
          { id: 'd', text: 'interval' }
        ],
        correctAnswer: 'b',
        explanation: 'Thuộc tính `gap` (hoặc `row-gap`, `column-gap`) thiết lập rãnh khoảng cách giữa các phần tử con bên trong Flexbox và CSS Grid một cách chuẩn xác.',
        relatedLessonId: 'les-css-7'
      }
    ]
  },
  summary: [
    'Flexbox là bố cục 1 chiều xoay quanh 2 trục: Trục chính (Main Axis) và Trục phụ (Cross Axis).',
    'justify-content căn chỉnh theo trục chính; align-items căn chỉnh theo trục phụ.',
    'Dùng thuộc tính gap để tạo khoảng cách giữa các flex items.',
    'Dùng flex: 1 để phần tử con tự động nở to lấp đầy khoảng trống thừa; dùng flex-shrink: 0 để bảo vệ kích thước icon/avatar.'
  ],
  suggestedBookmarks: [
    'Flexbox Cheat Sheet trực quan sinh động CSS-Tricks',
    'Phân biệt align-items (1 dòng) và align-content (nhiều dòng khi wrap)'
  ]
};

// ============================================================================
// CSS 8: CSS GRID — BỐ CỤC LƯỚI 2 CHIỀU
// ============================================================================
export const LESSON_CSS_8: Lesson = {
  id: 'les-css-8',
  moduleId: 'mod-css-8',
  track: 'css',
  language: 'css',
  title: 'CSS 8. CSS Grid — Bố cục lưới 2 chiều (Fr unit, repeat, minmax & auto-fit)',
  order: 8,
  durationMinutes: 55,
  difficulty: 'Nâng cao',
  prerequisites: [
    'Hiểu mô hình Flexbox 1 chiều từ Bài CSS 7'
  ],
  learningObjectives: [
    {
      id: 'LO-CSS-8.1',
      code: 'LO-CSS-8.1',
      title: 'Khái niệm Lưới 2 chiều và Đơn vị phân số (fr unit)',
      description: 'Phân tích hàng (Rows) và cột (Columns) đồng thời, làm chủ đơn vị phân số tỷ lệ linh hoạt 1fr, 2fr thay thế cho % cứng nhắc.',
      bloomLevel: 'Understand',
      masteryPercentage: 92
    },
    {
      id: 'LO-CSS-8.2',
      code: 'LO-CSS-8.2',
      title: 'Hàm thông minh repeat(), minmax() và Phép màu auto-fit',
      description: 'Xây dựng lưới sản phẩm Responsive tự động co giãn số cột theo màn hình mà KHÔNG CẦN VIẾT BẤT KỲ DÒNG MEDIA QUERY NÀO.',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    },
    {
      id: 'LO-CSS-8.3',
      code: 'LO-CSS-8.3',
      title: 'Định danh vùng hiển thị với grid-template-areas',
      description: 'Trực quan hóa cấu trúc bố cục toàn bộ trang web (Header, Sidebar, Main, Footer) như vẽ một bức tranh sơ đồ bằng chữ.',
      bloomLevel: 'Create',
      masteryPercentage: 88
    }
  ],
  sections: [
    {
      id: 'sec-css-8-1',
      lessonId: 'les-css-8',
      order: 1,
      conceptName: 'Đơn vị phân số 1fr và Lưới 2 chiều Grid',
      title: '1. Khởi tạo CSS Grid và Đơn vị linh hoạt fr (Fraction)',
      explanation: 'Trong khi Flexbox tối ưu cho bố cục 1 chiều (theo dòng hoặc theo cột), CSS Grid được thiết kế chuyên biệt để kiểm soát ĐỒNG THỜI CẢ HÀNG LẪN CỘT (2 chiều 2D).\nKhai báo cơ bản:\n`display: grid;`\n`grid-template-columns: 200px 1fr 2fr;`\n\nĐơn vị `fr` (Fractional Unit) đại diện cho một phần phân số của không gian còn lại:\n- `1fr 1fr 1fr`: Chia 3 cột đều nhau chằn chặn 33.33% mà không bao giờ bị lẻ số.\n- `200px 1fr`: Cột trái cố định 200px, cột phải co giãn lấy toàn bộ khoảng trống còn lại!\n- Hàm `repeat(3, 1fr)`: Phím tắt viết gọn cho `1fr 1fr 1fr`.',
      syntax: '.grid-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}',
      codeExample: `/* Lưới 3 cột đều nhau có rãnh ngăn cách 16px */
.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

/* Bố cục trang gồm Sidebar 260px và Nội dung chính 1fr */
.dashboard-layout {
  display: grid;
  grid-template-columns: 260px 1fr;
  min-height: 100dvh;
  gap: 24px;
}`,
      lineByLineExplanation: [
        { line: 2, text: 'display: grid biến phần tử cha thành khung lưới.' },
        { line: 3, text: 'repeat(3, 1fr) chia làm 3 cột bằng nhau tự động tính toán không gian.' },
        { line: 4, text: 'gap: 16px tạo khoảng đệm rãnh giữa các cột và hàng.' }
      ],
      commonMistakes: [
        'Dùng dấu phẩy bên trong grid-template-columns (ví dụ viết repeat(3, 1fr, 2fr) sai cú pháp).'
      ],
      whenToUse: 'Dùng cho Lưới sản phẩm e-commerce, Dashboard quản trị, Thư viện ảnh Gallery và bộ khung trang chính.',
      whenNotToUse: 'Không dùng Grid khi chỉ cần xếp một hàng ngang các nút bấm đơn giản (hãy dùng Flexbox).',
      realWorldUseCase: 'Lưới hiển thị hàng hóa trên Shopee, lưới video trên trang chủ YouTube.'
    },
    {
      id: 'sec-css-8-2',
      lessonId: 'les-css-8',
      order: 2,
      conceptName: 'Công thức thần thánh: auto-fit + minmax() và grid-template-areas',
      title: '2. Responsive không cần Media Query & Vẽ Layout bằng chữ với Grid Areas',
      explanation: 'Một trong những tính năng vĩ đại nhất của CSS Grid là khả năng tự động thích ứng với mọi kích cỡ màn hình mà không cần viết media query:\n`grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));`\nÝ nghĩa: Mỗi thẻ có kích thước tối thiểu là 250px. Khi màn hình to ra, các thẻ tự dàn thành 4, 3, 2 cột. Khi màn hình điện thoại nhỏ lại dưới 250px, chúng tự động rơi xuống thành 1 cột duy nhất!\n\nNgoài ra, thuộc tính `grid-template-areas` cho phép bạn phác thảo cấu trúc trang web trực quan bằng các chuỗi ký tự:',
      syntax: '/* Phép màu responsive tự động */\ngrid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n\n/* Vẽ layout bằng tên vùng */\ngrid-template-areas:\n  "header header"\n  "sidebar main"\n  "footer footer";',
      codeExample: `/* Bố cục Web Master hoàn chỉnh với Grid Areas */
.app-shell {
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: 64px 1fr 60px;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  min-height: 100dvh;
}

header { grid-area: header; background: #1e293b; color: white; }
aside  { grid-area: sidebar; background: #f8fafc; }
main   { grid-area: main; padding: 24px; }
footer { grid-area: footer; background: #0f172a; color: white; }`,
      lineByLineExplanation: [
        { line: 5, text: 'grid-template-areas mô tả vị trí các vùng một cách trực quan như bản đồ kiến trúc.' },
        { line: 12, text: 'grid-area: header ánh xạ thẻ header vào khu vực "header" được định nghĩa ở trên.' }
      ],
      commonMistakes: [
        'Khai báo số lượng cột trong chuỗi grid-template-areas không đồng đều giữa các hàng, dẫn đến lỗi cú pháp không render được.',
        'Nhầm lẫn giữa auto-fit (kéo dãn các cột hiện có để lấp đầy) và auto-fill (chừa các cột rỗng ảo).'
      ],
      whenToUse: 'Dùng auto-fit + minmax() cho mọi danh sách thẻ card sản phẩm; dùng grid-template-areas cho Admin Dashboard Shell.',
      whenNotToUse: 'Không dùng grid-template-areas khi số lượng cột thay đổi ngẫu nhiên theo dữ liệu động từ API.',
      realWorldUseCase: 'Khung lưới Dashboard của Vercel, Shopify Admin và các kho giao diện ứng dụng SaaS hiện đại.'
    }
  ],
  predictOutputs: [
    {
      id: 'po-css-8-1',
      question: 'Khi sử dụng `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));` trên màn hình có chiều rộng khung chứa là 700px (gap: 0), màn hình sẽ hiển thị mấy cột?',
      code: `.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}`,
      options: [
        'A. 2 cột',
        'B. 3 cột (mỗi cột rộng xấp xỉ 233.33px)',
        'C. 4 cột',
        'D. 1 cột duy nhất'
      ],
      correctAnswer: 'B. 3 cột (mỗi cột rộng xấp xỉ 233.33px)',
      explanation: 'Chiều rộng 700px chứa được tối đa 3 cột có kích thước tối thiểu 200px (3 * 200 = 600px < 700px, còn 4 cột cần ít nhất 800px). Không gian thừa 100px được chia đều nhờ đơn vị 1fr nên mỗi cột rộng 700 / 3 = 233.33px.',
      hint: 'Hãy lấy 700 chia cho 200 lấy phần nguyên.'
    }
  ],
  interactivePractice: {
    id: 'ip-css-8',
    title: 'Thực hành tạo Lưới Responsive không cần Media Query',
    description: 'Tạo class ".responsive-cards" với display: grid, khoảng cách gap: 20px, và grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)).',
    starterCode: `.responsive-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}`,
    expectedConsoleOutput: 'minmax',
    hint: 'Sử dụng repeat(auto-fit, minmax(250px, 1fr)).',
    language: 'css'
  },
  exercises: {
    basic: {
      id: 'ex-css-8-basic',
      lessonId: 'les-css-8',
      title: 'Tạo lưới 3 cột cố định tỷ lệ phân số',
      difficulty: 'basic',
      learningObjectiveIds: ['LO-CSS-8.1'],
      description: 'Thiết lập class ".grid-3-col" có "display: grid;", chia 3 cột đều nhau với "grid-template-columns: repeat(3, 1fr);" và khoảng cách rãnh "gap: 16px;".',
      starterCode: `.grid-3-col {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}`,
      solutionCode: `.grid-3-col {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}`,
      testCases: [
        {
          id: 'tc-c8-1',
          description: 'Kiểm tra display grid và repeat 3 cột 1fr',
          expectedOutput: 'repeat(3, 1fr)'
        }
      ],
      hints: ['repeat(3, 1fr) tương đương 1fr 1fr 1fr.'],
      explanation: 'Đơn vị phân số fr đảm bảo các cột luôn chia đều không gian mà không sinh ra thanh cuộn ngang.',
      language: 'css'
    },
    intermediate: {
      id: 'ex-css-8-mid',
      lessonId: 'les-css-8',
      title: 'Bố cục 2 cột Sidebar cố định và Main co giãn',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO-CSS-8.1'],
      description: 'Thiết lập class ".app-layout" có "display: grid;", cột 1 cố định "280px", cột 2 co giãn "1fr" và khoảng cách "gap: 24px;".',
      starterCode: `.app-layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 24px;
}`,
      solutionCode: `.app-layout {\n  display: grid;\n  grid-template-columns: 280px 1fr;\n  gap: 24px;\n}`,
      testCases: [
        {
          id: 'tc-c8-2',
          description: 'Kiểm tra grid-template-columns 280px 1fr',
          expectedOutput: '280px 1fr'
        }
      ],
      hints: ['Kết hợp pixel cố định cho sidebar và 1fr cho nội dung chính.'],
      explanation: 'Đây là bố cục 2 cột tiêu chuẩn của trang web hiện đại.',
      language: 'css'
    },
    challenge: {
      id: 'ex-css-8-adv',
      lessonId: 'les-css-8',
      title: 'Lưới Thẻ Tự Thích Ứng Auto-fit và Minmax',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO-CSS-8.2'],
      description: 'Tạo class ".auto-grid" có "display: grid;", "gap: 1.5rem;" và "grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));".',
      starterCode: `.auto-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}`,
      solutionCode: `.auto-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 1.5rem;\n}`,
      testCases: [
        {
          id: 'tc-c8-3',
          description: 'Kiểm tra auto-fit kết hợp minmax 280px',
          expectedOutput: 'auto-fit'
        }
      ],
      hints: ['Cú pháp: repeat(auto-fit, minmax(280px, 1fr)).'],
      explanation: 'Công thức này loại bỏ hoàn toàn nhu cầu viết hàng chục dòng @media query cho các trang danh mục sản phẩm.',
      language: 'css'
    }
  },
  quiz: {
    id: 'quiz-css-8',
    lessonId: 'les-css-8',
    title: 'Kiểm tra hiểu biết: Bố cục CSS Grid',
    passingScore: 70,
    questions: [
      {
        id: 'q-c8-1',
        lessonId: 'les-css-8',
        learningObjectiveId: 'LO-CSS-8.1',
        type: 'multiple_choice',
        difficulty: 'easy',
        prompt: 'Đơn vị "fr" trong CSS Grid là viết tắt của từ gì và mang ý nghĩa gì?',
        options: [
          { id: 'a', text: 'Frame: Khung hình cố định' },
          { id: 'b', text: 'Fraction: Phần phân số tỷ lệ của không gian trống còn lại' },
          { id: 'c', text: 'Frequency: Tần số quét màn hình' },
          { id: 'd', text: 'Front: Vị trí phía trước' }
        ],
        correctAnswer: 'b',
        explanation: '`fr` là Fractional unit đại diện cho một phần phân số của khoảng không gian khả dụng còn lại trong grid container.',
        relatedLessonId: 'les-css-8'
      }
    ]
  },
  summary: [
    'CSS Grid điều khiển đồng thời 2 chiều (hàng và cột) trên cùng một mô hình.',
    'Đơn vị 1fr giúp phân chia tỷ lệ không gian linh hoạt và chính xác.',
    'Phép màu `repeat(auto-fit, minmax(250px, 1fr))` tạo lưới tự co giãn responsive không cần media query.',
    'Dùng `grid-template-areas` để định vị bố cục toàn trang bằng chuỗi ký tự trực quan.'
  ],
  suggestedBookmarks: [
    'Phân biệt chi tiết auto-fit vs auto-fill trong CSS Grid',
    'Tìm hiểu tính năng mới CSS Subgrid (Level 2)'
  ]
};
