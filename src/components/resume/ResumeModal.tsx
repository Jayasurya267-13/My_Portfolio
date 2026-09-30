import React, { useEffect } from 'react';
import { X, Download, FileText, ExternalLink, CheckCircle2, AlertCircle } from 'lucide-react';
import { CONFIG, SYSTEM_SPECS } from '../../data/config';
import { FLAGSHIP_PROJECTS } from '../../data/projects';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-obsidian-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-4xl max-h-[90vh] bg-obsidian-900 border border-slate-700 rounded-2xl shadow-2xl overflow-y-auto font-mono text-slate-300 relative"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-20 bg-obsidian-900/95 backdrop-blur-md border-b border-slate-800 p-4 sm:p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="p-1.5 rounded bg-circuit-cyan/15 text-circuit-cyan border border-circuit-cyan/30">
              <FileText className="w-4 h-4" />
            </span>
            <div>
              <span className="text-xs font-bold text-white block">JAYASURYA_R_RESUME.PDF</span>
              <span className="text-[10px] text-slate-400">ENGINEERING CREDENTIALS PREVIEW</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={CONFIG.resumePdfPath}
              download="Jayasurya_R_Resume.pdf"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-circuit-cyan text-obsidian-950 text-xs font-bold hover:bg-sky-300 transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* In-Page Recruiter Sheet Preview */}
        <div className="p-6 sm:p-10 space-y-8 bg-obsidian-950/50">
          
          {/* Header Block */}
          <div className="border-b border-slate-800 pb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-white font-sans">
              JAYASURYA R
            </h1>
            <p className="text-xs sm:text-sm text-circuit-cyan font-mono mt-1 font-bold">
              VLSI × HARDWARE × SOFTWARE • ECE STUDENT
            </p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400 font-sans">
              <span>{CONFIG.institution} (3rd Year, 5th Sem)</span>
              <span>•</span>
              <span>Chennai-44, India</span>
              <span>•</span>
              <span>Email: <code className="text-circuit-cyan">{CONFIG.emailPlaceholder}</code></span>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold text-circuit-cyan tracking-wider border-b border-slate-800 pb-1">
              // EDUCATION
            </h3>
            <div className="flex flex-col sm:flex-row justify-between text-xs sm:text-sm font-sans">
              <div>
                <span className="font-bold text-white">Bachelor of Engineering in Electronics and Communication Engineering</span>
                <p className="text-slate-400 text-xs mt-0.5">{CONFIG.institution}, Chennai</p>
              </div>
              <span className="text-circuit-cyan font-mono text-xs mt-1 sm:mt-0">{CONFIG.currentStatus}</span>
            </div>
            <div className="text-xs text-slate-400 font-sans">
              <span className="text-slate-300 font-medium">Relevant Coursework:</span> Digital Electronics, Digital System Design, Verilog HDL, Embedded Systems, Communication Systems, RF Engineering, Programming and Data Structures.
            </div>
          </div>

          {/* Core Technical Stack */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold text-circuit-cyan tracking-wider border-b border-slate-800 pb-1">
              // TECHNICAL SKILLS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div className="p-3 bg-obsidian-900 border border-slate-800 rounded-lg">
                <span className="text-circuit-cyan font-bold block mb-1">VLSI / DIGITAL</span>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  Verilog HDL, Xilinx Vivado, Digital Logic, RTL Design, VLSI Fundamentals
                </p>
              </div>
              <div className="p-3 bg-obsidian-900 border border-slate-800 rounded-lg">
                <span className="text-circuit-amber font-bold block mb-1">HARDWARE / EMBEDDED</span>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  ESP32, Arduino, Embedded Systems, Antenna Design, CST Studio Suite, IoT Systems
                </p>
              </div>
              <div className="p-3 bg-obsidian-900 border border-slate-800 rounded-lg">
                <span className="text-circuit-purple font-bold block mb-1">SOFTWARE &amp; AI</span>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  C, Java, Python, HTML/CSS/JS, Git, GitHub, Machine Learning Anomaly Detection
                </p>
              </div>
            </div>
          </div>

          {/* Key Flagship Projects */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-bold text-circuit-cyan tracking-wider border-b border-slate-800 pb-1">
              // FLAGSHIP ENGINEERING PROJECTS
            </h3>
            <div className="space-y-4">
              {FLAGSHIP_PROJECTS.map((proj) => (
                <div key={proj.id} className="p-4 bg-obsidian-900 border border-slate-800 rounded-xl space-y-1.5 font-sans">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                    <span className="font-bold text-white text-sm">{proj.fullTitle}</span>
                    <span className="text-circuit-cyan font-mono text-xs">{proj.status}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {proj.tagline}
                  </p>
                  <p className="text-xs text-slate-400">
                    <span className="font-medium text-slate-300">Technology:</span> {proj.technology.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Credentials */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold text-circuit-cyan tracking-wider border-b border-slate-800 pb-1">
              // LICENSES &amp; EXPOSURE
            </h3>
            <ul className="space-y-2 text-xs text-slate-300 font-sans">
              <li className="flex items-start gap-2">
                <span className="text-circuit-cyan font-mono font-bold">•</span>
                <span><strong className="text-white">Amateur / Ham Radio License Holder:</strong> Certified by Wireless Planning &amp; Coordination (WPC) for VHF/UHF wireless propagation and transceiver operation.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-circuit-cyan font-mono font-bold">•</span>
                <span><strong className="text-white">Space Technology &amp; Antenna Design Exposure:</strong> Practical internship experience exploring space communication systems, orbital telemetry, and CST RF modeling.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-circuit-cyan font-mono font-bold">•</span>
                <span><strong className="text-white">Algorithmic Problem Solving:</strong> Regular coding practice on LeetCode focusing on arrays, two pointers, graphs, binary trees, and optimization.</span>
              </li>
            </ul>
          </div>

          {/* Placeholder replacement notice */}
          <div className="p-4 bg-obsidian-900 border border-dashed border-slate-700 rounded-xl text-xs font-mono text-slate-400 flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-circuit-cyan shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-200 block mb-0.5">RESUME FILE REPLACEMENT GUIDE:</span>
              To replace with your official PDF resume, simply place your PDF at <code className="text-circuit-cyan">/assets/resume/Jayasurya_R_Resume.pdf</code> or update <code className="text-circuit-cyan">CONFIG.resumePdfPath</code> in <code className="text-slate-300">src/data/config.ts</code>. The website layout remains perfectly stable.
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
