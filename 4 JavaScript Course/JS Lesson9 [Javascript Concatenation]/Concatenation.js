var myName = "Shadi Sayed Mohammed",
    myFirstName = "Shadi",
    myLastName = "Ahmed",
    myAge = 3,
    myCountry = "Egypt",
    myJob = "Developer";        

// Concatenation Between textual values And String Variables :     
document.getElementById("teststring").innerHTML =
    "My Full name is: " + myName + "<br>" +    
    "My first name is: " + myFirstName + "<br>" +
    "My last name is: " + myLastName;

//=================================================================================================
// Concatenation Between textual values And String Variables :     
// [First is Text] :     
document.getElementById("teststring1").innerHTML = "My age is : " + myAge + 3;

//=================================================================================================
// [First is Number] :     
document.getElementById("teststring2").innerHTML = myAge + 30 + " This is My Age";


//=================================================================================================
//[Personal long Form information display using Full Tag of Front End P languages] :
document.getElementById("teststring3").innerHTML =
    "<span style='color:blue'> My Name is : </span>" + myName + "<br>" +
    "<span style='color:blue'> My Age is : </span>" + (myAge + 30) + "<br>" +
    "<span style='color:blue'> My Country is : </span>" + myCountry + "<br>" +
    "<span style='color:blue'> My Job is : </span>" + myJob;
