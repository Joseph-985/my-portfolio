/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        stone: {
          50: "#F9F9F9",
          100: "#F7F5F2",
          950: "#0E0E0E",
        },
        slate: {
          300: "#CBCFEB",
          700: "#344054",
          900: "#0E1629",
        },
        emerald: {
          50: "#ECFFEF",
        },
        yellow: {
          300: "#FFE647",
          400: "#FBCF09",
          500: "#FFBB00",
        },
        orange: {
          50: "#FFF9EC",
          200: "#F7CF9E",
          300: "#E0B784",
          500: "#FE6309",
        },
        amber: {
          500: "#F99F1C",
        },
        red: {
          600: "#DD1D20",
        },
        neutral: {
          200: "#E4E4E4",
          400: "#9D9D9D",
          700: "#414141",
        },
        zinc: {
          100: "#F1F1F1",
          500: "#7D7D7D",
        },
        indigo: {
          700: "#37409B",
          800: "#37409B",
        },
        violet: {
          500: "#8B5CF6",
        },
        purple: {
          100: "#F4ECFF",
        },
        green: {
          600: "#15A12B",
        },
        sky: {
          400: "#47B1FF",
        },
        grey: {
          50: "#F9FAFB",
          100: "#F3F4F5",
          200: "#EAECF0",
          300: "#D0D5DD",
          400: "#ACB2BD",
          500: "#667085",
          600: "#475467",
          700: "#344054",
          900: "#101828",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
