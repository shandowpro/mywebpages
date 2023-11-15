<!--  96 PHP 5 In Arabic - Filter - Filter_Var Basics --> 
<!-- =============================================================== -->

<!-- This Form will be sent to the [Check.php] File-->
    <form action="<?php echo $_SERVER["PHP_SELF"]; ?>" method="POST" name="form">          <!-- Seventh Example --> 
        <label> Insert your username:   </label>  <input type="text" name="username"> <br>   <!-- First Example --> 
        <label> Insert your passoword:  </label>  <input type="text" name="password"> <br>   <!-- Second Example --> 
        <label> Insert your Percentage: </label>  <input type="text" name="percentage"> <br> <!-- Third Example -->        
        <label> Insert your Website:    </label>  <input type="text" name="url"> <br>        <!-- Fourth Example --> 
        <label> Insert your Email:      </label>  <input type="email" name="email"> <br>     <!-- Fifth Example --> 
        <label> Insert your IP:         </label>  <input type="text" name="ip"> <br>         <!-- Sixth Example --> 
        <input type="submit" value="Send"> <br>
    </form>

<?php
    
    $lessonName  ='Filter - what is Filter and why to use it ';
    $title = '96 PHP5 - ' . $lessonName;
    $css = '96 PHP 5 In Arabic - Filter - Filter_Var Basics.css';

    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName . "<br>";    
    // ============================================================================
    
    /* In this lesson will be (7) Applications [Simple and Semi-Advanced] [Using Filter PHP to filter data from a single Form -with different types] :
        // 1- First Example [Filtering String input ] from Form, by using {filter_var(var name , FILTER_SANITIZE_STRING) [username]} 
        // 1- Second Example [Filtering Integer input ] from Form, by using {filter_var(var name , FILTER_VAIDATE_INT) [password]} 
        // 2- Third Example [Filtering Float input ] from Form, by using {filter_var(var name , FILTER_VAIDATE_FLOAT) [percentage]}         
        // 3- Fourth Example [Filtering Url input ] from Form, by using {filter_var(var name , FILTER_VAIDATE_URL)} 
        // 4- Fifth Example [Filtering Email input ] from Form, by using {filter_var(var name , FILTER_VAIDATE_EMAIL)} 
        // 5- Sixth Example [Filtering Email input ] from Form, by using {filter_var(var name , FILTER_VAIDATE_IP)}  
        // 6- Seventh Example [Filtering Fill Form Inputs types ] from Form, by using {filter_var() for each type } 
    */    
        
    
    $main =  'In this lesson will be (7) Applications [Simple and Semi Advanced] [Using Filter PHP to filter data from a single Form -with different types] as following  : ' . '<br>' . '<ul>' .
    '<li>' . 'First Example [Filtering String input ] from Form, by using {filter_var(var name , FILTER_SANITIZE_STRING) [username]} ' . '</li>' .      
    '<li>' . 'Second Example [Filtering Integer input ] from Form, by using {filter_var(var name , FILTER_VAIDATE_INT) [password]} ' . '</li>' .      
    '<li>' . 'Third Example [Filtering Url input ] from Form, by using {filter_var(var name , FILTER_VAIDATE_FLOAT) [percentage]}' . '</li>' .      
    '<li>' . 'Fourth Example [Filtering Email input ] from Form, by using {filter_var(var name , FILTER_VAIDATE_URL)} ' . '</li>' .      
    '<li>' . 'Fifth Example [Filtering Email input ] from Form, by using {filter_var(var name , FILTER_VAIDATE_EMAIL)} ' . '</li>' .      
    '<li>' . 'Sixth Example [Filtering Email input ] from Form, by using {filter_var(var name , FILTER_VAIDATE_IP)}' . '</li>' .      
    '<li>' . 'Seventh Example [Filtering Fill Form Inputs types ] from Form, by using {filter_var() for each type }' . '</li>' .      
    '</ul>';
    
    // ============================================================================        
    // ============================================================================    
    
    // (*) => First Example [Filtering String input ] from Form, by using {filter_var(var name , FILTER_SANITIZE_STRING) [username]} :
        $ha1 = 'First Example [Filtering String input ] from Form, by using {filter_var(var name , FILTER_SANITIZE_STRING) [username]} : as following : ' . "<br>" ; 
        
            // Testing if the received data from the Form by using the legal send method [post] only before any  processing procedures :
                if ($_SERVER['REQUEST_METHOD'] == 'POST') {

                // Defining the sent input field inside a Varialbe : 
                    @$inputStr = $_POST['username']; 
                
                // Printing the posted variable from Form [without any filter]  + [with using @ sign to ignore any syntax error ] : 
                    echo 'The posted value from the [Form] , without any filter is ' . "<br>";
                    echo @$inputStr . "<br>" . "<hr>";
                    
                // Testing if the string value is {not empty} [before testing the filter] : 
                    if (empty($inputStr)) {
                        
                        echo 'Sorry the String Vairable is Empty Value!';

                    } else {
                        
                        // Starting Testing in case the value is not empty.
                        
                        // Printing the posted variable from Form + [with using @ sign to ignore any syntax error] [with using {FILTER_SANITIZE_STRING} filter for Filter : (username input)] : 
                            echo 'The posted value from the [Form] , by using [FILTER_SANITIZE_STRING] is ' . "<br>";
                            echo @filter_var($inputStr, FILTER_SANITIZE_STRING) . "<br>" ;    
                            
                        // Testing if the Filter is Valid or not after filtering it by the assinged Filter :
                            if (filter_var($inputStr, FILTER_SANITIZE_STRING) !== FALSE) {
                                echo 'The posted value from the [Form] is a Valid as : [String]' ;
                            } else {
                                echo 'The posted value from the [Form] is NOT a Valid as : [String]  ' . "<br>";
                            }                
                    }

            } else {
                // Printing a message fopr othe user to inform him about using illegal method to acess to the form :
                    echo 'Your have acessed to this page with Illegal Method !';
            }
        
            
        // // Application External Link :
        //     echo '<a href="check.php"> Go to the application page [ It is Recommended to go through The Form ] </a>';
        
        echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        // ---------------------------------------------                                    
    // =================================================================================                                
              
    // (*) => Second Example [Filtering Integer input ] from Form, by using {filter_var(var name , FILTER_VAIDATE_INT)[password]} :
        $ha2 = 'Second Example [Filtering Integer input ] from Form, by using {filter_var(var name , FILTER_VAIDATE_INT)[password]}: as following : ' . "<br>" ; 
        
        // Testing if the received data from the Form by using the legal send method [post] only before any processing procedures :  
            if ($_SERVER['REQUEST_METHOD'] == 'POST') {

                // Defining the sent input field inside a Varialbe : 
                    @$inputInt = $_POST['password']; 
                
                // Printing the posted variable from Form [without any filter] : 
                    echo 'The posted value from the [Form] , without any filter is ' . "<br>";
                    echo @$inputInt . "<br>" ;
                
                // Printing the posted variable from Form + [with using @ sign to ignore any syntax error] [with using {FILTER_VALIDATE_INT} filter for Filter : (password input)] : 
                    echo 'The posted value from the [Form] , by using [FILTER_VALIDATE_INT] is ' . "<br>";
                    echo @filter_var($inputInt, FILTER_VALIDATE_INT) . "<br>" ;    

                // Testing if the Integer value is not empty [before testing the filter] : 
                    if (empty($inputInt)) {
                    
                        echo 'Sorry the Integer Vairable is Empty Value!';
                                                
                    } else { 

                        // Starting TEsting in case the value is not empty.
                        
                        // Testing if the Filter is Valid or not after filtering it by the assinged Filter :
                            if (filter_var($inputInt, FILTER_VALIDATE_INT ) !== FALSE) {
                                echo 'The posted value from the [Form] is a Valid as : [Integer] ' . "<br>";
                            } else {
                                echo 'The posted value from the [Form] is NOT a Valid as : [Integer]  ' . "<br>";
                            }                        
                    }
                                                                    
            } else {
                // Printing a message fopr othe user to inform him about using illegal method to acess to the form :
                    echo 'Your have acessed to this page with Illegal Method !';
            }
                        
        // // Application External Link :
        //     echo '<a href="check.php"> Go to the application page [ It is Recommended to go through The Form ] </a>';
        
        echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        // ---------------------------------------------                                    
    // =================================================================================                                
              
    // (*) => Third Example [Filtering Float input ] from Form, by using {filter_var(var name , FILTER_VAIDATE_FLOAT) [percentage]} :
        $ha3 = 'Third Example [Filtering Float input ] from Form, by using {filter_var(var name , FILTER_VAIDATE_FLOAT) [percentage]} as following : ' . "<br>" ; 
                                
        // Testing if the received data from the Form by using the legal send method [post] only before any  processing procedures :

            if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    
                // Defining the sent input field inside a Varialbe : 
                    @$inputFlt = $_POST['percentage']; 
                
                // Printing the posted variable from Form [without any filter]  + [with using @ sign to ignore any syntax error] : 
                    echo 'The posted value from the [Form] , without any filter is ' . "<br>";
                    echo @$inputFlt . "<br>" . "<hr>";
                
                // Printing the posted variable from Form + [with using @ sign to ignore any syntax error] [with using {FILTER_VALIDATE_FLOAT} filter for Filter : (percentage input)] :
                    echo 'The posted value from the [Form] , by using [FILTER_VALIDATE_FLOAT] is ' . "<br>";
                    echo @filter_var($inputFlt, FILTER_VALIDATE_FLOAT) . "<br>" ;                                    
                
                
                // Testing if the Float value is not empty [before testing the filter] : 
                    if (empty($inputFlt)) {
                    
                        echo 'Sorry the Float Vairable is Empty Value!';
                                                
                    } else { 

                        // Starting Testing in case the value is not empty.
        
                        // Testing if the Filter is Valid or not after filtering it by the assinged Filter :
                            if (filter_var($inputFlt, FILTER_VALIDATE_FLOAT ) !== FALSE) {
                                echo 'The posted value from the [Form] is a Valid as : [Float] ' . "<br>";
                            } else {
                                echo 'The posted value from the [Form] is NOT a Valid as : [Float]  ' . "<br>";
                            }
                    }

        
            } else {
                // Printing a message fopr othe user to inform him about using illegal method to acess to the form :
                    echo 'Your have acessed to this page with Illegal Method !';
            }
            
            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        // ---------------------------------------------                                    
    // =================================================================================                                              
    
    // (*) => Fourth Example [Filtering Email input ] from Form, by using {filter_var(var name , FILTER_VAIDATE_URL)} :
        $ha4 = 'Fourth Example [Filtering Email input ] from Form, by using {filter_var(var name , FILTER_VAIDATE_URL)}: as following : ' . "<br>" ; 
                                
            // Testing if the received data from the Form by using the legal send method [post] only before any  processing procedures :
                if ($_SERVER['REQUEST_METHOD'] == 'POST') {

                // Defining the sent input field inside a Varialbe : 
                    @$inputUrl = $_POST['url']; 
                
                // Printing the posted variable from Form [without any filter]  + [with using @ sign to ignore any syntax error] : 
                    echo 'The posted value from the [Form] , without any filter is ' . "<br>";
                    echo @$inputUrl . "<br>" . "<hr>";
                
                // Printing the posted variable from Form [without filter for Validating |float Datatype for Filter : (website link input) ]  + [with using @ sign to ignore any syntax error] : 
                    echo 'The posted value from the [Form] , by using [FILTER_VALIDATE_URL] is ' . "<br>";
                    echo @filter_var($inputUrl, FILTER_VALIDATE_URL) . "<br>" ;
                
                // Testing if the Url value is not empty [before testing the filter] : 
                    if (empty($inputUrl)) {
                    
                        echo 'Sorry the Url Vairable is Empty Value!';
                                                
                    } else {
                        // Starting Testing in case the value is not empty.
    
                        // Testing if the Filter is Valid or not after filtering it by the assinged Filter :
                            if (filter_var($inputUrl, FILTER_VALIDATE_URL ) !== FALSE) {
                                echo 'The posted value from the [Form] is a Valid as : [Website Address Link] ' . "<br>";
                            } else {
                                echo 'The posted value from the [Form] is NOT a Valid as : [Website Address Link] ' . "<br>";
                            }

                    }
            
            } else {
                // Printing a message fopr othe user to inform him about using illegal method to acess to the form :
                    echo 'Your have acessed to this page with Illegal Method !';
            }
                                        
            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        // ---------------------------------------------                                    
    // =================================================================================                                              
    
    // (*) => Fifth Example [Filtering Email input ] from Form, by using {filter_var(var name , FILTER_VAIDATE_EMAIL)}  :
        $ha5 = 'Fifth Example [Filtering Email input ] from Form, by using {filter_var(var name , FILTER_VAIDATE_EMAIL)} : as following : ' . "<br>" ; 
                                
            // Testing if the received data from the Form by using the legal send method [post] only before any  processing procedures :
                if ($_SERVER['REQUEST_METHOD'] == 'POST') {

                // Defining the sent input field inside a Varialbe : 
                    @$inputEml = $_POST['email']; 
                
                // Printing the posted variable from Form [without any filter]  + [with using @ sign to ignore any syntax error ]: 
                    echo 'The posted value from the [Form] , without any filter is ' . "<br>";
                    echo @$inputEml . "<br>" . "<hr>";
                
                // Printing the posted variable from Form [without filter for Validating |Email Datatype for Filter : (Email input) ] + [with using @ sign to ignore any syntax error] : 
                    echo 'The posted value from the [Form] , by using [FILTER_VALIDATE_EMAIL] is ' . "<br>";
                    echo @filter_var($inputEml, FILTER_VALIDATE_EMAIL) . "<br>";

                // Starting Testing in case the value is not empty.
                
                // Testing if the Email value is not empty [before testing the filter] : 
                    if (empty($inputEml)) {
                                    
                        echo 'Sorry the Email Vairable is Empty Value!';
                                                
                    } else { 
                    
                        // Starting Testing in case the value is not empty.

                        // Testing if the Filter is Valid or not after filtering it by the assinged Filter :
                            if (filter_var($inputEml, FILTER_VALIDATE_EMAIL ) !== FALSE) {
                                echo 'The posted value from the [Form] is a Valid as : [Email Address Link] ' . "<br>";
                            } else {
                                echo 'The posted value from the [Form] is NOT a Valid as : [Email Address Link] ' . "<br>";
                            }

                    }
                        
            } else {
                // Printing a message fopr othe user to inform him about using illegal method to access to the form :
                    echo 'Your have acessed to this page with Illegal Method !';
            }
        echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        // ---------------------------------------------                                    
    // =================================================================================                                              
    
    // (*) => Sixth Example [Filtering Email input ] from Form, by using {filter_var(var name , FILTER_VAIDATE_IP)}  :
        $ha6 = 'Sixth Example [Filtering Email input ] from Form, by using {filter_var(var name , FILTER_VAIDATE_IP)} : as following : ' . "<br>" ; 
                                
            // Testing if the received data from the Form by using the legal send method [post] only before any  processing procedures :
                if ($_SERVER['REQUEST_METHOD'] == 'POST') {

                // Defining the sent input field inside a Varialbe : 
                    @$inputIP = $_POST['ip']; 
                
                // Printing the posted variable from Form [without any filter]  + [with using @ sign to ignore any syntax error ]: 
                    echo 'The posted value from the [Form] , without any filter is ' . "<br>";
                    echo @$inputIP . "<br>" . "<hr>";
                
                // Printing the posted variable from Form [without filter for Validating |IP Datatype for Filter : (Website IP input) ]  + [with using @ sign to ignore any syntax error] : 
                    echo 'The posted value from the [Form] , by using [FILTER_VALIDATE_IP] is ' . "<br>";
                    echo @filter_var($inputIP, FILTER_VALIDATE_IP) . "<br>" ;

                // Starting Testing in case the value is not empty.
                
                // Testing if the Email value is not empty [before testing the filter] : 
                    if (empty($inputIP)) {
                                    
                        echo 'Sorry the IP Vairable is Empty Value!';
                                                
                    } else { 
                        
                        // Starting Filtering Testing in case the value is not empty.
                                    
                        // Testing if the Filter is Valid or not after filtering it by the assinged Filter :
                            if (filter_var($inputIP, FILTER_VALIDATE_IP ) !== FALSE) {
                                echo 'The posted value from the [Form] is a Valid as : [Website IP] ' . "<br>";
                            } else {
                                echo 'The posted value from the [Form] is NOT a Valid as : [Website IP] ' . "<br>";
                            }                                                

                    }
                    
        
            } else {
                // Printing a message fopr othe user to inform him about using illegal method to acess to the form :
                    echo 'Your have acessed to this page with Illegal Method !';
            }                    

        echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        // ---------------------------------------------                                    
    // =================================================================================                                              

    // (*) => Seventh Example [Filtering Fill Form Inputs types ] from Form, by using {filter_var() for each type } :
        $ha7 = 'Seventh Example [Filtering Fill Form Inputs types ] from Form, by using {filter_var() for each type }  : as following : ' . "<br>" ; 
                                
            // if ($_SERVER['REQUEST_METHOD'] == 'POST') {

            //     @$inputInt = $_POST['password']; 
                
            //     // Printing the posted variable from Form [without any filter] : 
            //         echo 'The posted value from the [Form] , without any filter is ' . "<br>";
            //         echo @$inputInt . "<br>" . "<hr>";
                
            //     // Printing the posted variable from Form [with using {FILTER_VALIDATE_INT} filter] : 
            //         echo 'The posted value from the [Form] , by using [FILTER_VALIDATE_INT] is ' . "<br>";
            //         echo @filter_var($inputInt, FILTER_VALIDATE_INT) . "<br>" . "<hr>" ;    
                                
        
            // } else {
            //     echo 'Your have acessed to this page with Illegal Method !';
            // }
                        
            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        // ---------------------------------------------                                    
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
            
            <!-- (*) => First Example [Filtering String input ] from Form, by using {filter_var(var name , FILTER_SANITIZE_STRING) [username]} : -->
                        
                    <header>
                        First Example [Filtering String input ] from Form, by using {filter_var(var name , FILTER_SANITIZE_STRING) [username]} :  <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1 ?>  </h1>  
                        <?php                                           
                            
                            // Testing if the received data from the Form by using the legal send method [post] only before any  processing procedures :
                                if ($_SERVER['REQUEST_METHOD'] == 'POST') {

                                    // Defining the sent input field inside a Varialbe : 
                                        @$inputStr = $_POST['username']; 
                                    
                                    // Printing the posted variable from Form [without any filter]  + [with using @ sign to ignore any syntax error ] : 
                                        echo 'The posted value from the [Form] , without any filter is ' . "<br>";
                                        echo @$inputStr . "<br>" . "<hr>";
                                    
                                    // Printing the posted variable from Form + [with using @ sign to ignore any syntax error] [with using {FILTER_SANITIZE_STRING} filter for Filter : (username input)] : 
                                        echo 'The posted value from the [Form] , by using [FILTER_SANITIZE_STRING] is ' . "<br>";
                                        echo @filter_var($inputStr, FILTER_SANITIZE_STRING) . "<br>";
                                        
                                    // Testing if the string value is not empty [before testing the filter] : 
                                        if (empty($inputStr)) {
                                            
                                            echo 'Sorry the Vairable is Empty Value!';

                                        } else {
                                            
                                            // Starting TEsting in case the value is not empty.
                                            
                                            // Printing the posted variable from Form + [with using @ sign to ignore any syntax error] [with using {FILTER_SANITIZE_STRING} filter for Filter : (username input)] : 
                                                echo 'The posted value from the [Form] , by using [FILTER_SANITIZE_STRING] is ' . "<br>";
                                                echo @filter_var($inputStr, FILTER_SANITIZE_STRING) . "<br>" ; 
                                                
                                            // Testing if the Filter is Valid or not after filtering it by the assinged Filter :
                                                if (filter_var($inputStr, FILTER_SANITIZE_STRING) !== FALSE) {
                                                    echo 'The posted value from the [Form] is a Valid as : [String] ' . "<br>";
                                                } else {
                                                    echo 'The posted value from the [Form] is NOT a Valid as : [String]  ' . "<br>";
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
                                        
            <!-- (*) => Second Example [Filtering Integer input ] from Form, by using {filter_var(var name , FILTER_VAIDATE_INT)[password]} : -->
                        
                    <header>
                        Second Example [Filtering Integer input ] from Form, by using {filter_var(var name , FILTER_VAIDATE_INT)[password]}:  <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha2 ?>  </h1>  
                        <?php                                           

                            // Testing if the received data from the Form by using the legal send method [post] only before any processing procedures :  
                                if ($_SERVER['REQUEST_METHOD'] == 'POST') {

                                    // Defining the sent input field inside a Varialbe : 
                                        @$inputInt = $_POST['password']; 
                                    
                                    // Printing the posted variable from Form [without any filter] : 
                                        echo 'The posted value from the [Form] , without any filter is ' . "<br>";
                                        echo @$inputInt . "<br>" ;
                                    
                                    // Printing the posted variable from Form + [with using @ sign to ignore any syntax error] [with using {FILTER_VALIDATE_INT} filter for Filter : (password input)] : 
                                        echo 'The posted value from the [Form] , by using [FILTER_VALIDATE_INT] is ' . "<br>";
                                        echo @filter_var($inputInt, FILTER_VALIDATE_INT) . "<br>" ;    

                                    // Testing if the Integer value is not empty [before testing the filter] : 
                                        if (empty($inputInt)) {
                                        
                                            echo 'Sorry the Integer Vairable is Empty Value!';
                                                                    
                                        } else { 

                                            // Starting TEsting in case the value is not empty.
                                            
                                            // Testing if the Filter is Valid or not after filtering it by the assinged Filter :
                                                if (filter_var($inputInt, FILTER_VALIDATE_INT ) !== FALSE) {
                                                    echo 'The posted value from the [Form] is a Valid as : [Integer] ' . "<br>";
                                                } else {
                                                    echo 'The posted value from the [Form] is NOT a Valid as : [Integer]  ' . "<br>";
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
                                        
            <!-- (*) => Third Example [Filtering Float input ] from Form, by using {filter_var(var name , FILTER_VAIDATE_FLOAT) [percentage]}  : -->
                        
                    <header>
                        Third Example [Filtering Float input ] from Form, by using {filter_var(var name , FILTER_VAIDATE_FLOAT) [percentage]}  :  <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha3 ?>  </h1>  
                        <?php                                           
                            // Testing if the received data from the Form by using the legal send method [post] only before any  processing procedures :

                                if ($_SERVER['REQUEST_METHOD'] == 'POST') {
                        
                                    // Defining the sent input field inside a Varialbe : 
                                        @$inputFlt = $_POST['percentage']; 
                                    
                                    // Printing the posted variable from Form [without any filter]  + [with using @ sign to ignore any syntax error] : 
                                        echo 'The posted value from the [Form] , without any filter is ' . "<br>";
                                        echo @$inputFlt . "<br>" . "<hr>";
                                    
                                    // Printing the posted variable from Form + [with using @ sign to ignore any syntax error] [with using {FILTER_VALIDATE_FLOAT} filter for Filter : (percentage input)] :
                                        echo 'The posted value from the [Form] , by using [FILTER_VALIDATE_FLOAT] is ' . "<br>";
                                        echo @filter_var($inputFlt, FILTER_VALIDATE_FLOAT) . "<br>" ;                                    
                                    
                                    
                                    // Testing if the Float value is not empty [before testing the filter] : 
                                        if (empty($inputFlt)) {
                                        
                                            echo 'Sorry the Float Vairable is Empty Value!';
                                                                    
                                        } else { 

                                            // Starting Testing in case the value is not empty.
                            
                                            // Testing if the Filter is Valid or not after filtering it by the assinged Filter :
                                                if (filter_var($inputFlt, FILTER_VALIDATE_FLOAT ) !== FALSE) {
                                                    echo 'The posted value from the [Form] is a Valid as : [Float] ' . "<br>";
                                                } else {
                                                    echo 'The posted value from the [Form] is NOT a Valid as : [Float]  ' . "<br>";
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
                                        
            <!-- (*) => Fourth Example [Filtering Email input ] from Form, by using {filter_var(var name , FILTER_VAIDATE_URL)} : -->
                        
                    <header>
                        Fourth Example [Filtering Email input ] from Form, by using {filter_var(var name , FILTER_VAIDATE_URL)} :  <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha4 ?>  </h1>  
                        <?php                                           

                            // Testing if the received data from the Form by using the legal send method [post] only before any  processing procedures :
                                if ($_SERVER['REQUEST_METHOD'] == 'POST') {

                                    // Defining the sent input field inside a Varialbe : 
                                        @$inputUrl = $_POST['url']; 
                                    
                                    // Printing the posted variable from Form [without any filter]  + [with using @ sign to ignore any syntax error] : 
                                        echo 'The posted value from the [Form] , without any filter is ' . "<br>";
                                        echo @$inputUrl . "<br>" . "<hr>";
                                    
                                    // Printing the posted variable from Form [without filter for Validating |float Datatype for Filter : (website link input) ]  + [with using @ sign to ignore any syntax error] : 
                                        echo 'The posted value from the [Form] , by using [FILTER_VALIDATE_URL] is ' . "<br>";
                                        echo @filter_var($inputUrl, FILTER_VALIDATE_URL) . "<br>" ;
                                    
                                    // Testing if the Url value is not empty [before testing the filter] : 
                                        if (empty($inputUrl)) {
                                        
                                            echo 'Sorry the Url Vairable is Empty Value!';
                                                                    
                                        } else {
                                            // Starting Testing in case the value is not empty.
                        
                                            // Testing if the Filter is Valid or not after filtering it by the assinged Filter :
                                                if (filter_var($inputUrl, FILTER_VALIDATE_URL ) !== FALSE) {
                                                    echo 'The posted value from the [Form] is a Valid as : [Website Address Link] ' . "<br>";
                                                } else {
                                                    echo 'The posted value from the [Form] is NOT a Valid as : [Website Address Link] ' . "<br>";
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
                                        
            <!-- (*) => Fifth Example [Filtering Email input ] from Form, by using {filter_var(var name , FILTER_VAIDATE_EMAIL)} : -->
                        
                    <header>
                        Fifth Example [Filtering Email input ] from Form, by using {filter_var(var name , FILTER_VAIDATE_EMAIL)} :  <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha5 ?>  </h1>  
                        <?php                                           

                            // Testing if the received data from the Form by using the legal send method [post] only before any  processing procedures :
                                if ($_SERVER['REQUEST_METHOD'] == 'POST') {

                                    // Defining the sent input field inside a Varialbe : 
                                        @$inputEml = $_POST['email']; 
                                    
                                    // Printing the posted variable from Form [without any filter]  + [with using @ sign to ignore any syntax error ]: 
                                        echo 'The posted value from the [Form] , without any filter is ' . "<br>";
                                        echo @$inputEml . "<br>" . "<hr>";
                                    
                                    // Printing the posted variable from Form [without filter for Validating |Email Datatype for Filter : (Email input) ] + [with using @ sign to ignore any syntax error] : 
                                        echo 'The posted value from the [Form] , by using [FILTER_VALIDATE_EMAIL] is ' . "<br>";
                                        echo @filter_var($inputEml, FILTER_VALIDATE_EMAIL) . "<br>";
                    
                                    // Starting Testing in case the value is not empty.
                                    
                                    // Testing if the Email value is not empty [before testing the filter] : 
                                        if (empty($inputEml)) {
                                                        
                                            echo 'Sorry the Email Vairable is Empty Value!';
                                                                    
                                        } else { 
                                        
                                            // Starting Testing in case the value is not empty.
                    
                                            // Testing if the Filter is Valid or not after filtering it by the assinged Filter :
                                                if (filter_var($inputEml, FILTER_VALIDATE_EMAIL ) !== FALSE) {
                                                    echo 'The posted value from the [Form] is a Valid as : [Email Address Link] ' . "<br>";
                                                } else {
                                                    echo 'The posted value from the [Form] is NOT a Valid as : [Email Address Link] ' . "<br>";
                                                }
                    
                                        }
                                            
                                } else {
                                    // Printing a message for othe user to inform him about using illegal method to access to the form :
                                        echo 'Your have acessed to this page with Illegal Method !';
                                }
                                                                                                                                                
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";

                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            

            <!-- (*) => Sixth Example [Filtering Email input ] from Form, by using {filter_var(var name , FILTER_VAIDATE_IP)} : -->
                        
                    <header>
                        Sixth Example [Filtering Email input ] from Form, by using {filter_var(var name , FILTER_VAIDATE_IP)}:  <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha6 ?>  </h1>  
                        <?php                                           

                            // Testing if the received data from the Form by using the legal send method [post] only before any  processing procedures :
                                if ($_SERVER['REQUEST_METHOD'] == 'POST') {

                                    // Defining the sent input field inside a Varialbe : 
                                        @$inputIP = $_POST['ip']; 
                                    
                                    // Printing the posted variable from Form [without any filter]  + [with using @ sign to ignore any syntax error ]: 
                                        echo 'The posted value from the [Form] , without any filter is ' . "<br>";
                                        echo @$inputIP . "<br>" . "<hr>";
                                    
                                    // Printing the posted variable from Form [without filter for Validating |IP Datatype for Filter : (Website IP input) ]  + [with using @ sign to ignore any syntax error] : 
                                        echo 'The posted value from the [Form] , by using [FILTER_VALIDATE_IP] is ' . "<br>";
                                        echo @filter_var($inputIP, FILTER_VALIDATE_IP) . "<br>" ;
                    
                                    // Starting Testing in case the value is not empty.
                                    
                                    // Testing if the Email value is not empty [before testing the filter] : 
                                        if (empty($inputIP)) {
                                                        
                                            echo 'Sorry the IP Vairable is Empty Value!';
                                                                    
                                        } else { 
                                            
                                            // Starting Filtering Testing in case the value is not empty.
                                                        
                                            // Testing if the Filter is Valid or not after filtering it by the assinged Filter :
                                                if (filter_var($inputIP, FILTER_VALIDATE_IP ) !== FALSE) {
                                                    echo 'The posted value from the [Form] is a Valid as : [Website IP] ' . "<br>";
                                                } else {
                                                    echo 'The posted value from the [Form] is NOT a Valid as : [Website IP] ' . "<br>";
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
                                        
            <!-- (*) => Seventh Example [Filtering Fill Form Inputs types ] from Form, by using {filter_var() for each type } : -->
                        
                    <header>
                        Seventh Example [Filtering Fill Form Inputs types ] from Form, by using {filter_var() for each type } :  <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha7 ?>  </h1>  
                        <?php                                           
                        

                        

                        echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";

                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            
                                        
            </section>
                                                                    
        </body>
    </html> 