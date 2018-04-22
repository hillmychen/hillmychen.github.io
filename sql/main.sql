SET NAMES UTF8;
DROP DATABASE IF EXISTS blog;
CREATE DATABASE blog CHARSET=UTF8;
USE blog;
CREATE TABLE IF NOT EXISTS mainimg(
    imgid INT,
    imgname VARCHAR(50),
    imgurl VARCHAR(100)
);
INSERT INTO mainimg VALUES('0','t-logo','main/img/t-logo.png')
,('1','logo','main/img/logo.png'),('2','logoPink','main/img/logoPink.png'),('3','inlogia','main/img/inlogia.jpg'),('4','antoinelestage','main/img/antoinelestage.jpg'),('5','artspire','main/img/artspire.jpg'),('6','cgi','main/img/cgi.jpg'),('7','deadtree','main/img/deadtree.jpg'),('8','depevt','main/img/depevt.jpg'),('9','dixon','main/img/dixon.jpg'),('10','lerecyclagepasapas','main/img/lerecyclagepasapas.jpg'),('11','pmmt','main/img/pmmt.jpg'),('12','soulofthedeadtree','main/img/soulofthedeadtree.jpg'),('13','witchatt','main/img/witchatt.jpg'),('14','zooecomuseum','main/img/zooecomuseum.jpg');

CREATE TABLE IF NOT EXISTS article(
    articleId VARCHAR(50),
    title VARCHAR(50),
    publishDate DATE,
    category TEXT(535),
    summary TEXT(535),
    fullpage TEXT(535),
    PRIMARY KEY ( articleId )
);

INSERT INTO article VALUES
('pwa','什么是 PWA','2018-05-10','前端','先说一下全名，progressive web app： 渐进式网页应用。这是谷歌推出的。','<p class="summary">我们一般写 web 应用，在 pc 上是没有缓存的，打开页面的时去请求数据。
            第二个也没有像 app 一样的小图标放在桌面，一点开就进入了应用，而是通过打开浏览器输入网址，第三个就是，不能像 app 一样给用户推送消息，像微博会跟你推送说有谁评论了你的微博之类的功能。而谷歌推出的 pwa，就是具有这些了这些特点， 使我们的 web 应用，能够像一款 app 一样使用。并且对比与 app, 它不用复杂的安装，也不用下载更新包，刷新页面就可以了</p>'),
('tensor','Core Concepts in TensorFlow.js','2018-04-10','机器学习',"TensorFlow.js is an open source WebGL-accelerated JavaScript library for machine intelligence. It brings highly performant machine learning building blocks to your fingertips, allowing you to train neural networks in a browser or run pre-trained models in inference mode. See Getting Started for a guide on installing/configuring TensorFlow.js.TensorFlow.js provides low-level building blocks for machine learning as well as a high-level, Keras-inspired API for constructing neural networks. Let\'s take a look at some of the core components of the library.",'<p class="summary">The central unit of data in TensorFlow.js is the tensor: a set of numerical values shaped into an array of one or more dimensions. A Tensor instance has a shape attribute that defines the array shape (i.e., how many values are in each dimension of the array).</p>
                <p class="summary">
                The primary Tensor constructor is the tf.tensor function:
                </p>
                <pre>
                    <code>
                        // 2x3 Tensor
                            const shape = [2, 3]; // 2 rows, 3 columns
                            const a = tf.tensor([1.0, 2.0, 3.0, 10.0, 20.0, 30.0], shape);
                            a.print(); // print Tensor values
                            // Output: [[1 , 2 , 3 ],
                            //          [10, 20, 30]]

                            // The shape can also be inferred:
                            const b = tf.tensor([[1.0, 2.0, 3.0], [10.0, 20.0, 30.0]]);
                            b.print();
                            // Output: [[1 , 2 , 3 ],
                            //          [10, 20, 30]]
                    </code>
                </pre>
                <p class="summary">
                    However, for constructing low-rank tensors, we recommend using the following functions to enhance code readability: tf.scalar, tf.tensor1d, tf.tensor2d, tf.tensor3d and tf.tensor4d.
                </p>
                <p class="summary">
                    The following example creates an identical tensor to the one above using tf.tensor2d:
                </p>
                <pre>
                    <code>
                        const c = tf.tensor2d([[1.0, 2.0, 3.0], [10.0, 20.0, 30.0]]);
                        c.print();
                        // Output: [[1 , 2 , 3 ],
                        //          [10, 20, 30]]
                    </code>
                </pre>
                <p class="summary">
                    TensorFlow.js also provides convenience functions for creating tensors with all values set to 0 (tf.zeros) or all values set to 1 (tf.ones):
                </p>
                <pre>
                    <code>
                        // 3x5 Tensor with all values set to 0
                        const zeros = tf.zeros([3, 5]);
                        // Output: [[0, 0, 0, 0, 0],
                        //          [0, 0, 0, 0, 0],
                        //          [0, 0, 0, 0, 0]]
                    </code>
                </pre>
                <p class="summary">
                    In TensorFlow.js, tensors are immutable; once created, you cannot change their values. Instead you perform operations on them that generate new tensors.
                </p>'),
('edas','EDAS再升级！全面支持Spring Cloud应用','2018-02-06','Cloud','阿里中间件（Aliware）的企业级分布式应用服务EDAS宣布再次升级，全面支持Spring Cloud应用。今后，使用Spring Cloud开源框架的应用可以实现0代码修改，即能在EDAS上平滑运行。目的是帮助更多用户有效节省开发运维成本，提升开发效率。','<p class="summary">“随着阿里中间件的迅速发展，越来越发现，用户需要的不仅仅是良好的应用服务功能，体验和广泛的适配性同样重要。于是将EDAS进行了升级，以满足使用Spring Cloud用户的需求。并且采用0代码修改方案，也就是说，应用在接入EDAS过程中几乎无感。”EDAS产品负责人倪超表示。</p><p class="summary">为了优化Spring Cloud微服务体验，就必须补充一个应用程序平台.企业级分布式应用服务 EDAS 可以提供应用生命周期管理和微服务解决方案。这样，开发人员就不再需要考虑自动部署、调度、资源管理、应用监控，服务治理等问题。</p><p class="summary">EDAS 是阿里巴巴自研的围绕应用和微服务的PaaS平台。在阿里巴巴的使用历史可以追溯到2007年，并且成功通过了每年双11海量应用的严峻考验。经过10多年的历练，目前已经成为阿里巴巴主要的分布式应用服务工具，日均调用超2千亿次。</p>'),
('highlevel_function','高阶函数，你怎么那么漂亮呢！','2018-06-06','前端','高阶函数特性：函数可以作为参数传递；函数可以作为返回值输出','<h6>函数作为参数传递</h6><p class="summary">在ajax异步请求的过程中，回调函数使用的非常频繁,在不确定请求返回的时间时，将callback回调函数当成参数传入,待请求完成后执行callback函数</p>
<p class="summary">js部分:</p>
    <pre>
        <code>
            // 回调函数
            // 异步请求
            let getInfo = function (keywords, callback) {
                $.ajax({
                    url: "http://musicapi.leanapp.cn/search", 
                     // 以网易云音乐为例
                    data: {
                        keywords
                    },
                    success: function (res) {
                        callback && callback(res.result.songs);
                    }
                })
            };
            $("#btn").on("click", function() {
                let keywords = $(this).prev().val();
                $("#loading").show();
                getInfo(keywords, getData);
            });
            // 加入回车
            $("#search_inp").on("keyup", function(e){
                if (e.keyCode === 13) {
                    $("#loading").show();
                    getInfo(this.value, getData);
                }
            });

            function getData(data) {
                if (data && data.length) {
                    let html = render(data);
                    // 初始化Dom结构
                    initDom(html, function(wrap) {
                        play(wrap);
                    });
                }
            }
            // 格式化时间戳
            function formatDuration(duration) {
                duration = parseInt(duration / 1000);     // 转换成秒
                let hour = Math.floor(duration / 60 / 60),
                    min = Math.floor((duration % 3600) / 60),
                    sec = duration % 60,
                    result = ";

                result += `${fillIn(min)}:${fillIn(sec)}`;
                return result;
            }

            function fillIn(n) {
                return n < 10 ? "0" + n : " + n;
            }

            let initDom = function (tmp, callback) {
                $(".item").remove();
                $("#loading").hide();
                $("#box").append(tmp);
                // 这里因为不知道dom合适才会被完全插入到页面中
                // 所以用callback当参数，等dom插入后再执行callback
                callback && callback(box);
            };

            let render = function (data) {
                let template = ";
                let set = new Set(data);
                data = [...set];    // 可以利用Set去做下简单的去重，可忽略这步
                for (let i = 0; i < 8; i++) {
                    let item = data[i];
                    let name = item.name;
                    let singer = item.artists[0].name;
                    let pic = item.album.picUrl;
                    let time = formatDuration(item.duration);

                    template += `
                        <div class="item">
                            <div class="pic" data-time="${time}">
                                <span></span>
                                <img src="${pic}" />
                            </div>
                            <h4>${name}</h4>
                            <p>${singer}</p>
                            <audio src="http://music.163.com/song/media/outer/url?id=${item.id}.mp3"></audio>
                        </div>`;
                }
                return template;
            };

            let play = function(wrap) {
                wrap = $(wrap);
                wrap.on("click", ".item", function() {
                    let self = $(this),
                        $audio = self.find("audio"),
                        $allAudio = wrap.find("audio");

                    for (let i = 0; i < $allAudio.length; i++) {
                        $allAudio[i].pause();
                    }
                    $audio[0].play();
                    self.addClass("play").siblings(".item").removeClass("play");
                });
            };
        </code>
    </pre>
')