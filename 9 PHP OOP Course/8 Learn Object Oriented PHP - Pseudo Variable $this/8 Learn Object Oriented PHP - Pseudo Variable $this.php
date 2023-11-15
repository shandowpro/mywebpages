<!--  8 Learn Object Oriented PHP - Pseudo Variable $ this --> 
<!-- =============================================================== -->

<?php
    
    $lessonName ='Pseudo Variable $ this';
    $title = '8 PHPOOP 5 - ' . $lessonName;
    $css = '8 Learn Object Oriented PHP - Pseudo Variable $this.css';

    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName . "<br>";    
    // ============================================================================
        /* In this lesson will be (2) Application [Practical Examples of creating new class{with Public Properties} and objects {with Null + customized Properites Values}] :
        // 1- First Example {Setting a Method by using parameter} => within Class {Apple Devices} => [Creating new Class {Apple Device with non default values of Properties ()} + (1)Object[iphone] {iphone6plus with Customized Values}  + Printing Object var Dump] 
        // 2- Second Example {Setting a Method by using $ this Pseudo Variable} => within Class {Apple Devices} => [Creating new Class {Apple Device with non default values of Properties ()} + (1)Object[iphone] {iphone6plus with Customized Values}  + Printing Object var Dump]
    */    
        
    
    $main =  'In this lesson will be (2) Application [Practical Exmpales of creating new class{with Public Properties} and objects {with Null + custoimized Properites Values}] :   as following  : ' . '<br>' . '<ul>' .
    '<li>' . 'First Example {Setting a Method by using parameter} => within Class {Apple Devices} => [Creating new Class {Apple Device with non default values of Properties ()} + (1)Object[iphone] {iphone6plus with Customized Values}  + Printing Object var Dump] ' . '</li>' .     
    '<li>' . 'Second Example {Setting a Method by using $ this Pseudo Variable} => within Class {Apple Devices} => [Creating new Class {Apple Device with non default values of Properties ()} + (1)Object[iphone] {iphone6plus with Customized Values}  + Printing Object var Dump]' . '</li>' .     
    '</ul>';            
    // ============================================================================    

    // (*)=>  First Example {Setting a Method by using [parameter]} with in Class {Apple Devices} => [Creating new Class {Apple Device with non default values of Properties ()} + (1)Object[iphone] {iphone6plus with Customized Values}  + Printing Object var Dump] :
        $ha1 = 'First Example {Setting a Method by using [parameter] } with in Class {Apple Devices} => [Creating new Class {Apple Device with non default values of Properties ()} + (1)Object[iphone] {iphone6plus with Customized Values}  + Printing Object var Dump] : as following : ' . "<br>" ; 

        // // Defining and Creating new Class [AppleDevice] {with properties default} : 
        //     class AppleDevice {                
        //         // Defining the Class Properties Values :
        //             public $ram = "2GB";
        //             public $space = "64GB";
        //             public $color = "Silver";
        //             public $inch = "4 Inch";
                    
        //         // Defining the Class Methods {Using the Function parameter} :
        //             // First Method (using $ this) => within Method of : Displaying all Iphone Properties : 
        //             public function DisplayProps() {                         
        //                 echo 'This is for the First [AppleDevice] Class : '. "<br>"; 

        //                 echo 'Your Iphone ram is : ' . $this->ram . "<br>"; 
        //                 echo 'Your Iphone space is : ' . $this->space . "<br>"; 
        //                 echo 'Your Iphone color is : ' . $this->color . "<br>"; 
        //                 echo 'Your Iphone inch is : ' . $this->inch . "<br>"; 
        //             }
                    
        //             // Second Method (using Parameter) => within the Method of : Check[refuse the name less than 3 charcters] & Set the owner iphone name : 
        //             public function SetName($owner) { 
        //                 if (strlen($owner) < 3) {
        //                     echo 'Your Name you inserted [' . $owner . '] less than 3 chars';
        //                 } else {
        //                     echo 'Your Name you inserted [' . $owner . '] has been set corretly';
        //                 }
        //             }
        //     }
            
        // // Defining and Creating new (1) Object : [iphone6plus] => from the class {AppleDevice} : 
        //     $iphone6plus = new AppleDevice();
        
        // // Processing the Method [DisplayProps : of displaying all properties] : 
        //     $iphone6plus-> DisplayProps(); 
        
        // // Processing the Method [SetName : of Checking & Displaying Owner Customized Name ] : 
        //     $iphone6plus-> SetName('Shadi'); 
                            

        // // Printing the var Dump Object[iphone6plus] created from the class [AppleDevice] : 
        //     echo '<h3> The Object[iphone6plus] created from the class [AppleDevice] as following : </h3> <br>' ;
        //     echo '<per>';            
        //     var_dump($iphone6plus);
        //     echo '</per>'. '<br>' . '<br>';                                    
        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
            
    // =================================================================================                                                                                                                                                        
    
    // (*)=>  Second Example {Setting a Method by using [$ this] Pseudo Variable} with in Class {AppleDevice1} => [Creating new Class {Apple Device with non default values of Properties ()} + (1)Object[iphone] {iphone6plus with Customized Values}  + Printing Object var Dump] :
        $ha2 = 'Second Example {Setting a Method by using [$ this] Pseudo Variable} with in Class {AppleDevice1} => [Creating new Class {Apple Device with non default values of Properties ()} + (1)Object[iphone] {iphone6plus with Customized Values}  + Printing Object var Dump]  : as following : ' . "<br>" ; 

    //     // Defining and Creating new Class [AppleDevice1] {with properties default} : 
    //         class AppleDevice1 {                
    //         // Defining the Class Properties Values {with NULL Values} :
    //             public $ram;
    //             public $space;
    //             public $color;
    //             public $inch;
    //             public $ownerName;
                
    //         // Defining the Class Methods {Using the Function parameter} :
    //             // First Method (using $ this) => within method of : Displaying all Iphone Properties : 
    //             public function DisplayProps() { 
    //                 echo 'This is for the Second [AppleDevice1] Class : '. "<br>"; 
    //                 echo 'Your Iphone ram is : ' . $this->ram . "<br>"; 
    //                 echo 'Your Iphone space is : ' . $this->space . "<br>"; 
    //                 echo 'Your Iphone color is : ' . $this->color . "<br>"; 
    //                 echo 'Your Iphone inch is : ' . $this->inch . "<br>"; 
    //             }
                
    //             // Second Method (using Parameter) => within method of : Check[refuse the name less than 3 charcters] & Set the owner iphone name : 
    //             public function SetName() { 
    //                 if (strlen($this->ownerName) < 3) {
    //                     echo 'Your Name you inserted [' . $this->ownerName . '] less than 3 chars';
    //                 } else {
    //                     echo 'Your Name you inserted [' . $this->ownerName . '] has been set corretly';
    //                 }
    //             }
    //         }
        
    // // Defining and Creating new (1) Object : [iphone7plus] => from the class {AppleDevice1} : 
    //     $iphone7plus = new AppleDevice1();
    
    // // Setting the property [ownerName] : with customized before using the Checking method [SetName] by $ this pseudo variable : 
    //     $iphone7plus-> ownerName ="Shadi";
    
    // // Setting the Object properties : with customized before using the Checking & Displaying  method [DisplayProps] by $ this pseudo variable : 
    //     $iphone7plus-> ram = "6 GB";
    //     $iphone7plus-> inch = "6 Inch";
    //     $iphone7plus-> color = "Gold";
    //     $iphone7plus-> space = "128 GB";


    // // Processing the Method [DisplayProps] : of Checking & Displaying all Object Properties {after setting Properties customized Values} : 
    //     $iphone7plus-> DisplayProps();     
        
    // // Processing the Method [SetName : of Checking & Displaying Owner Customized Name] {with no parameter} : 
    //     $iphone7plus-> SetName(); 
                    
    // // Printing the var Dump Object[iphone6plus] created from the class [AppleDevice1] : 
    //     echo '<h3> The Object[iphone7plus] created from the class [AppleDevice1] as following : </h3> <br>' ;
    //     echo '<per>';            
    //     var_dump($iphone7plus);
    //     echo '</per>'. '<br>' . '<br>';                                    
    // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        
// =================================================================================                                                                                                                                                        
// ==================================================================================
?>
<!-- --------------------------------------------------------------------- -->

<!DOCTYPE html>
    <html>
        <head>
            <title> <?php echo $title; ?>  </title>
            <link rel="stylesheet" href= '<?php echo $css; ?>' media="all">            
            <!-- <style>
                .nice-frame {
                    padding: 10px;
                    text-align: center;
                    width: 400px;
                    margin: 20px auto;
                    border-radius: 10px;
                    background-color: #EEE;
                    border: 1px solid #CCC;
                    line-height: 2;
                    font-family: Tahoma, Arial;
                }
                
                .nice-frame span {
                    font-weight:bold;
            
                    color:#f00;
                }
            </style> -->
            <style>
                header {
                    font-size: 20px; font-weight: bold; color:#fff; background-color: gray; border:3px solid black; text-align: center;
                }

                .tag {
                    border: 3px solid red; 
                    border-radius: 50px;
                    margin: 50px auto;
                    font-size: 30px;
                    font-weight: bold;
                    text-decoration: underline;
                    display: block;
                    text-align: center;
                    width: 200px;
                }
            </style>
        </head>
            
        <body class='body' style="background-color: <?php echo $body; ?>" > 
            <h1>
                The following textnode of this head has been genereated by PHP path : <br>        
                <?php echo $heading; echo '<br>'; ?>            
            </h1>

            <p>
                The following textnode of this Paragraph has been genereated by PHP path : <br>        
                <?php echo $paragraph; echo '<br>'; ?> 
            </p> <br>        
            <!-- ------------------------------------------------------------------------- -->            
            <?php
                echo $main;
            ?>

            <section class="PHPPract" id="PHPPract">                                       

                <!-- (*) => First Example {Setting a Method by using parameter} => within Class {Apple Devices} => [Creating new Class {Apple Device with non default values of Properties ()} + (1)Object[iphone] {iphone6plus with Customized Values}  + Printing Object var Dump] : -->
                
                    <header>
                        First Example {Setting a Method by using parameter} => within Class {Apple Devices} => [Creating new Class {Apple Device with non default values of Properties ()} + (1)Object[iphone] {iphone6plus with Customized Values}  + Printing Object var Dump] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1; ?>  </h1>  

                        <?php                                                                                                                                               

                            // Defining and Creating new Class [AppleDevice] {with properties default}: 
                                class AppleDevice {                
                                    // Defining the Class Properties Values :
                                        public $ram = "2GB";
                                        public $space = "64GB";
                                        public $color = "Silver";
                                        public $inch = "4 Inch";
                                        
                                    // Defining the Class Methods {Using the Function parameter} :
                                        // First Method (using $ this) => within Method of : Displaying all Iphone Properties : 
                                        public function DisplayProps() {                         
                                            echo 'This is for the First [AppleDevice] Class : '. "<br>"; 

                                            echo 'Your Iphone ram is : ' . $this->ram . "<br>"; 
                                            echo 'Your Iphone space is : ' . $this->space . "<br>"; 
                                            echo 'Your Iphone color is : ' . $this->color . "<br>"; 
                                            echo 'Your Iphone inch is : ' . $this->inch . "<br>"; 
                                        }
                                        
                                        // Second Method (using Parameter) => within the Method of : Check[refuse the name less than 3 charcters] & Set the owner iphone name : 
                                        public function SetName($owner) { 
                                            if (strlen($owner) < 3) {
                                                echo 'Your Name you inserted [' . $owner . '] less than 3 chars';
                                            } else {
                                                echo 'Your Name you inserted [' . $owner . '] has been set corretly';
                                            }
                                        }
                                }
                                
                            // Defining and Creating new (1) Object : [iphone6plus] => from the class {AppleDevice} : 
                                $iphone6plus = new AppleDevice();
                            
                            // Processing the Method [DisplayProps : of displaying all properties] : 
                                $iphone6plus-> DisplayProps(); 
                            
                            // Processing the Method [SetName : of Checking & Displaying Owner Customized Name ] : 
                                $iphone6plus-> SetName('Shadi'); 
                                                

                            // Printing the var Dump Object[iphone6plus] created from the class [AppleDevice] : 
                                echo '<h3> The Object[iphone6plus] created from the class [AppleDevice] as following : </h3> <br>' ;
                                echo '<per>';            
                                var_dump($iphone6plus);
                                echo '</per>'. '<br>' . '<br>';                                    
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";                                                                                                
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                                                                                        

                <!-- (*) => Second Example {Setting a Method by using $ this Pseudo Variable} => within Class {Apple Devices} => [Creating new Class {Apple Device with non default values of Properties ()} + (1)Object[iphone] {iphone6plus with Customized Values}  + Printing Object var Dump] : -->
                        
                    <header>
                        Second Example {Setting a Method by using $ this Pseudo Variable} => within Class {Apple Devices} => [Creating new Class {Apple Device with non default values of Properties ()} + (1)Object[iphone] {iphone6plus with Customized Values}  + Printing Object var Dump]: <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha2; ?>  </h1>  

                        <?php                                                                                                                                               

                            // Defining and Creating new Class [AppleDevice1] {with properties default}: 
                            class AppleDevice1 {                
                                // Defining the Class Properties Values {with NULL Values} :
                                    public $ram;
                                    public $space;
                                    public $color;
                                    public $inch;
                                    public $ownerName;
                                    
                                // Defining the Class Methods {Using the Function parameter} :
                                    // First Method (using $ this) => within method of : Displaying all Iphone Properties : 
                                    public function DisplayProps() { 
                                        echo 'This is for the Second [AppleDevice1] Class : '. "<br>"; 
                                        echo 'Your Iphone ram is : ' . $this->ram . "<br>"; 
                                        echo 'Your Iphone space is : ' . $this->space . "<br>"; 
                                        echo 'Your Iphone color is : ' . $this->color . "<br>"; 
                                        echo 'Your Iphone inch is : ' . $this->inch . "<br>"; 
                                    }
                                    
                                    // Second Method (using Parameter) => within method of : Check[refuse the name less than 3 charcters] & Set the owner iphone name : 
                                    public function SetName() { 
                                        if (strlen($this->ownerName) < 3) {
                                            echo 'Your Name you inserted [' . $this->ownerName . '] less than 3 chars';
                                        } else {
                                            echo 'Your Name you inserted [' . $this->ownerName . '] has been set corretly';
                                        }
                                    }
                                }
                                
                            // Defining and Creating new (1) Object : [iphone7plus] => from the class {AppleDevice1} : 
                                $iphone7plus = new AppleDevice1();
                            
                            // Setting the property [ownerName] : with customized before using the Checking method [SetName] by $ this pseudo variable : 
                                $iphone7plus-> ownerName ="Shadi";
                            
                            // Setting the Object properties : with customized before using the Checking & Displaying  method [DisplayProps] by $ this pseudo variable : 
                                $iphone7plus-> ram = "6 GB";
                                $iphone7plus-> inch = "6 Inch";
                                $iphone7plus-> color = "Gold";
                                $iphone7plus-> space = "128 GB";
                        
                        
                            // Processing the Method [DisplayProps] : of Checking & Displaying all Object Properties {after setting Properties customized Values} : 
                                $iphone7plus-> DisplayProps();     
                                
                            // Processing the Method [SetName : of Checking & Displaying Owner Customized Name] {with no parameter} : 
                                $iphone7plus-> SetName(); 
                                            
                            // Printing the var Dump Object[iphone6plus] created from the class [AppleDevice1] : 
                                echo '<h3> The Object[iphone7plus] created from the class [AppleDevice1] as following : </h3> <br>' ;
                                echo '<per>';            
                                var_dump($iphone7plus);
                                echo '</per>'. '<br>' . '<br>';                                    
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";                                                                                                    
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                                                                                                    
            </section>                                                                    
        </body>
    </html> 
