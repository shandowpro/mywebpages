<!--  80 PHP 5 In Arabic - Predefined Variables - Server --> 
<?php

    $lessonName  ='Predefiend Variables - Server ';
    $title = '80 PHP5 - ' . $lessonName;
    $css = '80 PHP 5 In Arabic - Predefined Variables - Server.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    // ============================================================================
    // (*) Variable Definitions & Decleration :                          
            $file  = __DIR__ . "/PHP" . "/shadi.txt";
    // =================================================================================                            
    
    // (*) => First Example => Predefined Variables - Server - { $_SERVER['PHP_SELF'] } => [ Accessing/Directing to the current Server of the current page -upon Request- ] :    
        $ha1 = "Predefined Variables - Server - { $ _ SERVER['PHP_SELF'] } => [ Accessing/Directing the current Server of the current page -upon Request- ] :  as following : " . "<br>" ;
                            
        // // Desinging a link with a href to the current server :                 
        // echo 'Your Current Sever of current directory Name is  ' . "<br>" . $_SERVER['PHP_SELF'];

        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
    // ---------------------------------------------        
        
    // (*) => Second Example => Predefined Variables - Server - { $_SERVER['SERVER_ADDR'] } => [ Getting the Current Server Address ] :    
        $ha2 = "Predefined Variables - Server - { $ _ SERVER['SERVER_ADDR'] } => [ Getting the Current Server Address ] :  as following : " . "<br>" ;
                            
        // // Printing the Address of the current server [Apache] :                 
        // echo 'Your Current Sever Name is ' . "<br>" . $_SERVER['SERVER_ADDR'];      

        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
    // ---------------------------------------------        
        
    // (*) => Third Example => Predefined Variables - Server - { $_SERVER['SERVER_NAME'] } => [ Getting the Current Server Name ] :    
        $ha3 = "Predefined Variables - Server - { $ _ SERVER['SERVER_NAME'] } => [ Getting the Current Server Name ] :  as following : " . "<br>" ;
                            
        // // Printing the Name of the current server [Apache] :                 
        // echo 'Your Current Sever Name is ' . "<br>" . $_SERVER = ['SERVER_NAME'] . "<br>";

        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
    // ---------------------------------------------        
        
    // (*) => Fourth Example => Predefined Variables - Server - { $_SERVER['SERVER_NAME'] } => [ Advanced Getting the Current Server Name - with conditional If ] : 
        $ha4 = "Predefined Variables - Server - { $ _ SERVER['SERVER_NAME'] } => [ Advanced Getting the Current Server Name - with conditional If ]  :  as following : " . "<br>" ;
                            
        // // Printing the Name of the current server [Apache] :                 
        //     $_SERVER['SERVER_NAME'];
        
        // // Getting the Server IP Nubmer upon Server Name :
        //     if ($_SERVER['SERVER_NAME'] === 'localhost' ) { 
        //         echo 'Your Server Ip number is : [127.0.0.1]' . "<br>";
        //     } else {
        //         echo 'Your Server Ip number is : [175.0.0.1]' . "<br>";
        //     }        

        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
    // ---------------------------------------------        
            
    // (*) => Fifth Example => Predefined Variables - Server - { $_SERVER['QUERY_STRING'] } => [ Getting the PHP string of the current Web page (String after ? Sign)] : 
        $ha5 = "Predefined Variables - Server - { $ _ SERVER['QUERY_STRING'] } => [ Getting the PHP string of the current Web page (String after ? Sign)]  :  as following : " . "<br>" ;
                            
        // // Printing the PHP string of the current Web page (String after ? Sign) : 
        //     echo 'Your PHP Web Page string of the current page is : ' . "<b>" . $_SERVER['QUERY_STRING'];
                
        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
    // ---------------------------------------------        
        
    // (*) => Sixth Example => Predefined Variables - Server - { $_SERVER['HTTP_REFERER'] } => [ Getting the web page of the previous page Visitor come from ] : 
        $ha6 = " Predefined Variables - Server - { $ _ SERVER['HTTP_REFERER'] } => [ Getting the web page of the previous page Visitor come from ]  :  as following : " . "<br>" ;
                            
        // // Printing the web page of the previous page Visitor come from :
        //     echo 'Your PHP Web Page string of the current page is : ' . "<br>" . $_SERVER['HTTP_REFERER'];
                
        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
    // ---------------------------------------------        
        
    // (*) => Seventh Example => Predefined Variables - Server - { $_SERVER['SERVER_PORT'] } => [ Getting the current server port number ] : 
        $ha7 = "Predefined Variables - Server - { $ _ SERVER = ['SERVER_PORT'] } => [ Getting the current server port number ]  :  as following : " . "<br>" ;
                            
        // // Printing the current server port number  :
        //     echo 'Your the current server port number is : ' . "<br>" . $_SERVER['SERVER_PORT'];
                
        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
    // ---------------------------------------------        
        
    // (*) => Eighth Example => Predefined Variables - Server - { $_SERVER['REQUEST_METHOD'] } => [ Getting the used method of the current request to reach the Database ] : 
        $ha8 = "Predefined Variables - Server - { $ _ SERVER = ['REQUEST_METHOD'] } => [ Getting the used method of the current request to reach the Database ]  :  as following : " . "<br>" ;
                            
        // // Getting the used method of the current request to reach the Database  :
        //     echo 'The used method of the current request to reach the Database  is : ' . "<br>" . $_SERVER['REQUEST_METHOD'];
                
        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
    // ---------------------------------------------        
    
    // (*) => Nineth Example => Predefined Variables - Server - { $_SERVER['DOCUMENT_ROOT'] } => [ Getting the current server address untill {htdocs Folder}] : 
        $ha9 = "Predefined Variables - Server - { $ _ SERVER['DOCUMENT_ROOT'] } => [ Getting the current server address untill {htdocs Folder} ]  :  as following : " . "<br>" ;
                            
        // // Getting the current server address untill {htdocs Folder} :
        //     echo 'Getting the current server address untill {htdocs Folder} [Document Root] is : ' . "<br>" . $_SERVER['DOCUMENT_ROOT'];
                
        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
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
            
            <!-- (*) => First Example => Predefined Variables - Server - { $_SERVER['PHP_SELF'] } => [ Accessing/Directing to the current Server of the current page -upon Request- ]: -->
                        
                    <header>
                        First Example => Predefined Variables - Server - { $_SERVER['PHP_SELF'] } => [ Accessing/Directing to the current Server of the current page -upon Request- ] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1 ?>  </h1>  
                            
                        <?php       

                            // Desinging a link with a href to the current server :                 
                                echo 'Your Current Sever Name is ' . "<br>" . $_SERVER['PHP_SELF'];

                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
            <!-- (*) => Second Example => Predefined Variables - Server - { $_SERVER['SERVER_ADDR'] } => [ Getting the Current Server Address ]: -->
                        
                    <header>
                        Second Example => Predefined Variables - Server - { $_SERVER['SERVER_ADDR'] } => [ Getting the Current Server Address ]: <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha2 ?>  </h1>  
                            
                        <?php       
                            // Printing the Address of the current server [Apache]:                 
                                echo 'Your Current Sever Name is ' . "<br>" . $_SERVER['SERVER_ADDR'];      

                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";                
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                                                                           
            
            <!-- (*) => Third Example => Predefined Variables - Server - { Declaring] a Normal Variable as Server variable located in ouside a Function => To Access it from inside the Function: -->
                        
                    <header>
                        Third Example => Predefined Variables - Server - { Declaring] a Normal Variable as Server variable located in ouside a Function => To Access it from inside the Function : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha3 ?>  </h1>                              

                        <?php       

                            // Printing the Name of the current server [Apache]:                 
                                echo 'Your Current Sever Name is ' . "<br>" . $_SERVER['SERVER_NAME'] . "<br>";

                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                                                                           
            
            <!-- (*) => Fourth Example => Predefined Variables - Server - { $_SERVER = ['SERVER_NAME'] } => [ Advanced Getting the Current Server Name - with conditional If ] : -->
                        
                    <header>
                        Fourth Example => Predefined Variables - Server - { $_SERVER = ['SERVER_NAME'] } => [ Advanced Getting the Current Server Name - with conditional If ] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha4 ?>  </h1>                              

                        <?php       
                            // Printing the Name of the current server [Apache]:                 
                                $_SERVER['SERVER_NAME'];
        
                            // Getting the Server IP Nubmer upon Server Name :
                                if ($_SERVER['SERVER_NAME'] === 'localhost' ) { 
                                    echo 'Your Server Ip number is : [127.0.0.1]' . "<br>";
                                } else {
                                    echo 'Your Server Ip number is : [175.0.0.1]' . "<br>";
                                }        
                    
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";                            
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                                                                           
            
            <!-- (*) => Fifth Example => Predefined Variables - Server - { $_SERVER['QUERY_STRING'] } => [ Getting the PHP string of the current Web page (String after ? Sign)] : -->
                        
                    <header>
                        Fifth Example => Predefined Variables - Server - { $_SERVER['QUERY_STRING'] } => [ Getting the PHP string of the current Web page (String after ? Sign)] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha5 ?>  </h1>                              

                        <?php       

                            // Printing the PHP string of the current Web page (String after ? Sign):
                                echo 'Your PHP Web Page string of the current page is : ' . "<b>" . $_SERVER['QUERY_STRING'];
                
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                                                                           
            
            <!-- (*) => Sixth Example => Predefined Variables - Server - { $_SERVER['HTTP_REFERER'] } => [ Getting the web page of the previous page Visitor come from ]: -->
                        
                    <header>
                        Sixth Example => Predefined Variables - Server - { $ _ SERVER['HTTP_REFERER'] } => [ Getting the web page of the previous page Visitor come from ] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha6 ?>  </h1>                              

                        <?php       
                        // Printing the web page of the previous page Visitor come from :
                            echo 'Your PHP Web Page string of the current page is [Not supproted in some browsers] : ' . "<br>" . $_SERVER['HTTP_REFERER'] ;
                
                        echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";                            
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                                                                           

            <!-- (*) => Seventh Example => Predefined Variables - Server - { $_SERVER['SERVER_PORT'] } => [ Getting the current server port number ] :  -->
                        
                    <header>
                        Seventh Example => Predefined Variables - Server - { $_SERVER['SERVER_PORT'] } => [ Getting the current server port number ] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha7 ?>  </h1>                              

                        <?php       
                        // Printing the current server port number  :
                             echo 'Your the current server port number is : ' . "<br>" . $_SERVER['SERVER_PORT']  . "<br>" ;
                
                        echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                                                                           
        
            <!-- (*) => Eighth Example => Predefined Variables - Server - { $_SERVER['REQUEST_METHOD'] } => [ Getting the used method of the current request to reach the Database ] :  -->
                        
                    <header>
                        Eighth Example => Predefined Variables - Server - { $_SERVER['REQUEST_METHOD'] } => [ Getting the used method of the current request to reach the Database ] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha8 ?>  </h1>

                        <?php       
                        // Getting the used method of the current request to reach the Database  :
                           echo 'The used method of the current request to reach the Database  is : ' . "<br>" . $_SERVER['REQUEST_METHOD'];
                
                        echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                                                                           
        
            <!-- (*) => Nineth Example => Predefined Variables - Server - { $_SERVER['DOCUMENT_ROOT'] } => [ Getting the current server address untill {htdocs Folder} ] :  -->
                        
                    <header>
                        Nineth Example => Predefined Variables - Server - { $_SERVER['DOCUMENT_ROOT'] } => [ Getting the current server address untill {htdocs Folder} ] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha9 ?>  </h1>

                        <?php       
                            // Getting the current server address untill {htdocs Folder} :
                                echo 'Getting the current server address untill {htdocs Folder} [Document Root] is : ' . "<br>" . $_SERVER['DOCUMENT_ROOT'] ;
                
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                                                                           
        
            <!-- ================================================================================= -->            
            <!-- ================================================================================= -->            
            </section>
                                                                    
         </body>
</html>