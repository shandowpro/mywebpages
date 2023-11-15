/*global document, alert, prompt*/

function mthd1() {
    alert("Welcome to (For Loop - Single Variable - Increament - Method 1) [i++]");        
    
    
    var userArr = new Array(),        
        ArrCount = prompt("Enter Counter's Value of Your Array :"),
        c = parseInt(prompt("Enter your Start Number :")),
        i;
    
    userArr.length = ArrCount;
        
    for (i = 0; i < ArrCount; i++, c++ ) {
        
        userArr[i] = c;        
    }            

    document.getElementById("Mthd1").innerHTML = "Your Values are by [Method 1 (i++)] :" + "<br>" + userArr ;              
    
}

// ===================================================================================================


function mthd2() {
    alert("Welcome to (For Loop - Single Variable - Increament - Method 2) [i = i + 1]");        
    
    
    var userArr = new Array(),        
        ArrCount = prompt("Enter Counter's Value of Your Array :"),
        c = parseInt(prompt("Enter your Start Number :")),
        i;
    
    userArr.length = ArrCount;
        
    for (i = 0; i < ArrCount; i = i + 1, c = c + 1 ) {
        
        userArr[i] = c;        
    }            

    document.getElementById("Mthd1").innerHTML = "Your Values are by [Method 2 (i = i + 1)] :" + "<br>" + userArr ;              
    
}
// ===================================================================================================

function mthd3() {
    alert("Welcome to (For Loop - Single Variable - Increament - Method 3) [i += 1]");        
        
    var userArr = new Array(),        
        ArrCount = prompt("Enter Counter's Value of Your Array :"),
        c = parseInt(prompt("Enter your Start Number :")),
        i;
    
    userArr.length = ArrCount;
        
    for (i = 0; i < ArrCount; i += 1, c += 1 ) {
        
        userArr[i] = c;        
    }            

    document.getElementById("Mthd1").innerHTML = "Your Values are by [Method 3 (i += 1)] :" + "<br>" + userArr ;              
    
}
// ===================================================================================================


function mthd4() {
    alert("Welcome to (For Loop - Single Variable - Decreament ) [i--]");        
        
    var userArr = new Array(),        
        ArrCount = prompt("Enter Counter's Value of Your Array :"),
        c = parseInt(prompt("Enter your Start Number (the Bigger) :")),
        i;
    
    userArr.length = ArrCount;
        
    for (i = 0; i < ArrCount; i++, c-- ) {
        
        userArr[i] = c;        
    }            

    document.getElementById("Mthd1").innerHTML = "Your Values are by [Decreament Method] :" + "<br>" + userArr ;              
    
}
// ===================================================================================================


function mthd5() {
    alert("Welcome to (For Loop - Single Variable - Multiply [i = i * 2] )");        
        
    var userArr = new Array(),        
        ArrCount = prompt("Enter Counter's Value of Your Array :"),
        c = parseInt(prompt("Enter your Start Number :")),
        i;
    
    userArr.length = ArrCount;
        
    for (i = 0; i < ArrCount; i++, c = c * 2 ) {
        
        userArr[i] = c;        
    }            

    document.getElementById("Mthd1").innerHTML = "Your Values are by [Multiply [i = i * 2]] :" + "<br>" + userArr ;                  
}
// ===================================================================================================


function mthd6() {
    alert("Welcome to (For with Array - (i++)} - Array Inserting And Output] )");        
        
    var userArr = new Array(),        
        ArrCount = prompt("Enter Counter's Value of Your Array :"),        
        i;
    
    userArr.length = ArrCount;
        
    for (i = 0; i < ArrCount; i++ ) {
        
        userArr[i] = prompt("Enter your Value number " + (i + 1) );        
    }            

    document.getElementById("Mthd1").innerHTML = "Your Values are by [Array Inserting And Output] :" + "<br>" + userArr ;                  
}
// ===================================================================================================

