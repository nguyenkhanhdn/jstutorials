import { Lesson } from '../../types';

// ============================================================================
// CSS 9: TRANSITIONS, TRANSFORMS & ANIMATIONS
// ============================================================================
export const LESSON_CSS_9: Lesson = {
  id: 'les-css-9',
  moduleId: 'mod-css-9',
  track: 'css',
  language: 'css',
  title: 'CSS 9. Transform, Transition & Animation (Chuyển động & Biến hình mượt mà)',
  order: 9,
  durationMinutes: 55,
  difficulty: 'Nâng cao',
  prerequisites: [
    'Nắm vững Box Model, Position và Hover states từ các bài trước'
  ],
  learningObjectives: [
    {
      id: 'LO-CSS-9.1',
      code: 'LO-CSS-9.1',
      title: 'Biến đổi không gian với Transform 2D/3D',
      description: 'Làm chủ translate(), rotate(), scale(), skew() và tối ưu hóa hiệu năng render bằng GPU (Hardware Acceleration).',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    },
    {
      id: 'LO-CSS-9.2',
      code: 'LO-CSS-9.2',
      title: 'Tạo chuyển động mượt mà với Transition',
      description: 'Cấu hình transition-property, duration, timing-function (ease, cubic-bezier) và delay để phản hồi thao tác rê chuột hover.',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    },
    {
      id: 'LO-CSS-9.3',
      code: 'LO-CSS-9.3',
      title: 'Thiết kế chu kỳ hoạt ảnh phức tạp với @keyframes',
      description: 'Định nghĩa các mốc thời gian từ 0% đến 100%, animation-iteration-count: infinite, animation-fill-mode: forwards.',
      bloomLevel: 'Create',
      masteryPercentage: 86
    }
  ],
  sections: [
    {
      id: 'sec-css-9-1',
      lessonId: 'les-css-9',
      order: 1,
      conceptName: 'Biến hình Transform và Chuyển tiếp Transition',
      title: '1. Chuyển động siêu mượt với Transform & Transition',
      explanation: 'Khi làm chuyển động trên web, việc thay đổi trực tiếp top, left hay width/height sẽ kích hoạt quá trình tính toán lại layout đắt đỏ (Reflow/Repaint) làm giật lag giao diện (jank).\nQuy tắc bất thành văn của các kỹ sư Frontend hàng đầu: LUÔN DÙNG `transform` và `opacity` cho chuyển động vì chúng được xử lý trực tiếp bởi card đồ họa (GPU Composite) với tốc độ 60 FPS mượt mà!\n- `transform: translate(x, y)`: Dịch chuyển vị trí.\n- `transform: scale(1.05)`: Phóng to nhẹ khi hover.\n- `transform: rotate(45deg)`: Xoay góc.\n- `transition`: Quy định thời gian và gia tốc chuyển đổi giữa hai trạng thái.',
      syntax: '/* Chuyển tiếp mượt mà */\n.btn {\n  transition: transform 0.2s ease, background-color 0.2s;\n}\n.btn:hover {\n  transform: translateY(-2px);\n}',
      codeExample: `/* Hiệu ứng nổi Card khi người dùng hover */
.interactive-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s;
}

.interactive-card:hover {
  transform: translateY(-6px); /* Nâng thẻ lên cao 6px */
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}`,
      lineByLineExplanation: [
        { line: 7, text: 'cubic-bezier tạo gia tốc chuyển động tự nhiên như vật lý đời thực.' },
        { line: 11, text: 'translateY(-6px) nâng nhẹ chiếc card mà không làm xô lệch các phần tử xung quanh.' }
      ],
      commonMistakes: [
        'Dùng transition: all bừa bãi làm trình duyệt phải theo dõi thay đổi của hàng trăm thuộc tính không cần thiết, gây tốn pin thiết bị.',
        'Dùng top/left thay vì transform: translate để làm hiệu ứng hover.'
      ],
      whenToUse: 'Dùng transition cho các hiệu ứng nút bấm, hover card sản phẩm, mở đóng sidebar.',
      whenNotToUse: 'Không dùng transition cho các hoạt ảnh tự động chạy lặp đi lặp lại vô tận (hãy dùng @keyframes).',
      realWorldUseCase: 'Hiệu ứng nhấc bổng thẻ card sản phẩm trên Apple Store và Airbnb.'
    },
    {
      id: 'sec-css-9-2',
      lessonId: 'les-css-9',
      order: 2,
      conceptName: 'Hoạt ảnh vô tận với @keyframes & Animation Properties',
      title: '2. Hoạt cảnh chuyên nghiệp với @keyframes',
      explanation: 'Trong khi transition cần một sự kiện kích hoạt (như hover hoặc click), `animation` kết hợp với `@keyframes` có thể tự động chạy ngay khi tải trang và lặp lại không giới hạn:\n- `@keyframes tenHoatCanh`: Định nghĩa các mốc thời gian từ 0% (from) đến 100% (to).\n- `animation-duration`: Thời gian hoàn thành 1 chu kỳ.\n- `animation-iteration-count: infinite`: Chạy lặp lại vô tận (loading spinner, pulse effect).\n- `animation-fill-mode: forwards`: Giữ nguyên trạng thái ở mốc 100% khi hoạt ảnh kết thúc thay vì giật ngược về trạng thái ban đầu.',
      syntax: '@keyframes xoayTron {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}\n.spinner {\n  animation: xoayTron 1s linear infinite;\n}',
      codeExample: `/* Biểu tượng Loading quay vô tận */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.loading-spinner {
  width: 24px;
  height: 24px;
  border: 3px solid #e2e8f0;
  border-top-color: #3b82f6; /* Đỉnh viền màu xanh */
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

/* Hiệu ứng nhấp nháy phát sáng (Pulse) cho nút trực tiếp */
@keyframes pulseGlow {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.03); }
}
.badge-live {
  animation: pulseGlow 2s ease-in-out infinite;
}`,
      lineByLineExplanation: [
        { line: 2, text: '@keyframes spin định nghĩa chu trình quay tròn từ 0 đến 360 độ.' },
        { line: 11, text: 'linear infinite đảm bảo tốc độ quay đều đặn và không bao giờ dừng lại.' },
        { line: 15, text: 'pulseGlow tạo nhịp thở phập phồng thu hút sự chú ý.' }
      ],
      commonMistakes: [
        'Quên animation-fill-mode: forwards khi làm hoạt ảnh xuất hiện một lần (như modal fade-in), khiến modal bị biến mất đột ngột sau khi chạy xong.',
        'Lạm dụng quá nhiều hiệu ứng nhấp nháy liên tục gây ức chế cho người mắc chứng rối loạn tiền đình (chú ý chuẩn WCAG reduced-motion).'
      ],
      whenToUse: 'Dùng cho Loading Spinners, Skeleton Loading, Banner đập nhịp, Thanh tiến trình Download.',
      whenNotToUse: 'Không dùng animation cho các đoạn văn bản đọc nội dung dài.',
      realWorldUseCase: 'Vòng tròn loading khi gửi form, hiệu ứng Skeleton Shimmer tải bài viết của Facebook.'
    }
  ],
  predictOutputs: [
    {
      id: 'po-css-9-1',
      question: 'Thuộc tính `animation-fill-mode: forwards` có tác dụng quan trọng gì sau khi một hoạt cảnh chạy đến 100%?',
      code: `.box {
  animation: slideIn 1s ease forwards;
}`,
      options: [
        'A. Khiến hoạt cảnh tự động tua ngược lại từ đầu',
        'B. Giữ nguyên trạng thái kiểu dáng ở mốc cuối cùng (100%), không bị giật trở về kiểu dáng ban đầu',
        'C. Xóa bỏ hoàn toàn phần tử khỏi màn hình',
        'D. Khiến hoạt cảnh chạy nhanh hơn gấp 2 lần'
      ],
      correctAnswer: 'B. Giữ nguyên trạng thái kiểu dáng ở mốc cuối cùng (100%), không bị giật trở về kiểu dáng ban đầu',
      explanation: 'Theo mặc định khi kết thúc animation, phần tử sẽ tự động hoàn nguyên về CSS ban đầu. `forwards` chỉ thị cho trình duyệt duy trì nguyên vẹn các giá trị thuộc tính tại mốc keyframe cuối cùng.',
      hint: 'Chữ "forwards" có nghĩa là tiến về phía trước và giữ nguyên kết quả.'
    }
  ],
  interactivePractice: {
    id: 'ip-css-9',
    title: 'Thực hành tạo Vòng tròn Loading Spinner với @keyframes',
    description: 'Tạo class ".spinner" bo tròn 50%, có viền border-top-color: #2563eb và animation: spin 1s linear infinite.',
    starterCode: `@keyframes spin {
  to { transform: rotate(360deg); }
}

.spinner {
  width: 32px;
  height: 32px;
  border: 4px solid #e2e8f0;
  border-top-color: #2563eb;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}`,
    expectedConsoleOutput: 'rotate(360deg)',
    hint: 'Sử dụng @keyframes spin và animation: spin 1s linear infinite.',
    language: 'css'
  },
  exercises: {
    basic: {
      id: 'ex-css-9-basic',
      lessonId: 'les-css-9',
      title: 'Tạo hiệu ứng phóng to nhẹ khi Hover nút',
      difficulty: 'basic',
      learningObjectiveIds: ['LO-CSS-9.1', 'LO-CSS-9.2'],
      description: 'Thiết lập cho class ".btn-scale" có "transition: transform 0.2s ease;" và khi ".btn-scale:hover" có "transform: scale(1.05);".',
      starterCode: `.btn-scale {
  transition: transform 0.2s ease;
}
.btn-scale:hover {
  transform: scale(1.05);
}`,
      solutionCode: `.btn-scale {\n  transition: transform 0.2s ease;\n}\n.btn-scale:hover {\n  transform: scale(1.05);\n}`,
      testCases: [
        {
          id: 'tc-c9-1',
          description: 'Kiểm tra transition transform và scale 1.05',
          expectedOutput: 'scale(1.05)'
        }
      ],
      hints: ['transform: scale(1.05) phóng to 5% kích thước ban đầu.'],
      explanation: 'Hiệu ứng scale nhẹ mang lại phản hồi xúc giác thị giác mượt mà.',
      language: 'css'
    },
    intermediate: {
      id: 'ex-css-9-mid',
      lessonId: 'les-css-9',
      title: 'Hiệu ứng nhấc bổng thẻ Card (Elevate)',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO-CSS-9.1', 'LO-CSS-9.2'],
      description: 'Thiết lập class ".card-hover" có "transition: transform 0.25s, box-shadow 0.25s;" và khi hover có "transform: translateY(-4px);" kèm đổ bóng "box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);".',
      starterCode: `.card-hover {
  transition: transform 0.25s, box-shadow 0.25s;
}
.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}`,
      solutionCode: `.card-hover {\n  transition: transform 0.25s, box-shadow 0.25s;\n}\n.card-hover:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\n}`,
      testCases: [
        {
          id: 'tc-c9-2',
          description: 'Kiểm tra translateY -4px và box-shadow khi hover',
          expectedOutput: 'translateY(-4px)'
        }
      ],
      hints: ['translateY âm sẽ đẩy phần tử lên phía trên.'],
      explanation: 'Sự kết hợp giữa nâng tọa độ Y và đổ bóng lớn hơn mô phỏng chiếc card đang bay lên khỏi mặt phẳng.',
      language: 'css'
    },
    challenge: {
      id: 'ex-css-9-adv',
      lessonId: 'les-css-9',
      title: 'Hoạt cảnh Fade In trồi lên mượt mà với @keyframes',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO-CSS-9.3'],
      description: 'Tạo @keyframes "fadeInUp" từ 0% có "opacity: 0; transform: translateY(20px);" đến 100% có "opacity: 1; transform: translateY(0);". Áp dụng vào class ".modal" với "animation: fadeInUp 0.4s ease forwards;".',
      starterCode: `@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.modal {
  animation: fadeInUp 0.4s ease forwards;
}`,
      solutionCode: `@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.modal {\n  animation: fadeInUp 0.4s ease forwards;\n}`,
      testCases: [
        {
          id: 'tc-c9-3',
          description: 'Kiểm tra keyframes fadeInUp có forwards',
          expectedOutput: 'forwards'
        }
      ],
      hints: ['Thuộc tính forwards giữ cho modal luôn hiển thị sau khi trồi lên.'],
      explanation: 'Hoạt cảnh xuất hiện mượt mà là linh hồn của các thiết kế giao diện cao cấp.',
      language: 'css'
    }
  },
  quiz: {
    id: 'quiz-css-9',
    lessonId: 'les-css-9',
    title: 'Kiểm tra hiểu biết: Transform & Animation',
    passingScore: 70,
    questions: [
      {
        id: 'q-c9-1',
        lessonId: 'les-css-9',
        learningObjectiveId: 'LO-CSS-9.1',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'Tại sao các chuyên gia tối ưu hiệu năng web luôn khuyên dùng `transform: translate()` thay vì `top/left` để tạo hiệu ứng chuyển động?',
        options: [
          { id: 'a', text: 'Vì transform ngắn ký tự hơn' },
          { id: 'b', text: 'Vì transform được xử lý trực tiếp trên GPU Composite Layer, không gây tính toán lại Layout (Reflow), đạt tốc độ 60 FPS mượt mà' },
          { id: 'c', text: 'Vì top/left sắp bị W3C xóa bỏ' },
          { id: 'd', text: 'Vì transform chỉ chạy được trên điện thoại' }
        ],
        correctAnswer: 'b',
        explanation: 'Thay đổi `top/left` buộc trình duyệt phải tính toán lại hình học của toàn bộ các phần tử xung quanh (Layout Thrashing), trong khi `transform` chỉ thay đổi ma trận render trên card đồ họa.',
        relatedLessonId: 'les-css-9'
      }
    ]
  },
  summary: [
    'Luôn ưu tiên dùng transform và opacity cho hiệu ứng chuyển động để đạt 60 FPS.',
    'Dùng transition cho phản hồi tương tác hover/focus của người dùng.',
    'Dùng @keyframes cho hoạt ảnh tự động chạy và lặp vô tận (infinite).',
    'Nhớ sử dụng animation-fill-mode: forwards để duy trì trạng thái kết thúc.'
  ],
  suggestedBookmarks: [
    'Hướng dẫn tạo Cubic-Bezier Easing đường cong gia tốc tự nhiên',
    'Tối ưu hiệu năng Web Animations với thuộc tính will-change'
  ]
};

// ============================================================================
// CSS 10: RESPONSIVE DESIGN, MEDIA QUERIES & CSS VARIABLES
// ============================================================================
export const LESSON_CSS_10: Lesson = {
  id: 'les-css-10',
  moduleId: 'mod-css-10',
  track: 'css',
  language: 'css',
  title: 'CSS 10. Responsive Design, Media Queries & Biến CSS (Variables)',
  order: 10,
  durationMinutes: 55,
  difficulty: 'Nâng cao',
  prerequisites: [
    'Nắm vững Flexbox, Grid và đơn vị đo lường từ các bài trước'
  ],
  learningObjectives: [
    {
      id: 'LO-CSS-10.1',
      code: 'LO-CSS-10.1',
      title: 'Triết lý Mobile-First Design & Điểm ngắt Breakpoints',
      description: 'Hiểu tại sao viết CSS mặc định cho di động trước rồi mới mở rộng bằng @media (min-width: ...) giúp mã nguồn gọn nhẹ và tải nhanh hơn.',
      bloomLevel: 'Understand',
      masteryPercentage: 94
    },
    {
      id: 'LO-CSS-10.2',
      code: 'LO-CSS-10.2',
      title: 'Làm chủ Biến CSS (Custom Properties: --var & var())',
      description: 'Khai báo biến màu sắc, kích thước toàn cục trong :root, kế thừa theo tầng và chuyển đổi Dark Mode trong 1 dòng mã.',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    },
    {
      id: 'LO-CSS-10.3',
      code: 'LO-CSS-10.3',
      title: 'Các hàm tính toán hiện đại: calc(), clamp(), min(), max()',
      description: 'Tạo kích cỡ font chữ co giãn linh hoạt (Fluid Typography) mượt mà không cần viết nhiều điểm ngắt với clamp(min, preferred, max).',
      bloomLevel: 'Apply',
      masteryPercentage: 88
    }
  ],
  sections: [
    {
      id: 'sec-css-10-1',
      lessonId: 'les-css-10',
      order: 1,
      conceptName: 'Chiến lược Mobile-First & Cú pháp Media Queries',
      title: '1. Chiến lược Mobile-First và Quy chuẩn Điểm ngắt Breakpoints',
      explanation: 'Trong thiết kế web hiện đại, hơn 70% lưu lượng truy cập đến từ điện thoại. Chiến lược "Mobile-First" quy định:\n1. Viết toàn bộ CSS cơ sở mặc định phục vụ cho màn hình nhỏ di động (1 cột đơn giản).\n2. Dùng `@media (min-width: ...)` để bổ sung thêm tính năng cho màn hình lớn hơn (Tablet, Desktop).\n\nBộ điểm ngắt tiêu chuẩn công nghiệp:\n- Mặc định: Mobile (< 640px)\n- `min-width: 640px`: Small Tablet (sm)\n- `min-width: 768px`: Tablet dọc / iPad (md)\n- `min-width: 1024px`: Laptop / Desktop (lg)\n- `min-width: 1280px`: Desktop lớn (xl)',
      syntax: '/* Mặc định cho Mobile */\n.sidebar { display: none; }\n\n/* Khi màn hình từ 768px trở lên (Desktop) */\n@media (min-width: 768px) {\n  .sidebar { display: block; }\n}',
      codeExample: `/* Bố cục Mobile-First: Mặc định 1 cột trên điện thoại */
.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

/* Tablet (>= 640px): Mở rộng thành 2 cột */
@media (min-width: 640px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop (>= 1024px): Mở rộng thành 4 cột */
@media (min-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }
}`,
      lineByLineExplanation: [
        { line: 3, text: 'Mặc định 1 cột giúp điện thoại nạp ngay lập tức mà không phải chờ xử lý điều kiện.' },
        { line: 8, text: '@media (min-width: 640px) chỉ kích hoạt khi màn hình rộng từ 640px trở lên.' },
        { line: 15, text: '@media (min-width: 1024px) nâng cấp lên 4 cột trên máy tính bàn.' }
      ],
      commonMistakes: [
        'Dùng max-width (Desktop-first) khiến điện thoại phải tải toàn bộ CSS của máy tính rồi ghi đè ngược lại làm chậm trang.',
        'Tạo quá nhiều điểm ngắt vụn vặt (như 732px, 815px) thay vì dùng hệ thống breakpoint chuẩn mực.'
      ],
      whenToUse: 'Bắt buộc áp dụng Mobile-First cho mọi dự án website hiện đại.',
      whenNotToUse: 'Không dùng max-width cho layout mới trừ các trường hợp fix bug cục bộ trên trình duyệt cũ.',
      realWorldUseCase: 'Toàn bộ hệ thống Responsive của Bootstrap, Tailwind CSS, Google Material Design.'
    },
    {
      id: 'sec-css-10-2',
      lessonId: 'les-css-10',
      order: 2,
      conceptName: 'Biến CSS (Custom Properties) & Hàm tính toán clamp(), calc()',
      title: '2. Làm chủ Biến CSS, Dark Mode và Chữ co giãn linh hoạt (Fluid Text)',
      explanation: 'Biến CSS (CSS Custom Properties) bắt đầu bằng hai dấu gạch nối `--ten-bien`, được truy xuất bằng hàm `var(--ten-bien)`. Khác với biến trong SASS (chỉ tồn tại lúc compile), biến CSS tồn tại trực tiếp trong cây DOM và có thể thay đổi động trong thời gian thực bằng JavaScript hoặc Media Queries!\n\nNgoài ra, hàm `clamp(min, preferred, max)` là đỉnh cao của thiết kế Responsive:\n`font-size: clamp(1.5rem, 4vw, 3rem);`\nÝ nghĩa: Chữ sẽ tự động co giãn mượt mà theo 4vw, nhưng không bao giờ nhỏ hơn 1.5rem và không bao giờ vượt quá 3rem!',
      syntax: ':root {\n  --primary: #2563eb;\n  --bg-color: #ffffff;\n}\n[data-theme="dark"] {\n  --bg-color: #0f172a;\n}\nbody {\n  background-color: var(--bg-color);\n}',
      codeExample: `/* 1. Khai báo bảng màu toàn cục */
:root {
  --primary-color: #3b82f6;
  --surface-color: #ffffff;
  --text-color: #0f172a;
}

/* Đổi giao diện Dark Mode tự động theo hệ điều hành */
@media (prefers-color-scheme: dark) {
  :root {
    --surface-color: #0f172a;
    --text-color: #f8fafc;
  }
}

body {
  background-color: var(--surface-color);
  color: var(--text-color);
  transition: background-color 0.3s, color 0.3s;
}

/* 2. Tiêu đề co giãn linh hoạt không cần Media Query */
h1.fluid-title {
  font-size: clamp(2rem, 5vw + 1rem, 4rem);
}`,
      lineByLineExplanation: [
        { line: 2, text: ':root là phần tử cao nhất của tài liệu, nơi lưu trữ biến toàn cục.' },
        { line: 9, text: 'prefers-color-scheme lắng nghe chế độ Dark Mode của điện thoại hoặc Windows/macOS.' },
        { line: 23, text: 'clamp() tự động tính toán cỡ chữ theo kích thước cửa sổ mà không bị vỡ giới hạn min/max.' }
      ],
      commonMistakes: [
        'Đặt tên biến CSS không có hai dấu gạch nối -- ở đầu.',
        'Quên cung cấp giá trị dự phòng trong hàm var: var(--primary, #000) đề phòng biến chưa được định nghĩa.'
      ],
      whenToUse: 'Dùng biến CSS cho Theme màu sắc, Spacing, Border Radius; dùng clamp() cho tiêu đề và padding co giãn.',
      whenNotToUse: 'Không gán biến cho các giá trị chỉ xuất hiện 1 lần duy nhất trong toàn bộ mã nguồn.',
      realWorldUseCase: 'Hệ thống chuyển đổi Dark/Light mode trên GitHub, YouTube và Notion.'
    }
  ],
  predictOutputs: [
    {
      id: 'po-css-10-1',
      question: 'Khi người dùng xem trang web trên điện thoại có màn hình rộng 400px (4vw = 16px), biểu thức `font-size: clamp(20px, 4vw, 36px);` sẽ trả về cỡ chữ bao nhiêu?',
      code: `.title {
  font-size: clamp(20px, 4vw, 36px);
}`,
      options: [
        'A. 16px',
        'B. 20px (vì 16px nhỏ hơn ngưỡng tối thiểu min là 20px)',
        'C. 36px',
        'D. 28px'
      ],
      correctAnswer: 'B. 20px (vì 16px nhỏ hơn ngưỡng tối thiểu min là 20px)',
      explanation: 'Hàm `clamp(MIN, PREFERRED, MAX)` hoạt động như một chiếc kẹp: nếu giá trị ưu tiên (4vw = 16px) nhỏ hơn MIN (20px), kết quả sẽ bị chặn lại ở giá trị tối thiểu là 20px.',
      hint: 'Hãy nhớ lại ý nghĩa của clamp: kẹp giữa Min và Max.'
    }
  ],
  interactivePractice: {
    id: 'ip-css-10',
    title: 'Thực hành khai báo Biến CSS và Media Query Mobile-First',
    description: 'Khai báo biến --brand-color: #6366f1 trong :root, và viết @media (min-width: 768px) đổi nền thành var(--brand-color).',
    starterCode: `:root {
  --brand-color: #6366f1;
}

body {
  background-color: #ffffff;
}

@media (min-width: 768px) {
  body {
    background-color: var(--brand-color);
  }
}`,
    expectedConsoleOutput: 'var(--brand-color)',
    hint: 'Sử dụng :root { --brand-color: #6366f1; } và var(--brand-color).',
    language: 'css'
  },
  exercises: {
    basic: {
      id: 'ex-css-10-basic',
      lessonId: 'les-css-10',
      title: 'Khai báo và sử dụng Biến CSS màu sắc',
      difficulty: 'basic',
      learningObjectiveIds: ['LO-CSS-10.2'],
      description: 'Thiết lập trong ":root" biến "--accent: #f59e0b;". Áp dụng vào class ".btn-accent" với "background-color: var(--accent); color: white;".',
      starterCode: `:root {
  --accent: #f59e0b;
}
.btn-accent {
  background-color: var(--accent);
  color: white;
}`,
      solutionCode: `:root {\n  --accent: #f59e0b;\n}\n.btn-accent {\n  background-color: var(--accent);\n  color: white;\n}`,
      testCases: [
        {
          id: 'tc-c10-1',
          description: 'Kiểm tra khai báo biến --accent và var(--accent)',
          expectedOutput: 'var(--accent)'
        }
      ],
      hints: ['Biến CSS luôn bắt đầu bằng hai dấu gạch nối: --accent.'],
      explanation: 'Biến CSS giúp tập trung quản lý màu sắc thương hiệu tại một điểm duy nhất.',
      language: 'css'
    },
    intermediate: {
      id: 'ex-css-10-mid',
      lessonId: 'les-css-10',
      title: 'Responsive Menu với Media Query Mobile-First',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO-CSS-10.1'],
      description: 'Viết ".nav-menu" mặc định "display: flex; flex-direction: column;". Khi ở "@media (min-width: 768px)" đổi sang "flex-direction: row;".',
      starterCode: `.nav-menu {
  display: flex;
  flex-direction: column;
}
@media (min-width: 768px) {
  .nav-menu {
    flex-direction: row;
  }
}`,
      solutionCode: `.nav-menu {\n  display: flex;\n  flex-direction: column;\n}\n@media (min-width: 768px) {\n  .nav-menu {\n    flex-direction: row;\n  }\n}`,
      testCases: [
        {
          id: 'tc-c10-2',
          description: 'Kiểm tra menu dọc trên mobile và chuyển sang ngang trên desktop',
          expectedOutput: 'min-width: 768px'
        }
      ],
      hints: ['Mobile-first: viết code mặc định cho mobile trước, sau đó dùng min-width cho desktop.'],
      explanation: 'Mô hình chuyển đổi cột sang hàng là nền tảng của responsive navigation.',
      language: 'css'
    },
    challenge: {
      id: 'ex-css-10-adv',
      lessonId: 'les-css-10',
      title: 'Thiết kế Tiêu đề co giãn chất lượng cao với hàm clamp()',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO-CSS-10.3'],
      description: 'Thiết lập cho class ".hero-title" kích cỡ font chữ co giãn linh hoạt: "font-size: clamp(1.75rem, 4vw + 1rem, 3.5rem);" và "line-height: 1.2;".',
      starterCode: `.hero-title {
  font-size: clamp(1.75rem, 4vw + 1rem, 3.5rem);
  line-height: 1.2;
}`,
      solutionCode: `.hero-title {\n  font-size: clamp(1.75rem, 4vw + 1rem, 3.5rem);\n  line-height: 1.2;\n}`,
      testCases: [
        {
          id: 'tc-c10-3',
          description: 'Kiểm tra fluid typography với clamp()',
          expectedOutput: 'clamp(1.75rem'
        }
      ],
      hints: ['Cú pháp: clamp(min, preferred, max).'],
      explanation: 'Fluid Typography với clamp() giúp chữ co giãn mượt mà ở mọi kích thước màn hình mà không bị nhảy bước giật cục.',
      language: 'css'
    }
  },
  quiz: {
    id: 'quiz-css-10',
    lessonId: 'les-css-10',
    title: 'Kiểm tra hiểu biết: Responsive & Biến CSS',
    passingScore: 70,
    questions: [
      {
        id: 'q-c10-1',
        lessonId: 'les-css-10',
        learningObjectiveId: 'LO-CSS-10.1',
        type: 'multiple_choice',
        difficulty: 'easy',
        prompt: 'Trong chiến lược Mobile-First, loại truy vấn @media nào sau đây được sử dụng để mở rộng kiểu dáng cho màn hình lớn hơn?',
        options: [
          { id: 'a', text: '@media (max-width: 768px)' },
          { id: 'b', text: '@media (min-width: 768px)' },
          { id: 'c', text: '@media (device: desktop)' },
          { id: 'd', text: '@media (only-screen)' }
        ],
        correctAnswer: 'b',
        explanation: 'Chiến lược Mobile-First viết CSS cơ sở cho màn hình nhỏ nhất, sau đó sử dụng `@media (min-width: ...)` để lũy tiến nâng cấp giao diện cho màn hình lớn hơn.',
        relatedLessonId: 'les-css-10'
      }
    ]
  },
  summary: [
    'Chiến lược Mobile-First sử dụng @media (min-width: ...) giúp tối ưu hiệu năng cho thiết bị di động.',
    'Biến CSS (--custom-property) cho phép tái sử dụng và thay đổi màu sắc Theme trong thời gian thực.',
    'Hàm clamp(min, preferred, max) tạo kiểu chữ co giãn linh hoạt (Fluid Typography) hoàn hảo.',
    'Sử dụng @media (prefers-color-scheme: dark) để tự động kích hoạt chế độ Dark Mode theo thiết bị.'
  ],
  suggestedBookmarks: [
    'Hướng dẫn xây dựng Hệ thống Design Tokens với CSS Variables',
    'Công thức tính toán Fluid Typography trực quan'
  ]
};
