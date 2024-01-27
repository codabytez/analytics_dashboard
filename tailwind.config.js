/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#34CAA5",
        secondary: "#0D062D",
        success: "#66C87B",
        error: "#ED544E",
        warning: "#F4C700",
        background: "#FDFDFD",
        dark: "#181818",
        neutral: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#B2ABAB",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },
      fontFamily: {
        plus: ["Plus Jakarta Sans", "sans-serif"],
      },
      fontSize: {
        H_1: [
          "64px",
          {
            lineHeight: "72px",
            fontWeight: "600",
          },
        ],
        H_2: [
          "48px",
          {
            lineHeight: "56px",
            fontWeight: "600",
          },
        ],
        H_3: [
          "32px",
          {
            lineHeight: "40px",
            fontWeight: "600",
          },
        ],
        H_4: [
          "24px",
          {
            lineHeight: "32px",
            fontWeight: "600",
          },
        ],
        H_5: [
          "20px",
          {
            lineHeight: "28px",
            fontWeight: "600",
          },
        ],
        "Xtra-Large": [
          "18px",
          {
            lineHeight: "24px",
          },
        ],
        Large: [
          "16px",
          {
            lineHeight: "24px",
          },
        ],
        Medium: [
          "14px",
          {
            lineHeight: "24px",
          },
        ],
        Small: [
          "12px",
          {
            lineHeight: "24px",
          },
        ],
        "Xtra-Small": [
          "10px",
          {
            lineHeight: "24px",
          },
        ],
      },
      screens: {
        minitop: "1200px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
