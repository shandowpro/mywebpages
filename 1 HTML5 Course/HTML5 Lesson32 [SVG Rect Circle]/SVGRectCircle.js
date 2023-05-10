/* global alert, document, prompt */
/* jslint plusplus: true evil: true */ 
/* [Canvas Create Simple Canvas] Application {Part 2} */ 

function Svg () {
    
    alert("Welcome to SVG -[ Rectangle + Circle] Simple Creation Application...");

    var PageSvg = document.createElement('svg');
    
    PageSvg.id="S";
    PageSvg.width ="600";
    PageSvg.height="600";
    
    
    
    //var myCanvas = document.getElementById('c'),
      //  myContext = myCanvas.getContext('2d');
    
    
    var mthd = prompt("Choose your Mehtod... \n Press 1 for [Simple SVG-Rectangle Drawer] Mode... \n Press 2 for [Simple SVG-Circle Drawer] Mode...\n Or Press any other key to Exit... ");
    
    if (mthd == "1") {
        alert("Welcome to [Simple SVG-Rectangle Drawer] Mode ...");
        
        PageSvg.rx = "10";
        PageSvg.ry = "10";
        
        PageSvg.fillstyle = "#EEE";        
        
        PageSvg.fill('rect', 10, 10); 
        
        
        
    } else if (mthd == "2") {
        alert("Welcome to [Simple SVG-Circle Drawer] Mode ...");
        
        PageSvg.r = "30";        
        
        PageSvg.fillstyle = "#EEE";        
        
        PageSvg.fill('circle', 10, 10); 
        
        
    
        
    } else {
        alert("Error Entry!");
    }
                
}
//==============================================================================================
function Clear() {
    
    var myCanvas = document.getElementById('c'),
        myContext = myCanvas.getContext('2d'),
        txt = document.getElementById("txtarea");
    
    myContext.clearRect(0, 0, 800, 400);
    txt.innerHTML = "Shapes have been deleted!";
    alert("All Shapes have been Deleted!");
        
}
