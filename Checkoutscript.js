document.addEventListener("DOMContentLoaded", () => {
    // Simulating the transfer of data from another page
    // This would typically come from localStorage, sessionStorage, or URL parameters
    const selectedItems = JSON.parse(localStorage.getItem("selectedItems")) || [];
    
    const itemList = document.getElementById("item-list");
    const totalAmount = document.getElementById("total-amount");
    
    // Populate items and calculate total
    let total = 0;
    selectedItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        itemList.appendChild(li);
        total += item.price;
    });
    
    // Update total amount
    totalAmount.textContent = `Balance Due: $${total.toFixed(2)}`;
});

function selectPayment(method) {
    alert(`You have selected ${method} as your payment method.`);
    // Here you can redirect to the payment gateway or process the payment
}
