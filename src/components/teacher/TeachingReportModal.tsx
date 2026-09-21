import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Copy, 
  Check, 
  Printer, 
  X, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  TrendingUp,
  Award
} from 'lucide-react';
import { StudentProfile } from '../../types';
import { MOCK_OBJECTIVE_MASTERIES } from '../../data/advancedAnalyticsData';

interface TeachingReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  students: StudentProfile[];
}

export const TeachingReportModal: React.FC<TeachingReportModalProps> = ({
  isOpen,
  onClose,
  students
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const total = students.length;
  const atRisk = students.filter(s => s.atRisk);
  const avgCompletion = Math.round(students.reduce((s, st) => s + st.overallProgress, 0) / total);
  const avgQuiz = Math.round(students.reduce((s, st) => s + st.averageQuizScore, 0) / total);
  const passingRate = Math.round(((total - atRisk.length) / total) * 100);

  const topBottlenecks = MOCK_OBJECTIVE_MASTERIES
    .filter(lo => lo.avgMastery < 65)
    .slice(0, 3);

  const markdownReport = `# BÁO CÁO PHÂN TÍCH HỌC TẬP (LEARNING ANALYTICS BRIEFING)
**Môn học:** Lập trình JavaScript Nâng cao (WEB2014)
**Lớp:** WD18301 • **Hệ:** Cao đẳng FPT Polytech
**Ngày xuất:** ${new Date().toLocaleDateString('vi-VN')}

---

## 1. CHỈ SỐ TOÀN DIỆN LỚP HỌC
- Sĩ số lớp: ${total} sinh viên
- Tỷ lệ hoàn thành nội dung trung bình: ${avgCompletion}%
- Điểm đánh giá trắc nghiệm (Quiz) trung bình: ${avgQuiz}%
- Dự báo tỷ lệ qua môn đúng hạn: ${passingRate}%
- Số sinh viên thuộc diện cảnh báo sớm (At-Risk): ${atRisk.length} sinh viên (${Math.round((atRisk.length / total) * 100)}%)

---

## 2. CÁC NÚT THẮT KIẾN THỨC CẦN PHỤ ĐẠO (BOTTLENECK LOs)
${topBottlenecks.map(b => `- **[${b.code}] ${b.title}** (Độ làm chủ: ${b.avgMastery}%, ${b.atRiskCount} SV gặp khó khăn)\n  *Khuyến nghị:* ${b.recommendation}`).join('\n\n')}

---

## 3. DANH SÁCH SINH VIÊN CẦN CAN THIỆP SƯ PHẠM
${atRisk.map(s => `- **${s.fullName}** (${s.code}): Điểm Quiz ${s.averageQuizScore}%, Tiến độ ${s.overallProgress}% - *Nguyên nhân:* ${s.atRiskReason || 'Cần theo dõi'}`).join('\n')}

---

## 4. KẾ HOẠCH HÀNH ĐỘNG TUẦN TIẾP THEO
1. Tổ chức 30 phút ôn tập trực quan về Ép kiểu ngầm định và Mảng reduce().
2. Triển khai gói bài tập phục hồi (Remediation Set) có hướng dẫn AI Tutor 5 cấp độ.
3. Ghép đôi học tập (Study Buddy) giữa nhóm SV giỏi (XP > 1400) và SV cần trợ giúp.
`;

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(markdownReport);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadCSV = () => {
    const headers = ['Mã SV', 'Họ và tên', 'Email', 'Tiến độ (%)', 'Điểm Quiz TB', 'XP', 'Chuỗi ngày', 'Trạng thái'];
    const rows = students.map(s => [
      s.code,
      `"${s.fullName}"`,
      s.email,
      s.overallProgress,
      s.averageQuizScore,
      s.xp,
      s.streakDays,
      s.atRisk ? 'Nguy cơ tụt hậu' : 'Bình thường'
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Bao_Cao_Hoc_Tap_WD18301_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-in fade-in">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-black text-slate-900 text-base">Báo Cáo Sư Phạm & Tiến Độ Học Kỳ</h3>
              <p className="text-xs text-slate-500">Dữ liệu phân tích tổng hợp phục vụ họp bộ môn và báo cáo FAP</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 font-bold p-1 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Printable Report Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-slate-700">
          
          {/* Header Summary */}
          <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-indigo-100 pb-2">
              <span className="font-extrabold text-indigo-950 text-sm">Lớp: WD18301 - Lập trình Front-end với JavaScript</span>
              <span className="text-[11px] text-indigo-700 font-mono">Học kỳ Fall 2026</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div>
                <div className="text-slate-500">Sĩ số</div>
                <div className="text-lg font-black text-slate-900">{total} SV</div>
              </div>
              <div>
                <div className="text-slate-500">Tiến độ TB</div>
                <div className="text-lg font-black text-slate-900">{avgCompletion}%</div>
              </div>
              <div>
                <div className="text-slate-500">Điểm Quiz TB</div>
                <div className="text-lg font-black text-indigo-600">{avgQuiz}%</div>
              </div>
              <div>
                <div className="text-slate-500">Dự báo đỗ</div>
                <div className="text-lg font-black text-emerald-600">{passingRate}%</div>
              </div>
            </div>
          </div>

          {/* Top Bottlenecks */}
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              <span>Nút thắt kiến thức lớn nhất cần củng cố trong tuần:</span>
            </h4>
            <div className="space-y-2">
              {topBottlenecks.map(b => (
                <div key={b.code} className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-between font-bold">
                    <span className="text-slate-900 font-mono">[{b.code}] {b.title}</span>
                    <span className="text-rose-600">Làm chủ: {b.avgMastery}%</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">💡 {b.recommendation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* At-risk students list */}
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>Sinh viên trong diện can thiệp khẩn cấp ({atRisk.length} SV):</span>
            </h4>
            <div className="space-y-1.5">
              {atRisk.map(s => (
                <div key={s.id} className="p-2.5 rounded-xl bg-rose-50/50 border border-rose-200 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-900">{s.fullName}</span>
                    <span className="text-slate-400 font-mono ml-2">({s.code})</span>
                    <div className="text-[11px] text-rose-800">{s.atRiskReason}</div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-slate-600">Tiến độ: {s.overallProgress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Actions */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyMarkdown}
              className="px-3.5 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Đã chép Markdown' : 'Sao chép Markdown'}</span>
            </button>

            <button
              onClick={handleDownloadCSV}
              className="px-3.5 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-indigo-600" />
              <span>Tải file CSV cho FAP</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>In báo cáo / Lưu PDF</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
