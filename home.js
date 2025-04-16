// JavaScript for handling the cart functionality
let cart = [];

const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartButton = document.getElementById('cart-button');
const cartPopup = document.getElementById('cart-popup');
const cartCount = document.getElementById('cart-count');
const cartItemsList = document.getElementById('cart-items-list');
const checkoutButton = document.getElementById('checkout-button');

// Add event listeners to "Add to Cart" buttons
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.closest('.product');
        const productId = product.getAttribute('data-id');
        const productName = product.querySelector('h3').textContent;
        const productPrice = product.querySelector('.price').textContent;

        // Add product to the cart
        const cartItem = { id: productId, name: productName, price: productPrice };
        cart.push(cartItem);

        // Update cart count
        cartCount.textContent = cart.length;

        // Update the cart popup
        updateCartPopup();
    });
});

// Update the cart popup with the items in the cart
function updateCartPopup() {
    // Clear the current items in the cart popup
    cartItemsList.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsList.innerHTML = '<li>No items in cart.</li>';
    } else {
        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - ${item.price}`;
            cartItemsList.appendChild(listItem);
        });
    }
}

// Toggle the visibility of the cart popup
cartButton.addEventListener('click', () => {
    cartPopup.style.display = cartPopup.style.display === 'block' ? 'none' : 'block';
});

// Checkout button functionality (you can add real checkout functionality here)
checkoutButton.addEventListener('click', () => {
    alert('Proceeding to checkout...');
});