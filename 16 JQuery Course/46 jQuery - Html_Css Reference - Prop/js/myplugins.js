//  46 jQuery - Html_Css Reference - Prop
/* Main lessons functions :
    a] Main html/css References {part 7} ->  { prop() }  =>   [    ] function :
                                
        1) First function : [ Get element's single attribute/prop status value && attr()value ] -> To [ display prop and attribute values with in console , result element ] -> {2 functions}         
        2) Second function : [ Set element's single  attribute/prop status value && attr()value ] -> To [ display prop and attribute values with in console , result element ] -> {2 functions}                 
        3) Third function : [ Get element's multiple attribute/props status value ] -> To [ display props values with in console , result element ] -> {1 function}         
        4) Fourth function : [ Set element's multiple attribute/props status value ] -> To [ display props values with in console , result element ] -> {2 functions}                 
    b] Main used methods within selector used in this lessons functions : 
      (1) {prop()} Set functions => (2) methods :
            a) Texual values : [ prop("propName" , "TexualValue") ] 
            b) Boolean values : [ prop("propName" , true || false) ] 
      
      (2) {attr()} Set functions => (1) method :
            a) Texual values : [ prop("propName" , "TexualValue") ] 


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

// II] Functions buttons [ 3 ] main Groups functions :

// $(document).ready(function () {
$(function () {
    'use strict';

    // I] Definition of all elemensts :
    alert('Hello to the JQ [prop()] & [attr()] Method ');

    var input1 = $(".codes0 .form1 #input1"),
        input2 = $(".codes0 .form2 #input2"),
        btn1 = $(".codes0 .form1 #submit"),
        btn2 = $(".codes0 .form2 #submit");


    // II] Main functions Groups :

    // 1) First function : [ Get & Set element's SINGLE property value by (2) methods [Textual & boolean] ] -> To [ display it's Single value  with in console , result element textnode ] -> {2 function}  ->
    btn1.click(function (e) {

        // Preventing the default submit function of the button of the form :
        e.preventDefault();

        // 1) Printing in [console, alert] the value by using {prop()} & {attr()} of "disabled" property {BEFORE} Re-Set :
        console.log('Get the "disabled" SINGLE prop value [BEFORE Re-Set] by {prop()} method : ' + input1.prop('disabled'));
        console.log('Get the "disabled" SINGLE prop value [BEFORE Re-Set] by {attr()} method : ' + input1.attr('disabled'));

        alert('Get the "disabled" SINGLE prop value [BEFORE Re-Set] by {prop()} method : ' + input1.prop('disabled'));
        alert('Get the "disabled" SINGLE prop value [BEFORE Re-Set] by {attr()} method : ' + input1.attr('disabled'));

        input1.val('Disabled property value BEFORE resetting = ' + input1.prop('disabled'));

        // 2) Re-set the input "disabled" prop value by using [boolean Value] :  
        input1.prop("disabled", false).css({
            width: "100%",
            height: "80px",
            color: "red",
            display: "block"
        });
        // input1.prop("disabled", 'enabled');


        // 3) Printing in [console, alert] the value by using {prop()} & {attr()} of "disabled" property {AFTER} Re-Set :
        console.log('Get the "disabled" SINGLE prop value [AFTER Re-Set] by {prop()} method : ' + input1.prop('disabled'));
        console.log('Get the "disabled" SINGLE prop value [AFTER Re-Set] by {attr()} method : ' + input1.attr('disabled'));

        alert('Get the "disabled" SINGLE prop value [AFTER Re-Set] by {prop()} method : ' + input1.prop('disabled'));
        alert('Get the "disabled" SINGLE prop value [AFTER Re-Set] by {attr()} method : ' + input1.attr('disabled'));

        input1.val('Disabled SINGLE property value AFTER Resetting by {prop()} method = ' + input1.prop('disabled') + " || " +
            'Disabled SINGLE property value AFTER Resetting by {attr()} method = ' + input1.attr('disabled')
        );
    });

    // ------------------------------------------------

    // 2) Second function [ Get & Set element's Multiple properties values by (2) methods [Textual & Boolean] ] -> To [ display it's values in console , result element textnode ] -> {2 function} ->

    btn2.click(function (e) {
        e.preventDefault();

        // 1) Printing in [console, alert] the value by using {prop()} & {attr()} of "disabled" property {BEFORE} Re-Set :
        console.log('Get the "disabled" & "name" props values [BEFORE Re-Set] by {prop()} method : ' +
            input2.prop('disabled') + " || " +
            input2.prop('name'));

        console.log('Get the "disabled" & "name" props values [BEFORE Re-Set] by {attr()} method : ' +
            input2.attr('disabled') + " || " +
            input2.attr('name')
        );

        alert('Get the "disabled" & "name" props values [BEFORE Re-Set] by {prop()} method : ' +
            input2.prop('disabled') + " || " +
            input2.prop('name')
        );

        alert('Get the "disabled" & "name" props values [BEFORE Re-Set] by {attr()} method : ' +
            input2.attr('disabled') + " || " +
            input2.attr('name')
        );

        input2.val('Disabled & name props values BEFORE resetting = ' +
            input2.prop('disabled') + " || " +
            input2.prop('name')
        );

        // 2) Re-set the input "disabled" & "name" props values by using [boolean Value] & [texual Value] :
        input2.prop({
            "disabled": false,
            "name": "shadi",
        }).css({
            width: "100%",
            height: "80px",
            color: "red",
            display: "block"
        });


        // 3) Printing in [console, alert] the value by using {prop()} & {attr()} of "disabled" "name" property {AFTER} Re-Set :
        console.log('Get the "disabled" & "name" props values [AFTER Re-Set] by {prop()} method : ' +
            input2.prop('disabled') + " || " +
            input2.prop('name'));

        console.log('Get the "disabled" & "name" props values [AFTER Re-Set] by {attr()} method : ' +
            input2.attr('disabled') + " || " +
            input2.attr('name')
        );

        alert('Get the "disabled" & "name" props values [AFTER Re-Set] by {prop()} method : ' +
            input2.prop('disabled') + " || " +
            input2.prop('name')
        );

        alert('Get the "disabled" & "name" props values [AFTER Re-Set] by {attr()} method : ' +
            input2.attr('disabled') + " || " +
            input2.attr('name')
        );

        input2.val('Disabled & name props values AFTER Resetting by {prop()} method = ' +
            input2.prop('disabled') + " || " + input2.prop('name') + " || " +
            'Disabled & name props values AFTER Resetting by {attr()} method = ' +
            input2.attr('disabled') + " || " + input2.attr('name')
        );

    });

    // ------------------------------------------------

    // 3) Third function : [ this function will be applied in all other lessons ] -> {1 function}   ->



    // ------------------------------------------------
});
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------


