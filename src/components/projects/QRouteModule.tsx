import React, { useState } from 'react';
import { GitFork, Activity, Shuffle, MapPin, Zap, RefreshCw, Layers } from 'lucide-react';
import { ProjectDetail } from '../../types/portfolio';

interface QRouteModuleProps {
  project: ProjectDetail;
  onOpenDetails: () => void;
}

export const QRouteModule: React.FC<QRouteModuleProps> = ({ project, onOpenDetails }) => {
  const [isCongested, setIsCongested] = useState(false);
  const [activeOptimizer, setActiveOptimizer] = useState<'standard' | 'qpso'>('qpso');

  const toggleCongestion = () => {
    setIsCongested(!isCongested);
  };

  return (
    <div id="q-route" className="p-6 bg-obsidian-900 border border-slate-700/80 rounded-2xl shadow-2xl relative overflow-hidden font-mono group">
      {/* Corner accents */}
      <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-circuit-purple" />
      <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t-2 border-r-2 border-circuit-purple" />

      {/* Module Title & Category */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-4">
        <div className="flex items-center gap-2.5">
          <span className="px-2 py-0.5 rounded bg-circuit-purple/20 text-circuit-purple text-xs font-bold border border-circuit-purple/40">
            MODULE 02
          </span>
          <span className="text-xs text-slate-400">AI // QUANTUM-INSPIRED OPTIMIZATION</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="w-2 h-2 rounded-full bg-circuit-purple animate-pulse" />
          <span className="text-circuit-purple font-bold">
            ALGORITHM: QPSO // MULTI-OBJECTIVE
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left: Project Context & Concepts */}
        <div className="lg:col-span-6 space-y-4">
          <div>
            <h3 className="text-2xl font-bold text-white font-sans tracking-tight">
              Q-ROUTE: Quantum-Inspired Traffic Optimization
            </h3>
            <p className="text-xs text-circuit-purple mt-1">
              Multi-Vehicle Routing • Dynamic Congestion Intelligence • Stochastic Quantum Delta-Well
            </p>
          </div>

          <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed">
            {project.problem}
          </p>

          <p className="text-slate-400 text-xs font-sans leading-relaxed">
            {project.approach}
          </p>

          {/* Technical Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {["AI", "OPTIMIZATION", "TRAFFIC", "VRP", "QPSO", "DYNAMIC ROUTING"].map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 rounded bg-circuit-purple/10 text-circuit-purple border border-circuit-purple/30 font-mono font-bold"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <button
              onClick={toggleCongestion}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold transition-all border ${
                isCongested
                  ? 'bg-rose-950/80 border-rose-500 text-rose-300 hover:bg-rose-900 shadow-[0_0_15px_rgba(244,63,94,0.3)]'
                  : 'bg-circuit-purple text-obsidian-950 font-bold hover:bg-violet-300 shadow-[0_0_15px_rgba(139,92,246,0.3)]'
              }`}
            >
              <Shuffle className="w-3.5 h-3.5" />
              <span>{isCongested ? 'CLEAR CONGESTION BOTTLENECK' : '⚡ SIMULATE ROAD CONGESTION'}</span>
            </button>

            <button
              onClick={onOpenDetails}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-obsidian-850 hover:bg-obsidian-800 text-slate-200 border border-slate-700 hover:border-circuit-purple/50 text-xs transition-colors"
            >
              <span>TECHNICAL CASE STUDY</span>
            </button>
          </div>
        </div>

        {/* Right: Interactive Visual Traffic Map */}
        <div className="lg:col-span-6 bg-obsidian-950 p-4 rounded-xl border border-slate-800/90 shadow-inner space-y-3">
          
          {/* Map Header */}
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-2 text-xs">
            <div className="flex items-center gap-2">
              <GitFork className="w-4 h-4 text-circuit-purple" />
              <span className="text-slate-200 font-bold">DYNAMIC_TRANSIT_GRAPH</span>
            </div>
            <div className="flex items-center gap-2 text-[10px]">
              <span className="text-slate-400">VEHICLES: 12 FLEET</span>
              <span className="text-circuit-purple">ADAPTIVE_REPLAN</span>
            </div>
          </div>

          {/* Interactive SVG Road Network Graph */}
          <div className="relative h-56 w-full bg-obsidian-900/90 rounded-lg border border-slate-800 p-2 overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 400 220">
              <defs>
                <linearGradient id="purplePath" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#00f0ff" />
                </linearGradient>
              </defs>

              {/* Grid Roads (Underlying Network) */}
              <line x1="50" y1="50" x2="180" y2="50" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
              <line x1="180" y1="50" x2="350" y2="50" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
              <line x1="50" y1="50" x2="50" y2="170" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
              <line x1="50" y1="170" x2="180" y2="170" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
              <line x1="180" y1="170" x2="350" y2="170" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
              <line x1="180" y1="50" x2="180" y2="170" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
              <line x1="350" y1="50" x2="350" y2="170" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />

              {/* Main Corridor (Road Segment from (50,50) -> (180,50) -> (350,50)) */}
              {isCongested ? (
                // Congested Main Route: RED with traffic jam marker
                <g>
                  <line x1="50" y1="50" x2="180" y2="50" stroke="#ef4444" strokeWidth="4" strokeDasharray="4 2" />
                  <line x1="180" y1="50" x2="350" y2="50" stroke="#ef4444" strokeWidth="4" strokeDasharray="4 2" />
                  {/* Congestion warning label */}
                  <rect x="130" y="32" width="100" height="18" rx="4" fill="#450a0a" stroke="#ef4444" strokeWidth="1" />
                  <text x="180" y="44" fill="#fca5a5" fontSize="8" textAnchor="middle" fontFamily="monospace">BOTTLENECK JAM</text>
                  
                  {/* Quantum Alternate Route dynamically highlighted in Purple/Cyan: (50,50) -> (50,170) -> (350,170) -> (350,50) */}
                  <path
                    d="M 50 50 L 50 170 L 350 170 L 350 50"
                    fill="none"
                    stroke="url(#purplePath)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="circuit-animated-line"
                  />
                  <rect x="150" y="180" width="160" height="18" rx="4" fill="#2e1065" stroke="#8b5cf6" strokeWidth="1" />
                  <text x="230" y="192" fill="#c4b5fd" fontSize="8" textAnchor="middle" fontFamily="monospace">QPSO ADAPTIVE BYPASS (-34% TIME)</text>
                </g>
              ) : (
                // Normal Optimal Route: Green/Cyan
                <g>
                  <path
                    d="M 50 50 L 180 50 L 350 50"
                    fill="none"
                    stroke="#00f0ff"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="circuit-animated-line"
                  />
                  <rect x="140" y="28" width="130" height="16" rx="4" fill="#082f49" stroke="#00f0ff" strokeWidth="1" />
                  <text x="205" y="39" fill="#7dd3fc" fontSize="8" textAnchor="middle" fontFamily="monospace">DIRECT NOMINAL ROUTE</text>
                </g>
              )}

              {/* Intersections (Graph Nodes) */}
              {[
                { x: 50, y: 50, label: "ORIGIN [A]" },
                { x: 180, y: 50, label: "NODE [B]" },
                { x: 350, y: 50, label: "DEST [C]" },
                { x: 50, y: 170, label: "NODE [D]" },
                { x: 180, y: 170, label: "NODE [E]" },
                { x: 350, y: 170, label: "NODE [F]" },
              ].map((node, i) => (
                <g key={i}>
                  <circle cx={node.x} cy={node.y} r="7" fill="#0f172a" stroke="#475569" strokeWidth="2" />
                  <circle cx={node.x} cy={node.y} r="3" fill={node.label.includes('ORIGIN') ? '#00f0ff' : node.label.includes('DEST') ? '#10b981' : '#8b5cf6'} />
                  <text x={node.x} y={node.y > 100 ? node.y + 18 : node.y - 10} fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="monospace">
                    {node.label}
                  </text>
                </g>
              ))}

              {/* Traffic Signals at Nodes */}
              <circle cx="180" cy="65" r="3" fill={isCongested ? "#ef4444" : "#10b981"} />
            </svg>
          </div>

          {/* Routing Metrics Comparison */}
          <div className="grid grid-cols-2 gap-2 text-center text-xs">
            <div className="p-2 bg-obsidian-900 border border-slate-800 rounded">
              <span className="text-[10px] text-slate-500 block">STANDARD GREEDY ROUTE</span>
              <span className={`font-bold ${isCongested ? 'text-rose-400' : 'text-slate-300'}`}>
                {isCongested ? '48.2 mins (Congested)' : '16.5 mins'}
              </span>
            </div>

            <div className="p-2 bg-obsidian-900 border border-circuit-purple/40 rounded">
              <span className="text-[10px] text-circuit-purple block">QPSO ADAPTED ROUTE</span>
              <span className="font-bold text-circuit-cyan">
                {isCongested ? '22.4 mins (-53% delay)' : '16.5 mins'}
              </span>
            </div>
          </div>

          {/* Algorithm status */}
          <div className="flex justify-between items-center text-[10px] text-slate-500 pt-1">
            <span>DELTA-POTENTIAL WELL MODEL</span>
            <span className="text-circuit-purple">CONVERGENCE: ITERATION 42</span>
          </div>

        </div>
      </div>
    </div>
  );
};
