$(document).ready(function () {
    $("#select_all").click(function () { 
        $("tr").addClass("selected");
    });
    
    $("#cancel_all").click(function () { 
        $("tr").removeClass("selected");
    });
    
    $("#rev_choice").click(function () { 
        $("tr").toggleCLass("selected");
    });
    
    $("tr").click(function() {
        $(this).toggleClass("selected");
    })
});