import React, { useState } from 'react';
import { Cpu, Terminal, ArrowRight, Layers } from 'lucide-react';
import { FLAGSHIP_PROJECTS } from '../../data/projects';
import { ProjectDetail } from '../../types/portfolio';
import { ESAModule } from './ESAModule';
import { QRouteModule } from './QRouteModule';
import { AntennaModule } from './AntennaModule';
import { ProjectDetailModal } from './ProjectDetailModal';

interface ProjectsSectionProps {
  selectedProjectId?: string | null;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ selectedProjectId }) => {
  const [activeModalProject, setActiveModalProject] = useState<ProjectDetail | null>(null);

  const esaProject = FLAGSHIP_PROJECTS.find(p => p.id === 'esa') || FLAGSHIP_PROJECTS[0];
  const qrouteProject = FLAGSHIP_PROJECTS.find(p => p.id === 'q-route') || FLAGSHIP_PROJECTS[1];
  const antennaProject = FLAGSHIP_PROJECTS.find(p => p.id === 'helmet-antenna') || FLAGSHIP_PROJECTS[2];

  return (
    <section id="projects" className="py-24 bg-obsidian-950 circuit-grid-bg relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-circuit-cyan/10 border border-circuit-cyan/30 text-circuit-cyan">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-circuit-cyan tracking-wider">SECTION // 03</span>
                <span className="text-slate-600 font-mono">•</span>
                <span className="text-xs font-mono text-slate-400">FLAGSHIP SYSTEMS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                ENGINEERING PROJECTS
              </h2>
            </div>
          </div>
          <span className="hidden sm:inline-block font-mono text-xs text-circuit-cyan px-2.5 py-1 rounded bg-obsidian-900 border border-slate-800">
            3 ACTIVE FLAGSHIPS
          </span>
        </div>

        <p className="text-slate-400 max-w-2xl text-sm sm:text-base mb-12">
          Systems I designed, developed and explored. Each flagship project behaves as an interactive engineering module bridging hardware intelligence, edge computing, antenna simulation, and quantum-inspired software optimization.
        </p>

        {/* Project 01: ESA (Edge AI / Predictive Maintenance) */}
        <div className="mb-12">
          <ESAModule 
            project={esaProject} 
            onOpenDetails={() => setActiveModalProject(esaProject)} 
          />
        </div>

        {/* Project 02: Q-ROUTE (Quantum Traffic Optimization) */}
        <div className="mb-12">
          <QRouteModule 
            project={qrouteProject} 
            onOpenDetails={() => setActiveModalProject(qrouteProject)} 
          />
        </div>

        {/* Project 03: HELMET-MOUNTED CONFORMAL ANTENNA (433.5 MHz RF) */}
        <div>
          <AntennaModule 
            project={antennaProject} 
            onOpenDetails={() => setActiveModalProject(antennaProject)} 
          />
        </div>

      </div>

      {/* Case Study Detail Modal */}
      <ProjectDetailModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
