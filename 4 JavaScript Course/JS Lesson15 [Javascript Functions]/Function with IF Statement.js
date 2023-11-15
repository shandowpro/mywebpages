/* global alert */
// Function with If Condition App.

function userForm() {
        
    var pass = prompt("Welcome to Function + If Condition App.." + "<br>" + "Press any key to start the app>>>");
    
    if (pass != "") {
        var name = prompt("Please insert your name :"),
            age = prompt("Please insert your Age :");
        
        if ( name != "" || age != "" ) {
            alert("Hello " + name + "Welcome to Fucntion + If Statement App!");
            document.getElementById("FunctionIF").innerHTML = name + " , You Are Welcome to Lesson 15 of JS";            
        } else {
            alert("One or more of you data input fields is missing !");                          
        }
    } else { 
        alert("Good Bye!");                          
    }
}
