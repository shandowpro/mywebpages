/* global document, alert, prompt*/

/* JSOOP [Object Constructor Built In Function ] */
//template-string-converter.enable;

function constBuilt() {
    
    alert("Welcome to Constructor Function Built-In (Practical Training )... " );
    
    // Selecting between [Data Type] to deal with :
    var mthd = prompt("Press (1) for [String Data Type Built-In Consturctor Function]\n Press (2) for [ Number Data Type Built-In Consturctor Function ]\n Press (3) for [ boolean Data Type Built-In Consturctor Function ]\n Press (4) for [ Array Data Type Built-In Consturctor Function ]\n Press (5) for [ Object Data Type Built-In Consturctor Function ]\n or Press Any other key to Exit... ");

    switch (mthd){
        // [String Data Type]:
        case "1":
            alert("Welcome to [String Data Type Built-In Consturctor Function] ...");

            var arrCont = parseInt(prompt("How many String Value you wish to Create ?"));
                strAll ="",
                strArr = new Array();            
            
            strArr.length = arrCont;


            // Recieving String Variables Values from User:  
            for (i=0; i<arrCont; i++) {
        
                var str1 = new String();
                strArr[i] = prompt("Enter your String Variable's Value number ( " + (i+1) + ") ...");                    
                
                str1 = strArr[i];
                
                alert(`Your String Variable ${str1} of Number : ${(i+1)} Contructor Function name is ${str1.constructor}`);
                
                strAll += `String Variable ${str1} of Number : ${(i+1)} => Contructor Function name is ${str1.constructor}\n`;                
                                        
            }
   
            
            document.getElementById("areatxt").innerHTML = strAll + '\n';

            // Selecting Internal Method [Solo Mehod - Multiple] :
            var interMthd = prompt("Press (1) for Solo Method...\n Press (2) for Multiple Method...  ");

            if (interMthd == "1") {
                alert("Welcome to [Solo Method - one String Variable ] string Data Type Built_In Constructor Function... ");
                
                // Selecting [Built-In String Functions] to apply on Stirng Array Element:
                let funcs = prompt("Press (1) for [to UpperCase()] Internal Built-In Function... \n Press (2) for [to LowerCase()] Internal Built-In Function... \n Press (3) for [length()] Internal Built-In Function...");
                
                if(funcs == "1") {
                    alert("Welcome to [to UpperCase()] Internal Built-In Function [Solo Mode]...");
                    
                    do {                        
                        var n = parseInt(prompt("Enter index of String Array Element to Apply the Function [to Upper case] on it ...")) -1;
                        
                        console.log(`your String Value Before Applying Built in Function as Following : => ${strArr[n]}`);
                        strAll += `your String Value Before Applying Built in Function as Following : => ${strArr[n]} \n`;
                        
                        strArr[n].toUpperCase();
                        
                        var strConstName =  strArr[n].constructor;
                        
                        console.log(`your String Value after Applying Built in Function as Following :${strArr[n]}`);
                        console.log(`your String ( ${strArr[n]} ) with index ${(n+1)} Constructor Function Name is :${strConstName}`);
                        
                        strAll += `your String Value After Applying Built in Function as Following :${strArr[n]} \n & it's Constructor Function Name is :${strConstName} \n`;
                                                                        
                        var z = prompt("Press (1) to restart the Internal Function on another Element \n or press any other key to Exit.. ");
                    } while (z == "1");
                    
                } else if(funcs == "2") {                    
                    alert("Welcome to [to LowerCase()] Internal Built-In Function [Solo Mode]...");
                    
                    do {                                                
                        var n = parseInt(prompt("Enter index of String Array Element to Apply the Function [Lower Case] on it..."))-1;
                        
                        strAll += `your String Value Before Applying Built in Function as Following : => ${strArr[n]} \n`;
                        
                        strArr[n].toUpperCase();
                        
                        var strConstName =  strArr[n].constructor;
                        
                        strArr[n].toLowerCase();
                        
                        console.log(`your String Value after Applying Built in Function as Following :${strArr[n]}`);                    
                        console.log(`your String ( ${strArr[n]} ) with index ${(n+1)} Constructor Function Name is :${strConstName}`);
                        
                        strAll += `your String Value After Applying Built in Function as Following :${strArr[n]} \n & it's Constructor Function Name is :${strConstName} \n`;
                        
                        var z = prompt("Press (1) to restart the Internal Funciton on anoter Element \n or press any other key to Exit.. ");
                    } while (z == "1");                    
                    
                } else if(funcs == "3") {                    
                    alert("Welcome to [to Length()] Internal Built-In Function [Solo Mode]...");
                    
                    do {                                                
                        
                        var n = parseInt(prompt("Enter index of String Array Element to Apply on ..."))-1;
                        var lenVar = strArr[n].length;                        
                        
                        var strConstName =  strArr[n].constructor;
                        
                        console.log(`your String Value after Applying Built in Function as Following :${lenVar}`);
                        console.log(`your String Number ${(n+1)} Constructor Function Name is :${strConstName}`);
                        
                        strAll += `your String Value After Applying Built in Function as Following :${strArr[n]} \n & it's Constructor Function Name is :${strConstName}\n`;
                        
                        var z = prompt("Press (1) to restart the Internal Function on another Element\n or press any other key to Exit.. ");
                        
                    } while (z == "1");                    
                    
                } else {
                    
                    alert("Error Entry!");
                }
                
                
            } else if (interMthd == "2") {
                alert("Welcome to [Multiple Method] string Data Type Built_In Constructor Function... ");
                
                let funcs = prompt("Press (1) for [to UpperCase()] Internal Built-In Function... \n Press (2) for [to LowerCase()] Internal Built-In Function... \n Press (3) for [length()] Internal Built-In Function...");
                
                if (func == "1"){
                    
                    for(a=0 ; a<arrCont; a++) {                        
                        
                        strAll += `your String Value Before Applying Built in Function as Following : => ${strArr[a]} \n`;
                        
                        var strConstName =  strArr[a].constructor;
                        
                        strArr[a].toUpperCase();
                        
                        console.log(`your String Value Number ${(a+1)} after Applying Built-In [Upper Case] Function as Following :${strArr[a]}`);
                        console.log(`your String Number ${(a+1)} Constructor Function Name is :${strConstName}`);
                        
                        strAll += `your String Value of Number ${(a+1)} After Applying Built in Function as Following :${strArr[a]} \n & it's Constructor Function Name is :${strConstName}\n`;                        
                        
                    }                    
                    
                } else if (func == "2") {
                    alert("Welcome to [to LowerCase()] Built-In String Function...");
                    
                    for(a=0 ; a<arrCont; a++) {
                        
                        strAll += `your String Value Before Applying Built in Function as Following : => ${strArr[a]} \n`;
                        var strConstName =  strArr[a].constructor;                        
                        
                        strArr[a].toLowerCase();
                        
                        console.log(`your String Value Number ${(a+1)} after Applying Built-In [Lower Case] Function as Following : ( ${strArr[a]} )`);
                        console.log(`your String Number ${(a+1)} Constructor Function Name is :( ${strConstName} )`);                        
                        
                        strAll += `your String Value of Number ${(a+1)} After Applying Built in Function as Following :${strArr[a]} \n & it's Constructor Function Name is :${strConstName} \n`;                        
                        
                    }
                    
                } else if (func == "3") {
                    alert("Welcome to [to length()] Built-In String Function...");
                    
                    for(a=0 ; a<arrCont; a++) {
                        
                        var strConstName =  strArr[a].constructor;                        
                        var lenVar = strArr[a].length;
                        
                        console.log(`your String variable Number ${(a+1)}'s [Length] Function as Following :${lenVar}`);                        
                        console.log(`your String Number ${(a+1)} Constructor Function Name is :${strConstName}`);                        
                        
                        strAll += `your String Value After Applying Built in Function as Following :${strArr[a]} \n & it's Constructor Function Name is :${strConstName}\n`;
                                            
                    }   

                } else{
                    alert("Error Entry!");
                }
                                
                
            } else {    
                alert("Error Entry!");
            }
                
            break;

        
// =======================================================================================================================================                        
        case "2":
    
            alert("Welcome to [Number Data Type Built-In Consturctor Function] ...");
            
            var arrCont = parseInt(prompt("How many Numeric Value you wish to Create ?"));
                 numArr = new Array();
                 strAll = "";
            
            numArr.length = arrCont;

            // Recieving Number Variables Values from User:  
            for (i=0; i<arrCont; i++) {
                
                var num1 = new Number();
                numArr[i] = parseInt(prompt("Enter your Numeric Variable's Value nubmer ( " + (i+1) + ") ..."));                    

                num1 = numArr[i];
                alert(` Numeric Variable (${num1}) Contructor Function name is ${num1.constructor}`);

                strAll += `Numeric Variable ${num1} of Number : ${(i+1)} => Contructor Function name is ${num1.constructor}\n`;                

            }
4
            // Selecting Innternal Method [Solo Mehod - Multiple] :
            var interMthd = prompt("Press (1) for Solo Method...\n Press (2) for Multiple Method...  ");

            if (interMthd == "1") {
                alert("Welcome to [Solo Method - one Numeric Variable ] number Data Type Built_In Constructor Function... ");
                
                // Selecting [Built-In Numeric Functions] to apply on Numeirc Array Element:
                let funcs = prompt("choose Built in Fuction to Apply on numeric Array \n Press (1) for [to String()] Internal Built-In Function... \n Press (2) for [toFixed()] Internal Built-In Function... \n Press (3) for [length()] Internal Built-In Function...");                
                
                if(funcs == "1") {
                    alert("Welcome to [to String()] Internal Built-In Function [Solo Mode]...");
                    
                    
                    do {                        
                        var n = parseInt(prompt("Enter index of Numeric Array Element to Apply on ...")) -1;
                        
                        strAll += `your Number Value Before Applying Built in Function as Following : => ${numArr[n]} \n`;
                        
                        numArr[n].toString();
                        var numConstName =  numArr[n].constructor;
                        
                        console.log(` Number Value after Applying Built in Function as Following :${numArr[n]}`);
                        console.log(` Numeric Variable with index ${(n+1)} Constructor Function Name is :${numConstName}`);
                        // Im here working on strAll Collective Variable in [before and After Applying Functions] and Allocate it to the document element...
                        strAll += `your Numeric Value After Applying Built in Function as  Following :${numArr[n]} \n & it's Constructor Function Name is :${strConstName} \n`;                        
                        
                        var z = prompt("Press (1) to restart the Internal Function on another Element \n or press any other key to Exit.. ");
                    } while (z == "1");
                    
                } else if(funcs == "2") {                    
                    alert("Welcome to [toFixed()] Internal Built-In Function [Solo Mode]...");
                    
                    do {                                                    
                        var n = parseInt(prompt("Enter index of Number Array Element to Apply on ..."))-1;
                        
                        strAll += `your Number Value Before Applying Built in Function as Following : => ${numArr[n]} \n`;
                        
                        numArr[n].toFixed();
                        var numConstName =  numArr[n].constructor;
                        
                        console.log(`your Number Value after Applying Built in Function as Following :${numArr[n]}`);
                        console.log(`your Number with index ${(n+1)} Constructor Function Name is :${numConstName}`);
                        
                        strAll += `your Numeric Value After Applying Built in Function as  Following :${numArr[n]} \n & it's Constructor Function Name is :${strConstName} \n`;                                                
                        
                        var z = prompt("Press (1) to restart the Internal Function on another Element \n or press any other key to Exit.. ");
                    } while (z == "1");                    
                    
                } else if(funcs == "3") {                    
                    alert("Welcome to [to Length()] Internal Built-In Function [Solo Mode]...");
                    
                    do {                        
                        var n = parseInt(prompt("Enter index of Number Array Element to Apply on ..."))-1;
                        
                        var lenVar = numArr[n].length;
                        var numConstName =  numArr[n].constructor;
                        
                        console.log(` Numeric Value length is :${lenVar}`);
                        console.log(` Number with index ${numArr[n]} Constructor Function Name is :${numConstName}`);
                        
                        strAll += ` Numeric Value length is :${lenVar} \n  Numeric Variable with index ${(n+1)} Constructor Function Name is :${numConstName}your Number with index ${(n+1)} Constructor Function Name is :${numConstName}`;                                                
                        
                        var z = prompt("Press (1) to restart the Internal Funciton on another Element \n or press any other key to Exit.. ");
                    } while (z == "1");                    
                    
                } else {
                    
                    alert("Error Entry!");
                }
                
        // Multiple Mode : 
            } else if (interMthd == "2") {
                alert("Welcome to [Multiple Method] Numeric Data Type Built_In Constructor Function... ");
                
                let funcs = prompt("Press (1) for [toString()] Internal Built-In Function... \n Press (2) for [toFixed()] Internal Built-In Function... \n Press (3) for [length()] Internal Built-In Function...");                
                
                if (func == "1"){
                    alert("Welcome to [toString()] Built-In Number Function...");
                    
                    for(a=0 ; a<arrCont; a++) {                        
                                                
                        numArr[a].toString();
                        var numConstName = numArr[a].constructor;
                        
                        console.log(`your Numeric Value Number ${(a+1)} after Applying Built-In [to String()] Function as Following :${numArr[a]}`);
                        console.log(`your Numeric Number ${(a+1)} Constructor Function Name is :${numConstName}`);
                        
                    }                    
                    
                } else if (func == "2") {
                    alert("Welcome to [toFixed()] Built-In Number Function...");
                    
                    for(a=0 ; a<arrCont; a++) {
                        
                        var strConstName =  numArr[a].constructor;                        
                        numArr[a].toFixed();
                        
                        console.log(`your Numeric Value Number ${(a+1)} after Applying Built-In [indexOf()] Function as Following :${numArr[a]}`);
                        console.log(`your Numeric Variable Number ${(a+1)} Constructor Function Name is :${strConstName}`);                        
                        
                    }
                    
                } else if (func == "3") {
                    alert("Welcome to [to length()] Built-In Number Function...");
                    
                    for(a=0 ; a<arrCont; a++) {
                        
                        var strConstName = numArr[a].constructor;                        
                        var lenVar = numArr[a].length;
                        
                        console.log(`your Numeric Value Number ${(a+1)} after Applying Built in [Length] Function as Following :${lenVar}`);                        
                        console.log(`your Numeric Number ${(a+1)} Constructor Function Name is :${strConstName}`);                        
                        
                    }   

                } else{
                    alert("Error Entry!");
                }                                
                
            } else {    
                alert("Error Entry!");
            }
            
            break;
    // =======================================================================================================================================                        
    
        case "3":
            alert("Welcome to [Boolean Data Type Built-In Consturctor Function] ...");

            var arrCont = parseInt(prompt("How many Logic Value you wish to Create ?"));
                 bolArr = new Array();
            
            bolArr.length = arrCont;

            // Recieving Logic Variables Values from User:  
            for (i=0; i<arrCont; i++) {
                var bol1 = new Boolean();
                
                do {
                    
                    bolArr[i] = prompt("Enter your Logic Variable's Value [True - False] with index ( " + (i+1) + ") ...");                    

                    if (typeof bolArr[i] != Boolean){
                        alert("Please a valid Logic Value to the Boolean Array!");
                    }

                } while (typeof bolArr[i] != Boolean);
                
                bol1 = bolArr[i];
                
                console.log(`Logic Variable value before applying the Built Function is ${bol1} \n Variable Constructor Fuciton is ${bol1.constructor} `);

                alert(`your logic Variable ${bol1} Constructor Function name is ${bol1.constructor}`);
            }

            // Selecting Internal Method [Solo Mehod - Multiple] to apply Built in functions by   :
            var interMthd = prompt("Press (1) for Solo Method...\n Press (2) for Multiple Method...  ");

            if (interMthd == "1") {
                alert("Welcome to [Solo Method - one logic Variable ] Boolean Data Type Built_In Constructor Function... ");
                
                // Selecting [Built-In Boolean Functions] to apply on Logic Array Element:
                let funcs = prompt("Press (1) for [to String()] Internal Built-In Function... \n Press (2) for [toLocalString()] Internal Built-In Function... \n Press (3) for [valueof()] Internal Built-In Function...");
                
                if(funcs == "1") {
                    alert("Welcome to [to String()] Internal Built-In Function [Solo Mode]...");
                    
                    do {                        
                        var n = parseInt(prompt("Enter index of Boolean Array Element to Apply [to String()] Internal Built-In Function on ...")) -1;
                        strAll += `your Logic Value Before Applying Built in Function as Following : => ${bolArr[n]} \n & Type of Logic Elememnt is ${typeof bolArr[n]} `;
                        
                        bolArr[n].toString();
                        var bolConstName =  bolArr[n].constructor;
                        
                        console.log(`your Logic Value after Applying Built in Function as Following :${bolArr[n]}`);
                        console.log(`your Logic with index ${(n+1)} Constructor Function Name is :${bolConstName}`);
                        
                        strAll += `yo1ur logic Value After Applying Built in Function as Following :${bolArr[n]} \n & Variable Data Type is ${typeof bolArr[n]} & it's Constructor Function Name is :${bolConstName} \n`;                                                
                        
                        var z = prompt("Press (1) to restart the Internal Function on another Element \n or press any other key to Exit.. ");
                    } while (z == "1");
                    
                } else if(funcs == "2") {                    
                    alert("Welcome to [toFixed()] Internal Built-In Function [Solo Mode]...");
                    
                    do {                                                    
                        var n = parseInt(prompt("Enter index of Boolean Array Element to Apply on ..."))-1;
                        strAll += `your Number Value Before Applying Built in Function as Following : => ${bolArr[n]} \n & Type of Logic Elememnt is ${typeof bolArr[n]} `;
                        
                        bolArr[n].toFixed();
                        
                        var bolConstName =  bolArr[n].constructor;
                        
                        console.log(`your Number Value after Applying Built in Function as Following :${bolArr[n]}`);
                        console.log(`your Number with index ${(n+1)} Constructor Function Name is :${bolConstName}`);
                                            
                        strAll += `your logic Value After Applying Built in Function as Following :${bolArr[n]} \n & Variable Datea Type is ${typeof bolArr[n]} & it's Constructor Function Name is :${bolConstName} \n`;                                                
                        var z = prompt("Press (1) to restart the Internal Function on another Element \n or press any other key to Exit.. ");                        
                    } while (z == "1");                    
                    
                } else if(funcs == "3") {                    
                    alert("Welcome to [to Length()] Internal Built-In Function [Solo Mode]...");
                    
                    do {                        
                        var n = parseInt(prompt("Enter index of Boolean Array Element to Apply on ..."))-1;
                        var lenVar = bolArr[n].length;
                        var bolConstName =  bolArr[n].constructor;
                        
                        console.log(`The logic Value after Applying Built in Function as Following :${lenVar}`);
                        console.log(`The Logic value with index ${(n+1)} Constructor Function Name is :${bolConstName}`);
 
                        strAll += `The logic Value after Applying Built in Function as Following :${lenVar} \n & Variable's Constructor Function Name is :${bolConstName} \n`;                                                
                        
                        var z = prompt("Press (1) to restart the Internal Function on another Element \n or press any other key to Exit.. ");                        
                        
                    } while (z == "1");                    
                    
                } else {
                    
                    alert("Error Entry!");
                }
                
        // Multiple Mode : 
            } else if (interMthd == "2") {
                alert("Welcome to [Multiple Method] Boolean Data Type Built_In Constructor Function... ");
                
                let funcs = prompt("Press (1) for [toString()] Internal Built-In Function... \n Press (2) for [toFixed()] Internal Built-In Function... \n Press (3) for [length()] Internal Built-In Function...");                
                
                if (func == "1"){
                    alert("Welcome to [toString()] Built-In Boolean Function...");
                    
                    for(a=0 ; a<arrCont; a++) {                        
                                                
                        strAll += `your logic Variable Value Before Applying Built in Function as Following : => ${bolArr[a]} \n & Type of Logic Elememnt is ${typeof bolArr[a]} `;
                        
                        bolArr[a].toString();
                        var bolConstName = bolArr[a].constructor;
                        
                        console.log(`your Logic Value with index ${(a+1)} after Applying Built-In [to String()] Function as Following : ${bolArr[a]}\n & Varaible Data type is ${typeof bolArr[a]} `);
                        console.log(`your Logic with index ${(a+1)} Constructor Function Name is :${bolConstName}`);
                        
                        strAll += `your logic Value After Applying Built in Function as Following :${bolArr[n]} \n & Variable Datea Type is ${typeof bolArr[a]} & it's Constructor Function Name is :${bolConstName} \n`;                                                
                        
                    }                    
                    
                } else if (func == "2") {
                    alert("Welcome to [toFixed()] Built-In Boolean Constructor Function...");
                    
                    for(a=0 ; a<arrCont; a++) {
                        
                        strAll += `your logic Variable Value Before Applying [toFixed()] Built in Function as Following : => ${bolArr[a]} \n & Type of Logic Elememnt is ${typeof bolArr[a]} `;
                        
                        var bolConstName =  bolArr[a].constructor;                        
                        bolArr[a].toFixed();
                        
                        console.log(`your logic Value Number ${(a+1)} after Applying Built-In [indexOf()] Function as Following :${bolArr[a]}`);
                        console.log(`your logic Variable Number ${(a+1)} Constructor Function Name is :${bolConstName}`);                        
                                             
                        
                        strAll += `your logic Value After Applying Built in Function as Following :${bolArr[n]} \n & Variable Data Type is ${typeof bolArr[a]} & it's Constructor Function Name is :${bolConstName} \n`;                                                
                    }
                } else if (func == "3") {
                    alert("Welcome to [to length()] Built-In Number Function...");
                    
                    for(a=0 ; a<arrCont; a++) {
                                                
                        var bolConstName = bolArr[a].constructor;                        
                        var lenVar = bolArr[a].length;
                        
                        console.log(`your Logic Value Number ${(a+1)} after Applying Built in [Length] Function as Following :${lenVar}`);                        
                        console.log(`your Logic Variable with index  ${(a+1)} Constructor Function Name is :${bolConstName}`);                        
                        
                        strAll += `your logic Value After Applying Built in Function as Following :${bolArr[n]} \n & Variable Data Type is ${typeof bolArr[a]} & Logic Variable Constructor Function Name is :${bolConstName} \n`;                                                
                        
                    }   

                } else{
                    alert("Error Entry!");
                }
                
                
            } else {    
                alert("Error Entry!");
            }
            
            break;
            
    // =======================================================================================================================================                        
        case "4":
            
            alert("Welcome to [Array Data Type built-in Constructor Function]");
            
            var arrCont = parseInt(prompt("lets insert your Elements"))-1,
                arr = new Array(),                
                strAll = "";                   
            
            arr.length = arrCont;
            
            alert("lets insert your Array's Elements");
            
            for(i=0; i<arrCont; i++){
                arr[i] = prompt(`Enter Array Element Number ${i+1} :`);
                
                strAll += `Array Element number : (${i+1}) is [${arr[i]}] && Element Data Type is [${typeof Arr[i]}] && Element Constructor Function Name is : [${arr[i].constructor}] \n ---------------------------------- \n`;                                                
                                
            }
            
            strAll += `=====================================\n Your Array constructor Function Name is : ${arr.constructor}`;             
            
            
            console.log(strAll);
            
            alert(strAll);                                                                            
                        
            document.getElementById("txtarea").innerHTML += strAll; 

            break;

    // =======================================================================================================================================                        
        case "5":
            
            alert("Welcome to [Object Data Type built-in Constructor Function]");
                                            
            let obj = new Object(),                
                arrNames = [],
                arrValues = [],
                objCount = parseInt(prompt("Enter Count Number of your Built-In Object Properties...")),
                strAll = "";                   
                
            arrNames.length = objCount;
                
            alert("lets insert your Object's Elements");
                
            strAll += "Your Object Properties as Following :\n";
            
            for(i=0; i<objCount; i++) {

                arrNames[i] = prompt(`Enter Property Name Number ${i+1} : `);
                arrValues[i] = prompt(`Enter Property Value Number ${i+1} : `);
                
                obj.definProperty(obj, [arrNames[i]], {value:[arrValues[i]], configurable:true});
                
                strAll += `Object Property with index ${objCount} with Name ${arrNames[i]} Value is : ${obj[arrNames[i]]} \n -------------------------------- \n`;                                                
                
            }
                        
            console.log(" Your Object Properties [by Object Name] as Following :");
            console.log(obj);
            
            strAll += `Your Object constructor Function is : ${obj.constructor}`;                    
            
            //alert(`Your Object constructor Function is :${obj.constructor} \n`);                                                                            
                                                        
            console.log(strAll);
            
            alert(strAll);
            
            document.getElementById("txtarea").innerHTML += strAll; 
            
            break;

        default:
            alert("Error Entry!");

    }     

}
/*
//=========================================================================================================================
//=========================================================================================================================

function constFunc() {

    function constF(fName, lName, age, country, city, street, eMail, showEmail) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.country = country;
        this.city = city;
        this.street = street;        
        this.eMail = eMail;        
        
        this.showEmail = function() {
            if (age >= 18 ){
                console.log(`Your email is: ${this.eMail}`);                
                alert(`Your email is: ${this.eMail}`);
            } else {
                console.log(`Your Can Not Access Email data due to Age restriction `);
                alert(`Your Can Not Access Email data due to Age restriction `);
            }
        };
        
        this.changeName = function (newFName, newLName) {
            if (age >= 18) {                
                this.fName = newFName ; 
                this.lName = newLName ; 
                console.log('Name has changed Successflly');
                alert('Name has changed Successfully');
            } else {
                console.log('Name Can not be changed due to Age restriction!');
                alert('Name Can not be changed due to Age restriction!');
            }        
        };

        ///this.name;
        this.fullName = function() {
            return `Your Full Name is ${this.fName} ${this.lName} `;
        };
        
        this.ageInDays = () => `your Age in Days = ${this.age * 365}`; 
        
        this.ageInWeeks = () => `your Age in Weeks = ${this.age * 52}`; 

        this.ageInMonths = () => `your Age in Months = ${this.age * 12}`; 
        
        this.FullAd = function() {
            return `Your Full Address ${this.country} ${this.city} ${this.street}`;
        };
        
        this.allData = function () {
            return `your All user data as following : \n User First Name is ${this.fName} \n User last Name is ${this.lName} \n User Age is ${this.age} \n User country is ${this.country} \n User city is ${this.city} \n User street is ${this.street} \n User Email is ${this.eMail}`;
        };
        
        this.showConstName = () => `your Constructor Function Name is ( ${this.constructor.name})`;
        
        // This Fuction needs more Knowledge in OOP [Change name of Contstructor Name ]: 
        this.changeConstName = function(newConstName) {
            if (age >= 18 ) {
                this.constructor.name = newConstName;
                return `Your new Construtor Function Name is ( ${newConstName} )`;
                
            } else {
                return 'You Can not change Constructor Fucntion name due to Age Destruction!';
            }
        }        

        console.log(this);
    }   
    
    
    var ufName = prompt("Enter First name : "),
        ulName = prompt("Enter last name : "),
        uage = parseInt(prompt("Enter age : ")),
        ucountry = prompt("Enter country : "),
        ucity = prompt("Enter city : "),
        ustreet = prompt("Enter street : "),
        uEmail = prompt("Enter email : ");
    
    let user1 = new constF(ufName, ulName, uage, ucountry, ucity, ustreet, uEmail, true);
        
    do {
        
        var intFunc = prompt("Choose between following Functions : \n Press(1) for [Change Name] Function... \n Press (2) for [Show Email] Fucntion... \n Press (3) for [Showing Full Name] Function... \n Press (4) for [Showing Full Address] Function...\n Press (5) for [Age - Calculations (Days, Weeks ,Months)] Function... \n Press (6) for [Showing All Data] Function \n Press (7) for [Showing Constructor Fucntion Name] Function \n Press (8) for [Changing Constructor Fucntion Name] Function... ");
        
        // Reseting the Accumulated String variable:
        var strNames = '';
        
        document.getElementById('txtarea').innerHTML += strNames; 
            
        if (intFunc == "1") {
            
            alert("Welcome to [Change Name] Function...");            
                
            console.log("Welcome to [Change Name] Function...");            
            
            strNames = '';
            
            var newFirstName = prompt("Enter your New First Name :"),
                newLastName = prompt("Enter your New Last Name :");
            
            
            if (user1.age >= 18) {                
                
                user1.changeName(newFirstName,newLastName);
            
                console.log('Your full Name after updating as Following: \n');
                
                console.log(`your first name is : ${user1.fName}`);
                alert(`your first name is : ${user1.fName}`);
                
                
                console.log(`your Second name is : ${user1.lName}`);        
                alert(`your Second name is : ${user1.lName}`);        
                console.log("======================== ");
                
                alert(user1.fullName());
                console.log(user1.fullName());
                console.log("======================== ");
                
                strNames += `Your first name is (${user1.fName})\n Your second name is (${user1.lName})\n ${user1.fullName()}`;
                document.getElementById('txtarea').innerHTML += strNames; 
                
            } else  {
                
                console.log(user1.changeName(newFirstName,newLastName));            
                console.log("======================== ");                
                
                strNames += `${user1.changeName(newFirstName,newLastName)}`;
                
                document.getElementById('txtarea').innerHTML += strNames; 
                
            }
            
        } else if (intFunc == "2") {
            
            alert("Welcome to [Show Email] Function...");            
            
            strNames = '';
            
            console.log(user1.showEmail());
            
            console.log("======================== ");
            
            strNames += `${user1.showEmail()}`;        
            
            document.getElementById('txtarea').innerHTML += strNames; 
            
        } else if (intFunc == "3") {
            
            alert("Welcome to [Show Full Name] Function...");            
            
            strNames = '';
            
            console.log(user1.fullName());
            
            alert(user1.fullName());        
            
            console.log("======================== ");
            
            strNames += `${user1.fullName()}`;        
            
            document.getElementById('txtarea').innerHTML += strNames; 
            
        } else if (intFunc == "4") {
            
            alert("Welcome to [Show Full Address] Function...");            
            
            strNames = '';
            
            console.log(user1.FullAd());            
            alert(user1.FullAd());        
            
            console.log("======================== ");
            
            strNames += `${user1.FullAd()}`;        
            
            document.getElementById('txtarea').innerHTML += strNames; 
            
        } else if (intFunc == "5") {
            
            alert("Welcome to [Age Calculations] Functions...");            
            
            strNames = '';
            
            alert("1) your age by Days as following...");            
            console.log("1) your age [by Days] as following: ");
            
            console.log(user1.ageInDays());
            alert(user1.ageInDays());
            
            console.log("------------------------------------");
            
            
            alert("2) your age [by Weeks] as following:...");            
            console.log("2) your age [by Weeks] as following: ");
            
            console.log(user1.ageInWeeks());        
            alert(user1.ageInWeeks());        
            
            console.log("------------------------------------");            
            
            alert("3) your age [by Months] as following:...");            
            console.log("3) your  age [by Months] as following: ");
            
            console.log(user1.ageInMonths());        
            alert(user1.ageInMonths());        
            
            console.log("------------------------------------");
            
            strNames += `${user1.ageInDays()} \n ${user1.ageInWeeks()} \n ${user1.ageInMonths()} `;        
            
            document.getElementById('txtarea').innerHTML += strNames; 
            
        } else if (intFunc == "6") {
            
            alert("Welcome to [Show All User's Data] Function...");            
            
            strNames = '';
            
            console.log("3) your  age [by Months] as following: ");
            
            console.log(user1.allData());
            alert(user1.allData());
            
            console.log("------------------------------------");
            
            strNames += `${user1.allData()} `;        
            
            document.getElementById('txtarea').innerHTML += strNames; 
            
        } else if (intFunc == "7") {
            
            alert("Welcome to [Show Constrcutor Function Name ] Function...");            
            
            strNames = '';
            
            console.log(user1.showConstName());
            
            alert(user1.showConstName());
            
            console.log("------------------------------------");
            
            strNames += `${user1.showConstName()} `;        
            
            document.getElementById('txtarea').innerHTML += strNames; 
            
        } else if (intFunc == "8") {
            
            alert("Welcome to [Changing Constrcutor Fucntion Name ] Function...");            
            
            strNames = '';
            
            var newConst = prompt("Enter your new Contructor Name");
            
            console.log(user1.changeConstName(newConst));
            
            alert(user1.changeConstName(newConst));
            
            console.log("------------------------------------");
            
            strNames += `${user1.changeConstName(newConst)} `;        
            
            document.getElementById('txtarea').innerHTML += strNames; 
            
        } else {
            alert("Error Entry!");
        }
        
        var z= prompt("Press (1) to Choose another Internal Function");
    }   while (z == "1");
        
}

// =====================================================================================================================
// =====================================================================================================================