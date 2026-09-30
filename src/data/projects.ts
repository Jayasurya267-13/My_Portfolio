import { ProjectDetail } from '../types/portfolio';

export const FLAGSHIP_PROJECTS: ProjectDetail[] = [
  {
    id: "esa",
    title: "ESA",
    fullTitle: "Edge AI-Based Predictive Maintenance System",
    category: "Edge AI / Predictive Maintenance / IoT",
    primaryIdentity: ["EMBEDDED", "AI", "HARDWARE"],
    tagline: "Intelligent real-time anomaly detection and predictive failure classification on edge sensor streams.",
    status: "IN DEVELOPMENT",
    accentColor: "#00f0ff",
    problem: "Industrial rotating machinery (such as motors, spindles, and pumps) suffers from catastrophic unexpected breakdowns when mechanical wear, rotor imbalance, or thermal spikes go undetected until complete component failure.",
    approach: "Designed an edge telemetry pipeline that streams high-frequency vibration, temperature, and acoustic sensor data through an on-device lightweight machine learning inference routine. Anomalies are flagged before mechanical failure, dispatching alerts to an intuitive engineering monitoring dashboard.",
    technology: [
      "Edge AI / TinyML",
      "ESP32 Microcontroller",
      "Vibration & Temperature Sensors",
      "Python Anomaly Detection",
      "MQTT / WebSockets",
      "Interactive Telemetry Dashboard"
    ],
    implementation: [
      "Interfacing tri-axial vibration accelerometers and thermal probes to low-power microcontroller bus interfaces.",
      "Preprocessing raw sensor waveform streams (FFT spectral windowing & baseline normalization).",
      "Executing lightweight edge classification algorithms to compute continuous anomaly health scores (0-100%).",
      "Emitting warning flags when spectral signatures cross empirical deterioration thresholds.",
      "Live synchronization with the web dashboard for remote plant telemetry visualization."
    ],
    resultsStatus: "Prototype edge telemetry firmware successfully acquired sensor streams with reliable serial/network transmission; live web dashboard displays real-time health index and spectral metrics.",
    futureWork: "Fine-tuning quantized neural network weights directly on microcontroller flash memory; deploying LoRaWAN backhaul for extended industrial range.",
    liveDemoUrl: "https://jayasurya267-13.github.io/ESA-dashboard/",
    metrics: [
      { label: "TARGET INFERENCE", value: "< 25 ms", status: "nominal" },
      { label: "MONITORED AXES", value: "3-Axis Vibration + Temp", status: "nominal" },
      { label: "ALERT LATENCY", value: "Near Real-Time", status: "calibrated" },
      { label: "EDGE PLATFORM", value: "ESP32 + Edge Compute", status: "active" }
    ]
  },
  {
    id: "q-route",
    title: "Q-ROUTE",
    fullTitle: "Quantum-Inspired Intelligent Traffic Route Optimization",
    category: "AI / Intelligent Transportation / Optimization",
    primaryIdentity: ["SOFTWARE", "AI"],
    tagline: "Multi-vehicle dynamic route optimization using Quantum-inspired Particle Swarm Optimization (QPSO) and traffic intelligence.",
    status: "IN DEVELOPMENT",
    accentColor: "#8b5cf6",
    problem: "Urban transit grids face cascading bottleneck congestion when vehicles use static shortest-path heuristics (like Dijkstra or A*), leading to gridlock, fuel waste, and prolonged emergency response latency.",
    approach: "Formulated dynamic route planning as a multi-objective Vehicle Routing Problem (VRP). Applied Quantum-inspired Particle Swarm Optimization (QPSO) with delta potential-well models to explore combinatorial route spaces and continuously adapt vehicle paths around dynamic congestion events.",
    technology: [
      "Python",
      "Quantum-Inspired PSO (QPSO)",
      "Multi-Objective Heuristics",
      "Graph Theory & VRP",
      "Dynamic Network Simulation",
      "Interactive Path Canvas"
    ],
    implementation: [
      "Represented city road networks as dynamic weighted directed multigraphs with edge-latency weights.",
      "Implemented quantum delta-well state equations allowing particles to bypass local minima traps found in standard PSO.",
      "Formulated joint cost fitness incorporating travel duration, congestion penalty, and fleet dispersion.",
      "Enabled dynamic route re-calculation triggered immediately upon simulated road bottleneck incidents."
    ],
    resultsStatus: "Simulated optimization model verified across synthetic multi-node grid topologies, demonstrating faster convergence towards congestion-free alternate paths compared to standard greedy routing.",
    futureWork: "Integration with real-world open street map topology datasets; benchmarking convergence speeds against conventional genetic algorithms.",
    metrics: [
      { label: "OPTIMIZER", value: "QPSO Delta-Well", status: "nominal" },
      { label: "OBJECTIVE", value: "Multi-Vehicle VRP", status: "nominal" },
      { label: "ADAPTATION", value: "Dynamic Rerouting", status: "active" },
      { label: "CONVERGENCE", value: "Stochastic Quantum", status: "calibrated" }
    ]
  },
  {
    id: "helmet-antenna",
    title: "HELMET ANTENNA",
    fullTitle: "Helmet-Mounted Conformal Antenna at 433.5 MHz",
    category: "RF / Antenna Design / CST Simulation",
    primaryIdentity: ["RF", "HARDWARE"],
    tagline: "Compact meandered conformal antenna engineered for helmet-integrated wireless communication around 433.5 MHz.",
    status: "IN DEVELOPMENT",
    accentColor: "#f59e0b",
    problem: "Integrating communication antennas into wearable protective gear (like motorcycle or emergency personnel helmets) requires conformal packaging onto curved dielectric surfaces without bulky protruding whips or severe human body detuning.",
    approach: "Designed a compact meandered planar antenna structure and conformed its geometry to a curved dielectric helmet shell profile. Simulated electromagnetic performance in CST Studio Suite around the 433.5 MHz ISM band, analyzing S11 return loss, surface currents, and impedance matching.",
    technology: [
      "CST Studio Suite",
      "RF & Microwave Engineering",
      "Conformal Geometry Modeling",
      "433.5 MHz ISM Band",
      "S-Parameter & S11 Return Loss",
      "Impedance Matching Analysis"
    ],
    implementation: [
      "Parameterized meander line trace dimensions to achieve electrical resonance within a compact footprint.",
      "Conformed planar substrate onto curved dielectric shell modeling helmet shell materials (polycarbonate/ABS).",
      "Performed finite integration technique (FIT) 3D electromagnetic mesh simulations in CST Studio Suite.",
      "Tuned feed point and matching stubs to optimize S11 return loss towards -15 dB to -18 dB target at 433.5 MHz.",
      "Evaluated far-field radiation patterns and surface current distribution along meandered bends."
    ],
    resultsStatus: "Design is actively simulated and iteratively tuned in CST Studio Suite toward 433.5 MHz center frequency; return loss resonance dips are tracked while accounting for wearable proximity loading.",
    futureWork: "Analyzing SAR (Specific Absorption Rate) loading with human phantom head models; fabricating PCB prototype on flexible dielectric substrate (Polyimide/Rogers).",
    metrics: [
      { label: "TARGET FREQ", value: "433.5 MHz", status: "nominal" },
      { label: "GEOMETRY", value: "Conformal Meander", status: "nominal" },
      { label: "SIMULATOR", value: "CST Studio Suite", status: "active" },
      { label: "STATUS", value: "Simulated & Tuning", status: "calibrated" }
    ]
  }
];
