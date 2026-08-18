import React, { useState } from 'react';
import { Cpu, Bot, Workflow, Database, Palette, Globe, Sparkles, CheckCircle2, Zap } from 'lucide-react';

export default function AiToolsSection() {
  const [selectedTool, setSelectedTool] = useState(null);

  const aiToolCategories = [
    {
      title: 'AI Intelligence & Development',
      badge: 'AI & LLMS',
      icon: Bot,
      color: '#00f0ff',
      tools: [
        { name: 'LLMs', level: 'Advanced Prompting & API Integration', desc: 'Large Language Models for automated script generation, verification test plan drafting, and code analysis.' },
        { name: 'Claude Code', level: 'CLI Agentic Coding', desc: 'Command-line AI pairing for codebase refactoring, automated script generation, and documentation.' },
        { name: 'Codex', level: 'Code Synthesis Engine', desc: 'Automated code completion, testbench helper synthesis, and syntax translation.' },
        { name: 'Cursor', level: 'AI-Native IDE Workflows', desc: 'Context-aware AI editing, multi-file code generation, and inline debugging.' },
      ],
    },
    {
      title: 'Workflow & Process Automation',
      badge: 'AUTOMATION PIPELINES',
      icon: Workflow,
      color: '#8a2be2',
      tools: [
        { name: 'Make.com', level: 'Visual Scenario Building', desc: 'No-code integration platform connecting cloud services, webhooks, and automated data pipelines.' },
        { name: 'n8n', level: 'Self-Hosted Automation', desc: 'Node-based workflow automation engine for server triggers, API routing, and system notifications.' },
        { name: 'Automations', level: 'System & Script Triggers', desc: 'Event-driven automated triggers for build status, file monitoring, and background tasks.' },
        { name: 'Workflows', level: 'CI/CD & Task Orchestration', desc: 'Structured multi-stage task pipelines for batch execution and data synchronization.' },
      ],
    },
    {
      title: 'Modern Cloud & Infrastructure',
      badge: 'CLOUD & BACKEND',
      icon: Database,
      color: '#38bdf8',
      tools: [
        { name: 'Supabase', level: 'Realtime Backend / Postgres', desc: 'Open-source Firebase alternative with PostgreSQL database, auth, and realtime subscriptions.' },
        { name: 'Stripe', level: 'Payments & Billing APIs', desc: 'API payment processing, subscription logic, and secure checkout integration.' },
        { name: 'Vercel', level: 'Edge Deployment & Serverless', desc: 'Fast global deployment platform for frontend web apps, serverless functions, and CI/CD.' },
        { name: 'Loveable', level: 'Rapid App Prototyping', desc: 'AI-powered web app generation and full-stack component prototyping.' },
      ],
    },
    {
      title: 'Productivity & Growth Stack',
      badge: 'CREATIVE & GROWTH',
      icon: Palette,
      color: '#10b981',
      tools: [
        { name: 'Canva & PicsArt', level: 'Visual Media Design', desc: 'Graphics creation, image editing, UI asset mockups, and visual presentation design.' },
        { name: 'Notion', level: 'Knowledge Base & Docs', desc: 'Structured documentation, task tracking, verification specs, and project wikis.' },
        { name: 'GBP (Google Business Profile)', level: 'Local Search & Presence', desc: 'Optimizing business profiles, local SEO visibility, and Google Maps presence.' },
        { name: 'GMB Extensions', level: 'Extension Tools', desc: 'Custom browser tools and extensions for business profile data tracking.' },
      ],
    },
  ];

  return (
    <section id="ai-tools" className="py-24 relative silicon-grid border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8a2be2]/10 border border-[#8a2be2]/30 text-purple-300 font-mono text-xs font-semibold uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#00f0ff]" />
            AI &amp; Automation Workstack
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            AI, AUTOMATION &amp; <span className="gradient-text-violet">MODERN TOOLSTACK</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-sans">
            AI-assisted engineering workflows, autonomous agents, no-code integrations, and modern developer tooling.
          </p>
        </div>

        {/* 4 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aiToolCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 relative hover:border-[#00f0ff]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div
                        className="p-3 rounded-2xl bg-slate-900 border"
                        style={{ borderColor: `${cat.color}60` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: cat.color }} />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10">
                          {cat.badge}
                        </span>
                        <h3 className="font-heading font-bold text-white text-lg sm:text-xl mt-1">
                          {cat.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Tool Badges Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {cat.tools.map((tool, tIdx) => (
                      <div
                        key={tIdx}
                        onClick={() => setSelectedTool(tool)}
                        className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all duration-200 ${
                          selectedTool?.name === tool.name
                            ? 'bg-[#00f0ff]/20 border-[#00f0ff] text-white shadow-[0_0_15px_rgba(0,240,255,0.3)] scale-[1.02]'
                            : 'bg-[#0a0d14]/80 border-slate-800/80 text-slate-300 hover:border-[#00f0ff]/40 hover:bg-[#0a0d14]'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-mono text-xs font-bold text-white flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: cat.color }} />
                            {tool.name}
                          </span>
                        </div>
                        <p className="text-[10px] font-mono text-slate-400">{tool.level}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Tool Inspector Popup */}
        {selectedTool && (
          <div className="mt-8 p-6 rounded-2xl bg-[#0a0d14] border border-[#00f0ff]/40 glass-hud animate-fadeIn">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs text-[#00f0ff] font-bold flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" /> TOOLSPEC INSPECTOR
              </span>
              <button
                onClick={() => setSelectedTool(null)}
                className="text-xs font-mono text-slate-400 hover:text-white"
              >
                Close [×]
              </button>
            </div>
            <h4 className="text-xl font-heading font-bold text-white mb-1">{selectedTool.name}</h4>
            <p className="text-xs font-mono text-purple-300 mb-2">{selectedTool.level}</p>
            <p className="text-sm text-slate-300 font-sans">{selectedTool.desc}</p>
          </div>
        )}

      </div>
    </section>
  );
}
