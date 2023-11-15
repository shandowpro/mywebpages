    <!--  13 Learn Object Oriented PHP - Inheritance --> 
<!-- =============================================================== -->


<?php
    
    $lessonName ='Inheritance';
    $title = '13 PHPOOP 5 - ' . $lessonName;
    $css = '13 Learn Object Oriented PHP - Inheritance.css';

    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName . "<br>";    
    // ============================================================================
        /* In this lesson will be (2) Applications [Practical Examples of Inheriting a Class properties and methods to another class, and the abilty to add new properites and Methods :         
        // 1- First Example  => Inheriting a Class with no addition properties or Methods with in the new Class
        // 2- Second Example  => Inheriting a Class with addition properties or Methods with in the new Class   
       */    
        
    
    $main =  'In this lesson will be (2) Applications [Practical Examples of creating new class with [(Property) (Method : changing lock value)] && and (2) Objects: {Incriptred + Encapsulated} : as following : ' . '<br>' . '<ul>' .
    '<li>' . 'First Example  => Inheriting a Class with NO addition properties or Methods with in the new Class' . '</li>' .     
    '<li>' . 'Second Example  => Inheriting a Class with addition properties or Methods with in the new Class' . '</li>' .     
    '</ul>';            
    // ============================================================================    

    // (*)=>  First Example  => Inheriting a Class with no addition properties or Methods with in the new Class : 
            $ha1 = 'First Example  => Inheriting a Class with no addition properties or Methods with in the new Class : as following : ' . "<br>" ; 

            // // {FIRST CLASS} : efining and Creating Class [AppleDevice] {with properties default}: 
            //     class AppleDevice {                
            //         // Defining the Class Properties Values :
            //             public $ram = "2GB";
            //             public $space = "64GB";
            //             public $inch = "4 Inch";                    
            //             public $color = "Silver";
                                    
            //         // Method (using Parameters) within the Method of -> To [Change and Displaying all Properties values]:  
            //             public function DisplayData($ra , $sp, $in, $co) {
            //                 $this-> ram = $ra;
            //                 $this-> space = $sp;
            //                 $this-> inch = $in;
            //                 $this-> color = $co;
            //             }
            //     }
            
            // // {SECOND CLASS} : Inhireting a new Class [Sony] from the old Class [AppleDevice]: 
            //     class Sony extends AppleDevice {}
            // // --------------------------------------------------------------------
                        
            // // (First Object) : [iphone6plus]  => Defining and Creating new Object from the class first {AppleDevice} : 
            //     $iphone6plus = new AppleDevice();                
            
            // // (First Object) : [iphone6plus]  => Processing the Old Method {DisplayData} : [Changing and Displaying all properties] : 
            //     $iphone6plus-> DisplayData("4GB", "128GB" , "6 Inch" , "Gold"); 
            
                
            // // (First Object) : [iphone6plus]  => Printing all properties of {object:iphone6plus} after changing by method [Changing and Displaying all properties] : 
            //     echo '<br>'. '<h3> The Object[iphone6plus] after using the [Old Method] to change all properties ->  as following : </h3>' . '<br>' ;
            //     echo '<pre>';            
            //     print_r($iphone6plus);            
            //     echo '</pre>'. '<br>' . '<br>' . '<hr>';                                                                    
            // // --------------------------------------------------------------------
                
                                
            // // (Second Object) : [sony]  => Defining and Creating new Object from the class {Sony} : 
            //     $sony = new Sony();
            
            // // (Second Object) : [sony]  => Processing the Inherited Method {DisplayData} : [Changing and Displaying all properties] {The Inherited Method} : 
            //     $sony-> DisplayData("4GB", "128GB" , "6 Inch" , "Gold"); 
        
                
            // // (Second Object) : [sony]  => Printing all properties of {object:sony} after changing by method [Changing and Displaying all properties] : 
            //     echo '<br>'. '<h3> The Object[sony] Inherited from Class {Sony} after using the [Inherited Method] to change all properties ->  as following : </h3>' . '<br>' ;
            //     echo '<pre>';            
            //     print_r($sony);
            //     echo '</pre>'. '<br>' . '<br>';                                                                                                                                                             

            //     echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        
    // =================================================================================    
    
    // (*)=>  Second Example  => Inheriting a Class with addition properties or Methods with in the new Class : 
            
        $ha2 = ' Second Example  => Inheriting a Class with addition properties or Methods with in the new Class : as following : ' . "<br>" ; 
            
        //     // {FIRST CLASS} =>  Defining and Creating Class [AppleDevice] {with properties default}: 
        //     class AppleDevice1 {                
        //         // Defining the Class Properties Values :
        //             public $ram = "2GB";
        //             public $space = "64GB";
        //             public $inch = "4 Inch";                    
        //             public $color = "Silver";
                                
        //         // Method (using Parameters) within the Method of -> To [Change and Displaying all Properties values]:  
        //             public function DisplayData($ra , $sp, $in, $co) {
        //                 $this-> ram = $ra;
        //                 $this-> space = $sp;
        //                 $this-> inch = $in;
        //                 $this-> color = $co;
        //             }
        //     }
        
        //     // {SECOND CLASS} =>  Inhireting a new Class [Sony1] from the old Class [AppleDevice1]: 
        //     class Sony1 extends AppleDevice1 {
        //         // Adding new Properites :
        //             public $screen = "LCD"; 
                
        //         // Adding new Methods :
        //             public function DisplayProps($ra , $sp, $in, $co, $sc) {
        //                 $this-> ram = $ra;
        //                 $this-> space = $sp;
        //                 $this-> inch = $in;
        //                 $this-> color = $co;
        //                 $this-> secreen = $sc;
        //             }        
        //     }
        //     // ----------------------------------------------------------------

            
        // // (First Object) : [iphone7plus]  => Defining and Creating new  from the class {AppleDevice1} : 
        //     $iphone7plus = new AppleDevice1();                
        
        // // (First Object) : [iphone7plus]  => Processing the Old Method {DisplayData} : [Changing and Displaying all properties ] : 
        //     $iphone7plus-> DisplayData("8GB", "256GB" , "8 Inch" , "Silver"); 
        
            
        // // (First Object) : [iphone7plus]  => Printing all properties of {object:iphone7plus} after changing by method [Changing and Displaying all properties] : 
        //     echo '<br>'. '<h3> The Object[iphone7plus] created from Class [AppleDevcie1] after using the [Old Method] to change all properties ->  as following : </h3>' . '<br>' ;
        //     echo '<pre>';            
        //     print_r($iphone7plus);            
        //     echo '</pre>'. '<br>' . '<br>' . '<hr>';                                                                    
        //     // --------------------------------------------------------------------
            
                            
        // // (Second Object) : [sony]  => Defining and Creating new  from the class {Sony} : 
        //     $sony1 = new Sony1();                
        
        // // (Second Object) : [sony]  => Processing the Inherited Method {DisplayData} : [Changing and Displaying all properties ] : 
        //     $sony1-> DisplayData("16GB", "512GB" , "10 Inch" , "Blue");  
        
        // // (Second Object) : [sony]  => Printing all properties of {object:sony} after changing by method {DisplayData} : [Changing and Displaying all properties] : 
        //     echo '<br>'. '<h3> The Object[sony1] Inherited from Class {Sony1} after using the [Inherited Method] to change all properties ->  as following : </h3>' . '<br>' ;
        //     echo '<pre>';            
        //     print_r($sony1);
        //     echo '</pre>'. '<br>' . '<br>';                                                                                                                                                             
            
            
        // // (Second Object) : [sony]  => Processing the New Method {DisplayProps} : [Changing and Displaying all properties ] : 
        //     $sony1-> DisplayProps("16GB", "512GB" , "10 Inch" , "Blue" , "HD"); 

        //     // (Second Object) : [sony]  => Printing all properties of {object:sony} after changing by method {DisplayProps} : [Changing and Displaying all properties] : 
        //         echo '<br>'. '<h3> The Object[sony1] Inherited from Class {Sony1} after using the [New Method] to change all properties ->  as following : </h3>' . '<br>' ;
        //         echo '<pre>';            
        //         print_r($sony1);
        //         echo '</pre>'. '<br>' . '<br>';                                                                                                                                                             
            

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

                            // {FIRST CLASS} : efining and Creating Class [AppleDevice] {with properties default} : 
                            class AppleDevice {                
                                // Defining the Class Properties Values :
                                    public $ram = "2GB";
                                    public $space = "64GB";
                                    public $inch = "4 Inch";                    
                                    public $color = "Silver";
                                                
                                // Method (using Parameters) within the Method of -> To [Change and Displaying all Properties values] :  
                                    public function DisplayData($ra , $sp, $in, $co) {
                                        $this-> ram = $ra;
                                        $this-> space = $sp;
                                        $this-> inch = $in;
                                        $this-> color = $co;
                                    }
                            }
                        
                            // {SECOND CLASS} : Inhireting a new Class [Sony] from the old Class [AppleDevice] : 
                                class Sony extends AppleDevice {}
                            // --------------------------------------------------------------------
                                        
                            // (First Object) : [iphone6plus]  => Defining and Creating new Object from the class first {AppleDevice} : 
                                $iphone6plus = new AppleDevice();                
                            
                            // (First Object) : [iphone6plus]  => Processing the Old Method {DisplayData} : [Changing and Displaying all properties] : 
                                $iphone6plus-> DisplayData("4GB", "128GB" , "6 Inch" , "Gold"); 
                            
                                
                            // (First Object) : [iphone6plus]  => Printing all properties of {object:iphone6plus} after changing by method [Changing and Displaying all properties] : 
                                echo '<br>'. '<h3> The Object[iphone6plus] after using the [Old Method] to change all properties ->  as following : </h3>' . '<br>' ;
                                echo '<pre>';            
                                print_r($iphone6plus);            
                                echo '</pre>'. '<br>' . '<br>' . '<hr>';                                                                    
                            // --------------------------------------------------------------------
                                
                                                
                            // (Second Object) : [sony]  => Defining and Creating new Object from the class {Sony} : 
                                $sony = new Sony();
                            
                            // (Second Object) : [sony]  => Processing the Inherited Method {DisplayData} : [Changing and Displaying all properties] {The Inherited Method} : 
                                $sony-> DisplayData("4GB", "128GB" , "6 Inch" , "Gold"); 
                        
                                
                            // (Second Object) : [sony]  => Printing all properties of {object:sony} after changing by method [Changing and Displaying all properties] : 
                                echo '<br>'. '<h3> The Object[sony] Inherited from Class {Sony} after using the [Inherited Method] to change all properties ->  as following : </h3>' . '<br>' ;
                                echo '<pre>';            
                                print_r($sony);
                                echo '</pre>'. '<br>' . '<br>';                                                                                                                                                             

                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";

                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
            <!-- (*) => Second Example  => Inheriting a Class with addition properties or Methods with in the new Class : -->
                
                    <header>
                        Second Example  => Inheriting a Class with addition properties or Methods with in the new Class : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha2; ?>  </h1>  

                        <?php                                                                                                                                               

                                // {FIRST CLASS} =>  Defining and Creating Class [AppleDevice] {with properties default} : 
                                class AppleDevice1 {                
                                    // Defining the Class Properties Values :
                                        public $ram = "2GB";
                                        public $space = "64GB";
                                        public $inch = "4 Inch";                    
                                        public $color = "Silver";
                                                    
                                    // Method (using Parameters) within the Method of -> To [Change and Displaying all Properties values] :  
                                        public function DisplayData($ra , $sp, $in, $co) {
                                            $this-> ram = $ra;
                                            $this-> space = $sp;
                                            $this-> inch = $in;
                                            $this-> color = $co;
                                        }
                                }
                            
                                // {SECOND CLASS} =>  Inhireting a new Class [Sony1] from the old Class [AppleDevice1] : 
                                class Sony1 extends AppleDevice1 {
                                    // Adding new Properites :
                                        public $screen = "LCD"; 
                                    
                                    // Adding new Methods :
                                        public function DisplayProps($ra , $sp, $in, $co, $sc) {
                                            $this-> ram = $ra;
                                            $this-> space = $sp;
                                            $this-> inch = $in;
                                            $this-> color = $co;
                                            $this-> secreen = $sc;
                                        }        
                                }
                                // ----------------------------------------------------------------

                                
                            // (First Object) : [iphone7plus]  => Defining and Creating new  from the class {AppleDevice1} : 
                                $iphone7plus = new AppleDevice1();                
                            
                            // (First Object) : [iphone7plus]  => Processing the Old Method {DisplayData} : [Changing and Displaying all properties ] : 
                                $iphone7plus-> DisplayData("8GB", "256GB" , "8 Inch" , "Silver"); 
                            
                                
                            // (First Object) : [iphone7plus]  => Printing all properties of {object:iphone7plus} after changing by method [Changing and Displaying all properties] : 
                                echo '<br>'. '<h3> The Object[iphone7plus] created from Class [AppleDevcie1] after using the [Old Method] to change all properties ->  as following : </h3>' . '<br>' ;
                                echo '<pre>';            
                                print_r($iphone7plus);            
                                echo '</pre>'. '<br>' . '<br>' . '<hr>';                                                                    
                                // --------------------------------------------------------------------
                                
                                                
                            // (Second Object) : [sony]  => Defining and Creating new  from the class {Sony} : 
                                $sony1 = new Sony1();                
                            
                            // (Second Object) : [sony]  => Processing the Inherited Method {DisplayData} : [Changing and Displaying all properties ] : 
                                $sony1-> DisplayData("16GB", "512GB" , "10 Inch" , "Blue");  
                            
                            // (Second Object) : [sony]  => Printing all properties of {object:sony} after changing by method {DisplayData} : [Changing and Displaying all properties] : 
                                echo '<br>'. '<h3> The Object[sony1] Inherited from Class {Sony1} after using the [Inherited Method] to change all properties ->  as following : </h3>' . '<br>' ;
                                echo '<pre>';            
                                print_r($sony1);
                                echo '</pre>'. '<br>' . '<br>';                                                                                                                                                             
                                
                                
                            // (Second Object) : [sony]  => Processing the New Method {DisplayProps} : [Changing and Displaying all properties ] : 
                                $sony1-> DisplayProps("16GB", "512GB" , "10 Inch" , "Blue" , "HD"); 

                            // (Second Object) : [sony]  => Printing all properties of {object:sony} after changing by method {DisplayProps} : [Changing and Displaying all properties] : 
                                echo '<br>'. '<h3> The Object[sony1] Inherited from Class {Sony1} after using the [New Method] to change all properties ->  as following : </h3>' . '<br>' ;
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
