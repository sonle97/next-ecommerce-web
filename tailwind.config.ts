import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1320px",
        xl: "1140px",
        lg: "960px",
        md: "720px",
        sm: "540px",
        sx: "100%",
      },
    },
    extend: {
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
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
