 <!--  79 PHP 5 In Arabic - Predefined Variables - Globals --> 
<?php

    $lessonName  ='Predefiend Variables - Globals ';
    $title = '79 PHP5 - ' . $lessonName;
    $css = '79 PHP 5 In Arabic - Predefined Variables - Globals.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    // ============================================================================
    // (*) Variable Definitions & Decleration :                          
            $file  = __DIR__ . "/PHP" . "/shadi.txt";
    // =================================================================================                            
    
    // (*) => First Example => Predefined Variables - Globals - { Accessing a Normal Variable with Global scope outside the function => From inside the function scope by using [GLOBALS] :
    
        $ha1 = "Predefined Variables - Globals - {  Accessing a local scope variable inside the function scope by using [GLOBALS] :  as following : " . "<br>" ; 
        
        // // Declaring Normal Variable with Normal Scope outside the function :
        //     $name = 'Shadi';
            
        // // Defining function :
        //     function myFunc1() {
        //         // Accessing & Printing the Normal Variable declared outside the Function => Accessed by [Global] form inside the function :
        //             echo 'This varaible [name] has been accesed by the globals builtin Method From inside the function Scope : ' . "<br>" . $GLOBALS['name']; 
        //     }
      
        // // Executing the Function :
        //     myFunc1(); 

        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
    // ---------------------------------------------        
    
    // (*) => Second Example => Predefined Variables - Globals - { Accessing a Normal Variable with Function scope inside the function => From outside the function scope by using [GLOBALS] :
    
        $ha2 = "Predefined Variables - Globals - {  Accessing a Normal Variable with Function scope inside the function => From outside the function scope by using [GLOBALS] :  as following : " . "<br>" ; 
        
            
        // // Defining function :
        //     function myFunc2() {
        //         // Declaring Normal Variable inside the Function Scope  :
        //         $name = 'Shadi';
        //     }
            
        // // Executing the Function :
        //     myFunc2(); 
            
        // // Accessing & Printing the Normal Variable declared inside the Function => Accessed by [Global] form outside the function :
        //     echo 'This variable [name] has been accesed by the globals builtin Method From ouside the function scope : ' . "<br>" . $GLOBALS['name']; 
                                        
        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
    // ---------------------------------------------        

    // (*) => Third Example => Predefined Variables - Globals - { Declaring] a Normal Variable as Globals variable located in ouside a Function => To Access it from inside the Function :

        $ha3 = "Predefined Variables - Globals - {  Accessing a local scope variable inside the function scope by using [GLOBALS] :  as following : " . "<br>" ; 
    
        // // Declaring Normal Variable as [Globals] , located ouside the function  :
        //     $GLOBALS['name'] = 'Shadi';
            
        // // Defining function :
        //     function myFunc3() {                
        //         echo 'This varaible [name] is declared as GLOBALS and has been accesed From inside the function Scope : ' . "<br>" . $GLOBALS['name']; 
        //     }
                                   
        // // Executing the Function :
        //     myFunc3(); 

        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
    // ---------------------------------------------        
    
    // (*) => Fourth Example => Predefined Variables - Globals - { Declaring] a Normal Variable as Globals variable located in inside a Function => To Access it from Outside the Function :

        $ha4 = "Predefined Variables - Globals - {  Accessing a local scope variable inside the function scope by using [GLOBALS] :  as following : " . "<br>" ; 
    
            
        // // Defining function :
        //     function myFunc4() {                
        //         // Declaring Normal Variable as [Globals] located inside the function  :
        //             $GLOBALS['name'] = 'Shadi';
        //     }
                                   
        // // Executing the Function :
        //     myFunc4(); 
            
        // // Accessing & Printing the Normal Variable declared as [Globals] inside the Function => Accessed form outside the function :
        //     echo 'This Variable [name] is declared as [GLOBALS] inside the function and has been accesed From outside the function Scope : ' . "<br>" . $GLOBALS['name']; 
        
        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        // ---------------------------------------------        

    // ---------------------------------------------        

    // (*) => Fifth Example => Predefined Variables - Globals - { Declaring] a Normal Variable as [Globals] variable located in inside a Function => To Access This variable from Outside & Inside  the Function :

        $ha5 = "Predefined Variables - Globals - { Declaring] a Normal Variable as [Globals] variable located in inside a Function => To Access it from Outside & Inside  the Function  :  as following : " . "<br>" ; 
    
        // // Declaring Normal Variable as [Globals] located Outside the function  :
        //     $GLOBALS['name'] = 'Shadi';
            
        // // Defining function :
        //     function myFunc5() {                
        //         // Accessing & Printing the Normal Variable declared as [Globals] outside the Function => Accessed form Inside the function :
        //             echo 'This Variable [name] is declared as [GLOBALS] Outside the function and has been accesed From Inside the function Scope : ' . "<br>" . $GLOBALS['name'] . "<br>"; 
        //     }
                                   
        // // Executing the Function :
        //     myFunc5(); 
            
        // // Accessing & Printing the Normal Variable declared as [Globals] Outside the Function => Accessed form Outside the function :
        //     echo 'This Variable [name] is declared as [GLOBALS] Outside the function and has been accesed From Outside the function Scope : ' . "<br>" . $GLOBALS['name'] . "<br>"; 

        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        // ---------------------------------------------        

    // ---------------------------------------------        
        
    // (*) => Sixth Example => Predefined Variables - Globals - { Declaring] a Normal Variable as [Globals] variable located in outside a Function & declaring another variable with the same name inside the function  => To Access both from ouside the function :

        $ha6 = " Predefined Variables - Globals - { Declaring] a Normal Variable as [Globals] variable located in outside a Function & declaring another variable with the same name inside the function  => To Access both from ouside the function  :  as following : " . "<br>" ; 
    
        // // Declaring Normal Variable as [Globals] located Outside the function :
        //     $GLOBALS['name'] = 'Shadi';
            
        // // Defining function :
        //     function myFunc6() {                
        //         // Declaring another Varialbe with the same name of a [Global] declared outside the function inside:
        //             $name = 'Shadi' ;  
                
        //         // Accessing & Printing the Local Variable declared inside the function form Inside the function :
        //             echo 'This Variable local [name] Declared inside the function is : ' . "<br>" . $name . "<br>"; 
                    
        //         // Accessing & Printing the Normal Variable declared as [Globals] Outside the Function => Accessed form Inside the function :
        //             echo 'This Variable global [name] Declared outside the function is : ' . "<br>" . $GLOBALS['name'] . "<br>";                     
        //     }
                                   
        // // Executing the Function :
        //     myFunc6(); 
            

        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        // ---------------------------------------------        

    // ---------------------------------------------        
        
    // ====================================================================================        
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
        
        <body class='body' style="background-color: gray">
            <h1>
                The following textnode of this head has been genereated by PHP path : <br>        
                <?php echo $heading; echo '<br>'; ?>            
            </h1>

            <p>
                The following textnode of this Paragraph has been genereated by PHP path : <br>        
                <?php echo $paragraph; echo '<br>'; ?> 
            </p> <br>        
          <!-- ------------------------------------------------------------------------- -->            

            <section class="PHPPract" id="PHPPract">                                       
            
            <!-- (*) => First Example => Predefined Variables - Globals - { Accessing a Normal Variable with Global scope outside the function => From inside the function scope by using [GLOBALS] : -->
                        
                    <header>
                        First Example => Predefined Variables - Globals - { Accessing a Normal Variable with Global scope outside the function => From inside the function scope by using [GLOBALS]: <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1 ?>  </h1>  
                            
                        <?php       

                            // Declaring Normal Variable with Normal Scope outside the function :
                                $name = 'Shadi';
                                
                            // Defining function :
                                function myFunc1() {
                                    // Accessing & Printing the Normal Variable declared outside the Function => Accessed by [Global] form inside the function :
                                        echo 'This varaible [name] has been accesed by the globals builtin Method From inside the function Scope : ' . "<br>" . $GLOBALS['name'] . "<br>"; 
                                }
                        
                            // Executing the Function :
                                myFunc1(); 
                    
                        
                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;            
                                            
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
            <!-- (*) => Second Example => Predefined Variables - Globals - { Accessing a Normal Variable with Function scope inside the function => From outside the function scope by using [GLOBALS] : -->
                        
                    <header>
                        Second Example => Predefined Variables - Globals - { Accessing a Normal Variable with Function scope inside the function => From outside the function scope by using [GLOBALS] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha2 ?>  </h1>  
                            
                        <?php       

                            // Defining function :
                                function myFunc2() {
                                    // Declaring Normal Variable inside the Function Scope  :
                                    $name = 'Shadi';
                                }
                                
                            // Executing the Function :
                                myFunc2(); 
                                
                            // Accessing & Printing the Normal Variable declared inside the Function => Accessed by [Global] form outside the function :
                                echo 'This variable [name] has been accesed by the globals builtin Method From ouside the function scope : ' . "<br>" . $GLOBALS['name']; 
                                                            
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                                                                           
            
            <!-- (*) => Third Example => Predefined Variables - Globals - { Declaring] a Normal Variable as Globals variable located in ouside a Function => To Access it from inside the Function : -->
                        
                    <header>
                        Third Example => Predefined Variables - Globals - { Declaring] a Normal Variable as Globals variable located in ouside a Function => To Access it from inside the Function : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha3 ?>  </h1>                              

                        <?php       

                            // Declaring Normal Variable as [Globals] , located ouside the function  :
                                $GLOBALS['name'] = 'Shadi';
            
                            // Defining function :
                                function myFunc3() {                
                                    echo 'This varaible [name] is declared as GLOBALS and has been accesed From inside the function Scope : ' . "<br>" . $GLOBALS['name']; 
                                }
                                                    
                            // Executing the Function :
                                myFunc3(); 
                                                    
                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;            
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                                                                           
            
            <!-- (*) => Fourth Example => Predefined Variables - Globals - { Declaring] a Normal Variable as Globals variable located in inside a Function => To Access it from Outside the Function  : -->
                        
                    <header>
                        Fourth Example => Predefined Variables - Globals - { Declaring] a Normal Variable as Globals variable located in inside a Function => To Access it from Outside the Function  : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha4 ?>  </h1>                              

                        <?php       

                            // Defining function :
                                function myFunc4() {                
                                    // Declaring Normal Variable as [Globals] located inside the function  :
                                        $GLOBALS['name'] = 'Shadi';
                                }
                                                    
                            // Executing the Function :
                                myFunc4(); 
                                
                            // Accessing & Printing the Normal Variable declared as [Globals] inside the Function => Accessed form outside the function :
                                echo 'This Variable [name] is declared as [GLOBALS] inside the function and has been accesed From outside the function Scope : ' . "<br>" . $GLOBALS['name']; 
                                                    
                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;            
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                                                                           
            
            <!-- (*) => Fifth Example => Predefined Variables - Globals - { Declaring] a Normal Variable as [Globals] variable located in inside a Function => To Access This variable from Outside & Inside  the Function  : -->
                        
                    <header>
                        Fifth Example => Predefined Variables - Globals - { Declaring] a Normal Variable as [Globals] variable located in inside a Function => To Access This variable from Outside & Inside  the Function : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha5 ?>  </h1>                              

                        <?php       

                            // Declaring Normal Variable as [Globals] located Outside the function  :
                                $GLOBALS['name'] = 'Shadi';
            
                            // Defining function :
                                function myFunc5() {                
                                    // Accessing & Printing the Normal Variable declared as [Globals] outside the Function => Accessed form Inside the function :
                                        echo 'This Variable [name] is declared as [GLOBALS] Outside the function and has been accesed From Inside the function Scope : ' . "<br>" . $GLOBALS['name'] . "<br>"; 
                                }
                                                    
                            // Executing the Function :
                                myFunc5(); 
                                
                            // Accessing & Printing the Normal Variable declared as [Globals] Outside the Function => Accessed form Outside the function :
                                echo 'This Variable [name] is declared as [GLOBALS] Outside the function and has been accesed From Outside the function Scope : ' . "<br>" . $GLOBALS['name'] . "<br>"; 
                                                                    
                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;            
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                                                                           
            
            <!-- (*) => Sixth Example => Predefined Variables - Globals - { Declaring] a Normal Variable as [Globals] variable located in outside a Function & declaring another variable with the same name inside the function  => To Access both from ouside the function : -->
                        
                    <header>
                        Sixth Example => Predefined Variables - Globals - { Declaring] a Normal Variable as [Globals] variable located in outside a Function & declaring another variable with the same name inside the function  => To Access both from ouside the function : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha6 ?>  </h1>                              

                        <?php       

                            // Declaring Normal Variable as [Globals] located Outside the function  :
                                $GLOBALS['name'] = 'Shadi';
            
                            // Defining function :
                                function myFunc6() {                
                                    // Declaring another Varialbe with the same name of a [Global] declared outside the function inside:
                                        $name = 'Shadi' ;  
                                    
                                    // Accessing & Printing the Local Variable declared inside the function form Inside the function :
                                        echo 'This Variable local [name] Declared inside the function is : ' . "<br>" . $name . "<br>"; 
                                        
                                    // Accessing & Printing the Normal Variable declared as [Globals] Outside the Function => Accessed form Inside the function :
                                        echo 'This Variable global [name] Declared outside the function is : ' . "<br>" . $GLOBALS['name'] . "<br>";
                                }
                                                    
                            // Executing the Function :
                                myFunc6(); 

                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;            
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                                                                           
        
            <!-- ================================================================================= -->            
            <!-- ================================================================================= -->            
            </section>
                                                                    
         </body>
</html>
