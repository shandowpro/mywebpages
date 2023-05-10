

<?php 

    echo "This is a content from another {PHP file} [in the one level upper form parent Directory] ";


    echo "The Directory of this including file is " . "<br>" .  __DIR__  . "<br>";
    echo "The Full path of this including file is " . "<br>" .  __FILE__ . "<br>";
    echo "The Pure Name [with extension] of this including file is " . "<br>" .  basename(__FILE__) . "<br>" ;
    echo "The Pure Name [without extension] of this including file is " . "<br>" .  basename(__FILE__, ".php") . "<br>" ;    
