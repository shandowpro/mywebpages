/* global document, alert, prompt*/

/* JSOOP [Object Constructor Function - Training] */
//template-string-converter.enable;

function constProp() {

    alert("Welcome to Constructor Function + [One] Extracted Objects - Training (Additoinal Functions)... " );

    function constF(fName, lName, age, country, city, street, eMail, showEmail) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.country = country;
        this.city = city;
        this.street = street;        
        this.eMail = eMail;        

        this.showEmail =  function() {
            if (age >= 18 ){
                console.log(`Your email is: ${this.eMail}`);                
                alert(`Your email is: ${this.eMail}`);
            } else {
                console.log(`Your Can Not Access Email data due to Age restriction `);
                alert(`Your Can Not Access Email data due to Age restriction `);
            }
        };

        this.changeName = function (newFName, newLName) {
            if (age >= 18) {                
                this.fName = newFName ; 
                this.lName = newLName ; 
                console.log('Name has changed Successflly');
                alert('Name has changed Successflly');
            } else {
                console.log('Name Can not be changed due to Age restriction!');
                alert('Name Can not be changed due to Age restriction!');
            }        
        };

        ///this.name;
        this.fullName = function() {
            return `Your Full Name is ${this.fName} ${this.lName} `;
        };

        this.ageInDays = () => `your Age in Days = ${this.age * 365}`; 

        this.ageInWeeks = () => `your Age in Weeks = ${this.age * 52}`; 

        this.ageInMonths = () => `your Age in Months = ${this.age * 12}`; 

        this.FullAd = function() {
            return `Your Full Address ${this.country} ${this.city} ${this.street}`;
        };

        this.allData = function () {
            return `your All user data as following : \n User First Name is ${this.fName} \n User last Name is ${this.lName} \n User Age is ${this.age} \n User country is ${this.country} \n User city is ${this.city} \n User street is ${this.street} \n User Email is ${this.eMail}`;
        };

        this.showConstName = () => `your Construtor Function Name is ( ${this.constructor.name} )`;
        
        // This Fuction needs more Knowledge in OOP [Change name of Contstructor Namne ]: 
        this.changeConstName = function(newConstName) {
            if (age >= 18 ) {
                this.constructor.name = newConstName;
                return `Your new Construtor Function Name is ( ${newConstName} )`;
                
            } else {
                return 'You Can not change Constructor Fucntion name due to Age Destruction!';
            }
        }
        

        console.log(this);
    }   

    
    var ufName = prompt("Enter First name : "),
        ulName = prompt("Enter last name : "),
        uage = parseInt(prompt("Enter age : ")),
        ucountry = prompt("Enter country : "),
        ucity = prompt("Enter city : "),
        ustreet = prompt("Enter street : "),
        uEmail = prompt("Enter email : ");
        
        let user1 = new constF(ufName, ulName, uage, ucountry, ucity, ustreet, uEmail, true);
        
        
        do {
            
            var intFunc = prompt("Choose between following Functions : \n Press(1) for [Change Name] Function... \n Press (2) for [Show Email] Fucntion... \n Press (3) for [Showing Full Name] Function... \n Press (4) for [Showing Full Address] Function...\n Press (5) for [Age - Calculations (Days, Weeks ,Months)] Function... \n Press (6) for [Showing All Data] Function \n Press (7) for [Showing Constructor Fucntion Name] Function \n Press (8) for [Changing Constructor Fucntion Name] Function... ");
            
            var strNames = '';
            
            document.getElementById('txtarea').innerHTML += strNames; 


        if (intFunc == "1") {
                
            alert("Welcome to [Change Name] Function...");            
            
            console.log("Welcome to [Change Name] Function...");            
            
            strNames = '';
            
            var newFirstName = prompt("Enter your New First Name :"),
                  newLastName = prompt("Enter your New Last Name :");
                  
            if (user1.age >= 18) {                
                
                user1.changeName(newFirstName,newLastName);
                    
                console.log('Your full Name after updating as Following: \n');
                    
                console.log(`your first name is : ${user1.fName}`);
                alert(`your first name is : ${user1.fName}`);
                    
                    
                console.log(`your Second name is : ${user1.lName}`);        
                alert(`your Second name is : ${user1.lName}`);        
                console.log("======================== ");
                    
                alert(user1.fullName());
                console.log(user1.fullName());
                console.log("======================== ");
                
                strNames += `Your first name is (${user1.fName})\n Your second name is (${user1.lName})\n ${user1.fullName()}`;
                document.getElementById('txtarea').innerHTML += strNames; 
                    
            } else  {
                
                console.log(user1.changeName(newFirstName,newLastName));            
                console.log("======================== ");                
                
                strNames += `${user1.changeName(newFirstName,newLastName)}`;
                
                document.getElementById('txtarea').innerHTML += strNames; 
                
            }
            
        } else if (intFunc == "2") {
            
            alert("Welcome to [Show Email] Function...");            
            
            strNames = '';
            
            console.log(user1.showEmail());
            
            console.log("======================== ");
            
            strNames += `${user1.showEmail()}`;        
            
            document.getElementById('txtarea').innerHTML += strNames; 
            
        } else if (intFunc == "3") {
            
            alert("Welcome to [Show Full Name] Function...");            
            
            strNames = '';
            
            console.log(user1.fullName());
            
            alert(user1.fullName());        
            
            console.log("======================== ");
            
            strNames += `${user1.fullName()}`;        
            
            document.getElementById('txtarea').innerHTML += strNames; 
            
        } else if (intFunc == "4") {
            
            alert("Welcome to [Show Full Address] Function...");            
            
            strNames = '';
            
            console.log(user1.FullAd());            
            alert(user1.FullAd());        
            
            console.log("======================== ");
            
            strNames += `${user1.FullAd()}`;        
            
            document.getElementById('txtarea').innerHTML += strNames; 
            
        } else if (intFunc == "5") {
            
            alert("Welcome to [Age Calculations] Functions...");            
            
            strNames = '';
            
            alert("1) your age by Days as following...");            
            console.log("1) your age [by Days] as following: ");
            
            console.log(user1.ageInDays());
            alert(user1.ageInDays());
            
            console.log("------------------------------------");
            
            
            alert("2) your age [by Weeks] as following:...");            
            console.log("2) your age [by Weeks] as following: ");
            
            console.log(user1.ageInWeeks());        
            alert(user1.ageInWeeks());        
            
            console.log("------------------------------------");
            
            
            alert("3) your age [by Months] as following:...");            
            console.log("3) your  age [by Months] as following: ");
            
            console.log(user1.ageInMonths());        
            alert(user1.ageInMonths());        
            
            console.log("------------------------------------");
            
            strNames += `${user1.ageInDays()} \n ${user1.ageInWeeks()} \n ${user1.ageInMonths()} `;        
            
            document.getElementById('txtarea').innerHTML += strNames; 
            
        } else if (intFunc == "6") {
            
            alert("Welcome to [Show All User's Data] Function...");            
            
            strNames = '';
            
            console.log("3) your  age [by Months] as following: ");
            
            console.log(user1.allData());
            alert(user1.allData());
            
            console.log("------------------------------------");
            
            strNames += `${user1.allData()} `;        
            
            document.getElementById('txtarea').innerHTML += strNames; 
            
        } else if (intFunc == "7") {
            
            alert("Welcome to [Show Constrcutor Fucntion Name ] Function...");            
            
            strNames = '';
            
            console.log(user1.showConstName());
            
            alert(user1.showConstName());
            
            console.log("------------------------------------");
            
            strNames += `${user1.showConstName()} `;        
            
            document.getElementById('txtarea').innerHTML += strNames; 
        
        } else if (intFunc == "8") {
            
            alert("Welcome to [Changing Constrcutor Fucntion Name ] Function...");            
            
            strNames = '';
            
            var newConst = prompt("Enter your new Contructor Name");
            
            console.log(user1.changeConstName(newConst));
            
            alert(user1.changeConstName(newConst));
            
            console.log("------------------------------------");
            
            strNames += `${user1.changeConstName(newConst)} `;        
            
            document.getElementById('txtarea').innerHTML += strNames; 
            
        } else {
            alert("Error Entry!");
        }

        var z= prompt("Press (1) to Choose another Internal Function");
    }   while (z == "1");

}

// =====================================================================================================================
// =====================================================================================================================

function constProps() {

    alert("Welcome to Constructor Function + (Multiple) Extracted Objects - Training (Additoinal Functions)... " );

    var userCount = parseInt(prompt("Enter the nubmer of users (Extractd Objects) to establish from the constructor Function..."));   
    
    function constF(fName, lName, age, country, city, street, eMail, showEmail) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.country = country;
        this.city = city;
        this.street = street;        
        this.eMail = eMail;        

        this.showEmail =  function() {
            if (age >= 18 ){
                console.log(`Your email is: ${this.eMail}`);                
                alert(`Your email is: ${this.eMail}`);
            } else {
                console.log(`Your Can Not Access Email data due to Age restriction `);
                alert(`Your Can Not Access Email data due to Age restriction `);
            }
        };

        this.changeName = function (newFName, newLName) {
            if (age >= 18) {                
                this.fName = newFName ; 
                this.lName = newLName ; 
                console.log('Name has changed Successflly');
                alert('Name has changed Successflly');
            } else {
                console.log('Name Can not be changed due to Age restriction!');
                alert('Name Can not be changed due to Age restriction!');
            }        
        };

        ///this.name;
        this.fullName = function() {
            return `Your Full Name is ${this.fName} ${this.lName} `;
        };

        this.ageInDays = () => `your Age in Days = ${this.age * 365}`; 

        this.ageInWeeks = () => `your Age in Weeks = ${this.age * 52}`; 

        this.ageInMonths = () => `your Age in Months = ${this.age * 12}`; 

        this.FullAd = function() {
            return `Your Full Address ${this.country} ${this.city} ${this.street}`;
        };

        this.allData = function () {
            return `your All user data as following : \n User First Name is ${this.fName} \n User last Name is ${this.lName} \n User Age is ${this.age} \n User country is ${this.country} \n User city is ${this.city} \n User street is ${this.street} \n User Email is ${this.eMail}`;
        };

        this.showConstName = () => `your Construtor Function Name is ( ${this.constructor.name} )`;
        
        // This Fuction needs more Knowledge in OOP [Change name of Contstructor Namne ]: 
        this.changeConstName = function(newConstName) {
            if (age >= 18 ) {
                this.constructor.name = newConstName;
                return `Your new Construtor Function Name is ( ${newConstName} )`;
                
            } else {
                return 'You Can not change Constructor Fucntion name due to Age Destruction!';
            }
        }
        

        console.log(this);
    }   

        
    //-------------------------------------------------------------------------------------------------------
    console.log("Enter users Parameters [for each user] as following: ");    
    
    const allObjs = new Array();
    
    allObjs.length = userCount;
    
    for (i=0; i<userCount; i++) {        
        
        alert("lets enter parameters of user's Object number ( " + (i+1) + " ) :");
        var ufName = prompt("Enter First name : "),
        ulName = prompt("Enter last name : "),
            uage = parseInt(prompt("Enter age : ")),
            ucountry = prompt("Enter country : "),
            ucity = prompt("Enter city : "),
            ustreet = prompt("Enter street : "),
            uEmail = prompt("Enter email : ");
            
            let user1 = new constF(ufName, ulName, uage, ucountry, ucity, ustreet, uEmail, true);            

        do {

            var intFunc = prompt("Choose between following Functions : \n Press(1) for [Change Name] Function... \n Press (2) for [Show Email] Fucntion... \n Press (3) for [Showing Full Name] Function... \n Press (4) for [Showing Full Address] Function...\n Press (5) for [Age - Calculations (Days, Weeks ,Months)] Function... \n Press (6) for [Showing All Data] Function \n Press (7) for [Showing Constructor Fucntion Name] Function \n Press (8) for [Changing Constructor Fucntion Name] Function... ");
            
            var strNames = '';
            
            document.getElementById('txtarea').innerHTML += strNames; 
    
            
            if (intFunc == "1") {
                
                alert("Welcome to [Change Name] Function...");            
                
                console.log("Welcome to [Change Name] Function...");            
                
                strNames = '';
                
                var newFirstName = prompt("Enter your New First Name :"),
                      newLastName = prompt("Enter your New Last Name :");
                      
                if (user1.age >= 18) {                
                    
                    user1.changeName(newFirstName,newLastName);
                        
                    console.log('Your full Name after updating as Following: \n');
                        
                    console.log(`your first name is : ${user1.fName}`);
                    alert(`your first name is : ${user1.fName}`);
                        
                        
                    console.log(`your Second name is : ${user1.lName}`);        
                    alert(`your Second name is : ${user1.lName}`);        
                    console.log("======================== ");
                        
                    alert(user1.fullName());
                    console.log(user1.fullName());
                    console.log("======================== ");
                    
                    strNames += `Your first name is (${user1.fName})\n Your second name is (${user1.lName})\n ${user1.fullName()}`;
                    document.getElementById('txtarea').innerHTML += strNames; 
                        
                } else  {
                    
                    console.log(user1.changeName(newFirstName,newLastName));            
                    console.log("======================== ");                
                    
                    strNames += `${user1.changeName(newFirstName,newLastName)}`;
                    
                    document.getElementById('txtarea').innerHTML += strNames; 
                    
                }
                
            } else if (intFunc == "2") {
                
                alert("Welcome to [Show Email] Function...");            
                
                strNames = '';
                
                console.log(user1.showEmail());
                
                console.log("======================== ");
                
                strNames += `${user1.showEmail()}`;        
                
                document.getElementById('txtarea').innerHTML += strNames; 
                
            } else if (intFunc == "3") {
                
                alert("Welcome to [Show Full Name] Function...");            
                
                strNames = '';
                
                console.log(user1.fullName());
                
                alert(user1.fullName());        
                
                console.log("======================== ");
                
                strNames += `${user1.fullName()}`;        
                
                document.getElementById('txtarea').innerHTML += strNames; 
                
            } else if (intFunc == "4") {
                
                alert("Welcome to [Show Full Address] Function...");            
                
                strNames = '';
                
                console.log(user1.FullAd());            
                alert(user1.FullAd());        
                
                console.log("======================== ");
                
                strNames += `${user1.FullAd()}`;        
                
                document.getElementById('txtarea').innerHTML += strNames; 
                
            } else if (intFunc == "5") {
                
                alert("Welcome to [Age Calculations] Functions...");            
                
                strNames = '';
                
                alert("1) your age by Days as following...");            
                console.log("1) your age [by Days] as following: ");
                
                console.log(user1.ageInDays());
                alert(user1.ageInDays());
                
                console.log("------------------------------------");
                
                
                alert("2) your age [by Weeks] as following:...");            
                console.log("2) your age [by Weeks] as following: ");
                
                console.log(user1.ageInWeeks());        
                alert(user1.ageInWeeks());        
                
                console.log("------------------------------------");
                
                
                alert("3) your age [by Months] as following:...");            
                console.log("3) your  age [by Months] as following: ");
                
                console.log(user1.ageInMonths());        
                alert(user1.ageInMonths());        
                
                console.log("------------------------------------");
                
                strNames += `${user1.ageInDays()} \n ${user1.ageInWeeks()} \n ${user1.ageInMonths()} `;        
                
                document.getElementById('txtarea').innerHTML += strNames; 
                
            } else if (intFunc == "6") {
                
                alert("Welcome to [Show All User's Data] Function...");            
                
                strNames = '';
                
                console.log("3) your  age [by Months] as following: ");
                
                console.log(user1.allData());
                alert(user1.allData());
                
                console.log("------------------------------------");
                
                strNames += `${user1.allData()} `;        
                
                document.getElementById('txtarea').innerHTML += strNames; 
                
            } else if (intFunc == "7") {
                
                alert("Welcome to [Show Constrcutor Fucntion Name ] Function...");            
                
                strNames = '';
                
                console.log(user1.showConstName());
                
                alert(user1.showConstName());
                
                console.log("------------------------------------");
                
                strNames += `${user1.showConstName()} `;        
                
                document.getElementById('txtarea').innerHTML += strNames; 
            
            } else if (intFunc == "8") {
                
                alert("Welcome to [Changing Constrcutor Fucntion Name ] Function...");            
                
                strNames = '';
                
                var newConst = prompt("Enter your new Contructor Name");
                
                console.log(user1.changeConstName(newConst));
                
                alert(user1.changeConstName(newConst));
                
                console.log("------------------------------------");
                
                strNames += `${user1.changeConstName(newConst)} `;        
                
                document.getElementById('txtarea').innerHTML += strNames; 
                
                
            } else {
                alert("Error Entry!");
            }
    
            var z= prompt("Press (1) to Choose another Internal Function");
        }   while (z == "1");

        // Adding the Extracted Object to the objects Array:
        allObjs[i] = user1;
        

        var z0 = prompt("press (1) to check about the Extracted object's Constructor's Name...");
        
        if (z0 == "1"){
            var z1 = prompt("press (1) for [instanceof] check Method...\n press (1) for [instanceof] check Method...\n press any other key to exit... ");

            if (z1 == "1"){
                alert("Your Choosed [instanceof] check Method ... ");
                if (user1 instanceof constF){
                    console.log('Your new Extracted Object has been Established from Constructor Function [True]');
                } else {
                    console.log('Your new Extracted Object has NOT been Established from Constructor Function [False]');
                }
                
                
            }  else if (z1 == "2") {                
                alert("Your Choosed [.constructor] check Method ... ");
                if (user1.constructor === constF){
                    console.log('Your new Extracted Object has been Established from Constructor Function [True]');
                } else {
                    console.log('Your new Extracted Object has NOT been Established from Constructor Function [False]');
                }                
            }

        } else {
            alert('Error Entry!');
        }
    }
    
    console.log('lets Print All Extracted Objects as following:');

    for (z=0; z < userCount; z++) {
        console.log(`Your extracted object number ( ${(z + 1)} ) ovarall as following: \n `);        
        console.log(allObjs[z]);
    }
    
}
// =====================================================================================================================

function Display1() {
    document.getElementById('txtarea1').textContent = constProp;
}

function Display2() {
    document.getElementById('txtarea2').textContent = constProps;
}


// =====================================================================================================================