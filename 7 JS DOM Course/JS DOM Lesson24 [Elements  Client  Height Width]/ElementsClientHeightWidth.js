
var mainDiv = document.getElementById('main'),
    elemDis = document.getElementById('dis');
    
    console.log(mainDiv.tagName + ' Client Height = [ ' + mainDiv.clientHeight + 'px ]' + '<br>' +
     ' Client Width  = [' + mainDiv.clientWidth + 'px ]');
    
    alert(mainDiv.tagName + ' Client Height = [ ' + mainDiv.clientHeight + 'px ]' + '<br>' +
    ' Client Width  = [' + mainDiv.clientWidth + 'px ]');

    elemDis.innerHTML += mainDiv.tagName + ' Client Height = [ ' + mainDiv.clientHeight + 'px ]' + '<br>' +
    ' Client Width  = [' + mainDiv.clientWidth + 'px ]';
// ====================================================================================

function test() {
    var mainDiv = document.getElementById('main'),
    elemDis = document.getElementById('dis');
    
    console.log(mainDiv.tagName + ' Client Height = [ ' + mainDiv.clientHeight + 'px ]' + '<br>' +
     ' Client Width  = [' + mainDiv.clientWidth + 'px ]');
    
    alert(mainDiv.tagName + ' Client Height = [ ' + mainDiv.clientHeight + 'px ]' + '<br>' +
    ' Client Width  = [' + mainDiv.clientWidth + 'px ]');

    elemDis.innerHTML += mainDiv.tagName + ' Client Height = [ ' + mainDiv.clientHeight + 'px ]' + '<br>' +
    ' Client Width  = [' + mainDiv.clientWidth + 'px ]';
}
// ====================================================================================

function display() {
    document.getElementById("SourceCode").innerHTML =  test + "\n\n" + "=".repeat(90) + "\n\n"; 
     
}