// Shared navigation and footer appear on every page.
document.addEventListener("DOMContentLoaded", function () {
  var pageName = window.location.pathname.split("/").pop() || "index.html";
  var header = document.getElementById("site-header");
  var footer = document.getElementById("site-footer");
  if (header) {
    header.innerHTML = '<div class="nav-wrap"><a class="logo" href="index.html" aria-label="Next Level Gaming home"><img class="site-logo" src="assets/logo.jpg" alt="Next Level Gaming logo"></a><nav class="main-nav" aria-label="Main navigation"><a href="index.html" data-page="index.html">Home</a><a href="about.html" data-page="about.html">About</a><a href="packages.html" data-page="packages.html">Packages</a><a href="experiences.html" data-page="experiences.html">Experiences</a><a href="fees.html" data-page="fees.html">Fees</a><a href="contact.html" data-page="contact.html">Contact</a></nav></div>';
  }
  if (footer) footer.innerHTML = '<p>&copy; 2026 Next Level Gaming &amp; Esports Arena</p>';
  document.querySelectorAll(".main-nav a").forEach(function (link) {
    if (link.dataset.page === pageName) link.classList.add("active");
  });
});
