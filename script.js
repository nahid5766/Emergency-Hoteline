// Menu button (Function)
let menu_button = document.getElementById("menu_button");
let menu_area = document.getElementById("menu_area");

menu_button.addEventListener("click", function() {
     menu_area.classList.toggle("hidden");
})



// Love btn counter (Function)
let count = 0;

const countDisplay = document.getElementById('favorite-count');

const heartButtons = document.querySelectorAll('.heart-btn');

heartButtons.forEach(button => {
    button.addEventListener('click', function() {
        count++;
        
        countDisplay.textContent = count;

        this.classList.toggle('active');

        console.log(`Favorites updated: ${count}`);
    });
});

