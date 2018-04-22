(()=>{
   axios.get('../php/blog.php')
  .then(function (response) {
    let _map=new Map();      
    for (let key in response.data)
    {
        _map.set(key,response.data[key]);
    };
    let main_html ="" ;
    for (const value of _map.values()) {
        main_html+=
        `
            <article class="bl_article" id="${value.articleId}">
                <h1><a href="#${value.articleId}" class="article-header">${value.title}</a></h1>
                <div class="article-info">
                    <span id="pub_date">发表于：${value.publishDate}</span>
                    <span>
                        &nbsp;|&nbsp;
                        分类于:<a href="#" id="category">${value.category}</a></span>
                </div> 
                <p class="summary" id="_summary">${value.summary}</p>
                <div class="full">
                    ${value.fullpage}
                </div>
                <div class="full-article"> 
                    <a class="btn more moreart" >阅读全文&nbsp;>></a>
                    <a class="btn more less" ><<&nbsp;返回</a>
                </div>
            </article>
        `;
    }
    $('.main').html(main_html);
  })
  .catch(function (error) {
    document.write(404);
  });
})();
$(function (params) {

    $('.moreart').on('click',(function(params) {
        $(this).hide();
        $(this).siblings('.less').css("display","inline-block");
        $(this).parent().siblings('.full').css("display","inline-block");
    }));
    $('.less').on('click',(function(params) {
        $(this).siblings('.moreart').show();
        $(this).hide();
        $(this).parent().siblings('.full').css("display","none");
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
    //监听绑定输入
    let bind_name='input keyup';
	if(navigator.userAgent.indexOf("MSIE")!=-1) {
		bind_name='propertychange';
	}

	$('#search_bar').on('input keyup', function() {
        let _inputVal=$(this).val().trim();
        if(_inputVal.length>0){

            axios.get('../php/search.php',
            {
                params:{
                    _searchVal:_inputVal
                }
            })
            .then(
                res=>{ 
                    if(res.data.length>0){
                        $('#none').css('visibility','hidden');
                        $('#success').css('visibility','visible');
                        $('#success').empty();
                        let searchHtml="";
                        let _map=new Map();  
                        for (let key in res.data)
                        {
                            _map.set(key,res.data[key]);
                        };
                        for (let val of _map.values())
                        {
                            let reg=new RegExp(`${_inputVal}`,'gi');
                            val.title=val.title.replace(reg,`<span style="color:#26A0DA;">${_inputVal}</span>`);
                            let _textAll=val.summary+val.fullpage;
                            _textAll=_textAll.substr(_textAll.indexOf(`${_inputVal}`),255);
                            _textAll=_textAll.replace(reg,`<span style="color:#26A0DA;">${_inputVal}</span>`);
                            searchHtml+=
                                `
                                    <div class="search_result">
                                        <h4 ><a href="#${val.articleId}" class="article-header">${val.title}</a></h4>
                                        <p class="summary">${_textAll}...</p>
                                    </div>
                                `;
                        }

                        $('#success').append(searchHtml);
                        $('.search_result').on('click','.article-header',()=>{
                            $('#modal').css({
                                    'visibility':'hidden'
                            });
                            $('#success').css({
                                    'visibility':'hidden'
                            })
                            $('.search_result').css({
                                    'visibility':'hidden'
                            })
                        })
                    }
                })
            .catch(
                err=>{
                    console.log(err);
                })
        }else{
            $('#success').css('visibility','hidden');            
            $('#none').css('visibility','visible');

        }
	});

    //modal
    $('#mynav ul').on('click','li',function (params) {
        let _index=$(this).index();
        switch (_index) {
            case 1:
                $('#modal-product').css({
                    'visibility':'visible'
                })
                break;
            case 5:
                $('#modal').css({
                    'visibility':'visible'
                })
                break;

            default:
                break;
        }
    })

    $('#modal .cancel').click(function (params) {
        $('#modal').css('visibility','hidden');
        $('#none').css('visibility','hidden');
         $('#success').css({
                'visibility':'hidden'
        })
    })
})

