import { Module, CurriculumTrack } from '../types';
import { HTML_MODULES } from './htmlLessons';
import { CSS_MODULES } from './cssLessonsData';

export const JS_MODULES: Module[] = [
  {
    id: 'mod-1',
    number: 1,
    track: 'javascript',
    title: 'Tổng quan JavaScript',
    englishTitle: 'JavaScript Overview & Environment',
    description: 'Bản chất JavaScript, môi trường thực thi trình duyệt & Node.js, console API, nhúng script, cú pháp và debug cơ bản.',
    durationHours: 6,
    lessonsCount: 4,
    status: 'completed',
    masteryPercentage: 95,
    lessons: [
      { id: 'les-1-1', title: '1.1 JavaScript là gì & Chạy ở đâu?', durationMinutes: 30, status: 'completed' },
      { id: 'les-1-2', title: '1.2 Cách nhúng JavaScript vào trang Web', durationMinutes: 30, status: 'completed' },
      { id: 'les-1-3', title: '1.3 Làm chủ DevTools Console & Câu lệnh đầu tiên', durationMinutes: 45, status: 'completed' },
      { id: 'les-1-4', title: '1.4 Comment chuẩn & Kỹ năng Debug lỗi cú pháp cơ bản', durationMinutes: 45, status: 'completed' }
    ]
  },
  {
    id: 'mod-2',
    number: 2,
    title: 'Biến và kiểu dữ liệu',
    englishTitle: 'Variables & Data Types',
    description: 'Phân biệt let, const, var; kiểu dữ liệu nguyên thủy (Primitive) và tham chiếu (Reference); typeof, ép kiểu và template literals.',
    durationHours: 8,
    lessonsCount: 5,
    status: 'in_progress',
    masteryPercentage: 78,
    lessons: [
      { id: 'les-2-1', title: '2.1 Khai báo biến với let, const và var', durationMinutes: 45, status: 'completed' },
      { id: 'les-2-2', title: '2.2 Các kiểu dữ liệu nguyên thủy (Number, String, Boolean, null, undefined)', durationMinutes: 50, status: 'in_progress' },
      { id: 'les-2-3', title: '2.3 Toán tử typeof và cơ chế kiểm tra kiểu', durationMinutes: 35, status: 'needs_review' },
      { id: 'les-2-4', title: '2.4 Ép kiểu tường minh (Explicit) & ngầm định (Implicit Coercion)', durationMinutes: 50, status: 'not_started' },
      { id: 'les-2-5', title: '2.5 Template Literals và nội suy chuỗi hiện đại', durationMinutes: 40, status: 'not_started' }
    ]
  },
  {
    id: 'mod-3',
    number: 3,
    title: 'Toán tử và biểu thức',
    englishTitle: 'Operators & Expressions',
    description: 'Toán tử số học, gán, so sánh nghiêm ngặt (=== vs ==), logic (&&, ||, !), cơ chế ngắn mạch (short-circuit), toán tử tiền/hậu tố, Truthy & Falsy.',
    durationHours: 8,
    lessonsCount: 4,
    status: 'not_started',
    masteryPercentage: 0,
    lessons: [
      { id: 'les-3-1', title: '3.1 Toán tử số học & Gán giá trị', durationMinutes: 40, status: 'not_started' },
      { id: 'les-3-2', title: '3.2 So sánh nghiêm ngặt (=== vs ==) & Thứ tự ưu tiên', durationMinutes: 50, status: 'not_started' },
      { id: 'les-3-3', title: '3.3 Toán tử logic & Cơ chế Short-circuiting', durationMinutes: 45, status: 'not_started' },
      { id: 'les-3-4', title: '3.4 Hiểu sâu khái niệm Truthy và Falsy trong JS', durationMinutes: 45, status: 'not_started' }
    ]
  },
  {
    id: 'mod-4',
    number: 4,
    title: 'Cấu trúc điều khiển',
    englishTitle: 'Control Flow & Conditionals',
    description: 'Câu lệnh if, if...else, else if; switch-case tối ưu và toán tử ba ngôi (Ternary Operator) viết mã sạch.',
    durationHours: 6,
    lessonsCount: 3,
    status: 'not_started',
    masteryPercentage: 0,
    lessons: [
      { id: 'les-4-1', title: '4.1 Rẽ nhánh với if, if...else và else if lồng nhau', durationMinutes: 45, status: 'not_started' },
      { id: 'les-4-2', title: '4.2 Cấu trúc switch-case và fall-through xử lý menu', durationMinutes: 45, status: 'not_started' },
      { id: 'les-4-3', title: '4.3 Toán tử 3 ngôi (Ternary) & Quy chuẩn Clean Code', durationMinutes: 30, status: 'not_started' }
    ]
  },
  {
    id: 'mod-5',
    number: 5,
    title: 'Vòng lặp',
    englishTitle: 'Loops & Iterations',
    description: 'Vòng lặp for, while, do...while; lệnh break/continue; xử lý mảng và thuật toán duyệt cơ bản.',
    durationHours: 8,
    lessonsCount: 4,
    status: 'not_started',
    masteryPercentage: 0,
    lessons: [
      { id: 'les-5-1', title: '5.1 Vòng lặp for kinh điển và các biến thể', durationMinutes: 50, status: 'not_started' },
      { id: 'les-5-2', title: '5.2 Vòng lặp while và do...while khi chưa biết số lần lặp', durationMinutes: 45, status: 'not_started' },
      { id: 'les-5-3', title: '5.3 Điều khiển luồng lặp với break và continue', durationMinutes: 35, status: 'not_started' },
      { id: 'les-5-4', title: '5.4 Vòng lặp lồng nhau (Nested Loops) & Vẽ mẫu ma trận', durationMinutes: 60, status: 'not_started' }
    ]
  },
  {
    id: 'mod-6',
    number: 6,
    title: 'Hàm',
    englishTitle: 'Functions & Scope',
    description: 'Function declaration, function expression, Arrow function; parameters, arguments, return; default parameters và phạm vi biến (Scope).',
    durationHours: 10,
    lessonsCount: 5,
    status: 'not_started',
    masteryPercentage: 0,
    lessons: [
      { id: 'les-6-1', title: '6.1 Khai báo hàm (Function Declaration) & Hoisting', durationMinutes: 45, status: 'not_started' },
      { id: 'les-6-2', title: '6.2 Function Expression & Arrow Function hiện đại', durationMinutes: 50, status: 'not_started' },
      { id: 'les-6-3', title: '6.3 Tham số (Parameters), Đối số (Arguments) & Giá trị mặc định', durationMinutes: 45, status: 'not_started' },
      { id: 'les-6-4', title: '6.4 Giá trị trả về (return statement) & Early Return pattern', durationMinutes: 40, status: 'not_started' },
      { id: 'les-6-5', title: '6.5 Phạm vi biến: Global scope, Function scope và Block scope', durationMinutes: 55, status: 'not_started' }
    ]
  },
  {
    id: 'mod-7',
    number: 7,
    title: 'Array (Mảng)',
    englishTitle: 'Arrays & Array Methods',
    description: 'Tạo mảng, thêm/xóa phần tử (push, pop, shift, unshift, splice); duyệt mảng với for...of; làm chủ các phương thức xử lý mảng cao cấp: map, filter, find, reduce, some, every.',
    durationHours: 12,
    lessonsCount: 5,
    status: 'not_started',
    masteryPercentage: 0,
    lessons: [
      { id: 'les-7-1', title: '7.1 Khởi tạo mảng, chỉ số Index và các phương thức căn bản', durationMinutes: 50, status: 'not_started' },
      { id: 'les-7-2', title: '7.2 Duyệt mảng bằng for...of và forEach', durationMinutes: 45, status: 'not_started' },
      { id: 'les-7-3', title: '7.3 Biến đổi & Lọc dữ liệu với map(), filter(), find()', durationMinutes: 60, status: 'not_started' },
      { id: 'les-7-4', title: '7.4 Gom nhóm & Tính toán lũy kế với reduce()', durationMinutes: 65, status: 'not_started' },
      { id: 'les-7-5', title: '7.5 Kiểm tra điều kiện danh sách với some() và every()', durationMinutes: 40, status: 'not_started' }
    ]
  },
  {
    id: 'mod-8',
    number: 8,
    title: 'Object (Đối tượng)',
    englishTitle: 'Objects & Object Methods',
    description: 'Khai báo Object literal, properties và methods; Dot notation vs Bracket notation; thêm/xóa/sửa thuộc tính; Destructuring và lồng nhau.',
    durationHours: 10,
    lessonsCount: 4,
    status: 'not_started',
    masteryPercentage: 0,
    lessons: [
      { id: 'les-8-1', title: '8.1 Cấu trúc Object, Khóa (Key) và Giá trị (Value)', durationMinutes: 45, status: 'not_started' },
      { id: 'les-8-2', title: '8.2 Truy xuất, Thêm, Sửa, Xóa thuộc tính & từ khóa this', durationMinutes: 50, status: 'not_started' },
      { id: 'les-8-3', title: '8.3 Object Destructuring & Shorthand Syntax', durationMinutes: 45, status: 'not_started' },
      { id: 'les-8-4', title: '8.4 Làm việc với Object lồng nhau và Object.keys/values/entries', durationMinutes: 50, status: 'not_started' }
    ]
  },
  {
    id: 'mod-9',
    number: 9,
    title: 'String, Number và Date',
    englishTitle: 'Built-in Objects: String, Number & Date',
    description: 'Xử lý chuỗi (includes, slice, split, replace, trim); phương thức toán học Math; xử lý ngày tháng thời gian Date thực tế.',
    durationHours: 8,
    lessonsCount: 4,
    status: 'not_started',
    masteryPercentage: 0,
    lessons: [
      { id: 'les-9-1', title: '9.1 Các phương thức xử lý chuỗi (String manipulation)', durationMinutes: 50, status: 'not_started' },
      { id: 'les-9-2', title: '9.2 Làm việc với Số, Number methods và Math object', durationMinutes: 45, status: 'not_started' },
      { id: 'les-9-3', title: '9.3 Đối tượng Date: Định dạng, So sánh và Tính khoảng cách ngày', durationMinutes: 55, status: 'not_started' },
      { id: 'les-9-4', title: '9.4 Mini Exercise: Xử lý hóa đơn và tính ngày hết hạn', durationMinutes: 45, status: 'not_started' }
    ]
  },
  {
    id: 'mod-10',
    number: 10,
    title: 'DOM (Document Object Model)',
    englishTitle: 'DOM Manipulation',
    description: 'Cây DOM, truy vấn phần tử (querySelector, querySelectorAll); thay đổi textContent, innerHTML, classList, thuộc tính; tạo và xóa thẻ HTML bằng JS.',
    durationHours: 12,
    lessonsCount: 5,
    status: 'not_started',
    masteryPercentage: 0,
    lessons: [
      { id: 'les-10-1', title: '10.1 Khái niệm cây DOM & Cấu trúc Node', durationMinutes: 40, status: 'not_started' },
      { id: 'les-10-2', title: '10.2 Lựa chọn phần tử bằng querySelector & querySelectorAll', durationMinutes: 50, status: 'not_started' },
      { id: 'les-10-3', title: '10.3 Thay đổi nội dung: textContent vs innerHTML vs innerText', durationMinutes: 45, status: 'not_started' },
      { id: 'les-10-4', title: '10.4 Điều khiển giao diện qua classList (add, remove, toggle)', durationMinutes: 45, status: 'not_started' },
      { id: 'les-10-5', title: '10.5 Tạo phần tử động với createElement và appendChild', durationMinutes: 60, status: 'not_started' }
    ]
  },
  {
    id: 'mod-11',
    number: 11,
    title: 'Event (Sự kiện)',
    englishTitle: 'Event Handling & Delegation',
    description: 'Lắng nghe sự kiện người dùng (click, input, change, submit); Event object (e.target, e.preventDefault); Event Delegation tối ưu hiệu năng.',
    durationHours: 10,
    lessonsCount: 4,
    status: 'not_started',
    masteryPercentage: 0,
    lessons: [
      { id: 'les-11-1', title: '11.1 addEventListener và vòng đời sự kiện', durationMinutes: 50, status: 'not_started' },
      { id: 'les-11-2', title: '11.2 Các sự kiện phổ biến: click, input, change, keydown', durationMinutes: 50, status: 'not_started' },
      { id: 'les-11-3', title: '11.3 Khám phá Event Object: target, preventDefault, stopPropagation', durationMinutes: 45, status: 'not_started' },
      { id: 'les-11-4', title: '11.4 Kỹ thuật Event Delegation cho danh sách phần tử động', durationMinutes: 55, status: 'not_started' }
    ]
  },
  {
    id: 'mod-12',
    number: 12,
    title: 'Form và Validation',
    englishTitle: 'Form Processing & Validation',
    description: 'Trích xuất dữ liệu form; xây dựng bộ quy tắc kiểm tra (validation); hiển thị thông báo lỗi trực quan; xử lý submit không reload trang.',
    durationHours: 10,
    lessonsCount: 4,
    status: 'not_started',
    masteryPercentage: 0,
    lessons: [
      { id: 'les-12-1', title: '12.1 Thu thập dữ liệu Form và chặn reload với e.preventDefault()', durationMinutes: 45, status: 'not_started' },
      { id: 'les-12-2', title: '12.2 Kiểm tra dữ liệu bắt buộc (Required, MinLength, Email Regex)', durationMinutes: 55, status: 'not_started' },
      { id: 'les-12-3', title: '12.3 Thiết kế thông báo lỗi (Error UI Feedback) thân thiện', durationMinutes: 45, status: 'not_started' },
      { id: 'les-12-4', title: '12.4 Xây dựng module Form Validator tái sử dụng', durationMinutes: 60, status: 'not_started' }
    ]
  },
  {
    id: 'mod-13',
    number: 13,
    title: 'JavaScript nâng cao',
    englishTitle: 'Advanced JavaScript Concepts',
    description: 'Phạm vi biến sâu (Lexical Scope), Hoisting, Closure ứng dụng thực tế, Callback, Higher-Order Functions, Spread/Rest và ES Modules (import/export).',
    durationHours: 12,
    lessonsCount: 5,
    status: 'not_started',
    masteryPercentage: 0,
    lessons: [
      { id: 'les-13-1', title: '13.1 Lexical Scope & Cơ chế Hoisting chi tiết', durationMinutes: 50, status: 'not_started' },
      { id: 'les-13-2', title: '13.2 Hiểu và ứng dụng Closure trong bảo toàn trạng thái', durationMinutes: 60, status: 'not_started' },
      { id: 'les-13-3', title: '13.3 Callback & Higher-Order Functions', durationMinutes: 50, status: 'not_started' },
      { id: 'les-13-4', title: '13.4 Toán tử Spread (...) và Rest Parameters', durationMinutes: 45, status: 'not_started' },
      { id: 'les-13-5', title: '13.5 ES Modules: Tách file với import và export', durationMinutes: 45, status: 'not_started' }
    ]
  },
  {
    id: 'mod-14',
    number: 14,
    title: 'Asynchronous JavaScript',
    englishTitle: 'Asynchronous Programming',
    description: 'Mô hình đơn luồng (Single-thread), Event Loop; setTimeout/setInterval; Callback Hell; làm chủ Promise và cú pháp async/await với try/catch.',
    durationHours: 12,
    lessonsCount: 5,
    status: 'not_started',
    masteryPercentage: 0,
    lessons: [
      { id: 'les-14-1', title: '14.1 Đồng bộ (Sync) vs Bất đồng bộ (Async) & Event Loop', durationMinutes: 50, status: 'not_started' },
      { id: 'les-14-2', title: '14.2 Timer API: setTimeout & setInterval trong thực tế', durationMinutes: 45, status: 'not_started' },
      { id: 'les-14-3', title: '14.3 Promise: Các trạng thái (Pending, Fulfilled, Rejected)', durationMinutes: 55, status: 'not_started' },
      { id: 'les-14-4', title: '14.4 async/await hiện đại và xử lý lỗi với try/catch', durationMinutes: 55, status: 'not_started' },
      { id: 'les-14-5', title: '14.5 Chạy song song nhiều tác vụ với Promise.all()', durationMinutes: 45, status: 'not_started' }
    ]
  },
  {
    id: 'mod-15',
    number: 15,
    title: 'Fetch API và làm việc với dữ liệu',
    englishTitle: 'Fetch API & RESTful Data',
    description: 'Giao thức HTTP cơ bản (GET, POST, PUT, DELETE); định dạng JSON; gửi request bằng fetch(); xử lý response JSON và bắt lỗi mạng.',
    durationHours: 12,
    lessonsCount: 4,
    status: 'not_started',
    masteryPercentage: 0,
    lessons: [
      { id: 'les-15-1', title: '15.1 Kiến trúc Client-Server, HTTP Request & Định dạng JSON', durationMinutes: 45, status: 'not_started' },
      { id: 'les-15-2', title: '15.2 Lấy dữ liệu với fetch() và phương thức GET', durationMinutes: 55, status: 'not_started' },
      { id: 'les-15-3', title: '15.3 Gửi dữ liệu lên máy chủ với phương thức POST', durationMinutes: 55, status: 'not_started' },
      { id: 'les-15-4', title: '15.4 Xử lý trạng thái Loading & Error Handling chuyên nghiệp', durationMinutes: 50, status: 'not_started' }
    ]
  },
  {
    id: 'mod-16',
    number: 16,
    title: 'Local Storage',
    englishTitle: 'Client-side Storage',
    description: 'Phân biệt localStorage và sessionStorage; tuần tự hóa đối tượng với JSON.stringify và JSON.parse; duy trì dữ liệu ứng dụng sau khi F5 trang.',
    durationHours: 8,
    lessonsCount: 3,
    status: 'not_started',
    masteryPercentage: 0,
    lessons: [
      { id: 'les-16-1', title: '16.1 localStorage vs sessionStorage & Giới hạn lưu trữ', durationMinutes: 40, status: 'not_started' },
      { id: 'les-16-2', title: '16.2 Lưu & Đọc cấu trúc dữ liệu với JSON.stringify / parse', durationMinutes: 50, status: 'not_started' },
      { id: 'les-16-3', title: '16.3 Xây dựng tính năng lưu Theme (Dark/Light) và Giỏ hàng', durationMinutes: 55, status: 'not_started' }
    ]
  },
  {
    id: 'mod-17',
    number: 17,
    title: 'JavaScript thực tế (Mini Projects)',
    englishTitle: 'Real-world Practical Mini Projects',
    description: 'Thực hành dự án tích hợp trọn vẹn: Máy tính bỏ túi (Calculator), Todo List CRUD có lưu trữ, Ứng dụng thi Quiz, Quản lý sinh viên và Ứng dụng thời tiết gọi API ngoài.',
    durationHours: 20,
    lessonsCount: 6,
    status: 'not_started',
    masteryPercentage: 0,
    lessons: [
      { id: 'les-17-1', title: '17.1 Mini Project 1: Máy tính bỏ túi (Interactive Calculator)', durationMinutes: 90, status: 'not_started' },
      { id: 'les-17-2', title: '17.2 Mini Project 2: Todo List CRUD có Local Storage', durationMinutes: 120, status: 'not_started' },
      { id: 'les-17-3', title: '17.3 Mini Project 3: Ứng dụng thi trắc nghiệm (Interactive Quiz App)', durationMinutes: 100, status: 'not_started' },
      { id: 'les-17-4', title: '17.4 Mini Project 4: Form đăng ký nâng cao với Live Validation', durationMinutes: 90, status: 'not_started' },
      { id: 'les-17-5', title: '17.5 Mini Project 5: Weather Dashboard kết nối OpenWeather API', durationMinutes: 120, status: 'not_started' },
      { id: 'les-17-6', title: '17.6 Capstone Project: Hệ thống Quản lý Sinh viên (Student Management)', durationMinutes: 150, status: 'not_started' }
    ]
  }
];

export interface TrackInfo {
  id: CurriculumTrack;
  name: string;
  shortName: string;
  order: number;
  description: string;
  badge: string;
  color: string;
  borderColor: string;
  bgColor: string;
  modulesCount: number;
  lessonsCount: number;
  durationHours: number;
}

export const CURRICULUM_TRACKS: TrackInfo[] = [
  {
    id: 'html',
    name: '1. HTML — Cấu trúc & Đánh dấu Siêu văn bản',
    shortName: 'HTML5',
    order: 1,
    description: 'Xây dựng bộ khung sườn trang web vững chắc, làm chủ 12 chủ đề cốt lõi từ Cấu trúc, Metadata, Text, Links, Media, Tables, Forms đến Semantic & Đồ họa.',
    badge: '12 Chủ đề Tutorials',
    color: 'text-orange-600',
    borderColor: 'border-orange-200',
    bgColor: 'bg-orange-500',
    modulesCount: 12,
    lessonsCount: 12,
    durationHours: 55
  },
  {
    id: 'css',
    name: '2. CSS — Định kiểu & Thiết kế Giao diện',
    shortName: 'CSS3',
    order: 2,
    description: 'Định kiểu thẩm mỹ, làm chủ Box Model, Flexbox, CSS Grid, Typography, Responsive Web Design và chuyển động mượt mà.',
    badge: '8 Chuyên đề Chuẩn',
    color: 'text-blue-600',
    borderColor: 'border-blue-200',
    bgColor: 'bg-blue-500',
    modulesCount: 8,
    lessonsCount: 26,
    durationHours: 64
  },
  {
    id: 'javascript',
    name: '3. JavaScript — Lập trình Tương tác & Logic',
    shortName: 'JavaScript ES6+',
    order: 3,
    description: 'Lập trình logic tương tác, DOM Manipulation, Event Handling, Bất đồng bộ Async/Await, Fetch API và 6 Mini Projects thực chiến.',
    badge: '17 Modules Thực chiến',
    color: 'text-amber-600',
    borderColor: 'border-amber-200',
    bgColor: 'bg-amber-500',
    modulesCount: 17,
    lessonsCount: 75,
    durationHours: 90
  }
];

export const CURRICULUM_MODULES: Module[] = [
  ...HTML_MODULES,
  ...CSS_MODULES,
  ...JS_MODULES
];

export function getModulesByTrack(track: CurriculumTrack): Module[] {
  if (track === 'html') return HTML_MODULES;
  if (track === 'css') return CSS_MODULES;
  return JS_MODULES;
}

export { HTML_MODULES, CSS_MODULES };
