import React, { useState } from 'react';
import { 
  FileDown, 
  X, 
  Check, 
  AlertCircle, 
  Copy
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [copied, setCopied] = useState(false);
  const { personal, social } = portfolioData;

  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = `CV_Mohammad_Kaif.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  const handleCopySummary = () => {
    const summaryText = `${personal.name} - ${personal.role}\nUniversity: ${personal.university}\nDegree: ${personal.degree}\nLocation: ${personal.location}\nObjective: ${personal.careerGoal}\nContact: ${social.email}`;
    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <div className="w-full max-w-lg rounded-md p-6 sm:p-7 border border-[#DDE2EB] dark:border-[#30405B] shadow-xl relative bg-[#FFFFFF] dark:bg-[#18243A] text-[#17243B] dark:text-[#F8F7F4]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded text-[#59677C] dark:text-[#ACB9CE] hover:text-[#17243B] dark:hover:text-[#F8F7F4] hover:bg-[#F8F7F4] dark:hover:bg-[#131F33] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-9 h-9 rounded bg-[#F8F7F4] dark:bg-[#131F33] border border-[#DDE2EB] dark:border-[#30405B] flex items-center justify-center text-[#315DDC] dark:text-[#91ACFF]">
            <FileDown className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#17243B] dark:text-[#F8F7F4]">
              Curriculum Vitae (CV)
            </h3>
            <p className="text-xs text-[#59677C] dark:text-[#ACB9CE] font-mono">
              {personal.name} • {personal.degree}
            </p>
          </div>
        </div>

        {/* Download Action Box */}
        <div className="p-4 rounded bg-[#F8F7F4] dark:bg-[#131F33] border border-[#DDE2EB] dark:border-[#30405B] space-y-3 mb-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#17243B] dark:text-[#F8F7F4]">
                Download PDF Document
              </div>
              <div className="text-[11px] text-[#59677C] dark:text-[#ACB9CE] font-mono mt-0.5">
                File source: <span className="text-[#315DDC] dark:text-[#91ACFF]">/public/cv.pdf</span>
              </div>
            </div>

            <button
              onClick={handleDownload}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded bg-[#315DDC] hover:bg-[#2448B2] text-white font-medium text-xs font-mono transition-colors"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Downloaded</span>
                </>
              ) : (
                <>
                  <FileDown className="w-3.5 h-3.5" />
                  <span>Download CV</span>
                </>
              )}
            </button>
          </div>

          {downloadSuccess && (
            <div className="p-2 rounded bg-[#EDF1FF] dark:bg-[#1C2C4E] border border-[#315DDC]/30 dark:border-[#91ACFF]/40 text-[#315DDC] dark:text-[#91ACFF] text-xs flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Download initiated. Please check your browser downloads.</span>
            </div>
          )}
        </div>

        {/* CV Placement Guide & Sensible Fallback Info */}
        <div className="p-3.5 rounded bg-[#F8F7F4] dark:bg-[#131F33] border border-[#DDE2EB] dark:border-[#30405B] text-xs text-[#59677C] dark:text-[#ACB9CE] space-y-1 mb-5">
          <div className="flex items-center gap-1.5 font-semibold font-mono text-[#17243B] dark:text-[#F8F7F4]">
            <AlertCircle className="w-3.5 h-3.5 text-[#315DDC] dark:text-[#91ACFF]" />
            <span>How to update with your official CV:</span>
          </div>
          <p className="leading-relaxed text-[11px]">
            Export your CV as a PDF named <code className="text-[#315DDC] dark:text-[#91ACFF] font-mono">cv.pdf</code> and place it into the <code className="text-[#315DDC] dark:text-[#91ACFF] font-mono">public/</code> directory. Visitors clicking the button will automatically download your latest file.
          </p>
        </div>

        {/* Recruiter Quick Candidate Summary Fallback */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-[#59677C] dark:text-[#ACB9CE]">
            <span className="font-mono uppercase tracking-wider text-[11px]">Quick Profile Summary</span>
            <button
              onClick={handleCopySummary}
              className="inline-flex items-center gap-1 font-mono text-[#315DDC] dark:text-[#91ACFF] hover:underline text-[11px]"
            >
              {copied ? <Check className="w-3 h-3 text-[#315DDC] dark:text-[#91ACFF]" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? 'Copied' : 'Copy Summary'}</span>
            </button>
          </div>

          <div className="p-3 rounded bg-[#F8F7F4] dark:bg-[#131F33] border border-[#DDE2EB] dark:border-[#30405B] text-xs font-mono text-[#17243B] dark:text-[#F8F7F4] space-y-1">
            <div><strong>Name:</strong> {personal.name}</div>
            <div><strong>Degree:</strong> {personal.degree}</div>
            <div><strong>University:</strong> {personal.university}</div>
            <div><strong>Location:</strong> {personal.location}</div>
            <div><strong>Target:</strong> 12-Month UK Industrial Placement</div>
            <div><strong>Email:</strong> {social.email}</div>
          </div>
        </div>

        {/* Close Modal footer */}
        <div className="mt-5 flex justify-end">
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 text-xs font-mono text-[#59677C] dark:text-[#ACB9CE] hover:text-[#17243B] dark:hover:text-[#F8F7F4] rounded hover:bg-[#F8F7F4] dark:hover:bg-[#131F33] transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
