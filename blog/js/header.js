(()=>{
   var link=document.createElement("link");
   link.rel="stylesheet";
   link.href="css/header.css";
   $('head').append(link);
   axios.get('header.html')
  .then(function (response) {
    //   console.log(response.data);
    $('.bl_header').html(response.data);
  })
  .catch(function (error) {
    document.write(404);
  });
})();