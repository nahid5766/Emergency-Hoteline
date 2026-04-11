// Menu button (Function)
let menu_button = document.getElementById("menu_button");
let menu_area = document.getElementById("menu_area");

menu_button.addEventListener("click", function() {
     menu_area.classList.toggle("hidden");
})
