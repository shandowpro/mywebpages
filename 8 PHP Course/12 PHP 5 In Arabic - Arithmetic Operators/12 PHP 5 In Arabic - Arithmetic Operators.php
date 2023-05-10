<!--  php - Lesson12 =>    -->
<?php     

        $lessonName  ='Arithmetic Operators';
        $title = '12 PHP5 - ' . $lessonName;
        $heading = 'This the head lesson about ' . $lessonName;
        $paragraph = 'This is paragraph about ' . $lessonName;
        
        $h1 = '<h1> Summition [+] Result => : </h1> <br>';
        $h2 = '<h1> Submition [-] Result => : </h1> <br>';        
        $h3 = '<h1> Multiply [*] Result => : </h1> <br>';        
        $h4 = '<h1> Divison [/] Result => : </h1> <br>';        
        $h5 = '<h1> Modulus [%] Result => : </h1> <br>';        
        $h6 = '<h1> Power [**] Result => : </h1> <br>';        
            
        // {+=} Summition the same value of the same variable Operator :
        const Num1 = 100;
        $Sum = Num1;
        $Sum += $Sum;
                
        // {-=} Substract the same value of the same variable Operator :        
        $Sub = Num1;
        $Sub -= $Sub;
             
        // {*=} Multiply the same value of the same variable Operator :        
        $Mult = Num1;
        $Mult *= $Mult;
             
        // {/=} Divide the same value of the same variable Operator :                
        $Div = Num1;
        $Div /= $Div;
              
        // {**=} Power the same value of the same variable Operator :        
        $Power = Num1;
        $Power **= $Power;
                                        
        $p1 = 'Summition the same value of the same variable [' . Num1 . '] = ' . $Sum;
        $p2 = 'Substraction the same value of the same variable [' . Num1 . '] = ' . $Sub;
        $p3 = 'Multiply the same value of the same variable [' . Num1 . '] = ' . $Mult;
        $p4 = 'Division the same value of the same variable [' . Num1 . '] = ' . $Div;
        $p5 = 'Powering the same value of the same variable [' . Num1 . '] = ' . $Power;
               
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

            <?php echo $h5; ?>
            <p>                     
                <?php                                       
                    echo $p5;
                ?>                                             
            </p> <br> <hr>              
                            
        </body>
    </html>         
    