/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'mobile': { 'raw': '(max-width: 800px)' },
        'tablet': { 'raw': '(min-width: 800px) and (max-width: 1100px)' },
      },
      colors: {
        background: "var(--background)",
        secondaryBackground: "var(--secondary-background)",
        font: "var(--foreground)",
        primary: "var(--primary)",
        navigation: "var(--navigation)",
        boutonBackground: "var(--foreground)",
        boutonFont: "var(--background)",
        svg: "var(--foreground)",
        details: "var(--navigation)",
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
        "movieText": "60%",
        "carrouselTop": "60%",
        "carrouselHeight": "40rem",
        "mobileCarrouselHeight": "30rem",
        "videoWidth": "50rem",
        "tabletVideoWidth": "35rem",
        "mobileVideoWidth": "20rem",
        "footerWidth": "85%",
        "catNav": ".48rem",
        "tabletTop": "15%"
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
        "catRight": "4px 0px 10px 1px rgba(0,0,0,.5)",
        "catLeft": "-4px 0px 10px 1px rgba(0,0,0,.5)",
        "CardBox": "0px 0px 15px 1px rgba(255,255,255,.5)",
      },
      fontSize: {
        hCardText: "13px",
      }
    },
  },
  plugins: [],
};
