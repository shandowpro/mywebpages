 <!--  71 PHP 5 In Arabic - File System - Pathinfo --> 
<?php

    $lessonName  ='File System - PathInfo ';
    $title = '71 PHP5 - ' . $lessonName;
    $css = '71 PHP 5 In Arabic - File System - Pathinfo.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    // ============================================================================
    // (*) Variable Definitions & Decleration :                          
            
    // =================================================================================        
                    
    // (*) => First Example => File System - { pathinfo(full path, options } [default method - Getting all information - Array] :
        
        $ha1 = "Getting all information of path by : File System - { pathinfo(full path, options } [default method - Getting all information] as following : " . "<br>" ; 
        
        // // Processing the pathinfo method [Array full information] :

        //     echo "Path Full information {in Array} as following " .'<pre>';    
            
        //     print_r(pathinfo(__FILE__));
            
        //     echo '</pre>';    
            
        //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------        
            
    // (*) => Second Example => File System - { pathinfo(full path, options[PATHINFO_DIRNAME || PATHINFO_BASENAME || PATHINFO_EXTENSION || PATHINFO_FILENAME] } [Advanced method - Getting all information - Solo Mode] :
            
        $ha2 = "Getting all information of path by : File System - { pathinfo(full path, options } [Advanced method - Getting all information] as following : " . "<br>" ;
            
        // // Processing & printing the pathinfo method [Solo full information] :
        
        //     echo "Path Full information {in Solo option } as following " .'<pre>';    
            
        //     echo "Path [Dirname] is :" . "<br>";    
        //     print_r(pathinfo(__FILE__, PATHINFO_DIRNAME)) . "<br>";
            
        //     echo "Path [Basename] is :" . "<br>" ;
        //     print_r(pathinfo(__FILE__, PATHINFO_BASENAME)) . "<br>";
            
        //     echo "Path [Extension] is :" . "<br>";    
        //     print_r(pathinfo(__FILE__, PATHINFO_EXTENSION)) . "<br>";
            
        //     echo "Path Filename is :" . "<br>";    
        //     print_r(pathinfo(__FILE__, PATHINFO_FILENAME)) . "<br>";
            
        //     echo '</pre>';    
            
        //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;        
        
    // ---------------------------------------------        
        
    // (*) => Third Example => File System - {$arrayVar = pathinfo() } [Advanced method - Getting all information - Array keyname ] :
            
        $ha3 = "Getting all information of path by : File System - { pathinfo(full path, options } [Advanced method - Getting all information] as following : " . "<br>" ;
            
        // // Processing & printing the pathinfo method [Array full information - Array keyNames] :
           
        //     $links = pathinfo(__FILE__);
        
        //     echo "Path Full information {in Array keyName} as following :" . "<br>";    
        
        //     echo "<pre>"; 
        //     print_r ($links['dirname']) . "<br>";
        //     echo "</pre>"; 
            
        //     echo "<pre>"; 
        //     print_r ($links['basename']) . "<br>";
        //     echo "</pre>"; 
            
        //     echo "<pre>"; 
        //     print_r ($links['extension']) . "<br>";
        //     echo "</pre>"; 
            
        //     echo "<pre>"; 
        //     print_r ($links['filename']) . "<br>";                                    
        //     echo "</pre>"; 
            
        //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;        
        
    // ---------------------------------------------        
        
    // (*) => Fourth Example => File System - {$arrayVar = pathinfo() } [Advanced method - Checking of path information - conditional if ] :
            
        $ha4 = "Getting all information of path by : File System - { pathinfo(full path, options } [Advanced method - Getting all information] as following : " . "<br>" ;
        
        // // Checking for path Directory  :            
        //     if ($links['basename'] === '71 PHP 5 In Arabic - File System - Pathinfo.php') {
        //         echo "Your file basename is [71 PHP 5 In Arabic - File System - Pathinfo.php] " . "<br>";
        //     }                


        // // Checking for path Dirname :            
        //     if ($links['dirname'] === 'C:\xampp\htdocs\PHP Course\71 PHP 5 In Arabic - File System - Pathinfo') {
        //         echo "Your Path parent Directory is [C:\xampp\htdocs\PHP Course\71 PHP 5 In Arabic - File System - Pathinfo] " . "<br>";
        //     }


        // // Checking for path extension :                        
        //     if ($links['extension'] === 'php') {
        //         echo "Your file extension is [php]" . "<br>";
        //     } else {                
        //         echo "Your file extension is [Not php]" . "<br>";
        //     }
        
        
        // // Checking for path filename :            
        //     if ($links['filename'] === '71 PHP 5 In Arabic - File System - Pathinfo') {
        //         echo "Your file name is [71 PHP 5 In Arabic - File System - Pathinfo] " . "<br>";
        //     }
            
        
        //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;        
        
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
            
            <!-- (*) =>First Example => File System - { pathinfo(full path, options } [default method - Getting all information - Array]  : -->
                        
                    <header>
                        First Example => File System - { pathinfo(full path, options } [default method - Getting all information - Array] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1 ?>  </h1>  
                            
                        <?php       

                            // Processing the pathinfo method [Array full information] :

                                echo "Path Full information {in Array} as following " .'<pre>';    
                                
                                print_r(pathinfo(__FILE__));
                                
                                echo '</pre>';    
                                                        
                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;                                                
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
            <!-- (*) => Second Example => File System - { pathinfo(full path, options[PATHINFO_DIRNAME || PATHINFO_BASENAME || PATHINFO_EXTENSION || PATHINFO_FILENAME] } [Advanced method - Getting all information - Solo Mode] : -->                             
                        
                    <header>
                            (*) => Second Example => File System - { pathinfo(full path, options[PATHINFO_DIRNAME || PATHINFO_BASENAME || PATHINFO_EXTENSION || PATHINFO_FILENAME] } [Advanced method - Getting all information - Solo Mode] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha2 ?>  </h1>  
                            
                        <?php       
                            // Processing the pathinfo method [Solo full information] :
        
                            echo "Path Full information {in Solo option } as following " .'<pre>';    
                            
                            echo "Path [Dirname] is :" . "<br>";    
                            print_r(pathinfo(__FILE__, PATHINFO_DIRNAME)) . "<br>";
                            
                            echo "Path [Basename] is :" . "<br>" ;
                            print_r(pathinfo(__FILE__, PATHINFO_BASENAME)) . "<br>";
                            
                            echo "Path [Extension] is :" . "<br>";    
                            print_r(pathinfo(__FILE__, PATHINFO_EXTENSION)) . "<br>";
                            
                            echo "Path Filename is :" . "<br>";    
                            print_r(pathinfo(__FILE__, PATHINFO_FILENAME)) . "<br>";
                            
                            echo '</pre>';    
                            
                                                                                                                    
                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
            <!-- (*) => Third Example => File System - {$arrayVar = pathinfo() } [Advanced method - Getting all information - Array keyname ] : -->
                        
                    <header>
                            (*) => Third Example => File System - {$arrayVar = pathinfo() } [Advanced method - Getting all information - Array keyname ] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha3 ?>  </h1>  
                            
                        <?php       
                            // Processing the pathinfo method [Array full information - Array keyNames] :
           
                                $links = pathinfo(__FILE__);
                            
                                echo "Path Full information {in Array keyName} as following :" . "<br>";    
                            
                                echo "<pre>"; 
                                print_r ($links['dirname']) . "<br>";
                                echo "</pre>"; 
                                
                                echo "<pre>"; 
                                print_r ($links['basename']) . "<br>";
                                echo "</pre>"; 
                                
                                echo "<pre>"; 
                                print_r ($links['extension']) . "<br>";
                                echo "</pre>"; 
                                
                                echo "<pre>"; 
                                print_r ($links['filename']) . "<br>";                                    
                                echo "</pre>"; 
                                
                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
            <!-- (*) => Fourth Example => File System - {$arrayVar = pathinfo() } [Advanced method - Checking of path information - conditional if ]   : -->                                                     
                    <header>
                            (*) => Fourth Example => File System - {$arrayVar = pathinfo() } [Advanced method - Checking of path information - conditional if ]  : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha4 ?>  </h1>  
                            
                        <?php       
                            // Checking for path extension :            
            
                                if ($links['extension'] === 'php') {
                                    echo "Your file extension is [php]" . "<br>";
                                } else {                
                                    echo "Your file extension is [Not php]" . "<br>";
                                }
                                
                            // Checking for path Dirname :            
                                if ($links['dirname'] === 'C:\xampp\htdocs\PHP Course\71 PHP 5 In Arabic - File System - Pathinfo') {
                                    echo "Your Path parent Directory is [C:\xampp\htdocs\PHP Course\71 PHP 5 In Arabic - File System - Pathinfo] " . "<br>";
                                }
                                
                            // Checking for path filename :            
                                if ($links['filename'] === '71 PHP 5 In Arabic - File System - Pathinfo') {
                                    echo "Your file name is [71 PHP 5 In Arabic - File System - Pathinfo] " . "<br>";
                                }
                                
                            // Checking for path Directory  :            
                                if ($links['basename'] === '71 PHP 5 In Arabic - File System - Pathinfo.php') {
                                    echo "Your file basename is [71 PHP 5 In Arabic - File System - Pathinfo.php] " . "<br>";
                                }                
                            
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