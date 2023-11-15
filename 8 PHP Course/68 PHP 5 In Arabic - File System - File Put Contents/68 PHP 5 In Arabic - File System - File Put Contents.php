 <!--  68 PHP 5 In Arabic - File System - File Put Contents  --> 
<?php

    $lessonName  ='File System - File Put Contents ';
    $title = '68 PHP5 - ' . $lessonName;
    $css = '68 PHP 5 In Arabic - File System - File Put Contents.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    // ============================================================================
    // (*) Variable Definitions & Decleration :                          
        $file = __DIR__ . "/text.txt";
        if (file_exists($file)) {
            echo "The file is existed";     
        } else {            
            echo "The file is NOT existed!";     
        }

    // =================================================================================        
                    
    // (*) => First Example => File System - {file_put_contents(File full path, contents)}  => [Default - obligatory] :
    
        $ha1 = "The following File System -  {file_put_contents(File full path, contents)}  => [Default - obligatory] as following : " . "<br>" ; 

        // Adding new contents to the default file [text.txt] inside the main directory [Default method] :
            file_put_contents($file, "This content from the default function [file_put_contents(file name full path, contents)] : Default obligatory" . "<br>" );
                
            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------
    
    // (*) => Second Example => File System - {file_put_contents(File full path, contents)}  => [Default - obligatory] => {Replacing the old with new contents} :
    
        $ha2 = "The following File System -  {file_put_contents(File full path, contents)}  => [Default - obligatory]  => {Replacing the old with new contents} as following : " . "<br>" ; 
                            
        // Adding new contents to the default file [text.txt] inside the main directory [Default method] {Repalcing the old contents} :
            file_put_contents($file, "This content from the default function [file_put_contents(file name full path, contents)] : Default obligatory {Replacing the old with new contents}" . "<br>" );
                    
            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------                                                                                                       

    // (*) => Third Example => File System - {file_put_contents(File full path, contents , FILE_APPEND)}  => [Advanced - Optional(mode:FILE_APPEND)] => {Appending/Adding the new contents after the old one} :
    
        $ha3 = "The following File System - {file_put_contents(File full path, FILE_APPEND)}  => [Advanced - Optional(mode:FILE_APPEND)] => {Appending/Adding the new contents after the old one} as following : " . "<br>" ; 
                            
        // Adding/Appending new contents to the default file [text.txt] inside the main directory [Advanced method] {Appending/Adding the new contents after the old one} :
            file_put_contents($file, "This content from the default function [file_put_contents(file name full path, contents, FILE_APPEND)] : Advanaced obligatory {Appending/Adding the new contents after the old one}" . "<br>" , FILE_APPEND);
                        
            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------
    
    // (*) => Fourth Example => File System - {file_put_contents(File full path, contents , LOCK_EX)}  => [Advanced - Optional(mode:LOCK_EX)] => {Lock other execlusives to edit to the same file } :
    
        $ha4 = "The following File System - {file_put_contents(File full path,  LOCK_EX)}  => [Advanced - Optional(mode:LOCK_EX)] => {Lock other execlusives to edit to the same file} as following : " . "<br>" ; 
                            
        // Adding/Replacing new contents to the default file [text.txt] inside the main directory [Advanced method] {Adding/Replacing the old contents + Lock other execlusives to edit to the same file} :
            file_put_contents($file, "This new content from the advanced function [file_put_contents(file name full path, contents , LOCK_EX)] {Adding new contents and replacing the old one + preventing other to edit }" . "<br>" , LOCK_EX );
                
            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------                                                                                                  
    
    // (*) => Fifth Example => File System - {file_put_contents(File full path, contents , FILE_APPEND | LOCK_EX )}  => [Advanced - Optional(mode:FILE_APPEND && LOCK_EX)] => {Using (2) modes to the same file } :
    
        $ha5 = "The following File System - {file_put_contents(File full path, FILE_APPEND | LOCK_EX)}  => [Advanced - Optional(mode: FILE_APPEND && LOCK_EX)] => {Using (2) modes to the same file } as following : " . "<br>" ; 
                            
        // Adding/Appending new contents to the default file [text.txt] inside the main directory [Advanced method] {Appending/Adding the new contents after the old one && Preventing other to edit } : 
            file_put_contents($file, "This new content from the advanced function  [file_put_contents(file name full path, contents , FILE_APPEND | LOCK_EX)]" . "<br>" , FILE_APPEND | LOCK_EX );
                
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
            
            <!-- (*) => First Example => File System - {file_put_contents(File full path, contents)}  => [Default - obligatory] : -->
                        
                    <header>
                            First Example => File System - {file_put_contents(File full path, contents)}  => [Default - obligatory]  : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1 ?>  </h1>  
                            
                        <?php       
                            // Adding new contents to the default file [text.txt] inside the main directory [Default method] :
                                file_put_contents($file, "This content from the default function [file_put_contents(file name full path, contents)] : Default obligatory" . "<br>" );
                                    
                                echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
            <!-- (*) => Second Example => File System - {file_put_contents(File full path, contents)}  => [Default - obligatory] => {Replacing the old with new contents} : -->                             
                        
                    <header>
                            (*) => Second Example => File System - {file_put_contents(File full path, contents)}  => [Default - obligatory] => {Replacing the old with new contents}  : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha2 ?>  </h1>  
                            
                        <?php       
                            // Adding new contents to the default file [text.txt] inside the main directory [Default method] {Repalcing the old contents} :
                                file_put_contents($file, "This content from the default function [file_put_contents(file name full path, contents)] : Default obligatory {Replacing the old with new contents}" . "<br>" );
                                        
                                echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
            <!-- (*) => Third Example => File System - {file_put_contents(File full path, contents , FILE_APPEND)}  => [Advanced - Optional(mode:FILE_APPEND)] => {Appending/Adding the new contents after the old one} : -->                             
                        
                    <header>
                            (*) => Third Example => File System - {file_put_contents(File full path, contents , FILE_APPEND)}  => [Advanced - Optional(mode:FILE_APPEND)] => {Appending/Adding the new contents after the old one} : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha3 ?>  </h1>  
                            
                        <?php       
                            // Adding/appending new contents to the default file [text.txt] inside the main directory [Advanced method] {Appending/Adding the new contents after the old one} :
                                file_put_contents($file, "This content from the default function [file_put_contents(file name full path, contents, FILE_APPEND)] : Advanaced obligatory {Appending/Adding the new contents after the old one}" . "<br>" , FILE_APPEND);
                                            
                                echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
            <!-- (*) => Fourth Example => File System - {file_put_contents(File full path, contents , LOCK_EX)}  => [Advanced - Optional(mode:LOCK_EX)] => {Lock other execlusives to edit to the same file }  : -->                             
                        
                    <header>
                            (*) => Fourth Example => File System - {file_put_contents(File full path, contents , LOCK_EX)}  => [Advanced - Optional(mode:LOCK_EX)] => {Lock other execlusives to edit to the same file }  : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha4 ?>  </h1>  
                            
                        <?php       
                            // Adding/replacing new contents to the default file [text.txt] inside the main directory [Advanced method] {Adding/Replacing the old contents} :
                                file_put_contents($file, "This new content from the advanced function [file_put_contents(file name full path, contents , LOCK_EX)] {Adding new contents and replacing the old one + preventing other to edit }" . "<br>" , LOCK_EX );
                                    
                                echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
            <!-- (*) => Fifth Example => File System - {file_put_contents(File full path, contents , FILE_APPEND | LOCK_EX )}  => [Advanced - Optional(mode:FILE_APPEND && LOCK_EX)] => {Using (2) modes to the same file } : -->                             
                        
                    <header>
                            (*) => Fifth Example => File System - {file_put_contents(File full path, contents , FILE_APPEND | LOCK_EX )}  => [Advanced - Optional(mode:FILE_APPEND && LOCK_EX)] => {Using (2) modes to the same file } : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha5 ?>  </h1>  
                            
                        <?php       
                            // Adding/Appending new contents to the default file [text.txt] inside the main directory [Advanced method] {Appending/Adding the new contents after the old one && Preventing other to edit} : 
                                file_put_contents($file, "This new content from the advanced function [file_put_contents(file name full path, contents , FILE_APPEND | LOCK_EX)]" . "<br>" , FILE_APPEND | LOCK_EX );
                                    
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