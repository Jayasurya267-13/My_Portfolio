import React from 'react';
import { ArrowUp, Terminal, Cpu } from 'lucide-react';
import { CONFIG } from '../../data/config';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-obsidian-950 border-t border-slate-800 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start space-y-1.5 text-center md:text-left">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white tracking-wider text-sm">
                JAYASURYA R
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-circuit-cyan font-semibold">
                VLSI × HARDWARE × SOFTWARE
              </span>
            </div>
            <p className="text-slate-400 text-xs font-sans">
              "Building intelligent systems from silicon to software."
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href={CONFIG.socials.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-circuit-cyan transition-colors"
            >
              LINKEDIN
            </a>
            <a
              href={CONFIG.socials.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-circuit-purple transition-colors"
            >
              GITHUB
            </a>
            <a
              href={CONFIG.socials.leetcode.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-circuit-amber transition-colors"
            >
              LEETCODE
            </a>
          </div>

          {/* Copyright & Scroll To Top */}
          <div className="flex items-center gap-4">
            <span className="text-slate-500">
              © 2026 Jayasurya R
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-obsidian-900 border border-slate-800 hover:border-circuit-cyan/50 text-slate-400 hover:text-white transition-colors"
              title="Return to top"
              aria-label="Return to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Technical Sub-line */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-600 gap-2">
          <span>HOST: CHENNAI_NODE [12.9602° N, 80.0573° E]</span>
          <span>SYSTEM ARCHITECTURE: REACT + TS + TAILWIND</span>
          <span>STATUS: ONLINE &amp; CALIBRATED</span>
        </div>
      </div>
    </footer>
  );
};
