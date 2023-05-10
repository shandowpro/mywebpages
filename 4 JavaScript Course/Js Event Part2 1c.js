// Method 2 (Using Button + Declaring Button Variable and Allocatin Direct function):
// c) onkeyup Event :

    var myDiv =  document.getElementById("divonkeyup"),        
        myInput  = document.getElementById("input3");
    
    myInput.onclick = function() {
        myDiv.innerHTML = myInput.value * 3.75;                
    };