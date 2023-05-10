<!--  php - Lesson15 =>    -->
<?php     
    $lessonName  ='Incerment & Decrement Operators';
    $title = '15 PHP5 - ' . $lessonName;
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;
    
    const IncDec = 10;
   
    $var1 = 10;            
    $var2 = 10;            
    $var3 = 10;            
    $var4 = 10;            
   
    $h1 = 'Pre Increment value of number [' . IncDec . '] sequance as following : '; 
    $h2 = 'Post Increment value of number [' . IncDec . '] sequance as following : '; 
    $h3 = 'Pre Decrement value of number [' . IncDec . '] sequanceas following : '; 
    $h4 = 'Post Decrement value of number [' . IncDec . '] sequance as following : '; 

    $p1 = ++$var1 . '<br>' . ++$var1 . '<br>' . ++$var1 . '<br>' . ++$var1; 
    $p2 = $var2++ . '<br>' . $var2++ . '<br>' . $var2++ . '<br>' . $var2++; 
    $p3 = --$var3 . '<br>' . --$var3 . '<br>' . --$var3 . '<br>' . --$var3; 
    $p4 = $var4-- . '<br>' . $var4-- . '<br>' . $var4-- . '<br>' . $var4--;     
    

    // =====================================================================================================                    
?>
    
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
            
            <h1> 
                <?php echo $h1; ?>        
            </h1>
            <p>                     
                <?php echo $p1;?>                                             
            </p> <br> <hr>                                
            
                    
            <h1> 
                <?php echo $h2; ?>        
            </h1>
            <p>                     
                <?php echo $p2;?>                                             
            </p> <br> <hr>                                
            

            <h1> 
                <?php echo $h3; ?>        
            </h1>
            <p>                     
                <?php echo $p3;?>                                             
            </p> <br> <hr>                                
                                                                   
            <h1> 
                <?php echo $h4; ?>        
            </h1>
            <p>                     
                <?php echo $p4;?>                                             
            </p> <br> <hr>                                
                                                                   
        </body>
    </html>         
    