/* global alert, document, prompt */
/* jslint plusplus: true evil: true */
/* [Date & Time part2- Format] Application */


function mthd() {
    "use strict";
    alert("Welcome to Date & Time - Part 2 - Main Date & Time's Formats");
    
    do {
                           
        var meth = prompt("Please Choose your Date & Time Format to Process to Display ...\n Press (1) Full Format Date & Time \n Press (2) Long Format of Date & Time \n Press (3) Short Format of Date & Time Format \n Press (4) Full Format Date & Time \n Press any other key to exit ...");

        if (meth !== "1" && meth !== "2" && meth !== "3" && meth !== "4") {
             alert("Good Bye!");                
        } else {                
                                                
            if (meth == "1") {                
                
                alert("Welcome to Date & Time Format Number (1) [Full Format]");
                                                
                var str1 = prompt("Enter your date by full Format [Month in Full Spelling ,  Day , Year Hour, Minute, Second TZD] "),
                    myDate = new Date(str1);
                                      
                alert("Your Date Format by [Full Format of Current Date & Time]\n" + myDate);
                
                document.getElementById("txtarea").innerHTML = "Your Date Format by [Full Format of Date and Time] is as following \n" +
                    myDate;                   
                
            } else if (meth == "2") {
                
                alert("Welcome to Date & Time Format Number (2) [Long Format]");
                                                                
                var str2 = prompt("Enter your date by Long Format [Month in Shorten Spelling, Day , Year Hour, Minute, Second TZD] "),
                    myDate = new Date(str2);
                                      
                alert("Your Date Format by [Long Format of Current Date & Time]\n" + myDate);
                
                document.getElementById("txtarea").innerHTML = "Your Date Format by [Long Format of Date and Time] is as following \n" +
                    myDate;                   
                                                
            } else if (meth == "3") {
                
                alert("Welcome to Date & Time Format Number (3) [Short Format]");
                
                var str3 = prompt("Enter your date by Short Format [Year/Month/Day Hour:Minute:Second TZD] "),
                    myDate = new Date(str3);
                                      
                alert("Your Date Format by [Short Format of Current Date & Time]\n" + myDate);
                
                document.getElementById("txtarea").innerHTML = "Your Date Format by [Short Format of Date and Time] is as following \n" +
                    myDate;                   
            
            } else if (meth == "4") {                
                
                alert("Welcome to Date & Time Format Number (4) [ISO Format]");                
                
                var Year = parseInt(prompt("Enter your Year Number to Apply")),                                
                    Month = parseInt(prompt("Enter your Month Number to Apply"))-1,                                
                    Day = parseInt(prompt("Enter your Day Number to Apply")),                                
                    Hour = parseInt(prompt("Enter your Hour Number to Apply")),                                
                    Mint = parseInt(prompt("Enter your Minute Number to Apply")),                                
                    Sec = parseInt(prompt("Enter your Second Number to Apply")),                                
                    MSec = parseInt(prompt("Enter your MilliSecond Number to Apply"));                                
                
                var myDate = new Date(Year,Month, Day, Hour, Mint, Sec, MSec);
                                      
                alert("Your Date Format by [ISO Format of Current Date & Time]\n" +
                      myDate);
                
                document.getElementById("txtarea").innerHTML = "Your Date Format by [ISO Format of Current Date & Time by Certain String Customized Date Format]\n" + myDate;                   
                

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