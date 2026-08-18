import React from 'react';
import { Building2, Calendar, MapPin, CheckCircle2, ChevronRight, Briefcase } from 'lucide-react';

export default function ExperienceTimeline() {
  const experiences = [
    {
      company: 'Radiant Semiconductors',
      role: 'ASIC Design Verification Engineer',
      period: 'April 2025 — Present',
      location: 'Hyderabad, Telangana, India',
      isPrimary: true,
      highlights: [
        'Owned end-to-end UVM testbench development for bus bridge and on-chip interconnect verification IPs from scratch.',
        'Architected reusable UVM components (driver, monitor, sequencer, scoreboard, coverage models) for an AXI-Stream/DMA bridge interfacing with a PCIe Gen3 subsystem.',
        'Verified a proprietary CRVNET-to-AXI4 bridge for a US-based client engagement.',
        'Wrote constrained-random & directed test sequences against defined verification plans (DMA transactions, burst transfers, back-pressure, error injection, protocol boundary conditions).',
        'Drove functional and code coverage closure using Cadence IMC, identifying coverage gaps and writing targeted stimulus.',
        'Debugged RTL-testbench mismatches through SimVision waveform analysis, root-causing protocol-level timing and handshake issues.',
        'Collaborated closely with RTL designers to align on spec intent and close bugs efficiently.',
      ],
      tools: ['SystemVerilog', 'UVM', 'AXI4', 'AXI-Stream', 'PCIe Gen3', 'Cadence Xcelium', 'SimVision', 'IMC', 'Linux'],
    },
    {
      company: 'Semicon Technolabs — VLSI Trainings',
      role: 'ASIC Design Verification Trainee',
      period: 'July 2024 — December 2024',
      location: 'Bengaluru, India',
      isPrimary: true,
      highlights: [
        'Completed comprehensive UVM training program, building a full block-level testbench for Dual-Port RAM verification IP.',
        'Developed 4 test sequences ensuring thorough verification through constrained-random and directed testing.',
        'Achieved zero errors in scoreboard tracking and reached ~95% functional coverage with a detailed coverage model.',
      ],
      tools: ['SystemVerilog', 'UVM', 'Dual-Port RAM', 'Constrained Random', 'Scoreboard', 'Functional Coverage'],
    },
    {
      company: 'Tech Mahindra',
      role: 'Logistics and Supply Chain Management',
      period: 'December 2023 — April 2024',
      location: 'India',
      isPrimary: false,
      highlights: ['Logistics data management and operations coordination.'],
      tools: ['Operations', 'Data Tracking'],
    },
    {
      company: 'InternPe',
      role: 'Frontend Developer',
      period: 'June 2023 — July 2023',
      location: 'Remote',
      isPrimary: false,
      highlights: ['Earlier Web Experience: Front-end layout development and UI component styling.'],
      tools: ['HTML', 'CSS', 'JavaScript'],
    },
  ];

  return (
    <section id="experience" className="py-24 relative silicon-grid border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] font-mono text-xs font-semibold uppercase">
            <Briefcase className="w-3.5 h-3.5" />
            Career History
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            PROFESSIONAL <span className="gradient-text-cyan">EXPERIENCE</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-sans">
            Hands-on front-end ASIC verification engineering across bus bridges, interconnects, and IP testbenches.
          </p>
        </div>

        {/* Vertical Interactive Timeline */}
        <div className="relative border-l-2 border-[#00f0ff]/30 ml-4 sm:ml-32 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-10 group">
              {/* Timeline Glowing Node */}
              <div
                className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all ${
                  exp.isPrimary
                    ? 'bg-[#00f0ff] border-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.8)]'
                    : 'bg-slate-800 border-slate-600'
                }`}
              />

              {/* Date Label on Left for Desktop */}
              <div className="hidden sm:block absolute -left-36 top-1 text-right w-28 font-mono text-xs text-slate-400 font-medium">
                {exp.period}
              </div>

              {/* Experience Card */}
              <div
                className={`glass-card p-6 sm:p-8 rounded-2xl border transition-all ${
                  exp.isPrimary
                    ? 'border-white/10 hover:border-[#00f0ff]/50'
                    : 'border-slate-800/60 opacity-80 hover:opacity-100'
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                        {exp.role}
                      </h3>
                      {exp.isPrimary && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00f0ff]/20 text-[#00f0ff] border border-[#00f0ff]/40">
                          FEATURED DV ROLE
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-[#00f0ff] font-mono font-semibold mt-1">
                      <span className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" /> {exp.company}
                      </span>
                      <span className="text-slate-500">•</span>
                      <span className="flex items-center gap-1 text-slate-400 font-sans text-xs">
                        <MapPin className="w-3.5 h-3.5" /> {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="sm:hidden font-mono text-xs text-slate-400 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                    {exp.period}
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2.5 mb-6 text-sm text-slate-300 font-sans">
                  {exp.highlights.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <ChevronRight className="w-4 h-4 text-[#00f0ff] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tools & Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                  {exp.tools.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded bg-[#0a0d14] text-slate-300 font-mono text-[11px] border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
