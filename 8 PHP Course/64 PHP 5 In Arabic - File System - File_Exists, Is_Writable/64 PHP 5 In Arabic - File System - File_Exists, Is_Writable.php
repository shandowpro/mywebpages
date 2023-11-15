<!--  64 PHP 5 In Arabic - File System - File_Exists, Is_Writable  --> 
<?php

    $lessonName  ='Control Structure - File System - File_Exists, Is_Writable';
    $title = '64 PHP5 - ' . $lessonName;
    $css = '64 PHP 5 In Arabic - File System - File_Exists, Is_Writable.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    // ============================================================================

    // (*) Variable Definitions & Decleration :
        
        // String variable :          
              
            // $file = "shadi1.txt" ;                      
        
    // =================================================================================    
 
    // (*) => First Example => File System -  [file_exists] => {Simple testing} => Testing of Existed file :
    
        $ha1 = "The following File System -  [file_exists] => {Simple testing} => Testing of Existed file : " ; 
        
        // // Getting the Full Path of the Existing [PHP file] + print the file's path   :
        //     $path1 = dirname(__FILE__);
        //     echo "The root path is " . $path1 ;
        
        // // Declaring File Variable upon the Full Path of the Existing file  :
        //     $file1 = $path1 . "/shadi1.txt" ;        
        
        // // Testing by [if condition] declared file is Existed  :
        //     if (file_exists($file1)) {
        //         echo "Yes, The file [' " . $file1 . " '] is existed , NO contents will be added inside the file"; 
        //     } else {
        //         echo "No, The file [' " . $file1 . " '] is Not existed , NO contents will be added inside the file ";
        //     }                        
        //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------                                                                        
                   
    // (*) => Second Example => File System -  [file_exists] => {Simple testing} => Testing of UnExisted file :
    
        $ha2 = "The following File System -  [file_exists] => {Simple testing}  => Testing of UnExisted file : " ; 
        
        // // Getting the Full Path of the Existing [PHP file]  :
        //     $path2 = dirname(__FILE__);
        
        // // Declaring File Variable upon the Full Path of the UnExisting file  :
        //     $file2 = $path2 . "/shadi2.txt" ;        
                            
        // // Testing by [if condition] declared file is UExisted :
        //     if (file_exists($file2)) {
        //         echo "Yes, The file [' " . $file2 . " '] is existed , NO contents will be added inside the file "; 
        //     } else {
        //         echo "No, The file [' " . $file2 . " '] is Not existed , NO contents will be added inside the file";
        //     }                        
        //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------                                                                        
                   
    // (*) => Third Example => File System -  [is_writable]  => {Simple testing} => Testing of Existed & writable file :
    
        $ha3 = "The following File System -  [is_writable]  => {Simple testing} => Testing of Existed writable file : " ; 
        
        // // Getting the Full Path of the Existing-writable [PHP file]  :
        //     $path3 = dirname(__FILE__);
        
        // // Declaring File Variable upon the Full Path of the Existing file  :
        //     $file3 = $path3 . "/shadi3.txt" ;        
                            
        // // Testing by [if condition] if the declared file is writable  :
        //     if (is_writable($file3)) {
        //         echo "Yes, The file [' " . $file3 . " '] is Writable & , NO contents will be added inside the file ";                
        //     } else {
        //         echo "No, The file [' " . $file3 . " '] is NOT Writable , NO contents will be added inside the file ";
        //     }                        
        //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------                                                                        
                   
    // (*) => Fourth Example => File System -  [is_writable]  => {Simple testing} => Testing of Existed & Un-writable file :
    
        $ha4 = "The following File System -  [is_writable]  => {Simple testing} => Testing of Existed Un-writable file : " ; 
        
        // // Getting the Full Path of the Existing-writable [PHP file]  :
        //     $path4 = dirname(__FILE__);
        
        // // Declaring File Variable upon the Full Path of the Existing file  :
        //      $file4 = $path4 . "/shadi4.txt" ;        
                            
        // // Testing by [if condition] if the declared file is writable  :
        //     if (is_writable($file4)) {
        //         echo "Yes, The file [' " . $file4 . " '] is Writable & , NO contents will be added inside the file ";
        //     } else {
        //         echo "No, The file [' " . $file4 . " ']  is NOT Writable & , NO contents will be added inside the file ";
        //     }                        
        //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------                                                                        
                   
    // (*) => Fifth Example => File System - [file_exists] & [file_put_contents]  => {Combined testing (2)} => {Existed File} : Testing of Existed file & write contents inside file {in case the file is existed only} :
    
        $ha5 = "The following File System - [file_exists] & [file_put_contents]  => {Combined testing (2)} => {Existed File} : Testing of Existed file & write contents inside file {in case the file is existed only} : " ; 
        
        // // Getting the Full Path of the Existing-writable [PHP file]  :
        //     $path5 = dirname(__FILE__);
        
        // // Declaring File Variable upon the Full Path of the Existing file  :
        //     $file5 = $path5 . "/shadi5.txt" ;        
                            
        // // Testing by [if condition] if the declared file is existed & Put contents  :
        //     if (file_exists($file5)) {
        //         echo "Yes, The file [' " . $file5 . " '] is existed & contents will be put inside ";                
        //         file_put_contents($file5, "This text has been put inside the file by php - {in case the file is existed}");
        //     } else {
        //         echo "No, The file [' " . $file5 . " '] is Not existed ";
        //         // file_put_contents($file5, "This text has been put inside the file by php  - {in case the file is Not existed}");
        //     }                        
        //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------                                                                        
                   
    // (*) => Sixth Example => File System - [file_exists] & [file_put_contents]  => {Combined testing (2)} => {Existed File} : Testing of Existed file & write contents inside file {in case the file is existed || NOT} :
    
        $ha6 = "The following File System -  File System - [file_exists] & [file_put_contents]  => {Combined testing (2)} => {Existed File} : Testing of Existed file & write contents inside file {in case the file is existed || NOT} :" ; 
        
        // // Getting the Full Path of the Existing-writable [PHP file]  :
        // $path6 = dirname(__FILE__);
        
        // // Declaring File Variable upon the Full Path of the Existing file  :
        //     $file6 = $path6 . "/shadi6.txt" ;        
                            
        // // Testing by [if condition] if the declared file is existed & Put contents  :
        //     if (file_exists($file6)) {
        //         echo "Yes, The file [' " . $file6 . " '] is existed & contents will be put inside ";                
        //         file_put_contents($file6, "This text has been put inside the file by php - {in case the file is existed} ");
        //     } else {
        //         echo "No, The file [' " . $file6 . " '] is Not existed ";
        //         file_put_contents($file6, "This text has been put inside the file by php  - {EVEN in case the file is Not existed}  ");
        //     }                        
        //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------                                                                        
 
    // (*) => Seventh Example => File System - [file_exists] & [is_writable] & [file_put_contents]  => {Combined testing (3)} => {Existed File} : Testing of Existed file & Writable file & write contents Inside file {in case of existed file only} :
    
        $ha7 = "The following File System -  File System - [file_exists] & [is_writable] & [file_put_contents] => {Combined testing (3)} => {Existed File} : Testing of Existed file & Writable file & write contents inside file {in case of existed file only}: " ; 
        
        // // Getting the Full Path of the Existing-writable [PHP file]  :
        // $path7 = dirname(__FILE__);
        
        // // Declaring File Variable upon the Full Path of the Existing file  :
        //     $file7 = $path7 . "/shadi7.txt" ;        
                            
        // // Testing by [if condition] if the declared file is existed & writable & Put contents  :
        //     if (file_exists($file7)) {
        //         echo "Yes, The file [' " . $file7 . " '] is existed ";                
        //         if (is_writable($file7)){                    
        //             file_put_contents($file7, "Is Writable & the text will be put inside the file by php ");
        //         } else{
        //             echo "No, The file [' " . $file7 . " '] is Not Writable, content will not be put inside the file ";                                                                                
        //         }                
        //     } else {
        //         echo "No, The file [' " . $file7 . " '] is Not existed ";                
        //     }                        
        //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------                                                                        
                   
    // (*) => Eighth Example => File System - [file_exists] & [is_writable] & [file_put_contents]  => {Combined testing (3)} => {Existed File} : Testing of Existed file && Writable file && write contents inside file {in case of existed ||  NOT } :
    
        $ha8 = "The following File System -  File System - [file_exists] & [is_writable] & [file_put_contents] => {Combined testing (3)} => {Existed File} : Testing of Existed file & Writable file & write contents inside file {in case of existed || NOT}: " ; 
        
        // // Getting the Full Path of the Existing-writable [PHP file]  :
        //     $path8 = dirname(__FILE__);
        
        // // Declaring File Variable upon the Full Path of the Existing file  :
        //     $file8 = $path8 . "/shadi8.txt" ;        
                            
        // // Testing by [if condition] if the declared file is existed & writable & Put contents  :
        //     if (file_exists($file8)) {
        //         echo "Yes, The file [' " . $file8 . " '] is existed ";                
        //         if (is_writable($file8)){                    
        //             file_put_contents($file8, "Is Writable & the text will be put inside the file by php ");
        //         } else{
        //             echo "No, The file [' " . $file8 . " '] is Not Writable, content will not be put inside the file ";
        //         }                
        //     } else {
        //         echo "No, The file [' " . $file8 . " '] is Not existed, but will be created & The text will be put inside the file by PHP {file_put_contents} function , even the file is not existed";
        //         file_put_contents($file8, "The file has breen created  & The text has been put inside the file after creating");
        //     }                        
        //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
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
                The following textnode of this head has been genereated by PHP file : <br>        
                <?php echo $heading; echo '<br>'; ?>            
            </h1>

            <p>
                The following textnode of this Paragraph has been genereated by PHP file : <br>        
                <?php echo $paragraph; echo '<br>'; ?> 
            </p> <br>        
          <!-- ------------------------------------------------------------------------- -->            

            <section class="PHPPract" id="PHPPract">                                       
            
            <!-- (*) => First Example => File System -  [file_exists] => {Simple testing} => Testing of Existed file : -->                             
                        
                        <header>
                             (*) => First Example => File System -  [file_exists] => {Simple testing} => Testing of Existed file   : <br> 
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha1 ?>  </h1>  
                                
                            <?php

                                // Getting the Full Path of the Existing [PHP file] + print the file's path   :
                                    $path1 = dirname(__FILE__);
                                    echo "The root path is " . "<br>" . $path1 . "<br>" ;
                                
                                // Declaring File Variable upon the Full Path of the Existing file  :
                                    $file1 = $path1 . "/shadi1.txt" ;        
                                
                                // Testing by [if condition] declared file is Existed  :
                                    if (file_exists($file1)) {
                                        echo "Yes, The file [' " . $file1 . " '] is existed , NO contents will be added inside the file"; 
                                    } else {
                                        echo "No, The file [' " . $file1 . " '] is Not existed , NO contents will be added inside the file ";
                                    }                        
                                    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
             <!-- (*) => Second Example => File System -  [file_exists] => {Simple testing} => Testing of UnExisted file  : -->

                        <header>                                
                            (*) => // (*) => Second Example => File System -  [file_exists] => {Simple testing} => Testing of UnExisted file : <br>
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha2 ?>  </h1>                                  
                            
                            <?php

                                // Getting the Full Path of the Existing [PHP file]  :
                                    $path2 = dirname(__FILE__);
                                    echo "The root path is " . "<br>" . $path2 . "<br>" ;
                                
                                // Declaring File Variable upon the Full Path of the Existing file  :
                                    $file2 = $path2 . "/shadi2.txt" ;        
                                                    
                                // Testing by [if condition] declared file is Existed :
                                    if (file_exists($file2)) {
                                        echo "Yes, The file [' " . $file2 . " '] is existed , NO contents will be added inside the file "; 
                                    } else {
                                        echo "No, The file [' " . $file2 . " '] is Not existed , NO contents will be added inside the file";
                                    }                        
                                    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
             <!-- (*) => Third Example => File System -  [is_writable]  => {Simple testing} => Testing of Existed & writable file  : -->
                        <header>                                
                            (*) => // (*) => Third Example => File System -  [is_writable]  => {Simple testing} => Testing of Existed & writable file: <br>
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha2 ?>  </h1>                                  
                            
                            <?php

                                // Getting the Full Path of the Existing-writable [PHP file]  :
                                    $path3 = dirname(__FILE__);
                                    echo "The root path is " . "<br>" . $path1 . "<br>" ;
                                
                                // Declaring File Variable upon the Full Path of the Existing file  :
                                    $file3 = $path3 . "/shadi3.txt" ;        
                                                    
                                // Testing by [if condition] if the declared file is writable  :
                                    if (is_writable($file3)) {
                                        echo "Yes, The file [' " . $file3 . " '] is Writable & , NO contents will be added inside the file ";                
                                    } else {
                                        echo "No, The file [' " . $file3 . " '] is NOT Writable , NO contents will be added inside the file ";
                                    }                        
                                    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
             <!-- (*) => Fourth Example => File System -  [is_writable]  => {Simple testing} => Testing of Existed & Un-writable file   : -->
                        <header>                                
                            (*) => // (*) => Fourth Example => File System -  [is_writable]  => {Simple testing} => Testing of Existed & Un-writable file : <br>
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha4 ?>  </h1>                                  
                            
                            <?php
                                // Getting the Full Path of the Existing-writable [PHP file]  :
                                    $path4 = dirname(__FILE__);    
                                    echo "The root path is " . "<br>" . $path1 . "<br>" ;
                                        
                                // Declaring File Variable upon the Full Path of the Existing file  :
                                    $file4 = $path4 . "/shadi4.txt" ;        
                                                    
                                // Testing by [if condition] if the declared file is writable  :
                                    if (is_writable($file4)) {
                                        echo "Yes, The file [' " . $file4 . " '] is Writable & , NO contents will be added inside the file ";
                                    } else {
                                        echo "No, The file [' " . $file4 . " ']  is NOT Writable & , NO contents will be added inside the file ";
                                    }                        
                                    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                
                        
            <!-- (*) => Fifth Example => File System - [file_exists] & [file_put_contents]  => {Combined testing (2)} => {Existed File} : Testing of Existed file & write contents inside file {in case the file is existed only}   : -->
                        <header>                                
                            (*) => // (*) => Fifth Example => File System - [file_exists] & [file_put_contents]  => {Combined testing (2)} => {Existed File} : Testing of Existed file & write contents inside file {in case the file is existed only} : <br>
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha5 ?>  </h1>
                            
                            <?php
                                // Getting the Full Path of the Existing-writable [PHP file]  :
                                    $path5 = dirname(__FILE__);
                                    echo "The root path is " . "<br>" . $path1 . "<br>" ;
                                
                                // Declaring File Variable upon the Full Path of the Existing file  :
                                    $file5 = $path5 . "/shadi5.txt" ;        
                                                    
                                // Testing by [if condition] if the declared file is existed & Put contents  :
                                    if (file_exists($file5)) {
                                        echo "Yes, The file [' " . $file5 . " '] is existed & contents will be put inside ";                
                                        file_put_contents($file5, "This text has been put inside the file by php - {in case the file is existed}");
                                    } else {
                                        echo "No, The file [' " . $file5 . " '] is Not existed ";
                                        // file_put_contents($file5, "This text has been put inside the file by php  - {in case the file is Not existed}");
                                    }                        
                                echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
             
            <!-- (*) => Sixth Example => File System - [file_exists] & [file_put_contents]  => {Combined testing (2)} => {Existed File} : Testing of Existed file & write contents inside file {in case the file is existed || NOT}   : -->
                        <header>                                
                            (*) => // (*) => Sixth Example => File System - [file_exists] & [file_put_contents]  => {Combined testing (2)} => {Existed File} : Testing of Existed file & write contents inside file {in case the file is existed || NOT} : <br>
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha6 ?>  </h1>
                            
                            <?php
                                // Getting the Full Path of the Existing-writable [PHP file]  :
                                    $path6 = dirname(__FILE__);
                                    echo "The root path is " . "<br>" . $path1 . "<br>" ;
                                    
                                // Declaring File Variable upon the Full Path of the Existing file  :
                                    $file6 = $path6 . "/shadi6.txt" ;        
                                                    
                                // Testing by [if condition] if the declared file is existed & Put contents  :
                                    if (file_exists($file6)) {
                                        echo "Yes, The file [' " . $file6 . " '] is existed & contents will be put inside ";                
                                        file_put_contents($file6, "This text has been put inside the file by php - {in case the file is existed} ");
                                    } else {
                                        echo "No, The file [' " . $file6 . " '] is Not existed ";
                                        file_put_contents($file6, "This text has been put inside the file by php  - {EVEN in case the file is Not existed}  ");
                                    }                        
                                echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
            <!-- (*) => Seventh Example => File System - [file_exists] & [is_writable] & [file_put_contents]  => {Combined testing (3)} => {Existed File} : Testing of Existed file & Writable file & write contents Inside file {in case of existed file only}   : -->
                        <header>                                
                            (*) => // (*) => Seventh Example => File System - [file_exists] & [is_writable] & [file_put_contents]  => {Combined testing (3)} => {Existed File} : Testing of Existed file & Writable file & write contents Inside file {in case of existed file only} : <br>
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha7 ?>  </h1>
                            
                            <?php
                                // Getting the Full Path of the Existing-writable [PHP file]  :
                                    $path7 = dirname(__FILE__);
                                    echo "The root path is " . "<br>" . $path1 . "<br>" ;
                                    
                                // Declaring File Variable upon the Full Path of the Existing file  :
                                    $file7 = $path7 . "/shadi7.txt" ;        
                                                    
                                // Testing by [if condition] if the declared file is existed & writable & Put contents  :
                                    if (file_exists($file7)) {
                                        echo "Yes, The file [' " . $file7 . " '] is existed ";                
                                        if (is_writable($file7)){                    
                                            file_put_contents($file7, "Is Writable & the text will be put inside the file by php ");
                                        } else{
                                            echo "No, The file [' " . $file7 . " '] is Not Writable, content will not be put inside the file ";                                                                                
                                        }                
                                    } else {
                                        echo "No, The file [' " . $file7 . " '] is Not existed ";                
                                    }                        
                                echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
            <!-- (*) => Eighth Example => File System - [file_exists] & [is_writable] & [file_put_contents]  => {Combined testing (3)} => {Existed File} : Testing of Existed file && Writable file && write contents inside file {in case of existed ||  NOT }   : -->
                        <header>                                
                            (*) => // (*) => Eighth Example => File System - [file_exists] & [is_writable] & [file_put_contents]  => {Combined testing (3)} => {Existed File} : Testing of Existed file && Writable file && write contents inside file {in case of existed ||  NOT } : <br>
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha8 ?>  </h1>
                            
                            <?php
                                // Getting the Full Path of the Existing-writable [PHP file]  :
                                        $path8 = dirname(__FILE__);
                                        echo "The root path is " . "<br>" . $path1 . "<br>" ;
                                    
                                // Declaring File Variable upon the Full Path of the Existing file  :
                                    $file8 = $path8 . "/shadi8.txt" ;        
                                                    
                                // Testing by [if condition] if the declared file is existed & writable & Put contents  :
                                    if (file_exists($file8)) {
                                        echo "Yes, The file [' " . $file8 . " '] is existed ";                
                                        if (is_writable($file8)){                    
                                            file_put_contents($file8, "Is Writable & the text will be put inside the file by php ");
                                        } else{
                                            echo "No, The file [' " . $file8 . " '] is Not Writable, content will not be put inside the file ";
                                        }                
                                    } else {
                                        echo "No, The file [' " . $file8 . " '] is Not existed, but will be created & The text will be put inside the file by PHP {file_put_contents} function , even the file is not existed";
                                        file_put_contents($file8, "The file has breen created  & The text has been put inside the file after creating");
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