/**
 * Main JS file
 */


(function($) {
  $(document).ready(function() {

    // Maps
    if ($('#mapSite').size() > 0) {
      var mapSite = L.mapbox.map('mapSite', 'zzolo.gmlc0583', {
        scrollWheelZoom: false
      }).setView([45.87358, -93.77508], 18);

      var mapExtra = L.mapbox.map('mapExtras', 'zzolo.gmlj8b7g', {
        scrollWheelZoom: false
      }).setView([45.912, -93.717], 9);

      var mapExtraCities = L.mapbox.map('mapExtras-cities', 'zzolo.h6hmn0im', {
        scrollWheelZoom: false
      }).setView([44.96, -93.158], 11);
    }

    // General slide show
    if ($('#wedding-slide-show').size() > 0) {
      var $slides = $('#wedding-slide-show');
      var url;

      weddingPhotos = _.sample(weddingPhotos, 15);
      _.each(weddingPhotos, function(p, pi) {
        url = 'https://s3.amazonaws.com/hilaryalan.com/wedding/' + p;
        $('<a href="' + url + '" target="_blank"><img data-lazy="' + url + '" /></a>')
          .appendTo($slides)
          .wrap('<div>').wrap('<div>').parent().addClass('booth-image');
      });

      $slides.slick({
        slide: 'div',
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        cssEase: 'linear',
        responsive: [{
          breakpoint: 810,
          settings: {
            arrows: false
          }
        }]
      });

      $(document).on('keydown', function(e) {
        var rect = $slides[0].getBoundingClientRect();
        if (rect.top >= (0 - (rect.height * 2 / 3) ) &&
          rect.left >= (0 - 100) &&
          rect.bottom <= $(window).height() + (rect.height) &&
          rect.right <= $(window).width()) {
          if (e.keyCode == 37) {
            $slides.slickPrev();
          }
          if (e.keyCode == 39) {
            $slides.slickNext();
          }
        }
      });
    }

    // Photo booth slide show
    if ($('#photo-booth-slide-show').size() > 0) {
      var $booth = $('#photo-booth-slide-show');
      var url;

      for (var i = 137; i < 281; i++) {
        if ([139, 167, 254].indexOf(i) === -1) {
          url = 'https://s3.amazonaws.com/hilaryalan.com/photobooth/IMG_0' + i + '.JPG';
          $('<a href="' + url + '" target="_blank"><img data-lazy="' + url + '" /></a>')
            .appendTo($booth)
            .wrap('<div>').wrap('<div>').parent().addClass('booth-image');
        }
      }

      $booth.slick({
        slide: 'div',
        lazyLoad: 'ondemand',
        centerMode: true,
        slidesToShow: 5,
        cssEase: 'linear',
        responsive: [{
          breakpoint: 810,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false
          }
        },
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 1,
            arrows: false
          }
        }]
      });

      $(document).on('keydown', function(e) {
        var rect = $booth[0].getBoundingClientRect();
        if (rect.top >= (0 - (rect.height * 2 / 3) ) &&
          rect.left >= (0 - 100) &&
          rect.bottom <= $(window).height() + (rect.height) &&
          rect.right <= $(window).width()) {
          if (e.keyCode == 37) {
            $booth.slickPrev();
          }
          if (e.keyCode == 39) {
            $booth.slickNext();
          }
        }
      });
    }
  });


  // Messes with atom formatting so putting down here.
  var weddingPhotos = ['IMG_0009.jpg', 'IMG_0051.jpg', 'IMG_0053.jpg', 'IMG_0083.jpg', 'IMG_0087.jpg', 'IMG_0089.jpg', 'IMG_0096.jpg', 'IMG_0100.jpg', 'IMG_0121.jpg', 'IMG_0157.jpg', 'IMG_0163.jpg', 'IMG_0202.jpg', 'IMG_0205.jpg', 'IMG_0227.jpg', 'IMG_0250.jpg', 'IMG_0264.jpg', 'IMG_0311.jpg', 'IMG_0334.jpg', 'IMG_0349.jpg', 'IMG_0403.jpg', 'IMG_0408.jpg', 'IMG_0416.jpg', 'IMG_0445.jpg', 'IMG_0475.jpg', 'IMG_0485.jpg', 'IMG_0518.jpg', 'IMG_0526.jpg', 'IMG_0570.jpg', 'IMG_0582.jpg', 'IMG_0608.jpg', 'IMG_0613.jpg', 'IMG_0619.jpg', 'IMG_0648.jpg', 'IMG_0688.jpg', 'IMG_0710.jpg', 'IMG_0744.jpg', 'IMG_0749.jpg', 'IMG_0756.jpg', 'IMG_0778.jpg', 'IMG_0791.jpg', 'IMG_0802.jpg', 'IMG_0865.jpg', 'IMG_0867.jpg', 'IMG_0869.jpg', 'IMG_0899.jpg', 'IMG_0905.jpg', 'IMG_1018.jpg', 'IMG_1073.jpg', 'IMG_1075.jpg', 'IMG_1107.jpg', 'IMG_1171.jpg', 'IMG_1184.jpg', 'IMG_1211.jpg', 'IMG_1250.jpg', 'IMG_1268.jpg', 'IMG_1284.jpg', 'IMG_1384.jpg', 'IMG_1401.jpg', 'IMG_1444.jpg', 'IMG_1525.jpg', 'IMG_9304.jpg', 'IMG_9313.jpg', 'IMG_9350.jpg', 'IMG_9454.jpg', 'IMG_9462.jpg', 'IMG_9466.jpg', 'IMG_9496.jpg', 'IMG_9508.jpg', 'IMG_9543.jpg', 'IMG_9597.jpg', 'IMG_9598.jpg', 'IMG_9601.jpg', 'IMG_9611.jpg', 'IMG_9624.jpg', 'IMG_9713.jpg', 'IMG_9752.jpg', 'IMG_9769.jpg', 'IMG_9770.jpg', 'IMG_9799.jpg', 'IMG_9837.jpg', 'IMG_9887.jpg', 'IMG_9912.jpg', 'IMG_9939.jpg', 'IMG_9984.jpg', 'IMG_9988.jpg', 'WF3H4574.jpg', 'WF3H4579.jpg', 'WF3H4590.jpg', 'WF3H4591.jpg', 'WF3H4610.jpg', 'WF3H4618.jpg', 'WF3H4641.jpg', 'WF3H4697.jpg', 'WF3H4906.jpg', 'WF3H5019.jpg', 'WF3H5031.jpg', 'WF3H5104.jpg', 'WF3H5129.jpg', 'WF3H5160.jpg', 'WF3H5189.jpg', 'WF3H5209.jpg', 'WF3H5264.jpg', 'WF3H5274.jpg', 'WF3H5279.jpg', 'WF3H5318.jpg', 'WF3H5321.jpg', 'WF3H5523.jpg', 'WF3H5597.jpg', 'WF3H5622.jpg', 'WF3H5627.jpg', 'WF3H5635.jpg', 'WF3H5653.jpg', 'WF3H5680.jpg', 'WF3H5704.jpg', 'WF3H5718.jpg', 'WF3H5748.jpg', 'WF3H5754.jpg', 'WF3H5759.jpg', 'WF3H5795.jpg', 'WF3H5807.jpg', 'WF3H5856.jpg', 'WF3H5894.jpg', 'WF3H5919.jpg', 'WF3H5931.jpg', 'WF3H5940.jpg', 'WF3H5969.jpg', 'WF3H5998.jpg', 'WF3H6002.jpg', 'WF3H6016.jpg', 'WF3H6023.jpg', 'WF3H6027.jpg', 'WF3H6031.jpg', 'WF3H6049.jpg', 'WF3H6066.jpg', 'WF3H6116.jpg', 'WF3H6125.jpg', 'WF3H6207.jpg', 'WF3H6208.jpg', 'WF3H6216.jpg', 'WF3H6230.jpg', 'WF3H6244.jpg', 'WF3H6248.jpg', 'WF3H6262.jpg', 'WF3H6281.jpg', 'WF3H6285.jpg', 'WF3H6308.jpg', 'WF3H6317.jpg', 'WF3H6330.jpg', 'WF3H6339.jpg', 'WF3H6350.jpg', 'WF3H6359.jpg', 'WF3H6367.jpg', 'WF3H6382.jpg', 'WF3H6387.jpg', 'WF3H6392.jpg', 'WF3H6418.jpg', 'WF3H6457.jpg', 'WF3H6459.jpg', 'WF3H6475.jpg', 'WF3H6488.jpg', 'WF3H6503.jpg', 'WF3H6510.jpg', 'WF3H6532.jpg', 'WF3H6543.jpg', 'WF3H6550.jpg', 'WF3H6561.jpg', 'WF3H6573.jpg', 'WF3H6588.jpg', 'WF3H6595.jpg', 'WF3H6601.jpg', 'WF3H6610.jpg', 'WF3H6615.jpg', 'WF3H6620.jpg', 'WF3H6629.jpg', 'WF3H6635.jpg', 'WF3H6639.jpg', 'WF3H6643.jpg', 'WF3H6650.jpg', 'WF3H6702.jpg', 'WF3H6715.jpg', 'WF3H6716.jpg', 'WF3H6717.jpg', 'WF3H6719.jpg', 'WF3H6732.jpg', 'WF3H6743.jpg', 'WF3H6776.jpg', 'WF3H6806.jpg', 'WF3H6811.jpg', 'WF3H6848.jpg', 'WF3H6868.jpg', 'WF3H6877.jpg', 'WF3H6919.jpg', 'WF3H6926.jpg', 'WF3H6941.jpg', 'WF3H7011.jpg', 'WF3H7102.jpg', 'WF3H7110.jpg', 'WF3H7134.jpg', 'WF3H7167.jpg'];

})(jQuery);
