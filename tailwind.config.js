/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
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
      colors: {
        my_primary: "black",
        my_secondary: "#2F855A",
        my_secondary: "#2F855A",
        my_secondary_dark: "#166534",
        my_light: "#1A202C",
        my_extra_light: "#E2E8F0",
        my_background: "#FFFFFF",
      },
    },
    fontFamily: {
      sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
