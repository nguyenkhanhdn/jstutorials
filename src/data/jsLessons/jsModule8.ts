import { Lesson } from '../../types';

// ==========================================
// MODULE 8: OBJECT (ĐỐI TƯỢNG)
// ==========================================

export const LESSON_8_1: Lesson = {
  id: 'les-8-1',
  moduleId: 'mod-8',
  track: 'javascript',
  language: 'javascript',
  title: '8.1 Cấu trúc Object, Khóa (Key) và Giá trị (Value)',
  order: 1,
  durationMinutes: 45,
  difficulty: 'Cơ bản',
  prerequisites: ['Hiểu các kiểu dữ liệu nguyên thủy', 'Biết cách khai báo biến'],
  learningObjectives: [
    {
      id: 'LO8.1.1',
      code: 'LO8.1.1',
      title: 'Khởi tạo Object bằng Object Literal {}',
      description: 'Định nghĩa cặp key-value rõ ràng và đọc hiểu cấu trúc bản ghi.',
      bloomLevel: 'Understand',
      masteryPercentage: 92
    },
    {
      id: 'LO8.1.2',
      code: 'LO8.1.2',
      title: 'Phân biệt Dot notation và Bracket notation',
      description: 'Biết khi nào bắt buộc dùng ngoặc vuông obj[propName].',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    }
  ],
  sections: [
    {
      id: 'sec-8-1-1',
      lessonId: 'les-8-1',
      order: 1,
      conceptName: 'Khai báo Object Literal và cặp Key-Value',
      title: '1. Khởi tạo đối tượng với Object Literal',
      explanation: 'Object trong JavaScript là cấu trúc dữ liệu dạng phi tuyến tính, lưu trữ các tập hợp cặp Khóa (Key/Property) và Giá trị (Value). Key là một chuỗi (hoặc Symbol), còn Value có thể là bất kỳ kiểu dữ liệu nào (chuỗi, số, mảng, hàm, hay một object khác).',
      syntax: 'const sinhVien = {\n  hoTen: "Nguyễn Văn A",\n  tuoi: 20,\n  daTotNghiep: false\n};',
      codeExample: `const laptop = {
  brand: "Apple",
  model: "MacBook Air M2",
  ramGB: 16,
  inStock: true
};

console.log("Thương hiệu:", laptop.brand);
console.log("Dung lượng RAM:", laptop.ramGB, "GB");`,
      lineByLineExplanation: [
        { line: 1, text: 'Khai báo đối tượng laptop bằng cặp dấu ngoặc nhọn {}.' },
        { line: 8, text: 'Dùng toán tử dấu chấm (Dot notation) để đọc thuộc tính brand.' }
      ],
      commonMistakes: [
        'Dùng dấu bằng (=) thay vì dấu hai chấm (:) khi định nghĩa thuộc tính trong Object literal.'
      ],
      whenToUse: 'Dùng khi muốn mô hình hóa một thực thể có nhiều thuộc tính mô tả (sinh viên, xe cộ, sản phẩm, cấu hình).',
      whenNotToUse: 'Không dùng Object nếu chỉ cần danh sách thứ tự đơn giản (hãy dùng Array).',
      realWorldUseCase: 'Mô hình hóa dữ liệu thông tin tài khoản người dùng đăng nhập hệ thống.'
    },
    {
      id: 'sec-8-1-2',
      lessonId: 'les-8-1',
      order: 2,
      conceptName: 'Truy cập thuộc tính: Dot notation vs Bracket notation',
      title: '2. Khi nào bắt buộc dùng Bracket Notation obj[key]?',
      explanation: 'Dot notation (`obj.prop`) nhanh và phổ biến. Tuy nhiên, Bracket notation (`obj["prop"]`) BẮT BUỘC phải dùng khi: (1) Tên thuộc tính được lưu trong một BIẾN số; (2) Tên thuộc tính chứa khoảng trắng hoặc ký tự đặc biệt (ví dụ: `"ma-sinh-vien"`).',
      syntax: 'obj.thuocTinh       // Dot notation\nobj["thuoc-tinh"]   // Bracket notation\nobj[tenBien]        // Khi key là giá trị của biến',
      codeExample: `const user = {
  name: "Hoàng",
  "so-dien-thoai": "0987654321"
};

// 1. Thuộc tính có dấu gạch ngang:
console.log("SĐT:", user["so-dien-thoai"]);

// 2. Truy xuất động qua biến:
const searchKey = "name";
console.log("Tên qua biến:", user[searchKey]);`,
      lineByLineExplanation: [
        { line: 7, text: 'user["so-dien-thoai"] đọc được key có dấu gạch ngang mà user.so-dien-thoai sẽ báo lỗi Syntax.' },
        { line: 11, text: 'user[searchKey] tương đương user["name"] vì searchKey chứa chuỗi "name".' }
      ],
      commonMistakes: [
        'Viết user.searchKey khi muốn đọc thuộc tính động -> JavaScript sẽ tìm thuộc tính có tên thật sự là "searchKey" và trả về undefined.'
      ],
      whenToUse: 'Dùng Dot notation cho 90% trường hợp; dùng Bracket notation khi tên key là biến động hoặc có khoảng trắng.',
      whenNotToUse: 'Tránh đặt tên thuộc tính có khoảng trắng nếu không bắt buộc.',
      realWorldUseCase: 'Đọc trường dữ liệu form động dựa trên `e.target.name`.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-8-1',
    title: 'Thực hành đọc thuộc tính động của đối tượng',
    description: 'Dùng Bracket notation đọc thuộc tính từ biến fieldName.',
    starterCode: `const book = {
  title: "Lập trình JavaScript",
  author: "FPT Polytechnic",
  price: 150000
};

const fieldName = "title";

// Đọc giá trị qua biến fieldName:
const bookTitle = book[fieldName];
console.log("Tựa sách:", bookTitle);`,
    expectedConsoleOutput: 'Tựa sách: Lập trình JavaScript',
    hint: 'Dùng book[fieldName].'
  },
  exercises: {
    basic: {
      id: 'ex-8-1-1',
      lessonId: 'les-8-1',
      title: 'Bài tập Cơ bản: Khởi tạo hồ sơ sinh viên',
      difficulty: 'basic',
      learningObjectiveIds: ['LO8.1.1'],
      description: 'Tạo đối tượng student gồm 3 thuộc tính: name: "Minh", age: 19, major: "Công nghệ thông tin". In ra: "Sinh viên: [name], Ngành: [major]".',
      starterCode: `// Tạo đối tượng student:
const student = {
  name: "Minh",
  age: 19,
  major: "Công nghệ thông tin"
};

console.log(\`Sinh viên: \${student.name}, Ngành: \${student.major}\`);`,
      solutionCode: `const student = {
  name: "Minh",
  age: 19,
  major: "Công nghệ thông tin"
};
console.log(\`Sinh viên: \${student.name}, Ngành: \${student.major}\`);`,
      testCases: [
        { id: 'tc-1', description: 'In thông tin sinh viên', expectedOutput: 'Sinh viên: Minh, Ngành: Công nghệ thông tin' }
      ],
      hints: ['Khai báo { name, age, major }'],
      explanation: 'Object literal nhóm các thông tin liên quan của một đối tượng thành một đơn vị duy nhất.'
    },
    intermediate: {
      id: 'ex-8-1-2',
      lessonId: 'les-8-1',
      title: 'Bài tập Trung bình: Truy xuất trường thuộc tính theo tham số hàm',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO8.1.2'],
      description: 'Viết hàm getProperty(obj, key) nhận vào một đối tượng và tên khóa, trả về giá trị của khóa đó. Chạy thử với car = { brand: "Toyota", year: 2024 } và key = "brand".',
      starterCode: `function getProperty(obj, key) {
  return obj[key];
}

const car = { brand: "Toyota", year: 2024 };
console.log("Hãng xe:", getProperty(car, "brand"));`,
      solutionCode: `function getProperty(obj, key) {
  return obj[key];
}
const car = { brand: "Toyota", year: 2024 };
console.log("Hãng xe:", getProperty(car, "brand"));`,
      testCases: [
        { id: 'tc-1', description: 'Đọc thuộc tính brand', expectedOutput: 'Hãng xe: Toyota' }
      ],
      hints: ['return obj[key] (dùng ngoặc vuông)'],
      explanation: 'Chỉ có bracket notation mới có thể đánh giá giá trị chuỗi của biến tham số key.'
    },
    challenge: {
      id: 'ex-8-1-3',
      lessonId: 'les-8-1',
      title: 'Bài tập Thử thách: Kiểm tra sự tồn tại của thuộc tính trong Object',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO8.1.1', 'LO8.1.2'],
      description: 'Cho đối tượng config = { theme: "dark", lang: "vi" }. Viết câu lệnh kiểm tra xem config có chứa thuộc tính "fontSize" không bằng toán tử in (hoặc hasOwnProperty). Nếu có in "Đã có cỡ chữ", ngược lại in "Chưa thiết lập cỡ chữ".',
      starterCode: `const config = { theme: "dark", lang: "vi" };

if ("fontSize" in config) {
  console.log("Đã có cỡ chữ");
} else {
  console.log("Chưa thiết lập cỡ chữ");
}`,
      solutionCode: `const config = { theme: "dark", lang: "vi" };
if ("fontSize" in config) {
  console.log("Đã có cỡ chữ");
} else {
  console.log("Chưa thiết lập cỡ chữ");
}`,
      testCases: [
        { id: 'tc-1', description: 'Chưa có fontSize', expectedOutput: 'Chưa thiết lập cỡ chữ' }
      ],
      hints: ['Dùng "fontSize" in config'],
      explanation: 'Toán tử in kiểm tra chính xác sự tồn tại của key trong object mà không lo bị nhầm giá trị falsy như undefined hay false.'
    }
  },
  quiz: {
    id: 'quiz-8-1',
    lessonId: 'les-8-1',
    title: 'Trắc nghiệm Object căn bản',
    passingScore: 70,
    questions: []
  },
  summary: [
    'Object lưu trữ dữ liệu dưới dạng các cặp key: value.',
    'Dùng Bracket notation obj[key] khi tên key là biến động.'
  ],
  suggestedBookmarks: ['Dot notation vs Bracket notation']
};

export const LESSON_8_2: Lesson = {
  id: 'les-8-2',
  moduleId: 'mod-8',
  track: 'javascript',
  language: 'javascript',
  title: '8.2 Truy xuất, Thêm, Sửa, Xóa thuộc tính & từ khóa this',
  order: 2,
  durationMinutes: 50,
  difficulty: 'Trung bình',
  prerequisites: ['Đã học khai báo Object cơ bản', 'Biết định nghĩa Function'],
  learningObjectives: [
    {
      id: 'LO8.2.1',
      code: 'LO8.2.1',
      title: 'Thêm, sửa và xóa thuộc tính bằng toán tử delete',
      description: 'Thao tác linh hoạt trên đối tượng có sẵn.',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    },
    {
      id: 'LO8.2.2',
      code: 'LO8.2.2',
      title: 'Định nghĩa Method (Phương thức) và sử dụng từ khóa this',
      description: 'Truy cập thuộc tính nội tại của đối tượng thông qua this.',
      bloomLevel: 'Apply',
      masteryPercentage: 85
    }
  ],
  sections: [
    {
      id: 'sec-8-2-1',
      lessonId: 'les-8-2',
      order: 1,
      conceptName: 'Thêm, cập nhật và xóa thuộc tính',
      title: '1. Thao tác CRUD trên thuộc tính Object',
      explanation: 'Trong JavaScript, Object có tính chất linh hoạt (Dynamic): ta có thể thêm thuộc tính mới bằng cách gán `obj.newProp = value`, sửa giá trị bằng gán đè, và xóa vĩnh viễn thuộc tính bằng từ khóa `delete obj.prop`.',
      syntax: 'obj.newKey = val;   // Thêm mới\nobj.oldKey = newVal; // Cập nhật\ndelete obj.key;      // Xóa thuộc tính',
      codeExample: `const user = { name: "Thành", age: 25 };

// Thêm email
user.email = "thanh@gmail.com";

// Cập nhật tuổi
user.age = 26;

// Xóa age
delete user.age;

console.log("Đối tượng sau khi cập nhật:", user);`,
      lineByLineExplanation: [
        { line: 4, text: 'Thêm thuộc tính email vào đối tượng user.' },
        { line: 7, text: 'Tăng age lên 26.' },
        { line: 10, text: 'Toán tử delete xóa bỏ hoàn toàn key age khỏi đối tượng.' }
      ],
      commonMistakes: [
        'Gán user.age = undefined thay vì dùng delete -> key age vẫn tồn tại trong object chỉ là giá trị mang undefined.'
      ],
      whenToUse: 'Dùng khi cần cập nhật trạng thái hồ sơ hoặc lọc bỏ các trường nhạy cảm (như xóa password trước khi trả về client).',
      whenNotToUse: 'Tránh xóa liên tục trên các object trong vòng lặp hiệu năng cao (ảnh hưởng V8 hidden class optimization).',
      realWorldUseCase: 'Loại bỏ thuộc tính `confirmPassword` khỏi object form trước khi gửi dữ liệu lên server.'
    },
    {
      id: 'sec-8-2-2',
      lessonId: 'les-8-2',
      order: 2,
      conceptName: 'Phương thức (Method) và từ khóa this',
      title: '2. Phương thức trong Object và ngữ cảnh this',
      explanation: 'Khi một hàm được gắn làm thuộc tính của đối tượng, nó được gọi là Phương thức (Method). Bên trong phương thức thường, từ khóa `this` đại diện cho chính đối tượng đang sở hữu phương thức đó.',
      syntax: 'const obj = {\n  prop: "A",\n  getProp() {\n    return this.prop;\n  }\n};',
      codeExample: `const bankAccount = {
  owner: "Trần Văn Bình",
  balance: 1000000,
  deposit(amount) {
    this.balance += amount;
    console.log(\`Đã nạp \${amount}đ. Số dư mới: \${this.balance}đ\`);
  }
};

bankAccount.deposit(500000);`,
      lineByLineExplanation: [
        { line: 4, text: 'Định nghĩa phương thức deposit nhận số tiền amount.' },
        { line: 5, text: 'this.balance tham chiếu trực tiếp đến thuộc tính balance của bankAccount.' },
        { line: 10, text: 'Gọi phương thức, in ra thông báo số dư mới.' }
      ],
      commonMistakes: [
        'Dùng Arrow Function làm method: Arrow function không có this riêng, nó lấy this từ phạm vi bao ngoài (window/global), dẫn đến this.balance là undefined.'
      ],
      whenToUse: 'Dùng method thông thường (shorthand: method() {}) khi cần tương tác với dữ liệu nội tại qua this.',
      whenNotToUse: 'Không dùng Arrow function làm method nếu bên trong có dùng từ khóa this.',
      realWorldUseCase: 'Xây dựng đối tượng giỏ hàng với các method `addItem()`, `removeItem()`, `calcTotal()`.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-8-2',
    title: 'Thực hành phương thức tính diện tích hình chữ nhật',
    description: 'Gọi phương thức getArea() và in ra diện tích.',
    starterCode: `const rectangle = {
  width: 10,
  height: 5,
  getArea() {
    return this.width * this.height;
  }
};

const area = rectangle.getArea();
console.log("Diện tích hình chữ nhật:", area);`,
    expectedConsoleOutput: 'Diện tích hình chữ nhật: 50',
    hint: 'rectangle.getArea() dùng this.width * this.height.'
  },
  exercises: {
    basic: {
      id: 'ex-8-2-1',
      lessonId: 'les-8-2',
      title: 'Bài tập Cơ bản: Thêm thuộc tính role và xóa password',
      difficulty: 'basic',
      learningObjectiveIds: ['LO8.2.1'],
      description: 'Cho account = { username: "admin", password: "123" }. Thêm role: "SUPER_ADMIN" và xóa thuộc tính password. In account.',
      starterCode: `const account = { username: "admin", password: "123" };

// Thêm role và xóa password:
account.role = "SUPER_ADMIN";
delete account.password;

console.log("Tài khoản an toàn:", account);`,
      solutionCode: `const account = { username: "admin", password: "123" };
account.role = "SUPER_ADMIN";
delete account.password;
console.log("Tài khoản an toàn:", account);`,
      testCases: [
        { id: 'tc-1', description: 'Đã xóa password và có role', expectedOutput: 'Tài khoản an toàn: { username: \'admin\', role: \'SUPER_ADMIN\' }' }
      ],
      hints: ['account.role = ... và delete account.password'],
      explanation: 'delete xóa thuộc tính nhạy cảm, bảo vệ an toàn dữ liệu.'
    },
    intermediate: {
      id: 'ex-8-2-2',
      lessonId: 'les-8-2',
      title: 'Bài tập Trung bình: Viết phương thức giới thiệu bản thân',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO8.2.2'],
      description: 'Tạo đối tượng person có name: "Linh", age: 21 và method introduce() in ra: "Xin chào, tôi là [name], [age] tuổi.". Chạy thử person.introduce().',
      starterCode: `const person = {
  name: "Linh",
  age: 21,
  introduce() {
    console.log(\`Xin chào, tôi là \${this.name}, \${this.age} tuổi.\`);
  }
};

person.introduce();`,
      solutionCode: `const person = {
  name: "Linh",
  age: 21,
  introduce() {
    console.log(\`Xin chào, tôi là \${this.name}, \${this.age} tuổi.\`);
  }
};
person.introduce();`,
      testCases: [
        { id: 'tc-1', description: 'In đúng lời giới thiệu', expectedOutput: 'Xin chào, tôi là Linh, 21 tuổi.' }
      ],
      hints: ['Dùng this.name và this.age bên trong introduce()'],
      explanation: 'Từ khóa this trỏ về chính person khi được gọi qua cú pháp person.introduce().'
    },
    challenge: {
      id: 'ex-8-2-3',
      lessonId: 'les-8-2',
      title: 'Bài tập Thử thách: Bộ đếm Counter có thể gọi chuỗi (Method Chaining)',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO8.2.2'],
      description: 'Xây dựng đối tượng counter với value: 0, method increment() cộng 1 và return this, method decrement() trừ 1 và return this, method print() in ra "Giá trị: [value]". Chạy thử counter.increment().increment().print().',
      starterCode: `const counter = {
  value: 0,
  increment() {
    this.value++;
    return this;
  },
  decrement() {
    this.value--;
    return this;
  },
  print() {
    console.log("Giá trị:", this.value);
  }
};

counter.increment().increment().print();`,
      solutionCode: `const counter = {
  value: 0,
  increment() {
    this.value++;
    return this;
  },
  decrement() {
    this.value--;
    return this;
  },
  print() {
    console.log("Giá trị:", this.value);
  }
};
counter.increment().increment().print();`,
      testCases: [
        { id: 'tc-1', description: 'Gọi chuỗi tăng 2 lần ra 2', expectedOutput: 'Giá trị: 2' }
      ],
      hints: ['return this ở cuối mỗi method để cho phép gọi chuỗi liên tiếp'],
      explanation: 'Trả về this là nền tảng của kỹ thuật Fluent API / Method Chaining trong JavaScript.'
    }
  },
  quiz: {
    id: 'quiz-8-2',
    lessonId: 'les-8-2',
    title: 'Trắc nghiệm Method & This',
    passingScore: 70,
    questions: []
  },
  summary: [
    'Thêm/sửa thuộc tính bằng gán trực tiếp, xóa bằng toán tử delete.',
    'Phương thức thông thường dùng this để truy xuất thuộc tính của đối tượng sở hữu.'
  ],
  suggestedBookmarks: ['Toán tử delete', 'this trong phương thức đối tượng']
};

export const LESSON_8_3: Lesson = {
  id: 'les-8-3',
  moduleId: 'mod-8',
  track: 'javascript',
  language: 'javascript',
  title: '8.3 Object Destructuring & Shorthand Syntax',
  order: 3,
  durationMinutes: 45,
  difficulty: 'Trung bình',
  prerequisites: ['Đã học khai báo Object cơ bản'],
  learningObjectives: [
    {
      id: 'LO8.3.1',
      code: 'LO8.3.1',
      title: 'Trích xuất thuộc tính bằng Object Destructuring',
      description: 'Rút gọn code, đổi tên biến và gán giá trị mặc định (Default Values).',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    },
    {
      id: 'LO8.3.2',
      code: 'LO8.3.2',
      title: 'Áp dụng Property Value Shorthand',
      description: 'Viết ngắn gọn khi tên biến trùng với tên thuộc tính.',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    }
  ],
  sections: [
    {
      id: 'sec-8-3-1',
      lessonId: 'les-8-3',
      order: 1,
      conceptName: 'Object Destructuring (Phân rã đối tượng)',
      title: '1. Destructuring: Trích xuất thuộc tính ngắn gọn',
      explanation: 'Destructuring cho phép giải nén các giá trị từ thuộc tính của đối tượng thành các biến riêng biệt một cách nhanh chóng. Có thể đổi tên biến bằng cú pháp `key: tenBienMoi` và gán giá trị mặc định bằng `key = giaTriMacDinh`.',
      syntax: 'const { ten, tuoi, diaChi = "Hà Nội" } = nguoiDung;\nconst { id: maSo } = nguoiDung;',
      codeExample: `const product = {
  title: "Bàn phím cơ không dây",
  price: 1200000,
  brand: "Logitech"
};

// Trích xuất title và price, đổi tên brand thành manufacturer
const { title, price, brand: manufacturer, discount = 0 } = product;

console.log("Tên SP:", title);
console.log("Giá:", price);
console.log("Nhà sản xuất:", manufacturer);
console.log("Giảm giá:", discount);`,
      lineByLineExplanation: [
        { line: 8, text: 'Tạo các biến title và price trực tiếp từ product.' },
        { line: 8, text: 'brand: manufacturer đổi tên biến nhận thành manufacturer.' },
        { line: 8, text: 'discount = 0 gán giá trị mặc định vì product không có thuộc tính discount.' }
      ],
      commonMistakes: [
        'Nhầm cú pháp brand: manufacturer là gán giá trị mới thay vì đổi tên biến.'
      ],
      whenToUse: 'Dùng khi cần lấy nhiều thuộc tính từ object, đặc biệt là khi nhận props trong React hoặc tham số hàm.',
      whenNotToUse: 'Không dùng nếu chỉ cần lấy duy nhất 1 thuộc tính đơn giản ở một dòng duy nhất.',
      realWorldUseCase: 'Nhận dữ liệu cấu hình API hoặc destructuring props của Component React: `const { id, title } = props;`'
    },
    {
      id: 'sec-8-3-2',
      lessonId: 'les-8-3',
      order: 2,
      conceptName: 'Property Shorthand (Cú pháp viết tắt)',
      title: '2. Cú pháp viết tắt khi tên biến trùng tên thuộc tính',
      explanation: 'Khi khai báo Object Literal, nếu tên của thuộc tính trùng với tên của biến chứa giá trị, bạn có thể viết gọn bằng cách chỉ ghi tên biến một lần duy nhất thay vì `name: name`.',
      syntax: 'const name = "An";\nconst obj = { name }; // Tương đương { name: name }',
      codeExample: `const username = "khanhn";
const role = "Giảng viên";

// Viết tắt Shorthand
const userObj = {
  username,
  role,
  createdAt: "2026-09-27"
};

console.log("Đối tượng viết tắt:", userObj);`,
      lineByLineExplanation: [
        { line: 5, text: 'username tương đương username: username.' },
        { line: 6, text: 'role tương đương role: role.' }
      ],
      commonMistakes: [
        'Nghĩ rằng shorthand tạo ra biến mới thay vì tạo ra thuộc tính cho đối tượng.'
      ],
      whenToUse: 'Luôn áp dụng trong code ES6+ hiện đại để mã nguồn ngắn gọn, thanh thoát.',
      whenNotToUse: 'Không áp dụng khi tên thuộc tính khác với tên biến lưu trữ.',
      realWorldUseCase: 'Tạo payload gửi lên API: `const body = { email, password };`'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-8-3',
    title: 'Thực hành Destructuring tham số hàm',
    description: 'Viết hàm in thông tin sinh viên nhận vào đối tượng qua destructuring.',
    starterCode: `function printProfile({ name, age, major = "CNTT" }) {
  console.log(\`Sinh viên: \${name} - Tuổi: \${age} - Ngành: \${major}\`);
}

const sv = { name: "Quang", age: 20 };
printProfile(sv);`,
    expectedConsoleOutput: 'Sinh viên: Quang - Tuổi: 20 - Ngành: CNTT',
    hint: 'Destructuring trực tiếp trong tham số hàm: ({ name, age, major = "CNTT" }).'
  },
  exercises: {
    basic: {
      id: 'ex-8-3-1',
      lessonId: 'les-8-3',
      title: 'Bài tập Cơ bản: Trích xuất thông tin người dùng',
      difficulty: 'basic',
      learningObjectiveIds: ['LO8.3.1'],
      description: 'Cho user = { id: 101, email: "test@poly.edu.vn", status: "active" }. Dùng destructuring lấy id và email rồi in ra: "ID: [id], Email: [email]".',
      starterCode: `const user = { id: 101, email: "test@poly.edu.vn", status: "active" };

const { id, email } = user;
console.log(\`ID: \${id}, Email: \${email}\`);`,
      solutionCode: `const user = { id: 101, email: "test@poly.edu.vn", status: "active" };
const { id, email } = user;
console.log(\`ID: \${id}, Email: \${email}\`);`,
      testCases: [
        { id: 'tc-1', description: 'Trích xuất ID và Email', expectedOutput: 'ID: 101, Email: test@poly.edu.vn' }
      ],
      hints: ['const { id, email } = user'],
      explanation: 'Destructuring trích xuất trực tiếp các trường theo tên key.'
    },
    intermediate: {
      id: 'ex-8-3-2',
      lessonId: 'les-8-3',
      title: 'Bài tập Trung bình: Đổi tên biến và gán giá trị mặc định',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO8.3.1'],
      description: 'Cho item = { name: "Bàn chải", cost: 35000 }. Dùng destructuring lấy name đổi tên thành itemName, cost đổi tên thành itemPrice, và thêm vat = 10. In ra: "[itemName]: [itemPrice]đ (VAT: [vat]%)".',
      starterCode: `const item = { name: "Bàn chải", cost: 35000 };

const { name: itemName, cost: itemPrice, vat = 10 } = item;
console.log(\`\${itemName}: \${itemPrice}đ (VAT: \${vat}%)\`);`,
      solutionCode: `const item = { name: "Bàn chải", cost: 35000 };
const { name: itemName, cost: itemPrice, vat = 10 } = item;
console.log(\`\${itemName}: \${itemPrice}đ (VAT: \${vat}%)\`);`,
      testCases: [
        { id: 'tc-1', description: 'In chuỗi đúng biến đổi tên', expectedOutput: 'Bàn chải: 35000đ (VAT: 10%)' }
      ],
      hints: ['{ name: itemName, cost: itemPrice, vat = 10 }'],
      explanation: 'Cú pháp đổi tên và giá trị mặc định giúp code an toàn và linh hoạt.'
    },
    challenge: {
      id: 'ex-8-3-3',
      lessonId: 'les-8-3',
      title: 'Bài tập Thử thách: Hàm tạo đối tượng từ các biến rời (Property Shorthand)',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO8.3.2'],
      description: 'Viết hàm createProduct(name, price, category) sử dụng Property Value Shorthand để trả về đối tượng có cấu trúc { name, price, category, isAvailable: true }. Chạy thử với "Chuột máy tính", 250000, "Phụ kiện" và in đối tượng.',
      starterCode: `function createProduct(name, price, category) {
  return {
    name,
    price,
    category,
    isAvailable: true
  };
}

const newProd = createProduct("Chuột máy tính", 250000, "Phụ kiện");
console.log("Sản phẩm mới:", newProd);`,
      solutionCode: `function createProduct(name, price, category) {
  return {
    name,
    price,
    category,
    isAvailable: true
  };
}
const newProd = createProduct("Chuột máy tính", 250000, "Phụ kiện");
console.log("Sản phẩm mới:", newProd);`,
      testCases: [
        { id: 'tc-1', description: 'Tạo sản phẩm đúng shorthand', expectedOutput: 'Sản phẩm mới: { name: \'Chuột máy tính\', price: 250000, category: \'Phụ kiện\', isAvailable: true }' }
      ],
      hints: ['Dùng { name, price, category, isAvailable: true }'],
      explanation: 'Shorthand syntax làm mã nguồn tinh gọn và thể hiện tính chuyên nghiệp chuẩn ES6.'
    }
  },
  quiz: {
    id: 'quiz-8-3',
    lessonId: 'les-8-3',
    title: 'Trắc nghiệm Destructuring',
    passingScore: 70,
    questions: []
  },
  summary: [
    'Object Destructuring giúp trích xuất thuộc tính thành biến riêng biệt.',
    'Property Shorthand viết gọn { x, y } khi tên key trùng tên biến.'
  ],
  suggestedBookmarks: ['Object Destructuring & Shorthand']
};

export const LESSON_8_4: Lesson = {
  id: 'les-8-4',
  moduleId: 'mod-8',
  track: 'javascript',
  language: 'javascript',
  title: '8.4 Làm việc với Object lồng nhau và Object.keys/values/entries',
  order: 4,
  durationMinutes: 50,
  difficulty: 'Trung bình',
  prerequisites: ['Đã học cấu trúc Object', 'Hiểu phương thức duyệt mảng'],
  learningObjectives: [
    {
      id: 'LO8.4.1',
      code: 'LO8.4.1',
      title: 'Truy cập và bảo vệ đối tượng lồng nhau với Optional Chaining (?.)',
      description: 'Tránh lỗi Cannot read properties of undefined khi truy cập sâu.',
      bloomLevel: 'Apply',
      masteryPercentage: 92
    },
    {
      id: 'LO8.4.2',
      code: 'LO8.4.2',
      title: 'Làm chủ bộ ba Object.keys(), Object.values(), Object.entries()',
      description: 'Chuyển đổi Object thành mảng để duyệt và xử lý dữ liệu.',
      bloomLevel: 'Apply',
      masteryPercentage: 90
    }
  ],
  sections: [
    {
      id: 'sec-8-4-1',
      lessonId: 'les-8-4',
      order: 1,
      conceptName: 'Object lồng nhau và Optional Chaining (?.)',
      title: '1. Truy cập đối tượng lồng nhau và toán tử an toàn ?.',
      explanation: 'Một đối tượng có thể chứa đối tượng khác làm giá trị của nó. Nếu ta cố truy cập thuộc tính của một thuộc tính chưa tồn tại (undefined/null), JavaScript sẽ quăng lỗi dừng chương trình. Toán tử `?.` (Optional Chaining) sẽ kiểm tra an toàn: nếu vế trước là null/undefined, nó trả về undefined ngay mà không báo lỗi crash app.',
      syntax: 'const city = user?.address?.city;',
      codeExample: `const employee = {
  id: 12,
  name: "Thu Trang",
  contact: {
    email: "trang@company.com",
    address: {
      city: "Đà Nẵng"
    }
  }
};

// Truy cập an toàn
console.log("Thành phố:", employee.contact.address.city);

// Thuộc tính không tồn tại, dùng ?. an toàn
console.log("Số điện thoại:", employee.contact.phone?.number);`,
      lineByLineExplanation: [
        { line: 13, text: 'Truy cập bình thường qua các lớp lồng nhau.' },
        { line: 16, text: 'phone không tồn tại, phone?.number trả về undefined thay vì văng lỗi TypeError.' }
      ],
      commonMistakes: [
        'Không dùng ?. khi đọc dữ liệu trả về từ API backend, khiến giao diện bị trắng trang (crash) khi dữ liệu thiếu trường.'
      ],
      whenToUse: 'Luôn dùng khi truy cập các thuộc tính lồng sâu 2 cấp trở lên hoặc khi dữ liệu bất đồng bộ chưa tải xong.',
      whenNotToUse: 'Không lạm dụng ?. ở mọi nơi nếu chắc chắn 100% thuộc tính đó luôn luôn có mặt.',
      realWorldUseCase: 'Đọc avatar người dùng từ API: `const avatarUrl = user?.profile?.avatar?.url || "/default-avatar.png";`'
    },
    {
      id: 'sec-8-4-2',
      lessonId: 'les-8-4',
      order: 2,
      conceptName: 'Bộ ba Object.keys, Object.values, Object.entries',
      title: '2. Chuyển đổi Object thành Mảng để xử lý',
      explanation: 'Vì Object không có sẵn các hàm map/filter như Mảng, JavaScript cung cấp 3 phương thức tĩnh: `Object.keys(obj)` (mảng các key), `Object.values(obj)` (mảng các value), và `Object.entries(obj)` (mảng các cặp [key, value]).',
      syntax: 'Object.keys(obj)    // [key1, key2]\nObject.values(obj)  // [val1, val2]\nObject.entries(obj) // [[key1, val1], [key2, val2]]',
      codeExample: `const scores = {
  toan: 8.5,
  van: 7.0,
  anh: 9.0
};

console.log("Danh sách môn học:", Object.keys(scores));
console.log("Danh sách điểm:", Object.values(scores));

// Tính tổng điểm bằng Object.values kết hợp reduce
const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
console.log("Tổng điểm 3 môn:", totalScore);`,
      lineByLineExplanation: [
        { line: 7, text: 'Object.keys trả về [ "toan", "van", "anh" ].' },
        { line: 8, text: 'Object.values trả về [ 8.5, 7, 9 ].' },
        { line: 11, text: 'Áp dụng reduce tính tổng trên mảng điểm vừa trích xuất.' }
      ],
      commonMistakes: [
        'Cố gắng gọi scores.map() trực tiếp (Object không có phương thức map).'
      ],
      whenToUse: 'Dùng khi muốn đếm số lượng thuộc tính trong object (`Object.keys(obj).length`) hoặc duyệt qua key-value.',
      whenNotToUse: 'Không cần dùng nếu chỉ muốn truy cập 1 key cụ thể đã biết tên.',
      realWorldUseCase: 'Render bảng thống kê tổng hợp điểm số hoặc thông số kỹ thuật sản phẩm.'
    }
  ],
  predictOutputs: [],
  interactivePractice: {
    id: 'ip-8-4',
    title: 'Thực hành tính điểm trung bình từ Object điểm',
    description: 'Dùng Object.values để lấy danh sách điểm và tính trung bình cộng.',
    starterCode: `const subjectScores = {
  html: 9,
  css: 8,
  js: 10
};

const scoresList = Object.values(subjectScores);
const avg = scoresList.reduce((acc, cur) => acc + cur, 0) / scoresList.length;

console.log("Điểm trung bình:", avg);`,
    expectedConsoleOutput: 'Điểm trung bình: 9',
    hint: 'Dùng Object.values(subjectScores).'
  },
  exercises: {
    basic: {
      id: 'ex-8-4-1',
      lessonId: 'les-8-4',
      title: 'Bài tập Cơ bản: Đếm số lượng thuộc tính trong đối tượng',
      difficulty: 'basic',
      learningObjectiveIds: ['LO8.4.2'],
      description: 'Cho đối tượng car = { brand: "VinFast", model: "VF8", year: 2023, color: "Xanh" }. Dùng Object.keys đếm xem có bao nhiêu thuộc tính và in ra: "Số thuộc tính: [count]".',
      starterCode: `const car = { brand: "VinFast", model: "VF8", year: 2023, color: "Xanh" };

const propCount = Object.keys(car).length;
console.log("Số thuộc tính:", propCount);`,
      solutionCode: `const car = { brand: "VinFast", model: "VF8", year: 2023, color: "Xanh" };
const propCount = Object.keys(car).length;
console.log("Số thuộc tính:", propCount);`,
      testCases: [
        { id: 'tc-1', description: 'Có 4 thuộc tính', expectedOutput: 'Số thuộc tính: 4' }
      ],
      hints: ['Object.keys(car).length'],
      explanation: 'Object.keys() trả về mảng các key, lấy .length để đếm số thuộc tính.'
    },
    intermediate: {
      id: 'ex-8-4-2',
      lessonId: 'les-8-4',
      title: 'Bài tập Trung bình: Truy xuất địa chỉ an toàn với Optional Chaining',
      difficulty: 'intermediate',
      learningObjectiveIds: ['LO8.4.1'],
      description: 'Cho mảng 2 người dùng. Dùng vòng lặp for...of in ra: "[name] sống tại [city]". Nếu không có city thì in "chưa rõ".',
      starterCode: `const users = [
  { name: "Hải", address: { city: "Hà Nội" } },
  { name: "Yến" } // Không có address
];

for (const u of users) {
  const city = u.address?.city || "chưa rõ";
  console.log(\`\${u.name} sống tại \${city}\`);
}`,
      solutionCode: `const users = [
  { name: "Hải", address: { city: "Hà Nội" } },
  { name: "Yến" }
];
for (const u of users) {
  const city = u.address?.city || "chưa rõ";
  console.log(\`\${u.name} sống tại \${city}\`);
}`,
      testCases: [
        { id: 'tc-1', description: 'In người thứ nhất', expectedOutput: 'Hải sống tại Hà Nội' },
        { id: 'tc-2', description: 'In người thứ hai có fallback', expectedOutput: 'Yến sống tại chưa rõ' }
      ],
      hints: ['u.address?.city || "chưa rõ"'],
      explanation: 'Optional Chaining kết hợp toán tử || tạo giải pháp fallback an toàn 100% không lo runtime error.'
    },
    challenge: {
      id: 'ex-8-4-3',
      lessonId: 'les-8-4',
      title: 'Bài tập Thử thách: Chuyển đổi Object thành chuỗi Query String URL',
      difficulty: 'challenge',
      learningObjectiveIds: ['LO8.4.2'],
      description: 'Cho params = { page: 1, limit: 10, sort: "desc" }. Dùng Object.entries kết hợp map và join("&") để tạo chuỗi "page=1&limit=10&sort=desc". In kết quả.',
      starterCode: `const params = { page: 1, limit: 10, sort: "desc" };

const queryString = Object.entries(params)
  .map(([k, v]) => \`\${k}=\${v}\`)
  .join("&");

console.log("Query String:", queryString);`,
      solutionCode: `const params = { page: 1, limit: 10, sort: "desc" };
const queryString = Object.entries(params)
  .map(([k, v]) => \`\${k}=\${v}\`)
  .join("&");
console.log("Query String:", queryString);`,
      testCases: [
        { id: 'tc-1', description: 'Tạo query string chuẩn xác', expectedOutput: 'Query String: page=1&limit=10&sort=desc' }
      ],
      hints: ['Object.entries(params).map(([k, v]) => `${k}=${v}`).join("&")'],
      explanation: 'Đây là kỹ thuật thực tế dùng khi xây dựng thư viện HTTP client để serialize URL parameters.'
    }
  },
  quiz: {
    id: 'quiz-8-4',
    lessonId: 'les-8-4',
    title: 'Trắc nghiệm Object nâng cao',
    passingScore: 70,
    questions: []
  },
  summary: [
    'Optional Chaining (?.) bảo vệ truy xuất thuộc tính lồng nhau không bị văng lỗi.',
    'Object.keys/values/entries chuyển đổi Object thành mảng để tận dụng map/filter/reduce.'
  ],
  suggestedBookmarks: ['Optional Chaining (?.)', 'Object.entries()']
};

export const JS_MODULE_8_LESSONS: Lesson[] = [
  LESSON_8_1,
  LESSON_8_2,
  LESSON_8_3,
  LESSON_8_4
];
