DROP DATABASE IF EXISTS main;
CREATE DATABASE main character set utf8;
USE main;
CREATE TABLE mainimg(
    imgid INT,
    imgname VARCHAR(50),
    imgurl VARCHAR(100)
);
INSERT INTO mainimg VALUES('0','t-logo','main/img/t-logo.png')
,('1','logo','main/img/logo.png'),('2','logoPink','main/img/logoPink.png'),('3','inlogia','main/img/inlogia.jpg'),('4','antoinelestage','main/img/antoinelestage.jpg'),('5','artspire','main/img/artspire.jpg'),('6','cgi','main/img/cgi.jpg'),('7','deadtree','main/img/deadtree.jpg'),('8','depevt','main/img/depevt.jpg'),('9','dixon','main/img/dixon.jpg'),('10','lerecyclagepasapas','main/img/lerecyclagepasapas.jpg'),('11','pmmt','main/img/pmmt.jpg'),('12','soulofthedeadtree','main/img/soulofthedeadtree.jpg'),('13','witchatt','main/img/witchatt.jpg'),('14','zooecomuseum','main/img/zooecomuseum.jpg');