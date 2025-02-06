function toggleMenu() {
    const menuButton = document.querySelector(".hamburger-menu"); 
    var dropdown = document.getElementById("dropdownMenu");
    dropdown.classList.toggle("show-dropdown");
    menuButton.classList.toggle("active");

    menuButton.addEventListener("click", () => {
        
        dropdownMenu.classList.toggle("active");
    });
}

function toggleDropdown() {
    const dropdown = document.querySelector(".navbar-dropdown");
    dropdown.classList.toggle("active");
}