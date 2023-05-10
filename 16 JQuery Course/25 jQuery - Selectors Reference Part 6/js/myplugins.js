//  25 jQuery - Selectors Reference Part 6
/* Main lessons functions :
    a) Main Selector References { 6 } GROUPS & { 12 } Functions :
        1) First Group : [Main input TagName Attribute selector ] => {$(":input")}

        2) Second Group : [ Certain input with cetain {type} attribute selector ] => {$(":text")} || {$(":password")} || {$(":checkbox")} || {$(":file")} || {$(":resert")}
 
        3) Third Group : [ Certain Input with special Attriubute {enabled , disabled}] 

        4) Fourth Group : [ Certian Option element with certain attribute ]  
                
        5) Fifth Group : [ Mixed Nested Input inside another container element ]  
         
    b) Main used methods within selector used in this lessons functions  : 
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

// II] Functions buttons [ 5 ] main Groups functions :

// 1] First group [ Main input Tagname selector ] => [1 functions] { $(":input") } :

// a] /1] Using [ $(":input") ] to select any input element (regardless of it's type) } :
$(document).ready(function () {
    $('#btn11').click(function () {

        alert('Welcome to Access to Using [ $(":input") ]  select any input element (regardless of it\'s type) }');

        // *) Defining element(input) inside the container section :
        var TagNameElem1 = $(":input");

        // 1) Changing single css property on [of selected input element to apply change of => {border} ] :
        TagNameElem1.css({
            'border': '5px solid red',
            'borderRadius': '30px',
            'width': '500px',
        }).focus();
        // 'color': 'white',
        // 'background': 'black',
        // 'fontSize': '30px',
    });
});
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// --------------------------------------------------------
// ------------------------------------------------------

// 2] Second Group : [ Certain input with certain {type} attribute selector ]   {1 function} :

// b] /1] Using [ $(":TypeAttrValue") ] to select specific Input element with certain [Type Attribute]} :
$(document).ready(function () {
    $('#btn21').click(function () {

        alert('Welcome to Access to Using [ $(":TypeAttrValue") ] to select specific Input element with certain [Type attribute] ');

        // *) Defining input element with certain [type] attribute value  :
        var TagNameElem1 = $(":text"),
            TagNameElem2 = $(":password"),
            TagNameElem3 = $(":checkbox"),
            TagNameElem4 = $(":radio"),
            TagNameElem5 = $(":reset"),
            TagNameElem6 = $(":submit"),
            TagNameElem6 = $(":image"),
            TagNameElem7 = $(":file");

        // 1) Changing single css property on [of selected input element to apply change of => { Different Background } ] :
        TagNameElem1.css({
            'background': 'blue'
        }).focus();
        TagNameElem2.css({
            'background': 'red'
        }).focus();
        TagNameElem3.css({
            'background': 'green'
        }).focus();
        TagNameElem4.css({
            'background': 'yellow'
        }).focus();
        TagNameElem5.css({
            'background': 'brown'
        }).focus();
        TagNameElem6.css({
            'background': 'purple'
        }).focus();
        TagNameElem7.css({
            'background': '#CCC'
        }).focus();
    });
});
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// --------------------------------------------------------
// ------------------------------------------------------


// 3] Third Group : [ Certain Input with special Attriubute {enabled , disabled , checked}] (3 functions) :

// c] /1] Using [ $("enabled") ] to select specific input element with {enabled} attribute :
$(document).ready(function () {
    $('#btn31').click(function () {

        alert('Welcome to Access to Using [ $("enabled") ] to select specific input element with enabled attribute');

        // *) Defining element(s) with attribute [enabled] : 
        var TagNameElem1 = $(":enabled");

        // 1) Changing single css property on [of selected input element has Enabled attribute to apply change of => {font color} ] :
        TagNameElem1.css({
            'color': 'blue',
            // 'background': 'red',
            // 'fontSize': '30px',
            // 'border': '5px solid blue',
        }).focus();
    });
});
// ------------------------------------------------------
// ------------------------------------------------------

// c] /2] Using [ $("disabled") ] to select specific input element with {disabled} attribute :
$(document).ready(function () {
    $('#btn32').click(function () {

        alert('Welcome to Access to  Using [ $("disabled") ] to select specific input element with {disabled} attribute ');

        // *) Defining element(s) with attribute [disabled]  :
        var TagNameElem1 = $(":disabled");

        // 1) Changing single css property on [of selected element to apply change of => {font color} ] :
        TagNameElem1.css({
            'color': 'red',
            'width': '500px',
            'height': '200px',
            'border': '5px solid red',
        }).focus();
    });
});
// ------------------------------------------------------
// ------------------------------------------------------

// c] /3] Using [ $(":checked") ] to select specific input element of [checkbox] type with {checked} attribute : 
$(document).ready(function () {
    $('#btn33').click(function () {

        alert('Welcome to Access to Using [ $(":checked") ] to select specific input element of [checkbox] type with {checked} attribute ');

        // *) Defining element(s) with attribute [checked]  :
        var TagNameElem1 = $(":checked");

        // 1) Changing single css property on [of selected element to apply change of => {font color} ] :
        TagNameElem1.css({
            'color': 'orange',
            'width': '500px',
            'height': '200px',
            'border': '5px solid blue',
        }).focus();
    });
});
// ------------------------------------------------------
// ------------------------------------------------------
// -------------------------------------------------------
// ------------------------------------------------------


// 4] Fourth Group : [ Certain Option element with certain attribute ]  (1 function) :

// d] /1] Using [ $(":selected") ] to select any {Option} element inside the {select} element has a certain attriubute {selected}:
$(document).ready(function () {
    $('#btn41').click(function () {

        alert('Welcome to Access to  Using [ $(":selected") ] to select any {Option} element inside the {select} element has a certain attriubute {selected} ');

        // *) Defining element(s) with type [{option} thant has attribute : selected] inside the {select}  :
        var TagNameElem1 = $(":selected");

        alert('Selected element option value is = ' + TagNameElem1.val());
        console.log('Selected element option value is = ' + TagNameElem1.val());

        TagNameElem1.focus();
        // 1) Changing single css property on [of selected element to apply change of => {border , fontsize , color} ] :
        // TagNameElem1.css({
        //     'color': 'green',
        //     'fontSize': '30px',
        //     'border': '5px solid green',
        // });
    });
});
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------

// 5] Fifth Group : [ Mixed Nested main Input inside another container element ] (4 functions) :

// e] /1] Using [  $("elem:input") ] to select any input element type inside a certain contianer  :
$(document).ready(function () {
    $('#btn51').click(function () {

        alert('Welcome to Access to Using [ $("elem:input") ] to select any input element type inside another container  ');

        // *) Defining element(s) input element inside another container element :
        var TagNameElem1 = $(".container :input");

        // 1) Changing single css property on [of selected element to apply change of => {border , background , fontsize , color} ] :
        TagNameElem1.css({
            'color': 'gold',
            'background': 'brown',
            'fontSize': '30px',
            'border': '5px solid brown',
        }).focus();
    });
});
// ------------------------------------------------------
// ------------------------------------------------------

// e] /2] Using { $("elem:inputSelectorType") } [Select a Certain nested certain input (inside another container) of certain attribute {type} selector ] :
$(document).ready(function () {
    $('#btn52').click(function () {

        alert('Welcome to Access to  Using  { $("elem:inputSelectorType") } [Select a Certain nested certain input (inside anther container) of certain attribute {type} selector ] :');

        // *) Defining element(s) with certain input element with certain type attribute (inside another container) :
        var TagNameElem1 = $(".container :text"),
            TagNameElem2 = $(".container :password"),
            TagNameElem3 = $(".container :checkbox"),
            TagNameElem4 = $(".container :radio"),
            TagNameElem5 = $(".container :file"),
            TagNameElem6 = $(".container :submit"),
            TagNameElem7 = $(".container :reset");

        // 1) Changing single css property on [of selected input nested elements to apply change of => {border , background , fontsize , color} ] :
        TagNameElem1.css({
            'color': 'red',
            'background': 'blue',
            'border': '5px solid red',
        });
        TagNameElem2.css({
            'color': 'blue',
            'background': 'red',
            'border': '5px solid blue',
        });
        TagNameElem3.css({
            'color': 'yellow',
            'background': '#fff',
            'border': '5px solid yellow',
        });
        TagNameElem4.css({
            'color': 'green',
            'background': 'blue',
            'border': '5px solid green',
        });
        TagNameElem5.css({
            'color': 'gold',
            'background': 'brown',
            'border': '5px solid gold',
        });
        TagNameElem6.css({
            'color': '#efefef',
            'background': '#CCC',
            'border': '5px solid #efefef',
        });
        TagNameElem7.css({
            'color': 'orange',
            'background': 'red',
            'border': '5px solid orange',
        });
        TagNameElem1.focus();
        TagNameElem2.focus();
        TagNameElem3.focus();
        TagNameElem4.focus();
        TagNameElem5.focus();
        TagNameElem6.focus();
        TagNameElem7.focus();
    });
});
// ------------------------------------------------------
// ------------------------------------------------------

// e] /3] Using { $("elem:inputSpecialAttr") } [Select a Certain nested certain input (inside another container) of certain attribute {enabled , disabled , checked } selector ] :
$(document).ready(function () {
    $('#btn53').click(function () {

        alert('Welcome to Access to  Using  { $("elem:inputSpecialAttr") } [Select a Certain nested certain input (inside another container) of certain attribute {enabled , disabled  , checked} selector ] :');

        // *) Defining element(s) with certain input element (inside a nother container) with certain special attribute (enabled, disabled , checked)  :
        var TagNameElem1 = $(".container :enabled"),
            TagNameElem2 = $(".container :disabled"),
            TagNameElem3 = $(".container :checked");


        // 1) Changing single css property on [of selected inputs nested elements to apply change of => {border , background , fontsize , color} ] :
        TagNameElem1.css({
            'color': '#efefef',
            'background': '#EEE',
            'fontSize': '30px',
            'border': '5px solid #efefef',
        });

        TagNameElem2.css({
            'color': '#fff',
            'background': '#222',
            'fontSize': '30px',
            'border': '5px solid blue',
        });
        TagNameElem3.css({
            'color': '#CCC',
            'background': '#DDD',
            'width': '500px',
            'heigth': '300px',
        });

        TagNameElem1.focus();
        TagNameElem2.focus();
        TagNameElem3.focus();
    });
});
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------

// e] /4] Using { $("elem:optionSelectedAttr") } [Select a Certain nested certain option (inside another container) of certain attribute {selected } selector ] :
$(document).ready(function () {
    $('#btn54').click(function () {

        alert('Welcome to Access to Using { $("elem:optionSelectedAttr") } [Select a Certain nested option element (inside another container) of certain attribute {selected} selector ] :');

        // *) Defining element(s) with certain {Option} element (inside another container) with certain special attribute (selected)  :
        var TagNameElem1 = $(".container :selected");

        alert('This is the value of the selected option: ' + TagNameElem1.val());
        console.log('This is the value of the selected option: ' + TagNameElem1.val());

        // 1) Changing single css property on [of selected Option nested elements to apply change of => {border , background , fontsize , color} ] :
        TagNameElem1.css({
            'color': '#efefef',
            'background': 'blue',
            'fontSize': '30px',
            'border': '5px solid gold',

        });

        TagNameElem1.focus();
    });
});
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------

