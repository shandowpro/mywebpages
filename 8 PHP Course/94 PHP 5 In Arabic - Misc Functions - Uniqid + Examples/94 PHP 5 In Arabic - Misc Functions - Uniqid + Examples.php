<!--  94 PHP 5 In Arabic - Misc Functions - Uniqid + Examples --> 
<!-- =============================================================== -->

<?php
    
    $lessonName  ='Misc Functions - UniqId + Examples ';
    $title = '94 PHP5 - ' . $lessonName;
    $css = '94 PHP 5 In Arabic - Misc Functions - Uniqid + Examples.css';

    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName . "<br>";    
    // ============================================================================
    
    /* In this lesson will be (4) Applications [Simple & Advnanced ] [Using the unique method to gernerate a random id [Default , customized] ] :
        // 1- First Example [Default] method  
        // 2- Second Example [Advanced {prefix} only] method  
        // 3- Thrid Example [Advanced {More_Entrophy} only] method  
        // 4- Fourth Example [Advanced {prefix, More_Entrophy} Full Advanced] method  
    */
        
    
    $main =  'In this lesson will be (4) Applications [Simple & Advnanced ] [Using the unique method to gernerate a random id [Default , customized] ] as following  : ' . '<br>' . '<ul>' .
    '<li>' . '1- First Example [Default] method ' . '</li>' .  
    '<li>' . '2- Second Example [Advanced {prefix} only] method ' . '</li>' . 
    '<li>' . '3- Thrid Example [Advanced {More_Entrophy} only] method ' . '</li>' . 
    '<li>' . '4- Fourth Example [Advanced {prefix, More_Entrophy} Full Advanced] method ' . '</li>' .     
    '</ul>';
    
    // ============================================================================        
    // ============================================================================    
    
    // (*) => First Example [Default] method :
        $ha1 = 'First Example [Default] method as following : ' . "<br>" ; 

        // // Defining a variable with random unique number [with Default method] :
        //     $random = uniqid();
                
        // // Printing the random generated number :
        //     echo 'Your generated id [Default] as following: '. "<br>";
        //     echo $random;

        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        // ---------------------------------------------                                    
    // =================================================================================                                
          
    // (*) => Second Example [Advanced {prefix} only] method :
        $ha2 = ' Second Example [Advanced {prefix} only] method as following : ' . "<br>" ; 

        // // Defining a variable with random unique number [with Advnaced method : Prefix] :
        //     $random = uniqid('Server1_') ;
            
        // // Printing the random generated number :
        //     echo 'Your generated id [Advanced : Prefix only] as following: '. "<br>";
        //     echo $random;
        
        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        // ---------------------------------------------                            
    // =================================================================================                                
          

    // (*) => Third Example [Advanced {More_Entropy} only] method :
        $ha3 = 'Third Example [Advanced {More_Entropy} only] method as following : ' . "<br>" ; 

    //     // Defining a variable with random unique number [with Advnaced method : More_Entropy] :
    //         $random = uniqid('', True) ;
        
        
    //    // Printing the random generated number:        
    //         echo 'Your generated id [Advanced : More_Entrophy only] as following: '. "<br>";
    //         echo $random;
        
    //     echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        // ---------------------------------------------                        
    // =================================================================================                                
    
    // (*) => Fourth Example [Advanced {prefix, More_Entrophy} Full Advanced] method   :
        $ha4 = 'Fourth Example [Advanced {prefix, More_Entrophy} Full Advanced] method as following : ' . "<br>" ; 

        // // Defining a variable with random unique number [with Full Advnaced method] :
        //     $random = uniqid('Server1_', True) ;
       
        // // Printing the random generated number:
        //     echo 'Your generated id [Full Advanced : Prefix && More_Entrophy ] as following: '. "<br>";
        //     echo $random;
        
        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        // ---------------------------------------------                            
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
            
            <!-- (*) => First Example [Default] method : -->
                        
                    <header>
                        First Example [Default] method :  <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1 ?>  </h1>  
                        <?php                                           
                            // Defining a variable with random unique number [with Default method] :
                                $random = uniqid();
                
                            // Printing the random generated number:
                                echo 'Your generated id [Default] as following: '. "<br>";
                                echo $random;
                            
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";

                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            
            
                <!-- (*) => Second Example [Advanced {prefix} only] method : -->
                        
                        <header>
                            Second Example [Advanced {prefix} only] method : <br> 
                        </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha2 ?>  </h1>  
                        <?php       

                            // Defining a variable with random unique number [with Advnaced method : Prefix] :
                                $random = uniqid('Server1_') ;
                                
                            // Printing the random generated number:
                                echo 'Your generated id [Advanced : Prefix only] as following: '. "<br>";
                                echo $random;
                        
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            

            <!-- (*) => Third Example [Advanced {More_Entropy} only] method  : -->
                                    
                    <header>
                        Third Example [Advanced {More_Entropy} only] method : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha3 ?>  </h1>  
                        <?php       

                            // Defining a variable with random unique number [with Advnaced method : More_Entropy] :
                                $random = uniqid('', True) ;
        
        
                            // Printing the random generated number:        
                                echo 'Your generated id [Advanced : More_Entrophy only] as following: '. "<br>";
                                echo $random;
                            
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            
            
            <!-- (*) => Fourth Example [Advanced {prefix, More_Entrophy} Full Advanced] method : -->
                                    
                    <header>
                        Fourth Example [Advanced {prefix, More_Entrophy} Full Advanced] method : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha4 ?>  </h1>  
                        <?php       
                            // Defining a variable with random unique number [with Full Advnaced method] :
                                $random = uniqid('Server1_', True) ;
                
                            // Printing the random generated number:
                                echo 'Your generated id [Full Advanced : Prefix && More_Entrophy ] as following: '. "<br>";
                                echo $random;
                            
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";

                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            
                        
            </section>
                                                                    
        </body>
    </html> 