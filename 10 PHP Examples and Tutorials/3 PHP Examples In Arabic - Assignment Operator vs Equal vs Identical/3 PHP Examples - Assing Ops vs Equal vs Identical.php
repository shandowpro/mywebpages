<!--  3 PHP Examples In Arabic - Assignment Operator vs Equal vs Identical --> 
<!-- =============================================================== -->


<?php
    $lessonName ='Assignment Operator vs Equal vs Identical';
    $title = '3 PHP Tutorials - ' . $lessonName;
    $css = '3 PHP Examples In Arabic - Assignment Operator vs Equal vs Identical.css';

    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName . "<br>";    
    // ============================================================================
        /* In this lesson will be (3) Applications [Testing the 3 types of opertators] :
        // 1- First Example [Assignement Operator]  
        // 2- Second Example [Eqaul Operator]
        // 3- Third Example [Identical Operator]
    */    
        
        $main =  'In this lesson will be (3) Applications [Ananlysisng the url video to get an partial component from the main url ] :   as following  : ' . '<br>' . '<ul>' .
    '<li>' . 'First Example [Assignement Operator]' . '</li>' .     
    '<li>' . 'Second Example [Eqaul Operator]' . '</li>' .    
    '<li>' . 'Third Example [Identical Operator]' . '</li>' .    
    '</ul>'; 
    // ============================================================================    

    // (*)=>  First Example [Assignement Operator] :
        $ha1 = 'First Example [Assignement Operator]   : as following : ' . "<br>" ; 
            
        // Defining a new Varialbe [using the Assignement operator]:
            $name = 'Shadi';

        // Printing defined Variable :
            echo $name;
        
        // Printing datatype of the defined Variable :
            gettype($name);
    
                                                                            
        echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
            
    // =================================================================================                                

    // (*)=> Second Example [Eqaul Operator] :
        $ha2 = 'Second Example [Eqaul Operator]  : as following : ' . "<br>" ; 
            
        // Testing the Defined Variable by using [Equal Operator] with in the conditioanl If : 
            if ($name == 'Sayed')
                echo 'True,  The defined variable is Equal' . $name;     
            else 
                echo 'False,  The defined variable is Equal' . $name;     

                
        echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
            
    // =================================================================================                                
                        
    // (*)=> Third Example [Identical Operator] :
        $ha3 = 'Third Example [Identical Operator] : as following : ' . "<br>" ; 

            // Defining a new variable :
                $age = 33;

            // Getting the datatype of the defined variable [gettype()]  : 
                echo 'The Datatype of the defined Variable is => ' . gettype($age) . '<br>';

            // Testing the Defined Variable by using the [Identical Equal Operator] with in the conditioanl If  : 
                if ($age === '33')
                    echo 'True,  The defined variable is [Identically Equal] ' . $age;     
                else 
                    echo 'False,  The defined variable is [Not Identically Equal] ' . $age;     

         
            
        echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
            
    // =================================================================================                                
                        
    // =================================================================================                                
                                                  
// ==================================================================================
?>

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
            
            <!-- (*) => First Example [Assignement Operator] : -->
                        
                    <header>
                        First Example [Assignement Operator] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1; ?>   </h1>  

                        <?php                                                                                               

                            // Defining a new Varialbe [using the Assignement operator]:
                                $name = 'Shadi';

                            // Printing defined Variable :
                                echo $name;
                            
                            // Printing datatype of the defined Variable :
                                gettype($name);
                                                                                
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                            
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            
                                        
            <!-- (*) => Second Example [Eqaul Operator]  : -->
                        
                    <header>
                        Second Example [Eqaul Operator] :  <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha2; ?>  </h1>  
                        <?php                                           
                            // Testing the Defined Variable by using [Equal Operator] with in the conditioanl If : 
                            if ($name == 'Sayed')
                                echo 'True,  The defined variable is Equal' . $name;     
                            else 
                                echo 'False,  The defined variable is Equal' . $name;     

                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                        ?>                            
                                                                        

                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            
                                                    
            <!-- (*) => Third Example [Identical Operator] : -->
                        
                    <header>
                        Third Example [Identical Operator]  :  <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha3; ?>  </h1>  
                        <?php                                           
                            // Defining a new variable :
                                $age = 33;

                            // Getting the datatype of the defined variable [gettype()]  : 
                                echo 'The Datatype of the defined Variable is => ' . gettype($age) . '<br>';
                
                            // Testing the Defined Variable by using the [Identical Equal Operator] with in the conditioanl If  : 
                                if ($age === '33')
                                    echo 'True,  The defined variable is [Identically Equal] ' . $age;     
                                else 
                                    echo 'False,  The defined variable is [Not Identically Equal] ' . $age;     

                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                        ?>                            
                                                                        

                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            
                                                    
            <!-- ---------------------------------------------------------- -->                                            
                                                    
            </section>
                                                                    
        </body>
    </html> 