//  16 jQuery - Traversing - Parent _ Parents _ ParentsUntil
/* Main lessons functions :
    a) Main Elements Traversing used by JQ  : 
        1) Traversing [parent]
        2) Traversing [parents]
        3) Traversing [parentUntil]        
        
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

// II] Functions buttons [ 3 ] main group functions :
// 1] First group [elem.parent();] [4 functions] => Access to : [ print, modify Css [single , muliptle] , add animation] :

// I] /  a) Access to element's parent -> to print the child's parent :
$(document).ready(function () {
    $('#btn11').click(function () {

        // 1) Defining new elements [ element's direct parent] :
        var elem1 = $('.elem1').parent();

        // Printing the element's [parent] :                
        alert(elem1);
        console.log(elem1);
        elem1.text('This element\'s parent is :' + elem1);
    });
});
// ------------------------------------------------------
// I] / b) Access to element's parent => [modify single Css property]  :
$(document).ready(function () {
    $('#btn12').click(function () {

        // 1) Defining new elements [ element's direct parent ] :
        var elem1 = $('.elem1').parent();

        // Modify single css property of the element's [parent] :                
        elem1.css('border', '5px solid red');
    });
});
// ------------------------------------------------------

// I] / c) Access to element's parent => [modify multiple Css properties]  :
$(document).ready(function () {
    $('#btn13').click(function () {

        // 1) Defining new elements [ element's direct parent ] :
        var elem1 = $('.elem1').parent();

        // Modify multiple css properties of the element's [parent] :                
        elem1.css({
            padding: '50px',
            margin: '100px',
            border: '5px solid red',
        });
    });
});

// -------------------------------

// I] / d) Access to element's parent => [modify multiple Css properties]  :
$(document).ready(function () {
    $('#btn14').click(function () {

        // 1) Defining new elements [ element's direct parent ] :
        var elem1 = $('.elem1').parent();

        // Modify multiple css properties of the element's [parent] :                
        elem1.fadeOut();
    });
});
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------

// II] Second group [elem.parents();] [4 functions] => Access to : [ modify Css [single , multiple] , add animation] {for ceratin or all parnents} :

// [1] {elem1} => {For a certain one parent -.codes-} :
// [2] {elem2} => {For a certain all element's parents} :

// II] /  a) Access to a certain element's parent -> to print the child's parent :
$(document).ready(function () {
    $('#btn21').click(function () {

        // 1) Defining new elements [element's certain parent] & [element's all parents] :
        var elem1 = $('.elem1').parents('.codes'),
            elem2 = $('.elem2').parents();

        // Printing the [element's certain [parent]]  :
        alert('First element\'s] certain  parent: ' + elem1 + ' Second element\'s  Direct parent : ' + elem2);
        console.log('First element\'s certain parent: ' + elem1 + ' Second element\'s  Direct parent : ' + elem2);
    });
});
// ------------------------------------------------------
// II] / b) Access to element's certain parent => [modify single Css property]  :
$(document).ready(function () {
    $('#btn22').click(function () {

        // 1) Defining new elements [element's certain parent] & [element's all parents] :
        var elem1 = $('.elem1').parents('.codes'),
            elem2 = $('.elem2').parents();

        // Modify single css property of the element's certain [parent] :                
        elem1.css('border', '10px solid red');
        elem2.css('border', '5px solid blue');
    });
});
// ------------------------------------------------------

// II] / c) Access to element's certain parent => [modify multiple Css properties]  :
$(document).ready(function () {
    $('#btn23').click(function () {

        // 1) Defining new elements [first element's certain parent] & [second element's all parents] :
        var elem1 = $('.elem1').parents('.codes'),
            elem2 = $('.elem2').parents();

        // Modify multiple css properties of the [first element's certain parent] & [second element's all parents] :
        elem1.css({
            padding: '50px',
            margin: '10px',
            border: '5px solid red',
        });

        elem2.css({
            padding: '100px',
            margin: '20px',
            border: '5px solid red',
        });
    });
});

// --------------------------------------------------------

// II] / d) Access to element's [first element's certain parent] & [second element's all parents] => [modify multiple Css properties]  :
$(document).ready(function () {
    $('#btn24').click(function () {

        // 1) Defining new elements [first element's certain parent] & [second element's all parents] :
        var elem1 = $('.elem1').parents('.codes'),
            elem2 = $('.elem2').parents('.codes');

        // Adding a animation of the element's certain [parent] :                
        elem1.fadeOut(2000);
        elem2.slideDown(2000);
    });
});
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------

// III] Third group [elem.parents();] [3 functions] => Access to : [ modify Css [single , multiple] , add animation] {for all parnents until certain parent} :
//  a) Access to all element's parents until certain parent -> [modify single Css property] :
$(document).ready(function () {
    $('#btn31').click(function () {
        // Defigning the varialbe of first element: 
        var elem1 = $('.mainCont .subCont .elem1');

        // elem2 = $('.elem2').parents();

        // elem1.css('fontSize', '50px');
        // Modify single css property of the element's  all parents until certain parent} :

        elem1.parentsUntil('.codes').css('border', '10px solid #f00');
        alert('first element css property has been changed');
        console.log('first element css property has been changed');

    });
});

// ------------------------------------------------------
// III] / b) Access to element's all parnents until certain parent => [modify single Css property]  :
$(document).ready(function () {
    $('#btn32').click(function () {

        // Defigning the varialbe of first element: 
        var elem1 = $('.mainCont .subCont .elem1');

        // elem2 = $('.elem2').parents();    


        // Modify single css property of the element's  all parnents until certain parent} :
        elem1.parentsUntil('.codes').css({
            padding: '50px',
            margin: '10px',
            border: '5px solid #00f',
        });

        alert('first element css properties has been changed');
        console.log('first element css properties has been changed');
    });
});
// ------------------------------------------------------

// III] / c) Access to element's for all parnents until certain parent => [modify multiple Css properties]  :
$(document).ready(function () {
    $('#btn33').click(function () {
        // Defigning the varialbe of first element: 
        var elem1 = $('.mainCont .subCont .elem1');

        // Adding an animation [FADEOUT] to the first element's parents until certain parent :
        elem1.parentsUntil('.codes').fadeOut(2000);

        // alert('first element animation [animation] has been ADDED');
        // console.log('first element animation [animation] has been ADDED');

    });
});
// --------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------

