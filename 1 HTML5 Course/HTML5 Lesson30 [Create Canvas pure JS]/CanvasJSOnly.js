/* global alert, document, prompt */
/* jslint plusplus: true evil: true */ 
/* [Canvas - Pure JS] Application {Part 5} */ 

function Canv () {
    
    alert("Welcome to [Canvas - Pure JS] Application...");

    var x = prompt("Press (1) to start the application or any other key to Exit...");
    
    if (x === "1") {
    
        do {
           
            var pageCanvasTag = document.createElement("canvas"),
                myDiv = document.getElementById("displayCanvas");
    
            pageCanvasTag.id = 'c';
        
            
            var pageCanvasW = prompt("Enter Canvas Tag width"),
                pageCanvasH = prompt("Enter Canvas Tag height");
            
            pageCanvasTag.width = pageCanvasW;
            pageCanvasTag.height = pageCanvasH;
            
            pageCanvasTag.style.margin = '50px auto';
            pageCanvasTag.style.display = 'block';
            
            document.body.appendChild(pageCanvasTag);
            
            
            var myCanvas = document.getElementById('c'),
                myContext = myCanvas.getContext('2d'),
                txt = document.getElementById("txtarea");
            

            alert("Lets set your Canvas Context properties >>>");

            var mthd = prompt("Choose your Mehtod... \n Press 1 for [Fill Text] ... \n Press 2 for [Stroke Text] Mode...\n Press (3) for [Mixed Text (Seperated Characters fill+stroke)] \n Or Press any other key to Exit... ");

            if (mthd == "1") {

                alert("Welcome to [Fill Text] ...");

                alert("Lets set your Text properties >>>");

                var TCont = prompt("Enter your Text contents..."),            
                    TSizeType = prompt("Insert your Text Size with px + Font Type Family ..."),            
                    TColor = prompt("Choose you Text Color by RGB System - Name ..."),
                    TX = parseInt(prompt("Insert Text Start point X Coordinate ...")), 
                    TY = parseInt(prompt("Insert Text Start point Y Coordinate ..."));            


                myContext.fillStyle = TColor;

                myContext.font = TSizeType;

                myContext.fillText(TCont, TX, TY);

                txt.innerHTML = "Your Fill Mode Text has been drawn Succesfully!";
                
                document.body.appendChild(myCanvas);

                //myDiv.textContent = myCanvas;

            } else if (mthd == "2") {
                
                alert("Welcome to [Stroke Text] Mode...");

                alert("Lets set your Text properties >>>");

                var TCont1 = prompt("Enter your Text contents..."),            
                    TSizeType1 = prompt("Insert your Text Size with px + Font Type Family ..."),            
                    TColor1 = prompt("Choose you Text Color by RGB System - Name ..."),
                    TW1 = parseInt(prompt("Insert Text line width ...")), 
                    TX1 = parseInt(prompt("Insert Text Start point X Coordinate ...")), 
                    TY1 = parseInt(prompt("Insert Text Start point Y Coordinate ..."));            

                myContext.strokeStyle = TColor1;

                myContext.font = TSizeType1;

                myContext.lineWidth = TW1;

                myContext.strokeText(TCont1, TX1, TY1);                                
                
                txt.innerHTML = "Your Stroke Mode Text has been drawn Succesfully!";
                
                document.body.appendChild(myCanvas);
                
                //myDiv.textContent = myCanvas;

            } else if (mthd == "3") {
                alert("Welcome to [Mixed fill & stroke Text] Method...");

                alert("A) Lets set your fill & Stroke Text properties >>>");

                var TMCont = new Array(),
                    FContCount = parseInt(prompt("Enter your text Character count.."));                                        
                    
                
                var SizeType = "50px Arial",            
                    TMW1 = parseInt(prompt("Insert Stroke Text line width ...")),
                    TMX = parseInt(prompt("Insert Text Start point X Coordinate ...")), 
                    TMY = parseInt(prompt("Insert Text Start point Y Coordinate ...")),
                    i = 0;                    
                
                myContext.lineWidth = TMW1;
            
                myContext.font = SizeType;
                                            
                
                for ( i, TMX, TMY ; i < FContCount ; i++, (TMX+20), (TMY+50)) {
                    
                    TMCont[i] = prompt("Enter your Character Number " + (i+1) );                        
                    
                    var TMColor = prompt("Choose you Fill Text Color by RGB System - Name ..."),
                        SMColor = prompt("Choose you Stroke Text Color by RGB System - Name ...");
                                                                
                    myContext.strokeStyle = SMColor;
                    myContext.fillStyle = TMColor;
                    
                    myContext.fillText(TMCont[i], TMX, TMY);
                    myContext.strokeText(TMCont[i], TMX, TMY);                                                    
                     
                }
                
                document.body.appendChild(myCanvas);

                txt.innerHTML = "Your Mixed Fill & Stroke Mode Text has been drawn Succesfully!";
                
                //myDiv.textContent = myCanvas;

                                                                                                                              
                //==============================================================================
                                                                                            
            
            } else {
                alert("Error Entry!");
            }                
                        
            var z = prompt ("Press (1) to Restart the Application, \n press any other key to exit...");

        } while (z == "1");

    } else {
        alert ("Error Entry!");
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
    