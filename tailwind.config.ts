import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
//   theme: {
//     extend: {
//       colors: {
//         whitesmoke: "#f2f2f3",
//         tomato: "#f44c4c",
//         black: "#000",
//         white: "#fff",
//         gray: {
//           "100": "#fffefe",
//           "200": "#1c1c1c",
//         },
//         lightcoral: "#fe9696",
//         mediumblue: "#1a16d5",
//         darkgray: "#b4b4b4",
//         gainsboro: "#e4e4e4",
//       },
//       spacing: {},
//       fontFamily: {
//         dana_variable: "Dana_Variable",
//       },
//     },
//     fontSize: {
//       base: "16px",
//       "5xl": "24px",
//       lgi: "19px",
//       inherit: "inherit",
//     },
//     screens: {
//       lg: {
//         max: "1200px",
//       },
//       mq1050: {
//         raw: "screen and (max-width: 1050px)",
//       },
//       mq750: {
//         raw: "screen and (max-width: 750px)",
//       },
//       mq450: {
//         raw: "screen and (max-width: 450px)",
//       },
//     },
//   },
//   corePlugins: {
//     preflight: false,
//   },
// };
