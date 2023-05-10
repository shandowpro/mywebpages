//  08 jQuery - Effects - Stop
/* Main lessons functions :
    a) Basic common events in JQ + single and multiple functions inside each event : 
        1) {stop(Clear Queues, Go To End)}     
        
    b)  All options of using all combined flags/option for stop() effect function [Clear Queues , Go To End ]  : 
        1) [Clear Queues : false , Go To End : false ] {Default} => Stop the current animation and contue persuing to the next animation function in the current Queue 
        2) [Clear Queues : true , Go To End : false ]  => Stop  persuing all animation funtions queues
        3) [Clear Queues : false , Go To End : true ]  => Stop the current animation & continue to the next animation function        
        4) [Clear Queues : true , Go To End : true ]   => Pass through all animation functions & persue the last animation 
        
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
// 2] Stop function buttons [all options methods] :
$(document).ready(function () {
    // {stop()} => Default values [Clear Queue , Go to End] -> {false , false} :
    $('#stop1').click(function () {
        $('.display').stop();
    });

    // {stop()} => Custom Values [Clear Queue , Go to End] -> {true , false} :
    $('#stop2').click(function () {
        $('.display').stop(true, false);
    });

    // {stop()} => Custom values [Clear Queue , Go to End] -> {false , true} :
    $('#stop3').click(function () {
        $('.display').stop(false, true);
    });

    // { stop() } => Custom values [Clear Queue , Go to End] -> { true , true } :
    $('#stop4').click(function () {
        $('.display').stop(true, true);
    });
});


// 2] Functions animations button [ 4 ] animation functions :
$(document).ready(function () {
    $('#btn1').click(function () {
        // First animation function => [Increasing the size of the element ] : 
        $('.display').animate({
            width: '600px',
            height: '500px',
        }, 3000);

        // Second animation function [Decreasing the size of the element ] : 
        $('.display').animate({
            width: '400px',
            height: '300px',
        }, 3000);

        // Third animation function [Increasing the ocpacity + border + border radius] : 
        $('.display').animate({
            opacity: '.8',
            borderWidth: '10px',
            borderRadius: '20px',
        }, 3000);

        // Fourth animation function [Increasing the font size + location ] :
        $('.display').animate({
            top: '300px',
            left: '300px',
        }, 3000);

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

