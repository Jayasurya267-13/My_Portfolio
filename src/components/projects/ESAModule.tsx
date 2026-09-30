import React, { useState, useEffect } from 'react';
import { ExternalLink, AlertTriangle, Activity, Gauge, Cpu, CheckCircle2, RefreshCw } from 'lucide-react';
import { ProjectDetail } from '../../types/portfolio';

interface ESAModuleProps {
  project: ProjectDetail;
  onOpenDetails: () => void;
}

export const ESAModule: React.FC<ESAModuleProps> = ({ project, onOpenDetails }) => {
  const [isFaultSimulated, setIsFaultSimulated] = useState(false);
  const [telemetry, setTelemetry] = useState({
    vibration: 2.1,
    temperature: 42.4,
    acoustic: 18.2,
    healthScore: 94,
    status: 'OPTIMAL'
  });

  // Simulated telemetry stream
  useEffect(() => {
    const timer = setInterval(() => {
      setTelemetry(prev => {
        if (isFaultSimulated) {
          const vibe = +(6.8 + Math.random() * 1.4).toFixed(2);
          const temp = +(68.5 + Math.random() * 3.2).toFixed(1);
          const acoustic = +(46.0 + Math.random() * 5.0).toFixed(1);
          const health = Math.max(28, Math.min(48, Math.round(100 - vibe * 8.5)));
          return {
            vibration: vibe,
            temperature: temp,
            acoustic: acoustic,
            healthScore: health,
            status: 'CRITICAL_WARNING'
          };
        } else {
          const vibe = +(2.0 + Math.random() * 0.4).toFixed(2);
          const temp = +(42.0 + Math.random() * 1.5).toFixed(1);
          const acoustic = +(18.0 + Math.random() * 2.0).toFixed(1);
          const health = Math.round(92 + Math.random() * 5);
          return {
            vibration: vibe,
            temperature: temp,
            acoustic: acoustic,
            healthScore: health,
            status: 'NOMINAL'
          };
        }
      });
    }, 1200);

    return () => clearInterval(timer);
  }, [isFaultSimulated]);

  return (
    <div id="esa" className="p-6 bg-obsidian-900 border border-slate-700/80 rounded-2xl shadow-2xl relative overflow-hidden font-mono group">
      {/* Corner accents */}
      <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-circuit-cyan" />
      <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t-2 border-r-2 border-circuit-cyan" />

      {/* Module Title & Category */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-4">
        <div className="flex items-center gap-2.5">
          <span className="px-2 py-0.5 rounded bg-circuit-cyan/20 text-circuit-cyan text-xs font-bold border border-circuit-cyan/40">
            MODULE 01
          </span>
          <span className="text-xs text-slate-400">EDGE AI // PREDICTIVE MAINTENANCE</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className={`w-2 h-2 rounded-full ${isFaultSimulated ? 'bg-rose-500 animate-ping' : 'bg-emerald-400 animate-pulse'}`} />
          <span className={isFaultSimulated ? 'text-rose-400 font-bold' : 'text-emerald-400'}>
            SYS: {telemetry.status}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left: Project Context & Pipeline */}
        <div className="lg:col-span-6 space-y-4">
          <div>
            <h3 className="text-2xl font-bold text-white font-sans tracking-tight">
              ESA: Edge AI Predictive Maintenance
            </h3>
            <p className="text-xs text-circuit-cyan mt-1">
              Industrial Equipment ➔ Sensors ➔ Edge AI ➔ Anomaly Prediction ➔ Live Dashboard
            </p>
          </div>

          <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed">
            {project.problem}
          </p>

          <p className="text-slate-400 text-xs font-sans leading-relaxed">
            {project.approach}
          </p>

          {/* Pipeline stages */}
          <div className="p-3 bg-obsidian-950 border border-slate-800 rounded-xl space-y-2 text-[11px]">
            <div className="flex items-center justify-between text-slate-400 border-b border-slate-800/80 pb-1">
              <span>DATA PIPELINE</span>
              <span className="text-circuit-cyan">TINYML INFERENCE</span>
            </div>
            <div className="flex items-center justify-between text-slate-300 text-center gap-1 overflow-x-auto py-1">
              <span className="p-1 rounded bg-slate-900 border border-slate-800 text-[10px] shrink-0">MACHINERY</span>
              <span className="text-slate-600">➔</span>
              <span className="p-1 rounded bg-slate-900 border border-slate-800 text-[10px] shrink-0">SENSORS</span>
              <span className="text-slate-600">➔</span>
              <span className="p-1 rounded bg-circuit-cyan/15 text-circuit-cyan border border-circuit-cyan/30 text-[10px] shrink-0">EDGE AI</span>
              <span className="text-slate-600">➔</span>
              <span className="p-1 rounded bg-slate-900 border border-slate-800 text-[10px] shrink-0">DASHBOARD</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="https://jayasurya267-13.github.io/ESA-dashboard/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-circuit-cyan text-obsidian-950 font-bold text-xs hover:bg-sky-300 transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)]"
            >
              <span>OPEN ESA DASHBOARD</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onOpenDetails}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-obsidian-850 hover:bg-obsidian-800 text-slate-200 border border-slate-700 hover:border-circuit-cyan/50 text-xs transition-colors"
            >
              <span>TECHNICAL CASE STUDY</span>
            </button>
          </div>
        </div>

        {/* Right: Miniature Interactive Dashboard Visualization */}
        <div className="lg:col-span-6 bg-obsidian-950 p-4 rounded-xl border border-slate-800/90 shadow-inner space-y-4">
          
          {/* Mini Dashboard Header */}
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-2 text-xs">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-circuit-cyan" />
              <span className="text-slate-200 font-bold">EDGE_TELEMETRY_CONSOLE</span>
            </div>
            <button
              onClick={() => setIsFaultSimulated(!isFaultSimulated)}
              className={`px-2.5 py-1 rounded text-[11px] font-mono border transition-all ${
                isFaultSimulated
                  ? 'bg-rose-950/80 border-rose-500 text-rose-300 hover:bg-rose-900'
                  : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-amber-400 hover:text-amber-300'
              }`}
            >
              {isFaultSimulated ? 'RESET NORMAL TELEMETRY' : '⚡ SIMULATE ROTOR ANOMALY'}
            </button>
          </div>

          {/* Synthetic Vibration Waveform Real-Time SVG */}
          <div className="p-3 bg-obsidian-900 rounded-lg border border-slate-800/80">
            <div className="flex justify-between items-center text-[10px] text-slate-400 mb-1">
              <span>REAL-TIME VIBRATION SPECTRUM (FFT)</span>
              <span className={isFaultSimulated ? 'text-rose-400 font-bold' : 'text-circuit-cyan'}>
                RMS: {telemetry.vibration} mm/s
              </span>
            </div>
            <div className="h-16 w-full flex items-center justify-center overflow-hidden">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 300 60">
                <path
                  d={
                    isFaultSimulated
                      ? "M0 30 Q 15 5 30 30 T 60 55 T 90 10 T 120 50 T 150 0 T 180 60 T 210 5 T 240 55 T 270 12 T 300 30"
                      : "M0 30 Q 15 22 30 30 T 60 38 T 90 23 T 120 37 T 150 24 T 180 36 T 210 25 T 240 35 T 270 26 T 300 30"
                  }
                  fill="none"
                  stroke={isFaultSimulated ? '#f43f5e' : '#00f0ff'}
                  strokeWidth="2"
                  className="transition-all duration-300"
                />
              </svg>
            </div>
          </div>

          {/* Sensor Gauges & Anomaly Score */}
          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="p-2.5 bg-obsidian-900 border border-slate-800 rounded">
              <span className="text-[10px] text-slate-500 block">BEARING TEMP</span>
              <span className={`font-bold text-sm ${isFaultSimulated ? 'text-rose-400' : 'text-slate-100'}`}>
                {telemetry.temperature} °C
              </span>
            </div>

            <div className="p-2.5 bg-obsidian-900 border border-slate-800 rounded">
              <span className="text-[10px] text-slate-500 block">ACOUSTIC FREQ</span>
              <span className={`font-bold text-sm ${isFaultSimulated ? 'text-amber-400' : 'text-slate-100'}`}>
                {telemetry.acoustic} kHz
              </span>
            </div>

            <div className="p-2.5 bg-obsidian-900 border border-slate-800 rounded">
              <span className="text-[10px] text-slate-500 block">HEALTH INDEX</span>
              <span className={`font-bold text-sm ${isFaultSimulated ? 'text-rose-400' : 'text-emerald-400'}`}>
                {telemetry.healthScore} %
              </span>
            </div>
          </div>

          {/* Anomaly Bar Alert */}
          <div className="space-y-1">
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>PREDICTED ANOMALY RISK:</span>
              <span className={isFaultSimulated ? 'text-rose-400 font-bold' : 'text-emerald-400 font-bold'}>
                {isFaultSimulated ? 'HIGH (BEARING DETERIORATION)' : 'LOW (NORMAL OPERATION)'}
              </span>
            </div>
            <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
              <div
                className={`h-full transition-all duration-500 ${
                  isFaultSimulated ? 'w-[82%] bg-rose-500' : 'w-[12%] bg-emerald-400'
                }`}
              />
            </div>
          </div>

          {/* Footer note */}
          <div className="flex justify-between items-center text-[10px] text-slate-500 pt-1">
            <span>EDGE INFERENCE: TINYML ON MCU</span>
            <span>SAMPLE RATE: 2.4 kHz</span>
          </div>

        </div>
      </div>
    </div>
  );
};
