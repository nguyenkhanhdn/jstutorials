import { Lesson, Question, Exercise, PredictOutputItem } from '../types';
import { SAMPLE_LESSON } from './sampleLessonData';
import { CURRICULUM_MODULES } from './curriculumData';
import { ALL_HTML_LESSONS } from './htmlLessons';

// Detailed bespoke lessons for key modules
export const LESSON_1_3: Lesson = {
  id: 'les-1-3',
  moduleId: 'mod-1',
  title: '1.3 Làm chủ DevTools Console & Câu lệnh đầu tiên',
  order: 3,
  durationMinutes: 45,
  difficulty: 'Cơ bản',
  prerequisites: [
    'Biết cách mở trình duyệt Google Chrome hoặc Firefox',
    'Biết phím tắt mở DevTools: F12 hoặc Ctrl+Shift+I (Cmd+Option+I trên macOS)',
    'Hiểu khái niệm JavaScript là ngôn ngữ kịch bản chạy phía Client'
  ],
  learningObjectives: [
    {
      id: 'LO1.3.1',
      code: 'LO1.3.1',
      title: 'Khai thác các phương thức Console cơ bản',
      description: 'Sử dụng thành thạo console.log(), console.warn(), console.error() để debug mã nguồn.',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    },
    {
      id: 'LO1.3.2',
      code: 'LO1.3.2',
      title: 'Trực quan hóa dữ liệu bảng với console.table',
      description: 'Hiển thị dữ liệu mảng hoặc object phức tạp dưới dạng bảng trực quan trong tab Console.',
      bloomLevel: 'Apply',
      masteryPercentage: 88
    },
    {
      id: 'LO1.3.3',
      code: 'LO1.3.3',
      title: 'Đo lường thời gian thực thi bằng console.time',
      description: 'Đo thời gian chạy của một đoạn mã để tối ưu hóa hiệu năng giải thuật.',
      bloomLevel: 'Analyze',
      masteryPercentage: 80
    }
  ],
  sections: [
    {
      id: 'sec-1-3-1',
      lessonId: 'les-1-3',
      order: 1,
      conceptName: 'Bộ công cụ DevTools Console và API in thông điệp',
      title: '1. Phân biệt console.log, console.warn và console.error',
      explanation: 'Console là môi trường REPL (Read-Eval-Print Loop) mạnh mẽ nhất giúp lập trình viên giao tiếp tức thì với JavaScript Engine. Thay vì chỉ dùng console.log() đơn điệu, các kỹ sư chuyên nghiệp phân loại thông điệp theo mức độ nghiêm trọng để lọc tìm lỗi nhanh chóng.',
      syntax: 'console.log(thongDiep, giaTri1, giaTri2);\nconsole.warn(canhBaoLuuY);\nconsole.error(thongBaoLoiNghiemTrong);',
      codeExample: `// Ghi nhận thông tin thông thường
console.log("Hệ thống khởi động thành công!");

// Cảnh báo người dùng (hiện nền vàng trên DevTools)
console.warn("Dung lượng bộ nhớ tạm sắp đầy (85%)");

// Thông báo lỗi (hiện nền đỏ và kèm Call Stack)
console.error("Không thể kết nối đến máy chủ cơ sở dữ liệu!");`,
      lineByLineExplanation: [
        { line: 2, text: 'console.log in thông điệp chuẩn ra luồng stdout của tab Console.' },
        { line: 5, text: 'console.warn đánh dấu cảnh báo màu vàng, thường dùng cho deprecation warning.' },
        { line: 8, text: 'console.error đánh dấu lỗi nghiêm trọng màu đỏ, tự động kèm stack trace để biết lỗi ở dòng nào.' }
      ],
      commonMistakes: [
        'Để quên hàng trăm lệnh console.log trong mã nguồn đưa lên production, làm chậm ứng dụng.',
        'Nhầm lẫn giữa console.error (chỉ in chữ màu đỏ) và throw new Error (thực sự dừng luồng chạy chương trình).'
      ],
      whenToUse: 'Dùng trong quá trình phát triển để kiểm tra giá trị biến, luồng rẽ nhánh và thời điểm kích hoạt sự kiện.',
      whenNotToUse: 'Không dùng console.log để hiển thị thông báo cho người dùng cuối (hãy render ra giao diện HTML).',
      realWorldUseCase: 'Theo dõi payload nhận về từ Backend API trước khi render danh sách sinh viên lên bảng điểm.'
    },
    {
      id: 'sec-1-3-2',
      lessonId: 'les-1-3',
      order: 2,
      conceptName: 'Console nâng cao: console.table & console.time',
      title: '2. Hiển thị bảng dữ liệu với console.table() và đo thời gian',
      explanation: 'Khi làm việc với danh sách đối tượng (Array of Objects), lệnh console.log() thông thường chỉ in ra cây nút thu gọn rất khó đối soát. Lệnh console.table() biến dữ liệu thành bảng có cột và hàng rõ ràng. Ngoài ra console.time() giúp đo chính xác thời gian thực thi mã tính bằng mili-giây.',
      syntax: 'console.table(danhSachDoiTuong);\nconsole.time("nhanDoiThoiGian");\n// code can do...\nconsole.timeEnd("nhanDoiThoiGian");',
      codeExample: `const sinhVien = [
  { maSV: "PS25101", hoTen: "Nguyễn Văn An", diem: 8.5 },
  { maSV: "PS25102", hoTen: "Trần Bích Ngọc", diem: 9.0 }
];

console.table(sinhVien);

console.time("DoThoiGianChay");
let sum = 0;
for (let i = 0; i < 100000; i++) {
  sum += i;
}
console.timeEnd("DoThoiGianChay");`,
      lineByLineExplanation: [
        { line: 6, text: 'console.table tự động trích xuất các key của object làm tiêu đề cột của bảng.' },
        { line: 8, text: 'Bắt đầu bấm giờ đo với định danh "DoThoiGianChay".' },
        { line: 13, text: 'Dừng bấm giờ và in ra số ms đã trôi qua kể từ khi gọi console.time cùng nhãn.' }
      ],
      commonMistakes: [
        'Tên nhãn trong console.time() và console.timeEnd() không trùng khớp, dẫn đến cảnh báo Timer does not exist.'
      ],
      whenToUse: 'Dùng console.table khi kiểm tra mảng sản phẩm, giỏ hàng, bảng điểm sinh viên. Dùng console.time khi tối ưu thuật toán.',
      whenNotToUse: 'Không gọi console.time trong các hàm được lặp hàng triệu lần vì chi phí ghi nhật ký làm chậm vòng lặp.',
      realWorldUseCase: 'Đo lường thời gian lọc danh sách 10.000 sản phẩm theo danh mục và giá tiền.'
    }
  ],
  predictOutputs: [
    {
      id: 'po-1-3-1',
      code: `console.log(1 + "2" + 3);`,
      question: 'Đoạn mã in ra giá trị gì trên Console?',
      options: ['"6"', '"123"', '6', 'TypeError'],
      correctAnswer: '"123"',
      explanation: 'Khi gặp toán tử cộng với chuỗi "2", số 1 bị ép kiểu thành chuỗi "1", cho ra "12". Tiếp tục "12" + 3 tạo thành chuỗi "123".',
      hint: 'Toán tử + thực hiện từ trái sang phải và ưu tiên nối chuỗi khi có ít nhất một toán hạng là String.'
    },
    {
      id: 'po-1-3-2',
      code: `console.log(typeof NaN);`,
      question: 'Kết quả in ra của typeof NaN là gì?',
      options: ['"NaN"', '"undefined"', '"number"', '"object"'],
      correctAnswer: '"number"',
      explanation: 'NaN viết tắt của "Not-a-Number", nhưng trong chuẩn IEEE 754 của JavaScript, nó vẫn thuộc kiểu dữ liệu Number biểu thị một kết quả tính toán số học không hợp lệ.',
      hint: 'Mặc dù mang nghĩa "Không phải số", NaN về mặt kỹ thuật vẫn là một giá trị số đặc biệt.'
    }
  ],
  interactivePractice: {
    id: 'ip-1-3',
    title: 'Thực hành DevTools: In bảng danh sách điểm danh lớp học',
    description: 'Tạo một mảng sinh viên gồm ít nhất 2 đối tượng có thuộc tính hoTen và trangThai. Sau đó dùng console.table để in ra bảng.',
    starterCode: `// Viết code in bảng sinh viên điểm danh tại đây:
const lopHoc = [
  { hoTen: "Nguyễn Văn An", trangThai: "Có mặt" },
  { hoTen: "Trần Bích Ngọc", trangThai: "Vắng có phép" }
];

console.table(lopHoc);
console.log("Tổng số sinh viên điểm danh:", lopHoc.length);`,
    expectedConsoleOutput: 'Tổng số sinh viên điểm danh: 2',
    hint: 'Sử dụng console.table(lopHoc) để xem bảng trực quan, sau đó console.log độ dài mảng.'
  },
  exercises: {
    basic: {
      id: 'ex-1-3-1',
      lessonId: 'les-1-3',
      title: 'Bài tập Cơ bản: In thẻ thông tin sinh viên chuẩn DevTools',
      difficulty: 'basic',
      learningObjectiveIds: ['LO1.3.1'],
      description: 'Khai báo hai biến const name = "Lê Văn Hùng" và const studentId = "PS25999". In ra chuỗi định dạng chính xác: `Sinh viên: Lê Văn Hùng - Mã: PS25999` bằng console.log().',
      starterCode: `// Khai báo biến và in thông tin
const name = "Lê Văn Hùng";
const studentId = "PS25999";

// In kết quả bằng console.log:
`,
      solutionCode: `const name = "Lê Văn Hùng";
const studentId = "PS25999";
console.log(\`Sinh viên: \${name} - Mã: \${studentId}\`);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra in đúng chuỗi thẻ sinh viên',
          expectedOutput: 'Sinh viên: Lê Văn Hùng - Mã: PS25999'
        }
      ],
      hints: ['Sử dụng Template Literals với dấu backtick ` ` và cú pháp ${name}'],
      explanation: 'Sử dụng console.log với chuỗi nội suy giúp mã nguồn gọn gàng hơn nhiều so với việc cộng chuỗi bằng dấu +.'
    },
    intermediate: {
      id: 'ex-1-3-2',
      lessonId: 'les-1-3',
      title: 'Bài tập Trung bình: Kiểm tra điều kiện và in cảnh báo phân loại',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO1.3.1'],
      description: 'Cho biến score = 4.0. Nếu score < 5.0, in ra bằng console.warn chuỗi `Cảnh báo: Sinh viên phải thi lại!`. Ngược lại in bằng console.log chuỗi `Chúc mừng: Sinh viên đã qua môn!`.',
      starterCode: `const score = 4.0;

// Viết cấu trúc điều khiển và in thông báo:
`,
      solutionCode: `const score = 4.0;
if (score < 5.0) {
  console.warn("Cảnh báo: Sinh viên phải thi lại!");
} else {
  console.log("Chúc mừng: Sinh viên đã qua môn!");
}`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra in cảnh báo khi điểm dưới 5.0',
          expectedOutput: 'Cảnh báo: Sinh viên phải thi lại!'
        }
      ],
      hints: ['Dùng if (score < 5.0) console.warn(...)'],
      explanation: 'console.warn được thiết kế chuyên biệt để ghi nhận các trường hợp rủi ro hoặc điều kiện cảnh báo trong nghiệp vụ.'
    },
    challenge: {
      id: 'ex-1-3-3',
      lessonId: 'les-1-3',
      title: 'Bài tập Thử thách: Đo lường tốc độ lặp và in tổng tích lũy',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO1.3.3'],
      description: 'Dùng vòng lặp for tính tổng các số chẵn từ 2 đến 1000. In ra kết quả theo định dạng: `Tổng số chẵn: [kết quả]`.',
      starterCode: `let tongChan = 0;

// Viết vòng lặp tính tổng:

console.log("Tổng số chẵn:", tongChan);`,
      solutionCode: `let tongChan = 0;
for (let i = 2; i <= 1000; i += 2) {
  tongChan += i;
}
console.log("Tổng số chẵn:", tongChan);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra tổng các số chẵn từ 2 đến 1000',
          expectedOutput: 'Tổng số chẵn: 250500'
        }
      ],
      hints: ['Bước nhảy i += 2 bắt đầu từ i = 2 đến 1000', 'Giá trị mong đợi: 250500'],
      explanation: 'Vòng lặp với bước nhảy 2 giảm một nửa số chu kỳ lặp so với việc kiểm tra điều kiện i % 2 === 0 ở mỗi vòng lặp.'
    }
  },
  quiz: {
    id: 'quiz-1-3',
    lessonId: 'les-1-3',
    title: 'Trắc nghiệm đánh giá năng lực: Làm chủ DevTools Console',
    passingScore: 70,
    questions: [
      {
        id: 'q-1-3-1',
        lessonId: 'les-1-3',
        learningObjectiveId: 'LO1.3.1',
        type: 'multiple_choice',
        difficulty: 'easy',
        prompt: 'Lệnh nào sau đây dùng để hiển thị dữ liệu mảng hoặc đối tượng dưới dạng bảng kẻ ô trong Console?',
        options: [
          { id: 'a', text: 'console.grid(data)' },
          { id: 'b', text: 'console.table(data)' },
          { id: 'c', text: 'console.view(data)' },
          { id: 'd', text: 'console.chart(data)' }
        ],
        correctAnswer: 'b',
        explanation: 'console.table() là phương thức chuẩn của trình duyệt hỗ trợ trực quan hóa mảng hoặc đối tượng dạng bảng tabular.',
        relatedLessonId: 'les-1-3'
      },
      {
        id: 'q-1-3-2',
        lessonId: 'les-1-3',
        learningObjectiveId: 'LO1.3.3',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'Cặp lệnh nào dùng để đo chính xác thời gian chạy của một đoạn mã trong JavaScript?',
        options: [
          { id: 'a', text: 'console.start() và console.stop()' },
          { id: 'b', text: 'console.benchmark() và console.result()' },
          { id: 'c', text: 'console.time() và console.timeEnd()' },
          { id: 'd', text: 'console.clock() và console.tick()' }
        ],
        correctAnswer: 'c',
        explanation: 'console.time("label") khởi động đồng hồ bấm giờ và console.timeEnd("label") dừng và in số mili-giây.',
        relatedLessonId: 'les-1-3'
      }
    ]
  },
  summary: [
    'Console là công cụ REPL mạnh mẽ hàng đầu của lập trình viên để kiểm tra trạng thái phần mềm.',
    'Phân tách rõ ràng: console.log (thông tin), console.warn (cảnh báo vàng), console.error (lỗi đỏ).',
    'Tận dụng console.table() cho danh sách dữ liệu và console.time() khi cần đo đạc hiệu năng.'
  ],
  suggestedBookmarks: [
    'Phương thức console.table() hiển thị mảng đối tượng',
    'Đo lường thời gian thực thi với console.time() và console.timeEnd()'
  ]
};

export const LESSON_3_2: Lesson = {
  id: 'les-3-2',
  moduleId: 'mod-3',
  title: '3.2 So sánh nghiêm ngặt (=== vs ==) & Thứ tự ưu tiên toán tử',
  order: 2,
  durationMinutes: 50,
  difficulty: 'Cơ bản',
  prerequisites: [
    'Đã học Bài 2.1 & 2.2 về Kiểu dữ liệu nguyên thủy',
    'Hiểu toán tử gán dấu bằng đơn (=) khác với so sánh'
  ],
  learningObjectives: [
    {
      id: 'LO3.2.1',
      code: 'LO3.2.1',
      title: 'Phân biệt so sánh bằng lỏng lẻo (==) và bằng nghiêm ngặt (===)',
      description: 'Giải thích cơ chế ép kiểu tự động của toán tử == và tại sao chuẩn lập trình doanh nghiệp luôn bắt buộc dùng ===.',
      bloomLevel: 'Understand',
      masteryPercentage: 85
    },
    {
      id: 'LO3.2.2',
      code: 'LO3.2.2',
      title: 'Vận dụng so sánh không bằng (!== vs !=)',
      description: 'Áp dụng so sánh khác kiểu an toàn trong các câu lệnh rẽ nhánh nghiệp vụ.',
      bloomLevel: 'Apply',
      masteryPercentage: 88
    },
    {
      id: 'LO3.2.3',
      code: 'LO3.2.3',
      title: 'Nhận diện các trường hợp ngoại lệ kinh điển của so sánh',
      description: 'Hiểu bản chất tại sao NaN !== NaN và null == undefined nhưng null !== undefined.',
      bloomLevel: 'Analyze',
      masteryPercentage: 76
    }
  ],
  sections: [
    {
      id: 'sec-3-2-1',
      lessonId: 'les-3-2',
      order: 1,
      conceptName: 'Toán tử so sánh bằng (Strict Equality vs Loose Equality)',
      title: '1. Bản chất sự khác nhau giữa == và ===',
      explanation: 'Toán tử `==` (Loose Equality) tự động ép kiểu (Type Coercion) hai vế về cùng một kiểu dữ liệu trước khi so sánh giá trị. Ngược lại, `===` (Strict Equality) kiểm tra ĐỒNG THỜI cả Kiểu dữ liệu và Giá trị. Nếu khác kiểu dữ liệu, `===` lập tức trả về `false` mà không hề ép kiểu ngầm định.',
      syntax: 'giaTri1 === giaTri2 // Khuyên dùng 100%\ngiaTri1 == giaTri2  // ❌ Tránh xa trong dự án thực tế',
      codeExample: `// So sánh nghiêm ngặt (Strict)
console.log(5 === 5);       // true
console.log(5 === "5");     // false (Number !== String)

// So sánh lỏng lẻo (Loose) - Cạm bẫy ép kiểu
console.log(5 == "5");      // true (chuỗi "5" bị ép thành số 5)
console.log(0 == false);    // true (false bị ép thành số 0)
console.log("" == false);   // true (cả hai đều thành 0)`,
      lineByLineExplanation: [
        { line: 3, text: '5 === "5" trả về false vì số 5 thuộc kiểu number, chuỗi "5" thuộc kiểu string.' },
        { line: 6, text: '5 == "5" trả về true vì toán tử == ép kiểu ngầm định chuỗi "5" thành số 5.' },
        { line: 7, text: '0 == false trả về true vì boolean false bị ép kiểu thành số 0 trong toán tử ==.' }
      ],
      commonMistakes: [
        'Dùng dấu == trong kiểm tra mã người dùng hoặc input form dẫn đến lỗi bảo mật bỏ qua kiểm tra kiểu.',
        'So sánh NaN === NaN (luôn trả về false! Phải dùng Number.isNaN(val)).'
      ],
      whenToUse: 'Luôn luôn sử dụng === và !== trong 100% các câu lệnh điều kiện của dự án.',
      whenNotToUse: 'Tuyệt đối không dùng == trừ trường hợp duy nhất muốn kiểm tra cả null hoặc undefined cùng lúc (val == null).',
      realWorldUseCase: 'Kiểm tra mã trạng thái đơn hàng: status === "PAID" đảm bảo tính chính xác tuyệt đối.'
    },
    {
      id: 'sec-3-2-2',
      lessonId: 'les-3-2',
      order: 2,
      conceptName: 'Các trường hợp so sánh đặc biệt trong JavaScript',
      title: '2. Ngoại lệ quan trọng: NaN, null và undefined',
      explanation: 'JavaScript có một số quy tắc so sánh đặc thù cần ghi nhớ: null và undefined bằng nhau khi dùng `==` nhưng khác nhau khi dùng `===`. Đặc biệt, giá trị `NaN` không bằng bất kỳ thứ gì, kể cả chính nó!',
      syntax: 'Number.isNaN(giaTri) // Cách duy nhất kiểm tra NaN\nval === null         // Kiểm tra chính xác null',
      codeExample: `console.log(null == undefined);  // true
console.log(null === undefined); // false

console.log(NaN === NaN);        // false!
console.log(Number.isNaN(NaN));  // true (Chuẩn)`,
      lineByLineExplanation: [
        { line: 1, text: 'null == undefined là true vì quy tắc đặc biệt của ECMAScript coi chúng cùng đại diện cho sự vắng mặt của giá trị.' },
        { line: 4, text: 'NaN không thể bằng bất kỳ ai, kể cả chính nó.' },
        { line: 5, text: 'Hàm Number.isNaN() là công cụ an toàn tuyệt đối để xác định giá trị NaN.' }
      ],
      commonMistakes: [
        'Viết if (x === NaN) để bắt lỗi phép tính thất bại -> Câu điều kiện này KHÔNG BAO GIỜ đúng!'
      ],
      whenToUse: 'Sử dụng Number.isNaN() sau các phép toán chia cho 0 hoặc ép kiểu chuỗi chữ cái sang số.',
      whenNotToUse: 'Không dùng hàm isNaN() toàn cục cũ vì nó tự ép kiểu ngầm định gây sai lệch (ví dụ isNaN("hello") là true).',
      realWorldUseCase: 'Kiểm tra input nhập tuổi của người dùng: nếu Number.isNaN(Number(ageInput)) thì báo lỗi "Vui lòng nhập số hợp lệ".'
    }
  ],
  predictOutputs: [
    {
      id: 'po-3-2-1',
      code: `console.log(0 === false);`,
      question: 'Kết quả in ra màn hình là gì?',
      options: ['true', 'false', 'TypeError', 'undefined'],
      correctAnswer: 'false',
      explanation: 'Toán tử === kiểm tra kiểu dữ liệu: 0 là Number còn false là Boolean. Khác kiểu dữ liệu nên kết quả là false.',
      hint: 'Toán tử nghiêm ngặt không tự động ép kiểu.'
    },
    {
      id: 'po-3-2-2',
      code: `console.log([] == false);`,
      question: 'Kết quả của phép so sánh lỏng lẻo này là gì?',
      options: ['true', 'false', 'TypeError', 'NaN'],
      correctAnswer: 'true',
      explanation: 'Mảng rỗng [] bị ép kiểu sang chuỗi "" rồi sang số 0; boolean false cũng bị ép thành số 0; 0 == 0 là true. Đây chính là lý do vì sao luôn phải dùng ===!',
      hint: 'Toán tử == ép cả hai vế về dạng nguyên thủy rồi so sánh.'
    }
  ],
  interactivePractice: {
    id: 'ip-3-2',
    title: 'Thực nghiệm ma trận so sánh lỏng lẻo vs nghiêm ngặt',
    description: 'Chạy các câu lệnh so sánh sau và đối chiếu kết quả in ra trong Console để khắc sâu quy tắc vàng ===.',
    starterCode: `console.log("5 == '5' ->", 5 == "5");
console.log("5 === '5' ->", 5 === "5");
console.log("null == undefined ->", null == undefined);
console.log("null === undefined ->", null === undefined);
console.log("NaN === NaN ->", NaN === NaN);
console.log("Number.isNaN(NaN) ->", Number.isNaN(NaN));`,
    expectedConsoleOutput: '5 === \'5\' -> false',
    hint: 'Nhấn Chạy thử để quan sát sự khác biệt rõ rệt giữa == và ===.'
  },
  exercises: {
    basic: {
      id: 'ex-3-2-1',
      lessonId: 'les-3-2',
      title: 'Bài tập Cơ bản: Xây dựng hàm kiểm tra mật khẩu nghiêm ngặt',
      difficulty: 'basic',
      learningObjectiveIds: ['LO3.2.1'],
      description: 'Cho biến enteredPin = "1234" và secretPin = 1234. Viết câu lệnh kiểm tra bằng toán tử so sánh nghiêm ngặt. Nếu cả hai bằng nhau in ra `Mở khóa thành công`. Ngược lại in ra `Mã PIN sai kiểu hoặc sai số!`.',
      starterCode: `const enteredPin = "1234";
const secretPin = 1234;

// Viết điều kiện so sánh nghiêm ngặt:
`,
      solutionCode: `const enteredPin = "1234";
const secretPin = 1234;

if (enteredPin === secretPin) {
  console.log("Mở khóa thành công");
} else {
  console.log("Mã PIN sai kiểu hoặc sai số!");
}`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra khác kiểu String vs Number',
          expectedOutput: 'Mã PIN sai kiểu hoặc sai số!'
        }
      ],
      hints: ['Sử dụng if (enteredPin === secretPin)'],
      explanation: 'Vì enteredPin là chuỗi "1234" còn secretPin là số 1234, toán tử === trả về false, bảo vệ hệ thống khỏi các lỗi ép kiểu ngoài ý muốn.'
    },
    intermediate: {
      id: 'ex-3-2-2',
      lessonId: 'les-3-2',
      title: 'Bài tập Trung bình: Bộ lọc giá trị hợp lệ (Bắt NaN và null)',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO3.2.3'],
      description: 'Cho biến giaTri = NaN. Viết câu lệnh kiểm tra: nếu giaTri là NaN (dùng Number.isNaN) thì in ra `Dữ liệu không hợp lệ`. Ngược lại in ra `Dữ liệu hợp lệ: [giaTri]`.',
      starterCode: `const giaTri = NaN;

// Viết điều kiện kiểm tra NaN an toàn:
`,
      solutionCode: `const giaTri = NaN;
if (Number.isNaN(giaTri)) {
  console.log("Dữ liệu không hợp lệ");
} else {
  console.log(\`Dữ liệu hợp lệ: \${giaTri}\`);
}`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Bắt chính xác giá trị NaN',
          expectedOutput: 'Dữ liệu không hợp lệ'
        }
      ],
      hints: ['Dùng Number.isNaN(giaTri)'],
      explanation: 'Không được dùng giaTri === NaN vì NaN không bằng chính nó. Luôn phải dùng Number.isNaN().'
    },
    challenge: {
      id: 'ex-3-2-3',
      lessonId: 'les-3-2',
      title: 'Bài tập Thử thách: Kiểm tra xác thực trạng thái tài khoản',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO3.2.1', 'LO3.2.2'],
      description: 'Cho mảng danh sách người dùng. Hãy đếm có bao nhiêu tài khoản có thuộc tính `isVerified === true` và in ra: `Số tài khoản đã xác thực: [count]`.',
      starterCode: `const users = [
  { name: "An", isVerified: true },
  { name: "Bình", isVerified: 1 }, // số 1 không được tính là true
  { name: "Cường", isVerified: true },
  { name: "Dương", isVerified: "true" } // chuỗi không được tính
];

let count = 0;
// Viết vòng lặp for và so sánh nghiêm ngặt isVerified === true:

console.log("Số tài khoản đã xác thực:", count);`,
      solutionCode: `const users = [
  { name: "An", isVerified: true },
  { name: "Bình", isVerified: 1 },
  { name: "Cường", isVerified: true },
  { name: "Dương", isVerified: "true" }
];

let count = 0;
for (const u of users) {
  if (u.isVerified === true) {
    count++;
  }
}
console.log("Số tài khoản đã xác thực:", count);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Chỉ đếm đúng 2 phần tử có boolean true thực sự',
          expectedOutput: 'Số tài khoản đã xác thực: 2'
        }
      ],
      hints: ['Dùng u.isVerified === true để loại trừ số 1 và chuỗi "true"'],
      explanation: 'So sánh nghiêm ngặt loại trừ hoàn toàn các giá trị truthy giả mạo như 1 hay "true".'
    }
  },
  quiz: {
    id: 'quiz-3-2',
    lessonId: 'les-3-2',
    title: 'Trắc nghiệm: So sánh nghiêm ngặt & Logic trong JavaScript',
    passingScore: 70,
    questions: [
      {
        id: 'q-3-2-1',
        lessonId: 'les-3-2',
        learningObjectiveId: 'LO3.2.1',
        type: 'multiple_choice',
        difficulty: 'easy',
        prompt: 'Toán tử nào sau đây so sánh CẢ giá trị và kiểu dữ liệu mà KHÔNG ép kiểu ngầm định?',
        options: [
          { id: 'a', text: '==' },
          { id: 'b', text: '===' },
          { id: 'c', text: '=' },
          { id: 'd', text: '!=' }
        ],
        correctAnswer: 'b',
        explanation: 'Toán tử === (Strict Equality) so sánh cả Type và Value mà không thực hiện ép kiểu ngầm định.',
        relatedLessonId: 'les-3-2'
      },
      {
        id: 'q-3-2-2',
        lessonId: 'les-3-2',
        learningObjectiveId: 'LO3.2.3',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'Để kiểm tra một biến x có phải là NaN hay không, cách nào sau đây là CHUẨN XÁC nhất?',
        options: [
          { id: 'a', text: 'x === NaN' },
          { id: 'b', text: 'typeof x === "NaN"' },
          { id: 'c', text: 'Number.isNaN(x)' },
          { id: 'd', text: 'x == NaN' }
        ],
        correctAnswer: 'c',
        explanation: 'Trong JS, NaN không bằng chính nó. Do đó x === NaN luôn trả về false. Cách duy nhất là dùng Number.isNaN(x).',
        relatedLessonId: 'les-3-2'
      }
    ]
  },
  summary: [
    'Quy tắc vàng: 100% sử dụng === và !== trong mã nguồn thực tế.',
    'Toán tử == tự động ép kiểu tiềm ẩn hàng loạt cạm bẫy khó lường.',
    'NaN không bằng chính nó; luôn kiểm tra bằng hàm Number.isNaN().'
  ],
  suggestedBookmarks: [
    'Bản chất ép kiểu của toán tử == vs ===',
    'Ngoại lệ NaN !== NaN và phương thức Number.isNaN()'
  ]
};

export const LESSON_7_3: Lesson = {
  id: 'les-7-3',
  moduleId: 'mod-7',
  title: '7.3 Biến đổi & Lọc dữ liệu với map(), filter(), find()',
  order: 3,
  durationMinutes: 60,
  difficulty: 'Trung bình',
  prerequisites: [
    'Nắm vững cách khai báo mảng và truy xuất theo index (Bài 7.1)',
    'Hiểu cú pháp Arrow Function (Bài 6.2)'
  ],
  learningObjectives: [
    {
      id: 'LO7.3.1',
      code: 'LO7.3.1',
      title: 'Biến đổi mảng với phương thức map()',
      description: 'Sử dụng map() để tạo mảng mới có cùng độ dài, biến đổi từng phần tử theo callback function mà không làm thay đổi mảng gốc (Immutability).',
      bloomLevel: 'Apply',
      masteryPercentage: 86
    },
    {
      id: 'LO7.3.2',
      code: 'LO7.3.2',
      title: 'Lọc phần tử mảng thỏa điều kiện với filter()',
      description: 'Áp dụng filter() để trích xuất danh sách con thỏa mãn biểu thức logic Boolean.',
      bloomLevel: 'Apply',
      masteryPercentage: 84
    },
    {
      id: 'LO7.3.3',
      code: 'LO7.3.3',
      title: 'Tìm kiếm phần tử đầu tiên với find() và findIndex()',
      description: 'Tìm kiếm chính xác đối tượng trong mảng và xử lý trường hợp không tìm thấy (trả về undefined).',
      bloomLevel: 'Apply',
      masteryPercentage: 80
    }
  ],
  sections: [
    {
      id: 'sec-7-3-1',
      lessonId: 'les-7-3',
      order: 1,
      conceptName: 'Phương thức map() và nguyên lý Bất biến (Immutability)',
      title: '1. Biến đổi dữ liệu mảng với Array.prototype.map()',
      explanation: 'Phương thức `map()` duyệt qua từng phần tử của mảng và gọi một hàm callback để biến đổi giá trị, sau đó trả về một MẢNG MỚI toanh có độ dài bằng mảng ban đầu. Mảng gốc hoàn toàn không bị biến đổi (Immutability), đây là tôn chỉ quan trọng trong phát triển Web hiện đại (như React).',
      syntax: 'const mangMoi = mangGoc.map((phanTu, index) => {\n  return giaTriBienDoi;\n});',
      codeExample: `const giaGoc = [100, 200, 300];

// Tăng giá thêm 10% VAT
const giaSauThue = giaGoc.map(price => price * 1.1);

console.log("Giá sau thuế:", giaSauThue); // [110, 220, 330]
console.log("Giá gốc không đổi:", giaGoc);  // [100, 200, 300]`,
      lineByLineExplanation: [
        { line: 4, text: 'map nhận vào callback nhận tham số price và trả về giá mới price * 1.1.' },
        { line: 6, text: 'Mảng mới giaSauThue chứa các giá trị sau khi đã nhân 1.1.' },
        { line: 7, text: 'Mảng giaGoc vẫn giữ nguyên vẹn 3 phần tử ban đầu.' }
      ],
      commonMistakes: [
        'Dùng map() nhưng quên lệnh return trong thân hàm ngoặc nhọn { }, khiến mảng mới toàn là [undefined, undefined].',
        'Dùng map() thay cho forEach() khi chỉ muốn in ra màn hình mà không cần mảng mới.'
      ],
      whenToUse: 'Dùng khi cần biến đổi 1:1 từ dữ liệu thô sang dữ liệu hiển thị (ví dụ: mảng id -> mảng tên thẻ HTML).',
      whenNotToUse: 'Không dùng map khi muốn lọc bớt phần tử (hãy dùng filter) hoặc khi chỉ chạy tác vụ phụ như console.log.',
      realWorldUseCase: 'Chuyển danh sách sản phẩm từ Backend thành chuỗi HTML để render thẻ sản phẩm lên giao diện.'
    },
    {
      id: 'sec-7-3-2',
      lessonId: 'les-7-3',
      order: 2,
      conceptName: 'Lọc phần tử với filter() và tìm kiếm với find()',
      title: '2. Lọc mảng với filter() và Tìm kiếm phần tử với find()',
      explanation: '`filter()` duyệt qua mảng và giữ lại các phần tử mà callback trả về `true` (kết quả là một mảng mới có thể có ít phần tử hơn hoặc mảng rỗng). Trong khi đó, `find()` chỉ tìm phần tử ĐẦU TIÊN thỏa mãn điều kiện và trả về chính phần tử đó (không phải mảng); nếu không thấy sẽ trả về `undefined`.',
      syntax: 'const ketQuaLoc = mang.filter(pt => dieuKienLogic);\nconst timThay = mang.find(pt => dieuKienLogic);',
      codeExample: `const sanPham = [
  { id: 1, ten: "Chuột không dây", gia: 250, conHang: true },
  { id: 2, ten: "Bàn phím cơ", gia: 850, conHang: false },
  { id: 3, ten: "Tai nghe gaming", gia: 450, conHang: true }
];

// 1. Lọc sản phẩm còn hàng
const spSanSang = sanPham.filter(p => p.conHang);
console.log("Số SP còn hàng:", spSanSang.length); // 2

// 2. Tìm SP có id = 2
const spCanTim = sanPham.find(p => p.id === 2);
console.log("Tìm thấy:", spCanTim ? spCanTim.ten : "Không thấy");`,
      lineByLineExplanation: [
        { line: 8, text: 'filter giữ lại những item có conHang === true.' },
        { line: 12, text: 'find dừng duyệt ngay khi gặp item đầu tiên có id === 2 và trả về object đó.' }
      ],
      commonMistakes: [
        'Nhầm lẫn kết quả trả về: filter() luôn trả về mảng (kể cả rỗng []), còn find() trả về 1 phần tử hoặc undefined.'
      ],
      whenToUse: 'Dùng filter() cho tính năng tìm kiếm theo từ khóa, lọc theo mức giá. Dùng find() khi tìm theo mã định danh (id).',
      whenNotToUse: 'Không dùng filter() khi chỉ cần tìm 1 đối tượng duy nhất (lãng phí duyệt hết mảng).',
      realWorldUseCase: 'Bộ lọc giỏ hàng: lấy ra tất cả sản phẩm được khách hàng tích chọn thanh toán.'
    }
  ],
  predictOutputs: [
    {
      id: 'po-7-3-1',
      code: `const nums = [1, 2, 3];
const result = nums.map(x => { x * 2; });
console.log(result);`,
      question: 'Kết quả in ra của đoạn mã trên là gì?',
      options: ['[2, 4, 6]', '[undefined, undefined, undefined]', '[1, 2, 3]', 'TypeError'],
      correctAnswer: '[undefined, undefined, undefined]',
      explanation: 'Khi viết Arrow function có thân hàm { }, bạn bắt buộc phải có từ khóa return! Do thiếu return, hàm trả về undefined cho mỗi phần tử.',
      hint: 'Chú ý dấu ngoặc nhọn { } trong thân hàm Arrow Function.'
    }
  ],
  interactivePractice: {
    id: 'ip-7-3',
    title: 'Thực hành chuỗi phương thức (Method Chaining)',
    description: 'Kết hợp filter và map trên mảng sinh viên: Lọc ra các sinh viên có điểm >= 8.0, sau đó lấy ra mảng chỉ chứa tên của các bạn này.',
    starterCode: `const sinhVien = [
  { ten: "An", diem: 8.5 },
  { ten: "Bình", diem: 6.0 },
  { ten: "Cúc", diem: 9.0 },
  { ten: "Dũng", diem: 7.5 }
];

// Lọc điểm >= 8.0 rồi map sang mảng tên:
const svXuatSac = sinhVien
  .filter(sv => sv.diem >= 8.0)
  .map(sv => sv.ten);

console.log("Danh sách SV xuất sắc:", svXuatSac);`,
    expectedConsoleOutput: 'Danh sách SV xuất sắc: [ \'An\', \'Cúc\' ]',
    hint: 'Chạy thử để thấy sức mạnh của việc kết nối chuỗi .filter().map().'
  },
  exercises: {
    basic: {
      id: 'ex-7-3-1',
      lessonId: 'les-7-3',
      title: 'Bài tập Cơ bản: Nhân đôi mảng số nguyên với map()',
      difficulty: 'basic',
      learningObjectiveIds: ['LO7.3.1'],
      description: 'Cho mảng scores = [4, 7, 9]. Sử dụng hàm map() để tạo mảng doubled chứa các số được nhân đôi. In ra kết quả: `Điểm nhân đôi: [mảng]`.',
      starterCode: `const scores = [4, 7, 9];

// Dùng map để nhân đôi các số:
const doubled = scores.map(n => n * 2);

console.log("Điểm nhân đôi:", doubled);`,
      solutionCode: `const scores = [4, 7, 9];
const doubled = scores.map(n => n * 2);
console.log("Điểm nhân đôi:", doubled);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra mảng sau khi nhân đôi',
          expectedOutput: 'Điểm nhân đôi: [ 8, 14, 18 ]'
        }
      ],
      hints: ['scores.map(n => n * 2)'],
      explanation: 'map() duyệt qua từng số và nhân với 2, trả về mảng mới [8, 14, 18].'
    },
    intermediate: {
      id: 'ex-7-3-2',
      lessonId: 'les-7-3',
      title: 'Bài tập Trung bình: Lọc đơn hàng có giá trị cao với filter()',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO7.3.2'],
      description: 'Cho mảng orders = [{ id: 1, total: 150 }, { id: 2, total: 600 }, { id: 3, total: 320 }]. Lọc ra các đơn hàng có total >= 300. In ra: `Đơn hàng lớn: [số lượng]` đơn.',
      starterCode: `const orders = [
  { id: 1, total: 150 },
  { id: 2, total: 600 },
  { id: 3, total: 320 }
];

// Lọc các đơn có total >= 300:
`,
      solutionCode: `const orders = [
  { id: 1, total: 150 },
  { id: 2, total: 600 },
  { id: 3, total: 320 }
];

const bigOrders = orders.filter(o => o.total >= 300);
console.log(\`Đơn hàng lớn: \${bigOrders.length} đơn\`);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra số lượng đơn hàng lớn',
          expectedOutput: 'Đơn hàng lớn: 2 đơn'
        }
      ],
      hints: ['orders.filter(o => o.total >= 300).length'],
      explanation: 'Có 2 đơn hàng có giá trị >= 300 (đơn 2 và đơn 3).'
    },
    challenge: {
      id: 'ex-7-3-3',
      lessonId: 'les-7-3',
      title: 'Bài tập Thử thách: Tìm kiếm người dùng theo email duy nhất',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO7.3.3'],
      description: 'Viết hàm findUserByEmail(users, email) sử dụng find(). Nếu tìm thấy in ra: `Tìm thấy: [họ tên]`. Nếu không tìm thấy in ra: `Không tìm thấy tài khoản`.',
      starterCode: `const userList = [
  { email: "an@fpt.edu.vn", name: "Nguyễn Văn An" },
  { email: "hoa@fpt.edu.vn", name: "Trần Thị Hoa" }
];

function checkUser(email) {
  // Dùng find():
  
}

checkUser("hoa@fpt.edu.vn");
checkUser("linh@fpt.edu.vn");`,
      solutionCode: `const userList = [
  { email: "an@fpt.edu.vn", name: "Nguyễn Văn An" },
  { email: "hoa@fpt.edu.vn", name: "Trần Thị Hoa" }
];

function checkUser(email) {
  const found = userList.find(u => u.email === email);
  if (found) {
    console.log(\`Tìm thấy: \${found.name}\`);
  } else {
    console.log("Không tìm thấy tài khoản");
  }
}

checkUser("hoa@fpt.edu.vn");
checkUser("linh@fpt.edu.vn");`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Tìm kiếm chính xác tài khoản và xử lý trường hợp rỗng',
          expectedOutput: 'Tìm thấy: Trần Thị Hoa\nKhông tìm thấy tài khoản'
        }
      ],
      hints: ['find() trả về undefined khi không có phần tử nào thỏa mãn điều kiện'],
      explanation: 'find() là phương thức tối ưu nhất cho việc tìm kiếm 1 đối tượng duy nhất theo khóa chính.'
    }
  },
  quiz: {
    id: 'quiz-7-3',
    lessonId: 'les-7-3',
    title: 'Trắc nghiệm: Phương thức xử lý mảng hiện đại',
    passingScore: 70,
    questions: [
      {
        id: 'q-7-3-1',
        lessonId: 'les-7-3',
        learningObjectiveId: 'LO7.3.1',
        type: 'multiple_choice',
        difficulty: 'easy',
        prompt: 'Phương thức mảng nào luôn trả về một mảng mới có cùng số lượng phần tử với mảng ban đầu?',
        options: [
          { id: 'a', text: 'filter()' },
          { id: 'b', text: 'map()' },
          { id: 'c', text: 'find()' },
          { id: 'd', text: 'reduce()' }
        ],
        correctAnswer: 'b',
        explanation: 'map() luôn trả về mảng mới có đúng n phần tử tương ứng với n phần tử mảng gốc sau khi qua hàm biến đổi.',
        relatedLessonId: 'les-7-3'
      },
      {
        id: 'q-7-3-2',
        lessonId: 'les-7-3',
        learningObjectiveId: 'LO7.3.3',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'Nếu trong mảng có nhiều phần tử thỏa mãn điều kiện của callback, phương thức find() sẽ trả về giá trị nào?',
        options: [
          { id: 'a', text: 'Một mảng chứa tất cả các phần tử thỏa mãn' },
          { id: 'b', text: 'Phần tử đầu tiên thỏa mãn' },
          { id: 'c', text: 'Phần tử cuối cùng thỏa mãn' },
          { id: 'd', text: 'Chỉ số (index) của phần tử đó' }
        ],
        correctAnswer: 'b',
        explanation: 'find() dừng ngay lập tức khi gặp phần tử đầu tiên thỏa mãn và trả về phần tử đó.',
        relatedLessonId: 'les-7-3'
      }
    ]
  },
  summary: [
    'map() biến đổi từng phần tử 1:1, không thay đổi mảng gốc.',
    'filter() lọc ra mảng con dựa trên điều kiện đúng/sai.',
    'find() lấy ra phần tử đầu tiên thỏa mãn, trả về undefined nếu không có.'
  ],
  suggestedBookmarks: [
    'Cú pháp map() và lỗi quên return trong arrow function',
    'So sánh find() (trả về 1 item) vs filter() (luôn trả về mảng)'
  ]
};

// Fallback dynamic generator for any lesson in modules
export function getLessonById(lessonId: string): Lesson {
  // Check HTML lessons first
  const htmlLesson = ALL_HTML_LESSONS.find(l => l.id === lessonId);
  if (htmlLesson) return htmlLesson;

  if (lessonId === 'les-2-1') return SAMPLE_LESSON;
  if (lessonId === 'les-1-3') return LESSON_1_3;
  if (lessonId === 'les-3-2') return LESSON_3_2;
  if (lessonId === 'les-7-3') return LESSON_7_3;

  // Search in CURRICULUM_MODULES to get module & lesson title
  let foundModule = CURRICULUM_MODULES[0];
  let foundLessonMeta = foundModule.lessons[0];

  for (const mod of CURRICULUM_MODULES) {
    const l = mod.lessons.find(item => item.id === lessonId);
    if (l) {
      foundModule = mod;
      foundLessonMeta = l;
      break;
    }
  }

  // Construct a realistic, interactive Lesson matching the curriculum metadata
  const modTrack = foundModule.track || (foundModule.id.startsWith('mod-html') ? 'html' : (foundModule.id.startsWith('mod-css') ? 'css' : 'javascript'));
  return {
    id: foundLessonMeta.id,
    moduleId: foundModule.id,
    track: modTrack,
    language: modTrack === 'html' ? 'html' : (modTrack === 'css' ? 'css' : 'javascript'),
    title: foundLessonMeta.title,
    order: 1,
    durationMinutes: foundLessonMeta.durationMinutes,
    difficulty: foundModule.number > 12 ? 'Nâng cao' : (foundModule.number > 6 ? 'Trung bình' : 'Cơ bản'),
    prerequisites: [
      `Đã hoàn thành các bài học nền tảng của Module ${Math.max(1, foundModule.number - 1)}`,
      'Nắm vững cú pháp biến let/const và hàm cơ bản',
      'Có thói quen kiểm tra kết quả trên Console DevTools'
    ],
    learningObjectives: [
      {
        id: `LO-${foundLessonMeta.id}-1`,
        code: `LO${foundModule.number}.1`,
        title: `Làm chủ kiến thức cốt lõi: ${foundLessonMeta.title}`,
        description: `Hiểu rõ cơ chế hoạt động, cú pháp chuẩn và nguyên lý thực thi của ${foundLessonMeta.title}.`,
        bloomLevel: 'Understand',
        masteryPercentage: 85
      },
      {
        id: `LO-${foundLessonMeta.id}-2`,
        code: `LO${foundModule.number}.2`,
        title: 'Áp dụng thực hành giải quyết bài toán thực tế',
        description: 'Vận dụng cú pháp chuẩn vào giải quyết các bài tập phân cấp và ứng dụng thực tiễn.',
        bloomLevel: 'Apply',
        masteryPercentage: 80
      }
    ],
    sections: [
      {
        id: `sec-${foundLessonMeta.id}-1`,
        lessonId: foundLessonMeta.id,
        order: 1,
        conceptName: `Bản chất & Cú pháp: ${foundLessonMeta.title}`,
        title: `1. Tổng quan & Bản chất của ${foundLessonMeta.title}`,
        explanation: `Trong kiến trúc JavaScript hiện đại, ${foundLessonMeta.title} đóng vai trò then chốt giúp tối ưu hóa cấu trúc chương trình. Nắm vững kỹ thuật này giúp sinh viên viết code sạch (clean code), tránh các lỗi rò rỉ bộ nhớ hoặc lỗi bất đồng bộ thường gặp.`,
        syntax: `// Cú pháp chuẩn thực thi ${foundLessonMeta.title}\nconst config = { active: true, timestamp: Date.now() };\nconsole.log("Thực thi thành công:", config);`,
        codeExample: `// Minh họa ứng dụng: ${foundLessonMeta.title}
const appModule = {
  name: "${foundModule.title}",
  lesson: "${foundLessonMeta.title}",
  ready: true
};

console.log("Đang học:", appModule.lesson);
console.log("Trạng thái:", appModule.ready ? "Sẵn sàng thực hành" : "Đang tải");`,
        lineByLineExplanation: [
          { line: 2, text: 'Khởi tạo đối tượng đại diện cho ngữ cảnh bài học hiện tại.' },
          { line: 7, text: 'In tên bài học ra Console để xác nhận môi trường thực thi.' },
          { line: 8, text: 'Dùng toán tử 3 ngôi kiểm tra trạng thái hoạt động.' }
        ],
        commonMistakes: [
          'Chưa nắm rõ thứ tự thực thi dẫn đến gọi biến hoặc hàm trước khi khởi tạo.',
          'Không kiểm tra kiểu dữ liệu đầu vào trước khi xử lý logic.'
        ],
        whenToUse: `Áp dụng trong các dự án thực tế khi phát triển tính năng của ${foundModule.title}.`,
        whenNotToUse: 'Không lạm dụng các cấu trúc phức tạp khi bài toán chỉ yêu cầu logic đơn giản.',
        realWorldUseCase: `Xây dựng module xử lý nghiệp vụ cho dự án Web Front-end với ${foundModule.englishTitle}.`
      }
    ],
    predictOutputs: [
      {
        id: `po-${foundLessonMeta.id}-1`,
        code: `const title = "${foundLessonMeta.title}";\nconsole.log(title.includes("JavaScript") || title.length > 5);`,
        question: 'Biểu thức kiểm tra logic trên in ra kết quả gì?',
        options: ['true', 'false', 'undefined', 'TypeError'],
        correctAnswer: 'true',
        explanation: 'Độ dài chuỗi tiêu đề lớn hơn 5 ký tự nên toán tử || ngắn mạch trả về true ngay lập tức.',
        hint: 'Toán tử || trả về true nếu ít nhất một vế thỏa mãn.'
      }
    ],
    interactivePractice: {
      id: `ip-${foundLessonMeta.id}`,
      title: `Thực hành trực tiếp: ${foundLessonMeta.title}`,
      description: `Thực thi đoạn mã khởi động cho bài học "${foundLessonMeta.title}" và quan sát kết quả Console.`,
      starterCode: `// Viết code thực hành cho bài học: ${foundLessonMeta.title}
console.log("--- Bắt đầu bài học: ${foundLessonMeta.title} ---");
const status = "Đang thực hành";
console.log("Tiến độ:", status);`,
      expectedConsoleOutput: `--- Bắt đầu bài học: ${foundLessonMeta.title} ---`,
      hint: 'Nhấn nút "Chạy code" để kiểm tra bảng Console.'
    },
    exercises: {
      basic: {
        id: `ex-${foundLessonMeta.id}-1`,
        lessonId: foundLessonMeta.id,
        title: `Bài tập Cơ bản: Khởi tạo & Kiểm tra ${foundLessonMeta.title}`,
        difficulty: 'basic',
        learningObjectiveIds: [`LO${foundModule.number}.1`],
        description: `Khai báo biến statusMsg = "Hoàn thành bài tập cơ bản: ${foundLessonMeta.title}". In giá trị này ra màn hình bằng console.log().`,
        starterCode: `// Khai báo biến và in ra Console:
const statusMsg = "Hoàn thành bài tập cơ bản: ${foundLessonMeta.title}";

console.log(statusMsg);`,
        solutionCode: `const statusMsg = "Hoàn thành bài tập cơ bản: ${foundLessonMeta.title}";\nconsole.log(statusMsg);`,
        testCases: [
          {
            id: 'tc-1',
            description: 'Kiểm tra in đúng thông điệp hoàn thành',
            expectedOutput: `Hoàn thành bài tập cơ bản: ${foundLessonMeta.title}`
          }
        ],
        hints: ['Sử dụng console.log(statusMsg)'],
        explanation: 'Lệnh console.log xuất chính xác nội dung chuỗi đã khai báo.'
      },
      intermediate: {
        id: `ex-${foundLessonMeta.id}-2`,
        lessonId: foundLessonMeta.id,
        title: `Bài tập Trung bình: Xử lý logic có điều kiện`,
        difficulty: 'intermediate',
        learningObjectiveIds: [`LO${foundModule.number}.2`],
        description: 'Cho mảng scores = [8, 9, 10]. Hãy tính trung bình cộng của 3 số này và in ra: `Điểm trung bình: 9`.',
        starterCode: `const scores = [8, 9, 10];

// Tính điểm trung bình và in ra:
const avg = (scores[0] + scores[1] + scores[2]) / scores.length;
console.log("Điểm trung bình:", avg);`,
        solutionCode: `const scores = [8, 9, 10];\nconst avg = (scores[0] + scores[1] + scores[2]) / scores.length;\nconsole.log("Điểm trung bình:", avg);`,
        testCases: [
          {
            id: 'tc-1',
            description: 'Kiểm tra tính điểm trung bình',
            expectedOutput: 'Điểm trung bình: 9'
          }
        ],
        hints: ['Lấy tổng chia cho scores.length'],
        explanation: '(8 + 9 + 10) / 3 = 9.'
      },
      challenge: {
        id: `ex-${foundLessonMeta.id}-3`,
        lessonId: foundLessonMeta.id,
        title: `Bài tập Thử thách: Viết hàm kiểm tra hợp lệ`,
        difficulty: 'challenge',
        learningObjectiveIds: [`LO${foundModule.number}.2`],
        description: 'Viết một hàm isValid(score) kiểm tra điểm từ 0 đến 10. Nếu hợp lệ in `Hợp lệ`, ngược lại in `Không hợp lệ`. Chạy thử với isValid(8.5).',
        starterCode: `function isValid(score) {
  if (score >= 0 && score <= 10) {
    console.log("Hợp lệ");
  } else {
    console.log("Không hợp lệ");
  }
}

isValid(8.5);`,
        solutionCode: `function isValid(score) {\n  if (score >= 0 && score <= 10) {\n    console.log("Hợp lệ");\n  } else {\n    console.log("Không hợp lệ");\n  }\n}\n\nisValid(8.5);`,
        testCases: [
          {
            id: 'tc-1',
            description: 'Kiểm tra điểm 8.5 hợp lệ',
            expectedOutput: 'Hợp lệ'
          }
        ],
        hints: ['Dùng toán tử && kết hợp hai điều kiện score >= 0 và score <= 10'],
        explanation: '8.5 nằm trong khoảng từ 0 đến 10 nên điều kiện trả về true.'
      }
    },
    quiz: {
      id: `quiz-${foundLessonMeta.id}`,
      lessonId: foundLessonMeta.id,
      title: `Trắc nghiệm đánh giá: ${foundLessonMeta.title}`,
      passingScore: 70,
      questions: [
        {
          id: `q-${foundLessonMeta.id}-1`,
          lessonId: foundLessonMeta.id,
          learningObjectiveId: `LO${foundModule.number}.1`,
          type: 'multiple_choice',
          difficulty: 'easy',
          prompt: `Khái niệm then chốt của bài học "${foundLessonMeta.title}" trong Module "${foundModule.title}" là gì?`,
          options: [
            { id: 'a', text: `Tối ưu hóa và áp dụng chuẩn ECMAScript hiện đại cho ${foundLessonMeta.title}` },
            { id: 'b', text: 'Chỉ áp dụng trên các trình duyệt Internet Explorer cũ' },
            { id: 'c', text: 'Chỉ dùng được trong ngôn ngữ PHP và C++' },
            { id: 'd', text: 'Không còn được hỗ trợ trong Web hiện đại' }
          ],
          correctAnswer: 'a',
          explanation: 'Mọi chủ đề trong chương trình đều hướng đến chuẩn ECMAScript hiện đại phục vụ doanh nghiệp.',
          relatedLessonId: foundLessonMeta.id
        }
      ]
    },
    summary: [
      `Nắm vững trọng tâm: ${foundLessonMeta.title}.`,
      'Thực hành kiểm tra kết quả liên tục trên Console trước khi đẩy code lên production.',
      'Ghi nhận bookmark nếu có điểm nào chưa hoàn toàn tự tin để ôn tập trong Review Center.'
    ],
    suggestedBookmarks: [
      `Quy tắc cú pháp chuẩn của ${foundLessonMeta.title}`,
      `Lưu ý lỗi logic thường gặp trong ${foundModule.title}`
    ]
  };
}
