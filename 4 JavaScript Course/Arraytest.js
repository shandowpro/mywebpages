/* global alert, document, prompt */

// Array + Looping Test Input & Output Applciation :

function pro1() {

    alert("Welcome to [Array Input & Output (3)Elements Application] ");
    
    var pass = prompt("Press Enter to start the application \n Or press any other key to End the                                    application");
    if (pass == "") {        
        var count = prompt("Enter your Array count"),
            names[parseInt(count-1)];
            
        
        for (var i = 0; i < count; i++) {
            names[i] = prompt("Enter Array element number " + (i + 1)) ;
        }
                            
        alert("Your Array as following :");

        document.getElementById("Display").innerHTML = "Your Array as following :" + "<br>" + names;
    } else {
        alert("Good bye!");            
    }
}    
