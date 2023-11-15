// Multiple Currencies Conveter Application :

var myDiv = document.getElementById("divC"),
    myInput = document.getElementById("input3"),
    myCurrency = document.getElementById("currency");
 
myDiv.onmouseover = function () {
    myDiv.innerHTML = "Choose Your Currency , then Enter your Amount";    
}

myDiv.onmouseout = function () {
    myDiv.innerHTML = "";    
}


myCurrency.onchange = function () {
    myDiv.innerHTML = myInput.value * myCurrency.value + " Egyptian Pound";    
}


