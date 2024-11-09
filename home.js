/* ---------------AUTOMATIC SLIDER START--------------- */

let slider = document.getElementsByClassName("slider_main")[0];
let slides = document.querySelectorAll(".slider_main > div");

let index = 0;
let slider_interval = 10000;
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


/* ----------------------SMALLER SLIDER------------------- */

let another_slider = document.querySelector('.another_slider_list');
let another_items = document.querySelectorAll('.another_slider_item');
let another_dots = document.querySelectorAll('.another_slider_dots li');

let lengthItems = another_items.length - 1;
let active = 0;

// Function to move the slider
function reloadSlider() {
    another_slider.style.left = -another_items[active].offsetLeft + 'px';

    // Update active dot
    let last_active_dot = document.querySelector('.another_slider_dots li.active');
    if (last_active_dot) {
        last_active_dot.classList.remove('active');
    }
    another_dots[active].classList.add('active');
}

// Automatically move the slider every 3 seconds
let refreshInterval = setInterval(() => {
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}, 6000);

// Add event listeners for the dots
another_dots.forEach((li, index) => {
    li.addEventListener('click', () => {
        active = index;
        reloadSlider();
    });
});

// Adjust the slider position on window resize
window.onresize = () => {
    reloadSlider();
};

// Initial load
reloadSlider();