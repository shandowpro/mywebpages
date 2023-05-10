/* global console, alert */
//  And Application:
var welcome = "Welcome To And Application Logical Operators... ",
    pass = prompt("Perss any key to start the application");

if ( pass != "") {
    alert(welcome);
    var name = prompt("Enter you Authorized Name >>"),
        Age = prompt("Enter you Authorized Age >>"),
        Address = prompt("Enter you Authorized Address >>");
        
    if (name == "Shadi" && Age == 33 && Address == "Cairo"){
        alert("All your information is Fulfilled Correctly...");
        document.getElementById("AndApplication").innerHTML = "You Data as Following: " + "<br>" +
            "Your Name : " + name + "<br>" +
            "Your Age : " + Age + "<br>" +
            "Your Address : " + Address;
    } else {       
        alert("One of personal Information Field is Empty!");               
        document.getElementById("AndApplication").innerHTML = "One of porsonal Information is Empty!";
    }                                
} else {
    alert("Good Bye!");
}
