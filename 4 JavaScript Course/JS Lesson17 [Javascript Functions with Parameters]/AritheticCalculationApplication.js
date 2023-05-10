/* global prompt, document, alert */

function processTwoNums() {
    var pass = prompt("Press any key to start the [Main Arithmetic calculator] Application...");
    
    if (pass != "") {
        
        function calcNums(num1, num2) {                                            
            var sumNums = parseInt(num1 + num2),
                subNums = num1 - num2,
                multNums = num1 * num2,
                divNums = num1 / num2;
            
            return "Sumittion Result = " + sumNums + "<br>" +                
                "Substraction Result = " + subNums + "<br>" +
                "Multiply Result = " + multNums + "<br>" +
                "Division Result = " + divNums;                 
        }                
        
        var firstNum =  prompt("Insert your First Number :"),            
            secondNum =  prompt("Insert your Second Number :");            

        alert("Check The Calculation result in it's location ");        
        
        document.getElementById("TwoNumsCalc").innerHTML =
            calcNums(firstNum, secondNum);
    } else {
        alert("Good Bye");        
    } 
}
