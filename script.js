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




let coins = 100; 

function showCallAlert(serviceName, serviceNumber) {
    // Show an alert with a message including the service name and number
        alert("Calling: " + serviceName + "\nNumber: " + serviceNumber);

    // Check if user has not enough coins make a alert
    if (coins < 20) {
        alert("You do not have enough coins to make this call!");
        return; // Terminate the process
    }

    // Deduct coins and update Navbar
    coins -= 20;
    document.getElementById('coin-count').innerText = coins;

    // Trigger the second function (Updating the second ID)
    addToHistory(serviceName, serviceNumber);
}