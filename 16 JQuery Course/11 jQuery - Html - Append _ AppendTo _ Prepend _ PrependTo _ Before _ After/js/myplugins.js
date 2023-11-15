//  11 jQuery - Html - Append _ AppendTo _ Prepend _ PrependTo _ Before _ After
/* Main lessons functions :
    a) Main usage of the chain function  : 
        1) append() 
        2) appendTo()
        3) prepend()
        4) prependTo()
        5) after()
        6) before()
*/
// ========================================================

// I] Orcedeion Plus buttons effect [4] groups :
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
// 1] {append()} Functions -> functional buttons [ 3 ] adding elements to the parent element's children [At Last] :
// First append function => [Adding new elements (HTML only) to the last of parent element children ] : 
$(document).ready(function () {
    $('#btn11').click(function () {
        var div = $('.display'),
            elem = '</br><span> <a> Google </a> </span>';

        $(div).append(elem);
    });
});
// ------------------------------------------------------

// 1] {append()} / Second append Set function => [Adding new elements (HTML + Attributes) to the parent element's children  [At Last] :
$(document).ready(function () {
    $('#btn12').click(function () {
        var div = $('.display'),
            elem = '</br><span> <a style="color:red; font-size:20px"> Google </a> </span>';

        $(div).append(elem);
    })
});

// ---------------------------------------------

// 1] {append()} / Second append Set function => [Adding new elements (HTML + Attributes) to the parent element's children  [At Last] {without using variables} :
$(document).ready(function () {
    $('#btn13').click(function () {
        // var div = $('.display'),
        // elem = '</br><span> <a style="color:red; font-size:20px"> Google </a> </span>';

        $('.display').append('</br><span> <a style="color:red; font-size:20px"> Google </a> </span>');
    })
});

// ---------------------------------------------
// ---------------------------------------------

// 2] {appendTo()} Functions -> functional buttons [ 3 ] adding elements to the parent element's children [At Last] :
// First appendTo function => [Adding new elements (HTML only) to the last of parent element children ]  : 
$(document).ready(function () {
    $('#btn21').click(function () {
        var div = $('.display'),
            elem = '</br><span> <a> Google </a> </span>';

        $(elem).appendTo(div);
    });
});
// ------------------------------------------------------

// 2] {appendTo()} / Second append Set function => [Adding new elements (HTML + Attributes) to the parent element's children [At Last] :
$(document).ready(function () {
    $('#btn22').click(function () {
        var div = $('.display'),
            elem = '</br><span> <a style="color:red; font-size:20px"> Google </a> </span>';

        $(elem).appendTo(div);
    })
});
// ---------------------------------------------

// 2] {appendTo()} / Third appendTo Set function => [Adding new elements (HTML + Attributes) to the parent element's children [At Last] {without usin variables} :
$(document).ready(function () {
    $('#btn23').click(function () {
        // var div = $('.display'),
        // elem = '</br><span> <a style="color:red; font-size:20px"> Google </a> </span>';

        $('</br><span> <a style="color:red; font-size:20px"> Google </a> </span>').appendTo('.display');
    })
});
// ---------------------------------------------
// ---------------------------------------------

// 3] {prepend()} Functions -> functional buttons [ 3 ] adding elements to the parent element's children [At First] :
// First prepend function => [Adding new elements (HTML only) to the last of parent element children ] : 
$(document).ready(function () {
    $('#btn31').click(function () {
        var div = $('.display'),
            elem = '</br><span> <a> Google </a> </span>';

        $(div).prepend(elem);
    });
});
// ------------------------------------------------------

// 3] {prepend()} /  Second prepend Set function => [Adding new elements (HTML + Attributes) to the parent element's children  [At First] :
$(document).ready(function () {
    $('#btn32').click(function () {
        var div = $('.display'),
            elem = '</br><span> <a style="color:red; font-size:20px"> Google </a> </span>';

        $(div).prepend(elem);
    })
});
// ---------------------------------------------

// 3] {prepend()} /  Second prepend Set function => [Adding new elements (HTML + Attributes) to the parent element's children  [At First] {without using variables} :
$(document).ready(function () {
    $('#btn33').click(function () {
        // var div = $('.display'),
        // elem = '</br><span> <a style="color:red; font-size:20px"> Google </a> </span>';

        $('.display').prepend('</br><span> <a style="color:red; font-size:30px"> Google </a> </span>');
    })
});

// ---------------------------------------------
// ---------------------------------------------

// 4] {prependTo()} Functions -> functional buttons [ 3 ] adding elements to the parent element's children [At First] :
// First prependTo function => [Adding new elements (HTML only) to the last of parent element children ]  : 
$(document).ready(function () {
    $('#btn41').click(function () {
        var div = $('.display'),
            elem = '</br><span> <a> Google </a> </span>';

        $(elem).prependTo(div);
    });
});
// ------------------------------------------------------

// 4] {prependTo()} /  Second prependTo Set function => [Adding new elements (HTML + Attributes) to the parent element's children [At First] :
$(document).ready(function () {
    $('#btn42').click(function () {
        // var div = $('.display'),
        // elem = '</br><span> <a style="color:red; font-size:20px"> Google </a> </span>';

        $('</br><span> <a style="color:red; font-size:20px"> Google </a> </span>').prependTo('.display');
    })
});
// ---------------------------------------------

// 4] {prependTo()} /  Third prependTo Set function => [Adding new elements (HTML + Attributes) to the parent element's children [At First] {without using variables} :
$(document).ready(function () {
    $('#btn43').click(function () {
        // var div = $('.display'),
        // elem = '</br><span> <a style="color:red; font-size:20px"> Google </a> </span>';

        $('</br><span> <a style="color:red; font-size:20px"> Google </a> </span>').prependTo('.display');
    })
});
// ---------------------------------------------
// ---------------------------------------------

// 5] {after()} Functions -> functional buttons [ 4 ] adding elements after the main parent element  :
// First after function => [Adding new elements (HTML only) after the main parent element ]  : 
$(document).ready(function () {
    $('#btn51').click(function () {
        var div = $('.display'),
            elem = '</br><span> <a> Google </a> </span>';

        $(div).after(elem);
    });
});
// ------------------------------------------------------

// 5] {after()} /  Second after function => [Adding new elements (HTML + Attributes) after the main parent element :
$(document).ready(function () {
    $('#btn52').click(function () {
        var div = $('.display'),
            elem = '</br><span> <a style="color:red; font-size:20px"> Google </a> </span>';

        $(div).after(elem);
    })
});
// ---------------------------------------------

// 5] {after()} /  Third after function => [Adding new element (input with tpe file) after the main parent element {without using variables} :
$(document).ready(function () {
    $('#btn53').click(function () {
        // var elem = $('.display');

        $('.display').after('</br><span> <a style="color:red; font-size:20px"> Google </a> </span>');
    })
});
// ---------------------------------------------

// 5] {after()} /  Forth after function => [Adding new element (input with tpe file) after the main parent element [by clicking on the button] :
$(document).ready(function () {
    $('.add').click(function () {
        var elem = $('.input1');

        $(elem).after('<input type="file"> ');
    })
    $('#btn54').click(function () {
        var elem = $('.input1');

        $(elem).after('<input type="file"> ');
    })
});
// ---------------------------------------------
// ---------------------------------------------

// 6] {before()} Functions -> functional buttons [3] adding elements before the main parent element:
// First before function => [Adding new elements (HTML only) after the main parent element ]  : 
$(document).ready(function () {
    $('#btn61').click(function () {
        var div = $('.display'),
            elem = '</br><span> <a> Google </a> </span>';

        $(div).before(elem);
    });
});
// ------------------------------------------------------

// 6] {before()} /  Second after function => [Adding new elements (HTML + Attributes) before the main parent element :
$(document).ready(function () {
    $('#btn62').click(function () {
        var div = $('.display'),
            elem = '</br><span> <a style="color:red; font-size:20px"> Google </a> </span>';

        $(div).before(elem);
    })
});
// ---------------------------------------------

// 6] {before()} /  Third after function => [Adding new elements (HTML + Attributes) before the main parent element] {without using Variables} :
$(document).ready(function () {
    $('#btn63').click(function () {
        // var elem = $('.display');

        $('.display').before('</br><span> <a style="color:red; font-size:20px"> Google </a> </span>');
    })
});

