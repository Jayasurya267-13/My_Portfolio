import React, { useEffect } from 'react';
import { X, ExternalLink, GitBranch, CheckCircle2, Clock, Sparkles, Terminal } from 'lucide-react';
import { ProjectDetail } from '../../types/portfolio';

interface ProjectDetailModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-obsidian-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-4xl max-h-[90vh] bg-obsidian-900 border border-slate-700 rounded-2xl shadow-2xl overflow-y-auto font-mono text-slate-300 relative"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 bg-obsidian-900/95 backdrop-blur-md border-b border-slate-800 p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 rounded bg-circuit-cyan/15 text-circuit-cyan text-xs font-bold border border-circuit-cyan/30">
              CASE_STUDY // {project.title}
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline">{project.category}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
              project.status === 'COMPLETED' ? 'bg-emerald-950 text-emerald-400 border-emerald-500/40' :
              project.status === 'IN DEVELOPMENT' ? 'bg-amber-950 text-amber-300 border-amber-500/40' :
              'bg-purple-950 text-purple-300 border-purple-500/40'
            }`}>
              {project.status}
            </span>

            <button
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Main Title & Tagline */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-sans tracking-tight">
              {project.fullTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 font-sans leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Key Metrics Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-3 bg-obsidian-950 border border-slate-800 rounded-xl text-center">
                <span className="text-[10px] text-slate-500 block truncate">{m.label}</span>
                <span className="text-xs sm:text-sm font-bold text-circuit-cyan mt-1 block">
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* 6-Part Technical Case Study Breakdown */}
          <div className="space-y-6">

            {/* 01 — PROBLEM */}
            <div className="p-5 bg-obsidian-950/70 border border-slate-800 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-circuit-cyan text-xs font-bold">
                <span className="px-1.5 py-0.5 rounded bg-circuit-cyan/20">01</span>
                <span>ENGINEERING PROBLEM STATEMENT</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* 02 — APPROACH */}
            <div className="p-5 bg-obsidian-950/70 border border-slate-800 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-circuit-cyan text-xs font-bold">
                <span className="px-1.5 py-0.5 rounded bg-circuit-cyan/20">02</span>
                <span>SYSTEM ARCHITECTURE &amp; METHODOLOGY</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                {project.approach}
              </p>
            </div>

            {/* 03 — TECHNOLOGY */}
            <div className="p-5 bg-obsidian-950/70 border border-slate-800 rounded-xl space-y-3">
              <div className="flex items-center gap-2 text-circuit-cyan text-xs font-bold">
                <span className="px-1.5 py-0.5 rounded bg-circuit-cyan/20">03</span>
                <span>TECHNOLOGIES &amp; INSTRUMENTATION</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technology.map((tech, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-md bg-obsidian-900 border border-slate-700 text-xs text-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 04 — IMPLEMENTATION */}
            <div className="p-5 bg-obsidian-950/70 border border-slate-800 rounded-xl space-y-3">
              <div className="flex items-center gap-2 text-circuit-cyan text-xs font-bold">
                <span className="px-1.5 py-0.5 rounded bg-circuit-cyan/20">04</span>
                <span>STEP-BY-STEP TECHNICAL IMPLEMENTATION</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-sans">
                {project.implementation.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-circuit-cyan font-mono text-xs mt-0.5">[{idx + 1}]</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 05 — RESULTS / CURRENT STATUS */}
            <div className="p-5 bg-obsidian-950/70 border border-slate-800 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
                <span className="px-1.5 py-0.5 rounded bg-emerald-950 border border-emerald-500/40">05</span>
                <span>VERIFIED RESULTS / CURRENT PROTOTYPE STATUS</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                {project.resultsStatus}
              </p>
            </div>

            {/* 06 — FUTURE WORK */}
            <div className="p-5 bg-obsidian-950/70 border border-slate-800 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-circuit-purple text-xs font-bold">
                <span className="px-1.5 py-0.5 rounded bg-purple-950 border border-purple-500/40">06</span>
                <span>FUTURE RESEARCH &amp; SCALING ROADMAP</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                {project.futureWork}
              </p>
            </div>

          </div>

          {/* Links Footer */}
          {project.liveDemoUrl && (
            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-circuit-cyan text-obsidian-950 font-bold text-xs hover:bg-sky-300 transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)]"
              >
                <span>OPEN EXTERNAL DASHBOARD</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
