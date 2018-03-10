(()=>{
   var link=document.createElement("link");
   link.rel="stylesheet";
   link.href="css/footer.css";
   $('head').append(link);
   var footer=$('.bl_footer')[0];
   footer.innerHTML=`
    <div class="footer-inner">
        </div>
   `;
})();