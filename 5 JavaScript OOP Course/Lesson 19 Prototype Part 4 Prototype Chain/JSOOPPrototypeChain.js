/* global document, alert, prompt */

/* JSOOP [ Prototype Chain {Part4} ] */


function test() {

    var a = prompt("Welcome to [Prototype- Chain ] Application \n Press (1) to start the application \n Press any other key to Exit...");
        
    if (a != "1") {
        alert("Good Bye!");
    } else {
        do {
            alert("Welcome to [Prototype- chain] Application ...");    
            console.log("Welcome to [Prototype- chain] Application ...");    
            
            var uName = prompt("Enter Value of the default Parameter (Name) of Constructor Function:");

            function constFunc(name) {
                this.name = name;                
            }

            alert("The Following is a Default Constructor Function :");
            console.log("The Following is a Default Constructor Function :");
            
            alert(constFunc);
            console.log(constFunc);
                                                
            a0 = prompt("Press (1) to Display the (Prototype of Default Constructor Function)... \n Press (2) to Extract a new Object + performing Prototypes & Cheking of Creation Method ... \n Press (3) to Defining a new Variable as Extracted object from built in Constructor Function [Array] ..\n  Press (4) to Defining a new Variable as Extracted Object from built in Constructor Function [String] ... \n Press (5) to Defining a new Variable as Extracted Object from built in Constructor Function [Nubmer] ... \n Press (6) to Defining a new Variable as Extracted Object from built in Constructor Function [Boolean] ... \n Press any other key to Exit...");
            
            if (a0 == "1") {               
                
                
                alert("The Prototype of Default Constructor function as follwing :");
                alert(constFunc.prototype);
                
                console.log("The Prototype of Default Constructor function as follwing :");
                console.log(constFunc.prototype);
                
                
                //--------------------------------------------------------------------------------------
            } else if (a0 == "2"){
                
                alert("Welcome to Extracting new Object from [Constructor Function]... ");                
                
                var mthd = prompt("Press (1) for [Extracting a new Object {using (new keyword)}] ... \n Press (2) for [Extracting a new Object {without using (new keyword)}] \n press any other key to Exit..");
                        
                if (mthd == "1") {
                    
                    alert("Welcome to [Extracting a new Object {using (new keyword)}]");
                    var uName = prompt("Enter your name new Object of Parameter :");                        
    
                    // Extracting-Defining new Object from Default Constructor Function [ConstFunc] using {new keyword}:
                    let user1 = new constFunc(uName);
                    
                    // Displaying new Extracted Object:                                
                    alert("The [New object] as following ... ");                
                    alert(user1);
                    
                    console.log("The [New object] as following ... ");                
                    console.log(user1);                                            
                    console.log("=======================================");                                                                        
                    
                    // Displaying new Object's Prototype:                                
                    alert("The [New object Prototype] as following ... ");                
                    alert(user1.prototype);
                    
                    console.log("The [New object Prototype] as following ... ");                
                    console.log(user1.prototype);                                                                
                    console.log("=======================================");                  
                    
                    // Checking of Creation Method of new Object :                                                    
                    var check = prompt("Press (1) for [instanceof] Method... \n Press (2) for [ES6] Method...\n press any other key to exit ...");
                    
                    if (check == "1") {
                        alert("Welcome to [instanceof] Checking Method ");                
                        alert("Checking Result as following :");                

                        if (!(user1 instanceof constFunc)){
                            alert('The Created Object is [Not by (new keyword)]');
                            console.log("The Created Object is [Not by (new keyword)]");
                            throw new Error('The Created Object is [Not by (new keyword)]');                        
                            
                        } else {
                            alert('The Created Object is [by new keyword]');
                            console.log("The Created Object is [by new keyword]");
                            throw new Error('The Created Object is [by new keyword]');                                                    
                        }
                        
                    } else if (check == "2") {
                        
                        alert("Welcome to [ES6] Checking Method ");                
                        alert("Checking Result as following :");                

                        if (!new.target){
                            alert('The Created Object is [Not by (new keyword)]');
                            console.log("The Created Object is [Not by (new keyword)]");
                            throw new Error('The Created Object is [Not by (new keyword)]');                        
                            
                        } else {
                            alert('The Created Object is [by new keyword]');
                            console.log("The Created Object is [by new keyword]");
                            throw new Error('The Created Object is [by new keyword]');                                                    
                        }

                    } else {
                        alert("Error Entry!");
                    }
                                                            

            // ==================================================================================   
                } else if (mthd == "2") {
                    
                    alert("Welcome to [Extracting a new Object {Without using (new keyword)}]");
                    var uName = prompt("Enter your name new Object of Parameter :");                        
    
                    // Extracting-Defining new Object from Default Constructor Function [ConstFunc] {without using new keyword}:
                    let user2 = constFunc(uName);
                    
                    // Displaying new Extracted Object:                                
                    alert("The [New object] as following ... ");                
                    alert(user2);
                    
                    console.log("The [New object] as following ... ");                
                    console.log(user2);                                            
                    console.log("=======================================");                                                                        
                    
                    // Displaying new Object's Prototype:                                
                    alert("The [New object Prototype] as following ... ");                
                    alert(user2.prototype);
                    
                    console.log("The [New object Prototype] as following ... ");                
                    console.log(user2.prototype);                                                                
                    console.log("=======================================");                  
                    
                    // Checking of Creation Method of new Object :                                                    
                    var check = prompt("Press (1) for [instanceof] Method... \n Press (2) for [ES6] Method...\n press any other key to exit ...");
                    
                    if (check == "1") {
                        alert("Welcome to [instanceof] Checking Method ");                
                        alert("Checking Result as following :");                

                        if (!(user2 instanceof constFunc)){
                            alert('The Created Object is [Not by (new keyword)]');
                            console.log("The Created Object is [Not by (new keyword)]");
                            throw new Error('The Created Object is [Not by (new keyword)]');                        
                            
                        } else {
                            alert('The Created Object is [by new keyword]');
                            console.log("The Created Object is [by new keyword]");
                            throw new Error('The Created Object is [by new keyword]');                                                    
                        }
                        
                    } else if (check == "2") {
                        
                        alert("Welcome to [ES6] Checking Method ");                
                        alert("Checking Result as following :");                

                        if (!new.target){
                            alert('The Created Object is [Not by (new keyword)]');
                            console.log("The Created Object is [Not by (new keyword)]");
                            throw new Error('The Created Object is [Not by (new keyword)]');                        
                            
                        } else {
                            alert('The Created Object is [by new keyword]');
                            console.log("The Created Object is [by new keyword]");
                            throw new Error('The Created Object is [by new keyword]');                                                    
                        }

                    } else {
                        alert("Error Entry!");
                    }
                                                                
                            
                } else {
                    alert("Good Bye!");
                }

//----------------------------------------------------------------------------------------------------------------------------
            } else if (a0 == "3") {
                alert("Welcome to Defining a new Variable as Extracted object from built in Constructor Function [Array] ...");
                
                var arr = [],
                strAll = "",
                count = prompt("Enter the Array Count");

                alert("Lets Enter your Array elements Below: ");
                for (i=0 ; i <count; i++){
                    arr[i] = prompt("Enter Array Value nubmer " + (i+1));
                    strAll += arr[i] + "\n ---------------------------\n";
                }

                alert('Your Array Elements as Following :');                
                alert(strAll);
                
                console.log('Your Array Elements as Following :');                
                console.log(strAll);
                console.log("--------------------------------------------");
                
                
                alert('Your Array [Prototype] as Following :');                
                alert(arr);
                
                console.log('Your Array [Prototype] as Following : :');                
                console.log(arr);
                console.log("--------------------------------------------");
                
                
        //----------------------------------------------------------------------------------------------------------------------------
        
            } else if (a0 == "4") {
                alert("Welcome to Defining a new Variable as Extracted object from built in Constructor Function [String] ...");
                
                var str = prompt("Enter your String value ...");
                                                                
                alert('Your String [Prototype] as Following :');                
                alert(str);
                
                console.log('Your String [Prototype] as Following :');                
                console.log(str);
                console.log("--------------------------------------------");
                
        
        //----------------------------------------------------------------------------------------------------------------------------
            } else if (a0 == "5") {
                alert("Welcome to Defining a new Variable as Extracted object from built in Constructor Function [Number] ...");
                
                var num = parseInt(prompt("Enter your Nubmer value ..."));
                                                                
                alert('Your Number [Prototype] as Following :');                
                alert(num);
                
                console.log('Your String [Prototype] as Following :');                
                console.log(num);
                console.log("--------------------------------------------");
                        
        //----------------------------------------------------------------------------------------------------------------------------
            } else if (a0 == "6") {
                alert("Welcome to Defining a new Variable as Extracted object from built in Constructor Function [Boolean] ...");
                
                var bol = prompt("Enter your Boolean value ...");
                                                                
                alert('Your Boolean [Prototype] as Following :');                
                alert(bol);
                
                console.log('Your Boolean [Prototype] as Following :');                
                console.log(bol);
                console.log("--------------------------------------------");
                        
        //----------------------------------------------------------------------------------------------------------------------------
            } else {
                alert("Error Entry!");

            }
            
            var z = prompt("Press (1) to Restart the Application \n Press any other key to Exit.... ");
            
        } while (z == "1");
        
    }
    
}

// ==========================================================================================================

function Display1() {
    document.getElementById('txtarea1').textContent = test;
}




