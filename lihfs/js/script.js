 
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

  