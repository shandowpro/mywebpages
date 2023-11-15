//  35 jQuery - Events Reference - Select
/* Main lessons functions :
    a) Main Events References {part 10} -> {select()}  =>  [ 2 ] Groups &  [ 3 ] functions :
                                
        1) First function : [ simple Using {select();}  ] {1 function} ->  [assinging by using on() ] 
        1) Second function : [ advanced Using {select();} with callback function  ] {1 function} ->  [assinging by using on() ] 
        
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
    alert('Hello to the JQ [select] event ');
    var elem1 = $(".codes0 .elem1"),
        elem2 = $(".codes0 .elem2"),
        note = $(".codes0 .note");

    // II] Main functions Groups :
    // 1] First function : [ Adding single select Event by using {on()} method ] {1 function} [simple content of the assinged element] ->

    elem1.on("click", function () {
        $(this).select();
    });

    // ------------------------------------------------------
    // ------------------------------------------------------

    // 2] Second function : [ Adding advanced select Event by using {on()} method ] {1 function} [Select content + callback function of adding after text] ->

    elem2.on("click", function () {
        $(this).select(function () {

            $(this).after('you have selected textarea content ');
            note.fadeIn(1000).text('You have selected textarea content');
        });
    });

    // ------------------------------------------------------
    // ------------------------------------------------------
    // ------------------------------------------------------

});
