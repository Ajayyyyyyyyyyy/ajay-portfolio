import React from 'react';
import { ShieldCheck, Cpu, Terminal, Zap, CheckCircle2, AlertCircle } from 'lucide-react';

export default function StatusHud({ activeBlock }) {
  const blockDetails = {
    UVM: { name: 'UVM 1.2 Testbench Architecture', status: 'ACTIVE & REUSABLE', desc: 'Driver, Monitor, Sequencer, Scoreboard & Coverage Components' },
    SYSTEMVERILOG: { name: 'SystemVerilog HVL', status: 'COMPILED (XCELIUM)', desc: 'Constrained-Random Stimulus, OOP Classes, Interfaces' },
    AXI4: { name: 'AXI4 / AXI-Stream Protocol', status: 'HANDSHAKE VERIFIED', desc: 'TVALID/TREADY, Burst sweeps, Backpressure, Tag tracking' },
    PCIe: { name: 'PCIe Gen3 / DMA Subsystem', status: 'CQ/CC/RQ/RC MONITORED', desc: 'Completer & Requester ring buffer & payload checking' },
    SVA: { name: 'SystemVerilog Assertions', status: 'CHECKING PARITY', desc: 'Protocol boundary conditions & concurrency assertions' },
    COVERAGE: { name: 'Cadence IMC Coverage', status: 'TRACKING (~95%)', desc: 'Functional coverage bins, cross-coverage & code closure' },
    DEBUG: { name: 'SimVision Waveform Debug', status: 'ZERO MISMATCHES', desc: 'Protocol-level timing & handshake root-cause analysis' },
  };

  const selectedInfo = activeBlock && blockDetails[activeBlock] ? blockDetails[activeBlock] : null;

  return (
    <div className="glass-hud clip-corner p-4 rounded-xl max-w-sm w-full font-mono text-xs text-slate-300 relative overflow-hidden border border-[#00f0ff]/30 shadow-[0_0_30px_rgba(0,0,0,0.8)]">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#00f0ff]/20 mb-3">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-[#00f0ff] animate-pulse" />
          <span className="font-bold text-white tracking-wider text-xs">VERIFICATION STATUS</span>
        </div>
        <span className="flex items-center gap-1.5 text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          ONLINE
        </span>
      </div>

      {/* Main Status Grid */}
      <div className="grid grid-cols-2 gap-2.5 mb-3 text-[11px]">
        <div className="bg-[#0f1422]/80 p-2 rounded border border-slate-800 flex items-center justify-between">
          <span className="text-slate-400">SYSTEM:</span>
          <span className="text-emerald-400 font-bold flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> ONLINE
          </span>
        </div>

        <div className="bg-[#0f1422]/80 p-2 rounded border border-slate-800 flex items-center justify-between">
          <span className="text-slate-400">UVM:</span>
          <span className="text-[#00f0ff] font-bold">ACTIVE</span>
        </div>

        <div className="bg-[#0f1422]/80 p-2 rounded border border-slate-800 flex items-center justify-between">
          <span className="text-slate-400">PROTOCOLS:</span>
          <span className="text-purple-400 font-bold">04+ (AXI/PCIe)</span>
        </div>

        <div className="bg-[#0f1422]/80 p-2 rounded border border-slate-800 flex items-center justify-between">
          <span className="text-slate-400">COVERAGE:</span>
          <span className="text-amber-400 font-bold">TRACKING</span>
        </div>

        <div className="bg-[#0f1422]/80 p-2 rounded border border-slate-800 flex items-center justify-between">
          <span className="text-slate-400">DEBUG:</span>
          <span className="text-[#00f0ff] font-bold">ENABLED</span>
        </div>

        <div className="bg-[#0f1422]/80 p-2 rounded border border-slate-800 flex items-center justify-between">
          <span className="text-slate-400">SILICON:</span>
          <span className="text-emerald-400 font-bold">VERIFIED</span>
        </div>
      </div>

      {/* Dynamic Inspector Panel (updates on chip hover/click) */}
      <div className="mt-2 p-2.5 rounded-lg bg-[#00f0ff]/5 border border-[#00f0ff]/20 transition-all">
        {selectedInfo ? (
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-[#00f0ff]">{selectedInfo.name}</span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#00f0ff]/20 text-[#00f0ff]">
                {selectedInfo.status}
              </span>
            </div>
            <p className="text-[10px] text-slate-300 leading-tight">{selectedInfo.desc}</p>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-slate-400">
            <Zap className="w-3.5 h-3.5 text-[#00f0ff] animate-bounce" />
            <span className="text-[10px]">Hover or click chip blocks to inspect UVM components</span>
          </div>
        )}
      </div>
    </div>
  );
}
