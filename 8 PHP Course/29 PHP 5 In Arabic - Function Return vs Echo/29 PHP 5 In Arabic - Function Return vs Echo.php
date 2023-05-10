 <!--  29 PHP 5 In Arabic - Function Return vs Echo    -->
 
<?php     
    $lessonName  ='29 PHP 5 In Arabic - Function Return vs Echo';
    $title = '29 PHP5 - ' . $lessonName;
    $css = '29 PHP 5 In Arabic - Function Return vs Echo.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    
    
        
/* 1) [Function with Echo ] =>
   First Example => Function With Echo => : */
   
   $h11 = "Function with Echo [Printing Result] as following : " ;     
   $p11 = "Function with Echo [Printing Result] by using paramteter {views} ..." ;           
   
   $h12 = "Function with Echo [Datatype of Function] as following : " ;     
   $p12 = "Function with Echo [Datatype of Function ] by using (var_dump) && paramteter {views} ..." ;                 
   $views = 150; 
   
   function increaseViewsEcho ($views) {       
       echo $views +1 ;
    }
    
    $dataTypeEcho = var_dump(increaseViewsEcho($views)) . '<br>' ;
    // ---------------------------------------------------------
    
/* 2) [Function with Return ] =>
    Second Example => Function With Return => : */
    $h21 = "Function with Return [Printing Result] as following : " ; 
    $p21 = "Function with Return [Printing Result] by using paramteter {views1} ..." ; 
   
    $h22 = "Function with Return [Datatype of Function] as following : " ; 
    $p22 = "Function with Return [Datatype of Function ] by using (var_dump) && paramteter {views1} ..." ; 

    $views1 = 150;
    function increaseViewsReturn($views1) {
        return $views1 + 1;
    }
    
    $dataTypeReturn = var_dump(increaseViewsReturn($views1)) . '<br>';
    // ----------------------------------------------------    
    // -------------------------------------------   

// ===========================================================================
?>
<!-- --------------------------------------------------------------------- -->

    <!DOCTYPE html>
    <html>
        <head>
            <title> <?php echo $title; ?>  </title>
            <link rel="stylesheet" href= '<?php echo $css; ?>' media="all">            
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
    <!-- 1) [Function with Echo ] =>
        First Example => Function With Echo => :  -->
        <section class="PHPPract" id="PHPPract">                           
            <header>  1) [Function with Echo ] => 
                First Example => [Printing Result] of && [datatype] by (var_dump()) of [function With Echo script]  => :  </header>
                                               
                <div>
                    <h1>  <?php echo $h11; ?>  </h1>            
                    <p>   <?php echo $p11; ?>  </p> <br>                        
                    <?php 
                        // echo increaseViewsEcho($views);
                         increaseViewsEcho($views);
                    ?>            
                </div> <br> <br>
                
                                
                <div>
                    <h1>  <?php echo $h12; ?>  </h1>            
                    <p>   <?php echo $p12; ?>  </p> <br>                        
                    <?php 
                        var_dump(increaseViewsEcho($views));
                        ?>            
                </div> <br> <br>
                                        
            <br><br> <hr>                
        </section>
        <!-- =====================================================  -->

    <!--  2) [Function with Return ] =>
        Second Example => Function With Return => :  -->
        <section class="PHPPract" id="PHPPract">                           
            <header>  2) [Function with Return  ] => 
                Second Example => [Printing Result] of && [datatype] by (var_dump()) of [function with Return] => :  </header>
                                               
                <div>
                    <h1>  <?php echo $h21; ?>  </h1>            
                    <p>   <?php echo $p21; ?>  </p> <br>                        
                    <?php 
                        // echo increaseViewsEcho($views);
                         increaseViewsReturn($views1);
                    ?>            
                </div> <br> <br>
                
                                
                <div>
                    <h1>  <?php echo $h22; ?>  </h1>            
                    <p>   <?php echo $p22; ?>  </p> <br>                        
                    <?php 
                        var_dump(increaseViewsReturn($views));
                        ?>            
                </div> <br> <br>
                                        
            <br><br> <hr>                
        </section>

<!-- -------------------------------------------------------------- -->                                
<!-- -------------------------------------------------------------- -->                
        <br><br> <hr>                                
    <!-- ----------------------------------------------- -->                 
        </body>
    </html>             