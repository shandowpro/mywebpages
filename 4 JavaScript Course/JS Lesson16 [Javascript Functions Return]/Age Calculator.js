
/* global alert */
// Age Calculator Application :

function processAge() {

    var pass = prompt("Press Any key to start the [Age Calculator] Application ");
    
    if ( pass != "" ) {
        alert("Welcome to Set [Age Calculator] Applicaton ..,This Application Will Calculate your Age by Months, Days and Hours");    
        
        function userInfo() {
            var age =  prompt("Enter your Age by Years: "),
                ageMonths = age*12,
                ageDays = age*365,
                ageHours = ageDays*24,
                totInfo = "Your Age by Years = " + ageMonths + "<br>" + "Your Age by Days  = " + ageDays + "<br>" + "Your Age by Hours  = " + ageHours;             
            return totInfo;                        
        }        
                
        document.getElementById("JSFunRetAgeCalc1").innerHTML = userInfo();            
    
    } else {
        alert ("Good Bye!");
    }            
}
