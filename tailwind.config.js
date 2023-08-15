/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,vue}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Inter"],
      },
      colors: {
        gray: {
          100: '#f5f8fa',
          200: '#eff2f5',
          300: '#E4E6EF',
          400: '#B5B5C3',
          500: '#A1A5B7',
          600: '#7E8299',
          700: '#5E6278',
          800: '#3F4254',
          900: '#181C32',
        },
        primary: '#0095e8',
        secondary: "#E4E6EF",
        accent: "#7F76DE",
        positive: "#5FA874",
        negative: "#E5846D",
        info: "#94D8FA",
        warning: "#F59E0B",
        dark: "#181C32",
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio")
  ],
};
