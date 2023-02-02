/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#000000',
      current: 'currentColor',
      midnight: '#121212',
      silver: '#B9C3C5',
      mustard: '#E8C47F',
      lime: '#9DC474',
      aqua: '#54C2CC',
      salmon: '#EB7765',
    },
    fontFamily: {
      sans: ['Inconsolata', 'sans-serif'],
      serif: ['Inconsolata', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
