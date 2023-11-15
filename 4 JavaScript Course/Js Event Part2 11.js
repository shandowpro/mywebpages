// b) Second button Event:
    var myDiv =  document.getElementById("divonkeypress"),
        myButton = document.getElementById("btn2"),
        myInput  = document.getElementById("input2");                

    myButton.onkeypress = function() {                
        myDiv.innerHTML = myInput.value * 3.75;                
    };