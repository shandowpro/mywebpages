//  12 jQuery - Html - Remove _ Empty Element
/* Main lessons functions :
    a) Main usage of the chain function  : 
        1) remove() 
        2) empty()
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

// II] Functions buttons [2] main functions :
// 1] {remove()} Functions -> functional buttons [ 3 ] Deleting elements from webpage [totally]  :
// First remove function => [ Removing certain element {Basic function} ] : 
$(document).ready(function () {
    $('#btn11').click(function () {
        var div = $('.display');

        $(div).remove();
    });
});
// ------------------------------------------------------

// 1] {remove()} / Second Removing function => [Removing certain element {Advnaced function - more accurate selector } ] :
$(document).ready(function () {
    $('#btn12').click(function () {
        // var div = $('.display');d

        $('div').remove('.display');
    })
});

// ---------------------------------------------

// 1] {remove()} / Third Remove function =>  [Mixing between Removing fucntion and fadeout element]  :
$(document).ready(function () {
    $('#btn13').click(function () {
        // var div = $('.display'),
        // elem = '</br><span> <a style="color:red; font-size:20px"> Google </a> </span>';

        $('.display').fadeOut(3000, function () {
            $(this).remove();
        });
    })
});

// ---------------------------------------------

// 1] {remove()} / Fourth Remove function =>  [Mixing between Removing function and Filtering method{contains}]  :
$(document).ready(function () {
    $('#btn14').click(function () {
        var div = $('.display');
        // elem = '</br><span> <a style="color:red; font-size:20px"> Google </a> </span>';

        $(div).fadeOut(5000, function () {
            remove(" :contains('shadi') ");
        });
    });
});

// ---------------------------------------------
// ---------------------------------------------

// 2] {empty()} Functions -> Functional buttons [ 2 ] Deleting element's children from webpage :
// First empty function => [Deleting element's Children {basic function} ]  : 
$(document).ready(function () {
    $('#btn21').click(function () {
        var div = $('.display');

        $(div).empty();
    });
});
// ------------------------------------------------------

// 2] {empty()} / Second Emptying function => [Deleting element's Children {Advanced function - more accurate selector} ] :
$(document).ready(function () {
    $('#btn22').click(function () {
        var div = $('div');

        $(div).empty('.display');
    })
});
// ---------------------------------------------

// 2] {empty()} / Third Emptying function => [ Mixing between Empty function and fadeout element]  :
$(document).ready(function () {
    $('#btn23').click(function () {
        // var div = $('.display'),
        // elem = '</br><span> <a style="color:red; font-size:20px"> Google </a> </span>';
        $('.display').fadeOut(5000, function () {
            $(this).empty();
        })
    })
});
// ---------------------------------------------

// 2] {empty()} / Fourth Emptying function => [ Mixing between Empty function and Filtering method{contains} ]  :
$(document).ready(function () {
    $('#btn24').click(function () {
        // var div = $('.display'),
        // elem = '</br><span> <a style="color:red; font-size:20px"> Google </a> </span>';
        $('.display').fadeOut(5000, function () {
            $(this).empty(":contains('shadi')");
        })
    })
});
// ---------------------------------------------
// ---------------------------------------------

