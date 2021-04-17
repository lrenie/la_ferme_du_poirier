navbar = document.querySelector(".navbar-index");

window.addEventListener("scroll", (envet) => {
  const scroll_position = window.scrollY;
  if (scroll_position >= 360) {
    navbar.classList.add("navbar-index-active");
  } else {
    navbar.classList.remove("navbar-index-active");
  }
});
