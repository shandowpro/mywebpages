/*global console */

//Decleration of String vars:
var
    name = "Shadi Sayed Mohammed",
    Name = "Sayed", 
    firstName = "Shadi",
    theLastName = "Ahmed";        

//Decleration of Number vars:
var
    x = 10,
    y = 10,
    z = 100;

//Some Functions:
console.log(theLastName);
console.log(firstName);
console.log(Name);
console.log(name);
console.log(x);
console.log(x+y);
console.log(x*y);
console.log(z/y);
console.log(name);
document.getElementById("test").innerHTML = name + x;

if (x!==y){
    console.log("UnEquiled X,Y");    
} else{
    console.log("Equiled X,Y");    
}

if (x===y){
    console.log("Equiled Vars");
} else{
    console.log("UnEquiled Vars");
}