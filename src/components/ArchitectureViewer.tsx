import React, { useState } from 'react';
import { 
  FileText, 
  Layers, 
  CheckCircle2, 
  Copy, 
  Check, 
  ChevronRight, 
  BookOpen, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { ARCHITECTURE_DOCS } from '../data/architectureDocs';

export const ArchitectureViewer: React.FC = () => {
  const [activePartId, setActivePartId] = useState<string>(ARCHITECTURE_DOCS[0].id);
  const [copied, setCopied] = useState(false);

  const currentDoc = ARCHITECTURE_DOCS.find(d => d.id === activePartId) || ARCHITECTURE_DOCS[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentDoc.contentMarkdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200">
                Hồ sơ Thiết kế Sư phạm Chuẩn (Phần A – L)
              </span>
              <span className="text-xs text-slate-500">Dành cho Hội đồng Khoa & Giảng viên</span>
            </div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              Tài liệu Kiến trúc & Đặc tả Hệ thống Học liệu số JavaScript
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Bản đặc tả chi tiết 12 phần theo đúng tiêu chuẩn kiểm định giáo dục nghề nghiệp và khoa học nhận thức.
            </p>
          </div>

          <button
            onClick={handleCopy}
            className="px-4 py-2 text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white rounded-xl flex items-center gap-2 transition-all shadow-xs self-start sm:self-auto"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Đã sao chép tài liệu' : 'Sao chép nội dung phần này'}</span>
          </button>
        </div>
      </div>

      {/* Main layout: Sidebar Navigation + Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Navigation Index (Left 4 cols) */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-4 border border-slate-200 shadow-xs sticky top-24 space-y-1 max-h-[80vh] overflow-y-auto">
          <div className="px-3 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
            Mục lục 12 Phần đặc tả:
          </div>
          {ARCHITECTURE_DOCS.map((doc: any) => {
            const isActive = activePartId === doc.id;
            return (
              <button
                key={doc.id}
                onClick={() => setActivePartId(doc.id)}
                className={`w-full p-3 rounded-2xl text-left text-xs transition-all flex items-center justify-between ${
                  isActive
                    ? 'bg-slate-900 text-white font-bold shadow-sm'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="truncate pr-2">
                  <div className="font-semibold truncate">{doc.title}</div>
                  <div className={`text-[10px] truncate ${isActive ? 'text-slate-300' : 'text-slate-400'}`}>
                    {doc.summary}
                  </div>
                </div>
                <ChevronRight className={`w-4 h-4 shrink-0 ${isActive ? 'text-amber-400' : 'text-slate-300'}`} />
              </button>
            );
          })}
        </div>

        {/* Content Viewer (Right 8 cols) */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="pb-4 border-b border-slate-100">
            <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
              {currentDoc.badge}
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
              {currentDoc.title}
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              {currentDoc.summary}
            </p>
          </div>

          {/* Formatted Markdown Content */}
          <div className="prose prose-sm max-w-none text-slate-800 leading-relaxed space-y-4 font-sans text-xs sm:text-sm">
            {currentDoc.contentMarkdown.split('\n\n').map((paragraph: string, idx: number) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={idx} className="text-base font-bold text-slate-900 pt-4 pb-1 border-b border-slate-100">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={idx} className="text-lg font-black text-slate-900 pt-6 pb-2 border-b border-slate-200">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('- ') || paragraph.startsWith('* ')) {
                const items = paragraph.split('\n');
                return (
                  <ul key={idx} className="list-disc list-inside space-y-1.5 pl-2 text-slate-700">
                    {items.map((it: string, iIdx: number) => (
                      <li key={iIdx} className="leading-relaxed">
                        {it.replace(/^[-*]\s+/, '')}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (paragraph.startsWith('```')) {
                return (
                  <div key={idx} className="bg-slate-900 text-slate-200 p-4 rounded-2xl font-mono text-xs overflow-x-auto border border-slate-800">
                    <pre className="whitespace-pre-wrap">{paragraph.replace(/```[a-z]*\n?/g, '')}</pre>
                  </div>
                );
              }
              return (
                <p key={idx} className="text-slate-700 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
};
