import React from 'react';
import { FileText, Mail, ShieldCheck, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function RecruiterCta() {
  return (
    <section className="py-20 relative silicon-grid border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-[#00f0ff]/40 shadow-2xl relative overflow-hidden bg-gradient-to-r from-[#060912] via-[#0a0f1d] to-[#060912]">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Info */}
            <div className="space-y-3 max-w-xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold uppercase">
                <ShieldCheck className="w-3.5 h-3.5" />
                Hiring Managers & Recruiter Quick-Pass
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white">
                LOOKING FOR A VERIFICATION ENGINEER?
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-sans">
                Explore my verification projects, technical stack, and professional experience. Targeted at top semiconductor product companies and IP verification groups.
              </p>
            </div>

            {/* Right Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href="/Ajay_Krishna_Varma_Resume.docx"
                download="Ajay_Krishna_Varma_Resume.docx"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#00f0ff] hover:bg-[#33f3ff] text-black font-heading font-bold text-xs shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all transform hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <a
                href="https://github.com/Ajayyyyyyyyyyy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs border border-slate-700 transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-[#00f0ff]" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/ajay-varma-m-8071a4263/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs border border-slate-700 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-[#00f0ff]" />
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:ajaymandapati4@gmail.com"
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-bold transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email Me</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
