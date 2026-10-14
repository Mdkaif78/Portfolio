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
        ivory: {
          DEFAULT: '#F7F6F2',
          surface: '#FFFFFF',
          subtle: '#EFEFEA',
        },
        ink: {
          DEFAULT: '#202722',
          muted: '#66716B',
          soft: '#4A554E',
        },
        teal: {
          DEFAULT: '#28665B',
          hover: '#1D4F47',
          light: '#EBF2F0',
          subtle: '#D6E5E2',
        },
        stone: {
          border: '#DDDCD4',
          subtle: '#E8E7DF',
        },
        charcoal: {
          DEFAULT: '#202B27',
          surface: '#1A2320',
          border: '#2F3D37',
          muted: '#9DA8A1',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Manrope', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      borderRadius: {
        'sm': '3px',
        'DEFAULT': '5px',
        'md': '6px',
        'lg': '8px',
        'xl': '12px',
      },
      boxShadow: {
        'subtle': '0 1px 2px rgba(32, 39, 34, 0.04)',
        'card': '0 1px 3px rgba(32, 39, 34, 0.06), 0 1px 2px rgba(32, 39, 34, 0.04)',
        'lift': '0 4px 12px -2px rgba(32, 39, 34, 0.08)',
      }
    },
  },
  plugins: [],
}
