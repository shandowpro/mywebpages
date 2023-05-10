
$(!document).ready((function(){
        $('carousel').carousel({
            interval: 3500
        });

        // Showing the [Toggle] of the color box when clicking on the {Gear Box}    
        $('.gear-option').click((function(){
            $('.color-option').fadeToggle();
                // $('.color-option').toggle();
                // $('.color-option').showToggle();
            }
        ));

    }
));

// --------------------------------------------------


function test(){
    $(!document).ready((function(){
        $('carousel').carousel({
            interval: 3500
        });

        // Showing the [Toggle] of the color box when clicking on the {Gear Box} :     
        $('.gear-option').click((function(){
            $('.color-option').fadeToggle();
                // $('.color-option').toggle();
                // $('.color-option').showToggle();
            }
        ));

    }));
}

// -----------------------------------------------

function display() {    
    document.getElementById("SourceCode").innerHTML =  test + "\n\n" + "=".repeat(90) + "\n\n";      
}