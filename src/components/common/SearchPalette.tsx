import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Cpu, Radio, Code2, FileText, ArrowRight, CornerDownLeft } from 'lucide-react';
import { FLAGSHIP_PROJECTS } from '../../data/projects';
import { SKILL_BLOCKS } from '../../data/skills';

interface SearchResult {
  title: string;
  category: string;
  type: 'project' | 'skill' | 'section';
  targetId: string;
  subtitle: string;
}

interface SearchPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject?: (projectId: string) => void;
}

export const SearchPalette: React.FC<SearchPaletteProps> = ({
  isOpen,
  onClose,
  onSelectProject,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Compile search database
  const searchItems: SearchResult[] = [
    // Sections
    { title: "Home / Architecture", category: "SECTION", type: "section", targetId: "home", subtitle: "Hero & Core Silicon Architecture Diagram" },
    { title: "About / System Profile", category: "SECTION", type: "section", targetId: "about", subtitle: "Background, ECE Focus & Technical Profile" },
    { title: "Engineering Stack", category: "SECTION", type: "section", targetId: "skills", subtitle: "VLSI, Embedded & Software Technology Blocks" },
    { title: "Engineering Projects", category: "SECTION", type: "section", targetId: "projects", subtitle: "Flagship Engineering Systems" },
    { title: "Engineering Journey", category: "SECTION", type: "section", targetId: "journey", subtitle: "Internships, Ham Radio Credential & LeetCode" },
    { title: "Campus & Technical Clubs", category: "SECTION", type: "section", targetId: "activities", subtitle: "Skill Dev Club, Robotics, YRC" },
    { title: "Resume / Credentials", category: "SECTION", type: "section", targetId: "resume", subtitle: "Recruiter PDF & Verified Background" },
    { title: "Digital Footprint", category: "SECTION", type: "section", targetId: "footprint", subtitle: "LinkedIn, GitHub, LeetCode Nodes" },
    { title: "Contact / Connect", category: "SECTION", type: "section", targetId: "contact", subtitle: "Direct Communication & Email Dispatch" },

    // Projects
    ...FLAGSHIP_PROJECTS.map(p => ({
      title: p.fullTitle,
      category: `PROJECT // ${p.title}`,
      type: "project" as const,
      targetId: p.id,
      subtitle: `${p.category} • ${p.tagline}`
    })),

    // Skills
    ...SKILL_BLOCKS.flatMap(b =>
      b.skills.map(s => ({
        title: s.name,
        category: `SKILL // ${b.blockNumber}`,
        type: "skill" as const,
        targetId: `skills`,
        subtitle: `${s.category} — ${s.descriptor}`
      }))
    )
  ];

  const filtered = query.trim() === ''
    ? searchItems.slice(0, 7)
    : searchItems.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(query.toLowerCase())
      );

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open handled by parent or toggle
        }
      }
      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % (filtered.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filtered.length) % (filtered.length || 1));
      } else if (e.key === 'Enter' && filtered[selectedIndex]) {
        e.preventDefault();
        handleSelect(filtered[selectedIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filtered, selectedIndex, onClose]);

  const handleSelect = (item: SearchResult) => {
    onClose();
    if (item.type === 'project' && onSelectProject) {
      onSelectProject(item.targetId);
      const el = document.getElementById('projects');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else {
      const el = document.getElementById(item.targetId);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-obsidian-950/80 backdrop-blur-md animate-in fade-in duration-150">
      <div 
        className="w-full max-w-2xl bg-obsidian-900 border border-slate-700/80 rounded-xl shadow-2xl overflow-hidden font-mono"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 bg-obsidian-850">
          <Search className="w-5 h-5 text-circuit-cyan mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="SEARCH ENGINEERING PROFILE... (e.g. Verilog, CST, 433.5, ESA, Q-ROUTE)"
            className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded border border-slate-800 hover:border-slate-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-slate-800/40">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-slate-500 text-sm">
              NO MATCHING ENGINEERING MODULES FOUND
            </div>
          ) : (
            filtered.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={`${item.type}-${item.title}-${idx}`}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                    isSelected ? 'bg-circuit-cyan/10 border border-circuit-cyan/30 text-white' : 'hover:bg-slate-800/50 text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className={`p-2 rounded shrink-0 ${
                      item.type === 'project' ? 'bg-purple-950 text-circuit-purple border border-circuit-purple/40' :
                      item.type === 'skill' ? 'bg-cyan-950 text-circuit-cyan border border-circuit-cyan/40' :
                      'bg-slate-800 text-slate-300 border border-slate-700'
                    }`}>
                      {item.type === 'project' ? <Cpu className="w-4 h-4" /> :
                       item.type === 'skill' ? <Code2 className="w-4 h-4" /> :
                       <Radio className="w-4 h-4" />}
                    </div>
                    <div className="truncate">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm truncate">{item.title}</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 truncate mt-0.5">{item.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 shrink-0 ml-2">
                    {isSelected && (
                      <span className="flex items-center gap-1 text-[11px] text-circuit-cyan font-mono">
                        <span>SELECT</span>
                        <CornerDownLeft className="w-3 h-3" />
                      </span>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 bg-obsidian-950/80 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <div className="flex items-center gap-3">
            <span>[↑↓] NAVIGATE</span>
            <span>[ENTER] SELECT</span>
            <span>[ESC] CLOSE</span>
          </div>
          <span className="text-circuit-cyan">SYS_QUERY_READY</span>
        </div>
      </div>
    </div>
  );
};
