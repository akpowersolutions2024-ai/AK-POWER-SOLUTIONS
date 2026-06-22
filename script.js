console.log("AK Power Solutions Website Loaded");

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Show button when scrolling
window.onscroll = function () {
    let btn = document.getElementById("topBtn");

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

// Scroll to top
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".slides img");

    slides.forEach(slide => {
        slide.style.display = "none";
    });

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 3000);
}
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}
// Scroll Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".hidden").forEach((el) => {
    observer.observe(el);
});
function toggleTheme(){
    document.body.classList.toggle("dark-mode");
}