<!--  php5 - Lesson18 -  String Operators=>    -->
<?php     
    $lessonName  ='String Operators';
    $title = '18 PHP5 - ' . $lessonName;
    $css = '18 PHP 5 In Arabic - String Operators.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    $var1 = 'html' ;
    $var2 = 'css' ;
    $var3 = 'javascript' ;

    // 1) Normal Concatenration :
    $all = $var1 . $var2 . $var3 ; 
    
    // 2) Overwriting Cocatenation :
    $all1 = '';
    $all1 .= $var1;
    $all1 .= $var2;    
    $all1 .= $var3;    
            
    $h1 = 'First Concatenation {.} [Single Concateantion] as following : ';
    $h2 = 'Second Concatenation {.=} [Overwirting Concatenation] as following : ';
    
    $p1 = $all;
    $p2 = $all1;


?>
    
    <!DOCTYPE html>
    <html>
        <head>
            <title> <?php echo $title; ?>  </title>
            <link rel="stylesheet" href= <?php echo $css; ?> media="all">            
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
                <?php 
                    echo $p1;
                ?>                                                             
            </p>
             <br> <hr>                                
        <!-- ----------------------------------------------- -->                 
            <h1> 
                <?php echo $h2; ?>        
            </h1>
            
            <p>                     
                <?php 
                    echo $p2;
                ?>                                             
            </p> 
            <br><br> <hr>                                            

        </body>
    </html>             