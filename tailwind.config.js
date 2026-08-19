/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        page: "#f8faff",
        surface: "#f2f5fc",
        ink: "#0b0500",
        muted: "#707078",
        accent: "#51acfe",
        "accent-soft": "rgba(81, 172, 254, 0.07)",
        "accent-faded": "rgba(81, 172, 254, 0.4)",
        "on-accent": "#f1f8ff",
      },
      fontFamily: {
        display: ["Unbounded", "system-ui", "sans-serif"],
        body: ["Geologica", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "15px",
        pill: "60px",
      },
      maxWidth: {
        content: "1400px",
      },
    },
  },
  plugins: [],
};
