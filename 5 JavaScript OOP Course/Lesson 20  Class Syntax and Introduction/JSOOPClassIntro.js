/* global document, alert, prompt */

/* JSOOP [ Class Syntax and Introduction ] */

function test() {

    var a = prompt("Welcome to [Class] & [Construtor Function] Comparison Application \n Press (1) to start the application \n Press any other key to Exit...");
        
    if (a != "1") {
        alert("Good Bye!");
    } else {
        do {
            alert("Welcome to [Class] Application ...");            
            // Declaring Default [Constructor Function] :
            function constFunc(fName, lName, age, gender, city, email) {

                this.fName = fName;
                this.lName = lName;
                this.age = age;
                this.email= email;
                this.city = city;
                this.gender = gender;

                this.welcome =  function() {
                    return `Welcome ${this.fName}`;
                };

                this.showFullName =  function() {
                    return `Your Full Name is "${this.fName} ${this.lName}" `;
                };
                
                this.showAge =  function() {
                    return `Your are  ${this.age}`;
                };
                                                
                this.showGender =  function() {
                    return `Your are ${this.gender}`;
                };
                
                this.showCity =  function() {
                    return `Your are from  ${this.city}`;
                };

                this.showEmail =  function() {
                    return `Your Email is ${this.email}`;
                };
            }                                                            
            //================================================================================================================            
            // Declaring Default [Class] :
            
            class constClass {

                constructor(fName, lName, age, gender, city, email) {
                    this.fName = fName;
                    this.lName = lName;
                    this.age = age;
                    this.gender = gender;
                    this.city = city;
                    this.email = email;
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
                                    
                    
            a0 = prompt("Please Choose your Path \n Press (1) to Choose [Constructor Function] Path ... \n Press (2) to Choose [Class] Path \n Press any other key to Exit...");                                            
            
            if (a0 == "1") {               
                
                alert("Welcome to [Constructor Function] Path... ");                                        
            
                document.getElementById("txtarea").innerHTML = "";

                do {

                    alert("Please Choose your [Main Function] from Below... ");                                        
                    
                    z0= prompt("Press (1) to Display the [Default Constructor Function] \n Press (2) to [Extract new object(s)] from Constructor Function \n press any other key to Exit ... ");
                    
                    if (z0 =="1") {
                                                
                        alert("Welcome to [Display the {Default Constructor Function}] Syntax");
                        alert("Your Constructor Function as following: ");
                        alert(constFunc);
                        
                        console.log("Your Constructor Function as following: ");
                        console.log(constFunc);
                        console.log("-----------------------------------------");

                        document.getElementById("txtarea").innerHTML = "Main [Constructor Function] as following ...\n " + constFunc + "<br>\n";
                        
                    } else if (z0== "2") {
                        
                        alert("Welcome to [Extracting new object(s) from Constructor Function] Main Function ...");

                        var count = prompt("Enter the Count of desired Object(s) to Extract ... "),
                            arr = new Array();
                            
                        arr.length = count;
                            
                        for (i=0 ; i<count; i++) {
                                            
                            alert("Welcome to Extracted object from Constructor Function number " + (i+1) + "\nlets enter new Extracted Object's Parameters:");
                    
                            var ufName = prompt("Enter First Name .."),
                                ulName = prompt("Enter Last Name ..."),
                                uAge = parseInt(prompt("Enter you age ..")),
                                uGender = prompt("Enter your Gender ..."),                                                        
                                uCity = prompt("Enter Your city ..."),
                                uEmail= prompt("Enter your Email .. ");
                            
                            let user1 = new constFunc(ufName, ulName, uAge, uGender, uCity, uEmail);                            

                            arr[i] = user1 + "\n ---------------------\n";

                            do {
                                
                                var meth = prompt("Choose Method to Display on Extracted Object from [Constructor Function] constructor  ... \n (1) Welcome Method \n (2) showFullName \n (3) showAge \n (4) showEmail \n (5) showCity \n (6) showGender \n (7) Checking for constructor name of Extractd object Function ...\n (8) Checking for (new - not new) of Extractd Object Function......");

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
                                    
                                    alert("{showCity Method Syntax} as following:");
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
                                    
                                    alert("Welcome {Check Constructor Function} function...  ");
                                
                                    consMth = prompt("Choose your [Check Constructor Function] Method \n (1) for[instanceof] Check Method... \n (2) for [constName === ] Check Method...");
                                    
                                    if (consMth == "1") {
                                        
                                        alert("[instanceof] Check Method restult as following ");
                                        alert(user1 instanceof constFunc);
                                        
                                        console.log("[instanceof] Check Method restult as following ");
                                        console.log(user1 instanceof constFunc);
                                                                        
                                    } else if (consMth == "2") {
                                        
                                        alert("[constName ===] Check Method restult as following ");
                                        alert(user1.constructor === constFunc);
                                        
                                        console.log("[constName ===] Check Method restult as following ");
                                        console.log(user1.constructor === constFunc);                                                                    
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
                                        
                                        if (!(user1 instanceof constFunc)) {                                                
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
                                    alert("There is no sub Function Choosen !");
                                }                                
                                                                    
                                var zz = prompt("Enter (1) to restart the methods of Extracted Objects\n or Press any other key to Exit.. ");                                    

                            } while (zz == "1");
                            
                        }
                            
                            
                        alert("Your Extracted Object(s) as following ...");
                        alert(arr);
                    
                        console.log("Your Extracted Object(s) as following ...");
                        console.log(arr);

                        document.getElementById("txtarea").innerHTML += "Your Extracted Object(s) from [Constructor Function] as following ...\n " + arr;
                
                                                                                
                    } else {                        
                        alert("There is no Main Function Choosen!");
                    }
                                        
                    var r = prompt("Press (1) to Restart the full [Path]...\n Press any other key to Exit ...");
                
                } while (r == "1");
// ================================================================================================================================
                                        
                
            } else if (a0 == "2"){

                alert("Welcome to [Class] Path... ");                                        

                document.getElementById("txtarea").innerHTML = "";

                do {

                    alert("Please Choose your [Main Function] from Below... ");                                        
                    
                    z0 = prompt("Press (1) to Display the Default [Class] \n Press (2) to [Extract new object(s)] from Default [Class] \n press any other key to Exit ... ");
                    
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

                                do {
                                    
                                    var meth = prompt("Choose Method to Display on Extracted Object from [Class] constructor  ... \n (1) Welcome Method \n (2) showFullName \n (3) showAge \n (4) showEmail \n (5) showCity \n (6) showGender \n (7) Checking for constructor name of Extractd object Function ...\n (8) Checking for (new - not new) of Extractd Object Function...");

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
                                                                                    
                    
                    } else {                        
                        alert("There is no Main function Choosen!");
                    }
                                        
                    var z00 = prompt("Press (1) to Restart the full [Class Path]...\n Press any other key to Exit ...");
                } while (z00 == "1");
// ========================================================================================================================

            
            }else{
                alert("Good bye!");
            }        
                    
            var z = prompt("Press (1) to restart the Whole Application \n Press any other key to Exit....");
        }while (z =="1");
    }               
}
        
//-------------------------------------------------------------------------------------------


function Display1() {
    document.getElementById('txtarea1').textContent = test;
}

// function Display2() {
//     document.getElementById('txtarea2').textContent = constProps;
// }



//-------------------------------------------------------------------------------------------