/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        instagram: {
          pink: '#E1306C', // Warna pink khas Instagram
          orange: '#F58529', // Warna orange khas Instagram
          purple: '#833AB4', // Warna ungu khas Instagram
          yellow: '#F7B731', // Warna kuning khas Instagram
          dark: '#262626', // Warna gelap khas Instagram
          light: '#fafafa', // Warna terang khas Instagram
        },
      },
    },
  },
  plugins: [],
}

