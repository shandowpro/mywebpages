//  03 Events - Click,Dblclick,Mouseenter,Mouseleave,Hover
/* Main lessons functions : Basic common events in JQ + single and multiple functions inside each event : 
    1) {click()} 
    2) {dblclick()} 
    3) {mosueenter()} 
    4) {mouserleave()} 
    5) {hover()} 
*/


// 1){Click} event =>  Changing the propoerty of the [other element] -> [when click on the element ] : 
$(document).ready(function () {
    $('#btn1').click(function () {
        $(this).css("color", "gold");
    });
});

// 2){dblClick} event =>  Changing the propoerty of the [the same element + other element] -> [when double click on the element ] : 
$(document).ready(function () {
    $('#btn2').dblclick(function () {
        $(this).css("color", "green");
        $('.display').css("color", "green");
    });
});


// 3){mouseenter} event =>  Changing the property of the [the same element] -> [when mouse fly the elemment  ] : 
$(document).ready(function () {
    $('#btn3').mouseenter(function () {
        // $('element').css("color", "green");
        $(this).css("color", "#fff");
        $(this).css("background-color", "black");
    });
});

// 4){mouseleave} event =>  Changing the property of the [the same element] -> [when mouse leave the elemment  ] : 
$(document).ready(function () {
    $('#btn4').mouseleave(function () {
        // $('element').css("color", "green");
        $(this).css("color", "gray");
        $(this).css("font-weight", "bold");
    });
});

// 5){hover} event =>  Changing the property of the [the same element + other element ] -> [when mouse hover the elemment ] : 
$(document).ready(function () {
    $('#btn5').hover(function () {
        $('.display').hide();
        $(this).css("color", "lightblue");
        $(this).css("background-color", "#111");
    });
});


// -----------------------------------------------------------------------
// -------------------------------------------------------

// function display() {

// }

