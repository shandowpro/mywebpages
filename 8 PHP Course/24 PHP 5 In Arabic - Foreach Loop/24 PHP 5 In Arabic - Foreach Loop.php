 <!--  24 PHP 5 In Arabic - Foreach Loop =>    -->
 
<?php     
    $lessonName  ='Foreach Loop Loop Stamemnt Advanced';
    $title = '24 PHP5 - ' . $lessonName;
    $css = '24 PHP 5 In Arabic - Foreach Loop.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    
    
        
// First Example => foreach Loop type 1 => [deaing with (Indexed Array ) ] {looping Array Contents (Values)} :
    $h1 = "First Example { foreach Loop => [Indexed Array]}" ;     
    $p1 = "looping Array Contents (Values)" ;        
    $countries = array('Egypt', 'Saudi Arabia', 'Qatar', 'Bahrain', 'Syria') ;        
    // ======================================================    
    
// Second Example => foreach Loop type 2 => [deaing with (Associative Array ) ] {looping Array Contents ( keys + Values )} :
    $h2 = "Second Example { foreach Loop => [Associative Array]}" ;     
    $p2 = "looping Array Contents (keys + Values)" ;        
    $countries1 = array(
        'EG' => 'Egypt',
        'SA' => 'Saudi Arabia',
        'QA' => 'Qatar',
        'BH' => 'Bahrain',
        'SR' => 'Syria' ) ;        

// ===========================================================================
?>
<!-- --------------------------------------------------------------------- -->

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

        <!--  First Example => foreach Loop type 1 => [deaing with (Indexed Array ) ] {looping Array Contents (Values)} : -->
         <section>              
             
            <h1>  <?php echo $h1; ?>  </h1>            
            <p>   <?php echo $p1; ?>  </p> <br>                        
                <?php 
                    foreach ($countries as $value) {
                        echo  $value . "<br>";                        
                    }                                                                                 
                ?>            
        </section>             
<!-- -------------------------------------------------------------- -->
                
        <!--  Second Example => foreach Loop type 2 => [deaing with (Associative Array ) ] {looping Array Contents ( keys + Values )} :  -->
         <section>              
             
            <h1>  <?php echo $h2; ?>  </h1>            
            <p>   <?php echo $p2; ?>  </p> <br>                                    
                <?php 
                    foreach ($countries1 as $key => $value) {
                        echo  $key . '=>' . $value . "<br>";                        
                    }                               
                ?>            

        </section> <hr>           
<!-- -------------------------------------------------------------- -->                                
<!-- -------------------------------------------------------------- -->                
        <br><br> <hr>                                
    <!-- ----------------------------------------------- -->                 
        </body>
    </html>             