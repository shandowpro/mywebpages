/* global alert, document, prompt */

// Array Input & Output Applciation :

function pro() {

    alert("Welcome to [Array Input & Output (3)Elements Application] ");
    
    var pass = prompt("Press Enter to start the application \n Or press any other key to End the application ...");
    
    if (pass == "") {        
        var name1 = prompt("Enter Name 1: "),
            name2 = prompt("Enter Name 2: "),
            name3 = prompt("Enter Name 3: ");            
            
        var names = [
                name1,
                name2,
                name3
            ];

        alert("Your Array as following :");
        if (Array.isArray(names)) {
            document.getElementById("Display").innerHTML = "Your Array as following :" + "<br>" + names + "                                                   <br>" + "This Variable is an Array";       
        } else {
            document.getElementById("Display").innerHTML = "Variable is not Array !";       
        }
        
    } else {
        alert("Good bye!");            
    }
}    


