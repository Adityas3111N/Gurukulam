// tailwind.config.js
import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Includes all your React files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F97316", // Orange (for CTAs like "Donate")
        secondary: "#16A34A", // Green (for "Volunteer" buttons)
      },
      fontFamily: {
        sans: [
          '"Poppins"', // English font
          '"Noto Sans Devanagari"', // Hindi support
          ...fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
};