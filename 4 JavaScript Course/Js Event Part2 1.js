// Method 2 (Using Button + Declaring Button Variable and Allocatin Direct function):
// a) First Button Event:
    var myDiv =  document.getElementById("divonkeydown1"),
        myButton = document.getElementById("btn1"),
        myInput  = document.getElementById("input1");                

    myButton.onclick = function() {                
        myDiv.innerHTML = myInput.value * 3.75;                
    };
// ===================================================================================
        
