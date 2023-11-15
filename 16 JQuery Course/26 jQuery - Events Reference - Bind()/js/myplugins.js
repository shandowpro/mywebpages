//  26 jQuery - Events Reference - Bind()
/* Main lessons functions :
    a) Main Events References {part 1} -> {Bind()} =>  [5] Groups &  [  ] functions :
                                
        1) First Group : [ Single & Multiple events functions by Default Method [without using {bind()} method ] ]  

        2) Second Group : [ Single & Multiple events functions by Bind() Method (without using {Events Map} ) ]

        3) Third Group : [ Single & Multiple events functions by Bind() Method (with using {Events Map} ) ]
        
        4) Fourth Group : [ Single & Multiple events functions by Bind() Method (with using {Custom Event - without Pars} ) ] 

        5) Fifth Group : [ Single & Multiple events functions by Bind() Method (with using {Custom Event - with Pars} ) ] 
         
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

// II] Functions buttons [ 5 ] main Groups functions :

$(document).ready(function () {

    // I] Variables Definition of whole web applications :
    var TagNameElem11 = $(".codes0 .g11 "),
        TagNameElem12 = $(".codes0 .g12 "),
        TagNameElem21 = $(".codes0 .g21 "),
        TagNameElem22 = $(".codes0 .g22 "),
        TagNameElem31 = $(".codes0 .g31 "),
        TagNameElem32 = $(".codes0 .g32 "),
        TagNameElem41 = $(".codes0 .g41 "),
        TagNameElem42 = $(".codes0 .g42 "),
        TagNameElem51 = $(".codes0 .g51 "),
        TagNameElem52 = $(".codes0 .g52 "),
        TagNameElem61 = $(".codes0 .g61 ");


    // II] Events Definition :

    // 1] First Group : [ Adding Events to elements by {Default Method} ] :

    // a] /1] {click()} :: Using { $("elem").event(function(){}); } -> Top Add  [ Single Event function ] to a certain Element } by [default method : without using {Bind()} ] :
    TagNameElem11.click(function () {
        alert('Welcome to Using { $("elem").event(function(){}); } -> To Add [ Single Event function ] to a certain Element } by [default method : without using {Bind()}');
        $(this).text('{click()} event => This element\'s text has been changed by using Default {onmouseenter} event -> To [change Text]  ');
        $(this).focus();
    });

    // });

    // ------------------------------------------------------
    // ------------------------------------------------------

    // a] /2] {mouseenter()} & {mouseleave()} :: Using [ $("elem").event1(function(){}); || $("elem").event2(function(){}); || $("elem").event3(function(){}); ] -> [Add Multiple Events Using to an Element by {default method : without using Bind()} ]  :

    // Adding and Applying {mouseenter} to the Element by default method :  
    TagNameElem12.mouseenter(function () {
        alert('{mouseenter} : Welcome to Using [ $("elem").event1(function(){}); || $("elem").event2(function(){}); || $("elem").event3(function(){}); ] -> [Add multiple Events Using to an Element by {default method : without using Bind()} ] ');
        $(this).text('This element\'s text has been changed by using Default {onmouseenter} event -> To [change Text]  ');
        $(this).css('color', 'red');
        $(this).focus();
    });

    // Adding and Applying {mouseleave} to the Element by default method :
    TagNameElem12.mouseleave(function () {
        $(this).text('{mouseleave} : This element\'s text has been changed by using Default {onmouseleave} event -> To [change Text]  ');
        $(this).css('color', 'blue');
        $(this).focus();
    });

    // });

    // ------------------------------------------------------
    // ------------------------------------------------------
    // ------------------------------------------------------
    // --------------------------------------------------------
    // ------------------------------------------------------

    // 2] Second Group : [Adding Event(s) to elements by {bind()} Method - without using Event map -} ] {2 function} :

    // b] /1] {click()} -> {bind("mouseenter")} : Using {$("elem").bind("eventName", function(){});} => To Add [Adding Event(s) to elements by {bind()} Method - without using Event Map -} ]  :
    TagNameElem21.click(function () {

        // Adding Event to the element by [bind() + NO event Map] method :  
        TagNameElem21.bind("mouseenter", function () {
            alert('{click()-> bind(mouseenter} : Welcome to Access to Using {$("elem").bind("eventName", function(){});} => To Add [ Multiple Event(s) to elements by {bind()} Method - without using Event Map -} ] ');
            $(this).css('color', 'red');
            // $(this).toggleClass('.color');
            $(this).focus();
        });
    });

    // ------------------------------------------------------
    // ------------------------------------------------------

    // b] /2] {click() ->  bind( mouseenter() & mouseleave() )} : Using {$("elem").bind("eventName1 eventName2 eventName3" , function(){} ); } -> To Add [ Multiple Event function ] to Add event to a certain Element (without using {Events Map}) } :
    TagNameElem22.click(function () {

        // Adding Event to the element by [bind() + NO event Map] method :  
        TagNameElem22.bind("mouseenter mouseleave", function () {
            alert('{click() ->  bind( mouseenter() & mouseleave() )} : Welcome to Access to Using Using {$("elem").bind("eventName1 eventName2 eventName3" , function(){} ); } -> To Add [ Multiple Event function ] to Add event to a certain Element (without using {Events Map}) } ');
            $(this).css({
                'color': 'gold',
                'font-size': '30px',
            });
            $(this).focus();
        });

    });

    // ------------------------------------------------------
    // ------------------------------------------------------
    // ------------------------------------------------------
    // --------------------------------------------------------
    // ------------------------------------------------------


    // 3] Third Group : [ Single & Multiple events functions by Bind() Method (with using {Events Map} ) ]   {2 functions} :

    // c] /1] {click() ->  bind( mouseenter() )} Using {$("elem").bind(eventName1: function1(){}); } =>  To Add [ Single event function by Bind() Method (with using {Events Map} )  :

    TagNameElem31.click(function () {

        // Adding Event to the element by [bind() + event Map] method :  
        TagNameElem31.bind({
            mouseenter: function () {
                alert('{click() ->  bind( mouseenter() )} :: Welcome to alert(\'Welcome to Using { $("elem").bind("eventName", function () { }); } => To Add[Single Event(s) to elements by { bind() } Method - without using Event Map -} ]');
                // $(this).toggleClass('color');
                $(this).text('This elment has been effected by event {mouseenter} by using the {bind()} & {event map}');
                $(this).focus();
            }
        })
    });

    // ------------------------------------------------------
    // ------------------------------------------------------

    // c] /2] click() -> bind(mouseenter() , mouseleave() , click()) } :: Using { $("elem").bind(eventName1: function1(){}, eventName2: function2(){} , eventName3: function3(){} ); } => To Add [Multiple events functions by Bind() Method(with using {Events Map } ) :
    TagNameElem32.click(function () {

        alert('{click() -> bind(mouseenter() & mouseleave() & click()) } :: Welcome to Using { $("elem").bind(eventName1: function1(){}, eventName2: function2(){} , eventName3: function3(){} ); } => To Add [Multiple events functions by Bind() Method(with using {Events Map } ');

        // Adding Multiple Events to the element by [{bind(3 events)} + {event Map} ] method :  
        TagNameElem32.bind({
            mouseenter: function () {
                // $(this).toggleClass('color');
                $(this).text('This element has been effected by event {mouseenter} by using the bind() & event map');
                $(this).css(
                    {
                        'color': 'green',
                        'background-color': 'yellow',
                    });
                $(this).focus();
            },
            mouseleave: function () {
                // $(this).toggleClass('color');
                $(this).text('This element has been effected by event {mouseleave} by using the bind() & event map');
                $(this).css(
                    {
                        'color': 'yellow',
                        'background-color': 'green',
                    });
                // $(this).focus();
            },
            click: function () {
                // $(this).toggleClass('color');
                $(this).text('This element has been effected by event {click} by using the bind() & event map');
                $(this).css({
                    'color': '#fff',
                    'background-color': '#111',
                });
                $(this).focus();
            },
        })
    });
    // ------------------------------------------------------
    // ------------------------------------------------------
    // -------------------------------------------------------
    // ------------------------------------------------------


    // 4] Fourth Group : [ Single & Multiple events functions by {Bind()} + {trigger()} Method (with using {Custom Event + trigger()} - without Pars[only Event parameter - without using EventMap] ) ]   :

    // d] /1] Using {$("elem").bind("eventName1", function1(EventPar){});} => To Add [ Single event functions by Bind() Method (with using {Custom Event - without Pars - without using EventMap} ) ]   :

    TagNameElem41.click(function () {

        alert('{click() -> bind( myCustEvent() ) } :: Welcome to Using { $("elem").bind("eventName", function () { }); } => To Add [Single Event to element by {Bind()} + {trigger} Method (with using {Custom Event - without Pars  - without using Event Map} ) ]');

        // Adding Event to the element by [bind() + trigger() + Custom Event ] method :  
        TagNameElem41.bind("myCustEvent", function (event) {
            $(this).css('color', 'blue').fadeOut(1000);
            $(this).text('This elment has been effected by event {mouseenter} by using the {bind()} & {customEvent} & {trigger()}');
            $(this).focus();
        });

        TagNameElem41.trigger("myCustEvent");

        // "onmouseenter": function () {
        //     // $(this).toggleClass('color');
        //     $(this).text('This elment has been effected by event {mouseenter} by using the {bind()} & {event map}');
        //     $(this).focus();
        // }

    });
    // ------------------------------------------------------
    // ------------------------------------------------------

    // d] /2] Using [ Multiple events functions by Bind() Method (with using {Custom Event - without Pars} ) ]   :
    TagNameElem42.click(function () {

        alert('{click() -> bind(2 customEvents)} :: Welcome to Using { $("elem").bind("customEvent1 customEvent2", function () { }); & trigger() } => To Add [Single Event to element by {Bind()} + {trigger} Method (with using {Custom Event - without Pars  - without using Event Map} ) ]');

        // Adding 2 Events to the element by [bind() + trigger() + 2 Custom Event ] method :  
        TagNameElem42.bind("myCustEvent1 myCustEvent2 ", function (event) {
            $(this).text('This element has been effected by multiple events {customEvent1 & customEvent2} by using the {bind()} & {2 customEvents} & {trigger()}');
            $(this).animate({
                width: "800px",
                height: "300px",
            }, 1000);
        });

        TagNameElem42.bind("myCustEvent3", function (event, w, h, o) {
            $(this).css("background", "green");
            $(this).fadeIn(1000);
            $(this).focus();
        })

        TagNameElem42.trigger("myCustEvent1");
        TagNameElem42.trigger("myCustEvent2");
        TagNameElem42.trigger("myCustEvent3");

    });
    // ------------------------------------------------------
    // ------------------------------------------------------
    // ------------------------------------------------------
    // ------------------------------------------------------

    // 5] Fifth Group : [ Single & Multiple events functions by Bind() + {Event Map} + {Custom Event} Methods (with using {Custom Event - without Pars / with pars} ) ] -> {3 functions } :

    // e] /1] Using $("elem").bind("CusteventName1", function(EventPar , par1 , par2 , par3){});] & [$("elem").trigger("EventPar" , ["par1value" , "par2value" , "par3value"]);} => To Add [ Single events functions by Bind() + trigger()   Method (with using {Custom Event - without Pars} ) ]  :
    TagNameElem51.click(function () {

        alert('{click() -> bind(customEvent) & trigger() & EventMap } :: Welcome to Using { $("elem").bind({"CusteventName1", function (EventPar, par1, par2, par3) {} } );] & [$("elem").trigger("EventPar", ["par1value", "par2value", "par3value"]); } => To Add[Single Event to element by { Bind() } + { trigger } Method(with using {Custom Event - with Pars - with using Event Map } ) ]');

        // Adding single custom Event to the element by [bind() + trigger() + Custom Event - with Pars- ] method :  
        TagNameElem51.bind({
            myCustEvent: function (event, name, age) {
                $(this).css('color', 'green');
                $(this).text('This elment has been effected by event {customEvent} by using the {bind(pars)} & {event map} ' + 'Name is: ' + name + ' Age is ' + age);
                $(this).focus();
            },
        });

        TagNameElem51.trigger("myCustEvent", ["Shadi", "33"]);

    });

    // ------------------------------------------------------
    // ------------------------------------------------------

    // e] /2] Using [ Multiple custom events functions by [Bind() + trigger() + {Event map} ]  Methods (with using {Custom Event - with Pars} ) ] :
    TagNameElem52.click(function () {

        alert('Welcome to Using { $("elem").bind("CusteventName1", function(EventPar , par1 , par2 , par3){});] & [$("elem").trigger("EventPar" , ["par1value" , "par2value" , "par3value"]); ] } => To Add [Multiple Event to element by {Bind()} + {trigger} Method (with using {Custom Event - with Pars  - with using Event Map} ) ]');

        // Adding custom Events to the element by [bind() + trigger() + Custom Event - with Pars ] method :  
        TagNameElem52.bind({
            myCustEvent1: function (event, name, age) {
                $(this).css({
                    'background': 'blue',
                    'color': 'red',
                    'font': '35px',
                });

                $(this).text('This elment has been effected by event {customEvent1} + {customEvent2}  by using the {bind(pars)} & {event map} ' + 'Name is: ' + name + ' Age is ' + age);
                // $(this).focus();
            },

            myCustEvent2: function (event, w, h) {
                $(this).width(w);
                $(this).height(h);
                $(this).focus();
            },

        });

        TagNameElem52.trigger("myCustEvent1", ["Shadi", "33"]);
        TagNameElem52.trigger("myCustEvent2", ["500px", "200px"]);

    });
    // ------------------------------------------------------
    // ------------------------------------------------------

    // 6] Sixth Group : [Applying CSS properties + Effects events] by Bind() + {Event Map} + {Custom Event} Methods (with using {Custom Event - with pars} ) ] -> { 1  functions } :
    // e] /1] Using $("elem").bind("CusteventName1", function(EventPar , par1 , par2 , par3){});] & [$("elem").trigger("EventPar" , ["par1value" , "par2value" , "par3value"]);} => To Add [ Single events functions by Bind() + trigger()   Method (with using {Custom Event - without Pars} ) ]  :
    TagNameElem61.click(function () {

        alert('Welcome to Using { $("elem").bind("CusteventName1", function(EventPar , par1 , par2 , par3){});] & [$("elem").trigger("EventPar" , ["par1value" , "par2value" , "par3value"]); ] } => To Add [Single Event to element by {Bind()} + {trigger} Method (with using {Custom Event - without Pars  - with using Event Map} ) ]');

        // Adding (2) Custom events to the element by using [bind() , event map]
        TagNameElem61.bind({
            EffCustEvent: function (event) {
                $(this).hide(2000);
                $(this).focus();
            },

            CSSCustEvent: function (event, w, h, c, bc) {
                $(this).css({
                    "width": w,
                    "height": h,
                    "color": c,
                    "backgroundColor": bc,
                });
                $(this).focus();
            },

        });

        TagNameElem61.trigger("EffCustEvent");
        TagNameElem61.trigger("CSSCustEvent", ["700px", "200px", "red", "blue"]);


    });
});
// ------------------------------------------------------
// ------------------------------------------------------
