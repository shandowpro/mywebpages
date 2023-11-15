
/* global document, alert, prompt */

/* JSOOP [JS Accessors Setters & Getters] */

function test() {

    var a = prompt("Welcome to [JS Accessors Setters & Getters Properities & Methods] Application \n " +
     "Press (1) to start the application \n Press any other key to Exit...");
    
    if (a != "1") {
        alert("Good Bye!");
    } else {

        do {
            alert("Welcome to [JS Accessors Setters & Getters Properities & Methods] Application ...");            
            
            // Declaring [Class] :                        
            class userClass {                
                
                static counter = 0;
                
                constructor(fName, lName, age, gender, city, email, pass) {
                    this.fName = fName;
                    this.lName = lName;
                    this.age = age;
                    this.gender = gender;
                    this.city = city;
                    this.email = email;
                    this.pass = pass;
                    userClass.counter++;
                    
                }
                
                // Creating Static Method of (Showing the Total Count of Extracted Objects):
                static countObjsStatic = function (){                    
                    return `Count of Extaracted Objects = ${this.counter}`;                                        
                }
                //------------------------------------------------------------
                
                // Creating Noraml Method of Static Variable (Showing the Total Count of Extracted Objects):
                countObjsNormal() {                    
                    return `Count of Extaracted Objects = ${userClass.counter}`;                                        
                }
                //------------------------------------------------------------

                // Creating a Normal get Method:             
                normalGetMth(){
                    return 'This is from a Normal Set Method';
                }
                
                // Creating a Accessor {get} Method:             
                get GetMth(){
                    return 'This is from a {Get Accessor} Method';
                }
                
                //------------------------------------------------------------
                
                // Creating a Normal set Method {change Password functionality - with Age Restriction}:             
                normalSetMth(newPass){
                    if (this.age > 17){
                        this.pass = newPass;
                        alert(`The Password has been chagned Successfully! The new Password = ${this.pass}`);
                        console.log(`The Password has been chagned Successfully! The new Password = ${this.pass}`);
                        return `The new Passord = ${this.pass}`;                                        
                        
                    } else {
                        alert("Access Denied due to Age Restriction!");
                        console.log("Access Denied due to Age Restriction!");
                        return `Access Denied due to Age Restriction!`;                                        
                    }                        
                }                    
                
                
                // Creating a Accessor {set} Method {change Password function - with Age Restriction}:                             
                set SetMth(newPass){
                    this.pass = newPass;
                }
                
                //------------------------------------------------------------
                
                
                // Normal Method to {Show the Password Parameter}: 
                showPass() {
                    if (this.age > 17) {
                        alert(`Your Password = ${this.pass}`);
                        console.log(` Your Password = ${this.pass}`);
                        return `Your Password = ${this.pass}`;                                                
                    } else {
                        alert("Access Denied due to Age Restriction!");
                        console.log("Access Denied due to Age Restriction!");
                        return `Your Access is Denied due to Age Restriction!`;
                    }
                }
                

                welcome() {
                    return `Welcome ${this.fName}`;                                        
                }
                
                showFullName() {
                    return `Your Full Name is "${this.fName} ${this.lName}" `;                    
                }
                
                showAge() {
                    return `Your are ${this.age}`;
                }
                
                showGender() {
                    return `Your are ${this.gender}`;
                }             

                showCity() {
                    return ` Your are from ${this.city}`;                                        
                }
                
                showEmail() {
                    return `Your Email is ${this.email}`;
                }
                
                
            }                    
        //================================================================================================================            
        //================================================================================================================                                                
                                        
            do {                                
                alert("Please Choose a [Main Function] of [Class] to Execute from Below... ");                                        
            
                z0 = prompt("Press (1) to Display the Default Full [Class] \n " +
                 " Press (2) to [Extract new object(s)] from Default [Class] \n" +
                  " Press any other key to Exit ... ");
            
                if (z0 =="1") {                        
                    
                    alert("Welcome to [Display the {Default Class}]");
                    alert("Your [Class] as following: ");
                    alert(userClass);
                    
                    console.log("Your [Class] as following: ");
                    console.log(userClass);
                    console.log("-----------------------------------------");
                    
                    document.getElementById("txtarea").innerHTML += "\nMain [Class] as following ...\n " +
                     userClass + "\n <br> \n";
                    
                } else if (z0 == "2") {                                                                
                    
                    alert("Welcome to Extracting new object(s) from [Class] ...");
                    
                    var count = prompt("Enter the Count of desired Object(s) to Extract ... "),
                        arr = new Array();
                        
                    arr.length = count;
                        
                    for (i=0 ; i<count; i++) {
                                                        
                        alert("Welcome to [Extracted object from Class] number " + (i+1) +
                         "\nlets enter new Extracted Object's Parameters:");
                        
                        var ufName = prompt("Enter First Name .."),
                            ulName = prompt("Enter Last Name ..."),
                            uAge = parseInt(prompt("Enter you age ..")),
                            uGender = prompt("Enter your Gender ..."),                                                       
                            uCity = prompt("Enter Your city ..."),
                            uEmail= prompt("Enter your Email .. "),
                            uPass = prompt("Enter Your Password ...");
                        
                        let user1 = new userClass(ufName, ulName, uAge, uGender, uCity, uEmail, uPass);                            

                        arr[i] = user1 + "\n ---------------------\n";
                        //----------------------------------------------------------------------------
                        
                        // Displaying {Static Method & normal Method} [of Showing Static Property {counter}] in Class:
                        do {
                            var countfunc = prompt('Press (1) to display the Count of Extracted Object(s) using [Static Method of Defualt Class]'+
                             '\n or press (2) to display Count of Extracted Object(s) using [Normal Method of Parent Class]\n' +
                              'Or press any other key to Abort this Function');

                            if (countfunc == "1") {
                                // Showing Static Variable {count} by {Static Method} of [Default Class]:
                                alert("The Following is Accessing the [Static Variable] {Count} by using Class Static Method [countObjsStatic()].. ");
                                alert(userClass.countObjsStatic());
                                
                                console.log(userClass.countObjsStatic());
                                
                                document.getElementById("txtarea").innerHTML += "\n Execution of {Static Method} of Showing Static Variable \n" +
                                 userClass.countObjsStatic() + "\n";
                                
                            } else if (countfunc == "2") {
                                
                                // Showing Static Variable {count} by {Normal Method of extracted object from Default class} of [Default Class]:
                                alert("The Following is Accessing the [Static Variable] {Count} by using Parent Class Normal Method [countObjsNormal].. ");
                                alert(user1.countObjsNormal());
                            
                                console.log(user1.countObjsNormal());
                            
                                document.getElementById("txtarea").innerHTML += "\nExecution of {Normal Method} of Showing Static Variable: \n" +
                                 user1.countObjsNormal() + "\n";
                                
                            } else {
                                alert("No Function has been Choosed!");
                            }
                            
                            var a = prompt("Press (1) to restart the [display Static property {the Count of Extracted Object(s)}\n " +
                             "through Static & Normal Method] functionaliy");
                            
                        } while(a == "1");
                        
                        // Displaying other Functions of Default Class's Extracted Object:
                        do {
                            
                            var meth = prompt("Choose Method to apply on Extracted Object from [Default Class] constructor  ... \n" +
                             "(1) Welcome Method \n" +
                              "(2) showFullName \n" +
                               "(3) showAge \n"+
                                "(4) showEmail \n" +
                                 "(5) showCity \n" +
                                  "(6) showGender \n" +
                                   "(7) Checking for constructor name of Extractd object Function ...\n" +
                                    "(8) Checking for using (new - not new) keyword in defining Extractd Object Function \n" +
                                     "(9) Normal showPass \n" +
                                      "Press (10) to (Display/Execute) [Getter & Setters Method] of {Class} ...");
                            
                            if (meth == "1") {
                                
                                alert("{Welcome Method} Execution as following:");
                                alert(user1.welcome());
                                
                                console.log("{Welcome Method} Execution as following: ");
                                console.log(user1.welcome());
                                console.log("-----------------------------------------");
                                
                                alert("{Welcome Method Syntax} as following:");
                                alert(user1.welcome);
                                
                                console.log("{Welcome Method Syntax} as following: ");
                                console.log(user1.welcome);
                                console.log("-----------------------------------------");                                
                                
                                document.getElementById("txtarea").innerHTML +=
                                 "\n{Welcome Method Execution} as following: \n" + user1.welcome() +
                                  "\n{Welcome Method Syntax} as following: \n" + user1.welcome + "\n" ;
                                
                            } else if (meth == "2") {                                
                                
                                alert("{Show Full Name Method} Execution as following:");
                                alert(user1.showFullName());
                                
                                console.log("{Welcome Method} Execution as following: ");
                                console.log(user1.showFullName());
                                console.log("-----------------------------------------");
                                
                                alert("{Show Full Name Method Syntax} as following:");
                                alert(user1.showFullName);
                                
                                console.log("{Welcome Method Syntax} as following: ");
                                console.log(user1.showFullName);
                                console.log("-----------------------------------------");                                
                                
                                document.getElementById("txtarea").innerHTML +=
                                 "\n{Welcome Method Execution } as following: \n" + user1.showFullName() +
                                  "\n{Welcome Method Syntax} as following: \n" + user1.showFullName  + "\n";
                            
                            } else if (meth == "3") {                                        
                                
                                alert("{Show Age Method} Execution as following:");
                                alert(user1.showAge());
                                
                                console.log("{Show Age Method} Execution as following: ");
                                console.log(user1.showAge());
                                console.log("-----------------------------------------");
                                
                                alert("{Show Age Method Syntax} as following:");
                                alert(user1.showAge);
                                
                                console.log("{Show Age Method Syntax} as following: ");
                                console.log(user1.showAge);
                                console.log("-----------------------------------------");
                                
                                document.getElementById("txtarea").innerHTML +=
                                 "\n{Show Age Method Execution} as following: \n" + user1.showAge()+
                                  "\n{Show Age Method Syntax} as following: \n" + user1.showAge + "\n" ;
                                
                            } else if (meth == "4") {
                                
                                alert("{show Email Method} Execution as following:");
                                alert(user1.showEmail());
                                
                                console.log("{show Email Method} Execution as following: ");
                                console.log(user1.showEmail());
                                console.log("-----------------------------------------");
                                
                                alert("{show Email Method Syntax} as following:");
                                alert(user1.showEmail);
                                
                                console.log("{show Email Method Syntax} as following: ");
                                console.log(user1.showEmail);
                                console.log("-----------------------------------------");
                                
                                document.getElementById("txtarea").innerHTML +=
                                 "\n{show Email Method Execution} as following: \n" + user1.showEmail()+
                                  "\n{show Email Method Syntax} as following: \n" + user1.showEmail + "\n";
                                
                            } else if (meth == "5") {
                                
                                alert("{show City Method} Execution as following:");
                                alert(user1.showCity());
                                
                                console.log("{show City Method} Execution as following: ");
                                console.log(user1.showCity());
                                console.log("-----------------------------------------");
                                
                                alert("{show City Method Syntax} as following:");
                                alert(user1.showCity);
                                
                                console.log("{showCity Method Syntax} as following: ");
                                console.log(user1.showCity);
                                console.log("-----------------------------------------");
                                
                                document.getElementById("txtarea").innerHTML += "\n{showCity Method Execution} as following: \n" + user1.showCity() +
                                 "\n{showCity Method Syntax} as following: \n" + user1.showCity + "\n";
                                
                            } else if (meth == "6") {                                        
                                
                                alert("{show Gender Method} Execution as following:");
                                alert(user1.showGender());
                                
                                console.log("{show Gender Method} Execution as following: ");
                                console.log(user1.showGender());
                                console.log("-----------------------------------------");
                                
                                alert("{show Gender Method Syntax} as following:");
                                alert(user1.showGender);
                                
                                console.log("{show Gender Method Syntax} as following: ");
                                console.log(user1.showGender);
                                console.log("-----------------------------------------");
                                
                                document.getElementById("txtarea").innerHTML += "\n{show Gender Method Syntax} as following: \n" + user1.showGender +
                                 "\n{show Gender Method Execution} as following: \n" + user1.showGender() + "\n";
                                
                            } else if (meth == "7") {                                    
                                
                                alert("Welcome {Check Constructor Class} function...  ");
                                
                                consMth = prompt("Choose your [Check Constructor Class] Method \n" +
                                 "(1) for[instanceof] Check Method... \n" +
                                  "(2) for [constName === ] Check Method...");
                                
                                if (consMth == "1") {
                                    
                                    alert("[instanceof] Check Method restult as following ");
                                    alert(user1 instanceof userClass);
                                    
                                    console.log("[instanceof] Check Method restult as following ");
                                    console.log(user1 instanceof userClass);
                                    
                                    document.getElementById("txtarea").innerHTML +=
                                     "\n[instanceof] Check Method restult as following \n" + user1 instanceof userClass + "\n";
                                    
                                } else if (consMth == "2") {                                            
                                    
                                    alert("[constName ===] Check Method restult as following ");
                                    alert(user1.constructor === userClass);
                                    
                                    console.log("[constName ===] Check Method restult as following ");
                                    console.log(user1.constructor === userClass);                                                                    
                                    
                                    document.getElementById("txtarea").innerHTML +=
                                     "\n[constName ===] Check Method result as following: \n " +
                                       user1.constructor === userClass + "\n";
                                }                                   
                                
                            } else if (meth == "8") {                                        
                                
                                alert("Welcome ({Check new - Not new} Extracting Method) function...  ");                                              
                                
                                var consMth = prompt("Press (1)for [EC6] checking Method...\n" +
                                 "Press (2) for [instance of Constructor Name]...");
                                
                                if (consMth =="1") {
                                    
                                    alert("Welcome to [EC6] (new - not new ) Extracted Object checking Method.. ");
                                    
                                    if (!new.target) {                                                
                                        alert('The Extracted Object is [Not by (new keyword)]');
                                        
                                        console.log("The Extracted Object is [Not by (new keyword)]");
                                        
                                        throw new Error('The Extracted Object is [Not by (new keyword)]');                        
                                        
                                        //document.getElementById("txtarea").innerHTML += user1.countObjsNormal();
                                    } else {
                                        
                                        alert('The Extracted Object is [by new keyword]');
                                        
                                        console.log("The Extracted Object is [by new keyword]");
                                        
                                        throw new Error('The Extracted Object is [by new keyword]');
                                        
                                        //document.getElementById("txtarea").innerHTML += user1.countObjsNormal();
                                    }
                                    
                                } else if (consMth == "2") {
                                    
                                    alert("Welcome to [instance of ConstructorName] (new - not new ) Extracted Object checking Method.. ");
                                    
                                    if (!(user1 instanceof userClass)) {                                                
                                        alert('The Extracted Object is [Not by (new keyword)]');
                                        
                                        console.log("The Extracted Object is [Not by (new keyword)]");                                            

                                        throw new Error('The Extracted Object is [Not by (new keyword)]');                        
                                        
                                        //document.getElementById("txtarea").innerHTML += 'The Extracted Object is [Not by (new keyword)]';
                                        
                                    } else  {
                                        alert('The Extracted Object is [by new keyword]');
                                        
                                        console.log("The Extracted Object is [by new keyword]");
                                        
                                        throw new Error('The Extracted Object is [by new keyword]');
                                        
                                        //document.getElementById("txtarea").innerHTML += user1.countObjsNormal();
                                    }
                                    
                                } else {                                            
                                    alert("There is no Checking Method Choosen!");
                                }   
                                
                            } else if (meth == "9") {                                        
                                
                                alert("Welcome (Show Normal Password Method) function...  ");                                              

                                alert("{Show Normal Password Method} Value/Execution as following:");
                                //var uNewPass = prompt("Enter the New Password:"); 
                                alert(user1.showPass());
                                
                                console.log("{Show Normal Age Method} Value as following: ");
                                console.log(user1.showPass());
                                console.log("-----------------------------------------");
                                
                                alert("{Show Normal Password Method Syntax} as following:");
                                alert(user1.showPass);
                                
                                console.log("{Show Normal Password Method Syntax} as following: ");
                                console.log(user1.showPass);
                                console.log("-----------------------------------------");
                                
                                document.getElementById("txtarea").innerHTML +=
                                 "{Show Normal Password Method Syntax} as following: \n" + user1.showPass +
                                  "\n" + "{Show Password Method Value/Execution} as following: \n" + user1.showPass() + "\n";


                            } else if (meth == "10") {                                        
                                
                                alert("Welcome to Showing/Display [Getter-Setter Method] Function... ");
                                
                                var showDis = prompt("Please choose your Functionality \n" +
                                 "Press (1) for {Displaying} Function...\n" +
                                  "Press (2) for {Execution} Function... ");

                                if (showDis == "1") {
                                    
                                    alert("Welcome To Displaying function [Get & Set]...");
                                    
                                    var getSet1 = prompt("Press (1) for Display {Get} Method...\n" +
                                     " Press (2) for Display {Set} Method \n Press any other key to Abort!");
                                    
                                    if (getSet1 =="1"){
                                        // Displaying Funciton for {Get} method Type :    
                                        alert("Welcome To {Displaying} [get] function ...");
                                        
                                        alert("Showing [Normal Getter Method] Value - Syntax} as following:");
                                        alert(user1.normalGetMth());
                                        alert(user1.normalGetMth);
                                        
                                        console.log("Displaying [Normal Getter Method] Value - Syntax} as following:");
                                        console.log(user1.normalGetMth());
                                        console.log(user1.normalGetMth);
                                        console.log("-----------------------------------------");
                                        
                                        document.getElementById("txtarea").innerHTML +=
                                         "\n {{Normal get Method Displaying Value/Execution } as following: \n" + user1.normalGetMth()+
                                          "\n {Normal get Method} Displaying Syntax} as following: \n" + user1.normalGetMth;
                                        //==================================================================================================
                                        
                                        // Here the Get Accessor Method is Variable (so Syntax code = Execution code)...
                                        //{because the Method has been turned to a variable because of adding (get) before the normal Get Method} :
                                        alert("Displaying [{get} Accessor Method] Value & Syntax} as following:");
                                        alert(user1.GetMth);
                                        
                                        console.log("Displaying [{get} Accessor Method] Value & Syntax} as following:");
                                        console.log(user1.GetMth);
                                        console.log("-----------------------------------------");
                                        
                                        document.getElementById("txtarea").innerHTML +=
                                         "\n {{get} Accessor Method} Displaying Value & Syntax} as following: \n" + user1.GetMth + "\n";                                        
                                        
                                    } else if (getSet1 == "2"){
                                        
                                        // Displaying Function for {Set} method Type {it must has the Value of the Paarmeter from The user} :    
                                        alert("Welcome Displaying  [set] function  (changing the user Password)...");                                                                                                                        

                                        
                                        // Displaying Function for {Normal Set} method Type :    
                                        alert("Displaying [Normal Setter Method] Syntax} as following:");                                        
                                        
                                        console.log("Displaying [Normal Setter Method] Syntax} as following:" +
                                         "\n[Changing Password by normal Setter Method]");                                        
                                        
                                        var uNewPass= parseInt(prompt('Enter your New Password  (the new Set Value) Change by Normal Method'));
                                        
                                        user1.normalSetMth(uNewPass);
                                        
                                        // alert("your new Password = " + user1.pass );                                        
                                        // console.log("your new Password = " + user1.pass);
                                        
                                        
                                        console.log("-----------------------------------------");
                                        
                                        document.getElementById("txtarea").innerHTML +=
                                         "\n {{Normal set Method} Display Sytax} as following\n"+
                                          "[Changing Password by normal Setter Method] \n" + user1.pass;
                                        //==================================================================================================
                                        // (*) There is a problem in Calling the {set Accessor} Method From the class !!!!!!!!!! >>>>>
                                        // Displaying Function for {{set} Accessor} method Type {it must has the Value of the Paarmeter from The user} :    

                                        // alert("Displaying [{set} Accessor Method] Value & Syntax} as following:");
                                        // console.log("Displaying [{set} Accessor Method] Value & Syntax} as following:");
                                        
                                        // //var uNewPass= parseInt(prompt('Enter your New Password  (the new Set Value) Change by Accessor set Method'));
                                        // user1.SetMth(552555);
                                        
                                        // alert("your new Password = " + user1.pass );                                        
                                        // console.log("your new Password = " + user1.pass);
                                        
                                        // console.log("-----------------------------------------");
                                        
                                        // document.getElementById("txtarea").innerHTML +=
                                        // "\n {{set} Accessor Method} Display Value & Syntax} as following: \n" + user1.SetMth(uNewPass);                                                                                
                                        
                                    } else {
                                        alert("No Method type [get - set] has been Choosen to Apply Displaying function!");
                                    }                                    
                                    
                            // ----------------------------------------------------------------------------------------------------------------
                                                                        
                                } else if (showDis == "2"){

                                    alert("Welcome To {Execution} functionality  [Get & Set] ...");
                                    
                                    var getSet2 = prompt("Press (1) for Execute {Get} Method...\n" +
                                     "Press (2) for Execute {Set} Method\n Press any other key to Abort!");                                    
                                    
                                    if (getSet2 =="1") {
                                        
                                        // Executing the [get] Method:
                                        alert("Welcome To Executing [get] function ...");
                                        

                                        // Execution of Normal get Method: 
                                        alert("Execute [Normal Getter Method] Value/Execution} as following:");
                                        alert(user1.normalGetMth());                                    
                                        
                                        console.log("Execute [Normal Getter Method] Value/Execution} as following:");
                                        console.log(user1.normalGetMth());
                                        console.log("-----------------------------------------");
                                        
                                        document.getElementById("txtarea").innerHTML +=
                                         "\n {{Normal get Method} Execution/Value} as following: \n" + user1.normalGetMth();
                                        //==================================================================================================
                                        
                                        // Execution of Normal get Method: 
                                        // Here the [{get} Accessor Method] is Variable (so the Execution code = syntax Code) {becuase the Method has been turned to a variable becuase of adding (set) before the normal Set Method} :                                        
                                        alert("Execute [{get} Accessor Method]} Execution as following:");
                                        alert(user1.GetMth);
                                        
                                        console.log("Execute [{get} Accessor Method] Execution} as following:");
                                        console.log(user1.GetMth);
                                        console.log("-----------------------------------------");
                                        
                                        document.getElementById("txtarea").innerHTML +=
                                         "\n {{get} Accessor Method} Executing} as following: \n" + user1.GetMth;                                        
                                        
                                    } else if (getSet2 =="2") {                                        
                                        // (*) There is a problem in Calling the {set Accessor} Method From the class !!!!!!!!!! >>>>>
                                        // Executing the [set] Method:
                                        // both Normal & Set Accessor Method has aparameter [with the new value of re-set Variable {so it has to be iserted by user}]:
                                        alert("Welcome To Executing [set] function ...");
                                        
                                        //a) Executing the [Normal Setter Method] Method:
                                        var uNewPass= prompt('Enter your New Password  (the new Set Value)');
                                        
                                        alert("Execute [Normal Setter Method]} as following:");
                                        console.log("Execute [Normal Setter Method]} as following:");
                                                                                
                                        user1.normalSetMth(uNewPass);                                                                                                                    
                                        
                                        //console.log(user1.normalSetMth(uNewPass));                                    
                                        console.log("-----------------------------------------");
                                        
                                        document.getElementById("txtarea").innerHTML += 
                                        "\n {{Normal set Method} Execution} as following: \n" + user1.normalSetMth(uNewPass);
                                        //==================================================================================================
                                        
                                        //b) Executing the [{set} Accessor Method]:
                                        
                                        // Here the Set Method is Must has a Parameter to Execute (so the user must insert the Value of the new Parameter):                                     
                                        alert("Executing [{set} Accessor Method] as following:");
                                        console.log("Executing [{set} Accessor Method] as following:");
                                        
                                        user1.SetMth(uNewPass);                                                                                                                    
                                                                            
                                        console.log("-----------------------------------------");
                                        
                                        document.getElementById("txtarea").innerHTML +=
                                         "\n {{Normal set Method} Execution} as following: \n" + userClass.SetMth(uNewPass);
                                                                                
                                    } else {
                                        alert("No Method type [set-get] has been Choosen to Apply Execution function!");
                                    }
                                    
                                    
                                } else {
                                    alert("No Function [Show-Display] has been Choosen to Apply on [set-get]!");
                                }
                                                                                                                            
                            } else {                                        
                                alert("There is no Function Choosen !");
                            }                                

                            var zz = prompt("Enter (1) to restart the methods of Extracted Objects\n or Press any other key to Exit.. ");                                    
                            
                        } while (zz == "1");
                    }
                        
                    alert("Extracted Object(s) from [Default Class] as following ...");
                    alert(arr);
                        
                    console.log("Your Extracted Object(s) form [Default Class] as following ...");
                    console.log(arr);

                    document.getElementById("txtarea").innerHTML +=
                     "\nYour Extracted Object(s) [Default Class] as following ...\n " + arr + "\n";
                                        
                } else {                        
                    alert("There is no Main function Choosen!");
                }

                var z0 = prompt("Press (1) to Restart the full [JS Accessors Setters & Getters Properities & Methods]...\n" +
                 " Press any other key to Exit ...");

            } while (z0 == "1");
                                                                                                                                            
            var z = prompt("Press (1) to restart the Whole [JS Accessors Setters & Getters Properities & Methods] Application \n" +
             " Press any other key to Exit....");            
        }while (z == "1");    
    }
}
// ===========================================================================================================================

function display() {
    document.getElementById("SourceCode").innerHTML = test;
}

