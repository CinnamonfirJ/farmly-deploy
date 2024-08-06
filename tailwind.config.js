/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        lg: "80px",
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1200px",
      },
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    // fontSize: {
    //   sm: "0.750rem",
    //   base: "1rem",
    //   xl: "1.333rem",
    //   "2xl": "1.777rem",
    //   "3xl": "2.369rem",
    //   "4xl": "3.158rem",
    //   "5xl": "4.210rem",
    // },
    fontFamily: {
      heading: "Rokkitt",
      body: "Rokkitt",
    },
    // fontWeight: {
    //   normal: "400",
    //   bold: "700",
    // },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        text: "#09140c",
        background: "#f8fdfa",
        primary: "#47ce72",
        secondary: "#94eaaf",
        accent: "#59e886",
      },
    },
  },
  plugins: [],
};
