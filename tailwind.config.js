/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        surface: {
          950: '#050816',
          900: '#09111f',
          800: '#111c2e',
        },
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.06), 0 18px 60px rgba(8,145,178,0.18)',
      },
      backgroundImage: {
        'hero-grid':
          'radial-gradient(circle at top, rgba(34,211,238,0.14), transparent 32%), radial-gradient(circle at 20% 20%, rgba(14,116,144,0.22), transparent 25%), linear-gradient(135deg, rgba(17,24,39,0.94), rgba(3,7,18,0.96))',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
