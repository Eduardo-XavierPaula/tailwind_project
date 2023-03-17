$(function () {
    $('.mySwiper').each(function (index) {
      let swiper_opts = $(this).data();

      $(this).next('.buttons').find('.button-next').addClass('button-'+index);
      $(this).next('.buttons').find('.button-prev').addClass('button-'+index);

      swiper_opts['navigation'] = swiper_opts['navigation']
        ? swiper_opts['navigation'] :
        {
          nextEl: '.button-next.button-'+index,
          prevEl: '.button-prev.button-'+index,
        };
      swiper_opts['on'] = {
        lazyImageReady: function (swiper, slideEl, imageEl) {

          $(imageEl).removeClass('animate-pulse');
        },
      }
      var mySwiper = new Swiper(
        this,
        swiper_opts
      );
      $(this).hover(function () {
        mySwiper.autoplay.stop();
      }, function () {
        mySwiper.autoplay.start();
      });

    });
  });