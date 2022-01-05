module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        appear: {
          "0%": { transform: "scale(0.3)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        appear: "appear 0.2s ease-in-out ",
      },
    },
  },
  plugins: [],
};
