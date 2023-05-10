//  43 jQuery - Html_Css Reference - Has Class
/* Main lessons functions :
    a) Main Effects References {part 4} ->  { hasClass() }  =>   [ 3 ] function :
                                
        1) First function : [ Loop checking on group of li elements inside ul ] -> To [ apply a css changes on the same element has the classname  ] -> {1 function}  
        2) Second function : [ Loop checking on group of li children elements inside ul ] -> To [ apply a css changes on the {Parent of element} has the classname  ] -> {1 function}
        3) Third function : [ Loop checking on group of li elements inside ul ] -> To [ apply a css changes on the {next, prev element} has the classname  ] -> {1 function}

    b) Main used methods within selector used in this lessons functions : 
        1) {if (elem.hasClass() ) {} } => If condition to test the hasClass() property
        2) {elem.each()} => to loop inside a group of elements with the same parent 
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
    alert('Hello to the JQ [hasClass()] Method ');

    var btn1 = $(".codes0 #check1"),
        btn2 = $(".codes0 #check2"),
        btn3 = $(".codes0 #check3"),
        list1 = $(".codes0 #list1 li"),
        list2 = $(".codes0 #list2 li"),
        list3 = $(".codes0 #list3 li");


    // II] Main functions Groups :

    // 1) First function : [ Loop checking on group of li elements inside ul ] -> To [ apply a css changes on the same element has the classname  ] -> {1 function}  ->
    btn1.click(function () {
        list1.each(function () {
            if ($(this).hasClass('active')) {
                $(this).css('color', 'red');
            }
        });
    });

    // ------------------------------------------------

    // 2) Second function : [ Loop checking on group of li children elements inside ul ] -> To [ apply a css changes on the {Parent of element} has the classname  ] -> {1 function}  ->

    btn2.click(function () {
        list2.each(function () {
            if ($(this).hasClass('active')) {
                $(this).parent().css('color', 'red');
                $(this).parent().parent().css('color', 'red');
            }
        });
    });

    // ------------------------------------------------

    // 3) Third function : [ Loop checking on group of li elements inside ul ] -> To [ apply a css changes on the {next, prev element} has the classname  ] -> {1 function}   ->

    btn3.click(function () {
        list3.each(function () {
            if ($(this).hasClass('active')) {
                $(this).next().css('color', 'red');
                $(this).prev().css('color', 'red');
            }
        });
    });

    // ------------------------------------------------
});
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------


