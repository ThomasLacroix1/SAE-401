/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'mobile': { 'raw': '(max-width: 550px)' },
      },
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
        'cardWidth': '21rem',
        'cardHeight': '31rem',
        'hCardWidth': '21rem',
        'hCardHeight': '17rem',
        3: "0.75rem",
        "movieHeight": "45rem",
        "searchBar": "90%",
        "movieLeft": "4%",
        "movieText": "70%",
        "carrouselTop": "60%",
        "carrouselHeight": "40rem",
        "mobileCarrouselHeight": "30rem",
        "videoWidth": "50rem",
        "footerWidth": "85%",
        "catNav": ".48rem",
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
        "movie": "1px 4px 4px rgba(0,0,0,.5)",
      },
      boxShadow: {
        "dot": "0 -1px 0.75rem #fff",
        "cat": "4px 0px 10px 1px rgba(0,0,0,.5)",
        "CardBox": "0px 0px 15px 1px rgba(255,255,255,.5)",
      },
      fontSize: {
        hCardText: "13px",
      }
    },
  },
  plugins: [],
};
