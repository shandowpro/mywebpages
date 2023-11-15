 <!--  70 PHP 5 In Arabic - File System - Rename, Copy --> 
<?php

    $lessonName  ='File System - Rename, Copy ';
    $title = '70 PHP5 - ' . $lessonName;
    $css = '70 PHP 5 In Arabic - File System - Rename, Copy.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    // ============================================================================
    // (*) Variable Definitions & Decleration :                          
        $fileC = __DIR__ . "/org1.txt"; 
        
        $fileR = __DIR__ . "/org2.txt";

        $backup = __DIR__ . "/backup.txt";

    // =================================================================================        
                    
    // (*) => First Example => File System - { Copy(Original File name full path, Copy name file name } [Simple copy to current same directory] :
    
        $ha1 = "Copying the file to the {same current directory} [Simple Copy] as following : " . "<br>" ; 

        // Processing the copy [Simple syntax] :
            copy($fileC, __DIR__ . "newCopy.txt");
                
            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------        
        
    // (*) => Second Example => File System - { copy(Original File name full path, Copy name file name } [Copy with if checking to current same directory ] :
    
        $ha2 = "Copying the file to the {same current directory} [Copy with if checking ]  as following : " . "<br>" ; 

        // Processing the copy [With if checking syntax] :
            if (!copy($fileC, __DIR__ . "newCopy1.txt")) {
                echo "The copy has NOT been processed ";
            } else  {                
                echo "The copy has been processed Successfuly";
            }
                
            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------        
    
    // (*) => Third Example => File System - { copy(Original File name full path, Copy file name Full Path } [Copy with if checking to Different directory ] :
    
        $ha3 = "Copying the file to the {Different Directory} as following : " . "<br>" ; 

        // Processing the copy [With defferent Directory] :
            copy($fileC, __DIR__ . "/PHP/newCopy1.txt");
                                        
            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------        

    // (*) => Fourth Example => File System - { Rename(Original File name full path, file with new name Full Path } [Renaming with keeping it's Current directory ] :
    
        $ha4 = "Renaming the file [with keeping it's Current directory ]  as following : " . "<br>" ; 

        // Processing the Renaming [With Current same Directory] :
            rename($fileR, __DIR__ . "newName.txt");                        
                
            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------        

    // (*) => Fifth Example => File System - { Rename(Original File name full path, Copy file with new name Full Path } [Renaming and changing the Current directory [Rename && Move] ] :
    
        $ha5 = "Renaming the file [Renaming and changing the Current directory [Rename && Move]  as following : " . "<br>" ; 

        // Processing the [Rename && Move]  :
            rename($fileR, __DIR__ . "/PHP/newNamePath.txt");
                
            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------        
        
    // (*) => Sixth Example => File System - { Copying(Original File name full path, Copy file name Full Path } [Backup of the current file with certian directory by {Function}] :
    
        $ha6 = " Backing up the current php file with certian directory by {Function}] by {Copy(Original File name full path, Copy file name Full Path[the same directory || defferent directory] } as following : " . "<br>" ; 

        // Declaring the Backing up [in the same path function]  :
            function backupSame($extension) {                
                $org = __FILE__;                
                copy($org, $org . "." . $extension);
            }
        
        // Declaring the Backing up [in a defferent path [PHP] Directory function] :
            function backupDef($extension) {                
                $org = __FILE__;
                
                $backupFilePath = __DIR__ . "/PHP/backupPHP";
                
                return copy($org, $backupFilePath . "." . $extension);
            }
        
        
        // Calling the funciton [function1 with customized extension parameter] :
            backupSame('.bak');            
        
        // Calling the funciton [function2 with customized extension parameter] :
            backupDef('.bak');            
        
        // Printing the backup confirmation messages [both funcions]:
            echo "The has file has been backed up succeesfuly in the current directory!" ;
            echo "The has file has been backed up succeesfuly in the PHP directory!" ;            
                
            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
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
            
            <!-- (*) =>First Example => File System - { Copy(Original File name full path, Copy name file name } [Simple copy to current same directory]: -->
                        
                    <header>
                        First Example => File System - { Copy(Original File name full path, Copy name file name } [Simple copy to current same directory]: <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1 ?>  </h1>  
                            
                        <?php       

                            // Processing the copy [Simple syntax] :
                                copy($fileC, __DIR__ . "newCopy.txt");
                                    
                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;                                                
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
            <!-- (*) => Second Example => File System - { Copy(Original File name full path, Copy name file name } [Copy with if checking to current same directory ]  : -->                             
                        
                    <header>
                            (*) => Second Example => File System - { copy(Original File name full path, Copy name file name } [Copy with if checking to current same directory ]  : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha2 ?>  </h1>  
                            
                        <?php       
                            // Processing the copy [With if checking syntax] :
                                if (!copy($fileC, __DIR__ . "newCopy1.txt")) {
                                    echo "The copy has NOT been processed ";
                                } else  {                
                                    echo "The copy has been processed Successfuly";
                                }
                                                                                                    
                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
            <!-- (*) => Third Example => File System - { copy(Original File name full path, Copy file name Full Path } [Copy with if checking to Different directory ] : -->
                        
                    <header>
                            (*) => Third Example => File System - { copy(Original File name full path, Copy file name Full Path } [Copy with if checking to Different directory ] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha3 ?>  </h1>  
                            
                        <?php       
                            // Processing the copy [With defferent Directory] :
                                copy($fileC, __DIR__ . "/PHP/newCopy1.txt");
                                    
                                echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
            <!-- (*) => Fourth Example => File System - { Rename(Original File name full path, file with new name Full Path } [Renaming with keeping it's Current directory ]  : -->                                                     
                    <header>
                            (*) => Fourth Example => File System - { Rename(Original File name full path, file with new name Full Path } [Renaming with keeping it's Current directory ] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha4 ?>  </h1>  
                            
                        <?php       
                            // Processing the Renaming [With Current same Directory] :
                                rename($fileR, __DIR__ . "newName.txt");                        

                                echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
            <!-- (*) => Fifth Example => File System - { Rename(Original File name full path, Copy file with new name Full Path } [Renaming and changing the Current directory [Rename && Move] ] : -->                             
                        
                    <header>
                            (*) => Fifth Example => File System - { Rename(Original File name full path, Copy file with new name Full Path } [Renaming and changing the Current directory [Rename && Move] ] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha5 ?>  </h1>  
                            
                        <?php       
                            // Processing the [Rename && Move]  :
                                rename($fileR, __DIR__ . "/PHP/newNamePath.txt");
                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
            <!-- (*) => Sixth Example => File System - { Copying(Original File name full path, Copy file name Full Path } [Backup of the current file with certian directory by {Function}] : -->
                        
                    <header>
                        (*) => Sixth Example => File System - { Copying(Original File name full path, Copy file name Full Path } [Backup of the current file with certian directory by {Function}] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha6 ?>  </h1>  
                            
                        <?php                   
        
                            // Calling the declared funciton [function1 with customized extension parameter] :
                                backupSame('.bak');            
                            
                            // Calling the declared funciton [function2 with customized extension parameter] :
                                backupDef('.bak');            
                            
                            // Printing the backup confirmation messages of the both functions :
                                echo "The has file has been backed up succeesfuly in the current directory!" ;
                                echo "The has file has been backed up succeesfuly in the PHP directory!" ;            

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