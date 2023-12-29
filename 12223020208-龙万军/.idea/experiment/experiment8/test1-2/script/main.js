$(function(){
    $("#menu>span").click(function(){
        $("#menu>div").hide();

        $("#div_" + this.id).show();
    })
})