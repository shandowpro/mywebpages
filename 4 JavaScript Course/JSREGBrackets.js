/* global alert, document, prompt */
/* jslint plusplus: true evil: true */
/* [Regular Expression Functional Processing part2 (Brackets) ] Application */

function mthd1() {
    "use Strict";
    
    alert("Welcome to REGs Brackets part 2 with [Replacement] Functional Processing...");                        
        
    var Str = prompt("Enter your String (including numbers and Characters) ..." ); 
    
    MainLoop:
        
    do {                    
        
        var meth = prompt("Please Choose your REG Brackets Replacement Functional Process to Apply ...\n Press (1) for [ Regs Positive Brackets Replacement] Process \n Press (2) for [ Regs Negative Brackets Replacement ] Process... Press any other key to exit ...");
    
        if (meth !== "1" && meth !== "2") {
             alert("Good Bye!");                
        } else {                
           //do {         
            switch (meth) {
                case "1":

                    alert("Welcome to Regs [Positive Brackets Replacement] Functional Processing ...");                    

                    ChildLoop1:                    
                 
                    do {       
                    
                        var PosMeth = prompt("Please choose your REGs Positive Brackets Replacement method ...\n Press (1) for [Specified one Character / Number ] Replacement method...\n Press (2) for [Specified Characters / Number Range] Replacement method... \n Press (3) for [All Capital Letters] Replacement method...\n Press (4) for [All Small Letters] Replacement method... Press any other key to Exit..."); 
                                                
                        if (PosMeth == "1") {
                            alert("Welcome to [Specified one Character / Number] REGs Positive Brackets Replacement method \n Your assumed Character REG Texual Pattern is [a] & \n Your assumed REG Numberic Pattern is [1] by (Static Mode)...");
                            
                            var Char = prompt("Enter your Character (Dynamic Mode):"),
                                Rep1 = prompt("Enter your Replacement Character to be Changed..."),
                                Res11 = Str.replace(/[a]/,Rep1),
                                Res22 = Str.replace(/[1]/,Rep1),
                                Res10 = Str.replace("/[" + Char + "]/",Rep1); //This Code Needs To Review (Dynamic Mode)//

                            alert("Your main String is " + Str + "with Replacement is " + Rep1 + " \n Your String after Texual Replacement by (Static Character) is : ( " + Res11 + " )\n Your String after Numeric Replacement by (Static Character) is : and (" + Res22 + ")\n Your String after Replacement by (Dynamic Character) is : ( " + Res10 + " )" );                        

                            document.getElementById("txtarea").innerHTML = "Your main String is " + Str + "with Replacement is " + Rep1 + " \n Your String after Texual Replacement by (Static Character) is : ( " + Res11 + " )\n Your String after Numeric Replacement by (Static Character) is : and (" + Res22 + ")\n Your String after Replacement by (Dynamic Character) is : ( " + Res10 + " )";                                                                                                             
                        } else if (PosMeth == "2") {
                            alert("Welcome to [Specified Characters / Numbers Range] REGs Positive Brackets Replacement method ");
                            alert("Your assumed Static Texual Range is [a-z] & Numeric Range is [0-9]");
                                                        
                            var charsRang = prompt("Choose your REG Range Pattern Mode\n Press (1) For [All Capital Letters] with your Assigned Replacement ... \n Press (2) for [All Small Letters] \n Press (3) for [All Numbers Replacement]\n or Press any other key to exit [Specified Characters Range] REGs Positive Brackets ..."),
                            
                            Rep2 = prompt("Enter your Replacement Character/ Number to be Replace with...");
                                                        
                            if (charsRang == "1") {
                                    
                                alert("Welcome to [Specified Characters Range] - [All Capital Letters]");                                                                                            
                                var Res21 = Str.replace(/[A-Z]g/, Rep2);                                    

                                alert("Your Main String is : " + Str + " And your Replacement " + Rep2 + "\nYour String after Replacement by (Capital Letters Replacement) with Static Assumed Range is : ( " + Res21 + " )");           
                                
                                document.getElementById("txtarea").innerHTML = "Your Main String is : " + Str + "with rep " + Rep2 + "\nYour String after Replacement by (Capital Letters Replacement) with Static Assumed Range is : ( " + Res21 + " )";                             
                                
                            } else if (charsRang == "2") {
                                alert("Welcome to [Specified Characters Range] - [All Small Letters]");                                                                                            
                                var Res22 = Str.replace(/[a-z]g/, Rep2);                                    

                                alert("Your Main String is : \n [ " + Str + " ]\n With Replacement ( " + Rep2 + " )\nYour String after Replacement by (Small Letters Replacement) with Static Assumed Range is : ( " + Res22 + " )");                        

                                document.getElementById("txtarea").innerHTML = "Your Main String is : \n [ " + Str + " ]\n With Replacement ( " + Rep2 + " )\nYour String after Replacement by (Small Letters Replacement) with Static Assumed Range is : ( " + Res22 + " )";                             
                                                                                                          
                            } else if (PosMeth == "3") {
                            
                                alert("Welcome to [Specified Characters Range] - [ Numberic Range ] REGs Positive Brackets Replacement method");           
                                
                                var Rep3 = prompt("Insert your Replacement Character/Number ... "),
                            
                                NumMth = prompt("Choose your Numberic Range REG Method...\n Press (1) to apply [0-5 Numeric Ranges] Method... \nPress (2) to apply [5-9 Numeric Ranges] Method... \n Press any other key to exit... ");
                                
                                if (NumMth == "1") {
                              
                                    alert("Welcome to [Numberic Range] - [0-5] Method...");                             
                                    
                                    var Res31 = Str.replace(/[0-5]g/, Rep3);                                    

                                    alert("Your Main String is :\n [ " + Str + " ]\n your Assigned Replacement ( " + Rep3 + " )\n Your String after Replacement by (Numeric Range Pattern [0-5]) with Static Assumed Range is : ( " + Res31 + " )");                        

                                    document.getElementById("txtarea").innerHTML = "Your Main String is :\n [ " + Str + " ]\n With Replacement ( " + Rep3 + " )\nYour String after Replacement by (Numeric Range Pattern [0-5]) with Static Assumed Range is : ( " + Res31 + " )" ;                        
                                    
                                    
                                } else if (NumMth == "2") {
                                    
                                    alert("Welcome to [Numberic Range] - [5-9] Method...");                             
                                           
                                    var Res32 = Str.replace(/[5-9]g/, Rep3);                                    

                                    alert("Your Main String is :\n [ " + Str + " ]\n With Replacement ( " + Rep3 + " )\nYour String after Replacement by (Numeric Range Pattern [5-9]) with Static Assumed Range is : ( " + Res32 + " )");                        

                                    document.getElementById("txtarea").innerHTML = "Your Main String is :\n [ " + Str + " ]\n With Replacement ( " + Rep3 + " )\nYour String after Replacement by (Numeric Range Pattern [5-9]) with Static Assumed Range is : ( " + Res32 + " )" ;                                                                                                                     
                                } else {
                                    alert("Error Entry!");
                                    break ChildLoop1;
                                }
                                                                                                                                                    
                            } else {
                                alert("Error Entry!");
                                break ChildLoop1;
                            }
                                                                                
                        } else {
                            alert("Good bye!");
                            break ChildLoop1; 
                        }
                    
                        var e11 = prompt("Press (1) to restart [REGs Brackets part 2 with [Replacement] Functional Processing] Section, \n or Any other key to Exit current Section ...");

                        if (e11 !== "1") {
                            alert("Good bye!");
                            break ChildLoop1;
                        }                                                            
                    } while (e11 == "1");                                                                                        
                    break;                    
                                          
                case "2":                        

                    alert("Welcome to Regs [Negative Brackets Replacement] Function...");                    

                    ChildLoop2:                    

                    do {       

                        var NegMeth = prompt("Please choose your REGs Negative Brackets Replacement method ...\n Press (1) for [Specified one Character / Number ] Replacement method...\n Press (2) for [Specified Characters / Number Range] Replacement method... \n Press (3) for [All Capital Letters] Replacement method...\n Press (4) for [All Small Letters] Replacement method... Press any other key to Exit..."); 

                        if (NegMeth == "1") {
                            alert("Welcome to [Specified one Character / Number] REGs Negative Brackets Replacement method");
                            alert("Your assumed Character REG Texual Pattern is [a] & \n Your assumed REG Numberic Pattern is [1] by (Static Mode)...");

                            var Char = prompt("Enter your Character (Dynamic Mode):"),
                                Rep1 = prompt("Enter your Replacement Character to be Changed..."),
                                Res11 = Str.replace(/[a]/,Rep1),
                                Res22 = Str.replace(/[1]/,Rep1),
                                Res10 = Str.replace("/[" + Char + "]/",Rep1); //This Code Needs To Review (Dynamic Mode)//

                            alert("Your main String is " + Str + "with Negative Replacement is " + Rep1 + " \n Your String after Texual Negative Replacement by (Static Character) is : ( " + Res11 + " )\n Your String after Numeric Negative Replacement by (Static Character) is : and (" + Res22 + ")\n Your String after Replacement by (Dynamic Character) is : ( " + Res10 + " )" );                        

                            document.getElementById("txtarea").innerHTML = "Your main String is " + Str + "with Negative Replacement is " + Rep1 + " \n Your String after Texual Negative Replacement by (Static Character) is : ( " + Res11 + " )\n Your String after Numeric Negative Replacement by (Static Character) is : and (" + Res22 + ")\n Your String after Negative Replacement by (Dynamic Character) is : ( " + Res10 + " )";                                                                                                             
                        } else if (NegMeth == "2") {
                            
                            alert("Welcome to [Specified Characters / Numbers Range] REGs Negative Brackets Replacement method ");
                            alert("Your assumed Static Texual Negative Range is [a-z] & Numeric Negative Range is [0-9]");

                            var charsRang = prompt("Choose your REG Range Pattern Mode\n Press (1) For [All Capital Letters] with your Assigned Replacement ... \n Press (2) for [All Small Letters] \n Press (3) for [All Numbers Replacement]\n or Press any other key to exit [Specified Characters Range] REGs Negative Brackets ..."),

                            Rep2 = prompt("Enter your Replacement Character/ Number to be Negative Replace with...");

                            if (charsRang == "1") {

                                alert("Welcome to Negative Replacement [Specified Characters Range] - [All Capital Letters]");                                                                                            
                                var Res21 = Str.replace(/[A-Z]g/, Rep2);                                    

                                alert("Your Main String is : " + Str + " And your Negative Replacement " + Rep2 + "\nYour String after Negative Replacement by (Capital Letters Replacement) with Static Assumed Range is : ( " + Res21 + " )");           

                                document.getElementById("txtarea").innerHTML = "Your Main String is : " + Str + "your Negative Replacement " + Rep2 + "\nYour String after Negative Replacement by (Capital Letters Replacement) with Static Assumed Range is : ( " + Res21 + " )";                             

                            } else if (charsRang == "2") {
                                alert("Welcome to Negative Replacment[Specified Characters Range] - [All Small Letters]");                                                                                            
                                var Res22 = Str.replace(/[a-z]g/, Rep2);                                    

                                alert("Your Main String is : \n [ " + Str + " ]\n With Negative Replacement ( " + Rep2 + " )\nYour String after Negative Replacement by (Small Letters Replacement) with Static Assumed Range is : ( " + Res22 + " )");                        

                                document.getElementById("txtarea").innerHTML = "Your Main String is : \n [ " + Str + " ]\n your Negative Replacement ( " + Rep2 + " )\nYour String after Negative Replacement by (Small Letters Replacement) with Static Assumed Range is : ( " + Res22 + " )";                             

                            } else if (NegMeth == "3") {

                                alert("Welcome to [Specified Characters Range] - [ Numberic Range ] REGs Negative Brackets Replacement method");           

                                var Rep3 = prompt("Insert your Replacement Character/Number ... "),

                                NumMth = prompt("Choose your Numberic Range REG Method...\n Press (1) to apply [0-5 Numeric Ranges] Method... \nPress (2) to apply [5-9 Numeric Ranges] Method... \n Press any other key to exit... ");

                                if (NumMth == "1") {
                                    // HERE///
                                    alert("Welcome to Negative Replacement [Numberic Range] - [0-5] Method...");                             
                                    var Res31 = Str.replace(/[0-5]g/, Rep3);                                    

                                    alert("Your Main String is :\n [ " + Str + " ]\n your Assigned Replacement ( " + Rep3 + " )\n Your String after Negative Replacement by (Numeric Range Pattern [0-5]) with Static Assumed Range is : ( " + Res31 + " )");                        

                                    document.getElementById("txtarea").innerHTML = "Your Main String is :\n [ " + Str + " ]\n With Negative Replacement ( " + Rep3 + " )\nYour String after Negative Replacement by (Numeric Range Pattern [0-5]) with Static Assumed Range is : ( " + Res31 + " )" ;                        
                                } else if (NumMth == "2") {

                                    alert("Welcome to [Numberic Range] - [5-9] Method...");                             

                                    var Res32 = Str.replace(/[5-9]g/, Rep3);                                    

                                    alert("Your Main String is :\n [ " + Str + " ]\n With Replacement ( " + Rep3 + " )\nYour String after Replacement by (Numeric Range Pattern [5-9]) with Static Assumed Range is : ( " + Res32 + " )");                        

                                    document.getElementById("txtarea").innerHTML = "Your Main String is :\n [ " + Str + " ]\n With Replacement ( " + Rep3 + " )\nYour String after Replacement by (Numeric Range Pattern [5-9]) with Static Assumed Range is : ( " + Res32 + " )" ;                                                                                                                     
                                } else {
                                    alert("Error Entry!");
                                    break ChildLoop2;
                                }

                            } else {
                                alert("Error Entry!");
                                break ChildLoop2;
                            }

                        } else {
                            alert("Good bye!");
                            break ChildLoop2; 
                        }

                        var e11 = prompt("Press (1) to restart [REGs Brackets part 2 with [Replacement] Functional Processing] Section, \n or Any other key to Exit current Section ...");

                        if (e11 !== "1") {
                            alert("Good bye!");
                            break ChildLoop2;
                        }                                                            
                    } while (e11 == "1");                                                                                       
                    break;         

                default :
                    alert("Error Entry !");    
                    break;
        
                var e0 = prompt("Do you want to Restart the Whole application [REGs Regular Expression]? \nPress (1) to restart the Whole Application, \n or Any other key to Exit...");

                if (e0 !== "1") {
                    alert("Good bye!");
                    break MainLoop;
                }                                                                                                             
            }
        }
    } while(e0 == "1");   
}