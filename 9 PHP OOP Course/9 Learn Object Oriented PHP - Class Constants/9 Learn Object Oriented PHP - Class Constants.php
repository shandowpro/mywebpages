    <!--  9 Learn Object Oriented PHP - Class Constants --> 
<!-- =============================================================== -->

<?php
    
    $lessonName ='Class Constants';
    $title = '9 PHPOOP 5 - ' . $lessonName;
    $css = '9 Learn Object Oriented PHP - Class Constants.css';

    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName . "<br>";    
    // ============================================================================
        /* In this lesson will be (1) Application [Practical Examples of creating new class{with Public Properties} and objects {with Null + customized Properites Values}] :
        // 1- First Example  => Definig Class {AppleDevices} => [Creating new Class {Apple Device with non default values of Properties ()} + {(2) Constants + (2) Methods [using the Constant & $ this inside methnod] } +  (1)Object[iphone] {iphone6plus with Customized Values}  + Printing Object var Dump]
        // 2- Second Example => Defining  Class {AppleDevices1} => [Creating new Class {Apple Device with non default values of Properties ()} + {(2) Constants + (2) Methods [using the Constant & $ this inside methnod] } +  (1)Object[iphone] {iphone7plus with Customized Values}  + Printing Object var Dump]
       */    
        
    
    $main =  'In this lesson will be (2) Application [Practical Exmpales of {Setting a Method by using Constant} + {calling constant inside class [inside a Class Method] / outside the class} ] : as following : ' . '<br>' . '<ul>' .
    '<li>' . 'First Example  => Definig Class {AppleDevices} => [Creating new Class {Apple Device with non default values of Properties ()} + {(2) Constants + (2) Methods [using the Constant & $ this inside methnod] } +  (1)Object[iphone] {iphone6plus with Customized Values}  + Printing Object var Dump]' . '</li>' .     
    '<li>' . 'Second Example => Defining  Class {AppleDevices1} => [Creating new Class {Apple Device with non default values of Properties ()} + {(2) Constants + (2) Methods [using the Constant & $ this inside methnod] } +  (1)Object[iphone] {iphone7plus with Customized Values}  + Printing Object var Dump]' . '</li>' .         
    '</ul>';            
    // ============================================================================    

    // (*)=>  First Example  => Definig Class {AppleDevices} => [Creating new Class {Apple Device with non default values of Properties ()} + {(2) Constants + (2) Methods [using the Constant & $ this inside methnod] } +  (1)Object[iphone] {iphone6plus with Customized Values}  + Printing Object var Dump] : 
        $ha1 = 'First Example  => Definig Class {AppleDevices} => [Creating new Class {Apple Device with non default values of Properties ()} + {(2) Constants + (2) Methods [using the Constant & $ this inside methnod] } +  (1)Object[iphone] {iphone6plus with Customized Values}  + Printing Object var Dump]: as following : ' . "<br>" ; 

        // // Defining and Creating new Class [AppleDevice] {with properties default}: 
        //     class AppleDevice {                
        //         // Defining the Class Properties Values :
        //             public $ram = "2GB";
        //             public $space = "64GB";
        //             public $color = "Silver";
        //             public $inch = "4 Inch";
        //             const CHIP = "A9" ;
        //             const NAMECHARS = 3 ;
                
        //         // Defining the Class Methods {Using the Function parameter} :
        //             // First Method (using $ this) => within Method of : Displaying all Iphone Properties : 
        //             public function DisplayProps() {                         
        //                 echo 'This is for the [AppleDevice] Class : '. "<br>"; 
        //                 echo 'Your Iphone ram is : ' . $this->ram . "<br>"; 
        //                 echo 'Your Iphone space is : ' . $this->space . "<br>"; 
        //                 echo 'Your Iphone color is : ' . $this->color . "<br>"; 
        //                 echo 'Your Iphone inch is : ' . $this->inch . "<br>"; 
        //                 echo 'Your Iphone Fixed Chip (constant) is : ' . self::CHIP . "<br>"; 
        //             }
                    
        //             // Second Method (using Parameter) => within the Method of : Check[refuse the name less than 3 charcters] & Set the owner iphone name : 
        //             public function SetName($owner) { 
        //                 if (strlen($owner) < self::NAMECHARS) {
        //                     echo 'Your Name you inserted [' . $owner . '] less than ' . self::NAMECHARS .  ' chars';
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
                            
        // // Printing the Class Value by using the object Name [iphone6plus] : 
        //     echo 'Your Fixed Chip Id by [Object Name] is ' . $iphone6plus::CHIP; 
            
        // // Printing the Class Value by using the object Name [iphone6plus] :         
        //     echo 'Your Fixed Chip Id by [Class Name] is ' . AppleDevice::CHIP; 

        // // Printing the var Dump Object[iphone6plus] created from the class [AppleDevice] : 
        //     echo '<h3> The Object[iphone6plus] created from the class [AppleDevice] as following : </h3> <br>' ;
        //     echo '<per>';            
        //     var_dump($iphone6plus);
        //     echo '</per>'. '<br>' . '<br>';                                    
        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
            
    // =================================================================================

    // (*)=>  Second Example => Defining  Class {AppleDevices1} => [Creating new Class {Apple Device with non default values of Properties ()} + {(2) Constants + (2) Methods [using the Constant & $ this inside methnod] } +  (1)Object[iphone] {iphone7plus with Customized Values}  + Printing Object var Dump] :
        $ha2 = ' Second Example => Defining  Class {AppleDevices1} => [Creating new Class {Apple Device with non default values of Properties ()} + {(2) Constants + (2) Methods [using the Constant & $ this inside methnod] } +  (1)Object[iphone] {iphone7plus with Customized Values}  + Printing Object var Dump] : as following : ' . "<br>" ; 

        // // Defining and Creating new Class [AppleDevice] {with properties default}: 
        //     class AppleDevice1 {                
        //         // Defining the Class Properties Values :
        //             public $ram = "2GB";
        //             public $space = "64GB";
        //             public $color = "Silver";
        //             public $inch = "4 Inch";
        //             public $userName = "Sayed";
        //             const CHIP = "A9" ;
        //             const NAMECHARS = 3 ;                
                
        //         // Defining the Class Methods {Using the Function parameter} :
        //             // First Method (using $ this) => within Method of : Displaying all Iphone Properties : 
        //             public function DisplayProps() {                         
        //                 echo 'This is for the [AppleDevice] Class : '. "<br>"; 
        //                 echo 'Your Iphone ram is : ' . $this->ram . "<br>"; 
        //                 echo 'Your Iphone space is : ' . $this->space . "<br>"; 
        //                 echo 'Your Iphone color is : ' . $this->color . "<br>"; 
        //                 echo 'Your Iphone inch is : ' . $this->inch . "<br>"; 
        //                 echo 'Your Iphone Fixed Chip (constant) is : ' . self::CHIP . "<br>"; 
        //             }
                    
        //             // Second Method (using Parameter) => within the Method of: Check[refuse the name less than 3 charcters] & Set the owner iphone name : 
        //             public function SetName() { 
        //                 if (strlen($this-> userName) < self::NAMECHARS) {
        //                     echo 'Your Name you inserted [' . $this-> userName . '] less than ' . self::NAMECHARS .  ' chars';
        //                 } else {
        //                     echo 'Your Name you inserted [' . $this-> userName . '] has been set corretly';
        //                 }
        //             }
        //     }
            
        // // Defining and Creating new (1) Object : [iphone7plus] => from the class {AppleDevice1} : 
        //     $iphone7plus = new AppleDevice1();
        
        // // Processing the Method [DisplayProps : of displaying all properties] : 
        //     $iphone7plus-> DisplayProps(); 
        
        // // Processing the Method [SetName : of Checking & Displaying Owner Customized Name ] {using the default vlaue of the property} : 
        //     $iphone7plus-> SetName(); 
                            
        // // Printing the Class Value by using the object Name [iphone7plus] : 
        //     echo $iphone7plus::CHIP; 
            
        // // Printing the Class Value by using the Class Name [AppleDevice1] :
        //     echo AppleDevice1::CHIP; 

        // // Printing the var Dump Object[iphone7plus] created from the class [AppleDevice1] : 
        //     echo '<h3> The Object[iphone7plus] created from the class [AppleDevice] as following : </h3> <br>' ;
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

            <!-- (*) => First Example  => Definig Class {AppleDevices} => [Creating new Class {Apple Device with non default values of Properties ()} + {(2) Constants + (2) Methods [using the Constant & $ this inside methnod] } +  (1)Object[iphone] {iphone6plus with Customized Values}  + Printing Object var Dump] : -->
                
                    <header>
                        First Example  => Definig Class {AppleDevices} => [Creating new Class {Apple Device with non default values of Properties ()} + {(2) Constants + (2) Methods [using the Constant & $ this inside methnod] } +  (1)Object[iphone] {iphone6plus with Customized Values}  + Printing Object var Dump] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1; ?>  </h1>  

                        <?php                                                                                                                                               

                        // Defining and Creating new Class [AppleDevice] {with properties default} : 
                            class AppleDevice {                
                                // Defining the Class Properties Values [Variabies] :
                                public $ram = "2GB";
                                public $space = "64GB";
                                public $color = "Silver";
                                public $inch = "4 Inch";
                                
                                // Defining the Class Properties Values [Contants] :
                                const CHIP = "A9" ;
                                const NAMECHARS = 3 ;
                                
                                // Defining the Class Methods {Using the Function parameter} :
                                    // First Method (using $ this) => within Method of : Displaying all Iphone Properties : 
                                    public function DisplayProps() {                         
                                        echo 'This is for the [AppleDevice] Class : '. "<br>"; 
                                        echo 'Your Iphone ram is : ' . $this->ram . "<br>"; 
                                        echo 'Your Iphone space is : ' . $this->space . "<br>"; 
                                        echo 'Your Iphone color is : ' . $this->color . "<br>"; 
                                        echo 'Your Iphone inch is : ' . $this->inch . "<br>"; 
                                        echo 'Your Iphone Fixed Chip (constant) is : ' . self::CHIP . "<br>"; 
                                    }
                                    
                                    // Second Method (using Parameter + $ this + constant) => within the Method of : Check[refuse the name less than 3 charcters] & Set the owner iphone name : 
                                    public function SetName($owner) { 
                                        if (strlen($owner) < self::NAMECHARS) {
                                            echo 'Your Name you inserted [' . $owner . '] less than ' . self::NAMECHARS .  ' chars' . '<br>';
                                        } else {
                                            echo 'Your Name you inserted [' . $owner . '] has been set corretly' . '<br>';
                                        }
                                    }
                            }
                            
                            // Defining and Creating new (1) Object : [iphone6plus] => from the class {AppleDevice} : 
                                $iphone6plus = new AppleDevice();
                            
                            // Processing the Method [DisplayProps : of displaying all properties] : 
                                $iphone6plus-> DisplayProps() ; 
                            
                            // Processing the Method [SetName : of Checking & Displaying Owner Customized Name ] : 
                                $iphone6plus-> SetName('Shadi') ; 
                                                
                            // Printing the Class Value by using the {Object Name} [iphone6plus] : 
                                echo  '<br>'. 'Your Fixed Chip Id by [Object Name] is ' . $iphone6plus::CHIP . '<br>'; 
                                
                            // Printing the Class Value by using the {Class Name} [iphone6plus] :         
                                echo  '<br>' . 'Your Fixed Chip Id by [Class Name] is ' . AppleDevice::CHIP . '<br>';

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
            
            <!-- (*) => Second Example => Defining  Class {AppleDevices1} => [Creating new Class {Apple Device with non default values of Properties ()} + {(2) Constants + (2) Methods [using the Constant & $ this inside methnod] } +  (1)Object[iphone] {iphone7plus with Customized Values}  + Printing Object var Dump] : -->
                
                    <header>
                        Second Example => Defining  Class {AppleDevices1} => [Creating new Class {Apple Device with non default values of Properties ()} + {(2) Constants + (2) Methods [using the Constant & $ this inside methnod] } +  (1)Object[iphone] {iphone7plus with Customized Values}  + Printing Object var Dump] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha2 ; ?>  </h1>  

                        <?php                                                                                                                                               
                            // Defining and Creating new Class [AppleDevice] {with properties default}  : 
                                class AppleDevice1 {                
                                    // Defining the Class Properties Values [Varilables] :
                                        public $ram = "2GB";
                                        public $space = "64GB";
                                        public $color = "Silver";
                                        public $inch = "4 Inch";
                                        public $userName = "Sayed";
                                        
                                    // Defining the Class Properties Values [Contants]:
                                        const CHIP = "A9" ;
                                        const NAMECHARS = 10 ;                
                                    
                                    // Defining the Class Methods {Using the Function parameter} :
                                        // First Method (using $ this) => within Method of : Displaying all Iphone Properties : 
                                        public function DisplayProps() {                         
                                            echo 'This is for the [AppleDevice] Class : '. "<br>"; 
                                            echo 'Your Iphone ram is : ' . $this->ram . "<br>"; 
                                            echo 'Your Iphone space is : ' . $this->space . "<br>"; 
                                            echo 'Your Iphone color is : ' . $this->color . "<br>"; 
                                            echo 'Your Iphone inch is : ' . $this->inch . "<br>"; 
                                            echo 'Your Iphone Fixed Chip (constant) is : ' . self::CHIP . "<br>"; 
                                        }
                                        
                                        // Second Method (using default value peroperty + $ this + constant) => within the Method of: Check[refuse the name less than 3 charcters] & Set the owner iphone name : 
                                        public function SetName() { 
                                            if (strlen($this-> userName) < self::NAMECHARS) {
                                                echo 'Your Name you inserted [' . $this-> userName . '] less than ' . self::NAMECHARS .  ' chars' . '<br>';
                                            } else {
                                                echo 'Your Name you inserted [' . $this-> userName . '] has been set corretly' . '<br>';
                                            }
                                        }
                                }
                                
                            // Defining and Creating new (1) Object : [iphone7plus] => from the class {AppleDevice1} : 
                                $iphone7plus = new AppleDevice1();
                            
                            // Processing the Method [DisplayProps : of displaying all properties] : 
                                $iphone7plus-> DisplayProps(); 
                            
                            // Processing the Method [SetName : of Checking & Displaying Owner Customized Name ] {using the default vlaue of the property} : 
                                $iphone7plus-> SetName(); 
                                                
                            // Printing the Class Value by using the {object Name} [iphone7plus] : 
                                echo '<br>' . 'Your Fixed Chip Id by [Object Name] is ' . $iphone7plus::CHIP . '<br>'; 
                                
                            // Printing the Class Value by using the {Class Name} [AppleDevice1] :
                                echo '<br>' . 'Your Fixed Chip Id by [Class Name] is ' . AppleDevice1::CHIP. '<br>'; 

                            // Printing the var Dump Object[iphone7plus] created from the class [AppleDevice1] : 
                                echo '<h3> The Object[iphone7plus] created from the class [AppleDevice] as following : </h3> <br>' ;
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
