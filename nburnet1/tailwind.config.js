import { nextui } from '@nextui-org/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      // Additional theme extensions can go here if needed
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          layout: {
            // Layout settings for light mode
          },
          colors: {
            background: {
              DEFAULT: "#FFF",
              50: "#0c0d0d",
              100: "#242827",
              200: "#3d4342",
              300: "#555d5c",
              400: "#6d7876",
              500: "#879290",
              600: "#a2aaa9",
              700: "#bcc2c1",
              800: "#d7dbda",
              900: "#f2f3f3"
            },
            primary: {
              DEFAULT: "#2C3E50",
              50: "#D4E6F1",  // Lightest
              100: "#AABACF",
              200: "#8199AD",
              300: "#57788B",
              400: "#2C5969",
              500: "#2C3E50",
              600: "#233241",
              700: "#1B2631",
              800: "#111920",  // Darkest
              900: "#0A0E13"
            },
          }
        },
        dark: {
          layout: {
            // Layout settings for dark mode
          },
          colors: {
            background: { 
              DEFAULT: "#000000",
              50: "#f2f3f3",
              100: "#d7dbda",
              200: "#bcc2c1",
              300: "#a2aaa9",
              400: "#879290",
              500: "#6d7876",
              600: "#555d5c",
              700: "#3d4342",
              800: "#242827",
              900: "#0c0d0d"
            },
            primary: {
              DEFAULT: "#2C3E50",
              50: "#111920",
              100: "#1B2631",
              200: "#233241",
              300: "#2C3E50",
              400: "#2C5969",
              500: "#57788B",
              600: "#8199AD",
              700: "#AABACF",
              800: "#D4E6F1",
              900: "#EAF3FA"
            },
          }
        },
      }
    })
  ]
};
