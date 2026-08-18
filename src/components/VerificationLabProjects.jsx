import React, { useState } from 'react';
import { Cpu, ExternalLink, ShieldAlert, CheckCircle2, ChevronDown, ChevronUp, Layers, Terminal, ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function VerificationLabProjects() {
  const [showSecondary, setShowSecondary] = useState(false);

  return (
    <section id="projects" className="py-24 relative silicon-grid border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] font-mono text-xs font-semibold uppercase">
            <Cpu className="w-3.5 h-3.5" />
            Verification Lab
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            FEATURED <span className="gradient-text-cyan">VERIFICATION PROJECTS</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-sans">
            Selected UVM verification environments, testbenches, and custom interconnect bridges built from scratch.
          </p>
        </div>

        {/* Project 1: StreamBridge UVM Verification Environment */}
        <div className="glass-card p-8 rounded-3xl border border-[#00f0ff]/30 mb-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <Layers className="w-96 h-96 text-[#00f0ff]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-[#00f0ff]/20 text-[#00f0ff] font-mono text-xs font-bold border border-[#00f0ff]/40">
                  UVM VERIFICATION IP
                </span>
                <span className="px-2.5 py-1 rounded bg-purple-900/60 text-purple-300 font-mono text-xs border border-purple-500/30">
                  AXI4-Stream / PCIe / DMA
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-heading font-extrabold text-white">
                AXI4-Stream Bridge UVM Verification
              </h3>

              <p className="text-sm text-slate-300 font-sans leading-relaxed">
                An independently-built UVM verification environment for a fictional AXI4-Stream-to-internal-bus bridge with PCIe-style CQ/CC/RQ/RC traffic concepts, DMA paths, tag-indexed transaction tracking, and wide-bus lane checking.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-300 pt-2">
                {[
                  'UVM Architecture (Env/Agent/Driver/Mon)',
                  'CQ / CC / RQ / RC Ring Queues',
                  'DMA Subsystem Verification',
                  'Tag-Indexed Scoreboard & Ref Model',
                  'Shadow Memory Transaction Tracking',
                  'Lane-Level & Burst Size Sweeps',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00f0ff] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Disclaimer */}
              <div className="p-3 rounded-lg bg-amber-950/40 border border-amber-500/30 text-amber-300 text-xs font-mono flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Independent portfolio project — fictional DUT, original implementation, no proprietary RTL or client IP reproduced.</span>
              </div>

              {/* GitHub Button */}
              <div className="pt-2">
                <a
                  href="https://github.com/Ajayyyyyyyyyyy/axi-stream-bridge-uvm-verification"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#00f0ff] hover:bg-[#33f3ff] text-black font-heading font-bold text-xs shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Inspect Code on GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Visual Architecture */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-[#060910] border border-[#00f0ff]/30 font-mono text-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-[#00f0ff] font-bold">STREAMBRIDGE ARCHITECTURE</span>
                  <span className="text-[10px] text-emerald-400">ACTIVE FLOW</span>
                </div>

                <div className="space-y-3">
                  <div className="p-2.5 rounded bg-[#0f1524] border border-slate-700 text-center">
                    <span className="text-purple-300 font-bold block">CQ (Completer Request)</span>
                    <span className="text-[10px] text-slate-400">TVALID / TREADY / TDATA Packet Streams</span>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-slate-400">
                    <span>↓</span>
                    <div className="px-3 py-1 rounded bg-[#00f0ff]/20 text-[#00f0ff] font-bold border border-[#00f0ff]/40">
                      DUT (AXI-Stream Bridge)
                    </div>
                    <span>↓</span>
                  </div>

                  <div className="p-2.5 rounded bg-[#0f1524] border border-slate-700 text-center">
                    <span className="text-purple-300 font-bold block">CC (Completer Completion)</span>
                    <span className="text-[10px] text-slate-400">DMA Engine ↔ Internal Memory</span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-center">
                    <div className="text-[11px] font-bold text-white mb-1">MONITOR ➔ SCOREBOARD ➔ COVERAGE</div>
                    <div className="text-[9px] text-slate-300">Tag matching &amp; lane-level byte alignment checks</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2: MeshLink2AXI UVM Verification */}
        <div className="glass-card p-8 rounded-3xl border border-white/10 mb-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-purple-900/60 text-purple-300 font-mono text-xs font-bold border border-purple-500/40">
                  UVM CUSTOM PROTOCOL
                </span>
                <span className="px-2.5 py-1 rounded bg-[#00f0ff]/20 text-[#00f0ff] font-mono text-xs border border-[#00f0ff]/40">
                  MeshLink to AXI4
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-heading font-extrabold text-white">
                MeshLink2AXI UVM Verification
              </h3>

              <p className="text-sm text-slate-300 font-sans leading-relaxed">
                An independently-built UVM environment for a fictional custom interconnect protocol translated into AXI4, demonstrating custom protocol drivers/monitors, a reference-model scoreboard, shadow memory, burst testing, address-alignment testing, and atomic read-modify-write verification.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-300 pt-2">
                {[
                  'Custom MeshLink Driver & Monitor',
                  'Reference Model Scoreboard',
                  'Shadow Memory Array Validation',
                  'Atomic Read-Modify-Write Tests',
                  'Address-Alignment Functional Bins',
                  'AXI4 Write/Read Channel Handshakes',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Disclaimer */}
              <div className="p-3 rounded-lg bg-amber-950/40 border border-amber-500/30 text-amber-300 text-xs font-mono flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Independent portfolio project — fictional protocol and DUT, created from scratch for demonstration.</span>
              </div>

              {/* GitHub Button */}
              <div className="pt-2">
                <a
                  href="https://github.com/Ajayyyyyyyyyyy/meshlink-axi4-bridge-uvm-verification"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-heading font-bold text-xs shadow-lg transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Inspect Code on GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Visual Packet Flow */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-[#060910] border border-purple-500/30 font-mono text-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-purple-300 font-bold">PACKET TRANSLATION PIPELINE</span>
                  <span className="text-[10px] text-purple-400">MESHLINK ➔ AXI4</span>
                </div>

                <div className="flex items-center justify-around p-3 bg-[#101422] rounded-lg border border-slate-700 text-center text-[10px]">
                  <div className="p-1.5 bg-cyan-950 rounded border border-cyan-500/40 text-cyan-300">HEAD</div>
                  <span>➔</span>
                  <div className="p-1.5 bg-purple-950 rounded border border-purple-500/40 text-purple-300">EXT</div>
                  <span>➔</span>
                  <div className="p-1.5 bg-blue-950 rounded border border-blue-500/40 text-blue-300">BODY</div>
                  <span>➔</span>
                  <div className="p-1.5 bg-amber-950 rounded border border-amber-500/40 text-amber-300">TAIL</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-slate-700 text-center">
                  <span className="text-slate-300 text-[11px] block font-bold mb-1">MeshLink Protocol ➔ Bridge ➔ AXI4 Interface</span>
                  <span className="text-[9px] text-slate-400">Translates flits into AW/W/B and AR/R AXI4 channels</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3: Dual-Port RAM Verification IP */}
        <div className="glass-card p-8 rounded-3xl border border-white/10 mb-12 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div>
              <span className="px-2.5 py-1 rounded bg-emerald-900/60 text-emerald-300 font-mono text-xs font-bold border border-emerald-500/40">
                UVM BLOCK-LEVEL VIP
              </span>
              <h3 className="text-2xl font-heading font-bold text-white mt-2">
                Dual-Port RAM Verification IP
              </h3>
            </div>
            <div className="text-right font-mono text-xs text-emerald-400 bg-emerald-950/60 px-3 py-1.5 rounded border border-emerald-500/40">
              ~95% FUNCTIONAL COVERAGE
            </div>
          </div>

          <p className="text-sm text-slate-300 font-sans leading-relaxed mb-4">
            Full UVM block-level verification environment built for Dual-Port RAM verification IP. Features 4 distinct test sequences, constrained-random testing, directed boundary testing, scoreboard-based write/read checking, zero errors, and detailed functional coverage model.
          </p>

          <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300">
            {['SystemVerilog', 'UVM', 'Constrained-Random', 'Scoreboard', '4 Test Sequences', 'Functional Coverage'].map((t, i) => (
              <span key={i} className="px-2.5 py-1 rounded bg-[#0a0d14] border border-slate-800">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Collapsible Secondary Projects Section */}
        <div className="pt-6 border-t border-slate-800">
          <button
            onClick={() => setShowSecondary(!showSecondary)}
            className="flex items-center gap-2 mx-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-mono text-xs border border-slate-700 transition-colors"
          >
            <span>{showSecondary ? 'Hide Earlier Engineering Projects' : 'Show Earlier Engineering Projects'}</span>
            {showSecondary ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {showSecondary && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
              <div className="p-5 rounded-xl bg-[#0a0d14] border border-slate-800 opacity-70 hover:opacity-100 transition-opacity">
                <h4 className="font-heading font-bold text-white text-base mb-1">Coffee Shop Sales Dashboard</h4>
                <p className="text-xs text-slate-400 mb-3">Data analytics dashboard for sales metric analysis and forecasting.</p>
                <span className="text-[10px] font-mono text-slate-500">Earlier Non-DV Project</span>
              </div>

              <div className="p-5 rounded-xl bg-[#0a0d14] border border-slate-800 opacity-70 hover:opacity-100 transition-opacity">
                <h4 className="font-heading font-bold text-white text-base mb-1">Quiz Website</h4>
                <p className="text-xs text-slate-400 mb-3">Interactive frontend web application with dynamic scoring.</p>
                <span className="text-[10px] font-mono text-slate-500">Earlier Non-DV Project</span>
              </div>

              <div className="p-5 rounded-xl bg-[#0a0d14] border border-slate-800 opacity-70 hover:opacity-100 transition-opacity">
                <h4 className="font-heading font-bold text-white text-base mb-1">E-commerce Website</h4>
                <p className="text-xs text-slate-400 mb-3">Front-end web product showcase interface.</p>
                <span className="text-[10px] font-mono text-slate-500">Earlier Non-DV Project</span>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
