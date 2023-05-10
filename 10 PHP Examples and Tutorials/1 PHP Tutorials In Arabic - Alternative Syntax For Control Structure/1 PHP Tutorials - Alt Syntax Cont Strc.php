<!--  1 PHP Tutorials In Arabic - Alternative Syntax For Control Structure --> 
<!-- =============================================================== -->


<?php
    $lessonName ='Alternative Syntax For Control Structure ';
    $title = '1 PHP Tutorials - ' . $lessonName;
    $css = '1 PHP Tutorials In Arabic - Alternative Syntax For Control Structure.css';

    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName . "<br>";    
    // ============================================================================
        /* In this lesson will be (2) Applications [Using Alternative & Embeded Syntax ] :
        // 1- First Example [Using Alternative Methods with {if,for,foreach,while,switch} ] 
        // 2- Second Example [Using Alternative Methods + Embeded Syntax] 
    */    
        
    
    $main =  'In this lesson will be (2) Applications [Print Certain Customized time and date format (with using Texual Time Stamp Flags] :   as following  : ' . '<br>' . '<ul>' .
    '<li>' . 'First Example [Using Alternative Methods with {if,foreach} ]' . '</li>' .     
    '<li>' . 'Second Example [Using Alternative Methods + Embeded Syntax] ' . '</li>' .    
    '</ul>'; 
    // ============================================================================    

    // (*)=>  First Example [Using Alternative Methods with {if,for,foreach,while,switch} ] :
        $ha1 = 'First Example [Using Alternative Methods with {if,for,foreach,while,switch} ]  : as following : ' . "<br>" ; 

        // Using Ordinary methiod with the Alternative with diffrent Controling functions [foreach || if ||  ]  : 
                    
            // // Defining array [to loop inside] : 
            //     $arr = array(0, 1 , 2 , 3 , 10 , 15);

            // // a) Ordinary Syntax : 
            //     echo 'Pringting the array by using the [Ordinray] as following ' . "<br>" ;    

            //     foreach($arr as $num) {
                                    
            //         if ($num < 10) {                        
            //             if ($num == 0) {
            //                 echo 'Zero';                        
            //             } else {
            //                 echo '0' . $num . '<br>';
            //             }
                        
            //         } else {
            //             echo $num . '<br>';
            //         }                                        
                    
            //     } 
            //     echo '<br>' . '<hr>' . '<br>' . '<br>';
                                                    
            // // Alterantive Syntax : 
            //     echo 'Pringting the array by using the [Alternative] as following ' . "<br>" ;
                
            //     foreach($arr as $num) :
                                    
            //         if ($num < 10) :
            //             if ($num == 0) :
            //                 echo 'Zero';                        
            //             else:
            //                 echo '0' . $num . '<br>';
            //             endif;
                        
            //         else:
            //             echo $num . '<br>';
            //         endif;                                    
            //     endforeach;
                                                    
        echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
            
    // =================================================================================                                
?>


<?php   // This is another php starting Tag inside the same page ..
    // (*)=>  Second Example [Using Embeded Syntax between html and php] ] :
        $ha2 = 'Second Example [Using Embeded Syntax between html and php]  : as following : ' . "<br>" ; 
        
        // `// Defining Varialbes :
        //     $a = 1;    
        //     $b = 2;

        // // Using Embeded scripting between PHP & HTML [with ordinary Text] : 
        //     echo '<h2> This is title by embeded syntax of php' . '<br>';
        //     echo '<p> This paragraphg is also embeded by PHP inside the parent header </p>' . '<br>';         
        //     echo '</h2>' . '<br>';`
                                                                        
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
            
            <!-- (*) => First Example [Using Alternative Methods with {if,foreach} ] : -->
                        
                    <header>
                        First Example [Using Alternative Methods with {if,foreach} ]: <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1 . ' => [This Title is an Embeded code by php]'; ?>   </h1>  

                        <?php                                                                                               

                            // Defining array [to loop inside] : 
                                $arr = array(0, 1 , 2 , 3 , 10 , 15);

                                // Ordinary Syntax : 
                                    echo 'Printing the array by using the [Ordinray] as following ' . "<br>" ;    
                    
                                    foreach($arr as $num) {
                                                        
                                        if ($num < 10) {                        
                                            if ($num == 0) {
                                                echo 'Zero' . '<br>';
                                            } else {
                                                echo '0' . $num . '<br>';
                                            }
                                            
                                        } else {
                                            echo $num . '<br>';
                                        }                                        
                                        
                                    } 
                                    echo '<br>' . '<hr>' . '<br>' . '<br>';
                                                                        
                                // Alterantive Syntax : 
                                    echo 'Printing the array by using the [Alternative] as following ' . "<br>" ;
                                    
                                    foreach($arr as $num) :
                                                        
                                        if ($num < 10) :
                                            if ($num == 0) :
                                                echo 'Zero' . '<br>';  
                                            else:
                                                echo '0' . $num . '<br>';
                                            endif;
                                            
                                        else:
                                            echo $num . '<br>';
                                        endif;                                    
                                    endforeach;
                                                                    
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";                            
                            
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            
                                        
            <!-- (*) => Second Example [Using Alternative Methods + Embeded Syntax]   : -->
                        
                    <header>
                        Second Example [Using Alternative Methods + Embeded Syntax]   :  <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha2 . ' => [This Title is an Embeded code by php]'; ?>  </h1>  
                        <?php                                           
                            // Defining Varialbes :
                                $a = 1;    
                                $b = 2;

                            // Using Embeded scripting between PHP & HTML [with ordinary Text] : 
                                echo '<h2> This is title by embeded syntax of php' . '<br>';
                                echo '<p> This paragraphg is also embeded by PHP inside the parent header </p>' . '<br>';         
                                echo '</h2>' . '<br>';                                                                                                                        
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                        ?>                            
                        
                        <!-- Starting Embeded coding between {PHP} and {HTML} => [with if condition] -->
                            <?php if($a > $b): echo 'Variable {a} is Greater than Variable {b} => [Embeded Code]' . '<br>' ; ?>
                                Variable a is Greater than Variable b => [Pure Html] <br>
                            <?php elseif($a < $b): echo 'Variable {a} is less than Variable {b} => [Embeded Code]' . '<br>' ; ?>
                                Variable a is Less than Variable b => [Pure Html] <br>
                            <?php else : echo 'Variable {a} is Equal Variable {b} => [Embeded Code]' . '<br>' ;   ?>
                                Variable {a} is Equal Variable {b} => [Pure Html] <br>
                            <?php endif; ?>

                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            
                                                    
            <!-- ---------------------------------------------------------- -->                                            
                                                    
            </section>
                                                                    
        </body>
    </html> 