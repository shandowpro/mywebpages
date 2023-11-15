/* global console */
// Conditinoal Operators ( Negative or positive Number ):
// Vars Declaration :
var welcome = "Welcome to Negative or positive Number Application ... ";
    


// Functions:
alert(welcome);
var usernum = prompt("Please enter your number...");

if ( usernum < 0 ) {
    alert("Your Number is Negative !");
    document.getElementById("NegPosApp").innerHTML = "Your Number is Negative !";
} else if ( usernum > 0 ) {
    alert("Your Number is Positive !");    
    document.getElementById("NegPosApp").innerHTML = "Your Number is Positive !";
} else {
    alert(" Error Entry !");        
    document.getElementById("NegPosApp").innerHTML = " Error Entry !";
}
        