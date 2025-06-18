//  @type {import('tailwindcss').Config}
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: "1rem",
        md: "1.5rem",
        xl: "2rem",
      }
    }
  },
  plugins: [],
}

