import { Module, Lesson } from '../../types';
import { LESSON_HTML_1, LESSON_HTML_2, LESSON_HTML_3, LESSON_HTML_4 } from './html1to4';
import { LESSON_HTML_5, LESSON_HTML_6, LESSON_HTML_7, LESSON_HTML_8 } from './html5to8';
import { LESSON_HTML_9, LESSON_HTML_10, LESSON_HTML_11, LESSON_HTML_12 } from './html9to12';

export const ALL_HTML_LESSONS: Lesson[] = [
  LESSON_HTML_1,
  LESSON_HTML_2,
  LESSON_HTML_3,
  LESSON_HTML_4,
  LESSON_HTML_5,
  LESSON_HTML_6,
  LESSON_HTML_7,
  LESSON_HTML_8,
  LESSON_HTML_9,
  LESSON_HTML_10,
  LESSON_HTML_11,
  LESSON_HTML_12
];

export const HTML_MODULES: Module[] = [
  {
    id: 'mod-html-1',
    number: 1,
    track: 'html',
    title: 'Cấu trúc tài liệu',
    englishTitle: 'Document Structure & HTML Skeleton',
    description: 'Cơ chế giải phẫu thẻ element (thẻ mở, nội dung, thẻ đóng), thuộc tính (attributes), thẻ tự đóng void elements, và bộ khung chuẩn <!DOCTYPE html>, <html>, <head>, <body>.',
    durationHours: 4,
    lessonsCount: 1,
    status: 'completed',
    masteryPercentage: 95,
    lessons: [
      { id: 'les-html-1', title: 'HTML 1. Cấu trúc tài liệu (Document Structure)', durationMinutes: 40, status: 'completed' }
    ]
  },
  {
    id: 'mod-html-2',
    number: 2,
    track: 'html',
    title: 'Metadata & tài nguyên',
    englishTitle: 'Document Metadata, SEO & Resources',
    description: 'Khai báo bảng mã ký tự UTF-8, cấu hình Viewport chuẩn Mobile Responsive, tiêu đề <title>, thẻ meta SEO & OpenGraph Social Cards, liên kết CSS <link> và nhúng script defer.',
    durationHours: 4,
    lessonsCount: 1,
    status: 'in_progress',
    masteryPercentage: 80,
    lessons: [
      { id: 'les-html-2', title: 'HTML 2. Metadata & tài nguyên (Metadata & Resources)', durationMinutes: 45, status: 'in_progress' }
    ]
  },
  {
    id: 'mod-html-3',
    number: 3,
    track: 'html',
    title: 'Tiêu đề & nội dung văn bản',
    englishTitle: 'Headings, Paragraphs & Text Content',
    description: 'Phân cấp thứ bậc tiêu đề từ <h1> đến <h6> chuẩn SEO, đoạn văn <p>, ngắt dòng <br>, đường phân cách chủ đề <hr>, văn bản nguyên gốc <pre> và trích dẫn <blockquote>.',
    durationHours: 4,
    lessonsCount: 1,
    status: 'not_started',
    masteryPercentage: 0,
    lessons: [
      { id: 'les-html-3', title: 'HTML 3. Tiêu đề & nội dung văn bản (Headings & Text Content)', durationMinutes: 40, status: 'not_started' }
    ]
  },
  {
    id: 'mod-html-4',
    number: 4,
    track: 'html',
    title: 'Định dạng & ý nghĩa văn bản',
    englishTitle: 'Text Formatting & Inline Semantics',
    description: 'Phân biệt thẻ ngữ nghĩa <strong> vs <b> và <em> vs <i>; sử dụng <mark> tô sáng, <del> & <ins> giá khuyến mãi, <code>, <kbd> phím bấm, <sub>/<sup> và từ viết tắt <abbr>.',
    durationHours: 4,
    lessonsCount: 1,
    status: 'not_started',
    masteryPercentage: 0,
    lessons: [
      { id: 'les-html-4', title: 'HTML 4. Định dạng & ý nghĩa văn bản (Text Formatting & Semantics)', durationMinutes: 45, status: 'not_started' }
    ]
  },
  {
    id: 'mod-html-5',
    number: 5,
    track: 'html',
    title: 'Liên kết & điều hướng',
    englishTitle: 'Hyperlinks, Navigation & Protocols',
    description: 'Thẻ neo <a>, thuộc tính href tuyệt đối/tương đối, mở tab mới an toàn với target="_blank" và rel="noopener noreferrer", liên kết nhảy neo (#id), giao thức gọi điện tel: và gửi thư mailto:.',
    durationHours: 4,
    lessonsCount: 1,
    status: 'not_started',
    masteryPercentage: 0,
    lessons: [
      { id: 'les-html-5', title: 'HTML 5. Liên kết & điều hướng (Links & Navigation)', durationMinutes: 45, status: 'not_started' }
    ]
  },
  {
    id: 'mod-html-6',
    number: 6,
    track: 'html',
    title: 'Hình ảnh & nội dung đa phương tiện',
    englishTitle: 'Images, Audio, Video & Figures',
    description: 'Thẻ <img> chuẩn trợ năng với alt, chống giật layout với width/height, tối ưu tải lười loading="lazy", thẻ đáp ứng <picture>, nhóm ảnh <figure>/<figcaption> và video/audio bản địa.',
    durationHours: 5,
    lessonsCount: 1,
    status: 'not_started',
    masteryPercentage: 0,
    lessons: [
      { id: 'les-html-6', title: 'HTML 6. Hình ảnh & nội dung đa phương tiện (Images & Multimedia)', durationMinutes: 50, status: 'not_started' }
    ]
  },
  {
    id: 'mod-html-7',
    number: 7,
    track: 'html',
    title: 'Danh sách',
    englishTitle: 'Lists: Unordered, Ordered & Description',
    description: 'Danh sách bullet <ul>, danh sách các bước có thứ tự <ol> (type, start, reversed), danh sách từ điển thuật ngữ và thông số <dl>, <dt>, <dd>, kỹ thuật lồng danh sách đa tầng.',
    durationHours: 4,
    lessonsCount: 1,
    status: 'not_started',
    masteryPercentage: 0,
    lessons: [
      { id: 'les-html-7', title: 'HTML 7. Danh sách (Lists: ul, ol, dl)', durationMinutes: 40, status: 'not_started' }
    ]
  },
  {
    id: 'mod-html-8',
    number: 8,
    track: 'html',
    title: 'Bảng',
    englishTitle: 'Tables: Tabular Data & Merging Cells',
    description: 'Cấu trúc bảng ngữ nghĩa: <table>, <caption>, <thead>, <tbody>, <tfoot>, hàng <tr>, ô tiêu đề <th> có scope, ô dữ liệu <td>, kỹ thuật gộp ô ngang colspan và gộp ô dọc rowspan.',
    durationHours: 5,
    lessonsCount: 1,
    status: 'not_started',
    masteryPercentage: 0,
    lessons: [
      { id: 'les-html-8', title: 'HTML 8. Bảng dữ liệu (Tables: thead, tbody, colspan, rowspan)', durationMinutes: 50, status: 'not_started' }
    ]
  },
  {
    id: 'mod-html-9',
    number: 9,
    track: 'html',
    title: 'Form & nhập liệu',
    englishTitle: 'Forms, Modern Inputs & Validation',
    description: 'Thẻ <form action method="POST">, cặp đôi vàng <label for> và <input id>, các input types hiện đại, textarea, select dropdown, gom nhóm fieldset/legend, kiểm thực dữ liệu HTML5.',
    durationHours: 6,
    lessonsCount: 1,
    status: 'not_started',
    masteryPercentage: 0,
    lessons: [
      { id: 'les-html-9', title: 'HTML 9. Form & nhập liệu (Forms, Inputs & Validation)', durationMinutes: 55, status: 'not_started' }
    ]
  },
  {
    id: 'mod-html-10',
    number: 10,
    track: 'html',
    title: 'Semantic HTML — cấu trúc trang',
    englishTitle: 'Semantic Page Layout & Accessibility',
    description: 'Bản chất Semantic Web chống "Div Soup", các Landmark tags: <header>, <nav>, <main>, <footer>; phân định chính xác <article> độc lập, <section> chuyên đề và <aside> thanh bên.',
    durationHours: 5,
    lessonsCount: 1,
    status: 'not_started',
    masteryPercentage: 0,
    lessons: [
      { id: 'les-html-10', title: 'HTML 10. Semantic HTML — cấu trúc trang (Semantic Page Layout)', durationMinutes: 50, status: 'not_started' }
    ]
  },
  {
    id: 'mod-html-11',
    number: 11,
    track: 'html',
    title: 'Phần tử chứa & phân vùng',
    englishTitle: 'Containers: Div, Span & Display Rules',
    description: 'Cơ chế hiển thị: Phần tử khối (Block) chiếm 100% chiều ngang vs Phần tử nội dòng (Inline), vai trò của <div> làm Wrapper bố cục và <span> tạo kiểu cục bộ, quy tắc chọn thẻ.',
    durationHours: 4,
    lessonsCount: 1,
    status: 'not_started',
    masteryPercentage: 0,
    lessons: [
      { id: 'les-html-11', title: 'HTML 11. Phần tử chứa & phân vùng (Containers: div, span & display)', durationMinutes: 45, status: 'not_started' }
    ]
  },
  {
    id: 'mod-html-12',
    number: 12,
    track: 'html',
    title: 'Đồ họa & Thẻ nhúng',
    englishTitle: 'Graphics, SVG, Canvas & Iframe',
    description: 'Nhúng trang web và dịch vụ an toàn với <iframe> (sandbox, allowfullscreen), đồ họa vector dạng mã nguồn <svg> (rect, circle, text), vẽ đồ họa kịch bản <canvas> và so sánh.',
    durationHours: 6,
    lessonsCount: 1,
    status: 'not_started',
    masteryPercentage: 0,
    lessons: [
      { id: 'les-html-12', title: 'HTML 12. Đồ họa & Thẻ nhúng (Graphics, SVG, Canvas, Iframe)', durationMinutes: 55, status: 'not_started' }
    ]
  }
];

export {
  LESSON_HTML_1,
  LESSON_HTML_2,
  LESSON_HTML_3,
  LESSON_HTML_4,
  LESSON_HTML_5,
  LESSON_HTML_6,
  LESSON_HTML_7,
  LESSON_HTML_8,
  LESSON_HTML_9,
  LESSON_HTML_10,
  LESSON_HTML_11,
  LESSON_HTML_12
};
