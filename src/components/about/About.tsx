import React from 'react';
import { User, Terminal } from 'lucide-react';
import { SYSTEM_SPECS } from '../../data/config';
import { ProfileHUD } from './ProfileHUD';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-obsidian-950/90 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 rounded-lg bg-circuit-cyan/10 border border-circuit-cyan/30 text-circuit-cyan">
            <User className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-circuit-cyan tracking-wider">SECTION // 01</span>
              <span className="text-slate-600 font-mono">•</span>
              <span className="text-xs font-mono text-slate-400">ENGINEERING PROFILE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              ABOUT / SYSTEM PROFILE
            </h2>
          </div>
        </div>

        {/* Split Layout: Photo HUD (Left) & Profile Narrative (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Photo HUD */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <ProfileHUD />
            
            {/* Quick Core Tagline */}
            <div className="mt-4 w-full max-w-sm p-3 bg-obsidian-900 border border-slate-800 rounded-xl text-center font-mono text-xs text-slate-400">
              <span className="text-circuit-cyan font-semibold">CORE PHILOSOPHY:</span> "From Silicon to Systems."
            </div>
          </div>

          {/* Right Column: Narrative & Technical Identity Panel */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* System Narrative Text */}
            <div className="p-6 bg-obsidian-900/80 border border-slate-800 rounded-2xl backdrop-blur-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs font-mono text-slate-400">
                <span className="text-circuit-cyan">BIOGRAPHY // ECE_DISCIPLINE</span>
                <span>STATUS: ACTIVE_UNDERGRAD</span>
              </div>

              <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
                I am <span className="text-circuit-cyan font-semibold">Jayasurya R</span>, a third-year Electronics and Communication Engineering student at <span className="text-slate-100 font-medium">Sri Sai Ram Institute Of Technology</span>. My interests span VLSI design, embedded systems, IoT, AI and software development.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I enjoy building projects that connect hardware intelligence with software-driven solutions. My current focus is developing practical engineering systems while strengthening my foundations in digital design, RTL, embedded platforms, AI and software development.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  #DigitalDesign
                </span>
                <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  #VerilogHDL
                </span>
                <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  #ESP32_IoT
                </span>
                <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  #EdgeAI
                </span>
                <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  #AntennaRF
                </span>
              </div>
            </div>

            {/* Technical Identity Panel */}
            <div className="p-6 bg-obsidian-900/90 border border-circuit-cyan/20 rounded-2xl shadow-xl font-mono">
              <div className="flex items-center gap-2 mb-4 text-xs text-circuit-cyan font-bold tracking-wider">
                <Terminal className="w-4 h-4" />
                <span>TECHNICAL_IDENTITY_MATRIX</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SYSTEM_SPECS.map((spec, i) => (
                  <div key={i} className="p-3 bg-obsidian-950 border border-slate-800 rounded-lg">
                    <span className="text-[10px] text-slate-400 block tracking-wider">{spec.label}</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-200 mt-0.5 block truncate">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
