import React from 'react';
import { Cpu, Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#030406] border-t border-slate-900 font-mono text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Branding */}
        <div className="flex items-center gap-3">
          <div className="p-1.5 rounded-lg bg-[#0a0d14] border border-[#00f0ff]/30 text-[#00f0ff]">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <div className="text-white font-heading font-bold text-sm">AJAY VARMA M</div>
            <div className="text-[10px] text-slate-500">ASIC Design Verification Workstation</div>
          </div>
        </div>

        {/* Center Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Ajayyyyyyyyyyy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-[#00f0ff] transition-colors"
          >
            <GithubIcon className="w-4 h-4 text-[#00f0ff]" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ajay-varma-m-8071a4263/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-[#00f0ff] transition-colors"
          >
            <LinkedinIcon className="w-4 h-4 text-[#00f0ff]" /> LinkedIn
          </a>
          <a href="mailto:ajaymandapati4@gmail.com" className="flex items-center gap-1 hover:text-[#00f0ff] transition-colors">
            <Mail className="w-4 h-4 text-[#00f0ff]" /> ajaymandapati4@gmail.com
          </a>
        </div>

        {/* Right Scroll Top */}
        <div className="flex items-center gap-4">
          <span>© {new Date().getFullYear()} Ajay Varma M. All rights reserved.</span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-[#00f0ff] border border-slate-800 transition-colors"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
