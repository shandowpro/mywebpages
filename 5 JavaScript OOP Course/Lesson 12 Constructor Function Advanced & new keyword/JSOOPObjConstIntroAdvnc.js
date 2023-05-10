/* global document, alert, prompt */

/* JSOOP [Object Constructor Function + Extractecd Object Introduction Advanced (fixed Parameters + Flexible Parameters) + (Checking of Constractor Local, Global)] */

template-string-converter.enable;

function ConstFuncAdv(){

    alert("Welcome to Constructor Function Advanced & Extracted Object(s) + new Key word [[One Constructor Function + One Extracted Object ]]");
    
    var mthd = prompt("Press (1) to start the Application\n or any other key to exit... ");
    
    
    if (mthd == "1") {
        var fun = prompt("Press (1) to create a fixed Parameters Constructor Function\n Press (2) to create a flexible Parameters constructor function\n Press amy other key to Exit... ");
                                
        if (fun == "1") {
            
            alert("Welcome to [Fixed Parameters] Constructor Function");
            
            function Phone(serial) {
                
                // Assnging fixed value of paramenter of (serial):                
                this.serial = 'This is a fixed Parameter Value ' + 123;
                
                // typing the Constructor name :
                console.log(this.name);
                //document.getElementById("txtarea").innerHTML = `Your Constructor Function name is \n ${this.name}`;
                

                // This code to auto Printing the object which will be Created (in console):
                console.log(this);
                //document.getElementById("txtarea").innerHTML = this;
                
                
            }

            var constObjName  = Phone.name;
                        
            //console.log(`Your constructor Function name is [ ${Phone.name} ] \n-------------------------\n`);
            
            document.getElementById("txtarea").innerHTML += `Your constructor Function name is [ ${Phone.name} ] \n ---------------------------\n `;

            
            console.log(`Lets create the Extracted Object...`);


            var objType = prompt("Choose your object Extracting defining Type of following : \n Press (1) for [Phone object extracting Defining] Type \n Press (2) for [Global Object extracting Defing] Type ");            
            
            if (objType == "1") {
                
                alert("You choosed [ [Phone Local Constructor Function] object extracting Defining] Type...");

                let phone1 = new Phone("###");



                // Choosing Checking Method of object's Constructor Function :            
                var check = prompt("Press (1) to [instanceof Method] Checking Method of object constucted Function\n or Press (2) to [Typing of Object's constructor name Method] Checking Method of object constructed Function any other key to abort this process...");
                
                if (check == "1") {
                    
                    alert("Welcome to [instanceof Method] Checking Method ... ");
                    
                    console.log(phone1 instanceof Phone);
            
                    var c = (phone1 instanceof Phone);
                                        
                    document.getElementById("txtarea").innerHTML += `\n [ instanceof ] Checking Method Result is \n [ ${c} ]`;
                    
                    
                    
                } else if (check == "2") {
                    
                    alert("Welcome to [Typing of Object's constructor name Method] Checking Method ... ");                    
                    
                    console.log(phone1.constructor === Phone);
                    
                    var c = (phone1.constructor === Phone);
                    
                    document.getElementById("txtarea").innerHTML += `\n [ Typing of Object's constructor name ] Checking Method Result is \n [ ${c} ]` ;
                    
                    
                } else {
                    alert("Good Bye!");
                }
                
                
            } else if (objType == "2") {
                
                alert("You choosed [ [Global Constructor Function ] object extracting Defining]...");
                
                let phone1 = Phone("###");
                
                // Checking of object's Constructor Fucntion :            
                var check = prompt("Press (1) to [instanceof Method] Checking Method of object constucted Function\n or Press (2) to [Typing of Object's constructor name Method] Checking Method of object constructed Function any other key to abort this process...");
                
                if (check == "1") {
                    alert("Welcome to [instanceof Method] Checking Method ... ");
                    
                    console.log(phone1 instanceof Phone);
                    
                    var c = (phone1 instanceof Phone);
                    
                    document.getElementById("txtarea").innerHTML += `\n [ instanceof ] Checking Method Result is \n [ ${c} ]`;
                    
                } else if (check == "2") {
                    
                    alert("Welcome to [ Typing of Object's constructor name ] Checking Method ... ");
                    
                    console.log(phone1.constructor === Phone);
                    
                    var c = (phone1.constructor === Phone);
                    
                    document.getElementById("txtarea").innerHTML += `\n [ Typing of Object's constructor name Method] Checking Method Result is \n [ ${c} ]` ;

                } else {
                    alert("Good Bye!");
                }


            } else {
                alert("Error entry!");
            }
            
// -------------------------------------------------------------------------------------------------------        
        
        } else if (fun == "2") {
            
            alert("Welcome to [Flexible Parameters] Constructor Function Mode ");
            
            function Phone(serial) {
                
                // Assnging flexible value of parameter of (serial) upon user inserting :                
                this.serial = `# ${serial}`;

                // typing the Constructor name :
                console.log(this.name);
                //document.getElementById("txtarea").innerHTML = `Your Constructor Function name is \n ${this.name}`;
                

                // This code to auto Printing the object which will be Created (in console):
                console.log(this);
                //document.getElementById("txtarea").innerHTML = `Your Extracted Object is \n ${this}`;                                                                                

            }

            
            //console.log(`Your constructor Function name is ${Phone.name}`); => [already assigned in Constructor funciton] ...
            document.getElementById("txtarea").innerHTML += `Your constructor Function name is ${Phone.name}`;

            console.log(`Lets create the Extracted Object...`);


            var objType = prompt("Choose your object Extracting defining Type of followoing : \n Press (1) for [Phone object extracting Defining] \n Press (2) for [Global Object extracting Defing] ");

            if (objType == "1") {
                
                alert("You choosed [ [Phone Local Constructor Function] object extracting Defining]...");

                var vUser  = prompt("Enter your Parameter's value [Property Value] ");
                let phone1 = new Phone(vUser);
                
                // Choosing Checking of object's Constructor Fucntion :            
                var check = prompt("Press (1) to [instanceof Method] Checking of object constucted Function\n or Press (2) to [Typing of Object's constructor name Method] Checking Method of object constructed Function any other key to abort this process...");
                
                if (check == "1") {
                    
                    alert("Welcome to [instanceof Method] Checking Method ... ");
                    
                    console.log(phone1 instanceof Phone);
                    
                    var c = (phone1 instanceof Phone);
                                        
                    document.getElementById("txtarea").innerHTML += `\n [instanceof Method] Checking Method Result is \n [ ${c} ]`;
                    
                } else if (check == "2") {
                    
                    alert("Welcome to [Typing of Object's constructor name Method] Checking Method ... ");
                    
                    console.log(phone1.constructor === Phone);
                    
                    var c = (phone1.constructor === Phone);
                                        
                    document.getElementById("txtarea").innerHTML += `\n [ Typing of Object's constructor name ] Checking Method Result is \n [ ${c} ]`;
                    
                } else {
                    alert("Good Bye!");
                }
                
                
            } else if (objType == "2") {
                
                alert("You choosed [ [Global Constructor Function ] object extracting Defining]...");
                
                var vUser  = prompt("Enter your value");
                
                let phone1 = Phone(vUser);
                
                // Checking of object's Constructor Fucntion :            
                var check = prompt("Press (1) to [instanceof Method] Checking Method of object constucted Function\n or Press (2) to [Typing of Object's constructor name Method] Checking Method of object constructed Function any other key to abort this process...");
                
                if (check == "1") {
                    alert("Welcome to [instanceof Method] Checking Method ... ");
                    
                    console.log(phone1 instanceof Phone);
                    
                    var c = (phone1 instanceof Phone);
                    
                    document.getElementById("txtarea").innerHTML += `\n [ instanceof Method ] Checking Method Result is \n [ ${c} ]`;

                } else if (check == "2") {
                    
                    alert("Welcome to [Typing of Object's constructor name Method] Checking Method ... ");
                    
                    console.log(phone1.constructor === Phone);
                    
                    var c = (phone1.constructor === Phone);
                                        
                    document.getElementById("txtarea").innerHTML += `\n [ Typing of Object's constructor name Method ] Checking Method Result is \n [ ${c} ]`;

                } else {
                    alert("Good Bye!");
                }
                

            } else {
                alert("Error entry!");
            }
            
        }
        
        
    } else {
        alert ("Good bye !");
    }

}



//=========================================================================================
//=========================================================================================
//=========================================================================================

function testing() {
    alert ("Constructor Function Testing (hello)");

    function sayHello(someone) {

        this.someone= 'This is Parameter Fixed Value ';
        //return `hello ${someone}`;
    }

    //console.log(sayHello()); // [will print (hello undefined)]
    
    //console.log(sayHello("Shadi"));    

    let obj = new sayHello("This is a inserted Value with a object definition ");

    console.log(obj);

    for (a in obj) {
        console.log(a);
        console.log(obj[a]);
    }
    //=========================================================================================
    alert ("-=-----------------------------------------------------------=");
    
    function sayHello1(someone) {
            
        this.someone = someone;
        
    }

    let obj1 = new sayHello1("This an inserted value with in the definition code of extracted object ");

    console.log(obj1);
    
    for (b in obj1) {
        console.log(b);
        console.log(obj1[b]);
    }

}
//=========================================================================================

function Display1() {
    document.getElementById('txtarea1').textContent = ConstFuncAdv;

}

function Display2() {
    document.getElementById('txtarea2').textContent = testing;

}

//=========================================================================================