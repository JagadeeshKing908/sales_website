document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const msg = document.getElementById("form-message");
  msg.style.color = "green";
  msg.textContent = "Thank you! We will contact you soon.";

  this.reset();
});
