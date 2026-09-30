import { SkillItem } from '../types/portfolio';

export const SKILL_BLOCKS = [
  {
    id: "vlsi",
    blockNumber: "BLOCK 01",
    title: "VLSI / DIGITAL",
    subtitle: "Silicon Architecture & RTL Design",
    accent: "circuit-cyan",
    colorHex: "#00f0ff",
    description: "Designing synchronous digital hardware architectures, finite state machines, and register-transfer level abstractions verified through logic simulation.",
    skills: [
      {
        name: "Verilog HDL",
        category: "VLSI / DIGITAL",
        descriptor: "Structural, behavioral & dataflow hardware modeling",
        tags: ["HDL", "RTL", "Testbench", "Synthesis"],
        visualType: "rtl",
        codeSnippet: `module ripple_adder_4bit (\n  input  [3:0] A, B,\n  input        Cin,\n  output [3:0] S,\n  output       Cout\n);`
      },
      {
        name: "Xilinx Vivado",
        category: "VLSI / DIGITAL",
        descriptor: "FPGA synthesis, timing constraints & behavioral simulation",
        tags: ["FPGA", "Simulation", "Synthesis", "Bitstream"],
        visualType: "logic"
      },
      {
        name: "Digital Logic",
        category: "VLSI / DIGITAL",
        descriptor: "Combinational & sequential logic, Karnaugh maps, timing diagrams",
        tags: ["FSM", "Boolean Algebra", "Flip-Flops", "Setup/Hold"],
        visualType: "logic"
      },
      {
        name: "RTL Design",
        category: "VLSI / DIGITAL",
        descriptor: "Datapath & control unit decomposition, clock gating & pipelining",
        tags: ["Pipelines", "Registers", "Control Logic", "Verification"],
        visualType: "rtl"
      },
      {
        name: "VLSI Fundamentals",
        category: "VLSI / DIGITAL",
        descriptor: "CMOS layout principles, propagation delays, power-delay product",
        tags: ["CMOS", "Transistor Sizing", "ASIC Flow", "Static Timing"],
        visualType: "rtl"
      }
    ] as SkillItem[]
  },
  {
    id: "hardware",
    blockNumber: "BLOCK 02",
    title: "HARDWARE / EMBEDDED",
    subtitle: "Microcontrollers, Sensors & RF Engineering",
    accent: "circuit-amber",
    colorHex: "#f59e0b",
    description: "Bridging physical electronic environments with microcontrollers, real-time sensor acquisition, edge compute protocols, and electromagnetic CST RF simulations.",
    skills: [
      {
        name: "ESP32",
        category: "HARDWARE / EMBEDDED",
        descriptor: "Dual-core 32-bit MCU, FreeRTOS tasks, Wi-Fi/BLE edge compute",
        tags: ["FreeRTOS", "GPIO", "I2C/SPI", "Edge Compute"],
        visualType: "mcu",
        codeSnippet: `void sensor_task(void *pvParam) {\n  while(1) {\n    read_telemetry(&vibe, &temp);\n    vTaskDelay(pdMS_TO_TICKS(10));\n  }\n}`
      },
      {
        name: "Arduino",
        category: "HARDWARE / EMBEDDED",
        descriptor: "Rapid firmware prototyping, interrupt-driven peripherals",
        tags: ["AVR", "UART", "ADC", "Prototyping"],
        visualType: "mcu"
      },
      {
        name: "Embedded Systems",
        category: "HARDWARE / EMBEDDED",
        descriptor: "Low-level register manipulation, memory maps & peripheral drivers",
        tags: ["DMA", "Timers", "Interrupts", "Bus Architecture"],
        visualType: "mcu"
      },
      {
        name: "Antenna Design",
        category: "HARDWARE / EMBEDDED",
        descriptor: "Meandered planar & conformal radiators, impedance matching & radiation",
        tags: ["433.5 MHz", "Conformal", "Meander Line", "VSWR", "S-Params"],
        visualType: "rf"
      },
      {
        name: "CST Studio Suite",
        category: "HARDWARE / EMBEDDED",
        descriptor: "3D electromagnetic field solver, mesh refinement & return loss S11",
        tags: ["EM Solver", "S11 Return Loss", "Far-Field", "Wearable RF"],
        visualType: "rf"
      },
      {
        name: "IoT Systems",
        category: "HARDWARE / EMBEDDED",
        descriptor: "MQTT/HTTP telemetry pipelines, sensor calibration, cloud edge ingestion",
        tags: ["MQTT", "Telemetry", "Sensors", "Edge-to-Cloud"],
        visualType: "mcu"
      }
    ] as SkillItem[]
  },
  {
    id: "software",
    blockNumber: "BLOCK 03",
    title: "SOFTWARE / AI",
    subtitle: "Algorithms, Machine Learning & Systems",
    accent: "circuit-purple",
    colorHex: "#8b5cf6",
    description: "Developing robust computational routines, object-oriented systems, metaheuristic optimization models, and full-stack interactive engineering dashboards.",
    skills: [
      {
        name: "Python",
        category: "SOFTWARE / AI",
        descriptor: "Data engineering, NumPy/SciPy array compute, metaheuristics & AI models",
        tags: ["NumPy", "Metaheuristics", "Data Pipeline", "Automation"],
        visualType: "code",
        codeSnippet: `def qpso_update(positions, pbest, gbest, beta):\n  # Quantum-inspired delta potential well\n  mbest = np.mean(pbest, axis=0)\n  return mbest + beta * np.abs(mbest - positions)`
      },
      {
        name: "Java",
        category: "SOFTWARE / AI",
        descriptor: "Object-oriented software systems, clean data abstractions & multithreading",
        tags: ["OOP", "Collections", "Concurrency", "Robust Logic"],
        visualType: "code"
      },
      {
        name: "C",
        category: "SOFTWARE / AI",
        descriptor: "Deterministic memory management, pointer arithmetic & embedded firmware",
        tags: ["Pointers", "Memory Map", "Bitwise Ops", "Low Overhead"],
        visualType: "code"
      },
      {
        name: "AI / Machine Learning",
        category: "SOFTWARE / AI",
        descriptor: "Predictive maintenance anomaly detection, regression & optimization algorithms",
        tags: ["Anomaly Detection", "FFT Spectrum", "QPSO", "Heuristics"],
        visualType: "neural"
      },
      {
        name: "HTML, CSS & JavaScript",
        category: "SOFTWARE / AI",
        descriptor: "Interactive telemetry dashboards, DOM manipulation, responsive HUD UI",
        tags: ["ES6+", "CSS Architecture", "Canvas", "Dynamic UI"],
        visualType: "code"
      },
      {
        name: "Git & GitHub",
        category: "SOFTWARE / AI",
        descriptor: "Distributed version control, branching strategies & CI/CD deployment",
        tags: ["Branching", "Git Workflow", "Rebasing", "Open Source"],
        visualType: "git"
      }
    ] as SkillItem[]
  }
];
