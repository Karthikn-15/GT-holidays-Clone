export default {
  content: ["./index.html", "./src/**/*.{ts,jsx,tsx}"],
  theme: {
    screens: {
      sssm: "55px",
      ssm: "100px",
      sm: "250px",
      md: "450px",
      lg: "449px",
      lrg: "500px",
      xlg: "750px",
      xl: "800px",
      xxl: "1100px",
      xxxl: "1400px",
      xlll: "1800px",
      full: "5500px",
    },
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".1em",
      widest: ".25em",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/container-queries")],
};
