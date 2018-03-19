(()=>{
    var link=document.createElement("link");
   link.rel="stylesheet";
   link.href="main/css/header.css";
   $('head').append(link);
   var header=$('#header')[0];
   header.innerHTML=`
            <div id="github" class="hidden-xs">
        <a href="https://github.com/hillmychen" target="_about">github.com</a>
        </div>
        <section id="h_container" >
        <div id="code_stock">
            <span id="coder">code</span>
            <span id="stocker">stock</span>
        </div>
        <img id="logo" src="main/img/logo.png " class="img-responsive">
        </section>
        <nav id="nav-banner" class="navbar navbar-default">
        <div class="container-fluid">
        <ul class="navbar-header">
            <a href="javascript:void(0);" class="navbar-toggle" >
                <li  id="mynav_toggle">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </li >
            </a>
        </ul>
        <ul class="navbar-collapse collapse" id="mynav" >
        <div class="row" >
            <li class="col-xs-6 col-sm-3 ">	
            <a href="javascript:void(0);" >
                <span class="number">01
                    <b>/</b>
                </span>
                <span>
                    首页
                </span>
                </a>
            </li>
            <li class="col-xs-6 col-sm-3">
            <a href="javascript:void(0)">
                <span class="number">02
                    <b>/</b>
                </span>
                <span>
                    博客
                </span>
            </a>
            </li>
            <li class="col-xs-6 col-sm-3">
            <a href="javascript:void(0);"  >
                <span class="number">03
                    <b>/</b>
                </span>
                <span>
                    生活
                </span>
                </a>
                </li>
            <li class="col-xs-6 col-sm-3">
            <a href="javascript:void(0);" >
                <span class="number">04
                    <b>/</b>
                </span>
                <span>
                    关于
                </span>
            </a>
            </li>
            </div>
        </ul>
        </div>
        </nav>
   `;
})();
