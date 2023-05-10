 <!--  28 PHP 5 In Arabic - Function with Return    -->
 
<?php     
    $lessonName  ='29 PHP 5 In Arabic - Function with Return';
    $title = '28 PHP5 - ' . $lessonName;
    $css = '28 PHP 5 In Arabic - Function with Return.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    
    
        
/* 1) [Function with Return (Empty) ] =>
   First Example => The var_dump [datatype] of the (3) types of empty functions  => : */
   
   $h11 = "Function with result [Type 1 (empty space)] as following : " ;     
   $p11 = "Data type of the empt function with type1 (empty space) ..." ;           
   function empty1 () {       
    //    return var_dump(empty1());       
    }
// ---------------------------------------------------------
    $h12 = "Function with result [Type 2 (empty Return)] as following : " ;     
    $p12 = "Data type of the empt function with type2 (empty Return) ..." ;            
    function empty2 () {
        return;
    }
    // ----------------------------------------------------
    $h13 = "Function with result [Type 3 (null Return)] as following : " ;     
    $p13 = "Data type of the empt function with type3 (null Return) ..." ;            
    function empty3 () {
        return null;
    }
// ===========================================================
    
/* 2) [Function with Return (advanced Exp1)] =>
    Second Example => Calculating the age of parameter => : */        
    $h2 = "Function with result [Exp1] as following : " ;     
    $p2 = "Calculating the age of parameter ..." ;    
    
    function welcome ($name, $age) {
        return 'Welcome' . $name . '<br>' . 'Your age is = ' . $age;
    }
    // -------------------------------------------   
        
/* 3) [Function with Return (advanced Exp2)] =>
    Third Example => Processing the of parameter => : */            
    $h3 = "Function with result [Exp2] as following : " ;     
    $p3 = "Processing the of parameter inside the function with return..." ; 
    
    function multNum ($name, $num) {
        $result =  ($num * 100);
        return 'Welcome' . $name . '<br>' . 'Your result  = ' . $result ;
    }
    // -------------------------------------------   

/* 4) [Function with Return (comparison with Datatype function by [return & echo]) ] =>
    Fourth Example => Printing the datatype of each [return && echo] => : */            
    $h41 = "Printing the datatype with {echo} [Exp3] as following : " ;     
    $p41 = "Printing the datatype of each [return]..." ;                        
    function DTRerturn () {        
        return 'Hello';
    }
    
    $h42 = "Printing the datatype with {echo} [Exp3] as following : " ;     
    $p42 = "Printing the datatype of each [echo] ..." ;                    
    function DTEcho () {        
        echo 'Hello';
    }
    // -------------------------------------------   
    
    /* 4) [Function with Return (advanced Exp3)] =>
    Fourth Example => Processing Multiple the of parameters => : */            
        
    // $h4 = "Function with result [Exp3] as following : " ;     
    // $p4 = "Processing Processing Multiple the of parameters [Multiply Table]..." ;                    
    
    // function mult ($num, $start, $end) {
    //     echo  '<h2> Your Gernerated years as following : </h2>' . '<br>' ;
    //     echo '<select name="years">';
        
    //         for ($years = $start; $years<= $end; $years++) {
    //             echo "<option value='$years'>" .$years . "</option>" ;
    //         }        
    //         echo "</select>" . "<br>";        
    // }
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

    <!-- 1) [Function with Return (Empty) ] =>
    First Example => The var_dump [datatype] of the (3) types of empty functions  => :  -->
        <section class="PHPPract" id="PHPPract">                           
            <header>  1) [Function with Return (Empty) ] => 
                First Example => The var_dump [datatype] of the (3) types of empty functions  => :  </header>
            <div>                     
                <header> [Type 1 (empty space)] : </header>
                <div>
                    <h1>  <?php echo $h11; ?>  </h1>            
                    <p>   <?php echo $p11; ?>  </p> <br>                        
                    <?php 
                        var_dump(empty1());
                        ?>            
                </div> <br> <br>
                
                <header> [Type 2 (empty Return)] : </header>
                <div>
                    <h1>  <?php echo $h12; ?>  </h1>            
                    <p>   <?php echo $p12; ?>  </p> <br>                        
                    <?php 
                    var_dump(empty2());                                                        
                    ?>            
                </div> <br> <br>
                
                <header> [Type 3 (null Return)] : </header>
                <div>
                    <h1>  <?php echo $h13; ?>  </h1>            
                    <p>   <?php echo $p13; ?>  </p> <br>                        
                    <?php 
                        var_dump(empty3());                                                        
                    ?>            
                </div>
            </div>
            <br><br> <hr>                
        <!-- =====================================================  -->

        <!--  2) [Function with Return (advanced Exp1)] =>
            Second Example => Calculating the age of parameter => : -->
            <header> 2) [Function with Return (advanced Exp1)] =>
                    Second Example => Calculating the age of parameter => :  </header>
            <div> 
                <h1>  <?php echo $h2; ?>  </h1>            
                <p>   <?php echo $p2; ?>  </p> <br>                        
                    <?php 
                        echo welcome("Shadi" , "33");                                  
                    ?>            
            </div>
                <br><br> <hr>                
        <!-- ========================================================= -->

        <!--  3) [Function with Return (advanced Exp2)] =>
            Third Example => Pocessing the of parameter => : */             -->
            <header> 3) [Function with Return (advanced Exp2)] =>
                    Third Example => Pocessing the of parameter :  </header>
            <div> 
                <h1>  <?php echo $h3; ?>  </h1>            
                <p>   <?php echo $p3; ?>  </p> <br>                        
                    <?php 
                        echo multNum("Shadi" , "100");                               
                    ?>            
            </div>
                <br><br>                
        <!-- ============================================================= -->

        <!--  4) [Function with Return (comparison with Datafunction by [return & echo]) ] =>
            Fourth Example => Printing the datatype of each [return && echo] => :  -->
            <header> 4) [Function with Return (comparison with Datafunction by [return & echo]) ] =>
                    Fourth Example => Printing the datatype of each [return && echo] :  </header>
            <div> 
                <div>
                    <h1>  <?php echo $h41; ?>  </h1>            
                    <p>   <?php echo $p41; ?>  </p> <br>                        
                        <?php 
                            echo DTRerturn();               
                        ?>            
                </div>
                
                <div>
                    <h1>  <?php echo $h42; ?>  </h1>            
                    <p>   <?php echo $p42; ?>  </p> <br>                        
                        <?php 
                            echo DTEcho();
                        ?>            
                </div>
            </div>
            <br><br>                
                            
        </section>
<!-- -------------------------------------------------------------- -->                                
<!-- -------------------------------------------------------------- -->                
        <br><br> <hr>                                
    <!-- ----------------------------------------------- -->                 
        </body>
    </html>             