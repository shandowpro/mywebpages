

var mainDiv = document.getElementById('main'),
    child = document.getElementById('myChild');

    if(mainDiv.contains(child)) {
        console.log('[' + mainDiv.tagName + '] has the Child Element [' + child.tagName + '] The Child\'s Direct Parent Element is [' + child.parentElement.tagName + ']');
        alert('[' + mainDiv.tagName + '] has the Child Element [' + child.tagName + '] \n The Child\'s Direct Parent Element is [' + child.parentElement.tagName + ']' );
        child.textContent = '[' + mainDiv.tagName + '] has the Child Element [' + child.tagName + '] This is New Span content from the JS \n' + '] The Child\'s Direct Parent Element is [' + child.parentElement.tagName + ']';

    } else {
        console.log(mainDiv.tagName + 'has NOT the this Child Element');
    }

// ====================================================================================
function test() {
    var mainDiv = document.getElementById('main'),
    child = document.getElementById('myChild');

    if(mainDiv.contains(child)) {
        console.log('[' + mainDiv.tagName + '] has the Child Element [' + child.tagName + '] The Child\'s Direct Parent Element is [' + child.parentElement.tagName + ']');
        alert('[' + mainDiv.tagName + '] has the Child Element [' + child.tagName + '] \n The Child\'s Direct Parent Element is [' + child.parentElement.tagName + ']' );
        child.textContent = '[' + mainDiv.tagName + '] has the Child Element [' + child.tagName + '] This is New Span content from the JS \n' + '] The Child\'s Direct Parent Element is [' + child.parentElement.tagName + ']';

    } else {
        console.log(mainDiv.tagName + 'has NOT the this Child Element');
    }
}
// ====================================================================================

function display() {
    document.getElementById("SourceCode").innerHTML =  test + "\n\n" + "=".repeat(90) + "\n\n"; 
     
}