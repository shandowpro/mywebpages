function test() {

    /* global console */
    // Conditinoal Operators ( Negative or positive Number ):
    // Vars Declaration :
    var welcome = "Welcome to Negative or positive Number Application ... ";
        


    // Functions:
    alert(welcome);
    var usernum = prompt("Please enter your number...");

    if ( usernum < 0 ) {
        alert("Your Number is Negative !");
        document.getElementById("NegPosApp").innerHTML = "Your Number is Negative !";
    } else if ( usernum > 0 ) {
        alert("Your Number is Positive !");    
        document.getElementById("NegPosApp").innerHTML = "Your Number is Positive !";
    } else {
        alert(" Error Entry !");        
        document.getElementById("NegPosApp").innerHTML = " Error Entry !";
    }
            
    

}
// ==============================================================================================

function test1() {

    /* global console */
    // Conditinoal Operators ( Calculate your Grade ):
    // Vars Declaration :
    var welcome = "Welcome to Grade Calculator Application ... ";


    // Functions:
    alert(welcome);
    var Score = prompt("Please enter your Score Degree...");

    if ( Score < 50 ){
        alert("Your Grade is [F] (Fall) !");
        document.getElementById("GradeApp").innerHTML = "Your Grade is [F] (Fall) !";        

    } else if ( Score >= 50 && Score < 60){     
        alert("Your Grade is [E] (Pass) !");    
        document.getElementById("GradeApp").innerHTML = "Your Grade is [E] (Pass) !";

    } else if ( Score >= 60 && Score < 70){        
        alert("Your Grade is [D] (Good) !");
        document.getElementById("GradeApp").innerHTML = "Your Grade is [D] (Good) !";

    } else if  ( Score >= 70 && Score < 80){        
        alert("Your Grade is [C] (Good+) !");
        document.getElementById("GradeApp").innerHTML = "Your Grade is [C] (Good+) !";            

    } else if ( Score >= 80  && Score < 90){        
        alert("Your Grade is [B] (V.Good) !");                
        document.getElementById("GradeApp").innerHTML = "Your Grade is [B] (V.Good) ";    

    } else if ( Score >= 90 ) { 
        alert("Your Grade is [A] (Excellent) !");            
        document.getElementById("GradeApp").innerHTML = "Your Grade is [A] (Unique) !";

    } else if (  Score > 100 ){                        
        alert("Your Grade is [A+] (Unique) !");            
        document.getElementById("GradeApp").innerHTML = "Your Grade is [A+] (Unique) !";

    } else {
        alert(" Error Entry !");        
        document.getElementById("GradeApp").innerHTML = "Error Entry !";
    }
                        

}
// ==============================================================================================


function test2() {

    /* global console */
    // Conditinoal Operators ( Confirming Questions Application : ):
    // Vars Declaration :
    var welcome = "Welcome to [Confirming Questions Application ]... ";
        
    // Functions:
    alert(welcome);

    var pass = prompt("Press 1 To Start the application or any Other key To abort...");

    if ( pass !== "" ){
            
        alert("Welcome to Qustions Application ...");
        
        var userName = prompt("What is your name ?"),
            userAge = prompt("How old are you ?"),
            userCountry = prompt("Where are you from ?"),
            userJob = prompt("What is your Job ?");
        
        document.getElementById("testAssign").innerHTML =
            "your Name is : " + userName + "<br>" +
            ", Your Age is: " + userAge + "<br>" +
            ", Your Country is: " + userCountry + "<br>" +
            ", Your Job is: " + userJob; 
        
    } else {
        alert("Bye !");
    }

}
// ==============================================================================================

function display() {
    document.getElementById('SourceCode').textContent = test;
    document.getElementById('SourceCode1').textContent = test1;
    document.getElementById('SourceCode2').textContent = test2;

}
