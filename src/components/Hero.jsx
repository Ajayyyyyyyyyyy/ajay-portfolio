import React, { useState } from 'react';
import Hero3DCanvas from './Hero3DCanvas';
import StatusHud from './StatusHud';
import { Cpu, ArrowRight, FileText, Mail, ShieldCheck, MapPin, Building2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero() {
  const [activeBlock, setActiveBlock] = useState('UVM');

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center silicon-grid overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#8a2be2]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Positioning Copy */}
          <div className="lg:col-span-6 space-y-6">
            {/* Verification Engineer Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0a0d14] border border-[#00f0ff]/40 shadow-[0_0_15px_rgba(0,240,255,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping" />
              <span className="w-2 h-2 rounded-full bg-[#00f0ff]" />
              <span className="font-mono text-xs font-semibold text-[#00f0ff] tracking-wider uppercase">
                ASIC DESIGN VERIFICATION ENGINEER
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight leading-none">
                AJAY VARMA M
              </h1>
              <p className="text-xl sm:text-2xl font-heading font-semibold text-[#00f0ff] glow-cyan">
                ASIC DESIGN VERIFICATION ENGINEER
              </p>
              <p className="text-xs sm:text-sm font-mono text-purple-300 tracking-wide pt-1">
                SystemVerilog • UVM • AMBA • AXI-Stream • PCIe/DMA • SoC/IP Verification
              </p>
            </div>

            {/* Hero Statement Callout */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#00f0ff]/10 via-[#8a2be2]/10 to-transparent border-l-4 border-[#00f0ff] backdrop-blur-sm">
              <p className="text-lg sm:text-xl font-heading font-bold text-white italic">
                “I verify the silicon before it becomes silicon.”
              </p>
            </div>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans max-w-xl">
              Building reusable verification environments, finding protocol-level bugs, and closing functional coverage across complex ASIC/IP interfaces.
            </p>

            {/* Recruiter Quick Snapshot Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
              <div className="p-2.5 rounded-lg bg-[#0a0d14]/80 border border-slate-800 text-xs">
                <div className="flex items-center gap-1.5 text-slate-400 mb-0.5">
                  <Building2 className="w-3.5 h-3.5 text-[#00f0ff]" /> Current Role
                </div>
                <div className="font-bold text-white truncate">Radiant Semiconductors</div>
              </div>

              <div className="p-2.5 rounded-lg bg-[#0a0d14]/80 border border-slate-800 text-xs">
                <div className="flex items-center gap-1.5 text-slate-400 mb-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00f0ff]" /> Methodology
                </div>
                <div className="font-bold text-white">SystemVerilog / UVM</div>
              </div>

              <div className="p-2.5 rounded-lg bg-[#0a0d14]/80 border border-slate-800 text-xs col-span-2 sm:col-span-1">
                <div className="flex items-center gap-1.5 text-slate-400 mb-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#00f0ff]" /> Location
                </div>
                <div className="font-bold text-white">Hyderabad, India</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#00f0ff] hover:bg-[#33f3ff] text-black font-heading font-bold text-sm shadow-[0_0_20px_rgba(0,240,255,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/Ajay_Krishna_Varma_Resume.docx"
                download="Ajay_Krishna_Varma_Resume.docx"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white border border-[#00f0ff]/40 hover:border-[#00f0ff] font-heading font-semibold text-sm transition-all shadow-lg hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]"
              >
                <FileText className="w-4 h-4 text-[#00f0ff]" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links & Direct Contact */}
            <div className="flex items-center gap-6 pt-4 border-t border-white/10 text-xs font-mono text-slate-400">
              <a
                href="https://github.com/Ajayyyyyyyyyyy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#00f0ff] transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-[#00f0ff]" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/ajay-varma-m-8071a4263/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#00f0ff] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-[#00f0ff]" />
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:ajaymandapati4@gmail.com"
                className="flex items-center gap-2 hover:text-[#00f0ff] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#00f0ff]" />
                <span>ajaymandapati4@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive 3D Chip Canvas & Status Panel */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
            {/* 3D Chip Canvas */}
            <div className="w-full h-[420px] sm:h-[460px] relative">
              <Hero3DCanvas activeBlock={activeBlock} setActiveBlock={setActiveBlock} />
            </div>

            {/* Status HUD next to / below chip */}
            <div className="w-full max-w-sm mt-4 z-20">
              <StatusHud activeBlock={activeBlock} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
