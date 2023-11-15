//  23 jQuery - Selectors Reference Part 4
/* Main lessons functions :
    a) Main Selector References { 5 } GROUPS & { 11 } Functions :
        1) [Specific elements Tag type] (1 function) => { $("header") } 
        2) [Has a certain child Tagname/ClassName/TagName] (1 function) => { $("elem:has('Tagname/ClassName/TagName')") } 
        3) [with specific events] Group (2 function) => { $(":animated") & $(":focus") }
        4) [Empty & Has contents & contain a certain contents] Group (3 function) => {$(":contains('')") & $(":empty") & $(":parent")  }
        5) [Hidden and visibility] Group (2 function) => { $(":hidden") & $(":visible") } 
        6) [Solo funtcions] (2 function) => [$(":root") & $(":lang('language')") ]
        
    b) Main used methods within selector used in this lessons functions  : 
        1) Single and nested functions 
        2) Combined functions
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

// II] Functions buttons [ 6 ] main Groups functions :

// 1] First group [ Specific elements tag type Selectors] [ 1 functions] {:header}  :

// a] /1] Using [{:header} ] to select all types of headers elements in the webpage {simple css {border , background , fontsize , color} } :
$(document).ready(function () {
    $('#btn11').click(function () {

        alert('Welcome to Access to [Using [{:header} ] to select all types of headers elements in the webpage {simple css {border , background , fontsize , color}] ');

        // *) Defining Header element(s) inside any of container's child section :
        var TagNameElem1 = $(".codes0 *:header");

        // 1) Changing single css property on [Each selected header element to apply change of => {border , background , fontsize , color} ] :
        TagNameElem1.css({
            'color': 'white',
            'background': 'black',
            'fontSize': '30px',
            'border': '5px solid red',
        });
    });
});
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// --------------------------------------------------------
// ------------------------------------------------------

// 2] Second group [HAS a certain child {tagname , class , id}] (1 function) => { $("elem:has('tagname/class/id')") }  to apply : [simple change] :

// a] Second group [Has a certain child {tagname , class , id}] Selectors -> a) [Select the any element has certain child with (tagname , class , id)] -> [Font color] :
$(document).ready(function () {
    $('#btn21').click(function () {
        alert('Welcome to Access to [Has a certain child {tagname , class , id}] Selectors -> a) [Select the any element has certain child with (tagname , class , id)] -> [Font color , font size , border , borderRadius] ');

        // *) Defining main element(s) of a certain type [Tag Name , className , idName ]  :
        var TagNameElem1 = $(".codes0 ul li:has('p')"),
            TagNameElem2 = $(".codes0 ul li:has('.shadi')"),
            TagNameElem3 = $(".codes0 ul li:has(#shadi)");

        alert('Container Element [li] which has child of tagName:[P] -> applied css changes');
        alert('Container Element [li] which has child of className:[.shadi] -> applied css changes');
        alert('Container Element [li] which has child of IdName:[#shadi] -> applied css changes');

        // 1) Changing single css property of [Each selected element => {Font color , font size , border , borderRadius} ] :
        TagNameElem1.css({
            'color': 'gold',
            'fontSize': '30px',
            'border': '5px solid gold',
            'borderRadius': '30px',
        });
        TagNameElem2.css({
            'color': 'gold',
            'fontSize': '30px',
            'border': '5px solid gold',
            'borderRadius': '30px',
        });
        TagNameElem3.css({
            'color': 'gold',
            'fontSize': '30px',
            'border': '5px solid gold',
            'borderRadius': '30px',
        });
    });
});

// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------

// 3] Third group [with specific events/effect] Group (2 functions) => { $(":animated") & $(":focus") } -> simple change (css properety) + Animation] :

// a] / Third group [with specific events/effect] Group -> a) [Using [ { $(":animated") } ] method to select any elements has {Animation} function -> {backgroundColor} ]  :
$(document).ready(function () {
    $('#btn31').click(function () {

        alert('Welcome to Access to [with specific events/effect] Selectors / a) [Using [ { $(":animated") } ] method to select any elements has {Animation} function ] ->  {Animation : (background Color , Font color) } ');

        // 1) Setting animation functions on defind elements :
        $(".codes0 div:first-child").animate({
            width: '1000px',
            fontSize: '40px',
        }, 3000);

        $(".codes0 p:first-child").animate({
            width: '1000px',
            fontSize: '40px',
        }, 3000);

        $(".codes0 span:first-child").animate({
            width: '1000px',
            fontSize: '40px',
        }, 3000);


        // *) Defining main element(s) that will has an animation function [div, p, span] first child of e  :
        var TagNameElem1 = $(".codes0 div:animated"),
            TagNameElem2 = $(".codes0 p:animated"),
            TagNameElem3 = $(".codes0 span:animated");

        // 2) Changing single css property of [Each selected element => {background Color , Font color} ] :
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

// b] / Third group Using [with specific events] -> b) [ { $(":focus") } ] method to select any input field has focus effect {padding}] :
$(document).ready(function () {
    $('#btn32').click(function () {

        alert('Welcome to Access to [with specific events/effect] Selectors / b) [ { $(":focus") } ] method to select any input field has focus effect {padding}] ');

        // *) Defining main element(s) that will has an animation function [Input] :
        var TagNameElem1 = $(".codes0 .input1");

        // 1) Setting Focus function on defind Input element :
        TagNameElem1.focus();

        // 2) Changing single css property of [Selected Input element => {Padding} ] :
        TagNameElem1.css({
            'padding': '30px',
            'width': '600px',
            'height': '150px',
        });

    });
});
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------

// 4] Forth group [Contain a certain contents || Empty || Has any contents] Group {3 functions} => { $(":contains") & $(":empty") & $(":parent")  } -> simple change ( css properety ] : [simple change] :

// a] Fourth group [Contain a certain contents || Empty || Has any contents] Selectors -> a) Using [{ $(":contains('text')") } method to select certain element with certain content -> [Font Size, Font Color] :
$(document).ready(function () {
    $('#btn41').click(function () {
        alert('Welcome to Access to [Contain a certain contents || Empty || Has any contents] Selectors => a) Using [{ $(":contains(\'text\')") } method to select certain element with certain content  -> [Font Size, Font Color]');

        // *) Defining main element of a any type [with certain contents] inside the main container  :
        var TagNameElem1 = $(".codes0 div:contains('jq')");

        // 1) Changing single css property of [selected element => Font size  & Font color ] :
        TagNameElem1.css({
            'fontSize': '40px',
            'color': 'blue',
        });

    });
});
// ------------------------------------------------------

// b] Fourth group [Contain a certain contents || Empty || Has any contents] Selectors -> b) Using [{ $(":empty") } method to select any elements is empty of any contents or even empty spaces [Background , Height] : 
$(document).ready(function () {
    $('#btn42').click(function () {
        alert('Welcome to Access to [Contain a certain contents || Empty || Has any contents] Selectors => a) Using [{ $(":empty") } method to select any element has no content  -> [Background , height]');

        // *) Defining main element of a any type [has NO Content (Empty)] inside the main container  :
        var TagNameElem1 = $(".codes0 div:empty");

        // 1) Changing single css property of [selected element => background  & height ] :
        TagNameElem1.css({
            'background': 'blue',
            'height': '300px',
        });

    });
});
// ------------------------------------------------------

// c] Fourth group [Contain a certain contents || Empty || Has any contents] Selectors -> c) Using [{ $(":parent") } method to select any elements is Not empty and has any content of any type even empty spaces [Border & Font color & Background] : 
$(document).ready(function () {
    $('#btn43').click(function () {
        alert('Welcome to Access [Contain a certain contents || Empty || Has any contents] =>  c) Using [{ $(":parent") } method to select any elements is Not empty and has any content of any type even empty spaces -> [Border & Font color & Background] ');

        // *) Defining main element of a any type [Has content] inside the main container  :
        var TagNameElem1 = $(".codes0:parent");

        // 1) Changing single css property of [selected element => Border & Font color & Background ] :
        TagNameElem1.css({
            'border': '10px solid blue',
            'color': 'blue',
            'background': 'red',
        });
    });
});
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------

// 5] Fifth group [Hidden and visibility] Group {2 functions} => { $(":hidden") & $(":visible") } -> (CSS properety & animation) ] :

// 5] Fifth group [Hidden and visibility] Selectors -> a) Using [{ $(":hidden") } method to select any hidden element with in the page -> (CSS properety & animation)  :
$(document).ready(function () {
    $('#btn51').click(function () {
        alert('Welcome to Access to [Hidden and visibility] Selectors -> a) Using [{ $(":hidden") } method to select any hidden element with in the page -> (CSS properety & animation) ');

        // *) Defining main element(s) of a certain type [div]  :
        var TagNameElem1 = $(".codes0 div:hidden");

        // 1) Changing Single CSS property + Adding SlideToggle effect to [Hidden selected element(s) => of any type] :
        TagNameElem1.css({
            'fontSize': '40px',
            'color': 'red',
            'border': '5px solid gold',
            'background': 'blue',
            'height': '300px',
        }).slideToggle(3000);

    });
});
// ------------------------------------------------------

// 5] Fifth group [Hidden and visibility] Selectors ->  b) Using [{ $(":visible")  } method to select any elements are visible [Not display : none] :
$(document).ready(function () {
    $('#btn52').click(function () {
        alert('Welcome to Access to [Hidden and visibility] Selectors ->  b) Using [{ $(":visible") } method to select any elements are visible [Not display : none] ');

        // *) Defining main element(s) of a certain type [Any type]  :
        var TagNameElem2 = $(".codes0:visible");

        // 1) Changing Single CSS property + Adding slideToggle to [Visible selected element(s) => of any type]  :
        TagNameElem2.css({
            'fontSize': '40px',
            'color': 'red',
            'border': '5px solid gold',
        }).slideDown(3000);

    });
});

// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------

// 6] [Solo selectors] Group => { $(":root") & $(":lang('')") } -> simple change ( css properety : {border , padding} ] ] :

// 6] Sixth group [Solo selectors] Group (2 functions) => a) Using [{ $(":root") } method to select the main element {html} with in the page -> {border , padding} :
$(document).ready(function () {
    $('#btn61').click(function () {
        alert('Welcome to Access to [Solo selectors] -> a) Using [{ $(":root") } method to select the main element {html} with in the page -> {border , padding}');

        // *) Defining main element of [html] type  :
        var TagNameElem1 = $(":root");

        // 1) Changing single css property of [the selected element => {border , padding} ] :
        TagNameElem1.css({
            'border': '5px solid gold',
            'padding': '5px',
        })
    });
});
// ------------------------------------------------------

// 6] Sixth group [Solo selectors] Group => Using [{ $("elem:lang('languageValue')")  } method to select any element with attribute {lang} with certain value  :
$(document).ready(function () {
    $('#btn62').click(function () {
        alert('Welcome to Access to [Solo selectors] ->  b) Using [{ $("elem:lang(\'languageValue\')")  } method to select any element with attribute {lang} with certain value -> {Font size & color & background} ');

        // *) Defining main element(s) of a certain type [div] :
        var TagNameElem1 = $(".codes0 div:lang('ar')"),
            TagNameElem2 = $(".codes0 div:lang('en')");


        // 1) Changing multiple css properties of [selected element => {Font size & color & background} ] :
        TagNameElem1.css({
            'fontSize': '40px',
            'color': 'white',
            'background': 'green',
        })

        TagNameElem2.css({
            'fontSize': '40px',
            'color': 'white',
            'background': 'green',
        })

    });
});

// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------

