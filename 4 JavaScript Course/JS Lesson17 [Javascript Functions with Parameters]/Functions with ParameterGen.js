/* JavaScript Lesson 17 [Javascript Function With Parameters] */
// ================================================================================================================================

function test () {
/* global prompt, alert */

    function processOnePar() {
        var pass = prompt("Press any key to start the [Function With One Parameter] Appliction...");
        if (pass != "") {
            function onePar(par) {        
                return "Welcome " + par + " to Javascript Lesson 17 [Function Parameters]";                 
            }                
            var name =  prompt("Insert your name :");
            
            document.getElementById("FunctionWithOneParameter").innerHTML =
                onePar(name);
            
            alert(onePar(name));
            
        } else {
            alert("Good Bye");        
        } 
    }



}
// ==============================================================================================

function test1() {
    /* global prompt, alert */

    function processMultPars() {
        var pass = prompt("Press any key to start the [Function With Multiple Parameters] Application...");
        
        if (pass != "") {
            
            function multPars(par1, par2, par3) {        
                return "Welcome " + par1 + " " + par2 + " " + par3 + " to Javascript Lesson 17 [Function Parameters]";                 
            }                
            var firstName =  prompt("Insert your First Name :"),
                middleName =  prompt("Insert your middle Name :"),
                lastName =  prompt("Insert your last Name :");            
            
            document.getElementById("FunctionWithMultParameter").innerHTML =
                multPars(firstName, middleName, lastName);
            
            alert(multPars(firstName, middleName, lastName));        
        } else {
            alert("Good Bye");        
        } 
    }



}    
// ==============================================================================================

function test2() {

    /* global prompt, alert */

    function processProDisc() {
        var pass = prompt("Press any key to start the [Function Products Discount calculator] Application...");
        
        if (pass != "") {
            
            function ProdDisc(price, discount) {                                            
                return "Your product main Price = " + price + "<br>" +                
                    "Your Product's Discount = " + discount + "<br>" +
                    "Your Product price After Discount = " + (price -  discount);                 
            }                
            var mainPrice =  prompt("Insert your main Product Price :"),            
                mainDiscount =  prompt("Insert your main Discount :");            

            alert("Check The result in it's location ");        
            
            document.getElementById("ProductDiscount").innerHTML =
                ProdDisc(mainPrice, mainDiscount);
        } else {
            alert("Good Bye");        
        } 
    }

}
// ==============================================================================================

function test3() {

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


}
// ==============================================================================================
// ==============================================================================================

function display() {
    document.getElementById('SourceCode').textContent = test;
    document.getElementById('SourceCode1').textContent = test1;
    document.getElementById('SourceCode2').textContent = test2;
    document.getElementById('SourceCode3').textContent = test3;

}



