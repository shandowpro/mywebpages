/* global console, alert */
//  And Application:
var welcome = "Welcome To OR Application Logical Operators... ",
    pass = prompt("Perss any key to start the application");

if ( pass != "") {
    alert(welcome);
    var name = prompt("Enter you name >>"),
        Age = prompt("Enter you Age >>"),
        Address = prompt("Enter you Address >>");
        
    if (name == "" || Age == "" || Address == ""){
        alert("One of personal Information Field is Empty!");               
        document.getElementById("ORApplication").innerHTML = "One of porsonal Information is Empty!";
    } else {       
        alert("All your information is Fulfilled Correctly...");
        document.getElementById("ORApplication").innerHTML = "You Data as Following: " + "<br>" +
            "Your Name : " + name + "<br>" +
            "Your Age : " + Age + "<br>" +
            "Your Address : " + Address;
    }                                
} else {
    alert("Good Bye!");
}
