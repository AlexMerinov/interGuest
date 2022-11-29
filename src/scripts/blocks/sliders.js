window.app.Sliders = () => {

   // const sliders = document.querySelectorAll('.gallery__sliders .gallery-main');

   // if (sliders) {
   //    sliders.forEach(function (slider) {

   //    });
   // } 

   new Swiper('.go-js-gallery-slider-main ', {
      slidesPerView: 1,
      spaceBetween: 20,
   
      thumbs: {
         swiper: {
            el: '.go-js-gallery-slider-preview',
            slidesPerView: 2,
            spaceBetween: 15,
            mousewheel: {
               senstivity: 1,

               eventsTarget: ".gallery-preview"
            },
            scrollbar: {
               el: '.gallery-preview__scrollbar',
               draggable: true,
             },
            breakpoints: {
               768: {
                  direction: 'vertical',
                  spaceBetween: 20,
               },
               1360: {
                  direction: 'vertical',
                  spaceBetween: 30,
               }
            }
         }
      }
   });

   new Swiper('.go-js-gallery-slider-popup-1', {
      slidesPerView: 1,
      spaceBetween: 20,
   
      thumbs: {
         swiper: {
            el: '.go-js-gallery-slider-popup-2',
            slidesPerView: 2,
            spaceBetween: 15,
            navigation: {
               nextEl: '.gallery-preview__btn--next',
               prevEl: '.gallery-preview__btn--prev',
             },
            breakpoints: {
               768: {
                  slidesPerView: 4,
                  spaceBetween: 20,
               },
            }
         }
      }
   });

};

window.app.Sliders();