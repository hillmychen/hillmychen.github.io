$(function(){
    $(window).scroll(()=>{
            if ($(window).scrollTop() >= ($(document).height() - $(window).height() - 50)) {
                $("footer").css("visibility","visible").slideDown(500);
            } else{
                $("footer").slideUp(500);
            }
    });
    $('#logo').hover(function(){
        $(this).attr('src','main/img/logoPink.png');
    },function(){
        $(this).attr('src','main/img/logo.png');
    });
});