///  52 jQuery - Traversing Reference - Is
/* Main lessons functions :
    a] Main Traversing  References {part 3} ->  {is()}  =>   [ 4 ] group :
                                
    1) First function [Using {is() method } ] {6 functions} ->  [testing if a single {element OR it's parent} IS certain type element OR has certain className ] 

    2) Second function [Using {is() method } ] {8 functions} => [testing if a single {element OR it's parent} IS certain type element OR has certain className ] => by using advanced selectors [ :first-child || :last-child || :contains('text value') || child-nth() ]

    3) Third function [Using {is() method } ] {5 functions} ->  [testing if a Multiple elements IS certain type element OR has certain className ] => by using {Basic selectors: tag name || className || id }  

    4) Fourth function [Using {is() method } ] {5 functions} => [testing if a Multiple elements IS certain type element OR has certain className ] => by using advanced selectors [ :first-child || :last-child || :contains('text value') || child-nth() ]
                     
    b] Main used methods within selector used in this lessons functions : 
      (1) Basic selectors  :  [TagName || ClassName || Id ]  
      (2) Advanced JQ Selectors  :  [ :first-child || :last-child || :child-nth() || :contains("") ]
      (3) Single & Multiple apply on elements 
      (4) Nested functions and else  

      
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

$(document).ready(function () {
    'use strict';
    $('#parent11, #parent12, #parent21, #parent22, #parent31, #parent32, #parent41, #parent42').css({
        "border": "5px solid black"
    });
});

// II] Functions variables [2] main Groups functions :

// $(document).ready(function () {
$(function () {
    'use strict';

    // I] Definition of all elements :
    alert('Hello to the JQ [is()] Method ');

    var par1 = $(".codes0 #parent11"),
        par2 = $(".codes0 #parent2"),
        par3 = $(".codes0 #parent3"),
        par4 = $(".codes0 #parent4"),
        res11 = $(".codes0 #res11"),
        res12 = $(".codes0 #res12"),
        res21 = $(".codes0 #res21"),
        res22 = $(".codes0 #res22"),
        res31 = $(".codes0 #res31"),
        res32 = $(".codes0 #res32"),
        res41 = $(".codes0 #res41"),
        res42 = $(".codes0 #res42"),
        btn11 = $(".codes0 #g11"),
        btn12 = $(".codes0 #g12"),
        btn13 = $(".codes0 #g13"),
        btn14 = $(".codes0 #g14"),
        btn15 = $(".codes0 #g15"),
        btn16 = $(".codes0 #g16"),
        btn21 = $(".codes0 #g21"),
        btn22 = $(".codes0 #g22"),
        btn23 = $(".codes0 #g23"),
        btn24 = $(".codes0 #g24"),
        btn25 = $(".codes0 #g25"),
        btn26 = $(".codes0 #g26"),
        btn27 = $(".codes0 #g27"),
        btn28 = $(".codes0 #g28"),
        btn31 = $(".codes0 #g31"),
        btn32 = $(".codes0 #g32"),
        btn33 = $(".codes0 #g33"),
        btn34 = $(".codes0 #g34"),
        btn35 = $(".codes0 #g35"),
        btn36 = $(".codes0 #g36"),
        btn41 = $(".codes0 #g41"),
        btn42 = $(".codes0 #g42"),
        btn43 = $(".codes0 #g43"),
        btn44 = $(".codes0 #g44"),
        btn45 = $(".codes0 #g45"),
        btn46 = $(".codes0 #g46"),
        btn47 = $(".codes0 #g47"),
        btn48 = $(".codes0 #g48");
    // ------------------------------------------------------------------------------
    // II] Main functions Groups :


    // B] Buttons events : 
    // First Section : 
    // GROUP [A]: 
    btn11.click(function () { });
    btn12.click(function () { });
    btn13.click(function () { });
    // GROUP [B]: 
    btn14.click(function () { });
    btn15.click(function () { });
    btn16.click(function () { });
    // ---------------------

    // Second Section :
    // GROUP [A]: 
    btn21.click(function () { });
    btn22.click(function () { });
    btn23.click(function () { });
    btn24.click(function () { });
    // GROUP [B]: 
    btn25.click(function () { });
    btn26.click(function () { });
    btn27.click(function () { });
    btn28.click(function () { });

    // ---------------------
    // Third Section :
    // GROUP [A]: 
    btn31.click(function () { });
    // btn32.click(function () { });
    // btn33.click(function () { });
    // GROUP [B]: 
    btn34.click(function () { });
    // btn35.click(function () { });
    // btn36.click(function () { });
    // ---------------------

    // Fourth Section :
    // GROUP [A]: 
    btn41.click(function () { });
    // btn42.click(function () { });
    // btn43.click(function () { });
    // btn44.click(function () { });
    // GROUP [B]: 
    btn45.click(function () { });
    // btn46.click(function () { });
    // btn47.click(function () { });
    // btn48.click(function () { });
    // -------------------------------------------------------------
    // -------------------------------------------------------------

    // A] Items events :

    // 1) First function [Using {is() method } with [[Basic Creteria]] {TagName , ClassName , id }] {6 functions} ->  [testing if a single {element OR it's parent} IS certain type element OR has certain className ]

    // Group [A] : [Single Selector] -> [Basic Certeria] -> [Testing the main Element it self]
    $('.codes0 #parent11 *').click(function () {
        alert('Welcome to {[Single element] -> [Basic Certeria] -> [Testing the main element it self] } ');
        var cont = "";

        // first test : Testing the Tag name [span] : 
        if ($(this).is('span')) {
            alert('Welcome to {Element basic [TagName] testing single by single creteria } ');

            alert('Yes this element is [span]');
            cont = "Yes this element tagtype is [span]";

            console.log('Yes this element tagtype is [span]');
            $(this).css("color", "red");

            this.text(cont);

            res11.text(cont);

        } else {
            // second test : Testing the Class name [".test"] : 
            if ($(this).is('.test')) {
                alert('Welcome to {Element basic [ClassName] testing single by single creteria } ');

                alert('Yes this element has className [".test"]');
                cont = 'Yes this element has className [".test"]';

                console.log(cont);
                $(this).css("color", "blue");

                this.text(cont);

                res11.text(cont);

            } else {
                // first test : Testing the Id name ["#test"] : 
                if ($(this).is('#test')) {

                    alert('Welcome to {Element basic [Id] testing single by single creteria } ');

                    alert('Yes this element has Id ["#test"]');
                    cont = 'Yes this element has Id ["#test"]';

                    console.log(cont);
                    $(this).css("color", "green");

                    $(this).text(cont);

                    res11.text(cont);

                } else {
                    alert('No this element has NOT Id ["#test"]');
                    cont = 'No this element has NOT Id ["#test"]';
                    console.log(cont);
                    $(this).text(cont);
                    res11.text(cont);
                }

                alert('No this element has NOT ClassName [".test"]');
                cont = 'No this element has NOT ClassName [".test"]';
                console.log(cont);
                this.text(cont);
                res11.text(cont);
            }

            alert('No this element is NOT [span]');
            cont = 'No this element Tagtype is NOT [span]';
            console.log(cont);
            this.text(cont);
            res11.text(cont);
        }
    });
    // ------------------------------------------------

    // Group [B] : [Single Selector] -> [Basic Certeria] -> [Testing the Element's Parent]
    $('.codes0 #parent12 *').click(function () {
        alert('Welcome to { [Single element] -> [Basic Certeria] -> [Testing the Element\'s Parent]}');

        // First test : Testing the Tag name [span] : 
        if ($(this).parent().is('ul')) {

            alert('Welcome to {Element\'s Parent basic [TagName: ul] testing single by single creteria } ');

            alert('Yes this element\'s Parent is [ul]');
            console.log('Yes this element\'s Parent tagtype is [ul]');
            $(this).css("color", "red");
            this.text('Yes this element\'s Parent tagtype is [ul]');
            res12.text('Yes this element\'s Parent tagtype is [ul]');

        } else {
            // second test : Testing the Class name [".test"] : 
            if ($(this).parent().is('.test')) {
                alert('Welcome to {Element\'s Parent basic [ClassName:".test"] testing single by single creteria } ');

                alert('Yes this element\'s Parent has className [".test"]');
                console.log('Yes this element\'s Parent has className [".test"]');
                $(this).css("color", "blue");
                this.text('Yes this element\'s Parent has className [".test"]');
                res12.text('Yes this element\'s Parent has className [".test"]');

            } else {
                // third test : Testing the Id name ["#test"] : 
                if ($(this).parent().is('#test')) {
                    alert('Welcome to {Element\'s Parent basic [Id:"#test"] testing single by single creteria } ');

                    alert('Yes this element\'s Parent has Id ["#test"]');
                    console.log('Yes this element\'s Parent has Id ["#test"]');
                    res12.text('Yes this element\'s Parent has Id ["#test"]');
                    $(this).text('Yes this element\'s Parent has Id ["#test"]');
                    $(this).css("color", "green");

                } else {
                    alert('No this element\'s Parent has NOT Id ["#test"]');
                    console.log('No this element\'s Parent has NOT Id ["#test"]');
                    $(this).text('No this element\'s Parent has NOT Id ["#test"]');
                    res12.text('No this element\'s Parent has NOT Id ["#test"]');
                }

                alert('No this element\'s Parent has NOT ClassName [".test"]');
                console.log('No this element\'s Parent has NOT ClassName [".test"]');
                this.text('No this element\'s Parent NOT has ClassName [".test"]');
                res12.text('No this element\'s Parent NOT has ClassName [".test"]');
            }

            alert('No this element\'s Parent is tagtype NOT [ul]');
            console.log('No this element\'s Parent tagtype is NOT [ul]');
            res12.text('No this element\'s Parent tagtype is NOT [ul]');
            this.text('No this element\'s Parent tagtype is NOT [ul]');
        }
    });
    // ------------------------------------------------
    // ------------------------------------------------
    // ------------------------------------------------

    // 2) Second function [Using {is() method} with [[Advanced Creteria]] {:first-child || :last-child || :contains('text value') || child-nth()}] {6 functions} ->  [testing if a single {element OR it's parent} IS certain type element OR has certain className ]

    // Group [A] : [Single Selector] -> [Advanced Creteria] -> [:first-child || :last-child || :contains('text value') || child-nth()}] -> [Testing the main Element it self]
    $('.codes0 #parent21 *').click(function () {
        alert('Welcome to {[Single element] -> [Advanced Creteria {:first-child || :last-child || :contains("text value") || child-nth()}]] -> [Testing the main element it self] } ');

        // first test : Testing the first child [:first-child] : 
        if ($(this).is(':first-child')) {
            alert('Welcome to {Element Advanced [first-child] testing single by single creteria } ');

            alert('Yes this element position is [:first-child]');
            console.log('Yes this element position is [:first-child]');
            $(this).css("color", "red");
            this.text('Yes this element position is [:first-child]');
            res21.text('Yes this element position is [:first-child]');

        } else {
            // second test : Testing the Class name [":last-child"] :
            if ($(this).is(':last-child')) {
                alert('Welcome to {Element Advanced creteria [last-child] testing single by single creteria } ');

                alert('Yes this element position is ["last-child]');
                console.log('Yes this element position is [":last-child"]');
                $(this).css("color", "blue");
                this.text('Yes this element position is ["last-child"]');
                res21.text('Yes this element position is [":last - child"]');

            } else {
                // first test : Testing the  [":contains('')"] : 
                if ($(this).is(':contains("sub")')) {

                    alert('Welcome to {Element Advanced [:contains("")] testing single by single creteria } ');

                    alert('Yes this element is containing certain text by ["sub"]');
                    console.log('Yes this element is containing certain text by ["sub"]');
                    $(this).text('Yes this element is containing certain text by ["sub"]');
                    $(this).css("color", "green");
                    res21.text('Yes this element is containing certain text by ["sub"]');

                } else {
                    alert('No this element is NOT containing certain text by ["sub"] ');
                    console.log('No this element is NOT containing certain text by ["sub"]');
                    $(this).text('No this element is NOT containing certain text by ["sub"]');
                    res21.text('No this element is NOT containing certain text by ["sub"]');
                }

                alert('No this element position is Not ["last-child]');
                console.log('No this element position is Not ["last-child]');
                this.text('No this element position is Not ["last-child]');
                res21.text('No this element position is Not ["last-child]');
            }

            alert('No this element position is Not [:first-child]');
            console.log('No this element position is Not [:first-child]');
            this.text('No this element position is Not [:first-child]');
            res21.text('No this element position is Not [:first-child]');
        }
    });
    // ------------------------------------------------

    // Group [B] : [Single Selector] -> [Advanced Creteria] -> {:first-child || :last-child || :contains('text value') || child-nth()}] -> [Testing the Element's Parent]
    $('.codes0 #parent22 *').click(function () {
        alert('Welcome to {[Single element] -> [Advanced Creteria {:first-child || :last-child || :contains("text value") || child-nth()}]] -> [Testing the main element\'parent] }  ');

        // first test : Testing element\'parent the first child [:first-child] :
        if ($(this).parent().is(':first-child')) {
            alert('Welcome to {Element\'parent Advanced [first-child] testing single by single creteria } ');

            alert('Yes this Element\'parent is [:first-child]');
            console.log('Yes this Element\'parent position is [:first-child]');
            $(this).css("color", "red");
            this.text('Yes this Element\'parent position is [:first-child]');
            res22.text('Yes this Element\'parent position is [:first-child]');

        } else {
            // second test : Testing the Class name [":last-child"] :
            if ($(this).parent().is(':last-child')) {
                alert('Welcome to {Element\'parent Advanced creteria [last-child] testing single by single creteria } ');

                alert('Yes this Element\'parent position is ["last-child]');
                console.log('Yes this Element\'parent position is [":last-child"]');
                $(this).css("color", "blue");
                this.text('Yes this Element\'s parent position is ["last-child"]');
                res22.text('Yes this Element\'s parent position is [":last - child"]');

            } else {
                // first test : Testing Element\'s parent contianing [":contains('')"] :
                if ($(this).parent().is(':contains("sub")')) {

                    alert('Welcome to {Element Advanced [:contains("")] testing single by single creteria } ');

                    alert('Yes this element is containing certain text by ["sub"]');
                    console.log('Yes this Element\'s parent is containing certain text by ["sub"]');
                    $(this).text('Yes this Element\'s parent is containing certain text by ["sub"]');
                    $(this).css("color", "green");
                    res22.text('Yes this Element\'s parent is containing certain text by ["sub"]');

                } else {
                    alert('No this Element\'s parent is NOT containing certain text by ["sub"] ');
                    console.log('No this Element\'s parent is NOT containing certain text by ["sub"]');
                    $(this).text('No this Element\'s parent is NOT containing certain text by ["sub"]');
                    res22.text('No this Element\'s parent is NOT containing certain text by ["sub"]');
                }

                alert('No this Element\'s parent position is Not ["last-child]');
                console.log('No this Element\'s parent position is Not ["last-child]');
                this.text('No this Element\'s parent position is Not ["last-child]');
                res22.text('No this Element\'s parent position is Not ["last-child]');
            }

            alert('No this element position is Not [:first-child]');
            console.log('No this element position is Not [:first-child]');
            this.text('No this element position is Not [:first-child]');
            res22.text('No this element position is Not [:first-child]');
        }
    });
    // ------------------------------------------------
    // ------------------------------------------------
    // ------------------------------------------------


    // 3) Third function [Using {is() method } with [[Basic Creteria]] {TagName , ClassName , id }] {6 functions} ->  [testing if a single {element OR it's parent} IS certain Multiple types Tagnames element OR has certain classNames ]

    // Group [A] : [Multiple Selectors] -> [Basic Certeria] -> [Testing the main Element it self]
    $('.codes0 #parent31 *').click(function () {
        alert('Welcome to {[Single Selectors: single selector type] -> [Basic Certeria] -> [Testing the main element it self] } ');
        var cont = "";

        // first test : Testing multiple Tag names [span, div, p, li] : 
        if ($(this).is('span, div, p, li')) {
            alert('Welcome to {Testing Element basic Selectors by multiple creteria (of same type [selector:TagNames]) } ');
            cont = "Yes this element [tagtype] is one of types: [span, div, p, li]";

            alert(cont);
            $(this).css("color", "red");
            console.log(cont);
            this.text(cont);
            res31.text(cont);

        } else {

            // second test : Testing multiple one type of selectors: Class Names [ .test1, .test2, .test3] :
            if ($(this).is('.test1, .test2, .test3')) {

                alert('Welcome to {Testing Element basic Selectors by multiple creteria (of same type [selector:ClassNames]) } ');
                cont = "Yes this element [ClassName] is one of types: [.test1, .test2, .test3] ";

                $(this).css("color", "red");
                console.log(cont);
                this.text(cont);
                res31.text(cont);
            } else {

                if ($(this).is('#test1, #test2, #test3')) {

                    alert('Welcome to {Testing Element basic Selectors by multiple creteria (of same type [selector:Id]) } ');
                    cont = "Yes this element [Id] is one of types: [#test1, #test2, #test3] ";

                    $(this).css("color", "red");
                    console.log(cont);
                    this.text(cont);
                    res31.text(cont);
                } else {

                    cont = 'No this element [ID] is NOT one of types: [#test1, #test2, #test3] ';
                    alert(cont);
                    console.log(cont);
                    this.text(cont);
                    res31.text(cont);

                }

                cont = 'No this element [ClassName] is NOT one of types: [.test1, .test2 , .test3] ';
                alert(cont);
                console.log(cont);
                this.text(cont);
                res31.text(cont);
            }

            cont = 'No this element [TagName] is NOT one of types: [span , div , p , li]';
            alert(cont);
            console.log(cont);
            this.text(cont);
            res31.text(cont);
        }
    });
    // ------------------------------------------------

    // Group [B] : [Multiple Selectors] -> [Basic Certeria] -> [Testing the Element's Parent]

    $('.codes0 #parent32 *').click(function () {
        alert('Welcome to {[Multiple Selectors: One selector type] -> [Basic Certeria] -> [Testing the element\'s Parent] } ');
        var cont = "";

        // first test : Testing Element\'s Parent multiple Tag names [span, div, p, li] :
        if ($(this).parent().is('span, div, p, li')) {
            alert('Welcome to {Testing Element\'s Parent basic Selectors by multiple creteria (of same type [selector:TagNames]) } ');
            cont = "Yes this Element\'s Parent is one of [TagNames type] : [span, div, p, li]";

            alert(cont);
            $(this).css("color", "red");
            console.log(cont);
            this.text(cont);
            res32.text(cont);

        } else {

            // second test : Testing Element\'s Parent multiple one type of selectors: Class Names [ .test1, .test2, .test3] :
            if ($(this).parent().is('.test1, .test2, .test3')) {

                alert('Welcome to {Testing Element\'s Parent basic Selectors by multiple creteria (of same type [selector:ClassNames]) } ');
                cont = "Yes this Element\'s Parent [ClassName] is one of types: [.test1, .test2, .test3] ";

                $(this).css("color", "red");
                console.log(cont);
                this.text(cont);
                res32.text(cont);
            } else {

                if ($(this).parent().is('#test1, #test2, #test3')) {

                    alert('Welcome to {Testing Element\'s Parent basic Selectors by multiple creteria (of same type [selector:Id]) } ');
                    cont = "Yes this Element\'s Parent [Id] is one of types: [#test1, #test2, #test3] ";

                    $(this).css("color", "red");
                    console.log(cont);
                    this.text(cont);
                    res32.text(cont);
                } else {

                    cont = 'No this Element\'s Parent [ID] is NOT one of types: [#test1, #test2, #test3] ';
                    alert(cont);
                    console.log(cont);
                    this.text(cont);
                    res32.text(cont);

                }

                cont = 'No this Element\'s Parent [ClassName] is NOT one of types: [.test1, .test2 , .test3] ';
                alert(cont);
                console.log(cont);
                this.text(cont);
                res32.text(cont);
            }

            cont = 'No this Element\'s Parent [TagName] is NOT one of types: [span , div , p , li]';
            alert(cont);
            console.log(cont);
            this.text(cont);
            res32.text(cont);
        }
    });
    // ------------------------------------------------
    // ------------------------------------------------
    // ------------------------------------------------
    // ------------------------------------------------


    // 4) Fourth function [Using {is() method} with [[Advanced Creteria]] {:first-child || :last-child || :contains('text value') || child-nth()}] {6 functions} ->  [testing element if {element OR it's parent} IS certain multiple selectors => first-child || :last-child || :contains('text value') || child-nth()] : 

    // Group [A] : [Multiple Selectors] -> [ Advanced Certeria] -> [Testing the main Element it self]

    $('.codes0 #parent41 *').click(function () {
        alert('Welcome to {[Multiple Selectors: multiple selector types] -> [Advanced Certeria] -> [Testing the main Element it self} ');
        var cont = "";

        // One test : Testing multiple advanced [ :first-child, :last-child, :contains("") ] :
        if ($(this).is(':first-child, :last-child, :contains("sub")')) {
            alert('Welcome to {Testing Element Advanced Selectors by multiple creteria (of multiple types [selectors :first-child, :last-child, :contains("sub") ]) } ');

            cont = "Yes this element is one of types: [:first-child, :last-child, :contains('sub')]";

            alert(cont);
            $(this).css("color", "red");
            console.log(cont);
            this.text(cont);
            res41.text(cont);

        } else {

            cont = 'No this element [TagName] is NOT one of types: [span , div , p , li]';
            alert(cont);
            console.log(cont);
            this.text(cont);
            res41.text(cont);
        }
    });

    // ------------------------------------------------

    // Group [B] : [Multiple Selectors] -> [Advanced Certeria] -> [Testing the Element's Parent]
    $('.codes0 #parent42 *').click(function () {
        alert('Welcome to {[Single Selectors: single selector type] -> [Advanced Certeria] -> [Testing the main Element\'s Parent} ');
        var cont = "";

        // One test : Testing multiple advanced [ :first-child, :last-child, :contains("") ] :
        if ($(this).is(':first-child, :last-child, :contains("sub")')) {
            alert('Welcome to {Testing Element\'s Parent Advanced Selectors by multiple creteria (of multiple types [selector: first-child, :last-child, :contains("") ]) } ');

            cont = "Yes this element\'s parent is one of types: [:first-child, :last-child, :contains('sub')]";

            alert(cont);
            $(this).css("color", "red");
            console.log(cont);
            this.text(cont);
            res42.text(cont);

        } else {

            cont = 'No this element\'s parent is NOT one of types: [:first-child, :last-child, :contains("sub")]';
            alert(cont);
            console.log(cont);
            this.text(cont);
            res42.text(cont);
        }
    });

    // ------------------------------------------------
    // ------------------------------------------------
    // ------------------------------------------------

    // ------------------------------------------------
    // ------------------------------------------------
    // ------------------------------------------------






});
// ------------------------------------------------
// ------------------------------------------------


// ------------------------------------------------
// ------------------------------------------------------

// Fixed functions:
// Scroll to top/bottom buttons :

$(function () {
    'use strict';

    $('.Home').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000).delay(500);
    })

    $('.End').click(function () {
        $('html,body').animate({
            scrollTop: $('#footer').offset().top
        }, 1000).delay(500);
    })


})

// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------