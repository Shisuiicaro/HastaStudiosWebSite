/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#171c29",
          "200": "#0f1320",
          "300": "rgba(255, 255, 255, 0.7)",
          "400": "rgba(255, 255, 255, 0.16)",
        },
        white: "#fff",
        mediumblue: "#5d00d3",
        mediumseagreen: "#22a75d",
      },
      spacing: {},
      fontFamily: {
        "century-gothic": "'Century Gothic'",
      },
      borderRadius: {
        "6xl": "25px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      "5xl": "24px",
      "10xl": "29px",
      xl: "20px",
      "17xl": "36px",
      "3xl": "22px",
      "109xl": "128px",
      "32xl": "51px",
      "13xl": "32px",
      inherit: "inherit",
    },
    screens: {
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
