import React from 'react';
import { Compass, Award, Radio, Terminal, Code2, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import { JOURNEY_ITEMS, LEETCODE_CONFIG } from '../../data/journey';

export const EngineeringJourney: React.FC = () => {
  return (
    <section id="journey" className="py-24 bg-obsidian-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-circuit-cyan/10 border border-circuit-cyan/30 text-circuit-cyan">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-circuit-cyan tracking-wider">SECTION // 04</span>
              <span className="text-slate-600 font-mono">•</span>
              <span className="text-xs font-mono text-slate-400">CREDENTIALS &amp; MILESTONES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              ENGINEERING JOURNEY
            </h2>
          </div>
        </div>

        <p className="text-slate-400 max-w-2xl text-sm sm:text-base mb-12">
          Academic progression, practical space technology exposure, government wireless communication licensing, and disciplined algorithmic practice.
        </p>

        {/* Journey Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* Card 1: Internship / Space Tech & Antenna Exposure */}
          <div className="p-6 bg-obsidian-900 border border-slate-800 hover:border-circuit-cyan/50 rounded-2xl shadow-xl flex flex-col justify-between font-mono transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs border-b border-slate-800/80 pb-3">
                <span className="px-2 py-0.5 rounded bg-circuit-cyan/15 text-circuit-cyan font-bold border border-circuit-cyan/30">
                  INTERNSHIP / EXPOSURE
                </span>
                <span className="text-slate-500 text-[10px]">PRACTICAL TRACK</span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white font-sans">
                  Space Technology &amp; Antenna Design
                </h3>
                <p className="text-xs text-circuit-cyan mt-0.5">
                  Technical Internship &amp; Exposure
                </p>
              </div>

              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                Practical exposure to space communication sub-systems, orbital RF payload telemetry links, and electromagnetic antenna modeling using CST Studio Suite. Focused on conformal geometry, radiation patterns, and link budget fundamentals.
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {["Space Tech", "Antenna Modeling", "CST Studio Suite", "RF Links"].map((b, i) => (
                  <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-obsidian-950 text-slate-400 border border-slate-800">
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
              <span className="text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>PRACTICAL EXPOSURE</span>
              </span>
              <span>RF SIMULATION</span>
            </div>
          </div>

          {/* Card 2: Amateur / Ham Radio License Holder */}
          <div className="p-6 bg-obsidian-900 border border-slate-800 hover:border-circuit-amber/50 rounded-2xl shadow-xl flex flex-col justify-between font-mono transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs border-b border-slate-800/80 pb-3">
                <span className="px-2 py-0.5 rounded bg-circuit-amber/15 text-circuit-amber font-bold border border-circuit-amber/30">
                  CREDENTIAL / LICENSE
                </span>
                <span className="text-slate-500 text-[10px]">GOVT CERTIFIED</span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white font-sans">
                  Amateur / Ham Radio License Holder
                </h3>
                <p className="text-xs text-circuit-amber mt-0.5">
                  Wireless Planning &amp; Coordination (WPC)
                </p>
              </div>

              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                Officially licensed amateur radio operator authorized to transmit and experiment across designated amateur radio frequency bands. Practiced radio wave propagation, transceiver tuning, modulation techniques, and emergency communications.
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {["Ham Radio", "RF Spectrum", "Propagation", "VHF / UHF"].map((b, i) => (
                  <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-obsidian-950 text-slate-400 border border-slate-800">
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
              <span className="text-circuit-amber font-semibold">
                LICENSED HAM OPERATOR
              </span>
              <span>RADIO PROTOCOLS</span>
            </div>
          </div>

          {/* Card 3: LeetCode Problem Solving (with configurable placeholders) */}
          <div className="p-6 bg-obsidian-900 border border-slate-800 hover:border-circuit-purple/50 rounded-2xl shadow-xl flex flex-col justify-between font-mono transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs border-b border-slate-800/80 pb-3">
                <span className="px-2 py-0.5 rounded bg-circuit-purple/15 text-circuit-purple font-bold border border-circuit-purple/30">
                  ALGORITHMS &amp; CODING
                </span>
                <span className="text-slate-500 text-[10px]">LEETCODE</span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white font-sans">
                  Problem Solving &amp; Data Structures
                </h3>
                <p className="text-xs text-circuit-purple mt-0.5">
                  Handle: {LEETCODE_CONFIG.username}
                </p>
              </div>

              {/* Editable Placeholder Blocks */}
              <div className="grid grid-cols-2 gap-2 my-2">
                <div className="p-3 bg-obsidian-950 border border-dashed border-amber-500/40 rounded-lg text-center">
                  <span className="text-[10px] text-slate-400 block">SOLVED PROBLEMS</span>
                  <span className="text-xs font-bold text-amber-300 mt-1 block">
                    {LEETCODE_CONFIG.solvedCountPlaceholder}
                  </span>
                </div>
                <div className="p-3 bg-obsidian-950 border border-dashed border-amber-500/40 rounded-lg text-center">
                  <span className="text-[10px] text-slate-400 block">CODING STREAK</span>
                  <span className="text-xs font-bold text-amber-300 mt-1 block">
                    {LEETCODE_CONFIG.streakDaysPlaceholder}
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                Practicing arrays, two pointers, graphs, binary search, and dynamic programming in Python &amp; Java to reinforce core CS problem-solving rigour.
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between">
              <a
                href={LEETCODE_CONFIG.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-circuit-purple hover:text-violet-300 font-bold transition-colors"
              >
                <span>VIEW LEETCODE PROFILE</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="text-[10px] text-slate-500">CONTINUOUS</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
