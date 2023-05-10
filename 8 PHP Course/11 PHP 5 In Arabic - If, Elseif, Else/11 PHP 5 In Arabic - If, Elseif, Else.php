<!--  php - Lesson11 =>    -->
<?php     

    function test() {
        echo 'hello world!';
    }

$myVar = file_get_contents

        $lessonName  ='If, Elseif, Else';
        $title = '11 PHP5 - ' . $lessonName;
        $heading = 'This the head lesson about ' . $lessonName;
        $paragraph = 'This is paragraph about ' . $lessonName;
        
        $h11 = '<h1> Result of example(1)=> [Numbers comparison] as below : </h1> <br>';
        $h12 = '<h1> Result of example (2)=> [Ticket price discount] as below : </h1>';             

        $num1 = 100;
        $num2 = 500;
        $ticket = 1500;                
        // =====================================================================================================            
    
        if ($num1 > $num2) {

            $p1 = '<p>' . $num1 . ' Is larger than ' . $num2 . '</p>';
            
        } elseif ($num1 < $num2) {
            
            $p1 = '<p>' . $num1 . ' Is smaller than ' . $num2 . '</p>';
            
        } else {
            
            $p1 = '<p>' . $num1 . ' Is Equalled than ' . $num2 . '</p>';
                        
        }
        // --------------------------------------------------------------------
        
        if ($ticket >= 500 && $ticket < 1000) {
            
            $p2 = '<p>'.  'Your Ticket price is : ' . $ticket .  'USD , Your discount is : 5%'. '</p>' ;
            
        } elseif ($ticket >= 1000 && $ticket < 2000 ) {
            
            $p2 = '<p>'.  'Your Ticket price is : ' . $ticket .  'USD , Your discount is : 15%'. '</p>' ;            
            
        } elseif ($ticket >= 2000  ) {
            
            $p2 = '<p>'.  'Your Ticket price is : ' . $ticket .  'USD , Your discount is : 25%'. '</p>' ;                    
            
        } else {
            
            $p2 = '<p>'. 'Your ticket price is : ' . $ticket . 'You have no Discount!' . '</p>' ;                                
        }

        // =====================================================================================================            
    ?>
    
    <!DOCTYPE html>
    <html>
        <head>
            <title> <?php echo $title; ?>  </title>
            <link rel="stylesheet" href="10 PHP 5 In Arabic - If, Elseif, Else.css" media="all">
        </head>
        <body>
            <h1>
                The following textnode of this head has been genereated by PHP file : <br>        
                <?php echo $heading; echo '<br>'; ?>            
            </h1>

            <p>
                The following textnode of this Paragraph has been genereated by PHP file : <br>        
                <?php echo $paragraph; echo '<br>'; ?> 
            </p> <br>        
            

            <?php echo $h11; ?>        
            <p>                     
                <?php                                       
                    echo $p1;
                ?>                                             
            </p> <br> <hr>                                
            
                    
            <?php echo $h12; ?>
            <p>                     
                <?php                                       
                    echo $p2;
                ?>                                             
            </p> <br> <hr>                                
                    
        </body>
    </html>         
    