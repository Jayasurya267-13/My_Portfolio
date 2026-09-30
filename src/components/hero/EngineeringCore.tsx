import React, { useState } from 'react';
import { Cpu, Zap, Radio, GitBranch, ArrowDown, Activity, ChevronRight } from 'lucide-react';

interface EngineeringCoreProps {
  onSelectProject?: (projectId: string) => void;
}

export const EngineeringCore: React.FC<EngineeringCoreProps> = ({ onSelectProject }) => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const handleNodeClick = (target: string) => {
    if (target === 'esa' || target === 'helmet-antenna' || target === 'q-route') {
      if (onSelectProject) {
        onSelectProject(target);
      }
      const el = document.getElementById(target) || document.getElementById('projects');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (target === 'vlsi' || target === 'hardware' || target === 'software') {
      const el = document.getElementById('skills');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto my-8 p-4 sm:p-6 bg-obsidian-900/60 border border-slate-800 rounded-2xl backdrop-blur-md shadow-2xl overflow-hidden font-mono">
      {/* Background circuit grid */}
      <div className="absolute inset-0 circuit-grid-fine opacity-40 pointer-events-none" />
      
      {/* Top Telemetry Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3 mb-6 text-[11px] text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-circuit-cyan animate-pulse"></span>
          <span className="text-slate-200 font-semibold tracking-wider">SYSTEM_TOPOLOGY // ARCHITECTURE_MAP</span>
        </div>
        <div className="flex items-center gap-4 text-[10px]">
          <span className="text-slate-500">CLK: 50.0 MHz</span>
          <span className="text-slate-500">BUS: AXI4-LITE</span>
          <span className="text-circuit-cyan">STATUS: NOMINAL</span>
        </div>
      </div>

      {/* Interactive Core Architecture Visualizer */}
      <div className="relative flex flex-col items-center justify-center">

        {/* 1. CENTRAL SILICON CHIP NODE */}
        <div 
          onClick={() => setActiveNode('chip')}
          onMouseEnter={() => setActiveNode('chip')}
          className={`relative z-20 group cursor-pointer transition-all duration-300 p-4 sm:p-5 rounded-xl border ${
            activeNode === 'chip' 
              ? 'bg-obsidian-850 border-circuit-cyan shadow-[0_0_30px_rgba(0,240,255,0.3)] scale-105' 
              : 'bg-obsidian-900/90 border-slate-700 hover:border-circuit-cyan/70'
          }`}
        >
          {/* Simulated Chip Pins Top & Bottom */}
          <div className="absolute -top-2 left-4 right-4 flex justify-between pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="w-1.5 h-2 bg-slate-600 rounded-t-sm group-hover:bg-circuit-cyan transition-colors" />
            ))}
          </div>
          <div className="absolute -bottom-2 left-4 right-4 flex justify-between pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="w-1.5 h-2 bg-slate-600 rounded-b-sm group-hover:bg-circuit-cyan transition-colors" />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-circuit-cyan/10 border border-circuit-cyan/40 text-circuit-cyan">
              <Cpu className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm sm:text-base text-slate-100 tracking-wider">CHIP / RTL CORE</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-circuit-cyan/20 text-circuit-cyan border border-circuit-cyan/40">
                  ROOT
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Digital Logic • Register-Transfer Level • Silicon Architecture
              </p>
            </div>
          </div>
        </div>

        {/* SVG Animated Bus Traces (Connecting Core to Branches) */}
        <div className="w-full h-16 sm:h-20 relative my-1">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 600 80">
            <defs>
              <linearGradient id="gradCyan" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#00f0ff" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="gradAmber" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="gradPurple" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
              </linearGradient>
            </defs>

            {/* Central stem */}
            <line x1="300" y1="0" x2="300" y2="35" stroke="#334155" strokeWidth="2" />
            <line x1="300" y1="0" x2="300" y2="35" stroke="#00f0ff" strokeWidth="2" className="circuit-animated-line opacity-80" />

            {/* Left branch: VLSI */}
            <path d="M 300 35 L 100 35 L 100 80" fill="none" stroke="#334155" strokeWidth="2" />
            <path d="M 300 35 L 100 35 L 100 80" fill="none" stroke="#00f0ff" strokeWidth="2" className="circuit-animated-line" />

            {/* Center branch: HARDWARE */}
            <line x1="300" y1="35" x2="300" y2="80" stroke="#334155" strokeWidth="2" />
            <line x1="300" y1="35" x2="300" y2="80" stroke="#f59e0b" strokeWidth="2" className="circuit-animated-line" />

            {/* Right branch: SOFTWARE */}
            <path d="M 300 35 L 500 35 L 500 80" fill="none" stroke="#334155" strokeWidth="2" />
            <path d="M 300 35 L 500 35 L 500 80" fill="none" stroke="#8b5cf6" strokeWidth="2" className="circuit-animated-line" />

            {/* Bus junction node */}
            <circle cx="300" cy="35" r="4" fill="#00f0ff" className="animate-ping" />
            <circle cx="300" cy="35" r="3" fill="#ffffff" />
          </svg>
        </div>

        {/* 2. THREE PRIMARY DOMAINS (VLSI | HARDWARE | SOFTWARE) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 w-full relative z-20">

          {/* DOMAIN 1: VLSI */}
          <div 
            onClick={() => handleNodeClick('vlsi')}
            onMouseEnter={() => setActiveNode('vlsi')}
            className={`p-3 sm:p-4 rounded-xl border cursor-pointer transition-all duration-300 text-left ${
              activeNode === 'vlsi'
                ? 'bg-circuit-cyan/10 border-circuit-cyan shadow-[0_0_20px_rgba(0,240,255,0.25)]'
                : 'bg-obsidian-850/80 border-slate-800 hover:border-circuit-cyan/50'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] text-circuit-cyan font-bold tracking-wider">DOMAIN 01</span>
              <Activity className="w-3.5 h-3.5 text-circuit-cyan" />
            </div>
            <h4 className="text-sm font-bold text-slate-100 flex items-center gap-1.5">
              <span>VLSI / DIGITAL</span>
            </h4>
            <p className="text-[11px] text-slate-400 mt-1">
              Verilog HDL • Vivado • RTL Synthesis • Digital Logic
            </p>
          </div>

          {/* DOMAIN 2: HARDWARE */}
          <div 
            onClick={() => handleNodeClick('hardware')}
            onMouseEnter={() => setActiveNode('hardware')}
            className={`p-3 sm:p-4 rounded-xl border cursor-pointer transition-all duration-300 text-left ${
              activeNode === 'hardware'
                ? 'bg-circuit-amber/10 border-circuit-amber shadow-[0_0_20px_rgba(245,158,11,0.25)]'
                : 'bg-obsidian-850/80 border-slate-800 hover:border-circuit-amber/50'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] text-circuit-amber font-bold tracking-wider">DOMAIN 02</span>
              <Radio className="w-3.5 h-3.5 text-circuit-amber" />
            </div>
            <h4 className="text-sm font-bold text-slate-100 flex items-center gap-1.5">
              <span>HARDWARE / RF</span>
            </h4>
            <p className="text-[11px] text-slate-400 mt-1">
              ESP32 • Arduino • Embedded Systems • CST Antenna
            </p>
          </div>

          {/* DOMAIN 3: SOFTWARE */}
          <div 
            onClick={() => handleNodeClick('software')}
            onMouseEnter={() => setActiveNode('software')}
            className={`p-3 sm:p-4 rounded-xl border cursor-pointer transition-all duration-300 text-left ${
              activeNode === 'software'
                ? 'bg-circuit-purple/10 border-circuit-purple shadow-[0_0_20px_rgba(139,92,246,0.25)]'
                : 'bg-obsidian-850/80 border-slate-800 hover:border-circuit-purple/50'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] text-circuit-purple font-bold tracking-wider">DOMAIN 03</span>
              <GitBranch className="w-3.5 h-3.5 text-circuit-purple" />
            </div>
            <h4 className="text-sm font-bold text-slate-100 flex items-center gap-1.5">
              <span>SOFTWARE / AI</span>
            </h4>
            <p className="text-[11px] text-slate-400 mt-1">
              Python • Java • QPSO Optimization • Web Telemetry
            </p>
          </div>
        </div>

        {/* Downward Bus Traces (Connecting Domains to Projects) */}
        <div className="w-full h-12 relative my-1 hidden md:block">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 600 48">
            <line x1="100" y1="0" x2="100" y2="48" stroke="#00f0ff" strokeWidth="2" className="circuit-animated-line" />
            <line x1="300" y1="0" x2="300" y2="48" stroke="#f59e0b" strokeWidth="2" className="circuit-animated-line" />
            <line x1="500" y1="0" x2="500" y2="48" stroke="#8b5cf6" strokeWidth="2" className="circuit-animated-line" />
          </svg>
        </div>

        {/* 3. THREE CONNECTED FLAGSHIP PROJECT MODULES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 w-full mt-2 relative z-20">

          {/* PROJECT MODULE 1: ESA */}
          <div
            onClick={() => handleNodeClick('esa')}
            onMouseEnter={() => setActiveNode('esa')}
            className={`p-3.5 sm:p-4 rounded-xl border cursor-pointer transition-all duration-300 text-left relative overflow-hidden group ${
              activeNode === 'esa'
                ? 'bg-obsidian-850 border-circuit-cyan shadow-[0_0_25px_rgba(0,240,255,0.3)]'
                : 'bg-obsidian-900/90 border-slate-800/90 hover:border-circuit-cyan/70'
            }`}
          >
            <div className="flex items-center justify-between text-[10px] mb-1">
              <span className="px-1.5 py-0.5 rounded bg-circuit-cyan/15 text-circuit-cyan border border-circuit-cyan/30">
                MODULE 01
              </span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                ACTIVE
              </span>
            </div>
            <h5 className="font-bold text-slate-100 text-sm group-hover:text-circuit-cyan transition-colors">
              ESA
            </h5>
            <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-2">
              Edge AI-Based Predictive Maintenance System with live sensor telemetry.
            </p>
            <div className="mt-3 flex items-center justify-between text-[10px] text-circuit-cyan font-mono border-t border-slate-800/80 pt-2">
              <span>EXPLORE MODULE</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* PROJECT MODULE 2: HELMET ANTENNA */}
          <div
            onClick={() => handleNodeClick('helmet-antenna')}
            onMouseEnter={() => setActiveNode('helmet-antenna')}
            className={`p-3.5 sm:p-4 rounded-xl border cursor-pointer transition-all duration-300 text-left relative overflow-hidden group ${
              activeNode === 'helmet-antenna'
                ? 'bg-obsidian-850 border-circuit-amber shadow-[0_0_25px_rgba(245,158,11,0.3)]'
                : 'bg-obsidian-900/90 border-slate-800/90 hover:border-circuit-amber/70'
            }`}
          >
            <div className="flex items-center justify-between text-[10px] mb-1">
              <span className="px-1.5 py-0.5 rounded bg-circuit-amber/15 text-circuit-amber border border-circuit-amber/30">
                MODULE 02
              </span>
              <span className="text-circuit-amber flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-circuit-amber animate-pulse"></span>
                433.5 MHz
              </span>
            </div>
            <h5 className="font-bold text-slate-100 text-sm group-hover:text-circuit-amber transition-colors">
              HELMET ANTENNA
            </h5>
            <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-2">
              Compact conformal meandered antenna simulated in CST Studio Suite.
            </p>
            <div className="mt-3 flex items-center justify-between text-[10px] text-circuit-amber font-mono border-t border-slate-800/80 pt-2">
              <span>EXPLORE MODULE</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* PROJECT MODULE 3: Q-ROUTE */}
          <div
            onClick={() => handleNodeClick('q-route')}
            onMouseEnter={() => setActiveNode('q-route')}
            className={`p-3.5 sm:p-4 rounded-xl border cursor-pointer transition-all duration-300 text-left relative overflow-hidden group ${
              activeNode === 'q-route'
                ? 'bg-obsidian-850 border-circuit-purple shadow-[0_0_25px_rgba(139,92,246,0.3)]'
                : 'bg-obsidian-900/90 border-slate-800/90 hover:border-circuit-purple/70'
            }`}
          >
            <div className="flex items-center justify-between text-[10px] mb-1">
              <span className="px-1.5 py-0.5 rounded bg-circuit-purple/15 text-circuit-purple border border-circuit-purple/30">
                MODULE 03
              </span>
              <span className="text-circuit-purple flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-circuit-purple animate-pulse"></span>
                QPSO
              </span>
            </div>
            <h5 className="font-bold text-slate-100 text-sm group-hover:text-circuit-purple transition-colors">
              Q-ROUTE
            </h5>
            <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-2">
              Quantum-inspired multi-vehicle intelligent route optimization.
            </p>
            <div className="mt-3 flex items-center justify-between text-[10px] text-circuit-purple font-mono border-t border-slate-800/80 pt-2">
              <span>EXPLORE MODULE</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

      </div>

      {/* Interactive Helper Hint */}
      <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
        <span className="flex items-center gap-1.5">
          <span className="text-circuit-cyan">ℹ</span>
          <span>Click any node or module to inspect linked subsystem</span>
        </span>
        <span className="text-slate-400 font-bold hidden sm:inline">FROM SILICON TO SYSTEMS</span>
      </div>
    </div>
  );
};
