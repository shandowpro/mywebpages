/* global alert, document, prompt */
/* jslint plusplus: true evil: true */
/* [Math Random Function] */

function mthd1() {
    "use strict";
    
    MainLoop:
        
    do {

        var meth = prompt("Welcome to Math Random Function Application...\n please Choose your Method\n Press (1) for [Simple Number] Function App \n Press (2) [Multiple Numbers] Function App \n Press any other key to exit ...");
    
        if (meth !== "1" && meth !== "2") {
             alert("Good Bye!");                
        } else {                
                    
            switch (meth) {
                case "1" :

                    alert("Wecome to [Simple Number] Math Function App...");

                    ChildLoop1:                    
                 
                    do {
                        
                        var rand = Math.random();
                                                
                        alert("your Random Genereated number is :" + rand);                        
                        
                        var MFun = prompt("Please choose your Method.. \n Press (1) to apply Round Function... \n Press (2) to Apply Ceil function... \n Press (3) to apply Floor Function\n Press any other Key for simple Generation... ");
                        
                        
                        if (MFun == "1") {
                            
                            var RoundRand = Math.round(rand);

                            alert("Your Random [by Rounding funciton ] Number is :\n" + RoundRand);

                            document.getElementById("txtarea").innerHTML = "Your Basic Random Generated Number is : \n" + rand +
                                "\nYour Random [by Rounding Funciton] Number is :\n" + RoundRand;                     
                                                    
                        }   else if (MFun == "2") {
                             
                            var CeilRand = Math.ceil(rand);                            

                            alert("Your Basic Random Generated Number is : \n" + rand +                                  
                                "\nYour Random [by Ceiling Funciton] Number is :\n" + CeilRand);

                            document.getElementById("txtarea").innerHTML = "Your Basic Random Generated Number is : \n" + rand +
                                "\nYour Random [by Ceiling Funciton] Number is :\n" + CeilRand;                     
                            
                                                                                         
                        }  else if (MFun == "3") {
                        
                            var FloorRand = Math.floor(rand);

                            alert("Your Basic Random Generated Number is : \n" + rand +
                                "\nYour Random [by Flooring Funciton] Number is :\n" + FloorRand);

                            document.getElementById("txtarea").innerHTML = "Your Basic Random Generated Number is : \n" + rand +
                                "\nYour Random [by Flooring Funciton] Number is :\n" + FloorRand;                                                                                                     
                        } else {
                            var rand = Math.random();

                            alert("Your Random [by Simple generation] Number is :\n" + rand);

                            document.getElementById("txtarea").innerHTML = "Your Random [by Simple generation] Number is :\n" + rand;                                                                                 
                        }
 

                        var e11 = prompt("Press (1) to restart [Math - Min Function] application, \n or Any other key to Exit current Section ...");

                        if (e11 !== "1") {
                            alert("Good bye!");
                            break ChildLoop1;
                        }                                                            
                    } while (e11 == "1");                    
                                                                    
                break;
                    
            case "2" :

                    alert("Wecome to [Multiple Numbers] Math Function App...");

                    ChildLoop2:                    
                 
                    do {
                        
                        alert("Let's Generate your [Numbers] ... ");
                        
                        var count = parseInt(prompt("How many numbers you want to Generate ?")),
                            EndNum = parseInt(prompt("Enter your Ultimate Number...")),
                            y,
                            RoundRands = new Array(), 
                            CeilRands = new Array(),
                            FloorRands = new Array(),
                            Numss = new Array();
                                                
                        
                        for (y = 0; y < count; y++) {                            
                                                                                                                                                
                            Numss[y] = (Math.random()) * EndNum;
                            
                            RoundRands[y] = Math.round(Numss[y]);
                            CeilRands[y] = Math.ceil(Numss[y]);
                            FloorRands[y] = Math.floor(Numss[y]);
                            
                            alert("The Number (" + (y + 1) + ") is ( " + Numss[y] + " )");                                                 
                            
                            alert("The Number (" + Numss[y] + ") has added Succesfully! ");                                                                                                                           
                        }
                        
                        alert("Your Basic Random numbers are :\n" + Numss);                                                 
                        
                        var MFun0 = prompt("Please choose your Method.. \n Press (1) to apply Round Function... \n Press (2) to Apply Ceil function... \n Press (3) to apply Floor Function\n Press any other Key for simple Generation... ");
                        
                        
                        if (MFun0 == "1") {                                                        

                            alert("Your Random [by Rounding funciton ] Numbers is :\n" + RoundRands);

                            document.getElementById("txtarea").innerHTML = "Your Basic Random Generated Numbers is : \n" + Numss +
                                "\nYour Rounded Random [by Rounding Function] Numbers are :\n" + RoundRands;                     
                                                    
                        }   else if (MFun0 == "2") {                                                         

                            alert("Your Random [by Rounding funciton ] Number are :\n" + CeilRands);

                            document.getElementById("txtarea").innerHTML = "Your Basic Random Generated Numbers is : \n" + Numss +
                                "\nYour Rounded Random [by Rounding Function] Numbers are :\n" + CeilRands;                     
                                                                         
                                                                                         
                        }  else if (MFun0 == "3") {
                                                                                              
                            alert("Your Random [by Rounding funciton ] Number are :\n" + FloorRands);

                            document.getElementById("txtarea").innerHTML = "Your Basic Random Generated Numbers is : \n" + Numss +
                                "\nYour Rounded Random [by Rounding Function] Numbers are :\n" + FloorRands;                     

                                                                        
                        } else {
                            var rand0 = Math.random();

                            alert("Your Random [by Simple generation] Numbers are :\n" + rand0);

                            document.getElementById("txtarea").innerHTML = "Your Random [by Simple generation] Numbers are :\n" + rand0;                                                                                 
                        }
                                                                                                                   
                        var e22 = prompt("Press (1) to restart [Math - Min Function] application, \n or Any other key to Exit current Section ...");

                        if (e22 !== "1") {
                            alert("Good bye!");
                            break ChildLoop2;
                        }                                                            
                    } while (e22 == "1");                    
                                                                    
                break;
            
                default :
                    alert("Error Entry !");    
                    break;                                                                                                                         
            }                         
            
            var e0 = prompt("Do you want to Restart the Whole application [Math Max - Min]? \nPress (1) to restart the Whole Application, \n or Any other key to Exit...");

            if (e0 !== "1") {
                alert("Good bye!");
                break MainLoop;
            }                                                                                                
        }        
    } while(e0 == "1");   
}                

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*function SimNum(userNum) {    
    var x = Math.Min - Max(userNum);
    return x;
}*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
