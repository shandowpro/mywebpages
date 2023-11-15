
$(!document).ready((function(){
        // Setting the carousel custome timeout:
        $('carousel').carousel({
            interval: 3500
        });

        // Showing the [Toggle] of the color box when clicking on the {Gear Box}:
        $('.gear-option').click((function(){
            $('.color-option').fadeToggle();
                // $('.color-option').toggle();
                // $('.color-option').showToggle();
            }
        ));

        // A] Setting the change of color palets by Jqurey and css property :     
            
        // 1) Setting color by using the {J-query} code: 
            var colorLi = $('.color-option ul li');

            // colors in order [red , blue , purple , yellow]: 
            colorLi
            .eq(0).css('backgroundColor', '#E41B17').end()
            .eq(1).css('backgroundColor', '#009AFF').end()
            .eq(2).css('backgroundColor', '#E426D5').end()
            .eq(3).css('backgroundColor', '#FFD500');

        // 2) Printing testing the value of the [data-value] of each li clicked => {on the console}: 
        
        /* 3) Chaning each li color by following steps [when click function on the li] :
        1- Searching for the link with attribute of the value [href] that contains {theme} -> [which is the css default_theme.css file ]
        2- Replacing the value of herf attribute with the value of the (li) attribute [data-value] value }         
        */
       
       
       // Searching and replacing :
        colorLi.click(function(){                
            console.log($(this).attr("data-value"));
            $('link[href*="theme"]').attr('href', $(this).attr('data-value'));
        });

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