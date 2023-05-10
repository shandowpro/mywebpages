// [Multiple Scopes] Applcation: 


    function Summition() {
        "use strict";
        alert("Welcome to [Multiple Scopes] Appliction... ");
        alert("Let's start Summtion Process Appliction... ");
        
        var GNum1 = prompt("Enter your Global First Number ...."),
            GNum2 = prompt("Enter your Global Second Number "),
            Sum = "Summition Process Result: " + (GNum1 + GNum2);                        
        
        document.getElementById("DisplaySum").innerHTML = Sum;        
    }
    //Summition();

    
    

    function Substraction() {
        "use strict";
        alert("Welcome to [Multiple Scopes] Appliction... ");
        alert("Let's start Substraction Process Appliction... ");    
        
        var GNum1 = prompt("Enter your Global First Number ...."),
            GNum2 = prompt("Enter your Global Second Number "),
            Sub = "Substraction Process Result: " + (GNum1 - GNum2);                        
        
        document.getElementById("DisplaySub").innerHTML = Sub;
    }



    function Multiply() {
        "use strict";
        alert("Welcome to [Multiple Scopes] Appliction... ");
        alert("Let's start Multiply Process Appliction... ");
        
        var GNum1 = prompt("Enter your Global First Number ...."),
            GNum2 = prompt("Enter your Global Second Number "),        
            Mult = "Multiply Process Result: " + (GNum1 * GNum2);                                  
        document.getElementById("DisplayMult").innerHTML = Mult;
    }
    //Multiply();




    
    function Division () {
        "use strict";
        alert("Welcome to [Multiple Scopes] Appliction... ");
        alert("Let's start Division Process Appliction... ");
        
        var GNum1 = prompt("Enter your Global First Number ...."),
            GNum2 = prompt("Enter your Global Second Number "),
            Divs = "Division Process Result: " + (GNum1 / GNum2);   
        document.getElementById("DisplayDiv").innerHTML = Divs;
    }                    
    //Division();



