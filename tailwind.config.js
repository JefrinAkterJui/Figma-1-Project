/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    fontFamily:{
      'Inter':["Inter", "sans-serif"],
      'Osworld':["Oswald", "sans-serif"],
      'Cormorant':[ "Cormorant Garamond", "serif"],
      'DM':["DM Sans", "sans-serif"]
    },
    backgroundImage:{
      'Banner-img':"url('/img/banner.png')",
    }
  },
  plugins: [],
}