import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        "color-full": {
          extend: "light", //inherit default values
          colors: {
            background: "#ffffff",
            foreground: "#000000",
            primary: {
              100: "#558AE6",
              200: "#4A78C8",
              300: "#3F66AA",
              400: "#2A4472",
              500: "#203356",
              600: "#15223A",
              700: "#0B111E",

              DEFAULT: "#5E91FF",
              foreground: "#ffffff",
            },
            secondary: {
              100: "#558AE6",
              200: "#4A78C8",
              300: "#3F66AA",
              400: "#2A4472",
              500: "#203356",
              600: "#15223A",
              700: "#0B111E",

              DEFAULT: "#5E91FF",
              foreground: "#ffffff",
            },
            tertiary: {
              100: "#E69129",
              200: "#C87E24",
              300: "#AA6B1F",
              400: "#724814",
              500: "#8E5A1A",

              DEFAULT: "#5E91FF",
              foreground: "#ffffff",
            },
            focus: "#F182F6",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
      },
    }),
  ],
};
