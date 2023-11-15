/* global alert, document, prompt */
/* jslint plusplus: true evil: true */
/* [Math - Min - Max Function] */

function mthd1() {
    "use strict";
    
    MainLoop:
        
    do {

        var meth = prompt("Welcome to Math - Min - Max Function Application...\n please Choose your Method\n Press (1) for [Min] Function App \n Press (2) [Max] Function App \n Press any other key to exit ...");
    
        if (meth !== "1" && meth !== "2") {
             alert("Good Bye!");                
        } else {                
                    
            switch (meth) {
                case "1" :

                    alert("Wecome to [Minimum] Math Function App...");

                    ChildLoop1:                    
                 
                    do {
                        
                        alert("Let's Enter your [Numbers] ... ");
                        
                        var count1 = parseInt(prompt("How many numbers you want to Insert ?")),
                            x,
                            Nums = new Array();

                        
                        //InsertNums1:
                        
                        for (x = 0; x < count1; x++) {                            
                                                                                                                                                
                            Nums[x] = parseInt(prompt("Enter Number (" + (x + 1) + ")"));                            


                            if (Nums[x] == isNaN) { 
                                alert("Texual Value Can Not be Accepted! \n Please insert a Numeric Value\n" +
                                      "Please Re-Insert the Number (" + (x + 1) + ") again...");                                                                                                                                                
                            } else {

                                alert("The Number (" + Nums[x] + ") has added Succesfully! ");                                                 

                            }                                                                                    
                        }
                                                        
                            
                        var MinN = Math.min.apply(Math, Nums);
                        
                        alert("Your Min Number is :" + MinN);
                        

                        document.getElementById("txtarea").innerHTML = "Your number Collection are : \n " + Nums +
                            "\n Min Number of your Collection is :\n " + MinN;                                                                                    

                        var e11 = prompt("Press (1) to restart [Math - Min Function] application, \n or Any other key to Exit current Section ...");

                        if (e11 !== "1") {
                            alert("Good bye!");
                            break ChildLoop1;
                        }                                                            
                    } while (e11 == "1");                    
                                                                    
                break;
                    
            case "2" :

                    alert("Wecome to [Maxmum] Math Function App...");

                    ChildLoop2:                    
                 
                    do {
                        
                        alert("Let's Enter your [Numbers] ... ");
                        
                        var count = parseInt(prompt("How many numbers you want to Insert ?")),
                            y,
                            Numss = new Array();

                        
                        //InsertNums1:
                        
                        for (y = 0; y < count; y++) {                            
                                                                                                                                                
                            Numss[y] = parseInt(prompt("Enter Number (" + (y + 1) + ")"));                            


                            if (Numss[y] == isNaN) { 
                                alert("Texual Value Can Not be Accepted! \n Please insert a Numeric Value\n" +
                                      "Please Re-Insert the Number (" + (y + 1) + ") again...");                                                                                                                                                
                            } else {
                                alert("The Number (" + Numss[y] + ") has added Succesfully! ");                                                 

                            }                                                                                    
                        }
                                                                                    
                        var MaxN = Math.max.apply(Math, Numss);
                        
                        alert("Your Max Number is :" + MaxN);
                        
                        document.getElementById("txtarea").innerHTML = "Your number Collection are : \n " + Numss +
                            "\n Max Number of your Collection is :\n " + MaxN;                                                                                    

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
