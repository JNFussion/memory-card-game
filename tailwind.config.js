module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        earth: {
          DEFAULT: "#069C0C",
          ligth: "#C1E3C8",
          dark: "#001B00",
        },
        air: {
          DEFAULT: "#AFB725",
          dark: "#232A00",
          ligth: "#DEED29",
        },
        water: {
          DEFAULT: "#1351CC",
          dark: "#000C5A",
          ligth: "#4E91F8",
        },
        fire: {
          DEFAULT: "#C53E0B",
          dark: "#500200",
          ligth: "#FE9158",
        },
      },
      outline: {
        earth: "2px solid #069C0C",
      },
      height: {
        230: "230px",
      },
      gridTemplateColumns: {
        auto: "repeat(4, minmax(144px, 1fr))",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
