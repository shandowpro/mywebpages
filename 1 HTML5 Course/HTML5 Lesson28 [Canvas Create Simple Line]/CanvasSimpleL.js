/* global alert, document, prompt */
/* jslint plusplus: true evil: true */ 
/* [Canvas - Create Simple - Compolicated Lines ] Application {Part 3} */ 

function Canv () {
    
    alert("Welcome to Creating Single - Complicated Lines Drawer Application...");

    var myCanvas = document.getElementById('c'),
        myContext = myCanvas.getContext('2d'),
        txt = document.getElementById("txtarea");
        
    
    
    var mthd = prompt("Choose your Mehtod... \n Press 1 for [Simple lines Drawer] Mode... \n Press 2 for [Complicated Lines Drawer] Mode...\n Or Press any other key to Exit... ");
    
    if (mthd == "1") {
        
        alert("Welcome to [Simple lines Drawer] Mode ...");
        
        alert("Lets set your Canvas properties >>>");
        
        var CanvWidth = prompt("Enter your Canvas width ..."),
            CanvHeight = prompt("Enter your Canvas Height ..."),
            CanvColor = prompt("Enter your Main Canvas Color by RGB System ...");
                            
        myCanvas.width = CanvWidth;
        myCanvas.height = CanvHeight;
        myContext.fillStyle = CanvColor;
        
                
        alert("Lets set your Line properties >>>");
    
        var LW = prompt("Choose your line width ..."),
            LColor = prompt("Choose you line Color by RGB System..."),
            LStartX = parseInt(prompt("Insert line Start point X Coordinate ...")), 
            LStartY = parseInt(prompt("Insert line Start point Y Coordinate ...")), 
            LEndX = parseInt(prompt("Insert line End point X Coordinate ...")), 
            LEndY = parseInt(prompt("Insert line End point Y Coordinate ..."));
        
        myContext.strokeStyle = LColor;
        myContext.lineWidth = LW;
        myContext.moveTo(LStartX, LStartY);
        myContext.lineTo(LEndX, LEndY);
        
        myContext.stroke();    
        
        txt.innerHTML = "Your line has been drawn Succesfully!";
        
    } else if (mthd == "2") {
        alert("Welcome to [Complicated Lines Drawer] Mode ...");
        
        alert("Lets set your Canvas properties >>>");
        
        var CanvWidth1 = prompt("Enter your Canvas width ..."),
            CanvHeight1 = prompt("Enter your Canvas Height ..."),
            CanvColor1 = prompt("Enter your Main Canvas Color by RGB System ..."),
            CanvCount = parseInt(prompt("How manu Canvas you wish to draw ?"));

        myCanvas.width = CanvWidth1;
        myCanvas.height = CanvHeight1;
        myContext.fillStyle = CanvColor1;

        
        for (var x = 1; x < CanvCount+1; x++ ) {
            
            alert("Lets set your Line properties number :" + x );

            var LW1 = prompt("Choose your line width ..."),
                LColor1 = prompt("Choose you line Color by RGB System..."),
                LStartX1 = parseInt(prompt("Insert line Start point X Coordinate ...")), 
                LStartY1 = parseInt(prompt("Insert line Start point Y Coordinate ...")), 
                LEndX1 = parseInt(prompt("Insert line End point X Coordinate ...")),             
                LEndY1 = parseInt(prompt("Insert line End point Y Coordinate ..."));

            myContext.strokeStyle = LColor1;
            myContext.lineWidth = LW1;
            myContext.moveTo(LStartX1, LStartY1);
            myContext.lineTo(LEndX1, LEndY1);

            myContext.stroke();                            
        }
        
        txt.innerHTML = "Your line(s) has been drawn Succesfully!";
                                                        
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
