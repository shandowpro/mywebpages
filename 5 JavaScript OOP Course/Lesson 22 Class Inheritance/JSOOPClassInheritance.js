
/* global document, alert, prompt */

/* JSOOP [ Class Inheritance {Part3}] */

function test() {

    var a = prompt("Welcome to [Class Inheritance Properities & Methods] Application \n Press (1) to start the application \n Press any other key to Exit...");
        
    if (a != "1") {
        alert("Good Bye!");
    } else {

        do {
            alert("Welcome to [Class Inheritance Properities & Methods] Application ...");            
            
            // Declaring [Parent Class] :                        
            class ParentClass {                
                                
                // Creating Static Property:
                static counter = 0;
                
                constructor(fName, lName, age, gender, city, email) {
                    this.fName = fName;
                    this.lName = lName;
                    this.age = age;
                    this.gender = gender;
                    this.city = city;
                    this.email = email;
                    
                    // Adding Static [counter] property with increament {to be Accessed by every new object will be Extracted}:
                    ParentClass.counter++;
                }
                
                // Creating Static Method + Accessing Static Property {using [this] keyword}:
                static countObjsStatic = function(){
                    // {this} here will return on the [Parent Class] itself Directly [due it written in the Static syntax]:
                    return `Current count of Extracted Objects = ${this.counter}`;
                } 
                
                // Creating Normal Method + Accessing Static Property {using [Parent Class Name] keyword}:
                countObjsNormal = function(){
                    // To Access on a [Static Property] (counter) within a [Normal Method] in Parent Class we Must use the [Parent Class name itself]:
                    return `Current count of Extracted Objects = ${ParentClass.counter}`;
                } 
                                
                // Defining a [Parent Method] in the {Parent Class}:
                ParentMthd() {
                    return `This Message from Parent Class! `;                                        
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
            
            // Inheriting [Child Class] from {Parent Class} :
            class ChildClass extends ParentClass {
                                
                constructor(fName, lName, age, gender, city, email) {
                    
                    super(fName, lName, age, gender, city, email);

                }
                
                // Overwrite the [Parent Method] in the [Child Class]:  
                ParentMthd() {
                    return `This Message from Child Class! `;                                        
                }

            }
            
        //================================================================================================================            
        //================================================================================================================                                                

            var ClassPath =prompt("Choose your Path [Parent Class - Child Class] \n Press (1) for [Parent Class] \n Press (2) for [Child Class] \n or Press any other key to Exit .. ");

            if (ClassPath == "1") {
                                
                do {                
                    
                    alert("Please Choose a [Main Function] of [Parent Class] to Execute from Below... ");                                        
                
                    z0 = prompt("Press (1) to Display the Default [Parent Class] \n Press (2) to [Extract new object(s)] from Default [Parent Class] \n Press (3) to Display [Static Property & Static Method] \n press any other key to Exit ... ");
                
                    if (z0 =="1") {                        
                        
                        alert("Welcome to [Display the {Default Class}]");
                        alert("Your [Class] as following: ");
                        alert(ParentClass);
                        
                        console.log("Your [Class] as following: ");
                        console.log(ParentClass);
                        console.log("-----------------------------------------");
                        
                        document.getElementById("txtarea").innerHTML += "\nMain [Class] as following ...\n " + ParentClass + "\n <br> \n";
                        
                    } else if (z0 == "2") {                                            
                        
                        alert("Welcome to Extracting new object(s) from [Class] ...");
                        
                        var count = prompt("Enter the Count of desired Object(s) to Extract ... "),
                            arr = new Array();
                            
                        arr.length = count;
                            
                        for (i=0 ; i<count; i++) {
                                                            
                            alert("Welcome to [Extracted object from Class] number " + (i+1) + "\nlets enter new Extracted Object's Parameters:");
                            
                            var ufName = prompt("Enter First Name .."),
                                ulName = prompt("Enter Last Name ..."),
                                uAge = parseInt(prompt("Enter you age ..")),
                                uGender = prompt("Enter your Gender ..."),                                                       
                                uCity = prompt("Enter Your city ..."),
                                uEmail= prompt("Enter your Email .. ");
                            
                            let user1 = new ParentClass(ufName, ulName, uAge, uGender, uCity, uEmail);                            

                            arr[i] = user1 + "\n ---------------------\n";
                            //----------------------------------------------------------------------------
                            
                            // Displaying Static Method & normal Method [of Showing Static Property {counter}] in Parent Class:
                            do {
                                var countfunc = prompt('Press (1) to display the Count of Extracted Object(s) using [Static Method of Parent Class] \n or press (2) to display Count of Extracted Objhect(s) using [Normal Method of Parent Class]\n Or press any other key to Abort this Function' );
    
                                if (countfunc == "1") {
                                                    
                                    alert("The Following is Accessing the [Static Variable] {Count} by using Class Static Method [countObjsStatic()].. ");
                                    alert(ParentClass.countObjsStatic());
                                    
                                    console.log(ParentClass.countObjsStatic());
                                    
                                    document.getElementById("txtarea").innerHTML += "\n" + ParentClass.countObjsStatic() + "\n";
                                    
                                } else if (countfunc == "2") {
                                    
                                    alert("The Following is Accessing the [Static Variable] {Count} by using Parent Class Normal Method [countObjsNormal].. ");
                                    alert(user1.countObjsNormal());
                                
                                    console.log(user1.countObjsNormal());
                                
                                    document.getElementById("txtarea").innerHTML += "\n" + user1.countObjsNormal() + "\n";
                                    
                                } else {
                                    alert("No Function has been Choiced!");
                                }
                                
                                var a = prompt("Press (1) to restart the [display Static property {the Count of Extracted Object(s)} through Static & normal Method] function");
                                
                            } while(a == "1");
                            
                            // Displaying other Functions of Parent Class's Extracted Object:
                            do {
                                
                                var meth = prompt("Choose Method to Display on Extracted Object from [Parent Class] constructor  ... \n (1) Welcome Method \n (2) showFullName \n (3) showAge \n (4) showEmail \n (5) showCity \n (6) showGender \n (7) Checking for constructor name of Extractd object Function ...\n (8) Checking for using (new - not new) keyword in defining Extractd Object Function \n Press (9) to Display [Parent Method] by Extracted Object of {Parent Class} ...");
                                
                                if (meth == "1") {
                                    
                                    alert("{Welcome Method} as following:");
                                    alert(user1.welcome());
                                    
                                    console.log("{Welcome Method} as following: ");
                                    console.log(user1.welcome());
                                    console.log("-----------------------------------------");
                                    
                                    alert("{Welcome Method Syntax} as following:");
                                    alert(user1.welcome);
                                    
                                    console.log("{Welcome Method Syntax} as following: ");
                                    console.log(user1.welcome);
                                    console.log("-----------------------------------------");                                
                                    
                                    document.getElementById("txtarea").innerHTML += "\n{Welcome Method Syntax} as following: \n" + user1.welcome + "\n" ;
                                    
                                } else if (meth == "2") {                                
                                    
                                    alert("{Show Full Name Method} as following:");
                                    alert(user1.showFullName());
                                    
                                    console.log("{Welcome Method} as following: ");
                                    console.log(user1.showFullName());
                                    console.log("-----------------------------------------");
                                    
                                    alert("{Show Full Name Method Syntax} as following:");
                                    alert(user1.showFullName);
                                    
                                    console.log("{Welcome Method Syntax} as following: ");
                                    console.log(user1.showFullName);
                                    console.log("-----------------------------------------");
                                    
                                    
                                    document.getElementById("txtarea").innerHTML += "\n{Welcome Method Syntax} as following: \n" + user1.showFullName  + "\n";
                                } else if (meth == "3") {                                        
                                    
                                    alert("{Show Age Method} as following:");
                                    alert(user1.showAge());
                                    
                                    console.log("{Show Age Method} as following: ");
                                    console.log(user1.showAge());
                                    console.log("-----------------------------------------");
                                    
                                    alert("{Show Age Method Syntax} as following:");
                                    alert(user1.showAge);
                                    
                                    console.log("{Show Age Method Syntax} as following: ");
                                    console.log(user1.showAge);
                                    console.log("-----------------------------------------");
                                    
                                    document.getElementById("txtarea").innerHTML += "{Show Age Method Syntax} as following: \n" + user1.showAge + "\n";
                                    
                                } else if (meth == "4") {
                                    
                                    alert("{show Email Method} as following:");
                                    alert(user1.showEmail());
                                    
                                    console.log("{show Email Method} as following: ");
                                    console.log(user1.showEmail());
                                    console.log("-----------------------------------------");
                                    
                                    alert("{show Email Method Syntax} as following:");
                                    alert(user1.showEmail);
                                    
                                    console.log("{show Email Method Syntax} as following: ");
                                    console.log(user1.showEmail);
                                    console.log("-----------------------------------------");
                                    
                                    document.getElementById("txtarea").innerHTML += "{show Email Method Syntax} as following: \n" + user1.showEmail;
                                    
                                } else if (meth == "5") {
                                    
                                    alert("{show City Method} as following:");
                                    alert(user1.showCity());
                                    
                                    console.log("{show City Method} as following: ");
                                    console.log(user1.showCity());
                                    console.log("-----------------------------------------");
                                    
                                    alert("{show City Method Syntax} as following:");
                                    alert(user1.showCity);
                                    
                                    console.log("{showCity Method Syntax} as following: ");
                                    console.log(user1.showCity);
                                    console.log("-----------------------------------------");
                                    
                                    document.getElementById("txtarea").innerHTML += "{showCity Method Syntax} as following: \n" + user1.showCity;
                                    
                                } else if (meth == "6") {                                        
                                    
                                    alert("{show Gender Method} as following:");
                                    alert(user1.showGender());
                                    
                                    console.log("{show Gender Method} as following: ");
                                    console.log(user1.showGender());
                                    console.log("-----------------------------------------");
                                    
                                    alert("{show Gender Method Syntax} as following:");
                                    alert(user1.showGender);
                                    
                                    console.log("{show Gender Method Syntax} as following: ");
                                    console.log(user1.showGender);
                                    console.log("-----------------------------------------");
                                    
                                    document.getElementById("txtarea").innerHTML += "\n{show Gender Method Syntax} as following: \n" + user1.showGender;
                                    
                                } else if (meth == "7") {                                    
                                    
                                    alert("Welcome {Check Constructor Class} function...  ");
                                    
                                    consMth = prompt("Choose your [Check Constructor Class] Method \n (1) for[instanceof] Check Method... \n (2) for [constName === ] Check Method...");
                                    
                                    if (consMth == "1") {
                                        
                                        alert("[instanceof] Check Method restult as following ");
                                        alert(user1 instanceof ParentClass);
                                        
                                        console.log("[instanceof] Check Method restult as following ");
                                        console.log(user1 instanceof ParentClass);
                                        
                                        document.getElementById("txtarea").innerHTML += "\n[instanceof] Check Method restult as following \n" + user1 instanceof ParentClass + "\n";
                                        
                                    } else if (consMth == "2") {                                            
                                        
                                        alert("[constName ===] Check Method restult as following ");
                                        alert(user1.constructor === ParentClass);
                                        
                                        console.log("[constName ===] Check Method restult as following ");
                                        console.log(user1.constructor === ParentClass);                                                                    
                                        
                                        document.getElementById("txtarea").innerHTML += "\n[constName ===] Check Method result as following: \n " +  user1.constructor === ParentClass + "\n";
                                    }                                   
                                    
                                } else if (meth == "8") {                                        
                                    
                                    alert("Welcome ({Check new - Not new} Extracting Method) function...  ");                                              
                                    
                                    var consMth = prompt("Press (1)for [EC6] checking Method...\n Press (2) for [instance of Constructor Name]...");
                                    
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
                                        
                                        if (!(user1 instanceof ParentClass)) {                                                
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
                                    
                                    alert("{show Parent Method Value} as following:");
                                    alert(user1.ParentMthd());
                                    
                                    console.log("{show Parent Method} as following: ");
                                    console.log(user1.ParentMthd());
                                    
                                    document.getElementById("txtarea").innerHTML += "\n {Show Parent Method} as following:  " + user1.ParentMthd() + "\n";
                                    
                                    console.log("-----------------------------------------");
                                    
                                    alert("{show Parent Method Syntax} as following:");
                                    alert(user1.ParentMthd);
                                    
                                    console.log("{show Parent Method Syntax} as following: ");
                                    console.log(user1.ParentMthd);
                                    console.log("-----------------------------------------");
                                    
                                    document.getElementById("txtarea").innerHTML += "\n {Show Parent Method} as following: \n" + user1.ParentMth + "\n";                                    
                                
                                } else {                                        
                                    alert("There is no Function Choosen !");
                                }                                

                                var zz = prompt("Enter (1) to restart the methods of Extracted Objects\n or Press any other key to Exit.. ");                                    
                                
                            } while (zz == "1");
                        }
                            
                        alert("Extracted Object(s) from [Parent Class] as following ...");
                        alert(arr);
                            
                        console.log("Your Extracted Object(s) form [Parent Class] as following ...");
                        console.log(arr);

                        document.getElementById("txtarea").innerHTML += "\nYour Extracted Object(s) [from Class] as following ...\n " + arr + "\n";
                        
                                                                    
                    } else if (z0 == "3"){                        

                        do {
                            
                            alert("Welcome to [Displaying Static Class Property and Method] Function...");                        
                            
                            var a = prompt("Press (1) to Display [Static variable] \n Press (2) to Display [Static Method]\n or press any other key to Exit... ");
                            
                            if (a == "1"){
                                alert("Welcome to [Static Variable] Display Function ...");
                                alert("Static Variable value as following ...");                            
                                
                                alert(" Value of (Static Property) of [Class] {counter} as following ...");
                                alert(ParentClass.counter);
                                
                                console.log(" Value of (Static Property) of [Class] {counter} as following ...");
                                console.log(ParentClass.counter);
                                console.log("==============================================================");
                                
                                document.getElementById("txtarea").innerHTML += "\nValue of Static (Variable) of [counter] as following ...\n " + ParentClass.counter + "\n";                            
                                
                            } else if(a == "2") {                            
                                alert("Welcome to [Static Method] Display Function ...");
                                
                                var b = prompt("Press (1) to Display Static Variable (using Static Method )\n Press (2) to Display Static Variable (using Normal Object Method )");
                                
                                if (b == "1"){
                                    
                                    alert("Static Variable using (Main Class Static Method) [Value] as following :");                                
                                    
                                    alert(ParentClass.countObjsStatic());            
                                    
                                    console.log("Static Variable using (Main Class Static Method) [Value] as following  :");                                
                                    console.log(ParentClass.countObjsStatic());
                                    console.log("==============================================================");
                
                                    document.getElementById("txtarea").innerHTML += "\nStatic Variable using (Main Class Static Method) [Value] as following ...\n " + ParentClass.countObjsStatic() + "\n";

                                // -----------------------------------------------------------------------------------------------------------------

                                    alert("Static Variable using (Main Class Static Method) [Syntax] as following :");
                                    alert(ParentClass.countObjsStatic);            
                                    
                                    console.log("Static Variable using (Main Class Static Method) [Syntax] as following  :");
                                    console.log(ParentClass.countObjsStatic);
                                    console.log("==============================================================");
                
                                    document.getElementById("txtarea").innerHTML += "\nStatic Variable using (Main Class Static Method) [Syntax] as following ...\n " + ParentClass.countObjsStatic + "\n";
                                                
                                    
                                } else if(b == "2"){
                                    
                                    alert("Static Variable using (Extracted Object's Normal Method) [Value] as following :");                                
                                    
                                    alert(user1.countObjsNormal());            
                                    
                                    console.log("Static Variable using (Extracted object's Normal Method) [Value] as following  :");                                
                                    console.log(user1.countObjsNormal());
                                    console.log("==============================================================");
                
                                    document.getElementById("txtarea").innerHTML += "\nStatic Variable using (Extracted Normal Method) [Value] as following  ...\n " + user1.countObjsNormal() + "\n";

                                // -----------------------------------------------------------------------------------------------------------------

                                    alert("Static Variable using (Extracted Normal Method) [Syntax] as following :");
                                    alert(user1.countObjsNormal);            
                                    
                                    console.log("Static Variable using (Extracted Normal Method) [Syntax] as following  :");
                                    console.log(user1.countObjsNormal);
                                    console.log("==============================================================");
                
                                    document.getElementById("txtarea").innerHTML += "\nStatic Variable using (Extracted Normal Method) [Syntax] as following  ...\n " + user1.countObjsNormal + "\n";
                
                                } else{
                                    alert("No Method has been Choisen to display Static Method!"); 
                                }

                            } else {                            
                                alert("No Choise has Been Choisen!"); 
                            }
                                                                                                
                            var z000 = prompt("Enter (1) to restart the [Displaying Static Class Property and Method] Function ");
                        } while (z000 == "1");

                    } else {                        
                        alert("There is no Main function Choosen!");
                    }

                    var z00 = prompt("Press (1) to Restart the full [Class Inheritance Properities & Methods]...\n Press any other key to Exit ...");

                } while (z00 == "1");


        // ========================================================================================================================
        // ========================================================================================================================
        
            } else if (ClassPath == "2") {
            
                do {                
                    
                    alert("Welome To Child Class Path... ");                                        
                    alert("Please Choose a [Main Function] of Class to Execute from Below... ");                                        
                
                    z0 = prompt("Press (1) to Display the Default [Child Class] \n Press (2) to [Extract new object(s)] from Default [Child Class] \n Press (3) to Display [Static Property & Static Method] in Child Class \n press any other key to Exit ... ");
                
                    if (z0 =="1") {                        
                        
                        alert("Welcome to [Display the {Default Child Class}]");
                        alert("Your [Child Class] as following: ");
                        alert(ChildClass);
                        
                        console.log("Your [Child Class] as following: ");
                        console.log(ChildClass);
                        console.log("-----------------------------------------");
                        
                        document.getElementById("txtarea").innerHTML = "\nMain [Child Class] as following ...\n " + ChildClass + "\n <br> \n";
                        
                    } else if (z0 == "2") {                                            
                        
                        alert("Welcome to Extracting new object(s) from [Class] ...");
                        
                        var count = prompt("Enter the Count of desired Object(s) to Extract form Child Class  ... "),
                            arr = new Array();
                            
                        arr.length = count;
                            
                        for (i=0 ; i<count; i++) {
                                                            
                            alert("Welcome to [Extracted object from Child Class] number " + (i+1) + "\nlets enter new Extracted Object's Parameters:");
                            
                            var ufName = prompt("Enter First Name .."),
                                ulName = prompt("Enter Last Name ..."),
                                uAge = parseInt(prompt("Enter you age ..")),
                                uGender = prompt("Enter your Gender ..."),                                                       
                                uCity = prompt("Enter Your city ..."),
                                uEmail= prompt("Enter your Email .. ");
                            
                            let user1 = new ChildClass(ufName, ulName, uAge, uGender, uCity, uEmail);                            

                            arr[i] = user1 + "\n ---------------------\n";
                            //----------------------------------------------------------------------------
                            
                            // Displaying Static Method & normal Method [of Showing Static Property {counter}]:
                            do {
                                var countfunc = prompt('Press (1) to display the Count of Extracted Object(s) using [Static Method of Child Class] \n or press (2) to display Count of Extracted Objhect(s) using [Normal Method of Child Class]\n Or press any other key to Abort this Function' );
    
                                if (countfunc == "1") {
                                                    
                                    alert("The Following is Accessing the [Staitc Variable] {Count} by using Child Class Static Method [countObjsStatic].. ");
                                    alert(ChildClass.countObjsStatic());
                                    
                                    console.log(ChildClass.countObjsStatic());

                                    document.getElementById("txtarea").innerHTML += "\n" + ChildClass.countObjsStatic() + "\n";
                                    
                                } else if (countfunc == "2") {
                                    
                                    alert("The Following is Accessing the [Static Variable] {Count} by using Child Class Normal Method [countObjsNormal].. ");
                                    alert(user1.countObjsNormal());
                                    
                                    console.log(user1.countObjsNormal());
                                    
                                    document.getElementById("txtarea").innerHTML += "\n" + user1.countObjsNormal() + "\n";
                
                                } else {
                                    alert("Nothing iserted!");
                                }

                                var a = prompt("Press (1) to restart the [display Static property {the Count of Extracted Object(s)} through Static & normal Method] function form [Child Class] ");

                            } while(a == "1");

                            // Displaying other Functions of Child Class:
                            do {
                                
                                var meth = prompt("Choose Method to Display on Extracted Object from [Child Class] constructor  ... \n (1) Welcome Method \n (2) showFullName \n (3) showAge \n (4) showEmail \n (5) showCity \n (6) showGender \n (7) Checking for constructor name of Extractd object Function ...\n (8) Checking for using (new - not new) keyword in defining Extractd Object Function \n Press (9) to Display [Parent Method - after overwrite] by Extracted Object Form {Child Class}...");

                                if (meth == "1") {
                                        
                                    alert("{Welcome Method} as following:");
                                    alert(user1.welcome());
                                    
                                    console.log("{Welcome Method} as following: ");
                                    console.log(user1.welcome());                                                                                                            
                                    console.log("-----------------------------------------");

                                    document.getElementById("txtarea").innerHTML += "\n{Welcome Method Syntax} as following: \n" + user1.welcome() + "\n";                                                                                                            
                                    //-------------------------------------------------------------------------------
                                
                                    alert("{Welcome Method Syntax} as following:");
                                    alert(user1.welcome);
                                    
                                    console.log("{Welcome Method Syntax} as following: ");
                                    console.log(user1.welcome);                                                                                                            
                                    console.log("-----------------------------------------");                                
                                    
                                    document.getElementById("txtarea").innerHTML += "\n{Welcome Method Syntax} as following: \n" + user1.welcome + "\n";
                                    
                                } else if (meth == "2") {
                                    
                                    alert("{Show Full Name Method} as following:");
                                    
                                    console.log("{Welcome Method} as following: ");
                                    console.log(user1.showFullName());
                                    console.log("-----------------------------------------");
                                    
                                    document.getElementById("txtarea").innerHTML += "\n{Welcome Method Value} as following: \n" + user1.showFullName() + "\n";                                                                        
                                    //--------------------------------------------------------------------------------
                                    
                                    alert("{Show Full Name Method Syntax} as following:");
                                    alert(user1.showFullName);
                                    
                                    console.log("{Welcome Method Syntax} as following: ");
                                    console.log(user1.showFullName);
                                    console.log("-----------------------------------------");
                                    
                                    document.getElementById("txtarea").innerHTML += "\n{Welcome Method Syntax} as following: \n" + user1.showFullName() + "\n";                                                                        
                                    //--------------------------------------------------------------------------------
                                    
                                } else if (meth == "3") {                                        
                                    
                                    alert("{Show Age Method} as following:");
                                    alert(user1.showAge());
                                    
                                    console.log("{Show Age Method} as following: ");
                                    console.log(user1.showAge());
                                    console.log("-----------------------------------------");
                                    
                                    document.getElementById("txtarea").innerHTML += "\n{Welcome Method Value} as following: \n" + user1.showAge() + "\n";                                                                        
                                    //--------------------------------------------------------------------------------
                                    
                                    alert("{Show Age Method Syntax} as following:");
                                    alert(user1.showAge);
                                    
                                    console.log("{Show Age Method Syntax} as following: ");
                                    console.log(user1.showAge);
                                    console.log("-----------------------------------------");
                                    
                                    document.getElementById("txtarea").innerHTML += "\n{Welcome Method Syntax} as following: \n" + user1.showAge + "\n";                                                                        
                                    //--------------------------------------------------------------------------------

                                    
                                } else if (meth == "4") {
                                
                                    alert("{show Email Method} as following:");
                                    alert(user1.showEmail());
                                    
                                    console.log("{show Email Method} as following: ");
                                    console.log(user1.showEmail());
                                    console.log("-----------------------------------------");
                                    
                                    document.getElementById("txtarea").innerHTML += "\n{Welcome Method Value} as following: \n" + user1.showEmail() + "\n";                                                                        
                                    //--------------------------------------------------------------------------------

                                    alert("{show Email Method Syntax} as following:");
                                    alert(user1.showEmail);
                                    
                                    console.log("{show Email Method Syntax} as following: ");
                                    console.log(user1.showEmail);
                                    console.log("-----------------------------------------");

                                    document.getElementById("txtarea").innerHTML += "\n{Welcome Method Syntax} as following: \n" + user1.showEmail + "\n";                                                                        
                                    //--------------------------------------------------------------------------------

                                } else if (meth == "5") {
                                                                            
                                    alert("{show City Method} as following:");
                                    alert(user1.showCity());
                                    
                                    console.log("{show City Method} as following: ");
                                    console.log(user1.showCity());
                                    console.log("-----------------------------------------");                                    

                                    document.getElementById("txtarea").innerHTML += "\n{Welcome Method Value} as following: \n" + user1.showCity() + "\n";                                                                        
                                    //--------------------------------------------------------------------------------

                                    alert("{show City Method Syntax} as following:");
                                    alert(user1.showCity);
                                    
                                    console.log("{showCity Method Syntax} as following: ");
                                    console.log(user1.showCity);
                                    console.log("-----------------------------------------");
                                    
                                    document.getElementById("txtarea").innerHTML += "\n{Welcome Method Syntax} as following: \n" + user1.showCity + "\n";                                                                        
                                    //--------------------------------------------------------------------------------
                                                                                        
                                } else if (meth == "6") {                                        
                                    
                                    alert("{show Gender Method} as following:");
                                    alert(user1.showGender());
                                    
                                    console.log("{show Gender Method} as following: ");
                                    console.log(user1.showGender());                                    
                                    console.log("-----------------------------------------");
                                    
                                    document.getElementById("txtarea").innerHTML += "\n{Welcome Method Value} as following: \n" + user1.showGender() + "\n";                                                                        
                                    //--------------------------------------------------------------------------------
                                    
                                    alert("{show Gender Method Syntax} as following:");
                                    alert(user1.showGender);
                                    
                                    console.log("{show Gender Method Syntax} as following: ");
                                    console.log(user1.showGender);
                                    console.log("-----------------------------------------");
                                    
                                    document.getElementById("txtarea").innerHTML += "\n{Welcome Method Sytax} as following: \n" + user1.showGender + "\n";                                                                        
                                    //--------------------------------------------------------------------------------

                                } else if (meth == "7") {
                                    
                                    alert("Welcome {Check Constructor Child Class} function...  ");
                                    
                                    consMth = prompt("Choose your [Check Constructor Child Class] Method \n (1) for[instanceof] Check Method... \n (2) for [constName === ] Check Method...");
                                    
                                    if (consMth == "1") {
                                        
                                        alert("[instanceof] Check Method restult as following ");
                                        alert(user1 instanceof ChildClass);
                                        
                                        console.log("[instanceof] Check Method restult as following ");
                                        console.log(user1 instanceof ChildClass);
                                        
                                    } else if (consMth == "2") {                                            
                                        
                                        alert("[constName ===] Check Method restult as following ");
                                        alert(user1.constructor === ChildClass);
                                        
                                        console.log("[constName ===] Check Method restult as following ");
                                        console.log(user1.constructor === ChildClass);                                                                    
                                    }                                   
                                                                                                                                                                            
                                } else if (meth == "8") {                                        

                                    alert("Welcome ({Check new - Not new} Extracting Method) function...  ");                                              
                                    
                                    var consMth = prompt("Press (1)for [EC6] checking Method...\n Press (2) for [instance of Constructor Name]...");
                                    
                                    if (consMth =="1") {

                                        alert("Welcome to [EC6] (new - not new ) Extracted Object checking Method.. ");
                                        
                                        if (!new.target) {                                                
                                            alert('The Extracted Object is [Not by (new keyword)]');
                                            console.log("The Extracted Object is [Not by (new keyword)]");
                                            throw new Error('The Extracted Object is [Not by (new keyword)]');                        
                                            
                                        } else {

                                            alert('The Extracted Object is [by new keyword]');
                                            console.log("The Extracted Object is [by new keyword]");
                                            throw new Error('The Extracted Object is [by new keyword]');
                                        }
                                                                                
                                    } else if (consMth == "2") {
                                                                                    
                                        alert("Welcome to [instance of ConstructorName] (new - not new ) Extracted Object checking Method.. ");
                                        
                                        if (!(user1 instanceof ChildClass)) {                                                
                                            alert('The Extracted Object is [Not by (new keyword)]');
                                            console.log("The Extracted Object is [Not by (new keyword)]");
                                            throw new Error('The Extracted Object is [Not by (new keyword)]');                        
                                            
                                        } else  {
                                            alert('The Extracted Object is [by new keyword]');
                                            console.log("The Extracted Object is [by new keyword]");
                                            throw new Error('The Extracted Object is [by new keyword]');
                                        }
                                        
                                    } else {                                            
                                        alert("There is no Checking Method Choosen!");
                                    }   
                                                                        
                                } else if (meth == "9") {                                        
                                    
                                    alert("{Show Parent Method after Overwriting} as following:");
                                    alert(user1.ParentMthd());
                                    
                                    console.log("{Show Parent Method after Overwriting} as following: ");
                                    console.log(user1.ParentMthd());
                                    console.log("-----------------------------------------");

                                    document.getElementById("txtarea").innerHTML += "\n{Welcome Method Value} as following: \n" + user1.ParentMthd() + "\n";                                                                        
                                //------------------------------------------------------------------------                                   

                                    alert("{Show Parent Method after Overwriting Syntax} as following:");
                                    alert(user1.ParentMthd);
                                    
                                    console.log("{Show Parent Method after Overwriting Syntax} as following: ");
                                    console.log(user1.ParentMthd);
                                    console.log("-----------------------------------------");    
                                    
                                    document.getElementById("txtarea").innerHTML += "\n{Welcome Method Value} as following: \n" + user1.ParentMthd+ "\n";                                                                        

                                } else {                                        
                                    alert("There is no Function Choosen !");
                                }                                

                                var zz = prompt("Enter (1) to restart the methods of Extracted Objects\n or Press any other key to Exit.. ");                                    
                                
                            } while (zz == "1");
                        }
                            
                        alert("Your Extracted Object(s) from [Child Class] as following ...");
                        alert(arr);
                            
                        console.log("Your Extracted Object(s) form [Child Class] as following ...");
                        console.log(arr);

                        document.getElementById("txtarea").innerHTML += "\nYour Extracted Object(s) [from Child Class] as following ...\n " + arr + "\n";
                                                    
                    
                    } else if (z0 == "3"){                        

                        do {

                            alert("Welcome to [Displaying Static [Child Class] Property and Method] Function...");                        
    
                            var a = prompt("Press (1) to Display [Static variable] \n Press (2) to Display [Static Method]\n or press any other key to Exit... ");
                            
                            if (a == "1"){
                                alert("Welcome to [Static Variable] Display Function ...");
                                alert("Static Variable value as following ...");                            
                                
                                alert(" Value of (Static Property) of [Child Class] {counter} as following ...");
                                alert(ChildClass.counter);
                                
                                console.log(" Value of (Static Property) of [Child Class] {counter} as following ...");
                                console.log(ChildClass.counter);
                                console.log("==============================================================");
                                
                                document.getElementById("txtarea").innerHTML += "\nValue of Static (Variable) of [counter] as following ...\n " + ChildClass.counter + "\n";
                                
                            } else if(a == "2") {                            
                                alert("Welcome to [Static Method] Display Function ...");
                    
                                var b = prompt("Press (1) to Display Static Variable (using Static Method )\n Press (2) to Display Static Variable (using Normal Object Method )");
                                
                                if (b == "1"){
                                    
                                    alert("Static Variable using (Main Child Class's Static Method) [Value] as following :");                                
                                    
                                    alert(ChildClass.countObjsStatic());            
                                    
                                    console.log("Static Variable using (Main Child Class's Static Method) [Value] as following  :");                                
                                    console.log(ChildClass.countObjsStatic());
                                    console.log("==============================================================");
                
                                    document.getElementById("txtarea").innerHTML += "Static Variable using (Main Child Class Static Method) [Value] as following  ...\n " + ChildClass.countObjsStatic() + "\n";

                                // -----------------------------------------------------------------------------------------------------------------s

                                    alert("Static Variable using (Main Child Class Static Method) [Syntax] as following :");
                                    alert(ChildClass.countObjsStatic);             
                                    
                                    console.log("Static Variable using (Main Child Class Static Method) [Syntax] as following  :");
                                    console.log(ChildClass.countObjsStatic);
                                    console.log("==============================================================");
                
                                    document.getElementById("txtarea").innerHTML += "\n1Static Variable using (Main Child Class's Static Method) [Syntax] as following  ...\n " + ChildClass.countObjsStatic + "\n";
                                                
                                    
                                } else if(b == "2"){
                                    
                                    alert("Static Variable using (Extracted Object's Normal Method) [Value] as following :");                                
                                    
                                    alert(user1.countObjsNormal());            
                                    
                                    console.log("Static Variable using (Extracted object's Normal Method) [Value] as following  :");                                
                                    console.log(user1.countObjsNormal());
                                    console.log("==============================================================");
                
                                    document.getElementById("txtarea").innerHTML += "\nStatic Variable using (Extracted Normal Method) [Value] as following  ...\n " + user1.countObjsNormal() + "\n";

                                // -----------------------------------------------------------------------------------------------------------------

                                    alert("Static Variable using (Extracted Normal Method) [Syntax] as following :");
                                    alert(user1.countObjsNormal);            
                                    
                                    console.log("Static Variable using (Extracted Normal Method) [Syntax] as following  :");
                                    console.log(user1.countObjsNormal);
                                    console.log("==============================================================");
                
                                    document.getElementById("txtarea").innerHTML += "\nStatic Variable using (Extracted Normal Method) [Syntax] as following  ...\n " + user1.countObjsNormal + "\n";
                
                                } else{
                                    alert("No Method has been Choisen to display Static Method!"); 
                                }

                            } else {                            
                                alert("No Choise has Been Choisen!"); 
                            }
                                                                                                
                            var z000 = prompt("Enter (1) to restart the [Displaying Static Child Class Property and Method] Function ");
                        } while (z000 == "1");

                    } else {                        
                        alert("There is no Main function Choosen!");
                    }

                    var z00 = prompt("Press (1) to Restart the full [Class Inheritance Properities & Methods]...\n Press any other key to Exit ...");

                } while (z00 == "1");

            } else {
                alert("No class Path [Child-Parent] Choosen!");
            }            
                                                                                                                    
            var z = prompt("Press (1) to restart the Whole Application \n Press any other key to Exit....");            
        }while (z == "1");    
    }
}
// ===============================================================================================================================

function display() {
    document.getElementById("SourceCode").innerHTML = test;
}
