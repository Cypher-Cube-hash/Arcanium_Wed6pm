/*
*Cart Functionality - Created by La-Tavia Pearce ID#2305853
*Question: Shopping Cart Page 
*Instructions: This script allows items to be added, removed, quantities updated, and the cart to be cleared.
*/

// Sample cart data for demonstration 
const cartData = [
	{ id: 1, name: "Ring", price: 100, quantity: 2 },
	{ id: 2, name: "Necklace", price: 150, quantity: 1},
];

// Function to render cart items 
function renderCart() {
	const cartItemsContainer = document.getElementById("cart-items-list");
	cartItemsContainer.innerHTML = "";
	let subtotal = 0;
	
	cartData.forEach(item => {
		const itemTotal = item.price * item.quantity;
		subtotal += itemTotal;
		
		// Cart item HTMl structure 
		const itemDiv = document.createElement("div");
		itemDiv.classList.add("cart-item");
		itemDiv.innerHTML = `
			<p>${item.name} - $${item.price} x ${item.quantity} = $${itemTotal.toFixed(2)}</p>
			<button onclick="removeItem(${item.id})">Remove</button>
			<input type="number" min="1" value="${item.quantity}" onchange="updateQuantity(${item.id}, this.value)">
		`;
		cartItemsContainer.appendChild(itemDiv);
	});
	
	// Set calculated values for summary
	document.getElementById("subtotal").textContent = subtotal.toFixed(2);
	document.getElementById("discount").textContent = calculateDiscount(subtotal)};
	document.getElementById("tax-shipping").textContent = calculatedTax(subtotal);
	document.getElementById("total").textContent = calculateTotal(subtotal);


// Remove item from cart 
function removeItem(itemId) {
	const itemIndex = cartData.findIndex(item => item.id === itemId);
	if (itemIndex > -1) {
		cartData.splice(itemIndex, 1);
	}
	renderCart();
}

// Update of item 
function updateQuantity(itemId, newQuantity) {
	const item = cartData.find(item => item.id === itemId);
	if (item) {
		item.quantity = parseInt(newQuantity);
	}
	renderCart();
}

// Calculate discount 
function calculateDiscount(subtotal) {
	return (subtotal * 0.1).toFixed(2);
}

// Calculate tax 
function calculateTax(subtotal) {
	return (subtotal * 0.08).toFixed(2);
}

// Calculate total price 
function calculateTotal(subtotal) {
	const discount = parseFloat(calculateDiscount(subtotal));
	const tax = parseFloat(calculateTax(subtotal));
	return (subtotal - discount + tax).toFixed(2);
}

// Clear all items from cart 
document.getElementById("clear-all").addEventListener("click", () => {
	cartData.length = 0;
	renderCart(); 
});

// Check out - redirect to checkout page 
document.getElementById("checkout").addEventListener("click", () => {
	alert("Redirecting to checkout page...");
	// Logic for checkout redirection here 
});

// Close cart view 
document.getElementById("close-cart").addEventListener("click", () => {
	alert("Closing cart view...");
	// Logic for closing cart view here 
});

// Initial render of cart items 
renderCart();
	


	
	