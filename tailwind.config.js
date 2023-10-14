/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
        backgroundColor: {
            'black-light': '#333333', // Cambia este valor al color deseado
        },
    },
  },
  plugins: [],
}
