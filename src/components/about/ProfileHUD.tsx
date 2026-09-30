import React, { useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { CONFIG } from '../../data/config';

export const ProfileHUD: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative group w-full max-w-sm mx-auto">
      {/* Outer HUD container */}
      <div className="relative p-3 bg-obsidian-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden font-mono">
        {/* Reticle HUD Corners */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-circuit-cyan pointer-events-none" />
        <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-circuit-cyan pointer-events-none" />
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-circuit-cyan pointer-events-none" />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-circuit-cyan pointer-events-none" />

        {/* Top telemetry bar */}
        <div className="flex items-center justify-between text-[10px] text-slate-400 mb-2 px-1 border-b border-slate-800 pb-1.5">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-circuit-cyan animate-ping" />
            <span>OPTICAL_SENSOR // ID_01</span>
          </span>
          <span className="text-circuit-cyan">SYS_REC_ACTIVE</span>
        </div>

        {/* Image Frame Area */}
        <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-obsidian-950 border border-slate-800 flex flex-col items-center justify-center p-6 text-center">
          
          {/* Real Photo or HUD Placeholder */}
          {!imageError ? (
            <img
              src={CONFIG.photoPath}
              alt="Jayasurya R - ECE Engineering Student"
              onError={() => setImageError(true)}
              className="absolute inset-0 w-full h-full object-cover rounded-xl"
            />
          ) : (
            <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
              {/* Radar Reticle Circle */}
              <div className="relative w-28 h-28 rounded-full border border-circuit-cyan/40 flex items-center justify-center bg-obsidian-900/60 shadow-[0_0_20px_rgba(0,240,255,0.15)]">
                <div className="absolute inset-2 rounded-full border border-dashed border-slate-700 animate-spin" style={{ animationDuration: '20s' }} />
                <div className="text-3xl font-bold font-mono text-circuit-cyan">
                  JR
                </div>
                <div className="absolute -top-1 w-2 h-2 bg-circuit-cyan rounded-full shadow-[0_0_8px_#00f0ff]" />
              </div>

              {/* Engineering Image Replacement Notice */}
              <div className="space-y-1">
                <div className="inline-block px-2.5 py-0.5 rounded bg-slate-800 border border-circuit-cyan/30 text-circuit-cyan text-xs font-semibold">
                  [PROFILE_IMAGE]
                </div>
                <p className="text-[11px] text-slate-400 font-mono">
                  JAYASURYA_R.JPG
                </p>
                <p className="text-[10px] text-slate-500 max-w-[200px] leading-tight pt-1">
                  Target: <span className="text-slate-400">/assets/profile/jayasurya_r.jpg</span>
                </p>
              </div>
            </div>
          )}

          {/* Subtle scanning line effect overlay */}
          <div className="scanline-overlay pointer-events-none" />

          {/* Crosshair markers */}
          <div className="absolute inset-4 pointer-events-none flex justify-between items-start opacity-40">
            <span className="text-[10px] text-slate-400">+</span>
            <span className="text-[10px] text-slate-400">+</span>
          </div>
          <div className="absolute inset-4 pointer-events-none flex justify-between items-end opacity-40">
            <span className="text-[10px] text-slate-400">+</span>
            <span className="text-[10px] text-slate-400">+</span>
          </div>
        </div>

        {/* Bottom Specs HUD Footer */}
        <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400 px-1">
          <span>COORDS: {CONFIG.coordinates}</span>
          <span className="text-emerald-400 flex items-center gap-1">
            <ShieldCheck className="w-3 h-3" />
            <span>VERIFIED_PROFILE</span>
          </span>
        </div>
      </div>
    </div>
  );
};
