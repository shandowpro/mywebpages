 <!--  72 PHP 5 In Arabic - File System - Unlink, RmDir + Examples--> 
<?php

    $lessonName  ='File System - unlink , rmdir + Exapmles ';
    $title = '72 PHP5 - ' . $lessonName;
    $css = '72 PHP 5 In Arabic - File System - Unlink, RmDir + Examples.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    // ============================================================================
    // (*) Variable Definitions & Decleration :                          
            $fileW  = __DIR__ . "/shadiW.txt"; 
            $fileR  = __DIR__ . "/shadiR.txt"; 
            $dir = __DIR__. "/PHP";
    // =================================================================================        
                    
    // (*) => First Example => File System - { unlink(full path, context } [default method - Simple deleting the file (writable) ] :
        
        $ha1 = " Simple [File] deleteing writable file by [unlink(full path, context)] as following : " . "<br>" ; 
        
        // // Processing the simple deleting process method [for writable file] :
        //     unlink($fileW);
            
        //     echo "The file " . basename($fileW) . " has been deleted, please check for it in the directory " ;                        
            
        // echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------        

    // (*) => Second Example => File System - { unlink(full path, context } [Advnaced Writable File - Checking for the File Existance & Mode } :
        
        $ha2 = "{Advanced [File] Deleteing : Deleting [Writable File] with checking of Existance & Mode} => by [unlink(full path, context)] as following : " . "<br>" ; 
        
        // // Checking for the existance of the file & Mode (writable) :
        //     if (file_exists($fileW)) {
        //             echo 'The file ' . basename($fileW) . " is Exitance";
        //         if (is_writable($fileW)) {
        //             echo 'The file ' . basename($fileW) . " is Writable , and can be deleted";
                    
        //             // Processing the simple deleting process method [for writable file] :
        //             unlink($fileW);

        //             echo "The file " . basename($fileW) . " has been deleted, please check for it in the directory " ; 
                
        //         } else {
        //             echo 'The file ' . basename($fileW) . " is Writable , and can be deleted";

        //             Processing the Changing the file permission/Mode [from Readonly to writable ] :
            //             chmod($fileW, 0755);
            //             echo "The file " . basename($fileW) . " The file permission has been changed to writable mode , and ready to be deleted... " ;                 
                    
        //             // Processing the simple deleting process method [for writable file] :
        //                 unlink($fileW);
        //                 echo "The file " . basename($fileW) . " has been deleted, please check for it in the directory " ; 
        //             }
        //         } else {                
        //         // Refusing deleting unexisted file  [for writable file] :
        //         echo 'The file ' . basename($fileW) . " is NOT Exitance, and can NOT be deleted!";
        //     }            
                        
            
        // echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------        
            
    // (*) => Third Example => File System - { unlink(full path, context } [Advanced Readonly File - Checking for the File Existance & Mode } :
        
        $ha3 = "{Advanced [File] Deleteing : Deleting [Readonly File] with checking of Existance & Mode} => by [unlink(full path, context)] as following : " . "<br>" ; 
        
        // // Checking for the existance of the file & Mode (writable) :
        //     if (file_exists($fileR)) {
        //             echo 'The file ' . basename($fileR) . " is Exitance";
        //         if (is_writable($fileR)) {
        //             echo 'The file ' . basename($fileR) . " is Writable , and can be deleted";
                    
        //             // Processing the simple deleting process method [for writable file] :
        //             unlink($fileR);
        //             echo "The file " . basename($fileR) . " has been deleted, please check for it in the directory " ; 
                
        //         } else {
        //             echo 'The file ' . basename($fileR) . " is Writable , and can be deleted";
                    
        //             Processing the Changing the file permission/Mode [from Readonly to writable ]
        //                  chmod($fileR, 0755);
        //                  echo "The file " . basename($fileR) . " The file permission has been changed to writable mode , and ready to be deleted... " ;                 
                    
        //             // Processing the simple deleting process method [for writable file] :
        //                 unlink($fileR);
        //                 echo "The file " . basename($fileR) . " has been deleted, please check for it in the directory " ; 
        //         }
        //     } else {                
        //         // Refusing deleting unexisted file  [for writable file] :
        //             echo 'The file ' . basename($fileR) . " is NOT Exitance, and can NOT be deleted!";
        //     }            
                                   
        // echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------        

    // (*) => Fourth Example => File System - { rmdir(Dir full path} [Simple Deleting => {Empty} folder/Directory } :
        
        $ha4 = "{Simple [Folder/Directory] Deleting : Deleting [Empty Folder/Directory] } => by [rmdir(full dir path)] as following : " . "<br>" ; 
        
        // // Processing the deleting of the Folder/Directory [with conditional if process testing ] :
            
        //     if (rmdir($dir)) {
                                
        //         // confirming the deleting process of the Folder/Directory  :
        //         echo 'The folder/Directory ' . basename($dir) . " has been deleted sucessfully!";
                
        //     } else {
                
        //         // confirming the Unabitliy of Deleting process of the Folder/Directory  :                
        //         echo 'The folder/Directory ' . basename($dir) . " has been Not deleted!";

        //     }
                      
        // echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------        
                    
    // (*) => Fifth Example => File System - { rmdir(Dir full path} [Advanced Deleting => {Empty} folder/Directory } :
        
        $ha5 = "{Advanced [Folder/Directory] Deleteing : Deleting [Empty Folder/Directory] } => by [rmdir(full dir path)] as following : " . "<br>" ; 
        
        // // Checking for the existance of the Folder/Directory :
        //     if (file_exists($dir)) {
          
        //         // Confirming of folder/Directory Existance : 
        //         echo 'The folder/Directory ' . basename($dir) . " is Exitance , and ready to be deleted...";
          
        //         // Processing the deletion of Existaned Folder/Directory  : 
        //         rmdir($dir);
                
        //         // Confirming of folder/Directory Deletion : 
        //         echo 'The folder/Directory ' . basename($dir) . " has been deleted sucessfully!";

        //     } else {                
          
        //         // Refusing deleting Unexisted Folder/Directory  :
        //         echo 'The file ' . basename($fileR) . " is NOT Exitance, and can NOT be deleted!";
        //     }                                    
            
        // echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------        

    // (*) => Sixth Example => File System - { rmdir(Dir full path} [Advanced Deleting => {Fill} folder/Directory } :
        
        $ha6 = "{Advanced [Folder/Directory] Deleteing : Deleting [Fill Folder/Directory] } => by [rmdir(full dir path)] as following : " . "<br>" ; 
        
        // // Checking for the existance of the Folder/Directory :
        //     if (file_exists($dir)) {
       
        //         // Confirming of folder/Directory Existance : 
        //         echo 'The folder/Directory ' . basename($dir) . " is Exitance , and ready to be deleted...";
        
        //         // Processing the deletion of Existaned Folder/Directory  : 
        //         rmdir($dir);
        
        //         // Confirming of folder/Directory Deletion : 
        //         echo 'The folder/Directory ' . basename($dir) . " has been deleted sucessfully!";

        //     } else {                
        //         // Refusing deleting Unexisted Folder/Dir  :
        //         echo 'The Folder ' . basename($dir) . " is NOT Exitance, and can NOT be deleted!";
        //     }                                    
            
        // echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
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
            
            <!-- (*) => First Example => File System - { unlink(full path, context } [default method - Simple deleting the file (writable) ]  : -->
                        
                    <header>
                        First Example => File System - { unlink(full path, context } [default method - Simple deleting the file (writable) ] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1 ?>  </h1>  
                            
                        <?php       
                            // Processing the simple deleting process method [for writable file] :
                                unlink($fileW);
                                
                                echo "The file " . basename($fileW) . " has been deleted, please check for it in the directory " ;                        
                                
                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
            <!-- (*) => Second Example => File System - { unlink(full path, context } [Advnaced Writable File - Checking for the File Existance & Mode } : -->
                        
                    <header>
                            (*) => Second Example => File System - { unlink(full path, context } [Advnaced Writable File - Checking for the File Existance & Mode }: <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha2 ?>  </h1>  
                            
                        <?php       
                            // Checking for the existance of the file & Mode (writable) :
                                if (file_exists($fileW)) {
                                    echo 'The file ' . basename($fileW) . " is Exitance";
                                if (is_writable($fileW)) {
                                    echo 'The file ' . basename($fileW) . " is Writable , and can be deleted";
                                    
                                    // Processing the simple deleting process method [for writable file] :
                                    unlink($fileW);
                                    echo "The file " . basename($fileW) . " has been deleted, please check for it in the directory " ; 
                                
                                } else {
                                    echo 'The file ' . basename($fileW) . " is Writable , and can be deleted";
                                    
                                    chmod($fileW, 0755);
                                    echo "The file " . basename($fileW) . " The file permission has been changed to writable mode , and ready to be deleted... " ;                 
                                    
                                    // Processing the simple deleting process method [for writable file] :
                                        unlink($fileW);
                                        echo "The file " . basename($fileW) . " has been deleted, please check for it in the directory " ; 
                                    }
                                } else {                
                                // Refusing deleting unexisted file  [for writable file] :
                                echo 'The file ' . basename($fileW) . " is NOT Exitance, and can NOT be deleted!";
                                }            
                                                                    
                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
            <!-- (*) => Third Example => File System - { unlink(full path, context } [Advanced Readonly File - Checking for the File Existance & Mode }  : -->
                        
                    <header>
                            (*) => Third Example => File System - { unlink(full path, context } [Advanced Readonly File - Checking for the File Existance & Mode }  : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha3 ?>  </h1>  
                            
                        <?php       
                            // Checking for the existance of the file & Mode (writable) :
                                if (file_exists($fileR)) {
                                    echo 'The file ' . basename($fileR) . " is Exitance";
                                if (is_writable($fileR)) {
                                    echo 'The file ' . basename($fileR) . " is Writable , and can be deleted";
                                    
                                    // Processing the simple deleting process method [for writable file] :
                                    unlink($fileR);
                                    echo "The file " . basename($fileR) . " has been deleted, please check for it in the directory " ; 
                                
                                } else {
                                    echo 'The file ' . basename($fileR) . " is Writable , and can be deleted";
                                    
                                    chmod($fileR, 0755);
                                    echo "The file " . basename($fileR) . " The file permission has been changed to writable mode , and ready to be deleted... " ;                 
                                    
                                    // Processing the simple deleting process method [for writable file] :
                                        unlink($fileR);
                                        echo "The file " . basename($fileR) . " has been deleted, please check for it in the directory " ; 
                                    }
                                } else {                
                                // Refusing deleting unexisted file  [for writable file] :
                                echo 'The file ' . basename($fileR) . " is NOT Exitance, and can NOT be deleted!";
                                }            
                                                        
                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
            <!-- (*) => Fourth Example => File System - { rmdir(Dir full path} [Simple Deleting => {Empty} folder/Directory }   : -->                                                     
                    <header>
                            (*) => Fourth Example => File System - {$arrayVar = pathinfo() } [Advanced method - Checking of path information - conditional if ]  : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha4 ?>  </h1>  
                            
                        <?php       
                            // Processing the deleting of the Folder/Directory [with conditional if process testing ] :
            
                                if (rmdir($dir)) {
                                                    
                                    // confirming the deleting process of the Folder/Directory  :
                                    echo 'The folder/Directory ' . basename($dir) . " has been deleted sucessfully!";
                                    
                                } else {
                                    
                                    // confirming the Unabitliy of Deleting process of the Folder/Directory  :                
                                    echo 'The folder/Directory ' . basename($dir) . " has been Not deleted!";

                                }
                                        
                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    

            <!-- (*) => Fifth Example => File System - { rmdir(Dir full path} [Advanced Deleting => {Empty} folder/Directory }  : --> 
                    <header>
                        (*) => Fifth Example => File System - { rmdir(Dir full path} [Advanced Deleting => {Empty} folder/Directory } : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha5 ?>  </h1>  
                            
                        <?php       
                            // Checking for the existance of the Folder/Directory :
                                if (file_exists($dir)) {
                            
                                    // Confirming of folder/Directory Existance : 
                                    echo 'The folder/Directory ' . basename($dir) . " is Exitance , and ready to be deleted...";
                            
                                    // Processing the deletion of Existaned Folder/Directory  : 
                                    rmdir($dir);
                                    
                                    // Confirming of folder/Directory Deletion : 
                                    echo 'The folder/Directory ' . basename($dir) . " has been deleted sucessfully!";

                                } else {                
                            
                                    // Refusing deleting Unexisted Folder/Directory  :
                                    echo 'The file ' . basename($dir) . " is NOT Exitance, and can NOT be deleted!";
                                }                                    
                                        
                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
            <!-- (*) => Sixth Example => File System - { rmdir(Dir full path} [Advanced Deleting => {Fill} folder/Directory }   : --> 
                    <header>
                        (*) => Sixth Example => File System - { rmdir(Dir full path} [Advanced Deleting => {Fill} folder/Directory } : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha6 ?>  </h1>  
                            
                        <?php       
                            // Checking for the existance of the Folder/Directory :
                                if (file_exists($dir)) {
                            
                                    // Confirming of folder/Directory Existance : 
                                    echo 'The folder/Directory ' . basename($dir) . " is Exitance , and ready to be deleted...";
                            
                                    // Processing the deletion of Existaned Folder/Directory  : 
                                    rmdir($dir);
                            
                                    // Confirming of folder/Directory Deletion : 
                                    echo 'The folder/Directory ' . basename($dir) . " has been deleted sucessfully!";

                                } else {                
                                    // Refusing deleting Unexisted Folder/Dir  :
                                    echo 'The Folder ' . basename($dir) . " is NOT Exitance, and can NOT be deleted!";
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