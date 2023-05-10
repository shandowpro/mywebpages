// c) Third Button Event:
    var myDiv =  document.getElementById("divonkeyup"),
        myButton = document.getElementById("btn3"),
        myInput  = document.getElementById("input3");                

    myButton.onkeyup = function() {                
        myDiv.innerHTML = myInput.value * 3.75;                
    };
    