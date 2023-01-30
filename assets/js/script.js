const navOpen = document.getElementById("nav__open");
const navClose = document.getElementById("nav__close");

navOpen.addEventListener("click", () => {
    document.getElementById("nav").style.width = ("100%");
})

navClose.addEventListener("click", () => {
    document.getElementById("nav").style.width = ("0%");
})