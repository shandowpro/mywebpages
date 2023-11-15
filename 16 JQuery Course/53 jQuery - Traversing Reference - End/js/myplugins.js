//  53 jQuery - Traversing Reference - End
/* Main lessons functions :
    a] Main Traversing  References {part 4} ->  {end()}  =>  [ 2 ] groups :
                                
    1) First method : Default mode (multiple seperated chains - one chain code for each Procedure - )

    2) Second method : Using end() mode (One seperated chain - for all procedures - )
                 
    b] Main used methods within selector used in this lessons functions : 
       (1) Chained function  
       (2) find('elem Selector');      
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

// $(document).ready(function () {
//     'use strict';
//     $('#parent11, #parent12, #parent21, #parent22, #parent31, #parent32, #parent41, #parent42').css({
//         "border": "5px solid black"
//     });
// });

// II] Functions variables [2] main Groups functions :

// $(document).ready(function () {
$(function () {
    'use strict';

    // I] Definition of all elements :
    alert('Hello to the JQ [end()] Method ');

    var elem1 = $(".codes0 #defElem"),
        elem2 = $(".codes0 #endElem"),
        defElem = $(".codes0 #defMode"),
        endElem = $(".codes0 #endMode");
    // ------------------------------------------------------------------------------
    // II] Main functions Groups :
    // 1) First method : Default mode (multiple seperated chains - one chain code for each Procedure - )

    defElem.click(function () {
        elem1.find('span').css("color", "red");
        elem1.find('p').css("font-weight", "bold");
    });


    // ------------------------------------------------
    // ------------------------------------------------
    // ------------------------------------------------

    // 2) Second method : Using end() mode (One seperated chain - for all procedures - )

    endElem.click(function () {
        elem2.find('span').css("color", "red").end()
            .find('p').css("font-weight", "bold");
    });

    // ------------------------------------------------
    // ------------------------------------------------
    // ------------------------------------------------
});
// ------------------------------------------------
// ------------------------------------------------


// ------------------------------------------------
// ------------------------------------------------------

// Fixed functions:
// Scroll to top/bottom buttons :

$(function () {
    'use strict';

    $('.Home').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000).delay(500);
    })

    $('.End').click(function () {
        $('html,body').animate({
            scrollTop: $('#footer').offset().top
        }, 1000).delay(500);
    })


})

// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------