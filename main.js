const navBarMail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const imgMenu = document.querySelector(".menu");
const iconCart = document.querySelector(".navbar-shopping-cart");
const asideCart = document.querySelector(".product-detail");

navBarMail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
  asideCart.classList.add("inactive");
  desktopMenu.classList.toggle("inactive");
}

imgMenu.addEventListener("click", toggleBurgerMenu);

function toggleBurgerMenu() {
  asideCart.classList.add("inactive");
  mobileMenu.classList.toggle("inactive");
}

iconCart.addEventListener("click", toggleAsideCart);

function toggleAsideCart() {
  desktopMenu.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  asideCart.classList.toggle("inactive");
}
