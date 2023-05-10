/* global document, alert, prompt */

/* JSOOP : Defining Object by [new Object();] Method {First Application user Object Creator Application} */

function userObj1() {
    
    alert("Welcome to {user Object Creator Application} by new Object Mehthod");
    
    var userObj = new Object();
    var userarrN = new Array();
    var userarrV = new Array();
    
    var meth0 = '',
    meth1 = '',
        meth2 = '',
        meth3 = '',
        meth0 = '',
        i = 0;
                    
    var count1 = parseInt(prompt("Enter the Number of Properties you wish to create in your Object"));
    
// The following Code is to Recieving Object Names And Values from the user:
    for (i = 0; i < count1 ; i++) {
        userarrN[i] = prompt("Enter your Property name number " + (i+1));
        userarrV[i]= prompt("Enter your Property Value of Property Number " + (i+1));

        userObj[userarrN[i]] = userarrV[i];        
        
        meth0 += " Object Property Number (" + (i+1) +  ") as following : \n" + userarrN[i] + " : " + userObj[userarrN[i]] + "\n ======================================= \n ";                
        
    }
    
            
    // [First Function] The Following Function is to Dispaly the {all Object elements} by {Simple Shortcut Method} [ObjName] :
    
    userObj.DisAllObj1 = function () {        
        return "All your Object Name &Value by [Simple Shortcut Method] as following : \n"  + meth0;
    };
    //====================================================================================================================

    
// [Second Function] The Following Function is to Dispaly the {all Object elements} by {Allocated Propereties by Arrays Method} [ObjName.PropertyName] :
    for (a = 0; a < count1; a++ ) {
        meth1 += "Your Object Name & Value number " + (a+1) + " as following : \n" + userarrN[a] + " : " +  userObj[userarrN[a]] + "\n =======================================\n" ;
    }
    
    userObj.DisAllObj2 = function () {
        return meth1;             
    };
//================================================================================================================

// [Third Function] The Following Function is to Dispaly the {all Object Properties Names} Only:
    for ( b= 0; b < count1; b++ ) {
        meth2 += `Your (Object Name) number ${b+1} as following : \n ${[userarrN[b]]}  \n ======================================= \n `;            
    }
    
    userObj.DisAllObjNames = function () {
        return meth2;
    };
//================================================================================================================


// [Fourth Function] The Following Function is to Dispaly the {all Object Properties Values} Only:
    for (c = 0; c < count1; c++ ) {
        meth3 += `Your (Object Value) number ${c+1} as following : \n ${userObj[userarrN[c]]}  \n ======================================= \n `;                    
    }
    
    userObj.DisAllObjValues = function () {
        return meth3;
    };
    //================================================================================================================
    
// [Fifth Function] The Following Function is to Dispaly the {Certain Object Properties Name & Value}:

    userObj.DisOneObj = function () {
        var oneObjNum = parseInt(prompt("Enter your Object Nubmer To Display it's name and Value..."));
        
        meth0 = 'Your Object Property Number (' + oneObjNum + ') as following :]\n' + userarrN[oneObjNum-1] + " : " + userObj[userarrN[oneObjNum-1]] +
        
         "\n============================================\n";
        
         document.getElementById("txtarea").innerHTML = meth0;
        
         alert(meth0);                        

        };

        
        //================================================================================================================
        var mthd = prompt("Press (1) to Display your [All Object Elements & Contaning by {Simple Shortcut Method}]... \n Press (2) to [Display All Object Elements & Contaning by {Allocated Propereties by Arrays Method}]......\n  Press (3) to [Display your Object's Names]... \n Press (4) to [Display your Object's Values]\n Press(5) to Display certain property...");
        
        if (mthd == "1") {                                        
            
            document.getElementById("txtarea").innerHTML = userObj.DisAllObj1();
            
            alert(userObj.DisAllObj1());
            
        console.log(userObj);                
//  document.getElementById("txtarea1").innerHTML =  `Your Hibernate Accessing to [External object properties Value] by [The Same object Value {Ordinary Method}] as following: \n ${singleObj1} :  ${myObj["Gender"]} \n ${singleObj2} : ${myObj["Name"]} \n ${singleObj3} : ${myObj["Age"]} \n ${singleObj4} : ${myObj["Address"]}\n=======================================`;

//alert(`Your Hibernate Accessing to [External object properties Value] by [The Same object Value {Ordinary Method}] as following: \n ${singleObj1} :  ${myObj["Gender"]} \n ${singleObj2} : ${myObj["Name"]} \n ${singleObj3} : ${myObj["Age"]} \n ${singleObj4} : ${myObj["Address"]}=======================================`);

    } else if (mthd == "2") {
        
        document.getElementById("txtarea").innerHTML = userObj.DisAllObj2();
     
        alert(userObj.DisAllObj2());
        
        console.log(userObj);
        
        //document.getElementById("txtarea1").innerHTML =  `Your Hibernate Accessing to [External object property Value] by [Single object Value] as following: \n ${singleObj1} : ${myObj[singleObj1]} \n ${singleObj2} : ${myObj[singleObj2]} \n ${singleObj3} : ${myObj[singleObj3]} \n ${singleObj4} : ${myObj[singleObj4]}\n=======================================`;                

        //alert(`Your Hibernate Accessing to [External object property Value] by [Single object Value] as following: \n ${singleObj1} : ${myObj[singleObj1]} \n ${singleObj2} : ${myObj[singleObj2]} \n ${singleObj3} : ${myObj[singleObj3]} \n ${singleObj4} : ${myObj[singleObj4]}=======================================`);
        
    } else if (mthd == "3") {        
        
        document.getElementById("txtarea").innerHTML = userObj.DisAllObjNames();
        
        alert(userObj.DisAllObjNames());
        

    } else if (mthd == "4") {        
        
        document.getElementById("txtarea").innerHTML = userObj.DisAllObjValues();
     
        alert(userObj.DisAllObjValues());       
        
        //document.getElementById("txtarea1").innerHTML = `Your Hibernate Accessing to [Object Numeric & special Character Identifiers Value] by [Bracket Notation] as following: \n  Numeric Identifier: ${myObj["1"]} \nSpecial Character Identifier 1: ${myObj["Two-"]} \nSpecial Character Identifier 2 : ${myObj["Three!"]}\nSpecial Character Identifier 3 : ${myObj["Four@"]}\nSpecial Character Identifier 4 : ${myObj["Five#"]}\nSpecial Character Identifier 5 : ${myObj["Six$"]}\n Special Character Identifier 6 : ${myObj["Seven%"]}\nSpecial Character Identifier 7 : ${myObj["Eight&"]}\nSpecial Character Identifier 8 : ${myObj["Nine*"]}\n Special Character Idetifier 9 : ${myObj["Ten^"]}\n=======================================`;
        
        //alert(`Your Hibernate Accessing to [Object Numeric & special Character Identifiers Value] by [Bracket Notation] as following: \n  Numeric Identifier: ${myObj["1"]} \nSpecial Character Identifier 1: ${myObj["Two-"]} \nSpecial Character Identifier 2 : ${myObj["Three!"]}\nSpecial Character Identifier 3 : ${myObj["Four@"]}\nSpecial Character Identifier 4 : ${myObj["Five#"]}\nSpecial Character Identifier 5 : ${myObj["Six$"]}\n Special Character Identifier 6 : ${myObj["Seven%"]}\nSpecial Character Identifier 7 : ${myObj["Eight&"]}\nSpecial Character Identifier 8 : ${myObj["Nine*"]}\n Special Character Idetifier 9 : ${myObj["Ten^"]}\n =======================================`);
        
    } else if (mthd == "5") {        
        
         userObj.DisOneObj();             
        
         
    } else {
        alert("Error Entry!");
    }
}
//==========================================================================================
//==========================================================================================
//==========================================================================================
/* JSOOP : Defining Object by [new Object();] Method {Second Application - user Object Creator Application} */

function userCalc() {
    alert("Welcome to [Calculator] App ...");

    var myObj = new Object(),
        objVarAll = "",
        objVarN = "",
        objVarV = "",
        objVarC = "";
        
    var Nums = new Array(),
        Names = new Array(),
        NumsCount = prompt("Enter the Count of your Numbers...");
        
    // Inserting the Numbers upon user Entered Count:
    for (a = 0; a < NumsCount; a++) {
        Nums[a] = parseInt(prompt("Enter your Number with count (" + (a + 1) + " )"));
    }
    
    // Setting the Object Properties Names (Names Array) & Values (Numbers Array):
    for (b = 0; b < NumsCount; b++) {
        // Defining Object Properties Names as (Names Array Elements) as Fixed Content + changing Counting number:
        Names[b] = "Number (" + (b + 1) + ")";
        //Defining Object Properties Values as (Nums Array Elements - which has been inserted already by uesr):
        myObj[Names[b]] = Nums[b];
    }
    //==============================================================================
    
    for (c = 0; c < NumsCount; c++) {
        objVarAll += "Your Object number " + (c + 1) + " as following:\n" + Names[c] + " : " + myObj[Names[c]] + "\n==========================================\n";
    }

    myObj.DisplayAll = function() {
        return objVarAll;        
    }
    //================================================================================
    
    for (c = 0; c < NumsCount; c++) {
        objVarN += "Your Object Property Name number " + (c + 1) + " as following:\n" + Names[c] + "\n==========================================\n";
    }
        
    myObj.DisplayNames = function() {                        
        return objVarN;        
    }
    //================================================================================
    
    for (c = 0; c < NumsCount; c++) {
        objVarV += "Your Object Property Value number " + (c + 1) + " as following:\n" + myObj[Names[c]] + "\n==========================================\n";
    }
    
    myObj.DisplayValues = function() {                                        
        return objVarV;        
    }    
    //================================================================================
    
    
    myObj.DisplayCertain = function () {
        
        var ElementNum = parseInt(prompt("Enter the number of your Object Property"));
       
        objVarC = "Your Object Property Value number " + (ElementNum) + " as following:\n" + Names[ElementNum-1] + " : " + myObj[Names[ElementNum-1]] + "\n==========================================\n";
        
        alert(objVarC);
        document.getElementById("txtarea1").innerHTML = objVarC;
 
    };
                
    //================================================================================
    
    var mthd = prompt("Choose your Accessing Method \n Press (1) to Display All Object Properties Names & Values \nPress (2) to Display All Object Properties Names only\n Press (3) to Display All Object Properites Values only\n press (4) to Display Certain Object Property ...");
    
    if (mthd == "1") {
        alert(myObj.DisplayAll());
        document.getElementById("txtarea1").innerHTML = myObj.DisplayAll();
                
    } else if (mthd == "2") {        
        alert(myObj.DisplayNames());
        document.getElementById("txtarea1").innerHTML = myObj.DisplayNames();
        
    } else if (mthd == "3") {
        alert(myObj.DisplayValues());
        document.getElementById("txtarea1").innerHTML = myObj.DisplayValues();
    
    } else if (mthd == "4") {
        myObj.DisplayCertain();
        
    } else {
        alert("Error Entry!");
        document.getElementById("txtarea1").innerHTML = "Error Entry!";
    }
}
//=--======================================================================================================

function Display1() {
    
    document.getElementById('txtarea1').textContent =  userObj1 + '#'.repeat(30);        
}

function Display2() {

    document.getElementById('txtarea2').textContent =  userCalc + '#'.repeat(30);
}