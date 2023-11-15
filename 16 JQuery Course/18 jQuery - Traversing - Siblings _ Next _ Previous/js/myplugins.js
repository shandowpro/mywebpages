//  18 jQuery - Traversing - Siblings _ Next _ Previous
/* Main lessons functions :
    a) Main Elements Traversing used by JQ  : 
        1) Traversing [siblings()]
        2) Traversing [next()]
        3) Traversing [nextAll()]
        4) Traversing [nextUntil()]
        5) Traversing [prev()]
        6) Traversing [prevAll()]        
        7) Traversing [prevUntil()]                
    
    b) Main advanced selector used in lessons functions  : 
        1) class Name 
        2) Tag Name 
        3) Advanced filter (contains) 
    */
// ========================================================

// I] Orcedion Plus buttons effect [7] groups :
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
// 1] First group [elem.siblings();] -> [4 functions] => Access element's (All , certain siblings) [siblings] to : [modify Css [single , muliptle] && [assign animation] ] :

// I] / First group [elem.siblings();] / a) Access to element's all siblings [without using advanced selector ] -> all Functions :
$(document).ready(function () {
    $('#btn11').click(function () {
        alert('Welcome to Access to element\'s All Siblings [without using advanced selector ]-> all Functions');

        // *) Defining element's ALL siblings [without using advanced selectors] :
        var elem = $('.codes0 div, .codes0 p ');

        // 2) Changing single css property of [all siblings - without using advanced selector] :
        elem.siblings().css('fontSize', '30px');

        // 3) Changing multiple css properties of [all siblings - without using advanced selector] :
        elem.siblings().css({
            color: '#080',
            border: '2px solid #080',
            width: '300px',

        });
        // 4) Assign an animation function {Slide Toggle} to [certain siblings - without using advanced selector] :
        elem.siblings().slideToggle(2500);
    });
});
// ------------------------------------------------------

// I] / First group [elem.siblings();] / b) Access to element's certain Siblings [with using advanced selector(class Name) ]-> [all functions]  :
$(document).ready(function () {
    $('#btn12').click(function () {
        alert('Welcome to Access to element\'s certain Siblings [with using advanced selector(class Name) ]-> all Functions');

        // *) Defining element's ALL siblings [with using advanced selectors (Class Name)] :
        var elem = $('.codes0 div, .codes0 p ');

        // 2) Changing single css property of [certain siblings - with using advanced selectors (Class Name)] :
        elem.siblings('.testP').css('fontSize', '40px');

        // 3) Changing multiple css properties of [certain siblings - with using advanced selectors (Class Name)] :
        elem.siblings('.testP').css({
            color: '#00f',
            border: '3px solid #00f',
            width: '600px',
        });
        elem.siblings('.testD').css({
            color: '#00f',
            border: '3px solid #00f',
            width: '600px',
        });

        // 4) Assign an animation function {Slide Toggle} to [certain siblings - with using advanced selector -class Name] :
        elem.siblings('.testP , testD').slideToggle(2500);
    });
});
// ------------------------------------------------------

// I] / First group [elem.siblings();] / c) Access to element's certain Siblings [with using advanced selector(tag Name) ]-> [all functions]  :
$(document).ready(function () {
    $('#btn13').click(function () {
        alert('Welcome to Access to element\'s certain Siblings [with using advanced selector(Tag Name) ]-> all Functions');

        // *) Defining element's ALL siblings [with using advanced selectors (Tag Name)] :
        var elem = $('.codes0 div, .codes0 p ');

        // 2) Changing single css property of [certain siblings - with using advanced selectors (Tag Name)] :
        elem.siblings('div').css('background', '#efefef');

        // 3) Changing multiple css properties of [certain siblings - with using advanced selectors (Tag Name)] :
        elem.siblings('div').css({
            color: '#ccc',
            border: '5px solid #ccc',
            width: '900px',
        });
        elem.siblings('p').css({
            color: '#ccc',
            border: '5px solid #ccc',
            width: '900px',
        });

        // 4) Assign an animation function {Slide Toggle} to [certain siblings - with using advanced selector - Tag Name] :
        elem.siblings('div').slideToggle(2500);

    });
});

// ------------------------------------------------------
// I] / First group [elem.siblings();] / d) Access to element's certain Siblings [with using advanced filter(contains) ]-> [all functions]  :
$(document).ready(function () {
    $('#btn14').click(function () {
        alert('Welcome to Access to element\'s certain Siblings [with using advanced filter(contains) ]-> all Functions');

        // *) Defining element's certain siblings [with using advanced filter(contains)] :
        var elem = $('.codes0 div, .codes0 p ');

        // 2) Changing single css property of [certain siblings with using advanced filter(contains)] :
        elem.siblings("div:contains('love')").css('fontSize', '30px');
        elem.siblings("p:contains('love')").css('fontSize', '30px');

        // 3) Changing multiple css properties of [certain siblings - [with using advanced filter(contains)]] :
        elem.siblings("div:contains('love')").css({
            color: '#ff0',
            border: '5px solid #ff0',
            width: '400px',
        });
        elem.siblings("p:contains('love')").css({
            color: '#ff0',
            border: '5px solid #ff0',
            width: '400px',
        });

        // 4) Assign an animation function {Slide Toggle} to [certain siblings - with using advanced selector - advanced filter(contains)] :
        elem.siblings("div:contains('love')").slideToggle(2500);

    });
});
// ------------------------------------------------------
// --------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------

// 2] Second group [elem.next();] -> [4 functions] => Access element's (All , certain next siblings) [next] to : [modify Css [single , muliptle] && [assign animation] ] :

// II] Second group [elem.next();] / a) Access to element's next siblings [without using advanced selector ] -> all Functions :
$(document).ready(function () {
    $('#btn21').click(function () {
        alert('Welcome to Access to element\'s next Sibling [without using advanced selector ]-> all Functions');

        // *) Defining element's ALL siblings [without using advanced selectors] :
        var elem = $('.codes0 div, .codes0 p ');

        // 2) Changing single css property of [Next sibling - without using advanced selector] :
        elem.next().css('fontSize', '30px');

        // 3) Changing multiple css properties of [next sibling - without using advanced selector] :
        elem.next().css({
            color: '#080',
            border: '2px solid #080',
            width: '300px',

        });
        // 4) Assign an animation function {Slide Toggle} to [certain siblings - without using advanced selector] :
        elem.next().slideToggle(2500);
    });
});
// ------------------------------------------------------

// II] Second group [elem.next();] / b) Access to element's certain next Siblings [with using advanced selector(class Name) ]-> [all functions]  :
$(document).ready(function () {
    $('#btn22').click(function () {
        alert('Welcome to Access to element\'s certain Next Siblings [with using advanced selector(class Name) ]-> all Functions');

        // *) Defining element's next sibling [with using advanced selectors (Class Name)] :
        var elem = $('.codes0 div, .codes0 p ');

        // 2) Changing single css property of [certain next siblings - with using advanced selectors (Class Name)] :
        elem.next('.testP').css('fontSize', '40px');

        // 3) Changing multiple css properties of [certain next sibling - with using advanced selectors (Class Name)] :
        elem.next('.testP').css({
            color: '#00f',
            border: '3px solid #00f',
            width: '600px',
        });
        elem.next('.testD').css({
            color: '#00f',
            border: '3px solid #00f',
            width: '600px',
        });

        // 4) Assign an animation function {Slide Toggle} to [certain next sibling - with using advanced selector -class Name] :
        elem.next('.testP , testD').slideToggle(2500);
    });
});
// ------------------------------------------------------

// II] Second group [elem.next();] / c) Access to element's certain next Siblings [with using advanced selector(tag Name) ]-> [all functions]  :
$(document).ready(function () {
    $('#btn23').click(function () {
        alert('Welcome to Access to element\'s certain Siblings [with using advanced selector(Tag Name) ]-> all Functions');

        // *) Defining element's certain next sibling [with using advanced selectors (Tag Name)] :
        var elem = $('.codes0 div, .codes0 p ');

        // 2) Changing single css property of [certain next sibling - with using advanced selectors (Tag Name)] :
        elem.next('div').css('background', '#efefef');

        // 3) Changing multiple css properties of [certain next sibling - with using advanced selectors (Tag Name)] :
        elem.next('div').css({
            color: '#ccc',
            border: '5px solid #ccc',
            width: '900px',
        });
        elem.next('p').css({
            color: '#ccc',
            border: '5px solid #ccc',
            width: '900px',
        });

        // 4) Assign an animation function {Slide Toggle} to [certain siblings - with using advanced selector - Tag Name] :
        elem.next('div').slideToggle(2500);

    });
});

// ------------------------------------------------------
// II] Second group [elem.next();] / d) Access to element's certain next Siblings [with using advanced filter(contains) ]-> [all functions]  :
$(document).ready(function () {
    $('#btn24').click(function () {
        alert('Welcome to Access to element\'s certain Siblings [with using advanced filter(contains) ]-> all Functions');

        // *) Defining element's certain next sibling [with using advanced filter(contains)] :
        var elem = $('.codes0 div, .codes0 p ');

        // 2) Changing single css property of [certain next sibling with using advanced filter(contains)] :
        elem.next("div:contains('love')").css('fontSize', '30px');
        elem.next("p:contains('love')").css('fontSize', '30px');

        // 3) Changing multiple css properties of [certain next sibling - [with using advanced filter(contains)]] :
        elem.next("div:contains('love')").css({
            color: '#ff0',
            border: '5px solid #ff0',
            width: '400px',
        });
        elem.next("p:contains('love')").css({
            color: '#ff0',
            border: '5px solid #ff0',
            width: '400px',
        });

        // 4) Assign an animation function {Slide Toggle} to [certain next siblings - with using advanced selector - advanced filter(contains)] :
        elem.next("div:contains('love')").slideToggle(2500);

    });
});
// ------------------------------------------------------
// --------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------

// 3] Third group [elem.nextAll();] -> [4 functions] => Access element's (All next, All certain next siblings) [nextAll] to : [modify Css [single , muliptle] && [assign animation] ] :

// III] / a) Access to element's next siblings [without using advanced selector ] -> all Functions :
$(document).ready(function () {
    $('#btn31').click(function () {
        alert('Welcome to Access to element\'s All next Sibling [without using advanced selector ]-> all Functions');

        // *) Defining element's ALL Next siblings [without using advanced selectors] :
        var elem = $('.codes0 div, .codes0 p ');

        // 2) Changing single css property of [ALL Next siblings - without using advanced selector] :
        elem.nextAll().css('fontSize', '30px');

        // 3) Changing multiple css properties of [All Next sibling - without using advanced selector] :
        elem.nextAll().css({
            color: '#080',
            border: '2px solid #080',
            width: '300px',

        });
        // 4) Assign an animation function {Slide Toggle} to [certain siblings - without using advanced selector] :
        elem.nextAll().slideToggle(2500);
    });
});
// ------------------------------------------------------

// III] Third group [elem.nextAll();] / b) Access to element's certain next Siblings [with using advanced selector(class Name) ]-> [all functions]  :
$(document).ready(function () {
    $('#btn32').click(function () {
        alert('Welcome to Access to element\'s certain ALL Next Siblings [with using advanced selector(class Name) ]-> all Functions');

        // *) Defining element's next sibling [with using advanced selectors (Class Name)] :
        var elem = $('.codes0 div, .codes0 p ');

        // 2) Changing single css property of [certain All next siblings - with using advanced selectors (Class Name)] :
        elem.nextAll('.testP').css('fontSize', '40px');

        // 3) Changing multiple css properties of [certain All next sibling - with using advanced selectors (Class Name)] :
        elem.nextAll('.testP').css({
            color: '#00f',
            border: '3px solid #00f',
            width: '600px',
        });
        elem.nextAll('.testD').css({
            color: '#00f',
            border: '3px solid #00f',
            width: '600px',
        });

        // 4) Assign an animation function {Slide Toggle} to [certain next sibling - with using advanced selector -class Name] :
        elem.nextAll('.testP , testD').slideToggle(2500);
    });
});
// ------------------------------------------------------

// III] Third group [elem.nextAll();] / c) Access to element's certain All next Siblings [with using advanced selector(tag Name) ]-> [all functions]  :
$(document).ready(function () {
    $('#btn33').click(function () {
        alert('Welcome to Access to element\'s certain all next Siblings [with using advanced selector(Tag Name) ]-> all Functions');

        // *) Defining element's certain Next ALL sibling [with using advanced selectors (Tag Name)] :
        var elem = $('.codes0 div, .codes0 p ');

        // 2) Changing single css property of [certain All next sibling - with using advanced selectors (Tag Name)] :
        elem.nextAll('div').css('background', '#efefef');

        // 3) Changing multiple css properties of [certain All next sibling - with using advanced selectors (Tag Name)] :
        elem.nextAll('div').css({
            color: '#ccc',
            border: '5px solid #ccc',
            width: '900px',
        });
        elem.nextAll('p').css({
            color: '#ccc',
            border: '5px solid #ccc',
            width: '900px',
        });

        // 4) Assign an animation function {Slide Toggle} to [certain siblings - with using advanced selector - Tag Name] :
        elem.nextAll('div').slideToggle(2500);

    });
});

// ------------------------------------------------------
// III] Third group [elem.nextAll();] / d) Access to element's certain All next Siblings [with using advanced filter(contains) ]-> [all functions]  :
$(document).ready(function () {
    $('#btn34').click(function () {
        alert('Welcome to Access to element\'s certain Siblings [with using advanced filter(contains) ]-> all Functions');

        // *) Defining element's certain All next sibling [with using advanced filter(contains)] :
        var elem = $('.codes0 div, .codes0 p ');

        // 2) Changing single css property of [certain All next sibling with using advanced filter(contains)] :
        elem.nextAll("div:contains('love')").css('fontSize', '30px');
        elem.nextAll("p:contains('love')").css('fontSize', '30px');

        // 3) Changing multiple css properties of [certain All next sibling - [with using advanced filter(contains)]] :
        elem.nextAll("div:contains('love')").css({
            color: '#ff0',
            border: '5px solid #ff0',
            width: '400px',
        });
        elem.nextAll("p:contains('love')").css({
            color: '#ff0',
            border: '5px solid #ff0',
            width: '400px',
        });

        // 4) Assign an animation function {Slide Toggle} to [certain next siblings - with using advanced selector - advanced filter(contains)] :
        elem.nextAll("div:contains('love')").slideToggle(2500);

    });
});
// ------------------------------------------------------
// --------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------

// 4] Fourth group [elem.nextUntil();] -> [4 functions] => Access element's (Until next all siblings , Until certain next siblings) [nextUntil] to : [modify Css [single , muliptle] && [assign animation] ] :

// IV] Group [elem.nextUntil();] / a) Access to element's until next siblings [without using advanced selector ] -> all Functions :
$(document).ready(function () {
    $('#btn41').click(function () {
        alert('Welcome to Access to element\'s Until next Siblings [without using advanced selector ]-> all Functions');

        // *) Defining element's ALL siblings [without using advanced selectors] :
        var elem = $('.codes0 div, .codes0 p ');

        // 2) Changing single css property of [Until Next siblings - without using advanced selector] :
        elem.nextUntil().css('fontSize', '30px');

        // 3) Changing multiple css properties of [Until next siblings - without using advanced selector] :
        elem.nextUntil().css({
            color: '#080',
            border: '2px solid #080',
            width: '300px',

        });
        // 4) Assign an animation function {Slide Toggle} to [certain siblings - without using advanced selector] :
        elem.nextUntil().slideToggle(2500);
    });
});
// ------------------------------------------------------

// IV] Group [elem.nextUntil()] / b) Access to element's until certain next Siblings [with using advanced selector(class Name) ]-> [all functions]  :
$(document).ready(function () {
    $('#btn42').click(function () {
        alert('Welcome to Access to element\'s certain until Next Siblings [with using advanced selector(class Name) ]-> all Functions');

        // *) Defining element's Until next sibling [with using advanced selectors (Class Name)] :
        var elem = $('.codes0 div, .codes0 p ');

        // 2) Changing single css property of [certain until next siblings - with using advanced selectors (Class Name)] :
        elem.nextUntil('.testP').css('fontSize', '40px');

        // 3) Changing multiple css properties of [certain until next siblings - with using advanced selectors (Class Name)] :
        elem.nextUntil('.testP').css({
            color: '#00f',
            border: '3px solid #00f',
            width: '600px',
        });
        elem.nextUntil('.testD').css({
            color: '#00f',
            border: '3px solid #00f',
            width: '600px',
        });

        // 4) Assign an animation function {Slide Toggle} to [certain until next sibling - with using advanced selector -class Name] :
        elem.nextUntil('.testP , testD').slideToggle(2500);
    });
});
// ------------------------------------------------------

// IV] Group [elem.nextUntil()] / c) Access to element's until certain next Siblings [with using advanced selector(tag Name) ]-> [all functions]  :
$(document).ready(function () {
    $('#btn43').click(function () {
        alert('Welcome to Access to element\'s until certain Siblings [with using advanced selector(Tag Name) ]-> all Functions');

        // *) Defining element's until certain next sibling [with using advanced selectors (Tag Name)] :
        var elem = $('.codes0 div, .codes0 p ');

        // 2) Changing single css property of [Until certain next sibling - with using advanced selectors (Tag Name)] :
        elem.nextUntil('div').css('background', '#efefef');

        // 3) Changing multiple css properties of [Until certain next sibling - with using advanced selectors (Tag Name)] :
        elem.nextUntil('div').css({
            color: '#ccc',
            border: '5px solid #ccc',
            width: '900px',
        });
        elem.nextUntil('p').css({
            color: '#ccc',
            border: '5px solid #ccc',
            width: '900px',
        });

        // 4) Assign an animation function {Slide Toggle} to [until certain next siblings - with using advanced selector - Tag Name] :
        elem.nextUntil('div').slideToggle(2500);

    });
});

// ------------------------------------------------------
// IV] Group [elem.nextUntil()] / d) Access to element's certain Until next Siblings [with using advanced filter(contains) ]-> [all functions]  :
$(document).ready(function () {
    $('#btn44').click(function () {
        alert('Welcome to Access to element\'s until certain Siblings [with using advanced filter(contains) ]-> all Functions');

        // *) Defining element's until certain next sibling [with using advanced filter(contains)] :
        var elem = $('.codes0 div, .codes0 p ');

        // 2) Changing single css property of [Until certain next sibling with using advanced filter(contains)] :
        elem.nextUntil("div:contains('love')").css('fontSize', '30px');
        elem.nextUntil("p:contains('love')").css('fontSize', '30px');

        // 3) Changing multiple css properties of [Until certain next sibling - [with using advanced filter(contains)]] :
        elem.nextUntil("div:contains('love')").css({
            color: '#ff0',
            border: '5px solid #ff0',
            width: '400px',
        });
        elem.nextUntil("p:contains('love')").css({
            color: '#ff0',
            border: '5px solid #ff0',
            width: '400px',
        });

        // 4) Assign an animation function {Slide Toggle} to [Until certain next siblings - with using advanced selector - advanced filter(contains)] :
        elem.nextUntil("div:contains('love')").slideToggle(2500);

    });
});
// ------------------------------------------------------
// V] / Fourth group [elem.nextUntil();] / e) Access to certain single element[first => with class:(fspan) ] and apply changes until certain next Sibling {span} [with using advanced selector(tagName) ]-> [all functions]  :
$(document).ready(function () {
    $('#btn45').click(function () {
        alert('Welcome to Access to element Until certain next Sibling [with using advanced selector(className) ]-> all Functions');

        // *) Defining element's [Until certain next sibling [with using advanced selector(className: .testD)] :
        var elem = $('.codes0 .fspan');

        // 2) Changing single css property of [Until certain next sibling with using advanced selector(tagname: span)] :
        elem.nextUntil("span").css('fontSize', '30px');
        elem.nextUntil("span").css('fontSize', '30px');

        // 3) Changing multiple css properties of [Until certain next sibling with using advanced selector(className: Span)] :
        elem.nextUntil("span").css({
            color: 'orange',
            border: '5px solid #111',
            width: '400px',
        });

        // 4) Assign an animation function {Slide Toggle} to [Until certain next sibling with using advanced selector(tagname span)] :
        elem.nextUntil("span").slideDown(3000);

    });
});

// --------------------------------------------------------
// --------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------

// 5] Fifth group [elem.prev();] -> [4 functions] => Access element's (All pervoius , certain previous siblings) [prev] to : [modify Css [single , muliptle] && [assign animation] ] :

// V] Fifth group [elem.prev();] / a) Access to element's previous siblings [without using advanced selector ] -> all Functions :
$(document).ready(function () {
    $('#btn51').click(function () {
        alert('Welcome to Access to element\'s previous Sibling [without using advanced selector ]-> all Functions');

        // *) Defining element's until previous siblings [without using advanced selectors] :
        var elem = $('.codes0 div, .codes0 p ');

        // 2) Changing single css property of [previous sibling - without using advanced selector] :
        elem.prev().css('fontSize', '30px');

        // 3) Changing multiple css properties of [previous sibling - without using advanced selector] :
        elem.prev().css({
            color: '#080',
            border: '2px solid #080',
            width: '300px',

        });
        // 4) Assign an animation function {Slide Toggle} to [previous siblings - without using advanced selector] :
        elem.prev().slideToggle(2500);
    });
});
// ------------------------------------------------------

// V] Fifth group [elem.prev();] / b) Access to element's previous Siblings [with using advanced selector(class Name) ]-> [all functions]  :
$(document).ready(function () {
    $('#btn52').click(function () {
        alert('Welcome to Access to element\'s previous Siblings [with using advanced selector(class Name) ]-> all Functions');

        // *) Defining element's All previous sibling [with using advanced selectors (Class Name)] :
        var elem = $('.codes0 div, .codes0 p ');

        // 2) Changing single css property of [previous siblings - with using advanced selectors (Class Name)] :
        elem.prev('.testP').css('fontSize', '40px');

        // 3) Changing multiple css properties of [previous sibling - with using advanced selectors (Class Name)] :
        elem.prev('.testP').css({
            color: '#00f',
            border: '3px solid #00f',
            width: '600px',
        });
        elem.prev('.testD').css({
            color: '#00f',
            border: '3px solid #00f',
            width: '600px',
        });

        // 4) Assign an animation function {Slide Toggle} to [prevoius sibling - with using advanced selector -class Name] :
        elem.prev('.testP , testD').slideToggle(2500);
    });
});
// ------------------------------------------------------

// V] / Fifth group [elem.prev();] / c) Access to element's certain previous [with using advanced selector(tag Name) ]-> [all functions]  :
$(document).ready(function () {
    $('#btn53').click(function () {
        alert('Welcome to Access to element\'s previous Siblings [with using advanced selector(Tag Name) ]-> all Functions');

        // *) Defining element's certain previous sibling [with using advanced selectors (Tag Name)] :
        var elem = $('.codes0 div, .codes0 p ');

        // 2) Changing single css property of [certain previous sibling - with using advanced selectors (Tag Name)] :
        elem.prev('div').css('background', '#efefef');

        // 3) Changing multiple css properties of [certain previous siblings - with using advanced selectors (Tag Name)] :
        elem.prev('div').css({
            color: '#ccc',
            border: '5px solid #ccc',
            width: '900px',
        });
        elem.prev('p').css({
            color: '#ccc',
            border: '5px solid #ccc',
            width: '900px',
        });

        // 4) Assign an animation function {Slide Toggle} to [certain siblings - with using advanced selector - Tag Name] :
        elem.prev('div').slideToggle(2500);

    });
});

// ------------------------------------------------------
// V] / Fifth group [elem.prev();] / d) Access to element's certain previous Siblings [with using advanced filter(contains) ]-> [all functions]  :
$(document).ready(function () {
    $('#btn54').click(function () {
        alert('Welcome to Access to element\'s certain previous Siblings [with using advanced filter(contains) ]-> all Functions');

        // *) Defining element's certain previous sibling [with using advanced filter(contains)] :
        var elem = $('.codes0 div, .codes0 p ');

        // 2) Changing single css property of [certain previous sibling with using advanced filter(contains)] :
        elem.prev("div:contains('love')").css('fontSize', '30px');
        elem.prev("p:contains('love')").css('fontSize', '30px');

        // 3) Changing multiple css properties of [certain previous sibling - [with using advanced filter(contains)]] :
        elem.prev("div:contains('love')").css({
            color: '#ff0',
            border: '5px solid #ff0',
            width: '400px',
        });
        elem.prev("p:contains('love')").css({
            color: '#ff0',
            border: '5px solid #ff0',
            width: '400px',
        });

        // 4) Assign an animation function {Slide Toggle} to [certain previous siblings - with using advanced selector - advanced filter(contains)] :
        elem.prev("div:contains('love')").slideToggle(2500);

    });
});
// ------------------------------------------------------
// --------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------

// 6] Sixth group [elem.prevAll();] -> [4 functions] => Access element's (All previous, certain all previous siblings) [All previous] to : [modify Css [single , muliptle] && [assign animation] ] :

// VI] Sixth group [elem.prevAll();] / a) Access to element's All previous siblings [without using advanced selector ] -> all Functions :
$(document).ready(function () {
    $('#btn61').click(function () {
        alert('Welcome to Access to element\'s All previous Sibling [without using advanced selector ]-> all Functions');

        // *) Defining element's ALL previous siblings [without using advanced selectors] :
        var elem = $('.codes0 div, .codes0 p ');

        // 2) Changing single css property of [All previous sibling - without using advanced selector] :
        elem.prevAll().css('fontSize', '30px');

        // 3) Changing multiple css properties of [All previous sibling - without using advanced selector] :
        elem.prevAll().css({
            color: '#080',
            border: '2px solid #080',
            width: '300px',

        });
        // 4) Assign an animation function {Slide Toggle} to [certain siblings - without using advanced selector] :
        elem.prevAll().slideToggle(2500);
    });
});
// ------------------------------------------------------

// VI] Sixth group [elem.prevAll();] / b) Access to element's certain All previous Siblings [with using advanced selector(class Name) ]-> [all functions]  :
$(document).ready(function () {
    $('#btn62').click(function () {
        alert('Welcome to Access to element\'s certain All previous Siblings [with using advanced selector(class Name) ]-> all Functions');

        // *) Defining element's All previous siblings [with using advanced selectors (Class Name)] :
        var elem = $('.codes0 div, .codes0 p ');

        // 2) Changing single css property of [certain All previous siblings - with using advanced selectors (Class Name)] :
        elem.prevAll('.testP').css('fontSize', '40px');

        // 3) Changing multiple css properties of [certain All previous sibling - with using advanced selectors (Class Name)] :
        elem.prevAll('.testP').css({
            color: '#00f',
            border: '3px solid #00f',
            width: '600px',
        });
        elem.prevAll('.testD').css({
            color: '#00f',
            border: '3px solid #00f',
            width: '600px',
        });

        // 4) Assign an animation function {Slide Toggle} to [certain All previous sibling - with using advanced selector -class Name] :
        elem.prevAll('.testP , testD').slideToggle(2500);
    });
});
// ------------------------------------------------------

// VI] / Sixth group [elem.prevAll();] / c) Access to element's certain All previous Siblings [with using advanced selector(tag Name) ]-> [all functions]  :
$(document).ready(function () {
    $('#btn63').click(function () {
        alert('Welcome to Access to element\'s certain All previous Siblings [with using advanced selector(Tag Name) ]-> all Functions');

        // *) Defining element's All certain previous sibling [with using advanced selectors (Tag Name)] :
        var elem = $('.codes0 div, .codes0 p ');

        // 2) Changing single css property of [certain All previous sibling - with using advanced selectors (Tag Name)] :
        elem.prevAll('div').css('background', '#efefef');

        // 3) Changing multiple css properties of [certain All previous sibling - with using advanced selectors (Tag Name)] :
        elem.prevAll('div').css({
            color: '#ccc',
            border: '5px solid #ccc',
            width: '900px',
        });
        elem.prevAll('p').css({
            color: '#ccc',
            border: '5px solid #ccc',
            width: '900px',
        });

        // 4) Assign an animation function {Slide Toggle} to [certain All previous siblings - with using advanced selector - Tag Name] :
        elem.prevAll('div').slideToggle(2500);

    });
});

// ------------------------------------------------------
// VI] / Sixth group [elem.prevAll();] / d) Access to element's certain All previous Siblings [with using advanced filter(contains) ]-> [all functions]  :
$(document).ready(function () {
    $('#btn64').click(function () {
        alert('Welcome to Access to element\'s certain All previous Siblings [with using advanced filter(contains) ]-> all Functions');

        // *) Defining element's All certain previous siblings [with using advanced filter(contains)] :
        var elem = $('.codes0 div, .codes0 p ');

        // 2) Changing single css property of [certain All previous sibling with using advanced filter(contains)] :
        elem.prevAll("div:contains('love')").css('fontSize', '30px');
        elem.prevAll("p:contains('love')").css('fontSize', '30px');

        // 3) Changing multiple css properties of [certain ALL previous sibling - [with using advanced filter(contains)]] :
        elem.prevAll("div:contains('love')").css({
            color: '#ff0',
            border: '5px solid #ff0',
            width: '400px',
        });
        elem.prevAll("p:contains('love')").css({
            color: '#ff0',
            border: '5px solid #ff0',
            width: '400px',
        });

        // 4) Assign an animation function {Slide Toggle} to [certain All previous siblings - with using advanced selector - advanced filter(contains)] :
        elem.prevAll("div:contains('love')").slideToggle(2500);

    });
});
// ------------------------------------------------------
// --------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------

// 7] Seven group [elem.prevUntil();] -> [4 functions] => Access element's ( previous until ,  certain until previous siblings) [previous until] to : [modify Css [single , muliptle] && [assign animation] ] :

// VII] Seven group [elem.prevUntil();] -> / a) Access to element's until previous siblings [without using advanced selector ] -> all Functions :
$(document).ready(function () {
    $('#btn71').click(function () {
        alert('Welcome to Access to element\'s All previous Until Siblings [without using advanced selector ]-> all Functions');

        // *) Defining element's ALL previous siblings [without using advanced selectors] :
        var elem = $('.codes0 div, .codes0 p ');

        // 2) Changing single css property of [Until previous siblings - without using advanced selector] :
        elem.prevUntil().css('fontSize', '30px');

        // 3) Changing multiple css properties of [Until previous siblings - without using advanced selector] :
        elem.prevUntil().css({
            color: '#080',
            border: '2px solid #080',
            width: '300px',

        });
        // 4) Assign an animation function {Slide Toggle} to [Until certain previous siblings - without using advanced selector] :
        elem.prevUntil().slideToggle(2500);
    });
});
// ------------------------------------------------------

// VII] Seven group [elem.prevUntil();] / b) Access to element's Until certain All previous Siblings [with using advanced selector(class Name)]-> [all functions]  :
$(document).ready(function () {
    $('#btn72').click(function () {
        alert('Welcome to Access to element\'s all certain until previous Siblings [with using advanced selector(class Name) ]-> all Functions');

        // *) Defining element's until previous siblings [with using advanced selectors (Class Name)] :
        var elem = $('.codes0 div, .codes0 p ');

        // 2) Changing single css property of [Until certain previous siblings - with using advanced selectors (Class Name)] :
        elem.prevUntil('.testP').css('fontSize', '40px');

        // 3) Changing multiple css properties of [Until certain previous siblings - with using advanced selectors (Class Name)] :
        elem.prevUntil('.testP').css({
            color: '#00f',
            border: '3px solid #00f',
            width: '600px',
        });
        elem.prevUntil('.testD').css({
            color: '#00f',
            border: '3px solid #00f',
            width: '600px',
        });

        // 4) Assign an animation function {Slide Toggle} to [Until certain previous siblings - with using advanced selector -class Name] :
        elem.prevUntil('.testP , testD').slideToggle(2500);
    });
});
// ------------------------------------------------------

// VII] / Seven group [elem.prevUntil();] / c) Access to element's Until certain previous Siblings [with using advanced selector(tag Name) ]-> [all functions]  :
$(document).ready(function () {
    $('#btn73').click(function () {
        alert('Welcome to Access to element\'s certain until previous Siblings [with using advanced selector(Tag Name) ]-> all Functions');

        // *) Defining element's Until certain previous siblings [with using advanced selectors (Tag Name)] :
        var elem = $('.codes0 div, .codes0 p ');

        // 2) Changing single css property of [until certain previous siblings - with using advanced selectors (Tag Name)] :
        elem.prevUntil('div').css('background', '#efefef');

        // 3) Changing multiple css properties of [Until certain previous siblings - with using advanced selectors (Tag Name)] :
        elem.prevUntil('div').css({
            color: '#ccc',
            border: '5px solid #ccc',
            width: '900px',
        });
        elem.prevUntil('p').css({
            color: '#ccc',
            border: '5px solid #ccc',
            width: '900px',
        });

        // 4) Assign an animation function {Slide Toggle} to [Until certain siblings - with using advanced selector - Tag Name] :
        elem.prevUntil('div').slideToggle(2500);

    });
});

// ------------------------------------------------------
// V] / Seven group [elem.prevUntil();]  / d) Access to element's Until certain previous Siblings [with using advanced filter(contains) ]-> [all functions]  :
$(document).ready(function () {
    $('#btn74').click(function () {
        alert('Welcome to Access to element\'s certain Until previous Siblings [with using advanced filter(contains) ]-> all Functions');

        // *) Defining element's certain Until previous siblings [with using advanced filter(contains)] :
        var elem = $('.codes0 div, .codes0 p ');

        // 2) Changing single css property of [Until certain previous siblings with using advanced filter(contains)] :
        elem.prevUntil("div:contains('love')").css('fontSize', '30px');
        elem.prevUntil("p:contains('love')").css('fontSize', '30px');

        // 3) Changing multiple css properties of [Until certain previous siblings - [with using advanced filter(contains)]] :
        elem.prevUntil("div:contains('love')").css({
            color: '#ff0',
            border: '5px solid #ff0',
            width: '400px',
        });
        elem.prevUntil("p:contains('love')").css({
            color: '#ff0',
            border: '5px solid #ff0',
            width: '400px',
        });

        // 4) Assign an animation function {Slide Toggle} to [certain Until previous siblings - with using advanced selector - advanced filter(contains)] :
        elem.prevUntil("div:contains('love')").slideToggle(2500);

    });
});
// ------------------------------------------------------
// --------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// V] / Seven group [elem.prevUntil();] / d) Access to element's Until certain previous Siblings [with using advanced filter(contains) ]-> [all functions]  :
$(document).ready(function () {
    $('#btn74').click(function () {
        alert('Welcome to Access to element\'s Until certain previous Siblings [with using advanced filter(contains) ]-> all Functions');

        // *) Defining element's Until certain previous sibling [with using advanced filter(contains)] :
        var elem = $('.codes0 div, .codes0 p ');

        // 2) Changing single css property of [Until certain previous siblings with using advanced filter(contains)] :
        elem.prevUntil("div:contains('love')").css('fontSize', '30px');
        elem.prevUntil("p:contains('love')").css('fontSize', '30px');

        // 3) Changing multiple css properties of [Until certain previous siblings - [with using advanced filter(contains)]] :
        elem.prevUntil("div:contains('love')").css({
            color: '#ff0',
            border: '5px solid #ff0',
            width: '400px',
        });
        elem.prevUntil("p:contains('love')").css({
            color: '#ff0',
            border: '5px solid #ff0',
            width: '400px',
        });

        // 4) Assign an animation function {Slide Toggle} to [Until certain previous siblings - with using advanced selector - advanced filter(contains)] :
        elem.prevUntil("div:contains('love')").slideToggle(2500);

    });
});
// ------------------------------------------------------
// V] / Seven group [elem.prevUntil();] / e) Access to certain single element[last => with class:(testD) ] and apply changes until certain previous Sibling {span} [with using advanced selector(tagName) ]-> [all functions]  :
$(document).ready(function () {
    $('#btn75').click(function () {
        alert('Welcome to Access to element Until certain previous Siblings [with using advanced selector(className) ]-> all Functions');

        // *) Defining element's [Until certain previous sibling [with using advanced selector(className: .testD)] :
        var elem = $('.codes0 .testD');

        // 2) Changing single css property of [Until certain previous sibling with using advanced selector(tagname: span)] :
        elem.prevUntil("span").css('fontSize', '30px');
        elem.prevUntil("span").css('fontSize', '30px');

        // 3) Changing multiple css properties of [Until certain previous sibling with using advanced selector(className: Span)] :
        elem.prevUntil("span").css({
            color: 'gold',
            border: '5px solid #111',
            width: '400px',
        });
        // elem.prevUntil("span").css({
        //     color: 'gold',
        //     border: '5px solid #111',
        //     width: '400px',
        // });

        // 4) Assign an animation function {Slide Toggle} to [Until certain previous sibling with using advanced selector(span)] :
        elem.prevUntil("span").slideDown(3000);

    });
});
// ------------------------------------------------------
// --------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------

