(()=>{
    let link= document.createElement("link");
    link.rel="stylesheet";
    link.href="main/css/mainimg.css";
    $('head').append(link);
    var container=$('#container')[0];
    container.innerHTML=`
            <div id="image_content">
            <ul>
                <li >
                    <img src="main/img/pmmt.jpg" alt="img" class="img-responsive">
                </li>
                <li>
                    <img src="main/img/dixon.jpg" alt="img" class="img-responsive">
                </li>
            </ul>
            <ul>
                <li>
                    <img src="main/img/cgi.jpg" alt="img" class="img-responsive">
                </li>
                <li>
                    <img src="main/img/antoinelestage.jpg" alt="img" class="img-responsive">
                </li>
            </ul>
            <ul>
                <li>
                    <img src="main/img/lerecyclagepasapas.jpg" alt="img" class="img-responsive">
                </li>
                <li>
                    <img src="main/img/soulofthedeadtree.jpg" alt="img" class="img-responsive">
                </li>
            </ul>
            <ul>
                <li>
                    <img src="main/img/artspire.jpg" alt="img" class="img-responsive">
                </li>
                <li>
                    <img src="main/img/depevt.jpg" alt="img" class="img-responsive">
                </li>
            </ul>
            <ul>
                <li>
                    <img src="main/img/witchatt.jpg" alt="img" class="img-responsive">
                </li>
                <li>
                    <img src="main/img/zooecomuseum.jpg" alt="img" class="img-responsive">
                </li>
            </ul>
            </div>
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
        switch (index) {
            case 0:
                link.href=`main/css/${page[0]}.css`;
                   container.innerHTML=`
                    <div id="image_content">
                    <ul>
                        <li >
                            <img src="main/img/pmmt.jpg" alt="img" class="img-responsive">
                        </li>
                        <li>
                            <img src="main/img/dixon.jpg" alt="img" class="img-responsive">
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <img src="main/img/cgi.jpg" alt="img" class="img-responsive">
                        </li>
                        <li>
                            <img src="main/img/antoinelestage.jpg" alt="img" class="img-responsive">
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <img src="main/img/lerecyclagepasapas.jpg" alt="img" class="img-responsive">
                        </li>
                        <li>
                            <img src="main/img/soulofthedeadtree.jpg" alt="img" class="img-responsive">
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <img src="main/img/artspire.jpg" alt="img" class="img-responsive">
                        </li>
                        <li>
                            <img src="main/img/depevt.jpg" alt="img" class="img-responsive">
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <img src="main/img/witchatt.jpg" alt="img" class="img-responsive">
                        </li>
                        <li>
                            <img src="main/img/zooecomuseum.jpg" alt="img" class="img-responsive">
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
                        hah
                    </div>`;
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