
// This file will include defining several of [Normal Classes] & [Extending Classes ] ->  and wil be exported into another importer files  :     : 

// A] Defining Normal classes :
    // 1] Define a First Normal class [with no Constructor function ] :
    class class1 {
        
        // Define a property :
        prop1 = 'Property value of Normal class [with no constructor function] ' ;

        // Define a method => [print a simple text ]  :
        mthd1 = () => console.log('this is a simple text from the class method ') ;


        // Define a method => [with parameter ->  changing the property by given parameter  ]  :
        mthd2 = (par) => this.prop1 =  par ;    
    }


    // B]  Define a Second Normal class [with Constructor function ] :
    class class2 {
        
        // Define a property :
        prop1 = 'Property value of Normal class [with Using constructor function]  Before the changed by using constructor function ' ; 

        // Define consturctor function to change the value class's property defiend by the value of paremeter :
        constructor (cPar) {
            // super(); 
            this.prop1 = cPar  ;
        }

        // Define a method =>  [print the prop's value after changed by using constructor function ]  :
        mthd1 = () => console.log(this.prop1) ;
    
    }
// ----------------------------
// ----------------------------


// B] Defining Extending classes :
    // 1] Define the parent class [will be extended ] : 
    class exClass1 {
        parentProp = 'Property value of the first Parent class' ;
        parentMthd = () =>  console.log( ` The value of first Parent class's value is :  ${this.parentProp}`) ;
    }
 

    // 2] Define a First Extending class [with NO Constructor function]  :
    class class11 extends exClass1 {
        // Define a property :
        prop1 = 'Property value of Extending class [with no constructor function] ' ;

        // Define a method =>  [print a simple text ]  :
        mthd1 = () => console.log('this is a simple text from the class method ') ;

        // Define a method =>  [with parameter ->  changing the property by given parameter  ]  :
        mthd2 = (par) => this.prop1 =  par ;    
  
    }
    // ---------------------

    // 3] Define a Second Extending class [with Constructor function]  :
    class class22 extends exClass1 {
        // Define a property :
        prop1 = 'Property value of Extending class [with using constructor function] ' ;


        // Define a Constructor function => [Re-Assignment of the class's property value ] : 
        constructor (cPar) {
            super();
            this.prop1 = cPar 
        }


        // Define a method => [print a simple text ]  :
        mthd1 = () => console.log('this is a simple text from the class method ') ;

        // Define a method =>  [with NO parameter ->  printing the value of the defined property after being changed by constructor function] :
        mthd2 = _ => console.log(this.prop1) ;    
  
    }

   

export {class1 , class2 , class11, class22}  ;
 


