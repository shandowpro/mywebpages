// importing single function/var from both [single  & multiple] defined exprorted files => exported using {first Method} >>>>

// importing a single function [sayHello()] by (single exprotred method) from [exportSinlge.mjs] file :  
import sayHello from './export1Single.mjs' ;

import {sayBy} from './export1mult.mjs' ;
 


// using /calling the imported function from [single exported function] : 
sayHello('Hello im Shadi from the single imported function  ');


// using /calling the imported function from [multiple exported functions] : 
sayBy('Hello im Shadi from the multiple imported function ');





