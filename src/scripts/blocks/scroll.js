window.app.Scroll = () => {
   //scroll------------------------------>
   const anchors = document.querySelectorAll('.js-anchor');
   for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
         e.preventDefault();
         const id = anchor.getAttribute('href');

         document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         });
      });
   };
};

window.app.Scroll();
