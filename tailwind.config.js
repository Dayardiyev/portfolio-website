/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-bg": "var(--primary-bg)",
        "dark-bg": "var(--dark-bg)",
        "dark-text": "var(--dark-text)"
      }
    },
  },
  plugins: [],
}
