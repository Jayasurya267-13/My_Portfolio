/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#05070a',
          900: '#080c14',
          850: '#0d121f',
          800: '#111827',
          700: '#1e293b'
        },
        circuit: {
          cyan: '#00f0ff',
          electric: '#0284c7',
          blue: '#2563eb',
          purple: '#8b5cf6',
          indigo: '#6366f1',
          amber: '#f59e0b',
          emerald: '#10b981',
          rose: '#f43f5e'
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace']
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'trace-flow': 'traceFlow 8s linear infinite',
        'radar-sweep': 'radarSweep 4s linear infinite',
        'scanline': 'scanline 6s linear infinite',
      },
      keyframes: {
        traceFlow: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        radarSweep: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' }
        }
      }
    },
  },
  plugins: [],
}
