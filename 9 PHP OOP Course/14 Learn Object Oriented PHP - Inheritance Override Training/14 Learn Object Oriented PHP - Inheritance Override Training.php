    <!--  14 Learn Object Oriented PHP - Inheritance Override Training --> 
<!-- =============================================================== -->

<?php
    
    $lessonName ='Inheritance Override';
    $title = '14 PHPOOP 5 - ' . $lessonName;
    $css = '14 Learn Object Oriented PHP - Inheritance Override Training.css';

    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName . "<br>";    
    // ============================================================================
        /* In this lesson will be (1) Applications [Practical Examples of Inheritance Overriding on Class Methods and properties :
        // 1- First Example  => Overriding on the Inherited a Methods and properties with in the new Class        
       */    
        
    
    $main =  'In this lesson will be (1) Applications [Practical Examples of Inheritance Overriding on Class Methods and properties : as following : ' . '<br>' . '<ul>' .
    '<li>' . 'First Example  => Overriding on the Inherited a Methods and properties with in the new Class' . '</li>' .         
    '</ul>';            
    // ============================================================================    

    // (*)=>  First Example  => Overriding on the Inherited a Methods and properties with in the new Class : 
            $ha1 = 'First Example  => Overriding on the Inherited a Methods and properties with in the new Class : as following : ' . "<br>" ; 

            // // {FIRST - Super - Main - Parent CLASS } : Defining and Creating Class [AppleDevice] {with properties default}: 
            //     class AppleDevice {                
            //         // Defining the Class Properties Values :
            //             public $ram = "2GB";
            //             public $space = "64GB";
            //             public $inch = "4 Inch";                    
            //             public $color = "Silver";

            //             public function sayHello($n) {
            //                 $this->name = $n;
            //                 echo 'Welcome to the ' . $n ;
            //             }
                                    
            //         // Method (using Parameters) within the Method of -> To [Change and Displaying all Properties values]:  
            //             // public function changeSpecs($ra , $sp, $in, $co) {
            //             //     $this-> ram = $ra;
            //             //     $this-> space = $sp;
            //             //     $this-> inch = $in;
            //             //     $this-> color = $co;
            //             //     $this-> Price = "$ 100"; 
            //             // }
            //     }
            
            // // {SECOND - Child CLASS} : Inhireting a new Class [Sony] from the old Class [AppleDevice]  & Overriding on the inherited method : 
            //     class Sony extends AppleDevice {
            //         // Properties : 
            //             public $name;
                                        
            //         // Methods Inheritance with overriding : 
            //             public function sayHello($n) {
            //                 $this->name = $n;
            //                 echo 'Welcome to the ' . $n . " your Ram is " . $this->ram ;
            //             }

            //     }
            // // --------------------------------------------------------------------
                        
            // // (First Object) : Defining and Creating new Object [iphone6plus] => from the class first {AppleDevice}  : 
            //     $iphone6plus = new AppleDevice();                
            
            // // (First Object) : [iphone6plus]  => Adding new Solo property for this Object {Direct way} [out of the class range {AppleDevice}] : 
            //     $iphone6plus-> price = "$ 100"; 
            
            // // (First Object) : [iphone6plus]  => Processing the Main Method {sayHello} : 
            //     $iphone6plus-> sayHello("iphone 6 Plus"); 
            
                
            // // (First Object) : [iphone6plus]  => Printing all properties of {object:iphone6plus} [after adding a solo property] : 
            //     echo '<br>'. '<h3> The Object[iphone6plus] => [after adding a solo property] as following : </h3>' . '<br>' ;
            //     echo '<pre>';            
            //     print_r($iphone6plus);            
            //     echo '</pre>'. '<br>' . '<br>' . '<hr>';                                                                    
            // // --------------------------------------------------------------------                
                                
            // // (Second Object) : [sony]  => Defining and Creating new Object from the second class {Sony} : 
            //     $sony = new Sony();
            
            // // (Second Object) : [sony]  => Adding new Solo property for this Object {Direct way} [out of the class range {Sony}] : 
            //     $sony-> software = "Andriod"; 
            
            // // (Second Object) : [sony]  => Processing the Inherited Method {sayHello} : [with overriding the Inherited Method]  : 
            //     $sony-> sayHello("Sony"); 
        
                
            // // (Second Object) : [sony]  => Printing all properties of {object:sony} [after adding a solo property] : 
            //     echo '<br>'. '<h3> The Object[sony] Inherited from Class {Sony} [after adding a solo property] =>  as following : </h3>' . '<br>' ;
            //     echo '<pre>';            
            //     print_r($sony);
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

            <!-- (*) => First Example  => Inheriting a Class with no addition properties or Methods with in the new Class : -->
                
                    <header>
                        First Example  => Inheriting a Class with no addition properties or Methods with in the new Class: <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1; ?>  </h1>  

                        <?php                                                                                                                                               
                            // {FIRST - Super - Main - Parent CLASS } : Defining and Creating Class [AppleDevice] {with properties default} : 
                                class AppleDevice {                
                                    // Defining the Class Properties Values :
                                        public $ram = "2GB";
                                        public $space = "64GB";
                                        public $inch = "4 Inch";                    
                                        public $color = "Silver";

                                    // Method (using ONE Parameter + Adding new property by SOLO Method) within the Method of -> To [Welcome Message with Parameter] :  
                                        public function sayHello($n) {
                                            $this->name = $n;
                                            echo 'Welcome to the ' . $n ;
                                        }
                                                    
                                    // Method (using Parameters) within the Method of -> To [Change and Displaying all Properties values]:  
                                        // public function changeSpecs($ra , $sp, $in, $co) {
                                        //     $this-> ram = $ra;
                                        //     $this-> space = $sp;
                                        //     $this-> inch = $in;
                                        //     $this-> color = $co;
                                        //     $this-> Price = "$ 100"; 
                                        // }
                                }
                            
                            // {SECOND - Child CLASS} : Inhireting a new Class [Sony] from the old Class [AppleDevice]  & Overriding on the inherited method : 
                                class Sony extends AppleDevice {
                                    // Properties [new Property] : 
                                        public $name;
                                                        
                                    // Methods Inheritance with overriding [Adding new Contents] : 
                                        public function sayHello($n) {
                                            $this->name = $n;
                                            echo 'Welcome to the ' . $n . " your Ram is " . $this->ram ;
                                        }
                                }
                            // --------------------------------------------------------------------
                                        
                            // (First Object) : Defining and Creating new Object [iphone6plus] => from the class first {AppleDevice}  : 
                                $iphone6plus = new AppleDevice();                
                            
                            // (First Object) : [iphone6plus]  => Adding new [Solo property] for this Object {Direct way} [out of the class range {AppleDevice}] : 
                                $iphone6plus-> price = "$ 100"; 
                            
                            // (First Object) : [iphone6plus]  => Processing the Main Method {sayHello} : 
                                $iphone6plus-> sayHello("iphone 6 Plus"); 
                            
                                
                            // (First Object) : [iphone6plus]  => Printing all properties of {object:iphone6plus} [after adding a solo property] : 
                                echo '<br>'. '<h3> The Object[iphone6plus] => [after adding a solo property] as following : </h3>' . '<br>' ;
                                echo '<pre>';            
                                print_r($iphone6plus);            
                                echo '</pre>'. '<br>' . '<br>' . '<hr>';                                                                    
                            // --------------------------------------------------------------------                
                                                
                            // (Second Object) : [sony]  => Defining and Creating new Object from the second class {Sony} : 
                                $sony = new Sony();
                            
                            // (Second Object) : [sony]  => Adding new [Solo property] for this Object {Direct way} [out of the class range {Sony}] : 
                                $sony-> software = "Andriod"; 
                            
                            // (Second Object) : [sony]  => Processing the Inherited Method {sayHello} : [with overriding the Inherited Method]  : 
                                $sony-> sayHello("Sony");                         
                                
                            // (Second Object) : [sony]  => Printing all properties of {object:sony} [after adding a solo property] : 
                                echo '<br>'. '<h3> The Object[sony] Inherited from Class {Sony} [after adding a solo property] =>  as following : </h3>' . '<br>' ;
                                echo '<pre>';            
                                print_r($sony);
                                echo '</pre>'. '<br>' . '<br>';                                                                                                                                                             

                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";                
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->            

            </section>                                                                    
        </body>
    </html> 
