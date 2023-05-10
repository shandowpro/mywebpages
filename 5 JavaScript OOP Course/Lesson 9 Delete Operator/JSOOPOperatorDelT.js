/* global document, alert, prompt */

/* JSOOP [Delete Operator + Configurable Flag + Define Property + Freeze Object] */


function objCreator() {
    var fun = prompt("Please choose your Object type to create..\n Press (1) for [Ordinary object Control] with {configurable Mode: true - Deletable}...\n Press (2) for Ordinary with {configurable Mode: false - Un-Deletable}... \n Press (3) for Freezed Object... ");

    if (fun == "1") {
        alert("Welcome to [Ordinary Object Control (one property mode + multiple property mode) - {configurable Mode: true - Deletable} ] ");
        objCreator1();        
        
    }  else if (fun == "2") {
        
        alert("Welcome to [Oridinary Object Control (one property mode + multiple property mode) -  {configurable Mode: false - Un-Deletable}] ");
        objCreator2();
        
    }  else if (fun == "3") {
        
        alert("Welcome to [Freezed Object Control] (one property mode + multiple property mode) ");
        objCreator3();

    } else {
        alert("Good Bye!"); 
    }


}

//=====================================================================================================================================

function objCreator1() {    
    
    // [Ordinary object Control (one + Multiple)] with {configurable Mode: TRUE - Deletable}...
    var mthd = prompt("Choose among the Following Applications\n Press (1) for (One property) [Ordinary Object Controling] ...  \n  Press (2) for (Multiple Properties) [Ordinary Object Controling ]...\n Press Any other key to exit... ");
    
    if (mthd == "1") {
        
        alert("Welcome to (one property) [Ordinary Object Control - deletable properties ] Application ...");
        alert("let's start inserting your Object's Properties...");
        
        const obj = Object.assign({}); 
        

        
        do {
            var name = prompt("Enter your property key name "),
            value1 = prompt("Enter your property value ");
            
            Object.defineProperty(obj, name, {value:value1, configurable:true});
            
            console.log(obj.name);
            console.log(obj);
            
            var z = prompt("Press (1) to Insert another key to the your object\n or press aoy key to exit..."); 
            if (z!="1") {
                alert("Adding new properties has been Cancel");
                alert("Good bye!");
            }
        } while (z == "1");
        
        
        var del = prompt("Press (1) to delete you property ... \n press any other key to exit...");
        
        if (del == "1") {
            
            alert("lets delete your property...");
            
            var propName = prompt("Enter your Property's Name to delete it from Object");
            var objCount = Object.key(obj).length;
            
            delete obj.propName;
            
            // printnig new object property:
            alert("your object' property after deletion as following: ");            
            alert(obj[propName]);
            document.getElementById("txtarea").innerHTML += "your object' property after deletion as following: ";
            document.getElementById("txtarea").innerHTML += obj[propName];
            console.log(obj[propName]);
            
            
            // printnig new object property:
           alert("your object after deletion as following: \n" + obj);
           console.log(obj);
           
           document.getElementById("txtarea").innerHTML += "Your all object proerties after deletion as following: \n";
           document.getElementById("txtarea").innerHTML += obj + "\n" ;
           document.getElementById("txtarea").innerHTML += "All object properties count = " + objCount + "\n";
                      
           
        } else {
            alert("Deleting process has been Canceled!...");
            alert("Your last updating Object properties as following ...");          
            
            // printnig new object property:
            alert(obj[propName]);
            document.getElementById("txtarea").innerHTML += "your object' property after deletion as following: ";
            document.getElementById("txtarea").innerHTML += obj[propName];
            console.log(obj[propName]);
            
            
            // printnig All object properties:
           alert("your object after deletion as following: \n" + obj);           
           document.getElementById("txtarea").innerHTML += "Your all object proerties after deletion as following: \n";
           document.getElementById("txtarea").innerHTML += obj;
           console.log(obj);
        }
        
        
    } else if (mthd == "2") {
        
        alert("Welcome to (Multiple properties) [Ordinary Object Control] Application ...");
        alert("let's start inserting your Object's Properties...");
        
        const obj = Object.assign({});                 
        
        var propCount = parseInt(prompt("Enter your count of your object properties"));
        
        var names = [],
            values = [];

                    
        for (a=0; a < propCount; a++ ) {
                
            names[a] = prompt("Enter your property Key Name of property number " + (a+1));
            values[a] = prompt("Enter your property value of property number " + (a+1));

            Object.defineProperty(obj, names[a], {value:values[a], configurable:true});
                    
            console.log("Your object's new property as following: \n" + names[a] + ":" +  obj[names[a]]);
            console.log("Your Last update of your object as follwoing :");
            console.log(obj);

            alert("Your object's new property as following: \n" + names[a] + ":" +  values[a] + "\n");
            
            document.getElementById("txtarea").innerHTML += "Your object's new property as following:" + '\n' + names[a] + ":" +  values[a] + '\n' ;
            
            alert("Your Last update of your object as follwoing :");
            
            for (b=0; b<propCount; b++) {

                document.getElementById("txtarea").innerHTML += "Your Object property number (" + (b+1) + ") as following :" + '\n' + names[b] + ": \"" +  values[b] + '\"\n';
                alert("Your Object property number (" + (b+1) + ") as following :" + '\n' + names[b] + " : \"" +  values[b] + '\"\n');
            }
                                                    

        }
        
        var del = prompt("press (1) to delete your property ... \n press any other key to exit..."),
            objCount = Object.key(obj).length;

        if (del == "1") {
            alert("your object's Properties count =  " + objCount );


            do {
                        
                var propNum = parseInt(prompt("Enter your object's property number :"))-1;
                
                if ((propNum+1) > objCount) {
                    alert ("your object proerty is out of Range (Greater than properties length)!");

                } else {
                    if (propNum < 0 ) {
                        alert("Not valid number (= Zero / Negative Value)!");

                    } else {
                        alert("lets delete your property of number : (" + (propNum+1) + ")");
                        
                        delete obj[names[propNum]];
                                        
                        // Printing deleted Object's properties after Deletion Process:
                        alert("Your object'Property value after deletion as following: ");                                
                        
                        console.log(obj[names[propNum]]);

                        document.getElementById("txtarea").innerHTML += "your Object count after deletion =" + objCount +
                        "Your object'Property value after deletion as following" + "\n" + obj[names[propNum]] + "\"\n" ;
                        
                        alert("your Object count after deletion =" + objCount +
                        "\nYour object'Property value after deletion as following" + "\n" + obj[names[propNum]] + "\"\n" );                                
                                                                                                                                
                        // Printing all Object properties after Deletion Process:
                        alert("your Object's properites count after deletion =(" + objCount + ")\nYour All object last update after deletion as following: ");

                        for (b=0; b<objCount; b++) {

                            document.getElementById("txtarea").innerHTML += "Your Object property number (" + (b+1) + ") :" + '\n' + obj[names[b]] + '\"\n';
                            
                            alert("Your Object property number (" + (b+1) + ") :" + '\n' + names[b] + " : \"" +  values[b] + '\"\n');
                        }

                        console.log(obj);                        
                        
                    }
                    
                }
                
                var z = prompt("Press (1) to delete another property ...");
            } while (z == "1");
                        
            
        } else {
            alert("Good bye!");
        }        

    } else {
        alert("Good Bye!");
    }

}

    //=====================================================================================================================================

function objCreator2() {
    // [Ordinary object Control (one + Multiple)] with {configurable Mode: FALSE - Deletable}...                

    
    var mthd = prompt("Choose among the Following Applications\n Press (1) for (One property) [Ordinary Object Controling {configurable Mode: false - Un-Deletable} ] ...  \n  Press (2) for (Multiple Properties) [Ordinary Object Controling {configurable Mode: false - Un-Deletable}]...\n Press Any other key to exit... ");
    
    if (mthd == "1") {
        
        alert("Welcome to (One property) [Ordinary Object Control - Un-deletable properties ] Application ...");
        alert("let's start inserting your Object's Properties...");
        
        const obj = Object.assign({});

        do {
            var name = prompt("Enter your property key name "),
                value1 = prompt("Enter your property value ");
            
            Object.defineProperty(obj, name, {value:value1, configurable:true});
            
            console.log(obj.name);
            console.log(obj);
        
            var z = prompt("Press (1) to Insert another key to the your object\n or press aoy key to exit..."); 
            if (z!="1") {
                alert("Adding new properties has been Cancel");
                alert("Good bye!");
            }
        } while (z == "1");
        

        var del = prompt("Press (1) to delete you property ... \n press any other key to exit...");
        
        if (del == "1") {
            
            alert("lets delete your property...");
            
            var propName = prompt("Enter your Property's key Name to delete it from Object");
            
            delete obj.propName;
            
            // printnig new object property:
            alert("your object' property after deletion as following: ");
            
            alert(obj[propName]);
            document.getElementById("txtarea").innerHTML += "your object' property after deletion as following: ";
            document.getElementById("txtarea").innerHTML += obj[propName];
            console.log(obj[propName]);
            
            
            // printnig new object property:
            alert("your object after deletion as following: \n" + obj);
            console.log(obj);
            document.getElementById("txtarea").innerHTML += "Your all object proerties after deletion as following: \n";
            document.getElementById("txtarea").innerHTML += obj;
            console.log(obj);
            
        } else {
            alert("Deleting process has been Canceled!...");
            alert("Good bye!");
        }

    } else if (mthd == "2") {

        alert("Welcome to (Multiple properties) [Ordinary Object Control - Un-deletable Properties] Application ...");
        alert("let's start inserting your Object's Properties...");
        
        const obj = Object.assign({});         
        
        var propCount = parseInt(prompt("Enter your count of your object properties to Create.."));
        
        var names = [],
            values = [];

            
        for (a=0; a < propCount; a++ ) {
            
            names[a] = prompt("Enter your property Key Name of property number " + (a+1));
            values[a] = prompt("Enter your property value of property number " + (a+1));

            Object.defineProperty(obj, names[a], {value:values[a], configurable:false});
                    
            console.log("Your object's new property as following: \n" + names[a] + ":" +  obj[names[a]]);
            console.log("Your Last update of your object as follwoing :");
            console.log(obj);

            document.getElementById("txtarea").innerHTML += "Your object's new property as following:" + "<br>" + names[a] + ":" +  obj[names[a]] + "<br>" ;
            
            document.getElementById("txtarea").innerHTML += "Your Last update of your object as follwoing :" + "<br>" + obj + "<br>";
            
            alert("Your object's new property as following: \n" + names[a] + ":" +  obj[names[a]] + "\n");
            alert("Your Last update of your object as follwoing :\n" + obj + "\n");
            

        }
        
        var del = prompt("press (1) to delete you property ... \n press any other key to exit..."),
            countNames = names.length;

        if (del == "1") {
            
            do {
                        
                var propNum = parseInt(prompt("Enter your object's property number :"))-1;
                
                if ((propNum+1) > countNames) {
                    alert ("your object proerty is out of Range (Greater than properties length)!");

                } else {
                    if (propNum < 0 ) {
                        alert("Not valid number (= Zero / Negative Value)!");

                    } else {
                        alert("lets delete your property of number : (" + (propNum+1) + ")");
                        
                        delete obj[names[propNum]];
                                        
                        alert("your object' property after deletion as following: ");                                
                        
                        console.log(obj[names[propNum]]);
                        document.getElementById("txtarea").innerHTML += "Your object's new property as following:" + "\n" + names[propNum] + ":" +  obj[names[propNum]] + "\n" ;
                        alert(obj[names[propNum]]);                                
                        
                                                                                
                        
                        alert("your object last update after deletion as following: ");

                        console.log(obj);
                        document.getElementById("txtarea").innerHTML += "Your object's new property as following:" + "\n" + obj + "\n" ;
                        alert(obj);                                
                        
                    }
                    
                }
                
                var z = prompt("Press (1) to delete another property ...");
            } while (z == "1");
                        
            
        } else {
            alert("Good bye!");
        }
                            
                        
    } else {
        alert("Good Bye!");
    }

}


//==================================================================================================================================
function objCreator3() {    

            // [Freezed object Control (one + Multiple)]...                
    
    var mthd = prompt("Choose among the Following Applications\n Press (1) for (One property) [ Freezed Object Controling] ...  \n  Press (2) for (Multiple Properties) [Freezed Object Controling ]...\n Press Any other key to exit... ");
    
    if (mthd == "1") {
        
        alert("Welcome to (one property) [Freezed Object Controling - Un-deletable properties ] Application ...");
        alert("let's start inserting your Object's Properties...");
        
        
        var name = prompt("Enter your property key name "),
        value1 = prompt("Enter your property value ");
        
        // Create Empty Freezed Object + adding new property in one step:
        const fObj = Object.freeze({name:value1}); 
        
        
        alert("your object new Property as following : ");
        console.log(fObj[name]);
        document.getElementById("txtarea").innerHTML = fObj[name];
        
        
        alert("All object properties after adding new Properties as following : ");
        console.log(fObj);
        document.getElementById("txtarea").innerHTML = fObj;
        
        
        var del = prompt("press (1) to delete you property (inspite of this is a {Freezed object}) ... \n press any other key to exit...");
        
        if (del == "1") {
            
            alert("lets delete your property...");
            
            delete fObj[name];
            
            // Printing Object's new property :
            alert("your Freezed object' property after deletion as following: ");
            alert(fObj[name]);            
            document.getElementById("txtarea").innerHTML = fObj[name];
            console.log(fObj[name]);
            
            // Printing All Object's properties :
            alert("your Freezed object after deletion as following: ");
            alert(fObj);
            document.getElementById("txtarea").innerHTML = fObj;
            console.log(fObj);

        } else {
            alert("Good bye!");
        }

        
    } else if (mthd == "2") {

        alert("Welcome to [Freezed Object Controling] Un-deletable (Multiple properties) Application ...");
        alert("let's start inserting your Object's Properties...");
                
        var propCount = parseInt(prompt("Enter your count of your Freezed object properties"));
        
        var names = [],
            values = [];
        
        
        for (a=0; a < propCount; a++ ) {
            
            names[a] = prompt("Enter your property Key Name of property number " + (a+1));
            values[a] = prompt("Enter your property value of property number " + (a+1));
            
            //var fObjCount = Object.key(fObj);
            
            const fObj = Object.freeze(); 
            
            // Following code Does Not Work with Freezed Object type:  
            // More advanced knowledge of Object is NEEDED!:  

            //Object.defineProperty(fObj, names[a], {value:values[a], configurable:false});
                                
            console.log("Your object's new property as following: \n" + names[a] + ":" +  fObj[names[a]]);
            console.log("Your Last update of your object as following :");
            console.log(fObj);

            alert("Your object's new property as following: \n" + names[a] + ":" +  values[a] + "\n");
            
            document.getElementById("txtarea").innerHTML += "Your object's new property as following:" + '\n' + names[a] + ":" +  values[a] + '\n' ;
            
            alert("Your Last update of your object as follwoing :");
            
            for (b=0; b < propCount; b++) {

                document.getElementById("txtarea").innerHTML += "Your Object new property number (" + (b+1) + ") as following :" + '\n' + names[b] + ": \"" +  values[b] + '\"\n' + "Your Current Object's properties Count= " + fObjCount;
                alert("Your Object new property number (" + (b+1) + ") as following :" + '\n' + names[b] + " : \"" +  values[b] + '\"\n' + "Your Current Object's properties Count= " + fObjCount);
                console.log("Your Object new property number (" + (b+1) + ") as following :" + '\n' + names[b] + ": \"" +  values[b] + '\"\n' + "Your Current Object's properties Count= " + fObjCount);
            }                                                    

        }
        alert("your object is freezed type, so you can not delete any of its property!");
        
        /*var del = prompt("press (1) to delete your property ... \n press any other key to exit...");            

        if (del == "1") {
            alert("your Freezed object's Properties count =  " + fObjCount );


            do {
                        
                var propNum = parseInt(prompt("Enter your Freezed object's property number :"))-1;
                
                if ((propNum+1) > objCount) {
                    alert ("your object proerty is out of Range (Greater than properties length)!");

                } else {
                    if (propNum < 0 ) {
                        alert("Not valid number (= Zero / Negative Value)!");

                    } else {
                        alert("lets delete your property of number : (" + (propNum+1) + ")");
                        
                        delete fObj[names[propNum]];
                                        
                        // Printing deleted Object's properties after Deletion Process:
                        alert("Your Freezed object'Property value after deletion as following: ");                                
                        
                        console.log(fObj[names[propNum]]);

                        document.getElementById("txtarea").innerHTML += "your Object count after deletion =" + objCount +
                        "Your object'Property value after deletion as following" + "\n" + fObj[names[propNum]] + "\"\n" ;
                        
                        alert("your Object count after deletion =" + objCount +
                        "\nYour object'Property value after deletion as following" + "\n" + fObj[names[propNum]] + "\"\n" );                                
                                                                                                                                
                        // Printing all Object properties after Deletion Process:
                        alert("your Object's properites count after deletion =(" + objCount + ")\nYour All object last update after deletion as following: ");

                        for (b=0; b<objCount; b++) {

                            document.getElementById("txtarea").innerHTML += "Your Object property number (" + (b+1) + ") :" + '\n' + fObj[names[b]] + '\"\n';
                            
                            alert("Your Object property number (" + (b+1) + ") :" + '\n' + [names[b]] + " : \"" +  [values[b]] + '\"\n');
                        }

                        console.log(fObj);                        
                        
                    }
                    
                }
                
                var z = prompt("Press (1) to delete another property ...");
            } while (z == "1");
                        
            
        } else {
            alert("Good bye!");
        }        
        */
    } else {
        alert("Good Bye!");
    }

}

//=================================================================================================================================
function Display1() {
    document.getElementById('txtarea1').textContent = objCreator;
}

function Display2() {
    document.getElementById('txtarea2').textContent = objCreator1;
}

function Display3() {
    document.getElementById('txtarea3').textContent = objCreator2;
}

function Display4() {
    document.getElementById('txtarea4').textContent = objCreator3;
}

//==================================================================================================================================
    /*
        for (i=0; i < count; i++) {
                
            alert("let's start inserting your Object's Property number (" + (i+1) + ")");
            
            nArr[i] = prompt("Enter your Property [Key name] number (" + (i+1) + ")");
            vArr[i] = prompt("Enter your Property [Value] number (" + (i+1) + ")");                            
            
            Object.defineProperty(obj, nArr[i], {value:vArr[i], configurable:true});                
        }
        */
       
        /*            
            // Printing New Object's Property after Adding it to the Object:
            document.getElementById("txtarea").innerHTML += "Your Object is \n" + nArr[i] + ":\"" + obj[nArr[i]] + "\"\n" + "Object last Update is :" + obj;
            alert("Your Object's Property as following : \n" + nArr[i] + ":\"" + vArr[i] + "\"");
            console.log("Your Object's Property as following : \n" + nArr[i] + ":\"" + vArr[i] + "\"");
            
            // Printing Object after Adding new Property:                
            document.getElementById("txtarea").innerHTML += "Object last Update is :" + obj + "\n";
            alert("Your Object as following : \n" + obj);
            console.log("Your Object as following : \n" + obj);
            
            if (i == (count-1)) {
                // Printing Object last update after Adding All Properties [Final Object]:                
                document.getElementById("txtarea").innerHTML += "Your Final Object after adding all Properites as following :\n" + obj + "\n";
                alert("Your Object as following : \n" + obj);
                console.log("Your Object as following : \n" + obj);
            }
            

            */
