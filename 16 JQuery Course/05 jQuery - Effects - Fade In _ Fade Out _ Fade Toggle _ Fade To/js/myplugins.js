//  05 jQuery - Effects - Fade In _ Fade Out _ Fade Toggle _ Fade To
/* Main lessons functions :
    a) Basic common events in JQ + single and multiple functions inside each event : 
        1) {fadeIn()}     
        2) {fadeOut()}     
        3) {fadeToggle()}     
        4) {fadeTo()}     
                
    b) Main flags/option for each effects [fadeIn || fadeOut  || fadeToggle ]  : 
        1) {speed} value => [slow , fast , #Numeric value ]
        2) {call back function } => For the same element or another || with the same effect functions or another         
    
    c) Main flags/option for each effect [ fadeTo ]  : 
        1) {speed} value => [slow , fast , #Numeric value ]
        2) {opacity } value => [ #Numeric value ]
        3) {call back function } => For the same element or another || with the same effect functions or another 
*/
// ========================================================

// I] Plus buttons effect [4] groups :
// 1) First plus button :
$(document).ready(function () {
    $('#plus1').click(function () {
        $('#group1').toggle('slow');
    });
});
$(document).ready(function () {
    $('#plus2').click(function () {
        $('#group2').toggle('slow');
    });
});
$(document).ready(function () {
    $('#plus3').click(function () {
        $('#group3').toggle('slow');
    });
});
$(document).ready(function () {
    $('#plus4').click(function () {
        $('#group4').toggle('slow');
    });
});

// =========================================================

// 2] Functions buttons effect [4] groups :
// a] {fadeIn()} Effect :
// 1) {fadeIn()} => [Simple hiding effect for this same element] : 
$(document).ready(function () {
    $('#btn1').click(function () {
        $(this).fadeIn('slow');
    });
});

// 2){fadeIn} => [Simple hiding effect for this another element + other element ] : 
$(document).ready(function () {
    $('#btn11').click(function () {
        $('.display h2').fadeIn(3000);
    });
});

// 3){fadeIn} effect =>  [Advanced hiding effect for this another element + flags (speed , call back function -fadeIn- )] : 
$(document).ready(function () {
    $('#btn111').click(function () {
        $('.display p').fadeIn('fast', function () {
            $('.display h3').fadeIn('fast');
        });
    });
});

// 4){fadeIn} effect =>  [Mixed Advanced hiding effect for this another element + flags (speed , call back function -fading Out [slow]- )] : 
$(document).ready(function () {
    $('#btn1111').click(function () {
        $('.display p').fadeIn(3000, function () {
            $('.display span').fadeOut(4000);
        });
    });
});
// ----------------------------------------------
// ----------------------------------------------

// b] {fade out()} Effect :
// 1){fadeOut()} effect => [Simple fading out effect for this same element] : 
$(document).ready(function () {
    $('#btn2').click(function () {
        $(this).fadeOut('fast');
    });
});

// 2){fadeOut} effect => [Simple fading out effect for this another element + other element ] : 
$(document).ready(function () {
    $('#btn21').click(function () {
        $('.display p').fadeOut('slow');
    });
});

// 3){fadeOut} effect =>  [Advanced fading Out effect for this another element + flags (speed , call back function -fadeOut- )] : 
$(document).ready(function () {
    $('#btn211').click(function () {
        $('.display p').fadeOut('slow', function () {
            $('.display span').fadeOut(4000);
        });
    });
});

// 4){fadeOut} effect =>  [Mixed Advanced fading Out effect for this another element + flags (speed , call back function -showing[fast]- )] : 
$(document).ready(function () {
    $('#btn2111').click(function () {
        $('.display p').fadeOut(3000, function () {
            $('.display h3').fadeIn(4000);
        });
    });
});

// ----------------------------------------------
// ----------------------------------------------

// c] {fadeToggle()} Effect :
// 1){fadeToggle()} effect => [Simple fadeToggle effect for this same element] : 
$(document).ready(function () {
    $('#btn3').click(function () {
        $(this).fadeToggle('fast');
    });
});

// 2){fadeToggle} effect => [Simple fading out effect for this another element + other element ] : 
$(document).ready(function () {
    $('#btn31').click(function () {
        $('.display p').fadeToggle('slow');
    });
});

// 3){fadeToggle} effect =>  [Advanced fading Out effect for this another element + flags (speed , call back function -fadeToggle- )] : 
$(document).ready(function () {
    $('#btn311').click(function () {
        $('.display p').fadeToggle(3000, function () {
            $('.display span').fadeToggle(4000);
        });
    });
});

// 4){fadeToggle} effect =>  [Mixed Advanced fading Out effect for this another element + flags (speed , call back function -fading Toggle [4000]- )] : 
$(document).ready(function () {
    $('#btn3111').click(function () {
        $('.display p').fadeToggle(3000, function () {
            $('.display h2').fadeToggle(4000);
            $('.display h3').fadeToggle(4000);
        });
    });
});

// ----------------------------------------------
// ----------------------------------------------

// d] {fadeTo()} Effect :
// 1){fadeTo()} effect => [Simple fadeTo effect for this same element] : 
$(document).ready(function () {
    $('#btn4').click(function () {
        $(this).fadeTo('fast', .5);
    });
});

// 2){fadeTo} effect => [Simple fading To effect for this another element + other element ] : 
$(document).ready(function () {
    $('#btn41').click(function () {
        $('.display p').fadeTo('slow', .7);
    });
});

// 3){fadeToggle} effect =>  [Advanced fading Out effect for this another element + flags (speed , call back function -fading To - [.5] -> [.1] opacity )] : 
$(document).ready(function () {
    $('#btn411').click(function () {
        $('.display p').fadeTo(3000, .5, function () {
            $('.display span').fadeTo(4000, .1);
        });
    });
});

// 4){fadeTo} effect =>  [Mixed Advanced fading Out effect for this another element + flags (speed , call back function -fading To [.7] -> [.1] & [.4] opacity - )] : 
$(document).ready(function () {
    $('#btn4111').click(function () {
        $('.display p').fadeToggle(3000, function () {
            $('.display h2').fadeToggle(4000);
            $('.display h3').fadeToggle(4000);
        });
    });
});
// -----------------------------------------------------------------------
// -------------------------------------------------------

// function display() {

// }

