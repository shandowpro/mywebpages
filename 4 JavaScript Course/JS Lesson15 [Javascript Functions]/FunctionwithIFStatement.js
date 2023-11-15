function test () {


}
// ==============================================================================================


function test1() {

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
    
}
// ==============================================================================================

function test2() {

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

}
// ==============================================================================================
// ==============================================================================================

function display() {
    document.getElementById('SourceCode').textContent = test;
    document.getElementById('SourceCode1').textContent = test1;
    document.getElementById('SourceCode2').textContent = test2;

}
