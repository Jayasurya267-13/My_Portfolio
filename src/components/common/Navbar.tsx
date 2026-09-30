import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Terminal, Cpu } from 'lucide-react';
import { CONFIG } from '../../data/config';

interface NavbarProps {
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'JOURNEY', href: '#journey' },
    { name: 'RESUME', href: '#resume' },
    { name: 'CONTACT', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Track active section
      const sections = ['home', 'about', 'skills', 'projects', 'journey', 'resume', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-obsidian-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-2.5' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a 
            href="#home" 
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Jayasurya R Engineering Portfolio Home"
          >
            <div className="w-10 h-10 rounded-lg bg-obsidian-900 border border-circuit-cyan/40 flex items-center justify-center font-mono font-bold text-circuit-cyan shadow-[0_0_12px_rgba(0,240,255,0.2)] group-hover:border-circuit-cyan transition-all group-hover:shadow-[0_0_16px_rgba(0,240,255,0.4)]">
              <span>J<span className="text-circuit-purple">/</span>R</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-100 tracking-wider text-sm group-hover:text-circuit-cyan transition-colors">
                JAYASURYA R
              </span>
              <span className="text-[10px] font-mono text-slate-400 tracking-tight flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>SYS_ONLINE</span>
                <span className="text-slate-600 hidden sm:inline">•</span>
                <span className="text-slate-500 hidden sm:inline">{CONFIG.location}</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 font-mono text-xs text-slate-300">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    isActive
                      ? 'text-circuit-cyan bg-circuit-cyan/10 border border-circuit-cyan/30 shadow-[0_0_10px_rgba(0,240,255,0.15)] font-semibold'
                      : 'hover:text-white hover:bg-slate-800/40 border border-transparent'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action buttons & Search */}
          <div className="flex items-center gap-2.5">
            {/* Search Palette Trigger */}
            <button
              onClick={onOpenSearch}
              aria-label="Open command palette"
              className="flex items-center gap-2 px-2.5 py-1.5 bg-obsidian-900 border border-slate-700/70 hover:border-circuit-cyan/60 rounded-lg text-slate-300 text-xs font-mono transition-all hover:bg-slate-800/50"
            >
              <Search className="w-3.5 h-3.5 text-circuit-cyan" />
              <span className="hidden sm:inline text-slate-400">SEARCH</span>
              <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] bg-slate-800 rounded border border-slate-700 text-slate-400 font-mono">
                ⌘K
              </kbd>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 rounded-lg bg-obsidian-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-obsidian-900 border border-slate-800 rounded-xl shadow-2xl animate-in slide-in-from-top-2 duration-200 font-mono text-xs">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg transition-colors flex items-center justify-between ${
                    activeSection === link.href.substring(1)
                      ? 'bg-circuit-cyan/15 text-circuit-cyan font-bold border border-circuit-cyan/30'
                      : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-[10px] text-slate-500">&gt;&gt;</span>
                </a>
              ))}
              <div className="pt-2 mt-1 border-t border-slate-800 flex justify-between items-center text-[10px] text-slate-500">
                <span>SYSTEM_COORDS:</span>
                <span className="text-slate-400">{CONFIG.coordinates}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
