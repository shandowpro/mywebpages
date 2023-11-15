///  51 jQuery - Traversing Reference - Has
/* Main lessons functions :
    a] Main Traversing  References {part 2} ->  {has()}  =>   [ 4 ] methods :
                                
    1) First function [Using {has('tagName')} ] {1 function} -> [ Testing if the element has certain Tag element type inside]  {single element has single element }
    2) Second function [Using {has('.className')} ] {1 function} -> [ Testing if the element has element with certain ClassName ] {single element has single className} 
    3) Third function [Using {has('.className, tagName ')} ] {1 function} -> [ Testing if the element has certain Tag element type || element with certain ClassName ] {single element has mixed items and class name }   
    4) Fourth function [Using {has('.className, tagName ')} ] {1 function} -> [ Testing if the element has certain Tag element type || element with certain ClassName ] {multiple elements has mixed items }
    
                 
    b] Main used methods within selector used in this lessons functions : 
      (1) {()} : Event 
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
    alert('Hello to the JQ [has()] Method ');

    var list = $(".codes0 #list"),
        btn1 = $(".codes0 #sTag"),
        btn2 = $(".codes0 #sClass"),
        btn3 = $(".codes0 #sMix"),
        btn4 = $(".codes0 #multMix");

    // II] Main functions Groups :

    // 1) First function [Using {has() method} ] {1 function} -> [ checking for if list element has certain {tagName} element ] 

    btn1.click(function () {
        alert('Welcome to {single element has single element } ');
        list.has('li').css("color", "red");

    });

    // ------------------------------------------------

    // 2) Second function [Using {has() method} ] {1 function} -> [ checking for if list element has certain {ClassName}  element ] 

    btn2.click(function () {
        alert('Welcome to {single element has single className}');
        list.has('.test').css("color", "blue");

    });
    // ------------------------------------------------

    // 3) Third function [Using {has() method} ] {1 function} -> [ checking for if list element has certain mixed ClassName OR TagName  element ] 

    btn3.click(function () {
        alert('Welcome to {single element has mixed items and class name }');
        list.has('.test, li').css("color", "green");

    });
    // ------------------------------------------------

    // 4) Fourth function [Using {has() method} ] {1 function} -> [ checking for if list element has certain ClassName  element ]

    btn4.click(function () {
        alert('Welcome to {multiple elements has mixed items } ');
        $(".codes0 ul, .codes0 div, .codes0 p ").has(".test").css({
            "color": "red",
            "fontSize": "30px",
            "border": "4px solid gold"
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


