/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A202C', // Couleur principale adaptée pour un eportfolio
        secondary: '#2D3748', // Couleur secondaire adaptée pour un eportfolio
        accent: '#C53030', // Couleur d'accent qui se démarque pour un eportfolio
      },
    },
  },
  plugins: [],
}
