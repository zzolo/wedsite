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

    // Slide show
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

      $('#photo-booth-slide-show').slick({
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
        if (e.keyCode == 37) {
          $('#photo-booth-slide-show').slickPrev();
        }
        if (e.keyCode == 39) {
          $('#photo-booth-slide-show').slickNext();
        }
      });
    }

  });

})(jQuery);
