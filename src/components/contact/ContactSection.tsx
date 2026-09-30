import React, { useState } from 'react';
import { Send, Mail, Check, Copy, ExternalLink, MessageSquare, AlertCircle } from 'lucide-react';
import { CONFIG } from '../../data/config';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'copied' | 'submitted'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleCopyEmail = () => {
    if (CONFIG.emailPlaceholder === 'YOUR_EMAIL_HERE') {
      navigator.clipboard.writeText("jayasurya.ece.contact@example.com");
    } else {
      navigator.clipboard.writeText(CONFIG.emailPlaceholder);
    }
    setStatus('copied');
    setTimeout(() => setStatus('idle'), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please complete all required fields before dispatching.");
      return;
    }

    // Open mailto fallback client
    const targetEmail = CONFIG.emailPlaceholder === 'YOUR_EMAIL_HERE' 
      ? 'jayasurya.contact@example.com' 
      : CONFIG.emailPlaceholder;

    const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(
      formData.subject || `Engineering Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setStatus('submitted');
  };

  return (
    <section id="contact" className="py-24 bg-obsidian-950 circuit-grid-bg relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-circuit-cyan/10 border border-circuit-cyan/30 text-circuit-cyan">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-circuit-cyan tracking-wider">SECTION // 08</span>
              <span className="text-slate-600 font-mono">•</span>
              <span className="text-xs font-mono text-slate-400">COMMUNICATION LINK</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              LET'S CONNECT
            </h2>
          </div>
        </div>

        <p className="text-slate-400 max-w-2xl text-sm sm:text-base mb-12">
          Open to internship roles, collaborative engineering research, VLSI digital design opportunities, and hardware/software development projects.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Communication Channels & Social Nodes */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-obsidian-900 border border-slate-800 rounded-2xl shadow-xl space-y-4 font-mono">
              <span className="text-xs font-bold text-circuit-cyan tracking-wider block">
                DIRECT CHANNELS //
              </span>

              {/* Email Card with Copy Feature */}
              <div className="p-4 bg-obsidian-950 border border-slate-800 rounded-xl space-y-2">
                <span className="text-[10px] text-slate-500 block">PRIMARY EMAIL:</span>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-white truncate">
                    {CONFIG.emailPlaceholder}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                    title="Copy email to clipboard"
                  >
                    {status === 'copied' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {status === 'copied' && (
                  <span className="text-[10px] text-emerald-400 font-sans block">
                    ✓ Email address copied to clipboard
                  </span>
                )}
              </div>

              {/* Academic Location Coordinates */}
              <div className="p-4 bg-obsidian-950 border border-slate-800 rounded-xl space-y-1">
                <span className="text-[10px] text-slate-500 block">BASE STATION:</span>
                <span className="text-xs text-slate-200 block">{CONFIG.institution}</span>
                <span className="text-[11px] text-slate-400 block">{CONFIG.location} ({CONFIG.coordinates})</span>
              </div>

              {/* Quick Profile Buttons */}
              <div className="pt-2 space-y-2">
                <span className="text-[10px] text-slate-500 block">CONNECTED PLATFORMS:</span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={CONFIG.socials.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-obsidian-950 border border-slate-800 hover:border-circuit-cyan text-xs text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>LINKEDIN</span>
                    <ExternalLink className="w-3 h-3 text-circuit-cyan" />
                  </a>

                  <a
                    href={CONFIG.socials.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-obsidian-950 border border-slate-800 hover:border-circuit-purple text-xs text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>GITHUB</span>
                    <ExternalLink className="w-3 h-3 text-circuit-purple" />
                  </a>

                  <a
                    href={CONFIG.socials.leetcode.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-obsidian-950 border border-slate-800 hover:border-circuit-amber text-xs text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>LEETCODE</span>
                    <ExternalLink className="w-3 h-3 text-circuit-amber" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 bg-obsidian-900 border border-slate-700/80 rounded-2xl shadow-xl space-y-4 font-mono"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs text-slate-400">
                <span className="text-circuit-cyan font-bold">DISPATCH_MESSAGE //</span>
                <span>MAILTO_TRANSMISSION</span>
              </div>

              {errorMessage && (
                <div className="p-3 rounded-lg bg-rose-950/60 border border-rose-500/40 text-xs text-rose-300 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs text-slate-400 block">YOUR NAME *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Mercer"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-circuit-cyan transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-slate-400 block">YOUR EMAIL *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-circuit-cyan transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-slate-400 block">SUBJECT / TOPIC</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={e => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. VLSI / Embedded Internship Opportunity"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-circuit-cyan transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-slate-400 block">MESSAGE BODY *</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message or inquiry here..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-circuit-cyan transition-colors resize-y"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-circuit-cyan text-obsidian-950 font-bold text-xs hover:bg-sky-300 transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)] transform hover:-translate-y-0.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>SEND MESSAGE</span>
                </button>

                <p className="text-[11px] text-slate-500 font-sans">
                  Dispatches via your default email client. No third-party spam tracking.
                </p>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
