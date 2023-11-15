// global alert :

// Internal Calling Functions with Vars
function sayHi() {
    //"use strict";
    alert("Welcome to Javascript!");
    
    var myName = prompt("Please enter your Name:");

    alert("Hello " + myName + " , Welcome to JS Lesson!");    
    
    document.getElementById("InternalCallVar").innerHTML = "Welcome to JS Lesson 15, " + myName;
}

sayHi();


