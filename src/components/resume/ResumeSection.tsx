import React, { useState } from 'react';
import { FileText, Download, Eye, CheckCircle2, ShieldCheck, Terminal } from 'lucide-react';
import { CONFIG } from '../../data/config';
import { ResumeModal } from './ResumeModal';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResumeModal }) => {
  return (
    <section id="resume" className="py-24 bg-obsidian-950 circuit-grid-fine relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card */}
        <div className="p-8 sm:p-12 bg-obsidian-900 border border-slate-700/80 rounded-3xl shadow-2xl relative overflow-hidden">
          {/* Subtle glow orb */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-circuit-cyan/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="flex items-center gap-2 text-xs font-mono text-circuit-cyan tracking-wider">
              <span className="p-1.5 rounded bg-circuit-cyan/15 border border-circuit-cyan/30">
                <FileText className="w-4 h-4" />
              </span>
              <span>SECTION // 06 • RECRUITER PORTAL</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white font-sans tracking-tight">
              RESUME
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
              Explore my technical background, projects, skills and engineering journey.
            </p>

            <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
              Targeting engineering opportunities at the intersection of VLSI digital design, embedded hardware, RF antennas, and software optimization.
            </p>

            {/* Recruiter Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4 font-mono">
              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-circuit-cyan text-obsidian-950 font-bold text-sm hover:bg-sky-300 transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] transform hover:-translate-y-0.5"
              >
                <Eye className="w-4 h-4" />
                <span>VIEW RESUME</span>
              </button>

              <a
                href={CONFIG.resumePdfPath}
                download="Jayasurya_R_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-obsidian-850 hover:bg-obsidian-800 text-slate-200 border border-slate-700 hover:border-circuit-cyan/60 font-bold text-sm transition-all shadow-md transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-circuit-cyan" />
                <span>DOWNLOAD RESUME</span>
              </a>
            </div>

            {/* Technical File Meta */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>FILE: /assets/resume/Jayasurya_R_Resume.pdf</span>
              </span>
              <span>•</span>
              <span>FORMAT: PDF / STANDALONE</span>
              <span>•</span>
              <span className="text-slate-400">STATUS: READY_FOR_RECRUITERS</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
