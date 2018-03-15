(()=>{
    let link= document.createElement("link");
    link.rel="stylesheet";
    link.href="main/css/mainimg.css";
    $('head').append(link);
    var container=$('#container')[0];
    container.innerHTML=`
            <div id="image_content" >
                <ul>
                    <li >
                        <img src="main/img/pmmt.jpg" alt="img" class="img-responsive full">
                        <span class=" intro">
                            <h2>PMMT</h2>
                            <p>Web Design</p>
                        </span>
                    </li>
                    <li>
                        <img src="main/img/dixon.jpg" alt="img" class="img-responsive full">
                        <span class=" intro">
                            <h2>Batteries&nbsp;Dixon</h2>
                            <p>art direction, web design</p>
                        </span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <img src="main/img/cgi.jpg" alt="img" class="img-responsive full">
                        <span class=" intro">
                            <h2>CGI</h2>
                            <p>art direction, web design</p>
                        </span>
                    </li>
                    <li>
                        <img src="main/img/antoinelestage.jpg" alt="img" class="img-responsive full">
                        <span class=" intro">
                            <h2>Antoine&nbsp;L'Estage</h2>
                            <p>art direction, t-shirt design</p>
                        </span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <img src="main/img/lerecyclagepasapas.jpg" alt="img" class="img-responsive full">
                        <span class=" intro">
                            <h2>Le recyclage &nbsp;pas à pas</h2>
                            <p>art direction, illustration, print, writing</p>
                        </span>
                    </li>
                    <li>
                        <img src="main/img/soulofthedeadtree.jpg" alt="img" class="img-responsive full">
                        <span class=" intro">
                            <h2>Soul of the Dead Tree</h2>
                            <p>illustration</p>
                        </span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <img src="main/img/artspire.jpg" alt="img" class="img-responsive full">
                        <span class=" intro">
                            <h2>Art-Spire</h2>
                            <p>art direction, web design</p>
                        </span>
                    </li>
                    <li>
                        <img src="main/img/depevt.jpg" alt="img" class="img-responsive full">
                        <span class=" intro">
                            <h2>Département Evénements</h2>
                            <p>art direction, logotype, print</p>
                        </span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <img src="main/img/witchatt.jpg" alt="img" class="img-responsive full">
                        <span class=" intro">
                            <h2>Witchatt</h2>
                            <p>art direction, logotype</p>
                        </span>
                    </li>
                    <li>
                        <img src="main/img/zooecomuseum.jpg" alt="img" class="img-responsive full">
                        <span class=" intro">
                            <h2>Zoo Eco Museum</h2>
                            <p>art direction, print</p>
                        </span>
                    </li>
                </ul>
            </div>
            <script>
            $(function(){
                $('#image_content ul li').on('mouseover','img',function(){
                    console.log(1);
                    $(this).siblings('.intro').addClass('toggle').show(1000);
                });
                $('#image_content li ').on('mouseout','img',function(){
                    $(this).siblings('.intro').removeClass('toggle').hide(1000);
                });
            });
        </script>
    `;
})();
$('#mynav ').on("click","li",function(e) {
       let index= $(this).index();
        console.log(index);
        goto(index);
        $('#mynav').fadeOut();
        if ($(window).width()>=768) {
            $(window)[0].scrollTo(0,400);
        }
    });
$("[class='navbar-toggle']").click(function () {
            $('#mynav').fadeIn();
    });
function goto(index) {
        let page=["mainimg","","life","about"];
        let link= document.createElement("link");
        link.rel="stylesheet";
        let container= document.getElementById('container');
        let script=document.createElement("script");
        // script.type="text/javascript";
        switch (index) {
            case 0:
                link.href=`main/css/${page[0]}.css`;
                   container.innerHTML=`
                    <div id="image_content" >
                        <ul>
                            <li >
                                <img src="main/img/pmmt.jpg" alt="img" class="img-responsive full">
                                <span class=" intro">
                                    <h2>PMMT</h2>
                                    <p>Web Design</p>
                                </span>
                            </li>
                            <li>
                                <img src="main/img/dixon.jpg" alt="img" class="img-responsive full">
                                <span class=" intro">
                                    <h2>Batteries&nbsp;Dixon</h2>
                                    <p>art direction, web design</p>
                                </span>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <img src="main/img/cgi.jpg" alt="img" class="img-responsive full">
                                <span class=" intro">
                                    <h2>CGI</h2>
                                    <p>art direction, web design</p>
                                </span>
                            </li>
                            <li>
                                <img src="main/img/antoinelestage.jpg" alt="img" class="img-responsive full">
                                <span class=" intro">
                                    <h2>Antoine&nbsp;L'Estage</h2>
                                    <p>art direction, t-shirt design</p>
                                </span>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <img src="main/img/lerecyclagepasapas.jpg" alt="img" class="img-responsive full">
                                <span class=" intro">
                                    <h2>Le recyclage &nbsp;pas à pas</h2>
                                    <p>art direction, illustration, print, writing</p>
                                </span>
                            </li>
                            <li>
                                <img src="main/img/soulofthedeadtree.jpg" alt="img" class="img-responsive full">
                                <span class=" intro">
                                    <h2>Soul of the Dead Tree</h2>
                                    <p>illustration</p>
                                </span>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <img src="main/img/artspire.jpg" alt="img" class="img-responsive full">
                                <span class=" intro">
                                    <h2>Art-Spire</h2>
                                    <p>art direction, web design</p>
                                </span>
                            </li>
                            <li>
                                <img src="main/img/depevt.jpg" alt="img" class="img-responsive full">
                                <span class=" intro">
                                    <h2>Département Evénements</h2>
                                    <p>art direction, logotype, print</p>
                                </span>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <img src="main/img/witchatt.jpg" alt="img" class="img-responsive full">
                                <span class=" intro">
                                    <h2>Witchatt</h2>
                                    <p>art direction, logotype</p>
                                </span>
                            </li>
                            <li>
                                <img src="main/img/zooecomuseum.jpg" alt="img" class="img-responsive full">
                                <span class=" intro">
                                    <h2>Zoo Eco Museum</h2>
                                    <p>art direction, print</p>
                                </span>
                            </li>
                        </ul>
                    </div>
                    
            `;
                break;
            case 1:
                window.location.href="./blog/index.html";
                break;
            case 2:
            link.href=`${page[2]}/${page[2]}.css`;
            
            container.innerHTML=`
                <div class="container">
                    <article class="panel" >
                        <header class="article-header panel-heading">
                            <h3 class="article-h">为什么有的产品会让人上瘾</h3>
                            <span class="article-info">2018/3/10&nbsp;|&nbsp;<a href="javascript:void(0);">读书笔记</a>:<a href="javascript:void(0);">产品</a></span>
                        </header>
                        <section class="article-content panel-body panel-group"  id="accordion">
                            <p class="panel-heading">首先说一下上瘾模型(the Hook Model):触发--行动--多变的酬赏--投入</p>
                            <div class="panel panel-default">
                                <div class="panel-heading" id="headingOne">
                                    <span class="vice-header panel-title" data-target="#article-collapseOne" data-parent="#accordion" data-toggle="collapse" role="button">1.触发</span>
                                    <div class="panel-collapse collapse in" id="article-collapseOne">
                                            <p class="panel-body">&nbsp;&nbsp;触发就是指促使你做出某种举动的诱因--就像是发动机里的火花塞。触发分外部触发和内部触发。让你的生产习惯依赖的那些产品往往是外部触发最先发挥作用，例如电子邮件、网站链接，或是手机上的应用程序图标。</p>
                                    </div>
                                </div>
                            </div>
                            <div class="panel panel-default">
                                <div class="panel-heading" id="headingTwo">
                                    <span class="vice-header panel-title" data-target="#article-collapseTwo" data-parent="#accordion" data-toggle="collapse" role="button">2.行动</span>
                                    <div class="panel-collapse collapse " id="article-collapseTwo">
                                            <p class="panel-body">&nbsp;&nbsp;触发之后是行动，意思是在对某种回报心怀期待的情况下做出的行动。为了提高人们的某种行为的发生频率，产品设计者充分利用了人类行为的两个基本动因：一是该行为简单易行，而是行为主题有这个主观意愿。</p>
                                    </div>
                                </div>
                            </div>
                            <div class="panel panel-default">
                                <div class="panel-heading" id="headingThree">
                                    <span class="vice-header panel-title" data-target="#article-collapseThree" data-parent="#accordion" data-toggle="collapse" role="button">3.多变的酬赏</span>
                                    <div class="panel-collapse collapse " id="article-collapseThree">
                                            <p class="panel-body">&nbsp;&nbsp;上瘾模型与普通反馈回路之间的区别在与，它可以激发人们对某个事物的强烈渴望。科学研究表明，人们在期待奖励时，大脑中多巴胺的分泌量会急剧上升。奖励的变数越大，大脑分泌的这一神经介质就越丰富，人们因此会进入一种专注状态，大脑中负责理性与判断力的部分被抑制，而负责需要与欲望的部分被激活。老虎机与彩票就是最典型的例子。给产品安装多变的酬赏，是公司用来吸引用户的一个决胜法宝。</p>
                                    </div>
                                </div>
                            </div>
                            <div class="panel panel-default">
                                <div class="panel-heading" id="headingFour">
                                    <span class="vice-header panel-title" data-target="#article-collapseFour" data-parent="#accordion" data-toggle="collapse" role="button">4.投入</span>
                                    <div class="panel-collapse collapse " id="article-collapseFour">
                                            <p class="panel-body">&nbsp;&nbsp;这是上瘾模型的最后一个阶段，也是需要用户有所投入的一个阶段。这个阶段有助于提高用户以后再次进入上瘾循环的概率。当用户为某个产品提供他们的个人数据和社会资本，付出他们的时间、精力和金钱时，投入即已发生。</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="panel-footer" id="note">
                                    <span class="vice-header ">**牢记并分享**</span>
                                    <p>&nbsp;&nbsp;<kbd>习惯是我们下意识做的举动。</kbd></p>
                                    <p>&nbsp;&nbsp;<kbd>集网络连接、海量数据、超快网速三者于一身的技术正使这个世界上瘾成性。</kbd></p>
                                    <p>&nbsp;&nbsp;<kbd>生产习惯养成类产品可以让商家稳占竞争优势。</kbd></p>
                                    <p>&nbsp;&nbsp;<kbd>上瘾模型将用户面临的问题与企业提供的应对策略衔接在一起，二者频繁互动，促成用户养成习惯。</kbd></p>
                                    <a href="javascript:void(0);" class="from"> 
                                        <em >文章选自&lt;&lt;Hooked--<i>How to Build Habit-forming Products&gt;&gt;--Nir Eyal</i></em>
                                    </a>
                            </div>
                        </section>
                    </article> 
                </div>
                `;
                break;
            default:
            link.href=`${page[3]}/${page[3]}.css`;
            container.innerHTML=`
                <div class="container-fluid" id="about">
                <div class="row about-contain">
                    <div class="col-md-6 col-xs-12 spell">
                        <span class="a">A</span>
                        <span class="b">B</span>
                        <span class="o">O</span>
                        <span class="u">U</span>
                        <span class="t">T</span>
                    </div>
                    <div class="col-md-6 col-xs-12 self-info">
                        <div class="quote">
                            <span>Let life be beautiful like summer flowers and death like autumn leaves
                            </span>
                            <span>&ndash;&ndash;Rabindranath Tagore &laquo;Stray Birds&raquo;</span>
                        </div>
                    </div>
                </div>
                    <form action="#" class="contact container-fluid">
                        <div class="row " id="resume_content">
                            <div class="col-xs-6 send-info " id="user_info">
                                <label for="" class="user-base " >YOUR NAME</label>
                                    <input type="text"  class="user-input" placeholder="你的名字" name="username">
                                <label for="" class="user-base " > YOUR EMAIL</label>
                                    <input type="email" class="user-input" placeholder="邮箱" name="email">
                                <label for=""  class="user-base ">SUBJECT</label>
                                    <input type="text" class="user-input" placeholder="主题" name="subject">
                                <label for="" class="user-base " >TEST CODE&nbsp;<i>验证码</i></label>
                                    <input type="text"  class="user-input" placeholder="请输入验证码" name="test_code">
                            </div>
                            <div class="col-xs-6  send-info" id="message">
                                <label for="#" class="user-base">YOUR MESSAGE</label>
                                    <textarea name="your-message" id="your-message" cols="20" rows="8" ></textarea>
                            </div>
                        </div>
                        <div class="row" id="submit">
                            <a class="col-xs-12" id="send" href="javascript:void(0);" class="btn">send&nbsp;message</a>
                            <p>xx</p>
                        </div>
                        <div class="row" id="sign-api">
                            <a href="javascript:void(0);" class="col-xs-3 social-logo" ></a>
                            <a href="javascript:void(0);" class="col-xs-3 social-logo" ></a>
                            <a href="javascript:void(0);" class="col-xs-3 social-logo" ></a>
                            <a href="javascript:void(0);" class="col-xs-3 social-logo" ></a>
                        </div>
                    </form>
            </div>
                `;
                break;
        }
    // let linknum=$('link');
    // for (let index = 0; index < linknum.length; index++) {
        // let lstring=linknum[index].href;
        // console.log(lstring.indexof(".css"));
        // if ((lstring.indexof(".css"))==-1) {
        //     $('head').append(link);
        // }
        
    //     break;
    // }
    // console.log($(`link[href*='${page[index]}.css']`));
    if($(`link[href*='${page[index]}.css']`).length==0){
        $('head').append(link);
    }
}
//图片效果
$('#image_content ul ').on('mouseover','li',function(){
    $(this).children('.intro').addClass('toggle').show(1000);
});
$('#image_content  ').on('mouseout','li',function(){
    $(this).children('.intro').removeClass('toggle').hide(1000);
});