/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        xboxGreen: "#00ff7f", // A bright green for the “neon glow”
      },
      boxShadow: {
        neon: "0 0 5px #00ff7f, 0 0 20px #00ff7f",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
      },
      animation: {
        'pulse-slow': 'pulse 3s infinite',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
