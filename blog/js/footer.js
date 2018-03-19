(()=>{
   var link=document.createElement("link");
   link.rel="stylesheet";
   link.href="css/footer.css";
   $('head').append(link);
   axios.get('footer.html')
  .then(function (response) {
    //   console.log(response.data);
    $('.bl_footer').html(response.data);
  })
  .catch(function (error) {
    document.write(404);
  });
})();