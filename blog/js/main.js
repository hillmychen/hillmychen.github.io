$('#more').on('click',(function(params) {
    $('#more').hide();
    $('#less').css("display","inline-block");
    $('.full').css("display","inline-block");
}));
$('#less').on('click',(function(params) {
    $('#more').show();
    $('#less').hide();
    $('.full').css("display","none");
}));
$(window).resize(function (params) {
    if($(window).width()<=767){
        $('.nav-link br').remove();
        $('.nav-link').css("line-height","3");
    }else{
        if (($('.nav-link i').next()[0]==null)||($('.nav-link i').next()[0].nodeType!="1")) {
            var $br=$("<br>")[0];
            $('.nav-link i').after($br);
        }
    }
});
if($(window).width()<=767){
        $('.nav-link br').remove();
        $('.nav-link').css("line-height","3");
    }