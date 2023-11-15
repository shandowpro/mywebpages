// Switch Case Application :

function MySeason() {
    var season = prompt("Enter your favourite Season :");
    switch (season) {
        case "Summer":
            alert("Summer is So hot Season ");
            break;
        case "Winter": 
            alert("Winter is so cold Season");
            break;
        case "Autumn":
            alert("Autumn is So Good Season ");
            break;
        case "Spring": 
            alert("Spring is so Amazing Season");
            break;
        default:
            alert("You Did Not Enter any Season!");
            break;            
    }
}