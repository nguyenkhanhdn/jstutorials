import { Lesson } from '../../types';

// ==========================================
// MODULE 7: ARRAY (MẢNG)
// ==========================================

export const LESSON_7_1: Lesson = {
  id: 'les-7-1',
  moduleId: 'mod-7',
  track: 'javascript',
  language: 'javascript',
  title: '7.1 Khởi tạo mảng, chỉ số Index và các phương thức căn bản',
  order: 1,
  durationMinutes: 50,
  difficulty: 'Cơ bản',
  prerequisites: [
    'Biết khai báo biến với const và let',
    'Nắm vững các kiểu dữ liệu nguyên thủy'
  ],
  learningObjectives: [
    {
      id: 'LO7.1.1',
      code: 'LO7.1.1',
      title: 'Hiểu cấu trúc mảng và chỉ số index 0-based',
      description: 'Truy xuất phần tử đầu, cuối qua index và thuộc tính .length.',
      bloomLevel: 'Understand',
      masteryPercentage: 92
    },
    {
      id: 'LO7.1.2',
      code: 'LO7.1.2',
      title: 'Làm chủ push(), pop(), shift(), unshift()',
      description: 'Thêm và xóa phần tử ở hai đầu mảng một cách chính xác.',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    }
  ],
  sections: [
    {
      id: 'sec-7-1-1',
      lessonId: 'les-7-1',
      order: 1,
      conceptName: 'Cấu trúc mảng và truy xuất theo chỉ số (Zero-based Index)',
      title: '1. Mảng và quy tắc chỉ số Index',
      explanation: 'Mảng (Array) trong JavaScript là danh sách có thứ tự chứa tập hợp các giá trị. Mỗi phần tử được đánh số thứ tự (index) bắt đầu từ 0. Thuộc tính `array.length` trả về tổng số phần tử. Phần tử cuối cùng luôn nằm ở vị trí `array[array.length - 1]`.',
      syntax: 'const danhSach = [pt0, pt1, pt2];\nconst phanTuDau = danhSach[0];\nconst phanTuCuoi = danhSach[danhSach.length - 1];',
      codeExample: `const courses = ["JavaScript", "HTML/CSS", "ReactJS"];
console.log("Tổng số khóa học:", courses.length);
console.log("Khóa học đầu tiên:", courses[0]);
console.log("Khóa học cuối cùng:", courses[courses.length - 1]);

// Thay đổi phần tử
courses[1] = "Tailwind CSS";
console.log("Mảng sau khi sửa:", courses);`,
      lineByLineExplanation: [
        { line: 1, text: 'Khai báo mảng courses gồm 3 phần tử chuỗi.' },
        { line: 2, text: 'courses.length trả về số lượng là 3.' },
        { line: 3, text: 'courses[0] truy xuất phần tử đầu tiên "JavaScript".' },
        { line: 4, text: 'courses[courses.length - 1] lấy phần tử cuối "ReactJS".' },
        { line: 7, text: 'Gán đè phần tử tại vị trí index 1 thành "Tailwind CSS".' }
      ],
      commonMistakes: [
        'Truy cập phần tử thứ n bằng index n thay vì n - 1 dẫn đến phần tử bị lệch.',
        'Truy cập index vượt quá độ dài mảng trả về undefined thay vì báo lỗi.'
      ],
      whenToUse: 'Dùng khi cần lưu trữ một danh sách các phần tử có thứ tự như danh sách sản phẩm, điểm số, bài viết.',
      whenNotToUse: 'Không dùng mảng khi cần truy xuất dữ liệu theo khóa có tên mô tả (dùng Object).',
      realWorldUseCase: 'Lưu danh sách hình ảnh trong slider hoặc giỏ hàng trong thương mại điện tử.'
    },
    {
      id: 'sec-7-1-2',
      lessonId: 'les-7-1',
      order: 2,
      conceptName: 'Các phương thức thêm/xóa phần tử cơ bản',
      title: '2. Thêm và xóa ở 2 đầu: push, pop, shift, unshift',
      explanation: '`push()` thêm vào cuối mảng; `pop()` xóa và trả về phần tử cuối cùng; `unshift()` thêm vào đầu mảng; `shift()` xóa và trả về phần tử đầu tiên.',
      syntax: 'arr.push(item)    // Thêm cuối\narr.pop()          // Xóa cuối\narr.unshift(item) // Thêm đầu\narr.shift()        // Xóa đầu',
      codeExample: `const queue = ["Khách A", "Khách B"];

// Thêm khách mới vào cuối hàng đợi
queue.push("Khách C");
console.log("Sau push:", queue);

// Phục vụ khách đầu tiên (lấy ra khỏi đầu)
const served = queue.shift();
console.log("Đã phục vụ:", served);
console.log("Hàng đợi còn lại:", queue);`,
      lineByLineExplanation: [
        { line: 4, text: 'push("Khách C") thêm Khách C vào cuối danh sách queue.' },
        { line: 8, text: 'shift() lấy Khách A ra khỏi đầu hàng và trả về biến served.' }
      ],
      commonMistakes: [
        'Nhầm lẫn giữa shift (xóa đầu) và pop (xóa cuối).',
        'Quên rằng các phương thức này làm thay đổi trực tiếp (mutate) mảng ban đầu.'
      ],
      whenToUse: 'Dùng cấu trúc Hàng đợi (Queue - FIFO: push/shift) hoặc Ngăn xếp (Stack - LIFO: push/pop).',
      whenNotToUse: 'Tránh dùng shift/unshift trên mảng cực lớn (hàng triệu phần tử) vì chi phí dời index.',
      realWorldUseCase: 'Quản lý lịch sử thao tác người dùng (Undo/Redo stack) hoặc hàng đợi in ấn.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-7-1',
    title: 'Thực hành thao tác mảng danh sách tác vụ',
    description: 'Bổ sung phần tử "Gửi báo cáo" vào cuối mảng và in ra tổng số tác vụ hiện có.',
    starterCode: `const tasks = ["Họp sáng", "Viết code"];

// 1. Thêm "Gửi báo cáo" vào cuối mảng:
tasks.push("Gửi báo cáo");

// 2. In ra số lượng tác vụ và danh sách:
console.log("Số tác vụ:", tasks.length);
console.log("Danh sách:", tasks);`,
    expectedConsoleOutput: 'Số tác vụ: 3',
    hint: 'Dùng tasks.push("Gửi báo cáo") và in tasks.length.'
  },
  exercises: {
    basic: {
      id: 'ex-7-1-1',
      lessonId: 'les-7-1',
      title: 'Bài tập Cơ bản: Lấy phần tử đầu và cuối của mảng điểm',
      difficulty: 'basic',
      learningObjectiveIds: ['LO7.1.1'],
      description: 'Cho mảng scores = [8.5, 7.0, 9.5, 6.0, 10.0]. In ra: "Điểm đầu: [pt đầu]" và "Điểm cuối: [pt cuối]".',
      starterCode: `const scores = [8.5, 7.0, 9.5, 6.0, 10.0];

// Viết code lấy điểm đầu và điểm cuối:
`,
      solutionCode: `const scores = [8.5, 7.0, 9.5, 6.0, 10.0];
console.log("Điểm đầu:", scores[0]);
console.log("Điểm cuối:", scores[scores.length - 1]);`,
      testCases: [
        { id: 'tc-1', description: 'In điểm đầu', expectedOutput: 'Điểm đầu: 8.5' },
        { id: 'tc-2', description: 'In điểm cuối', expectedOutput: 'Điểm cuối: 10' }
      ],
      hints: ['Dùng scores[0] cho điểm đầu và scores[scores.length - 1] cho điểm cuối'],
      explanation: 'Mảng bắt đầu từ index 0 và kết thúc tại length - 1.'
    },
    intermediate: {
      id: 'ex-7-1-2',
      lessonId: 'les-7-1',
      title: 'Bài tập Trung bình: Mô phỏng giỏ hàng thêm và xóa',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO7.1.2'],
      description: 'Bắt đầu với cart = ["Sách", "Bút"]. Thêm "Thước" vào cuối, sau đó xóa món đầu tiên. In mảng cuối cùng.',
      starterCode: `const cart = ["Sách", "Bút"];

// 1. Thêm "Thước" vào cuối:

// 2. Xóa món hàng đầu tiên:

console.log("Giỏ hàng hiện tại:", cart);`,
      solutionCode: `const cart = ["Sách", "Bút"];
cart.push("Thước");
cart.shift();
console.log("Giỏ hàng hiện tại:", cart);`,
      testCases: [
        { id: 'tc-1', description: 'Giỏ hàng còn lại Bút và Thước', expectedOutput: 'Giỏ hàng hiện tại: [ \'Bút\', \'Thước\' ]' }
      ],
      hints: ['Dùng cart.push("Thước") sau đó gọi cart.shift()'],
      explanation: 'push thêm vào cuối, shift xóa phần tử đầu tiên.'
    },
    challenge: {
      id: 'ex-7-1-3',
      lessonId: 'les-7-1',
      title: 'Bài tập Thử thách: Đảo ngược mảng thủ công không dùng reverse()',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO7.1.1', 'LO7.1.2'],
      description: 'Cho mảng arr = [1, 2, 3, 4, 5]. Dùng vòng lặp for và phương thức unshift hoặc push để tạo mảng reversed có thứ tự ngược lại [5, 4, 3, 2, 1]. In ra mảng reversed.',
      starterCode: `const arr = [1, 2, 3, 4, 5];
const reversed = [];

// Viết code đảo ngược mảng:

console.log("Mảng đảo ngược:", reversed);`,
      solutionCode: `const arr = [1, 2, 3, 4, 5];
const reversed = [];
for (let i = arr.length - 1; i >= 0; i--) {
  reversed.push(arr[i]);
}
console.log("Mảng đảo ngược:", reversed);`,
      testCases: [
        { id: 'tc-1', description: 'Mảng đảo ngược chuẩn xác', expectedOutput: 'Mảng đảo ngược: [ 5, 4, 3, 2, 1 ]' }
      ],
      hints: ['Lặp từ i = arr.length - 1 giảm về 0 và push vào reversed'],
      explanation: 'Duyệt ngược từ đuôi về đầu giúp xây dựng mảng đảo vị trí an toàn không làm hỏng mảng gốc.'
    }
  },
  quiz: {
    id: 'quiz-7-1',
    lessonId: 'les-7-1',
    title: 'Trắc nghiệm Mảng căn bản',
    passingScore: 70,
    questions: []
  },
  summary: [
    'Mảng đánh số thứ tự từ index 0 đến length - 1.',
    'push/pop thao tác ở cuối mảng; unshift/shift thao tác ở đầu mảng.'
  ],
  suggestedBookmarks: ['Chỉ số Index mảng', 'Bộ tứ push, pop, shift, unshift']
};

export const LESSON_7_2: Lesson = {
  id: 'les-7-2',
  moduleId: 'mod-7',
  track: 'javascript',
  language: 'javascript',
  title: '7.2 Duyệt mảng bằng for...of và forEach',
  order: 2,
  durationMinutes: 45,
  difficulty: 'Cơ bản',
  prerequisites: ['Đã học vòng lặp for cơ bản', 'Biết cách khai báo và truy cập mảng'],
  learningObjectives: [
    {
      id: 'LO7.2.1',
      code: 'LO7.2.1',
      title: 'Sử dụng vòng lặp for...of để đọc từng phần tử',
      description: 'Cú pháp tinh gọn, tự nhiên và hỗ trợ break/continue.',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    },
    {
      id: 'LO7.2.2',
      code: 'LO7.2.2',
      title: 'Sử dụng phương thức forEach() với Callback function',
      description: 'Lấy cả giá trị và index trong hàm callback.',
      bloomLevel: 'Apply',
      masteryPercentage: 85
    }
  ],
  sections: [
    {
      id: 'sec-7-2-1',
      lessonId: 'les-7-2',
      order: 1,
      conceptName: 'Vòng lặp for...of hiện đại',
      title: '1. Vòng lặp for...of: Đơn giản và trực quan',
      explanation: '`for...of` là cú pháp chuẩn ES6 giúp duyệt trực tiếp qua từng GIÁ TRỊ của mảng mà không cần quản lý biến đếm index phức tạp. Hỗ trợ đầy đủ lệnh `break` và `continue`.',
      syntax: 'for (const phanTu of mang) {\n  // thao tác với phanTu\n}',
      codeExample: `const colors = ["Đỏ", "Xanh lam", "Vàng", "Tím"];

for (const color of colors) {
  console.log("Màu sắc:", color);
}`,
      lineByLineExplanation: [
        { line: 3, text: 'Vòng lặp gán lần lượt từng phần tử của mảng colors vào biến color.' },
        { line: 4, text: 'In ra từng màu sắc độc lập.' }
      ],
      commonMistakes: [
        'Nhầm lẫn giữa for...of (lấy giá trị) và for...in (lấy index/key của object).'
      ],
      whenToUse: 'Dùng khi muốn đọc giá trị của mảng tuần tự hoặc khi cần ngắt sớm bằng break.',
      whenNotToUse: 'Không dùng for...of khi cần biến đổi trả về một mảng mới (hãy dùng map).',
      realWorldUseCase: 'Duyệt danh sách sản phẩm để render thẻ HTML hoặc kiểm tra điều kiện.'
    },
    {
      id: 'sec-7-2-2',
      lessonId: 'les-7-2',
      order: 2,
      conceptName: 'Phương thức forEach với Callback',
      title: '2. Phương thức array.forEach()',
      explanation: '`forEach()` là phương thức có sẵn của mảng, nhận vào một hàm callback thực thi trên từng phần tử. Callback nhận được 3 tham số: `(item, index, array)`. Không thể dùng break hay return để ngắt forEach.',
      syntax: 'arr.forEach((item, index) => {\n  // thao tác\n});',
      codeExample: `const members = ["Lan", "Hùng", "Mai"];

members.forEach((name, index) => {
  console.log(\`STT \${index + 1}: \${name}\`);
});`,
      lineByLineExplanation: [
        { line: 3, text: 'Gọi hàm callback trên từng thành viên kèm theo chỉ số index.' },
        { line: 4, text: 'In ra số thứ tự thân thiện bắt đầu từ 1.' }
      ],
      commonMistakes: [
        'Cố gắng dùng lệnh return bên trong forEach để ngắt vòng lặp (return chỉ kết thúc callback của phần tử hiện tại).'
      ],
      whenToUse: 'Dùng khi muốn duyệt toàn bộ mảng và cần cả giá trị lẫn index.',
      whenNotToUse: 'Không dùng khi cần dừng sớm khi thỏa điều kiện (dùng for...of hoặc find/some).',
      realWorldUseCase: 'In danh sách bảng điểm sinh viên có cột số thứ tự.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-7-2',
    title: 'Thực hành tính tổng giá tiền bằng for...of',
    description: 'Duyệt qua mảng prices và cộng dồn vào biến total.',
    starterCode: `const prices = [120, 250, 80, 150];
let total = 0;

// Dùng for...of để tính tổng:
for (const p of prices) {
  total += p;
}

console.log("Tổng tiền:", total);`,
    expectedConsoleOutput: 'Tổng tiền: 600',
    hint: 'Dùng for (const p of prices) { total += p; }.'
  },
  exercises: {
    basic: {
      id: 'ex-7-2-1',
      lessonId: 'les-7-2',
      title: 'Bài tập Cơ bản: Đếm số lượng số chẵn trong mảng',
      difficulty: 'basic',
      learningObjectiveIds: ['LO7.2.1'],
      description: 'Cho mảng numbers = [12, 5, 8, 19, 24, 7]. Dùng for...of đếm xem có bao nhiêu số chẵn và in ra: "Số lượng số chẵn: [count]".',
      starterCode: `const numbers = [12, 5, 8, 19, 24, 7];
let evenCount = 0;

// Viết code đếm số chẵn:

console.log("Số lượng số chẵn:", evenCount);`,
      solutionCode: `const numbers = [12, 5, 8, 19, 24, 7];
let evenCount = 0;
for (const n of numbers) {
  if (n % 2 === 0) {
    evenCount++;
  }
}
console.log("Số lượng số chẵn:", evenCount);`,
      testCases: [
        { id: 'tc-1', description: 'Có 3 số chẵn (12, 8, 24)', expectedOutput: 'Số lượng số chẵn: 3' }
      ],
      hints: ['Kiểm tra if (n % 2 === 0) then evenCount++'],
      explanation: 'Vòng lặp for...of kết hợp điều kiện n % 2 === 0 lọc chính xác các số chẵn.'
    },
    intermediate: {
      id: 'ex-7-2-2',
      lessonId: 'les-7-2',
      title: 'Bài tập Trung bình: Định dạng danh sách sinh viên với forEach',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO7.2.2'],
      description: 'Cho mảng names = ["An", "Bình", "Cường"]. Dùng forEach in ra từng dòng: "Thành viên [STT]: [Tên]" (STT bắt đầu từ 1).',
      starterCode: `const names = ["An", "Bình", "Cường"];

// Dùng forEach in định dạng:
`,
      solutionCode: `const names = ["An", "Bình", "Cường"];
names.forEach((name, i) => {
  console.log(\`Thành viên \${i + 1}: \${name}\`);
});`,
      testCases: [
        { id: 'tc-1', description: 'In thành viên 1', expectedOutput: 'Thành viên 1: An' },
        { id: 'tc-2', description: 'In thành viên 2', expectedOutput: 'Thành viên 2: Bình' },
        { id: 'tc-3', description: 'In thành viên 3', expectedOutput: 'Thành viên 3: Cường' }
      ],
      hints: ['Dùng names.forEach((name, i) => { console.log(`Thành viên ${i + 1}: ${name}`); })'],
      explanation: 'Tham số thứ hai của callback forEach là index, cộng thêm 1 để hiển thị số thứ tự.'
    },
    challenge: {
      id: 'ex-7-2-3',
      lessonId: 'les-7-2',
      title: 'Bài tập Thử thách: Tìm phần tử đầu tiên thỏa điều kiện với for...of và break',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO7.2.1'],
      description: 'Cho mảng scores = [4.5, 6.0, 8.5, 9.0, 7.5]. Dùng vòng lặp for...of tìm điểm đầu tiên đạt loại Giỏi (>= 8.0), in ra: "Điểm giỏi đầu tiên: [score]" rồi ngắt vòng lặp ngay lập tức bằng break.',
      starterCode: `const scores = [4.5, 6.0, 8.5, 9.0, 7.5];
let firstGoodScore = null;

// Viết for...of và break khi tìm thấy:

console.log("Điểm giỏi đầu tiên:", firstGoodScore);`,
      solutionCode: `const scores = [4.5, 6.0, 8.5, 9.0, 7.5];
let firstGoodScore = null;
for (const s of scores) {
  if (s >= 8.0) {
    firstGoodScore = s;
    break;
  }
}
console.log("Điểm giỏi đầu tiên:", firstGoodScore);`,
      testCases: [
        { id: 'tc-1', description: 'Tìm ra 8.5 và dừng lại', expectedOutput: 'Điểm giỏi đầu tiên: 8.5' }
      ],
      hints: ['Dùng if (s >= 8.0) { firstGoodScore = s; break; }'],
      explanation: 'for...of kết hợp break tối ưu hiệu năng vì không cần duyệt tiếp các phần tử sau khi đã đạt mục tiêu.'
    }
  },
  quiz: {
    id: 'quiz-7-2',
    lessonId: 'les-7-2',
    title: 'Trắc nghiệm Duyệt mảng',
    passingScore: 70,
    questions: []
  },
  summary: [
    'for...of duyệt giá trị phần tử, hỗ trợ break và continue.',
    'forEach là phương thức nhận callback, nhận cả item và index, không ngắt được giữa chừng.'
  ],
  suggestedBookmarks: ['for...of duyệt mảng', 'forEach vs for...of']
};

export const LESSON_7_3: Lesson = {
  id: 'les-7-3',
  moduleId: 'mod-7',
  track: 'javascript',
  language: 'javascript',
  title: '7.3 Biến đổi & Lọc dữ liệu với map(), filter(), find()',
  order: 3,
  durationMinutes: 60,
  difficulty: 'Trung bình',
  prerequisites: ['Đã học Arrow Function và Callback', 'Hiểu phương thức duyệt mảng'],
  learningObjectives: [
    {
      id: 'LO7.3.1',
      code: 'LO7.3.1',
      title: 'Biến đổi mảng 1-1 bằng phương thức map()',
      description: 'Tạo mảng mới có cùng độ dài với các phần tử đã được biến đổi.',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    },
    {
      id: 'LO7.3.2',
      code: 'LO7.3.2',
      title: 'Lọc danh sách thỏa điều kiện bằng filter() và find()',
      description: 'filter() trả về mảng con, find() trả về phần tử đầu tiên tìm thấy.',
      bloomLevel: 'Apply',
      masteryPercentage: 88
    }
  ],
  sections: [
    {
      id: 'sec-7-3-1',
      lessonId: 'les-7-3',
      order: 1,
      conceptName: 'Phương thức map() biến đổi dữ liệu',
      title: '1. map(): Biến đổi từng phần tử thành mảng mới',
      explanation: '`map()` duyệt qua mảng gốc, áp dụng hàm chuyển đổi trên từng phần tử và TRẢ VỀ MỘT MẢNG MỚI có cùng độ dài. Mảng gốc hoàn toàn không bị thay đổi (Bất biến - Immutability).',
      syntax: 'const mangMoi = mangGoc.map(item => item * 2);',
      codeExample: `const pricesUSD = [10, 25, 50];
const RATE = 25000;

// Đổi sang VND
const pricesVND = pricesUSD.map(usd => usd * RATE);
console.log("Giá VND:", pricesVND);
console.log("Mảng gốc giữ nguyên:", pricesUSD);`,
      lineByLineExplanation: [
        { line: 5, text: 'Hàm map nhân từng giá trị với 25,000 và gom vào mảng mới pricesVND.' },
        { line: 7, text: 'pricesUSD ban đầu không bị biến đổi (nguyên tắc Pure Function).' }
      ],
      commonMistakes: [
        'Quên return trong callback của map dẫn đến mảng toàn [undefined, undefined].'
      ],
      whenToUse: 'Dùng khi muốn biến đổi 1 danh sách dữ liệu đầu vào thành 1 danh sách dữ liệu mới (1-1).',
      whenNotToUse: 'Không dùng map nếu chỉ muốn duyệt thực hiện side effect mà không cần mảng mới (dùng forEach).',
      realWorldUseCase: 'Chuyển danh sách ID sản phẩm thành danh sách thẻ JSX/HTML hiển thị trên website.'
    },
    {
      id: 'sec-7-3-2',
      lessonId: 'les-7-3',
      order: 2,
      conceptName: 'Phương thức filter() và find()',
      title: '2. filter() lọc mảng và find() tìm 1 phần tử',
      explanation: '`filter()` trả về một mảng mới chứa tất cả các phần tử mà callback trả về `true`. `find()` chỉ tìm và trả về PHẦN TỬ ĐẦU TIÊN thỏa điều kiện; nếu không thấy trả về `undefined`.',
      syntax: 'const danhSachLoc = arr.filter(item => item > 10);\nconst timDuoc = arr.find(item => item.id === 5);',
      codeExample: `const scores = [6.5, 8.0, 4.0, 9.5, 7.0];

// Lọc các bạn qua môn (>= 5.0)
const passed = scores.filter(s => s >= 5.0);
console.log("Các điểm qua môn:", passed);

// Tìm điểm xuất sắc đầu tiên (>= 9.0)
const topScore = scores.find(s => s >= 9.0);
console.log("Điểm xuất sắc đầu tiên:", topScore);`,
      lineByLineExplanation: [
        { line: 4, text: 'filter giữ lại các điểm >= 5.0, loại bỏ 4.0.' },
        { line: 8, text: 'find quét từ trái sang phải, trả về ngay 9.5.' }
      ],
      commonMistakes: [
        'Dùng filter khi chỉ cần 1 phần tử (lãng phí duyệt hết mảng).'
      ],
      whenToUse: 'Dùng filter để tìm kiếm theo từ khóa, lọc theo danh mục; dùng find để lấy chi tiết đối tượng theo ID.',
      whenNotToUse: 'Không dùng filter để kiểm tra tồn tại (dùng some hoặc includes).',
      realWorldUseCase: 'Bộ lọc sản phẩm theo mức giá (Dưới 500k, Trên 1 triệu) trên sàn TMĐT.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-7-3',
    title: 'Thực hành kết hợp map() và filter()',
    description: 'Lọc các số dương và bình phương các số đó.',
    starterCode: `const numbers = [-3, 2, -1, 4, 5, -2];

// 1. Lọc số dương (> 0):
const positives = numbers.filter(n => n > 0);

// 2. Bình phương (n * n):
const squared = positives.map(n => n * n);

console.log("Bình phương các số dương:", squared);`,
    expectedConsoleOutput: 'Bình phương các số dương: [ 4, 16, 25 ]',
    hint: 'numbers.filter(n => n > 0).map(n => n * n).'
  },
  exercises: {
    basic: {
      id: 'ex-7-3-1',
      lessonId: 'les-7-3',
      title: 'Bài tập Cơ bản: Viết hoa danh sách tên với map()',
      difficulty: 'basic',
      learningObjectiveIds: ['LO7.3.1'],
      description: 'Cho mảng names = ["nam", "lan", "hương"]. Dùng map và toUpperCase() để tạo mảng upperNames viết hoa toàn bộ. In mảng kết quả.',
      starterCode: `const names = ["nam", "lan", "hương"];

// Dùng map để viết hoa:
const upperNames = names.map(name => name.toUpperCase());

console.log("Danh sách viết hoa:", upperNames);`,
      solutionCode: `const names = ["nam", "lan", "hương"];
const upperNames = names.map(name => name.toUpperCase());
console.log("Danh sách viết hoa:", upperNames);`,
      testCases: [
        { id: 'tc-1', description: 'Viết hoa các tên', expectedOutput: 'Danh sách viết hoa: [ \'NAM\', \'LAN\', \'HƯƠNG\' ]' }
      ],
      hints: ['name => name.toUpperCase()'],
      explanation: 'map() duyệt qua từng chuỗi và gọi phương thức toUpperCase() trên từng chuỗi.'
    },
    intermediate: {
      id: 'ex-7-3-2',
      lessonId: 'les-7-3',
      title: 'Bài tập Trung bình: Lọc sản phẩm còn hàng trong kho',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO7.3.2'],
      description: 'Cho mảng products gồm các sản phẩm. Dùng filter lọc các sản phẩm có inStock === true và in ra mảng tên của các sản phẩm đó bằng map.',
      starterCode: `const products = [
  { name: "Áo thun", inStock: true },
  { name: "Quần jean", inStock: false },
  { name: "Mũ lưỡi trai", inStock: true }
];

// Lọc sản phẩm inStock === true rồi lấy name:
const availableNames = products
  .filter(p => p.inStock)
  .map(p => p.name);

console.log("Sản phẩm còn hàng:", availableNames);`,
      solutionCode: `const products = [
  { name: "Áo thun", inStock: true },
  { name: "Quần jean", inStock: false },
  { name: "Mũ lưỡi trai", inStock: true }
];
const availableNames = products.filter(p => p.inStock).map(p => p.name);
console.log("Sản phẩm còn hàng:", availableNames);`,
      testCases: [
        { id: 'tc-1', description: 'Lọc đúng Áo thun và Mũ lưỡi trai', expectedOutput: 'Sản phẩm còn hàng: [ \'Áo thun\', \'Mũ lưỡi trai\' ]' }
      ],
      hints: ['Chaining filter() và map()'],
      explanation: 'Kết hợp filter và map tạo thành chuỗi xử lý dữ liệu (pipeline) sạch sẽ và phổ biến.'
    },
    challenge: {
      id: 'ex-7-3-3',
      lessonId: 'les-7-3',
      title: 'Bài tập Thử thách: Tìm người dùng theo email chính xác',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO7.3.2'],
      description: 'Cho mảng users. Dùng find() tìm người dùng có email là "binh@gmail.com". Nếu tìm thấy in "Tìm thấy: [name] (Tuổi: [age])", nếu không in "Không tìm thấy".',
      starterCode: `const users = [
  { id: 1, name: "An", email: "an@gmail.com", age: 20 },
  { id: 2, name: "Bình", email: "binh@gmail.com", age: 22 },
  { id: 3, name: "Chi", email: "chi@gmail.com", age: 19 }
];

// Tìm người dùng theo email:
const target = users.find(u => u.email === "binh@gmail.com");

if (target) {
  console.log(\`Tìm thấy: \${target.name} (Tuổi: \${target.age})\`);
} else {
  console.log("Không tìm thấy");
}`,
      solutionCode: `const users = [
  { id: 1, name: "An", email: "an@gmail.com", age: 20 },
  { id: 2, name: "Bình", email: "binh@gmail.com", age: 22 },
  { id: 3, name: "Chi", email: "chi@gmail.com", age: 19 }
];
const target = users.find(u => u.email === "binh@gmail.com");
if (target) {
  console.log(\`Tìm thấy: \${target.name} (Tuổi: \${target.age})\`);
} else {
  console.log("Không tìm thấy");
}`,
      testCases: [
        { id: 'tc-1', description: 'Tìm chính xác Bình', expectedOutput: 'Tìm thấy: Bình (Tuổi: 22)' }
      ],
      hints: ['users.find(u => u.email === "binh@gmail.com")'],
      explanation: 'find() dừng quét ngay khi tìm thấy đối tượng đầu tiên khớp điều kiện, rất tối ưu cho tìm kiếm khóa duy nhất.'
    }
  },
  quiz: {
    id: 'quiz-7-3',
    lessonId: 'les-7-3',
    title: 'Trắc nghiệm map, filter, find',
    passingScore: 70,
    questions: []
  },
  summary: [
    'map biến đổi 1-1 không sửa mảng gốc.',
    'filter lọc danh sách thỏa điều kiện.',
    'find trả về phần tử đầu tiên tìm thấy hoặc undefined.'
  ],
  suggestedBookmarks: ['map(), filter(), find() pipeline']
};

export const LESSON_7_4: Lesson = {
  id: 'les-7-4',
  moduleId: 'mod-7',
  track: 'javascript',
  language: 'javascript',
  title: '7.4 Gom nhóm & Tính toán lũy kế với reduce()',
  order: 4,
  durationMinutes: 65,
  difficulty: 'Nâng cao',
  prerequisites: ['Đã học map và filter', 'Hiểu mẫu thiết kế Accumulator (biến tích lũy)'],
  learningObjectives: [
    {
      id: 'LO7.4.1',
      code: 'LO7.4.1',
      title: 'Làm chủ cơ chế tích lũy của phương thức reduce()',
      description: 'Hiểu 4 tham số: accumulator, currentValue, currentIndex, array và giá trị khởi tạo initialValue.',
      bloomLevel: 'Analyze',
      masteryPercentage: 82
    },
    {
      id: 'LO7.4.2',
      code: 'LO7.4.2',
      title: 'Ứng dụng reduce() tính tổng tiền đơn hàng và đếm tần suất',
      description: 'Giải quyết các bài toán gom nhóm và tổng hợp dữ liệu doanh nghiệp.',
      bloomLevel: 'Apply',
      masteryPercentage: 80
    }
  ],
  sections: [
    {
      id: 'sec-7-4-1',
      lessonId: 'les-7-4',
      order: 1,
      conceptName: 'Bản chất hoạt động của phương thức reduce()',
      title: '1. Cấu trúc và chu trình tích lũy của reduce()',
      explanation: '`reduce()` gom tất cả các phần tử trong mảng lại thành MỘT GIÁ TRỊ DUY NHẤT (có thể là một số, một chuỗi, một mảng hoặc một đối tượng). Callback nhận biến tích lũy `acc` và phần tử hiện tại `cur`. Tham số thứ hai của reduce là giá trị khởi tạo `initialValue`.',
      syntax: 'arr.reduce((acc, cur) => acc + cur, giaTriKhoiTao);',
      codeExample: `const numbers = [10, 20, 30, 40];

// Tính tổng mảng, khởi tạo acc = 0
const sum = numbers.reduce((acc, cur) => {
  return acc + cur;
}, 0);

console.log("Tổng cộng:", sum);`,
      lineByLineExplanation: [
        { line: 4, text: 'Vòng 1: acc=0, cur=10 -> return 10.' },
        { line: 4, text: 'Vòng 2: acc=10, cur=20 -> return 30.' },
        { line: 4, text: 'Vòng 3: acc=30, cur=30 -> return 60.' },
        { line: 4, text: 'Vòng 4: acc=60, cur=40 -> return 100.' }
      ],
      commonMistakes: [
        'Quên truyền initialValue dẫn đến phần tử đầu tiên bị lấy làm acc mà không chạy callback cho nó.',
        'Quên lệnh return bên trong callback của reduce khiến acc trở thành undefined ở các vòng sau.'
      ],
      whenToUse: 'Dùng khi cần tính tổng, đếm số lần xuất hiện, hoặc chuyển đổi mảng thành object.',
      whenNotToUse: 'Nếu chỉ cần lọc dữ liệu thì hãy dùng filter, đừng lạm dụng reduce cho mọi thứ gây khó đọc.',
      realWorldUseCase: 'Tính tổng tiền đơn hàng bao gồm số lượng * đơn giá của từng món hàng.'
    },
    {
      id: 'sec-7-4-2',
      lessonId: 'les-7-4',
      order: 2,
      conceptName: 'Đếm tần suất xuất hiện với reduce()',
      title: '2. Đếm số lần xuất hiện (Frequency Counter)',
      explanation: 'Bằng cách đặt `initialValue` là một object `{}` rỗng, ta có thể dùng reduce để đếm số lần xuất hiện của từng phần tử.',
      syntax: 'arr.reduce((acc, item) => {\n  acc[item] = (acc[item] || 0) + 1;\n  return acc;\n}, {});',
      codeExample: `const fruits = ["Táo", "Cam", "Táo", "Chuối", "Cam", "Táo"];

const counts = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log("Tần suất xuất hiện:", counts);`,
      lineByLineExplanation: [
        { line: 4, text: 'Nếu acc[fruit] đã có thì cộng 1, chưa có thì gán 0 + 1 = 1.' },
        { line: 5, text: 'Luôn luôn return acc để chuyển sang vòng lặp tiếp theo.' }
      ],
      commonMistakes: [
        'Không return acc dẫn đến lỗi Cannot read properties of undefined ở lượt thứ 2.'
      ],
      whenToUse: 'Thống kê dữ liệu, phân loại sản phẩm theo danh mục hoặc đếm phiếu bầu chọn.',
      whenNotToUse: 'Không dùng nếu mảng đã được gom nhóm từ backend.',
      realWorldUseCase: 'Thống kê số lượng sinh viên theo từng xếp loại học lực (Giỏi, Khá, TB).'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-7-4',
    title: 'Thực hành tính tổng giá trị giỏ hàng',
    description: 'Dùng reduce tính tổng số tiền của các món hàng trong cart.',
    starterCode: `const cart = [
  { item: "Bàn phím", price: 500, qty: 1 },
  { item: "Chuột", price: 200, qty: 2 },
  { item: "Lót chuột", price: 50, qty: 3 }
];

const total = cart.reduce((acc, item) => {
  return acc + (item.price * item.qty);
}, 0);

console.log("Tổng hóa đơn:", total);`,
    expectedConsoleOutput: 'Tổng hóa đơn: 1050',
    hint: 'acc + (item.price * item.qty) với khởi tạo là 0.'
  },
  exercises: {
    basic: {
      id: 'ex-7-4-1',
      lessonId: 'les-7-4',
      title: 'Bài tập Cơ bản: Tính tích các số trong mảng',
      difficulty: 'basic',
      learningObjectiveIds: ['LO7.4.1'],
      description: 'Cho mảng numbers = [2, 3, 4, 5]. Dùng reduce tính tích của tất cả các số (khởi tạo acc = 1). In kết quả "Tích các số: [product]".',
      starterCode: `const numbers = [2, 3, 4, 5];

// Tính tích với reduce:
const product = numbers.reduce((acc, cur) => acc * cur, 1);

console.log("Tích các số:", product);`,
      solutionCode: `const numbers = [2, 3, 4, 5];
const product = numbers.reduce((acc, cur) => acc * cur, 1);
console.log("Tích các số:", product);`,
      testCases: [
        { id: 'tc-1', description: '2 * 3 * 4 * 5 = 120', expectedOutput: 'Tích các số: 120' }
      ],
      hints: ['reduce((acc, cur) => acc * cur, 1)'],
      explanation: 'Phép nhân cần giá trị khởi tạo là 1 (phần tử trung hòa).'
    },
    intermediate: {
      id: 'ex-7-4-2',
      lessonId: 'les-7-4',
      title: 'Bài tập Trung bình: Tìm số lớn nhất trong mảng bằng reduce',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO7.4.1'],
      description: 'Cho mảng scores = [45, 82, 91, 64, 78]. Dùng reduce để tìm số có giá trị lớn nhất. In "Điểm cao nhất: [max]".',
      starterCode: `const scores = [45, 82, 91, 64, 78];

// Dùng reduce so sánh acc và cur:
const maxScore = scores.reduce((acc, cur) => (cur > acc ? cur : acc), scores[0]);

console.log("Điểm cao nhất:", maxScore);`,
      solutionCode: `const scores = [45, 82, 91, 64, 78];
const maxScore = scores.reduce((acc, cur) => (cur > acc ? cur : acc), scores[0]);
console.log("Điểm cao nhất:", maxScore);`,
      testCases: [
        { id: 'tc-1', description: 'Tìm ra 91', expectedOutput: 'Điểm cao nhất: 91' }
      ],
      hints: ['cur > acc ? cur : acc'],
      explanation: 'Ở mỗi bước, acc lưu lại giá trị lớn nhất đã gặp từ đầu mảng đến thời điểm đó.'
    },
    challenge: {
      id: 'ex-7-4-3',
      lessonId: 'les-7-4',
      title: 'Bài tập Thử thách: Gom nhóm học viên theo xếp loại',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO7.4.2'],
      description: 'Cho danh sách sinh viên. Dùng reduce gom nhóm thành object có các key là rank ("Giỏi", "Khá") chứa mảng tên học viên tương ứng. In object gom nhóm.',
      starterCode: `const students = [
  { name: "An", rank: "Giỏi" },
  { name: "Bình", rank: "Khá" },
  { name: "Cường", rank: "Giỏi" },
  { name: "Dũng", rank: "Khá" }
];

const grouped = students.reduce((acc, st) => {
  if (!acc[st.rank]) {
    acc[st.rank] = [];
  }
  acc[st.rank].push(st.name);
  return acc;
}, {});

console.log("Phân nhóm học viên:", grouped);`,
      solutionCode: `const students = [
  { name: "An", rank: "Giỏi" },
  { name: "Bình", rank: "Khá" },
  { name: "Cường", rank: "Giỏi" },
  { name: "Dũng", rank: "Khá" }
];
const grouped = students.reduce((acc, st) => {
  if (!acc[st.rank]) {
    acc[st.rank] = [];
  }
  acc[st.rank].push(st.name);
  return acc;
}, {});
console.log("Phân nhóm học viên:", grouped);`,
      testCases: [
        { id: 'tc-1', description: 'Gom nhóm chuẩn xác', expectedOutput: 'Phân nhóm học viên: { \'Giỏi\': [ \'An\', \'Cường\' ], \'Khá\': [ \'Bình\', \'Dũng\' ] }' }
      ],
      hints: ['Khởi tạo acc[st.rank] = [] nếu chưa tồn tại rồi push tên vào'],
      explanation: 'Mô hình Group-By là ứng dụng thực tế đỉnh cao của reduce trong xử lý dữ liệu Frontend.'
    }
  },
  quiz: {
    id: 'quiz-7-4',
    lessonId: 'les-7-4',
    title: 'Trắc nghiệm reduce',
    passingScore: 70,
    questions: []
  },
  summary: [
    'reduce gom mảng thành một giá trị duy nhất.',
    'Luôn truyền initialValue và return acc trong callback.'
  ],
  suggestedBookmarks: ['reduce tích lũy và đếm tần suất', 'Group By bằng reduce']
};

export const LESSON_7_5: Lesson = {
  id: 'les-7-5',
  moduleId: 'mod-7',
  track: 'javascript',
  language: 'javascript',
  title: '7.5 Kiểm tra điều kiện danh sách với some() và every()',
  order: 5,
  durationMinutes: 40,
  difficulty: 'Cơ bản',
  prerequisites: ['Đã học các phương thức xử lý mảng căn bản'],
  learningObjectives: [
    {
      id: 'LO7.5.1',
      code: 'LO7.5.1',
      title: 'Kiểm tra tồn tại với some()',
      description: 'Trả về true nếu có ÍT NHẤT một phần tử thỏa mãn điều kiện.',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    },
    {
      id: 'LO7.5.2',
      code: 'LO7.5.2',
      title: 'Xác thực toàn bộ mảng với every()',
      description: 'Trả về true nếu TẤT CẢ các phần tử đều thỏa mãn điều kiện.',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    }
  ],
  sections: [
    {
      id: 'sec-7-5-1',
      lessonId: 'les-7-5',
      order: 1,
      conceptName: 'Phương thức some() và every()',
      title: '1. some() (Có ít nhất một) vs every() (Tất cả)',
      explanation: '`some()` kiểm tra xem trong mảng có ít nhất một phần tử thỏa điều kiện hay không (ngắt sớm ngay khi gặp true). `every()` kiểm tra xem toàn bộ các phần tử có thỏa điều kiện hay không (ngắt sớm ngay khi gặp false). Cả 2 phương thức đều trả về kiểu Boolean (`true` hoặc `false`).',
      syntax: 'const coItNhatMot = arr.some(item => dieuKien);\nconst tatCaHopLe = arr.every(item => dieuKien);',
      codeExample: `const ages = [18, 22, 16, 25];

// Có ai dưới 18 tuổi không?
const hasMinor = ages.some(age => age < 18);
console.log("Có người vị thành niên không?", hasMinor);

// Tất cả đều từ 18 tuổi trở lên?
const allAdults = ages.every(age => age >= 18);
console.log("Tất cả đều là người lớn?", allAdults);`,
      lineByLineExplanation: [
        { line: 4, text: 'some() gặp 16 < 18 là true nên dừng lại trả về true ngay.' },
        { line: 8, text: 'every() thấy 16 không >= 18 nên trả về false.' }
      ],
      commonMistakes: [
        'Dùng filter(predicate).length > 0 thay cho some(predicate) gây lãng phí CPU duyệt cả mảng.'
      ],
      whenToUse: 'Dùng some() để kiểm tra sự tồn tại; dùng every() để kiểm tra form hợp lệ hoặc điều kiện điều khoản.',
      whenNotToUse: 'Không dùng khi cần lấy ra giá trị của phần tử (dùng find hoặc filter).',
      realWorldUseCase: 'Kiểm tra giỏ hàng có sản phẩm nào hết hàng không (some), hoặc kiểm tra tất cả học viên đã nộp bài tập chưa (every).'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-7-5',
    title: 'Thực hành xác thực giỏ hàng',
    description: 'Kiểm tra xem giỏ hàng có món đồ nào giá 0đ không.',
    starterCode: `const cart = [
  { name: "Khóa học A", price: 300 },
  { name: "Ebook quà tặng", price: 0 },
  { name: "Khóa học B", price: 450 }
];

const hasFreeItem = cart.some(item => item.price === 0);
console.log("Có quà tặng miễn phí:", hasFreeItem);`,
    expectedConsoleOutput: 'Có quà tặng miễn phí: true',
    hint: 'cart.some(item => item.price === 0).'
  },
  exercises: {
    basic: {
      id: 'ex-7-5-1',
      lessonId: 'les-7-5',
      title: 'Bài tập Cơ bản: Kiểm tra mảng có chứa số âm không',
      difficulty: 'basic',
      learningObjectiveIds: ['LO7.5.1'],
      description: 'Cho mảng numbers = [4, 8, -2, 10]. Dùng some kiểm tra có số nào nhỏ hơn 0 không. In ra: "Chứa số âm: [true/false]".',
      starterCode: `const numbers = [4, 8, -2, 10];

const hasNegative = numbers.some(n => n < 0);
console.log("Chứa số âm:", hasNegative);`,
      solutionCode: `const numbers = [4, 8, -2, 10];
const hasNegative = numbers.some(n => n < 0);
console.log("Chứa số âm:", hasNegative);`,
      testCases: [
        { id: 'tc-1', description: 'Có -2 nên trả về true', expectedOutput: 'Chứa số âm: true' }
      ],
      hints: ['numbers.some(n => n < 0)'],
      explanation: 'some() phát hiện -2 < 0 trả về true ngay lập tức.'
    },
    intermediate: {
      id: 'ex-7-5-2',
      lessonId: 'les-7-5',
      title: 'Bài tập Trung bình: Kiểm tra toàn bộ học sinh có đạt điểm chuẩn',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO7.5.2'],
      description: 'Cho mảng scores = [7, 8, 9, 6, 10]. Điểm sàn qua môn là 5. Dùng every kiểm tra xem cả lớp có đỗ 100% không. In ra: "Cả lớp đều qua môn: [true/false]".',
      starterCode: `const scores = [7, 8, 9, 6, 10];

const allPassed = scores.every(s => s >= 5);
console.log("Cả lớp đều qua môn:", allPassed);`,
      solutionCode: `const scores = [7, 8, 9, 6, 10];
const allPassed = scores.every(s => s >= 5);
console.log("Cả lớp đều qua môn:", allPassed);`,
      testCases: [
        { id: 'tc-1', description: 'Tất cả >= 5 nên là true', expectedOutput: 'Cả lớp đều qua môn: true' }
      ],
      hints: ['scores.every(s => s >= 5)'],
      explanation: 'every() chỉ trả về true khi mọi phần tử đều thỏa mãn điều kiện s >= 5.'
    },
    challenge: {
      id: 'ex-7-5-3',
      lessonId: 'les-7-5',
      title: 'Bài tập Thử thách: Kiểm tra mật khẩu danh sách người dùng',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO7.5.2'],
      description: 'Cho mảng users gồm các đối tượng có thuộc tính password. Dùng every kiểm tra xem tất cả password có độ dài tối thiểu 6 ký tự không. In "Tất cả mật khẩu an toàn: [true/false]".',
      starterCode: `const users = [
  { username: "an99", password: "secretPassword" },
  { username: "binh88", password: "123" }, // Nguy hiểm!
  { username: "cuong77", password: "superStrongPass" }
];

const isAllSecure = users.every(u => u.password.length >= 6);
console.log("Tất cả mật khẩu an toàn:", isAllSecure);`,
      solutionCode: `const users = [
  { username: "an99", password: "secretPassword" },
  { username: "binh88", password: "123" },
  { username: "cuong77", password: "superStrongPass" }
];
const isAllSecure = users.every(u => u.password.length >= 6);
console.log("Tất cả mật khẩu an toàn:", isAllSecure);`,
      testCases: [
        { id: 'tc-1', description: 'Có pass "123" nên trả về false', expectedOutput: 'Tất cả mật khẩu an toàn: false' }
      ],
      hints: ['u.password.length >= 6'],
      explanation: 'every() lập tức trả về false khi duyệt đến tài khoản binh88 vì password dài 3 < 6.'
    }
  },
  quiz: {
    id: 'quiz-7-5',
    lessonId: 'les-7-5',
    title: 'Trắc nghiệm some & every',
    passingScore: 70,
    questions: []
  },
  summary: [
    'some() trả về true nếu có ít nhất 1 phần tử thỏa mãn.',
    'every() trả về true nếu 100% phần tử đều thỏa mãn.'
  ],
  suggestedBookmarks: ['some() kiểm tra tồn tại', 'every() xác thực toàn mảng']
};

export const JS_MODULE_7_LESSONS: Lesson[] = [
  LESSON_7_1,
  LESSON_7_2,
  LESSON_7_3,
  LESSON_7_4,
  LESSON_7_5
];
