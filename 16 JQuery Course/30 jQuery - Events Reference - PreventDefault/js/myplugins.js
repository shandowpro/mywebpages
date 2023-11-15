//  30 jQuery - Events Reference - PreventDefault
/* Main lessons functions :
    a) Main Events References {part 4} -> {on()} =>  [ 2 ] Groups &  [ 8 ] functions :
                                
        1) First Group : [ Preventing Default action function of link by {JS + Html : default method } + {JQ: preventDefault();} ] {2 functions}  
        
        2) Second Group [Testing the Default preventing event of a certain element by using {isDefaultPrevented()} ] [ 1 functions] 
    
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
        TagNameElem21 = $(".codes0 .g21 ");

    // II] Main functions Groups :
    // 1] First Group : [ Preventing Default action function of link by {JS + Html : default method } + {JQ: preventDefault();} ] {2 functions}  :

    // a] Using { < elemTag onclick="return false;" > } -> Old Tradition Method - Html and Js} to prevent defalult action||procedure by using only JS ] :
    // TagNameElem11.click(function () {
    TagNameElem11.on("click", function () {
        alert('Welcome to Using ordianry preventing Default {by using HTMl + Js} -> To prevent the navigate of the url href]');
        $(TagNameElem11).text('This link has been preventing Default by using [by using HTMl + Js] , and will not navigate to the assign URL');
        TagNameElem11.focus();
    });
    // });

    // b] Using [ $(elem).preventDefault() ; ] to prevent link from navigating to the asssinged url address(href) + processing a certain event instead (fadeOut this elementy ) ] :
    // TagNameElem12.click(function () {
    TagNameElem12.on("click", function (event) {
        alert('Welcome to Using { $(elem).preventDefault(); } -> To to prevent link from navigating to the asssinged url address(href) + processing acertain event instead ]');
        event.preventDefault();
        TagNameElem12.fadeOut(2000);
        TagNameElem12.focus();
    });
    // });

    // ------------------------------------------------------
    // ------------------------------------------------------

    // 2] Second Group [Testing the Default preventing event of a certain element by using {isDefaultPrevented()} ] [ 1 functions]   

    // a] Using { $("elem").preventDefault(); } -> Preventing the link from navigating to the assigned URL Href ] :

    TagNameElem21.on("click", function (event) {
        alert('Welcome to Using { using {preventDefault()} & {isDefaultPrevented()} } -> To Testing the Default preventing event of a certain element]');
        // First activate the preventDarfault of the selected element : 

        event.preventDefault();

        // Second testing the preventDarfault of the selected element : 
        if (event.isDefaultPrevented()) {
            TagNameElem21.text('This link is a Default Prevented , and will not navigate to the assinged url ');
            alert('This link is a Default Prevented , and will not navigate to the assinged url ');
        } else {
            TagNameElem21.text('This link is a Default Prevented , and will not navigate to the assinged url ');
            alert('This link is a NOT Default Prevented , and will navigate to the assinged url ');
        }
    });
});
