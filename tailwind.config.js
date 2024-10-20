/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#1abc9c",
        secondary: "#34495e",
        dark: "#061728",
        dark_light: "#2c3e50",
      },
    },
  },
  plugins: [],
};
