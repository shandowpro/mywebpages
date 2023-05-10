/* global document, alert, prompt */

/* JSOOP [Delete Operator + Configurable Flag + Define Property + Freeze Object] */
function objCreator() {
    
    alert("Welcome to [Object Control] Application ...");
    
    var mthd = prompt("Choose among the Following Applications\n Press (1) for [Ordinary Object Controling ] ...  \n  Press (2) for [Freezed Object Controling ]... ");
    
    if (mthd == "1") {
        
        alert("Welcome to [Ordinary Object Control] Application ...");
        alert("let's start inserting your Object's Properties...");
        
        const obj = Object.assign({}); 
        var objN = parseInt(Object.length(obj));

        var count = prompt("Enter the Count number of your ordinary object's Properties ..."),
            nArr = [],
            vArr = [];
        
        var alldelMode = prompt("Would you like to Create a [Unified Same Configurable Flag of Object's Properties], or [Mixed Configurable Flag of Object's properties]? \nPress (1) to  Create a Unified Same Configurable Flag of Object's Properties\n Press(2) to Mixed Configurable Flag of Object's properties");

        if (alldelMode == "1") {
            
            alert("Welcome to [ Unified (Configurable) ] Flag of Object's Properties...");            
            
            var delMode = prompt("Choose your Deletion delMode \n Press (1) for {Unified Deletable Properties [configurable:true]}...\n Press (2) for {Unified  Un-Deletable Properties [configurable:false]}...");            
            
            if (delMode == "1") {
                
                alert("Welcome to All {Unified Deletable Properties delMode [configurable:true]}...");
                
                alert("let's start inserting your (Unified - Deletable) Object's Properties...");
                
                for (i=0; i < count; i++) {
                    
                    alert("let's start inserting your Object's Property number (" + (i+1) + ")");
                    
                    nArr[i] = prompt("Enter your Property [Name] number (" + (i+1) + ")");
                    vArr[i] = prompt("Enter your Property [Value] number (" + (i+1) + ")");                            
                    
                    Object.defineProperty(obj, nArr[i], {value:vArr[i], configurable:true});                
                    
                    // Printing New Object's Property after Adding it to the Object:
                    document.getElementById("txtarea").innerHTML += "Your new object is \n" + nArr[i] + ":\"" + obj[nArr[i]] + "\"\n";
                    alert("Your new Object's Property as following : \n" + nArr[i] + ":\"" + obj[nArr[i]] + "\"");
                    console.log("Your new Object's Property as following : \n" + nArr[i] + ":\"" + obj[nArr[i]] + "\"");
                    
                    // Printing Object after Adding new Property:                
                    document.getElementById("txtarea").innerHTML += "Your Object as following :\n" + obj + "\n";
                    alert("Your Object as following : \n" + obj);
                    console.log("Your Object as following : \n" + obj);
                    
                    if (i == (count-1)) {
                        // Printing Object after Adding All new Properties [Final Object]:                
                        document.getElementById("txtarea").innerHTML += "Your Final Object after adding all Properites as following :\n" + obj + "with total properties count (" + objN + ")\n";
                        alert("Your Object as following : \n" + obj);
                        console.log("Your Object as following : \n" + obj);
                    }
                    
                }
                
                var edt = prompt("Press (1) to Enter Edit Mode [Add- Delete]\n Or Press any other key to Exit...");
                
                if (edt == "1") {
                    alert("Welcome to Edit Mode [Add- Delete]...");
                    
                    var edtMode = prompt("Choose you Edit delMode [Add- Delete]... \n Press (1) for [Adding Addtional] Propertes\n Press (2) for Deleting Properties...\n Press any other key to Exit delMode...");
                    
                    if (edtMode == "1") {
                        
                        alert("welcome to [Add new Properties] Function to Object ...");
                        
                        do {
                            
                            var nProp = prompt("Enter property Name: "),
                                vProp = prompt("Enter property Value: ");
                            
                            var fObjN = parseInt(Object.length(obj)); 
                            
                            Object.defineProperty(obj, nProp, {value:vProp, configurable:true});
                            
                            // Printing the New Added Object's Property:
                            document.getElementById("txtarea").innerHTML += "Your New Property as following:\n" + nProp + ":\"" + obj.nProp + "\"";
                            alert("Your New Property as following:\n" + nProp + ":\"" + obj.nProp + "\"");
                            console.log("Your New Property as following:\n" + nProp + ":\"" + obj.nProp + "\"");
                            
                            // Printing all Object after Adding Process:                
                            document.getElementById("txtarea").innerHTML += "Your Object after Adding Funciton as following :\n" + obj + "with total Properties count: " + fObjN ;
                            alert("Your Object after Adding Funciton as following : \n" + obj + "with total Properties count: " + fObjN );
                            console.log("Your Object after Adding Funciton as following : \n" + obj + "with total Properties count: " + fObjN );                        

                            if (i == (count-1)) {
                                // Printing Object after Adding All new Properties [Final Object]:                
                                document.getElementById("txtarea").innerHTML += "Your Final Object after adding all Properites as following :\n" + obj + "with total Properties count: " + fObjN ;
                                alert("Your Object as following : \n" + obj + "with total Properties count: " + fObjN );
                                console.log("Your Object as following : \n" + obj + "with total Properties count: " + fObjN );
                            }
                            
                            var addz = prompt("Press (1) to add another property to the Object...\n Press any other key to Exit Addiing function...");
                        } while (addz== "1");                    
                        
                        
                    } else if (edtMode == "2") {
                        
                        alert("welcome to [Delete Properties] Function from Object ...");                                                    
                        
                        do {
                            
                            var propN = parseInt(prompt("Enter your Property number in it's Object you wish to delete it..."))-1;
                            
                            delete obj.nArr[propN];

                            alert("The Deletion Process Successfully done!");
                                                
                            // Printing Deleted Object's Property:
                            document.getElementById("txtarea").innerHTML = nArr[propN] + ":\"" + obj.nArr[propN] + "\"";
                            alert("Your Deleted Object's Property as following : \n" + nArr[propN] + ":\"" + obj.nArr[propN] + "\"");
                            console.log("Your Deleted Object's Property as following : \n" + nArr[propN] + ":\"" + obj.nArr[propN] + "\"");
                
                            // Printing all Object after Deletion Process:                
                            document.getElementById("txtarea").innerHTML = "Your Object as following :\n" + obj;
                            alert("Your Object as following : \n" + obj);
                            console.log("Your Object as following : \n" + obj);
                            
                            
                            var delz = prompt("Press (1) to delete another Property from the object\n Or Press any other key to Cancel Deletion... ");
                    
                        } while (delz == "1");
        
                    } else {
                            alert("Good bye!");
                    }


                } else {
                    alert("Good bye!");
                }

            } else if (delMode == "2") {
                
                alert("Welcome to All {Un-Deletable Properties [configurable:false]}... ...");
                
                alert("let's start inserting your (Unified - UnDeletable) Object's Properties...");
                
                for (i=0; i < count; i++) {
                    
                    alert("let's start inserting your Object's Property number (" + (i+1) + ")");
                    
                    nArr[i] = prompt("Enter your Property [Name] number (" + (i+1) + "): ");
                    vArr[i] = prompt("Enter your Property [Value] number (" + (i+1) + "): ");                            
                    
                    Object.defineProperty(obj, nArr[i], {value:vArr[i], configurable:false});                                    
                    
                    // Printing New Object's Property after Adding it to the Object:
                    document.getElementById("txtarea").innerHTML += nArr[i] + ":\"" + obj.nArr[i] + "\"";
                    alert("Your new Object's Property as following : \n" + nArr[i] + ":\"" + obj.nArr[i] + "\"");
                    console.log("Your new Object's Property as following : \n" + nArr[i] + ":\"" + obj.nArr[i] + "\"");
        
                    // Printing all Object after Adding new Property:                
                    document.getElementById("txtarea").innerHTML += "Your Object after adding new property as following :\n" + obj;
                    alert("Your Object after adding new property as following : \n" + obj);
                    console.log("Your Object after adding new property as following : \n" + obj);
                    
                    if (i == (count-1)) {
                        // Printing Object after Adding All new Properties [Final Object]:                
                        document.getElementById("txtarea").innerHTML += "Your Final Object after adding all Properites as following :\n" + obj + "Your final Count of Properties in you Object is :" + objN;
                        alert("Your Object as following : \n" + obj);
                        console.log("Your Object as following : \n" + obj);
                    }
                                                    
                }

                var edt = prompt("Press (1) to Enter Edit delMode [Add- Delete]...\n Or Press any other key to Exit...");
                
                if (edt == "1") {
                    alert("Welcome to Edit delMode [Add- Delete]...");
                    
                    var edtMode = prompt("Choose you Edit delMode [Add- Delete]... \n Press (1) for [Adding Addtional] Propertes\n Press (2) for Deleting Properties...\n Press any other key to Exit delMode...");
                    
                    if (edtMode == "1") {
                        
                        alert("welcome to [Add new Properties] Function to Object ...");
                        
                        do {
                            
                            var nProp = prompt("Enter property Name: "),
                            vProp = prompt("Enter property Value: ");
                            
                            Object.defineProperty(obj, nProp, {value:vProp, configurable:false});
                            
                            // Printing the New Added Object's Property:
                            document.getElementById("txtarea").innerHTML += "Your new Property as follwoing: \n" + nArr[propN] + ":\"" + obj.nArr[propN] + "\"";
                            alert("Your Object's new Property as following : \n" + nArr[propN] + ":\"" + obj.nArr[propN] + "\"");
                            console.log("Your new Object's Property as following : \n" + nArr[propN] + ":\"" + obj.nArr[propN] + "\"");
                            
                            // Printing all Object after Adding Process:                
                            document.getElementById("txtarea").innerHTML = "Your Object after Adding new properties as following :\n" + obj;
                            alert("Your Object after Adding Funciton as following : \n" + obj);
                            console.log("Your Object after Adding Funciton as following : \n" + obj);            
                
                            var addz = prompt("Press (1) to add another property to the Object...\n Press any other key to Exit Addiing function...");
                        } while (addz== "1");                    
                        
                        
                    } else if (edtMode == "2") {
                        
                        alert("Welcome to [Delete Properties] Function from Object ...");                                                    
                        
                        do {
                            
                            var propN = parseInt(prompt("Enter your Property number in it's Object you wish to delete it..."))-1;
                            
                            delete obj[nArr[propN]];
                            
                            alert("The Deletion Process Successfully done!");
                            
                            // Printing Deleted Object's Property:
                            document.getElementById("txtarea").innerHTML += nArr[propN] + ":\"" + obj[nArr[propN]] + "\"";
                            alert("Your Deleted Object's Property as following : \n" + nArr[propN] + ":\"" + obj[nArr[propN]] + "\"");
                            console.log("Your Deleted Object's Property as following : \n" + nArr[propN] + ":\"" + obj[nArr[propN]] + "\"");
                            
                            // Printing all Object after Deletion Process:                
                            document.getElementById("txtarea").innerHTML += "Your Object as following :\n" + obj + "Final Properties count of your object is :" + objN;
                            alert("Your Object as following : \n" + obj + "Final Properties count of your object is :" + objN);
                            console.log("Your Object as following : \n" + obj + "Final Properties count of your object is :" + objN);
                                                    
                            var delz = prompt("Press (1) to delete another Property from the object\n Or Press any other key to Cancel Deletion... ");
                            
                        } while (delz == "1");
                        
                    } else {
                        alert("Good bye!");
                    }
                    
                    
                } else {
                    alert("Good bye!");
                }
                
            } else {
                alert("Error Entry!");
            }   
            
            
    //========================================================================================================================================
        } else if (alldelMode == "2") {
            
            alert("Welcome to [Mixed Configurable Flag] of Object's properties...");
            
            for (i=0; i < count; i++) {
                
                alert("let's start inserting your Object's Property number (" + (i+1) + ")");
                
                nArr[i] = prompt("Enter your Property [Name] number (" + (i+1) + ") ");
                vArr[i] = prompt("Enter your Property [Value] number (" + (i+1) + ") ");
                
                var delMode = prompt("Choose your Deletion Flag delMode of this Property: \n Press (1) for {Deletable Property [configurable:true]}...\n Press (2) for {Un-Deletable Property [configurable:false]}...");
                
                if (delMode == "1") {
                
                    alert("{Deletable Property [configurable:true]}...");

                    Object.defineProperty(obj, nArr[i], {value:vArr[i], configurable:true});                
                    
                    // Printing New Object's Property after Adding it to the Object:
                    document.getElementById("txtarea").innerHTML += nArr[i] + ":\"" + obj[nArr[i]] + "\"";
                    alert("Your new Object's Property as following : \n" + nArr[i] + ":\"" + obj[nArr[i]] + "\"");
                    console.log("Your new Object's Property as following : \n" + nArr[i] + ":\"" + obj[nArr[i]] + "\"");
                    
                    // Printing all Object after Adding new Property:                
                    document.getElementById("txtarea").innerHTML += "Your Object after adding new property as following :\n" + obj + "\n Final Count of Object's properties after Adding process is : " + objN;
                    alert("Your Object after adding new property as following : \n" + obj + "\n Final Count of Object's properties after Adding process is : " + objN);
                    console.log("Your Object after adding new property as following : \n" + obj + "\n Final Count of Object's properties after Adding process is : " + objN);
                    
                    var edt = prompt("Press (1) to Enter Edit delMode [Add- Delete]...\n Or Press any other key to Exit...");
                                        
                    if (edt == "1"){
                        
                        var edtMode = prompt("Choose you Edit Mode [Add- Delete]... \n Press (1) for [Adding Addtional] Propertes\n Press (2) for Deleting Properties...\n Press any other key to Exit Mode...");
                        
                        if (edtMode == "1") {
                            
                            alert("welcome to [Add new Properties] Function to Object ...");
                            
                            do {
                                
                                var nProp = prompt("Enter property Name: "),
                                vProp = prompt("Enter property Value: ");
                                
                                Object.defineProperty(obj, nProp, {value:vProp, configurable:false});
                                
                                // Printing the New Added Object's Property:
                                document.getElementById("txtarea").innerHTML += "Your new Property as follwoing: \n" + nArr[propN] + ":\"" + obj.nArr[propN] + "\"";
                                alert("Your Object's new Property as following : \n" + nArr[propN] + ":\"" + obj.nArr[propN] + "\"");
                                console.log("Your new Object's Property as following : \n" + nArr[propN] + ":\"" + obj.nArr[propN] + "\"");
                                
                                // Printing all Object after Adding Process:                
                                document.getElementById("txtarea").innerHTML = "Your Object after Adding new properties as following :\n" + obj;
                                alert("Your Object after Adding Funciton as following : \n" + obj);
                                console.log("Your Object after Adding Funciton as following : \n" + obj);
                                
                                var addz = prompt("Press (1) to [ADD] another property to the Object...\n Press any other key to Exit Addiing function...");
                            } while (addz== "1");                    
                            
                            
                        } else if (edtMode == "2") {
                            
                            alert("welcome to [Delete Properties] Function from Object ...");                                                    
                            
                            do {
                                
                                var propN = parseInt(prompt("Enter your Property number in it's Object you wish to delete it..."))-1;
                                
                                delete obj[nArr[propN]];
                                
                                alert("The Deletion Process Successfully done!");
                                
                                // Printing Deleted Object's Property:
                                document.getElementById("txtarea").innerHTML += nArr[propN] + ":\"" + obj.nArr[propN] + "\"";
                                alert("Your Deleted Object's Property as following : \n" + nArr[propN] + ":\"" + obj.nArr[propN] + "\"");
                                console.log("Your Deleted Object's Property as following : \n" + nArr[propN] + ":\"" + obj.nArr[propN] + "\"");
                                
                                // Printing all Object after Deletion Process:                
                                document.getElementById("txtarea").innerHTML += "Your Object as following :\n" + obj;
                                alert("Your Object as following : \n" + obj);
                                console.log("Your Object as following : \n" + obj);
                                
                                var delz = prompt("Press (1) to delete another Property from the object\n Or Press any other key to Cancel Deletion... ");
                                
                            } while (delz == "1");
                            
                        } else {
                            alert("Good bye!");
                        }
                        
                    } else {
                        alert("Good bye!");
        
                    }
                        
                        
                } else if (delMode == "2") {
                
                    alert("{Un-Deletable Property [configurable:false]}...");

                    Object.defineProperty(obj, nArr[i], {value:vArr[i], configurable:false});                
                        
                    var edt = prompt("Press (1) to Enter Edit Mode [Add- Delete]...\n Or Press any other key to Exit...");

                    if (edt == "1") {
                        alert("Welcome to Edit Mode [Add- Delete]...");

                        var edtMode = prompt("Choose you Edit delMode [Add- Delete]... \n Press (1) for [Adding Addtional] Propertes\n Press (2) for Deleting Properties...\n Press any other key to Exit delMode...");

                        if (edtMode == "1") {
                                
                                alert("welcome to [Add new Properties] Function to Object ...");

                                do {

                                    var nProp = prompt("Enter property Name: "),
                                        vProp = prompt("Enter property Value: ");
                
                                    Object.defineProperty(obj, nProp, {value:vProp, configurable:true});

                                    // Printing the New Added Object's Property:
                                    document.getElementById("txtarea").innerHTML = nArr[propN] + ":\"" + obj.nArr[propN] + "\"";
                                    alert("Your Object's Property as following : \n" + nArr[propN] + ":\"" + obj.nArr[propN] + "\"");
                                    console.log("Your new Object's Property as following : \n" + nArr[propN] + ":\"" + obj.nArr[propN] + "\"");
                        
                                    // Printing all Object after Adding Process:                
                                    document.getElementById("txtarea").innerHTML = "Your Object after Adding Funciton as following :\n" + obj;
                                    alert("Your Object after Adding Funciton as following : \n" + obj);
                                    console.log("Your Object after Adding Funciton as following : \n" + obj);

                                    var addz = prompt("Press (1) to add another property to the Object...\n Press any other key to Exit Addiing function...");
                                } while (addz== "1");                    


                            } else if (edtMode == "2") {
                                
                                alert("welcome to [Delete Properties] Function from Object ...");                                                    
                            
                                do {
                                
                                    var propN = parseInt(prompt("Enter your Property number in it's Object you wish to delete it..."))-1;
                                    
                                    delete obj[nArr[propN]];

                                    alert("The Deletion Process Successfully done!");
                                                        
                                    // Printing Deleted Object's Property:
                                    document.getElementById("txtarea").innerHTML = nArr[propN] + ":\"" + obj[nArr[propN]] + "\"";
                                    alert("Your Deleted Object's Property as following : \n" + nArr[propN] + ":\"" + obj[nArr[propN]] + "\"");
                                    console.log("Your Deleted Object's Property as following : \n" + nArr[propN] + ":\"" + obj[nArr[propN]] + "\"");
                        
                                    // Printing all Object after Deletion Process:                
                                    document.getElementById("txtarea").innerHTML = "Your Object as following :\n" + obj;
                                    alert("Your Object as following : \n" + obj);
                                    console.log("Your Object as following : \n" + obj);
                                    
                                    if (i == (count-1)) {
                                        // Printing Object after Adding All new Properties [Final Object]:                
                                        document.getElementById("txtarea").innerHTML += "Your Final Object after adding all Properites as following :\n" + obj;
                                        alert("Your Object as following : \n" + obj);
                                        console.log("Your Object as following : \n" + obj);
                                    }
                                    
                                    var delz = prompt("Press (1) to delete another Property from the object\n Or Press any other key to Cancel Deletion... ");
                            
                                } while (delz == "1");
                
                            } else {
                                    alert("Good bye!");
                            }
                        
                                        
                        } else {
                            alert("Good bye!");
                        }
                        
                                                                                                        
                    } else {
                        alert("Error Entry!");
                    }
                }
                
            } else {
                alert("Error Entry!");
            }
    
//===============================================================================================================================
    } else if (mthd == "2") { 
        
        alert("Welcome to [Freezed Object Control] Application ...");



    } else {
        alert("Error Entry!");
    }     
}
