// 5. Invoice Generation:
// a. After checkout, generate an invoice with the following details:
const tax = 50;
let invoices = JSON.parse(localStorage.getItem("AllInvoices")) || [];

// Function to calculate amount
function calculate() {
    const price = parseFloat(document.getElementById("prc").value) || 0;
    const quantity = parseInt(document.getElementById("qty").value) || 0;
    const amount = price * quantity;
    document.getElementById("amnt").value = amount.toFixed(2);
}

function addData() {
    const ids = document.getElementById("ids").value;
    const prod_name = document.getElementById("product").value;
    const price = parseFloat(document.getElementById("prc").value);
    const quantity = parseInt(document.getElementById("qty").value);
    const amount = price * quantity;

    const newRow = `
        <tr>
            <td>${ids}</td>
            <td>${prod_name}</td>
            <td>${price.toFixed(2)}</td>
            <td>${quantity}</td>
            <td>${amount.toFixed(2)}</td>
        </tr>`;
    document.getElementById("newtr").innerHTML += newRow;

    const subtotal = parseFloat(document.getElementById("subtotal-amount").textContent) || 0;
    const newSubtotal = subtotal + amount;
    document.getElementById("subtotal-amount").textContent = newSubtotal.toFixed(2);
    document.getElementById("total-amount").textContent = (newSubtotal + tax).toFixed(2);
}

function saveInvoice() {
    // Retrieve TRN from localStorage (assuming it's stored under 'RegisterData' key)
    const userTrn = JSON.parse(localStorage.getItem("RegisterData"))?.trn || null;

    if (!userTrn) {
        alert("TRN not found. Please register or log in.");
        return;
    }
// 5. Invoice Generation (Continued):
// b. Append this invoice to the user’s array of invoices (array of objects). 
        invoiceNumber: Date.now(),
        date: new Date().toLocaleDateString(),
        trn: userTrn, // Include the TRN in the invoice
        items: Array.from(document.querySelectorAll("#newtr tr")).map(row => {
            const cells = row.querySelectorAll("td");
            return {
                id: cells[0].textContent,
                name: cells[1].textContent,
                price: parseFloat(cells[2].textContent),
                quantity: parseInt(cells[3].textContent),
                amount: parseFloat(cells[4].textContent),
            };
        }),
        subtotal: parseFloat(document.getElementById("subtotal-amount").textContent),
        tax: tax,
        total: parseFloat(document.getElementById("total-amount").textContent),
    };

 // b. ShowInvoices() - displays all invoices and allow the visitor to search for any of the invoices (using trn) stored in AllInvoices from localStorage using console.log().

    invoices.push(invoice);
    localStorage.setItem("AllInvoices", JSON.stringify(invoices));

    // Optionally, you can also store the invoice under the user's TRN, to easily fetch it later.
    let userInvoices = JSON.parse(localStorage.getItem(userTrn)) || [];
    userInvoices.push(invoice);
    localStorage.setItem(userTrn, JSON.stringify(userInvoices));

    alert("Invoice saved and sent!");
}

function showInvoices() {
    const allInvoices = JSON.parse(localStorage.getItem("AllInvoices")) || [];
    const container = document.getElementById("invoice-list");
    container.innerHTML = `<h3>All Invoices</h3>`;
    allInvoices.forEach(invoice => {
        const items = invoice.items.map(item => `
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>${item.quantity}</td>
                <td>${item.amount.toFixed(2)}</td>
            </tr>
        `).join("");
        container.innerHTML += `
            <div>
                <p><strong>Invoice #:</strong> ${invoice.invoiceNumber}</p>
                <p><strong>Date:</strong> ${invoice.date}</p>
                <p><strong>Total:</strong> ${invoice.total.toFixed(2)}</p>
                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>${items}</tbody>
                </table>
            </div>
        `;
    });
}
// c. GetUserInvoices() – displays all the invoices for a user based on trn stored in the localStorage key called RegisterData.
function getUserInvoices() {
    const userTrn = JSON.parse(localStorage.getItem("RegisterData"))?.trn;
    if (!userTrn) {
        alert("No user found. Please log in.");
        return;
    }
    const userInvoices = JSON.parse(localStorage.getItem(userTrn)) || [];
    console.log("User invoices:", userInvoices);
}
