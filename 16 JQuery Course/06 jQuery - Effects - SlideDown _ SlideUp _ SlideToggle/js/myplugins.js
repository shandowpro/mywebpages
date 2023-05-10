//  06 jQuery - Effects - SlideDown _ SlideUp _ SlideToggle
/* Main lessons functions :
    a) Basic common events in JQ + single and multiple functions inside each event : 
        1) {slideDown()}     
        2) {slideUp()}     
        3) {sideToggle()}             
                
    b) Main flags/option for each effects [slideDown || slideUp  || slideToggle ]  : 
        1) {speed} value => [slow , fast , #Numeric value ]
        2) {call back function } => For the same element or another || with the same effect functions or another         
        
*/
// ========================================================

// I] Plus buttons effect [4] groups :
// 1) First plus button :
$(document).ready(function () {
    $('#plus1').click(function () {
        $('#group1').slideToggle('slow');
    });
});
$(document).ready(function () {
    $('#plus2').click(function () {
        $('#group2').slideToggle('slow');
    });
});
$(document).ready(function () {
    $('#plus3').click(function () {
        $('#group3').slideToggle('slow');
    });
});
$(document).ready(function () {
    $('#plus4').click(function () {
        $('#group4').slideToggle('slow');
    });
});

// =========================================================

// 2] Functions buttons effect [4] groups :
// a] {slideDown()} Effect :
// 1) {slideDown()} => [Simple sliding Down effect for this same element] : 
$(document).ready(function () {
    $('#btn1').click(function () {
        $(this).slideDown('slow');
    });
});

// 2){slideDown} => [Simple sliding Down effect for this another element + other element ] : 
$(document).ready(function () {
    $('#btn11').click(function () {
        $('.display h2').slideDown(3000);
    });
});

// 3){slideDown} effect =>  [Advanced Sliding down effect for this another element + flags (speed , call back function -slideDown- )] : 
$(document).ready(function () {
    $('#btn111').click(function () {
        $('.display p').slideDown('fast', function () {
            $('.display h3').slideDown('fast');
        });
    });
});

// 4){slideDown} effect =>  [Mixed Advanced Sliding Down effect for this another element + flags (speed , call back function -sliding Down [slow]- )] : 
$(document).ready(function () {
    $('#btn1111').click(function () {
        $('.display p').slideDown(3000, function () {
            $('.display span').slideDown(4000);
        });
    });
});
// ----------------------------------------------
// ----------------------------------------------

// b] {slideUp()} Effect :
// 1){slideUp()} effect => [Simple sliding Up effect for this same element] : 
$(document).ready(function () {
    $('#btn2').click(function () {
        $(this).slideUp('fast');
    });
});

// 2){slideUp} effect => [Simple sliding Up effect for this another element + other element ] : 
$(document).ready(function () {
    $('#btn21').click(function () {
        $('.display p').slideUp('slow');
    });
});

// 3){slideUp} effect =>  [Advanced Sliding Up effect for this another element + flags (speed , call back function -slideUp- )] : 
$(document).ready(function () {
    $('#btn211').click(function () {
        $('.display p').slideUp('slow', function () {
            $('.display span').slideUp(4000);
        });
    });
});

// 4){slideUp} effect =>  [Mixed Advanced Sliding Up effect for this another element + flags (speed , call back function -Sliding Up [fast]- )] : 
$(document).ready(function () {
    $('#btn2111').click(function () {
        $('.display p').slideUp(3000, function () {
            $('.display h3').slideUp(4000);
        });
    });
});

// ----------------------------------------------
// ----------------------------------------------

// c] {slideToggle()} Effect :
// 1){slideToggle()} effect => [Simple sliding Toggle effect for this same element] : 
$(document).ready(function () {
    $('#btn3').click(function () {
        $(this).slideToggle('fast');
    });
});

// 2) {slideToggle} effect => [Simple sliding Toggle effect for this another element + other element ] : 
$(document).ready(function () {
    $('#btn31').click(function () {
        $('.display p').slideToggle('slow');
    });
});

// 3) {slideToggle} effect =>  [Advanced fading Out effect for this another element + flags (speed , call back function -fadeToggle- )] : 
$(document).ready(function () {
    $('#btn311').click(function () {
        $('.display p').fadeToggle(3000, function () {
            $('.display span').slideToggle(4000);
        });
    });
});

// 4){slideToggle} effect =>  [Mixed Advanced Sliding Toggle effect for this another element + flags (speed , call back function -Sliding Toggle [4000]- )] : 
$(document).ready(function () {
    $('#btn3111').click(function () {
        $('.display p').slideToggle(3000, function () {
            $('.display h2').slideToggle(4000);
            $('.display h3').slideToggle(4000);
        });
    });
});

// ----------------------------------------------
// ----------------------------------------------

// // d] {fadeTo()} Effect :
// // 1){fadeTo()} effect => [Simple fadeTo effect for this same element] :
// $(document).ready(function () {
//     $('#btn4').click(function () {
//         $(this).fadeTo('fast', .5);
//     });
// });

// // 2){fadeTo} effect => [Simple fading To effect for this another element + other element ] :
// $(document).ready(function () {
//     $('#btn41').click(function () {
//         $('.display p').fadeTo('slow', .7);
//     });
// });

// // 3){fadeToggle} effect =>  [Advanced fading Out effect for this another element + flags (speed , call back function -fading To - [.5] -> [.1] opacity )] :
// $(document).ready(function () {
//     $('#btn411').click(function () {
//         $('.display p').fadeTo(3000, .5, function () {
//             $('.display span').fadeTo(4000, .1);
//         });
//     });
// });

// // 4){fadeTo} effect =>  [Mixed Advanced fading Out effect for this another element + flags (speed , call back function -fading To [.7] -> [.1] & [.4] opacity - )] :
// $(document).ready(function () {
//     $('#btn4111').click(function () {
//         $('.display p').fadeToggle(3000, function () {
//             $('.display h2').fadeToggle(4000);
//             $('.display h3').fadeToggle(4000);
//         });
//     });
// });
// -----------------------------------------------------------------------
// -------------------------------------------------------

// function display() {

// }

