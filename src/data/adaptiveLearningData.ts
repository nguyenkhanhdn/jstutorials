import { 
  PrerequisiteChain, 
  StudentAdaptiveProfile, 
  AdaptiveSimulationInput, 
  AdaptiveSimulationResult,
  AdaptiveTrack 
} from '../types';

export const PREREQUISITE_CHAINS: PrerequisiteChain[] = [
  {
    id: 'chain-reduce',
    targetSkillTitle: 'Thuật toán tích lũy và chuyển đổi mảng với Array.prototype.reduce()',
    targetSkillCode: 'LO7.2',
    module: 'Module 7 – Mảng nâng cao',
    description: 'Sinh viên gặp khó khăn khi hiểu giá trị tích lũy (accumulator), giá trị khởi tạo (initialValue), và cách trả về kết quả sau mỗi vòng lặp.',
    rootCauseAnalysis: 'Sinh viên chưa thông thạo mô hình tư duy Accumulator Pattern ở vòng lặp for truyền thống, dẫn đến việc biến reduce thành hộp đen khó hiểu.',
    pedagogicalPrescription: 'Tổ chức bài tập 10 phút: Bắt đầu từ viết hàm tính tổng bằng for-loop với biến accumulator tường minh, sau đó đối chiếu dòng-dòng sang reduce().',
    nodes: [
      {
        id: 'node-red-1',
        code: 'LO2.1',
        title: 'Khai báo biến & Toán tử gán tích lũy (+=, *=)',
        module: 'Module 2 & 3',
        depthLevel: 1,
        classMasteryRate: 94,
        status: 'mastered',
        diagnosticQuestion: 'Biểu thức `sum += item` tương đương với điều gì và vì sao cần khởi tạo `sum = 0`?',
        remedyExerciseId: 'ex-2-1',
        remedySummary: 'Bài tập ôn tập 3 phút về gán giá trị và kiểm tra NaN.',
        dependencies: []
      },
      {
        id: 'node-red-2',
        code: 'LO5.2',
        title: 'Mô thức tích lũy qua vòng lặp (Accumulator Pattern in For Loop)',
        module: 'Module 5 – Vòng lặp',
        depthLevel: 2,
        classMasteryRate: 64,
        status: 'critical_gap',
        diagnosticQuestion: 'Hãy viết vòng lặp for duyệt mảng số và tính tổng các phần tử chẵn vào biến acc.',
        remedyExerciseId: 'ex-5-2',
        remedySummary: 'Viết lại thuật toán tích lũy bằng for...of với bảng trace từng bước trước khi dùng hàm bậc cao.',
        dependencies: ['node-red-1']
      },
      {
        id: 'node-red-3',
        code: 'LO6.4',
        title: 'Callback Functions & Return Value Contract',
        module: 'Module 6 – Hàm (Functions)',
        depthLevel: 2,
        classMasteryRate: 72,
        status: 'learning',
        diagnosticQuestion: 'Điều gì xảy ra nếu hàm callback trong reduce() quên viết lệnh `return`?',
        remedyExerciseId: 'ex-6-4',
        remedySummary: 'Thực hành phân tích lỗi `accumulator is undefined` trong callback.',
        dependencies: ['node-red-1']
      },
      {
        id: 'node-red-4',
        code: 'LO7.2',
        title: 'Thành thạo Array.reduce() giải quyết bài toán gom nhóm (Group By)',
        module: 'Module 7 – Mảng',
        depthLevel: 3,
        classMasteryRate: 47,
        status: 'critical_gap',
        diagnosticQuestion: 'Cho danh sách sinh viên, hãy dùng reduce() để gom nhóm theo quê quán thành 1 object.',
        remedyExerciseId: 'ex-7-2',
        remedySummary: 'Bài tập Challenge L3 có test case tự động gom nhóm dữ liệu đơn hàng thương mại điện tử.',
        dependencies: ['node-red-2', 'node-red-3']
      }
    ]
  },
  {
    id: 'chain-async',
    targetSkillTitle: 'Lập trình bất đồng bộ: async/await và xử lý lỗi với try/catch',
    targetSkillCode: 'LO14.1',
    module: 'Module 14 – Asynchronous JavaScript',
    description: 'Sinh viên viết code bất đồng bộ nhưng tư duy theo luồng tuần tự (blocking), gây lỗi undefined khi đọc dữ liệu API chưa tải xong.',
    rootCauseAnalysis: 'Chưa nắm vững cách Event Loop chuyển đổi giữa Call Stack, Web API và Microtask Queue.',
    pedagogicalPrescription: 'Sử dụng sơ đồ trực quan hóa Call Stack và vòng lặp Event Loop; cấm dùng callback lồng nhau mà bắt buộc chuẩn hóa qua Promise.',
    nodes: [
      {
        id: 'node-async-1',
        code: 'LO6.1',
        title: 'Call Stack & Cơ chế thực thi đồng bộ từng dòng lệnh',
        module: 'Module 6 – Hàm',
        depthLevel: 1,
        classMasteryRate: 88,
        status: 'mastered',
        diagnosticQuestion: 'Call Stack hoạt động theo nguyên lý LIFO như thế nào khi các hàm lồng nhau được gọi?',
        remedyExerciseId: 'ex-6-1',
        remedySummary: 'Vẽ sơ đồ Call Stack khi gọi hàm lồng 3 cấp.',
        dependencies: []
      },
      {
        id: 'node-async-2',
        code: 'LO14.0',
        title: 'Event Loop & Hàng đợi công việc (Microtask vs Macrotask)',
        module: 'Module 14 – Async',
        depthLevel: 2,
        classMasteryRate: 58,
        status: 'critical_gap',
        diagnosticQuestion: 'Dự đoán thứ tự log của: `console.log(1); setTimeout(..., 0); Promise.resolve().then(...); console.log(4);`',
        remedyExerciseId: 'ex-14-0',
        remedySummary: 'Bộ 4 câu hỏi dự đoán Mental Execution thứ tự chạy Event Loop.',
        dependencies: ['node-async-1']
      },
      {
        id: 'node-async-3',
        code: 'LO14.2',
        title: 'Khởi tạo và xâu chuỗi Promise (Promise Chaining)',
        module: 'Module 14 – Async',
        depthLevel: 2,
        classMasteryRate: 66,
        status: 'learning',
        diagnosticQuestion: 'Tại sao cần `return` một Promise mới bên trong khối `.then()` để tránh hiện tượng Callback Hell?',
        remedyExerciseId: 'ex-14-2',
        remedySummary: 'Chuyển đổi đoạn mã callback 3 tầng sang Promise chain phẳng.',
        dependencies: ['node-async-2']
      },
      {
        id: 'node-async-4',
        code: 'LO14.1',
        title: 'Cú pháp async/await & Try/Catch Error Boundary',
        module: 'Module 14 – Async',
        depthLevel: 3,
        classMasteryRate: 52,
        status: 'critical_gap',
        diagnosticQuestion: 'Viết hàm `fetchUserProfile(id)` xử lý cả lỗi mạng (Network Error) lẫn mã phản hồi 404.',
        remedyExerciseId: 'ex-14-1',
        remedySummary: 'Xây dựng module fetch dữ liệu có trạng thái Loading, Success, Error UI.',
        dependencies: ['node-async-3']
      }
    ]
  },
  {
    id: 'chain-dom',
    targetSkillTitle: 'Ủy nhiệm sự kiện (Event Delegation) với closest() và dataset',
    targetSkillCode: 'LO11.1',
    module: 'Module 11 – DOM & Events',
    description: 'Sinh viên gắn addEventListener trực tiếp vào hàng trăm phần tử con sinh ra động, làm chậm trình duyệt và mất sự kiện khi render lại.',
    rootCauseAnalysis: 'Không hiểu cơ chế nổi bọt sự kiện (Event Bubbling) từ target element lên thẻ cha.',
    pedagogicalPrescription: 'Thực hành bài toán bảng quản lý sinh viên có chức năng xóa hàng: Chỉ gán 1 listener duy nhất trên `<tbody>` và dùng `e.target.closest()`.',
    nodes: [
      {
        id: 'node-dom-1',
        code: 'LO10.1',
        title: 'Truy vấn phần tử DOM với querySelector & classList',
        module: 'Module 10 – DOM',
        depthLevel: 1,
        classMasteryRate: 91,
        status: 'mastered',
        diagnosticQuestion: 'Sự khác biệt giữa `querySelector` và `querySelectorAll` là gì?',
        remedyExerciseId: 'ex-10-1',
        remedySummary: 'Luyện tập các cú pháp CSS Selector nâng cao.',
        dependencies: []
      },
      {
        id: 'node-dom-2',
        code: 'LO11.2',
        title: 'Cơ chế nổi bọt sự kiện (Event Bubbling & e.target vs e.currentTarget)',
        module: 'Module 11 – Events',
        depthLevel: 2,
        classMasteryRate: 70,
        status: 'learning',
        diagnosticQuestion: 'Khi người dùng click vào thẻ `<span>` nằm trong `<button>`, `e.target` và `e.currentTarget` là gì?',
        remedyExerciseId: 'ex-11-2',
        remedySummary: 'Console log chi tiết đường đi của event qua các thẻ lồng nhau.',
        dependencies: ['node-dom-1']
      },
      {
        id: 'node-dom-3',
        code: 'LO11.1',
        title: 'Event Delegation hoàn chỉnh cho Dynamic List Items',
        module: 'Module 11 – Events',
        depthLevel: 3,
        classMasteryRate: 68,
        status: 'learning',
        diagnosticQuestion: 'Làm thế nào để bắt sự kiện click nút Xóa trên các item thêm mới vào danh sách mà không gọi lại addEventListener?',
        remedyExerciseId: 'ex-11-1',
        remedySummary: 'Tạo giỏ hàng mini thêm/xóa sản phẩm chỉ với 1 listener trên phần tử cha.',
        dependencies: ['node-dom-2']
      }
    ]
  }
];

export const MOCK_STUDENT_ADAPTIVE_PROFILES: StudentAdaptiveProfile[] = [
  {
    id: 'ad-sv-01',
    studentId: 'sv-01',
    studentName: 'Nguyễn Văn An',
    studentCode: 'PS25101',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
    currentTrack: 'accelerated',
    cognitiveLoad: 'optimal',
    autonomyIndex: 92,
    scaffoldingLevelFrequency: { level1: 12, level2: 8, level3: 2, level4: 1, level5: 0 },
    recentAttemptsCount: 1,
    recentSuccessRate: 96,
    identifiedGaps: [],
    nextBestAction: {
      type: 'fast_track_challenge',
      title: 'Thử thách Edge-Case: Tối ưu bộ nhớ với Generator Function & Pipeline Chaining',
      targetLessonId: 'les-7-3',
      description: 'Mở rộng kỹ năng xử lý dữ liệu lớn bằng cách viết Custom Pipe kết hợp map/filter không tạo mảng tạm.',
      reason: 'Đạt điểm tuyệt đối 98% qua 3 bài quiz liên tiếp; tốc độ làm bài nhanh gấp đôi chuẩn.',
      estimatedMinutes: 20,
      recommendedScaffoldingLevel: 1
    },
    lastUpdated: '2026-09-21 08:30'
  },
  {
    id: 'ad-sv-02',
    studentId: 'sv-02',
    studentName: 'Trần Thị Bích Ngọc',
    studentCode: 'PS25102',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    currentTrack: 'scaffolding',
    cognitiveLoad: 'overloaded',
    autonomyIndex: 38,
    scaffoldingLevelFrequency: { level1: 3, level2: 5, level3: 11, level4: 14, level5: 9 },
    recentAttemptsCount: 4,
    recentSuccessRate: 52,
    identifiedGaps: ['LO2.3 Ép kiểu dữ liệu', 'LO5.2 Vòng lặp tích lũy', 'LO6.4 Hàm callback'],
    nextBestAction: {
      type: 'prerequisite_patch',
      title: 'Bù đắp mắt xích nền tảng: Thực hành Vòng lặp For tính tổng trước khi học Reduce',
      targetLessonId: 'les-5-2',
      description: 'Bài tập 3 bước nhỏ kèm gợi ý hướng dẫn từng dòng để củng cố tư duy biến accumulator.',
      reason: 'Hệ thống kích hoạt Backward Trace sau khi thất bại 4 lần liên tiếp ở bài tập reduce().',
      estimatedMinutes: 15,
      recommendedScaffoldingLevel: 4
    },
    lastUpdated: '2026-09-20 16:45'
  },
  {
    id: 'ad-sv-03',
    studentId: 'sv-03',
    studentName: 'Lê Hoàng Long',
    studentCode: 'PS25103',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&q=80',
    currentTrack: 'standard',
    cognitiveLoad: 'optimal',
    autonomyIndex: 78,
    scaffoldingLevelFrequency: { level1: 9, level2: 7, level3: 4, level4: 2, level5: 1 },
    recentAttemptsCount: 2,
    recentSuccessRate: 84,
    identifiedGaps: ['LO2.3 Ép kiểu đặc biệt'],
    nextBestAction: {
      type: 'standard_practice',
      title: 'Luyện tập Level 2: Quản lý giỏ hàng với map() và filter() kết hợp',
      targetLessonId: 'les-7-1',
      description: 'Áp dụng biến đổi mảng trong ngữ cảnh tính tiền hóa đơn có mã giảm giá.',
      reason: 'Tiến độ đồng đều, hoàn thành bài tập cơ bản đúng hạn, sẵn sàng cho bài tập chuẩn.',
      estimatedMinutes: 25,
      recommendedScaffoldingLevel: 2
    },
    lastUpdated: '2026-09-21 07:15'
  },
  {
    id: 'ad-sv-04',
    studentId: 'sv-04',
    studentName: 'Phạm Minh Đức',
    studentCode: 'PS25104',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    currentTrack: 'scaffolding',
    cognitiveLoad: 'overloaded',
    autonomyIndex: 42,
    scaffoldingLevelFrequency: { level1: 2, level2: 3, level3: 8, level4: 12, level5: 8 },
    recentAttemptsCount: 5,
    recentSuccessRate: 48,
    identifiedGaps: ['LO2.4 Block Scope', 'LO6.1 Call Stack'],
    nextBestAction: {
      type: 'micro_step_scaffold',
      title: 'Giàn giáo Scaffolding: Phân tích trực quan Scope Chaining qua sơ đồ hộp lồng',
      targetLessonId: 'les-2-4',
      description: 'Chẻ nhỏ bài toán thành 3 câu hỏi trắc nghiệm tương tác về vị trí khai báo biến.',
      reason: 'Thường xuyên tra cứu giải pháp Cấp độ 5 do bị quá tải nhận thức ở khái niệm Scope.',
      estimatedMinutes: 12,
      recommendedScaffoldingLevel: 3
    },
    lastUpdated: '2026-09-20 20:10'
  },
  {
    id: 'ad-sv-05',
    studentId: 'sv-05',
    studentName: 'Vũ Thị Thu Hà',
    studentCode: 'PS25105',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    currentTrack: 'accelerated',
    cognitiveLoad: 'optimal',
    autonomyIndex: 88,
    scaffoldingLevelFrequency: { level1: 10, level2: 7, level3: 2, level4: 0, level5: 0 },
    recentAttemptsCount: 1,
    recentSuccessRate: 92,
    identifiedGaps: [],
    nextBestAction: {
      type: 'fast_track_challenge',
      title: 'Project Mini: Xây dựng Custom Event Emitter sử dụng Object & Function Map',
      targetLessonId: 'les-8-3',
      description: 'Áp dụng kiến thức Object nâng cao để tự xây dựng cơ chế lắng nghe sự kiện pub/sub.',
      reason: 'Có năng khiếu tự giải quyết vấn đề bằng suy luận logic độc lập.',
      estimatedMinutes: 30,
      recommendedScaffoldingLevel: 1
    },
    lastUpdated: '2026-09-21 08:00'
  },
  {
    id: 'ad-sv-06',
    studentId: 'sv-06',
    studentName: 'Đỗ Tuấn Khải',
    studentCode: 'PS25106',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    currentTrack: 'standard',
    cognitiveLoad: 'optimal',
    autonomyIndex: 71,
    scaffoldingLevelFrequency: { level1: 6, level2: 8, level3: 5, level4: 3, level5: 1 },
    recentAttemptsCount: 2,
    recentSuccessRate: 78,
    identifiedGaps: ['LO7.2 Mảng reduce()'],
    nextBestAction: {
      type: 'standard_practice',
      title: 'Luyện tập có hướng dẫn: Sử dụng find() và some() kiểm tra điều kiện',
      targetLessonId: 'les-7-2',
      description: 'Làm quen với các phương thức mảng tiện ích trước khi thử sức với reduce.',
      reason: 'Đã hoàn thành bài tập phục hồi của Module 5 thành công.',
      estimatedMinutes: 18,
      recommendedScaffoldingLevel: 2
    },
    lastUpdated: '2026-09-19 14:20'
  }
];

export const ADAPTIVE_POLICY_CONFIG = {
  fastTrackMinScore: 85,
  fastTrackMaxAttempts: 2,
  scaffoldingTriggerMinScore: 60,
  scaffoldingTriggerMinFails: 2,
  highAutonomyMinLevel12Ratio: 0.7,
  backwardTraceTriggerThreshold: 3 // 3 failed attempts triggers prerequisite chain inspection
};

/**
 * Intelligent client-side algorithmic engine simulating the DDA (Dynamic Difficulty Adjustment)
 * and Pedagogical Scaffolding Rules.
 */
export function evaluateAdaptiveState(
  input: AdaptiveSimulationInput,
  currentTrack: AdaptiveTrack = 'standard'
): AdaptiveSimulationResult {
  const { score, timeSpentMinutes, attemptsCount, aiTutorLevelUsed, consecutiveSuccesses, targetTopic } = input;

  // 1. Calculate Autonomy Index (0-100) based on AI Tutor level requested & attempts
  // Relying on Level 1-2 increases autonomy, relying on Level 4-5 drops it
  const levelWeight = { 1: 1.0, 2: 0.85, 3: 0.65, 4: 0.4, 5: 0.2 }[aiTutorLevelUsed] || 0.5;
  const attemptsPenalty = Math.max(0, (attemptsCount - 1) * 12);
  const autonomy = Math.max(10, Math.min(100, Math.round((levelWeight * 100) - attemptsPenalty)));

  // 2. Evaluate Cognitive Load
  let cognitiveLoad: 'low' | 'optimal' | 'overloaded' = 'optimal';
  if (score < 55 || attemptsCount >= 3 || aiTutorLevelUsed >= 4) {
    cognitiveLoad = 'overloaded';
  } else if (score >= 90 && attemptsCount === 1 && timeSpentMinutes < 10) {
    cognitiveLoad = 'low'; // Student is under-challenged (boredom zone)
  }

  // 3. Dynamic Difficulty Adjustment (Track determination)
  let newTrack: AdaptiveTrack = currentTrack;
  let backwardTraceTriggered = false;
  let recommendedScaffoldingLevel = 2;
  let remedyActionTitle = '';
  let pedagogicalRationale = '';

  if (score >= ADAPTIVE_POLICY_CONFIG.fastTrackMinScore && attemptsCount <= ADAPTIVE_POLICY_CONFIG.fastTrackMaxAttempts && consecutiveSuccesses >= 2) {
    newTrack = 'accelerated';
    recommendedScaffoldingLevel = 1;
    remedyActionTitle = `Thử thách Challenge L3: Mở rộng bài toán ${targetTopic} với Edge-Cases thực chiến`;
    pedagogicalRationale = `Sinh viên đạt điểm cao (${score}%) với độ tự tin lớn và chỉ mất ${timeSpentMinutes} phút. DDA tự động đẩy sinh viên vào Fast-Track để duy trì trạng thái Flow, giao bài tập mức độ Bloom: Evaluate/Create.`;
  } else if (score < ADAPTIVE_POLICY_CONFIG.scaffoldingTriggerMinScore || attemptsCount >= ADAPTIVE_POLICY_CONFIG.scaffoldingTriggerMinFails) {
    newTrack = 'scaffolding';
    backwardTraceTriggered = attemptsCount >= ADAPTIVE_POLICY_CONFIG.backwardTraceTriggerThreshold;
    recommendedScaffoldingLevel = attemptsCount >= 3 ? 4 : 3;

    if (backwardTraceTriggered) {
      remedyActionTitle = `Kích hoạt Gói Bù Đắp Tiền Đề: Truy ngược lỗ hổng kiến thức nền tảng của ${targetTopic}`;
      pedagogicalRationale = `Sinh viên thử lại ${attemptsCount} lần mà điểm vẫn dưới ${ADAPTIVE_POLICY_CONFIG.scaffoldingTriggerMinScore}%. Thuật toán nhận định sinh viên bị nghẽn ở mắt xích tiên quyết. Tạm dừng bài tập hiện tại và mở khóa bài luyện tập tiền đề (Prerequisite Patch) 10 phút.`;
    } else {
      remedyActionTitle = `Giàn giáo Micro-step: Chẻ nhỏ bài ${targetTopic} thành 3 bài tập con`;
      pedagogicalRationale = `Sinh viên có dấu hiệu quá tải nhận thức. DDA tự động kích hoạt giàn giáo sư phạm Cấp độ ${recommendedScaffoldingLevel} (không giải hộ mà gợi ý phương pháp tư duy).`;
    }
  } else {
    newTrack = 'standard';
    recommendedScaffoldingLevel = 2;
    remedyActionTitle = `Bài tập Chuẩn L2: Củng cố tư duy bài ${targetTopic}`;
    pedagogicalRationale = `Sinh viên duy trì tiến độ học tập cân bằng (${score}%, ${attemptsCount} lần thử). Tiếp tục duy trì lộ trình chuẩn với câu hỏi Socratic Cấp độ 2.`;
  }

  return {
    newTrack,
    previousTrack: currentTrack,
    trackChanged: newTrack !== currentTrack,
    cognitiveLoad,
    autonomyIndex: autonomy,
    recommendedScaffoldingLevel,
    backwardTraceTriggered,
    remedyActionTitle,
    pedagogicalRationale
  };
}
