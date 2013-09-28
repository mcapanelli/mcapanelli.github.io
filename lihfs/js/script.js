/*! jQuery v1.10.2 jquery.com | jquery.org/license */
<<<<<<< HEAD
 
 $(function() {
  if ($.browser.msie && $.browser.version.substr(0,1)<7)
  {
	$('li').has('ul').mouseover(function(){
		$(this).children('ul').css('visibility','visible');
		}).mouseout(function(){
		$(this).children('ul').css('visibility','hidden');
		})
  }
}); 

$('#menu-wrap').prepend('<div id="menu-trigger">Menu</div>');		
=======
 $('#menu-wrap').prepend('<div id="menu-trigger">Menu</div>');		
>>>>>>> parent of 596f97c... fuck it
$("#menu-trigger").on("click", function(){
	$("#menu").slideToggle();
});

// iPad
var isiPad = navigator.userAgent.match(/iPad/i) != null;
if (isiPad) $('#menu ul').addClass('no-transition'); 

// iPhone
var isiPhone = navigator.userAgent.match(/iPhone/i) != null;
if (isiPhone) $('#menu ul').addClass('no-transition'); 

  