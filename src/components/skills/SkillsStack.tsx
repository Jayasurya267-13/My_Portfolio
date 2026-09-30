import React, { useState } from 'react';
import { Layers, Cpu, Radio, Code2, Terminal, CheckCircle2, ChevronRight, Activity } from 'lucide-react';
import { SKILL_BLOCKS } from '../../data/skills';
import { SkillItem } from '../../types/portfolio';

export const SkillsStack: React.FC = () => {
  const [activeBlockId, setActiveBlockId] = useState<string>('vlsi');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(SKILL_BLOCKS[0].skills[0]);

  const currentBlock = SKILL_BLOCKS.find(b => b.id === activeBlockId) || SKILL_BLOCKS[0];

  return (
    <section id="skills" className="py-24 bg-obsidian-950 circuit-grid-bg relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-circuit-cyan/10 border border-circuit-cyan/30 text-circuit-cyan">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-circuit-cyan tracking-wider">SECTION // 02</span>
              <span className="text-slate-600 font-mono">•</span>
              <span className="text-xs font-mono text-slate-400">TECHNICAL CAPABILITIES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              ENGINEERING STACK
            </h2>
          </div>
        </div>

        <p className="text-slate-400 max-w-2xl text-sm sm:text-base mb-10">
          Structured into three primary technological disciplines: Silicon/Digital RTL, Embedded &amp; RF Hardware, and Algorithmic Software &amp; AI.
        </p>

        {/* Block Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {SKILL_BLOCKS.map((block) => {
            const isActive = activeBlockId === block.id;
            return (
              <button
                key={block.id}
                onClick={() => {
                  setActiveBlockId(block.id);
                  setSelectedSkill(block.skills[0]);
                }}
                className={`p-4 rounded-xl text-left transition-all border font-mono ${
                  isActive
                    ? 'bg-obsidian-900 border-circuit-cyan shadow-[0_0_20px_rgba(0,240,255,0.2)]'
                    : 'bg-obsidian-900/50 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-[10px] font-bold ${isActive ? 'text-circuit-cyan' : 'text-slate-500'}`}>
                    {block.blockNumber}
                  </span>
                  {block.id === 'vlsi' ? <Cpu className="w-4 h-4 text-circuit-cyan" /> :
                   block.id === 'hardware' ? <Radio className="w-4 h-4 text-circuit-amber" /> :
                   <Code2 className="w-4 h-4 text-circuit-purple" />}
                </div>
                <h3 className="font-bold text-sm sm:text-base text-slate-100">{block.title}</h3>
                <p className="text-xs text-slate-400 mt-1 line-clamp-1">{block.subtitle}</p>
              </button>
            );
          })}
        </div>

        {/* Detailed Block Grid & Interactive Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Skill List in Active Block */}
          <div className="lg:col-span-6 space-y-3">
            <div className="p-4 bg-obsidian-900/60 border border-slate-800 rounded-xl mb-2 text-xs font-mono text-slate-400">
              <span className="text-circuit-cyan font-semibold">{currentBlock.title}:</span> {currentBlock.description}
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              {currentBlock.skills.map((skill) => {
                const isSelected = selectedSkill.name === skill.name;
                return (
                  <div
                    key={skill.name}
                    onClick={() => setSelectedSkill(skill)}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-obsidian-850 border-circuit-cyan shadow-[0_0_15px_rgba(0,240,255,0.15)] translate-x-1'
                        : 'bg-obsidian-900/80 border-slate-800/80 hover:border-slate-700 text-slate-300'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm sm:text-base text-slate-100">{skill.name}</span>
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 font-mono">
                            {skill.visualType.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                          {skill.descriptor}
                        </p>
                      </div>
                      <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'text-circuit-cyan translate-x-0.5' : 'text-slate-600'}`} />
                    </div>

                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {skill.tags.map((tag) => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md bg-obsidian-950 text-slate-400 border border-slate-800/80 font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Interactive Engineering Visual Inspector */}
          <div className="lg:col-span-6 sticky top-24">
            <div className="p-5 bg-obsidian-900 border border-slate-700/80 rounded-2xl shadow-2xl font-mono overflow-hidden relative">
              {/* Corner accents */}
              <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-circuit-cyan" />
              <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-circuit-cyan" />

              {/* Inspector Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-circuit-cyan" />
                  <span className="text-slate-200 font-bold">SIGNAL_INSPECTOR // {selectedSkill.name.toUpperCase()}</span>
                </div>
                <span className="text-[10px] text-circuit-cyan">DIAGNOSTIC_ACTIVE</span>
              </div>

              {/* Dynamic Visual Representation Based on Type */}
              <div className="p-4 bg-obsidian-950 rounded-xl border border-slate-800/80 mb-4 min-h-[220px] flex flex-col justify-center">
                
                {/* 1. RTL / Digital Waveform Visual */}
                {(selectedSkill.visualType === 'rtl' || selectedSkill.visualType === 'logic') && (
                  <div className="space-y-3">
                    <div className="text-[10px] text-circuit-cyan flex justify-between border-b border-slate-800/60 pb-1">
                      <span>VERILOG RTL TIMING WAVEFORM</span>
                      <span>CLOCK: 100 MHz</span>
                    </div>

                    {/* Waveform SVGs */}
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center gap-3">
                        <span className="w-12 text-slate-400 text-[10px]">CLK</span>
                        <svg className="w-full h-5" preserveAspectRatio="none" viewBox="0 0 200 20">
                          <path d="M0 18 H20 V2 H40 V18 H60 V2 H80 V18 H100 V2 H120 V18 H140 V2 H160 V18 H180 V2 H200" fill="none" stroke="#00f0ff" strokeWidth="2" />
                        </svg>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="w-12 text-slate-400 text-[10px]">RESET_N</span>
                        <svg className="w-full h-5" preserveAspectRatio="none" viewBox="0 0 200 20">
                          <path d="M0 18 H30 V2 H200" fill="none" stroke="#f59e0b" strokeWidth="2" />
                        </svg>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="w-12 text-slate-400 text-[10px]">DATA_BUS</span>
                        <svg className="w-full h-5" preserveAspectRatio="none" viewBox="0 0 200 20">
                          <path d="M0 10 H40 L50 2 H110 L120 18 H170 L180 10 H200" fill="none" stroke="#8b5cf6" strokeWidth="2" />
                          <text x="75" y="14" fill="#cbd5e1" fontSize="9" textAnchor="middle">0xAA4F</text>
                          <text x="145" y="14" fill="#cbd5e1" fontSize="9" textAnchor="middle">0x8B10</text>
                        </svg>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="w-12 text-slate-400 text-[10px]">VALID</span>
                        <svg className="w-full h-5" preserveAspectRatio="none" viewBox="0 0 200 20">
                          <path d="M0 18 H50 V2 H170 V18 H200" fill="none" stroke="#10b981" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. Microcontroller / Embedded Pinout Visual */}
                {selectedSkill.visualType === 'mcu' && (
                  <div className="space-y-3">
                    <div className="text-[10px] text-circuit-amber flex justify-between border-b border-slate-800/60 pb-1">
                      <span>MCU BUS &amp; PERIPHERAL TELEMETRY</span>
                      <span>ESP32 // FREERTOS</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="p-2 bg-obsidian-900 border border-slate-800 rounded">
                        <span className="text-slate-500 text-[10px] block">GPIO_18 [VSPI_CLK]</span>
                        <span className="text-circuit-amber font-bold">20.0 MHz ACTIVE</span>
                      </div>
                      <div className="p-2 bg-obsidian-900 border border-slate-800 rounded">
                        <span className="text-slate-500 text-[10px] block">GPIO_21 [I2C_SDA]</span>
                        <span className="text-emerald-400 font-bold">ACK OK (0x68)</span>
                      </div>
                      <div className="p-2 bg-obsidian-900 border border-slate-800 rounded">
                        <span className="text-slate-500 text-[10px] block">ADC1_CH0 [VIBE_IN]</span>
                        <span className="text-circuit-cyan font-bold">12-BIT DMA STREAM</span>
                      </div>
                      <div className="p-2 bg-obsidian-900 border border-slate-800 rounded">
                        <span className="text-slate-500 text-[10px] block">UART0 [DEBUG_LOG]</span>
                        <span className="text-slate-300 font-bold">115200 BAUD</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. RF / Antenna CST Visual */}
                {selectedSkill.visualType === 'rf' && (
                  <div className="space-y-3">
                    <div className="text-[10px] text-circuit-cyan flex justify-between border-b border-slate-800/60 pb-1">
                      <span>CST SIMULATION // RETURN LOSS S11</span>
                      <span>RESONANCE: 433.5 MHz</span>
                    </div>

                    <div className="relative h-28 w-full bg-obsidian-900 border border-slate-800/80 rounded p-2 flex flex-col justify-end">
                      {/* Grid lines */}
                      <div className="absolute inset-x-2 top-4 border-b border-slate-800/50 text-[9px] text-slate-500">0 dB</div>
                      <div className="absolute inset-x-2 top-12 border-b border-slate-800/50 text-[9px] text-slate-500">-10 dB (MATCH THRESHOLD)</div>
                      <div className="absolute inset-x-2 top-20 border-b border-slate-800/50 text-[9px] text-slate-500">-20 dB</div>

                      {/* S11 Curve */}
                      <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 200 80">
                        <path d="M 10 15 Q 60 20 85 45 Q 100 75 115 45 Q 140 20 190 15" fill="none" stroke="#00f0ff" strokeWidth="2.5" />
                        {/* Dip Marker at 433.5 MHz */}
                        <circle cx="100" cy="74" r="4" fill="#f59e0b" className="animate-pulse" />
                        <line x1="100" y1="0" x2="100" y2="80" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" />
                      </svg>

                      <div className="flex justify-between text-[9px] text-slate-400 mt-1">
                        <span>400 MHz</span>
                        <span className="text-circuit-amber font-bold">fc = 433.5 MHz (S11 = -18.4 dB)</span>
                        <span>460 MHz</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. Code & Neural Network Visual */}
                {(selectedSkill.visualType === 'code' || selectedSkill.visualType === 'neural' || selectedSkill.visualType === 'git') && (
                  <div className="space-y-3">
                    <div className="text-[10px] text-circuit-purple flex justify-between border-b border-slate-800/60 pb-1">
                      <span>EXECUTION CONTEXT // ALGORITHM ARCHITECTURE</span>
                      <span>RUNTIME: READY</span>
                    </div>

                    {selectedSkill.codeSnippet ? (
                      <pre className="text-[11px] text-slate-200 bg-obsidian-900 p-2.5 rounded border border-slate-800 overflow-x-auto leading-relaxed">
                        <code>{selectedSkill.codeSnippet}</code>
                      </pre>
                    ) : (
                      <div className="p-3 bg-obsidian-900 border border-slate-800 rounded text-xs space-y-2">
                        <div className="flex items-center justify-between text-slate-400">
                          <span>PARADIGM:</span>
                          <span className="text-circuit-purple font-semibold">Deterministic &amp; Modular</span>
                        </div>
                        <div className="flex items-center justify-between text-slate-400">
                          <span>OPTIMIZATION:</span>
                          <span className="text-emerald-400 font-semibold">O(N log N) / Vectorized</span>
                        </div>
                        <div className="flex items-center justify-between text-slate-400">
                          <span>DEPLOYMENT:</span>
                          <span className="text-circuit-cyan font-semibold">Git Version Controlled</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}

              </div>

              {/* Inspector Skill Summary */}
              <div className="text-xs text-slate-300 space-y-2">
                <div className="flex justify-between items-center text-slate-400 text-[11px]">
                  <span>TECHNICAL DOMAIN:</span>
                  <span className="text-slate-200">{selectedSkill.category}</span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {selectedSkill.descriptor}
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
