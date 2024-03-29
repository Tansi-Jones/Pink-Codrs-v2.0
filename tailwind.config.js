module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E81A6B",
        secondary: "#101D2D",
        tertiary: "#324054",
      },
    },

    fontFamily: {
      noto: ["Playfair Display", "serif"],
      greatVibes: ["Great Vibes", "cursive"],
      open: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
};
