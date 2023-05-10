    <!--  15 Learn Object Oriented PHP - Inheritance Final Keyword --> 
<!-- =============================================================== -->

<?php
    
    $lessonName ='Inheritance Final keyword';
    $title = '15 PHPOOP 5 - ' . $lessonName;
    $css = '15 Learn Object Oriented PHP - Inheritance Final Keyword.css';

    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName . "<br>";    
    // ============================================================================
        /* In this lesson will be (2) Applications [Practical Examples of Inheritance Final on Class Methods & properties :
        // 1- First Example  => Creating a [Final Class] with final keyword with normal [Non Final Method] 
        // 2- Second Example  => Creating a Final Class with final keyword with [Final] Method 
       */    
        
    
    $main =  'In this lesson will be (2) Applications [Practical Examples of Inheritance Final on Class Methods and properties : as following : ' . '<br>' . '<ul>' .
    '<li>' . 'First Example  => Creating a [Final Class] with final keyword with normal [Non Final Method] ' . '</li>' .         
    '<li>' . 'Second Example  => Creating a [Normal Non Final Class] has [Final Method] + Another Class Inherited from the Super Class ' . '</li>' .
    '</ul>';            
    // ============================================================================    

    // (*)=>  First Example  => Creating a [Final Class] with final keyword with [Non Final Method]  : 
            $ha1 = 'First Example  => Creating a [Final Class] with final keyword with normal [Non Final Method] : as following : ' . "<br>" ; 

            // // [Final] {FIRST - Super - Main - Parent CLASS } : Defining and Creating Class [AppleDevice] {with Non Final Method} : 
            //     final class AppleDevice {                                    

            //         // Defining Properites : 
            //             public $ram;
            //             public $space;
            //             public $color;
            //             public $inch;
                        
            //         // [NON Final Method]  within (using Parameter)  -> To [Welcome message Change one of Property value]:  
            //             public function sayHello($n) {
            //                 $this->name = $n;
            //                 echo 'Welcome to the ' . $n . " Created from the First Super Class [AppleDevice]" ;
            //             }                                                    
            //     }
                        
            // // --------------------------------------------------------------------
                        
            // // (First Object) : Defining and Creating new Object [iphone6plus] => from the class first {AppleDevice}  : 
            //     $iphone6plus = new AppleDevice();                
                        
            
            // // (First Object) : [iphone6plus]  => Processing the Main Method {sayHello} : 
            //     $iphone6plus-> sayHello("iphone 6 Plus"); 
            
                
            // // (First Object) : [iphone6plus]  => Printing the {object:iphone6plus} : 
            //     echo '<br>'. '<h3> The Object[iphone6plus] => [Creating from the Final Class] as following : </h3>' . '<br>' ;
            //     echo '<pre>';            
            //     print_r($iphone6plus);            
            //     echo '</pre>'. '<br>' . '<br>' . '<hr>';                                                                                

            //     echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";                
            
    // =================================================================================    
    
    // (*)=>  Second Example  => Creating a Final Class with final keyword with Normal [Final] Method : 
            $ha2 = 'Second Example  => Creating a Final Class with final keyword with [Final] Method : as following : ' . "<br>" ; 

            // // [Normal] {FIRST - Super - Main - Parent CLASS } : Defining and Creating Class [AppleDevice] with {Final Method} : 
            //     class AppleDevice1 {                                                    

            //         // Defining a Final Method :     
            //             final public function sayHello($n) {
            //                 $this->name = $n;
            //                 echo 'Welcome to the ' . $n . " Created from the Second Super Class [AppleDevice1]" ;
            //             }
                                                        
            //     }
            
            // // {SECOND - Child CLASS} : Inhireting a new Class [Sony2] from the old Class [AppleDevice1] WITH Final Inherited Method  : 
            //     class Sony1 extends AppleDevice1 {}
            // // --------------------------------------------------------------------
                        
            // // (First Object) : Defining and Creating new Object [iphone7plus] => from the class first {AppleDevice1}  : 
            //     $iphone7plus = new AppleDevice1();                                        
            
            // // (First Object) : [iphone7plus]  => Processing the Main Method {sayHello} : 
            //     $iphone7plus-> sayHello("iphone 7 Plus"); 
            
                
            // // (First Object) : [iphone7plus]  => Printing all contents of {object:iphone7plus} [After Processing the final Method] : 
            //     echo '<br>'. '<h3> The Object[iphone7plus] => Inherited from Class {AppleDevice1} [After Processing the final Method] => as following : </h3>' . '<br>' ;
            //     echo '<pre>';            
            //     print_r($iphone7plus);            
            //     echo '</pre>'. '<br>' . '<br>' . '<hr>';                                                                    
            // // --------------------------------------------------------------------                
                                
            // // (Second Object) : [sony1]  => Defining and Creating new Object from the second Inherited class {Sony1} : 
            //     $sony1 = new Sony1();
                        
            
            // // (Second Object) : [sony]  => Processing the Inherited Final Method {sayHello} : [After Processing the Final Method]  : 
            //     echo 'The Final Inherited Method is as Following: ' . '<br>';
            //     $sony1-> sayHello("Sony Plus"); 
        
                
            // // (Second Object) : [sony1]  => Printing all contents of {object:sony1} [After Processing the final Method] : 
            //     echo '<br>'. '<h3> The Object[sony1] created from Inherited Class {Sony1} [After Processing the final Method] =>  as following : </h3>' . '<br>' ;
            //     echo '<pre>';            
            //     print_r($sony1);
            //     echo '</pre>'. '<br>' . '<br>';                                                                                                                                                             

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
                html { 
                    background-color: lightgray;
                }
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

            <!-- (*) => First Example  => Creating a [Final Class] with final keyword with normal [Non Final Method] : -->
                
                    <header>
                        First Example  => Creating a [Final Class] with final keyword with normal [Non Final Method] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1; ?>  </h1>  

                        <?php                            
                            // [Final] {FIRST - Super - Main - Parent CLASS } : Defining and Creating Class [AppleDevice] {with Non Final Method} : 
                                final class AppleDevice {                                    

                                    // Defining Properites : 
                                        public $ram;
                                        public $space;
                                        public $color;
                                        public $inch;
                                        
                                    // [NON Final Method]  within (using Parameter)  -> To [Welcome message Change one of Property value]:  
                                        public function sayHello($n) {
                                            $this->name = $n;
                                            echo 'Welcome to the ' . $n . " Created from the First Super Class [AppleDevice]" ;
                                        }                                                    
                                }
                                        
                            // --------------------------------------------------------------------
                                        
                            // (First Object) : Defining and Creating new Object [iphone6plus] => from the class first {AppleDevice}  : 
                                $iphone6plus = new AppleDevice();                
                                        
                            
                            // (First Object) : [iphone6plus]  => Processing the Main Method {sayHello} : 
                                $iphone6plus-> sayHello("iphone 6 Plus"); 
                            
                                
                            // (First Object) : [iphone6plus]  => Printing the {object:iphone6plus} : 
                                echo '<br>'. '<h3> The Object[iphone6plus] => [Creating from the Final Class] as following : </h3>' . '<br>' ;
                                echo '<pre>';            
                                print_r($iphone6plus);            
                                echo '</pre>'. '<br>' . '<br>' . '<hr>';                                                                                

                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";                                                                                                                                   
                            
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->            
            
            <!-- (*) => Second Example  => Creating a [Non Final Class] with final keyword with [Final] Method + Inheriting new class from [Non Final Class] : -->
                
                    <header>
                        Second Example  => Creating a [Non Final Class]  with [Final Method] with final keyword + Inheriting new class from [Non Final Class] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha2; ?>  </h1>  

                        <?php                            
                            // [Normal] {FIRST - Super - Main - Parent CLASS } : Defining and Creating Class [AppleDevice] with {Final Method} : 
                                class AppleDevice1 {                                                    

                                    // Defining a Final Method :     
                                        final public function sayHello($n) {
                                            $this->name = $n;
                                            echo 'Welcome to the ' . $n . " Created from the Second Super Class [AppleDevice1]" ;
                                        }
                                                                        
                                }
                            
                            // {SECOND - Child CLASS} : Inhireting a new Class [Sony2] from the old Class [AppleDevice1] WITH Final Inherited Method  : 
                                class Sony1 extends AppleDevice1 {}
                            // --------------------------------------------------------------------
                                        
                            // (First Object) : Defining and Creating new Object [iphone7plus] => from the class first {AppleDevice1}  : 
                                $iphone7plus = new AppleDevice1();                                        
                            
                            // (First Object) : [iphone7plus]  => Processing the Main Method {sayHello} : 
                                $iphone7plus-> sayHello("iphone 7 Plus"); 
                            
                                
                            // (First Object) : [iphone7plus]  => Printing all contents of {object:iphone7plus} [After Processing the final Method] : 
                                echo '<br>'. '<h3> The Object[iphone7plus] => Inherited from Class {AppleDevice1} [After Processing the final Method] => as following : </h3>' . '<br>' ;
                                echo '<pre>';            
                                print_r($iphone7plus);            
                                echo '</pre>'. '<br>' . '<br>' . '<hr>';                                                                    
                            // --------------------------------------------------------------------                
                                                
                            // (Second Object) : [sony1]  => Defining and Creating new Object from the second Inherited class {Sony1} : 
                                $sony1 = new Sony1();
                                        
                            
                            // (Second Object) : [sony]  => Processing the Inherited Final Method {sayHello} : [After Processing the Final Method]  : 
                                echo 'The Final Inherited Method is as Following: ' . '<br>';
                                $sony1-> sayHello("Sony Plus"); 
                        
                                
                            // (Second Object) : [sony1]  => Printing all contents of {object:sony1} [After Processing the final Method] : 
                                echo '<br>'. '<h3> The Object[sony1] created from Inherited Class {Sony1} [After Processing the final Method] =>  as following : </h3>' . '<br>' ;
                                echo '<pre>';            
                                print_r($sony1);
                                echo '</pre>'. '<br>' . '<br>';                                                                                                                                                             

                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";                
                            
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->            

            </section>                                                                    
        </body>
    </html> 
