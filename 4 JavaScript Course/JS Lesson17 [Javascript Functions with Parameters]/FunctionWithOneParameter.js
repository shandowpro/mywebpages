/* global prompt, alert */

function processOnePar() {
    var pass = prompt("Press any key to start the [Function With One Parameter] Appliction...");
    if (pass != "") {
        function onePar(par) {        
            return "Welcome " + par + " to Javascript Lesson 17 [Function Parameters]";                 
        }                
        var name =  prompt("Insert your name :");
        
        document.getElementById("FunctionWithOneParameter").innerHTML =
            onePar(name);
        
        alert(onePar(name));
        
    } else {
        alert("Good Bye");        
    } 
}

