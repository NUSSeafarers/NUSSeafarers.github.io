const menuButton = document.getElementById("menuButton");
const dropdownMenu = document.getElementById("dropdownMenu");

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("active");
  dropdownMenu.classList.toggle("active");
});
