/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#fef1f8',
          '100': '#fde6f3',
          '200': '#fecce9',
          '300': '#ffa2d5',
          '400': '#fd69b8',
          '500': '#f72d93',
          '600': '#e81a78',
          '700': '#ca0c5d',
          '800': '#a60e4d',
          '900': '#8b1043',
          '950': '#550224',
        },
      }
    },
  },
  plugins: [],
}