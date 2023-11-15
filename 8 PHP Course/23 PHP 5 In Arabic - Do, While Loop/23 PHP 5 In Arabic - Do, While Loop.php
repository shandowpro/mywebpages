 <!--  23 PHP 5 In Arabic - Do, While Loop =>    -->
 
<?php     
    $lessonName  ='Do, While Loop Stamemnt Advanced';
    $title = '23 PHP5 - ' . $lessonName;
    $css = '23 PHP 5 In Arabic - Do, While Loop.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    
    
        
// First Example => Do, While Loop  => [Default Do, While (1) ] {looping single of numbers} :
    $h1 = "First Example [ Do, While => [Default Do, While (1)]}" ;     
    $p1 = "Printing from 1 - 20 " ;        
// ======================================================    

// Second Example => Do, While Loop  => [Default Do, While (2) ] {looping creating children in parent element } :
    $h2 = "Second Example [ Do, While => [Default Do, While (2)]}" ;     
    $p2 = "Creating children elements with values : 1 - 20 " ;        

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

          <!-- First Example => Do, While Loop  => [Default Do, While (1) ] {looping single of numbers} : -->
         <section>  
            <!-- <head>  First Example => Do, While Loop  => [Default Do, While (1) ]   : </head> -->
             
            <h1>  <?php echo $h1; ?>  </h1>            
            <p>   <?php echo $p1; ?>  </p> <br>                        
                <?php 
                    $y = 1;
                    Do{
                        echo  $y . "<br>";
                        $y++;
                    } While ( $y <= 20 );                    
                ?>            
        </section>             
<!-- -------------------------------------------------------------- -->
                
         <!--  Second Example => Do, While Loop  => [Default Do, While (2) ] {looping creating children in parent element } :  -->
         <section>  
            <head> Second Example => Do, While Loop  => [Default Do, While (2) ]  : </head>
             
            <h1>  <?php echo $h2; ?>  </h1>            
            <p>   <?php echo $p2; ?>  </p> <br>                        
            <select>  
                <?php 
                    $d = 1;
                    Do{
                        echo "<option value='$d'>" . $d . "</option>" . "<br>";
                        $d++;
                    }  While ( $d<=20 );                                            
                ?>
            </select>

        </section> <hr>           
<!-- -------------------------------------------------------------- -->                                
<!-- -------------------------------------------------------------- -->                
        <br><br> <hr>                                
    <!-- ----------------------------------------------- -->                 
        </body>
    </html>             