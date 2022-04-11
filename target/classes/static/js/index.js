$("#myModal").hide('true');
$("#modal_preciomayor").hide('true');

$( "#buscar").click(function() {  
  $("#myModal").show('true');
  $("#myTab").hide('true');
  $("#marca_buscar").val(""); 
  $("#body_tabla").html("");
});

$( "#cerrarx").click(function() {  
  $("#myTab").show('true');
  $("#myModal").hide('true');
});

$( "#cerrar_precio").click(function() {  
  $("#myTab").show('true');
  $("#modal_preciomayor").hide('true');
});



$('#buscar_marca').click(function() {
        
    var marca = $("#marca_buscar").val();
    var html = '';        	
    
    fetch('/buscarPorMarca?marca='+marca)
    .then((response) => {
	    return response.json();
	  })
	  .then((result) => {	    		  		  
         	var i;
	           for (i = 0; i < result.length; i++) { 
	           console.log(html);        	 
	           html += '<tr>' +
	             '<td>' + result[i].id + '</td>' +
	             '<td>' + result[i].name + '</td>' +
	             '<td>' + result[i].brand + '</td>' +
	             '<td>' + result[i].madein + '</td>' +
	             '<td>' + result[i].price + '</td>' +
	             '<tr>';
	         }	 	              
         $('#body_tabla').html(html);
	    });  
});




$( "#precio_mayor").click(function() {  
  
  $("#myTab").hide('true');
  $("#modal_preciomayor").show('true');
	
	fetch('/precioMayor')
	  .then((response) => {
	    return response.json();
	  })
	  .then((result) => {	    
	    	var html = '';
         	var i;
	           html += '<tr>' +
	             '<td>' + result[0].id + '</td>' +
	             '<td>' + result[0].name + '</td>' +
	             '<td>' + result[0].brand + '</td>' +
	             '<td>' + result[0].madein + '</td>' +
	             '<td>' + result[0].price + '</td>' +
	             '</tr>';	         
	         $('#body_tabla_preciomayor').html(html);
	    });
});