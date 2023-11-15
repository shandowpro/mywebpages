//  13 jQuery - Html - Dealing With Css Classes
/* Main lessons functions :
    a) Main usage of the CSS function  : 
        1) addClass(); => [Add new class(es) to an element(s)]
        2) removeClass(); => [Delete existed class(es) from element(s)] 
        3) toggleClass(); => [Toggle class(es) within an element(s)]  

    b) Method of Adding, Removing, Toggling : 
        1) one Class to one element
        2) one Class to multiple elements
        3) multiple Classes to one element
        4) multiple Classes to multiple elements
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
// 5) Fourth plus button :
$(document).ready(function () {
    $('#plus5').click(function () {
        $('#group5').slideToggle('slow');
    });
});
// 6) Fourth plus button :
$(document).ready(function () {
    $('#plus6').click(function () {
        $('#group6').slideToggle('slow');
    });
});
// =========================================================
// =========================================================
// =========================================================

// II] Functions buttons [6] main functions :
// 1] {addClass()} Functions -> functional buttons [ 3 ] Adding new class(s) to element(s) :
// First addClass function => [ Adding new one class to single certain element {Basic function} ] : 
$(document).ready(function () {
    $('#btn11').click(function () {
        var div = $('.display');
        $(div).addClass('shadi');
    });
});
// ------------------------------------------------------

// 1] Second addClass function => [ Adding multiple classes to single certain element {Basic function} ] :
$(document).ready(function () {
    $('#btn12').click(function () {
        var div = $('.display');
        $(div).addClass('shadi br custom');
    })
});

// ---------------------------------------------

// 1] Third addClass function => [ Adding one class to multiple elements {Basic function} ]  :
$(document).ready(function () {
    $('#btn13').click(function () {
        var div = $('.display'),
            span = $('.span'),
            p = $('.p');
        $(div, span, p).addClass('shadi');
    })
});

// ---------------------------------------------

// 1] Fourth addClass function => [ Adding multiple classes to multiple elements {Basic function} ]  :
$(document).ready(function () {
    $('#btn14').click(function () {
        var div = $('.display'),
            span = $('.span'),
            p = $('.p');
        $(div, span, p).addClass('shadi br custom');
    })
});
// ---------------------------------------------

// 1] Fifth addClass function => [ Adding one class to one element {using Advanced selectors filtering function} ]  :
$(document).ready(function () {
    $('#btn15').click(function () {
        // var div = $('.display');
        // Adding new Class to the the element that contains textnode of a certain value 
        $(".display:contains('shadi')").addClass('shadi');

        // Adding new Class to the the element index number [1 : second]  
        $(".span:eq(1)").addClass('shadi');

        // Adding new Class to the first element of it's type with in the dom
        $(".p:first('shadi')").addClass('shadi');

        // Adding new Class to the last element of it's type with in the dom
        $(".p:last('shadi')").addClass('shadi');
    })
});

// ---------------------------------------------

// 1] Sixth addClass function => [ Adding multiple classes to single element {using Advanced selectors filtering function} ]  :
$(document).ready(function () {
    $('#btn16').click(function () {
        // Adding multiple Classes to the the element that contains textnode of a certain value 
        $(".display:contains('shadi')").addClass('shadi custom br');

        // Adding multiple Classes to the the element index number [1 : {second element in order}]
        $(".span:eq(1)").addClass('shadi custom br');

        // Adding multiple Classes to the first element of it's type with in the DOM
        $(".p:first('shadi')").addClass('shadi custom br');

        // Adding multiple Classes to the last element of it's type with in the DOM
        $(".p:last('shadi')").addClass('shadi custom br');
    })
});

// ---------------------------------------------
// ---------------------------------------------

// 2] {removeClass()} Functions -> functional buttons [ 6 ] removing class(s) from element(s) :
// First removeClass function => [ Removing one class from single certain element {Basic function} ] : 
$(document).ready(function () {
    $('#btn21').click(function () {
        var div = $('.display');
        $(div).removeClass('shadi');
    });
});
// ------------------------------------------------------

// 2] Second removeClass function => [ Removing multiple classes from single certain element {Basic function} ] :
$(document).ready(function () {
    $('#btn22').click(function () {
        var div = $('.display');
        $(div).removeClass('shadi br custom');
    })
});

// ---------------------------------------------

// 2] Third removeClass function => [ Removing one class from multiple elements {Basic function} ]  :
$(document).ready(function () {
    $('#btn23').click(function () {
        var div = $('.display'),
            span = $('.span'),
            p = $('.p');
        $(div, span, p).removeClass('shadi');
    })
});

// ---------------------------------------------

// 2] Fourth removeClass function => [ Removing multiple classes to multiple elements {Basic function} ]  :
$(document).ready(function () {
    $('#btn24').click(function () {
        var div = $('.display'),
            span = $('.span'),
            p = $('.p');
        $(div, span, p).removeClass('shadi br custom');
    })
});
// ---------------------------------------------

// 2] Fifth removeClass function => [ Removing one class from one element {using Advanced selectors filtering function} ]  :
$(document).ready(function () {
    $('#btn25').click(function () {
        // var div = $('.display');
        // Removing Class to the the element that contains textnode of a certain value
        $(".display:contains('shadi')").removeClass('shadi');

        // Removing Class to the the element index number [1 : second]  
        $(".span:eq(1)").removeClass('shadi');

        // Removing Class to the first element of it's type with in the dom
        $(".p:first('shadi')").removeClass('shadi');

        // Removing Class to the last element of it's type with in the dom
        $(".p:last('shadi')").removeClass('shadi');
    })
});
// ---------------------------------------------

// 2] Sixth removeClass function => [ Removing multiple classes from single element {using Advanced selectors filtering function} ]  :
$(document).ready(function () {
    $('#btn26').click(function () {
        // Removing multiple Classes from the the element that contains textnode of a certain value 
        $(".display:contains('shadi')").removeClass('shadi custom br');

        // Removing multiple Classes from the the element index number [1 : {second element in order}]
        $(".span:eq(1)").removeClass('shadi custom br');

        // Removing multiple Classes from the first element of it's type with in the DOM
        $(".p:first('shadi')").removeClass('shadi custom br');

        // Removing multiple Classes from the last element of it's type with in the DOM
        $(".p:last('shadi')").removeClass('shadi custom br');
    })
});
// ---------------------------------------------
// ---------------------------------------------

// 3] {toggleClass()} Functions -> functional buttons [ 6 ] Toggling class(s) from element(s) :
// First toggleClass function => [ Toggling one class from single certain element {Basic function} ] : 
$(document).ready(function () {
    $('#btn31').click(function () {
        var div = $('.display');
        $(div).toggleClass('shadi');
    });
});
// ------------------------------------------------------

// 2] Second toggleClass function => [ Toggling multiple classes from single certain element {Basic function} ] :
$(document).ready(function () {
    $('#btn32').click(function () {
        var div = $('.display');
        $(div).toggleClass('shadi br custom');
    })
});
// ---------------------------------------------

// 3] Third toggleClass function => [ Toggling one class from multiple elements {Basic function} ]  :
$(document).ready(function () {
    $('#btn33').click(function () {
        var div = $('.display'),
            span = $('.span'),
            p = $('.p');
        $(div, span, p).toggleClass('shadi');
    })
});
// ---------------------------------------------

// 3] Fourth toggleClass function => [ Toggling multiple classes to multiple elements {Basic function} ]  :
$(document).ready(function () {
    $('#btn34').click(function () {
        var div = $('.display'),
            span = $('.span'),
            p = $('.p');

        $(div, span, p).toggleClass('shadi br custom');
    })
});
// ---------------------------------------------

// 3] Fifth toggleClass function => [ Toggling one class from one element {using Advanced selectors filtering function} ]  :
$(document).ready(function () {
    $('#btn35').click(function () {
        // var div = $('.display');
        // Toggle Class to the the element that contains textnode of a certain value
        $(".display:contains('shadi')").toggleClass('shadi');

        // Toggle Class to the the element index number [1 : second element in order]  
        $(".span:eq(1)").toggleClass('shadi');

        // Toggle Class to the first element of it's type with in the dom
        $(".p:first('shadi')").toggleClass('shadi');

        // Toggle Class to the last element of it's type with in the dom
        $(".p:last('shadi')").toggleClass('shadi');
    })
});
// ---------------------------------------------

// 3] Sixth toggleClass function => [ Toggle multiple classes from multiple elements {using Advanced selectors filtering function} ]  :
$(document).ready(function () {
    $('#btn36').click(function () {
        // Toggling multiple Classes from the the element that contains textnode of a certain value 
        $(".display:contains('shadi')").toggleClass('shadi custom br');

        // Toggling multiple Classes from the the element index number [1 : {second element in order}]
        $(".span:eq(1)").toggleClass('shadi custom br');

        // Toggling multiple Classes from the first element of it's type with in the DOM
        $(".p:first('shadi')").toggleClass('shadi custom br');

        // Toggling multiple Classes from the last element of it's type with in the DOM
        $(".p:last('shadi')").toggleClass('shadi custom br');
    })
});

// ---------------------------------------------
// ---------------------------------------------

