/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'my-blue': '#007bff',
        'my-grey': '#71797e'
      },
    },
  },
  variants: {},
  plugins: [],
}

