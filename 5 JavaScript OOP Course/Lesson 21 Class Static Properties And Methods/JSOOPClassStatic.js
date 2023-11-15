
/* global document, alert, prompt */

/* JSOOP [ Class Static properties and Methods ] */

function test() {

    var a = prompt("Welcome to [Class Static Properities & Methods] Application \n Press (1) to start the application \n Press any other key to Exit...");
        
    if (a != "1") {
        alert("Good Bye!");
    } else {
        do {
            alert("Welcome to [Class Static Properities & Methods] Application ...");            
            
            // Declaring Default [Class] :            
            
            class constClass {

                
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
                    constClass.counter++;
                }
                
                // Creating Static Method + Accessing Static Property {using [this] keyword}:
                static countObjsStatic = function(){
                    // {this} here will return on the [Class] itself Directly [due it written in the Static syntax]:
                    return `Current count of Extracted Objects = ${this.counter}`;
                } 
                
                // Creating Normal Method + Accessing Static Property {using [Class Name] keyword}:
                countObjsNormal = function(){
                    // To Access on a [Static Property] (counter) within a [Normal Method] in Class we Must use the [Class name itself]:
                    return `Current count of Extracted Objects = ${constClass.counter}`;
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
                                    

            document.getElementById("txtarea").innerHTML = "";

            do {                

                alert("Please Choose a [Main Function] of Class to Execute from Below... ");                                        
            
                z0 = prompt("Press (1) to Display the Default [Class] \n Press (2) to [Extract new object(s)] from Default [Class] \n Press (3) to Display [Static Property & Static Method] \n press any other key to Exit ... ");
            
                if (z0 =="1") {                        
                    
                    alert("Welcome to [Display the {Default Class}]");
                    alert("Your [Class] as following: ");
                    alert(constClass);
                    
                    console.log("Your [Class] as following: ");
                    console.log(constClass);
                    console.log("-----------------------------------------");
                    
                    document.getElementById("txtarea").innerHTML = "Main [Class] as following ...\n " + constClass + "\n <br> \n";
                    
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
                        
                        let user1 = new constClass(ufName, ulName, uAge, uGender, uCity, uEmail);                            

                        arr[i] = user1 + "\n ---------------------\n";
                        //----------------------------------------------------------------------------
                        
                        // Displaying Static Method & normal Method [of Showing Static Property {counter}]:
                        do {
                            var countfunc = prompt('Press (1) to display the Count of Extracted Object(s) using [Static Method of Class] \n or press (2) to display Count of Extracted Objhect(s) using [Normal Method of Class]\n Or press anuy other key to Abort this Function' );
 
                            if (countfunc == "1") {
                                                
                                alert("The Following is Accessing the [Staitc Variable] {Count} by using Class Static Method [countObjsStatic].. ");
                                alert(constClass.countObjsStatic());
                                console.log(constClass.countObjsStatic());
                                document.getElementById("txtarea").innerHTML += constClass.countObjsStatic();
                                
                            } else if (countfunc == "2") {
                                
                                alert("The Following is Accessing the [Static Variable] {Count} by using Class Normal Method [countObjsNormal].. ");
                                alert(user1.countObjsNormal());
                                console.log(user1.countObjsNormal());
                                document.getElementById("txtarea").innerHTML = user1.countObjsNormal();
            
                            } else {
                                alert("Nothing iserted!");
                            }

                            var a = prompt("Press (1) to restart the [display Static property {the Count of Extracted Object(s)} through Static & normal Method]");

                        } while(a=="1");

                        // Displaying other Functions of Class:
                        do {
                            
                            var meth = prompt("Choose Method to Display on Extracted Object from [Class] constructor  ... \n (1) Welcome Method \n (2) showFullName \n (3) showAge \n (4) showEmail \n (5) showCity \n (6) showGender \n (7) Checking for constructor name of Extractd object Function ...\n (8) Checking for using (new - not new) keyword in defining Extractd Object Function...");

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

                            } else if (meth == "7") {
                                
                                alert("Welcome {Check Constructor Class} function...  ");
                                
                                consMth = prompt("Choose your [Check Constructor Class] Method \n (1) for[instanceof] Check Method... \n (2) for [constName === ] Check Method...");
                                
                                if (consMth == "1") {
                                    
                                    alert("[instanceof] Check Method restult as following ");
                                    alert(user1 instanceof constClass);
                                    
                                    console.log("[instanceof] Check Method restult as following ");
                                    console.log(user1 instanceof constClass);
                                    
                                } else if (consMth == "2") {                                            
                                    
                                    alert("[constName ===] Check Method restult as following ");
                                    alert(user1.constructor === constClass);
                                    
                                    console.log("[constName ===] Check Method restult as following ");
                                    console.log(user1.constructor === constClass);                                                                    
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
                                        
                                    } else  {

                                        alert('The Extracted Object is [by new keyword]');
                                        console.log("The Extracted Object is [by new keyword]");
                                        throw new Error('The Extracted Object is [by new keyword]');
                                    }
                                    
                                    
                                } else if (consMth == "2") {
                                                                                
                                    alert("Welcome to [instance of ConstructorName] (new - not new ) Extracted Object checking Method.. ");
                                    
                                    if (!(user1 instanceof constClass)) {                                                
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
                                                                    

                            } else {                                        
                                alert("There is no Function Choosen !");
                            }                                

                            var zz = prompt("Enter (1) to restart the methods of Extracted Objects\n or Press any other key to Exit.. ");                                    
                            
                        } while (zz == "1");
                    }
                        
                    alert("Your Extracted Object(s) from [Class] as following ...");
                    alert(arr);
                        
                    console.log("Your Extracted Object(s) form [Class] as following ...");
                    console.log(arr);

                    document.getElementById("txtarea").innerHTML += "Your Extracted Object(s) [from Class] as following ...\n " + arr + "\n";
                                                 
                
                } else if (z0=="3"){                        

                    do {

                        alert("Welcome to [Displaying Static Class Property and Method] Function...");                        
 
                        var a = prompt("Press (1) to Display [Static variable] \n Press (2) to Display [Static Method]\n or press any other key to Exit... ");
                        
                        if (a== "1"){
                            alert("Welcome to [Static Variable] Display Function ...");
                            alert("Static Variable value as following ...");                            
                            
                            alert(" Value of (Static Property) of [Class] {counter} as following ...");
                            alert(constClass.counter);
                            
                            console.log(" Value of (Static Property) of [Class] {counter} as following ...");
                            console.log(constClass.counter);
                            console.log("==============================================================");
                            
                            document.getElementById("txtarea").innerHTML += "Value of Static (Variable) of [counter] as following ...\n " + constClass.counter + "\n";
                            
                        } else if(a== "2") {                            
                            alert("Welcome to [Static Method] Display Function ...");
                
                            var b = prompt("Press (1) to Display Static Variable (using Static Method )\n Press (2) to Display Static Variable (using Normal Object Method )");
                            
                            if (b=="1"){
                                
                                alert("Static Variable using (Main Class Static Method) [Value] as following :");                                
                                
                                alert(constClass.countObjsStatic());            
                                
                                console.log("Static Variable using (Main Class Static Method) [Value] as following  :");                                
                                console.log(constClass.countObjsStatic());
                                console.log("==============================================================");
            
                                document.getElementById("txtarea").innerHTML += "Static Variable using (Main Class Static Method) [Value] as following  ...\n " + constClass.countObjsStatic() + "\n";

                            // -----------------------------------------------------------------------------------------------------------------

                                alert("Static Variable using (Main Class Static Method) [Syntax] as following :");
                                alert(constClass.countObjsStatic);            
                                
                                console.log("Static Variable using (Main Class Static Method) [Syntax] as following  :");
                                console.log(constClass.countObjsStatic);
                                console.log("==============================================================");
            
                                document.getElementById("txtarea").innerHTML += "Static Variable using (Main Class Static Method) [Syntax] as following  ...\n " + constClass.countObjsStatic + "\n";
                                            
                                
                            } else if(b== "2"){
                                
                                alert("Static Variable using (Extracted Object's Normal Method) [Value] as following :");                                
                                
                                alert(user1.countObjsNormal());            
                                
                                console.log("Static Variable using (Extracted object's Normal Method) [Value] as following  :");                                
                                console.log(user1.countObjsNormal());
                                console.log("==============================================================");
            
                                document.getElementById("txtarea").innerHTML += "Static Variable using (Extracted Normal Method) [Value] as following  ...\n " + user1.countObjsNormal() + "\n";

                            // -----------------------------------------------------------------------------------------------------------------

                                alert("Static Variable using (Extracted Normal Method) [Syntax] as following :");
                                alert(user1.countObjsNormal);            
                                
                                console.log("Static Variable using (Extracted Normal Method) [Syntax] as following  :");
                                console.log(user1.countObjsNormal);
                                console.log("==============================================================");
            
                                document.getElementById("txtarea").innerHTML += "Static Variable using (Extracted Normal Method) [Syntax] as following  ...\n " + user1.countObjsNormal + "\n";
            
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
                                            
                var z00 = prompt("Press (1) to Restart the full [Class Static Properities & Methods]...\n Press any other key to Exit ...");

            } while (z00 == "1");
// ========================================================================================================================
                                            
            var z = prompt("Press (1) to restart the Whole Application \n Press any other key to Exit....");
        }while (z =="1");    
    }
}

//=======================================================================================================

function Display1() {
    document.getElementById('txtarea1').textContent = test;
}



