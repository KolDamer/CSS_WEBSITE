AOS.init();


  const image = document.getElementById("responsive-image");

  function updateImageSrc() {
       if(window.innerWidth >= 1440){
          image.src = "../Images/Contact-banner.png";
        }
        else if (window.innerWidth >= 768) {
          image.src = "../Images/contact-banner-md.png"; // Replace with your 768px+ image
        } 
    else {
      image.src = "../Images/contact-banner-mobile.png"; // Replace with your smaller screen image
    }
  }

  // Run on page load
  updateImageSrc();

  // Run on window resize
  window.addEventListener("resize", updateImageSrc);

