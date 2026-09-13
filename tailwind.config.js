/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1a2744",
          light: "#253461",
          dark: "#111c33",
        },
        charcoal: {
          DEFAULT: "#2d3748",
          light: "#4a5568",
        },
        "warm-white": {
          DEFAULT: "#fafaf8",
          dark: "#f0f0ea",
        },
        teal: {
          DEFAULT: "#2d7d7d",
          light: "#3a9999",
          pale: "#e8f5f5",
        },
        "soft-blue": {
          DEFAULT: "#4a90c4",
          pale: "#e8f2f9",
        },
        "muted-orange": {
          DEFAULT: "#c4622d",
          light: "#d4733d",
          pale: "#fdf0ea",
        },
        "border-light": "#e2e8f0",
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#2d3748",
            fontFamily: "'Inter', system-ui, sans-serif",
            "h1, h2, h3, h4": {
              fontFamily: "'Playfair Display', Georgia, serif",
              color: "#1a2744",
            },
          },
        },
      },
    },
  },
  plugins: [],
};
