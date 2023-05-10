//  33 jQuery - Events Reference - Focus, Blur
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
    alert('Hello to the JQ change event ');
    var input1 = $(".codes0 .input1"),
        input21 = $(".codes0 .input21"),
        input22 = $(".codes0 .input22"),
        note1 = $(".codes0 .notice1"),
        note21 = $(".codes0 .notice21"),
        note22 = $(".codes0 .notice22");

    // II] Main functions Groups :
    // 1] First method : [ Adding {focus()} ] {1 function} ->  [by using on() ] :

    // Adding focus() event to the input -> to process certain effect and message :
    input1.on("focus", function () {
        note1.fadeIn(1000, function () {
            $(this).fadeOut(2000);
        }).text('You has just focus on the input field');
    });

    // ------------------------------------------------------
    // ------------------------------------------------------

    // 2] Second Group : [ Adding {blur()} to a certain element]  {2 functions}  :

    // a) Adding blur() event to the input -> to process certain effect and message :
    input1.on("blur", function () {
        note1.fadeIn(1000, function () {
            $(this).fadeOut(2000);
        }).text('You has just blur on the input field');
    });

    // b) Adding blur() event to the input -> to process validiation [effect + message] with using if condition :
    // 1) validating the inserted name value : 
    input21.on("blur", function () {
        if ($(this).val() === 'shadi') {
            note21.fadeIn(1000, function () {
                $(this).fadeOut(2000);
            }).text('Hello ' + $(this).val() + ' , You has just blur on the input field');

        } else {
            note21.fadeIn(1000, function () {
                $(this).fadeOut(2000);
            }).text('Sorry ' + $(this).val() + ' , You are not authorized in this input field');

        }
    });

    // 2) validating the inserted count value : 
    input22.on("blur", function () {
        if ($(this).val().length <= 10) {
            note22.fadeIn(1000, function () {
                $(this).fadeOut(2000);
            }).text('Hello ' + $(this).val() + ' correct entry! ');

        } else {
            note22.fadeIn(1000, function () {
                $(this).fadeOut(2000);
            }).text('Sorry ' + $(this).val() + ' wrong entry[exceded limit] , must be smaller or equal  10');
        }
    });



    // ------------------------------------------------------
    // ------------------------------------------------------

});
