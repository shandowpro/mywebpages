/* global alert, document, prompt */
/* jslint plusplus: true evil: true */
/* [Date & Time part3- Function1] Application */


function mthd() {
    "use strict";
    alert("Welcome to Date & Time part3 - Function Part 1 (get) ");
    
    do {
     
        var meth = prompt("Please Choose your Date & Time Function Mode ...\n Press (1) Original Mode Date & Time \n Press (2) UTC Mode of Date & Time \n Press any other key to exit ...");
        
        if (meth !== "1" && meth !== "2") {
             alert("Error entry!");                
        } else {
        
            var CustDate = new Date();
        
            if (meth == "1"){  
                                
                do  {
                    alert("Welcome to Date & Time Mode 1 [Original Date-Function]");
                                                
                    var fun = prompt(" Choose Date/Time Function from Below ... \n Press (1) For [Get Day Index of Month] \nPress (2) For [Get Day Index of Week] \nPress (3) For [Get Full Year Number] \nPress (4) For [Get Hours Number] \nPress (5) For [Get Minutes Number] \nPress (6) For [Get Seconds Number] \nPress (7) For [Get MilliSeconds Number] \nPress (8) For [Get Total Time Number by MilliSeconds (from 1970-Now)] \nPress (9) For [Get Time Zone Differnece Number by Minutes] or Press any other key to Exit ..");
                                     
                    switch (fun) {
                        case "1":
                            alert("Welcome to [Get Day Index of Month] ");
                            
                            var DayMInd = CustDate.getDate();
                            
                            alert("Your Day Month Index Number is " + DayMInd);
                            
                            document.getElementById("txtarea").innerHTML =
                                "Your Day Index Month Nubmer is " + DayMInd;                                                           
                            break;

                        case "2":
                            alert("Welcome to [Get Day Index of Week] ");
                            
                            var DayWInd = CustDate.getDay();
                            
                            alert("Your Day Index Week Number is " + DayWInd);
                            
                            document.getElementById("txtarea").innerHTML =
                                "Your Day Index Weeek Nubmer is " + DayWInd;
                            
                            break;
                        
                        case "3":
                            alert("Welcome to [Get Full Year Number] ");

                            var FullYear = CustDate.getFullYear();
                            
                            alert("Your Year Full Number is " + FullYear);
                            
                            document.getElementById("txtarea").innerHTML =
                                "Your Year Full Nubmer is " + FullYear;                                                         
                            break;
                                                        
                        case "4":
                            alert("Welcome to [Get Hours Number] ");
                            
                            var HourNum = CustDate.getHours();
                            
                            alert("Your Hour Number is " + HourNum);
                            
                            document.getElementById("txtarea").innerHTML =
                                "Your Hour Nubmer is " + HourNum;                                                                    
                            break;
                                                        
                        case "5":
                            alert("Welcome to [Get Minutes Number] ");

                            var MinNum = CustDate.getMinutes();
                            
                            alert("Your Minutes Number is " + MinNum);
                            
                            document.getElementById("txtarea").innerHTML =
                                "Your Minutes Nubmer is " + MinNum;                                                                                             
                            break;
                                                        
                        case "6":
                            alert("Welcome to [Get Seconds Number] ");

                            var SecondsNum = CustDate.getSeconds();
                            
                            alert("Your Seconds Number is " + SecondsNum);
                            
                            document.getElementById("txtarea").innerHTML =
                                "Your Seconds Nubmer is " + SecondsNum;                                       
                            break;
                            
                        case "7":
                            alert("Welcome to [Get MilliSeconds Number] ");
                            
                            var MilliSNum = CustDate.getMilliseconds();
                            
                            alert("Your MilliSeconds Number is " + MilliSNum);
                            
                            document.getElementById("txtarea").innerHTML =
                                "Your MilliSeconds Nubmer is " + MilliSNum; 

                            break;
                            
                        case "8":
                            alert("Welcome to [Get Total Time Number by MilliSeconds (from 1970-Now)] ");
                            
                            var TotTimeMS = CustDate.getTime();
                            
                            alert("Your Total Time by MilliSeconds [From 1970 - Now] is \n" +
                                  TotTimeMS);
                            
                            document.getElementById("txtarea").innerHTML =
                                "Your Total Time by MilliSeconds [From 1970 - Now] is \n" + TotTimeMS; 

                            break;

                        case "9":
                            alert("Welcome to [Get Time Zone Differnece Number by Minutes] ");

                            var TZDiff = CustDate.getTimezoneOffset();
                            
                            alert("Your Time zone differnece by Minutes is \n" + TZDiff);
                            
                            document.getElementById("txtarea").innerHTML =
                                "Your Time zone differnece by Minutes is \n" + TZDiff; 

                            break;
                            
                        default:
                            alert ("Error Entry!");                             
                            break;

                    }                                                                                                                       
                    var a = prompt("Press (1) to Re-start the [Original Mode] date Function, or any other key to Exit ...");
                    
                } while (a == "1");
            
            
            } else if (meth == "2") {
                
                do {
                    
                    alert("Welcome to Date & Time Mode 2 [UTC Mode Function]... ");

                    var fun = prompt("Choose UTC Date/Time Function from Below ... \n Press (1) For [Get UTC Day Index of Month] \nPress (2) For [Get UTC Day Index of Week] \nPress (3) For [Get UTC Hours Number] \nPress (4) For [Get UTC Minutes Number] \nPress (5) For [Get UTC Seconds Number] \nPress (6) For [Get UTC MilliSeconds Number] \nOr Press any other key to Exit ..");
                                                                        
                    switch (fun) {
                        case "1":
                            alert("Welcome to [Get UTC Day Index of Month] ");
                            
                            var UDayMInd = CustDate.getUTCDate();
                            
                            alert("Your UTC Day Month Index Number is " + UDayMInd);
                            
                            document.getElementById("txtarea").innerHTML =
                                "Your UTC Day Index Month Nubmer is " + UDayMInd;                                   
                            break;

                        case "2":
                            alert("Welcome to [Get UTC Day Index of Week] ");
                            
                            var UDayWInd = CustDate.getUTCDay();
                            
                            alert("Your UTC Day Index Week Number is " + UDayWInd);
                            
                            document.getElementById("txtarea").innerHTML =
                                "Your UTC Day Index Weeek Nubmer is " + UDayWInd;                                                              
                            break;                                                
                                                        
                        case "3":
                            alert("Welcome to [Get UTC Hours Number] ");
                            
                            var UHourNum = CustDate.getUTCHours();
                            
                            alert("Your UTC Hour Number is " + UHourNum);
                            
                            document.getElementById("txtarea").innerHTML =
                                "Your UTC Hour Nubmer is " + UHourNum;                                                                    
                            break;
                                                        
                        case "4":
                            alert("Welcome to [Get UTC Minutes Number] ");

                            var UMinNum = CustDate.getUTCMinutes();
                            
                            alert("Your UTC Minutes Number is " + UMinNum);
                            
                            document.getElementById("txtarea").innerHTML =
                                "Your UTC Minutes Nubmer is " + UMinNum;                                                                                             
                            break;                            
                            
                        case "5":
                            alert("Welcome to [Get UTC Seconds Number] ");

                            var USecondsNum = CustDate.getUTCSeconds();
                            
                            alert("Your UTC Seconds Number is " + USecondsNum);
                            
                            document.getElementById("txtarea").innerHTML =
                                "Your UTC Seconds Nubmer is " + USecondsNum;                                                                   
                            break;
                            
                        case "6":
                            alert("Welcome to [Get UTC MilliSeconds Number] ");
                            
                            var UMilliSNum = CustDate.getUTCMilliseconds();
                            
                            alert("Your UTC MilliSeconds Number is " + UMilliSNum);
                            
                            document.getElementById("txtarea").innerHTML =
                                "Your UTC MilliSeconds Nubmer is " + UMilliSNum; 

                            break;
                            
                        default:
                            alert("Error Entry!");                                                 
                            break;
                    }             
                
                    var b = prompt("Press (1) to Re-start the [UTC Mode]  date Function, or any other key to Exit ...");
                    
                } while (b == "1");                
            
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