/* global console */
// Conditinoal Operators ( Confirming Questions Application : ):
// Vars Declaration :
var welcome = "Welcome to [Confirming Questions Application ]... ";
    
// Functions:
alert(welcome);

var pass = prompt("Press 1 To Start the application or any Other key To abort...");

if ( pass !== "" ){
        
    alert("Welcome to Qustions Application ...");
    
    var userName = prompt("What is your name ?"),
        userAge = prompt("How old are you ?"),
        userCountry = prompt("Where are you from ?"),
        userJob = prompt("What is your Job ?");
    
    document.getElementById("testAssign").innerHTML =
        "your Name is : " + userName + "<br>" +
        ", Your Age is: " + userAge + "<br>" +
        ", Your Country is: " + userCountry + "<br>" +
        ", Your Job is: " + userJob; 
    
 } else {
    alert("Bye !");
}