module.exports = {
  purge: {
    content: ["./public/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      raleway: "Raleway, sans-serif",
      open: "Open Sans, sans-serif",
      quicksand: "Quicksand, sans-serif",
    },
    extend: {
      spacing: {
        417: "417px",
        75: "-75px",
      },
      backgroundImage: (theme) => ({
        mobile: "url('./images/bg-curve-mobile.svg')",
        desktop: "url('./images/bg-curve-desktop.svg')",
      }),
      colors: {
        "desaturated-blue": "#3065f8",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
