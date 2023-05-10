/* global prompt, alert */

function processMultPars() {
    var pass = prompt("Press any key to start the [Function With Multiple Parameters] Application...");
    
    if (pass != "") {
        
        function multPars(par1, par2, par3) {        
            return "Welcome " + par1 + " " + par2 + " " + par3 + " to Javascript Lesson 17 [Function Parameters]";                 
        }                
        var firstName =  prompt("Insert your First Name :"),
            middleName =  prompt("Insert your middle Name :"),
            lastName =  prompt("Insert your last Name :");            
        
        document.getElementById("FunctionWithMultParameter").innerHTML =
            multPars(firstName, middleName, lastName);
        
        alert(multPars(firstName, middleName, lastName));        
    } else {
        alert("Good Bye");        
    } 
}

