/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {},
      keyframes: {
        moveup: {
          "0%": {
            transform: "translateY(50px)",
          },
          "100%": {
            transform: "traslateX(0px)",
          },
        },
        moveright: {
          "0%": {
            transform: "translatex(-50px)",
            opacity: "0",
          },
          "100%": {
            transform: "traslateX(0px)",
            opacity: "1",
          },
        },
      },
      animation: {
        moveup: "moveup 400ms ease-in",
        moveright: "moveright 400ms ease-in forwards",
      },
    },
  },
  plugins: [],
};
