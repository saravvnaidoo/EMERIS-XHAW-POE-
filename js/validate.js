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
    if (formId === "bookingForm") {
      sessionStorage.setItem("customerDetails", JSON.stringify({ name: document.getElementById("fullName").value, phone: phone.value, email: document.getElementById("emailAddress").value }));
      var submitButton = form.querySelector("button[type='submit']");
      var progress = document.getElementById("requestProgress");
      var progressFill = document.getElementById("requestProgressFill");
      var progressValue = document.getElementById("requestProgressValue");
      submitButton.disabled = true;
      progress.hidden = false;
      var started = Date.now();
      var timer = setInterval(function () {
        var percentage = Math.min(100, Math.floor((Date.now() - started) / 3000 * 100));
        progressFill.style.width = percentage + "%";
        progressValue.textContent = percentage + "%";
        progress.querySelector("[role='progressbar']").setAttribute("aria-valuenow", percentage);
        if (percentage === 100) {
          clearInterval(timer);
          progress.hidden = true;
          window.location.href = "confirmation.html";
        }
      }, 30);
    }
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
