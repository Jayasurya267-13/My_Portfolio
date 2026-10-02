# Jayasurya R — Interactive Engineering Portfolio
> **"From Silicon to Systems."**  
> **VLSI × HARDWARE × SOFTWARE**  
> *B.E. Electronics & Communication Engineering (3rd Year / 5th Sem)*  
> *Sri Sai Ram Institute of Technology, Chennai-44, India*

A high-performance personal engineering portfolio designed as an **"Interactive Engineering System"**, uniting digital logic & RTL silicon design, microcontroller & RF hardware, edge AI, and quantum-inspired software optimization.

---

## ⚡ Core Architecture

- **Visual Theme:** "Premium Tech × Engineering Lab" (Deep Obsidian `#05070a`, Circuit Cyan `#00f0ff`, Quantum Violet `#8b5cf6`, Sensor Amber `#f59e0b`).
- **Interactive System Topology:** An interactive central silicon chip architecture connecting:
  - `[CHIP / RTL CORE]` ➔ `[VLSI MODULE]` ➔ `[ESA: Edge AI Predictive Maintenance]`
  - `[CHIP / RTL CORE]` ➔ `[HARDWARE MODULE]` ➔ `[HELMET ANTENNA: 433.5 MHz CST Simulation]`
  - `[CHIP / RTL CORE]` ➔ `[SOFTWARE MODULE]` ➔ `[Q-ROUTE: Quantum Traffic Optimization]`
- **Command Search Palette (`Ctrl + K` / `⌘K`):** Instant fuzzy-searchable interface indexing all projects, skills, frequency parameters, and credentials.
- **Micro-UI:** Subtle engineering HUD reticle cursor and scanning profile frame.
- **Accurate Academic Representation:** Rigorous student terminology (*"ECE Student"*, *"Engineering Developer"*, *"VLSI & Hardware Enthusiast"*), no exaggerated claims or fake metrics.

---

## 🛠️ Flagship Engineering Projects

1. **ESA — Edge AI-Based Predictive Maintenance System**
   - **Domain:** Edge AI / Predictive Maintenance / IoT
   - **Interactive Feature:** Live synthetic vibration FFT spectrum, bearing temperature, acoustic telemetry, and an anomaly trigger simulating mechanical fault transition.
   - **Live System Link:** [https://jayasurya267-13.github.io/ESA-dashboard/](https://jayasurya267-13.github.io/ESA-dashboard/)

2. **Q-ROUTE — Quantum-Inspired Intelligent Traffic Route Optimization**
   - **Domain:** AI / Intelligent Transportation / Optimization
   - **Interactive Feature:** Dynamic transit graph with vehicles, traffic lights, toggleable road bottlenecks, and live QPSO delta-potential well rerouting comparison against standard shortest paths.

3. **Helmet-Mounted Conformal Antenna at 433.5 MHz**
   - **Domain:** RF / Antenna Design / CST Studio Suite Simulation
   - **Interactive Feature:** Futuristic helmet silhouette with conformal meandered microstrip trace, interactive frequency tuning slider (400–460 MHz), toggleable RF radiation field waves, and return loss $S_{11}$ curve ($S_{11} \approx -18.4\text{ dB}$ at 433.5 MHz).

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js (v18+ recommended)
- npm

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Dev Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
```
The optimized, production-ready static assets are compiled into the `dist/` directory.

---

## 📁 How to Personalize & Replace Placeholders

All personal data, placeholders, and links are cleanly separated in `src/data/` for instantaneous customization:

| Item | Location | Instructions |
|---|---|---|
| **Profile Photo** | `public/assets/profile/jayasurya_r.jpg` | Drop your photo named `jayasurya_r.jpg` into this folder. If empty, the HUD frame displays a custom vector monogram with radar reticle. |
| **PDF Resume** | `public/assets/resume/Jayasurya_R_Resume.pdf` | Drop your resume named `Jayasurya_R_Resume.pdf` into this folder. Download and preview links will serve it automatically. |
| **Email Address** | `src/data/config.ts` (`emailPlaceholder`) | Replace `"YOUR_EMAIL_HERE"` with your real email address. |
| **LinkedIn URL** | `src/data/config.ts` (`socials.linkedin.url`) | Update your exact LinkedIn profile link. |
| **LeetCode Stats** | `src/data/journey.ts` (`LEETCODE_CONFIG`) | Update `solvedCountPlaceholder` and `streakDaysPlaceholder` as your stats grow. |
| **Project Details** | `src/data/projects.ts` | Edit technical specifications, metrics, or add future case study results. |

---

## 🌐 Deployment

### Deploy to GitHub Pages
1. In `vite.config.ts`, `base: './'` is already pre-configured for relative path compatibility.
2. Build the project:
   ```bash
   npm run build
   ```
3. Deploy the `dist` folder to your `gh-pages` branch or configure GitHub Actions to deploy from the `main` branch.

---

## 📄 License
© 2026 Jayasurya R. Designed and developed with React, TypeScript, and Tailwind CSS.
