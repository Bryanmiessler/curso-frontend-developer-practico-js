const navBarMail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const imgMenu = document.querySelector(".menu");

navBarMail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}

imgMenu.addEventListener("click", toggleBurgerMenu);

function toggleBurgerMenu() {
  mobileMenu.classList.toggle("inactive");
}
