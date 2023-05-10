// Basic Currency Converter Application:    
        function ConvToEp() {
            "use strict"
            var price = document.getElementById("Price").value,
                result = price * 3.75,
                show = document.getElementById("Show"),       
                show0 = document.getElementById("Show0");
                
            show.value = "" ;                   
            show0.value = "" ;                   
            
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
                show0.innerHTML = ""
                show.value = result;                 
            }                                                                                                     
        }                                     