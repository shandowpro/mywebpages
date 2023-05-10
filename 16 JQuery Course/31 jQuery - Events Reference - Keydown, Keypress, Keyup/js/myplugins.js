//  31 jQuery - Events Reference - Keydown, Keypress, Keyup
/* Main lessons functions :
    a) Main Events References {part 6} -> {()} =>  [ 4 ] Groups &  [ 7 ] functions :
                                
        1) First Group : [ Using {keydown();} ] {2 functions} ->  [by using on() & default method] 
        
        2) Second Group : [ Using {keypress();} ] {2 functions} ->  [by using on() & default method] 
        
        3) Third Group : [ Using {keyup();} ] {2 functions} ->  [by using on() & default method] 
        
        4) Fourth Group [Advanced example about live preview display ] [ 1 functions] 
    
    b) Main used methods within selector used in this lessons functions : 
        1) Single and nested functions 
        2) Combined Grouped functions
  
  c) Note => {on()} method is deprecated will not work on JQ versions starting from [1.7 and above]
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

// II] Functions buttons [ 4 ] main Groups functions :

$(document).ready(function () {
    'use strict';
    // I] Definition of all elements :  
    var TagNameElem11 = $(".codes0 .g11 "),
        TagNameElem12 = $(".codes0 .g12 "),
        TagNameElem21 = $(".codes0 .g21 "),
        TagNameElem22 = $(".codes0 .g22 "),
        TagNameElem31 = $(".codes0 .g31 "),
        TagNameElem32 = $(".codes0 .g32 "),
        disp = $(".codes0 #inputn"),
        advTitle = $('.codes0 .g41t'),
        advCont = $('.codes0 .g41c'),
        advDisp = $('.codes0 .g41');

    // II] Main functions Groups :
    // 1] First Group : [ Adding {keydown();} ] {2 functions} ->  [by using on() & default method] :

    // a] Using { keydown(); } main Method -> To process a certain action or effect ] :
    // TagNameElem11.click(function () {
    disp.keydown(function () {
        // alert('Welcome to Using {keydown();} Event -> {by using keydown() main method } ');
        TagNameElem11.text('The input element has been keydown');
        TagNameElem22.css("width", "700px");
        TagNameElem21.focus();
        // TagNameElem11.text('This element has been keydown by {keydown()} main method ');
    });
    // });

    // b]  Using { on("keydown" , function(){}); } on() Method -> To process a certain action or effect ] :
    // TagNameElem12.click(function () {
    disp.on("keydown", function () {
        // alert('Welcome to Using { "keydown" } Event -> {by using on(); Adding event {keydown()} method } ');
        TagNameElem12.text('The input element has been keydown');
        TagNameElem22.css("font-size", "50px");
        TagNameElem21.focus();
    });
    // });
    // ------------------------------------------------------
    // ------------------------------------------------------

    // 2] Second Group : [ Adding {keypress();} to a certain element]  {2 functions}  :

    // a] Using { keypress(); } main Method -> To process a certain action or effect ] :
    // disp.click(function () {
    disp.keypress(function () {
        // alert('Welcome to Using {keypress();} Event -> {by using keypress() main method } ');
        TagNameElem21.text('The input element has been keydown by {keypress()} main method ');
        TagNameElem21.css("color", "blue");
        TagNameElem21.focus();
    });
    // });

    // b]  Using { on("keypress" , function(){}); } on() Method -> To process a certain action or effect ] :
    // TagNameElem22.click(function () {
    disp.on("keypress", function () {
        // alert('Welcome to Using { "keypress" } Event -> {by using on(); Adding event {keypress()} method } ');
        TagNameElem22.text('This element has been keypress by using on()');
        TagNameElem22.css("background", "red");
        TagNameElem22.focus();
    });
    // });

    // ------------------------------------------------------
    // ------------------------------------------------------

    // 3] Third Group : [ Adding {keyup();} to a certain element]  {2 functions}  :

    // a] Using { keyup(); } main Method -> To process a certain action or effect ] :
    // TagNameElem31.click(function () {
    disp.keyup(function () {
        // alert('Welcome to Using {keyup();} Event -> {by using keyup() main method } ');
        TagNameElem31.text('This element has been keydown by {keyup()} main method ');
        TagNameElem31.css('border', 'solid red 50px');
        TagNameElem31.focus();
    });
    // });

    // b]  Using { on("keyup" , function(){}); } on() Method -> To process a certain action or effect ] :
    // TagNameElem32.click(function () {
    disp.on("keyup", function () {
        // alert('Welcome to Using { "keyup" } Event -> {by using on(); Adding event {keyup()} method } ');
        TagNameElem32.text('This element has been keyup by using on()');
        TagNameElem32.css('border-radius', '50px');
        TagNameElem32.focus();
    });
    // });

    // ------------------------------------------------------
    // ------------------------------------------------------

    // 4] Fourth Group : [ using {keyup();} to display a certain Adverstisment Title & contents in a certain element's value]  {2 functions}  :

    // a] Using { keyup(); } main Method -> To process a certain action or effect ] :
    // Adding the value of the Advertisment title to the Title preview  : 
    advTitle.keyup(function () {
        $('.g41 h3').text($(this).val());
    });

    // Adding the value of the Advertisment contents to the Contents preview  :
    advCont.keyup(function () {
        $('.g41 p').text($(this).val());
    });

    // ------------------------------------------------------
    // ------------------------------------------------------

});
