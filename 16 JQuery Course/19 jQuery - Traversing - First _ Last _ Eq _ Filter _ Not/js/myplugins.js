//  19 jQuery - Traversing - First _ Last _ Eq _ Filter _ Not
/* Main lessons functions :
    a) Main Elements Traversing used by JQ  : 
        1) Traversing [first()]
        2) Traversing [last()]
        3) Traversing [eq()]
        4) Traversing [filter()]
        5) Traversing [not()]
        
    b) Main advanced selector used in lessons functions  : 
        1) [first , last ] => nto using any advanced seletors  
        2) [eq] => using only number
        3) [filter , not] => using all types of selectors
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

// II] Functions buttons [ 5 ] main groups functions :
// 1] First group [elem.first();] -> [2 functions] => Access first element of a type (only with using first + with using other traversing functions) [siblings] to : [modify Css [single , muliptle] && [assign animation] ] :

// I] / First group [elem.first();] / a) Basic Access (only with using first )] {loading event} -> all Functions :
$(document).ready(function () {
    $('#btn11').click(function () {
        alert('Welcome to Access to first element of a type [only with using first ] -> all Functions');

        // *) Defining main element of a type  :
        var elem = $(".codes0 div, .codes0 p, .codes0 span");

        // 2) Changing single css property of [first sibling element of a type - only with using first function] :
        elem.first().css('fontSize', '30px');

        // 3) Changing multiple css properties of [first sibling element of a type  - only with using first function] :
        elem.first().css({
            color: '#080',
            border: '2px solid #080',
            width: '300px',

        });

        // 4) Assign an animation function {Slide Toggle} to [first element of a type  - only with using first function] :
        elem.first().slideToggle(2500);

    });
});
// ------------------------------------------------------

// I] / First group [elem.last();] / b) Advanced combined access to element with {first} chain properties of other Traversing functions {next() || nextAll || nextUntil] } {loading event}-> [all functions]  :
$(document).ready(function () {
    $('#btn12').click(function () {
        alert('Welcome to Access to first element of a type [Advanced combined access to element with {first} chain properties of other Traversing functions] -> all Functions');

        // *) Defining main element of a type  :
        var elem = $(".codes0 div, .codes0 p, .codes0 span");

        // 2) Changing single css property of [first sibling element of kind - with using cominded another traversing function (next) ] :
        elem.first().next().css('fontSize', '40px');

        // 3) Changing multiple css properties of [ first sibling element of kind - with using cominded another traversing function (nextAll) ] :
        elem.first().nextAll().css({
            color: '#00f',
            border: '3px solid #00f',
            width: '600px',
        });

        // 4) Assign an animation function {Slide Toggle} to [first sibling element of kind - with using cominded another traversing function (nextUntil) ] :
        elem.first().nextUntil().slideToggle(2500);

        // 5) Assign an animation function {Slide Toggle} to [first element of a type - with using cominded another traversing function (return function - with argument of cerain Index)] :
        elem.first(function (shadi) {
            return shadi === 1
        }).css("color", "gold");
    });
});
// ------------------------------------------------------
// ------------------------------------------------------
// --------------------------------------------------------
// ------------------------------------------------------

// 2] Second group [elem.last();] -> [2 functions] => Access last element in a type + setting multiple changes( css propereties , animation)  :

// II] Second group [elem.last();] / a) [Basic Access (without using other travesings functions)] -> all Functions :
$(document).ready(function () {
    $('#btn21').click(function () {
        alert('Welcome to Access to last element of a type [with using first travesings only function ]-> all Functions');

        // *) Defining main element of a type  :
        var elem = $(".codes0 div, .codes0 p, .codes0 span");

        // 2) Changing single css property of [element last sibling - without using advanced selector] :
        elem.last().css('fontSize', '30px');

        // 3) Changing multiple css properties of [element last sibling - without using advanced selector] :
        elem.last().css({
            color: '#080',
            border: '2px solid #080',
            width: '300px',

        });
        // 4) Assign an animation function {Slide Toggle} to [element last siblings - without using advanced selector] :
        elem.last().slideToggle(2500);
    });
});
// ------------------------------------------------------

// II] Second group [elem.last();] / b) Advanced Access to element of a type [Advanced combined access to element of {last} chain properties with other Traversing functions] -> [all functions]  :
$(document).ready(function () {
    $('#btn22').click(function () {
        alert('Welcome to Access last element of a type [Advanced combined access to element of {last} chain properties with other Traversing functions (prev , prevAll , prevUntil)]  -> all Functions');

        // *) Defining main element :
        var elem = $('.codes0 div, .codes0 p , .codes0 span ');

        // 2) Changing single css property of [element last sibling  - with using cominded another traversing function (prev)  ] :
        elem.last().prev('.testP').css('fontSize', '40px');

        // 3) Changing multiple css properties of [element last sibling  - with using cominded another traversing function (prevAll) ]  :
        elem.last().prevAll('.testP').css({
            color: '#00f',
            border: '3px solid #00f',
            width: '600px',
        });

        // 4) Assign an animation function {Slide Toggle} to [element last sibling - with using cominded another traversing function (prevAll)with using cominded another traversing function (prevUntil) ] :
        elem.last().prevUntil('.testP , testD').slideToggle(2500);

        // 5) Assign an animation function {Slide Toggle} to [element last sibling - with using cominded another traversing function (return function - with argument of cerain Index)] :
        elem.last(function (shadi) {
            return shadi === 1
        }).css("color", "gold");
    });
});

// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------

// 3] Third group [elem.eq();] -> [2 functions] => Access certain element sibling by it's [index] to : [modify Css [single , muliptle] && [assign animation] ] :

// III] Third group [elem.eq();] / a) [Basic Access (without using other traversings functions)] -> all Functions :
$(document).ready(function () {
    $('#btn31').click(function () {
        alert('Welcome to Access to cetain {indexed} element of a type [with using first traverings only function ]-> all Functions');

        // *) Defining main element of a type :
        var elem = $(".codes0 div, .codes0 p, .codes0 span");

        // 2) Changing single css property of [element cetain indexed sibling{second} - without using advanced selector] :
        elem.eq(1).css("borderRadius", "30px");

        // 3) Changing multiple css properties of [element certain indexed sibling{third} - without using advanced selector] :
        elem.eq(2).css({
            color: '#080',
            border: '2px solid #080',
            width: '300px',

        });

        // 4) Assign an animation function {Slide Toggle} to [element certain indexed sibling - without using advanced selector] :
        elem.eq(-1).slideToggle(2500);

    });
});
// ------------------------------------------------------

// III] Third group [elem.eq();] / b) element of a type [Advanced combined access to {indexed} element of chain properties with other Traversing functions] -> [all functions]  :
$(document).ready(function () {

    $('#btn32').click(function () {
        alert('Welcome to Access {indexed} element of a type [Advanced combined access to {indexed} element chain properties with other Traversing functions (next , nextAll , nextUntil, prev , prevAll , prevUntil)] -> all Functions');

        // *) Defining main element of a type :
        var elem = $(".codes0 div, .codes0 p, .codes0 span");

        // 2) Changing single css property of [element certain indexed sibling{second} - with using cominded another traversing function (next , nextAll , nextUntil, prev , prevAll , prevUntil) ] :
        elem.eq(2).next().css('color', 'red');
        elem.eq(2).nextAll().css('color', 'orange');
        elem.eq(2).nextUntil().css('color', 'yellow');
        elem.eq(2).prev().css('color', 'blue');
        elem.eq(2).prevAll().css('color', 'green');
        elem.eq(2).prevUntil().css('color', 'brown');

        // 3) Changing multiple css properties of [element certain indexed sibling{first} -  with using cominded another traversing function (prevAll)  ] :
        elem.eq(0).css({
            fontSize: '25px',
            border: '5px solid #880',
            width: '300px',
        });
        // 4) Assign an animation function {Slide Toggle} to [element certain indexed sibling{last} - with using cominded another traversing function (prevAll)] :
        elem.eq(-1).slideToggle(2500);

        // 5) Assign an animation function {Slide Toggle} to [indxed element of a type as (return function - with argument of certain Index) - with using cominded another traversing function ] :
        elem.eq(function (shadi) {
            return shadi === 1
        }).css("color", "lightBlue");
    });
});
// ------------------------------------------------------
// --------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------

// 4] Fourth group [elem.filter();] -> [2 functions] => Access Filtered element's sibling by using [Only filter standards (ClassName , TagName , contains) || combined with other tranversing functions]  to : [modify Css [single , muliptle] && [assign animation] ] :

// IV] Group [elem.filter();] / a) Access a certain filtered element's sibling [without using advanced selector ] -> all Functions :
$(document).ready(function () {
    $('#btn41').click(function () {
        alert('Welcome to Access to element\'s filtered sibling [without using advanced selector] -> all Functions');

        // *) Defining main element [without using advanced selectors] :
        var elem = $('.codes0 div, .codes0 p, .codes0 span ');

        // 2) Changing single css property of [ certain element's sibling by filter[first , last , contains] - without using advanced selector] :
        elem.filter(':first').css('borderRadius', '30px');

        // 3) Changing multiple css properties of [certain element's sibling - without using advanced selector] 

        elem.filter(":contains('love')").css({
            color: '#080',
            border: '2px solid #080',
            width: '500px',

        });
        // 4) Assign an animation function {Slide Toggle} to [certain siblings - without using advanced selector] :
        elem.filter(':last').slideToggle(2500);

    });
});
// ------------------------------------------------------
// IV] Group [elem.filter();] / b) Access a certain filtered element's sibling [with using advanced selector ] -> all Functions :
$(document).ready(function () {
    $('#btn42').click(function () {
        alert('Welcome to Access to Filtered element\'s sibling [with using advanced selector] -> all Functions');

        // *) Defining main element [with using advanced selectors] :
        var elem = $('.codes0 div, .codes0 p, .codes0 span ');

        // 2) Changing single css property of [ certain element's sibling by filter[first] - with using advanced selector[next]  ] :
        elem.filter(':first').next().css('fontSize', '30px');

        // 3) Changing multiple css properties of [certain element's sibling by filter[contains] - without using advanced selector [nextUntil] ] :
        elem.filter(":contains('love')").nextUntil('.testP').css({
            color: '#080',
            border: '5px solid #080',
            width: '500px',
        });

        // 4) Assign an animation function {Slide Toggle} to[certain sibling by filter [last] - without using advanced selector [prevAll] ] :
        elem.filter(':last').prev().slideToggle(2500);

        // 5) Assign an animation function {Slide Toggle} to [certain sibling by filter [ (return function - with argument of certain Index ] - with using cominded another traversing function ] :
        elem.filter(function (shadi) {
            return shadi === 3
        }).prevAll().css({
            "borderRadius": "60px",
            "border": "6px solid red",
        });
    });
});
// ------------------------------------------------------

// 5] Fifth group [elem.not();] -> [2 functions] => Access Filtered element's sibling by using [Only filter standards (ClassName , TagName , contains) || combined with other tranversing functions]  to : [modify Css [single , muliptle] && [assign animation] ] :

// V] Group [elem.not();] / a) Access a certain filtered element's sibling [without using advanced selector ] -> all Functions :
$(document).ready(function () {
    $('#btn51').click(function () {
        alert('Welcome to Access to element\'s NOT Filtered sibling [without using advanced selector] -> all Functions');

        // *) Defining main element [without using advanced selectors] :
        var elem = $('.codes0 div, .codes0 p, .codes0 span ');

        // 2) Changing single css property of [ certain element's sibling by filter[first , last , contains] - without using advanced selector] :
        elem.not(':first').css('fontSize', '30px');

        // 3) Changing multiple css properties of [certain element's sibling - without using advanced selector] 

        elem.not(":contains('love')").css({
            color: '#080',
            border: '2px solid #080',
            width: '500px',

        });
        // 4) Assign an animation function {Slide Toggle} to [certain siblings - without using advanced selector] :
        elem.not(':last').slideToggle(2500);

    });
});
// ------------------------------------------------------
// V] Group [elem.not();] / b) Access a certain filtered element's sibling [with using advanced selector ] -> all Functions :
$(document).ready(function () {
    $('#btn52').click(function () {
        alert('Welcome to Access to NOT Filtered element\'s sibling [with using advanced selector] -> all Functions');

        // *) Defining main element [with using advanced selectors] :
        var elem = $('.codes0 div, .codes0 p, .codes0 span ');

        // 2) Changing single css property of [ certain element's sibling by filter[first] - with using advanced selector[next]  ] :
        elem.not(':first').next().css('fontSize', '30px');

        // 3) Changing multiple css properties of [certain element's sibling by filter[contains] - without using advanced selector [nextUntil] ] :
        elem.not(":contains('love')").nextUntil('.testP').css({
            color: '#080',
            border: '5px solid #080',
            width: '500px',
        });

        // 4) Assign an animation function {Slide Toggle} to[certain sibling by filter [last] - without using advanced selector [prevAll] ] :
        elem.not(':last').prev().slideToggle(2500);

        // 5) Assign an animation function {Slide Toggle} to [certain sibling by filter [ (return function - with argument of certain Index ] - with using cominded another traversing function ] :
        elem.not(function (shadi) {
            return shadi === 3
        }).prevAll().css({
            "borderRadius": "60px",
            "border": "6px solid red",
        });

    });
});
// ------------------------------------------------------

