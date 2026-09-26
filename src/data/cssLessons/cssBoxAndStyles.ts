import { Lesson } from '../../types';

// ============================================================================
// CSS 4: BOX MODEL — MÔ HÌNH HỘP
// ============================================================================
export const LESSON_CSS_4: Lesson = {
  id: 'les-css-4',
  moduleId: 'mod-css-4',
  track: 'css',
  language: 'css',
  title: 'CSS 4. Box Model — Mô hình hộp & box-sizing: border-box',
  order: 4,
  durationMinutes: 50,
  difficulty: 'Cơ bản',
  prerequisites: [
    'Hiểu phần tử khối (Block) và phần tử nội dòng (Inline) từ HTML',
    'Nắm vững đơn vị pixel (px) và rem'
  ],
  learningObjectives: [
    {
      id: 'LO-CSS-4.1',
      code: 'LO-CSS-4.1',
      title: 'Bản chất 4 lớp của Box Model',
      description: 'Phân tích thứ tự từ trong ra ngoài: Vùng nội dung (Content) -> Đệm trong (Padding) -> Đường viền (Border) -> Lề ngoài (Margin).',
      bloomLevel: 'Understand',
      masteryPercentage: 95
    },
    {
      id: 'LO-CSS-4.2',
      code: 'LO-CSS-4.2',
      title: 'Làm chủ thuộc tính box-sizing: border-box',
      description: 'Hiểu tại sao content-box mặc định cộng dồn padding/border làm vỡ layout, và cách border-box giữ cố định width/height.',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    },
    {
      id: 'LO-CSS-4.3',
      code: 'LO-CSS-4.3',
      title: 'Hiểu hiện tượng Nuốt lề (Margin Collapsing)',
      description: 'Nhận biết và khắc phục hiện tượng margin dọc của 2 phần tử liền kề gộp vào nhau thay vì cộng dồn.',
      bloomLevel: 'Analyze',
      masteryPercentage: 88
    }
  ],
  sections: [
    {
      id: 'sec-css-4-1',
      lessonId: 'les-css-4',
      order: 1,
      conceptName: '4 Tầng của Box Model & Cuộc cách mạng box-sizing: border-box',
      title: '1. Giải phẫu Box Model và bí quyết chống vỡ bố cục',
      explanation: 'Mọi phần tử trên trang web đều là một chiếc hộp chữ nhật gồm 4 lớp:\n1. Content: Nơi chứa chữ hoặc hình ảnh.\n2. Padding: Khoảng cách đệm giữa nội dung và đường viền (nằm bên trong hộp, ăn theo màu nền background).\n3. Border: Đường viền bao quanh hộp.\n4. Margin: Khoảng cách lề đẩy các phần tử khác ra xa (nằm ngoài hộp, hoàn toàn trong suốt).\n\nTheo chuẩn cũ content-box mặc định: Chiều rộng thực tế = width + padding trái/phải + border trái/phải. Ví dụ đặt width: 300px nhưng thêm padding: 20px thì hộp phình to thành 340px gây vỡ nát layout!\nGiải pháp cứu cánh: Luôn đặt `box-sizing: border-box`. Khi đó width bao trọn cả padding và border!',
      syntax: '/* Reset chuẩn quốc tế bắt buộc cho mọi website */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}',
      codeExample: `/* So sánh trực quan giữa 2 cơ chế tính toán */
.box-content {
  box-sizing: content-box;
  width: 200px;
  padding: 20px;
  border: 5px solid red;
  /* Kích thước thực trên màn hình: 200 + 40 + 10 = 250px! */
}

.box-border {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 5px solid green;
  /* Kích thước thực cố định chuẩn xác: 200px! */
}`,
      lineByLineExplanation: [
        { line: 2, text: 'content-box khiến padding làm phình to kích thước hộp.' },
        { line: 9, text: 'border-box tự động co vùng content lại để tổng chiều rộng đúng 200px.' }
      ],
      commonMistakes: [
        'Quên cấu hình box-sizing: border-box ở đầu file CSS khiến việc chia 2 cột width: 50% có padding bị rớt xuống dòng.',
        'Nhầm lẫn giữa padding (khoảng trống bên trong có màu nền) và margin (khoảng trống bên ngoài đẩy phần tử khác).'
      ],
      whenToUse: 'Bắt buộc áp dụng box-sizing: border-box cho 100% các phần tử trong mọi trang web.',
      whenNotToUse: 'Hầu như không bao giờ có lý do chính đáng để quay lại dùng content-box trong layout hiện đại.',
      realWorldUseCase: 'Bootstrap, Tailwind, Material UI đều khởi đầu bằng bộ quy tắc thiết lập `box-sizing: border-box` toàn cục.'
    },
    {
      id: 'sec-css-4-2',
      lessonId: 'les-css-4',
      order: 2,
      conceptName: 'Hiện tượng Nuốt lề Margin Collapsing & Căn giữa tự động',
      title: '2. Cơ chế Margin Collapsing và căn giữa với margin: auto',
      explanation: 'Trong dòng chảy thông thường (Normal Flow), khi hai lề dọc (top/bottom) của hai khối phần tử nằm sát nhau, chúng KHÔNG cộng dồn mà "nuốt" vào nhau: Lề thực tế bằng giá trị LỚN NHẤT trong hai lề (Margin Collapsing).\nVí dụ: Khối trên có margin-bottom: 30px, khối dưới có margin-top: 20px -> Khoảng cách giữa 2 khối chỉ là 30px (thay vì 50px)!\nNgoài ra, để căn giữa một khối có kích thước xác định theo chiều ngang, ta dùng kỹ thuật kinh điển `margin-left: auto; margin-right: auto;` (viết tắt là `margin: 0 auto;`).',
      syntax: '/* Căn giữa khối theo chiều ngang */\n.container {\n  max-width: 1200px;\n  margin-inline: auto; /* Viết tắt hiện đại của margin: 0 auto */\n}',
      codeExample: `/* Căn giữa container chính của trang */
.main-container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
}

/* Minh họa nuốt lề dọc */
.card-top {
  margin-bottom: 40px;
}
.card-bottom {
  margin-top: 20px;
  /* Khoảng cách thực tế giữa card-top và card-bottom là 40px */
}`,
      lineByLineExplanation: [
        { line: 4, text: 'margin: 0 auto chia đều khoảng trống thừa còn lại của 2 bên trái phải, đưa khối vào chính giữa màn hình.' },
        { line: 10, text: 'Lề dưới 40px sẽ nuốt lề trên 20px của khối tiếp theo.' }
      ],
      commonMistakes: [
        'Dùng margin: 0 auto cho phần tử inline (như <span> hay <a>) mà không đổi display sang block, khiến căn giữa không hoạt động.',
        'Cộng dồn số học các margin dọc trong thiết kế mà quên mất hiệu ứng nuốt lề.'
      ],
      whenToUse: 'Dùng margin: 0 auto cho khung nội dung website (Page wrapper / Container).',
      whenNotToUse: 'Margin collapsing không xảy ra trên phần tử Flexbox con, CSS Grid con, phần tử có position: absolute hoặc float.',
      realWorldUseCase: 'Khung lưới căn giữa bài báo trên VnExpress, Medium và trang hồ sơ người dùng.'
    }
  ],
  predictOutputs: [
    {
      id: 'po-css-4-1',
      question: 'Khối có CSS sau sẽ chiếm tổng chiều rộng thực tế trên màn hình là bao nhiêu pixel?',
      code: `.card {
  box-sizing: border-box;
  width: 300px;
  padding: 20px;
  border: 10px solid black;
  margin: 15px;
}`,
      options: [
        'A. 360px',
        'B. 300px (vì border-box bao gồm cả padding và border bên trong width)',
        'C. 330px',
        'D. 260px'
      ],
      correctAnswer: 'B. 300px (vì border-box bao gồm cả padding và border bên trong width)',
      explanation: 'Với `box-sizing: border-box`, kích thước hiển thị trực quan của chiếc hộp (tính từ viền ngoài border trái sang viền ngoài border phải) được khóa cố định chính xác bằng giá trị width khai báo là 300px.',
      hint: 'Hãy nhớ lại đặc điểm quan trọng nhất của border-box: width giữ nguyên không bị phình to.'
    }
  ],
  interactivePractice: {
    id: 'ip-css-4',
    title: 'Thực hành tạo Card với Box Model chuẩn và Căn giữa',
    description: 'Thiết lập class ".profile-box" có box-sizing: border-box, max-width: 400px, margin: 0 auto, padding: 24px, và border: 1px solid #e2e8f0.',
    starterCode: `.profile-box {
  box-sizing: border-box;
  max-width: 400px;
  margin: 0 auto;
  padding: 24px;
  border: 1px solid #e2e8f0;
}`,
    expectedConsoleOutput: 'border-box',
    hint: 'Sử dụng đầy đủ các thuộc tính box-sizing, max-width, margin, padding và border.',
    language: 'css'
  },
  exercises: {
    basic: {
      id: 'ex-css-4-basic',
      lessonId: 'les-css-4',
      title: 'Tạo khoảng cách đệm và lề ngoài',
      difficulty: 'basic',
      learningObjectiveIds: ['LO-CSS-4.1'],
      description: 'Thiết lập cho thẻ <div> có đệm trong "padding: 16px;", lề ngoài dưới "margin-bottom: 24px;" và đường viền "border: 2px solid #cbd5e1;".',
      starterCode: `div {
  padding: 16px;
  margin-bottom: 24px;
  border: 2px solid #cbd5e1;
}`,
      solutionCode: `div {\n  padding: 16px;\n  margin-bottom: 24px;\n  border: 2px solid #cbd5e1;\n}`,
      testCases: [
        {
          id: 'tc-c4-1',
          description: 'Kiểm tra padding 16px và margin-bottom 24px',
          expectedOutput: '16px'
        }
      ],
      hints: ['Đảm bảo kết thúc dòng bằng dấu chấm phẩy.'],
      explanation: 'Padding và margin định hình không gian thở (White space) cho giao diện.',
      language: 'css'
    },
    intermediate: {
      id: 'ex-css-4-mid',
      lessonId: 'les-css-4',
      title: 'Bộ khung Container căn giữa toàn màn hình',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO-CSS-4.2'],
      description: 'Tạo class ".site-container" có "box-sizing: border-box;", "max-width: 1200px;", "margin: 0 auto;" và "padding: 0 20px;".',
      starterCode: `.site-container {
  box-sizing: border-box;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}`,
      solutionCode: `.site-container {\n  box-sizing: border-box;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}`,
      testCases: [
        {
          id: 'tc-c4-2',
          description: 'Kiểm tra container căn giữa với margin: 0 auto',
          expectedOutput: '1200px'
        }
      ],
      hints: ['margin: 0 auto là công thức căn giữa kinh điển.'],
      explanation: 'Container giữ cho nội dung không bị bè ngang quá rộng trên màn hình siêu lớn.',
      language: 'css'
    },
    challenge: {
      id: 'ex-css-4-adv',
      lessonId: 'les-css-4',
      title: 'Kiểm soát viền bo tròn và bóng đổ Card',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO-CSS-4.1', 'LO-CSS-4.2'],
      description: 'Thiết kế class ".card-elevated" có "box-sizing: border-box;", "padding: 2rem;", "border-radius: 16px;", "background: #ffffff;" và viền mỏng "border: 1px solid rgba(0,0,0,0.08);".',
      starterCode: `.card-elevated {
  box-sizing: border-box;
  padding: 2rem;
  border-radius: 16px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
}`,
      solutionCode: `.card-elevated {\n  box-sizing: border-box;\n  padding: 2rem;\n  border-radius: 16px;\n  background-color: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n}`,
      testCases: [
        {
          id: 'tc-c4-3',
          description: 'Kiểm tra card bo tròn góc 16px',
          expectedOutput: '16px'
        }
      ],
      hints: ['border-radius tạo bo góc mượt mà cho khối chữ nhật.'],
      explanation: 'Sự kết hợp giữa đệm chuẩn và bo góc tạo nên phong cách Modern Card UI.',
      language: 'css'
    }
  },
  quiz: {
    id: 'quiz-css-4',
    lessonId: 'les-css-4',
    title: 'Kiểm tra hiểu biết: Box Model',
    passingScore: 70,
    questions: [
      {
        id: 'q-c4-1',
        lessonId: 'les-css-4',
        learningObjectiveId: 'LO-CSS-4.2',
        type: 'multiple_choice',
        difficulty: 'easy',
        prompt: 'Lợi ích lớn nhất của việc thiết lập `box-sizing: border-box;` cho tất cả các phần tử là gì?',
        options: [
          { id: 'a', text: 'Tự động biến tất cả các khối thành hình tròn' },
          { id: 'b', text: 'Chiều rộng width khai báo sẽ bao gồm cả padding và border, giúp kích thước hộp cố định chính xác không bị phình to' },
          { id: 'c', text: 'Tự động đổi màu chữ sang màu đen' },
          { id: 'd', text: 'Tăng tốc độ tải file HTML' }
        ],
        correctAnswer: 'b',
        explanation: '`box-sizing: border-box` giải quyết triệt để vấn đề cộng dồn padding và border, loại bỏ 99% nguyên nhân gây vỡ bố cục trên web.',
        relatedLessonId: 'les-css-4'
      }
    ]
  },
  summary: [
    'Box Model gồm 4 lớp từ trong ra ngoài: Content -> Padding -> Border -> Margin.',
    'Luôn luôn thiết lập box-sizing: border-box toàn cục.',
    'Margin Collapsing khiến các lề dọc liền kề nuốt vào nhau theo giá trị lớn nhất.',
    'Sử dụng margin: 0 auto để căn giữa khối có kích thước xác định theo chiều ngang.'
  ],
  suggestedBookmarks: [
    'Mẹo khắc phục Margin Collapsing với BFC (Block Formatting Context)',
    'Quy chuẩn thiết lập CSS Reset chuẩn quốc tế (Modern CSS Reset 2026)'
  ]
};

// ============================================================================
// CSS 5: COLORS & BACKGROUNDS & GRADIENTS
// ============================================================================
export const LESSON_CSS_5: Lesson = {
  id: 'les-css-5',
  moduleId: 'mod-css-5',
  track: 'css',
  language: 'css',
  title: 'CSS 5. Colors, Background & Gradients (Hệ màu, Ảnh nền & Màu chuyển)',
  order: 5,
  durationMinutes: 50,
  difficulty: 'Trung bình',
  prerequisites: [
    'Nắm vững Box Model từ Bài CSS 4'
  ],
  learningObjectives: [
    {
      id: 'LO-CSS-5.1',
      code: 'LO-CSS-5.1',
      title: 'Hệ màu sắc hiện đại: HEX, RGB, HSL và không gian màu mới oklch',
      description: 'Làm chủ cú pháp màu có độ trong suốt Alpha (rgba, hsla), hiểu ưu điểm của HSL khi thiết kế bảng màu và oklch cho màn hình dải màu rộng (P3).',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    },
    {
      id: 'LO-CSS-5.2',
      code: 'LO-CSS-5.2',
      title: 'Làm chủ thuộc tính hình nền Background',
      description: 'Cấu hình hoàn hảo background-image, background-size: cover/contain, background-position: center, và background-repeat: no-repeat.',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    },
    {
      id: 'LO-CSS-5.3',
      code: 'LO-CSS-5.3',
      title: 'Thiết kế dải màu chuyển động Gradient',
      description: 'Tạo màu chuyển tuyến tính (linear-gradient), màu xuyên tâm (radial-gradient) và màu xoay hình nón (conic-gradient).',
      bloomLevel: 'Create',
      masteryPercentage: 88
    }
  ],
  sections: [
    {
      id: 'sec-css-5-1',
      lessonId: 'les-css-5',
      order: 1,
      conceptName: 'Các hệ thống biểu diễn màu sắc trong CSS',
      title: '1. Từ HEX, RGB đến HSL và không gian màu thế hệ mới OKLCH',
      explanation: 'CSS hỗ trợ đa dạng phương thức định nghĩa màu:\n- HEX (#RRGGBB hoặc kèm Alpha #RRGGBBAA): Mã thập lục phân gọn gàng, thông dụng nhất trong thiết kế Figma (#2563eb).\n- RGB / RGBA: rgb(37 99 235 / 0.8) định nghĩa cường độ Đỏ, Xanh lá, Xanh dương và độ trong suốt.\n- HSL: hsl(217deg 91% 60%) định nghĩa theo Hue (Góc màu 0-360°), Saturation (Độ bão hòa %) và Lightness (Độ sáng tối %). Rất dễ tạo biến thể màu nhạt/đậm bằng cách tăng giảm L!\n- OKLCH: Không gian màu hiện đại nhất (CSS Color 4) hiển thị đồng đều độ sáng trên màn hình OLED Retina cao cấp.',
      syntax: '/* Các cách viết màu tương đương */\ncolor: #2563eb;\ncolor: rgb(37, 99, 235);\ncolor: hsl(217, 91%, 60%);\ncolor: oklch(0.55 0.22 260);',
      codeExample: `/* Màu chính và biến thể độ trong suốt */
.primary-text {
  color: #2563eb;
}

/* Nền trong suốt 15% làm thẻ card thanh lịch */
.card-soft-blue {
  background-color: rgba(37, 99, 235, 0.15);
  color: #1d4ed8;
  border: 1px solid rgba(37, 99, 235, 0.3);
}

/* Dễ dàng tạo màu hover bằng HSL (tăng/giảm Lightness) */
.btn-hsl {
  background: hsl(217, 90%, 60%);
}
.btn-hsl:hover {
  background: hsl(217, 90%, 50%); /* Giảm độ sáng để làm tối lại */
}`,
      lineByLineExplanation: [
        { line: 7, text: 'rgba(...) với 0.15 tạo nền màu xanh nhạt trong suốt nhìn thấu ảnh nền phía sau.' },
        { line: 17, text: 'Chỉ cần giảm từ 60% xuống 50% là có ngay màu hover tối hơn mà không cần đổi mã HEX phức tạp.' }
      ],
      commonMistakes: [
        'Dùng thuộc tính opacity: 0.5 lên toàn bộ phần tử khiến cả chữ và icon bên trong cũng bị mờ đục theo (Hãy dùng rgba hoặc hsla cho background-color).',
        'Viết thiếu ký hiệu thăng (#) trước mã màu Hex.'
      ],
      whenToUse: 'Dùng HEX cho màu thương hiệu cố định; dùng HSL khi xây dựng Design System linh hoạt; dùng RGBA khi cần độ trong suốt.',
      whenNotToUse: 'Không dùng từ khóa tên màu tiếng Anh đơn giản (như red, blue, green) cho dự án thương mại vì màu sắc quá chói và thiếu tinh tế.',
      realWorldUseCase: 'Bảng màu thiết kế của Tailwind CSS và Radix UI đều dựa trên cơ chế HSL và OKLCH.'
    },
    {
      id: 'sec-css-5-2',
      lessonId: 'les-css-5',
      order: 2,
      conceptName: 'Làm chủ hình nền Background & Dải màu Gradients',
      title: '2. Kỹ thuật hình nền hoàn hảo và Hiệu ứng chuyển sắc Gradients',
      explanation: 'Để hình nền bao phủ hoàn hảo không bị vỡ hay lặp lại, công thức 4 thuộc tính vàng là:\n`background-image: url(...)`\n`background-size: cover` (phủ kín toàn bộ khung mà không méo tỷ lệ)\n`background-position: center` (căn giữa trọng tâm bức ảnh)\n`background-repeat: no-repeat` (không lặp lại ảnh như gạch lát nền)\n\nNgoài ra, CSS Gradients tạo ra màu chuyển cực kỳ mượt mà:\n- linear-gradient(to right, #4f46e5, #06b6d4): Màu chuyển tuyến tính theo góc/hướng.\n- radial-gradient(circle, #f59e0b, #ef4444): Màu chuyển tỏa tròn từ tâm ra ngoài.\n- conic-gradient: Màu chuyển hình nón xoay vòng (rất hay dùng để vẽ biểu đồ tròn Pie Chart).',
      syntax: '/* Viết tắt hình nền */\nbackground: url("hero.jpg") center / cover no-repeat;\n\n/* Gradient tuyến tính */\nbackground: linear-gradient(135deg, #6366f1 0%, #ec4899 100%);',
      codeExample: `/* Hero Banner có hình nền phủ kín */
.hero-banner {
  background-image: url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 400px;
}

/* Nút bấm gradient hiện đại */
.btn-gradient {
  background: linear-gradient(90deg, #4f46e5 0%, #7c3aed 50%, #db2777 100%);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 9999px;
  font-weight: bold;
}

/* Hiệu ứng chữ đổi màu Gradient (Gradient Text) */
.gradient-heading {
  background: linear-gradient(to right, #f59e0b, #ef4444);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}`,
      lineByLineExplanation: [
        { line: 3, text: 'background-size: cover đảm bảo ảnh co giãn vừa khít mọi kích cỡ màn hình.' },
        { line: 11, text: 'Gradient 3 điểm dừng màu tạo hiệu ứng chiều sâu bắt mắt.' },
        { line: 22, text: '-webkit-background-clip: text cắt dải màu theo khuôn chữ và làm trong suốt chữ để lộ dải gradient rực rỡ.' }
      ],
      commonMistakes: [
        'Quên background-repeat: no-repeat khiến ảnh nhỏ bị lặp lại thành hàng chục ô vuông như bàn cờ.',
        'Chọn 2 màu gradient quá tương phản và lệch tông khiến điểm giao giữa dải màu bị xỉn màu xám đục.'
      ],
      whenToUse: 'Dùng cover cho banner hero; dùng linear-gradient cho các nút Call-to-Action và tiêu đề nổi bật.',
      whenNotToUse: 'Không dùng gradient quá sặc sỡ cho toàn bộ nền văn bản dài gây mỏi mắt người đọc.',
      realWorldUseCase: 'Banner trang chủ Apple, tiêu đề chuyển màu trên website Stripe và Vercel.'
    }
  ],
  predictOutputs: [
    {
      id: 'po-css-5-1',
      question: 'Khi muốn hình nền luôn bao phủ kín 100% diện tích của khung chứa mà vẫn giữ nguyên tỷ lệ khung hình (không bị méo hình), thuộc tính `background-size` cần đặt giá trị nào?',
      code: `.hero {
  background-image: url("nature.jpg");
  background-size: ???;
}`,
      options: [
        'A. background-size: 100% 100%; (khiến hình bị méo kéo dãn)',
        'B. background-size: cover;',
        'C. background-size: contain; (chừa lại khoảng trống nếu tỷ lệ không khớp)',
        'D. background-size: auto;'
      ],
      correctAnswer: 'B. background-size: cover;',
      explanation: 'Giá trị `cover` tự động phóng to hình ảnh vừa đủ để che kín hoàn toàn khung chứa mà bảo toàn tuyệt đối tỷ lệ chiều rộng/chiều cao không bị biến dạng méo mó.',
      hint: 'Chữ "cover" có nghĩa là che phủ toàn bộ.'
    }
  ],
  interactivePractice: {
    id: 'ip-css-5',
    title: 'Thực hành tạo Nút Gradient và Chữ chuyển sắc',
    description: 'Tạo class ".btn-call" có dải màu linear-gradient 90 độ từ "#3b82f6" sang "#8b5cf6", chữ trắng và bo góc 12px.',
    starterCode: `.btn-call {
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  color: #ffffff;
  border-radius: 12px;
  padding: 10px 20px;
  border: none;
}`,
    expectedConsoleOutput: 'linear-gradient',
    hint: 'Sử dụng linear-gradient(90deg, #3b82f6, #8b5cf6).',
    language: 'css'
  },
  exercises: {
    basic: {
      id: 'ex-css-5-basic',
      lessonId: 'les-css-5',
      title: 'Tạo màu nền bán trong suốt bằng RGBA',
      difficulty: 'basic',
      learningObjectiveIds: ['LO-CSS-5.1'],
      description: 'Thiết lập class ".overlay" có màu nền "rgba(15, 23, 42, 0.75)" và màu chữ "#ffffff".',
      starterCode: `.overlay {
  background-color: rgba(15, 23, 42, 0.75);
  color: #ffffff;
}`,
      solutionCode: `.overlay {\n  background-color: rgba(15, 23, 42, 0.75);\n  color: #ffffff;\n}`,
      testCases: [
        {
          id: 'tc-c5-1',
          description: 'Kiểm tra background-color rgba với alpha 0.75',
          expectedOutput: '0.75'
        }
      ],
      hints: ['Giá trị alpha nằm trong khoảng từ 0 (trong suốt) đến 1 (đặc hoàn toàn).'],
      explanation: 'RGBA cho phép tạo lớp phủ bóng mờ mà không làm ảnh hưởng độ nét của chữ bên trong.',
      language: 'css'
    },
    intermediate: {
      id: 'ex-css-5-mid',
      lessonId: 'les-css-5',
      title: 'Cấu hình Hình nền Cover chuẩn Responsive',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO-CSS-5.2'],
      description: 'Thiết lập class ".banner" có "background-size: cover;", "background-position: center;" và "background-repeat: no-repeat;".',
      starterCode: `.banner {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}`,
      solutionCode: `.banner {\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}`,
      testCases: [
        {
          id: 'tc-c5-2',
          description: 'Kiểm tra 3 thuộc tính cover, center, no-repeat',
          expectedOutput: 'cover'
        }
      ],
      hints: ['Bộ ba thuộc tính này là chuẩn mực cho mọi banner ảnh trên web.'],
      explanation: 'Đảm bảo ảnh hiển thị đẹp mắt trên cả màn hình di động lẫn máy tính để bàn.',
      language: 'css'
    },
    challenge: {
      id: 'ex-css-5-adv',
      lessonId: 'les-css-5',
      title: 'Tạo hiệu ứng Kính mờ Glassmorphism với Backdrop-filter',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO-CSS-5.1', 'LO-CSS-5.3'],
      description: 'Tạo class ".glass-panel" có nền mờ "background: rgba(255, 255, 255, 0.2);", bộ lọc kính mờ "backdrop-filter: blur(12px);", viền "border: 1px solid rgba(255, 255, 255, 0.3);" và bo góc "border-radius: 16px;".',
      starterCode: `.glass-panel {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
}`,
      solutionCode: `.glass-panel {\n  background: rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: 16px;\n}`,
      testCases: [
        {
          id: 'tc-c5-3',
          description: 'Kiểm tra backdrop-filter blur 12px tạo hiệu ứng kính mờ',
          expectedOutput: 'blur(12px)'
        }
      ],
      hints: ['backdrop-filter làm mờ các phần tử nằm phía dưới lớp nền.'],
      explanation: 'Glassmorphism là phong cách thiết kế thời thượng được Apple áp dụng trên macOS và iOS.',
      language: 'css'
    }
  },
  quiz: {
    id: 'quiz-css-5',
    lessonId: 'les-css-5',
    title: 'Kiểm tra hiểu biết: Màu sắc & Hình nền',
    passingScore: 70,
    questions: [
      {
        id: 'q-c5-1',
        lessonId: 'les-css-5',
        learningObjectiveId: 'LO-CSS-5.3',
        type: 'multiple_choice',
        difficulty: 'easy',
        prompt: 'Hàm nào trong CSS được dùng để tạo dải màu chuyển tiếp dần theo đường thẳng từ góc này sang góc khác?',
        options: [
          { id: 'a', text: 'radial-gradient()' },
          { id: 'b', text: 'linear-gradient()' },
          { id: 'c', text: 'conic-gradient()' },
          { id: 'd', text: 'color-mix()' }
        ],
        correctAnswer: 'b',
        explanation: '`linear-gradient()` tạo chuyển sắc theo đường thẳng (tuyến tính) với góc xoay tùy chỉnh (ví dụ: to right, 45deg, 135deg).',
        relatedLessonId: 'les-css-5'
      }
    ]
  },
  summary: [
    'Hệ màu đa dạng: HEX (#RRGGBB), RGB, HSL (dễ chỉnh độ sáng tối), và OKLCH thế hệ mới.',
    'Bộ tứ hình nền bất bại: background-image, background-size: cover, position: center, repeat: no-repeat.',
    'Dùng linear-gradient và radial-gradient để tạo hiệu ứng chuyển sắc sang trọng.',
    'Kết hợp rgba() với backdrop-filter: blur() tạo phong cách kính mờ Glassmorphism đỉnh cao.'
  ],
  suggestedBookmarks: [
    'Bảng hòa sắc Color Harmony và nguyên tắc tương phản WCAG 4.5:1',
    'Kỹ thuật tối ưu ảnh nền WebP và định dạng AVIF'
  ]
};
