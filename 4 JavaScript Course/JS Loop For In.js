
/*global document, alert, prompt*/

/*function mthd1() {
   
    alert("Welcome to [{For - In} Loop with Accessing Property Value by Method 1]");        
    
    var UserCount = parseInt(prompt("Enter Number of Object Varaible Elements: ")),    
        userArrNames = new Array(UserCount),        
        userArrValues = new Array(UserCount),        
        myObj = new Object(UserCount),            
        all = "",
        prop,
        i = 0,
        Z = 0;            
        
    Object.keys(myObj).length = UserCount;
    
                    
    for (i; i < UserCount; i++) {
        userArrNames[i] = prompt("Enter your Object Property Name (" + (i + 1) + ")");        
        userArrValues[i] = prompt("Enter your Object Property's Value (" + (i + 1) + ")");        
    }
            
    
    for (prop in myObj) {                                                                 
        prop = userArrNames[z];
        myObj[prop] = userArrValues[z];
        
        alert("your Object Property " + prop + " is: " + myObj[prop]);
        
        console.log("your Object Property " + prop + " is: " + myObj[prop]);   
        
        all += "your Object Property " + prop + " is: " + myObj[prop] + "<br>";
        z += 1;
    }   
    
    for (prop in myObj) {                                                                     
        
        alert("your Object Property " + prop + " is: " + myObj[prop]);
        
        console.log("your Object Property " + prop + " is: " + myObj[prop]);           
        
    }   
    
    
    
    
    
    alert("Done!");
    console.log(all);
    document.getElementById("Mthd1").innerHTML = all;
    
}*/

// ============================================================================================

function mthd2() {
    var myObj = {
        Name: "Shadi",
        Age: "33",
        Gender: "Male"
    };
    
    var all = "",
        prop;
        
    for (prop in myObj) {                                         
        
        alert("your Object Property " + prop + " is: " + myObj[prop]);
        
        console.log("your Object Property " + prop + " is: " + myObj[prop]);        
        
        all += "your Object Property " + prop + " is: " + myObj[prop] + "<br>";
    }                        
    
    document.getElementById("Mthd1").innerHTML = all;
}