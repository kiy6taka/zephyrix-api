/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'zephyrix-blue': '#3B82F6',
        'zephyrix-dark': '#1E40AF'
      }
    },
  },
  plugins: [],
}