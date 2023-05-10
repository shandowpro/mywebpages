/* global alert, prompt */
/* Slicing Array Application : */

function Slice() {
    var pass = prompt("Press (1) to start the Application, \n Press any other Key to End the application :");
    
    if (pass == "1") {
        alert("Welcome to Array Slicing App \n Lets Enter your Main Array ...");
        
        var count = prompt("Enter your Main Array's Count  "),           
            countN = parseInt(count),
            arr = new Array(countN);
        
        for (i = 0; i < count; i++) {
            arr[i] = prompt("Enter Array Element number " + (i + 1));                                       
        }
        
        var Sw = prompt("Press (1) to slice From Specific Start - End of Array ... \n Press (2) to slice form Specific Strat - Specific End ... \n Press (3) to Slice [Reversely] Negative Index ");
        
        switch (Sw) {
            
            case "1" :
                alert("Welcome to slice From Specific Start - End of Array ...  ");
                
                var Start = prompt("Enter your Start Element Position : "), 
                    StartIndex = parseInt(Start) - 1,
                    PartialArr = arr.slice(StartIndex);
                
                document.getElementById("DisplaySlicedArr1").innerHTML = "Your main Array as following : " + arr + "<br>" + "your Partial Array (Case1-SStart End) As Following : " + PartialArr ;   
                
                alert("Your main Array as following : \n" + arr +                
                     "\n your Partial Array (Case1-SStart-End) As Following : \n" + PartialArr);                       
                break;
                                       
            case "2" :
                alert("Welcome to slice From Specific Start - Spcific End of Array ...  ");
                var Start = parseInt(prompt("Enter your Start Element Position : ")), 
                    StartIndex = (Start - 1),
                    End = prompt("Enter your End Element Position : "),                     
                    PartialArr = arr.slice(StartIndex, End);
                
                document.getElementById("DisplaySlicedArr2").innerHTML = "Your main Array as following : " +
                         arr + "<br>" + "your Partial Array (Case2-SStart-SEnd) As Following : " + PartialArr;   
                
                alert("Your main Array as following : \n" + arr + 
                    "\n your Partial Array (Case2-SStart-SEnd) As Following : \n" + PartialArr);                       
                break;
                                                        
            case "3" :
                alert("Welcome to Slice [Reversely] Negative index application ...  ");
                
                var Start = prompt("Enter your Reverse Start Number [Reversing Index]: "),                    
                    StartI = parseInt(Start) * -1 , 
                    End = prompt("Enter your Reverse End before Number [Reversing Index]: "),                    
                    EndI = parseInt(End) * -1,                    
                    PartialArr = arr.slice(StartI, EndI);                 
                
                document.getElementById("DisplaySlicedArr3").innerHTML = "Your main Array as following : " +
                         arr + "<br>" + "your Partial Array (Case3-Reversely) As Following : " + PartialArr;   
                
                alert("Your main Array as following : \n" + arr + 
                    "\n your Partial Array (Case3-Reversely) As Following : \n" + PartialArr);                             
                break;        
            
            default:
                alert("Invalid Entry !");                
                break;
                                                
        }
                                    
    } else {
        alert("Good Bye!");
    }
        
}


