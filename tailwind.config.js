module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    // Custom animations
    extend: {
      animation : {
        'fade-in' : 'fadeIn  1s ease-out',
        'scale-in' : 'scaleIn  0.5s ease-out',
      }
    },
    // Define animations
    keyframes: {
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
      scaleIn: {
        '0%': { transform: 'scale(0.8)', opacity: 0 },
        '100%': { transform: 'scale(1)', opacity: 1 },
      },
    }
  },
  plugins: [],
}
