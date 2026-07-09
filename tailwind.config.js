/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //website colors
        'space-dark': '#030308',  // main background color
        'space-card': '#0B101E',  // project card background color
        
        'cyber-green': '#00FF41', // Matrix/cyberpunk green - text
        'cyber-glow': '#4ADE80',  // Matrix/cyberpunk green - glow/hover
        
        'moon-base': '#E2E8F0',   // moons grey base color
        'wireframe': '#334155',   // wireframe color for mountain lines
      },
      fontFamily: {
        mono: ['"Fira Code"', 'monospace', 'ui-monospace', 'SFMono-Regular'],
      }
    },
  },
  plugins: [],
}