AOS.init();

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

