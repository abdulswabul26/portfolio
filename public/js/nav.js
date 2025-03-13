hamBurger = document.getElementById("hamBurger");
navMenu = document.getElementById("navMenu");

hamBurger.addEventListener("click", () => {
    navMenu.classList.toggle("hidden");
});