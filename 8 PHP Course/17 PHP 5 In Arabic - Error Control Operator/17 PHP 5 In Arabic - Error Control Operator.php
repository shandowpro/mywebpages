<!--  php - Lesson17 - Error Control Operator=>    -->
<?php     
    $lessonName  ='Error Control Operator';
    $title = '17 PHP5 - ' . $lessonName;
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    // $file = fopen('myFile.txt', 'r');

    // $Efile = @fopen('myFile.txt', 'r') or die('This file has not been Found !');    

    $server = 'ServerName'; 
    $user = 'userName'; 
    $pass = 'myPass';     
    $db = 'Database'; 

    // $connect = mysqli_connect($server , $user, $pass , $db);
    // $Econnect = @mysqli_connect($server , $user, $pass , $db) or die('Error Connection with this Sever/database ');

    // $inc = include('another.php');
    // $Einc = @(include('another.php')) or die('There is no such file existed!');

    $h11 = 'First Application [Opening file]: a) {without using Error message control} Result :'; 
    $h12 = 'First Application [Opening file]: b) {with using Error message control} Result :';
    $h21 = 'Second Application [Server & Database Connecting]: a) {without using Error message control} Result :';
    $h22 = 'Second Application [Server & Database Connecting]: b) {with using Error message control} Result :';
    $h31 = 'Third Application [Including]: a) {without using Error message control} Result :';
    $h32 = 'Third Application [Including]: b) {with using Error message control} Result :';
    
    // $p11 = $file; 
    // $p12 = $Efile; 
    // $p21 = $connect; 
    // $p22 = $Econnect; 
    // $p31 = $inc; 
    // $p32 = $Einc;                     
?>
    
    <!DOCTYPE html>
    <html>
        <head>
            <title> <?php echo $title; ?>  </title>
            <link rel="stylesheet" href="10 PHP 5 In Arabic - If, Elseif, Else.css" media="all">            
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
             <?php echo $h12; ?>        
            </h1>
            
            <p>                                 
                <?php 
                    // @fopen('myFile.txt', 'r') or die('This file has not been Found !');
                ?>                                                             
            </p>
             <br> <hr>                                
        <!-- ----------------------------------------------- -->        
         
            <h1> 
                <?php echo $h22; ?>        
            </h1>
            
            <p>                     
                <?php 
                    // @mysqli_connect($server , $user, $pass , $db) or die('Error Connection with this Sever/database ');
                ?>                                             
            </p> 
            <br> <hr>                                
        
        <!-- ----------------------------------------------- -->
    
            <h1> 
                <?php echo $h32; ?>        
            </h1>
            
            <p>                                 
                <?php 
                    @(include('another.php')) or die('There is no such file existed!');
                ?>    
            </p> 
            <br> <hr>                                                    
        </body>
    </html>             