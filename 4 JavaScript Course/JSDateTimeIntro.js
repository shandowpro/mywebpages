/* global alert, document, prompt */
/* jslint plusplus: true evil: true */
/* [Regular Expression Functional Processing part3- Quantifires] Application */


function mthd() {
    "use strict";
    alert("Welcome to Date & Time - Intro Part 1 - Main Date & Time's Built-In Function and Methods");
    
    do {
                           
        var meth = prompt("Please Choose your Date & Time Built-In Method to Process to Apply ...\n Press (1) Full Format of Current Date & Time\n Press (2) Full Format of Date & Time After Adding Milliseconds to [Default Unix Standards UTC \n Press (3) Full Format of Current Date & Time by Certain String Customized Date Format \n Press (4) Full Format of Current Date & Time by Certain (Numbers) Integer Customized Date Format\n Press any other key to exit ...");

        if (meth !== "1" && meth !== "2" && meth !== "3" && meth !== "4") {
             alert("Good Bye!");                
        } else {                
                                                
            if (meth == "1") {                
                
                alert("Welcome to Date & Time Format Built-In Method number (1) [Full Format of Current Date & Time]");
                                                
                var myDate = new Date();
                                      
                alert("Your Date Format by [Full Format of Current Date & Time]\n" + myDate);
                
                document.getElementById("txtarea").innerHTML = "Your Date Format by [Full Format of Current Date & Time]\n" +
                    myDate;                   
                
            } else if (meth == "2") {
                
                alert("Welcome to Date & Time Format Built-In Method number (2) [Full Format of Date & Time After Adding Milliseconds to Default Unix Time Standard] ");                
                
                var milS = parseInt(prompt("Enter your MilliSecond Number to Add to Default Time of Unix"));                                
                var myDate = new Date(milS);
                                      
                alert("Your Date Format by [Full Format of Date & Time After Adding Milliseconds to Default Unix Time Standard]\n" + myDate);
                
                document.getElementById("txtarea").innerHTML = "Your Date Format by [Full Format of Date & Time After Adding Milliseconds to Default Unix Time Standard]\n" + myDate;                   
                                                
            } else if (meth == "3") {
                
                alert("Welcome to Date & Time Format Built-In Method number (3) [Full Format of Current Date & Time by Certain String Customized Date Format] ");                
                
                var StrD = prompt("Enter your String Date to Apply");                                
                
                var myDate = new Date(StrD);
                                      
                alert("Your Date Format by [Full Format of Current Date & Time by Certain String Customized Date Format]\n" +
                      myDate);
                
                document.getElementById("txtarea").innerHTML = "Your Date Format by [Full Format of Current Date & Time by Certain String Customized Date Format]\n" + myDate;                   
            
            } else if (meth == "4") {                
                
                alert("Welcome to Pattern number (4) Method [Full Format of Current Date & Time by Certain (Numbers) Integer Customized Date Format]");
                
                var Year = parseInt(prompt("Enter your Year Number to Apply")),                                
                    Month = parseInt(prompt("Enter your Month Number to Apply"))-1,                                
                    Day = parseInt(prompt("Enter your Day Number to Apply")),                                
                    Hour = parseInt(prompt("Enter your Hour Number to Apply")),                                
                    Mint = parseInt(prompt("Enter your Minute Number to Apply")),                                
                    Sec = parseInt(prompt("Enter your Second Number to Apply")),                                
                    MSec = parseInt(prompt("Enter your MilliSecond Number to Apply"));                                
                
                var myDate = new Date(Year, Month, Day, Hour, Mint, Sec, MSec);
                                      
                alert("Your Date Format by [Full Format of Current Date & Time by Certain String Customized Date Format]\n" +
                      myDate);
                
                document.getElementById("txtarea").innerHTML = "Your Date Format by [Full Format of Current Date & Time by Certain String Customized Date Format]\n" + myDate;                   
                

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