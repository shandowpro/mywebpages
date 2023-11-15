<?php 
    $name = 'Shadi';
    $age = 33;
    $firstname =$name;    
    $title = '6 PHP 5 In Arabic - Variables';
    $heading = 'This is head by PHP file  ';
    $paragraph = 'This is paragraph by PHP file  ';
?>


<!DOCTYPE html>
 <html>
    <head>
        <title> <?php echo $title; ?>  </title>
        <link rel="stylesheet" href="6 PHP 5 In Arabic - Variables.css" media="all">
    </head>
    <body>
        <h1>
            <?php echo $heading; ?>            
        </h1>

        <p>
            <?php echo $paragraph; ?> 
        </p>        


        <label> User name : </label> 
        <input type='text' value='<?php echo $firstname; ?>'>
        
        <label> age : </label> 
        <input type='text' value='<?php echo $age; ?>' >
        
    </body>
</html>         