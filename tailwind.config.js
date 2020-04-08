module.exports = {
  theme: {
    extend: {
      inset: {
        "1": "1rem",
        "1.5": "1.5rem",
        "2": "2rem",
        center: "45%",
      },
    },
    colors: {
      background: {
        primary: "var(--bg-background-primary)",
        secondary: "var(--bg-background-secondary)",
        tertiary: "var(--bg-background-tertiary)",
      },
      color: {
        primary: "var(--text-color-primary)",
        inversion: "var(--text-color-inversion)",
      },
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",
      gray: {
        100: "#f7fafc",
        200: "#edf2f7",
        300: "#e2e8f0",
        400: "#cbd5e0",
        500: "#a0aec0",
        600: "#718096",
        700: "#4a5568",
        800: "#2d3748",
        900: "#1a202c",
      },
    },
  },
  variants: {},
  plugins: [],
}
