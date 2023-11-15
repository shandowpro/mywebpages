<!--  4 PHP Examples In Arabic - Deal With Checkboxes Insert With PHP --> 
<!-- =============================================================== -->
<!-- Main Form -->
<br><br>
<form action="<?php $_SERVER['PHP_SELF']?>" method="POST" style="margin:auto 50px; text-align:center"> 
    <input type="text" name="username" > <br />
    <input type="checkbox" name="browser[]" value="Chrome" > Chrome <br />
    <input type="checkbox" name="browser[]" value="Opera" > Opera <br />
    <input type="checkbox" name="browser[]" value="FireFox" > FireFox <br />
    <input type="submit" value="Add" >
</form>

<?php
    $lessonName ='Deal With Checkboxes Insert With PHP';
    $title = '4 PHP Tutorials - ' . $lessonName;
    $css = '4 PHP Examples In Arabic - Deal With Checkboxes Insert With PHP.css';

    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName . "<br>";    
    // ============================================================================
        /*  In this lesson will be (1) Applications [Dealing with the multiple Data in the Form]  :
        // 1- First Example [Adding multiple data[Checkbox] Gathered from the A Form && Adding it by one single row in the database & Reprocess it in the same page].
        */    
        
        $main =  'In this lesson will be (1) Applications [Dealing with the multiple Data in the Form] :   as following  : ' . '<br>' . '<ul>' .
    '<li>' . 'First Example [Adding multiple data[Checkbox] Gathered from the A Form && Adding it by one single row in the database & Reprocess it in the same page]' . '</li>' .            
    '</ul>'; 
    // ============================================================================    

    // (*)=>  First Example [Adding multiple data[Checkbox] Gathered from the A Form && Adding it by one single row in the database & Reprocess it in the same page] :
        $ha1 = 'First Example [Adding multiple data[Checkbox] Gathered from the A Form && Adding it by one single row in the database & Reprocess it in the same page]  : as following : ' . "<br>" ;             
        
        // if ($_SERVER['REQUSET_METHOD'] == 'POST') {
            
        //     // Defining a Variable (username) [from the Form inputs]:
        //         $name = $_POST['username'];

        //     // Defining one a Variable of the Array of all input fields of [Browser Name] from the Form :
        //         $allBrowsers = implode(',', $_POST['browser']);
            
        //     // Printing the defined post variable [username] from the From :
        //         echo 'Hello ' . $name . 'You have Choosed the following choices ' . "<br>";

        //     // Printing the defined impoloded variable => [To added to the Database ] :            
        //         echo $allBrowsers . "<br>"; 
            
        //     // Exploding the imploded variable to an Array [To be displayed] :
        //         $splitted = explode(',', $allBrowsers);
            
        //     // Adding the Exploded array in to the page as {Links} => [by using the foreach looping statement] of the form Input fields :
        //         foreach ($splitted as $single) {
        //             echo '<a href="#">' . $single . '</a> <br />';
        //         }            

        // } else {
        //     echo 'Sorry , your are not permitted to Login to the form page';
        // }
                                    
                                                                                
        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
            
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
            
            <!-- (*) => First Example [Adding multiple data[Checkbox] Gathered from the A Form && Adding it by one single row in the database & Reprocess it in the same page] : -->
                        
                    <header>
                        First Example [Adding multiple data[Checkbox] Gathered from the A Form && Adding it by one single row in the database & Reprocess it in the same page] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1; ?>   </h1>  

                        <?php                                                                                               

                            // Checking if the user is loged to the Form by legally to start processing Form :
                                if ($_SERVER['REQUEST_METHOD'] == 'POST') {
                                            
                                    // Defining a Variable (username) [from the Form inputs] :
                                        $name = $_POST['username'];

                                    // Defining one a Variable of the Array of all input fields of [Browser Name] from the Form :
                                        $allBrowsers = implode(',', $_POST['browser']);
                                    
                                    // Printing the defined post variable [username] from the From :
                                        echo 'Hello ' . $name . '<br>' . 'You have Choosed the following choices ' . "<br>";

                                    // Printing the defined impoloded variable => [To added to the Database ] :            
                                        echo $allBrowsers . "<br>"; 
                                    
                                    // Exploding the imploded variable to an Array [To be displayed] :
                                        $splitted = explode(',', $allBrowsers);
                                    
                                    // Adding the Exploded array in to the page as {Links} => [by using the foreach looping statement] of the form Input fields :
                                        foreach ($splitted as $single) {
                                            echo '<a href="#">' . $single . '</a> <br />';
                                        }            

                                } else {
                                    echo 'Sorry , your are not permitted to Login to the form page';
                                }
                                                        
                                                                                                    
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                            
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
            <!-- ---------------------------------------------------------- --> 
                                                    
            </section>
                                                                    
        </body>
    </html> 