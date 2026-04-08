document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("form-message").style.color = "green";
  document.getElementById("form-message").textContent =
    "Thank you for contacting us! We'll get back to you soon.";
  this.reset();
});
