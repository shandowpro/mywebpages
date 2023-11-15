<?php     
    $lessonName  ='Concaternation';
    $title = '7 PHP5 - ' . $lessonName;
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;
    $Str1 = 'String value 1';
    $Str2 = 'String Value 2';
    $Num1 = 1;
    $Num2 = 2;
    $langauges = '<ul>';
    $langauges .= '<li> PHP </li>';    
    $langauges .= '<li> HTML </li>';    
    $langauges .= '<li> CSS </li>';    
    $langauges .= '<li> JS </li>';    
    $langauges .= '</ul>';
?>


<!DOCTYPE html>
 <html>
    <head>
        <title> <?php echo $title; ?>  </title>
        <link rel="stylesheet" href="7 PHP 5 In Arabic - Concatenation.css" media="all">
    </head>
    <body>
        <h1>
            <?php echo $heading; ?>            
        </h1>

        <p>
            <?php echo $paragraph; ?> 
        </p> <br>        
        
        <p> 
            This paragrpah is concatenating between (1) String variable & String Value <br>
            <?php echo "This String Value will be contcating with" . " " . $Str2; ?> 
        </p> <br>
                
        <p> 
            This paragrpah is concatenating between (2) String variables <br>
            <?php echo $Str1 . " " . $Str2; ?> 
        </p> <br> <hr>
        
        <p>
            This paragrpah is concatenating between (2) Numbers [as Texual Values] <br>
            <?php echo 1.2; ?> 
        </p>
        
        <p>
            This paragrpah is concatenating between (2) Numberic variables [as Numeric Values] <br>
            <?php echo $Num1 . " " . $Num2; ?> 
        </p>

        <?php echo $langauges; ?>
        
    </body>
</html>         