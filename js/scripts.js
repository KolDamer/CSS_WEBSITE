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

// Carousel JS Code
const carouselItems = document.getElementById("carouselItems");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

let currentIndex = 0;
let itemsToShow = 1;

// Determine items to show based on screen width
function updateItemsToShow() {
  if (window.innerWidth >= 1024) {
    // large screens
    itemsToShow = 3;
  } else if (window.innerWidth >= 768) {
    // medium screens
    itemsToShow = 2;
  } else {
    // small screens
    itemsToShow = 1;
  }
  moveCarousel();
  updateButtonColors();
}

// Update button colors based on the current index
function updateButtonColors() {
  const totalItems = carouselItems.children.length;

  if (currentIndex === 0) {
    prevButton.classList.add();
    prevButton.classList.remove();
  } else {
    prevButton.classList.remove();
    prevButton.classList.add();
  }

  if (currentIndex >= totalItems - itemsToShow) {
    nextButton.classList.add();
    nextButton.classList.remove();
  } else {
    nextButton.classList.remove();
    nextButton.classList.add();
  }
}

// Move carousel based on current index and items to show
function moveCarousel() {
  const width = carouselItems.children[0].offsetWidth;
  carouselItems.style.transform = `translateX(-${currentIndex * width}px)`;
}

// Looping functionality in Button click events
prevButton.addEventListener("click", () => {
  const totalItems = carouselItems.children.length;
  currentIndex = currentIndex > 0 ? currentIndex - 1 : totalItems - itemsToShow;
  moveCarousel();
  updateButtonColors();
});

nextButton.addEventListener("click", () => {
  const totalItems = carouselItems.children.length;
  currentIndex = currentIndex < totalItems - itemsToShow ? currentIndex + 1 : 0;
  moveCarousel();
  updateButtonColors();
});

// Resize listener to update items to show on window resize
window.addEventListener("resize", updateItemsToShow);

// Initialize the carousel
updateItemsToShow();

// indicators
const items = document.querySelectorAll(".carousel-item");
const indicators = document.querySelectorAll(".indicator");

let recentIndex = 0;

function updateCarousel(index) {
  // Update active class on carousel items
  items.forEach((item, i) => {
    item.classList.toggle("active", i === index);
  });

  // Update active class on indicators
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle("active", i === index);
    // Remove active class from all
    indicator.classList.remove("active");

    // Add active class only to the current index
    if (i === index) {
      indicator.classList.add("active");
    }
  });

  // Slide to the selected item
  const carouselItems = document.querySelector(".carousel-items");
  carouselItems.style.transform = `translateX(-${index * 100}%)`;
}

// Add click event to indicators
indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    recentIndex = index;
    updateCarousel(recentIndex);
  });
});

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
        contactStatusMessage.textContent =
          "Thank you for contacting us! We'll respond soon.";
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
const form = document.getElementById("membershipForm");
const statusMessage = document.getElementById("statusMessage");

form.addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent form redirection

  // Validate year-level input
  const yearInputs = document.querySelectorAll('input[name="Year Level"]');
  const isYearChecked = Array.from(yearInputs).some((input) => input.checked);

  if (!isYearChecked) {
    statusMessage.textContent = "Please select your year level.";
    statusMessage.className = "text-center mt-4 text-red-600 text-sm";
    return; // Stop form submission
  }

  // Collect form data
  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.result === "success") {
      statusMessage.textContent =
        "Congratulations!! You are now a member of the KNUST CSS";
      statusMessage.className = "text-center mt-4 text-green-600 text-sm";
      form.reset(); // Reset form fields
    } else {
      statusMessage.textContent = `Error: ${result.error}`;
      statusMessage.className = "text-center mt-4 text-red-600 text-sm";
    }
  } catch (error) {
    statusMessage.textContent =
      "An unexpected error occurred. Please try again.";
    statusMessage.className = "text-center mt-4 text-red-600 text-sm";
  }
});
