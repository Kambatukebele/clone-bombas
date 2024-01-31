/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        "announcement-blue": "#2E4366",
      },
      backgroundImage: {
        underwear: "url('/images/1-Underwear-Mobile.webp')",
        socks: "url('/images/3_Socks-Mobile.webp')",
        slippers: "url('/images/4_Slippers-Mobile.webp')",
        tShirts: "url('/images/2-Shirts-Mobile.webp')",
      },
    },
  },
  plugins: [],
};
