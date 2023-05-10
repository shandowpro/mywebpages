// Method 2 (Using Button + Declaring Button Variable and Allocatin Direct function):
// c) Third Button Event:
    var myDiv =  document.getElementById("divup10"),
        myButton = document.getElementById("btn3"),
        myInput  = document.getElementById("input3");                

    myButton.onclick = function() {                
        myDiv.innerHTML = myInput.value * 3.75;                
    };
// ===================================================================================
        
