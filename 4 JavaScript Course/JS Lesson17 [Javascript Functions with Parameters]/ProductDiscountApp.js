/* global prompt, alert */

function processProDisc() {
    var pass = prompt("Press any key to start the [Function Products Discount calculator] Application...");
    
    if (pass != "") {
        
        function ProdDisc(price, discount) {                                            
            return "Your product main Price = " + price + "<br>" +                
                "Your Product's Discount = " + discount + "<br>" +
                "Your Product price After Discount = " + (price -  discount);                 
        }                
        var mainPrice =  prompt("Insert your main Product Price :"),            
            mainDiscount =  prompt("Insert your main Discount :");            

        alert("Check The result in it's location ");        
        
        document.getElementById("ProductDiscount").innerHTML =
            ProdDisc(mainPrice, mainDiscount);
    } else {
        alert("Good Bye");        
    } 
}
