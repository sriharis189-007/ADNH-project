/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: '1320px',
      },
      colors: {
        navy: {
          DEFAULT: '#003b5c',
          dark: '#002a42',
        },
        gold: {
          DEFAULT: '#c5a059',
          light: '#d4b06a',
        },
        cream: '#fdfbf7',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Gotham', 'Gotham Fallback', 'sans-serif'],
      },
      fontSize: {
        nav: ['0.8125rem', { letterSpacing: '0.08em' }],
        label: '0.875rem',
        body: ['1.0625rem', { lineHeight: '1.75' }],
        'body-sm': ['0.9375rem', { lineHeight: '1.75' }],
        welcome: ['clamp(1.35rem, 2.2vw, 1.75rem)', { lineHeight: '1.2' }],
        h1: ['clamp(3rem, 5.2vw, 4.25rem)', { lineHeight: '1.05' }],
        h2: ['clamp(2.25rem, 4vw, 3.25rem)', { lineHeight: '1.2' }],
        h3: ['clamp(1.85rem, 3vw, 2.5rem)', { lineHeight: '1.2' }],
      },
      borderRadius: {
        'brand': '12px',
        'brand-lg': '24px',
      },
    },
  },
  plugins: [],
}
