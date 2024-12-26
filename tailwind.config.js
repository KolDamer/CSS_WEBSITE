/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./html/*.html", // Scans all HTML files in the html folder
    "./js/*.js", // Scans all JS files in the js folder
    "./css/*.css", // Ensures all relevant CSS files are included
  ],
  theme: {
    extend: {

      colors: {
        primary:'#3366FF',               //dominant color and transparent hover
        primaryhover:'#658BFF',
        lightgrey: '#737373',           //subtitle
        deepgrey:'464555',                //title
        green:'#22BA5C',                    //whatsapp
        greenhover:'#5ACF87',
        cyan:'#22A4C8',                    //telegram
        cyanhover:'#5CB8D1',
        blackhover:'#343434',               //binary
        purple:'#8C51FF',                 //zaptek
        purplehover:'#A272FF',
        whitehover:'#EAEFFF',               //buttons
        footericonhover:'#6188FF'             //footersocialshover

      },
      fontFamily: {
        'montserrat': ['montserrat'],              //default
        'dmsans': ['DM Sans'],                 //titles
        
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
