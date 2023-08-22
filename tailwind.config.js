/** @type {import('tailwindcss').Config} */
const daisyUI = require("daisyui");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  daisyui: {
    themes: [
      "light",
      "false",
    ],
  },
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        newbBlue: '#272E71',
      },
      maxWidth: {
        'custom': '1300px',
      },
    },
  },
  plugins: [
    daisyUI,
  ],
}

