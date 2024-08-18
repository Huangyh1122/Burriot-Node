/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5715' }],
        base: ['1rem', { lineHeight: '1.5', letterSpacing: '-0.017em' }],
        lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.017em' }],
        xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.017em' }],
        '2xl': ['1.5rem', { lineHeight: '1.415', letterSpacing: '-0.037em' }],
        '3xl': [
          '1.875rem',
          { lineHeight: '1.3333', letterSpacing: '-0.037em' },
        ],
        '4xl': ['2.25rem', { lineHeight: '1.2777', letterSpacing: '-0.037em' }],
        '5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.037em' }],
        '6xl': ['4rem', { lineHeight: '1', letterSpacing: '-0.037em' }],
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.037em' }],
      },
      keyframes: {
        'code-1': {
          '0%': { opacity: 0 },
          '2.5%': { opacity: 1 },
          '97.5%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        'code-2': {
          '16.2%': { opacity: 0 },
          '18.75%': { opacity: 1 },
          '97.5%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        'code-3': {
          '32.5%': { opacity: 0 },
          '35%': { opacity: 1 },
          '97.5%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        'code-4': {
          '48.75%': { opacity: 0 },
          '51.25%': { opacity: 1 },
          '97.5%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        'code-5': {
          '65%': { opacity: 0 },
          '72.5%': { opacity: 1 },
          '97.5%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        'code-6': {
          '81.25%': { opacity: 0 },
          '83.75%': { opacity: 1 },
          '97.5%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        breath: {
          '0%, 100%': { transform: 'scale(0.95)' },
          '50%': { transform: 'scale(1.1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5%)' },
        },
        line: {
          '0%, 100%': { left: 0, opacity: 0 },
          '50%': { left: '100%', transform: 'translateX(-100%)' },
          '10%, 40%, 60%, 90%': { opacity: 0 },
          '25%, 75%': { opacity: 1 },
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        meteor: {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: 1 },
          '70%': { opacity: 1 },
          '100%': {
            transform: 'rotate(215deg) translateX(-500px)',
            opacity: 0,
          },
        },
        'spin-around': {
          '0%': {
            transform: 'translateZ(0) rotate(0)',
          },
          '15%, 35%': {
            transform: 'translateZ(0) rotate(90deg)',
          },
          '65%, 85%': {
            transform: 'translateZ(0) rotate(270deg)',
          },
          '100%': {
            transform: 'translateZ(0) rotate(360deg)',
          },
        },
        slide: {
          to: {
            transform: 'translate(calc(100cqw - 100%), 0)',
          },
        },
        'background-position-spin': {
          '0%': { backgroundPosition: 'top center' },
          '100%': { backgroundPosition: 'bottom center' },
        },
        'shine-pulse': {
          '0%': {
            'background-position': '0% 0%',
          },
          '50%': {
            'background-position': '100% 100%',
          },
          to: {
            'background-position': '0% 0%',
          },
        },
      },
      animation: {
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        meteor: 'meteor 5s linear infinite',
        'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
        slide: 'slide var(--speed) ease-in-out infinite alternate',
        backgroundPositionSpin:
          'background-position-spin 3000ms infinite alternate',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
