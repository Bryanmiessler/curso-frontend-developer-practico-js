const navBarMail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

navBarMail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}
