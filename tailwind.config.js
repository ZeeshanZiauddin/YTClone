/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "dark-100": "#0f0f0f",
      "dark-200": "#222222",
      "text-100": "#fff",
      "text-200": "#999999",
      "event-100": "#272727",
      "event-200": "#3d3d3d",
    },
    extend: {
      fontFamily: {
        body: ["Roboto", "Arial", "sans-serif"],
        "logo-f": "Roboto Condensed",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
