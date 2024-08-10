/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#323437",
        secondary: "#646669",
        orange: "#E2B714",
      },
    },
  },
  plugins: [],
};
