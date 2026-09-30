import React from 'react';
import { ArrowDown, FileText, Send, Sparkles, Terminal, MapPin, GraduationCap } from 'lucide-react';
import { CONFIG } from '../../data/config';
import { EngineeringCore } from './EngineeringCore';

interface HeroProps {
  onOpenResume: () => void;
  onSelectProject?: (projectId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onSelectProject }) => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center circuit-grid-bg overflow-hidden"
    >
      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-circuit-cyan/10 via-circuit-purple/10 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Recruiter Quick Status Banner */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-obsidian-900 border border-circuit-cyan/30 text-xs font-mono text-slate-300 shadow-[0_0_12px_rgba(0,240,255,0.15)]">
            <span className="w-2 h-2 rounded-full bg-circuit-cyan animate-pulse"></span>
            <span className="text-circuit-cyan font-semibold">ECE STUDENT</span>
            <span className="text-slate-600">•</span>
            <span>3rd Year / 5th Sem</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Sri Sai Ram Institute of Technology</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-obsidian-900 border border-slate-800 text-xs font-mono text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-circuit-amber" />
            <span>{CONFIG.location}</span>
          </div>
        </div>

        {/* Main Heading & Core Identity */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-sans">
            JAYASURYA <span className="text-transparent bg-clip-text bg-gradient-to-r from-circuit-cyan via-sky-300 to-circuit-purple">R</span>
          </h1>

          {/* Primary Technical Identity */}
          <div className="mt-3 flex items-center gap-2">
            <span className="font-mono text-lg sm:text-2xl font-bold tracking-wide text-circuit-cyan glow-text-cyan">
              VLSI × HARDWARE × SOFTWARE
            </span>
          </div>

          {/* Supporting Statements */}
          <p className="mt-4 text-lg sm:text-xl text-slate-200 font-medium max-w-2xl leading-relaxed">
            "{CONFIG.subHeadline}"
          </p>

          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl font-sans leading-relaxed">
            ECE student building practical engineering systems in VLSI, embedded technology, AI and software. Dedicated to bridging digital silicon logic with physical embedded sensing and algorithmic intelligence.
          </p>

          {/* Recruiter Quick Action CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-circuit-cyan text-obsidian-950 font-semibold text-sm hover:bg-sky-300 transition-all shadow-[0_0_20px_rgba(0,240,255,0.35)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] transform hover:-translate-y-0.5"
            >
              <span>EXPLORE PROJECTS</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-obsidian-900 hover:bg-obsidian-850 text-slate-200 border border-slate-700 hover:border-circuit-cyan/60 font-semibold text-sm transition-all shadow-md transform hover:-translate-y-0.5"
            >
              <FileText className="w-4 h-4 text-circuit-cyan" />
              <span>VIEW RESUME</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-obsidian-900 hover:bg-obsidian-850 text-slate-200 border border-slate-800 hover:border-circuit-purple/60 font-semibold text-sm transition-all shadow-md transform hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4 text-circuit-purple" />
              <span>LET'S CONNECT</span>
            </a>
          </div>
        </div>

        {/* Centerpiece: Interactive Engineering Core Architecture */}
        <div className="mt-12">
          <EngineeringCore onSelectProject={onSelectProject} />
        </div>

      </div>
    </section>
  );
};
