// Light/Dark mode toggle

const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Counter game

let count = 0;
const counter = document.getElementById("counter");
document.getElementById("increaseBtn").addEventListener("click", () => {
  count++;
  counter.textContent = count;
});
document.getElementById("resetBtn").addEventListener("click", () => {
  count = 0;
  counter.textContent = count;
});


// Collapsible FAQ

const toggles = document.querySelectorAll(".faq-toggle");
toggles.forEach(toggle => {
  toggle.addEventListener("click", () => {
    const content = toggle.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});

// PART 3: FORM VALIDATION:

const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const successMessage = document.getElementById("successMessage");

// Email regex pattern
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault(); 

  let valid = true;

  // Validate name
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Validate email
  if (!emailInput.value.match(emailPattern)) {
    emailError.textContent = "Enter a valid email address";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Validate password
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // Success
  if (valid) {
    successMessage.textContent = "Form submitted successfully!";
    form.reset();
  }
});
