    <!--  12 Learn Object Oriented PHP - Encapsulation --> 
<!-- =============================================================== -->

<?php
    
    $lessonName ='Encapsulation';
    $title = '12 PHPOOP 5 - ' . $lessonName;
    $css = '12 Learn Object Oriented PHP - Encapsulation.css';

    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName . "<br>";    
    // ============================================================================
        /* In this lesson will be (2) Applications [Practical Examples of creating new class with [(Property) (Method : changing lock value)] && and (2) Objects: {Incriptred + Encapsulated} 
        & {Incriptred + Not Encapsulated} :
        // 1- First Example  => {[(lock Property) (Method : changing lock value)]} + {object Incripted , Not Encapsulated }
        // 2- Second Example  => {[(lock Property) (Method : changing lock value)]} + {object Incripted , Encapsulated }
       */    
        
    
    $main =  'In this lesson will be (2) Applications [Practical Examples of creating new class with [(Property) (Method : changing lock value)] && and (2) Objects: {Incriptred + Encapsulated} : as following : ' . '<br>' . '<ul>' .
    '<li>' . 'First Example  => {[(lock Property) (Method : changing lock value)]} + {object Incripted , Not Encapsulated }' . '</li>' .     
    '<li>' . 'Second Example  => {[(lock Property) (Method : changing lock value)]} + {object Incripted , Encapsulated }' . '</li>' .     
    '</ul>';            
    // ============================================================================    

    // (*)=>  First Example  => {[(lock Property) (Method : changing lock value)]} + {object Incripted , Not Encapsulated } : 
            $ha1 = 'First Example  => Changing all object properties by using a Method with parameters : as following : ' . "<br>" ; 

            // // Defining and Creating new Class [AppleDevice] {with properties default}: 
            //     class AppleDevice {                
            //         // Defining the Class Properties Values :`
            //             public $ram = "2GB";
            //             public $space = "64GB";
            //             public $inch = "4 Inch";                    
            //             public $color = "Silver";
            //         // Defining the property by using the [Incripting , but not Encapsulated] :  
            //             public $lock;
                                    
            //         // Method (using Parameters + Incripting method) within the Method of -> To change all Properties vales  [Securited] :  
            //             public function changeLock($lo) {
            //                 $this-> lock = 'The property Value by [NOT Encapslution and Incription] {using Method} is: ' . sha1($lo) . "<br>";
            //             }
            //     }
                
            // // Defining and Creating new (1) Object : [iphone6plus]  => from the class {AppleDevice} : 
            //     $iphone6plus = new AppleDevice();                
            
            // // Processing the Method [Changing values of displaying all properties] : 
            //     $iphone6plus-> changeLock("Sayed"); 
                                                                                                
            // // Printing the property after changing by single method [This is accepted to be dispalyed, due to the property is {public} and { NOT private} (Not Encapsulated)] : 
            //     echo '<br>' . 'The singe lock property value [by direct Access] is ' . $iphone6plus-> lock . "<br>";


            // // Printing the var Dump Object[iphone6plus] after changing the Without Encapsulated variable : 
            //     echo '<br>'. '<h3> The Object[iphone6plus] after using the method to change all properties [Without Encapsulted Method] as following : </h3>' . '<br>' ;
            //     echo '<per>';            
            //     var_dump($iphone6plus);            
            //     echo '</per>'. '<br>' . '<br>';                                    
                    
            // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
            
    // =================================================================================    
    
    // // (*)=>  Second Example  => {[(lock Property) (Method : changing lock value)]} + {object Incripted , Encapsulated } : 
            
        $ha2 = ' Second Example  => {[(lock Property) (Method : changing lock value)]} + {object Incripted , Encapsulated } : as following : ' . "<br>" ; 
            
        // // Defining and Creating new Class [AppleDevice] {with properties default}: 
            //     class AppleDevice1 {                
            //         // Defining the Class Properties Values :
            //             public $ram = "2GB";
            //             public $space = "64GB";
            //             public $inch = "4 Inch";                    
            //             public $color = "Silver";
                    
            //         // Defining an Encapsulated property [private] : 
            //             private $lock;
                                    
            //         // Method (using Parameters + Incripting method) within the Method of -> To change all Properties vales  [Securited] :  
            //             public function changeLock($lo) {
            //                 $this-> lock =  '<br>' . 'The property Value by [Encapslution and Incription] is: ' . sha1($lo) . '<br>';
            //             }
            //     }
                
            // // Defining and Creating new (1) Object : [iphone7plus]  => from the class {AppleDevice} : 
            //     $iphone7plus = new AppleDevice1();                
            
            // // Processing the Method [Changing values of displaying all properties] : 
            //     $iphone7plus-> changeLock("Shadi"); 
                                                                                                
            // // Printing the var Dump Object[iphone6plus] after changing the Without Encapsulated variable : 
            //     echo '<h3> The Object[iphone7plus] after using the method to change all properties [by Encapsulted Method] as following : </h3> <br>' ;
            //     echo '<per>';            
            //     var_dump($iphone7plus);            
            //     echo '</per>'. '<br>' . '<br>';                                    
                    
            // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
            
    // =================================================================================    
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
                                // Defining the Class Properties Values :
                                    public $ram = "2GB";
                                    public $space = "64GB";
                                    public $inch = "4 Inch";                    
                                    public $color = "Silver";
                                // Defining the property by using the [Incripting , but not Encapsulated] :  
                                    public $lock;
                                                
                                // Method (using Parameters + Incripting method) within the Method of -> To change all Properties vales  [Securited] :  
                                    public function changeLock($lo) {
                                        $this-> lock = 'The property Value by [NOT Encapslution and Incription] {using Method} is: ' . sha1($lo) . "<br>";
                                    }
                            }
                            
                            // Defining and Creating new (1) Object : [iphone6plus]  => from the class {AppleDevice} : 
                                $iphone6plus = new AppleDevice();                
                            
                            // Processing the Method [Changing values of Encapsulated property] : 
                                $iphone6plus-> changeLock("Sayed"); 
                                                                                                                
                            // Printing the property after changing by single method [This is accepted to be dispalyed, due to the property is {public} and { NOT private} (Not Encapsulated)] : 
                                echo '<br>' . 'The singe lock property value [by direct Access] is ' . $iphone6plus-> lock . "<br>";


                            // Printing the var Dump Object[iphone6plus] after changing the Without Encapsulated variable : 
                                echo '<br>'. '<h3> The Object[iphone6plus] after using the method to change all properties [Without Encapsulted Method] as following : </h3>' . '<br>' ;
                                echo '<per>';            
                                var_dump($iphone6plus);            
                                echo '</per>'. '<br>' . '<br>';                                    
                                    
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";                        
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
            <!-- (*) => Second Example  => {[(lock Property) (Method : changing lock value)]} + {object Incripted , Encapsulated } : -->
                
                    <header>
                        Second Example  => {[(lock Property) (Method : changing lock value)]} + {object Incripted , Encapsulated } : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha2; ?>  </h1>  

                        <?php                                                                                                                                               

                        // Defining and Creating new Class [AppleDevice] {with properties default} :  
                            class AppleDevice1 {                
                                // Defining the Class Properties Values :
                                    public $ram = "2GB";
                                    public $space = "64GB";
                                    public $inch = "4 Inch";                    
                                    public $color = "Silver";
                                
                                // Defining an Encapsulated property [private] : 
                                    private $lock;
                                                
                                // Method (using Parameters + Incripting method) within the Method of -> To change all Properties vales  [Securited] :  
                                    public function changeLock($lo) {
                                        $this-> lock =  '<br>' . 'The property Value by [Encapslution and Incription] is: ' . sha1($lo) . '<br>';
                                    }
                            }
                            
                            // Defining and Creating new (1) Object : [iphone7plus]  => from the class {AppleDevice} : 
                                $iphone7plus = new AppleDevice1();                
                            
                            // Processing the Method [Changing values of the Encapsulated property] : 
                                $iphone7plus-> changeLock("Shadi"); 
                                
                            // Trying to print the single property value will not be allwoed asnd present error : 
                                // echo $iphone7plus->lock; 
                                echo 'Trying to print the single property value will not be allwoed asnd present error-> due to the property is private' . '<br>' ; 
                                                                                                                
                            // Printing the var Dump Object[iphone6plus] after changing the Without Encapsulated variable : 
                                echo '<h3> The Object[iphone7plus] after using the method to change all properties [by Encapsulted Method] as following : </h3> <br>' ;
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
