// Javascript Events Part 2 [onkeydown , onkeyup,  onkeypress]: 
/* global console, alert, prompt */

// Method 1 (Using Button + Default Way [Defining Function in Js File and invoke it form HTMl Element]):

// First input Event :
    function process1() {    
        function keydown() {
            var myDiv =  document.getElementById("divonkeydown1"),            
                myInput  = document.getElementById("input1");

            myDiv.innerHTML = myInput.value * 3.75;        
        }
        return keydown();
    }

//==========================================================================    

// Second input Event :
    function process2() {
        function keypress() {
            var myDiv =  document.getElementById("divonkeypress1"),            
                myInput  = document.getElementById("input2");

            myDiv.innerHTML = myInput.value * 3.75;
        }
        return keypress();
    }
//==========================================================================    

// Third input Event :
    function process3() {
        function keyup() {            
            var myDiv =  document.getElementById("divonkeyup1"),            
                myInput  = document.getElementById("input3");

            myDiv.innerHTML = myInput.value * 3.75;
        }
        return keyup();
    }
        
//==========================================================================
