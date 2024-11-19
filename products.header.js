/* 
*This is like a middle ware or a concept rather, because if user
*doesn't sign in then even if they use the general URL they wont be able to access 
*the product page. Thats an awesome feature i saw. and wanted to try 
*/

let access = JSON.parse(localStorage.getItem("current_user"));
if(!access){
    window.location.href = "login.page.html";
}

document.querySelector(".logoutbtn").addEventListener("click", function(){
    localStorage.removeItem("current_user");
    window.location.href = "home.html";
});