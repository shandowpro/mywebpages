/* global document, alert, prompt */

/* JSOOP : Defining Object by {New} Method [new Objects()] Additional Applications */

function app1() {
    alert("Welcome to [Calculator] App ...");

    var myObj = new Object(),
        objVarAll = "",
        objVarN = "",
        objVarV = "";

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


    myObj.DisplayAll = function() {

        for (c = 0; c < NumsCount; c++) {
            objVarAll += "Your Object number " + (c + 1) + " as following:\n" + Names[c] + " : " + myObj[Names[c]] + "\n==========================================\n";
        }

        document.getElementById("txtarea").innerHTML = objVarAll;
        alert(objVarAll);

    }

    myObj.DisplayNames = function() {

        for (c = 0; c < NumsCount; c++) {
            objVarN += "Your Object Property Name number " + (c + 1) + " as following:\n" + Names[c] + "\n==========================================\n";
        }
        document.getElementById("txtarea").innerHTML = objVarN;
        alert(objVarN);

    }

    myObj.DisplayValues = function() {

        for (c = 0; c < NumsCount; c++) {
            objVarV += "Your Object Property Value number " + (c + 1) + " as following:\n" + myObj[Names[c]] + "\n==========================================\n";
        }
        document.getElementById("txtarea").innerHTML = objVarV;
        alert(objVarV);

    }


    var mthd = prompt("Choose your Accessing Method \n Press (1) to Display All Object Properties Names & Values \nPress (2) to Display All Object Properties Names only\n Press (3) to Display All Object Properites Values only ...");

    if (mthd == "1") {
        myObj.DisplayAll();


    } else if (mthd == "2") {
        myObj.DisplayNames();

    } else if (mthd == "3") {
        myObj.DisplayValues();

    } else {
        document.getElementById("txtarea").innerHTML = "Error Entry!";
        alert("Error Entry!");
    }
}