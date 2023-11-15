 <!--  22 PHP 5 In Arabic - While Loop =>    -->
 
<?php     
    $lessonName  ='While Loop Stamemnt Advanced';
    $title = '22 PHP5 - ' . $lessonName;
    $css = '22 PHP 5 In Arabic - While Loop.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    
    
        
// First Example => While Loop  => [Default While (1) ] :
    $h1 = "First Example [ While => [Default While (1)]}" ;     
    $p1 = "Printing from 1 - 20 " ;        
// ======================================================    

// Second Example => While Loop  => [Default While (2) ] :
    $h2 = "Second Example [ While => [Default While (2)]}" ;     
    $p2 = "Creating children elements From 1 - 20 " ;        
// ======================================================    

// Third Example => While Loop  => [Shorten Form While (1) ] :
    $h3 = "Third Example [ While => [Shorten While (1)]}" ;     
    $p3 = "Printing from 1 - 20 " ;        
// ======================================================    

// Fourth Example => While Loop  => [Shorten Form While (2) ] :
    $h4 = "Fourth Example [ While => [Shorten While (2)]}" ;     
    $p4 = "Creating children elements From 1 - 20 " ;        
// ======================================================    
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

         <!-- First Example => While Loop  => [Default While (1) ]  -->
         <section>  
            <!-- <head>  First Example => While Loop  => [Default While (1) ]   : </head> -->
             
            <h1>  <?php echo $h1; ?>  </h1>            
            <p>   <?php echo $p1; ?>  </p> <br>                        
            <select>  
                <?php 
                    $y = 1;
                    while ( $y <= 20 ) {
                        echo "<option value='$y'>" .  $y . "</option>" . "<br>";
                        $y++;
                    }
                ?>
            </select>
        </section>             
<!-- -------------------------------------------------------------- -->
                
         <!-- Second Example => While Loop  => [Default While (2) ]  -->
         <section>  
            <head> Second Example => While Loop  => [Default While (2) ]  : </head>
             
            <h1>  <?php echo $h2; ?>  </h1>            
            <p>   <?php echo $p2; ?>  </p> <br>                        
            <select>  
                <?php 
                    $d = 1;
                    while ( $d<=20 ) {                        
                        echo "<option value='$d'>" . $d . "</option>" . "<br>";
                        $d++;
                    }
                ?>
            </select>

        </section> <hr>           
<!-- -------------------------------------------------------------- -->
                
         <!-- Third Example => While Loop  => [Shorten Form While (1) ]   -->
         <section>  
            <!-- <head> Third Example => While Loop  => [Shorten Form While (1) ]: </head> -->
             
            <h1>  <?php echo $h3; ?>  </h1>            
            <p>   <?php echo $p3; ?>  </p> <br>                        
            <select>  
                <?php 
                    $y = 1;
                    while ( $y <= 20 ):
                        echo "<option value='$y'>" .  $y . "</option>" . "<br>";
                        $y++;
                    endwhile;
                ?>
            </select>
        </section>   <hr>          
<!-- -------------------------------------------------------------- -->
                
         <!--  Fourth Example => While Loop  => [Shorten Form While (2) ]    -->
         <section>  
            <!-- <head> Fourth Example => While Loop  => [Shorten Form While (2)] : </head> -->
             
            <h1>  <?php echo $h4; ?>  </h1>            
            <p>   <?php echo $p4; ?>  </p> <br>                        
            <ul>  
                <?php 
                    $d = 1;
                    while ( $d<=20 ) :
                        echo $d . "<br>";
                        $d++;
                    endwhile;
                ?>
            </ul>
        </section>             
<!-- -------------------------------------------------------------- -->                
        <br><br> <hr>                                
    <!-- ----------------------------------------------- -->                 
        </body>
    </html>             