
$(!document).ready((function(){
    // [A] Setting the carousel custome timeout:
        $('carousel').carousel({
            interval: 3500
        });
    // --------------------------------------------------

    // [B] Function of the [option box] main section: 
        // [B] / 1) Showing the [Toggle] of the color box when clicking on the {Gear Box}:
            $('.gear-option').click((function(){
                $('.color-option').fadeToggle();
                    // $('.color-option').toggle();
                    // $('.color-option').showToggle();
                }
            ));

        // [B] / 2) Setting the change of color palets by Jqurey and css property :                 
            var colorLi = $('.color-option ul li');

            // Setting colors in order [red , blue , purple , yellow]: 
            colorLi
            .eq(0).css('backgroundColor', '#E41B17').end()
            .eq(1).css('backgroundColor', '#009AFF').end()
            .eq(2).css('backgroundColor', '#E426D5').end()
            .eq(3).css('backgroundColor', '#FFD500');
    
        // [B] / 3) Chaning color of the whole template by clicking on each li color by following steps [when click function on the li] :        
            // 1- Searching for the link with attribute of the value [href] that contains {theme} -> [which is the css default_theme.css file ]
            // 2- Replacing the value of herf attribute with the value of the (li) attribute [data-value] value }          
            colorLi.click(function(){                
                console.log($(this).attr("data-value"));
                $('link[href*="theme"]').attr('href', $(this).attr('data-value'));
            });
    // --------------------------------------------------
    
    // [C] Preloader page coding :
        $(window).load(function(){
            $('.loading-overlay .spinner').fadeOut(2000, function(){                
                $(this).parent().fadeOut(1500, function(){
                    // Removing the overloading section form the DOM
                    $(this).remove();
                });
            });
        });
        
    // $(window).load(function(){
    //     $(body).css("overflow","hidden");
    // });
}));

// --------------------------------------------------
// --------------------------------------------------

function test(){ 
    $(!document).ready((function(){
        // [A] Setting the carousel custome timeout:
            $('carousel').carousel({
                interval: 3500
            });

        // --------------------------------------------------

        // [B] Function of the [option box] main section: 
            // [B] / 1) Showing the [Toggle] of the color box when clicking on the {Gear Box}:
                $('.gear-option').click((function(){
                    $('.color-option').fadeToggle();
                        // $('.color-option').toggle();
                        // $('.color-option').showToggle();
                    }
                ));

            // [B] / 2) Setting the change of color palets by Jqurey and css property :     
             
                var colorLi = $('.color-option ul li');

                // Setting colors in order [red , blue , purple , yellow]: 
                colorLi
                .eq(0).css('backgroundColor', '#E41B17').end()
                .eq(1).css('backgroundColor', '#009AFF').end()
                .eq(2).css('backgroundColor', '#E426D5').end()
                .eq(3).css('backgroundColor', '#FFD500');
        
            // [B] / 3) Chaning color of the whole template by clicking on each li color by following steps [when click function on the li] :        
                // 1- Searching for the link with attribute of the value [href] that contains {theme} -> [which is the css default_theme.css file ]
                // 2- Replacing the value of herf attribute with the value of the (li) attribute [data-value] value }          
                colorLi.click(function(){                
                    console.log($(this).attr("data-value"));
                    $('link[href*="theme"]').attr('href', $(this).attr('data-value'));
                });

        // --------------------------------------------------
     
        // [C] Preloader page coding :
            $(window).load(function(){
                $('.loading-overlay .spinner').fadeOut(2000, function(){                
                    $(this).parent().fadeOut(1500, function(){
                        // Removing the overloading section form the DOM
                        $(this).remove();
                    });
                });
            });
            
        // $(window).load(function(){
        //     $(body).css("overflow","hidden");
        // });
    }));
}

// -----------------------------------------------

function display() {    
    document.getElementById("SourceCode").innerHTML =  test + "\n\n" + "=".repeat(90) + "\n\n";      
}