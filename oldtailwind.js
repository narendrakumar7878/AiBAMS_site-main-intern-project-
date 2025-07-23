/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f3f4f6",
        border: "#e5e7eb",
        foreground: "#1f2937",
      }
    },
  },
  plugins: [],
}

