//  37 jQuery - Events Reference - Scroll()
/* Main lessons functions :
    a) Main Events References {part 12} -> {scroll()}  =>  [ 3 ] Groups &  [ 3 ] functions :
                                
        1) First function : [ simple Using {scroll();} ] {1 function} ->  [Displaying static current scroll value ] 
        2) Second function : [ advanced Using {scroll();} ] {1 function} -> [Displaying custom covering screen upon current Dynamic Screen Size ]
        3) Third function : [ advanced application {scroll();} ] {1 function} -> [Creating custom button to be show/hide at certain scrollTop]
        
    b) Main used methods within selector used in this lessons functions : 
        1) Single and nested functions 
        2) Combined Grouped functions
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

// II] Functions buttons [ 3 ] main Groups functions :

// $(document).ready(function () {
$(function () {
    'use strict';

    // I] Definition of all elemensts :  
    alert('Hello to the JQ [scroll()] event & [scrollTop()] value ');

    var scrollUp = $(".codes0 .scrollUp"),
        sc = $(window).scrollTop();

    // II] Main functions Groups :
    // 1] First function {scroll()} : [When scrolling => printing the value of the scrolltop in the console ] {1 function}  ->
    // $(window).on("scroll", function () {
    //     console.log('your current scroll top is ', sc);
    // });
    // ------------------------------------------------


    // 2] Second function  : [ scroll()} : [When scrolling & reaching certain =>  printing the value of the scrolltop in the console by reaching cetain scroll top  ] {1 function}  ->

    // $(window).on("scroll", function () {
    //     if (sc > 1500) {
    //         console.log('your current scroll top is bigger than : 1500 px');
    //     }
    // });

    // ------------------------------------------------------
    // ------------------------------------------------------

    // 3] Third function  : [ scroll()} : [When scrolling & reaching certain =>  show certain element [scroll up] button & printing the value of the scrolltop in the console by reaching cetain scroll top  ] {1 function}  ->/

    $(window).on("scroll", function () {

        var scrollUp = $(".codes0 .scrollUp"),
            sc = $(window).scrollTop();

        if (sc > 1600) {
            console.log('The Scroll up button is now show at scrollTop value : ', sc);
            scrollUp.fadeIn(1000);
        } else if (sc < 1600) {
            scrollUp.fadeOut(1000);
        }
    });

    // ------------------------------------------------------
    // ------------------------------------------------------
    // ------------------------------------------------------
    // ------------------------------------------------------

});
