document.addEventListener("DOMContentLoaded", function() {
    const viewCartButton = document.getElementById("view-cart");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartArea = document.createElement("div");
    cartArea.classList.add("cart");
    cartArea.innerHTML = "<h2>Shopping Cart</h2><ul></ul>";
    document.body.appendChild(cartArea);

    const cartItems = {};

    viewCartButton.addEventListener("click", function() {
        cartArea.classList.toggle("show");
    });

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            const productId = button.getAttribute("data-product-id");
            if (!cartItems[productId]) {
                cartItems[productId] = 1;
            } else {
                cartItems[productId]++;
            }
            updateCart();
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
});
