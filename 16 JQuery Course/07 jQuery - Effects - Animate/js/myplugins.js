//  07 jQuery - Effects - Animate 
/* Main lessons functions :
    a) Basic common events in JQ + single and multiple functions inside each event : 
        1) {animate()}     
        
    b) Main flags/option for each effects [animate({} , speed , call back function() ); ]  : 
        1) {Function Css parameters } => [it's values can be written as {Single value || Relateive value || Effect Function } ] 
        2) {speed} value => [slow , fast , #Numeric value ]
        3) {call back function } => For the same element or another || with the same effect functions or another [can be another nested animate function(s) || Effect fuction(s) ]
        
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
// =========================================================
// =========================================================

// 2] Functions buttons effect [ 4 ] groups :
// a group] {simple animate()} => Effect {only parameters} :
// 1) {parameters} => [Single values] : 
$(document).ready(function () {
    $('#btn1').click(function () {
        $('.display').animate({
            width: '600px',
            height: '500px',
            opacity: '.7',
            border: '5px',
            borderRadius: '30px',
            top: '300px',
            left: '300px'
        });
    });
});

// a group / 2) {parameters} => [Relative values] : 
$(document).ready(function () {
    $('#btn11').click(function () {
        $('.display').animate({
            width: '+=100px',
            height: '-=200px',
            opacity: '+=.2',
            border: '+=5px',
            borderRadius: '+=30px',
            top: '+300px',
            left: '-300px'
        });
    });
});

// a group / 3) {parameters} => [Effect values] : 
$(document).ready(function () {
    $('#btn111').click(function () {
        $('.display').animate({
            width: 'hide',
            height: 'toggle',
            opacity: 'fadeOut',
            border: 'fadeIn',
            borderRadius: 'slideDown',
            top: 'hide',
            left: 'show'
        });
    });
});
// ----------------------------------------------
// ----------------------------------------------

// b group] {Advanced animate()} Effect {paramters + speed} :
// 1) {parameters} => [Single values] : 
$(document).ready(function () {
    $('#btn2').click(function () {
        $('.display').animate({
            width: '600px',
            height: '500px',
            opacity: '.7',
            border: '5px',
            borderRadius: '30px',
            top: '300px',
            left: '300px'
        }, 2000);
    });
});

// b group{paramters + speed}] / 2) {parameters} => [Relative values] : 
$(document).ready(function () {
    $('#btn21').click(function () {
        $('.display').animate({
            width: '+=100px',
            height: '-=200px',
            opacity: '+=.2',
            border: '+=5px',
            borderRadius: '+=30px',
            top: '+300px',
            left: '-300px'
        }, 2000);
    });
});

// b {paramters + speed} ] / 3) {parameters} => [Effect values] : 
$(document).ready(function () {
    $('#btn211').click(function () {
        $('.display').animate({
            width: 'hide',
            height: 'toggle',
            opacity: 'fadeOut',
            border: 'fadeIn',
            borderRadius: 'slideDown',
            top: 'hide',
            left: 'show'
        }, 2000);
    });
});

// ----------------------------------------------
// ----------------------------------------------

// c] {Advanced animate()} Effect {paramters + speed + call back function} :
// 1) {parameters} => [Single values] : 
$(document).ready(function () {
    $('#btn3').click(function () {
        $('.display').animate({
            width: '600px',
            height: '500px',
            opacity: '.7',
            border: '5px',
            borderRadius: '30px',
            top: '300px',
            left: '300px'
        }, 2000, function () {
            $('.display span').fadeOut(2000);
        });
    });
});


// c {paramters + speed + call back function} ] / 2) {parameters} => [Relative values] : 
$(document).ready(function () {
    $('#btn31').click(function () {
        $('.display').animate({
            width: '+=100px',
            height: '-=200px',
            opacity: '+=.2',
            border: '+=5px',
            borderRadius: '+=30px',
            top: '+300px',
            left: '-300px'
        }, 2000, function () {
            $('.display span').slideDown(2000);
        });
    });
});

// c {paramters + speed + call back function} ] / 3) {parameters} => [Effect values] : 
$(document).ready(function () {
    $('#btn311').click(function () {
        $('.display').animate({
            width: 'hide',
            height: 'toggle',
            opacity: 'fadeOut',
            border: 'fadeIn',
            borderRadius: 'slideDown',
            top: 'hide',
            left: 'show'
        }, 2000, function () {
            $('.display span').slideUp(2000);
        });
    });
});

// ----------------------------------------------
// ----------------------------------------------

// d] {Real animation application animate() } Effect {} :
// 1) {Sliding down element from top of the screen + Fading in it's elements contents + fading in the border } == : 
$(document).ready(function () {
    $('#btn4').click(function () {
        $('.display1').animate({
            width: '600px',
            height: '400px',
            opacity: '1',
            border: '5px solid red',
            borderRadius: '30px',
            top: '100px',
            left: '300px'
        }, 2000, function () {
            $('.display1 span').fadeIn(2000);
            $('.display1 h3').slideDown(2000);
            $('.display1 h2').slideDown(2000);
            $('.display1 span').fadeIn(2000);
        });
        $('.display1 h3').animate({
            left: '150px',
            marginLeft: '150px',
        }, 1000);
        $('.display1 h2').animate({
            left: '150px',
            marginLeft: '150px',
        }, 1000);
        $('.display1 span').animate({
            left: '150px',
            marginLeft: '150px',
        }, 1000);
        $('.display1 p').animate({
            left: '150px',
            marginLeft: '150px',
        }, 1000);
        $(this).animate({
            left: '150px',
            marginLeft: '150px',
        }, 1000);
    });
});


// // d {Real animation application animate()} ] / 2) {parameters} => [Relative values] :
// $(document).ready(function () {
//     $('#btn41').click(function () {
//         $('.display').animate({
//             width: '+=100px',
//             height: '-=200px',
//             opacity: '+=.2',
//             border: '+=5px',
//             borderRadius: '+=30px',
//             top: '+300px',
//             left: '-300px'
//         }, 2000, function () {
//             $('.display span').slideDown(2000);
//         });
//     });
// });

// // d {Real animation application animate()} ] / 3) {parameters} => [Effect values] :
// $(document).ready(function () {
//     $('#btn411').click(function () {
//         $('.display').animate({
//             width: 'hide',
//             height: 'toggle',
//             opacity: 'fadeOut',
//             border: 'fadeIn',
//             borderRadius: 'slideDown',
//             top: 'hide',
//             left: 'show'
//         }, 2000, function () {
//             $('.display span').fadeUp(2000);
//         });
//     });
// });

// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------


// function display() {

// }

