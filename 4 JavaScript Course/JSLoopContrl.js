/* global alert, document, prompt */
/* jslint plusplus: true evil: true */
/* [Control Tools Loop Statement (break, continue, label)] */



function mthd1() {
    alert("Welcome to [Continue + Break + Label] - Basic Control Tools ...");   

    var Snum = parseInt(prompt("Enter your number :")),
        Enum = parseInt(prompt("Enter your End number : ")),                
        passNum,
        z,
        i = 0,
        arr = new Array();                


    do {                                

        FLoop:
        for (Snum; Snum <= Enum; Snum ++, i++) {                                                                                       
            passNum = prompt("Press (1) to Break the Loop [Stop All the loop] \n Press (2) to ignore the next number\n Press any other key to continue...");

            if (passNum == "1") {

                alert("All Loop has been Stoped!");
                arr[i] = "All loop has been Stoped at " + Snum + "! \n ===================================\n" ;
                break FLoop;    

            } else if (passNum == "2") {

                alert("Number ( " + Snum + " ) has passed Successfully!");
                arr[i] = "Number ( " + Snum + " ) has passed Successfully! \n ==============================\n" ;
                continue FLoop;                                                            

            } else {
               alert("lets Continue..");                                        

                arr[i] = "Arithmetic Operation of [ " + Snum + " ] as Following : \n" +
                    "Summition OP Result : [ " + (Snum + Snum) + " ] \n" +
                    "Substraction OP Result : [ " + (Snum - Snum) + " ] \n" +
                    "Multiply OP Result : [ " + (Snum * Snum) + " ] \n" +
                    "Division OP Result : [ " + (Snum / Snum) + " ] \n" +                                                
                    "\n ================================= \n";

                alert("Calculation of Number (" + Snum + ") Done Successfuly !");

           }                                                                                       

        }

        z = prompt("Do you wish To process another Task? \n press any key to restart, or (0) to Exit... ");


    } while (z !== "0");

    document.getElementById("txtarea").innerHTML = arr;

}