import { Lesson } from '../../types';

// ==========================================
// MODULE 4: CẤU TRÚC ĐIỀU KHIỂN
// ==========================================

export const LESSON_4_1: Lesson = {
  id: 'les-4-1',
  moduleId: 'mod-4',
  track: 'javascript',
  language: 'javascript',
  title: '4.1 Rẽ nhánh với if, if...else và else if lồng nhau',
  order: 1,
  durationMinutes: 45,
  difficulty: 'Cơ bản',
  prerequisites: [
    'Biết toán tử so sánh (===, >, <, >=, <=)',
    'Hiểu khái niệm Truthy và Falsy'
  ],
  learningObjectives: [
    {
      id: 'LO4.1.1',
      code: 'LO4.1.1',
      title: 'Xây dựng cấu trúc rẽ nhánh đa tầng',
      description: 'Làm chủ cú pháp if, else if, else và xử lý luồng rẽ nhánh điều kiện logic.',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    },
    {
      id: 'LO4.1.2',
      code: 'LO4.1.2',
      title: 'Mẫu thiết kế Guard Clause (Lập trình phẳng)',
      description: 'Áp dụng mẫu Guard Clause kiểm tra điều kiện lỗi trước để tránh cấu trúc lồng nhau quá sâu (Arrow Anti-pattern).',
      bloomLevel: 'Analyze',
      masteryPercentage: 85
    }
  ],
  sections: [
    {
      id: 'sec-4-1-1',
      lessonId: 'les-4-1',
      order: 1,
      conceptName: 'Cấu trúc if, else if, else',
      title: '1. Phân loại luồng rẽ nhánh điều kiện',
      explanation: 'Câu lệnh `if` kiểm tra một biểu thức điều kiện; nếu Truthy thì khối mã bên trong `{}` sẽ được thực thi. Khi có nhiều nhánh phân loại lần lượt loại trừ nhau, ta dùng chuỗi `else if` và kết thúc bằng `else` như nhánh dự phòng cuối cùng.',
      syntax: 'if (dieuKien1) {\n  // Thuc thi 1\n} else if (dieuKien2) {\n  // Thuc thi 2\n} else {\n  // Truong hop con lai\n}',
      codeExample: `const score = 8.2;

if (score >= 9.0) {
  console.log("Xếp loại: Xuất sắc");
} else if (score >= 8.0) {
  console.log("Xếp loại: Giỏi");
} else if (score >= 6.5) {
  console.log("Xếp loại: Khá");
} else if (score >= 5.0) {
  console.log("Xếp loại: Trung bình");
} else {
  console.log("Xếp loại: Yếu - Cần học lại");
}`,
      lineByLineExplanation: [
        { line: 5, text: 'Vì score = 8.2 không thỏa >= 9.0 nhưng thỏa >= 8.0, khối này in ra "Xếp loại: Giỏi" và kết thúc chuỗi.' }
      ],
      commonMistakes: [
        'Sắp xếp thứ tự điều kiện sai: viết `if (score >= 5.0)` lên đầu khiến mọi điểm số 9.0 hay 8.0 đều bị phân loại là Trung bình!'
      ],
      whenToUse: 'Dùng khi cần phân loại dải giá trị liên tục (như điểm số, mức thuế, khoảng tuổi).',
      whenNotToUse: 'Không dùng chuỗi if/else if dài hơn 6 nhánh khi kiểm tra cùng 1 giá trị rời rạc (hãy dùng switch-case hoặc Object lookup).',
      realWorldUseCase: 'Xác định phí giao hàng dựa trên khoảng cách km từ kho đến nhà khách hàng.'
    },
    {
      id: 'sec-4-1-2',
      lessonId: 'les-4-1',
      order: 2,
      conceptName: 'Mẫu Guard Clauses (Clean Code)',
      title: '2. Thoát sớm (Guard Clauses) – Loại bỏ if lồng nhau',
      explanation: 'Thay vì viết nhiều tầng `if` lồng sâu vào nhau tạo hình tam giác nhọn (Arrow Code) rất khó đọc và dễ sót lỗi, lập trình viên chuyên nghiệp kiểm tra các điều kiện không hợp lệ trước và `return` sớm. Sau khi đã vượt qua các "lính gác" (Guard Clauses), luồng code chính sẽ chạy thẳng tắp.',
      syntax: 'function xuLy(input) {\n  if (!input) return "Lỗi: Thiếu dữ liệu";\n  if (input.length < 6) return "Lỗi: Quá ngắn";\n  // Code chinh...\n}',
      codeExample: `// Mẫu Guard Clause giúp mã nguồn phẳng và cực kỳ dễ hiểu
function dangKyKhoaHoc(student) {
  if (!student) {
    return "Lỗi: Không tìm thấy hồ sơ sinh viên!";
  }
  if (!student.isTuitionPaid) {
    return "Lỗi: Chưa hoàn tất học phí kỳ này!";
  }
  if (student.gpa < 2.0) {
    return "Cảnh báo: GPA chưa đạt chuẩn đầu vào!";
  }

  // Luồng thành công chính (không hề bị lồng trong else)
  return \`Đăng ký thành công khóa học cho \${student.name}\`;
}

console.log(dangKyKhoaHoc({ name: "Nguyễn Văn An", isTuitionPaid: true, gpa: 3.2 }));`,
      lineByLineExplanation: [
        { line: 3, text: 'Lính gác 1: kiểm tra đối tượng rỗng.' },
        { line: 6, text: 'Lính gác 2: kiểm tra trạng thái học phí.' },
        { line: 9, text: 'Lính gác 3: kiểm tra điểm chuẩn.' },
        { line: 14, text: 'Mã thành công được đặt phẳng ở cấp độ cao nhất của hàm.' }
      ],
      commonMistakes: [
        'Viết `if (...) { if (...) { if (...) { ... } } }` làm mã thụt lề 4-5 tab.'
      ],
      whenToUse: 'Luôn áp dụng Guard Clauses trong mọi hàm xử lý nghiệp vụ, kiểm tra form, và API handlers.',
      whenNotToUse: 'Không cần thiết cho các biểu thức rẽ nhánh cực ngắn 1 dòng.',
      realWorldUseCase: 'Kiểm tra token xác thực trong middleware trước khi cho phép người dùng xem dữ liệu điểm thi.'
    }
  ],
  predictOutputs: [
    {
      id: 'po-4-1-1',
      code: `const x = 10;
if (x > 5) {
  if (x < 15) {
    console.log("Nhánh A");
  } else {
    console.log("Nhánh B");
  }
} else {
  console.log("Nhánh C");
}`,
      question: 'Dòng nào sẽ được in ra màn hình?',
      options: ['Nhánh A', 'Nhánh B', 'Nhánh C', 'Không in gì'],
      correctAnswer: 'Nhánh A',
      explanation: '10 > 5 là true (vào khối trong). Tiếp tục 10 < 15 là true nên in "Nhánh A".',
      hint: 'Theo dõi từng nhánh if từ ngoài vào trong.'
    }
  ],
  interactivePractice: {
    id: 'ip-4-1',
    title: 'Thực hành: Phân loại nhóm tuổi vé xem phim',
    description: 'Chạy thử câu lệnh phân loại giá vé: Trẻ em (< 12 tuổi: 40k), Người lớn (12-59 tuổi: 80k), Cao tuổi (>= 60: 50k).',
    starterCode: `const age = 15;
let ticketPrice = 0;

if (age < 12) {
  ticketPrice = 40000;
} else if (age < 60) {
  ticketPrice = 80000;
} else {
  ticketPrice = 50000;
}

console.log("Giá vé áp dụng:", ticketPrice, "VNĐ");`,
    expectedConsoleOutput: 'Giá vé áp dụng: 80000 VNĐ',
    hint: 'Chạy thử để quan sát kết quả phân nhánh.',
    language: 'javascript'
  },
  exercises: {
    basic: {
      id: 'ex-4-1-1',
      lessonId: 'les-4-1',
      title: 'Bài tập Cơ bản: Kiểm tra trạng thái nhiệt độ',
      difficulty: 'basic',
      learningObjectiveIds: ['LO4.1.1'],
      description: 'Cho biến temp = 32. Nếu temp >= 30 in ra `Thời tiết nóng bức`. Nếu temp >= 20 in ra `Thời tiết dễ chịu`. Ngược lại in ra `Thời tiết lạnh giá`.',
      starterCode: `const temp = 32;

// Viết điều kiện rẽ nhánh:
`,
      solutionCode: `const temp = 32;
if (temp >= 30) {
  console.log("Thời tiết nóng bức");
} else if (temp >= 20) {
  console.log("Thời tiết dễ chịu");
} else {
  console.log("Thời tiết lạnh giá");
}`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra 32 độ là nóng bức',
          expectedOutput: 'Thời tiết nóng bức'
        }
      ],
      hints: ['Dùng if (temp >= 30) { ... } else if (temp >= 20) { ... }'],
      explanation: 'Sắp xếp điều kiện từ cao xuống thấp để phân loại chính xác.'
    },
    intermediate: {
      id: 'ex-4-1-2',
      lessonId: 'les-4-1',
      title: 'Bài tập Trung bình: Viết hàm xếp loại học tập chuẩn FPT Poly',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO4.1.1', 'LO4.1.2'],
      description: 'Viết hàm classifyStudent(score). Dùng Guard Clause: nếu score < 0 hoặc score > 10 trả về `Điểm không hợp lệ`. Nếu >= 8.5 trả về `Xuất sắc`, nếu >= 6.5 trả về `Khá`, nếu >= 5.0 trả về `Trung bình`, còn lại `Trượt môn`. In ra kết quả khi chạy với điểm 8.8.',
      starterCode: `function classifyStudent(score) {
  // Viết Guard clause và rẽ nhánh:
  
}

console.log(classifyStudent(8.8));`,
      solutionCode: `function classifyStudent(score) {
  if (score < 0 || score > 10) return "Điểm không hợp lệ";
  if (score >= 8.5) return "Xuất sắc";
  if (score >= 6.5) return "Khá";
  if (score >= 5.0) return "Trung bình";
  return "Trượt môn";
}

console.log(classifyStudent(8.8));`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra điểm 8.8 là Xuất sắc',
          expectedOutput: 'Xuất sắc'
        }
      ],
      hints: ['Kiểm tra điều kiện biên score < 0 || score > 10 trước'],
      explanation: 'Guard clause giúp loại trừ các dữ liệu rác ngay từ đầu hàm.'
    },
    challenge: {
      id: 'ex-4-1-3',
      lessonId: 'les-4-1',
      title: 'Bài tập Thử thách: Tính tiền cước xe công nghệ có phụ phí',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO4.1.1', 'LO4.1.2'],
      description: 'Viết hàm calculateTaxiFare(km, isRushHour). Giá cước: 2km đầu giá cố định 25000. Từ km thứ 3 trở đi, mỗi km thêm 12000. Nếu là giờ cao điểm (isRushHour === true), toàn bộ tiền cước tăng thêm 20%. In ra số tiền cước khi đi 5km vào giờ cao điểm: `Tiền cước xe: [kết quả] VNĐ`.',
      starterCode: `function calculateTaxiFare(km, isRushHour) {
  // Tính cước xe:
  
}

console.log("Tiền cước xe:", calculateTaxiFare(5, true), "VNĐ");`,
      solutionCode: `function calculateTaxiFare(km, isRushHour) {
  let fare = 25000;
  if (km > 2) {
    fare += (km - 2) * 12000;
  }
  if (isRushHour) {
    fare *= 1.2;
  }
  return fare;
}

console.log("Tiền cước xe:", calculateTaxiFare(5, true), "VNĐ");`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra 5km giờ cao điểm: (25k + 3*12k) * 1.2 = 73200 VNĐ',
          expectedOutput: 'Tiền cước xe: 73200 VNĐ'
        }
      ],
      hints: ['(25000 + 36000) * 1.2 = 61000 * 1.2 = 73200'],
      explanation: 'Tính toán giá trị cộng dồn dựa trên các nấc khoảng cách và phụ phí giờ cao điểm.'
    }
  },
  quiz: {
    id: 'quiz-4-1',
    lessonId: 'les-4-1',
    title: 'Trắc nghiệm: Rẽ nhánh if...else',
    passingScore: 70,
    questions: [
      {
        id: 'q-4-1-1',
        lessonId: 'les-4-1',
        learningObjectiveId: 'LO4.1.2',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'Lợi ích chính của mẫu thiết kế "Guard Clause" (thoát sớm với return) trong cấu trúc điều khiển là gì?',
        options: [
          { id: 'a', text: 'Làm chương trình chạy nhanh hơn gấp 10 lần' },
          { id: 'b', text: 'Giúp mã nguồn phẳng, dễ đọc, tránh việc lồng ghép câu lệnh if quá nhiều tầng (Arrow code)' },
          { id: 'c', text: 'Bắt buộc theo chuẩn ECMAScript không thể thay thế' },
          { id: 'd', text: 'Tự động sửa lỗi cú pháp của hàm' }
        ],
        correctAnswer: 'b',
        explanation: 'Guard Clauses kiểm tra lỗi và thoát sớm, giúp luồng logic chính không bị đẩy sâu vào bên trong nhiều lớp ngoặc nhọn.',
        relatedLessonId: 'les-4-1'
      }
    ]
  },
  summary: [
    'if...else if...else phân nhánh luồng chương trình theo các điều kiện loại trừ lẫn nhau.',
    'Thứ tự sắp xếp các nhánh điều kiện quyết định tính đúng đắn của logic phân loại.',
    'Áp dụng Guard Clauses để giữ mã nguồn luôn phẳng và ngăn chặn lỗi sớm.'
  ],
  suggestedBookmarks: [
    'Quy tắc sắp xếp dải giá trị trong cấu trúc else if',
    'Clean Code: Mẫu Guard Clause và nguyên lý Early Return'
  ]
};

export const LESSON_4_2: Lesson = {
  id: 'les-4-2',
  moduleId: 'mod-4',
  track: 'javascript',
  language: 'javascript',
  title: '4.2 Cấu trúc switch-case và fall-through xử lý menu',
  order: 2,
  durationMinutes: 45,
  difficulty: 'Cơ bản',
  prerequisites: [
    'Hiểu so sánh nghiêm ngặt (===)',
    'Biết cú pháp if...else'
  ],
  learningObjectives: [
    {
      id: 'LO4.2.1',
      code: 'LO4.2.1',
      title: 'Làm chủ cú pháp switch, case, break, default',
      description: 'Xây dựng cấu trúc switch-case chọn lọc cho các giá trị rời rạc xác định.',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    },
    {
      id: 'LO4.2.2',
      code: 'LO4.2.2',
      title: 'Hiểu hiện tượng Fall-through có chủ ý',
      description: 'Tận dụng việc gom nhóm nhiều case không có break để xử lý chung một hành vi.',
      bloomLevel: 'Analyze',
      masteryPercentage: 84
    }
  ],
  sections: [
    {
      id: 'sec-4-2-1',
      lessonId: 'les-4-2',
      order: 1,
      conceptName: 'Cú pháp switch-case cơ bản',
      title: '1. Cấu trúc switch-case và vai trò sống còn của lệnh break',
      explanation: 'Khi cần so sánh MỘT biến số với nhiều giá trị rời rạc cố định (như mã trạng thái, thứ trong tuần, quyền hạn), câu lệnh `switch` đem lại sự trong sáng hơn nhiều so với viết hàng loạt `if (x === 1) else if (x === 2)`. Lưu ý cốt lõi: switch luôn so sánh bằng toán tử nghiêm ngặt `===`. Mỗi khối case PHẢI kết thúc bằng lệnh `break`, nếu không chương trình sẽ tiếp tục chạy tuột xuống các case bên dưới!',
      syntax: 'switch (bieuThuc) {\n  case giaTri1:\n    // code\n    break;\n  default:\n    // code mac dinh\n}',
      codeExample: `const dayNumber = 3;

switch (dayNumber) {
  case 2:
    console.log("Thứ Hai đầu tuần");
    break;
  case 3:
    console.log("Thứ Ba học JavaScript");
    break;
  case 4:
    console.log("Thứ Tư thực hành Lab");
    break;
  default:
    console.log("Các ngày khác trong tuần");
    break;
}`,
      lineByLineExplanation: [
        { line: 7, text: 'Vì dayNumber === 3, khối case 3 thực thi và gặp lệnh break để thoát khỏi switch.' }
      ],
      commonMistakes: [
        'Quên viết lệnh `break` ở cuối case khiến các lệnh của case bên dưới cũng bị kích hoạt theo (Fall-through ngoài ý muốn).',
        'So sánh kiểu khác nhau: `switch ("2")` sẽ KHÔNG khớp với `case 2:` vì switch dùng so sánh nghiêm ngặt ===!'
      ],
      whenToUse: 'Dùng khi có từ 3 giá trị rời rạc trở lên cần đối chiếu với 1 biến duy nhất.',
      whenNotToUse: 'Không dùng khi điều kiện là các khoảng liên tục (như `x > 10 && x < 20`, trường hợp này if/else phù hợp hơn).',
      realWorldUseCase: 'Xử lý mã trạng thái đơn hàng: "PENDING", "PROCESSING", "SHIPPED", "DELIVERED", "CANCELLED".'
    },
    {
      id: 'sec-4-2-2',
      lessonId: 'les-4-2',
      order: 2,
      conceptName: 'Kỹ thuật Fall-through có chủ ý (Gom nhóm case)',
      title: '2. Kỹ thuật gom nhóm Case (Intentional Fall-through)',
      explanation: 'Không phải lúc nào việc thiếu lệnh `break` cũng là lỗi. Lập trình viên có thể chủ động bỏ lệnh `break` để gom nhiều trường hợp khác nhau xử lý chung một đoạn mã nguồn, giúp loại bỏ việc lặp lại mã (DRY - Don\'t Repeat Yourself).',
      syntax: 'case 1:\ncase 2:\ncase 3:\n  // Xu ly chung cho 1, 2, 3\n  break;',
      codeExample: `const month = 4; // Tháng 4

switch (month) {
  case 1:
  case 2:
  case 3:
    console.log("Mùa Xuân đâm chồi nảy lộc");
    break;
  case 4:
  case 5:
  case 6:
    console.log("Mùa Hè rực rỡ nắng vàng");
    break;
  case 7:
  case 8:
  case 9:
    console.log("Mùa Thu mát mẻ khai trường");
    break;
  default:
    console.log("Mùa Đông ấm áp");
    break;
}`,
      lineByLineExplanation: [
        { line: 8, text: 'month = 4 sẽ rơi thẳng xuống case 6 và in thông báo Mùa Hè.' }
      ],
      commonMistakes: [
        'Không ghi chú rõ ràng khi cố tình dùng fall-through khiến đồng nghiệp tưởng là lỗi quên break.'
      ],
      whenToUse: 'Dùng khi phân nhóm ngày làm việc / ngày cuối tuần, phân nhóm tháng theo quý hoặc mùa.',
      whenNotToUse: 'Không lạm dụng khi các case có logic phân nhánh phức tạp.',
      realWorldUseCase: 'Phân loại ngày: case "T7": case "CN": return "Cuối tuần nghỉ ngơi";'
    }
  ],
  predictOutputs: [
    {
      id: 'po-4-2-1',
      code: `const role = "admin";
switch (role) {
  case "admin":
    console.log("Quyền Quản Trị");
  case "user":
    console.log("Quyền Thành Viên");
    break;
  default:
    console.log("Khách");
}`,
      question: 'Do case "admin" quên lệnh break, kết quả in ra là gì?',
      options: [
        'Chỉ in "Quyền Quản Trị"',
        'In cả "Quyền Quản Trị" và "Quyền Thành Viên"',
        'Chỉ in "Quyền Thành Viên"',
        'Lỗi SyntaxError'
      ],
      correctAnswer: 'In cả "Quyền Quản Trị" và "Quyền Thành Viên"',
      explanation: 'Do thiếu lệnh break ở case "admin", chương trình tiếp tục "rơi tự do" (fall-through) thực hiện luôn lệnh in của case "user" kế tiếp.',
      hint: 'Hiện tượng Fall-through khi thiếu lệnh break.'
    }
  ],
  interactivePractice: {
    id: 'ip-4-2',
    title: 'Thực hành: Xây dựng menu điều hướng chọn chức năng',
    description: 'Viết câu lệnh switch-case để in ra hành động tương ứng với mã lựa chọn menu.',
    starterCode: `const option = 2;

switch (option) {
  case 1:
    console.log("1. Xem danh sách bài học");
    break;
  case 2:
    console.log("2. Bắt đầu làm bài Quiz");
    break;
  case 3:
    console.log("3. Mở tab Bookmark");
    break;
  default:
    console.log("Lựa chọn không hợp lệ!");
    break;
}`,
    expectedConsoleOutput: '2. Bắt đầu làm bài Quiz',
    hint: 'Chạy thử để quan sát nhánh case 2 được thực thi.',
    language: 'javascript'
  },
  exercises: {
    basic: {
      id: 'ex-4-2-1',
      lessonId: 'les-4-2',
      title: 'Bài tập Cơ bản: Dịch tên màu sắc sang tiếng Việt',
      difficulty: 'basic',
      learningObjectiveIds: ['LO4.2.1'],
      description: 'Cho biến color = "red". Dùng switch-case kiểm tra: nếu "red" in ra `Màu đỏ`, nếu "blue" in ra `Màu xanh dương`, nếu "green" in ra `Màu xanh lá`, mặc định in `Màu sắc khác`.',
      starterCode: `const color = "red";

// Viết switch-case tại đây:
`,
      solutionCode: `const color = "red";
switch (color) {
  case "red":
    console.log("Màu đỏ");
    break;
  case "blue":
    console.log("Màu xanh dương");
    break;
  case "green":
    console.log("Màu xanh lá");
    break;
  default:
    console.log("Màu sắc khác");
    break;
}`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra color "red" in ra Màu đỏ',
          expectedOutput: 'Màu đỏ'
        }
      ],
      hints: ['Đừng quên break sau mỗi case'],
      explanation: 'Cấu trúc switch-case rõ ràng cho từng giá trị chuỗi.'
    },
    intermediate: {
      id: 'ex-4-2-2',
      lessonId: 'les-4-2',
      title: 'Bài tập Trung bình: Phân biệt ngày làm việc và cuối tuần',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO4.2.2'],
      description: 'Cho biến day = "T7". Dùng kỹ thuật gom nhóm case: nếu là "T2", "T3", "T4", "T5", "T6" in ra `Ngày làm việc chăm chỉ`. Nếu là "T7" hoặc "CN" in ra `Cuối tuần nghỉ ngơi`.',
      starterCode: `const day = "T7";

// Dùng gom nhóm case:
`,
      solutionCode: `const day = "T7";
switch (day) {
  case "T2":
  case "T3":
  case "T4":
  case "T5":
  case "T6":
    console.log("Ngày làm việc chăm chỉ");
    break;
  case "T7":
  case "CN":
    console.log("Cuối tuần nghỉ ngơi");
    break;
  default:
    console.log("Ngày không xác định");
    break;
}`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra T7 là Cuối tuần nghỉ ngơi',
          expectedOutput: 'Cuối tuần nghỉ ngơi'
        }
      ],
      hints: ['Gom case "T7": case "CN": console.log(...) break;'],
      explanation: 'Kỹ thuật fall-through giúp tránh việc lặp lại câu lệnh in nhiều lần.'
    },
    challenge: {
      id: 'ex-4-2-3',
      lessonId: 'les-4-2',
      title: 'Bài tập Thử thách: Máy tính cầm tay 4 phép tính cơ bản',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO4.2.1'],
      description: 'Viết hàm calculator(a, b, op). Dùng switch(op): nếu "+" in ra kết quả a + b, nếu "-" in ra a - b, nếu "*" in ra a * b, nếu "/" in ra a / b (nếu b === 0 in "Lỗi chia cho 0"). Chạy thử với calculator(10, 2, "/").',
      starterCode: `function calculator(a, b, op) {
  // Viết switch-case:
  
}

calculator(10, 2, "/");`,
      solutionCode: `function calculator(a, b, op) {
  switch (op) {
    case "+":
      console.log(a + b);
      break;
    case "-":
      console.log(a - b);
      break;
    case "*":
      console.log(a * b);
      break;
    case "/":
      if (b === 0) {
        console.log("Lỗi chia cho 0");
      } else {
        console.log(a / b);
      }
      break;
    default:
      console.log("Toán tử không hợp lệ");
      break;
  }
}

calculator(10, 2, "/");`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra phép chia 10 / 2 = 5',
          expectedOutput: '5'
        }
      ],
      hints: ['switch (op) với 4 case tương ứng các toán tử'],
      explanation: 'Xây dựng máy tính toán học nhỏ bằng switch-case chuyên nghiệp.'
    }
  },
  quiz: {
    id: 'quiz-4-2',
    lessonId: 'les-4-2',
    title: 'Trắc nghiệm: Cấu trúc switch-case',
    passingScore: 70,
    questions: [
      {
        id: 'q-4-2-1',
        lessonId: 'les-4-2',
        learningObjectiveId: 'LO4.2.1',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'Toán tử so sánh nào được JavaScript ngầm sử dụng khi đối soát biểu thức trong switch với các giá trị case?',
        options: [
          { id: 'a', text: '==' },
          { id: 'b', text: '===' },
          { id: 'c', text: 'Object.is()' },
          { id: 'd', text: '!=' }
        ],
        correctAnswer: 'b',
        explanation: 'switch-case luôn sử dụng so sánh nghiêm ngặt === (Strict Equality), kiểm tra cả giá trị lẫn kiểu dữ liệu.',
        relatedLessonId: 'les-4-2'
      }
    ]
  },
  summary: [
    'switch-case lý tưởng cho việc so sánh 1 biểu thức với nhiều giá trị rời rạc.',
    'Bắt buộc dùng break ở mỗi nhánh trừ khi bạn chủ ý muốn áp dụng kỹ thuật gom nhóm Fall-through.',
    'Nhớ rằng switch luôn kiểm tra theo cơ chế so sánh nghiêm ngặt (===).'
  ],
  suggestedBookmarks: [
    'So sánh hiệu năng giữa switch-case và Object Dictionary Lookup',
    'Cạm bẫy quên lệnh break và kỹ thuật gom nhóm case'
  ]
};

export const LESSON_4_3: Lesson = {
  id: 'les-4-3',
  moduleId: 'mod-4',
  track: 'javascript',
  language: 'javascript',
  title: '4.3 Toán tử 3 ngôi (Ternary) & Quy chuẩn Clean Code',
  order: 3,
  durationMinutes: 30,
  difficulty: 'Cơ bản',
  prerequisites: [
    'Hiểu câu lệnh if...else',
    'Biết biểu thức điều kiện trả về boolean'
  ],
  learningObjectives: [
    {
      id: 'LO4.3.1',
      code: 'LO4.3.1',
      title: 'Cú pháp toán tử 3 ngôi (Ternary Operator)',
      description: 'Sử dụng thành thạo condition ? exprIfTrue : exprIfFalse để gán giá trị nhanh gọn trên 1 dòng.',
      bloomLevel: 'Apply',
      masteryPercentage: 95
    },
    {
      id: 'LO4.3.2',
      code: 'LO4.3.2',
      title: 'Quy chuẩn Clean Code khi dùng toán tử 3 ngôi',
      description: 'Nhận biết khi nào nên dùng Ternary và khi nào cần tránh lồng ghép quá sâu làm giảm tính dễ đọc.',
      bloomLevel: 'Evaluate',
      masteryPercentage: 88
    }
  ],
  sections: [
    {
      id: 'sec-4-3-1',
      lessonId: 'les-4-3',
      order: 1,
      conceptName: 'Toán tử ba ngôi (condition ? a : b)',
      title: '1. Rút gọn if...else với toán tử duy nhất nhận 3 toán hạng',
      explanation: 'Toán tử 3 ngôi (Ternary Operator) là toán tử duy nhất trong JavaScript có 3 toán hạng: `điều_kiện ? giá_trị_nếu_đúng : giá_trị_nếu_sai`. Khác với câu lệnh `if` là một statement (không trả về giá trị), toán tử 3 ngôi là một expression (biểu thức), nghĩa là nó trực tiếp TRẢ VỀ MỘT GIÁ TRỊ để gán thẳng vào biến hoặc nội suy vào chuỗi.',
      syntax: 'const ketQua = dieuKien ? giaTriDung : giaTriSai;',
      codeExample: `const age = 19;

// Cách cũ với if/else (dài 5 dòng)
let status1;
if (age >= 18) {
  status1 = "Đã trưởng thành";
} else {
  status1 = "Vị thành niên";
}

// Cách hiện đại với Toán tử 3 ngôi (chỉ 1 dòng duy nhất!)
const status2 = age >= 18 ? "Đã trưởng thành" : "Vị thành niên";

console.log("Kết quả:", status2);`,
      lineByLineExplanation: [
        { line: 12, text: 'Biểu thức kiểm tra age >= 18, đúng thì trả về "Đã trưởng thành" và gán trực tiếp vào hằng số const status2.' }
      ],
      commonMistakes: [
        'Dùng toán tử 3 ngôi để thực thi hành vi mà không lấy giá trị trả về: `age >= 18 ? console.log("A") : console.log("B");` -> Trường hợp này nên dùng câu lệnh if thông thường.'
      ],
      whenToUse: 'Dùng khi cần gán giá trị cho một biến hoặc nội suy vào JSX/Template literals.',
      whenNotToUse: 'Tuyệt đối không lồng 3 ngôi quá 2 tầng (`a ? b : c ? d : e ? f : g`) vì gây ác mộng cho người đọc code.',
      realWorldUseCase: 'Render trạng thái huy hiệu trong giao diện: `const badgeColor = isOnline ? "green" : "gray";`.'
    },
    {
      id: 'sec-4-3-2',
      lessonId: 'les-4-3',
      order: 2,
      conceptName: 'Quy chuẩn Clean Code với Ternary',
      title: '2. Quy chuẩn thực chiến: Khi nào nên và không nên dùng Ternary',
      explanation: 'Mục đích tối thượng của code là để con người đọc hiểu, sau đó máy mới thực thi. Một toán tử 3 ngôi viết gọn trên 1 dòng rất thanh lịch, nhưng nếu biểu thức điều kiện quá dài, hãy ngắt dòng rõ ràng hoặc quay lại dùng `if...else`.',
      syntax: '// Định dạng nhiều dòng khi biểu thức dài:\nconst rank =\n  score >= 9.0 ? "Xuất sắc"\n  : score >= 8.0 ? "Giỏi"\n  : "Khá";',
      codeExample: `const isMember = true;
const discount = isMember ? 0.2 : 0.0;
console.log("Mức chiết khấu:", discount * 100 + "%");`,
      lineByLineExplanation: [
        { line: 2, text: 'Gán mức giảm giá 20% cho hội viên hoặc 0% cho khách vãng lai.' }
      ],
      commonMistakes: [
        'Lạm dụng toán tử 3 ngôi lồng nhau phức tạp khiến đồng nghiệp phải debug mất hàng giờ.'
      ],
      whenToUse: 'Dùng cho các phép gán nhị phân đơn giản (True/False).',
      whenNotToUse: 'Khi mỗi nhánh cần thực hiện nhiều dòng lệnh xử lý khác nhau.',
      realWorldUseCase: 'Thiết lập class CSS cho nút bấm: `className={isActive ? "btn-active" : "btn-disabled"}`.'
    }
  ],
  predictOutputs: [
    {
      id: 'po-4-3-1',
      code: `const isLogged = false;
console.log(isLogged ? "Xin chào Admin" : "Vui lòng đăng nhập");`,
      question: 'Dòng chữ nào sẽ được hiển thị ra màn hình?',
      options: ['"Xin chào Admin"', '"Vui lòng đăng nhập"', 'undefined', 'false'],
      correctAnswer: '"Vui lòng đăng nhập"',
      explanation: 'Vì isLogged mang giá trị false, toán tử 3 ngôi trả về biểu thức nằm sau dấu hai chấm (:).',
      hint: 'Sau dấu hỏi chấm (?) là khi đúng, sau dấu hai chấm (:) là khi sai.'
    }
  ],
  interactivePractice: {
    id: 'ip-4-3',
    title: 'Thực hành: Gán nhãn trạng thái sinh viên qua Ternary',
    description: 'Sử dụng toán tử 3 ngôi để xác định nhãn "Đạt chuẩn" hoặc "Chưa đạt" dựa trên điểm số.',
    starterCode: `const finalScore = 6.5;
const result = finalScore >= 5.0 ? "Đạt chuẩn" : "Chưa đạt";

console.log("Kết quả học phần:", result);`,
    expectedConsoleOutput: 'Kết quả học phần: Đạt chuẩn',
    hint: 'Chạy thử để quan sát phép gán 1 dòng.',
    language: 'javascript'
  },
  exercises: {
    basic: {
      id: 'ex-4-3-1',
      lessonId: 'les-4-3',
      title: 'Bài tập Cơ bản: Xác định tính chẵn lẻ bằng toán tử 3 ngôi',
      difficulty: 'basic',
      learningObjectiveIds: ['LO4.3.1'],
      description: 'Cho biến number = 9. Dùng toán tử 3 ngôi gán cho biến parity giá trị "Số lẻ" nếu number % 2 !== 0, ngược lại "Số chẵn". In ra kết quả.',
      starterCode: `const number = 9;

// Dùng toán tử 3 ngôi:
`,
      solutionCode: `const number = 9;
const parity = number % 2 !== 0 ? "Số lẻ" : "Số chẵn";
console.log(parity);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra 9 là số lẻ',
          expectedOutput: 'Số lẻ'
        }
      ],
      hints: ['const parity = number % 2 !== 0 ? "Số lẻ" : "Số chẵn";'],
      explanation: 'Toán tử 3 ngôi giúp gán nhãn ngắn gọn trên 1 dòng.'
    },
    intermediate: {
      id: 'ex-4-3-2',
      lessonId: 'les-4-3',
      title: 'Bài tập Trung bình: Xác định trạng thái tài khoản người dùng',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO4.3.1', 'LO4.3.2'],
      description: 'Cho đối tượng user = { name: "An", active: true }. Dùng toán tử 3 ngôi tạo chuỗi thông báo: `Tài khoản của An: Đang hoạt động` (nếu active là true), ngược lại `Tài khoản của An: Đã bị khóa`. In thông báo.',
      starterCode: `const user = { name: "An", active: true };

// Tạo chuỗi thông báo:
`,
      solutionCode: `const user = { name: "An", active: true };
const statusMsg = \`Tài khoản của \${user.name}: \${user.active ? "Đang hoạt động" : "Đã bị khóa"}\`;
console.log(statusMsg);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra tài khoản An đang hoạt động',
          expectedOutput: 'Tài khoản của An: Đang hoạt động'
        }
      ],
      hints: ['Nội suy toán tử 3 ngôi trực tiếp bên trong Template literals ${}'],
      explanation: 'Nhúng trực tiếp toán tử 3 ngôi vào Template literals là mẫu viết mã chuẩn mực trong React và JS hiện đại.'
    },
    challenge: {
      id: 'ex-4-3-3',
      lessonId: 'les-4-3',
      title: 'Bài tập Thử thách: Tính tiền ship có điều kiện miễn phí',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO4.3.1', 'LO4.3.2'],
      description: 'Chính sách: đơn hàng từ 500k trở lên được Miễn phí ship (0đ), đơn hàng dưới 500k có phí ship 30k. Với cartTotal = 450000, hãy dùng toán tử 3 ngôi tính phí ship và in ra: `Phí vận chuyển: 30000 VNĐ | Tổng thanh toán: 480000 VNĐ`.',
      starterCode: `const cartTotal = 450000;

// Tính shippingFee bằng toán tử 3 ngôi và in ra:
`,
      solutionCode: `const cartTotal = 450000;
const shippingFee = cartTotal >= 500000 ? 0 : 30000;
const finalAmount = cartTotal + shippingFee;
console.log(\`Phí vận chuyển: \${shippingFee} VNĐ | Tổng thanh toán: \${finalAmount} VNĐ\`);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra đơn 450k có phí ship 30k, tổng 480k',
          expectedOutput: 'Phí vận chuyển: 30000 VNĐ | Tổng thanh toán: 480000 VNĐ'
        }
      ],
      hints: ['const shippingFee = cartTotal >= 500000 ? 0 : 30000;'],
      explanation: 'Tính toán giá trị động giúp nghiệp vụ giỏ hàng luôn chính xác và tinh gọn.'
    }
  },
  quiz: {
    id: 'quiz-4-3',
    lessonId: 'les-4-3',
    title: 'Trắc nghiệm: Toán tử ba ngôi',
    passingScore: 70,
    questions: [
      {
        id: 'q-4-3-1',
        lessonId: 'les-4-3',
        learningObjectiveId: 'LO4.3.1',
        type: 'multiple_choice',
        difficulty: 'easy',
        prompt: 'Toán tử ba ngôi (Ternary Operator) khác với câu lệnh if...else truyền thống ở điểm mấu chốt nào?',
        options: [
          { id: 'a', text: 'Toán tử 3 ngôi chạy chậm hơn if...else' },
          { id: 'b', text: 'Toán tử 3 ngôi là một biểu thức (Expression) có thể trực tiếp trả về giá trị để gán vào biến' },
          { id: 'c', text: 'Toán tử 3 ngôi không thể kết hợp cùng biến const' },
          { id: 'd', text: 'Toán tử 3 ngôi chỉ dùng được cho số' }
        ],
        correctAnswer: 'b',
        explanation: 'Vì là một expression, toán tử 3 ngôi trả về giá trị, cho phép gán trực tiếp cho biến const hoặc nhúng vào Template literals.',
        relatedLessonId: 'les-4-3'
      }
    ]
  },
  summary: [
    'Toán tử 3 ngôi là cách viết tắt thanh lịch cho phép gán điều kiện nhị phân.',
    'Trực tiếp trả về giá trị, rất thích hợp khi kết hợp cùng Template Literals và React JSX.',
    'Tuyệt đối tuân thủ Clean Code: không lồng ghép 3 ngôi nhiều tầng làm giảm tính dễ đọc.'
  ],
  suggestedBookmarks: [
    'Quy tắc Clean Code: Khi nào nên dùng Ternary vs if...else',
    'Nhúng toán tử 3 ngôi trong Template Literals và JSX'
  ]
};

export const JS_MODULE_4_LESSONS: Lesson[] = [
  LESSON_4_1,
  LESSON_4_2,
  LESSON_4_3
];
