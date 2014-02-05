/**
 * Main JS file
 */


(function($) {

  $(document).ready(function() {

    var mapSite = L.mapbox.map('mapSite', 'zzolo.gmlc0583', {
      scrollWheelZoom: false
    }).setView([45.87358, -93.77508], 18);

    var mapExtra = L.mapbox.map('mapExtras', 'zzolo.gmlj8b7g', {
      scrollWheelZoom: false
    }).setView([45.912, -93.717], 9);

    var mapExtraCities = L.mapbox.map('mapExtras-cities', 'zzolo.h6hmn0im', {
      scrollWheelZoom: false
    }).setView([44.96, -93.158], 11);

  });

})(jQuery);
