import { Lesson } from '../../types';

// ==========================================
// MODULE 5: VÒNG LẶP
// ==========================================

export const LESSON_5_1: Lesson = {
  id: 'les-5-1',
  moduleId: 'mod-5',
  track: 'javascript',
  language: 'javascript',
  title: '5.1 Vòng lặp for kinh điển và các biến thể',
  order: 1,
  durationMinutes: 50,
  difficulty: 'Cơ bản',
  prerequisites: [
    'Biết khai báo biến với let',
    'Hiểu toán tử tăng giảm (i++, i--)'
  ],
  learningObjectives: [
    {
      id: 'LO5.1.1',
      code: 'LO5.1.1',
      title: 'Giải phẫu 3 thành phần của vòng lặp for',
      description: 'Làm chủ: (1) Khởi tạo biến đếm, (2) Điều kiện duy trì lặp, (3) Bước nhảy sau mỗi chu kỳ.',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    },
    {
      id: 'LO5.1.2',
      code: 'LO5.1.2',
      title: 'Duyệt mảng và tính tổng tích lũy',
      description: 'Vận dụng vòng lặp for để duyệt qua các phần tử của mảng và tính tổng hoặc tìm giá trị lớn nhất.',
      bloomLevel: 'Apply',
      masteryPercentage: 88
    }
  ],
  sections: [
    {
      id: 'sec-5-1-1',
      lessonId: 'les-5-1',
      order: 1,
      conceptName: 'Cấu trúc 3 thành phần của vòng lặp for',
      title: '1. Chu trình thực thi từng bước của vòng lặp for',
      explanation: 'Vòng lặp `for` được dùng khi ta BIẾT TRƯỚC số lần lặp. Cú pháp gồm 3 mệnh đề ngăn cách bởi dấu chấm phẩy (;): (1) Khởi tạo biến đếm (chỉ chạy 1 lần duy nhất lúc bắt đầu); (2) Kiểm tra điều kiện (chạy trước mỗi lần lặp, nếu true thì chạy thân lặp, false thì dừng); (3) Bước nhảy (chạy sau khi thân lặp hoàn tất).',
      syntax: 'for (khoiTao; dieuKien; buocNhay) {\n  // Khối lệnh lặp\n}',
      codeExample: `// Đếm xuôi từ 1 đến 5
for (let i = 1; i <= 5; i++) {
  console.log("Lần lặp thứ:", i);
}

// Đếm ngược từ 3 về 1 (Countdown)
for (let j = 3; j > 0; j--) {
  console.log("Đếm ngược:", j);
}`,
      lineByLineExplanation: [
        { line: 2, text: 'let i = 1 khởi tạo biến đếm i. i <= 5 kiểm tra điều kiện. i++ tăng i lên 1 sau mỗi lần lặp.' },
        { line: 7, text: 'Vòng lặp đếm lùi dùng bước nhảy giảm dần j--.' }
      ],
      commonMistakes: [
        'Dùng `const` cho biến đếm: `for (const i = 0; ...)` -> Bị lỗi TypeError ngay ở lần lặp thứ hai vì không thể tăng biến const!',
        'Viết sai điều kiện khiến vòng lặp chạy vĩnh viễn (Infinite Loop) làm treo trình duyệt.'
      ],
      whenToUse: 'Dùng khi biết trước số lần lặp cụ thể hoặc cần duyệt mảng có truy xuất chỉ số index.',
      whenNotToUse: 'Khi duyệt toàn bộ mảng mà không cần index, hãy ưu tiên dùng `for...of` hoặc các hàm mảng cao cấp.',
      realWorldUseCase: 'Tạo danh sách phân trang (Pagination): lặp từ trang 1 đến trang tổng số.'
    },
    {
      id: 'sec-5-1-2',
      lessonId: 'les-5-1',
      order: 2,
      conceptName: 'Duyệt mảng với chỉ số index',
      title: '2. Kỹ thuật duyệt mảng kinh điển với array.length',
      explanation: 'Vì chỉ số của mảng trong JavaScript bắt đầu từ 0 và kết thúc tại `array.length - 1`, ta luôn bắt đầu từ `let i = 0` và điều kiện duy trì là `i < array.length`.',
      syntax: 'for (let i = 0; i < arr.length; i++) {\n  const phanTu = arr[i];\n}',
      codeExample: `const scores = [8.5, 9.0, 7.5, 10];
let total = 0;

for (let i = 0; i < scores.length; i++) {
  total += scores[i];
}

const average = total / scores.length;
console.log("Điểm trung bình lớp:", average);`,
      lineByLineExplanation: [
        { line: 4, text: 'i chạy từ 0 đến 3 (scores.length là 4).' },
        { line: 5, text: 'Cộng dồn điểm của từng sinh viên vào biến total.' }
      ],
      commonMistakes: [
        'Viết `i <= scores.length` dẫn đến lần lặp cuối cùng truy xuất `scores[4]` bị `undefined` (Off-by-one bug).'
      ],
      whenToUse: 'Dùng khi cần duyệt mảng cần thay đổi phần tử hoặc duyệt nhảy cóc bước 2, 3.',
      whenNotToUse: 'Không tối ưu lặp lồng nhau sâu khi dữ liệu lên đến hàng trăm nghìn phần tử.',
      realWorldUseCase: 'Tìm kiếm phần tử lớn nhất hoặc nhỏ nhất trong danh sách sản phẩm.'
    }
  ],
  predictOutputs: [
    {
      id: 'po-5-1-1',
      code: `let count = 0;
for (let i = 0; i < 3; i++) {
  count += i;
}
console.log(count);`,
      question: 'Giá trị in ra của biến count là bao nhiêu?',
      options: ['3', '6', '0', 'undefined'],
      correctAnswer: '3',
      explanation: 'Các giá trị i lần lượt là: 0, 1, 2. Tổng tích lũy: count = 0 + 0 + 1 + 2 = 3.',
      hint: 'Vòng lặp dừng khi i = 3 (3 < 3 là false).'
    }
  ],
  interactivePractice: {
    id: 'ip-5-1',
    title: 'Thực hành: Tính tổng các số từ 1 đến 10',
    description: 'Chạy vòng lặp for tính tổng dãy số tự nhiên từ 1 đến 10 (công thức n*(n+1)/2 = 55).',
    starterCode: `let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum += i;
}

console.log("Tổng từ 1 đến 10 là:", sum);`,
    expectedConsoleOutput: 'Tổng từ 1 đến 10 là: 55',
    hint: 'Chạy thử để quan sát kết quả tính toán.',
    language: 'javascript'
  },
  exercises: {
    basic: {
      id: 'ex-5-1-1',
      lessonId: 'les-5-1',
      title: 'Bài tập Cơ bản: In bảng cửu chương 5',
      difficulty: 'basic',
      learningObjectiveIds: ['LO5.1.1'],
      description: 'Dùng vòng lặp for từ i = 1 đến 3 in ra bảng nhân 5 theo mẫu:\n`5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15`',
      starterCode: `// Viết vòng lặp in bảng cửu chương 5:
`,
      solutionCode: `for (let i = 1; i <= 3; i++) {
  console.log(\`5 x \${i} = \${5 * i}\`);
}`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra in 3 dòng cửu chương 5',
          expectedOutput: '5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15'
        }
      ],
      hints: ['Dùng for (let i = 1; i <= 3; i++)'],
      explanation: 'Vòng lặp for ngắn gọn giúp nhân bản các câu lệnh theo quy luật toán học.'
    },
    intermediate: {
      id: 'ex-5-1-2',
      lessonId: 'les-5-1',
      title: 'Bài tập Trung bình: Đếm số lượng số chẵn trong mảng',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO5.1.2'],
      description: 'Cho mảng numbers = [2, 5, 8, 11, 14, 17, 20]. Hãy duyệt mảng và đếm xem có bao nhiêu số chẵn. In ra: `Số lượng số chẵn: [kết quả]`.',
      starterCode: `const numbers = [2, 5, 8, 11, 14, 17, 20];
let evenCount = 0;

// Duyệt và đếm:

console.log("Số lượng số chẵn:", evenCount);`,
      solutionCode: `const numbers = [2, 5, 8, 11, 14, 17, 20];
let evenCount = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenCount++;
  }
}

console.log("Số lượng số chẵn:", evenCount);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra có 4 số chẵn (2, 8, 14, 20)',
          expectedOutput: 'Số lượng số chẵn: 4'
        }
      ],
      hints: ['Kiểm tra numbers[i] % 2 === 0'],
      explanation: 'Có 4 số chẵn trong mảng là 2, 8, 14 và 20.'
    },
    challenge: {
      id: 'ex-5-1-3',
      lessonId: 'les-5-1',
      title: 'Bài tập Thử thách: Tìm điểm số cao nhất (Thủ thuật Max)',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO5.1.2'],
      description: 'Cho danh sách điểm: `grades = [7.5, 9.2, 6.8, 9.8, 8.4]`. Hãy dùng vòng lặp for để tìm ra điểm cao nhất (không dùng Math.max). In ra: `Điểm cao nhất: [kết quả]`.',
      starterCode: `const grades = [7.5, 9.2, 6.8, 9.8, 8.4];
let maxGrade = grades[0];

// Tìm điểm cao nhất:

console.log("Điểm cao nhất:", maxGrade);`,
      solutionCode: `const grades = [7.5, 9.2, 6.8, 9.8, 8.4];
let maxGrade = grades[0];

for (let i = 1; i < grades.length; i++) {
  if (grades[i] > maxGrade) {
    maxGrade = grades[i];
  }
}

console.log("Điểm cao nhất:", maxGrade);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra điểm cao nhất là 9.8',
          expectedOutput: 'Điểm cao nhất: 9.8'
        }
      ],
      hints: ['Khởi tạo maxGrade = grades[0] rồi duyệt so sánh'],
      explanation: 'Thuật toán tìm phần tử cực đại kinh điển bằng cách duyệt tuyến tính qua danh sách.'
    }
  },
  quiz: {
    id: 'quiz-5-1',
    lessonId: 'les-5-1',
    title: 'Trắc nghiệm: Vòng lặp for',
    passingScore: 70,
    questions: [
      {
        id: 'q-5-1-1',
        lessonId: 'les-5-1',
        learningObjectiveId: 'LO5.1.1',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'Điều gì sẽ xảy ra nếu bạn khai báo biến đếm của vòng lặp for bằng từ khóa const (ví dụ: for (const i = 0; i < 5; i++))?',
        options: [
          { id: 'a', text: 'Vòng lặp chạy bình thường' },
          { id: 'b', text: 'Chạy được lần đầu tiên (i = 0), sau đó ném lỗi TypeError khi thực hiện i++' },
          { id: 'c', text: 'Chương trình tự động chuyển sang let' },
          { id: 'd', text: 'Vòng lặp không chạy lần nào' }
        ],
        correctAnswer: 'b',
        explanation: 'Biến khai báo bằng const không thể tái gán. Khi hết vòng lặp 1 và gặp bước nhảy i++, JS sẽ ném lỗi TypeError: Assignment to constant variable.',
        relatedLessonId: 'les-5-1'
      }
    ]
  },
  summary: [
    'Vòng lặp for gồm 3 phần: khởi tạo, điều kiện lặp, bước nhảy.',
    'Bắt buộc dùng let cho biến đếm (không được dùng const).',
    'Duyệt mảng an toàn từ i = 0 đến i < array.length để tránh lỗi Off-by-one.'
  ],
  suggestedBookmarks: [
    'Giải phẫu vòng lặp for và cơ chế Scope của biến let trong mỗi chu kỳ',
    'Thuật toán tìm kiếm phần tử lớn nhất và nhỏ nhất trong mảng'
  ]
};

export const LESSON_5_2: Lesson = {
  id: 'les-5-2',
  moduleId: 'mod-5',
  track: 'javascript',
  language: 'javascript',
  title: '5.2 Vòng lặp while và do...while khi chưa biết số lần lặp',
  order: 2,
  durationMinutes: 45,
  difficulty: 'Cơ bản',
  prerequisites: [
    'Đã học vòng lặp for',
    'Hiểu biểu thức boolean'
  ],
  learningObjectives: [
    {
      id: 'LO5.2.1',
      code: 'LO5.2.1',
      title: 'Vòng lặp while kiểm tra điều kiện trước',
      description: 'Áp dụng vòng lặp while khi số lần lặp phụ thuộc vào một điều kiện động chưa biết trước.',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    },
    {
      id: 'LO5.2.2',
      code: 'LO5.2.2',
      title: 'Vòng lặp do...while đảm bảo chạy ít nhất 1 lần',
      description: 'Phân biệt do...while thực thi thân lặp trước rồi mới kiểm tra điều kiện sau.',
      bloomLevel: 'Analyze',
      masteryPercentage: 86
    }
  ],
  sections: [
    {
      id: 'sec-5-2-1',
      lessonId: 'les-5-2',
      order: 1,
      conceptName: 'Vòng lặp while (Điều kiện trước)',
      title: '1. Vòng lặp while – Lặp theo điều kiện logic',
      explanation: 'Khác với vòng lặp `for` thường dùng khi đã rõ số lượng phần tử, vòng lặp `while` được dùng khi ta CHƯA BIẾT TRƯỚC cần lặp bao nhiêu lần, chỉ biết rằng "chừng nào điều kiện còn đúng thì còn tiếp tục lặp". Vòng lặp while kiểm tra điều kiện TRƯỚC, nếu sai ngay từ đầu thì khối mã bên trong sẽ không chạy dù chỉ một lần.',
      syntax: 'while (dieuKien) {\n  // Khối lệnh lặp\n  // PHẢI CÓ câu lệnh làm thay đổi điều kiện!\n}',
      codeExample: `// Mô phỏng trò chơi tung xúc xắc cho đến khi ra số 6
let dice = 1;
let rollCount = 0;

while (dice < 6) {
  dice++;
  rollCount++;
}

console.log(\`Đã lắc được số 6 sau \${rollCount} lần!\`);`,
      lineByLineExplanation: [
        { line: 5, text: 'Kiểm tra nếu dice < 6 thì mới vào thân lặp.' },
        { line: 6, text: 'Tăng giá trị dice để tiến gần tới điểm dừng.' }
      ],
      commonMistakes: [
        'Quên viết câu lệnh làm thay đổi điều kiện bên trong thân lặp (như quên `i++`) dẫn tới VÒNG LẶP VÔ TẬN làm đơ CPU máy tính!'
      ],
      whenToUse: 'Dùng khi đọc luồng dữ liệu (Stream), thuật toán tìm kiếm nhị phân hoặc chờ đợi cờ tín hiệu (polling).',
      whenNotToUse: 'Không dùng khi đã có sẵn danh sách mảng cụ thể (hãy dùng for hoặc for...of).',
      realWorldUseCase: 'Rút tiền ATM: lặp trừ tiền từng tờ 500k cho đến khi số dư nhỏ hơn 500k.'
    },
    {
      id: 'sec-5-2-2',
      lessonId: 'les-5-2',
      order: 2,
      conceptName: 'Vòng lặp do...while (Điều kiện sau)',
      title: '2. Vòng lặp do...while – Chắc chắn chạy ít nhất 1 lần',
      explanation: 'Điểm khác biệt duy nhất của `do...while` so với `while` là nó chạy khối lệnh trong thân lặp TRƯỚC RỒI MỚI KIỂM TRA ĐIỀU KIỆN ở cuối. Do đó, ngay cả khi điều kiện sai ngay từ đầu, khối lệnh trong `do` vẫn được đảm bảo thực thi đúng 1 lần.',
      syntax: 'do {\n  // Thuc thi it nhat 1 lan\n} while (dieuKien);',
      codeExample: `let passwordAttempt = 0;

do {
  passwordAttempt++;
  console.log("Lần thử nhập mật khẩu thứ:", passwordAttempt);
} while (passwordAttempt < 1); // Điều kiện đã false, nhưng do đã chạy 1 lần!`,
      lineByLineExplanation: [
        { line: 4, text: 'Khối do được thực hiện ngay lập tức lần đầu tiên.' },
        { line: 6, text: 'Kiểm tra 1 < 1 là false nên vòng lặp kết thúc.' }
      ],
      commonMistakes: [
        'Quên dấu chấm phẩy (;) ở cuối câu lệnh `while (dieuKien);`.'
      ],
      whenToUse: 'Dùng khi cần yêu cầu người dùng nhập dữ liệu ít nhất một lần trước khi kiểm tra tính hợp lệ.',
      whenNotToUse: 'Không dùng khi muốn kiểm tra tính an toàn của điều kiện ngay trước khi thực thi.',
      realWorldUseCase: 'Hiển thị menu và yêu cầu người dùng chọn chức năng ít nhất 1 lần.'
    }
  ],
  predictOutputs: [
    {
      id: 'po-5-2-1',
      code: `let x = 10;
while (x < 5) {
  x++;
}
console.log(x);`,
      question: 'Giá trị in ra của biến x là gì?',
      options: ['10', '11', '5', 'Lỗi vô tận'],
      correctAnswer: '10',
      explanation: 'Điều kiện 10 < 5 là false ngay từ đầu, nên thân vòng lặp while không bao giờ được thực hiện. Biến x giữ nguyên giá trị 10.',
      hint: 'while kiểm tra điều kiện trước khi chạy.'
    }
  ],
  interactivePractice: {
    id: 'ip-5-2',
    title: 'Thực hành: Chia đôi giá trị cho đến khi nhỏ hơn 1',
    description: 'Chạy vòng lặp while chia đôi số 16 cho đến khi giá trị nhỏ hơn hoặc bằng 1.',
    starterCode: `let num = 16;
let steps = 0;

while (num > 1) {
  num = num / 2;
  steps++;
}

console.log("Số bước chia đôi:", steps);
console.log("Giá trị cuối cùng:", num);`,
    expectedConsoleOutput: 'Số bước chia đôi: 4\nGiá trị cuối cùng: 1',
    hint: '16 -> 8 -> 4 -> 2 -> 1 (4 bước).',
    language: 'javascript'
  },
  exercises: {
    basic: {
      id: 'ex-5-2-1',
      lessonId: 'les-5-2',
      title: 'Bài tập Cơ bản: Đếm ngược thời gian với while',
      difficulty: 'basic',
      learningObjectiveIds: ['LO5.2.1'],
      description: 'Cho biến count = 3. Dùng vòng lặp while in ra: `Đếm: 3`, `Đếm: 2`, `Đếm: 1` và sau đó in ra `Hết giờ!`.',
      starterCode: `let count = 3;

// Viết vòng lặp while:
`,
      solutionCode: `let count = 3;
while (count > 0) {
  console.log("Đếm:", count);
  count--;
}
console.log("Hết giờ!");`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra đếm lùi từ 3 về 1',
          expectedOutput: 'Đếm: 3\nĐếm: 2\nĐếm: 1\nHết giờ!'
        }
      ],
      hints: ['Nhớ giảm count-- trong thân vòng lặp'],
      explanation: 'Vòng lặp while chạy 3 lần cho đến khi count = 0.'
    },
    intermediate: {
      id: 'ex-5-2-2',
      lessonId: 'les-5-2',
      title: 'Bài tập Trung bình: Thuật toán tiết kiệm tích lũy',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO5.2.1'],
      description: 'Mỗi tháng tiết kiệm 2000000 (2 triệu). Hỏi sau bao nhiêu tháng thì đạt mục tiêu 10000000 (10 triệu)? Dùng while tính và in ra: `Đạt mục tiêu sau [tháng] tháng`.',
      starterCode: `let savings = 0;
let months = 0;

// Dùng while:

console.log(\`Đạt mục tiêu sau \${months} tháng\`);`,
      solutionCode: `let savings = 0;
let months = 0;

while (savings < 10000000) {
  savings += 2000000;
  months++;
}

console.log(\`Đạt mục tiêu sau \${months} tháng\`);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra 5 tháng tiết kiệm',
          expectedOutput: 'Đạt mục tiêu sau 5 tháng'
        }
      ],
      hints: ['while (savings < 10000000) { savings += 2000000; months++; }'],
      explanation: '5 tháng * 2 triệu = 10 triệu thỏa mãn mục tiêu.'
    },
    challenge: {
      id: 'ex-5-2-3',
      lessonId: 'les-5-2',
      title: 'Bài tập Thử thách: Tìm số nguyên dương n nhỏ nhất sao cho tổng 1..n > 100',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO5.2.1'],
      description: 'Dùng vòng lặp while tìm số nguyên n nhỏ nhất sao cho 1 + 2 + ... + n vượt quá 100. In ra: `Giá trị n nhỏ nhất là: [n] | Tổng: [sum]`.',
      starterCode: `let n = 0;
let sum = 0;

// Tìm n:
`,
      solutionCode: `let n = 0;
let sum = 0;

while (sum <= 100) {
  n++;
  sum += n;
}

console.log(\`Giá trị n nhỏ nhất là: \${n} | Tổng: \${sum}\`);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra n = 14 và tổng 105',
          expectedOutput: 'Giá trị n nhỏ nhất là: 14 | Tổng: 105'
        }
      ],
      hints: ['Khi n = 13 tổng là 91, khi n = 14 tổng là 105'],
      explanation: 'Với n = 14, tổng tích lũy là 105 > 100, thỏa mãn điều kiện dừng.'
    }
  },
  quiz: {
    id: 'quiz-5-2',
    lessonId: 'les-5-2',
    title: 'Trắc nghiệm: Vòng lặp while và do...while',
    passingScore: 70,
    questions: [
      {
        id: 'q-5-2-1',
        lessonId: 'les-5-2',
        learningObjectiveId: 'LO5.2.2',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'Sự khác biệt cốt lõi nhất giữa vòng lặp do...while và vòng lặp while là gì?',
        options: [
          { id: 'a', text: 'do...while chạy nhanh hơn while' },
          { id: 'b', text: 'do...while luôn thực thi thân vòng lặp ít nhất một lần trước khi kiểm tra điều kiện' },
          { id: 'c', text: 'while không cần điều kiện dừng' },
          { id: 'd', text: 'do...while chỉ dùng cho số âm' }
        ],
        correctAnswer: 'b',
        explanation: 'do...while kiểm tra điều kiện sau khi đã thực hiện khối lệnh do, nên luôn đảm bảo chạy ít nhất một lần.',
        relatedLessonId: 'les-5-2'
      }
    ]
  },
  summary: [
    'while kiểm tra điều kiện trước, dùng khi chưa biết trước số lần lặp.',
    'do...while kiểm tra điều kiện sau, đảm bảo chạy ít nhất 1 lần.',
    'Luôn đảm bảo thân vòng lặp có câu lệnh làm thay đổi điều kiện để tránh Infinite Loop.'
  ],
  suggestedBookmarks: [
    'Phân biệt khi nào nên chọn for vs while vs do...while',
    'Phòng chống lỗi treo ứng dụng do vòng lặp vô tận (Infinite Loop)'
  ]
};

export const LESSON_5_3: Lesson = {
  id: 'les-5-3',
  moduleId: 'mod-5',
  track: 'javascript',
  language: 'javascript',
  title: '5.3 Điều khiển luồng lặp với break và continue',
  order: 3,
  durationMinutes: 35,
  difficulty: 'Cơ bản',
  prerequisites: [
    'Hiểu vòng lặp for và while',
    'Biết câu lệnh if rẽ nhánh'
  ],
  learningObjectives: [
    {
      id: 'LO5.3.1',
      code: 'LO5.3.1',
      title: 'Lệnh break thoát khỏi vòng lặp ngay tức thì',
      description: 'Sử dụng break để dừng toàn bộ chu kỳ lặp khi đã đạt được mục đích tìm kiếm.',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    },
    {
      id: 'LO5.3.2',
      code: 'LO5.3.2',
      title: 'Lệnh continue bỏ qua chu kỳ hiện tại',
      description: 'Sử dụng continue để nhảy sang chu kỳ lặp kế tiếp khi không cần xử lý phần tử hiện tại.',
      bloomLevel: 'Apply',
      masteryPercentage: 88
    }
  ],
  sections: [
    {
      id: 'sec-5-3-1',
      lessonId: 'les-5-3',
      order: 1,
      conceptName: 'Lệnh break (Dừng sớm)',
      title: '1. Lệnh break – Thoát khỏi vòng lặp tức thì',
      explanation: 'Khi tìm kiếm dữ liệu trong mảng (như tìm sinh viên theo mã số), một khi đã tìm thấy, việc tiếp tục lặp qua hàng nghìn phần tử còn lại là lãng phí tài nguyên CPU. Lệnh `break` lập tức bẻ gãy và kết thúc toàn bộ vòng lặp hiện tại, chuyển quyền thực thi xuống câu lệnh ngay sau vòng lặp.',
      syntax: 'for (...) {\n  if (daTimThay) {\n    break; // Dừng toàn bộ vòng lặp\n  }\n}',
      codeExample: `const list = ["An", "Ngọc", "Long", "Đức", "Linh"];
let foundIndex = -1;

for (let i = 0; i < list.length; i++) {
  if (list[i] === "Long") {
    foundIndex = i;
    console.log("Đã tìm thấy Long ở vị trí:", i);
    break; // Thoát ngay, không cần xét "Đức" và "Linh"!
  }
}`,
      lineByLineExplanation: [
        { line: 6, text: 'Khi tìm thấy "Long" tại i = 2, lệnh break dừng ngay vòng lặp, bỏ qua 2 phần tử cuối.' }
      ],
      commonMistakes: [
        'Dùng break bên ngoài vòng lặp hoặc switch (ném lỗi SyntaxError: Illegal break statement).'
      ],
      whenToUse: 'Dùng khi tìm kiếm phần tử đầu tiên thỏa mãn điều kiện hoặc gặp điều kiện lỗi dừng khẩn cấp.',
      whenNotToUse: 'Không dùng break nếu bài toán yêu cầu phải duyệt và xử lý tất cả các phần tử.',
      realWorldUseCase: 'Tìm kiếm sản phẩm theo mã vạch quét: tìm thấy là ngắt quét ngay.'
    },
    {
      id: 'sec-5-3-2',
      lessonId: 'les-5-3',
      order: 2,
      conceptName: 'Lệnh continue (Nhảy cóc chu kỳ)',
      title: '2. Lệnh continue – Bỏ qua chu kỳ hiện tại',
      explanation: 'Khác với `break` dừng toàn bộ, lệnh `continue` chỉ bỏ qua phần còn lại của CHU KỲ LẶP HIỆN TẠI và nhảy ngay lập tức sang chu kỳ lặp kế tiếp (kích hoạt bước nhảy `i++` của for hoặc kiểm tra lại điều kiện của while).',
      syntax: 'for (...) {\n  if (boQua) {\n    continue; // Bỏ qua lần này\n  }\n  // Code chi xu ly khi khong bo qua\n}',
      codeExample: `// In ra các số lẻ từ 1 đến 5 (bỏ qua số chẵn)
for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) {
    continue; // Là số chẵn thì bỏ qua, không in!
  }
  console.log("Số lẻ:", i);
}`,
      lineByLineExplanation: [
        { line: 3, text: 'Khi i = 2 hoặc i = 4, lệnh continue kích hoạt, câu lệnh console.log bên dưới bị bỏ qua.' }
      ],
      commonMistakes: [
        'Dùng continue trong vòng lặp while mà quên tăng biến đếm trước continue -> Dẫn đến vòng lặp vô tận!'
      ],
      whenToUse: 'Dùng để lọc bỏ các giá trị không hợp lệ (như null, undefined, số âm) trước khi xử lý.',
      whenNotToUse: 'Không lạm dụng quá nhiều continue khiến luồng code bị nhảy lung tung khó theo dõi.',
      realWorldUseCase: 'Bỏ qua các đơn hàng đã bị hủy khi tính tổng doanh thu bán hàng trong ngày.'
    }
  ],
  predictOutputs: [
    {
      id: 'po-5-3-1',
      code: `let str = "";
for (let i = 1; i <= 4; i++) {
  if (i === 3) continue;
  str += i;
}
console.log(str);`,
      question: 'Chuỗi str in ra có giá trị là gì?',
      options: ['"1234"', '"124"', '"12"', '"3"'],
      correctAnswer: '"124"',
      explanation: 'Khi i = 3, lệnh continue bỏ qua phép cộng chuỗi, do đó số 3 không được thêm vào str. Kết quả là "124".',
      hint: 'Số 3 bị bỏ qua bởi continue.'
    }
  ],
  interactivePractice: {
    id: 'ip-5-3',
    title: 'Thực hành: Dừng vòng lặp khi gặp số âm',
    description: 'Chạy thử vòng lặp cộng dồn các số dương cho đến khi gặp số âm đầu tiên thì dùng break dừng lại.',
    starterCode: `const numbers = [10, 20, 30, -5, 40, 50];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) {
    console.log("Gặp số âm tại vị trí:", i);
    break;
  }
  sum += numbers[i];
}

console.log("Tổng các số trước khi gặp số âm:", sum);`,
    expectedConsoleOutput: 'Gặp số âm tại vị trí: 3\nTổng các số trước khi gặp số âm: 60',
    hint: '10 + 20 + 30 = 60, sau đó gặp -5 thì break.',
    language: 'javascript'
  },
  exercises: {
    basic: {
      id: 'ex-5-3-1',
      lessonId: 'les-5-3',
      title: 'Bài tập Cơ bản: In các số không chia hết cho 3',
      difficulty: 'basic',
      learningObjectiveIds: ['LO5.3.2'],
      description: 'Dùng vòng lặp for từ 1 đến 5. Nếu số chia hết cho 3 (i % 3 === 0) thì dùng continue bỏ qua. In các số còn lại theo định dạng: `Số: [i]`.',
      starterCode: `// Viết vòng lặp với continue:
`,
      solutionCode: `for (let i = 1; i <= 5; i++) {
  if (i % 3 === 0) continue;
  console.log("Số:", i);
}`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra in các số 1, 2, 4, 5 (bỏ qua 3)',
          expectedOutput: 'Số: 1\nSố: 2\nSố: 4\nSố: 5'
        }
      ],
      hints: ['Dùng if (i % 3 === 0) continue;'],
      explanation: 'Số 3 bị bỏ qua, các số 1, 2, 4, 5 được in ra.'
    },
    intermediate: {
      id: 'ex-5-3-2',
      lessonId: 'les-5-3',
      title: 'Bài tập Trung bình: Tìm sinh viên điểm 10 đầu tiên',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO5.3.1'],
      description: 'Cho mảng scores = [7, 8, 10, 9, 10]. Dùng break dừng ngay khi gặp điểm 10 đầu tiên và in ra: `Tìm thấy điểm 10 tại vị trí: [i]`.',
      starterCode: `const scores = [7, 8, 10, 9, 10];

// Dùng for và break:
`,
      solutionCode: `const scores = [7, 8, 10, 9, 10];
for (let i = 0; i < scores.length; i++) {
  if (scores[i] === 10) {
    console.log("Tìm thấy điểm 10 tại vị trí:", i);
    break;
  }
}`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Tìm thấy điểm 10 tại vị trí 2',
          expectedOutput: 'Tìm thấy điểm 10 tại vị trí: 2'
        }
      ],
      hints: ['Điểm 10 đầu tiên nằm ở vị trí chỉ số 2'],
      explanation: 'Lệnh break ngăn vòng lặp xét tiếp điểm 10 thứ hai ở cuối mảng.'
    },
    challenge: {
      id: 'ex-5-3-3',
      lessonId: 'les-5-3',
      title: 'Bài tập Thử thách: Tính tổng doanh thu bỏ qua đơn hàng lỗi',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO5.3.1', 'LO5.3.2'],
      description: 'Cho mảng đơn hàng orders = [100, null, 250, -50, 400]. Bỏ qua các đơn null hoặc số âm bằng continue. Tính tổng các đơn hợp lệ và in ra: `Doanh thu hợp lệ: [tổng]`.',
      starterCode: `const orders = [100, null, 250, -50, 400];
let totalRevenue = 0;

// Duyệt và dùng continue:

console.log("Doanh thu hợp lệ:", totalRevenue);`,
      solutionCode: `const orders = [100, null, 250, -50, 400];
let totalRevenue = 0;

for (let i = 0; i < orders.length; i++) {
  if (orders[i] === null || orders[i] <= 0) {
    continue;
  }
  totalRevenue += orders[i];
}

console.log("Doanh thu hợp lệ:", totalRevenue);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra tổng 100 + 250 + 400 = 750',
          expectedOutput: 'Doanh thu hợp lệ: 750'
        }
      ],
      hints: ['Dùng if (orders[i] === null || orders[i] <= 0) continue;'],
      explanation: '100 + 250 + 400 = 750. Các đơn null và -50 được bỏ qua an toàn.'
    }
  },
  quiz: {
    id: 'quiz-5-3',
    lessonId: 'les-5-3',
    title: 'Trắc nghiệm: Break và Continue',
    passingScore: 70,
    questions: [
      {
        id: 'q-5-3-1',
        lessonId: 'les-5-3',
        learningObjectiveId: 'LO5.3.1',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'Sự khác biệt giữa break và continue là gì?',
        options: [
          { id: 'a', text: 'break dừng toàn bộ vòng lặp, còn continue chỉ bỏ qua lần lặp hiện tại để chuyển sang lần lặp kế tiếp' },
          { id: 'b', text: 'continue dừng toàn bộ vòng lặp, còn break chỉ bỏ qua 1 lần' },
          { id: 'c', text: 'Cả hai đều làm như nhau' },
          { id: 'd', text: 'break chỉ dùng trong switch, không dùng được trong vòng lặp' }
        ],
        correctAnswer: 'a',
        explanation: 'break thoát hoàn toàn khỏi cấu trúc lặp, trong khi continue chỉ kết thúc lượt chạy hiện tại và tiến hành lượt chạy tiếp theo.',
        relatedLessonId: 'les-5-3'
      }
    ]
  },
  summary: [
    'break bẻ gãy và chấm dứt vòng lặp ngay lập tức khi tìm thấy mục tiêu.',
    'continue bỏ qua chu kỳ hiện tại và tiến sang chu kỳ lặp kế tiếp.',
    'Cẩn thận khi dùng continue trong while để tránh bẫy lặp vô tận.'
  ],
  suggestedBookmarks: [
    'Tối ưu hiệu năng thuật toán tìm kiếm bằng lệnh break',
    'Kỹ thuật gán nhãn Label cho break trong vòng lặp lồng nhau (Labeled statements)'
  ]
};

export const LESSON_5_4: Lesson = {
  id: 'les-5-4',
  moduleId: 'mod-5',
  track: 'javascript',
  language: 'javascript',
  title: '5.4 Vòng lặp lồng nhau (Nested Loops) & Vẽ mẫu ma trận',
  order: 4,
  durationMinutes: 60,
  difficulty: 'Trung bình',
  prerequisites: [
    'Đã làm chủ vòng lặp for đơn lẻ',
    'Biết cách ghép chuỗi'
  ],
  learningObjectives: [
    {
      id: 'LO5.4.1',
      code: 'LO5.4.1',
      title: 'Hiểu nguyên lý hoạt động của vòng lặp lồng nhau',
      description: 'Theo dõi chu trình thực thi: với mỗi 1 lần lặp của vòng ngoài, vòng trong chạy trọn vẹn toàn bộ chu kỳ.',
      bloomLevel: 'Analyze',
      masteryPercentage: 85
    },
    {
      id: 'LO5.4.2',
      code: 'LO5.4.2',
      title: 'Duyệt mảng 2 chiều và kết xuất mẫu hình khối',
      description: 'Áp dụng vòng lặp lồng để duyệt ma trận bàn cờ, ma trận điểm và vẽ hình tam giác sao.',
      bloomLevel: 'Create',
      masteryPercentage: 80
    }
  ],
  sections: [
    {
      id: 'sec-5-4-1',
      lessonId: 'les-5-4',
      order: 1,
      conceptName: 'Nguyên lý vòng lặp lồng nhau (Nested Loops)',
      title: '1. Vòng lặp ngoài (Hàng) và Vòng lặp trong (Cột)',
      explanation: 'Khi đặt một vòng lặp bên trong một vòng lặp khác, ta có vòng lặp lồng nhau. Quy tắc vàng: Với MỖI MỘT LẦN chạy của vòng lặp ngoài (biến i - đại diện cho Hàng), vòng lặp bên trong (biến j - đại diện cho Cột) sẽ chạy từ đầu đến cuối. Tổng số lần chạy bằng: số_lần_vòng_ngoài * số_lần_vòng_trong.',
      syntax: 'for (let i = 0; i < hang; i++) {\n  for (let j = 0; j < cot; j++) {\n    // Thuc thi tai toa do (i, j)\n  }\n}',
      codeExample: `// Ma trận tọa độ 2 hàng x 3 cột
for (let row = 1; row <= 2; row++) {
  let line = "";
  for (let col = 1; col <= 3; col++) {
    line += \`(\${row},\${col}) \`;
  }
  console.log(line);
}`,
      lineByLineExplanation: [
        { line: 2, text: 'row = 1: vòng trong chạy col từ 1 đến 3 tạo dòng "(1,1) (1,2) (1,3)".' },
        { line: 6, text: 'In dòng hoàn chỉnh rồi chuyển sang row = 2.' }
      ],
      commonMistakes: [
        'Dùng chung tên biến `i` cho cả vòng lặp ngoài và vòng lặp trong (gây xung đột đè biến khiến vòng lặp chạy loạn xạ!). Luôn dùng i, j, k khác nhau.'
      ],
      whenToUse: 'Dùng khi xử lý dữ liệu bảng (Table), ma trận 2 chiều (Grid, Pixel hình ảnh, bàn cờ caro/cờ vua).',
      whenNotToUse: 'Tránh lồng nhau từ 3 tầng trở lên trên tập dữ liệu lớn vì độ phức tạp thuật toán O(n^3) làm tê liệt ứng dụng.',
      realWorldUseCase: 'Render lưới sản phẩm dạng Grid trong giao diện: chia hàng và cột tự động.'
    },
    {
      id: 'sec-5-4-2',
      lessonId: 'les-5-4',
      order: 2,
      conceptName: 'Duyệt mảng hai chiều (Array of Arrays)',
      title: '2. Thao tác trên mảng hai chiều thực tế',
      explanation: 'Mảng 2 chiều là mảng chứa các mảng con. Cú pháp `matrix[i][j]` trích xuất phần tử tại hàng i, cột j.',
      syntax: 'const val = matrix[hang][cot];',
      codeExample: `const bangDiem = [
  [8.5, 9.0], // Sinh viên 1: Toán, Văn
  [7.0, 8.5]  // Sinh viên 2: Toán, Văn
];

for (let i = 0; i < bangDiem.length; i++) {
  let tong = 0;
  for (let j = 0; j < bangDiem[i].length; j++) {
    tong += bangDiem[i][j];
  }
  console.log(\`SV \${i + 1} có tổng điểm: \${tong}\`);
}`,
      lineByLineExplanation: [
        { line: 6, text: 'bangDiem[i].length lấy số môn của sinh viên thứ i.' }
      ],
      commonMistakes: [
        'Nhầm thứ tự chỉ số cột trước hàng sau (luôn là [hàng][cột]).'
      ],
      whenToUse: 'Dùng cho trò chơi cờ ca-rô, xếp hình sudoku, ma trận bảng điểm nhiều môn.',
      whenNotToUse: 'Không dùng mảng 2 chiều khi cấu trúc dữ liệu thích hợp hơn là danh sách đối tượng.',
      realWorldUseCase: 'Lưu trữ trạng thái bàn cờ vua 8x8 ô.'
    }
  ],
  predictOutputs: [
    {
      id: 'po-5-4-1',
      code: `let count = 0;
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 3; j++) {
    count++;
  }
}
console.log(count);`,
      question: 'Giá trị in ra của count là bao nhiêu?',
      options: ['5', '6', '2', '3'],
      correctAnswer: '6',
      explanation: 'Vòng ngoài chạy 2 lần (i = 0, 1). Với mỗi lần, vòng trong chạy 3 lần (j = 0, 1, 2). Tổng số lần tăng count là 2 * 3 = 6.',
      hint: 'Số chu kỳ = số_lần_ngoài * số_lần_trong.'
    }
  ],
  interactivePractice: {
    id: 'ip-5-4',
    title: 'Thực hành: Vẽ hình chữ nhật dấu sao 3x4',
    description: 'Chạy vòng lặp lồng để vẽ hình chữ nhật có 3 hàng, mỗi hàng gồm 4 dấu sao (*).',
    starterCode: `for (let row = 0; row < 3; row++) {
  let stars = "";
  for (let col = 0; col < 4; col++) {
    stars += "*";
  }
  console.log(stars);
}`,
    expectedConsoleOutput: '****\n****\n****',
    hint: '3 hàng, mỗi hàng 4 dấu sao ****.',
    language: 'javascript'
  },
  exercises: {
    basic: {
      id: 'ex-5-4-1',
      lessonId: 'les-5-4',
      title: 'Bài tập Cơ bản: Vẽ tam giác vuông dấu sao tăng dần',
      difficulty: 'basic',
      learningObjectiveIds: ['LO5.4.1'],
      description: 'Dùng 2 vòng lặp lồng nhau in ra tam giác vuông 3 tầng theo mẫu:\n`*\n**\n***`',
      starterCode: `// Viết code vẽ tam giác sao:
`,
      solutionCode: `for (let i = 1; i <= 3; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra in 3 tầng sao tăng dần',
          expectedOutput: '*\n**\n***'
        }
      ],
      hints: ['Vòng trong lặp từ j = 1 đến j <= i'],
      explanation: 'Tầng i sẽ có đúng i dấu sao.'
    },
    intermediate: {
      id: 'ex-5-4-2',
      lessonId: 'les-5-4',
      title: 'Bài tập Trung bình: Tính tổng toàn bộ ma trận 2x2',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO5.4.2'],
      description: 'Cho ma trận `matrix = [[1, 2], [3, 4]]`. Hãy dùng 2 vòng lặp lồng nhau tính tổng tất cả các phần tử và in ra: `Tổng ma trận: [kết quả]`.',
      starterCode: `const matrix = [[1, 2], [3, 4]];
let total = 0;

// Tính tổng ma trận:

console.log("Tổng ma trận:", total);`,
      solutionCode: `const matrix = [[1, 2], [3, 4]];
let total = 0;

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    total += matrix[i][j];
  }
}

console.log("Tổng ma trận:", total);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra tổng 1 + 2 + 3 + 4 = 10',
          expectedOutput: 'Tổng ma trận: 10'
        }
      ],
      hints: ['Duyệt matrix[i][j]'],
      explanation: 'Tổng tất cả các số trong ma trận 2x2 là 10.'
    },
    challenge: {
      id: 'ex-5-4-3',
      lessonId: 'les-5-4',
      title: 'Bài tập Thử thách: Tìm phần tử lớn nhất trên đường chéo chính',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO5.4.2'],
      description: 'Cho ma trận vuông 3x3: `grid = [[5, 2, 9], [1, 8, 4], [7, 3, 6]]`. Đường chéo chính gồm các phần tử có chỉ số hàng bằng cột (i === j): grid[0][0]=5, grid[1][1]=8, grid[2][2]=6. Tìm và in ra: `Phần tử lớn nhất đường chéo chính: [kết quả]`.',
      starterCode: `const grid = [
  [5, 2, 9],
  [1, 8, 4],
  [7, 3, 6]
];

// Tìm phần tử lớn nhất đường chéo chính:
`,
      solutionCode: `const grid = [
  [5, 2, 9],
  [1, 8, 4],
  [7, 3, 6]
];

let maxDiag = grid[0][0];
for (let i = 1; i < grid.length; i++) {
  if (grid[i][i] > maxDiag) {
    maxDiag = grid[i][i];
  }
}

console.log("Phần tử lớn nhất đường chéo chính:", maxDiag);`,
      testCases: [
        {
          id: 'tc-1',
          description: 'Kiểm tra max đường chéo chính là 8',
          expectedOutput: 'Phần tử lớn nhất đường chéo chính: 8'
        }
      ],
      hints: ['Các phần tử đường chéo chính là grid[i][i]'],
      explanation: 'Đường chéo chính gồm 5, 8, 6. Số lớn nhất là 8.'
    }
  },
  quiz: {
    id: 'quiz-5-4',
    lessonId: 'les-5-4',
    title: 'Trắc nghiệm: Vòng lặp lồng nhau',
    passingScore: 70,
    questions: [
      {
        id: 'q-5-4-1',
        lessonId: 'les-5-4',
        learningObjectiveId: 'LO5.4.1',
        type: 'multiple_choice',
        difficulty: 'medium',
        prompt: 'Nếu vòng lặp ngoài lặp 5 lần và vòng lặp trong lặp 4 lần, thân lệnh bên trong vòng lặp con sẽ được thực thi tổng cộng bao nhiêu lần?',
        options: [
          { id: 'a', text: '9 lần' },
          { id: 'b', text: '20 lần' },
          { id: 'c', text: '5 lần' },
          { id: 'd', text: '4 lần' }
        ],
        correctAnswer: 'b',
        explanation: 'Tổng số lần thực thi của câu lệnh bên trong bằng tích số lần lặp của 2 vòng: 5 * 4 = 20 lần.',
        relatedLessonId: 'les-5-4'
      }
    ]
  },
  summary: [
    'Vòng lặp lồng nhau hoạt động theo mô hình Hàng (vòng ngoài) và Cột (vòng trong).',
    'Luôn dùng các tên biến đếm khác nhau (i, j, k) để tránh xung đột đè giá trị.',
    'Là công cụ chủ lực để duyệt ma trận 2 chiều và xây dựng các thuật toán sắp xếp cơ bản.'
  ],
  suggestedBookmarks: [
    'Phân tích độ phức tạp thời gian O(n^2) của vòng lặp lồng nhau',
    'Thao tác duyệt và biến đổi ma trận 2 chiều trong JavaScript'
  ]
};

export const JS_MODULE_5_LESSONS: Lesson[] = [
  LESSON_5_1,
  LESSON_5_2,
  LESSON_5_3,
  LESSON_5_4
];
