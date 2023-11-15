/* global alert, document, prompt */
/* jslint plusplus: true evil: true */
/* [Math - Round Function] */

function mthd1() {
    "use strict";
    
    MainLoop:
        
    do {

        var meth = prompt("Welcome to Math - round Function Application...\n please choose your Method\n Press (1) for [Simple Number] rounding App \n Press (2) [Calculation Result] App \n Press any other key to exit ...");
    
        if (meth !== "1" && meth !== "2") {
             alert("Good Bye!");                
        } else {                
                    
            switch (meth) {
                case "1" :

                    alert("Wecome to [Simple Number] Math (rounding) Function App...");

                    ChildLoop1:                    
                 
                    do {

                        var Num = parseFloat(prompt("Enter your [Decimal Number] to round: "));

                        if (Num == isNaN) { 
                            alert("Texual Value Can Not be Accepted! \n Please insert a Numeric Value");

                        } else {
                            var x = Math.round(Num);
                            
                            alert("Your Up Rounded Simple Number by [Math - round] following... " + x);
                            
                            document.getElementById("txtarea").innerHTML = "Your Up Rounded Simple Number by [Math - round] Function is : \n " + x;                                                                                    

                            var e11 = prompt("Press (1) to restart [Math - round Function] application, \n or Any other key to Exit current Section ...");

                            if (e11 !== "1") {
                                alert("Good bye!");
                                break ChildLoop1;
                            }                                                            
                        }            
                    
                    } while (e11 == "1");

                    break;
                    
                case "2" :

                    alert("Wecome to [Calculation Result Number] Math (rounding) Function App...");

                    ChildLoop2:                    

                    do {

                        var Num1 = parseFloat(prompt("Enter your [First Decimal Number] to round: ")),
                            Num2 = parseFloat(prompt("Enter your [Second Decimal Number] to round: ")),                            
                            all = "";

                        if (Num1 == isNaN || Num2 == isNaN) { 
                            alert("Texual Value Can Not be Accepted! \n Please insert a Numeric Value");

                        } else {
                            var x = Math.round(Num1),
                                y = Math.round(Num2);
                            
                            alert("Your First rounded Number is: [" + x + "]\n Your Second rounded Number is: [" + y + "]\n" +
                                 "Your First Default Number is: [" + Num1 + "]\n Your Second Default Number is: [" + Num2 + "]");                         
                            all += "Your First rounded Number is: [" + x + "]\n Your Second rounded Number is: [" + y + "]\n" +
                                "Your First Default Number is: [" + Num1 + "]\n Your Second Default Number is: [" + Num2 + "]\n" +
                                "====================================================\n" +
                                "Summition Default Result = " + (Num1 + Num2) + "\n" +
                                "Summition rounded Result = " + Math.round(Num1 + Num2) + "\n" +
                                "====================================================\n" +
                                "Substraction Default Result = " + (Num1 - Num2) + "\n" +
                                "Substraction rounded Result = " + Math.round(Num1 - Num2) + "\n" +
                                "====================================================\n" +
                                "Multiply Default Result = " + (Num1 * Num2) + "\n" +
                                "Multiply rounded Result = " + Math.round(Num1 * Num2) + "\n" +
                                "====================================================\n" +
                                "Division Default Result = " + (Num1 / Num2) + "\n" +                                
                                "Division rounded Result = " + Math.round(Num1 / Num2);
                                                                                    
                            document.getElementById("txtarea").innerHTML = all;                       
                            
                            alert("Your Caluculation has done Succesfuly!");
                            
                            var e22 = prompt("Press (1) to restart [Math - round Function] application, \n or Any other key to Exit current Section ...");

                            if (e22 !== "1") {
                                alert("Good bye!");
                                break ChildLoop2;
                            }                                                                                        
                        }            
                        
                    } while (e22 == "1");

                    break;

                default :
                    alert("Error Entry !");    
                    break;                                                                                                                         
            }                         
            
            var e0 = prompt("Do you want to Restart the Whole application [Math rounding]? \nPress (1) to restart the Whole Application, \n or Any other key to Exit...");

            if (e0 !== "1") {
                alert("Good bye!");
                break MainLoop;
            }                                                                                                
        }        
    } while(e0 == "1");   
}                

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*function SimNum(userNum) {    
    var x = Math.round(userNum);
    return x;
}*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
