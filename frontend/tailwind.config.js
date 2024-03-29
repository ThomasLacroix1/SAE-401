/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--dark-blue)",
        secondaryBackground: "var(--blue)",
        font: "var(--white)",
        primary: "var(--yellow)",
        navigation: "var(--light-blue)",
        boutonBackground: "var(--white)",
        boutonFont: "var(--dark-blue)",
        svg: "var(--white)",
      },
      spacing: {
        'cardWidth': '27rem',
        'cardHeight': '40rem',
      },
      scale: {
        '102': '1.02',
      },
      transitionDuration: {
        '33': '33ms',
      },
      backgroundImage: {
        backgroundGradient: "linear-gradient(180deg, transparent 50%,rgba(0,0,0,.95))",
      }
    },
  },
  plugins: [],
};
