import React, { useState, useEffect } from 'react';
import { Cpu, Mail, FileText, Menu, X, Terminal, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Navbar({ activeSection, setActiveSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'ai-tools', label: 'AI & Automation' },
    { id: 'lab', label: 'Verification Lab' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050608]/90 backdrop-blur-md border-b border-[#00f0ff]/20 py-3 shadow-lg shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
          className="flex items-center gap-3 group"
        >
          <div className="relative p-2 rounded-lg bg-[#0a0d14] border border-[#00f0ff]/30 group-hover:border-[#00f0ff] transition-colors shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <Cpu className="w-6 h-6 text-[#00f0ff] animate-pulse" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#10b981] animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#10b981]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading text-lg font-bold tracking-wider text-white group-hover:text-[#00f0ff] transition-colors">
                AJAY VARMA M
              </span>
              <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30 hidden sm:inline-block">
                ASIC DV
              </span>
            </div>
            <p className="text-[11px] font-mono text-slate-400">Silicon Verification Workstation</p>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#0a0d14]/70 p-1.5 rounded-full border border-white/10 backdrop-blur-sm">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                activeSection === item.id
                  ? 'bg-[#00f0ff]/15 text-[#00f0ff] border border-[#00f0ff]/40 shadow-[0_0_12px_rgba(0,240,255,0.2)] font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop Action Buttons & Socials */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-2 border-r border-white/10 pr-3 mr-1">
            <a
              href="https://github.com/Ajayyyyyyyyyyy"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-[#00f0ff] hover:bg-[#00f0ff]/10 rounded-md transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/ajay-varma-m-8071a4263/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-[#00f0ff] hover:bg-[#00f0ff]/10 rounded-md transition-colors"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:ajaymandapati4@gmail.com"
              className="p-2 text-slate-400 hover:text-[#00f0ff] hover:bg-[#00f0ff]/10 rounded-md transition-colors"
              title="Email Ajay"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={() => scrollToSection('projects')}
            className="px-3.5 py-1.5 rounded-md text-xs font-medium text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 transition-colors"
          >
            View Projects
          </button>

          <a
            href="/Ajay_Krishna_Varma_Resume.docx"
            download="Ajay_Krishna_Varma_Resume.docx"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-mono font-semibold text-black bg-[#00f0ff] hover:bg-[#33f3ff] shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all hover:shadow-[0_0_20px_rgba(0,240,255,0.7)] transform active:scale-95"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#0a0d14] border border-[#00f0ff]/30 text-[#00f0ff]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0d14]/95 border-b border-[#00f0ff]/30 px-4 py-6 backdrop-blur-xl animate-fadeIn">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium ${
                  activeSection === item.id
                    ? 'bg-[#00f0ff]/20 text-[#00f0ff] border border-[#00f0ff]/40 font-semibold'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <div className="flex justify-around py-2">
                <a
                  href="https://github.com/Ajayyyyyyyyyyy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-slate-300 hover:text-[#00f0ff]"
                >
                  <GithubIcon className="w-4 h-4 text-[#00f0ff]" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/ajay-varma-m-8071a4263/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-slate-300 hover:text-[#00f0ff]"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#00f0ff]" /> LinkedIn
                </a>
                <a
                  href="mailto:ajaymandapati4@gmail.com"
                  className="flex items-center gap-2 text-xs text-slate-300 hover:text-[#00f0ff]"
                >
                  <Mail className="w-4 h-4 text-[#00f0ff]" /> Email
                </a>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-2">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="w-full py-2.5 rounded-lg text-xs font-semibold text-center bg-slate-800 border border-slate-700 text-white"
                >
                  View Projects
                </button>
                <a
                  href="/Ajay_Krishna_Varma_Resume.docx"
                  download="Ajay_Krishna_Varma_Resume.docx"
                  className="w-full py-2.5 rounded-lg text-xs font-semibold text-center bg-[#00f0ff] text-black shadow-[0_0_12px_rgba(0,240,255,0.4)]"
                >
                  Get Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
