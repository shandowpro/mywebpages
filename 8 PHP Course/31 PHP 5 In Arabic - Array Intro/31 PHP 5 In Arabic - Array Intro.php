 <!--  31 PHP 5 In Arabic - Array Intro    -->
 
<?php     
    $lessonName  =' Array Intro';
    $title = '31 PHP5 - ' . $lessonName;
    $css = '31 PHP 5 In Arabic - Array Intro.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    
    
        
/* 1) [Function Advanced ] =>
   First Example => Function Advanced => : */
   
    // a) Declaring  Variables :   
    $h11 = "Function Advanced First Example a] : [Function with Argunments with default Values] as following : " ;     
    $p11 = "Function Advanced First Example a] : [Printing Result of function with Arguments with default values] (Calling function with all available Parameters values) ..." ;
    
    $h12 = "Function Advanced First Example b] : [Function with Argunments with default Values] as following : " ;     
    $p12 = "Function Advanced First Example b] : [Printing Result of function with Arguments with default values] (Calling function with some un available (optional) Parameters values) ..." ;           
    
    // b) Declaring  Functions :   
    function sayHello ($name, $age="unknown") {
        $result = 'Hello ' . $name . '<br>' . 'Your age is ' . $age ; 
        return $result;
    }    

    $resultDef = sayHello('Shadi');
    $resultAll = sayHello('Shadi', 30);
// ---------------------------------------------------------
/* 2) [Function Advanced ] =>
    Second Example => Function Advanced => : */
       
    // a) Declaring Variables :   
    $h2 = "Function Advanced Second Example: [Function + Argunments + {random generating built-in Function} ] as following : " ;     
    $p2 = "Function Advanced Second Example: [Printing Result of function {Displaying Result of accepted visitor &Generating ID number || not }]  ..." ;           
    
    // b) Declaring  Functions :   
    function getTicket ($name, $age) {
        $ticket = rand(5000 , 100000);

        if ($age >= 30 ) {
            $msg = 'Hello ' . $name . 'Your Age is ' . $age . ' Gongratz your are allowed to get a ticket' . '<br>' . 'Your ticket number is <span> ['  . $ticket . '] </span>';
            
        } else {            
            $msg = 'Hello ' . $name . 'Your Age is ' . $age . ' Sorry your are Not allowed to get a ticket' . '<br>' ;
        }
                        
        return $msg ;
    }
    $id = getTicket('Shadi' , 33);
   
// -----------------------------------------------------------    

/* 3) [Function Advanced ] =>
    Third Example => Function Advanced => : */
       
    // a) Declaring Variables :   
    $h31 = "Function Advanced Third Example a] : [Passing Function return value through as it's (parameter) variable element + with class formated CSS ]  as following : " ;
    $p31 = "Function Advanced Third Example a] : [Printing Result function after being processed & Formated ]  ..." ; 
    
    $h32 = "Function Advanced Third Example b] : [Passing Function return value through another function as it's (parameter) variable element + with class formated CSS ]  as following : " ;
    $p32 = "Function Advanced Third Example b] : [Printing Result Second Function after being processed in First Function & Formated ]  ..." ; 
    
    // b) Declaring Functions :   
    function makeFrame ($element) {
        $frame = "<div class='nice-frame'> " . $element . "</div>" ;        
        return $frame;
    }
    
    $myElement = makeFrame("Shadi"); // Porcessing the [makeFrame()] function by normal string parameter Value 
    $myElement2 = makeFrame($id);    // Processing the [ makeFrame(getTicket("shadi", 33)) ] function by return of [getTicket("shadi", 33)] function value

// ===========================================================================
?>
<!-- --------------------------------------------------------------------- -->

<!DOCTYPE html>
    <html>
        <head>
            <title> <?php echo $title; ?>  </title>
            <link rel="stylesheet" href= '<?php echo $css; ?>' media="all">            
        <style>
            .nice-frame {
                padding: 10px;
                text-align: center;
                width: 400px;
                margin: 20px auto;
                border-radius: 10px;
                background-color: #EEE;
                border: 1px solid #CCC;
                line-height: 2;
                font-family: Tahoma, Arial;
            }
            
            .nice-frame span {
                font-weight:bold;
                color:#f00;
            }
        </style>
        
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
    <!-- 1) [Function Advanced ] =>
        First Example => Function Advanced => : [Function with Argunments with default Values] :   -->
        <section class="PHPPract" id="PHPPract">                           
            <header>  1) [Function Advanced ] =>  a] : [Function with Argunments with default Values] : [Calling function with all available Parameters values]  =>:  </header>                        
                <div>
                    <h1>  <?php echo $h11; ?>  </h1>            
                    <p>   <?php echo $p11; ?>  </p> <br>                        
                    <?php                         
                        echo $resultDef; // sayHello('Shadi');
                    ?>            
                </div> <br> <br>
                    
            <header>  / 1) [Function Advanced ] =>  b] : [Function with Argunments with default Values] : [Calling function with some un available (optional) Parameters values]  =>:  </header>
                <div>
                    <h1>  <?php echo $h12; ?>  </h1>
                    <p>   <?php echo $p12; ?>  </p> <br>
                    <?php 
                        echo $resultAll;  // sayHello('Shadi', 30);
                        ?>            
                </div> <br> <br>
                                        
            <br><br> <hr>
        </section>
        <!-- =====================================================  -->

    <!--  [Function Advanced ] =>
            Second Example => Function Advanced -->
        <section class="PHPPract" id="PHPPract">  
            <header>  2) [Function Advanced ] => Second Example => [Function + Arguments + {random generating built-in Function} ] => :  </header>
                <div>
                    <h1>  <?php echo $h2; ?>  </h1> 
                    <p>   <?php echo $p2; ?>  </p> <br>
                    <?php                         
                         echo $id; //  $id = getTicket('Shadi' , 33);
                    ?>            
                </div>                                                        
            <br><br> <hr>                
        </section>

<!-- -------------------------------------------------------------- -->                                
    
<!--  [Function Advanced ] =>
    Third Example => Function Advanced -->
        <section class="PHPPract" id="PHPPract">                           
            <header>  3) [Function Advanced ] => Third Example => a) [Passing Function return value through as it's (parameter) variable element + with class formated CSS ] => :  
            </header>
                
                <div>
                    <h1>  <?php echo $h31; ?>  </h1>            
                    <p>   <?php echo $p31; ?>  </p> <br>                        
                    <?php                         
                         echo $myElement; // makeFrame("Shadi");
                    ?>            
                </div>                                                        
                
                
            <header>  3) [Function Advanced  ] => 
                        Third Example => b) [Passing Function return value through another function as it's (parameter) variable element + with class formated CSS ] => : 
            </header>

                <div>
                    <h1>  <?php echo $h32; ?>  </h1>            
                    <p>   <?php echo $p32; ?>  </p> <br>                        
                    <?php                         
                        echo $myElement2; //  makeFrame($id) || makeFrame(getTicket("Shadi", 33)) ;
                    ?>            
                </div>                                                        
            <br><br> <hr>                
        </section>

<!-- -------------------------------------------------------------- -->                                
<!-- -------------------------------------------------------------- -->                
        <br><br> <hr>                                
    <!-- ----------------------------------------------- -->                 
    </body>
</html>             