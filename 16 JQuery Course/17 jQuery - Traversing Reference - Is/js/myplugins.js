//  17 jQuery - Traversing Reference - Is [ children() || find() ]
/* Main lessons functions :
    a] Main Elements Traversing used by JQ  : 
        1) Traversing [children()]
        2) Traversing [find()]

    b] methods/flags/selectors used WITH traversing [children || find] functions,methods : 
        1) ('*') => [astrics] => to access and select all children 
        2) ('.className') => to access and select all children that has this className 
        3) ('.tagName') => to access and select all children that has this TagName  
        4) Advanced filters :
            a) ("elem:contains('')") => to access and select all children that has contains specific text  
            b) ("elem:first") => to access and select first child of certain type 
            c) ("elem:last") => to access and select last child of certain type 

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

// II] Functions buttons [ 2 ] main groups functions :
// 1] First group [elem.children();] [3 functions] => Access direct level [normal(all, certain child) and with filters] to : [ print, modify Css [single , muliptle]] :

// I] / a) Access to element's direct children [without using advanced selector ] -> all Functions :
$(document).ready(function () {
    $('#btn11').click(function () {

        // *) Defining element's direct level children [without using advanced selectors] :
        var elem1 = $('.elem1').children();

        // 1) Printing the element's [all direct children] :                
        alert(elem1);
        console.log(elem1);
        elem1.text('This element\'s direct child is :' + elem1);

        // 2) Changing single css property of [all direct children] :
        elem1.css('fontSize', '20px');

        // 3) Changing multiple css properties of [all direct children] :
        elem1.css({
            fontSize: '30px',
            border: '5px solid red',
            width: '300px',
        });
    });
});
// ------------------------------------------------------

// I] / b) Access to element's direct children [with using advanced selector - tagName - ] => [all functions]  :
$(document).ready(function () {
    $('#btn12').click(function () {

        // *) Defining element's all direct level children [with using advanced selector : tag name ] :
        var childElem = $('.elem2').children('p');

        // 1) Printing the element's [all direct children] :                
        alert('Direct children of the second element [with tag name (p)] : ' + childElem);
        console.log('Direct children of the second element [with tag name (p)] : ' + childElem);
        elem2.text('Direct children of the second element  [with tag name (p)] : ' + childElem);

        // 2) Changing single css property of [all direct children with class (par)] :
        childElem.css('fontSize', '30px');

        // 3) Changing multiple css properties of [all direct children (with tagname -p-)] :
        childElem.css({
            fontSize: '30px',
            border: '5px solid blue',
            width: '300px',
        });
    });
});
// ------------------------------------------------------

// I] / c) Access to element's direct children [with using advanced selector - className - ]  => [all functions]  :
$(document).ready(function () {
    $('#btn13').click(function () {
        // *) Defining element's all direct level children [with using advanced selector : className] :
        var childElem = $('.elem2').children('.par');

        // 1) Printing the element's [all direct children] :                
        alert('Direct children of the second element [with class : par] : ' + childElem);
        console.log('Directren children of the second element [with class : par] : ' + childElem);
        childElem.text('Direct children of the second element [with class : par] : ' + childElem);

        // 2) Changing single css property of [all direct children with class (par)] :
        childElem.css('fontSize', '20px');

        // 3) Changing multiple css properties of [all direct children (with class -par-)] :
        childElem.css({
            fontSize: '30px',
            border: '5px solid red',
            width: '300px',
        });
    });
});

// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------

// II] Second group [elem.find();] [4 functions] => Access (by all types of selectors) to : [ modify Css (single , multiple) ] {for ceratin or all parnents} :

// II] / a) Access to element's multiple levels children [without using advanced selector] -> all functions :
$(document).ready(function () {
    $('#btn21').click(function () {

        // *) Defining element's mulitple level children [without using advanced selectors] :
        var elem2 = $('.elem2').find(),
            elem = $('.elem2');

        // 1) Printing the element's [all multiple levels children] :                
        alert('Second element mutiple levels children' + elem2);
        console.log('Second element mutiple levels children is : ' + elem2);
        elem.text('Second element mutiple levels children is :' + elem2);

        // 2) Changing single css property of [all multiple levels children] :
        elem2.css('fontSize', '20px');

        // 3) Changing multiple css properties of [all multiple levels children] :
        elem2.css({
            fontSize: '30px',
            border: '5px solid red',
            width: '300px',
        });
    });
});
// ------------------------------------------------------

// II] / b) Access to element's multiple levels children {by advanced filter - tagname -} => [all functions]  :
$(document).ready(function () {
    $('#btn22').click(function () {

        // *) Defining element's all direct level children [with using advanced selector : tag name ] :
        var childElem = $('.elem2').find('p'),
            elem = $('.elem2');

        // 1) Printing the element's [all multiple levels children] :                
        alert('Multiple children of the second element [with tag name (p)] : ' + childElem);
        console.log('Multiple children of the second element [with tag name (p)] : ' + childElem);
        elem.text('Multiple children of the second element [with tag name (p)] : ' + childElem);

        // 2) Changing single css property of [Multiple levels all children with class (par)] :
        childElem.css('color', '#080');

        // 3) Changing multiple css properties of [Multiple levels all children (with tagname -p-)] :
        childElem.css({
            fontSize: '30px',
            border: '5px solid blue',
            width: '300px',
        });
    });
});
// ------------------------------------------------------

// II] / c) Access to element's multiple levels children {by advanced filter - class name -} => [all functions]  :
$(document).ready(function () {
    $('#btn23').click(function () {

        // *) Defining element's all multiple level children [with using advanced selector : class name ] :
        var childElem = $('.elem2').find('.par'),
            elem = $('.elem2');

        // 1) Printing the element's [Multiple levels all children] :
        alert('Multiple levels children of the second element [with class : par] : ' + childElem);
        console.log('Multiple levels children of the second element [with class : par] : ' + childElem);
        elem.text('Multiple levels children of the second element [with class : par] : ' + childElem);

        // 2) Changing single css property of [multiple levels of the children] :
        childElem.css('fontSize', '20px');

        // 3) Changing multiple css properties of [multiple levels of the children (with class -par-)] :
        childElem.css({
            fontSize: '30px',
            border: '5px solid red',
            width: '300px',
        });
    });
});

// ------------------------------------------------------
// ------------------------------------------------------

// II] / d) Access to element's multiple levels children => [with advanced filters {:contains, :first, :last} ]  :
$(document).ready(function () {
    $('#btn24').click(function () {
        // 1) Defining element's Multiple levels all children [with using advanced filters: {:contains, :first, :last} ] :
        var childElemFilCont = $('.elem2').find("p:contains('jq')"),
            childElemFilFirst = $('.elem3').find("p:first"),
            childElemFilLast = $('.elem4').find("p:last"),
            elem2 = $('.elem2'),
            elem3 = $('.elem3'),
            elem4 = $('.elem4');

        // Printing the element's [Multiple levels all children - selected by advanced filter - {contains}] :

        alert('Multiple levels children of the second element [with advnaced filter : contains] : ' + childElemFilCont +
            'Multiple levels children of the second element [with advnaced filter : First] : ' + childElemFilFirst +
            'Multiple levels children of the second element [with advnaced filter : Last] : ' + childElemFilLast);

        console.log('Multiple levels children of the second element [with advnaced filter : contains] : ' + childElemFilCont +
            'Multiple levels children of the second element [with advnaced filter : First] : ' + childElemFilFirst +
            'Multiple levels children of the second element [with advnaced filter : Last] : ' + childElemFilLast);

        elem2.text('Multiple levels children of the second element [with advanced filter : contains] : ' + childElemFilCont);

        elem3.text('Multiple levels children of the third element [with advanced filter : First] : ' + childElemFilFirst);

        elem4.text('Multiple levels children of the fourth element [with advanced filter : Last] : ' + childElemFilLast);

        // Changing single css property of [Multiple levels all children - selected by advanced filter - {contains} , {first} , {last}] :
        childElemFilCont.css('fontSize', '20px');
        childElemFilFirst.css('fontSize', '30px');
        childElemFilLast.css('fontSize', '35px');

        // Changing multiple css properties of [Multiple levels all children - selected by advanced filter - {contains} , {first} , {last}] :
        childElemFilCont.css({
            fontSize: '30px',
            border: '5px solid red',
            width: '300px',
        });
        childElemFilFirst.css({
            fontSize: '40px',
            border: '7px solid blue',
            width: '400px',
        });
        childElemFilLast.css({
            fontSize: '50px',
            border: '8px solid #111',
            width: '500px',
        });
    });
});

// ------------------------------------------------------
// ------------------------------------------------------

// II] / e) Access to ALL element's multiple levels children {by advanced filter - * - }  => [all functions]   :
$(document).ready(function () {
    $('#btn25').click(function () {
        // *) Defining element's all multiple levels children [with using advanced selector : * ] :
        var childElem = $('.elem2').find('*'),
            elem = $('.elem2');

        // 1) Printing the element's [with using advanced selector : * ]  :
        alert('Multiple levels children of the second element [with advanced filter : *] : ' + childElem);
        console.log('Multiple levels children of the second element [with advanced filter : *] : ' + childElem);
        elem.text('Multiple levels children of the second element [with class : par] : ' + childElem);

        // 2) Changing single css property of [with using advanced selector : * ]  :
        childElem.css('fontSize', '20px');

        // 3) Changing multiple css properties of [with using advanced selector : * ]   :
        childElem.css({
            fontSize: '30px',
            border: '5px solid red',
            width: '300px',
        });
    });
});

// ------------------------------------------------------
// ------------------------------------------------------
// III]  Testing section: 
$(document).ready(function () {
    $('#btn31').click(function () {
        // *) Defining element's all multiple levels children  :
        var mainElem = $('.mainCont .subCont .elem1');

        alert('welcome to [basic children] select and apply || ' + 'The following the element1 will be selected by the children [without using any selector] and apply css property');

        // 2) Changing single css property of the direct children [without using advanced selector : * ]  :
        mainElem.children().css('fontSize', '60px');


        // 3) Changing multiple css properties of [with using advanced selector : * ]   :
        // childElem.css({
        //     fontSize: '30px',
        //     border: '5px solid red',
        //     width: '300px',
        // });
    });

    $('#btn32').click(function () {
        // *) Defining element's all multiple levels children  :
        var mainElem1 = $('.mainCont .subCont .elem1'),
            mainElem2 = $('.mainCont .subCont .elem2');

        alert('welcome to [advanced children method {advanced selectors}] select and apply || ' + 'The following the element1 will be selected by the children using selector {class name} and apply css property' +
            'element2 will be selected by the children using selector { tag name } and apply css property');

        // 1) Select all children [with using advanced class : .jjj ] => Changing single css property   :
        mainElem1.children('.jjj').css('color', 'green');

        // 2) Select all children [with using advanced tag name : p ] => Changing single css property:
        mainElem2.children('p').css('border', '6px solid gray');

    });

    $('#btn33').click(function () {
        // *) Defining element's all multiple levels children  :
        var mainElem1 = $('.mainCont .subCont .elem1'),
            mainElem2 = $('.mainCont .subCont .elem2'),
            mainElem3 = $('.mainCont .subCont .elem3');

        alert('welcome to [advanced Find method {advanced filters}] select and apply || ' + 'The following the element1 will be selected by the children using advanced filter {contains} and apply css property' +
            'element2 will be selected by the children using advanced filter {first} and apply css property' +
            'element3 will be selected by the children using advanced filter {last} and apply css property');

        // // 1) Find all children [with using advanced class : .jjj ] => Changing single css property   :
        // mainElem1.find('.jjj').css('color', 'green');

        // // 2) Find all children [with using advanced tag name : p ] => Changing single css property:
        // mainElem2.find('p').css('border', '6px solid gray');

        // 1) Find all children[with using advanced filter: contains('') ] => Changing single css property:
        mainElem1.find("p:contains('jjj')").css('border', '5px solid black');

        // 2) Find all children[with using advanced filter: first] => Changing single css property:
        mainElem2.find('p:first').css('border', '6px solid red');

        // 3) Find all children[with using advanced filter: last ] => Changing single css property:
        mainElem3.find('p:last').css('border', '7px solid blue');

    });

})

// ------------------------------------------


// ------------------------------------------------------
// --------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------

