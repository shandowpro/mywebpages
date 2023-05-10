/// Summition :

function test() {

    var x = 100,
        y = 200;
    
    
    // Summition Function :
    document.getElementById("testSub").innerHTML = x + y;

}    
// -=========================================================================================

/// Substration :
function test1() {

    var x = 100,
        y = 200;
    
    
    // Substration Function :
    document.getElementById("testSub").innerHTML = x - y;

}    
// -=========================================================================================

/// Multiply :
function test2() {
    
    var x = 100,
    y = 200;
    
    
    // Multiply Function :
    document.getElementById("testSub").innerHTML = x * y;
        
}    
// -=========================================================================================

/// Division :
function test3() {
    
    var x = 100,
    y = 200;
    
    
    // Division Function :
    document.getElementById("testSub").innerHTML = x / y;
    
}    
// -=========================================================================================

// Increament :
function test4() {
    var x = 100;    
    
    
    // Increament Function :
    document.getElementById("testDec").innerHTML = x++;
    console.log(x++);
    console.log(x++);
    console.log(x++);
    
}
// -=========================================================================================

// Decreament :
function test5() {
    var x = 100;    
    
    
    // Increament Function :
    document.getElementById("testDec").innerHTML = x--;
    console.log(x--);
    console.log(x--);
    console.log(x--);
}
// -=========================================================================================

// OverAll Funtions:
function display() {
    document.getElementById('SourceCode').textContent = test;
    document.getElementById('SourceCode1').textContent = test1;
    document.getElementById('SourceCode2').textContent = test2;
    document.getElementById('SourceCode3').textContent = test3;
    document.getElementById('SourceCode4').textContent = test4;
    document.getElementById('SourceCode5').textContent = test5;

}