/* global document, alert, prompt */

/* JSOOP [Object Constructor Function + Extractecd Object Introduction] */

function constFunc() {
    
    
    var mthd = prompt("Press (1) to Display the [Fixed Constractor' Parameters Function + Fixed Extracted Objects's Properties Values] (Fixed Mode) Application\n Press (2) to Display the [ Fixed Constactor's Parameters Function + Controlled Extracted Objects's Properties Values by user] (Controlled Mode) Application\n Press any other key to Exit...");
    
    if (mthd == "1") {
        alert("Welcome to [Constructor function] + [Extracted Objects]");
                
        function FuncConst(id, name, price) {        
            this.id = id;
            this.name = name; 
            this.price = price;         
        }
        console.log("=========================================================");
        
        var countP = 0;

        let obj1 = new FuncConst(123, "Shadi", 500);    
        
        for (a1 in obj1) {
            console.log("your property Number (" + (countP+1) + ") as following :\n" + a1 + ":" + obj1[a1] + "------------------------------\n");            
            document.getElementById("txtarea").innerHTML = "Your property Number (" + (countP+1) + ") as following :\n" + a1 + ":" + obj1[a1] + "\n ---------------------- \n"; 
            countP++;
        }        
        countP = 0;
        console.log("=========================================================");
        
        let obj2 = new FuncConst(456, "Sayed", 600);    
        
        for (a2 in obj2) {
            console.log("Your property Number (" + (countP+1) + ") as following :\n" + a2 + ":" + obj2[a2] + "\n---------------------------------\n");            
            document.getElementById("txtarea").innerHTML = "Your property Number (" + (countP+1) + ") as following :\n" + a2 + ":" + obj2[a2] + "\n-----------------------\n"; 
            countP++;
        }        
        countP = 0;        
        console.log("=========================================================");
        let obj3 = new FuncConst(789, "Mohammed", 700);    
        
        for (a3 in obj3) {
            console.log("Your property Number (" + (countP+1) + ") as following :\n" + a3 + ":" + obj3[a3] + "\n ------------------------------ \n");            
            document.getElementById("txtarea").innerHTML = "Your property Number (" + (countP+1) + ") as following :\n" + a3 + ":" + obj3[a3] + "\n ----------------------------- \n"; 
            countP++;
        }        
        countP = 0;        
        console.log("=========================================================");
    // ================================================================================
    // ================================================================================
        
    } else if (mthd = "2"){
        alert("Welcome to Constructor Function by fixed parameters Names + Flexible user inserting values Parameters values ");

        var vArr = new Array();
        
        // Defining the Constructor Function:
        function ConsFun(name, age, city) {
            this.name =name;
            this.age = age;
            this.city =city;            
        }
        
        // Extarcting an Empty Test object from Constractor Fucntion to get Access to the Parameters Names:
        let obj = new ConsFun();
        
        var countP = 0;

        alert("your Constructor Function parameters Names as following : ");                

        for (k0 in obj){
            console.log("your Parameter Number (" + (countP+1) + ") =" + k0 + "\n--------------------------\n");            
            document.getElementById("txtarea").innerHTML = "your Parameter Number (" + (countP+1) + ") =" + k0 + "\n-------------------------\n"; 
            countP++;
        }   
        countP =0;     
        console.log("=====================================");                
        
        
        alert("Your count of extracted object = (3) ");        
        console.log("=====================================");                
        
        // Reciving Parameters of Object (1) from the User :
        alert("Enter First object's parameter's values");        
        var name1 = prompt("Enter first Parameter' value of first Object :");
        var age1 = prompt("Enter second Parameter' value of first Object :");
        var city1 = prompt("Enter third Parameter' value of first Object :");
        
        let obj1 =  new ConsFun(name1, age1, city1);
        
        
        // Reciving Parameters of Object (2) from the User :
        alert("Enter Second object's parameter's values");            
        var name2 = prompt("Enter first Parameter's value of second Object :");
        var age2 = prompt("Enter second Parameter' value of second Object :");
        var city2 = prompt("Enter third Parameter' value of second Object :");
        
        let obj2 =  new ConsFun(name2, age2, city2);
        
        
        // Reciving Parameters of Object (3) from the User :
        alert("Enter Third object's parameter's values");            
        var name3 = prompt("Enter first Parameter' value of third Object :");
        var age3 = prompt("Enter second Parameter' value of third Object :");
        var city3 = prompt("Enter third Parameter' value of third Object :");
        
        let obj3 =  new ConsFun(name3, age3, city3);
        
        
        // Printing all object's parameters Values :
        for (a=0; a<3; a++) {
            
            console.log("Your Overall Parameters values of Object Nubmer (" + (a+1) + ") as following : ");            
            document.getElementById("txtarea").innerHTML += "Your Overall Parameters values of Object Nubmer (" + (a+1) + ") as following : \n";             
            
            if (a == 0) {                
                
                console.log(obj1);
                console.log("Your Detailed Parameters values of Object Nubmer (" + (a+1) + ") as following : ");            
                
                document.getElementById("txtarea").innerHTML = obj1 + "\n"; 
                document.getElementById("txtarea").innerHTML += "Your Detailed Parameters values of Object Nubmer (" + (a+1) + ") as following :\n"; 
                
                for (k1 in obj1) {
                    
                    console.log("Key name number (" + (countP+1) + ") as following \n" + k1 + ":" + obj1[k1] +  "\n-------------------------\n");
                    document.getElementById("txtarea").innerHTML += "Key name number (" + (countP+1) + ") as following \n" + k1 + ":" + obj1[k1] + "\n ---------------------------- \n"; 
                    countP++;
                }
                countP = 0;                                            
                alert("=======================================================================");                
                
            } else if (a == 1) {                
                
                console.log(obj2);
                console.log("Your Detailed Parameters values of Object Nubmer (" + (a+1) + ") as following :\n ");            
                document.getElementById("txtarea").innerHTML += "Your Detailed Parameters values of Object Nubmer (" + (a+1) + ") as following :\n ---------------------------- \n"; 
                
                for (k2 in obj2) {
                    
                    console.log("Key name number (" + (countP+1) + ") as following \n" + k2 + ":" + obj2[k2] + "\n------------------------------\n");
                    document.getElementById("txtarea").innerHTML += "Key name number (" + (countP+1) + ") as following \n" + k2 + ":" + obj2[k2]+ "\n ------------------------------------ \n"; 
                    countP++;
                }
                countP = 0;
                alert("=======================================================================");                
                
            } else if (a == 2) {
                
                console.log(obj3);                
                console.log("Your Detailed Parameters values of Object Nubmer (" + (a+1) + ") as following : ");            
                document.getElementById("txtarea").innerHTML += "Your Detailed Parameters values of Object Nubmer (" + (a+1) + ") as following : \n"; 
                
                for (k3 in obj3) {
                    
                    console.log("Key name number (" + (countP+1) + ") as following \n" + k3 + ":" + obj3[k3] + "\n---------------------\n");
                    document.getElementById("txtarea").innerHTML += "Key name number (" + (countP+1) + ") as following \n" + k3 + ":" + obj3[k3] + "\n ========================\n" ; 
                    countP++;
                }
                countP = 0;
                alert("=======================================================================");                
                
            }
        }
        
        // ==========================================================================================
        // ==========================================================================================
        /*  } else if (mthd == "0") {
            
            //A) Setting [Constructor Function] Parameters Array (Names + Count) :
            
        // 1) Inserting [Constructor Function] Parameters Names by user :
        var pArr = new Array();
        var count = prompt("Enter Count of your Constructor Function's parameters : ");
        pArr.length = count;
        
        // 2) Inserting Parameters Names Array by user :
        for (i=0; i<count; i++ ) {
            pArr[i] =  prompt("Enter Parameter Name number :" + (i+1));            
        } 
        // ===================================================================
        
        
        //B) Setting [Extracted Objects] (Array values + Count) :
        
        // 1) Setting Extracted Object's Count :
        var vArr = new Array();
        var countObj = prompt("Enter Count of Required Extracted Object(s) from the Constructor function: ");
        
        // ===================================================================
        

        // C) Setting Constractor function with Parameters Array Names:
        function constFunc(pArr) {
            for(a=0; a < count; a++) {
                this[pArr[a]] = pArr[a];
            }
        }
        
        // Inserting Object parameters Values by Parameters Array Values + Assigning each Array Value inside each Extracted Object:  
        for (b=0; b<countObj; b++) {
            
            alert("lets Inserting Parameters values of object number "+ (b+1) + "... ");
            
            for (c=0; c<count; c++) {
                                
                vArr[c] = prompt("Enter Parameter Value number :" + (c+1));
                                
            }

            // Assigning Extracted new Object from Constructor Function :
            let obj1 = new constFunc(vArr);
                        
            // Printing each extracted Object's Values :
            for (d=0; d < count; d++) {
                
                console.log(obj1.vArr[d]);

            }
        }
*/

    } else {

        alert("Good Bye!");
    }
        
    
}        
    
//-====================================================================================================    


function Display() {

    document.getElementById('txtarea1').textContent = constFunc;
}

//-====================================================================================================    