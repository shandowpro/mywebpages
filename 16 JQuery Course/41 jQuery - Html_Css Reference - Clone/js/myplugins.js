//  41 jQuery - Html_Css Reference - Clone
/* Main lessons functions :
    a) Main Effects References {part 2} -> { clone() }  =>   [ 1 ] function :
                                
        1) First function : [ simple cloning/copying element by Using of clone() ] -> {1 function} 
        2) Second function : [ Advanced cloning/copying element with arguments by Using of clone(true) & clone(false) ] -> {2 functions} 
        
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
    alert('Hello to the JQ [clone()] effect ');

    var firstD = $(".codes0 .firstDiv"),
        secondD = $(".codes0 .secondDiv"),
        defClone = $(".codes0 .defClone"),
        trueClone = $(".codes0 .trueClone");

    // II] Main functions Groups :

    // 1) First function : [ simple cloning/copying element by Using of clone() ] -> {1 function}    ->
    defClone.click(function () {
        firstD.clone(false).appendTo($('.codes0'));
    });

    firstD.on('click', function () {
        $(this).css('color', 'white');
    });
    // ------------------------------------------------

    // 2) Second function : [ simple cloning/copying element by Using of clone() ] -> {1 function}    ->
    trueClone.click(function () {
        secondD.clone(true).appendTo($('.codes0'));
    });

    secondD.on('click', function () {
        $(this).css('color', 'white');
    });
    // ------------------------------------------------

});

    // ------------------------------------------------------
    // ------------------------------------------------------

    // ------------------------------------------------------
    // ------------------------------------------------------
    // ------------------------------------------------------
    // ------------------------------------------------------


