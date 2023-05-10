 <!--  27 PHP 5 In Arabic - Function with Arguments    -->
 
<?php     
    $lessonName  ='27 PHP 5 In Arabic - Function with arugyments';
    $title = '27 PHP5 - ' . $lessonName;
    $css = '27 PHP 5 In Arabic - Function With Arguments.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    
    
        
/* 1) [Function with one Argument-Parameter  ] =>
   First Example => Function with one Argument-Parameter => : */
   $h1 = "Function with one Argument result as following : " ;     
   $p1 = "User Welcome using Parameter name..." ;        
   
   function welcome ($name) {
       echo 'Welcome ' . $name;
    }
    // ===========================================================
    
/* 2) [Function with two Argument-Parameter  ] =>
    Second Example => Function with two Argument-Parameter => : */        
    $h2 = "Function with two Argument result as following : " ;     
    $p2 = "User Welcome using Parameter name , age ..." ;        
    
    function welcome1 ($name, $age) {
         echo 'Welcome' . $name . '<br>' . 'Your age is = ' . $age;
    }
// -------------------------------------------   

/* 3) [Function with two Argument-Parameter  ] =>
    Third Example => Function with two Argument-Parameter (Calcualting Salary) => : */        
    $h3 = "Function with two Argument result as following : " ;     
    $p3 = "Calculating Salary using Parameter name , days {with 100 per day} ..." ;        
    
    function calcSalary ($name, $days) {
         echo 'Welcome' . $name . '<br>' . 'Your salary  = ' . ($days * 100);
    }
// -------------------------------------------   

/* 4) [Function with two Argument-Parameter  ] =>
    Fourth Example => Function with two Argument-Parameter (Generating Years) [3 users] => : */        
    $h4 = "Function with three Arguments result as following : " ;     
    $p4 = "Generating using Parameter name , days {by different users -3-  ..." ;        
    
    function genYears ($name, $start, $end) {
        echo 'Welcome' . $name . '<br>' . '<h2> Your Gernerated years as following : </h2>' . '<br>' ;
        echo '<select name="years">';
        
        for ($years = $start; $years<= $end; $years++) {
            echo "<option value='$years'>" .$years . "</option>" ;
        }
        
        echo "</select>" . "<br>";

    }
// -------------------------------------------   

/* 5) [Function with two Argument-Parameter + processing  ] =>
    Fifth Example => Function with two Argument-Parameter (Calculating age by days) => : */        
    $h5 = "Function with two Arguments result as following : " ;     
    $p5 = "Calcualting age by days using Parameter name , age by years  ..." ;        
    
    function  calcAgeDays($name, $age) {
        echo 'Welcome' . $name . '<br>' . 'Your Age by days = ' . '<br>' . ($age * 365) ;                                        
    }
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

        <!--  1) [Function with one Argument-Parameter  ] => First Example => Function with one Argument-Parameter =>  -->
        <section class="PHPPract" id="PHPPract">                           
            <header> 1) [Function with one Argument-Parameter  ] => First Example => Function with one Argument-Parameter => :  </header>
                <div> 
                    <h1>  <?php echo $h1; ?>  </h1>            
                    <p>   <?php echo $p1; ?>  </p> <br>                        
                        <?php 
                           welcome("Shadi");                                                        
                        ?>            
                </div>
                <br><br>                
                        
        <!-- 2) [Function with two Argument-Parameter  ] => Second Example => Function with two Argument-Parameter =>  -->
            <header> 2) [Function with two Argument-Parameter  ] => Second Example => Function with two Argument-Parameter => :  </header>
                <div> 
                    <h1>  <?php echo $h2; ?>  </h1>            
                    <p>   <?php echo $p2; ?>  </p> <br>                        
                        <?php 
                            welcome1("Shadi" , "33");                                                        
                        ?>            
                </div>
                <br><br>                
        
        <!-- 3) [Function with two Argument-Parameter  ] => Third Example => Function with two Argument-Parameter (Calcualting Salary) => :  -->
            <header> 3) [Function with two Argument-Parameter] => Third Example => Function with two Argument-Parameter (Calcualting Salary)] => :  </header>
                <div> 
                    <h1>  <?php echo $h3; ?>  </h1>            
                    <p>   <?php echo $p3; ?>  </p> <br>                        
                        <?php 
                            calcSalary("Shadi" , "50");                                                        
                        ?>            
                </div>
                <br><br>                
        
        <!-- 4) [Function with two Argument-Parameter  ] => Fourth Example => Function with two Argument-Parameter (Generating Years) [3 users] => :  -->
            <header> 4) [Function with two Argument-Parameter  ] => Fourth Example => Function with two Argument-Parameter (Generating Years) [3 users] =>:  </header>
                <div> 
                    <h1>  <?php echo $h4; ?>  </h1>            
                    <p>   <?php echo $p4; ?>  </p> <br>                        
                        <?php 
                            genYears("Shadi" , "1990" , "2020");                                                        
                            genYears("Ali" , "1999" , "2015");                                                        
                            genYears("Omar" , "1900" , "2000");                                                        
                        ?>            
                </div>
                <br><br>                
        
        <!--  5) [Function with one Argument-Parameter  ] => Fifth Example => Function with two Argument-Parameter (Calculating age by days) :  -->
            <header>  5) [Function with one Argument-Parameter  ] => Fifth Example => Function with two Argument-Parameter (Calculating age by days)  => :  </header>
                <div> 
                    <h1>  <?php echo $h5; ?>  </h1>            
                    <p>   <?php echo $p5; ?>  </p> <br>                        
                        <?php 
                            calcAgeDays("Shadi" , "35");                                                        
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