// Navbar
const burger = document.querySelector("#hamburger");
const mobileNavbar = document.querySelector(".navbar__list");
const mediaX = window.matchMedia("(max-width: 640px)")

burger.addEventListener("click", (e) => {
  if (mobileNavbar.style.display == "flex") {
    mobileNavbar.style.display = 'none';
  } else {
    mobileNavbar.style.display = 'flex';
  }
});
burger.addEventListener('focusout', (e) => {
  if (mobileNavbar.style.display == "flex") {
    mobileNavbar.style.display = 'none';
  } else {
    mobileNavbar.style.display = 'flex';
  }
});

function checkMediaQuery() {
  // If the inner width of the window is greater then 768px
  if (window.innerWidth > 856) {
    mobileNavbar.style.display = 'flex';
  } else {
    mobileNavbar.style.display = 'none';
  }
}
// Add a listener for when the window resizes
window.addEventListener('resize', checkMediaQuery);

