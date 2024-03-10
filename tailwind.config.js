/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        font: "var(--font)",
        primary: "var(--primary)",
        navigation: "var(--navigation)",
      },
    },
  },
  plugins: [],
};
