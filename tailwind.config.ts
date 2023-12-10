import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: "transparent",

        white: "#FFFFFF",
        black: {
          default: "#000000",
          1: "#383838",
          2: "#282828",
        },

        blue: {
          1: "#276788",
          2: "#0264af",
          3: "#276788",
          4: "#14323d",
          5: "#03592e",
          6: "#1b6275",
        },
        green: {
          1: "#b7d847",
          2: "#7a9c59",
          3: "#93c63e",
          4: "#8cc63f",
          5: "#009911",
        },
        gray: {
          default: "#808080",
          1: "#e8e8ea",
          2: "#333333",
          3: "#f1f1f1",
          4: "#ececec",
          5: "#DDDDDD",
        },
        red: {
          1: "#ed1c24",
          2: "#B20000",
          3: "#E04C78",
          4: "#cb1118cc",
        },
      },
      boxShadow: {
        navbar: "0px 10px 13px #0000000d",
        "product-item": "0px 0px 10px #3333",
      },
      fontSize: {
        "15/16": "0.9375rem",
      },
      borderRadius: {
        button: "50px",
      },
      width: {
        "product-item": "calc(100% / 3 - 10px);",
      },
    },
  },
  plugins: [],
};
export default config;
