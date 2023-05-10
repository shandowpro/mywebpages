/* global alert, document, prompt */
/* jslint plusplus: true evil: true */
/* [[ Numbers - Intro] ]] Application */

function test1() {
    
    var meth = prompt ("Choose your method \n Press 1 for [Hexa Decimal Numeric system] \n Press 2 for [Octal Decimal Numeric system]\n Press 3 for [NaN Script]\n Press 4 for [Infinity Script] \n Press 5 for [- Infinity]\n press any other key to exit..");
    
    if (meth == "1") {
        alert("Welcome to method 1 [Hexa Decimal Numeric system] ");
        
        var HNumber = prompt("Enter your Hexal Number [0x##] ..."),
            TypeH = typeof (HNumber);
                                
        document.getElementById("txtarea").innerHTML = "Your Hexal Number is " + HNubmer +
            "\nYour Type of Hexal Number is " + TypeH;
                        
            
    } else if (meth == "2") { 
       alert("Welcome to method 2 [Octal Decimal Numeric system] ");
        
        var OctNumber = prompt("Enter your Octal Number [0##] ..."),
            TypeOct = typeof (OctNumber);
                                
        document.getElementById("txtarea").innerHTML = "Your Octal number is  = " + OctNumber +
            "\nYour Type of Octal number is  = " + TypeOct;                             
                        
    
    } else if (meth == "3") { 
       alert("Welcome to method 3 [NaN Script] Function ");
        
        var Num = parseInt(prompt("Enter your Numeric Value ...")),
            txt = prompt("Enter your Texual Value ... "),
            NanV = Num / txt,
            NaNtype = typeof (NaNtype);
                                
        document.getElementById("txtarea").innerHTML = "Your Result number is  = " + NanV +
            "\nYour Type of Result is  = " + NaNtype;                             
    
    } else if (meth == "4") { 
       alert("Welcome to method 4 [Infinity Script] Function ");
        
        var Num = parseInt(prompt("Enter your Main positive Numeric Value ...")),            
            PInfRes = Num / 0,
            PInfType = typeof (PInfRes);
                                
        document.getElementById("txtarea").innerHTML = "Your Positive Infinite Reslut is  = " + PInfRes +
            "\nYour Type of Result is  = " + PInfType;                             
    
    } else if (meth == "5") { 
       alert("Welcome to method 5 [-Infinity Script] Function ");
        
        var Num = parseInt(prompt("Enter your Main Negative Numeric Value ...")),            
            NInfRes = Num / 0,
            NInfType = typeof (NInfRes);
                                
        document.getElementById("txtarea").innerHTML = "Your Negative Infinite Result is  = " + NInfRes +
            "\nYour Type of Result is  = " + NInfType;                             
                        
                
   } else {
       alert("Error Entry!");
   }
                
}