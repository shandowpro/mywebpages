// Multiple Currencies Converter Application :

function MulConToEp() {
    "use strict"
    
    var price = document.getElementById("Price1").value,
        //Curr = document.getEelementById("Currencies").value,
        show = document.getElementById("Show1"),       
        show0 = document.getElementById("Show11");
                
    //show.value = "" ;                   
    //show0.value = "" ;                   

    if (price == "" ){               
       show0.innerHTML = "Can Not Accept Empty Field!" ;                                
    } else if (isNaN(price)) {
       show0.innerHTML = "Can Not Accept Text Value here , Only Numbers are accepted!" ;                         
    } else if (price > 10000) {
        show0.innerHTML = "Over Accepted Limit!" ;                                           
    } else if (price == "0") {                
        show0.innerHTML = "Can Not Accept Zero Value !" ;                                                         
    } else if (price < 0) {                
        show0.innerHTML = "Can Not Accept Negative Value !" ;                                                     
    } else {
        if ( Curr == "Egyptian Pound") {
            result = price * 16;            
            show0.innerHTML = "";
            show.value = result;            
        } else if (Curr == "Saudi Riyal") {
            result = price * 3.75;            
            show0.innerHTML = "";
            show.value = result;              
        } else if (Curr == "Euro") {
            result = price * 4;            
            show0.innerHTML = "";
            show.value = result;              
        } else if (Curr == "Kuwaiti Dinar") {
            result = price * 15;            
            show0.innerHTML = "";
            show.value = result;                                                                                                 
        } else if (Curr == "Japanese Yen") {
            result = price * 20;            
            show0.innerHTML = "";
            show.value = result;            
        } else if (Curr == "Russian Robel") {
            result = price * 25;            
            show0.innerHTML = "";
            show.value = result;                        
        } else {
            alert('Error Entry!');
        }
    }                                                                                                     
}                                     



