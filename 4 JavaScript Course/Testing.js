/* global alert, document, prompt */
/* jslint plusplus: true evil: true */
/* [Date & Time part4- Function2] Application */


function test() {
    
    var meth = prompt ("Choose your method \n 1) Press 1 for original Date-Time\n 2) Press 2 for UTC\n or press any other key to exit..");
    
    if (meth == "1") {
        alert("Welcome to method 1 [Original Time-Date] ");
        
        var userDate = new Date(),
            userDaySet = parseInt(prompt("Enter your day ")),
            userYearSet = parseInt(prompt("Enter your Year ")),
            userMonthSet = parseInt(prompt("Enter your Month ")),
            userHoursSet = parseInt(prompt("Enter your Hours ")),
            userMintsSet = parseInt(prompt("Enter your Minutes ")),
            userSecsSet = parseInt(prompt("Enter your Seconds ")),
            userMillSecsSet = parseInt(prompt("Enter your MilliSeconds "));
                
        var daySet = userDate.setDate(userDaySet),       
            yearSet = userDate.setFullYear(userYearSet), 
            monthSet = userDate.setMonth(userMonthSet), 
            hoursSet = userDate.setHours(userHoursSet), 
            mintsSet = userDate.setMinutes(userMintsSet), 
            secsSet = userDate.setSeconds(userSecsSet), 
            millSecsSet = userDate.setMilliseconds(userMillSecsSet);         
        
        var dayGet = userDate.getDate(),       
            yearGet = userDate.getFullYear(), 
            monthGet = userDate.getMonth(), 
            hoursGet = userDate.getHours(), 
            mintsGet = userDate.getMinutes(), 
            secsGet = userDate.getSeconds(), 
            millSecsGet = userDate.getMilliseconds(); 
                   
        alert("Your new Date-Time after Custome reset as following \n Day is : " + dayGet +
             "\nYour Year is : " + yearGet +
             "\n Your Month is : " + monthGet +
             "\n Your Hours is : " + hoursGet +
             "\n Your Minutes is : " + mintsGet +
             "\n Your Seconds is : " + secsGet + 
             "\n Your MilliSeconds is : " + millSecsGet);
         
        document.getElementById("txtarea").innerHTML =
            "Your new Date-Time after Custome reset as following \n Day is : " + dayGet +
             "\nYour Year is : " + yearGet +
             "\n Your Month is : " + monthGet +
             "\n Your Hours is : " + hoursGet +
             "\n Your Minutes is : " + mintsGet +
             "\n Your Seconds is : " + secsGet + 
             "\n Your MilliSeconds is : " + millSecsGet;        
        /*---------------------------------------------------------------------------*/
                        
    } else if (meth == "2") {
                                    
        alert("Weclome to method 2 [UTC Time-Date]");
        
        var userDate = new Date(),
            userDaySet = parseInt(prompt("Enter your day ")),
            userYearSet = parseInt(prompt("Enter your Year ")),
            userMonthSet = parseInt(prompt("Enter your Month ")),
            userHoursSet = parseInt(prompt("Enter your Hours ")),
            userMintsSet = parseInt(prompt("Enter your Minutes ")),
            userSecsSet = parseInt(prompt("Enter your Seconds ")),
            userMillSecsSet = parseInt(prompt("Enter your MilliSeconds "));        
        
        var daySet = userDate.setUTCDate(userDaySet),       
            yearSet = userDate.setUTCFullYear(userYearSet), 
            monthSet = userDate.setUTCMonth(userMonthSet), 
            hoursSet = userDate.setUTCHours(userHoursSet), 
            mintsSet = userDate.setUTCMinutes(userMintsSet), 
            secsSet = userDate.setUTCSeconds(userSecsSet), 
            millSecsSet = userDate.setUTCMilliseconds(userMillSecsSet);         
        
        var dayGet = userDate.getDate(),       
            yearGet = userDate.getFullYear(), 
            monthGet = userDate.getMonth(), 
            hoursGet = userDate.getHours(), 
            mintsGet = userDate.getMinutes(), 
            secsGet = userDate.getSeconds(), 
            millSecsGet = userDate.getMilliseconds(); 
                           
        alert("Your new Date-Time after Custome UTC reset as following \n Day is : " + dayGet +
             "\nYour UTC Year is : " + yearGet +
             "\n Your UTC Month is : " + monthGet +
             "\n Your UTC Hours is : " + hoursGet +
             "\n Your UTC Minutes is : " + mintsGet +
             "\n Your UTC Seconds is : " + secsGet + 
             "\n Your UTC MilliSeconds is : " + millSecsGet);
         
        document.getElementById("txtarea").innerHTML =
            "Your new Date-Time after UTC Custome reset as following \n Day is : " + dayGet +
             "\nYour UTC Year is : " + yearGet +
             "\n Your UTC Month is : " + monthGet +
             "\n Your UTC Hours is : " + hoursGet +
             "\n Your UTC Minutes is : " + mintsGet +
             "\n Your UTC Seconds is : " + secsGet + 
             "\n Your UTC MilliSeconds is : " + millSecsGet;        
        
    } else {
        
        alert("Good Bye!"); 
    }
    
}