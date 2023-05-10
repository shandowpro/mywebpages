//  42 jQuery - Html_Css Reference - Detach
/* Main lessons functions :
    a) Main Effects References {part 3} -> { detach() }  =>   [ 1 ] function :
                                
        1) First function : [ Testing removed {by Using of remove() & detach()} and added Element Respondence to the added Event ] -> {2 function}         
        
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
    alert('Hello to the JQ [detach()] Method ');

    var elem = $(".codes0 #elem"),
        elem2 = $(".codes0 #elem2"),
        defRemove = $(".codes0 #dRemove"),
        detachR = $(".codes0 #detachR"),
        add = $(".codes0 #add"),
        add2 = $(".codes0 #add2");


    // II] Main functions Groups :

    // 1) First function : [ Removing element by remove() & add it again ] -> To [ Test the element's responding to the defined Event ] -> {1 function}    ->
    defRemove.click(function () {
        elem.remove();
    });

    // detachR.click(function () {
    //     elem.detach();
    // });

    add.click(function () {
        $(".codes0 #firstH").after(elem);
    });

    elem.on('click', function () {
        $(this).css('color', 'gold');
    });
    // ------------------------------------------------

    // 2) Second function : [ Removing element by detach() & add it again ] -> To [ Test the element's responding to the defined Event ] -> {2 function}    ->
    // defRemove.click(function () {
    //     elem.remove();
    // });

    detachR.click(function () {
        elem2.detach();
    });

    add2.click(function () {
        $(".codes0 #secondH").after(elem2);
    });

    elem2.on('click', function () {
        $(this).css('color', 'gold');
    });
    // ------------------------------------------------

});

    // ------------------------------------------------------
    // ------------------------------------------------------

    // ------------------------------------------------------
    // ------------------------------------------------------
    // ------------------------------------------------------
    // ------------------------------------------------------


