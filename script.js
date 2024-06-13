document.addEventListener("DOMContentLoaded", function() {
    const viewCartButton = document.getElementById("view-cart");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartArea = document.createElement("div");
    cartArea.classList.add("cart");
    cartArea.innerHTML = "<h2>Shopping Cart</h2><ul></ul>";
    document.body.appendChild(cart
