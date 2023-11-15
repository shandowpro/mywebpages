
<!-- [Calculation Display] Page => Directed from [Calculation From] Page : Using [Post] Method --> 

<?php

// (*) => Third Example => Predefined Variables - Post - { $ _ Post[Variable] } => [Recieving data from Form for Caculation] => using [POST]  Method :
    $ha3 = "Predefined Variables - Post - { $ _ Post[Input Name Variable] } => [Recieving data from [Caculation Form] ]  => using [POST]  Method :  as following : " . "<br>" ;
            
    echo "Predefined Variables - Post - { $ _ Post[Input Name Variable] } => [Recieving data from [Caculation Form] ] :  as following : " . "<br>" ;
    
    // Declaration of the main (2) Numbers Variables & Main Calculations => using [POST] Method : 
        $num1 = $_POST['num1'];
        $num2 = $_POST['num2'];
        
        $Sum = $num1 + $num2;
        $Sub = $num1 - $num2;
        $Mult = $num1 * $num2;
        $Div = $num1 / $num2;

    // Printing the sending data Method to the user : 
        echo 'Welcome User , You have been secured Request Method {' . $_SERVER['REQUEST_METHOD'] . "}". '<br>' ;

    // Printing the main (2) Numbers : 
        echo 'Number 1 is : ' . $num1 . '<br>'; 
        echo 'Number 2 is : ' . $num2 . '<br>';
    
    // Printing the main Caculations : 
        echo 'Summition Result is : ' . '<br>' . $Sum . '<br>';
        echo 'Substraction Result is : ' . '<br>' . $Sub . '<br>';
        echo 'Multiply Result is : ' . '<br>' . $Mult . '<br>';
        echo 'Divsion Result is : ' . '<br>' . $Div . '<br>';
                    
        echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
    // ---------------------------------------------                
    // ---------------------------------------------                

?>
