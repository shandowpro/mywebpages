// JS DOM Lesson28 [Elements  Client  Top Left] :

    var elem = document.getElementById('main'),
        dis = document.getElementById('dis');
        
     console.log('Element Top Border Width = ' + elem.clientTop + '<br>' + 'Element Left Border Width \+ the Scroll if it is left = ' + elem.clientLeft);
     
     alert('Element Top Border Width = ' + elem.clientTop + '\n' + 'Element Left Border Width \+ the Scroll if it is left = ' + elem.clientLeft);
     
     dis.innerHTML += 'Element Top Border Width = ' + elem.clientTop + '<br>' + 'Element Left Border Width \+ the Scroll if it is left = ' + elem.clientLeft;


     function test() {
        var elem = document.getElementById('main'),
            dis = document.getElementById('dis');
        
        console.log('Element Top Border Width = ' + elem.clientTop + '<br>' + 'Element Left Border Width \+ the Scroll if it is left = ' + elem.clientLeft);
        
        alert('Element Top Border Width = ' + elem.clientTop + '\n' + 'Element Left Border Width \+ the Scroll if it is left = ' + elem.clientLeft);
        
        dis.innerHTML += 'Element Top Border Width = ' + elem.clientTop + '<br>' + 'Element Left Border Width \+ the Scroll if it is left = ' + elem.clientLeft;
     }

// ====================================================================================

function display() {
    document.getElementById("SourceCode").innerHTML =  test + "\n\n" + "=".repeat(90) + "\n\n"; 
     
}