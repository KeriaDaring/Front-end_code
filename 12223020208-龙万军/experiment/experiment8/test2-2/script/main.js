$(document).ready(function () {
    $('.option').click(function () { 
        $(this).toggleClass("selected");
    });
     

    $("#button_1").click(function () { 
        let element = $('#one>.selected');

        element.detach();

        element.toggleClass("selected");

        let element_other = $('#two>.selected');

        element_other.toggleClass("selected");
        element.appendTo('#two');
        
    });
    $("#button_2").click(function () { 
        let element = $('#two>.selected');

        element.detach();
        element.toggleClass("selected");

        let element_other = $('#one>.selected');
        element_other.toggleClass("selected");

        element.appendTo('#one');
        
    });
    $("#button_3").click(function () { 
        let element = $('.option');
        element.detach();

        element.appendTo("#two");
        
    });
    $("#button_4").click(function () { 
        let element = $('.option');
        element.detach();

        element.appendTo("#one");
        
    });

    
});