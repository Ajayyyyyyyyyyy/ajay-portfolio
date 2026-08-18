import React from 'react';
import { Cpu, ShieldCheck, Zap, Layers } from 'lucide-react';

export default function CareerFocus() {
  return (
    <section className="py-24 relative silicon-grid border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-card p-10 sm:p-16 rounded-3xl border border-[#00f0ff]/30 shadow-2xl relative overflow-hidden text-center max-w-4xl mx-auto">
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00f0ff]/10 via-[#8a2be2]/10 to-transparent pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] font-mono text-xs font-semibold uppercase">
              <Cpu className="w-3.5 h-3.5" />
              Career Vision
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
              WHAT I’M <span className="gradient-text-cyan">BUILDING TOWARD</span>
            </h2>

            <p className="text-base sm:text-xl text-slate-300 font-sans leading-relaxed max-w-2xl mx-auto">
              “SoC-level verification, high-speed interfaces, PCIe, DMA, complex interconnects, and product-company ASIC verification.”
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
