/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: 'hsl(var(--color-main))',
        base: 'hsl(var(--color-base))',
        accent: 'hsl(var(--color-accent))',
      },
    },
  },
  plugins: [],
};
