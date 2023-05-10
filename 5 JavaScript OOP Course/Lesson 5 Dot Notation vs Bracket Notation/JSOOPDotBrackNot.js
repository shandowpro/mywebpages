/* global document, alert, prompt */

/* JSOOP : Comparison between Bracket Notation VS Dot Notation {user Object Creator application} */

function userObj1() {

    alert("Welcome to user Object Application");

    let singleObj1 = "Gender";
    let singleObj2 = "Name";
    let singleObj3 = "Age";
    let singleObj4 = "Address";
        
    var singleVar1 = "Gender",
        singleVar2 = "Name",
        singleVar3 = "Age",
        singleVar4 = "Address";

    /*var N1 = singleObj1,
        N2 = singleObj2,
        N3 = singleObj3,
        N4 = singleObj4;
    */
    
    let myObj = {
        Gender: prompt("Enter Your " + singleObj1 + "..."),
        Name: prompt("Enter your" + singleObj2 + "..."),
        Age: prompt("Enter your" + singleObj3 + "..."),
        Address: prompt("Enter your " +  singleObj4 + "..."),
        
        "1": "one",
        "Two-": 2,
        "Three!": 3,         
        "Four@": 4,         
        "Five#": 5,         
        "Six$": 6,         
        "Seven%": 7,         
        "Eight&": 8,         
        "Nine*": 9,         
        "Ten^": 10,         

    };    
    
    var mthd = prompt("Press (1) to Display your Object Elements by [Ordinary Accessing Method]\n Press (2) to Display your Object elemets by [Hiberate Accessing Method] Form other [Single Object] \n Press (3) to Display your Object elemets by [Hiberate Accessing Method] Form other [Single Varible]\nPress (4) to Display your Object elemets with Special & numeric identifiers Names [Brackets Accessing Method] Form the [Same Object's Elements] ");
    
    if (mthd == "1") {                                        
        document.getElementById("txtarea1").innerHTML =  `Your Hibernate Accessing to [External object properties Value] by [The Same object Value {Ordinary Method}] as following: \n ${singleObj1} :  ${myObj["Gender"]} \n ${singleObj2} : ${myObj["Name"]} \n ${singleObj3} : ${myObj["Age"]} \n ${singleObj4} : ${myObj["Address"]}=======================================`;
        
        alert(`Your Hibernate Accessing to [External object properties Value] by [The Same object Value {Ordinary Method}] as following: \n ${singleObj1} :  ${myObj["Gender"]} \n ${singleObj2} : ${myObj["Name"]} \n ${singleObj3} : ${myObj["Age"]} \n ${singleObj4} : ${myObj["Address"]}=======================================`);
        
    } else if (mthd == "2") {
        document.getElementById("txtarea1").innerHTML =  `Your Hibernate Accessing to [External object property Value] by [Single object Value] as following: \n ${singleObj1} : ${myObj[singleObj1]} \n ${singleObj2} : ${myObj[singleObj2]} \n ${singleObj3} : ${myObj[singleObj3]} \n ${singleObj4} : ${myObj[singleObj4]}=======================================`;
        
        alert(`Your Hibernate Accessing to [External object property Value] by [Single object Value] as following: \n ${singleObj1} : ${myObj[singleObj1]} \n ${singleObj2} : ${myObj[singleObj2]} \n ${singleObj3} : ${myObj[singleObj3]} \n ${singleObj4} : ${myObj[singleObj4]}=======================================`);
            
    } else if (mthd == "3") {        
        document.getElementById("txtarea1").innerHTML =  `Your Hibernate Accessing to [External object property Value] by [Single Variable Value] as following: \n ${singleObj1} : ${myObj[singleVar1]} \n ${singleObj2} : ${myObj[singleVar2]} \n ${singleObj3} : ${myObj[singleVar3]} \n ${singleObj4} : ${myObj[singleVar4]}=======================================`;
        
        alert(`Your Hibernate Accessing to [External object property Value] by [Single Variable Value] as following: \n ${singleObj1} : ${myObj[singleVar1]} \n ${singleObj2} : ${myObj[singleVar2]} \n ${singleObj3} : ${myObj[singleVar3]} \n ${singleObj4} : ${myObj[singleVar4]}=======================================`);
    
    } else if (mthd == "4") {        
        document.getElementById("txtarea1").innerHTML = `Your Hibernate Accessing to [Object Numeric & special Character Identifiers Value] by [Bracket Notation] as following: \n  Numeric Identifier: ${myObj["1"]} \nSpecial Character Identifier 1: ${myObj["Two-"]} \nSpecial Character Identifier 2 : ${myObj["Three!"]}\nSpecial Character Identifier 3 : ${myObj["Four@"]}\nSpecial Character Identifier 4 : ${myObj["Five#"]}\nSpecial Character Identifier 5 : ${myObj["Six$"]}\n Special Character Identifier 6 : ${myObj["Seven%"]}\nSpecial Character Identifier 7 : ${myObj["Eight&"]}\nSpecial Character Identifier 8 : ${myObj["Nine*"]}\n Special Character Idetifier 9 : ${myObj["Ten^"]}\n=======================================`;
        
        alert(`Your Hibernate Accessing to [Object Numeric & special Character Identifiers Value] by [Bracket Notation] as following: \n  Numeric Identifier: ${myObj["1"]} \nSpecial Character Identifier 1: ${myObj["Two-"]} \nSpecial Character Identifier 2 : ${myObj["Three!"]}\nSpecial Character Identifier 3 : ${myObj["Four@"]}\nSpecial Character Identifier 4 : ${myObj["Five#"]}\nSpecial Character Identifier 5 : ${myObj["Six$"]}\n Special Character Identifier 6 : ${myObj["Seven%"]}\nSpecial Character Identifier 7 : ${myObj["Eight&"]}\nSpecial Character Identifier 8 : ${myObj["Nine*"]}\n Special Character Idetifier 9 : ${myObj["Ten^"]}\n =======================================`);

    } else {
        alert("Error Entry!");
    }

}
// =========================================================================================================


function Display() {
    document.getElementById('txtarea').textContent =  userObj1 +  '\n' + '='.repeat(30);    
}

