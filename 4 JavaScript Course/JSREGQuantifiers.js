/* global alert, document, prompt */
/* jslint plusplus: true evil: true */
/* [Regular Expression Functional Processing part3- Quantifires] Application */

function mthd() {
    "use strict";
    alert("Welcome to Regular Expression - Quantifires Part 3");
    
    do {
        var str = prompt("Enter your Main String");

        alert("Your String is :\n" + str);                        

        alert("The main Default Application will be (Replacement Funtion) \n Main Regex Available are as following : \n One or more once of repeatation \n Specified number of repeatation n Minimum And Maximum number of repeatation \n Specified number at least of repeatation \n");                        


        var meth = prompt("Please Choose your REG advanced pattern to Process to Apply ...\n Press (1) for [One or more once of repeatation ] Process \n Press (2) for [Specified number of repeatation] Process... \n Press (3) for [Minimum And Maximum number of repeatation] Process... \n Press (4) for [Specified number at least of repeatation ] Process \n Press any other key to exit ...");

        if (meth !== "1" && meth !== "2" && meth !== "3" && meth !== "4") {
             alert("Good Bye!");                
        } else {                
            var rep = prompt("Enter your Replcaement character to replaced the Default Pattern by it");                                    
            if (meth == "1") {                
                
                alert("Welcome to Pattern number (1) Method [One or more once of repeatation]");
                
                alert("Your default pattern to be changed is [a] Letter repeated once or more");                
                
                var res = str.replace(/a+/gi, rep);
                                      
                alert("Your Replacement Chaaracter is (" + rep + ") \n Your String after appling the Pattern with [One or more once of repeatation] Method is\n" + res);
                
                document.getElementById("txtarea").innerHTML = "Your Replacement Chaaracter is (" + rep + ") \n Your String after appling the Default Pattern with [One or more once of repeatation] Method is\n" + res;                   
                
            } else if (meth == "2") {
                
                alert("Welcome to Pattern number (2) Method [Specified number of repeatation]");
                
                alert("Your default pattern to be changed is [a] Letter repeated specified times twice (2 times in one word)");
                                                
                var res2 = str.replace(/a{2}/gi, rep);
                                      
                alert("Your Replacement Chaaracter is (" + rep + ") \n Your String after appling the Pattern with [One or more once of repeatation] Method is\n" + res2);
                
                document.getElementById("txtarea").innerHTML = "Your Replacement Chaaracter is (" + rep + ") \n Your String after appling the Default Pattern with [One or more once of repeatation] Method is\n" + res2;
                                                
            } else if (meth == "3") {
                
                alert("Welcome to Pattern number (3) Method [Minimum And Maximum number of repeatation]");
                
                alert("Your default pattern to be changed is [a] Letter repeated twice OR tible (2 OR 3 times in one word)");
                                
                var res3 = str.replace(/a{2,3}/gi, rep);
                                                                            
                alert("Your Replacement Chaaracter is (" + rep + ") \n Your String after appling the Pattern with [Minimum And Maximum number of repeatation] Method is\n" + res3);
                
                document.getElementById("txtarea").innerHTML = "Your Replacement Chaaracter is (" + rep + ") \n Your String after appling the Default Pattern with [One or more once of repeatation] Method is\n" + res3;            
            
            } else if (meth == "4") {                
                
                alert("Welcome to Pattern number (4) Method [Specified number at least of repeatation]");
                
                var res4 = str.replace(/a{2,}/gi, rep);
                                      
                alert("Your Replacement Chaaracter is (" + rep + ") \n Your String after appling the Pattern with [Specified number at least of repeatation] Method is\n" + res4);
                
                document.getElementById("txtarea").innerHTML = "Your Replacement Chaaracter is (\n" + rep + "\n Your String after appling the Default Pattern with [One or more once of repeatation] Method is\n" + res4;
                
            } else {
                alert ("Error Entry!");
            }
        }
        var z = prompt("Press 1 to restart the whole Application ,\nPress any other key to exit");

        if (z !== "1") {
            alert("Good Bye!");
        } else {
            alert("Let's Restart");
            //break mainloop;
        }

    } while (z == "1");                                    
}
    //mainloop :
    


    
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*function SimNum(userNum) {    
    var x = Math.Min - Max(userNum);
    return x;
}*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
