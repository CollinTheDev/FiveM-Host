document.addEventListener("DOMContentLoaded", function() {
    // Handling View Cart Button
    const viewCartButton = document.getElementById("view-cart");
    if (viewCartButton) {
        viewCartButton.addEventListener("click", function() {
            const cartArea = document.querySelector(".cart");
            if (cartArea) {
                cartArea.classList.toggle("show");
            }
        });
    }

    // Handling Add to Cart Buttons
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartArea = document.createElement("div");
    cartArea.classList.add("cart");
    cartArea.innerHTML = "<h2>Shopping Cart</h2><ul></ul>";
    document.body.appendChild(cartArea);

    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || {};

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            const productId = button.getAttribute("data-product-id");
            if (!cartItems[productId]) {
                cartItems[productId] = 1;
            } else {
                cartItems[productId]++;
            }
            updateCart();
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        });
    });

    function updateCart() {
        const cartList = cartArea.querySelector("ul");
        cartList.innerHTML = "";
        Object.entries(cartItems).forEach(([productId, quantity]) => {
            const product = document.createElement("li");
            product.textContent = `Product ${productId}: ${quantity}`;
            cartList.appendChild(product);
        });
    }

    // Populate cart on page load
    updateCart();
});
