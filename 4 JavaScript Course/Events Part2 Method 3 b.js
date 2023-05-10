// Method 3 (Directly implementing Function By onkeyup Event of Element [With out using a button]):
// a) Second Event (onkeypress) :
    var myDiv =  document.getElementById("divpress2"),        
        myInput  = document.getElementById("input2");
    
    myInput.onkeypress = function () {
        myDiv.innerHTML = myInput.value * 3.75;                
    };




    

