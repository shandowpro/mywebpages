//  21 jQuery - Selectors Reference Part 2
/* Main lessons functions :
    a) Main Selector References {4} GROUPS &  {8} Functions :
        1) [Basic Child position] Selectors => [first child || last child]
        2) [Basic Type position] Selectors => [first type || last type]
        3) [Advanced INDXED child position] Selectors => [counting form start || counting from end]
        4) [Advanced INDEXED type position] Selectors => [counting form start || counting from end]
        
    b) Main used methods within selector used in this lessons functions  : 
        1) Single selectors
        2) Grouped and mixed selectors [chained]
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

// II] Functions buttons [ 4 ] main groups functions :

// 1] First group [Basic Child position Selectors] [2 functions] {:first-child} && {:last-child} :

// I]/ First group [Basic Child position] Selectors / a) [first child selector {:first-child } ]  -> Simple css {border} :
$(document).ready(function () {
    $('#btn11').click(function () {

        alert('Welcome to Access to [Basic Child position] Selectors / a) [First child selector {:first-child } ]  -> simple css [border] ');

        // *) Defining main element(s) of a certain type [div, p, span]  :
        var TagNameElem1 = $(".codes0 div:first-child"),
            TagNameElem2 = $(".codes0 p:first-child"),
            TagNameElem3 = $(".codes0 span:first-child");

        // 1) Changing single css property of [Each selected element => border ] :
        TagNameElem1.css('border', '2px solid red');
        TagNameElem2.css('border', '2px solid green');
        TagNameElem3.css('border', '2px solid blue');
    });
});
// ------------------------------------------------------

// I] / First group [Basic Child position] Selectors / b) [Last child selector {:last-child } ]  -> simple css [border] :
$(document).ready(function () {
    $('#btn12').click(function () {

        alert('Welcome to Access to [Basic Child position] Selectors / b) [Last child selector {:last-child } ]  -> simple css [border] ');

        // *) Defining main element(s) of a certain type [div, p, span]  :
        var TagNameElem1 = $(".codes0 div:last-child"),
            TagNameElem2 = $(".codes0 p:last-child"),
            TagNameElem3 = $(".codes0 span:last-child");

        // 1) Changing single css property of [Each selected element => border ] :
        TagNameElem1.css('border', '2px solid orange');
        TagNameElem2.css('border', '2px solid brown');
        TagNameElem3.css('border', '2px solid yellow');


    });
});
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// --------------------------------------------------------
// ------------------------------------------------------

// 2] Second group [Basic type Selectors] => [2 functions]  => [ $(':first-of-type'); & $(':last-of-type'); ] -> [2 functions] => Access selected element(s) to : [simple change] :

// II] Second group [Basic Typed Child position Selector] a) [First of typed child {:first-of-type}] -> [Font color]  :
$(document).ready(function () {
    $('#btn21').click(function () {
        alert('Welcome to Access to [Basic Typed Child position Selectors] a) [First of typed child {:first-of-type}]  -> Simple CSS [font color] ');

        // *) Defining main element(s) of a certain type [div, p, span]  :
        var TagNameElem1 = $(".codes0 div:first-of-type"),
            TagNameElem2 = $(".codes0 p:first-of-type"),
            TagNameElem3 = $(".codes0 span:first-child");

        // 1) Changing single css property of [Each selected element => Font color ] :
        TagNameElem1.css('color', 'red');
        TagNameElem2.css('color', 'green');
        TagNameElem3.css('color', 'blue');
    });
});
// ------------------------------------------------------

// II] Second group [Basic type Child Selector] / b) [ Last of typed child {:last-of-type}] -> [Simple {CSS change : Font color}] :
$(document).ready(function () {
    $('#btn22').click(function () {
        alert('Welcome to Access [Basic type Selectors] / b) [ Last of typed child {:last-of-type}] -> [simple {CSS change : Font color}] ');

        // *) Defining main element(s) of a certain type [div, p, span] :
        var TagNameElem1 = $(".codes0 div:last-of-type"),
            TagNameElem2 = $(".codes0 p:last-of-type"),
            TagNameElem3 = $(".codes0 span:last-of-type");

        // 1) Changing single css property of [Each selected element => Font color ] :
        TagNameElem1.css('color', 'orange');
        TagNameElem2.css('color', 'blue');
        TagNameElem3.css('color', 'yellow');
    });
});

// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------

// 3] Third group [Advanced Indexed child Selectors] => [2 functions]  => [ $(':nth-child()'); & $(':nth-last-child()'); ] -> [2 functions] => Access selected element(s) to : [simple change] :

// III] / Third group [Advanced Indexed Child position (form START)] Selectors / a) [Indexed Child position selector (counting from start) {:nth-child(#num) } ] -> Simple css background} :
$(document).ready(function () {
    $('#btn31').click(function () {

        alert('Welcome to Access to [Advanced Indexed Child position] Selectors / a) [Indexed Child position selector (counting from start) {:nth-child(#num) } ]  -> Simple css {width} ');

        // *) Defining main element(s) of a certain type [div, p, span]  :
        var TagNameElem1 = $(".codes0 div:nth-child(1)"),
            TagNameElem2 = $(".codes0 p:nth-child(2)"),
            TagNameElem3 = $(".codes0 span:nth-child(3)");

        // 1) Changing single css property of [Each selected element => background Color ] :
        TagNameElem1.css('background', 'red');
        TagNameElem2.css('background', 'blue');
        TagNameElem3.css('background', 'green');
    });
});
// ------------------------------------------------------

// III] / Third group [Advanced Indexed Child position (form END)] Selectors / b) [Indexed Child position selector (counting from end) {:nth-child(#num) } ]  -> Simple css {background} :
$(document).ready(function () {
    $('#btn32').click(function () {

        alert('Welcome to Access to [Advanced Indexed Child position (form end)] Selectors / b) [Indexed Child position selector (counting from end) {:nth-child(#num) } ]  -> Simple css {height}');

        // *) Defining main element(s) of a certain type [div, p, span]  :
        var TagNameElem1 = $(".codes0 div:nth-last-child(1)"),
            TagNameElem2 = $(".codes0 p:nth-last-child(2)"),
            TagNameElem3 = $(".codes0 span:nth-last-child(3)");

        // 1) Changing single css property of [Each selected element => Backgrond] :
        TagNameElem1.css('background', 'orange');
        TagNameElem2.css('background', 'brown');
        TagNameElem3.css('background', 'yellow');
    });
});
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// --------------------------------------------------------
// ------------------------------------------------------

// 4] Forth group [Advanced Indexed Typed Child Selectors] => [2 functions]  => [ $(':nth-of-type(#num)'); & $(':nth-last-of-type(#num)'); ] -> [2 functions] => Access selected element(s) to : [simple change] :

// VI] Fourth group [Advanced Indexed Typed Child position Selector (Counting from START)] a) [Indexed typed Child { :nth-of-type(#num) }] -> [Font Size]  :
$(document).ready(function () {
    $('#btn41').click(function () {
        alert('Welcome to Access to [Advanced Indexed Typed Child position Selector (counting from START)] a) [Indexed typed Child { :nth-of-type() }] -> [Font Size] ');

        // *) Defining main element(s) of a certain type [div, p, span]  :
        var TagNameElem1 = $(".codes0 div:nth-of-type(1)"),
            TagNameElem2 = $(".codes0 p:nth-of-type(2)"),
            TagNameElem3 = $(".codes0 span:nth-of-type(3)");

        // 1) Changing single css property of [Each selected element => Font size ] :
        TagNameElem1.css('fontSize', '15px');
        TagNameElem2.css('fontSize', '20px');
        TagNameElem3.css('fontSize', '25px');
    });
});
// ------------------------------------------------------

// II] Fourth group [Advanced Indexed Typed Child position Selector (Counting from END)] b) [Indexed typed Child { :nth-last-of-type(#num) }] -> [Height] :/

$(document).ready(function () {
    $('#btn42').click(function () {
        alert('Welcome to Access [Advanced Indexed Typed Child position Selector (Counting from END)] b) [Indexed typed Child { :nth-of-type(#num) }] -> [Text Weight] ');

        // *) Defining main element(s) of a certain type [div, p, span] :
        var TagNameElem1 = $(".codes0 div:nth-last-of-type(1)"),
            TagNameElem2 = $(".codes0 p:nth-last-of-type(2)"),
            TagNameElem3 = $(".codes0 span:nth-last-of-type(3)");

        // 1) Changing single css property of [Each selected element => Height] :
        TagNameElem1.css('height', '200px');
        TagNameElem2.css('height', '300px');
        TagNameElem3.css('height', '400px');
    });
});

// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------

