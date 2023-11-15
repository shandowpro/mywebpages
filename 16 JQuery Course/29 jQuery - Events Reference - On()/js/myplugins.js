//  29 jQuery - Events Reference - On()
/* Main lessons functions :
    a) Main Events References {part 4} -> {on()} =>  [ 4 ] Groups &  [ 8 ] functions :
                                
        1) First group [Add single & multiple event(s) by {on()} using {Main Element} ] [ 2 functions] 
        
        2) Second Group [Add Single & Multiple event(s) by {on()} using {both Element's Parent + Main Element} [ 2 functions] 
    
        3) Third Group : [Add Single & Multiple Custom event(s) by {on()} using {Main Element} [2 functions ] {without using addition pars}
        
        4) Fourth Group : [Add Single & Multiple Custom event(s) by {on()} using {Main Element} [2 functions ] {with using addition pars}
      
        5) Fifth Group : [Add Single & Multiple Event(s) by {on()} using {Map Events} [2 functions ]

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

// II] Functions buttons [ 2 ] main Groups functions :

$(document).ready(function () {
    // I] Definition of all elements :  
    var TagNameElem11 = $(".codes0 .g11 "),
        TagNameElem12 = $(".codes0 .g12 "),
        TagNameElem21 = $(".codes0 .g21 "),
        TagNameElem22 = $(".codes0 .g22 "),
        TagNameElem31 = $(".codes0 .g31 "),
        TagNameElem32 = $(".codes0 .g32 "),
        TagNameElem41 = $(".codes0 .g41 "),
        TagNameElem42 = $(".codes0 .g42 "),
        TagNameElem51 = $(".codes0 .g51 "),
        TagNameElem52 = $(".codes0 .g52 ");

    // II] Main functions Groups :
    // 1] First group [Add single & multiple event(s) by {on()} using {Main Element} ] [ 2 functions] :

    // a] Using { $("elem").on("eventName" , function(){}); } -> Add Single Event of [ change element text ] when [click] on a the same Element } by [on() method {without using elemet\'s parent} ] :
    TagNameElem11.click(function () {
        TagNameElem11.on("click", function () {
            alert('Welcome to Using { $("mainElem").on("eventName" , function(){}); } -> To Add single Event of [ change element text ] when click on a the same Element } by [on() method {without using elemet\'s parent} ]');
            $(TagNameElem11).text('You clicked on Me {with using only MainElem } ');
            TagNameElem11.focus();
        });
    });

    // b] Using { $("elem").on("eventName1 eventName2 " , function(){}); } -> Add Multiple Events of [ Toggling css properites ]  when [mouseenter & mouseleave] on a the same Element } by [on() method {without using elemet\'s parent} ] :

    TagNameElem12.click(function () {
        TagNameElem12.on("mouseenter mouseleave", function () {
            alert('Welcome to Using { $("mainElem").on("eventName1 eventName2" , function(){}); } -> To Add Multiple Events of [ Toggling css properites ] when [mouseenter & mouseleave] on a the same Element } by [on() method {without using elemet\'s parent} ]');
            $(TagNameElem12).toggleClass("color");
            TagNameElem12.focus();
        });
    });

    // ------------------------------------------------------
    // ------------------------------------------------------

    // 2] Second Group [Add Single & Multiple event(s) by {on()} using {both Element's Parent + Main Element} [ 2 functions]:

    // a] Using { $("elemParent").on("eventName", $('mainElem') , function(){}); } -> Add Single Event of [ change element text ] when [click] on a the same Element } by [on() method {with using both elemet\'s parent + main element} ] :
    TagNameElem21.click(function () {
        $('.codes0').on("click", TagNameElem21, function () {
            alert('Welcome to Using { $("elemParent").on("eventName" , "mainElem" , function(){}); } -> To Add single Event of [ change element text ] when click on a the same Element } by [on() method {with using both elemet\'s parent + main element} ]');
            TagNameElem21.text('You clicked on Me by using on() {with using both ElemParent + MainElem } ');
            TagNameElem21.focus();
        });
    });

    // b] Using { $("elemParent").on("eventName1 eventName2", $('mainElem') , function(){}); } -> Add Multiple Events of [ Toggling css properites ]  when [mouseenter & mouseleave] on a the same Element } by [on() method {with using both elemet\'s parent + main element} ] :
    TagNameElem22.click(function () {
        alert('Welcome to Using { $("elemParent").on("eventName1 eventName2", $("mainElem") , function(){});} -> To Add Multiple Events of [ Toggling css properites ] when [mouseenter & mouseleave] on a the same Element } by [on() method {with using both elemet\'s parent + main element} ]');
        $('.codes0').on("mouseenter mouseleave", TagNameElem22, function () {
            TagNameElem22.text('this element change by using on()');
            TagNameElem22.toggleClass("color");
            TagNameElem22.focus();
        });
    });
    // ------------------------------------
    // ------------------------------------
    // ------------------------------------------------------
    // ------------------------------------------------------

    // 3] Third Group : [Add Single & Multiple Custom event(s) {without using addition Pars} by {on()} using {Main Element} [2 functions ]:

    // a] Using { $("mainElem").on("customEvent", function(){}); } -> Add Single custom Event of [ change element text ] when [triggle()] on a the same Element } by [on() method {without using only main element} [without using addition Pars] ] :
    TagNameElem31.click(function () {

        TagNameElem31.on("custEvent", function (event) {
            alert('Welcome to Using $("mainElem").on("customEvent", function(){}); } -> Add Single custom Event of [ change element text ] when [triggle()] on a the same Element } by [on() method {without using only main element} [without using addition Pars] ]');
            $(TagNameElem31).text('You clicked on Me by using on() by using [custom event] {with using only MainElem } ');
            TagNameElem31.focus();
        });

        TagNameElem31.trigger("custEvent");
    });
    // ------------------------------------------------------
    // b] Using { $("mainElem").on("eventName1 eventName2" , function(){}); } -> Add Multiple custom Events of [ Toggling css properites ]  when [mouseenter & mouseleave] on a the same Element } by [on() method {with using only  main element} [without using addition Pars] ] :
    TagNameElem32.click(function () {
        TagNameElem32.on("custEvent1 custEvent2", function (event) {
            alert('Welcome to Using { $("mainElem").on("custEvent1 custEvent2" , function(){});} -> To Add Multiple Events of [ Toggling css properites ] when [mouseenter & mouseleave] on a the same Element } by [on() method {with using only main element} [with using addition Pars] ]');
            $(TagNameElem32).toggleClass("color");
            sTagNameElem32.focus();
        });

        TagNameElem32.trigger("custEvent1");
        TagNameElem32.trigger("custEvent2");

    });
    // ------------------------------------
    // ------------------------------------------------------
    // ------------------------------------------------------

    // 4] Fourth Group : [Add Single & Multiple Custom event(s) {with using addition Pars} by {on()} using {Main Element} [2 functions ]:

    // a] Using { $("mainElem").on("customEvent", function(event ,w , h , b){}); } -> Add Single custom Event of [ change multiple css props of pars values] by [triggle()] on a the same Element } by [on() method {with using only main element} [with using addition Pars] ] :
    TagNameElem41.click(function () {

        TagNameElem41.on("custEvent", function (event, w, h, b) {
            alert('Welcome to Using $("mainElem").on("customEvent", function(){}); } -> Add Single custom Event of [ change element text ] when [triggle()] on a the same Element } by [on() method {with using only main element} [without using addition Pars] ]');
            $(TagNameElem41).text('You clicked on Me by using on() by using [custom event] {with using only MainElem } => [apply mutliple css properties will be change] ');
            TagNameElem41.css({
                width: w,
                height: h,
                backgroundColor: b,
            });
            TagNameElem41.focus();
        });

        TagNameElem41.trigger("custEvent", ["300px", "100px", "red"]);
    });
    // -----------------------------------------------

    // b] Using { $("mainElem").on("customEvent1 cutomEvent2", function(event ,w , h , b){}); } -> Add multiple custom Events of [ change multiple css props of pars values] by [triggle()] on a the same Element } by [on() method {with using only main element} [with using addition Pars]  :
    TagNameElem42.click(function () {

        TagNameElem42.on("custEvent1 custEvent2 ", function (event, w, h, b) {
            alert('Welcome to Using $("mainElem").on("customEvent", function(){}); } -> Add Single custom Event of [ change element text ] when [triggle()] on a the same Element } by [on() method {with using only main element} [without using addition Pars] ]');
            $(TagNameElem42).text('You clicked on Me by using on() by using [custom event] {with using only MainElem } => [apply mutliple css properties will be change] ');
            TagNameElem42.css({
                width: w,
                height: h,
                backgroundColor: b,
            });
            TagNameElem42.focus();
        });

        TagNameElem42.trigger("custEvent1", ["300px", "100px", "red"]);
        TagNameElem42.trigger("custEvent2", ["500px", "200px", "blue"]);
    });
    // ------------------------------------
    // ------------------------------------------------------
    // ------------------------------------------------------

    // 5] Fifth Group : [Add Single & Multiple Event(s) by {on()} using {Map Events} [2 functions ]

    // a] Using { $("MainElem").on({"event" : function(){codes0} } ); } -> Adding Single event by {events map} when click on it {by on() method}  :

    // TagNameElem51.click(function () {

    TagNameElem51.on({

        click: function () {
            alert('Welcome to Using { $("MainElem").on({"event" : function(){codes0} } ); } -> Adding Single event by {events map} when click on it {by on() method} ');

            $('<input style="file"> <span style="color:red"> + </span> <br>').insertAfter(TagNameElem51);
            TagNameElem51.focus();
        }
    });

    // });

    // ---------------------------------------------------------

    // b] Using { $("MainElem").on({"event1" : function(){codes0}, "event2" : function(){codes0} } ); } -> Adding Multiple Events[with using Map Events ] of {Adding/creating new elements-responding to on events- after the this element} when click on it {by on() method} :

    TagNameElem52.click(function () {
        alert('Welcome to Using { $("MainElem").on({"event" : function(){codes0} } ); } -> Adding Single event by {events map} when click on it {by on() method} ');
        TagNameElem52.on({

            mouseenter: function () {
                TagNameElem52.text('You have Mouse enter on this element');
                TagNameElem52.css("color", "green");
            },

            mouseleave: function () {
                TagNameElem52.text('You have Mouse leave over this element');
                TagNameElem52.css({
                    'borderRadius': '50px',
                    'font': '50px',
                });
            },

            dblclick: function () {
                $('<input style="file"> <span style="color:red; cursor: pointer"> + </span> <br>').insertAfter(TagNameElem52);
            }
        });

    });
    // ------------------------------------
    // ------------------------------------------------------
    // ------------------------------------------------------

});
// ------------------------------------------------------
// ------------------------------------------------------
