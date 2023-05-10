//  34 jQuery - Events Reference - One
/* Main lessons functions :
    a) Main Events References {part 8} -> {blur()} & {focus()} =>  [ 2 ] Groups &  [ 3 ] functions :
                                
        1) First Group : [ Using {focus();} in advanced live data preveiew ] {1 function} ->  [by using on() ] 
        2) Second Group : [ Using {blur();} in advanced live data preveiew + Checking Validity] {2 function} ->  [by using on() ] 
        
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

$(document).ready(function () {
    'use strict';

    // I] Definition of all elements :  
    alert('Hello to the JQ [one] event ');
    var elem1 = $(".codes0 .elem1"),
        elem2 = $(".codes0 .elem2");

    // II] Main functions Groups :
    // 1] First function : [ Adding single Event by using {one()} method ] {1 function} ->

    elem1.one("click", function () {
        $(this).animate({
            fontSize: "+=5px"
        });
    });

    // ------------------------------------------------------
    // ------------------------------------------------------
    // 1] First function : [ Adding multiple Events by using {one()} method ] {1 function} ->

    elem2.one("click dblclick", function () {
        $(this).animate({
            fontSize: "+=5px"
        });
    });

    // ------------------------------------------------------
    // ------------------------------------------------------
    // ------------------------------------------------------
    // ------------------------------------------------------

});
