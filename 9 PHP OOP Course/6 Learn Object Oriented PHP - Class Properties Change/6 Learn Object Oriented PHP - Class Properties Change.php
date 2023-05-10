<!--  6 Learn Object Oriented PHP - Class Properties Change --> 
<!-- =============================================================== -->


<?php
    
    $lessonName ='Class Properties';
    $title = '6 PHP5 - ' . $lessonName;
    $css = '6 Learn Object Oriented PHP - Class Properties Change.css';

    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName . "<br>";    
    // ============================================================================
        /* In this lesson will be (2) Application [Practical Exmpales of creating new class{with Public Properties} and objects {with Null + custoimized Properites Values}] :
        // 1- First Example {Apple Devices} => [Creating new Class {Apple Device with non default values of Properties} + (2)Object {iphone6plus with Customized Values}  + Printing Object var Dump] 
        // 2- Second Example {Apple Devices} => [Creating new Class {Apple Device with default values of Properties} + (2)Object {iphone6plus with Default Values}  + Printing Object var Dump] 
    */    
        
    
    $main =  'In this lesson will be (2) Application [Practical Exmpales of creating new class{with Public Properties} and objects {with Null + custoimized Properites Values}] :   as following  : ' . '<br>' . '<ul>' .
    '<li>' . 'First Example {Apple Devices} => [Creating new Class {Apple Device with non default values of Properties} + (2)Object {iphone6plus with Customized Values}  + Printing Object var Dump]' . '</li>' .     
    '<li>' . 'Second Example {Apple Devices} => [Creating new Class {Apple Device with default values of Properties} + (2)Object {iphone6plus with Default Values}  + Printing Object var Dump]' . '</li>' .     
    '</ul>';            
    // ============================================================================    

    // (*)=>  First Example {Apple Devices} => [Creating new Class [NON properties values] {Apple Device with non default values of Properties} + (2)Object {iphone6plus with Customized Values}  + Printing Object var Dump] :
        $ha1 = 'First Example {Apple Devices} => [Creating new Class [NON properties values] {Apple Device with Properties} + (2)Object {iphone6plus, iphone7plus with Null Values}  + Printing Object Dump] : as following : ' . "<br>" ; 

        // // Definging and Creating new Class [AppleDevice] {with default}: 
        //     class AppleDevice {                
        //         public $ram;
        //         public $space;
        //         public $color;
        //         public $inch;
        //     }
            
        // // Definging and Creating new (2) Objects : [iphone6plus] & [iphone7plus]  => from the class {AppleDevice} : 
        //     $iphone6plus = new AppleDevice();
        //     $iphone7plus = new AppleDevice(); 
        
        // // Changing/Assigning the propertries values (Customized Properites Values) of the Defined objects [iphone6plus]: 
        //     $iphone6plus ->ram = '2GB' ;
        //     $iphone6plus ->space = '128GB' ;
        //     $iphone6plus ->color = 'Gold' ;
        //     $iphone6plus ->inch = '4inch' ;                        
            
        // // Changing/Assigning the propertries values (Customized Properites Values) of the Defined objects [iphone7plus]: 
        //     $iphone7plus ->ram = '4GB' ;
        //     $iphone7plus ->space = '256GB' ;
        //     $iphone7plus ->color = 'Silver' ;
        //     $iphone7plus ->inch = '6inch' ;            
            
            
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
    // (*)=>  Second Example {Apple Devices} => [Creating new Class [Default properties values] {Apple Device with non default values of Properties} + (2)Object {iphone6plus with Customized Values}  + Printing Object var Dump] :
        $ha2 = 'Second Example {Apple Devices} => [Creating new Class [Default properties values] {Apple Device with Properties} + (2)Object {iphone6plus, iphone7plus with Null Values}  + Printing Object Dump] : as following : ' . "<br>" ; 

        // // Definging and Creating new Class [AppleDevice] {with default}: 
        //     class AppleDevice1 {                
        //         public $ram ='1GB';
        //         public $space ='64GB';
        //         public $color = 'Gold';
        //         public $inch = '1 Inch';
        //     }
            
        // // Definging and Creating new (2) Objects : [iphone6plus] & [iphone7plus]  => from the class {AppleDevice} : 
        //     $iphone6plus = new AppleDevice();
        //     $iphone7plus = new AppleDevice(); 
        
        // // Changing/Assigning the propertries values (Customized Properites Values) of the Defined objects [iphone6plus]: 
        //     $iphone6plus ->ram = '2GB' ;
        //     $iphone6plus ->space = '128GB' ;
        //     $iphone6plus ->color = 'Gold' ;
        //     $iphone6plus ->inch = '4inch' ;                        
            
        // // // Changing/Assigning the propertries values of the Defined objects [iphone7plus]: 
        // //     $iphone7plus ->ram = '4GB' ;
        // //     $iphone7plus ->space = '256GB' ;
        // //     $iphone7plus ->color = 'Silver' ;
        // //     $iphone7plus ->inch = '6inch' ;            
            
            
        // // Printing the var Dump Object[iphone6plus] (with Customized properties values) created from the class [AppleDevice] : 
        //     echo '<h3> The Object[iphone6plus] (with Customized properties values) created from the class [AppleDevice] as following : </h3> <br>' ;
        //     echo '<per>';            
        //     var_dump($iphone6plus);
        //     echo '</per>'. '<br>' . '<br>';            
        
        // // Printing the var Dump Object[iphone7plus] (with Default properties values) created from the class [AppleDevice] : 
        //     echo '<h3> The Object[iphone7plus] (with default Properties values) created from the class [AppleDevice] as following : </h3> <br>' ;
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

                <!-- (*) => First Example {Apple Devices} => [Creating new Class [NON properties values] {Apple Device with non default values of Properties} + (2)Object {iphone6plus with Customized Values}  + Printing Object var Dump]  : -->
                
                    <header>
                        First Example {Apple Devices} => [Creating new Class {Apple Device with Properties} + (2)Object {iphone6plus, iphone7plus with Null Values}  + Printing Object Dump] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1; ?>  </h1>  

                        <?php                                                                                                                                               

                            // Definging and Creating new Class [AppleDevice] {with default properties} : 
                                class AppleDevice {                
                                    public $ram;
                                    public $space;
                                    public $color;
                                    public $inch;
                                }
                                
                            // Definging and Creating new (2) Objects : [iphone6plus] & [iphone7plus]  => from the class {AppleDevice} : 
                                $iphone6plus = new AppleDevice();
                                $iphone7plus = new AppleDevice(); 
                            
                            // Changing/Assigning the propertries values (Customized Properites Values) of the Defined objects [iphone6plus] : 
                                $iphone6plus ->ram = '2GB' ;
                                $iphone6plus ->space = '128GB' ;
                                $iphone6plus ->color = 'Gold' ;
                                $iphone6plus ->inch = '4inch' ;                        
                                
                            // Changing/Assigning the propertries values (Customized Properites Values) of the Defined objects [iphone7plus] : 
                                $iphone7plus ->ram = '4GB' ;
                                $iphone7plus ->space = '256GB' ;
                                $iphone7plus ->color = 'Silver' ;
                                $iphone7plus ->inch = '6inch' ;            
                                
                                
                            // Printing the var Dump Object[iphone6plus] & Object[iphone6plus] created from the class [AppleDevice] : 
                                echo '<h3> The Object[iphone6plus] (Customized Properites Values) created from the class [AppleDevice] as following : </h3> <br>' ;
                                echo '<per>';            
                                var_dump($iphone6plus);
                                echo '</per>'. '<br>' . '<br>';            
                                
                                echo '<h3> The Object[iphone7plus] (Customized Properites Values) created from the class [AppleDevice] as following : </h3> <br>' ;
                                echo '<per>';            
                                var_dump($iphone7plus);
                                echo '</per>'. '<br>' . '<br>';            
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                                                                    
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                                                                                        

                <!-- (*) => Second Example {Apple Devices} => [Creating new Class [Default properties values] {Apple Device with non default values of Properties} + (2)Object {iphone6plus with Customized Values}  + Printing Object var Dump] : -->
                        
                    <header>
                        Second Example {Apple Devices} => [Creating new Class [Default properties values] {Apple Device with non default values of Properties} + (2)Object {iphone6plus with Customized Values}  + Printing Object var Dump] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha2; ?>  </h1>  

                        <?php                                                                                                                                               
                            // Definging and Creating new Class [AppleDevice1] {with default values} : 
                                class AppleDevice1 {                
                                    public $ram ='1GB';
                                    public $space ='64GB';
                                    public $color = 'Gold';
                                    public $inch = '1 Inch';
                                }

                            // Definging and Creating new (2) Objects : [iphone6plus] & [iphone7plus]  => from the class {AppleDevice} : 
                                $iphone6plus = new AppleDevice1();
                                $iphone7plus = new AppleDevice1(); 

                            // Changing/Assigning the propertries values (Customized Properites Values) of the Defined objects [iphone6plus] : 
                                $iphone6plus ->ram = '2GB' ;
                                $iphone6plus ->space = '128GB' ;
                                $iphone6plus ->color = 'Gold' ;
                                $iphone6plus ->inch = '4inch' ;                        
                            

                            // Printing the var Dump Object[iphone6plus] (with Customized properties values) created from the class [AppleDevice] : 
                                echo '<h3> The Object[iphone6plus] (with Customized properties values) created from the class [AppleDevice] as following : </h3> <br>' ;
                                echo '<per>';            
                                var_dump($iphone6plus);
                                echo '</per>'. '<br>' . '<br>';            

                            // Printing the var Dump Object[iphone7plus] (with Default properties values) created from the class [AppleDevice] : 
                                echo '<h3> The Object[iphone7plus] (with default Properties values) created from the class [AppleDevice] as following : </h3> <br>' ;
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
