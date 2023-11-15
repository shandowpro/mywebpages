<!--  php - Lesson9 => Data Type Overview  -->
<?php     
    $lessonName  ='Data Type Overview';
    $title = '9 PHP5 - ' . $lessonName;
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;
    $h11 = '<h1> Following Varibles datatypes by {gettype()} Method </h1>';
    $h12 = '<h1> Following Varibles datatypes by {var_dump()} Method </h1>';

    $str = 'String variable value 1';    
    
    $num = 100;
    
    $dbl = 100.5;
    
    $bol1 = True ;
    $bol2 = false ;
    
    $empty = null ;
    
    $arr = array(
        "A" => "Value1",
        "B" => "Value2",
        "C" => "Value3",
        ) ;

    $obj = new obj();
    
    class obj {
        function book() {
            $this-> genre = 'Adverture';
        }
    }


    $res1 = mysqli_connect ("localhost", "shadi" , "p@123", "mydb") ; // this is connection code link with the database 
    $res2 = fopen ("shadi.txt", "r") ; // this is certian file to open

    // [{gettype()} method can be written with in the variable decleration (but NOT {var_dump()} method) ] =>
    $varD = '<ul>';
    $varD .= '<li>' . gettype($str) . '</li>' . '<br>';    
    $varD .= '<li>' . gettype($num) . '</li>';    
    $varD .= '<li>' . gettype($bol1) . '</li>';    
    $varD .= '<li>' . gettype($bol2) . '</li>';    
    $varD .= '<li>' . gettype($dbl) . '</li>';    
    $varD .= '<li>' . gettype($empty) . '</li>';    
    $varD .= '<li>' . gettype($arr) . '</li>';    
    $varD .= '<li>' . gettype($obj) . '</li>';    
    $varD .= '<li>' . gettype($res1) . '</li>';    
    $varD .= '<li>' . gettype($res2) . '</li>';        
    $varD .= '</ul>';        
?>
<!-- ------------------------------------------------------------- -->

<!DOCTYPE html>
 <html>
    <head>
        <title> <?php echo $title; ?>  </title>
        <link rel="stylesheet" href="9 PHP 5 In Arabic - Data Type Overview.css" media="all">
    </head>
    <body>
        <h1>
            <?php echo $heading; ?>            
        </h1>

        <p>
            <?php echo $paragraph; ?> 
        </p> <br>        
        
        <p>                     
            <?php
                echo $h11; // The following element will contain all declared variable's datatype by first => {gettype()} method ...  
                echo "<p style='text-indent: 10px; margin-left:20px'>" 
                . gettype($str) . '<br>'
                . gettype($num) . '<br>'
                . gettype($dbl) . '<br>'
                . gettype($bol1) . '<br>'
                . gettype($bol2) . '<br>'
                . gettype($empty) . '<br>'
                . gettype($bol2) . '<br>'
                . gettype($arr) . '<br>'
                . gettype($obj) . '<br>'
                . gettype($res1) . '<br>'
                . gettype($res2) . '<br>'                                                                     
                . '</p> <br> <hr>' ;            
                               
                echo $varD;                            
                
                // echo "<p>" ;
                // echo var_dump($str);
                // echo var_dump($num);
                // echo var_dump($dbl);
                // echo var_dump($bol1);
                // echo var_dump($bol2);
                // echo var_dump($empty);
                // echo var_dump($bol2);
                // echo var_dump($arr);
                // echo var_dump($obj); 
                // echo var_dump($res1);
                // echo var_dump($res2);
                // echo '</p> <br> <hr>' ;                                    
            ?>             
        </p> <br> <hr>                                
        
        <?php
            echo $h12; // The following element will contain all declared variable's datatype by second => {var_dump()} method ...                                                  
        ?>

        <ul>
            <li> <?php var_dump($str); ?>  </li>
            <li> <?php var_dump($num); ?>  </li>
            <li> <?php var_dump($dbl); ?>  </li>
            <li> <?php var_dump($bol1); ?>  </li>
            <li> <?php var_dump($bol2); ?>  </li>
            <li> <?php var_dump($empty); ?>  </li>
            <li> <?php var_dump($arr); ?>  </li>
            <li> <?php var_dump($obj); ?>  </li>
            <li> <?php var_dump($res1); ?>  </li>
            <li> <?php var_dump($res2); ?>  </li>
        </ul>
    </body>
</html>         