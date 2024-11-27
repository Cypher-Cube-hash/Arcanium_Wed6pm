const list_products = JSON.parse(localStorage.getItem("AllProducts"));
let product_list_container = document.querySelector(".prodlist_right");

product_list_container.innerHTML = "";
list_products.forEach(element => {
  product_list_container.innerHTML += `
            <div class="products-container-card mb-3" style='height: 360px; width: 270px;'>
            <div class="products-container-image" style="background-position: center; background-repeat: no-repeat; background-size: cover; background-image: url('${element._image}');">
            </div>
            <div class="products-container-title">
                <div class='d-flex justify-content-between align-items-center p-1 text-light'>
                    <h4>${element._pname}</h4> 
                    <h4>$${element._price}</h4>
                </div>
                <div>
                  <h5 class='text-light p-1 d-flex justify-content-between align-items-center'>${element._type}</h5> 
            </div>
            <div class='card_fund_tag d-flex justify-content-around align-items-center p-2' 
                onclick="handleAddCart('${element._pname.replace(/'/g, '\\\'')}', ${element._price}, '${element._description.replace(/'/g, '\\\'')}')">

              <p class="text-light" style="margin-top: 16px;">Add to Cart</p>
              <i class="fa-solid fa-cart-arrow-down text-light" style="font-size: 19px;"></i>
            </div>
          </div>
        `;
});

function handleAddCart(name, price, description) {
  const added = addCart(name, price, description);
  if (added) {
    window.location.href = 'cart.html';
  } else {
    alert("Failed to add product to cart. Please try again.");
  }
}

function addCart(name, price, description) {
  const user = JSON.parse(localStorage.getItem("current_user"));
  const usersList = JSON.parse(localStorage.getItem("RegistrationData"));

  if (!user || !Array.isArray(usersList)) {
    console.error("User or RegistrationData not found in localStorage.");
    return false; // Indicate failure
  }
  
  const taxes = price * 0.1;
  const discount = 0.03 * price;
  const total = price + taxes - discount;

  let userFound = false;

  usersList.forEach((person) => {
      if (person._trn == user) {
        userFound = true;
        
          if (!Array.isArray(person.cart)) {
              person.cart = []; // Initialize cart if it doesn't exist 
          }

          person.cart.push({
              name: name,
              subtotal: price,
              description: description,
              total: total,
          });

          localStorage.setItem("RegistrationData", JSON.stringify(usersList));
          console.log("Product added to cart!");
      }
  });

  if (!userFound) {
    console.error("Current user not found in RegistrationData.");
    return false; // Indicate failure 
  }

  return true; // Indicate success
} 
