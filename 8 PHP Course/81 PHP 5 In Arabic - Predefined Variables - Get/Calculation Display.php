
<!-- [Calculation Display] Page => Directed from [Calculation From] Page --> 

<?php

    // (*) => Third Example => Predefined Variables - GET - { $ _ GET[Variable] } => [Recieving data from Form for Caculation] :
        // $ha3 = "Predefined Variables - GET - { $ _ GET[Variable] } => [Recieving data from Form for Caculation] :  as following : " . "<br>" ;
            
        echo "Predefined Variables - GET - { $ _ GET[Input Name Variable] } => [Recieving data from [Caculation Form] ] :  as following : " . "<br>" ;
        
        // Declaration of the main (2) Numbers Variables & Main Calculations : 
            $num1 = $_GET['num1'];
            $num2 = $_GET['num2'];
            
            $Sum = $num1 + $num2;
            $Sub = $num1 - $num2;
            $Mult = $num1 * $num2;
            $Div = $num1 / $num2;

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
