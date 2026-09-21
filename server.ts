import express, { Request, Response } from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const PORT = 3000;

let geminiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!geminiClient && process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== "MY_GEMINI_API_KEY") {
    geminiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }
  return geminiClient;
}

async function startServer() {
  const app = express();
  app.use(express.json());

  // AI Tutor pedagogical endpoint
  app.post("/api/ai-tutor", async (req: Request, res: Response) => {
    try {
      const {
        prompt,
        scaffoldingLevel = 1,
        contextTopic = "JavaScript cơ bản",
        studentCode = "",
        errorMessage = "",
        exercisePrompt = ""
      } = req.body;

      const levelDescriptions: Record<number, string> = {
        1: "Cấp độ 1: Chỉ đưa ra một gợi ý nhỏ (Hint), hướng sự chú ý của sinh viên vào điểm mấu chốt, tuyệt đối không đưa code hoàn chỉnh.",
        2: "Cấp độ 2: Đặt câu hỏi dẫn dắt (Socratic questioning) để sinh viên tự suy ngẫm bước tiếp theo.",
        3: "Cấp độ 3: Giải thích ngắn gọn khái niệm hoặc quy tắc ngữ pháp JavaScript liên quan (Knowledge explanation).",
        4: "Cấp độ 4: Cung cấp một ví dụ tương tự hoàn chỉnh nhưng với ngữ cảnh khác để sinh viên bắt chước tư duy (Analogy example).",
        5: "Cấp độ 5: Lời giải mẫu hoàn chỉnh kèm phân tích từng dòng code và giải thích tại sao làm như vậy."
      };

      const systemPrompt = `Bạn là "AI Tutor Sư Phạm" chuyên môn JavaScript cho sinh viên Cao đẳng Công nghệ Thông tin theo chuẩn Learning-by-Doing.
Quy tắc vàng:
1. Bạn tuân thủ nghiêm ngặt cấp độ trợ giúp: ${levelDescriptions[scaffoldingLevel] || levelDescriptions[1]}.
2. KHÔNG đưa ngay code giải nếu cấp độ < 5. Hãy khuyến khích sinh viên tự tư duy và thử nghiệm.
3. Sử dụng tiếng Việt chuẩn mực, sư phạm, thân thiện, súc tích, giải thích thuật ngữ kỹ thuật tiếng Anh đi kèm trong ngoặc.
4. Định dạng Markdown rõ ràng, dễ đọc trên giao diện học tập.
Ngữ cảnh bài tập: ${exercisePrompt || contextTopic}
Code hiện tại của sinh viên: \`\`\`javascript\n${studentCode || "// Chưa có code"}\n\`\`\`
Lỗi gặp phải (nếu có): ${errorMessage || "Không có lỗi runtime"}
Câu hỏi/yêu cầu của sinh viên: ${prompt || "Tôi đang gặp khó khăn ở bài này, hãy giúp tôi."}`;

      const client = getGeminiClient();
      if (client) {
        const response = await client.models.generateContent({
          model: "gemini-2.5-flash",
          contents: systemPrompt,
        });

        return res.json({
          success: true,
          scaffoldingLevel,
          response: response.text || "Hãy xem lại cú pháp và thử in kết quả ra console bằng console.log() nhé!",
          source: "gemini"
        });
      } else {
        // Fallback pedagogical responses if API key is not configured
        const fallbackHints: Record<number, string> = {
          1: `💡 **Gợi ý (Cấp độ 1):** Hãy kiểm tra xem bạn đã dùng đúng từ khóa khai báo biến (\`let\` hoặc \`const\`) chưa, và chú ý dấu chấm phẩy cũng như tên biến phân biệt hoa - thường.`,
          2: `🤔 **Câu hỏi dẫn dắt (Cấp độ 2):** Biến này có cần gán lại giá trị trong tương lai không? Nếu không thay đổi, ta nên dùng từ khóa nào để đảm bảo tính an toàn dữ liệu?`,
          3: `📚 **Kiến thức liên quan (Cấp độ 3):** Trong JavaScript ES6+, \`const\` dùng cho hằng số (không thể gán lại bằng dấu \`=\`), còn \`let\` cho phép gán lại giá trị. Cả hai đều có block-scope (phạm vi khối).`,
          4: `🔍 **Ví dụ tương tự (Cấp độ 4):**
\`\`\`javascript
// Ví dụ lưu thông tin sản phẩm
const productName = "Bàn phím cơ"; // Không đổi tên sản phẩm
let productPrice = 750000;        // Giá có thể khuyến mãi giảm
productPrice = 690000;            // Hợp lệ với let
\`\`\`
Hãy áp dụng tư duy tương tự vào bài toán của bạn nhé!`,
          5: `✅ **Lời giải & Phân tích (Cấp độ 5):**
\`\`\`javascript
// Khai báo biến họ tên (không đổi) và tuổi (có thể tăng)
const studentName = "Nguyễn Văn An";
let studentAge = 20;

console.log("Sinh viên: " + studentName + " - Tuổi: " + studentAge);
\`\`\`
*Giải thích:* Dùng \`const\` cho \`studentName\` vì tên sinh viên cố định trong ngữ cảnh bài toán, và dùng \`let\` cho \`studentAge\` vì tuổi là giá trị có thể biến thiên.`
        };

        return res.json({
          success: true,
          scaffoldingLevel,
          response: fallbackHints[scaffoldingLevel] || fallbackHints[1],
          source: "pedagogical_engine"
        });
      }
    } catch (error: any) {
      console.error("AI Tutor error:", error);
      return res.status(500).json({
        success: false,
        error: error.message || "Lỗi xử lý phản hồi từ AI Tutor"
      });
    }
  });

  // Adaptive Learning & DDA Cognitive Analysis endpoint
  app.post("/api/adaptive-analysis", async (req: Request, res: Response) => {
    try {
      const {
        studentName = "Sinh viên",
        currentTopic = "Array reduce()",
        score = 50,
        attemptsCount = 3,
        timeSpentMinutes = 25,
        aiTutorLevelUsed = 4,
        recentErrors = []
      } = req.body;

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

        return res.json({
          success: true,
          analysis: response.text,
          source: "gemini"
        });
      } else {
        const fallbackAnalysis = `Chẩn đoán thích ứng cho ${studentName}: Với điểm số ${score}% sau ${attemptsCount} lần thử, sinh viên đang rơi vào trạng thái quá tải nhận thức (Cognitive Overload). Nguyên nhân gốc rễ là mắt xích tiền đề về cấu trúc vòng lặp tích lũy (Accumulator Pattern) chưa được củng cố vững chắc. Hệ thống kích hoạt gói can thiệp giàn giáo: tạm dừng bài tập nâng cao và chuyển sang làm bài tập chuẩn hóa 10 phút về biến tích lũy với mức trợ giúp AI Cấp 3.`;
        return res.json({
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
  });

  // Health check
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Vite middleware in dev or static files in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
