/* global document, alert, prompt */

/* JSOOP [ Prototype Add {Part 2} ] */


function test() {

    var a = prompt("Welcome to [Prototype-Add to Chain] Application \n Press (1) to start the application \n Press any other key to Exit...");
        
    if (a != "1") {
        alert("Good Bye!");
    } else {
        do {
            alert("Welcome to [Prototype Add to Chain] Application ...");            
            function constFunc(name) {
                this.name = name;
                this.welcome =  function() {
                    return `Welcome ${this.name}`;
                }
            }
                    
            var strAll = "";
            var uName = prompt("Enter Value of the default Parameter (Name) of Constructor Function:");
            var nObj = new constFunc(uName);

            a0 = prompt("Press (1) to Display main Constructor Function + Extracted Object\n Press (2) to display the Prototype of Constructor Function \nPress (3) for Adding new Properties to the main Constructor Function \n Press (4) to add new Methods to Main Contructor Function\n Press any other key to Exit...");
            
            if (a0 == "1") {               
                
                alert("The [Main Default Constructor Function] as following ... ");                
                alert(constFunc);
                
                console.log("The [Main Default Constructor Function] as following ... ");
                console.log(constFunc);

                alert("The [Main Default Extracted Object of the Constructor Function] as following ... ");                
                alert(nObj);
                
                console.log("The [Main Default Extracted Object of the Constructor Function] as following ... ");
                console.log(nObj);
                
            } else if (a0 == "2"){
                
                alert("The [Main Prototype of the Default Constructor Function] as following ... ");                
                alert(constFunc.prototype);
                
                console.log("The [Main Prototype of the Default Constructor Function] as following ... ");
                console.log(constFunc.prototype);
                console.log("=======================================");                                                

            } else if (a0 == "3"){
                
                alert("Welcome to [Adding new Propreties] to Prototype...");
                a3 = prompt("Press (1) to [add Single Property] \n Press (2) to [add Multiple Properties]....  ");                
                
                switch (a3) {

                    case "1" :
                        
                        do {
                            //var uName = prompt("Enter your Name:");
                            
                            var propName = prompt("Enter the New Property Name to Add to the Prototype of the Main Constructor Function : "),
                                propValue = prompt("Enter the New Property's Value");
                            
                            
                            constFunc.prototype[propName] = propValue;
                                
                            alert(`The [Pototype] of the consturctor Function after adding new Property [${propName}] as Following :`);
                            alert(constFunc.prototype);
                            
                            console.log(`The [Pototype of the consturctor Function] after adding new Property [${propName}] as Following :`);
                            console.log(constFunc.prototype);
                            console.log("=======================================");
                            
                            alert(`The [Main consturctor Function] after adding new Property [${propName}] to the Prototype as Following :`);
                            alert(constFunc);
                            
                            console.log(`The [Main consturctor Function] after adding new Property [${propName}] to the Prototype as Following :`);
                            console.log(constFunc);
                            console.log("=======================================" );
                            
                            alert(`The [Main Default Extracted Object] of the Constructor Function After Adding new Property [${propName}] to the Prototype as Following :`);
                            alert(nObj);
                            
                            console.log(`The [Main Default Extracted Object] of the Constructor Function After Adding new Property [${propName}] to the Prototype as Following :`);
                            console.log(nObj);
                            console.log("=======================================" );                                            

                            var z0 = prompt("Press (1) to [Add new Property] to the Prototype of the Main Constructor Function \n or Press any other key to Exit ...");
                        } while (z0 == "1");

                        break;
                
                    case "2" :

                        do {
                            //var uName = prompt("Enter your Name:");
                            
                            var propNames = [],
                                propValues = [],
                                count = parseInt(prompt("Enter Number of Properties to add to the Prototype :"));

                                for (i= 0; i<count; i++) {

                                propNames[i] = prompt("Enter new Property name Number " + (i+1) + " :");
                                propValues[i] = prompt("Enter the Value of new Property [" + propNames[i] + "] Number " + (i+1) + " :");
                                
                                constFunc.prototype[propNames[i]] = propValues[i];
                                
                                strAll += "New Property Number " + (i+1) + " as following:\n [" + propNames[i] + "] : \"" + propValues[i] + "\"\n ------------------------------------------\n";
                            }

                            alert("All New Properties as following :");
                            alert(strAll);
                            
                            
                            console.log("All New Properties as following :");
                            console.log(strAll + "\n =======================================");


                            alert("Your [Prototype] after adding all New properties as following:");
                            alert(constFunc.prototype);
                            
                            
                            console.log("Your Prototype after adding all New properties as following:");                            
                            console.log(constFunc.prototype);
                            console.log(" =========================================");
                            
                            alert("Your [Main Constructor Function] after adding all New properties as following:");
                            alert(constFunc);
                            
                            
                            console.log("Your [Main Constructor Function] after adding all New properties as following:");
                            console.log(constFunc);
                            console.log("=========================================");

                            alert("The [Main Default Extracted Object] of the Constructor Function After Adding new Property to Prototype as following ... ");                
                            alert(nObj);
                            
                            console.log("The [Main Default Extracted Object] of the Constructor Function Adding new Property to Prototype as following ... ");
                            console.log(nObj);

                            var z00 = prompt("Press (1) to [Add new Properties] to the Prototype of the Main Constructor Function \n or Press any other key to Exit ..."); 
                        } while (z00 == "1");

                        break;
                    
                    default:
                        alert("Error Entry !");
                        break;
                
                }


            } else if (a0 == "4"){

                do {

                    alert("Welcome to [Adding new Methods] to Prototype...");
    
                    alert("There will be (3) Default Methods to add to Prototype of Constructor function as Follwing: \n(1) Full Name Method \n (2) Age Method \n (3) Full Address Method ");
    
                    a4 = prompt("Press (1) to add Single Method \n Press (2) to add Multiple Methods....");                
    
                    if (a4 == "1") {
                        
                        alert("Welcome to [Add new single Method] to the Prototype of Constructor Function...");
                        
                        mthd = prompt("Press (1) to Add Full Name Method \n Press (2) Age Method \n Press (3) Full Address Method");

                        switch (mthd) {
                            case "1" :
                                var ufullName = prompt("Enter Your Full Name:");    

                                constFunc.prototype.fullName = () => ` Welcome ${ufullName}`;

                                alert("The [Pototype of the consturctor Function] after adding new Method as Following :");
                                alert(constFunc.prototype);
                                
                                console.log("The [Pototype of the consturctor Function] after adding new Method as Following :");
                                console.log(constFunc.prototype);
                                console.log("=======================================");
                                
                                alert("The [Main consturctor Function ]after adding new Method as Following :");
                                alert(constFunc);
                                
                                console.log("The [Main consturctor Function] after adding new Method as Following :");
                                console.log(constFunc);
                                console.log("=======================================" );
                    
                                alert("The [Main Default Extracted Object of the Constructor Function] After Adding new Method to Prototype as following ... ");                
                                alert(nObj);
                                
                                console.log("The [Main Default Extracted Object of the Constructor Function] Adding new Method to Prototype as following ... ");
                                console.log(nObj);

                                break;
                        
                            case "2" :
                                var uAge = prompt("Enter Your Age:");    

                                constFunc.prototype.age = () => `Welcome ${uAge}`;
                                
                                alert("The [Pototype of the consturctor Function] after adding new Method as Following :");
                                alert(constFunc.prototype);
                                
                                console.log("The [Pototype of the consturctor Function] after adding new Method as Following :");
                                console.log(constFunc.prototype);
                                console.log("=======================================");
                                
                                alert("The [Main consturctor Function] after adding new Method as Following :");
                                alert(constFunc);
                                
                                console.log("The [Main consturctor Function] after adding new Method as Following :");
                                console.log(constFunc);
                                console.log("=======================================" );
                    
                                alert("The [Main Default Extracted Object of the Constructor Function] After Adding new Method to Prototype as following ... ");                
                                alert(nObj);
                                
                                console.log("The [Main Default Extracted Object of the Constructor Function] Adding new Method to Prototype as following ... ");
                                console.log(nObj);

                                break;

                            case "3" :
                                var uFullAdd = prompt("Enter Your full Address:");    

                                constFunc.prototype.fullAdd = () => `Welcome ${uFullAdd}`;

                                alert("The [Pototype of the consturctor Function] after adding new Method as Following :");
                                alert(constFunc.prototype);
                                
                                console.log("The [Pototype of the consturctor Function] after adding new Method as Following :");
                                console.log(constFunc.prototype);
                                console.log("=======================================");
                                
                                alert("The [Main consturctor Function] after adding new Method as Following :");
                                alert(constFunc);
                                
                                console.log("The [Main consturctor Function] after adding new Method as Following :");
                                console.log(constFunc);
                                console.log("=======================================" );
                    
                                alert("The [Main Default Extracted Object of the Constructor Function] After Adding new Method to Prototype as following ... ");                
                                alert(nObj);
                                
                                console.log("The [Main Default Extracted Object of the Constructor Function] After Adding new Method to Prototype as following ... ");
                                console.log(nObj);

                                break;                            

                            default:
                                alert("Error Entry!");
                                break;
                        }
                        
                        

                    } else if (a4 == "2") {
    
                        alert("Welcome to [add new Multiple Methods] to the Prototype of Constructor Function...");
                        

                        var uFullName = prompt("Enter Your Full Name:");    

                        constFunc.prototype.fullName = () => ` Welcome ${uFullName}`;
                         
                        
                        var uAge = prompt("Enter Your Age:");    
    
                        constFunc.prototype.age = () => ` Welcome ${uAge}`;


                        var uFullAdd = prompt("Enter Your full Address:");    

                        constFunc.prototype.fullAdd = () => ` Welcome ${uFullAdd}`;
                        
                        alert("The [Pototype of the consturctor Function] after adding new Methods as Following :");
                        alert(constFunc.prototype);
                        
                        console.log("The [Pototype of the consturctor Function] after adding new Methods as Following :");
                        console.log(constFunc.prototype);
                        console.log("=======================================");
                        
                        alert("The [Main consturctor Function] after adding new Methods as Following :");
                        alert(constFunc);
                        
                        console.log("The [Main consturctor Function] after adding new Methods as Following :");
                        console.log(constFunc);
                        console.log("=======================================" );
            
                        alert("The [Main Default Extracted Object] of the Constructor Function After Adding new Methods to Prototype as following ... ");                
                        alert(nObj);
                        
                        console.log("The [Main Default Extracted Object] of the Constructor Function After Adding new Methods to Prototype as following ... ");
                        console.log(nObj);


    
                    } else  {
                        alert("Error Entry!");
                    }
                    
                    var z000 = prompt("Press (1) to Restart the Application\n or Press any other key to Exit... ");
                } while (z000 == "1");


                
            } else {
                alert("Error Entry!");

            }

            var z = prompt("Press (1) to Restart the Application \n Press any other key to Exit.... ");

        } while (z == "1");

    }
    
}

//-------------------------------------------------------------------------------------------


function Display1() {
    document.getElementById('txtarea1').textContent = test;
}


