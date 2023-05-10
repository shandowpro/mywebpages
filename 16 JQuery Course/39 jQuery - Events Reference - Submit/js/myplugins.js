//  38 jQuery - Events Reference - pageX pageY
/* Main lessons functions :
    a) Main Events References {part 15} -> { submit() }  =>  [ 2 ] Groups &  [ 2 ] functions :
                                
        1) First function : [ simple Using of submit() ] -> To [Prevent Submit function from work by using {preventDefault()} method ] -> {1 function} 
        2) Second function : [ Advanced Using of submit() ] -> To [Validate a certain input field value by using both {Submit()} function and {if condition} and {preventDefault()} method ] -> {1 function}  
        
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
    alert('Hello to the JQ [sumbit()] event ');

    var form1 = $(".codes0 .form1"),
        form2 = $(".codes0 .form2"),
        res = $(".codes0 .result");

    // II] Main functions Groups :

    // 1] First function {pageX , pageY} + {mousemove() }  : [When mouse moving in the webpage => printing the coordiantion location value of the a certain element ] {1 function}  ->
    form1.submit(function (e) {
        alert('Hello to Form1');
        e.preventDefault();
    });
    // ------------------------------------------------

    // 2] Second function : [ pageX, pageY} : [by click on a certain point in the webpage => display a specific circle in the position of the pointer  {1 function}  ->

    form2.submit(function (e) {
        alert('Hello to Form2');

        if ($('.codes0 .form2 input:first').val() === "shadi") {
            res.text('Correct confirmation!').show();
            return;
        } else {
            res.text('Sorry Wrong confirmation!').show().fadeOut(2000);
            e.preventDefault();
        }

    });
    // ------------------------------------------------

});

    // ------------------------------------------------------
    // ------------------------------------------------------

    // ------------------------------------------------------
    // ------------------------------------------------------
    // ------------------------------------------------------
    // ------------------------------------------------------


