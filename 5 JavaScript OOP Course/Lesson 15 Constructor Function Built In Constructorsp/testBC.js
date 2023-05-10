function test () {
    
    do {

        var mthd = prompt("Press 1 for String Built in Consturctor Fuction \n Press 2 for Number Built in Consturctor Fuction \n Press 3 for boolean Built in Consturctor Fuction \n Press 4 for Array Built in Consturctor Fuction \n Press 5 for Object Built in Consturctor Fuction \n Press 6 for Extracted-Object Built in Consturctor Fuction\n or any other key to Exit... ");
        
        if (mthd ==  '1'){

            alert("Welcome to String Mode...");
                                    
            var str = new String();
            
            str = prompt("Enter your String...");
            
            console.log("Enter your String... ");
            
            alert("your String Value is " + str);            
            console.log('Your String Value is ' + str);
            
            alert('your Variable Built in Constructor Function Name is ' + str.constructor.name);
            console.log('your Variable Built in Constructor Function Name is ' + str.constructor.name);
            
            alert('Your String variable DateType is ' + typeof str);
            console.log('Your String variable DateType is ' + typeof str);
            
            alert('your Built in Constructor Function is ' + str.constructor);
            console.log('your Built in Constructor Function is ' + str.constructor);
            
            
        } else if ( mthd == '2'){
            
            alert("Welcome to Number Mode...");
                                    
            var num = new Number();
            
            num = parseInt(prompt("Enter your Number..."));
            console.log("Enter your Number ");
            
            alert('Your Number Value is ' + num);
            console.log('Your Number Value is ' + num);
            
            alert('your Variable Built in Constructor Function Name is ' + num.constructor.name);
            console.log('your Variable Built in Constructor Function Name is ' + num.constructor.name);
            
            alert('Your Number variable DateType is ' + typeof num);
            console.log('Your Number variable DateType is ' + typeof num);
            
            alert('your Built in Constructor Function is ' + num.constructor);
            console.log('your Built in Constructor Function is ' + num.constructor);
            
            
        } else if (mthd == '3') {        
            
            alert("Welcome to Boolean Mode...");                        
            
            var bol = new Boolean();
            
            bol = prompt("Enter your boolean (logical value)...");        
            console.log("Enter your logical Value (boolean Value) ");
            
            alert('Your boolean Value is ' + bol);
            console.log('Your boolean Value is ' + bol);
            
            alert('your Variable Built in Constructor Function Name is ' + bol.constructor.name);
            console.log('your Variable Built in Constructor Function Name is ' + bol.constructor.name);
            
            alert('Your boolean variable DateType is ' + typeof bol);
            console.log('Your boolean variable DateType is ' + typeof bol);
            
            alert('your Built in Constructor Function is ' + bol.constructor);
            console.log('your Built in Constructor Function is ' + bol.constructor);
            
        } else if (mthd=='4') {
            
            alert("Welcome to Array Mode...");
            
            alert("Enter your Array ... ");
            console.log("Enter your Array ... ");
            
            var arr = new Array(),
            count = prompt("Enter your Array Count ...");
            
            for (i=0; i<count; i++) {                                
                arr[i] = prompt("Enter your array Element nubmer " + (i+1));                                                
            }
            
            alert("your Array elements as following : ");
            console.log("your Array elements as following : ");
            
            for (i=0; i<count; i++) {
                
                alert('Your Array Element number [' + (i+1) + "] is " + arr[i]);
                console.log('Your Array Element number [' + (i+1) + "] is " + arr[i]);
                
                alert('your Array Element number [' + (i+1) + '] Built in constructor Function Name is ' + arr[i].constructor.name);
                console.log('your Array Element number [' + (i+1) + '] Built in constructor Function Name is ' + arr[i].constructor.name);
                
                alert('Your Array Element number [' + (i+1) + '] DateType is ' + typeof arr[i]);
                console.log('Your Array Element number [' + (i+1) + '] DateType is ' + typeof arr[i]);
                
                alert('your  Array Element number [' + (i+1) + '] Built in Constructor Function is ' + arr[i].constructor);
                console.log('your  Array Element number [' + (i+1) + '] Built in Constructor Function is ' + arr[i].constructor);                                
                
            }
            
            alert('Your overall Array DateType is ' + typeof arr);
            console.log('Your overall Array DateType is ' + typeof arr);
            
            alert('Your overall Array built in Constructor Funciton Name is ' + arr.constructor.name);
            console.log('Your overall Array built in Constructor Funciton Name is ' + arr.constructor.name);
            
            alert('your overall Array built in Constructor Function is ' + arr.constructor);
            console.log('your overall Array built in Constructor Function is ' + arr.constructor);
            
            
        } else if (mthd == "5") {            
 
            alert("Welcome to Object Mode...");
            
            alert("Enter your Object ... ");            
            
            count = parseInt(prompt("Enter your Object properties number ..."));        

            let obj = new Object(),
                arrN  = [],
                arrV = [];

            alert("Let's insert object keys names & values...");

            for (i=0 ; i<count; i++) {

                arrN[i] = prompt("Enter your object key Name number " + (i+1) );
                arrV[i] = prompt("Enter your object key value number " + (i+1) );
                Object.defineProperty(obj, arrN[i], {value: arrV[i], configurable:true});
            }
                                            

            alert('Your Object as following :');
            console.log('Your Object as following :');            
            console.log(obj);            
            
            alert('your Object Built in Constructor Function Name is ' + obj.constructor.name);
            console.log('your Object Built in Constructor Function Name is ' + obj.constructor.name);
            
            alert('Your Object DateType is ' + typeof obj);
            console.log('Your Object DateType is ' + typeof obj);
            
            alert('your Built in Constructor Function of your Object is ' + obj.constructor);
            console.log('your Built in Constructor Function of your Object is ' + obj.constructor);
            
        } else if (mthd == "6") {            
 
            alert("Welcome to Extracted-Object Mode...");
            
            function obj (name, age, city){
                this.name = name;
                this.age = age; 
                this.city = city;
                console.log(this);
            }
                        
            var vname = prompt("Enter [Name] property Value :"),
                vage = parseInt(prompt("Enter [age] property Value :")),
                vcity = prompt("Enter [city] property Value :");
            

            let nObj = new obj(vname, vage, vcity);


            ///alert('Your Extracted-Object as following :');
            //console.log('Your Extracted-Object as following :');            
            //console.log(nObj);            
            
            alert('your Extracted-Object Built in Constructor Function Name is ' + nObj.constructor.name);
            console.log('your Extracted-Object Built in Constructor Function Name is ' + nObj.constructor.name);
            
            alert('Your Extracted-Object DateType is ' + typeof nObj);
            console.log('Your Extracted-Object DateType is ' + typeof nObj);
            
            alert('your Built in Constructor Function of your Extracted-Object is ' + nObj.constructor);
            console.log('your Built in Constructor Function of your Extracted-Object is ' + nObj.constructor);
                    
        } else {            
            alert("Error entry!");            
        }

        var z = prompt("Press 1 to restart your Choise \n Any other key to Exit... ");
        
        if (z!= '1') {
            alert("good Bye!");
        }
        
    } while (z== '1');

}

// ======================================================================================================


function Display1() {
    document.getElementById('txtarea1').textContent = constProp;
}

// function Display2() {
//     document.getElementById('txtarea2').textContent = constProps;
// }

// ======================================================================================================