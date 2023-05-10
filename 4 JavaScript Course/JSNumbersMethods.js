/* global alert, document, prompt */
/* jslint plusplus: true evil: true */
/* [ [Numbers - Methods] {Part 2}] Application */

function test1() {
    
    var meth = prompt ("Choose your Number method \n Press 1 for [#.toString();] to convert Numbers to string \n Press 2 for [#.toExponentail();] to covert Number to it's Powert Form \n Press 3 for [#.toFixed();] For Currencies Form \n Press 4 for [parseInt(#Texual Number)] to convert String Value to Numbers \n press any other key to exit..");
    
    if (meth == "1") {
        alert("Welcome to method 1  [#.toString();] to convert Numbers to string ");
        
        var uNum1 = parseInt(prompt("Enter Number to convert to String by (Texual Value)  ...")),
            txtNum = uNum1.toString();
                                
        document.getElementById("txtarea").innerHTML = "Your Main Number (Numeric Form) is " + uNum1 +
            "\nYour Number by (Texual form) is " + txtNum;
                        
            
    } else if (meth == "2") { 
       alert("Welcome to method 2  [#.toExponentail();] to covert Number to it's Powert Form ");
        
        var uNum2 = parseInt(prompt("Enter your main Number ...")),
            PNum = uNum2.toExponential();
                                
        document.getElementById("txtarea").innerHTML = "Your Main number (Numeric Form) is  = " + uNum2 +
            "\nYour Powered number (Power Form) is  = " + PNum;                             
                        
    
    } else if (meth == "3") { 
       alert("Welcome to method 3 [#.toFixed();] For Currencies Form  ");
                
        var uNumCurr = parseInt(prompt("Enter ysour main Number ...")),
            roundNum = parseInt(prompt("Enter the Number of Rounding ...")),
            fixedNum = uNumCurr.toFixed(roundNum);
                                
        document.getElementById("txtarea").innerHTML = "Your Main Currency Number is  = " + uNumCurr +
            "\nYour Rounding Number is  = " + roundNum +
            "\nYour Final Fixed Currency Number Form is  = " + fixedNum;                             
    
    } else if (meth == "4") { 
       alert("Welcome to method 4 [parseInt(#Texual Number + Text)] to convert String Value to Numbers ... ");
        
        var utxtNum = prompt("Enter your texual Number ..."),
            ParsNum = parseInt(utxtNum);                       
                                
        document.getElementById("txtarea").innerHTML = "Your main Number Texual Form is  = " + utxtNum +
            "\nYour parsed Number is  = " + ParsNum;                             
                                                
   } else {
       alert("Error Entry!");
   }
                
}