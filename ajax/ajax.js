// function getxhr(params) {
//     var xhr=null;
//     if (window.XMLHttpRequest) {
//         xhr=new XMLHttpRequest();
//     }else{
//         xhr=new ActiveXObject('Microsoft.XMLHttp');
//     }
//     return xhr;
// }
function ajax({type,url,data,datatype}) {
    return new Promise((resolve)=>{
        xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function() {
            console.log(this.readyState);
            console.log(this.status);
            if((this.readyState===4)&&(this.status===200)){
                if (datatype==="json") {
                    resolve(JSON.parse(this.responseText));
                }else{
                    resolve(this.responseText);
                }
            }
        };
        if (type==="get") {
            url+=data?("?"+data):"?";
        }
        xhr.open(type,url,true);
        if (type==="post") {
            xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            xhr.send(data);
        }
        if(type==="get"){
            xhr.send(null);
        }
    });
}