    <!--  17 Learn Object Oriented PHP - Class Abstraction Part 2 --> 
<!-- =============================================================== -->

<?php
    
    $lessonName ='Class Abstaraction Part 2';
    $title = '17 PHPOOP 5 - ' . $lessonName;
    $css = '17 Learn Object Oriented PHP - Class Abstraction Part 2.css';

    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName . "<br>";    
    // ============================================================================
        /* In this lesson will be (2) Applications [Advanced Examples and Best Practises of Abstracted Class & Abstracted Methods :
        // 1- First Example  => Best Practise for Inheriting a new Class from an [Abstracted Class] [With and Without Parameters]
        // 2- Second Example  => Best Practise for Inheriting a new Class from an [Abstracted Class] with [Diffrent levels of Security]
        */    
            
    $main =  'In this lesson will be (2) Applications [Advanced Examples and Best Practises of Abstracted Class & Abstracted Methods   : as following : ' . '<br>' . '<ul>' .
    '<li>' . 'First Example  => Best Practise for Inheriting a new Class from an [Abstracted Class] [With and Without Parameters] ' . '</li>' .         
    '<li>' . 'Second Example  => Best Practise for Inheriting a new Class from an [Abstracted Class] with [Diffrent levels of Security] ' . '</li>' .
    '</ul>';            
    // ============================================================================    

    // (*)=>  First Example  => Best Practise for Inheriting a new Class from an [Abstracted Class] [With and Without Parameters] :
            $ha1 = 'First Example  => Best Practise for Inheriting a new Class from an [Abstracted Class] [With and Without Parameters] : as following : ' . "<br>" ; 

            //     // Defining and Creating an [Abstraced Class] -> {MakeDevice] {Best Practise => with Abstracted Method - (without Method body) ONLY} : 
            //     abstract class MakeDevice {                 
                    
            //         // Defining [Abstracted Methods]  with and without (Parameter)  -> To [followed by the Extending Class's functionss] :  
            //         abstract public function testPerformance();
            //         abstract public function verifyOwner();
            //         abstract public function sayHello($n);
            //     }
                        
            // // --------------------------------------------------------------------

            // // Definging/Inheriting an [Extended Class] -> {AppleDevice} from the [Abstracted Class] -> {MakeDevice} => [without any Modifications Inside the Class]
            //     class Iphone extends MakeDevice {
            //         public $owner;
                                        
            //         public function testPerformance() {
            //             echo 'Your Iphone Test is Good ' . "<br>";
            //         }
                    
            //         public function verifyOwner() {
            //             echo 'Owner verfied!' . "<br>";
            //         }
                    
            //         public function sayHello($n) {                        
            //             $this-> owner = $n;
            //             echo 'Hello ' . $n . "<br>";
            //         }
            //     }       
                
            // // (First Object) : Defining and Creating new Object [iphone6plus] => from the Extended/Inherited class {Iphone} : 
            //     $iphone6plus = new Iphone();                

            // // (First Object) : [iphone6plus]  => Processing the Main Method {testPerformance} && {verifyOwner} && {sayHello} : 
            //     $iphone6plus-> testPerformance();
            //     $iphone6plus-> verifyOwner();
            //     $iphone6plus-> sayHello('Shadi - iphone6plus');
            
            // // --------------------------------------------------------------------                                            
            
            // // (First Object) : [iphone6plus]  => Printing the {object:iphone6plus} : 
            //     echo '<br>'. '<h3> The Object[iphone6plus] => [ Created Object from the Inherited class {Iphone} from the Abstracted Class {MakeDevice}] as following : </h3>' . '<br>' ;
            //     echo '<pre>';            
            //     print_r($iphone6plus);            
            //     echo '</pre>'. '<br>' . '<br>' . '<hr>';                                                                                

            //     echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";                
            
    // =================================================================================    
    
    // (*)=>  Second Example  => Best Practise for Inheriting a new Class from an [Abstracted Class] with [Diffrent levels of Security] : 
            $ha2 = 'Second Example  => Best Practise for Inheriting a new Class from an [Abstracted Class] with [Diffrent levels of Security] : as following : ' . "<br>" ; 
            
        //      // Defining and Creating an [Abstraced Class] -> {MakeDevice] {Best Practise => with Abstracted Method - (without Method body) ONLY} : 
        //      abstract class MakeDevice1 {                 
                    
        //         // Defining [Abstracted Methods] with [Different levels of Security]  -> To [followed by the Extending Class's functionss] :  
        //         abstract public function testPerformance();
        //         abstract protected function verifyOwner();
        //         abstract private function sayHello($n);
        //     }
                    
        // // --------------------------------------------------------------------

        // // Definging/Inheriting an [Extended Class] -> {AppleDevice} from the [Abstracted Class] -> {MakeDevice} => [without any Modifications Inside the Class]
        //     class Ipad extends MakeDevice1 {
        //         public $owner;
                                    
        //         public function testPerformance() {
        //             echo 'Your Iphone Test is Good' . "<br>";
        //         }
                
        //         public function verifyOwner() {
        //             echo 'Owner verfied!' . "<br>";
        //         }
                
        //         public function sayHello($n) {                        
        //             $this-> owner = $n;
        //             echo 'Hello ' . $n . "<br>";
        //         }
        //     }       
            
        // // (First Object) : Defining and Creating new Object [ipad3] => from the Extended/Inherited class {Ipad} : 
        //     $ipad3 = new Ipad();                

        // // (Second Object) : [ipad3]  => Processing the Main Method {testPerformance} && {verifyOwner} && {sayHello} : 
        //     $ipad3-> testPerformance();
        //     $ipad3-> verifyOwner();
        //     $ipad3-> sayHello('Shadi - ipad3');
                                    
        // // --------------------------------------------------------------------                                            
        
        // // (Second Object) : [ipad3]  => Printing the {object:ipad3} : 
        //     echo '<br>'. '<h3> The Object[ipad3] => [ Created Object from the Inherited class {Ipad3} from the Abstracted Class {MakeDevice}] as following : </h3>' . '<br>' ;
        //     echo '<pre>';            
        //     print_r($ipad3);            
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

                <!-- (*) => First Example  => Best Practise for Inheriting a new Class from an [Abstracted Class] [With and Without Parameters]  : -->
                
                    <header>
                        First Example  => Best Practise for Inheriting a new Class from an [Abstracted Class] [With and Without Parameters] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1; ?>  </h1>  

                        <?php                                                        

                                // Defining and Creating an [Abstraced Class] -> {MakeDevice] {Best Practise => with Abstracted Method - (without Method body) ONLY} : 
                                abstract class MakeDevice {                 
                                    
                                    // Defining [Abstracted Methods]  with and without (Parameter)  -> To [followed by the Extending Class's functionss] :  
                                    abstract public function testPerformance();
                                    abstract public function verifyOwner();
                                    abstract public function sayHello($n);
                                }
                                        
                            // --------------------------------------------------------------------

                                // Definging/Inheriting an [Extended Class] -> {AppleDevice} from the [Abstracted Class] -> {MakeDevice} => [without any Modifications Inside the Class]
                                class Iphone extends MakeDevice {
                                    public $owner;
                                                        
                                    public function testPerformance() {
                                        echo 'Your Iphone Test is Good ' . "<br>";
                                    }
                                    
                                    public function verifyOwner() {
                                        echo 'Owner verfied!' . "<br>";
                                    }
                                    
                                    public function sayHello($n) {                        
                                        $this-> owner = $n;
                                        echo 'Hello ' . $n . "<br>";
                                    }
                                }       
                                
                                // (First Object) : Defining and Creating new Object [iphone6plus] => from the Extended/Inherited class {Iphone} : 
                                $iphone6plus = new Iphone();                

                                // (First Object) : [iphone6plus]  => Processing the Main Method {testPerformance} && {verifyOwner} && {sayHello} : 
                                $iphone6plus-> testPerformance();
                                $iphone6plus-> verifyOwner();
                                $iphone6plus-> sayHello('Shadi - iphone6plus');
                            
                            // --------------------------------------------------------------------                                            
                            
                            // (First Object) : [iphone6plus]  => Printing the {object:iphone6plus} : 
                            echo '<br>'. '<h3> The Object[iphone6plus] => [ Created Object from the Inherited class {Iphone} from the Abstracted Class {MakeDevice}] as following : </h3>' . '<br>' ;
                            echo '<pre>';            
                            print_r($iphone6plus);            
                            echo '</pre>'. '<br>' . '<br>' . '<hr>';                                                                                

                        echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";                
                                            
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->            
            
            <!-- (*) => Second Example  => Best Practise for Inheriting a new Class from an [Abstracted Class] with [Different levels of Security] : -->
                
                    <header>
                        Second Example  => Best Practise for Inheriting a new Class from an [Abstracted Class] with [Different levels of Security] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha2; ?>  </h1>  

                        <?php                                                        

                            // Defining and Creating an [Abstraced Class] -> {MakeDevice] {Best Practise => with Abstracted Method - (without Method body) ONLY} : 
                            abstract class MakeDevice1 {                 
                                    
                                // Defining [Abstracted Methods] with [Different levels of Security]  -> To [followed by the Extending Class's functionss] :  
                                abstract public function testPerformance();
                                abstract protected function verifyOwner();
                                abstract protected function sayHello($n);
                            }
                                    
                        // --------------------------------------------------------------------

                        // Definging/Inheriting an [Extended Class] -> {AppleDevice} from the [Abstracted Class] -> {MakeDevice} => [without any Modifications Inside the Class]
                            class Ipad extends MakeDevice1 {
                                public $owner;
                                                    
                                public function testPerformance() {
                                    echo 'Your Iphone Test is Good' . "<br>";
                                }
                                
                                public function verifyOwner() {
                                    echo 'Owner verfied!' . "<br>";
                                }
                                
                                public function sayHello($n) {                        
                                    $this-> owner = $n;
                                    echo 'Hello ' . $n . "<br>";
                                }
                            }       
                            
                        // (Second Object) : Defining and Creating new Object [ipad3] => from the Extended/Inherited class {Ipad} : 
                            $ipad3 = new Ipad();                

                        // (Second Object) : [ipad3]  => Processing the Main Method {testPerformance} && {verifyOwner} && {sayHello} : 
                            $ipad3-> testPerformance();
                            $ipad3-> verifyOwner();
                            $ipad3-> sayHello('Shadi - ipad3');
                                                    
                        // --------------------------------------------------------------------                                            
                        
                        // (Second Object) : [ipad3]  => Printing the {object:ipad3} : 
                            echo '<br>'. '<h3> The Object[ipad3] => [ Created Object from the Inherited class {Ipad3} from the Abstracted Class {MakeDevice}] as following : </h3>' . '<br>' ;
                            echo '<pre>';            
                            print_r($ipad3);            
                            echo '</pre>'. '<br>' . '<br>' . '<hr>';                                                                                

                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";                
                        
                            
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->            

            </section>                                                                    
        </body>
    </html> 
