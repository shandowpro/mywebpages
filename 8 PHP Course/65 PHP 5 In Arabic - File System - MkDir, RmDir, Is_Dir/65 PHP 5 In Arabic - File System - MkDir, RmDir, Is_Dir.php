 <!--  65 PHP 5 In Arabic - path System - MkDir, RmDir, Is_Dir  --> 
<?php

    $lessonName  ='Control Structure - path System - MkDir, RmDir, Is_Dir';
    $title = '65 PHP5 - ' . $lessonName;
    $css = '65 PHP 5 In Arabic - path System - MkDir, RmDir, Is_Dir.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    // ============================================================================

    // (*) Variable Definitions & Decleration :
        
        // String variable :          
              
            $name = "shadi";            
        
    // =================================================================================    
 
    // (*) => First Example => path System -  [mkdir()] => {make directory} [without testing] :
    
        $ha1 = "The following path System -  [mkdir()] => {make directory} [without testing] : " ; 
                                
        // // Creating the folder - Directory  :            
        //     mkdir($name);
        
        // // Giving the confirmation message of [Directory Creation]  :        
        //     echo "The directory " . $name . " has been created successfully" ;
        //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------                                                                        
                   
    // (*) => Second Example => path System - [rmdir()] => {Remove directory} [without testing] :

        $ha2 = "The following path System - [rmdir()] => {Remove directory} [without testing] : " ; 
                                
        // // Removing the folder - Directory  :            
        //     rmdir($name);
        
        // // Giving the confirmation message of [Dirctroy Removing] :        
        //     echo "The directory " . $name . " has been removed successfully" ;
        //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------                                                                                            
        
    // (*) => Third Example => path System - [is_dir()] => {Checking directory} [Simple testing] :

        $ha3 = "The following path System - [is_dir()] => {Checking directory} [Simple testing] : " ; 
                                
        // // Checking of existed folder - Directory  :            
        //     is_dir($name);
        
        // // Giving the confirmation message of [Dirctroy Existancy] :        
        //     echo "The directory " . $name . " Is existed " ;
        //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------                                                                        
                            
    // (*) => Forth Example => path System - [is_dir()] + [mkdir()] => {Checking directory & Creating directory} [Testing & Creation] :

        $ha4 = "The following path System - [is_dir()] + [mkdir()] => {Checking directory & Creating directory} [Testing & Creation] : " ; 
                                
        // // Checking of existed folder - Directory + Creation in case of Not existance  :            
        //     if (is_dir($name)) {
        //         echo "The directory " . $name . " is already existed , and can Not be re-created";
        //     } else {        
        //    // creating the folder in case of existance :
        //         mkdir($name);
        //         echo "The directory " . $name . " has been created successfully ";
        //     }                                                                    
        // echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------                                                                        
                        
    // (*) => Fifth Example => path System - [is_dir()] + [rmdir()] => {Checking directory & Removing} [Testing & Removing] :

        $ha5 = "The following path System - [is_dir()] + [rmdir()] => {Checking directory & Removing directory} [Testing & Removing] : " ; 
                                
        // // Checking of existed folder - Directory + Removing in case of existance  :            
        //     if (is_dir($name)) {
        // //      Removing the folder in case of existance :
        //         rmdir($name);
        //         echo "The directory " . $name . " has been Deleted successfully! ";
        //     } else {
        //         echo "The directory " . $name . " is already Not existed, and Can Not be deleted ";
        //     }                                                                    
        // echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------                                                                                                    

    // (*) => Sixth Example => path System - [is_dir()] + [mkdir()] + [path_exists()] + [is_writable()] + [path_put_contents()] => {Checking directory Existing & Make directory & path Existing & Is writable & Put contents - adding } :

        $ha6 = "The following path System - [is_dir()] + [mkdir()] + [path_exists()] + [is_writable()] + [path_put_contents()] => {Checking directory Existing & Make directory & path Existing & Is writable & Put contents - adding } : " ; 
                              
        $path = dirname(__File__) . "/shadi" ;
        $contents = "This contents added by php {path_put_contents}";
        
        /* Checking of existed folder - [Testing of Directory existance + Creating Directory in case of Non existance] =>
            [Testing of path existance + Creating path in case of Non existance  ] || [creating in case of non existance] =>
            [Testing of path writable type + puting the new contents in case of writable type] :            
        */
        //     if (is_dir($name)) {                
        //         echo "The directory " . $name . " is already existed, lets test path existance ..." . "<br>";
        //         if (path_exists($path)) {
        //             echo "The path " . $path . " is already existed" . "<br>";
                    
        //             if (is_writable($path)){
        //                 echo "The path " . $path . " is Writable" . "<br>";
        //                 path_put_contents($path, $contents);
        //                 echo "The Contents " . $contents . " has been added to path [" . $path . "] successfully" . "<br>";
                        
        //             } else {
        //                 echo "The path " . $path . " is Not Writable - read only, no contents can be added insied it!" . "<br>";
        //             }                    
                
        //         } else {
        //             echo "The path " . $path . " is already existed!, but can be added by new contents inside" . "<br>";
        //             path_put_contents($path, $contents) . "<br>";
        //             echo "The Contents " . $contents . " has been added to path [" . $path . "] successfully" . "<br>";
        //         }

        //     } else {
        //         mkdir($name);
        //         echo "The directory " . $name . " has been Created successfully! " . "<br>";                
                
        //         if (path_exists($path)) {
        //             echo "The path " . $path . " is already existed" . "<br>";
                    
        //             if (is_writable($path)){
        //                 echo "The path " . $path . " is Writable" . "<br>";
        //                 path_put_contents($path, $contents) . "<br>";
        //             } else {
        //                 echo "The path " . $path . " is Not Writable - read only, no contents can be added insied it!" . "<br>";
        //                 echo "The Contents " . $contents . " has been added to path [" . $path . "] successfully" . "<br>";
        //             }                    
                    
        //         } else {
        //             echo "The path " . $path . " is already existed!, but can be added by new contents inside" . "<br>";
        //             path_put_contents($path, $contents) . "<br>";
        //             echo "The Contents " . $contents . " has been added to path [" . $path . "] successfully" . "<br>";
        //         }
        //     }                                                                    
        // echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------
    // ---------------------------------------------                                                                                           
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
                The following textnode of this head has been genereated by PHP path : <br>        
                <?php echo $heading; echo '<br>'; ?>            
            </h1>

            <p>
                The following textnode of this Paragraph has been genereated by PHP path : <br>        
                <?php echo $paragraph; echo '<br>'; ?> 
            </p> <br>        
          <!-- ------------------------------------------------------------------------- -->            

            <section class="PHPPract" id="PHPPract">                                       
            
            <!-- (*) => First Example => path System -  [mkdir()] => {make directory} [without testing] : -->                             
                        
                        <header>
                             (*) => First Example => path System -  [mkdir()] => {make directory} [without testing]   : <br> 
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha1 ?>  </h1>  
                                
                            <?php

                                // Creating the folder - Directory  :            
                                    mkdir($name);
                                
                                // Giving the confirmation message of [Directory Creation]  :        
                                    echo "The directory [" . $name . "] has been created successfully {with out testing } " ;
                                    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
             <!-- (*) => Second Example => path System - [rmdir()] => {Remove directory} [Removing without testing] : -->

                        <header>                                
                            (*) => // (*) => Second Example => path System - [rmdir()] => {Remove directory} [without testing] : <br>
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha2 ?>  </h1>                                  
                            
                            <?php
                                // Removing the folder - Directory  :            
                                    rmdir($name);
                                
                                // Giving the confirmation message of [Dirctroy Removing] :        
                                    echo "The directory [" . $name . "] has been removed successfully {with out testing}" ;
                                    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;                                
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
             <!-- (*) => Third Example => path System - [is_dir()] => {Checking directory} [Simple testing]  : -->
                        <header>                                
                            (*) => // (*) => Third Example => path System - [is_dir()] => {Checking directory} [Simple testing] : <br>
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha3 ?>  </h1>                                  
                            
                            <?php
                                // Checking of existed folder - Directory  :            
                                    if (is_dir($name)) {
                                        // Giving the confirmation message of [Dirctroy Existancy] (in case of exsitance ):
                                            echo "The directory [" . $name . "] Is existed " ;
                                    } else {
                                        // Giving the confirmation message of [Dirctroy Existancy] (in case of NON exsitance ):        
                                        echo "The directory [" . $name . "] Is Not existed " ;                                                                            
                                    }                                                                
                                    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;                                                        
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
             <!-- (*) => Forth Example => path System - [is_dir()] + [mkdir()] => {Checking directory & Creating directory} [Testing & Creation]  : -->
                        <header>                                
                            (*) => // (*) => Forth Example => path System - [is_dir()] + [mkdir()] => {Checking directory & Creating directory} [Testing & Creation] : <br>
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha4 ?>  </h1>                                  
                            
                            <?php
                                // Checking of existed folder - Directory + Creation in case of Not existance :
                                    if (is_dir($name)) {
                                        echo "The directory [" . $name . "] is already existed , and can Not be re-created";
                                    } else {
                                        mkdir($name);
                                        echo "The directory [" . $name . "] has been created successfully ";
                                    }                                                                    
                                echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                
                        
            <!-- (*) => Fifth Example => path System - [is_dir()] => {Checking directory & Removing} [Testing & Removing]  : -->
                        <header>                                
                            (*) => // (*) => Fifth Example => path System - [is_dir()] => {Checking directory & Removing} [Testing & Removing] : <br>
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha5 ?>  </h1>
                            
                            <?php

                                // Checking of existed folder - Directory + Removing in case of existance  :            
                                    if (is_dir($name)) {
                                        rmdir($name);
                                        echo "The directory [" . $name . "] has been Deleted successfully! ";
                                    } else {
                                        echo "The directory [" . $name . "] is already Not existed, and Can Not be deleted ";
                                    }                                                                    
                                echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;                                                    
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                                                                         

            <!-- (*) => Sixth Example => path System - [is_dir()] + [mkdir()] + [path_exists()] + [is_writable()] + [path_put_contents()] => {Checking directory Existing & Make directory & path Existing & Is writable & Put contents - adding } : -->
                        <header>                                
                            (*) => // (*) => Sixth Example => path System - [is_dir()] + [mkdir()] + [path_exists()] + [is_writable()] + [path_put_contents()] => {Checking directory Existing & Make directory & path Existing & Is writable & Put contents - adding }: <br>
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha6 ?>  </h1>
                            
                            <?php

                                $path = dirname(__File__) . "/shadi" ;
                                $file = $path . "/text file" ; 
                                $contents = "This contents will added by php method : {file_put_contents}";

                                /* Checking of existed folder - [Testing of Directory existance + Creating Directory in case of Non existance] =>
                                 [Testing of path existance + Creating path in case of Non existance  ] || [creating in case of non existance] =>
                                 [Testing of path writable type + puting the new contents in case of writable type] :            
                                 */
                                    if (is_dir($name)) {                
                                        echo "The directory " . $name . " is already existed, lets test path existance ..." . "<br>";
                                        if (file_exists($file)) {
                                            echo "The File [" . $file . "] is already existed" . "<br>";
                                            
                                            if (is_writable($file)){
                                                echo "The File [" . $file . "] is Writable" . "<br>";
                                                file_put_contents($file, $contents);
                                                echo "The Contents " . $contents . " has been added to file [" . $file . "] successfully" . "<br>";
                                                
                                            } else {
                                                echo "The File [" . $file . "] Type is Not Writable - read only, no contents can be added inside it!" . "<br>";
                                            }                    
                                        
                                        } else {
                                            echo "The File [" . $file . "] is Not existed!, but can be added by new contents inside" . "<br>";
                                            file_put_contents($file, $contents) . "<br>";
                                            echo "The Contents \"" . $contents . "\" has been added to file [" . $file . "] successfully" . "<br>";
                                        }

                                    } else {
                                        mkdir($name);
                                        echo "The directory [" . $name . "] has been Created successfully! " . "<br>";                
                                        
                                        if (file_exists($file)) {
                                            echo "The File [" . $file . "] is already existed" . "<br>";
                                            
                                            if (is_writable($file)){
                                                echo "The File [" . $file . "] is Writable" . "<br>";
                                                file_put_contents($file, $contents) . "<br>";
                                                echo "The Contents \"" . $contents . "\" has been added to File [" . $file . "] successfully" . "<br>";
                                            } else {
                                                echo "The File [" . $file . "] Type is Not Writable - read only, no contents can be added inside it!" . "<br>";
                                            }                    
                                            
                                        } else {
                                            echo "The File [" . $file . "] is Not existed!, but can be added by new contents inside" . "<br>";
                                            file_put_contents($file, $contents) . "<br>";
                                            echo "The Contents \"" . $contents . "\" has been added to file [" . $file . "] successfully" . "<br>";
                                        }
                                    }                                                                    
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