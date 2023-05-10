//  49 jQuery - Html_Css Reference - Wrap
/* Main lessons functions :
    a] Main html/css References {part 11} ->  {each()}  =>   [ 2 ] methods :
                                
    2) First function [Using {click()} ] {1 function} -> [ Using traditonal method to check on certain element that has cetain class name ] 
    1) Second function [Using {each()} ] {1 function} -> [ Using each() method to check on certain element that has cetain class name  ]          
                 
    b] Main used methods within selector used in this lessons functions : 
      (1) {click()} : Event 
      (2) {hasClass('')} : method  
      (3) {if condition(){} 
      
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
    alert('Hello to the JQ [each()] Method ');

    var listElem = $(".codes0 #list li"),
        btn1 = $(".codes0 #each");

    // II] Main functions Groups :

    // 1) First function [Using {traditional method} ] {1 function} -> [ looping and checking of certain class name -> to apply CSS change ] 

    // This function will activated when any of li will clicked {manually by click on each item(li) in the list} : 
    listElem.click(function () {
        if ($(this).hasClass('test')) {
            $(this).css("color", "red");
        }
    });

    // ------------------------------------------------

    // 2) Second function [Using {each()} ] {1 function} -> [ looping and checking of certain class name -> to apply CSS change ]

    // This function will be activated only this button is bieng clicked {on all (li) in the list }: 
    btn1.click(function () {

        listElem.each(function () {
            if ($(this).hasClass('test')) {

                $(this).css("color", "blue");
            }
        });

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


