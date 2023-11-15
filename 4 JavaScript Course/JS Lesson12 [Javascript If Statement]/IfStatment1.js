
/*global console, alert */
// Recieving Age from User in A myAGe variable:
var myAge = prompt("What is your Age?");


// If Functions (informing User about his age and premision result upon his age):
if ( myAge < 0 || myAge === "" ) {
    alert("Error Entry ! ");
    console.log("Error Entry ! ");    
    document.getElementById("testIfElse").innerHTML = "This Entry: " + myAge + " is Error, please enter you Age Correctly !";   
    document.getElementById("testIfElse1").innerHTML = "This Entry: " + myAge + " is Error, please enter you Age Correctly !";   
} else if ( myAge < 18 ) {
    alert("You are underage ! ");
    console.log("You are underage ! ");
    document.getElementById("testIfElse").innerHTML = "Sorry your Age: " + myAge + " is So You are underAge and not allowed to Enter";
    document.getElementById("testIfElse1").innerHTML = "Sorry your Age: " + myAge + " is So You are underAge and not allowed to Enter";
} else if ( myAge > 100 ) {
    alert("You are overAge ! ");
    console.log("You are overAge ! ");    
    document.getElementById("testIfElse").innerHTML = "Your Age: " + myAge + " is So You are overAge and not allowed to Enter"; 
    document.getElementById("testIfElse1").innerHTML = "Your Age: " + myAge + " is So You are overAge and not allowed to Enter"; 
} else {
    alert("You are in a legal Age ! ");
    console.log("You are in a legal Age ! ");    
    document.getElementById("testIfElse").innerHTML = "Your Age: " + myAge + " is So You are allowed to Enter";    
    document.getElementById("testIfElse1").innerHTML = "Your Age: " + myAge + " is So You are allowed to Enter";    
}