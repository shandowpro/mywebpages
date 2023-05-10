 <!--  69 PHP 5 In Arabic - File System - File Get Contents  --> 
<?php

    $lessonName  ='File System - File Get Contents ';
    $title = '69 PHP5 - ' . $lessonName;
    $css = '69 PHP 5 In Arabic - File System - File Get Contents.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    // ============================================================================
    // (*) Variable Definitions & Decleration :                          
        $read = __DIR__ . "/read.txt";
        $write = __DIR__ . "/write.txt";

        $readH = __DIR__ . "/read.html";
        $writeH = __DIR__ . "/write.html";
        
        // if (file_exists($read) && file_exists($write)) {
        //     echo "The both files [" . dirname($read) . "] and [" . dirname($write) . "] is existed";     
        // } else {            
        //     echo "One of files is NOT existed!";     
        // }

    // =================================================================================        
                    
    // (*) => First Example => File System - {file_get_contents(File name full path, Include_Path(false), context(NULL), offset(default) , max_length(default))}  => [Default - obligatory] {Getting All contents from text file} :
    
        $ha1 = "Getting All contents from text file by method {file_get_contents(file name full path, Include_Path(false), context(NULL), offset(default) , max_length(default))}  => [Default - obligatory] as following : " . "<br>" ; 

        // // Getting contents to the default file [read.txt] inside the main directory [Default method] :
        //    echo file_get_contents($read, false , NULL , 0);
                
        //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------
    
    // (*) => Second Example => File System - {file_get_contents(file name full path, Include_Path(false), context(NULL), offset(#) , max_length(default)) }  => [Advanced - offset(#)] => {Getting partial contents from text file} :
    
        $ha2 = "The following File System -  {file_get_contents(file name full path, Include_Path(false), context(NULL), offset(#) , max_length(default)) }  => [Advanced - offset(#)] => {Getting partial contents from text file}  as following : " . "<br>" ; 
                            
        // // Getting contents to the default file [read.txt] inside the main directory [Advanced - offset(#)] => {Getting partial contents from text file}  :
        //    echo file_get_contents($read, false , NULL , 10);
                    
        //    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------                                                                                                       

    // (*) => Third Example => File System - {file_get_contents(file name full path, Include_Path(false), context(NULL), offset(#) , max_length(#))}  => [Advanced - offset(#) , Advanced - length(#) ] => {Getting partial contents from text file} :
    
        $ha3 = "The following File System -  {file_get_contents(file name full path, Include_Path(false), context(NULL), offset(#) , max_length(#))}  => [Advanced - offset(#)] && [Advanced - length(#)] => {Getting partial contents from text file}  as following : " . "<br>" ; 
                            
        // // Getting contents to the default file [read.txt] inside the main directory  [Advanced - offset(#)] [Advanced - length(#)] => {Getting partial contents from text file}  :
        //     echo file_get_contents($read, false , NULL , 10, 20);
                
        //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------
    
    // (*) => Fourth Example => File System - {file_get_contents(file name full path, Include_Path(false), context(NULL), offset(#) , max_length(#))}  => [Advanced - offset(#) , Advanced - length(#) ] => {Getting full contents from text file} && {Putting the get contents inside another text file} :
    
        $ha4 = "The following File System -  {file_get_contents(file name full path, Include_Path(false), context(NULL), offset(#) , max_length(#))}  => [Advanced - offset(#)] && [Advanced - length(#)] => {Getting full contents from text file} && {Putting the get contents inside another text file} as following : " . "<br>" ; 
    
        // // Assign [Full]contents to the default file [read.txt] into a variable  :
        
        //     $contentFull = file_get_contents($read, false , NULL , 10, 20);
        
        // // Printing [Full]contents from default file [read.txt] on the webpage  :
        //     echo $contentFull;
        
        // //  Writing/putting the get [Full]contents inside the  [write.txt] inside the same main directory  :
        //     file_put_contents($write, $contentFull);

        //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------                                                                                                  

    // (*) => Fifth Example => File System - {file_get_contents(file name full path, Include_Path(false), context(NULL), offset(#) , max_length(#))}  => [Advanced - offset(#) , Advanced - length(#) ] => {Getting partial contents from text file} && {Putting the get contents inside another text file} :
    
        $ha5 = "The following File System -  {file_get_contents(file name full path, Include_Path(false), context(NULL), offset(#) , max_length(#))}  => [Advanced - offset(#)] && [Advanced - length(#)] => {Getting partial contents from text file} && {Putting the get contents inside another text file} as following : " . "<br>" ; 
    
        // // Assing [Partial]contents to the default file [read.txt] into a variable  :
        
        //     $contentPar = file_get_contents($read, false , NULL , 10, 20);
        
        // // Printing [Full]contents from default file [read.txt] on the webpage :
        //     echo $contentPar;
        
        // // Writing/putting the get [partial]contents inside the  [write.txt] inside the same main directory :
        //     file_put_contents($write, $contentPar);

        //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------                                                                                                  
    
    // (*) => Sixth Example => File System - {file_get_contents(file name full path, Include_Path(false), context(NULL), offset(#) , max_length(#))}  => [Advanced - offset(#) , Advanced - length(#) ] => {Getting Full contents from html file} && {Putting the get contents inside another text file} :
    
        $ha6 = "The following File System -  {file_get_contents(file name full path, Include_Path(false), context(NULL), offset(#) , max_length(#))}  => [Advanced - offset(#)] && [Advanced - length(#)] => {Getting full contents from html file} && {Putting the get contents inside another text file} as following : " . "<br>" ; 
    
        // // Assign contents FROM the default file [read.html] into a variable  :

        //     $contentHTML = file_get_contents($readH, false , NULL , 0);
           
        // // Printing [Full]contents from default file [read.html] on the webpage :
        //     echo $contentHTML;
            
        // // Writing/putting the get [Full]contents inside the [write.html] inside the same main directory :
        //     file_put_contents($writeH, $contentHTML);

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
            
            <!-- (*) => First Example => File System - {file_get_contents(File name full path, Include_Path(false), context(NULL), offset(default) , max_length(default))}  => [Default - obligatory] {Getting All contents from text file} : -->
                        
                    <header>
                    First Example => File System - {file_get_contents(File name full path, Include_Path(false), context(NULL), offset(default) , max_length(default))}  => [Default - obligatory] {Getting All contents from text file} : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1 ?>  </h1>  
                            
                        <?php       

                        // Getting contents to the default file [read.txt] inside the main directory [Default method] :
                            echo file_get_contents($read, false , NULL , 0);
                                    
                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;                                                
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
            <!-- (*) => Second Example => File System - {file_get_contents(file name full path, Include_Path(false), context(NULL), offset(#) , max_length(default)) }  => [Advanced - offset(#)] => {Getting partial contents from text file} : -->                             
                        
                    <header>
                            (*) => Second Example => File System - {file_get_contents(file name full path, Include_Path(false), context(NULL), offset(#) , max_length(default)) }  => [Advanced - offset(#)] => {Getting partial contents from text file} : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha2 ?>  </h1>  
                            
                        <?php       
                            // Getting contents to the default file [read.txt] inside the main directory [Advanced - offset(#)] => {Getting partial contents from text file}  :
                                echo file_get_contents($read, false , NULL , 10);
                                            
                                echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
            <!-- (*) => Third Example => File System - {file_get_contents(file name full path, Include_Path(false), context(NULL), offset(#) , max_length(#))}  => [Advanced - offset(#) , Advanced - length(#) ] => {Getting partial contents from text file} : -->
                        
                    <header>
                            (*) => Third Example => File System - {file_get_contents(file name full path, Include_Path(false), context(NULL), offset(#) , max_length(#))}  => [Advanced - offset(#) , Advanced - length(#) ] => {Getting partial contents from text file} : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha3 ?>  </h1>  
                            
                        <?php       
                            // Getting contents to the default file [read.txt] inside the main directory  [Advanced - offset(#)] [Advanced - length(#)] => {Getting partial contents from text file}  :
                                echo file_get_contents($read, false , NULL , 10, 20);
                                    
                                echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
            <!-- (*) => Fourth Example => File System - {file_get_contents(file name full path, Include_Path(false), context(NULL), offset(#) , max_length(#))}  => [Advanced - offset(#) , Advanced - length(#) ] => {Getting full contents from text file} && {Putting the get contents inside another text file}  : -->                                                     
                    <header>
                            (*) => Fourth Example => File System - {file_get_contents(file name full path, Include_Path(false), context(NULL), offset(#) , max_length(#))}  => [Advanced - offset(#) , Advanced - length(#) ] => {Getting full contents from text file} && {Putting the get contents inside another text file} : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha4 ?>  </h1>  
                            
                        <?php       
                                // Getting [Full]contents to the default file [read.txt] inside the main directory  [Advanced - offset(#)] [Advanced - length(#)] & Putting it inside another text file => {Getting partial contents from text file} && {Putting the get [Full] contents inside another text file}  :
        
                                    $contentFull = file_get_contents($read, false , NULL , 10, 20);
                                
                                // Printing [Full]contents from default file [read.txt] on the webpage   :
                                    echo $contentFull;
                                
                                //  Writing/putting the get [Full]contents inside the  [write.txt] inside the same main directory  :
                                    file_put_contents($write, $contentFull);


                                echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
            <!-- (*) => Fifth Example => File System - {file_get_contents(file name full path, Include_Path(false), context(NULL), offset(#) , max_length(#))}  => [Advanced - offset(#) , Advanced - length(#) ] => {Getting partial contents from text file} && {Putting the get contents inside another text file}: -->                             
                        
                    <header>
                            (*) => Fifth Example => File System - {file_get_contents(file name full path, Include_Path(false), context(NULL), offset(#) , max_length(#))}  => [Advanced - offset(#) , Advanced - length(#) ] => {Getting partial contents from text file} && {Putting the get contents inside another text file} : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha5 ?>  </h1>  
                            
                        <?php       

                        // Getting [Partial]contents to the default file [read.txt] inside the main directory  [Advanced - offset(#)] [Advanced - length(#)] & Putting it inside another text file => {Getting partial contents from text file} && {Putting the get [Partial] contents inside another text file}  :
        
                            $contentPar = file_get_contents($read, false , NULL , 10, 20);
                        
                        // Printing [Full]contents from default file [read.txt] on the webpage :
                            echo $contentPar;
                        
                        // Writing/putting the get [partial]contents inside the  [write.txt] inside the same main directory    :
                            file_put_contents($write, $contentPar);

                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
            <!-- (*) => Sixth Example => File System - {file_get_contents(file name full path, Include_Path(false), context(NULL), offset(#) , max_length(#))}  => [Advanced - offset(#) , Advanced - length(#) ] => {Getting Full contents from html file} && {Putting the get contents inside another text file} : -->                             
                        
                    <header>
                        (*) => Sixth Example => File System - {file_get_contents(file name full path, Include_Path(false), context(NULL), offset(#) , max_length(#))}  => [Advanced - offset(#) , Advanced - length(#) ] => {Getting Full contents from html file} && {Putting the get contents inside another text file} : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha6 ?>  </h1>  
                            
                        <?php       

                            // Getting contents FROM the default file [read.html] in the main directory and put it in a html file[write.html] in the same directory  [Advanced - offset(#)] [Advanced - length(#)] => {Getting Full contents from html file} && {Putting the get [Full] contents inside a html file}  :

                                $contentHTML = file_get_contents($readH, false , NULL , 0);
                                
                            // Printing [Full]contents from default file [read.html] on the webpage :
                                echo $contentHTML;
                                
                            // Writing/putting the get [Full]contents inside the [write.html] inside the same main directory    :
                                file_put_contents($writeH, $contentHTML);

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