$(function () {  
       $(".panel-heading[id*='heading']").on("click",'span',function (e) {
           $(this).parent().parent().siblings().find(".panel-heading[id*='heading'] .collapse.in").removeClass('in');
       });
});