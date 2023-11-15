//  36 jQuery - Events Reference - Resize
/* Main lessons functions :
    a) Main Events References {part 11} -> {resize()}  =>  [ 3 ] Groups &  [ 3 ] functions :
                                
        1) First function : [ simple Using {resize();} ] {1 function} ->  [Displaying Dynamic Screen Size ] 
        1) Second function : [ advanced Using {resize();} ] {1 function} -> [Displaying custom covering screen upon current Dynamic Screen Size ]
        
    b) Main used methods within selector used in this lessons functions : 
        1) Single and nested functions 
        2) Combined Grouped functions
*/
// ========================================================

const { withDefaults } = require("vue");

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

// II] Functions buttons [ 2 ] main Groups functions :

$(document).ready(function () {
    'use strict';

    // I] Definition of all elements :  
    alert('Hello to the JQ [resize()] event ');

    var elem1 = $(".codes0 .elem1"),
        elem2 = $(".codes0 .elem2"),
        coverScreen = $(".codes0 .hidden");

    elem1.width() = $(window).width();
    elem1.height() = $(window).height();
    // II] Main functions Groups :
    // 1] First function { window.height() || window.width() } : [ Displaying dynamic values size of current screen ] {1 function}  ->

    $(window).on("resize", function () {
        alert('Hello Resize');
        console.log('Current Screen width = ', $(window).width(), " || ", 'Current Screen height = ', $(window).height());
        elem1.text('Current Screen width = ', $(window).width(), " || ", 'Current Screen height = ', $(window).height());
    });

    // ------------------------------------------------------
    // ------------------------------------------------------

    // 2] Second function { window.height() || window.width() } : [ Show/hide cover screen upon Dynamic values size of current screen ] {1 function}  ->

    $(window).on("resize", function () {
        if ($(window).width() < 900) {
            alert('You reached less than mobile scale');
            coverScreen.removeClass('hidden');
            coverScreen.text('You reached less than mobile scale');
            elem2.text('You reached less than mobile scale');
        } else {
            coverScreen.addClass('hidden');
            elem2.text('You are in mobile scale or bigger');
        }
        // console.log('Current Screen width = ', $(window).width(), " || ", 'Current Screen height = ', $(window).height());
        // elem1.text('Current Screen width = ', $(window).width(), " || ", 'Current Screen height = ', $(window).height());
    });

    // ------------------------------------------------------
    // ------------------------------------------------------
    // ------------------------------------------------------
    // ------------------------------------------------------

});
