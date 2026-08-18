import React, { useState } from 'react';
import { Cpu, CheckCircle2, ArrowRight, Shield, Layers, FileCode, Search, CheckSquare } from 'lucide-react';

export default function AboutSection() {
  const [activeFlowStep, setActiveFlowStep] = useState('DRIVER');

  const flowSteps = [
    { id: 'SPEC', label: 'SPEC', name: 'Specification & Arch', desc: 'Analyzing IP specifications, protocol handshakes, and register maps to establish verification intent.' },
    { id: 'TEST_PLAN', label: 'TEST PLAN', name: 'Verification Test Plan', desc: 'Defining directed tests, constrained-random scenarios, assertion targets, and functional coverage matrix.' },
    { id: 'SEQUENCES', label: 'SEQUENCES', name: 'UVM Sequences', desc: 'Developing object-oriented constrained-random stimulus sequences for normal and corner-case stress.' },
    { id: 'DRIVER', label: 'DRIVER', name: 'UVM Driver Component', desc: 'Translating high-level transaction items (uvm_sequence_item) into cycle-accurate pin protocol handshakes.' },
    { id: 'DUT', label: 'DUT', name: 'Design Under Test (RTL)', desc: 'The target IP / bus bridge RTL module under verification (AXI4-Stream, PCIe DMA, Dual-Port RAM).' },
    { id: 'MONITOR', label: 'MONITOR', name: 'UVM Monitor Component', desc: 'Passively observing DUT pin activity, reconstructing valid transaction packets, and broadcasting to analysis ports.' },
    { id: 'SCOREBOARD', label: 'SCOREBOARD', name: 'Scoreboard & Ref Model', desc: 'Comparing monitored output transactions against predicted gold values from C++/SystemVerilog reference models.' },
    { id: 'COVERAGE', label: 'COVERAGE', name: 'Functional & Code Coverage', desc: 'Measuring bin hits using Cadence IMC, cross-coverage combinations, line, toggle, and FSM code coverage.' },
    { id: 'DEBUG', label: 'DEBUG', name: 'SimVision Waveform Debug', desc: 'Root-causing protocol-level mismatches, timing violations, and handshake stalls in waveform viewer.' },
    { id: 'SIGNOFF', label: 'SIGN-OFF', name: 'Verification Sign-Off', desc: 'Achieving zero scoreboard errors, 100% test pass rate, and ~95%+ coverage closure for silicon confidence.' },
  ];

  const currentStep = flowSteps.find((s) => s.id === activeFlowStep) || flowSteps[3];

  return (
    <section id="about" className="py-24 relative silicon-grid border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] font-mono text-xs font-semibold uppercase">
            <Cpu className="w-3.5 h-3.5" />
            Verification Philosophy
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            ENGINEERING THE CONFIDENCE <span className="gradient-text-cyan">BEHIND SILICON</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-sans">
            Building reusable, scalable UVM testbench architectures to eliminate protocol defects prior to tapeout.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Professional Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-card p-8 rounded-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                <Shield className="w-32 h-32 text-[#00f0ff]" />
              </div>

              <p className="text-base text-slate-200 leading-relaxed font-sans font-medium mb-6">
                “I’m an ASIC Design Verification Engineer focused on SystemVerilog and UVM-based verification of IP and interconnect designs. I build reusable verification environments from the ground up, develop constrained-random and directed stimulus, implement scoreboards and coverage models, and debug RTL/testbench mismatches at protocol and transaction level.”
              </p>

              {/* Key Verification Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'UVM Testbench Architecture',
                  'Drivers, Monitors & Sequencers',
                  'Scoreboards & Reference Models',
                  'Constrained-Random Stimulus',
                  'Functional & Code Coverage (IMC)',
                  'SystemVerilog Assertions (SVA)',
                  'SimVision Waveform & Root-Cause',
                  'AXI4 / AXI-Stream / PCIe Protocols',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#00f0ff] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Verification Flow Diagram */}
          <div className="lg:col-span-6">
            <div className="glass-panel p-6 rounded-2xl border border-[#00f0ff]/30 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#00f0ff]" />
                  <h3 className="font-heading font-bold text-white text-base">VERIFICATION PIPELINE FLOW</h3>
                </div>
                <span className="text-[11px] font-mono text-slate-400">Click or hover flow steps</span>
              </div>

              {/* Flow Steps Diagram */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6">
                {flowSteps.map((step, idx) => (
                  <button
                    key={step.id}
                    onMouseEnter={() => setActiveFlowStep(step.id)}
                    onClick={() => setActiveFlowStep(step.id)}
                    className={`p-2.5 rounded-lg border text-center transition-all duration-200 flex flex-col items-center justify-center relative ${
                      activeFlowStep === step.id
                        ? 'bg-[#00f0ff]/20 border-[#00f0ff] text-white shadow-[0_0_15px_rgba(0,240,255,0.4)] scale-105 z-10'
                        : 'bg-[#0a0d14] border-slate-800 text-slate-400 hover:border-slate-600 hover:text-slate-200'
                    }`}
                  >
                    <span className="text-[10px] font-mono text-slate-500 font-bold mb-0.5">0{idx + 1}</span>
                    <span className="font-mono text-xs font-bold tracking-wider">{step.label}</span>
                  </button>
                ))}
              </div>

              {/* Active Step Details Card */}
              <div className="p-4 rounded-xl bg-[#070b14] border border-[#00f0ff]/30 relative overflow-hidden">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-heading font-bold text-[#00f0ff] text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping" />
                    {currentStep.name}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-900/60 text-purple-300 border border-purple-500/30">
                    STAGE ACTIVE
                  </span>
                </div>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {currentStep.desc}
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
