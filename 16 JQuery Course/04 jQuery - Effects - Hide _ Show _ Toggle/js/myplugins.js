//  04 jQuery - Effects - Hide _ Show _ Toggle
/* Main lessons functions :
    a) Basic common events in JQ + single and multiple functions inside each event : 
        1) {hide()} 
        2) {show()} 
        3) {toggle()}     
        
    b) Main flags/option for each effects  : 
        1) {speed} value => [slow , fast , #Numeric value ]
        2) {call back function } => For the same element or another || with the same effect functions or another         
*/

// a] {hide()} Effect : 
// 1){hide()} effect =>  [Simple hiding effect for this same element] : 
$(document).ready(function () {
    $('#btn1').click(function () {
        $(this).hide();
    });
});

// 2){hide} effect =>  [Simple hiding effect for this another element + other element ] : 
$(document).ready(function () {
    $('#btn11').click(function () {
        $('.display p').hide();
    });
});

// 3){hide} effect =>  [Advanced hiding effect for this another element + flags (speed , call back function -hiding- )] : 
$(document).ready(function () {
    $('#btn111').click(function () {
        $('.display p').hide(3000, function () {
            $('.display span').hide();
        });
    });
});

// 4){hide} effect =>  [Mixed Advanced hiding effect for this another element + flags (speed , call back function -showing- )] : 
$(document).ready(function () {
    $('#btn1111').click(function () {
        $('.display p').hide(3000, function () {
            $('.display h3').show('slow');
        });
    });
});
// ----------------------------------------------
// ----------------------------------------------

// b] {show()} Effect : 
// 1){show()} effect => [Simple showing effect for this same element] : 
$(document).ready(function () {
    $('#btn2').click(function () {
        $('.display h2').show();
    });
});

// 2){show} effect => [Simple showing effect for this another element + other element ] : 
$(document).ready(function () {
    $('#btn21').click(function () {
        $('.display h2').show();
    });
});

// 3){show} effect => [Advanced showing effect for this another element + flags (speed , call back function -showing- )] : 
$(document).ready(function () {
    $('#btn211').click(function () {
        $('.display h3').show(3000, function () {
            $('.display h2').show();
        });
    });
});

// 4){show} effect =>  [Mixed Advanced showing effect for this another element + flags (speed , call back function -hiding- )] : 
$(document).ready(function () {
    $('#btn2111').click(function () {
        $('.display span').show(3000, function () {
            $(this).hide('slow');
        });
    });
});
// ----------------------------------------------
// ----------------------------------------------

// c] {toggle()} Effect :
// 1){toggle()} effect => [Simple toggling effect for this same element] : 
$(document).ready(function () {
    $('#btn3').click(function () {
        $('.display h2').toggle();
    });
});

// 2){toggle effect => [Simple toggling effect for this another element + other element ] : 
$(document).ready(function () {
    $('#btn31').click(function () {
        $('.display h2').toggle();
    });
});

// 3){toggle} effect => [Advanced toggling effect for this another element + flags (speed , call back function -toggling- )] : 
$(document).ready(function () {
    $('#btn311').click(function () {
        $('.display h3').toggle(3000, function () {
            $('.display h2').toggle();
        });
    });
});

// 4){toggle} effect =>  [Mixed Advanced toggling effect for this another element + flags (speed , call back function -hiding- )] : 
$(document).ready(function () {
    $('#btn3111').click(function () {
        $('.display span').toggle(3000, function () {
            $(this).hide('fast');
        });
    });
});

// 5){toggle} effect =>  [Mixed Advanced toggling effect for this another element + flags (speed , call back function -showing- )] : 
$(document).ready(function () {
    $('#btn31111').click(function () {
        $('.display span').toggle(3000, function () {
            $(this).show('slow');
        });
    });
});


// -----------------------------------------------------------------------
// -------------------------------------------------------

// function display() {

// }

