 <!--  66 PHP 5 In Arabic - File System - Dirname, Basename  --> 
<?php

    $lessonName  ='Control Structure - path System - dirname() || basename() ';
    $title = '66 PHP5 - ' . $lessonName;
    $css = '66 PHP 5 In Arabic - File System - Dirname, Basename.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    // ============================================================================

    // (*) Variable Definitions & Decleration :
        
        // String variable :          
              
            $name = "shadi";            
        
    // =================================================================================        
        // Testing example :
            // echo "__DIR__" . " = " . __DIR__ . "<br>" ; 
            // echo "dirname(__FILE__)" . " = " . dirname(__FILE__) . "<br>" . "<hr>" ;
            // echo "__FILE__" . " = " .  __FILE__  . "<br>" ;
            
            // echo "basename(__FILE__)" . " = " . basename(__FILE__) . "<br>" ;
            // echo "basename(__FILE__, '.php')" . " = " . basename(__FILE__, ".php") ."<br>" ;
        
    // =================================================================================    
        // including files :
            // include __DIR__ . "/inc/text.php" ; 
            // include __DIR__ . "/../inc/text.php" ; 
            // include __DIR__ . "/../Other/inc/text.php" ; 
    // =================================================================================    

    // (*) => First Example => File System - {dirname()} => [Get the current directory of the current php file] => {Default Method}:
    
        $ha1 = "The following File System -  {dirname()} => [Get the current directory of the current php file] => {Default Method} : " ; 
                                
        // // Getting the current php file Full Path {at first}  :
        //    $file = __FILE__;
        
        // // Getting the current Folder - Directory of current php file  :            
        //     echo  "The Directory full path of the current php file by using {dirname(__FILE__)} :" . "<br>" . dirname($file);
        
        //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------                                                                        
                   
    // (*) => Second Example => File System - { __DIR__ } => [Get the current directory of the current php file] => {Direct Method (later version)} :

        $ha2 = "The following File System -  { __DIR__ } => [Get the current directory of the current php file] => {Direct Method (later version)}  : " ; 
                                                    
        // // Getting the current Folder - Directory of current php file {Directly} :
        //     echo "The Directory full path of the current php file by using { __DIR__ } :" . "<br>" . __DIR__;
        
        //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ; 
    // ---------------------------------------------                                                                                            
        
    // (*) => Third Example => File System - [ __FILE__ ] => {Getting the current php file } :

        $ha3 = "The following File System - [ __FILE__ ] => {Getting the current php file } : " ; 
                                
        // // Getting the current php file's full path [with extension] {Directly} : 
        //     echo __FILE__ ;
        //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------                                                                        
                            
    // (*) => Forth Example => File System - [basename(file Path)] => [Getting the current php file Pure name only] : {Default - with extension}  :

        $ha4 = "The following File System - [basename(file Path)] => [Getting the current php file Pure name only] : {Default - with extension} : " ; 
                                
        // // Getting the current php file Full Path {at first}  :
        //     $file = __FILE__;
        
        // // Getting the Current File pure name (with extension) of current php file  :            
        //     echo  "The Current File pure name (with extension) of current php file :" . "<br>" . basename($file);

        // echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------                                                                        
    
    // (*) => Fifth Example => File System - [basename(file Path, suffex)] => [Getting the current (php file Pure name) only] : {Advanced - without extension}  :

        $ha5 = "The following File System - [basename(file Path, suffex)] => [Getting the current php file Pure name only] : {Advanced - without extension} : " ; 
                                
        // // Getting the current php file Full Path {at first}  :
        //     $file = __FILE__;
        
        // // Getting the Current File pure name (without extension) of current php file  :            
        //     echo  "The Current File pure name (without extension) of current php file :" . "<br>" . basename($file, ".php");

        // echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------                                                                                                    

    // (*) => Sixth Example => File System - [include] => { Including (3) another php file(Inside the same parent directory && up one level && up two levels ) with in the current php file } :
        $ha6 = "The following file System - [include] => { Including (3) another php file : " . "<br>" .
               "1- Inside the same parent directory " . "<br>" .
               "2- Up one level " . "<br>".
               "3- Up two levels " . "<br>".            
            "with in the current php file } : " ; 
        
            
            //  // including files :
            //  // Including another php file located inside the same parent directory :
            //  echo "Including php file located inside the same parent directory , by the following code : " . "<br>" . "<br>";
            //  echo "include __DIR__ . \"/inc/text.php\" ;" . "<br>" . "<br>";
            //  include __DIR__ . "/inc/text.php"; 
            //  echo "<br>" . "<hr>" ; 
                    
            //  // Including another php file located inside up by one level from the same parent directory :
            //  echo "Including another php file located inside up by one level from the same parent directory , by the following code : " . "<br>" . "<br>";
            //  echo "include __DIR__ . \"/../inc/text.php\" ;" . "<br>" . "<br>" ;
            //  include __DIR__ . "/../inc/text.php"; 
            //  echo "<br>" . "<hr>" ; 
                    
            //  // Including another php file located inside up by two level from the same parent directory :
            //  echo "Including another php file located inside up by two level from the same parent directory , by the following code : " . "<br>" . "<br>";    
            //  echo "include __DIR__ . \"/../Other/inc/text.php\" ;" . "<br>" . "<br>";
            //  include __DIR__ . "/../Other/inc/text.php"; 
            //  echo "<br>" . "<hr>" ; 
                    
            // echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------
    // ---------------------------------------------                                                                                           
    // ====================================================================================        
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
                The following textnode of this head has been genereated by PHP path : <br>        
                <?php echo $heading; echo '<br>'; ?>            
            </h1>

            <p>
                The following textnode of this Paragraph has been genereated by PHP path : <br>        
                <?php echo $paragraph; echo '<br>'; ?> 
            </p> <br>        
          <!-- ------------------------------------------------------------------------- -->            

            <section class="PHPPract" id="PHPPract">                                       
            
            <!-- (*) => First Example => File System - {dirname()} => [Get the current directory of the current php file] => {Default Method} : -->                             
                        
                        <header>
                             (*) => First Example => File System - {dirname()} || {_DIR_} => [Get the current directory of the current php file] => {Default Method} : <br> 
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha1 ?>  </h1>  
                                
                            <?php

                                // Getting the current php file Full Path {at first}  :
                                   $file = __FILE__;
                                
                                // Getting the current Folder - Directory of current php file :
                                    echo  "The Directory full path of the current php file by using {dirname(__FILE__)} :" . "<br>" . dirname($file);
                                
                                    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
             <!-- (*) => Second Example => File System - { __DIR__ } => [Get the current directory of the current php file] => {Direct Method (later version)} : -->

                        <header>                                
                            (*) => // (*) => Second Example => File System - { __DIR__ } => [Get the current directory of the current php file] => {Direct Method (later version)} : <br>
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha2 ?>  </h1>                                  
                            
                            <?php
                                // Getting the current Folder - Directory of current php file {Directly} :
                                    echo "The Directory full path of the current php file by using { __DIR__ } :" . "<br>" . __DIR__;
                                
                                echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ; 
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
             <!-- (*) => Third Example => Third Example => File System - [ __FILE__ ] => {Getting the current php file full path with extension }  : -->
                        <header>                                
                            (*) => // (*) => Third Example => Third Example => File System - [ __FILE__ ] => {Getting the current php file } : <br>
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha3 ?>  </h1>                                  
                            
                            <?php
                                // Getting The current php file's full path [with extension] {Directly} : 
                                    echo "The current php file's full path [with extension] : " . "<br>" . __FILE__ ;
                                    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
             <!-- (*) => Forth Example => File System - [basename(file Path)] => [Getting the current php file Pure name only] : {Default - with extension} : -->
                        <header>                                
                            (*) => // (*) => Forth Example => File System - [basename(file Path)] => [Getting the current php file Pure name only] : {Default - with extension} : <br>
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha4 ?>  </h1>                                  
                            
                            <?php
                                // Getting the current php file Full Path {at first}  :
                                    $file = __FILE__;
                                
                                // Getting the Current File pure name (with extension) of current php file  : 
                                    echo  "The Current File pure name (with extension) of current php file :" . "<br>" . basename($file);

                                echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                
                        
            <!-- (*) => Fifth Example => File System - [basename(file Path, suffex)] => [Getting the current (php file Pure name) only] : {Advanced - without extension} : -->
                        <header>                                
                            (*) => // (*) => Fifth Example => File System - [basename(file Path, suffex)] => [Getting the current (php file Pure name) only] : {Advanced - without extension} : <br>
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha5 ?>  </h1>
                            
                            <?php

                                // Getting the current php file Full Path {at first}  :
                                    $file = __FILE__;
                                
                                // Getting the Current File pure name (without extension) of current php file :
                                    echo  "The Current File pure name (without extension) of current php file :" . "<br>" . basename($file, ".php");

                                echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                                                                         

            <!-- (*) => Sixth Example => File System - [include] => { Including (3) another php file(Inside the same parent directory && up one level && up two levels ) with in the current php file } : -->
                        <header>                                
                            (*) => // (*) => Sixth Example => File System - [include] => { Including (3) another php file(Inside the same parent directory && up one level && up two levels ) with in the current php file } : <br>
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha6 ?>  </h1>
                            
                            <?php
                                // including files :
                                    // 1- Including another php file located inside the same parent directory :
                                        echo "Including php file located inside the same parent directory , by the following code : " . "<br>" . "<br>";
                                        echo "include __DIR__ . \"/inc/text.php\" ;" . "<br>" . "<br>";
                               
                                        include __DIR__ . "/inc/text.php"; 
                                        echo "<br>" . "<hr>" ; 
                                    
                                    // 2- Including another php file located inside up by one level from the same parent directory :
                                        echo "Including another php file located inside up by one level from the same parent directory , by the following code : " . "<br>" . "<br>";
                                        echo "include __DIR__ . \"/../inc/text.php\" ;" . "<br>" . "<br>" ;
                               
                                        include __DIR__ . "/../inc/text.php"; 
                                        echo "<br>" . "<hr>" ; 
                                    
                                    // 3- Including another php file located inside up by two level from the same parent directory :
                                        echo "Including another php file located inside up by two level from the same parent directory , by the following code : " . "<br>" . "<br>";    
                                        echo "include __DIR__ . \"/../Other/inc/text.php\" ;" . "<br>" . "<br>";
                               
                                        include __DIR__ . "/../Other/inc/text.php"; 
                                        echo "<br>" . "<hr>" ; 
                                                
                                        echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;                                
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                                                                         
            <!-- ---------------------------------------------------------- -->                
            <!-- ================================================================================= -->            
            <!-- ================================================================================= -->            
            </section>
                                                                    
         </body>
</html>