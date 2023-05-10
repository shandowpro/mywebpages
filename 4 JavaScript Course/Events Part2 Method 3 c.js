// Method 3 (Directly implementing Function By onkeyup Event of Element [With out using a button]):
// a) Second Event (onkeypress) :
    var myDiv =  document.getElementById("divup2"),        
        myInput  = document.getElementById("input3");
    
    myInput.onkeyup = function () {
        myDiv.innerHTML = myInput.value * 3.75;                
    };




    

