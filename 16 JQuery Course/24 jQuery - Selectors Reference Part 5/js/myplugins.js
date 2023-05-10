//  24 jQuery - Selectors Reference Part 5
/* Main lessons functions :
    a) Main Selector References { 7 } GROUPS & { 14 } Functions :
        1) Single Attribute Name selector => {  $("[attrname]")  }
        1) Grouped Attributes Names selector => {  $("[attrname1] , [attrname2]")  }

        2) Element Tagname + Single Attribute Name selector => {  $("elem[attrname]")  }
        2) Element Tagname + Grouped Attribute Name selector => {  $("elem1[attrname1] , elem1[attrname1] ,elem2[attrname1] ")  }

        3) Element Tagname + Single Attribute Name & Value selector [with equal sign {=} ] => {  $("elem[attrname = attrvalue]") }  
        3) Element Tagname + Grouped Attribute Name & Value selector => [with equal sign {=} ] => {  $("elem1[attrname1 = attrvalue] , elem2[attrname = attrvalue] , elem1[attranme2 = attrvalue] ")  }  

        4) Element Tagname + Single Attribute Name & Value selector  [with not equal sign {!=} ] => {  $("elem[attrname != attrvalue]")  }  
        4) Element Tagname + Grouped Attribute Name & Value selector  [with not equal sign {!=} ] => {  $("elem1[attrname1 != attrvalue] , elem2[attrname != attrvalue] , elem1[attranme2 != attrvalue] ")  }  
        
        5) Element Tagname + Single Attribute Name & Value selector  [with any contain sign {*=} ] => {  $("elem[attrname *= attrvalue]")  }  
        5) Element Tagname + Grouped Attribute Name & Value selector  [with any contain sign {*=} ] => {  $("elem1[attrname1 *= attrvalue] , elem2[attrname *= attrvalue] , elem1[attranme2 *= attrvalue] ")  }  
        
        6) Element tagname + Single Attribute Name & Value selector  [with specific contain sign {~=}] => {  $("elem[attrname ~= attrvalue]")  }  
        6) Element tagname + Grouped Attribute Name & Value selector  [with specific contain sign {~=} ] =>  {  $("elem1[attrname1 ~= attrvalue] , elem2[attrname ~= attrvalue] , elem1[attranme2 ~= attrvalue] ")  }  
        
        7) Element tagname + Single Attribute Name & Value selector  [with start contain sign {^=}] => {  $("elem[attrname ^= attrvalue]")  }  
        7) Element tagname + Grouped Attribute Name & Value selector  [with start contain sign {^=} ] => {  $("elem1[attrname1 ^= attrvalue] , elem2[attrname ^= attrvalue] , elem1[attranme2 ^= attrvalue] ")  }  
        
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

// II] Functions buttons [ 7 ] main Groups functions :

// 1] First group [ Single/Grouped Attribute Name selector ] => [2 functions] { $("[attrname]") } :

// a] /1] Using [ $("[attrname]") ] to Single select any element type has a certain attribute Name } :
$(document).ready(function () {
    $('#btn11').click(function () {

        alert('Welcome to Access to Using [ $("[attrname]") ] to select any element type has a certain attribute Name } ');

        // *) Defining element(s) inside the container section has the attriubte name [alt] {regardless of attrriubte value}  :
        var TagNameElem1 = $(".codes0 *[alt]");

        // 1) Changing single css property on [of selected element to apply change of => {border , background , fontsize , color} ] :
        TagNameElem1.css({
            'color': 'white',
            'background': 'black',
            'fontSize': '30px',
            'border': '5px solid red',
        });
    });
});
// ------------------------------------------------------
// ------------------------------------------------------

// a] /2] Using [ $("[attrname1], [attrname2] , [attrname3]") ] multiple to select any elements types has a certain attribute Name } :
$(document).ready(function () {
    $('#btn12').click(function () {

        alert('Welcome to Access to Using [ $("[attrname1], [attrname2] , [attrname3]") ] multiple to select any elements types has a certain attribute Name } ');

        // *) Defining element(s) inside the container section has the attriubte name [alt] & [title] & [lang] {regardless of attrriubtes values}  :
        var TagNameElem1 = $(".codes0 *[alt], [title], [lang]");

        // 1) Changing single css property on [of selected element(s) to apply change of => {border , background , fontsize , color} ] :
        TagNameElem1.css({
            'color': 'white',
            'background': 'black',
            'fontSize': '30px',
            'border': '5px solid red',
        });
    });
});

// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// --------------------------------------------------------
// ------------------------------------------------------


// 2] Second group [ Element Tagname + Single Attribute Name selector ] => [2 functions] { $("elem[attrname]") }   :

// b] /1] Using [ $("elem[attrname]") ] to Single select specific element type has a certain attribute Name } :
$(document).ready(function () {
    $('#btn21').click(function () {

        alert('Welcome to Access to Using [ $("elem[attrname]") ] to Single select specific element type has a certain attribute Name } ');

        // *) Defining element(s) with type [div] inside the container section has the attriubte name [alt] {regardless of attrriubte value}  :
        var TagNameElem1 = $(".codes0 div[lang]");

        // 1) Changing single css property on [of selected element to apply change of => {border , background , fontsize , color} ] :
        TagNameElem1.css({
            'color': 'red',
            'background': 'blue',
            'fontSize': '30px',
            'border': '5px solid red',
        });
    });
});
// ------------------------------------------------------
// ------------------------------------------------------

// b] /2] Using [ $("elem1[attrname1], elem2[attrname2] , elem3[attrname3]") ] Multiple to select specific element type has a certain attribute Name } :
$(document).ready(function () {
    $('#btn22').click(function () {

        alert('Welcome to Access to Using [ $("elem1[attrname1], elem2[attrname2] , elem3[attrname3]") ] Multiple to select specific element type has a certain attribute Name } ');

        // *) Defining element(s) inside the container section of certain Element TagName has the attriubte name div[lang] & img[title] & img[alt] {regardless of attrriubtes values}  :
        var TagNameElem1 = $(".codes0 div[lang], .codes0 img[title], .codes0 img[alt]");

        // 1) Changing single css property on [of selected element(s) to apply change of => {border , background , fontsize , color} ] :
        TagNameElem1.css({
            'color': 'white',
            'background': 'black',
            'fontSize': '30px',
            'border': '5px solid red',
        });
    });
});

// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// --------------------------------------------------------
// ------------------------------------------------------


// 3] Third group [Element Tagname + Single Attribute Name & Attribute Value selector [with equal sign {=} ] => {  $("elem[attrname = attrvalue]")  }     :

// c] /1] Using [ $("elem[attrName = 'attrValue']") ] to Single select specific element type has a {certain attribute Name} & and Equal {certain attribute value} :
$(document).ready(function () {
    $('#btn31').click(function () {

        alert('Welcome to Access to Using [ $("elem[attrname = \'attrValue\']") ] to Single select specific element type has a {certain attribute Name} & and with {certain attribute value}');

        // *) Defining element(s) with type [div] inside the container section has the attriubte name [lang] with attriubte value = 'ar'  : 
        var TagNameElem1 = $(".codes0 div[lang = 'ar']");

        // 1) Changing single css property on [of selected element to apply change of => {border , background , fontsize , color} ] :
        TagNameElem1.css({
            'color': 'blue',
            'background': 'red',
            'fontSize': '30px',
            'border': '5px solid blue',
        });
    });
});
// ------------------------------------------------------
// ------------------------------------------------------

// c] /2] Using [ $("elem1[attrName1 = 'attrValue'] , elem1[attrName2 = 'attrValue'] , elem2[attrName = 'attrValue']") ] to Multiple select specific elements types has a {certain attribute Name} & and Equal {certain attribute value} :
$(document).ready(function () {
    $('#btn32').click(function () {

        alert('Welcome to Access to  Using [ $("elem1[attrName1 = \attrValue\'] , elem1[attrName2 = \'attrValue\'] , elem2[attrName = \'attrValue\']") ] to Multiple select specific elements types has a {certain attribute Name} & and Equal {certain attribute value} ');

        // *) Defining element(s) with type [div] inside the container section has the attriubte name [lang] with attriubte value = 'ar' && [img] has the attriubte name [alt] with attriubte value = 'test1' && [img] has the attriubte name [title] with attriubte value = 'shadi is my name'  :
        var TagNameElem1 = $(".codes0 div[lang = 'ar'] , .codes0 img[alt = 'test1'] , .codes0 img[title = 'shadi is my name'] ");

        // 1) Changing single css property on [of selected element to apply change of => {border , background , fontsize , color} ] :
        TagNameElem1.css({
            'color': 'blue',
            'background': 'red',
            'fontSize': '30px',
            'border': '5px solid blue',
        });
    });
});
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------


// 4] Fourth group [Element Tagname + Single Attribute Name & Attribute Value selector [with Not equal sign {!=} ] => {  $("elem[attrname != attrvalue]") } :

// d] /1] Using [ $("elem[attrName != 'attrValue']") ] to Single select specific element type has a {certain attribute Name} & and NOT Equal {certain attribute value} :
$(document).ready(function () {
    $('#btn41').click(function () {

        alert('Welcome to Access to Using [ $("elem[attrname != \'attrValue\']") ] to Single select specific element type has a {certain attribute Name} & Not Equal {certain attribute value}');

        // *) Defining element(s) with type [div] inside the container section has the attriubte name [lang] Not equal attriubte value = 'ar'  :
        var TagNameElem1 = $(".codes0 div[lang != 'ar']");

        // 1) Changing single css property on [of selected element to apply change of => {border , background , fontsize , color} ] :
        TagNameElem1.css({
            'color': 'green',
            'background': 'yellow',
            'fontSize': '30px',
            'border': '5px solid green',
        });
    });
});
// ------------------------------------------------------
// ------------------------------------------------------

// d] /2] Using [ $("elem1[attrName1 != 'attrValue'] , elem1[attrName2 != 'attrValue'] , elem2[attrName1 != 'attrValue']") ] to multiple select specific elements type has a {certain attribute Names} && and NOT Equal {certain attribute values} :
$(document).ready(function () {
    $('#btn42').click(function () {

        alert('Welcome to Access to  Using [ $("elem1[attrName1 = \'attrValue\'] , elem1[attrName2 = \'attrValue\'] , elem2[attrName = \'attrValue\']") ] to multiple select specific elements type has a {certain attribute Names} & and with {certain attribute values} ');

        // *) Defining element(s) with type [div] inside the container section has the attriubte name [lang] with attriubte value Not = 'ar' && [img] has the attriubte name [alt] with attriubte value Not = 'test1' && [img] has the attriubte name [title] with attriubte value Not = 'shadi is my name' :
        var TagNameElem1 = $(".codes0 div[lang != 'ar'] , .codes0 img[alt != 'test1'] , .codes0 img[title != 'shadi is my name'] ");

        // 1) Changing single css property on [of selected element to apply change of => {border , background , fontsize , color} ] :
        TagNameElem1.css({
            'color': 'green',
            'background': 'yellow',
            'fontSize': '30px',
            'border': '5px solid green',
        });
    });
});
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------

// 5] Fifth group [Element Tagname + Single Attribute Name & Attribute Value selector [with any contain sign {*=} ] => {  $("elem[attrname *= 'attrvalue']")   :

// e] /1] Using [  $("elem[attrname *= 'partial attrvalue']") ] to Single select specific element type has a {certain attribute Name} &  Include/contain {certain attribute value} :
$(document).ready(function () {
    $('#btn51').click(function () {

        alert('Welcome to Access to Using [ $("elem[attrname *= \'partialattrValue\']") ] to Single select specific element type has a {certain attribute Name} &  Include/contain {certain attribute value} ');

        // *) Defining element(s) with type [div] inside the container section has the attriubte name [lang] inculde or contain attriubte value = 'e'  :
        var TagNameElem1 = $(".codes0 div[lang *= 'e']");

        // 1) Changing single css property on [of selected element to apply change of => {border , background , fontsize , color} ] :
        TagNameElem1.css({
            'color': 'gold',
            'background': 'brown',
            'fontSize': '30px',
            'border': '5px solid brown',
        });
    });
});
// ------------------------------------------------------
// ------------------------------------------------------

// e] /2] Using [ $("elem1[attrName1 *= 'attrValue'] , elem1[attrName2 *= 'attrValue'] , elem2[attrName1 *= 'attrValue']") ] to multiple select specific elements type has a {certain attribute Names} & Include/contain  {certain attribute values} :
$(document).ready(function () {
    $('#btn52').click(function () {

        alert('Welcome to Access to  Using [ $("elem1[attrName1 *= \'attrValue\'] , elem1[attrName2 *= \'attrValue\'] , elem2[attrName1 *= \'attrValue\']") ] to multiple select specific elements type has a {certain attribute Names} & Include/contain  {certain attribute values} ');

        // *) Defining element(s) with type [div] inside the container section has the attriubte name [lang] Include/contain attriubte value 'e' && [img] has the attriubte name [alt] Include/contain attriubte value 'test1' && [img] has the attriubte name [title] Include/contain attriubte value = 'shadi is my name' :
        var TagNameElem1 = $(".codes0 div[lang *= 'e'] , .codes0 img[alt *= 'na'] , .codes0 img[title *= 'sha'] ");

        // 1) Changing single css property on [of selected elements to apply change of => {border , background , fontsize , color} ] :
        TagNameElem1.css({
            'color': 'gold',
            'background': 'brown',
            'fontSize': '30px',
            'border': '5px solid brown',
        });
    });
});
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------

// 6] Sixth group [Element Tagname + Single Attribute Name & Attribute Value selector [with specific contain sign {~=} ] => {  $("elem[attrname ~= 'attrvalue']")   :

// f] /1] Using [  $("elem[attrname ~= 'partial attrvalue']") ] to Single select specific element type has a {certain attribute Name} & specific Include/contain {certain attribute value} :
$(document).ready(function () {
    $('#btn61').click(function () {

        alert('Welcome to Access to Using [ $("elem[attrname ~= \'partialattrValue\']") ] to Single select specific element type has a {certain attribute Name} & specific Include/contain {certain attribute value} ');

        // *) Defining element(s) with type [div] inside the container section has the attriubte name [lang] specific include or contain  attriubte value = 'e'  :
        var TagNameElem1 = $(".codes0 div[lang ~= 'e']");

        // 1) Changing single css property on [of selected element to apply change of => {border , background , fontsize , color} ] :
        TagNameElem1.css({
            'color': '#ccc',
            'background': '#efefef',
            'fontSize': '30px',
            'border': '5px solid #efefef',
        });
    });
});
// ------------------------------------------------------
// ------------------------------------------------------

// f] /2] Using [ $("elem1[attrName1 ~= 'attrValue'] , elem1[attrName2 ~= 'attrValue'] , elem2[attrName1 ~= 'attrValue']") ] to multiple select specific elements type has a {certain attribute Names} & specific Include/contain  {certain attribute values} :
$(document).ready(function () {
    $('#btn62').click(function () {

        alert('Welcome to Access to  Using [ $("elem1[attrName1 ~= \'attrValue\'] , elem1[attrName2 ~= \'attrValue\'] , elem2[attrName1 ~= \'attrValue\']") ] to multiple select specific elements type has a {certain attribute Names} & specific Include/contain  {certain attribute values} ');

        // *) Defining element(s) with type [div] inside the container section has the attriubte name [lang] specific Include/contain attriubte value 'e' && [img] has the attriubte name [alt] specific Include/contain attriubte value 'test1' && [img] has the attriubte name [title] specific Include/contain attriubte value = 'shadi is my name' :
        var TagNameElem1 = $(".codes0 div[lang ~= 'e'] , .codes0 img[alt ~= 'te'] , .codes0 img[title ~= 'shadi'] ");

        // 1) Changing single css property on [of selected elements to apply change of => {border , background , fontsize , color} ] :
        TagNameElem1.css({
            'color': '#ccc',
            'background': '#efefef',
            'fontSize': '30px',
            'border': '5px solid #efefef',
        });
    });
});
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------

// 7] Seventh group [Element Tagname + Single Attribute Name & Attribute Value selector [with specific contain sign {^=} ] => {  $("elem[attrname ^= 'Startattrvalue']")   :

// g] /1] Using [  $("elem[attrname ^= 'Startattrvalue']") ] to Single select specific element type has a {certain attribute Name} & Starting Include/contain {certain attribute value} :
$(document).ready(function () {
    $('#btn71').click(function () {

        alert('Welcome to Access to Using [ $("elem[attrname ^= \'Startattrvalue\']") ] to Single select specific START element type has a {certain attribute Name} & Starting Include/contain {certain attribute value} ');

        // *) Defining element(s) with type [div] inside the container section has the attriubte name [lang] Starting include or contain attriubte value = 'e'  :
        var TagNameElem1 = $(".codes0 div[lang ^= 'e']");

        // 1) Changing single css property on [of selected element to apply change of => {border , background , fontsize , color} ] :
        TagNameElem1.css({
            'color': '#ccc',
            'background': '#efefef',
            'fontSize': '30px',
            'border': '5px solid #efefef',
        });
    });
});
// ------------------------------------------------------
// ------------------------------------------------------

// g] /2] Using [ $("elem1[attrName1 ^= 'attrValue'] , elem1[attrName2 ^= 'attrValue'] , elem2[attrName1 ^= 'attrValue']") ] to multiple select specific elements type has a {certain attribute Names} & specific START Include/contain  {certain attribute values} :
$(document).ready(function () {
    $('#btn72').click(function () {

        alert('Welcome to Access to  Using [ $("elem1[attrName1 ^= \'attrValue\'] , elem1[attrName2 ^= \'attrValue\'] , elem2[attrName1 ^= \'attrValue\']") ] to multiple select specific elements type has a {certain attribute Names} & specific START Include/contain  {certain Start attribute values} ');

        // *) Defining element(s) with type [div] inside the container section has the attriubte name [lang] Starting Include/contain attribute value 'a' && [img] has the attriubte name [alt] Starting Include/contain attriubte value 'my' && [img] has the attriubte name [title] Starting Include/contain attriubte value = 'shadi' :
        var TagNameElem1 = $(".codes0 div[lang ^= 'a'] , .codes0 img[alt ^= 'my'] , .codes0 img[title ^= 'shadi'] ");

        // 1) Changing single css property on [of selected elements to apply change of => {border , background , fontsize , color} ] :
        TagNameElem1.css({
            'color': '#ccc',
            'background': '#efefef',
            'fontSize': '30px',
            'border': '5px solid #efefef',
        });
    });
});
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
