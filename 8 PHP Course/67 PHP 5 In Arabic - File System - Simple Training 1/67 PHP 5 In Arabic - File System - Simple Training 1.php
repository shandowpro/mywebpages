 <!--  67 PHP 5 In Arabic - File System - Simple Training 1  --> 
<?php

    $lessonName  ='File System - Simple Training 1 ';
    $title = '67 PHP5 - ' . $lessonName;
    $css = '67 PHP 5 In Arabic - File System - Simple Training 1.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    // ============================================================================

    // (*) Variable Definitions & Decleration :
        
        // String variable :          
              
            $name = "shadi";            
        
    // =================================================================================        
        // Training Steps :
            // 1- Checkning if there is a directory existed with the name desired [PHP] to create  a new one
            // 2- Creating new Directory in the current directory which php file is locatred in
            // 3- Assign the new directory to a variable
            // 4- Creating new file with extension PHP
            // 5- Assging the new created php file to a variable
            // 6- Changing the Permission mode of this file to [Readonly] Mode
            // 7- Checking if the new file is writable or not
            // 8- Change the mode of the file to writable mode (in case of the this file is Readonly)
            // 9- Putting contents inside the new file 
            
    // =================================================================================    
        // including files :
            // include __DIR__ . "/inc/text.php" ; 
            // include __DIR__ . "/../inc/text.php" ; 
            // include __DIR__ . "/../Other/inc/text.php" ; 
    // =================================================================================    

    // (*) => First Example (Overall Example) => File System - {File System - Simple Training 1} => :
    
        $ha1 = "The following File System -  {File System - Simple Training 1} , the steps as following : " . "<br>" . 
                "1- Checkning if there is a directory existed with the name desired [PHP] to create  a new one" . "<br>" .
                "2- Creating new Directory in the current directory which php file is located in" . "<br>" .
                "3- Assign the new directory to a variable" . "<br>" .
                "4- Creating new file with extension PHP" . "<br>" .
                "5- Assging the new created php file to a variable" . "<br>" .
                "6- Changing the Permission mode of this file to [Readonly] Mode" . "<br>" .
                "7- Checking if the new file is writable or not" . "<br>" .
                "8- Change the mode of the file to writable mode (in case of the this file is Readonly)" . "<br>" .
                "9- Putting contents inside the new file" . "<br>"; 
                "10- including the php file to the current php file" . "<br>"; 

        // // 1- Checkning if there is a directory existed with the name desired [PHP] to create  a new one :
        // if (file_exists(__DIR__ . '\PHP\\')) {
        //     echo "The Directory/Folder is already existed" . "<br>" ;
        // } else {

        //     // 2- Creating new Directory in the current directory which php file is located in :
        //     mkdir(__DIR__ . '\PHP\\');            
        // }
 
        // // 3- Assign the new directory [PHP] to a variable :
        // $dir = __DIR__ . '\PHP\\' ;
        // echo $dir . "<br>";


        // // 4- Creating new file with extension .php inside the [PHP] directory + Putting new contents inside the file :
        // file_put_contents($dir . "/text.php", "Hello" );
        

        // // 5- Assgning the new created php file to a variable [with full path]:
        // $file = $dir . "/text.php" ;
        

        // // 6- Changing the Permission mode of this file to => [Readonly] Mode:
        //  chmod($file , 0444);


        // //  7- Checking if the new file is writable or not :
        //  if (is_writable($file)) {
        //     file_put_contents($file, "Hello");
        //  } else {
        
        //     //  8- Change the mode of the file to => [writable mode] (in case of the this file is Readonly) :
        //     chmod($file, 0755);
        //  }

        // //  9- Putting contents inside the new PHP file , [after changing mode to writable mode] : 
        // file_put_contents($file,  "<?php echo 'Congratulations , the training has been Done'; ? >");
        
        
        // //  10- Including the new php file to the current php file  : 
        //  include  $file;


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
            
            <!-- (*) => First Example (Overall Example) => File System - {File System - Simple Training 1} : -->                             
                        
                        <header>
                             (*) => First Example (Overall Example) => File System - {File System - Simple Training 1} : <br> 
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha1 ?>  </h1>  
                                
                            <?php

                            // 1- Checkning if there is a directory existed with the name desired [PHP] to create  a new one :
                                if (file_exists(__DIR__ . '\PHP\\')) {
                                    echo "The Directory/Folder is already existed" . "<br>" ;
                                } else {

                                    // 2- Creating new Directory in the current directory which php file is located in :
                                    mkdir(__DIR__ . '\PHP\\');            
                                }
                        
                                // 3- Assign the new directory [PHP] to a variable :
                                $dir = __DIR__ . '\PHP\\' ;
                                echo $dir . "<br>";


                                // 4- Creating new file with extension .php inside the [PHP] directory + Putting new contents inside the file :
                                file_put_contents($dir . "/text.php", "Hello" );
                                

                                // 5- Assgning the new created php file to a variable [with full path]:
                                $file = $dir . "/text.php" ;
                                

                                // 6- Changing the Permission mode of this file to => [Readonly] Mode:
                                chmod($file , 0444);


                                //  7- Checking if the new file is writable or not :
                                if (is_writable($file)) {
                                    file_put_contents($file, "Hello");
                                } else {
                                
                                    //  8- Change the mode of the file to => [writable mode] (in case of the this file is Readonly) :
                                    chmod($file, 0755);
                                }

                                //  9- Putting contents inside the new PHP file , [after changing mode to writable mode] : 
                                file_put_contents($file,  "<?php echo 'Congratulations , the training has been Done'; ?>");
                                
                                
                                //  10- Including the new php file to the current php file  : 
                                include  $file;


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