 <!--  73 PHP 5 In Arabic - File System - Scandir--> 
<?php

    $lessonName  ='File System - Scandir ';
    $title = '73 PHP5 - ' . $lessonName;
    $css = '73 PHP 5 In Arabic - File System - Scandir.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    // ============================================================================
    // (*) Variable Definitions & Decleration :                          
            $link  = __DIR__ . "/PHP";
    // =================================================================================        
                    
    // (*) => First Example => File System - { scandir(Directory full path, sort type , context } => [default method - Simple method ] :
        
        $ha1 = "File System - { scandir(Directory full path, sort type , context } => [default method - Simple method ] as following : " . "<br>" ; 
        
        // // Declaring the array will hold all inner files inside the Directory/Folder :        
        //     $files1 = scandir($link);
                
        // // Printing the array of inner files :
        //     echo "The inner files of directory ". $link . " [with default sorting] are as following " . "<br>";  
            
        //     echo "<pre>"; 
        //     print_r($files1);
        //     echo "</pre>";     
            
        // echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------        
    
    // (*) => Second Example => File System - { scandir(Directory full path, sort type , context } => [Advanced method : sort-none - Simple method ] :
        
        $ha2 = "File System - { scandir(Directory full path, sort type , context } => [Advanced method : sort-none - Simple method ] as following : " . "<br>" ; 
        
        // // Declaring the array will hold all inner files inside the Directory/Folder [with customized sorting : none ]:
        //     $files2 = scandir($link , SCANDIR_SORT_NONE);
                
        // // Printing the array of inner files :
        //     echo "The inner files of directory ". $link . " [with Advanced Sorting : NONE] are as following " . "<br>";  
            
        //     echo "<pre>"; 
        //     print_r($files2);
        //     echo "</pre>";     
            
        // echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------        
        
    // (*) => Third Example => File System - { scandir(Directory full path, sort type , context } => [Advanced method : sort-descending - Simple method ] :
        
        $ha3 = "File System - { scandir(Directory full path, sort type , context } => [Advanced method : sort-descending - Simple method ] as following : " . "<br>" ; 
        
        // // Declaring the array will hold all inner files inside the Directory/Folder [with customized sorting : none ]:
        //     $files3 = scandir($link , SCANDIR_SORT_DESCENDING);
                
        // // Printing the array of inner files :
        //     echo "The inner files of directory ". $link . " [with Advanced Sorting : DESCENDING] are as following " . "<br>";  
            
        //     echo "<pre>"; 
        //     print_r($files3);
        //     echo "</pre>";     
            
        // echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------        
        
    // (*) => Fourth Example => File System - { scandir(Directory full path, sort type , context } => [Advanced method : sort-descending - Combined method {scaning + deleting all files} ] :
        
        $ha4 = "File System - { scandir(Directory full path, sort type , context } => [Advanced method : sort-descending - Combined method {scaning + deleting all files} ] as following : " . "<br>" ; 
        
        // // Declaring the array will hold all inner files inside the Directory/Folder [with customized sorting : none ] :
        //     $files4 = scandir($link , SCANDIR_SORT_NONE);
                
        // // Printing the array of inner files :
        //     echo "The inner files of directory ". $link . " [with Advanced Sorting : NONE] are as following " . "<br>";  
            
        //     echo "<pre>"; 
        //     print_r($files4);
        //     echo "</pre>";     
        

        // // Looping and Checking for the inner [files] inside the directoy/folder to delete it :
            // foreach($files4 as $file) {
            //     if (is_file($link . "/" . $file)) {
            //         if (is_writable($link . "/" . $file)) {
                        
            //             echo 'The inner file ' . $link . "/" . $file . ' is writable and will be deleted!' . '<br>' ;
            //             unlink($link . "/" . $file);

            //         } else {                                            
            //             echo 'The inner file ' . $link . "/" . $file . ' is not writable and the mode will be changed mode first !' . '<br>' ;
            //             chmod($link . "/" . $file, 755);

            //             echo 'The inner file ' . $link . "/" . $file . ' is now writable mode and will ready to be deleted' . '<br>' ;
            //             unlink($link . "/" . $file);

            //             echo 'The inner file ' . $link . "/" . $file . ' has been deleted successfully !' . '<br>' ;

            //         }
            //     }
            // }
        
        
        // // Looping and Checking for the inner [folders] inside the directoy/folder to delete it :
            // foreach($files4 as $folder) {
            //     if (is_dir($link . "/" . $folder)) {

            //         $file41 = scandir($link . "/" . $folder);

            //         echo 'The array of inner foleder as following : ' . '<br>';
            //         echo '<pre>';
            //         print_r($file41);
            //         echo '</pre>';

            //         foreach($file41 as $file) {
            //             if (is_file($file41 . "/" . $file)) { 

            //                 echo 'The inner file ' . $file41 . "/" . $file . ' is will be deleted!' . '<br>' ;
            //                 unlink($file41 . "/" . $file); 
            //             }

            //         }

            //         echo 'The inner folder [' . $folder . '] ready to be deleted!' . '<br>' ;
                    
            //         rmdir($link . "/" . $folder);
                    
            //         echo 'The inner folder [' . $link . "/" . $folder . '] will be deleted!' . '<br>' ;
            //     }
            // }

                        
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
            
            <!-- (*) => First Example => File System - { scandir(Directory full path, sort type , context } => [default method - Simple method ]   : -->
                        
                    <header>
                       First Example => File System - { scandir(Directory full path, sort type , context } => [default method - Simple method ]: <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1 ?>  </h1>  
                            
                        <?php       
                            // Declaring the array will hold all inner files inside the Directory/Folder :        
                                $files1 = scandir($link);
                                    
                            // Printing the array of inner files :
                                echo "The inner files of directory ". $link . " [with default sorting] are as following " . "<br>";  
                                
                                echo "<pre>"; 
                                print_r($files1);
                                echo "</pre>";     
                                
                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
            <!-- (*) => Second Example => File System - { scandir(Directory full path, sort type , context } => [Advanced method : sort-none - Simple method ] : -->
                        
                    <header>
                            (*) => Second Example => File System - { scandir(Directory full path, sort type , context } => [Advanced method : sort-none - Simple method ]: <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha2 ?>  </h1>  
                            
                        <?php       
                            // Declaring the array will hold all inner files inside the Directory/Folder [with customized sorting : none ]:
                                $files2 = scandir($link , SCANDIR_SORT_NONE);
                                        
                            // Printing the array of inner files :
                                echo "The inner files of directory ". $link . " [with Advanced Sorting : NONE] are as following " . "<br>";  
                                
                                echo "<pre>"; 
                                print_r($files2);
                                echo "</pre>";     
                                
                                                                    
                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
            <!-- (*) => Third Example => File System - { scandir(Directory full path, sort type , context } => [Advanced method : sort-descending - Simple method ] : -->
                        
                    <header>
                         Third Example => File System - { scandir(Directory full path, sort type , context } => [Advanced method : sort-descending - Simple method ] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha3 ?>  </h1>  
                            
                        <?php       
                            // Declaring the array will hold all inner files inside the Directory/Folder [with customized sorting : none ]:
                                $files3 = scandir($link , SCANDIR_SORT_DESCENDING);
                                    
                        // Printing the array of inner files :
                            echo "The inner files of directory ". $link . " [with Advanced Sorting : DESCENDING] are as following " . "<br>";  
                            
                            echo "<pre>"; 
                            print_r($files3);
                            echo "</pre>";     
                                                        
                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
            <!-- (*) => Fourth Example => File System - { scandir(Directory full path, sort type , context } => [Advanced method : sort-descending - Combined method {scaning + deleting all files} ]  : -->
                    <header>
                            Fourth Example => File System - { scandir(Directory full path, sort type , context } => [Advanced method : sort-descending - Combined method {scaning + deleting all files} ] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha4 ?>  </h1>  
                            
                        <?php       
                            // Declaring the array will hold all inner files inside the Directory/Folder [with customized sorting : none ]:
                                $files4 = scandir($link , SCANDIR_SORT_NONE);
                                
                            // Printing the array of inner files :
                                echo "The inner files of directory ". $link . " [with Advanced Sorting : NONE] are as following " . "<br>";  
                                
                                echo "<pre>"; 
                                print_r($files4);
                                echo "</pre>";     
                                echo "<br>" . "<hr>" ;

                            
                    
                            // Looping and Checking for the inner [files] inside the directoy/folder to delete it :
                                foreach($files4 as $file) {
                                    if (is_file($link . "/" . $file)) {
                                        if (is_writable($link . "/" . $file)) {
                                            
                                            echo 'The inner file ' . $link . "/" . $file . ' is writable and will be deleted!' . '<br>' ;
                                            unlink($link . "/" . $file);

                                        } else {                                            
                                            echo 'The inner file ' . $link . "/" . $file . ' is not writable and the mode will be changed mode first !' . '<br>' ;
                                            chmod($link . "/" . $file, 755);

                                            echo 'The inner file ' . $link . "/" . $file . ' is now writable mode and will ready to be deleted' . '<br>' ;
                                            unlink($link . "/" . $file);

                                            echo 'The inner file ' . $link . "/" . $file . ' has been deleted successfully !' . '<br>' ;

                                        }
                                    }
                                }
                            
                    
                            // Looping and Checking for the inner [folders] inside the directoy/folder to delete it :
                                foreach($files4 as $folder) {
                                    if (is_dir($link . "/" . $folder)) {

                                        $file41 = scandir($link . "/" . $folder);

                                        echo 'The array of inner foleder as following : ' . '<br>';
                                        echo '<pre>';
                                        print_r($file41);
                                        echo '</pre>';

                                        foreach($file41 as $file) {
                                            if (is_file($file41 . "/" . $file)) { 

                                                echo 'The inner file ' . $file41 . "/" . $file . ' is will be deleted!' . '<br>' ;
                                                unlink($file41 . "/" . $file); 
                                            }

                                        }
           
                                        echo 'The inner folder [' . $folder . '] ready to be deleted!' . '<br>' ;
                                        
                                        rmdir($link . "/" . $folder);
                                        
                                        echo 'The inner folder [' . $link . "/" . $folder . '] will be deleted!' . '<br>' ;
                                    }
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
