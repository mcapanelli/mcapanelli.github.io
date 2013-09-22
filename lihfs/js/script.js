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

function formValidator(){
	// Make quick references to our fields
	var firstname = document.getElementById('firstname');
	var lastname = document.getElementById('lastname');
	var addr = document.getElementById('addr');
	var zip = document.getElementById('zip');
    var email = document.getElementById('email');
	
	// Check each input in the order that it appears in the form!
	if(isAlphabet(firstname, "Please enter only letters for your name")){
		if(isAlphanumeric(addr, "Numbers and Letters Only for Address")){
			if(isNumeric(zip, "Please enter a valid zip code")){
				if(madeSelection(state, "Please Choose a State")){
					if(lengthRestriction(username, 6, 8)){
						if(emailValidator(email, "Please enter a valid email address")){
							return true;
						}
					}
				}
			}
		}
	}
	
	
	return false;
	
}
