//  47 jQuery - Html_Css Reference - Replace With
/* Main lessons functions :
    a] Main html/css References {part 8} ->  { replaceWith() }  =>   [ 2 ] function :
                                
        1) First function [Using {replaceWith()} ] {1 function} -> [Single Replacement whole Element (Element and it's children and textNode) , with another [TextNode||empty element||Element with TextNode]          
        2) Second function [Using {replaceWith()} ] {1 function} -> [Advanced Replacement whole Element (Element and it's children and textNode) , with another [Element with TextNode , children, attributs]                 
        3) Third function [Using { replaceWith()} ]   [ Multiple functions] -> {3 function} :
            a) Replace an element with another (by click on the element it self) {from (div) -> (input) field} with it's same text] 
            b) Show the hidden button{save} to be to use the input after inserting the new value] 
            c) Replace the new element with old element again (click on {save} button ) {from (input) -> (div) field} with new text]  
        
                 
    b] Main used methods within selector used in this lessons functions : 
      (1) {replaceWith()} : multiple Replacment processing 
      (2) {replaceWith()} : Replacing with single element [empty , with textnode , with attributes  ]
      (3) {replaceWith()} : Replacing with nested element [has inner children]
             
      (4) using Event {click()} to perform the action 
      (5) Effects {fadeIn() & fadeOut()} 


*/
// ========================================================
// I] Orcedion Plus buttons effect [5] groups :
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

// 5) Fifth plus button :
$(document).ready(function () {
    $('#plus5').click(function () {
        $('#group5').slideToggle('slow');
    });
});

// 6) Sixth plus button :
$(document).ready(function () {
    $('#plus6').click(function () {
        $('#group6').slideToggle('slow');
    });
});

// 7) Seventh plus button :
$(document).ready(function () {
    $('#plus7').click(function () {
        $('#group7').slideToggle('slow');
    });
});
// =========================================================
// =========================================================
// =========================================================

// II] Functions variables [  ] main Groups functions :

// $(document).ready(function () {
$(function () {
    'use strict';

    // I] Definition of all elemensts :
    alert('Hello to the JQ [replaceWith()] Method ');

    var input1 = $(".codes0 #input1"),
        input2 = $(".codes0 #input2"),
        input3 = $(".codes0 #input3"),
        btn1 = $(".codes0 #submit1"),
        btn2 = $(".codes0 #submit2"),
        btn3 = $(".codes0 #submit3"),
        btn4 = $(".codes0 #submit4"),
        btn5 = $(".codes0 #submit5");


    // II] Main functions Groups :

    // 1) First function [Using {replaceWith()} ] {1 function} -> [Single Replacement hole Element (Element and it's children and textNode) , with another only [TextNode]  ->
    btn1.click(function () {

        // 1) Replacing the element by the simple text node :

        input1.replaceWith('This is the new textNode value from the JQ');

    });

    // ------------------------------------------------

    // 2) Second function [Using {replaceWith()} ] {1 function} -> [Advanced Replacement whole Element (Element and it's children and textNode) , with another [Element + TextNode ] ->

    btn2.click(function () {
        input1.replaceWith('<div> This is the new div element with TextNode value </div>');

    });

    // ------------------------------------------------

    // 3) Third function : [Using {replaceWith()} ] {1 function} -> [Advanced Replacement whole Element (Element and it's children and textNode) , with another [Element + TextNode + attribute "style" ]    ->

    btn3.click(function () {

        input1.replaceWith('<div style="color:red; border:solid 3px blue" > This is the new div element with TextNode value + sytle attribute </div>');

    });
    // ------------------------------------------------

    // 4) Fourth function : [Using {replaceWith()} ] {1 function} -> [Advanced Replacement whole Element (Element and it's children and textNode) , with another [Nested Element (TextNode + 2 children) ]    ->

    btn4.click(function () {

        input2.replaceWith('<div> This is the new div nested element with TextNode value + children <p>This is the First child element of the main parent element <span>"div"</span> </p> <br> </div>');

    });

    // ------------------------------------------------

    /*
    5) Fiftth  function : [Using {replaceWith()} ]  [ Multiple functions] -> {3 function} -> :
      a) Replace an element with another(by click on the element it self) { from(div) -> (input) field } with it's same text
      b) Show the hidden button{save} to be to use the input after inserting the new value
      c) Replace the new element with old element again (click on {save} button ) {from (input) -> (div) field} with new text
    */

    input3.click(function () {

        $(this).replaceWith('<input id="newInput" value="' + $(this).text() + '" />');

        btn5.fadeIn();


    });

    btn5.click(function () {

        $('.codes0 #newInput').replaceWith('<div>' + $('.codes0 #newInput').val() + '</div>');

        $(this).fadeOut();

    });


    // ------------------------------------------------


});
// ------------------------------------------------------



// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------


