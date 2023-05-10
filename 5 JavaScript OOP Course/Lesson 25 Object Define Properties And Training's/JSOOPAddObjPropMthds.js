
/* global document, alert, prompt */

/* JSOOP [JS Object Properties Addtional Metods] */

function test() {

    var a = prompt("Welcome to [JS Object Properties Addtional Metods] Application \n " +
     "Press (1) to start the application \n Press any other key to Exit...");
    
    if (a != "1") {        
        alert("Good Bye!");
    } else {       

        /// a) The Following Method is the [Constructual Defining Method] in Public scope:            
        let myObj ={
            a:10,
            b:20,
            c:30,
        };
                                            
        do { 

            
            alert("Your Default Object's Properties {Full Details} as following :");
            
            for (let prop in myObj){
                alert(prop, myObj[prop]);
                console.log(prop, myObj[prop]);
                alert(Object.getOwnPropertyDescriptor(myObj, prop));            
                console.log(Object.getOwnPropertyDescriptor(myObj, prop));
                                 
            }
                                                                
            alert("Welcome to [JS Object Properties Addtional Metods] Application ...");            
            alert("This Applcation will auto Define (3) default Properties in aech object Defining Mode...");            
            
            // Choosing the Method of Declaring [Defualt Empty Object] :                                                             
            
            // 1] First Object Defining [Constructural Definging] Method :                                                             
            
            var ObjDisMth = prompt("Press (1) to Display Default Object + properties by {Constructual Method} \n "+
            " Press (2) to Display Default Object + properties by {shortcut- Direct Method} \n " + 
            "Press (3) to Display Default Object + properties by {Full Attributes Method} \n"+
            "Press (4) to Continue to Other Application Functions\n" +
            "Press (any other key) to Exit the Application \n");
            
            
            // Displaying default Object by all Methods:
            if (ObjDisMth =="1") {
                                                                
                alert("Welcome to Display Default Object + properties by {Constructual Method} ");
                
                //  / b) Displaying Default Defined Object {Costructural Method}:
                alert("your Default Defined Object's Properties + Descriptors as following :\n");            
                var strAll = "";            
                for (let prop in myObj){
                    
                    alert(prop, ":" , myObj[prop], "\n");
                    alert(Object.getOwnPropertyDescriptor(myObj,prop));

                    console.log(prop + ":" + myObj[prop]  + "\n");
                    console.log(Object.getOwnPropertyDescriptor(myObj,prop));
                    console.log("-".repeat(20));
                    
                    strAll += Object.getOwnPropertyDescriptor(myObj,prop) + "\n";
                    
                    document.getElementById("txtarea").innerHTML +=
                     "\nyour Default Defined Object as following :\n" + prop + ":" + myObj[prop] +
                      "\n >> descriptor following :\n" +
                     strAll + "\n";                        
                }
                
                strAll ="";
                // ==================================================================================================
                
            //2] Second Displaying Default Defined Object {Shortcut Method Definging Object - Direct Properties Definging}:
                
            } else if (ObjDisMth == "2"){
                                
                alert("Welcome to Display Default Object + properties by {shortcut- Direct Method} ");
                
                //2] / a) The Following Method is the [shortcut- Direct Method]:            
                
                const myObj1 = {};
                myObj1.a = 10;
                myObj1.b = 20;
                myObj1.c = 30;
                

                // 2] / b) Displaying Default Defined Object's Properties + Desrioptors {shortcut- Direct Method}:                                     
                            
                //  / b) Displaying Default Defined Object {shortcut- Direct Method}:
                alert("your Default Defined Object's Properties + Descriptors {by Shortcut Method - Direct} as following :\n");            
                console.log("your Default Defined {by Shortcut Method - Direct} as following :\n");            
                
                var strAll ='';
                
                for (let prop in myObj1){
                    
                    alert(prop, ":" , myObj1[prop], "\n");
                    alert(Object.getOwnPropertyDescriptor(myObj1,prop));

                    console.log(prop + ":" + myObj1[prop]  + "\n");
                    console.log(Object.getOwnPropertyDescriptor(myObj1,prop));
                    console.log("-".repeat(20));

                    strAll += Object.getOwnPropertyDescriptor(myObj1,prop) + "\n";
                    
                    document.getElementById("txtarea").innerHTML +=
                     "\nyour Default Defined Object as following :\n" + prop + ":" + myObj1[prop] + " >> descriptor following :\n" +
                     strAll + "\n";                        
                }
                
                strAll = "";
                // ================================================================================================================    
                
                //3] Third Defining Default Object {Object Constructual Defining + Full Attributes properties Adding plural Method}:
                
            } else if (ObjDisMth == "3"){
                
                alert("Welcome to Display Default Object + properties by {Full Attributes Method + properties Adding plural Method}");
                
                //3] / c) The Following Method is the [Full Attirbutes Defining Method]:            
                const myObj2 = {};
                Object.defineProperties(myObj2, {
                    a :{
                        writable:true,
                        enumerable:true,
                        configurable:true,
                        value:10,
                    },                    
                    b :{
                            writable:true,
                            enumerable:false,
                            configurable:true,
                            value:20,
                        },                        
                    c :{
                        writable:false,
                        enumerable:true,
                        configurable:false,
                        value:30,
                        },});
                    
                // Displaying All Default Object's Properties + Attributes {Object Constructual Defining + Full Attributes properties - Adding plural Method} :
                            
                alert("your Default Defined Object's Properties + Descriptors " +
                 "{Object Constructual Defining + Full Attributes properties - Adding plural Method} as following :\n");            
                
                console.log("your Default Defined "+
                 "{Object Constructual Defining + Full Attributes properties - Adding plural Method} as following :\n");            
                 
                var strAll = "";

                for (let prop in myObj2){
                    
                    alert(prop, ":" , myObj2[prop], "\n");
                    alert(Object.getOwnPropertyDescriptor(myObj2,prop));

                    console.log(prop + ":" + myObj2[prop]  + "\n");
                    console.log(Object.getOwnPropertyDescriptor(myObj2,prop));
                    console.log("-".repeat(20));

                    strAll += Object.getOwnPropertyDescriptor(myObj2,prop) + "\n";
                    
                    document.getElementById("txtarea").innerHTML +=
                     "\nyour Default Defined Object as following :\n" + prop + ":" + myObj2[prop] + " >> descriptor following :\n" +
                    strAll + "\n";                        
                }

                strAll = "";
                // ===========================================================                
                
            } else if(ObjDisMth == "4") {                

                // Choosing between (2) Functions [Adding/Defining new Properties Mode] + [Recent Properties + Descriptor Display Mode]:    
                var propMod = prompt(" Press (1) for Adding [new Property(s) Mode] \n" +
                " Press (2) for Properties + Descriptor [Recent Displaying Mode] \n"+
                " or press any other key to exit hte Application ");
                
                // 1] Add new Property(s) Mode:                 
                if (propMod == "1") {
                    
                    alert("Welcome to [Adding new Property(s)] Mode ");                    
                    
                    do {  
                        
                        // Choosing Adding new property(s) [Single - Multiple] Mode :
                        var addMod =prompt("Press (1) for singular-Single Adding new property Mode \n" +
                        " Press (2) for plural-Multiple Adding new properties Mode \n" +
                        " press any other key to exit..");

                        // 1] Singular-Single (One Property) Adding Mode:
                        if (addMod == "1") {
                            
                            do {

                                alert("Welcome to [singular Adding new property Mode]", "Please Assign your new property as below:");
                                
                                do {
                                    var nPropName = prompt("Enter your new Property name:");
                                    
                                    for(let prop in myObj) {
                                                                                
                                        if (prop == nPropName) {
                                                                                        
                                            alert("The name you inserted is already existed for another property!");
                                            
                                            var checkRep = prompt("Press (1) to Replace the property of the name your insert\n" +
                                            " Press (2) to Re-Insert this Property Name \n " +
                                            "or any other key to pass inserting this Property");
                                            
                                            if (checkRep =="1") {                                                
                                                                                                                                                
                                                // [Execting Replacement]: Assinging Name And vlaue of new Property:
                                                
                                                // Assinging new Property Value:
                                                var nPropVal = prompt("Enter your new Property Value:");

                                                var propWrt = prompt("Press (1) for writable property\n or Press any other key for non-Writable propety "),
                                                    propEnum = prompt("press (1) for enumerable property\n or press any other key for non-Enumeralbe "),
                                                    propConf = prompt("press (1) for configurable property\n or press any other key for non-configurable ");
                
                                                // {only writable property} :

                                                var strAll="";

                                                if (propWrt == "1" && propEnum != "1" && propConf != "1") {    

                                                                                                        
                                                    //Object.defineProperty(myObj, nPropName, {writable:true, enumerable:false, configurable:false, value:nPropVal});
                                                    
                                                    Object.defineProperty(myObj, nPropName, {writable:true, enumerable:false, configurable:false, value:nPropVal});
                                                    
                                                    strAll += Object.getOwnPropertyDescriptor(myObj,nPropName) + "\n";

                                                    // Displaying the New Added Property Details [Full Attributes]:
                                                    alert("Your New Property as following" , nPropName , ":" , myObj[nPropName], "\n" , strAll);
                                                    
                                                    console.log("Your New Property as following" + nPropName + ":" + myObj[nPropName] + "\n" +
                                                     strAll);
                                                    
                                                     console.log("#".repeat(20));
                                                    
                                                    document.getElementById("txtarea").innerHTML +=
                                                    "\nYour New Property as following\n" + nPropName + ":" + myObj[nPropName] + "\n" + strAll + "\n";

                                                    strAll ="";
                                                    
                                                    // Displaying All object's Properties after adding new Property :
                    
                                                    for (let prop in myObj){
                                                        
                                                        strAll += Object.getOwnPropertyDescriptor(myObj,prop) + "\n";

                                                        alert(prop, ":" , myObj[prop], "\n" , strAll);
                                                        
                                                        console.log(prop + ":" + myObj[prop]  + "\n" + Object.getOwnPropertyDescriptor(myObj,prop));
                                                        console.log("-".repeat(20));

                                                        
                                                        document.getElementById("txtarea").innerHTML +=
                                                        "\nyour Default Defined Object as following :\n" + prop + ":" + myObj[prop] + " >> descriptor following :\n" +
                                                        strAll + "\n";                        
                                                    }
                                                    strAll ='';
                    
                                                // {only Enumerable property }:                                
                                                } else if (propEnum == "1" && propWrt != "1" && propConf != "1") {                                        
                                                                        
                                                    //Object.defineProperty(myObj, nPropName, {writable:false, enumerable:true, configurable:false, value:nPropVal});
                                                    
                                                    Object.defineProperty(myObj, nPropName, {writable:false, enumerable:true, configurable:false, value:nPropVal});

                                                    strAll += Object.getOwnPropertyDescriptor(myObj,nPropName) + "\n";
                                                    
                    
                                                    // Displaying the New Added Property Details [Full Attributes]:
                                                    alert("Your New Property as following" , nPropName , ":" , myObj[nPropName], "\n" , strAll);
                                                    
                                                    console.log("Your New Property as following" + nPropName + ":" + myObj[nPropName] + "\n" + Object.getOwnPropertyDescriptor(myObj,nPropName));
                                                    console.log("#".repeat(20));
                                                    
                                                    document.getElementById("txtarea").innerHTML +=
                                                    "\nYour New Property as following\n" + nPropName + ":" + myObj[nPropName] + "\n" + strAll + "\n";

                                                    strAll ="";
                                                    
                                                    // Displaying All object's Properties after adding new Property :
                    
                                                    for (let prop in myObj){
                                    
                                                        strAll += Object.getOwnPropertyDescriptor(myObj,prop) + "\n";

                                                        alert(prop, ":" , myObj[prop], "\n" , strAll);
                                                                                                                
                                                        console.log(prop + ":" + myObj[prop]  + "\n" + Object.getOwnPropertyDescriptor(myObj,prop));
                                                        console.log("-".repeat(20));
                                                        
                                                        document.getElementById("txtarea").innerHTML +=
                                                        "\nyour Default Defined Object as following :\n" + prop + ":" + myObj[prop] + " >> descriptor following :\n" +
                                                        strAll + "\n";                        
                                                    }
                                                    strAll = "";
                    
                    
                                                // {only configurable property} :
                                                } else if (propConf == "1" && propWrt != "1" && propEnum != "1") {    
                                                                        
                                                    //Object.defineProperty(myObj, nPropName, {writable:false, enumerable:false, configurable:true, value:nPropVal});
                                                    Object.defineProperty(myObj, nPropName, {writable:false, enumerable:false, configurable:true, value:nPropVal});
                                                    
                                                    strAll += Object.getOwnPropertyDescriptor(myObj,nPropName) + "\n";
                                                    
                                                    // Displaying the New Added Property Details [Full Attributes]:
                                                    alert("Your New Property as following" , nPropName , ":" , myObj[nPropName], "\n" , strAll);
                                                    
                                                    console.log("Your New Property as following" + nPropName + ":" + myObj[nPropName] + "\n" + Object.getOwnPropertyDescriptor(myObj,nPropName));
                                                    console.log("#".repeat(20));
                                                    
                                                    document.getElementById("txtarea").innerHTML +=
                                                    "\nYour New Property as following\n" + nPropName + ":" + myObj[nPropName] + "\n" + strAll + "\n";
                                                    
                                                    strAll ="";
                                                    
                                                    // Displaying All object's Properties after adding new Property :
                                                    
                                                    for (let prop in myObj){
                                    
                                                        strAll += Object.getOwnPropertyDescriptor(myObj,prop) + "\n";
                                                        
                                                        alert(prop, ":" , myObj[prop], "\n" , strAll);
                                                        
                                                        console.log(prop + ":" + myObj[prop]  + "\n" + Object.getOwnPropertyDescriptor(myObj,prop));
                                                        console.log("-".repeat(20));
                                                        
                                                        document.getElementById("txtarea").innerHTML +=
                                                        "\nyour Default Defined Object as following :\n" + prop + ":" + myObj[prop] + " >> descriptor following :\n" +
                                                        strAll + "\n";                        
                                                    }
                                                    strAll = "";
                                                
                                                    
                                                //  Writable + Enumerable property :
                                                } else if (propWrt == "1" && propEnum == "1" && propConf != "1" ) {                                
                                                    
                    
                                                    //Object.defineProperty(myObj, nPropName, {writable:true, enumerable:true, configurable:false, value:nPropVal});
                                                    Object.defineProperty(myObj, nPropName, {writable:true, enumerable:true, configurable:false, value:nPropVal});

                                                    strAll += Object.getOwnPropertyDescriptor(myObj,nPropName) + "\n";

                                                    // Displaying the New Added Property Details [Full Attributes]:
                                                    alert("Your New Property as following" , nPropName , ":" , myObj[nPropName], "\n" , strAll);
                                                    
                                                    console.log("Your New Property as following" + nPropName + ":" + myObj[nPropName] + "\n" + Object.getOwnPropertyDescriptor(myObj,nPropName));
                                                    console.log("#".repeat(20));
                                                    
                                                    document.getElementById("txtarea").innerHTML +=
                                                    "\nYour New Property as following\n" + nPropName + ":" + myObj[nPropName] + "\n" + strAll + "\n";

                                                    strAll = '';

                                                    
                                                    // Displaying All object's Properties after adding new Property :
                    
                                                    for (let prop in myObj){
                                    
                                                        strAll += Object.getOwnPropertyDescriptor(myObj,prop) + "\n";

                                                        alert(prop, ":" , myObj[prop], "\n" , strAll);
                                                        
                                                        console.log(prop + ":" + myObj[prop]  + "\n" + Object.getOwnPropertyDescriptor(myObj,prop));
                                                        console.log("-".repeat(20));
                                                        
                                                        document.getElementById("txtarea").innerHTML +=
                                                        "\nyour Default Defined Object as following :\n" + prop + ":" + myObj[prop] + " >> descriptor following :\n" +
                                                        strAll + "\n";                        
                                                    }
                                                    strAll ='';
                                                    // ================================================================================================



                                                // {Writable + configurable}:
                                                } else if (propWrt == "1" && propEnum != "1" && propConf == "1" ) {                                
                    
                                                    //Object.defineProperty(myObj, nPropName, {writable:true, enumerable:true, configurable:false, value:nPropVal});
                                                    Object.defineProperty(myObj, nPropName, {writable:true, enumerable:false, configurable:true, value:nPropVal});
                                                
                                                    strAll += Object.getOwnPropertyDescriptor(myObj,nPropName) + "\n";

                                                    // Displaying the New Added Property Details [Full Attributes]:
                                                    alert("Your New Property as following" , nPropName , ":" , myObj[nPropName], "\n" , strAll);
                                                    
                                                    console.log("Your New Property as following" + nPropName + ":" + myObj[nPropName] + "\n" + Object.getOwnPropertyDescriptor(myObj,nPropName));
                                                    console.log("#".repeat(20));
                                                    
                                                    document.getElementById("txtarea").innerHTML +=
                                                    "\nYour New Property as following\n" + nPropName + ":" + myObj[nPropName] + "\n" + strAll + "\n";

                                                    
                                                    // Displaying All object's Properties after adding new Property :
                    
                                                    for (let prop in myObj){
                                                        
                                                        strAll += Object.getOwnPropertyDescriptor(myObj,prop) + "\n";

                                                        alert(prop, ":" , myObj[prop], "\n" , strAll);
                                                        
                                                        console.log(prop + ":" + myObj[prop]  + "\n" + Object.getOwnPropertyDescriptor(myObj,prop));
                                                        console.log("-".repeat(20));
                                                        
                                                        document.getElementById("txtarea").innerHTML +=
                                                        "\nyour Default Defined Object as following :\n" + prop + ":" + myObj[prop] + " >> descriptor following :\n" +
                                                        strAll + "\n";                        
                                                    }
                                                    strAll ='';
                                                    // ================================================================================================
                                                
                                                // {Enumerable+ configurable}:
                                                } else if (propWrt != "1" && propEnum == "1" && propConf == "1" ) {                                

                    
                                                    //Object.defineProperty(myObj, nPropName, {writable:true, enumerable:true, configurable:false, value:nPropVal});
                                                    Object.defineProperty(myObj, nPropName, {writable:false, enumerable:true, configurable:true, value:nPropVal});
                                                
                                                    strAll += Object.getOwnPropertyDescriptor(myObj,nPropName) + "\n";

                                                    // Displaying the New Added Property Details [Full Attributes]:
                                                    alert("Your New Property as following" , nPropName , ":" , myObj[nPropName], "\n" , strAll);
                                                    
                                                    console.log("Your New Property as following" + nPropName + ":" + myObj[nPropName] + "\n" + Object.getOwnPropertyDescriptor(myObj,nPropName));
                                                    console.log("#".repeat(20));
                                                    
                                                    document.getElementById("txtarea").innerHTML +=
                                                    "\nYour New Property as following\n" + nPropName + ":" + myObj[nPropName] + "\n" + strAll + "\n";
                                                    
                                                    strAll ='';
                                                    // Displaying All object's Properties after adding new Property :
                    
                                                    for (let prop in myObj){
                                    
                                                        strAll += Object.getOwnPropertyDescriptor(myObj,prop) + "\n";

                                                        alert(prop, ":" , myObj[prop], "\n" , strAll);
                                                        
                                                        console.log(prop + ":" + myObj[prop]  + "\n" + Object.getOwnPropertyDescriptor(myObj,prop));
                                                        console.log("-".repeat(20));
                                                        
                                                        document.getElementById("txtarea").innerHTML +=
                                                        "\nyour Default Defined Object as following :\n" + prop + ":" + myObj[prop] + " >> descriptor following :\n" +
                                                        strAll + "\n";                        
                                                    }
                    
                                                    // ================================================================================================
                                                    
                                                // {All True}:                                                            
                                                } else if (propWrt == "1" && propEnum == "1" && propConf == "1") {                            
                                                    
                                                    Object.defineProperty(myObj, nPropName, {writable:true, enumerable:true, configurable:true, value:nPropVal});
                                                    
                                                    strAll += Object.getOwnPropertyDescriptor(myObj,nPropName) + "\n";
                                                                                                                    
                                                    // Displaying the New Added Property Details [Full Attributes]:
                                                    alert("Your New Property as following" , nPropName , ":" , myObj[nPropName], "\n" , strAll);
                                                    
                                                    console.log("Your New Property as following" + nPropName + ":" + myObj[nPropName] + "\n" + Object.getOwnPropertyDescriptor(myObj,nPropName));
                                                    console.log("#".repeat(20));
                                                    
                                                    document.getElementById("txtarea").innerHTML +=
                                                    "\nYour New Property as following\n" + nPropName + ":" + myObj[nPropName] + "\n" + strAll + "\n";
                                                    
                                                    strAll ='';
                                                    // Displaying All object's Properties after adding new Property :
                    
                                                    for (let prop in myObj){
                                    
                                                        strAll += Object.getOwnPropertyDescriptor(myObj,prop) + "\n";
                                                        alert(prop, ":" , myObj[prop], "\n" , strAll);
                                                        
                                                        console.log(prop + ":" + myObj[prop]  + "\n" + Object.getOwnPropertyDescriptor(myObj,prop));
                                                        console.log("-".repeat(20));
                                                        
                                                        document.getElementById("txtarea").innerHTML +=
                                                        "\nyour Default Defined Object as following :\n" + prop + ":" + myObj[prop] + " >> descriptor following :\n" +
                                                        strAll + "\n";                                                                                
                                                    }

                                                    strAll = '';
                                                    // ================================================================================================
                                                        
                                                // All False:                                            
                                                } else if (propWrt != "1" && propEnum != "1" && propConf != "1") {                            

                                                    Object.defineProperty(myObj, nPropName, {writable:false, enumerable:false, configurable:false, value:nPropVal});
                                                    
                                                    strAll += Object.getOwnPropertyDescriptor(myObj,nPropName) + "\n";
                                                    
                                                    // Displaying the New Added Property Details [Full Attributes]:
                                                    alert("Your New Property as following" , nPropName , ":" , myObj[nPropName], "\n" , strAll);
                                                    
                                                    console.log("Your New Property as following" + nPropName + ":" + myObj[nPropName] + "\n" + Object.getOwnPropertyDescriptor(myObj,nPropName));
                                                    console.log("#".repeat(20));
                                                    
                                                    document.getElementById("txtarea").innerHTML +=
                                                    "\nYour New Property as following\n" + nPropName + ":" + myObj[nPropName] + "\n" + strAll + "\n";

                                                    strAll = "";
                                                    
                                                    // Displaying All object's Properties after adding new Property :
                    
                                                    for (let prop in myObj){
                                    
                                                        strAll += Object.getOwnPropertyDescriptor(myObj,prop) + "\n";
                                                        alert(prop, ":" , myObj[prop], "\n" , strAll);
                                                        
                                                        console.log(prop + ":" + myObj[prop]  + "\n" + Object.getOwnPropertyDescriptor(myObj,prop));
                                                        console.log("-".repeat(20));
                                                        
                                                        document.getElementById("txtarea").innerHTML +=
                                                        "\nyour Default Defined Object as following :\n" + prop + ":" + myObj[prop] + " >> descriptor following :\n" +
                                                        strAll + "\n";                        
                                                    }
                                                    strAll ='';
                                                    // ================================================================================================
                                                } else {
                                                    alert("Error Entry!");
                                                }                            
                                                q = "0";
                                            } else if (checkRep == "2") {                                            
                                                // [Execting Re-Insereting]: Assinging Name And vlaue of new Property:
                                                q = "1";
                                                break;                                                
                                            
                                            } else {                                            
                                                alert("Adding this property has Been Canceled!");
                                                q="0";
                                                break;
                                            }                                            
                                    
                                        } else {                                            
                                            // [Executing First Adding]:
                                            // Assinging new Property Value:
                                            var nPropVal = prompt("Enter your new Property Value:");
                                            
                                            // Assinging Attributes of new Property:
                                            var propWrt = prompt("Press (1) for writable property\n or Press any other key for non-Writable propety "),
                                                propEnum = prompt("press (1) for enumerable property\n or press any other key for non-Enumeralbe "),
                                                propConf = prompt("press (1) for configurable property\n or press any other key for non-configurable ");
                
                                            // {only writable property} :
                                            if (propWrt == "1" && propEnum != "1" && propConf != "1") {    
                                                
                                                //Object.defineProperty(myObj, nPropName, {writable:true, enumerable:false, configurable:false, value:nPropVal});
                                                
                                                Object.defineProperty(myObj, nPropName, {writable:true, enumerable:false, configurable:false, value:nPropVal});

                                                strAll += Object.getOwnPropertyDescriptor(myObj,nPropName) + "\n";
                                                
                                                // Displaying the New Added Property Details [Full Attributes]:
                                                alert("Your New Property as following" , nPropName , ":" , myObj[nPropName], "\n" , strAll);
                                                
                                                console.log("Your New Property as following" + nPropName + ":" + myObj[nPropName] + "\n" + Object.getOwnPropertyDescriptor(myObj,nPropName));
                                                console.log("#".repeat(20));
                                                
                                                document.getElementById("txtarea").innerHTML +=
                                                "\nYour New Property as following\n" + nPropName + ":" + myObj[nPropName] + "\n" + strAll + "\n";
                                                
                                                strAll = "";
                                                // Displaying All object's Properties after adding new Property :
                
                                                for (let prop in myObj){
                                
                                                    strAll += Object.getOwnPropertyDescriptor(myObj,prop) + "\n";
                                                    alert(prop, ":" , myObj[prop], "\n" , strAll);
                                                    
                                                    console.log(prop + ":" + myObj[prop]  + "\n" + Object.getOwnPropertyDescriptor(myObj,prop));
                                                    console.log("-".repeat(20));
                                                    
                                                    document.getElementById("txtarea").innerHTML +=
                                                    "\nyour Default Defined Object as following :\n" + prop + ":" + myObj[prop] + " >> descriptor following :\n" +
                                                    strAll + "\n";                        
                                                }
                                                
                                                strAll ="";
                
                                            // {only Enumerable property }:                                
                                            } else if (propEnum == "1" && propWrt != "1" && propConf != "1") {                                                                                        
                
                                                //Object.defineProperty(myObj, nPropName, {writable:false, enumerable:true, configurable:false, value:nPropVal});
                                                
                                                Object.defineProperty(myObj, nPropName, {writable:false, enumerable:true, configurable:false, value:nPropVal});
                                                
                                                strAll += Object.getOwnPropertyDescriptor(myObj,nPropName) + "\n";
                
                                                // Displaying the New Added Property Details [Full Attributes]:
                                                alert("Your New Property as following" , nPropName , ":" , myObj[nPropName], "\n" , strAll);
                                                
                                                console.log("Your New Property as following" + nPropName + ":" + myObj[nPropName] + "\n" + strAll);
                                                console.log("#".repeat(20));
                                                
                                                document.getElementById("txtarea").innerHTML +=
                                                "\nYour New Property as following\n" + nPropName + ":" + myObj[nPropName] + "\n" + strAll + "\n";
                                                
                                                strAll ="";
                                                // Displaying All object's Properties after adding new Property :
                
                                                for (let prop in myObj){
                                
                                                    strAll += Object.getOwnPropertyDescriptor(myObj,prop) + "\n";

                                                    alert(prop, ":" , myObj[prop], "\n" , strAll);
                                                    
                                                    console.log(prop + ":" + myObj[prop]  + "\n" + Object.getOwnPropertyDescriptor(myObj,prop));
                                                    console.log("-".repeat(20));
                                                    
                                                    document.getElementById("txtarea").innerHTML +=
                                                    "\nyour Default Defined Object as following :\n" + prop + ":" + myObj[prop] + " >> descriptor following :\n" +
                                                    strAll + "\n";                        
                                                }
                                                strAll = "";
                
                                            // {only configurable property} :
                                            } else if (propConf == "1" && propWrt != "1" && propEnum != "1") {    
                                                                
                                                //Object.defineProperty(myObj, nPropName, {writable:false, enumerable:false, configurable:true, value:nPropVal});
                                                Object.defineProperty(myObj, nPropName, {writable:false, enumerable:false, configurable:true, value:nPropVal});
                                                
                                                strAll += Object.getOwnPropertyDescriptor(myObj,nPropName) + "\n";

                                                // Displaying the New Added Property Details [Full Attributes]:
                                                alert("Your New Property as following" , nPropName , ":" , myObj[nPropName], "\n" , strAll);
                                                
                                                console.log("Your New Property as following" + nPropName + ":" + myObj[nPropName] + "\n" + Object.getOwnPropertyDescriptor(myObj,nPropName));
                                                console.log("#".repeat(20));
                                                
                                                document.getElementById("txtarea").innerHTML +=
                                                "\nYour New Property as following\n" + nPropName + ":" + myObj[nPropName] + "\n" + strAll + "\n";
                                                
                                                strAll ='';
                                                // Displaying All object's Properties after adding new Property :
                
                                                for (let prop in myObj){
                                
                                                    strAll += Object.getOwnPropertyDescriptor(myObj,prop) + "\n";

                                                    alert(prop, ":" , myObj[prop], "\n" , strAll);
                                                    
                                                    console.log(prop + ":" + myObj[prop]  + "\n" + Object.getOwnPropertyDescriptor(myObj,prop));
                                                    console.log("-".repeat(20));
                                                    
                                                    document.getElementById("txtarea").innerHTML +=
                                                    "\nyour Default Defined Object as following :\n" + prop + ":" + myObj[prop] + " >> descriptor following :\n" +
                                                    strAll + "\n";                        
                                                }
                                            
                                                strAll ="";
                                            //  Writable + Enumerable property :
                                            } else if (propWrt == "1" && propEnum == "1" && propConf != "1" ) {                                

                
                                                //Object.defineProperty(myObj, nPropName, {writable:true, enumerable:true, configurable:false, value:nPropVal});
                                                Object.defineProperty(myObj, nPropName, {writable:true, enumerable:true, configurable:false, value:nPropVal});

                                                strAll += Object.getOwnPropertyDescriptor(myObj,nPropName) + "\n";
                                            
                                                // Displaying the New Added Property Details [Full Attributes]:
                                                alert("Your New Property as following" , nPropName , ":" , myObj[nPropName], "\n" , strAll);
                                                
                                                console.log("Your New Property as following" + nPropName + ":" + myObj[nPropName] + "\n" + Object.getOwnPropertyDescriptor(myObj,nPropName));
                                                console.log("#".repeat(20));
                                                
                                                document.getElementById("txtarea").innerHTML +=
                                                "\nYour New Property as following\n" + nPropName + ":" + myObj[nPropName] + "\n" + strAll + "\n";
                                                
                                                strAll ="";
                                                
                                                // Displaying All object's Properties after adding new Property :
                
                                                for (let prop in myObj){
                                
                                                    strAll += Object.getOwnPropertyDescriptor(myObj,prop) + "\n";

                                                    alert(prop, ":" , myObj[prop], "\n" , strAll);
                                                    
                                                    console.log(prop + ":" + myObj[prop]  + "\n" + Object.getOwnPropertyDescriptor(myObj,prop));
                                                    console.log("-".repeat(20));
                                                    
                                                    document.getElementById("txtarea").innerHTML +=
                                                    "\nyour Default Defined Object as following :\n" + prop + ":" + myObj[prop] + " >> descriptor following :\n" +
                                                    strAll + "\n";                        
                                                }
                                                
                                                strAll ="";
                                                // ================================================================================================
                                            // {Writable + configurable}:
                                            } else if (propWrt == "1" && propEnum != "1" && propConf == "1" ) {                                

                
                                                //Object.defineProperty(myObj, nPropName, {writable:true, enumerable:true, configurable:false, value:nPropVal});
                                                Object.defineProperty(myObj, nPropName, {writable:true, enumerable:false, configurable:true, value:nPropVal});
                                            
                                                strAll += Object.getOwnPropertyDescriptor(myObj,nPropName) + "\n";

                                                // Displaying the New Added Property Details [Full Attributes]:
                                                alert("Your New Property as following" , nPropName , ":" , myObj[nPropName], "\n" , strAll);
                                                
                                                console.log("Your New Property as following" + nPropName + ":" + myObj[nPropName] + "\n" + Object.getOwnPropertyDescriptor(myObj,nPropName));
                                                console.log("#".repeat(20));
                                                
                                                document.getElementById("txtarea").innerHTML +=
                                                "\nYour New Property as following\n" + nPropName + ":" + myObj[nPropName] + "\n" + strAll + "\n";
                                                
                                                strAll ="";
                                                // Displaying All object's Properties after adding new Property :
                
                                                for (let prop in myObj){
                                
                                                    alert(prop, ":" , myObj[prop], "\n" , Object.getOwnPropertyDescriptor(myObj,prop));
                                                    
                                                    console.log(prop + ":" + myObj[prop]  + "\n" + Object.getOwnPropertyDescriptor(myObj,prop));
                                                    console.log("-".repeat(20));
                                                    
                                                    document.getElementById("txtarea").innerHTML +=
                                                    "\nyour Default Defined Object as following :\n" + prop + ":" + myObj[prop] + " >> descriptor following :\n" +
                                                    Object.getOwnPropertyDescriptor(myObj,prop) + "\n";                        
                                                }
                
                                                // ================================================================================================
                                            
                                            // {Enumerable+ configurable}:
                                            } else if (propWrt != "1" && propEnum == "1" && propConf == "1" ) {                                
                                                                
                                                //Object.defineProperty(myObj, nPropName, {writable:true, enumerable:true, configurable:false, value:nPropVal});
                                                Object.defineProperty(myObj, nPropName, {writable:false, enumerable:true, configurable:true, value:nPropVal});
                                            
                                                strAll += Object.getOwnPropertyDescriptor(myObj,nPropName) + "\n";

                                                // Displaying the New Added Property Details [Full Attributes]:
                                                alert("Your New Property as following" , nPropName , ":" , myObj[nPropName], "\n" , strAll);
                                                
                                                console.log("Your New Property as following" + nPropName + ":" + myObj[nPropName] + "\n" + Object.getOwnPropertyDescriptor(myObj,nPropName));
                                                console.log("#".repeat(20));
                                                
                                                document.getElementById("txtarea").innerHTML +=
                                                "\nYour New Property as following\n" + nPropName + ":" + myObj[nPropName] + "\n" + strAll + "\n";
                                                
                                                strAll ="";

                                                // Displaying All object's Properties after adding new Property :

                
                                                for (let prop in myObj){
                                
                                                    strAll += Object.getOwnPropertyDescriptor(myObj,prop) + "\n";

                                                    alert(prop, ":" , myObj[prop], "\n" , strAll);
                                                    
                                                    console.log(prop + ":" + myObj[prop]  + "\n" + Object.getOwnPropertyDescriptor(myObj,prop));
                                                    console.log("-".repeat(20));
                                                    
                                                    document.getElementById("txtarea").innerHTML +=
                                                    "\nyour Default Defined Object as following :\n" + prop + ":" + myObj[prop] + " >> descriptor following :\n" +
                                                    strAll + "\n";                        
                                                }
                                                strAll = "";
                                                // ================================================================================================
                                                
                                            // {All True}:                                                            
                                            } else if (propWrt == "1" && propEnum == "1" && propConf == "1") {                            
                                                                                                
                                                Object.defineProperty(myObj, nPropName, {writable:true, enumerable:true, configurable:true, value:nPropVal});

                                                strAll += Object.getOwnPropertyDescriptor(myObj,nPropName) + "\n";
                                                                                                                
                                                // Displaying the New Added Property Details [Full Attributes]:
                                                alert("Your New Property as following" , nPropName , ":" , myObj[nPropName], "\n" , strAll);
                                                
                                                console.log("Your New Property as following" + nPropName + ":" + myObj[nPropName] + "\n" + Object.getOwnPropertyDescriptor(myObj,nPropName));
                                                console.log("#".repeat(20));
                                                
                                                document.getElementById("txtarea").innerHTML +=
                                                "\nYour New Property as following\n" + nPropName + ":" + myObj[nPropName] + "\n" + strAll + "\n";
                                                
                                                strAll ="";
                                                // Displaying All object's Properties after adding new Property :
                
                                                for (let prop in myObj){
                                
                                                    strAll += Object.getOwnPropertyDescriptor(myObj,prop) + "\n";

                                                    alert(prop, ":" , myObj[prop], "\n" , strAll);
                                                    
                                                    console.log(prop + ":" + myObj[prop]  + "\n" + Object.getOwnPropertyDescriptor(myObj,prop));
                                                    console.log("-".repeat(20));
                                                    
                                                    document.getElementById("txtarea").innerHTML +=
                                                    "\nyour Default Defined Object as following :\n" + prop + ":" + myObj[prop] + " >> descriptor following :\n" +
                                                    strAll + "\n";                        
                                                }
                                                strAll ="";
                                                // ================================================================================================
                                                    
                                            // All False:                                            
                                            } else if (propWrt != "1" && propEnum != "1" && propConf != "1") {                            
                                                
                                                Object.defineProperty(myObj, nPropName, {writable:false, enumerable:false, configurable:false, value:nPropVal});
                                                
                                                strAll += Object.getOwnPropertyDescriptor(myObj,nPropName) + "\n";

                                                // Displaying the New Added Property Details [Full Attributes]:
                                                alert("Your New Property as following" , nPropName , ":" , myObj[nPropName], "\n" , strAll);
                                                
                                                console.log("Your New Property as following" + nPropName + ":" + myObj[nPropName] + "\n" + strAll);
                                                console.log("#".repeat(20));
                                                
                                                document.getElementById("txtarea").innerHTML +=
                                                "\nYour New Property as following\n" + nPropName + ":" + myObj[nPropName] + "\n" + strAll + "\n";
                                                
                                                strAll = "";
                                                // Displaying All object's Properties after adding new Property :
                
                                                for (let prop in myObj){
                                
                                                    strAll += Object.getOwnPropertyDescriptor(myObj,prop) + "\n";
                                                    
                                                    alert(prop, ":" , myObj[prop], "\n" , strAll);
                                                
                                                    console.log(prop + ":" + myObj[prop]  + "\n" + strAll);
                                                    console.log("-".repeat(20));
                                                    
                                                    document.getElementById("txtarea").innerHTML +=
                                                    "\nyour Default Defined Object as following :\n" + prop + ":" + myObj[prop] + " >> descriptor following :\n" +
                                                    strAll + "\n";                        
                                                }
                                                strAll ="";
                                                // ================================================================================================
                                            } else {
                                                alert("Error Entry!");
                                            }
                                            q="0";                            
                                            break;

                                        }
                                    }
                                } while (q == "1");

                            // ================================================================================================
                            // ================================================================================================
                            var z = prompt("Press (1) to restart the [singular-Single Adding new property Mode]\n" +
                             " or press any other key to abort this Mission!");

                        } while (z == "1");                                        
                    } else if (addMod == "2") {                            

                        // (Plural-Multiple) Adding new Properties Mode:
                        alert("Welcome to [Plural Adding new properties Mode]");
                        
                        do { 
                                                            
                            var count = parseInt(prompt("Enter your Desired count of new properties to Add to the default object ")),
                                arrPropNames = [],
                                arrPropValues = [],
                                arrPropWrit = [],
                                arrPropEnum = [],
                                arrPropConf = [];
                        
                            alert("let insert new Properties {Names}:");
                            
                            // Receiving Properties names from user of all object's Properties from user:
                            
                            for (i = 0 ; i<count; i++) {
                                do {
                                    var q ='';
                                    strName = prompt("Enter your new Property's name with number" , (i+1));
                                    
                                    for (let prop in myObj){
                                        if (prop = strName){                                            
                                            alert("This Name is already taken for another Property's Name!");
                                            q = prompt("Press (1) to Re-Insert the Property's name:\n or any other key to pass it ");

                                            if (q != "1") {
                                                alert("the property has been Passed!");                                                
                                                q = '0';
                                                break;
                                            } else {
                                                alert("lets re-insert the property Name...");
                                                q = "1";
                                                break;
                                            }
                                            // q = "1";
                                        } else {
                                            arrPropNames[i] = strName;
                                            alert("The property has been Added Successfuly!");
                                            q = "0";
                                            break;
                                        }
                                    }                                

                                } while (q == "1");
                            }
                            
                            
                            alert("let insert new Properties {Values}:");
                            // Receiving Properties Values from user of all object's Properties from user:
                            for (i = 0; i<count; i++) {
                                arrPropValues[i] = prompt("Enter your Property value number" , (i+1));                        
                            }
                            

                            alert("let Assign new Properties Attributes:");
                            // Receiving Properties {Writable Attribute} from user of all object's Properties from user:                        

                            alert("a) Lets Start Assinging {Writable} Attribute");
                            for (i = 0; i<count; i++) {
                                alert("Assing Writable Attribute of Property Number[" , (i+1) + "]");
                                
                                do {
                                    var propWritBol = prompt("Insert :(1) for {writable:true}\n Insert :(2) for {writable:false} ");
                                    
                                    if (propWritBol == "1") {
                                        arrPropWrit[i] = true;
                                        
                                    } else if (propWritBol == "2") {
                                        arrPropWrit[i] = false;
                                        
                                    } else {
                                        alert("Error Entry!");
                                    }
                                    
                                } while (propWritBol != "1" && propWritBol != "2");
                                
                            }
                            
                            // Receiving Properties {Enumerable Attribute} from user of all object's Properties from user:
                            alert("b) Lets Start Assinging {Enumberable} Attribute");
                            for (i = 0; i<count; i++) {
                                alert("Assing Enumerable Attribute of Property Number[" , (i+1) + "]");
                                
                                do {
                                    var propEnumBol = prompt("Insert :(1) for {Enumerable:true}\n Insert :(2) for {Enumerable:false} ");
                                    
                                    if (propEnumBol == "1") {
                                        arrPropEnum[i] = true;
                                        
                                    } else if (propEnumBol == "2") {
                                        arrPropEnum[i] = false;
                                        
                                    } else {
                                        alert("Error Entry!");
                                    }
                                    
                                } while (propEnumBol != "1" && propEnumBol != "2");                            
                                
                            }
                            
                            // Receiving Properties {Configurable Attribute} of all object's Properties from user:
                            alert("c) Lets Start Assinging configurable Attribute");
                            for (i = 0; i<count; i++) {
                                alert("Assing Configurable Attribute of Property Number[" , (i+1) + "]");
                                
                                do {
                                    var propConfBol = prompt("Insert :(1) for {Configurable:true}\n Insert :(2) for {Configurable:false} ");
                                    
                                    if (propConfBol == "1") {
                                        arrPropConf[i] = true;
                                        
                                    } else if (propConfBol == "2") {
                                        arrPropConf[i] = false;
                                        
                                    } else {
                                        alert("Error Entry!");
                                    }
                                    
                                } while (propConfBol != "1" && propConfBol != "2");
                                
                            }
                            
                            // ==============================================================================
                            
                            var addMthd = prompt("Choose your Adding Method\n " +
                            "Press (1) for {single Define Property} [Object.defineProperty();]" +
                            "Press (2) for {Multiple Define Property} [Object.defineProperties();]");
                            
                            if (addMthd == "1") {
                                
                                // using Single defining Property Method [inside a for - loop]:
                                
                                for (i = 0; i<count ; i++) {
                                    Object.defineProperty(myObj, arrPropNames[i] , {writable:arrPropWrit[i], enumerable:arrPropEnum[i], configurable:arrPropConf[i], value:arrPropValues[i]});                                        
                                }                            

                                alert("Object after Adding new Properties as following:");

                                
                            } else if (addMthd == "2") {

                                alert("This Method Need Revision");
                                // using Plural defining properties Method [inside a for - loop] :
                                // This Method needs revision:
                                // for (i = 0; i<count ; i++) {
                                    
                                    //     Object.defineProperties(myObj, {
                                        //         arrPropNames[i]: {
                                            //             value : arrPropValues[i],
                                            //             writable : arrPropWrit[i],
                                            //             enumerable : arrPropEnum[i],
                                            //             configurable : arrPropConf[i],
                                //         },         
                                //     });
                                
                                // }
                                
                                                        
                            } else {                            
                                alert("No Adding New properties [Single syntax - Multiple Syntax ] has been Choosen!");
                            }
                            
                            // ==============================================================================    
                                
                                var z = prompt("Press (1) to Restart [Plural-Multiple Adding new properties Mode]");
                            } while (z == "1");
                                                                                
                        } else {                        
                            alert("No adding Mode [Add Single - Add Multiple] Choosen to perform Adding Function!");
                        }
                
                        var z = prompt("press (1) to restart the Full [Add New Property(s) Mode]\n or Press any other key to abort this mode!");
                    } while (z == "1");

            // ====================================================================================================================
                } else if (propMod == "2") {

                    // 2] Display Mode [descriptor - keys] Mode:
                    alert("Welcome to [Displaying Mode]" , "Please choose your [Displaying function] ");
                    var strAll ="";
                    do {

                        var disFunc = prompt("Press (1) for Displaying Specific property Descriptor\n " + 
                        "Press (2) for Displaying all properties keys (Numerable Properties Names) \n  ");
                    
                        if (disFunc == "1") {

                            alert("Welcome to [Displaying Specific property Descriptor]","Choose your {Acceesing Method} to your Property");
                            
                            do {

                                // Choosing sub-Accessing of [Descriptor Displaying function] :
                                var AccMthd = prompt("Press (1) for [Name Accessing Method ] \n Press (2) for [Value Accessing Method ]");
                                                            
                                if (AccMthd == "1"){

                                    alert("Welcome to [Name Accessing Method]");
                                    
                                    var propName = prompt("Enter your property Name to have it's Descriptor :");
                                   
                                    strAll += Object.getOwnPropertyDescriptor(myObj,nPropName) + "\n";

                                    alert("Your property\n" , propName ,  ":" , myObj[propName] ,"\n's  Decriptor is :\n" ,
                                        strAll);
                                    
                                    console.log( "Your property\n" + propName +  ":" , myObj[propName] + "\n's Decriptor is: \n" +
                                        Object.getOwnPropertyDescriptor(myObj,propName));
                                    
                                    console.log("#".repeat(20));                
                                                                    
                                    document.getElementById("txtarea").innerHTML +=
                                        "Your property\n" , propName ,  ":" , myObj[propName] +"\n's Decriptor is: \n" +
                                        strAll + "\n";
                                    
                                    strAll ="";
                                    //------------------------------------------------------------------------------------------                            

                                } else if (AccMthd =="2"){
                                    
                                    alert("Welcome to [Value Accessing Method]");
                                    
                                    var strAll= "";

                                    var propValue = prompt("Enter your property Value to have it's Descriptor :");
                                                                
                                    // Checkfing for the property in the Defined object {by it's Value}:
                                    for (let prop in myObj){
                                        
                                        if (myObj[prop] == propValue) {                                    
                                            
                                            strAll += Object.getOwnPropertyDescriptor(myObj,prop) + "\n";

                                            alert("Your property \n" , prop ,  ":" , myObj[prop] , "\n's Decriptor is :\n",
                                            strAll);
                                            
                                            console.log("Your property \n" + prop +  ":" + myObj[prop] + "\n's Decriptor is: \n" +
                                            Object.getOwnPropertyDescriptor(myObj,prop));
                                            
                                            document.getElementById("txtarea").innerHTML +=
                                            "Your property \n" + prop +  ":" + myObj[prop] + "\n's Decriptor is: \n" +
                                            strAll + "\n";
                                        }
                                    }
                                    strAll ="";
                                
                                } else {                                    
                                    alert("No Method has been Choosen to performe [displaying Descriptor]!");
                                }

                                var z = prompt("Press (1) to Retart the [Displaying Mode] \n or any other key to abort this Mssion!");
                            } while(z =="1");

                        } else if (disFunc == "2") {
                            
                            do {
                            
                                alert("Welcome to [Displaying all Enumerable only Object's properties Names]");
    
                                alert("Numerable Object's Properties (keys) Names:\n" , Object.keys(myObj));
                                            
                                console.log("Numerable Object's Properties (keys) Names:\n" + Object.keys(myObj));
                                
                                document.getElementById("txtarea").innerHTML +=
                                    "Numerable Object's Properties (keys) Names:\n" + Object.keys(myObj) + "\n";
                            
                                var z = prompt("press (1) to Restart the [all Enumerable Object's properties Names(keys)]");
                            } while (z=="1");

                        } else {                            

                            alert("No Displaying Function has been Choosen!");
                        }                                                                                                                        
                
                        var z = prompt("Press (1) to restart the [Full Display Mode] \n or any other key to Abort!");
                    } while (z=="1"); 

                    
                } else {                    
                    alert("No Mode [Add + Display] has Been Choosen!");
                }                                                
                
            } else {                
                alert("Good bye!");
                break;
            }
            
            // ===========================================================
            // ===========================================================
            var z = prompt("Press (1) to restart the whole Application ");
        } while (z == "1");    
    }

}

// =============================================================================================================================================

function display() {
    document.getElementById("SourceCode").innerHTML = test;
}

// =============================================================================================================================================



//             var strAll = "";

//             alert("Please Choose a [Main Function] of [Default Object] to Execute from Below... ");                                        

//             z0 = prompt("Press (1) to Display the [Main Default Object's Syntax] \n " +
//             " Press (2) to [Add/Define new Property(s)] + [Edit/delete a Pre-defined Property] to the Default Object{with All Meta data & descriptors} \n" +       
//             " Press (3) to [Displaying All Properties Functionality Data ] \n" +            
//             " Press any other key to Exit ... ");
        
//             // First Main Functionality :
//             if (z0 =="1") {                        
                                
//                 do {
                    
//                     alert("Welcome to [Display the {Default Object}]");
//                     alert("Your [Object] as following: ");
//                     alert(myObj);
                    
//                     console.log("Your [Object] as following: ");
//                     console.log(myObj);
//                     console.log("-".repeat(15));
                    
//                     document.getElementById("txtarea").innerHTML += "\nMain [Default Object] as following ...\n " +
//                         myObj + "\n <br> \n";

//                     var z00 = prompt("Enter (1) to restart the Application\n or any other key to abort this Main Function..");
//                 } while (z00 == "1");
                    
//             // Second Main functionality :            
//             } else if (z0 == "2") {       
                
//                 do {
                    
//                     alert("Welcome to [Add/Define new Property(s) - Edit/delete a Pre-defined Property] to the Default Object ...");
//                     alert("A) Adding New Object's properties...");
//                     console.log("A) Adding New Object's properties...");
                    
//                     var count = prompt("Enter the Count of desired Property(s) to Add/Define to the Default Object ... "),
//                         arrName = new Array (),
//                         arrValue = new Array (),
//                         arr = new Array();
                
//                     arr.length = count;                
//                     arrName.length = count;                
//                     arrValue.length = count;                
                    
//                     // Adding new Properties to the object & [detecting all property's Meta data/Attributes]:
//                     for (i=0 ; i<count; i++) {                                                                            
                        
//                         alert("Welcome to [Adding new Propety to the Default object ] number " + (i+1) +
//                         "\nPlease detect object's Property's Meta Data as following :");
                        
//                         console.log("Please Assign object's Property's Meta Data as following :");
                        
//                         var PropName = prompt("Enter Property Name Number :" + (i+1)),
//                         PropValue = prompt("Enter Property Value Number :" + (i+1));
                
//                         //Assigning Object's Properties's Meta data:
//                         var writableP = prompt("Press (1) for {writable} Property {true} Configuration\n" +
//                         " or (2) for {Writable} Property {false} configuration ");
                    
//                         if (writableP =="1") {

//                             // {writable} Property {true}:
//                             var enumerable = prompt("Press (1) for {enumerable} Property {true} Configuration\n " +
//                             " or (2) for {enumerable} Property {false} configuration ");
                            
//                             if (enumerable =="1") {
                                
//                                 var configurable = prompt("Press (1) for {configurable} Property {true} Configuration\n " +
//                                 "or (2) for {Configurable} Property {false} configuration ");
                                
//                                 if (configurable == "1") {
//                                     // [writable:True, enumerable:True, configurable:True ]:
//                                     Object.defineProperty(myObj, PropName , {writable:true, enumerable:true, configurable:true, value:PropValue});
//                                     arr[i] = "Property number (" + (i+1) +  ")" + " As following:\n" +  PropName + myObj[PropName];
//                                     arrName[i] = PropName;
//                                     arrValue[i] = myObj[PropName];
                                    
//                                 } else {
//                                     // [writable:True, enumerable:True, configurable:false ]:
//                                     Object.defineProperty(myObj, PropName , {writable:true, enumerable:true, configurable:false, value:PropValue});                                                                
//                                     arr[i] = "Property number (" + (i+1) +  ")" + " As following:\n" +  PropName + myObj[PropName];
//                                     arrName[i] = PropName;
//                                     arrValue[i] = myObj[PropName];
//                                 }
                                
//                             }  else {
                                
//                                 var configurable = prompt("Press (1) for {configurable} Property {true} Configuration\n " +
//                                 "or (2) for {Configurable} Property {false} configuration ");
                                
//                                 if (configurable == "1") {
//                                     // [writable:True, enumerable:False, configurable:True ]:
//                                     Object.defineProperty(myObj, PropName , {writable:true, enumerable:false, configurable:true, value:PropValue});
//                                     arr[i] = "Property number (" + (i+1) +  ")" + " As following:\n" +  PropName + myObj[PropName];
//                                     arrName[i] = PropName;
//                                     arrValue[i] = myObj[PropName];
                                    
//                                 } else {
//                                     // [writable:True, enumerable:False, configurable:false ]:
//                                     Object.defineProperty(myObj, PropName , {writable:true, enumerable:false, configurable:false, value:PropValue});                                                                
//                                     arr[i] = "Property number (" + (i+1) +  ")" + " As following:\n" +  PropName + myObj[PropName];
//                                     arrName[i] = PropName;
//                                     arrValue[i] = myObj[PropName];
//                                 }
                                
//                             }
                            
//                         } else {

//                             //{writable} Property {false}:
                            
//                             var enumerable = prompt("Press (1) for {enumerable} Property {true} Configuration\n" +
//                             " or (2) for {enumerable} Property {false} configuration ");
                            
//                             if (enumerable =="1") {
                                
//                                 var configurable = prompt("Press (1) for {configurable} Property {true} Configuration\n " +
//                                 "or (2) for {Configurable} Property {false} configuration ");
                                
//                                 if (configurable == "1") {
//                                     // [writable:false, enumerable:True, configurable:True ]:
//                                     Object.defineProperty(myObj, PropName , {writable:false, enumerable:true, configurable:true, value:PropValue});
//                                     arr[i] = "Property number (" + (i+1) +  ")" + " As following:\n" +  PropName + myObj[PropName];
//                                     arrName[i] = PropName;
//                                     arrValue[i] = myObj[PropName];
                                    
//                                 } else {
//                                     // [writable:false, enumerable:True, configurable:false ]:
//                                     Object.defineProperty(myObj, PropName , {writable:false, enumerable:true, configurable:false, value:PropValue});                                                                
//                                     arr[i] = "Property number (" + (i+1) +  ")" + " As following:\n" +  PropName + myObj[PropName];
//                                     arrName[i] = PropName;
//                                     arrValue[i] = myObj[PropName];
//                                 }
                                
//                             }  else {
                                
//                                 var configurable = prompt("Press (1) for {configurable} Property {true} Configuration\n " +
//                                 " or (2) for {Configurable} Property {false} configuration ");
                                
//                                 if (configurable == "1") {
                                
//                                     // [writable:false, enumerable:False, configurable:True ]:
//                                     Object.defineProperty(myObj, PropName , {writable:false, enumerable:false, configurable:true, value:PropValue});
//                                     arr[i] = "Property number (" + (i+1) +  ")" + " As following:\n" +  PropName + myObj[PropName];
//                                     arrName[i] = PropName;
//                                     arrValue[i] = myObj[PropName];
                                    
//                                 } else {
                                
//                                     // [writable:false, enumerable:False, configurable:false ]:
//                                     Object.defineProperty(myObj, PropName , {writable:false, enumerable:false, configurable:false, value:PropValue});                                                                
//                                     arr[i] = "Property number (" + (i+1) +  ")" + " As following:\n" +  PropName + myObj[PropName];
//                                     arrName[i] = PropName;
//                                     arrValue[i] = myObj[PropName];
//                                 }
                                
//                             }
                            
//                         }
                        
//                         // Displaying the Object brief after adding the new Property:
//                         alert("Object's current Property(s) Displaying [by the Array Method] as following :");
//                         alert(arr);
                        
//                         console.log("Object's current Property(s) Displaying [by the Array Method] as following :");                    
//                         console.log(arr);

//                         console.log("-".repeat(15));
                        
//                         document.getElementById("txtarea").innerHTML += "\n your Object's current Property(s) as following :\n" , arr;
                        
//                         console.log("#".repeat(15));
//                         // ============================================================
                        
//                         alert("Object's current Property(s) Displaying [by the Object Method] as following :");
//                         alert(myObj);
                        
                        
//                         console.log("Object's current Property(s) Displaying [by the Object Method] as following :");
//                         console.log(myObj);
                        
//                         document.getElementById("txtarea").innerHTML += "\nyour Object's current Property(s) as following :\n" + myObj;
                        
//                         console.log("#".repeat(10));
//                     }     
                
//                     // Choosing Editing-Deelting mode: 
//                     var EditChoose = prompt("Press (1) to Enter [Edit-Delete] Mode \n or press any other key to abort!");

//                     if (EditChoose == "1"){
                                                
//                         alert("Welcome to Edit Mode ");
                        
//                         var editDel = prompt("Press (1) for {Editing (value)} Funcionality\n Press (2) for {Deleting} Functionality\n" +
//                         " or Press any other key to Abort!");
                
//                         if (editDel == "1") {

//                             // Editing Functionality:
//                             alert("Welcome to [Editing (Value) Functoinality..]");
                            
//                             var editMthd = prompt("Choose your Object's Property Accessing Method to process Editing by \n" +
//                             " Press (1) for [Property Name Accessing] Method\n " +
//                             " Press (2) for [Property Number Accessing] Method to process Editing by\n " +
//                             " or any other key to abort!");
                            
//                             if (editMthd == "1"){
//                                 // [{Property Name} Accessing] Method:
//                                 alert("Welcome to [Property Name Accessing] Method");
                                
//                                 var propName = prompt("Insert the property Name to Edit..."),
//                                     NpropValue = prompt("Insert the property new Value to change ...");
                                
//                                 // Changing Property Value Function:
//                                 myObj[propName] = NpropValue;

//                                 alert("your Property after changing as following :\n", propName , ":" + myObj[propName]);
                                
//                                 console.log("your Property after Changing as following :\n", propName , ":" + myObj[propName]);
//                                 console.log("-".repeat(15));
                                
//                                 document.getElementById("txtarea").innerHTML +=
//                                 "your Property after changing as following :\n" + propName + ":" + myObj[propName];
                                
//                                 // ----------------------------------------------------------------------------------------------------------
                                
//                                 // Displaying All Object's Properties after Editing:
//                                 for (let prop in myObj) {
//                                     alert(prop , ":" , myObj[prop]);
                                    
//                                     console.log(prop , ":" , myObj[prop]);
//                                     console.log("-".repeat(15));
                                    
//                                     document.getElementById("txtarea").innerHTML = "\n" + prop + ":" + myObj[prop] + "\n";
//                                 }
                                
//                                 // ----------------------------------------------------------------------------------------------------------                        
                                
//                             } else if (editMthd =="2") {                        
//                                 // [Property Number Accessing] Method:
//                                 alert("Welcome to [Property Number Accessing] Method");
                                
//                                 var propNum = parseInt(prompt("Insert the property Number to Edit..."))-1,
//                                 NpropValue = prompt("Insert the property new Value to change ...");
                                
//                                 // Changing Property Value Function:
//                                 myObj[arrName[propNum]] = NpropValue;
                                
//                                 alert("your Property after changing Value as following :\n" + arrName[propNum] + ":" +
//                                  myObj[arrName[propNum]]);
                                
//                                 console.log("your Property after Changing Value as following :\n", arrName[propNum] , ":" , myObj[arrName[propNum]]);
//                                 console.log("-".repeat(15));
                                
//                                 document.getElementById("txtarea").innerHTML +=
//                                 "\n your Property after changing Value as following :\n" +
//                                 arrName[propNum] + ":" + myObj[arrName[propNum]] + "\n";
                                
                                
//                                 // Displaying All Object's Properties after Editing:
//                                 for (let prop in myObj) {
//                                     alert(prop , ":" , myObj[prop]);
                                    
//                                     console.log(prop , ":" , myObj[prop]);
//                                     console.log("-".repeat(15));
                                    
//                                     document.getElementById("txtarea").innerHTML += "\n" + prop + ":" + myObj[prop] + "\n";
//                                 }
                                
                                
//                             } else {
//                                 alert("No {Accessing Method} for [Editing] has been choosen!");
//                             }
//                             /// ================================================================================================
//                             /// ================================================================================================
//                         /// ================================================================================================
                        
//                         // Delelting Functionality:
//                         } else if (editDel == "2") {
//                             alert("Welcome to [Deleting Functoinality..]");

//                             // Choosing deleting Methods:
//                             var delMthd = prompt("Choose your Object's Property Accessing Method to process Deleting by \n" +
//                             " Press (1) for [Property Name Accessing] Method\n " +
//                             " Press (2) for [Property Number Accessing] Method to process Deleting by\n" +
//                             " or any other key to abort!");
                            
//                             if (delMthd == "1"){

//                                 // [{Deleting} by (a) {Property Name} Accessing] Method:
//                                 alert("Welcome to [Property Name Accessing] Method");
                                
//                                 var propName = prompt("Insert the property Name to delete..."),
//                                     NdelProp = myObj[propName];                            
                                
//                                 // Checking if the property is Exist in the Object:
//                                 for (let prop in myObj) {
//                                     if (prop == propName) {
                                        
//                                         // Deleting Property Function:
//                                         delete myObj[propName];
                                        
//                                         alert("your Property with Name [" + NdelProp + "] has been Deleted Successfully! ");
                                        
//                                         console.log("your Property with Name [" , NdelProp , "] has been Deleted Successfully!");
//                                         console.log("-".repeat(15));
                                        
//                                         document.getElementById("txtarea").innerHTML +=
//                                         "your Property with Name [" +
//                                         NdelProp + "] has been Deleted Successfully!";        
                                            
//                                     }
//                                 }
                                
//                                 // ----------------------------------------------------------------------------------------------------------
                                
//                                 // Displaying All Object's Properties after Deleting Process :
//                                 for (let prop in myObj) {
//                                     alert(prop , ":" , myObj[prop]);
                                    
//                                     console.log(prop , ":" , myObj[prop]);
//                                     console.log("-".repeat(15));
                                    
//                                     document.getElementById("txtarea").innerHTML = prop + ":" + myObj[prop];
//                                 }
                                
//                                 // ----------------------------------------------------------------------------------------------------------
//                                 // ----------------------------------------------------------------------------------------------------------
                                
                                
//                             } else if (delMthd =="2") {                        
//                                 // [Property Number Accessing] Method:
//                                 alert("Welcome to [Property Number Accessing] Method");
                                
//                                 // [{Deleting} by (b) {Property Number} Accessing] Method:
//                                 var propNum = parseInt(prompt("Insert the property Number to Delete..."))-1;
                                
                                
//                                 // Checking if the property is Exist in the Object:
                                
//                                 // >> The follwoing code need for Testing :                        
//                                 for (let prop in myObj) {
//                                     if (myObj[prop].count == propNum) {
                                        
//                                         var NdelProp = arrName[propNum];
//                                         // Deleting Property Function:
//                                         delete myObj[prop];
                                        
//                                         alert("your Property with count : " + myObj[prop].count + " and Name [" + NdelProp +
//                                          "] has been Deleted Successfully! ");
                                        
//                                         console.log("your Property with Name [" , myObj[prop].count , NdelProp , "] has been Deleted Successfully!");
//                                         console.log("-".repeat(15));
                                        
//                                         document.getElementById("txtarea").innerHTML +=
//                                          "your Property with count [" +  myObj[prop].count +
//                                          "] and Name [" + NdelProp + "] has been Deleted Successfully!";        
                                        
//                                     }
//                                 }
//                                 // ----------------------------------------------------------------------------------------------------------

//                                 // // Deleting Property Function:
//                                 // delete myObj[arrName[propNum]];
                                
//                                 // alert("your Property with Name [" + NdelProp + "] has been Deleted Successfully! ");
//                                 // console.log("your Property with Name [" + NdelProp + "] has been Deleted Successfully!");
                                
//                                 // document.getElementById("txtarea").innerHTML +=
//                                 //  "your Property with Name [" +
//                                 //  NdelProp + "] has been Deleted Successfully!";
                                

//                                 // Displaying All Object's Porperties [Name + Values] after Deleting :
//                                 for (let prop in myObj) {
//                                     alert(prop , ":" , myObj[prop]);
//                                     console.log(prop , ":" , myObj[prop]);
//                                     console.log("-".repeat(15));
                                    
//                                     strAll += prop , ":" , myObj[prop];    
//                                 }
                                
//                                 document.getElementById("txtarea").innerHTML += "\n" + strAll + "\n";
//                                 strAll = "";
                                
//                             } else {
//                                 alert("No Accessing Method has Been Choosen to delete!");
//                             }
                            
//                         } else { 
//                             alert("No (Edit-Delete) Functionality has Been Choosen!");                    
//                         }                                        

//                     } else {
//                         alert("Editing mode Aborted!");
                        
//                         var disMod = prompt("Press (1) to Enter Display Mode \n or any other key to exit ");
                        
//                         if (disMod == "1") {
                            
//                             do {                                
                                                                                                        
//                                 var disFunc = prompt(" Welcome to {Displaying Mode} [Displaying All Properties Functionality ],"+
//                                 " Choose a Sub- Display Function from Below..\n" +
//                                 " Press (1) to [display all Object's Properties Names] of the Default Object \n" +
//                                 " Press (2) to [display all Object's Properties values] of the Default Object \n " +
//                                 " Press (3) to [display all Object's Properties Names + Values] of the Default Object \n" +
//                                 " Press (4) to [display all Object's Properties Meta Data] of the Default Object \n" +
//                                 " Press (5) to [display specific Object's Property's Meta Data] of the Default Object ");
                                
                                
//                                 // Displaying All Object's Properites [Names Functionlality]:
//                                 if (disFunc=="1") {
                                                                        
//                                     // Choosing Displaying all Object's Properties Names Method:
//                                     alert("Welcome to [display all Object's Properties Names] of the Default Object ...");
                                    
//                                     var NamesDisMth = prompt("Choose your displaying Names Method]\n" +
//                                     " press (1) for Shortcut Method {Object.getOwnPropertyName();}...\n " +
//                                     " press (2) for Looping [for-in] Method...");
                                    
//                                     //1) Display Names by ShortCut Method:
//                                     if (NamesDisMth == "1") {
                
//                                         alert("Welcome to [Shortcut Method {Object.getOwnPropertyName();}] ");
                                        
//                                         alert(Object.getOwnPropertyNames(myObj));
                                        
//                                         console.log(Object.getOwnPropertyNames(myObj));                        
//                                         console.log("-".repeat(15));
                                        
//                                         document.getElementById("txtarea").innerHTML +=
//                                          "\n" + Object.getOwnPropertyNames(myObj) + "\n";
                                        
//                                     //2) Display Names by Loopoing for-in Method:
//                                     } else if (NamesDisMth == "2"){
                                        
//                                         alert("Welcome to [for-in Looping [for-in] Method] for displaying Object's All Propeties Names ");                                                
                                        
//                                         alert("Your Object's Properties Names  as following : ");
//                                         console.log("Your Object's Properties Names as following : ");
                                        
//                                         for (let prop in myObj) {
//                                             alert( prop );
//                                             console.log( prop );                        
//                                             console.log("-".repeat(15));
                                            
//                                             document.getElementById("txtarea").innerHTML += "\n" + prop + "\n";
//                                         }
                                        
//                                     } else {

//                                         alert("No Displaying Object's Properties {Names} Method has been choosen!");
//                                     }           
                                    
                                    
//                                 // Displaying All Object's Properites Values Functionality :
//                                 } else if (disFunc=="2"){
                                                    
//                                     alert("Welcome to [display all Object's Properties values] of the Default Object ...");
                                    
//                                     var ValueDisMth = prompt("Choose your displaying Method]\n " +
//                                     " press (1) for Shortcut Method {Object.getOwnPropertyValue();}...\n " + 
//                                     " press (2) for Looping [for-in] Method...");
                                    
//                                     // 1) Displaying all properties by [ShortCut Mehtod]>> {Need Revision}:                        
//                                     if (ValueDisMth == "1") {                            

//                                         alert("This Method NMeeds Revision [Shortcut Method]");
//                                         // alert(Object.get);
                                        
//                                         // console.log(Object.getOwnPropertyNames(myObj));                        
                                        
//                                         // document.getElementById("txtarea").innerHTML += "\n" + Object.getOwnPropertyNames(myObj) + "\n";
                
//                                     // 2) Displaying all properties by [Looping for-in]>> {Need Revision}:
//                                     } else if (ValueDisMth == "2"){

//                                         alert("Welcome to [for-in Looping [for-in] Method] for displaying Object's All Propeties Values ");                                                
                                        
//                                         alert("Your Object's Properties Values  as following : ");
//                                         console.log("Your Object's Properties Values as following : ");
                                        
//                                         for (let prop in myObj) {
//                                             alert( myObj[prop] );
//                                             console.log( myObj[prop]);                        
//                                             console.log( "#".repeat(15));                        
                                            
//                                             document.getElementById("txtarea").innerHTML += "\n" + myObj[prop] + "\n";
//                                         }
                                        
//                                     } else {

//                                         alert("No Displaying Object's Properties {Values} Method has been choosen!");
//                                     }           
                                    
//                                     // Third Sub Function of Displaying:                                                                                                    
//                                 } else if (disFunc=="3") {

//                                     alert("Welcome to [display all Object's Properties {Names + Values}] of the Default Object ...");
//                                     alert("Object's Properties as following :");
                                    
//                                     for (let prop in myObj){
//                                         alert(prop , myObj[prop]);
//                                         console.log(prop , myObj[prop]);
//                                         console.log( "#".repeat(15));                        
                                        
//                                         document.getElementById("txtarea").innerHTML += "\n" + prop + ":" + myObj[prop] + "\n" ;
//                                     }
                                    
                                    
//                                     // Fourth Sub Function of Displaying:                                                                                                    
//                                 } else if (disFunc=="4") {

//                                     alert("Welcome to [display all Object's Properties {Meta Data}] of the Default Object ...");
//                                     alert("Object's Properties Meta Data as following :");
                                    
//                                     alert(Object.getOwnPropertyDescriptor(myObj));
                
//                                     console.log(Object.getOwnPropertyDescriptor(myObj));
                
//                                     console.log( "#".repeat(15));                        
                                    
//                                     document.getElementById("txtarea").innerHTML = Object.getOwnPropertyDescriptor(myObj);
                                    
                                    
//                                     // Fifth Sub Function of Displaying:                                                                                                    
//                                 } else if (disFunc=="5") {
                                    
//                                     do {

//                                         alert("Welcome to [display specific Object's Property {Meta Data}] of the Default Object ...");
//                                         alert("Displaying specific Object's Property Meta Data as following :");
                                        
//                                         var accMeth = prompt("Press (1) for Accessing Property by {Array Number} \n " +
//                                         "Press (2) for Accessing Property by {Property Value} \n" +
//                                         " Press (3) for Accessing Property by {Property Name}");
                                        
//                                         if (accMeth == "1") {
                                                            
//                                             // 1) Accessing the property by ['it's Nubmer'] in Array of Object's properties {for Displaying it's Descriptor}:
//                                             var propNum = parseInt(prompt("Enter your Property Number:"))-1;
                                            
//                                             for (let prop in myObj){
//                                                 if (prop == arrName[propNum]) {
//                                                     alert("Your Property has been found! >>" + prop + "It's Meta Data as following: " );                            
                                                    
//                                                     console.log("Your Property has been found!" , prop , "It's Meta Data as following: " );
                                                    
//                                                     alert(Object.getOwnPropertyDescriptor(myObj[arrName[propNum]]));
                                                    
//                                                     console.log(Object.getOwnPropertyDescriptor(myObj[arrName[propNum]]));
//                                                     console.log( "#".repeat(15));                        
                                                    
//                                                     document.getElementById("txtarea").innerHTML +=
//                                                      "\n" + Object.getOwnPropertyDescriptor(myObj[arrName[propNum]]) + "\n";                            
//                                                 }
//                                             }
                
//                                         } else if (accMeth == "2"){
                                                                                    
//                                             // 2) Accessing the property by [it's Name] {for Displaying it's Descriptor} :
//                                             var propName = prompt("Enter your Property Name:");
                                            
//                                             // Checking if the Property name is Existed in the object:
//                                             for (let prop in myObj){
//                                                 if (prop == propName) {
//                                                     alert("Your Property has been found! >>" + prop + "It's Meta Data as following: " );                            
//                                                     console.log("Your Property has been found!" , prop , "It's Meta Data as following: " );
                                                    
//                                                     alert(Object.getOwnPropertyDescriptor(myObj[prop]));                            
                                                    
//                                                     console.log(Object.getOwnPropertyDescriptor(myObj[prop]));
                                                    
//                                                     document.getElementById("txtarea").innerHTML +=
//                                                      "\n" + Object.getOwnPropertyDescriptor(myObj[prop]) + "\n";                            
//                                                 }
//                                             }
                
//                                         } else if (accMeth == "3"){
                                                            
//                                             // 3) Accessing the property by [it's value] for { Displaying it's Descriptor} :
//                                             var propValue = prompt("Enter your Property Value:");
                                            
//                                             // Checking if the Property {Value} is Existed in the object:
//                                             for (let prop in myObj){
//                                                 if (myObj[prop] == propValue) {
//                                                     alert("Your Property has been found! >>" + prop + "It's Meta Data as following: " );                            
//                                                     console.log("Your Property has been found!" , prop , "It's Meta Data as following: " );
//                                                     console.log("#".repeat(15));
                                                    
                                                    
//                                                     alert(Object.getOwnPropertyDescriptor(myObj[prop]));
                                                    
//                                                     console.log(Object.getOwnPropertyDescriptor(myObj[prop]));
                                                    
//                                                     document.getElementById("txtarea").innerHTML +=
//                                                      "\n" + Object.getOwnPropertyDescriptor(myObj[prop]) + "\n";                            
//                                                 }
//                                             }
//                                         } else {                                

//                                             alert("No Accessing Method has Been choosen to [Display Single Descriptor]! ");
//                                         }
                                        
                                        
//                                         var z00 = prompt("press (1) to restart main [Displaying All Object's Properties ] Function \n" + 
//                                         " or press any other key to abort!");    
                                        
//                                     } while (z00 ="1");    
                                    
//                                 } else {
                                    
//                                     alert("No Sub-function Displaying all object's Properties has Been choosen !");
//                                 }
                                                                
//                                 var z000 = prompt("Press (1) to restart the [ Displaying All Properties Functionality ] \n" +
//                                 " Press any other key to Exit....");            
//                             } while (z000 == "1");    
                                                        
//                         } else {
//                             alert("Displaying mode Aborted!");                            
//                         }
//                     }
                                
//                     var z00 = prompt("Enter (1) for Restart the Main [Add new Property(s)]-[Edit-Delete] Function\n or any other key to abort!");
                
//                 } while (z00 == "1");                                                                        
                                    
//             } else{

//                 alert("No Main Function has been Choosen!");
//             }                                                                                                                                                                           
//             var z = prompt("Press (1) for restart whole Applicaiton \n or any other key to abort!");
//         } while (z == "1");    
//     }

// }

// // ===========================================================================================================================



// // ===========================================================================================================================
// // Notes :
// // >> The follwoing Idea can be added the Methods :
//             //(1) Property can be accessed by it's value, in addition to the [Name and Number].>>> Not all elements
//             //(2) Displaying all Object's Properties {Meta Data & Decriptor}. >>>> Done!

