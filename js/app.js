/**
 * Main JS file
 */


(function($) {

  $(document).ready(function() {

    var mapSite = L.mapbox.map('mapSite', 'zzolo.gmlc0583', {
      scrollWheelZoom: false,
      zoomControl: false
    }).setView([45.87358, -93.77508], 18);

    var mapExtra = L.mapbox.map('mapExtras', 'zzolo.gmlj8b7g', {
      scrollWheelZoom: false
    }).setView([45.493, -93.340], 8);

  });

})(jQuery);