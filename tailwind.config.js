/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "banner-move": {
          "0%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(-75%, 0)" },
          "50%": { transform: "translate(0, 0)" },
          "75%": { transform: "translate(-75%, 0)" },
          "100%": { transform: "translate(0, 0)" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
