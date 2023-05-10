// Method 3 (Directly implementing Function By onkeyup Event of Element [With out using a button]):
// a) First Event (onkeydown) :
    var myDiv =  document.getElementById("divonkeydown2"),        
        myInput  = document.getElementById("input1");
    
    myInput.onkeydown = function() {
        myDiv.innerHTML = myInput.value * 3.75;                
    };




    

