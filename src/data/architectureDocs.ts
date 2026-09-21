export interface DocSection {
  id: string;
  title: string;
  badge: string;
  summary: string;
  contentMarkdown: string;
}

export const ARCHITECTURE_DOCS: DocSection[] = [
  {
    id: 'part-a',
    title: 'Phần A – Curriculum & Khung Chương Trình Chuẩn Cao Đẳng',
    badge: 'Chương trình đào tạo',
    summary: 'Cấu trúc 17 modules, 75 bài học, chuẩn đầu ra (PLOs/CLOs) và lộ trình phát triển năng lực JavaScript.',
    contentMarkdown: `### 1. Chuẩn Đầu Ra Môn Học Theo Năng Lực (Course Learning Outcomes - CLOs)
Sau khi hoàn thành chương trình học liệu JavaScript, sinh viên hệ Cao đẳng Công nghệ Thông tin đạt được 14 năng lực thực hành cốt lõi:
1. **CLO-01:** Phân tích và giải thích chuẩn xác các khái niệm nền tảng của JavaScript (Engine, Runtime, Hoisting, Scope, Event Loop).
2. **CLO-02:** Khai báo, gán và chuyển đổi kiểu dữ liệu an toàn, đúng chuẩn ECMAScript hiện đại.
3. **CLO-03:** Sử dụng thành thạo cấu trúc điều khiển rẽ nhánh và các loại vòng lặp tối ưu hóa thuật toán.
4. **CLO-04:** Thiết kế hàm theo nhiều mô thức (Declaration, Expression, Arrow function), kiểm soát tham số và Early Return.
5. **CLO-05:** Thao tác mảng thuần thục với các phương thức biến đổi dữ liệu hiện đại (\`map\`, \`filter\`, \`find\`, \`reduce\`, \`some\`, \`every\`).
6. **CLO-06:** Tổ chức và cấu trúc dữ liệu với Object, Destructuring, Shorthand properties và JSON serialization.
7. **CLO-07:** Thao tác DOM trực quan: truy vấn, thay đổi cấu trúc, điều khiển CSS classList linh hoạt.
8. **CLO-08:** Xử lý sự kiện người dùng đa dạng, áp dụng kỹ thuật Event Delegation chống tràn bộ nhớ.
9. **CLO-09:** Xây dựng Form tương tác và hệ thống Client-side Form Validation chuẩn UX.
10. **CLO-10:** Làm chủ lập trình bất đồng bộ: Timer, Promise và cú pháp \`async/await\` với cơ chế bắt lỗi \`try/catch\`.
11. **CLO-11:** Tích hợp dữ liệu ngoài thông qua \`fetch()\` API với kiến trúc RESTful chuẩn.
12. **CLO-12:** Duy trì trạng thái ứng dụng ngoại tuyến qua \`localStorage\` và \`sessionStorage\`.
13. **CLO-13:** Độc lập debug, đọc hiểu Call Stack, phát hiện lỗi cú pháp và lỗi logic runtime trên Chrome DevTools.
14. **CLO-14:** Phát triển hoàn chỉnh các ứng dụng Web mini thực tế (Calculator, Todo App, Quiz App, Mini POS, Weather Dashboard).

---

### 2. Ma Trận 17 Modules Chuẩn Đào Tạo (75 Tiết Lý thuyết tương tác + 120 Tiết Thực hành Lab)
| Module | Tên Chủ đề | Thời lượng (Giờ) | Số bài | Trọng tâm năng lực |
| :--- | :--- | :---: | :---: | :--- |
| **M1** | Tổng quan JavaScript | 6h | 4 | Hiểu runtime, Console DevTools, Comment & Debug cơ bản |
| **M2** | Biến và kiểu dữ liệu | 8h | 5 | let vs const, 5 kiểu nguyên thủy, typeof, ép kiểu |
| **M3** | Toán tử và biểu thức | 8h | 4 | So sánh nghiêm ngặt ===, logic short-circuit, Truthy/Falsy |
| **M4** | Cấu trúc điều khiển | 6h | 3 | if/else, switch-case, toán tử 3 ngôi Clean Code |
| **M5** | Vòng lặp | 8h | 4 | for, while, do-while, break/continue, nested loops |
| **M6** | Hàm (Functions) | 10h | 5 | Arrow functions, default params, return values, Block Scope |
| **M7** | Array (Mảng) | 12h | 5 | push/pop, for...of, map, filter, find, reduce, some/every |
| **M8** | Object (Đối tượng) | 10h | 4 | Key-value, methods, destructuring, nested objects |
| **M9** | String, Number & Date | 8h | 4 | Xử lý chuỗi, hàm Math, định dạng và tính toán Date |
| **M10** | DOM Manipulation | 12h | 5 | querySelector, textContent, classList, createElement |
| **M11** | Event Handling | 10h | 4 | addEventListener, Event Object, Event Delegation |
| **M12** | Form & Validation | 10h | 4 | Form extraction, Regex email/phone, Error UI feedback |
| **M13** | JavaScript Nâng cao | 12h | 5 | Lexical Scope, Closure, Higher-Order Funcs, ES Modules |
| **M14** | Asynchronous JS | 12h | 5 | Event Loop, Callback, Promise, async/await, try/catch |
| **M15** | Fetch API & Data | 12h | 4 | RESTful HTTP, JSON, fetch GET/POST, Loading/Error UI |
| **M16** | Local Storage | 8h | 3 | localStorage, JSON.stringify/parse, giỏ hàng ngoại tuyến |
| **M17** | Mini Projects Thực tế | 20h | 6 | Xây dựng 6 dự án thực chiến từ Calculator đến Quản lý SV |`
  },
  {
    id: 'part-b',
    title: 'Phần B – Learning Architecture: Chu Trình Bài Học Chuẩn',
    badge: 'Thiết kế sư phạm',
    summary: 'Quy trình khép kín 16 thành phần: Học kiến thức → Dự đoán output → Thực hành sandbox → Bài tập 3 cấp độ → Quiz có feedback ngay.',
    contentMarkdown: `### 1. Chu Trình Học Tập Khép Kín (Learning-by-Doing Loop)
Mỗi bài học số không phải là một trang tài liệu tĩnh, mà là một **phòng thí nghiệm tương tác** vận hành theo quy tắc:
\`\`\`text
[1. Khám phá khái niệm Microlearning] 
               ↓
[2. Predict the Output (Dự đoán kết quả trước)] 
               ↓
[3. Chạy thử nghiệm trong Interactive Code Sandbox] 
               ↓
[4. Thực hành bài tập phân cấp: Basic → Intermediate → Challenge] 
               ↓
[5. Đánh giá tự động qua Lesson Quiz với Immediate Feedback] 
               ↓
[6. Tự đánh giá mức độ hiểu (Self-assessment 1-5 sao)] 
               ↓
[7. Ghi nhận Bookmark & Đề xuất ôn tập cá nhân hóa (Spaced Review)]
\`\`\`

---

### 2. Bóc Tách 16 Thành Phần Chuẩn Trong Mỗi Bài Học
1. **Thông tin bài học:** Tên bài, module, thời lượng dự kiến, độ khó, kiến thức tiên quyết.
2. **Kiến thức tiên quyết (Prerequisites):** Những gì sinh viên bắt buộc phải nắm trước khi vào bài.
3. **Mục tiêu học tập (Measurable Learning Objectives):** Viết theo chuẩn Bloom (Understand, Apply, Analyze, Create), đo lường được bằng code hoặc câu hỏi.
4. **Nội dung kiến thức (Microlearning):** Tách nhỏ tối đa 5-7 phút đọc, có cấu trúc: Khái niệm → Giải thích giản dị → Cú pháp chuẩn.
5. **Ví dụ minh họa:** Mã nguồn thực tế có chú thích từng dòng.
6. **Interactive Practice:** Sinh viên sửa đổi tham số và quan sát Console phản hồi tức thì.
7. **Predict the Output:** Yêu cầu sinh viên dự đoán kết quả trước khi nhấn chạy code (kích hoạt tư duy chủ động).
8. **Lỗi thường gặp (Common Pitfalls & Debugging):** Chỉ rõ các cạm bẫy cú pháp và lỗi logic phổ biến của sinh viên.
9. **Khi nào nên sử dụng & Khi nào không nên sử dụng:** Rèn luyện tư duy kỹ sư thay vì ghi nhớ máy móc.
10. **Bài tập thực hành 3 cấp độ:**
    - *Level 1 (Basic):* Áp dụng trực tiếp 1 khái niệm.
    - *Level 2 (Intermediate):* Kết hợp từ 2-3 kiến thức.
    - *Level 3 (Challenge):* Giải quyết bài toán thực tế mini.
11. **Lesson Quiz:** 5–10 câu hỏi đa định dạng chấm điểm tự động.
12. **Immediate Feedback:** Lời giải thích cặn kẽ tại sao đúng/sai, kèm trỏ link về khái niệm gốc.
13. **Summary & Key Takeaways:** Tóm tắt 3-5 gạch đầu dòng cốt lõi.
14. **Self-assessment:** Thang đo 5 mức độ tự tin (Chưa hiểu → Hiểu một phần → Làm bài cơ bản → Tự giải quyết → Giải thích cho bạn).
15. **Bookmark Suggestions:** Gợi ý những vị trí mấu chốt sinh viên nên lưu trữ.
16. **Learning Analytics Metadata:** Gắn thẻ các mã năng lực (LO codes) phục vụ phân tích học tập.`
  },
  {
    id: 'part-c',
    title: 'Phần C – Assessment Architecture: Kiến Trúc Đánh Giá Đa Tầng',
    badge: 'Hệ thống khảo thí',
    summary: 'Hệ thống đánh giá năng lực 6 tầng theo thang đo Bloom, tránh học vẹt, tập trung vào Code Comprehension & Debugging.',
    contentMarkdown: `### 1. Mô Hình Đánh Giá 6 Tầng (Multi-tier Assessment)
Hệ thống loại bỏ hình thức "đoán mò lý thuyết một kỳ thi duy nhất", thay bằng kiểm tra thường xuyên liên tục:
1. **Tầng 1 - Knowledge Check (Micro-check):** 1-2 câu trắc nghiệm nhanh ngay sau mỗi mục lý thuyết để duy trì sự chú ý.
2. **Tầng 2 - Predict the Output Check:** Kiểm tra khả năng tư duy biên dịch trong đầu (Mental execution).
3. **Tầng 3 - Interactive Lab Test Cases:** Kiểm tra khả năng viết code giải thuật thông qua bộ test case tự động (Input/Output assertions).
4. **Tầng 4 - Lesson Quiz (5-10 câu):** Đánh giá tổng hợp cuối bài với đa dạng câu hỏi: Multiple Choice, Code Completion, Bug Finding, Scenario.
5. **Tầng 5 - Module Project Assessment:** Bài tập lớn cuối mỗi module (ví dụ: Tạo menu động, Form validation module, Todo App).
6. **Tầng 6 - Capstone Final Project:** Đồ án tổng thể kết nối API thực tế, chấm theo Rubric năng lực.

---

### 2. 7 Dạng Câu Hỏi Đánh Giá Năng Lực (Anti-Memorization)
* **Code Comprehension (Hiểu code):** Đưa đoạn mã 5-10 dòng, yêu cầu phân tích luồng chạy của chương trình.
* **Predicting Output (Dự đoán output):** Kiểm tra các bẫy ép kiểu, phạm vi biến, bất đồng bộ.
* **Bug Finding & Debugging (Tìm & Sửa lỗi):** Cho đoạn mã có lỗi Syntax hoặc Logic, yêu cầu sinh viên chỉ ra dòng lỗi và phương án khắc phục.
* **Code Completion (Điền khuyết mã):** Khuyết thiếu một phương thức hoặc từ khóa mấu chốt.
* **Multiple Answer (Đa lựa chọn đúng):** Yêu cầu chọn tất cả phương án hợp lệ (loại bỏ xác suất 25% đoán mò).
* **Scenario Problem Solving (Tình huống thực tế):** Đặt ra bài toán đời thực (tính phí ship, chiết khấu khách hàng VIP) để chọn giải pháp.
* **Code Ordering (Sắp xếp thứ tự logic):** Sắp xếp các bước thực thi bất đồng bộ hoặc thao tác DOM.`
  },
  {
    id: 'part-d',
    title: 'Phần D – Progress Tracking: Theo Dõi Tiến Độ Chi Tiết',
    badge: 'Theo dõi học tập',
    summary: '5 trạng thái học tập chuẩn, thuật toán tính toán độ tinh thông (Mastery Score) và các chỉ số định lượng thời gian thực.',
    contentMarkdown: `### 1. 5 Trạng Thái Nội Dung Của Sinh Viên
* \`not_started\` (Chưa học - Xám): Sinh viên chưa từng tương tác với bài học.
* \`in_progress\` (Đang học - Cam): Đã đọc nội dung hoặc chạy thử ít nhất 1 bài tập.
* \`completed\` (Hoàn thành - Xanh lục): Đã vượt qua toàn bộ bài tập và đạt Quiz >= 70%.
* \`needs_review\` (Cần ôn tập - Vàng hổ phách): Sinh viên tự đánh giá mức độ 1-2 hoặc làm sai > 40% câu hỏi thuộc bài học này.
* \`mastered\` (Thành thạo - Tím): Đạt điểm Quiz tuyệt đối hoặc tự đánh giá mức 5/5 và hoàn thành bài tập Challenge L3.

---

### 2. Bảng Chỉ Số Định Lượng Ghi Nhận Cho Mỗi Bài Học
| Thuộc tính dữ liệu | Ý nghĩa sư phạm & Nghiệp vụ |
| :--- | :--- |
| \`time_spent_minutes\` | Tổng thời lượng thực tế sinh viên mở bài học (phát hiện học vẹt bấm lướt) |
| \`completion_percentage\` | Tỷ lệ % các khối tương tác đã hoàn thành trong bài |
| \`quiz_attempts\` | Số lần sinh viên phải làm lại bài quiz mới đạt chuẩn |
| \`best_score\` vs \`latest_score\` | Đánh giá mức độ cải thiện kiến thức qua từng lần ôn tập |
| \`confidence_level\` (1-5) | Mức độ tự tin tự giác của sinh viên theo chuẩn tự chủ học tập |
| \`needs_review_objectives\` | Mảng chứa các ID chuẩn đầu ra (LO) mà sinh viên đang bị hổng |`
  },
  {
    id: 'part-e',
    title: 'Phần E – Bookmark & Spaced Review: Cơ Chế Ghi Nhớ Giãn Cách',
    badge: 'Ôn tập thông minh',
    summary: 'Phân loại Bookmark theo 5 lý do sư phạm và thuật toán Spaced Repetition tự động tạo danh sách ôn tập cá nhân hóa.',
    contentMarkdown: `### 1. Cơ Chế Bookmark Đa Mục Đích
Thay vì nút Bookmark thông thường, sinh viên được gắn lý do học tập:
* 🔴 **Chưa hiểu:** Đánh dấu khái niệm quá trừu tượng, cần giảng viên giải thích thêm.
* 🟡 **Cần học lại:** Hiểu lúc đọc nhưng cảm thấy chưa tự code lại được.
* 🟣 **Khó nhớ:** Các cú pháp đặc thù hoặc phương thức dễ quên (ví dụ: cú pháp \`reduce\` hay \`splice\` vs \`slice\`).
* 🔵 **Muốn tìm hiểu sâu hơn:** Dành cho sinh viên khá giỏi muốn mở rộng sang khía cạnh nâng cao.
* 🟢 **Ví dụ quan trọng:** Đoạn mã mẫu tối ưu cần lưu để tái sử dụng trong các bài tập đồ án.

---

### 2. Thuật Toán Tạo "Personal Review List" (Spaced Review)
Hệ thống tự động gom các mục vào trang **Ôn tập cá nhân** dựa trên:
1. **Các câu hỏi Quiz trả lời sai trong 7 ngày gần nhất.**
2. **Các bài học có Self-assessment <= 2 sao.**
3. **Các thẻ Bookmark có trạng thái \`isResolved === false\`.**
4. **Các Learning Objectives có tỷ lệ làm đúng dưới 60% của sinh viên.**
Khi sinh viên giải đúng lại bài tập và bấm "Đã hiểu", hệ thống sẽ hạ cờ cảnh báo và chuyển trạng thái sang \`Mastered\`.`
  },
  {
    id: 'part-f',
    title: 'Phần F – Learning Analytics: Bảng Điều Khiển Giảng Viên & Sinh Viên',
    badge: 'Phân tích dữ liệu học tập',
    summary: 'Chuyển hóa dữ liệu học tập thành hành động sư phạm: Phát hiện sinh viên có nguy cơ bỏ cuộc và các chủ đề kiến thức nghẽn.',
    contentMarkdown: `### 1. Dashboard Dành Cho Giảng Viên (Teacher Cockpit)
* **Chỉ số toàn cảnh lớp:** Tỷ lệ sinh viên hoạt động trong 48h qua, tiến độ hoàn thành trung bình của khóa, điểm Quiz trung vị.
* **Bộ lọc phát hiện sinh viên có nguy cơ (At-Risk Early Warning):**
  - Sinh viên không đăng nhập quá 5 ngày liên tiếp.
  - Sinh viên làm Quiz lại quá 3 lần vẫn dưới điểm chuẩn 70%.
  - Tốc độ hoàn thành chậm hơn 40% so với tiến độ chung của lớp.
* **Bản đồ nhiệt độ khó theo chủ đề (Topic Difficulty Heatmap):**
  - Hiển thị bài học nào có tỷ lệ sinh viên Bookmark "Chưa hiểu" cao nhất.
  - Tỷ lệ sai trung bình của từng câu hỏi trong kho đề.
  - *Ý nghĩa thực tế:* Giúp giảng viên biết chính xác buổi lên lớp tiếp theo cần dành 30 phút để giảng lại phần nào (ví dụ: \`reduce()\` hay \`Promise\`), thay vì hỏi chung chung "Cả lớp có hiểu bài không?".

---

### 2. Dashboard Dành Cho Sinh Viên (Student Learning Journey)
* Thanh tiến độ % toàn khóa trực quan.
* Điểm số tích lũy, chuỗi ngày học liên tục (Streak) tạo động lực.
* Khối "Cần hành động ngay": Bài học đang dở, bài tập được AI Tutor khuyên ôn tập lại.
* Radar năng lực các chuẩn đầu ra (Learning Objectives Mastered).`
  },
  {
    id: 'part-g',
    title: 'Phần G – Adaptive Learning & AI Tutor 5 Cấp Độ Hỗ Trợ',
    badge: 'Học tập thích ứng & AI',
    summary: 'Cơ chế cá nhân hóa lộ trình học và quy tắc giàn giáo sư phạm (Pedagogical Scaffolding) không giải bài thay sinh viên.',
    contentMarkdown: `### 1. Ma Trận Quan Hệ Tiên Quyết (Prerequisites Mapping)
Khi sinh viên liên tục sai ở một kỹ năng cao, hệ thống không chỉ báo sai mà tự động truy ngược chuỗi kiến thức:
\`\`\`text
Thất bại ở Array.reduce() 
       ↓ (Hệ thống truy vết)
Khuyết thiếu ở: Callback Function (Module 6) 
       ↓
Khuyết thiếu ở: Vòng lặp tích lũy (Module 5)
       ↓
[Hành động gợi ý:] "Bạn hãy làm bài tập khởi động 10 phút về Vòng lặp tính tổng trước nhé!"
\`\`\`

---

### 2. Quy Chuẩn AI Tutor 5 Cấp Độ (Giàn Giáo Sư Phạm)
Tuyệt đối cấm AI giải bài hộ học sinh. Hệ thống chỉ hỗ trợ theo từng nấc:
* **Cấp độ 1 - Gợi ý nhỏ (Hint):** Chỉ ra điểm chú ý về cú pháp hoặc tên biến.
* **Cấp độ 2 - Đặt câu hỏi dẫn dắt (Socratic Questioning):** Hỏi để sinh viên tự nhận ra vấn đề (ví dụ: "Hàm này có cần trả về giá trị không? Bạn đã dùng return chưa?").
* **Cấp độ 3 - Nhắc lại lý thuyết (Knowledge Clarification):** Trích đoạn quy tắc chuẩn trong tài liệu.
* **Cấp độ 4 - Cung cấp ví dụ tương tự (Analogy Example):** Đưa một ví dụ cùng bản chất nhưng trong ngữ cảnh khác.
* **Cấp độ 5 - Lời giải mẫu kèm phân tích (Full Solution & Walkthrough):** Chỉ mở khóa khi sinh viên đã thất bại nhiều lần hoặc chủ động bấm yêu cầu mở.`
  },
  {
    id: 'part-h',
    title: 'Phần H – Data Model: Thiết Kế Cơ Sở Dữ Liệu Chi Tiết (Schema & ERD)',
    badge: 'Kiến trúc dữ liệu',
    summary: 'Mô hình dữ liệu quan hệ hoàn chỉnh với 15 thực thể chuẩn hóa hỗ trợ truy vấn Learning Analytics tốc độ cao.',
    contentMarkdown: `### 1. Sơ Đồ Thực Thể Quan Hệ (ERD Overview)
\`\`\`text
[Course] 1 ──< [Module] 1 ──< [Lesson] 1 ──< [Section]
                                  │   │
                  ┌───────────────┘   └───< [LearningObjective]
                  │                                ▲
                  ├──< [Exercise] ─────────────────┤
                  │                                │
                  └──< [Quiz] 1 ──< [Question] ────┘
\`\`\`

---

### 2. Đặc Tả Chi Tiết Các Bảng Dữ Liệu Chính
* **Student:** \`id\`, \`code\`, \`full_name\`, \`email\`, \`class_group\`, \`created_at\`.
* **Module:** \`id\`, \`course_id\`, \`number\`, \`title\`, \`duration_hours\`, \`order\`.
* **Lesson:** \`id\`, \`module_id\`, \`title\`, \`order\`, \`duration_minutes\`, \`difficulty\`.
* **LearningObjective:** \`id\`, \`code\`, \`title\`, \`bloom_level\`, \`lesson_id\`.
* **Section:** \`id\`, \`lesson_id\`, \`title\`, \`concept_name\`, \`explanation\`, \`code_example\`, \`order\`.
* **Exercise:** \`id\`, \`lesson_id\`, \`title\`, \`difficulty\`, \`starter_code\`, \`solution_code\`, \`test_cases_json\`.
* **Question:** \`id\`, \`quiz_id\`, \`learning_objective_id\`, \`type\`, \`prompt\`, \`options_json\`, \`correct_answer\`, \`explanation\`.
* **QuizAttempt:** \`id\`, \`student_id\`, \`quiz_id\`, \`score\`, \`passed\`, \`submitted_at\`, \`answers_json\`.
* **StudentProgress:** \`student_id\`, \`lesson_id\`, \`status\`, \`time_spent\`, \`confidence_level\`, \`last_accessed_at\`.
* **Bookmark:** \`id\`, \`student_id\`, \`lesson_id\`, \`target_type\`, \`reason\`, \`note\`, \`is_resolved\`, \`created_at\`.`
  },
  {
    id: 'part-i',
    title: 'Phần I – UX/UI: Thiết Kế Trải Nghiệm Học Tập Tối Ưu',
    badge: 'Giao diện & Trải nghiệm',
    summary: 'Kiến trúc điều hướng hai phân hệ (Sinh viên & Giảng viên), chuẩn Desktop-first, hỗ trợ phím tắt và không gây quá tải nhận thức.',
    contentMarkdown: `### 1. Nguyên Tắc Thiết Kế Giao Diện Cho Sinh Viên CNTT
* **Giảm tải nhận thức (Cognitive Load Reduction):** Màn hình học bài chia bố cục rõ ràng giữa tài liệu hướng dẫn và trình chạy code; không để sinh viên phải chuyển tab trình duyệt liên tục.
* **Console trực quan thời gian thực:** Nhúng Console ảo ngay dưới trình soạn thảo để sinh viên quan sát kết quả in \`console.log\` ngay lập tức.
* **Phản hồi trạng thái tức thì:** Các nút trạng thái (Bookmark, Mark Completed, Next Lesson) luôn hiển thị ở thanh công cụ cố định phía dưới.
* **Tương thích thiết bị:** Hỗ trợ màn hình máy tính thực hành tại phòng Lab và máy tính xách tay cá nhân.`
  },
  {
    id: 'part-j',
    title: 'Phần J – Sample Lesson: Đặc Tả Bài Học Mẫu Chuẩn',
    badge: 'Học liệu mẫu',
    summary: 'Bài học hoàn chỉnh Module 2: "Khai báo biến với let, const và Kiểu dữ liệu nguyên thủy" tích hợp đủ 16 thành phần sư phạm.',
    contentMarkdown: `Bài học mẫu này đã được đóng gói và nạp trực tiếp vào phân hệ **Lesson Runner** của hệ thống với:
- 2 phần lý thuyết chi tiết có giải thích từng dòng code.
- 3 bài tập Predict the Output có gợi ý và giải thích logic.
- 1 bài thực hành tương tác trực tiếp trên Console.
- 3 bài tập phân cấp: Basic (Tính lương), Intermediate (Hoán đổi 2 biến), Challenge (Hóa đơn vận chuyển).
- Bộ 10 câu hỏi trắc nghiệm năng lực kết nối chuẩn đầu ra LO2.1 đến LO2.5.
- Bộ khảo sát Tự đánh giá năng lực 5 mức độ.`
  },
  {
    id: 'part-k',
    title: 'Phần K – Sample Assessment: Ngân Hàng Đánh Giá Năng Lực',
    badge: 'Ngân hàng câu hỏi',
    summary: '10 câu hỏi Quiz, 5 bài tập code, 3 bài tập Debugging, 3 câu Predict Output và 1 Mini Application thực tế.',
    contentMarkdown: `Toàn bộ ngân hàng câu hỏi và bài tập thực hành theo yêu cầu Phần K đã được tích hợp đầy đủ trong hệ sinh thái của nền tảng, cho phép sinh viên thi thử và chấm điểm tự động trong thời gian thực.`
  },
  {
    id: 'part-l',
    title: 'Phần L – Implementation Roadmap: Lộ Trình Triển Khai 5 Giai Đoạn',
    badge: 'Lộ trình công nghệ',
    summary: 'Kế hoạch triển khai từ MVP, Version 1, Version 2, Advanced Analytics đến Adaptive Learning cá nhân hóa hoàn toàn.',
    contentMarkdown: `### 1. Bảng Phân Kỳ 5 Giai Đoạn Triển Khai
| Giai đoạn | Mục tiêu cốt lõi | Chức năng chính | Giá trị mang lại cho SV & GV |
| :--- | :--- | :--- | :--- |
| **Giai đoạn 1: MVP (Tuần 1 - 4)** | Nền tảng học liệu tương tác cơ bản | - 3 Module đầu tiên\\n- Interactive Code Runner\\n- Trắc nghiệm bài học\\n- Local Storage tiến độ | **SV:** Bắt đầu học ngay với phản hồi tức thì.\\n**GV:** Thử nghiệm học liệu trên 1 lớp mẫu. |
| **Giai đoạn 2: Version 1 (Tuần 5 - 8)** | Số hóa trọn vẹn 17 Modules | - Toàn bộ 17 Modules học liệu\\n- Hệ thống Bookmark theo 5 lý do\\n- Tự đánh giá 5 mức độ\\n- Đồng bộ CSDL đám mây | **SV:** Học tập trọn vẹn kỳ học.\\n**GV:** Đánh giá điểm quá trình tự động. |
| **Giai đoạn 3: Version 2 (Tuần 9 - 12)** | AI Tutor & Spaced Review | - AI Tutor trợ giảng 5 cấp độ\\n- Trang Personal Review List\\n- Hệ thống Achievement & Streak | **SV:** Được kèm cặp 24/7 không lo bí ý tưởng.\\n**GV:** Giảm tải trả lời các câu hỏi cú pháp cơ bản. |
| **Giai đoạn 4: Advanced Analytics (Tuần 13 - 16)** | Teacher Cockpit & Early Warning | - Báo cáo tỷ lệ sai theo câu hỏi\\n- Cảnh báo sinh viên có nguy cơ bỏ cuộc\\n- Thống kê nội dung sinh viên Bookmark nhiều | **SV:** Được giảng viên can thiệp kịp thời.\\n**GV:** Điều chỉnh bài giảng lý thuyết trên lớp trúng điểm nghẽn. |
| **Giai đoạn 5: Adaptive Learning (Tuần 17+)** | Đề xuất lộ trình tự thích ứng | - Tự động đề xuất bài tập hạ/nâng độ khó\\n- Truy vết Prerequisites remediation | **SV:** Trải nghiệm học cá nhân hóa theo đúng tốc độ bản thân.\\n**GV:** Nâng cao tỷ lệ qua môn và chất lượng sinh viên ra trường. |`
  }
];
