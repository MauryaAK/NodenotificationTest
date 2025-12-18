/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}" // scan all React components
  ],
  theme: {
    extend: {
      colors: {
        primary: "#01266b",
        secondary: "#d8e4ed",
        white: "#ffffff",
        gray: { light: "#716B6B ", DEFAULT: "#4f575e", dark: "#292d30" },
        green: { light: "#defaec", DEFAULT: "#019117", dark: "#084d11" },
        red: { light: "#FCA5A5", DEFAULT: "#ff1c1c", dark: "#B91C1C" },
        orange: { light: "#FFDD00", DEFAULT: "#fc9c7e", dark: "#fc9c7e" },
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["Poppins", "ui-sans-serif", "system-ui"],
        quicksand: ["Quicksand", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
