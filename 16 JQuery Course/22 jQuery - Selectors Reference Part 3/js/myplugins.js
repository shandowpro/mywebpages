//  22 jQuery - Selectors Reference Part 3
/* Main lessons functions :
    a) Main Selector References {5} GROUPS & {9} Functions :
        1) [Unique Children/Type] Selectors => [$(":only-child")] & [$(":only-of-type")]
        2) [Direct & Indirect Children] Selectors => [$("ParnetElem ChildElem");] & [$("ParnetElem > ChildElem");]
        3) [Direct Next & All Next Siblings] Selectors => [$("parentElem + siblingElem");] & [$("parentElem ~ siblingElem");]  
        4) [Comparison Indexed] Selectors => [$("elem:eq(#num)");] & [$("elem:gt(#num)");] & [$("elem:lt(#num)");]
        5) [Exceptions] Selectors => [$("elem:not(":contains('condition')")");]
        
    b) Main used methods within selector used in this lessons functions  : 
        1) Single selectors
        2) Grouped and mixed selectors [chained / Nested]
    */
// ========================================================

// I] Orcedion Plus buttons effect [4] groups :
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

// 1] First group [Unique Children/Type] Selectors [2 functions] {:only-child} && {:only-of-type} :

// a] / First group [Unique Children/Type] Selectors / a) [Select only child of his parent {:only-child} selector] -> Simple css {border} :
$(document).ready(function () {
    $('#btn11').click(function () {

        alert('Welcome to Access to [Unique Children/Type] Selectors a) [Select only child of his parent {:only-child} selector ] -> Simple css {border} ');

        // *) Defining main element(s) of a certain type [div, p, span]  :
        var TagNameElem1 = $(".codes0 div:only-child"),
            TagNameElem2 = $(".codes0 p:only-child"),
            TagNameElem3 = $(".codes0 span:only-child"),
            TagNameElem4 = $(".codes0 ul li:only-child"),
            TagNameElem5 = $(".codes0 *:only-child");

        // 1) Changing single css property of [Each selected element => border ] :
        TagNameElem1.css('border', '5px solid red');
        TagNameElem2.css('border', '5px solid red');
        TagNameElem3.css('border', '5px solid red');
        TagNameElem4.css('border', '5px solid red');
        TagNameElem5.css('border', '5px solid red');
    });
});
// ------------------------------------------------------

// b] / First group [Unique Children/Type] Selectors / b) [Select only of type of child of his parent {:only-type} selector] -> Simple css {border} :
$(document).ready(function () {
    $('#btn12').click(function () {

        alert('Welcome to Access to [Unique Children/Type] Selectors / b) [Select only of type of child of his parent {:only-of-type} selector] -> simple css [border] ');

        // *) Defining main element(s) of a certain type [div, p, span]  :
        var TagNameElem1 = $(".codes0 div:only-of-type"),
            TagNameElem2 = $(".codes0 p:only-of-type"),
            TagNameElem3 = $(".codes0 span:only-of-type"),
            TagNameElem4 = $(".codes0 *:only-of-type"),
            TagNameElem5 = $(".codes0 ul li:only-of-type");

        // 1) Changing single css property of [Each selected element => border ] :
        TagNameElem1.css('border', '5px solid gold');
        TagNameElem2.css('border', '5px solid gold');
        TagNameElem3.css('border', '5px solid gold');
        TagNameElem4.css('border', '5px solid gold');
        TagNameElem5.css('border', '5px solid gold');


    });
});
// ------------------------------------------------------
// ------------------------------------------------------   
// ------------------------------------------------------
// --------------------------------------------------------
// ------------------------------------------------------

// 2] Second group [Direct & Indirect Children] Selectors => [2 functions]  => [ $('parentElem childElem'); & $('parentElem > childElem'); ] -> [2 functions] => Access selected element(s) to : [simple change] :

// a] Second group [only Direct Children] Selectors -> a) [Select the only direct child {:parentElem > childElem}] -> [Font color]  :
$(document).ready(function () {
    $('#btn21').click(function () {
        alert('Welcome to Access to [Direct & Indirect Children] Selectors a) [Select the only direct child {:parentElem > childElem}] -> [Font color] ');

        // *) Defining main element(s) of a certain type [div, p, span]  :
        var TagNameElem1 = $(".codes0 > div"),
            TagNameElem2 = $(".codes0 > p"),
            TagNameElem3 = $(".codes0 > span"),
            TagNameElem4 = $(".codes0 > ul > li");

        // 1) Changing single css property of [Each selected element => Font color ] :
        TagNameElem1.css('color', 'gold');
        TagNameElem2.css('color', 'gold');
        TagNameElem3.css('color', 'gold');
        TagNameElem4.css('color', 'gold');
    });
});
// ------------------------------------------------------

// b] Second group [All Direct & Indirect Children] Selectors -> b) [Select all direct and indirect children {:parentElem childElem}] -> [Font color] :
$(document).ready(function () {
    $('#btn22').click(function () {
        alert('Welcome to Access [All Direct & Indirect Children] Selectors b) [Select all direct and indirect children {:parentElem childElem}] -> [Font color]');

        // *) Defining main element(s) of a certain type [div, p, span] :
        var TagNameElem1 = $(".codes0 div"),
            TagNameElem2 = $(".codes0 p"),
            TagNameElem3 = $(".codes0 span"),
            TagNameElem4 = $(".codes0 ul li");

        // 1) Changing single css property of [Each selected element => Font color ] :
        TagNameElem1.css('color', 'goldenrod');
        TagNameElem2.css('color', 'goldenrod');
        TagNameElem3.css('color', 'goldenrod');
        TagNameElem4.css('color', 'goldenrod');
    });
});

// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------

// 3] Third group [Direct Next & All Next Siblings] Selectors => [2 functions]  => [$("parentElem + siblingElem");] & [$("parentElem ~ siblingElem");]  -> [2 functions] => Access selected element(s) to : [simple change] :

// a] / Third group [Direct Next & All Next Siblings] Selectors -> / a) [ Select only Next direct sibling $("parentElem + siblingElem");] ->  Simple css background} :
$(document).ready(function () {
    $('#btn31').click(function () {

        alert('Welcome to Access to [only Direct Next Sibling] Selectors / a) [ Select only Next direct sibling $("parentElem + siblingElem");] ->  Simple css background} ]  -> Simple css {background Color , Font color}');

        // *) Defining main element(s)'s direct next Sibling of a certain type [div, p, span]  :
        var TagNameElem1 = $(".codes0 div + div "),
            TagNameElem2 = $(".codes0 p + p"),
            TagNameElem3 = $(".codes0 span + span"),
            TagNameElem4 = $(".codes0 ul li:eq(1) + li");

        /// 1) Changing single css property of [Each selected element => {background Color , Font color} ] :

        TagNameElem1.css({
            'background': 'red',
            'color': '#fff',
        });
        TagNameElem2.css({
            'background': 'red',
            'color': '#fff',
        });
        TagNameElem3.css({
            'background': 'red',
            'color': '#fff',
        });
        TagNameElem4.css({
            'background': 'red',
            'color': '#fff',
        });

    });
});
// ------------------------------------------------------

// b] / Third group Third group [Direct Next & All Next Siblings] Selectors -> / b) [Select All Next siblings $("parentElem ~ siblingElem");] ->  Simple css {Backgrond , Font color} ] :
$(document).ready(function () {
    $('#btn32').click(function () {

        alert('Welcome to Access to Third group [All Next Siblings] Selectors / b) [Select all Next siblings $("parentElem ~ siblingElem");] ->  Simple css {Backgrond , Font color} ');

        // *) Defining main element(s)'s All next Siblings of a certain type [div, p, span]  :
        var TagNameElem1 = $(".codes0 div ~ div"),
            TagNameElem2 = $(".codes0 p ~ p"),
            TagNameElem3 = $(".codes0 span ~ span"),
            TagNameElem4 = $(".codes0 ul li:eq(1) ~ li");

        // 1) Changing single css property of [Each selected element => Backgrond , Font color] :
        TagNameElem1.css({
            'background': 'orange',
            'color': 'white',
        });
        TagNameElem2.css({
            'background': 'orange',
            'color': 'white',
        });
        TagNameElem3.css({
            'background': 'orange',
            'color': 'white',
        });
        TagNameElem4.css({
            'background': 'orange',
            'color': 'white',
        });

    });
});
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// --------------------------------------------------------
// ------------------------------------------------------

// 4] Forth group [Comparison Indexed] Selectors => [3 functions]  => [$("elem:eq(#num)");] & [$("elem:gt(#num)");] & [$("elem:lt(#num)");]-> [3 functions] => Access selected element(s) to : [simple change] :

// a] Fourth group [Comparison Indexed] Selectors -> a) Select [Equal certain Index Number $("elem:eq(#num)");] -> [Font Size]  :
$(document).ready(function () {
    $('#btn41').click(function () {
        alert('Welcome to Access to [Comparison Indexed] Selectors => a) Select [Equal certain Index Number $("elem:eq(#num)");] -> [Font Size] ');

        // *) Defining main element(s) of a certain type [div, p, span]  :
        var TagNameElem1 = $(".codes0 div:eq(1)"),
            TagNameElem2 = $(".codes0 p:eq(2)"),
            TagNameElem3 = $(".codes0 span:eq(3)"),
            TagNameElem4 = $(".codes0 ul li:eq(4)");

        // 1) Changing single css property of [Each selected element => Font size ] :
        TagNameElem1.css('fontSize', '40px');
        TagNameElem2.css('fontSize', '40px');
        TagNameElem3.css('fontSize', '40px');
        TagNameElem4.css('fontSize', '40px');
    });
});
// ------------------------------------------------------

// b] Fourth group [Comparison Indexed] Selectors -> b) Select [Greater than certain index number $("elem:gt(#num)");] -> [Height , border] : 
$(document).ready(function () {
    $('#btn42').click(function () {
        alert('Welcome to Access [Comparison Indexed] => b) Select [Greater than certain index number] -> [Height , border] ');

        // *) Defining main element(s) of a certain type [div, p, span] :
        var TagNameElem1 = $(".codes0 div:gt(1)"),
            TagNameElem2 = $(".codes0 p:gt(2)"),
            TagNameElem3 = $(".codes0 span:gt(3)"),
            TagNameElem4 = $(".codes0 ul li:gt(4)");

        // 1) Changing single css property of [Each selected element => Height , border] :
        TagNameElem1.css({
            'height': '200px',
            'border': '5px solid red',
        });
        TagNameElem2.css({
            'height': '200px',
            'border': '5px solid red',
        });
        TagNameElem3.css({
            'height': '200px',
            'border': '5px solid red',
        });
        TagNameElem4.css({
            'height': '200px',
            'border': '5px solid red',
        });

    });
});

// ------------------------------------------------------

// c] Fourth group [Comparison Indexed] Selectors -> c) [Select Less than certain index number $("elem:lt(#num)");] -> [width , border, borderRadius ] : 
$(document).ready(function () {
    $('#btn43').click(function () {
        alert('Welcome to Access [Comparison Indexed] => c) [Select Less than certain index number] -> [width] ');

        // *) Defining main element(s) of a certain type [div, p, span] :
        var TagNameElem1 = $(".codes0 div:lt(1)"),
            TagNameElem2 = $(".codes0 p:lt(2)"),
            TagNameElem3 = $(".codes0 span:lt(3)"),
            TagNameElem4 = $(".codes0 ul li:lt(4)");

        // 1) Changing single css property of [Each selected element => width , border , border radius] :
        TagNameElem1.css({
            'width': '200px',
            'border': 'solid 3px black',
            'borderRadius': '50px',
        });
        TagNameElem2.css({
            'width': '200px',
            'border': 'solid 3px black',
            'borderRadius': '50px',
        });
        TagNameElem3.css({
            'width': '200px',
            'border': 'solid 3px black',
            'borderRadius': '50px',
        });
        TagNameElem4.css({
            'width': '200px',
            'border': 'solid 3px black',
            'borderRadius': '50px',
        });

    });
});

// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------

// 5] Fifth group [Exceptions condition] Selectors]  => [1 function]  => [$("elem:not(:filter('condition'))");] -> [1 function] => Access selected element(s) to : [simple change] :

// 5] Fifth group [Exceptions condition] Selectors -> a) Select [Not applying the certain condition  $("elem:not(:filter('condition'))");] -> [Font Size  , border , color]  :
$(document).ready(function () {
    $('#btn51').click(function () {
        alert('Welcome to Access to [Exceptions condition] Selectors => a) Select [Not applying the certain condition  $("elem:not(:filter(condition))");] -> [Font Size , border , color] ');

        // *) Defining main element(s) of a certain type [div, p, span]  :
        var TagNameElem1 = $(".codes0 ul li:not(:contains('jq'))"),
            TagNameElem2 = $(".codes0 div:not(:contains('jq'))");

        // TagNameElem2 = $(".codes0 *:not(:contains('jq'))");

        // 1) Changing single css property of [Each selected element => {Font size & color & border } ] :
        TagNameElem1.css({
            'fontSize': '40px',
            'color': 'red',
            'border': '5px solid gold',
        })

        TagNameElem2.css({
            'fontSize': '40px',
            'color': 'red',
            'border': '5px solid gold',
        })
    });
});

// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------

