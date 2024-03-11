/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--dark-blue)",
        font: "var(--white)",
        primary: "var(--yellow)",
        navigation: "var(--light-blue)",
        bouton: "var(--white)",
      },
    },
  },
  plugins: [],
};
