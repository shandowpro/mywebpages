    <!--  11 Learn Object Oriented PHP - Methods with Arguments Training --> 
<!-- =============================================================== -->

<?php
    
    $lessonName ='Methods with Arguments Training';
    $title = '11 PHPOOP 5 - ' . $lessonName;
    $css = '11 Learn Object Oriented PHP - Methods with Arguments Training.css';

    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName . "<br>";    
    // ============================================================================
        /* In this lesson will be (1) Application [Practical Examples of creating new class{with Public Properties} and objects {with Null + customized Properites Values}] :
        // 1- First Example  => Definig Class {AppleDevices} => [Creating new Class {Apple Device with non default values of Properties ()} + {(2) Constants + (2) Methods [using the Constant & $ this inside methnod] } +  (1)Object[iphone] {iphone6plus with Customized Values}  + Printing Object var Dump]        
       */    
        
    
    $main =  'In this lesson will be (1) Application [Practical Exmpales of {Setting a Method by using parameters + $ this variable} + {calling method outside class  : as following : ' . '<br>' . '<ul>' .
    '<li>' . 'First Example  => Changing all object properties by using a Method with parameters' . '</li>' .     
    '</ul>';            
    // ============================================================================    

    // // (*)=>  First Example  => Changing all object properties by using a Method with parameters : 
    //     $ha1 = 'First Example  => Changing all object properties by using a Method with parameters : as following : ' . "<br>" ; 

    //     // Defining and Creating new Class [AppleDevice] {with properties default}: 
    //         class AppleDevice {                
    //             // Defining the Class Properties Values :
    //                 public $ram = "2GB";
    //                 public $space = "64GB";
    //                 public $inch = "4 Inch";                    
    //                 public $color = "Silver";
                                
    //                 // Method (using Parameters) within the Method of -> To change all properties values :  
    //                 public function SetProps($ra, $sp, $in, $co) { 
    //                     $this-> ram = $ra;
    //                     $this-> space = $sp;
    //                     $this-> inch = $in;
    //                     $this-> color = $co;
    //                 }
    //         }
            
    //     // Defining and Creating new (2) Object : [iphone6plus] & [iphone7plus] => from the class {AppleDevice} : 
    //         $iphone6plus = new AppleDevice();
    //         $iphone7plus = new AppleDevice();
        
    //     // Processing the Method [Changing values of displaying all properties] : 
    //         $iphone6plus-> SetProps("4GB", "256GB" , "6 Inch", "Sliver"); 
        
        
    //     // Processing the Method [Changing values of displaying all properties] : 
    //         $iphone7plus-> SetProps("8GB", "128GB" , "8 Inch", "Gold"); 
                
                                    
    //     // Printing the var Dump Object[iphone6plus] after changing all properties: 
    //         echo '<h3> The Object[iphone6plus] after using the method to change all properties as following : </h3> <br>' ;
    //         echo '<per>';            
    //         var_dump($iphone6plus);            
    //         echo '</per>'. '<br>' . '<br>';                                    

    //     // Printing the solo Object[iphone6plus] properties after changing all values by method : 
    //         echo 'The mobile ram is: ' . $iphone6plus-> ram . '<br>';
    //         echo 'The mobile space is: ' . $iphone6plus-> space . '<br>';
    //         echo 'The mobile inch is: ' . $iphone6plus-> inch . '<br>';
    //         echo 'The mobile color is: ' . $iphone6plus-> color . '<br>';
    //         echo '<br>' . '<br>' . '<hr>';
        
    //     // Printing the var Dump Object[iphone7plus] after changing all properties: 
    //         echo '<h3> The Object[iphone7plus] after using the method to change all properties as following : </h3> <br>' ;
    //         echo '<per>';            
    //         var_dump($iphone7plus);            
    //         echo '</per>'. '<br>' . '<br>';                                    

    //     // Printing the solo Object[iphone7plus] properties after changing all values by method : 
    //         echo 'The mobile ram is: ' . $iphone7plus-> ram . '<br>';
    //         echo 'The mobile space is: ' . $iphone7plus-> space . '<br>';
    //         echo 'The mobile inch is: ' . $iphone7plus-> inch . '<br>';
    //         echo 'The mobile color is: ' . $iphone7plus-> color . '<br>';

    //     echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
            
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

                        // (*)=>  First Example  => Changing all object properties by using a Method with parameters : 
                            $ha1 = 'First Example  => Changing all object properties by using a Method with parameters : as following : ' . "<br>" ; 

                            // Defining and Creating new Class [AppleDevice] {with properties default} : 
                                class AppleDevice {                
                                    // Defining the Class Properties Values :
                                        public $ram = "2GB";
                                        public $space = "64GB";
                                        public $inch = "4 Inch";                    
                                        public $color = "Silver";
                                                    
                                        // Method (using Parameters) within the Method of -> To change all properties values :  
                                        public function SetProps($ra, $sp, $in, $co) { 
                                            $this-> ram = $ra;
                                            $this-> space = $sp;
                                            $this-> inch = $in;
                                            $this-> color = $co;
                                        }
                                }
                                
                            // Defining and Creating new (2) Object : [iphone6plus] & [iphone7plus] => from the class {AppleDevice} : 
                                $iphone6plus = new AppleDevice();
                                $iphone7plus = new AppleDevice();
                            
                            // Processing the Method [Changing values of displaying all properties] on the [First object] : 
                                $iphone6plus-> SetProps("4GB", "256GB" , "6 Inch", "Sliver"); 
                            
                            
                            // Processing the Method [Changing values of displaying all properties] on the [Second object] : 
                                $iphone7plus-> SetProps("8GB", "128GB" , "8 Inch", "Gold"); 
                                    
                                                        
                            // Printing the var Dump Object[iphone6plus] after changing all properties: 
                                echo '<h3> The Object[iphone6plus] after using the method to change all properties as following : </h3> <br>' ;
                                echo '<per>';            
                                var_dump($iphone6plus);            
                                echo '</per>'. '<br>' . '<br>';                                    

                            // Printing the solo Object[iphone6plus] properties after changing all values by method : 
                                echo 'The mobile ram is: ' . $iphone6plus-> ram . '<br>';
                                echo 'The mobile space is: ' . $iphone6plus-> space . '<br>';
                                echo 'The mobile inch is: ' . $iphone6plus-> inch . '<br>';
                                echo 'The mobile color is: ' . $iphone6plus-> color . '<br>';
                                echo '<br>' . '<br>' . '<hr>';
                            
                            // Printing the var Dump Object[iphone7plus] after changing all properties : 
                                echo '<h3> The Object[iphone7plus] after using the method to change all properties as following : </h3> <br>' ;
                                echo '<per>';            
                                var_dump($iphone7plus);            
                                echo '</per>'. '<br>' . '<br>';                                    

                            // Printing the solo Object[iphone7plus] properties after changing all values by method : 
                                echo 'The mobile ram is: ' . $iphone7plus-> ram . '<br>';
                                echo 'The mobile space is: ' . $iphone7plus-> space . '<br>';
                                echo 'The mobile inch is: ' . $iphone7plus-> inch . '<br>';
                                echo 'The mobile color is: ' . $iphone7plus-> color . '<br>';

                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";                                                    
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->

            </section>                                                                    
        </body>
    </html> 
