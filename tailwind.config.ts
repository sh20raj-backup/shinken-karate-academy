/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dojo: {
          bg: "#0d0b07",
          surface: "#17140e",
          card: "#1f1b13",
          border: "#2e291e",
          red: {
            DEFAULT: "#e33038",
            hover: "#c8252d",
            light: "#ffedeb",
            dark: "#8b181c",
          },
          gold: {
            DEFAULT: "#e7c355",
            hover: "#c9a83c",
            light: "#fff0cb",
            dark: "#735c00",
          },
          muted: "#948f83",
          lightText: "#f5f3ef",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
