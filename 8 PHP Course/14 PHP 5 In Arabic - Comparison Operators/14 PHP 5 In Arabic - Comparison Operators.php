<!--  php - Lesson14 =>    -->
<?php     
    $lessonName  ='Comparison Operators';
    $title = '14 PHP5 - ' . $lessonName;
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;
    
    // $theme ='dark';
    $theme ='light';
    $siteLang ='Arabic';
    $css ='';
    
    $h = '';        
    $p = '';        
    
    $h1 = '';
    $p1 = '';        
    
    $h2 = '';                
    $p2 = '';                    


// Coditional If [Application 1 (Theme switching )] :
    if ($theme == 'dark') {
        $css = 'dark.css';
        $p1 = 'Your current theme is [Dark mode]';        
    
    } elseif ($theme == 'light') {        
        $css = 'light.css';
        $p1 = 'Your current theme is [Light mode]';
    }
    // -------------------------------------------

// Coditional If [Application 2 (Site language switching )] :
    if ($siteLang == 'English' ) {
        $p2 = 'Your Site language is English ' ;        
    
    } elseif ($siteLang == 'Arabic') {                
        $p2 = 'Your Site language is Arabic ';
    
    } else {
        $p2 = 'Your Site language is unknown!';
    }
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
                <?php echo $h; ?>        
            </h1>
            <p>                     
                <?php echo $p;?>                                             
            </p> <br> <hr>                                
            
                    
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
                                                                   
        </body>
    </html>         
    