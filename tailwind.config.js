/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          black: '#090C15', // Background
          gray: '#94A3B8',  // Secundary text
          white: '#ffffff', // Primary text
          accent: '#0ea5e9', // Buttons and highlights
          line: '#334155',  // Lines and borders (not using, dont know why but it looks like the border is way way thicker)
          card: '#161E2D',  // Background of boxes and icons
        }

      },
      fontFamily: {
        mono: ['"Fira Code"', 'monospace', 'ui-monospace', 'SFMono-Regular'],
      }
    },
  },
  plugins: [],
}