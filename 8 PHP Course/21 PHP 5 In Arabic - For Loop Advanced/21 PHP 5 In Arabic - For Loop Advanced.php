 <!--  php5 - Lesson20 - For Loop =>    -->
 
<?php     
    $lessonName  ='For Loop Stamemnt Advanced';
    $title = '21 PHP5 - ' . $lessonName;
    $css = '21 PHP 5 In Arabic - For Loop Advanced.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    
    
        
// First Example => Advanced for Loop First Level => [ Removing First Expression (Intial Expression)] :
    $h1 = "First Example [ Advanced for Loop First Level => [ Removing First Expression (Intial Expression)]}" ;     
    $p1 = "Auto Generating years from [1900-2020] in the select element & options children " ;         
// ======================================================
    
// Second Example => Advanced for Loop Second Level => [ Removing First && Second Expressions (Intial Expression + Condition Expression)] :        
    $h2 = "Second Example [ Advanced for Loop Second Level => [ Removing First && Second Expressions (Intial Expression + Condition Expression)]}" ;     
    $p2 = "Auto Generating Days from [1-31] in the select element & options children " ;         
// ========================================================
    
    
// Third Example => Advanced for Loop Third Level => [ Removing First && Second && Third Expressions (Intial Expression + Condition Expression + Increment /Decrement)] :        
    $h3 = "Third Example [ Advanced for Loop Third Level => [ Removing First && Second && Third Expressions (Intial Expression + Condition Expression + Increment /Decrement)]} " ;     
    $p3 = "Auto Generating Days (decremently) from [31-1] in the select element & options children " ;                 
    // ========================================================
    
// Fourth Example => Advanced for Loop Third Level => [ Genereating select element with options children Elements (Days) (Dynamic varaibles) {using [for loop]} :
    $langs = array('HTML', 'CSS', 'JS', 'DOM', 'BOM', 'PHP');
    $count = count($langs);
        
    $h4 = "Fourth Example [ Advanced for Loop Third Level => [ Genereating select element with options children Elements (Days) (Dynamic varaibles) {using [for loop]} " ;     
    $p4 = "Auto Generating Days (decremently) from [array languages] in the select element & options children " ;                 
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

         <!-- First Example => Advanced for Loop First Level => [ Removing First Expression (Intial Expression)] -->
         <section>  
            <head>  First Example => Advanced for Loop First Level => [ Removing First Expression (Intial Expression)]  : </head>
             
            <h1>  <?php echo $h1; ?>  </h1>            
            <p>   <?php echo $p1; ?>  </p> <br>                        
            <select>  
                <?php 
                    $y = 1900;
                    for ( ; $y<=2020; $y++) {
                        echo "<option value='$y'>" .  $y . "</option>" . "<br>";
                    }
                ?>
            </select>
        </section>             
<!-- -------------------------------------------------------------- -->
                
         <!-- Second Example => Advanced for Loop Second Level => [ Removing First && Second Expressions (Intial Expression + Condition Expression)]} -->
         <section>  
            <head> Second Example => Advanced for Loop Second Level => [ Removing First && Second Expressions (Intial Expression + Condition Expression)] } : </head>
             
            <h1>  <?php echo $h2; ?>  </h1>            
            <p>   <?php echo $p2; ?>  </p> <br>                        
            <select>  
                <?php 
                    $d = 1;
                    for ( ;; $d++) {
                        if ($d > 32){
                            break;
                        }
                        echo "<option value='$d'>" .  $d . "</option>" . "<br>";
                    }
                ?>
            </select>

        </section> <hr>           
<!-- -------------------------------------------------------------- -->
                
         <!-- Third Example => Advanced for Loop Third Level => [ Removing First && Second && Third Expressions (Intial Expression + Condition Expression + Increment /Decrement)] }   -->
         <section>  
            <head> Third Example [ Third Example => Advanced for Loop Third Level => [ Removing First && Second && Third Expressions (Intial Expression + Condition Expression + Increment /Decrement)] }   : </head>
             
            <h1>  <?php echo $h3; ?>  </h1>            
            <p>   <?php echo $p3; ?>  </p> <br>                        
            <select>  
                <?php 
                    $d = 31;
                    for (;;) {
                        if ($d==0) {
                            break;
                        }
                        echo "<option value='$d'>" .  $d . "</option>" . "<br>";
                        $d--;
                    }
                ?>
            </select>
        </section>   <hr>          
<!-- -------------------------------------------------------------- -->
                
         <!--  Fourth Example [ Genereating select element with options children Elements (Array languages) (Dynamic varaibles) {using [for loop]}   -->
         <section>  
            <head> Fourth Example [ Advanced for Loop Third Level => [ Genereating select element with options children Elements (Days) (Dynamic varaibles) {using [for loop]} : </head>
             
            <h1>  <?php echo $h4; ?>  </h1>            
            <p>   <?php echo $p4; ?>  </p> <br>                        
            <ul>  
                <?php 
                    $d = 0;                     
                    for (;;) {
                        if ($d == $count) {
                            break;
                        }
                        echo "<li>" .  $langs[$d] . "</li>" . "<br>";
                        $d++;
                    }
                ?>
            </ul>
        </section>             
<!-- -------------------------------------------------------------- -->                
        <br><br> <hr>                                
    <!-- ----------------------------------------------- -->                 
        </body>
    </html>             