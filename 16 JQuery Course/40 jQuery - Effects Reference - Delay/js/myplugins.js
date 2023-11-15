//  40 jQuery - Effects Reference - Delay
/* Main lessons functions :
    a) Main Effects References {part 1} -> { delay() }  =>   [ 1 ] function :
                                
        1) First function : [ simple Using of delay() ] -> To [Control and assign the duration time of a certain effect of a certain elemenst] -> {1 function} 
        
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

// II] Functions buttons [ 2 ] main Groups functions :

// $(document).ready(function () {
$(function () {
    'use strict';

    // I] Definition of all elemensts :
    alert('Hello to the JQ [delay()] effect ');

    var btn = $(".codes0 button"),
        mess = $(".codes0 span");

    // II] Main functions Groups :

    // 1] First function : [ simple Using of delay() ] -> To [Control and assign the duration time of a certain effect of a certain element{span} ]   ->
    btn.click(function () {
        mess.text('this message shown by JQ with using delay method of 5 seconds ').fadeIn(1000).delay(5000).fadeOut(1000);
    });
    // ------------------------------------------------

});

    // ------------------------------------------------------
    // ------------------------------------------------------

    // ------------------------------------------------------
    // ------------------------------------------------------
    // ------------------------------------------------------
    // ------------------------------------------------------


