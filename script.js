const header = document.querySelector("header");
const menuBtn = document.querySelector("#menuBtn");
const closeMenu = document.querySelector("#closeBtn");

menuBtn.addEventListener("click", () =>
  header.classList.toggle("show-mobile-menu")
);

closeMenu.addEventListener("click", () => {
  menuBtn.click();
});
