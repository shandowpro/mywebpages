// Method 2 (Using Button + Declaring Button Variable and Allocatin Direct function):
// a) First Event (onkeydown):
    var myDiv = document.getElementById("divdown10"),
        myButton = document.getElementById("btn1"),
        myInput = document.getElementById("input11");                

    myButton.onclick = function () {                
        myDiv.innerHTML = myInput.value * 3.75;                
    };
// ===================================================================================
        
