/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "24px",
      },
    },
    extend: {
      fontFamily: {
        satoshi: "Satoshi, sans-serif",
        inter: "Inter, sans-serif",
        poppins: "Poppins, sans-serif",
      },
      colors: {
        "off-white": "#f6f6f6",
        "light-orange": "#FDB384",
        "light-yellow": "#FCD168",
        "turquoise-green": "#A1D2BA",
        "floral-white": "#FFF7F3",
        "bright-gray": "#e9e9e9",
        "antique-white": "#F7EADA",
      },
      fontSize: {
        // we  can use  default fonts for 12px{xs},14px{sm},16px{base},20px{xl},24px{2xl} font size
        "3xl": "28px",
        "4xl": "38px",
        "5xl": "48px",
        "6xl": "65px",
      },
    },
  },
  plugins: [],
};
