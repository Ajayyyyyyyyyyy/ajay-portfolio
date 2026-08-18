import React, { useState } from 'react';
import { Cpu, Terminal, ShieldCheck, GitBranch, Layers, Sliders, Server, Code2 } from 'lucide-react';

export default function StackConstellation() {
  const [selectedNode, setSelectedNode] = useState(null);

  const categories = [
    {
      category: 'Languages',
      icon: Code2,
      color: '#00f0ff',
      items: [
        { name: 'SystemVerilog', desc: 'Object-oriented classes, constraint blocks, virtual interfaces, queues, mailboxes, and covergroups.' },
        { name: 'Verilog', desc: 'RTL module instantiation, testbench tasks, timing checks, and behavioral modeling.' },
        { name: 'SVA', desc: 'SystemVerilog Assertions for concurrent protocol compliance checks and sequence property validation.' },
      ],
    },
    {
      category: 'Methodology',
      icon: ShieldCheck,
      color: '#8a2be2',
      items: [
        { name: 'UVM', desc: 'Universal Verification Methodology 1.2: env, agent, driver, monitor, sequencer, scoreboard, coverage.' },
        { name: 'Constrained Random', desc: 'Developing constraint distributions for address alignment, burst lengths, backpressure, and corner cases.' },
        { name: 'Directed Testing', desc: 'Targeted test sequences for edge-case boundary conditions and deterministic feature verification.' },
      ],
    },
    {
      category: 'Protocols',
      icon: Layers,
      color: '#38bdf8',
      items: [
        { name: 'AXI4', desc: '5-channel memory mapped interface: AW, W, B, AR, R channels with out-of-order transaction support.' },
        { name: 'AXI-Stream', desc: 'Point-to-point packetized stream data interface with TVALID, TREADY, TLAST, TKEEP signalling.' },
        { name: 'AHB / APB', desc: 'AMBA bus protocols for high-performance system backbones and low-bandwidth peripheral control.' },
        { name: 'PCIe / DMA', desc: 'PCI Express transaction layer concepts, Completer & Requester queues (CQ/CC/RQ/RC), DMA transfers.' },
      ],
    },
    {
      category: 'Tools & Infra',
      icon: Terminal,
      color: '#10b981',
      items: [
        { name: 'Cadence Xcelium', desc: 'Enterprise parallel logic simulator for SystemVerilog/UVM compilation and elaboration.' },
        { name: 'SimVision', desc: 'GUI waveform viewer for transaction tracing, signal probing, and handshake timing analysis.' },
        { name: 'Cadence IMC', desc: 'Integrated Metrics Center for functional coverage metrics, code coverage merging, and gap identification.' },
        { name: 'Linux', desc: 'Bash scripting, EDA environment setup, regression runs, and automated log analysis.' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative silicon-grid border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8a2be2]/10 border border-[#8a2be2]/30 text-purple-300 font-mono text-xs font-semibold uppercase">
            <GitBranch className="w-3.5 h-3.5" />
            Verification Technology Stack
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            VERIFICATION <span className="gradient-text-violet">CONSTELLATION</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-sans">
            Connected engineering domains and EDA toolsets for ASIC front-end verification.
          </p>
        </div>

        {/* Constellation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl border border-white/10 relative hover:border-[#00f0ff]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6 pb-3 border-b border-white/10">
                    <div
                      className="p-2.5 rounded-xl bg-slate-900 border"
                      style={{ borderColor: `${cat.color}60` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: cat.color }} />
                    </div>
                    <h3 className="font-heading font-bold text-white text-lg tracking-wide">
                      {cat.category}
                    </h3>
                  </div>

                  {/* Node Chips */}
                  <div className="space-y-3">
                    {cat.items.map((item, i) => (
                      <div
                        key={i}
                        onMouseEnter={() => setSelectedNode(item)}
                        onClick={() => setSelectedNode(item)}
                        className={`p-3 rounded-xl border text-left cursor-pointer transition-all duration-200 ${
                          selectedNode?.name === item.name
                            ? 'bg-[#00f0ff]/15 border-[#00f0ff] text-white shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                            : 'bg-[#0a0d14]/70 border-slate-800 text-slate-300 hover:border-slate-600 hover:bg-[#0a0d14]'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-mono text-xs font-bold text-white">{item.name}</span>
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: cat.color }} />
                        </div>
                        <p className="text-[11px] text-slate-400 line-clamp-2">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Node Engineering Detail Card */}
        {selectedNode && (
          <div className="mt-8 p-6 rounded-2xl bg-[#0a0d14] border border-[#00f0ff]/40 glass-hud animate-fadeIn">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs text-[#00f0ff] font-bold">ENGINEERING CREDIBILITY NOTE</span>
              <button
                onClick={() => setSelectedNode(null)}
                className="text-xs font-mono text-slate-400 hover:text-white"
              >
                Close [×]
              </button>
            </div>
            <h4 className="text-lg font-heading font-bold text-white mb-1">{selectedNode.name}</h4>
            <p className="text-sm text-slate-300 font-sans">{selectedNode.desc}</p>
          </div>
        )}

      </div>
    </section>
  );
}
