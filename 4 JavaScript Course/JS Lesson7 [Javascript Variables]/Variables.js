var mainPrice = 500,
    myOldPrice = 1500,
    myNewPrice = 900,    
    myDiscount = myOldPrice - myNewPrice, 
    mySmallDiscount = 50,
    myMediumDiscount = 100,
    myBigDiscount = 250;    
    
    

    
// Simple Functions:
document.getElementById("testing").innerHTML = mainPrice;
document.getElementById("testing1").innerHTML = myDiscount;
document.getElementById("testing2").innerHTML = mainPrice;
document.getElementById("product1").innerHTML = mainPrice - mySmallDiscount;
document.getElementById("product2").innerHTML = mainprice - myMediumDiscount;
document.getElementById("product3").innerHTML = mainPrice - myBigDiscount;