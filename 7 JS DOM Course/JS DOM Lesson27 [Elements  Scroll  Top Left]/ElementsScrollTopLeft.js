// JS DOM Lesson27 [Elements  Scroll  Top Left] :

    var elem = document.getElementById('active'),
        par = document.getElementById('group'),
        parX = par.childElementCount;    
        btn = document.getElementById('btnShow'),
        dis = document.getElementById('dis'),
        btnAdd = document.getElementById('btnAddScroll');


    // Toggling [Show - hide] with Looping in the Parent Container : 
    btn.onclick = function() {
        
        for(x=0; x<parX ; x++) {
            // alert(par.children[x].tagName);
            // console.log(par.children[x].tagName);
            par.children[x].classList.toggle('nonactive');
            dis.innerHTML += 'Child number [' + (x+1) + '] Scroll Top = [' + par.children[x].scrollTop + '] And ' +
            ' Scroll left = [' + par.children[x].scrollLeft + ']' + '<br>' +
            'Child number [' + (x+1) + '] Scroll Height = [' + par.children[x].scrollHeight + '] And ' +
            ' Scroll Width = [' + par.children[x].scrollWidth + ']' + '<br>' + 
            '<hr>';        
        }        
        
        // console.log(par.scrollTop);    
        // alert(par.scrollTop);

        dis.innerHTML = 'Parent Element Scroll Top = [' + par.scrollTop + ']' + '<br>' +
        'And Scroll Left = [' + par.scrollLeft + ']' + '<br>' +
        'And Scroll Height = [' + par.scrollHeight + ']' + '<br>' +
        'And Scroll Width = [' + par.scrollWidth + ']' + '<br>';
        
        dis.innerHTML = 'Body Element Scroll Top = ' + document.body.scrollTop + '<br>' + 
        'And Scroll Left = [' + document.body.scrollLeft + ']' + '<br>' +
        'And Scroll Height = [' + document.body.scrollHeight + ']' + '<br>' + 
        'And Scroll Width = [' + document.body.scrollWidth + ']' + '<br>';
    };
    // ===============================================================

    // Adding to the children Scroll Top & Scroll Left: 
    btnAdd.onclick = function() {
        
        for(x=0; x<parX ; x++) {        
            par.children[x].scrollTop += 100;
            par.children[x].scrollLeft += 100;
            
            dis.innerHTML += 'Child number [' + (x+1) + '] Scroll Top = [' + par.children[x].scrollTop + '] And ' +
            ' Scroll left = [' + par.children[x].scrollLeft + ']' + '<br>' +
            'Child number [' + (x+1) + '] Scroll Height = [' + par.children[x].scrollHeight + '] And ' +
            ' Scroll Width = [' + par.children[x].scrollWidth + ']' + '<br>' + 
            '<hr>';        

            // if (par.children[x].scrollTop > 500) {
            //     alert('child reached');
            //     par.children[x].classList.toggle('nonactive');                            
            // }                
        }        

        dis.innerHTML = 'Parent Element Scroll Top = [' + par.scrollTop + ']' + '<br>' +
        'And Scroll Left = [' + par.scrollLeft + ']' + '<br>' +
        'And Scroll Height = [' + par.scrollHeight + ']' + '<br>' +
        'And Scroll Width = [' + par.scrollWidth + ']' + '<br>';
        
        dis.innerHTML = 'Body Element Scroll Top = ' + document.body.scrollTop + '<br>' + 
        'And Scroll Left = [' + document.body.scrollLeft + ']' + '<br>' +
        'And Scroll Height = [' + document.body.scrollHeight + ']' + '<br>' + 
        'And Scroll Width = [' + document.body.scrollWidth + ']' + '<br>';
    };

    // var child = document.getElementById('nonactive');

    // if (child.scrollTop > 0) {
    //     alert('child reached');
    // }
        

// =================================================    
// ====================================================================================

function test() {
    var elem = document.getElementById('active'),
    par = document.getElementById('group'),
    parX = par.childElementCount;    
    btn = document.getElementById('btnShow'),
    dis = document.getElementById('dis'),
    y = 100;

    // Toggling [Show - hide] with Looping in the Parent Container : 
        btn.onclick = function() {
        for(x=0; x<parX ; x++) {        
            par.children[x].classList.toggle('nonactive');
            dis.innerHTML += 'Child number [' + (x+1) + '] Scroll Top = [' + par.children[x].scrollTop + '] And ' +
            ' Scroll left = [' + par.children[x].scrollLeft + ']' + '<br>' +
            'Child number [' + (x+1) + '] Scroll Height = [' + par.children[x].scrollHeight + '] And ' +
            ' Scroll Width = [' + par.children[x].scrollWidth + ']' + '<br>' + 
            '<hr>';    
        }        
            
        dis.innerHTML += 'Parent Element Scroll Top = [' + par.scrollTop + ']' + '<br>' +
        'And Scroll Left = [' + par.scrollLeft + ']' + '<br>' +
        'And Scroll Height = [' + par.scrollHeight + ']' + '<br>' +
        'And Scroll Width = [' + par.scrollWidth + ']' + '<br>';
        
        dis.innerHTML += 'Body Element Scroll Top = ' + document.body.scrollTop + '<br>' + 
        'And Scroll Left = [' + document.body.scrollLeft + ']' + '<br>' +
        'And Scroll Height = [' + document.body.scrollHeight + ']' + '<br>' + 
        'And Scroll Width = [' + document.body.scrollWidth + ']' + '<br>';
    };

    var child = document.getElementById('nonactive');

    if (child.scrollTop > 0) {
        alert('child reached');
    }

}
// ====================================================================================

function display() {
    document.getElementById("SourceCode").innerHTML =  test + "\n\n" + "=".repeat(90) + "\n\n"; 
     
}