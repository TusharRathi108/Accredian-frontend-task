/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "",
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('/images/hero-section.jpg')",
      },
    },
    fontFamily: {
      "playwrite-it-regular": ["Playwrite-IT-Moderna-Regular"],
    },
    fontWeight: {
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      "extra-bold": "800",
      black: "900",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
