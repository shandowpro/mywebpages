<!--  57 PHP 5 In Arabic - String Functions - StrStr, StriStr, StrChr  --> 
<?php
    $lessonName  ='String Functions - StrStr, StriStr, StrChr ';
    $title = '57 PHP5 - ' . $lessonName;
    $css = '57 PHP 5 In Arabic - String Functions - StrStr, StriStr, StrChr.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    // ============================================================================

    // (*) Variable Definitions & Decleration :
        
        // String variable :          
        $str = "I love PHP so much because PHP is Famous and cool language" ;                        
        $email = "shadi.sayed@gmail.com" ;                        
    // =================================================================================    
    
    // (*) => First Example => String Functions -  {strstr(string variable/text value , find, Search before)} Method : contains (4) Exps :         
    
        // (a) => {Default strstr(String, find, Search before)} Method [Sensitive] || [Search before : false [default] ]:
        
            $ha1 = "{strstr(String, find)} Default Method : [Sensitive] || [Search before : false [default]  as following: " ; 
            
            // // Printing the main string variables before :
            //     echo "The main string before [Searching for the String text] is " .  "<br>" . $str;
            //     echo "<br>" . "<br>";                                    
            
            // // Processing [Searching for the String text]   :
            //     $char1 = strstr($str, "PHP");
            
            // // Printing the main [Searching for the String text]   :
            //     echo "The [Searching for the String text] by Default [Sensitive] || [Search before : false [default] = " . "<br>" ;
                
            //     echo $char1;            

            //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
        // ---------------------------------------------                                                                
        
        // (b) => {Advnaced strstr(String, find, Search before)} Method [Sensitive] || [Search before : false] :
        
            $ha2 = "{strstr(String, find , Search before)} Advanced Method : [Sensitive] || [Search before : false] as following: " ; 
            
            // // Printing the main string variables before :
            //     echo "The main string before [Searching for the String text] is " .  "<br>" . $str;
            //     echo "<br>" . "<br>";                                    
            
            // // Processing [Searching for the String text]   :
            //     $char2 = strstr($str, "PHP" , false);
            
            // // Printing the main [Searching for the String text]   :
            //     echo "The [Searching for the String text] by Advanced [Sensitive] || [Search before : false] = " . "<br>" ;
                
            //     echo $char2;            

            //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
        // ---------------------------------------------                                                                
       
        // (c) => {Advanced strstr(String, find, Search before)} Method [Sensitive] || [Search before : true]First Example => String Functions -  {strstr(string variable/text value , find, Search before)} Method  :
        
            $ha3 = "{strstr(String, find , Search before)} Advanced Method : [Sensitive] || [Search before : true] as following: " ; 
            
            // // Printing the main string variables before :
            //     echo "The main string before [Searching for the String text] is " .  "<br>" . $str;
            //     echo "<br>" . "<br>";                                    
            
            // // Processing [Searching for the String text]   :
            //     $char3 = strstr($str, "PHP" , true);
            
            // // Printing the main [Searching for the String text]   :
            //     echo "The [Searching for the String text] by Advanced [Sensitive] || [Search before : true] = " . "<br>" ;
                
            //     echo $char3;            

            //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
        // ---------------------------------------------                                                                
       
        // (d) => {Advanced strstr(String, find, Search before)} Method {Filtering Email Domain & Name } -> [Sensitive] || [Search before : true]First Example => String Functions -  {strstr(string variable/text value , find, Search before)} Method  :
        
            $ha4 = "{strstr(String, find , Search before)} Advanced Method {Filtering Email Domain & Name } : [Sensitive] || [Search before : true] as following: " ; 
            
            // // Printing the main string variables before :
            //     echo "The main string before [Searching for the String text] is " .  "<br>" . $email;
            //     echo "<br>" . "<br>";                                    
            
            // // Getting Email Name [by activating the search before Feature ] :
            //     $name = strstr($email, "@" , true);
            
            // // Getting Email Domain [without the (@) sign]  [by activating the search before Feature + Replace Method  ]   :
            //     $domain = strstr($email, "@" , false);    // Email Domain with the (@) sign.
            //     $domainF =  str_replace("@" , "", $domain);     // Email Domain without the (@) sign.
            
            // // Printing each [Main Email, Email name, Email Domain]   :
            //     echo "The Main Email is " . $email . "<br>" . "The Email Name is " . $name  . "<br>" ."The Email Domain is " . $domainF . "<br>" ;
                                
            //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
        // ---------------------------------------------                                                                
       
    //   ====================================================================================
    
    
    // (*) => Second Example => String Functions -  {stristr(string variable/text value , find, Search before)} Method : contains (3) Exps : 
    
        // (a) => {Default strstr(String, find, Search before)} Method [InSensitive] || [Search before : false [default] :
        
            $hb1 = "{strstr(String, find)} Default Method : [InSensitive] || [Search before : false [default]  as following: " ; 
            
            // // Printing the main string variables before :
            //     echo "The main string before [Searching for the String text] is " .  "<br>" . $str;
            //     echo "<br>" . "<br>";                                    
            
            // // Processing [Searching for the String text]   :
            //     $chari1 = stristr($str, "Php");
            
            // // Printing the main [Searching for the String text]   :
            //     echo "The [Searching for the String text] by Default [InSensitive] || [Search before : false [default] = " . "<br>" ;
                
            //     echo $chari1;

            //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
        // ---------------------------------------------                                                                
        
        // (b) => {Advnaced stristr(String, find, Search before)} Advanced Method [InSensitive] || [Search before : false] :
        
            $hb2 = "{stristr(String, find , Search before)} Advanced Method : [InSensitive] || [Search before : false] as following: " ; 
            
            // // Printing the main string variables before :
            //     echo "The main string before [Searching for the String text] is " .  "<br>" . $str;
            //     echo "<br>" . "<br>";                                    
            
            // // Processing [Searching for the String text]   :
            //     $chari2 = stristr($str, "phP" , false);
            
            // // Printing the main [Searching for the String text]   :
            //     echo "The [Searching for the String text] by Advanced [InSensitive] || [Search before : false] = " . "<br>" ;
                
            //     echo $chari2;

            //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
        // ---------------------------------------------                                                                
       
        // (c) => {Advanced strstr(String, find, Search before)} Advanced Method [InSensitive] || [Search before : true] :
        
            $hb3 = "{stristr(String, find , Search before)} Advanced Method : [InSensitive] || [Search before : true] as following: " ; 
            
            // // Printing the main string variables before :
            //     echo "The main string before [Searching for the String text] is " .  "<br>" . $str;
            //     echo "<br>" . "<br>";
            
            // // Processing [Searching for the String text]   :
            //     $chari3 = stristr($str, "PHp" , true);
            
            // // Printing the main [Searching for the String text]   :
            //     echo "The [Searching for the String text] by Advanced [InSensitive] || [Search before : true] = " . "<br>" ;
                
            //     echo $chari3;

            //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
        // ---------------------------------------------                                                                
       
    //   ====================================================================================

    
    // (*) => Third Example => String Functions - [Similer to strstr()]  {strchr(string variable/text value , find, Search before)} Method : contains (3) Exps : 
    
        // (a) => {Default strchr(String, find, Search before)} Method [Sensitive] || [Search before : false [default] :
        
            $hc1 = "{strchr(String, find)} Default Method : [Sensitive] || [Search before : false [default]  as following: " ; 
            
            // // Printing the main string variables before :
            //     echo "The main string before [Searching for the String text] is " .  "<br>" . $str;
            //     echo "<br>" . "<br>";                                    
            
            // // Processing [Searching for the String text]   :
            //     $chr1 = strchr($str, "PHP");
            
            // // Printing the main [Searching for the String text]   :
            //     echo "The [Searching for the String text] by Default [Sensitive] || [Search before : false [default] = " . "<br>" ;
                
            //     echo $chr1;            

            //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
        // ---------------------------------------------                                                                
        
        // (b) => {Advnaced strchr(String, find, Search before)} Method [Sensitive] || [Search before : false] :
        
            $hc2 = "{strchr(String, find , Search before)} Advanced Method : [Sensitive] || [Search before : false] as following: " ; 
            
            // // Printing the main string variables before :
            //     echo "The main string before [Searching for the String text] is " .  "<br>" . $str;
            //     echo "<br>" . "<br>";                                    
            
            // // Processing [Searching for the String text]   :
            //     $chr2 = strchr($str, "PHP" , false);
            
            // // Printing the main [Searching for the String text]   :
            //     echo "The [Searching for the String text] by Advanced [Sensitive] || [Search before : false] = " . "<br>" ;
                
            //     echo $chr2;            

            //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
        // ---------------------------------------------                                                                
       
        // (c) => {Advanced strchr(String, find, Search before)} Method [Sensitive] || [Search before : true] :
        
            $hc3 = "{strchr(String, find , Search before)} Advanced Method : [Sensitive] || [Search before : true] as following: " ; 
            
            // // Printing the main string variables before :
            //     echo "The main string before [Searching for the String text] is " .  "<br>" . $str;
            //     echo "<br>" . "<br>";                                    
            
            // // Processing [Searching for the String text]   :
            //     $chr3 = strchr($str, "PHP" , true);
            
            // // Printing the main [Searching for the String text]   :
            //     echo "The [Searching for the String text] by Advanced [Sensitive] || [Search before : true] = " . "<br>" ;
                
            //     echo $chr3;

            //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
        // ---------------------------------------------                                                                
    //   ====================================================================================            
    //   ====================================================================================        
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
        
        <body class='body' style="background-color: gray">
            <h1>
                The following textnode of this head has been genereated by PHP file : <br>        
                <?php echo $heading; echo '<br>'; ?>            
            </h1>

            <p>
                The following textnode of this Paragraph has been genereated by PHP file : <br>        
                <?php echo $paragraph; echo '<br>'; ?> 
            </p> <br>        
          <!-- ------------------------------------------------------------------------- -->            

            <section class="PHPPract" id="PHPPract">                                       
            
            <!-- (*) => First Example => String Functions -  {strstr(string variable/text value , find, Search before)} Method : contains (3) Exps: -->
                    <!--  (a) => {Default strstr(String, find, Search before)} Method [Sensitive] || [Search before : false [default] -->

                        <header>                                
                            (*) => First Example => String Functions -  {strstr(string variable/text value , find, Search before)} Method : contains (3) Exps  : <br>
                                <span class="one"></span>  (a) => {Default strstr(String, find, Search before)} Method [Sensitive] || [Search before : false [default] Method :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha1 ?>  </h1>  
                                
                            <?php                                                                                                                               
                                // Printing the main string variables before :
                                    echo "The main string before [Searching for the String text] is " .  "<br>" . $str;
                                    echo "<br>" . "<br>";                                    
                                
                                // Processing [Searching for the String text]   :
                                    $char1 = strstr($str, "PHP");
                                
                                // Printing the main [Searching for the String text]   :
                                    echo "The [Searching for the String text] by Default [Sensitive] || [Search before : false [default] = " . "<br>" ;
                                    
                                    echo $char1;            

                                    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                                                                                    
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
    
            <!-- (*) => First Example => String Functions -  {strstr(string variable/text value , find, Search before)} Method : -->
                    <!-- (b) => {Advnaced strstr(String, find, Search before)} Method [Sensitive] || [Search before : false]  -->

                        <header>                                
                            (*) => First Example => String Functions -  {strstr(string variable/text value , find, Search before)} Method  : <br>
                                <span class="one"></span> (b) => {Advnaced strstr(String, find, Search before)} Method [Sensitive] || [Search before : false] :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha2 ?>  </h1>  
                                
                            <?php                                                                                                                               
                                // Printing the main string variables before :
                                    echo "The main string before [Searching for the String text] is " .  "<br>" . $str;
                                    echo "<br>" . "<br>";                                    
                                
                                // Processing [Searching for the String text]   :
                                    $char2 = strstr($str, "PHP" , false);
                                
                                // Printing the main [Searching for the String text]   :
                                    echo "The [Searching for the String text] by Advanced [Sensitive] || [Search before : false] = " . "<br>" ;
                                    
                                    echo $char2;            

                                    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                                            
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
            
            <!-- (*) => First Example => String Functions -  {strstr(string variable/text value , find, Search before)} Method   : -->
                    <!-- (c) => {Advanced strstr(String, find, Search before)} Method [Sensitive] || [Search before : true]First Example => String Functions -  {strstr(string variable/text value , find, Search before)} Method   -->

                        <header>                                
                            (*) => First Example => String Functions -  {strpos(string variable/text value , find, offset)} Method : <br>
                                <span class="one"></span> (c) => {Advanced strstr(String, find, Search before)} Method [Sensitive] || [Search before : true]First Example => String Functions -  {strstr(string variable/text value , find, Search before)} Method   :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha3 ?>  </h1>  
                                
                            <?php                                                                                                                               
                                // Printing the main string variables before :
                                    echo "The main string before [Searching for the String text] is " .  "<br>" . $str;
                                    echo "<br>" . "<br>";                                    
                                
                                // Processing [Searching for the String text]   :
                                    $char3 = strstr($str, "PHP" , true);
                                
                                // Printing the main [Searching for the String text]   :
                                    echo "The [Searching for the String text] by Advanced [Sensitive] || [Search before : true] = " . "<br>" ;
                                    
                                    echo $char3;            

                                    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;                                                                                                        
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->

            <!-- (*) => First Example => String Functions -  {strstr(string variable/text value , find, Search before)} Method   : -->
                    <!-- (d) => {Advanced strstr(String, find, Search before)} Method {Filtering Email Domain & Name } -> [Sensitive] || [Search before : true]First Example => String Functions -  {strstr(string variable/text value , find, Search before)} Method   -->

                        <header>                                
                            (*) => First Example => String Functions -  {strpos(string variable/text value , find, offset)} Method : <br>
                                <span class="one"></span> (d) => {Advanced strstr(String, find, Search before)} Method {Filtering Email Domain & Name } -> [Sensitive] || [Search before : true]First Example => String Functions -  {strstr(string variable/text value , find, Search before)} Method   :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha4 ?>  </h1>  
                                
                            <?php                                                                                                                               
                               // Printing the main string variables before :
                                    echo "The main string before [Searching for the String text] is " .  "<br>" . $email;
                                    echo "<br>" . "<br>";                                    
                                
                                // Getting Email Name [by activating the search before Feature ] :
                                    $name = strstr($email, "@" , true);
                                
                                // Getting Email Domain [without the (@) sign]  [by activating the search before Feature + Replace Method  ]   :
                                    $domain = strstr($email, "@" , false);    // Email Domain with the (@) sign.
                                    $domainF =  str_replace("@" , "", $domain);     // Email Domain without the (@) sign.
                                
                                // Printing each [Main Email, Email name, Email Domain]   :
                                    echo "The Main Email is " . $email . "<br>" . "The Email Name is " . $name  . "<br>" ."The Email Domain is " . $domainF . "<br>" ;
                                                    
                                    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    

                        <!-- ---------------------------------------------------------- -->






            <!-- ================================================================================= -->            
            <!-- ================================================================================= -->            


            <!-- (*) => Second Example => String Functions -  {stristr(string variable/text value , find, Search before)} Method : contains (3) Exps : -->
                    <!-- (a) => {Default strstr(String, find, Search before)} Method [InSensitive] || [Search before : false [default]  -->

                        <header>                                
                            (*) => Second Example => String Functions -  {stristr(string variable/text value , find, Search before)} Method : contains (3) Exps  : <br>
                                <span class="one"></span> (a) => {Default strstr(String, find, Search before)} Method [InSensitive] || [Search before : false [default] Method :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hb1 ?>  </h1>  
                                                            
                            <?php                                                                                                                               

                                // Printing the main string variables before :
                                    echo "The main string before [Searching for the String text] is " .  "<br>" . $str;
                                    echo "<br>" . "<br>";                                    
                                
                                // Processing [Searching for the String text] :
                                    $chari1 = stristr($str, "Php");
                                
                                // Printing the main [Searching for the String text]   :
                                    echo "The [Searching for the String text] by Default [InSensitive] || [Search before : false [default] = " . "<br>" ;
                                    
                                    echo $chari1;

                                    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
    
            <!-- (*) => Second Example => String Functions -  {stristr(string variable/text value , find, Search before)} Method : -->
                    <!--  (b) => {Advnaced stristr(String, find, Search before)} Advanced Method [InSensitive] || [Search before : false]   -->

                        <header>                                
                            (*) => Second Example => String Functions -  {stristr(string variable/text value , find, Search before)} Method  : <br>
                                <span class="one"></span> (b) => {Advnaced stristr(String, find, Search before)} Advanced Method [InSensitive] || [Search before : false]  :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hb2 ?>  </h1>  
                                
                            <?php                                                                                                                               
                            
                                // Printing the main string variables before :
                                    echo "The main string before [Searching for the String text] is " .  "<br>" . $str;
                                    echo "<br>" . "<br>";                                    
                                
                                // Processing [Searching for the String text]   :
                                    $chari2 = stristr($str, "phP" , false);
                                
                                // Printing the main [Searching for the String text]   :
                                    echo "The [Searching for the String text] by Advanced [InSensitive] || [Search before : false] = " . "<br>" ;
                                    
                                    echo $chari2;

                                    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
            
            <!-- (*) => Second Example => String Functions -  {stristr(string variable/text value , find, Search before)} Method  : -->
                    <!-- (c) => {Advanced stristr(String, find, Search before)} Advanced Method [InSensitive] || [Search before : true]  -->

                        <header>                                
                            (*) =>  Second Example => String Functions -  {stristr(string variable/text value , find, Search before)} Method   : <br>
                                <span class="one"></span> (c) => {Advanced stristr(String, find, Search before)} Advanced Method [InSensitive] || [Search before : true] Method:
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hb3 ?>  </h1>  
                                
                            <?php                                                                                                                               
                                // Printing the main string variables before :
                                    echo "The main string before [Searching for the String text] is " .  "<br>" . $str;
                                    echo "<br>" . "<br>";
                                
                                // Processing [Searching for the String text]   :
                                    $chari3 = stristr($str, "PHp" , true);
                                
                                // Printing the main [Searching for the String text]   :
                                    echo "The [Searching for the String text] by Advanced [InSensitive] || [Search before : true] = " . "<br>" ;
                                    
                                    echo $chari3;

                                    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
            <!-- ================================================================================= -->            
            <!-- ================================================================================= -->            
       
            
            <!-- (*) => Third Example => String Functions - {strchr(string variable/text value , find, Search before)} Method / [Similer to strstr()] : contains (3) Exps : -->
                    <!-- (a) => {Default strchr(String, find, Search before)} Method [Sensitive] || [Search before : false [default]   -->

                        <header>                                
                            (*) => Third Example => String Functions - [Similer to strstr()]  {strchr(string variable/text value , find, Search before)} Method : contains (3) Exps : <br>
                                <span class="one"></span> (a) => {Default strchr(String, find, Search before)} Method [Sensitive] || [Search before : false [default]  Method :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hc1 ?>  </h1>  
                                                            
                            <?php                                                                                                                               

                                // Printing the main string variables before :
                                    echo "The main string before [Searching for the String text] is " .  "<br>" . $str;
                                    echo "<br>" . "<br>";                                    
                                
                                // Processing [Searching for the String text]   :
                                    $chr1 = strchr($str, "PHP");
                                
                                // Printing the main [Searching for the String text]   :
                                    echo "The [Searching for the String text] by Default [Sensitive] || [Search before : false [default] = " . "<br>" ;
                                    
                                    echo $chr1;            

                                    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
    
            <!-- (*) => Third Example => String Functions - {strchr(string variable/text value , find, Search before)} Method / [Similer to strstr()]  : -->
                    <!--  (b) => {Advnaced strchr(String, find, Search before)} Method [Sensitive] || [Search before : false]   -->

                        <header>                                
                                (*) => Third Example => String Functions - [Similer to strstr()]  {strchr(string variable/text value , find, Search before)} Method  : <br>
                                    <span class="one"></span> (b) => {Advnaced strchr(String, find, Search before)} Method [Sensitive] || [Search before : false]  :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hc2 ?>  </h1>  
                                
                            <?php                                                                                                                               
                                // Printing the main string variables before :
                                    echo "The main string before [Searching for the String text] is " .  "<br>" . $str;
                                    echo "<br>" . "<br>";                                    
                                
                                // Processing [Searching for the String text]   :
                                    $chr2 = strchr($str, "PHP" , false);
                                
                                // Printing the main [Searching for the String text]   :
                                    echo "The [Searching for the String text] by Advanced [Sensitive] || [Search before : false] = " . "<br>" ;
                                    
                                    echo $chr2;            

                                    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;                                                                                                    
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
            
            <!-- (*) => Third Example => String Functions - {strchr(string variable/text value , find, Search before)} Method / [Similer to strstr()] : -->
                    <!-- (c) => {Advanced strchr(String, find, Search before)} Method [Sensitive] || [Search before : true]  -->

                        <header>                                
                            (*) => Third Example => String Functions -  {strchr(string variable/text value , find, Search before)} Method / [Similer to strstr()]     : <br>
                                <span class="one"></span> (c) => {Advanced strchr(String, find, Search before)} Method [Sensitive] || [Search before : true]  EXAMPLE :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hc3 ?>  </h1>  
                                
                            <?php                                                                                                                               
                                // Printing the main string variables before :
                                    echo "The main string before [Searching for the String text] is " .  "<br>" . $str;
                                    echo "<br>" . "<br>";                                    
                                
                                // Processing [Searching for the String text]   :
                                    $chr3 = strchr($str, "PHP" , true);
                                
                                // Printing the main [Searching for the String text]   :
                                    echo "The [Searching for the String text] by Advanced [Sensitive] || [Search before : true] = " . "<br>" ;
                                    
                                    echo $chr3;

                                    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
            <!-- ================================================================================= -->            
            <!-- ================================================================================= -->            
            </section>
                                                                    
         </body>
</html>