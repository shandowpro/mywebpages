//  09 jQuery - Effects - Chain
/* Main lessons functions :
    a) Main usage of the chain function  : 
        1) {chain(effects functions || animation functions || Css properties )}         
           
        
*/
// ========================================================

// I] Plus buttons effect [1] groups :
// 1) First plus button :
$(document).ready(function () {
    $('#plus1').click(function () {
        $('#group1').slideToggle('slow');
    });
});
// $(document).ready(function () {
//     $('#plus2').click(function () {
//         $('#group2').slideToggle('slow');
//     });
// });
// $(document).ready(function () {
//     $('#plus3').click(function () {
//         $('#group3').slideToggle('slow');
//     });
// });
// $(document).ready(function () {
//     $('#plus4').click(function () {
//         $('#group4').slideToggle('slow');
//     });
// });

// =========================================================
// =========================================================
// =========================================================

// // 2] chain function buttons [all options methods] :
// $(document).ready(function () {
//     // {chain()} => Default values [Clear Queue , Go to End] -> {false , false} :
//     $('#stop1').click(function () {
//         $('.display').stop();
//     });

//     // {stop()} => Custom Values [Clear Queue , Go to End] -> {true , false} :
//     $('#stop2').click(function () {
//         $('.display').stop(true, false);
//     });

//     // {stop()} => Custom values [Clear Queue , Go to End] -> {false , true} :
//     $('#stop3').click(function () {
//         $('.display').stop(false, true);
//     });

//     // { stop() } => Custom values [Clear Queue , Go to End] -> { true , true } :
//     $('#stop4').click(function () {
//         $('.display').stop(true, true);
//     });
// });


// 2] {chain()} Functions button [ 4 ] animation functions :
// First chain function => [Basic usage of the chaining mehtod (without using the varaible definition ) ] : 
$(document).ready(function () {
    $('#btn1').click(function () {
        $('.display').css({ background: '#f00' })
            .animate({
                width: '600px',
                height: '500px',
            }, 1000, function () {
                $('dispaly p').css({ position: 'relative', left: '150px', textAlign: 'center' })
            })
            .slideUp(1000)
            .slideDown(1000)
            .fadeOut(1000)
            .fadeIn(1000)
            .hide(1000)
            .show(1000)
            .animate({
                left: '200px',
                top: '200px',
                borderRadius: '50%',
            }, 1000);
    });
});

// Second chain function => [Basic usage of the chaining mehtod (with using the varaible definition ) ] : 
$(document).ready(function () {
    $('#btn2').click(function () {
        var div = $('.display');

        div.css({ background: '#f00' })
            .animate({
                width: '600px',
                height: '500px',
            }, 3000)
            .slideUp(3000)
            .slideDown(3000)
            .fadeOut(3000)
            .fadeIn(3000)
            .hide(3000)
            .show(3000)
            .animate({
                left: '200px',
                top: '200px',
                borderRadius: '50%',
            }, 2000);
    });
});





// a group]
// 1) {parameters} => [Single values] :




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

