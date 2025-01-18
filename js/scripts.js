

AOS.init();
// Scroll effect on navbar
document.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("bg-[#161616]");
    navbar.classList.remove("bg-transparent");
  } else {
    navbar.classList.add("bg-transparent");
    navbar.classList.remove("bg-[#161616]");
  }
});


// when outside is clicked the nav menu vanishes
const toggleButton = document.getElementById("menu-toggle");
const navMenu = document.getElementById("navbar-sticky");

// Hide menu when clicking outside
document.addEventListener("click", (event) => {
  if (!navMenu.contains(event.target) && !toggleButton.contains(event.target)) {
    navMenu.classList.add("hidden");
  }
});

// Carousel JS code
let items = document.querySelectorAll(".slider .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let nextsm = document.getElementById("nextsm");
let prevsm = document.getElementById("prevsm");

let active = 3;
function loadShow() {
  let stt = 0;
  items[active].style.transform = `none`;
  items[active].style.zIndex = 1;
  items[active].style.filter = "none";
  items[active].style.opacity = 1;
  for (var i = active + 1; i < items.length; i++) {
    stt++;
    items[i].style.transform = `translateX(${180 * stt}px) scale(${
      1 - 0.2 * stt
    }) perspective(16px) rotateY(0deg)`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = "blur(1px)";
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
  stt = 0;
  for (var i = active - 1; i >= 0; i--) {
    stt++;
    items[i].style.transform = `translateX(${-180 * stt}px) scale(${
      1 - 0.2 * stt
    }) perspective(16px) rotateY(0deg)`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = "blur(1px)";
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
}
loadShow();
next.onclick = function () {
  active = active + 1 < items.length ? active + 1 : active;
  loadShow();
};
prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : active;
  loadShow();
};

nextsm.onclick = function () {
  active = active + 1 < items.length ? active + 1 : active;
  loadShow();
};
prevsm.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : active;
  loadShow();
};

// **//
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const contactStatusMessage = document.getElementById("contactStatusMessage");

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent form redirection

    // Collect form data
    const formData = new FormData(contactForm);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbw6lttEqzTj8O8qf_5n5C_M4xsrTcJEsQYWZQoVhBsbN5nrBWgywPHNPvkXQcUPVsS-/exec", // Replace with your Apps Script URL
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (result.result === "success") {
  alert("Thank you for contacting us! We'll respond soon.");
       
        contactStatusMessage.className =
          "text-center mt-4 text-green-600 text-sm";
        contactForm.reset(); // Reset the form
      } else {
        contactStatusMessage.textContent = `Error: ${result.error}`;
        contactStatusMessage.className =
          "text-center mt-4 text-red-600 text-sm";
      }
    } catch (error) {
      contactStatusMessage.textContent =
        "An unexpected error occurred. Please try again.";
      contactStatusMessage.className = "text-center mt-4 text-red-600 text-sm";
    }
  });
});

//  /////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
  const membershipForm = document.getElementById("membershipForm");

  membershipForm.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent form redirection

    const formData = new FormData(membershipForm);
    const actionUrl = membershipForm.getAttribute("action"); // The Google Apps Script URL

    try {
      const response = await fetch(actionUrl, {
        method: "POST",
        body: formData,
      });

      const result = await response.json(); // Parse the JSON response

      // Check if the form was successfully submitted
      if (result.result === "success") {
        alert("Congratulations!! You are now a member of the KNUST CSS.");
        membershipForm.reset(); // Reset the form
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      alert("An unexpected error occurred. Please try again.");
    }
  });
});
