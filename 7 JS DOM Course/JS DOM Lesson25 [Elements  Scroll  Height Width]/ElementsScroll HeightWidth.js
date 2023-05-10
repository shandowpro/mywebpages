
var mainDiv = document.getElementById('main'),
    child = document.getElementById('child'),
    elemDis = document.getElementById('dis');
    
    console.log(mainDiv.tagName + ' Scroll Height = [ ' + mainDiv.scrollHeight + 'px ]' + '\n' +
     ' Scroll Width  = [' + mainDiv.scrollWidth + 'px ]');
    
    alert(mainDiv.tagName + ' Scroll Height = [ ' + mainDiv.scrollHeight + 'px ]' + '\n' +
    ' Scroll Width  = [' + mainDiv.scrollWidth + 'px ]');

    elemDis.innerHTML += mainDiv.tagName + ' Scroll Height = [ ' + mainDiv.scrollHeight + 'px ]' + '<br>' +
    ' Scroll Width  = [' + mainDiv.scrollWidth + 'px ]';
// ====================================================================================

function test() {
    var mainDiv = document.getElementById('main'),
    child = document.getElementById('child'),
    elemDis = document.getElementById('dis');
    
    console.log(mainDiv.tagName + ' Scroll Height = [ ' + mainDiv.scrollHeight + 'px ]' + '<br>' +
     ' Scroll Width  = [' + mainDiv.scrollWidth + 'px ]');
    
    alert(mainDiv.tagName + ' Scroll Height = [ ' + mainDiv.scrollHeight + 'px ]' + '<br>' +
    ' Scroll Width  = [' + mainDiv.scrollWidth + 'px ]');

    elemDis.innerHTML += mainDiv.tagName + ' Scroll Height = [ ' + mainDiv.scrollHeight + 'px ]' + '<br>' +
    ' Scroll Width  = [' + mainDiv.scrollWidth + 'px ]';
}
// ====================================================================================

function display() {
    document.getElementById("SourceCode").innerHTML =  test + "\n\n" + "=".repeat(90) + "\n\n"; 
     
}