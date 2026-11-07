// Shared functions render cards, details, and tables from catalogItems.
function currency(value) {
  var formatted = Number(value).toFixed(2);
  var parts = formatted.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return "R" + parts[0] + "." + parts[1];
}
<<<<<<< HEAD
function imagePath(slug) { var paths = { ultimate: "assets/images/ultimate.jpg", vip: "assets/images/vip.jpg", esports: "assets/images/esportstraining.jpeg", birthday: "assets/images/birthday.jpg", vr: "assets/images/vr.jpg", racing: "assets/images/racing.jpg", escape: "assets/images/escape.jpg" }; return paths[slug] || ""; }
=======
function imagePath(slug) { var paths = { ultimate: "assets/images/ultimate.jpg", vip: "assets/images/vip.jpg", esports: "assets/images/esports.jpg", birthday: "assets/images/birthday.jpg", vr: "assets/images/vr.jpg", racing: "assets/images/racing.jpg", escape: "assets/images/escape.jpg" }; return paths[slug] || ""; }
>>>>>>> f5e08caefde67a2f54e3ed66c28b735597555d5b
function setImage(element, paths, label) {
  if (!element) return;
  var candidates = Array.isArray(paths) ? paths : [paths];
  var index = 0;
  var image = new Image();

  function tryNextImage() {
    if (index >= candidates.length) {
      element.innerHTML = '<span>' + label + '</span>';
      element.className += " image-placeholder";
      return;
    }
    image.onload = function () { element.innerHTML = '<img src="' + candidates[index] + '" alt="' + label + '">'; };
    image.onerror = function () { index += 1; tryNextImage(); };
    image.src = candidates[index];
  }
  tryNextImage();
}
function renderCards(items, containerId, detailPage) {
  var container = document.getElementById(containerId);
  var packagePages = { ultimate: "ultimate-gamer-pass.html", vip: "vip-gaming-experience.html", esports: "esports-training.html", birthday: "birthday-party.html" };
  var experiencePages = { vr: "virtual-reality.html", racing: "racing-simulator.html", escape: "escape-room.html" };
  container.innerHTML = "";
  items.forEach(function (item) {
    var card = document.createElement("article");
    card.className = "card";
    var imageSlot = '<div class="experience-image"></div>';
    var list = item.includes.map(function (included) { return "<li>" + included + "</li>"; }).join("");
    var detailLink = detailPage === "packages" ? packagePages[item.slug] : experiencePages[item.slug];
    card.innerHTML = imageSlot + '<h2>' + item.name + '</h2><div class="price">' + currency(item.price) + '</div><p>' + item.tagline + '</p><strong>Includes</strong><ul>' + list + '</ul><a class="button" href="' + detailLink + '">View details</a>';
    container.appendChild(card);
    var slot = card.querySelector(".experience-image");
    if (item.type === "experience") setImage(slot, imagePath(item.slug), item.name);
    else setImage(slot, imagePath(item.slug), item.name);
  });
}
function findItem(slug, fallback) {
  return catalogItems.find(function (item) { return item.slug === slug && item.type === fallback.type; }) || fallback;
}
function renderDetail(item) {
  document.getElementById("detailName").textContent = item.name;
  document.getElementById("detailPrice").textContent = currency(item.price);
  document.getElementById("detailTagline").textContent = item.tagline;
  document.getElementById("detailIncludes").innerHTML = item.includes.map(function (line) { return "<li>" + line + "</li>"; }).join("");
  var slot = document.getElementById("detailImage");
  var image = imagePath(item.slug);
  setImage(slot, image, item.name);
  document.getElementById("addQuote").onclick = function () { addQuoteItem(item.slug); window.location.href = "fees.html"; };
}
function addQuoteItem(slug) {
  var chosen = JSON.parse(sessionStorage.getItem("quoteItems") || "[]");
  if (!chosen.includes(slug)) chosen.push(slug);
  sessionStorage.setItem("quoteItems", JSON.stringify(chosen));
}
