//  49 jQuery - Html_Css Reference - Wrap
/* Main lessons functions :
    a] Main html/css References {part 8} ->  {warp()} {scrollLeft()}  =>   [ 2 ] methods :
                                
        1) First function [Using {warp('Html Tag element')} ] {1 function} -> [ Adding a Wrap element over the element ]          
        2) Second function [Using {unwarp()} ] {1 function} -> [ Removing a Wrap element over the element ] 
                 
    b] Main used methods within selector used in this lessons functions : 
      (1) {click()} : Event 
      
*/
// ========================================================
// I] Orcedion Plus buttons effect [5] groups :
// 1) First plus button :
$(document).ready(function () {
    $('#plus1').click(function () {
        $('#group1').slideToggle('slow');
    });
});

// 2) Second plus button :
$(document).ready(function () {
    $('#plus2').click(function () {
        $('#group2').slideToggle('slow');
    });
});

// 3) Third plus button :
$(document).ready(function () {
    $('#plus3').click(function () {
        $('#group3').slideToggle('slow');
    });
});

// 4) Fourth plus button :
$(document).ready(function () {
    $('#plus4').click(function () {
        $('#group4').slideToggle('slow');
    });
});

// 5) Fifth plus button :
$(document).ready(function () {
    $('#plus5').click(function () {
        $('#group5').slideToggle('slow');
    });
});

// 6) Sixth plus button :
$(document).ready(function () {
    $('#plus6').click(function () {
        $('#group6').slideToggle('slow');
    });
});

// 7) Seventh plus button :
$(document).ready(function () {
    $('#plus7').click(function () {
        $('#group7').slideToggle('slow');
    });
});
// =========================================================
// =========================================================
// =========================================================

// II] Functions variables [2] main Groups functions :

// $(document).ready(function () {
$(function () {
    'use strict';

    // I] Definition of all elemensts :
    alert('Hello to the JQ [warp()] Method ');

    var elem1 = $(".codes0 #elem1"),
        btn1 = $(".codes0 #add"),
        btn2 = $(".codes0 #remove");

    // II] Main functions Groups :

    // 1) First function [Using {warp()} ] {1 function} -> [ Adding a Wrap element over the element ]          
    btn1.click(function () {

        // 1) Adding Wrap on the selected Element :
        elem1.wrap('<div id="wrap" style="wrap"></div>');

    });

    // ------------------------------------------------

    // 2) Second function [Using {unwarp()} ] {1 function} -> [ Removing a Wrap element over the element ] 

    btn2.click(function () {
        // 1) Navaigate to of window screen [Insatantly Mode] :
        elem1.unwrap();
    });

});

// ------------------------------------------------
// ------------------------------------------------------

// Fixed functions:
// Scroll to top/bottom buttons :

$(function () {
    'use strict';

    $('.Home').click(function () {
        $('html,body').animate({
            warp: 0
        }, 1000).delay(500);
    })

    $('.End').click(function () {
        $('html,body').animate({
            warp: $('#footer').offset().top
        }, 1000).delay(500);
    })


})




// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------


