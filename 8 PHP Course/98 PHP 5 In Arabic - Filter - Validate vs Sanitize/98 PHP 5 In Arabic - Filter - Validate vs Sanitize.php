<!--  98 PHP 5 In Arabic - Filter - Validate vs Sanitize --> 
<!-- =============================================================== -->

<!-- This Form will be sent to the [This page] File-->
    <form action="<?php echo $_SERVER["PHP_SELF"]; ?>" method="POST" name="form">         
        <label> Insert your passoword:  </label>  <input type="text" name="password"> <br> <!--[INTEGER]-->
        <label> Insert your Url:         </label>  <input type="text" name="url"> <br> <!--[URL]-->       
        <!-- <label> Insert your username:   </label>  <input type="text" name="username"> <br> -->
        <!-- <label> Insert your Percentage: </label>  <input type="text" name="percentage"> <br>  -->
        <!-- <label> Insert your Website:    </label>  <input type="text" name="url"> <br>        -->
        <!-- <label> Insert your Email:      </label>  <input type="email" name="email"> <br>     -->
        <input type="submit" value="Send"> <br>
    </form>

<?php
    
    $lessonName ='Filter - Validate Vs Sanitize ';
    $title = '98 PHP5 - ' . $lessonName;
    $css = '98 PHP 5 In Arabic - Filter - Validate vs Sanitize.css';

    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName . "<br>";    
    // ============================================================================
    
    /* In this lesson will be (2) Applications [Simple-main Filter Validating & Sanitizing (options + flags)] of {(2) types of inputs[integer && url]} [Using PHP Filter FILTER_VALIDATE_  || FILTER_SANITIZE_ ] :
        // 1- First Example [Sanitizing Integer-URL with main Filter type only] => for {(2) types of inputs[integer && url]}  
        // 2- Second Example [Sanitizing & Validating Integer-URL with main Filter type only] => for {(2) types of inputs[integer && url]}
    */    
        
    
    $main =  'In this lesson will be (2) Applications [Simple and Advanced (options + flags)] [Using PHP Filter options and Flags to filter data {integer || url} from a single Form]  as following  : ' . '<br>' . '<ul>' .
    '<li>' . 'First Example [Sanitizing Integer-URL with main Filter type only] => for {(2) types of inputs[integer && url]}' . '</li>' .      
    '<li>' . 'Second Example [Sanitizing & Validating Integer-URL with main Filter type only] => for {(2) types of inputs[integer && url]}' . '</li>' .     
    '</ul>';            
    // ============================================================================    

    // (*) => First Example [Sanitizing Integer && URL with main Filter type only] => for {(2) types of inputs[integer && url]} :
        $ha1 = 'First Example [Sanitizing Integer-URL with main Filter type only] => for {(2) types of inputs[integer && url]} : as following : ' . "<br>" ; 
    
        // Testing if the received data from the Form by using the legal send method [post] only before any processing procedures :
            if ($_SERVER['REQUEST_METHOD'] == 'POST') {

            // Defining the sent input fields inside a Variables [before & After Sanitizing ] : 
                // a) Definging before Sanitizing :
                    $inputInt = $_POST['password']; 
                    $inputUrl = $_POST['url']; 
                
                // b) Definging after Sanitizing :
                    $inputIntS = filter_var($inputInt, FILTER_SANITIZE_NUMBER_INT) ; 
                    $inputUrlS = filter_var($inputUrl, FILTER_SANITIZE_URL) ; 
            
                    
            // Starting Validation Testing of both [Integer + Url values] => if the  are {not empty} : 
                if (empty($inputInt) || empty($inputUrl)) {
                    
                    echo 'Sorry the One or both of the inputs is an Empty Value!';
                    
                } else {
                    
                    // Starting Testing [in case the Both values are not empty] :
                        
                    // Printing the posted variable from Form [without any filter] + [with using @ sign to ignore any syntax error ] : 
                        echo 'The posted values from the [Form] , without any filter is ' . "<br>";
                        echo 'Integer Input Value [before Filtering] is  :' . @$inputInt . "<br>" .
                                'URL Input Value [before Filtering] is  :' . @$inputUrl . "<br>" ."<hr>";
                        
                    // Printing the posted variable from Form [After Applying Sanitizing] + [with using @ sign to ignore any syntax error ] : 
                        echo 'The posted values from the [Form] , without any filter is ' . "<br>";
                        echo 'Integer Input Value [After Applying Sanitizing] is  :' . @$inputIntS . "<br>" .
                            'URL Input Value [After Applying Sanitizing] is  :' . @$inputUrlS . "<br>" ."<hr>";                                                                        
                }

        } else {
            // Printing a message fopr othe user to inform him about using illegal method to acess to the form :
                echo 'Your have acessed to this page with Illegal Method !';
        }                            
    
        echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        
    // =================================================================================                                
              
    // (*) => Second Example [Sanitizing & Validating Integer-URL with main Filter type only] => for {(2) types of inputs[integer && url]} :
        $ha2 = 'Second Example [Sanitizing & Validating Integer-URL with main Filter type only] => for {(2) types of inputs[integer && url]} : as following : ' . "<br>" ; 
    
        // Testing if the received data from the Form by using the legal send method [post] only before any processing procedures :
            if ($_SERVER['REQUEST_METHOD'] == 'POST') {

            // Defining the sent input fields inside a Variables [before & After Sanitizing ] : 
                // a) Definging before Sanitizing :
                    $inputInt = $_POST['password']; 
                    $inputUrl = $_POST['url']; 
                
                // b) Definging after Sanitizing :
                    $inputIntS = filter_var($inputInt, FILTER_SANITIZE_NUMBER_INT) ; 
                    $inputUrlS = filter_var($inputUrl, FILTER_SANITIZE_URL) ; 
            
                    
                    // Starting Validation Testing of both [Integer + Url values] => if the  are {not empty} : 
                if (empty($inputInt) || empty($inputUrl)) {
                    
                    echo 'Sorry the One or both of the inputs is an Empty Value!';

                } else {
                    
                    // Starting Testing [in case the Both values are not empty] :
                        
                    // Printing the posted variable from Form [without any filter]  + [with using @ sign to ignore any syntax error ] : 
                        echo 'The posted values from the [Form] , without any filter is ' . "<br>";
                        echo 'Integer Input Value [before Filtering] is  :' . @$inputInt . "<br>" .
                                'URL Input Value [before Filtering] is  :' . @$inputUrl . "<br>" ."<hr>";
                        
                    // Printing the posted variable from Form [After Applying Sanitizing] + [with using @ sign to ignore any syntax error ] : 
                        echo 'The posted values from the [Form] , without any filter is ' . "<br>";
                        echo 'Integer Input Value [After Applying Sanitizing] is  :' . @$inputIntS . "<br>" .
                                'URL Input Value [After Applying Sanitizing] is  :' . @$inputUrlS . "<br>" ."<hr>";

                    // // Printing the posted variable from Form + [with using @ sign to ignore any syntax error] + [with using {FILTER_VALIDATE_INT} && {FILTER_VALIDATE_URL} filter only (without using any advanced options or Flags) for Filter : (Integer input) & (Url input)] : 
                    //     echo 'The posted value from the [Form] , by using [FILTER_VALIDATE_INT] && {FILTER_VALIDATE_URL} main filters only (without using any advanced options or Flags) are ' . "<br>";
                    //     echo @filter_var($inputIntS, FILTER_VALIDATE_INT) . "<br>" ;    
                    //     echo @filter_var($inputUrlS, FILTER_VALIDATE_URL) . "<br>" ;    
                                                    
                    // Testing if Sanitized inputs [integer] is valid by : {FILTER_VALIDATE_INT} :
                        if (filter_var($inputIntS, FILTER_VALIDATE_INT) !== FALSE ) { 
                            echo 'The Saintized Input value [' . $inputIntS . '] => ' . ' from the [Form] is a Valid as : [Integer]' . '<br>' ;
                            // echo 'The Saintized Input value' . $inputUrlS . ' =>' . ' from the [Form] is a Valid as : [URL]' . '<br>' ;
                                                                                    
                        } else {
                            echo 'The posted value from the [Form] is NOT a Valid as : [Integer]' . "<br>";
                        }                
                    
                    // Testing if Sanitized inputs [url] is valid by : {FILTER_VALIDATE_URL} :
                        if (filter_var($inputUrlS, FILTER_VALIDATE_URL) !== FALSE ) { 
                            // echo 'The Saintized Input value' . $inputIntS . ' =>' . ' from the [Form] is a Valid as : [Integer]' . '<br>' ;
                            echo 'The Saintized Input value [' . $inputUrlS . '] => ' . ' from the [Form] is a Valid as : [URL]' . '<br>' ;
                                                                                    
                        } else {
                            echo 'The posted value from the [Form] is NOT a Valid as : [Url] ' . "<br>";
                        }                
                }

            } else {
                // Printing a message fopr othe user to inform him about using illegal method to acess to the form :
                    echo 'Your have acessed to this page with Illegal Method !';
            }                            
    
        echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        
    // =================================================================================                                
                                                  
// ==================================================================================
?>
<!-- --------------------------------------------------------------------- -->

<!DOCTYPE html>
    <html>
        <head>
            <title> <?php echo $title; ?>  </title>
            <link rel="stylesheet" href= '<?php echo $css; ?>' media="all">            
            <!-- <style>
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
            </style> -->
            <style>
                header {
                    font-size: 20px; font-weight: bold; color:#fff; background-color: gray; border:3px solid black; text-align: center;
                }

                .tag {
                    border: 3px solid red; 
                    border-radius: 50px;
                    margin: 50px auto;
                    font-size: 30px;
                    font-weight: bold;
                    text-decoration: underline;
                    display: block;
                    text-align: center;
                    width: 200px;
                }
            </style>
        </head>
            
        <body class='body' style="background-color: <?php echo $body; ?>" > 
            <h1>
                The following textnode of this head has been genereated by PHP path : <br>        
                <?php echo $heading; echo '<br>'; ?>            
            </h1>

            <p>
                The following textnode of this Paragraph has been genereated by PHP path : <br>        
                <?php echo $paragraph; echo '<br>'; ?> 
            </p> <br>        
            <!-- ------------------------------------------------------------------------- -->            
            <?php
                echo $main;
            ?>

            <section class="PHPPract" id="PHPPract">                                       
            
            <!-- (*) => First Example [Sanitizing Integer-URL with main Filter type only] => for {(2) types of inputs[integer && url]} : -->
                        
                    <header>
                        First Example [Sanitizing Integer-URL with main Filter type only] => for {(2) types of inputs[integer && url]}:  <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1; ?>  </h1>  

                        <?php                                           

                            // Testing if the received data from the Form by using the legal send method [post] only before any processing procedures :
                                if ($_SERVER['REQUEST_METHOD'] == 'POST') {

                                    // Defining the sent input fields inside a Variables [before & After Sanitizing ] : 
                                        // a) Definging before Sanitizing :
                                            $inputInt = $_POST['password']; 
                                            $inputUrl = $_POST['url']; 
                                        
                                        // b) Definging after Sanitizing :
                                            $inputIntS = filter_var($inputInt, FILTER_SANITIZE_NUMBER_INT) ; 
                                            $inputUrlS = filter_var($inputUrl, FILTER_SANITIZE_URL) ; 
                                    
                                            
                                    // Starting Validation Testing of both [Integer + Url values] => if the  are {not empty} : 
                                        if (empty($inputInt) || empty($inputUrl)) {
                                            
                                            echo 'Sorry the One or both of the inputs is an Empty Value!';
                                            
                                        } else {
                                            
                                            // Starting Testing [in case the Both values are not empty] :
                                                
                                            // Printing the posted variable from Form [without any filter]  + [with using @ sign to ignore any syntax error ] : 
                                                echo 'The posted values from the [Form] , without any filter is ' . "<br>";
                                                echo 'Integer Input Value [before Filtering] is  :' . @$inputInt . "<br>" .
                                                        'URL Input Value [before Filtering] is  :' . @$inputUrl . "<br>" ."<hr>";
                                                
                                            // Printing the posted variable from Form [After Applying Sanitizing] + [with using @ sign to ignore any syntax error ] : 
                                                echo 'The posted values from the [Form] , without any filter is ' . "<br>";
                                                echo 'Integer Input Value [After Applying Sanitizing] is  :' . @$inputIntS . "<br>" .
                                                    'URL Input Value [After Applying Sanitizing] is  :' . @$inputUrlS . "<br>" ."<hr>";                                                                        
                                        }
                        
                                } else {
                                    // Printing a message fopr othe user to inform him about using illegal method to acess to the form :
                                        echo 'Your have acessed to this page with Illegal Method !';
                                }                            
                            

                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                            
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            
                                        
            <!-- (*) => Second Example [Sanitizing & Validating Integer-URL with main Filter type only] => for {(2) types of inputs[integer && url]} : -->
                        
                    <header>
                        Second Example [Sanitizing & Validating Integer-URL with main Filter type only] => for {(2) types of inputs[integer && url]} :  <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha2; ?>  </h1>  
                        <?php                                           

                            // Testing if the received data from the Form by using the legal send method [post] only before any processing procedures :
                                if ($_SERVER['REQUEST_METHOD'] == 'POST') {

                                    // Defining the sent input fields inside a Variables [before & After Sanitizing ] : 
                                        // a) Definging before Sanitizing :
                                            $inputInt = $_POST['password']; 
                                            $inputUrl = $_POST['url']; 
                                        
                                        // b) Definging after Sanitizing :
                                            $inputIntS = filter_var($inputInt, FILTER_SANITIZE_NUMBER_INT) ; 
                                            $inputUrlS = filter_var($inputUrl, FILTER_SANITIZE_URL) ; 
                                    
                                            
                                            // Starting Validation Testing of both [Integer + Url values] => if the  are {not empty} : 
                                        if (empty($inputInt) || empty($inputUrl)) {
                                            
                                            echo 'Sorry the One or both of the inputs is an Empty Value!';
                        
                                        } else {
                                            
                                            // Starting Testing [in case the Both values are not empty] :
                                                
                                            // Printing the posted variable from Form [without any filter]  + [with using @ sign to ignore any syntax error ] : 
                                                echo 'The posted values from the [Form] , without any filter is ' . "<br>";
                                                echo 'Integer Input Value [before Filtering] is  :' . @$inputInt . "<br>" .
                                                        'URL Input Value [before Filtering] is  :' . @$inputUrl . "<br>" ."<hr>";
                                                
                                            // Printing the posted variable from Form [After Applying Sanitizing] + [with using @ sign to ignore any syntax error ] : 
                                                echo 'The posted values from the [Form] , without any filter is ' . "<br>";
                                                echo 'Integer Input Value [After Applying Sanitizing] is  :' . @$inputIntS . "<br>" .
                                                        'URL Input Value [After Applying Sanitizing] is  :' . @$inputUrlS . "<br>" ."<hr>";
                        
                                            // // Printing the posted variable from Form + [with using @ sign to ignore any syntax error] + [with using {FILTER_VALIDATE_INT} && {FILTER_VALIDATE_URL} filter only (without using any advanced options or Flags) for Filter : (Integer input) & (Url input)] : 
                                            //     echo 'The posted value from the [Form] , by using [FILTER_VALIDATE_INT] && {FILTER_VALIDATE_URL} main filters only (without using any advanced options or Flags) are ' . "<br>";
                                            //     echo @filter_var($inputIntS, FILTER_VALIDATE_INT) . "<br>" ;    
                                            //     echo @filter_var($inputUrlS, FILTER_VALIDATE_URL) . "<br>" ;    
                                                                            
                                            // Testing if Sanitized inputs [integer] is valid by : {FILTER_VALIDATE_INT} :
                                                if (filter_var($inputIntS, FILTER_VALIDATE_INT) !== FALSE ) { 
                                                    echo 'The Saintized Input value' . $inputIntS . ' =>' . ' from the [Form] is a Valid as : [Integer]' . '<br>' ;
                                                    // echo 'The Saintized Input value' . $inputUrlS . ' =>' . ' from the [Form] is a Valid as : [URL]' . '<br>' ;
                                                                                                            
                                                } else {
                                                    echo 'The posted value from the [Form] is NOT a Valid as : [Integer]' . "<br>";
                                                }                
                                            
                                            // Testing if Sanitized inputs [url] is valid by : {FILTER_VALIDATE_URL} :
                                                if (filter_var($inputUrlS, FILTER_VALIDATE_URL) !== FALSE ) { 
                                                    // echo 'The Saintized Input value' . $inputIntS . ' =>' . ' from the [Form] is a Valid as : [Integer]' . '<br>' ;
                                                    echo 'The Saintized Input value' . $inputUrlS . ' =>' . ' from the [Form] is a Valid as : [URL]' . '<br>' ;
                                                                                                            
                                                } else {
                                                    echo 'The posted value from the [Form] is NOT a Valid as : [Url]' . "<br>";
                                                }                
                                        }
                        
                                    } else {
                                        // Printing a message fopr othe user to inform him about using illegal method to acess to the form :
                                            echo 'Your have acessed to this page with Illegal Method !';
                                    }                            
                            
                                echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            
                                                    
            </section>
                                                                    
        </body>
    </html> 