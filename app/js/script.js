// == Seleccionar y definir variables y constantes
const navbarToggle = header.querySelector(".navbar__burger");
const burger = header.querySelector(".icon-bar");
const navbarMenu = document.querySelector("#navbar-menu");
const navbarLinksContainer = navbarMenu.querySelector(".navbar__links");
let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";
const backTop = document.querySelector('.back-to-top');

// == Navbar responsive behavior
const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded;
  navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
};

navbarToggle.addEventListener("click", toggleNavbarVisibility);

navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
navbarMenu.addEventListener("click", toggleNavbarVisibility);

// == Back to Top Button and behavior
window.addEventListener('scroll', checkHeight)

function checkHeight() {
  if (window.scrollY > 200) { backTop.style.display = "flex" }
  else { backTop.style.display = "none" }
}

backTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})

// For aos animation
AOS.init();
