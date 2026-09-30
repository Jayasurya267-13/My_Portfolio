import React, { useEffect, useState } from 'react';

interface BootScreenProps {
  onComplete: () => void;
}

export const BootScreen: React.FC<BootScreenProps> = ({ onComplete }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Check if user has already visited in this session
    const hasBooted = sessionStorage.getItem('jayasurya_sys_booted');
    if (hasBooted) {
      onComplete();
      return;
    }

    const steps = [
      "INITIALIZING ENGINEERING PROFILE...",
      "[ VLSI ........ OK ]",
      "[ HARDWARE .... OK ]",
      "[ SOFTWARE .... OK ]",
      "[ PROJECTS .... OK ]",
      "JAYASURYA R — SYSTEM ONLINE"
    ];

    let current = 0;
    const interval = setInterval(() => {
      if (current < steps.length) {
        const nextStep = steps[current];
        setLogs(prev => [...prev, nextStep]);
        current++;
      } else {
        clearInterval(interval);
        setIsDone(true);
        setTimeout(() => {
          sessionStorage.setItem('jayasurya_sys_booted', 'true');
          onComplete();
        }, 350);
      }
    }, 180);

    return () => clearInterval(interval);
  }, [onComplete]);

  const handleSkip = () => {
    sessionStorage.setItem('jayasurya_sys_booted', 'true');
    onComplete();
  };

  return (
    <div 
      className={`fixed inset-0 z-50 bg-obsidian-950 flex flex-col items-center justify-center font-mono text-xs sm:text-sm transition-opacity duration-300 ${
        isDone ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="w-11/12 max-w-md p-6 bg-obsidian-900 border border-circuit-cyan/30 rounded-lg shadow-2xl relative overflow-hidden">
        {/* Top HUD bar */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-circuit-cyan animate-ping"></span>
            <span className="text-circuit-cyan tracking-wider font-semibold">BOOT_SEQUENCE // V2.6</span>
          </div>
          <button 
            onClick={handleSkip}
            className="text-slate-500 hover:text-circuit-cyan transition-colors text-xs px-2 py-0.5 border border-slate-800 hover:border-circuit-cyan/40 rounded"
          >
            [SKIP]
          </button>
        </div>

        {/* Console sequence */}
        <div className="space-y-2 text-slate-300 min-h-[140px]">
          {logs.map((log, idx) => (
            <div 
              key={idx} 
              className={`flex items-center gap-2 ${
                idx === logs.length - 1 && log.includes('ONLINE') 
                  ? 'text-circuit-cyan font-bold tracking-wide' 
                  : log.includes('OK') 
                    ? 'text-emerald-400' 
                    : 'text-slate-300'
              }`}
            >
              <span className="text-slate-600 select-none">&gt;</span>
              <span>{log}</span>
            </div>
          ))}
          {logs.length < 6 && (
            <div className="flex items-center gap-2 text-circuit-cyan">
              <span className="text-slate-600 select-none">&gt;</span>
              <span className="inline-block w-2.5 h-4 bg-circuit-cyan animate-pulse"></span>
            </div>
          )}
        </div>

        {/* Bottom subtle specs */}
        <div className="mt-4 pt-3 border-t border-slate-800/80 flex justify-between items-center text-[10px] text-slate-500">
          <span>PORT: CHENNAI_NODE</span>
          <span>EST_LATENCY: 12ms</span>
        </div>
      </div>
    </div>
  );
};
