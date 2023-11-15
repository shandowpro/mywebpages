
/* global document, alert, prompt */

/* JSOOP [JS Object Meta Date & Descriptor] */

function test() {

    var a = prompt("Welcome to [JS Object Meta Data & Descriptors] Application \n " +
     "Press (1) to start the application \n Press any other key to Exit...");
    
    if (a != "1") {
        alert("Good Bye!");
    } else {                                                    
            
        do { 
                                                    
            alert("Welcome to [JS Object Meta Data & Descriptors] Application ...");            
            
            // Declaring [Defualt Empty Object] :                                                
            const myObj ={};

            var strAll = "";

            alert("Please Choose a [Main Function] of [Default Object] to Execute from Below... ");                                        
        
            z0 = prompt("Press (1) to Display the [Main Default Object's Syntax] \n " +
            " Press (2) to [Add/Define new Property(s)] + [Edit/delete a Pre-defined Property] to the Default Object{with All Meta data & descriptors} \n" +       
            " Press (3) to [Displaying All Properties Functionality Data ] \n" +            
            " Press any other key to Exit ... ");
        
            // First Main Functionality :
            if (z0 =="1") {                        
                                
                do {
                    
                    alert("Welcome to [Display the {Default Object}]");
                    alert("Your [Object] as following: ");
                    alert(myObj);
                    
                    console.log("Your [Object] as following: ");
                    console.log(myObj);
                    console.log("-".repeat(15));
                    
                    document.getElementById("txtarea").innerHTML += "\nMain [Default Object] as following ...\n " +
                        myObj + "\n <br> \n";

                    var z00 = prompt("Enter (1) to restart the Application\n or any other key to abort this Main Function..");
                } while (z00 == "1");
                    
            // Second Main functionality :            
            } else if (z0 == "2") {       
                
                do {
                    
                    alert("Welcome to [Add/Define new Property(s) - Edit/delete a Pre-defined Property] to the Default Object ...");
                    alert("A) Adding New Object's properties...");
                    console.log("A) Adding New Object's properties...");
                    
                    var count = prompt("Enter the Count of desired Property(s) to Add/Define to the Default Object ... "),
                        arrName = new Array (),
                        arrValue = new Array (),
                        arr = new Array();
                
                    arr.length = count;                
                    arrName.length = count;                
                    arrValue.length = count;                
                    
                    // Adding new Properties to the object & [detecting all property's Meta data/Attributes]:
                    for (i=0 ; i<count; i++) {                                                                            
                        
                        alert("Welcome to [Adding new Propety to the Default object ] number " + (i+1) +
                        "\nPlease detect object's Property's Meta Data as following :");
                        
                        console.log("Please Assign object's Property's Meta Data as following :");
                        
                        var PropName = prompt("Enter Property Name Number :" + (i+1)),
                        PropValue = prompt("Enter Property Value Number :" + (i+1));
                
                        //Assigning Object's Properties's Meta data:
                        var writableP = prompt("Press (1) for {writable} Property {true} Configuration\n" +
                        " or (2) for {Writable} Property {false} configuration ");
                    
                        if (writableP =="1") {

                            // {writable} Property {true}:
                            var enumerable = prompt("Press (1) for {enumerable} Property {true} Configuration\n " +
                            " or (2) for {enumerable} Property {false} configuration ");
                            
                            if (enumerable =="1") {
                                
                                var configurable = prompt("Press (1) for {configurable} Property {true} Configuration\n " +
                                "or (2) for {Configurable} Property {false} configuration ");
                                
                                if (configurable == "1") {
                                    // [writable:True, enumerable:True, configurable:True ]:
                                    Object.defineProperty(myObj, PropName , {writable:true, enumerable:true, configurable:true, value:PropValue});
                                    arr[i] = "Property number (" + (i+1) +  ")" + " As following:\n" +  PropName + myObj[PropName];
                                    arrName[i] = PropName;
                                    arrValue[i] = myObj[PropName];
                                    
                                } else {
                                    // [writable:True, enumerable:True, configurable:false ]:
                                    Object.defineProperty(myObj, PropName , {writable:true, enumerable:true, configurable:false, value:PropValue});                                                                
                                    arr[i] = "Property number (" + (i+1) +  ")" + " As following:\n" +  PropName + myObj[PropName];
                                    arrName[i] = PropName;
                                    arrValue[i] = myObj[PropName];
                                }
                                
                            }  else {
                                
                                var configurable = prompt("Press (1) for {configurable} Property {true} Configuration\n " +
                                "or (2) for {Configurable} Property {false} configuration ");
                                
                                if (configurable == "1") {
                                    // [writable:True, enumerable:False, configurable:True ]:
                                    Object.defineProperty(myObj, PropName , {writable:true, enumerable:false, configurable:true, value:PropValue});
                                    arr[i] = "Property number (" + (i+1) +  ")" + " As following:\n" +  PropName + myObj[PropName];
                                    arrName[i] = PropName;
                                    arrValue[i] = myObj[PropName];
                                    
                                } else {
                                    // [writable:True, enumerable:False, configurable:false ]:
                                    Object.defineProperty(myObj, PropName , {writable:true, enumerable:false, configurable:false, value:PropValue});                                                                
                                    arr[i] = "Property number (" + (i+1) +  ")" + " As following:\n" +  PropName + myObj[PropName];
                                    arrName[i] = PropName;
                                    arrValue[i] = myObj[PropName];
                                }
                                
                            }
                            
                        } else {

                            //{writable} Property {false}:
                            
                            var enumerable = prompt("Press (1) for {enumerable} Property {true} Configuration\n" +
                            " or (2) for {enumerable} Property {false} configuration ");
                            
                            if (enumerable =="1") {
                                
                                var configurable = prompt("Press (1) for {configurable} Property {true} Configuration\n " +
                                "or (2) for {Configurable} Property {false} configuration ");
                                
                                if (configurable == "1") {
                                    // [writable:false, enumerable:True, configurable:True ]:
                                    Object.defineProperty(myObj, PropName , {writable:false, enumerable:true, configurable:true, value:PropValue});
                                    arr[i] = "Property number (" + (i+1) +  ")" + " As following:\n" +  PropName + myObj[PropName];
                                    arrName[i] = PropName;
                                    arrValue[i] = myObj[PropName];
                                    
                                } else {
                                    // [writable:false, enumerable:True, configurable:false ]:
                                    Object.defineProperty(myObj, PropName , {writable:false, enumerable:true, configurable:false, value:PropValue});                                                                
                                    arr[i] = "Property number (" + (i+1) +  ")" + " As following:\n" +  PropName + myObj[PropName];
                                    arrName[i] = PropName;
                                    arrValue[i] = myObj[PropName];
                                }
                                
                            }  else {
                                
                                var configurable = prompt("Press (1) for {configurable} Property {true} Configuration\n " +
                                " or (2) for {Configurable} Property {false} configuration ");
                                
                                if (configurable == "1") {
                                
                                    // [writable:false, enumerable:False, configurable:True ]:
                                    Object.defineProperty(myObj, PropName , {writable:false, enumerable:false, configurable:true, value:PropValue});
                                    arr[i] = "Property number (" + (i+1) +  ")" + " As following:\n" +  PropName + myObj[PropName];
                                    arrName[i] = PropName;
                                    arrValue[i] = myObj[PropName];
                                    
                                } else {
                                
                                    // [writable:false, enumerable:False, configurable:false ]:
                                    Object.defineProperty(myObj, PropName , {writable:false, enumerable:false, configurable:false, value:PropValue});                                                                
                                    arr[i] = "Property number (" + (i+1) +  ")" + " As following:\n" +  PropName + myObj[PropName];
                                    arrName[i] = PropName;
                                    arrValue[i] = myObj[PropName];
                                }
                                
                            }
                            
                        }
                        
                        // Displaying the Object brief after adding the new Property:
                        alert("Object's current Property(s) Displaying [by the Array Method] as following :");
                        alert(arr);
                        
                        console.log("Object's current Property(s) Displaying [by the Array Method] as following :");                    
                        console.log(arr);

                        console.log("-".repeat(15));
                        
                        document.getElementById("txtarea").innerHTML += "\n your Object's current Property(s) as following :\n" , arr;
                        
                        console.log("#".repeat(15));
                        // ============================================================
                        
                        alert("Object's current Property(s) Displaying [by the Object Method] as following :");
                        alert(myObj);
                        
                        
                        console.log("Object's current Property(s) Displaying [by the Object Method] as following :");
                        console.log(myObj);
                        
                        document.getElementById("txtarea").innerHTML += "\nyour Object's current Property(s) as following :\n" + myObj;
                        
                        console.log("#".repeat(10));
                    }     
                
                    // Choosing Editing-Deelting mode: 
                    var EditChoose = prompt("Press (1) to Enter [Edit-Delete] Mode \n or press any other key to abort!");

                    if (EditChoose == "1"){
                                                
                        alert("Welcome to Edit Mode ");
                        
                        var editDel = prompt("Press (1) for {Editing (value)} Funcionality\n Press (2) for {Deleting} Functionality\n" +
                        " or Press any other key to Abort!");
                
                        if (editDel == "1") {

                            // Editing Functionality:
                            alert("Welcome to [Editing (Value) Functoinality..]");
                            
                            var editMthd = prompt("Choose your Object's Property Accessing Method to process Editing by \n" +
                            " Press (1) for [Property Name Accessing] Method\n " +
                            " Press (2) for [Property Number Accessing] Method to process Editing by\n " +
                            " or any other key to abort!");
                            
                            if (editMthd == "1"){
                                // [{Property Name} Accessing] Method:
                                alert("Welcome to [Property Name Accessing] Method");
                                
                                var propName = prompt("Insert the property Name to Edit..."),
                                    NpropValue = prompt("Insert the property new Value to change ...");
                                
                                // Changing Property Value Function:
                                myObj[propName] = NpropValue;

                                alert("your Property after changing as following :\n", propName , ":" + myObj[propName]);
                                
                                console.log("your Property after Changing as following :\n", propName , ":" + myObj[propName]);
                                console.log("-".repeat(15));
                                
                                document.getElementById("txtarea").innerHTML +=
                                "your Property after changing as following :\n" + propName + ":" + myObj[propName];
                                
                                // ----------------------------------------------------------------------------------------------------------
                                
                                // Displaying All Object's Properties after Editing:
                                for (let prop in myObj) {
                                    alert(prop , ":" , myObj[prop]);
                                    
                                    console.log(prop , ":" , myObj[prop]);
                                    console.log("-".repeat(15));
                                    
                                    document.getElementById("txtarea").innerHTML = "\n" + prop + ":" + myObj[prop] + "\n";
                                }
                                
                                // ----------------------------------------------------------------------------------------------------------                        
                                
                            } else if (editMthd =="2") {                        
                                // [Property Number Accessing] Method:
                                alert("Welcome to [Property Number Accessing] Method");
                                
                                var propNum = parseInt(prompt("Insert the property Number to Edit..."))-1,
                                NpropValue = prompt("Insert the property new Value to change ...");
                                
                                // Changing Property Value Function:
                                myObj[arrName[propNum]] = NpropValue;
                                
                                alert("your Property after changing Value as following :\n" + arrName[propNum] + ":" +
                                 myObj[arrName[propNum]]);
                                
                                console.log("your Property after Changing Value as following :\n", arrName[propNum] , ":" , myObj[arrName[propNum]]);
                                console.log("-".repeat(15));
                                
                                document.getElementById("txtarea").innerHTML +=
                                "\n your Property after changing Value as following :\n" +
                                arrName[propNum] + ":" + myObj[arrName[propNum]] + "\n";
                                
                                
                                // Displaying All Object's Properties after Editing:
                                for (let prop in myObj) {
                                    alert(prop , ":" , myObj[prop]);
                                    
                                    console.log(prop , ":" , myObj[prop]);
                                    console.log("-".repeat(15));
                                    
                                    document.getElementById("txtarea").innerHTML += "\n" + prop + ":" + myObj[prop] + "\n";
                                }
                                
                                
                            } else {
                                alert("No {Accessing Method} for [Editing] has been choosen!");
                            }
                            /// ================================================================================================
                            /// ================================================================================================
                        /// ================================================================================================
                        
                        // Delelting Functionality:
                        } else if (editDel == "2") {
                            alert("Welcome to [Deleting Functoinality..]");

                            // Choosing deleting Methods:
                            var delMthd = prompt("Choose your Object's Property Accessing Method to process Deleting by \n" +
                            " Press (1) for [Property Name Accessing] Method\n " +
                            " Press (2) for [Property Number Accessing] Method to process Deleting by\n" +
                            " or any other key to abort!");
                            
                            if (delMthd == "1"){

                                // [{Deleting} by (a) {Property Name} Accessing] Method:
                                alert("Welcome to [Property Name Accessing] Method");
                                
                                var propName = prompt("Insert the property Name to delete..."),
                                    NdelProp = myObj[propName];                            
                                
                                // Checking if the property is Exist in the Object:
                                for (let prop in myObj) {
                                    if (prop == propName) {
                                        
                                        // Deleting Property Function:
                                        delete myObj[propName];
                                        
                                        alert("your Property with Name [" + NdelProp + "] has been Deleted Successfully! ");
                                        
                                        console.log("your Property with Name [" , NdelProp , "] has been Deleted Successfully!");
                                        console.log("-".repeat(15));
                                        
                                        document.getElementById("txtarea").innerHTML +=
                                        "your Property with Name [" +
                                        NdelProp + "] has been Deleted Successfully!";        
                                            
                                    }
                                }
                                
                                // ----------------------------------------------------------------------------------------------------------
                                
                                // Displaying All Object's Properties after Deleting Process :
                                for (let prop in myObj) {
                                    alert(prop , ":" , myObj[prop]);
                                    
                                    console.log(prop , ":" , myObj[prop]);
                                    console.log("-".repeat(15));
                                    
                                    document.getElementById("txtarea").innerHTML = prop + ":" + myObj[prop];
                                }
                                
                                // ----------------------------------------------------------------------------------------------------------
                                // ----------------------------------------------------------------------------------------------------------
                                
                                
                            } else if (delMthd =="2") {                        
                                // [Property Number Accessing] Method:
                                alert("Welcome to [Property Number Accessing] Method");
                                
                                // [{Deleting} by (b) {Property Number} Accessing] Method:
                                var propNum = parseInt(prompt("Insert the property Number to Delete..."))-1;
                                
                                
                                // Checking if the property is Exist in the Object:
                                
                                // >> The follwoing code need for Testing :                        
                                for (let prop in myObj) {
                                    if (myObj[prop].count == propNum) {
                                        
                                        var NdelProp = arrName[propNum];
                                        // Deleting Property Function:
                                        delete myObj[prop];
                                        
                                        alert("your Property with count : " + myObj[prop].count + " and Name [" + NdelProp +
                                         "] has been Deleted Successfully! ");
                                        
                                        console.log("your Property with Name [" , myObj[prop].count , NdelProp , "] has been Deleted Successfully!");
                                        console.log("-".repeat(15));
                                        
                                        document.getElementById("txtarea").innerHTML +=
                                         "your Property with count [" +  myObj[prop].count +
                                         "] and Name [" + NdelProp + "] has been Deleted Successfully!";        
                                        
                                    }
                                }
                                // ----------------------------------------------------------------------------------------------------------

                                // // Deleting Property Function:
                                // delete myObj[arrName[propNum]];
                                
                                // alert("your Property with Name [" + NdelProp + "] has been Deleted Successfully! ");
                                // console.log("your Property with Name [" + NdelProp + "] has been Deleted Successfully!");
                                
                                // document.getElementById("txtarea").innerHTML +=
                                //  "your Property with Name [" +
                                //  NdelProp + "] has been Deleted Successfully!";
                                

                                // Displaying All Object's Porperties [Name + Values] after Deleting :
                                for (let prop in myObj) {
                                    alert(prop , ":" , myObj[prop]);
                                    console.log(prop , ":" , myObj[prop]);
                                    console.log("-".repeat(15));
                                    
                                    strAll += prop , ":" , myObj[prop];    
                                }
                                
                                document.getElementById("txtarea").innerHTML += "\n" + strAll + "\n";
                                strAll = "";
                                
                            } else {
                                alert("No Accessing Method has Been Choosen to delete!");
                            }
                            
                        } else { 
                            alert("No (Edit-Delete) Functionality has Been Choosen!");                    
                        }                                        

                    } else {
                        alert("Editing mode Aborted!");
                        
                        var disMod = prompt("Press (1) to Enter Display Mode \n or any other key to exit ");
                        
                        if (disMod == "1") {
                            
                            do {                                
                                                                                                        
                                var disFunc = prompt(" Welcome to {Displaying Mode} [Displaying All Properties Functionality ],"+
                                " Choose a Sub- Display Function from Below..\n" +
                                " Press (1) to [display all Object's Properties Names] of the Default Object \n" +
                                " Press (2) to [display all Object's Properties values] of the Default Object \n " +
                                " Press (3) to [display all Object's Properties Names + Values] of the Default Object \n" +
                                " Press (4) to [display all Object's Properties Meta Data] of the Default Object \n" +
                                " Press (5) to [display specific Object's Property's Meta Data] of the Default Object ");
                                
                                
                                // Displaying All Object's Properites [Names Functionlality]:
                                if (disFunc=="1") {
                                                                        
                                    // Choosing Displaying all Object's Properties Names Method:
                                    alert("Welcome to [display all Object's Properties Names] of the Default Object ...");
                                    
                                    var NamesDisMth = prompt("Choose your displaying Names Method]\n" +
                                    " press (1) for Shortcut Method {Object.getOwnPropertyName();}...\n " +
                                    " press (2) for Looping [for-in] Method...");
                                    
                                    //1) Display Names by ShortCut Method:
                                    if (NamesDisMth == "1") {
                
                                        alert("Welcome to [Shortcut Method {Object.getOwnPropertyName();}] ");
                                        
                                        alert(Object.getOwnPropertyNames(myObj));
                                        
                                        console.log(Object.getOwnPropertyNames(myObj));                        
                                        console.log("-".repeat(15));
                                        
                                        document.getElementById("txtarea").innerHTML +=
                                         "\n" + Object.getOwnPropertyNames(myObj) + "\n";
                                        
                                    //2) Display Names by Loopoing for-in Method:
                                    } else if (NamesDisMth == "2"){
                                        
                                        alert("Welcome to [for-in Looping [for-in] Method] for displaying Object's All Propeties Names ");                                                
                                        
                                        alert("Your Object's Properties Names  as following : ");
                                        console.log("Your Object's Properties Names as following : ");
                                        
                                        for (let prop in myObj) {
                                            alert( prop );
                                            console.log( prop );                        
                                            console.log("-".repeat(15));
                                            
                                            document.getElementById("txtarea").innerHTML += "\n" + prop + "\n";
                                        }
                                        
                                    } else {

                                        alert("No Displaying Object's Properties {Names} Method has been choosen!");
                                    }           
                                    
                                    
                                // Displaying All Object's Properites Values Functionality :
                                } else if (disFunc=="2"){
                                                    
                                    alert("Welcome to [display all Object's Properties values] of the Default Object ...");
                                    
                                    var ValueDisMth = prompt("Choose your displaying Method]\n " +
                                    " press (1) for Shortcut Method {Object.getOwnPropertyValue();}...\n " + 
                                    " press (2) for Looping [for-in] Method...");
                                    
                                    // 1) Displaying all properties by [ShortCut Mehtod]>> {Need Revision}:                        
                                    if (ValueDisMth == "1") {                            

                                        alert("This Method NMeeds Revision [Shortcut Method]");
                                        // alert(Object.get);
                                        
                                        // console.log(Object.getOwnPropertyNames(myObj));                        
                                        
                                        // document.getElementById("txtarea").innerHTML += "\n" + Object.getOwnPropertyNames(myObj) + "\n";
                
                                    // 2) Displaying all properties by [Looping for-in]>> {Need Revision}:
                                    } else if (ValueDisMth == "2"){

                                        alert("Welcome to [for-in Looping [for-in] Method] for displaying Object's All Propeties Values ");                                                
                                        
                                        alert("Your Object's Properties Values  as following : ");
                                        console.log("Your Object's Properties Values as following : ");
                                        
                                        for (let prop in myObj) {
                                            alert( myObj[prop] );
                                            console.log( myObj[prop]);                        
                                            console.log( "#".repeat(15));                        
                                            
                                            document.getElementById("txtarea").innerHTML += "\n" + myObj[prop] + "\n";
                                        }
                                        
                                    } else {

                                        alert("No Displaying Object's Properties {Values} Method has been choosen!");
                                    }           
                                    
                                    // Third Sub Function of Displaying:                                                                                                    
                                } else if (disFunc=="3") {

                                    alert("Welcome to [display all Object's Properties {Names + Values}] of the Default Object ...");
                                    alert("Object's Properties as following :");
                                    
                                    for (let prop in myObj){
                                        alert(prop , myObj[prop]);
                                        console.log(prop , myObj[prop]);
                                        console.log( "#".repeat(15));                        
                                        
                                        document.getElementById("txtarea").innerHTML += "\n" + prop + ":" + myObj[prop] + "\n" ;
                                    }
                                    
                                    
                                    // Fourth Sub Function of Displaying:                                                                                                    
                                } else if (disFunc=="4") {

                                    alert("Welcome to [display all Object's Properties {Meta Data}] of the Default Object ...");
                                    alert("Object's Properties Meta Data as following :");
                                    
                                    alert(Object.getOwnPropertyDescriptor(myObj));
                
                                    console.log(Object.getOwnPropertyDescriptor(myObj));
                
                                    console.log( "#".repeat(15));                        
                                    
                                    document.getElementById("txtarea").innerHTML = Object.getOwnPropertyDescriptor(myObj);
                                    
                                    
                                    // Fifth Sub Function of Displaying:                                                                                                    
                                } else if (disFunc=="5") {
                                    
                                    do {

                                        alert("Welcome to [display specific Object's Property {Meta Data}] of the Default Object ...");
                                        alert("Displaying specific Object's Property Meta Data as following :");
                                        
                                        var accMeth = prompt("Press (1) for Accessing Property by {Array Number} \n " +
                                        "Press (2) for Accessing Property by {Property Value} \n" +
                                        " Press (3) for Accessing Property by {Property Name}");
                                        
                                        if (accMeth == "1") {
                                                            
                                            // 1) Accessing the property by ['it's Nubmer'] in Array of Object's properties {for Displaying it's Descriptor}:
                                            var propNum = parseInt(prompt("Enter your Property Number:"))-1;
                                            
                                            for (let prop in myObj){
                                                if (prop == arrName[propNum]) {
                                                    alert("Your Property has been found! >>" + prop + "It's Meta Data as following: " );                            
                                                    
                                                    console.log("Your Property has been found!" , prop , "It's Meta Data as following: " );
                                                    
                                                    alert(Object.getOwnPropertyDescriptor(myObj[arrName[propNum]]));
                                                    
                                                    console.log(Object.getOwnPropertyDescriptor(myObj[arrName[propNum]]));
                                                    console.log( "#".repeat(15));                        
                                                    
                                                    document.getElementById("txtarea").innerHTML +=
                                                     "\n" + Object.getOwnPropertyDescriptor(myObj[arrName[propNum]]) + "\n";                            
                                                }
                                            }
                
                                        } else if (accMeth == "2"){
                                                                                    
                                            // 2) Accessing the property by [it's Name] {for Displaying it's Descriptor} :
                                            var propName = prompt("Enter your Property Name:");
                                            
                                            // Checking if the Property name is Existed in the object:
                                            for (let prop in myObj){
                                                if (prop == propName) {
                                                    alert("Your Property has been found! >>" + prop + "It's Meta Data as following: " );                            
                                                    console.log("Your Property has been found!" , prop , "It's Meta Data as following: " );
                                                    
                                                    alert(Object.getOwnPropertyDescriptor(myObj[prop]));                            
                                                    
                                                    console.log(Object.getOwnPropertyDescriptor(myObj[prop]));
                                                    
                                                    document.getElementById("txtarea").innerHTML +=
                                                     "\n" + Object.getOwnPropertyDescriptor(myObj[prop]) + "\n";                            
                                                }
                                            }
                
                                        } else if (accMeth == "3"){
                                                            
                                            // 3) Accessing the property by [it's value] for { Displaying it's Descriptor} :
                                            var propValue = prompt("Enter your Property Value:");
                                            
                                            // Checking if the Property {Value} is Existed in the object:
                                            for (let prop in myObj){
                                                if (myObj[prop] == propValue) {
                                                    alert("Your Property has been found! >>" + prop + "It's Meta Data as following: " );                            
                                                    console.log("Your Property has been found!" , prop , "It's Meta Data as following: " );
                                                    console.log("#".repeat(15));
                                                    
                                                    
                                                    alert(Object.getOwnPropertyDescriptor(myObj[prop]));
                                                    
                                                    console.log(Object.getOwnPropertyDescriptor(myObj[prop]));
                                                    
                                                    document.getElementById("txtarea").innerHTML +=
                                                     "\n" + Object.getOwnPropertyDescriptor(myObj[prop]) + "\n";                            
                                                }
                                            }
                                        } else {                                

                                            alert("No Accessing Method has Been choosen to [Display Single Descriptor]! ");
                                        }
                                        
                                        
                                        var z00 = prompt("press (1) to restart main [Displaying All Object's Properties ] Function \n" + 
                                        " or press any other key to abort!");    
                                        
                                    } while (z00 ="1");    
                                    
                                } else {
                                    
                                    alert("No Sub-function Displaying all object's Properties has Been choosen !");
                                }
                                                                
                                var z000 = prompt("Press (1) to restart the [ Displaying All Properties Functionality ] \n" +
                                " Press any other key to Exit....");            
                            } while (z000 == "1");    
                                                        
                        } else {
                            alert("Displaying mode Aborted!");                            
                        }
                    }
                                
                    var z00 = prompt("Enter (1) for Restart the Main [Add new Property(s)]-[Edit-Delete] Function\n or any other key to abort!");
                
                } while (z00 == "1");                                                                        
                                    
            } else{

                alert("No Main Function has been Choosen!");
            }                                                                                                                                                                           
            var z = prompt("Press (1) for restart whole Applicaiton \n or any other key to abort!");
        } while (z == "1");    
    }

}

// ===========================================================================================================================

function display() {
    document.getElementById("txtarea1").innerHTML = test;
}


// ===========================================================================================================================
// Notes :
// >> The follwoing Idea can be added the Methods :
            //(1) Property can be accessed by it's value, in addition to the [Name and Number].>>> Not all elements
            //(2) Displaying all Object's Properties {Meta Data & Decriptor}. >>>> Done!

