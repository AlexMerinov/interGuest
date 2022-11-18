window.app.Scrolltop = () => {
   window.onscroll = function() {scrollFunction()};

   function scrollFunction() {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
         document.getElementById("scroll-top").style.display = "block";
      } else {
         document.getElementById("scroll-top").style.display = "none";
      }
   }
};

window.app.Scrolltop();