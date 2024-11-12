import { listProducts } from "../product.jewelry.js"

const products = listProducts();
// Step 1: Select 12 random products
function getRandomProducts(products, count) {
    const selectedProducts = [];
    const usedIndices = new Set();

    while (selectedProducts.length < count) {
        const randomIndex = Math.floor(Math.random() * products.length);
        if (!usedIndices.has(randomIndex)) {
            usedIndices.add(randomIndex);
            selectedProducts.push(products[randomIndex]);
        }
    }

    return selectedProducts;
}

let starz = document.querySelector(".products-container");

let od = getRandomProducts(products, 8);
starz.innerHTML = " ";
od.forEach(function(odi){
    starz.innerHTML += `
            <div class="products-container-card" style='border: 1px solid #767676cf;'>
            <div class="products-container-image" style="background-position: center; background-repeat: no-repeat; background-size: cover; background-image: url('${odi._image}');">
            </div>
            <div class="products-container-title">
                <div class='d-flex justify-content-between align-items-center p-1 text-light'><h4>${odi._pname}</h4> <h4>$${odi._price}</h4></div>
                <div><h5 class='text-light p-1 d-flex justify-content-between align-items-center'>${odi._type}</h5> <button></button></div>
            </div>
          </div>
        `;
});