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
        deepgrey: "#464555", //title
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
        fluid3: "clamp(11px, 2vw, 16px)", // for subtitles & contact card subtitle & social card subtitle & placeholders & read guidelines button text
        fluid4: "clamp(16px, 2vw, 26px)", // for contact card title
        fluid5: "clamp(10px, 2vw, 16px)",
        fluid6: "clamp(15px, 2vw, 20px)", // for social card title & follow button text
        fluid7: "clamp(10px, 2vw, 12px)", // css logo base text & form base text
        fluid8: "clamp(11px, 2vw, 20px)", // form button text
      },

      width: {
        fluid1: "clamp(91px, 15vw, 107px)",
        fluid2: "clamp(287px, 45vw, 525px)", //sign up card
        fluid3: "clamp(62px, 45vw, 82px)", //css logo base textbox
        fluid4: "clamp(62px, 15vw, 77px)",
        fluid5: "clamp(19px, 2vw, 24px)", //form button svg
        fluid6: "clamp(232px, 15vw, 334px)",
        fluid7: "clamp(288px, 70vw, 1140px)", //society guidelines div
        fluid8: "clamp(14px, 2vw, 28px)", //send message button svg
        fluid9: "clamp(230px, 35vw, 293px)",
        fluid10: "clamp(232px, 15vw, 251px)", //send message button
      },
      height: {
        fluid1: "clamp(253px, 35vw, 296px)", // social cards & send message button
        fluid2: "clamp(488px, 35vw, 656px)", // membership-heroImage
        fluid3: "clamp(464px, 35vw, 640px)", // Custom height using clamp()
        fluid4: "clamp(32px, 35vw, 40px)", // Custom height using clamp()
        fluid5: "clamp(19px, 2vw, 24px)", // form vutton svg
        fluid6: "clamp(358px, 35vw, 344px)", //society guidelines div
        fluid7: "clamp(14px, 2vw, 28px)", //send message button svg
        fluid8: "clamp(76px, 15vw, 160px)",
        fluid9: "clamp(363px, 35vw, 414px)",
        fluid10: "clamp(363px, 55vw, 440px)", // contact from
        fluid11: "clamp(44px, 15vw, 64px)",
      },
      boxShadow: {
        custom1: "0px 4px 9.6px 0px #C0C0C07A", //social-cards
        custom2: "0px 4px 9.6px 0px rgba(51, 102, 255, 0.16)", // sign up card
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
