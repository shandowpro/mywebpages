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
                    