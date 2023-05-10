<!--  php - Lesson16 =>    -->
<?php     
    $lessonName  ='Logical Operators';
    $title = '16 PHP5 - ' . $lessonName;
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    $h1 = 'First logical operator => [and] operator as following : '; 
    $h2 = 'Second logical operator => [&&] operator as following : '; 
    $h3 = 'Third logical operator => [or] operator as following : '; 
    $h4 = 'Fourth logical operator => [||] operator as following : '; 
    $h5 = 'Fifth logical operator => [xor] operator as following : '; 
    $h6 = 'Sixth logical operator => [!] NOT operator as following : '; 


    $p1 = ''; 
    $p2 = ''; 
    $p3 = ''; 
    $p4 = ''; 
    $p5 = ''; 
    $p61 = ''; 
    $p62 = ''; 

    $var1 = true && false;
    $var2 = true and false;

    $res1 = var_dump($var1) ;
    $res2 = var_dump($var2) ;    
    
    $pr1 = 'result of testing [&&] logical operator is ' . $res1 ;
    $pr1 = 'result of testing [and] logical operator is ' . $res2 ;    

             
    $hr1 = 'The Datatype of the first \$var1 is : ' ;
    $hr2 = 'The Datatype of the second \$var2 is : ' ;
    
    
    $age = 25;            
    $skills = 3;            
    $langs = 5;                

    // *First logical operator => [and] operator :
    if ($age > 25 and $skills > 2 and $langs > 4 ) {
        $p1 =  'True => All conditions are TRUE' ;
    } else {
        $p1 = 'False => One of current conditions or more are False' ;
    }
            
// ------------------------------------------------------------------

    // *Second logical operator => [&&] operator :
    if ($age > 25 && $skills > 2 && $langs > 4 ) {
        $p2 = 'True => All conditions are TRUE' ;
    } else {
        $p2 = 'False => One of current conditions or more are False' ;
    }
    // --------------------------------------------------------------
    
    // *Third logical operator => [or] operator :
    if ($age > 25 or $skills > 2 or $langs > 4 ) {
        $p3 = 'True => One at least of conditions are TRUE' ;
    } else {
        $p3 = 'False => All conditions are False' ;
    }
    // --------------------------------------------------------------
    
    // *Fourth logical operator => [||] operator :
    if ($age > 25 || $skills > 2 || $langs > 4 ) {
        $p4 = 'True  => One at least of conditions are TRUE' ;
    } else {
        $p4 = 'False => All conditions are False' ;
    }
    // --------------------------------------------------------------

    // *Fifth logical operator => [xor] operator :
    if ($age > 25 xor $skills > 2 xor $langs > 4 ) {
        $p5 = 'True => One at least of conditions are TRUE and Not All ' ;
    } else {
        $p5 = 'False => All conditions are False or All are True ' ;
    }
    // --------------------------------------------------------------

    // *Sixth logical operator => [!] operator :
    // a ) Testing simple Not operator {Negative defined variable} : 
    if (!$age) {
        $p61 = 'True => This Variable is not defined!' ;
    } else {
        $p61 = 'False => This Variable is already defined!' ;
    }
    // --------------------------------------------------------------
    // b ) Testing complex Not operator {Negative defined variable} : 
    if ( !(!$age) ) {
        $p62 = 'True => This Variable already defined!' ;
    } else {
        $p62 = 'False => This Variable is Not defined!' ;
    }
    // --------------------------------------------------------------
    // --------------------------------------------------------------        
    ?>
    // =====================================================================================================                    
    
    <!DOCTYPE html>
    <html>
        <head>
            <title> <?php echo $title; ?>  </title>
            <link rel="stylesheet" href="10 PHP 5 In Arabic - If, Elseif, Else.css" media="all">
            <link rel="stylesheet" href="<?php echo $css; ?>" media="all">
        </head>
        <body class='body'>
            <h1>
                The following textnode of this head has been genereated by PHP file : <br>        
                <?php echo $heading; echo '<br>'; ?>            
            </h1>

            <p>
                The following textnode of this Paragraph has been genereated by PHP file : <br>        
                <?php echo $paragraph; echo '<br>'; ?> 
            </p> <br>        
         <!-- ----------------------------------------------- -->
         
             <h1> 
             <?php echo $h1; ?>        
            </h1>
            
            <p>                     
                <?php echo $p1;?>                                             
            </p> <br> <hr>                                
        <!-- ----------------------------------------------- -->
        
            <h1> 
                <?php echo $h2; ?>        
            </h1>
            
            <p>                     
                <?php echo $p2;?>                                             
            </p> <br> <hr>                                
        
        <!-- ----------------------------------------------- -->

            <h1> 
                <?php echo $h3; ?>        
            </h1>
            <p>                     
                <?php echo $p3;?>                                             
            </p> <br> <hr>                                
        <!-- ----------------------------------------------- -->
            
            <h1> 
                <?php echo $h4; ?>        
            </h1>
            <p>                     
                <?php echo $p4;?>                                             
            </p> <br> <hr>                                
            
        <!-- --------------------------------------------------------- -->
            <h1> 
                <?php echo $h5; ?>        
            </h1>
            
            <p>                     
                <?php echo $p5;?>                                             
            </p> <br> <hr>                                            
        <!-- --------------------------------------------------- -->
            
            <h1> 
                <?php echo $h61; ?>        
            </h1>
            
            <p>                     
                <?php echo $p61;?>                                             
            </p> <br> <hr>                                
            
            <h1> 
                <?php echo $h62; ?>        
            </h1>
            
            <p>                     
                <?php echo $p62; ?>                                             
            </p> 
            
            <br> <hr>                                
        <!-- ------------------------------------------------------------ -->
        
            <h1> 
                <?php echo $hr1; ?>        
            </h1>
            
            <p>                     
                <?php echo $pr1; ?>                                             
            </p> 
            
            <br> <hr>                                
        <!-- ------------------------------------------------------------ -->
    
            <h1> 
                <?php echo $hr2; ?>        
            </h1>
            
            <p>                     
                <?php echo $pr2; ?>                                             
            </p> 
            
            <br> <hr>                                
                                                                   
        </body>
    </html>         
    