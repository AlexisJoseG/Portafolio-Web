/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      borderRadius: {
        'none': '0px',
        'sm': '0.1rem',
        DEFAULT: '0.1875rem',
        'md': '0.25rem',
        'lg': '0.375rem',
        'xl': '0.5rem',
        '2xl': '0.65rem',
        '3xl': '0.95rem',
      },
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc5fb',
          400: '#38a5f6',
          500: '#0466c8',
          600: '#0353a4',
          700: '#023e7d', // Target primary blue requested by user
          800: '#002855',
          900: '#001845',
          950: '#001233',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};

