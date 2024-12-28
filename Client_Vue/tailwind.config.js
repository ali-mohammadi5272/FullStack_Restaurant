/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF8A00",
        secondary: "#3FA72F",
      },
    },
  },
  plugins: [],
};
