/* global document, alert, prompt */

/* JSOOP : Defining Object With Object.assign() Method */
function apps() {

    alert("Welcome to Define Object(s) with {Object.assign() Method} Applications...");

    app0();

  var app = prompt("Select between following Applications ...\n Press (1) for Defining Empty Object(s) & Full Assigning ONE source object to it's Properties and Methods [Onfly Mode + Default Mode] using {Object.assign Method}\n Press (2) for Assigning (ONE Sources Object(s)) to a (Target Pre-Defined Object) using {Object.assign Method}...\n Press (3)  Defining a new (New Empty Target Object) [Onfly Mode] & Multiple Assigning (Sources Object(s)) to the Target Object...\n Press (4) Defining a (Pre-Defined Target Object) [Onfly Mode] & Multiple Assigning (Sources Object(s)) to the Target Object\n Press (0) for Testing Object calling method from inside other function ... ");

    switch (app) {
        case "1":
            app1();
            break;
        
        case "2":
            app2();
            break;
            
        case "3":
            app3();
            break;
        
        case "4":
            app4();
            break;

        case "0":
            app0();
            break;

        default:
            alert("Error Entry!");
    }

}

function app1() {
    alert("Welcome to Defining Empty Object(s) & Full Assigning ONE source object to it's Properties and Methods [Onfly Mode + Default Mode] using {Object.assign Method} Application... ");

    alert("This Application will Include Defining (1) New Empty Target Object {onfly mode} + Assinging Full (1) Pre-Defined Source Object upon user Request to the New Empty Target Object... ");

    objSource();    
        
}
//-------------------------------------------------------------------------------------------------------------------------------------//

function app2() {
    alert("Welcome to Assigning (ONE Source Object to a (Target Pre-Defined Object) using {Object.assign Method}... ");
    
    alert("This Application will Include Assinging (1) Source Pre-Defined Object assinged upon user Request to Pre-Defined Target Object... ");
    
    objSourceF();    
}


//-------------------------------------------------------------------------------------------------------------------------------------//

function app3() {
    alert("Welcome to Define a New (Empty Target Object) [Onfly Mode] & {Multiple} Full Assigning Multiple (Sources Object(s)) to the new Target Object Application... ");
    
    alert("This Application will Include Assinging (Multiple) Sources Objects assinged upon user Request to Pre-Defined Target Object... ");

    var SCount = prompt("Enter Count of Sources Objects ...");      

    for( i = 0; i < SCount; i++) {

        alert("Let's enter your Source object nubmer (" + (i+1) + ")");
        objSource();

        // *) Assigning Full Source object Properties to the Target object : 
        Object.assign(objSource(objTar), objSource(objSrc));
    }
    
    var mthd = prompt("Press (1) to Add Extra Property(s) to the Target Object\n or press any other key to Exit...");
    
    if (mthd == "1") {

        var extCount  = prompt("Enter count of Extra Properties to Add to the Target Object..."),
            extObj = new Object(),
            extN = new Array(),
            extV = new Array(),
            allSrc = "";
        
        for (c = 0; c < extCount; c++ ) {

            extN[c] = prompt("Enter Property Name number (" + (c+1) + ")");
            extV[c] = prompt("Enter Property Value of Property Name (" + extN[c] + ")");
            extObj[extN[c]] = extV[c];
            allSrc += "Object Source' Property Nubmer " + (c+1) + " as following : \n " + extN[c] + " : \"" + extV[c] + "\"\n =====================================\n";

        }

        // Assinging Extra new Onfly Properties to the main Target Object:
        Object.assign(objSource(objTar), extObj);

        // Displaying [Source object(s)] elements (properties) {by First Way - Object's Name Method } :
        
        alert("Your Source Object as following {by First Way - Object's Name Method}: \n" + objSource(objSrc));
        //document.getElementById("txtarea").innerHTML = "Your Source Object as following {by First Way - Object's Name Method }: \n" +  objSource(objSrc);
        //document.getElementById("txtarea").innerHTML = "Your Source Object as following {by First Way - Object's Name Method }: \n" +  objSource().objSrc;
        //document.getElementById("txtarea").innerHTML = "Your Source Object as following {by First Way - Object's Name Method }: \n" +  objSource(objSrc);
        console.log("Your Source Object as following {by First Way - Object's Name Method }:\n" + objSource(objSrc));    
        
        // Displaying [Source object(s)] elements (properties) {by Second Way - Accumulated Variable Method } :
        
        alert("Your Source Object as following {by Accumulated Variable Method}: \n" + objSource(allSrc));
        document.getElementById("txtarea").innerHTML = "Your Source Object as following {by Accumulated Variable Method }: \n" + objSource(allSrc);
        console.log("Your Source Object as following {by  Accumulated Variable Method }:\n" + objSource(allSrc));    

        // Displaying [Target object] elements (properties) after assigning Sources Objects {by First Way - Object's Name Method }:
        
        alert("Your Target Object after Assigning sources Objects as following {by First Way - Object's Name Method }: " + objSource(objTar) );        
        document.getElementById("txtarea").innerHTML += "\nYour Target Object after Assigning sources Objects as following {by First Way - Object's Name Method }: " + objSource(objTar);
        console.log( "Your Target Object after Assigning sources Objects as following {by First Way - Object's Name Method }:\n" + objSource(objTar));

    } else {
        objSource.allSrc = "No Sources Object Assinged!";

        // Displaying Source object(s) elements (properties) {by First Way - Object's Name Method } :
        
        alert("Your Source Object as following {by First Way - Object's Name Method }: \n" + objSource());
        document.getElementById("txtarea").innerHTML = "Your Source Object as following {by First Way - Object's Name Method }: \n" +  objSource();
        console.log("Your Source Object as following {by First Way - Object's Name Method }:\n" + objSource());
     

        // Displaying Target Object Elements by [Second way - Accommulted Variable]:
        alert("your Source Object {by Second Way} as following {Second Way - Acc Var}: " + allSrc );
        document.getElementById("txtarea").innerHTML += "\nYour Source Object {by Second Way - Acc Var} as following {Second Way}: " +  allSrc;
        console.log("Your Source Object as following {Second Way - Acc Var}:\n" + allSrc);                                        


        // Displaying Target object elements (properties) after assigning Sources Objects {by First Way - Object's Name Method } :

        alert("Your Target Object after Assigning sources Objects as following {Object Way}: " + objTar );        
        document.getElementById("txtarea").innerHTML += "\nYour Target Object after Assigning sources Objects as following {Object Way}: " +  objTar;
        console.log( "Your Target Object after Assigning sources Objects as following {Object Way}:\n" + objTar);
    }
    
}


//-------------------------------------------------------------------------------------------------------------------------------------//

function app4() {
    alert("Welcome to Assigning (Mult Pre-Defined Sources Object(s) by User) to a (Target Pre-Defined Object) using {Object.assign Method}... ");
    
    alert("This Application will Include Assinging (Multiple) Sources Pre-Defined Object assinged upon user Request to Pre-Defined Target Object... ");    

    
    var SCount = parseInt(prompt("Enter Count of Sources Objects ...")),
        tarOjbN = new Array(),
        //TarOjbV = new Array(),
        objTar= new Object();
    
    //[4/1] Inserting Target Object Properties by user:
    alert("Let's insert the Target Object Properites Names and Values");
    
    for( z = 0; z < SCount; z++) {        
        
        tarOjbN[z] = prompt("Enter Target Prpoerty Name Number ( " + (z+1) + ")");
        objTar["Prop" + (z+1)] = tarOjbN[z];
        
    }
    
    // [4/2] Displaying Object Target Properites : 
    alert("Your Main Target Object as following : \n" + objTar);
    
    
    // [4/3] Inserting Mult Sources Object(s) Properties + Assigning All Sources Object(s) to Defined Target Object by user :
    alert("Let's insert the Source(s) Object(s) Properites Names and Values by Count of  [" + SCount + "]");
    
    for( i = 0; i < SCount; i++) {
        // *) Using external Source Objects Defing Function :
        objSource();
        
        // *) Assigning Full Source object Properties to the Target object : 
        Object.assign(objTar, objSource());
    }

    
    // [4/4] Assigning Extra [new onfly] Properties to the main target Object :
    var mthd = prompt("Press (1) to Add Extra Property(s) to the Target Object\n or press any other key to Exit...");
    
    if (mthd == "1") {
        
        var extCount  = prompt("Enter count of Extra [onfly] Properties to Add to the Target Object..."),
        extObj = new Object(),
        extN = new Array(),
        extV = new Array(),
        allSrc = "";
        
        for (c = 0; c < extCount; c++ ) {
            
            extN[c] = prompt("Enter Property Name number (" + (c+1) + ")");
            extV[c] = prompt("Enter Property Value of Property Name (" + extN[c] + ")");
            extObj[extN[c]] = extV[c];
            allSrc += "Object Source' Property Nubmer " + (c+1) + " as following : \n " + extN[c] + " : \"" + extV[c] + "\"\n =====================================\n";
            
        }
        
        // Assinging Extra Defined new Onfly Properties to the main Target Object:
        Object.assign(objTar, extObj);
        
        
        // Displaying Source object(s) elements (Properties) by [First way - Object's Name Method ]:
        alert("Your Source Object as following {First Way - Object}: \n" + objSource());
        document.getElementById("txtarea").innerHTML = "Your Source Object as following {First way - Object}: \n" +  objSource();        
        console.log("Your Source Object as following {First Way - Object}:\n" + objSource());    
        
        
        // Displaying Source object(s) elements (Properties) by [Second way - Accumulated variable Method ]:        
        alert("Your Source Object as following {Second way - Accumulated variable Method}: \n" + allSrc);
        document.getElementById("txtarea").innerHTML = "Your Source Object as following {Second way - Accumulated variable Method}: \n" + allSrc;        
        console.log("Your Source Object as following { Second way - Accumulated variable Method}:\n" + allSrc);    
        
        
        // Displaying Target object elements (properties) AFTER assigning Sources Objects :        
        alert("Your Target Object after Assigning sources Objects as following {Object Way}: " + objTar );        
        document.getElementById("txtarea").innerHTML += "\nYour Target Object after Assigning sources Objects as following {Object Way}: " +  objTar;
        console.log( "Your Target Object after Assigning sources Objects as following {Object Way}:\n" + objTar);
        
        
    } else {
        

        allSrc ="No Sources Object Inserted!";

        // Displaying Source object(s) elements (properties) :
        
        alert("Your Source Object as following {First Way - Object}: \n" + objSource());
        document.getElementById("txtarea").innerHTML = "Your Source Object as following {First way - Object}: \n" +  objSource();
        console.log("Your Source Object as following {First Way - Object}:\n" + objSource());
     

        alert("your Source Object {by Second Way} as following {Second Way - Acc Var}: " + allSrc );
        document.getElementById("txtarea").innerHTML += "\nYour Source Object {by Second Way - Acc Var} as following {Second Way}: " +  allSrc;
        console.log("Your Source Object as following {Second Way - Acc Var}:\n" + allSrc);                                        


        // Displaying Target object elements (properties) after assigning Sources Objects :

        alert("Your Target Object after Assigning sources Objects as following {Object Way}: " + objTar );        
        document.getElementById("txtarea").innerHTML += "\nYour Target Object after Assigning sources Objects as following {Object Way}: " +  objTar;
        console.log( "Your Target Object after Assigning sources Objects as following {Object Way}:\n" + objTar);
    }

}
//-------------------------------------------------------------------------------------------------------------------------------------//


//[First External Function]: Defining {Multiple} Sources Objects (Assiging one source object to new empty target object) function:
// {Include Defining Source object by user + Resulting Source object in function Return Value}...
// {Not including assinging Step due to it is exsited in the main Function }...

function objSource() {
    
    var PCount = prompt("Enter Number of Properties Count of Your ONE Source object..."),        
    objTar = Object.assign({}),
    objSrc = Object.assign({}),
    objSrcN = new Array(),
    objSrcV = new Array(),
    allSrc = "";
    
    // *) Inserting Source object Properties Names and Values : 
    for (a = 0; a < PCount; a++) {
        
        objSrcN[a] = prompt("Enter Property Name number (" + (a+1) + ")");
        objSrcV[a] = prompt("Enter Property Value of Property (" + objSrcN[a] + ")");
        objSrc[objSrcN[a]] = objSrcV[a];
        
        allSrc += "Your Source Object Element Number (" + (a+1) + ") :\n" + objSrcN[a] + " : \"" + objSrcV[a] + "\" \n ================================== \n";
        
    }
    
//    Object.assign(objTar, objSrc);
        
    
    
}
//=====================================================================================================================


//[Second External Function]: (Assiging one source object to Defined target object by user) function:
function objSourceF() {
    
    var PCount = prompt("Enter Number of Properties Count of Source Object..."),
    objTar= Object.assign({}),
    objSrc = Object.assign({}),
    objSrcN = new Array(),
    objSrcV = new Array(),
    allSrc = "";
        
    // 1) Inserting Source object Properties Names : 
    for (a = 0; a < PCount; a++) {
        
        objSrcN[a] = prompt("Enter Property Name number (" + (a+1) + ")");
        objSrcV[a] = prompt("Enter Property Value of Property (" + objSrcN[a] + ")");
        objSrc[objSrcN[a]] = objSrcV[a];
    
        allSrc += "Your Object Element Number (" + (a+1) + ") :\n" + objSrcN[a] + " : \"" + objSrcV[a] + "\" \n ================================== \n";

    }
    
    
    // 2) Displaying all Source Object Properties [Names + values]  : 
        //a) First Way {Full Object}: 

        alert("Your Source Object {by First Way - Object's name Method} as following: " + objSrc );
        document.getElementById("txtarea").innerHTML = "Your Source Object {by First Way - Object's name Method} as following: " +  objSrc + "\n";
        console.log("Your Source Object {by First Way - Object's name Method} as following:\n" + objSrc);
        
        
        //b) Second Way {for Statement}:         
        
        alert("your Source Object {by Second Way} as following: " + allSrc );
        document.getElementById("txtarea").innerHTML += "\nYour Source Object {by Second Way} as following: " +  allSrc;
        console.log("Your Source Object {by Second Way - Accumulated Variable Method} as following:\n" + allSrc);
        
        
    // 3) Assigning Full Source object Properties to the Target object : 
    Object.assign(objTar, objSrc);
        
        
    // 4) Displaying Full Target object Properties AFTER assigning Source object to it :         
    alert("Your Target Object after Assinging source object as following: " + objTar );        
    document.getElementById("txtarea").innerHTML += "\nYour Target Object after Assinging source object as following: " +  objTar;
    console.log("Your Target Object after Assinging source object as" + objTar);
}
//=====================================================================================================================
function app0() {


    const targetObj = Object.assign({});

    const src = new Object();
   
    var propArrN = new Array();
    var propArrV = new Array();


    var count = parseInt(prompt("Enter the number of your (Properties) you want to Assign to the (Target Empty Object)..."));


    // Inserting {Source Object} Names + properites :
    for (i = 0; i < count; i++) {

        propArrN[i] = prompt("Enter the Name of Object Property number (" + (i + 1) + ")");

        propArrV[i] = prompt("Enter the Value of Object Property  ( " + propArrN[i] + ")");

        src.propArrN[i] = propArrV[i];

    }
    
    // Printing {Source Object} Element to the User: 
    alert("Your Source elements as following : ");
    
    var allSrc = ""; 

    for (i = 0; i < count; i++) {

        allSrc += src[propArrN] + " : " + src[propArrV] + "\n===============================\n";                

    }

    // Assigning a function to display (Show all elements of Source Object) as one of Source Object Function:
    src.showElements = () => allSrc;

    Object.assign(targetObj, src);

    //const scrObj1 = Object.assign();

}



//  =----------------------------------------------------------------------------------------------------------------------

function Display() {
    document.getElementById('txtarea0').textContent  = apps;
}

function Display1() {
    document.getElementById('txtarea1').textContent  = app1;
}

function Display2() {
    document.getElementById('txtarea2').textContent  = app2;
}

function Display3() {
    document.getElementById('txtarea3').textContent  = app3;
}




