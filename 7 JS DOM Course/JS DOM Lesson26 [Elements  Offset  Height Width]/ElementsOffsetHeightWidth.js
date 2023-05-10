// JS DOM Lesson26 [Elements  Offset  Height Width] :

var mainDiv = document.getElementById('main'),
    child = document.getElementById('child'),
    elemDis = document.getElementById('dis');
    
    console.log(mainDiv.tagName + ' Offset Height = [ ' + mainDiv.offsetHeight + 'px ]' + '\n' +
     ' offset Width  = [' + mainDiv.offsetWidth + 'px ]');
    
    alert(mainDiv.tagName + ' Offset Height = [ ' + mainDiv.offsetHeight + 'px ]' + '\n' +
    ' offset Width  = [' + mainDiv.offsetWidth + 'px ]');

    elemDis.innerHTML += mainDiv.tagName + ' Offset Height = [ ' + mainDiv.offsetHeight + 'px ]' + '<br>' +
    ' Offset Width  = [' + mainDiv.offsetWidth + 'px ]';
// ====================================================================================

function test() {
    var mainDiv = document.getElementById('main'),
    child = document.getElementById('child'),
    elemDis = document.getElementById('dis');
    
    console.log(mainDiv.tagName + ' Offset Height = [ ' + mainDiv.offsetHeight + 'px ]' + '\n' +
     ' offset Width  = [' + mainDiv.offsetWidth + 'px ]');
    
    alert(mainDiv.tagName + ' Offset Height = [ ' + mainDiv.offsetHeight + 'px ]' + '\n' +
    ' offset Width  = [' + mainDiv.offsetWidth + 'px ]');

    elemDis.innerHTML += mainDiv.tagName + ' Offset Height = [ ' + mainDiv.offsetHeight + 'px ]' + '<br>' +
    ' Offset Width  = [' + mainDiv.offsetWidth + 'px ]';
}
// ====================================================================================

function display() {
    document.getElementById("SourceCode").innerHTML =  test + "\n\n" + "=".repeat(90) + "\n\n"; 
     
}