// Validate both forms and restrict phone input to digits.
function validEmail(value) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); }
function validPhone(value) { return /^0\d{9}$/.test(value) || /^27\d{9}$/.test(value); }
function setError(input, message) { input.classList.toggle("invalid", Boolean(message)); document.getElementById(input.id + "Error").textContent = message; }
function setupValidation(formId, includesMessage) {
  var form = document.getElementById(formId);
  if (!form) return;
  var phone = form.querySelector("input[type='tel']");
  phone.addEventListener("input", function () { this.value = this.value.replace(/\D/g, ""); });
  form.querySelectorAll("input, textarea").forEach(function (input) {
    input.addEventListener("input", function () { validateField(input, includesMessage); });
  });
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var valid = true;
    form.querySelectorAll("input, textarea").forEach(function (input) { if (!validateField(input, includesMessage)) valid = false; });
    if (!valid) return;
    if (formId === "bookingForm") { sessionStorage.setItem("customerDetails", JSON.stringify({ name: document.getElementById("fullName").value, phone: phone.value, email: document.getElementById("emailAddress").value })); window.location.href = "confirmation.html"; }
    else { document.getElementById("contactSuccess").textContent = "Thank you. Your enquiry has been sent."; form.reset(); }
  });
}
function validateField(input, includesMessage) {
  var message = "";
  if (!input.value.trim()) message = "This field is required.";
  else if (input.type === "email" && !validEmail(input.value.trim())) message = "Enter a valid email address.";
  else if (input.type === "tel" && !validPhone(input.value)) message = "Enter a valid South African cell number.";
  else if (input.tagName === "TEXTAREA" && !input.value.trim() && includesMessage) message = "This field is required.";
  setError(input, message);
  return !message;
}
