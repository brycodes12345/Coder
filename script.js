// =========================
// SHOPPING CART
// =========================

let cartCount = 0;

const products = document.querySelectorAll(".product");

const cartDisplay = document.getElementById("cart-count");


products.forEach(function(product) {

    product.addEventListener("click", function() {

        cartCount++;

        cartDisplay.textContent = cartCount;

        alert("Product added to cart!");

    });

});


// =========================
// NEWSLETTER
// =========================

const form = document.getElementById("email-form");


form.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = form.querySelector("input").value;

    alert(`Welcome to VANTA, ${email}!`);

    form.reset();

});

