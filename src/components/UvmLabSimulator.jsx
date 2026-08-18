import React, { useState, useEffect } from 'react';
import { Cpu, Play, RefreshCw, Terminal, CheckCircle2, AlertTriangle, Activity, Sliders, Layers } from 'lucide-react';

export default function UvmLabSimulator() {
  const [activeComponent, setActiveComponent] = useState('DRIVER');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simStep, setSimStep] = useState(0);
  const [matchesCount, setMatchesCount] = useState(4096);
  const [coveragePct, setCoveragePct] = useState(94.8);
  const [simLogs, setSimLogs] = useState([
    { time: '0.00ns', source: 'UVM_INFO', text: '[uvm_test_top] Starting test: axi_stream_random_burst_test' },
    { time: '10.00ns', source: 'UVM_INFO', text: '[ENV] UVM Testbench components connected successfully' },
  ]);

  const components = [
    { id: 'TEST', name: 'TEST', role: 'uvm_test', desc: 'Instantiates testbench environment, configures test parameters, and starts default sequence.' },
    { id: 'SEQUENCE', name: 'SEQUENCE', role: 'uvm_sequence', desc: 'Generates constrained-random transaction items (uvm_sequence_item) representing protocol bursts.' },
    { id: 'SEQUENCER', name: 'SEQUENCER', role: 'uvm_sequencer', desc: 'Arbitrates transaction requests and feeds items to the driver via TLM FIFO interface.' },
    { id: 'DRIVER', name: 'DRIVER', role: 'uvm_driver', desc: 'Converts transactions into pin-level/protocol activity (TVALID, TREADY, TDATA pin toggling).' },
    { id: 'INTERFACE', name: 'INTERFACE', role: 'virtual interface', desc: 'SystemVerilog physical pin interconnect bundled with clocking blocks and Modports.' },
    { id: 'DUT', name: 'DUT', role: 'AXI-Stream RTL', desc: 'Design Under Test hardware logic being exercised by stimulus and monitored for correctness.' },
    { id: 'MONITOR', name: 'MONITOR', role: 'uvm_monitor', desc: 'Observes DUT activity passively and reconstructs pin toggles into high-level transaction packets.' },
    { id: 'AP', name: 'ANALYSIS PORT', role: 'uvm_analysis_port', desc: 'TLM broadcast port delivering monitored transaction packets to scoreboard & coverage subscriber.' },
    { id: 'SCOREBOARD', name: 'SCOREBOARD', role: 'uvm_scoreboard', desc: 'Compares actual DUT behavior against predicted gold values from shadow memory reference model.' },
    { id: 'COVERAGE', name: 'COVERAGE', role: 'uvm_subscriber', desc: 'Measures whether planned scenarios, burst sizes, and functional space have been exercised.' },
  ];

  const handleInjectTransaction = (type = 'BURST') => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimStep(0);

    const now = (Math.random() * 50 + 100).toFixed(2);
    const newLogs = [
      { time: `${now}ns`, source: 'UVM_INFO', text: `[SEQ] Generating ${type} transaction sequence (len=16, addr=0x4000_1000)` },
    ];

    let current = 0;
    const interval = setInterval(() => {
      current++;
      setSimStep(current);
      const stepComp = components[current];

      if (stepComp) {
        setActiveComponent(stepComp.id);
        if (stepComp.id === 'DRIVER') {
          newLogs.push({ time: `${(parseFloat(now) + current * 5).toFixed(2)}ns`, source: 'UVM_INFO', text: '[DRIVER] Driving TVALID=1 TDATA=0xDEAD_BEEF on AXI-Stream interface' });
        } else if (stepComp.id === 'MONITOR') {
          newLogs.push({ time: `${(parseFloat(now) + current * 5).toFixed(2)}ns`, source: 'UVM_INFO', text: '[MONITOR] Sampled TLAST flit. Reconstructed transaction packet #4097' });
        } else if (stepComp.id === 'SCOREBOARD') {
          newLogs.push({ time: `${(parseFloat(now) + current * 5).toFixed(2)}ns`, source: 'UVM_INFO', text: '✅ [SCOREBOARD] MATCH: Exp=0xDEAD_BEEF Act=0xDEAD_BEEF (Tag=0x0F)' });
          setMatchesCount((prev) => prev + 1);
        } else if (stepComp.id === 'COVERAGE') {
          newLogs.push({ time: `${(parseFloat(now) + current * 5).toFixed(2)}ns`, source: 'UVM_INFO', text: '📊 [COVERAGE] Hit bin: burst_len_16 x backpressure_active' });
          setCoveragePct((prev) => Math.min(99.4, +(prev + 0.1).toFixed(1)));
        }
        setSimLogs((prev) => [...prev.slice(-6), ...newLogs.slice(-1)]);
      }

      if (current >= components.length - 1) {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 450);
  };

  const selectedComp = components.find((c) => c.id === activeComponent) || components[3];

  return (
    <section id="lab" className="py-24 relative silicon-grid border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] font-mono text-xs font-semibold uppercase">
            <Cpu className="w-3.5 h-3.5" />
            Interactive Testbench Simulator
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            INSIDE MY <span className="gradient-text-cyan">VERIFICATION LAB</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-sans">
            Interactive UVM Testbench Architecture. Inject live transactions to visualize signal propagation and scoreboard checking.
          </p>
        </div>

        {/* Simulator Container */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#00f0ff]/30 shadow-2xl relative">
          
          {/* Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-slate-300 font-bold">INJECT STIMULUS:</span>
              <button
                onClick={() => handleInjectTransaction('RANDOM_BURST')}
                disabled={isSimulating}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#00f0ff] hover:bg-[#33f3ff] text-black font-mono text-xs font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)] disabled:opacity-50 transition-all"
              >
                <Play className="w-3.5 h-3.5" />
                <span>Inject Burst Tx</span>
              </button>

              <button
                onClick={() => handleInjectTransaction('BACKPRESSURE_STRESS')}
                disabled={isSimulating}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-bold shadow-lg disabled:opacity-50 transition-all"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Inject Stress Tx</span>
              </button>
            </div>

            {/* Metrics HUD */}
            <div className="flex items-center gap-4 font-mono text-xs">
              <div className="flex items-center gap-1.5 text-emerald-400 bg-emerald-950/60 px-3 py-1.5 rounded border border-emerald-500/30">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>MATCHES: {matchesCount}</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#00f0ff] bg-[#00f0ff]/10 px-3 py-1.5 rounded border border-[#00f0ff]/30">
                <Activity className="w-3.5 h-3.5" />
                <span>COVERAGE: {coveragePct}%</span>
              </div>
            </div>
          </div>

          {/* Interactive UVM Component Flow Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
            {components.map((comp, idx) => (
              <button
                key={comp.id}
                onClick={() => setActiveComponent(comp.id)}
                className={`p-3.5 rounded-xl border text-center transition-all duration-200 flex flex-col items-center justify-between relative ${
                  activeComponent === comp.id
                    ? 'bg-[#00f0ff]/20 border-[#00f0ff] text-white shadow-[0_0_20px_rgba(0,240,255,0.4)] scale-105 z-10'
                    : isSimulating && simStep === idx
                    ? 'bg-purple-600/40 border-purple-400 text-white scale-110 shadow-[0_0_20px_rgba(138,43,226,0.6)] z-20'
                    : 'bg-[#0a0d14] border-slate-800 text-slate-400 hover:border-slate-600 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1 text-[9px] font-mono text-slate-500 font-bold">
                  <span>0{idx + 1}</span>
                  {activeComponent === comp.id && (
                    <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping" />
                  )}
                </div>
                <span className="font-mono text-xs font-extrabold tracking-wider text-white my-1">{comp.name}</span>
                <span className="text-[9px] font-mono text-slate-400 truncate w-full">{comp.role}</span>
              </button>
            ))}
          </div>

          {/* Detailed Role Modal Card & Live Console */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Component UVM Role Explanation */}
            <div className="lg:col-span-6 p-5 rounded-2xl bg-[#070b14] border border-[#00f0ff]/30">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-[#00f0ff] font-bold">UVM COMPONENT SPECIFICATION</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                  {selectedComp.role}
                </span>
              </div>

              <h4 className="text-xl font-heading font-bold text-white mb-2">{selectedComp.name}</h4>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                {selectedComp.desc}
              </p>
            </div>

            {/* Live UVM Log Console Stream */}
            <div className="lg:col-span-6 p-5 rounded-2xl bg-[#06080d] border border-slate-800 font-mono text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-3">
                <div className="flex items-center gap-2 text-slate-400">
                  <Terminal className="w-4 h-4 text-[#00f0ff]" />
                  <span className="font-bold text-white">SIMULATION LOG STREAM</span>
                </div>
                <span className="text-[10px] text-emerald-400">LOGS ACTIVE</span>
              </div>

              <div className="space-y-2 max-h-36 overflow-y-auto pr-1">
                {simLogs.map((log, idx) => (
                  <div key={idx} className="text-[11px] flex items-start gap-2">
                    <span className="text-slate-500 text-[10px] shrink-0">{log.time}</span>
                    <span className="text-purple-400 font-bold shrink-0">[{log.source}]</span>
                    <span className="text-slate-300 truncate">{log.text}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
