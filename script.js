// Initialize an empty cart
let cart = [];

// Update the cart count in the navbar and show cart items
function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartItemsList = document.getElementById('cart-items-list');
    const cartPopup = document.getElementById('cart-popup');

    // Update the cart count in the button
    cartCount.textContent = cart.length;

    // Show cart items in the popup
    cartItemsList.innerHTML = '';  // Clear previous list
    if (cart.length === 0) {
        cartItemsList.innerHTML = '<li>No items in cart.</li>';
    } else {
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price}`;
            cartItemsList.appendChild(li);
        });
    }
    
    // Show or hide the cart popup based on the cart status
    cartPopup.style.display = cart.length > 0 ? 'block' : 'none';
}

// Event listener to show/hide the cart popup
document.getElementById('cart-button').addEventListener('click', function() {
    const cartPopup = document.getElementById('cart-popup');
    cartPopup.style.display = cartPopup.style.display === 'block' ? 'none' : 'block';
});

// Add event listeners to each "Add to Cart" button
document.querySelectorAll('.add-to-cart').forEa