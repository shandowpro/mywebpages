/* global alert, document, prompt */
/* jslint plusplus: true evil: true */
/* [Date & Time part5- Function3 (now-parse-Convs)] Application */

function test1() {
    
    var meth = prompt ("Choose your method \n 1) Press 1 for Now Functions\n 2) Press 2 for date-time Format Converting \n or press any other key to exit..");
    
    if (meth == "1") {
        alert("Welcome to method 1 [Now Functions ] ");
            
            var func = prompt("Press 1 for Now Function\n Press 2 for Parse Function"),
                mints = 1000 * 60,
                hours = mints * 60,
                days = hours * 24,
                months = days * 30,
                years = months * 12;                        
        
        if (func == "1"){
            
            alert("Welcome to Now Function (Date.now();) ...");
            
            var udate = new Date(),
                unow = Date.now(),            
                umints = unow/mints,
                uhours = unow/hours,
                udays = unow/days,
                umonths = unow/months,
                uyears = unow/years;
            
            document.getElementById("txtarea").innerHTML =
                "Total Current Date is = " + udate +
                "\nTotal Years from 1970 till now = " + Math.round(uyears) +
                "\nTotal Months from 1970 till now = " + Math.round(umonths) +
                "\nTotal Days from 1970 till now = " + Math.round(udays) +
                "\nTotal Hours from 1970 till now = " + Math.round(uhours) +
                "\nTotal Minuts from 1970 till now = " + Math.round(umints) +
                "\nTotal Seconds from 1970 till now = " + Math.round(unow/1000);
                                                                                        
        } else if (func == "2") {
            
            alert("Welcome to Now Function (Date.parse(\"Customized Date\");) ...");
            
            var udate1 = prompt("Enter your customized date ..."),
                uparse = Date.parse(udate1),                
                umints1 = uparse/mints,
                uhours1 = uparse/hours,
                udays1 = uparse/days,
                umonths1 = uparse/months,
                uyears1 = uparse/years;                                                      
                   
            document.getElementById("txtarea").innerHTML =
                "Total Years from 1970 till your Customized Date = " + Math.round(uyears1) +
                "\nTotal Months from 1970 till your Customized Date  = " + Math.round(umonths1) +
                "\nTotal Days from 1970 till your Customized Date  = " + Math.round(udays1) +
                "\nTotal Hours from 1970 till your Customized Date  = " + Math.round(uhours1) +
                "\nTotal Minuts from 1970 till your Customized Date  = " + Math.round(umints1) +
                "\nTotal Seconds from 1970 till your Customized Date  = " + Math.round(uparse/1000);            
            
       } else {
           alert("Error Entry !");
       }

    } else if (meth == "2") { 
               
        alert("Welcome to [date-time Format Converting] Methods ...");
        
        var Conv = prompt("Choose Your Converting format\n Press (1) to Convert to [ISO]\n Press (2) to Covnert to [Short Date only]\n Press (3) to Convert to [Short Time only]\n Or Press any Other key to exit ");
        
        if (Conv == "1") {
            
            alert("Weclome to Converting Method [ISO] ");    
            
            var CustDate1 = new Date();
            
            var isoDate = CustDate1.toISOString();
            
            alert("Your Date by [ISO] format is " + isoDate);
            
            document.getElementById("txtarea").innerHTML = "Your Date by [ISO] format is " + isoDate;
                        
        } else if (Conv == "2") {
            
            var CustDate2 = new Date();
                        
            alert("Weclome to Converting Method [Short String Only Date] ");    
            
            var onlyDate = CustDate2.toDateString();
                        
            alert("Your Date by [Only Date] format is " + onlyDate);                
            
            document.getElementById("txtarea").innerHTML = "Your Date-Time by [Only Date] format is " + onlyDate;
        
        } else if (Conv == "3") {
            
            alert("Weclome to Converting Method [Short String Only Time] ");    
            
            var CustDate3 = new Date();
        
            var onlyTime = CustDate3.toTimeString();
            
            alert("Your Date by [Only Time] fromat is " + onlyTime);                
            
            document.getElementById("txtarea").innerHTML = "Your Date-Time by [Only Time] format is " + onlyTime;
                                                         
        } else {                   
            alert("Error Entry!");                   
        }
                
   } else {
       alert("Error Entry!");
   }
                
}