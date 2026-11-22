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
        gold: {
          50: '#fbf8eb',
          100: '#f5eece',
          200: '#ebdb9d',
          300: '#dfc366',
          400: '#d4af37',
          500: '#c59d28',
          600: '#aa7e1e',
          700: '#875d1b',
          800: '#714c1d',
          900: '#61401d',
        },
        royal: {
          900: '#0a0a0c',
          800: '#121217',
          700: '#1a1a22',
          600: '#252530'
        },
        crimson: {
          500: '#9e1b32',
          600: '#851428',
          700: '#6c0e1f'
        }
      },
      fontFamily: {
        serif: ['"Cinzel"', '"Rozha One"', '"Playfair Display"', 'Georgia', 'serif'],
        hindi: ['"Rozha One"', '"Yatra One"', '"Tiro Devanagari Hindi"', '"Noto Serif Devanagari"', 'serif'],
        sans: ['"Inter"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 28s linear infinite',
        'marquee-slow': 'marquee 40s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}

