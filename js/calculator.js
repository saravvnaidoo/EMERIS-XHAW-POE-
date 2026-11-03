// Build the fee calculator from the shared catalog and save its breakdown.
function calculateQuote() {
  var boxes = Array.prototype.slice.call(document.querySelectorAll(".fee-checkbox:checked"));
  var selected = boxes.map(function (box) { return catalogItems.find(function (item) { return item.slug === box.value; }); });
  var subtotal = selected.reduce(function (sum, item) { return sum + item.price; }, 0);
  var discount = selected.length >= 2 ? subtotal * 0.05 : 0;
  var discountedSubtotal = subtotal - discount;
  var vat = discountedSubtotal * 0.15;
  var total = discountedSubtotal + vat;
  var rows = selected.map(function (item) { return "<tr><td>" + item.name + "</td><td>" + currency(item.price) + "</td></tr>"; }).join("");
  document.getElementById("feeRows").innerHTML = rows || '<tr><td colspan="2">No items selected</td></tr>';
  document.getElementById("discountLine").textContent = "Discount: " + currency(discount);
  document.getElementById("vatLine").textContent = "VAT: " + currency(vat);
  document.getElementById("totalLine").textContent = "Total: " + currency(total);
  sessionStorage.setItem("quoteBreakdown", JSON.stringify({ items: selected.map(function (item) { return item.slug; }), subtotal: subtotal, discount: discount, vat: vat, total: total }));
}
function setupCalculator() {
  var chosen = JSON.parse(sessionStorage.getItem("quoteItems") || "[]");
  var container = document.getElementById("feeOptions");
  catalogItems.forEach(function (item) {
    var label = document.createElement("label");
    label.className = "check-row";
    label.innerHTML = '<input class="fee-checkbox" type="checkbox" value="' + item.slug + '"' + (chosen.includes(item.slug) ? " checked" : "") + '> ' + item.name + ' - ' + currency(item.price);
    container.appendChild(label);
    label.querySelector("input").addEventListener("change", calculateQuote);
  });
  calculateQuote();
}
