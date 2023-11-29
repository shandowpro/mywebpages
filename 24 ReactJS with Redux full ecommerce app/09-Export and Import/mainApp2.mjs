// importing single function/var from both [single & multiple] defined exprorted files => exported using {second Method} >>>>

// importing a single function [sayHello()] by (single exprotred method) from [export2Sinlge.mjs] file :  
import sayHello from './export2Single.mjs' ;

// importing a one function [sayHello()] from multiple defined by (single exprotred method) from [export2mult.mjs] file :  
import {sayBy} from './export2mult.mjs' ;

import {var1 ,  var2} from './export2mult.mjs' ;


// using /calling the imported function from [single exported function - by second method ] : 
sayHello('Hello im Shadi from the single imported function - using second method ');


// using /calling the imported function from [multiple exported functions - by second method ] : 
sayBy('Hello im Shadi from the multiple imported function - using second method ');

// using /calling the imported  variable 1  from [multiple exported functions - by second method ] => {single printing} : 
console.log(var1);

// using /calling the imported variable 2 from [multiple exported functions - by second method ] =>  {as parameter value} : 
sayBy(var2);






