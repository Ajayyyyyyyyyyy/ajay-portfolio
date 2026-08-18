import React, { useState } from 'react';
import { Terminal, AlertTriangle, Search, CheckCircle2, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';

export default function DebugWaveformSection() {
  const [activeStep, setActiveStep] = useState(0);

  const debugWorkflow = [
    {
      stage: '01. PROTOCOL VIOLATION',
      title: 'Assertion Mismatch Flagged',
      icon: AlertTriangle,
      color: '#ef4444',
      detail: 'SystemVerilog Assertion sva_tvalid_drop_without_tready fails at T=125.00ns in Cadence Xcelium simulation.',
      action: 'Flagged TVALID dropping without TREADY acknowledgment on AXI4-Stream bus.',
    },
    {
      stage: '02. WAVEFORM INSPECTION',
      title: 'SimVision Signal Analysis',
      icon: Search,
      color: '#f59e0b',
      detail: 'Opening SimVision waveform viewer. Dragging signals: clk, reset_n, tvld, trdy, tdata, tlast, state.',
      action: 'Isolated glitch at T=125ns: DUT state machine deasserted TVALID prematurely.',
    },
    {
      stage: '03. TX RECONSTRUCTION',
      title: 'UVM Monitor Packet Tracing',
      icon: Terminal,
      color: '#00f0ff',
      detail: 'Reconstructing transaction packet #1024 from UVM Monitor analysis port history.',
      action: 'Found 1 missing flit out of 16 flits in burst length (tag=0x0F mismatch in scoreboard).',
    },
    {
      stage: '04. ROOT-CAUSE ANALYSIS',
      title: 'RTL vs Testbench Intent Alignment',
      icon: Cpu,
      color: '#8a2be2',
      detail: 'Collaborating with RTL design team. Identified counter wrap-around bug in DUT FIFO occupancy logic during backpressure.',
      action: 'Identified off-by-one error in DUT buffer threshold counter under backpressure.',
    },
    {
      stage: '05. RTL / TB CORRECTION',
      title: 'Fix Implementation & Patch',
      icon: CheckCircle2,
      color: '#38bdf8',
      detail: 'RTL designer corrected FIFO threshold logic. Added SVA assertion to verify threshold boundaries.',
      action: 'Applied fix to RTL and added directed test sequence to stress full FIFO boundary.',
    },
    {
      stage: '06. REGRESSION & CLOSURE',
      title: '100% Pass Rate & Coverage Closure',
      icon: ShieldCheck,
      color: '#10b981',
      detail: 'Rerunning random regression suite across 500 seeds. Zero scoreboard errors, 100% test pass rate.',
      action: 'Merged code and functional coverage in Cadence IMC reaching sign-off threshold.',
    },
  ];

  return (
    <section className="py-24 relative silicon-grid border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ef4444]/10 border border-[#ef4444]/30 text-[#ef4444] font-mono text-xs font-semibold uppercase">
            <AlertTriangle className="w-3.5 h-3.5" />
            Root-Cause Waveform Debug
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            WHEN THE WAVEFORM FAILS, <span className="gradient-text-cyan">I FIND WHY</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-sans">
            Structured debug methodology: from assertion violation to waveform root-cause and coverage sign-off.
          </p>
        </div>

        {/* Debug Console UI */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#00f0ff]/30 shadow-2xl">
          
          {/* Debug Workflow Timeline Header */}
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 mb-8">
            {debugWorkflow.map((step, idx) => {
              const Icon = step.icon;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-3 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                    activeStep === idx
                      ? 'bg-[#00f0ff]/20 border-[#00f0ff] text-white shadow-[0_0_15px_rgba(0,240,255,0.4)] scale-105 z-10'
                      : 'bg-[#0a0d14] border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <Icon className="w-4 h-4" style={{ color: step.color }} />
                    <span className="text-[9px] font-mono text-slate-500 font-bold">0{idx + 1}</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold truncate text-white">{step.stage}</span>
                </button>
              );
            })}
          </div>

          {/* Active Step Details Panel */}
          <div className="p-6 rounded-2xl bg-[#06080e] border border-[#00f0ff]/30 relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div
                  className="p-3 rounded-xl bg-slate-900 border"
                  style={{ borderColor: debugWorkflow[activeStep].color }}
                >
                  {React.createElement(debugWorkflow[activeStep].icon, {
                    className: 'w-6 h-6',
                    style: { color: debugWorkflow[activeStep].color },
                  })}
                </div>
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00f0ff]">
                    {debugWorkflow[activeStep].stage}
                  </span>
                  <h3 className="text-xl font-heading font-bold text-white">
                    {debugWorkflow[activeStep].title}
                  </h3>
                </div>
              </div>

              <span className="text-xs font-mono px-3 py-1 rounded bg-slate-800 text-slate-300">
                SimVision Debug Console
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
              <div className="p-4 rounded-xl bg-[#0a0d14] border border-slate-800 space-y-2">
                <span className="text-slate-500 font-bold block text-[10px]">SIMULATION TRACE / EVIDENCE:</span>
                <p className="text-slate-200 leading-relaxed font-sans">{debugWorkflow[activeStep].detail}</p>
              </div>

              <div className="p-4 rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/30 space-y-2">
                <span className="text-[#00f0ff] font-bold block text-[10px]">VERIFICATION ENGINEER ACTION:</span>
                <p className="text-slate-200 leading-relaxed font-sans">{debugWorkflow[activeStep].action}</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
