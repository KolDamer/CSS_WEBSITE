/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./html/*.html", // Scans all HTML files in the html folder
    "./js/*.js", // Scans all JS files in the js folder
    "./css/*.css", // Ensures all relevant CSS files are included
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
