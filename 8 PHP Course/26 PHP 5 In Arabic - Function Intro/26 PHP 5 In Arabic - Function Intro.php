 <!--  26 PHP 5 In Arabic - Function Intro    -->
 
<?php     
    $lessonName  ='26 PHP 5 In Arabic - Function Intro';
    $title = '26 PHP5 - ' . $lessonName;
    $css = '26 PHP 5 In Arabic - Function Intro.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    
    
        
/* 1) [Function  ] =>
   First Example => Function with For Loop [to loop numbers form [1 - 20] => : */
        $h11 = "Function with For Loop [to loop numbers form [1 - 20] : " ;     
        $p11 = "Looping numbers from 1-20 using function " ;        
   // a) Counting function loop with for (from 1 - 20):
    function counting () {
        for ($i=1; $i<=20; $i++)  {
            echo $i . '<br>';
        }
    }
    
    // Second Example => printing multiply table function loop with for (for pre Given single number):
        $h12 = "Function with For Loop : " ;     
        $p12 = "Looping [Multiply table function loop with for (for pre Given single number)] " ;        
    
    function multN () {        
        $num =1;
        $startN = 1;
        $endN = 10;
                
        echo $num . ' Time Table is as following :' . '<br>' ;
        for ($startN=1; $startN <= $endN; $startN++)  {
            echo $num . ' X ' . $startN . ' = ' .($num*$startN) . '<br>';
        }
    }

// -------------------------------------------   

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

        <!-- First Example => Function with For Loop [to loop numbers form [1 - 20] => :-->
        <section>                          
                <header> 1) [Function with For Loop ] => First Example => For Loop [Default] => {printing from 1 - 20}  :  </header>
                <div> 
                    <h1>  <?php echo $h11; ?>  </h1>            
                    <p>   <?php echo $p11; ?>  </p> <br>                        
                        <?php 
                            counting();                                                        
                        ?>            
                </div>
                <br><br>                
                        
            <header> 2) [Function with For Loop ] => Second Example => Looping [Multiply table function loop with for (for pre Given single number)] :  </header>
                <div> 
                    <h1>  <?php echo $h12; ?>  </h1>            
                    <p>   <?php echo $p12; ?>  </p> <br>                        
                        <?php 
                            multN();                                                        
                        ?>            
                </div>
                <br><br>                


            </section>
<!-- -------------------------------------------------------------- -->                                
<!-- -------------------------------------------------------------- -->                
        <br><br> <hr>                                
    <!-- ----------------------------------------------- -->                 
        </body>
    </html>             