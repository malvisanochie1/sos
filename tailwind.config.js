// // @type {import('tailwindcss').Config}
// export default {
//    content: ["./src/**/*.{html,js}"],
//  theme: {
//     extend: {
//       fontFamily: {
//         sans: ["Inter", "sans-serif"],
//       },
//       colors: {
//         primary: "#F5A623",
//         "primary-hover": "#E6991F",
//         dark: "#151b2d",
//         "dark-400": "#787a80",
//         "dark-500": "#4a4c50",
//         "dark-600D": "#09244b",
//         yellow: "#d49401",
//       },
//     },
//   },
//    plugins: [],
//  }

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#F5A623",
        "primary-hover": "#E6991F",
        dark: "#151b2d",
        "dark-400": "#787a80",
        "dark-500": "#4a4c50",
        "dark-600D": "#09244b",
        yellow: "#d49401",
        gray: "#F4F4F4",
      },
    },
  },
  plugins: [],
};
