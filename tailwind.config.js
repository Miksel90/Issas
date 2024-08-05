/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    maxWidth: {
      app: "1920px",
    },
    screens: {
      xxs: "200px",
      xs: "400px",
      sm: "480px",
      md: "756px",
      lg: "900px",
      xl: "1000px",
    },
    colors: {
      primary: "#fe6601",
      secondary: "#f2f2f2",
      danger: "#ff0000",
      success: "#00ff00",
    },
    spacing: {
      0: "0rem",
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      13: "3.5rem",
    },
    extend: {},
  },
  plugins: [],
};
