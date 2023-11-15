//  20 jQuery - Selectors Reference Part 1
/* Main lessons functions :
    a) Main Selector Refernces : 
        1) Basic Selectors => []
        2) Advanced Selectors
        3) Indexed Selectors
        
    b) Main used methods within selector used in this lessons functions  : 
        1) Single selectors
        2) Grouped selectors
    */
// ========================================================

// I] Orcedion Plus buttons effect [3] groups :
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

// II] Functions buttons [ 3 ] main groups functions :
// 1] First group [Basic Selectors] [3 functions] :

// I] / First group [Basic Selectors] / a) [Single basic selector : {tagName, className, IdName } ] {loading event} -> all Functions  :
$(document).ready(function () {
    $('#btn11').click(function () {

        alert('Welcome to Access to [Basic Selectors] / [Single basic selector : {tagName, className, IdName}]  -> all Functions');
        alert('Same Tagnames -> Uniformed color || ' + 'Same Classnames -> uniformed fontsize || ' + 'Same IdNames -> border');

        // *) Defining main element(s) of a certain type [TagName, ClassName, IdName]  :
        var TagNameElem1 = $(".codes0 div"),
            TagNameElem2 = $(".codes0 p"),
            TagNameElem3 = $(".codes0 span"),
            ClassNameElem1 = $(".codes0 .shadi"),
            ClassNameElem2 = $(".codes0 .ahmed"),
            ClassNameElem3 = $(".codes0 .ali"),
            IdNameElem1 = $(".codes0 #elem1"),
            IdNameElem2 = $(".codes0 #elem2"),
            IdNameElem3 = $(".codes0 #elem3");

        // 1) Changing single css property of [Each element of a certain tagname type => the same font Color ] :
        TagNameElem1.css('color', 'red');
        TagNameElem2.css('color', 'blue');
        TagNameElem3.css('color', 'green');

        // 2) Changing single css property of [Each element of a certain classname type => the same font Size ] :
        ClassNameElem1.css('fontSize', '10px');
        ClassNameElem2.css('fontSize', '20px');
        ClassNameElem3.css('fontSize', '30px');

        // 3) Changing single css property of [Each element of a certain IdName type => the same border ] :
        IdNameElem1.css('border', '3px solid red');
        IdNameElem2.css('border', '5px solid blue');
        IdNameElem3.css('border', '10px solid green');
    });
});
// ------------------------------------------------------

// I] / First group [Basic Selectors] b) [Grouped basic selectors : {tagName, className, IdName} (of the same type)] {loading event}-> [all functions]  :
$(document).ready(function () {
    $('#btn12').click(function () {
        alert('Welcome to Access to [Grouped basic selectors : {tagName, className, IdName} (of the same type)]  -> all Functions');


        // 1) Changing single css property of [all selected elements by tagnames group => red font Color ] :
        $(".codes0 div, .codes0 p, .codes0 span ").css('color', 'red');

        // 2) Changing single css property of [all selected elements by tagnames group => blue font Color ] :
        $(".codes0 .shadi, .codes0 .ahmed, .codes0 .ali").css('color', 'blue');

        // 3) Changing single css property of [all selected elements by tagnames group => green font Color ] :
        $(".codes0 #elem1, .codes0 #elem2, .codes0 #elem3").css('color', 'green');

    });
});
// ------------------------------------------------------
// I] / First group [Basic Selectors] c) [Grouped basic selectors: {tagName, className, IdName} (of the mixed types)]  {loading event}-> [all functions] :
$(document).ready(function () {
    $('#btn13').click(function () {
        alert('Welcome to Access to [Grouped basic selectors: {tagName, className, IdName} (of the mixed types)]  -> all Functions');

        // 1) Changing single css property of [all selected random elements by variated selectors group => unique font Color (gold) ] :
        $(".codes0 div, .codes0 .shadi, .codes0 #elem3 ").css('color', 'gold');

    });
});
// ------------------------------------------------------
// ------------------------------------------------------
// --------------------------------------------------------
// ------------------------------------------------------

// 2] Second group [Advanced Selectors] => [2 functions]  => [ $('selector:first'); & $('selector').first(); & $('selector:last'); & $('selector').last(); ] -> [2 functions] => Access selected element(s) to : [simple change ]  :

// II] Second group [Advanded Selectors] / a) [ Single advanced selector (first(), :first, last(), :last )] -> all Functions :
$(document).ready(function () {
    $('#btn21').click(function () {
        alert('Welcome to Access to [Advanced Selectors] / [ Single basic selector {first(), :first, last(), :last }] -> all Functions');

        // Changing single css property of [Each selected element by certain advanced selector type => specific font Color ] :
        $(".codes0 div").first().css('color', 'red');
        $(".codes0 p:first").css('color', 'blue');
        $(".codes0 span").last().css('color', 'green');;
        $(".codes0 .shadi:last").css('color', 'brown');;

    });
});
// ------------------------------------------------------

// II] Second group [Advanded Selectors] / b) [Grouped advanced selectors (of the mixed types)] -> [all functions]   :
$(document).ready(function () {
    $('#btn22').click(function () {
        alert('Welcome to Access [Advanded Selectors] / [Grouped advanced selectors :{first(), :first, last(), :last} (of the mixed types)] -> all Functions');

        // 1) Changing single css property of [{first} combined method of each type of basic selector => unique font Color (red) ] :
        $(".codes0 div:first, .codes0 .shadi:first, .codes0 #elem3:first").css('color', 'red');

        // 2) Changing single css property of [{last} combined method of each type of basic selector => unique font Color (blue) ] :
        $(".codes0 div:last, .codes0 .shadi:last, .codes0 #elem3:last").css('color', 'blue');

        // 3) Changing single css property of [{first} & {last} combined method of each type of basic selector => unique border Color (gold) ] :
        $(".codes0 div:first, .codes0 span:last, .codes0 p:first").css('border', '3px solid gold');

    });
});

// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------

// 3] Third group [Indexed Selectors] =>  [ 2 functions] => [$('selector:even');  & $('selector:odd');] -> [2 functions] => Access selected element(s) by using indexed selectors to : [simple change] :

// III] Third group [Indexed Selectors] / a) [Single basic index selector:{(elem:even), (elem:odd)} ] -> all Functions :
$(document).ready(function () {
    $('#btn31').click(function () {
        alert('Welcome to Access to cetain {indexed} element [Single basic index selector: { (elem:even) & (elem:odd)}]  -> all Functions');

        // 1) Changing single css property of [Each selected element by certain indexed selector type => specific [font Color] ] :
        $(".codes0 div:odd").css('color', 'red');
        $(".codes0 p:even").css('color', 'blue');


    });
});
// ------------------------------------------------------

// III] Third group [Indexed Selectors] / b) [Grouped Index selectors (of the mixed types)] -> [all functions] :
$(document).ready(function () {

    $('#btn32').click(function () {
        alert('Welcome to Access {indexed} element of [Grouped Index selectors (of the mixed types: {elem:even, elem:odd} )] -> all Functions');

        // 1) Changing single css property of [ Group of selected element by certain indexed selector type => specific [font Color] + [border color] ] :
        $(".codes0 div:odd, .codes0 p:even").css({
            'color': 'gold',
            'border': '3px solid gold',
        });

    });
});
// ------------------------------------------------------
// --------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------

// 4] Fourth group [Mixed Grouped types Selectors] =>  [ 1 function] => [Basic Selectors] & [Advanced Selectors] & [Indexed Selectors] => Access to : [simple change] :

// IV] Fourth group [Mixed grouped Selectors] / a) [All types of selectors: {(TagNameElem:first), (ClassNameElem:last), (IDElem:even), (elemodd) } ] -> [simple CSS change] :
$(document).ready(function () {
    $('#btn41').click(function () {
        alert('Welcome to Access to cetain {All types of selectors} elements [Grouped: {(TagNameElem:first), (ClassNameElem:last), (IDElem:even), (elem:odd) } ] -> [simple CSS change]]  -> all Functions');

        // 1) Changing multiple css properties of [all selected elements {by all types selector} types => Apply specific [font Color + border + fontsize] ] :
        $(".codes0 div:first, .codes0 p:last, .codes0 span:odd, .codes0 .shadi:even").css({
            "color": "gold",
            "border": "5px solid gold",
            "fontSize": "20px",
        });

    });
});
// ------------------------------------------------------
