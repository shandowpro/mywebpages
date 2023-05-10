/* global document, alert, prompt`*/

/* JSOOP [Object Constructor Function - Dealing with Properties] */
//template-string-converter.enable;

function constProps() {

    alert("Welcome to Constructor Function - Dealing with Properites... " );

    var userCount = parseInt(prompt("Enter the nubmer of users to establish a constructor Function..."));   
    
    function constF(fName, lName, age, country, city, street) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.country = country;
        this.city = city;
        this.street = street;        
        
        this.fullName = function() {
            return `Your Full Name is ${this.fName} ${this.lName} `;
        };

        this.ageInDays = () => `your Age in Days = ${this.age * 365}`; 

        this.FullAd = function() {
            return `Your Full Address ${this.country} ${this.city} ${this.street}`;
        };

        this.allData = function () {
            return `your All user data as following : \n User First Name is ${this.fName} \n User last Name is ${this.lName} \n User Age is ${this.age} \n User country is ${this.country} \n User city is ${this.city} \n User street is ${this.street}`;
        };
    }   
    
    console.log("Enter users Parameters [for each user] as following: ");    
            
   const allObjs = new Array();

   allObjs.length = userCount;

    for (i=0; i<userCount; i++) {        
        
        alert("lets enter parameters of user's Object number ( " + (i+1) + " ) :");
        
        var ufName = prompt("Enter First name : "),
            ulName = prompt("Enter last name : "),
            uage = parseInt(prompt("Enter age : ")),
            ucountry = prompt("Enter country : "),
            ucity = prompt("Enter city : "),
            ustreet = prompt("Enter street : ");

        let user1 = new constF(ufName, ulName, uage, ucountry, ucity, ustreet);

        console.log("User object's Functions as following :\n ");
        
        console.log(user1.allData());
        console.log('\n =========================== \n');
        console.log(user1.fullName());
        console.log('\n =========================== \n');
        console.log(user1.FullAd());
        console.log('\n =========================== \n');
        console.log(user1.ageInDays());
        console.log('\n =========================== \n');

        
        allObjs[i] = user1;
        

        var z0 = prompt("press (1) to check about the Extracted object's Constructor's Name...");
        
        if (z0 == "1"){
            var z1 = prompt("press (1) for [instanceof] check Method...\n press (1) for [instanceof] check Method...\n press any other key to exit... ");

            if (z1 == "1"){
                alert("Your Choosed [instanceof] check Method ... ");
                if (user1 instanceof constF){
                    console.log('Your new Extracted Object has been Established from Constructor Function [True]');
                } else {
                    console.log('Your new Extracted Object has NOT been Established from Constructor Function [False]');
                }
                
                
            }  else if (z1 == "2") {                
                alert("Your Choosed [.constructor] check Method ... ");
                if (user1.constructor === constF){
                    console.log('Your new Extracted Object has been Established from Constructor Function [True]');
                } else {
                    console.log('Your new Extracted Object has NOT been Established from Constructor Function [False]');
                }                
            }

        } else {
            alert('Error Entry!');
        }
    }
    
    console.log('lets Print All Extracted Objects as following:');

    for (z=0; z < userCount; z++) {
        console.log(`Your extracted object number ( ${(z + 1)} ) ovarall as following: \n `);        
        console.log(allObjs[z]);
    }

}

//=========================================================================================================

function Display() {
    document.getElementById('txtarea1').textContent = constProps;
}

//=========================================================================================================
/*
//============================================================================================
function Funcs() {
    var fun = prompt("Press (1) for Testing Object applcition \n Press (2) for Adding to Object Applicaiton \n Press any other key to Exit... ");

    if (fun == "1")  {

        test();

    } else if (fun == "2" ) {

        addToObj();

    } else {
        alert("Error Entry!");
    }

}

//============================================================================================


function test(){

    alert("Welcome to testing application ");

    var count = parseInt(prompt("Enter your object's Elements Count"));    

    //console.log(`Your object Elements Count = ${count}`);
    
    var nArr = new Array();
    var vArr = new Array(); 

    const obj = new Object();

    console.log(`Printing assigned your Object elements [by for Loop] ...`);        
    
    for (i=0; i<count; i++) {

        nArr[i] = prompt("enter object name number " + (i+1));
        vArr[i] = prompt("enter object value number " + (i+1));

        Object.defineProperty(obj, nArr[i], {value:vArr[i], configurable:true});                
        
        console.log(`your first object as following : \n ${nArr[i]} : ${obj[nArr[i]]}`);
    }
    
    
    console.log(`Printing assigned your Object elements [by For-In Loop] ...`);        
    
    console.log(obj);
    console.log("=======================================================\n");

}
//===================================================================================
    
    
 function addToObj() {

    alert("Welcome to Add to Object application...");

    const nObj= {
        name : "myname",
        age : 24
    };
    
    console.log("The Basic object overall as followoing :");
    console.log(nObj);        
    var n = 0;
    
    for(a in nObj) {
        
        console.log(`Your Object number'  ${(n+1)} 'as following \n ${a} : ${nObj[a]}`);
        n++;
    }
    
    n = 0;
    
    console.log("=======================================================\n");
    
    var mthd = prompt("Press (1) for Adding to New Object [by new Variables] Mode ..\n Press (2) for Adding to New Object [by new Arrays] Mode ..\n press any other key to Exit...");
    
    if (mthd == "1") {
        
        console.log("Welcome to Adding new Elements to the Object [as new Variables] \n");
        
        var addCount = prompt("How many Element(s) do you wish to add to your basic object ?");
        
        for (z= 0; z<addCount ; z++) {
            
            var newN = prompt("Enter your new element name to add number (" + (z+1) + ") :");
            var newV = prompt("Enter your new element value to add number (" + (z+1) + ") :" );    
            Object.defineProperty(obj, newN, {value:newV, configurable:true});                
            
        }
        
        console.log("=======================================================\n");
        
        console.log("Printing Your object after adding new Elements [as new Variables] as following :");
        
        for(b in nObj) {
            
            console.log(`Your Object number' ${(n+1)} 'as following \n ${b} : ${nObj[b]}`);
            n++;
        }
        n = 0;

    } else if (mthd == "2") {
        
        console.log("Welcome to Adding new Elements to the Object [as new Arrays] \n");
        
        var addN = prompt("Enter the Count of elements to Add to the Basic Object... ");
        var addNarr = [];
        var addVarr = [];

        // Filling new Elements Names + Values and asigining it to new Object:
        alert("lets Fill new Elements Names + Values + and asigining it to new Object ... ");
        
        for (a=0; a<addN; a++) {
            addNarr[a] = prompt("Enter name of Element number :" + (a+1));
            addVarr[a] = prompt("Enter Value of Element number :" + (a+1));
                    
            Object.defineProperty(nObj, addNarr[a], {value:addVarr[a], configurable:true});                
        }
        
        console.log('Your object as overall as follwoing \n' + nObj);


        console.log("Printing Your object Elements after adding new Elements [as new Arrays] as following :");
        
        for(let c in nObj) {
            
            console.log(`Your Object number' ${(n+1)} 'as following \n ${c} : ${nObj[c]}`);
            n++;
        }
        n = 0;                
        
    }

 }
 */