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
              DEFAULT: "#B2C2BF",
              50: "#0b0e0e",
              100: "#222b29",
              200: "#384744",
              300: "#4f6460",
              400: "#65807b",
              500: "#7f9a95",
              600: "#9bb0ac",
              700: "#b8c7c4",
              800: "#d4dddc",
              900: "#f1f4f3"
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
              DEFAULT: "#3c4241",
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
        // Additional custom themes can be added here
      }
    })
  ]
};
