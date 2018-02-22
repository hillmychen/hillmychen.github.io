// 游戏初始化
var canvas= $("#flyer_container")[0];
var context=canvas.getContext("2d");
const start=0;
const starting=1;
const running=2;
const paused=3;
const gameover=4;
var state=start;
var HEIGHT=canvas.height;
var WIDTH=canvas.width;
var score=0;
//1.0 游戏开始阶段
//背景图片信息
var bgImg=new Image();
bgImg.src ="img/background.png";
var skyImg={
    imgs:bgImg,
    width:480,
    height:852
};
//背景图片构造器
function DrawBg(config) {
    this.imgs=config.imgs;
    this.height=config.height;
    this.width=config.width;
    this.y1=-this.height;
    this.y2=0;
    var timer=0;
    this.draw=()=>{
                context.drawImage(this.imgs,0,this.y1);
                context.drawImage(this.imgs,0,this.y2);
    };
    this.step=()=>{
        timer++;
        if (timer%5==0) {
                this.y1++;
                this.y2++;
            if (this.y1>HEIGHT) {
                this.y1=-this.height;
            }
            if (this.y2 > HEIGHT) {
                this.y2 = -this.height;
            }
        }
    }
}
var logo=new Image();
logo.src ="img/shoot_copyright_en.png";
//绘制背景图片
var skyimg=new DrawBg(skyImg);

//2.过度阶段
canvas.onclick=()=>{
    if(state==start){
        state=starting;
    }
};
//加载动画图片
var loadings=[];
loadings[0]=new Image();
loadings[0].src ="img/game_loading1.png";
loadings[1] = new Image();
loadings[1].src = "img/game_loading2.png";
loadings[2] = new Image();
loadings[2].src = "img/game_loading3.png";
loadings[3] = new Image();
loadings[3].src = "img/game_loading4.png";
//初始化图片数据
var LOADING={
    imgs:loadings,
    width:186,
    height:38,
    sum:loadings.length
};
//创建动画图片的构造器
function Loading(config) {
    this.imgs=config.imgs;
    this.width=config.width;
    this.height=config.height;
    this.sum=config.sum;
    this.index=0;  
    this.timer=0;
    this.draw=()=>{
        context.drawImage(this.imgs[this.index],0,HEIGHT-this.height);
    } ;
    this.step=()=>{
        this.timer++;
        if (this.timer%20==0) {
            this.index++;
            if (this.index==4) {
                state=running;
            }
        }
    }
}

//绘制动画
var loading=new Loading(LOADING);
//第三阶段--运行
//我方飞机的逻辑
var flyerImgs=[];
flyerImgs[0]=new Image();
flyerImgs[0].src = "img/hero1.png";
flyerImgs[1]=new Image();
flyerImgs[1].src = "img/hero2.png";
flyerImgs[2] = new Image();
flyerImgs[2].src = "img/hero_blowup_n1.png";
flyerImgs[3] = new Image();
flyerImgs[3].src = "img/hero_blowup_n2.png";
flyerImgs[4] = new Image();
flyerImgs[4].src = "img/hero_blowup_n3.png";
flyerImgs[5] = new Image();
flyerImgs[5].src = "img/hero_blowup_n4.png";
var life=5;
var FLYER={
    imgs:flyerImgs,
    width:99,
    height:124,
    sum:flyerImgs.length,
    flyer_index:2
};
function Flyer(config) {
    this.imgs=config.imgs;
    this.width=config.width;
    this.height=config.height;
    this.sum=config.sum;
    this.flyer_index=config.flyer_index;
    this.index=0;
    this.timer=0;
    this.bomb=false;
    this.flyer_index=config.flyer_index;
    this.x=(WIDTH-this.width)/2;
    this.y=HEIGHT-this.height-30;
    this.draw=()=>{
        context.drawImage(this.imgs[this.index],this.x,this.y);
    }
    this.step=()=>{
        if (this.bomb) {
            this.index++;
            if (this.index==this.sum) {
                if (life>0) {
                     flyer=new Flyer(FLYER);
                }else{
                    state=gameover;
                }
                 this.index=this.sum-1;//处理索引越界，当this.draw运行速度更快时
            }
        }else{
            this.index++;
            this.index=this.index%2;
        }
    }
    this.shoot=()=>{
        this.timer++;
        if (this.timer%20==0) {
            var bullet=new Bullet(BULLET);
            bullets[bullets.length]=bullet;
        }
    }
    this.bang=()=>{
        life--;
        this.bomb=true;
        this.index=this.flyer_index;
    }
}
var flyer=new Flyer(FLYER);
//我方飞机的鼠标移动
canvas.onmousemove=event=>{
    if (state==running) {
        flyer.x=event.offsetX-flyer.width/2;
        flyer.y=event.offsetY-flyer.width/2;
    }
};
//完成子弹的逻辑 
//创建子弹的构造器
var bullet=new Image();
bullet.src="img/bullet1.png";
var BULLET={
    imgs:bullet,
    width:9,
    height:21
};
function Bullet(config) {
    this.imgs=config.imgs;
    this.width=config.width;
    this.height=config.height;
    this.x=flyer.x+flyer.width/2-this.width/2-6;
    this.y=flyer.y-this.height-10;
    this.deleted=false;
    this.draw=()=>{
        context.drawImage(this.imgs,this.x,this.y);
        context.drawImage(this.imgs, this.x+15, this.y);
    }
    this.step=()=>{
        this.y-=3;
    }
    this.bang=()=>{
        this.deleted=true;
    }
}
var bullets=[];
function drawAll() {
    for (let index = 0; index < bullets.length; index++) 
    {
        bullets[index].draw();
    }
}
function stepAll() {
    for (let index = 0; index < bullets.length; index++) {
        bullets[index].step();
    }
}
function deleBullets() {
    for (let index = 0; index < bullets.length; index++) {
        if (bullets[index].y<=-BULLET.height || bullets[index].deleted) {
           bullets.splice(index,1);
        }
    }
}
//定义敌军飞机逻辑
var enemies1=[];
enemies1[0]=new Image;
enemies1[0].src ="img/enemy1.png";
enemies1[1] = new Image;
enemies1[1].src = "img/enemy1_down1.png";
enemies1[2] = new Image;
enemies1[2].src = "img/enemy1_down2.png";
enemies1[3] = new Image;
enemies1[3].src = "img/enemy1_down3.png";
enemies1[4] = new Image;
enemies1[4].src = "img/enemy1_down4.png";
var enemies2=[];
enemies2[0] = new Image;
enemies2[0].src = "img/enemy2.png";
enemies2[1] = new Image;
enemies2[1].src = "img/enemy2_down1.png";
enemies2[2] = new Image;
enemies2[2].src = "img/enemy2_down2.png";
enemies2[3] = new Image;
enemies2[3].src = "img/enemy2_down3.png";
enemies2[4] = new Image;
enemies2[4].src = "img/enemy2_down4.png";
var enemies3=[];
enemies3[0] = new Image;
enemies3[0].src = "img/enemy3_n1.png";
enemies3[1] = new Image;
enemies3[1].src = "img/enemy3_n2.png";
enemies3[2] = new Image;
enemies3[2].src = "img/enemy3_down1.png";
enemies3[3] = new Image;
enemies3[3].src = "img/enemy3_down2.png";
enemies3[4] = new Image;
enemies3[4].src = "img/enemy3_down3.png";
enemies3[5] = new Image;
enemies3[5].src = "img/enemy3_down4.png";
enemies3[6] = new Image;
enemies3[6].src = "img/enemy3_down5.png";
enemies3[7] = new Image;
enemies3[7].src = "img/enemy3_down6.png";
var ENEMY1={
    imgs:enemies1,
    width:57,
    height:51,
    sum:enemies1.length,
    bombindex:1,
    type:0,
    life:1,
    score:1
};
var ENEMY2 = {
    imgs: enemies2,
    width: 69,
    height: 95,
    sum: enemies2.length,
    bombindex: 1,
    type: 1,
    life:5,
    score:3
};
var ENEMY3 = {
    imgs: enemies3,
    width: 169,
    height: 258,
    sum: enemies3.length,
    bombindex: 2,
    type: 2,
    life:10,
    score:5
};
//敌方飞机构造器
function Enemies(config) {
    this.imgs=config.imgs;
    this.width=config.width;
    this.height=config.height;
    this.sum=config.sum;
    this.type=config.type;
    this.life=config.life;
    this.score=config.score;
    this.bomb=false;
    this.deleted=false;
    this.bombindex=config.bombindex;
    this.x=Math.random()*(WIDTH-this.width);
    this.y=-this.height;
    this.index=0;
    this.timer=0;
    this.draw=()=>{
        context.drawImage(this.imgs[this.index],this.x,this.y);
    }
    this.step =()=>{
        this.timer++;
        if (this.bomb) {
            if (this.timer%5==0) {
                this.index++;
            if (this.index==this.sum) {
                 score+=this.score;
                 this.deleted=true;
                 this.index=this.sum-1;
                 }
            }
        }else{
                switch (this.type) {
                case 0:
                        this.y++;
                    break;
                case 1:
                    if (this.timer%2==0) {
                        this.y++;
                    }
                    break;
                case 2:
                    this.index++;
                    this.index=this.index%2;
                    if (this.timer % 6 == 0) {
                        this.y++;
                    }
                    break;
            }
        }
    }
    //创建检查敌方飞机是否被撞击
    this.hit=(hitflyer)=>{
        return hitflyer.x+hitflyer.width>this.x &&
               hitflyer.x<this.x+this.width &&
               hitflyer.height+hitflyer.y>this.y &&
               hitflyer.y<this.y+this.height 
    }
    //定义撞击·后·爆破动画
    this.bang=()=>{
        this.life--;
        if (this.life==0) {
            this.bomb=true;
            this.index=this.bombindex;
        }
    }
}
var enemies=[];
var timer=0;
function createEnemies() {
    var num=Math.floor(Math.random()*100)   ;
    // console.log(num);
    if (num<=75) {
        var enemy=new Enemies(ENEMY1);
        enemies[enemies.length]=enemy;
    }else if(num<90){
        var enemy = new Enemies(ENEMY2);
        enemies[enemies.length] = enemy;
    }else{
        if (enemies.length>0 && enemies[0].type!=2) {
            var enemy = new Enemies(ENEMY3);
            enemies.splice(0,0,enemy);
        } 
    }
}
function drawEnemies(params) {
        for (let index = 0; index < enemies.length; index++) {
            enemies[index].draw();
        }
}
function stepEnemies(params) {
    for (let index = 0; index < enemies.length; index++) {
        enemies[index].step();
    }
}
function deleteEnemies(params) {
    for (let index = 0; index < enemies.length; index++) {
        if (enemies[index].y>HEIGHT || enemies[index].deleted) {
        enemies.splice(index,1);
    }
    }
}
//检查飞机被撞击的函数
function checkHit(params) {
    for (let index = 0; index < enemies.length; index++) {
        let enemy=enemies[index];
        if(enemy.hit(flyer)){//我方飞机撞击敌方
            if (!enemy.bomb && !flyer.bomb) {//如果不处理，bang方法就会连续执行
            //如果都没执行过，就执行一次
                enemy.bang();//敌方飞机被撞后执行爆炸
                //我方飞机被撞后
                flyer.bang();
            }
        }
        for (let index = 0; index < bullets.length; index++) {
            var bullet=bullets[index];
            if (enemy.hit(bullet)) {//子弹射击敌方飞机
                if (!enemy.bomb && !bullet.deleted) {
                    bullet.bang();
                    enemy.bang();
                }
            }
        }
    }
}
//绘制得分和我方生命值
function drawText() {
    context.font= "bold 22px 微软雅黑";
    context.fillText("SCORE: "+score,10,30);
    context.fillText("LIFE: "+life,400,30);
}
//暂停阶段
var pausedImg=new Image();
pausedImg.src = "img/game_pause_pressed.png";
canvas.onmouseout=()=>{
    if (state==running) {
        state=paused;
        
    }
}
canvas.onmouseover=()=>{
    if (state==paused) {
        state=running;
    }
}
//gameover阶段
function gameOver(params) {
    context.font="bold 46px 微软雅黑";
    context.strokeText("GAME  OVER",WIDTH/2-150,HEIGHT/2-23);
}
//定义游戏控制器
setInterval(() => {
    skyimg.draw();
    skyimg.step();
    switch (state) {
        case start:
            context.drawImage(logo, 20, 100);
            break;
        case starting:
            loading.draw();
            loading.step();
            break;
        case running:
            if ((++timer)%50==0) {
                createEnemies();
            }
            drawEnemies();
            stepEnemies();
            checkHit();
            deleteEnemies();
            flyer.shoot();
            drawAll();
            stepAll();
            deleBullets();
            flyer.draw();
            flyer.step();
            drawText();
            break;
        case paused:
            drawEnemies();
            drawAll();
            flyer.draw();
            drawText();
            context.drawImage(pausedImg, WIDTH / 2 - 30, HEIGHT / 2 - 30);
            break;
        case gameover:
             drawEnemies();
             drawAll();
             flyer.draw();
             drawText();
             gameOver();
            break;
    }
}, 10);
