// Get all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Variables to store cart total and items
let cartTotal = 0;
const cartItems = [];

// Function to add activity to cart
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const activityName = this.parentElement.querySelector('h3').innerText;
        const activityPrice = parseInt(this.getAttribute('data-price'));

        // Update cart total and display in INR
        cartTotal += activityPrice;
        document.getElementById('total-amount').innerText = `Total: ₹${cartTotal}`;

        // Add item to cart
        cartItems.push(activityName);
        displayCartItems();
    });
});

// Function to display cart items
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    cartItems.forEach(item => {
        const itemElement = document.createElement('p');
        itemElement.innerText = item;
        cartItemsContainer.appendChild(itemElement);
    });
}

document.getElementById('checkout-button').addEventListener('click', function() {
    if (cartTotal > 0) {
        alert(`Proceeding to payment. Total amount is ₹${cartTotal}`);
    } else {
        alert('Your cart is empty. Please add activities to your cart.');
    }
});

