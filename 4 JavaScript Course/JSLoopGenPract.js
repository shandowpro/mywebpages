/* global alert, document, prompt */
/* jslint plusplus: true evil: true */
/* [General Revision Loop Statement (For, For - In with Object, While & Do - While) + Control Tools Loop Statement (break, continue, label)] */

function mthd1() {
    "use strict";
    
    var meth = prompt("Welcome to General Revision Application...\n please choose your Method\n Press (1) for Loop Statements Apps \n Press (2) for Loop Control Tools Apps \n Press any other key to exit...");
    
    if (meth !== "1" && meth !== "2") {
         alert("Good Bye !");                
    } else {
        
        MainLoop:
        
        while (meth == "1" || meth == "2") {
            
            switch (meth) {
                case "1" :
                
                    ChildLoop1:                    
                    
                    do {
                        
                        var loops = prompt("Choose your Loop Statement from below\n press (1) for [For] Statement \n Press (2) for [For - In] Loop Statement \n Press (3) for [While] Loop Statement \n Press any other key to Exit");

                        if (loops == "1") { 
                            LoopFor();

                        } else if (loops == "2") {
                            LoopForIn();           

                        } else if (loops == "3") {
                            LoopWhile();

                        } else {
                            alert("Good bye!");
                            break ChildLoop1;
                        }            

                                                                    
                        var e11 = prompt("Press (1) to restart [Loop Statement] application, \n or Any other key to Exit current Section ...");
                
                        if (e11 !== "1") {
                            alert("Good bye!");
                            break ChildLoop1;
                        }                                                            
                    } while (e11 == "1");
                    
                                        
                    var e1 = prompt("Press (1) to restart the Whole Application, \n or Any other key to Exit...");
                
                    if (e1 !== "1") {
                        alert("Good bye!");
                        break MainLoop;
                    }                                                                                
                    break;

                case "2" :

                    ChildLoop2:
                    
                    do {
                        
                        var Contrls = prompt("Choose your Control Tool from below\n press (1) for [Break] Loop Tool \n Press (2) for [Continue] Loop Tool \n Press (3) for [Label] Loop Tool \n Press (4) for [All In One] Loop Tool \n Press any other key to Exit");

                        if (Contrls == "1") { 
                            contrlBreak();

                        } else if (Contrls == "2") {
                            contrlContinue();           

                        } else if (Contrls == "3") {
                            contrlLabel();
                        
                        } else if (Contrls == "4") {
                            AllContrls();

                        } else {
                            alert("Good bye!");
                            break ChildLoop2;
                        }


                        var e22 = prompt("Press (1) to restart Current Section [Loop Control Tools] , \n or Any other key to Exit...");

                        if (e22 !== "1") {
                            alert("Good bye!");
                            break ChildLoop2;                        
                        }                  
                    
                    } while (e22 == "1");
                    
                    break;
                                                
                default :
                    alert("Error Entry !");    
                    break;
                    
                var e2 = prompt("Do you want to Restart the Whole application [General Revision]? \nPress (1) to restart the Whole Application, \n or Any other key to Exit...");

                if (e2 !== "1") {
                    alert("Good bye!");
                    break MainLoop;
                }                                                                                
                
            }        
            
            var e = prompt("Press (1) to restart Whole application [General Revision], \n or Any other key to Exit...");

            if (e !== "1") {
                alert("Good bye!");
                break MainLoop;
            }    
        }        
    }                
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Functions of [Loop Statements]:
function LoopFor() {
    alert("Welcome to [For] Loop Statement App...");    
    
    var ForMethod = prompt("Press (1) for [Default Method of For] Loop Statement \n Press (2) for [Shorten Method]...");
    
    MainLoopFor:
    
    do {
        
       switch (ForMethod) {
               
           case "1" :
               var StartNum = prompt("Enter your Start Number :"),               
                   EndNum = prompt("Enter your End Number :"),
                   i = 0,
                   all = "",
                   arr = new Array();
               
               ForChildLoop1:
               
               do {
                   alert("Welcome to [Default Method of For] Loop Statement..."); 
                   
                   for (StartNum; StartNum <= EndNum; StartNum++, i++) {                       
                       arr[i] = StartNum;
                       all += arr[i] + "\n";                                                                                        
                   }               
                   
                   document.getElementById("txtarea").innerHTML = "Your Funciton Result by (For Default Method) is " + "\n" + all;
                   
                                      
                   var b1 = prompt("Press (1) to restart Current Section [For Default Method] \n or press any other key to Exit...");
                   if (b1 !== "1") {
                       alert("Good Bye!");
                       break ForChildLoop1;                                              
                   }
                                                  
               } while (b1 == "1");                                                            
               break;           
               
               var b0 = prompt("Press (1) to restart Current Whole application [For] \n or press any other key to Exit...");
               if (b0 !== "1") {
                   alert("Good Bye!");
                   break MainLoopFor;                                      
               }                                             
           
           case "2" :
               
               var StartNum = prompt("Enter your Start Number :"),               
                   EndNum = prompt("Enter your End Number :"),
                   i = 0,
                   all = "",
                   arr = new Array();
                              
               ForChildLoop2:
                        
               do {
                   
                   alert("Welcome to [Shortened Method of For] Loop Statement..."); 
                   
                   for (;;) {
                       
                       if (StartNum > EndNum) break ForChildLoop2;
                       arr[i] = StartNum;
                       all += arr[i] + "\n";                                                                 
                       StartNum++;
                       i++;
                   }               
                   
                   document.getElementById("txtarea").innerHTML = "Your Funciton Result by (Shortened For Method) is " + "\n" + all;
                   
                   
                   var b2 = prompt("Press (1) to restart Current Section [Shortened For Method] \n or press any other key to Exit...");
                   if (b2 !== "1") {
                       alert("Good Bye!");
                       break ForChildLoop2;                                      
                   }
               } while (b2 == "1");                                             
               break;
               
               var b0 = prompt("Press (1) to restart Current Whole application [For] Loop Statement \n or press any other key to Exit...");
               if (b0 !== "1") {
                   alert("Good Bye!");
                   break MainLoopFor;                                      
               }                                             
                    
           default :
               alert("Error Entry!");
               break;                               
               
           var b0 = prompt("Press (1) to restart Current Whole application [For] \n or press any other key to Exit...");
           if (b0 !== "1") {
               alert("Good Bye!");
               break MainLoopFor;                                      
           }                                             
       }
        
        
      var b = prompt("Press (1) to restart the Whole application of [For]...\n Press any othre key to Exit >>>");     
      if (b !== "1") {
          alert("Good bye!");
          break MainLoopFor;          
      }      
                
    } while (b == "1");
                         
            
}
// ===================================================================================================



function LoopForIn() {
    alert("Welcome to [For - In] Loop Statement App...");                        
    
    MainLoopForIn:
    
    do {
            
       var myObj = {
        Name: "Shadi",
        Age: "33",
        Gender: "Male"
        };
    
        var all = "",
            prop;

        for (prop in myObj) {                                         

            alert("your Object Property " + prop + " is: " + myObj[prop]);

            console.log("your Object Property " + prop + " is: " + myObj[prop]);        

            all += "Your Object Property " + prop + " is: " + myObj[prop] + "\n";
        }            

        
        document.getElementById("txtarea").innerHTML = "Your Object Elements as following :" + "\n" + all;
                   
        var b = prompt("Press (1) to restart the Whole application of [For - In]...\n Press any othre key to Exit >>>");     
        if (b !== "1") {
            alert("Good bye!");
            break MainLoopForIn;          
        }      
                
    } while (b == "1");        
    
}
// ===================================================================================================




function LoopWhile() {
    alert("Welcome to [While] Loop Statements App...");        
    
    var WhileMethod = prompt("Press (1) for [Default While] Loop Statement \n Press (2) for [Do - While]...");
    
    MainLoopWhile:
    
    do {
        
       switch (WhileMethod) {
               
           case "1" :
               alert("Welcome to [Default While] Loop Statement..."); 
               
               var StartNum = prompt("Enter your Start Number :"),               
                   EndNum = prompt("Enter your End Number :"),
                   i = 0,
                   all = "",
                   arr = new Array();
               
               ChildLoopWhile1:
               
               do {
                   
                   while (StartNum <= EndNum) {                       
                       arr[i] = StartNum;
                       all += arr[i] + "\n";
                       StartNum++;
                       i++;                                              
                   }               
                   
                   document.getElementById("txtarea").innerHTML = "Your Function Result by (Default While) Method is " + "\n" + all;
                   
                                      
                   var b1 = prompt("Press (1) to restart Current Section [Default While] \n or press any other key to Exit...");
                   if (b1 !== "1") {
                       alert("Good Bye!");
                       break ChildLoopWhile1;                                              
                   }
                                                  
               } while (b1 == "1");                                                            
               break;           
               
               var b0 = prompt("Press (1) to restart Current Whole application [While] Loop Statement \n or press any other key to Exit...");
               if (b0 !== "1") {
                   alert("Good Bye!");
                   break MainLoopWhile;                                      
               }                                             
           
           case "2" :
               
               alert("Welcome to [Do - While] Loop Statement..."); 
               
               var StartNum = prompt("Enter your Start Number :"),               
                   EndNum = prompt("Enter your End Number :"),
                   i = 0,
                   all = "",
                   arr = new Array();
                              
               ChildLoopWhile2:
                        
               do {                                   

                   do {                                              
                       arr[i] = StartNum;
                       all += arr[i] + "\n";                                                                 
                       StartNum++;
                       i++;
                   } while (StartNum <= EndNum);              
                   
                   document.getElementById("txtarea").innerHTML = "Your Function Result by (Do - While) Method is " + "\n" + all;
                   
                   
                   var b2 = prompt("Press (1) to restart Current Section [Default While] \n or press any other key to Exit...");
                   if (b2 !== "1") {
                       alert("Good Bye!");
                       break ChildLoopWhile2;                                      
                   }
               
               } while (b2 == "1");                                             
               break;
               
               var b0 = prompt("Press (1) to restart Current Whole application [While] \n or press any other key to Exit...");
               if (b0 !== "1") {
                   alert("Good Bye!");
                   break MainLoopWhile;                                      
               }                                             
                    
           default :
               alert("Error Entry!");
               break;                               
               
           var b0 = prompt("Press (1) to restart Current Whole application [While] \n or press any other key to Exit...");
           if (b0 !== "1") {
               alert("Good Bye!");
               break MainLoopWhile;                                      
           }                                             
       }
        
        
      var b = prompt("Press (1) to restart the Whole application of [For]...\n Press any othre key to Exit >>>");     
      if (b !== "1") {
          alert("Good bye!");
          break MainLoopWhile;          
      }      
                
    } while (b == "1");
                    
}

// ===================================================================================================


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Functions of [Loop Controls Tools]:
function contrlBreak() {
    alert("Welcome to [Break] Loop Tool App...");       

    var Snum = parseInt(prompt("Enter your number :")),
        Enum = parseInt(prompt("Enter your End number : ")),                
        passNum,
        z,
        i = 0,
        arr = new Array();                


    do {                                

        FLoop:
        for (Snum; Snum <= Enum; Snum ++, i++) {                                                                                       
            passNum = prompt("Press (1) to Break the Loop [Stop All the loop] \n Press any other key to continue...");

            if (passNum == "1") {

                alert("All Loop has been Stoped!");
                arr[i] = "All loop has been Stoped at " + Snum + "! \n ===================================\n" ;
                break FLoop;    
                                                                        
            } else {
               alert("lets Continue..");                                        

                arr[i] = "Arithmetic Operation of [ " + Snum + " ] as Following : \n" +
                    "Summition OP Result : [ " + (Snum + Snum) + " ] \n" +
                    "Substraction OP Result : [ " + (Snum - Snum) + " ] \n" +
                    "Multiply OP Result : [ " + (Snum * Snum) + " ] \n" +
                    "Division OP Result : [ " + (Snum / Snum) + " ] \n" +                                                
                    "\n ================================= \n";

                alert("Calculation of Number (" + Snum + ") Done Successfuly !");

           }                                                                                       

        }

        z = prompt("Do you wish To process another Task? \n press any key to restart, or (0) to Exit... ");


    } while (z !== "0");

    document.getElementById("txtarea").innerHTML = arr;

}
// --------------------------------------------------------------------------------------------------------------------------



function contrlContinue() {
    alert("Welcome to [Continue] Loop Tool App...");             

    var Snum = parseInt(prompt("Enter your number :")),
        Enum = parseInt(prompt("Enter your End number : ")),                
        passNum,
        z,
        i = 0,
        arr = new Array();                


    do {                                

        FLoop:
        for (Snum; Snum <= Enum; Snum ++, i++) {                                                                                       
            passNum = prompt("Press (1) to Break the Loop [Stop All the loop] \n Press any other key to continue...");

            if (passNum == "1") {

                alert("Number ( " + Snum + " ) has passed (Continue Tool) Successfully!");
                arr[i] = "Number ( " + Snum + " ) has passed Successfully! \n ==============================\n" ;
                continue FLoop;                                                           
                
            } else {
               alert("lets Continue..");                                        

                arr[i] = "Arithmetic Operation of [ " + Snum + " ] as Following : \n" +
                    "Summition OP Result : [ " + (Snum + Snum) + " ] \n" +
                    "Substraction OP Result : [ " + (Snum - Snum) + " ] \n" +
                    "Multiply OP Result : [ " + (Snum * Snum) + " ] \n" +
                    "Division OP Result : [ " + (Snum / Snum) + " ] \n" +                                                
                    "\n ================================= \n";

                alert("Calculation of Number (" + Snum + ") Done Successfuly !");

           }                                                                                       

        }

        z = prompt("Do you wish To process another Task? \n press any key to restart, or (0) to Exit... ");


    } while (z !== "0");

    document.getElementById("txtarea").innerHTML = arr;
    
    
}
// --------------------------------------------------------------------------------------------------------------------------



function contrlLabel() {
    alert("Welcome to [Label] Loop Tool App...");        
    alert("[Label] Loop Tool is inculded in other two Loop Statement Apps ...");    
}


function AllContrls() {
    alert("Welcome to [All In one] Control Loop Tools App...");        

    var Snum = parseInt(prompt("Enter your number :")),
        Enum = parseInt(prompt("Enter your End number : ")),                
        passNum,
        z,
        i = 0,
        arr = new Array();                

    do {                                

        FLoop:
        for (Snum; Snum <= Enum; Snum ++, i++) {                                                                                       
            passNum = prompt("Press (1) to Break the Loop [Stop All the loop] \n Press (2) to ignore the next number\n Press any other key to continue...");

            if (passNum == "1") {

                alert("All Loop has been Stoped! (Break Tool) ");
                arr[i] = "All loop has been Stoped at " + Snum + "! \n ===================================\n" ;
                break FLoop;    

            } else if (passNum == "2") {

                alert("Number ( " + Snum + " ) has passed Successfully! (continue Tool)");
                arr[i] = "Number ( " + Snum + " ) has passed Successfully! \n ==============================\n" ;
                continue FLoop;                                                            

            } else {
               alert("lets Continue..");                                        

                arr[i] = "Arithmetic Operation of [ " + Snum + " ] as Following : \n" +
                    "Summition OP Result : [ " + (Snum + Snum) + " ] \n" +
                    "Substraction OP Result : [ " + (Snum - Snum) + " ] \n" +
                    "Multiply OP Result : [ " + (Snum * Snum) + " ] \n" +
                    "Division OP Result : [ " + (Snum / Snum) + " ] \n" +                                                
                    "\n ================================= \n";

                alert("Calculation of Number (" + Snum + ") Done Successfuly !");

           }                                                                                       

        }

        z = prompt("Do you wish To process another Task? \n press any key to restart, or (0) to Exit... ");


    } while (z !== "0");

    document.getElementById("txtarea").innerHTML = arr;
            
}
// ================================================================================================================