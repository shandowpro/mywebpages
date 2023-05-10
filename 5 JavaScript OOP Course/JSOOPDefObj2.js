/* global, cosole, document, alertk, prompt */

/* JSOOP [ Defining Object with Object literals {Part 2} (Listed Objects + Arrow Functions) ] */

function objCreator1() {
    alert("Welcome to Object Creator Application ...");
    
    var uFirstName = prompt("Enter your First Name..."),
        uLastName = prompt("Enter your Last Name..."),
        uAge = prompt("Enter your Age..."),        
        uCountry1 = prompt("Enter your Country1..."),
        uCountry2 = prompt("Enter your Country2..."),
        uCountry3 = prompt("Enter your Country3..."),
        uState1 = prompt("Enter your State1..."),
        uState2 = prompt("Enter your State2..."),
        uState3 = prompt("Enter your State3..."),
        uCity1 = prompt("Enter your City1..."),
        uCity2 = prompt("Enter your City2..."),
        uCity3 = prompt("Enter your City3..."),    
        uHouse1 = prompt("Enter your House1..."),
        uHouse2 = prompt("Enter your House2..."),
        uHouse3 = prompt("Enter your House3...");
    
            
    let userObj= {
        firstName: uFirstName,
        lastName: uLastName, 
        age: uAge,    
        
        countries: {
            country1: uCountry1,
            country2: uCountry2,
            country3: uCountry3,
            getAllCountries: () => 'All Countries are : ${userObj.countries.country1} ${userObj.countries.country2} ${userObj.countries.country3}',
        },
        
        states: {
          state1: uState1,  
          state2: uState2,  
          state3: uState3,  
          
            getAllStates: function () {
                return 'All Countries are : ${userObj.states.state1} ${userObj.states.state2} ${userObj.states.state3}'; 
            },
        },
                
        cities: {
          city1: uCity1,  
          city2: uCity2,  
          city3: uCity3,    
            
            getAllCities: function () {
                return 'All Cities are : ${userObj.cities.city1} ${userObj.cities.city2} ${userObj.cities.city3}'; 
            },
        },
                
        houses: {
          house1: uHouse1,  
          house2: uHouse2,  
          house3: uHouse3,  
            getAllHouses: () => "All Houses are : ${userObj.houses.house1} ${userObj.houses.house2} ${userObj.houses.house3}",
            
        },
        
        getFullName: function() {            
            return'Your Full Name is: ' + userObj.firstName + " " + userObj.lastName;
        },
                    
        getAge: function() {            
            return'Your age is: ${userObj.age}';
        },
                
        getFullData: () =>  'Your Full Data are as follwoing: \n ' + userObj.getFullName() + '\n Your Age is' +
                userObj.getAge() + '\n' + userObj.getAllCountries() + '\n' + userObj.getAllStates() + '\n' +
                + userObj.getAllCities() + '\n' + userObj.getAllHouses(), 
    
    };
    
    var select = prompt("Press 1 to Display your Full Name \n Press 2 to Display your Age\n Press 3 to Display all your Countries \n Press 4 to display All States\n Press 5 to Display all cities \n Press 6 to display all houses \n Press 7 for Displaying All Information..");

    if (select == "1") {
        document.getElementById("txtarea").innerHTML = userObj.getFullName();

    } else if (select == "2") {
        document.getElementById("txtarea").innerHTML = userObj.getAge();

    } else if (select == "3") {
        document.getElementById("txtarea").innerHTML = userObj.getAllCountries();
            
    } else if (select == "4") {
        document.getElementById("txtarea").innerHTML = userObj.getAllStates();
    
    } else if (select == "5") {
        document.getElementById("txtarea").innerHTML = userObj.getAllCities();
    
    } else if (select == "6") {
        document.getElementById("txtarea").innerHTML = userObj.getAllHouses();

    } else if (select == "7") {
        document.getElementById("txtarea").innerHTML = userObj.getFullData();

    } else {
        alert("Error Entry!");
    }
}
    
//=========================================================================================================================
