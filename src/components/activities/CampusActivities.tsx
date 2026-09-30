import React from 'react';
import { Users, Bot, HeartHandshake, Shield, Sparkles } from 'lucide-react';
import { CAMPUS_ACTIVITIES } from '../../data/activities';

export const CampusActivities: React.FC = () => {
  return (
    <section id="activities" className="py-20 bg-obsidian-950/80 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-circuit-purple/10 border border-circuit-purple/30 text-circuit-purple">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-circuit-purple tracking-wider">SECTION // 05</span>
              <span className="text-slate-600 font-mono">•</span>
              <span className="text-xs font-mono text-slate-400">COLLABORATION &amp; CAMPUS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              TECHNICAL &amp; CAMPUS ACTIVITIES
            </h2>
          </div>
        </div>

        <p className="text-slate-400 max-w-2xl text-sm sm:text-base mb-10">
          Active technical participation, hands-on robotics prototyping, and community social responsibility initiatives at Sri Sai Ram Institute of Technology.
        </p>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CAMPUS_ACTIVITIES.map((act) => {
            const isRobotics = act.id.includes('robotics');
            const isSkill = act.id.includes('skill');
            const isYrc = act.id.includes('yrc');

            return (
              <div
                key={act.id}
                className="p-6 bg-obsidian-900 border border-slate-800 rounded-2xl shadow-xl flex flex-col justify-between font-mono hover:border-slate-700 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs border-b border-slate-800/80 pb-3">
                    <div className="flex items-center gap-2">
                      {isRobotics ? <Bot className="w-4 h-4 text-circuit-amber" /> :
                       isSkill ? <Sparkles className="w-4 h-4 text-circuit-cyan" /> :
                       <HeartHandshake className="w-4 h-4 text-rose-400" />}
                      <span className="text-slate-200 font-bold">{act.name}</span>
                    </div>
                  </div>

                  <div className="text-xs text-circuit-cyan">
                    <span>{act.role}</span>
                  </div>

                  <p className="text-xs text-slate-400 font-sans leading-relaxed">
                    {act.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {act.tags.map((tag) => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-obsidian-950 text-slate-400 border border-slate-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                  <span>PARTICIPATION</span>
                  <span className="text-slate-400">{act.scope}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
