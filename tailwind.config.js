module.exports = {
  theme: {
    extend: {
      keyframes: {
        shine: {
          "0%":  { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        shine: "shine 1.5s linear infinite",
      },
    },
  },
};
