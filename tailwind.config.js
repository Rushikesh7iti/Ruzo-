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
        brand: {
          darkest:  '#384959', // dark navy  — backgrounds, navbars
          steel:    '#6A89A7', // steel blue — secondary accents
          sky:      '#88BDF2', // cornflower — primary highlights
          light:    '#BDDDFC', // light blue — subtle text, glows
          // shades for utility
          darkest2: '#2c3a46', // slightly darker for hover states
          steelDim: '#506880', // dimmed steel for borders
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-mesh': 'radial-gradient(at 50% 0%, rgba(136,189,242,0.18) 0px, transparent 65%), radial-gradient(at 100% 20%, rgba(189,221,252,0.12) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(106,137,167,0.15) 0px, transparent 55%)',
        'card-gradient': 'linear-gradient(135deg, rgba(189,221,252,0.06) 0%, rgba(136,189,242,0.02) 100%)',
        'glow-gradient': 'linear-gradient(90deg, #88BDF2 0%, #6A89A7 50%, #384959 100%)',
        'btn-gradient': 'linear-gradient(135deg, #88BDF2 0%, #6A89A7 100%)',
      },
      boxShadow: {
        'glow-sky':   '0 0 35px -5px rgba(136,189,242,0.40)',
        'glow-steel': '0 0 35px -5px rgba(106,137,167,0.35)',
        'glass':      '0 8px 32px 0 rgba(0,0,0,0.30)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
