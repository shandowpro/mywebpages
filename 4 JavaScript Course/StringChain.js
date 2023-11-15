/*global document, alert, prompt*/

function mthd1() {
    alert("Welcome to (Chain - Multiple Linked Functions) Method [ myVar.Function1().Function2().Function3(); ]");        
    alert("In this Application the user will Apply (3) Functions on one Numeric Variable\n 1- Converiting to String\n 2- Replacing one number\n 3- Spliting All Numbers ");        
    
    var myNumber  = prompt("Enter your Main Number:"),        
        myString = myNumber.toString().replace(/0/g, 1).split("");
    
    
    alert("Your Original Number is :\n" + myNumber + "\nYour Variable after applying multiple Functions is: \n" +
          myString);            

    document.getElementById("Mthd1").innerHTML = "Your Original Number is :" + "<br>" + 
        myNumber + "<br>" + "Your Variable after applying multiple Functions is :" + "<br>" + myString;              
    
}
// ===================================================================================================

      