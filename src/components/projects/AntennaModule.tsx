import React, { useState } from 'react';
import { Radio, Activity, Waves, Sliders, ExternalLink, HelpCircle } from 'lucide-react';
import { ProjectDetail } from '../../types/portfolio';

interface AntennaModuleProps {
  project: ProjectDetail;
  onOpenDetails: () => void;
}

export const AntennaModule: React.FC<AntennaModuleProps> = ({ project, onOpenDetails }) => {
  const [freq, setFreq] = useState<number>(433.5);
  const [showWaves, setShowWaves] = useState<boolean>(true);

  // Calculate return loss S11 based on frequency offset from 433.5 MHz
  const delta = Math.abs(freq - 433.5);
  const s11 = delta < 0.1 ? -18.4 : Math.max(-28 + delta * 2.2, -4.5);
  const vswr = (1 + Math.pow(10, s11 / 20)) / (1 - Math.pow(10, s11 / 20));

  return (
    <div id="helmet-antenna" className="p-6 bg-obsidian-900 border border-slate-700/80 rounded-2xl shadow-2xl relative overflow-hidden font-mono group">
      {/* Corner accents */}
      <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-circuit-amber" />
      <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t-2 border-r-2 border-circuit-amber" />

      {/* Module Title & Category */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-4">
        <div className="flex items-center gap-2.5">
          <span className="px-2 py-0.5 rounded bg-circuit-amber/20 text-circuit-amber text-xs font-bold border border-circuit-amber/40">
            MODULE 03
          </span>
          <span className="text-xs text-slate-400">RF // CST SIMULATION &amp; CONFORMAL DESIGN</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="w-2 h-2 rounded-full bg-circuit-amber animate-pulse" />
          <span className="text-circuit-amber font-bold">
            TARGET: 433.5 MHz ISM BAND
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left: Project Context & Concepts */}
        <div className="lg:col-span-6 space-y-4">
          <div>
            <h3 className="text-2xl font-bold text-white font-sans tracking-tight">
              Helmet-Mounted Conformal Antenna
            </h3>
            <p className="text-xs text-circuit-amber mt-1">
              HELMET ➔ CONFORMAL ANTENNA ➔ 433.5 MHz ➔ CST SIMULATION ➔ S11 / VSWR
            </p>
          </div>

          <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed">
            {project.problem}
          </p>

          <p className="text-slate-400 text-xs font-sans leading-relaxed">
            {project.approach}
          </p>

          {/* Academic Integrity Note */}
          <div className="p-3 bg-amber-950/20 border border-amber-500/30 rounded-xl text-xs text-amber-200/90 leading-relaxed">
            <span className="font-bold text-amber-400 block mb-0.5">ENGINEERING NOTE // SIMULATION IN PROGRESS:</span>
            Antenna structure is actively simulated and iteratively tuned in CST Studio Suite towards the 433.5 MHz band. VSWR and impedance matching account for curved dielectric loading; ongoing optimization for human body proximity.
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => setShowWaves(!showWaves)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-circuit-amber text-obsidian-950 font-bold text-xs hover:bg-amber-300 transition-all shadow-[0_0_15px_rgba(245,158,11,0.3)]"
            >
              <Waves className="w-3.5 h-3.5" />
              <span>{showWaves ? 'HIDE RF RADIATION FIELD' : 'SHOW RF RADIATION FIELD'}</span>
            </button>

            <button
              onClick={onOpenDetails}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-obsidian-850 hover:bg-obsidian-800 text-slate-200 border border-slate-700 hover:border-circuit-amber/50 text-xs transition-colors"
            >
              <span>TECHNICAL CASE STUDY</span>
            </button>
          </div>
        </div>

        {/* Right: Technical Helmet Antenna Visual & S11 Response */}
        <div className="lg:col-span-6 bg-obsidian-950 p-4 rounded-xl border border-slate-800/90 shadow-inner space-y-4">
          
          {/* Visual Header */}
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-2 text-xs">
            <div className="flex items-center gap-2">
              <Radio className="w-4 h-4 text-circuit-amber" />
              <span className="text-slate-200 font-bold">CST_ELECTROMAGNETIC_MODEL</span>
            </div>
            <span className="text-slate-400 text-[10px]">SOLVER: FIT TIME DOMAIN</span>
          </div>

          {/* Futuristic Helmet Silhouette with Conformal Meander Trace SVG */}
          <div className="relative h-48 w-full bg-obsidian-900 rounded-lg border border-slate-800 p-2 flex items-center justify-center overflow-hidden">
            <svg className="w-full h-full max-h-44" viewBox="0 0 320 180">
              <defs>
                {/* Radiation wave pulse gradient */}
                <radialGradient id="rfPulse" cx="60%" cy="40%" r="50%">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Electromagnetic Wavefronts emitted from antenna */}
              {showWaves && (
                <g opacity="0.6">
                  <circle cx="160" cy="70" r="45" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4 4" className="animate-ping" style={{ animationDuration: '3s' }} />
                  <circle cx="160" cy="70" r="75" fill="none" stroke="#f59e0b" strokeWidth="1.2" opacity="0.4" />
                  <circle cx="160" cy="70" r="105" fill="none" stroke="#f59e0b" strokeWidth="0.8" opacity="0.25" />
                </g>
              )}

              {/* Helmet Shell Outline (Futuristic profile) */}
              <path
                d="M 90 145 C 70 120 70 75 110 50 C 150 28 210 32 240 65 C 265 92 255 130 240 145 C 215 155 170 152 155 150 C 130 150 100 150 90 145 Z"
                fill="#0d1424"
                stroke="#334155"
                strokeWidth="2.5"
              />

              {/* Helmet Visor */}
              <path
                d="M 190 75 C 220 82 245 100 240 125 L 180 125 C 170 105 175 85 190 75 Z"
                fill="#0284c7"
                opacity="0.3"
                stroke="#38bdf8"
                strokeWidth="1.5"
              />

              {/* Conformal Meandered Antenna Trace (along upper helmet curvature) */}
              <g stroke="#f59e0b" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                {/* Meander structure conforming to curved dielectric profile */}
                <path d="M 120 52 L 125 45 L 132 55 L 140 44 L 148 56 L 157 43 L 166 57 L 176 44 L 186 58 L 195 46 L 204 59 L 212 49 L 220 60" />
                {/* Feed point connection */}
                <circle cx="120" cy="52" r="3.5" fill="#f59e0b" />
                <circle cx="220" cy="60" r="3.5" fill="#f59e0b" />
              </g>

              {/* Annotation labels */}
              <text x="170" y="32" fill="#f59e0b" fontSize="8" textAnchor="middle" fontFamily="monospace">
                CONFORMAL MEANDER (λ/4 RESONANT TRACE)
              </text>
              <text x="120" y="165" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="monospace">
                DIELECTRIC SHELL (εr = 3.0)
              </text>
            </svg>
          </div>

          {/* Interactive Frequency Tuning Slider */}
          <div className="space-y-1.5 p-3 bg-obsidian-900 rounded-lg border border-slate-800">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400 flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-circuit-amber" />
                <span>FREQUENCY TUNING:</span>
              </span>
              <span className="font-bold text-circuit-amber">{freq.toFixed(1)} MHz</span>
            </div>
            <input
              type="range"
              min="400"
              max="460"
              step="0.5"
              value={freq}
              onChange={(e) => setFreq(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
            <div className="flex justify-between text-[9px] text-slate-500">
              <span>400.0 MHz</span>
              <span className="text-circuit-amber font-semibold">TARGET: 433.5 MHz</span>
              <span>460.0 MHz</span>
            </div>
          </div>

          {/* RF Return Loss & Matching Telemetry */}
          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="p-2 bg-obsidian-900 border border-slate-800 rounded">
              <span className="text-[10px] text-slate-500 block">S11 RETURN LOSS</span>
              <span className={`font-bold ${s11 < -10 ? 'text-emerald-400' : 'text-amber-400'}`}>
                {s11.toFixed(1)} dB
              </span>
            </div>

            <div className="p-2 bg-obsidian-900 border border-slate-800 rounded">
              <span className="text-[10px] text-slate-500 block">VSWR RATIO</span>
              <span className={`font-bold ${vswr < 2.0 ? 'text-emerald-400' : 'text-amber-400'}`}>
                {vswr.toFixed(2)} : 1
              </span>
            </div>

            <div className="p-2 bg-obsidian-900 border border-slate-800 rounded">
              <span className="text-[10px] text-slate-500 block">BANDWIDTH</span>
              <span className="font-bold text-slate-200">
                ~12.4 MHz
              </span>
            </div>
          </div>

          {/* Footer note */}
          <div className="flex justify-between items-center text-[10px] text-slate-500 pt-1">
            <span>PORT IMPEDANCE: 50 Ω UNBALANCED</span>
            <span className="text-circuit-amber">FAR-FIELD POLAR: QUASI-OMNI</span>
          </div>

        </div>
      </div>
    </div>
  );
};
