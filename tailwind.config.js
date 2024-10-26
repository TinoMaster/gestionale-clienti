/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#4082F2",
        primary_light: "#599DF8",
        secondary: "#34495e",
        dark: "#061728",
        dark_light: "#2c3e50",
      },
    },
  },
  plugins: [],
};
