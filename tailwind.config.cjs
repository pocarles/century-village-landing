/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7b61ff',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        accent: {
          100: '#cfe6ff',
          200: '#93a9ff',
          300: '#7b9fff',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['4.75rem', { lineHeight: '1.1', letterSpacing: '-0.04em', fontWeight: '700' }],
        'display-sm': ['2.625rem', { lineHeight: '1.15', letterSpacing: '-0.03em', fontWeight: '700' }],
        'heading-1': ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'heading-1-sm': ['2rem', { lineHeight: '1.25', letterSpacing: '-0.02em', fontWeight: '700' }],
        'heading-2': ['2.5rem', { lineHeight: '1.25', letterSpacing: '-0.015em', fontWeight: '700' }],
        'heading-2-sm': ['1.75rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '700' }],
        'heading-3': ['1.5rem', { lineHeight: '1.35', letterSpacing: '-0.01em', fontWeight: '600' }],
        'heading-3-sm': ['1.25rem', { lineHeight: '1.4', letterSpacing: '0', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7', letterSpacing: '0' }],
        'body': ['1rem', { lineHeight: '1.6', letterSpacing: '0' }],
        'body-sm': ['0.9375rem', { lineHeight: '1.6', letterSpacing: '0' }],
        'caption': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
        'micro': ['0.8125rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
      },
      boxShadow: {
        'stripe-xs': '0 1px 2px rgba(50, 50, 93, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04)',
        'stripe-sm': '0 2px 4px rgba(50, 50, 93, 0.1), 0 1px 3px rgba(0, 0, 0, 0.05)',
        'stripe': '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)',
        'stripe-md': '0 6px 12px rgba(50, 50, 93, 0.12), 0 3px 7px rgba(0, 0, 0, 0.08)',
        'stripe-lg': '0 13px 27px rgba(50, 50, 93, 0.15), 0 5px 11px rgba(0, 0, 0, 0.08)',
        'stripe-xl': '0 20px 40px rgba(50, 50, 93, 0.15), 0 15px 25px rgba(0, 0, 0, 0.08)',
        'stripe-2xl': '0 30px 60px rgba(50, 50, 93, 0.2), 0 18px 36px rgba(0, 0, 0, 0.1)',
        'stripe-glow': '0 0 0 1px rgba(123, 97, 255, 0.1), 0 4px 16px rgba(123, 97, 255, 0.15)',
        'stripe-glow-lg': '0 0 0 1px rgba(123, 97, 255, 0.1), 0 8px 30px rgba(123, 97, 255, 0.2)',
        'focus-ring': '0 0 0 3px rgba(123, 97, 255, 0.25)',
        'focus-ring-error': '0 0 0 3px rgba(239, 68, 68, 0.25)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      transitionTimingFunction: {
        'stripe': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        'stripe-bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
        'shimmer': 'shimmer 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(123, 97, 255, 0.2)' },
          '50%': { boxShadow: '0 0 35px rgba(123, 97, 255, 0.35)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
