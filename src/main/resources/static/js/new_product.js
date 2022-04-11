guardar = function(event) {

  var nombre = $("#nombre").val();

  fetch('/buscarNombre?nombre=' + nombre)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      if (result == false) {
        alert("El nombre del producto ya existe");
        return false;
      } else {
        var nombre = $("#nombre").val();
        if (nombre == "") {
          alert("No puedes dejar el campo de Nombre, vacío");
          return false;
        }
        var marca = $("#marca").val();
        if (marca == "") {
          alert("No puedes dejar el campo de Marca, vacío");
          return false;
        }
        var hechoen = $("#hechoen").val();
        if (hechoen == "") {
          alert("No puedes dejar el campo de Hecho en, vacío");
          return false;
        }
        var precio = $("#precio").val();
        if (precio == "") {
          alert("No puedes dejar el campo de Precio, vacío");
          return false;
        }
        var esCero = parseInt(precio);
        if (esCero <= 0) {
          alert("El precio debe de ser mayor a cero");
          return false;
        }
        $("#form").submit();
      }
    
	});
}
	
	function soloNumeros(e) {
		  var keynum = window.event ? window.event.keyCode : e.which;
		  if ((keynum < 48 || keynum > 57) && keynum != 13 && keynum != 8 && keynum != 0 && keynum != 46) {
		    $("#tipo").text('Solo se pueden escribir números');
		    return false;
		  }
		}