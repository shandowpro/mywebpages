/* Global alert, prompt, document */ 

// Random Array Get Length Application :

function process() {
    "use strict";
    var arr = ["Shadi", "Sayed", "Mohammed"],
        arrCount = arr.length;
    
    alert(arrCount);
    document.getElementById("DisplayArrLng").innerHTML = "Array Length = " + arrCount;    
}


function process1() {
    "use strict";
    var myVar = prompt("Enter you String Variable :"),
        myVarCount = myVar.length;
    
    alert("Stiring Variable Length = \n" + myVarCount);
    document.getElementById("DisplayVarLng").innerHTML = "Stiring Variable Length = " + myVarCount;    
}
