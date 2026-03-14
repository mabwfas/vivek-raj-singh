/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#0ea5e9',
          light: '#38bdf8',
          dark: '#0284c7',
          glow: 'rgba(14, 165, 233, 0.15)',
          muted: 'rgba(14, 165, 233, 0.08)',
        },
        accent: {
          pink: '#f472b6',
          purple: '#a78bfa',
          cyan: '#22d3ee',
          amber: '#fbbf24',
          emerald: '#34d399',
          orange: '#fb923c',
        },
        surface: {
          DEFAULT: '#030712',
          raised: '#0f172a',
          overlay: '#1e293b',
          card: '#0a0f1a',
          border: 'rgba(255, 255, 255, 0.06)',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'shimmer': 'shimmer 3s linear infinite',
        'blob': 'blobMorph 8s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'orbit': 'orbit 20s linear infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(14, 165, 233, 0.1)',
        'glow-md': '0 0 30px rgba(14, 165, 233, 0.15)',
        'glow-lg': '0 0 60px rgba(14, 165, 233, 0.2)',
        'inner-glow': 'inset 0 1px 0 rgba(255, 255, 255, 0.04)',
      },
    },
  },
  plugins: [],
}
