// Selecting all the "Join Now" buttons
const joinButtons = document.querySelectorAll('.workshop button');

// Adding event listeners to each button
joinButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Thank you for joining!');
    });
});
function searchWorkshops() {
    const input = document.getElementById("search-input").value.toLowerCase();
    const workshops = document.querySelectorAll(".workshop");

    // Loop through all workshops
    let found = false;
    workshops.forEach(workshop => {
        const title = workshop.querySelector("h2").textContent.toLowerCase();
        const description = workshop.querySelector("p").textContent.toLowerCase();

        if (title.includes(input) || description.includes(input)) {
            workshop.style.display = "block"; // Show matching workshop
            found = true;
        } else {
            workshop.style.display = "none"; // Hide non-matching workshops
        }
    });

    if (!found) {
        alert("No workshops found. Try another search term!");
    }

    return false;  // Prevent form submission
}
