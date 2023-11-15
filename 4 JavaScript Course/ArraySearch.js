/* global alert, document, prompt */ 
/* Array Search Methods Application : */ 

function Search() {
    var pass = prompt("Press (1) to Start the Appliction \n Press any other key to Exit ..."); 
    
    if (pass == 1) {
        alert("Welcome to Array Searching Application ...");
        var choice = prompt(" Press (1) to Choose [Start - End] Method \n Press (2) to Choose [End - Start] Method");
        
        switch (choice)  {
            case "1" :
                alert("Welcome to [Start - End] Array Search Method ...\n Lets Start Inserting your Array...");
                var count = parseInt(prompt("Enter The Count of Your Array :")),
                    arr = new Array (count);

                for (i = 0; i < count; i++  ) {
                    arr[i] = prompt("Enter your Element number (" + (i + 1) + ")");                                     
                }
                
                var InternalM = prompt("Press (1) for Basic Searching Function ... \n Press (2) for Advanced Searching Function ");
                
                switch (InternalM) {
                    case "1" :
                        alert("Welcome to [Start - End] / (Basic) Search Method ...");
                        
                        var ElV = prompt("Enter your Element Value your want to search about it's Index ... " ),
                            SV = arr.indexOf(ElV);
                            
                        document.getElementById("DisplayMainArr").innerHTML =
                            "Your Main Array : " + arr;
                        
                        document.getElementById("DisplaySearchBas").innerHTML =
                            "Your Element ( " + ElV + " ) Index is  : " + "<br>" + SV;
                        
                        break; 
                    
                    case "2" :
                        alert("Welcome to [Start - End] / (Advanced) Search Method ...");
                        
                        var ElV = prompt("Enter your Element Value your want to search about it's Index ... " ),
                            StartIndex = parseInt(prompt("Enter your Search Start Postion : ")) - 1,
                            SV = arr.IndexOf(ElV, StartIndex);
                                                
                        document.getElementById("DisplayMainArr").innerHTML =
                            "Your Main Array : " + arr;                        
                        
                        document.getElementById("DisplaySearchAdv").innerHTML =
                            "Your Element ( " + ElV + " ) Index is  : " + "<br>" + SV;
                        
                        break;
                    default : 
                        alert("Invalid Entry!");
                        break;
                }
                
                break;
            
            case "2" :
                alert("Welcome to [Start - End] Array Search Method ...\n Lets Start Inserting your Array...");
                var count = parseInt(prompt("Enter The Count of Your Array :")),
                    arr = new Array (count);
            
                for (i = 0; i < count; i++  ) {
                    arr[i] = prompt("Enter your Element number (" + (i + 1) + ")");                                     
                }
                
                var InternalM = prompt("Press (1) for Basic Searching Function ... \n Press (2) for Advanced Searching Function ");
                
                switch (InternalM) {
                    case "1" :
                        alert("Welcome to [End - Start] / (Basic) Search Method ...");
                        
                        var ElV = prompt("Enter your Element Value your want to search about it's Index ... " ),
                            SV = arr.lastIndexOf(ElV);
                            
                        document.getElementById("DisplayMainArr").innerHTML =
                            "Your Main Array : " + arr;
                        
                        document.getElementById("DisplaySearchBas").innerHTML =
                            "Your Element ( " + ElV + " ) Index is  : " + "<br>" + SV;                                 
                        
                        break; 
                
                    case "2" :
                        alert("Welcome to [End - Start] / (Advanced) Search Method ...");
                        
                        var ElV = prompt("Enter your Element Value your want to search about it's Index ... " ),
                            StartIndex = parseInt(prompt("Enter your Search Start Postion : ")) - 1,
                            SV = arr.lastIndexOf(ElV, StartIndex);
                                                
                        document.getElementById("DisplayMainArr").innerHTML =
                            "Your Main Array : " + arr;                        
                        
                        document.getElementById("DisplaySearchAdv").innerHTML =
                            "Your Element ( " + ElV + " ) Index is  : " + "<br>" + SV;
                        
                        break;
                    default:
                        alert ("Invalid Entry !");
                        break;
                }                
                
                break;     
            default:
                alert ("Invalid Entry !");
                break;
        }         
        
    } else {
        alert("Good Bye ! ");
    }                
}




