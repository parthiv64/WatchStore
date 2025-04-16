let cart = [];
let totalPrice = 0;

function addToCart(itemName, price) {
    cart.push({ itemName, price });
    totalPrice += price;
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-list');
    const totalPriceElement = document.getElementById('total-price');
    
    cartList.innerHTML = ''; // Clear current cart content
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.itemName} - $${item.price.toFixed(2)}`;
        cartList.appendChild(li);
    });
    
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

document.getElementById('checkout-btn').addEventListener('click', function() {
    if (cart.length > 0) {
        alert('Proceeding to checkout...');
        // Here you would trigger checkout functionality (redirect, payment, etc.)
    } else {
        alert('Your cart is empty!');
    }
});