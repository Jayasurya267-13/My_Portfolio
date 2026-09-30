import React from 'react';
import { Share2, ExternalLink, GitBranch, Terminal } from 'lucide-react';
import { CONFIG } from '../../data/config';

export const DigitalFootprint: React.FC = () => {
  const footprintNodes = [
    {
      platform: "LINKEDIN",
      handle: CONFIG.socials.linkedin.username,
      subtitle: "Professional Engineering Network",
      url: CONFIG.socials.linkedin.url,
      accent: "circuit-cyan",
      borderColor: "border-circuit-cyan/40",
      glowColor: "shadow-[0_0_20px_rgba(0,240,255,0.2)]",
      textColor: "text-circuit-cyan",
      icon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      )
    },
    {
      platform: "GITHUB",
      handle: CONFIG.socials.github.username,
      subtitle: "Open Source Code & Repositories",
      url: CONFIG.socials.github.url,
      accent: "circuit-purple",
      borderColor: "border-circuit-purple/40",
      glowColor: "shadow-[0_0_20px_rgba(139,92,246,0.2)]",
      textColor: "text-circuit-purple",
      icon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
        </svg>
      )
    },
    {
      platform: "LEETCODE",
      handle: CONFIG.socials.leetcode.username,
      subtitle: "Algorithms & Algorithmic Problem Solving",
      url: CONFIG.socials.leetcode.url,
      accent: "circuit-amber",
      borderColor: "border-circuit-amber/40",
      glowColor: "shadow-[0_0_20px_rgba(245,158,11,0.2)]",
      textColor: "text-circuit-amber",
      icon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.818 3.535 5.928 5.928 0 0 0 2.281-.144 5.918 5.918 0 0 0 2.457-1.291l4.475-4.475a1.377 1.377 0 1 0-1.946-1.947l-4.475 4.475a3.176 3.176 0 0 1-1.319.693 3.183 3.183 0 0 1-2.589-1.9 3.23 3.23 0 0 1-.034-1.298 3.197 3.197 0 0 1 .655-1.161l3.854-4.126 5.406-5.788A1.374 1.374 0 0 0 13.483 0zm2.715 11.23a1.377 1.377 0 0 0-1.947 1.947l1.947 1.947 1.947-1.947a1.377 1.377 0 0 0-1.947-1.947z" />
        </svg>
      )
    }
  ];

  return (
    <section id="footprint" className="py-24 bg-obsidian-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-circuit-cyan/10 border border-circuit-cyan/30 text-circuit-cyan">
            <Share2 className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-circuit-cyan tracking-wider">SECTION // 07</span>
              <span className="text-slate-600 font-mono">•</span>
              <span className="text-xs font-mono text-slate-400">EXTERNAL NETWORK</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              DIGITAL FOOTPRINT
            </h2>
          </div>
        </div>

        <p className="text-slate-400 max-w-2xl text-sm sm:text-base mb-12">
          Verified engineering nodes across professional networks, distributed open-source version control, and algorithmic evaluation.
        </p>

        {/* Connected Circuit Nodes Visualizer */}
        <div className="relative">
          
          {/* Subtle PCB connecting trace line across nodes */}
          <div className="hidden lg:block absolute top-1/2 left-16 right-16 -translate-y-1/2 h-0.5 bg-slate-800 z-0">
            <div className="w-full h-full bg-gradient-to-r from-circuit-cyan via-circuit-purple to-circuit-amber opacity-30 circuit-animated-line" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10 font-mono">
            {footprintNodes.map((node) => (
              <a
                key={node.platform}
                href={node.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-6 rounded-2xl bg-obsidian-900 border ${node.borderColor} hover:${node.glowColor} transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1 relative`}
              >
                {/* Node pin connectors */}
                <div className="absolute -top-1.5 left-8 w-3 h-3 rounded-full bg-slate-800 border border-slate-600 group-hover:bg-circuit-cyan transition-colors" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl bg-obsidian-950 border border-slate-800 ${node.textColor}`}>
                      {node.icon}
                    </div>
                    <span className="text-xs text-slate-500 flex items-center gap-1 group-hover:text-slate-300">
                      <span>OPEN PROFILE</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <div>
                    <span className={`text-xs font-bold ${node.textColor} tracking-wider block`}>
                      NODE // {node.platform}
                    </span>
                    <h3 className="text-lg font-bold text-white font-sans mt-0.5 group-hover:text-slate-100">
                      {node.handle}
                    </h3>
                    <p className="text-xs text-slate-400 font-sans mt-1">
                      {node.subtitle}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="truncate">{node.url.replace('https://', '')}</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0 ml-2" />
                </div>
              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
