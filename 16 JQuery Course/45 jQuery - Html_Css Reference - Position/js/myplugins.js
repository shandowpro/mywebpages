//  45 jQuery - Html_Css Reference - Position
/* Main lessons functions :
    a) Main Effects References {part 5} ->  { position() }  =>   [ 1 ] function :
                                
        1) First function : [ Get element's location's position coordinates [inside it's parent] ] -> To [ display it's value  with in console , result element ] -> {1 function}         
        2) Second function [Using { position()} ] {1 function} -> [Set Element's Location position coordinates values (top , left) ] => {to simple display}  -> {1 function}         
        
    b) Main used methods within selector used in this lessons functions : 
        1) { click() } Event 
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
    alert('Hello to the JQ [position()] Method ');

    var btn1 = $(".codes0 #get"),
        btn2 = $(".codes0 #set"),
        elem1 = $(".codes0 .div1"),
        elem2 = $(".codes0 .div2"),
        topV = $(".codes0 .topV"),
        leftV = $(".codes0 .leftV"),
        elem3 = $(".Home");



    // II] Main functions Groups :

    // 1) First function : [ Get element's Position location's coordinates [General & specified] ] -> To [ display it's value  with in console , result element ] -> {1 function}  ->
    btn1.click(function () {
        console.log(elem1.position());
        elem1.text('This element position Top value = ' + elem1.position().top + ' || This element position Left value = ' + elem1.position().left);
    });

    // ------------------------------------------------

    // 2) Second function [Using { position()} ] {1 function} -> [Set Element's Position Location coordinates values (top , left) ] => {to simple display}   -> {1 function}  ->

    btn2.click(function () {
        elem2.position({
            top: topV.val(),
            left: leftV.val()
        })

        // Setting the window scrollTop value with element's New offset Top value :
        $(window).scrollTop(elem2.position().top);
        console.log('The new value of position Top of this element = ' + elem2.position().top);
        console.log('The new value of position Left of this element = ' + elem2.position().left);
    });

    // ------------------------------------------------

    // 3) Third function : [ this function will be applied in all other lessons ] -> {1 function}   ->

    $(window).scroll(function () {
        var windScroll = $(this).scrollTop(),
            elemTop = elem3.offset().top;
        // alert(elemTop);

        if (windScroll > 1000) {
            elem3.fadeIn();
        } else {
            elem3.fadeOut();
        }

    });
    // ------------------------------------------------
});
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------


