/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2D3142",  // Dark Blue-Grey (Headings & Text)
        secondary: "#4F5D75", // Muted Blue-Grey (Subtext)
        bgLight: "#FFFFFF",   // White (Background)
        bgDark: "#111827",    // Light Grey (Sections & Cards)
        accent: "#EF8354",    // Warm Orange (CTA & Buttons)
        hDark: "#000000",
      },
    },
  },
  plugins: [],
};

