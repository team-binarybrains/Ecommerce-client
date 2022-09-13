// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        clr:'#7fad39',
        dark:'#161b1d'
      }
    },
  },
  plugins: [require("daisyui")],
};
