/* global document, alert, prompt */

/* JSOOP [For In Loop with Object properties] */

function objFor() {
    
    alert("Welcome to Creating Object [by For Loop]");

    //const obj = Object.create();
    //var obj = new Object();
    //const obj = new Object();
    
    //let obj = Object.assign({});
    //let obj = Object.create();
    
    //var obj = Object.assign({});
    //var obj = Object.create();
    //var obj = new Object();
    
    
    //const obj = Object.assign({});    

    const obj  = {};

    var nArr= [], 
        vArr=[];

    var final = '',
        count = prompt("enter your properies count :");    


    // Creating object propeties by recieving it's properties form user: 
    for (a=0; a < count; a++) {
        nArr[a] = prompt("insert your key name number : " + (a+1));
        vArr[a] = prompt("insert your key value number : " + (a+1));
        
        Object.defineProperty(obj, nArr[a], {value:vArr[a], configurable:true});
        
        final += 'Property (' + (a+1) +  ') => ' + nArr[a] + ' : ' + obj[nArr[a]] + '\n';
        
    }

    
    document.getElementById("txtarea").innerHTML = final;
    
    console.log(final);
    
    // Can not Loop in a Pre-defined object's properties by using Loop-In ... !!
    // Even i used an child object from the parent object , I Can not used it to Loop in ... !!  
    //var nObj = Object.create(obj);
    
    // Printing Object properties by For-In Loop:
    for (var a in Obj) {

        console.log("Object properties as following : ");
        console.log(a);
        console.log(Obj[a]);

    }    

}        
    
//-====================================================================================================    

function objForIn1() {

    alert("Welcome to Printing [Pre-defined] Object's Properties [by For In Loop] ");

    var value1 = prompt("Enter First property value : "),
        value2 = prompt("Enter Second property value : ");
    
    var final = '',
        count = 0; 
    
    const newObj = {
        name : value1,
        age : value2,
    };
    
    // Priting all Object's properties Names:
    console.log("Priting all Object's properties Names\n" + Object.keys(newObj) + "\n=======================\n");
    
    // Priting all Object's properties Values:
    console.log("Priting all Object's properties Values\n" + Object.values(newObj) + "\n=======================\n" );

    // Printing the Pre-Defined Object by for In Loop:    
    
    for (const info in newObj) {
        
        console.log("your property key names nubmer" + (count+1) + "as following : ");            
        console.log(info);
        
        
        console.log("your property [key values] number :" + (count+1) + "as following:");            
        console.log(newObj[info]);
        
                    
        console.log("your properties [key names + values]" + (count+1) + " as following : ");
        console.log(info, newObj[info]);
        
        final += "Property number (" + (count+1) + ") :" + info + " : " + newObj[info] + "\n";
        
                
        count++;
        
    }
    
    document.getElementById("txtarea").innerHTML +=  final;
    
        
}

//-====================================================================================================    

function objForIn2() {
    
    alert("Welcome to Creating + Printing Object [by For In Loop] ");
    
    // We will Use the same [defing Method] to define the Object + for In Variable:
    
    var vArr = [], 
        nArr = [];
            
    var final = '',
        countF = 0,
        count = prompt("Enter Count of your properites:");
        
        let obj = new Object();
        //let Obj = Object.create();
        
        // Creating the Object by receiving Properties from user by [for loop]:     
        for (a = 0; a < count; a++ ) { 

            nArr[a] = prompt("Enter property name number" + (a+1) + ":");
            vArr[a] = prompt("Enter property value number" + (a+1) + ":");
            Object.defineProperty(obj, nArr[a], {value:vArr[a], configurable:true});
            
            final += "Property number (" + (a + 1) + ") :" + nArr[a] + " : " + obj[nArr[a]] + "\n";
                                
        }
        
        document.getElementById("txtarea").innerHTML +=  final;
        //console.log(final);
    
    
    
    // Can not Loop in a Pre-defined object's properties by using Loop-In ... !!
    // Even i used an child object from the parent object , I Can not used it to Loop in ... !!      
    
    // Printing the Created Object' Properties by (For-In Loop):     
    for (let info in obj) {
        
        console.log("your properties [key names] as following : ");            
        console.log(info);
        
        
        console.log("your property [key values] number :" + (countF+1)  + "as following:");            
        console.log(obj[info]);
        
                    
        console.log("your properties [key names + values] as following : ");
        console.log(info, obj[info]);
        
        final += "Property number (" + (countF + 1) + ") :" + info + " : " + obj[info] + "\n";
        
        document.getElementById("txtarea").innerHTML +=  final;
        
        countF++;
        
    }
    
}

//-====================================================================================================    

function Display1() {
    document.getElementById('txtarea1').textContent = objFor;
}

function Display2() {
    document.getElementById('txtarea2').textContent = objForIn1;
}


function Display3() {
    document.getElementById('txtarea3').textContent = objForIn2;
}

//-====================================================================================================    

//final0 += `<div>  ${info}  </div>';        

        //final0 += info + obj[info];
        
    
    //console.log(final0);
    
    //document.getElementById("txtarea").innerHTML += final0;
    
    /*for (let info in obj) {
        
        console.log( info  + obj[info] );
                    
    }
      */  
                            

