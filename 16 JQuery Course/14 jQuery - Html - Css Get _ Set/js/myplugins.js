//  14 jQuery - Html - Css Get _ Set
/* Main lessons functions :
    a) Main usage of the CSS function  : 
        1) elem.css("CssPropName");  
        2) elem.css("CssPropName", "CssPropValue");
        3) elem.css({"CssPropName1":"CssPropValue1" , "CssPropName2":"CssPropValue2" , "CssPropName3":"CssPropValue3" });  </li>

    b) Method of Get and set : 
        1) Set a certain element's css property with anothner element's val()  
        2) Get a certain element's css property as another element's val() 
        3) Set a new element with Css properties & append it with in the web page  
*/
// ========================================================

// I] Orcedion Plus buttons effect [3] groups :
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

// II] Functions buttons [3] main group functions :
// 1] [Simple Set] : {elem.css()} Functions -> functional buttons [ 4 ] [Creating new ((single , multiple)) element(s) & Set it by ((single,multiple)) CSS property(s) & Append the element in the webpage] ] :

// [Simple Set] {elem.css()} First function => [Simple Set : one element with one css property] :  : 
$(document).ready(function () {
    $('#btn11').click(function () {
        // 1) Defining new element [div] :
        var elem = '<p>This is new p => Created, single CSS properpty [color]- by simple value- , Appended by JQ </p>';

        // 2) Appending{append} the new element [p] :
        $('.shadi4').append(elem);

        // 3) Set single CSS properpty [color] -by simple value- into the created new element [div] :
        $('.shadi4 > p').css("color", "#f00");
    });
});
// ------------------------------------------------------

// 1] [Simple Set] {elem.css()} : Second function => [Simple Set : single element with multiple css properties] : 
$(document).ready(function () {
    $('#btn12').click(function () {
        // 1) Defining new element [div] :
        var elem = '<span>This is new span => Created, multiple CSS properpties [background, fontSize, border] -by simple values- , Appended by JQ </span>';

        // 2) Appending the new element [div] :
        $('.shadi4').append('</br>', elem);

        // 3) Set multiple CSS properpties [background, fontSize, border] -by simple values- into the created new element [span] :
        $('.shadi4 > span').css({
            "background": "#00f",
            "fontSize": "26px",
            "border": "3px solid #efefef",
            "borderRadius": "20px",
        });

    });
});
// ------------------------------------------------------

// 1] [Simple Set] {elem.css()} : Third function => [Simple Set : multiple elements {div , span , p} with one single css property {color} ] : 
$(document).ready(function () {
    $('#btn13').click(function () {
        // 1) Defining new element [div] :
        var span = '<span>This is new span => Created, multiple CSS properpties [background, fontSize, border] -by simple values- , Appended by JQ </span>',
            div = '<div>This is new div => Created, multiple CSS properpties [background, fontSize, border] -by simple values- , Appended by JQ </div>',
            p = '<p>This is new p => Created, multiple CSS properpties [background, fontSize, border] -by simple values- , Appended by JQ </p>';

        // 2) Appending [after] the new element [div,span,p] :
        $('.shadi4').after('</br>', span);
        $('.shadi4').after('</br>', div);
        $('.shadi4').after('</br>', p);

        // 3) Set ibe single CSS properpty [color] -by simple values- into all created new elements [span , div , p] {using advanced selector >} :
        $('.codes > span:last').css("color", "red");
        $('.codes > div:last').css("color", "red");
        $('.codes > p:last').css("color", "red");
    });
});
// ------------------------------------------------------

// 1] [Simple Set] {elem.css()} : Fourth function => [Simple Set : multiple elements {div , span , p} with single css properties {color|| fontSize || backround} ] : 
$(document).ready(function () {
    $('#btn14').click(function () {
        // 1) Defining new elements [div,span,p] :
        var span = '<span>This is new span => Created, multiple CSS properpties [background, fontSize, border] -by simple values- , Appended by JQ </span>',
            div = '<div>This is new div => Created, multiple CSS properpties [background, fontSize, border] -by simple values- , Appended by JQ </div>',
            p = '<p>This is new p => Created, multiple CSS properpties [background, fontSize, border] -by simple values- , Appended by JQ </p>';

        // 2) Appending [after] the new element [div,span,p] :
        $('.shadi4').after(span, '</br>');
        $('.shadi4').after(div, '</br>');
        $('.shadi4').after(p, '</br>');

        // 3) Set multiple CSS properpties [background, fontSize, border , border Radius] -by simple values- into the created new elements [span , div , p] {using selector & advanced filter : last} :
        $('.codes > span:last').css({
            "color": "blue",
            "background": "#efefef",
            "fontSize": "30px",
            "border": "5px solid red",
            "borderRadius": "20px",
        });
        $('.codes > div:last').css({
            "color": "blue",
            "background": "#efefef",
            "fontSize": "30px",
            "border": "5px solid red",
            "borderRadius": "20px",
        });
        $('.codes > p:last').css({
            "color": "blue",
            "background": "#efefef",
            "fontSize": "30px",
            "border": "5px solid red",
            "borderRadius": "20px",
        });
    });
});
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------

// 2] [Advanced Set] : functional buttons [ 4 ] [Set an element ((single , multiple)) element(s)'s ((single,multiple)) CSS property(s) by the value of another element's value(input field) || text(span) ] ]:

// 2] [Advanced Set] => First function [Set one single element single CSS property by a single input value] : 
$(document).ready(function () {
    $('#btn21').click(function () {
        // 1) Defining elements [div, input] :
        var elem = $('.shadi'),
            input = $('.input0');

        // 2) Set one single CSS properpty [color] -by element variable value- :
        elem.css("color", input.val());

        // // 3) Appending the new element [div] :
        // $('ol.codes').append(elem);

    });
});
// ------------------------------------------------------

// 2] [Advanced Set] => Second function [Set one single element multiple CSS properties by the several of inputs values] : 
$(document).ready(function () {
    $('#btn22').click(function () {
        // 1) Defining elements [div, 4 inputs] :
        var elem = $('.shadi'),
            input1 = $('.input1'),
            input2 = $('.input2'),
            input3 = $('.input3'),
            input4 = $('.input4');

        // 2) Set one single CSS properpty [color , background , fontSize , border] -by element variable value- :
        elem.css("color", input1.val());
        elem.css("background", input2.val())
        elem.css("fontSize", input3.val());
        elem.css("border", input4.val());

        // // 3) Appending the new element [div] :
        // $('ol.codes').append(elem);

    });
});
// ------------------------------------------------------

// 2] [Advanced Set] => Third function [Set multiple elements single CSS property for each one by the several of inputs values] : 
$(document).ready(function () {
    $('#btn23').click(function () {
        // 1) Defining elements [4 div, 4 inputs] :
        var elem1 = $('.shadi1'),
            elem2 = $('.shadi2'),
            elem3 = $('.shadi3'),
            elem4 = $('.shadi4'),
            input1 = $('.input1'),
            input2 = $('.input2'),
            input3 = $('.input3'),
            input4 = $('.input4');

        // 2) Set one single CSS property [color , background , fontSize , border] one property for each element -by element variable input value- :
        elem1.css("color", input1.val());
        elem2.css("background", input2.val())
        elem3.css("fontSize", input3.val());
        elem4.css("border", input4.val());

        // // 3) Appending the new element [div] :
        // $('ol.codes').append(elem);

    });
});
// ------------------------------------------------------

// 2] [Advanced Set] => Fourth function [Set multiple elements with multiple CSS properties for all properties for all elements of all inputs values] : 
$(document).ready(function () {
    $('#btn24').click(function () {
        // 1) Defining elements [4 div, 4 inputs] :
        var elem1 = $('.shadi1'),
            elem2 = $('.shadi2'),
            elem3 = $('.shadi3'),
            elem4 = $('.shadi4'),
            input1 = $('.input1'),
            input2 = $('.input2'),
            input3 = $('.input3'),
            input4 = $('.input4');

        // 2) Set multiple CSS properties [color , background , fontSize , border] for all properties for all elements -by element variable input value- :
        elem1.css({
            "color": input1.val(),
            "background": input2.val(),
            "fontSize": input3.val(),
            "border": input4.val(),
        });
        elem2.css({
            "color": input1.val(),
            "background": input2.val(),
            "fontSize": input3.val(),
            "border": input4.val(),
        });
        elem3.css({
            "color": input1.val(),
            "background": input2.val(),
            "fontSize": input3.val(),
            "border": input4.val(),
        });
        elem4.css({
            "color": input1.val(),
            "background": input2.val(),
            "fontSize": input3.val(),
            "border": input4.val(),
        });

        // // 3) Appending the new element [div] :
        // $('ol.codes').append(elem);

    });
});
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------

// 3] [Advanced Get] : functional buttons [ 4 ] [Get an element ((single , multiple)) element(s)'s ((single,multiple)) CSS property(s) from several another elements -> as an input field value ] :

// 3] [Advanced Get] => First function [Get one single CSS property from a single element => and set it with in a single input value ] : 
$(document).ready(function () {
    $('#btn31').click(function () {

        // 1) Defining elements [div, input] :
        var elem = $('.shadi'),
            input = $('.input');

        // 2) Get one single CSS property [color] from an element and set it in the input value :
        input.val(elem.css("color"));

        // // 3) Appending the new element [div] :
        // $('ol.codes').append(elem);

    });
});
// ------------------------------------------------------

// 3] [Advanced Get] => Second function [Get multiple CSS property from a multiple element => and set it with in a single input value] : 
$(document).ready(function () {
    $('#btn32').click(function () {
        // 1) Defining elements [div, 4 inputs] :
        var elem = $('.shadi'),
            input = $('.input0');

        // 2) Get one single CSS properties [color , background , fontsize , border] from same element and set it in one input value :
        input.val(elem.css("color"), '</br>', elem.css("background"), '</br>', elem.css("fontSize"), '</br>', elem.css("border"));

    });
});
// ------------------------------------------------------

// 3] [Advanced Get] => Third function [Get multiple CSS property from a multiple element => and set it with in a single input value] : 
$(document).ready(function () {
    $('#btn33').click(function () {
        // 1) Defining elements [div, 4 inputs] :
        var elem1 = $('.shadi1'),
            elem2 = $('.shadi2'),
            elem3 = $('.shadi3'),
            elem4 = $('.shadi4'),
            input = $('.input11');

        // 2) Get one single CSS property [color , background , fontsize , border] from several elements and set it in one input value :
        input.css({
            'width': '100%',
            'height': '200%',
            'fontSize': '15px',
        });
        input.val('Element 1 color: ' + elem1.css("color") + '|| Element 2 background: ' + elem2.css("background") + ' || Element 3 fontsize: ' + elem3.css("fontSize") + ' || Element 3 border: ' + elem4.css("border"));

    });
});
// ------------------------------------------------------

// 3] [Advanced Get] => Fourth function [Get multiple CSS property from a multiple element => and set it with in a single input value] : 
$(document).ready(function () {
    $('#btn34').click(function () {
        // 1) Defining elements [div, 4 inputs] :
        var elem1 = $('.shadi1'),
            elem2 = $('.shadi2'),
            elem3 = $('.shadi3'),
            elem4 = $('.shadi4'),
            input1 = $('.input1'),
            input2 = $('.input2'),
            input3 = $('.input3'),
            input4 = $('.input4');

        // 2) Get one single CSS property [color , background , fontsize , border] for each one input value :
        input1.val(elem1.css("color"));
        input2.val(elem2.css("background"));
        input3.val(elem3.css("fontSize"));
        input4.val(elem4.css("border"));

    });
});
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------

// 4] {Practical Section} [Advanced Example] => All Set & Get functions [Get multiple CSS property from a multiple element => and set it with in a single input value] : 
$(document).ready(function () {

    // a) Set left Statics buttons :
    // 1) Set First Element Width button {change width only }:
    $('#firstbtn').click(function () {
        $('#elem1').css("width", "300px");
        alert('first Element\'s width changed to [300px]');
    });


    // 2) Set Second Element multiple css proerpties:[fontcolor , fontSize , border ,width] button {change multiple propereties} :
    $('#secondbtn').click(function () {
        $('#elem2').css({
            "width": "400px",
            "fontSize": "30px",
            "border": "5px solid orange",
            "color": "blue",
        });
        alert('Second Element\'s multiple Css properties changed as following \n  [fontcolor : [red] \n  [fontsize: [30px] \n [width : [300px] \n  [border : [5px solid orange]');
    });

    // 3) Set Third Element Width button {Change one single css property for all elements} :
    $('#thirdbtn').click(function () {
        $('#elem1').css("width", "500px");
        $('#elem2').css("width", "500px");
        $('#elem3').css("width", "500px");
        alert('All elements\'s width changed to [500px]');
    });

    // 4) Set Fourth all Element all css properties button {Change all css property for all elements} : 
    $('#fourthbtn').click(function () {
        $('#elem1').css({
            "width": "600px",
            "fontSize": "30px",
            "border": "5px solid orange",
            "color": "blue",
        });
        $('#elem2').css({
            "width": "600px",
            "fontSize": "30px",
            "border": "5px solid orange",
            "color": "blue",
        });
        $('#elem3').css({
            "width": "600px",
            "fontSize": "30px",
            "border": "5px solid orange",
            "color": "blue",
        });
        $('#elem4').css({
            "width": "600px",
            "fontSize": "30px",
            "border": "5px solid orange",
            "color": "blue",
        });
        alert('all elements has changed all css proerites');
    });
    // --------------------------------------------
    // --------------------------------------------

    // b) Set dynamic buttons :
    var input1 = $('#input1'),
        input2 = $('#input2'),
        input3 = $('#input3'),
        input0 = $('#input0'),
        input00 = $('#input00');

    // Set the First element's [width] by this input value  : 
    $('#setfirstWidth').click(function () {
        $('#elem1').css("width", input1.val());
        alert('dynamic changing the width of the first ELEMENT')
    });

    // Set the First element's [color] by this input value  :
    $('#setfirstColor').click(function () {
        $('#elem1').css("color", input2.val());
    });

    // Set the First element's [fontsize] by this input value  :
    $('#setfirstSize').click(function () {
        $('#elem1').css("fontSize", input3.val());
    });


    // Set the first element by all pervious properites :
    $('#setfirstAll').click(function () {
        $('#elem1').css({
            "width": input1.val(),
            "color": input2.val(),
            "fontSize": input3.val(),
        });

    });

    // Set the all elements [width] by this input property :
    $('#setAllWidth').click(function () {
        $('#elem1').css("width", input0.val());
        $('#elem2').css("width", input0.val());
        $('#elem3').css("width", input0.val());
    });

    // Set the all elements [All Css Properties] by this input property :
    $('#setAllAll').click(function () {
        $('#elem1').css({
            "width": input1.val(),
            "color": input2.val(),
            "fontSize": input3.val(),
        });
        $('#elem2').css({
            "width": input1.val(),
            "color": input2.val(),
            "fontSize": input3.val(),
        });
        $('#elem3').css({
            "width": input1.val(),
            "color": input2.val(),
            "fontSize": input3.val(),
        });

    });

});



// ------------------------------------------------------
// ------------------------------------------------------
