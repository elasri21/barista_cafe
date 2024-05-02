const menu = document.querySelector(".menu");
const closebtn = document.querySelector(".close-btn");
const navLinks = document.querySelector("nav ul");
menu.addEventListener("click", function() {
    navLinks.classList.add("show");
    this.style.display = "none";
    closebtn.style.display = "flex";
});
closebtn.addEventListener("click", function() {
    navLinks.classList.remove("show");
    this.style.display = "none";
    menu.style.display = "flex";
});

const upArrow = document.querySelector(".up");
window.addEventListener("scroll", function() {
    if (this.scrollY < 300) {
        upArrow.style.display = "none";
    } else {
        upArrow.style.display = "flex";
    }
});