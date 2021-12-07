module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        earthNation: {
          DEFAULT: "#069C0C",
          ligth: "#C1E3C8",
          dark: "#001B00",
        },
      },
      outline: {
        earthNation: "2px solid #069C0C",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
