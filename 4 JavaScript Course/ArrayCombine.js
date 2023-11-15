/* global, Prompt, alert */
/* Combine Array Application : */

function Combine() {
    var pass = prompt("Press (1) to start the Application, \n Press any other Key to End the application :");
    
    if (pass == "1") {
        alert("Welcome to Array Combine App \n Lets Enter your Main Array ...");
        
        
        var pass = prompt("Press (1) to Combine between (2) Arrays only ... \n Press (2)) to Combine between more than (2) Arrays ...");
        
        
        switch (pass) {
            
            case "1" :
                alert("Welcome to Combine Between (2) Arrays only ...  ");                
                    
                var count1 = prompt("Enter your Frist Array's Counter"),
                    arr1 = new Array(count1);
                
                for (i = 0; i < count1; i++) {
                    arr1[i] = prompt("Enter First Array Element number " + (i + 1));                                   
                }
                
                var count2 = prompt("Enter your Second Array's Counter"),
                    arr2 = new Array(count2);

                for (x = 0; x < count2; x++) {
                    arr2[x] = prompt("Enter Second Array Element number " + (x + 1));                                   
                }
                
                var arr3 = arr1.concat(arr2);
                                                                            
                
                document.getElementById("DisplayMainArrs").innerHTML = "Your First Array as following : " + "<br>" +
                    arr1 + "<br>" + "Your Second Array as following : " + "<br>" + arr2;                                                             
                
                document.getElementById("DisplayConcatArr").innerHTML = "Your Final Concatenated Array as following :" +
                    "<br>" + arr3;
                
                alert("Your Final Array as following : \n" + arr3);                                                                                                         
                break;            
                        
            case "2" :
                alert("Welcome to Combine Between more than (2) Arrays...  ");
                var ArrsCount = parseInt(prompt("Enter your Count of Arrays to Combine between : ")),
                    TotArr = new Array (ArrsCount),
                    PartArr0 = new Array ();
                                                
                for (i = 0; i < ArrsCount; i++) {
                    var Count = parseInt(prompt("Enter Array Count Number " + (i + 1))),
                        PartArr = new Array (Count); 
                                        
                    for (x = 0; x < Count; x++) {
                        PartArr[x] = prompt("Enter Array (" + (i + 1) + ") Element Number " + (x + 1));                 
                    }                    
                    TotArr = TotArr.concat(PartArr);                            
                }
                

                
                document.getElementById("DisplayConcatArr").innerHTML =
                    "Your Final Concatenated Array as following : " + "<br>" + TotArr;   
                
                alert("Your Concatenated Array As Following : \n" + TotArr);                         
                break;            
            
            default:
                alert("Invalid Entry !");                
                break;
        }                                                           
                                    
    } else {    
        alert("Good Bye!");
    }
        
}


