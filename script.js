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


function addToHistory(name, number) {
    const historyContainer = document.getElementById('history-container');
    const currentTime = new Date().toLocaleTimeString();

    // Create the history card HTML
    const historyItem = document.createElement('div');
    historyItem.className = "bg-gray-100 p-3 rounded-lg mt-5 flex justify-between items-center";
    
    historyItem.innerHTML = `
        <div>
            <p class="font-bold text-sm">${name}</p>
            <p class="text-xs text-gray-500">${number}</p>
        </div>
        <p class="text-xs text-gray-400">${currentTime}</p>
    `;

    // Add it to the top of the history list
    historyContainer.prepend(historyItem);
}





// Clicking this button will remove all data from call history
function clearHistory(){
    // Find the container that holds all the history cards
    const historyContainer = document.getElementById('history-container')
    // empty string
    historyContainer.innerHTML = '';
}





// use clipboard for copy text and past anywhere
let copies = 0;

function handleCopy(serviceNumber) {
    // Copy the number
    navigator.clipboard.writeText(serviceNumber).then(() => {
        copies++;
        document.getElementById('copy-count').innerText = copies;

        // Show alert 
        alert(`Number ${serviceNumber} copied!`);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}