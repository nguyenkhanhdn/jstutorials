import { Module, Lesson } from '../types';

export const CSS_MODULES: Module[] = [
  {
    id: 'mod-css-1',
    number: 1,
    track: 'css',
    title: 'Cú pháp & Bộ chọn CSS',
    englishTitle: 'CSS Syntax & Selectors',
    description: 'Cách viết CSS (Inline, Internal, External), bộ chọn cơ bản (Element, Class, ID) và bộ chọn nâng cao (Con cháu, Con trực tiếp, Pseudo-classes :hover, :focus, :nth-child).',
    durationHours: 6,
    lessonsCount: 3,
    status: 'not_started',
    masteryPercentage: 0,
    lessons: [
      { id: 'les-css-1-1', title: '1.1 Cú pháp CSS & 3 cách nhúng vào HTML', durationMinutes: 40, status: 'not_started' },
      { id: 'les-css-1-2', title: '1.2 Bộ chọn cơ bản: Thẻ, Lớp (Class), Định danh (ID)', durationMinutes: 45, status: 'not_started' },
      { id: 'les-css-1-3', title: '1.3 Bộ chọn tổ hợp & Pseudo-classes (:hover, :focus)', durationMinutes: 50, status: 'not_started' }
    ]
  },
  {
    id: 'mod-css-2',
    number: 2,
    track: 'css',
    title: 'Mô hình hộp (Box Model)',
    englishTitle: 'CSS Box Model & Sizing',
    description: 'Bản chất của Content, Padding, Border, Margin; thuộc tính box-sizing: border-box và kỹ thuật căn lề chuẩn xác.',
    durationHours: 6,
    lessonsCount: 3,
    status: 'not_started',
    masteryPercentage: 0,
    lessons: [
      { id: 'les-css-2-1', title: '2.1 Hiểu sâu 4 lớp của Box Model: Margin, Border, Padding, Content', durationMinutes: 45, status: 'not_started' },
      { id: 'les-css-2-2', title: '2.2 Làm chủ box-sizing: border-box chống vỡ layout', durationMinutes: 40, status: 'not_started' },
      { id: 'les-css-2-3', title: '2.3 Margin Collapsing và các bẫy thường gặp', durationMinutes: 45, status: 'not_started' }
    ]
  },
  {
    id: 'mod-css-3',
    number: 3,
    track: 'css',
    title: 'Màu sắc, Nền & Typography',
    englishTitle: 'Colors, Backgrounds & Typography',
    description: 'Hệ màu HEX, RGB, HSL; Gradient chuyển màu; phông chữ Web Fonts, Google Fonts, font-family, line-height, text-align, letter-spacing.',
    durationHours: 6,
    lessonsCount: 3,
    status: 'not_started',
    masteryPercentage: 0,
    lessons: [
      { id: 'les-css-3-1', title: '3.1 Hệ màu sắc hiện đại & Độ trong suốt (RGBA, HSLA)', durationMinutes: 40, status: 'not_started' },
      { id: 'les-css-3-2', title: '3.2 Định kiểu phông chữ và nhúng Google Fonts', durationMinutes: 45, status: 'not_started' },
      { id: 'les-css-3-3', title: '3.3 Hiệu ứng bóng đổ box-shadow và text-shadow', durationMinutes: 40, status: 'not_started' }
    ]
  },
  {
    id: 'mod-css-4',
    number: 4,
    track: 'css',
    title: 'Định vị & Phân lớp (Position & Z-Index)',
    englishTitle: 'CSS Positioning & Stacking Context',
    description: 'Các chế độ position: static, relative, absolute, fixed, sticky; phân tầng hiển thị với z-index và Stacking Context.',
    durationHours: 8,
    lessonsCount: 3,
    status: 'not_started',
    masteryPercentage: 0,
    lessons: [
      { id: 'les-css-4-1', title: '4.1 Phân biệt position: relative và absolute', durationMinutes: 50, status: 'not_started' },
      { id: 'les-css-4-2', title: '4.2 Thanh điều hướng cố định với fixed và sticky', durationMinutes: 45, status: 'not_started' },
      { id: 'les-css-4-3', title: '4.3 Làm chủ z-index và thứ tự xếp lớp chồng', durationMinutes: 45, status: 'not_started' }
    ]
  },
  {
    id: 'mod-css-5',
    number: 5,
    track: 'css',
    title: 'Bố cục linh hoạt Flexbox',
    englishTitle: 'Flexbox Layout Master',
    description: 'Trục chính (Main Axis) & Trục phụ (Cross Axis); flex-direction, justify-content, align-items, flex-wrap; các thuộc tính phần tử con flex-grow, flex-shrink, flex-basis.',
    durationHours: 10,
    lessonsCount: 4,
    status: 'not_started',
    masteryPercentage: 0,
    lessons: [
      { id: 'les-css-5-1', title: '5.1 Khái niệm Flex Container & Trục tọa độ Flexbox', durationMinutes: 45, status: 'not_started' },
      { id: 'les-css-5-2', title: '5.2 Căn chỉnh hoàn hảo với justify-content và align-items', durationMinutes: 50, status: 'not_started' },
      { id: 'les-css-5-3', title: '5.3 Thuộc tính linh hoạt cho phần tử con (flex: 1)', durationMinutes: 50, status: 'not_started' },
      { id: 'les-css-5-4', title: '5.4 Xây dựng Navbar và Card Grid với Flexbox', durationMinutes: 60, status: 'not_started' }
    ]
  },
  {
    id: 'mod-css-6',
    number: 6,
    track: 'css',
    title: 'Bố cục lưới 2 chiều CSS Grid',
    englishTitle: 'CSS Grid Layout',
    description: 'Thiết kế bố cục trang web 2 chiều (hàng và cột đồng thời); grid-template-columns, grid-template-rows, gap, đơn vị fr, repeat(), minmax(), grid-template-areas.',
    durationHours: 10,
    lessonsCount: 4,
    status: 'not_started',
    masteryPercentage: 0,
    lessons: [
      { id: 'les-css-6-1', title: '6.1 Nhập môn CSS Grid 2 chiều & Đơn vị fr', durationMinutes: 50, status: 'not_started' },
      { id: 'les-css-6-2', title: '6.2 Phân chia vùng hiển thị với grid-template-areas', durationMinutes: 50, status: 'not_started' },
      { id: 'les-css-6-3', title: '6.3 Kỹ thuật tự động co giãn với auto-fit và minmax()', durationMinutes: 55, status: 'not_started' },
      { id: 'les-css-6-4', title: '6.4 So sánh chuyên sâu: Khi nào dùng Flexbox vs CSS Grid', durationMinutes: 45, status: 'not_started' }
    ]
  },
  {
    id: 'mod-css-7',
    number: 7,
    track: 'css',
    title: 'Thiết kế Web đáp ứng (Responsive & Media Queries)',
    englishTitle: 'Responsive Web Design (RWD)',
    description: 'Chiến lược Mobile-First; điểm ngắt Media Queries (@media screen and (min-width:...)); đơn vị tương đối rem, em, vw, vh; hình ảnh và video tự co giãn theo màn hình.',
    durationHours: 8,
    lessonsCount: 3,
    status: 'not_started',
    masteryPercentage: 0,
    lessons: [
      { id: 'les-css-7-1', title: '7.1 Triết lý Mobile-First Design & Điểm ngắt Breakpoints', durationMinutes: 50, status: 'not_started' },
      { id: 'les-css-7-2', title: '7.2 Sử dụng Media Queries cho Mobile, Tablet, Desktop', durationMinutes: 55, status: 'not_started' },
      { id: 'les-css-7-3', title: '7.3 Đơn vị tương đối rem, em và Viewport units (vw, vh)', durationMinutes: 45, status: 'not_started' }
    ]
  },
  {
    id: 'mod-css-8',
    number: 8,
    track: 'css',
    title: 'Chuyển động & Biến hình (Transitions & Animations)',
    englishTitle: 'CSS Transitions, Transforms & Animations',
    description: 'Tạo hiệu ứng mượt mà với transition; xoay, phóng to, nghiêng với transform: rotate(), scale(), translate(); chu kỳ chuyển động nâng cao với @keyframes.',
    durationHours: 8,
    lessonsCount: 3,
    status: 'not_started',
    masteryPercentage: 0,
    lessons: [
      { id: 'les-css-8-1', title: '8.1 Chuyển động mượt mà với transition và timing-function', durationMinutes: 45, status: 'not_started' },
      { id: 'les-css-8-2', title: '8.2 Biến hình 2D/3D với transform (translate, rotate, scale)', durationMinutes: 50, status: 'not_started' },
      { id: 'les-css-8-3', title: '8.3 Làm chủ hoạt ảnh @keyframes chuyển động vô tận', durationMinutes: 55, status: 'not_started' }
    ]
  }
];
