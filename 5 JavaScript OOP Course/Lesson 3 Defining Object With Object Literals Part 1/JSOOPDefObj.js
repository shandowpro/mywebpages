/* global document, alertk, prompt */

/* JSOOP [ Defining Object with Object literals {Part 1} ] */

function objCreator() {
    
    alert("Welcome to Object Creator Application ...");
    
    var uFirstName = prompt("Enter your First Name..."),
        uLastName = prompt("Enter your Last Name..."),
        uAge = prompt("Enter your Age..."),        
        uCountry = prompt("Enter your Country..."),
        uState = prompt("Enter your State..."),
        uCity = prompt("Enter your City..."),
        uStreet = prompt("Enter your Street..."),
        uHouse = prompt("Enter your House...");
    
            
    var userObj= {
        firstName: uFirstName,
        lastName: uLastName, 
        age: uAge,    
        country: uCountry,    
        city: uCity,
        street: uStreet,
        house: uHouse,
        
        getFullName: function() {            
            return'Your Full Name is: ' + userObj.firstName + " " + userObj.lastName;
        },
        
        getFullAd: function() {        
            return 'Your Full Address is: ' + userObj.country + ", "  + userObj.city + ", " +
                userObj.street + ", " + userObj.house;
        },
    
        getFullData: function() {
            return'Your Full Data are:\n 1) ' + userObj.getFullName() + '\n2) ' +
                userObj.getFullAd() + '\n3) Your Age is: ' + userObj.age;
        },
    
    };
    
    var select = prompt("Press 1 to Display your Full Name\n Press 2 to Display your full Address\n Press 3 for Displaying All Information..");

    if (select == "1") {
        document.getElementById("txtarea").innerHTML = userObj.getFullName();

    } else if (select == "2") {
        document.getElementById("txtarea").innerHTML = userObj.getFullAd();

    } else if (select == "3") {
        document.getElementById("txtarea").innerHTML = userObj.getFullData();

    } else {
        alert("Error Entry!");
    }

}
    
//=========================================================================================================================

function Calcs(){
    alert("Welcome to Calculation application >>>>");
    
    var num1 = parseInt(prompt("Enter your First Number: ")),
        num2 = parseInt(prompt("Enter your Second Number: "));
    
    let arth= {
        Num1: num1,
        Num2: num2,
        
        sum: function() {
            return "Your Summition Result = " + (arth.Num1 + arth.Num2);
        },
        
        sub: function() {
            return "Your Substraction Result = " + (arth.Num1 - arth.Num2);
        },

        mult: function() {
            return "Your Multiply Result = " + (arth.Num1 * arth.Num2);
        },
        
        div: function() {
            return "Your Division Result = " + (arth.Num1 / arth.Num2);
        },
        
    };
    
    var mthdCalc = prompt("Press 1 for Summition Operation\n Press 2 For Substraction Operation\n Press 3 for Mulitply Opertation\n Press 4 for Division Operastion ...");
    
    if (mthdCalc == "1") {
        alert(arth.sum());
        document.getElementById("txtarea").innerHTML = arth.sum();
                        
    } else if (mthdCalc=="2") {
        alert(arth.sub());
        document.getElementById("txtarea").innerHTML = arth.sub();       
               
               
    } else if (mthdCalc=="3") {
        alert(arth.mult());
        document.getElementById("txtarea").innerHTML = arth.mult();
       
    } else if (mthdCalc=="4") {
        alert(arth.div());
        document.getElementById("txtarea").innerHTML = arth.div();
        
    } else {
       alert("Error Entry!");
    }        
}

// ----------------------------------------------------------------------------------------------------------------------------------

function Display() {

    document.getElementById('txtarea').textContent =  Calcs + '\n' + '='.repeat(30)  + '\n' + objCreator;    
}



