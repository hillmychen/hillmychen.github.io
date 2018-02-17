$(function(){
    $(window).scroll(()=>{
            if ($(window).scrollTop() >= ($(document).height() - $(window).height() - 50)) {
                $("footer").css("visibility","visible").slideDown(500);
            } else{
                $("footer").slideUp(500);
            }
    });
});