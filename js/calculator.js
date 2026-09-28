"use strict";

(() => {
    const form = document.querySelector("#feeCalculatorForm");

    if (!form) {
        return;
    }

    const selectedItemsContainer = document.querySelector("#selectedItemsList");
    const subtotalOutput = document.querySelector("#subtotalVal");
    const discountRateOutput = document.querySelector("#discountRate");
    const discountOutput = document.querySelector("#discountVal");
    const vatOutput = document.querySelector("#vatVal");
    const totalOutput = document.querySelector("#totalVal");
    const currencyFormatter = new Intl.NumberFormat("en-ZA", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    const formatRand = (amount) => `R${currencyFormatter.format(amount).replace(/\s/g, " ")}`;

    const getDiscountRate = (bookingCount) => {
        if (bookingCount >= 4) {
            return 0.15;
        }

        if (bookingCount === 3) {
            return 0.10;
        }

        if (bookingCount === 2) {
            return 0.05;
        }

        return 0;
    };

    const renderSelectedItems = (items) => {
        selectedItemsContainer.replaceChildren();

        if (items.length === 0) {
            const placeholder = document.createElement("p");
            placeholder.className = "placeholder-text";
            placeholder.textContent = "Select an item to start your booking.";
            selectedItemsContainer.append(placeholder);
            return;
        }

        const fragment = document.createDocumentFragment();

        items.forEach((item) => {
            const row = document.createElement("div");
            row.className = "summary-item";

            const name = document.createElement("span");
            name.textContent = item.name;

            const price = document.createElement("span");
            price.textContent = formatRand(item.price);

            row.append(name, price);
            fragment.append(row);
        });

        selectedItemsContainer.append(fragment);
    };

    const updateSummary = () => {
        const selectedItems = Array.from(form.querySelectorAll('input[name="item"]:checked')).map((input) => ({
            name: input.dataset.name || "Selected item",
            price: Number(input.value)
        })).filter((item) => Number.isFinite(item.price) && item.price >= 0);

        const subtotal = selectedItems.reduce((sum, item) => sum + item.price, 0);
        const discountRate = getDiscountRate(selectedItems.length);
        const discount = subtotal * discountRate;
        const discountedSubtotal = subtotal - discount;
        const vat = discountedSubtotal * 0.15;
        const total = discountedSubtotal + vat;

        renderSelectedItems(selectedItems);
        subtotalOutput.textContent = formatRand(subtotal);
        discountRateOutput.textContent = `${discountRate * 100}%`;
        discountOutput.textContent = `−${formatRand(discount)}`;
        vatOutput.textContent = formatRand(vat);
        totalOutput.textContent = formatRand(total);
    };

    form.addEventListener("change", updateSummary);
    form.addEventListener("submit", (event) => event.preventDefault());

    const requestedItem = new URLSearchParams(window.location.search).get("add");
    if (requestedItem) {
        const matchingCheckbox = Array.from(form.querySelectorAll('input[name="item"]')).find((input) => input.dataset.id === requestedItem);
        if (matchingCheckbox) {
            matchingCheckbox.checked = true;
        }
    }

    updateSummary();
})();
