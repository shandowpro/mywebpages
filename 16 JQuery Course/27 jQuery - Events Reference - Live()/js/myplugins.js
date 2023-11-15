//  27 jQuery - Events Reference - Live()
/* Main lessons functions :
    a) Main Events References {part 2} -> {Live()} =>  [  ] Groups &  [  ] functions :
                                
        1) First Group : [ Single & Multiple events functions by default method ] 

        2) Second Group : [ Single & Multiple[by Events Map || Not] events functions by live() Method ]
         
    b) Main used methods within selector used in this lessons functions : 
        1) Single and nested functions 
        2) Combined Grouped functions
  
  c) Note =>  {live()} method  will not work on JQ versions starting from [1.7 and above]

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
    // I] Definition of all elements :  
    var TagNameElem11 = $(".codes0 .g11 "),
        TagNameElem12 = $(".codes0 .g12 "),
        TagNameElem21 = $(".codes0 .g21 "),
        TagNameElem22 = $(".codes0 .g22 "),
        TagNameElem23 = $(".codes0 .g23 ");

    // II] Main functions Groups :
    // 1] First Group : [Single & Multiple events functions by {default method} ] :

    // a] Using { $("elem").event(function(){}); } -> Adding Single Event of {Adding/creating new elements after the this element} when click on it {by default method}  :
    TagNameElem11.on("click", function () {
        alert('Welcome to Using { $("elem").event(function(){}); } -> To Add [ Single Live Event of (adding/creating new element after the clicked element) ] when click on a the same Element } by [default method : without using {Bind()}');
        $('<input style="file"> <span style="color:red"> + </span> <br>').insertAfter($(this));
        $(this).focus();
    });

    // TagNameElem11.on("mouseenter", function () { $(this).css("color", "red") });

    // TagNameElem11.live("mouseenter", function () { $(this).css("color", "red") });


    // b] Using { $("elem").event(function(){}); } -> Adding Multiple Events [click + mouseenter] of {Adding/creating new elements after the this element} when click on it {by default method}  :
    // First Event {click() -> Adding several elements }: 
    TagNameElem12.on("mouseenter", function () {
        alert('Welcome to Using { $("elem").event(function(){}); } -> To Add [ Event of adding/creating new element after the clicked element  ] to a certain Element } by [default method : without using {Bind()}');
        $('<input style="file"> <span style="color:red"> + </span> <br>').insertAfter($(this));
    });

    // Second Event {mouseenter() -> Changing CSS properties[color + background] }: 
    TagNameElem12.live("click", function () {
        $(this).css("color", "red");
        $(this).css("background-color", "blue");
        $(this).focus();
    });

    // ------------------------------------------------------
    // ------------------------------------------------------

    // 2] Second Group : [Single & Multiple events functions by {live()} method ] :

    // a] Using { $("elem").live("EventName", function(){codes}); } -> Adding Single Event of {Adding/creating new elements-responding to live events- after the this element} when click on it {by live() method}  :

    // TagNameElem21.on("click", function () {
    //     alert('Welcome to Using { $("elem").live("EventName" , function(){codes}); } -> Adding Single Event of {Adding/creating new elements-responding to live events- after the this element} when click on it {by live) method} ');

    //     $('<input style="file"> <span> + </span> <br>').insertAfter($(this));
    //     $(this).focus();
    // });

    TagNameElem21.on("mouseenter", function () { $(this).css("color", "red") });
    // ------------------------------------

    // b] Using { $("elem").live({"EventName1 EventName2" ,function(){unified codes} } ); } -> Adding Multiple Events[without using Event map] of {Adding/creating new elements-responding to live events- after the this element} when click on it {by live() method} :
    TagNameElem22.on("click mouseenter", function () {
        // First Event {click() -> Adding several elements }: 

        alert('Welcome to Using { $("elem").live("EventName1 EventName2 ", function(){codes}); } -> Adding Multiple Events of {Adding/creating new elements-responding to live events- after the this element} when click on it {by live) method} ');

        $('<input style="file"> <span style="color:red; cursor: pointer"> + </span> <br>').insertAfter($(this));

        // $(this).css('color', 'green');
        // $(this).focus();

    });
    // ------------------------------------

    // c] Using { $("elem").live( {"EventName1":function(){codes} ,"EventName2":function(){seperated Uniqe codes} } ); } -> Adding Multiple Events[using Event map] of {Adding/creating new elements-responding to live events- after the this element} when click on it {by live() method} :
    TagNameElem23.on({
        // First Event {click() -> Adding several elements }: 
        "click": function () {
            alert('Welcome to Using { $("elem").live( {"EventName1":function(){codes} ,"EventName2":function(){seperated Uniqe codes} } ); } -> Adding Multiple Events[using Event map] of {Adding/creating new elements-responding to live events- after the this element} when click on it {by live) method} ');
            $('<input style="file"> <span style="color:red; cursor: pointer"> + </span> <br>').insertAfter($(this));
        },

        // Second Event {mouseenter() -> Changing CSS properties }:
        "mouseenter": function () {
            $(this).css('color', 'green');
            $(this).focus();
        }
    });

    // ------------------------------------------------------
    // ------------------------------------------------------

});
// ------------------------------------------------------
// ------------------------------------------------------
