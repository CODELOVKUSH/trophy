/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A0A0A',
          900: '#0A0A0A',
          800: '#121212',
          700: '#1A1A1A',
          600: '#242424',
        },
        gold: {
          DEFAULT: '#F5C518',
          light: '#FFCC29',
          deep: '#C99A0E',
          soft: '#FDE68A',
        },
        greyt: '#6B6B6B',
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        brand: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        brand: '0.02em',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #FDE68A 0%, #F5C518 40%, #C99A0E 100%)',
        'gold-sheen': 'linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.65) 50%, transparent 70%)',
        'ink-radial': 'radial-gradient(120% 120% at 50% 0%, #1A1A1A 0%, #0A0A0A 55%, #050505 100%)',
      },
      boxShadow: {
        gold: '0 10px 40px -12px rgba(245, 197, 24, 0.45)',
        'gold-lg': '0 24px 70px -20px rgba(245, 197, 24, 0.55)',
        card: '0 20px 50px -24px rgba(0, 0, 0, 0.8)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        shimmer: 'shimmer 3.5s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 22s linear infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
