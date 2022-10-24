/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem',
        '2xl': '5rem',
      },
    },
    extend: {
      fontFamily: {
        quicksand: ["'Quicksand'", "sans-serif"]
      },
      colors: {
        dark: "#1E1E1E",
        darkAlt: "#1A1E1F",
        darkBackground: "#1D2123",
        playBackground: "#1D212330",
        darkFaded: "#33373B37",
        gold: "#FACD66",
        blueTint: "#A4C7C6",
        mutedText: "#EFEEE025",
      },
      backgroundImage: {
        viewChartGradient: "linear-gradient(to top, #1D2123 0%, #1D2123 25%, #1D212385 60%, #1D212395 100%)",
        viewChartGradientLG: "linear-gradient(to top, #1D2123 0%, #1D2123 35%, #1D212385 80%, #1D212395 100%)",
        collectionCard: "linear-gradient(179.89deg, rgba(0, 0, 0, 0) 0.1%, rgba(15, 18, 19, 0.85) 80.67%)"
      },
      boxShadow: {
        navActive: "0px 0px 14.3904px rgba(250, 205, 102, 0.25)",
      },
      transformOrigin: {
        waveMobile: "matrix(-0.56, -0.83, -0.83, 0.56, 0, 0)",
        waveDesktop: "rotate(-44.5deg)",
      },
      spacing: {
        box: "calc(100% - 4px)",
        topChart: "calc(100% - 40px)",
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide")
  ],
}
