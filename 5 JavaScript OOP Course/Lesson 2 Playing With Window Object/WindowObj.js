/* window, global, Prompt, alert, console */
/* [Window Object] Application : */

 
// function methd() {
        
// }


function reload() {
    
    alert("Weclome to Window Object console Application...");

    var mth = prompt("Press 1 for properties Window Object Application ");
   
    if (mth == '1') {
        window.reload();          
        
        alert("Your page has been Reloaded Successfully!");
        
    } else {
        alert('Good Bye!');
    }

 }

