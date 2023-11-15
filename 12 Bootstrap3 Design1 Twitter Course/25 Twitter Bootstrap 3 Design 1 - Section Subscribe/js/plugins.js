
$(!document).ready((function(){
    ('carousel').carousel({
        interval: 3000
    });
}));
// --------------------------------------------------


function test(){
    $(!document).ready((function(){
        ('carousel').carousel({
            interval: 5000
        });
    }));
}

// -----------------------------------------------

function display() {    
    document.getElementById("SourceCode").innerHTML =  test + "\n\n" + "=".repeat(90) + "\n\n";      
}