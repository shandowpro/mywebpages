//alert("Hello SHadi!");
        
var mainPrice = 500,
    myOldPrice = 1500,
    myNewPrice = 900,    
    myDiscount = myOldPrice - myNewPrice,     
    mySmallDiscount = 50,
    myMediumDiscount = 100,
    myBigDiscount = 250;    
    
    

    
// Simple Functions:

document.getElementById("testing").textContent = mainPrice;
document.getElementById("testing1").textContent = myDiscount;

//document.getElementById("testing2").innerHTML = mainPrice;

document.getElementById("product1").textContent = mainPrice - mySmallDiscount;
document.getElementById("product2").textContent = mainPrice - myMediumDiscount;
document.getElementById("product3").textContent = mainPrice - myBigDiscount;