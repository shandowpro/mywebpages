/* global document, alert, prompt */

/* JSOOP [ Prototype Intro {Part 1} ] */

function test() {

    do {

        var constTypt = prompt("Welcome to [Prototype] Application \n Press (1) to Construct Prototype from Default function \n Press (2) to Construct Proptotype from a [Constructor Function] \n Press (3) to Construct Proptotype from a [Built In Constructor Function]\n Press any other key to Exit..."),
            strAll = "";


        if (constTypt == "1") {
            alert("Welcome to [Constructing Prototype from Default Function]...");

            function user(uName) {
                return `Welcome  ${uName}`;
            };


            var userName = prompt("Enter your Name...");
            
            alert("The Following is the Constructor Function of the Default Function ...");
            alert(user.constructor);

            console.log("The Following is the Constructor Function of the Default Function ...");
            console.log(user.constructor );
            console.log('----------------------------------------');
                    
            strAll += "The Constructor Function of the Default Function \n" + user.constructor + '\n================================================\n';
            
            
            alert("The Following is the Main Constructor Function Value [upon user parameter Value] ...");
            alert(user(userName));

            console.log("The Following is the Main Constructor Function Value [upon user parameter Value] ...");
            console.log(user(userName));
            console.log('----------------------------------------');
            
            strAll +=  "The Main Constructor Function Value [upon user parameter Value] \n" + user(userName) + '\n================================================\n';
        
            
            alert("The Following is the prototype Extracted object  ...");
            alert(user.prototype);
            
            console.log("The Following is Extracted prototype  ...");
            console.log(user.prototype);
            console.log('----------------------------------------');
            
                                                
            strAll += "The Extracted prototype is \n" + user.prototype + '\n================================================\n';
            
            document.getElementById("txtarea").innerHTML = strAll;
            
        } else if (constTypt == "2") {
            
            alert("Welcome to [Constructing Prototype from Constructor Function]...");

            
            function constFunc(name, age, city) {
                this.name = name;
                this.age = age;
                this.city = city;
                this.display = function () {
                    return `Your name is : ${name}\n Your Age is : ${age}\n Your City is : ${city}\n`;
                }
            };

            var userName = prompt("Enter your name (Property1) "),
                userAge = prompt("Enter your age (Property2) "),
                userCity = prompt("Enter your city (Property3) ");
                                
            alert("The Following is the Main Constructor Function Value [upon user parameter Value] ...");
            alert(constFunc(userName, userAge, userCity));
            
            console.log("The Following is the Main Constructor Function Properties Value [upon user parameter Value] ...");
            console.log(constFunc(userName, userAge, userCity));
            console.log('\n--------------------------------------\n');
            
            
            strAll = "The main constructor Function is as following :" + constFunc(userName, userAge, userCity) + '\n=============================================\n';
                                                            
            console.log("The Following is the [Prototype] of the given Constructor Function ...");
            console.log(constFunc.prototype);
            console.log(' ---------------------------------------- ');
            
            alert("The Following is the Prototype of the given Constructor Function  ...");
            alert(constFunc.prototype);
            
            strAll += constFunc.prototype + '\n =======================================\n';
            
            document.getElementById("txtarea").innerHTML = strAll;
                        
            
        } else if (constTypt == "3") {

            alert("Welcome to [[Constructing Prototype] from [Built In Constructor Function]]...");
            
            var mthd = prompt("Press 1 for [String] Built in Consturctor Fuction \n Press 2 for [Number] Built in Consturctor Fuction \n Press 3 for [boolean] Built in Consturctor Fuction \n Press 4 for [Array] Built in Consturctor Fuction \n Press 5 for [Object] Built in Consturctor Fuction \n Press 6 for [Extracted-Object] Built in Consturctor Fuction\n or any other key to Exit... ");
            
            
            if (mthd == '1') {

                alert("Welcome to Prototype from [String Built In Constructor Function] ...");

                var str = new String();
                
                alert("The Prototype of [String Built In] Constructor Function as following ... ");
                alert(String.prototype);

                console.log("The Prototype of [String Built In] Constructor Function as following ... ");
                console.log(String.prototype);
                console.log(' ---------------------------------------- ');
                
                strAll += "The Prototype of [String Built In] Constructor Function : " + String.prototype + "\n =============================== \n";

                //=========================================================================================
                
                alert("The [String Variable] Constructor Function as following ... ");
                alert(str.constructor);
                
                console.log("Your [String Variable] Constructor Function as following  ... ");
                console.log(str.constructor);                
                console.log(' ---------------------------------------- ');
                
                strAll += "The [String Variable] Constructor Function : " + str.constructor+ "\n =============================== \n";

                //=========================================================================================
                
                alert("The [String Built in] Constructor Function as following ... ");
                alert(String.constructor);
                
                console.log("The [String Built in] Constructor Function as following  ... ");
                console.log(String.constructor);
                console.log(' ---------------------------------------- ');
                                                                                
                
                strAll += "The [String Built in] Constructor Function : " + String.constructor + "\n =============================== \n";

                //=========================================================================================
                
                document.getElementById("txtarea").innerHTML = strAll;
                
                                
            } else if (mthd == '2') {
                alert("Welcome to Prototype from [Number Built In Constructor Function] ...");
                
                var num =new Number();

                alert("The Prototype of [Number Built In] Constructor Function as following ... ");
                alert(Number.prototype);

                console.log("The Prototype of [Number Built In] Constructor Function as following ... ");
                console.log(Number.prototype);
                console.log(' ---------------------------------------- ');
                
                strAll += "The Prototype of [Number Built In] Constructor Function : " + Number.prototype + "\n =============================== \n";

                //=========================================================================================
                
                alert("The [Number Variable] Constructor Function as following ... ");
                alert(num.constructor);
                
                console.log("Your [Number Variable] Constructor Function as following  ... ");
                console.log(num.constructor);                
                console.log(' ---------------------------------------- ');
                
                strAll += "The [Number Variable] Constructor Function : " + num.constructor+ "\n =============================== \n";

                //=========================================================================================
                
                alert("The [Number Built in] Constructor Function as following ... ");
                alert(Number.constructor);
                
                console.log("The [Number Built in] Constructor Function as following  ... ");
                console.log(Number.constructor);
                console.log(' ---------------------------------------- ');
                                                                                
                
                strAll += "The [Number Built in] Constructor Function : " + Number.constructor + "\n =============================== \n";

                //=========================================================================================
                
                document.getElementById("txtarea").innerHTML = strAll;
                
            } else if (mthd == '3') {
                
                alert("Welcome to Prototype from [Boolean Built In Constructor Function] ...");
                
                var bol = new Boolean();

                alert("The Prototype of [Boolean Built In] Constructor Function as following ... ");
                alert(Boolean.prototype);

                console.log("The Prototype of [Boolean Built In] Constructor Function as following ... ");
                console.log(Boolean.prototype);
                console.log(' ---------------------------------------- ');
                
                strAll += "The Prototype of [Boolean Built In] Constructor Function : " + Boolean.prototype + "\n =============================== \n";

                //=========================================================================================
                
                alert("The [Boolean Variable] Constructor Function as following ... ");
                alert(bol.constructor);
                
                console.log("Your [Boolean Variable] Constructor Function as following  ... ");
                console.log(bol.constructor);                
                console.log(' ---------------------------------------- ');
                
                strAll += "The [Boolean Variable] Constructor Function : " + bol.constructor+ "\n =============================== \n";

                //=========================================================================================
                
                alert("The [Boolean Built in] Constructor Function as following ... ");
                alert(Boolean.constructor);
                
                console.log("The [Boolean Built in] Constructor Function as following  ... ");
                console.log(Boolean.constructor);
                console.log(' ---------------------------------------- ');
                                                                                
                
                strAll += "The [Boolean Built in] Constructor Function : " + Boolean.constructor + "\n =============================== \n";

                //=========================================================================================
                
                document.getElementById("txtarea").innerHTML = strAll;
                
                
            } else if (mthd == '4') {
                
                alert("Welcome to Prototype from [[Array] Built In Constructor Function] ...");
                
                var arr = new Array();
                
                alert("The Prototype of [Array Built In] Constructor Function as following ... ");
                alert(Array.prototype);

                console.log("The Prototype of [Array Built In] Constructor Function as following ... ");
                console.log(Array.prototype);
                console.log(' ---------------------------------------- ');
                
                strAll += "The Prototype of [Array Built In] Constructor Function : " + Array.prototype + "\n =============================== \n";

                //=========================================================================================
                
                alert("The [Array Variable] Constructor Function as following ... ");
                alert(arr.constructor);
                
                console.log("Your [Array Variable] Constructor Function as following  ... ");
                console.log(arr.constructor);                
                console.log(' ---------------------------------------- ');
                
                strAll += "The [Array Variable] Constructor Function : " + arr.constructor+ "\n =============================== \n";

                //=========================================================================================
                
                alert("The [Array Built in] Constructor Function as following ... ");
                alert(Array.constructor);
                
                console.log("The [Array Built in] Constructor Function as following  ... ");
                console.log(Array.constructor);
                console.log(' ---------------------------------------- ');
                                                                                
                
                strAll += "The [Array Built in] Constructor Function : " + Array.constructor + "\n =============================== \n";

                //=========================================================================================
                
                document.getElementById("txtarea").innerHTML = strAll;
                
            } else if (mthd == '5') {
                
                alert("Welcome to Prototype from [[Object] Built in Consturctor Fuction] ...");

                const obj = new Object();
                
                console.log("Your Prototype from [Object] Built In Constructor Function as following ... ");
                
                console.log(Object.prototype);
                console.log(' ---------------------------------------- ');
                
                console.log("Your Object Built In Constructor Function] as following ... ");
                console.log(Object.constructor);
                console.log(' ---------------------------------------- ');
                
                
                alert("Your Prototype from [Object] Built In Constructor Function as following ... ");
                alert(Object.prototype);

                alert("Your Object Built In Constructor Function] as following ... ");
                alert(obj.constructor);
                


                strAll += Object.prototype + "\n =============================== \n";
                
                document.getElementById("txtarea").innerHTML = strAll;
                
            } else if (mthd == '6') {

                alert("This is Not right Syntax!");
                // testing...
                /*                
                alert("Welcome to Prototype from [Customized Constructor Object Extracted-Object] Built in Consturctor Fuction ...");

                new obj = {
                    prop1: 'Shadi',
                    prop2: 'Sayed',
                    prop3: 'Mohammed',
                    firstName: () => `Your First Name as Following :  ${Prop1}`,
                    lastName: () => `Your Last Name as Following :  ${Prop3}`,
                    fullName: () => `Your Full Name as Following :   ${Prop1} ${Prop2} ${Prop3} `
                }

                let nObj = new obj();

                console.log("Your Prototype from [Customized Constructor Object Extracted-Object] Built in Consturctor Fuction as following ... ");
                console.log(nObj.prototype);

                alert("Your Prototype from [Customized Constructor Object Extracted-Object] Built in Consturctor Fuction as following ... ");
                alert(nObj.prototype);

*/

            } else {
                alert("Error Entry!");
            }


        } else {
            alert("Error Entry!");

        }

        var z = prompt("Press 1 to restart your Choise \n Any other key to Exit... ");

        if (z != '1') {
            alert("good Bye!");
        }

    } while (z == '1');

}

// ================================================================================================================

function Display1() {
    document.getElementById('txtarea1').textContent = test;
}







