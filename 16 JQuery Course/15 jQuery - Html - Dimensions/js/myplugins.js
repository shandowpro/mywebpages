//  15 jQuery - Html - Dimensions
/* Main lessons functions :
    a) Main Elements Dimensions used by JQ  : 
        1) Width
        2) innerWidth
        3) OuterWidth        
        4) Height
        5) innerHeight
        6) OuterHeight        

    b) Set Flags : 
        1) plain value 
        2) custom unit value [px , em , rem , %]
        3) Increament | decreament value        
*/
// ========================================================

// I] Orcedion Plus buttons effect [4] groups :
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
// 5) Fourth plus button :
$(document).ready(function () {
    $('#plus5').click(function () {
        $('#group5').slideToggle('slow');
    });
});
// 6) Fourth plus button :
$(document).ready(function () {
    $('#plus6').click(function () {
        $('#group6').slideToggle('slow');
    });
});
// =========================================================
// =========================================================
// =========================================================

// II] Functions buttons [4] main group functions :
// 1] First group [Simple Set] : {main, inner , outer} (Width , Height)] Functions -> functional buttons [ 4 ] Set for each type of dimension (without padding,margin,border) ] :

$(document).ready(function () {
    // a) {elem.width()} & {elem.height()} => [Simple Set of main width & height of all elements] :
    $('#btn11').click(function () {
        alert('Welcome to [Simple Set] : {elem.width()} & {elem.height()} ');

        // 1) Defining new elements [div: elem] :
        var elem1 = $('.elem1'),
            elem2 = $('.elem2');


        // {Set the main Width() & Height()} :
        // Setting the First element by [simple value] :
        elem1.width(300);
        elem1.height(100);
        elem1.text('This element new Width = ' + elem1.width() + 'px' + '  &  ' + ' new Height = ' + elem1.height() + 'px');
        alert('First element [set by simple value] new width = ' + elem1.width() + 'px' + '\n' + 'First element [set by simple value] new height = ' + elem1.height() + 'px');
        console.log('First element [set by simple value] new width = ' + elem1.width() + 'px' + '\n' + 'First element [set by simple value] new height = ' + elem1.height() + 'px');

        // Setting the Second element by [simple value] :
        elem2.width('400px');
        elem2.height('200px');
        elem2.text('This element new Width = ' + elem2.width() + 'px' + '  &  ' + ' new Height = ' + elem2.height() + 'px');
        alert('Second element [set by simple value] new width = ' + elem2.width() + 'px' + '\n' + 'Second element [set by simple value] new height = ' + elem2.height() + 'px');
        console.log('Second element [set by simple value] new width = ' + elem2.width() + 'px' + '\n' + 'Second element [set by simple value] new height = ' + elem2.height() + 'px');

    });
});
// ------------------------------------------------------

// / 1] First group [Simple Set] /second button/ [Simple Set] {elem.innerWidth()} & {elem.innerHeight()}: => [Simple Set of element inner Dimension (with Padding)] : 
$(document).ready(function () {
    // b) {elem.innerWidth()} & {elem.innerHeight()} => [Simple Set of innerwidth & innerheight of all elements] :
    $('#btn12').click(function () {
        // 1) Defining new elements [div: elem] :
        var elem1 = $('.elem1'),
            elem2 = $('.elem2');

        // {Set the innerWidth() & innerHeight()} :
        // Setting the First element by [simple value] :
        elem1.innerWidth(300);
        elem1.innerHeight(100);
        elem1.text('This element new InnerWidth = ' + elem1.innerWidth() + 'px' + '  &  ' + ' new InnerHeight = ' + elem1.innerHeight() + 'px');
        alert('First element [set by simple value] new inner width = ' + elem1.innerWidth() + 'px' + '\n' + 'First element [set by simple value] new inner height = ' + elem1.innerHeight() + 'px');
        console.log('First element [set by simple value] new inner width = ' + elem1.innerWidth() + 'px' + '\n' + 'First element [set by simple value] new height = ' + elem1.innerHeight() + 'px');

        // Setting the Second element by [simple value] :
        elem2.innerWidth(400);
        elem2.innerHeight(200);
        elem2.text('This element new inner Width = ' + elem2.innerWidth() + 'px' + '  &  ' + ' new inner Height = ' + elem2.innerHeight() + 'px');
        alert('Second element [set by simple value] new inner width = ' + elem2.innerWidth() + 'px' + '\n' + 'Second element [set by simple value] new inner height = ' + elem2.innerHeight() + 'px');
        console.log('Second element [set by simple value] new inner width = ' + elem2.innerWidth() + 'px' + '\n' + 'Second element [set by simple value] new inner height = ' + elem2.innerHeight() + 'px');

    });
});
// ------------------------------------------------------

// / 1] First group [Simple Set] /Third button/ [Simple Set] {elem.outerWidth(#, false)} & {elem.outerHeight(#, false)}: => [Simple Set of element outer Dimension (with padding, margin && without border)] : 
$(document).ready(function () {
    // c) {elem.outerWidth(#, false)} & {elem.outerHeight(#, false)} => [Simple Set of Outer width & Outer height of all elements] :
    $('#btn13').click(function () {
        // 1) Defining new elements [div: elem] :
        var elem1 = $('.elem1'),
            elem2 = $('.elem2');

        // {Set the innerWidth() & innerHeight()} :
        // Setting the First element by [simple value] :
        elem1.outerWidth(300, false);
        elem1.outerHeight(100, false);
        elem1.text('This element new Outer Width = ' + elem1.outerWidth() + 'px' + '  &  ' + ' new outer Height = ' + elem1.outerHeight() + 'px');
        alert('First element [set by simple value] new Outer width = ' + elem1.outerWidth() + 'px' + '\n' + 'First element [set by simple value] new outer height = ' + elem1.outerHeight() + 'px');
        console.log('First element [set by simple value] new Outer width = ' + elem1.outerWidth() + 'px' + '\n' + 'First element [set by simple value] outer height = ' + elem1.outerHeight() + 'px');

        // Setting the Second element by [simple value] :
        elem2.innerWidth(400, false);
        elem2.innerHeight(200, false);
        elem2.text('This element new outer Width = ' + elem2.outerWidth() + 'px' + '  &  ' + ' new outer Height = ' + elem2.outerHeight() + 'px');
        alert('Second element [set by simple value] new outer width = ' + elem2.outerWidth() + 'px' + '\n' + 'Second element [set by simple value] new outer height = ' + elem2.outerHeight() + 'px');
        console.log('Second element [set by simple value] new outer width = ' + elem2.outerWidth() + 'px' + '\n' + 'Second element [set by simple value] new outer height = ' + elem2.outerHeight() + 'px');

    });
});
// ------------------------------------------------------

// ------------------------------------------------------

// / 1] First group [Simple Set] /Fourth button/ [Simple Set] {elem.outerWidth(#, true)} & {elem.outerHeight(#, true)}: => [Simple Set of element outer Dimension (with padding, margin + border)] : 
$(document).ready(function () {
    // d) {elem.outerWidth(#, true)} & {elem.outerHeight(#, true)} => [Simple Set of Outer width & Outer height of all elements] :
    $('#btn14').click(function () {
        // 1) Defining new elements [div: elem] :
        var elem1 = $('.elem1'),
            elem2 = $('.elem2');

        // {Set the outerWidth() & outerHeight()} :
        // Setting the First element by [simple value] :
        elem1.outerWidth(300, true);
        elem1.outerHeight(100, true);
        elem1.text('This element new Outer Width = ' + elem1.outerWidth() + 'px' + '  &  ' + ' new outer Height = ' + elem1.outerHeight() + 'px');
        alert('First element [set by simple value] new Outer width = ' + elem1.outerWidth() + 'px' + '\n' + 'First element [set by simple value] new outer height = ' + elem1.outerHeight() + 'px');
        console.log('First element [set by simple value] new Outer width = ' + elem1.outerWidth() + 'px' + '\n' + 'First element [set by simple value] outer height = ' + elem1.outerHeight() + 'px');

        // Setting the Second element by [simple value] :
        elem2.innerWidth(400);
        elem2.innerHeight(200);
        elem2.text('This element new outer Width = ' + elem2.outerWidth() + 'px' + '  &  ' + ' new outer Height = ' + elem2.outerHeight() + 'px');
        alert('Second element [set by simple value] new outer width = ' + elem2.outerWidth() + 'px' + '\n' + 'Second element [set by simple value] new outer height = ' + elem2.outerHeight() + 'px');
        console.log('Second element [set by simple value] new outer width = ' + elem2.outerWidth() + 'px' + '\n' + 'Second element [set by simple value] new outer height = ' + elem2.outerHeight() + 'px');

    });
});
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------

// 2] Second group [Advanced Set] : {main, inner , outer} (Width , Height)] Functions -> functional buttons [ 4 ] Set for each type of dimension (without padding,margin,border) ] :

// 2] [Advanced Set] => First function [Set for each type of dimension (without padding,margin,border) [by value with custom unit(px)] : 
// a) {elem.width()} & {elem.height()} => [Advanced Set of main width & height of all elements] :
$(document).ready(function () {
    $('#btn21').click(function () {
        alert('Welcome to [Advanced Set : by value with custom unit(px)] => {elem.width()} & {elem.height()} ');

        // 1) Defining new elements [div: elem] :
        var elem1 = $('.elem1'),
            elem2 = $('.elem2');

        // {Set the main Width() & Height()} :
        // Setting the First element by [value with custom unit(px)] :
        elem1.width('300px');
        elem1.height('100px');
        elem1.text('This element [set by value with custom unit(px)] new Width = ' + elem1.width() + 'px' + '  &  ' + ' new Height = ' + elem1.height() + 'px');
        alert('First element [set by value with custom unit(px)] new width = ' + elem1.width() + 'px' + '\n' + 'First element [set by value with custom unit(px)] new height = ' + elem1.height() + 'px');
        console.log('First element [set by value with custom unit(px)] new width = ' + elem1.width() + 'px' + '\n' + 'First element [set by value with custom unit(px)] new height = ' + elem1.height() + 'px');

        // Setting the Second element by [value with custom unit(px)] :
        elem2.width('400px');
        elem2.height('200px');
        elem2.text('This element new Width = ' + elem2.width() + 'px' + '  &  ' + ' new Height = ' + elem2.height() + 'px');
        alert('Second element [set by value with custom unit(px)] new width = ' + elem2.width() + 'px' + '\n' + 'Second element [set by value with custom unit(px)] new height = ' + elem2.height() + 'px');
        console.log('Second element [set by value with custom unit(px)] new width = ' + elem2.width() + 'px' + '\n' + 'Second element [set by value with custom unit(px)] new height = ' + elem2.height() + 'px');

    });
});
// ------------------------------------------------------

// 2] [Advanced Set] => Second function [Set for each type of dimension (without padding,margin,border) [by value with increament|decreament (+=  || -=)] : 
// b) {elem.innerWidth()} & {elem.innerHeight()} => [Advanced Set of Inner width & height of all elements] :
$(document).ready(function () {
    $('#btn22').click(function () {
        alert('Welcome to [Advanced Set : by value with increament|decreament (+=  || -=)] => {elem.innerWidth()} & {elem.innerHeight()} ');

        // 1) Defining new elements [div: elem] :
        var elem1 = $('.elem1'),
            elem2 = $('.elem2');

        // {Set the Inner Width() & Height()} :
        // Setting the First element by [value with increament (+=)] :
        elem1.width('+=' + 100);
        elem1.height('+=' + 100);
        elem1.text('This element [value with increament (+=100)] new Inner Width = ' + elem1.innerWidth() + 'px' + '  &  ' + ' new [value with increament (+=100)] Inner Height = ' + elem1.innerHeight() + 'px');
        alert('First element [value with increament (+=100)] new Inner width = ' + elem1.innerWidth() + 'px' + '\n' + 'First element [value with increament (+=100)] new inner height = ' + elem1.innerHeight() + 'px');
        console.log('First element [value with increament (+=100)] new Inner width = ' + elem1.innerWidth() + 'px' + '\n' + 'First element [value with increament (+=100)] new inner height = ' + elem1.innerHeight() + 'px');

        // Setting the Second element by [value with decreament (-=)] :
        elem2.width('-=' + 50);
        elem2.height('-=' + 50);
        elem2.text('This element [value with decreament (-=50)] new Inner Width = ' + elem2.innerWidth() + 'px' + '  &  ' + ' new [value with decreament (-=50)] Inner Height = ' + elem2.innerHeight() + 'px');
        alert('Second element [value with decreament (-=50)] new Inner width = ' + elem2.innerWidth() + 'px' + '\n' + 'Second element [value with decreament (-=50)] new Inner height = ' + elem2.innerHeight() + 'px');
        console.log('Second element [value with decreament (-=50)] new Inner width = ' + elem2.innerWidth() + 'px' + '\n' + 'Second element [value with decreament (-=50)] new Inner height = ' + elem2.innerHeight() + 'px');
    });
});
// ------------------------------------------------------

// 2] [Advanced Set] => Third function [Set for each type of dimension (without padding,margin,border) [by value with custom unit(%)] : 
$(document).ready(function () {
    // c) {elem.outerWidth()} & {elem.outerHeight()} => [Advanced Set of outer width & height of all elements] :
    $('#btn23').click(function () {
        alert('Welcome to [Advanced Set : by value with custom unit(%)] => {elem.outerWidth()} & {elem.outerHeight()} ');

        // 1) Defining new elements [div: elem] :
        var elem1 = $('.elem1'),
            elem2 = $('.elem2');

        // {Set the Outer Width() & Height()} :
        // Setting the First element by [value with custom unit(%)] :
        elem1.width('150%');
        elem1.height('150%');
        elem1.text('This element [value with custom unit(%)] new Outer Width = ' + elem1.outerWidth() + 'px' + '  &  ' + ' new [value with custom unit(%)] Outer Height = ' + elem1.outerHeight() + 'px');
        alert('First element [value with custom unit(%)] new Outer width = ' + elem1.width() + 'px' + '\n' + 'First element [value with custom unit(%)] new Outer height = ' + elem1.outerHeight() + 'px');
        console.log('First element [value with custom unit(%)] new Outer Width = ' + elem1.width() + 'px' + '\n' + 'First element [value with custom unit(%)] new Outer height = ' + elem1.outerHeight() + 'px');

        // Setting the Second element by [value with custom unit(%)] :
        elem2.width('200%');
        elem2.height('200%');
        elem2.text('This element [value with custom unit(%)] new Outer Width = ' + elem2.outerWidth() + 'px' + '  &  ' + ' new [value with custom unit(%)] Outer Height = ' + elem2.outerHeight() + 'px');
        alert('Second element [value with custom unit(%)] new Outer width = ' + elem2.outerWidth() + 'px' + '\n' + 'Second element [value with custom unit(%)] new Outer height = ' + elem2.outerHeight() + 'px');
        console.log('Second element [value with custom unit(%)] new Outer width = ' + elem2.outerWidth() + 'px' + '\n' + 'Second element [value with custom unit(%)] new Outer height = ' + elem2.outerHeight() + 'px');

    });
});
// ------------------------------------------------------
// ------------------------------------------------------

// 2] [Advanced Set] => Fourth function [Set for each type of dimension (without padding,margin,border) [by value with custom unit(em)] : 
$(document).ready(function () {
    // b) {elem.outerWidth('#em', true)} & {elem.outerHeight('#em', true)} => [Advanced Set of outer width & height [true] of all elements] :
    $('#btn24').click(function () {
        alert("Welcome to [Advanced Set : by value with custom unit('#em' , true)] => {elem.outerWidth('#em', true)} & {elem.outerHeight('#em', true)} ")

        // 1) Defining new elements [div: elem] :
        var elem1 = $('.elem1'),
            elem2 = $('.elem2');

        // {Set the Outer Width() & Height()} :
        // Setting the First element by [value with custom unit(em)] :
        elem1.width('10em', true);
        elem1.height('5em', true);
        elem1.text('This element [value with custom unit(em)] new Outer(true) Width = ' + elem1.outerWidth(true) + 'px' + '  &  ' + ' new [value with custom unit(em)] Outer(true) Height = ' + elem1.outerHeight(true) + 'px');
        alert('First element [value with custom unit(em)] new Outer(true) width = ' + elem1.outerWidth(true) + 'px' + '\n' + 'First element [value with custom unit(em)] new Outer(true) height = ' + elem1.outerHeight(true) + 'px');
        console.log('First element [value with custom unit(em)] new Outer(true) Width = ' + elem1.outerWidth(true) + 'px' + '\n' + 'First element [value with custom unit(em)] new Outer(true) height = ' + elem1.outerHeight(true) + 'px');

        // Setting the Second element by [value with custom unit(em)] :
        elem2.width('10em', true);
        elem2.height('5em', true);
        elem2.text('This element [value with custom unit(em)] new Outer(true) Width = ' + elem2.outerWidth(true) + 'px' + '  &  ' + ' new [value with custom unit(em)] Outer(true) Height = ' + elem2.outerHeight(true) + 'px');
        alert('Second element [value with custom unit(em)] new Outer(true) width = ' + elem2.outerWidth(true) + 'px' + '\n' + 'Second element [value with custom unit(em)] new Outer(true) height = ' + elem2.outerHeight(true) + 'px');
        console.log('Second element [value with custom unit(em)] new Outer(true) width = ' + elem2.outerWidth(true) + 'px' + '\n' + 'Second element [value with custom unit(em)] new Outer(true) height = ' + elem2.outerHeight(true) + 'px');

    });
});
// ------------------------------------------------------
// ------------------------------------------------------

// 3] Third group [Simple Get] : {main, inner , outer} (Width , Height)] Functions -> functional buttons [ 4 ] Get for each type of dimension (main , inner , outer[false , true]) ] :

// 3] [Simple Get] => First function [Get for each type of dimension] : 
// a) {elem.width()} & {elem.height()} => [Simple Get of main width & height of all elements] :
$(document).ready(function () {
    $('#btn31').click(function () {
        alert('Welcome to [simple Get] => {elem.width()} & {elem.height()} ');

        // 1) Defining new elements [div: elem] :
        var elem1 = $('.elem1'),
            elem2 = $('.elem2'),
            input1 = $('.input1'),
            input2 = $('.input2');

        // {Get the main Width() & Height()} :        
        elem1.text('This element [Simple Get] Width = ' + elem1.width() + 'px' + '  &  ' + '  [Simple Get] Height = ' + elem1.height() + 'px');
        alert('First element [Simple Get] Width = ' + elem1.width() + 'px' + '\n' + 'First element [Simple Get] height = ' + elem1.height() + 'px');
        console.log('First element [Simple Get] Width = ' + elem1.width() + 'px' + '\n' + 'First element [Simple Get] Height = ' + elem1.height() + 'px');
        input1.val('First element [Simple Get] width = ' + elem1.width() + 'px' + '<br>' + 'First element [Simple Get] height = ' + elem1.height() + 'px');

        // Setting the Second element by [value with custom unit(px)] :        
        elem2.text('This element [Simple Get] Width = ' + elem2.width() + 'px' + '  &  ' + ' [Simple Get] Height = ' + elem2.height() + 'px');
        alert('Second element [Get by value with custom unit(px)] new width = ' + elem2.width() + 'px' + '\n' + 'Second element [Simple Get] height = ' + elem2.height() + 'px');
        console.log('Second element [Simple Get] width = ' + elem2.width() + 'px' + '\n' + 'Second element [Simple Get] height = ' + elem2.height() + 'px');
        input2.val('Second element [Simple Get] width = ' + elem2.width() + 'px' + '<br>' + 'Second element [Simple Get] height = ' + elem2.height() + 'px');

    });
});
// ------------------------------------------------------

// 3] [Simple Get] => Second function [Set for each type of dimension (without padding,margin,border) [by value with increament|decreament (+=  || -=)] : 
// b) {elem.innerWidth()} & {elem.innerHeight()} => [Advanced Get of Inner width & height of all elements] :
$(document).ready(function () {
    $('#btn32').click(function () {
        alert('Welcome to [Simple Get] => {elem.innerWidth()} & {elem.innerHeight()} ');

        // 1) Defining new elements [div: elem] :
        var elem1 = $('.elem1'),
            elem2 = $('.elem2'),
            input1 = $('.input1'),
            input2 = $('.input2');

        // {Get the Inner Width() & Height()} :        
        elem1.text('This element [Simple Get] inner Width = ' + elem1.innerWidth() + 'px' + '  &  ' + ' [Simple Get] inner Height = ' + elem1.innerHeight() + 'px');
        alert('First element [Simple Get] inner width = ' + elem1.innerWidth() + 'px' + '\n' + 'First element [Simple Get] inner height = ' + elem1.innerHeight() + 'px');
        console.log('First element [Simple Get] inner width = ' + elem1.innerWidth() + 'px' + '\n' + 'First element [Simple Get] inner height = ' + elem1.innerHeight() + 'px');
        input1.val('First element [Simple Get] inner width = ' + elem1.innerWidth() + 'px' + '<br>' + 'First element [Simple Get] inner height = ' + elem1.innerHeight() + 'px');

        // Setting the Second element by :        
        elem2.text('This element [Simple Get] Inner Width = ' + elem2.innerWidth() + 'px' + '  &  ' + ' [Simple Get] inner Height = ' + elem2.innerHeight() + 'px');
        alert('Second element [Simple Get] inner width = ' + elem2.innerWidth() + 'px' + '\n' + 'Second element [Simple Get] inner height = ' + elem2.innerHeight() + 'px');
        console.log('Second element [Simple Get] inner width = ' + elem2.innerWidth() + 'px' + '\n' + 'Second element [Simple Get] inner height = ' + elem2.innerHeight() + 'px');
        input2.val('Second element [Simple Get] inner width = ' + elem2.innerWidth() + 'px' + '<br>' + 'Second element [Simple Get] inner height = ' + elem2.innerHeight() + 'px');


    });
});
// ------------------------------------------------------

// 3] [Simple Get] => Third function [Get for each type of dimension (without border) : 
$(document).ready(function () {
    // c) {elem.outerWidth(false)} & {elem.outerHeight(false)} => [Simple Set of outer width & height of all elements] :
    $('#btn33').click(function () {
        alert('Welcome to [Simple Set] => {elem.outerWidth()} & {elem.outerHeight()} ');

        var elem1 = $('.elem1'),
            elem2 = $('.elem2'),
            input1 = $('.input1'),
            input2 = $('.input2');

        // {Get the Inner Width() & Height()} :        
        elem1.text('This element [Simple Get] outer Width = ' + elem1.outerWidth() + 'px' + '  &  ' + ' [Simple Get] outer Height = ' + elem1.outerHeight() + 'px');
        alert('First element [Simple Get] inner outer width = ' + elem1.outerWidth() + 'px' + '\n' + 'First element [Simple Get] outer height = ' + elem1.outerHeight() + 'px');
        console.log('First element [Simple Get] outer width = ' + elem1.outerWidth() + 'px' + '\n' + 'First element [Simple Get] outer height = ' + elem1.outerHeight() + 'px');
        input1.val('First element [Simple Get] outer width = ' + elem1.outerWidth() + 'px' + '\n' + 'First element [Simple Get] outer height = ' + elem1.outerHeight() + 'px');

        // Setting the Second element by :        
        elem2.text('This element [Simple Get] outer Width = ' + elem2.outerWidth() + 'px' + '  &  ' + ' [Simple Get] inner Height = ' + elem2.outerHeight() + 'px');
        alert('Second element [Simple Get] outer width = ' + elem2.outerWidth() + 'px' + '\n' + 'Second element [Simple Get] inner height = ' + elem2.outerHeight() + 'px');
        console.log('Second element [Simple Get] outer width = ' + elem2.outerWidth() + 'px' + '\n' + 'Second element [Simple Get] inner height = ' + elem2.outerHeight() + 'px');
        input2.val('Second element [Simple Get] outer width = ' + elem2.outerWidth() + 'px' + '\n' + 'Second element [Simple Get] inner height = ' + elem2.outerHeight() + 'px');

    });
});
// ------------------------------------------------------
// ------------------------------------------------------

// 3] [Simple Get] => Fourth function [Set for each type of dimension (with padding,margin + border)  : 
$(document).ready(function () {
    // d) {elem.outerWidth(true)} & {elem.outerHeight(true)} => [Advanced Get of outer[true] width & height  of all elements] :
    $('#btn34').click(function () {
        alert('Welcome to [Simple Get] => {elem.outerWidth(true)} & {elem.outerHeight(true)} ');

        var elem1 = $('.elem1'),
            elem2 = $('.elem2'),
            input1 = $('.input1'),
            input2 = $('.input2');

        // For First Element {Get the Outer[true] Width() & Height()}  :        
        alert('First element [Simple Get] outer width = ' + elem1.outerWidth(true) + 'px' + '\n' + 'First element [Simple Get] outer [true] height = ' + elem1.outerHeight(true) + 'px');
        console.log('First element [Simple Get] outer width = ' + elem1.outerWidth(true) + 'px' + '\n' + 'First element [Simple Get] outer [true] height = ' + elem1.outerHeight(true) + 'px');
        input1.val('First element [Simple Get] outer width = ' + elem1.outerWidth(true) + 'px' + '<br>' + 'First element [Simple Get] outer [true] height = ' + elem1.outerHeight(true) + 'px');

        // For Second Element {Get the Outer[true] Width() & Height()}  :        
        elem2.text('This element [Simple Get] outer Width = ' + elem2.outerWidth(true) + 'px' + '  &  ' + ' [Simple Get] inner Height = ' + elem2.outerHeight(true) + 'px');
        alert('Second element [Simple Get] outer width = ' + elem2.outerWidth(true) + 'px' + '\n' + 'Second element [Simple Get] inner height = ' + elem2.outerHeight(true) + 'px');
        console.log('Second element [Simple Get] outer width = ' + elem2.outerWidth(true) + 'px' + '\n' + 'Second element [Simple Get] inner height = ' + elem2.outerHeight(true) + 'px');
        input2.val('Second element [Simple Get] outer width = ' + elem2.outerWidth(true) + 'px' + '\n' + 'Second element [Simple Get] inner height = ' + elem2.outerHeight(true) + 'px');

    });
});
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------

// 4] [Advanced input Set] => fifth function [set the input values of both elements dimesions ]  : 
$(document).ready(function () {
    // A) Advanced setting the both elemenets [main dimesions] :
    $('#mainD').click(function () {

        var elem1 = $('.elem1'),
            elem2 = $('.elem2'),
            inputmw1 = $('#inputmw1'),
            inputmh1 = $('#inputmh1'),
            inputmw2 = $('#inputmw2'),
            inputmh2 = $('#inputmh2');

        // setting the [main width & height] of [elem1 , elem2] :  
        elem1.width(inputmw1.val());
        elem1.height(inputmh1.val());
        elem1.text('This element main width =' + elem1.width() + ' || main Height = ' + elem1.height());

        elem2.width(inputmw2.val());
        elem2.height(inputmh2.val());
        elem2.text('This element main width =' + elem2.width() + ' || main Height = ' + elem2.height());

    });
    // ---------------------------------------------------------------

    // B) Advanced setting the both elements [inner dimensions] :`:
    $('#innerD').click(function () {

        var elem1 = $('.elem1'),
            elem2 = $('.elem2'),
            inputiw1 = $('#inputiw1'),
            inputih1 = $('#inputih1'),
            inputiw2 = $('#inputiw2'),
            inputih2 = $('#inputih2');

        // setting the [inner width & height] of [elem1 , elem2] :  
        elem1.innerWidth(inputiw1.val());
        elem1.innerHeight(inputih1.val());
        elem1.text('This element inner width =' + elem1.innerWidth() + ' || inner Height = ' + elem1.innerHeight() +
            ' || This element main width =' + elem1.width() + ' || main Height = ' + elem1.height());

        elem2.innerWidth(inputiw2.val());
        elem2.innerHeight(inputih2.val());
        elem2.text('This element inner width =' + elem2.innerWidth() + ' || inner Height = ' + elem2.innerHeight() +
            ' || This element main width =' + elem2.width() + ' || main Height = ' + elem2.height());
    });

    // ------------------------------------------------------
    // ------------------------------------------------------

    // C) Advanced setting the both elemenets [outer dimesions] :`:
    $('#outerD').click(function () {

        var elem1 = $('.elem1'),
            elem2 = $('.elem2'),
            inputow1 = $('#inputow1'),
            inputoh1 = $('#inputoh1'),
            inputow2 = $('#inputow2'),
            inputoh2 = $('#inputoh2');

        // Setting the [outer[false] width & height] of [elem1 , elem2] :  
        elem1.outerWidth(inputow1.val());
        elem1.outerHeight(inputoh1.val());
        elem1.text('This element outer[false] width =' + elem1.outerWidth() + ' || outer[false] Height = ' + elem1.outerHeight() +
            ' || This element main width =' + elem1.width() + ' || main Height = ' + elem1.height());

        elem2.outerWidth(inputow2.val());
        elem2.outerHeight(inputoh2.val());
        elem2.text('This element outer[false] width =' + elem2.outerWidth() + ' || outer[false] Height = ' + elem2.outerHeight() +
            ' || This element main width =' + elem2.width() + ' || main Height = ' + elem2.height());

    });
    // ------------------------------------------------------
    // ------------------------------------------------------

    // D) Advanced setting the both elemenets [outer dimesions] :`:
    $('#outerTD').click(function () {

        var elem1 = $('.elem1'),
            elem2 = $('.elem2'),
            inputtow1 = $('#inputtow1'),
            inputtoh1 = $('#inputtoh1'),
            inputtow2 = $('#inputtow2'),
            inputtoh2 = $('#inputtoh2');

        // Setting the [outer[true] width & height] of [elem1 , elem2] :  
        elem1.outerWidth(inputtow1.val(), true);
        elem1.outerHeight(inputtoh1.val(), true);
        elem1.text('This element outer[true] width =' + elem1.outerWidth(true) + ' || outer[true] Height = ' + elem1.outerHeight(true) +
            ' || This element main width =' + elem1.width() + ' || main Height = ' + elem1.height());

        elem2.outerWidth(inputtow2.val(), true);
        elem2.outerHeight(inputtoh2.val(), true);
        elem2.text('This element outer[true] width =' + elem2.outerWidth(true) + ' || outer[true] Height = ' + elem2.outerHeight(true) +
            ' || This element main width =' + elem2.width() + ' || main Height = ' + elem2.height());
    });
});


// ------------------------------------------------------
// ------------------------------------------------------

