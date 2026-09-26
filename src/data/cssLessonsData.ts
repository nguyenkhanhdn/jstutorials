import { Module, Lesson } from '../types';

export interface CSSTopic {
  id: string;
  topicNumber: number;
  title: string;
  englishTitle: string;
  category: string;
  durationMinutes: number;
  summary: string;
  tags: string[];
}

export const CSS_TOPICS_LIST: CSSTopic[] = [
  {
    id: 'les-css-1',
    topicNumber: 1,
    title: 'Cú pháp & cách CSS hoạt động',
    englishTitle: 'CSS Syntax, Cascade, Specificity & Inheritance',
    category: 'Nền tảng & Cơ chế',
    durationMinutes: 45,
    summary: 'Giải phẫu quy tắc CSS (Selector { property: value; }), 3 cách nhúng vào HTML, cơ chế Cascade (xếp tầng), kế thừa (Inheritance) và cách tính điểm trọng số Specificity.',
    tags: ['Syntax', 'Cascade', 'Specificity', 'Inheritance', '!important']
  },
  {
    id: 'les-css-2',
    topicNumber: 2,
    title: 'Selectors — Bộ chọn',
    englishTitle: 'CSS Selectors Masterclass',
    category: 'Nền tảng & Cơ chế',
    durationMinutes: 50,
    summary: 'Bộ chọn cơ bản (thẻ, class, id, *), bộ chọn tổ hợp (con cháu, con trực tiếp >, liền kề +, anh em ~), pseudo-classes (:hover, :focus, :nth-child, :is, :where, :has) và pseudo-elements (::before, ::after).',
    tags: ['Selectors', 'Pseudo-classes', 'Pseudo-elements', ':has', ':nth-child']
  },
  {
    id: 'les-css-3',
    topicNumber: 3,
    title: 'Units — Đơn vị',
    englishTitle: 'CSS Units & Measurements',
    category: 'Nền tảng & Cơ chế',
    durationMinutes: 45,
    summary: 'Đơn vị tuyệt đối (px) và đơn vị tương đối (rem, em, %, vw, vh, vmin, vmax, ch). Khi nào dùng rem cho typography, em cho padding/component và %/vw cho layout.',
    tags: ['px', 'rem', 'em', 'vw', 'vh', 'ch', 'Units']
  },
  {
    id: 'les-css-4',
    topicNumber: 4,
    title: 'Cascade Layers — Các tầng Cascade',
    englishTitle: 'CSS Cascade Layers (@layer)',
    category: 'Nền tảng & Cơ chế',
    durationMinutes: 45,
    summary: 'Quy tắc @layer trong CSS hiện đại: phân chia tầng reset, base, components, utilities; giải quyết triệt để tranh chấp Specificity trong dự án quy mô lớn.',
    tags: ['@layer', 'Cascade Layers', 'Architecture', 'Specificity Management']
  },
  {
    id: 'les-css-5',
    topicNumber: 5,
    title: 'CSS Nesting — Lồng CSS',
    englishTitle: 'Native CSS Nesting',
    category: 'Nền tảng & Cơ chế',
    durationMinutes: 40,
    summary: 'Kỹ thuật lồng quy tắc CSS trực tiếp không cần cài đặt Sass hay preprocessor; sử dụng ký tự & cho pseudo-class và biến thể modifier BEM.',
    tags: ['CSS Nesting', '& selector', 'Modern CSS', 'Sass Alternative']
  },
  {
    id: 'les-css-6',
    topicNumber: 6,
    title: 'Box Model — Mô hình hộp',
    englishTitle: 'The CSS Box Model',
    category: 'Mô hình hộp & Hiển thị',
    durationMinutes: 45,
    summary: '4 lớp cốt lõi: Content, Padding, Border, Margin. Phân tích sự nguy hiểm của content-box mặc định và lý do chuẩn mực box-sizing: border-box ra đời; hiện tượng margin collapsing.',
    tags: ['Box Model', 'box-sizing', 'Padding', 'Margin', 'Margin Collapsing']
  },
  {
    id: 'les-css-7',
    topicNumber: 7,
    title: 'Border & Effects — Viền & hiệu ứng',
    englishTitle: 'Borders, Radius & Shadows',
    category: 'Mô hình hộp & Hiển thị',
    durationMinutes: 45,
    summary: 'Tùy biến viền (border-style, border-image), bo góc đa dạng border-radius, hiệu ứng bóng đổ chiều sâu box-shadow (inset, nhiều tầng shadow) và outline.',
    tags: ['border', 'border-radius', 'box-shadow', 'outline', 'Visual Depth']
  },
  {
    id: 'les-css-8',
    topicNumber: 8,
    title: 'Display & Visibility',
    englishTitle: 'Display Types & Visibility States',
    category: 'Mô hình hộp & Hiển thị',
    durationMinutes: 45,
    summary: 'Sự khác biệt giữa display: block, inline, inline-block, none và visibility: hidden. Cách ẩn phần tử giữ nguyên chiếm chỗ DOM và tối ưu cho Accessibility.',
    tags: ['display', 'block', 'inline', 'inline-block', 'visibility', 'none']
  },
  {
    id: 'les-css-9',
    topicNumber: 9,
    title: 'Overflow — Nội dung tràn',
    englishTitle: 'Handling Content Overflow',
    category: 'Mô hình hộp & Hiển thị',
    durationMinutes: 40,
    summary: 'Các giá trị visible, hidden, scroll, auto; cắt ngắn văn bản dài một dòng hoặc nhiều dòng với text-overflow: ellipsis và line-clamp; overscroll-behavior.',
    tags: ['overflow', 'text-overflow', 'ellipsis', 'line-clamp', 'Scroll Container']
  },
  {
    id: 'les-css-10',
    topicNumber: 10,
    title: 'Colors — Màu sắc',
    englishTitle: 'Modern CSS Colors & Spaces',
    category: 'Màu sắc & Thị giác',
    durationMinutes: 45,
    summary: 'Các hệ thống màu HEX, RGB, HSL và hệ màu hiện đại OKLCH, Display P3; kênh độ trong suốt Alpha (rgba, hsla); hàm color-mix() pha trộn màu chuyên nghiệp.',
    tags: ['Colors', 'HEX', 'RGB', 'HSL', 'OKLCH', 'color-mix', 'Alpha']
  },
  {
    id: 'les-css-11',
    topicNumber: 11,
    title: 'Background — Nền',
    englishTitle: 'CSS Backgrounds Master',
    category: 'Màu sắc & Thị giác',
    durationMinutes: 45,
    summary: 'Khai thác trọn bộ background-color, background-image, background-size (cover, contain), background-position, background-repeat và hiệu ứng nền cố định background-attachment: fixed.',
    tags: ['background', 'background-size', 'cover', 'contain', 'Parallax']
  },
  {
    id: 'les-css-12',
    topicNumber: 12,
    title: 'Gradients — Màu chuyển',
    englishTitle: 'CSS Gradients (Linear, Radial & Conic)',
    category: 'Màu sắc & Thị giác',
    durationMinutes: 45,
    summary: 'Tạo dải chuyển màu mượt mà: linear-gradient() theo góc xoay độ, radial-gradient() hình elip/tròn và conic-gradient() ứng dụng làm biểu đồ tròn hay hiệu ứng viền phát sáng.',
    tags: ['Gradients', 'linear-gradient', 'radial-gradient', 'conic-gradient', 'Color Stops']
  },
  {
    id: 'les-css-13',
    topicNumber: 13,
    title: 'Filters & Visual Effects — Bộ lọc & hiệu ứng hình ảnh',
    englishTitle: 'CSS Filters & Backdrop Filters',
    category: 'Màu sắc & Thị giác',
    durationMinutes: 45,
    summary: 'Xử lý hiệu ứng đồ họa trực tiếp bằng CSS: filter (blur, brightness, contrast, grayscale, drop-shadow) và backdrop-filter (kính mờ Frosted Glass Glassmorphism).',
    tags: ['filter', 'backdrop-filter', 'Glassmorphism', 'blur', 'mix-blend-mode']
  },
  {
    id: 'les-css-14',
    topicNumber: 14,
    title: 'Typography — Chữ',
    englishTitle: 'Web Typography & Google Fonts',
    category: 'Kiểu chữ & UI Elements',
    durationMinutes: 50,
    summary: 'Phân cấp chữ hiển thị: font-family, Font Stacks chuẩn dự phòng, nhúng Google Fonts qua @import/@font-face, font-weight, line-height, letter-spacing, text-align, text-transform.',
    tags: ['Typography', 'font-family', 'Google Fonts', 'line-height', 'letter-spacing']
  },
  {
    id: 'les-css-15',
    topicNumber: 15,
    title: 'Images & Media — Hình ảnh & đa phương tiện',
    englishTitle: 'Images, Media & Aspect Ratio',
    category: 'Kiểu chữ & UI Elements',
    durationMinutes: 45,
    summary: 'Ngăn chặn méo hình với object-fit (cover, contain) và object-position; thiết lập tỉ lệ vàng cho video/card với thuộc tính hiện đại aspect-ratio: 16/9, 1/1.',
    tags: ['Images', 'object-fit', 'object-position', 'aspect-ratio', 'Responsive Media']
  },
  {
    id: 'les-css-16',
    topicNumber: 16,
    title: 'Lists — Danh sách',
    englishTitle: 'Styling Lists & CSS Counters',
    category: 'Kiểu chữ & UI Elements',
    durationMinutes: 40,
    summary: 'Tùy biến danh sách ul/ol: list-style-type, list-style-image, định dạng dấu đầu dòng tùy ý với pseudo-element ::marker và tự động đánh số phân cấp nhiều tầng với CSS Counters.',
    tags: ['Lists', 'list-style', '::marker', 'CSS Counters', 'counter-reset']
  },
  {
    id: 'les-css-17',
    topicNumber: 17,
    title: 'Tables — Bảng',
    englishTitle: 'Styling Data Tables',
    category: 'Kiểu chữ & UI Elements',
    durationMinutes: 45,
    summary: 'Thiết kế bảng dữ liệu đẹp mắt: border-collapse: collapse, padding ô, hiệu ứng dòng kẻ vằn ngựa (Zebra Striping với :nth-child(even)), tiêu đề ghim cố định position: sticky th.',
    tags: ['Tables', 'border-collapse', 'Zebra Striping', ':nth-child', 'Sticky Table Header']
  },
  {
    id: 'les-css-18',
    topicNumber: 18,
    title: 'CSS cho Form',
    englishTitle: 'CSS for Forms & Input Controls',
    category: 'Kiểu chữ & UI Elements',
    durationMinutes: 50,
    summary: 'Trang điểm ô nhập liệu input, textarea, select, button; tùy biến checkbox và radio hiện đại với accent-color và :checked; thiết lập viền nét truy cập :focus-visible và phản hồi validation :valid, :invalid.',
    tags: ['Forms', ':focus-visible', 'accent-color', ':valid', ':invalid', 'Custom Checkbox']
  },
  {
    id: 'les-css-19',
    topicNumber: 19,
    title: 'Position — Định vị',
    englishTitle: 'CSS Positioning & Stacking Context',
    category: 'Bố cục & Định vị',
    durationMinutes: 50,
    summary: '5 chế độ định vị: static, relative (làm gốc tọa độ), absolute (theo tổ tiên gần nhất), fixed (ghim chặt màn hình) và sticky (dính khi cuộn); giải mã bí ẩn z-index và Stacking Context.',
    tags: ['position', 'relative', 'absolute', 'fixed', 'sticky', 'z-index', 'Stacking Context']
  },
  {
    id: 'les-css-20',
    topicNumber: 20,
    title: 'Flexbox',
    englishTitle: 'Flexbox Layout Masterclass',
    category: 'Bố cục & Định vị',
    durationMinutes: 55,
    summary: 'Làm chủ bố cục 1 chiều: Trục chính Main Axis & Trục phụ Cross Axis; flex-direction, justify-content, align-items, flex-wrap, gap; thuộc tính phần tử con flex-grow, flex-shrink, flex-basis và flex: 1.',
    tags: ['Flexbox', 'justify-content', 'align-items', 'flex-grow', 'gap', 'Flex Container']
  },
  {
    id: 'les-css-21',
    topicNumber: 21,
    title: 'CSS Grid',
    englishTitle: 'CSS Grid 2D Layout System',
    category: 'Bố cục & Định vị',
    durationMinutes: 60,
    summary: 'Bố cục lưới 2 chiều toàn năng: grid-template-columns, grid-template-rows, đơn vị linh hoạt phân số fr, repeat(), minmax(), tự co giãn auto-fit/auto-fill và phân vùng trực quan grid-template-areas.',
    tags: ['CSS Grid', 'grid-template', 'fr unit', 'auto-fit', 'minmax', 'grid-template-areas']
  },
  {
    id: 'les-css-22',
    topicNumber: 22,
    title: 'Layout nâng cao',
    englishTitle: 'Advanced Layout: Subgrid, Multi-column & Masonry',
    category: 'Bố cục & Định vị',
    durationMinutes: 50,
    summary: 'Kỹ thuật bố cục cấp cao trong CSS hiện đại: Grid Subgrid kế thừa lưới từ cha, Multi-column layout dàn trang kiểu báo chí, và kỹ thuật dựng Masonry layout kiểu Pinterest.',
    tags: ['Subgrid', 'Multi-column', 'Masonry Layout', 'Advanced CSS', 'Modern Layouts']
  },
  {
    id: 'les-css-23',
    topicNumber: 23,
    title: 'Logical Properties — Thuộc tính logic',
    englishTitle: 'CSS Logical Properties & Values',
    category: 'Bố cục & Định vị',
    durationMinutes: 45,
    summary: 'Từ bỏ tư duy vật lý (top/bottom/left/right) để chuyển sang tư duy hướng viết quốc tế hóa i18n: inline-size, block-size, margin-inline, padding-block, border-inline-start.',
    tags: ['Logical Properties', 'margin-inline', 'padding-block', 'i18n', 'Writing Modes']
  },
  {
    id: 'les-css-24',
    topicNumber: 24,
    title: 'Transform — Biến đổi',
    englishTitle: '2D & 3D CSS Transforms',
    category: 'Chuyển động & Tương tác',
    durationMinutes: 50,
    summary: 'Biến đổi hình học không gian: translate(x, y), rotate(deg), scale(factor), skew(deg) và không gian 3D perspective; tối ưu hóa tăng tốc đồ họa phần cứng GPU (Hardware Acceleration).',
    tags: ['transform', 'translate', 'rotate', 'scale', '3D Transforms', 'GPU Acceleration']
  },
  {
    id: 'les-css-25',
    topicNumber: 25,
    title: 'Transition — Chuyển tiếp',
    englishTitle: 'Smooth CSS Transitions',
    category: 'Chuyển động & Tương tác',
    durationMinutes: 45,
    summary: 'Tạo chuyển đổi trạng thái mượt mà không giật cục: transition-property, transition-duration, transition-timing-function (ease, linear, cubic-bezier) và transition-delay.',
    tags: ['transition', 'duration', 'timing-function', 'cubic-bezier', 'Micro-interactions']
  },
  {
    id: 'les-css-26',
    topicNumber: 26,
    title: 'Animation — Hoạt ảnh',
    englishTitle: 'CSS Animations & @keyframes',
    category: 'Chuyển động & Tương tác',
    durationMinutes: 55,
    summary: 'Đạo diễn chuyển động với @keyframes: các mốc 0% -> 100%, lặp vô tận animation-iteration-count: infinite, đảo chiều animation-direction: alternate, giữ trạng thái cuối animation-fill-mode: forwards.',
    tags: ['animation', '@keyframes', 'infinite', 'animation-fill-mode', 'Complex Motion']
  },
  {
    id: 'les-css-27',
    topicNumber: 27,
    title: 'Cursor & User Interaction — Con trỏ & tương tác',
    englishTitle: 'Cursor Styles & Interaction Controls',
    category: 'Chuyển động & Tương tác',
    durationMinutes: 40,
    summary: 'Tùy biến con trỏ chuột cursor: pointer, not-allowed, grab, custom SVG; vô hiệu hóa bấm chuột với pointer-events: none; chống bôi đen văn bản thừa user-select: none; tối ưu cuộn cảm ứng touch-action.',
    tags: ['cursor', 'pointer-events', 'user-select', 'touch-action', 'UX Polish']
  },
  {
    id: 'les-css-28',
    topicNumber: 28,
    title: 'Scroll — Cuộn trang',
    englishTitle: 'Scroll Snapping & Scrollbar Customization',
    category: 'Chuyển động & Tương tác',
    durationMinutes: 45,
    summary: 'Kiểm soát trải nghiệm cuộn: cuộn êm scroll-behavior: smooth, hít điểm dừng xem từng card trình chiếu với scroll-snap-type & scroll-snap-align; chống co giật layout với scrollbar-gutter: stable.',
    tags: ['scroll-behavior', 'scroll-snap', 'scrollbar-gutter', 'Custom Scrollbar']
  },
  {
    id: 'les-css-29',
    topicNumber: 29,
    title: 'Responsive Design — Thiết kế đáp ứng',
    englishTitle: 'Responsive Web Design & Container Queries',
    category: 'Đáp ứng & Tùy biến',
    durationMinutes: 55,
    summary: 'Chiến lược thiết kế Mobile-First Design; các điểm ngắt Breakpoints chuẩn thiết bị; câu lệnh truy vấn @media (min-width); đột phá công nghệ mới @container (Container Queries) theo kích thước thẻ cha.',
    tags: ['Responsive Design', 'Mobile-First', '@media', 'Breakpoints', '@container']
  },
  {
    id: 'les-css-30',
    topicNumber: 30,
    title: 'Dark Mode & User Preferences',
    englishTitle: 'Dark Mode, Color Schemes & Reduced Motion',
    category: 'Đáp ứng & Tùy biến',
    durationMinutes: 45,
    summary: 'Tôn trọng thiết lập cá nhân của người dùng: tự động nhận diện chế độ ban đêm qua @media (prefers-color-scheme: dark), tắt chuyển động chóng mặt @media (prefers-reduced-motion: reduce) và chế độ tương phản cao.',
    tags: ['Dark Mode', 'prefers-color-scheme', 'prefers-reduced-motion', 'Accessibility']
  },
  {
    id: 'les-css-31',
    topicNumber: 31,
    title: 'Print CSS — CSS cho in ấn',
    englishTitle: 'Print Stylesheets & PDF Export',
    category: 'Đáp ứng & Tùy biến',
    durationMinutes: 40,
    summary: 'Tối ưu hóa hóa đơn, báo cáo khi người dùng bấm In hoặc lưu file PDF: @media print, ẩn thanh điều hướng navbar/nút bấm, chuyển màu đen trắng tiết kiệm mực, kiểm soát ngắt trang với page-break-inside: avoid.',
    tags: ['@media print', 'Print CSS', 'page-break', 'PDF Export', 'In ấn']
  },
  {
    id: 'les-css-32',
    topicNumber: 32,
    title: 'CSS Variables — Biến CSS',
    englishTitle: 'CSS Custom Properties (--var)',
    category: 'Hiện đại & Trợ năng',
    durationMinutes: 50,
    summary: 'Khai báo biến toàn cục :root { --brand-color: #6366f1; } và tái sử dụng bằng hàm var(); cơ chế kế thừa phân tầng (Scoping), hoán đổi theme giao diện Dark/Light Mode chỉ trong 1 dòng mã.',
    tags: ['CSS Variables', 'Custom Properties', '--var', 'var()', 'Dynamic Theming']
  },
  {
    id: 'les-css-33',
    topicNumber: 33,
    title: 'Functions — Hàm CSS',
    englishTitle: 'Mathematical & Logical CSS Functions',
    category: 'Hiện đại & Trợ năng',
    durationMinutes: 45,
    summary: 'Làm chủ các hàm toán học: tính toán kích thước động calc(100% - 40px), hàm giới hạn min(), max(), và hàm thần thánh clamp(1rem, 2.5vw, 2rem) tạo Fluid Typography không cần media query.',
    tags: ['calc()', 'clamp()', 'min()', 'max()', 'CSS Functions', 'Fluid Typography']
  },
  {
    id: 'les-css-34',
    topicNumber: 34,
    title: 'Accessibility — Khả năng tiếp cận',
    englishTitle: 'CSS for Web Accessibility (a11y)',
    category: 'Hiện đại & Trợ năng',
    durationMinutes: 45,
    summary: 'Xây dựng giao diện thân thiện với mọi người dùng: độ tương phản màu chuẩn WCAG AAA/AA, giữ đường viền bàn phím :focus-visible cho người khiếm thị, lớp tiện ích .sr-only ẩn thị giác nhưng trình đọc màn hình đọc được.',
    tags: ['Accessibility', 'a11y', 'WCAG', ':focus-visible', '.sr-only', 'Color Contrast']
  }
];

// Grouping into 8 Logical Pedagogical Modules
export const CSS_MODULES: Module[] = [
  {
    id: 'mod-css-1',
    number: 1,
    track: 'css',
    title: 'Cơ chế hoạt động, Bộ chọn & Lồng mã',
    englishTitle: 'CSS Mechanics, Selectors, Units & Layers',
    description: 'Cú pháp quy tắc, 3 phương thức nhúng, cơ chế Cascade xếp tầng, tính điểm Specificity, toàn bộ hệ thống Selectors, đơn vị đo lường, Cascade Layers (@layer) và CSS Nesting gốc.',
    durationHours: 10,
    lessonsCount: 5,
    status: 'not_started',
    masteryPercentage: 0,
    lessons: [
      { id: 'les-css-1', title: '1. Cú pháp & cách CSS hoạt động', durationMinutes: 45, status: 'not_started' },
      { id: 'les-css-2', title: '2. Selectors — Bộ chọn', durationMinutes: 50, status: 'not_started' },
      { id: 'les-css-3', title: '3. Units — Đơn vị', durationMinutes: 45, status: 'not_started' },
      { id: 'les-css-4', title: '4. Cascade Layers — Các tầng Cascade', durationMinutes: 45, status: 'not_started' },
      { id: 'les-css-5', title: '5. CSS Nesting — Lồng CSS', durationMinutes: 40, status: 'not_started' }
    ]
  },
  {
    id: 'mod-css-2',
    number: 2,
    track: 'css',
    title: 'Mô hình hộp, Viền & Khối hiển thị',
    englishTitle: 'Box Model, Display, Borders & Overflow',
    description: 'Bản chất 4 lớp Box Model, chuẩn mực box-sizing: border-box, bo góc border-radius & bóng đổ box-shadow, cơ chế hiển thị display/visibility và kiểm soát tràn nội dung overflow.',
    durationHours: 8,
    lessonsCount: 4,
    status: 'not_started',
    masteryPercentage: 0,
    lessons: [
      { id: 'les-css-6', title: '6. Box Model — Mô hình hộp', durationMinutes: 45, status: 'not_started' },
      { id: 'les-css-7', title: '7. Border & Effects — Viền & hiệu ứng', durationMinutes: 45, status: 'not_started' },
      { id: 'les-css-8', title: '8. Display & Visibility', durationMinutes: 45, status: 'not_started' },
      { id: 'les-css-9', title: '9. Overflow — Nội dung tràn', durationMinutes: 40, status: 'not_started' }
    ]
  },
  {
    id: 'mod-css-3',
    number: 3,
    track: 'css',
    title: 'Màu sắc, Nền & Hiệu ứng Thị giác',
    englishTitle: 'Colors, Backgrounds, Gradients & Filters',
    description: 'Hệ màu sắc HEX, RGB, HSL, OKLCH, kênh Alpha độ mờ; bộ thuộc tính background hoàn chỉnh; phối dải chuyển sắc linear, radial, conic gradient và bộ lọc ảnh glassmorphism backdrop-filter.',
    durationHours: 8,
    lessonsCount: 4,
    status: 'not_started',
    masteryPercentage: 0,
    lessons: [
      { id: 'les-css-10', title: '10. Colors — Màu sắc', durationMinutes: 45, status: 'not_started' },
      { id: 'les-css-11', title: '11. Background — Nền', durationMinutes: 45, status: 'not_started' },
      { id: 'les-css-12', title: '12. Gradients — Màu chuyển', durationMinutes: 45, status: 'not_started' },
      { id: 'les-css-13', title: '13. Filters & Visual Effects — Bộ lọc & hiệu ứng hình ảnh', durationMinutes: 45, status: 'not_started' }
    ]
  },
  {
    id: 'mod-css-4',
    number: 4,
    track: 'css',
    title: 'Kiểu chữ, Đa phương tiện & Giao diện Form',
    englishTitle: 'Typography, Media, Lists, Tables & Forms',
    description: 'Nghệ thuật Typography và Google Fonts, kỹ thuật object-fit/aspect-ratio cho media, định dạng danh sách & CSS counters, bảng dữ liệu responsive zebra-striping và định kiểu form controls hiện đại.',
    durationHours: 10,
    lessonsCount: 5,
    status: 'not_started',
    masteryPercentage: 0,
    lessons: [
      { id: 'les-css-14', title: '14. Typography — Chữ', durationMinutes: 50, status: 'not_started' },
      { id: 'les-css-15', title: '15. Images & Media — Hình ảnh & đa phương tiện', durationMinutes: 45, status: 'not_started' },
      { id: 'les-css-16', title: '16. Lists — Danh sách', durationMinutes: 40, status: 'not_started' },
      { id: 'les-css-17', title: '17. Tables — Bảng', durationMinutes: 45, status: 'not_started' },
      { id: 'les-css-18', title: '18. CSS cho Form', durationMinutes: 50, status: 'not_started' }
    ]
  },
  {
    id: 'mod-css-5',
    number: 5,
    track: 'css',
    title: 'Hệ thống Bố cục & Định vị từ Cơ bản đến Nâng cao',
    englishTitle: 'Positioning, Flexbox, Grid, Advanced Layout & Logical',
    description: 'Định vị 5 chế độ position và Stacking Context z-index; bố cục 1 chiều Flexbox; bố cục 2 chiều CSS Grid; kỹ thuật tiên tiến Subgrid, Masonry, Multi-column và thuộc tính logic chuẩn quốc tế hóa.',
    durationHours: 12,
    lessonsCount: 5,
    status: 'not_started',
    masteryPercentage: 0,
    lessons: [
      { id: 'les-css-19', title: '19. Position — Định vị', durationMinutes: 50, status: 'not_started' },
      { id: 'les-css-20', title: '20. Flexbox', durationMinutes: 55, status: 'not_started' },
      { id: 'les-css-21', title: '21. CSS Grid', durationMinutes: 60, status: 'not_started' },
      { id: 'les-css-22', title: '22. Layout nâng cao', durationMinutes: 50, status: 'not_started' },
      { id: 'les-css-23', title: '23. Logical Properties — Thuộc tính logic', durationMinutes: 45, status: 'not_started' }
    ]
  },
  {
    id: 'mod-css-6',
    number: 6,
    track: 'css',
    title: 'Chuyển động & Trải nghiệm Tương tác',
    englishTitle: 'Transforms, Transitions, Animations & Interactions',
    description: 'Biến đổi không gian 2D/3D Transform chạy trên GPU; chuyển tiếp mượt mà Transition; đạo diễn hoạt ảnh phức tạp @keyframes; tùy biến con trỏ chuột interaction và làm chủ hành vi cuộn trang scroll.',
    durationHours: 10,
    lessonsCount: 5,
    status: 'not_started',
    masteryPercentage: 0,
    lessons: [
      { id: 'les-css-24', title: '24. Transform — Biến đổi', durationMinutes: 50, status: 'not_started' },
      { id: 'les-css-25', title: '25. Transition — Chuyển tiếp', durationMinutes: 45, status: 'not_started' },
      { id: 'les-css-26', title: '26. Animation — Hoạt ảnh', durationMinutes: 55, status: 'not_started' },
      { id: 'les-css-27', title: '27. Cursor & User Interaction — Con trỏ & tương tác', durationMinutes: 40, status: 'not_started' },
      { id: 'les-css-28', title: '28. Scroll — Cuộn trang', durationMinutes: 45, status: 'not_started' }
    ]
  },
  {
    id: 'mod-css-7',
    number: 7,
    track: 'css',
    title: 'Thiết kế Đáp ứng & Tùy biến Người dùng',
    englishTitle: 'Responsive Web Design, Dark Mode & Print',
    description: 'Triết lý Mobile-First, Breakpoints chuẩn, Media Queries, Container Queries @container; tự động thích ứng Dark Mode, giảm giật prefers-reduced-motion và tối ưu hóa CSS cho in ấn Print/PDF.',
    durationHours: 8,
    lessonsCount: 3,
    status: 'not_started',
    masteryPercentage: 0,
    lessons: [
      { id: 'les-css-29', title: '29. Responsive Design — Thiết kế đáp ứng', durationMinutes: 55, status: 'not_started' },
      { id: 'les-css-30', title: '30. Dark Mode & User Preferences', durationMinutes: 45, status: 'not_started' },
      { id: 'les-css-31', title: '31. Print CSS — CSS cho in ấn', durationMinutes: 40, status: 'not_started' }
    ]
  },
  {
    id: 'mod-css-8',
    number: 8,
    track: 'css',
    title: 'Lập trình CSS Hiện đại & Trợ năng Tiếp cận',
    englishTitle: 'CSS Variables, Functions & Accessibility',
    description: 'Biến tùy biến Custom Properties (--var) phân tầng và đổi theme tức thì; các hàm toán học calc(), min(), max(), clamp(); tiêu chuẩn tiếp cận Web Accessibility (WCAG, :focus-visible, .sr-only).',
    durationHours: 8,
    lessonsCount: 3,
    status: 'not_started',
    masteryPercentage: 0,
    lessons: [
      { id: 'les-css-32', title: '32. CSS Variables — Biến CSS', durationMinutes: 50, status: 'not_started' },
      { id: 'les-css-33', title: '33. Functions — Hàm CSS', durationMinutes: 45, status: 'not_started' },
      { id: 'les-css-34', title: '34. Accessibility — Khả năng tiếp cận', durationMinutes: 45, status: 'not_started' }
    ]
  }
];
