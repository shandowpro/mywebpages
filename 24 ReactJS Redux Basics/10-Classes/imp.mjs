

// Importing defiend [Normal and Exteneded] classes from another files : 

// Importing mutiple defined classes :
import { class1 , class2 , class11 , class22 } from "./expClasses.mjs";


// A] Extracting new objects from the Normal classes  : 

    // 1] Extracting First  object from the imported [Normal First class]  : 
        let obj1 = new class1();
        
        // Calling the first defined inherited method [printing a simple text] from the First class :
        obj1.mthd1();

        // Calling the second defined inherited method [changing the property value - by using the class method2's parameter] from the First class :
        obj1.mthd2('  This is the new value of the Normal class property , changed by using parameter value of this method   ');
        
        // Printing the Class's property value after being changed by using [method2] :
        obj1.prop1;

    //------------------- 

    // 2] Extracting Second object from the imported [Normal Second class]  : 
        let obj2 = new class2( 'Property value of Normal class [with Using constructor function] {After} the changed by using constructor function');
        
        // Calling the first defined inherited method [changing the property value - by using the constructor function] from the Second class :
        obj2.mthd1();

        
        // Printing the Class's property value after being changed by using [constructor function] :
        obj2.prop1;

    //------------------- 
// ============================================


// B] Extracting new objects from the Extended classes  : 

    // 1] Extracting the imported [Extended First class]  : 
        let obj11 = new class11();

        // Calling the first defined inherited method [printing a simple text] from the First class :
            obj11.mthd1();

        // Calling the second defined inherited method [changing the property value - by using the class method2 ] from the First class :
            obj11.mthd2('This is the new value of the Exteneded class property , changed by using parameter value of this method ');

        // Printing the property value after being changed by using [method2] :
            obj11.prop1;

        // Printing the inherited property value from the parent class  :
            obj11.parentProp;

        // Calling the inherited Method from the parent class  :
            obj11.parentMthd() ;
    
    // ----------------------------------
    

    // 2] Extracting the imported [Extended Second class]  : 
        let obj22 = new class22('This is the new value of the Exteneded class property , changed by using parameter value constructor function');
    
        // Calling the first method of [printing a simple text] :
            obj22.mthd1() ;

        // Calling the second method of [printing new value of defined class's property after being changed by using constructor function  ] :
            obj22.mthd2() ;


        // Printing the inherited property value form extended parent class : 
            console.log(obj22.parentProp);

        // Calling the inhertied method [printing the value of defiend property in parent class] form extended parent class : 
            obj22.parentMthd();
    



