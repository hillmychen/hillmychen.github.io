$(function(){
$(window).scroll(()=>{
            // console.log($(window).scrollTop());
            if ($(window).scrollTop() >= ($(document).height() - $(window).height() - 50)) {
                $("footer").css("visibility","visible").slideDown(500);
            } else{
                $("footer").slideUp(500);
                
            }
            if ($(window).scrollTop()>=400) {
                $('#logo').hide();
            }else{
                $('#logo').show();
            }
            toggleTop();
    });
function toggleTop(params) {
    if ($(window).scrollTop()>=160) {
        if ($(window).width()>=768) {
            $('#nav-banner')[0].style.top="15%";
        }
        else{
            $('#nav-banner')[0].style.top=0;
        }
    }else{
        if ($(window).width()>=768) {
            $('#nav-banner')[0].style.top="75%";
        }
        else{
            $('#nav-banner')[0].style.top=0;
        }
    }
}
$(window).resize(function (params) {
        if ($(window).width()>=768) {
            $(window).scroll(()=>{
                toggleTop();
            });
        if ($(window).scrollTop()>=160) {
            $('#nav-banner')[0].style.top="15%";
        }else{
            $('#nav-banner')[0].style.top="75%";
        }            
    }
    else{
        $('#nav-banner')[0].style.top=0;
    }
});
$('#logo').hover(function(){
    $(this).attr('src','main/img/logoPink.png');
},function(){
    $(this).attr('src','main/img/logo.png');
});
$(function(){
        $('#image_content ul li').on('mouseover','img',function(){
            $(this).siblings('.intro').addClass('toggle');
        });
        $('#image_content li ').on('mouseout','img',function(){
            $(this).siblings('.intro').removeClass('toggle');
        });
    });
});