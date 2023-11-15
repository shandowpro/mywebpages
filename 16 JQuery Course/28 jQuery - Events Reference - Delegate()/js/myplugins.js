//  28 jQuery - Events Reference - Delegate()
/* Main lessons functions :
    a) Main Events References {part 3} -> {delegate()} =>  [ 3 ] Groups &  [ 7 ] functions :
                                
        1) First group [Creating new events by {default method}] [ 3 functions] 
        
        2) Second Group [ Single & Multiple events functions by {delegate()} Method ] 
    
        3) Third Group : [  Single & Multiple Custom events functions by {delegate()} Method ] -> Adding/creating new elements ]

    b) Main used methods within selector used in this lessons functions : 
        1) Single and nested functions 
        2) Combined Grouped functions
  
  c) Note => {delegate()} method is deprecated will not work on JQ versions starting from [1.7 and above]

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
        TagNameElem31 = $(".codes0 .g31 "),
        TagNameElem32 = $(".codes0 .g32 ");

    // II] Main functions Groups :
    // 1] First Group : [Single & Multiple events functions by {default method} ] :

    // a] Using { $("elem").event(function(){}); } -> Adding Single Event of {Adding/creating new elements after the this element} when click on it {by default method}  :
    TagNameElem11.click(function () {
        alert('Welcome to Using { $("elem").event(function(){}); } -> To Add [ Single delegate Event of (adding/creating new element after the clicked element) ] when click on a the same Element } by [default method : without using {Bind()}');
        $('<input style="file"> <span style="color:red"> + </span> <br>').insertAfter(TagNameElem11);
        TagNameElem11.focus();
    });


    // b] Using { $("elem").event(function(){}); } -> Adding Multiple Events [click + mouseenter] of {Adding/creating new elements after the this element} when click on it {by default method}  :
    // First Event {click() -> Adding several elements }: 
    TagNameElem12.mouseenter(function () {
        alert('Welcome to Using { $("elem").event(function(){}); } -> To Add [ Event of adding/creating new element after the clicked element  ] to a certain Element } by [default method : without using {Bind()}');
        TagNameElem12.css("color", "red");
    });

    // Second Event {mouseleave() -> Changing CSS properties[color] }:
    TagNameElem12.mouseleave(function () {
        alert('Welcome to Using { $("elem").event(function(){}); } -> To Add [ Event of adding/creating new element after the clicked element  ] to a certain Element } by [default method : without using {Bind()}');
        TagNameElem12.css("color", "blue");
    });

    // ------------------------------------------------------
    // ------------------------------------------------------

    // 2] Second Group : [Single & Multiple events functions by {delegate()} method ] :

    // a] Using { $("elem").delegate("EventName", function(){codes0}); } -> Adding Single Event of {Adding/creating new elements-responding to delegate events- after the this element} when click on it {by delegate() method}  :

    TagNameElem21.click(function () {

        // $(this).mouseenter(function () {

        $('.codes0').delegate(TagNameElem21, "click", function () {
            alert('Welcome to Using { $("elemParent").delegate( "elem" ,"EventName" , function(){codes0}); } -> Adding Single Event of {Adding/creating new elements-responding to delegate events- after the this element} when click on it {by delegate) method} ');

            $('<input style="file"> <span> + </span> <br>').insertAfter(TagNameElem21);
            TagNameElem21.css("color", "red");
            TagNameElem21.css("font", "40px");
            TagNameElem21.focus();
        });

        // });
    });

    // ------------------------------------

    // b] Using { $("elem").delegate({"EventName1 EventName2" ,function(){unified codes0} } ); } -> Adding Multiple Events[without using Event map] of {Adding/creating new elements-responding to delegate events- after the this element} when click on it {by delegate() method} :

    TagNameElem22.click(function () {

        $('.codes0').delegate(TagNameElem22, "click mouseenter", function () {

            alert('Welcome to Using { $("elemParent").delegate("elem" , "EventName1 EventName2 ", function(){codes0}); } -> Adding Multiple Events of {Adding/creating new elements-responding to delegate events- after the this element} when click on it {by delegate) method} ');

            $('<input style="file"> <span style="color:red; cursor: pointer"> + </span> <br>').insertAfter(TagNameElem22);

            TagNameElem22.css('color', 'blue');
            TagNameElem22.focus();

        });

    })
    // ------------------------------------
    // ------------------------------------------------------
    // ------------------------------------------------------

    // 3] Third Group : [Single & Multiple custom events functions by {delegate()} method ] :

    // a] Using { $("elemParent").delegate("elem" , "Custevent", function(){codes0}); } -> Adding Single Custom Event of {Adding/creating new elements-responding to delegate events- after the this element} when click on it {by delegate() method}  :

    TagNameElem31.click(function () {

        $('.codes0').delegate(TagNameElem31, "custevent", function (event) {
            alert('Welcome to Using { $("elemParent").delegate( "elem" ,"custevent" , function(){codes0}); } -> Adding Single Event of {Adding/creating new elements-responding to delegate events- after the this element} when click on it {by delegate) method} ');

            $('<input style="file"> <span> + </span> <br>').insertAfter(TagNameElem31);
            TagNameElem31.focus();
        });

        TagNameElem31.trigger('custevent');

    });

    // $('body').delegate(TagNameElem21, "mouseenter", function () { $(this).css("color", "red") });
    // ------------------------------------

    // b] Using { $("elemParent").delegate( "elem" , "Custevent1 Custevent2" ,function(){unified codes0} ); } -> Adding Multiple Custom Events[with using custom Event ] of {Adding/creating new elements-responding to delegate events- after the this element} when click & mouseenter on it {by delegate() method} :

    TagNameElem32.click(function () {
        $('.codes0').delegate(TagNameElem32, "custevent1 custevent2", function (event) {

            alert('Welcome to Using { $("elemParent").delegate("elem" , "custevent1 custevent2 ", function(){codes0}); } -> Adding Multiple custom Events of {Adding/creating new elements-responding to delegate events- after the this element + css props} when click on it {by delegate) method} ');

            $('<input style="file"> <span style="color:red; cursor: pointer"> + </span> <br>').insertAfter(TagNameElem32);

            TagNameElem32.css({
                'color': 'green',
                'font': '50px',

            });
            TagNameElem32.focus();

        });
        $(TagNameElem32).trigger('custevent1');
        $(TagNameElem32).trigger('custevent2');
    });
    // ------------------------------------
    // ------------------------------------------------------
    // ------------------------------------------------------

});
// ------------------------------------------------------
// ------------------------------------------------------
