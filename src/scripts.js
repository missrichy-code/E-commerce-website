document.addEventListener('DOMContentLoaded', function() {
    // Create and insert the navigation toggle button
    const navToggle = document.createElement('button');
    navToggle.innerText = 'Menu';
    navToggle.classList.add('nav-toggle');
    
    const nav = document.querySelector('nav');
    nav.parentNode.insertBefore(navToggle, nav);

    navToggle.addEventListener('click', function() {
        nav.classList.toggle('open');
    });

    // Function to add items to the cart
    window.addToCart = function(productName, price) {
        alert(`${productName} added to cart at $${price}`);
        // Update cart count (this is a simple example, you might want to implement a more complex cart system)
        const cartButton = document.querySelector('.cart-button');
        const cartCount = parseInt(cartButton.innerText.match(/\d+/)[0]) + 1;
        cartButton.innerText = `Cart (${cartCount})`;
    };
});