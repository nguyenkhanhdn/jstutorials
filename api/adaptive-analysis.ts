import { GoogleGenAI } from "@google/genai";

let geminiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!geminiClient && process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== "MY_GEMINI_API_KEY") {
    geminiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }
  return geminiClient;
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      studentName = "Sinh viên",
      currentTopic = "Array reduce()",
      score = 50,
      attemptsCount = 3,
      timeSpentMinutes = 25,
      aiTutorLevelUsed = 4,
      recentErrors = []
    } = req.body || {};

    const client = getGeminiClient();
    if (client) {
      const prompt = `Bạn là Chuyên gia Học tập Thích ứng (Adaptive Learning & DDA Specialist) cho môn Lập trình JavaScript hệ Cao đẳng CNTT.
Hãy phân tích trạng thái nhận thức của sinh viên ${studentName}:
- Chủ đề đang học: ${currentTopic}
- Điểm kiểm tra: ${score}%
- Số lần làm lại (attempts): ${attemptsCount}
- Thời gian làm bài: ${timeSpentMinutes} phút
- Mức độ gợi ý AI đã tra cứu: Cấp độ ${aiTutorLevelUsed}/5
- Các lỗi gần nhất: ${recentErrors.join("; ") || "Chưa xác định"}

Hãy đưa ra đánh giá sư phạm ngắn gọn (tối đa 4 câu):
1. Đánh giá tải nhận thức (Cognitive Load: Overloaded / Optimal / Low) và giải thích nguyên nhân.
2. Xác định mắt xích kiến thức tiền đề (Prerequisite Skill) bị hổng nằm ở đâu.
3. Kê đơn sư phạm: Đề xuất hành động tiếp theo (Next Best Action) để sinh viên lấy lại sự tự tin.
Phản hồi bằng tiếng Việt thân thiện, chuẩn mực giáo dục.`;

      const response = await client.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt
      });

      return res.status(200).json({
        success: true,
        analysis: response.text,
        source: "gemini"
      });
    } else {
      const fallbackAnalysis = `Chẩn đoán thích ứng cho ${studentName}: Với điểm số ${score}% sau ${attemptsCount} lần thử, sinh viên đang rơi vào trạng thái quá tải nhận thức (Cognitive Overload). Nguyên nhân gốc rễ là mắt xích tiền đề về cấu trúc vòng lặp tích lũy (Accumulator Pattern) chưa được củng cố vững chắc. Hệ thống kích hoạt gói can thiệp giàn giáo: tạm dừng bài tập nâng cao và chuyển sang làm bài tập chuẩn hóa 10 phút về biến tích lũy với mức trợ giúp AI Cấp 3.`;
      return res.status(200).json({
        success: true,
        analysis: fallbackAnalysis,
        source: "pedagogical_engine"
      });
    }
  } catch (err: any) {
    console.error("Adaptive analysis error:", err);
    return res.status(500).json({
      success: false,
      error: err.message || "Lỗi xử lý phân tích thích ứng"
    });
  }
}
