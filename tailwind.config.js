/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./html/*.html", // Scans all HTML files in the html folder
    "./*.html",//Scans main folder for other html files
    "./js/*.js", // Scans all JS files in the js folder
    "./css/*.css", // Ensures all relevant CSS files are included
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3366FF", //dominant color and transparent hover
        primaryhover: "#658BFF",
        lightgrey: "#737373", //subtitle
        deepgrey: "464555", //title
        green: "#22BA5C", //whatsapp
        greenhover: "#5ACF87",
        cyan: "#22A4C8", //telegram
        cyanhover: "#5CB8D1",
        blackhover: "#343434", //binary
        purple: "#8C51FF", //zaptek
        purplehover: "#A272FF",
        whitehover: "#EAEFFF", //buttons
        footericonhover: "#6188FF", //footersocialshover
      },
      fontFamily: {
        montserrat: ["montserrat"], //default
        dmsans: ["DM Sans"], //titles
      },
      fontSize: {
        fluid1: "clamp(28px, 2vw, 48px)", // for banner titles
        fluid2: "clamp(20px, 2vw, 32px)", // for titles
        fluid3: "clamp(11px, 2vw, 16px)", // for subtitles & contact card subtitle
        fluid4: "clamp(16px, 2vw, 26px)", // for contact card title
        fluid5: "clamp(10px, 2vw, 16px)", 
      },

      boxShadow: {
        custom1: "0px 4px 9.6px 0px #C0C0C07A", //social-cards
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
