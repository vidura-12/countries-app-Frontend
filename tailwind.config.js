module.exports = {
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        modalEntry: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        dropdown: {
          "0%": { opacity: 0, transform: "scale(0.95)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-out",
        modalEntry: "modalEntry 0.4s ease-out",
        shimmer: "shimmer 2s infinite linear",
        dropdown: 'dropdown 0.1s ease-out'
      },
    },
  },
};

// Add these animation classes to your tailwind.config.js if not already there
// module.exports = {
//   theme: {
//     extend: {
//       animation: {
//         shimmer: 'shimmer 2s infinite linear',
//       },
//       keyframes: {
//         shimmer: {
//           '0%': { backgroundPosition: '200% 0' },
//           '100%': { backgroundPosition: '-200% 0' },
//         },
//       },
//     },
//   },
// }
