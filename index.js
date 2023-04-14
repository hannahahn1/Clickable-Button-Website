// Initialize clicks variable
let clicks = 0;

function checkClicks() {
// Check if localstorage variable exists and initialize to 0 if not. 
if (localStorage.getItem("clicks")== undefined) {
    // Initialize to 0
    localStorage.setItem("clicks", "0");
    clicks = 0;
}

else {
    // Save count from storage
    clicks = parseInt(localStorage.getItem("clicks"));
}
document.getElementById("clicks").innerHTML = clicks;

}

function incClick() {
    // Increment count
    clicks += 1;

    // Set value in local storage
    localStorage.setItem("clicks", clicks);

    document.getElementById("clicks").innerHTML = clicks;
}

checkClicks();
document.getElementById("button").onclick = incClick;
