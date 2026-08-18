import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Building2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative silicon-grid border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] font-mono text-xs font-semibold uppercase">
            <Mail className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            LET’S <span className="gradient-text-cyan">CONNECT</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-sans">
            Open to technical discussions, verification team opportunities, and ASIC design verification roles.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-6">
              <div>
                <h3 className="text-2xl font-heading font-bold text-white mb-1">Ajay Varma M</h3>
                <p className="text-sm font-mono text-[#00f0ff] font-semibold">ASIC Design Verification Engineer</p>
              </div>

              <div className="space-y-4 text-sm text-slate-300 font-sans">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-[#00f0ff]">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">Current Engagement</span>
                    <span className="font-semibold text-white">Radiant Semiconductors</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-[#00f0ff]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">Location</span>
                    <span className="font-semibold text-white">Hyderabad, Telangana, India</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-[#00f0ff]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">Email Address</span>
                    <a href="mailto:ajaymandapati4@gmail.com" className="font-semibold text-white hover:text-[#00f0ff] transition-colors">
                      ajaymandapati4@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-4">
                <a
                  href="https://github.com/Ajayyyyyyyyyyy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-mono text-xs border border-slate-800 transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-[#00f0ff]" /> GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/ajay-varma-m-8071a4263/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-mono text-xs border border-slate-800 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#00f0ff]" /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 rounded-3xl border border-[#00f0ff]/30 shadow-2xl">
              {formSubmitted ? (
                <div className="p-8 text-center space-y-3 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-white">Message Transmitted!</h4>
                  <p className="text-xs text-slate-300 font-mono">
                    Thank you for reaching out. I will respond to your verification inquiry promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 font-sans">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 font-bold mb-1.5 uppercase">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Verification Lead / Recruiter Name"
                      className="w-full px-4 py-3 rounded-xl bg-[#070a12] border border-slate-800 focus:border-[#00f0ff] focus:outline-none text-sm text-white font-mono transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 font-bold mb-1.5 uppercase">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#070a12] border border-slate-800 focus:border-[#00f0ff] focus:outline-none text-sm text-white font-mono transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 font-bold mb-1.5 uppercase">
                      Message / Inquiry
                    </label>
                    <textarea
                      rows="4"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Discuss ASIC DV projects, role openings, or protocol verification..."
                      className="w-full px-4 py-3 rounded-xl bg-[#070a12] border border-slate-800 focus:border-[#00f0ff] focus:outline-none text-sm text-white font-mono transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#00f0ff] hover:bg-[#33f3ff] text-black font-heading font-extrabold text-sm shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>SEND MESSAGE</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
