/* global alert, document, prompt */
/* jslint plusplus: true evil: true */ 
/* [Canvas - Create Simple - Multiple Text(s)] Application {Part 4} */ 

function Canv () {
    
    alert("Welcome to Creating Single - Complicated Text Drawer Application...");

    var myCanvas = document.getElementById('c'),
        myContext = myCanvas.getContext('2d'),
        txt = document.getElementById("txtarea");
        
    alert("Lets set your Canvas properties >>>");

    var CanvWidth = prompt("Enter your Canvas width ..."),
        CanvHeight = prompt("Enter your Canvas Height ...");        
            
    myCanvas.width = CanvWidth;
    myCanvas.height = CanvHeight;

            
    var mthd = prompt("Choose your Mehtod... \n Press 1 for [Fill Drawer] ... \n Press 2 for [Stroke Drawer] Mode...\n Or Press any other key to Exit... ");
    
    if (mthd == "1") {
        
        alert("Welcome to [Fill Drawer] ...");
                                                            
        alert("Lets set your Text properties >>>");
    
        var TCont = prompt("Enter your Text contents..."),            
            TSizeType = prompt("Insert your Text Size with px + Font Type Family ..."),            
            TColor = prompt("Choose you Text Color by RGB System - Name ..."),
            TX = parseInt(prompt("Insert Text Start point X Coordinate ...")), 
            TY = parseInt(prompt("Insert Text Start point Y Coordinate ..."));            
        
        myContext.fillStyle = TColor;
        
        myContext.font = TSizeType;
        
        myContext.fillText(TCont, TX, TY);
                
        //myContext.stroke();    
        
        txt.innerHTML = "Your Fill Mode Text has been drawn Succesfully!";
        
    } else if (mthd == "2") {
        alert("Welcome to [Stroke Drawer] Mode...");
        
        alert("Lets set your Text properties >>>");
    
        var TCont1 = prompt("Enter your Text contents..."),            
            TSizeType1 = prompt("Choose your Text Size ..."),            
            TColor1 = prompt("Choose you Text Color by RGB System - Name ..."),
            TX1 = parseInt(prompt("Insert Text Start point X Coordinate ...")), 
            TY1 = parseInt(prompt("Insert Text Start point Y Coordinate ..."));            
        
        myContext.strokeStyle = TColor1;
        
        myContext.lineWidth = 2;
        
        myContext.font = TSizeType1;
        
        myContext.strokeText(TCont1, TX1, TY1);
                
        //myContext.stroke();    
        
        txt.innerHTML = "Your Stroke Mode Text has been drawn Succesfully!";
                                                        
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
