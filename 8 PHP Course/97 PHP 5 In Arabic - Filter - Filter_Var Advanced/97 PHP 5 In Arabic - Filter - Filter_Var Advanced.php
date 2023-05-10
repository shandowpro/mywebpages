<!--  97 PHP 5 In Arabic - Filter - Filter_Var Advanced --> 
<!-- =============================================================== -->

<!-- This Form will be sent to the [This page] File-->
    <form action="<?php echo $_SERVER["PHP_SELF"]; ?>" method="POST" name="form">         
        <label> Insert your passoword:  </label>  <input type="text" name="password"> <br> <!--[INTEGER]-->
        <label> Insert your IP:         </label>  <input type="text" name="ip"> <br> <!--[IP]-->       
        <!-- <label> Insert your username:   </label>  <input type="text" name="username"> <br> -->
        <!-- <label> Insert your Percentage: </label>  <input type="text" name="percentage"> <br>  -->
        <!-- <label> Insert your Website:    </label>  <input type="text" name="url"> <br>        -->
        <!-- <label> Insert your Email:      </label>  <input type="email" name="email"> <br>     -->
        <input type="submit" value="Send"> <br>
    </form>

<?php
    
    $lessonName ='Filter - filter_var() Advanced options and flags ';
    $title = '97 PHP5 - ' . $lessonName;
    $css = '97 PHP 5 In Arabic - Filter - Filter_Var Advanced.css';

    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName . "<br>";    
    // ============================================================================
    
    /* In this lesson will be (4) Applications [Simple and Advanced (options + flags)] [Using PHP Filter Options and Flags to filter data {integer || ip} from a single Form] :
        // 1- First Example [Filtering Integer with advanced (options) only] 
        // 2- Second Example [Filtering IP with advanced (Flags) only]
        // 3- Third Example [Filtering IP with advanced (options) + advanced (Flags)] => [ip : ip] : {Full Advanced Testing : Long Method}
        // 4- Fourth Example [Filtering IP with advanced (option - Default) advanced (Flag - one) {shortcut : without using any array}] [ip : ip] : {Full Advanced Testing : Short Method}
    */    
        
    
    $main =  'In this lesson will be (4) Applications [Simple and Advanced (options + flags)] [Using PHP Filter options and Flags to filter data {integer || ip} from a single Form]  as following  : ' . '<br>' . '<ul>' .
    '<li>' . 'First Example [Filtering Integer with advanced (options) only] => [int : password]' . '</li>' .      
    '<li>' . 'Second Example [Filtering IP with advanced (Flags) only] => [ip : ip]' . '</li>' .      
    '<li>' . 'Third Example [Filtering IP with advanced (options) + advanced (Flags)] => [ip : ip] : {Full Advanced Testing : Long Method}' . '</li>' .      
    '<li>' . 'Fourth Example [Filtering IP with advanced (option - Default) advanced (Flag - one) {shortcut : without using any array}] [ip : ip] : {Full Advanced Testing : Short Method}' . '</li>' .      
    '</ul>';            
    // ============================================================================    

    // (*) => First Example [Filtering Integer with advanced (options) only] => [password]} :
            $ha1 = 'First Example [Filtering Integer with advanced (options) only] => [password]} : as following : ' . "<br>" ; 
        
            // Testing if the received data from the Form by using the legal send method [post] only before any  processing procedures :
                if ($_SERVER['REQUEST_METHOD'] == 'POST') {

                // Defining the sent input field inside a Variable : 
                    $inputInt = $_POST['password']; 
                
                // Printing the posted variable from Form [without any filter]  + [with using @ sign to ignore any syntax error ] : 
                    echo 'The posted value from the [Form] , without any filter is ' . "<br>";
                    echo @$inputInt . "<br>" . "<hr>";
                    
                // Testing if the Integer value is {not empty} [before applying testing the filter] : 
                    if (empty($inputInt)) {
                        
                        echo 'Sorry the Integer Vairable is an Empty Value!';

                    } else {
                        
                        // Starting Testing [in case the value is not empty] :
                        
                        // Printing the posted variable from Form + [with using @ sign to ignore any syntax error] + [with using {FILTER_VALIDATE_INT} filter only (without using any advanced options or Flags) for Filter : (password input)] : 
                            echo 'The posted value from the [Form] , by using [FILTER_VALIDATE_INT] filter only (without using any advanced options or Flags) is ' . "<br>";
                            echo @filter_var($inputInt, FILTER_VALIDATE_INT) . "<br>" ;    
                                                        
                        // Testing if the Filter: {FILTER_VALIDATE_INT}-> is Valid for the input value: [integer] or not after filtering it by the assinged Filter => Then To Start Testing advanced Option: {min_range || max_range} only [without Flags] of this Filter:
                            if (filter_var($inputInt, FILTER_VALIDATE_INT) !== FALSE) { 
                                echo 'The posted value from the [Form] is a Valid as : [Integer]' . '<br>' ;
                            
                            // Defining a Variable of Advnaced Options only: {min_range && max_range} of -> Filter: {FILTER_VALIDATE_INT} :
                                $opt1 = array (
                                    'options' => array(
                                        'min_range' =>  1,  
                                        'max_range' =>  999
                                    ),
                                    // 'flags' => array()
                                );
                                
                            // Testing if the value is according the range [Testing the option only with using defined variable] :
                                if (filter_var($inputInt, FILTER_VALIDATE_INT, $opt1) !== FALSE) { 
                                    echo 'Good , the '.$inputInt . 'is valid as Integer && in assingned range [1-999]' . '<br>' ; 
                                } else {
                                    echo 'Sorry , the '.$inputInt . 'is valid as Integer But NOT in assigned range [1-999]' ; 
                                }

                            } else {
                                echo 'The posted value from the [Form] is NOT a Valid as : [Integer]' . "<br>";
                            }                
                    }

            } else {
                // Printing a message fopr othe user to inform him about using illegal method to acess to the form :
                    echo 'Your have acessed to this page with Illegal Method !';
            }                            
        
            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        
    // =================================================================================                                
              
    // (*) => Second Example [Filtering IP with advanced (Flags) only] => [ip : ip]  :
        $ha2 = 'Second Example [Filtering IP with advanced (Flags) only] => [ip : ip] : as following : ' . "<br>" ; 
        
            // Testing if the received data from the Form by using the legal send method [post] only before any  processing procedures :
                if ($_SERVER['REQUEST_METHOD'] == 'POST') {

                // Defining the sent input field inside a Variable : 
                    @$inputIP = $_POST['ip']; 
                
                // Printing the posted variable from Form [without any filter]  + [with using @ sign to ignore any syntax error ] : 
                    echo 'The posted value from the [Form] , without any filter is ' . "<br>";
                    echo @$inputIP . "<br>" . "<hr>";
                    
                // Testing if the IP value is {not empty} [before applying testing the filter] : 
                    if (empty($inputIP)) {
                        
                        echo 'Sorry the IP Vairable is an Empty Value!';

                    } else {
                        
                        // Starting Testing [in case the value is not empty] :
                        
                        // Printing the posted variable from Form + [with using @ sign to ignore any syntax error] + [with using {FILTER_VALIDATE_IP} filter for Filter : (IP input)] : 
                            echo 'The posted value from the [Form] , by using [FILTER_VALIDATE_IP] is ' . "<br>";
                            echo @filter_var($inputInt, FILTER_VALIDATE_IP) . "<br>" ;    
                            
                        // Testing if the Filter: {FILTER_VALIDATE_IP}-> is Valid for the input value: [ip] or not after filtering it by the assinged Filter => Then To Start Testing advanced Option: {Default} + [with one Flag {FILTER_FLAG_IPV4}] of this Filter :
                            if (filter_var($inputIP, FILTER_VALIDATE_IP ) !== FALSE) {
                                echo 'The posted value from the [Form] is a Valid as : [IP]' ;
                                
                                // Defining a Variable of Advnaced Options: {Default} of -> Filter: {FILTER_FLAG_IPV4} :
                                    $opt2 = array(
                                        'options' => array(),               // Ip filter => option is {default}
                                        'flags' => FILTER_FLAG_IPV4         // one of the option s' flags 
                                    );
                                                            
                                // Testing if the value is according the range [Testing the Default advanced option && Flags with using defined variable] :
                                    if (filter_var($inputIP, FILTER_VALIDATE_IP, $opt2)) {
                                        echo 'Good , the '.$inputIP . ' is valid as IP && in assingned version [v4]' . '<br>' ; 
                                    } else {
                                        echo 'Sorry , the '.$inputIP . ' is valid as IP But NOT in assingned version [v4]' . '<br>' ; 
                                    }

                            } else {
                               echo 'The posted value from the [Form] is NOT a Valid as : [IP]' . "<br>";
                            }                
                    }

            } else {
                // Printing a message fopr othe user to inform him about using illegal method to acess to the form :
                    echo 'Your have acessed to this page with Illegal Method!';
            }                            
        
            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        // ---------------------------------------------                                    
    // =================================================================================                                
                  
    // (*) => Third Example [Filtering IP with advanced (options) + advanced (Flags)] => [ip : ip] : {Full Advanced Testing : Long Method} :
        $ha3 = 'Third Example [Filtering IP with advanced (options) + advanced (Flags) using the array] => [ip : ip] : {Full Advanced Testing : Long Method} : as following : ' . "<br>" ; 
        
            // Testing if the received data from the Form by using the legal send method [post] only before any  processing procedures :
                if ($_SERVER['REQUEST_METHOD'] == 'POST') {

                // Defining the sent input field inside a Variable : 
                    @$inputIP = $_POST['ip']; 
                
                // Printing the posted variable from Form [without any filter]  + [with using @ sign to ignore any syntax error ] : 
                    echo 'The posted value from the [Form] , without any filter is ' . "<br>";
                    echo @$inputIP . "<br>" . "<hr>";
                    
                // Testing if the IP value is {not empty} [before applaying testing the filter] : 
                    if (empty($inputIP)) {
                        
                        echo 'Sorry the IP Vairable is an Empty Value!';

                    } else {
                        
                        // Starting Testing [in case the value is not empty] :
                        
                        // Printing the posted variable from Form + [with using @ sign to ignore any syntax error] + [with using {FILTER_VALIDATE_IP} filter for Filter : (IP input)] : 
                            echo 'The posted value from the [Form] , by using [FILTER_VALIDATE_IP] is ' . "<br>";
                            echo @filter_var($inputIP, FILTER_VALIDATE_IP) . "<br>" ;    
                            
                        // Testing if the Filter is Valid [IP] or not [Filtering it by the assinged Filter's option [default] only] :
                            
                            if (filter_var($inputIP, FILTER_VALIDATE_IP ) !== FALSE) {
                                echo 'The posted value from the [Form] is a Valid as : [IP]' . '<br>';
                                
                                // Defining Variable of array of both [Assingned: {Option: Dafault} && {Flag: certain Flag} ] :
                                    $opt3 = array(
                                        'options' => array(),               // Ip filter => option is {default}
                                        'flags' => FILTER_FLAG_IPV4         // one of the options' flags 
                                    );
                                    
                                // Testing the value if it is according the [Assingned certain one Flags] :
                                    if (filter_var($inputIP, FILTER_VALIDATE_IP, $opt3)) {
                                        echo 'Good , the '.$inputIP . ' is valid as IP && in assingned version [v4]' . '<br>' ; 
                                    } else {
                                        echo 'Sorry , the '.$inputIP . ' is valid as IP But NOT in assingned version [v4]' . '<br>' ; 
                                    }

                            } else {
                               echo 'The posted value from the [Form] is NOT a Valid as : [IP]' . "<br>";
                            }                
                    }

            } else {
                // Printing a message fopr othe user to inform him about using illegal method to acess to the form :
                    echo 'Your have acessed to this page with Illegal Method !';
            }                            
        
            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";

        // ---------------------------------------------                                    
    // =================================================================================                                
    
    // (*) => Fourth Example [Filtering IP with advanced (option - Default) advanced (Flag - one) {shortcut : without using any array}] [ip : ip] : {Full Advanced Testing : Short Method} :
        $ha4 = 'Fourth Example [Filtering IP with advanced (option - Default) advanced (Flag - one) {shortcut : without using any array}] [ip : ip] : {Full Advanced Testing : Short Method} : as following : ' . "<br>" ; 
        
            // Testing if the received data from the Form by using the legal send method [post] only before any processing procedures :
                if ($_SERVER['REQUEST_METHOD'] == 'POST') {

                // Defining the sent input field inside a Variable : 
                    @$inputIP = $_POST['ip']; 
                
                // Printing the posted variable from Form [without any filter]  + [with using @ sign to ignore any syntax error ] : 
                    echo 'The posted value from the [Form] , without any filter is ' . "<br>";
                    echo @$inputIP . "<br>" . "<hr>";
                    
                // Testing if the IP value is {not empty} [before applying testing the filter] : 
                    if (empty($inputIP)) {
                        
                        echo 'Sorry the IP Vairable is an Empty Value!';

                    } else {
                        
                        //// Starting Testing [in case the value is not empty] :
                        
                        // Printing the posted variable from Form + [with using @ sign to ignore any syntax error] + [with using {FILTER_VALIDATE_IP} filter for Filter : (IP input)] : 
                            echo 'The posted value from the [Form] , by using [FILTER_VALIDATE_IP] is ' . "<br>";
                            echo @filter_var($inputIP, FILTER_VALIDATE_IP) . "<br>" ;    
                            
                        // Testing if the Filter is Valid [IP] or not [Filtering it by the assigned Filter's  ] :
                                                        
                            if (filter_var($inputIP, FILTER_VALIDATE_IP ) !== FALSE) {
                                echo 'The posted value from the [Form] is a Valid as : [IP]' ;
                                
                                // 
                                    // $opt3 = array(
                                    //     'options' => array(),               // Ip filter => option is {default}
                                    //     'flags' => FILTER_FLAG_IPV6         // one of the option s' flags 
                                    // );
                                                                                        
                                // Testing the value if it is according the { Option[Default]: passed]} && {certain Flag} } :
                                    if (filter_var($inputIP, FILTER_VALIDATE_IP, FILTER_FLAG_IPV6)) { 
                                        echo 'Good , the ' . $inputIP . ' is valid as IP && in assingned version [v6]' .'<br>'; 
                                    } else {
                                        echo 'Sorry , the ' . $inputIP . ' is valid as IP, But NOT in assingned version [v6]' . '<br>' ; 
                                    }

                            } else {
                               echo 'The posted value from the [Form] is NOT a Valid as : [IP]' . "<br>";
                            }                
                    }

            } else {
                // Printing a message fopr othe user to inform him about using illegal method to acess to the form :
                    echo 'Your have acessed to this page with Illegal Method !';
            }                            
        
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

                                    // Defining the sent input field inside a Variable : 
                                        @$inputInt = $_POST['password']; 
                                    
                                    // Printing the posted variable from Form [without any filter]  + [with using @ sign to ignore any syntax error ] : 
                                        echo 'The posted value from the [Form] , without any filter is ' . "<br>";
                                        echo @$inputInt . "<br>" . "<hr>";
                                        
                                    // Testing if the Integer value is {not empty} [before applying testing the filter] : 
                                        if (empty($inputInt)) {
                                            
                                            echo 'Sorry the Integer Vairable is an Empty Value!';
                    
                                        } else {
                                            
                                            // Starting Testing [in case the value is not empty] :
                                            
                                            // Printing the posted variable from Form + [with using @ sign to ignore any syntax error] + [with using {FILTER_VALIDATE_INT} filter only (without using any advanced options or Flags) for Filter : (password input)] : 
                                                echo 'The posted value from the [Form] , by using [FILTER_VALIDATE_INT] filter only (without using any advanced options or Flags) is ' . "<br>";
                                                echo @filter_var($inputInt, FILTER_VALIDATE_INT) . "<br>" ;    
                                                                            
                                            // Testing if the Filter: {FILTER_VALIDATE_INT}-> is Valid for the input value: [integer] or not after filtering it by the assinged Filter => Then To Start Testing advanced Option: {min_range || max_range} only [without Flags] of this Filter:
                                                if (filter_var($inputInt, FILTER_VALIDATE_INT) !== FALSE) { 
                                                    echo 'The posted value from the [Form] is a Valid as : [Integer]' . '<br>' ;
                                                
                                                // Defining a Variable of Advnaced Options only: {min_range && max_range} of -> Filter: {FILTER_VALIDATE_INT}:
                                                    $opt1 = array (
                                                        'options' => array(
                                                            'min_range' =>  1,  
                                                            'max_range' =>  999
                                                        ),
                                                        // 'flags' => array()
                                                    );
                                                    
                                                // Testing if the value is according the range [Testing the option only with using defined variable]:
                                                    if (filter_var($inputInt, FILTER_VALIDATE_INT, $opt1) !== FALSE) { 
                                                        echo 'Good , the '.$inputInt . 'is valid as Integer && in assingned range [1-999]' . '<br>' ; 
                                                    } else {
                                                        echo 'Sorry , the '.$inputInt . 'is valid as Integer But NOT in assigned range [1-999]' ; 
                                                    }
                    
                                                } else {
                                                    echo 'The posted value from the [Form] is NOT a Valid as : [Integer]' . "<br>";
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

                            // Testing if the received data from the Form by using the legal send method [post] only before any  processing procedures :
                                if ($_SERVER['REQUEST_METHOD'] == 'POST') {

                                    // Defining the sent input field inside a Variable : 
                                        @$inputIP = $_POST['ip']; 
                                    
                                    // Printing the posted variable from Form [without any filter]  + [with using @ sign to ignore any syntax error ] : 
                                        echo 'The posted value from the [Form] , without any filter is ' . "<br>";
                                        echo @$inputIP . "<br>" . "<hr>";
                                        
                                    // Testing if the IP value is {not empty} [before applying testing the filter] : 
                                        if (empty($inputIP)) {
                                            
                                            echo 'Sorry the IP Vairable is an Empty Value!';
                    
                                        } else {
                                            
                                            // Starting Testing [in case the value is not empty] :
                                            
                                            // Printing the posted variable from Form + [with using @ sign to ignore any syntax error] + [with using {FILTER_VALIDATE_IP} filter for Filter : (IP input)] : 
                                                echo 'The posted value from the [Form] , by using [FILTER_VALIDATE_IP] is ' . "<br>";
                                                echo @filter_var($inputInt, FILTER_VALIDATE_IP) . "<br>" ;    
                                                
                                            // Testing if the Filter: {FILTER_VALIDATE_IP}-> is Valid for the input value: [ip] or not after filtering it by the assinged Filter => Then To Start Testing advanced Option: {Default} + [with one Flag {FILTER_FLAG_IPV4}] of this Filter:
                                                if (filter_var($inputIP, FILTER_VALIDATE_IP ) !== FALSE) {
                                                    echo 'The posted value from the [Form] is a Valid as : [IP]' ;
                                                    
                                                    // Defining a Variable of Advnaced Options: {Default} of -> Filter: {FILTER_FLAG_IPV4}:
                                                        $opt2 = array(
                                                            'options' => array(),               // Ip filter => option is {default}
                                                            'flags' => FILTER_FLAG_IPV4         // one of the option s' flags 
                                                        );
                                                                                
                                                    // Testing if the value is according the range [Testing the Default advanced option && Flags with using defined variable]:
                                                        if (filter_var($inputIP, FILTER_VALIDATE_IP, $opt2)) {
                                                            echo 'Good , the '.$inputIP . ' is valid as IP && in assingned version [v4]' . '<br>' ; 
                                                        } else {
                                                            echo 'Sorry , the '.$inputIP . ' is valid as IP But NOT in assingned version [v4]' . '<br>' ; 
                                                        }
                    
                                                } else {
                                                echo 'The posted value from the [Form] is NOT a Valid as : [IP]' . "<br>";
                                                }                
                                        }
                    
                                } else {
                                    // Printing a message fopr othe user to inform him about using illegal method to acess to the form :
                                        echo 'Your have acessed to this page with Illegal Method!';
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

                                    // Defining the sent input field inside a Variable : 
                                        @$inputIP = $_POST['ip']; 
                                    
                                    // Printing the posted variable from Form [without any filter]  + [with using @ sign to ignore any syntax error ] : 
                                        echo 'The posted value from the [Form] , without any filter is ' . "<br>";
                                        echo @$inputIP . "<br>" . "<hr>";
                                        
                                    // Testing if the IP value is {not empty} [before applaying testing the filter] : 
                                        if (empty($inputIP)) {
                                            
                                            echo 'Sorry the IP Vairable is an Empty Value!';
                    
                                        } else {
                                            
                                            // Starting Testing [in case the value is not empty] :
                                            
                                            // Printing the posted variable from Form + [with using @ sign to ignore any syntax error] + [with using {FILTER_VALIDATE_IP} filter for Filter : (IP input)] : 
                                                echo 'The posted value from the [Form] , by using [FILTER_VALIDATE_IP] is ' . "<br>";
                                                echo @filter_var($inputIP, FILTER_VALIDATE_IP) . "<br>" ;    
                                                
                                            // Testing if the Filter is Valid [IP] or not [Filtering it by the assinged Filter's option [default] only ] :
                                                
                                                if (filter_var($inputIP, FILTER_VALIDATE_IP ) !== FALSE) {
                                                    echo 'The posted value from the [Form] is a Valid as : [IP]' . '<br>';
                                                    
                                                    // Defining Variable of array of both [Assingned: {Option: Dafault} && {Flag: certain Flag} ] :
                                                        $opt3 = array(
                                                            'options' => array(),               // Ip filter => option is {default}
                                                            'flags' => FILTER_FLAG_IPV4         // one of the options' flags 
                                                        );
                                                        
                                                    // Testing the value if it is according the [Assingned certain one Flags] :
                                                        if (filter_var($inputIP, FILTER_VALIDATE_IP, $opt3)) {
                                                            echo 'Good , the '.$inputIP . ' is valid as IP && in assingned version [v4]' . '<br>' ; 
                                                        } else {
                                                            echo 'Sorry , the '.$inputIP . ' is valid as IP But NOT in assingned version [v4]' . '<br>' ; 
                                                        }
                    
                                                } else {
                                                echo 'The posted value from the [Form] is NOT a Valid as : [IP]' . "<br>";
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

                                    // Defining the sent input field inside a Variable : 
                                        @$inputIP = $_POST['ip']; 
                                    
                                    // Printing the posted variable from Form [without any filter]  + [with using @ sign to ignore any syntax error ] : 
                                        echo 'The posted value from the [Form] , without any filter is ' . "<br>";
                                        echo @$inputIP . "<br>" . "<hr>";
                                        
                                    // Testing if the IP value is {not empty} [before applying testing the filter] : 
                                        if (empty($inputIP)) {
                                            
                                            echo 'Sorry the IP Vairable is an Empty Value!';
                    
                                        } else {
                                            
                                            //// Starting Testing [in case the value is not empty] :
                                            
                                            // Printing the posted variable from Form + [with using @ sign to ignore any syntax error] + [with using {FILTER_VALIDATE_IP} filter for Filter : (IP input)] : 
                                                echo 'The posted value from the [Form] , by using [FILTER_VALIDATE_IP] is ' . "<br>";
                                                echo @filter_var($inputIP, FILTER_VALIDATE_IP) . "<br>" ;    
                                                
                                            // Testing if the Filter is Valid [IP] or not [Filtering it by the assigned Filter's  ] :
                                                                            
                                                if (filter_var($inputIP, FILTER_VALIDATE_IP ) !== FALSE) {
                                                    echo 'The posted value from the [Form] is a Valid as : [IP]' ;
                                                    
                                                    // 
                                                        // $opt3 = array(
                                                        //     'options' => array(),               // Ip filter => option is {default}
                                                        //     'flags' => FILTER_FLAG_IPV6         // one of the option s' flags 
                                                        // );
                                                                                                            
                                                    // Testing the value if it is according the { Option[Default]: passed]} && {certain Flag} } :
                                                        if (filter_var($inputIP, FILTER_VALIDATE_IP, FILTER_FLAG_IPV6)) { 
                                                            echo 'Good , the ' . $inputIP . ' is valid as IP && in assingned version [v6]' .'<br>'; 
                                                        } else {
                                                            echo 'Sorry , the ' . $inputIP . ' is valid as IP, But NOT in assingned version [v6]' . '<br>' ; 
                                                        }
                    
                                                } else {
                                                echo 'The posted value from the [Form] is NOT a Valid as : [IP]' . "<br>";
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