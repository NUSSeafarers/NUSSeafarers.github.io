const menuButton = document.getElementById("menuButton");
const dropdownMenu = document.getElementById("dropdownMenu");

menuButton.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent it from triggering the outside click
  menuButton.classList.toggle("active");
  dropdownMenu.classList.toggle("active");
});

// Close the menu when clicking outside
document.addEventListener("click", (e) => {
  if (!menuButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
    menuButton.classList.remove("active");
    dropdownMenu.classList.remove("active");
  }
});
