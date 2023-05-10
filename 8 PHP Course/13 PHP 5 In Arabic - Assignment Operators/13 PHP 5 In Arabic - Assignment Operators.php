<!--  php - Lesson13 =>    -->
<?php     

        $lessonName  ='Assignment Operators';
        $title = '13 PHP5 - ' . $lessonName;
        $heading = 'This the head lesson about ' . $lessonName;
        $paragraph = 'This is paragraph about ' . $lessonName;
        
        $h1 = '<h1> Summition [+=] Result => : </h1> <br>';
        $h2 = '<h1> Submition [-=] Result => : </h1> <br>';        
        $h3 = '<h1> Multiply [*=] Result => : </h1> <br>';        
        $h4 = '<h1> Divison [/=] Result => : </h1> <br>';        
        // $h5 = '<h1> Modulus [%] Result => : </h1> <br>';        
        // $h6 = '<h1> Power [**] Result => : </h1> <br>';        
        
        const num = 100;
        $num = 100;
        $Sum += $Sum;

        $p1 = 'Assingning Summition result of number [' . num . '] by itself = ' . $num1;
        // $num2 = 50;
        
        $num1 += $num2;
        $p2 = 'Assingning Substraction result of number [' . num . '] by itself = ' . $num1;
        
        
        $num1 -= $num2;
        $p3 = 'Assingning Multiply result of number [' . num . '] by itself = ' . $num1;
        
        $num1 *= $num2;
        $num1 /= $num2;        
        
        $p4 = 'Assingning Division result of number [' . num . '] by itself = ' . $num1;        
        // =====================================================================================================                    
    ?>
    
    <!DOCTYPE html>
    <html>
        <head>
            <title> <?php echo $title; ?>  </title>
            <link rel="stylesheet" href="10 PHP 5 In Arabic - If, Elseif, Else.css" media="all">
        </head>
        <body>
            <h1>
                The following textnode of this head has been genereated by PHP file : <br>        
                <?php echo $heading; echo '<br>'; ?>            
            </h1>

            <p>
                The following textnode of this Paragraph has been genereated by PHP file : <br>        
                <?php echo $paragraph; echo '<br>'; ?> 
            </p> <br>        
            

            <?php echo $h1; ?>        
            <p>                     
                <?php                                       
                    echo $p1;
                ?>                                             
            </p> <br> <hr>                                
            
                    
            <?php echo $h2; ?>
            <p>                     
                <?php                                       
                    echo $p2;
                ?>                                             
            </p> <br> <hr>                                

            <?php echo $h3; ?>
            <p>                     
                <?php                                       
                    echo $p3;
                ?>                                             
            </p> <br> <hr>                                

            <?php echo $h4; ?>            
            <p>                     
                <?php                                       
                    echo $p4;
                ?>                                             
            </p> <br> <hr>  
                           
        </body>
    </html>         
    