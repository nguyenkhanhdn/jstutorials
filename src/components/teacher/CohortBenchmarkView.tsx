import React, { useState } from 'react';
import { 
  Users, 
  TrendingUp, 
  Award, 
  AlertTriangle, 
  BookOpen, 
  Clock, 
  BarChart2, 
  CheckCircle2, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { CohortBenchmark } from '../../types';
import { MOCK_COHORTS } from '../../data/advancedAnalyticsData';

export const CohortBenchmarkView: React.FC = () => {
  const [cohorts] = useState<CohortBenchmark[]>(MOCK_COHORTS);
  const [selectedCohort, setSelectedCohort] = useState<string>('wd18301');

  const activeCohort = cohorts.find(c => c.classId === selectedCohort) || cohorts[0];

  const totalStudents = cohorts.reduce((sum, c) => sum + c.studentCount, 0);
  const overallAvgProgress = Math.round(cohorts.reduce((sum, c) => sum + c.avgProgress * c.studentCount, 0) / totalStudents);
  const overallAvgQuiz = Math.round(cohorts.reduce((sum, c) => sum + c.avgQuizScore * c.studentCount, 0) / totalStudents);

  return (
    <div className="space-y-6">
      
      {/* Top Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-900 border border-blue-200">
                Cohort Comparative Analytics
              </span>
              <span className="text-xs text-slate-500">Đối sánh tiến độ giữa các lớp học phần</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              <BarChart2 className="w-6 h-6 text-blue-600" />
              <span>Đối Sánh Năng Lực Liên Khóa Học (Cohort Benchmarking)</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-3xl leading-relaxed">
              So sánh chỉ số học tập, tỷ lệ chuyên cần và phổ điểm giữa các ca học (Sáng, Chiều, Tối) để bộ môn điều chỉnh tốc độ giảng dạy và chuẩn hóa đề thi.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 bg-blue-50 rounded-2xl border border-blue-100 text-center">
              <div className="text-[11px] font-semibold text-blue-700">Tổng sinh viên theo dõi</div>
              <div className="text-2xl font-black text-blue-950">{totalStudents} SV</div>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-center">
              <div className="text-[11px] font-semibold text-slate-600">Điểm Quiz toàn khối</div>
              <div className="text-2xl font-black text-slate-900">{overallAvgQuiz}%</div>
            </div>
          </div>
        </div>

        {/* Cohort Selectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
          {cohorts.map(c => {
            const isSelected = c.classId === selectedCohort;
            return (
              <div
                key={c.classId}
                onClick={() => setSelectedCohort(c.classId)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer space-y-2 ${
                  isSelected 
                    ? 'ring-2 ring-blue-600 bg-blue-50/50 border-blue-300 shadow-xs' 
                    : 'bg-white hover:border-slate-300 border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-sm">{c.className}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    {c.studentCount} SV
                  </span>
                </div>

                <div className="text-[11px] text-slate-500 truncate">{c.teacherName}</div>
                <div className="text-[10px] text-slate-400 truncate">{c.schedule}</div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs">
                  <div>
                    <div className="text-[10px] text-slate-400">Tiến độ</div>
                    <div className="font-black text-slate-900">{c.avgProgress}%</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400">Quiz TB</div>
                    <div className="font-black text-indigo-600">{c.avgQuizScore}%</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Cohort Detailed Drilldown */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-black text-slate-900">{activeCohort.className}</h3>
              <span className="text-xs text-slate-400">•</span>
              <span className="text-xs font-semibold text-slate-600">{activeCohort.teacherName}</span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">{activeCohort.schedule}</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
              Tỷ lệ vào lớp đều đặn: <strong>{activeCohort.activeRate}%</strong>
            </span>
          </div>
        </div>

        {/* Comparison Gauges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Progress compared to cohort avg */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="text-xs font-bold text-slate-500">Tiến độ lớp so với toàn khối:</div>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-black text-slate-900">{activeCohort.avgProgress}%</span>
              <span className={`text-xs font-bold ${activeCohort.avgProgress >= overallAvgProgress ? 'text-emerald-600' : 'text-rose-600'}`}>
                {activeCohort.avgProgress >= overallAvgProgress ? `+${activeCohort.avgProgress - overallAvgProgress}%` : `${activeCohort.avgProgress - overallAvgProgress}%`} so với TB
              </span>
            </div>
            <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-blue-600 rounded-full" style={{ width: `${activeCohort.avgProgress}%` }} />
            </div>
          </div>

          {/* Quiz score compared to cohort avg */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="text-xs font-bold text-slate-500">Điểm Quiz so với toàn khối:</div>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-black text-indigo-600">{activeCohort.avgQuizScore}%</span>
              <span className={`text-xs font-bold ${activeCohort.avgQuizScore >= overallAvgQuiz ? 'text-emerald-600' : 'text-rose-600'}`}>
                {activeCohort.avgQuizScore >= overallAvgQuiz ? `+${activeCohort.avgQuizScore - overallAvgQuiz}%` : `${activeCohort.avgQuizScore - overallAvgQuiz}%`} so với TB
              </span>
            </div>
            <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-indigo-600 rounded-full" style={{ width: `${activeCohort.avgQuizScore}%` }} />
            </div>
          </div>

          {/* At-risk count */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="text-xs font-bold text-slate-500">Số lượng sinh viên có nguy cơ:</div>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-black text-rose-600">{activeCohort.atRiskCount} SV</span>
              <span className="text-xs font-bold text-slate-500">
                {Math.round((activeCohort.atRiskCount / activeCohort.studentCount) * 100)}% sĩ số
              </span>
            </div>
            <div className="text-[11px] text-slate-500">
              Điểm nghẽn chính: <strong className="text-slate-900">{activeCohort.topWeakObjective}</strong>
            </div>
          </div>

        </div>

        {/* Cross-Cohort Summary Table */}
        <div className="overflow-x-auto pt-2">
          <table className="w-full text-xs text-left">
            <thead className="bg-slate-50 text-slate-600 uppercase font-bold border-y border-slate-200">
              <tr>
                <th className="py-3 px-4">Lớp học phần</th>
                <th className="py-3 px-4">Giảng viên</th>
                <th className="py-3 px-4">Sĩ số</th>
                <th className="py-3 px-4">Tiến độ TB</th>
                <th className="py-3 px-4">Điểm Quiz TB</th>
                <th className="py-3 px-4">Tỷ lệ Chuyên cần</th>
                <th className="py-3 px-4">SV Nguy cơ</th>
                <th className="py-3 px-4">Nút thắt kiến thức</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {cohorts.map(c => (
                <tr 
                  key={c.classId}
                  onClick={() => setSelectedCohort(c.classId)}
                  className={`hover:bg-slate-50/80 transition-colors cursor-pointer ${
                    c.classId === selectedCohort ? 'bg-blue-50/40 font-semibold' : ''
                  }`}
                >
                  <td className="py-3.5 px-4 font-bold text-slate-900">{c.className}</td>
                  <td className="py-3.5 px-4 text-slate-600">{c.teacherName}</td>
                  <td className="py-3.5 px-4 text-slate-800">{c.studentCount} SV</td>
                  <td className="py-3.5 px-4">
                    <span className="font-bold text-slate-900">{c.avgProgress}%</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2 py-0.5 rounded font-bold ${
                      c.avgQuizScore >= 80 ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {c.avgQuizScore}%
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-700">{c.activeRate}%</td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      c.atRiskCount > 5 ? 'bg-rose-100 text-rose-700' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {c.atRiskCount} SV
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-600">{c.topWeakObjective}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
};
