	function soloNumeros(e) {
		  var keynum = window.event ? window.event.keyCode : e.which;
		  if ((keynum < 48 || keynum > 57) && keynum != 13 && keynum != 8 && keynum != 0 && keynum != 46) {
		    $("#tipo").text('Solo se pueden escribir números');
		    return false;
		  }
		}