/*! jQuery v1.10.2 jquery.com | jquery.org/license */

$('#menu-wrap').prepend('<div id="menu-trigger">Menu</div>');		
$("#menu-trigger").on("click", function(){
	$("#menu").slideToggle();
});

// iPad
var isiPad = navigator.userAgent.match(/iPad/i) != null;
if (isiPad) $('#menu ul').addClass('no-transition'); 

// iPhone
var isiPhone = navigator.userAgent.match(/iPhone/i) != null;
if (isiPhone) $('#menu ul').addClass('no-transition'); 

   function initialize() {
        var map_canvas = document.getElementById('map_canvas');
        var map_options = {
          center: new google.maps.LatLng(44.5403, -78.5463),
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(map_canvas, map_options)
      }
      google.maps.event.addDomListener(window, 'load', initialize);
