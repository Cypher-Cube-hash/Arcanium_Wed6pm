/* This is the way you load the specific header, you can just add the specific
container and add the inner html of the component to that container to make it work */
document.addEventListener("DOMContentLoaded", ()=>{
    fetch("components/header.html").then(response => response.text()).then(data => {
        document.querySelector("#header_container").innerHTML = data;
        
        let current_page = window.location.pathname;
        theme();
    });
})

/* Below we would place functions to add to the header based on general changes 
*
* @ example: we placed the theme within the above occurrence so that 
*if initiated it will run. It must be done this way
*
*/
function theme(){
    let cnt = 0;
        /* I did the theme in a weird but unique way by using odd or 
        even numbers to determine the mode */
        const sunElement = document.getElementById("sun");
        const moonElement = document.getElementById("moon");
        const Footer = document.querySelector(".footer");

        const theme_container = document.querySelector(".theme");
        moonElement.style.visibility = "hidden";

        if (theme_container) {
            theme_container.addEventListener("click", function() {
                cnt++;
                const body = document.getElementsByTagName("body")[0]; 
                if (cnt % 2 === 0) {
                    body.classList.remove("light");
                    Footer.classList.remove("light")
                    body.classList.add("dark");
                    Footer.classList.add("dark")

                    
                    sunElement.style.visibility = "hidden";
                    moonElement.style.visibility = "visible"; 
                } else {
                    body.classList.remove("dark");
                    Footer.classList.remove("dark")
                    body.classList.add("light");
                    Footer.classList.add("light")
                    sunElement.style.visibility = "visible";
                    moonElement.style.visibility = "hidden";
                }
            });
        } else {
            console.error("Element with ID 'sun' not found. Make sure it exists in the DOM.");
        }
}
