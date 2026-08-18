# ⚡ 3D Silicon Verification Workstation — Personal Portfolio
> **Ajay Varma M** | **ASIC Design Verification Engineer**  
> *SystemVerilog • UVM • AMBA • AXI-Stream • PCIe/DMA • SoC/IP Verification*

![ASIC DV](https://img.shields.io/badge/Domain-ASIC%20Design%20Verification-00f0ff?style=for-the-badge&logo=cpu)
![Methodology](https://img.shields.io/badge/Methodology-UVM%201.2%20%2F%20SystemVerilog-8a2be2?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Frontend-React%2019%20%7C%20Three.js%20%7C%20TailwindCSS-10b981?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

**🔗 Live: [ajay-portfolio-taupe-three.vercel.app](https://ajay-portfolio-taupe-three.vercel.app)**

---

## 🎯 Positioning

> **“I verify the silicon before it becomes silicon.”**

Building reusable verification environments from the ground up, finding protocol-level bugs, and closing functional and code coverage across complex ASIC/IP interfaces.

---

## ✨ Key Features & Interactive Lab Modules

### 1. 🎛️ 3D Semiconductor IC Chip Die (Three.js WebGL)
- Interactive 3D flip-chip die package with gold I/O pins, metallic silicon die texture, glowing circuit routing tracks, and floating particle fields.
- Real-time animated data packets traveling across circuit routes between active logic blocks: `UVM`, `SYSTEMVERILOG`, `AXI4`, `PCIe / DMA`, `SVA`, `COVERAGE`, and `DEBUG`.
- Interactive mouse parallax, tilt control, and live status inspection on the **Verification Status HUD**.

### 2. 🔬 Interactive UVM Testbench Simulator ("Inside My Verification Lab")
- Interactive 10-stage UVM testbench architecture flow:
  `TEST` ➔ `SEQUENCE` ➔ `SEQUENCER` ➔ `DRIVER` ➔ `INTERFACE` ➔ `DUT` ➔ `MONITOR` ➔ `ANALYSIS PORT` ➔ `SCOREBOARD` ➔ `COVERAGE`
- **Live Stimulus Injection**: Trigger `[ Inject Burst Tx ]` or `[ Inject Stress Tx ]` to watch transaction flits travel step-by-step through components with real-time `[uvm_info]` simulation log streams, scoreboard match counters, and coverage closure gauges.

### 3. 📡 Animated Digital Waveform Viewers ("Protocols I Work With")
- Real-time digital signal timing diagrams for key hardware interfaces:
  - **AXI4-Stream**: `TVALID`, `TREADY`, `TDATA` (0xA5A5, 0x1234, 0xDEAD), `TLAST`, `TKEEP`.
  - **PCIe / DMA**: Completer Request (`CQ`), Completer Completion (`CC`), Requester Request (`RQ`), Requester Completion (`RC`).
  - **AXI4 Memory-Mapped**: `AWVALID`, `AWREADY`, `WVALID`, `WREADY`, `BVALID`.
- Play/pause clock cycle playback simulation controller (`T=0ns` through `T=70ns`).

### 4. 🐞 Root-Cause Waveform Debug Engine ("When the Waveform Fails, I Find Why")
- SimVision / GTKWave inspired 6-stage debug methodology:
  1. 🛑 `Protocol Violation (SVA Assertion Failure)`
  2. 🔍 `Waveform Inspection (SimVision Signal Probing)`
  3. 📦 `Transaction Reconstruction (UVM Monitor TLM)`
  4. 🎯 `Root-Cause Analysis (RTL vs TB Handshake Mismatch)`
  5. 🛠️ `RTL / TB Correction & Boundary Test Addition`
  6. ⚡ `Regression Suite Execution & Sign-Off`

### 5. 🤖 AI, Automation & Modern Toolstack Section
- Dedicated showcase of AI-assisted engineering and workflow automation tools:
  - **AI & LLMs**: `LLMs`, `Claude Code`, `Codex`, `Cursor`
  - **Automation Pipelines**: `Make.com`, `n8n`, `Automations`, `Workflows`
  - **Cloud Infrastructure**: `Supabase`, `Stripe`, `Vercel`, `Loveable`
  - **Productivity & Growth**: `Canva & PicsArt`, `Notion`, `Google Business Profile (GBP)`, `GMB Extensions`

---

## 📁 Repository Structure

```text
├── public/
│   └── Ajay_Krishna_Varma_Resume.docx  # Official ASIC DV Engineer Resume
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                  # Top navigation & mobile drawer
│   │   ├── Hero.jsx                    # Hero headline & 3D workstation entry
│   │   ├── Hero3DCanvas.jsx            # Three.js 3D Semiconductor Chip Die
│   │   ├── StatusHud.jsx               # Futuristic Verification Status HUD
│   │   ├── AboutSection.jsx            # Philosophy & Verification Pipeline Flow
│   │   ├── StackConstellation.jsx      # Interactive Verification Tech Network
│   │   ├── AiToolsSection.jsx          # AI & Automation Workstack
│   │   ├── ExperienceTimeline.jsx      # Radiant Semiconductors & Semicon Technolabs
│   │   ├── VerificationLabProjects.jsx # StreamBridge UVM & MeshLink2AXI Projects
│   │   ├── UvmLabSimulator.jsx         # Interactive UVM Simulator & Log Stream
│   │   ├── ProtocolWaveforms.jsx       # Animated AXI-Stream & PCIe Waveform Canvas
│   │   ├── DebugWaveformSection.jsx    # SimVision Debug Workflow Walkthrough
│   │   ├── CareerFocus.jsx             # SoC-Level DV & Silicon Vision
│   │   ├── RecruiterCta.jsx            # Recruiter Quick-Pass Banner
│   │   ├── ContactSection.jsx          # Contact Form & Location Info
│   │   ├── Icons.jsx                   # Custom SVG Brand Icons
│   │   └── Footer.jsx                  # Footer & Quick Links
│   ├── App.jsx                         # Main Application Container
│   ├── main.jsx                        # React 19 Entry Point
│   └── index.css                       # Design System & Silicon Dark Theme
├── index.html                          # SEO Metadata & Google Fonts
├── vite.config.js                      # Vite + TailwindCSS 4 Config
└── package.json                        # Project Dependencies
```

---

## 🛠️ Local Development & Build

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/Ajayyyyyyyyyyy/asic-dv-portfolio.git

# Navigate into the project folder
cd asic-dv-portfolio

# Install dependencies
npm install

# Start local development server
npm run dev
```

The application will be accessible at `http://127.0.0.1:3000/`.

### Production Build

```bash
# Compile production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 👤 Profile & Contact Details

* **Engineer**: Ajay Varma M
* **Role**: ASIC Design Verification Engineer
* **Current Engagement**: Radiant Semiconductors (Hyderabad, India)
* **Email**: [ajaymandapati4@gmail.com](mailto:ajaymandapati4@gmail.com)
* **GitHub**: [github.com/Ajayyyyyyyyyyy](https://github.com/Ajayyyyyyyyyyy)
* **LinkedIn**: [linkedin.com/in/ajay-varma-m-8071a4263](https://www.linkedin.com/in/ajay-varma-m-8071a4263/)

---

*Independent portfolio project — original web design & software implementation. No proprietary employer or client RTL reproduced.*
