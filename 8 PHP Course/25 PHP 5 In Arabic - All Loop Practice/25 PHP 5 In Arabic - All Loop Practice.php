 <!--  25 PHP 5 In Arabic - All Loop Practice    -->
 
<?php     
    $lessonName  ='PHP5 All Loop Practice';
    $title = '25 PHP5 - ' . $lessonName;
    $css = '25 PHP 5 In Arabic - Foreach Loop.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    
    
        
/* 1) [For Loop ] =>
   First Example => For Loop [Default] => : */
   $h11 = "First Loop statement (For) [Default Form]: " ;     
   $p11 = "Looping numbers from 1-20 " ;        
// -------------------------------------------
   // Second Example => For Loop [Shorten] => : */
   $h12 = "First Loop statement (For) [Shorten Form]: " ;
   $p12 = "Looping numbers from 1-20 " ; 

   // ==========================================================

/* 2) [While Loop ] =>
   First Example => While Loop [Default Form] => : */
   $h21 = "Second Loop statement (While) [Default Form]: " ;
   $p21 = "Looping numbers from 1-20 " ;
// -------------------------------------------
   // Second Example => While Loop [Shorten Form] => : */
   $h22 = "Second Loop statement (While) [Shorten Form]: " ;     
   $p22 = "Looping numbers from 1-20 " ;        
// ============================================================

/* 3) [do - While Loop ] =>
   One Example => While Loop => : */
   $h3 = "Third Loop statement (Do-While) [Default Form]: " ;     
   $p3 = "Looping numbers from 1-20 " ;        
// ============================================================
   
/* 4) [Foreach Loop ] =>
    First Example => foreach Loop type 1 => [deaing with (Indexed Array) ] {looping Array Contents (Values)} : */
    $h41 = "First Example { foreach Loop => [Indexed Array]}" ;     
    $p41 = "looping Array Contents (Values)" ;        
    $countries = array('Egypt', 'Saudi Arabia', 'Qatar', 'Bahrain', 'Syria') ;        
    // ======================================================    
    
    // Second Example => foreach Loop type 2 => [deaing with (Associative Array) ] {looping Array Contents ( keys + Values )} :
    $h42 = "Second Example { foreach Loop => [Associative Array]}" ;     
    $p42 = "looping Array Contents (keys + Values)" ;        
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
    <!-- ========================================================================================= -->

        <!-- 1) [For Loop ] =>
            First Example => For Loop [Default] => :  -->
            <header> 1) [For Loop ] => First Example => For Loop [Default] => {printing from 1 - 20}  :  </header>
            <section>                          
                <div> 
                    <h1>  <?php echo $h11; ?>  </h1>            
                    <p>   <?php echo $p11; ?>  </p> <br>                        
                        <?php 
                            for ($i=1; $i<=20; $i++) {
                                echo  $i . "<br>";                        
                            }                                                                                 
                        ?>            
                </div>
                <br><br>
        <!-------------------------------------------------------------------------- -->
        <!-- / 1) /[For Loop ] =>
            Second Example => For Loop [Shorten] => :  -->
            <header> /1) [For Loop ] => Second Example => For Loop [Shorten] => {printing from 1 - 20}  :  </header>
                <div> 
                    <h1>  <?php echo $h12; ?>  </h1>            
                    <p>   <?php echo $p12; ?>  </p> <br>                        
                        <?php 
                            $i = 1;
                            for ( ; ; ) {
                                if ($i > 20) {
                                    break;
                                }
                                echo  $i . "<br>";                        
                                $i++;
                            }                                                                                 
                        ?>            
                </div>
            </section>             
            <br><br> <hr>                                
            
            <!-- ========================================================================================= -->
        <!--  2) [While Loop ] =>
            First Example => While Loop [Default] => :  -->
        <header> 1) [While Loop ] => First Example => While Loop [Default] => {printing from 1 - 20}  :  </header>
            <section>                          
                <div> 
                    <h1>  <?php echo $h21; ?>  </h1>            
                    <p>   <?php echo $p21; ?>  </p> <br>                        
                        <?php 
                            $i=1;
                            while ($i<=20) {
                                echo  $i . "<br>";                        
                                $i++;
                            }                                                                                 
                        ?>            
                </div>
                <br><br>
            <!-------------------------------------------------------------------------- -->                                            

        <!--  /2) [ while Loop ] => :
            Second Example => While Loop [Shorten] => :  -->
            <header> /2) [While Loop ] => Second Example => While Loop [Shorten] => {printing from 1 - 20}  :  </header>
                <div> 
                    <h1>  <?php echo $h22; ?>  </h1>            
                    <p>   <?php echo $p22; ?>  </p> <br>                        
                        <?php 
                            $i = 1;
                            while ($i<=20) :                                
                                echo  $i . "<br>";                        
                                $i++;
                            endwhile;
                        ?>            
                </div>
            </section>             
            <br><br> <hr>                                
         
        <!-- ========================================================================================= -->            
        <!--  3) [do while Loop ] => :  -->
            
        <header> 3) [do while Loop ] => one Example => do while Loop => {printing from 1 - 20} :  </header>
            <section>             
                <h1>  <?php echo $h3; ?>  </h1>            
                    <p>   <?php echo $p3; ?>  </p> <br>                        
                    <?php 
                            $i = 1;
                            do{
                                echo  $i . "<br>";
                                $i++;                            
                            } while ($i<=20);                                                                                 
                            ?>            
            </section>             
            <br><br> <hr>                                
            
            <!-- ========================================================================================= -->
        <!-- 4) [Foreach Loop ] =>
            First Example => Foreach Loop type 1 => [deaing with (Indexed Array) ] {looping Array Contents (Values)} :  -->

        <header> 4) [Foreach Loop ] => one Example => Foreach Loop => {printing from array all elements [values only] } :  </header>
            <section>                          
                <h1>  <?php echo $h41; ?>  </h1>            
                <p>   <?php echo $p41; ?>  </p> <br>                        
                    <?php 
                        foreach ($countries as $value) {
                            echo  $value . "<br>";                        
                        }                                                                                 
                    ?>            
            </section>             
            <br><br> <hr>                                
            <!-- -------------------------------------------------------------- -->
        <!-- /4) [Foreach Loop ] =>  
            Second Example => foreach Loop type 2 => [deaing with (Associative Array ) ] {looping Array Contents ( keys + Values )} :  -->
            
        <header> /4) [Foreach Loop ] => one Example => Foreach Loop => {printing from array all elements [keys + values] } :  </header>
            <section>                           
                <h1>  <?php echo $h42; ?>  </h1>            
                <p>   <?php echo $p42; ?>  </p> <br>                                    
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