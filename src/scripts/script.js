document.addEventListener("DOMContentLoaded", () => {

   window.app = {};

   // Plugins
   @@include('./plugins/swiper.js');
   @@include('./plugins/imask.js');
   @@include('./plugins/glightbox.min.js');
   @@include('./plugins/MorphSVGPlugin.min.js');
   @@include('./plugins/TweenMax.js');

   //Blocks

   @@include('./blocks/burger.js');
   @@include('./blocks/scroll.js');
   @@include('./blocks/sliders.js');
   @@include('./blocks/counter.js');
   @@include('./blocks/map.js');
   @@include('./blocks/init.js');
   @@include('./blocks/popup.js');
   @@include('./blocks/scroll-top.js');
   @@include('./blocks/datepicker-init.js');
}); 