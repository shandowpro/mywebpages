/* Global alert, prompt, document */ 

// User Array Set Length Application :

function process2() {
    "use strict";
    var arr = ["Shadi", "Sayed", "Mohammed", "Ahmed", "Badawi"];
    var oldCounter = arr.length;
         
    alert("your Array Elements are = " + arr + "\n" + "your Array old Counter = " + oldCounter);        
     
    arr.length = prompt("Enter new Count of the Array (Must be less or equal the old Counter-Must be Less than   the old Array Counter-)");
    
    var newCounter = arr.length;
    
    alert("your Array new Counter = " + newCounter + "\n" +  "Your Current Array Elements are : " + arr );            
    document.getElementById("DisplayArrLng1").innerHTML =
        "Array old Length = " + oldCounter + "<br>" + "Array new Length =" + newCounter + "<br>" + "The Current Elements of Array are :" + arr;    
}


function process3() {
    "use strict";
    var StrVar = prompt("Enter your String Variable");
    var StrVarCounter0 = StrVar.length;
         
    alert("Your Text Letter Count= " + StrVarCounter0);                     
    
    document.getElementById("DisplayVarLng1").innerHTML =
        "Text origianl Number of Letters = " + StrVarCounter0 + "<br>" + "The Original Text is :" + StrVar;    
}
