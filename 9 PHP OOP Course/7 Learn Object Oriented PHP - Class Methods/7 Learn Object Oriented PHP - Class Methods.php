<!--  7 Learn Object Oriented PHP - Class Methods --> 
<!-- =============================================================== -->


<?php
    
    $lessonName ='Class Methods';
    $title = '7 PHP5 - ' . $lessonName;
    $css = '7 Learn Object Oriented PHP - Class Methods.css';

    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName . "<br>";    
    // ============================================================================
        /* In this lesson will be (2) Application [Practical Examples of creating new class{with Public Properties} and objects {with Null + customized Properites Values}] :
        // 1- First Example {Apple Devices} => [Creating new Class {Apple Device with non default values of Properties} + (2)Object[iphone] {iphone6plus with Customized Values}  + Printing Object var Dump] 
        // 2- Second Example {User Registration } => [Creating new Class {with default values of Properties} + (2)Object[users] {User1 with Customized properties Values + User2 with Default properties Values }  + Printing Object var Dump] 
    */    
        
    
    $main =  'In this lesson will be (2) Application [Practical Exmpales of creating new class{with Public Properties} and objects {with Null + custoimized Properites Values}] :   as following  : ' . '<br>' . '<ul>' .
    '<li>' . 'First Example {Apple Devices} => [Creating new Class {Apple Device with non default values of Properties} + (2)Object[iphone] {iphone6plus with Customized Values}  + Printing Object var Dump] ' . '</li>' .     
    '<li>' . 'Second Example {User Registration } => [Creating new Class {with default values of Properties} + (2)Object[users] {User1 with Customized properties Values + User2 with Default properties Values }  + Printing Object var Dump]' . '</li>' .     
    '</ul>';            
    // ============================================================================    

    // (*)=>  First Example {Apple Devices} => [Creating new Class {Apple Device with non default values of Properties} + (2)Object[iphone] {iphone6plus with Customized Values}  + Printing Object var Dump] :
        $ha1 = 'First Example {Apple Devices} => [Creating new Class {Apple Device with non default values of Properties} + (2)Object[iphone] {iphone6plus with Customized Values}  + Printing Object var Dump] : as following : ' . "<br>" ; 

        // // Definging and Creating new Class [AppleDevice] {with default}: 
        //     class AppleDevice {                
        //         // Defining the Class properties :
        //         public $ram;
        //         public $space;
        //         public $color;
        //         public $inch;
                
        //         // Defining the Class Methods :
        //         public function dblPress() {                    
        //             echo '<h3> This Message from the First Class {AppleDevice} </h3>' . '<br>' ; 

        //             echo '<h4> You pressed the button twice ! </h4>' . '<br>' ; 
        //             echo '<p>This Feature is Not Available in this version ! </p>' . '<br>' ; 
        //         }

        //     }
            
        // // Definging and Creating new (2) Objects : [iphone6plus] & [iphone7plus]  => from the class {AppleDevice} : 
        //     $iphone6plus = new AppleDevice();
        //     $iphone7plus = new AppleDevice(); 
        

        // // Changing/Assigning the propertries values (Customized Properites Values) of the Defined objects [iphone6plus] => {First Object} : 
        //     $iphone6plus ->ram = '2GB' ;
        //     $iphone6plus ->space = '128GB' ;
        //     $iphone6plus ->color = 'Gold' ;
        //     $iphone6plus ->inch = '4inch' ; 
    
        // //  Calling the defined Method for the object [$ iphone6plus]}  => {First Object} : 
        //     $iphone6plus -> dblPress();            
        //     // -------------------------------------

        // // Changing/Assigning the propertries values (Customized Properites Values) of the Defined objects [iphone7plus] => {Second Object}: 
        //     $iphone7plus ->ram = '4GB' ;
        //     $iphone7plus ->space = '256GB' ;
        //     $iphone7plus ->color = 'Silver' ;
        //     $iphone7plus ->inch = '6inch' ;                        
        //     // -------------------------------------

        // // Printing the var Dump Object[iphone6plus] & Object[iphone6plus] created from the class [AppleDevice] : 
        //     echo '<h3> The Object[iphone6plus] created from the class [AppleDevice] as following : </h3> <br>' ;
        //     echo '<per>';            
        //     var_dump($iphone6plus);
        //     echo '</per>'. '<br>' . '<br>';            
            
        //     echo '<h3> The Object[iphone7plus] created from the class [AppleDevice] as following : </h3> <br>' ;
        //     echo '<per>';            
        //     var_dump($iphone7plus);
        //     echo '</per>'. '<br>' . '<br>';            
        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
            
    // =================================================================================                                                                                                                                                        
    
    // (*)=>  Second Example {User Registration } => [Creating new Class {with default values of Properties} + (2)Object[users] {User1 with Customized properties Values + User2 with Default properties Values}  + Printing Object var Dump] :
        $ha2 = 'Second Example {User Registration } => [Creating new Class {with default values of Properties} + (2)Object[users] {User1 with Customized properties Values + User2 with Default properties Values}  + Printing Object var Dump]  : as following : ' . "<br>" ; 

        // // Definging and Creating new Class [Registration] {with default properties values}: 
        //     class Registration {                
        //         public $userName ='Shadi';
        //         var $age ='33';
        //         public $password = '0055';
        //         public $email = 'shadi@gmail.com';
                
        //         public function Welcome() {                
        //             echo '<h3> This Message from the Second Class {Registration} </h3>' . '<br>' ; 
        //             echo 'Hello to Registration' ; 
        //         }
        //     }
            
        // // Definging and Creating new (2) Objects : [user1] & [user2]  => from the class {Registration} : 
        //     $user1 = new Registration ();
        //     $user2 = new Registration(); 
        
        // // Changing/Assigning the propertries values (Customized Properites Values) of the Defined objects => [First Object]: 
        //     $user1 -> userName = 'SHADI' ;
        //     $user1 -> age = '35' ;
        //     $user1 -> password = '11111' ;
        //     $user1 -> email = 'sayed@gmail.com' ; 
        
        // // Calling / Proccessing the Method for the [user1] object => {First Object}:   
        //     $user1 -> Welcome(); 
                                            
        // // Printing the var Dump Object[user1] (after editing it's Properties) created from the class [Registration] => {first Object} : 
        //     echo '<h3> The Object[user1] (after editing it\'s Properties) created from the class [Registration] as following : </h3> <br>' ;
        //     echo '<per>';            
        //     var_dump($user1);
        //     echo '</per>'. '<br>' . '<br>';            
        
        // // Printing the var Dump Object[user2] (with default Properties Values) created from the class [Registration] => {Second Object} : 
        //     echo '<h3> The Object[user2] (with default Properties Values) created from the class [Registration] as following : </h3> <br>' ;
        //     echo '<per>';             
        //     var_dump($user2);
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

                <!-- (*) => First Example {Apple Devices} => [Creating new Class {Apple Device with non default values of Properties} + (2)Object[iphone] {iphone6plus with Customized Values}  + Printing Object var Dump] : -->
                
                    <header>
                        First Example {Apple Devices} => [Creating new Class {Apple Device with non default values of Properties} + (2)Object[iphone] {iphone6plus with Customized Values}  + Printing Object var Dump] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1; ?>  </h1>  

                        <?php                                                                                                                                               

                            // Definging and Creating new Class [AppleDevice] {with default} : 
                                class AppleDevice {                
                                    // Defining the Class properties :
                                    public $ram;
                                    public $space;
                                    public $color;
                                    public $inch;
                                    
                                    // Defining the Class Methods :
                                    public function dblPress() {                    
                                        echo '<h3> This Message from the First Class {AppleDevice} </h3>' . '<br>' ; 

                                        echo '<h4> You pressed the button twice ! </h4>' . '<br>' ; 
                                        echo '<p>This Feature is Not Available in this version ! </p>' . '<br>' ; 
                                    }

                                }
                                
                            // Definging and Creating new (2) Objects : [iphone6plus] & [iphone7plus]  => from the class {AppleDevice} : 
                                $iphone6plus = new AppleDevice();
                                $iphone7plus = new AppleDevice(); 
                            

                            // Changing/Assigning the propertries values (Customized Properites Values) of the Defined objects [iphone6plus] => {First Object} : 
                                $iphone6plus ->ram = '2GB' ;
                                $iphone6plus ->space = '128GB' ;
                                $iphone6plus ->color = 'Gold' ;
                                $iphone6plus ->inch = '4inch' ; 
                        
                            //  Calling the defined Method for the object [$ iphone6plus]}  => {First Object} : 
                                $iphone6plus -> dblPress();            
                                // -------------------------------------

                            // Changing/Assigning the propertries values (Customized Properites Values) of the Defined objects [iphone7plus] => {Second Object} : 
                                $iphone7plus ->ram = '4GB' ;
                                $iphone7plus ->space = '256GB' ;
                                $iphone7plus ->color = 'Silver' ;
                                $iphone7plus ->inch = '6inch' ;                        
                                // -------------------------------------

                            // Printing the var Dump Object[iphone6plus] & Object[iphone7plus] created from the class [AppleDevice] : 
                                echo '<h3> The Object[iphone6plus] (With Customized properties values) => created from the class [AppleDevice] as following : </h3> <br>' ;
                                echo '<per>';            
                                var_dump($iphone6plus);
                                echo '</per>'. '<br>' . '<br>';            
                                
                                echo '<h3> The Object[iphone7plus] (With Customized properties values) => created from the class [AppleDevice] as following : </h3> <br>' ;
                                echo '<per>';            
                                var_dump($iphone7plus);
                                echo '</per>'. '<br>' . '<br>';            
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                                                                    
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                                                                                        

                <!-- (*) => Second Example {User Registration } => [Creating new Class {with default values of Properties} + (2)Object[users] {User1 with Customized properties Values + User2 with Default properties Values}  + Printing Object var Dump] : -->
                        
                    <header>
                        Second Example {User Registration } => [Creating new Class {with default values of Properties} + (2)Object[users] {User1 with Customized properties Values + User2 with Default properties Values}  + Printing Object var Dump] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha2; ?>  </h1>  

                        <?php                                                                                                                                               
                            // Definging and Creating new Class [Registration] {with default properties values} + {Simple Method} : 
                                class Registration {                
                                    public $userName ='Shadi';
                                    var $age ='33';
                                    public $password = '0055';
                                    public $email = 'shadi@gmail.com';
                                    
                                    public function Welcome() {                
                                        echo '<h3> This Message from the Second Class {Registration} </h3>' . '<br>' ; 
                                        echo 'Hello to Registration' ; 
                                    }
                                }
                                
                            // Definging and Creating new (2) Objects : [user1] & [user2]  => from the class {Registration} : 
                                $user1 = new Registration ();
                                $user2 = new Registration(); 
                            
                            // Changing/Assigning the propertries values (Customized Properites Values) of the Defined objects => [First Object] : 
                                $user1 -> userName = 'SHADI' ;
                                $user1 -> age = '35' ;
                                $user1 -> password = '11111' ;
                                $user1 -> email = 'sayed@gmail.com' ; 
                            
                            // Calling / Proccessing the Method for the [user1] object => {First Object} :   
                                $user1 -> Welcome(); 
                                                                
                            // Printing the var Dump Object[user1] (after editing it's Properties) created from the class [Registration] => {first Object} : 
                                echo '<h3> The Object[user1] (after editing it\'s Properties) created from the class [Registration] as following : </h3> <br>' ;
                                echo '<per>';            
                                var_dump($user1);
                                echo '</per>'. '<br>' . '<br>';            
                            
                            // Printing the var Dump Object[user2] (with default Properties Values) created from the class [Registration] => {Second Object} : 
                                echo '<h3> The Object[user2] (with default Properties Values) created from the class [Registration] as following : </h3> <br>' ;
                                echo '<per>';             
                                var_dump($user2);
                                echo '</per>'. '<br>' . '<br>';            
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                                                                        
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                                                                                        
            

            </section>
                                                                    
        </body>
    </html> 
