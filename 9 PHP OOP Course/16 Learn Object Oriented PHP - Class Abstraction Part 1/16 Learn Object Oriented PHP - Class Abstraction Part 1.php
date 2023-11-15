    <!--  16 Learn Object Oriented PHP - Class Abstraction Part 1 --> 
<!-- =============================================================== -->

<?php
    
    $lessonName ='Class Abstaraction Part 1';
    $title = '16 PHPOOP 5 - ' . $lessonName;
    $css = '16 Learn Object Oriented PHP - Class Abstraction Part 1.css';

    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName . "<br>";    
    // ============================================================================
        /* In this lesson will be (2) Applications [Practical Examples of Abstracted Class & Abstracted Methods :
        // 1- First Example  => Inheriting a new Class from an [Abstracted Class]  with [Non Abstracted Method] 
        // 2- Second Example  => Inheriting a new Class from an [Abstracted Class]  with [Abstracted Method]
       */    
        
    
    $main =  'In this lesson will be (2) Applications [Practical Examples of Abstracted Class & Abstracted Methods  : as following : ' . '<br>' . '<ul>' .
    '<li>' . 'First Example  => Inheriting a new Class from an [Abstracted Class]  with [Non Abstracted Method]  ' . '</li>' .         
    '<li>' . 'Second Example  => Inheriting a new Class from an [Abstracted Class]  with [Abstracted Method] ' . '</li>' .
    '</ul>';            
    // ============================================================================    

    // (*)=>  First Example  => Inheriting a new Class from an [Abstracted Class]  with [Non Abstracted Method] :
            $ha1 = 'First Example  => Inheriting a new Class from an [Abstracted Class]  with [Non Abstracted Method] : as following : ' . "<br>" ; 

            // //  Defining and Creating an [Abstraced Class] -> {MakeDevice] {with Non Abstracted Method} : 
            //     abstract class MakeDevice {                                    

            //     // Defining Properites : 
            //         public $ram;
            //         public $space;
            //         public $color;
            //         public $inch;
                    
            //     // Defining [NON Abstracted Method]  with (using Parameter)  -> To [Welcome message Change one of Property value] :  
            //         public function sayHello($n) {
            //             $this->name = $n;
            //             echo 'This is a Method from the {Non Abstraced Method} :' .  '<br>' .
            //              'Welcome to the [' . $n . "] Created from the non Abstraced Method {SayHello()} in First Abstracted Class [MakeDevice]" ;
            //         }                                                    
            //     }
                        
            // // --------------------------------------------------------------------

            // // Definging/Inheriting an [Extended Class] -> {AppleDevice} from the [Abstracted Class] -> {MakeDevice} => [without any Modifications Inside the Class]
            //     class AppleDevice extends MakeDevice {
            //     }
                            
            // // --------------------------------------------------------------------                                            
            // // (First Object) : Defining and Creating new Object [iphone6plus] => from the Extended/Inherited class {AppleDevice}  : 
            //     $iphone6plus = new AppleDevice();                
                        
            
            // // (First Object) : [iphone6plus]  => Processing the Main Method {sayHello} : 
            //     $iphone6plus-> sayHello("iphone6Plus"); 
            
                
            // // (First Object) : [iphone6plus]  => Printing the {object:iphone6plus} : 
            //     echo '<br>'. '<h3> The Object[iphone6plus] => [ Created Object from the Inhrited class {AppleDevice} from the Abstracted Class {MakeDevice}] as following : </h3>' . '<br>' ;
            //     echo '<pre>';            
            //     print_r($iphone6plus);            
            //     echo '</pre>'. '<br>' . '<br>' . '<hr>';                                                                                

            //     echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";                
            
    // =================================================================================    
    
    // (*)=>  Second Example  => Inheriting a new Class from an [Abstracted Class]  with [Abstracted Method] : 
            $ha2 = 'Second Example  => Inheriting a new Class from an [Abstracted Class]  with [Abstracted Method] : as following : ' . "<br>" ; 
            
            // //  Defining and Creating an [Abstraced Class] -> {MakeDevice1} with {Abstracted Method} : 
            //     abstract class MakeDevice1 {                                    

            //     // Defining Properites : 
            //         public $ram;
            //         public $space;
            //         public $color;
            //         public $inch;
                    
            //     // Defining [Abstracted Method]  with (using Parameter) & (without function body) -> To [be reused in another class] :  
            //         abstract public function sayHello1($n);
            //     }
                
            //     // --------------------------------------------------------------------

            //     // Definging/Inheriting an [Extended Class] -> {AppleDevice1} from the [Abstracted Class1] -> {MakeDevice1}
            //     class AppleDevice1 extends MakeDevice1 {
                    
            //         //  Using the Abstracted Method in the Extended Class after Inheriting :
            //         public function sayHello1 ($n) {                        
            //             $this->name = $n;
            //             echo 'This is a [Abstracted Method] Used after Inheriting from the {Abstraced Class} :' .  '<br>' .
            //              'Welcome to the [' . $n . "] Created from the Abstraced Method {SayHello1()} in First Abstracted Class [MakeDevice1]" ;
            //         }
            //     }
                            
            // // --------------------------------------------------------------------                                            
            // // (First Object) : Defining and Creating new Object [iphone6plus1] => from the Extended/Inherited class {AppleDevice1}  : 
            //     $iphone6plus1 = new AppleDevice1();                
                        
            
            // // (First Object) : [iphone6plus1]  => Processing the Main  Abstracted Method {sayHello1} : 
            //     $iphone6plus1-> sayHello1("iphone6Plus1"); 
            
                
            // // (First Object) : [iphone6plus1]  => Printing the {object:iphone6plus1} : 
            //     echo '<br>'. '<h3> The Object [iphone6plus1] => [ Created Object from the Inhrited class {AppleDevice1} from the Abstracted Class {MakeDevice1}] as following : </h3>' . '<br>' ;
            //     echo '<pre>';            
            //     print_r($iphone6plus1);            
            //     echo '</pre>'. '<br>' . '<br>' . '<hr>';                                                                                

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

            <!-- (*) => First Example  => Inheriting a new Class from an [Abstracted Class]  with [Non Abstracted Method]  : -->
                
                    <header>
                        First Example  => Creating a [Final Class] with final keyword with normal [Non Final Method] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1; ?>  </h1>  

                        <?php                                                        
                            //  Defining and Creating an [Abstraced Class] -> {MakeDevice] {with Non Abstracted Method} : 
                                abstract class MakeDevice {                                    

                                    // Defining Properites : 
                                        public $ram;
                                        public $space;
                                        public $color;
                                        public $inch;
                                        
                                    // Defining [NON Abstracted Method]  with (using Parameter)  -> To [Welcome message Change one of Property value]:  
                                        public function sayHello($n) {
                                            $this->name = $n;
                                            echo 'This is a Method from the {Non Abstraced Method} :' .  '<br>' .
                                            'Welcome to the [' . $n . "] Created from the non Abstraced Method {SayHello()} in First Abstracted Class [MakeDevice]" ;
                                        }                                                    
                                    }
                                            
                                // --------------------------------------------------------------------
                                // Definging/Inheriting an [Extended Class] -> {AppleDevice} from the [Abstracted Class] -> {MakeDevice}
                                    class AppleDevice extends MakeDevice {
                                    }
                                                
                                // --------------------------------------------------------------------                                            
                                // (First Object) : Defining and Creating new Object [iphone6plus] => from the Extended/Inherited class {AppleDevice}  : 
                                    $iphone6plus = new AppleDevice();                
                                            
                                
                                // (First Object) : [iphone6plus]  => Processing the Main Method {sayHello} : 
                                    $iphone6plus-> sayHello("iphone6Plus"); 
                                
                                    
                                // (First Object) : [iphone6plus]  => Printing the {object:iphone6plus} : 
                                    echo '<br>'. '<h3> The Object[iphone6plus] => [ Created Object from the Inhrited class {AppleDevice} from the Abstracted Class {MakeDevice}] as following : </h3>' . '<br>' ;
                                    echo '<pre>';            
                                    print_r($iphone6plus);            
                                    echo '</pre>'. '<br>' . '<br>' . '<hr>';                                                                                
                    
                                echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";                
                
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->            
            
            <!-- (*) => Second Example  => Inheriting a new Class from an [Abstracted Class]  with [Abstracted Method]  : -->
                
                    <header>
                        Second Example  => Inheriting a new Class from an [Abstracted Class]  with [Abstracted Method] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha2; ?>  </h1>  

                        <?php                                                        
                            //  Defining and Creating an [Abstraced Class] -> {MakeDevice1} with {Abstracted Method} : 
                                abstract class MakeDevice1 {                                    

                                // Defining Properites : 
                                    public $ram;
                                    public $space;
                                    public $color;
                                    public $inch;
                                    
                                // Defining [Abstracted Method]  with (using Parameter) & (without function body) -> To [be reused in another class]:  
                                    abstract public function sayHello1($n);
                                }
                                
                                // --------------------------------------------------------------------
                    
                                // Definging/Inheriting an [Extended Class] -> {AppleDevice1} from the [Abstracted Class1] -> {MakeDevice1}
                                class AppleDevice1 extends MakeDevice1 {
                                    
                                    //  Using the Abstracted Method in the Extended Class after Inheriting :
                                    public function sayHello1 ($n) {                        
                                        $this->name = $n;
                                        echo 'This is a [Abstracted Method] Used after Inheriting from the {Abstraced Class} :' .  '<br>' .
                                        'Welcome to the [' . $n . "] Created from the Abstraced Method {SayHello1()} in First Abstracted Class [MakeDevice1]" ;
                                    }
                                }
                                                
                                // --------------------------------------------------------------------                                            
                                // (First Object) : Defining and Creating new Object [iphone6plus1] => from the Extended/Inherited class {AppleDevice1}  : 
                                    $iphone6plus1 = new AppleDevice1();                
                                            
                                
                                // (First Object) : [iphone6plus1]  => Processing the Main  Abstracted Method {sayHello1} : 
                                    $iphone6plus1-> sayHello1("iphone6Plus1"); 
                                
                                    
                                // (First Object) : [iphone6plus1]  => Printing the {object:iphone6plus1} : 
                                    echo '<br>'. '<h3> The Object [iphone6plus1] => [ Created Object from the Inhrited class {AppleDevice1} from the Abstracted Class {MakeDevice1}] as following : </h3>' . '<br>' ;
                                    echo '<pre>';            
                                    print_r($iphone6plus1);            
                                    echo '</pre>'. '<br>' . '<br>' . '<hr>';                                                                                
            
                                echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";                   
                            
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->            

            </section>                                                                    
        </body>
    </html> 
