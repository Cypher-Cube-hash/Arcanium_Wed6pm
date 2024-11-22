const list_products = JSON.parse(localStorage.getItem("AllProducts"));
let product_list_container = document.querySelector(".prodlist_right");

product_list_container.innerHTML = "";
list_products.forEach(element => {
  product_list_container.innerHTML += `
            <div class="products-container-card mb-3" style='height: 360px; width: 270px;'>
            <div class="products-container-image" style="background-position: center; background-repeat: no-repeat; background-size: cover; background-image: url('${element._image}');">
            </div>
            <div class="products-container-title">
                <div class='d-flex justify-content-between align-items-center p-1 text-light'><h4>${element._pname}</h4> <h4>$${element._price}</h4></div>
                <div><h5 class='text-light p-1 d-flex justify-content-between align-items-center'>${element._type}</h5> <button></button></div>
            </div>
            <div class='card_fund_tag d-flex justify-content-around align-items-center p-2' 
    onclick="addCart('${element._pname.replace(/'/g, "\\'")}', ${element._price}, '${element._description.replace(/'/g, "\\\'")}'); window.location.href = 'cart.html';">

              <p class="text-light" style="margin-top: 16px;">Add to Cart</p>
              <i class="fa-solid fa-cart-arrow-down text-light" style="font-size: 19px;"></i>
            </div>
          </div>
        `;
});


function addCart(name, price, description) {
  let user = JSON.parse(localStorage.getItem("current_user"));
  let usersList = JSON.parse(localStorage.getItem("RegistrationData"));
  let taxes = price * 0.1;
  let discount = 0.03 * price;
  let total = price + taxes - discount;

  usersList.forEach((person) => {
      if (person._trn == user) {
          if (!Array.isArray(person.cart)) {
              person.cart = [];
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
}
