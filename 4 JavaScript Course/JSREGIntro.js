/* global alert, document, prompt */
/* jslint plusplus: true evil: true */
/* [Regular Expression Functional Processing part1] Application */

function mthd1() {
    "use strict";
    
    MainLoop:
        
    do {

        var Str = "My Name is : Shadi Sayed Mohamed Ahmed \n My Age is 33 \n My job is : Developer";
        
        //let reg = new RegExp(/s/ig);
                
        alert("Your default String is :\n" + Str + "\n" +
             "Your Default Regular Expression is " + "[s] Letter");                        
        
        var meth = prompt("Please Choose your REG Functional Process to Apply ...\n Press (1) for [Searching Index] Process \n Press (2) for [Replacement] Process... \n Press (3) for [Split] Process... \n Press any other key to exit ...");
    
        if (meth !== "1" && meth !== "2" && meth !== "3") {
             alert("Good Bye!");                
        } else {                
                    
            switch (meth) {
                case "1" :

                    alert("Welcome to [Searching Index] REG Function...");

                    ChildLoop1:                    
                 
                    do {
                        
                    //var SPattern = prompt("Enter your Search Pattern :").toString();                                 
                        var f = prompt("Press (1) to Apply [Insensitve Case Attribute]...\n Press (2) to Apply [Global Attribute]...\n Press (3) to Apply [Multiline Attribute]...\n Press (4) to Apply [All Attribute]...\n Press any other key to Exit...");
                        
                        if (f == "1") {
                            alert("Welcome to [Insensitve Case Attribute]");
                            var SResult1 = Str.search(/s/); 

                            alert("your Search Result Index is : (" + SResult1 + ")");                        

                            document.getElementById("txtarea").innerHTML = "Your Search Result Index is : [" +
                                SResult1 + "]";                                                                                                                 
                        } else if (f == "2") {
                            alert("Welcome to [Global Attribute]");
                            var SResult2 = Str.search(/s/); 

                            alert("your Search Result Index is : (" + SResult2 + ")");                        

                            document.getElementById("txtarea").innerHTML = "Your Search Result Index is : [" + SResult2 + "]";                                                                                     
                                   
                        } else if (f == "3") {
                            alert("Welcome to [Multiline Attribute]"); 
                            var SResult3 = Str.search(/s/); 

                            alert("your Search Result Index is : (" + SResult3 + ")");                        

                            document.getElementById("txtarea").innerHTML = "Your Search Result Index is : [" + SResult3 + "]";                                                                                     
                            
                        } else if (f == "4") {
                            alert("Welcome to [All Attribute]"); 
                            var SResult4 = Str.search(/s/); 

                            alert("your Search Result Index is : (" + SResult4 + ")");                        

                            document.getElementById("txtarea").innerHTML = "Your Search Result Index is : [" + SResult4 + "]";            
                        } else {
                            alert("Good bye!");
                            break ChildLoop1; 
                        }
                    
                        var e11 = prompt("Press (1) to restart [Searching Index] REG Function , \n or Any other key to Exit current Section ...");

                        if (e11 !== "1") {
                            alert("Good bye!");
                            break ChildLoop1;
                        }                                                            
                    } while (e11 == "1");                    
                                                                    
                break;
                    
            case "2" :

                    alert("Welcome to [Replacement] REG Function...");                    

                    ChildLoop2:                    
                 
                    do {                                                
                        
                        var Rep = prompt("Enter your Substitution String to be replaced with ");
                        
                        var f1 = prompt("Press (1) to Apply [Insensitve Case Attribute]...\n Press (2) to Apply [Global Attribute]...\n Press (3) to Apply [Multiline Attribute]...\n Press (4) to Apply [All Attribute]...\n Press any other key to Exit...");
                        
                        if (f1 == "1") {
                            alert("Welcome to [Insensitve Case Attribute]");
                            var RResult = Str.replace(/s/i, Rep);
                                                
                            alert("your String After Replacement by [Insensitve Case Attribute] is : [ " + RResult + " ]");                        
                                                                        
                            document.getElementById("txtarea").innerHTML = "Your Default String is\n { " + Str +
                            " } ======================\nYour String After Replacement by [Insensitve Case Attribute] is : \n [ " + RResult + " ]";                                                                                                 
                        } else if (f1 == "2") {
                            alert("Welcome to [Global Attribute]");                            
                            RResult = Str.replace(/s/g, Rep);
                                                
                            alert("your String After Replacement by [Global Attribute] is : [ " + RResult + " ]");     
                                                                        
                            document.getElementById("txtarea").innerHTML = "Your Default String is\n { " + Str +
                            " } ======================\nYour String After Replacement by [Global Attribute] is : \n [ " + RResult + " ]";                                                                                          
                        } else if (f1 == "3") {
                            alert("Welcome to [Multiline Attribute]");                            
                            RResult = Str.replace(/s/g, Rep);
                                                
                            alert("your String After Replacement by [Mulitline Attribute] is : [ " + RResult + " ]");                                                                                               
                            document.getElementById("txtarea").innerHTML = "Your Default String is\n { " + Str +
                            " } ======================\nYour String After Replacement by [Multiline Attribute] is : \n [ " + RResult + " ]";                                                                                                 
                        } else if (f1 == "4") {
                            alert("Welcome to [All Attributes]");                             
                            RResult = Str.replace(/s/gim, Rep);
                                                
                            alert("your String After Replacement by [All Attributes] is : [ " + RResult + " ]");                        
                                                                        
                            document.getElementById("txtarea").innerHTML = "Your Default String is\n { " + Str +
                            " } ======================\nYour String After Replacement by [All Attributes] is : \n [ " + RResult + " ]";                                                      
                        } else {
                            alert("Good bye!");
                            break ChildLoop2; 
                        }                        
                                                
                        var e22 = prompt("Press (1) to restart [Math - Min Function] application, \n or Any other key to Exit current Section ...");

                        if (e22 !== "1") {
                            alert("Good bye!");
                            break ChildLoop2;
                        }                                                            
                    } while (e22 == "1");                    
                                                                    
                break;
            
            case "3" :

                alert("Welcome to [Spliting] REG Function...");                    

                ChildLoop3:                    

                do {
                    
                    var limit = parseInt(prompt("Enter your Spliting Limit :"));
                    
                    f1 = prompt("Press (1) to Apply [Insensitve Case Attribute]...\n Press (2) to Apply [Global Attribute]...\n Press (3) to Apply [Multiline Attribute]...\n Press (4) to Apply [All Attribute]...\n Press any other key to Exit...");

                    if (f1 == "1") {
                        alert("Welcome to [Insensitve Case Attribute]");
                        var SpResult = Str.split(/s/i, limit);

                        alert("your String After Spliting by [Insensitve Case Attribute] is : [ " + SpResult + " ]");                        

                        document.getElementById("txtarea").innerHTML = "Your Default String is\n { " + Str +
                        " } ======================\nYour String After Spliting by [Insensitve Case Attribute] is : \n [ " + SpResult + " ]";                                                                                                 
                    } else if (f1 == "2") {
                        alert("Welcome to [Global Attribute]");                            
                        SpResult = Str.split(/s/g, limit);

                        alert("your String After Spliting by [Global Attribute] is : [ " + SpResult + " ]");                        

                        document.getElementById("txtarea").innerHTML = "Your Default String is\n { " + Str +
                        " } ======================\nYour String After Spliting by [Global Attribute] is : \n [ " + SpResult + " ]";                                                                                          
                    } else if (f1 == "3") {
                        alert("Welcome to [Multiline Attribute]");                            
                        SpResult = Str.split(/s/m, limit);

                        alert("your String After Spliting by [Mulitline Attribute] is : [ " + SpResult + " ]");                                                                                               
                        document.getElementById("txtarea").innerHTML = "Your Default String is\n { " + Str +
                        " } ======================\nYour String After Spliting by [Multiline Attribute] is : \n [ " + SpResult + " ]";                                                                                                 
                    } else if (f1 == "4") {
                        alert("Welcome to [All Attributes]");                             
                        SpResult = Str.split(/s/gim, limit);

                        alert("your String After Spliting by [All Attributes] is : [ " + SpResult + " ]");                        
                        document.getElementById("txtarea").innerHTML = "Your Default String is\n { " + Str +
                        " } ======================\nYour String After Spliting by [All Attributes] is : \n [ " + SpResult + " ]";                                                      
                    } else {
                        alert("Good bye!");
                        break ChildLoop3; 
                    }                        


                    e22 = prompt("Press (1) to restart [REGs Function] application, \n or Any other key to Exit current Section ...");

                    if (e22 !== "1") {
                        alert("Good bye!");
                        break ChildLoop3;
                    }                                                            
                } while (e22 == "1");                    

            break;
                                        
                default :
                    alert("Error Entry !");    
                    break;                                                                                                                         
            }                         
            
            var e0 = prompt("Do you want to Restart the Whole application [REGs Regular Expression]? \nPress (1) to restart the Whole Application, \n or Any other key to Exit...");

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
