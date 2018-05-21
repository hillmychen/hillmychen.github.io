(()=>{
    let link= document.createElement("link");
    link.rel="stylesheet";
    link.href="main/css/mainimg.css";
    $('head').append(link);
    axios.get('mainimg.html')
    .then(function (response) {
        //   console.log(response.data);
        $('#container').html(response.data);
    })
    .catch(function (error) {
        document.write(404);
    });
    
})();
$('#mynav ').on("click","li",function(e) {
       let index= $(this).index();
        // console.log(index);
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
                window.location.href="./index.html";
                break;
            case 1:
                window.location.href="./blog/index.html";
                break;
            case 2:
            link.href=`${page[2]}/${page[2]}.css`;
            axios.get(`${page[2]}/${page[2]}.html`)
                    .then(function (response) {
                          console.log(response.data);
                        $('#container').html(response.data);
                    })
                    .catch(function (error) {
                        document.write(404);
                    });
                break;
            default:
            link.href=`${page[3]}/${page[3]}.css`;
                axios.get(`${page[3]}/${page[3]}.html`)
                    .then(function (response) {
                        $('#container').html(response.data);
                    })
                    .catch(function (error) {
                        document.write(404);
                    });
                break;
        }
    if($(`link[href*='${page[index]}.css']`).length==0){
        $('head').append(link);
    }
}
