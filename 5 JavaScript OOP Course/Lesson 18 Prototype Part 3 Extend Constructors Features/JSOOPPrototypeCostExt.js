/* global document, alert, prompt */

/* JSOOP Lesson (18) : [ Prototype Extend Consturctor Feastueres {Part 3} ] */


function test() {

    var a = prompt("Welcome to [Prototype- Extend Constructor Function Features ] Application \n Press (1) to start the application \n Press any other key to Exit...");
        
    if (a != "1") {
        alert("Good Bye!");
    } else {
        do {
            alert("Welcome to [Prototype- Extend Constructor Function Features] Application ...");            
            function constFunc(name) {
                this.name = name;
                this.welcome =  function() {
                    return `Welcome ${this.name}`;
                };
            }

                    
            var strAll = "";
            var uName = prompt("Enter Value of the default Parameter (Name) of Constructor Function:");
            var nObj = new constFunc(uName);

            a0 = prompt("Press (1) to Add [zFill] Method to Prototype of Built In [String] Constructor Function [Solo-Mult]... \n Press (2) to add [sayYouLoveMe] Method to Prototype of [String Built in Constructor Function] \n Press (3) to Add [zFill] Method to [Prototype Customized Constructor Function]... \n Press (4) to add [sayYouLoveMe] Method to Prototype of Customized Constructor Function \n Press (5) to Add [zFill] Method to Prototype of [Extracted Object] of Customized Constructor Function\n Press (6) to add [sayYouLoveMe] Method to Prototype of [Extracted Object] of Customized Constructor Function \n Press any other key to Exit...");
            
            if (a0 == "1") {               
                

                alert(" Welcome to Add [zFill] Method to Prototype of [String] Constructor Function ... ");                

                                
                String.prototype.zFill= function(width){
                    
                    let uResult = this; 
                    
                    while (uResult.length < width){
                        
                        uResult = `0${uResult}`;                     
                    }
                    return uResult.toString();
                    
                };
                
                alert("Prototype of String Built In Function after Adding new Method [zFill] as follwing :");
                alert(String.prototype);
                
                console.log("Prototype of String Built In Function after Adding new Method [zFill] as follwing :");
                console.log(String.prototype);
                
                var meth = prompt("Press (1) for [Solo Mode] Processing \n Press (2) for [Multiple Mode] Processing  ...");
                
                if (meth == "1"){
                    
                    alert("Welcome to Adding [zFill] method to Prototype of String Built in Constructor Function  [Solo Mode] ...");
                    
                    do {
                        
                        var uValue = prompt("Enter a String Value.."),
                           uWidth = prompt("Enter Your Width limit..");
                        
                        alert("Your Result as follwing :");
                        alert(uValue.zFill(uWidth));
                        
                        console.log("Your Result as follwing :");
                        console.log(uValue.zFill(uWidth));
                        console.log("=======================================");                                                                        
                        
                        var z = prompt("Press (1) to Process [Z-Fill] Method on a new Solo String Value \n or Press any other key to Exit...");
                    } while(z=="1");                                
                    
                    
                } else if (meth == "2") {
                    
                    alert("Welcome to Adding [zFill] method to Prototype of String [Multiple Mode] ...");

                    do {
        
                        var count = prompt("Enter the Count of Values to Persue the [zFill] Mehtod on it..."),
                            uWidth = prompt("Enter the required width: ");

                            var arr = [];
                            
                            for (a=0; a<count; a++) {
                                
                                arr[a] = prompt("Enter String Value Number(" + (a+1) + ")");
                                arr[a].zFill(uWidth);
                                strAll += (arr[a].zFill(uWidth)) + "\n";
                                
                            }
                                                        
                            
                            alert("Your Result [Multiple Mode] as follwing :");
                            alert(strAll);
                            
                            console.log("Your Result [Multiple Mode] as follwing :");
                            console.log(strAll);
                            console.log("=======================================");                                                                        
                            strAll ="";          
                            
                            var z = prompt("Press (1) to Process [Z-Fill] Method on [new Multiple String Values] \n or Press any other key to Exit...");
                        } while(z=="1");                                
                        
                    }
                    
                    //--------------------------------------------------------------------------------------
                } else if (a0 == "2"){
                    
                    alert("Welcome to add [sayYouLoveMe] Method to Prototype of Built in [String] Constructor Function... ");                
                    
                    var mthd = prompt("Press (1) for  [Solo Mode] \n Press (2) for [Multiply Mode]\n press any other dkey to Exit..");
                    
                    if (mthd == "1") {
                        alert("Welcome to [Solo Mode] {Persuing [sayyouloveMe] to a one single String value}");
                        var uName = prompt("Enter your name :");                        
        
                        // Adding new Method to the String Built in Constructor Function Prototype:
                        String.prototype.sayYouLoveMe = function(){ 
                            return `I Love you ${this}`;
                        };
                        
                        
                        // Persuing the [New Method] to a String Value:                                
                        alert("The [Result of String Constructor Funciton Prototype Method] {sayYouLoveMe} as following ... ");                
                        alert(uName.sayYouLoveMe());
                        
                        console.log("The [Result of String Constructor Funciton Prototype Method] {sayYouLoveMe} as following ...");
                        console.log(uName.sayYouLoveMe());
        
                        alert("The [Prototype of String Constructor Function] After Adding new Method [sayYouLoveMe] as following ... ");                
                        alert(String.prototype);
                        
                        console.log("The [Prototype of String Constructor Function] After Adding new Method [sayYouLoveMe] as following ...");
                        console.log(String.prototype);
                        console.log("=======================================");                                                                        
                        
                    } else if (mthd == "2") {
                        
                        alert("Welcome to [Multiple Mode] {Persuing [sayyouloveMe] to a multiple String values}");
                        
                        // Adding new Method [sayYouloveMe] to the String Built in Constructor Function Prototype:
                        String.prototype.sayYouLoveMe = function(){ 
                            return `I Love you ${this}`;
                        };
                        
                        var arr =[],
                            count = prompt ("Enter your Count :"),
                            strAll = "";
                            

                        for (i=0; i<count; i++) {
                            arr[i] = prompt("Enter your String Value nunmber " + (i+1));
                            arr[i].sayYouLoveMe();
                            strAll+= (arr[i].sayYouLoveMe()) + "\n ------------------ \n";
                        }
                                                                                                    
                        alert("The [Result of String Constructor Funciton Prototype Method] {sayYouLoveMe} on [Multiple Mode] as following ... ");                
                        alert(strAll);
                        
                        console.log("The [Result of String Constructor Funciton Prototype Method] {sayYouLoveMe} on [Multiple Mode] as following ...");
                        console.log(strAll);
        
                        alert("The [Prototype of String Constructor Function] After Adding new Method [sayYouLoveMe] as following ... ");                
                        alert(String.prototype);
                        
                        console.log("The [Prototype of String Constructor Function] After Adding new Method [sayYouLoveMe] as following ...");
                        console.log(String.prototype);
                        strAll = "";
                        console.log("=======================================");                                                                        
                        
                } else {
                    alert("Good Bye!");
                }


                //----------------------------------------------------------------------------------------
                
            } else if (a0 == "3"){
                
                alert("Welcome to Add [zFill] Method to Prototype Customized Constructor Function... ");                
                
                constFunc.prototype.zFill = function(width) {
                    let uResult = this; 
                    
                    while (uResult.length < width) {
                        
                        uResult = `0${uResult}`;
                    }
                    
                    return uResult.toString();
                };
 
                
                alert("The New Method (zFill) as Following ... ");                
                alert(constFunc.prototype.zFill);
                
                console.log("The New Method (zFill) as Following ...");
                console.log(constFunc.prototype.zFill);
                console.log("=======================================");                                                                        
                
                
                
                alert("[Prototype of Customized Construcrtor Function] after Adding new Method (zFill) as Following ... ");                
                alert(constFunc.prototype);
                
                console.log("[Prototype of Customized Construcrtor Function] after Adding new Method (zFill) as following ... ");
                console.log(constFunc.prototype);
                console.log("=======================================");                                                                        
                
                alert("[Main Customized Construcrtor Function] after Adding new Method (zFill) as Following ... ");                
                alert(constFunc);
                
                console.log("[Main Customized Construcrtor Function] after Adding new Method (zFill) as following ... ");
                console.log(constFunc);
                console.log("=======================================");                                                                        
                //--------------------------------------------------------------------------------------
                
            } else if (a0 == "4"){
                
                alert("Welcome to add [sayYouLoveMe] Method to Prototype of [Customized Constructor Function]... ");                
                
                var uName = prompt("Enter your name :");
                
                constFunc.prototype.sayYouLoveMe = function(){ 
                    return `I Love you ${this}`;
                }; 
                                
                
                alert("The New Method (sayYouLoveMe) as Following ... ");                
                alert(constFunc.prototype.sayYouLoveMe);
                
                console.log("The New Method (sayYouLoveMe) as Following ...");
                console.log(constFunc.prototype.sayYouLoveMe);
                console.log("=======================================");                                                                        
                
                
                alert("The [Prototype of Customized Constructor Function] After Adding new Method [sayYouLoveMe] as following ... ");                
                alert(constFunc.prototype);
                
                console.log("The [Prototype of Customized Constructor Function] After Adding new Method [sayYouLoveMe] as following ...");
                console.log(constFunc.prototype);
                console.log("=======================================");                                                                        
                
                alert("[Main Customized Construcrtor Function] after Adding new Method (zFill) as Following ... ");                
                alert(constFunc);
                
                console.log("[Main Customized Construcrtor Function] after Adding new Method (zFill) as following ... ");
                console.log(constFunc);
                console.log("=======================================");                                                                        
                //--------------------------------------------------------------------------------------
                
    /*

                // Can Not Add a Method to a simple object (only to a function)!
            } else if (a0 == "5"){
                
                alert("Welcome to Add [zFill] Method to [Prototype of Extracted Object Constructor Function]... ");                
                
                nObj.prototype.zFill = function(width) {
                    let uResult = this; 
                    
                    while (uResult.length < width) {
                        
                        uResult = `0${uResult}`;
                    }
                    
                    return uResult.toString();
                }
                
                
                alert("The New Method (zFill) as Following ... ");                
                alert(nObj.prototype.zFill);
                
                console.log("The New Method (zFill) as Following ...");
                console.log(nObj.prototype.zFill);
                console.log("=======================================");                                                                        
                
                alert("[Prototype of Extracted Object Constructor Function] after Adding new Method (zFill) as Following ... ");                
                alert(nObj.prototype);
                
                console.log("[Prototype of Extracted Object Constructor Function] after Adding new Method (zFill) as following ... ");
                console.log(nObj.prototype);
                console.log("=======================================");                                                                        

                alert("[Prototype of Extracted Object Constructor Function] after Adding new Method (zFill) as Following ... ");                
                alert(nObj.prototype);
                
                console.log("[Prototype of Extracted Object Constructor Function] after Adding new Method (zFill) as following ... ");
                console.log(nObj.prototype);
                console.log("=======================================");                                                                        

                alert("[Prototype of Extracted Object Constructor Function] after Adding new Method (zFill) as Following ... ");                
                alert(nObj.prototype);
                
                console.log("[Prototype of Extracted Object Constructor Function] after Adding new Method (zFill) as following ... ");
                console.log(nObj.prototype);
                console.log("=======================================");                                                                        
                //--------------------------------------------------------------------------------------
                
            } else if (a0 == "6"){
                
                alert("Welcome to add [sayYouLoveMe] Method to [Prototype of Extracted Object Constructor Function]... ");                
                
                var uName = prompt("Enter your name :");
                                
                nObj.prototype.sayYouLoveMe = function(){ 
                    return `I Love you ${this}`;
                } 
                
                
                alert("The [Prototype of Extracted Object Constructor Function] After Adding new Method [sayYouLoveMe] as following ... ");                
                alert(nObj.prototype);
                
                console.log("The [Prototype of Extracted Object Constructor Function] After Adding new Method [sayYouLoveMe] as following ...");
                console.log(nObj.prototype);
                console.log("=======================================");                                                                        

*/
            } else {
                alert("Error Entry!");

            }

            var z = prompt("Press (1) to Restart the Application \n Press any other key to Exit.... ");

        } while (z == "1");

    }
    
}
// ----------------------------------------------------------------------------------------

 
function Display1() {
    document.getElementById('txtarea1').textContent = test;
}

// function Display2() {
//     document.getElementById('txtarea2').textContent = constProps;
// }


