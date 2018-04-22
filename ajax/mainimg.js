function loadImg(params) {
    ajax({
        type:"get",
        url:"./php/mainimg.php",
        datatype:"json"
    }).then(res=>{
        // console.log(res);
        for(let i=0;i<res.length;i++)
        {
            var imgli= $('img');
            for(let id in imgli)
            {
                if(imgli[id].id==res[i].imgname)
                {
                    imgli[id].src=res[i].imgurl;
                }
            }
        }
    });
} 
window.onload=function (){
    loadImg();
    $('#image_content ul li').on('mouseover','img',function(){
        $(this).siblings('.intro').addClass('toggle');
    });
    $('#image_content li ').on('mouseout','img',function(){
        $(this).siblings('.intro').removeClass('toggle');
    });
};