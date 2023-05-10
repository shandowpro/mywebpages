
// ================================================================================================================================

function test () {

    /* global alert */
    // Function Return As Element Value:

    var pass = prompt("Press Any key to start the [Set Function Return as Element Value] Application ");
        
    if ( pass != "" ) {
        alert("Welcome to Set Fun Ret Applicaton ...");    
        
        function userInfo() {
            var name = prompt("Enter your Name: "),
            age =  prompt("Enter your Age: "),
            country =  prompt("Enter your Address: ");
            
            return "Welcome " + name + "<br>" + "Your Age is = " + age + "<br>" + "Your Country is : " + country; 
        }        
        document.getElementById("FuntionReturnElementV").innerHTML = userInfo();            

    } else {
        alert ("Good Bye!");
    }            
}
// ==============================================================================================

function test1() {

        
    /* global alert */
    // Function Return As Element Value:

    var pass = prompt("Press Any key to start the [Set Function Return as Variable Value] Application ");
    
    if ( pass != "" ) {
        alert("Welcome to Set Fun Ret Applicaton ...");    
        
        function userInfo() {
            var name = prompt("Enter your Name: "),
                age =  prompt("Enter your Age: "),
                country =  prompt("Enter your Address: ");
            
            return "Welcome " + name + "<br>" + "Your Age is = " + age + "<br>" + "Your Country is : " + country; 
        }        
        var myInfo = userInfo();
        document.getElementById("FunctionReturnVariableV").innerHTML = myInfo;            
    
    } else {
        alert ("Good Bye!");
    }            

}    
// ==============================================================================================

function test2() {

    
    /* global alert */
    // Age Calculator Application :

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
// ==============================================================================================
// ==============================================================================================

function display() {
    document.getElementById('SourceCode').textContent = test;
    document.getElementById('SourceCode1').textContent = test1;
    document.getElementById('SourceCode2').textContent = test2;

}



