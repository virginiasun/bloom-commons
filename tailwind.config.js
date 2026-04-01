/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bloom: {
          green: "#34A853",
          "green-light": "#43B864",
          gold: "#F6AD55",
          "gold-deep": "#E8A317",
          peach: "#FFF5EB",
          mint: "#F0FFF4",
          coral: "#F4845F",
          bg: "#FAFAF8",
          dark: "#2D3748",
          gray: "#4A5568",
        },
      },
      fontFamily: {
        heading: ["var(--font-outfit)", "sans-serif"],
        body: ["var(--font-jakarta)", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
        pill: "999px",
      },
    },
  },
  plugins: [],
};
