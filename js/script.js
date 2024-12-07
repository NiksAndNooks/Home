// Initialize an empty cart or get cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Get elements
const cartLink = document.getElementById("cart-link");
const addToCartButtons = document.querySelectorAll(".add-to-cart");

// Update the cart link
function updateCartLink() {
    const cartCount = cart.length;
    cartLink.textContent = `Cart (${cartCount})`;
}

// Add product to cart
function addToCart(productName, productPrice) {
    const product = { name: productName, price: parseFloat(productPrice) };
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartLink();
}

// Attach event listeners to all "Add to Cart" buttons
addToCartButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        const productName = e.target.dataset.product;
        const productPrice = e.target.dataset.price;
        addToCart(productName, productPrice);
    });
});

// Update cart link text on page load
updateCartLink();
