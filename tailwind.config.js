/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'terminal-green': '#39ff14',
        'terminal-bg': '#101010',
        'terminal-border': '#1a1a1a',
        'terminal-accent': '#00ff9c',
        'terminal-gray': '#222',
        'terminal-yellow': '#ffe600',
        'terminal-red': '#ff1744',
        'terminal-blue': '#00eaff',
        'terminal-white': '#e0e0e0',
        'terminal-link': '#00ffea',
        'green-400': '#39ff14',
        'green-300': '#6cff47',
        'green-600': '#1aff00',
        'black': '#000',
      },
      fontFamily: {
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'monospace'],
        sans: ['var(--font-geist-sans)', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
