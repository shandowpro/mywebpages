// [TS] lesson =>  26 Interface Final Discussion :

/* This lesson including following methods  :  
       1-  
       2-  
    */
   
   function display() {
       let z: any = prompt(`Choose from the next methods  :
       1-  
       2-  
     `);
    

    if (z == 1) {
        alert(`welcome to Test Define an Interface with extending another single interface `);
        console.log(`welcome to Test Define an Interface with extending another single interface  `);
          
        // A] Define the main {Interaface object} [with in the main page ] : 
            interface Inter {
                id : number ,   
                username: string 
            } 
  
        
        // B] Defining a new {Interaface object} with extending another single defined Interface  : 
            interface Inter1 extends Inter { 
                city : string  
            } 
  
            
          // C Define an Object with using datatype annotation of defined {Extended Interface object}  : 
            let obj : Inter1  = {
                id : 100 ,
                username : 'shadi' , 
                city : 'City' , 
            } ;
              

        // D]  Call and Print the defined object's porperties : 
            console.log('The defined object overall as following : ' );
            console.log(obj);
 
    } else if (z == 2) {
        alert(`welcome to Test Define an Interface with extending another multiple interfaces  `);  
        console.log(`welcome to Test Define an Interface with extending another multiple interfaces   `);  
 
   
        // A] Define the main {Interaface object} [with in the main page ] : 
        interface Inter {
            id : number ,   
            username: string 
        } 

    
    // B] Defining a new {Interaface object} : 
        interface Inter1 { 
            city : string  
        } 

    // C] Defining another new {Interaface object} with extending another Multiple defined Interface  : 
        interface Inter2 extends Inter, Inter1  { 
            country : string  
        } 

      // D] Define an Object with using datatype annotation of defined {Extended Interface object}  : 
        let obj : Inter2  = {
            id : 100 ,
            username : 'shadi' , 
            city : 'City' , 
            country : 'Egypt'  
        } ;
          

    // E] Call and Print the defined object's porperties : 
        console.log('The defined object overall as following : ' );
        console.log(obj);
 
    } else {
        console.log('No valid choice!') ;
    }
}
 