
var myButton = document.getElementById('btnT');        

myButton.onclick = function() {
    'use strict';    
    
    this.parentElement.style.display = 'None';
    this.parentElement.style.visibility = 'hidden';    
}


window.onload = function() {    
    
    setTimeout(function() {
        myButton.click();        
    }, 2000);
}


function hideBtn() {
    'use strict';
    alert('Function alert');
    
    var myButton = document.getElementById('btnT');        

    alert('The Button Parent Tag Name is [' + myButton.parentElement.tagName + ']');
    console.log('The Button Parent Tag Name is [' + myButton.parentElement.tagName + ']');
    
    myButton.parentElement.style.display = 'None';
    myButton.parentElement.style.visibility = 'hidden';
        
} 
// =======================================================================
function hideBtn1() {
    'use strict';
    alert('Function alert');
    
    var myButton = document.getElementById('btnT');        

    alert('The Button Parent Tag Name is [' + myButton.parentElement.tagName + ']');
    console.log('The Button Parent Tag Name is [' + myButton.parentElement.tagName + ']');
    
    myButton.parentElement.style.display = 'None';
    myButton.parentElement.style.visibility = 'hidden';
        
} 
// ====================================================================================

function display() {
    document.getElementById("SourceCode").innerHTML = 'Focus Function as following :' + '\n' + hideBtn + "\n\n" + "=".repeat(90) + "\n\n" + 
     'Focus Function as following :' + '\n' + hideBtn1 +  "\n\n" + "=".repeat(90) + "\n\n" ;    
}