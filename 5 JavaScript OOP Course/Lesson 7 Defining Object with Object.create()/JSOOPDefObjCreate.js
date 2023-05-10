/* global document, alert, prompt */

/* JSOOP : Defining Object by [Object.create()] Method */


function basic() {

    var all = "";

    var mainObj = {
        hasDiscount: true,
        showMsg: function () {
            if (this.hasDiscount) {
                return 'You Have Discount';
                
            } else {
                return 'You Don\'t Have Discount';
                
            }            
        },        
    };
    
    all += `The Main Object Elements as following : \n ${mainObj.hasDiscount} \n ${mainObj.showMsg()}\n ===========================================\n`;
        
    //==============================================================================================================================

    let otherObj = Object.create(mainObj);
    
    otherObj.hasDiscount = false;
    
    all += `The First Child Object with changing the property Value is : \n ${otherObj.hasDiscount} \n ${otherObj.showMsg()} \n =======================================\n`;    
    
    //==============================================================================================================================    
    let lastObj = Object.create(mainObj);    
    
    all += `The Last Child Object without changing the property Value is : \n ${lastObj.hasDiscount} \n ${lastObj.showMsg()} \n ==========================================\n`;        
    //==============================================================================================================================    
    
    document.getElementById("txtarea").innerHTML = all;
    
    alert(all);
    
}


//==============================================================================================================================    

function app1() {
    alert("Welcome to [Main Calculation] App ...");

    let mainObj = {

        N1: parseInt(prompt("Enter your First Number>>>")),
        N2: parseInt(prompt("Enter your Second Number>>>")),
        mthd: 0,
        dis: false,
        op: false,

        userMethod: function () {

            if (mthd == 1) {
                this.dis = true;
            } else if (mthd == 2) {
                this.dis = false;
            }

            //return 'You Choosed to ${ this.dis ? "Display your Numbers" : "Excecute an Arthmetic opertation on your Numbers" }';
            return ' ${mainObj.N1 }';
        },
        
        userCalc: function () {
            
            if (userOp == 1) {
                this.op = true;

            } else if (userOp == 2) {
                this.op = false;
            }

            return 'Your Calculation as following  :\n ${userOp ? (${this.N1} + ${this N2)} : (${this.N1} - ${this N2)} } ';
        },
        
    };
    
    var mthd = prompt("Press (1) to Display your main Nubmers\n Press (2) to Excecute another Specific Arithmetic Operation");
    
    document.getElementById("txtarea").innerHTML = mainObj.userMethod();
    
    
    var userOp = parseInt(prompt("Press (1) to Excecute Summition...\n Press (2) to Excecute Substraction..."));
    
    document.getElementById("txtarea").innerHTML = mainObj.userCalc();
    
}
//==============================================================================================================================    

function Display() {
    document.getElementById('txtarea1').textContent =  basic;
}

function Display1() {
    document.getElementById('txtarea2').textContent =  app1;
}

//==============================================================================================================================    
    /*
    let sumObj = Object.create(mainObj);
        
        operationObj : function () {
            return 'mainObj.op ? "Your Numbers are as following: ${this.N1} ${this.N2}" : "Choose your Mathematical Operation!" ';
        },
        
        
        let SubObj = Object.create(mainObj);
        
        
        
        let MultObj = Object.create(mainObj);
        
        
        
        let DivObj = Object.create(mainObj);
        
        
                        
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
   

    var mthd = prompt("Choose your Basic Calculation operation \n Press (1) to Excecute Summition Operation\n Press (2) to Excecute Substraction Operation\n Press (3) to Excecute Summition Operation \n Press (4) to Excecute Summition Operation...");

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
*/

