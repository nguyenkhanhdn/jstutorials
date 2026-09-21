import { StudentProfile } from '../types';

export const MOCK_STUDENTS: StudentProfile[] = [
  {
    id: 'sv-01',
    code: 'PS25101',
    fullName: 'Nguyễn Văn An',
    email: 'annvps25101@fpt.edu.vn',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
    classGroup: 'WD18301 - Lập trình Web Front-end',
    overallProgress: 88,
    completedLessons: 18,
    totalLessons: 75,
    averageQuizScore: 88,
    xp: 1450,
    streakDays: 7,
    atRisk: false,
    lastActive: '15 phút trước',
    weakObjectives: [],
    bookmarkCount: 4
  },
  {
    id: 'sv-02',
    code: 'PS25102',
    fullName: 'Trần Thị Bích Ngọc',
    email: 'ngocttbps25102@fpt.edu.vn',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    classGroup: 'WD18301 - Lập trình Web Front-end',
    overallProgress: 32,
    completedLessons: 6,
    totalLessons: 75,
    averageQuizScore: 54,
    xp: 420,
    streakDays: 0,
    atRisk: true,
    atRiskReason: 'Không đăng nhập 6 ngày qua; Điểm Quiz trung bình < 60%',
    lastActive: '6 ngày trước',
    weakObjectives: ['LO2.3', 'LO2.4', 'LO3.2'],
    bookmarkCount: 9
  },
  {
    id: 'sv-03',
    code: 'PS25103',
    fullName: 'Lê Hoàng Long',
    email: 'longlhps25103@fpt.edu.vn',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&q=80',
    classGroup: 'WD18301 - Lập trình Web Front-end',
    overallProgress: 75,
    completedLessons: 15,
    totalLessons: 75,
    averageQuizScore: 82,
    xp: 1200,
    streakDays: 4,
    atRisk: false,
    lastActive: '2 giờ trước',
    weakObjectives: ['LO2.4'],
    bookmarkCount: 6
  },
  {
    id: 'sv-04',
    code: 'PS25104',
    fullName: 'Phạm Minh Đức',
    email: 'ducpmps25104@fpt.edu.vn',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    classGroup: 'WD18301 - Lập trình Web Front-end',
    overallProgress: 24,
    completedLessons: 4,
    totalLessons: 75,
    averageQuizScore: 48,
    xp: 310,
    streakDays: 0,
    atRisk: true,
    atRiskReason: 'Quiz attempts > 4 lần vẫn trượt bài 2.3; Tiến độ chậm hơn 50%',
    lastActive: '3 ngày trước',
    weakObjectives: ['LO2.1', 'LO2.3', 'LO2.4'],
    bookmarkCount: 11
  },
  {
    id: 'sv-05',
    code: 'PS25105',
    fullName: 'Vũ Thảo Linh',
    email: 'linhvttps25105@fpt.edu.vn',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    classGroup: 'WD18301 - Lập trình Web Front-end',
    overallProgress: 92,
    completedLessons: 20,
    totalLessons: 75,
    averageQuizScore: 94,
    xp: 1680,
    streakDays: 12,
    atRisk: false,
    lastActive: 'Vừa xong',
    weakObjectives: [],
    bookmarkCount: 3
  },
  {
    id: 'sv-06',
    code: 'PS25106',
    fullName: 'Đỗ Tuấn Khải',
    email: 'khaidtps25106@fpt.edu.vn',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    classGroup: 'WD18301 - Lập trình Web Front-end',
    overallProgress: 65,
    completedLessons: 12,
    totalLessons: 75,
    averageQuizScore: 76,
    xp: 990,
    streakDays: 2,
    atRisk: false,
    lastActive: 'Hôm qua',
    weakObjectives: ['LO2.3'],
    bookmarkCount: 5
  }
];

export const MOCK_TOPIC_DIFFICULTY = [
  {
    topicId: 't-1',
    topicName: 'Array: reduce() gom nhóm dữ liệu',
    moduleName: 'Module 7 – Array',
    completionRate: 48,
    avgScore: 56,
    errorRate: 64,
    bookmarkCount: 42,
    isBottleneck: true,
    recommendation: 'Dành 30 phút buổi học kế tiếp để vẽ sơ đồ từng bước Accumulator và CurrentValue'
  },
  {
    topicId: 't-2',
    topicName: 'Ép kiểu ngầm định (Implicit Coercion)',
    moduleName: 'Module 2 – Biến & Kiểu dữ liệu',
    completionRate: 62,
    avgScore: 61,
    errorRate: 58,
    bookmarkCount: 38,
    isBottleneck: true,
    recommendation: 'Ôn tập bảng Truthy/Falsy và các phép toán giữa String + Number'
  },
  {
    topicId: 't-3',
    topicName: 'Asynchronous: Promise & async/await',
    moduleName: 'Module 14 – Asynchronous JS',
    completionRate: 52,
    avgScore: 63,
    errorRate: 55,
    bookmarkCount: 35,
    isBottleneck: true,
    recommendation: 'Minh họa trực quan luồng Event Loop và Call Stack trên bảng'
  },
  {
    topicId: 't-4',
    topicName: 'DOM: Event Delegation trên danh sách động',
    moduleName: 'Module 11 – Event',
    completionRate: 71,
    avgScore: 74,
    errorRate: 36,
    bookmarkCount: 21,
    isBottleneck: false,
    recommendation: 'Độ khó vừa phải, sinh viên đã nắm được e.target.closest()'
  },
  {
    topicId: 't-5',
    topicName: 'Khai báo biến với let và const',
    moduleName: 'Module 2 – Biến & Kiểu dữ liệu',
    completionRate: 92,
    avgScore: 86,
    errorRate: 18,
    bookmarkCount: 12,
    isBottleneck: false,
    recommendation: 'Tốt. Đại đa số sinh viên đã nắm vững quy tắc cơ bản'
  }
];

export const MOCK_HIGH_ERROR_QUESTIONS = [
  {
    id: 'heq-1',
    questionPrompt: 'Kết quả của biểu thức `typeof null` trong JavaScript?',
    errorRate: 68,
    commonWrongAnswer: '"null" hoặc "undefined"',
    correctAnswer: '"object"',
    rootCause: 'Sinh viên suy luận theo ngữ nghĩa logic thông thường, chưa nhớ lỗi thiết kế lịch sử sơ khai của JS.',
    suggestedRemediation: 'Nhấn mạnh trong bài giảng slide rằng đây là "Historical Bug" nổi tiếng của Brendan Eich năm 1995.'
  },
  {
    id: 'heq-2',
    questionPrompt: 'Biểu thức `"5" - 2` và `"5" + 2` cho kết quả lần lượt là gì?',
    errorRate: 59,
    commonWrongAnswer: '"3" và "7" hoặc cả hai đều là chuỗi',
    correctAnswer: '3 và "52"',
    rootCause: 'Nhầm lẫn giữa toán tử trừ (-) luôn ép kiểu sang Number và toán tử cộng (+) ưu tiên nối chuỗi khi có 1 toán hạng String.',
    suggestedRemediation: 'Cho sinh viên thực hành trên Console 5 câu hỏi nhanh về ép kiểu ngầm định.'
  },
  {
    id: 'heq-3',
    questionPrompt: 'Kết quả khi gán lại giá trị cho hằng số: `const PI = 3.14; PI = 3.14159;`?',
    errorRate: 44,
    commonWrongAnswer: 'PI được cập nhật giá trị mới hoặc cảnh báo Warning',
    correctAnswer: 'Ném ngoại lệ TypeError: Assignment to constant variable',
    rootCause: 'Một số sinh viên từ ngôn ngữ khác nghĩ const chỉ cảnh báo mà vẫn cho chạy.',
    suggestedRemediation: 'Cho sinh viên chạy thử code cố tình gây lỗi ngay trong tab Sandbox để quan sát Console đỏ.'
  }
];
