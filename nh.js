// JavaScript to manage the cart functionality
let cart = []; // Array to store cart items

// Get DOM elements
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartButton = document.getElementById('cart-button');
const cartPopup = document.getElementById('cart-popup');
const cartCount = document.getElementById('cart-count');
const cartItemsList = document.getElementById('cart-items-list');
const totalPriceElement = document.getElementById('total-price');
const checkoutButton = document.getElementById('checkout-button');

// Event listener for the "Add to Cart" buttons
addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const productElement = event.target.closest('.product');
        const productId = productElement.getAttribute('data-id');
        const productName = productElement.querySelector('h3').textContent;
        const productPrice = parseFloat(productElement.querySelector('.price').textContent.replace('$', ''));

        // Add product to the cart array
        const cartItem = { id: productId, name: productName, price: productPrice };
        cart.push(cartItem);

        // Update the cart count and total price
        updateCart();
    });
});

// Function to update the cart count, total price, and cart popup
function updateCart() {
    // Update the cart count in the navbar
    cartCount.textContent = cart.length;

    // Update the cart items in the cart popup
    cartItemsList.innerHTML = '';
    if (cart.length === 0) {
        cartItemsList.innerHTML = '<li>No items in cart.</li>';
    } else {
        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItemsList.appendChild(listItem);
        });
    }

    // Calculate the total price
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Event listener to toggle the visibility of the cart popup
cartButton.addEventListener('click', () => {
    cartPopup.style.display = cartPopup.style.display === 'block' ? 'none' : 'block';
});

// Event listener for checkout button (you can implement real checkout later)
checkoutButton.addEventListener('click', () => {
    alert('Proceeding to checkout...');
});