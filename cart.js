/*
*Cart Functionality - Created by La-Tavia Pearce ID#2305853
*Question: Shopping Cart Page 
*Instructions: This script allows items to be added, removed, quantities updated, and the cart to be cleared.
*/

// Importing the the Jewlelry class for reference and use 
import Jewelry from "./class.jewelry.js";

/* ----------CART ITEM CREATION------------*/
class CartItem {
	Constructor(jewelryItem, quantity) {
		this.name = jewelryItem.name;
		this.price = jewelryItem.price;
		this.description = jewelryItem.description;
		this.image = jewelryItem.image;
		this.category = jewelryItem.category;
		this.quantity = quantity;
		this.subTotal = this.calculateSubTotal();
	}
	
	calculateSubTotal() {
		return this.price * this.quantity;
	}
}

/*----------CART Functionality--------*/
class Cart {
	constructor() {
		this.items = []; // Array to store cart items 
		this.taxRate = 0.15; // Example tax rate (15%)
		this.discount = 0; // Discount value
	}
	
	// Add an item to Cart 
	addItem(jewelryItem, quantity = 1) {
		// Check if item is already in cart 
		const existingItem = this.items.find(item => item.name === jewelryItem.name);
		
		if (existingItem) {
			existingItem.quantity += quantity; // Update quantity 
			existingItem.subTotal = existingItem.calculateSubTotal(); // Recalculate subtotal 
		} else {
			this.items.push(new CartItem(jewelryItem, quantity)); // Add new item 
		}
	}
	
	// Remove an item from the cart 
	removeItem(itemName) {
		this.items = this.items.filter(item => item.name !== itemName);
	}
	
	// Update the quantity of a cart item 
	updateItemQuantity(itemName, newQuantity) {
		const item = this.items.find(item => item.name === itemName)'
		if (item) {
			item.quantity = newQuantity;
			item.subTotal = item.calculateSubTotal();
		}
	}
	
	// Clear all items from the cart 
	clearCart() {
		this.items = [];
	}
	
	// Calculate total price before tax and discount 
	calculateTotal() {
		return this.items.reduce((total, item) => total + item.subTotal, 0);
	}

	// Calculate grand total (with tax and discount)
	calculateGrandTotal() {
           const total = this.calculateTotal();
           const tax = total * this.taxRate;
           return total + tax - this.discount;
	}

	// Set discount 
	applyDiscount(discountValue) {
		this.discount = discountValue;
	}
}

	function loadSuggestedItems() {
		const suggestedItemsList = document.getElementById("suggested-item-list");
		const suggestedItems = [
			new Jewelry("Seren", 1350, "Seren is a graceful, timeless necklace featuring a delicate pendant that highlights natural beauty.", "./img/jewelry/necklace/neck7.jpg", "Necklace"),
			new Jewelry("Nora", 1400, "Nora offers clean lines and elegant simplicity, a versatile piece that adds sophistication to any look.", "./img/jewelry/necklace/neck8.jpg", "Necklace"),
			new Jewelry("Mira", 1600, "Mira showcases a sleek, modern design with a subtle touch of luxury, making it an everyday essential.", "./img/jewelry/necklace/neck9.jpg", "Necklace")
	        ];

	        suggestedItems.forEach(item => {
		   const itemDiv = doucment.createElement("div");
		   itemDiv.className = "suggested-item";

		   itemDiv.innerHTMl = `
  			<img src="${item.image}" alt="${item.name}" class="item-thumbnail">
     			<p class="item-name">${item.name}</p>
			<p class="item-price">$${item.pricetoFixed(2)}</p>
   			<button class="btn btn-sm btn-primary" onclick="addItemToCart('${item.name}', ${item.price})">Add to Cart</button>
                    `;

	           suggestedItemsList.appendChild(itemDiv);
	       });
           } 
          function addItemToCart(name, price) {
             const item = new Jewelry(name, price, "Description here", "image-path-here", "category");
	     cart.addItem(item, 1);
	     console.log(`${name} added to cart!`);
	  }

export default Cart;
export { CartItem, loadSuggestedItems };

function proceedToCheckout() {
	window.location.href = "CheckOut.html";
}

function continueShopping() {
	window.location.href = "products.page.html";
}


// Call this function when the page loads
document.addEventListener("DOMContentLoaded", loadSuggestedItems);

/* ----------EXAMPLE USAGE------------- */
//Create cart insurance 
const cart = new Cart();

// Add items to cart (using Jewelry objects from product.jewelry.js) 
cart.addItem(ring1, 2); // Add 2 Titan's Oath rings
cart.addItem(watch3); // Add 1 Rolex XII watch 
cart.addItem(necklace4, 3); // Add 3 Arden necklaces 

// Display cart items 
console.log("cart Items:", cart.items);

// Update quantity 
cart.updateItemQuantity("Titan's Oath", 1);

// Apply discount 
cart.applyDiscount(100); // Apply $100 discount 

// Calculate totals 
console.log("Toal (Before Tax):", cart.calculateTotal());
console.log("Grand Total (With Tax):", cart.calculateGrandTotal());

// Remove an item 
cart.removeItem("Rolex XII");

// Clear the cart 
// cart.clearCart();

export default Cart;
	
