 <!--  php5 - Lesson20 - For Loop =>    -->
 
<?php     
    $lessonName  ='For Loop Stamemnt';
    $title = '20 PHP5 - ' . $lessonName;
    $css = '20 PHP 5 In Arabic - For Loop.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    
    
        
// First Example [ Genereating select element with options children Elements (Years) {using [for loop]}   ] :
    $h1 = "First Example [ Genereating select element with options children Elements (Years) {using [for loop]}" ;     
    $p1 = "Auto Generating years from [1900-2020] in the select element & options children " ;         
// ======================================================
    
// Second Example [ Genereating select element with options children Elements (Days) {using [for loop]}   ] :
        
    $h2 = "Second Example [ Genereating select element with options children Elements (Days) {using [for loop]}" ;     
    $p2 = "Auto Generating Days from [1-31] in the select element & options children " ;         
// ========================================================
    
    
// Thrid Example [ Genereating select element with options children Elements (Days) (Decrement) {using [for loop]}   ] :
        
    $h3 = "Third Example [ Genereating select element with options children Elements (Days) (Decrement) {using [for loop]} " ;     
    $p3 = "Auto Generating Days (decremently) from [31-1] in the select element & options children " ;                 
    // ========================================================
    
// Fourth Example [ Genereating select element with options children Elements (Days) (Dynamic varaibles) {using [for loop]} :
    $langs = array('HTML', 'CSS', 'JS', 'DOM', 'BOM', 'PHP');
    $count = count($langs);
        
    $h4 = "Fourth Example [ Genereating select element with options children Elements (Days) (Dynamic varaibles) {using [for loop]} " ;     
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
        7
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

         <!-- First Example {Genereating select element with options children Elements (Years) {using [for loop]} -->
         <section>  
            <head> First/ Genereating select element with options children Elements (Years) {using [for loop]}  : </head>
             
            <h1>  <?php echo $h1; ?>  </h1>            
            <p>   <?php echo $p1; ?>  </p> <br>                        
            <select>  
                <?php 
                    for ($y=1900; $y<=2020; $y++) {
                        echo "<option value='$y'>" .  $y . "</option>" . "<br>";
                    }
                ?>
            </select>
        </section>             
<!-- -------------------------------------------------------------- -->
                
         <!-- Second Example {Genereating select element with options children Elements (Years) {using [for loop]} -->
         <section>  
            <head> Second Example {Genereating select element with options children Elements (Years) {using [for loop]}  : </head>
             
            <h1>  <?php echo $h2; ?>  </h1>            
            <p>   <?php echo $p2; ?>  </p> <br>                        
            <select>  
                <?php 
                    for ($d=1; $d<=31; $d++) {
                        echo "<option value='$d'>" .  $d . "</option>" . "<br>";
                    }
                ?>
            </select>

        </section>             
<!-- -------------------------------------------------------------- -->
                
         <!-- Thrid Example [ Genereating select element with options children Elements (Days) (Decrement) {using [for loop]}   -->
         <section>  
            <head> Third Example [ Genereating select element with options children Elements (Days) (decremently) {using [for loop]}   : </head>
             
            <h1>  <?php echo $h3; ?>  </h1>            
            <p>   <?php echo $p3; ?>  </p> <br>                        
            <select>  
                <?php 
                    for ($d=31; $d>=1; $d--) {
                        echo "<option value='$d'>" .  $d . "</option>" . "<br>";
                    }
                ?>
            </select>

        </section>             
<!-- -------------------------------------------------------------- -->
                
         <!--  Fourth Example [ Genereating select element with options children Elements (Array languages) (Dynamic varaibles) {using [for loop]}   -->
         <section>  
            <head> Fourth Example [ Genereating select element with options children Elements from (Array languages) (Dynamic varaibles) {using [for loop]} : </head>
             
            <h1>  <?php echo $h4; ?>  </h1>            
            <p>   <?php echo $p4; ?>  </p> <br>                        
            <ul>  
                <?php 
                    for ($d=0; $d < $count; $d++) {
                        echo "<li>" .  $langs[$d] . "</li>" . "<br>";
                    }
                ?>
            </ul>
        </section>             
<!-- -------------------------------------------------------------- -->                
        <br><br> <hr>                                
    <!-- ----------------------------------------------- -->                 
        </body>
    </html>             