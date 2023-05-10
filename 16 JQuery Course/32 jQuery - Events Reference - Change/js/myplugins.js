//  32 jQuery - Events Reference - Change
/* Main lessons functions :
    a) Main Events References {part 7} -> {()} =>  [ 4 ] Groups &  [ 7 ] functions :
                                
        1) First Group : [ Using {change();} in advanced live data preveiew ] {1 function} ->  [by using on() & default method] 
        2) Second Group : [ Using {change();} with select and options elements] {1 function} ->  [by using on() & default method] 
        
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

// II] Functions buttons [ 2 ] main Groups functions :

$(document).ready(function () {
    'use strict';
    // I] Definition of all elements :  
    alert('Hello to the JQ change event ');


    var TagNameElem11 = $(".codes0 .g11 "),
        TagNameElem12 = $(".codes0 .g12 "),
        TagNameElem21 = $(".codes0 .g21 "),
        TagNameElem22 = $(".codes0 .g22 "),
        TagNameElem31 = $(".codes0 .g31 "),
        TagNameElem32 = $(".codes0 .g32 "),
        disp = $(".codes0 #inputn"),
        advTitle = $('.codes0 .g41t'),
        advCont = $('.codes0 .g41c'),
        advTitle2 = $('.codes0 .g42t'),
        advCont2 = $('.codes0 .g42c'),
        advDisp = $('.codes0 .g41');


    // Adding the value of the Advertisment title to the Title preview  :
    // advTitle.keyup(function () {
    //     $('.g41 h3').text($(this).val());
    // });


    // First function : 

    advTitle.change(function () {
        $('.g41 h3').text($(this).val());
    });

    advCont.change(function () {
        $('.g41 p').text($(this).val());
    });



    // Second function :

    advTitle2.change(function () {
        $('.g42 h3').text($(this).val());
    });

    advCont2.change(function () {
        $('.g42 p').text($(this).val());
    });


    // Adding the value of the Advertisment contents to the Contents preview  :
    // advCont.keyup(function () {
    //     $('.g41 p').text($(this).val());
    // });





    // var inputTitle = $('.codes0 .g1t'),
    //     disTitle = $s(".codes0 #tit"),
    //     inputCon = $('.codes0 .g1c'),
    //     disCont = $('.codes0 .g1 p'),
    //     selectOptTitle = $('.codes0 .selectTitle'),
    //     selectOptCon = $('.codes0 .selectCon');

    // II] Main functions Groups :
    // 1] First Group : [ Adding {change();} ] {1 function} ->  [by using on() & default method] :

    // Adding the value of the Advertisment title to the Title preview  :
    // $('.codes0 #selectTitle').on("change", function () {
    //     $('.codes0 #g1t').text($(this).val());
    // });

    // $('.codes0 .g1t').on("keyup", function () {
    //     alert('input title has been changed');
    //     $('.codes0 #tit').text($(this).val());
    // });

    // $('.codes0 .g1t').change(function () {
    //     alert('input title has been changed');
    //     $('.codes0 #tit').text($(this).val());
    // });

    // Adding the value of the Advertisment contents to the Contents preview  :
    // inputCon.on("change", function () {
    //     disCont.text($(this).val());
    // });

    // ------------------------------------------------------
    // ------------------------------------------------------

    // 2] Second Group : [ Adding {change();} to a certain element]  {2 functions}  :

    // Adding the value of the Advertisment title from select option to the Title preview  :
    // selectOptTitle.on("change", function () {
    //     disTitle.text($(this).val());
    // });

    // Adding the value of the Advertisment contents select option to the Contents preview  :
    // selectOptCon.on("change", function () {
    //     disCont.text($(this).val());
    // });

    // ------------------------------------------------------
    // ------------------------------------------------------

});
