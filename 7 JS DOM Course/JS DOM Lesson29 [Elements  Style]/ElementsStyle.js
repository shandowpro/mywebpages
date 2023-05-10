// JS DOM Lesson29 [Elements  Style] :

    var elem = document.getElementById('main'),
        dis = document.getElementById('dis');

    elem.style.border ='3px solid red'; 
    elem.style.padding ='10px'; 
    elem.style.margin ='15px'; 
    elem.style.fontSize ='20px'; 
    elem.style.fontWeight ='bold'; 
    elem.style.backgroundColor ='lightBlue'; 
    elem.style.color ='#fff'; 
    elem.style.borderRadius ='50px'; 
    elem.style.textAlign ='center'; 

    dis.style.height = 'auto';


     dis.innerHTML = "elem.style.border ='3px solid red';" + "<br>" + "elem.style.padding ='10px';" + "<br>" +" elem.style.margin ='15px'; " + "<br>" +" elem.style.fontSize ='20px'; " + "<br>" + " elem.style.fontWeight ='bold';" + "<br>" + " elem.style.backgroundColor ='lightBlue'; " + "<br>" + " elem.style.color ='#fff'; " + "<br>" + " elem.style.borderRadius ='50px'; " + "<br>" + " elem.style.textAlign ='center';"; 


     function test() {
        elem.style.border ='3px solid red'; 
        elem.style.padding ='10px'; 
        elem.style.margin ='15px'; 
        elem.style.fontSize ='20px'; 
        elem.style.fontWeight ='bold'; 
        elem.style.backgroundColor ='lightBlue'; 
        elem.style.color ='#fff'; 
        elem.style.borderRadius ='50px'; 
        elem.style.textAlign ='center'; 

        dis.style.height = 'auto';


        dis.innerHTML = "elem.style.border ='3px solid red';" + "<br>" + "elem.style.padding ='10px';" + "<br>" +" elem.style.margin ='15px'; " + "<br>" +" elem.style.fontSize ='20px'; " + "<br>" + " elem.style.fontWeight ='bold';" + "<br>" + " elem.style.backgroundColor ='lightBlue'; " + "<br>" + " elem.style.color ='#fff'; " + "<br>" + " elem.style.borderRadius ='50px'; " + "<br>" + " elem.style.textAlign ='center';"; 
    }

// ====================================================================================

function display() {
    document.getElementById("SourceCode").innerHTML =  test + "\n\n" + "=".repeat(90) + "\n\n"; 
     
}