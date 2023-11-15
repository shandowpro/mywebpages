
<!--  11 PHP Tutorials In Arabic - Add Active Class On Dynamic Links --> 
<!-- =============================================================== -->

<?php
    $lessonName ='Add Active Class On Dynamic Links';
    $title = '11 PHP Tutorials - ' . $lessonName;
    $css = '11 PHP Tutorials In Arabic - Add Active Class On Dynamic Links.css';

    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName . "<br>";        
    $path = __DIR__;
    $pageName = basename($path);
    
    echo 'This page Name is: [' . $pageName . '] <br>';
    // ============================================================================
        /*  In this lesson will be (1) Application :
        // 1- First Example : [Adding the link's active class + Adding inner pages title dynamically] .        
        */    
        
        $main = 'In this lesson will be (1) Application  :   as following  : ' . '<br>' . '<ul>' .
         '<li>' . 'First Example : [Adding the link\'s active class + Adding inner pages title dynamically] ' . '</li>'  .                   
    '</ul> <br>'; 
    // ============================================================================    

    // (*)=> First Example : [Adding the link\'s active class + Adding inner pages title dynamically]   : 
        $ha1 = 'First Example : [Adding the link\'s active class + Adding inner pages title dynamically]  : as following : ' . "<br>" ;
            /*  Creating following inner pages : 
                1- header page : This page has the main Nav bar , which will be included in other inner pages
                2- about page : This page will include the Header Page + Define the page name variable by this page's Name
                3- service page : This page will include the Header Page + Define the page name variable by this page's Name
                4- map page : This page will include the Header Page + Define the page name variable by this page's Name
                4- tuts(tutorial) page : This page will include the Header Page + Define the page name variable by this page's Name            
            */
            echo 'The following is the project main components , procedures <br> ' .
                '<ul> Creating following inner pages : <br> <li> Header page : This page has the main Nav bar , which will be included in other inner pages  </li> <li> about page : This page will include the Header Page + Define the page name variable by this page\'s Name </li> <br> <li> service page : This page will include the Header Page + Define the page name variable by this page\'s Name </li> <li> map page : This page will include the Header Page + Define the page name variable by this page\'s Name </li> <br> <li> tuts(tutorial) page : This page will include the Header Page + Define the page name variable by this page\'s Name </li> </ul> <br>' ;
                    
            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                
    // =================================================================================                                                                               
    // =================================================================================                                
                                                  
// ==================================================================================
?>

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
            
        <body class='body' style="background-color: <?php echo $body; ?>" > 
            <h1>
                The following textnode of this head has been genereated by PHP path : <br>        
                <?php echo $heading; echo '<br>'; ?>            
            </h1>

            <p>
                The following textnode of this Paragraph has been genereated by PHP path : <br>        
                <?php echo $paragraph; echo '<br>'; ?> 
            </p> <br>        
            <!-- ------------------------------------------------------------------------- -->            
            <?php
                echo $main;
            ?>

            <section class="PHPPract" id="PHPPract">                                       
            
                <!-- (*) => First Example : [Adding the link\'s active class + Adding inner pages title dynamically] -->

                    <header>
                        First Example : [Adding the link\'s active class + Adding inner pages title dynamically] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1; ?>   </h1>  

                        <?php                                                                                               
                            echo '<a href="about.php"> About </a> <br>' ; 
                            echo '<a href="map.php"> Map </a> <br>' ; 
                            echo '<a href="service.php"> Service </a> <br>' ;             
                            
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                
             <!-- ---------------------------------------------------------- --> 
                                                    
            </section>
                                                                    
        </body>
    </html> 