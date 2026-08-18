import React, { useState, useEffect } from 'react';
import { Cpu, Play, Pause, RefreshCw, Activity, Terminal, ShieldCheck } from 'lucide-react';

export default function ProtocolWaveforms() {
  const [selectedProtocol, setSelectedProtocol] = useState('AXI_STREAM');
  const [isPlaying, setIsPlaying] = useState(true);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCycle((prev) => (prev + 1) % 8);
    }, 800);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const protocols = [
    { id: 'AXI_STREAM', label: 'AXI4-Stream', title: 'AXI4-Stream Packetized Bus', desc: 'Point-to-point data stream protocol. TVALID and TREADY handshake governs data transfer on TDATA, marked by TLAST packet boundaries and TKEEP byte strobes.' },
    { id: 'PCIE_DMA', label: 'PCIe / DMA', title: 'PCI Express DMA Transaction Layer', desc: 'Completer Request (CQ), Completer Completion (CC), Requester Request (RQ), and Requester Completion (RC) packet ring buffer interfaces.' },
    { id: 'AXI4_MM', label: 'AXI4 Memory-Mapped', title: 'AXI4 5-Channel Memory Interface', desc: 'Separate Write Address (AW), Write Data (W), Write Response (B), Read Address (AR), and Read Data (R) channels enabling full-duplex out-of-order execution.' },
  ];

  // Animated Waveform Data Generator for 8 clock cycles
  const getWaveformData = () => {
    if (selectedProtocol === 'AXI_STREAM') {
      return [
        { name: 'CLK', val: [1, 0, 1, 0, 1, 0, 1, 0], type: 'clk' },
        { name: 'TVALID', val: [0, 1, 1, 1, 1, 0, 1, 1], color: '#00f0ff' },
        { name: 'TREADY', val: [1, 1, 0, 1, 1, 1, 1, 1], color: '#10b981' },
        { name: 'TDATA', val: ['0x0000', '0xA5A5', '0xA5A5', '0x1234', '0xDEAD', '0x0000', '0xFEED', '0xBEEF'], type: 'bus', color: '#a855f7' },
        { name: 'TLAST', val: [0, 0, 0, 0, 1, 0, 0, 1], color: '#f59e0b' },
        { name: 'TKEEP', val: ['0x0', '0xF', '0xF', '0xF', '0xF', '0x0', '0xF', '0xF'], type: 'bus', color: '#38bdf8' },
      ];
    } else if (selectedProtocol === 'PCIE_DMA') {
      return [
        { name: 'CLK', val: [1, 0, 1, 0, 1, 0, 1, 0], type: 'clk' },
        { name: 'CQ_VALID', val: [1, 1, 0, 0, 1, 1, 0, 0], color: '#00f0ff' },
        { name: 'CQ_HEADER', val: ['0x0', '0xADDR_LO', '0x0', '0x0', '0xADDR_HI', '0x0', '0x0', '0x0'], type: 'bus', color: '#a855f7' },
        { name: 'CC_VALID', val: [0, 0, 1, 1, 0, 0, 1, 1], color: '#10b981' },
        { name: 'RQ_VALID', val: [0, 1, 1, 0, 0, 1, 1, 0], color: '#f59e0b' },
        { name: 'RC_VALID', val: [0, 0, 0, 1, 1, 0, 0, 1], color: '#38bdf8' },
      ];
    } else {
      return [
        { name: 'CLK', val: [1, 0, 1, 0, 1, 0, 1, 0], type: 'clk' },
        { name: 'AWVALID', val: [1, 0, 0, 0, 1, 0, 0, 0], color: '#00f0ff' },
        { name: 'AWREADY', val: [1, 1, 0, 0, 1, 1, 0, 0], color: '#10b981' },
        { name: 'WVALID', val: [0, 1, 1, 1, 0, 1, 1, 0], color: '#a855f7' },
        { name: 'WREADY', val: [1, 1, 1, 1, 1, 1, 1, 1], color: '#38bdf8' },
        { name: 'BVALID', val: [0, 0, 0, 1, 0, 0, 0, 1], color: '#f59e0b' },
      ];
    }
  };

  const signals = getWaveformData();
  const currentProtoObj = protocols.find((p) => p.id === selectedProtocol) || protocols[0];

  return (
    <section className="py-24 relative silicon-grid border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] font-mono text-xs font-semibold uppercase">
            <Activity className="w-3.5 h-3.5" />
            Protocol Engineering
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            PROTOCOLS <span className="gradient-text-cyan">I WORK WITH</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-sans">
            Real-time digital signal handshakes and transaction packet structures exercised in testbenches.
          </p>
        </div>

        {/* Waveform Console */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#00f0ff]/30 shadow-2xl">
          
          {/* Header Protocol Selector */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
            <div className="flex flex-wrap gap-2">
              {protocols.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedProtocol(p.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                    selectedProtocol === p.id
                      ? 'bg-[#00f0ff] text-black shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                      : 'bg-[#0a0d14] text-slate-300 border border-slate-800 hover:border-slate-600'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* Play/Pause simulation playback */}
            <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
              <span>CYCLE: T={cycle * 10}ns</span>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-[#00f0ff] border border-slate-700 transition-colors"
                title={isPlaying ? 'Pause Waveform' : 'Play Waveform'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Description Callout */}
          <div className="mb-6 p-4 rounded-xl bg-[#070b14] border border-slate-800 text-xs font-sans text-slate-300">
            <h4 className="font-heading font-bold text-white text-sm mb-1">{currentProtoObj.title}</h4>
            <p>{currentProtoObj.desc}</p>
          </div>

          {/* Simulated Waveform Canvas UI */}
          <div className="waveform-container p-4 sm:p-6 rounded-2xl overflow-x-auto space-y-4">
            
            {/* Clock Markers Bar */}
            <div className="flex items-center gap-4 border-b border-slate-800 pb-2 text-[10px] font-mono text-slate-500">
              <div className="w-24 shrink-0 font-bold">SIGNAL NAME</div>
              <div className="grid grid-cols-8 gap-2 w-full text-center">
                {Array.from({ length: 8 }).map((_, i) => (
                  <span key={i} className={cycle === i ? 'text-[#00f0ff] font-bold' : ''}>
                    T{i * 10}ns
                  </span>
                ))}
              </div>
            </div>

            {/* Signals list */}
            {signals.map((sig, sIdx) => (
              <div key={sIdx} className="flex items-center gap-4 font-mono text-xs">
                {/* Signal Name Label */}
                <div className="w-24 shrink-0 font-bold text-slate-300 flex items-center justify-between pr-2">
                  <span>{sig.name}</span>
                </div>

                {/* Signal Timeline Visualizer */}
                <div className="grid grid-cols-8 gap-1 sm:gap-2 w-full items-center">
                  {sig.val.map((val, cIdx) => {
                    const isCurrent = cycle === cIdx;
                    return (
                      <div
                        key={cIdx}
                        className={`h-9 rounded flex items-center justify-center transition-all ${
                          isCurrent ? 'ring-1 ring-[#00f0ff] scale-105 z-10' : ''
                        }`}
                      >
                        {sig.type === 'bus' ? (
                          <div
                            className="w-full h-7 rounded flex items-center justify-center text-[10px] font-bold px-1 truncate border"
                            style={{
                              backgroundColor: `${sig.color}15`,
                              borderColor: `${sig.color}60`,
                              color: sig.color,
                            }}
                          >
                            {val}
                          </div>
                        ) : (
                          <div className="w-full h-full flex flex-col justify-between py-1">
                            {/* High/Low Square Wave Step Representation */}
                            <div
                              className="w-full h-1 rounded-full transition-all"
                              style={{
                                backgroundColor: val === 1 ? sig.color || '#00f0ff' : '#1e293b',
                                boxShadow: val === 1 && isCurrent ? `0 0 10px ${sig.color || '#00f0ff'}` : 'none',
                              }}
                            />
                            <div className="text-[9px] text-slate-500 text-center font-bold">{val}</div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" /> Handshake Rules: TVALID must remain asserted until TREADY is high.
            </span>
            <span className="hidden sm:inline text-slate-500">SIMVISION GTKWAVE WAVEFORM VISUALIZER</span>
          </div>

        </div>

      </div>
    </section>
  );
}
