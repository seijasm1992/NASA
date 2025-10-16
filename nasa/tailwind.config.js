 /** @type {import('tailwindcss').Config} */
 export default {
   content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
   theme: {
     extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        'barlow-condensed': ["Barlow Condensed", "sans-serif"],
        bellefair: ["Bellefair", "sans-serif"],
      },
     },
   },
   plugins: [],
 }