/* ---------------AUTOMATIC SLIDER START--------------- */

let slider = document.getElementsByClassName("slider_main")[0];
let slides = document.querySelectorAll(".slider_main > div");

let index = 0;
let slider_interval = 8000;
let auto_sliding;

function startAutoSlide(){
    auto_sliding = setInterval(next_slide, slider_interval);
}

function next_slide(){
    index = (index + 1) % slides.length;
    slider.scrollTo({
        left: slider.clientWidth * index,
        behaviour: 'smooth'
    });
}

function prev_slide(){
    index = (index -1 + slides.length) % slides.length;
    slider.scrollTo({
        left: slider.clientWidth * index,
        behaviour: "smooth"
    });
}



document.getElementById("next").addEventListener("click", function(){
    clearInterval(auto_sliding);
    next_slide();
    setTimeout(startAutoSlide, 120000);
});

document.getElementById("previouse").addEventListener("click", function(){
    clearInterval(auto_sliding);
    prev_slide();
    setTimeout(startAutoSlide, 120000);
});

startAutoSlide();
/* ---------------AUTOMATIC SLIDER END--------------- */







/* Dark Mode */
/* let cnt = 0;
document.querySelector(".sun").addEventListener("click", function() {
    cnt++;
    if (cnt % 2 === 0) {
        document.getElementsByTagName("body")[0].classList.remove("light");
        document.getElementsByTagName("body")[0].classList.add("dark");
    } else {
        document.getElementsByTagName("body")[0].classList.remove("dark");
        document.getElementsByTagName("body")[0].classList.add("light");
    }

    console.log(cnt);
}); */

