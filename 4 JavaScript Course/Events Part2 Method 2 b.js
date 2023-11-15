// Method 2 (Using Button + Declaring Button Variable and Allocatin Direct function):
// b) Second Button Event:
    var myDiv =  document.getElementById("divup10"),
        myButton = document.getElementById("btn2"),
        myInput  = document.getElementById("input2");                

    myButton.onclick = function () {                
        myDiv.innerHTML = myInput.value * 3.75;                
    };
// ===================================================================================
        
