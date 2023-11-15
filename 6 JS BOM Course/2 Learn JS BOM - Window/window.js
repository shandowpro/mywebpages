
// 2 Learn JS BOM - Window :

// General BOM [Functions and Methods] Example: 
    var printM = window.print();
        elem = window.document.getElementById('main'),
        note = window.document.getElementById('note'),
        btn = window.document.getElementById('btn');
    
    
// Printing the {print function} :
    alert(printM);
    window.console.log('Console extended form the Window Object');

    
// General BOM [Property] Example : 
    var elem = window.document.getElementById('elem'),
        note = document.getElementById('note');
        
    alert(elem.textContent);
    window.console.log(elem.textContent);    
        
        
//  Creating a Printing Button Function :
    function printB() {
        window.print();
    }
        
        
// Creating A Button to Display the Inner HTML content in the Note element : 
   btn.onclick =  function() {
    //    note.value = elem.tagName + '<br>';
       note.innerHTML += elem.tagName + '<br>';
       note.innerHTML += elem.textContent + '<br>';
       note.innerHTML += elem.nodeType + '<br>';
       note.innerHTML += elem.firstChild.nodeValue + '<br>';
    //    note.innerHTML += elem.childNodes.values;
}            
// ===========================================

// =============================================================================================================
    
function test() {        

    // General BOM [Functions and Methods] Example: 
        var printM = window.print();
            elem = window.document.getElementById('main'),
            note = window.document.getElementById('note'),
            btn = window.document.getElementById('btn');
        
    
    // Printing the {print function} :
        alert(printM);
        window.console.log('Console extended form the Window Object');

        
    // General BOM [Property] Example : 
        var elem = window.document.getElementById('elem'),
            note = document.getElementById('note');
            
        alert(elem.textContent);
        window.console.log(elem.textContent);    
            
            
    //  Creating a Printing Button Function :
        function printB() {
            window.print();
        }
            
            
    // Creating A Button to Display the Inner HTML content in the Note element : 
        btn.onclick =  function() {
            //    note.value = elem.tagName + '<br>';
            note.innerHTML += elem.tagName + '<br>';
            note.innerHTML += elem.textContent + '<br>';
            note.innerHTML += elem.nodeType + '<br>';
            note.innerHTML += elem.firstChild.nodeValue + '<br>';
            //    note.innerHTML += elem.childNodes.values;
        }            
}
// =============================================================================================================

// ====================================================================================

function display() {
    document.getElementById("SourceCode").innerHTML =  test + "\n\n" + "=".repeat(90) + "\n\n";}