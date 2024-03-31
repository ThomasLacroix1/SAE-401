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
        details: "var(--light-blue)",
      },
      spacing: {
        'cardWidth': '23rem',
        'cardHeight': '34rem',
        3: "0.75rem",
        "movieHeight": "45rem",
        "searchBar": "90%",
        "movieLeft": "5%",
        "videoWidth": "50rem"
      },
      borderWidth: {
        1: "1px",
      },
      scale: {
        '102': '1.02',
      },
      transitionDuration: {
        '33': '33ms',
      },
      backgroundImage: {
        backgroundGradient: "linear-gradient(180deg, transparent 50%,rgba(0,0,0,.95))",
        movieGradient: "linear-gradient(270deg, transparent, var(--dark-blue) 90%)",
        movieGradient2: "linear-gradient(180deg, transparent 40%, var(--dark-blue))"
      },
      aspectRatio: {
        '16/9': '16/9',
      },
      dropShadow: {
        movie: "1px 4px 4px rgba(0,0,0,.5)",
      }
    },
  },
  plugins: [],
};
