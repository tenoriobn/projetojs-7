const navOpen = document.getElementById("nav__open");
const navClose = document.getElementById("nav__close");
const nav = document.getElementById("nav")

navOpen.addEventListener("click", () => {
    nav.style.width = ("100%");
    nav.style.transition = ("all .5s");

})

navClose.addEventListener("click", () => {
    nav.style.width = ("0%");
})