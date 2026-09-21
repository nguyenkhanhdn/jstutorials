import { 
  ObjectiveMastery, 
  CohortBenchmark, 
  StudentIntervention, 
  MisconceptionDiagnostic 
} from '../types';

export const MOCK_OBJECTIVE_MASTERIES: ObjectiveMastery[] = [
  {
    code: 'LO2.1',
    title: 'Phân biệt khai báo biến với let, const và var',
    moduleName: 'Module 2 – Biến & Kiểu dữ liệu',
    bloomLevel: 'Understand',
    avgMastery: 89,
    passingRate: 94,
    atRiskCount: 2,
    recommendation: 'Sinh viên nắm tốt quy tắc TDZ cơ bản. Duy trì cho làm bài kiểm tra nhanh đầu giờ.'
  },
  {
    code: 'LO2.2',
    title: 'Hiểu và kiểm tra kiểu dữ liệu nguyên thủy & tham chiếu',
    moduleName: 'Module 2 – Biến & Kiểu dữ liệu',
    bloomLevel: 'Remember',
    avgMastery: 84,
    passingRate: 88,
    atRiskCount: 4,
    recommendation: 'Lưu ý sinh viên trường hợp đặc biệt `typeof null === "object"`.'
  },
  {
    code: 'LO2.3',
    title: 'Quy tắc ép kiểu ngầm định (Type Coercion) và so sánh nghiêm ngặt ===',
    moduleName: 'Module 2 – Biến & Kiểu dữ liệu',
    bloomLevel: 'Analyze',
    avgMastery: 54,
    passingRate: 58,
    atRiskCount: 14,
    recommendation: 'Nút thắt nghiêm trọng. Tổ chức 20 phút giải thích bảng Truthy/Falsy và bài tập Console.'
  },
  {
    code: 'LO2.4',
    title: 'Phạm vi biến (Block scope, Function scope, Global scope)',
    moduleName: 'Module 2 – Biến & Kiểu dữ liệu',
    bloomLevel: 'Apply',
    avgMastery: 62,
    passingRate: 67,
    atRiskCount: 11,
    recommendation: 'Minh họa trực quan hình ảnh các hộp lồng nhau (Scope Chaining) trong Slide bài giảng.'
  },
  {
    code: 'LO3.1',
    title: 'Cấu trúc điều kiện if/else và toán tử 3 ngôi (Ternary Operator)',
    moduleName: 'Module 3 – Cấu trúc điều khiển',
    bloomLevel: 'Apply',
    avgMastery: 91,
    passingRate: 96,
    atRiskCount: 1,
    recommendation: 'Tốt. Sinh viên vận dụng tốt trong các bài toán phân loại điểm số.'
  },
  {
    code: 'LO3.2',
    title: 'Vòng lặp for, while và break/continue tối ưu thuật toán',
    moduleName: 'Module 3 – Cấu trúc điều khiển',
    bloomLevel: 'Apply',
    avgMastery: 73,
    passingRate: 78,
    atRiskCount: 7,
    recommendation: 'Chú ý nhắc nhở điều kiện dừng để tránh vòng lặp vô tận (Infinite Loop) làm treo trình duyệt.'
  },
  {
    code: 'LO7.1',
    title: 'Các phương thức biến đổi mảng map(), filter(), find()',
    moduleName: 'Module 7 – Mảng nâng cao',
    bloomLevel: 'Apply',
    avgMastery: 78,
    passingRate: 82,
    atRiskCount: 6,
    recommendation: 'Sinh viên làm quen tốt với tư duy hàm thuần khiết (Immutability).'
  },
  {
    code: 'LO7.2',
    title: 'Phương thức reduce() để tính toán tích lũy và gom nhóm mảng',
    moduleName: 'Module 7 – Mảng nâng cao',
    bloomLevel: 'Analyze',
    avgMastery: 47,
    passingRate: 51,
    atRiskCount: 16,
    recommendation: 'Nút thắt phân hóa học sinh. Cần bài tập bước nhỏ vẽ bảng accumulator qua từng vòng lặp.'
  },
  {
    code: 'LO11.1',
    title: 'Xử lý sự kiện và kỹ thuật Event Delegation với closest()',
    moduleName: 'Module 11 – DOM & Sự kiện',
    bloomLevel: 'Analyze',
    avgMastery: 68,
    passingRate: 72,
    atRiskCount: 9,
    recommendation: 'Thực hành bài toán giỏ hàng (Shopping Cart) thêm/xóa dòng động để thấy lợi ích delegation.'
  },
  {
    code: 'LO14.1',
    title: 'Lập trình bất đồng bộ: Promise, async/await và xử lý lỗi try/catch',
    moduleName: 'Module 14 – Bất đồng bộ (Async)',
    bloomLevel: 'Evaluate',
    avgMastery: 52,
    passingRate: 55,
    atRiskCount: 15,
    recommendation: 'Giải thích nguyên lý Event Loop (Call Stack, Web API, Task Queue, Microtask Queue).'
  }
];

export const MOCK_COHORTS: CohortBenchmark[] = [
  {
    classId: 'wd18301',
    className: 'WD18301 (Lớp hiện tại)',
    teacherName: 'ThS. Nguyễn Văn Khánh',
    schedule: 'Ca 1 (07:15 - 09:15) Thứ 2-4-6',
    studentCount: 32,
    avgProgress: 76,
    avgQuizScore: 81,
    atRiskCount: 4,
    activeRate: 91,
    topWeakObjective: 'LO2.3 Ép kiểu ngầm định'
  },
  {
    classId: 'wd18302',
    className: 'WD18302 (Lớp Chiều)',
    teacherName: 'ThS. Trần Hoàng Nam',
    schedule: 'Ca 4 (13:30 - 15:30) Thứ 2-4-6',
    studentCount: 30,
    avgProgress: 64,
    avgQuizScore: 72,
    atRiskCount: 7,
    activeRate: 83,
    topWeakObjective: 'LO7.2 Mảng reduce()'
  },
  {
    classId: 'wd18303',
    className: 'WD18303 (Lớp Tối)',
    teacherName: 'ThS. Lê Thị Mai',
    schedule: 'Ca 6 (17:45 - 19:45) Thứ 3-5-7',
    studentCount: 34,
    avgProgress: 58,
    avgQuizScore: 68,
    atRiskCount: 9,
    activeRate: 77,
    topWeakObjective: 'LO14.1 Bất đồng bộ'
  },
  {
    classId: 'wd18304',
    className: 'WD18304 (Lớp Tài năng)',
    teacherName: 'TS. Vũ Đình Tuấn',
    schedule: 'Ca 2 (09:30 - 11:30) Thứ 3-5-7',
    studentCount: 28,
    avgProgress: 88,
    avgQuizScore: 89,
    atRiskCount: 1,
    activeRate: 96,
    topWeakObjective: 'LO14.1 Bất đồng bộ'
  }
];

export const MOCK_STUDENT_INTERVENTIONS: StudentIntervention[] = [
  {
    id: 'int-1',
    studentId: 'sv-02',
    studentName: 'Trần Thị Bích Ngọc',
    studentCode: 'PS25102',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    riskScore: 88,
    riskFactors: [
      'Không đăng nhập 6 ngày qua',
      'Điểm Quiz 2.3 trung bình 54% (thử lại 4 lần)',
      'Tiến độ 32% (chậm hơn trung bình lớp 44%)'
    ],
    status: 'in_progress',
    actionType: 'one_on_one',
    assignedDate: '2026-09-18',
    deadline: '2026-09-24',
    notes: 'Giảng viên đã hẹn phụ đạo 30 phút sau ca 1 thứ Tư về ép kiểu dữ liệu và cú pháp hàm cơ bản.'
  },
  {
    id: 'int-2',
    studentId: 'sv-04',
    studentName: 'Phạm Minh Đức',
    studentCode: 'PS25104',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    riskScore: 92,
    riskFactors: [
      'Nộp thiếu Lab 2 và Lab 3',
      'Bị kẹt ở bài toán Scope Chaining > 5 ngày',
      'Điểm Quiz tích lũy 48%'
    ],
    status: 'pending',
    actionType: 'remediation_quiz',
    assignedDate: '2026-09-20',
    deadline: '2026-09-23',
    notes: 'Cần gán bài tập phục hồi (Remediation Set) gồm 5 câu kiểm tra tự động kèm gợi ý AI Tutor L2.'
  },
  {
    id: 'int-3',
    studentId: 'sv-06',
    studentName: 'Đỗ Tuấn Khải',
    studentCode: 'PS25106',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    riskScore: 65,
    riskFactors: [
      'Tụt dốc điểm số ở Module Array Methods',
      'Đánh giá tự tin mức 2/5 (Hiểu một phần)'
    ],
    status: 'resolved',
    actionType: 'study_buddy',
    assignedDate: '2026-09-15',
    deadline: '2026-09-21',
    notes: 'Đã ghép đôi hỗ trợ học cùng bạn Nguyễn Văn An (SV giỏi). Đã cải thiện điểm Lab 7 lên 8.5.'
  }
];

export const MOCK_MISCONCEPTION_DIAGNOSTICS: MisconceptionDiagnostic[] = [
  {
    id: 'misc-1',
    title: 'Toán tử cộng (+) ưu tiên nối chuỗi ngầm định',
    moduleName: 'Module 2 – Biến & Kiểu dữ liệu',
    errorCategory: 'type_coercion',
    errorRate: 68,
    sampleBuggyCode: `let price = "100";\nlet tax = 10;\nlet total = price + tax;\nconsole.log(total); // Kết quả: "10010" thay vì 110!`,
    studentMentalModel: 'Sinh viên nghĩ JavaScript sẽ tự động hiểu số dạng chuỗi "100" cần được cộng đại số với 10.',
    correctMentalModel: 'Toán tử cộng (+) có tính đa hình: nếu một trong hai toán hạng là String, JS sẽ ép toán hạng còn lại sang String và nối chuỗi.',
    remedyActivity: 'Yêu cầu sinh viên luôn ép kiểu tường minh qua Number(price) hoặc +price trước khi thực hiện phép cộng số học.',
    suggestedLiveDemo: 'Mở Console demo `"5" - 2` (ra 3) đối chiếu với `"5" + 2` (ra "52") để sinh viên sốc nhận thức (Cognitive Disruption).'
  },
  {
    id: 'misc-2',
    title: 'Lầm tưởng typeof null trả về "null"',
    moduleName: 'Module 2 – Biến & Kiểu dữ liệu',
    errorCategory: 'type_coercion',
    errorRate: 64,
    sampleBuggyCode: `let user = null;\nif (typeof user === "null") { // Luôn false!\n  console.log("No user");\n}`,
    studentMentalModel: 'Nghĩ rằng mỗi kiểu dữ liệu nguyên thủy đều có chuỗi typeof tương ứng với chính tên của nó.',
    correctMentalModel: 'typeof null trả về "object" do bug thiết kế ban đầu (type tag nhị phân 000 trùng với object). Cần kiểm tra user === null.',
    remedyActivity: 'Thực hiện bài tập kiểm tra giá trị rỗng kết hợp so sánh nghiêm ngặt `user === null`.',
    suggestedLiveDemo: 'Trình chiếu slide lịch sử năm 1995 của Brendan Eich lý giải vì sao lỗi này không bao giờ được sửa để bảo đảm tương thích ngược web.'
  },
  {
    id: 'misc-3',
    title: 'Vòng lặp bất đồng bộ không đồng bộ hóa với forEach',
    moduleName: 'Module 14 – Bất đồng bộ (Async)',
    errorCategory: 'async_flow',
    errorRate: 59,
    sampleBuggyCode: `async function fetchAll(ids) {\n  ids.forEach(async (id) => {\n    await fetchUser(id);\n  });\n  console.log("Done!"); // Chạy trước khi các fetch hoàn thành!\n}`,
    studentMentalModel: 'Nghĩ rằng await bên trong callback của forEach sẽ chặn luồng của hàm fetchAll bên ngoài.',
    correctMentalModel: 'forEach không chờ đợi Promise trả về từ callback. Muốn chạy tuần tự cần dùng `for...of` hoặc chạy song song với `Promise.all(ids.map(...))`.',
    remedyActivity: 'Cho sinh viên in timestamp trước/sau lời gọi hàm để thấy rõ thứ tự thực thi.',
    suggestedLiveDemo: 'Demo so sánh 3 cách duyệt mảng có async: for...of vs forEach vs Promise.all.'
  },
  {
    id: 'misc-4',
    title: 'Nhầm lẫn biến toàn cục do quên khai báo let/const',
    moduleName: 'Module 2 – Biến & Kiểu dữ liệu',
    errorCategory: 'scope_closure',
    errorRate: 46,
    sampleBuggyCode: `function calculateArea(w, h) {\n  area = w * h; // Quên let/const, biến bị leak ra window/global!\n  return area;\n}`,
    studentMentalModel: 'Cho rằng biến khai báo trong hàm thì mặc nhiên chỉ tồn tại cục bộ trong hàm đó.',
    correctMentalModel: 'Không có từ khóa khai báo, trong non-strict mode JS tự gán thuộc tính vào đối tượng toàn cục (window/global), gây ô nhiễm biến.',
    remedyActivity: 'Dạy sinh viên luôn bật `"use strict";` hoặc dùng ES Module để bắt lỗi ReferenceError ngay lập tức.',
    suggestedLiveDemo: 'Mở tab DevTools kiểm tra `window.area` sau khi gọi hàm.'
  }
];

export const MOCK_ACTIVITY_TIMELINE = [
  { day: 'Thứ 2', activeCount: 29, submissions: 42, avgTimeHours: 1.8 },
  { day: 'Thứ 3', activeCount: 22, submissions: 18, avgTimeHours: 1.2 },
  { day: 'Thứ 4', activeCount: 31, submissions: 56, avgTimeHours: 2.1 },
  { day: 'Thứ 5', activeCount: 24, submissions: 25, avgTimeHours: 1.4 },
  { day: 'Thứ 6', activeCount: 30, submissions: 61, avgTimeHours: 2.3 },
  { day: 'Thứ 7', activeCount: 19, submissions: 35, avgTimeHours: 1.6 },
  { day: 'Chủ Nhật', activeCount: 27, submissions: 48, avgTimeHours: 2.5 },
];

export const MOCK_STUDY_HOURS_HEATMAP = [
  { hourRange: '06:00 - 08:00', label: 'Sáng sớm', percentage: 12, count: 4 },
  { hourRange: '08:00 - 11:30', label: 'Giờ học trên lớp', percentage: 88, count: 28 },
  { hourRange: '13:30 - 17:00', label: 'Thực hành buổi chiều', percentage: 45, count: 14 },
  { hourRange: '19:00 - 22:30', label: 'Khung giờ vàng tự học (Peak)', percentage: 94, count: 30 },
  { hourRange: '23:00 - 02:00', label: 'Đêm khuya (Night Owls)', percentage: 38, count: 12 },
];

export const MOCK_GRADE_DISTRIBUTION = [
  { range: 'Xuất sắc (9.0 - 10.0)', count: 5, percentage: 16, color: 'bg-emerald-500' },
  { range: 'Giỏi (8.0 - 8.9)', count: 12, percentage: 38, color: 'bg-indigo-500' },
  { range: 'Khá (6.5 - 7.9)', count: 9, percentage: 28, color: 'bg-blue-500' },
  { range: 'Trung bình (5.0 - 6.4)', count: 3, percentage: 9, color: 'bg-amber-500' },
  { range: 'Cảnh báo rớt (< 5.0)', count: 3, percentage: 9, color: 'bg-rose-500' },
];
