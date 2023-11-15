//  38 jQuery - Events Reference - pageX pageY
/* Main lessons functions :
    a) Main Events References {part 14} -> { pageX() } & { pageY() }  =>  [ 3 ] Groups &  [ 3 ] functions :
                                
        1) First function  : [ Simple Displaying Dynamic location[coordinates] value of current position on the screen using { pageX | pageY } values & mousemove(function(e){} ) Event ] => {1 function}
        2) Second function : [ Static Advanced Displaying specified shape Element according the current location[coordinates] value using {click() event} & {offSet({left: , top: }) method} & {e.pageX | e.pageY} ]
        3) Third function  : [ Live Advanced Displaying specified shape Element according the current location[coordinates] value using {mousemove() event} & {offSet(left: , top:) method} & {e.pageX | e.pageY}
        
    b) Main used methods within selector used in this lessons functions : 
        1) Single and nested functions 
        2) Combined Grouped functions
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
    alert('Hello to the JQ [pageX , pageY ] values & [mousemove()] event ');

    var statCircle = $(".codes0 .circle"),
        dynStatCircle = $(".codes0 .circle2"),
        dynMovCircle = $(".codes0 .circle3");

    // II] Main functions Groups :
    // 1] First function {pageX , pageY} + {mousemove() }  : [When mouse moving in the webpage => printing the coordiantion location value of the a certain element ] {1 function}  ->
    $('html').mousemove(function (e) {
        statCircle.text("X-Axis : " + e.pageX + ' & ' + "Y-Axis : " + e.pageY)

        // 3] Third function : [ pageX, pageY} : [by mouse move on a certain point in the webpage => display a specific circle in the position of the pointer  {1 function}  ->
        dynMovCircle.css({
            width: '300px',
            height: '50px',
            border: '3px solid gold',
        });
        dynMovCircle.show().text(e.pageX + ' | ' + e.pageY).offset({
            left: e.pageX + 10,
            top: e.pageY
        });
    });
    // ------------------------------------------------

    // 2] Second function : [ pageX, pageY} : [by click on a certain point in the webpage => display a specific circle in the position of the pointer  {1 function}  ->

    $('html').click(function (e) {
        dynStatCircle.show().text(e.pageX + ' | ' + e.pageY).offset({
            left: e.pageX,
            top: e.pageY
        });
    });

    // ------------------------------------------------------
    // ------------------------------------------------------


    // $('html').mousemove(function (e) {
    // });

    // ------------------------------------------------------
    // ------------------------------------------------------


    // ------------------------------------------------------
    // ------------------------------------------------------
    // ------------------------------------------------------
    // ------------------------------------------------------

});
